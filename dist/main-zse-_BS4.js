var gt = Object.defineProperty;
var pt = (i, e, t) => e in i ? gt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var F = (i, e, t) => (pt(i, typeof e != "symbol" ? e + "" : e, t), t);
function E(i) {
  return (e, ...t) => yt(i, e, t);
}
function V(i, e) {
  return E(
    _e(
      i,
      e
    ).get
  );
}
const {
  apply: yt,
  construct: $r,
  defineProperty: Wr,
  get: Zr,
  getOwnPropertyDescriptor: _e,
  getPrototypeOf: ge,
  has: Jr,
  ownKeys: mt,
  set: Qr,
  setPrototypeOf: es
} = Reflect, {
  iterator: J,
  species: ts,
  toStringTag: wt,
  for: rs
} = Symbol, xt = Object, {
  create: pe,
  defineProperty: bt,
  freeze: ss,
  is
} = xt, It = Array, St = It.prototype, Ue = St[J], Tt = E(Ue), Le = ArrayBuffer, At = Le.prototype;
V(At, "byteLength");
const Re = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Re && V(Re.prototype, "byteLength");
const je = ge(Uint8Array);
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
V(
  k,
  "buffer"
);
V(
  k,
  "byteOffset"
);
V(
  k,
  "length"
);
V(
  k,
  wt
);
const Dt = Uint8Array, Ne = Uint16Array, ye = Uint32Array, Ct = Float32Array, Z = ge([][J]()), ze = E(Z.next), Et = E(function* () {
}().next), Ft = ge(Z), Pt = DataView.prototype, kt = E(
  Pt.getUint16
), me = WeakMap, Ke = me.prototype, Ve = E(Ke.get), Rt = E(Ke.set), qe = new me(), Mt = pe(null, {
  next: {
    value: function() {
      const e = Ve(qe, this);
      return ze(e);
    }
  },
  [J]: {
    value: function() {
      return this;
    }
  }
});
function Bt(i) {
  if (i[J] === Ue && Z.next === ze)
    return i;
  const e = pe(Mt);
  return Rt(qe, e, Tt(i)), e;
}
const Ot = new me(), Gt = pe(Ft, {
  next: {
    value: function() {
      const e = Ve(Ot, this);
      return Et(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const i of mt(Z))
  i !== "next" && bt(Gt, i, _e(Z, i));
const He = new Le(4), vt = new Ct(He), _t = new ye(He), O = new Ne(512), G = new Dt(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  e < -27 ? (O[i] = 0, O[i | 256] = 32768, G[i] = 24, G[i | 256] = 24) : e < -14 ? (O[i] = 1024 >> -e - 14, O[i | 256] = 1024 >> -e - 14 | 32768, G[i] = -e - 1, G[i | 256] = -e - 1) : e <= 15 ? (O[i] = e + 15 << 10, O[i | 256] = e + 15 << 10 | 32768, G[i] = 13, G[i | 256] = 13) : e < 128 ? (O[i] = 31744, O[i | 256] = 64512, G[i] = 24, G[i | 256] = 24) : (O[i] = 31744, O[i | 256] = 64512, G[i] = 13, G[i | 256] = 13);
}
const we = new ye(2048);
for (let i = 1; i < 1024; ++i) {
  let e = i << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, we[i] = e | t;
}
for (let i = 1024; i < 2048; ++i)
  we[i] = 939524096 + (i - 1024 << 13);
const q = new ye(64);
for (let i = 1; i < 31; ++i)
  q[i] = i << 23;
q[31] = 1199570944;
q[32] = 2147483648;
for (let i = 33; i < 63; ++i)
  q[i] = 2147483648 + (i - 32 << 23);
q[63] = 3347054592;
const Ye = new Ne(64);
for (let i = 1; i < 64; ++i)
  i !== 32 && (Ye[i] = 1024);
function Ut(i) {
  const e = i >> 10;
  return _t[0] = we[Ye[e] + (i & 1023)] + q[e], vt[0];
}
function Xe(i, e, ...t) {
  return Ut(
    kt(i, e, ...Bt(t))
  );
}
function $e(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var xe = { exports: {} };
function We(i, e, t) {
  const r = t && t.debug || !1;
  r && console.log("[xml-utils] getting " + e + " in " + i);
  const s = typeof i == "object" ? i.outer : i, n = s.slice(0, s.indexOf(">") + 1), a = ['"', "'"];
  for (let o = 0; o < a.length; o++) {
    const l = a[o], c = e + "\\=" + l + "([^" + l + "]*)" + l;
    r && console.log("[xml-utils] pattern:", c);
    const f = new RegExp(c).exec(n);
    if (r && console.log("[xml-utils] match:", f), f)
      return f[1];
  }
}
xe.exports = We;
xe.exports.default = We;
var Lt = xe.exports;
const oe = /* @__PURE__ */ $e(Lt);
var be = { exports: {} }, Ie = { exports: {} }, Se = { exports: {} };
function Ze(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index : -1;
}
Se.exports = Ze;
Se.exports.default = Ze;
var jt = Se.exports, Te = { exports: {} };
function Je(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index + s[0].length - 1 : -1;
}
Te.exports = Je;
Te.exports.default = Je;
var Nt = Te.exports, Ae = { exports: {} };
function Qe(i, e) {
  const t = new RegExp(e, "g"), r = i.match(t);
  return r ? r.length : 0;
}
Ae.exports = Qe;
Ae.exports.default = Qe;
var zt = Ae.exports;
const Kt = jt, ae = Nt, Me = zt;
function et(i, e, t) {
  const r = t && t.debug || !1, s = !(t && typeof t.nested === !1), n = t && t.startIndex || 0;
  r && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const a = Kt(i, `<${e}[ 
>/]`, n);
  if (r && console.log("[xml-utils] start:", a), a === -1)
    return;
  const o = i.slice(a + e.length);
  let l = ae(o, "^[^<]*[ /]>", 0);
  const c = l !== -1 && o[l - 1] === "/";
  if (r && console.log("[xml-utils] selfClosing:", c), c === !1)
    if (s) {
      let u = 0, g = 1, y = 0;
      for (; (l = ae(o, "[ /]" + e + ">", u)) !== -1; ) {
        const p = o.substring(u, l + 1);
        if (g += Me(p, "<" + e + `[ 
	>]`), y += Me(p, "</" + e + ">"), y >= g)
          break;
        u = l;
      }
    } else
      l = ae(o, "[ /]" + e + ">", 0);
  const h = a + e.length + l + 1;
  if (r && console.log("[xml-utils] end:", h), h === -1)
    return;
  const f = i.slice(a, h);
  let d;
  return c ? d = null : d = f.slice(f.indexOf(">") + 1, f.lastIndexOf("<")), { inner: d, outer: f, start: a, end: h };
}
Ie.exports = et;
Ie.exports.default = et;
var Vt = Ie.exports;
const qt = Vt;
function tt(i, e, t) {
  const r = [], s = t && t.debug || !1, n = t && typeof t.nested == "boolean" ? t.nested : !0;
  let a = t && t.startIndex || 0, o;
  for (; o = qt(i, e, { debug: s, startIndex: a }); )
    n ? a = o.start + 1 + e.length : a = o.end, r.push(o);
  return s && console.log("findTagsByName found", r.length, "tags"), r;
}
be.exports = tt;
be.exports.default = tt;
var Ht = be.exports;
const Yt = /* @__PURE__ */ $e(Ht), W = {
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
}, v = {};
for (const i in W)
  W.hasOwnProperty(i) && (v[W[i]] = parseInt(i, 10));
const Xt = [
  v.BitsPerSample,
  v.ExtraSamples,
  v.SampleFormat,
  v.StripByteCounts,
  v.StripOffsets,
  v.StripRowCounts,
  v.TileByteCounts,
  v.TileOffsets,
  v.SubIFDs
], le = {
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
}, w = {};
for (const i in le)
  le.hasOwnProperty(i) && (w[le[i]] = parseInt(i, 10));
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
}, $t = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, ns = {
  Version: 0,
  AddCompression: 1
}, os = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, Wt = {
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
function Zt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3);
  let n;
  for (let a = 0, o = 0; a < i.length; ++a, o += 3)
    n = 256 - i[a] / e * 256, s[o] = n, s[o + 1] = n, s[o + 2] = n;
  return s;
}
function Jt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3);
  let n;
  for (let a = 0, o = 0; a < i.length; ++a, o += 3)
    n = i[a] / e * 256, s[o] = n, s[o + 1] = n, s[o + 2] = n;
  return s;
}
function Qt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3), n = e.length / 3, a = e.length / 3 * 2;
  for (let o = 0, l = 0; o < i.length; ++o, l += 3) {
    const c = i[o];
    s[l] = e[c] / 65536 * 256, s[l + 1] = e[c + n] / 65536 * 256, s[l + 2] = e[c + a] / 65536 * 256;
  }
  return s;
}
function er(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 4, n += 3) {
    const a = i[s], o = i[s + 1], l = i[s + 2], c = i[s + 3];
    r[n] = 255 * ((255 - a) / 256) * ((255 - c) / 256), r[n + 1] = 255 * ((255 - o) / 256) * ((255 - c) / 256), r[n + 2] = 255 * ((255 - l) / 256) * ((255 - c) / 256);
  }
  return r;
}
function tr(i) {
  const { width: e, height: t } = i, r = new Uint8ClampedArray(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 3, n += 3) {
    const a = i[s], o = i[s + 1], l = i[s + 2];
    r[n] = a + 1.402 * (l - 128), r[n + 1] = a - 0.34414 * (o - 128) - 0.71414 * (l - 128), r[n + 2] = a + 1.772 * (o - 128);
  }
  return r;
}
const rr = 0.95047, sr = 1, ir = 1.08883;
function nr(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 3, n += 3) {
    const a = i[s + 0], o = i[s + 1] << 24 >> 24, l = i[s + 2] << 24 >> 24;
    let c = (a + 16) / 116, h = o / 500 + c, f = c - l / 200, d, u, g;
    h = rr * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), c = sr * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), f = ir * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), d = h * 3.2406 + c * -1.5372 + f * -0.4986, u = h * -0.9689 + c * 1.8758 + f * 0.0415, g = h * 0.0557 + c * -0.204 + f * 1.057, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, r[n] = Math.max(0, Math.min(1, d)) * 255, r[n + 1] = Math.max(0, Math.min(1, u)) * 255, r[n + 2] = Math.max(0, Math.min(1, g)) * 255;
  }
  return r;
}
const rt = /* @__PURE__ */ new Map();
function _(i, e) {
  Array.isArray(i) || (i = [i]), i.forEach((t) => rt.set(t, e));
}
async function st(i) {
  const e = rt.get(i.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${i.Compression}`);
  const t = await e();
  return new t(i);
}
_([void 0, 1], () => import("./raw-_eObXrMO.js").then((i) => i.default));
_(5, () => import("./lzw-5BnjP5Zu.js").then((i) => i.default));
_(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
_(7, () => import("./jpeg-cL5qbLGO.js").then((i) => i.default));
_([8, 32946], () => import("./deflate-vcCR2g03.js").then((i) => i.default));
_(32773, () => import("./packbits-QLsyzNt2.js").then((i) => i.default));
_(
  34887,
  () => import("./lerc-wpYx4tID.js").then(async (i) => (await i.zstd.init(), i)).then((i) => i.default)
);
_(50001, () => import("./webimage-Hf-HYtMO.js").then((i) => i.default));
function se(i, e, t, r = 1) {
  return new (Object.getPrototypeOf(i)).constructor(e * t * r);
}
function or(i, e, t, r, s) {
  const n = e / r, a = t / s;
  return i.map((o) => {
    const l = se(o, r, s);
    for (let c = 0; c < s; ++c) {
      const h = Math.min(Math.round(a * c), t - 1);
      for (let f = 0; f < r; ++f) {
        const d = Math.min(Math.round(n * f), e - 1), u = o[h * e + d];
        l[c * r + f] = u;
      }
    }
    return l;
  });
}
function z(i, e, t) {
  return (1 - t) * i + t * e;
}
function ar(i, e, t, r, s) {
  const n = e / r, a = t / s;
  return i.map((o) => {
    const l = se(o, r, s);
    for (let c = 0; c < s; ++c) {
      const h = a * c, f = Math.floor(h), d = Math.min(Math.ceil(h), t - 1);
      for (let u = 0; u < r; ++u) {
        const g = n * u, y = g % 1, p = Math.floor(g), x = Math.min(Math.ceil(g), e - 1), m = o[f * e + p], b = o[f * e + x], I = o[d * e + p], S = o[d * e + x], T = z(
          z(m, b, y),
          z(I, S, y),
          h % 1
        );
        l[c * r + u] = T;
      }
    }
    return l;
  });
}
function lr(i, e, t, r, s, n = "nearest") {
  switch (n.toLowerCase()) {
    case "nearest":
      return or(i, e, t, r, s);
    case "bilinear":
    case "linear":
      return ar(i, e, t, r, s);
    default:
      throw new Error(`Unsupported resampling method: '${n}'`);
  }
}
function cr(i, e, t, r, s, n) {
  const a = e / r, o = t / s, l = se(i, r, s, n);
  for (let c = 0; c < s; ++c) {
    const h = Math.min(Math.round(o * c), t - 1);
    for (let f = 0; f < r; ++f) {
      const d = Math.min(Math.round(a * f), e - 1);
      for (let u = 0; u < n; ++u) {
        const g = i[h * e * n + d * n + u];
        l[c * r * n + f * n + u] = g;
      }
    }
  }
  return l;
}
function hr(i, e, t, r, s, n) {
  const a = e / r, o = t / s, l = se(i, r, s, n);
  for (let c = 0; c < s; ++c) {
    const h = o * c, f = Math.floor(h), d = Math.min(Math.ceil(h), t - 1);
    for (let u = 0; u < r; ++u) {
      const g = a * u, y = g % 1, p = Math.floor(g), x = Math.min(Math.ceil(g), e - 1);
      for (let m = 0; m < n; ++m) {
        const b = i[f * e * n + p * n + m], I = i[f * e * n + x * n + m], S = i[d * e * n + p * n + m], T = i[d * e * n + x * n + m], C = z(
          z(b, I, y),
          z(S, T, y),
          h % 1
        );
        l[c * r * n + u * n + m] = C;
      }
    }
  }
  return l;
}
function fr(i, e, t, r, s, n, a = "nearest") {
  switch (a.toLowerCase()) {
    case "nearest":
      return cr(
        i,
        e,
        t,
        r,
        s,
        n
      );
    case "bilinear":
    case "linear":
      return hr(
        i,
        e,
        t,
        r,
        s,
        n
      );
    default:
      throw new Error(`Unsupported resampling method: '${a}'`);
  }
}
function ur(i, e, t) {
  let r = 0;
  for (let s = e; s < t; ++s)
    r += i[s];
  return r;
}
function fe(i, e, t) {
  switch (i) {
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
function dr(i, e) {
  return (i === 1 || i === 2) && e <= 32 && e % 8 === 0 ? !1 : !(i === 3 && (e === 16 || e === 32 || e === 64));
}
function gr(i, e, t, r, s, n, a) {
  const o = new DataView(i), l = t === 2 ? a * n : a * n * r, c = t === 2 ? 1 : r, h = fe(e, s, l), f = parseInt("1".repeat(s), 2);
  if (e === 1) {
    let d;
    t === 1 ? d = r * s : d = s;
    let u = n * d;
    u & 7 && (u = u + 7 & -8);
    for (let g = 0; g < a; ++g) {
      const y = g * u;
      for (let p = 0; p < n; ++p) {
        const x = y + p * c * s;
        for (let m = 0; m < c; ++m) {
          const b = x + m * s, I = (g * n + p) * c + m, S = Math.floor(b / 8), T = b % 8;
          if (T + s <= 8)
            h[I] = o.getUint8(S) >> 8 - s - T & f;
          else if (T + s <= 16)
            h[I] = o.getUint16(S) >> 16 - s - T & f;
          else if (T + s <= 24) {
            const C = o.getUint16(S) << 8 | o.getUint8(S + 2);
            h[I] = C >> 24 - s - T & f;
          } else
            h[I] = o.getUint32(S) >> 32 - s - T & f;
        }
      }
    }
  }
  return h.buffer;
}
class pr {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, r, s, n, a) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = r, this.littleEndian = s, this.tiles = n ? {} : null, this.isTiled = !e.StripOffsets;
    const o = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof o > "u" ? 1 : o, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = a;
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
            return function(s, n) {
              return Xe(this, s, n);
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
    const r = this.getSampleFormat(e), s = this.getBitsPerSample(e);
    return fe(r, s, t);
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
  async getTileOrStrip(e, t, r, s, n) {
    const a = Math.ceil(this.getWidth() / this.getTileWidth()), o = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: c } = this;
    this.planarConfiguration === 1 ? l = t * a + e : this.planarConfiguration === 2 && (l = r * a * o + t * a + e);
    let h, f;
    this.isTiled ? (h = this.fileDirectory.TileOffsets[l], f = this.fileDirectory.TileByteCounts[l]) : (h = this.fileDirectory.StripOffsets[l], f = this.fileDirectory.StripByteCounts[l]);
    const d = (await this.source.fetch([{ offset: h, length: f }], n))[0];
    let u;
    return c === null || !c[l] ? (u = (async () => {
      let g = await s.decode(this.fileDirectory, d);
      const y = this.getSampleFormat(), p = this.getBitsPerSample();
      return dr(y, p) && (g = gr(
        g,
        y,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        p,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), g;
    })(), c !== null && (c[l] = u)) : u = c[l], { x: e, y: t, sample: r, data: await u };
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
  async _readRaster(e, t, r, s, n, a, o, l, c) {
    const h = this.getTileWidth(), f = this.getTileHeight(), d = this.getWidth(), u = this.getHeight(), g = Math.max(Math.floor(e[0] / h), 0), y = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(d / h)
    ), p = Math.max(Math.floor(e[1] / f), 0), x = Math.min(
      Math.ceil(e[3] / f),
      Math.ceil(u / f)
    ), m = e[2] - e[0];
    let b = this.getBytesPerPixel();
    const I = [], S = [];
    for (let A = 0; A < t.length; ++A)
      this.planarConfiguration === 1 ? I.push(ur(this.fileDirectory.BitsPerSample, 0, t[A]) / 8) : I.push(0), S.push(this.getReaderForSample(t[A]));
    const T = [], { littleEndian: C } = this;
    for (let A = p; A < x; ++A)
      for (let R = g; R < y; ++R) {
        let B;
        this.planarConfiguration === 1 && (B = this.getTileOrStrip(R, A, 0, n, c));
        for (let M = 0; M < t.length; ++M) {
          const U = M, Q = t[M];
          this.planarConfiguration === 2 && (b = this.getSampleByteSize(Q), B = this.getTileOrStrip(R, A, Q, n, c));
          const nt = B.then((H) => {
            const ot = H.data, at = new DataView(ot), ne = this.getBlockHeight(H.y), Y = H.y * f, ee = H.x * h, lt = Y + ne, ct = (H.x + 1) * h, ht = S[U], ft = Math.min(ne, ne - (lt - e[3]), u - Y), ut = Math.min(h, h - (ct - e[2]), d - ee);
            for (let X = Math.max(0, e[1] - Y); X < ft; ++X)
              for (let $ = Math.max(0, e[0] - ee); $ < ut; ++$) {
                const dt = (X * h + $) * b, ke = ht.call(
                  at,
                  dt + I[U],
                  C
                );
                let te;
                s ? (te = (X + Y - e[1]) * m * t.length + ($ + ee - e[0]) * t.length + U, r[te] = ke) : (te = (X + Y - e[1]) * m + $ + ee - e[0], r[U][te] = ke);
              }
          });
          T.push(nt);
        }
      }
    if (await Promise.all(T), a && e[2] - e[0] !== a || o && e[3] - e[1] !== o) {
      let A;
      return s ? A = fr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        t.length,
        l
      ) : A = lr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        l
      ), A.width = a, A.height = o, A;
    }
    return r.width = a || e[2] - e[0], r.height = o || e[3] - e[1], r;
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
    pool: s = null,
    width: n,
    height: a,
    resampleMethod: o,
    fillValue: l,
    signal: c
  } = {}) {
    const h = e || [0, 0, this.getWidth(), this.getHeight()];
    if (h[0] > h[2] || h[1] > h[3])
      throw new Error("Invalid subsets");
    const f = h[2] - h[0], d = h[3] - h[1], u = f * d, g = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let m = 0; m < g; ++m)
        t.push(m);
    else
      for (let m = 0; m < t.length; ++m)
        if (t[m] >= g)
          return Promise.reject(new RangeError(`Invalid sample index '${t[m]}'.`));
    let y;
    if (r) {
      const m = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, b = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      y = fe(m, b, u * t.length), l && y.fill(l);
    } else {
      y = [];
      for (let m = 0; m < t.length; ++m) {
        const b = this.getArrayForSample(t[m], u);
        Array.isArray(l) && m < l.length ? b.fill(l[m]) : l && !Array.isArray(l) && b.fill(l), y.push(b);
      }
    }
    const p = s || await st(this.fileDirectory);
    return await this._readRaster(
      h,
      t,
      y,
      r,
      p,
      n,
      a,
      o,
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
    width: s,
    height: n,
    resampleMethod: a,
    enableAlpha: o = !1,
    signal: l
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === D.RGB) {
      let x = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== $t.Unspecified && o) {
        x = [];
        for (let m = 0; m < this.fileDirectory.BitsPerSample.length; m += 1)
          x.push(m);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: x,
        pool: r,
        width: s,
        height: n,
        resampleMethod: a,
        signal: l
      });
    }
    let f;
    switch (h) {
      case D.WhiteIsZero:
      case D.BlackIsZero:
      case D.Palette:
        f = [0];
        break;
      case D.CMYK:
        f = [0, 1, 2, 3];
        break;
      case D.YCbCr:
      case D.CIELab:
        f = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const d = {
      window: c,
      interleave: !0,
      samples: f,
      pool: r,
      width: s,
      height: n,
      resampleMethod: a,
      signal: l
    }, { fileDirectory: u } = this, g = await this.readRasters(d), y = 2 ** this.fileDirectory.BitsPerSample[0];
    let p;
    switch (h) {
      case D.WhiteIsZero:
        p = Zt(g, y);
        break;
      case D.BlackIsZero:
        p = Jt(g, y);
        break;
      case D.Palette:
        p = Qt(g, u.ColorMap);
        break;
      case D.CMYK:
        p = er(g);
        break;
      case D.YCbCr:
        p = tr(g);
        break;
      case D.CIELab:
        p = nr(g);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const x = new Uint8Array(p.length / 3), m = new Uint8Array(p.length / 3), b = new Uint8Array(p.length / 3);
      for (let I = 0, S = 0; I < p.length; I += 3, ++S)
        x[S] = p[I], m[S] = p[I + 1], b[S] = p[I + 2];
      p = [x, m, b];
    }
    return p.width = g.width, p.height = g.height, p;
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
    let s = Yt(r, "Item");
    e === null ? s = s.filter((n) => oe(n, "sample") === void 0) : s = s.filter((n) => Number(oe(n, "sample")) === e);
    for (let n = 0; n < s.length; ++n) {
      const a = s[n];
      t[oe(a, "name")] = a.inner;
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
      const [s, n, a] = e.getResolution();
      return [
        s * e.getWidth() / this.getWidth(),
        n * e.getHeight() / this.getHeight(),
        a * e.getWidth() / this.getWidth()
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
      const [s, n, a, o, l, c, h, f] = this.fileDirectory.ModelTransformation, u = [
        [0, 0],
        [0, t],
        [r, 0],
        [r, t]
      ].map(([p, x]) => [
        o + s * p + n * x,
        f + l * p + c * x
      ]), g = u.map((p) => p[0]), y = u.map((p) => p[1]);
      return [
        Math.min(...g),
        Math.min(...y),
        Math.max(...g),
        Math.max(...y)
      ];
    } else {
      const s = this.getOrigin(), n = this.getResolution(), a = s[0], o = s[1], l = a + n[0] * r, c = o + n[1] * t;
      return [
        Math.min(a, l),
        Math.min(o, c),
        Math.max(a, l),
        Math.max(o, c)
      ];
    }
  }
}
class yr {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const r = this.getUint32(e, t), s = this.getUint32(e + 4, t);
    let n;
    if (t) {
      if (n = r + 2 ** 32 * s, !Number.isSafeInteger(n))
        throw new Error(
          `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return n;
    }
    if (n = 2 ** 32 * r + s, !Number.isSafeInteger(n))
      throw new Error(
        `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return n;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let r = 0;
    const s = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let n = !0;
    for (let a = 0; a < 8; a++) {
      let o = this._dataView.getUint8(e + (t ? a : 7 - a));
      s && (n ? o !== 0 && (o = ~(o - 1) & 255, n = !1) : o = ~o & 255), r += o * 256 ** a;
    }
    return s && (r = -r), r;
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
    return Xe(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class mr {
  constructor(e, t, r, s) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = r, this._bigTiff = s;
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
    let s;
    if (this._littleEndian) {
      if (s = t + 2 ** 32 * r, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * t + r, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const r = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let n = 0; n < 8; n++) {
      let a = this._dataView.getUint8(
        e + (this._littleEndian ? n : 7 - n)
      );
      r && (s ? a !== 0 && (a = ~(a - 1) & 255, s = !1) : a = ~a & 255), t += a * 256 ** n;
    }
    return r && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const wr = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class xr {
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
  constructor(e = wr, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((r) => {
      import("./decoder-b0JuKe3x.js").then((s) => {
        r(s.create);
      });
    }), this._awaitingDecoder.then((r) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let s = 0; s < e; s++)
        this.workers.push({ worker: r(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? st(e).then((r) => r.decode(e, t)) : new Promise((r) => {
      const s = this.workers.find((o) => o.idle) || this.workers[Math.floor(Math.random() * this.size)];
      s.idle = !1;
      const n = this.messageId++, a = (o) => {
        o.data.id === n && (s.idle = !0, r(o.data.decoded), s.worker.removeEventListener("message", a));
      };
      s.worker.addEventListener("message", a), s.worker.postMessage({ fileDirectory: e, buffer: t, id: n }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const Be = `\r
\r
`;
function it(i) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(i);
  const e = {};
  for (const [t, r] of i)
    e[t.toLowerCase()] = r;
  return e;
}
function br(i) {
  const e = i.split(`\r
`).map((t) => {
    const r = t.split(":").map((s) => s.trim());
    return r[0] = r[0].toLowerCase(), r;
  });
  return it(e);
}
function Ir(i) {
  const [e, ...t] = i.split(";").map((s) => s.trim()), r = t.map((s) => s.split("="));
  return { type: e, params: it(r) };
}
function ue(i) {
  let e, t, r;
  return i && ([, e, t, r] = i.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), r = parseInt(r, 10)), { start: e, end: t, total: r };
}
function Sr(i, e) {
  let t = null;
  const r = new TextDecoder("ascii"), s = [], n = `--${e}`, a = `${n}--`;
  for (let o = 0; o < 10; ++o)
    r.decode(
      new Uint8Array(i, o, n.length)
    ) === n && (t = o);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < i.byteLength; ) {
    const o = r.decode(
      new Uint8Array(
        i,
        t,
        Math.min(n.length + 1024, i.byteLength - t)
      )
    );
    if (o.length === 0 || o.startsWith(a))
      break;
    if (!o.startsWith(n))
      throw new Error("Part does not start with boundary");
    const l = o.substr(n.length + 2);
    if (l.length === 0)
      break;
    const c = l.indexOf(Be), h = br(l.substr(0, c)), { start: f, end: d, total: u } = ue(h["content-range"]), g = t + n.length + c + Be.length, y = parseInt(d, 10) + 1 - parseInt(f, 10);
    s.push({
      headers: h,
      data: i.slice(g, g + y),
      offset: f,
      length: y,
      fileSize: u
    }), t = g + y + 4;
  }
  return s;
}
class De {
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
class Tr extends Map {
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
    const s = typeof r == "number" && r !== Number.POSITIVE_INFINITY ? Date.now() + r : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: s
    }) : this._set(e, { value: t, expiry: s }), this;
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
      const r = e[t], [s, n] = r;
      this._deleteIfExpired(s, n) === !1 && (yield [s, n.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const r = e[t], [s, n] = r;
      this.cache.has(s) || this._deleteIfExpired(s, n) === !1 && (yield [s, n.value]);
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
    for (const [r, s] of this.entriesAscending())
      e.call(t, s, r, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
async function Ar(i) {
  return new Promise((e) => setTimeout(e, i));
}
function Dr(i, e) {
  const t = Array.isArray(i) ? i : Array.from(i), r = Array.isArray(e) ? e : Array.from(e);
  return t.map((s, n) => [s, r[n]]);
}
class K extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, K), this.name = "AbortError";
  }
}
class Cr extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Er = Cr;
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
class Pr extends De {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: r = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Tr({
      maxSize: r,
      onEviction: (s, n) => {
        this.evictedBlocks.set(s, n);
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
    const r = [], s = [], n = [];
    this.evictedBlocks.clear();
    for (const { offset: d, length: u } of e) {
      let g = d + u;
      const { fileSize: y } = this;
      y !== null && (g = Math.min(g, y));
      const p = Math.floor(d / this.blockSize) * this.blockSize;
      for (let x = p; x < g; x += this.blockSize) {
        const m = Math.floor(x / this.blockSize);
        !this.blockCache.has(m) && !this.blockRequests.has(m) && (this.blockIdsToFetch.add(m), s.push(m)), this.blockRequests.has(m) && r.push(this.blockRequests.get(m)), n.push(m);
      }
    }
    await Ar(), this.fetchBlocks(t);
    const a = [];
    for (const d of s)
      this.blockRequests.has(d) && a.push(this.blockRequests.get(d));
    await Promise.allSettled(r), await Promise.allSettled(a);
    const o = [], l = n.filter((d) => this.abortedBlockIds.has(d) || !this.blockCache.has(d));
    if (l.forEach((d) => this.blockIdsToFetch.add(d)), l.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const d of l) {
        const u = this.blockRequests.get(d);
        if (!u)
          throw new Error(`Block ${d} is not in the block requests`);
        o.push(u);
      }
      await Promise.allSettled(o);
    }
    if (t && t.aborted)
      throw new K("Request was aborted");
    const c = n.map((d) => this.blockCache.get(d) || this.evictedBlocks.get(d)), h = c.filter((d) => !d);
    if (h.length)
      throw new Er(h, "Request failed");
    const f = new Map(Dr(n, c));
    return this.readSliceData(e, f);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), r = this.source.fetch(t, e);
      for (let s = 0; s < t.length; ++s) {
        const n = t[s];
        for (const a of n.blockIds)
          this.blockRequests.set(a, (async () => {
            try {
              const o = (await r)[s], l = a * this.blockSize, c = l - o.offset, h = Math.min(c + this.blockSize, o.data.byteLength), f = o.data.slice(c, h), d = new Fr(
                l,
                f.byteLength,
                f,
                a
              );
              this.blockCache.set(a, d), this.abortedBlockIds.delete(a);
            } catch (o) {
              if (o.name === "AbortError")
                o.signal = e, this.blockCache.delete(a), this.abortedBlockIds.add(a);
              else
                throw o;
            } finally {
              this.blockRequests.delete(a);
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
    const t = Array.from(e).sort((a, o) => a - o);
    if (t.length === 0)
      return [];
    let r = [], s = null;
    const n = [];
    for (const a of t)
      s === null || s + 1 === a ? (r.push(a), s = a) : (n.push(new Oe(
        r[0] * this.blockSize,
        r.length * this.blockSize,
        r
      )), r = [a], s = a);
    return n.push(new Oe(
      r[0] * this.blockSize,
      r.length * this.blockSize,
      r
    )), n;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((r) => {
      let s = r.offset + r.length;
      this.fileSize !== null && (s = Math.min(this.fileSize, s));
      const n = Math.floor(r.offset / this.blockSize), a = Math.floor(s / this.blockSize), o = new ArrayBuffer(r.length), l = new Uint8Array(o);
      for (let c = n; c <= a; ++c) {
        const h = t.get(c), f = h.offset - r.offset, d = h.top - s;
        let u = 0, g = 0, y;
        f < 0 ? u = -f : f > 0 && (g = f), d < 0 ? y = h.length - u : y = s - h.offset - u;
        const p = new Uint8Array(h.data, u, y);
        l.set(p, g);
      }
      return o;
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
class kr extends Ce {
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
class Rr extends Ee {
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
    return new kr(r);
  }
}
class Mr extends Ce {
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
class Br extends Ee {
  constructRequest(e, t) {
    return new Promise((r, s) => {
      const n = new XMLHttpRequest();
      n.open("GET", this.url), n.responseType = "arraybuffer";
      for (const [a, o] of Object.entries(e))
        n.setRequestHeader(a, o);
      n.onload = () => {
        const a = n.response;
        r(new Mr(n, a));
      }, n.onerror = s, n.onabort = () => s(new K("Request aborted")), n.send(), t && (t.aborted && n.abort(), t.addEventListener("abort", () => n.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const ce = {};
class Or extends Ce {
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
class Gr extends Ee {
  constructor(e) {
    super(e), this.parsedUrl = ce.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", ce);
  }
  constructRequest(e, t) {
    return new Promise((r, s) => {
      const n = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (a) => {
          const o = new Promise((l) => {
            const c = [];
            a.on("data", (h) => {
              c.push(h);
            }), a.on("end", () => {
              const h = Buffer.concat(c).buffer;
              l(h);
            }), a.on("error", s);
          });
          r(new Or(a, o));
        }
      );
      n.on("error", s), t && (t.aborted && n.destroy(new K("Request aborted")), t.addEventListener("abort", () => n.destroy(new K("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Fe extends De {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, r, s) {
    super(), this.client = e, this.headers = t, this.maxRanges = r, this.allowFullFile = s, this._fileSize = null;
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
        Range: `bytes=${e.map(({ offset: s, length: n }) => `${s}-${s + n}`).join(",")}`
      },
      signal: t
    });
    if (r.ok)
      if (r.status === 206) {
        const { type: s, params: n } = Ir(r.getHeader("content-type"));
        if (s === "multipart/byteranges") {
          const f = Sr(await r.getData(), n.boundary);
          return this._fileSize = f[0].fileSize || null, f;
        }
        const a = await r.getData(), { start: o, end: l, total: c } = ue(r.getHeader("content-range"));
        this._fileSize = c || null;
        const h = [{
          data: a,
          offset: o,
          length: l - o
        }];
        if (e.length > 1) {
          const f = await Promise.all(e.slice(1).map((d) => this.fetchSlice(d, t)));
          return h.concat(f);
        }
        return h;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const s = await r.getData();
        return this._fileSize = s.byteLength, [{
          data: s,
          offset: 0,
          length: s.byteLength
        }];
      }
    else
      throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: r, length: s } = e, n = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${r}-${r + s}`
      },
      signal: t
    });
    if (n.ok)
      if (n.status === 206) {
        const a = await n.getData(), { total: o } = ue(n.getHeader("content-range"));
        return this._fileSize = o || null, {
          data: a,
          offset: r,
          length: s
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const a = await n.getData();
        return this._fileSize = a.byteLength, {
          data: a,
          offset: 0,
          length: a.byteLength
        };
      }
    else
      throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function Pe(i, { blockSize: e, cacheSize: t }) {
  return e === null ? i : new Pr(i, { blockSize: e, cacheSize: t });
}
function vr(i, { headers: e = {}, credentials: t, maxRanges: r = 0, allowFullFile: s = !1, ...n } = {}) {
  const a = new Rr(i, t), o = new Fe(a, e, r, s);
  return Pe(o, n);
}
function _r(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const n = new Br(i), a = new Fe(n, e, t, r);
  return Pe(a, s);
}
function Ur(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const n = new Gr(i), a = new Fe(n, e, t, r);
  return Pe(a, s);
}
function Lr(i, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? vr(i, t) : typeof XMLHttpRequest < "u" ? _r(i, t) : Ur(i, t);
}
class jr extends De {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((r, s) => {
      const n = this.file.slice(e.offset, e.offset + e.length), a = new FileReader();
      a.onload = (o) => r(o.target.result), a.onerror = s, a.onabort = s, a.readAsArrayBuffer(n), t && t.addEventListener("abort", () => a.abort());
    });
  }
}
function Nr(i) {
  return new jr(i);
}
function de(i) {
  switch (i) {
    case w.BYTE:
    case w.ASCII:
    case w.SBYTE:
    case w.UNDEFINED:
      return 1;
    case w.SHORT:
    case w.SSHORT:
      return 2;
    case w.LONG:
    case w.SLONG:
    case w.FLOAT:
    case w.IFD:
      return 4;
    case w.RATIONAL:
    case w.SRATIONAL:
    case w.DOUBLE:
    case w.LONG8:
    case w.SLONG8:
    case w.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${i}`);
  }
}
function zr(i) {
  const e = i.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let r = 4; r <= e[3] * 4; r += 4) {
    const s = Wt[e[r]], n = e[r + 1] ? W[e[r + 1]] : null, a = e[r + 2], o = e[r + 3];
    let l = null;
    if (!n)
      l = o;
    else {
      if (l = i[n], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${s}'.`);
      typeof l == "string" ? l = l.substring(o, o + a - 1) : l.subarray && (l = l.subarray(o, o + a), a === 1 && (l = l[0]));
    }
    t[s] = l;
  }
  return t;
}
function j(i, e, t, r) {
  let s = null, n = null;
  const a = de(e);
  switch (e) {
    case w.BYTE:
    case w.ASCII:
    case w.UNDEFINED:
      s = new Uint8Array(t), n = i.readUint8;
      break;
    case w.SBYTE:
      s = new Int8Array(t), n = i.readInt8;
      break;
    case w.SHORT:
      s = new Uint16Array(t), n = i.readUint16;
      break;
    case w.SSHORT:
      s = new Int16Array(t), n = i.readInt16;
      break;
    case w.LONG:
    case w.IFD:
      s = new Uint32Array(t), n = i.readUint32;
      break;
    case w.SLONG:
      s = new Int32Array(t), n = i.readInt32;
      break;
    case w.LONG8:
    case w.IFD8:
      s = new Array(t), n = i.readUint64;
      break;
    case w.SLONG8:
      s = new Array(t), n = i.readInt64;
      break;
    case w.RATIONAL:
      s = new Uint32Array(t * 2), n = i.readUint32;
      break;
    case w.SRATIONAL:
      s = new Int32Array(t * 2), n = i.readInt32;
      break;
    case w.FLOAT:
      s = new Float32Array(t), n = i.readFloat32;
      break;
    case w.DOUBLE:
      s = new Float64Array(t), n = i.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === w.RATIONAL || e === w.SRATIONAL)
    for (let o = 0; o < t; o += 2)
      s[o] = n.call(
        i,
        r + o * a
      ), s[o + 1] = n.call(
        i,
        r + (o * a + 4)
      );
  else
    for (let o = 0; o < t; ++o)
      s[o] = n.call(
        i,
        r + o * a
      );
  return e === w.ASCII ? new TextDecoder("utf-8").decode(s) : s;
}
class Kr {
  constructor(e, t, r) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = r;
  }
}
class re extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class Vr {
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
    const { window: t, width: r, height: s } = e;
    let { resX: n, resY: a, bbox: o } = e;
    const l = await this.getImage();
    let c = l;
    const h = await this.getImageCount(), f = l.getBoundingBox();
    if (t && o)
      throw new Error('Both "bbox" and "window" passed.');
    if (r || s) {
      if (t) {
        const [g, y] = l.getOrigin(), [p, x] = l.getResolution();
        o = [
          g + t[0] * p,
          y + t[1] * x,
          g + t[2] * p,
          y + t[3] * x
        ];
      }
      const u = o || f;
      if (r) {
        if (n)
          throw new Error("Both width and resX passed");
        n = (u[2] - u[0]) / r;
      }
      if (s) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (u[3] - u[1]) / s;
      }
    }
    if (n || a) {
      const u = [];
      for (let g = 0; g < h; ++g) {
        const y = await this.getImage(g), { SubfileType: p, NewSubfileType: x } = y.fileDirectory;
        (g === 0 || p === 2 || x & 1) && u.push(y);
      }
      u.sort((g, y) => g.getWidth() - y.getWidth());
      for (let g = 0; g < u.length; ++g) {
        const y = u[g], p = (f[2] - f[0]) / y.getWidth(), x = (f[3] - f[1]) / y.getHeight();
        if (c = y, n && n > p || a && a > x)
          break;
      }
    }
    let d = t;
    if (o) {
      const [u, g] = l.getOrigin(), [y, p] = c.getResolution(l);
      d = [
        Math.round((o[0] - u) / y),
        Math.round((o[1] - g) / p),
        Math.round((o[2] - u) / y),
        Math.round((o[3] - g) / p)
      ], d = [
        Math.min(d[0], d[2]),
        Math.min(d[1], d[3]),
        Math.max(d[0], d[2]),
        Math.max(d[1], d[3])
      ];
    }
    return c.readRasters({ ...e, window: d });
  }
}
class ie extends Vr {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, r, s, n = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = r, this.firstIFDOffset = s, this.cache = n.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const r = this.bigTiff ? 4048 : 1024;
    return new mr(
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
    let s = await this.getSlice(e);
    const n = this.bigTiff ? s.readUint64(e) : s.readUint16(e), a = n * t + (this.bigTiff ? 16 : 6);
    s.covers(e, a) || (s = await this.getSlice(e, a));
    const o = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let f = 0; f < n; l += t, ++f) {
      const d = s.readUint16(l), u = s.readUint16(l + 2), g = this.bigTiff ? s.readUint64(l + 4) : s.readUint32(l + 4);
      let y, p;
      const x = de(u), m = l + (this.bigTiff ? 12 : 8);
      if (x * g <= (this.bigTiff ? 8 : 4))
        y = j(s, u, g, m);
      else {
        const b = s.readOffset(m), I = de(u) * g;
        if (s.covers(b, I))
          y = j(s, u, g, b);
        else {
          const S = await this.getSlice(b, I);
          y = j(S, u, g, b);
        }
      }
      g === 1 && Xt.indexOf(d) === -1 && !(u === w.RATIONAL || u === w.SRATIONAL) ? p = y[0] : p = y, o[W[d]] = p;
    }
    const c = zr(o), h = s.readOffset(
      e + r + t * n
    );
    return new Kr(
      o,
      c,
      h
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
    return new pr(
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
    let s = await this.getSlice(e, r);
    if (t === j(s, w.ASCII, t.length, e)) {
      const a = j(s, w.ASCII, r, e).split(`
`)[0], o = Number(a.split("=")[1].split(" ")[0]) + a.length;
      o > r && (s = await this.getSlice(e, o));
      const l = j(s, w.ASCII, o, e);
      this.ghostValues = {}, l.split(`
`).filter((c) => c.length > 0).map((c) => c.split("=")).forEach(([c, h]) => {
        this.ghostValues[c] = h;
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
    const s = (await e.fetch([{ offset: 0, length: 1024 }], r))[0], n = new yr(s), a = n.getUint16(0, 0);
    let o;
    if (a === 18761)
      o = !0;
    else if (a === 19789)
      o = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = n.getUint16(2, o);
    let c;
    if (l === 42)
      c = !1;
    else if (l === 43) {
      if (c = !0, n.getUint16(4, o) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = c ? n.getUint64(8, o) : n.getUint32(4, o);
    return new ie(e, o, c, h, t);
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
async function Ge(i, e = {}, t) {
  return ie.fromSource(Lr(i, e), t);
}
async function ve(i, e) {
  return ie.fromSource(Nr(i), e);
}
class he {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const qr = (i) => {
  var t, r, s;
  const e = /* @__PURE__ */ new Map();
  for (const n of i) {
    const a = new DOMParser().parseFromString(
      (t = n.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), o = (r = a == null ? void 0 : a.querySelector("Name")) == null ? void 0 : r.textContent, l = (s = a == null ? void 0 : a.querySelector("Color")) == null ? void 0 : s.textContent;
    if (!o)
      continue;
    const c = l ? l.split(",").map((h) => parseInt(h)) : [255, 255, 255];
    e.has(o) || e.set(o, {
      name: o,
      color: c,
      images: []
    }), e.get(o).images.push(n);
  }
  return e;
};
class L {
  static RGBAfromYCbCr(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, s;
    for (r = 0, s = 0; r < e.length; r += 3, s += 4) {
      const n = e[r], a = e[r + 1], o = e[r + 2];
      t[s] = n + 1.402 * (o - 128), t[s + 1] = n - 0.34414 * (a - 128) - 0.71414 * (o - 128), t[s + 2] = n + 1.772 * (a - 128), t[s + 3] = 255;
    }
    return t;
  }
  static RGBAfromRGB(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, s;
    for (r = 0, s = 0; r < e.length; r += 3, s += 4)
      t[s] = e[r], t[s + 1] = e[r + 1], t[s + 2] = e[r + 2], t[s + 3] = 255;
    return t;
  }
  static RGBAfromWhiteIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let s;
    for (let n = 0, a = 0; n < e.length; ++n, a += 4)
      s = 256 - e[n] / t * 256, r[a] = s, r[a + 1] = s, r[a + 2] = s, r[a + 3] = 255;
    return r;
  }
  static RGBAfromBlackIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let s;
    for (let n = 0, a = 0; n < e.length; ++n, a += 4)
      s = e[n] / t * 256, r[a] = s, r[a + 1] = s, r[a + 2] = s, r[a + 3] = 255;
    return r;
  }
  static RGBAfromPalette(e, t) {
    const r = new Uint8ClampedArray(e.length * 4), s = t.length / 3, n = t.length / 3 * 2;
    for (let a = 0, o = 0; a < e.length; ++a, o += 4) {
      const l = e[a];
      r[o] = t[l] / 65536 * 256, r[o + 1] = t[l + s] / 65536 * 256, r[o + 2] = t[l + n] / 65536 * 256, r[o + 3] = 255;
    }
    return r;
  }
  static RGBAfromCMYK(e) {
    const t = new Uint8ClampedArray(e.length);
    for (let r = 0, s = 0; r < e.length; r += 4, s += 4) {
      const n = e[r], a = e[r + 1], o = e[r + 2], l = e[r + 3];
      t[s] = 255 * ((255 - n) / 256) * ((255 - l) / 256), t[s + 1] = 255 * ((255 - a) / 256) * ((255 - l) / 256), t[s + 2] = 255 * ((255 - o) / 256) * ((255 - l) / 256), t[s + 3] = 255;
    }
    return t;
  }
  static RGBAfromCIELab(e) {
    const n = new Uint8ClampedArray(e.length * 4 / 3);
    for (let a = 0, o = 0; a < e.length; a += 3, o += 4) {
      const l = e[a + 0], c = e[a + 1] << 24 >> 24, h = e[a + 2] << 24 >> 24;
      let f = (l + 16) / 116, d = c / 500 + f, u = f - h / 200, g, y, p;
      d = 0.95047 * (d * d * d > 8856e-6 ? d * d * d : (d - 16 / 116) / 7.787), f = 1 * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), u = 1.08883 * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), g = d * 3.2406 + f * -1.5372 + u * -0.4986, y = d * -0.9689 + f * 1.8758 + u * 0.0415, p = d * 0.0557 + f * -0.204 + u * 1.057, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, y = y > 31308e-7 ? 1.055 * y ** (1 / 2.4) - 0.055 : 12.92 * y, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, n[o] = Math.max(0, Math.min(1, g)) * 255, n[o + 1] = Math.max(0, Math.min(1, y)) * 255, n[o + 2] = Math.max(0, Math.min(1, p)) * 255, n[o + 3] = 255;
    }
    return n;
  }
}
function Hr(i) {
  if (!i.version || i.version.major < 2 || i.version.major == 2 && i.version.minor < 3) {
    console.error("This version of OpenSeadragon is too old to support this monkey patch");
    return;
  }
  if (i.ImageJob)
    return;
  function e(r) {
    i.extend(
      !0,
      this,
      {
        timeout: i.DEFAULT_SETTINGS.timeout,
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
      var r = this, s = this.abort;
      this.image = new Image(), this.image.onload = function() {
        r.finish(!0);
      }, this.image.onabort = this.image.onerror = function() {
        r.errorMsg = "Image load aborted", r.finish(!1);
      }, this.jobId = window.setTimeout(function() {
        r.errorMsg = "Image load exceeded timeout (" + r.timeout + " ms)", r.finish(!1);
      }, this.timeout), this.loadWithAjax ? (this.request = i.makeAjaxRequest({
        url: this.src,
        withCredentials: this.ajaxWithCredentials,
        headers: this.ajaxHeaders,
        responseType: "arraybuffer",
        postData: this.postData,
        success: function(n) {
          var a;
          try {
            a = new window.Blob([n.response]);
          } catch (h) {
            var o = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (h.name === "TypeError" && o) {
              var l = new o();
              l.append(n.response), a = l.getBlob();
            }
          }
          a.size === 0 && (r.errorMsg = "Empty image response.", r.finish(!1));
          var c = (window.URL || window.webkitURL).createObjectURL(a);
          r.image.src = c;
        },
        error: function(n) {
          r.errorMsg = "Image load aborted - XHR error: Ajax returned " + n.status, r.finish(!1);
        }
      }), this.abort = function() {
        r.request.abort(), typeof s == "function" && s();
      }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.src.fetch ? this.src.fetch().then((n) => this.image.src = n) : this.image.src = this.src);
    },
    finish: function(r) {
      this.image.onload = this.image.onerror = this.image.onabort = null, r || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
    }
  };
  function t(r, s, n) {
    var a;
    r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (a = r.jobQueue.shift(), a.start(), r.jobsInProgress++), n(s.image, s.errorMsg, s.request);
  }
  i.ImageLoader.prototype.addJob = function(r) {
    var s = this, n = function(l) {
      t(s, l, r.callback);
    }, a = {
      src: r.src,
      loadWithAjax: r.loadWithAjax,
      ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null,
      crossOriginPolicy: r.crossOriginPolicy,
      ajaxWithCredentials: r.ajaxWithCredentials,
      postData: r.postData,
      callback: n,
      abort: r.abort,
      timeout: this.timeout
    }, o = new e(a);
    !this.jobLimit || this.jobsInProgress < this.jobLimit ? (o.start(), this.jobsInProgress++) : this.jobQueue.push(o);
  }, i.Tile.prototype._hasTransparencyChannel = function() {
    return !1;
  };
}
const P = class P {
  constructor(e, t = { logLatency: !1 }) {
    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    F(this, "getTileWidth", (e) => {
      if (this.levels.length > e)
        return this.levels[e].tileWidth;
    });
    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    F(this, "getTileHeight", (e) => {
      if (this.levels.length > e)
        return this.levels[e].tileHeight;
    });
    /**
     * @function
     * @param {Number} level
     */
    F(this, "getLevelScale", (e) => {
      let t = NaN;
      return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (t = this.levels[e].width / this.levels[this.maxLevel].width), t;
    });
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    F(this, "getTileHashKey", (e, t, r) => {
      var s;
      return `${((s = this == null ? void 0 : this.channel) == null ? void 0 : s.name) ?? ""}_${e}_${t}_${r}`;
    });
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    F(this, "getTileUrl", (e, t, r) => {
      let s = this.levels[e], n = new String(`${e}/${t}_${r}`);
      return n.fetch = /* @__PURE__ */ ((a, o, l, c, h) => () => this.regionToDataUrl.call(a, o, l, c, h))(this, s, t, r, n), n;
    });
    F(this, "downloadTileStart", (e) => {
      e.src.fetch().then((t) => {
        let r = new Image(), s = "" + e.src;
        r.onload = function() {
          e.finish(r);
        }, r.onerror = r.onabort = function() {
          e.finish(null, s, "Request aborted");
        }, r.src = t;
      });
    });
    F(this, "downloadTileAbort", (e) => {
      e.src.abortController && e.src.abortController.abort();
    });
    F(this, "setupComplete", () => {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    });
    F(this, "setupLevels", () => {
      if (this._ready)
        return;
      let e = this.GeoTIFFImages.sort((o, l) => l.getWidth() - o.getWidth()), t = this._tileSize, r = this._tileSize, s = e[0].getWidth();
      this.width = s;
      let n = e[0].getHeight();
      if (this.height = n, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new P._OpenSeadragon.Point(this.width, this.height), e.reduce(
        (o, l) => (o.width !== -1 && (o.valid = o.valid && l.getWidth() < o.width), o.width = l.getWidth(), o),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = e.map((o) => {
          let l = o.getWidth(), c = o.getHeight();
          return {
            width: l,
            height: c,
            tileWidth: this.options.tileWidth || o.getTileWidth() || t,
            tileHeight: this.options.tileHeight || o.getTileHeight() || r,
            image: o,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let o = Math.ceil(
          Math.log2(Math.max(s / t, n / r))
        ), l = [...Array(o).keys()].filter((c) => c % 2 == 0);
        this.levels = l.map((c) => {
          let h = Math.pow(2, c);
          const f = e.filter((u) => {
            const g = Math.pow(2, c - 1);
            return g >= 0 ? u.getWidth() * g < s && u.getWidth() * h >= s : u.getWidth() * h >= s;
          });
          if (f.length === 0)
            return null;
          const d = f[0];
          return {
            width: s / h,
            height: n / h,
            tileWidth: this.options.tileWidth || d.getTileWidth() || t,
            tileHeight: this.options.tileHeight || d.getTileHeight() || r,
            image: d,
            scaleFactor: h * d.getWidth() / s
          };
        }).filter((c) => c !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((o, l) => o.width - l.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    });
    F(this, "regionToDataUrl", (e, t, r, s) => {
      var u, g, y, p, x;
      let n = this.options.logLatency && Date.now(), o = (s.abortController = new AbortController()).signal;
      const l = e.tileWidth, c = e.tileHeight, h = [t * l, r * c, (t + 1) * l, (r + 1) * c].map(
        (m) => m * e.scaleFactor
      ), f = e.image;
      if ((g = (u = f.fileDirectory) == null ? void 0 : u.Software) == null ? void 0 : g.startsWith("PerkinElmer-QPI")) {
        const m = new DOMParser().parseFromString(
          (y = f.fileDirectory) == null ? void 0 : y.ImageDescription,
          "text/xml"
        );
        (p = m.querySelector("Name")) == null || p.textContent;
        const b = (x = m.querySelector("Color")) == null ? void 0 : x.textContent, I = b ? b.split(",").map((S) => parseInt(S)) : [255, 255, 255];
        return e.image.readRGB({
          interleave: !0,
          window: h,
          pool: this._pool,
          width: e.tileWidth,
          height: e.tileHeight,
          signal: o
        }).then((S) => {
          let T = document.createElement("canvas");
          T.width = e.tileWidth, T.height = e.tileHeight;
          let C = T.getContext("2d"), A = new Uint8ClampedArray(4 * T.width * T.height), R = new Uint8ClampedArray(S), B, M;
          for (B = 0, M = 0; B < R.length; B += 3, M += 4)
            A[M] = R[B] * I[0] / 255, A[M + 1] = R[B + 1] * I[1] / 255, A[M + 2] = R[B + 2] * I[2] / 255, A[M + 3] = 255;
          const U = C.createImageData(T.width, T.height);
          U.data.set(A), C.putImageData(U, 0, 0);
          let Q = T.toDataURL("image/jpeg", 0.8);
          return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
            "Tile latency (ms):",
            Date.now() - n
          ), Q;
        });
      } else
        return e.image.getTileOrStrip(t, r, null, this._pool, o).then((m) => {
          let b = new Uint8ClampedArray(m.data), I = document.createElement("canvas");
          I.width = e.tileWidth, I.height = e.tileHeight;
          let S = I.getContext("2d"), T = e.image.fileDirectory.PhotometricInterpretation, C;
          if (b.length / (I.width * I.height) % 4 === 0)
            C = b;
          else
            switch (T) {
              case D.WhiteIsZero:
                C = L.RGBAfromWhiteIsZero(
                  b,
                  2 ** e.image.fileDirectory.BitsPerSample[0]
                );
                break;
              case D.BlackIsZero:
                C = L.RGBAfromBlackIsZero(
                  b,
                  2 ** e.image.fileDirectory.BitsPerSample[0]
                );
                break;
              case D.RGB:
                C = L.RGBAfromRGB(b);
                break;
              case D.Palette:
                C = L.RGBAfromPalette(b, 2 ** e.image.fileDirectory.colorMap);
                break;
              case D.CMYK:
                C = L.RGBAfromCMYK(b);
                break;
              case D.YCbCr:
                C = L.RGBAfromYCbCr(b);
                break;
              case D.CIELab:
                C = L.RGBAfromCIELab(b);
                break;
            }
          const A = S.createImageData(I.width, I.height);
          A.data.set(C), S.putImageData(A, 0, 0);
          let R = I.toDataURL("image/jpeg", 0.8);
          return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
            "Tile latency (ms):",
            Date.now() - n
          ), R;
        });
    });
    P._osdReady || P.applyOSDPatch(P._OpenSeadragon);
    let r = this;
    this.input = e, this.options = t, this.channel = (e == null ? void 0 : e.channel) ?? null, this._ready = !1, this._pool = P.sharedPool, this._tileSize = 256, e.GeoTIFF && e.GeoTIFFImages ? (this.promises = {
      GeoTIFF: Promise.resolve(e.GeoTIFF),
      GeoTIFFImages: Promise.resolve(e.GeoTIFFImages),
      ready: new he()
    }, this.GeoTIFF = e.GeoTIFF, this.imageCount = e.GeoTIFFImages.length, this.GeoTIFFImages = e.GeoTIFFImages, this.setupLevels()) : (this.promises = {
      GeoTIFF: e instanceof File ? ve(e) : Ge(e),
      GeoTIFFImages: new he(),
      ready: new he()
    }, this.promises.GeoTIFF.then((s) => (r.GeoTIFF = s, s.getImageCount())).then((s) => {
      r.imageCount = s;
      let n = [...Array(s).keys()].map((a) => r.GeoTIFF.getImage(a));
      return Promise.all(n);
    }).then((s) => {
      r.GeoTIFFImages = s, r.promises.GeoTIFFImages.resolve(s), this.setupLevels();
    }).catch((s) => {
      throw console.error("Re-throwing error with GeoTIFF:", s), s;
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
F(P, "sharedPool", new xr()), F(P, "_osdReady", !1), // Apply ImageJob patch to OpenSeadragon. Can be extended for modular patches.
F(P, "applyOSDPatch", (e) => {
  Hr(e), P._osdReady = !0;
}), F(P, "getAllTileSources", async (e, t) => {
  const r = e instanceof File ? e.name.split(".").pop() : e.split(".").pop();
  let s = e instanceof File ? ve(e) : Ge(e);
  return s.then((n) => (s = n, n.getImageCount())).then(
    (n) => Promise.all([...Array(n).keys()].map(async (a) => (await s).getImage(a)))
  ).then((n) => {
    n = n.filter(
      (c) => c.fileDirectory.photometricInterpretation !== D.TransparencyMask
    ), n.sort((c, h) => h.getWidth() - c.getWidth());
    const a = 0.015;
    return n.reduce((c, h) => {
      const f = h.getWidth() / h.getHeight(), d = c.filter((u) => Math.abs(1 - u.aspectRatio / f) < a);
      if (d.length === 0) {
        let u = {
          aspectRatio: f,
          images: [h]
        };
        c.push(u);
      } else
        d[0].images.push(h);
      return c;
    }, []).map((c) => c.images).map((c, h) => {
      if (h !== 0)
        return new P.GeoTIFFTileSource(
          {
            GeoTIFF: s,
            GeoTIFFImages: c
          },
          t
        );
      switch (r) {
        case "qptiff":
          const f = qr(c);
          return Array.from(f.values()).map((d, u) => new P(
            {
              GeoTIFF: s,
              GeoTIFFImages: d.images,
              channel: {
                name: d.name,
                color: d.color
              }
            },
            t
          ));
        default:
          return new P(
            {
              GeoTIFF: s,
              GeoTIFFImages: c
            },
            t
          );
      }
    });
  });
});
let N = P;
const Yr = (i) => {
  Object.assign(N.prototype, i.TileSource.prototype, N.prototype), i.GeoTIFFTileSource = N, Object.defineProperty(N, "_OpenSeadragon", {
    get: function() {
      return i;
    }
  });
};
(function(i, e) {
  typeof exports > "u" || typeof i.OpenSeadragon < "u" && e(i.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Yr);
export {
  N as G,
  ns as L,
  os as a,
  Yr as e,
  $e as g
};
//# sourceMappingURL=main-zse-_BS4.js.map
