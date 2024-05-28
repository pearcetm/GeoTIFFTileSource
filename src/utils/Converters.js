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
export class Converters {
  static RGBAfromYCbCr(input) {
    const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);
    let i, j;
    for (i = 0, j = 0; i < input.length; i += 3, j += 4) {
      const y = input[i];
      const cb = input[i + 1];
      const cr = input[i + 2];

      rgbaRaster[j] = y + 1.402 * (cr - 0x80);
      rgbaRaster[j + 1] = y - 0.34414 * (cb - 0x80) - 0.71414 * (cr - 0x80);
      rgbaRaster[j + 2] = y + 1.772 * (cb - 0x80);
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }

  static RGBAfromRGB(input) {
    const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);
    let i, j;
    for (i = 0, j = 0; i < input.length; i += 3, j += 4) {
      rgbaRaster[j] = input[i];
      rgbaRaster[j + 1] = input[i + 1];
      rgbaRaster[j + 2] = input[i + 2];
      rgbaRaster[j + 3] = 255;
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

  static RGBAfromCMYK(input) {
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

  static RGBAfromCIELab(input) {
    // from https://github.com/antimatter15/rgb-lab/blob/master/color.js
    const Xn = 0.95047;
    const Yn = 1.0;
    const Zn = 1.08883;
    const rgbaRaster = new Uint8ClampedArray((input.length * 4) / 3);

    for (let i = 0, j = 0; i < input.length; i += 3, j += 4) {
      const L = input[i + 0];
      const a_ = (input[i + 1] << 24) >> 24; // conversion from uint8 to int8
      const b_ = (input[i + 2] << 24) >> 24; // same

      let y = (L + 16) / 116;
      let x = a_ / 500 + y;
      let z = y - b_ / 200;
      let r;
      let g;
      let b;

      x = Xn * (x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787);
      y = Yn * (y * y * y > 0.008856 ? y * y * y : (y - 16 / 116) / 7.787);
      z = Zn * (z * z * z > 0.008856 ? z * z * z : (z - 16 / 116) / 7.787);

      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;

      r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r;
      g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g;
      b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b;

      rgbaRaster[j] = Math.max(0, Math.min(1, r)) * 255;
      rgbaRaster[j + 1] = Math.max(0, Math.min(1, g)) * 255;
      rgbaRaster[j + 2] = Math.max(0, Math.min(1, b)) * 255;
      rgbaRaster[j + 3] = 255;
    }
    return rgbaRaster;
  }
}
