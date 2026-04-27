import { fromBlob, fromUrl, globals, Pool } from "geotiff";
import { PromiseWrapper } from "./utils/PromiseWrapper.js";
import { logOnce } from "./utils/consoleOnce.js"
import { parsePerkinElmerChannels } from "./formats/perkinElmer.js";
import { installRawTiffPlugin } from "./formats/tiff.js";

import * as gtiff from "geotiff";
window.GeoTIFF = gtiff;
/**
 * Enable GeoTIFF Tile Source for OpenSeadragon.
 *
 * The GeoTIFFTileSource uses the GeoTIFF.js library to serve tiles from local file or a remote URL.
 * Remote files require HTTP range requests to be enabled on the server.
 *
 * @param {OpenSeadragon} OpenSeadragon - The OpenSeadragon class.
 * @param {Object} options - Options object.
 * @param {String} options.workerUrl - URL of the worker script to use for GeoTIFF conversion. Defaults to the worker script bundled with this library.
 * @param {Object} options.workerPool - Worker pool to use for GeoTIFF conversion. Defaults to a new pool created for this instance.
 */
export const enableGeoTIFFTileSource = (OpenSeadragon, options={}) => {

  if (OpenSeadragon.version.major < 4 || (OpenSeadragon.version.major === 4 && OpenSeadragon.version.minor < 1)) {
    // This class uses downloadTileStart API added in OSD v 4.1
    // The old monkey patch does not add this functionality, nor it is up to date with latest OSD style -> removed
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  }

  const {
    workerUrl,     // optional: string or URL
    workerPool,    // optional: { createWorker: () => Worker }
  } = options;

  const defaultCreateWorker = () => {
    // If caller passed a specific URL, use it directly
    if (workerUrl) {
      // workerUrl can be a string or URL object
      return new Worker(workerUrl, { type: "module" });
    }

    // Fallback: original behavior – worker lives in ./formats/ next to this file
    return new Worker(new URL("./formats/tiff.worker.js", import.meta.url), {
      type: "module",
    });
  };

  // Ensure RawTIFF converter plugin is installed (works on both OSD v6+ and legacy versions).
  // For OSD v6+ it registers DataTypeConverter edges; for older versions we call the API manually.
  const effectiveWorkerPool =
    workerPool || {
      createWorker: defaultCreateWorker,
    };

  // Ensure RawTIFF converter plugin is installed.
  const RawTiffAPI = OpenSeadragon.RawTiffPlugin || installRawTiffPlugin(OpenSeadragon, {
    workerPool: effectiveWorkerPool,
  });

  let tsCounter = 0;
  /**
   * @class GeoTIFFTileSource
   * @memberof OpenSeadragon
   * @extends OpenSeadragon.TileSource
   * @param {File|String|Object} input A File object, url string, or object with fields for pre-loaded GeoTIFF and GeoTIFFImages objects
   * @param {Object} opts Options object. To do: how to document options fields?
   *                 opts.logLatency: print latency to fetch and process each tile to console.log or the provided function
   *                 opts.imagesFilter: array of indices to filter images by, or an array filter function to apply to the images array
   *                 opts.tileWidth: tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
   *                 opts.tileHeight:tileWidth to request at each level. Defaults to tileWidth specified by TIFF file or 256 if unspecified by the file
   *                 opts.GeoTIFFOptions Options object to pass to [geotiff.js]{@link https://github.com/geotiffjs/geotiff.js}
   *
   * @property {Object} GeoTIFF The GeoTIFF.js representation of the underlying file. Undefined until the file is opened successfully
   * @property {Array}  GeoTIFFImages Array of GeoTIFFImage objects used as pyramid/render levels. Undefined until the file is opened successfully
   * @property {Array}  GeoTIFFAllImages All pages in this tile source's group (same aspect set), for metadata. Defaults to GeoTIFFImages when omitted.
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
          ready: new PromiseWrapper(),
        };
        this.GeoTIFF = input.GeoTIFF;
        this.imageCount = input.GeoTIFFImages.length;
        this.GeoTIFFImages = input.GeoTIFFImages;
        this.GeoTIFFAllImages = input.GeoTIFFAllImages ?? input.GeoTIFFImages;

        this.setupLevels();
      } else {
        this.promises = {
          GeoTIFF: input instanceof File ? fromBlob(input, opts.GeoTIFFOptions) : fromUrl(input, opts.GeoTIFFOptions),
          GeoTIFFImages: new PromiseWrapper(),
          ready: new PromiseWrapper(),
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
            images = self.constructor.userDefinedImagesFilter(images, opts);

            self.GeoTIFFImages = images;
            self.GeoTIFFAllImages = images;
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

      let tiff = await (
        input instanceof File ? fromBlob(input, opts.GeoTIFFOptions) : fromUrl(input, opts.GeoTIFFOptions)
      );
      let imageCount = await tiff.getImageCount();

      const images = await Promise.all(
        Array.from({ length: imageCount }, (_, i) => tiff.getImage(i))
      );

      let tiffPromise = input instanceof File ? fromBlob(input) : fromUrl(input);

      let filtered = this.userDefinedImagesFilter(images, opts);
      filtered = filtered.filter(
        (image) =>
          image.fileDirectory.photometricInterpretation !==
          globals.photometricInterpretations.TransparencyMask
      );

      // Sort by width (largest first), then group by aspect ratio / SVS macro+label (same as pre-layout overhaul)
      filtered.sort((a, b) => b.getWidth() - a.getWidth());

      const tolerance = 0.015;
      const aspectRatioSets = filtered.reduce((accumulator, image) => {
        const r = image.getWidth() / image.getHeight();
        let s = "";

        if (image.fileDirectory.ImageDescription) {
          s = image.fileDirectory.ImageDescription.split("\n")[1] ?? "";
        }

        const exists = accumulator.filter(
          (set) => ((Math.abs(1 - set.aspectRatio / r) < tolerance)
            && !(s?.toLowerCase().includes("macro") || s?.toLowerCase().includes("label")))
        );
        if (exists.length === 0) {
          accumulator.push({
            aspectRatio: r,
            images: [image],
          });
        } else {
          exists[0].images.push(image);
        }
        return accumulator;
      }, []);

      const imageSets = aspectRatioSets.map((set) => set.images);
      const out = [];

      for (let index = 0; index < imageSets.length; index++) {
        const set = imageSets[index];

        if (index !== 0) {
          out.push(
            new OpenSeadragon.GeoTIFFTileSource(
              {
                GeoTIFF: tiffPromise,
                GeoTIFFImages: set,
                GeoTIFFAllImages: set,
              },
              opts
            )
          );
          continue;
        }

        if (fileExtension === "qptiff") {
          const channels = parsePerkinElmerChannels(set);
          for (const channel of channels.values()) {
            out.push(
              new OpenSeadragon.GeoTIFFTileSource(
                {
                  GeoTIFF: tiffPromise,
                  GeoTIFFImages: channel.images,
                  GeoTIFFAllImages: channel.images,
                  channel: {
                    name: channel.name,
                    color: channel.color,
                  },
                },
                opts
              )
            );
          }
          continue;
        }

        const layout = await this.resolveLayout(tiffPromise, set, opts.hints);
        const levelImages = await this.buildLevelImages(tiffPromise, layout, tiffPromise);
        out.push(
          new OpenSeadragon.GeoTIFFTileSource(
            {
              GeoTIFF: tiffPromise,
              GeoTIFFImages: levelImages,
              GeoTIFFAllImages: set,
            },
            opts
          )
        );
      }

      return out;
    }
    
    static userDefinedImagesFilter = (images, opts) => {
      if (typeof opts.imagesFilter !== 'undefined' && opts.imagesFilter) {
        if (Array.isArray(opts.imagesFilter))
          images = images.filter((_, idx) => opts.imagesFilter.includes(idx));
        else if (typeof opts.imagesFilter === "function")
          images = images.filter(opts.imagesFilter);

        opts.imagesFilter = undefined;
      }

      return images;
    };

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

    static getGeoTiffFileDirectory(geoTiffFile) {
      return geoTiffFile.getFileDirectory?.() ?? geoTiffFile.fileDirectory ?? {};
    }

    static getGeoTiffFileKey(geoTiffFile) {
      return [
        geoTiffFile.getWidth(), geoTiffFile.getHeight(),
        (this.getGeoTiffFileDirectory(geoTiffFile).TileWidth ?? 0),
        (this.getGeoTiffFileDirectory(geoTiffFile).TileLength ?? 0),
        (geoTiffFile.getWidth()/geoTiffFile.getHeight()).toFixed(6)
      ].join("|");
    }

    /**
     * Aperio-style companion pages (macro / label) use line 1 of ImageDescription; they must not
     * participate in IFD pyramid detection when mixed with the main slide.
     */
    static isSvsStyleCompanionPage(image) {
      const desc = image.fileDirectory?.ImageDescription;
      if (typeof desc !== "string" || !desc) return false;
      const line1 = desc.split("\n")[1] ?? "";
      const s = line1.toLowerCase();
      return s.includes("macro") || s.includes("label");
    }

    static _uniqueByDecreasingSize(images) {
      const topSizes = images
        .map((im) => ({ im, w: im.getWidth(), h: im.getHeight() }))
        .sort((a, b) => b.w - a.w);
      const uniqueBySize = [];
      const seen = new Set();
      for (const { im, w, h } of topSizes) {
        const k = `${w}x${h}`;
        if (!seen.has(k)) {
          seen.add(k);
          uniqueBySize.push(im);
        }
      }
      return uniqueBySize;
    }

    static async resolveLayout(tiff, allTopImages, hints = {}) {
      const cfg = hints.layout || {};
      const pyramidPref = cfg.pyramid || "auto"; // "auto"|"ifd"|"subifd"
      const planeIndex = Number.isFinite(cfg.planeIndex) ? cfg.planeIndex : 0;
      const prefer = cfg.prefer === "stack" ? "stack" : "pyramid";

      // 1) Partition by size/tile shape
      const groups = new Map(); // key -> GeoTIFFImage[]
      for (const img of allTopImages) {
        const key = this.getGeoTiffFileKey(img);
        img.__key = key;
        const arr = groups.get(key) || [];
        arr.push(img);
        groups.set(key, arr);
      }

      const uniqueBySizeFull = this._uniqueByDecreasingSize(allTopImages);

      const pyramidCandidates = allTopImages.filter((im) => !this.isSvsStyleCompanionPage(im));
      const uniqueBySizePyramid = this._uniqueByDecreasingSize(pyramidCandidates);

      const scaleInterval = (base, value, tPx) => {
        // value is an integer pixel dimension; accept that the underlying “ideal” dimension could
        // be within ±tPx due to unknown rounding/cropping by external pyramid generators.
        //
        // This yields a plausible interval for scale s where base/s ≈ value.
        const min = base / (value + tPx);
        const denom = value - tPx;
        const max = denom > 0 ? (base / denom) : Infinity;
        return { min, max };
      };

      const intervalsOverlap = (a, b) => Math.max(a.min, b.min) <= Math.min(a.max, b.max);

      const commonScaleExists = (w0, h0, w, h, tPx) => {
        const sw = scaleInterval(w0, w, tPx);
        const sh = scaleInterval(h0, h, tPx);
        return intervalsOverlap(sw, sh);
      };

      const looksIFDPyramid = (imgs) => {
        if (imgs.length < 2) return false;
        for (let i = 1; i < imgs.length; i++) {
          if (imgs[i].getWidth() >= imgs[i - 1].getWidth()) return false;
          if (imgs[i].getHeight() >= imgs[i - 1].getHeight()) return false;
        }
        const w0 = imgs[0].getWidth();
        const h0 = imgs[0].getHeight();
        const tolPx = 1;
        for (const im of imgs) {
          const w = im.getWidth();
          const h = im.getHeight();
          // Ensure a single scale factor s exists that can explain both dimensions within tolPx.
          if (!commonScaleExists(w0, h0, w, h, tolPx)) return false;
        }
        return true;
      };

      const ifdPyramidOkFull = looksIFDPyramid(uniqueBySizeFull);
      const ifdPyramidOkSubset = looksIFDPyramid(uniqueBySizePyramid);
      const hasCompanionPages = allTopImages.some((im) =>
        this.isSvsStyleCompanionPage(im)
      );

      // When macro/label pages share aspect ratio with the main slide, the "full" unique-size
      // list can still look like a valid pyramid; prefer non-companion levels in that case.
      let useFullPyramid = ifdPyramidOkFull;
      let useSubsetPyramid = !useFullPyramid && ifdPyramidOkSubset;
      if (hasCompanionPages && ifdPyramidOkSubset) {
        useSubsetPyramid = true;
        useFullPyramid = false;
      }

      const effectiveIfdPyramid = useFullPyramid || useSubsetPyramid;
      const ifdLevelsLargestToSmallest = useFullPyramid
        ? uniqueBySizeFull
        : (useSubsetPyramid ? uniqueBySizePyramid : uniqueBySizeFull);

      const anyHasSubIFD = allTopImages.some((im) => {
        const sub = this.getGeoTiffFileDirectory(im).SubIFDs;
        return sub && sub.length;
      });

      let strategy = "single";
      if (pyramidPref === "ifd") {
        strategy = effectiveIfdPyramid ? "ifd" : "single";
      } else if (pyramidPref === "subifd") {
        strategy = anyHasSubIFD ? "subifd" : "single";
      } else {
        if (effectiveIfdPyramid) strategy = "ifd";
        else if (anyHasSubIFD) strategy = "subifd";
        else strategy = "single";
      }

      const largest = uniqueBySizeFull[0];
      const largestKey = largest.__key;
      const planes = groups.get(largestKey) || [largest];
      const chosenPlane = planes[Math.max(0, Math.min(planes.length - 1, planeIndex))];

      if (prefer === "stack" && planes.length > 1 && strategy === "ifd") {
        strategy = "single";
      }

      if (strategy === "subifd") {
        logOnce(`${chosenPlane.__key}-subifd-warn`, `[GeoTIFFTileSource] File was detected to contain SubIFD pyramids, 
however, geotiff.js does not support reading SubIFD files and is unable to display the pyramid. Only the
high-resolution lowest level will be shown. Note that loading such data can crash your browser due to memory consumption.`, 'warn');
        strategy = "ifd";
      }

      return { strategy, planes, chosenPlane, ifdLevelsLargestToSmallest };
    }

    static async buildLevelImages(tiff, layout, warnKey) {
      const { strategy, chosenPlane, ifdLevelsLargestToSmallest, planes } = layout;
      const fd = (img) => img.getFileDirectory?.() ?? img.fileDirectory ?? {};

      if (strategy === "ifd") {
        // OSD expects levels from smallest->largest usually; your code may use opposite
        const levels = [...ifdLevelsLargestToSmallest].sort((a,b)=> a.getWidth()-b.getWidth());
        if (planes.length > 1) {
          logOnce(warnKey, `[GeoTIFFTileSource] Detected a plane stack (${planes.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, 'warn');
        }
        return levels;
      }

      if (strategy === "subifd") {
        const f = fd(chosenPlane);
        const sub = f.SubIFDs;
        if (!sub || !sub.length) {
          logOnce(warnKey, `[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.`, 'warn');
          return [chosenPlane];
        }

        // Prefer geotiff.js public API if present
        if (typeof chosenPlane.getSubIFDs === "function") {
          const subs = await chosenPlane.getSubIFDs();
          const levels = [...subs, chosenPlane].sort((a,b)=> a.getWidth()-b.getWidth());
          if (planes.length > 1) {
            logOnce(warnKey, `[GeoTIFFTileSource] Detected a plane stack (${planes.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, 'warn');
          }
          return levels;
        }

        logOnce(warnKey, `[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)`, 'warn');
        return [chosenPlane];
      }

      // single level
      if (planes.length > 1) {
        logOnce(warnKey, `[GeoTIFFTileSource] Detected ${planes.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, 'warn');
      }
      return [chosenPlane];
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
