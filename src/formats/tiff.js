/**
 * OpenSeadragon RawTIFF DataType plugin
 *
 * Adds:
 *  - rawTiff -> tiffRaster (preserves all channels + dtype)
 *  - rawTiff -> gpuTextureSet (GPU-ready, packs channels into RGBA8 / RGBA16F in worker)
 *  - tiffRaster -> gpuTextureSet (packs in worker)
 *  - rawTiff -> imageBitmap (worker render)
 *  - tiffRaster -> imageBitmap/context2d (CPU fallback renderer)
 *
 * Format override (external, no converter args):
 *  - rawTiff.hints.format or rawTiff.hints.formatResolved
 *  - tiffRaster.hints.format or tiffRaster.hints.formatResolved
 *  - tile.format or tile.userData.format
 *  - tile.source.format or tile.source.options.format
 *
 * The resolved format is merged with defaultFormat and forwarded to the worker as hints.formatResolved.
 */

import { fromBlob, fromArrayBuffer, globals } from "geotiff";
import { Converters } from "../utils/Converters.js";
import defaultFormat from "./options.js";
import { logOnce } from "../utils/consoleOnce.js";

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

/**
 * GPU-ready packed textures.
 *
 * packs: array of RGBA textures, each carrying up to 4 source channels.
 *  - format: "RGBA8" or "RGBA16F"
 *  - data:
 *      RGBA8  -> Uint8Array length = width*height*4
 *      RGBA16F-> Uint16Array length = width*height*4  (IEEE-754 half-float bit patterns)
 *  - channels: length 4 array of source band indices (or -1 if padding)
 *  - scale/offset: optional per-channel transform to apply in shader (default identity)
 *
 * Top-level:
 *  - width, height: texture dimensions
 *  - mode: "image" | "data"
 *  - channelCount: total logical channels represented in this set
 */
export class GpuTextureSet {
  constructor(params) { Object.assign(this, params); }
  getType() { return "gpuTextureSet"; }
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

        // New: out-of-band warnings from worker
        if (msg.kind === "warn") {
          // optional: route somewhere else instead of console
          logOnce(
            msg.code || "RawTiffWorker_warn",
            msg.message || "[RawTiffWorker] warning",
            "warn"
          );
          return;
        }

        const id = msg.id;
        const cb = entry.callbacks.get(id);
        if (!cb) return;
        entry.callbacks.delete(id);
        entry.pending = Math.max(0, entry.pending - 1);
        if (msg.ok) cb.resolve(msg.result);
        else cb.reject(new Error(__rt_errorToString(msg.error)));
      };
      w.onerror = (e) => {
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
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(op, payload, transfer) {
    const id = this._nextId++;
    const d = __rt_makeDeferred();

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
  return new Worker(new URL("./tiff.worker.js", import.meta.url), { type: "module" });
}

/**
 * @typedef {Object} RawTiffHints
 * @property {number} [imageIndex]
 * @property {Object} [decode]
 * @property {number[]} [renderChannels]
 * @property {any} [format] External override object.
 * @property {any} [formatResolved] Internal: merged defaults+override forwarded to worker.
 */

/**
 * rawTiff payload wrapper.
 */
export class RawTiff {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta]
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

function deepMerge(a, b) {
  const out = Array.isArray(a) ? a.slice() : Object.assign({}, a || {});
  if (!b || typeof b !== "object") return out;
  for (const k of Object.keys(b)) {
    const bv = b[k];
    if (bv && typeof bv === "object" && !Array.isArray(bv) && (out[k] && typeof out[k] === "object") && !Array.isArray(out[k])) {
      out[k] = deepMerge(out[k], bv);
    } else {
      out[k] = bv;
    }
  }
  return out;
}

function resolveExternalFormat(tile, dataOrRaster) {
  // 1) on hints (data/raster)
  const h = dataOrRaster && dataOrRaster.hints;
  if (h && h.formatResolved) return h.formatResolved;
  if (h && h.format) return h.format;

  // 2) raw meta
  if (dataOrRaster && dataOrRaster.meta && dataOrRaster.meta.format) return dataOrRaster.meta.format;

  // 3) tile
  if (tile && tile.format) return tile.format;
  if (tile && tile.userData && tile.userData.format) return tile.userData.format;

  // 4) tileSource / viewer config
  const ts = tile && (tile.source || tile.tileSource || tile._tileSource);
  if (ts && ts.format) return ts.format;
  if (ts && ts.options && ts.options.format) return ts.options.format;

  return null;
}

function __rt_reviveBands(bandDescs) {
  if (!Array.isArray(bandDescs)) return [];
  return bandDescs.map((b) => {
    const Ctor = (typeof b.ctor === "string" && globalThis[b.ctor]) ? globalThis[b.ctor] : Uint8Array;
    return new Ctor(b.buffer, b.byteOffset || 0, b.length);
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

function __rt_reviveGpuTextureSetPayload(p) {
  const packs = (p.packs || []).map((pk) => {
    const d = pk.data;
    const Ctor = (typeof d.ctor === "string" && globalThis[d.ctor]) ? globalThis[d.ctor] : Uint8Array;
    const arr = new Ctor(d.buffer, d.byteOffset || 0, d.length);
    return Object.assign({}, pk, { data: arr });
  });
  return new GpuTextureSet({
    width: p.width,
    height: p.height,
    mode: p.mode,
    channelCount: p.channelCount,
    packs,
  });
}

/**
 * Install the plugin into an OpenSeadragon instance.
 *
 * @param {OpenSeadragon} OpenSeadragon
 * @param {Object} [opts]
 * @param {Object} [opts.defaults]
 * @param {Function} [opts.defaults.toneMap]
 * @param {Object} [opts.defaults.format] default format overrides merged into defaultFormat
 * @param {Object} [opts.workerPool]
 */
export function installRawTiffPlugin(OpenSeadragon, opts = {}) {
  const $ = OpenSeadragon;

  if ($.RawTiffPlugin && $.RawTiffPlugin.__installed) return $.RawTiffPlugin;

  const defaults = Object.assign({
    toneMap: null,
    format: deepMerge(defaultFormat, (opts.defaults && opts.defaults.format) || null),
  }, opts.defaults || {});

  const workerPoolOptions = Object.assign({
    enabled: true,
    size: (typeof navigator !== "undefined" && navigator.hardwareConcurrency)
      ? Math.max(1, Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)))
      : 2,
    createWorker: null,
    transferInput: false,
    enableRawTiffToImageBitmap: true,
  }, opts.workerPool || {});

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
      $.console?.warn?.("[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", e);
      shared.__rawTiffWorkerPool = null;
      return null;
    }
  }

  async function rawTiffToArrayBuffer(raw) {
    if (raw == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");

    if (raw instanceof RawTiff) return rawTiffToArrayBuffer(raw.source);

    if (typeof raw === "object") {
      if (typeof raw.arrayBuffer === "function") {
        const ab = await raw.arrayBuffer();
        if (ab instanceof ArrayBuffer) return ab;
      }
      if (raw.bytes != null) return rawTiffToArrayBuffer(raw.bytes);
      if (raw.blob != null) return rawTiffToArrayBuffer(raw.blob);
    }

    if (typeof Blob !== "undefined" && raw instanceof Blob) return await raw.arrayBuffer();
    if (raw instanceof ArrayBuffer) return raw;

    if (ArrayBuffer.isView(raw)) {
      const { buffer, byteOffset, byteLength } = raw;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    }

    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }

  async function getImageCount(tiff) {
    if (typeof tiff.getImageCount === "function") return await tiff.getImageCount();
    if (typeof tiff.getImages === "function") return (await tiff.getImages()).length;
    return 1;
  }

  async function getImageByIndex(tiff, index) {
    if (typeof tiff.getImage === "function") return await tiff.getImage(index);
    if (typeof tiff.getImages === "function") return (await tiff.getImages())[index];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }

  async function decodeRawTiffMain(tile, rawTiff) {
    if (!$.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");

    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const ab = await rawTiffToArrayBuffer(rawTiff);

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
        throw new Error(`[RawTiffPlugin] TIFF contains ${count} images. Provide rawTiff.hints.imageIndex.`);
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
      typeof img.getPhotometricInterpretation === "function" ? img.getPhotometricInterpretation()
        : (img.fileDirectory ? img.fileDirectory.PhotometricInterpretation : undefined);

    const fileDirectory = img.fileDirectory || null;
    const colorMap = fileDirectory && fileDirectory.ColorMap ? fileDirectory.ColorMap : null;

    const decodeOpts = Object.assign({ interleave: false }, hints.decode || {});
    const rasters = await img.readRasters(decodeOpts);

    const bands = Array.isArray(rasters) ? rasters : [rasters];
    const spp = Math.max(samplesPerPixel || 0, bands.length);

    return new TiffRaster({
      width, height,
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

  async function __rt_decodeViaWorker(tile, rawTiff, pool) {
    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const ab = await rawTiffToArrayBuffer(rawTiff);

    // resolve + merge format and forward to worker
    const extFmt = resolveExternalFormat(tile, rawTiff);
    const mergedFmt = deepMerge(defaults.format, extFmt || null);
    const hintsOut = Object.assign({}, hints, { formatResolved: mergedFmt });

    const transfer = (workerPoolOptions && workerPoolOptions.transferInput) ? [ab] : [];
    const payload = await pool.request("decodeRaster", { buffer: ab, hints: hintsOut }, transfer);
    return __rt_reviveRasterPayload(payload, hintsOut);
  }

  async function decodeRawTiff(tile, rawTiff) {
    if (!$.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const pool = getWorkerPool();
    if (pool) return await __rt_decodeViaWorker(tile, rawTiff, pool);
    return await decodeRawTiffMain(tile, rawTiff);
  }

  async function __rt_rawTiffToImageBitmap(tile, rawTiff) {
    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const pool = getWorkerPool();
    if (pool) {
      const ab = await rawTiffToArrayBuffer(rawTiff);

      const extFmt = resolveExternalFormat(tile, rawTiff);
      const mergedFmt = deepMerge(defaults.format, extFmt || null);
      const hintsOut = Object.assign({}, hints, { formatResolved: mergedFmt });

      const transfer = (workerPoolOptions && workerPoolOptions.transferInput) ? [ab] : [];
      const out = await pool.request("decodeAndRenderImageBitmap", { buffer: ab, hints: hintsOut }, transfer);

      if (out && out.kind === "imageBitmap") return out.imageBitmap;
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

    const raster = await decodeRawTiffMain(tile, rawTiff);
    return await rasterToImageBitmap(tile, raster);
  }

  async function __rt_rawTiffToGpuTextureSet(tile, rawTiff) {
    const hints = (rawTiff && rawTiff.hints) || (rawTiff instanceof RawTiff ? rawTiff.hints : null) || {};
    const pool = getWorkerPool();
    if (!pool) {
      // fallback: decode + (slow) pack on main thread through raster edge
      const raster = await decodeRawTiffMain(tile, rawTiff);
      return await __rt_tiffRasterToGpuTextureSet(tile, raster);
    }

    const ab = await rawTiffToArrayBuffer(rawTiff);

    const extFmt = resolveExternalFormat(tile, rawTiff);
    const mergedFmt = deepMerge(defaults.format, extFmt || null);
    const hintsOut = Object.assign({}, hints, { formatResolved: mergedFmt });

    const transfer = (workerPoolOptions && workerPoolOptions.transferInput) ? [ab] : [];
    const out = await pool.request("decodeAndPackGpuTextureSet", { buffer: ab, hints: hintsOut }, transfer);

    // out: { rasterPayload, texSet }
    const texSet = __rt_reviveGpuTextureSetPayload(out.texSet);
    // carry forward hints so downstream can inspect if needed
    texSet.hints = hintsOut;
    return texSet;
  }

  async function __rt_tiffRasterToGpuTextureSet(tile, raster) {
    const pool = getWorkerPool();
    if (!pool) {
      // main-thread fallback: keep existing behavior (not ideal, but functional)
      // Here we reuse the existing RGBA8 renderer if needed, but for data packing you probably want worker.
      logOnce("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      // Minimal fallback: treat as data, pack first 4 bands to RGBA8
      const width = raster.width;
      const height = raster.height;
      const px = width * height;
      const out = new Uint8Array(px * 4);
      for (let i = 0, j = 0; i < px; i++, j += 4) {
        out[j] = raster.bands[0] ? raster.bands[0][i] : 0;
        out[j + 1] = raster.bands[1] ? raster.bands[1][i] : 0;
        out[j + 2] = raster.bands[2] ? raster.bands[2][i] : 0;
        out[j + 3] = raster.bands[3] ? raster.bands[3][i] : 255;
      }
      return new GpuTextureSet({
        width, height,
        mode: "data",
        channelCount: raster.bands ? raster.bands.length : 0,
        packs: [{ format: "RGBA8", data: out, channels: [0, 1, 2, 3], normalized: false, scale: [1,1,1,1], offset: [0,0,0,0] }],
      });
    }

    // Serialize raster bands (transfer) + forward resolved format
    const hints = raster.hints || {};
    const extFmt = resolveExternalFormat(tile, raster);
    const mergedFmt = deepMerge(defaults.format, extFmt || null);
    const hintsOut = Object.assign({}, hints, { formatResolved: mergedFmt });

    const bands = raster.bands.map((arr) => ({
      ctor: arr.constructor?.name || "Uint8Array",
      buffer: arr.buffer,
      byteOffset: arr.byteOffset,
      length: arr.length,
    }));

    const rasterPayload = {
      width: raster.width,
      height: raster.height,
      bands,
      samplesPerPixel: raster.samplesPerPixel,
      bitsPerSample: raster.bitsPerSample,
      sampleFormat: raster.sampleFormat,
      photometricInterpretation: raster.photometricInterpretation,
      colorMap: raster.colorMap,
      fileDirectory: raster.fileDirectory,
    };

    const transfers = bands.map((b) => b.buffer);
    const out = await pool.request("rasterToGpuTextureSet", { raster: rasterPayload, hints: hintsOut }, transfers);
    const texSet = __rt_reviveGpuTextureSetPayload(out);
    texSet.hints = hintsOut;
    return texSet;
  }

  // --- CPU fallback renderer (existing) ---

  function defaultToneMap(value, bandIndex, raster) {
    if (value == null || Number.isNaN(value)) return 0;

    const band = raster.bands[bandIndex];
    const isFloat = band instanceof Float32Array || band instanceof Float64Array;
    if (isFloat) {
      const v = Math.max(0, Math.min(1, value));
      return Math.round(v * 255);
    }

    const bits = raster.bitsPerSample && raster.bitsPerSample[bandIndex] != null ? raster.bitsPerSample[bandIndex] : (raster.bitsPerSample ? raster.bitsPerSample[0] : 8);
    const max = bits <= 0 ? 255 : Math.pow(2, bits) - 1;
    if (max <= 255) return Math.max(0, Math.min(255, value));
    return Math.round(Math.max(0, Math.min(1, value / max)) * 255);
  }

  function rasterToRGBA8(raster) {
    const toneMap = defaults.toneMap || defaultToneMap;
    const PIx = globals.photometricInterpretations || {};

    const width = raster.width;
    const height = raster.height;
    const pixelCount = width * height;

    const renderChannels = raster.hints.renderChannels || raster.renderChannels || null;
    const spp = raster.samplesPerPixel || raster.bands.length || 1;
    const byteAt = (bandIdx, pxIdx) => toneMap(raster.bands[bandIdx][pxIdx], bandIdx, raster);

    const photometric = raster.photometricInterpretation;

    if (photometric === PIx.Palette && raster.colorMap) {
      const indices = raster.bands[0];
      return Converters.RGBAfromPalette(indices, raster.colorMap);
    }

    if ((photometric === PIx.WhiteIsZero || photometric === PIx.BlackIsZero) && spp >= 1) {
      const band0 = raster.bands[0];
      const bits = raster.bitsPerSample && raster.bitsPerSample[0] != null ? raster.bitsPerSample[0] : 8;
      const max = Math.pow(2, bits) - 1;

      if (photometric === PIx.WhiteIsZero) return Converters.RGBAfromWhiteIsZero(band0, max);
      if (photometric === PIx.BlackIsZero) return Converters.RGBAfromBlackIsZero(band0, max);

      const out = new Uint8ClampedArray(pixelCount * 4);
      for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
        let v = toneMap(band0[i], 0, raster);
        if (photometric === PIx.WhiteIsZero) v = 255 - v;
        out[j] = out[j + 1] = out[j + 2] = v;
        out[j + 3] = 255;
      }
      return out;
    }

    const channels = renderChannels ||
      (photometric === PIx.RGB || photometric === PIx.YCbCr || photometric === PIx.CIELab ? [0, 1, 2] :
        (spp >= 3 ? [0, 1, 2] : [0]));

    if (channels.length > 4) {
      logOnce(
        "renderChannels>4_to_RGBA",
        `[tiff] Requested ${channels.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
        'warn'
      );
      channels.splice(4);
    }

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

    const tmp = new Uint8ClampedArray(pixelCount * channels.length);
    for (let i = 0; i < pixelCount; i++) {
      const base = i * channels.length;
      for (let c = 0; c < channels.length; c++) {
        const bandIdx = channels[c];
        tmp[base + c] = bandIdx < raster.bands.length ? byteAt(bandIdx, i) : 0;
      }
    }

    if (photometric === PIx.YCbCr && channels.length >= 3) return Converters.RGBAfromYCbCr(tmp);
    if (photometric === PIx.CMYK && channels.length >= 4) return Converters.RGBAfromCMYK(tmp);
    if (photometric === PIx.CIELab && channels.length >= 3) return Converters.RGBAfromCIELab(tmp);
    if (channels.length === 4) return tmp;
    if (channels.length === 3) return Converters.RGBAfromRGB(tmp);

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

  async function rasterToImageBitmap(tile, raster) {
    // eslint-disable-next-line compat/compat
    if (typeof createImageBitmap !== "function") {
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    }
    const rgba = rasterToRGBA8(raster);
    const imgData = new ImageData(rgba, raster.width, raster.height);
    // eslint-disable-next-line compat/compat
    return await createImageBitmap(imgData);
  }

  async function rasterToContext2d(tile, raster) {
    const bmp = await rasterToImageBitmap(tile, raster);
    const canvas = document.createElement("canvas");
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(bmp, 0, 0);
    return ctx;
  }

  // --- Converter edges ---
  if ($.converter) {
    $.converter.learn("rawTiff", "tiffRaster", (tile, data) => decodeRawTiff(tile, data), 2, 10);

    if (workerPoolOptions.enableRawTiffToImageBitmap) {
      $.converter.learn("rawTiff", "imageBitmap", (tile, data) => __rt_rawTiffToImageBitmap(tile, data), 1, 5);
    }

    $.converter.learn("tiffRaster", "context2d", (tile, raster) => rasterToContext2d(tile, raster), 2, 10);
    $.converter.learn("tiffRaster", "imageBitmap", (tile, raster) => rasterToImageBitmap(tile, raster), 1, 50);

    $.converter.learn("rawTiff", "gpuTextureSet", (tile, raw) => __rt_rawTiffToGpuTextureSet(tile, raw), 1, 8);
    $.converter.learn("tiffRaster", "gpuTextureSet", (tile, raster) => __rt_tiffRasterToGpuTextureSet(tile, raster), 1, 12);

  } else {
    $.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  }

  // todo consider making this simpler
  const api = {
    __installed: true,
    RawTiff,
    TiffRaster,
    GpuTextureSet,
    Converters,

    decodeRawTiff,
    rasterToRGBA8,
    rasterToContext2d,
    rasterToImageBitmap,

    getWorkerPool,
    terminateWorkerPool() {
      const s = $.RawTiffPluginShared;
      if (s && s.__rawTiffWorkerPool) {
        s.__rawTiffWorkerPool.terminate();
        s.__rawTiffWorkerPool = null;
      }
    },

    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(tile, data, toType, fromType) {
      if (!$.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const srcType = fromType || $.converter.guessType(data);
      return $.converter.convert(tile, data, srcType, toType);
    },

    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(source, opts) {
      return new RawTiff(source, opts);
    },

    /**
     * Expose defaults (merged).
     */
    defaults,
  };

  $.RawTiffPlugin = api;
  return api;
}