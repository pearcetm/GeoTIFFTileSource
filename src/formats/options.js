/**
 * Interpretation mode for TIFF content.
 * - "auto": infer image-vs-data from TIFF tags
 * - "image": force image-like handling (color conversions / RGBA mapping)
 * - "data": force data-like handling (bands preserved and packed)
 *
 * @typedef {"auto"|"image"|"data"} Interpretation
 */

/**
 * Channel packing strategy for GPU textures.
 * Currently only "packsOf4" is supported.
 *
 * @typedef {"packsOf4"} GpuPackMode
 */

/**
 * GPU texture packing options (used when converting to gpuTextureSet).
 *
 * @typedef {Object} GpuPackingOptions
 * @property {boolean} [preferRGBA8=true]
 *   If all selected channels are 8-bit, pack into RGBA8.
 * @property {boolean} [forceRGBA16F=false]
 *   Always pack into RGBA16F (half-float) even when RGBA8 would be possible.
 * @property {GpuPackMode} [packMode="packsOf4"]
 *   Packing strategy.
 */

/**
 * Image mapping options for ambiguous cases (image-like interpretation).
 *
 * @typedef {Object} ImageMappingOptions
 * @property {([number,number,number] | [number,number,number,number]) | null} [rgbaChannels=null]
 *   Explicit mapping for image-like interpretation (e.g. [0,1,2] or [0,1,2,3]).
 */

/**
 * Layout pyramid preference.
 *
 * @typedef {"auto"|"ifd"|"subifd"} PyramidPreference
 */

/**
 * Ambiguity preference when the file can be interpreted as pyramid or stack.
 *
 * @typedef {"pyramid"|"stack"} LayoutPrefer
 */

/**
 * Hints that affect how pyramids/planes are resolved (tile source building).
 *
 * @typedef {Object} LayoutHints
 * @property {PyramidPreference} [pyramid="auto"]
 *   - "auto": choose based on detected structure
 *   - "ifd": force pyramid from top-level IFD pages
 *   - "subifd": force pyramid from SubIFDs when present, note that this option
 *               is not supported for now and the plugins falls back to "ifd" with warning
 * @property {number} [planeIndex=0]
 *   If the file contains multiple same-size IFD pages (e.g. channel/plane stack),
 *   choose which plane to display by default.
 * @property {LayoutPrefer} [prefer="pyramid"]
 *   If structure is ambiguous, prefer interpreting it as a pyramid or as a stack.
 */

/**
 * Optional hints container. (Future-proof: can grow without breaking API.)
 *
 * @typedef {Object} FormatHints
 * @property {LayoutHints} [layout]
 */

/**
 * Per-tile / per-raster format options.
 *
 * You can override this:
 *  - globally at install time: installRawTiffPlugin(OSD, { defaults: { format: { ... } } })
 *  - per-load via options: getAllTileSources(..., { hints: { format: { ... } } })
 *  - per-data: rawTiff.hints.format or tiffRaster.hints.format
 *  - per-tile (advanced): tile.format = { ... }
 *
 * @typedef {Object} FormatOptions
 * @property {Interpretation} [interpretation="auto"]
 * @property {number[]|null} [channels=null]
 *   Explicit channel list/order for "data" interpretation.
 * @property {GpuPackingOptions} [gpu]
 * @property {ImageMappingOptions} [image]
 * @property {FormatHints} [hints]
 */

/**
 * Default per-tile/per-raster format options.
 *
 * @type {FormatOptions}
 */
const defaultFormat = {
  interpretation: "auto",
  channels: null,
  gpu: {
    preferRGBA8: true,
    forceRGBA16F: false,
    packMode: "packsOf4",
  },
  image: {
    rgbaChannels: null,
  },
  hints: {
    layout: {
      pyramid: "auto",
      planeIndex: 0,
      prefer: "pyramid",
    },
  },
};

export default defaultFormat;
export { defaultFormat };