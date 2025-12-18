/* eslint-disable no-restricted-globals */
/**
 * RawTIFF worker for OpenSeadragon converter plugin.
 *
 * Responsibilities:
 *  - decodeRaster: raw TIFF bytes -> multi-band raster payload (transferable band buffers)
 *  - decodeAndRenderImageBitmap: raw TIFF bytes -> ImageBitmap (preferred) or RGBA8 fallback
 *
 * This worker intentionally does not make any "tile/page decisions" unless hints.imageIndex is provided.
 */

import { fromArrayBuffer, fromBlob } from "geotiff";
import { Converters } from "../utils/Converters";

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

function rasterToRGBA8(raster) {
  const spp = raster.samplesPerPixel || (raster.bands ? raster.bands.length : 1);
  const photometric = raster.photometricInterpretation;

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

  // RGB
  if (photometric === PI.RGB && spp >= 3) {
    const r = raster.bands[0];
    const g = raster.bands[1];
    const b = raster.bands[2];
    const a = spp >= 4 ? raster.bands[3] : null;
    return Converters.RGBAfromRGB(r, g, b, a);
  }

  // YCbCr
  if (photometric === PI.YCbCr && spp >= 3) {
    const y = raster.bands[0];
    const cb = raster.bands[1];
    const cr = raster.bands[2];
    return Converters.RGBAfromYCbCr(y, cb, cr);
  }

  // CMYK
  if (photometric === PI.CMYK && spp >= 4) {
    const c = raster.bands[0];
    const m = raster.bands[1];
    const y = raster.bands[2];
    const k = raster.bands[3];
    return Converters.RGBAfromCMYK(c, m, y, k);
  }

  // CIELab
  if (photometric === PI.CIELab && spp >= 3) {
    const l = raster.bands[0];
    const a = raster.bands[1];
    const b = raster.bands[2];
    return Converters.RGBAfromCIELab(l, a, b);
  }

  // Fallback: simple channel mapping:
  // - if 1 band: grayscale
  // - if 3+: RGB from first 3, alpha optional from 4th
  if (spp === 1) {
    const band0 = raster.bands[0];
    const bits = raster.bitsPerSample && raster.bitsPerSample[0] != null ? raster.bitsPerSample[0] : 8;
    const max = Math.pow(2, bits) - 1;
    return Converters.RGBAfromBlackIsZero(band0, max);
  }
  const r = raster.bands[0];
  const g = raster.bands[1] || raster.bands[0];
  const b = raster.bands[2] || raster.bands[0];
  const a = raster.bands[3] || null;
  return Converters.RGBAfromRGB(r, g, b, a);
}

function reviveBands(descs) {
  return descs.map((b) => {
    const Ctor = (typeof b.ctor === "string" && self[b.ctor]) ? self[b.ctor] : Uint8Array;
    return new Ctor(b.buffer, b.byteOffset || 0, b.length);
  });
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
  const rasters = normalizeRasters(await img.readRasters(decodeOpts));

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
    fileDirectory, // includes useful tags for future renderers
  };
}

async function decodeAndRenderImageBitmapFromArrayBuffer(ab, hints) {
  const rasterPayload = await decodeRasterFromArrayBuffer(ab, hints);
  const raster = Object.assign({}, rasterPayload, { bands: reviveBands(rasterPayload.bands) });
  const rgba = rasterToRGBA8(raster);

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

self.onmessage = async (ev) => {
  const msg = ev.data || {};
  const id = msg.id;
  const op = msg.op;
  const payload = msg.payload || {};
  try {
    if (op === "decodeRaster") {
      const ab = payload.buffer;
      const hints = payload.hints || {};
      const result = await decodeRasterFromArrayBuffer(ab, hints);
      const transfers = result.bands.map((b) => b.buffer);
      self.postMessage({ id, ok: true, result }, transfers);
      return;
    }

    if (op === "decodeAndRenderImageBitmap") {
      const ab = payload.buffer;
      const hints = payload.hints || {};
      const result = await decodeAndRenderImageBitmapFromArrayBuffer(ab, hints);

      if (result.kind === "imageBitmap") {
        self.postMessage({ id, ok: true, result }, [result.imageBitmap]);
      } else {
        self.postMessage({ id, ok: true, result }, [result.rgbaBuffer]);
      }
      return;
    }

    if (op === "rasterToRGBA8") {
      const p = payload.raster;
      const raster = Object.assign({}, p, { bands: reviveBands(p.bands) });
      const rgba = rasterToRGBA8(raster);
      const result = {
        kind: "rgba8",
        width: raster.width,
        height: raster.height,
        rgbaBuffer: rgba.buffer,
        rgbaByteOffset: rgba.byteOffset,
        rgbaLength: rgba.length,
      };
      self.postMessage({ id, ok: true, result }, [result.rgbaBuffer]);
      return;
    }

    throw new Error(`[RawTiffPlugin] Unknown worker op: ${op}`);
  } catch (e) {
    self.postMessage({ id, ok: false, error: errorToPlain(e) });
  }
};
