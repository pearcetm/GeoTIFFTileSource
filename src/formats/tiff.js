/**
 * OpenSeadragon RawTIFF DataType plugin
 *
 * Goal:
 *  - Introduce a new OSD dataType: "rawTiff" = raw TIFF bytes (+ optional hints/metadata)
 *  - Teach OpenSeadragon.converter to convert:
 *      rawTiff  -> tiffRaster
 *      tiffRaster -> context2d
 *      (optionally) tiffRaster -> imageBitmap
 *
 * Notes:
 *  - This plugin does NOT fetch anything and does NOT implement a TileSource.
 *  - This plugin intentionally does NOT teach "rasterBlob -> rawTiff" because rasterBlob is already
 *    a render-able built-in type and should remain as-is.
 *  - Bundle/batch splitting (TIFF containing multiple tiles) is expected to happen upstream
 *    (e.g., via OSD v6 BatchImageJob / downloadTileBatchStart).
 */

import { fromBlob, fromArrayBuffer, fromUrl, globals, Pool } from "geotiff";
import { Converters } from "../utils/Converters";


// --- Worker Pool (optional) ---
// Offloads TIFF decoding and heavy raster conversions off the main thread.
//
// This is intentionally "Pool-like" (queue + least-busy worker) but independent of geotiff's internal Pool.
// Use opts.workerPool in installRawTiffPlugin() to control behavior.

function __rt_makeDeferred() {
  /** @type {(v:any)=>void} */ let resolve;
  /** @type {(e:any)=>void} */ let reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

function __rt_errorToString(err) {
  try {
    if (!err) return "Unknown error";
    if (typeof err === "string") return err;
    if (err && typeof err.message === "string") return err.message;
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

class RawTiffWorkerPool {
  /**
   * @param {Object} params
   * @param {number} params.size
   * @param {() => Worker} params.createWorker
   */
  constructor({ size, createWorker }) {
    this.size = Math.max(1, size | 0);
    this.createWorker = createWorker;
    /** @type {{worker: Worker, pending: number, callbacks: Map<number, any>}[]} */
    this.workers = [];
    this._nextId = 1;

    for (let i = 0; i < this.size; i++) {
      const w = this.createWorker();
      const entry = { worker: w, pending: 0, callbacks: new Map() };
      w.onmessage = (ev) => {
        const msg = ev.data || {};
        const id = msg.id;
        const cb = entry.callbacks.get(id);
        if (!cb) return;
        entry.callbacks.delete(id);
        entry.pending = Math.max(0, entry.pending - 1);
        if (msg.ok) cb.resolve(msg.result);
        else cb.reject(new Error(__rt_errorToString(msg.error)));
      };
      w.onerror = (e) => {
        // Fail all pending tasks on this worker
        for (const cb of entry.callbacks.values()) {
          cb.reject(e instanceof Error ? e : new Error(String(e)));
        }
        entry.callbacks.clear();
        entry.pending = 0;
      };
      this.workers.push(entry);
    }
  }

  /**
   * Enqueue a task on the least-busy worker.
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(op, payload, transfer) {
    const id = this._nextId++;
    const d = __rt_makeDeferred();

    // pick least busy worker
    let best = this.workers[0];
    for (const w of this.workers) {
      if (w.pending < best.pending) best = w;
    }
    best.pending++;
    best.callbacks.set(id, d);

    try {
      if (transfer && transfer.length) {
        best.worker.postMessage({ id, op, payload }, transfer);
      } else {
        best.worker.postMessage({ id, op, payload });
      }
    } catch (e) {
      best.callbacks.delete(id);
      best.pending = Math.max(0, best.pending - 1);
      d.reject(e);
    }

    return d.promise;
  }

  terminate() {
    for (const w of this.workers) {
      try { w.worker.terminate(); } catch { /* noop */ }
      w.callbacks.clear();
      w.pending = 0;
    }
    this.workers.length = 0;
  }
}

function __rt_defaultCreateWorker() {
  // Bundlers that support import.meta.url can resolve this.
  // If yours cannot, pass opts.workerPool.createWorker to installRawTiffPlugin.
  return new Worker(new URL("./tiff.worker.js", import.meta.url), { type: "module" });
}
/**
 * @typedef {Object} RawTiffHints
 * @property {number} [imageIndex] If the TIFF contains multiple images/pages, this selects which image
 *    to decode. If omitted and the TIFF has multiple images, conversion will fail.
 * @property {Object} [decode] Optional geotiff.js readRasters options (e.g. window, pool, etc.).
 * @property {number[]} [renderChannels] Optional channel mapping used by the default CPU renderer.
 *    Examples:
 *      [0] grayscale from channel 0
 *      [0,1,2] RGB from channels 0..2
 *      [2,1,0] BGR swap
 *      [0,1,2,3] RGBA (alpha from channel 3)
 */

/**
 * rawTiff payload wrapper.
 * You can still pass your own objects, as long as they implement getType() === "rawTiff"
 * and expose bytes via one of: bytes, blob, arrayBuffer() function.
 */
export class RawTiff {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta] Optional metadata (server headers, tile info, etc.)
   */
  constructor(source, opts = {}) {
    this.source = source;
    this.hints = opts.hints || {};
    this.meta = opts.meta;
  }
  getType() { return "rawTiff"; }
}

/**
 * Decoded raster representation (preserves multichannel).
 * This is the format you can later target for "GPU-first" conversions.
 */
export class TiffRaster {
  /**
   * @param {Object} params
   * @param {number} params.width
   * @param {number} params.height
   * @param {TypedArray[]} params.bands
   * @param {number} params.samplesPerPixel
   * @param {number[]} params.bitsPerSample
   * @param {number[]} [params.sampleFormat]
   * @param {number} [params.photometricInterpretation]
   * @param {any} [params.colorMap]
   * @param {any} [params.fileDirectory]
   * @param {RawTiffHints} [params.hints]
   */
  constructor(params) {
    Object.assign(this, params);
    this.hints = params.hints || {};
  }
  getType() { return "tiffRaster"; }
}

/**
 * Install the plugin into an OpenSeadragon instance.
 *
 * @param {OpenSeadragon} OpenSeadragon
 * @param {Object} [opts]
 * @param {Object} [opts.defaults] Default behavior overrides.
 * @param {Function} [opts.defaults.toneMap] Optional function mapping a scalar sample value to byte [0..255].
 *    Signature: (value, bandIndex, rasterMeta) => number
 *
 * @returns {Object} The installed API (also attached to OpenSeadragon.RawTiffPlugin)
 */
export function installRawTiffPlugin(OpenSeadragon, opts = {}) {
  const $ = OpenSeadragon;

  // Idempotent install
  if ($.RawTiffPlugin && $.RawTiffPlugin.__installed) {
    return $.RawTiffPlugin;
  }

  const defaults = Object.assign({
    toneMap: null,
  }, opts.defaults || {});

  const workerPoolOptions = Object.assign({
    enabled: true,
    // Default to a small pool to avoid overwhelming the device.
    size: (typeof navigator !== "undefined" && navigator.hardwareConcurrency) ? Math.max(1, Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2))) : 2,
    createWorker: null,
    // If true, transfers the raw ArrayBuffer into the worker (zero-copy) but detaches it on the main thread.
    transferInput: false,
    // If true, plugin registers a direct rawTiff -> imageBitmap conversion edge (best generic renderer path).
    enableRawTiffToImageBitmap: true,
  }, opts.workerPool || {});

  // Shared pool across viewers to mimic "geotiff Pool" reuse.
  const shared = $.RawTiffPluginShared = $.RawTiffPluginShared || {};
  function getWorkerPool() {
    if (!workerPoolOptions.enabled) return null;
    if (typeof Worker === "undefined") return null;
    if (shared.__rawTiffWorkerPool) return shared.__rawTiffWorkerPool;

    const createWorker = workerPoolOptions.createWorker || __rt_defaultCreateWorker;
    try {
      shared.__rawTiffWorkerPool = new RawTiffWorkerPool({
        size: workerPoolOptions.size,
        createWorker,
      });
      return shared.__rawTiffWorkerPool;
    } catch (e) {
      $.console && $.console.warn && $.console.warn("[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", e);
      shared.__rawTiffWorkerPool = null;
      return null;
    }
  }


  /**
   * Normalize various "raw tiff" representations into an ArrayBuffer.
   * @param {*} raw
   * @returns {Promise<ArrayBuffer>}
   */
  async function rawTiffToArrayBuffer(raw) {
    if (raw == null) {
      throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    }

    // RawTiff wrapper
    if (raw instanceof RawTiff) {
      return rawTiffToArrayBuffer(raw.source);
    }

    // Custom object that exposes .bytes/.blob or .arrayBuffer()
    if (typeof raw === "object") {
      if (typeof raw.arrayBuffer === "function") {
        const ab = await raw.arrayBuffer();
        if (ab instanceof ArrayBuffer) return ab;
      }
      if (raw.bytes != null) return rawTiffToArrayBuffer(raw.bytes);
      if (raw.blob != null) return rawTiffToArrayBuffer(raw.blob);
      if (raw.buffer != null && ArrayBuffer.isView(raw)) {
        // This branch won't be hit; left for clarity.
      }
    }

    // Blob
    if (typeof Blob !== "undefined" && raw instanceof Blob) {
      return await raw.arrayBuffer();
    }

    // ArrayBuffer
    if (raw instanceof ArrayBuffer) {
      return raw;
    }

    // TypedArray / DataView
    if (ArrayBuffer.isView(raw)) {
      const { buffer, byteOffset, byteLength } = raw;
      // copy the slice so downstream consumers can assume "tight" buffers
      return buffer.slice(byteOffset, byteOffset + byteLength);
    }

    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }

  /**
   * Helper to read geotiff image count robustly across versions.
   * @param {*} tiff
   * @returns {Promise<number>}
   */
  async function getImageCount(tiff) {
    if (typeof tiff.getImageCount === "function") {
      return await tiff.getImageCount();
    }
    if (typeof tiff.getImages === "function") {
      const imgs = await tiff.getImages();
      return imgs.length;
    }
    // fallback: assume at least one
    return 1;
  }

  /**
   * Helper to get image by index robustly.
   * @param {*} tiff
   * @param {number} index
   * @returns {Promise<any>}
   */
  async function getImageByIndex(tiff, index) {
    if (typeof tiff.getImage === "function") {
      return await tiff.getImage(index);
    }
    if (typeof tiff.getImages === "function") {
      const imgs = await tiff.getImages();
      return imgs[index];
    }
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }

  /**
   * Decode rawTiff into tiffRaster (multi-channel preserved).
   * This does *not* decide pages unless necessary:
   *  - If TIFF has exactly 1 image, decode it.
   *  - If TIFF has >1 image, require hints.imageIndex.
   *
   * @param {*} tile OpenSeadragon.Tile (may be undefined for manual use)
   * @param {*} rawTiff
   * @returns {Promise<TiffRaster>}
   */
  async function decodeRawTiffMain(tile, rawTiff) {
    if (!$.supportsAsync) {
      throw new Error("[RawTiffPlugin] Not supported in sync mode (OpenSeadragon.supportsAsync=false).");
    }

    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const ab = await rawTiffToArrayBuffer(rawTiff);

    // Use fromArrayBuffer if available, else fallback through Blob.
    let tiff;
    if (typeof fromArrayBuffer === "function") {
      tiff = await fromArrayBuffer(ab);
    } else if (typeof fromBlob === "function") {
      tiff = await fromBlob(new Blob([ab], { type: "image/tiff" }));
    } else {
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    }

    const count = await getImageCount(tiff);
    let imageIndex = hints.imageIndex;
    if (count > 1) {
      if (typeof imageIndex !== "number" || !Number.isFinite(imageIndex)) {
        throw new Error(`[RawTiffPlugin] TIFF contains ${count} images. Provide rawTiff.hints.imageIndex to select which image to decode.`);
      }
      if (imageIndex < 0 || imageIndex >= count) {
        throw new Error(`[RawTiffPlugin] imageIndex ${imageIndex} out of range (0..${count - 1}).`);
      }
    } else {
      imageIndex = 0;
    }

    const img = await getImageByIndex(tiff, imageIndex);

    const width = typeof img.getWidth === "function" ? img.getWidth() : img.width;
    const height = typeof img.getHeight === "function" ? img.getHeight() : img.height;
    const samplesPerPixel = typeof img.getSamplesPerPixel === "function" ? img.getSamplesPerPixel() : (img.samplesPerPixel || 1);
    const bitsPerSample = typeof img.getBitsPerSample === "function" ? img.getBitsPerSample() : (img.bitsPerSample || [8]);
    const sampleFormat = typeof img.getSampleFormat === "function" ? img.getSampleFormat() : (img.sampleFormat || null);
    const photometricInterpretation =
      typeof img.getPhotometricInterpretation === "function" ? img.getPhotometricInterpretation() :
        (img.fileDirectory ? img.fileDirectory.PhotometricInterpretation : undefined);

    const fileDirectory = img.fileDirectory || null;
    const colorMap = fileDirectory && fileDirectory.ColorMap ? fileDirectory.ColorMap : null;

    // Preserve multichannel by reading planar (interleave:false).
    const decodeOpts = Object.assign({ interleave: false }, hints.decode || {});
    const rasters = await img.readRasters(decodeOpts);

    let bands;
    if (Array.isArray(rasters)) {
      bands = rasters;
    } else {
      // geotiff.js sometimes returns a TypedArray for single-band even when interleave:false.
      bands = [rasters];
    }

    // Defensive: ensure band count matches, but don't hard fail if geotiff returns fewer/more.
    const spp = Math.max(samplesPerPixel || 0, bands.length);

    return new TiffRaster({
      width,
      height,
      bands,
      samplesPerPixel: spp,
      bitsPerSample: Array.isArray(bitsPerSample) ? bitsPerSample : [bitsPerSample],
      sampleFormat: Array.isArray(sampleFormat) ? sampleFormat : (sampleFormat ? [sampleFormat] : null),
      photometricInterpretation,
      colorMap,
      fileDirectory,
      hints,
    });
  }

  /**
   * Default tone mapping for non-8-bit sources.
   * - Integers: scale by (2^bits - 1) to 0..255
   * - Floats: assume 0..1 and scale to 0..255
   */
  function defaultToneMap(value, bandIndex, raster) {
    if (value == null || Number.isNaN(value)) return 0;

    // Float arrays: assume 0..1 unless caller overrides with defaults.toneMap
    const band = raster.bands[bandIndex];
    const isFloat = band instanceof Float32Array || band instanceof Float64Array;

    if (isFloat) {
      const v = Math.max(0, Math.min(1, value));
      return Math.round(v * 255);
    }

    const bits = raster.bitsPerSample && raster.bitsPerSample[bandIndex] != null ? raster.bitsPerSample[bandIndex] : (raster.bitsPerSample ? raster.bitsPerSample[0] : 8);
    const max = bits <= 0 ? 255 : Math.pow(2, bits) - 1;
    if (max <= 255) {
      return Math.max(0, Math.min(255, value));
    }
    return Math.round(Math.max(0, Math.min(1, value / max)) * 255);
  }

  /**
   * Convert tiffRaster into RGBA8 bytes.
   * @param {TiffRaster} raster
   * @returns {Uint8ClampedArray}
   */

  function __rt_reviveBands(bandDescs) {
    if (!Array.isArray(bandDescs)) return [];
    return bandDescs.map((b) => {
      const Ctor = (typeof b.ctor === "string" && globalThis[b.ctor]) ? globalThis[b.ctor] : Uint8Array;
      const buf = b.buffer;
      const byteOffset = b.byteOffset || 0;
      const length = b.length;
      try {
        return new Ctor(buf, byteOffset, length);
      } catch {
        // If something goes wrong, fallback to copying.
        const u8 = new Uint8Array(buf, byteOffset, (b.byteLength || (length * (Ctor.BYTES_PER_ELEMENT || 1))) || undefined);
        return new Ctor(u8.slice().buffer);
      }
    });
  }

  function __rt_reviveRasterPayload(p, hints) {
    const bands = __rt_reviveBands(p.bands);
    return new TiffRaster({
      width: p.width,
      height: p.height,
      bands,
      samplesPerPixel: p.samplesPerPixel,
      bitsPerSample: p.bitsPerSample,
      sampleFormat: p.sampleFormat,
      photometricInterpretation: p.photometricInterpretation,
      colorMap: p.colorMap,
      fileDirectory: p.fileDirectory,
      hints: hints || {},
    });
  }

  async function __rt_decodeViaWorker(tile, rawTiff, pool, workerPoolOptions) {
    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const ab = await rawTiffToArrayBuffer(rawTiff);
    const transfer = (workerPoolOptions && workerPoolOptions.transferInput) ? [ab] : [];
    const payload = await pool.request("decodeRaster", { buffer: ab, hints }, transfer);
    return __rt_reviveRasterPayload(payload, hints);
  }

  /**
   * Decode rawTiff to tiffRaster (worker when available).
   * @param {*} tile
   * @param {*} rawTiff
   * @returns {Promise<TiffRaster>}
   */
  async function decodeRawTiff(tile, rawTiff) {
    if (!$.supportsAsync) {
      throw new Error("[RawTiffPlugin] Not supported in sync mode (OpenSeadragon.supportsAsync=false).");
    }
    const pool = getWorkerPool();
    if (pool) {
      return await __rt_decodeViaWorker(tile, rawTiff, pool, workerPoolOptions);
    }
    return await decodeRawTiffMain(tile, rawTiff);
  }

  async function __rt_rawTiffToImageBitmap(tile, rawTiff) {
    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const pool = getWorkerPool();
    if (pool) {
      const ab = await rawTiffToArrayBuffer(rawTiff);
      const transfer = (workerPoolOptions && workerPoolOptions.transferInput) ? [ab] : [];
      const out = await pool.request("decodeAndRenderImageBitmap", { buffer: ab, hints }, transfer);

      if (out && out.kind === "imageBitmap") {
        return out.imageBitmap;
      }
      if (out && out.kind === "rgba8") {
        if (typeof createImageBitmap !== "function") {
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        }
        const rgba = new Uint8ClampedArray(out.rgbaBuffer, out.rgbaByteOffset || 0, out.rgbaLength);
        const imgData = new ImageData(rgba, out.width, out.height);
        // eslint-disable-next-line compat/compat
        return await createImageBitmap(imgData);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }

    // Main-thread fallback
    const raster = await decodeRawTiffMain(tile, rawTiff);
    return await rasterToImageBitmap(tile, raster);
  }
  function rasterToRGBA8(raster) {
    const toneMap = defaults.toneMap || defaultToneMap;
    const PI = globals.photometricInterpretations || {};

    const width = raster.width;
    const height = raster.height;
    const pixelCount = width * height;

    // Channel selection for *display* only.
    // GPU path should consume raster.bands directly.
    const renderChannels = raster.hints.renderChannels || raster.renderChannels || null;

    const spp = raster.samplesPerPixel || raster.bands.length || 1;

    // Helpers to fetch scaled byte for band and pixel index
    const byteAt = (bandIdx, pxIdx) => toneMap(raster.bands[bandIdx][pxIdx], bandIdx, raster);

    // Photometric strategy
    const photometric = raster.photometricInterpretation;

    // Palette
    if (photometric === PI.Palette && raster.colorMap) {
      // Palette expects indices (band 0) and TIFF colorMap
      const indices = raster.bands[0];
      return Converters.RGBAfromPalette(indices, raster.colorMap);
    }

    // WhiteIsZero / BlackIsZero
    if ((photometric === PI.WhiteIsZero || photometric === PI.BlackIsZero) && spp >= 1) {
      const band0 = raster.bands[0];
      const bits = raster.bitsPerSample && raster.bitsPerSample[0] != null ? raster.bitsPerSample[0] : 8;
      const max = Math.pow(2, bits) - 1;

      if (photometric === PI.WhiteIsZero) {
        return Converters.RGBAfromWhiteIsZero(band0, max);
      }
      if (photometric === PI.BlackIsZero) {
        return Converters.RGBAfromBlackIsZero(band0, max);
      }

      // fallback grayscale
      const out = new Uint8ClampedArray(pixelCount * 4);
      for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
        let v = toneMap(band0[i], 0, raster);
        if (photometric === PI.WhiteIsZero) v = 255 - v;
        out[j] = out[j + 1] = out[j + 2] = v;
        out[j + 3] = 255;
      }
      return out;
    }

    // Default channel mapping
    const channels = renderChannels ||
      (photometric === PI.RGB || photometric === PI.YCbCr || photometric === PI.CIELab ? [0, 1, 2] :
        (spp >= 3 ? [0, 1, 2] : [0]));

    // Grayscale output from a single band
    if (channels.length === 1) {
      const b = channels[0];
      const out = new Uint8ClampedArray(pixelCount * 4);
      for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
        const v = byteAt(b, i);
        out[j] = out[j + 1] = out[j + 2] = v;
        out[j + 3] = 255;
      }
      return out;
    }

    // Build an interleaved 8-bit buffer for the selected channels
    const tmp = new Uint8ClampedArray(pixelCount * channels.length);
    for (let i = 0; i < pixelCount; i++) {
      const base = i * channels.length;
      for (let c = 0; c < channels.length; c++) {
        const bandIdx = channels[c];
        tmp[base + c] = bandIdx < raster.bands.length ? byteAt(bandIdx, i) : 0;
      }
    }

    // Photometric conversions using provided Converters (recommended)
    if (photometric === PI.YCbCr && channels.length >= 3) {
      return Converters.RGBAfromYCbCr(tmp);
    }
    if (photometric === PI.CMYK && channels.length >= 4) {
      return Converters.RGBAfromCMYK(tmp);
    }
    if (photometric === PI.CIELab && channels.length >= 3) {
      return Converters.RGBAfromCIELab(tmp);
    }
    if (channels.length >= 3) {
      // Treat as RGB (or generic "3 channels")
      return Converters.RGBAfromRGB(tmp);
    }
    // Fallback: assume first 3 are RGB and optional 4th as alpha
    const out = new Uint8ClampedArray(pixelCount * 4);
    const hasA = channels.length >= 4;
    for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
      const base = i * channels.length;
      out[j] = tmp[base];
      out[j + 1] = tmp[base + 1] || 0;
      out[j + 2] = tmp[base + 2] || 0;
      out[j + 3] = hasA ? tmp[base + 3] : 255;
    }
    return out;
  }

  /**
   * Convert tiffRaster into CanvasRenderingContext2D ("context2d" type).
   * @param {*} tile
   * @param {TiffRaster} raster
   * @returns {CanvasRenderingContext2D}
   */
  async function rasterToContext2d(tile, raster) {
    // Prefer ImageBitmap path (can be produced from worker via rawTiff -> imageBitmap),
    // but if we only have raster here, we create an ImageBitmap from RGBA.
    const bmp = await rasterToImageBitmap(tile, raster);
    const canvas = document.createElement("canvas");
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(bmp, 0, 0);
    return ctx;
  }

  /**
   * Convert tiffRaster directly to ImageBitmap when supported.

   /**
   * Convert tiffRaster directly to ImageBitmap when supported.
   * @param {*} tile
   * @param {TiffRaster} raster
   * @returns {Promise<ImageBitmap>}
   */
  async function rasterToImageBitmap(tile, raster) {
    // eslint-disable-next-line compat/compat
    if (typeof createImageBitmap !== "function") {
      throw new Error("[RawTiffPlugin] createImageBitmap is not available in this environment.");
    }
    const rgba = rasterToRGBA8(raster);
    const imgData = new ImageData(rgba, raster.width, raster.height);
    // eslint-disable-next-line compat/compat
    return await createImageBitmap(imgData);
  }

  // --- Register converter edges ---
  if ($.converter) {
    $.converter.learn("rawTiff", "tiffRaster", (tile, data) => decodeRawTiff(tile, data), 2, 10);

    // rawTiff -> imageBitmap (preferred fast path for generic drawers)
    if (workerPoolOptions.enableRawTiffToImageBitmap) {
      $.converter.learn("rawTiff", "imageBitmap", (tile, data) => __rt_rawTiffToImageBitmap(tile, data), 1, 5);
    }

    // tiffRaster -> context2d/imageBitmap (generic CPU renderer path)
    $.converter.learn("tiffRaster", "context2d", (tile, raster) => rasterToContext2d(tile, raster), 2, 10);
    $.converter.learn("tiffRaster", "imageBitmap", (tile, raster) => rasterToImageBitmap(tile, raster), 1, 50);
  } else {
    $.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+ to use fully-embedded tiff support.");
  }

  // Public API (also attached to OpenSeadragon for convenience)
  const api = {
    __installed: true,

    // Types
    RawTiff,
    TiffRaster,

    // Optional hook for the project's photometric converters (drop-in from your Converters.js)
    // Set it after installing if you want richer photometric support:
    //   OpenSeadragon.RawTiffPlugin.Converters = Converters;
    Converters: null,

    // Low-level helpers
    decodeRawTiff,
    rasterToRGBA8,
    rasterToContext2d,
    rasterToImageBitmap,
    // Worker pool helpers
    getWorkerPool,
    terminateWorkerPool() {
      const shared = $.RawTiffPluginShared;
      if (shared && shared.__rawTiffWorkerPool) {
        shared.__rawTiffWorkerPool.terminate();
        shared.__rawTiffWorkerPool = null;
      }
    },


    // Convenience wrappers around the OSD converter graph
    /**
     * Convert using OpenSeadragon.converter with type inference when possible.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType] If omitted, uses OpenSeadragon.converter.guessType(data).
     */
    convert(tile, data, toType, fromType) {
      if (!$.converter) {
        throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+ to support data type conversions.");
      }
      const srcType = fromType || $.converter.guessType(data);
      return $.converter.convert(tile, data, srcType, toType);
    },

    /**
     * Wrap binary as a RawTiff object (recommended).
     * @param {*} source ArrayBuffer|TypedArray|Blob|custom
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(source, opts) {
      return new RawTiff(source, opts);
    },
  };

  $.RawTiffPlugin = api;
  return api;
}

