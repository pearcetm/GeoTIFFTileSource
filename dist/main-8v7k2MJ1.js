var ut = Object.defineProperty;
var dt = (i, e, t) => e in i ? ut(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var k = (i, e, t) => dt(i, typeof e != "symbol" ? e + "" : e, t);
function E(i) {
  return (e, ...t) => gt(i, e, t);
}
function H(i, e) {
  return E(
    Ue(
      i,
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
  iterator: ee,
  species: Qr,
  toStringTag: pt,
  for: es
} = Symbol, mt = Object, {
  create: pe,
  defineProperty: wt,
  freeze: ts,
  is: rs
} = mt, xt = Array, bt = xt.prototype, Le = bt[ee], It = E(Le), Ne = ArrayBuffer, Tt = Ne.prototype;
H(Tt, "byteLength");
const Me = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
Me && H(Me.prototype, "byteLength");
const je = ye(Uint8Array);
je.from;
const R = je.prototype;
R[ee];
E(R.keys);
E(
  R.values
);
E(
  R.entries
);
E(R.set);
E(
  R.reverse
);
E(R.fill);
E(
  R.copyWithin
);
E(R.sort);
E(R.slice);
E(
  R.subarray
);
H(
  R,
  "buffer"
);
H(
  R,
  "byteOffset"
);
H(
  R,
  "length"
);
H(
  R,
  pt
);
const St = Uint8Array, ze = Uint16Array, me = Uint32Array, At = Float32Array, Q = ye([][ee]()), Ke = E(Q.next), Dt = E(function* () {
}().next), Ct = ye(Q), Ft = DataView.prototype, Et = E(
  Ft.getUint16
), we = WeakMap, Ve = we.prototype, qe = E(Ve.get), Pt = E(Ve.set), He = new we(), kt = pe(null, {
  next: {
    value: function() {
      const e = qe(He, this);
      return Ke(e);
    }
  },
  [ee]: {
    value: function() {
      return this;
    }
  }
});
function Rt(i) {
  if (i[ee] === Le && Q.next === Ke)
    return i;
  const e = pe(kt);
  return Pt(He, e, It(i)), e;
}
const Mt = new we(), Bt = pe(Ct, {
  next: {
    value: function() {
      const e = qe(Mt, this);
      return Dt(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const i of yt(Q))
  i !== "next" && wt(Bt, i, Ue(Q, i));
const Ye = new Ne(4), Gt = new At(Ye), Ot = new me(Ye), v = new ze(512), _ = new St(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  e < -24 ? (v[i] = 0, v[i | 256] = 32768, _[i] = 24, _[i | 256] = 24) : e < -14 ? (v[i] = 1024 >> -e - 14, v[i | 256] = 1024 >> -e - 14 | 32768, _[i] = -e - 1, _[i | 256] = -e - 1) : e <= 15 ? (v[i] = e + 15 << 10, v[i | 256] = e + 15 << 10 | 32768, _[i] = 13, _[i | 256] = 13) : e < 128 ? (v[i] = 31744, v[i | 256] = 64512, _[i] = 24, _[i | 256] = 24) : (v[i] = 31744, v[i | 256] = 64512, _[i] = 13, _[i | 256] = 13);
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
const Y = new me(64);
for (let i = 1; i < 31; ++i)
  Y[i] = i << 23;
Y[31] = 1199570944;
Y[32] = 2147483648;
for (let i = 33; i < 63; ++i)
  Y[i] = 2147483648 + (i - 32 << 23);
Y[63] = 3347054592;
const Xe = new ze(64);
for (let i = 1; i < 64; ++i)
  i !== 32 && (Xe[i] = 1024);
function vt(i) {
  const e = i >> 10;
  return Ot[0] = xe[Xe[e] + (i & 1023)] + Y[e], Gt[0];
}
function $e(i, e, ...t) {
  return vt(
    Et(i, e, ...Rt(t))
  );
}
function We(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var be = { exports: {} };
function Ze(i, e, t) {
  const r = t && t.debug || !1;
  r && console.log("[xml-utils] getting " + e + " in " + i);
  const s = typeof i == "object" ? i.outer : i, o = s.slice(0, s.indexOf(">") + 1), n = ['"', "'"];
  for (let a = 0; a < n.length; a++) {
    const l = n[a], c = e + "\\=" + l + "([^" + l + "]*)" + l;
    r && console.log("[xml-utils] pattern:", c);
    const d = new RegExp(c).exec(o);
    if (r && console.log("[xml-utils] match:", d), d) return d[1];
  }
}
be.exports = Ze;
be.exports.default = Ze;
var _t = be.exports;
const ae = /* @__PURE__ */ We(_t);
var Ie = { exports: {} }, Te = { exports: {} }, Se = { exports: {} };
function Je(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index : -1;
}
Se.exports = Je;
Se.exports.default = Je;
var Ut = Se.exports, Ae = { exports: {} };
function Qe(i, e, t) {
  const s = new RegExp(e).exec(i.slice(t));
  return s ? t + s.index + s[0].length - 1 : -1;
}
Ae.exports = Qe;
Ae.exports.default = Qe;
var Lt = Ae.exports, De = { exports: {} };
function et(i, e) {
  const t = new RegExp(e, "g"), r = i.match(t);
  return r ? r.length : 0;
}
De.exports = et;
De.exports.default = et;
var Nt = De.exports;
const jt = Ut, le = Lt, Be = Nt;
function tt(i, e, t) {
  const r = t && t.debug || !1, s = !(t && typeof t.nested === !1), o = t && t.startIndex || 0;
  r && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const n = jt(i, `<${e}[ 
>/]`, o);
  if (r && console.log("[xml-utils] start:", n), n === -1) return;
  const a = i.slice(n + e.length);
  let l = le(a, "^[^<]*[ /]>", 0);
  const c = l !== -1 && a[l - 1] === "/";
  if (r && console.log("[xml-utils] selfClosing:", c), c === !1)
    if (s) {
      let g = 0, f = 1, y = 0;
      for (; (l = le(a, "[ /]" + e + ">", g)) !== -1; ) {
        const p = a.substring(g, l + 1);
        if (f += Be(p, "<" + e + `[ 
	>]`), y += Be(p, "</" + e + ">"), y >= f) break;
        g = l;
      }
    } else
      l = le(a, "[ /]" + e + ">", 0);
  const h = n + e.length + l + 1;
  if (r && console.log("[xml-utils] end:", h), h === -1) return;
  const d = i.slice(n, h);
  let u;
  return c ? u = null : u = d.slice(d.indexOf(">") + 1, d.lastIndexOf("<")), { inner: u, outer: d, start: n, end: h };
}
Te.exports = tt;
Te.exports.default = tt;
var zt = Te.exports;
const Kt = zt;
function rt(i, e, t) {
  const r = [], s = t && t.debug || !1, o = t && typeof t.nested == "boolean" ? t.nested : !0;
  let n = t && t.startIndex || 0, a;
  for (; a = Kt(i, e, { debug: s, startIndex: n }); )
    o ? n = a.start + 1 + e.length : n = a.end, r.push(a);
  return s && console.log("findTagsByName found", r.length, "tags"), r;
}
Ie.exports = rt;
Ie.exports.default = rt;
var Vt = Ie.exports;
const qt = /* @__PURE__ */ We(Vt), J = {
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
}, U = {};
for (const i in J)
  J.hasOwnProperty(i) && (U[J[i]] = parseInt(i, 10));
const Ht = [
  U.BitsPerSample,
  U.ExtraSamples,
  U.SampleFormat,
  U.StripByteCounts,
  U.StripOffsets,
  U.StripRowCounts,
  U.TileByteCounts,
  U.TileOffsets,
  U.SubIFDs
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
for (const i in ce)
  ce.hasOwnProperty(i) && (x[ce[i]] = parseInt(i, 10));
const A = {
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
function $t(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3);
  let o;
  for (let n = 0, a = 0; n < i.length; ++n, a += 3)
    o = 256 - i[n] / e * 256, s[a] = o, s[a + 1] = o, s[a + 2] = o;
  return s;
}
function Wt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3);
  let o;
  for (let n = 0, a = 0; n < i.length; ++n, a += 3)
    o = i[n] / e * 256, s[a] = o, s[a + 1] = o, s[a + 2] = o;
  return s;
}
function Zt(i, e) {
  const { width: t, height: r } = i, s = new Uint8Array(t * r * 3), o = e.length / 3, n = e.length / 3 * 2;
  for (let a = 0, l = 0; a < i.length; ++a, l += 3) {
    const c = i[a];
    s[l] = e[c] / 65536 * 256, s[l + 1] = e[c + o] / 65536 * 256, s[l + 2] = e[c + n] / 65536 * 256;
  }
  return s;
}
function Jt(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, o = 0; s < i.length; s += 4, o += 3) {
    const n = i[s], a = i[s + 1], l = i[s + 2], c = i[s + 3];
    r[o] = 255 * ((255 - n) / 256) * ((255 - c) / 256), r[o + 1] = 255 * ((255 - a) / 256) * ((255 - c) / 256), r[o + 2] = 255 * ((255 - l) / 256) * ((255 - c) / 256);
  }
  return r;
}
function Qt(i) {
  const { width: e, height: t } = i, r = new Uint8ClampedArray(e * t * 3);
  for (let s = 0, o = 0; s < i.length; s += 3, o += 3) {
    const n = i[s], a = i[s + 1], l = i[s + 2];
    r[o] = n + 1.402 * (l - 128), r[o + 1] = n - 0.34414 * (a - 128) - 0.71414 * (l - 128), r[o + 2] = n + 1.772 * (a - 128);
  }
  return r;
}
const er = 0.95047, tr = 1, rr = 1.08883;
function sr(i) {
  const { width: e, height: t } = i, r = new Uint8Array(e * t * 3);
  for (let s = 0, o = 0; s < i.length; s += 3, o += 3) {
    const n = i[s + 0], a = i[s + 1] << 24 >> 24, l = i[s + 2] << 24 >> 24;
    let c = (n + 16) / 116, h = a / 500 + c, d = c - l / 200, u, g, f;
    h = er * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), c = tr * (c * c * c > 8856e-6 ? c * c * c : (c - 16 / 116) / 7.787), d = rr * (d * d * d > 8856e-6 ? d * d * d : (d - 16 / 116) / 7.787), u = h * 3.2406 + c * -1.5372 + d * -0.4986, g = h * -0.9689 + c * 1.8758 + d * 0.0415, f = h * 0.0557 + c * -0.204 + d * 1.057, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : 12.92 * u, g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, r[o] = Math.max(0, Math.min(1, u)) * 255, r[o + 1] = Math.max(0, Math.min(1, g)) * 255, r[o + 2] = Math.max(0, Math.min(1, f)) * 255;
  }
  return r;
}
const st = /* @__PURE__ */ new Map();
function j(i, e) {
  Array.isArray(i) || (i = [i]), i.forEach((t) => st.set(t, e));
}
async function it(i) {
  const e = st.get(i.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${i.Compression}`);
  const t = await e();
  return new t(i);
}
j([void 0, 1], () => import("./raw-CMGvRjfu.js").then((i) => i.default));
j(5, () => import("./lzw-LAGDNbSC.js").then((i) => i.default));
j(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
j(7, () => import("./jpeg-BAgeD1d3.js").then((i) => i.default));
j([8, 32946], () => import("./deflate-BXt-9JA_.js").then((i) => i.default));
j(32773, () => import("./packbits-BlDR4Kj5.js").then((i) => i.default));
j(
  34887,
  () => import("./lerc-CoQvYJmm.js").then(async (i) => (await i.zstd.init(), i)).then((i) => i.default)
);
j(50001, () => import("./webimage-BM_pbLN3.js").then((i) => i.default));
function ne(i, e, t, r = 1) {
  return new (Object.getPrototypeOf(i)).constructor(e * t * r);
}
function ir(i, e, t, r, s) {
  const o = e / r, n = t / s;
  return i.map((a) => {
    const l = ne(a, r, s);
    for (let c = 0; c < s; ++c) {
      const h = Math.min(Math.round(n * c), t - 1);
      for (let d = 0; d < r; ++d) {
        const u = Math.min(Math.round(o * d), e - 1), g = a[h * e + u];
        l[c * r + d] = g;
      }
    }
    return l;
  });
}
function V(i, e, t) {
  return (1 - t) * i + t * e;
}
function nr(i, e, t, r, s) {
  const o = e / r, n = t / s;
  return i.map((a) => {
    const l = ne(a, r, s);
    for (let c = 0; c < s; ++c) {
      const h = n * c, d = Math.floor(h), u = Math.min(Math.ceil(h), t - 1);
      for (let g = 0; g < r; ++g) {
        const f = o * g, y = f % 1, p = Math.floor(f), w = Math.min(Math.ceil(f), e - 1), m = a[d * e + p], b = a[d * e + w], T = a[u * e + p], S = a[u * e + w], D = V(
          V(m, b, y),
          V(T, S, y),
          h % 1
        );
        l[c * r + g] = D;
      }
    }
    return l;
  });
}
function or(i, e, t, r, s, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return ir(i, e, t, r, s);
    case "bilinear":
    case "linear":
      return nr(i, e, t, r, s);
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function ar(i, e, t, r, s, o) {
  const n = e / r, a = t / s, l = ne(i, r, s, o);
  for (let c = 0; c < s; ++c) {
    const h = Math.min(Math.round(a * c), t - 1);
    for (let d = 0; d < r; ++d) {
      const u = Math.min(Math.round(n * d), e - 1);
      for (let g = 0; g < o; ++g) {
        const f = i[h * e * o + u * o + g];
        l[c * r * o + d * o + g] = f;
      }
    }
  }
  return l;
}
function lr(i, e, t, r, s, o) {
  const n = e / r, a = t / s, l = ne(i, r, s, o);
  for (let c = 0; c < s; ++c) {
    const h = a * c, d = Math.floor(h), u = Math.min(Math.ceil(h), t - 1);
    for (let g = 0; g < r; ++g) {
      const f = n * g, y = f % 1, p = Math.floor(f), w = Math.min(Math.ceil(f), e - 1);
      for (let m = 0; m < o; ++m) {
        const b = i[d * e * o + p * o + m], T = i[d * e * o + w * o + m], S = i[u * e * o + p * o + m], D = i[u * e * o + w * o + m], M = V(
          V(b, T, y),
          V(S, D, y),
          h % 1
        );
        l[c * r * o + g * o + m] = M;
      }
    }
  }
  return l;
}
function cr(i, e, t, r, s, o, n = "nearest") {
  switch (n.toLowerCase()) {
    case "nearest":
      return ar(
        i,
        e,
        t,
        r,
        s,
        o
      );
    case "bilinear":
    case "linear":
      return lr(
        i,
        e,
        t,
        r,
        s,
        o
      );
    default:
      throw new Error(`Unsupported resampling method: '${n}'`);
  }
}
function hr(i, e, t) {
  let r = 0;
  for (let s = e; s < t; ++s)
    r += i[s];
  return r;
}
function ue(i, e, t) {
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
function fr(i, e) {
  return (i === 1 || i === 2) && e <= 32 && e % 8 === 0 ? !1 : !(i === 3 && (e === 16 || e === 32 || e === 64));
}
function ur(i, e, t, r, s, o, n) {
  const a = new DataView(i), l = t === 2 ? n * o : n * o * r, c = t === 2 ? 1 : r, h = ue(e, s, l), d = parseInt("1".repeat(s), 2);
  if (e === 1) {
    let u;
    t === 1 ? u = r * s : u = s;
    let g = o * u;
    g & 7 && (g = g + 7 & -8);
    for (let f = 0; f < n; ++f) {
      const y = f * g;
      for (let p = 0; p < o; ++p) {
        const w = y + p * c * s;
        for (let m = 0; m < c; ++m) {
          const b = w + m * s, T = (f * o + p) * c + m, S = Math.floor(b / 8), D = b % 8;
          if (D + s <= 8)
            h[T] = a.getUint8(S) >> 8 - s - D & d;
          else if (D + s <= 16)
            h[T] = a.getUint16(S) >> 16 - s - D & d;
          else if (D + s <= 24) {
            const M = a.getUint16(S) << 8 | a.getUint8(S + 2);
            h[T] = M >> 24 - s - D & d;
          } else
            h[T] = a.getUint32(S) >> 32 - s - D & d;
        }
      }
    }
  }
  return h.buffer;
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
  constructor(e, t, r, s, o, n) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = r, this.littleEndian = s, this.tiles = o ? {} : null, this.isTiled = !e.StripOffsets;
    const a = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof a > "u" ? 1 : a, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = n;
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
            return function(s, o) {
              return $e(this, s, o);
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
    return ue(r, s, t);
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
  async getTileOrStrip(e, t, r, s, o) {
    const n = Math.ceil(this.getWidth() / this.getTileWidth()), a = Math.ceil(this.getHeight() / this.getTileHeight());
    let l;
    const { tiles: c } = this;
    this.planarConfiguration === 1 ? l = t * n + e : this.planarConfiguration === 2 && (l = r * n * a + t * n + e);
    let h, d;
    this.isTiled ? (h = this.fileDirectory.TileOffsets[l], d = this.fileDirectory.TileByteCounts[l]) : (h = this.fileDirectory.StripOffsets[l], d = this.fileDirectory.StripByteCounts[l]);
    const u = (await this.source.fetch([{ offset: h, length: d }], o))[0];
    let g;
    return c === null || !c[l] ? (g = (async () => {
      let f = await s.decode(this.fileDirectory, u);
      const y = this.getSampleFormat(), p = this.getBitsPerSample();
      return fr(y, p) && (f = ur(
        f,
        y,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        p,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), f;
    })(), c !== null && (c[l] = g)) : g = c[l], { x: e, y: t, sample: r, data: await g };
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
  async _readRaster(e, t, r, s, o, n, a, l, c) {
    const h = this.getTileWidth(), d = this.getTileHeight(), u = this.getWidth(), g = this.getHeight(), f = Math.max(Math.floor(e[0] / h), 0), y = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(u / h)
    ), p = Math.max(Math.floor(e[1] / d), 0), w = Math.min(
      Math.ceil(e[3] / d),
      Math.ceil(g / d)
    ), m = e[2] - e[0];
    let b = this.getBytesPerPixel();
    const T = [], S = [];
    for (let I = 0; I < t.length; ++I)
      this.planarConfiguration === 1 ? T.push(hr(this.fileDirectory.BitsPerSample, 0, t[I]) / 8) : T.push(0), S.push(this.getReaderForSample(t[I]));
    const D = [], { littleEndian: M } = this;
    for (let I = p; I < w; ++I)
      for (let C = f; C < y; ++C) {
        let O;
        this.planarConfiguration === 1 && (O = this.getTileOrStrip(C, I, 0, o, c));
        for (let P = 0; P < t.length; ++P) {
          const F = P, G = t[P];
          this.planarConfiguration === 2 && (b = this.getSampleByteSize(G), O = this.getTileOrStrip(C, I, G, o, c));
          const L = O.then((B) => {
            const N = B.data, te = new DataView(N), X = this.getBlockHeight(B.y), $ = B.y * d, re = B.x * h, ot = $ + X, at = (B.x + 1) * h, lt = S[F], ct = Math.min(X, X - (ot - e[3]), g - $), ht = Math.min(h, h - (at - e[2]), u - re);
            for (let W = Math.max(0, e[1] - $); W < ct; ++W)
              for (let Z = Math.max(0, e[0] - re); Z < ht; ++Z) {
                const ft = (W * h + Z) * b, Re = lt.call(
                  te,
                  ft + T[F],
                  M
                );
                let se;
                s ? (se = (W + $ - e[1]) * m * t.length + (Z + re - e[0]) * t.length + F, r[se] = Re) : (se = (W + $ - e[1]) * m + Z + re - e[0], r[F][se] = Re);
              }
          });
          D.push(L);
        }
      }
    if (await Promise.all(D), n && e[2] - e[0] !== n || a && e[3] - e[1] !== a) {
      let I;
      return s ? I = cr(
        r,
        e[2] - e[0],
        e[3] - e[1],
        n,
        a,
        t.length,
        l
      ) : I = or(
        r,
        e[2] - e[0],
        e[3] - e[1],
        n,
        a,
        l
      ), I.width = n, I.height = a, I;
    }
    return r.width = n || e[2] - e[0], r.height = a || e[3] - e[1], r;
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
    width: o,
    height: n,
    resampleMethod: a,
    fillValue: l,
    signal: c
  } = {}) {
    const h = e || [0, 0, this.getWidth(), this.getHeight()];
    if (h[0] > h[2] || h[1] > h[3])
      throw new Error("Invalid subsets");
    const d = h[2] - h[0], u = h[3] - h[1], g = d * u, f = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let m = 0; m < f; ++m)
        t.push(m);
    else
      for (let m = 0; m < t.length; ++m)
        if (t[m] >= f)
          return Promise.reject(new RangeError(`Invalid sample index '${t[m]}'.`));
    let y;
    if (r) {
      const m = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, b = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      y = ue(m, b, g * t.length), l && y.fill(l);
    } else {
      y = [];
      for (let m = 0; m < t.length; ++m) {
        const b = this.getArrayForSample(t[m], g);
        Array.isArray(l) && m < l.length ? b.fill(l[m]) : l && !Array.isArray(l) && b.fill(l), y.push(b);
      }
    }
    const p = s || await it(this.fileDirectory);
    return await this._readRaster(
      h,
      t,
      y,
      r,
      p,
      o,
      n,
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
    height: o,
    resampleMethod: n,
    enableAlpha: a = !1,
    signal: l
  } = {}) {
    const c = e || [0, 0, this.getWidth(), this.getHeight()];
    if (c[0] > c[2] || c[1] > c[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === A.RGB) {
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
        width: s,
        height: o,
        resampleMethod: n,
        signal: l
      });
    }
    let d;
    switch (h) {
      case A.WhiteIsZero:
      case A.BlackIsZero:
      case A.Palette:
        d = [0];
        break;
      case A.CMYK:
        d = [0, 1, 2, 3];
        break;
      case A.YCbCr:
      case A.CIELab:
        d = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const u = {
      window: c,
      interleave: !0,
      samples: d,
      pool: r,
      width: s,
      height: o,
      resampleMethod: n,
      signal: l
    }, { fileDirectory: g } = this, f = await this.readRasters(u), y = 2 ** this.fileDirectory.BitsPerSample[0];
    let p;
    switch (h) {
      case A.WhiteIsZero:
        p = $t(f, y);
        break;
      case A.BlackIsZero:
        p = Wt(f, y);
        break;
      case A.Palette:
        p = Zt(f, g.ColorMap);
        break;
      case A.CMYK:
        p = Jt(f);
        break;
      case A.YCbCr:
        p = Qt(f);
        break;
      case A.CIELab:
        p = sr(f);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const w = new Uint8Array(p.length / 3), m = new Uint8Array(p.length / 3), b = new Uint8Array(p.length / 3);
      for (let T = 0, S = 0; T < p.length; T += 3, ++S)
        w[S] = p[T], m[S] = p[T + 1], b[S] = p[T + 2];
      p = [w, m, b];
    }
    return p.width = f.width, p.height = f.height, p;
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
    let s = qt(r, "Item");
    e === null ? s = s.filter((o) => ae(o, "sample") === void 0) : s = s.filter((o) => Number(ae(o, "sample")) === e);
    for (let o = 0; o < s.length; ++o) {
      const n = s[o];
      t[ae(n, "name")] = n.inner;
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
      return r[1] === 0 && r[4] === 0 ? [
        r[0],
        -r[5],
        r[10]
      ] : [
        Math.sqrt(r[0] * r[0] + r[4] * r[4]),
        -Math.sqrt(r[1] * r[1] + r[5] * r[5]),
        r[10]
      ];
    if (e) {
      const [s, o, n] = e.getResolution();
      return [
        s * e.getWidth() / this.getWidth(),
        o * e.getHeight() / this.getHeight(),
        n * e.getWidth() / this.getWidth()
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
      const [s, o, n, a, l, c, h, d] = this.fileDirectory.ModelTransformation, g = [
        [0, 0],
        [0, t],
        [r, 0],
        [r, t]
      ].map(([p, w]) => [
        a + s * p + o * w,
        d + l * p + c * w
      ]), f = g.map((p) => p[0]), y = g.map((p) => p[1]);
      return [
        Math.min(...f),
        Math.min(...y),
        Math.max(...f),
        Math.max(...y)
      ];
    } else {
      const s = this.getOrigin(), o = this.getResolution(), n = s[0], a = s[1], l = n + o[0] * r, c = a + o[1] * t;
      return [
        Math.min(n, l),
        Math.min(a, c),
        Math.max(n, l),
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
    const r = this.getUint32(e, t), s = this.getUint32(e + 4, t);
    let o;
    if (t) {
      if (o = r + 2 ** 32 * s, !Number.isSafeInteger(o))
        throw new Error(
          `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return o;
    }
    if (o = 2 ** 32 * r + s, !Number.isSafeInteger(o))
      throw new Error(
        `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return o;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let r = 0;
    const s = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let o = !0;
    for (let n = 0; n < 8; n++) {
      let a = this._dataView.getUint8(e + (t ? n : 7 - n));
      s && (o ? a !== 0 && (a = ~(a - 1) & 255, o = !1) : a = ~a & 255), r += a * 256 ** n;
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
class yr {
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
    for (let o = 0; o < 8; o++) {
      let n = this._dataView.getUint8(
        e + (this._littleEndian ? o : 7 - o)
      );
      r && (s ? n !== 0 && (n = ~(n - 1) & 255, s = !1) : n = ~n & 255), t += n * 256 ** o;
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
      import("./decoder-DJlmx386.js").then((s) => {
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
      const o = this.messageId++, n = (a) => {
        a.data.id === o && (s.idle = !0, r(a.data.decoded), s.worker.removeEventListener("message", n));
      };
      s.worker.addEventListener("message", n), s.worker.postMessage({ fileDirectory: e, buffer: t, id: o }, [t]);
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
function nt(i) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(i);
  const e = {};
  for (const [t, r] of i)
    e[t.toLowerCase()] = r;
  return e;
}
function wr(i) {
  const e = i.split(`\r
`).map((t) => {
    const r = t.split(":").map((s) => s.trim());
    return r[0] = r[0].toLowerCase(), r;
  });
  return nt(e);
}
function xr(i) {
  const [e, ...t] = i.split(";").map((s) => s.trim()), r = t.map((s) => s.split("="));
  return { type: e, params: nt(r) };
}
function de(i) {
  let e, t, r;
  return i && ([, e, t, r] = i.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), r = parseInt(r, 10)), { start: e, end: t, total: r };
}
function br(i, e) {
  let t = null;
  const r = new TextDecoder("ascii"), s = [], o = `--${e}`, n = `${o}--`;
  for (let a = 0; a < 10; ++a)
    r.decode(
      new Uint8Array(i, a, o.length)
    ) === o && (t = a);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < i.byteLength; ) {
    const a = r.decode(
      new Uint8Array(
        i,
        t,
        Math.min(o.length + 1024, i.byteLength - t)
      )
    );
    if (a.length === 0 || a.startsWith(n))
      break;
    if (!a.startsWith(o))
      throw new Error("Part does not start with boundary");
    const l = a.substr(o.length + 2);
    if (l.length === 0)
      break;
    const c = l.indexOf(Ge), h = wr(l.substr(0, c)), { start: d, end: u, total: g } = de(h["content-range"]), f = t + o.length + c + Ge.length, y = parseInt(u, 10) + 1 - parseInt(d, 10);
    s.push({
      headers: h,
      data: i.slice(f, f + y),
      offset: d,
      length: y,
      fileSize: g
    }), t = f + y + 4;
  }
  return s;
}
class Ce {
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
      const r = e[t], [s, o] = r;
      this._deleteIfExpired(s, o) === !1 && (yield [s, o.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const r = e[t], [s, o] = r;
      this.cache.has(s) || this._deleteIfExpired(s, o) === !1 && (yield [s, o.value]);
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
async function Tr(i) {
  return new Promise((e) => setTimeout(e, i));
}
function Sr(i, e) {
  const t = Array.isArray(i) ? i : Array.from(i), r = Array.isArray(e) ? e : Array.from(e);
  return t.map((s, o) => [s, r[o]]);
}
class q extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, q), this.name = "AbortError";
  }
}
class Ar extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const Dr = Ar;
class Cr {
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
class Fr extends Ce {
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
      onEviction: (s, o) => {
        this.evictedBlocks.set(s, o);
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
    const r = [], s = [], o = [];
    this.evictedBlocks.clear();
    for (const { offset: u, length: g } of e) {
      let f = u + g;
      const { fileSize: y } = this;
      y !== null && (f = Math.min(f, y));
      const p = Math.floor(u / this.blockSize) * this.blockSize;
      for (let w = p; w < f; w += this.blockSize) {
        const m = Math.floor(w / this.blockSize);
        !this.blockCache.has(m) && !this.blockRequests.has(m) && (this.blockIdsToFetch.add(m), s.push(m)), this.blockRequests.has(m) && r.push(this.blockRequests.get(m)), o.push(m);
      }
    }
    await Tr(), this.fetchBlocks(t);
    const n = [];
    for (const u of s)
      this.blockRequests.has(u) && n.push(this.blockRequests.get(u));
    await Promise.allSettled(r), await Promise.allSettled(n);
    const a = [], l = o.filter((u) => this.abortedBlockIds.has(u) || !this.blockCache.has(u));
    if (l.forEach((u) => this.blockIdsToFetch.add(u)), l.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const u of l) {
        const g = this.blockRequests.get(u);
        if (!g)
          throw new Error(`Block ${u} is not in the block requests`);
        a.push(g);
      }
      await Promise.allSettled(a);
    }
    if (t && t.aborted)
      throw new q("Request was aborted");
    const c = o.map((u) => this.blockCache.get(u) || this.evictedBlocks.get(u)), h = c.filter((u) => !u);
    if (h.length)
      throw new Dr(h, "Request failed");
    const d = new Map(Sr(o, c));
    return this.readSliceData(e, d);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), r = this.source.fetch(t, e);
      for (let s = 0; s < t.length; ++s) {
        const o = t[s];
        for (const n of o.blockIds)
          this.blockRequests.set(n, (async () => {
            try {
              const a = (await r)[s], l = n * this.blockSize, c = l - a.offset, h = Math.min(c + this.blockSize, a.data.byteLength), d = a.data.slice(c, h), u = new Cr(
                l,
                d.byteLength,
                d,
                n
              );
              this.blockCache.set(n, u), this.abortedBlockIds.delete(n);
            } catch (a) {
              if (a.name === "AbortError")
                a.signal = e, this.blockCache.delete(n), this.abortedBlockIds.add(n);
              else
                throw a;
            } finally {
              this.blockRequests.delete(n);
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
    const t = Array.from(e).sort((n, a) => n - a);
    if (t.length === 0)
      return [];
    let r = [], s = null;
    const o = [];
    for (const n of t)
      s === null || s + 1 === n ? (r.push(n), s = n) : (o.push(new Oe(
        r[0] * this.blockSize,
        r.length * this.blockSize,
        r
      )), r = [n], s = n);
    return o.push(new Oe(
      r[0] * this.blockSize,
      r.length * this.blockSize,
      r
    )), o;
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
      const o = Math.floor(r.offset / this.blockSize), n = Math.floor(s / this.blockSize), a = new ArrayBuffer(r.length), l = new Uint8Array(a);
      for (let c = o; c <= n; ++c) {
        const h = t.get(c), d = h.offset - r.offset, u = h.top - s;
        let g = 0, f = 0, y;
        d < 0 ? g = -d : d > 0 && (f = d), u < 0 ? y = h.length - g : y = s - h.offset - g;
        const p = new Uint8Array(h.data, g, y);
        l.set(p, f);
      }
      return a;
    });
  }
}
class Fe {
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
class Er extends Fe {
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
class kr extends Fe {
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
    return new Promise((r, s) => {
      const o = new XMLHttpRequest();
      o.open("GET", this.url), o.responseType = "arraybuffer";
      for (const [n, a] of Object.entries(e))
        o.setRequestHeader(n, a);
      o.onload = () => {
        const n = o.response;
        r(new kr(o, n));
      }, o.onerror = s, o.onabort = () => s(new q("Request aborted")), o.send(), t && (t.aborted && o.abort(), t.addEventListener("abort", () => o.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const he = {};
class Mr extends Fe {
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
    return new Promise((r, s) => {
      const o = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (n) => {
          const a = new Promise((l) => {
            const c = [];
            n.on("data", (h) => {
              c.push(h);
            }), n.on("end", () => {
              const h = Buffer.concat(c).buffer;
              l(h);
            }), n.on("error", s);
          });
          r(new Mr(n, a));
        }
      );
      o.on("error", s), t && (t.aborted && o.destroy(new q("Request aborted")), t.addEventListener("abort", () => o.destroy(new q("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Pe extends Ce {
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
        Range: `bytes=${e.map(({ offset: s, length: o }) => `${s}-${s + o}`).join(",")}`
      },
      signal: t
    });
    if (r.ok)
      if (r.status === 206) {
        const { type: s, params: o } = xr(r.getHeader("content-type"));
        if (s === "multipart/byteranges") {
          const d = br(await r.getData(), o.boundary);
          return this._fileSize = d[0].fileSize || null, d;
        }
        const n = await r.getData(), { start: a, end: l, total: c } = de(r.getHeader("content-range"));
        this._fileSize = c || null;
        const h = [{
          data: n,
          offset: a,
          length: l - a
        }];
        if (e.length > 1) {
          const d = await Promise.all(e.slice(1).map((u) => this.fetchSlice(u, t)));
          return h.concat(d);
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
    else throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: r, length: s } = e, o = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${r}-${r + s}`
      },
      signal: t
    });
    if (o.ok)
      if (o.status === 206) {
        const n = await o.getData(), { total: a } = de(o.getHeader("content-range"));
        return this._fileSize = a || null, {
          data: n,
          offset: r,
          length: s
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const n = await o.getData();
        return this._fileSize = n.byteLength, {
          data: n,
          offset: 0,
          length: n.byteLength
        };
      }
    else throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function ke(i, { blockSize: e, cacheSize: t }) {
  return e === null ? i : new Fr(i, { blockSize: e, cacheSize: t });
}
function Gr(i, { headers: e = {}, credentials: t, maxRanges: r = 0, allowFullFile: s = !1, ...o } = {}) {
  const n = new Pr(i, t), a = new Pe(n, e, r, s);
  return ke(a, o);
}
function Or(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const o = new Rr(i), n = new Pe(o, e, t, r);
  return ke(n, s);
}
function vr(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: r = !1, ...s } = {}) {
  const o = new Br(i), n = new Pe(o, e, t, r);
  return ke(n, s);
}
function _r(i, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? Gr(i, t) : typeof XMLHttpRequest < "u" ? Or(i, t) : vr(i, t);
}
class Ur extends Ce {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((r, s) => {
      const o = this.file.slice(e.offset, e.offset + e.length), n = new FileReader();
      n.onload = (a) => r(a.target.result), n.onerror = s, n.onabort = s, n.readAsArrayBuffer(o), t && t.addEventListener("abort", () => n.abort());
    });
  }
}
function Lr(i) {
  return new Ur(i);
}
function ge(i) {
  switch (i) {
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
      throw new RangeError(`Invalid field type: ${i}`);
  }
}
function Nr(i) {
  const e = i.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let r = 4; r <= e[3] * 4; r += 4) {
    const s = Xt[e[r]], o = e[r + 1] ? J[e[r + 1]] : null, n = e[r + 2], a = e[r + 3];
    let l = null;
    if (!o)
      l = a;
    else {
      if (l = i[o], typeof l > "u" || l === null)
        throw new Error(`Could not get value of geoKey '${s}'.`);
      typeof l == "string" ? l = l.substring(a, a + n - 1) : l.subarray && (l = l.subarray(a, a + n), n === 1 && (l = l[0]));
    }
    t[s] = l;
  }
  return t;
}
function K(i, e, t, r) {
  let s = null, o = null;
  const n = ge(e);
  switch (e) {
    case x.BYTE:
    case x.ASCII:
    case x.UNDEFINED:
      s = new Uint8Array(t), o = i.readUint8;
      break;
    case x.SBYTE:
      s = new Int8Array(t), o = i.readInt8;
      break;
    case x.SHORT:
      s = new Uint16Array(t), o = i.readUint16;
      break;
    case x.SSHORT:
      s = new Int16Array(t), o = i.readInt16;
      break;
    case x.LONG:
    case x.IFD:
      s = new Uint32Array(t), o = i.readUint32;
      break;
    case x.SLONG:
      s = new Int32Array(t), o = i.readInt32;
      break;
    case x.LONG8:
    case x.IFD8:
      s = new Array(t), o = i.readUint64;
      break;
    case x.SLONG8:
      s = new Array(t), o = i.readInt64;
      break;
    case x.RATIONAL:
      s = new Uint32Array(t * 2), o = i.readUint32;
      break;
    case x.SRATIONAL:
      s = new Int32Array(t * 2), o = i.readInt32;
      break;
    case x.FLOAT:
      s = new Float32Array(t), o = i.readFloat32;
      break;
    case x.DOUBLE:
      s = new Float64Array(t), o = i.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === x.RATIONAL || e === x.SRATIONAL)
    for (let a = 0; a < t; a += 2)
      s[a] = o.call(
        i,
        r + a * n
      ), s[a + 1] = o.call(
        i,
        r + (a * n + 4)
      );
  else
    for (let a = 0; a < t; ++a)
      s[a] = o.call(
        i,
        r + a * n
      );
  return e === x.ASCII ? new TextDecoder("utf-8").decode(s) : s;
}
class jr {
  constructor(e, t, r) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = r;
  }
}
class ie extends Error {
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
    const { window: t, width: r, height: s } = e;
    let { resX: o, resY: n, bbox: a } = e;
    const l = await this.getImage();
    let c = l;
    const h = await this.getImageCount(), d = l.getBoundingBox();
    if (t && a)
      throw new Error('Both "bbox" and "window" passed.');
    if (r || s) {
      if (t) {
        const [f, y] = l.getOrigin(), [p, w] = l.getResolution();
        a = [
          f + t[0] * p,
          y + t[1] * w,
          f + t[2] * p,
          y + t[3] * w
        ];
      }
      const g = a || d;
      if (r) {
        if (o)
          throw new Error("Both width and resX passed");
        o = (g[2] - g[0]) / r;
      }
      if (s) {
        if (n)
          throw new Error("Both width and resY passed");
        n = (g[3] - g[1]) / s;
      }
    }
    if (o || n) {
      const g = [];
      for (let f = 0; f < h; ++f) {
        const y = await this.getImage(f), { SubfileType: p, NewSubfileType: w } = y.fileDirectory;
        (f === 0 || p === 2 || w & 1) && g.push(y);
      }
      g.sort((f, y) => f.getWidth() - y.getWidth());
      for (let f = 0; f < g.length; ++f) {
        const y = g[f], p = (d[2] - d[0]) / y.getWidth(), w = (d[3] - d[1]) / y.getHeight();
        if (c = y, o && o > p || n && n > w)
          break;
      }
    }
    let u = t;
    if (a) {
      const [g, f] = l.getOrigin(), [y, p] = c.getResolution(l);
      u = [
        Math.round((a[0] - g) / y),
        Math.round((a[1] - f) / p),
        Math.round((a[2] - g) / y),
        Math.round((a[3] - f) / p)
      ], u = [
        Math.min(u[0], u[2]),
        Math.min(u[1], u[3]),
        Math.max(u[0], u[2]),
        Math.max(u[1], u[3])
      ];
    }
    return c.readRasters({ ...e, window: u });
  }
}
class oe extends zr {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, r, s, o = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = r, this.firstIFDOffset = s, this.cache = o.cache || !1, this.ifdRequests = [], this.ghostValues = null;
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
    let s = await this.getSlice(e);
    const o = this.bigTiff ? s.readUint64(e) : s.readUint16(e), n = o * t + (this.bigTiff ? 16 : 6);
    s.covers(e, n) || (s = await this.getSlice(e, n));
    const a = {};
    let l = e + (this.bigTiff ? 8 : 2);
    for (let d = 0; d < o; l += t, ++d) {
      const u = s.readUint16(l), g = s.readUint16(l + 2), f = this.bigTiff ? s.readUint64(l + 4) : s.readUint32(l + 4);
      let y, p;
      const w = ge(g), m = l + (this.bigTiff ? 12 : 8);
      if (w * f <= (this.bigTiff ? 8 : 4))
        y = K(s, g, f, m);
      else {
        const b = s.readOffset(m), T = ge(g) * f;
        if (s.covers(b, T))
          y = K(s, g, f, b);
        else {
          const S = await this.getSlice(b, T);
          y = K(S, g, f, b);
        }
      }
      f === 1 && Ht.indexOf(u) === -1 && !(g === x.RATIONAL || g === x.SRATIONAL) ? p = y[0] : p = y, a[J[u]] = p;
    }
    const c = Nr(a), h = s.readOffset(
      e + r + t * o
    );
    return new jr(
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
        throw t instanceof ie ? new ie(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new ie(e);
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
        if (r instanceof ie)
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
    if (t === K(s, x.ASCII, t.length, e)) {
      const n = K(s, x.ASCII, r, e).split(`
`)[0], a = Number(n.split("=")[1].split(" ")[0]) + n.length;
      a > r && (s = await this.getSlice(e, a));
      const l = K(s, x.ASCII, a, e);
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
    const s = (await e.fetch([{ offset: 0, length: 1024 }], r))[0], o = new gr(s), n = o.getUint16(0, 0);
    let a;
    if (n === 18761)
      a = !0;
    else if (n === 19789)
      a = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const l = o.getUint16(2, a);
    let c;
    if (l === 42)
      c = !1;
    else if (l === 43) {
      if (c = !0, o.getUint16(4, a) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = c ? o.getUint64(8, a) : o.getUint32(4, a);
    return new oe(e, a, c, h, t);
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
  return oe.fromSource(_r(i, e), t);
}
async function _e(i, e) {
  return oe.fromSource(Lr(i), e);
}
class fe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const Kr = (i) => {
  var t, r, s;
  const e = /* @__PURE__ */ new Map();
  for (const o of i) {
    const n = new DOMParser().parseFromString(
      (t = o.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), a = (r = n == null ? void 0 : n.querySelector("Name")) == null ? void 0 : r.textContent, l = (s = n == null ? void 0 : n.querySelector("Color")) == null ? void 0 : s.textContent;
    if (!a)
      continue;
    const c = l ? l.split(",").map((h) => parseInt(h)) : [255, 255, 255];
    e.has(a) || e.set(a, {
      name: a,
      color: c,
      images: []
    }), e.get(a).images.push(o);
  }
  return e;
};
class z {
  static RGBAfromYCbCr(e) {
    const t = new Uint8ClampedArray(e.length * 4 / 3);
    let r, s;
    for (r = 0, s = 0; r < e.length; r += 3, s += 4) {
      const o = e[r], n = e[r + 1], a = e[r + 2];
      t[s] = o + 1.402 * (a - 128), t[s + 1] = o - 0.34414 * (n - 128) - 0.71414 * (a - 128), t[s + 2] = o + 1.772 * (n - 128), t[s + 3] = 255;
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
    for (let o = 0, n = 0; o < e.length; ++o, n += 4)
      s = 256 - e[o] / t * 256, r[n] = s, r[n + 1] = s, r[n + 2] = s, r[n + 3] = 255;
    return r;
  }
  static RGBAfromBlackIsZero(e, t) {
    const r = new Uint8ClampedArray(e.length * 4);
    let s;
    for (let o = 0, n = 0; o < e.length; ++o, n += 4)
      s = e[o] / t * 256, r[n] = s, r[n + 1] = s, r[n + 2] = s, r[n + 3] = 255;
    return r;
  }
  static RGBAfromPalette(e, t) {
    const r = new Uint8ClampedArray(e.length * 4), s = t.length / 3, o = t.length / 3 * 2;
    for (let n = 0, a = 0; n < e.length; ++n, a += 4) {
      const l = e[n];
      r[a] = t[l] / 65536 * 256, r[a + 1] = t[l + s] / 65536 * 256, r[a + 2] = t[l + o] / 65536 * 256, r[a + 3] = 255;
    }
    return r;
  }
  static RGBAfromCMYK(e) {
    const t = new Uint8ClampedArray(e.length);
    for (let r = 0, s = 0; r < e.length; r += 4, s += 4) {
      const o = e[r], n = e[r + 1], a = e[r + 2], l = e[r + 3];
      t[s] = 255 * ((255 - o) / 256) * ((255 - l) / 256), t[s + 1] = 255 * ((255 - n) / 256) * ((255 - l) / 256), t[s + 2] = 255 * ((255 - a) / 256) * ((255 - l) / 256), t[s + 3] = 255;
    }
    return t;
  }
  static RGBAfromCIELab(e) {
    const o = new Uint8ClampedArray(e.length * 4 / 3);
    for (let n = 0, a = 0; n < e.length; n += 3, a += 4) {
      const l = e[n + 0], c = e[n + 1] << 24 >> 24, h = e[n + 2] << 24 >> 24;
      let d = (l + 16) / 116, u = c / 500 + d, g = d - h / 200, f, y, p;
      u = 0.95047 * (u * u * u > 8856e-6 ? u * u * u : (u - 16 / 116) / 7.787), d = 1 * (d * d * d > 8856e-6 ? d * d * d : (d - 16 / 116) / 7.787), g = 1.08883 * (g * g * g > 8856e-6 ? g * g * g : (g - 16 / 116) / 7.787), f = u * 3.2406 + d * -1.5372 + g * -0.4986, y = u * -0.9689 + d * 1.8758 + g * 0.0415, p = u * 0.0557 + d * -0.204 + g * 1.057, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, y = y > 31308e-7 ? 1.055 * y ** (1 / 2.4) - 0.055 : 12.92 * y, p = p > 31308e-7 ? 1.055 * p ** (1 / 2.4) - 0.055 : 12.92 * p, o[a] = Math.max(0, Math.min(1, f)) * 255, o[a + 1] = Math.max(0, Math.min(1, y)) * 255, o[a + 2] = Math.max(0, Math.min(1, p)) * 255, o[a + 3] = 255;
    }
    return o;
  }
}
function Vr(i) {
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
        success: function(o) {
          var n;
          try {
            n = new window.Blob([o.response]);
          } catch (h) {
            var a = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (h.name === "TypeError" && a) {
              var l = new a();
              l.append(o.response), n = l.getBlob();
            }
          }
          n.size === 0 && (r.errorMsg = "Empty image response.", r.finish(!1));
          var c = (window.URL || window.webkitURL).createObjectURL(n);
          r.image.src = c;
        },
        error: function(o) {
          r.errorMsg = "Image load aborted - XHR error: Ajax returned " + o.status, r.finish(!1);
        }
      }), this.abort = function() {
        r.request.abort(), typeof s == "function" && s();
      }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.src.fetch ? this.src.fetch().then((o) => this.image.src = o) : this.image.src = this.src);
    },
    finish: function(r) {
      this.image.onload = this.image.onerror = this.image.onabort = null, r || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
    }
  };
  function t(r, s, o) {
    var n;
    r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (n = r.jobQueue.shift(), n.start(), r.jobsInProgress++), o(s.image, s.errorMsg, s.request);
  }
  i.ImageLoader.prototype.addJob = function(r) {
    var s = this, o = function(l) {
      t(s, l, r.callback);
    }, n = {
      src: r.src,
      loadWithAjax: r.loadWithAjax,
      ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null,
      crossOriginPolicy: r.crossOriginPolicy,
      ajaxWithCredentials: r.ajaxWithCredentials,
      postData: r.postData,
      callback: o,
      abort: r.abort,
      timeout: this.timeout
    }, a = new e(n);
    !this.jobLimit || this.jobsInProgress < this.jobLimit ? (a.start(), this.jobsInProgress++) : this.jobQueue.push(a);
  }, i.Tile.prototype._hasTransparencyChannel = function() {
    return !1;
  };
}
const qr = (i) => {
  let e = 0;
  const r = class r extends i.TileSource {
    constructor(n, a = { logLatency: !1 }) {
      super();
      /**
       * Return the tileWidth for a given level.
       * @function
       * @param {Number} level
       */
      k(this, "getTileWidth", (n) => {
        if (this.levels.length > n)
          return this.levels[n].tileWidth;
      });
      /**
       * Return the tileHeight for a given level.
       * @function
       * @param {Number} level
       */
      k(this, "getTileHeight", (n) => {
        if (this.levels.length > n)
          return this.levels[n].tileHeight;
      });
      /**
       * @function
       * @param {Number} level
       */
      k(this, "getLevelScale", (n) => {
        let a = NaN;
        return this.levels.length > 0 && n >= this.minLevel && n <= this.maxLevel && (a = this.levels[n].width / this.levels[this.maxLevel].width), a;
      });
      /**
       * Handle maintaining unique caches per channel in multi-channel images
       */
      k(this, "getTileHashKey", (n, a, l) => {
        var c;
        return `geotiffTileSource${this._tsCounter}_${((c = this == null ? void 0 : this.channel) == null ? void 0 : c.name) ?? ""}_${n}_${a}_${l}`;
      });
      /**
       * Implement function here instead of as custom tile source in client code
       * @function
       * @param {Number} levelnum
       * @param {Number} x
       * @param {Number} y
       */
      k(this, "getTileUrl", (n, a, l) => {
        let c = this.levels[n], h = new String(`${n}/${a}_${l}`);
        return h.fetch = /* @__PURE__ */ ((d, u, g, f, y) => () => this.regionToDataUrl.call(d, u, g, f, y))(this, c, a, l, h), h;
      });
      k(this, "downloadTileStart", (n) => {
        n.src.fetch().then((a) => {
          let l = new Image(), c = "" + n.src;
          l.onload = function() {
            n.finish(l);
          }, l.onerror = l.onabort = function() {
            n.finish(null, c, "Request aborted");
          }, l.src = a;
        });
      });
      k(this, "downloadTileAbort", (n) => {
        n.src.abortController && n.src.abortController.abort();
      });
      k(this, "setupComplete", () => {
        this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
      });
      k(this, "setupLevels", () => {
        if (this._ready)
          return;
        let n = this.GeoTIFFImages.sort((u, g) => g.getWidth() - u.getWidth()), a = this._tileSize, l = this._tileSize, c = n[0].getWidth();
        this.width = c;
        let h = n[0].getHeight();
        if (this.height = h, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new i.Point(this.width, this.height), n.reduce(
          (u, g) => (u.width !== -1 && (u.valid = u.valid && g.getWidth() < u.width), u.width = g.getWidth(), u),
          { valid: !0, width: -1 }
        ).valid)
          this.levels = n.map((u) => {
            let g = u.getWidth(), f = u.getHeight();
            return {
              width: g,
              height: f,
              tileWidth: this.options.tileWidth || u.getTileWidth() || a,
              tileHeight: this.options.tileHeight || u.getTileHeight() || l,
              image: u,
              scaleFactor: 1
            };
          }), this.maxLevel = this.levels.length - 1;
        else {
          let u = Math.ceil(
            Math.log2(Math.max(c / a, h / l))
          ), g = [...Array(u).keys()].filter((f) => f % 2 == 0);
          this.levels = g.map((f) => {
            let y = Math.pow(2, f);
            const p = n.filter((m) => {
              const b = Math.pow(2, f - 1);
              return b >= 0 ? m.getWidth() * b < c && m.getWidth() * y >= c : m.getWidth() * y >= c;
            });
            if (p.length === 0)
              return null;
            const w = p[0];
            return {
              width: c / y,
              height: h / y,
              tileWidth: this.options.tileWidth || w.getTileWidth() || a,
              tileHeight: this.options.tileHeight || w.getTileHeight() || l,
              image: w,
              scaleFactor: y * w.getWidth() / c
            };
          }).filter((f) => f !== null), this.maxLevel = this.levels.length - 1;
        }
        this.levels = this.levels.sort((u, g) => u.width - g.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
      });
      k(this, "regionToDataUrl", (n, a, l, c) => {
        var m, b, T, S, D;
        let h = this.options.logLatency && Date.now(), u = (c.abortController = new AbortController()).signal;
        const g = n.tileWidth, f = n.tileHeight, y = [a * g, l * f, (a + 1) * g, (l + 1) * f].map(
          (M) => M * n.scaleFactor
        ), p = n.image;
        if ((b = (m = p.fileDirectory) == null ? void 0 : m.Software) == null ? void 0 : b.startsWith("PerkinElmer-QPI")) {
          const M = new DOMParser().parseFromString(
            (T = p.fileDirectory) == null ? void 0 : T.ImageDescription,
            "text/xml"
          );
          (S = M.querySelector("Name")) == null || S.textContent;
          const I = (D = M.querySelector("Color")) == null ? void 0 : D.textContent, C = I ? I.split(",").map((O) => parseInt(O)) : [255, 255, 255];
          return n.image.readRGB({
            interleave: !0,
            window: y,
            pool: this._pool,
            width: n.tileWidth,
            height: n.tileHeight,
            signal: u
          }).then((O) => {
            let P = document.createElement("canvas");
            P.width = n.tileWidth, P.height = n.tileHeight;
            let F = P.getContext("2d"), G = new Uint8ClampedArray(4 * P.width * P.height), L = new Uint8ClampedArray(O), B, N;
            for (B = 0, N = 0; B < L.length; B += 3, N += 4)
              G[N] = L[B] * C[0] / 255, G[N + 1] = L[B + 1] * C[1] / 255, G[N + 2] = L[B + 2] * C[2] / 255, G[N + 3] = 255;
            const te = F.createImageData(P.width, P.height);
            te.data.set(G), F.putImageData(te, 0, 0);
            let X = P.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)("Tile latency (ms):", Date.now() - h), X;
          });
        } else
          return n.image.getTileOrStrip(a, l, null, this._pool, u).then((M) => {
            let I = new Uint8ClampedArray(M.data), C = document.createElement("canvas");
            C.width = n.tileWidth, C.height = n.tileHeight;
            let O = C.getContext("2d"), P = n.image.fileDirectory.PhotometricInterpretation, F;
            if (I.length / (C.width * C.height) % 4 === 0)
              F = I;
            else
              switch (P) {
                case A.WhiteIsZero:
                  F = z.RGBAfromWhiteIsZero(
                    I,
                    2 ** n.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case A.BlackIsZero:
                  F = z.RGBAfromBlackIsZero(
                    I,
                    2 ** n.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case A.RGB:
                  F = z.RGBAfromRGB(I);
                  break;
                case A.Palette:
                  F = z.RGBAfromPalette(I, 2 ** n.image.fileDirectory.colorMap);
                  break;
                case A.CMYK:
                  F = z.RGBAfromCMYK(I);
                  break;
                case A.YCbCr:
                  F = z.RGBAfromYCbCr(I);
                  break;
                case A.CIELab:
                  F = z.RGBAfromCIELab(I);
                  break;
              }
            const G = O.createImageData(C.width, C.height);
            G.data.set(F), O.putImageData(G, 0, 0);
            let L = C.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
              "Tile latency (ms):",
              Date.now() - h
            ), L;
          });
      });
      r._osdReady || r.applyOSDPatch(i);
      let l = this;
      this.input = n, this.options = a, this.channel = (n == null ? void 0 : n.channel) ?? null, this._ready = !1, this._pool = r.sharedPool, this._tileSize = 256, this._tsCounter = e, e += 1, n.GeoTIFF && n.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(n.GeoTIFF),
        GeoTIFFImages: Promise.resolve(n.GeoTIFFImages),
        ready: new fe()
      }, this.GeoTIFF = n.GeoTIFF, this.imageCount = n.GeoTIFFImages.length, this.GeoTIFFImages = n.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: n instanceof File ? _e(n) : ve(n),
        GeoTIFFImages: new fe(),
        ready: new fe()
      }, this.promises.GeoTIFF.then((c) => (l.GeoTIFF = c, c.getImageCount())).then((c) => {
        l.imageCount = c;
        let h = [...Array(c).keys()].map((d) => l.GeoTIFF.getImage(d));
        return Promise.all(h);
      }).then((c) => {
        l.GeoTIFFImages = c, l.promises.GeoTIFFImages.resolve(c), this.setupLevels();
      }).catch((c) => {
        throw console.error("Re-throwing error with GeoTIFF:", c), c;
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
  k(r, "sharedPool", new mr()), k(r, "_osdReady", !1), // Apply ImageJob patch to OpenSeadragon. Can be extended for modular patches.
  k(r, "applyOSDPatch", (n) => {
    Vr(n), r._osdReady = !0;
  }), k(r, "getAllTileSources", async (n, a) => {
    const l = n instanceof File ? n.name.split(".").pop() : n.split(".").pop();
    let c = n instanceof File ? _e(n) : ve(n);
    return c.then((h) => (c = h, h.getImageCount())).then(
      (h) => Promise.all([...Array(h).keys()].map(async (d) => (await c).getImage(d)))
    ).then((h) => {
      h = h.filter(
        (f) => f.fileDirectory.photometricInterpretation !== A.TransparencyMask
      ), h.sort((f, y) => y.getWidth() - f.getWidth());
      const d = 0.015;
      return h.reduce((f, y) => {
        const p = y.getWidth() / y.getHeight();
        let w = "";
        y.fileDirectory.ImageDescription && (w = y.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
        const m = f.filter(
          (b) => Math.abs(1 - b.aspectRatio / p) < d && !(w != null && w.includes("macro") || w != null && w.includes("label"))
          // Separate out macro thumbnails and labels
        );
        if (m.length === 0) {
          let b = {
            aspectRatio: p,
            images: [y]
          };
          f.push(b);
        } else
          m[0].images.push(y);
        return f;
      }, []).map((f) => f.images).map((f, y) => {
        if (y !== 0)
          return new i.GeoTIFFTileSource(
            {
              GeoTIFF: c,
              GeoTIFFImages: f
            },
            a
          );
        switch (l) {
          case "qptiff":
            const p = Kr(f);
            return Array.from(p.values()).map((w, m) => new i.GeoTIFFTileSource(
              {
                GeoTIFF: c,
                GeoTIFFImages: w.images,
                channel: {
                  name: w.name,
                  color: w.color
                }
              },
              a
            ));
          default:
            return new i.GeoTIFFTileSource(
              {
                GeoTIFF: c,
                GeoTIFFImages: f
              },
              a
            );
        }
      });
    });
  });
  let t = r;
  i.GeoTIFFTileSource = t;
};
(function(i, e) {
  typeof exports > "u" || typeof i.OpenSeadragon < "u" && e(i.OpenSeadragon);
})(typeof window < "u" ? window : void 0, qr);
export {
  ss as L,
  is as a,
  qr as e,
  We as g
};
//# sourceMappingURL=main-8v7k2MJ1.js.map
