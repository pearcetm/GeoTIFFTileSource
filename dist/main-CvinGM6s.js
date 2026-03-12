var qt = Object.defineProperty;
var Vt = (r, e, t) => e in r ? qt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Vt(r, typeof e != "symbol" ? e + "" : e, t);
function L(r) {
  return (e, ...t) => Wt(r, e, t);
}
function he(r, e) {
  return L(
    ct(
      r,
      e
    ).get
  );
}
const {
  apply: Wt,
  getOwnPropertyDescriptor: ct,
  getPrototypeOf: Ke,
  ownKeys: $t
} = Reflect, {
  iterator: we,
  toStringTag: Yt
} = Symbol, Xt = Object, {
  create: ze,
  defineProperty: Zt
} = Xt, Jt = Array, Qt = Jt.prototype, ft = Qt[we], er = L(ft), ht = ArrayBuffer, tr = ht.prototype;
he(tr, "byteLength");
const nt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
nt && he(nt.prototype, "byteLength");
const ut = Ke(Uint8Array);
ut.from;
const K = ut.prototype;
K[we];
L(K.keys);
L(
  K.values
);
L(
  K.entries
);
L(K.set);
L(
  K.reverse
);
L(K.fill);
L(
  K.copyWithin
);
L(K.sort);
L(K.slice);
L(
  K.subarray
);
he(
  K,
  "buffer"
);
he(
  K,
  "byteOffset"
);
he(
  K,
  "length"
);
he(
  K,
  Yt
);
const rr = Uint8Array, gt = Uint16Array, He = Uint32Array, nr = Float32Array, me = Ke([][we]()), dt = L(me.next), ir = L(function* () {
}().next), sr = Ke(me), or = DataView.prototype, ar = L(
  or.getUint16
), qe = WeakMap, pt = qe.prototype, yt = L(pt.get), lr = L(pt.set), mt = new qe(), cr = ze(null, {
  next: {
    value: function() {
      const e = yt(mt, this);
      return dt(e);
    }
  },
  [we]: {
    value: function() {
      return this;
    }
  }
});
function fr(r) {
  if (r[we] === ft && me.next === dt)
    return r;
  const e = ze(cr);
  return lr(mt, e, er(r)), e;
}
const hr = new qe(), ur = ze(sr, {
  next: {
    value: function() {
      const e = yt(hr, this);
      return ir(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const r of $t(me))
  r !== "next" && Zt(ur, r, ct(me, r));
const wt = new ht(4), gr = new nr(wt), dr = new He(wt), Y = new gt(512), X = new rr(512);
for (let r = 0; r < 256; ++r) {
  const e = r - 127;
  e < -24 ? (Y[r] = 0, Y[r | 256] = 32768, X[r] = 24, X[r | 256] = 24) : e < -14 ? (Y[r] = 1024 >> -e - 14, Y[r | 256] = 1024 >> -e - 14 | 32768, X[r] = -e - 1, X[r | 256] = -e - 1) : e <= 15 ? (Y[r] = e + 15 << 10, Y[r | 256] = e + 15 << 10 | 32768, X[r] = 13, X[r | 256] = 13) : e < 128 ? (Y[r] = 31744, Y[r | 256] = 64512, X[r] = 24, X[r | 256] = 24) : (Y[r] = 31744, Y[r | 256] = 64512, X[r] = 13, X[r | 256] = 13);
}
const Ve = new He(2048);
for (let r = 1; r < 1024; ++r) {
  let e = r << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, Ve[r] = e | t;
}
for (let r = 1024; r < 2048; ++r)
  Ve[r] = 939524096 + (r - 1024 << 13);
const ue = new He(64);
for (let r = 1; r < 31; ++r)
  ue[r] = r << 23;
ue[31] = 1199570944;
ue[32] = 2147483648;
for (let r = 33; r < 63; ++r)
  ue[r] = 2147483648 + (r - 32 << 23);
ue[63] = 3347054592;
const bt = new gt(64);
for (let r = 1; r < 64; ++r)
  r !== 32 && (bt[r] = 1024);
function pr(r) {
  const e = r >> 10;
  return dr[0] = Ve[bt[e] + (r & 1023)] + ue[e], gr[0];
}
function xt(r, e, ...t) {
  return pr(
    ar(r, e, ...fr(t))
  );
}
function It(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var We = { exports: {} };
function Tt(r, e, t) {
  const n = t && t.debug || !1;
  n && console.log("[xml-utils] getting " + e + " in " + r);
  const i = typeof r == "object" ? r.outer : r, s = i.slice(0, i.indexOf(">") + 1), a = ['"', "'"];
  for (let o = 0; o < a.length; o++) {
    const c = a[o], f = e + "\\=" + c + "([^" + c + "]*)" + c;
    n && console.log("[xml-utils] pattern:", f);
    const l = new RegExp(f).exec(s);
    if (n && console.log("[xml-utils] match:", l), l) return l[1];
  }
}
We.exports = Tt;
We.exports.default = Tt;
var yr = We.exports;
const ve = /* @__PURE__ */ It(yr);
var $e = { exports: {} }, Ye = { exports: {} }, Xe = { exports: {} };
function St(r, e, t) {
  const i = new RegExp(e).exec(r.slice(t));
  return i ? t + i.index : -1;
}
Xe.exports = St;
Xe.exports.default = St;
var mr = Xe.exports, Ze = { exports: {} };
function At(r, e, t) {
  const i = new RegExp(e).exec(r.slice(t));
  return i ? t + i.index + i[0].length - 1 : -1;
}
Ze.exports = At;
Ze.exports.default = At;
var wr = Ze.exports, Je = { exports: {} };
function Ft(r, e) {
  const t = new RegExp(e, "g"), n = r.match(t);
  return n ? n.length : 0;
}
Je.exports = Ft;
Je.exports.default = Ft;
var br = Je.exports;
const xr = mr, Ee = wr, it = br;
function Pt(r, e, t) {
  const n = t && t.debug || !1, i = !(t && typeof t.nested === !1), s = t && t.startIndex || 0;
  n && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const a = xr(r, `<${e}[ 
>/]`, s);
  if (n && console.log("[xml-utils] start:", a), a === -1) return;
  const o = r.slice(a + e.length);
  let c = Ee(o, "^[^<]*[ /]>", 0);
  const f = c !== -1 && o[c - 1] === "/";
  if (n && console.log("[xml-utils] selfClosing:", f), f === !1)
    if (i) {
      let p = 0, g = 1, w = 0;
      for (; (c = Ee(o, "[ /]" + e + ">", p)) !== -1; ) {
        const m = o.substring(p, c + 1);
        if (g += it(m, "<" + e + `[ 
	>]`), w += it(m, "</" + e + ">"), w >= g) break;
        p = c;
      }
    } else
      c = Ee(o, "[ /]" + e + ">", 0);
  const u = a + e.length + c + 1;
  if (n && console.log("[xml-utils] end:", u), u === -1) return;
  const l = r.slice(a, u);
  let h;
  return f ? h = null : h = l.slice(l.indexOf(">") + 1, l.lastIndexOf("<")), { inner: h, outer: l, start: a, end: u };
}
Ye.exports = Pt;
Ye.exports.default = Pt;
var Ir = Ye.exports;
const Tr = Ir;
function Dt(r, e, t) {
  const n = [], i = t && t.debug || !1, s = t && typeof t.nested == "boolean" ? t.nested : !0;
  let a = t && t.startIndex || 0, o;
  for (; o = Tr(r, e, { debug: i, startIndex: a }); )
    s ? a = o.start + 1 + e.length : a = o.end, n.push(o);
  return i && console.log("findTagsByName found", n.length, "tags"), n;
}
$e.exports = Dt;
$e.exports.default = Dt;
var Sr = $e.exports;
const Ar = /* @__PURE__ */ It(Sr), ne = {
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
}, q = {};
for (const r in ne)
  ne.hasOwnProperty(r) && (q[ne[r]] = parseInt(r, 10));
const Fe = {
  256: "SHORT",
  257: "SHORT",
  258: "SHORT",
  259: "SHORT",
  262: "SHORT",
  273: "LONG",
  274: "SHORT",
  277: "SHORT",
  278: "LONG",
  279: "LONG",
  282: "RATIONAL",
  283: "RATIONAL",
  284: "SHORT",
  286: "SHORT",
  287: "RATIONAL",
  296: "SHORT",
  297: "SHORT",
  305: "ASCII",
  306: "ASCII",
  338: "SHORT",
  339: "SHORT",
  513: "LONG",
  514: "LONG",
  1024: "SHORT",
  1025: "SHORT",
  2048: "SHORT",
  2049: "ASCII",
  3072: "SHORT",
  3073: "ASCII",
  33550: "DOUBLE",
  33922: "DOUBLE",
  34264: "DOUBLE",
  34665: "LONG",
  34735: "SHORT",
  34736: "DOUBLE",
  34737: "ASCII",
  42113: "ASCII"
}, kt = [
  q.BitsPerSample,
  q.ExtraSamples,
  q.SampleFormat,
  q.StripByteCounts,
  q.StripOffsets,
  q.StripRowCounts,
  q.TileByteCounts,
  q.TileOffsets,
  q.SubIFDs
], ye = {
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
}, C = {};
for (const r in ye)
  ye.hasOwnProperty(r) && (C[ye[r]] = parseInt(r, 10));
const N = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, Ct = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, Fr = {
  Version: 0,
  AddCompression: 1
}, Pr = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, ae = {
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
}, Rt = {};
for (const r in ae)
  ae.hasOwnProperty(r) && (Rt[ae[r]] = parseInt(r, 10));
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExtraSamplesValues: Ct,
  LercAddCompression: Pr,
  LercParameters: Fr,
  arrayFields: kt,
  fieldTagNames: ne,
  fieldTagTypes: Fe,
  fieldTags: q,
  fieldTypeNames: ye,
  fieldTypes: C,
  geoKeyNames: ae,
  geoKeys: Rt,
  photometricInterpretations: N
}, Symbol.toStringTag, { value: "Module" }));
function Gt(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3);
  let s;
  for (let a = 0, o = 0; a < r.length; ++a, o += 3)
    s = 256 - r[a] / e * 256, i[o] = s, i[o + 1] = s, i[o + 2] = s;
  return i;
}
function vt(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3);
  let s;
  for (let a = 0, o = 0; a < r.length; ++a, o += 3)
    s = r[a] / e * 256, i[o] = s, i[o + 1] = s, i[o + 2] = s;
  return i;
}
function Et(r, e) {
  const { width: t, height: n } = r, i = new Uint8Array(t * n * 3), s = e.length / 3, a = e.length / 3 * 2;
  for (let o = 0, c = 0; o < r.length; ++o, c += 3) {
    const f = r[o];
    i[c] = e[f] / 65536 * 256, i[c + 1] = e[f + s] / 65536 * 256, i[c + 2] = e[f + a] / 65536 * 256;
  }
  return i;
}
function Ot(r) {
  const { width: e, height: t } = r, n = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 4, s += 3) {
    const a = r[i], o = r[i + 1], c = r[i + 2], f = r[i + 3];
    n[s] = 255 * ((255 - a) / 256) * ((255 - f) / 256), n[s + 1] = 255 * ((255 - o) / 256) * ((255 - f) / 256), n[s + 2] = 255 * ((255 - c) / 256) * ((255 - f) / 256);
  }
  return n;
}
function Bt(r) {
  const { width: e, height: t } = r, n = new Uint8ClampedArray(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
    const a = r[i], o = r[i + 1], c = r[i + 2];
    n[s] = a + 1.402 * (c - 128), n[s + 1] = a - 0.34414 * (o - 128) - 0.71414 * (c - 128), n[s + 2] = a + 1.772 * (o - 128);
  }
  return n;
}
const kr = 0.95047, Cr = 1, Rr = 1.08883;
function _t(r) {
  const { width: e, height: t } = r, n = new Uint8Array(e * t * 3);
  for (let i = 0, s = 0; i < r.length; i += 3, s += 3) {
    const a = r[i + 0], o = r[i + 1] << 24 >> 24, c = r[i + 2] << 24 >> 24;
    let f = (a + 16) / 116, u = o / 500 + f, l = f - c / 200, h, p, g;
    u = kr * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), f = Cr * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), l = Rr * (l * l * l > 8856e-6 ? l * l * l : (l - 16 / 116) / 7.787), h = u * 3.2406 + f * -1.5372 + l * -0.4986, p = u * -0.9689 + f * 1.8758 + l * 0.0415, g = u * 0.0557 + f * -0.204 + l * 1.057, h = h > 31308e-7 ? 1.055 * h ** (1 / 2.4) - 0.055 : 12.92 * h, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, n[s] = Math.max(0, Math.min(1, h)) * 255, n[s + 1] = Math.max(0, Math.min(1, p)) * 255, n[s + 2] = Math.max(0, Math.min(1, g)) * 255;
  }
  return n;
}
const Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromBlackIsZero: vt,
  fromCIELab: _t,
  fromCMYK: Ot,
  fromPalette: Et,
  fromWhiteIsZero: Gt,
  fromYCbCr: Bt
}, Symbol.toStringTag, { value: "Module" })), Mt = /* @__PURE__ */ new Map();
function ee(r, e) {
  Array.isArray(r) || (r = [r]), r.forEach((t) => Mt.set(t, e));
}
async function Qe(r) {
  const e = Mt.get(r.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${r.Compression}`);
  const t = await e();
  return new t(r);
}
ee([void 0, 1], () => import("./raw-DY_9lMF8.js").then((r) => r.default));
ee(5, () => import("./lzw-DQIuJ67x.js").then((r) => r.default));
ee(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
ee(7, () => import("./jpeg-CykFp3Z7.js").then((r) => r.default));
ee([8, 32946], () => import("./deflate-CqDVFXkE.js").then((r) => r.default));
ee(32773, () => import("./packbits-l3N1ftN-.js").then((r) => r.default));
ee(
  34887,
  () => import("./lerc-CTvNykmP.js").then(async (r) => (await r.zstd.init(), r)).then((r) => r.default)
);
ee(50001, () => import("./webimage-C2HnjqC8.js").then((r) => r.default));
function Pe(r, e, t, n = 1) {
  return new (Object.getPrototypeOf(r)).constructor(e * t * n);
}
function vr(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Pe(o, n, i);
    for (let f = 0; f < i; ++f) {
      const u = Math.min(Math.round(a * f), t - 1);
      for (let l = 0; l < n; ++l) {
        const h = Math.min(Math.round(s * l), e - 1), p = o[u * e + h];
        c[f * n + l] = p;
      }
    }
    return c;
  });
}
function le(r, e, t) {
  return (1 - t) * r + t * e;
}
function Er(r, e, t, n, i) {
  const s = e / n, a = t / i;
  return r.map((o) => {
    const c = Pe(o, n, i);
    for (let f = 0; f < i; ++f) {
      const u = a * f, l = Math.floor(u), h = Math.min(Math.ceil(u), t - 1);
      for (let p = 0; p < n; ++p) {
        const g = s * p, w = g % 1, m = Math.floor(g), b = Math.min(Math.ceil(g), e - 1), x = o[l * e + m], A = o[l * e + b], T = o[h * e + m], d = o[h * e + b], y = le(
          le(x, A, w),
          le(T, d, w),
          u % 1
        );
        c[f * n + p] = y;
      }
    }
    return c;
  });
}
function Or(r, e, t, n, i, s = "nearest") {
  switch (s.toLowerCase()) {
    case "nearest":
      return vr(r, e, t, n, i);
    case "bilinear":
    case "linear":
      return Er(r, e, t, n, i);
    default:
      throw new Error(`Unsupported resampling method: '${s}'`);
  }
}
function Br(r, e, t, n, i, s) {
  const a = e / n, o = t / i, c = Pe(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const u = Math.min(Math.round(o * f), t - 1);
    for (let l = 0; l < n; ++l) {
      const h = Math.min(Math.round(a * l), e - 1);
      for (let p = 0; p < s; ++p) {
        const g = r[u * e * s + h * s + p];
        c[f * n * s + l * s + p] = g;
      }
    }
  }
  return c;
}
function _r(r, e, t, n, i, s) {
  const a = e / n, o = t / i, c = Pe(r, n, i, s);
  for (let f = 0; f < i; ++f) {
    const u = o * f, l = Math.floor(u), h = Math.min(Math.ceil(u), t - 1);
    for (let p = 0; p < n; ++p) {
      const g = a * p, w = g % 1, m = Math.floor(g), b = Math.min(Math.ceil(g), e - 1);
      for (let x = 0; x < s; ++x) {
        const A = r[l * e * s + m * s + x], T = r[l * e * s + b * s + x], d = r[h * e * s + m * s + x], y = r[h * e * s + b * s + x], I = le(
          le(A, T, w),
          le(d, y, w),
          u % 1
        );
        c[f * n * s + p * s + x] = I;
      }
    }
  }
  return c;
}
function Mr(r, e, t, n, i, s, a = "nearest") {
  switch (a.toLowerCase()) {
    case "nearest":
      return Br(
        r,
        e,
        t,
        n,
        i,
        s
      );
    case "bilinear":
    case "linear":
      return _r(
        r,
        e,
        t,
        n,
        i,
        s
      );
    default:
      throw new Error(`Unsupported resampling method: '${a}'`);
  }
}
function Ur(r, e, t) {
  let n = 0;
  for (let i = e; i < t; ++i)
    n += r[i];
  return n;
}
function Be(r, e, t) {
  switch (r) {
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
function Lr(r, e) {
  return (r === 1 || r === 2) && e <= 32 && e % 8 === 0 ? !1 : !(r === 3 && (e === 16 || e === 32 || e === 64));
}
function Nr(r, e, t, n, i, s, a) {
  const o = new DataView(r), c = t === 2 ? a * s : a * s * n, f = t === 2 ? 1 : n, u = Be(e, i, c), l = parseInt("1".repeat(i), 2);
  if (e === 1) {
    let h;
    t === 1 ? h = n * i : h = i;
    let p = s * h;
    p & 7 && (p = p + 7 & -8);
    for (let g = 0; g < a; ++g) {
      const w = g * p;
      for (let m = 0; m < s; ++m) {
        const b = w + m * f * i;
        for (let x = 0; x < f; ++x) {
          const A = b + x * i, T = (g * s + m) * f + x, d = Math.floor(A / 8), y = A % 8;
          if (y + i <= 8)
            u[T] = o.getUint8(d) >> 8 - i - y & l;
          else if (y + i <= 16)
            u[T] = o.getUint16(d) >> 16 - i - y & l;
          else if (y + i <= 24) {
            const I = o.getUint16(d) << 8 | o.getUint8(d + 2);
            u[T] = I >> 24 - i - y & l;
          } else
            u[T] = o.getUint32(d) >> 32 - i - y & l;
        }
      }
    }
  }
  return u.buffer;
}
class et {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, n, i, s, a) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = n, this.littleEndian = i, this.tiles = s ? {} : null, this.isTiled = !e.StripOffsets;
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
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, n = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (n <= 8)
          return DataView.prototype.getUint8;
        if (n <= 16)
          return DataView.prototype.getUint16;
        if (n <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (n <= 8)
          return DataView.prototype.getInt8;
        if (n <= 16)
          return DataView.prototype.getInt16;
        if (n <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (n) {
          case 16:
            return function(i, s) {
              return xt(this, i, s);
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
    const n = this.getSampleFormat(e), i = this.getBitsPerSample(e);
    return Be(n, i, t);
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
  async getTileOrStrip(e, t, n, i, s) {
    const a = Math.ceil(this.getWidth() / this.getTileWidth()), o = Math.ceil(this.getHeight() / this.getTileHeight());
    let c;
    const { tiles: f } = this;
    this.planarConfiguration === 1 ? c = t * a + e : this.planarConfiguration === 2 && (c = n * a * o + t * a + e);
    let u, l;
    this.isTiled ? (u = this.fileDirectory.TileOffsets[c], l = this.fileDirectory.TileByteCounts[c]) : (u = this.fileDirectory.StripOffsets[c], l = this.fileDirectory.StripByteCounts[c]);
    const h = (await this.source.fetch([{ offset: u, length: l }], s))[0];
    let p;
    return f === null || !f[c] ? (p = (async () => {
      let g = await i.decode(this.fileDirectory, h);
      const w = this.getSampleFormat(), m = this.getBitsPerSample();
      return Lr(w, m) && (g = Nr(
        g,
        w,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        m,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), g;
    })(), f !== null && (f[c] = p)) : p = f[c], { x: e, y: t, sample: n, data: await p };
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
  async _readRaster(e, t, n, i, s, a, o, c, f) {
    const u = this.getTileWidth(), l = this.getTileHeight(), h = this.getWidth(), p = this.getHeight(), g = Math.max(Math.floor(e[0] / u), 0), w = Math.min(
      Math.ceil(e[2] / u),
      Math.ceil(h / u)
    ), m = Math.max(Math.floor(e[1] / l), 0), b = Math.min(
      Math.ceil(e[3] / l),
      Math.ceil(p / l)
    ), x = e[2] - e[0];
    let A = this.getBytesPerPixel();
    const T = [], d = [];
    for (let S = 0; S < t.length; ++S)
      this.planarConfiguration === 1 ? T.push(Ur(this.fileDirectory.BitsPerSample, 0, t[S]) / 8) : T.push(0), d.push(this.getReaderForSample(t[S]));
    const y = [], { littleEndian: I } = this;
    for (let S = m; S < b; ++S)
      for (let k = g; k < w; ++k) {
        let R;
        this.planarConfiguration === 1 && (R = this.getTileOrStrip(k, S, 0, s, f));
        for (let v = 0; v < t.length; ++v) {
          const F = v, U = t[v];
          this.planarConfiguration === 2 && (A = this.getSampleByteSize(U), R = this.getTileOrStrip(k, S, U, s, f));
          const D = R.then((P) => {
            const G = P.data, B = new DataView(G), H = this.getBlockHeight(P.y), E = P.y * l, O = P.x * u, _ = E + H, M = (P.x + 1) * u, W = d[F], J = Math.min(H, H - (_ - e[3]), p - E), ge = Math.min(u, u - (M - e[2]), h - O);
            for (let de = Math.max(0, e[1] - E); de < J; ++de)
              for (let pe = Math.max(0, e[0] - O); pe < ge; ++pe) {
                const Ht = (de * u + pe) * A, rt = W.call(
                  B,
                  Ht + T[F],
                  I
                );
                let xe;
                i ? (xe = (de + E - e[1]) * x * t.length + (pe + O - e[0]) * t.length + F, n[xe] = rt) : (xe = (de + E - e[1]) * x + pe + O - e[0], n[F][xe] = rt);
              }
          });
          y.push(D);
        }
      }
    if (await Promise.all(y), a && e[2] - e[0] !== a || o && e[3] - e[1] !== o) {
      let S;
      return i ? S = Mr(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        t.length,
        c
      ) : S = Or(
        n,
        e[2] - e[0],
        e[3] - e[1],
        a,
        o,
        c
      ), S.width = a, S.height = o, S;
    }
    return n.width = a || e[2] - e[0], n.height = o || e[3] - e[1], n;
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
    interleave: n,
    pool: i = null,
    width: s,
    height: a,
    resampleMethod: o,
    fillValue: c,
    signal: f
  } = {}) {
    const u = e || [0, 0, this.getWidth(), this.getHeight()];
    if (u[0] > u[2] || u[1] > u[3])
      throw new Error("Invalid subsets");
    const l = u[2] - u[0], h = u[3] - u[1], p = l * h, g = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let x = 0; x < g; ++x)
        t.push(x);
    else
      for (let x = 0; x < t.length; ++x)
        if (t[x] >= g)
          return Promise.reject(new RangeError(`Invalid sample index '${t[x]}'.`));
    let w;
    if (n) {
      const x = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, A = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      w = Be(x, A, p * t.length), c && w.fill(c);
    } else {
      w = [];
      for (let x = 0; x < t.length; ++x) {
        const A = this.getArrayForSample(t[x], p);
        Array.isArray(c) && x < c.length ? A.fill(c[x]) : c && !Array.isArray(c) && A.fill(c), w.push(A);
      }
    }
    const m = i || await Qe(this.fileDirectory);
    return await this._readRaster(
      u,
      t,
      w,
      n,
      m,
      s,
      a,
      o,
      f
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
    pool: n = null,
    width: i,
    height: s,
    resampleMethod: a,
    enableAlpha: o = !1,
    signal: c
  } = {}) {
    const f = e || [0, 0, this.getWidth(), this.getHeight()];
    if (f[0] > f[2] || f[1] > f[3])
      throw new Error("Invalid subsets");
    const u = this.fileDirectory.PhotometricInterpretation;
    if (u === N.RGB) {
      let b = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Ct.Unspecified && o) {
        b = [];
        for (let x = 0; x < this.fileDirectory.BitsPerSample.length; x += 1)
          b.push(x);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: b,
        pool: n,
        width: i,
        height: s,
        resampleMethod: a,
        signal: c
      });
    }
    let l;
    switch (u) {
      case N.WhiteIsZero:
      case N.BlackIsZero:
      case N.Palette:
        l = [0];
        break;
      case N.CMYK:
        l = [0, 1, 2, 3];
        break;
      case N.YCbCr:
      case N.CIELab:
        l = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const h = {
      window: f,
      interleave: !0,
      samples: l,
      pool: n,
      width: i,
      height: s,
      resampleMethod: a,
      signal: c
    }, { fileDirectory: p } = this, g = await this.readRasters(h), w = 2 ** this.fileDirectory.BitsPerSample[0];
    let m;
    switch (u) {
      case N.WhiteIsZero:
        m = Gt(g, w);
        break;
      case N.BlackIsZero:
        m = vt(g, w);
        break;
      case N.Palette:
        m = Et(g, p.ColorMap);
        break;
      case N.CMYK:
        m = Ot(g);
        break;
      case N.YCbCr:
        m = Bt(g);
        break;
      case N.CIELab:
        m = _t(g);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const b = new Uint8Array(m.length / 3), x = new Uint8Array(m.length / 3), A = new Uint8Array(m.length / 3);
      for (let T = 0, d = 0; T < m.length; T += 3, ++d)
        b[d] = m[T], x[d] = m[T + 1], A[d] = m[T + 2];
      m = [b, x, A];
    }
    return m.width = g.width, m.height = g.height, m;
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
    const n = this.fileDirectory.GDAL_METADATA;
    let i = Ar(n, "Item");
    e === null ? i = i.filter((s) => ve(s, "sample") === void 0) : i = i.filter((s) => Number(ve(s, "sample")) === e);
    for (let s = 0; s < i.length; ++s) {
      const a = i[s];
      t[ve(a, "name")] = a.inner;
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
    const t = this.fileDirectory.ModelPixelScale, n = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (n)
      return n[1] === 0 && n[4] === 0 ? [
        n[0],
        -n[5],
        n[10]
      ] : [
        Math.sqrt(n[0] * n[0] + n[4] * n[4]),
        -Math.sqrt(n[1] * n[1] + n[5] * n[5]),
        n[10]
      ];
    if (e) {
      const [i, s, a] = e.getResolution();
      return [
        i * e.getWidth() / this.getWidth(),
        s * e.getHeight() / this.getHeight(),
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
    const t = this.getHeight(), n = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [i, s, a, o, c, f, u, l] = this.fileDirectory.ModelTransformation, p = [
        [0, 0],
        [0, t],
        [n, 0],
        [n, t]
      ].map(([m, b]) => [
        o + i * m + s * b,
        l + c * m + f * b
      ]), g = p.map((m) => m[0]), w = p.map((m) => m[1]);
      return [
        Math.min(...g),
        Math.min(...w),
        Math.max(...g),
        Math.max(...w)
      ];
    } else {
      const i = this.getOrigin(), s = this.getResolution(), a = i[0], o = i[1], c = a + s[0] * n, f = o + s[1] * t;
      return [
        Math.min(a, c),
        Math.min(o, f),
        Math.max(a, c),
        Math.max(o, f)
      ];
    }
  }
}
class jr {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const n = this.getUint32(e, t), i = this.getUint32(e + 4, t);
    let s;
    if (t) {
      if (s = n + 2 ** 32 * i, !Number.isSafeInteger(s))
        throw new Error(
          `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return s;
    }
    if (s = 2 ** 32 * n + i, !Number.isSafeInteger(s))
      throw new Error(
        `${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return s;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let n = 0;
    const i = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let s = !0;
    for (let a = 0; a < 8; a++) {
      let o = this._dataView.getUint8(e + (t ? a : 7 - a));
      i && (s ? o !== 0 && (o = ~(o - 1) & 255, s = !1) : o = ~o & 255), n += o * 256 ** a;
    }
    return i && (n = -n), n;
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
    return xt(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class Kr {
  constructor(e, t, n, i) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = n, this._bigTiff = i;
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
    const t = this.readUint32(e), n = this.readUint32(e + 4);
    let i;
    if (this._littleEndian) {
      if (i = t + 2 ** 32 * n, !Number.isSafeInteger(i))
        throw new Error(
          `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return i;
    }
    if (i = 2 ** 32 * t + n, !Number.isSafeInteger(i))
      throw new Error(
        `${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return i;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const n = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let i = !0;
    for (let s = 0; s < 8; s++) {
      let a = this._dataView.getUint8(
        e + (this._littleEndian ? s : 7 - s)
      );
      n && (i ? a !== 0 && (a = ~(a - 1) & 255, i = !1) : a = ~a & 255), t += a * 256 ** s;
    }
    return n && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const zr = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class Ut {
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
  constructor(e = zr, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((n) => {
      import("./decoder-DJlmx386.js").then((i) => {
        n(i.create);
      });
    }), this._awaitingDecoder.then((n) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let i = 0; i < e; i++)
        this.workers.push({ worker: n(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? Qe(e).then((n) => n.decode(e, t)) : new Promise((n) => {
      const i = this.workers.find((o) => o.idle) || this.workers[Math.floor(Math.random() * this.size)];
      i.idle = !1;
      const s = this.messageId++, a = (o) => {
        o.data.id === s && (i.idle = !0, n(o.data.decoded), i.worker.removeEventListener("message", a));
      };
      i.worker.addEventListener("message", a), i.worker.postMessage({ fileDirectory: e, buffer: t, id: s }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const st = `\r
\r
`;
function Lt(r) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(r);
  const e = {};
  for (const [t, n] of r)
    e[t.toLowerCase()] = n;
  return e;
}
function Hr(r) {
  const e = r.split(`\r
`).map((t) => {
    const n = t.split(":").map((i) => i.trim());
    return n[0] = n[0].toLowerCase(), n;
  });
  return Lt(e);
}
function qr(r) {
  const [e, ...t] = r.split(";").map((i) => i.trim()), n = t.map((i) => i.split("="));
  return { type: e, params: Lt(n) };
}
function _e(r) {
  let e, t, n;
  return r && ([, e, t, n] = r.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), n = parseInt(n, 10)), { start: e, end: t, total: n };
}
function Vr(r, e) {
  let t = null;
  const n = new TextDecoder("ascii"), i = [], s = `--${e}`, a = `${s}--`;
  for (let o = 0; o < 10; ++o)
    n.decode(
      new Uint8Array(r, o, s.length)
    ) === s && (t = o);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < r.byteLength; ) {
    const o = n.decode(
      new Uint8Array(
        r,
        t,
        Math.min(s.length + 1024, r.byteLength - t)
      )
    );
    if (o.length === 0 || o.startsWith(a))
      break;
    if (!o.startsWith(s))
      throw new Error("Part does not start with boundary");
    const c = o.substr(s.length + 2);
    if (c.length === 0)
      break;
    const f = c.indexOf(st), u = Hr(c.substr(0, f)), { start: l, end: h, total: p } = _e(u["content-range"]), g = t + s.length + f + st.length, w = parseInt(h, 10) + 1 - parseInt(l, 10);
    i.push({
      headers: u,
      data: r.slice(g, g + w),
      offset: l,
      length: w,
      fileSize: p
    }), t = g + w + 4;
  }
  return i;
}
class be {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((n) => this.fetchSlice(n, t))
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
class Wr extends Map {
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
      for (const [t, n] of e)
        this.onEviction(t, n.value);
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
    const n = t.get(e);
    return this._getItemValue(e, n);
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t);
  }
  *_entriesAscending() {
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield e);
    }
    for (const e of this.cache) {
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield e);
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
  set(e, t, { maxAge: n = this.maxAge } = {}) {
    const i = typeof n == "number" && n !== Number.POSITIVE_INFINITY ? Date.now() + n : void 0;
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
    const t = [...this._entriesAscending()], n = t.length - e;
    n < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (n > 0 && this._emitEvictions(t.slice(0, n)), this.oldCache = new Map(t.slice(n)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
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
      const [t, n] = e;
      this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
    for (const e of this.oldCache) {
      const [t, n] = e;
      this.cache.has(t) || this._deleteIfExpired(t, n) === !1 && (yield [t, n.value]);
    }
  }
  *entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [i, s] = n;
      this._deleteIfExpired(i, s) === !1 && (yield [i, s.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const n = e[t], [i, s] = n;
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
    for (const [n, i] of this.entriesAscending())
      e.call(t, i, n, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
function Nt(r, e) {
  for (const t in e)
    e.hasOwnProperty(t) && (r[t] = e[t]);
}
function jt(r, e) {
  return r.length < e.length ? !1 : r.substr(r.length - e.length) === e;
}
function $r(r, e) {
  const { length: t } = r;
  for (let n = 0; n < t; n++)
    e(r[n], n);
}
function tt(r) {
  const e = {};
  for (const t in r)
    if (r.hasOwnProperty(t)) {
      const n = r[t];
      e[n] = t;
    }
  return e;
}
function z(r, e) {
  const t = [];
  for (let n = 0; n < r; n++)
    t.push(e(n));
  return t;
}
async function Yr(r) {
  return new Promise((e) => setTimeout(e, r));
}
function Xr(r, e) {
  const t = Array.isArray(r) ? r : Array.from(r), n = Array.isArray(e) ? e : Array.from(e);
  return t.map((i, s) => [i, n[s]]);
}
class ie extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, ie), this.name = "AbortError";
  }
}
class Zr extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Jr = Zr;
class Qr {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(e, t, n = null) {
    this.offset = e, this.length = t, this.data = n;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class ot {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(e, t, n) {
    this.offset = e, this.length = t, this.blockIds = n;
  }
}
class en extends be {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: n = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Wr({
      maxSize: n,
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
    const n = [], i = [], s = [];
    this.evictedBlocks.clear();
    for (const { offset: h, length: p } of e) {
      let g = h + p;
      const { fileSize: w } = this;
      w !== null && (g = Math.min(g, w));
      const m = Math.floor(h / this.blockSize) * this.blockSize;
      for (let b = m; b < g; b += this.blockSize) {
        const x = Math.floor(b / this.blockSize);
        !this.blockCache.has(x) && !this.blockRequests.has(x) && (this.blockIdsToFetch.add(x), i.push(x)), this.blockRequests.has(x) && n.push(this.blockRequests.get(x)), s.push(x);
      }
    }
    await Yr(), this.fetchBlocks(t);
    const a = [];
    for (const h of i)
      this.blockRequests.has(h) && a.push(this.blockRequests.get(h));
    await Promise.allSettled(n), await Promise.allSettled(a);
    const o = [], c = s.filter((h) => this.abortedBlockIds.has(h) || !this.blockCache.has(h));
    if (c.forEach((h) => this.blockIdsToFetch.add(h)), c.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const h of c) {
        const p = this.blockRequests.get(h);
        if (!p)
          throw new Error(`Block ${h} is not in the block requests`);
        o.push(p);
      }
      await Promise.allSettled(o);
    }
    if (t && t.aborted)
      throw new ie("Request was aborted");
    const f = s.map((h) => this.blockCache.get(h) || this.evictedBlocks.get(h)), u = f.filter((h) => !h);
    if (u.length)
      throw new Jr(u, "Request failed");
    const l = new Map(Xr(s, f));
    return this.readSliceData(e, l);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), n = this.source.fetch(t, e);
      for (let i = 0; i < t.length; ++i) {
        const s = t[i];
        for (const a of s.blockIds)
          this.blockRequests.set(a, (async () => {
            try {
              const o = (await n)[i], c = a * this.blockSize, f = c - o.offset, u = Math.min(f + this.blockSize, o.data.byteLength), l = o.data.slice(f, u), h = new Qr(
                c,
                l.byteLength,
                l,
                a
              );
              this.blockCache.set(a, h), this.abortedBlockIds.delete(a);
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
    let n = [], i = null;
    const s = [];
    for (const a of t)
      i === null || i + 1 === a ? (n.push(a), i = a) : (s.push(new ot(
        n[0] * this.blockSize,
        n.length * this.blockSize,
        n
      )), n = [a], i = a);
    return s.push(new ot(
      n[0] * this.blockSize,
      n.length * this.blockSize,
      n
    )), s;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((n) => {
      let i = n.offset + n.length;
      this.fileSize !== null && (i = Math.min(this.fileSize, i));
      const s = Math.floor(n.offset / this.blockSize), a = Math.floor(i / this.blockSize), o = new ArrayBuffer(n.length), c = new Uint8Array(o);
      for (let f = s; f <= a; ++f) {
        const u = t.get(f), l = u.offset - n.offset, h = u.top - i;
        let p = 0, g = 0, w;
        l < 0 ? p = -l : l > 0 && (g = l), h < 0 ? w = u.length - p : w = i - u.offset - p;
        const m = new Uint8Array(u.data, p, w);
        c.set(m, g);
      }
      return o;
    });
  }
}
class De {
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
class ke {
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
class tn extends De {
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
class rn extends ke {
  constructor(e, t) {
    super(e), this.credentials = t;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    const n = await fetch(this.url, {
      headers: e,
      credentials: this.credentials,
      signal: t
    });
    return new tn(n);
  }
}
class nn extends De {
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
class sn extends ke {
  constructRequest(e, t) {
    return new Promise((n, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", this.url), s.responseType = "arraybuffer";
      for (const [a, o] of Object.entries(e))
        s.setRequestHeader(a, o);
      s.onload = () => {
        const a = s.response;
        n(new nn(s, a));
      }, s.onerror = i, s.onabort = () => i(new ie("Request aborted")), s.send(), t && (t.aborted && s.abort(), t.addEventListener("abort", () => s.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const ce = {};
class on extends De {
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
class an extends ke {
  constructor(e) {
    super(e), this.parsedUrl = ce.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", ce);
  }
  constructRequest(e, t) {
    return new Promise((n, i) => {
      const s = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (a) => {
          const o = new Promise((c) => {
            const f = [];
            a.on("data", (u) => {
              f.push(u);
            }), a.on("end", () => {
              const u = Buffer.concat(f).buffer;
              c(u);
            }), a.on("error", i);
          });
          n(new on(a, o));
        }
      );
      s.on("error", i), t && (t.aborted && s.destroy(new ie("Request aborted")), t.addEventListener("abort", () => s.destroy(new ie("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Ce extends be {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, n, i) {
    super(), this.client = e, this.headers = t, this.maxRanges = n, this.allowFullFile = i, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(e, t) {
    return this.maxRanges >= e.length ? this.fetchSlices(e, t) : (this.maxRanges > 0 && e.length > 1, Promise.all(
      e.map((n) => this.fetchSlice(n, t))
    ));
  }
  async fetchSlices(e, t) {
    const n = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${e.map(({ offset: i, length: s }) => `${i}-${i + s}`).join(",")}`
      },
      signal: t
    });
    if (n.ok)
      if (n.status === 206) {
        const { type: i, params: s } = qr(n.getHeader("content-type"));
        if (i === "multipart/byteranges") {
          const l = Vr(await n.getData(), s.boundary);
          return this._fileSize = l[0].fileSize || null, l;
        }
        const a = await n.getData(), { start: o, end: c, total: f } = _e(n.getHeader("content-range"));
        this._fileSize = f || null;
        const u = [{
          data: a,
          offset: o,
          length: c - o
        }];
        if (e.length > 1) {
          const l = await Promise.all(e.slice(1).map((h) => this.fetchSlice(h, t)));
          return u.concat(l);
        }
        return u;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const i = await n.getData();
        return this._fileSize = i.byteLength, [{
          data: i,
          offset: 0,
          length: i.byteLength
        }];
      }
    else throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: n, length: i } = e, s = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${n}-${n + i}`
      },
      signal: t
    });
    if (s.ok)
      if (s.status === 206) {
        const a = await s.getData(), { total: o } = _e(s.getHeader("content-range"));
        return this._fileSize = o || null, {
          data: a,
          offset: n,
          length: i
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const a = await s.getData();
        return this._fileSize = a.byteLength, {
          data: a,
          offset: 0,
          length: a.byteLength
        };
      }
    else throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function Re(r, { blockSize: e, cacheSize: t }) {
  return e === null ? r : new en(r, { blockSize: e, cacheSize: t });
}
function ln(r, { headers: e = {}, credentials: t, maxRanges: n = 0, allowFullFile: i = !1, ...s } = {}) {
  const a = new rn(r, t), o = new Ce(a, e, n, i);
  return Re(o, s);
}
function cn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new sn(r), a = new Ce(s, e, t, n);
  return Re(a, i);
}
function fn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new an(r), a = new Ce(s, e, t, n);
  return Re(a, i);
}
function hn(r, { headers: e = {}, maxRanges: t = 0, allowFullFile: n = !1, ...i } = {}) {
  const s = new Ce(r, e, t, n);
  return Re(s, i);
}
function Me(r, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? ln(r, t) : typeof XMLHttpRequest < "u" ? cn(r, t) : fn(r, t);
}
class un extends be {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, t) {
    if (t && t.aborted)
      throw new ie("Request aborted");
    return this.arrayBuffer.slice(e.offset, e.offset + e.length);
  }
}
function gn(r) {
  return new un(r);
}
class dn extends be {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((n, i) => {
      const s = this.file.slice(e.offset, e.offset + e.length), a = new FileReader();
      a.onload = (o) => n(o.target.result), a.onerror = i, a.onabort = i, a.readAsArrayBuffer(s), t && t.addEventListener("abort", () => a.abort());
    });
  }
}
function pn(r) {
  return new dn(r);
}
function yn(r) {
  return new Promise((e, t) => {
    ce.close(r, (n) => {
      n ? t(n) : e();
    });
  });
}
function mn(r, e, t = void 0) {
  return new Promise((n, i) => {
    ce.open(r, e, t, (s, a) => {
      s ? i(s) : n(a);
    });
  });
}
function wn(...r) {
  return new Promise((e, t) => {
    ce.read(...r, (n, i, s) => {
      n ? t(n) : e({ bytesRead: i, buffer: s });
    });
  });
}
class bn extends be {
  constructor(e) {
    super(), this.path = e, this.openRequest = mn(e, "r");
  }
  async fetchSlice(e) {
    const t = await this.openRequest, { buffer: n } = await wn(
      t,
      Buffer.alloc(e.length),
      0,
      e.length,
      e.offset
    );
    return n.buffer;
  }
  async close() {
    const e = await this.openRequest;
    await yn(e);
  }
}
function xn(r) {
  return new bn(r);
}
const In = tt(ne), Tn = tt(ae), Z = {};
Nt(Z, In);
Nt(Z, Tn);
const Sn = tt(ye), Se = 1e3, j = {
  nextZero: (r, e) => {
    let t = e;
    for (; r[t] !== 0; )
      t++;
    return t;
  },
  readUshort: (r, e) => r[e] << 8 | r[e + 1],
  readShort: (r, e) => {
    const t = j.ui8;
    return t[0] = r[e + 1], t[1] = r[e + 0], j.i16[0];
  },
  readInt: (r, e) => {
    const t = j.ui8;
    return t[0] = r[e + 3], t[1] = r[e + 2], t[2] = r[e + 1], t[3] = r[e + 0], j.i32[0];
  },
  readUint: (r, e) => {
    const t = j.ui8;
    return t[0] = r[e + 3], t[1] = r[e + 2], t[2] = r[e + 1], t[3] = r[e + 0], j.ui32[0];
  },
  readASCII: (r, e, t) => t.map((n) => String.fromCharCode(r[e + n])).join(""),
  readFloat: (r, e) => {
    const t = j.ui8;
    return z(4, (n) => {
      t[n] = r[e + 3 - n];
    }), j.fl32[0];
  },
  readDouble: (r, e) => {
    const t = j.ui8;
    return z(8, (n) => {
      t[n] = r[e + 7 - n];
    }), j.fl64[0];
  },
  writeUshort: (r, e, t) => {
    r[e] = t >> 8 & 255, r[e + 1] = t & 255;
  },
  writeUint: (r, e, t) => {
    r[e] = t >> 24 & 255, r[e + 1] = t >> 16 & 255, r[e + 2] = t >> 8 & 255, r[e + 3] = t >> 0 & 255;
  },
  writeASCII: (r, e, t) => {
    z(t.length, (n) => {
      r[e + n] = t.charCodeAt(n);
    });
  },
  ui8: new Uint8Array(8)
};
j.fl64 = new Float64Array(j.ui8.buffer);
j.writeDouble = (r, e, t) => {
  j.fl64[0] = t, z(8, (n) => {
    r[e + n] = j.ui8[7 - n];
  });
};
const An = (r, e, t, n) => {
  let i = t;
  const s = Object.keys(n).filter((o) => o != null && o !== "undefined");
  r.writeUshort(e, i, s.length), i += 2;
  let a = i + 12 * s.length + 4;
  for (const o of s) {
    let c = null;
    typeof o == "number" ? c = o : typeof o == "string" && (c = parseInt(o, 10));
    const f = Fe[c], u = Sn[f];
    if (f == null || f === void 0 || typeof f > "u")
      throw new Error(`unknown type of tag: ${c}`);
    let l = n[o];
    if (l === void 0)
      throw new Error(`failed to get value for key ${o}`);
    f === "ASCII" && typeof l == "string" && jt(l, "\0") === !1 && (l += "\0");
    const h = l.length;
    r.writeUshort(e, i, c), i += 2, r.writeUshort(e, i, u), i += 2, r.writeUint(e, i, h), i += 4;
    let p = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][u] * h, g = i;
    p > 4 && (r.writeUint(e, i, a), g = a), f === "ASCII" ? r.writeASCII(e, g, l) : f === "SHORT" ? z(h, (w) => {
      r.writeUshort(e, g + 2 * w, l[w]);
    }) : f === "LONG" ? z(h, (w) => {
      r.writeUint(e, g + 4 * w, l[w]);
    }) : f === "RATIONAL" ? z(h, (w) => {
      r.writeUint(e, g + 8 * w, Math.round(l[w] * 1e4)), r.writeUint(e, g + 8 * w + 4, 1e4);
    }) : f === "DOUBLE" && z(h, (w) => {
      r.writeDouble(e, g + 8 * w, l[w]);
    }), p > 4 && (p += p & 1, a += p), i += 4;
  }
  return [i, a];
}, Fn = (r) => {
  const e = new Uint8Array(Se);
  let t = 4;
  const n = j;
  e[0] = 77, e[1] = 77, e[3] = 42;
  let i = 8;
  if (n.writeUint(e, t, i), t += 4, r.forEach((a, o) => {
    const c = An(n, e, i, a);
    i = c[1], o < r.length - 1 && n.writeUint(e, c[0], i);
  }), e.slice)
    return e.slice(0, i).buffer;
  const s = new Uint8Array(i);
  for (let a = 0; a < i; a++)
    s[a] = e[a];
  return s.buffer;
}, Pn = (r, e, t, n) => {
  if (t == null)
    throw new Error(`you passed into encodeImage a width of type ${t}`);
  if (e == null)
    throw new Error(`you passed into encodeImage a width of type ${e}`);
  const i = {
    256: [e],
    // ImageWidth
    257: [t],
    // ImageLength
    273: [Se],
    // strips offset
    278: [t],
    // RowsPerStrip
    305: "geotiff.js"
    // no array for ASCII(Z)
  };
  if (n)
    for (const f in n)
      n.hasOwnProperty(f) && (i[f] = n[f]);
  const s = new Uint8Array(Fn([i])), a = new Uint8Array(r), o = i[277], c = new Uint8Array(Se + e * t * o);
  return z(s.length, (f) => {
    c[f] = s[f];
  }), $r(a, (f, u) => {
    c[Se + u] = f;
  }), c.buffer;
}, Dn = (r) => {
  const e = {};
  for (const t in r)
    t !== "StripOffsets" && (Z[t] || console.error(t, "not in name2code:", Object.keys(Z)), e[Z[t]] = r[t]);
  return e;
}, kn = (r) => Array.isArray(r) ? r : [r], Cn = [
  ["Compression", 1],
  // no compression
  ["PlanarConfiguration", 1],
  ["ExtraSamples", 0]
];
function Rn(r, e) {
  const t = typeof r[0] == "number";
  let n, i, s, a;
  t ? (n = e.height || e.ImageLength, s = e.width || e.ImageWidth, i = r.length / (n * s), a = r) : (i = r.length, n = r[0].length, s = r[0][0].length, a = [], z(n, (u) => {
    z(s, (l) => {
      z(i, (h) => {
        a.push(r[h][u][l]);
      });
    });
  })), e.ImageLength = n, delete e.height, e.ImageWidth = s, delete e.width, e.BitsPerSample || (e.BitsPerSample = z(i, () => 8)), Cn.forEach((u) => {
    const l = u[0];
    if (!e[l]) {
      const h = u[1];
      e[l] = h;
    }
  }), e.PhotometricInterpretation || (e.PhotometricInterpretation = e.BitsPerSample.length === 3 ? 2 : 1), e.SamplesPerPixel || (e.SamplesPerPixel = [i]), e.StripByteCounts || (e.StripByteCounts = [i * n * s]), e.ModelPixelScale || (e.ModelPixelScale = [360 / s, 180 / n, 0]), e.SampleFormat || (e.SampleFormat = z(i, () => 1)), !e.hasOwnProperty("GeographicTypeGeoKey") && !e.hasOwnProperty("ProjectedCSTypeGeoKey") && (e.GeographicTypeGeoKey = 4326, e.ModelTiepoint = [0, 0, 0, -180, 90, 0], e.GeogCitationGeoKey = "WGS 84", e.GTModelTypeGeoKey = 2);
  const o = Object.keys(e).filter((u) => jt(u, "GeoKey")).sort((u, l) => Z[u] - Z[l]);
  if (!e.GeoAsciiParams) {
    let u = "";
    o.forEach((l) => {
      const h = Number(Z[l]);
      Fe[h] === "ASCII" && (u += `${e[l].toString()}\0`);
    }), u.length > 0 && (e.GeoAsciiParams = u);
  }
  if (!e.GeoKeyDirectory) {
    const l = [1, 1, 0, o.length];
    o.forEach((h) => {
      const p = Number(Z[h]);
      l.push(p);
      let g, w, m;
      Fe[p] === "SHORT" ? (g = 1, w = 0, m = e[h]) : h === "GeogCitationGeoKey" ? (g = e.GeoAsciiParams.length, w = Number(Z.GeoAsciiParams), m = 0) : console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${h}`), l.push(w), l.push(g), l.push(m);
    }), e.GeoKeyDirectory = l;
  }
  for (const u of o)
    e.hasOwnProperty(u) && delete e[u];
  [
    "Compression",
    "ExtraSamples",
    "GeographicTypeGeoKey",
    "GTModelTypeGeoKey",
    "GTRasterTypeGeoKey",
    "ImageLength",
    // synonym of ImageHeight
    "ImageWidth",
    "Orientation",
    "PhotometricInterpretation",
    "ProjectedCSTypeGeoKey",
    "PlanarConfiguration",
    "ResolutionUnit",
    "SamplesPerPixel",
    "XPosition",
    "YPosition",
    "RowsPerStrip"
  ].forEach((u) => {
    e[u] && (e[u] = kn(e[u]));
  });
  const c = Dn(e);
  return Pn(a, s, n, c);
}
class Gn {
  log() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
  time() {
  }
  timeEnd() {
  }
}
function vn(r = new Gn()) {
}
function En(r, e) {
  let t = r.length - e, n = 0;
  do {
    for (let i = e; i > 0; i--)
      r[n + e] += r[n], n++;
    t -= e;
  } while (t > 0);
}
function On(r, e, t) {
  let n = 0, i = r.length;
  const s = i / t;
  for (; i > e; ) {
    for (let o = e; o > 0; --o)
      r[n + e] += r[n], ++n;
    i -= e;
  }
  const a = r.slice();
  for (let o = 0; o < s; ++o)
    for (let c = 0; c < t; ++c)
      r[t * o + c] = a[(t - c - 1) * s + o];
}
function Bn(r, e, t, n, i, s) {
  if (e === 1)
    return r;
  for (let c = 0; c < i.length; ++c) {
    if (i[c] % 8 !== 0)
      throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
    if (i[c] !== i[0])
      throw new Error("When decoding with predictor, all samples must have the same size.");
  }
  const a = i[0] / 8, o = s === 2 ? 1 : i.length;
  for (let c = 0; c < n && !(c * o * t * a >= r.byteLength); ++c) {
    let f;
    if (e === 2) {
      switch (i[0]) {
        case 8:
          f = new Uint8Array(
            r,
            c * o * t * a,
            o * t * a
          );
          break;
        case 16:
          f = new Uint16Array(
            r,
            c * o * t * a,
            o * t * a / 2
          );
          break;
        case 32:
          f = new Uint32Array(
            r,
            c * o * t * a,
            o * t * a / 4
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`);
      }
      En(f, o);
    } else e === 3 && (f = new Uint8Array(
      r,
      c * o * t * a,
      o * t * a
    ), On(f, o, a));
  }
  return r;
}
class _n {
  async decode(e, t) {
    const n = await this.decodeBlock(t), i = e.Predictor || 1;
    if (i !== 1) {
      const s = !e.StripOffsets, a = s ? e.TileWidth : e.ImageWidth, o = s ? e.TileLength : e.RowsPerStrip || e.ImageLength;
      return Bn(
        n,
        i,
        a,
        o,
        e.BitsPerSample,
        e.PlanarConfiguration
      );
    }
    return n;
  }
}
function Ue(r) {
  switch (r) {
    case C.BYTE:
    case C.ASCII:
    case C.SBYTE:
    case C.UNDEFINED:
      return 1;
    case C.SHORT:
    case C.SSHORT:
      return 2;
    case C.LONG:
    case C.SLONG:
    case C.FLOAT:
    case C.IFD:
      return 4;
    case C.RATIONAL:
    case C.SRATIONAL:
    case C.DOUBLE:
    case C.LONG8:
    case C.SLONG8:
    case C.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${r}`);
  }
}
function Mn(r) {
  const e = r.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let n = 4; n <= e[3] * 4; n += 4) {
    const i = ae[e[n]], s = e[n + 1] ? ne[e[n + 1]] : null, a = e[n + 2], o = e[n + 3];
    let c = null;
    if (!s)
      c = o;
    else {
      if (c = r[s], typeof c > "u" || c === null)
        throw new Error(`Could not get value of geoKey '${i}'.`);
      typeof c == "string" ? c = c.substring(o, o + a - 1) : c.subarray && (c = c.subarray(o, o + a), a === 1 && (c = c[0]));
    }
    t[i] = c;
  }
  return t;
}
function se(r, e, t, n) {
  let i = null, s = null;
  const a = Ue(e);
  switch (e) {
    case C.BYTE:
    case C.ASCII:
    case C.UNDEFINED:
      i = new Uint8Array(t), s = r.readUint8;
      break;
    case C.SBYTE:
      i = new Int8Array(t), s = r.readInt8;
      break;
    case C.SHORT:
      i = new Uint16Array(t), s = r.readUint16;
      break;
    case C.SSHORT:
      i = new Int16Array(t), s = r.readInt16;
      break;
    case C.LONG:
    case C.IFD:
      i = new Uint32Array(t), s = r.readUint32;
      break;
    case C.SLONG:
      i = new Int32Array(t), s = r.readInt32;
      break;
    case C.LONG8:
    case C.IFD8:
      i = new Array(t), s = r.readUint64;
      break;
    case C.SLONG8:
      i = new Array(t), s = r.readInt64;
      break;
    case C.RATIONAL:
      i = new Uint32Array(t * 2), s = r.readUint32;
      break;
    case C.SRATIONAL:
      i = new Int32Array(t * 2), s = r.readInt32;
      break;
    case C.FLOAT:
      i = new Float32Array(t), s = r.readFloat32;
      break;
    case C.DOUBLE:
      i = new Float64Array(t), s = r.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === C.RATIONAL || e === C.SRATIONAL)
    for (let o = 0; o < t; o += 2)
      i[o] = s.call(
        r,
        n + o * a
      ), i[o + 1] = s.call(
        r,
        n + (o * a + 4)
      );
  else
    for (let o = 0; o < t; ++o)
      i[o] = s.call(
        r,
        n + o * a
      );
  return e === C.ASCII ? new TextDecoder("utf-8").decode(i) : i;
}
class Un {
  constructor(e, t, n) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = n;
  }
}
class Ie extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class Kt {
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
    const { window: t, width: n, height: i } = e;
    let { resX: s, resY: a, bbox: o } = e;
    const c = await this.getImage();
    let f = c;
    const u = await this.getImageCount(), l = c.getBoundingBox();
    if (t && o)
      throw new Error('Both "bbox" and "window" passed.');
    if (n || i) {
      if (t) {
        const [g, w] = c.getOrigin(), [m, b] = c.getResolution();
        o = [
          g + t[0] * m,
          w + t[1] * b,
          g + t[2] * m,
          w + t[3] * b
        ];
      }
      const p = o || l;
      if (n) {
        if (s)
          throw new Error("Both width and resX passed");
        s = (p[2] - p[0]) / n;
      }
      if (i) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (p[3] - p[1]) / i;
      }
    }
    if (s || a) {
      const p = [];
      for (let g = 0; g < u; ++g) {
        const w = await this.getImage(g), { SubfileType: m, NewSubfileType: b } = w.fileDirectory;
        (g === 0 || m === 2 || b & 1) && p.push(w);
      }
      p.sort((g, w) => g.getWidth() - w.getWidth());
      for (let g = 0; g < p.length; ++g) {
        const w = p[g], m = (l[2] - l[0]) / w.getWidth(), b = (l[3] - l[1]) / w.getHeight();
        if (f = w, s && s > m || a && a > b)
          break;
      }
    }
    let h = t;
    if (o) {
      const [p, g] = c.getOrigin(), [w, m] = f.getResolution(c);
      h = [
        Math.round((o[0] - p) / w),
        Math.round((o[1] - g) / m),
        Math.round((o[2] - p) / w),
        Math.round((o[3] - g) / m)
      ], h = [
        Math.min(h[0], h[2]),
        Math.min(h[1], h[3]),
        Math.max(h[0], h[2]),
        Math.max(h[1], h[3])
      ];
    }
    return f.readRasters({ ...e, window: h });
  }
}
class V extends Kt {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, n, i, s = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = n, this.firstIFDOffset = i, this.cache = s.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const n = this.bigTiff ? 4048 : 1024;
    return new Kr(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : n
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
    const t = this.bigTiff ? 20 : 12, n = this.bigTiff ? 8 : 2;
    let i = await this.getSlice(e);
    const s = this.bigTiff ? i.readUint64(e) : i.readUint16(e), a = s * t + (this.bigTiff ? 16 : 6);
    i.covers(e, a) || (i = await this.getSlice(e, a));
    const o = {};
    let c = e + (this.bigTiff ? 8 : 2);
    for (let l = 0; l < s; c += t, ++l) {
      const h = i.readUint16(c), p = i.readUint16(c + 2), g = this.bigTiff ? i.readUint64(c + 4) : i.readUint32(c + 4);
      let w, m;
      const b = Ue(p), x = c + (this.bigTiff ? 12 : 8);
      if (b * g <= (this.bigTiff ? 8 : 4))
        w = se(i, p, g, x);
      else {
        const A = i.readOffset(x), T = Ue(p) * g;
        if (i.covers(A, T))
          w = se(i, p, g, A);
        else {
          const d = await this.getSlice(A, T);
          w = se(d, p, g, A);
        }
      }
      g === 1 && kt.indexOf(h) === -1 && !(p === C.RATIONAL || p === C.SRATIONAL) ? m = w[0] : m = w, o[ne[h]] = m;
    }
    const f = Mn(o), u = i.readOffset(
      e + n + t * s
    );
    return new Un(
      o,
      f,
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
        throw t instanceof Ie ? new Ie(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new Ie(e);
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
    return new et(
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
      } catch (n) {
        if (n instanceof Ie)
          t = !1;
        else
          throw n;
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
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", n = t.length + 100;
    let i = await this.getSlice(e, n);
    if (t === se(i, C.ASCII, t.length, e)) {
      const a = se(i, C.ASCII, n, e).split(`
`)[0], o = Number(a.split("=")[1].split(" ")[0]) + a.length;
      o > n && (i = await this.getSlice(e, o));
      const c = se(i, C.ASCII, o, e);
      this.ghostValues = {}, c.split(`
`).filter((f) => f.length > 0).map((f) => f.split("=")).forEach(([f, u]) => {
        this.ghostValues[f] = u;
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
  static async fromSource(e, t, n) {
    const i = (await e.fetch([{ offset: 0, length: 1024 }], n))[0], s = new jr(i), a = s.getUint16(0, 0);
    let o;
    if (a === 18761)
      o = !0;
    else if (a === 19789)
      o = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const c = s.getUint16(2, o);
    let f;
    if (c === 42)
      f = !1;
    else if (c === 43) {
      if (f = !0, s.getUint16(4, o) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const u = f ? s.getUint64(8, o) : s.getUint32(4, o);
    return new V(e, o, f, u, t);
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
class zt extends Kt {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(e, t) {
    super(), this.mainFile = e, this.overviewFiles = t, this.imageFiles = [e].concat(t), this.fileDirectoriesPerFile = null, this.fileDirectoriesPerFileParsing = null, this.imageCount = null;
  }
  async parseFileDirectoriesPerFile() {
    const e = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((t) => t.parseFileDirectoryAt(t.firstIFDOffset)));
    return this.fileDirectoriesPerFile = await Promise.all(e), this.fileDirectoriesPerFile;
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    await this.getImageCount(), await this.parseFileDirectoriesPerFile();
    let t = 0, n = 0;
    for (let i = 0; i < this.imageFiles.length; i++) {
      const s = this.imageFiles[i];
      for (let a = 0; a < this.imageCounts[i]; a++) {
        if (e === t) {
          const o = await s.requestIFD(n);
          return new et(
            o.fileDirectory,
            o.geoKeyDirectory,
            s.dataView,
            s.littleEndian,
            s.cache,
            s.source
          );
        }
        t++, n++;
      }
      n = 0;
    }
    throw new RangeError("Invalid image index");
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    if (this.imageCount !== null)
      return this.imageCount;
    const e = [this.mainFile.getImageCount()].concat(this.overviewFiles.map((t) => t.getImageCount()));
    return this.imageCounts = await Promise.all(e), this.imageCount = this.imageCounts.reduce((t, n) => t + n, 0), this.imageCount;
  }
}
async function Ae(r, e = {}, t) {
  return V.fromSource(Me(r, e), t);
}
async function Ln(r, e = {}, t) {
  return V.fromSource(hn(r, e), t);
}
async function Le(r, e) {
  return V.fromSource(gn(r), e);
}
async function Nn(r, e) {
  return V.fromSource(xn(r), e);
}
async function fe(r, e) {
  return V.fromSource(pn(r), e);
}
async function jn(r, e = [], t = {}, n) {
  const i = await V.fromSource(Me(r, t), n), s = await Promise.all(
    e.map((a) => V.fromSource(Me(a, t)))
  );
  return new zt(i, s);
}
function Kn(r, e) {
  return Rn(r, e);
}
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseClient: ke,
  BaseDecoder: _n,
  BaseResponse: De,
  GeoTIFF: V,
  GeoTIFFImage: et,
  MultiGeoTIFF: zt,
  Pool: Ut,
  addDecoder: ee,
  default: V,
  fromArrayBuffer: Le,
  fromBlob: fe,
  fromCustomClient: Ln,
  fromFile: Nn,
  fromUrl: Ae,
  fromUrls: jn,
  getDecoder: Qe,
  globals: Dr,
  rgb: Gr,
  setLogger: vn,
  writeArrayBuffer: Kn
}, Symbol.toStringTag, { value: "Module" }));
class Oe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const at = {};
function Q(r, e, t = "warn") {
  at[r] || (at[r] = !0, console[t](e));
}
const Hn = (r) => {
  var t, n, i;
  const e = /* @__PURE__ */ new Map();
  for (const s of r) {
    const a = new DOMParser().parseFromString(
      (t = s.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), o = (n = a == null ? void 0 : a.querySelector("Name")) == null ? void 0 : n.textContent, c = (i = a == null ? void 0 : a.querySelector("Color")) == null ? void 0 : i.textContent;
    if (!o)
      continue;
    const f = c ? c.split(",").map((u) => parseInt(u)) : [255, 255, 255];
    e.has(o) || e.set(o, {
      name: o,
      color: f,
      images: []
    }), e.get(o).images.push(s);
  }
  return e;
};
class te {
  static RGBAfromYCbCr(...e) {
    let t, n, i;
    if (e.length === 1) {
      const o = e[0], c = new Uint8ClampedArray(o.length * 4 / 3);
      for (let f = 0, u = 0; f < o.length; f += 3, u += 4)
        t = o[f], n = o[f + 1], i = o[f + 2], c[u] = t + 1.402 * (i - 128), c[u + 1] = t - 0.34414 * (n - 128) - 0.71414 * (i - 128), c[u + 2] = t + 1.772 * (n - 128), c[u + 3] = 255;
      return c;
    }
    [t, n, i] = e;
    const s = t.length, a = new Uint8ClampedArray(s * 4);
    for (let o = 0, c = 0; o < s; o++, c += 4) {
      const f = t[o], u = n[o], l = i[o];
      a[c] = f + 1.402 * (l - 128), a[c + 1] = f - 0.34414 * (u - 128) - 0.71414 * (l - 128), a[c + 2] = f + 1.772 * (u - 128), a[c + 3] = 255;
    }
    return a;
  }
  static RGBAfromRGB(...e) {
    if (e.length === 1) {
      const c = e[0], f = new Uint8ClampedArray(c.length * 4 / 3);
      for (let u = 0, l = 0; u < c.length; u += 3, l += 4)
        f[l] = c[u], f[l + 1] = c[u + 1], f[l + 2] = c[u + 2], f[l + 3] = 255;
      return f;
    }
    const t = e[0], n = e[1], i = e[2], s = e.length >= 4 ? e[3] : null, a = t.length, o = new Uint8ClampedArray(a * 4);
    for (let c = 0, f = 0; c < a; c++, f += 4)
      o[f] = t[c], o[f + 1] = n[c], o[f + 2] = i[c], o[f + 3] = s ? s[c] : 255;
    return o;
  }
  static RGBAfromWhiteIsZero(e, t) {
    const n = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, a = 0; s < e.length; ++s, a += 4)
      i = 256 - e[s] / t * 256, n[a] = i, n[a + 1] = i, n[a + 2] = i, n[a + 3] = 255;
    return n;
  }
  static RGBAfromBlackIsZero(e, t) {
    const n = new Uint8ClampedArray(e.length * 4);
    let i;
    for (let s = 0, a = 0; s < e.length; ++s, a += 4)
      i = e[s] / t * 256, n[a] = i, n[a + 1] = i, n[a + 2] = i, n[a + 3] = 255;
    return n;
  }
  static RGBAfromPalette(e, t) {
    const n = new Uint8ClampedArray(e.length * 4), i = t.length / 3, s = t.length / 3 * 2;
    for (let a = 0, o = 0; a < e.length; ++a, o += 4) {
      const c = e[a];
      n[o] = t[c] / 65536 * 256, n[o + 1] = t[c + i] / 65536 * 256, n[o + 2] = t[c + s] / 65536 * 256, n[o + 3] = 255;
    }
    return n;
  }
  static RGBAfromCMYK(...e) {
    if (e.length === 1) {
      const c = e[0], f = new Uint8ClampedArray(c.length);
      for (let u = 0, l = 0; u < c.length; u += 4, l += 4) {
        const h = c[u], p = c[u + 1], g = c[u + 2], w = c[u + 3];
        f[l] = 255 * ((255 - h) / 256) * ((255 - w) / 256), f[l + 1] = 255 * ((255 - p) / 256) * ((255 - w) / 256), f[l + 2] = 255 * ((255 - g) / 256) * ((255 - w) / 256), f[l + 3] = 255;
      }
      return f;
    }
    const t = e[0], n = e[1], i = e[2], s = e[3], a = t.length, o = new Uint8ClampedArray(a * 4);
    for (let c = 0, f = 0; c < a; c++, f += 4) {
      const u = t[c], l = n[c], h = i[c], p = s[c];
      o[f] = 255 * ((255 - u) / 256) * ((255 - p) / 256), o[f + 1] = 255 * ((255 - l) / 256) * ((255 - p) / 256), o[f + 2] = 255 * ((255 - h) / 256) * ((255 - p) / 256), o[f + 3] = 255;
    }
    return o;
  }
  static RGBAfromCIELab(...e) {
    const s = (l, h, p) => {
      const g = h << 24 >> 24, w = p << 24 >> 24;
      let m = (l + 16) / 116, b = g / 500 + m, x = m - w / 200;
      b = 0.95047 * (b * b * b > 8856e-6 ? b * b * b : (b - 0.13793103448275862) / 7.787), m = 1 * (m * m * m > 8856e-6 ? m * m * m : (m - 0.13793103448275862) / 7.787), x = 1.08883 * (x * x * x > 8856e-6 ? x * x * x : (x - 0.13793103448275862) / 7.787);
      let A = b * 3.2406 + m * -1.5372 + x * -0.4986, T = b * -0.9689 + m * 1.8758 + x * 0.0415, d = b * 0.0557 + m * -0.204 + x * 1.057;
      return A = A > 31308e-7 ? 1.055 * A ** 0.4166666666666667 - 0.055 : 12.92 * A, T = T > 31308e-7 ? 1.055 * T ** 0.4166666666666667 - 0.055 : 12.92 * T, d = d > 31308e-7 ? 1.055 * d ** 0.4166666666666667 - 0.055 : 12.92 * d, [
        Math.max(0, Math.min(1, A)) * 255,
        Math.max(0, Math.min(1, T)) * 255,
        Math.max(0, Math.min(1, d)) * 255
      ];
    };
    if (e.length === 1) {
      const l = e[0], h = new Uint8ClampedArray(l.length * 4 / 3);
      for (let p = 0, g = 0; p < l.length; p += 3, g += 4) {
        const [w, m, b] = s(l[p], l[p + 1], l[p + 2]);
        h[g] = w, h[g + 1] = m, h[g + 2] = b, h[g + 3] = 255;
      }
      return h;
    }
    const a = e[0], o = e[1], c = e[2], f = a.length, u = new Uint8ClampedArray(f * 4);
    for (let l = 0, h = 0; l < f; l++, h += 4) {
      const [p, g, w] = s(a[l], o[l], c[l]);
      u[h] = p, u[h + 1] = g, u[h + 2] = w, u[h + 3] = 255;
    }
    return u;
  }
}
const qn = {
  interpretation: "auto",
  channels: null,
  gpu: {
    preferRGBA8: !0,
    forceRGBA16F: !1,
    packMode: "packsOf4"
  },
  image: {
    rgbaChannels: null
  },
  hints: {
    layout: {
      pyramid: "auto",
      planeIndex: 0,
      prefer: "pyramid"
    }
  }
};
function Vn() {
  let r, e;
  return { promise: new Promise((n, i) => {
    r = n, e = i;
  }), resolve: r, reject: e };
}
function Wn(r) {
  try {
    return r ? typeof r == "string" ? r : r && typeof r.message == "string" ? r.message : JSON.stringify(r) : "Unknown error";
  } catch {
    return String(r);
  }
}
class Ne {
  constructor(e) {
    Object.assign(this, e);
  }
  getType() {
    return "gpuTextureSet";
  }
}
class $n {
  /**
   * @param {Object} params
   * @param {number} params.size
   * @param {() => Worker} params.createWorker
   */
  constructor({ size: e, createWorker: t }) {
    this.size = Math.max(1, e | 0), this.createWorker = t, this.workers = [], this._nextId = 1;
    for (let n = 0; n < this.size; n++) {
      const i = this.createWorker(), s = { worker: i, pending: 0, callbacks: /* @__PURE__ */ new Map() };
      i.onmessage = (a) => {
        const o = a.data || {};
        if (o.kind === "warn") {
          Q(
            o.code || "RawTiffWorker_warn",
            o.message || "[RawTiffWorker] warning",
            "warn"
          );
          return;
        }
        const c = o.id, f = s.callbacks.get(c);
        f && (s.callbacks.delete(c), s.pending = Math.max(0, s.pending - 1), o.ok ? f.resolve(o.result) : f.reject(new Error(Wn(o.error))));
      }, i.onerror = (a) => {
        for (const o of s.callbacks.values())
          o.reject(a instanceof Error ? a : new Error(String(a)));
        s.callbacks.clear(), s.pending = 0;
      }, this.workers.push(s);
    }
  }
  /**
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(e, t, n) {
    const i = this._nextId++, s = Vn();
    let a = this.workers[0];
    for (const o of this.workers)
      o.pending < a.pending && (a = o);
    a.pending++, a.callbacks.set(i, s);
    try {
      n && n.length ? a.worker.postMessage({ id: i, op: e, payload: t }, n) : a.worker.postMessage({ id: i, op: e, payload: t });
    } catch (o) {
      a.callbacks.delete(i), a.pending = Math.max(0, a.pending - 1), s.reject(o);
    }
    return s.promise;
  }
  terminate() {
    for (const e of this.workers) {
      try {
        e.worker.terminate();
      } catch {
      }
      e.callbacks.clear(), e.pending = 0;
    }
    this.workers.length = 0;
  }
}
function Yn() {
  return new Worker(new URL(
    /* @vite-ignore */
    "/assets/tiff.worker-BPpoNmhb.js",
    import.meta.url
  ), { type: "module" });
}
class re {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta]
   */
  constructor(e, t = {}) {
    this.source = e, this.hints = t.hints || {}, this.meta = t.meta;
  }
  getType() {
    return "rawTiff";
  }
}
class je {
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
  constructor(e) {
    Object.assign(this, e), this.hints = e.hints || {};
  }
  getType() {
    return "tiffRaster";
  }
}
function oe(r, e) {
  const t = Array.isArray(r) ? r.slice() : Object.assign({}, r || {});
  if (!e || typeof e != "object") return t;
  for (const n of Object.keys(e)) {
    const i = e[n];
    i && typeof i == "object" && !Array.isArray(i) && t[n] && typeof t[n] == "object" && !Array.isArray(t[n]) ? t[n] = oe(t[n], i) : t[n] = i;
  }
  return t;
}
function Te(r, e) {
  const t = e && e.hints;
  if (t && t.formatResolved) return t.formatResolved;
  if (t && t.format) return t.format;
  if (e && e.meta && e.meta.format) return e.meta.format;
  if (r && r.format) return r.format;
  if (r && r.userData && r.userData.format) return r.userData.format;
  const n = r && (r.source || r.tileSource || r._tileSource);
  return n && n.format ? n.format : n && n.options && n.options.format ? n.options.format : null;
}
function Xn(r) {
  return Array.isArray(r) ? r.map((e) => {
    const t = typeof e.ctor == "string" && globalThis[e.ctor] ? globalThis[e.ctor] : Uint8Array;
    return new t(e.buffer, e.byteOffset || 0, e.length);
  }) : [];
}
function Zn(r, e) {
  const t = Xn(r.bands);
  return new je({
    width: r.width,
    height: r.height,
    bands: t,
    samplesPerPixel: r.samplesPerPixel,
    bitsPerSample: r.bitsPerSample,
    sampleFormat: r.sampleFormat,
    photometricInterpretation: r.photometricInterpretation,
    colorMap: r.colorMap,
    fileDirectory: r.fileDirectory,
    hints: e || {}
  });
}
function lt(r) {
  const e = (r.packs || []).map((t) => {
    const n = t.data, i = typeof n.ctor == "string" && globalThis[n.ctor] ? globalThis[n.ctor] : Uint8Array, s = new i(n.buffer, n.byteOffset || 0, n.length);
    return Object.assign({}, t, { data: s });
  });
  return new Ne({
    width: r.width,
    height: r.height,
    mode: r.mode,
    channelCount: r.channelCount,
    packs: e
  });
}
function Jn(r, e = {}) {
  const t = r;
  if (t.RawTiffPlugin && t.RawTiffPlugin.__installed) return t.RawTiffPlugin;
  const n = Object.assign({
    toneMap: null,
    format: oe(qn, e.defaults && e.defaults.format || null)
  }, e.defaults || {}), i = Object.assign({
    enabled: !0,
    size: typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(1, Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2))) : 2,
    createWorker: null,
    transferInput: !1,
    enableRawTiffToImageBitmap: !0
  }, e.workerPool || {}), s = t.RawTiffPluginShared = t.RawTiffPluginShared || {};
  function a() {
    var y, I;
    if (!i.enabled || typeof Worker > "u") return null;
    if (s.__rawTiffWorkerPool) return s.__rawTiffWorkerPool;
    const d = i.createWorker || Yn;
    try {
      return s.__rawTiffWorkerPool = new $n({
        size: i.size,
        createWorker: d
      }), s.__rawTiffWorkerPool;
    } catch (S) {
      return (I = (y = t.console) == null ? void 0 : y.warn) == null || I.call(y, "[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", S), s.__rawTiffWorkerPool = null, null;
    }
  }
  async function o(d) {
    if (d == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    if (d instanceof re) return o(d.source);
    if (typeof d == "object") {
      if (typeof d.arrayBuffer == "function") {
        const y = await d.arrayBuffer();
        if (y instanceof ArrayBuffer) return y;
      }
      if (d.bytes != null) return o(d.bytes);
      if (d.blob != null) return o(d.blob);
    }
    if (typeof Blob < "u" && d instanceof Blob) return await d.arrayBuffer();
    if (d instanceof ArrayBuffer) return d;
    if (ArrayBuffer.isView(d)) {
      const { buffer: y, byteOffset: I, byteLength: S } = d;
      return y.slice(I, I + S);
    }
    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }
  async function c(d) {
    return typeof d.getImageCount == "function" ? await d.getImageCount() : typeof d.getImages == "function" ? (await d.getImages()).length : 1;
  }
  async function f(d, y) {
    if (typeof d.getImage == "function") return await d.getImage(y);
    if (typeof d.getImages == "function") return (await d.getImages())[y];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }
  async function u(d, y) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const I = y && y.hints || (y instanceof re ? y.hints : null) || {}, S = await o(y);
    let k;
    if (typeof Le == "function")
      k = await Le(S);
    else if (typeof fe == "function")
      k = await fe(new Blob([S], { type: "image/tiff" }));
    else
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    const R = await c(k);
    let v = I.imageIndex;
    if (R > 1) {
      if (typeof v != "number" || !Number.isFinite(v))
        throw new Error(`[RawTiffPlugin] TIFF contains ${R} images. Provide rawTiff.hints.imageIndex.`);
      if (v < 0 || v >= R)
        throw new Error(`[RawTiffPlugin] imageIndex ${v} out of range (0..${R - 1}).`);
    } else
      v = 0;
    const F = await f(k, v), U = typeof F.getWidth == "function" ? F.getWidth() : F.width, D = typeof F.getHeight == "function" ? F.getHeight() : F.height, P = typeof F.getSamplesPerPixel == "function" ? F.getSamplesPerPixel() : F.samplesPerPixel || 1, G = typeof F.getBitsPerSample == "function" ? F.getBitsPerSample() : F.bitsPerSample || [8], B = typeof F.getSampleFormat == "function" ? F.getSampleFormat() : F.sampleFormat || null, H = typeof F.getPhotometricInterpretation == "function" ? F.getPhotometricInterpretation() : F.fileDirectory ? F.fileDirectory.PhotometricInterpretation : void 0, E = F.fileDirectory || null, O = E && E.ColorMap ? E.ColorMap : null, _ = Object.assign({ interleave: !1 }, I.decode || {}), M = await F.readRasters(_), W = Array.isArray(M) ? M : [M], J = Math.max(P || 0, W.length);
    return new je({
      width: U,
      height: D,
      bands: W,
      samplesPerPixel: J,
      bitsPerSample: Array.isArray(G) ? G : [G],
      sampleFormat: Array.isArray(B) ? B : B ? [B] : null,
      photometricInterpretation: H,
      colorMap: O,
      fileDirectory: E,
      hints: I
    });
  }
  async function l(d, y, I) {
    const S = y && y.hints || (y instanceof re ? y.hints : null) || {}, k = await o(y), R = Te(d, y), v = oe(n.format, R || null), F = Object.assign({}, S, { formatResolved: v }), U = i && i.transferInput ? [k] : [], D = await I.request("decodeRaster", { buffer: k, hints: F }, U);
    return Zn(D, F);
  }
  async function h(d, y) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const I = a();
    return I ? await l(d, y, I) : await u(d, y);
  }
  async function p(d, y) {
    const I = y && y.hints || (y instanceof re ? y.hints : null) || {}, S = a();
    if (S) {
      const R = await o(y), v = Te(d, y), F = oe(n.format, v || null), U = Object.assign({}, I, { formatResolved: F }), D = i && i.transferInput ? [R] : [], P = await S.request("decodeAndRenderImageBitmap", { buffer: R, hints: U }, D);
      if (P && P.kind === "imageBitmap") return P.imageBitmap;
      if (P && P.kind === "rgba8") {
        if (typeof createImageBitmap != "function")
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        const G = new Uint8ClampedArray(P.rgbaBuffer, P.rgbaByteOffset || 0, P.rgbaLength), B = new ImageData(G, P.width, P.height);
        return await createImageBitmap(B);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }
    const k = await u(d, y);
    return await x(d, k);
  }
  async function g(d, y) {
    const I = y && y.hints || (y instanceof re ? y.hints : null) || {}, S = a();
    if (!S) {
      const G = await u(d, y);
      return await w(d, G);
    }
    const k = await o(y), R = Te(d, y), v = oe(n.format, R || null), F = Object.assign({}, I, { formatResolved: v }), U = i && i.transferInput ? [k] : [], D = await S.request("decodeAndPackGpuTextureSet", { buffer: k, hints: F }, U), P = lt(D.texSet);
    return P.hints = F, P;
  }
  async function w(d, y) {
    const I = a();
    if (!I) {
      Q("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      const B = y.width, H = y.height, E = B * H, O = new Uint8Array(E * 4);
      for (let _ = 0, M = 0; _ < E; _++, M += 4)
        O[M] = y.bands[0] ? y.bands[0][_] : 0, O[M + 1] = y.bands[1] ? y.bands[1][_] : 0, O[M + 2] = y.bands[2] ? y.bands[2][_] : 0, O[M + 3] = y.bands[3] ? y.bands[3][_] : 255;
      return new Ne({
        width: B,
        height: H,
        mode: "data",
        channelCount: y.bands ? y.bands.length : 0,
        packs: [{ format: "RGBA8", data: O, channels: [0, 1, 2, 3], normalized: !1, scale: [1, 1, 1, 1], offset: [0, 0, 0, 0] }]
      });
    }
    const S = y.hints || {}, k = Te(d, y), R = oe(n.format, k || null), v = Object.assign({}, S, { formatResolved: R }), F = y.bands.map((B) => {
      var H;
      return {
        ctor: ((H = B.constructor) == null ? void 0 : H.name) || "Uint8Array",
        buffer: B.buffer,
        byteOffset: B.byteOffset,
        length: B.length
      };
    }), U = {
      width: y.width,
      height: y.height,
      bands: F,
      samplesPerPixel: y.samplesPerPixel,
      bitsPerSample: y.bitsPerSample,
      sampleFormat: y.sampleFormat,
      photometricInterpretation: y.photometricInterpretation,
      colorMap: y.colorMap,
      fileDirectory: y.fileDirectory
    }, D = F.map((B) => B.buffer), P = await I.request("rasterToGpuTextureSet", { raster: U, hints: v }, D), G = lt(P);
    return G.hints = v, G;
  }
  function m(d, y, I) {
    if (d == null || Number.isNaN(d)) return 0;
    const S = I.bands[y];
    if (S instanceof Float32Array || S instanceof Float64Array) {
      const F = Math.max(0, Math.min(1, d));
      return Math.round(F * 255);
    }
    const R = I.bitsPerSample && I.bitsPerSample[y] != null ? I.bitsPerSample[y] : I.bitsPerSample ? I.bitsPerSample[0] : 8, v = R <= 0 ? 255 : Math.pow(2, R) - 1;
    return v <= 255 ? Math.max(0, Math.min(255, d)) : Math.round(Math.max(0, Math.min(1, d / v)) * 255);
  }
  function b(d) {
    const y = n.toneMap || m, I = N || {}, S = d.width, k = d.height, R = S * k, v = d.hints.renderChannels || d.renderChannels || null, F = d.samplesPerPixel || d.bands.length || 1, U = (E, O) => y(d.bands[E][O], E, d), D = d.photometricInterpretation;
    if (D === I.Palette && d.colorMap) {
      const E = d.bands[0];
      return te.RGBAfromPalette(E, d.colorMap);
    }
    if ((D === I.WhiteIsZero || D === I.BlackIsZero) && F >= 1) {
      const E = d.bands[0], O = d.bitsPerSample && d.bitsPerSample[0] != null ? d.bitsPerSample[0] : 8, _ = Math.pow(2, O) - 1;
      if (D === I.WhiteIsZero) return te.RGBAfromWhiteIsZero(E, _);
      if (D === I.BlackIsZero) return te.RGBAfromBlackIsZero(E, _);
      const M = new Uint8ClampedArray(R * 4);
      for (let W = 0, J = 0; W < R; W++, J += 4) {
        let ge = y(E[W], 0, d);
        D === I.WhiteIsZero && (ge = 255 - ge), M[J] = M[J + 1] = M[J + 2] = ge, M[J + 3] = 255;
      }
      return M;
    }
    const P = v || (D === I.RGB || D === I.YCbCr || D === I.CIELab ? [0, 1, 2] : F >= 3 ? [0, 1, 2] : [0]);
    if (P.length > 4 && (Q(
      "renderChannels>4_to_RGBA",
      `[tiff] Requested ${P.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
      "warn"
    ), P.splice(4)), P.length === 1) {
      const E = P[0], O = new Uint8ClampedArray(R * 4);
      for (let _ = 0, M = 0; _ < R; _++, M += 4) {
        const W = U(E, _);
        O[M] = O[M + 1] = O[M + 2] = W, O[M + 3] = 255;
      }
      return O;
    }
    const G = new Uint8ClampedArray(R * P.length);
    for (let E = 0; E < R; E++) {
      const O = E * P.length;
      for (let _ = 0; _ < P.length; _++) {
        const M = P[_];
        G[O + _] = M < d.bands.length ? U(M, E) : 0;
      }
    }
    if (D === I.YCbCr && P.length >= 3) return te.RGBAfromYCbCr(G);
    if (D === I.CMYK && P.length >= 4) return te.RGBAfromCMYK(G);
    if (D === I.CIELab && P.length >= 3) return te.RGBAfromCIELab(G);
    if (P.length === 4) return G;
    if (P.length === 3) return te.RGBAfromRGB(G);
    const B = new Uint8ClampedArray(R * 4), H = P.length >= 4;
    for (let E = 0, O = 0; E < R; E++, O += 4) {
      const _ = E * P.length;
      B[O] = G[_], B[O + 1] = G[_ + 1] || 0, B[O + 2] = G[_ + 2] || 0, B[O + 3] = H ? G[_ + 3] : 255;
    }
    return B;
  }
  async function x(d, y) {
    if (typeof createImageBitmap != "function")
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    const I = b(y), S = new ImageData(I, y.width, y.height);
    return await createImageBitmap(S);
  }
  async function A(d, y) {
    const I = await x(d, y), S = document.createElement("canvas");
    S.width = I.width, S.height = I.height;
    const k = S.getContext("2d", { willReadFrequently: !0 });
    return k.drawImage(I, 0, 0), k;
  }
  t.converter ? (t.converter.learn("rawTiff", "tiffRaster", (d, y) => h(d, y), 2, 10), i.enableRawTiffToImageBitmap && t.converter.learn("rawTiff", "imageBitmap", (d, y) => p(d, y), 1, 5), t.converter.learn("tiffRaster", "context2d", (d, y) => A(d, y), 2, 10), t.converter.learn("tiffRaster", "imageBitmap", (d, y) => x(d, y), 1, 50), t.converter.learn("rawTiff", "gpuTextureSet", (d, y) => g(d, y), 1, 8), t.converter.learn("tiffRaster", "gpuTextureSet", (d, y) => w(d, y), 1, 12)) : t.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  const T = {
    __installed: !0,
    RawTiff: re,
    TiffRaster: je,
    GpuTextureSet: Ne,
    Converters: te,
    decodeRawTiff: h,
    rasterToRGBA8: b,
    rasterToContext2d: A,
    rasterToImageBitmap: x,
    getWorkerPool: a,
    terminateWorkerPool() {
      const d = t.RawTiffPluginShared;
      d && d.__rawTiffWorkerPool && (d.__rawTiffWorkerPool.terminate(), d.__rawTiffWorkerPool = null);
    },
    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(d, y, I, S) {
      if (!t.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const k = S || t.converter.guessType(y);
      return t.converter.convert(d, y, k, I);
    },
    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(d, y) {
      return new re(d, y);
    },
    /**
     * Expose defaults (merged).
     */
    defaults: n
  };
  return t.RawTiffPlugin = T, T;
}
window.GeoTIFF = zn;
const Qn = (r, e = {}) => {
  if (r.version.major < 4 || r.version.major === 4 && r.version.minor < 1)
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  const {
    workerUrl: t,
    // optional: string or URL
    workerPool: n
    // optional: { createWorker: () => Worker }
  } = e, s = n || {
    createWorker: () => t ? new Worker(t, { type: "module" }) : new Worker(new URL(
      /* @vite-ignore */
      "/assets/tiff.worker-BPpoNmhb.js",
      import.meta.url
    ), {
      type: "module"
    })
  }, a = r.RawTiffPlugin || Jn(r, {
    workerPool: s
  });
  let o = 0;
  const f = class f extends r.TileSource {
    constructor(l, h = { logLatency: !1 }) {
      super();
      let p = this;
      this.input = l, this.options = h, this.channel = (l == null ? void 0 : l.channel) ?? null, this._ready = !1, this._pool = f.sharedPool, this._tileSize = 256, this._tsCounter = o, o += 1, l.GeoTIFF && l.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(l.GeoTIFF),
        GeoTIFFImages: Promise.resolve(l.GeoTIFFImages),
        ready: new Oe()
      }, this.GeoTIFF = l.GeoTIFF, this.imageCount = l.GeoTIFFImages.length, this.GeoTIFFImages = l.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: l instanceof File ? fe(l, h.GeoTIFFOptions) : Ae(l, h.GeoTIFFOptions),
        GeoTIFFImages: new Oe(),
        ready: new Oe()
      }, this.promises.GeoTIFF.then((g) => (p.GeoTIFF = g, g.getImageCount())).then((g) => {
        p.imageCount = g;
        let w = [...Array(g).keys()].map((m) => p.GeoTIFF.getImage(m));
        return Promise.all(w);
      }).then((g) => {
        g = p.constructor.userDefinedImagesFilter(g, h), p.GeoTIFFImages = g, p.promises.GeoTIFFImages.resolve(g), this.setupLevels();
      }).catch((g) => {
        throw console.error("Re-throwing error with GeoTIFF:", g), g;
      }));
    }
    static async getAllTileSources(l, h) {
      const p = l instanceof File ? l.name.split(".").pop() : l.split(".").pop();
      let g = await (l instanceof File ? fe(l, h.GeoTIFFOptions) : Ae(l, h.GeoTIFFOptions)), w = await g.getImageCount();
      return Promise.all(
        Array.from({ length: w }, (m, b) => g.getImage(b))
      ).then((m) => {
        let b = l instanceof File ? fe(l) : Ae(l);
        return m = this.userDefinedImagesFilter(m, h), m = m.filter(
          (x) => x.fileDirectory.photometricInterpretation !== N.TransparencyMask
        ), this.resolveLayout(b, m, h.hints);
      }).then((m) => this.buildLevelImages(g, m, g)).then((m) => {
        m.sort((T, d) => d.getWidth() - T.getWidth());
        const b = 0.015;
        return m.reduce((T, d) => {
          const y = d.getWidth() / d.getHeight();
          let I = "";
          d.fileDirectory.ImageDescription && (I = d.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
          const S = T.filter(
            (k) => Math.abs(1 - k.aspectRatio / y) < b && !(I != null && I.includes("macro") || I != null && I.includes("label"))
            // Separate out macro thumbnails and labels
          );
          if (S.length === 0) {
            let k = {
              aspectRatio: y,
              images: [d]
            };
            T.push(k);
          } else
            S[0].images.push(d);
          return T;
        }, []).map((T) => T.images).map((T, d) => {
          if (d !== 0)
            return new r.GeoTIFFTileSource(
              {
                GeoTIFF: g,
                GeoTIFFImages: T
              },
              h
            );
          switch (p) {
            case "qptiff":
              const y = Hn(T);
              return Array.from(y.values()).map((I, S) => new r.GeoTIFFTileSource(
                {
                  GeoTIFF: g,
                  GeoTIFFImages: I.images,
                  channel: {
                    name: I.name,
                    color: I.color
                  }
                },
                h
              ));
            default:
              return new r.GeoTIFFTileSource(
                {
                  GeoTIFF: g,
                  GeoTIFFImages: T
                },
                h
              );
          }
        });
      });
    }
    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    getTileWidth(l) {
      if (this.levels.length > l)
        return this.levels[l].tileWidth;
    }
    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    getTileHeight(l) {
      if (this.levels.length > l)
        return this.levels[l].tileHeight;
    }
    /**
     * @function
     * @param {Number} level
     */
    getLevelScale(l) {
      let h = NaN;
      return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (h = this.levels[l].width / this.levels[this.maxLevel].width), h;
    }
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    getTileHashKey(l, h, p) {
      var g;
      return `geotiffTileSource${this._tsCounter}_${((g = this == null ? void 0 : this.channel) == null ? void 0 : g.name) ?? ""}_${l}_${h}_${p}`;
    }
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(l, h, p) {
      return `${l}/${h}_${p}`;
    }
    downloadTileStart(l) {
      const h = !!r.converter && typeof l.fail == "function", p = "" + l.src, g = new AbortController();
      l.userData && (l.userData.abortController = g);
      const w = this.levels[l.tile.level];
      this.regionToTiffRaster(w, l.tile.x, l.tile.y, g.signal).then(async (m) => {
        if (h) {
          l.finish(m, p, m.getType());
          return;
        }
        const b = await Promise.resolve(a.rasterToContext2d(l.tile, m));
        l.finish(b.canvas);
      }).catch((m) => {
        const b = m && m.message ? m.message : String(m);
        h ? l.fail(b) : l.finish(null, p, b);
      });
    }
    downloadTileAbort(l) {
      const h = l.userData && l.userData.abortController;
      h ? h.abort() : $.console.error("Could not abort download: controller not available.");
    }
    setupComplete() {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    }
    setupLevels() {
      if (this._ready)
        return;
      let l = this.GeoTIFFImages.sort((b, x) => x.getWidth() - b.getWidth()), h = this._tileSize, p = this._tileSize, g = l[0].getWidth();
      this.width = g;
      let w = l[0].getHeight();
      if (this.height = w, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new r.Point(this.width, this.height), l.reduce(
        (b, x) => (b.width !== -1 && (b.valid = b.valid && x.getWidth() < b.width), b.width = x.getWidth(), b),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = l.map((b) => {
          let x = b.getWidth(), A = b.getHeight();
          return {
            width: x,
            height: A,
            tileWidth: this.options.tileWidth || b.getTileWidth() || h,
            tileHeight: this.options.tileHeight || b.getTileHeight() || p,
            image: b,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let b = Math.ceil(
          Math.log2(Math.max(g / h, w / p))
        ), x = [...Array(b).keys()].filter((A) => A % 2 == 0);
        this.levels = x.map((A) => {
          let T = Math.pow(2, A);
          const d = l.filter((I) => {
            const S = Math.pow(2, A - 1);
            return S >= 0 ? I.getWidth() * S < g && I.getWidth() * T >= g : I.getWidth() * T >= g;
          });
          if (d.length === 0)
            return null;
          const y = d[0];
          return {
            width: g / T,
            height: w / T,
            tileWidth: this.options.tileWidth || y.getTileWidth() || h,
            tileHeight: this.options.tileHeight || y.getTileHeight() || p,
            image: y,
            scaleFactor: T * y.getWidth() / g
          };
        }).filter((A) => A !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((b, x) => b.width - x.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    }
    static getGeoTiffFileDirectory(l) {
      var h;
      return ((h = l.getFileDirectory) == null ? void 0 : h.call(l)) ?? l.fileDirectory ?? {};
    }
    static getGeoTiffFileKey(l) {
      return [
        l.getWidth(),
        l.getHeight(),
        this.getGeoTiffFileDirectory(l).TileWidth ?? 0,
        this.getGeoTiffFileDirectory(l).TileLength ?? 0,
        (l.getWidth() / l.getHeight()).toFixed(6)
      ].join("|");
    }
    static async resolveLayout(l, h, p = {}) {
      const g = p.layout || {}, w = g.pyramid || "auto", m = Number.isFinite(g.planeIndex) ? g.planeIndex : 0, b = /* @__PURE__ */ new Map();
      for (const D of h) {
        const P = this.getGeoTiffFileKey(D);
        D.__key = P, this.getGeoTiffFileDirectory(D);
        const G = b.get(P) || [];
        G.push(D), b.set(P, G);
      }
      const x = h.map((D) => ({ im: D, w: D.getWidth(), h: D.getHeight() })).sort((D, P) => P.w - D.w), A = [], T = /* @__PURE__ */ new Set();
      for (const { im: D, w: P, h: G } of x) {
        const B = `${P}x${G}`;
        T.has(B) || (T.add(B), A.push(D));
      }
      const d = (D) => {
        if (D.length < 2) return !1;
        for (let G = 1; G < D.length; G++)
          if (D[G].getWidth() >= D[G - 1].getWidth() || D[G].getHeight() >= D[G - 1].getHeight()) return !1;
        const P = D[0].getWidth() / D[0].getHeight();
        for (const G of D) {
          const B = G.getWidth() / G.getHeight();
          if (Math.abs(B - P) > 0.01) return !1;
        }
        return !0;
      }, y = A, I = d(y), S = h.some((D) => {
        const P = this.getGeoTiffFileDirectory(D).SubIFDs;
        return P && P.length;
      });
      let k = "single";
      w === "ifd" ? k = I ? "ifd" : "single" : w === "subifd" ? k = S ? "subifd" : "single" : I ? k = "ifd" : S ? k = "subifd" : k = "single";
      const R = y[0], v = R.__key, F = b.get(v) || [R], U = F[Math.max(0, Math.min(F.length - 1, m))];
      return k === "subifd" && (Q(`${U.__key}-subifd-warn`, `[GeoTIFFTileSource] File was detected to contain SubIFD pyramids, 
however, geotiff.js does not support reading SubIFD files and is unable to display the pyramid. Only the
high-resolution lowest level will be shown. Note that loading such data can crash your browser due to memory consumption.`, "warn"), k = "ifd"), { strategy: k, planes: F, chosenPlane: U, ifdLevelsLargestToSmallest: y };
    }
    static async buildLevelImages(l, h, p) {
      const { strategy: g, chosenPlane: w, ifdLevelsLargestToSmallest: m, planes: b } = h, x = (A) => {
        var T;
        return ((T = A.getFileDirectory) == null ? void 0 : T.call(A)) ?? A.fileDirectory ?? {};
      };
      if (g === "ifd") {
        const A = [...m].sort((T, d) => T.getWidth() - d.getWidth());
        return b.length > 1 && Q(p, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, "warn"), A;
      }
      if (g === "subifd") {
        const T = x(w).SubIFDs;
        if (!T || !T.length)
          return Q(p, "[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.", "warn"), [w];
        if (typeof w.getSubIFDs == "function") {
          const y = [...await w.getSubIFDs(), w].sort((I, S) => I.getWidth() - S.getWidth());
          return b.length > 1 && Q(p, `[GeoTIFFTileSource] Detected a plane stack (${b.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), y;
        }
        return Q(p, "[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)", "warn"), [w];
      }
      return b.length > 1 && Q(p, `[GeoTIFFTileSource] Detected ${b.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), [w];
    }
    regionToTiffRaster(l, h, p, g) {
      var y, I, S, k;
      const w = this.options.logLatency && Date.now(), m = l.tileWidth, b = l.tileHeight, x = [h * m, p * b, (h + 1) * m, (p + 1) * b].map(
        (R) => R * l.scaleFactor
      ), A = l.image, T = (I = (y = A.fileDirectory) == null ? void 0 : y.Software) == null ? void 0 : I.startsWith("PerkinElmer-QPI");
      let d = null;
      if (T && ((S = A.fileDirectory) != null && S.ImageDescription))
        try {
          const v = (k = new DOMParser().parseFromString(A.fileDirectory.ImageDescription, "text/xml").querySelector("Color")) == null ? void 0 : k.textContent;
          d = v ? v.split(",").map((F) => parseInt(F, 10)) : null;
        } catch {
          d = null;
        }
      return A.readRasters({
        interleave: !1,
        window: x,
        pool: this._pool,
        width: m,
        height: b,
        signal: g
      }).then((R) => {
        const v = Array.isArray(R) ? R : [R], F = A.fileDirectory || {}, U = new a.TiffRaster({
          width: m,
          height: b,
          bands: v,
          samplesPerPixel: Math.max(F.SamplesPerPixel || 0, v.length),
          bitsPerSample: F.BitsPerSample || [8],
          sampleFormat: F.SampleFormat || null,
          photometricInterpretation: F.PhotometricInterpretation,
          colorMap: F.ColorMap || null,
          fileDirectory: F,
          hints: {
            ...this.channel ? { channel: this.channel } : {},
            ...d ? { tintRGB: d } : {}
          }
        });
        return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
          "Tile decode latency (ms):",
          Date.now() - w
        ), U;
      });
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
  Ge(f, "sharedPool", new Ut()), Ge(f, "userDefinedImagesFilter", (l, h) => (typeof h.imagesFilter < "u" && h.imagesFilter && (Array.isArray(h.imagesFilter) ? l = l.filter((p, g) => h.imagesFilter.includes(g)) : typeof h.imagesFilter == "function" && (l = l.filter(h.imagesFilter)), h.imagesFilter = void 0), l));
  let c = f;
  r.GeoTIFFTileSource = c;
};
(function(r, e) {
  typeof exports > "u" || typeof r.OpenSeadragon < "u" && e(r.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Qn);
export {
  _n as B,
  Fr as L,
  Pr as a,
  Qn as e,
  It as g
};
//# sourceMappingURL=main-CvinGM6s.js.map
