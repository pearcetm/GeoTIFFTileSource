import {fromBlob, fromUrl, globals, Pool} from "geotiff";
import {DeferredPromise} from "./DeferredPromise";
import {Converters} from "./Converters";

/**
 * Enable GeoTIFF Tile Source for OpenSeadragon.
 *
 * The GeoTIFFTileSource uses the GeoTIFF.js library to serve tiles from local file or a remote URL.
 * Remote files require HTTP range requests to be enabled on the server.
 *
 * @param {OpenSeadragon} OpenSeadragon - The OpenSeadragon class.
 */
export const enableGeoTIFFTileSource = (OpenSeadragon) => {
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

		constructor(input, opts = {logLatency: false}) {
			super();
			let self = this;

			this.input = input;
			this.options = opts;

			this._ready = false;
			this._pool = GeoTIFFTileSource.sharedPool;

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

		static getAllTileSources = async (input, opts) => {
			let tiff = input instanceof File ? fromBlob(input) : fromUrl(input);

			return tiff
				.then((t) => {
					tiff = t;
					return t.getImageCount();
				})
				.then((c) =>
					Promise.all([...Array(c).keys()].map(async (index) => (await tiff).getImage(index))),
				)
				.then((images) => {
					// Filter out images with photometricInterpretation.TransparencyMask
					images = images.filter(
						(image) =>
							image.fileDirectory.photometricInterpretation !==
							globals.photometricInterpretations.TransparencyMask,
					);
					// Sort by width (largest first), then detect pyramids
					images.sort((a, b) => b.getWidth() - a.getWidth());
					// find unique aspect ratios (with tolerance to account for rounding)
					const tolerance = 0.015;
					let aspectRatioSets = images.reduce((accumulator, image) => {
						let r = image.getWidth() / image.getHeight();
						let exists = accumulator.filter((set) => Math.abs(1 - set.aspectRatio / r) < tolerance);
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

					let imageSets = aspectRatioSets.map((set) => set.images);
					return imageSets.map(
						(images) =>
							new OpenSeadragon.GeoTIFFTileSource(
								{
									GeoTIFF: tiff,
									GeoTIFFImages: images,
								},
								opts,
							),
					);
				});
		};

		/**
		 * Return the tileWidth for a given level.
		 * @function
		 * @param {Number} level
		 */
		getTileWidth = (level) => {
			if (this.levels.length > level) {
				return this.levels[level].tileWidth;
			}
		};

		/**
		 * Return the tileHeight for a given level.
		 * @function
		 * @param {Number} level
		 */
		getTileHeight = (level) => {
			if (this.levels.length > level) {
				return this.levels[level].tileHeight;
			}
		};

		/**
		 * @function
		 * @param {Number} level
		 */
		getLevelScale = (level) => {
			let levelScale = NaN;
			if (this.levels.length > 0 && level >= this.minLevel && level <= this.maxLevel) {
				levelScale = this.levels[level].width / this.levels[this.maxLevel].width;
			}
			return levelScale;
		};

		/**
		 * Implement function here instead of as custom tile source in client code
		 * @function
		 * @param {Number} levelnum
		 * @param {Number} x
		 * @param {Number} y
		 */
		getTileUrl = (levelnum, x, y) => {
			// return dataURL from reading tile data from the GeoTIFF object as String object (for cache key) with attached promise
			let level = this.levels[levelnum];
			let url = new String(`${levelnum}/${x}_${y}`); // use new String() so that custom fields can be set (see url.fetch below)

			url.fetch = (
				(ts, level, x, y, src) => () =>
					this.regionToDataUrl.call(ts, level, x, y, src)
			)(this, level, x, y, url);

			return url;
		};

		downloadTileStart = (context) => {
			context.src.fetch().then((dataURL) => {
				let image = new Image();
				let request = "" + context.src;
				image.onload = function () {
					context.finish(image);
				};
				image.onerror = image.onabort = function () {
					context.finish(null, request, "Request aborted");
				};
				image.src = dataURL;
			});
		};

		downloadTileAbort = (context) => {
			context.src.abortController && context.src.abortController.abort();
		};

		setupComplete = () => {
			this._ready = true;
			this.promises.ready.resolve();

			this.raiseEvent("ready", {tileSource: this});
		};

		setupLevels = () => {
			if (this._ready) {
				return;
			}

			let images = this.GeoTIFFImages.sort((a, b) => b.getWidth() - a.getWidth());

			//default to 256x256 tiles, but defer to options passed in
			let defaultTileWidth = this._tileSize;
			let defaultTileHeight = this._tileSize;

			//the first image is the highest-resolution view (at least, with the largest width)
			let fullWidth = (this.width = images[0].getWidth());
			let fullHeight = (this.height = images[0].getHeight());
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
				{valid: true, width: -1},
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
					Math.log2(Math.max(fullWidth / defaultTileWidth, fullHeight / defaultTileHeight)),
				);
				let levelsToUse = [...Array(numPowersOfTwo).keys()].filter((v) => v % 2 == 0); //use every other power of two for scales in the "pyramid"

				this.levels = levelsToUse.map((levelnum) => {
					let scale = Math.pow(2, levelnum);
					let image = images.filter((im) => im.getWidth() * scale >= fullWidth).slice(-1)[0]; //smallest image with sufficient resolution
					return {
						width: fullWidth / scale,
						height: fullHeight / scale,
						tileWidth: this.options.tileWidth || image.getTileWidth() || defaultTileWidth,
						tileHeight: this.options.tileHeight || image.getTileHeight() || defaultTileHeight,
						image: image,
						scaleFactor: (scale * image.getWidth()) / fullWidth,
					};
				});
				this.maxLevel = this.levels.length - 1;
			}
			this.levels = this.levels.sort((a, b) => a.width - b.width);

			this._tileWidth = this.levels[0].tileWidth;
			this._tileHeight = this.levels[0].tileHeight;

			this.setupComplete();
		};

		regionToDataUrl = (level, x, y, src) => {
			let startTime = this.options.logLatency && Date.now();

			let abortController = (src.abortController = new AbortController()); // add abortController to the src object so OpenSeadragon can abort the request
			let abortSignal = abortController.signal;

			// Use getTileOrStrip followed by converters because it is noticably more efficient than readRGB
			return level.image.getTileOrStrip(x, y, null, this._pool, abortSignal).then((raster) => {
				let data = new Uint8ClampedArray(raster.data);
				let canvas = document.createElement("canvas");
				canvas.width = level.tileWidth;
				canvas.height = level.tileHeight;
				let ctx = canvas.getContext("2d");

				let photometricInterpretation = level.image.fileDirectory.PhotometricInterpretation;
				let arr;
				switch (photometricInterpretation) {
					case globals.photometricInterpretations.WhiteIsZero: // grayscale, white is zero
						arr = Converters.RGBAfromWhiteIsZero(
							data,
							2 ** level.image.fileDirectory.BitsPerSample[0],
						);
						break;
					case globals.photometricInterpretations.BlackIsZero: // grayscale, white is zero
						arr = Converters.RGBAfromBlackIsZero(
							data,
							2 ** level.image.fileDirectory.BitsPerSample[0],
						);
						break;
					case globals.photometricInterpretations.RGB: // RGB
						arr = Converters.RGBAfromRGB(data);
						break;
					case globals.photometricInterpretations.Palette: // colormap
						arr = Converters.RGBAfromPalette(data, 2 ** level.image.fileDirectory.colorMap);
						break;
					case globals.photometricInterpretations.CMYK: // CMYK
						arr = Converters.RGBAfromCMYK(data);
						break;
					case globals.photometricInterpretations.YCbCr: // YCbCr
						arr = Converters.RGBAfromYCbCr(data);
						break;
					case globals.photometricInterpretations.CIELab: // CIELab
						arr = Converters.RGBAfromCIELab(data);
						break;
				}

				ctx.putImageData(new ImageData(arr, canvas.width, canvas.height), 0, 0);

				let dataURL = canvas.toDataURL("image/jpeg", 0.8);
				this.options.logLatency &&
				(typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
					"Tile latency (ms):",
					Date.now() - startTime,
				);
				return dataURL;
			});
		};
	}

	// Attach the class to the OpenSeadragon namespace
	OpenSeadragon.GeoTIFFTileSource = GeoTIFFTileSource;
};


