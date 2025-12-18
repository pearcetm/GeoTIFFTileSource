import { fromBlob, fromUrl, globals, Pool } from "geotiff";
import { DeferredPromise } from "./utils/DeferredPromise.js";
import { parsePerkinElmerChannels } from "./formats/perkinElmer.js";
import { installRawTiffPlugin } from "./formats/tiff.js";

/**
 * Enable GeoTIFF Tile Source for OpenSeadragon.
 *
 * The GeoTIFFTileSource uses the GeoTIFF.js library to serve tiles from local file or a remote URL.
 * Remote files require HTTP range requests to be enabled on the server.
 *
 * @param {OpenSeadragon} OpenSeadragon - The OpenSeadragon class.
 */
export const enableGeoTIFFTileSource = (OpenSeadragon) => {

  if (OpenSeadragon.version.major < 4 || (OpenSeadragon.version.major === 4 && OpenSeadragon.version.minor < 1)) {
    // This class uses downloadTileStart API added in OSD v 4.1
    // The old monkey patch does not add this functionality, nor it is up to date with latest OSD style -> removed
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  }

  // Ensure RawTIFF converter plugin is installed (works on both OSD v6+ and legacy versions).
  // For OSD v6+ it registers DataTypeConverter edges; for older versions we call the API manually.
  const RawTiffAPI = OpenSeadragon.RawTiffPlugin || installRawTiffPlugin(OpenSeadragon, {
    workerPool: {
      // If your bundler cannot resolve this URL, pass a custom createWorker here.
      createWorker: () => new Worker(new URL("./formats/tiff.worker.js", import.meta.url), { type: "module" }),
    },
  });

  let tsCounter = 0;
  /**
   * @class GeoTIFFTileSource
   * @memberof OpenSeadragon
   * @extends OpenSeadragon.TileSource
   * @param {File|String|Object} input A File object, url string, or object with fields for pre-loaded GeoTIFF and GeoTIFFImages objects
   * @param {Object} opts Options object. To do: how to document options fields?
   *                 opts.logLatency: print latency to fetch and process each tile to console.log or the provided function
   *                 opts.tileWidth: tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
   *                 opts.tileHeight:tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
   *
   * @property {Object} GeoTIFF The GeoTIFF.js representation of the underlying file. Undefined until the file is opened successfully
   * @property {Array}  GeoTIFFImages Array of GeoTIFFImage objects, each representing one layer. Undefined until the file is opened successfully
   * @property {Bool}   ready set to true once all promises have resolved
   * @property {Object} promises
   * @property {Number} dimensions
   * @property {Number} aspectRatio
   * @property {Number} tileOverlap
   * @property {Number} tileSize
   * @property {Array}  levels
   */
  class GeoTIFFTileSource extends OpenSeadragon.TileSource {
    /**
     * Create a shared GeoTIFF Pool for all GeoTIFFTileSources to use.
     *
     * If a shared pool is not created, every page of every GeoTIFF will create its own pool,
     * which can quickly lead to browser crashes.
     *
     * @static sharedPool
     * @type {Pool}
     */
    static sharedPool = new Pool();

    constructor(input, opts = { logLatency: false }) {
      super();

      let self = this;

      this.input = input;
      this.options = opts;
      this.channel = input?.channel ?? null;

      this._ready = false;
      this._pool = GeoTIFFTileSource.sharedPool;
      this._tileSize = 256;

      // keep a reference to which instance we are; this will be unique for different sources.
      this._tsCounter = tsCounter;
      // increment the "global" variable
      tsCounter += 1;

      if (input.GeoTIFF && input.GeoTIFFImages) {
        this.promises = {
          GeoTIFF: Promise.resolve(input.GeoTIFF),
          GeoTIFFImages: Promise.resolve(input.GeoTIFFImages),
          ready: new DeferredPromise(),
        };
        this.GeoTIFF = input.GeoTIFF;
        this.imageCount = input.GeoTIFFImages.length;
        this.GeoTIFFImages = input.GeoTIFFImages;

        this.setupLevels();
      } else {
        this.promises = {
          GeoTIFF: input instanceof File ? fromBlob(input) : fromUrl(input),
          GeoTIFFImages: new DeferredPromise(),
          ready: new DeferredPromise(),
        };
        this.promises.GeoTIFF.then((tiff) => {
          self.GeoTIFF = tiff;
          return tiff.getImageCount();
        })
          .then((count) => {
            self.imageCount = count;
            let promises = [...Array(count).keys()].map((index) => self.GeoTIFF.getImage(index));
            return Promise.all(promises);
          })
          .then((images) => {
            self.GeoTIFFImages = images;
            self.promises.GeoTIFFImages.resolve(images);
            this.setupLevels();
          })
          .catch((error) => {
            console.error("Re-throwing error with GeoTIFF:", error);
            throw error;
          });
      }
    }

    static async getAllTileSources (input, opts) {
      const fileExtension =
        input instanceof File ? input.name.split(".").pop() : input.split(".").pop();

      let tiff = input instanceof File ? fromBlob(input) : fromUrl(input);

      return tiff
        .then((t) => {
          tiff = t;
          return t.getImageCount();
        })
        .then((c) =>
          Promise.all([...Array(c).keys()].map(async (index) => (await tiff).getImage(index)))
        )
        .then((images) => {
          // Filter out images with photometricInterpretation.TransparencyMask
          images = images.filter(
            (image) =>
              image.fileDirectory.photometricInterpretation !==
              globals.photometricInterpretations.TransparencyMask
          );

          // Sort by width (largest first), then detect pyramids
          images.sort((a, b) => b.getWidth() - a.getWidth());

          // find unique aspect ratios (with tolerance to account for rounding)
          const tolerance = 0.015;

          // Organize images into sets based on aspect ratio as well as
          // macro thumbnails and labels according to the Aperio SVS format:
          //   https://web.archive.org/web/20120420105738/http://www.aperio.com/documents/api/Aperio_Digital_Slides_and_Third-party_data_interchange.pdf (pg 14)
          const aspectRatioSets = images.reduce((accumulator, image) => {
            const r = image.getWidth() / image.getHeight();
            let s = ""; // Initialize with no description

            // Check whether the ImageDescription exists as a field just in case
            if (image.fileDirectory.ImageDescription){
              // Split out part of the description that signifies its type for identification
              s = image.fileDirectory.ImageDescription.split("\n")[1] ?? "";
            }

            const exists = accumulator.filter(
              (set) => ((Math.abs(1 - set.aspectRatio / r) < tolerance)
                && !(s?.includes("macro") || s?.includes("label"))) // Separate out macro thumbnails and labels
            );
            if (exists.length === 0) {
              let set = {
                aspectRatio: r,
                images: [image],
              };
              accumulator.push(set);
            } else {
              exists[0].images.push(image);
            }
            return accumulator;
          }, []);

          const imageSets = aspectRatioSets.map((set) => set.images);

          return imageSets.map((images, index) => {
            // Check if QPTIFF
            if (index !== 0) {
              return new OpenSeadragon.GeoTIFFTileSource(
                {
                  GeoTIFF: tiff,
                  GeoTIFFImages: images,
                },
                opts
              );
            }

            switch (fileExtension) {
              case "qptiff":
                const channels = parsePerkinElmerChannels(images);
                return Array.from(channels.values()).map((channel, index) => {
                  return new OpenSeadragon.GeoTIFFTileSource(
                    {
                      GeoTIFF: tiff,
                      GeoTIFFImages: channel.images,
                      channel: {
                        name: channel.name,
                        color: channel.color,
                      },
                    },
                    opts
                  );
                });

              default:
                return new OpenSeadragon.GeoTIFFTileSource(
                  {
                    GeoTIFF: tiff,
                    GeoTIFFImages: images,
                  },
                  opts
                );
            }
          });
        });
    }

    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    getTileWidth(level) {
      if (this.levels.length > level) {
        return this.levels[level].tileWidth;
      }
    }

    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    getTileHeight(level) {
      if (this.levels.length > level) {
        return this.levels[level].tileHeight;
      }
    }

    /**
     * @function
     * @param {Number} level
     */
    getLevelScale(level) {
      let levelScale = NaN;
      if (this.levels.length > 0 && level >= this.minLevel && level <= this.maxLevel) {
        levelScale = this.levels[level].width / this.levels[this.maxLevel].width;
      }
      return levelScale;
    }

    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    getTileHashKey(level, x, y) {
      return `geotiffTileSource${this._tsCounter}_${this?.channel?.name ?? ""}_${level}_${x}_${y}`;
    }

    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(levelnum, x, y) {
      return `${levelnum}/${x}_${y}`;
    }

    downloadTileStart(context) {
      const isV6 = !!OpenSeadragon.converter && typeof context.fail === "function";
      const request = "" + context.src;

      // Abort wiring (OSD < v6 used context.src; v6+ prefers context.userData)
      const abortController = new AbortController();
      if (context.userData) context.userData.abortController = abortController;

      const level = this.levels[context.tile.level];
      this.regionToTiffRaster(level, context.tile.x, context.tile.y, abortController.signal)
        .then(async (tiffRaster) => {
          if (isV6) {
            // OSD v6+: hand off typed data; renderer/converter graph will take it from here.
            context.finish(tiffRaster, request, tiffRaster.getType());
            return;
          }

          // OSD < v6: manually convert via tiff.js API to something legacy OSD can render (canvas is safest).
          const ctx = await Promise.resolve(RawTiffAPI.rasterToContext2d(context.tile, tiffRaster));
          context.finish(ctx.canvas);
        })
        .catch((err) => {
          const msg = err && err.message ? err.message : String(err);
          if (isV6) context.fail(msg);
          else context.finish(null, request, msg);
        });
    }

    downloadTileAbort(context) {
      const ctrl = (context.userData && context.userData.abortController);
      if (ctrl) ctrl.abort();
      else $.console.error("Could not abort download: controller not available.");
    }

    setupComplete() {
      this._ready = true;
      this.promises.ready.resolve();

      this.raiseEvent("ready", { tileSource: this });
    }

    setupLevels() {
      if (this._ready) {
        return;
      }

      let images = this.GeoTIFFImages.sort((a, b) => b.getWidth() - a.getWidth());

      // default to 256x256 tiles, but defer to options passed in
      let defaultTileWidth = this._tileSize;
      let defaultTileHeight = this._tileSize;

      // The first image is the highest-resolution view (at least, with the largest width)
      let fullWidth = images[0].getWidth();
      this.width = fullWidth;

      let fullHeight = images[0].getHeight();
      this.height = fullHeight;

      this.tileOverlap = 0;
      this.minLevel = 0;
      this.aspectRatio = this.width / this.height;
      this.dimensions = new OpenSeadragon.Point(this.width, this.height);

      // a valid tiled pyramid has strictly monotonic size for levels
      let pyramid = images.reduce(
        (acc, im) => {
          if (acc.width !== -1) {
            acc.valid = acc.valid && im.getWidth() < acc.width; // ensure width monotonically decreases
          }
          acc.width = im.getWidth();
          return acc;
        },
        { valid: true, width: -1 }
      );

      if (pyramid.valid) {
        this.levels = images.map((image) => {
          let w = image.getWidth();
          let h = image.getHeight();

          return {
            width: w,
            height: h,
            tileWidth: this.options.tileWidth || image.getTileWidth() || defaultTileWidth,
            tileHeight: this.options.tileHeight || image.getTileHeight() || defaultTileHeight,
            image: image,
            scaleFactor: 1,
          };
        });
        this.maxLevel = this.levels.length - 1;
      } else {
        let numPowersOfTwo = Math.ceil(
          Math.log2(Math.max(fullWidth / defaultTileWidth, fullHeight / defaultTileHeight))
        );
        let levelsToUse = [...Array(numPowersOfTwo).keys()].filter((v) => v % 2 == 0); //use every other power of two for scales in the "pyramid"

        this.levels = levelsToUse
          .map((levelnum) => {
            let scale = Math.pow(2, levelnum);

            const levelImages = images.filter((image) => {
              const prevScale = Math.pow(2, levelnum - 1);
              // All images with correct resolution
              return prevScale >= 0
                ? image.getWidth() * prevScale < fullWidth && image.getWidth() * scale >= fullWidth
                : image.getWidth() * scale >= fullWidth;
            });

            if (levelImages.length === 0) {
              return null;
            }

            const image = levelImages[0];

            // let image = images.filter((im) => im.getWidth() * scale >= fullWidth).slice(-1)[0]; // smallest image with sufficient resolution
            return {
              width: fullWidth / scale,
              height: fullHeight / scale,
              tileWidth: this.options.tileWidth || image.getTileWidth() || defaultTileWidth,
              tileHeight: this.options.tileHeight || image.getTileHeight() || defaultTileHeight,
              image: image,
              scaleFactor: (scale * image.getWidth()) / fullWidth,
            };
          })
          .filter((level) => level !== null);
        this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((a, b) => a.width - b.width);

      this._tileWidth = this.levels[0].tileWidth;
      this._tileHeight = this.levels[0].tileHeight;

      this.setupComplete();
    }


    regionToTiffRaster(level, x, y, abortSignal) {
      const startTime = this.options.logLatency && Date.now();

      const tileWidth = level.tileWidth;
      const tileHeight = level.tileHeight;

      const window = [x * tileWidth, y * tileHeight, (x + 1) * tileWidth, (y + 1) * tileHeight].map(
        (v) => v * level.scaleFactor
      );

      const image = level.image;
      const isQPTIFF = image.fileDirectory?.["Software"]?.startsWith("PerkinElmer-QPI");

      // For QPTIFF we keep channel color as a *hint* (conversion/renderer decides what to do with it).
      let tintRGB = null;
      if (isQPTIFF && image.fileDirectory?.["ImageDescription"]) {
        try {
          const qptiffXML = new DOMParser().parseFromString(image.fileDirectory["ImageDescription"], "text/xml");
          const channelColor = qptiffXML.querySelector("Color")?.textContent;
          tintRGB = channelColor ? channelColor.split(",").map((v) => parseInt(v, 10)) : null;
        } catch {
          tintRGB = null;
        }
      }

      // Key point: do NOT do raster -> RGBA conversion here.
      // Read planar rasters (interleave:false) and wrap as a tiffRaster type.
      return image.readRasters({
        interleave: false,
        window,
        pool: this._pool,
        width: tileWidth,
        height: tileHeight,
        signal: abortSignal,
      }).then((rasters) => {
        const bands = Array.isArray(rasters) ? rasters : [rasters];

        const fd = image.fileDirectory || {};
        const tiffRaster = new RawTiffAPI.TiffRaster({
          width: tileWidth,
          height: tileHeight,
          bands,
          samplesPerPixel: Math.max(fd.SamplesPerPixel || 0, bands.length),
          bitsPerSample: fd.BitsPerSample || [8],
          sampleFormat: fd.SampleFormat || null,
          photometricInterpretation: fd.PhotometricInterpretation,
          colorMap: fd.ColorMap || null,
          fileDirectory: fd,
          hints: {
            ...(this.channel ? { channel: this.channel } : {}),
            ...(tintRGB ? { tintRGB } : {}),
          },
        });

        this.options.logLatency &&
        (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
          "Tile decode latency (ms):",
          Date.now() - startTime
        );

        return tiffRaster;
      });
    }

  }

  // Attach the class to the OpenSeadragon namespace
  OpenSeadragon.GeoTIFFTileSource = GeoTIFFTileSource;
};

// Run an IIFE to attach the GeoTIFFTileSource to the OpenSeadragon namespace
// IF OpenSeadragon is available in the global scope
(function (global, factory) {
  // Skip if currently in ESM mode
  if (typeof exports === "undefined") {
    return;
  }

  // Check if OpenSeadragon is available
  if (typeof global.OpenSeadragon !== "undefined") {
    // Attach the GeoTIFFTileSource to the OpenSeadragon namespace
    factory(global.OpenSeadragon);
  }
})(typeof window !== "undefined" ? window : this, enableGeoTIFFTileSource);
