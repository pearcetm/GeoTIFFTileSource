var gt = Object.defineProperty;
var pt = (i, e, t) => e in i ? gt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var E = (i, e, t) => (pt(i, typeof e != "symbol" ? e + "" : e, t), t);
function F(i) {
  return (e, ...t) => yt(i, e, t);
}
function K(i, e) {
  return F(
    Ue(
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
  getOwnPropertyDescriptor: Ue,
  getPrototypeOf: pe,
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
  create: ye,
  defineProperty: bt,
  freeze: ss,
  is
} = xt, It = Array, St = It.prototype, Le = St[J], Tt = F(Le), Ne = ArrayBuffer, At = Ne.prototype;
K(At, "byteLength");
const Oe = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Oe && K(Oe.prototype, "byteLength");
const je = pe(Uint8Array);
je.from;
const P = je.prototype;
P[J];
F(P.keys);
F(
  P.values
);
F(
  P.entries
);
F(P.set);
F(
  P.reverse
);
F(P.fill);
F(
  P.copyWithin
);
F(P.sort);
F(P.slice);
F(
  P.subarray
);
K(
  P,
  "buffer"
);
K(
  P,
  "byteOffset"
);
K(
  P,
  "length"
);
K(
  P,
  wt
);
const Dt = Uint8Array, ze = Uint16Array, me = Uint32Array, Ft = Float32Array, Z = pe([][J]()), Ke = F(Z.next), Ct = F(function* () {
}().next), Et = pe(Z), Pt = DataView.prototype, kt = F(
  Pt.getUint16
), we = WeakMap, Ve = we.prototype, qe = F(Ve.get), Rt = F(Ve.set), He = new we(), Ot = ye(null, {
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
function Mt(i) {
  if (i[J] === Le && Z.next === Ke)
    return i;
  const e = ye(Ot);
  return Rt(He, e, Tt(i)), e;
}
const Bt = new we(), Gt = ye(Et, {
  next: {
    value: function() {
      const e = qe(Bt, this);
      return Ct(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const i of mt(Z))
  i !== "next" && bt(Gt, i, Ue(Z, i));
const Ye = new Ne(4), vt = new Ft(Ye), _t = new me(Ye), B = new ze(512), G = new Dt(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  e < -27 ? (B[i] = 0, B[i | 256] = 32768, G[i] = 24, G[i | 256] = 24) : e < -14 ? (B[i] = 1024 >> -e - 14, B[i | 256] = 1024 >> -e - 14 | 32768, G[i] = -e - 1, G[i | 256] = -e - 1) : e <= 15 ? (B[i] = e + 15 << 10, B[i | 256] = e + 15 << 10 | 32768, G[i] = 13, G[i | 256] = 13) : e < 128 ? (B[i] = 31744, B[i | 256] = 64512, G[i] = 24, G[i | 256] = 24) : (B[i] = 31744, B[i | 256] = 64512, G[i] = 13, G[i | 256] = 13);
}
const xe = new me(2048);
for (let i = 1; i < 1024; ++i) {
  let e = i << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, xe[i] = e | t;
}
for (let i = 1024; i < 2048; ++i)
  xe[i] = 939524096 + (i - 1024 << 13);
const V = new me(64);
for (let i = 1; i < 31; ++i)
  V[i] = i << 23;
V[31] = 1199570944;
V[32] = 2147483648;
for (let i = 33; i < 63; ++i)
  V[i] = 2147483648 + (i - 32 << 23);
V[63] = 3347054592;
const Xe = new ze(64);
for (let i = 1; i < 64; ++i)
  i !== 32 && (Xe[i] = 1024);
function Ut(i) {
  const e = i >> 10;
  return _t[0] = xe[Xe[e] + (i & 1023)] + V[e], vt[0];
}
function $e(i, e, ...t) {
  return Ut(
    kt(i, e, ...Mt(t))
  );
}
function We(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var be = { exports: {} };
function Ze(i, e, t) {
  const r = t && t.debug || !1;
  r && console.log("[xml-utils] getting " + e + " in " + i);
  const s = typeof i == "object" ? i.outer : i, n = s.slice(0, s.indexOf(">") + 1), o = ['"', "'"];
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = e + "\\=" + l + "([^" + l + "]*)" + l;
    r && console.log("[xml-utils] pattern:", c);
    const f = new RegExp(c).exec(n);
    if (r && console.log("[xml-utils] match:", f), f)
      return f[1];
  }
}
be.exports = Ze;
be.exports.default = Ze;
var Lt = be.exports;
const oe = /* @__PURE__ */ We(Lt);
var Ie = { exports: {} }, Se = { exports: {} }, Te = { exports: {} };
function Je(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index : -1;
}
Te.exports = Je;
Te.exports.default = Je;
var Nt = Te.exports, Ae = { exports: {} };
function Qe(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index + s[0].length - 1 : -1;
}
Ae.exports = Qe;
Ae.exports.default = Qe;
var jt = Ae.exports, De = { exports: {} };
function et(i, e) {
  const t = new RegExp(e, "g"), r = i.match(t);
  return r ? r.length : 0;
}
De.exports = et;
De.exports.default = et;
var zt = De.exports;
const Kt = Nt, ae = jt, Me = zt;
function tt(i, e, t) {
  const r = t && t.debug || !1, s = !(t && typeof t.nested === !1), n = t && t.startIndex || 0;
  r && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const o = Kt(i, `<${e}[ 
>/]`, n);
  if (r && console.log("[xml-utils] start:", o), o === -1)
    return;
  const a = i.slice(o + e.length);
  let l = ae(a, "^[^<]*[ /]>", 0);
  const c = l !== -1 && a[l - 1] === "/";
  if (r && console.log("[xml-utils] selfClosing:", c), c === !1)
    if (s) {
      let u = 0, g = 1, y = 0;
      for (; (l = ae(a, "[ /]" + e + ">", u)) !== -1; ) {
        const p = a.substring(u, l + 1);
        if (g += Me(p, "<" + e + `[ 
	>]`), y += Me(p, "</" + e + ">"), y >= g)
          break;
        u = l;
      }
    } else
      l = ae(a, "[ /]" + e + ">", 0);
  const h = o + e.length + l + 1;
  if (r && console.log("[xml-utils] end:", h), h === -1)
    return;
  const f = i.slice(o, h);
  let d;
  return c ? d = null : d = f.slice(f.indexOf(">") + 1, f.lastIndexOf("<")), { inner: d, outer: f, start: o, end: h };
}
Se.exports = tt;
Se.exports.default = tt;
var Vt = Se.exports;
const qt = Vt;
function rt(i, e, t) {
  const r = [], s = t && t.debug || !1, n = t && typeof t.nested == "boolean" ? t.nested : !0;
  let o = t && t.startIndex || 0, a;
  for (; a = qt(i, e, { debug: s, startIndex: o }); )
    n ? o = a.start + 1 + e.length : o = a.end, r.push(a);
  return s && console.log("findTagsByName found", r.length, "tags"), r;
}
Ie.exports = rt;
Ie.exports.default = rt;
var Ht = Ie.exports;
const Yt = /* @__PURE__ */ We(Ht), W = {
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
  for (let o = 0, a = 0; o < i.length; ++o, a += 3)
    n = 256 - i[o] / e * 256, s[a] = n, s[a + 1] = n, s[a + 2] = n;
  return s;
}
function Jt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3);
  let n;
  for (let o = 0, a = 0; o < i.length; ++o, a += 3)
    n = i[o] / e * 256, s[a] = n, s[a + 1] = n, s[a + 2] = n;
  return s;
}
function Qt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3), n = e.length / 3, o = e.length / 3 * 2;
  for (let a = 0, l = 0; a < i.length; ++a, l += 3) {
    const c = i[a];
    s[l] = e[c] / 65536 * 256, s[l + 1] = e[c + n] / 65536 * 256, s[l + 2] = e[c + o] / 65536 * 256;
  }
  return s;
}
function er(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 4, n += 3) {
    const o = i[s], a = i[s + 1], l = i[s + 2], c = i[s + 3];
    r[n] = 255 * ((255 - o) / 256) * ((255 - c) / 256), r[n + 1] = 255 * ((255 - a) / 256) * ((255 - c) / 256), r[n + 2] = 255 * ((255 - l) / 256) * ((255 - c) / 256);
  }
  return r;
}
function tr(i) {
  const { width: e, height: t } = i, r = new Uint8ClampedArray(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 3, n += 3) {
    const o = i[s], a = i[s + 1], l = i[s + 2];
    r[n] = o + 1.402 * (l - 128), r[n + 1] = o - 0.34414 * (a - 128) - 0.71414 * (l - 128), r[n + 2] = o + 1.772 * (a - 128);
  }
  return r;
}
const rr = 0.95047, sr = 1, ir = 1.08883;
function nr(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, n = 0; s < i.length; s += 3, n += 3) {
    const o = i[s + 0], a = i[s + 1] << 24 >> 24, l = i[s + 2] << 24 >> 24;
    let c = (o + 16) / 116, h = a / 500 + c, f = c - l / 200, d, u, g;
    h = rr * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), c = sr * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), f = ir * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), d = h * 3.2406 + c * -1.5372 + f * -0.4986, u = h * -0.9689 + c * 1.8758 + f * 0.0415, g = h * 0.0557 + c * -0.204 + f * 1.057, d = d > 31308e-7 ? 1.055 * d ** (1 / 2.4) - 0.055 : 12.92 * d, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, r[n] = Math.max(0, Math.min(1, d)) * 255, r[n + 1] = Math.max(0, Math.min(1, u)) * 255, r[n + 2] = Math.max(0, Math.min(1, g)) * 255;
  }
  return r;
}
const st = /* @__PURE__ */ new Map();
function U(i, e) {
  Array.isArray(i) || (i = [i]), i.forEach((t) => st.set(t, e));
}
async function it(i) {
  const e = st.get(i.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${i.Compression}`);
  const t = await e();
  return new t(i);
}
U([void 0, 1], () => import("./raw-_eObXrMO.js").then((i) => i.default));
U(5, () => import("./lzw-5BnjP5Zu.js").then((i) => i.default));
U(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
U(7, () => import("./jpeg-cL5qbLGO.js").then((i) => i.default));
U([8, 32946], () => import("./deflate-vcCR2g03.js").then((i) => i.default));
U(32773, () => import("./packbits-QLsyzNt2.js").then((i) => i.default));
U(
  34887,
  () => import("./lerc-dfYUUsnZ.js").then(async (i) => (await i.zstd.init(), i)).then((i) => i.default)
);
U(50001, () => import("./webimage-Hf-HYtMO.js").then((i) => i.default));
function re(i, e, t, r = 1) {
  return new (Object.getPrototypeOf(i)).constructor(e * t * r);
}
function or(i, e, t, r, s) {
  const n = e / r, o = t / s;
  return i.map((a) => {
    const l = re(a, r, s);
    for (let c = 0; c < s; ++c) {
      const h = Math.min(Math.round(o * c), t - 1);
      for (let f = 0; f < r; ++f) {
        const d = Math.min(Math.round(n * f), e - 1), u = a[h * e + d];
        l[c * r + f] = u;
      }
    }
    return l;
  });
}
function j(i, e, t) {
  return (1 - t) * i + t * e;
}
function ar(i, e, t, r, s) {
  const n = e / r, o = t / s;
  return i.map((a) => {
    const l = re(a, r, s);
    for (let c = 0; c < s; ++c) {
      const h = o * c, f = Math.floor(h), d = Math.min(Math.ceil(h), t - 1);
      for (let u = 0; u < r; ++u) {
        const g = n * u, y = g % 1, p = Math.floor(g), x = Math.min(Math.ceil(g), e - 1), m = a[f * e + p], S = a[f * e + x], b = a[d * e + p], I = a[d * e + x], A = j(
          j(m, S, y),
          j(b, I, y),
          h % 1
        );
        l[c * r + u] = A;
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
  const o = e / r, a = t / s, l = re(i, r, s, n);
  for (let c = 0; c < s; ++c) {
    const h = Math.min(Math.round(a * c), t - 1);
    for (let f = 0; f < r; ++f) {
      const d = Math.min(Math.round(o * f), e - 1);
      for (let u = 0; u < n; ++u) {
        const g = i[h * e * n + d * n + u];
        l[c * r * n + f * n + u] = g;
      }
    }
  }
  return l;
}
function hr(i, e, t, r, s, n) {
  const o = e / r, a = t / s, l = re(i, r, s, n);
  for (let c = 0; c < s; ++c) {
    const h = a * c, f = Math.floor(h), d = Math.min(Math.ceil(h), t - 1);
    for (let u = 0; u < r; ++u) {
      const g = o * u, y = g % 1, p = Math.floor(g), x = Math.min(Math.ceil(g), e - 1);
      for (let m = 0; m < n; ++m) {
        const S = i[f * e * n + p * n + m], b = i[f * e * n + x * n + m], I = i[d * e * n + p * n + m], A = i[d * e * n + x * n + m], C = j(
          j(S, b, y),
          j(I, A, y),
          h % 1
        );
        l[c * r * n + u * n + m] = C;
      }
    }
  }
  return l;
}
function fr(i, e, t, r, s, n, o = "nearest") {
  switch (o.toLowerCase()) {
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
      throw new Error(`Unsupported resampling method: '${o}'`);
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
function gr(i, e, t, r, s, n, o) {
  const a = new DataView(i), l = t === 2 ? o * n : o * n * r, c = t === 2 ? 1 : r, h = fe(e, s, l), f = parseInt("1".repeat(s), 2);
  if (e === 1) {
    let d;
    t === 1 ? d = r * s : d = s;
    let u = n * d;
    u & 7 && (u = u + 7 & -8);
    for (let g = 0; g < o; ++g) {
      const y = g * u;
      for (let p = 0; p < n; ++p) {
        const x = y + p * c * s;
        for (let m = 0; m < c; ++m) {
          const S = x + m * s, b = (g * n + p) * c + m, I = Math.floor(S / 8), A = S % 8;
          if (A + s <= 8)
            h[b] = a.getUint8(I) >> 8 - s - A & f;
          else if (A + s <= 16)
            h[b] = a.getUint16(I) >> 16 - s - A & f;
          else if (A + s <= 24) {
            const C = a.getUint16(I) << 8 | a.getUint8(I + 2);
            h[b] = C >> 24 - s - A & f;
          } else
            h[b] = a.getUint32(I) >> 32 - s - A & f;
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
  constructor(e, t, r, s, n, o) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = r, this.littleEndian = s, this.tiles = n ? {} : null, this.isTiled = !e.StripOffsets;
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
            return function(s, n) {
              return $e(this, s, n);
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
    const o = Math.ceil(this.getWidth() / this.getTileWidth()), a = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: c } = this;
    this.planarConfiguration === 1 ? l = t * o + e : this.planarConfiguration === 2 && (l = r * o * a + t * o + e);
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
  async _readRaster(e, t, r, s, n, o, a, l, c) {
    const h = this.getTileWidth(), f = this.getTileHeight(), d = this.getWidth(), u = this.getHeight(), g = Math.max(Math.floor(e[0] / h), 0), y = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(d / h)
    ), p = Math.max(Math.floor(e[1] / f), 0), x = Math.min(
      Math.ceil(e[3] / f),
      Math.ceil(u / f)
    ), m = e[2] - e[0];
    let S = this.getBytesPerPixel();
    const b = [], I = [];
    for (let T = 0; T < t.length; ++T)
      this.planarConfiguration === 1 ? b.push(ur(this.fileDirectory.BitsPerSample, 0, t[T]) / 8) : b.push(0), I.push(this.getReaderForSample(t[T]));
    const A = [], { littleEndian: C } = this;
    for (let T = p; T < x; ++T)
      for (let k = g; k < y; ++k) {
        let M;
        this.planarConfiguration === 1 && (M = this.getTileOrStrip(k, T, 0, n, c));
        for (let R = 0; R < t.length; ++R) {
          const O = R, q = t[R];
          this.planarConfiguration === 2 && (S = this.getSampleByteSize(q), M = this.getTileOrStrip(k, T, q, n, c));
          const ie = M.then((H) => {
            const ot = H.data, at = new DataView(ot), ne = this.getBlockHeight(H.y), Y = H.y * f, Q = H.x * h, lt = Y + ne, ct = (H.x + 1) * h, ht = I[O], ft = Math.min(ne, ne - (lt - e[3]), u - Y), ut = Math.min(h, h - (ct - e[2]), d - Q);
            for (let X = Math.max(0, e[1] - Y); X < ft; ++X)
              for (let $ = Math.max(0, e[0] - Q); $ < ut; ++$) {
                const dt = (X * h + $) * S, Re = ht.call(
                  at,
                  dt + b[O],
                  C
                );
                let ee;
                s ? (ee = (X + Y - e[1]) * m * t.length + ($ + Q - e[0]) * t.length + O, r[ee] = Re) : (ee = (X + Y - e[1]) * m + $ + Q - e[0], r[O][ee] = Re);
              }
          });
          A.push(ie);
        }
      }
    if (await Promise.all(A), o && e[2] - e[0] !== o || a && e[3] - e[1] !== a) {
      let T;
      return s ? T = fr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        t.length,
        l
      ) : T = lr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        o,
        a,
        l
      ), T.width = o, T.height = a, T;
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
    pool: s = null,
    width: n,
    height: o,
    resampleMethod: a,
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
      const m = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, S = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      y = fe(m, S, u * t.length), l && y.fill(l);
    } else {
      y = [];
      for (let m = 0; m < t.length; ++m) {
        const S = this.getArrayForSample(t[m], u);
        Array.isArray(l) && m < l.length ? S.fill(l[m]) : l && !Array.isArray(l) && S.fill(l), y.push(S);
      }
    }
    const p = s || await it(this.fileDirectory);
    return await this._readRaster(
      h,
      t,
      y,
      r,
      p,
      n,
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
    width: s,
    height: n,
    resampleMethod: o,
    enableAlpha: a = !1,
    signal: l
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === D.RGB) {
      let x = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== $t.Unspecified && a) {
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
        resampleMethod: o,
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
      resampleMethod: o,
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
      const x = new Uint8Array(p.length / 3), m = new Uint8Array(p.length / 3), S = new Uint8Array(p.length / 3);
      for (let b = 0, I = 0; b < p.length; b += 3, ++I)
        x[I] = p[b], m[I] = p[b + 1], S[I] = p[b + 2];
      p = [x, m, S];
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
      const o = s[n];
      t[oe(o, "name")] = o.inner;
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
      const [s, n, o] = e.getResolution();
      return [
        s * e.getWidth() / this.getWidth(),
        n * e.getHeight() / this.getHeight(),
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
      const [s, n, o, a, l, c, h, f] = this.fileDirectory.ModelTransformation, u = [
        [0, 0],
        [0, t],
        [r, 0],
        [r, t]
      ].map(([p, x]) => [
        a + s * p + n * x,
        f + l * p + c * x
      ]), g = u.map((p) => p[0]), y = u.map((p) => p[1]);
      return [
        Math.min(...g),
        Math.min(...y),
        Math.max(...g),
        Math.max(...y)
      ];
    } else {
      const s = this.getOrigin(), n = this.getResolution(), o = s[0], a = s[1], l = o + n[0] * r, c = a + n[1] * t;
      return [
        Math.min(o, l),
        Math.min(a, c),
        Math.max(o, l),
        Math.max(a, c)
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
    for (let o = 0; o < 8; o++) {
      let a = this._dataView.getUint8(e + (t ? o : 7 - o));
      s && (n ? a !== 0 && (a = ~(a - 1) & 255, n = !1) : a = ~a & 255), r += a * 256 ** o;
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
    return $e(this._dataView, e, t);
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
      let o = this._dataView.getUint8(
        e + (this._littleEndian ? n : 7 - n)
      );
      r && (s ? o !== 0 && (o = ~(o - 1) & 255, s = !1) : o = ~o & 255), t += o * 256 ** n;
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
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? it(e).then((r) => r.decode(e, t)) : new Promise((r) => {
      const s = this.workers.find((a) => a.idle) || this.workers[Math.floor(Math.random() * this.size)];
      s.idle = !1;
      const n = this.messageId++, o = (a) => {
        a.data.id === n && (s.idle = !0, r(a.data.decoded), s.worker.removeEventListener("message", o));
      };
      s.worker.addEventListener("message", o), s.worker.postMessage({ fileDirectory: e, buffer: t, id: n }, [t]);
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
function nt(i) {
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
  return nt(e);
}
function Ir(i) {
  const [e, ...t] = i.split(";").map((s) => s.trim()), r = t.map((s) => s.split("="));
  return { type: e, params: nt(r) };
}
function ue(i) {
  let e, t, r;
  return i && ([, e, t, r] = i.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), r = parseInt(r, 10)), { start: e, end: t, total: r };
}
function Sr(i, e) {
  let t = null;
  const r = new TextDecoder("ascii"), s = [], n = `--${e}`, o = `${n}--`;
  for (let a = 0; a < 10; ++a)
    r.decode(
      new Uint8Array(i, a, n.length)
    ) === n && (t = a);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < i.byteLength; ) {
    const a = r.decode(
      new Uint8Array(
        i,
        t,
        Math.min(n.length + 1024, i.byteLength - t)
      )
    );
    if (a.length === 0 || a.startsWith(o))
      break;
    if (!a.startsWith(n))
      throw new Error("Part does not start with boundary");
    const l = a.substr(n.length + 2);
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
class z extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, z), this.name = "AbortError";
  }
}
class Fr extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Cr = Fr;
class Er {
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
class Ge {
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
class Pr extends Fe {
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
    const o = [];
    for (const d of s)
      this.blockRequests.has(d) && o.push(this.blockRequests.get(d));
    await Promise.allSettled(r), await Promise.allSettled(o);
    const a = [], l = n.filter((d) => this.abortedBlockIds.has(d) || !this.blockCache.has(d));
    if (l.forEach((d) => this.blockIdsToFetch.add(d)), l.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const d of l) {
        const u = this.blockRequests.get(d);
        if (!u)
          throw new Error(`Block ${d} is not in the block requests`);
        a.push(u);
      }
      await Promise.allSettled(a);
    }
    if (t && t.aborted)
      throw new z("Request was aborted");
    const c = n.map((d) => this.blockCache.get(d) || this.evictedBlocks.get(d)), h = c.filter((d) => !d);
    if (h.length)
      throw new Cr(h, "Request failed");
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
        for (const o of n.blockIds)
          this.blockRequests.set(o, (async () => {
            try {
              const a = (await r)[s], l = o * this.blockSize, c = l - a.offset, h = Math.min(c + this.blockSize, a.data.byteLength), f = a.data.slice(c, h), d = new Er(
                l,
                f.byteLength,
                f,
                o
              );
              this.blockCache.set(o, d), this.abortedBlockIds.delete(o);
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
    let r = [], s = null;
    const n = [];
    for (const o of t)
      s === null || s + 1 === o ? (r.push(o), s = o) : (n.push(new Ge(
        r[0] * this.blockSize,
        r.length * this.blockSize,
        r
      )), r = [o], s = o);
    return n.push(new Ge(
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
      const n = Math.floor(r.offset / this.blockSize), o = Math.floor(s / this.blockSize), a = new ArrayBuffer(r.length), l = new Uint8Array(a);
      for (let c = n; c <= o; ++c) {
        const h = t.get(c), f = h.offset - r.offset, d = h.top - s;
        let u = 0, g = 0, y;
        f < 0 ? u = -f : f > 0 && (g = f), d < 0 ? y = h.length - u : y = s - h.offset - u;
        const p = new Uint8Array(h.data, u, y);
        l.set(p, g);
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
class Or extends Ce {
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
class Mr extends Ee {
  constructRequest(e, t) {
    return new Promise((r, s) => {
      const n = new XMLHttpRequest();
      n.open("GET", this.url), n.responseType = "arraybuffer";
      for (const [o, a] of Object.entries(e))
        n.setRequestHeader(o, a);
      n.onload = () => {
        const o = n.response;
        r(new Or(n, o));
      }, n.onerror = s, n.onabort = () => s(new z("Request aborted")), n.send(), t && (t.aborted && n.abort(), t.addEventListener("abort", () => n.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const ce = {};
class Br extends Ce {
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
        (o) => {
          const a = new Promise((l) => {
            const c = [];
            o.on("data", (h) => {
              c.push(h);
            }), o.on("end", () => {
              const h = Buffer.concat(c).buffer;
              l(h);
            }), o.on("error", s);
          });
          r(new Br(o, a));
        }
      );
      n.on("error", s), t && (t.aborted && n.destroy(new z("Request aborted")), t.addEventListener("abort", () => n.destroy(new z("Request aborted"))));
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
        const o = await r.getData(), { start: a, end: l, total: c } = ue(r.getHeader("content-range"));
        this._fileSize = c || null;
        const h = [{
          data: o,
          offset: a,
          length: l - a
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
        const o = await n.getData(), { total: a } = ue(n.getHeader("content-range"));
        return this._fileSize = a || null, {
          data: o,
          offset: r,
          length: s
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const o = await n.getData();
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
function ke(i, { blockSize: e, cacheSize: t }) {
  return e === null ? i : new Pr(i, { blockSize: e, cacheSize: t });
}
function vr(i, { headers: e = {}, credentials: t, maxRanges: r = 0, allowFullFile: s = !1, ...n } = {}) {
  const o = new Rr(i, t), a = new Pe(o, e, r, s);
  return ke(a, n);
}
function _r(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const n = new Mr(i), o = new Pe(n, e, t, r);
  return ke(o, s);
}
function Ur(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const n = new Gr(i), o = new Pe(n, e, t, r);
  return ke(o, s);
}
function Lr(i, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? vr(i, t) : typeof XMLHttpRequest < "u" ? _r(i, t) : Ur(i, t);
}
class Nr extends Fe {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((r, s) => {
      const n = this.file.slice(e.offset, e.offset + e.length), o = new FileReader();
      o.onload = (a) => r(a.target.result), o.onerror = s, o.onabort = s, o.readAsArrayBuffer(n), t && t.addEventListener("abort", () => o.abort());
    });
  }
}
function jr(i) {
  return new Nr(i);
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
    const s = Wt[e[r]], n = e[r + 1] ? W[e[r + 1]] : null, o = e[r + 2], a = e[r + 3];
    let l = null;
    if (!n)
      l = a;
    else {
      if (l = i[n], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${s}'.`);
      typeof l == "string" ? l = l.substring(a, a + o - 1) : l.subarray && (l = l.subarray(a, a + o), o === 1 && (l = l[0]));
    }
    t[s] = l;
  }
  return t;
}
function N(i, e, t, r) {
  let s = null, n = null;
  const o = de(e);
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
    for (let a = 0; a < t; a += 2)
      s[a] = n.call(
        i,
        r + a * o
      ), s[a + 1] = n.call(
        i,
        r + (a * o + 4)
      );
  else
    for (let a = 0; a < t; ++a)
      s[a] = n.call(
        i,
        r + a * o
      );
  return e === w.ASCII ? new TextDecoder("utf-8").decode(s) : s;
}
class Kr {
  constructor(e, t, r) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = r;
  }
}
class te extends Error {
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
    let { resX: n, resY: o, bbox: a } = e;
    const l = await this.getImage();
    let c = l;
    const h = await this.getImageCount(), f = l.getBoundingBox();
    if (t && a)
      throw new Error('Both "bbox" and "window" passed.');
    if (r || s) {
      if (t) {
        const [g, y] = l.getOrigin(), [p, x] = l.getResolution();
        a = [
          g + t[0] * p,
          y + t[1] * x,
          g + t[2] * p,
          y + t[3] * x
        ];
      }
      const u = a || f;
      if (r) {
        if (n)
          throw new Error("Both width and resX passed");
        n = (u[2] - u[0]) / r;
      }
      if (s) {
        if (o)
          throw new Error("Both width and resY passed");
        o = (u[3] - u[1]) / s;
      }
    }
    if (n || o) {
      const u = [];
      for (let g = 0; g < h; ++g) {
        const y = await this.getImage(g), { SubfileType: p, NewSubfileType: x } = y.fileDirectory;
        (g === 0 || p === 2 || x & 1) && u.push(y);
      }
      u.sort((g, y) => g.getWidth() - y.getWidth());
      for (let g = 0; g < u.length; ++g) {
        const y = u[g], p = (f[2] - f[0]) / y.getWidth(), x = (f[3] - f[1]) / y.getHeight();
        if (c = y, n && n > p || o && o > x)
          break;
      }
    }
    let d = t;
    if (a) {
      const [u, g] = l.getOrigin(), [y, p] = c.getResolution(l);
      d = [
        Math.round((a[0] - u) / y),
        Math.round((a[1] - g) / p),
        Math.round((a[2] - u) / y),
        Math.round((a[3] - g) / p)
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
class se extends Vr {
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
    const n = this.bigTiff ? s.readUint64(e) : s.readUint16(e), o = n * t + (this.bigTiff ? 16 : 6);
    s.covers(e, o) || (s = await this.getSlice(e, o));
    const a = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let f = 0; f < n; l += t, ++f) {
      const d = s.readUint16(l), u = s.readUint16(l + 2), g = this.bigTiff ? s.readUint64(l + 4) : s.readUint32(l + 4);
      let y, p;
      const x = de(u), m = l + (this.bigTiff ? 12 : 8);
      if (x * g <= (this.bigTiff ? 8 : 4))
        y = N(s, u, g, m);
      else {
        const S = s.readOffset(m), b = de(u) * g;
        if (s.covers(S, b))
          y = N(s, u, g, S);
        else {
          const I = await this.getSlice(S, b);
          y = N(I, u, g, S);
        }
      }
      g === 1 && Xt.indexOf(d) === -1 && !(u === w.RATIONAL || u === w.SRATIONAL) ? p = y[0] : p = y, a[W[d]] = p;
    }
    const c = zr(a), h = s.readOffset(
      e + r + t * n
    );
    return new Kr(
      a,
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
        throw t instanceof te ? new te(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new te(e);
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
        if (r instanceof te)
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
    if (t === N(s, w.ASCII, t.length, e)) {
      const o = N(s, w.ASCII, r, e).split(`
`)[0], a = Number(o.split("=")[1].split(" ")[0]) + o.length;
      a > r && (s = await this.getSlice(e, a));
      const l = N(s, w.ASCII, a, e);
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
    const s = (await e.fetch([{ offset: 0, length: 1024 }], r))[0], n = new yr(s), o = n.getUint16(0, 0);
    let a;
    if (o === 18761)
      a = !0;
    else if (o === 19789)
      a = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = n.getUint16(2, a);
    let c;
    if (l === 42)
      c = !1;
    else if (l === 43) {
      if (c = !0, n.getUint16(4, a) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = c ? n.getUint64(8, a) : n.getUint32(4, a);
    return new se(e, a, c, h, t);
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
async function ve(i, e = {}, t) {
  return se.fromSource(Lr(i, e), t);
}
async function _e(i, e) {
  return se.fromSource(jr(i), e);
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
    const o = new DOMParser().parseFromString(
      (t = n.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), a = (r = o == null ? void 0 : o.querySelector("Name")) == null ? void 0 : r.textContent, l = (s = o == null ? void 0 : o.querySelector("Color")) == null ? void 0 : s.textContent;
    if (!a)
      continue;
    const c = l ? l.split(",").map((h) => parseInt(h)) : [255, 255, 255];
    e.has(a) || e.set(a, {
      name: a,
      color: c,
      images: []
    }), e.get(a).images.push(n);
  }
  return e;
};
class L {
  static RGBAfromYCbCr(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, s;
    for (r = 0, s = 0; r < e.length; r += 3, s += 4) {
      const n = e[r], o = e[r + 1], a = e[r + 2];
      t[s] = n + 1.402 * (a - 128), t[s + 1] = n - 0.34414 * (o - 128) - 0.71414 * (a - 128), t[s + 2] = n + 1.772 * (o - 128), t[s + 3] = 255;
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
    for (let n = 0, o = 0; n < e.length; ++n, o += 4)
      s = 256 - e[n] / t * 256, r[o] = s, r[o + 1] = s, r[o + 2] = s, r[o + 3] = 255;
    return r;
  }
  static RGBAfromBlackIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let s;
    for (let n = 0, o = 0; n < e.length; ++n, o += 4)
      s = e[n] / t * 256, r[o] = s, r[o + 1] = s, r[o + 2] = s, r[o + 3] = 255;
    return r;
  }
  static RGBAfromPalette(e, t) {
    const r = new Uint8ClampedArray(e.length * 4), s = t.length / 3, n = t.length / 3 * 2;
    for (let o = 0, a = 0; o < e.length; ++o, a += 4) {
      const l = e[o];
      r[a] = t[l] / 65536 * 256, r[a + 1] = t[l + s] / 65536 * 256, r[a + 2] = t[l + n] / 65536 * 256, r[a + 3] = 255;
    }
    return r;
  }
  static RGBAfromCMYK(e) {
    const t = new Uint8ClampedArray(e.length);
    for (let r = 0, s = 0; r < e.length; r += 4, s += 4) {
      const n = e[r], o = e[r + 1], a = e[r + 2], l = e[r + 3];
      t[s] = 255 * ((255 - n) / 256) * ((255 - l) / 256), t[s + 1] = 255 * ((255 - o) / 256) * ((255 - l) / 256), t[s + 2] = 255 * ((255 - a) / 256) * ((255 - l) / 256), t[s + 3] = 255;
    }
    return t;
  }
  static RGBAfromCIELab(e) {
    const n = new Uint8ClampedArray(e.length * 4 / 3);
    for (let o = 0, a = 0; o < e.length; o += 3, a += 4) {
      const l = e[o + 0], c = e[o + 1] << 24 >> 24, h = e[o + 2] << 24 >> 24;
      let f = (l + 16) / 116, d = c / 500 + f, u = f - h / 200, g, y, p;
      d = 0.95047 * (d * d * d > 8856e-6 ? d * d * d : (d - 16 / 116) / 7.787), f = 1 * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), u = 1.08883 * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), g = d * 3.2406 + f * -1.5372 + u * -0.4986, y = d * -0.9689 + f * 1.8758 + u * 0.0415, p = d * 0.0557 + f * -0.204 + u * 1.057, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, y = y > 31308e-7 ? 1.055 * y ** (1 / 2.4) - 0.055 : 12.92 * y, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, n[a] = Math.max(0, Math.min(1, g)) * 255, n[a + 1] = Math.max(0, Math.min(1, y)) * 255, n[a + 2] = Math.max(0, Math.min(1, p)) * 255, n[a + 3] = 255;
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
          var o;
          try {
            o = new window.Blob([n.response]);
          } catch (h) {
            var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (h.name === "TypeError" && a) {
              var l = new a();
              l.append(n.response), o = l.getBlob();
            }
          }
          o.size === 0 && (r.errorMsg = "Empty image response.", r.finish(!1));
          var c = (window.URL || window.webkitURL).createObjectURL(o);
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
    var o;
    r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (o = r.jobQueue.shift(), o.start(), r.jobsInProgress++), n(s.image, s.errorMsg, s.request);
  }
  i.ImageLoader.prototype.addJob = function(r) {
    var s = this, n = function(l) {
      t(s, l, r.callback);
    }, o = {
      src: r.src,
      loadWithAjax: r.loadWithAjax,
      ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null,
      crossOriginPolicy: r.crossOriginPolicy,
      ajaxWithCredentials: r.ajaxWithCredentials,
      postData: r.postData,
      callback: n,
      abort: r.abort,
      timeout: this.timeout
    }, a = new e(o);
    !this.jobLimit || this.jobsInProgress < this.jobLimit ? (a.start(), this.jobsInProgress++) : this.jobQueue.push(a);
  }, i.Tile.prototype._hasTransparencyChannel = function() {
    return !1;
  };
}
const _ = class _ extends OpenSeadragon.TileSource {
  constructor(t, r = { logLatency: !1 }) {
    super();
    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    E(this, "getTileWidth", (t) => {
      if (this.levels.length > t)
        return this.levels[t].tileWidth;
    });
    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    E(this, "getTileHeight", (t) => {
      if (this.levels.length > t)
        return this.levels[t].tileHeight;
    });
    /**
     * @function
     * @param {Number} level
     */
    E(this, "getLevelScale", (t) => {
      let r = NaN;
      return this.levels.length > 0 && t >= this.minLevel && t <= this.maxLevel && (r = this.levels[t].width / this.levels[this.maxLevel].width), r;
    });
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    E(this, "getTileHashKey", (t, r, s) => {
      var n;
      return `${((n = this == null ? void 0 : this.channel) == null ? void 0 : n.name) ?? ""}_${t}_${r}_${s}`;
    });
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    E(this, "getTileUrl", (t, r, s) => {
      let n = this.levels[t], o = new String(`${t}/${r}_${s}`);
      return o.fetch = /* @__PURE__ */ ((a, l, c, h, f) => () => this.regionToDataUrl.call(a, l, c, h, f))(this, n, r, s, o), o;
    });
    E(this, "downloadTileStart", (t) => {
      t.src.fetch().then((r) => {
        let s = new Image(), n = "" + t.src;
        s.onload = function() {
          t.finish(s);
        }, s.onerror = s.onabort = function() {
          t.finish(null, n, "Request aborted");
        }, s.src = r;
      });
    });
    E(this, "downloadTileAbort", (t) => {
      t.src.abortController && t.src.abortController.abort();
    });
    E(this, "setupComplete", () => {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    });
    E(this, "setupLevels", () => {
      if (this._ready)
        return;
      let t = this.GeoTIFFImages.sort((l, c) => c.getWidth() - l.getWidth()), r = this._tileSize, s = this._tileSize, n = t[0].getWidth();
      this.width = n;
      let o = t[0].getHeight();
      if (this.height = o, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new OpenSeadragon.Point(this.width, this.height), t.reduce(
        (l, c) => (l.width !== -1 && (l.valid = l.valid && c.getWidth() < l.width), l.width = c.getWidth(), l),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = t.map((l) => {
          let c = l.getWidth(), h = l.getHeight();
          return {
            width: c,
            height: h,
            tileWidth: this.options.tileWidth || l.getTileWidth() || r,
            tileHeight: this.options.tileHeight || l.getTileHeight() || s,
            image: l,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let l = Math.ceil(
          Math.log2(Math.max(n / r, o / s))
        ), c = [...Array(l).keys()].filter((h) => h % 2 == 0);
        this.levels = c.map((h) => {
          let f = Math.pow(2, h);
          const d = t.filter((g) => {
            const y = Math.pow(2, h - 1);
            return y >= 0 ? g.getWidth() * y < n && g.getWidth() * f >= n : g.getWidth() * f >= n;
          });
          if (d.length === 0)
            return null;
          const u = d[0];
          return {
            width: n / f,
            height: o / f,
            tileWidth: this.options.tileWidth || u.getTileWidth() || r,
            tileHeight: this.options.tileHeight || u.getTileHeight() || s,
            image: u,
            scaleFactor: f * u.getWidth() / n
          };
        }).filter((h) => h !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((l, c) => l.width - c.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    });
    E(this, "regionToDataUrl", (t, r, s, n) => {
      var g, y, p, x, m;
      let o = this.options.logLatency && Date.now(), l = (n.abortController = new AbortController()).signal;
      const c = t.tileWidth, h = t.tileHeight, f = [r * c, s * h, (r + 1) * c, (s + 1) * h].map(
        (S) => S * t.scaleFactor
      ), d = t.image;
      if ((y = (g = d.fileDirectory) == null ? void 0 : g.Software) == null ? void 0 : y.startsWith("PerkinElmer-QPI")) {
        const S = new DOMParser().parseFromString(
          (p = d.fileDirectory) == null ? void 0 : p.ImageDescription,
          "text/xml"
        );
        (x = S.querySelector("Name")) == null || x.textContent;
        const b = (m = S.querySelector("Color")) == null ? void 0 : m.textContent, I = b ? b.split(",").map((A) => parseInt(A)) : [255, 255, 255];
        return t.image.readRGB({
          interleave: !0,
          window: f,
          pool: this._pool,
          width: t.tileWidth,
          height: t.tileHeight,
          signal: l
        }).then((A) => {
          let C = document.createElement("canvas");
          C.width = t.tileWidth, C.height = t.tileHeight;
          let T = C.getContext("2d"), k = new Uint8ClampedArray(4 * C.width * C.height), M = new Uint8ClampedArray(A), R, O;
          for (R = 0, O = 0; R < M.length; R += 3, O += 4)
            k[O] = M[R] * I[0] / 255, k[O + 1] = M[R + 1] * I[1] / 255, k[O + 2] = M[R + 2] * I[2] / 255, k[O + 3] = 255;
          const q = T.createImageData(C.width, C.height);
          q.data.set(k), T.putImageData(q, 0, 0);
          let ie = C.toDataURL("image/jpeg", 0.8);
          return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
            "Tile latency (ms):",
            Date.now() - o
          ), ie;
        });
      } else
        return t.image.getTileOrStrip(r, s, null, this._pool, l).then((S) => {
          let b = new Uint8ClampedArray(S.data), I = document.createElement("canvas");
          I.width = t.tileWidth, I.height = t.tileHeight;
          let A = I.getContext("2d"), C = t.image.fileDirectory.PhotometricInterpretation, T;
          if (b.length / (I.width * I.height) % 4 === 0)
            T = b;
          else
            switch (C) {
              case D.WhiteIsZero:
                T = L.RGBAfromWhiteIsZero(
                  b,
                  2 ** t.image.fileDirectory.BitsPerSample[0]
                );
                break;
              case D.BlackIsZero:
                T = L.RGBAfromBlackIsZero(
                  b,
                  2 ** t.image.fileDirectory.BitsPerSample[0]
                );
                break;
              case D.RGB:
                T = L.RGBAfromRGB(b);
                break;
              case D.Palette:
                T = L.RGBAfromPalette(b, 2 ** t.image.fileDirectory.colorMap);
                break;
              case D.CMYK:
                T = L.RGBAfromCMYK(b);
                break;
              case D.YCbCr:
                T = L.RGBAfromYCbCr(b);
                break;
              case D.CIELab:
                T = L.RGBAfromCIELab(b);
                break;
            }
          const k = A.createImageData(I.width, I.height);
          k.data.set(T), A.putImageData(k, 0, 0);
          let M = I.toDataURL("image/jpeg", 0.8);
          return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
            "Tile latency (ms):",
            Date.now() - o
          ), M;
        });
    });
    _._osdReady || _.applyOSDPatch(OpenSeadragon);
    let s = this;
    this.input = t, this.options = r, this.channel = (t == null ? void 0 : t.channel) ?? null, this._ready = !1, this._pool = _.sharedPool, this._tileSize = 256, t.GeoTIFF && t.GeoTIFFImages ? (this.promises = {
      GeoTIFF: Promise.resolve(t.GeoTIFF),
      GeoTIFFImages: Promise.resolve(t.GeoTIFFImages),
      ready: new he()
    }, this.GeoTIFF = t.GeoTIFF, this.imageCount = t.GeoTIFFImages.length, this.GeoTIFFImages = t.GeoTIFFImages, this.setupLevels()) : (this.promises = {
      GeoTIFF: t instanceof File ? _e(t) : ve(t),
      GeoTIFFImages: new he(),
      ready: new he()
    }, this.promises.GeoTIFF.then((n) => (s.GeoTIFF = n, n.getImageCount())).then((n) => {
      s.imageCount = n;
      let o = [...Array(n).keys()].map((a) => s.GeoTIFF.getImage(a));
      return Promise.all(o);
    }).then((n) => {
      s.GeoTIFFImages = n, s.promises.GeoTIFFImages.resolve(n), this.setupLevels();
    }).catch((n) => {
      throw console.error("Re-throwing error with GeoTIFF:", n), n;
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
E(_, "sharedPool", new xr()), E(_, "_osdReady", !1), // Apply ImageJob patch to OpenSeadragon. Can be extended for modular patches.
E(_, "applyOSDPatch", (t) => {
  Hr(t), _._osdReady = !0;
}), E(_, "getAllTileSources", async (t, r) => {
  const s = t instanceof File ? t.name.split(".").pop() : t.split(".").pop();
  let n = t instanceof File ? _e(t) : ve(t);
  return n.then((o) => (n = o, o.getImageCount())).then(
    (o) => Promise.all([...Array(o).keys()].map(async (a) => (await n).getImage(a)))
  ).then((o) => {
    o = o.filter(
      (h) => h.fileDirectory.photometricInterpretation !== D.TransparencyMask
    ), o.sort((h, f) => f.getWidth() - h.getWidth());
    const a = 0.015;
    return o.reduce((h, f) => {
      const d = f.getWidth() / f.getHeight(), u = h.filter((g) => Math.abs(1 - g.aspectRatio / d) < a);
      if (u.length === 0) {
        let g = {
          aspectRatio: d,
          images: [f]
        };
        h.push(g);
      } else
        u[0].images.push(f);
      return h;
    }, []).map((h) => h.images).map((h, f) => {
      if (f !== 0)
        return new OpenSeadragon.GeoTIFFTileSource(
          {
            GeoTIFF: n,
            GeoTIFFImages: h
          },
          r
        );
      switch (s) {
        case "qptiff":
          const d = qr(h);
          return Array.from(d.values()).map((u, g) => new OpenSeadragon.GeoTIFFTileSource(
            {
              GeoTIFF: n,
              GeoTIFFImages: u.images,
              channel: {
                name: u.name,
                color: u.color
              }
            },
            r
          ));
        default:
          return new OpenSeadragon.GeoTIFFTileSource(
            {
              GeoTIFF: n,
              GeoTIFFImages: h
            },
            r
          );
      }
    });
  });
});
let ge = _;
const Yr = (i) => {
  i.GeoTIFFTileSource = ge;
};
(function(i, e) {
  typeof exports > "u" || typeof i.OpenSeadragon < "u" && e(i.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Yr);
export {
  ge as G,
  ns as L,
  os as a,
  Yr as e,
  We as g
};
//# sourceMappingURL=main-pZdue58H.js.map
