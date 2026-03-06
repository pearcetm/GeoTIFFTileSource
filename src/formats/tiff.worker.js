/* eslint-disable no-restricted-globals */
/**
 * RawTIFF worker for OpenSeadragon converter plugin.
 *
 * Responsibilities:
 *  - decodeRaster: raw TIFF bytes -> multi-band raster payload (transferable band buffers)
 *  - decodeAndRenderImageBitmap: raw TIFF bytes -> ImageBitmap (preferred) or RGBA8 fallback
 *  - decodeAndPackGpuTextureSet: raw TIFF bytes -> GPU-packed texture set (RGBA8 or RGBA16F)
 *  - rasterToGpuTextureSet: raster payload -> GPU-packed texture set (RGBA8 or RGBA16F)
 *
 * The "format" override is provided externally and must arrive via:
 *   payload.hints.formatResolved (preferred) OR payload.hints.format
 */

import { fromArrayBuffer } from "geotiff";
import { Converters } from "../utils/Converters.js";

// Tests in node have no self.
const workerRef = self || globalThis;

function workerWarn(code, message) {
  workerRef.postMessage({
    kind: "warn",
    code,
    message,
  });
}

// Photometric interpretation constants (matching TIFF spec / geotiff.js)
const PI = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
};

function errorToPlain(err) {
  try {
    if (!err) return "Unknown error";
    if (typeof err === "string") return err;
    return err.message || JSON.stringify(err);
  } catch {
    return String(err);
  }
}

function normalizeRasters(rasters) {
  if (Array.isArray(rasters)) return rasters;
  return [rasters];
}

function getPhotometric(fileDirectory) {
  return fileDirectory && typeof fileDirectory.PhotometricInterpretation === "number"
    ? fileDirectory.PhotometricInterpretation
    : undefined;
}

function getColorMap(fileDirectory) {
  return fileDirectory ? (fileDirectory.ColorMap || null) : null;
}

function getBitsPerSample(img) {
  try {
    if (typeof img.getBitsPerSample === "function") return img.getBitsPerSample();
  } catch { /* noop */ }
  return (img && img.fileDirectory && img.fileDirectory.BitsPerSample) || [8];
}

function getSamplesPerPixel(img) {
  try {
    if (typeof img.getSamplesPerPixel === "function") return img.getSamplesPerPixel();
  } catch { /* noop */ }
  return (img && img.fileDirectory && img.fileDirectory.SamplesPerPixel) || 1;
}

function getSampleFormat(img) {
  const fd = img && img.fileDirectory;
  return fd && fd.SampleFormat ? fd.SampleFormat : null;
}

function reviveBands(descs) {
  return descs.map((b) => {
    const Ctor = (typeof b.ctor === "string" && workerRef[b.ctor]) ? workerRef[b.ctor] : Uint8Array;
    return new Ctor(b.buffer, b.byteOffset || 0, b.length);
  });
}

function inferFromTIFFTags(raster) {
  const spp = raster.samplesPerPixel || (raster.bands ? raster.bands.length : 1);
  const pi = raster.photometricInterpretation;

  // If photometric clearly implies an image, treat as image.
  if (
    pi === PI.RGB ||
    pi === PI.YCbCr ||
    pi === PI.CMYK ||
    pi === PI.CIELab ||
    pi === PI.Palette
  ) {
    return "image";
  }

  // Grayscale "image" case
  // todo: consider still outputing as data to save space (this forces RGBA expansion, although but the expansion
  //  happens sooner or later, systems that directly render the data might e.g. avoid passing the expanded bands to gpu)
  if ((pi === PI.BlackIsZero || pi === PI.WhiteIsZero) && spp === 1) {
    return "image";
  }

  // Default to data for unknown PI.
  return "data";
}

/**
 * Float32 -> IEEE-754 half-float bits (Uint16).
 * Produces correct HALF_FLOAT bit patterns suitable for WebGL upload.
 */
function f32ToF16Bits(val) {
  const floatView = new Float32Array(1);
  const intView = new Uint32Array(floatView.buffer);

  floatView[0] = val;
  const x = intView[0];

  const sign = (x >> 31) & 0x1;
  let exp = (x >> 23) & 0xFF;
  let mant = x & 0x7FFFFF;

  // NaN/Inf
  if (exp === 0xFF) {
    if (mant !== 0) return (sign << 15) | 0x7E00; // qNaN
    return (sign << 15) | 0x7C00; // Inf
  }

  // Denorm/Zero in f32
  if (exp === 0) {
    return (sign << 15); // flush subnormals to 0
  }

  // Normalize exponent from f32 bias (127) to f16 bias (15)
  exp = exp - 127 + 15;

  // Overflow -> Inf
  if (exp >= 0x1F) return (sign << 15) | 0x7C00;

  // Underflow -> 0 (flush)
  if (exp <= 0) return (sign << 15);

  // Mantissa: f32 has 23 bits, f16 has 10 bits
  mant = mant + 0x00001000; // rounding
  if (mant & 0x00800000) {
    mant = 0;
    exp += 1;
    if (exp >= 0x1F) return (sign << 15) | 0x7C00;
  }

  return (sign << 15) | (exp << 10) | (mant >> 13);
}

function resolveFormatFromHints(hints) {
  return (hints && (hints.formatResolved || hints.format)) || null;
}

/**
 * Image-mode RGBA8 renderer that respects:
 *  - photometricInterpretation
 *  - optional format.image.rgbaChannels override
 *  - optional hints.renderChannels override
 *
 * NOTE: This worker version is intentionally "display-oriented" and assumes 8-bit-ish
 * for image-mode. Precision-focused packing happens after this if RGBA16F is requested.
 */
function rasterToRGBA8_ImageMode(raster, hints, format) {
  const spp = raster.samplesPerPixel || (raster.bands ? raster.bands.length : 1);
  const photometric = raster.photometricInterpretation;

  // Channel override precedence:
  // format.image.rgbaChannels > hints.renderChannels > default behavior
  let channels = null;
  if (format && format.image && Array.isArray(format.image.rgbaChannels)) {
    channels = format.image.rgbaChannels.slice();
  } else if (hints && Array.isArray(hints.renderChannels)) {
    channels = hints.renderChannels.slice();
  }

  if (channels && channels.length > 4) {
    workerWarn(
      "renderChannels>4_to_RGBA_worker",
      `[tiff-worker] Requested ${channels.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`
    );
    channels.splice(4);
  }

  // Palette
  if (photometric === PI.Palette && raster.colorMap) {
    const indices = raster.bands[0];
    return Converters.RGBAfromPalette(indices, raster.colorMap);
  }

  // WhiteIsZero / BlackIsZero
  if ((photometric === PI.WhiteIsZero || photometric === PI.BlackIsZero) && spp >= 1) {
    const band0 = raster.bands[0];
    const bits = raster.bitsPerSample && raster.bitsPerSample[0] != null ? raster.bitsPerSample[0] : 8;
    const max = Math.pow(2, bits) - 1;
    if (photometric === PI.WhiteIsZero) return Converters.RGBAfromWhiteIsZero(band0, max);
    return Converters.RGBAfromBlackIsZero(band0, max);
  }

  // If explicit channel mapping exists, use it (planar -> interleaved -> RGBA)
  if (channels && channels.length >= 1) {
    const width = raster.width;
    const height = raster.height;
    const pixelCount = width * height;

    if (channels.length === 1) {
      const b0 = raster.bands[channels[0]];
      const bits = raster.bitsPerSample && raster.bitsPerSample[channels[0]] != null ? raster.bitsPerSample[channels[0]] : 8;
      const max = Math.pow(2, bits) - 1;
      // treat as black-is-zero for visualization
      return Converters.RGBAfromBlackIsZero(b0, max);
    }

    // build interleaved tmp bytes by simple clamping (best-effort)
    const tmp = new Uint8ClampedArray(pixelCount * channels.length);
    for (let i = 0; i < pixelCount; i++) {
      const base = i * channels.length;
      for (let c = 0; c < channels.length; c++) {
        const bi = channels[c];
        const v = (bi != null && bi >= 0 && bi < raster.bands.length) ? raster.bands[bi][i] : 0;
        tmp[base + c] = v;
      }
    }

    // If we already built RGBA (4ch) and no special photometric, return directly.
    if (channels.length === 4 && photometric !== PI.YCbCr && photometric !== PI.CMYK && photometric !== PI.CIELab) {
      return tmp;
    }
    if (photometric === PI.YCbCr && channels.length >= 3) return Converters.RGBAfromYCbCr(tmp);
    if (photometric === PI.CMYK && channels.length >= 4) return Converters.RGBAfromCMYK(tmp);
    if (photometric === PI.CIELab && channels.length >= 3) return Converters.RGBAfromCIELab(tmp);
    if (channels.length === 3) return Converters.RGBAfromRGB(tmp);

    // fallback: force into RGBA
    const out = new Uint8ClampedArray(pixelCount * 4);
    for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
      const base = i * channels.length;
      out[j] = tmp[base] || 0;
      out[j + 1] = tmp[base + 1] || 0;
      out[j + 2] = tmp[base + 2] || 0;
      out[j + 3] = (channels.length >= 4) ? (tmp[base + 3] || 255) : 255;
    }
    return out;
  }

  // RGB / YCbCr / CMYK / Lab defaults
  if (photometric === PI.RGB && spp >= 3) {
    const r = raster.bands[0];
    const g = raster.bands[1];
    const b = raster.bands[2];
    const a = spp >= 4 ? raster.bands[3] : null;
    return Converters.RGBAfromRGB(r, g, b, a);
  }

  if (photometric === PI.YCbCr && spp >= 3) {
    const y = raster.bands[0];
    const cb = raster.bands[1];
    const cr = raster.bands[2];
    return Converters.RGBAfromYCbCr(y, cb, cr);
  }

  if (photometric === PI.CMYK && spp >= 4) {
    const c = raster.bands[0];
    const m = raster.bands[1];
    const y = raster.bands[2];
    const k = raster.bands[3];
    return Converters.RGBAfromCMYK(c, m, y, k);
  }

  if (photometric === PI.CIELab && spp >= 3) {
    const l = raster.bands[0];
    const a = raster.bands[1];
    const b = raster.bands[2];
    return Converters.RGBAfromCIELab(l, a, b);
  }

  // Fallback grayscale
  const band0 = raster.bands[0];
  const bits = raster.bitsPerSample && raster.bitsPerSample[0] != null ? raster.bitsPerSample[0] : 8;
  const max = Math.pow(2, bits) - 1;
  return Converters.RGBAfromBlackIsZero(band0, max);
}

function packCanonicalRGBA(rgba8, width, height, format) {
  const gpu = (format && format.gpu) || {};
  const preferRGBA8 = gpu.preferRGBA8 !== false;
  const forceRGBA16F = !!gpu.forceRGBA16F;

  // RGBA8 is the default for image-mode unless forced to 16F
  if (preferRGBA8 && !forceRGBA16F) {
    const data = new Uint8Array(rgba8.buffer, rgba8.byteOffset, rgba8.byteLength);
    return {
      width,
      height,
      mode: "image",
      channelCount: 4,
      packs: [{
        format: "RGBA8",
        data: {
          ctor: "Uint8Array",
          buffer: data.buffer,
          byteOffset: data.byteOffset,
          length: data.length,
        },
        channels: [0, 1, 2, 3],
        normalized: false,
        scale: [1, 1, 1, 1],
        offset: [0, 0, 0, 0],
      }],
    };
  }

  // RGBA16F image-mode: convert bytes -> float -> half
  const px = width * height;
  const out = new Uint16Array(px * 4);
  for (let i = 0; i < out.length; i++) {
    // store 0..255 as float 0..255 (identity); shader can treat as linear display
    out[i] = f32ToF16Bits(rgba8[i]);
  }

  return {
    width,
    height,
    mode: "image",
    channelCount: 4,
    packs: [{
      format: "RGBA16F",
      data: {
        ctor: "Uint16Array",
        buffer: out.buffer,
        byteOffset: 0,
        length: out.length,
      },
      channels: [0, 1, 2, 3],
      normalized: false,
      scale: [1, 1, 1, 1],
      offset: [0, 0, 0, 0],
    }],
  };
}

function packBandsAsData(raster, format) {
  const gpu = (format && format.gpu) || {};
  const preferRGBA8 = gpu.preferRGBA8 !== false;
  const forceRGBA16F = !!gpu.forceRGBA16F;

  const width = raster.width;
  const height = raster.height;
  const pixelCount = width * height;

  const bandCount = raster.bands ? raster.bands.length : 0;
  const channels = (format && Array.isArray(format.channels) && format.channels.length)
    ? format.channels.slice()
    : [...Array(bandCount).keys()];
  const channelCount = channels.filter((c) => c != null && c >= 0).length;

  // Decide RGBA8 vs RGBA16F
  const allU8 = channels.every((c) => {
    const b = raster.bands[c];
    return b instanceof Uint8Array || b instanceof Uint8ClampedArray;
  });
  const useRGBA8 = preferRGBA8 && !forceRGBA16F && allU8;

  const packs = [];
  for (let p = 0; p < channels.length; p += 4) {
    const packCh = [
      channels[p] ?? -1,
      channels[p + 1] ?? -1,
      channels[p + 2] ?? -1,
      channels[p + 3] ?? -1,
    ];

    if (useRGBA8) {
      const data = new Uint8Array(pixelCount * 4);
      for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
        for (let k = 0; k < 4; k++) {
          const bi = packCh[k];
          data[j + k] = (bi >= 0 && bi < raster.bands.length) ? raster.bands[bi][i] : 0;
        }
      }
      packs.push({
        format: "RGBA8",
        data: { ctor: "Uint8Array", buffer: data.buffer, byteOffset: 0, length: data.length },
        channels: packCh,
        normalized: false,
        scale: [1, 1, 1, 1],
        offset: [0, 0, 0, 0],
      });
      continue;
    }

    // RGBA16F packing with "auto normalization if needed"
    // If integer max exceeds half float range (65504), normalize to [0..1] using scale=max.
    const data = new Uint16Array(pixelCount * 4);
    const scale = [1, 1, 1, 1];
    const offset = [0, 0, 0, 0];

    for (let k = 0; k < 4; k++) {
      const bi = packCh[k];
      if (bi < 0 || bi >= raster.bands.length) continue;

      const bits = raster.bitsPerSample && raster.bitsPerSample[bi] != null ? raster.bitsPerSample[bi] : (raster.bitsPerSample ? raster.bitsPerSample[0] : 8);
      const band = raster.bands[bi];
      const isFloat = band instanceof Float32Array || band instanceof Float64Array;

      if (!isFloat) {
        const max = bits > 0 ? (Math.pow(2, bits) - 1) : 65535;
        if (max > 65504) {
          // normalize to 0..1 for safe half range; shader reconstructs with value = sample * scale + offset
          scale[k] = max;
          offset[k] = 0;
        }
      }
    }

    let clamped = false;
    for (let i = 0, j = 0; i < pixelCount; i++, j += 4) {
      for (let k = 0; k < 4; k++) {
        const bi = packCh[k];
        let v = (bi >= 0 && bi < raster.bands.length) ? Number(raster.bands[bi][i]) : 0;

        // apply normalization (store v/scale)
        if (scale[k] !== 1) v = v / scale[k];

        // clamp to half-float finite range when storing raw floats
        if (v > 65504) { v = 65504; clamped = true; }
        else if (v < -65504) { v = -65504; clamped = true; }

        data[j + k] = f32ToF16Bits(v);
      }
    }

    if (clamped) {
      workerWarn(
        "gpuPack_f16_clamp_worker",
        "[tiff-worker] Some values exceeded RGBA16F finite range and were clamped. Consider normalization via format.gpu.forceRGBA16F + relying on scale/offset."
      );
    }

    packs.push({
      format: "RGBA16F",
      data: { ctor: "Uint16Array", buffer: data.buffer, byteOffset: 0, length: data.length },
      channels: packCh,
      normalized: false,
      scale,
      offset,
    });
  }

  return { width, height, mode: "data", channelCount, packs };
}

async function decodeRasterFromArrayBuffer(ab, hints) {
  const tiff = await fromArrayBuffer(ab);
  const count = await tiff.getImageCount();
  let imageIndex = hints && typeof hints.imageIndex === "number" ? hints.imageIndex : null;

  if (count !== 1) {
    if (imageIndex == null) {
      throw new Error(`[RawTiffPlugin] TIFF has ${count} images; provide rawTiff.hints.imageIndex to decode.`);
    }
    if (imageIndex < 0 || imageIndex >= count) {
      throw new Error(`[RawTiffPlugin] imageIndex ${imageIndex} out of range (0..${count - 1}).`);
    }
  } else {
    imageIndex = 0;
  }

  const img = await tiff.getImage(imageIndex);
  const width = img.getWidth();
  const height = img.getHeight();
  const fileDirectory = img.fileDirectory || {};
  const samplesPerPixel = getSamplesPerPixel(img);
  const bitsPerSample = getBitsPerSample(img);
  const sampleFormat = getSampleFormat(img);
  const photometricInterpretation = getPhotometric(fileDirectory);
  const colorMap = getColorMap(fileDirectory);

  const decodeOpts = Object.assign({ interleave: false }, (hints && hints.decode) || {});
  const rasters = normalizeRasters(await img.readRasters({
    ...decodeOpts,
    pool: null, // already in worker, do not nest
  }));

  const bands = rasters.map((arr) => ({
    ctor: arr.constructor && arr.constructor.name ? arr.constructor.name : "Uint8Array",
    buffer: arr.buffer,
    byteOffset: arr.byteOffset,
    length: arr.length,
  }));

  return {
    width,
    height,
    bands,
    samplesPerPixel: Math.max(samplesPerPixel || 0, bands.length),
    bitsPerSample: Array.isArray(bitsPerSample) ? bitsPerSample : [bitsPerSample],
    sampleFormat: sampleFormat || null,
    photometricInterpretation,
    colorMap,
    fileDirectory,
  };
}

async function decodeAndRenderImageBitmapFromArrayBuffer(ab, hints) {
  const rasterPayload = await decodeRasterFromArrayBuffer(ab, hints);
  const raster = Object.assign({}, rasterPayload, { bands: reviveBands(rasterPayload.bands) });
  const format = resolveFormatFromHints(hints);

  // image-mode render only for ImageBitmap path
  const rgba = rasterToRGBA8_ImageMode(raster, hints, format);

  // Prefer OffscreenCanvas -> ImageBitmap if available in this worker.
  if (typeof OffscreenCanvas === "function") {
    const canvas = new OffscreenCanvas(raster.width, raster.height);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const imgData = new ImageData(rgba, raster.width, raster.height);
    ctx.putImageData(imgData, 0, 0);
    const bmp = canvas.transferToImageBitmap();
    return { kind: "imageBitmap", imageBitmap: bmp };
  }

  // Fallback: return RGBA bytes and let main thread create an ImageBitmap.
  return {
    kind: "rgba8",
    width: raster.width,
    height: raster.height,
    rgbaBuffer: rgba.buffer,
    rgbaByteOffset: rgba.byteOffset,
    rgbaLength: rgba.length,
  };
}

function rasterPayloadToTextureSet(rasterPayload, hints) {
  const raster = Object.assign({}, rasterPayload, { bands: reviveBands(rasterPayload.bands) });
  const format = resolveFormatFromHints(hints) || {};
  const interpretation = format.interpretation || "auto";
  const inferred = inferFromTIFFTags(raster);
  const mode = (interpretation === "auto") ? inferred : interpretation;

  if (mode === "image") {
    const rgba = rasterToRGBA8_ImageMode(raster, hints, format);
    return packCanonicalRGBA(rgba, raster.width, raster.height, format);
  }
  return packBandsAsData(raster, format);
}

async function decodeAndPackGpuTextureSetFromArrayBuffer(ab, hints) {
  const rasterPayload = await decodeRasterFromArrayBuffer(ab, hints);
  const texSet = rasterPayloadToTextureSet(rasterPayload, hints);
  return { rasterPayload, texSet };
}

function collectTransfersForRasterPayload(rasterPayload) {
  return rasterPayload.bands.map((b) => b.buffer);
}

function collectTransfersForTextureSet(texSet) {
  const transfers = [];
  for (const p of texSet.packs) {
    transfers.push(p.data.buffer);
  }
  return transfers;
}

workerRef.onmessage = async (ev) => {
  const msg = ev.data || {};
  const id = msg.id;
  const op = msg.op;
  const payload = msg.payload || {};
  try {
    if (op === "decodeRaster") {
      const ab = payload.buffer;
      const hints = payload.hints || {};
      const result = await decodeRasterFromArrayBuffer(ab, hints);
      workerRef.postMessage({ id, ok: true, result }, collectTransfersForRasterPayload(result));
      return;
    }

    if (op === "decodeAndRenderImageBitmap") {
      const ab = payload.buffer;
      const hints = payload.hints || {};
      const result = await decodeAndRenderImageBitmapFromArrayBuffer(ab, hints);

      if (result.kind === "imageBitmap") {
        workerRef.postMessage({ id, ok: true, result }, [result.imageBitmap]);
      } else {
        workerRef.postMessage({ id, ok: true, result }, [result.rgbaBuffer]);
      }
      return;
    }

    if (op === "decodeAndPackGpuTextureSet") {
      const ab = payload.buffer;
      const hints = payload.hints || {};
      const result = await decodeAndPackGpuTextureSetFromArrayBuffer(ab, hints);

      const transfers = [
        ...collectTransfersForRasterPayload(result.rasterPayload),
        ...collectTransfersForTextureSet(result.texSet),
      ];
      workerRef.postMessage({ id, ok: true, result }, transfers);
      return;
    }

    if (op === "rasterToGpuTextureSet") {
      const raster = payload.raster;
      const hints = payload.hints || {};
      const texSet = rasterPayloadToTextureSet(raster, hints);
      workerRef.postMessage({ id, ok: true, result: texSet }, collectTransfersForTextureSet(texSet));
      return;
    }

    throw new Error(`[RawTiffPlugin] Unknown worker op: ${op}`);
  } catch (e) {
    workerRef.postMessage({ id, ok: false, error: errorToPlain(e) });
  }
};