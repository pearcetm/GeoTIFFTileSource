var ut = Object.defineProperty;
var dt = (n, e, t) => e in n ? ut(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var P = (n, e, t) => (dt(n, typeof e != "symbol" ? e + "" : e, t), t);
function E(n) {
  return (e, ...t) => gt(n, e, t);
}
function q(n, e) {
  return E(
    Ue(
      n,
      e
    ).get
  );
}
const {
  apply: gt,
  construct: Yr,
  defineProperty: Xr,
  get: $r,
  getOwnPropertyDescriptor: Ue,
  getPrototypeOf: ye,
  has: Wr,
  ownKeys: yt,
  set: Zr,
  setPrototypeOf: Jr
} = Reflect, {
  iterator: J,
  species: Qr,
  toStringTag: pt,
  for: es
} = Symbol, mt = Object, {
  create: pe,
  defineProperty: wt,
  freeze: ts,
  is: rs
} = mt, xt = Array, bt = xt.prototype, Le = bt[J], It = E(Le), Ne = ArrayBuffer, Tt = Ne.prototype;
q(Tt, "byteLength");
const Me = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Me && q(Me.prototype, "byteLength");
const je = ye(Uint8Array);
je.from;
const k = je.prototype;
k[J];
E(k.keys);
E(
  k.values
);
E(
  k.entries
);
E(k.set);
E(
  k.reverse
);
E(k.fill);
E(
  k.copyWithin
);
E(k.sort);
E(k.slice);
E(
  k.subarray
);
q(
  k,
  "buffer"
);
q(
  k,
  "byteOffset"
);
q(
  k,
  "length"
);
q(
  k,
  pt
);
const St = Uint8Array, ze = Uint16Array, me = Uint32Array, At = Float32Array, Z = ye([][J]()), Ke = E(Z.next), Dt = E(function* () {
}().next), Ft = ye(Z), Ct = DataView.prototype, Et = E(
  Ct.getUint16
), we = WeakMap, Ve = we.prototype, qe = E(Ve.get), Pt = E(Ve.set), He = new we(), kt = pe(null, {
  next: {
    value: function() {
      const e = qe(He, this);
      return Ke(e);
    }
  },
  [J]: {
    value: function() {
      return this;
    }
  }
});
function Rt(n) {
  if (n[J] === Le && Z.next === Ke)
    return n;
  const e = pe(kt);
  return Pt(He, e, It(n)), e;
}
const Mt = new we(), Bt = pe(Ft, {
  next: {
    value: function() {
      const e = qe(Mt, this);
      return Dt(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const n of yt(Z))
  n !== "next" && wt(Bt, n, Ue(Z, n));
const Ye = new Ne(4), Gt = new At(Ye), Ot = new me(Ye), O = new ze(512), v = new St(512);
for (let n = 0; n < 256; ++n) {
  const e = n - 127;
  e < -27 ? (O[n] = 0, O[n | 256] = 32768, v[n] = 24, v[n | 256] = 24) : e < -14 ? (O[n] = 1024 >> -e - 14, O[n | 256] = 1024 >> -e - 14 | 32768, v[n] = -e - 1, v[n | 256] = -e - 1) : e <= 15 ? (O[n] = e + 15 << 10, O[n | 256] = e + 15 << 10 | 32768, v[n] = 13, v[n | 256] = 13) : e < 128 ? (O[n] = 31744, O[n | 256] = 64512, v[n] = 24, v[n | 256] = 24) : (O[n] = 31744, O[n | 256] = 64512, v[n] = 13, v[n | 256] = 13);
}
const xe = new me(2048);
for (let n = 1; n < 1024; ++n) {
  let e = n << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, xe[n] = e | t;
}
for (let n = 1024; n < 2048; ++n)
  xe[n] = 939524096 + (n - 1024 << 13);
const H = new me(64);
for (let n = 1; n < 31; ++n)
  H[n] = n << 23;
H[31] = 1199570944;
H[32] = 2147483648;
for (let n = 33; n < 63; ++n)
  H[n] = 2147483648 + (n - 32 << 23);
H[63] = 3347054592;
const Xe = new ze(64);
for (let n = 1; n < 64; ++n)
  n !== 32 && (Xe[n] = 1024);
function vt(n) {
  const e = n >> 10;
  return Ot[0] = xe[Xe[e] + (n & 1023)] + H[e], Gt[0];
}
function $e(n, e, ...t) {
  return vt(
    Et(n, e, ...Rt(t))
  );
}
function We(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var be = { exports: {} };
function Ze(n, e, t) {
  const r = t && t.debug || !1;
  r && console.log("[xml-utils] getting " + e + " in " + n);
  const i = typeof n == "object" ? n.outer : n, s = i.slice(0, i.indexOf(">") + 1), o = ['"', "'"];
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = e + "\\=" + l + "([^" + l + "]*)" + l;
    r && console.log("[xml-utils] pattern:", c);
    const h = new RegExp(c).exec(s);
    if (r && console.log("[xml-utils] match:", h), h)
      return h[1];
  }
}
be.exports = Ze;
be.exports.default = Ze;
var _t = be.exports;
const ae = /* @__PURE__ */ We(_t);
var Ie = { exports: {} }, Te = { exports: {} }, Se = { exports: {} };
function Je(n, e, t) {
  const i = new RegExp(e).exec(n.slice(t));
  return i ? t + i.index : -1;
}
Se.exports = Je;
Se.exports.default = Je;
var Ut = Se.exports, Ae = { exports: {} };
function Qe(n, e, t) {
  const i = new RegExp(e).exec(n.slice(t));
  return i ? t + i.index + i[0].length - 1 : -1;
}
Ae.exports = Qe;
Ae.exports.default = Qe;
var Lt = Ae.exports, De = { exports: {} };
function et(n, e) {
  const t = new RegExp(e, "g"), r = n.match(t);
  return r ? r.length : 0;
}
De.exports = et;
De.exports.default = et;
var Nt = De.exports;
const jt = Ut, le = Lt, Be = Nt;
function tt(n, e, t) {
  const r = t && t.debug || !1, i = !(t && typeof t.nested === !1), s = t && t.startIndex || 0;
  r && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const o = jt(n, `<${e}[ 
>/]`, s);
  if (r && console.log("[xml-utils] start:", o), o === -1)
    return;
  const a = n.slice(o + e.length);
  let l = le(a, "^[^<]*[ /]>", 0);
  const c = l !== -1 && a[l - 1] === "/";
  if (r && console.log("[xml-utils] selfClosing:", c), c === !1)
    if (i) {
      let f = 0, d = 1, p = 0;
      for (; (l = le(a, "[ /]" + e + ">", f)) !== -1; ) {
        const y = a.substring(f, l + 1);
        if (d += Be(y, "<" + e + `[ 
	>]`), p += Be(y, "</" + e + ">"), p >= d)
          break;
        f = l;
      }
    } else
      l = le(a, "[ /]" + e + ">", 0);
  const u = o + e.length + l + 1;
  if (r && console.log("[xml-utils] end:", u), u === -1)
    return;
  const h = n.slice(o, u);
  let g;
  return c ? g = null : g = h.slice(h.indexOf(">") + 1, h.lastIndexOf("<")), { inner: g, outer: h, start: o, end: u };
}
Te.exports = tt;
Te.exports.default = tt;
var zt = Te.exports;
const Kt = zt;
function rt(n, e, t) {
  const r = [], i = t && t.debug || !1, s = t && typeof t.nested == "boolean" ? t.nested : !0;
  let o = t && t.startIndex || 0, a;
  for (; a = Kt(n, e, { debug: i, startIndex: o }); )
    s ? o = a.start + 1 + e.length : o = a.end, r.push(a);
  return i && console.log("findTagsByName found", r.length, "tags"), r;
}
Ie.exports = rt;
Ie.exports.default = rt;
var Vt = Ie.exports;
const qt = /* @__PURE__ */ We(Vt), W = {
  // TIFF Baseline
  315: "Artist",
  258: "BitsPerSample",
  265: "CellLength",
  264: "CellWidth",
  320: "ColorMap",
  259: "Compression",
  33432: "Copyright",
  306: "DateTime",
  338: "ExtraSamples",
  266: "FillOrder",
  289: "FreeByteCounts",
  288: "FreeOffsets",
  291: "GrayResponseCurve",
  290: "GrayResponseUnit",
  316: "HostComputer",
  270: "ImageDescription",
  257: "ImageLength",
  256: "ImageWidth",
  271: "Make",
  281: "MaxSampleValue",
  280: "MinSampleValue",
  272: "Model",
  254: "NewSubfileType",
  274: "Orientation",
  262: "PhotometricInterpretation",
  284: "PlanarConfiguration",
  296: "ResolutionUnit",
  278: "RowsPerStrip",
  277: "SamplesPerPixel",
  305: "Software",
  279: "StripByteCounts",
  273: "StripOffsets",
  255: "SubfileType",
  263: "Threshholding",
  282: "XResolution",
  283: "YResolution",
  // TIFF Extended
  326: "BadFaxLines",
  327: "CleanFaxData",
  343: "ClipPath",
  328: "ConsecutiveBadFaxLines",
  433: "Decode",
  434: "DefaultImageColor",
  269: "DocumentName",
  336: "DotRange",
  321: "HalftoneHints",
  346: "Indexed",
  347: "JPEGTables",
  285: "PageName",
  297: "PageNumber",
  317: "Predictor",
  319: "PrimaryChromaticities",
  532: "ReferenceBlackWhite",
  339: "SampleFormat",
  340: "SMinSampleValue",
  341: "SMaxSampleValue",
  559: "StripRowCounts",
  330: "SubIFDs",
  292: "T4Options",
  293: "T6Options",
  325: "TileByteCounts",
  323: "TileLength",
  324: "TileOffsets",
  322: "TileWidth",
  301: "TransferFunction",
  318: "WhitePoint",
  344: "XClipPathUnits",
  286: "XPosition",
  529: "YCbCrCoefficients",
  531: "YCbCrPositioning",
  530: "YCbCrSubSampling",
  345: "YClipPathUnits",
  287: "YPosition",
  // EXIF
  37378: "ApertureValue",
  40961: "ColorSpace",
  36868: "DateTimeDigitized",
  36867: "DateTimeOriginal",
  34665: "Exif IFD",
  36864: "ExifVersion",
  33434: "ExposureTime",
  41728: "FileSource",
  37385: "Flash",
  40960: "FlashpixVersion",
  33437: "FNumber",
  42016: "ImageUniqueID",
  37384: "LightSource",
  37500: "MakerNote",
  37377: "ShutterSpeedValue",
  37510: "UserComment",
  // IPTC
  33723: "IPTC",
  // ICC
  34675: "ICC Profile",
  // XMP
  700: "XMP",
  // GDAL
  42112: "GDAL_METADATA",
  42113: "GDAL_NODATA",
  // Photoshop
  34377: "Photoshop",
  // GeoTiff
  33550: "ModelPixelScale",
  33922: "ModelTiepoint",
  34264: "ModelTransformation",
  34735: "GeoKeyDirectory",
  34736: "GeoDoubleParams",
  34737: "GeoAsciiParams",
  // LERC
  50674: "LercParameters"
}, _ = {};
for (const n in W)
  W.hasOwnProperty(n) && (_[W[n]] = parseInt(n, 10));
const Ht = [
  _.BitsPerSample,
  _.ExtraSamples,
  _.SampleFormat,
  _.StripByteCounts,
  _.StripOffsets,
  _.StripRowCounts,
  _.TileByteCounts,
  _.TileOffsets,
  _.SubIFDs
], ce = {
  1: "BYTE",
  2: "ASCII",
  3: "SHORT",
  4: "LONG",
  5: "RATIONAL",
  6: "SBYTE",
  7: "UNDEFINED",
  8: "SSHORT",
  9: "SLONG",
  10: "SRATIONAL",
  11: "FLOAT",
  12: "DOUBLE",
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  13: "IFD",
  // introduced by BigTIFF
  16: "LONG8",
  17: "SLONG8",
  18: "IFD8"
}, x = {};
for (const n in ce)
  ce.hasOwnProperty(n) && (x[ce[n]] = parseInt(n, 10));
const D = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, Yt = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, ss = {
  Version: 0,
  AddCompression: 1
}, is = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, Xt = {
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
};
function $t(n, e) {
  const { width: t, height: r } = n, i = new Uint8Array(t * r * 3);
  let s;
  for (let o = 0, a = 0; o < n.length; ++o, a += 3)
    s = 256 - n[o] / e * 256, i[a] = s, i[a + 1] = s, i[a + 2] = s;
  return i;
}
function Wt(n, e) {
  const { width: t, height: r } = n, i = new Uint8Array(t * r * 3);
  let s;
  for (let o = 0, a = 0; o < n.length; ++o, a += 3)
    s = n[o] / e * 256, i[a] = s, i[a + 1] = s, i[a + 2] = s;
  return i;
}
function Zt(n, e) {
  const { width: t, height: r } = n, i = new Uint8Array(t * r * 3), s = e.length / 3, o = e.length / 3 * 2;
  for (let a = 0, l = 0; a < n.length; ++a, l += 3) {
    const c = n[a];
    i[l] = e[c] / 65536 * 256, i[l + 1] = e[c + s] / 65536 * 256, i[l + 2] = e[c + o] / 65536 * 256;
  }
  return i;
}
function Jt(n) {
  const { width: e, height: t } = n, r = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < n.length; i += 4, s += 3) {
    const o = n[i], a = n[i + 1], l = n[i + 2], c = n[i + 3];
    r[s] = 255 * ((255 - o) / 256) * ((255 - c) / 256), r[s + 1] = 255 * ((255 - a) / 256) * ((255 - c) / 256), r[s + 2] = 255 * ((255 - l) / 256) * ((255 - c) / 256);
  }
  return r;
}
function Qt(n) {
  const { width: e, height: t } = n, r = new Uint8ClampedArray(e * t * 3);
  for (let i = 0, s = 0; i < n.length; i += 3, s += 3) {
    const o = n[i], a = n[i + 1], l = n[i + 2];
    r[s] = o + 1.402 * (l - 128), r[s + 1] = o - 0.34414 * (a - 128) - 0.71414 * (l - 128), r[s + 2] = o + 1.772 * (a - 128);
  }
  return r;
}
const er = 0.95047, tr = 1, rr = 1.08883;
function sr(n) {
  const { width: e, height: t } = n, r = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < n.length; i += 3, s += 3) {
    const o = n[i + 0], a = n[i + 1] << 24 >> 24, l = n[i + 2] << 24 >> 24;
    let c = (o + 16) / 116, u = a / 500 + c, h = c - l / 200, g, f, d;
    u = er * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), c = tr * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), h = rr * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), g = u * 3.2406 + c * -1.5372 + h * -0.4986, f = u * -0.9689 + c * 1.8758 + h * 0.0415, d = u * 0.0557 + c * -0.204 + h * 1.057, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, r[s] = Math.max(0, Math.min(1, g)) * 255, r[s + 1] = Math.max(0, Math.min(1, f)) * 255, r[s + 2] = Math.max(0, Math.min(1, d)) * 255;
  }
  return r;
}
const st = /* @__PURE__ */ new Map();
function N(n, e) {
  Array.isArray(n) || (n = [n]), n.forEach((t) => st.set(t, e));
}
async function it(n) {
  const e = st.get(n.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${n.Compression}`);
  const t = await e();
  return new t(n);
}
N([void 0, 1], () => import("./raw-_eObXrMO.js").then((n) => n.default));
N(5, () => import("./lzw-5BnjP5Zu.js").then((n) => n.default));
N(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
N(7, () => import("./jpeg-cL5qbLGO.js").then((n) => n.default));
N([8, 32946], () => import("./deflate-vcCR2g03.js").then((n) => n.default));
N(32773, () => import("./packbits-QLsyzNt2.js").then((n) => n.default));
N(
  34887,
  () => import("./lerc-ynggy3CE.js").then(async (n) => (await n.zstd.init(), n)).then((n) => n.default)
);
N(50001, () => import("./webimage-Hf-HYtMO.js").then((n) => n.default));
function se(n, e, t, r = 1) {
  return new (Object.getPrototypeOf(n)).constructor(e * t * r);
}
function ir(n, e, t, r, i) {
  const s = e / r, o = t / i;
  return n.map((a) => {
    const l = se(a, r, i);
    for (let c = 0; c < i; ++c) {
      const u = Math.min(Math.round(o * c), t - 1);
      for (let h = 0; h < r; ++h) {
        const g = Math.min(Math.round(s * h), e - 1), f = a[u * e + g];
        l[c * r + h] = f;
      }
    }
    return l;
  });
}
function K(n, e, t) {
  return (1 - t) * n + t * e;
}
function nr(n, e, t, r, i) {
  const s = e / r, o = t / i;
  return n.map((a) => {
    const l = se(a, r, i);
    for (let c = 0; c < i; ++c) {
      const u = o * c, h = Math.floor(u), g = Math.min(Math.ceil(u), t - 1);
      for (let f = 0; f < r; ++f) {
        const d = s * f, p = d % 1, y = Math.floor(d), w = Math.min(Math.ceil(d), e - 1), m = a[h * e + y], I = a[h * e + w], T = a[g * e + y], S = a[g * e + w], A = K(
          K(m, I, p),
          K(T, S, p),
          u % 1
        );
        l[c * r + f] = A;
      }
    }
    return l;
  });
}
function or(n, e, t, r, i, s = "nearest") {
  switch (s.toLowerCase()) {
    case "nearest":
      return ir(n, e, t, r, i);
    case "bilinear":
    case "linear":
      return nr(n, e, t, r, i);
    default:
      throw new Error(`Unsupported resampling method: '${s}'`);
  }
}
function ar(n, e, t, r, i, s) {
  const o = e / r, a = t / i, l = se(n, r, i, s);
  for (let c = 0; c < i; ++c) {
    const u = Math.min(Math.round(a * c), t - 1);
    for (let h = 0; h < r; ++h) {
      const g = Math.min(Math.round(o * h), e - 1);
      for (let f = 0; f < s; ++f) {
        const d = n[u * e * s + g * s + f];
        l[c * r * s + h * s + f] = d;
      }
    }
  }
  return l;
}
function lr(n, e, t, r, i, s) {
  const o = e / r, a = t / i, l = se(n, r, i, s);
  for (let c = 0; c < i; ++c) {
    const u = a * c, h = Math.floor(u), g = Math.min(Math.ceil(u), t - 1);
    for (let f = 0; f < r; ++f) {
      const d = o * f, p = d % 1, y = Math.floor(d), w = Math.min(Math.ceil(d), e - 1);
      for (let m = 0; m < s; ++m) {
        const I = n[h * e * s + y * s + m], T = n[h * e * s + w * s + m], S = n[g * e * s + y * s + m], A = n[g * e * s + w * s + m], F = K(
          K(I, T, p),
          K(S, A, p),
          u % 1
        );
        l[c * r * s + f * s + m] = F;
      }
    }
  }
  return l;
}
function cr(n, e, t, r, i, s, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return ar(
        n,
        e,
        t,
        r,
        i,
        s
      );
    case "bilinear":
    case "linear":
      return lr(
        n,
        e,
        t,
        r,
        i,
        s
      );
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function hr(n, e, t) {
  let r = 0;
  for (let i = e; i < t; ++i)
    r += n[i];
  return r;
}
function ue(n, e, t) {
  switch (n) {
    case 1:
      if (e <= 8)
        return new Uint8Array(t);
      if (e <= 16)
        return new Uint16Array(t);
      if (e <= 32)
        return new Uint32Array(t);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(t);
      if (e === 16)
        return new Int16Array(t);
      if (e === 32)
        return new Int32Array(t);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(t);
        case 64:
          return new Float64Array(t);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function fr(n, e) {
  return (n === 1 || n === 2) && e <= 32 && e % 8 === 0 ? !1 : !(n === 3 && (e === 16 || e === 32 || e === 64));
}
function ur(n, e, t, r, i, s, o) {
  const a = new DataView(n), l = t === 2 ? o * s : o * s * r, c = t === 2 ? 1 : r, u = ue(e, i, l), h = parseInt("1".repeat(i), 2);
  if (e === 1) {
    let g;
    t === 1 ? g = r * i : g = i;
    let f = s * g;
    f & 7 && (f = f + 7 & -8);
    for (let d = 0; d < o; ++d) {
      const p = d * f;
      for (let y = 0; y < s; ++y) {
        const w = p + y * c * i;
        for (let m = 0; m < c; ++m) {
          const I = w + m * i, T = (d * s + y) * c + m, S = Math.floor(I / 8), A = I % 8;
          if (A + i <= 8)
            u[T] = a.getUint8(S) >> 8 - i - A & h;
          else if (A + i <= 16)
            u[T] = a.getUint16(S) >> 16 - i - A & h;
          else if (A + i <= 24) {
            const F = a.getUint16(S) << 8 | a.getUint8(S + 2);
            u[T] = F >> 24 - i - A & h;
          } else
            u[T] = a.getUint32(S) >> 32 - i - A & h;
        }
      }
    }
  }
  return u.buffer;
}
class dr {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, r, i, s, o) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = r, this.littleEndian = i, this.tiles = s ? {} : null, this.isTiled = !e.StripOffsets;
    const a = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof a > "u" ? 1 : a, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = o;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel < "u" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < "u" ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(e) {
    return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let e = 0;
    for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t)
      e += this.getSampleByteSize(t);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, r = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (r <= 8)
          return DataView.prototype.getUint8;
        if (r <= 16)
          return DataView.prototype.getUint16;
        if (r <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (r <= 8)
          return DataView.prototype.getInt8;
        if (r <= 16)
          return DataView.prototype.getInt16;
        if (r <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (r) {
          case 16:
            return function(i, s) {
              return $e(this, i, s);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
        }
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(e = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
  }
  getBitsPerSample(e = 0) {
    return this.fileDirectory.BitsPerSample[e];
  }
  getArrayForSample(e, t) {
    const r = this.getSampleFormat(e), i = this.getBitsPerSample(e);
    return ue(r, i, t);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(e, t, r, i, s) {
    const o = Math.ceil(this.getWidth() / this.getTileWidth()), a = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: c } = this;
    this.planarConfiguration === 1 ? l = t * o + e : this.planarConfiguration === 2 && (l = r * o * a + t * o + e);
    let u, h;
    this.isTiled ? (u = this.fileDirectory.TileOffsets[l], h = this.fileDirectory.TileByteCounts[l]) : (u = this.fileDirectory.StripOffsets[l], h = this.fileDirectory.StripByteCounts[l]);
    const g = (await this.source.fetch([{ offset: u, length: h }], s))[0];
    let f;
    return c === null || !c[l] ? (f = (async () => {
      let d = await i.decode(this.fileDirectory, g);
      const p = this.getSampleFormat(), y = this.getBitsPerSample();
      return fr(p, y) && (d = ur(
        d,
        p,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        y,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), d;
    })(), c !== null && (c[l] = f)) : f = c[l], { x: e, y: t, sample: r, data: await f };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(e, t, r, i, s, o, a, l, c) {
    const u = this.getTileWidth(), h = this.getTileHeight(), g = this.getWidth(), f = this.getHeight(), d = Math.max(Math.floor(e[0] / u), 0), p = Math.min(
      Math.ceil(e[2] / u),
      Math.ceil(g / u)
    ), y = Math.max(Math.floor(e[1] / h), 0), w = Math.min(
      Math.ceil(e[3] / h),
      Math.ceil(f / h)
    ), m = e[2] - e[0];
    let I = this.getBytesPerPixel();
    const T = [], S = [];
    for (let b = 0; b < t.length; ++b)
      this.planarConfiguration === 1 ? T.push(hr(this.fileDirectory.BitsPerSample, 0, t[b]) / 8) : T.push(0), S.push(this.getReaderForSample(t[b]));
    const A = [], { littleEndian: F } = this;
    for (let b = y; b < w; ++b)
      for (let G = d; G < p; ++G) {
        let R;
        this.planarConfiguration === 1 && (R = this.getTileOrStrip(G, b, 0, s, c));
        for (let C = 0; C < t.length; ++C) {
          const M = C, U = t[C];
          this.planarConfiguration === 2 && (I = this.getSampleByteSize(U), R = this.getTileOrStrip(G, b, U, s, c));
          const L = R.then((B) => {
            const Q = B.data, ne = new DataView(Q), oe = this.getBlockHeight(B.y), Y = B.y * h, ee = B.x * u, ot = Y + oe, at = (B.x + 1) * u, lt = S[M], ct = Math.min(oe, oe - (ot - e[3]), f - Y), ht = Math.min(u, u - (at - e[2]), g - ee);
            for (let X = Math.max(0, e[1] - Y); X < ct; ++X)
              for (let $ = Math.max(0, e[0] - ee); $ < ht; ++$) {
                const ft = (X * u + $) * I, Re = lt.call(
                  ne,
                  ft + T[M],
                  F
                );
                let te;
                i ? (te = (X + Y - e[1]) * m * t.length + ($ + ee - e[0]) * t.length + M, r[te] = Re) : (te = (X + Y - e[1]) * m + $ + ee - e[0], r[M][te] = Re);
              }
          });
          A.push(L);
        }
      }
    if (await Promise.all(A), o && e[2] - e[0] !== o || a && e[3] - e[1] !== a) {
      let b;
      return i ? b = cr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        t.length,
        l
      ) : b = or(
        r,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        l
      ), b.width = o, b.height = a, b;
    }
    return r.width = o || e[2] - e[0], r.height = a || e[3] - e[1], r;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: e,
    samples: t = [],
    interleave: r,
    pool: i = null,
    width: s,
    height: o,
    resampleMethod: a,
    fillValue: l,
    signal: c
  } = {}) {
    const u = e || [0, 0, this.getWidth(), this.getHeight()];
    if (u[0] > u[2] || u[1] > u[3])
      throw new Error("Invalid subsets");
    const h = u[2] - u[0], g = u[3] - u[1], f = h * g, d = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let m = 0; m < d; ++m)
        t.push(m);
    else
      for (let m = 0; m < t.length; ++m)
        if (t[m] >= d)
          return Promise.reject(new RangeError(`Invalid sample index '${t[m]}'.`));
    let p;
    if (r) {
      const m = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, I = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      p = ue(m, I, f * t.length), l && p.fill(l);
    } else {
      p = [];
      for (let m = 0; m < t.length; ++m) {
        const I = this.getArrayForSample(t[m], f);
        Array.isArray(l) && m < l.length ? I.fill(l[m]) : l && !Array.isArray(l) && I.fill(l), p.push(I);
      }
    }
    const y = i || await it(this.fileDirectory);
    return await this._readRaster(
      u,
      t,
      p,
      r,
      y,
      s,
      o,
      a,
      c
    );
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: e,
    interleave: t = !0,
    pool: r = null,
    width: i,
    height: s,
    resampleMethod: o,
    enableAlpha: a = !1,
    signal: l
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const u = this.fileDirectory.PhotometricInterpretation;
    if (u === D.RGB) {
      let w = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Yt.Unspecified && a) {
        w = [];
        for (let m = 0; m < this.fileDirectory.BitsPerSample.length; m += 1)
          w.push(m);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: w,
        pool: r,
        width: i,
        height: s,
        resampleMethod: o,
        signal: l
      });
    }
    let h;
    switch (u) {
      case D.WhiteIsZero:
      case D.BlackIsZero:
      case D.Palette:
        h = [0];
        break;
      case D.CMYK:
        h = [0, 1, 2, 3];
        break;
      case D.YCbCr:
      case D.CIELab:
        h = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const g = {
      window: c,
      interleave: !0,
      samples: h,
      pool: r,
      width: i,
      height: s,
      resampleMethod: o,
      signal: l
    }, { fileDirectory: f } = this, d = await this.readRasters(g), p = 2 ** this.fileDirectory.BitsPerSample[0];
    let y;
    switch (u) {
      case D.WhiteIsZero:
        y = $t(d, p);
        break;
      case D.BlackIsZero:
        y = Wt(d, p);
        break;
      case D.Palette:
        y = Zt(d, f.ColorMap);
        break;
      case D.CMYK:
        y = Jt(d);
        break;
      case D.YCbCr:
        y = Qt(d);
        break;
      case D.CIELab:
        y = sr(d);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const w = new Uint8Array(y.length / 3), m = new Uint8Array(y.length / 3), I = new Uint8Array(y.length / 3);
      for (let T = 0, S = 0; T < y.length; T += 3, ++S)
        w[S] = y[T], m[S] = y[T + 1], I[S] = y[T + 2];
      y = [w, m, I];
    }
    return y.width = d.width, y.height = d.height, y;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[t],
        j: this.fileDirectory.ModelTiepoint[t + 1],
        k: this.fileDirectory.ModelTiepoint[t + 2],
        x: this.fileDirectory.ModelTiepoint[t + 3],
        y: this.fileDirectory.ModelTiepoint[t + 4],
        z: this.fileDirectory.ModelTiepoint[t + 5]
      });
    return e;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(e = null) {
    const t = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const r = this.fileDirectory.GDAL_METADATA;
    let i = qt(r, "Item");
    e === null ? i = i.filter((s) => ae(s, "sample") === void 0) : i = i.filter((s) => Number(ae(s, "sample")) === e);
    for (let s = 0; s < i.length; ++s) {
      const o = i[s];
      t[ae(o, "name")] = o.inner;
    }
    return t;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const e = this.fileDirectory.GDAL_NODATA;
    return Number(e.substring(0, e.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const e = this.fileDirectory.ModelTiepoint, t = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (t)
      return [
        t[3],
        t[7],
        t[11]
      ];
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(e = null) {
    const t = this.fileDirectory.ModelPixelScale, r = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (r)
      return [
        r[0],
        -r[5],
        r[10]
      ];
    if (e) {
      const [i, s, o] = e.getResolution();
      return [
        i * e.getWidth() / this.getWidth(),
        s * e.getHeight() / this.getHeight(),
        o * e.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid 
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(e = !1) {
    const t = this.getHeight(), r = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [i, s, o, a, l, c, u, h] = this.fileDirectory.ModelTransformation, f = [
        [0, 0],
        [0, t],
        [r, 0],
        [r, t]
      ].map(([y, w]) => [
        a + i * y + s * w,
        h + l * y + c * w
      ]), d = f.map((y) => y[0]), p = f.map((y) => y[1]);
      return [
        Math.min(...d),
        Math.min(...p),
        Math.max(...d),
        Math.max(...p)
      ];
    } else {
      const i = this.getOrigin(), s = this.getResolution(), o = i[0], a = i[1], l = o + s[0] * r, c = a + s[1] * t;
      return [
        Math.min(o, l),
        Math.min(a, c),
        Math.max(o, l),
        Math.max(a, c)
      ];
    }
  }
}
class gr {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const r = this.getUint32(e, t), i = this.getUint32(e + 4, t);
    let s;
    if (t) {
      if (s = r + 2 ** 32 * i, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * r + i, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let r = 0;
    const i = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let o = 0; o < 8; o++) {
      let a = this._dataView.getUint8(e + (t ? o : 7 - o));
      i && (s ? a !== 0 && (a = ~(a - 1) & 255, s = !1) : a = ~a & 255), r += a * 256 ** o;
    }
    return i && (r = -r), r;
  }
  getUint8(e, t) {
    return this._dataView.getUint8(e, t);
  }
  getInt8(e, t) {
    return this._dataView.getInt8(e, t);
  }
  getUint16(e, t) {
    return this._dataView.getUint16(e, t);
  }
  getInt16(e, t) {
    return this._dataView.getInt16(e, t);
  }
  getUint32(e, t) {
    return this._dataView.getUint32(e, t);
  }
  getInt32(e, t) {
    return this._dataView.getInt32(e, t);
  }
  getFloat16(e, t) {
    return $e(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class yr {
  constructor(e, t, r, i) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = r, this._bigTiff = i;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(e, t) {
    return this.sliceOffset <= e && this.sliceTop >= e + t;
  }
  readUint8(e) {
    return this._dataView.getUint8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(e) {
    return this._dataView.getInt8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(e) {
    return this._dataView.getUint16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(e) {
    return this._dataView.getInt16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(e) {
    return this._dataView.getUint32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(e) {
    return this._dataView.getInt32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(e) {
    return this._dataView.getFloat32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(e) {
    return this._dataView.getFloat64(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(e) {
    const t = this.readUint32(e), r = this.readUint32(e + 4);
    let i;
    if (this._littleEndian) {
      if (i = t + 2 ** 32 * r, !Number.isSafeInteger(i))
        throw new Error(
          `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return i;
    }
    if (i = 2 ** 32 * t + r, !Number.isSafeInteger(i))
      throw new Error(
        `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return i;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const r = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let i = !0;
    for (let s = 0; s < 8; s++) {
      let o = this._dataView.getUint8(
        e + (this._littleEndian ? s : 7 - s)
      );
      r && (i ? o !== 0 && (o = ~(o - 1) & 255, i = !1) : o = ~o & 255), t += o * 256 ** s;
    }
    return r && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const pr = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class mr {
  /**
   * @constructor
   * @param {Number} [size] The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   * @param {function(): Worker} [createWorker] A function that creates the decoder worker.
   * Defaults to a worker with all decoders that ship with geotiff.js. The `createWorker()`
   * function is expected to return a `Worker` compatible with Web Workers. For code that
   * runs in Node, [web-worker](https://www.npmjs.com/package/web-worker) is a good choice.
   *
   * A worker that uses a custom lzw decoder would look like this `my-custom-worker.js` file:
   * ```js
   * import { addDecoder, getDecoder } from 'geotiff';
   * addDecoder(5, () => import ('./my-custom-lzw').then((m) => m.default));
   * self.addEventListener('message', async (e) => {
   *   const { id, fileDirectory, buffer } = e.data;
   *   const decoder = await getDecoder(fileDirectory);
   *   const decoded = await decoder.decode(fileDirectory, buffer);
   *   self.postMessage({ decoded, id }, [decoded]);
   * });
   * ```
   * The way the above code is built into a worker by the `createWorker()` function
   * depends on the used bundler. For most bundlers, something like this will work:
   * ```js
   * function createWorker() {
   *   return new Worker(new URL('./my-custom-worker.js', import.meta.url));
   * }
   * ```
   */
  constructor(e = pr, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((r) => {
      import("./decoder-b0JuKe3x.js").then((i) => {
        r(i.create);
      });
    }), this._awaitingDecoder.then((r) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let i = 0; i < e; i++)
        this.workers.push({ worker: r(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? it(e).then((r) => r.decode(e, t)) : new Promise((r) => {
      const i = this.workers.find((a) => a.idle) || this.workers[Math.floor(Math.random() * this.size)];
      i.idle = !1;
      const s = this.messageId++, o = (a) => {
        a.data.id === s && (i.idle = !0, r(a.data.decoded), i.worker.removeEventListener("message", o));
      };
      i.worker.addEventListener("message", o), i.worker.postMessage({ fileDirectory: e, buffer: t, id: s }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const Ge = `\r
\r
`;
function nt(n) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(n);
  const e = {};
  for (const [t, r] of n)
    e[t.toLowerCase()] = r;
  return e;
}
function wr(n) {
  const e = n.split(`\r
`).map((t) => {
    const r = t.split(":").map((i) => i.trim());
    return r[0] = r[0].toLowerCase(), r;
  });
  return nt(e);
}
function xr(n) {
  const [e, ...t] = n.split(";").map((i) => i.trim()), r = t.map((i) => i.split("="));
  return { type: e, params: nt(r) };
}
function de(n) {
  let e, t, r;
  return n && ([, e, t, r] = n.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), r = parseInt(r, 10)), { start: e, end: t, total: r };
}
function br(n, e) {
  let t = null;
  const r = new TextDecoder("ascii"), i = [], s = `--${e}`, o = `${s}--`;
  for (let a = 0; a < 10; ++a)
    r.decode(
      new Uint8Array(n, a, s.length)
    ) === s && (t = a);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < n.byteLength; ) {
    const a = r.decode(
      new Uint8Array(
        n,
        t,
        Math.min(s.length + 1024, n.byteLength - t)
      )
    );
    if (a.length === 0 || a.startsWith(o))
      break;
    if (!a.startsWith(s))
      throw new Error("Part does not start with boundary");
    const l = a.substr(s.length + 2);
    if (l.length === 0)
      break;
    const c = l.indexOf(Ge), u = wr(l.substr(0, c)), { start: h, end: g, total: f } = de(u["content-range"]), d = t + s.length + c + Ge.length, p = parseInt(g, 10) + 1 - parseInt(h, 10);
    i.push({
      headers: u,
      data: n.slice(d, d + p),
      offset: h,
      length: p,
      fileSize: f
    }), t = d + p + 4;
  }
  return i;
}
class Fe {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((r) => this.fetchSlice(r, t))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(e) {
    throw new Error(`fetching of slice ${e} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
}
class Ir extends Map {
  constructor(e = {}) {
    if (super(), !(e.maxSize && e.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof e.maxAge == "number" && e.maxAge === 0)
      throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = e.maxSize, this.maxAge = e.maxAge || Number.POSITIVE_INFINITY, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(e) {
    if (typeof this.onEviction == "function")
      for (const [t, r] of e)
        this.onEviction(t, r.value);
  }
  _deleteIfExpired(e, t) {
    return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1;
  }
  _getOrDeleteIfExpired(e, t) {
    if (this._deleteIfExpired(e, t) === !1)
      return t.value;
  }
  _getItemValue(e, t) {
    return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
  }
  _peek(e, t) {
    const r = t.get(e);
    return this._getItemValue(e, r);
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t);
  }
  *_entriesAscending() {
    for (const e of this.oldCache) {
      const [t, r] = e;
      this.cache.has(t) || this._deleteIfExpired(t, r) === !1 && (yield e);
    }
    for (const e of this.cache) {
      const [t, r] = e;
      this._deleteIfExpired(t, r) === !1 && (yield e);
    }
  }
  get(e) {
    if (this.cache.has(e)) {
      const t = this.cache.get(e);
      return this._getItemValue(e, t);
    }
    if (this.oldCache.has(e)) {
      const t = this.oldCache.get(e);
      if (this._deleteIfExpired(e, t) === !1)
        return this._moveToRecent(e, t), t.value;
    }
  }
  set(e, t, { maxAge: r = this.maxAge } = {}) {
    const i = typeof r == "number" && r !== Number.POSITIVE_INFINITY ? Date.now() + r : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: i
    }) : this._set(e, { value: t, expiry: i }), this;
  }
  has(e) {
    return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1;
  }
  peek(e) {
    if (this.cache.has(e))
      return this._peek(e, this.cache);
    if (this.oldCache.has(e))
      return this._peek(e, this.oldCache);
  }
  delete(e) {
    const t = this.cache.delete(e);
    return t && this._size--, this.oldCache.delete(e) || t;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0;
  }
  resize(e) {
    if (!(e && e > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    const t = [...this._entriesAscending()], r = t.length - e;
    r < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (r > 0 && this._emitEvictions(t.slice(0, r)), this.oldCache = new Map(t.slice(r)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
  }
  *keys() {
    for (const [e] of this)
      yield e;
  }
  *values() {
    for (const [, e] of this)
      yield e;
  }
  *[Symbol.iterator]() {
    for (const e of this.cache) {
      const [t, r] = e;
      this._deleteIfExpired(t, r) === !1 && (yield [t, r.value]);
    }
    for (const e of this.oldCache) {
      const [t, r] = e;
      this.cache.has(t) || this._deleteIfExpired(t, r) === !1 && (yield [t, r.value]);
    }
  }
  *entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const r = e[t], [i, s] = r;
      this._deleteIfExpired(i, s) === !1 && (yield [i, s.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const r = e[t], [i, s] = r;
      this.cache.has(i) || this._deleteIfExpired(i, s) === !1 && (yield [i, s.value]);
    }
  }
  *entriesAscending() {
    for (const [e, t] of this._entriesAscending())
      yield [e, t.value];
  }
  get size() {
    if (!this._size)
      return this.oldCache.size;
    let e = 0;
    for (const t of this.oldCache.keys())
      this.cache.has(t) || e++;
    return Math.min(this._size + e, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(e, t = this) {
    for (const [r, i] of this.entriesAscending())
      e.call(t, i, r, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
async function Tr(n) {
  return new Promise((e) => setTimeout(e, n));
}
function Sr(n, e) {
  const t = Array.isArray(n) ? n : Array.from(n), r = Array.isArray(e) ? e : Array.from(e);
  return t.map((i, s) => [i, r[s]]);
}
class V extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, V), this.name = "AbortError";
  }
}
class Ar extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Dr = Ar;
class Fr {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(e, t, r = null) {
    this.offset = e, this.length = t, this.data = r;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class Oe {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(e, t, r) {
    this.offset = e, this.length = t, this.blockIds = r;
  }
}
class Cr extends Fe {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: r = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Ir({
      maxSize: r,
      onEviction: (i, s) => {
        this.evictedBlocks.set(i, s);
      }
    }), this.evictedBlocks = /* @__PURE__ */ new Map(), this.blockRequests = /* @__PURE__ */ new Map(), this.blockIdsToFetch = /* @__PURE__ */ new Set(), this.abortedBlockIds = /* @__PURE__ */ new Set();
  }
  get fileSize() {
    return this.source.fileSize;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   */
  async fetch(e, t) {
    const r = [], i = [], s = [];
    this.evictedBlocks.clear();
    for (const { offset: g, length: f } of e) {
      let d = g + f;
      const { fileSize: p } = this;
      p !== null && (d = Math.min(d, p));
      const y = Math.floor(g / this.blockSize) * this.blockSize;
      for (let w = y; w < d; w += this.blockSize) {
        const m = Math.floor(w / this.blockSize);
        !this.blockCache.has(m) && !this.blockRequests.has(m) && (this.blockIdsToFetch.add(m), i.push(m)), this.blockRequests.has(m) && r.push(this.blockRequests.get(m)), s.push(m);
      }
    }
    await Tr(), this.fetchBlocks(t);
    const o = [];
    for (const g of i)
      this.blockRequests.has(g) && o.push(this.blockRequests.get(g));
    await Promise.allSettled(r), await Promise.allSettled(o);
    const a = [], l = s.filter((g) => this.abortedBlockIds.has(g) || !this.blockCache.has(g));
    if (l.forEach((g) => this.blockIdsToFetch.add(g)), l.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const g of l) {
        const f = this.blockRequests.get(g);
        if (!f)
          throw new Error(`Block ${g} is not in the block requests`);
        a.push(f);
      }
      await Promise.allSettled(a);
    }
    if (t && t.aborted)
      throw new V("Request was aborted");
    const c = s.map((g) => this.blockCache.get(g) || this.evictedBlocks.get(g)), u = c.filter((g) => !g);
    if (u.length)
      throw new Dr(u, "Request failed");
    const h = new Map(Sr(s, c));
    return this.readSliceData(e, h);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), r = this.source.fetch(t, e);
      for (let i = 0; i < t.length; ++i) {
        const s = t[i];
        for (const o of s.blockIds)
          this.blockRequests.set(o, (async () => {
            try {
              const a = (await r)[i], l = o * this.blockSize, c = l - a.offset, u = Math.min(c + this.blockSize, a.data.byteLength), h = a.data.slice(c, u), g = new Fr(
                l,
                h.byteLength,
                h,
                o
              );
              this.blockCache.set(o, g), this.abortedBlockIds.delete(o);
            } catch (a) {
              if (a.name === "AbortError")
                a.signal = e, this.blockCache.delete(o), this.abortedBlockIds.add(o);
              else
                throw a;
            } finally {
              this.blockRequests.delete(o);
            }
          })());
      }
      this.blockIdsToFetch.clear();
    }
  }
  /**
   *
   * @param {Set} blockIds
   * @returns {BlockGroup[]}
   */
  groupBlocks(e) {
    const t = Array.from(e).sort((o, a) => o - a);
    if (t.length === 0)
      return [];
    let r = [], i = null;
    const s = [];
    for (const o of t)
      i === null || i + 1 === o ? (r.push(o), i = o) : (s.push(new Oe(
        r[0] * this.blockSize,
        r.length * this.blockSize,
        r
      )), r = [o], i = o);
    return s.push(new Oe(
      r[0] * this.blockSize,
      r.length * this.blockSize,
      r
    )), s;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((r) => {
      let i = r.offset + r.length;
      this.fileSize !== null && (i = Math.min(this.fileSize, i));
      const s = Math.floor(r.offset / this.blockSize), o = Math.floor(i / this.blockSize), a = new ArrayBuffer(r.length), l = new Uint8Array(a);
      for (let c = s; c <= o; ++c) {
        const u = t.get(c), h = u.offset - r.offset, g = u.top - i;
        let f = 0, d = 0, p;
        h < 0 ? f = -h : h > 0 && (d = h), g < 0 ? p = u.length - f : p = i - u.offset - f;
        const y = new Uint8Array(u.data, f, p);
        l.set(y, d);
      }
      return a;
    });
  }
}
class Ce {
  /**
   * Returns whether the response has an ok'ish status code
   */
  get ok() {
    return this.status >= 200 && this.status <= 299;
  }
  /**
   * Returns the status code of the response
   */
  get status() {
    throw new Error("not implemented");
  }
  /**
   * Returns the value of the specified header
   * @param {string} headerName the header name
   * @returns {string} the header value
   */
  getHeader(e) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
}
class Ee {
  constructor(e) {
    this.url = e;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    throw new Error("request is not implemented");
  }
}
class Er extends Ce {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(e) {
    super(), this.response = e;
  }
  get status() {
    return this.response.status;
  }
  getHeader(e) {
    return this.response.headers.get(e);
  }
  async getData() {
    return this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
  }
}
class Pr extends Ee {
  constructor(e, t) {
    super(e), this.credentials = t;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    const r = await fetch(this.url, {
      headers: e,
      credentials: this.credentials,
      signal: t
    });
    return new Er(r);
  }
}
class kr extends Ce {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(e, t) {
    super(), this.xhr = e, this.data = t;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(e) {
    return this.xhr.getResponseHeader(e);
  }
  async getData() {
    return this.data;
  }
}
class Rr extends Ee {
  constructRequest(e, t) {
    return new Promise((r, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", this.url), s.responseType = "arraybuffer";
      for (const [o, a] of Object.entries(e))
        s.setRequestHeader(o, a);
      s.onload = () => {
        const o = s.response;
        r(new kr(s, o));
      }, s.onerror = i, s.onabort = () => i(new V("Request aborted")), s.send(), t && (t.aborted && s.abort(), t.addEventListener("abort", () => s.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const he = {};
class Mr extends Ce {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(e, t) {
    super(), this.response = e, this.dataPromise = t;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  async getData() {
    return await this.dataPromise;
  }
}
class Br extends Ee {
  constructor(e) {
    super(e), this.parsedUrl = he.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", he);
  }
  constructRequest(e, t) {
    return new Promise((r, i) => {
      const s = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (o) => {
          const a = new Promise((l) => {
            const c = [];
            o.on("data", (u) => {
              c.push(u);
            }), o.on("end", () => {
              const u = Buffer.concat(c).buffer;
              l(u);
            }), o.on("error", i);
          });
          r(new Mr(o, a));
        }
      );
      s.on("error", i), t && (t.aborted && s.destroy(new V("Request aborted")), t.addEventListener("abort", () => s.destroy(new V("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Pe extends Fe {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, r, i) {
    super(), this.client = e, this.headers = t, this.maxRanges = r, this.allowFullFile = i, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(e, t) {
    return this.maxRanges >= e.length ? this.fetchSlices(e, t) : (this.maxRanges > 0 && e.length > 1, Promise.all(
      e.map((r) => this.fetchSlice(r, t))
    ));
  }
  async fetchSlices(e, t) {
    const r = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${e.map(({ offset: i, length: s }) => `${i}-${i + s}`).join(",")}`
      },
      signal: t
    });
    if (r.ok)
      if (r.status === 206) {
        const { type: i, params: s } = xr(r.getHeader("content-type"));
        if (i === "multipart/byteranges") {
          const h = br(await r.getData(), s.boundary);
          return this._fileSize = h[0].fileSize || null, h;
        }
        const o = await r.getData(), { start: a, end: l, total: c } = de(r.getHeader("content-range"));
        this._fileSize = c || null;
        const u = [{
          data: o,
          offset: a,
          length: l - a
        }];
        if (e.length > 1) {
          const h = await Promise.all(e.slice(1).map((g) => this.fetchSlice(g, t)));
          return u.concat(h);
        }
        return u;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const i = await r.getData();
        return this._fileSize = i.byteLength, [{
          data: i,
          offset: 0,
          length: i.byteLength
        }];
      }
    else
      throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: r, length: i } = e, s = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${r}-${r + i}`
      },
      signal: t
    });
    if (s.ok)
      if (s.status === 206) {
        const o = await s.getData(), { total: a } = de(s.getHeader("content-range"));
        return this._fileSize = a || null, {
          data: o,
          offset: r,
          length: i
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const o = await s.getData();
        return this._fileSize = o.byteLength, {
          data: o,
          offset: 0,
          length: o.byteLength
        };
      }
    else
      throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function ke(n, { blockSize: e, cacheSize: t }) {
  return e === null ? n : new Cr(n, { blockSize: e, cacheSize: t });
}
function Gr(n, { headers: e = {}, credentials: t, maxRanges: r = 0, allowFullFile: i = !1, ...s } = {}) {
  const o = new Pr(n, t), a = new Pe(o, e, r, i);
  return ke(a, s);
}
function Or(n, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...i } = {}) {
  const s = new Rr(n), o = new Pe(s, e, t, r);
  return ke(o, i);
}
function vr(n, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...i } = {}) {
  const s = new Br(n), o = new Pe(s, e, t, r);
  return ke(o, i);
}
function _r(n, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? Gr(n, t) : typeof XMLHttpRequest < "u" ? Or(n, t) : vr(n, t);
}
class Ur extends Fe {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((r, i) => {
      const s = this.file.slice(e.offset, e.offset + e.length), o = new FileReader();
      o.onload = (a) => r(a.target.result), o.onerror = i, o.onabort = i, o.readAsArrayBuffer(s), t && t.addEventListener("abort", () => o.abort());
    });
  }
}
function Lr(n) {
  return new Ur(n);
}
function ge(n) {
  switch (n) {
    case x.BYTE:
    case x.ASCII:
    case x.SBYTE:
    case x.UNDEFINED:
      return 1;
    case x.SHORT:
    case x.SSHORT:
      return 2;
    case x.LONG:
    case x.SLONG:
    case x.FLOAT:
    case x.IFD:
      return 4;
    case x.RATIONAL:
    case x.SRATIONAL:
    case x.DOUBLE:
    case x.LONG8:
    case x.SLONG8:
    case x.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${n}`);
  }
}
function Nr(n) {
  const e = n.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let r = 4; r <= e[3] * 4; r += 4) {
    const i = Xt[e[r]], s = e[r + 1] ? W[e[r + 1]] : null, o = e[r + 2], a = e[r + 3];
    let l = null;
    if (!s)
      l = a;
    else {
      if (l = n[s], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${i}'.`);
      typeof l == "string" ? l = l.substring(a, a + o - 1) : l.subarray && (l = l.subarray(a, a + o), o === 1 && (l = l[0]));
    }
    t[i] = l;
  }
  return t;
}
function z(n, e, t, r) {
  let i = null, s = null;
  const o = ge(e);
  switch (e) {
    case x.BYTE:
    case x.ASCII:
    case x.UNDEFINED:
      i = new Uint8Array(t), s = n.readUint8;
      break;
    case x.SBYTE:
      i = new Int8Array(t), s = n.readInt8;
      break;
    case x.SHORT:
      i = new Uint16Array(t), s = n.readUint16;
      break;
    case x.SSHORT:
      i = new Int16Array(t), s = n.readInt16;
      break;
    case x.LONG:
    case x.IFD:
      i = new Uint32Array(t), s = n.readUint32;
      break;
    case x.SLONG:
      i = new Int32Array(t), s = n.readInt32;
      break;
    case x.LONG8:
    case x.IFD8:
      i = new Array(t), s = n.readUint64;
      break;
    case x.SLONG8:
      i = new Array(t), s = n.readInt64;
      break;
    case x.RATIONAL:
      i = new Uint32Array(t * 2), s = n.readUint32;
      break;
    case x.SRATIONAL:
      i = new Int32Array(t * 2), s = n.readInt32;
      break;
    case x.FLOAT:
      i = new Float32Array(t), s = n.readFloat32;
      break;
    case x.DOUBLE:
      i = new Float64Array(t), s = n.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === x.RATIONAL || e === x.SRATIONAL)
    for (let a = 0; a < t; a += 2)
      i[a] = s.call(
        n,
        r + a * o
      ), i[a + 1] = s.call(
        n,
        r + (a * o + 4)
      );
  else
    for (let a = 0; a < t; ++a)
      i[a] = s.call(
        n,
        r + a * o
      );
  return e === x.ASCII ? new TextDecoder("utf-8").decode(i) : i;
}
class jr {
  constructor(e, t, r) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = r;
  }
}
class re extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class zr {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(e = {}) {
    const { window: t, width: r, height: i } = e;
    let { resX: s, resY: o, bbox: a } = e;
    const l = await this.getImage();
    let c = l;
    const u = await this.getImageCount(), h = l.getBoundingBox();
    if (t && a)
      throw new Error('Both "bbox" and "window" passed.');
    if (r || i) {
      if (t) {
        const [d, p] = l.getOrigin(), [y, w] = l.getResolution();
        a = [
          d + t[0] * y,
          p + t[1] * w,
          d + t[2] * y,
          p + t[3] * w
        ];
      }
      const f = a || h;
      if (r) {
        if (s)
          throw new Error("Both width and resX passed");
        s = (f[2] - f[0]) / r;
      }
      if (i) {
        if (o)
          throw new Error("Both width and resY passed");
        o = (f[3] - f[1]) / i;
      }
    }
    if (s || o) {
      const f = [];
      for (let d = 0; d < u; ++d) {
        const p = await this.getImage(d), { SubfileType: y, NewSubfileType: w } = p.fileDirectory;
        (d === 0 || y === 2 || w & 1) && f.push(p);
      }
      f.sort((d, p) => d.getWidth() - p.getWidth());
      for (let d = 0; d < f.length; ++d) {
        const p = f[d], y = (h[2] - h[0]) / p.getWidth(), w = (h[3] - h[1]) / p.getHeight();
        if (c = p, s && s > y || o && o > w)
          break;
      }
    }
    let g = t;
    if (a) {
      const [f, d] = l.getOrigin(), [p, y] = c.getResolution(l);
      g = [
        Math.round((a[0] - f) / p),
        Math.round((a[1] - d) / y),
        Math.round((a[2] - f) / p),
        Math.round((a[3] - d) / y)
      ], g = [
        Math.min(g[0], g[2]),
        Math.min(g[1], g[3]),
        Math.max(g[0], g[2]),
        Math.max(g[1], g[3])
      ];
    }
    return c.readRasters({ ...e, window: g });
  }
}
class ie extends zr {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, r, i, s = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = r, this.firstIFDOffset = i, this.cache = s.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const r = this.bigTiff ? 4048 : 1024;
    return new yr(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : r
      }]))[0],
      e,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(e) {
    const t = this.bigTiff ? 20 : 12, r = this.bigTiff ? 8 : 2;
    let i = await this.getSlice(e);
    const s = this.bigTiff ? i.readUint64(e) : i.readUint16(e), o = s * t + (this.bigTiff ? 16 : 6);
    i.covers(e, o) || (i = await this.getSlice(e, o));
    const a = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let h = 0; h < s; l += t, ++h) {
      const g = i.readUint16(l), f = i.readUint16(l + 2), d = this.bigTiff ? i.readUint64(l + 4) : i.readUint32(l + 4);
      let p, y;
      const w = ge(f), m = l + (this.bigTiff ? 12 : 8);
      if (w * d <= (this.bigTiff ? 8 : 4))
        p = z(i, f, d, m);
      else {
        const I = i.readOffset(m), T = ge(f) * d;
        if (i.covers(I, T))
          p = z(i, f, d, I);
        else {
          const S = await this.getSlice(I, T);
          p = z(S, f, d, I);
        }
      }
      d === 1 && Ht.indexOf(g) === -1 && !(f === x.RATIONAL || f === x.SRATIONAL) ? y = p[0] : y = p, a[W[g]] = y;
    }
    const c = Nr(a), u = i.readOffset(
      e + r + t * s
    );
    return new jr(
      a,
      c,
      u
    );
  }
  async requestIFD(e) {
    if (this.ifdRequests[e])
      return this.ifdRequests[e];
    if (e === 0)
      return this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
    if (!this.ifdRequests[e - 1])
      try {
        this.ifdRequests[e - 1] = this.requestIFD(e - 1);
      } catch (t) {
        throw t instanceof re ? new re(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new re(e);
      return this.parseFileDirectoryAt(t.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const t = await this.requestIFD(e);
    return new dr(
      t.fileDirectory,
      t.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let e = 0, t = !0;
    for (; t; )
      try {
        await this.requestIFD(e), ++e;
      } catch (r) {
        if (r instanceof re)
          t = !1;
        else
          throw r;
      }
    return e;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const e = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", r = t.length + 100;
    let i = await this.getSlice(e, r);
    if (t === z(i, x.ASCII, t.length, e)) {
      const o = z(i, x.ASCII, r, e).split(`
`)[0], a = Number(o.split("=")[1].split(" ")[0]) + o.length;
      a > r && (i = await this.getSlice(e, a));
      const l = z(i, x.ASCII, a, e);
      this.ghostValues = {}, l.split(`
`).filter((c) => c.length > 0).map((c) => c.split("=")).forEach(([c, u]) => {
        this.ghostValues[c] = u;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(e, t, r) {
    const i = (await e.fetch([{ offset: 0, length: 1024 }], r))[0], s = new gr(i), o = s.getUint16(0, 0);
    let a;
    if (o === 18761)
      a = !0;
    else if (o === 19789)
      a = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = s.getUint16(2, a);
    let c;
    if (l === 42)
      c = !1;
    else if (l === 43) {
      if (c = !0, s.getUint16(4, a) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const u = c ? s.getUint64(8, a) : s.getUint32(4, a);
    return new ie(e, a, c, u, t);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    return typeof this.source.close == "function" ? this.source.close() : !1;
  }
}
async function ve(n, e = {}, t) {
  return ie.fromSource(_r(n, e), t);
}
async function _e(n, e) {
  return ie.fromSource(Lr(n), e);
}
class fe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const Kr = (n) => {
  var t, r, i;
  const e = /* @__PURE__ */ new Map();
  for (const s of n) {
    const o = new DOMParser().parseFromString(
      (t = s.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), a = (r = o == null ? void 0 : o.querySelector("Name")) == null ? void 0 : r.textContent, l = (i = o == null ? void 0 : o.querySelector("Color")) == null ? void 0 : i.textContent;
    if (!a)
      continue;
    const c = l ? l.split(",").map((u) => parseInt(u)) : [255, 255, 255];
    e.has(a) || e.set(a, {
      name: a,
      color: c,
      images: []
    }), e.get(a).images.push(s);
  }
  return e;
};
class j {
  static RGBAfromYCbCr(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, i;
    for (r = 0, i = 0; r < e.length; r += 3, i += 4) {
      const s = e[r], o = e[r + 1], a = e[r + 2];
      t[i] = s + 1.402 * (a - 128), t[i + 1] = s - 0.34414 * (o - 128) - 0.71414 * (a - 128), t[i + 2] = s + 1.772 * (o - 128), t[i + 3] = 255;
    }
    return t;
  }
  static RGBAfromRGB(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, i;
    for (r = 0, i = 0; r < e.length; r += 3, i += 4)
      t[i] = e[r], t[i + 1] = e[r + 1], t[i + 2] = e[r + 2], t[i + 3] = 255;
    return t;
  }
  static RGBAfromWhiteIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, o = 0; s < e.length; ++s, o += 4)
      i = 256 - e[s] / t * 256, r[o] = i, r[o + 1] = i, r[o + 2] = i, r[o + 3] = 255;
    return r;
  }
  static RGBAfromBlackIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, o = 0; s < e.length; ++s, o += 4)
      i = e[s] / t * 256, r[o] = i, r[o + 1] = i, r[o + 2] = i, r[o + 3] = 255;
    return r;
  }
  static RGBAfromPalette(e, t) {
    const r = new Uint8ClampedArray(e.length * 4), i = t.length / 3, s = t.length / 3 * 2;
    for (let o = 0, a = 0; o < e.length; ++o, a += 4) {
      const l = e[o];
      r[a] = t[l] / 65536 * 256, r[a + 1] = t[l + i] / 65536 * 256, r[a + 2] = t[l + s] / 65536 * 256, r[a + 3] = 255;
    }
    return r;
  }
  static RGBAfromCMYK(e) {
    const t = new Uint8ClampedArray(e.length);
    for (let r = 0, i = 0; r < e.length; r += 4, i += 4) {
      const s = e[r], o = e[r + 1], a = e[r + 2], l = e[r + 3];
      t[i] = 255 * ((255 - s) / 256) * ((255 - l) / 256), t[i + 1] = 255 * ((255 - o) / 256) * ((255 - l) / 256), t[i + 2] = 255 * ((255 - a) / 256) * ((255 - l) / 256), t[i + 3] = 255;
    }
    return t;
  }
  static RGBAfromCIELab(e) {
    const s = new Uint8ClampedArray(e.length * 4 / 3);
    for (let o = 0, a = 0; o < e.length; o += 3, a += 4) {
      const l = e[o + 0], c = e[o + 1] << 24 >> 24, u = e[o + 2] << 24 >> 24;
      let h = (l + 16) / 116, g = c / 500 + h, f = h - u / 200, d, p, y;
      g = 0.95047 * (g * g * g > 8856e-6 ? g * g * g : (g - 16 / 116) / 7.787), h = 1 * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), f = 1.08883 * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), d = g * 3.2406 + h * -1.5372 + f * -0.4986, p = g * -0.9689 + h * 1.8758 + f * 0.0415, y = g * 0.0557 + h * -0.204 + f * 1.057, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, y = y > 31308e-7 ? 1.055 * y ** (1 / 2.4) - 0.055 : 12.92 * y, s[a] = Math.max(0, Math.min(1, d)) * 255, s[a + 1] = Math.max(0, Math.min(1, p)) * 255, s[a + 2] = Math.max(0, Math.min(1, y)) * 255, s[a + 3] = 255;
    }
    return s;
  }
}
function Vr(n) {
  if (!n.version || n.version.major < 2 || n.version.major == 2 && n.version.minor < 3) {
    console.error("This version of OpenSeadragon is too old to support this monkey patch");
    return;
  }
  if (n.ImageJob)
    return;
  function e(r) {
    n.extend(
      !0,
      this,
      {
        timeout: n.DEFAULT_SETTINGS.timeout,
        jobId: null
      },
      r
    ), this.image = null;
  }
  e.prototype = {
    errorMsg: null,
    /**
     * Starts the image job.
     * @method
     */
    start: function() {
      var r = this, i = this.abort;
      this.image = new Image(), this.image.onload = function() {
        r.finish(!0);
      }, this.image.onabort = this.image.onerror = function() {
        r.errorMsg = "Image load aborted", r.finish(!1);
      }, this.jobId = window.setTimeout(function() {
        r.errorMsg = "Image load exceeded timeout (" + r.timeout + " ms)", r.finish(!1);
      }, this.timeout), this.loadWithAjax ? (this.request = n.makeAjaxRequest({
        url: this.src,
        withCredentials: this.ajaxWithCredentials,
        headers: this.ajaxHeaders,
        responseType: "arraybuffer",
        postData: this.postData,
        success: function(s) {
          var o;
          try {
            o = new window.Blob([s.response]);
          } catch (u) {
            var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (u.name === "TypeError" && a) {
              var l = new a();
              l.append(s.response), o = l.getBlob();
            }
          }
          o.size === 0 && (r.errorMsg = "Empty image response.", r.finish(!1));
          var c = (window.URL || window.webkitURL).createObjectURL(o);
          r.image.src = c;
        },
        error: function(s) {
          r.errorMsg = "Image load aborted - XHR error: Ajax returned " + s.status, r.finish(!1);
        }
      }), this.abort = function() {
        r.request.abort(), typeof i == "function" && i();
      }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.src.fetch ? this.src.fetch().then((s) => this.image.src = s) : this.image.src = this.src);
    },
    finish: function(r) {
      this.image.onload = this.image.onerror = this.image.onabort = null, r || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
    }
  };
  function t(r, i, s) {
    var o;
    r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (o = r.jobQueue.shift(), o.start(), r.jobsInProgress++), s(i.image, i.errorMsg, i.request);
  }
  n.ImageLoader.prototype.addJob = function(r) {
    var i = this, s = function(l) {
      t(i, l, r.callback);
    }, o = {
      src: r.src,
      loadWithAjax: r.loadWithAjax,
      ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null,
      crossOriginPolicy: r.crossOriginPolicy,
      ajaxWithCredentials: r.ajaxWithCredentials,
      postData: r.postData,
      callback: s,
      abort: r.abort,
      timeout: this.timeout
    }, a = new e(o);
    !this.jobLimit || this.jobsInProgress < this.jobLimit ? (a.start(), this.jobsInProgress++) : this.jobQueue.push(a);
  }, n.Tile.prototype._hasTransparencyChannel = function() {
    return !1;
  };
}
const qr = (n) => {
  const t = class t extends n.TileSource {
    constructor(s, o = { logLatency: !1 }) {
      super();
      /**
       * Return the tileWidth for a given level.
       * @function
       * @param {Number} level
       */
      P(this, "getTileWidth", (s) => {
        if (this.levels.length > s)
          return this.levels[s].tileWidth;
      });
      /**
       * Return the tileHeight for a given level.
       * @function
       * @param {Number} level
       */
      P(this, "getTileHeight", (s) => {
        if (this.levels.length > s)
          return this.levels[s].tileHeight;
      });
      /**
       * @function
       * @param {Number} level
       */
      P(this, "getLevelScale", (s) => {
        let o = NaN;
        return this.levels.length > 0 && s >= this.minLevel && s <= this.maxLevel && (o = this.levels[s].width / this.levels[this.maxLevel].width), o;
      });
      /**
       * Handle maintaining unique caches per channel in multi-channel images
       */
      P(this, "getTileHashKey", (s, o, a) => {
        var l;
        return `${((l = this == null ? void 0 : this.channel) == null ? void 0 : l.name) ?? ""}_${s}_${o}_${a}`;
      });
      /**
       * Implement function here instead of as custom tile source in client code
       * @function
       * @param {Number} levelnum
       * @param {Number} x
       * @param {Number} y
       */
      P(this, "getTileUrl", (s, o, a) => {
        let l = this.levels[s], c = new String(`${s}/${o}_${a}`);
        return c.fetch = /* @__PURE__ */ ((u, h, g, f, d) => () => this.regionToDataUrl.call(u, h, g, f, d))(this, l, o, a, c), c;
      });
      P(this, "downloadTileStart", (s) => {
        s.src.fetch().then((o) => {
          let a = new Image(), l = "" + s.src;
          a.onload = function() {
            s.finish(a);
          }, a.onerror = a.onabort = function() {
            s.finish(null, l, "Request aborted");
          }, a.src = o;
        });
      });
      P(this, "downloadTileAbort", (s) => {
        s.src.abortController && s.src.abortController.abort();
      });
      P(this, "setupComplete", () => {
        this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
      });
      P(this, "setupLevels", () => {
        if (this._ready)
          return;
        let s = this.GeoTIFFImages.sort((h, g) => g.getWidth() - h.getWidth()), o = this._tileSize, a = this._tileSize, l = s[0].getWidth();
        this.width = l;
        let c = s[0].getHeight();
        if (this.height = c, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new n.Point(this.width, this.height), s.reduce(
          (h, g) => (h.width !== -1 && (h.valid = h.valid && g.getWidth() < h.width), h.width = g.getWidth(), h),
          { valid: !0, width: -1 }
        ).valid)
          this.levels = s.map((h) => {
            let g = h.getWidth(), f = h.getHeight();
            return {
              width: g,
              height: f,
              tileWidth: this.options.tileWidth || h.getTileWidth() || o,
              tileHeight: this.options.tileHeight || h.getTileHeight() || a,
              image: h,
              scaleFactor: 1
            };
          }), this.maxLevel = this.levels.length - 1;
        else {
          let h = Math.ceil(
            Math.log2(Math.max(l / o, c / a))
          ), g = [...Array(h).keys()].filter((f) => f % 2 == 0);
          this.levels = g.map((f) => {
            let d = Math.pow(2, f);
            const p = s.filter((w) => {
              const m = Math.pow(2, f - 1);
              return m >= 0 ? w.getWidth() * m < l && w.getWidth() * d >= l : w.getWidth() * d >= l;
            });
            if (p.length === 0)
              return null;
            const y = p[0];
            return {
              width: l / d,
              height: c / d,
              tileWidth: this.options.tileWidth || y.getTileWidth() || o,
              tileHeight: this.options.tileHeight || y.getTileHeight() || a,
              image: y,
              scaleFactor: d * y.getWidth() / l
            };
          }).filter((f) => f !== null), this.maxLevel = this.levels.length - 1;
        }
        this.levels = this.levels.sort((h, g) => h.width - g.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
      });
      P(this, "regionToDataUrl", (s, o, a, l) => {
        var w, m, I, T, S;
        let c = this.options.logLatency && Date.now(), h = (l.abortController = new AbortController()).signal;
        const g = s.tileWidth, f = s.tileHeight, d = [o * g, a * f, (o + 1) * g, (a + 1) * f].map(
          (A) => A * s.scaleFactor
        ), p = s.image;
        if ((m = (w = p.fileDirectory) == null ? void 0 : w.Software) == null ? void 0 : m.startsWith("PerkinElmer-QPI")) {
          const A = new DOMParser().parseFromString(
            (I = p.fileDirectory) == null ? void 0 : I.ImageDescription,
            "text/xml"
          );
          (T = A.querySelector("Name")) == null || T.textContent;
          const F = (S = A.querySelector("Color")) == null ? void 0 : S.textContent, b = F ? F.split(",").map((G) => parseInt(G)) : [255, 255, 255];
          return s.image.readRGB({
            interleave: !0,
            window: d,
            pool: this._pool,
            width: s.tileWidth,
            height: s.tileHeight,
            signal: h
          }).then((G) => {
            let R = document.createElement("canvas");
            R.width = s.tileWidth, R.height = s.tileHeight;
            let C = R.getContext("2d"), M = new Uint8ClampedArray(4 * R.width * R.height), U = new Uint8ClampedArray(G), L, B;
            for (L = 0, B = 0; L < U.length; L += 3, B += 4)
              M[B] = U[L] * b[0] / 255, M[B + 1] = U[L + 1] * b[1] / 255, M[B + 2] = U[L + 2] * b[2] / 255, M[B + 3] = 255;
            const Q = C.createImageData(R.width, R.height);
            Q.data.set(M), C.putImageData(Q, 0, 0);
            let ne = R.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)("Tile latency (ms):", Date.now() - c), ne;
          });
        } else
          return s.image.getTileOrStrip(o, a, null, this._pool, h).then((A) => {
            let F = new Uint8ClampedArray(A.data), b = document.createElement("canvas");
            b.width = s.tileWidth, b.height = s.tileHeight;
            let G = b.getContext("2d"), R = s.image.fileDirectory.PhotometricInterpretation, C;
            if (F.length / (b.width * b.height) % 4 === 0)
              C = F;
            else
              switch (R) {
                case D.WhiteIsZero:
                  C = j.RGBAfromWhiteIsZero(
                    F,
                    2 ** s.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case D.BlackIsZero:
                  C = j.RGBAfromBlackIsZero(
                    F,
                    2 ** s.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case D.RGB:
                  C = j.RGBAfromRGB(F);
                  break;
                case D.Palette:
                  C = j.RGBAfromPalette(F, 2 ** s.image.fileDirectory.colorMap);
                  break;
                case D.CMYK:
                  C = j.RGBAfromCMYK(F);
                  break;
                case D.YCbCr:
                  C = j.RGBAfromYCbCr(F);
                  break;
                case D.CIELab:
                  C = j.RGBAfromCIELab(F);
                  break;
              }
            const M = G.createImageData(b.width, b.height);
            M.data.set(C), G.putImageData(M, 0, 0);
            let U = b.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
              "Tile latency (ms):",
              Date.now() - c
            ), U;
          });
      });
      t._osdReady || t.applyOSDPatch(n);
      let a = this;
      this.input = s, this.options = o, this.channel = (s == null ? void 0 : s.channel) ?? null, this._ready = !1, this._pool = t.sharedPool, this._tileSize = 256, s.GeoTIFF && s.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(s.GeoTIFF),
        GeoTIFFImages: Promise.resolve(s.GeoTIFFImages),
        ready: new fe()
      }, this.GeoTIFF = s.GeoTIFF, this.imageCount = s.GeoTIFFImages.length, this.GeoTIFFImages = s.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: s instanceof File ? _e(s) : ve(s),
        GeoTIFFImages: new fe(),
        ready: new fe()
      }, this.promises.GeoTIFF.then((l) => (a.GeoTIFF = l, l.getImageCount())).then((l) => {
        a.imageCount = l;
        let c = [...Array(l).keys()].map((u) => a.GeoTIFF.getImage(u));
        return Promise.all(c);
      }).then((l) => {
        a.GeoTIFFImages = l, a.promises.GeoTIFFImages.resolve(l), this.setupLevels();
      }).catch((l) => {
        throw console.error("Re-throwing error with GeoTIFF:", l), l;
      }));
    }
  };
  /**
   * Create a shared GeoTIFF Pool for all GeoTIFFTileSources to use.
   *
   * If a shared pool is not created, every page of every GeoTIFF will create its own pool,
   * which can quickly lead to browser crashes.
   *
   * @static sharedPool
   * @type {Pool}
   */
  P(t, "sharedPool", new mr()), P(t, "_osdReady", !1), // Apply ImageJob patch to OpenSeadragon. Can be extended for modular patches.
  P(t, "applyOSDPatch", (s) => {
    Vr(s), t._osdReady = !0;
  }), P(t, "getAllTileSources", async (s, o) => {
    const a = s instanceof File ? s.name.split(".").pop() : s.split(".").pop();
    let l = s instanceof File ? _e(s) : ve(s);
    return l.then((c) => (l = c, c.getImageCount())).then(
      (c) => Promise.all([...Array(c).keys()].map(async (u) => (await l).getImage(u)))
    ).then((c) => {
      c = c.filter(
        (f) => f.fileDirectory.photometricInterpretation !== D.TransparencyMask
      ), c.sort((f, d) => d.getWidth() - f.getWidth());
      const u = 0.015;
      return c.reduce((f, d) => {
        const p = d.getWidth() / d.getHeight(), y = f.filter(
          (w) => Math.abs(1 - w.aspectRatio / p) < u
        );
        if (y.length === 0) {
          let w = {
            aspectRatio: p,
            images: [d]
          };
          f.push(w);
        } else
          y[0].images.push(d);
        return f;
      }, []).map((f) => f.images).map((f, d) => {
        if (d !== 0)
          return new n.GeoTIFFTileSource(
            {
              GeoTIFF: l,
              GeoTIFFImages: f
            },
            o
          );
        switch (a) {
          case "qptiff":
            const p = Kr(f);
            return Array.from(p.values()).map((y, w) => new n.GeoTIFFTileSource(
              {
                GeoTIFF: l,
                GeoTIFFImages: y.images,
                channel: {
                  name: y.name,
                  color: y.color
                }
              },
              o
            ));
          default:
            return new n.GeoTIFFTileSource(
              {
                GeoTIFF: l,
                GeoTIFFImages: f
              },
              o
            );
        }
      });
    });
  });
  let e = t;
  n.GeoTIFFTileSource = e;
};
(function(n, e) {
  typeof exports > "u" || typeof n.OpenSeadragon < "u" && e(n.OpenSeadragon);
})(typeof window < "u" ? window : void 0, qr);
export {
  ss as L,
  is as a,
  qr as e,
  We as g
};
//# sourceMappingURL=main-7p-Yefg8.js.map
