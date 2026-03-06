// The Converters class is adapted from https://github.com/geotiffjs/geotiff.js/blob/master/src/rgb.js
// The MIT License (MIT)

// Copyright (c) 2015 EOX IT Services GmbH

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// The code has been further adapted to support planar bands by OpenSeadragon
// contributors.

/**
 * Color-space helpers.
 *
 * Each converter supports both:
 *  - interleaved input (single typed array)
 *  - planar input (separate band arrays)
 */
export class Converters {
  static RGBAfromYCbCr(...args) {
    // Supports:
    //  - interleaved input: RGBAfromYCbCr(inputInterleavedYCbCr)
    //  - planar bands:      RGBAfromYCbCr(yBand, cbBand, crBand)
    let y, cb, cr;

    if (args.length === 1) {
      const input = args[0];
      const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);
      for (let i = 0, j = 0; i < input.length; i += 3, j += 4) {
        y = input[i];
        cb = input[i + 1];
        cr = input[i + 2];

        rgbaRaster[j] = y + 1.402 * (cr - 0x80);
        rgbaRaster[j + 1] = y - 0.34414 * (cb - 0x80) - 0.71414 * (cr - 0x80);
        rgbaRaster[j + 2] = y + 1.772 * (cb - 0x80);
        rgbaRaster[j + 3] = 255;
      }
      return rgbaRaster;
    }

    // planar
    [y, cb, cr] = args;
    const n = y.length;
    const rgbaRaster = new Uint8ClampedArray(n * 4);
    for (let i = 0, j = 0; i < n; i++, j += 4) {
      const yy = y[i];
      const cbb = cb[i];
      const crr = cr[i];

      rgbaRaster[j] = yy + 1.402 * (crr - 0x80);
      rgbaRaster[j + 1] = yy - 0.34414 * (cbb - 0x80) - 0.71414 * (crr - 0x80);
      rgbaRaster[j + 2] = yy + 1.772 * (cbb - 0x80);
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromRGB(...args) {
    // Supports:
    //  - interleaved RGB: RGBAfromRGB([r,g,b,r,g,b,...])
    //  - planar:          RGBAfromRGB(rBand, gBand, bBand, optionalAlphaBand)
    if (args.length === 1) {
      const input = args[0];
      const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);
      for (let i = 0, j = 0; i < input.length; i += 3, j += 4) {
        rgbaRaster[j] = input[i];
        rgbaRaster[j + 1] = input[i + 1];
        rgbaRaster[j + 2] = input[i + 2];
        rgbaRaster[j + 3] = 255;
      }
      return rgbaRaster;
    }

    const r = args[0];
    const g = args[1];
    const b = args[2];
    const a = args.length >= 4 ? args[3] : null;

    const n = r.length;
    const rgbaRaster = new Uint8ClampedArray(n * 4);
    for (let i = 0, j = 0; i < n; i++, j += 4) {
      rgbaRaster[j] = r[i];
      rgbaRaster[j + 1] = g[i];
      rgbaRaster[j + 2] = b[i];
      rgbaRaster[j + 3] = a ? a[i] : 255;
    }
    return rgbaRaster;
  }

  static RGBAfromWhiteIsZero(input, max) {
    const rgbaRaster = new Uint8ClampedArray(input.length * 4);
    let value;
    for (let i = 0, j = 0; i < input.length; ++i, j += 4) {
      value = 256 - (input[i] / max) * 256;
      rgbaRaster[j] = value;
      rgbaRaster[j + 1] = value;
      rgbaRaster[j + 2] = value;
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromBlackIsZero(input, max) {
    const rgbaRaster = new Uint8ClampedArray(input.length * 4);
    let value;
    for (let i = 0, j = 0; i < input.length; ++i, j += 4) {
      value = (input[i] / max) * 256;
      rgbaRaster[j] = value;
      rgbaRaster[j + 1] = value;
      rgbaRaster[j + 2] = value;
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromPalette(input, colorMap) {
    const rgbaRaster = new Uint8ClampedArray(input.length * 4);
    const greenOffset = colorMap.length / 3;
    const blueOffset = (colorMap.length / 3) * 2;
    for (let i = 0, j = 0; i < input.length; ++i, j += 4) {
      const mapIndex = input[i];
      rgbaRaster[j] = (colorMap[mapIndex] / 65536) * 256;
      rgbaRaster[j + 1] = (colorMap[mapIndex + greenOffset] / 65536) * 256;
      rgbaRaster[j + 2] = (colorMap[mapIndex + blueOffset] / 65536) * 256;
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromCMYK(...args) {
    // Supports:
    //  - interleaved CMYK: RGBAfromCMYK([c,m,y,k,c,m,y,k,...])
    //  - planar:          RGBAfromCMYK(cBand, mBand, yBand, kBand)
    if (args.length === 1) {
      const input = args[0];
      const rgbaRaster = new Uint8ClampedArray(input.length);
      for (let i = 0, j = 0; i < input.length; i += 4, j += 4) {
        const c = input[i];
        const m = input[i + 1];
        const y = input[i + 2];
        const k = input[i + 3];

        rgbaRaster[j] = 255 * ((255 - c) / 256) * ((255 - k) / 256);
        rgbaRaster[j + 1] = 255 * ((255 - m) / 256) * ((255 - k) / 256);
        rgbaRaster[j + 2] = 255 * ((255 - y) / 256) * ((255 - k) / 256);
        rgbaRaster[j + 3] = 255;
      }
      return rgbaRaster;
    }

    const c = args[0], m = args[1], y = args[2], k = args[3];
    const n = c.length;
    const rgbaRaster = new Uint8ClampedArray(n * 4);
    for (let i = 0, j = 0; i < n; i++, j += 4) {
      const cc = c[i], mm = m[i], yy = y[i], kk = k[i];
      rgbaRaster[j] = 255 * ((255 - cc) / 256) * ((255 - kk) / 256);
      rgbaRaster[j + 1] = 255 * ((255 - mm) / 256) * ((255 - kk) / 256);
      rgbaRaster[j + 2] = 255 * ((255 - yy) / 256) * ((255 - kk) / 256);
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromCIELab(...args) {
    // Supports:
    //  - interleaved Lab: RGBAfromCIELab([L,a,b,L,a,b,...])
    //  - planar:          RGBAfromCIELab(lBand, aBand, bBand)
    // from https://github.com/antimatter15/rgb-lab/blob/master/color.js
    const Xn = 0.95047;
    const Yn = 1.0;
    const Zn = 1.08883;

    const convertOne = (L, a8, b8) => {
      const a_ = (a8 << 24) >> 24; // uint8 -> int8
      const b_ = (b8 << 24) >> 24;

      let y = (L + 16) / 116;
      let x = a_ / 500 + y;
      let z = y - b_ / 200;

      x = Xn * (x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787);
      y = Yn * (y * y * y > 0.008856 ? y * y * y : (y - 16 / 116) / 7.787);
      z = Zn * (z * z * z > 0.008856 ? z * z * z : (z - 16 / 116) / 7.787);

      let r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      let g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      let b = x * 0.0557 + y * -0.204 + z * 1.057;

      r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r;
      g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g;
      b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b;

      return [
        Math.max(0, Math.min(1, r)) * 255,
        Math.max(0, Math.min(1, g)) * 255,
        Math.max(0, Math.min(1, b)) * 255,
      ];
    };

    if (args.length === 1) {
      const input = args[0];
      const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);
      for (let i = 0, j = 0; i < input.length; i += 3, j += 4) {
        const [rr, gg, bb] = convertOne(input[i], input[i + 1], input[i + 2]);
        rgbaRaster[j] = rr;
        rgbaRaster[j + 1] = gg;
        rgbaRaster[j + 2] = bb;
        rgbaRaster[j + 3] = 255;
      }
      return rgbaRaster;
    }

    const l = args[0], a = args[1], b = args[2];
    const n = l.length;
    const rgbaRaster = new Uint8ClampedArray(n * 4);
    for (let i = 0, j = 0; i < n; i++, j += 4) {
      const [rr, gg, bb] = convertOne(l[i], a[i], b[i]);
      rgbaRaster[j] = rr;
      rgbaRaster[j + 1] = gg;
      rgbaRaster[j + 2] = bb;
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }
}