function C(t) {
  return (e, ...r) => lt(t, e, r);
}
function _(t, e) {
  return C(
    Ce(
      t,
      e
    ).get
  );
}
const {
  apply: lt,
  getOwnPropertyDescriptor: Ce,
  getPrototypeOf: ae,
  ownKeys: ct
} = Reflect, {
  iterator: Z,
  toStringTag: ft
} = Symbol, ht = Object, {
  create: le,
  defineProperty: ut
} = ht, gt = Array, dt = gt.prototype, De = dt[Z], yt = C(De), Ge = ArrayBuffer, pt = Ge.prototype;
_(pt, "byteLength");
const Se = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Se && _(Se.prototype, "byteLength");
const Fe = ae(Uint8Array);
Fe.from;
const D = Fe.prototype;
D[Z];
C(D.keys);
C(
  D.values
);
C(
  D.entries
);
C(D.set);
C(
  D.reverse
);
C(D.fill);
C(
  D.copyWithin
);
C(D.sort);
C(D.slice);
C(
  D.subarray
);
_(
  D,
  "buffer"
);
_(
  D,
  "byteOffset"
);
_(
  D,
  "length"
);
_(
  D,
  ft
);
const mt = Uint8Array, Me = Uint16Array, ce = Uint32Array, xt = Float32Array, X = ae([][Z]()), Oe = C(X.next), bt = C(function* () {
}().next), wt = ae(X), At = DataView.prototype, Tt = C(
  At.getUint16
), fe = WeakMap, Re = fe.prototype, Ee = C(Re.get), St = C(Re.set), Ue = new fe(), It = le(null, {
  next: {
    value: function() {
      const e = Ee(Ue, this);
      return Oe(e);
    }
  },
  [Z]: {
    value: function() {
      return this;
    }
  }
});
function Pt(t) {
  if (t[Z] === De && X.next === Oe)
    return t;
  const e = le(It);
  return St(Ue, e, yt(t)), e;
}
const Bt = new fe(), Ct = le(wt, {
  next: {
    value: function() {
      const e = Ee(Bt, this);
      return bt(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const t of ct(X))
  t !== "next" && ut(Ct, t, Ce(X, t));
const ke = new Ge(4), Dt = new xt(ke), Gt = new ce(ke), M = new Me(512), O = new mt(512);
for (let t = 0; t < 256; ++t) {
  const e = t - 127;
  e < -24 ? (M[t] = 0, M[t | 256] = 32768, O[t] = 24, O[t | 256] = 24) : e < -14 ? (M[t] = 1024 >> -e - 14, M[t | 256] = 1024 >> -e - 14 | 32768, O[t] = -e - 1, O[t | 256] = -e - 1) : e <= 15 ? (M[t] = e + 15 << 10, M[t | 256] = e + 15 << 10 | 32768, O[t] = 13, O[t | 256] = 13) : e < 128 ? (M[t] = 31744, M[t | 256] = 64512, O[t] = 24, O[t | 256] = 24) : (M[t] = 31744, M[t | 256] = 64512, O[t] = 13, O[t | 256] = 13);
}
const he = new ce(2048);
for (let t = 1; t < 1024; ++t) {
  let e = t << 13, r = 0;
  for (; !(e & 8388608); )
    e <<= 1, r -= 8388608;
  e &= -8388609, r += 947912704, he[t] = e | r;
}
for (let t = 1024; t < 2048; ++t)
  he[t] = 939524096 + (t - 1024 << 13);
const v = new ce(64);
for (let t = 1; t < 31; ++t)
  v[t] = t << 23;
v[31] = 1199570944;
v[32] = 2147483648;
for (let t = 33; t < 63; ++t)
  v[t] = 2147483648 + (t - 32 << 23);
v[63] = 3347054592;
const Ne = new Me(64);
for (let t = 1; t < 64; ++t)
  t !== 32 && (Ne[t] = 1024);
function Ft(t) {
  const e = t >> 10;
  return Gt[0] = he[Ne[e] + (t & 1023)] + v[e], Dt[0];
}
function Le(t, e, ...r) {
  return Ft(
    Tt(t, e, ...Pt(r))
  );
}
function _e(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ue = { exports: {} };
function ve(t, e, r) {
  const i = r && r.debug || !1;
  i && console.log("[xml-utils] getting " + e + " in " + t);
  const n = typeof t == "object" ? t.outer : t, o = n.slice(0, n.indexOf(">") + 1), a = ['"', "'"];
  for (let s = 0; s < a.length; s++) {
    const c = a[s], l = e + "\\=" + c + "([^" + c + "]*)" + c;
    i && console.log("[xml-utils] pattern:", l);
    const f = new RegExp(l).exec(o);
    if (i && console.log("[xml-utils] match:", f), f) return f[1];
  }
}
ue.exports = ve;
ue.exports.default = ve;
var Mt = ue.exports, re = /* @__PURE__ */ _e(Mt), ge = { exports: {} }, de = { exports: {} }, ye = { exports: {} };
function Ke(t, e, r) {
  const n = new RegExp(e).exec(t.slice(r));
  return n ? r + n.index : -1;
}
ye.exports = Ke;
ye.exports.default = Ke;
var Ot = ye.exports, pe = { exports: {} };
function je(t, e, r) {
  const n = new RegExp(e).exec(t.slice(r));
  return n ? r + n.index + n[0].length - 1 : -1;
}
pe.exports = je;
pe.exports.default = je;
var Rt = pe.exports, me = { exports: {} };
function Ve(t, e) {
  const r = new RegExp(e, "g"), i = t.match(r);
  return i ? i.length : 0;
}
me.exports = Ve;
me.exports.default = Ve;
var Et = me.exports;
const Ut = Ot, ne = Rt, Ie = Et;
function Ye(t, e, r) {
  const i = r && r.debug || !1, n = !(r && typeof r.nested === !1), o = r && r.startIndex || 0;
  i && console.log("[xml-utils] starting findTagByName with", e, " and ", r);
  const a = Ut(t, `<${e}[ 
>/]`, o);
  if (i && console.log("[xml-utils] start:", a), a === -1) return;
  const s = t.slice(a + e.length);
  let c = ne(s, "^[^<]*[ /]>", 0);
  const l = c !== -1 && s[c - 1] === "/";
  if (i && console.log("[xml-utils] selfClosing:", l), l === !1)
    if (n) {
      let g = 0, u = 1, p = 0;
      for (; (c = ne(s, "[ /]" + e + ">", g)) !== -1; ) {
        const d = s.substring(g, c + 1);
        if (u += Ie(d, "<" + e + `[ 
	>]`), p += Ie(d, "</" + e + ">"), p >= u) break;
        g = c;
      }
    } else
      c = ne(s, "[ /]" + e + ">", 0);
  const h = a + e.length + c + 1;
  if (i && console.log("[xml-utils] end:", h), h === -1) return;
  const f = t.slice(a, h);
  let y;
  return l ? y = null : y = f.slice(f.indexOf(">") + 1, f.lastIndexOf("<")), { inner: y, outer: f, start: a, end: h };
}
de.exports = Ye;
de.exports.default = Ye;
var kt = de.exports;
const Nt = kt;
function $e(t, e, r) {
  const i = [], n = r && r.debug || !1, o = r && typeof r.nested == "boolean" ? r.nested : !0;
  let a = r && r.startIndex || 0, s;
  for (; s = Nt(t, e, { debug: n, startIndex: a }); )
    o ? a = s.start + 1 + e.length : a = s.end, i.push(s);
  return n && console.log("findTagsByName found", i.length, "tags"), i;
}
ge.exports = $e;
ge.exports.default = $e;
var Lt = ge.exports, _t = /* @__PURE__ */ _e(Lt);
const $ = {
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
}, R = {};
for (const t in $)
  $.hasOwnProperty(t) && (R[$[t]] = parseInt(t, 10));
const vt = [
  R.BitsPerSample,
  R.ExtraSamples,
  R.SampleFormat,
  R.StripByteCounts,
  R.StripOffsets,
  R.StripRowCounts,
  R.TileByteCounts,
  R.TileOffsets,
  R.SubIFDs
], ie = {
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
for (const t in ie)
  ie.hasOwnProperty(t) && (w[ie[t]] = parseInt(t, 10));
const G = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8
}, Kt = {
  Unspecified: 0
}, Fr = {
  AddCompression: 1
}, Mr = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, jt = {
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
function Vt(t, e) {
  const { width: r, height: i } = t, n = new Uint8Array(r * i * 3);
  let o;
  for (let a = 0, s = 0; a < t.length; ++a, s += 3)
    o = 256 - t[a] / e * 256, n[s] = o, n[s + 1] = o, n[s + 2] = o;
  return n;
}
function Yt(t, e) {
  const { width: r, height: i } = t, n = new Uint8Array(r * i * 3);
  let o;
  for (let a = 0, s = 0; a < t.length; ++a, s += 3)
    o = t[a] / e * 256, n[s] = o, n[s + 1] = o, n[s + 2] = o;
  return n;
}
function $t(t, e) {
  const { width: r, height: i } = t, n = new Uint8Array(r * i * 3), o = e.length / 3, a = e.length / 3 * 2;
  for (let s = 0, c = 0; s < t.length; ++s, c += 3) {
    const l = t[s];
    n[c] = e[l] / 65536 * 256, n[c + 1] = e[l + o] / 65536 * 256, n[c + 2] = e[l + a] / 65536 * 256;
  }
  return n;
}
function Xt(t) {
  const { width: e, height: r } = t, i = new Uint8Array(e * r * 3);
  for (let n = 0, o = 0; n < t.length; n += 4, o += 3) {
    const a = t[n], s = t[n + 1], c = t[n + 2], l = t[n + 3];
    i[o] = 255 * ((255 - a) / 256) * ((255 - l) / 256), i[o + 1] = 255 * ((255 - s) / 256) * ((255 - l) / 256), i[o + 2] = 255 * ((255 - c) / 256) * ((255 - l) / 256);
  }
  return i;
}
function Zt(t) {
  const { width: e, height: r } = t, i = new Uint8ClampedArray(e * r * 3);
  for (let n = 0, o = 0; n < t.length; n += 3, o += 3) {
    const a = t[n], s = t[n + 1], c = t[n + 2];
    i[o] = a + 1.402 * (c - 128), i[o + 1] = a - 0.34414 * (s - 128) - 0.71414 * (c - 128), i[o + 2] = a + 1.772 * (s - 128);
  }
  return i;
}
const zt = 0.95047, qt = 1, Ht = 1.08883;
function Jt(t) {
  const { width: e, height: r } = t, i = new Uint8Array(e * r * 3);
  for (let n = 0, o = 0; n < t.length; n += 3, o += 3) {
    const a = t[n + 0], s = t[n + 1] << 24 >> 24, c = t[n + 2] << 24 >> 24;
    let l = (a + 16) / 116, h = s / 500 + l, f = l - c / 200, y, g, u;
    h = zt * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), l = qt * (l * l * l > 8856e-6 ? l * l * l : (l - 16 / 116) / 7.787), f = Ht * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), y = h * 3.2406 + l * -1.5372 + f * -0.4986, g = h * -0.9689 + l * 1.8758 + f * 0.0415, u = h * 0.0557 + l * -0.204 + f * 1.057, y = y > 31308e-7 ? 1.055 * y ** (1 / 2.4) - 0.055 : 12.92 * y, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u, i[o] = Math.max(0, Math.min(1, y)) * 255, i[o + 1] = Math.max(0, Math.min(1, g)) * 255, i[o + 2] = Math.max(0, Math.min(1, u)) * 255;
  }
  return i;
}
const Xe = /* @__PURE__ */ new Map();
function U(t, e) {
  Array.isArray(t) || (t = [t]), t.forEach((r) => Xe.set(r, e));
}
async function Qt(t) {
  const e = Xe.get(t.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${t.Compression}`);
  const r = await e();
  return new r(t);
}
U([void 0, 1], () => import("./raw-CaSL8pVO.js").then((t) => t.default));
U(5, () => import("./lzw-DQ6ibF74.js").then((t) => t.default));
U(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
U(7, () => import("./jpeg-BpvZRbzr.js").then((t) => t.default));
U([8, 32946], () => import("./deflate-DARM-wVe.js").then((t) => t.default));
U(32773, () => import("./packbits-BuzK6gM3.js").then((t) => t.default));
U(
  34887,
  () => import("./lerc-Ci3PIh_t.js").then(async (t) => (await t.zstd.init(), t)).then((t) => t.default)
);
U(50001, () => import("./webimage--SJddlky.js").then((t) => t.default));
function W(t, e, r, i = 1) {
  return new (Object.getPrototypeOf(t)).constructor(e * r * i);
}
function Wt(t, e, r, i, n) {
  const o = e / i, a = r / n;
  return t.map((s) => {
    const c = W(s, i, n);
    for (let l = 0; l < n; ++l) {
      const h = Math.min(Math.round(a * l), r - 1);
      for (let f = 0; f < i; ++f) {
        const y = Math.min(Math.round(o * f), e - 1), g = s[h * e + y];
        c[l * i + f] = g;
      }
    }
    return c;
  });
}
function L(t, e, r) {
  return (1 - r) * t + r * e;
}
function er(t, e, r, i, n) {
  const o = e / i, a = r / n;
  return t.map((s) => {
    const c = W(s, i, n);
    for (let l = 0; l < n; ++l) {
      const h = a * l, f = Math.floor(h), y = Math.min(Math.ceil(h), r - 1);
      for (let g = 0; g < i; ++g) {
        const u = o * g, p = u % 1, d = Math.floor(u), x = Math.min(Math.ceil(u), e - 1), m = s[f * e + d], T = s[f * e + x], b = s[y * e + d], A = s[y * e + x], I = L(
          L(m, T, p),
          L(b, A, p),
          h % 1
        );
        c[l * i + g] = I;
      }
    }
    return c;
  });
}
function tr(t, e, r, i, n, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return Wt(t, e, r, i, n);
    case "bilinear":
    case "linear":
      return er(t, e, r, i, n);
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function rr(t, e, r, i, n, o) {
  const a = e / i, s = r / n, c = W(t, i, n, o);
  for (let l = 0; l < n; ++l) {
    const h = Math.min(Math.round(s * l), r - 1);
    for (let f = 0; f < i; ++f) {
      const y = Math.min(Math.round(a * f), e - 1);
      for (let g = 0; g < o; ++g) {
        const u = t[h * e * o + y * o + g];
        c[l * i * o + f * o + g] = u;
      }
    }
  }
  return c;
}
function nr(t, e, r, i, n, o) {
  const a = e / i, s = r / n, c = W(t, i, n, o);
  for (let l = 0; l < n; ++l) {
    const h = s * l, f = Math.floor(h), y = Math.min(Math.ceil(h), r - 1);
    for (let g = 0; g < i; ++g) {
      const u = a * g, p = u % 1, d = Math.floor(u), x = Math.min(Math.ceil(u), e - 1);
      for (let m = 0; m < o; ++m) {
        const T = t[f * e * o + d * o + m], b = t[f * e * o + x * o + m], A = t[y * e * o + d * o + m], I = t[y * e * o + x * o + m], B = L(
          L(T, b, p),
          L(A, I, p),
          h % 1
        );
        c[l * i * o + g * o + m] = B;
      }
    }
  }
  return c;
}
function ir(t, e, r, i, n, o, a = "nearest") {
  switch (a.toLowerCase()) {
    case "nearest":
      return rr(
        t,
        e,
        r,
        i,
        n,
        o
      );
    case "bilinear":
    case "linear":
      return nr(
        t,
        e,
        r,
        i,
        n,
        o
      );
    default:
      throw new Error(`Unsupported resampling method: '${a}'`);
  }
}
function or(t, e, r) {
  let i = 0;
  for (let n = e; n < r; ++n)
    i += t[n];
  return i;
}
function oe(t, e, r) {
  switch (t) {
    case 1:
      if (e <= 8)
        return new Uint8Array(r);
      if (e <= 16)
        return new Uint16Array(r);
      if (e <= 32)
        return new Uint32Array(r);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(r);
      if (e === 16)
        return new Int16Array(r);
      if (e === 32)
        return new Int32Array(r);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(r);
        case 64:
          return new Float64Array(r);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function sr(t, e) {
  return (t === 1 || t === 2) && e <= 32 && e % 8 === 0 ? !1 : !(t === 3 && (e === 16 || e === 32 || e === 64));
}
function ar(t, e, r, i, n, o, a) {
  const s = new DataView(t), c = r === 2 ? a * o : a * o * i, l = r === 2 ? 1 : i, h = oe(e, n, c), f = parseInt("1".repeat(n), 2);
  if (e === 1) {
    let y;
    r === 1 ? y = i * n : y = n;
    let g = o * y;
    g & 7 && (g = g + 7 & -8);
    for (let u = 0; u < a; ++u) {
      const p = u * g;
      for (let d = 0; d < o; ++d) {
        const x = p + d * l * n;
        for (let m = 0; m < l; ++m) {
          const T = x + m * n, b = (u * o + d) * l + m, A = Math.floor(T / 8), I = T % 8;
          if (I + n <= 8)
            h[b] = s.getUint8(A) >> 8 - n - I & f;
          else if (I + n <= 16)
            h[b] = s.getUint16(A) >> 16 - n - I & f;
          else if (I + n <= 24) {
            const B = s.getUint16(A) << 8 | s.getUint8(A + 2);
            h[b] = B >> 24 - n - I & f;
          } else
            h[b] = s.getUint32(A) >> 32 - n - I & f;
        }
      }
    }
  }
  return h.buffer;
}
class lr {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, r, i, n, o, a) {
    this.fileDirectory = e, this.geoKeys = r, this.dataView = i, this.littleEndian = n, this.tiles = o ? {} : null, this.isTiled = !e.StripOffsets;
    const s = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof s > "u" ? 1 : s, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
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
    for (let r = 0; r < this.fileDirectory.BitsPerSample.length; ++r)
      e += this.getSampleByteSize(r);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const r = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, i = this.fileDirectory.BitsPerSample[e];
    switch (r) {
      case 1:
        if (i <= 8)
          return DataView.prototype.getUint8;
        if (i <= 16)
          return DataView.prototype.getUint16;
        if (i <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (i <= 8)
          return DataView.prototype.getInt8;
        if (i <= 16)
          return DataView.prototype.getInt16;
        if (i <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (i) {
          case 16:
            return function(n, o) {
              return Le(this, n, o);
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
  getArrayForSample(e, r) {
    const i = this.getSampleFormat(e), n = this.getBitsPerSample(e);
    return oe(i, n, r);
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
  async getTileOrStrip(e, r, i, n, o) {
    const a = Math.ceil(this.getWidth() / this.getTileWidth()), s = Math.ceil(this.getHeight() / this.getTileHeight());
    let c;
    const { tiles: l } = this;
    this.planarConfiguration === 1 ? c = r * a + e : this.planarConfiguration === 2 && (c = i * a * s + r * a + e);
    let h, f;
    this.isTiled ? (h = this.fileDirectory.TileOffsets[c], f = this.fileDirectory.TileByteCounts[c]) : (h = this.fileDirectory.StripOffsets[c], f = this.fileDirectory.StripByteCounts[c]);
    const y = (await this.source.fetch([{ offset: h, length: f }], o))[0];
    let g;
    return l === null || !l[c] ? (g = (async () => {
      let u = await n.decode(this.fileDirectory, y);
      const p = this.getSampleFormat(), d = this.getBitsPerSample();
      return sr(p, d) && (u = ar(
        u,
        p,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        d,
        this.getTileWidth(),
        this.getBlockHeight(r)
      )), u;
    })(), l !== null && (l[c] = g)) : g = l[c], { x: e, y: r, sample: i, data: await g };
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
  async _readRaster(e, r, i, n, o, a, s, c, l) {
    const h = this.getTileWidth(), f = this.getTileHeight(), y = this.getWidth(), g = this.getHeight(), u = Math.max(Math.floor(e[0] / h), 0), p = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(y / h)
    ), d = Math.max(Math.floor(e[1] / f), 0), x = Math.min(
      Math.ceil(e[3] / f),
      Math.ceil(g / f)
    ), m = e[2] - e[0];
    let T = this.getBytesPerPixel();
    const b = [], A = [];
    for (let S = 0; S < r.length; ++S)
      this.planarConfiguration === 1 ? b.push(or(this.fileDirectory.BitsPerSample, 0, r[S]) / 8) : b.push(0), A.push(this.getReaderForSample(r[S]));
    const I = [], { littleEndian: B } = this;
    for (let S = d; S < x; ++S)
      for (let k = u; k < p; ++k) {
        let ee;
        this.planarConfiguration === 1 && (ee = this.getTileOrStrip(k, S, 0, o, l));
        for (let z = 0; z < r.length; ++z) {
          const q = z, Ae = r[z];
          this.planarConfiguration === 2 && (T = this.getSampleByteSize(Ae), ee = this.getTileOrStrip(k, S, Ae, o, l));
          const We = ee.then((K) => {
            const et = K.data, tt = new DataView(et), te = this.getBlockHeight(K.y), j = K.y * f, H = K.x * h, rt = j + te, nt = (K.x + 1) * h, it = A[q], ot = Math.min(te, te - (rt - e[3]), g - j), st = Math.min(h, h - (nt - e[2]), y - H);
            for (let V = Math.max(0, e[1] - j); V < ot; ++V)
              for (let Y = Math.max(0, e[0] - H); Y < st; ++Y) {
                const at = (V * h + Y) * T, Te = it.call(
                  tt,
                  at + b[q],
                  B
                );
                let J;
                n ? (J = (V + j - e[1]) * m * r.length + (Y + H - e[0]) * r.length + q, i[J] = Te) : (J = (V + j - e[1]) * m + Y + H - e[0], i[q][J] = Te);
              }
          });
          I.push(We);
        }
      }
    if (await Promise.all(I), a && e[2] - e[0] !== a || s && e[3] - e[1] !== s) {
      let S;
      return n ? S = ir(
        i,
        e[2] - e[0],
        e[3] - e[1],
        a,
        s,
        r.length,
        c
      ) : S = tr(
        i,
        e[2] - e[0],
        e[3] - e[1],
        a,
        s,
        c
      ), S.width = a, S.height = s, S;
    }
    return i.width = a || e[2] - e[0], i.height = s || e[3] - e[1], i;
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
    samples: r = [],
    interleave: i,
    pool: n = null,
    width: o,
    height: a,
    resampleMethod: s,
    fillValue: c,
    signal: l
  } = {}) {
    const h = e || [0, 0, this.getWidth(), this.getHeight()];
    if (h[0] > h[2] || h[1] > h[3])
      throw new Error("Invalid subsets");
    const f = h[2] - h[0], y = h[3] - h[1], g = f * y, u = this.getSamplesPerPixel();
    if (!r || !r.length)
      for (let m = 0; m < u; ++m)
        r.push(m);
    else
      for (let m = 0; m < r.length; ++m)
        if (r[m] >= u)
          return Promise.reject(new RangeError(`Invalid sample index '${r[m]}'.`));
    let p;
    if (i) {
      const m = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, T = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      p = oe(m, T, g * r.length), c && p.fill(c);
    } else {
      p = [];
      for (let m = 0; m < r.length; ++m) {
        const T = this.getArrayForSample(r[m], g);
        Array.isArray(c) && m < c.length ? T.fill(c[m]) : c && !Array.isArray(c) && T.fill(c), p.push(T);
      }
    }
    const d = n || await Qt(this.fileDirectory);
    return await this._readRaster(
      h,
      r,
      p,
      i,
      d,
      o,
      a,
      s,
      l
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
    interleave: r = !0,
    pool: i = null,
    width: n,
    height: o,
    resampleMethod: a,
    enableAlpha: s = !1,
    signal: c
  } = {}) {
    const l = e || [0, 0, this.getWidth(), this.getHeight()];
    if (l[0] > l[2] || l[1] > l[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === G.RGB) {
      let x = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Kt.Unspecified && s) {
        x = [];
        for (let m = 0; m < this.fileDirectory.BitsPerSample.length; m += 1)
          x.push(m);
      }
      return this.readRasters({
        window: e,
        interleave: r,
        samples: x,
        pool: i,
        width: n,
        height: o,
        resampleMethod: a,
        signal: c
      });
    }
    let f;
    switch (h) {
      case G.WhiteIsZero:
      case G.BlackIsZero:
      case G.Palette:
        f = [0];
        break;
      case G.CMYK:
        f = [0, 1, 2, 3];
        break;
      case G.YCbCr:
      case G.CIELab:
        f = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const y = {
      window: l,
      interleave: !0,
      samples: f,
      pool: i,
      width: n,
      height: o,
      resampleMethod: a,
      signal: c
    }, { fileDirectory: g } = this, u = await this.readRasters(y), p = 2 ** this.fileDirectory.BitsPerSample[0];
    let d;
    switch (h) {
      case G.WhiteIsZero:
        d = Vt(u, p);
        break;
      case G.BlackIsZero:
        d = Yt(u, p);
        break;
      case G.Palette:
        d = $t(u, g.ColorMap);
        break;
      case G.CMYK:
        d = Xt(u);
        break;
      case G.YCbCr:
        d = Zt(u);
        break;
      case G.CIELab:
        d = Jt(u);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!r) {
      const x = new Uint8Array(d.length / 3), m = new Uint8Array(d.length / 3), T = new Uint8Array(d.length / 3);
      for (let b = 0, A = 0; b < d.length; b += 3, ++A)
        x[A] = d[b], m[A] = d[b + 1], T[A] = d[b + 2];
      d = [x, m, T];
    }
    return d.width = u.width, d.height = u.height, d;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let r = 0; r < this.fileDirectory.ModelTiepoint.length; r += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[r],
        j: this.fileDirectory.ModelTiepoint[r + 1],
        k: this.fileDirectory.ModelTiepoint[r + 2],
        x: this.fileDirectory.ModelTiepoint[r + 3],
        y: this.fileDirectory.ModelTiepoint[r + 4],
        z: this.fileDirectory.ModelTiepoint[r + 5]
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
    const r = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const i = this.fileDirectory.GDAL_METADATA;
    let n = _t(i, "Item");
    e === null ? n = n.filter((o) => re(o, "sample") === void 0) : n = n.filter((o) => Number(re(o, "sample")) === e);
    for (let o = 0; o < n.length; ++o) {
      const a = n[o];
      r[re(a, "name")] = a.inner;
    }
    return r;
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
    const e = this.fileDirectory.ModelTiepoint, r = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (r)
      return [
        r[3],
        r[7],
        r[11]
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
    const r = this.fileDirectory.ModelPixelScale, i = this.fileDirectory.ModelTransformation;
    if (r)
      return [
        r[0],
        -r[1],
        r[2]
      ];
    if (i)
      return i[1] === 0 && i[4] === 0 ? [
        i[0],
        -i[5],
        i[10]
      ] : [
        Math.sqrt(i[0] * i[0] + i[4] * i[4]),
        -Math.sqrt(i[1] * i[1] + i[5] * i[5]),
        i[10]
      ];
    if (e) {
      const [n, o, a] = e.getResolution();
      return [
        n * e.getWidth() / this.getWidth(),
        o * e.getHeight() / this.getHeight(),
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
    const r = this.getHeight(), i = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [n, o, a, s, c, l, h, f] = this.fileDirectory.ModelTransformation, g = [
        [0, 0],
        [0, r],
        [i, 0],
        [i, r]
      ].map(([d, x]) => [
        s + n * d + o * x,
        f + c * d + l * x
      ]), u = g.map((d) => d[0]), p = g.map((d) => d[1]);
      return [
        Math.min(...u),
        Math.min(...p),
        Math.max(...u),
        Math.max(...p)
      ];
    } else {
      const n = this.getOrigin(), o = this.getResolution(), a = n[0], s = n[1], c = a + o[0] * i, l = s + o[1] * r;
      return [
        Math.min(a, c),
        Math.min(s, l),
        Math.max(a, c),
        Math.max(s, l)
      ];
    }
  }
}
class cr {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, r) {
    const i = this.getUint32(e, r), n = this.getUint32(e + 4, r);
    let o;
    if (r) {
      if (o = i + 2 ** 32 * n, !Number.isSafeInteger(o))
        throw new Error(
          `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return o;
    }
    if (o = 2 ** 32 * i + n, !Number.isSafeInteger(o))
      throw new Error(
        `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return o;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, r) {
    let i = 0;
    const n = (this._dataView.getUint8(e + (r ? 7 : 0)) & 128) > 0;
    let o = !0;
    for (let a = 0; a < 8; a++) {
      let s = this._dataView.getUint8(e + (r ? a : 7 - a));
      n && (o ? s !== 0 && (s = ~(s - 1) & 255, o = !1) : s = ~s & 255), i += s * 256 ** a;
    }
    return n && (i = -i), i;
  }
  getUint8(e, r) {
    return this._dataView.getUint8(e, r);
  }
  getInt8(e, r) {
    return this._dataView.getInt8(e, r);
  }
  getUint16(e, r) {
    return this._dataView.getUint16(e, r);
  }
  getInt16(e, r) {
    return this._dataView.getInt16(e, r);
  }
  getUint32(e, r) {
    return this._dataView.getUint32(e, r);
  }
  getInt32(e, r) {
    return this._dataView.getInt32(e, r);
  }
  getFloat16(e, r) {
    return Le(this._dataView, e, r);
  }
  getFloat32(e, r) {
    return this._dataView.getFloat32(e, r);
  }
  getFloat64(e, r) {
    return this._dataView.getFloat64(e, r);
  }
}
class fr {
  constructor(e, r, i, n) {
    this._dataView = new DataView(e), this._sliceOffset = r, this._littleEndian = i, this._bigTiff = n;
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
  covers(e, r) {
    return this.sliceOffset <= e && this.sliceTop >= e + r;
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
    const r = this.readUint32(e), i = this.readUint32(e + 4);
    let n;
    if (this._littleEndian) {
      if (n = r + 2 ** 32 * i, !Number.isSafeInteger(n))
        throw new Error(
          `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return n;
    }
    if (n = 2 ** 32 * r + i, !Number.isSafeInteger(n))
      throw new Error(
        `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return n;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let r = 0;
    const i = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let n = !0;
    for (let o = 0; o < 8; o++) {
      let a = this._dataView.getUint8(
        e + (this._littleEndian ? o : 7 - o)
      );
      i && (n ? a !== 0 && (a = ~(a - 1) & 255, n = !1) : a = ~a & 255), r += a * 256 ** o;
    }
    return i && (r = -r), r;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
class hr {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, r = void 0) {
    return Promise.all(
      e.map((i) => this.fetchSlice(i, r))
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
class xe extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, xe), this.name = "AbortError";
  }
}
class ur extends hr {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, r) {
    if (r && r.aborted)
      throw new xe("Request aborted");
    return this.arrayBuffer.slice(e.offset, e.offset + e.length);
  }
}
function gr(t) {
  return new ur(t);
}
function se(t) {
  switch (t) {
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
      throw new RangeError(`Invalid field type: ${t}`);
  }
}
function dr(t) {
  const e = t.GeoKeyDirectory;
  if (!e)
    return null;
  const r = {};
  for (let i = 4; i <= e[3] * 4; i += 4) {
    const n = jt[e[i]], o = e[i + 1] ? $[e[i + 1]] : null, a = e[i + 2], s = e[i + 3];
    let c = null;
    if (!o)
      c = s;
    else {
      if (c = t[o], typeof c > "u" || c === null)
        throw new Error(`Could not get value of geoKey '${n}'.`);
      typeof c == "string" ? c = c.substring(s, s + a - 1) : c.subarray && (c = c.subarray(s, s + a), a === 1 && (c = c[0]));
    }
    r[n] = c;
  }
  return r;
}
function N(t, e, r, i) {
  let n = null, o = null;
  const a = se(e);
  switch (e) {
    case w.BYTE:
    case w.ASCII:
    case w.UNDEFINED:
      n = new Uint8Array(r), o = t.readUint8;
      break;
    case w.SBYTE:
      n = new Int8Array(r), o = t.readInt8;
      break;
    case w.SHORT:
      n = new Uint16Array(r), o = t.readUint16;
      break;
    case w.SSHORT:
      n = new Int16Array(r), o = t.readInt16;
      break;
    case w.LONG:
    case w.IFD:
      n = new Uint32Array(r), o = t.readUint32;
      break;
    case w.SLONG:
      n = new Int32Array(r), o = t.readInt32;
      break;
    case w.LONG8:
    case w.IFD8:
      n = new Array(r), o = t.readUint64;
      break;
    case w.SLONG8:
      n = new Array(r), o = t.readInt64;
      break;
    case w.RATIONAL:
      n = new Uint32Array(r * 2), o = t.readUint32;
      break;
    case w.SRATIONAL:
      n = new Int32Array(r * 2), o = t.readInt32;
      break;
    case w.FLOAT:
      n = new Float32Array(r), o = t.readFloat32;
      break;
    case w.DOUBLE:
      n = new Float64Array(r), o = t.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === w.RATIONAL || e === w.SRATIONAL)
    for (let s = 0; s < r; s += 2)
      n[s] = o.call(
        t,
        i + s * a
      ), n[s + 1] = o.call(
        t,
        i + (s * a + 4)
      );
  else
    for (let s = 0; s < r; ++s)
      n[s] = o.call(
        t,
        i + s * a
      );
  return e === w.ASCII ? new TextDecoder("utf-8").decode(n) : n;
}
class yr {
  constructor(e, r, i) {
    this.fileDirectory = e, this.geoKeyDirectory = r, this.nextIFDByteOffset = i;
  }
}
class Q extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class pr {
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
    const { window: r, width: i, height: n } = e;
    let { resX: o, resY: a, bbox: s } = e;
    const c = await this.getImage();
    let l = c;
    const h = await this.getImageCount(), f = c.getBoundingBox();
    if (r && s)
      throw new Error('Both "bbox" and "window" passed.');
    if (i || n) {
      if (r) {
        const [u, p] = c.getOrigin(), [d, x] = c.getResolution();
        s = [
          u + r[0] * d,
          p + r[1] * x,
          u + r[2] * d,
          p + r[3] * x
        ];
      }
      const g = s || f;
      if (i) {
        if (o)
          throw new Error("Both width and resX passed");
        o = (g[2] - g[0]) / i;
      }
      if (n) {
        if (a)
          throw new Error("Both width and resY passed");
        a = (g[3] - g[1]) / n;
      }
    }
    if (o || a) {
      const g = [];
      for (let u = 0; u < h; ++u) {
        const p = await this.getImage(u), { SubfileType: d, NewSubfileType: x } = p.fileDirectory;
        (u === 0 || d === 2 || x & 1) && g.push(p);
      }
      g.sort((u, p) => u.getWidth() - p.getWidth());
      for (let u = 0; u < g.length; ++u) {
        const p = g[u], d = (f[2] - f[0]) / p.getWidth(), x = (f[3] - f[1]) / p.getHeight();
        if (l = p, o && o > d || a && a > x)
          break;
      }
    }
    let y = r;
    if (s) {
      const [g, u] = c.getOrigin(), [p, d] = l.getResolution(c);
      y = [
        Math.round((s[0] - g) / p),
        Math.round((s[1] - u) / d),
        Math.round((s[2] - g) / p),
        Math.round((s[3] - u) / d)
      ], y = [
        Math.min(y[0], y[2]),
        Math.min(y[1], y[3]),
        Math.max(y[0], y[2]),
        Math.max(y[1], y[3])
      ];
    }
    return l.readRasters({ ...e, window: y });
  }
}
class be extends pr {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, r, i, n, o = {}) {
    super(), this.source = e, this.littleEndian = r, this.bigTiff = i, this.firstIFDOffset = n, this.cache = o.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, r) {
    const i = this.bigTiff ? 4048 : 1024;
    return new fr(
      (await this.source.fetch([{
        offset: e,
        length: typeof r < "u" ? r : i
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
    const r = this.bigTiff ? 20 : 12, i = this.bigTiff ? 8 : 2;
    let n = await this.getSlice(e);
    const o = this.bigTiff ? n.readUint64(e) : n.readUint16(e), a = o * r + (this.bigTiff ? 16 : 6);
    n.covers(e, a) || (n = await this.getSlice(e, a));
    const s = {};
    let c = e + (this.bigTiff ? 8 : 2);
    for (let f = 0; f < o; c += r, ++f) {
      const y = n.readUint16(c), g = n.readUint16(c + 2), u = this.bigTiff ? n.readUint64(c + 4) : n.readUint32(c + 4);
      let p, d;
      const x = se(g), m = c + (this.bigTiff ? 12 : 8);
      if (x * u <= (this.bigTiff ? 8 : 4))
        p = N(n, g, u, m);
      else {
        const T = n.readOffset(m), b = se(g) * u;
        if (n.covers(T, b))
          p = N(n, g, u, T);
        else {
          const A = await this.getSlice(T, b);
          p = N(A, g, u, T);
        }
      }
      u === 1 && vt.indexOf(y) === -1 && !(g === w.RATIONAL || g === w.SRATIONAL) ? d = p[0] : d = p, s[$[y]] = d;
    }
    const l = dr(s), h = n.readOffset(
      e + i + r * o
    );
    return new yr(
      s,
      l,
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
      } catch (r) {
        throw r instanceof Q ? new Q(e) : r;
      }
    return this.ifdRequests[e] = (async () => {
      const r = await this.ifdRequests[e - 1];
      if (r.nextIFDByteOffset === 0)
        throw new Q(e);
      return this.parseFileDirectoryAt(r.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const r = await this.requestIFD(e);
    return new lr(
      r.fileDirectory,
      r.geoKeyDirectory,
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
    let e = 0, r = !0;
    for (; r; )
      try {
        await this.requestIFD(e), ++e;
      } catch (i) {
        if (i instanceof Q)
          r = !1;
        else
          throw i;
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
    const r = "GDAL_STRUCTURAL_METADATA_SIZE=", i = r.length + 100;
    let n = await this.getSlice(e, i);
    if (r === N(n, w.ASCII, r.length, e)) {
      const a = N(n, w.ASCII, i, e).split(`
`)[0], s = Number(a.split("=")[1].split(" ")[0]) + a.length;
      s > i && (n = await this.getSlice(e, s));
      const c = N(n, w.ASCII, s, e);
      this.ghostValues = {}, c.split(`
`).filter((l) => l.length > 0).map((l) => l.split("=")).forEach(([l, h]) => {
        this.ghostValues[l] = h;
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
  static async fromSource(e, r, i) {
    const n = (await e.fetch([{ offset: 0, length: 1024 }], i))[0], o = new cr(n), a = o.getUint16(0, 0);
    let s;
    if (a === 18761)
      s = !0;
    else if (a === 19789)
      s = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const c = o.getUint16(2, s);
    let l;
    if (c === 42)
      l = !1;
    else if (c === 43) {
      if (l = !0, o.getUint16(4, s) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = l ? o.getUint64(8, s) : o.getUint32(4, s);
    return new be(e, s, l, h, r);
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
async function mr(t, e) {
  return be.fromSource(gr(t), e);
}
class F {
  static RGBAfromYCbCr(...e) {
    let r, i, n;
    if (e.length === 1) {
      const s = e[0], c = new Uint8ClampedArray(s.length * 4 / 3);
      for (let l = 0, h = 0; l < s.length; l += 3, h += 4)
        r = s[l], i = s[l + 1], n = s[l + 2], c[h] = r + 1.402 * (n - 128), c[h + 1] = r - 0.34414 * (i - 128) - 0.71414 * (n - 128), c[h + 2] = r + 1.772 * (i - 128), c[h + 3] = 255;
      return c;
    }
    [r, i, n] = e;
    const o = r.length, a = new Uint8ClampedArray(o * 4);
    for (let s = 0, c = 0; s < o; s++, c += 4) {
      const l = r[s], h = i[s], f = n[s];
      a[c] = l + 1.402 * (f - 128), a[c + 1] = l - 0.34414 * (h - 128) - 0.71414 * (f - 128), a[c + 2] = l + 1.772 * (h - 128), a[c + 3] = 255;
    }
    return a;
  }
  static RGBAfromRGB(...e) {
    if (e.length === 1) {
      const c = e[0], l = new Uint8ClampedArray(c.length * 4 / 3);
      for (let h = 0, f = 0; h < c.length; h += 3, f += 4)
        l[f] = c[h], l[f + 1] = c[h + 1], l[f + 2] = c[h + 2], l[f + 3] = 255;
      return l;
    }
    const r = e[0], i = e[1], n = e[2], o = e.length >= 4 ? e[3] : null, a = r.length, s = new Uint8ClampedArray(a * 4);
    for (let c = 0, l = 0; c < a; c++, l += 4)
      s[l] = r[c], s[l + 1] = i[c], s[l + 2] = n[c], s[l + 3] = o ? o[c] : 255;
    return s;
  }
  static RGBAfromWhiteIsZero(e, r) {
    const i = new Uint8ClampedArray(e.length * 4);
    let n;
    for (let o = 0, a = 0; o < e.length; ++o, a += 4)
      n = 256 - e[o] / r * 256, i[a] = n, i[a + 1] = n, i[a + 2] = n, i[a + 3] = 255;
    return i;
  }
  static RGBAfromBlackIsZero(e, r) {
    const i = new Uint8ClampedArray(e.length * 4);
    let n;
    for (let o = 0, a = 0; o < e.length; ++o, a += 4)
      n = e[o] / r * 256, i[a] = n, i[a + 1] = n, i[a + 2] = n, i[a + 3] = 255;
    return i;
  }
  static RGBAfromPalette(e, r) {
    const i = new Uint8ClampedArray(e.length * 4), n = r.length / 3, o = r.length / 3 * 2;
    for (let a = 0, s = 0; a < e.length; ++a, s += 4) {
      const c = e[a];
      i[s] = r[c] / 65536 * 256, i[s + 1] = r[c + n] / 65536 * 256, i[s + 2] = r[c + o] / 65536 * 256, i[s + 3] = 255;
    }
    return i;
  }
  static RGBAfromCMYK(...e) {
    if (e.length === 1) {
      const c = e[0], l = new Uint8ClampedArray(c.length);
      for (let h = 0, f = 0; h < c.length; h += 4, f += 4) {
        const y = c[h], g = c[h + 1], u = c[h + 2], p = c[h + 3];
        l[f] = 255 * ((255 - y) / 256) * ((255 - p) / 256), l[f + 1] = 255 * ((255 - g) / 256) * ((255 - p) / 256), l[f + 2] = 255 * ((255 - u) / 256) * ((255 - p) / 256), l[f + 3] = 255;
      }
      return l;
    }
    const r = e[0], i = e[1], n = e[2], o = e[3], a = r.length, s = new Uint8ClampedArray(a * 4);
    for (let c = 0, l = 0; c < a; c++, l += 4) {
      const h = r[c], f = i[c], y = n[c], g = o[c];
      s[l] = 255 * ((255 - h) / 256) * ((255 - g) / 256), s[l + 1] = 255 * ((255 - f) / 256) * ((255 - g) / 256), s[l + 2] = 255 * ((255 - y) / 256) * ((255 - g) / 256), s[l + 3] = 255;
    }
    return s;
  }
  static RGBAfromCIELab(...e) {
    const o = (f, y, g) => {
      const u = y << 24 >> 24, p = g << 24 >> 24;
      let d = (f + 16) / 116, x = u / 500 + d, m = d - p / 200;
      x = 0.95047 * (x * x * x > 8856e-6 ? x * x * x : (x - 0.13793103448275862) / 7.787), d = 1 * (d * d * d > 8856e-6 ? d * d * d : (d - 0.13793103448275862) / 7.787), m = 1.08883 * (m * m * m > 8856e-6 ? m * m * m : (m - 0.13793103448275862) / 7.787);
      let T = x * 3.2406 + d * -1.5372 + m * -0.4986, b = x * -0.9689 + d * 1.8758 + m * 0.0415, A = x * 0.0557 + d * -0.204 + m * 1.057;
      return T = T > 31308e-7 ? 1.055 * T ** 0.4166666666666667 - 0.055 : 12.92 * T, b = b > 31308e-7 ? 1.055 * b ** 0.4166666666666667 - 0.055 : 12.92 * b, A = A > 31308e-7 ? 1.055 * A ** 0.4166666666666667 - 0.055 : 12.92 * A, [
        Math.max(0, Math.min(1, T)) * 255,
        Math.max(0, Math.min(1, b)) * 255,
        Math.max(0, Math.min(1, A)) * 255
      ];
    };
    if (e.length === 1) {
      const f = e[0], y = new Uint8ClampedArray(f.length * 4 / 3);
      for (let g = 0, u = 0; g < f.length; g += 3, u += 4) {
        const [p, d, x] = o(f[g], f[g + 1], f[g + 2]);
        y[u] = p, y[u + 1] = d, y[u + 2] = x, y[u + 3] = 255;
      }
      return y;
    }
    const a = e[0], s = e[1], c = e[2], l = a.length, h = new Uint8ClampedArray(l * 4);
    for (let f = 0, y = 0; f < l; f++, y += 4) {
      const [g, u, p] = o(a[f], s[f], c[f]);
      h[y] = g, h[y + 1] = u, h[y + 2] = p, h[y + 3] = 255;
    }
    return h;
  }
}
const E = self || globalThis;
function Ze(t, e) {
  E.postMessage({
    kind: "warn",
    code: t,
    message: e
  });
}
const P = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8
};
function xr(t) {
  try {
    return t ? typeof t == "string" ? t : t.message || JSON.stringify(t) : "Unknown error";
  } catch {
    return String(t);
  }
}
function br(t) {
  return Array.isArray(t) ? t : [t];
}
function wr(t) {
  return t && typeof t.PhotometricInterpretation == "number" ? t.PhotometricInterpretation : void 0;
}
function Ar(t) {
  return t && t.ColorMap || null;
}
function Tr(t) {
  try {
    if (typeof t.getBitsPerSample == "function") return t.getBitsPerSample();
  } catch {
  }
  return t && t.fileDirectory && t.fileDirectory.BitsPerSample || [8];
}
function Sr(t) {
  try {
    if (typeof t.getSamplesPerPixel == "function") return t.getSamplesPerPixel();
  } catch {
  }
  return t && t.fileDirectory && t.fileDirectory.SamplesPerPixel || 1;
}
function Ir(t) {
  const e = t && t.fileDirectory;
  return e && e.SampleFormat ? e.SampleFormat : null;
}
function ze(t) {
  return t.map((e) => {
    const r = typeof e.ctor == "string" && E[e.ctor] ? E[e.ctor] : Uint8Array;
    return new r(e.buffer, e.byteOffset || 0, e.length);
  });
}
function Pr(t) {
  const e = t.samplesPerPixel || (t.bands ? t.bands.length : 1), r = t.photometricInterpretation;
  return r === P.RGB || r === P.YCbCr || r === P.CMYK || r === P.CIELab || r === P.Palette || (r === P.BlackIsZero || r === P.WhiteIsZero) && e === 1 ? "image" : "data";
}
function qe(t) {
  const e = new Float32Array(1), r = new Uint32Array(e.buffer);
  e[0] = t;
  const i = r[0], n = i >> 31 & 1;
  let o = i >> 23 & 255, a = i & 8388607;
  return o === 255 ? a !== 0 ? n << 15 | 32256 : n << 15 | 31744 : o === 0 ? n << 15 : (o = o - 127 + 15, o >= 31 ? n << 15 | 31744 : o <= 0 ? n << 15 : (a = a + 4096, a & 8388608 && (a = 0, o += 1, o >= 31) ? n << 15 | 31744 : n << 15 | o << 10 | a >> 13));
}
function He(t) {
  return t && (t.formatResolved || t.format) || null;
}
function Je(t, e, r) {
  const i = t.samplesPerPixel || (t.bands ? t.bands.length : 1), n = t.photometricInterpretation;
  let o = null;
  if (r && r.image && Array.isArray(r.image.rgbaChannels) ? o = r.image.rgbaChannels.slice() : e && Array.isArray(e.renderChannels) && (o = e.renderChannels.slice()), o && o.length > 4 && (Ze(
    "renderChannels>4_to_RGBA_worker",
    `[tiff-worker] Requested ${o.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`
  ), o.splice(4)), n === P.Palette && t.colorMap) {
    const l = t.bands[0];
    return F.RGBAfromPalette(l, t.colorMap);
  }
  if ((n === P.WhiteIsZero || n === P.BlackIsZero) && i >= 1) {
    const l = t.bands[0], h = t.bitsPerSample && t.bitsPerSample[0] != null ? t.bitsPerSample[0] : 8, f = Math.pow(2, h) - 1;
    return n === P.WhiteIsZero ? F.RGBAfromWhiteIsZero(l, f) : F.RGBAfromBlackIsZero(l, f);
  }
  if (o && o.length >= 1) {
    const l = t.width, h = t.height, f = l * h;
    if (o.length === 1) {
      const u = t.bands[o[0]], p = t.bitsPerSample && t.bitsPerSample[o[0]] != null ? t.bitsPerSample[o[0]] : 8, d = Math.pow(2, p) - 1;
      return F.RGBAfromBlackIsZero(u, d);
    }
    const y = new Uint8ClampedArray(f * o.length);
    for (let u = 0; u < f; u++) {
      const p = u * o.length;
      for (let d = 0; d < o.length; d++) {
        const x = o[d], m = x != null && x >= 0 && x < t.bands.length ? t.bands[x][u] : 0;
        y[p + d] = m;
      }
    }
    if (o.length === 4 && n !== P.YCbCr && n !== P.CMYK && n !== P.CIELab)
      return y;
    if (n === P.YCbCr && o.length >= 3) return F.RGBAfromYCbCr(y);
    if (n === P.CMYK && o.length >= 4) return F.RGBAfromCMYK(y);
    if (n === P.CIELab && o.length >= 3) return F.RGBAfromCIELab(y);
    if (o.length === 3) return F.RGBAfromRGB(y);
    const g = new Uint8ClampedArray(f * 4);
    for (let u = 0, p = 0; u < f; u++, p += 4) {
      const d = u * o.length;
      g[p] = y[d] || 0, g[p + 1] = y[d + 1] || 0, g[p + 2] = y[d + 2] || 0, g[p + 3] = o.length >= 4 && y[d + 3] || 255;
    }
    return g;
  }
  if (n === P.RGB && i >= 3) {
    const l = t.bands[0], h = t.bands[1], f = t.bands[2], y = i >= 4 ? t.bands[3] : null;
    return F.RGBAfromRGB(l, h, f, y);
  }
  if (n === P.YCbCr && i >= 3) {
    const l = t.bands[0], h = t.bands[1], f = t.bands[2];
    return F.RGBAfromYCbCr(l, h, f);
  }
  if (n === P.CMYK && i >= 4) {
    const l = t.bands[0], h = t.bands[1], f = t.bands[2], y = t.bands[3];
    return F.RGBAfromCMYK(l, h, f, y);
  }
  if (n === P.CIELab && i >= 3) {
    const l = t.bands[0], h = t.bands[1], f = t.bands[2];
    return F.RGBAfromCIELab(l, h, f);
  }
  const a = t.bands[0], s = t.bitsPerSample && t.bitsPerSample[0] != null ? t.bitsPerSample[0] : 8, c = Math.pow(2, s) - 1;
  return F.RGBAfromBlackIsZero(a, c);
}
function Br(t, e, r, i) {
  const n = i && i.gpu || {}, o = n.preferRGBA8 !== !1, a = !!n.forceRGBA16F;
  if (o && !a) {
    const l = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    return {
      width: e,
      height: r,
      mode: "image",
      channelCount: 4,
      packs: [{
        format: "RGBA8",
        data: {
          ctor: "Uint8Array",
          buffer: l.buffer,
          byteOffset: l.byteOffset,
          length: l.length
        },
        channels: [0, 1, 2, 3],
        normalized: !1,
        scale: [1, 1, 1, 1],
        offset: [0, 0, 0, 0]
      }]
    };
  }
  const s = e * r, c = new Uint16Array(s * 4);
  for (let l = 0; l < c.length; l++)
    c[l] = qe(t[l]);
  return {
    width: e,
    height: r,
    mode: "image",
    channelCount: 4,
    packs: [{
      format: "RGBA16F",
      data: {
        ctor: "Uint16Array",
        buffer: c.buffer,
        byteOffset: 0,
        length: c.length
      },
      channels: [0, 1, 2, 3],
      normalized: !1,
      scale: [1, 1, 1, 1],
      offset: [0, 0, 0, 0]
    }]
  };
}
function Cr(t, e) {
  const r = e && e.gpu || {}, i = r.preferRGBA8 !== !1, n = !!r.forceRGBA16F, o = t.width, a = t.height, s = o * a, c = t.bands ? t.bands.length : 0, l = e && Array.isArray(e.channels) && e.channels.length ? e.channels.slice() : [...Array(c).keys()], h = l.filter((u) => u != null && u >= 0).length, f = l.every((u) => {
    const p = t.bands[u];
    return p instanceof Uint8Array || p instanceof Uint8ClampedArray;
  }), y = i && !n && f, g = [];
  for (let u = 0; u < l.length; u += 4) {
    const p = [
      l[u] ?? -1,
      l[u + 1] ?? -1,
      l[u + 2] ?? -1,
      l[u + 3] ?? -1
    ];
    if (y) {
      const b = new Uint8Array(s * 4);
      for (let A = 0, I = 0; A < s; A++, I += 4)
        for (let B = 0; B < 4; B++) {
          const S = p[B];
          b[I + B] = S >= 0 && S < t.bands.length ? t.bands[S][A] : 0;
        }
      g.push({
        format: "RGBA8",
        data: { ctor: "Uint8Array", buffer: b.buffer, byteOffset: 0, length: b.length },
        channels: p,
        normalized: !1,
        scale: [1, 1, 1, 1],
        offset: [0, 0, 0, 0]
      });
      continue;
    }
    const d = new Uint16Array(s * 4), x = [1, 1, 1, 1], m = [0, 0, 0, 0];
    for (let b = 0; b < 4; b++) {
      const A = p[b];
      if (A < 0 || A >= t.bands.length) continue;
      const I = t.bitsPerSample && t.bitsPerSample[A] != null ? t.bitsPerSample[A] : t.bitsPerSample ? t.bitsPerSample[0] : 8, B = t.bands[A];
      if (!(B instanceof Float32Array || B instanceof Float64Array)) {
        const k = I > 0 ? Math.pow(2, I) - 1 : 65535;
        k > 65504 && (x[b] = k, m[b] = 0);
      }
    }
    let T = !1;
    for (let b = 0, A = 0; b < s; b++, A += 4)
      for (let I = 0; I < 4; I++) {
        const B = p[I];
        let S = B >= 0 && B < t.bands.length ? Number(t.bands[B][b]) : 0;
        x[I] !== 1 && (S = S / x[I]), S > 65504 ? (S = 65504, T = !0) : S < -65504 && (S = -65504, T = !0), d[A + I] = qe(S);
      }
    T && Ze(
      "gpuPack_f16_clamp_worker",
      "[tiff-worker] Some values exceeded RGBA16F finite range and were clamped. Consider normalization via format.gpu.forceRGBA16F + relying on scale/offset."
    ), g.push({
      format: "RGBA16F",
      data: { ctor: "Uint16Array", buffer: d.buffer, byteOffset: 0, length: d.length },
      channels: p,
      normalized: !1,
      scale: x,
      offset: m
    });
  }
  return { width: o, height: a, mode: "data", channelCount: h, packs: g };
}
async function we(t, e) {
  const r = await mr(t), i = await r.getImageCount();
  let n = e && typeof e.imageIndex == "number" ? e.imageIndex : null;
  if (i !== 1) {
    if (n == null)
      throw new Error(`[RawTiffPlugin] TIFF has ${i} images; provide rawTiff.hints.imageIndex to decode.`);
    if (n < 0 || n >= i)
      throw new Error(`[RawTiffPlugin] imageIndex ${n} out of range (0..${i - 1}).`);
  } else
    n = 0;
  const o = await r.getImage(n), a = o.getWidth(), s = o.getHeight(), c = o.fileDirectory || {}, l = Sr(o), h = Tr(o), f = Ir(o), y = wr(c), g = Ar(c), u = Object.assign({ interleave: !1 }, e && e.decode || {}), d = br(await o.readRasters({
    ...u,
    pool: null
    // already in worker, do not nest
  })).map((x) => ({
    ctor: x.constructor && x.constructor.name ? x.constructor.name : "Uint8Array",
    buffer: x.buffer,
    byteOffset: x.byteOffset,
    length: x.length
  }));
  return {
    width: a,
    height: s,
    bands: d,
    samplesPerPixel: Math.max(l || 0, d.length),
    bitsPerSample: Array.isArray(h) ? h : [h],
    sampleFormat: f || null,
    photometricInterpretation: y,
    colorMap: g,
    fileDirectory: c
  };
}
async function Dr(t, e) {
  const r = await we(t, e), i = Object.assign({}, r, { bands: ze(r.bands) }), n = He(e), o = Je(i, e, n);
  if (typeof OffscreenCanvas == "function") {
    const a = new OffscreenCanvas(i.width, i.height), s = a.getContext("2d", { willReadFrequently: !0 }), c = new ImageData(o, i.width, i.height);
    return s.putImageData(c, 0, 0), { kind: "imageBitmap", imageBitmap: a.transferToImageBitmap() };
  }
  return {
    kind: "rgba8",
    width: i.width,
    height: i.height,
    rgbaBuffer: o.buffer,
    rgbaByteOffset: o.byteOffset,
    rgbaLength: o.length
  };
}
function Qe(t, e) {
  const r = Object.assign({}, t, { bands: ze(t.bands) }), i = He(e) || {}, n = i.interpretation || "auto", o = Pr(r);
  if ((n === "auto" ? o : n) === "image") {
    const s = Je(r, e, i);
    return Br(s, r.width, r.height, i);
  }
  return Cr(r, i);
}
async function Gr(t, e) {
  const r = await we(t, e), i = Qe(r, e);
  return { rasterPayload: r, texSet: i };
}
function Pe(t) {
  return t.bands.map((e) => e.buffer);
}
function Be(t) {
  const e = [];
  for (const r of t.packs)
    e.push(r.data.buffer);
  return e;
}
E.onmessage = async (t) => {
  const e = t.data || {}, r = e.id, i = e.op, n = e.payload || {};
  try {
    if (i === "decodeRaster") {
      const o = n.buffer, a = n.hints || {}, s = await we(o, a);
      E.postMessage({ id: r, ok: !0, result: s }, Pe(s));
      return;
    }
    if (i === "decodeAndRenderImageBitmap") {
      const o = n.buffer, a = n.hints || {}, s = await Dr(o, a);
      s.kind === "imageBitmap" ? E.postMessage({ id: r, ok: !0, result: s }, [s.imageBitmap]) : E.postMessage({ id: r, ok: !0, result: s }, [s.rgbaBuffer]);
      return;
    }
    if (i === "decodeAndPackGpuTextureSet") {
      const o = n.buffer, a = n.hints || {}, s = await Gr(o, a), c = [
        ...Pe(s.rasterPayload),
        ...Be(s.texSet)
      ];
      E.postMessage({ id: r, ok: !0, result: s }, c);
      return;
    }
    if (i === "rasterToGpuTextureSet") {
      const o = n.raster, a = n.hints || {}, s = Qe(o, a);
      E.postMessage({ id: r, ok: !0, result: s }, Be(s));
      return;
    }
    throw new Error(`[RawTiffPlugin] Unknown worker op: ${i}`);
  } catch (o) {
    E.postMessage({ id: r, ok: !1, error: xr(o) });
  }
};
export {
  Fr as L,
  Mr as a,
  _e as g
};
//# sourceMappingURL=tiff.worker-BPpoNmhb.js.map
