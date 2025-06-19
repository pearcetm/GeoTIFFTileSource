var an = Object.defineProperty;
var on = (A, t, e) => t in A ? an(A, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[t] = e;
var eA = (A, t, e) => on(A, typeof t != "symbol" ? t + "" : t, e);
function AA(A) {
  return (t, ...e) => gn(A, t, e);
}
function WA(A, t) {
  return AA(
    $i(
      A,
      t
    ).get
  );
}
const {
  apply: gn,
  construct: zs,
  defineProperty: Zs,
  get: Xs,
  getOwnPropertyDescriptor: $i,
  getPrototypeOf: _t,
  has: js,
  ownKeys: sn,
  set: Ws,
  setPrototypeOf: $s
} = Reflect, {
  iterator: de,
  species: AI,
  toStringTag: In,
  for: eI
} = Symbol, Bn = Object, {
  create: vt,
  defineProperty: ln,
  freeze: tI,
  is: iI
} = Bn, fn = Array, Cn = fn.prototype, Ar = Cn[de], En = AA(Ar), er = ArrayBuffer, cn = er.prototype;
WA(cn, "byteLength");
const ii = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
ii && WA(ii.prototype, "byteLength");
const tr = _t(Uint8Array);
tr.from;
const iA = tr.prototype;
iA[de];
AA(iA.keys);
AA(
  iA.values
);
AA(
  iA.entries
);
AA(iA.set);
AA(
  iA.reverse
);
AA(iA.fill);
AA(
  iA.copyWithin
);
AA(iA.sort);
AA(iA.slice);
AA(
  iA.subarray
);
WA(
  iA,
  "buffer"
);
WA(
  iA,
  "byteOffset"
);
WA(
  iA,
  "length"
);
WA(
  iA,
  In
);
const Qn = Uint8Array, ir = Uint16Array, Rt = Uint32Array, hn = Float32Array, Be = _t([][de]()), rr = AA(Be.next), un = AA(function* () {
}().next), dn = _t(Be), wn = DataView.prototype, yn = AA(
  wn.getUint16
), Ut = WeakMap, nr = Ut.prototype, ar = AA(nr.get), Dn = AA(nr.set), or = new Ut(), pn = vt(null, {
  next: {
    value: function() {
      const t = ar(or, this);
      return rr(t);
    }
  },
  [de]: {
    value: function() {
      return this;
    }
  }
});
function mn(A) {
  if (A[de] === Ar && Be.next === rr)
    return A;
  const t = vt(pn);
  return Dn(or, t, En(A)), t;
}
const kn = new Ut(), Sn = vt(dn, {
  next: {
    value: function() {
      const t = ar(kn, this);
      return un(t);
    },
    writable: !0,
    configurable: !0
  }
});
for (const A of sn(Be))
  A !== "next" && ln(Sn, A, $i(Be, A));
const gr = new er(4), Fn = new hn(gr), xn = new Rt(gr), fA = new ir(512), CA = new Qn(512);
for (let A = 0; A < 256; ++A) {
  const t = A - 127;
  t < -24 ? (fA[A] = 0, fA[A | 256] = 32768, CA[A] = 24, CA[A | 256] = 24) : t < -14 ? (fA[A] = 1024 >> -t - 14, fA[A | 256] = 1024 >> -t - 14 | 32768, CA[A] = -t - 1, CA[A | 256] = -t - 1) : t <= 15 ? (fA[A] = t + 15 << 10, fA[A | 256] = t + 15 << 10 | 32768, CA[A] = 13, CA[A | 256] = 13) : t < 128 ? (fA[A] = 31744, fA[A | 256] = 64512, CA[A] = 24, CA[A | 256] = 24) : (fA[A] = 31744, fA[A | 256] = 64512, CA[A] = 13, CA[A | 256] = 13);
}
const Lt = new Rt(2048);
for (let A = 1; A < 1024; ++A) {
  let t = A << 13, e = 0;
  for (; !(t & 8388608); )
    t <<= 1, e -= 8388608;
  t &= -8388609, e += 947912704, Lt[A] = t | e;
}
for (let A = 1024; A < 2048; ++A)
  Lt[A] = 939524096 + (A - 1024 << 13);
const $A = new Rt(64);
for (let A = 1; A < 31; ++A)
  $A[A] = A << 23;
$A[31] = 1199570944;
$A[32] = 2147483648;
for (let A = 33; A < 63; ++A)
  $A[A] = 2147483648 + (A - 32 << 23);
$A[63] = 3347054592;
const sr = new ir(64);
for (let A = 1; A < 64; ++A)
  A !== 32 && (sr[A] = 1024);
function Gn(A) {
  const t = A >> 10;
  return xn[0] = Lt[sr[t] + (A & 1023)] + $A[t], Fn[0];
}
function Ir(A, t, ...e) {
  return Gn(
    yn(A, t, ...mn(e))
  );
}
function Mt(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Nt = { exports: {} };
function Br(A, t, e) {
  const i = e && e.debug || !1;
  i && console.log("[xml-utils] getting " + t + " in " + A);
  const n = typeof A == "object" ? A.outer : A, r = n.slice(0, n.indexOf(">") + 1), s = ['"', "'"];
  for (let g = 0; g < s.length; g++) {
    const E = s[g], a = t + "\\=" + E + "([^" + E + "]*)" + E;
    i && console.log("[xml-utils] pattern:", a);
    const I = new RegExp(a).exec(r);
    if (i && console.log("[xml-utils] match:", I), I) return I[1];
  }
}
Nt.exports = Br;
Nt.exports.default = Br;
var bn = Nt.exports;
const Ze = /* @__PURE__ */ Mt(bn);
var qt = { exports: {} }, Tt = { exports: {} }, Jt = { exports: {} };
function lr(A, t, e) {
  const n = new RegExp(t).exec(A.slice(e));
  return n ? e + n.index : -1;
}
Jt.exports = lr;
Jt.exports.default = lr;
var _n = Jt.exports, Ht = { exports: {} };
function fr(A, t, e) {
  const n = new RegExp(t).exec(A.slice(e));
  return n ? e + n.index + n[0].length - 1 : -1;
}
Ht.exports = fr;
Ht.exports.default = fr;
var vn = Ht.exports, Yt = { exports: {} };
function Cr(A, t) {
  const e = new RegExp(t, "g"), i = A.match(e);
  return i ? i.length : 0;
}
Yt.exports = Cr;
Yt.exports.default = Cr;
var Rn = Yt.exports;
const Un = _n, Xe = vn, ri = Rn;
function Er(A, t, e) {
  const i = e && e.debug || !1, n = !(e && typeof e.nested === !1), r = e && e.startIndex || 0;
  i && console.log("[xml-utils] starting findTagByName with", t, " and ", e);
  const s = Un(A, `<${t}[ 
>/]`, r);
  if (i && console.log("[xml-utils] start:", s), s === -1) return;
  const g = A.slice(s + t.length);
  let E = Xe(g, "^[^<]*[ /]>", 0);
  const a = E !== -1 && g[E - 1] === "/";
  if (i && console.log("[xml-utils] selfClosing:", a), a === !1)
    if (n) {
      let B = 0, l = 1, h = 0;
      for (; (E = Xe(g, "[ /]" + t + ">", B)) !== -1; ) {
        const C = g.substring(B, E + 1);
        if (l += ri(C, "<" + t + `[ 
	>]`), h += ri(C, "</" + t + ">"), h >= l) break;
        B = E;
      }
    } else
      E = Xe(g, "[ /]" + t + ">", 0);
  const o = s + t.length + E + 1;
  if (i && console.log("[xml-utils] end:", o), o === -1) return;
  const I = A.slice(s, o);
  let f;
  return a ? f = null : f = I.slice(I.indexOf(">") + 1, I.lastIndexOf("<")), { inner: f, outer: I, start: s, end: o };
}
Tt.exports = Er;
Tt.exports.default = Er;
var Ln = Tt.exports;
const Mn = Ln;
function cr(A, t, e) {
  const i = [], n = e && e.debug || !1, r = e && typeof e.nested == "boolean" ? e.nested : !0;
  let s = e && e.startIndex || 0, g;
  for (; g = Mn(A, t, { debug: n, startIndex: s }); )
    r ? s = g.start + 1 + t.length : s = g.end, i.push(g);
  return n && console.log("findTagsByName found", i.length, "tags"), i;
}
qt.exports = cr;
qt.exports.default = cr;
var Nn = qt.exports;
const qn = /* @__PURE__ */ Mt(Nn), KA = {
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
  // Laser Scanning Microscopy
  34412: "CZ_LSMINFO",
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
}, cA = {};
for (const A in KA)
  KA.hasOwnProperty(A) && (cA[KA[A]] = parseInt(A, 10));
const Tn = [
  cA.BitsPerSample,
  cA.ExtraSamples,
  cA.SampleFormat,
  cA.StripByteCounts,
  cA.StripOffsets,
  cA.StripRowCounts,
  cA.TileByteCounts,
  cA.TileOffsets,
  cA.SubIFDs
], je = {
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
}, J = {};
for (const A in je)
  je.hasOwnProperty(A) && (J[je[A]] = parseInt(A, 10));
const X = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, Jn = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, Hn = {
  Version: 0,
  AddCompression: 1
}, We = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, Yn = {
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
function On(A, t) {
  const { width: e, height: i } = A, n = new Uint8Array(e * i * 3);
  let r;
  for (let s = 0, g = 0; s < A.length; ++s, g += 3)
    r = 256 - A[s] / t * 256, n[g] = r, n[g + 1] = r, n[g + 2] = r;
  return n;
}
function Kn(A, t) {
  const { width: e, height: i } = A, n = new Uint8Array(e * i * 3);
  let r;
  for (let s = 0, g = 0; s < A.length; ++s, g += 3)
    r = A[s] / t * 256, n[g] = r, n[g + 1] = r, n[g + 2] = r;
  return n;
}
function Vn(A, t) {
  const { width: e, height: i } = A, n = new Uint8Array(e * i * 3), r = t.length / 3, s = t.length / 3 * 2;
  for (let g = 0, E = 0; g < A.length; ++g, E += 3) {
    const a = A[g];
    n[E] = t[a] / 65536 * 256, n[E + 1] = t[a + r] / 65536 * 256, n[E + 2] = t[a + s] / 65536 * 256;
  }
  return n;
}
function Pn(A) {
  const { width: t, height: e } = A, i = new Uint8Array(t * e * 3);
  for (let n = 0, r = 0; n < A.length; n += 4, r += 3) {
    const s = A[n], g = A[n + 1], E = A[n + 2], a = A[n + 3];
    i[r] = 255 * ((255 - s) / 256) * ((255 - a) / 256), i[r + 1] = 255 * ((255 - g) / 256) * ((255 - a) / 256), i[r + 2] = 255 * ((255 - E) / 256) * ((255 - a) / 256);
  }
  return i;
}
function zn(A) {
  const { width: t, height: e } = A, i = new Uint8ClampedArray(t * e * 3);
  for (let n = 0, r = 0; n < A.length; n += 3, r += 3) {
    const s = A[n], g = A[n + 1], E = A[n + 2];
    i[r] = s + 1.402 * (E - 128), i[r + 1] = s - 0.34414 * (g - 128) - 0.71414 * (E - 128), i[r + 2] = s + 1.772 * (g - 128);
  }
  return i;
}
const Zn = 0.95047, Xn = 1, jn = 1.08883;
function Wn(A) {
  const { width: t, height: e } = A, i = new Uint8Array(t * e * 3);
  for (let n = 0, r = 0; n < A.length; n += 3, r += 3) {
    const s = A[n + 0], g = A[n + 1] << 24 >> 24, E = A[n + 2] << 24 >> 24;
    let a = (s + 16) / 116, o = g / 500 + a, I = a - E / 200, f, B, l;
    o = Zn * (o * o * o > 8856e-6 ? o * o * o : (o - 16 / 116) / 7.787), a = Xn * (a * a * a > 8856e-6 ? a * a * a : (a - 16 / 116) / 7.787), I = jn * (I * I * I > 8856e-6 ? I * I * I : (I - 16 / 116) / 7.787), f = o * 3.2406 + a * -1.5372 + I * -0.4986, B = o * -0.9689 + a * 1.8758 + I * 0.0415, l = o * 0.0557 + a * -0.204 + I * 1.057, f = f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f, B = B > 31308e-7 ? 1.055 * B ** (1 / 2.4) - 0.055 : 12.92 * B, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : 12.92 * l, i[r] = Math.max(0, Math.min(1, f)) * 255, i[r + 1] = Math.max(0, Math.min(1, B)) * 255, i[r + 2] = Math.max(0, Math.min(1, l)) * 255;
  }
  return i;
}
const Qr = /* @__PURE__ */ new Map();
function bA(A, t) {
  Array.isArray(A) || (A = [A]), A.forEach((e) => Qr.set(e, t));
}
async function hr(A) {
  const t = Qr.get(A.Compression);
  if (!t)
    throw new Error(`Unknown compression method identifier: ${A.Compression}`);
  const e = await t();
  return new e(A);
}
bA([void 0, 1], () => Promise.resolve().then(() => za).then((A) => A.default));
bA(5, () => Promise.resolve().then(() => $a).then((A) => A.default));
bA(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
bA(7, () => Promise.resolve().then(() => ro).then((A) => A.default));
bA([8, 32946], () => Promise.resolve().then(() => Rs).then((A) => A.default));
bA(32773, () => Promise.resolve().then(() => Ls).then((A) => A.default));
bA(
  34887,
  () => Promise.resolve().then(() => Js).then(async (A) => (await A.zstd.init(), A)).then((A) => A.default)
);
bA(50001, () => Promise.resolve().then(() => Ys).then((A) => A.default));
function Ye(A, t, e, i = 1) {
  return new (Object.getPrototypeOf(A)).constructor(t * e * i);
}
function $n(A, t, e, i, n) {
  const r = t / i, s = e / n;
  return A.map((g) => {
    const E = Ye(g, i, n);
    for (let a = 0; a < n; ++a) {
      const o = Math.min(Math.round(s * a), e - 1);
      for (let I = 0; I < i; ++I) {
        const f = Math.min(Math.round(r * I), t - 1), B = g[o * t + f];
        E[a * i + I] = B;
      }
    }
    return E;
  });
}
function VA(A, t, e) {
  return (1 - e) * A + e * t;
}
function Aa(A, t, e, i, n) {
  const r = t / i, s = e / n;
  return A.map((g) => {
    const E = Ye(g, i, n);
    for (let a = 0; a < n; ++a) {
      const o = s * a, I = Math.floor(o), f = Math.min(Math.ceil(o), e - 1);
      for (let B = 0; B < i; ++B) {
        const l = r * B, h = l % 1, C = Math.floor(l), c = Math.min(Math.ceil(l), t - 1), u = g[I * t + C], D = g[I * t + c], d = g[f * t + C], p = g[f * t + c], Q = VA(
          VA(u, D, h),
          VA(d, p, h),
          o % 1
        );
        E[a * i + B] = Q;
      }
    }
    return E;
  });
}
function ea(A, t, e, i, n, r = "nearest") {
  switch (r.toLowerCase()) {
    case "nearest":
      return $n(A, t, e, i, n);
    case "bilinear":
    case "linear":
      return Aa(A, t, e, i, n);
    default:
      throw new Error(`Unsupported resampling method: '${r}'`);
  }
}
function ta(A, t, e, i, n, r) {
  const s = t / i, g = e / n, E = Ye(A, i, n, r);
  for (let a = 0; a < n; ++a) {
    const o = Math.min(Math.round(g * a), e - 1);
    for (let I = 0; I < i; ++I) {
      const f = Math.min(Math.round(s * I), t - 1);
      for (let B = 0; B < r; ++B) {
        const l = A[o * t * r + f * r + B];
        E[a * i * r + I * r + B] = l;
      }
    }
  }
  return E;
}
function ia(A, t, e, i, n, r) {
  const s = t / i, g = e / n, E = Ye(A, i, n, r);
  for (let a = 0; a < n; ++a) {
    const o = g * a, I = Math.floor(o), f = Math.min(Math.ceil(o), e - 1);
    for (let B = 0; B < i; ++B) {
      const l = s * B, h = l % 1, C = Math.floor(l), c = Math.min(Math.ceil(l), t - 1);
      for (let u = 0; u < r; ++u) {
        const D = A[I * t * r + C * r + u], d = A[I * t * r + c * r + u], p = A[f * t * r + C * r + u], Q = A[f * t * r + c * r + u], w = VA(
          VA(D, d, h),
          VA(p, Q, h),
          o % 1
        );
        E[a * i * r + B * r + u] = w;
      }
    }
  }
  return E;
}
function ra(A, t, e, i, n, r, s = "nearest") {
  switch (s.toLowerCase()) {
    case "nearest":
      return ta(
        A,
        t,
        e,
        i,
        n,
        r
      );
    case "bilinear":
    case "linear":
      return ia(
        A,
        t,
        e,
        i,
        n,
        r
      );
    default:
      throw new Error(`Unsupported resampling method: '${s}'`);
  }
}
function na(A, t, e) {
  let i = 0;
  for (let n = t; n < e; ++n)
    i += A[n];
  return i;
}
function ht(A, t, e) {
  switch (A) {
    case 1:
      if (t <= 8)
        return new Uint8Array(e);
      if (t <= 16)
        return new Uint16Array(e);
      if (t <= 32)
        return new Uint32Array(e);
      break;
    case 2:
      if (t === 8)
        return new Int8Array(e);
      if (t === 16)
        return new Int16Array(e);
      if (t === 32)
        return new Int32Array(e);
      break;
    case 3:
      switch (t) {
        case 16:
        case 32:
          return new Float32Array(e);
        case 64:
          return new Float64Array(e);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function aa(A, t) {
  return (A === 1 || A === 2) && t <= 32 && t % 8 === 0 ? !1 : !(A === 3 && (t === 16 || t === 32 || t === 64));
}
function oa(A, t, e, i, n, r, s) {
  const g = new DataView(A), E = e === 2 ? s * r : s * r * i, a = e === 2 ? 1 : i, o = ht(t, n, E), I = parseInt("1".repeat(n), 2);
  if (t === 1) {
    let f;
    e === 1 ? f = i * n : f = n;
    let B = r * f;
    B & 7 && (B = B + 7 & -8);
    for (let l = 0; l < s; ++l) {
      const h = l * B;
      for (let C = 0; C < r; ++C) {
        const c = h + C * a * n;
        for (let u = 0; u < a; ++u) {
          const D = c + u * n, d = (l * r + C) * a + u, p = Math.floor(D / 8), Q = D % 8;
          if (Q + n <= 8)
            o[d] = g.getUint8(p) >> 8 - n - Q & I;
          else if (Q + n <= 16)
            o[d] = g.getUint16(p) >> 16 - n - Q & I;
          else if (Q + n <= 24) {
            const w = g.getUint16(p) << 8 | g.getUint8(p + 2);
            o[d] = w >> 24 - n - Q & I;
          } else
            o[d] = g.getUint32(p) >> 32 - n - Q & I;
        }
      }
    }
  }
  return o.buffer;
}
class ga {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(t, e, i, n, r, s) {
    this.fileDirectory = t, this.geoKeys = e, this.dataView = i, this.littleEndian = n, this.tiles = r ? {} : null, this.isTiled = !t.StripOffsets;
    const g = t.PlanarConfiguration;
    if (this.planarConfiguration = typeof g > "u" ? 1 : g, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = s;
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
  getBlockHeight(t) {
    return this.isTiled || (t + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - t * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let t = 0;
    for (let e = 0; e < this.fileDirectory.BitsPerSample.length; ++e)
      t += this.getSampleByteSize(e);
    return t;
  }
  getSampleByteSize(t) {
    if (t >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${t} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[t] / 8);
  }
  getReaderForSample(t) {
    const e = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[t] : 1, i = this.fileDirectory.BitsPerSample[t];
    switch (e) {
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
            return function(n, r) {
              return Ir(this, n, r);
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
  getSampleFormat(t = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[t] : 1;
  }
  getBitsPerSample(t = 0) {
    return this.fileDirectory.BitsPerSample[t];
  }
  getArrayForSample(t, e) {
    const i = this.getSampleFormat(t), n = this.getBitsPerSample(t);
    return ht(i, n, e);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<{x: number, y: number, sample: number, data: ArrayBuffer}>} the decoded strip or tile
   */
  async getTileOrStrip(t, e, i, n, r) {
    const s = Math.ceil(this.getWidth() / this.getTileWidth()), g = Math.ceil(this.getHeight() / this.getTileHeight());
    let E;
    const { tiles: a } = this;
    this.planarConfiguration === 1 ? E = e * s + t : this.planarConfiguration === 2 && (E = i * s * g + e * s + t);
    let o, I;
    this.isTiled ? (o = this.fileDirectory.TileOffsets[E], I = this.fileDirectory.TileByteCounts[E]) : (o = this.fileDirectory.StripOffsets[E], I = this.fileDirectory.StripByteCounts[E]);
    const f = (await this.source.fetch([{ offset: o, length: I }], r))[0];
    let B;
    return a === null || !a[E] ? (B = (async () => {
      let l = await n.decode(this.fileDirectory, f);
      const h = this.getSampleFormat(), C = this.getBitsPerSample();
      return aa(h, C) && (l = oa(
        l,
        h,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        C,
        this.getTileWidth(),
        this.getBlockHeight(e)
      )), l;
    })(), a !== null && (a[E] = B)) : B = a[E], { x: t, y: e, sample: i, data: await B };
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
  async _readRaster(t, e, i, n, r, s, g, E, a) {
    const o = this.getTileWidth(), I = this.getTileHeight(), f = this.getWidth(), B = this.getHeight(), l = Math.max(Math.floor(t[0] / o), 0), h = Math.min(
      Math.ceil(t[2] / o),
      Math.ceil(f / o)
    ), C = Math.max(Math.floor(t[1] / I), 0), c = Math.min(
      Math.ceil(t[3] / I),
      Math.ceil(B / I)
    ), u = t[2] - t[0];
    let D = this.getBytesPerPixel();
    const d = [], p = [];
    for (let y = 0; y < e.length; ++y)
      this.planarConfiguration === 1 ? d.push(na(this.fileDirectory.BitsPerSample, 0, e[y]) / 8) : d.push(0), p.push(this.getReaderForSample(e[y]));
    const Q = [], { littleEndian: w } = this;
    for (let y = C; y < c; ++y)
      for (let k = l; k < h; ++k) {
        let F;
        this.planarConfiguration === 1 && (F = this.getTileOrStrip(k, y, 0, r, a));
        for (let m = 0; m < e.length; ++m) {
          const b = m, G = e[m];
          this.planarConfiguration === 2 && (D = this.getSampleByteSize(G), F = this.getTileOrStrip(k, y, G, r, a));
          const M = F.then((x) => {
            const S = x.data, U = new DataView(S), _ = this.getBlockHeight(x.y), R = x.y * I, N = x.x * o, L = R + _, O = (x.x + 1) * o, P = p[b], v = Math.min(_, _ - (L - t[3]), B - R), T = Math.min(o, o - (O - t[2]), f - N);
            for (let q = Math.max(0, t[1] - R); q < v; ++q)
              for (let H = Math.max(0, t[0] - N); H < T; ++H) {
                const V = (q * o + H) * D, Z = P.call(
                  U,
                  V + d[b],
                  w
                );
                let j;
                n ? (j = (q + R - t[1]) * u * e.length + (H + N - t[0]) * e.length + b, i[j] = Z) : (j = (q + R - t[1]) * u + H + N - t[0], i[b][j] = Z);
              }
          });
          Q.push(M);
        }
      }
    if (await Promise.all(Q), s && t[2] - t[0] !== s || g && t[3] - t[1] !== g) {
      let y;
      return n ? y = ra(
        i,
        t[2] - t[0],
        t[3] - t[1],
        s,
        g,
        e.length,
        E
      ) : y = ea(
        i,
        t[2] - t[0],
        t[3] - t[1],
        s,
        g,
        E
      ), y.width = s, y.height = g, y;
    }
    return i.width = s || t[2] - t[0], i.height = g || t[3] - t[1], i;
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
    window: t,
    samples: e = [],
    interleave: i,
    pool: n = null,
    width: r,
    height: s,
    resampleMethod: g,
    fillValue: E,
    signal: a
  } = {}) {
    const o = t || [0, 0, this.getWidth(), this.getHeight()];
    if (o[0] > o[2] || o[1] > o[3])
      throw new Error("Invalid subsets");
    const I = o[2] - o[0], f = o[3] - o[1], B = I * f, l = this.getSamplesPerPixel();
    if (!e || !e.length)
      for (let u = 0; u < l; ++u)
        e.push(u);
    else
      for (let u = 0; u < e.length; ++u)
        if (e[u] >= l)
          return Promise.reject(new RangeError(`Invalid sample index '${e[u]}'.`));
    let h;
    if (i) {
      const u = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, D = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      h = ht(u, D, B * e.length), E && h.fill(E);
    } else {
      h = [];
      for (let u = 0; u < e.length; ++u) {
        const D = this.getArrayForSample(e[u], B);
        Array.isArray(E) && u < E.length ? D.fill(E[u]) : E && !Array.isArray(E) && D.fill(E), h.push(D);
      }
    }
    const C = n || await hr(this.fileDirectory);
    return await this._readRaster(
      o,
      e,
      h,
      i,
      C,
      r,
      s,
      g,
      a
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
    window: t,
    interleave: e = !0,
    pool: i = null,
    width: n,
    height: r,
    resampleMethod: s,
    enableAlpha: g = !1,
    signal: E
  } = {}) {
    const a = t || [0, 0, this.getWidth(), this.getHeight()];
    if (a[0] > a[2] || a[1] > a[3])
      throw new Error("Invalid subsets");
    const o = this.fileDirectory.PhotometricInterpretation;
    if (o === X.RGB) {
      let c = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Jn.Unspecified && g) {
        c = [];
        for (let u = 0; u < this.fileDirectory.BitsPerSample.length; u += 1)
          c.push(u);
      }
      return this.readRasters({
        window: t,
        interleave: e,
        samples: c,
        pool: i,
        width: n,
        height: r,
        resampleMethod: s,
        signal: E
      });
    }
    let I;
    switch (o) {
      case X.WhiteIsZero:
      case X.BlackIsZero:
      case X.Palette:
        I = [0];
        break;
      case X.CMYK:
        I = [0, 1, 2, 3];
        break;
      case X.YCbCr:
      case X.CIELab:
        I = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const f = {
      window: a,
      interleave: !0,
      samples: I,
      pool: i,
      width: n,
      height: r,
      resampleMethod: s,
      signal: E
    }, { fileDirectory: B } = this, l = await this.readRasters(f), h = 2 ** this.fileDirectory.BitsPerSample[0];
    let C;
    switch (o) {
      case X.WhiteIsZero:
        C = On(l, h);
        break;
      case X.BlackIsZero:
        C = Kn(l, h);
        break;
      case X.Palette:
        C = Vn(l, B.ColorMap);
        break;
      case X.CMYK:
        C = Pn(l);
        break;
      case X.YCbCr:
        C = zn(l);
        break;
      case X.CIELab:
        C = Wn(l);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!e) {
      const c = new Uint8Array(C.length / 3), u = new Uint8Array(C.length / 3), D = new Uint8Array(C.length / 3);
      for (let d = 0, p = 0; d < C.length; d += 3, ++p)
        c[p] = C[d], u[p] = C[d + 1], D[p] = C[d + 2];
      C = [c, u, D];
    }
    return C.width = l.width, C.height = l.height, C;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const t = [];
    for (let e = 0; e < this.fileDirectory.ModelTiepoint.length; e += 6)
      t.push({
        i: this.fileDirectory.ModelTiepoint[e],
        j: this.fileDirectory.ModelTiepoint[e + 1],
        k: this.fileDirectory.ModelTiepoint[e + 2],
        x: this.fileDirectory.ModelTiepoint[e + 3],
        y: this.fileDirectory.ModelTiepoint[e + 4],
        z: this.fileDirectory.ModelTiepoint[e + 5]
      });
    return t;
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
  getGDALMetadata(t = null) {
    const e = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const i = this.fileDirectory.GDAL_METADATA;
    let n = qn(i, "Item");
    t === null ? n = n.filter((r) => Ze(r, "sample") === void 0) : n = n.filter((r) => Number(Ze(r, "sample")) === t);
    for (let r = 0; r < n.length; ++r) {
      const s = n[r];
      e[Ze(s, "name")] = s.inner;
    }
    return e;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const t = this.fileDirectory.GDAL_NODATA;
    return Number(t.substring(0, t.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const t = this.fileDirectory.ModelTiepoint, e = this.fileDirectory.ModelTransformation;
    if (t && t.length === 6)
      return [
        t[3],
        t[4],
        t[5]
      ];
    if (e)
      return [
        e[3],
        e[7],
        e[11]
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
  getResolution(t = null) {
    const e = this.fileDirectory.ModelPixelScale, i = this.fileDirectory.ModelTransformation;
    if (e)
      return [
        e[0],
        -e[1],
        e[2]
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
    if (t) {
      const [n, r, s] = t.getResolution();
      return [
        n * t.getWidth() / this.getWidth(),
        r * t.getHeight() / this.getHeight(),
        s * t.getWidth() / this.getWidth()
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
  getBoundingBox(t = !1) {
    const e = this.getHeight(), i = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !t) {
      const [n, r, s, g, E, a, o, I] = this.fileDirectory.ModelTransformation, B = [
        [0, 0],
        [0, e],
        [i, 0],
        [i, e]
      ].map(([C, c]) => [
        g + n * C + r * c,
        I + E * C + a * c
      ]), l = B.map((C) => C[0]), h = B.map((C) => C[1]);
      return [
        Math.min(...l),
        Math.min(...h),
        Math.max(...l),
        Math.max(...h)
      ];
    } else {
      const n = this.getOrigin(), r = this.getResolution(), s = n[0], g = n[1], E = s + r[0] * i, a = g + r[1] * e;
      return [
        Math.min(s, E),
        Math.min(g, a),
        Math.max(s, E),
        Math.max(g, a)
      ];
    }
  }
}
class sa {
  constructor(t) {
    this._dataView = new DataView(t);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(t, e) {
    const i = this.getUint32(t, e), n = this.getUint32(t + 4, e);
    let r;
    if (e) {
      if (r = i + 2 ** 32 * n, !Number.isSafeInteger(r))
        throw new Error(
          `${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return r;
    }
    if (r = 2 ** 32 * i + n, !Number.isSafeInteger(r))
      throw new Error(
        `${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return r;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(t, e) {
    let i = 0;
    const n = (this._dataView.getUint8(t + (e ? 7 : 0)) & 128) > 0;
    let r = !0;
    for (let s = 0; s < 8; s++) {
      let g = this._dataView.getUint8(t + (e ? s : 7 - s));
      n && (r ? g !== 0 && (g = ~(g - 1) & 255, r = !1) : g = ~g & 255), i += g * 256 ** s;
    }
    return n && (i = -i), i;
  }
  getUint8(t, e) {
    return this._dataView.getUint8(t, e);
  }
  getInt8(t, e) {
    return this._dataView.getInt8(t, e);
  }
  getUint16(t, e) {
    return this._dataView.getUint16(t, e);
  }
  getInt16(t, e) {
    return this._dataView.getInt16(t, e);
  }
  getUint32(t, e) {
    return this._dataView.getUint32(t, e);
  }
  getInt32(t, e) {
    return this._dataView.getInt32(t, e);
  }
  getFloat16(t, e) {
    return Ir(this._dataView, t, e);
  }
  getFloat32(t, e) {
    return this._dataView.getFloat32(t, e);
  }
  getFloat64(t, e) {
    return this._dataView.getFloat64(t, e);
  }
}
class Ia {
  constructor(t, e, i, n) {
    this._dataView = new DataView(t), this._sliceOffset = e, this._littleEndian = i, this._bigTiff = n;
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
  covers(t, e) {
    return this.sliceOffset <= t && this.sliceTop >= t + e;
  }
  readUint8(t) {
    return this._dataView.getUint8(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(t) {
    return this._dataView.getInt8(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(t) {
    return this._dataView.getUint16(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(t) {
    return this._dataView.getInt16(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(t) {
    return this._dataView.getUint32(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(t) {
    return this._dataView.getInt32(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(t) {
    return this._dataView.getFloat32(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(t) {
    return this._dataView.getFloat64(
      t - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(t) {
    const e = this.readUint32(t), i = this.readUint32(t + 4);
    let n;
    if (this._littleEndian) {
      if (n = e + 2 ** 32 * i, !Number.isSafeInteger(n))
        throw new Error(
          `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return n;
    }
    if (n = 2 ** 32 * e + i, !Number.isSafeInteger(n))
      throw new Error(
        `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return n;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(t) {
    let e = 0;
    const i = (this._dataView.getUint8(t + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let n = !0;
    for (let r = 0; r < 8; r++) {
      let s = this._dataView.getUint8(
        t + (this._littleEndian ? r : 7 - r)
      );
      i && (n ? s !== 0 && (s = ~(s - 1) & 255, n = !1) : s = ~s & 255), e += s * 256 ** r;
    }
    return i && (e = -e), e;
  }
  readOffset(t) {
    return this._bigTiff ? this.readUint64(t) : this.readUint32(t);
  }
}
const Ba = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class la {
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
  constructor(t = Ba, e) {
    this.workers = null, this._awaitingDecoder = null, this.size = t, this.messageId = 0, t && (this._awaitingDecoder = e ? Promise.resolve(e) : new Promise((i) => {
      Promise.resolve().then(() => Vs).then((n) => {
        i(n.create);
      });
    }), this._awaitingDecoder.then((i) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let n = 0; n < t; n++)
        this.workers.push({ worker: i(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(t, e) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? hr(t).then((i) => i.decode(t, e)) : new Promise((i) => {
      const n = this.workers.find((g) => g.idle) || this.workers[Math.floor(Math.random() * this.size)];
      n.idle = !1;
      const r = this.messageId++, s = (g) => {
        g.data.id === r && (n.idle = !0, i(g.data.decoded), n.worker.removeEventListener("message", s));
      };
      n.worker.addEventListener("message", s), n.worker.postMessage({ fileDirectory: t, buffer: e, id: r }, [e]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((t) => {
      t.worker.terminate();
    }), this.workers = null);
  }
}
const ni = `\r
\r
`;
function ur(A) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(A);
  const t = {};
  for (const [e, i] of A)
    t[e.toLowerCase()] = i;
  return t;
}
function fa(A) {
  const t = A.split(`\r
`).map((e) => {
    const i = e.split(":").map((n) => n.trim());
    return i[0] = i[0].toLowerCase(), i;
  });
  return ur(t);
}
function Ca(A) {
  const [t, ...e] = A.split(";").map((n) => n.trim()), i = e.map((n) => n.split("="));
  return { type: t, params: ur(i) };
}
function ut(A) {
  let t, e, i;
  return A && ([, t, e, i] = A.match(/bytes (\d+)-(\d+)\/(\d+)/), t = parseInt(t, 10), e = parseInt(e, 10), i = parseInt(i, 10)), { start: t, end: e, total: i };
}
function Ea(A, t) {
  let e = null;
  const i = new TextDecoder("ascii"), n = [], r = `--${t}`, s = `${r}--`;
  for (let g = 0; g < 10; ++g)
    i.decode(
      new Uint8Array(A, g, r.length)
    ) === r && (e = g);
  if (e === null)
    throw new Error("Could not find initial boundary");
  for (; e < A.byteLength; ) {
    const g = i.decode(
      new Uint8Array(
        A,
        e,
        Math.min(r.length + 1024, A.byteLength - e)
      )
    );
    if (g.length === 0 || g.startsWith(s))
      break;
    if (!g.startsWith(r))
      throw new Error("Part does not start with boundary");
    const E = g.substr(r.length + 2);
    if (E.length === 0)
      break;
    const a = E.indexOf(ni), o = fa(E.substr(0, a)), { start: I, end: f, total: B } = ut(o["content-range"]), l = e + r.length + a + ni.length, h = parseInt(f, 10) + 1 - parseInt(I, 10);
    n.push({
      headers: o,
      data: A.slice(l, l + h),
      offset: I,
      length: h,
      fileSize: B
    }), e = l + h + 4;
  }
  return n;
}
class Ot {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(t, e = void 0) {
    return Promise.all(
      t.map((i) => this.fetchSlice(i, e))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(t) {
    throw new Error(`fetching of slice ${t} not possible, not implemented`);
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
class ca extends Map {
  constructor(t = {}) {
    if (super(), !(t.maxSize && t.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof t.maxAge == "number" && t.maxAge === 0)
      throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = t.maxSize, this.maxAge = t.maxAge || Number.POSITIVE_INFINITY, this.onEviction = t.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(t) {
    if (typeof this.onEviction == "function")
      for (const [e, i] of t)
        this.onEviction(e, i.value);
  }
  _deleteIfExpired(t, e) {
    return typeof e.expiry == "number" && e.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(t, e.value), this.delete(t)) : !1;
  }
  _getOrDeleteIfExpired(t, e) {
    if (this._deleteIfExpired(t, e) === !1)
      return e.value;
  }
  _getItemValue(t, e) {
    return e.expiry ? this._getOrDeleteIfExpired(t, e) : e.value;
  }
  _peek(t, e) {
    const i = e.get(t);
    return this._getItemValue(t, i);
  }
  _set(t, e) {
    this.cache.set(t, e), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(t, e) {
    this.oldCache.delete(t), this._set(t, e);
  }
  *_entriesAscending() {
    for (const t of this.oldCache) {
      const [e, i] = t;
      this.cache.has(e) || this._deleteIfExpired(e, i) === !1 && (yield t);
    }
    for (const t of this.cache) {
      const [e, i] = t;
      this._deleteIfExpired(e, i) === !1 && (yield t);
    }
  }
  get(t) {
    if (this.cache.has(t)) {
      const e = this.cache.get(t);
      return this._getItemValue(t, e);
    }
    if (this.oldCache.has(t)) {
      const e = this.oldCache.get(t);
      if (this._deleteIfExpired(t, e) === !1)
        return this._moveToRecent(t, e), e.value;
    }
  }
  set(t, e, { maxAge: i = this.maxAge } = {}) {
    const n = typeof i == "number" && i !== Number.POSITIVE_INFINITY ? Date.now() + i : void 0;
    return this.cache.has(t) ? this.cache.set(t, {
      value: e,
      expiry: n
    }) : this._set(t, { value: e, expiry: n }), this;
  }
  has(t) {
    return this.cache.has(t) ? !this._deleteIfExpired(t, this.cache.get(t)) : this.oldCache.has(t) ? !this._deleteIfExpired(t, this.oldCache.get(t)) : !1;
  }
  peek(t) {
    if (this.cache.has(t))
      return this._peek(t, this.cache);
    if (this.oldCache.has(t))
      return this._peek(t, this.oldCache);
  }
  delete(t) {
    const e = this.cache.delete(t);
    return e && this._size--, this.oldCache.delete(t) || e;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0;
  }
  resize(t) {
    if (!(t && t > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    const e = [...this._entriesAscending()], i = e.length - t;
    i < 0 ? (this.cache = new Map(e), this.oldCache = /* @__PURE__ */ new Map(), this._size = e.length) : (i > 0 && this._emitEvictions(e.slice(0, i)), this.oldCache = new Map(e.slice(i)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = t;
  }
  *keys() {
    for (const [t] of this)
      yield t;
  }
  *values() {
    for (const [, t] of this)
      yield t;
  }
  *[Symbol.iterator]() {
    for (const t of this.cache) {
      const [e, i] = t;
      this._deleteIfExpired(e, i) === !1 && (yield [e, i.value]);
    }
    for (const t of this.oldCache) {
      const [e, i] = t;
      this.cache.has(e) || this._deleteIfExpired(e, i) === !1 && (yield [e, i.value]);
    }
  }
  *entriesDescending() {
    let t = [...this.cache];
    for (let e = t.length - 1; e >= 0; --e) {
      const i = t[e], [n, r] = i;
      this._deleteIfExpired(n, r) === !1 && (yield [n, r.value]);
    }
    t = [...this.oldCache];
    for (let e = t.length - 1; e >= 0; --e) {
      const i = t[e], [n, r] = i;
      this.cache.has(n) || this._deleteIfExpired(n, r) === !1 && (yield [n, r.value]);
    }
  }
  *entriesAscending() {
    for (const [t, e] of this._entriesAscending())
      yield [t, e.value];
  }
  get size() {
    if (!this._size)
      return this.oldCache.size;
    let t = 0;
    for (const e of this.oldCache.keys())
      this.cache.has(e) || t++;
    return Math.min(this._size + t, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(t, e = this) {
    for (const [i, n] of this.entriesAscending())
      t.call(e, n, i, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
async function Qa(A) {
  return new Promise((t) => setTimeout(t, A));
}
function ha(A, t) {
  const e = Array.isArray(A) ? A : Array.from(A), i = Array.isArray(t) ? t : Array.from(t);
  return e.map((n, r) => [n, i[r]]);
}
class zA extends Error {
  constructor(t) {
    super(t), Error.captureStackTrace && Error.captureStackTrace(this, zA), this.name = "AbortError";
  }
}
class ua extends Error {
  constructor(t, e) {
    super(e), this.errors = t, this.message = e, this.name = "AggregateError";
  }
}
const da = ua;
class wa {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(t, e, i = null) {
    this.offset = t, this.length = e, this.data = i;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class ai {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(t, e, i) {
    this.offset = t, this.length = e, this.blockIds = i;
  }
}
class ya extends Ot {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(t, { blockSize: e = 65536, cacheSize: i = 100 } = {}) {
    super(), this.source = t, this.blockSize = e, this.blockCache = new ca({
      maxSize: i,
      onEviction: (n, r) => {
        this.evictedBlocks.set(n, r);
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
  async fetch(t, e) {
    const i = [], n = [], r = [];
    this.evictedBlocks.clear();
    for (const { offset: f, length: B } of t) {
      let l = f + B;
      const { fileSize: h } = this;
      h !== null && (l = Math.min(l, h));
      const C = Math.floor(f / this.blockSize) * this.blockSize;
      for (let c = C; c < l; c += this.blockSize) {
        const u = Math.floor(c / this.blockSize);
        !this.blockCache.has(u) && !this.blockRequests.has(u) && (this.blockIdsToFetch.add(u), n.push(u)), this.blockRequests.has(u) && i.push(this.blockRequests.get(u)), r.push(u);
      }
    }
    await Qa(), this.fetchBlocks(e);
    const s = [];
    for (const f of n)
      this.blockRequests.has(f) && s.push(this.blockRequests.get(f));
    await Promise.allSettled(i), await Promise.allSettled(s);
    const g = [], E = r.filter((f) => this.abortedBlockIds.has(f) || !this.blockCache.has(f));
    if (E.forEach((f) => this.blockIdsToFetch.add(f)), E.length > 0 && e && !e.aborted) {
      this.fetchBlocks(null);
      for (const f of E) {
        const B = this.blockRequests.get(f);
        if (!B)
          throw new Error(`Block ${f} is not in the block requests`);
        g.push(B);
      }
      await Promise.allSettled(g);
    }
    if (e && e.aborted)
      throw new zA("Request was aborted");
    const a = r.map((f) => this.blockCache.get(f) || this.evictedBlocks.get(f)), o = a.filter((f) => !f);
    if (o.length)
      throw new da(o, "Request failed");
    const I = new Map(ha(r, a));
    return this.readSliceData(t, I);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(t) {
    if (this.blockIdsToFetch.size > 0) {
      const e = this.groupBlocks(this.blockIdsToFetch), i = this.source.fetch(e, t);
      for (let n = 0; n < e.length; ++n) {
        const r = e[n];
        for (const s of r.blockIds)
          this.blockRequests.set(s, (async () => {
            try {
              const g = (await i)[n], E = s * this.blockSize, a = E - g.offset, o = Math.min(a + this.blockSize, g.data.byteLength), I = g.data.slice(a, o), f = new wa(
                E,
                I.byteLength,
                I,
                s
              );
              this.blockCache.set(s, f), this.abortedBlockIds.delete(s);
            } catch (g) {
              if (g.name === "AbortError")
                g.signal = t, this.blockCache.delete(s), this.abortedBlockIds.add(s);
              else
                throw g;
            } finally {
              this.blockRequests.delete(s);
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
  groupBlocks(t) {
    const e = Array.from(t).sort((s, g) => s - g);
    if (e.length === 0)
      return [];
    let i = [], n = null;
    const r = [];
    for (const s of e)
      n === null || n + 1 === s ? (i.push(s), n = s) : (r.push(new ai(
        i[0] * this.blockSize,
        i.length * this.blockSize,
        i
      )), i = [s], n = s);
    return r.push(new ai(
      i[0] * this.blockSize,
      i.length * this.blockSize,
      i
    )), r;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(t, e) {
    return t.map((i) => {
      let n = i.offset + i.length;
      this.fileSize !== null && (n = Math.min(this.fileSize, n));
      const r = Math.floor(i.offset / this.blockSize), s = Math.floor(n / this.blockSize), g = new ArrayBuffer(i.length), E = new Uint8Array(g);
      for (let a = r; a <= s; ++a) {
        const o = e.get(a), I = o.offset - i.offset, f = o.top - n;
        let B = 0, l = 0, h;
        I < 0 ? B = -I : I > 0 && (l = I), f < 0 ? h = o.length - B : h = n - o.offset - B;
        const C = new Uint8Array(o.data, B, h);
        E.set(C, l);
      }
      return g;
    });
  }
}
class Kt {
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
  getHeader(t) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
}
class Vt {
  constructor(t) {
    this.url = t;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers: t, signal: e } = {}) {
    throw new Error("request is not implemented");
  }
}
class Da extends Kt {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(t) {
    super(), this.response = t;
  }
  get status() {
    return this.response.status;
  }
  getHeader(t) {
    return this.response.headers.get(t);
  }
  async getData() {
    return this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
  }
}
class pa extends Vt {
  constructor(t, e) {
    super(t), this.credentials = e;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: t, signal: e } = {}) {
    const i = await fetch(this.url, {
      headers: t,
      credentials: this.credentials,
      signal: e
    });
    return new Da(i);
  }
}
class ma extends Kt {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(t, e) {
    super(), this.xhr = t, this.data = e;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(t) {
    return this.xhr.getResponseHeader(t);
  }
  async getData() {
    return this.data;
  }
}
class ka extends Vt {
  constructRequest(t, e) {
    return new Promise((i, n) => {
      const r = new XMLHttpRequest();
      r.open("GET", this.url), r.responseType = "arraybuffer";
      for (const [s, g] of Object.entries(t))
        r.setRequestHeader(s, g);
      r.onload = () => {
        const s = r.response;
        i(new ma(r, s));
      }, r.onerror = n, r.onabort = () => n(new zA("Request aborted")), r.send(), e && (e.aborted && r.abort(), e.addEventListener("abort", () => r.abort()));
    });
  }
  async request({ headers: t, signal: e } = {}) {
    return await this.constructRequest(t, e);
  }
}
const $e = {};
class Sa extends Kt {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(t, e) {
    super(), this.response = t, this.dataPromise = e;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(t) {
    return this.response.headers[t];
  }
  async getData() {
    return await this.dataPromise;
  }
}
class Fa extends Vt {
  constructor(t) {
    super(t), this.parsedUrl = $e.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", $e);
  }
  constructRequest(t, e) {
    return new Promise((i, n) => {
      const r = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: t
        },
        (s) => {
          const g = new Promise((E) => {
            const a = [];
            s.on("data", (o) => {
              a.push(o);
            }), s.on("end", () => {
              const o = Buffer.concat(a).buffer;
              E(o);
            }), s.on("error", n);
          });
          i(new Sa(s, g));
        }
      );
      r.on("error", n), e && (e.aborted && r.destroy(new zA("Request aborted")), e.addEventListener("abort", () => r.destroy(new zA("Request aborted"))));
    });
  }
  async request({ headers: t, signal: e } = {}) {
    return await this.constructRequest(t, e);
  }
}
class Pt extends Ot {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(t, e, i, n) {
    super(), this.client = t, this.headers = e, this.maxRanges = i, this.allowFullFile = n, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(t, e) {
    return this.maxRanges >= t.length ? this.fetchSlices(t, e) : (this.maxRanges > 0 && t.length > 1, Promise.all(
      t.map((i) => this.fetchSlice(i, e))
    ));
  }
  async fetchSlices(t, e) {
    const i = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${t.map(({ offset: n, length: r }) => `${n}-${n + r}`).join(",")}`
      },
      signal: e
    });
    if (i.ok)
      if (i.status === 206) {
        const { type: n, params: r } = Ca(i.getHeader("content-type"));
        if (n === "multipart/byteranges") {
          const I = Ea(await i.getData(), r.boundary);
          return this._fileSize = I[0].fileSize || null, I;
        }
        const s = await i.getData(), { start: g, end: E, total: a } = ut(i.getHeader("content-range"));
        this._fileSize = a || null;
        const o = [{
          data: s,
          offset: g,
          length: E - g
        }];
        if (t.length > 1) {
          const I = await Promise.all(t.slice(1).map((f) => this.fetchSlice(f, e)));
          return o.concat(I);
        }
        return o;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const n = await i.getData();
        return this._fileSize = n.byteLength, [{
          data: n,
          offset: 0,
          length: n.byteLength
        }];
      }
    else throw new Error("Error fetching data.");
  }
  async fetchSlice(t, e) {
    const { offset: i, length: n } = t, r = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${i}-${i + n}`
      },
      signal: e
    });
    if (r.ok)
      if (r.status === 206) {
        const s = await r.getData(), { total: g } = ut(r.getHeader("content-range"));
        return this._fileSize = g || null, {
          data: s,
          offset: i,
          length: n
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const s = await r.getData();
        return this._fileSize = s.byteLength, {
          data: s,
          offset: 0,
          length: s.byteLength
        };
      }
    else throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function zt(A, { blockSize: t, cacheSize: e }) {
  return t === null ? A : new ya(A, { blockSize: t, cacheSize: e });
}
function xa(A, { headers: t = {}, credentials: e, maxRanges: i = 0, allowFullFile: n = !1, ...r } = {}) {
  const s = new pa(A, e), g = new Pt(s, t, i, n);
  return zt(g, r);
}
function Ga(A, { headers: t = {}, maxRanges: e = 0, allowFullFile: i = !1, ...n } = {}) {
  const r = new ka(A), s = new Pt(r, t, e, i);
  return zt(s, n);
}
function ba(A, { headers: t = {}, maxRanges: e = 0, allowFullFile: i = !1, ...n } = {}) {
  const r = new Fa(A), s = new Pt(r, t, e, i);
  return zt(s, n);
}
function _a(A, { forceXHR: t = !1, ...e } = {}) {
  return typeof fetch == "function" && !t ? xa(A, e) : typeof XMLHttpRequest < "u" ? Ga(A, e) : ba(A, e);
}
class va extends Ot {
  constructor(t) {
    super(), this.file = t;
  }
  async fetchSlice(t, e) {
    return new Promise((i, n) => {
      const r = this.file.slice(t.offset, t.offset + t.length), s = new FileReader();
      s.onload = (g) => i(g.target.result), s.onerror = n, s.onabort = n, s.readAsArrayBuffer(r), e && e.addEventListener("abort", () => s.abort());
    });
  }
}
function Ra(A) {
  return new va(A);
}
class Ua {
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
let La = new Ua();
function Ma(...A) {
  return La.debug(...A);
}
function Na(A, t) {
  let e = A.length - t, i = 0;
  do {
    for (let n = t; n > 0; n--)
      A[i + t] += A[i], i++;
    e -= t;
  } while (e > 0);
}
function qa(A, t, e) {
  let i = 0, n = A.length;
  const r = n / e;
  for (; n > t; ) {
    for (let g = t; g > 0; --g)
      A[i + t] += A[i], ++i;
    n -= t;
  }
  const s = A.slice();
  for (let g = 0; g < r; ++g)
    for (let E = 0; E < e; ++E)
      A[e * g + E] = s[(e - E - 1) * r + g];
}
function Ta(A, t, e, i, n, r) {
  if (!t || t === 1)
    return A;
  for (let E = 0; E < n.length; ++E) {
    if (n[E] % 8 !== 0)
      throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
    if (n[E] !== n[0])
      throw new Error("When decoding with predictor, all samples must have the same size.");
  }
  const s = n[0] / 8, g = r === 2 ? 1 : n.length;
  for (let E = 0; E < i && !(E * g * e * s >= A.byteLength); ++E) {
    let a;
    if (t === 2) {
      switch (n[0]) {
        case 8:
          a = new Uint8Array(
            A,
            E * g * e * s,
            g * e * s
          );
          break;
        case 16:
          a = new Uint16Array(
            A,
            E * g * e * s,
            g * e * s / 2
          );
          break;
        case 32:
          a = new Uint32Array(
            A,
            E * g * e * s,
            g * e * s / 4
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${n[0]} bits per sample.`);
      }
      Na(a, g);
    } else t === 3 && (a = new Uint8Array(
      A,
      E * g * e * s,
      g * e * s
    ), qa(a, g, s));
  }
  return A;
}
class qA {
  async decode(t, e) {
    const i = await this.decodeBlock(e), n = t.Predictor || 1;
    if (n !== 1) {
      const r = !t.StripOffsets, s = r ? t.TileWidth : t.ImageWidth, g = r ? t.TileLength : t.RowsPerStrip || t.ImageLength;
      return Ta(
        i,
        n,
        s,
        g,
        t.BitsPerSample,
        t.PlanarConfiguration
      );
    }
    return i;
  }
}
const oi = new Uint8Array([
  0,
  0,
  2,
  28,
  97,
  112,
  112,
  108,
  2,
  32,
  0,
  0,
  109,
  110,
  116,
  114,
  82,
  71,
  66,
  32,
  88,
  89,
  90,
  32,
  7,
  220,
  0,
  1,
  0,
  25,
  0,
  3,
  0,
  41,
  0,
  57,
  97,
  99,
  115,
  112,
  65,
  80,
  80,
  76,
  0,
  0,
  0,
  0,
  97,
  112,
  112,
  108,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  246,
  214,
  0,
  1,
  0,
  0,
  0,
  0,
  211,
  45
]);
function dt(A) {
  switch (A) {
    case J.BYTE:
    case J.ASCII:
    case J.SBYTE:
    case J.UNDEFINED:
      return 1;
    case J.SHORT:
    case J.SSHORT:
      return 2;
    case J.LONG:
    case J.SLONG:
    case J.FLOAT:
    case J.IFD:
      return 4;
    case J.RATIONAL:
    case J.SRATIONAL:
    case J.DOUBLE:
    case J.LONG8:
    case J.SLONG8:
    case J.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${A}`);
  }
}
function Ja(A) {
  const t = A.GeoKeyDirectory;
  if (!t)
    return null;
  const e = {};
  for (let i = 4; i <= t[3] * 4; i += 4) {
    const n = Yn[t[i]], r = t[i + 1] ? KA[t[i + 1]] : null, s = t[i + 2], g = t[i + 3];
    let E = null;
    if (!r)
      E = g;
    else {
      if (E = A[r], typeof E > "u" || E === null)
        throw new Error(`Could not get value of geoKey '${n}'.`);
      typeof E == "string" ? E = E.substring(g, g + s - 1) : E.subarray && (E = E.subarray(g, g + s), s === 1 && (E = E[0]));
    }
    e[n] = E;
  }
  return e;
}
function JA(A, t, e, i) {
  let n = null, r = null;
  const s = dt(t);
  switch (t) {
    case J.BYTE:
    case J.ASCII:
    case J.UNDEFINED:
      n = new Uint8Array(e), r = A.readUint8;
      break;
    case J.SBYTE:
      n = new Int8Array(e), r = A.readInt8;
      break;
    case J.SHORT:
      n = new Uint16Array(e), r = A.readUint16;
      break;
    case J.SSHORT:
      n = new Int16Array(e), r = A.readInt16;
      break;
    case J.LONG:
    case J.IFD:
      n = new Uint32Array(e), r = A.readUint32;
      break;
    case J.SLONG:
      n = new Int32Array(e), r = A.readInt32;
      break;
    case J.LONG8:
    case J.IFD8:
      n = new Array(e), r = A.readUint64;
      break;
    case J.SLONG8:
      n = new Array(e), r = A.readInt64;
      break;
    case J.RATIONAL:
      n = new Uint32Array(e * 2), r = A.readUint32;
      break;
    case J.SRATIONAL:
      n = new Int32Array(e * 2), r = A.readInt32;
      break;
    case J.FLOAT:
      n = new Float32Array(e), r = A.readFloat32;
      break;
    case J.DOUBLE:
      n = new Float64Array(e), r = A.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${t}`);
  }
  if (t === J.RATIONAL || t === J.SRATIONAL)
    for (let g = 0; g < e; g += 2)
      n[g] = r.call(
        A,
        i + g * s
      ), n[g + 1] = r.call(
        A,
        i + (g * s + 4)
      );
  else
    for (let g = 0; g < e; ++g)
      n[g] = r.call(
        A,
        i + g * s
      );
  return t === J.ASCII ? new TextDecoder("utf-8").decode(n) : n;
}
class Ha {
  /**
   * Create an ImageFileDirectory.
   * @param {object} fileDirectory the file directory, mapping tag names to values
   * @param {Map} rawFileDirectory the raw file directory, mapping tag IDs to values
   * @param {object} geoKeyDirectory the geo key directory, mapping geo key names to values
   * @param {number} nextIFDByteOffset the byte offset to the next IFD
   */
  constructor(t, e, i, n) {
    this.fileDirectory = t, this.rawFileDirectory = e, this.geoKeyDirectory = i, this.nextIFDByteOffset = n;
  }
}
class ke extends Error {
  constructor(t) {
    super(`No image at index ${t}`), this.index = t;
  }
}
class Ya {
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
  async readRasters(t = {}) {
    const { window: e, width: i, height: n } = t;
    let { resX: r, resY: s, bbox: g } = t;
    const E = await this.getImage();
    let a = E;
    const o = await this.getImageCount(), I = E.getBoundingBox();
    if (e && g)
      throw new Error('Both "bbox" and "window" passed.');
    if (i || n) {
      if (e) {
        const [l, h] = E.getOrigin(), [C, c] = E.getResolution();
        g = [
          l + e[0] * C,
          h + e[1] * c,
          l + e[2] * C,
          h + e[3] * c
        ];
      }
      const B = g || I;
      if (i) {
        if (r)
          throw new Error("Both width and resX passed");
        r = (B[2] - B[0]) / i;
      }
      if (n) {
        if (s)
          throw new Error("Both width and resY passed");
        s = (B[3] - B[1]) / n;
      }
    }
    if (r || s) {
      const B = [];
      for (let l = 0; l < o; ++l) {
        const h = await this.getImage(l), { SubfileType: C, NewSubfileType: c } = h.fileDirectory;
        (l === 0 || C === 2 || c & 1) && B.push(h);
      }
      B.sort((l, h) => l.getWidth() - h.getWidth());
      for (let l = 0; l < B.length; ++l) {
        const h = B[l], C = (I[2] - I[0]) / h.getWidth(), c = (I[3] - I[1]) / h.getHeight();
        if (a = h, r && r > C || s && s > c)
          break;
      }
    }
    let f = e;
    if (g) {
      const [B, l] = E.getOrigin(), [h, C] = a.getResolution(E);
      f = [
        Math.round((g[0] - B) / h),
        Math.round((g[1] - l) / C),
        Math.round((g[2] - B) / h),
        Math.round((g[3] - l) / C)
      ], f = [
        Math.min(f[0], f[2]),
        Math.min(f[1], f[3]),
        Math.max(f[0], f[2]),
        Math.max(f[1], f[3])
      ];
    }
    return a.readRasters({ ...t, window: f });
  }
}
class Oe extends Ya {
  /**
   * @constructor
   * @param {(source.ArrayBufferSource|source.Remote|source.Custom|source.DataView)} source The data source from where to read the TIFF file.
   * @param {boolean} littleEndian Whether the TIFF file is in little endian format.
   * @param {boolean} bigTiff Whether the TIFF file is a BigTIFF file.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the file to the first IFD.
   * @param {object} [options] Further options.
   * @param {boolean} [options.cache=true] Enable caching for higher performance.
   */
  constructor(t, e, i, n, r = {}) {
    super(), this.source = t, this.littleEndian = e, this.bigTiff = i, this.firstIFDOffset = n, this.cache = r.cache !== !1, this.ifdRequests = [], this.ghostValues = null, this.iccProfileCache = /* @__PURE__ */ new Map(), this.iccProfileCache.set("generic", oi);
  }
  async getSlice(t, e) {
    const i = this.bigTiff ? 4048 : 1024;
    return new Ia(
      (await this.source.fetch([{
        offset: t,
        length: typeof e < "u" ? e : i
      }]))[0],
      t,
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
  async parseFileDirectoryAt(t) {
    const e = this.bigTiff ? 20 : 12, i = this.bigTiff ? 8 : 2;
    let n = await this.getSlice(t);
    const r = this.bigTiff ? n.readUint64(t) : n.readUint16(t), s = r * e + (this.bigTiff ? 16 : 6);
    n.covers(t, s) || (n = await this.getSlice(t, s));
    const g = {}, E = /* @__PURE__ */ new Map();
    let a = t + (this.bigTiff ? 8 : 2);
    for (let f = 0; f < r; a += e, ++f) {
      const B = n.readUint16(a), l = n.readUint16(a + 2), h = this.bigTiff ? n.readUint64(a + 4) : n.readUint32(a + 4);
      let C, c;
      const u = dt(l), D = a + (this.bigTiff ? 12 : 8);
      if (B === 34675) {
        Ma("Using generic ICC profile instead of embedded one"), c = oi;
        const Q = KA[B];
        Q && (g[Q] = c), E.set(B, c);
        continue;
      }
      if (u * h <= (this.bigTiff ? 8 : 4))
        C = JA(n, l, h, D);
      else {
        const Q = n.readOffset(D), w = dt(l) * h;
        if (n.covers(Q, w))
          C = JA(n, l, h, Q);
        else {
          const y = await this.getSlice(Q, w);
          C = JA(y, l, h, Q);
        }
      }
      h === 1 && Tn.indexOf(B) === -1 && !(l === J.RATIONAL || l === J.SRATIONAL) ? c = C[0] : c = C;
      const p = KA[B];
      p && (g[p] = c), E.set(B, c);
    }
    const o = Ja(g), I = n.readOffset(
      t + i + e * r
    );
    return new Ha(
      g,
      E,
      o,
      I
    );
  }
  async requestIFD(t) {
    if (this.ifdRequests[t])
      return this.ifdRequests[t];
    if (t === 0)
      return this.ifdRequests[t] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[t];
    if (!this.ifdRequests[t - 1])
      try {
        this.ifdRequests[t - 1] = this.requestIFD(t - 1);
      } catch (e) {
        throw e instanceof ke ? new ke(t) : e;
      }
    return this.ifdRequests[t] = (async () => {
      const e = await this.ifdRequests[t - 1];
      if (e.nextIFDByteOffset === 0)
        throw new ke(t);
      return this.parseFileDirectoryAt(e.nextIFDByteOffset);
    })(), this.ifdRequests[t];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(t = 0) {
    const e = await this.requestIFD(t);
    return new ga(
      e.fileDirectory,
      e.geoKeyDirectory,
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
    let t = 0, e = !0;
    for (; e; )
      try {
        await this.requestIFD(t), ++t;
      } catch (i) {
        if (i instanceof ke)
          e = !1;
        else
          throw i;
      }
    return t;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const t = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const e = "GDAL_STRUCTURAL_METADATA_SIZE=", i = e.length + 100;
    let n = await this.getSlice(t, i);
    if (e === JA(n, J.ASCII, e.length, t)) {
      const s = JA(n, J.ASCII, i, t).split(`
`)[0], g = Number(s.split("=")[1].split(" ")[0]) + s.length;
      g > i && (n = await this.getSlice(t, g));
      const E = JA(n, J.ASCII, g, t);
      this.ghostValues = {}, E.split(`
`).filter((a) => a.length > 0).map((a) => a.split("=")).forEach(([a, o]) => {
        this.ghostValues[a] = o;
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
  static async fromSource(t, e, i) {
    const n = (await t.fetch([{ offset: 0, length: 1024 }], i))[0], r = new sa(n), s = r.getUint16(0, 0);
    let g;
    if (s === 18761)
      g = !0;
    else if (s === 19789)
      g = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const E = r.getUint16(2, g);
    let a;
    if (E === 42)
      a = !1;
    else if (E === 43) {
      if (a = !0, r.getUint16(4, g) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const o = a ? r.getUint64(8, g) : r.getUint32(4, g);
    return new Oe(t, g, a, o, e);
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
async function gi(A, t = {}, e) {
  return Oe.fromSource(_a(A, t), t, e);
}
async function si(A, t = {}, e) {
  return Oe.fromSource(Ra(A), t, e);
}
class At {
  constructor() {
    this.promise = new Promise((t, e) => {
      this.reject = e, this.resolve = t;
    });
  }
}
const Oa = (A) => {
  var e, i, n;
  const t = /* @__PURE__ */ new Map();
  for (const r of A) {
    const s = new DOMParser().parseFromString(
      (e = r.fileDirectory) == null ? void 0 : e.ImageDescription,
      "text/xml"
    ), g = (i = s == null ? void 0 : s.querySelector("Name")) == null ? void 0 : i.textContent, E = (n = s == null ? void 0 : s.querySelector("Color")) == null ? void 0 : n.textContent;
    if (!g)
      continue;
    const a = E ? E.split(",").map((o) => parseInt(o)) : [255, 255, 255];
    t.has(g) || t.set(g, {
      name: g,
      color: a,
      images: []
    }), t.get(g).images.push(r);
  }
  return t;
};
class vA {
  static RGBAfromYCbCr(t) {
    const e = new Uint8ClampedArray(t.length * 4 / 3);
    let i, n;
    for (i = 0, n = 0; i < t.length; i += 3, n += 4) {
      const r = t[i], s = t[i + 1], g = t[i + 2];
      e[n] = r + 1.402 * (g - 128), e[n + 1] = r - 0.34414 * (s - 128) - 0.71414 * (g - 128), e[n + 2] = r + 1.772 * (s - 128), e[n + 3] = 255;
    }
    return e;
  }
  static RGBAfromRGB(t) {
    const e = new Uint8ClampedArray(t.length * 4 / 3);
    let i, n;
    for (i = 0, n = 0; i < t.length; i += 3, n += 4)
      e[n] = t[i], e[n + 1] = t[i + 1], e[n + 2] = t[i + 2], e[n + 3] = 255;
    return e;
  }
  static RGBAfromWhiteIsZero(t, e) {
    const i = new Uint8ClampedArray(t.length * 4);
    let n;
    for (let r = 0, s = 0; r < t.length; ++r, s += 4)
      n = 256 - t[r] / e * 256, i[s] = n, i[s + 1] = n, i[s + 2] = n, i[s + 3] = 255;
    return i;
  }
  static RGBAfromBlackIsZero(t, e) {
    const i = new Uint8ClampedArray(t.length * 4);
    let n;
    for (let r = 0, s = 0; r < t.length; ++r, s += 4)
      n = t[r] / e * 256, i[s] = n, i[s + 1] = n, i[s + 2] = n, i[s + 3] = 255;
    return i;
  }
  static RGBAfromPalette(t, e) {
    const i = new Uint8ClampedArray(t.length * 4), n = e.length / 3, r = e.length / 3 * 2;
    for (let s = 0, g = 0; s < t.length; ++s, g += 4) {
      const E = t[s];
      i[g] = e[E] / 65536 * 256, i[g + 1] = e[E + n] / 65536 * 256, i[g + 2] = e[E + r] / 65536 * 256, i[g + 3] = 255;
    }
    return i;
  }
  static RGBAfromCMYK(t) {
    const e = new Uint8ClampedArray(t.length);
    for (let i = 0, n = 0; i < t.length; i += 4, n += 4) {
      const r = t[i], s = t[i + 1], g = t[i + 2], E = t[i + 3];
      e[n] = 255 * ((255 - r) / 256) * ((255 - E) / 256), e[n + 1] = 255 * ((255 - s) / 256) * ((255 - E) / 256), e[n + 2] = 255 * ((255 - g) / 256) * ((255 - E) / 256), e[n + 3] = 255;
    }
    return e;
  }
  static RGBAfromCIELab(t) {
    const r = new Uint8ClampedArray(t.length * 4 / 3);
    for (let s = 0, g = 0; s < t.length; s += 3, g += 4) {
      const E = t[s + 0], a = t[s + 1] << 24 >> 24, o = t[s + 2] << 24 >> 24;
      let I = (E + 16) / 116, f = a / 500 + I, B = I - o / 200, l, h, C;
      f = 0.95047 * (f * f * f > 8856e-6 ? f * f * f : (f - 16 / 116) / 7.787), I = 1 * (I * I * I > 8856e-6 ? I * I * I : (I - 16 / 116) / 7.787), B = 1.08883 * (B * B * B > 8856e-6 ? B * B * B : (B - 16 / 116) / 7.787), l = f * 3.2406 + I * -1.5372 + B * -0.4986, h = f * -0.9689 + I * 1.8758 + B * 0.0415, C = f * 0.0557 + I * -0.204 + B * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : 12.92 * l, h = h > 31308e-7 ? 1.055 * h ** (1 / 2.4) - 0.055 : 12.92 * h, C = C > 31308e-7 ? 1.055 * C ** (1 / 2.4) - 0.055 : 12.92 * C, r[g] = Math.max(0, Math.min(1, l)) * 255, r[g + 1] = Math.max(0, Math.min(1, h)) * 255, r[g + 2] = Math.max(0, Math.min(1, C)) * 255, r[g + 3] = 255;
    }
    return r;
  }
}
function Ka(A) {
  if (!A.version || A.version.major < 2 || A.version.major == 2 && A.version.minor < 3) {
    console.error("This version of OpenSeadragon is too old to support this monkey patch");
    return;
  }
  if (A.ImageJob)
    return;
  function t(i) {
    A.extend(
      !0,
      this,
      {
        timeout: A.DEFAULT_SETTINGS.timeout,
        jobId: null
      },
      i
    ), this.image = null;
  }
  t.prototype = {
    errorMsg: null,
    /**
     * Starts the image job.
     * @method
     */
    start: function() {
      var i = this, n = this.abort;
      this.image = new Image(), this.image.onload = function() {
        i.finish(!0);
      }, this.image.onabort = this.image.onerror = function() {
        i.errorMsg = "Image load aborted", i.finish(!1);
      }, this.jobId = window.setTimeout(function() {
        i.errorMsg = "Image load exceeded timeout (" + i.timeout + " ms)", i.finish(!1);
      }, this.timeout), this.loadWithAjax ? (this.request = A.makeAjaxRequest({
        url: this.src,
        withCredentials: this.ajaxWithCredentials,
        headers: this.ajaxHeaders,
        responseType: "arraybuffer",
        postData: this.postData,
        success: function(r) {
          var s;
          try {
            s = new window.Blob([r.response]);
          } catch (o) {
            var g = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (o.name === "TypeError" && g) {
              var E = new g();
              E.append(r.response), s = E.getBlob();
            }
          }
          s.size === 0 && (i.errorMsg = "Empty image response.", i.finish(!1));
          var a = (window.URL || window.webkitURL).createObjectURL(s);
          i.image.src = a;
        },
        error: function(r) {
          i.errorMsg = "Image load aborted - XHR error: Ajax returned " + r.status, i.finish(!1);
        }
      }), this.abort = function() {
        i.request.abort(), typeof n == "function" && n();
      }) : (this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy), this.src.fetch ? this.src.fetch().then((r) => this.image.src = r) : this.image.src = this.src);
    },
    finish: function(i) {
      this.image.onload = this.image.onerror = this.image.onabort = null, i || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this);
    }
  };
  function e(i, n, r) {
    var s;
    i.jobsInProgress--, (!i.jobLimit || i.jobsInProgress < i.jobLimit) && i.jobQueue.length > 0 && (s = i.jobQueue.shift(), s.start(), i.jobsInProgress++), r(n.image, n.errorMsg, n.request);
  }
  A.ImageLoader.prototype.addJob = function(i) {
    var n = this, r = function(E) {
      e(n, E, i.callback);
    }, s = {
      src: i.src,
      loadWithAjax: i.loadWithAjax,
      ajaxHeaders: i.loadWithAjax ? i.ajaxHeaders : null,
      crossOriginPolicy: i.crossOriginPolicy,
      ajaxWithCredentials: i.ajaxWithCredentials,
      postData: i.postData,
      callback: r,
      abort: i.abort,
      timeout: this.timeout
    }, g = new t(s);
    !this.jobLimit || this.jobsInProgress < this.jobLimit ? (g.start(), this.jobsInProgress++) : this.jobQueue.push(g);
  }, A.Tile.prototype._hasTransparencyChannel = function() {
    return !1;
  };
}
const Va = (A) => {
  const e = class e extends A.TileSource {
    constructor(r, s = { logLatency: !1 }) {
      super();
      /**
       * Return the tileWidth for a given level.
       * @function
       * @param {Number} level
       */
      eA(this, "getTileWidth", (r) => {
        if (this.levels.length > r)
          return this.levels[r].tileWidth;
      });
      /**
       * Return the tileHeight for a given level.
       * @function
       * @param {Number} level
       */
      eA(this, "getTileHeight", (r) => {
        if (this.levels.length > r)
          return this.levels[r].tileHeight;
      });
      /**
       * @function
       * @param {Number} level
       */
      eA(this, "getLevelScale", (r) => {
        let s = NaN;
        return this.levels.length > 0 && r >= this.minLevel && r <= this.maxLevel && (s = this.levels[r].width / this.levels[this.maxLevel].width), s;
      });
      /**
       * Handle maintaining unique caches per channel in multi-channel images
       */
      eA(this, "getTileHashKey", (r, s, g) => {
        var E;
        return `${((E = this == null ? void 0 : this.channel) == null ? void 0 : E.name) ?? ""}_${r}_${s}_${g}`;
      });
      /**
       * Implement function here instead of as custom tile source in client code
       * @function
       * @param {Number} levelnum
       * @param {Number} x
       * @param {Number} y
       */
      eA(this, "getTileUrl", (r, s, g) => {
        let E = this.levels[r], a = new String(`${r}/${s}_${g}`);
        return a.fetch = /* @__PURE__ */ ((o, I, f, B, l) => () => this.regionToDataUrl.call(o, I, f, B, l))(this, E, s, g, a), a;
      });
      eA(this, "downloadTileStart", (r) => {
        r.src.fetch().then((s) => {
          let g = new Image(), E = "" + r.src;
          g.onload = function() {
            r.finish(g);
          }, g.onerror = g.onabort = function() {
            r.finish(null, E, "Request aborted");
          }, g.src = s;
        });
      });
      eA(this, "downloadTileAbort", (r) => {
        r.src.abortController && r.src.abortController.abort();
      });
      eA(this, "setupComplete", () => {
        this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
      });
      eA(this, "setupLevels", () => {
        if (this._ready)
          return;
        let r = this.GeoTIFFImages.sort((I, f) => f.getWidth() - I.getWidth()), s = this._tileSize, g = this._tileSize, E = r[0].getWidth();
        this.width = E;
        let a = r[0].getHeight();
        if (this.height = a, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new A.Point(this.width, this.height), r.reduce(
          (I, f) => (I.width !== -1 && (I.valid = I.valid && f.getWidth() < I.width), I.width = f.getWidth(), I),
          { valid: !0, width: -1 }
        ).valid)
          this.levels = r.map((I) => {
            let f = I.getWidth(), B = I.getHeight();
            return {
              width: f,
              height: B,
              tileWidth: this.options.tileWidth || I.getTileWidth() || s,
              tileHeight: this.options.tileHeight || I.getTileHeight() || g,
              image: I,
              scaleFactor: 1
            };
          }), this.maxLevel = this.levels.length - 1;
        else {
          let I = Math.ceil(
            Math.log2(Math.max(E / s, a / g))
          ), f = [...Array(I).keys()].filter((B) => B % 2 == 0);
          this.levels = f.map((B) => {
            let l = Math.pow(2, B);
            const h = r.filter((c) => {
              const u = Math.pow(2, B - 1);
              return u >= 0 ? c.getWidth() * u < E && c.getWidth() * l >= E : c.getWidth() * l >= E;
            });
            if (h.length === 0)
              return null;
            const C = h[0];
            return {
              width: E / l,
              height: a / l,
              tileWidth: this.options.tileWidth || C.getTileWidth() || s,
              tileHeight: this.options.tileHeight || C.getTileHeight() || g,
              image: C,
              scaleFactor: l * C.getWidth() / E
            };
          }).filter((B) => B !== null), this.maxLevel = this.levels.length - 1;
        }
        this.levels = this.levels.sort((I, f) => I.width - f.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
      });
      eA(this, "regionToDataUrl", (r, s, g, E) => {
        var c, u, D, d, p;
        let a = this.options.logLatency && Date.now(), I = (E.abortController = new AbortController()).signal;
        const f = r.tileWidth, B = r.tileHeight, l = [s * f, g * B, (s + 1) * f, (g + 1) * B].map(
          (Q) => Q * r.scaleFactor
        ), h = r.image;
        if ((u = (c = h.fileDirectory) == null ? void 0 : c.Software) == null ? void 0 : u.startsWith("PerkinElmer-QPI")) {
          const Q = new DOMParser().parseFromString(
            (D = h.fileDirectory) == null ? void 0 : D.ImageDescription,
            "text/xml"
          );
          (d = Q.querySelector("Name")) == null || d.textContent;
          const w = (p = Q.querySelector("Color")) == null ? void 0 : p.textContent, y = w ? w.split(",").map((k) => parseInt(k)) : [255, 255, 255];
          return r.image.readRGB({
            interleave: !0,
            window: l,
            pool: this._pool,
            width: r.tileWidth,
            height: r.tileHeight,
            signal: I
          }).then((k) => {
            let F = document.createElement("canvas");
            F.width = r.tileWidth, F.height = r.tileHeight;
            let m = F.getContext("2d"), b = new Uint8ClampedArray(4 * F.width * F.height), G = new Uint8ClampedArray(k), M, x;
            for (M = 0, x = 0; M < G.length; M += 3, x += 4)
              b[x] = G[M] * y[0] / 255, b[x + 1] = G[M + 1] * y[1] / 255, b[x + 2] = G[M + 2] * y[2] / 255, b[x + 3] = 255;
            const S = m.createImageData(F.width, F.height);
            S.data.set(b), m.putImageData(S, 0, 0);
            let U = F.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)("Tile latency (ms):", Date.now() - a), U;
          });
        } else
          return r.image.getTileOrStrip(s, g, null, this._pool, I).then((Q) => {
            let w = new Uint8ClampedArray(Q.data), y = document.createElement("canvas");
            y.width = r.tileWidth, y.height = r.tileHeight;
            let k = y.getContext("2d"), F = r.image.fileDirectory.PhotometricInterpretation, m;
            if (w.length / (y.width * y.height) % 4 === 0)
              m = w;
            else
              switch (F) {
                case X.WhiteIsZero:
                  m = vA.RGBAfromWhiteIsZero(
                    w,
                    2 ** r.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case X.BlackIsZero:
                  m = vA.RGBAfromBlackIsZero(
                    w,
                    2 ** r.image.fileDirectory.BitsPerSample[0]
                  );
                  break;
                case X.RGB:
                  m = vA.RGBAfromRGB(w);
                  break;
                case X.Palette:
                  m = vA.RGBAfromPalette(w, 2 ** r.image.fileDirectory.colorMap);
                  break;
                case X.CMYK:
                  m = vA.RGBAfromCMYK(w);
                  break;
                case X.YCbCr:
                  m = vA.RGBAfromYCbCr(w);
                  break;
                case X.CIELab:
                  m = vA.RGBAfromCIELab(w);
                  break;
              }
            const b = k.createImageData(y.width, y.height);
            b.data.set(m), k.putImageData(b, 0, 0);
            let G = y.toDataURL("image/jpeg", 0.8);
            return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
              "Tile latency (ms):",
              Date.now() - a
            ), G;
          });
      });
      e._osdReady || e.applyOSDPatch(A);
      let g = this;
      this.input = r, this.options = s, this.channel = (r == null ? void 0 : r.channel) ?? null, this._ready = !1, this._pool = e.sharedPool, this._tileSize = 256, r.GeoTIFF && r.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(r.GeoTIFF),
        GeoTIFFImages: Promise.resolve(r.GeoTIFFImages),
        ready: new At()
      }, this.GeoTIFF = r.GeoTIFF, this.imageCount = r.GeoTIFFImages.length, this.GeoTIFFImages = r.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: r instanceof File ? si(r) : gi(r),
        GeoTIFFImages: new At(),
        ready: new At()
      }, this.promises.GeoTIFF.then((E) => (g.GeoTIFF = E, E.getImageCount())).then((E) => {
        g.imageCount = E;
        let a = [...Array(E).keys()].map((o) => g.GeoTIFF.getImage(o));
        return Promise.all(a);
      }).then((E) => {
        g.GeoTIFFImages = E, g.promises.GeoTIFFImages.resolve(E), this.setupLevels();
      }).catch((E) => {
        throw console.error("Re-throwing error with GeoTIFF:", E), E;
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
  eA(e, "sharedPool", new la()), eA(e, "_osdReady", !1), // Apply ImageJob patch to OpenSeadragon. Can be extended for modular patches.
  eA(e, "applyOSDPatch", (r) => {
    Ka(r), e._osdReady = !0;
  }), eA(e, "getAllTileSources", async (r, s) => {
    const g = r instanceof File ? r.name.split(".").pop() : r.split(".").pop();
    let E = r instanceof File ? si(r) : gi(r);
    return E.then((a) => (E = a, a.getImageCount())).then(
      (a) => Promise.all([...Array(a).keys()].map(async (o) => (await E).getImage(o)))
    ).then((a) => {
      a = a.filter(
        (B) => B.fileDirectory.photometricInterpretation !== X.TransparencyMask
      ), a.sort((B, l) => l.getWidth() - B.getWidth());
      const o = 0.015;
      return a.reduce((B, l) => {
        const h = l.getWidth() / l.getHeight();
        let C = "";
        l.fileDirectory.ImageDescription && (C = l.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
        const c = B.filter(
          (u) => Math.abs(1 - u.aspectRatio / h) < o && !(C != null && C.includes("macro") || C != null && C.includes("label"))
          // Separate out macro thumbnails and labels
        );
        if (c.length === 0) {
          let u = {
            aspectRatio: h,
            images: [l]
          };
          B.push(u);
        } else
          c[0].images.push(l);
        return B;
      }, []).map((B) => B.images).map((B, l) => {
        if (l !== 0)
          return new A.GeoTIFFTileSource(
            {
              GeoTIFF: E,
              GeoTIFFImages: B
            },
            s
          );
        switch (g) {
          case "qptiff":
            const h = Oa(B);
            return Array.from(h.values()).map((C, c) => new A.GeoTIFFTileSource(
              {
                GeoTIFF: E,
                GeoTIFFImages: C.images,
                channel: {
                  name: C.name,
                  color: C.color
                }
              },
              s
            ));
          default:
            return new A.GeoTIFFTileSource(
              {
                GeoTIFF: E,
                GeoTIFFImages: B
              },
              s
            );
        }
      });
    });
  });
  let t = e;
  A.GeoTIFFTileSource = t;
};
(function(A, t) {
  typeof exports > "u" || typeof A.OpenSeadragon < "u" && t(A.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Va);
class Pa extends qA {
  decodeBlock(t) {
    return t;
  }
}
const za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pa
}, Symbol.toStringTag, { value: "Module" })), Ii = 9, et = 256, wt = 257, Za = 12;
function Xa(A, t, e) {
  const i = t % 8, n = Math.floor(t / 8), r = 8 - i, s = t + e - (n + 1) * 8;
  let g = 8 * (n + 2) - (t + e);
  const E = (n + 2) * 8 - t;
  if (g = Math.max(0, g), n >= A.length)
    return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"), wt;
  let a = A[n] & 2 ** (8 - i) - 1;
  a <<= e - r;
  let o = a;
  if (n + 1 < A.length) {
    let I = A[n + 1] >>> g;
    I <<= Math.max(0, e - E), o += I;
  }
  if (s > 8 && n + 2 < A.length) {
    const I = (n + 3) * 8 - (t + e), f = A[n + 2] >>> I;
    o += f;
  }
  return o;
}
function tt(A, t) {
  for (let e = t.length - 1; e >= 0; e--)
    A.push(t[e]);
  return A;
}
function ja(A) {
  const t = new Uint16Array(4093), e = new Uint8Array(4093);
  for (let l = 0; l <= 257; l++)
    t[l] = 4096, e[l] = l;
  let i = 258, n = Ii, r = 0;
  function s() {
    i = 258, n = Ii;
  }
  function g(l) {
    const h = Xa(l, r, n);
    return r += n, h;
  }
  function E(l, h) {
    return e[i] = h, t[i] = l, i++, i - 1;
  }
  function a(l) {
    const h = [];
    for (let C = l; C !== 4096; C = t[C])
      h.push(e[C]);
    return h;
  }
  const o = [];
  s();
  const I = new Uint8Array(A);
  let f = g(I), B;
  for (; f !== wt; ) {
    if (f === et) {
      for (s(), f = g(I); f === et; )
        f = g(I);
      if (f === wt)
        break;
      if (f > et)
        throw new Error(`corrupted code at scanline ${f}`);
      {
        const l = a(f);
        tt(o, l), B = f;
      }
    } else if (f < i) {
      const l = a(f);
      tt(o, l), E(B, l[l.length - 1]), B = f;
    } else {
      const l = a(B);
      if (!l)
        throw new Error(`Bogus entry. Not in dictionary, ${B} / ${i}, position: ${r}`);
      tt(o, l), o.push(l[l.length - 1]), E(B, l[l.length - 1]), B = f;
    }
    i + 1 >= 2 ** n && (n === Za ? B = void 0 : n++), f = g(I);
  }
  return new Uint8Array(o);
}
class Wa extends qA {
  decodeBlock(t) {
    return ja(t).buffer;
  }
}
const $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wa
}, Symbol.toStringTag, { value: "Module" })), oe = new Int32Array([
  0,
  1,
  8,
  16,
  9,
  2,
  3,
  10,
  17,
  24,
  32,
  25,
  18,
  11,
  4,
  5,
  12,
  19,
  26,
  33,
  40,
  48,
  41,
  34,
  27,
  20,
  13,
  6,
  7,
  14,
  21,
  28,
  35,
  42,
  49,
  56,
  57,
  50,
  43,
  36,
  29,
  22,
  15,
  23,
  30,
  37,
  44,
  51,
  58,
  59,
  52,
  45,
  38,
  31,
  39,
  46,
  53,
  60,
  61,
  54,
  47,
  55,
  62,
  63
]), Se = 4017, Fe = 799, xe = 3406, Ge = 2276, be = 1567, _e = 3784, HA = 5793, ve = 2896;
function Bi(A, t) {
  let e = 0;
  const i = [];
  let n = 16;
  for (; n > 0 && !A[n - 1]; )
    --n;
  i.push({ children: [], index: 0 });
  let r = i[0], s;
  for (let g = 0; g < n; g++) {
    for (let E = 0; E < A[g]; E++) {
      for (r = i.pop(), r.children[r.index] = t[e]; r.index > 0; )
        r = i.pop();
      for (r.index++, i.push(r); i.length <= g; )
        i.push(s = { children: [], index: 0 }), r.children[r.index] = s.children, r = s;
      e++;
    }
    g + 1 < n && (i.push(s = { children: [], index: 0 }), r.children[r.index] = s.children, r = s);
  }
  return i[0].children;
}
function Ao(A, t, e, i, n, r, s, g, E) {
  const { mcusPerLine: a, progressive: o } = e, I = t;
  let f = t, B = 0, l = 0;
  function h() {
    if (l > 0)
      return l--, B >> l & 1;
    if (B = A[f++], B === 255) {
      const v = A[f++];
      if (v)
        throw new Error(`unexpected marker: ${(B << 8 | v).toString(16)}`);
    }
    return l = 7, B >>> 7;
  }
  function C(v) {
    let T = v, q;
    for (; (q = h()) !== null; ) {
      if (T = T[q], typeof T == "number")
        return T;
      if (typeof T != "object")
        throw new Error("invalid huffman sequence");
    }
    return null;
  }
  function c(v) {
    let T = v, q = 0;
    for (; T > 0; ) {
      const H = h();
      if (H === null)
        return;
      q = q << 1 | H, --T;
    }
    return q;
  }
  function u(v) {
    const T = c(v);
    return T >= 1 << v - 1 ? T : T + (-1 << v) + 1;
  }
  function D(v, T) {
    const q = C(v.huffmanTableDC), H = q === 0 ? 0 : u(q);
    v.pred += H, T[0] = v.pred;
    let V = 1;
    for (; V < 64; ) {
      const Z = C(v.huffmanTableAC), j = Z & 15, aA = Z >> 4;
      if (j === 0) {
        if (aA < 15)
          break;
        V += 16;
      } else {
        V += aA;
        const rA = oe[V];
        T[rA] = u(j), V++;
      }
    }
  }
  function d(v, T) {
    const q = C(v.huffmanTableDC), H = q === 0 ? 0 : u(q) << E;
    v.pred += H, T[0] = v.pred;
  }
  function p(v, T) {
    T[0] |= h() << E;
  }
  let Q = 0;
  function w(v, T) {
    if (Q > 0) {
      Q--;
      return;
    }
    let q = r;
    const H = s;
    for (; q <= H; ) {
      const V = C(v.huffmanTableAC), Z = V & 15, j = V >> 4;
      if (Z === 0) {
        if (j < 15) {
          Q = c(j) + (1 << j) - 1;
          break;
        }
        q += 16;
      } else {
        q += j;
        const aA = oe[q];
        T[aA] = u(Z) * (1 << E), q++;
      }
    }
  }
  let y = 0, k;
  function F(v, T) {
    let q = r;
    const H = s;
    let V = 0;
    for (; q <= H; ) {
      const Z = oe[q], j = T[Z] < 0 ? -1 : 1;
      switch (y) {
        case 0: {
          const aA = C(v.huffmanTableAC), rA = aA & 15;
          if (V = aA >> 4, rA === 0)
            V < 15 ? (Q = c(V) + (1 << V), y = 4) : (V = 16, y = 1);
          else {
            if (rA !== 1)
              throw new Error("invalid ACn encoding");
            k = u(rA), y = V ? 2 : 3;
          }
          continue;
        }
        case 1:
        case 2:
          T[Z] ? T[Z] += (h() << E) * j : (V--, V === 0 && (y = y === 2 ? 3 : 0));
          break;
        case 3:
          T[Z] ? T[Z] += (h() << E) * j : (T[Z] = k << E, y = 0);
          break;
        case 4:
          T[Z] && (T[Z] += (h() << E) * j);
          break;
      }
      q++;
    }
    y === 4 && (Q--, Q === 0 && (y = 0));
  }
  function m(v, T, q, H, V) {
    const Z = q / a | 0, j = q % a, aA = Z * v.v + H, rA = j * v.h + V;
    T(v, v.blocks[aA][rA]);
  }
  function b(v, T, q) {
    const H = q / v.blocksPerLine | 0, V = q % v.blocksPerLine;
    T(v, v.blocks[H][V]);
  }
  const G = i.length;
  let M, x, S, U, _, R;
  o ? r === 0 ? R = g === 0 ? d : p : R = g === 0 ? w : F : R = D;
  let N = 0, L, O;
  G === 1 ? O = i[0].blocksPerLine * i[0].blocksPerColumn : O = a * e.mcusPerColumn;
  const P = n || O;
  for (; N < O; ) {
    for (x = 0; x < G; x++)
      i[x].pred = 0;
    if (Q = 0, G === 1)
      for (M = i[0], _ = 0; _ < P; _++)
        b(M, R, N), N++;
    else
      for (_ = 0; _ < P; _++) {
        for (x = 0; x < G; x++) {
          M = i[x];
          const { h: v, v: T } = M;
          for (S = 0; S < T; S++)
            for (U = 0; U < v; U++)
              m(M, R, N, S, U);
        }
        if (N++, N === O)
          break;
      }
    if (l = 0, L = A[f] << 8 | A[f + 1], L < 65280)
      throw new Error("marker was not found");
    if (L >= 65488 && L <= 65495)
      f += 2;
    else
      break;
  }
  return f - I;
}
function eo(A, t) {
  const e = [], { blocksPerLine: i, blocksPerColumn: n } = t, r = i << 3, s = new Int32Array(64), g = new Uint8Array(64);
  function E(a, o, I) {
    const f = t.quantizationTable;
    let B, l, h, C, c, u, D, d, p;
    const Q = I;
    let w;
    for (w = 0; w < 64; w++)
      Q[w] = a[w] * f[w];
    for (w = 0; w < 8; ++w) {
      const y = 8 * w;
      if (Q[1 + y] === 0 && Q[2 + y] === 0 && Q[3 + y] === 0 && Q[4 + y] === 0 && Q[5 + y] === 0 && Q[6 + y] === 0 && Q[7 + y] === 0) {
        p = HA * Q[0 + y] + 512 >> 10, Q[0 + y] = p, Q[1 + y] = p, Q[2 + y] = p, Q[3 + y] = p, Q[4 + y] = p, Q[5 + y] = p, Q[6 + y] = p, Q[7 + y] = p;
        continue;
      }
      B = HA * Q[0 + y] + 128 >> 8, l = HA * Q[4 + y] + 128 >> 8, h = Q[2 + y], C = Q[6 + y], c = ve * (Q[1 + y] - Q[7 + y]) + 128 >> 8, d = ve * (Q[1 + y] + Q[7 + y]) + 128 >> 8, u = Q[3 + y] << 4, D = Q[5 + y] << 4, p = B - l + 1 >> 1, B = B + l + 1 >> 1, l = p, p = h * _e + C * be + 128 >> 8, h = h * be - C * _e + 128 >> 8, C = p, p = c - D + 1 >> 1, c = c + D + 1 >> 1, D = p, p = d + u + 1 >> 1, u = d - u + 1 >> 1, d = p, p = B - C + 1 >> 1, B = B + C + 1 >> 1, C = p, p = l - h + 1 >> 1, l = l + h + 1 >> 1, h = p, p = c * Ge + d * xe + 2048 >> 12, c = c * xe - d * Ge + 2048 >> 12, d = p, p = u * Fe + D * Se + 2048 >> 12, u = u * Se - D * Fe + 2048 >> 12, D = p, Q[0 + y] = B + d, Q[7 + y] = B - d, Q[1 + y] = l + D, Q[6 + y] = l - D, Q[2 + y] = h + u, Q[5 + y] = h - u, Q[3 + y] = C + c, Q[4 + y] = C - c;
    }
    for (w = 0; w < 8; ++w) {
      const y = w;
      if (Q[1 * 8 + y] === 0 && Q[2 * 8 + y] === 0 && Q[3 * 8 + y] === 0 && Q[4 * 8 + y] === 0 && Q[5 * 8 + y] === 0 && Q[6 * 8 + y] === 0 && Q[7 * 8 + y] === 0) {
        p = HA * I[w + 0] + 8192 >> 14, Q[0 * 8 + y] = p, Q[1 * 8 + y] = p, Q[2 * 8 + y] = p, Q[3 * 8 + y] = p, Q[4 * 8 + y] = p, Q[5 * 8 + y] = p, Q[6 * 8 + y] = p, Q[7 * 8 + y] = p;
        continue;
      }
      B = HA * Q[0 * 8 + y] + 2048 >> 12, l = HA * Q[4 * 8 + y] + 2048 >> 12, h = Q[2 * 8 + y], C = Q[6 * 8 + y], c = ve * (Q[1 * 8 + y] - Q[7 * 8 + y]) + 2048 >> 12, d = ve * (Q[1 * 8 + y] + Q[7 * 8 + y]) + 2048 >> 12, u = Q[3 * 8 + y], D = Q[5 * 8 + y], p = B - l + 1 >> 1, B = B + l + 1 >> 1, l = p, p = h * _e + C * be + 2048 >> 12, h = h * be - C * _e + 2048 >> 12, C = p, p = c - D + 1 >> 1, c = c + D + 1 >> 1, D = p, p = d + u + 1 >> 1, u = d - u + 1 >> 1, d = p, p = B - C + 1 >> 1, B = B + C + 1 >> 1, C = p, p = l - h + 1 >> 1, l = l + h + 1 >> 1, h = p, p = c * Ge + d * xe + 2048 >> 12, c = c * xe - d * Ge + 2048 >> 12, d = p, p = u * Fe + D * Se + 2048 >> 12, u = u * Se - D * Fe + 2048 >> 12, D = p, Q[0 * 8 + y] = B + d, Q[7 * 8 + y] = B - d, Q[1 * 8 + y] = l + D, Q[6 * 8 + y] = l - D, Q[2 * 8 + y] = h + u, Q[5 * 8 + y] = h - u, Q[3 * 8 + y] = C + c, Q[4 * 8 + y] = C - c;
    }
    for (w = 0; w < 64; ++w) {
      const y = 128 + (Q[w] + 8 >> 4);
      y < 0 ? o[w] = 0 : y > 255 ? o[w] = 255 : o[w] = y;
    }
  }
  for (let a = 0; a < n; a++) {
    const o = a << 3;
    for (let I = 0; I < 8; I++)
      e.push(new Uint8Array(r));
    for (let I = 0; I < i; I++) {
      E(t.blocks[a][I], g, s);
      let f = 0;
      const B = I << 3;
      for (let l = 0; l < 8; l++) {
        const h = e[o + l];
        for (let C = 0; C < 8; C++)
          h[B + C] = g[f++];
      }
    }
  }
  return e;
}
class to {
  constructor() {
    this.jfif = null, this.adobe = null, this.quantizationTables = [], this.huffmanTablesAC = [], this.huffmanTablesDC = [], this.resetFrames();
  }
  resetFrames() {
    this.frames = [];
  }
  parse(t) {
    let e = 0;
    function i() {
      const g = t[e] << 8 | t[e + 1];
      return e += 2, g;
    }
    function n() {
      const g = i(), E = t.subarray(e, e + g - 2);
      return e += E.length, E;
    }
    function r(g) {
      let E = 0, a = 0, o, I;
      for (I in g.components)
        g.components.hasOwnProperty(I) && (o = g.components[I], E < o.h && (E = o.h), a < o.v && (a = o.v));
      const f = Math.ceil(g.samplesPerLine / 8 / E), B = Math.ceil(g.scanLines / 8 / a);
      for (I in g.components)
        if (g.components.hasOwnProperty(I)) {
          o = g.components[I];
          const l = Math.ceil(Math.ceil(g.samplesPerLine / 8) * o.h / E), h = Math.ceil(Math.ceil(g.scanLines / 8) * o.v / a), C = f * o.h, c = B * o.v, u = [];
          for (let D = 0; D < c; D++) {
            const d = [];
            for (let p = 0; p < C; p++)
              d.push(new Int32Array(64));
            u.push(d);
          }
          o.blocksPerLine = l, o.blocksPerColumn = h, o.blocks = u;
        }
      g.maxH = E, g.maxV = a, g.mcusPerLine = f, g.mcusPerColumn = B;
    }
    let s = i();
    if (s !== 65496)
      throw new Error("SOI not found");
    for (s = i(); s !== 65497; ) {
      switch (s) {
        case 65280:
          break;
        case 65504:
        case 65505:
        case 65506:
        case 65507:
        case 65508:
        case 65509:
        case 65510:
        case 65511:
        case 65512:
        case 65513:
        case 65514:
        case 65515:
        case 65516:
        case 65517:
        case 65518:
        case 65519:
        case 65534: {
          const g = n();
          s === 65504 && g[0] === 74 && g[1] === 70 && g[2] === 73 && g[3] === 70 && g[4] === 0 && (this.jfif = {
            version: { major: g[5], minor: g[6] },
            densityUnits: g[7],
            xDensity: g[8] << 8 | g[9],
            yDensity: g[10] << 8 | g[11],
            thumbWidth: g[12],
            thumbHeight: g[13],
            thumbData: g.subarray(14, 14 + 3 * g[12] * g[13])
          }), s === 65518 && g[0] === 65 && g[1] === 100 && g[2] === 111 && g[3] === 98 && g[4] === 101 && g[5] === 0 && (this.adobe = {
            version: g[6],
            flags0: g[7] << 8 | g[8],
            flags1: g[9] << 8 | g[10],
            transformCode: g[11]
          });
          break;
        }
        case 65499: {
          const E = i() + e - 2;
          for (; e < E; ) {
            const a = t[e++], o = new Int32Array(64);
            if (a >> 4)
              if (a >> 4 === 1)
                for (let I = 0; I < 64; I++) {
                  const f = oe[I];
                  o[f] = i();
                }
              else
                throw new Error("DQT: invalid table spec");
            else for (let I = 0; I < 64; I++) {
              const f = oe[I];
              o[f] = t[e++];
            }
            this.quantizationTables[a & 15] = o;
          }
          break;
        }
        case 65472:
        case 65473:
        case 65474: {
          i();
          const g = {
            extended: s === 65473,
            progressive: s === 65474,
            precision: t[e++],
            scanLines: i(),
            samplesPerLine: i(),
            components: {},
            componentsOrder: []
          }, E = t[e++];
          let a;
          for (let o = 0; o < E; o++) {
            a = t[e];
            const I = t[e + 1] >> 4, f = t[e + 1] & 15, B = t[e + 2];
            g.componentsOrder.push(a), g.components[a] = {
              h: I,
              v: f,
              quantizationIdx: B
            }, e += 3;
          }
          r(g), this.frames.push(g);
          break;
        }
        case 65476: {
          const g = i();
          for (let E = 2; E < g; ) {
            const a = t[e++], o = new Uint8Array(16);
            let I = 0;
            for (let B = 0; B < 16; B++, e++)
              o[B] = t[e], I += o[B];
            const f = new Uint8Array(I);
            for (let B = 0; B < I; B++, e++)
              f[B] = t[e];
            E += 17 + I, a >> 4 ? this.huffmanTablesAC[a & 15] = Bi(
              o,
              f
            ) : this.huffmanTablesDC[a & 15] = Bi(
              o,
              f
            );
          }
          break;
        }
        case 65501:
          i(), this.resetInterval = i();
          break;
        case 65498: {
          i();
          const g = t[e++], E = [], a = this.frames[0];
          for (let l = 0; l < g; l++) {
            const h = a.components[t[e++]], C = t[e++];
            h.huffmanTableDC = this.huffmanTablesDC[C >> 4], h.huffmanTableAC = this.huffmanTablesAC[C & 15], E.push(h);
          }
          const o = t[e++], I = t[e++], f = t[e++], B = Ao(
            t,
            e,
            a,
            E,
            this.resetInterval,
            o,
            I,
            f >> 4,
            f & 15
          );
          e += B;
          break;
        }
        case 65535:
          t[e] !== 255 && e--;
          break;
        default:
          if (t[e - 3] === 255 && t[e - 2] >= 192 && t[e - 2] <= 254) {
            e -= 3;
            break;
          }
          throw new Error(`unknown JPEG marker ${s.toString(16)}`);
      }
      s = i();
    }
  }
  getResult() {
    const { frames: t } = this;
    if (this.frames.length === 0)
      throw new Error("no frames were decoded");
    this.frames.length > 1 && console.warn("more than one frame is not supported");
    for (let o = 0; o < this.frames.length; o++) {
      const I = this.frames[o].components;
      for (const f of Object.keys(I))
        I[f].quantizationTable = this.quantizationTables[I[f].quantizationIdx], delete I[f].quantizationIdx;
    }
    const e = t[0], { components: i, componentsOrder: n } = e, r = [], s = e.samplesPerLine, g = e.scanLines;
    for (let o = 0; o < n.length; o++) {
      const I = i[n[o]];
      r.push({
        lines: eo(e, I),
        scaleX: I.h / e.maxH,
        scaleY: I.v / e.maxV
      });
    }
    const E = new Uint8Array(s * g * r.length);
    let a = 0;
    for (let o = 0; o < g; ++o)
      for (let I = 0; I < s; ++I)
        for (let f = 0; f < r.length; ++f) {
          const B = r[f];
          E[a] = B.lines[0 | o * B.scaleY][0 | I * B.scaleX], ++a;
        }
    return E;
  }
}
class io extends qA {
  constructor(t) {
    super(), this.reader = new to(), t.JPEGTables && this.reader.parse(t.JPEGTables);
  }
  decodeBlock(t) {
    try {
      return this.reader.resetFrames(), this.reader.parse(new Uint8Array(t)), this.reader.getResult().buffer;
    } catch (e) {
      if (e.message === "SOI not found") {
        console.warn("Suppressed JPEG decoding error: SOI not found");
        const i = new ArrayBuffer(4), n = new Uint8Array(i);
        return n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0, i;
      }
      throw e;
    }
  }
}
const ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" }));
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const no = 4, li = 0, fi = 1, ao = 2;
function Ae(A) {
  let t = A.length;
  for (; --t >= 0; )
    A[t] = 0;
}
const oo = 0, dr = 1, go = 2, so = 3, Io = 258, Zt = 29, we = 256, le = we + 1 + Zt, PA = 30, Xt = 19, wr = 2 * le + 1, RA = 15, it = 16, Bo = 7, jt = 256, yr = 16, Dr = 17, pr = 18, yt = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), qe = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), lo = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), mr = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), fo = 512, yA = new Array((le + 2) * 2);
Ae(yA);
const ge = new Array(PA * 2);
Ae(ge);
const fe = new Array(fo);
Ae(fe);
const Ce = new Array(Io - so + 1);
Ae(Ce);
const Wt = new Array(Zt);
Ae(Wt);
const Te = new Array(PA);
Ae(Te);
function rt(A, t, e, i, n) {
  this.static_tree = A, this.extra_bits = t, this.extra_base = e, this.elems = i, this.max_length = n, this.has_stree = A && A.length;
}
let kr, Sr, Fr;
function nt(A, t) {
  this.dyn_tree = A, this.max_code = 0, this.stat_desc = t;
}
const xr = (A) => A < 256 ? fe[A] : fe[256 + (A >>> 7)], Ee = (A, t) => {
  A.pending_buf[A.pending++] = t & 255, A.pending_buf[A.pending++] = t >>> 8 & 255;
}, nA = (A, t, e) => {
  A.bi_valid > it - e ? (A.bi_buf |= t << A.bi_valid & 65535, Ee(A, A.bi_buf), A.bi_buf = t >> it - A.bi_valid, A.bi_valid += e - it) : (A.bi_buf |= t << A.bi_valid & 65535, A.bi_valid += e);
}, QA = (A, t, e) => {
  nA(
    A,
    e[t * 2],
    e[t * 2 + 1]
    /*.Len*/
  );
}, Gr = (A, t) => {
  let e = 0;
  do
    e |= A & 1, A >>>= 1, e <<= 1;
  while (--t > 0);
  return e >>> 1;
}, Co = (A) => {
  A.bi_valid === 16 ? (Ee(A, A.bi_buf), A.bi_buf = 0, A.bi_valid = 0) : A.bi_valid >= 8 && (A.pending_buf[A.pending++] = A.bi_buf & 255, A.bi_buf >>= 8, A.bi_valid -= 8);
}, Eo = (A, t) => {
  const e = t.dyn_tree, i = t.max_code, n = t.stat_desc.static_tree, r = t.stat_desc.has_stree, s = t.stat_desc.extra_bits, g = t.stat_desc.extra_base, E = t.stat_desc.max_length;
  let a, o, I, f, B, l, h = 0;
  for (f = 0; f <= RA; f++)
    A.bl_count[f] = 0;
  for (e[A.heap[A.heap_max] * 2 + 1] = 0, a = A.heap_max + 1; a < wr; a++)
    o = A.heap[a], f = e[e[o * 2 + 1] * 2 + 1] + 1, f > E && (f = E, h++), e[o * 2 + 1] = f, !(o > i) && (A.bl_count[f]++, B = 0, o >= g && (B = s[o - g]), l = e[o * 2], A.opt_len += l * (f + B), r && (A.static_len += l * (n[o * 2 + 1] + B)));
  if (h !== 0) {
    do {
      for (f = E - 1; A.bl_count[f] === 0; )
        f--;
      A.bl_count[f]--, A.bl_count[f + 1] += 2, A.bl_count[E]--, h -= 2;
    } while (h > 0);
    for (f = E; f !== 0; f--)
      for (o = A.bl_count[f]; o !== 0; )
        I = A.heap[--a], !(I > i) && (e[I * 2 + 1] !== f && (A.opt_len += (f - e[I * 2 + 1]) * e[I * 2], e[I * 2 + 1] = f), o--);
  }
}, br = (A, t, e) => {
  const i = new Array(RA + 1);
  let n = 0, r, s;
  for (r = 1; r <= RA; r++)
    n = n + e[r - 1] << 1, i[r] = n;
  for (s = 0; s <= t; s++) {
    let g = A[s * 2 + 1];
    g !== 0 && (A[s * 2] = Gr(i[g]++, g));
  }
}, co = () => {
  let A, t, e, i, n;
  const r = new Array(RA + 1);
  for (e = 0, i = 0; i < Zt - 1; i++)
    for (Wt[i] = e, A = 0; A < 1 << yt[i]; A++)
      Ce[e++] = i;
  for (Ce[e - 1] = i, n = 0, i = 0; i < 16; i++)
    for (Te[i] = n, A = 0; A < 1 << qe[i]; A++)
      fe[n++] = i;
  for (n >>= 7; i < PA; i++)
    for (Te[i] = n << 7, A = 0; A < 1 << qe[i] - 7; A++)
      fe[256 + n++] = i;
  for (t = 0; t <= RA; t++)
    r[t] = 0;
  for (A = 0; A <= 143; )
    yA[A * 2 + 1] = 8, A++, r[8]++;
  for (; A <= 255; )
    yA[A * 2 + 1] = 9, A++, r[9]++;
  for (; A <= 279; )
    yA[A * 2 + 1] = 7, A++, r[7]++;
  for (; A <= 287; )
    yA[A * 2 + 1] = 8, A++, r[8]++;
  for (br(yA, le + 1, r), A = 0; A < PA; A++)
    ge[A * 2 + 1] = 5, ge[A * 2] = Gr(A, 5);
  kr = new rt(yA, yt, we + 1, le, RA), Sr = new rt(ge, qe, 0, PA, RA), Fr = new rt(new Array(0), lo, 0, Xt, Bo);
}, _r = (A) => {
  let t;
  for (t = 0; t < le; t++)
    A.dyn_ltree[t * 2] = 0;
  for (t = 0; t < PA; t++)
    A.dyn_dtree[t * 2] = 0;
  for (t = 0; t < Xt; t++)
    A.bl_tree[t * 2] = 0;
  A.dyn_ltree[jt * 2] = 1, A.opt_len = A.static_len = 0, A.sym_next = A.matches = 0;
}, vr = (A) => {
  A.bi_valid > 8 ? Ee(A, A.bi_buf) : A.bi_valid > 0 && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
}, Ci = (A, t, e, i) => {
  const n = t * 2, r = e * 2;
  return A[n] < A[r] || A[n] === A[r] && i[t] <= i[e];
}, at = (A, t, e) => {
  const i = A.heap[e];
  let n = e << 1;
  for (; n <= A.heap_len && (n < A.heap_len && Ci(t, A.heap[n + 1], A.heap[n], A.depth) && n++, !Ci(t, i, A.heap[n], A.depth)); )
    A.heap[e] = A.heap[n], e = n, n <<= 1;
  A.heap[e] = i;
}, Ei = (A, t, e) => {
  let i, n, r = 0, s, g;
  if (A.sym_next !== 0)
    do
      i = A.pending_buf[A.sym_buf + r++] & 255, i += (A.pending_buf[A.sym_buf + r++] & 255) << 8, n = A.pending_buf[A.sym_buf + r++], i === 0 ? QA(A, n, t) : (s = Ce[n], QA(A, s + we + 1, t), g = yt[s], g !== 0 && (n -= Wt[s], nA(A, n, g)), i--, s = xr(i), QA(A, s, e), g = qe[s], g !== 0 && (i -= Te[s], nA(A, i, g)));
    while (r < A.sym_next);
  QA(A, jt, t);
}, Dt = (A, t) => {
  const e = t.dyn_tree, i = t.stat_desc.static_tree, n = t.stat_desc.has_stree, r = t.stat_desc.elems;
  let s, g, E = -1, a;
  for (A.heap_len = 0, A.heap_max = wr, s = 0; s < r; s++)
    e[s * 2] !== 0 ? (A.heap[++A.heap_len] = E = s, A.depth[s] = 0) : e[s * 2 + 1] = 0;
  for (; A.heap_len < 2; )
    a = A.heap[++A.heap_len] = E < 2 ? ++E : 0, e[a * 2] = 1, A.depth[a] = 0, A.opt_len--, n && (A.static_len -= i[a * 2 + 1]);
  for (t.max_code = E, s = A.heap_len >> 1; s >= 1; s--)
    at(A, e, s);
  a = r;
  do
    s = A.heap[
      1
      /*SMALLEST*/
    ], A.heap[
      1
      /*SMALLEST*/
    ] = A.heap[A.heap_len--], at(
      A,
      e,
      1
      /*SMALLEST*/
    ), g = A.heap[
      1
      /*SMALLEST*/
    ], A.heap[--A.heap_max] = s, A.heap[--A.heap_max] = g, e[a * 2] = e[s * 2] + e[g * 2], A.depth[a] = (A.depth[s] >= A.depth[g] ? A.depth[s] : A.depth[g]) + 1, e[s * 2 + 1] = e[g * 2 + 1] = a, A.heap[
      1
      /*SMALLEST*/
    ] = a++, at(
      A,
      e,
      1
      /*SMALLEST*/
    );
  while (A.heap_len >= 2);
  A.heap[--A.heap_max] = A.heap[
    1
    /*SMALLEST*/
  ], Eo(A, t), br(e, E, A.bl_count);
}, ci = (A, t, e) => {
  let i, n = -1, r, s = t[0 * 2 + 1], g = 0, E = 7, a = 4;
  for (s === 0 && (E = 138, a = 3), t[(e + 1) * 2 + 1] = 65535, i = 0; i <= e; i++)
    r = s, s = t[(i + 1) * 2 + 1], !(++g < E && r === s) && (g < a ? A.bl_tree[r * 2] += g : r !== 0 ? (r !== n && A.bl_tree[r * 2]++, A.bl_tree[yr * 2]++) : g <= 10 ? A.bl_tree[Dr * 2]++ : A.bl_tree[pr * 2]++, g = 0, n = r, s === 0 ? (E = 138, a = 3) : r === s ? (E = 6, a = 3) : (E = 7, a = 4));
}, Qi = (A, t, e) => {
  let i, n = -1, r, s = t[0 * 2 + 1], g = 0, E = 7, a = 4;
  for (s === 0 && (E = 138, a = 3), i = 0; i <= e; i++)
    if (r = s, s = t[(i + 1) * 2 + 1], !(++g < E && r === s)) {
      if (g < a)
        do
          QA(A, r, A.bl_tree);
        while (--g !== 0);
      else r !== 0 ? (r !== n && (QA(A, r, A.bl_tree), g--), QA(A, yr, A.bl_tree), nA(A, g - 3, 2)) : g <= 10 ? (QA(A, Dr, A.bl_tree), nA(A, g - 3, 3)) : (QA(A, pr, A.bl_tree), nA(A, g - 11, 7));
      g = 0, n = r, s === 0 ? (E = 138, a = 3) : r === s ? (E = 6, a = 3) : (E = 7, a = 4);
    }
}, Qo = (A) => {
  let t;
  for (ci(A, A.dyn_ltree, A.l_desc.max_code), ci(A, A.dyn_dtree, A.d_desc.max_code), Dt(A, A.bl_desc), t = Xt - 1; t >= 3 && A.bl_tree[mr[t] * 2 + 1] === 0; t--)
    ;
  return A.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, ho = (A, t, e, i) => {
  let n;
  for (nA(A, t - 257, 5), nA(A, e - 1, 5), nA(A, i - 4, 4), n = 0; n < i; n++)
    nA(A, A.bl_tree[mr[n] * 2 + 1], 3);
  Qi(A, A.dyn_ltree, t - 1), Qi(A, A.dyn_dtree, e - 1);
}, uo = (A) => {
  let t = 4093624447, e;
  for (e = 0; e <= 31; e++, t >>>= 1)
    if (t & 1 && A.dyn_ltree[e * 2] !== 0)
      return li;
  if (A.dyn_ltree[9 * 2] !== 0 || A.dyn_ltree[10 * 2] !== 0 || A.dyn_ltree[13 * 2] !== 0)
    return fi;
  for (e = 32; e < we; e++)
    if (A.dyn_ltree[e * 2] !== 0)
      return fi;
  return li;
};
let hi = !1;
const wo = (A) => {
  hi || (co(), hi = !0), A.l_desc = new nt(A.dyn_ltree, kr), A.d_desc = new nt(A.dyn_dtree, Sr), A.bl_desc = new nt(A.bl_tree, Fr), A.bi_buf = 0, A.bi_valid = 0, _r(A);
}, Rr = (A, t, e, i) => {
  nA(A, (oo << 1) + (i ? 1 : 0), 3), vr(A), Ee(A, e), Ee(A, ~e), e && A.pending_buf.set(A.window.subarray(t, t + e), A.pending), A.pending += e;
}, yo = (A) => {
  nA(A, dr << 1, 3), QA(A, jt, yA), Co(A);
}, Do = (A, t, e, i) => {
  let n, r, s = 0;
  A.level > 0 ? (A.strm.data_type === ao && (A.strm.data_type = uo(A)), Dt(A, A.l_desc), Dt(A, A.d_desc), s = Qo(A), n = A.opt_len + 3 + 7 >>> 3, r = A.static_len + 3 + 7 >>> 3, r <= n && (n = r)) : n = r = e + 5, e + 4 <= n && t !== -1 ? Rr(A, t, e, i) : A.strategy === no || r === n ? (nA(A, (dr << 1) + (i ? 1 : 0), 3), Ei(A, yA, ge)) : (nA(A, (go << 1) + (i ? 1 : 0), 3), ho(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, s + 1), Ei(A, A.dyn_ltree, A.dyn_dtree)), _r(A), i && vr(A);
}, po = (A, t, e) => (A.pending_buf[A.sym_buf + A.sym_next++] = t, A.pending_buf[A.sym_buf + A.sym_next++] = t >> 8, A.pending_buf[A.sym_buf + A.sym_next++] = e, t === 0 ? A.dyn_ltree[e * 2]++ : (A.matches++, t--, A.dyn_ltree[(Ce[e] + we + 1) * 2]++, A.dyn_dtree[xr(t) * 2]++), A.sym_next === A.sym_end);
var mo = wo, ko = Rr, So = Do, Fo = po, xo = yo, Go = {
  _tr_init: mo,
  _tr_stored_block: ko,
  _tr_flush_block: So,
  _tr_tally: Fo,
  _tr_align: xo
};
const bo = (A, t, e, i) => {
  let n = A & 65535 | 0, r = A >>> 16 & 65535 | 0, s = 0;
  for (; e !== 0; ) {
    s = e > 2e3 ? 2e3 : e, e -= s;
    do
      n = n + t[i++] | 0, r = r + n | 0;
    while (--s);
    n %= 65521, r %= 65521;
  }
  return n | r << 16 | 0;
};
var ce = bo;
const _o = () => {
  let A, t = [];
  for (var e = 0; e < 256; e++) {
    A = e;
    for (var i = 0; i < 8; i++)
      A = A & 1 ? 3988292384 ^ A >>> 1 : A >>> 1;
    t[e] = A;
  }
  return t;
}, vo = new Uint32Array(_o()), Ro = (A, t, e, i) => {
  const n = vo, r = i + e;
  A ^= -1;
  for (let s = i; s < r; s++)
    A = A >>> 8 ^ n[(A ^ t[s]) & 255];
  return A ^ -1;
};
var W = Ro, ZA = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, ye = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: Uo, _tr_stored_block: pt, _tr_flush_block: Lo, _tr_tally: FA, _tr_align: Mo } = Go, {
  Z_NO_FLUSH: xA,
  Z_PARTIAL_FLUSH: No,
  Z_FULL_FLUSH: qo,
  Z_FINISH: IA,
  Z_BLOCK: ui,
  Z_OK: $,
  Z_STREAM_END: di,
  Z_STREAM_ERROR: hA,
  Z_DATA_ERROR: To,
  Z_BUF_ERROR: ot,
  Z_DEFAULT_COMPRESSION: Jo,
  Z_FILTERED: Ho,
  Z_HUFFMAN_ONLY: Re,
  Z_RLE: Yo,
  Z_FIXED: Oo,
  Z_DEFAULT_STRATEGY: Ko,
  Z_UNKNOWN: Vo,
  Z_DEFLATED: Ke
} = ye, Po = 9, zo = 15, Zo = 8, Xo = 29, jo = 256, mt = jo + 1 + Xo, Wo = 30, $o = 19, Ag = 2 * mt + 1, eg = 15, Y = 3, SA = 258, uA = SA + Y + 1, tg = 32, XA = 42, $t = 57, kt = 69, St = 73, Ft = 91, xt = 103, UA = 113, ne = 666, tA = 1, ee = 2, MA = 3, te = 4, ig = 3, LA = (A, t) => (A.msg = ZA[t], t), wi = (A) => A * 2 - (A > 4 ? 9 : 0), kA = (A) => {
  let t = A.length;
  for (; --t >= 0; )
    A[t] = 0;
}, rg = (A) => {
  let t, e, i, n = A.w_size;
  t = A.hash_size, i = t;
  do
    e = A.head[--i], A.head[i] = e >= n ? e - n : 0;
  while (--t);
  t = n, i = t;
  do
    e = A.prev[--i], A.prev[i] = e >= n ? e - n : 0;
  while (--t);
};
let ng = (A, t, e) => (t << A.hash_shift ^ e) & A.hash_mask, GA = ng;
const oA = (A) => {
  const t = A.state;
  let e = t.pending;
  e > A.avail_out && (e = A.avail_out), e !== 0 && (A.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + e), A.next_out), A.next_out += e, t.pending_out += e, A.total_out += e, A.avail_out -= e, t.pending -= e, t.pending === 0 && (t.pending_out = 0));
}, gA = (A, t) => {
  Lo(A, A.block_start >= 0 ? A.block_start : -1, A.strstart - A.block_start, t), A.block_start = A.strstart, oA(A.strm);
}, K = (A, t) => {
  A.pending_buf[A.pending++] = t;
}, ie = (A, t) => {
  A.pending_buf[A.pending++] = t >>> 8 & 255, A.pending_buf[A.pending++] = t & 255;
}, Gt = (A, t, e, i) => {
  let n = A.avail_in;
  return n > i && (n = i), n === 0 ? 0 : (A.avail_in -= n, t.set(A.input.subarray(A.next_in, A.next_in + n), e), A.state.wrap === 1 ? A.adler = ce(A.adler, t, n, e) : A.state.wrap === 2 && (A.adler = W(A.adler, t, n, e)), A.next_in += n, A.total_in += n, n);
}, Ur = (A, t) => {
  let e = A.max_chain_length, i = A.strstart, n, r, s = A.prev_length, g = A.nice_match;
  const E = A.strstart > A.w_size - uA ? A.strstart - (A.w_size - uA) : 0, a = A.window, o = A.w_mask, I = A.prev, f = A.strstart + SA;
  let B = a[i + s - 1], l = a[i + s];
  A.prev_length >= A.good_match && (e >>= 2), g > A.lookahead && (g = A.lookahead);
  do
    if (n = t, !(a[n + s] !== l || a[n + s - 1] !== B || a[n] !== a[i] || a[++n] !== a[i + 1])) {
      i += 2, n++;
      do
        ;
      while (a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && a[++i] === a[++n] && i < f);
      if (r = SA - (f - i), i = f - SA, r > s) {
        if (A.match_start = t, s = r, r >= g)
          break;
        B = a[i + s - 1], l = a[i + s];
      }
    }
  while ((t = I[t & o]) > E && --e !== 0);
  return s <= A.lookahead ? s : A.lookahead;
}, jA = (A) => {
  const t = A.w_size;
  let e, i, n;
  do {
    if (i = A.window_size - A.lookahead - A.strstart, A.strstart >= t + (t - uA) && (A.window.set(A.window.subarray(t, t + t - i), 0), A.match_start -= t, A.strstart -= t, A.block_start -= t, A.insert > A.strstart && (A.insert = A.strstart), rg(A), i += t), A.strm.avail_in === 0)
      break;
    if (e = Gt(A.strm, A.window, A.strstart + A.lookahead, i), A.lookahead += e, A.lookahead + A.insert >= Y)
      for (n = A.strstart - A.insert, A.ins_h = A.window[n], A.ins_h = GA(A, A.ins_h, A.window[n + 1]); A.insert && (A.ins_h = GA(A, A.ins_h, A.window[n + Y - 1]), A.prev[n & A.w_mask] = A.head[A.ins_h], A.head[A.ins_h] = n, n++, A.insert--, !(A.lookahead + A.insert < Y)); )
        ;
  } while (A.lookahead < uA && A.strm.avail_in !== 0);
}, Lr = (A, t) => {
  let e = A.pending_buf_size - 5 > A.w_size ? A.w_size : A.pending_buf_size - 5, i, n, r, s = 0, g = A.strm.avail_in;
  do {
    if (i = 65535, r = A.bi_valid + 42 >> 3, A.strm.avail_out < r || (r = A.strm.avail_out - r, n = A.strstart - A.block_start, i > n + A.strm.avail_in && (i = n + A.strm.avail_in), i > r && (i = r), i < e && (i === 0 && t !== IA || t === xA || i !== n + A.strm.avail_in)))
      break;
    s = t === IA && i === n + A.strm.avail_in ? 1 : 0, pt(A, 0, 0, s), A.pending_buf[A.pending - 4] = i, A.pending_buf[A.pending - 3] = i >> 8, A.pending_buf[A.pending - 2] = ~i, A.pending_buf[A.pending - 1] = ~i >> 8, oA(A.strm), n && (n > i && (n = i), A.strm.output.set(A.window.subarray(A.block_start, A.block_start + n), A.strm.next_out), A.strm.next_out += n, A.strm.avail_out -= n, A.strm.total_out += n, A.block_start += n, i -= n), i && (Gt(A.strm, A.strm.output, A.strm.next_out, i), A.strm.next_out += i, A.strm.avail_out -= i, A.strm.total_out += i);
  } while (s === 0);
  return g -= A.strm.avail_in, g && (g >= A.w_size ? (A.matches = 2, A.window.set(A.strm.input.subarray(A.strm.next_in - A.w_size, A.strm.next_in), 0), A.strstart = A.w_size, A.insert = A.strstart) : (A.window_size - A.strstart <= g && (A.strstart -= A.w_size, A.window.set(A.window.subarray(A.w_size, A.w_size + A.strstart), 0), A.matches < 2 && A.matches++, A.insert > A.strstart && (A.insert = A.strstart)), A.window.set(A.strm.input.subarray(A.strm.next_in - g, A.strm.next_in), A.strstart), A.strstart += g, A.insert += g > A.w_size - A.insert ? A.w_size - A.insert : g), A.block_start = A.strstart), A.high_water < A.strstart && (A.high_water = A.strstart), s ? te : t !== xA && t !== IA && A.strm.avail_in === 0 && A.strstart === A.block_start ? ee : (r = A.window_size - A.strstart, A.strm.avail_in > r && A.block_start >= A.w_size && (A.block_start -= A.w_size, A.strstart -= A.w_size, A.window.set(A.window.subarray(A.w_size, A.w_size + A.strstart), 0), A.matches < 2 && A.matches++, r += A.w_size, A.insert > A.strstart && (A.insert = A.strstart)), r > A.strm.avail_in && (r = A.strm.avail_in), r && (Gt(A.strm, A.window, A.strstart, r), A.strstart += r, A.insert += r > A.w_size - A.insert ? A.w_size - A.insert : r), A.high_water < A.strstart && (A.high_water = A.strstart), r = A.bi_valid + 42 >> 3, r = A.pending_buf_size - r > 65535 ? 65535 : A.pending_buf_size - r, e = r > A.w_size ? A.w_size : r, n = A.strstart - A.block_start, (n >= e || (n || t === IA) && t !== xA && A.strm.avail_in === 0 && n <= r) && (i = n > r ? r : n, s = t === IA && A.strm.avail_in === 0 && i === n ? 1 : 0, pt(A, A.block_start, i, s), A.block_start += i, oA(A.strm)), s ? MA : tA);
}, gt = (A, t) => {
  let e, i;
  for (; ; ) {
    if (A.lookahead < uA) {
      if (jA(A), A.lookahead < uA && t === xA)
        return tA;
      if (A.lookahead === 0)
        break;
    }
    if (e = 0, A.lookahead >= Y && (A.ins_h = GA(A, A.ins_h, A.window[A.strstart + Y - 1]), e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h], A.head[A.ins_h] = A.strstart), e !== 0 && A.strstart - e <= A.w_size - uA && (A.match_length = Ur(A, e)), A.match_length >= Y)
      if (i = FA(A, A.strstart - A.match_start, A.match_length - Y), A.lookahead -= A.match_length, A.match_length <= A.max_lazy_match && A.lookahead >= Y) {
        A.match_length--;
        do
          A.strstart++, A.ins_h = GA(A, A.ins_h, A.window[A.strstart + Y - 1]), e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h], A.head[A.ins_h] = A.strstart;
        while (--A.match_length !== 0);
        A.strstart++;
      } else
        A.strstart += A.match_length, A.match_length = 0, A.ins_h = A.window[A.strstart], A.ins_h = GA(A, A.ins_h, A.window[A.strstart + 1]);
    else
      i = FA(A, 0, A.window[A.strstart]), A.lookahead--, A.strstart++;
    if (i && (gA(A, !1), A.strm.avail_out === 0))
      return tA;
  }
  return A.insert = A.strstart < Y - 1 ? A.strstart : Y - 1, t === IA ? (gA(A, !0), A.strm.avail_out === 0 ? MA : te) : A.sym_next && (gA(A, !1), A.strm.avail_out === 0) ? tA : ee;
}, YA = (A, t) => {
  let e, i, n;
  for (; ; ) {
    if (A.lookahead < uA) {
      if (jA(A), A.lookahead < uA && t === xA)
        return tA;
      if (A.lookahead === 0)
        break;
    }
    if (e = 0, A.lookahead >= Y && (A.ins_h = GA(A, A.ins_h, A.window[A.strstart + Y - 1]), e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h], A.head[A.ins_h] = A.strstart), A.prev_length = A.match_length, A.prev_match = A.match_start, A.match_length = Y - 1, e !== 0 && A.prev_length < A.max_lazy_match && A.strstart - e <= A.w_size - uA && (A.match_length = Ur(A, e), A.match_length <= 5 && (A.strategy === Ho || A.match_length === Y && A.strstart - A.match_start > 4096) && (A.match_length = Y - 1)), A.prev_length >= Y && A.match_length <= A.prev_length) {
      n = A.strstart + A.lookahead - Y, i = FA(A, A.strstart - 1 - A.prev_match, A.prev_length - Y), A.lookahead -= A.prev_length - 1, A.prev_length -= 2;
      do
        ++A.strstart <= n && (A.ins_h = GA(A, A.ins_h, A.window[A.strstart + Y - 1]), e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h], A.head[A.ins_h] = A.strstart);
      while (--A.prev_length !== 0);
      if (A.match_available = 0, A.match_length = Y - 1, A.strstart++, i && (gA(A, !1), A.strm.avail_out === 0))
        return tA;
    } else if (A.match_available) {
      if (i = FA(A, 0, A.window[A.strstart - 1]), i && gA(A, !1), A.strstart++, A.lookahead--, A.strm.avail_out === 0)
        return tA;
    } else
      A.match_available = 1, A.strstart++, A.lookahead--;
  }
  return A.match_available && (i = FA(A, 0, A.window[A.strstart - 1]), A.match_available = 0), A.insert = A.strstart < Y - 1 ? A.strstart : Y - 1, t === IA ? (gA(A, !0), A.strm.avail_out === 0 ? MA : te) : A.sym_next && (gA(A, !1), A.strm.avail_out === 0) ? tA : ee;
}, ag = (A, t) => {
  let e, i, n, r;
  const s = A.window;
  for (; ; ) {
    if (A.lookahead <= SA) {
      if (jA(A), A.lookahead <= SA && t === xA)
        return tA;
      if (A.lookahead === 0)
        break;
    }
    if (A.match_length = 0, A.lookahead >= Y && A.strstart > 0 && (n = A.strstart - 1, i = s[n], i === s[++n] && i === s[++n] && i === s[++n])) {
      r = A.strstart + SA;
      do
        ;
      while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < r);
      A.match_length = SA - (r - n), A.match_length > A.lookahead && (A.match_length = A.lookahead);
    }
    if (A.match_length >= Y ? (e = FA(A, 1, A.match_length - Y), A.lookahead -= A.match_length, A.strstart += A.match_length, A.match_length = 0) : (e = FA(A, 0, A.window[A.strstart]), A.lookahead--, A.strstart++), e && (gA(A, !1), A.strm.avail_out === 0))
      return tA;
  }
  return A.insert = 0, t === IA ? (gA(A, !0), A.strm.avail_out === 0 ? MA : te) : A.sym_next && (gA(A, !1), A.strm.avail_out === 0) ? tA : ee;
}, og = (A, t) => {
  let e;
  for (; ; ) {
    if (A.lookahead === 0 && (jA(A), A.lookahead === 0)) {
      if (t === xA)
        return tA;
      break;
    }
    if (A.match_length = 0, e = FA(A, 0, A.window[A.strstart]), A.lookahead--, A.strstart++, e && (gA(A, !1), A.strm.avail_out === 0))
      return tA;
  }
  return A.insert = 0, t === IA ? (gA(A, !0), A.strm.avail_out === 0 ? MA : te) : A.sym_next && (gA(A, !1), A.strm.avail_out === 0) ? tA : ee;
};
function EA(A, t, e, i, n) {
  this.good_length = A, this.max_lazy = t, this.nice_length = e, this.max_chain = i, this.func = n;
}
const ae = [
  /*      good lazy nice chain */
  new EA(0, 0, 0, 0, Lr),
  /* 0 store only */
  new EA(4, 4, 8, 4, gt),
  /* 1 max speed, no lazy matches */
  new EA(4, 5, 16, 8, gt),
  /* 2 */
  new EA(4, 6, 32, 32, gt),
  /* 3 */
  new EA(4, 4, 16, 16, YA),
  /* 4 lazy matches */
  new EA(8, 16, 32, 32, YA),
  /* 5 */
  new EA(8, 16, 128, 128, YA),
  /* 6 */
  new EA(8, 32, 128, 256, YA),
  /* 7 */
  new EA(32, 128, 258, 1024, YA),
  /* 8 */
  new EA(32, 258, 258, 4096, YA)
  /* 9 max compression */
], gg = (A) => {
  A.window_size = 2 * A.w_size, kA(A.head), A.max_lazy_match = ae[A.level].max_lazy, A.good_match = ae[A.level].good_length, A.nice_match = ae[A.level].nice_length, A.max_chain_length = ae[A.level].max_chain, A.strstart = 0, A.block_start = 0, A.lookahead = 0, A.insert = 0, A.match_length = A.prev_length = Y - 1, A.match_available = 0, A.ins_h = 0;
};
function sg() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ke, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Ag * 2), this.dyn_dtree = new Uint16Array((2 * Wo + 1) * 2), this.bl_tree = new Uint16Array((2 * $o + 1) * 2), kA(this.dyn_ltree), kA(this.dyn_dtree), kA(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(eg + 1), this.heap = new Uint16Array(2 * mt + 1), kA(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * mt + 1), kA(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const De = (A) => {
  if (!A)
    return 1;
  const t = A.state;
  return !t || t.strm !== A || t.status !== XA && //#ifdef GZIP
  t.status !== $t && //#endif
  t.status !== kt && t.status !== St && t.status !== Ft && t.status !== xt && t.status !== UA && t.status !== ne ? 1 : 0;
}, Mr = (A) => {
  if (De(A))
    return LA(A, hA);
  A.total_in = A.total_out = 0, A.data_type = Vo;
  const t = A.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = //#ifdef GZIP
  t.wrap === 2 ? $t : (
    //#endif
    t.wrap ? XA : UA
  ), A.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, Uo(t), $;
}, Nr = (A) => {
  const t = Mr(A);
  return t === $ && gg(A.state), t;
}, Ig = (A, t) => De(A) || A.state.wrap !== 2 ? hA : (A.state.gzhead = t, $), qr = (A, t, e, i, n, r) => {
  if (!A)
    return hA;
  let s = 1;
  if (t === Jo && (t = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), n < 1 || n > Po || e !== Ke || i < 8 || i > 15 || t < 0 || t > 9 || r < 0 || r > Oo || i === 8 && s !== 1)
    return LA(A, hA);
  i === 8 && (i = 9);
  const g = new sg();
  return A.state = g, g.strm = A, g.status = XA, g.wrap = s, g.gzhead = null, g.w_bits = i, g.w_size = 1 << g.w_bits, g.w_mask = g.w_size - 1, g.hash_bits = n + 7, g.hash_size = 1 << g.hash_bits, g.hash_mask = g.hash_size - 1, g.hash_shift = ~~((g.hash_bits + Y - 1) / Y), g.window = new Uint8Array(g.w_size * 2), g.head = new Uint16Array(g.hash_size), g.prev = new Uint16Array(g.w_size), g.lit_bufsize = 1 << n + 6, g.pending_buf_size = g.lit_bufsize * 4, g.pending_buf = new Uint8Array(g.pending_buf_size), g.sym_buf = g.lit_bufsize, g.sym_end = (g.lit_bufsize - 1) * 3, g.level = t, g.strategy = r, g.method = e, Nr(A);
}, Bg = (A, t) => qr(A, t, Ke, zo, Zo, Ko), lg = (A, t) => {
  if (De(A) || t > ui || t < 0)
    return A ? LA(A, hA) : hA;
  const e = A.state;
  if (!A.output || A.avail_in !== 0 && !A.input || e.status === ne && t !== IA)
    return LA(A, A.avail_out === 0 ? ot : hA);
  const i = e.last_flush;
  if (e.last_flush = t, e.pending !== 0) {
    if (oA(A), A.avail_out === 0)
      return e.last_flush = -1, $;
  } else if (A.avail_in === 0 && wi(t) <= wi(i) && t !== IA)
    return LA(A, ot);
  if (e.status === ne && A.avail_in !== 0)
    return LA(A, ot);
  if (e.status === XA && e.wrap === 0 && (e.status = UA), e.status === XA) {
    let n = Ke + (e.w_bits - 8 << 4) << 8, r = -1;
    if (e.strategy >= Re || e.level < 2 ? r = 0 : e.level < 6 ? r = 1 : e.level === 6 ? r = 2 : r = 3, n |= r << 6, e.strstart !== 0 && (n |= tg), n += 31 - n % 31, ie(e, n), e.strstart !== 0 && (ie(e, A.adler >>> 16), ie(e, A.adler & 65535)), A.adler = 1, e.status = UA, oA(A), e.pending !== 0)
      return e.last_flush = -1, $;
  }
  if (e.status === $t) {
    if (A.adler = 0, K(e, 31), K(e, 139), K(e, 8), e.gzhead)
      K(
        e,
        (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0)
      ), K(e, e.gzhead.time & 255), K(e, e.gzhead.time >> 8 & 255), K(e, e.gzhead.time >> 16 & 255), K(e, e.gzhead.time >> 24 & 255), K(e, e.level === 9 ? 2 : e.strategy >= Re || e.level < 2 ? 4 : 0), K(e, e.gzhead.os & 255), e.gzhead.extra && e.gzhead.extra.length && (K(e, e.gzhead.extra.length & 255), K(e, e.gzhead.extra.length >> 8 & 255)), e.gzhead.hcrc && (A.adler = W(A.adler, e.pending_buf, e.pending, 0)), e.gzindex = 0, e.status = kt;
    else if (K(e, 0), K(e, 0), K(e, 0), K(e, 0), K(e, 0), K(e, e.level === 9 ? 2 : e.strategy >= Re || e.level < 2 ? 4 : 0), K(e, ig), e.status = UA, oA(A), e.pending !== 0)
      return e.last_flush = -1, $;
  }
  if (e.status === kt) {
    if (e.gzhead.extra) {
      let n = e.pending, r = (e.gzhead.extra.length & 65535) - e.gzindex;
      for (; e.pending + r > e.pending_buf_size; ) {
        let g = e.pending_buf_size - e.pending;
        if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + g), e.pending), e.pending = e.pending_buf_size, e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n)), e.gzindex += g, oA(A), e.pending !== 0)
          return e.last_flush = -1, $;
        n = 0, r -= g;
      }
      let s = new Uint8Array(e.gzhead.extra);
      e.pending_buf.set(s.subarray(e.gzindex, e.gzindex + r), e.pending), e.pending += r, e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n)), e.gzindex = 0;
    }
    e.status = St;
  }
  if (e.status === St) {
    if (e.gzhead.name) {
      let n = e.pending, r;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n)), oA(A), e.pending !== 0)
            return e.last_flush = -1, $;
          n = 0;
        }
        e.gzindex < e.gzhead.name.length ? r = e.gzhead.name.charCodeAt(e.gzindex++) & 255 : r = 0, K(e, r);
      } while (r !== 0);
      e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n)), e.gzindex = 0;
    }
    e.status = Ft;
  }
  if (e.status === Ft) {
    if (e.gzhead.comment) {
      let n = e.pending, r;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n)), oA(A), e.pending !== 0)
            return e.last_flush = -1, $;
          n = 0;
        }
        e.gzindex < e.gzhead.comment.length ? r = e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : r = 0, K(e, r);
      } while (r !== 0);
      e.gzhead.hcrc && e.pending > n && (A.adler = W(A.adler, e.pending_buf, e.pending - n, n));
    }
    e.status = xt;
  }
  if (e.status === xt) {
    if (e.gzhead.hcrc) {
      if (e.pending + 2 > e.pending_buf_size && (oA(A), e.pending !== 0))
        return e.last_flush = -1, $;
      K(e, A.adler & 255), K(e, A.adler >> 8 & 255), A.adler = 0;
    }
    if (e.status = UA, oA(A), e.pending !== 0)
      return e.last_flush = -1, $;
  }
  if (A.avail_in !== 0 || e.lookahead !== 0 || t !== xA && e.status !== ne) {
    let n = e.level === 0 ? Lr(e, t) : e.strategy === Re ? og(e, t) : e.strategy === Yo ? ag(e, t) : ae[e.level].func(e, t);
    if ((n === MA || n === te) && (e.status = ne), n === tA || n === MA)
      return A.avail_out === 0 && (e.last_flush = -1), $;
    if (n === ee && (t === No ? Mo(e) : t !== ui && (pt(e, 0, 0, !1), t === qo && (kA(e.head), e.lookahead === 0 && (e.strstart = 0, e.block_start = 0, e.insert = 0))), oA(A), A.avail_out === 0))
      return e.last_flush = -1, $;
  }
  return t !== IA ? $ : e.wrap <= 0 ? di : (e.wrap === 2 ? (K(e, A.adler & 255), K(e, A.adler >> 8 & 255), K(e, A.adler >> 16 & 255), K(e, A.adler >> 24 & 255), K(e, A.total_in & 255), K(e, A.total_in >> 8 & 255), K(e, A.total_in >> 16 & 255), K(e, A.total_in >> 24 & 255)) : (ie(e, A.adler >>> 16), ie(e, A.adler & 65535)), oA(A), e.wrap > 0 && (e.wrap = -e.wrap), e.pending !== 0 ? $ : di);
}, fg = (A) => {
  if (De(A))
    return hA;
  const t = A.state.status;
  return A.state = null, t === UA ? LA(A, To) : $;
}, Cg = (A, t) => {
  let e = t.length;
  if (De(A))
    return hA;
  const i = A.state, n = i.wrap;
  if (n === 2 || n === 1 && i.status !== XA || i.lookahead)
    return hA;
  if (n === 1 && (A.adler = ce(A.adler, t, e, 0)), i.wrap = 0, e >= i.w_size) {
    n === 0 && (kA(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
    let E = new Uint8Array(i.w_size);
    E.set(t.subarray(e - i.w_size, e), 0), t = E, e = i.w_size;
  }
  const r = A.avail_in, s = A.next_in, g = A.input;
  for (A.avail_in = e, A.next_in = 0, A.input = t, jA(i); i.lookahead >= Y; ) {
    let E = i.strstart, a = i.lookahead - (Y - 1);
    do
      i.ins_h = GA(i, i.ins_h, i.window[E + Y - 1]), i.prev[E & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = E, E++;
    while (--a);
    i.strstart = E, i.lookahead = Y - 1, jA(i);
  }
  return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = Y - 1, i.match_available = 0, A.next_in = s, A.input = g, A.avail_in = r, i.wrap = n, $;
};
var Eg = Bg, cg = qr, Qg = Nr, hg = Mr, ug = Ig, dg = lg, wg = fg, yg = Cg, Dg = "pako deflate (from Nodeca project)", se = {
  deflateInit: Eg,
  deflateInit2: cg,
  deflateReset: Qg,
  deflateResetKeep: hg,
  deflateSetHeader: ug,
  deflate: dg,
  deflateEnd: wg,
  deflateSetDictionary: yg,
  deflateInfo: Dg
};
const pg = (A, t) => Object.prototype.hasOwnProperty.call(A, t);
var mg = function(A) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const i in e)
        pg(e, i) && (A[i] = e[i]);
    }
  }
  return A;
}, kg = (A) => {
  let t = 0;
  for (let i = 0, n = A.length; i < n; i++)
    t += A[i].length;
  const e = new Uint8Array(t);
  for (let i = 0, n = 0, r = A.length; i < r; i++) {
    let s = A[i];
    e.set(s, n), n += s.length;
  }
  return e;
}, Ve = {
  assign: mg,
  flattenChunks: kg
};
let Tr = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Tr = !1;
}
const Qe = new Uint8Array(256);
for (let A = 0; A < 256; A++)
  Qe[A] = A >= 252 ? 6 : A >= 248 ? 5 : A >= 240 ? 4 : A >= 224 ? 3 : A >= 192 ? 2 : 1;
Qe[254] = Qe[254] = 1;
var Sg = (A) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(A);
  let t, e, i, n, r, s = A.length, g = 0;
  for (n = 0; n < s; n++)
    e = A.charCodeAt(n), (e & 64512) === 55296 && n + 1 < s && (i = A.charCodeAt(n + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), n++)), g += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(g), r = 0, n = 0; r < g; n++)
    e = A.charCodeAt(n), (e & 64512) === 55296 && n + 1 < s && (i = A.charCodeAt(n + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), n++)), e < 128 ? t[r++] = e : e < 2048 ? (t[r++] = 192 | e >>> 6, t[r++] = 128 | e & 63) : e < 65536 ? (t[r++] = 224 | e >>> 12, t[r++] = 128 | e >>> 6 & 63, t[r++] = 128 | e & 63) : (t[r++] = 240 | e >>> 18, t[r++] = 128 | e >>> 12 & 63, t[r++] = 128 | e >>> 6 & 63, t[r++] = 128 | e & 63);
  return t;
};
const Fg = (A, t) => {
  if (t < 65534 && A.subarray && Tr)
    return String.fromCharCode.apply(null, A.length === t ? A : A.subarray(0, t));
  let e = "";
  for (let i = 0; i < t; i++)
    e += String.fromCharCode(A[i]);
  return e;
};
var xg = (A, t) => {
  const e = t || A.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(A.subarray(0, t));
  let i, n;
  const r = new Array(e * 2);
  for (n = 0, i = 0; i < e; ) {
    let s = A[i++];
    if (s < 128) {
      r[n++] = s;
      continue;
    }
    let g = Qe[s];
    if (g > 4) {
      r[n++] = 65533, i += g - 1;
      continue;
    }
    for (s &= g === 2 ? 31 : g === 3 ? 15 : 7; g > 1 && i < e; )
      s = s << 6 | A[i++] & 63, g--;
    if (g > 1) {
      r[n++] = 65533;
      continue;
    }
    s < 65536 ? r[n++] = s : (s -= 65536, r[n++] = 55296 | s >> 10 & 1023, r[n++] = 56320 | s & 1023);
  }
  return Fg(r, n);
}, Gg = (A, t) => {
  t = t || A.length, t > A.length && (t = A.length);
  let e = t - 1;
  for (; e >= 0 && (A[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + Qe[A[e]] > t ? e : t;
}, he = {
  string2buf: Sg,
  buf2string: xg,
  utf8border: Gg
};
function bg() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Jr = bg;
const Hr = Object.prototype.toString, {
  Z_NO_FLUSH: _g,
  Z_SYNC_FLUSH: vg,
  Z_FULL_FLUSH: Rg,
  Z_FINISH: Ug,
  Z_OK: Je,
  Z_STREAM_END: Lg,
  Z_DEFAULT_COMPRESSION: Mg,
  Z_DEFAULT_STRATEGY: Ng,
  Z_DEFLATED: qg
} = ye;
function Ai(A) {
  this.options = Ve.assign({
    level: Mg,
    method: qg,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Ng
  }, A || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Jr(), this.strm.avail_out = 0;
  let e = se.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (e !== Je)
    throw new Error(ZA[e]);
  if (t.header && se.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let i;
    if (typeof t.dictionary == "string" ? i = he.string2buf(t.dictionary) : Hr.call(t.dictionary) === "[object ArrayBuffer]" ? i = new Uint8Array(t.dictionary) : i = t.dictionary, e = se.deflateSetDictionary(this.strm, i), e !== Je)
      throw new Error(ZA[e]);
    this._dict_set = !0;
  }
}
Ai.prototype.push = function(A, t) {
  const e = this.strm, i = this.options.chunkSize;
  let n, r;
  if (this.ended)
    return !1;
  for (t === ~~t ? r = t : r = t === !0 ? Ug : _g, typeof A == "string" ? e.input = he.string2buf(A) : Hr.call(A) === "[object ArrayBuffer]" ? e.input = new Uint8Array(A) : e.input = A, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    if (e.avail_out === 0 && (e.output = new Uint8Array(i), e.next_out = 0, e.avail_out = i), (r === vg || r === Rg) && e.avail_out <= 6) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (n = se.deflate(e, r), n === Lg)
      return e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)), n = se.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Je;
    if (e.avail_out === 0) {
      this.onData(e.output);
      continue;
    }
    if (r > 0 && e.next_out > 0) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (e.avail_in === 0) break;
  }
  return !0;
};
Ai.prototype.onData = function(A) {
  this.chunks.push(A);
};
Ai.prototype.onEnd = function(A) {
  A === Je && (this.result = Ve.flattenChunks(this.chunks)), this.chunks = [], this.err = A, this.msg = this.strm.msg;
};
const Ue = 16209, Tg = 16191;
var Jg = function(t, e) {
  let i, n, r, s, g, E, a, o, I, f, B, l, h, C, c, u, D, d, p, Q, w, y, k, F;
  const m = t.state;
  i = t.next_in, k = t.input, n = i + (t.avail_in - 5), r = t.next_out, F = t.output, s = r - (e - t.avail_out), g = r + (t.avail_out - 257), E = m.dmax, a = m.wsize, o = m.whave, I = m.wnext, f = m.window, B = m.hold, l = m.bits, h = m.lencode, C = m.distcode, c = (1 << m.lenbits) - 1, u = (1 << m.distbits) - 1;
  A:
    do {
      l < 15 && (B += k[i++] << l, l += 8, B += k[i++] << l, l += 8), D = h[B & c];
      e:
        for (; ; ) {
          if (d = D >>> 24, B >>>= d, l -= d, d = D >>> 16 & 255, d === 0)
            F[r++] = D & 65535;
          else if (d & 16) {
            p = D & 65535, d &= 15, d && (l < d && (B += k[i++] << l, l += 8), p += B & (1 << d) - 1, B >>>= d, l -= d), l < 15 && (B += k[i++] << l, l += 8, B += k[i++] << l, l += 8), D = C[B & u];
            t:
              for (; ; ) {
                if (d = D >>> 24, B >>>= d, l -= d, d = D >>> 16 & 255, d & 16) {
                  if (Q = D & 65535, d &= 15, l < d && (B += k[i++] << l, l += 8, l < d && (B += k[i++] << l, l += 8)), Q += B & (1 << d) - 1, Q > E) {
                    t.msg = "invalid distance too far back", m.mode = Ue;
                    break A;
                  }
                  if (B >>>= d, l -= d, d = r - s, Q > d) {
                    if (d = Q - d, d > o && m.sane) {
                      t.msg = "invalid distance too far back", m.mode = Ue;
                      break A;
                    }
                    if (w = 0, y = f, I === 0) {
                      if (w += a - d, d < p) {
                        p -= d;
                        do
                          F[r++] = f[w++];
                        while (--d);
                        w = r - Q, y = F;
                      }
                    } else if (I < d) {
                      if (w += a + I - d, d -= I, d < p) {
                        p -= d;
                        do
                          F[r++] = f[w++];
                        while (--d);
                        if (w = 0, I < p) {
                          d = I, p -= d;
                          do
                            F[r++] = f[w++];
                          while (--d);
                          w = r - Q, y = F;
                        }
                      }
                    } else if (w += I - d, d < p) {
                      p -= d;
                      do
                        F[r++] = f[w++];
                      while (--d);
                      w = r - Q, y = F;
                    }
                    for (; p > 2; )
                      F[r++] = y[w++], F[r++] = y[w++], F[r++] = y[w++], p -= 3;
                    p && (F[r++] = y[w++], p > 1 && (F[r++] = y[w++]));
                  } else {
                    w = r - Q;
                    do
                      F[r++] = F[w++], F[r++] = F[w++], F[r++] = F[w++], p -= 3;
                    while (p > 2);
                    p && (F[r++] = F[w++], p > 1 && (F[r++] = F[w++]));
                  }
                } else if (d & 64) {
                  t.msg = "invalid distance code", m.mode = Ue;
                  break A;
                } else {
                  D = C[(D & 65535) + (B & (1 << d) - 1)];
                  continue t;
                }
                break;
              }
          } else if (d & 64)
            if (d & 32) {
              m.mode = Tg;
              break A;
            } else {
              t.msg = "invalid literal/length code", m.mode = Ue;
              break A;
            }
          else {
            D = h[(D & 65535) + (B & (1 << d) - 1)];
            continue e;
          }
          break;
        }
    } while (i < n && r < g);
  p = l >> 3, i -= p, l -= p << 3, B &= (1 << l) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < n ? 5 + (n - i) : 5 - (i - n), t.avail_out = r < g ? 257 + (g - r) : 257 - (r - g), m.hold = B, m.bits = l;
};
const OA = 15, yi = 852, Di = 592, pi = 0, st = 1, mi = 2, Hg = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Yg = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Og = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Kg = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Vg = (A, t, e, i, n, r, s, g) => {
  const E = g.bits;
  let a = 0, o = 0, I = 0, f = 0, B = 0, l = 0, h = 0, C = 0, c = 0, u = 0, D, d, p, Q, w, y = null, k;
  const F = new Uint16Array(OA + 1), m = new Uint16Array(OA + 1);
  let b = null, G, M, x;
  for (a = 0; a <= OA; a++)
    F[a] = 0;
  for (o = 0; o < i; o++)
    F[t[e + o]]++;
  for (B = E, f = OA; f >= 1 && F[f] === 0; f--)
    ;
  if (B > f && (B = f), f === 0)
    return n[r++] = 1 << 24 | 64 << 16 | 0, n[r++] = 1 << 24 | 64 << 16 | 0, g.bits = 1, 0;
  for (I = 1; I < f && F[I] === 0; I++)
    ;
  for (B < I && (B = I), C = 1, a = 1; a <= OA; a++)
    if (C <<= 1, C -= F[a], C < 0)
      return -1;
  if (C > 0 && (A === pi || f !== 1))
    return -1;
  for (m[1] = 0, a = 1; a < OA; a++)
    m[a + 1] = m[a] + F[a];
  for (o = 0; o < i; o++)
    t[e + o] !== 0 && (s[m[t[e + o]]++] = o);
  if (A === pi ? (y = b = s, k = 20) : A === st ? (y = Hg, b = Yg, k = 257) : (y = Og, b = Kg, k = 0), u = 0, o = 0, a = I, w = r, l = B, h = 0, p = -1, c = 1 << B, Q = c - 1, A === st && c > yi || A === mi && c > Di)
    return 1;
  for (; ; ) {
    G = a - h, s[o] + 1 < k ? (M = 0, x = s[o]) : s[o] >= k ? (M = b[s[o] - k], x = y[s[o] - k]) : (M = 96, x = 0), D = 1 << a - h, d = 1 << l, I = d;
    do
      d -= D, n[w + (u >> h) + d] = G << 24 | M << 16 | x | 0;
    while (d !== 0);
    for (D = 1 << a - 1; u & D; )
      D >>= 1;
    if (D !== 0 ? (u &= D - 1, u += D) : u = 0, o++, --F[a] === 0) {
      if (a === f)
        break;
      a = t[e + s[o]];
    }
    if (a > B && (u & Q) !== p) {
      for (h === 0 && (h = B), w += I, l = a - h, C = 1 << l; l + h < f && (C -= F[l + h], !(C <= 0)); )
        l++, C <<= 1;
      if (c += 1 << l, A === st && c > yi || A === mi && c > Di)
        return 1;
      p = u & Q, n[p] = B << 24 | l << 16 | w - r | 0;
    }
  }
  return u !== 0 && (n[w + u] = a - h << 24 | 64 << 16 | 0), g.bits = B, 0;
};
var Ie = Vg;
const Pg = 0, Yr = 1, Or = 2, {
  Z_FINISH: ki,
  Z_BLOCK: zg,
  Z_TREES: Le,
  Z_OK: NA,
  Z_STREAM_END: Zg,
  Z_NEED_DICT: Xg,
  Z_STREAM_ERROR: BA,
  Z_DATA_ERROR: Kr,
  Z_MEM_ERROR: Vr,
  Z_BUF_ERROR: jg,
  Z_DEFLATED: Si
} = ye, Pe = 16180, Fi = 16181, xi = 16182, Gi = 16183, bi = 16184, _i = 16185, vi = 16186, Ri = 16187, Ui = 16188, Li = 16189, He = 16190, dA = 16191, It = 16192, Mi = 16193, Bt = 16194, Ni = 16195, qi = 16196, Ti = 16197, Ji = 16198, Me = 16199, Ne = 16200, Hi = 16201, Yi = 16202, Oi = 16203, Ki = 16204, Vi = 16205, lt = 16206, Pi = 16207, zi = 16208, z = 16209, Pr = 16210, zr = 16211, Wg = 852, $g = 592, As = 15, es = As, Zi = (A) => (A >>> 24 & 255) + (A >>> 8 & 65280) + ((A & 65280) << 8) + ((A & 255) << 24);
function ts() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const TA = (A) => {
  if (!A)
    return 1;
  const t = A.state;
  return !t || t.strm !== A || t.mode < Pe || t.mode > zr ? 1 : 0;
}, Zr = (A) => {
  if (TA(A))
    return BA;
  const t = A.state;
  return A.total_in = A.total_out = t.total = 0, A.msg = "", t.wrap && (A.adler = t.wrap & 1), t.mode = Pe, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Wg), t.distcode = t.distdyn = new Int32Array($g), t.sane = 1, t.back = -1, NA;
}, Xr = (A) => {
  if (TA(A))
    return BA;
  const t = A.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Zr(A);
}, jr = (A, t) => {
  let e;
  if (TA(A))
    return BA;
  const i = A.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? BA : (i.window !== null && i.wbits !== t && (i.window = null), i.wrap = e, i.wbits = t, Xr(A));
}, Wr = (A, t) => {
  if (!A)
    return BA;
  const e = new ts();
  A.state = e, e.strm = A, e.window = null, e.mode = Pe;
  const i = jr(A, t);
  return i !== NA && (A.state = null), i;
}, is = (A) => Wr(A, es);
let Xi = !0, ft, Ct;
const rs = (A) => {
  if (Xi) {
    ft = new Int32Array(512), Ct = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      A.lens[t++] = 8;
    for (; t < 256; )
      A.lens[t++] = 9;
    for (; t < 280; )
      A.lens[t++] = 7;
    for (; t < 288; )
      A.lens[t++] = 8;
    for (Ie(Yr, A.lens, 0, 288, ft, 0, A.work, { bits: 9 }), t = 0; t < 32; )
      A.lens[t++] = 5;
    Ie(Or, A.lens, 0, 32, Ct, 0, A.work, { bits: 5 }), Xi = !1;
  }
  A.lencode = ft, A.lenbits = 9, A.distcode = Ct, A.distbits = 5;
}, $r = (A, t, e, i) => {
  let n;
  const r = A.state;
  return r.window === null && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new Uint8Array(r.wsize)), i >= r.wsize ? (r.window.set(t.subarray(e - r.wsize, e), 0), r.wnext = 0, r.whave = r.wsize) : (n = r.wsize - r.wnext, n > i && (n = i), r.window.set(t.subarray(e - i, e - i + n), r.wnext), i -= n, i ? (r.window.set(t.subarray(e - i, e), 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += n, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += n))), 0;
}, ns = (A, t) => {
  let e, i, n, r, s, g, E, a, o, I, f, B, l, h, C = 0, c, u, D, d, p, Q, w, y;
  const k = new Uint8Array(4);
  let F, m;
  const b = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (TA(A) || !A.output || !A.input && A.avail_in !== 0)
    return BA;
  e = A.state, e.mode === dA && (e.mode = It), s = A.next_out, n = A.output, E = A.avail_out, r = A.next_in, i = A.input, g = A.avail_in, a = e.hold, o = e.bits, I = g, f = E, y = NA;
  A:
    for (; ; )
      switch (e.mode) {
        case Pe:
          if (e.wrap === 0) {
            e.mode = It;
            break;
          }
          for (; o < 16; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if (e.wrap & 2 && a === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, k[0] = a & 255, k[1] = a >>> 8 & 255, e.check = W(e.check, k, 2, 0), a = 0, o = 0, e.mode = Fi;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || /* check if zlib header allowed */
          (((a & 255) << 8) + (a >> 8)) % 31) {
            A.msg = "incorrect header check", e.mode = z;
            break;
          }
          if ((a & 15) !== Si) {
            A.msg = "unknown compression method", e.mode = z;
            break;
          }
          if (a >>>= 4, o -= 4, w = (a & 15) + 8, e.wbits === 0 && (e.wbits = w), w > 15 || w > e.wbits) {
            A.msg = "invalid window size", e.mode = z;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, A.adler = e.check = 1, e.mode = a & 512 ? Li : dA, a = 0, o = 0;
          break;
        case Fi:
          for (; o < 16; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if (e.flags = a, (e.flags & 255) !== Si) {
            A.msg = "unknown compression method", e.mode = z;
            break;
          }
          if (e.flags & 57344) {
            A.msg = "unknown header flags set", e.mode = z;
            break;
          }
          e.head && (e.head.text = a >> 8 & 1), e.flags & 512 && e.wrap & 4 && (k[0] = a & 255, k[1] = a >>> 8 & 255, e.check = W(e.check, k, 2, 0)), a = 0, o = 0, e.mode = xi;
        case xi:
          for (; o < 32; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          e.head && (e.head.time = a), e.flags & 512 && e.wrap & 4 && (k[0] = a & 255, k[1] = a >>> 8 & 255, k[2] = a >>> 16 & 255, k[3] = a >>> 24 & 255, e.check = W(e.check, k, 4, 0)), a = 0, o = 0, e.mode = Gi;
        case Gi:
          for (; o < 16; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          e.head && (e.head.xflags = a & 255, e.head.os = a >> 8), e.flags & 512 && e.wrap & 4 && (k[0] = a & 255, k[1] = a >>> 8 & 255, e.check = W(e.check, k, 2, 0)), a = 0, o = 0, e.mode = bi;
        case bi:
          if (e.flags & 1024) {
            for (; o < 16; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            e.length = a, e.head && (e.head.extra_len = a), e.flags & 512 && e.wrap & 4 && (k[0] = a & 255, k[1] = a >>> 8 & 255, e.check = W(e.check, k, 2, 0)), a = 0, o = 0;
          } else e.head && (e.head.extra = null);
          e.mode = _i;
        case _i:
          if (e.flags & 1024 && (B = e.length, B > g && (B = g), B && (e.head && (w = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            i.subarray(
              r,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              r + B
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            w
          )), e.flags & 512 && e.wrap & 4 && (e.check = W(e.check, i, B, r)), g -= B, r += B, e.length -= B), e.length))
            break A;
          e.length = 0, e.mode = vi;
        case vi:
          if (e.flags & 2048) {
            if (g === 0)
              break A;
            B = 0;
            do
              w = i[r + B++], e.head && w && e.length < 65536 && (e.head.name += String.fromCharCode(w));
            while (w && B < g);
            if (e.flags & 512 && e.wrap & 4 && (e.check = W(e.check, i, B, r)), g -= B, r += B, w)
              break A;
          } else e.head && (e.head.name = null);
          e.length = 0, e.mode = Ri;
        case Ri:
          if (e.flags & 4096) {
            if (g === 0)
              break A;
            B = 0;
            do
              w = i[r + B++], e.head && w && e.length < 65536 && (e.head.comment += String.fromCharCode(w));
            while (w && B < g);
            if (e.flags & 512 && e.wrap & 4 && (e.check = W(e.check, i, B, r)), g -= B, r += B, w)
              break A;
          } else e.head && (e.head.comment = null);
          e.mode = Ui;
        case Ui:
          if (e.flags & 512) {
            for (; o < 16; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            if (e.wrap & 4 && a !== (e.check & 65535)) {
              A.msg = "header crc mismatch", e.mode = z;
              break;
            }
            a = 0, o = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), A.adler = e.check = 0, e.mode = dA;
          break;
        case Li:
          for (; o < 32; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          A.adler = e.check = Zi(a), a = 0, o = 0, e.mode = He;
        case He:
          if (e.havedict === 0)
            return A.next_out = s, A.avail_out = E, A.next_in = r, A.avail_in = g, e.hold = a, e.bits = o, Xg;
          A.adler = e.check = 1, e.mode = dA;
        case dA:
          if (t === zg || t === Le)
            break A;
        case It:
          if (e.last) {
            a >>>= o & 7, o -= o & 7, e.mode = lt;
            break;
          }
          for (; o < 3; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          switch (e.last = a & 1, a >>>= 1, o -= 1, a & 3) {
            case 0:
              e.mode = Mi;
              break;
            case 1:
              if (rs(e), e.mode = Me, t === Le) {
                a >>>= 2, o -= 2;
                break A;
              }
              break;
            case 2:
              e.mode = qi;
              break;
            case 3:
              A.msg = "invalid block type", e.mode = z;
          }
          a >>>= 2, o -= 2;
          break;
        case Mi:
          for (a >>>= o & 7, o -= o & 7; o < 32; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if ((a & 65535) !== (a >>> 16 ^ 65535)) {
            A.msg = "invalid stored block lengths", e.mode = z;
            break;
          }
          if (e.length = a & 65535, a = 0, o = 0, e.mode = Bt, t === Le)
            break A;
        case Bt:
          e.mode = Ni;
        case Ni:
          if (B = e.length, B) {
            if (B > g && (B = g), B > E && (B = E), B === 0)
              break A;
            n.set(i.subarray(r, r + B), s), g -= B, r += B, E -= B, s += B, e.length -= B;
            break;
          }
          e.mode = dA;
          break;
        case qi:
          for (; o < 14; ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if (e.nlen = (a & 31) + 257, a >>>= 5, o -= 5, e.ndist = (a & 31) + 1, a >>>= 5, o -= 5, e.ncode = (a & 15) + 4, a >>>= 4, o -= 4, e.nlen > 286 || e.ndist > 30) {
            A.msg = "too many length or distance symbols", e.mode = z;
            break;
          }
          e.have = 0, e.mode = Ti;
        case Ti:
          for (; e.have < e.ncode; ) {
            for (; o < 3; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            e.lens[b[e.have++]] = a & 7, a >>>= 3, o -= 3;
          }
          for (; e.have < 19; )
            e.lens[b[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, F = { bits: e.lenbits }, y = Ie(Pg, e.lens, 0, 19, e.lencode, 0, e.work, F), e.lenbits = F.bits, y) {
            A.msg = "invalid code lengths set", e.mode = z;
            break;
          }
          e.have = 0, e.mode = Ji;
        case Ji:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; C = e.lencode[a & (1 << e.lenbits) - 1], c = C >>> 24, u = C >>> 16 & 255, D = C & 65535, !(c <= o); ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            if (D < 16)
              a >>>= c, o -= c, e.lens[e.have++] = D;
            else {
              if (D === 16) {
                for (m = c + 2; o < m; ) {
                  if (g === 0)
                    break A;
                  g--, a += i[r++] << o, o += 8;
                }
                if (a >>>= c, o -= c, e.have === 0) {
                  A.msg = "invalid bit length repeat", e.mode = z;
                  break;
                }
                w = e.lens[e.have - 1], B = 3 + (a & 3), a >>>= 2, o -= 2;
              } else if (D === 17) {
                for (m = c + 3; o < m; ) {
                  if (g === 0)
                    break A;
                  g--, a += i[r++] << o, o += 8;
                }
                a >>>= c, o -= c, w = 0, B = 3 + (a & 7), a >>>= 3, o -= 3;
              } else {
                for (m = c + 7; o < m; ) {
                  if (g === 0)
                    break A;
                  g--, a += i[r++] << o, o += 8;
                }
                a >>>= c, o -= c, w = 0, B = 11 + (a & 127), a >>>= 7, o -= 7;
              }
              if (e.have + B > e.nlen + e.ndist) {
                A.msg = "invalid bit length repeat", e.mode = z;
                break;
              }
              for (; B--; )
                e.lens[e.have++] = w;
            }
          }
          if (e.mode === z)
            break;
          if (e.lens[256] === 0) {
            A.msg = "invalid code -- missing end-of-block", e.mode = z;
            break;
          }
          if (e.lenbits = 9, F = { bits: e.lenbits }, y = Ie(Yr, e.lens, 0, e.nlen, e.lencode, 0, e.work, F), e.lenbits = F.bits, y) {
            A.msg = "invalid literal/lengths set", e.mode = z;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, F = { bits: e.distbits }, y = Ie(Or, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, F), e.distbits = F.bits, y) {
            A.msg = "invalid distances set", e.mode = z;
            break;
          }
          if (e.mode = Me, t === Le)
            break A;
        case Me:
          e.mode = Ne;
        case Ne:
          if (g >= 6 && E >= 258) {
            A.next_out = s, A.avail_out = E, A.next_in = r, A.avail_in = g, e.hold = a, e.bits = o, Jg(A, f), s = A.next_out, n = A.output, E = A.avail_out, r = A.next_in, i = A.input, g = A.avail_in, a = e.hold, o = e.bits, e.mode === dA && (e.back = -1);
            break;
          }
          for (e.back = 0; C = e.lencode[a & (1 << e.lenbits) - 1], c = C >>> 24, u = C >>> 16 & 255, D = C & 65535, !(c <= o); ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if (u && !(u & 240)) {
            for (d = c, p = u, Q = D; C = e.lencode[Q + ((a & (1 << d + p) - 1) >> d)], c = C >>> 24, u = C >>> 16 & 255, D = C & 65535, !(d + c <= o); ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            a >>>= d, o -= d, e.back += d;
          }
          if (a >>>= c, o -= c, e.back += c, e.length = D, u === 0) {
            e.mode = Vi;
            break;
          }
          if (u & 32) {
            e.back = -1, e.mode = dA;
            break;
          }
          if (u & 64) {
            A.msg = "invalid literal/length code", e.mode = z;
            break;
          }
          e.extra = u & 15, e.mode = Hi;
        case Hi:
          if (e.extra) {
            for (m = e.extra; o < m; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            e.length += a & (1 << e.extra) - 1, a >>>= e.extra, o -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = Yi;
        case Yi:
          for (; C = e.distcode[a & (1 << e.distbits) - 1], c = C >>> 24, u = C >>> 16 & 255, D = C & 65535, !(c <= o); ) {
            if (g === 0)
              break A;
            g--, a += i[r++] << o, o += 8;
          }
          if (!(u & 240)) {
            for (d = c, p = u, Q = D; C = e.distcode[Q + ((a & (1 << d + p) - 1) >> d)], c = C >>> 24, u = C >>> 16 & 255, D = C & 65535, !(d + c <= o); ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            a >>>= d, o -= d, e.back += d;
          }
          if (a >>>= c, o -= c, e.back += c, u & 64) {
            A.msg = "invalid distance code", e.mode = z;
            break;
          }
          e.offset = D, e.extra = u & 15, e.mode = Oi;
        case Oi:
          if (e.extra) {
            for (m = e.extra; o < m; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            e.offset += a & (1 << e.extra) - 1, a >>>= e.extra, o -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            A.msg = "invalid distance too far back", e.mode = z;
            break;
          }
          e.mode = Ki;
        case Ki:
          if (E === 0)
            break A;
          if (B = f - E, e.offset > B) {
            if (B = e.offset - B, B > e.whave && e.sane) {
              A.msg = "invalid distance too far back", e.mode = z;
              break;
            }
            B > e.wnext ? (B -= e.wnext, l = e.wsize - B) : l = e.wnext - B, B > e.length && (B = e.length), h = e.window;
          } else
            h = n, l = s - e.offset, B = e.length;
          B > E && (B = E), E -= B, e.length -= B;
          do
            n[s++] = h[l++];
          while (--B);
          e.length === 0 && (e.mode = Ne);
          break;
        case Vi:
          if (E === 0)
            break A;
          n[s++] = e.length, E--, e.mode = Ne;
          break;
        case lt:
          if (e.wrap) {
            for (; o < 32; ) {
              if (g === 0)
                break A;
              g--, a |= i[r++] << o, o += 8;
            }
            if (f -= E, A.total_out += f, e.total += f, e.wrap & 4 && f && (A.adler = e.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            e.flags ? W(e.check, n, f, s - f) : ce(e.check, n, f, s - f)), f = E, e.wrap & 4 && (e.flags ? a : Zi(a)) !== e.check) {
              A.msg = "incorrect data check", e.mode = z;
              break;
            }
            a = 0, o = 0;
          }
          e.mode = Pi;
        case Pi:
          if (e.wrap && e.flags) {
            for (; o < 32; ) {
              if (g === 0)
                break A;
              g--, a += i[r++] << o, o += 8;
            }
            if (e.wrap & 4 && a !== (e.total & 4294967295)) {
              A.msg = "incorrect length check", e.mode = z;
              break;
            }
            a = 0, o = 0;
          }
          e.mode = zi;
        case zi:
          y = Zg;
          break A;
        case z:
          y = Kr;
          break A;
        case Pr:
          return Vr;
        case zr:
        default:
          return BA;
      }
  return A.next_out = s, A.avail_out = E, A.next_in = r, A.avail_in = g, e.hold = a, e.bits = o, (e.wsize || f !== A.avail_out && e.mode < z && (e.mode < lt || t !== ki)) && $r(A, A.output, A.next_out, f - A.avail_out), I -= A.avail_in, f -= A.avail_out, A.total_in += I, A.total_out += f, e.total += f, e.wrap & 4 && f && (A.adler = e.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  e.flags ? W(e.check, n, f, A.next_out - f) : ce(e.check, n, f, A.next_out - f)), A.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === dA ? 128 : 0) + (e.mode === Me || e.mode === Bt ? 256 : 0), (I === 0 && f === 0 || t === ki) && y === NA && (y = jg), y;
}, as = (A) => {
  if (TA(A))
    return BA;
  let t = A.state;
  return t.window && (t.window = null), A.state = null, NA;
}, os = (A, t) => {
  if (TA(A))
    return BA;
  const e = A.state;
  return e.wrap & 2 ? (e.head = t, t.done = !1, NA) : BA;
}, gs = (A, t) => {
  const e = t.length;
  let i, n, r;
  return TA(A) || (i = A.state, i.wrap !== 0 && i.mode !== He) ? BA : i.mode === He && (n = 1, n = ce(n, t, e, 0), n !== i.check) ? Kr : (r = $r(A, t, e, e), r ? (i.mode = Pr, Vr) : (i.havedict = 1, NA));
};
var ss = Xr, Is = jr, Bs = Zr, ls = is, fs = Wr, Cs = ns, Es = as, cs = os, Qs = gs, hs = "pako inflate (from Nodeca project)", DA = {
  inflateReset: ss,
  inflateReset2: Is,
  inflateResetKeep: Bs,
  inflateInit: ls,
  inflateInit2: fs,
  inflate: Cs,
  inflateEnd: Es,
  inflateGetHeader: cs,
  inflateSetDictionary: Qs,
  inflateInfo: hs
};
function us() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var ds = us;
const An = Object.prototype.toString, {
  Z_NO_FLUSH: ws,
  Z_FINISH: ys,
  Z_OK: ue,
  Z_STREAM_END: Et,
  Z_NEED_DICT: ct,
  Z_STREAM_ERROR: Ds,
  Z_DATA_ERROR: ji,
  Z_MEM_ERROR: ps
} = ye;
function pe(A) {
  this.options = Ve.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, A || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(A && A.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Jr(), this.strm.avail_out = 0;
  let e = DA.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== ue)
    throw new Error(ZA[e]);
  if (this.header = new ds(), DA.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = he.string2buf(t.dictionary) : An.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = DA.inflateSetDictionary(this.strm, t.dictionary), e !== ue)))
    throw new Error(ZA[e]);
}
pe.prototype.push = function(A, t) {
  const e = this.strm, i = this.options.chunkSize, n = this.options.dictionary;
  let r, s, g;
  if (this.ended) return !1;
  for (t === ~~t ? s = t : s = t === !0 ? ys : ws, An.call(A) === "[object ArrayBuffer]" ? e.input = new Uint8Array(A) : e.input = A, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(i), e.next_out = 0, e.avail_out = i), r = DA.inflate(e, s), r === ct && n && (r = DA.inflateSetDictionary(e, n), r === ue ? r = DA.inflate(e, s) : r === ji && (r = ct)); e.avail_in > 0 && r === Et && e.state.wrap > 0 && A[e.next_in] !== 0; )
      DA.inflateReset(e), r = DA.inflate(e, s);
    switch (r) {
      case Ds:
      case ji:
      case ct:
      case ps:
        return this.onEnd(r), this.ended = !0, !1;
    }
    if (g = e.avail_out, e.next_out && (e.avail_out === 0 || r === Et))
      if (this.options.to === "string") {
        let E = he.utf8border(e.output, e.next_out), a = e.next_out - E, o = he.buf2string(e.output, E);
        e.next_out = a, e.avail_out = i - a, a && e.output.set(e.output.subarray(E, E + a), 0), this.onData(o);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
    if (!(r === ue && g === 0)) {
      if (r === Et)
        return r = DA.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, !0;
      if (e.avail_in === 0) break;
    }
  }
  return !0;
};
pe.prototype.onData = function(A) {
  this.chunks.push(A);
};
pe.prototype.onEnd = function(A) {
  A === ue && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Ve.flattenChunks(this.chunks)), this.chunks = [], this.err = A, this.msg = this.strm.msg;
};
function ei(A, t) {
  const e = new pe(t);
  if (e.push(A), e.err) throw e.msg || ZA[e.err];
  return e.result;
}
function ms(A, t) {
  return t = t || {}, t.raw = !0, ei(A, t);
}
var ks = pe, Ss = ei, Fs = ms, xs = ei, Gs = ye, bs = {
  Inflate: ks,
  inflate: Ss,
  inflateRaw: Fs,
  ungzip: xs,
  constants: Gs
};
const { Inflate: rI, inflate: _s, inflateRaw: nI, ungzip: aI } = bs;
var en = _s;
class vs extends qA {
  decodeBlock(t) {
    return en(new Uint8Array(t)).buffer;
  }
}
const Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" }));
class Us extends qA {
  decodeBlock(t) {
    const e = new DataView(t), i = [];
    for (let n = 0; n < t.byteLength; ++n) {
      let r = e.getInt8(n);
      if (r < 0) {
        const s = e.getUint8(n + 1);
        r = -r;
        for (let g = 0; g <= r; ++g)
          i.push(s);
        n += 1;
      } else {
        for (let s = 0; s <= r; ++s)
          i.push(e.getUint8(n + s + 1));
        n += r + 1;
      }
    }
    return new Uint8Array(i).buffer;
  }
}
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" }));
var tn = { exports: {} };
(function(A) {
  /* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */
  (function() {
    var t = function() {
      var r = {};
      r.defaultNoDataValue = -34027999387901484e22, r.decode = function(I, f) {
        f = f || {};
        var B = f.encodedMaskData || f.encodedMaskData === null, l = a(I, f.inputOffset || 0, B), h = f.noDataValue !== null ? f.noDataValue : r.defaultNoDataValue, C = s(
          l,
          f.pixelType || Float32Array,
          f.encodedMaskData,
          h,
          f.returnMask
        ), c = {
          width: l.width,
          height: l.height,
          pixelData: C.resultPixels,
          minValue: C.minValue,
          maxValue: l.pixels.maxValue,
          noDataValue: h
        };
        return C.resultMask && (c.maskData = C.resultMask), f.returnEncodedMask && l.mask && (c.encodedMaskData = l.mask.bitset ? l.mask.bitset : null), f.returnFileInfo && (c.fileInfo = g(l), f.computeUsedBitDepths && (c.fileInfo.bitDepths = E(l))), c;
      };
      var s = function(I, f, B, l, h) {
        var C = 0, c = I.pixels.numBlocksX, u = I.pixels.numBlocksY, D = Math.floor(I.width / c), d = Math.floor(I.height / u), p = 2 * I.maxZError, Q = Number.MAX_VALUE, w;
        B = B || (I.mask ? I.mask.bitset : null);
        var y, k;
        y = new f(I.width * I.height), h && B && (k = new Uint8Array(I.width * I.height));
        for (var F = new Float32Array(D * d), m, b, G = 0; G <= u; G++) {
          var M = G !== u ? d : I.height % u;
          if (M !== 0)
            for (var x = 0; x <= c; x++) {
              var S = x !== c ? D : I.width % c;
              if (S !== 0) {
                var U = G * I.width * d + x * D, _ = I.width - S, R = I.pixels.blocks[C], N, L, O;
                R.encoding < 2 ? (R.encoding === 0 ? N = R.rawData : (o(R.stuffedData, R.bitsPerPixel, R.numValidPixels, R.offset, p, F, I.pixels.maxValue), N = F), L = 0) : R.encoding === 2 ? O = 0 : O = R.offset;
                var P;
                if (B)
                  for (b = 0; b < M; b++) {
                    for (U & 7 && (P = B[U >> 3], P <<= U & 7), m = 0; m < S; m++)
                      U & 7 || (P = B[U >> 3]), P & 128 ? (k && (k[U] = 1), w = R.encoding < 2 ? N[L++] : O, Q = Q > w ? w : Q, y[U++] = w) : (k && (k[U] = 0), y[U++] = l), P <<= 1;
                    U += _;
                  }
                else if (R.encoding < 2)
                  for (b = 0; b < M; b++) {
                    for (m = 0; m < S; m++)
                      w = N[L++], Q = Q > w ? w : Q, y[U++] = w;
                    U += _;
                  }
                else
                  for (Q = Q > O ? O : Q, b = 0; b < M; b++) {
                    for (m = 0; m < S; m++)
                      y[U++] = O;
                    U += _;
                  }
                if (R.encoding === 1 && L !== R.numValidPixels)
                  throw "Block and Mask do not match";
                C++;
              }
            }
        }
        return {
          resultPixels: y,
          resultMask: k,
          minValue: Q
        };
      }, g = function(I) {
        return {
          fileIdentifierString: I.fileIdentifierString,
          fileVersion: I.fileVersion,
          imageType: I.imageType,
          height: I.height,
          width: I.width,
          maxZError: I.maxZError,
          eofOffset: I.eofOffset,
          mask: I.mask ? {
            numBlocksX: I.mask.numBlocksX,
            numBlocksY: I.mask.numBlocksY,
            numBytes: I.mask.numBytes,
            maxValue: I.mask.maxValue
          } : null,
          pixels: {
            numBlocksX: I.pixels.numBlocksX,
            numBlocksY: I.pixels.numBlocksY,
            numBytes: I.pixels.numBytes,
            maxValue: I.pixels.maxValue,
            noDataValue: I.noDataValue
          }
        };
      }, E = function(I) {
        for (var f = I.pixels.numBlocksX * I.pixels.numBlocksY, B = {}, l = 0; l < f; l++) {
          var h = I.pixels.blocks[l];
          h.encoding === 0 ? B.float32 = !0 : h.encoding === 1 ? B[h.bitsPerPixel] = !0 : B[0] = !0;
        }
        return Object.keys(B);
      }, a = function(I, f, B) {
        var l = {}, h = new Uint8Array(I, f, 10);
        if (l.fileIdentifierString = String.fromCharCode.apply(null, h), l.fileIdentifierString.trim() !== "CntZImage")
          throw "Unexpected file identifier string: " + l.fileIdentifierString;
        f += 10;
        var C = new DataView(I, f, 24);
        if (l.fileVersion = C.getInt32(0, !0), l.imageType = C.getInt32(4, !0), l.height = C.getUint32(8, !0), l.width = C.getUint32(12, !0), l.maxZError = C.getFloat64(16, !0), f += 24, !B)
          if (C = new DataView(I, f, 16), l.mask = {}, l.mask.numBlocksY = C.getUint32(0, !0), l.mask.numBlocksX = C.getUint32(4, !0), l.mask.numBytes = C.getUint32(8, !0), l.mask.maxValue = C.getFloat32(12, !0), f += 16, l.mask.numBytes > 0) {
            var c = new Uint8Array(Math.ceil(l.width * l.height / 8));
            C = new DataView(I, f, l.mask.numBytes);
            var u = C.getInt16(0, !0), D = 2, d = 0;
            do {
              if (u > 0)
                for (; u--; )
                  c[d++] = C.getUint8(D++);
              else {
                var p = C.getUint8(D++);
                for (u = -u; u--; )
                  c[d++] = p;
              }
              u = C.getInt16(D, !0), D += 2;
            } while (D < l.mask.numBytes);
            if (u !== -32768 || d < c.length)
              throw "Unexpected end of mask RLE encoding";
            l.mask.bitset = c, f += l.mask.numBytes;
          } else l.mask.numBytes | l.mask.numBlocksY | l.mask.maxValue || (l.mask.bitset = new Uint8Array(Math.ceil(l.width * l.height / 8)));
        C = new DataView(I, f, 16), l.pixels = {}, l.pixels.numBlocksY = C.getUint32(0, !0), l.pixels.numBlocksX = C.getUint32(4, !0), l.pixels.numBytes = C.getUint32(8, !0), l.pixels.maxValue = C.getFloat32(12, !0), f += 16;
        var Q = l.pixels.numBlocksX, w = l.pixels.numBlocksY, y = Q + (l.width % Q > 0 ? 1 : 0), k = w + (l.height % w > 0 ? 1 : 0);
        l.pixels.blocks = new Array(y * k);
        for (var F = 0, m = 0; m < k; m++)
          for (var b = 0; b < y; b++) {
            var G = 0, M = I.byteLength - f;
            C = new DataView(I, f, Math.min(10, M));
            var x = {};
            l.pixels.blocks[F++] = x;
            var S = C.getUint8(0);
            if (G++, x.encoding = S & 63, x.encoding > 3)
              throw "Invalid block encoding (" + x.encoding + ")";
            if (x.encoding === 2) {
              f++;
              continue;
            }
            if (S !== 0 && S !== 2) {
              if (S >>= 6, x.offsetType = S, S === 2)
                x.offset = C.getInt8(1), G++;
              else if (S === 1)
                x.offset = C.getInt16(1, !0), G += 2;
              else if (S === 0)
                x.offset = C.getFloat32(1, !0), G += 4;
              else
                throw "Invalid block offset type";
              if (x.encoding === 1)
                if (S = C.getUint8(G), G++, x.bitsPerPixel = S & 63, S >>= 6, x.numValidPixelsType = S, S === 2)
                  x.numValidPixels = C.getUint8(G), G++;
                else if (S === 1)
                  x.numValidPixels = C.getUint16(G, !0), G += 2;
                else if (S === 0)
                  x.numValidPixels = C.getUint32(G, !0), G += 4;
                else
                  throw "Invalid valid pixel count type";
            }
            if (f += G, x.encoding !== 3) {
              var U, _;
              if (x.encoding === 0) {
                var R = (l.pixels.numBytes - 1) / 4;
                if (R !== Math.floor(R))
                  throw "uncompressed block has invalid length";
                U = new ArrayBuffer(R * 4), _ = new Uint8Array(U), _.set(new Uint8Array(I, f, R * 4));
                var N = new Float32Array(U);
                x.rawData = N, f += R * 4;
              } else if (x.encoding === 1) {
                var L = Math.ceil(x.numValidPixels * x.bitsPerPixel / 8), O = Math.ceil(L / 4);
                U = new ArrayBuffer(O * 4), _ = new Uint8Array(U), _.set(new Uint8Array(I, f, L)), x.stuffedData = new Uint32Array(U), f += L;
              }
            }
          }
        return l.eofOffset = f, l;
      }, o = function(I, f, B, l, h, C, c) {
        var u = (1 << f) - 1, D = 0, d, p = 0, Q, w, y = Math.ceil((c - l) / h), k = I.length * 4 - Math.ceil(f * B / 8);
        for (I[I.length - 1] <<= 8 * k, d = 0; d < B; d++) {
          if (p === 0 && (w = I[D++], p = 32), p >= f)
            Q = w >>> p - f & u, p -= f;
          else {
            var F = f - p;
            Q = (w & u) << F & u, w = I[D++], p = 32 - F, Q += w >>> p;
          }
          C[d] = Q < y ? l + Q * h : c;
        }
        return C;
      };
      return r;
    }(), e = /* @__PURE__ */ function() {
      var r = {
        //methods ending with 2 are for the new byte order used by Lerc2.3 and above.
        //originalUnstuff is used to unpack Huffman code table. code is duplicated to unstuffx for performance reasons.
        unstuff: function(a, o, I, f, B, l, h, C) {
          var c = (1 << I) - 1, u = 0, D, d = 0, p, Q, w, y, k = a.length * 4 - Math.ceil(I * f / 8);
          if (a[a.length - 1] <<= 8 * k, B)
            for (D = 0; D < f; D++)
              d === 0 && (Q = a[u++], d = 32), d >= I ? (p = Q >>> d - I & c, d -= I) : (w = I - d, p = (Q & c) << w & c, Q = a[u++], d = 32 - w, p += Q >>> d), o[D] = B[p];
          else
            for (y = Math.ceil((C - l) / h), D = 0; D < f; D++)
              d === 0 && (Q = a[u++], d = 32), d >= I ? (p = Q >>> d - I & c, d -= I) : (w = I - d, p = (Q & c) << w & c, Q = a[u++], d = 32 - w, p += Q >>> d), o[D] = p < y ? l + p * h : C;
        },
        unstuffLUT: function(a, o, I, f, B, l) {
          var h = (1 << o) - 1, C = 0, c = 0, u = 0, D = 0, d = 0, p, Q = [], w = a.length * 4 - Math.ceil(o * I / 8);
          a[a.length - 1] <<= 8 * w;
          var y = Math.ceil((l - f) / B);
          for (c = 0; c < I; c++)
            D === 0 && (p = a[C++], D = 32), D >= o ? (d = p >>> D - o & h, D -= o) : (u = o - D, d = (p & h) << u & h, p = a[C++], D = 32 - u, d += p >>> D), Q[c] = d < y ? f + d * B : l;
          return Q.unshift(f), Q;
        },
        unstuff2: function(a, o, I, f, B, l, h, C) {
          var c = (1 << I) - 1, u = 0, D, d = 0, p = 0, Q, w, y;
          if (B)
            for (D = 0; D < f; D++)
              d === 0 && (w = a[u++], d = 32, p = 0), d >= I ? (Q = w >>> p & c, d -= I, p += I) : (y = I - d, Q = w >>> p & c, w = a[u++], d = 32 - y, Q |= (w & (1 << y) - 1) << I - y, p = y), o[D] = B[Q];
          else {
            var k = Math.ceil((C - l) / h);
            for (D = 0; D < f; D++)
              d === 0 && (w = a[u++], d = 32, p = 0), d >= I ? (Q = w >>> p & c, d -= I, p += I) : (y = I - d, Q = w >>> p & c, w = a[u++], d = 32 - y, Q |= (w & (1 << y) - 1) << I - y, p = y), o[D] = Q < k ? l + Q * h : C;
          }
          return o;
        },
        unstuffLUT2: function(a, o, I, f, B, l) {
          var h = (1 << o) - 1, C = 0, c = 0, u = 0, D = 0, d = 0, p = 0, Q, w = [], y = Math.ceil((l - f) / B);
          for (c = 0; c < I; c++)
            D === 0 && (Q = a[C++], D = 32, p = 0), D >= o ? (d = Q >>> p & h, D -= o, p += o) : (u = o - D, d = Q >>> p & h, Q = a[C++], D = 32 - u, d |= (Q & (1 << u) - 1) << o - u, p = u), w[c] = d < y ? f + d * B : l;
          return w.unshift(f), w;
        },
        originalUnstuff: function(a, o, I, f) {
          var B = (1 << I) - 1, l = 0, h, C = 0, c, u, D, d = a.length * 4 - Math.ceil(I * f / 8);
          for (a[a.length - 1] <<= 8 * d, h = 0; h < f; h++)
            C === 0 && (u = a[l++], C = 32), C >= I ? (c = u >>> C - I & B, C -= I) : (D = I - C, c = (u & B) << D & B, u = a[l++], C = 32 - D, c += u >>> C), o[h] = c;
          return o;
        },
        originalUnstuff2: function(a, o, I, f) {
          var B = (1 << I) - 1, l = 0, h, C = 0, c = 0, u, D, d;
          for (h = 0; h < f; h++)
            C === 0 && (D = a[l++], C = 32, c = 0), C >= I ? (u = D >>> c & B, C -= I, c += I) : (d = I - C, u = D >>> c & B, D = a[l++], C = 32 - d, u |= (D & (1 << d) - 1) << I - d, c = d), o[h] = u;
          return o;
        }
      }, s = {
        HUFFMAN_LUT_BITS_MAX: 12,
        //use 2^12 lut, treat it like constant
        computeChecksumFletcher32: function(a) {
          for (var o = 65535, I = 65535, f = a.length, B = Math.floor(f / 2), l = 0; B; ) {
            var h = B >= 359 ? 359 : B;
            B -= h;
            do
              o += a[l++] << 8, I += o += a[l++];
            while (--h);
            o = (o & 65535) + (o >>> 16), I = (I & 65535) + (I >>> 16);
          }
          return f & 1 && (I += o += a[l] << 8), o = (o & 65535) + (o >>> 16), I = (I & 65535) + (I >>> 16), (I << 16 | o) >>> 0;
        },
        readHeaderInfo: function(a, o) {
          var I = o.ptr, f = new Uint8Array(a, I, 6), B = {};
          if (B.fileIdentifierString = String.fromCharCode.apply(null, f), B.fileIdentifierString.lastIndexOf("Lerc2", 0) !== 0)
            throw "Unexpected file identifier string (expect Lerc2 ): " + B.fileIdentifierString;
          I += 6;
          var l = new DataView(a, I, 8), h = l.getInt32(0, !0);
          B.fileVersion = h, I += 4, h >= 3 && (B.checksum = l.getUint32(4, !0), I += 4), l = new DataView(a, I, 12), B.height = l.getUint32(0, !0), B.width = l.getUint32(4, !0), I += 8, h >= 4 ? (B.numDims = l.getUint32(8, !0), I += 4) : B.numDims = 1, l = new DataView(a, I, 40), B.numValidPixel = l.getUint32(0, !0), B.microBlockSize = l.getInt32(4, !0), B.blobSize = l.getInt32(8, !0), B.imageType = l.getInt32(12, !0), B.maxZError = l.getFloat64(16, !0), B.zMin = l.getFloat64(24, !0), B.zMax = l.getFloat64(32, !0), I += 40, o.headerInfo = B, o.ptr = I;
          var C, c;
          if (h >= 3 && (c = h >= 4 ? 52 : 48, C = this.computeChecksumFletcher32(new Uint8Array(a, I - c, B.blobSize - 14)), C !== B.checksum))
            throw "Checksum failed.";
          return !0;
        },
        checkMinMaxRanges: function(a, o) {
          var I = o.headerInfo, f = this.getDataTypeArray(I.imageType), B = I.numDims * this.getDataTypeSize(I.imageType), l = this.readSubArray(a, o.ptr, f, B), h = this.readSubArray(a, o.ptr + B, f, B);
          o.ptr += 2 * B;
          var C, c = !0;
          for (C = 0; C < I.numDims; C++)
            if (l[C] !== h[C]) {
              c = !1;
              break;
            }
          return I.minValues = l, I.maxValues = h, c;
        },
        readSubArray: function(a, o, I, f) {
          var B;
          if (I === Uint8Array)
            B = new Uint8Array(a, o, f);
          else {
            var l = new ArrayBuffer(f), h = new Uint8Array(l);
            h.set(new Uint8Array(a, o, f)), B = new I(l);
          }
          return B;
        },
        readMask: function(a, o) {
          var I = o.ptr, f = o.headerInfo, B = f.width * f.height, l = f.numValidPixel, h = new DataView(a, I, 4), C = {};
          if (C.numBytes = h.getUint32(0, !0), I += 4, (l === 0 || B === l) && C.numBytes !== 0)
            throw "invalid mask";
          var c, u;
          if (l === 0)
            c = new Uint8Array(Math.ceil(B / 8)), C.bitset = c, u = new Uint8Array(B), o.pixels.resultMask = u, I += C.numBytes;
          else if (C.numBytes > 0) {
            c = new Uint8Array(Math.ceil(B / 8)), h = new DataView(a, I, C.numBytes);
            var D = h.getInt16(0, !0), d = 2, p = 0, Q = 0;
            do {
              if (D > 0)
                for (; D--; )
                  c[p++] = h.getUint8(d++);
              else
                for (Q = h.getUint8(d++), D = -D; D--; )
                  c[p++] = Q;
              D = h.getInt16(d, !0), d += 2;
            } while (d < C.numBytes);
            if (D !== -32768 || p < c.length)
              throw "Unexpected end of mask RLE encoding";
            u = new Uint8Array(B);
            var w = 0, y = 0;
            for (y = 0; y < B; y++)
              y & 7 ? (w = c[y >> 3], w <<= y & 7) : w = c[y >> 3], w & 128 && (u[y] = 1);
            o.pixels.resultMask = u, C.bitset = c, I += C.numBytes;
          }
          return o.ptr = I, o.mask = C, !0;
        },
        readDataOneSweep: function(a, o, I, f) {
          var B = o.ptr, l = o.headerInfo, h = l.numDims, C = l.width * l.height, c = l.imageType, u = l.numValidPixel * s.getDataTypeSize(c) * h, D, d = o.pixels.resultMask;
          if (I === Uint8Array)
            D = new Uint8Array(a, B, u);
          else {
            var p = new ArrayBuffer(u), Q = new Uint8Array(p);
            Q.set(new Uint8Array(a, B, u)), D = new I(p);
          }
          if (D.length === C * h)
            f ? o.pixels.resultPixels = s.swapDimensionOrder(D, C, h, I, !0) : o.pixels.resultPixels = D;
          else {
            o.pixels.resultPixels = new I(C * h);
            var w = 0, y = 0, k = 0, F = 0;
            if (h > 1) {
              if (f) {
                for (y = 0; y < C; y++)
                  if (d[y])
                    for (F = y, k = 0; k < h; k++, F += C)
                      o.pixels.resultPixels[F] = D[w++];
              } else
                for (y = 0; y < C; y++)
                  if (d[y])
                    for (F = y * h, k = 0; k < h; k++)
                      o.pixels.resultPixels[F + k] = D[w++];
            } else
              for (y = 0; y < C; y++)
                d[y] && (o.pixels.resultPixels[y] = D[w++]);
          }
          return B += u, o.ptr = B, !0;
        },
        readHuffmanTree: function(a, o) {
          var I = this.HUFFMAN_LUT_BITS_MAX, f = new DataView(a, o.ptr, 16);
          o.ptr += 16;
          var B = f.getInt32(0, !0);
          if (B < 2)
            throw "unsupported Huffman version";
          var l = f.getInt32(4, !0), h = f.getInt32(8, !0), C = f.getInt32(12, !0);
          if (h >= C)
            return !1;
          var c = new Uint32Array(C - h);
          s.decodeBits(a, o, c);
          var u = [], D, d, p, Q;
          for (D = h; D < C; D++)
            d = D - (D < l ? 0 : l), u[d] = { first: c[D - h], second: null };
          var w = a.byteLength - o.ptr, y = Math.ceil(w / 4), k = new ArrayBuffer(y * 4), F = new Uint8Array(k);
          F.set(new Uint8Array(a, o.ptr, w));
          var m = new Uint32Array(k), b = 0, G, M = 0;
          for (G = m[0], D = h; D < C; D++)
            d = D - (D < l ? 0 : l), Q = u[d].first, Q > 0 && (u[d].second = G << b >>> 32 - Q, 32 - b >= Q ? (b += Q, b === 32 && (b = 0, M++, G = m[M])) : (b += Q - 32, M++, G = m[M], u[d].second |= G >>> 32 - b));
          var x = 0, S = 0, U = new g();
          for (D = 0; D < u.length; D++)
            u[D] !== void 0 && (x = Math.max(x, u[D].first));
          x >= I ? S = I : S = x;
          var _ = [], R, N, L, O, P, v;
          for (D = h; D < C; D++)
            if (d = D - (D < l ? 0 : l), Q = u[d].first, Q > 0)
              if (R = [Q, d], Q <= S)
                for (N = u[d].second << S - Q, L = 1 << S - Q, p = 0; p < L; p++)
                  _[N | p] = R;
              else
                for (N = u[d].second, v = U, O = Q - 1; O >= 0; O--)
                  P = N >>> O & 1, P ? (v.right || (v.right = new g()), v = v.right) : (v.left || (v.left = new g()), v = v.left), O === 0 && !v.val && (v.val = R[1]);
          return {
            decodeLut: _,
            numBitsLUTQick: S,
            numBitsLUT: x,
            tree: U,
            stuffedData: m,
            srcPtr: M,
            bitPos: b
          };
        },
        readHuffman: function(a, o, I, f) {
          var B = o.headerInfo, l = B.numDims, h = o.headerInfo.height, C = o.headerInfo.width, c = C * h, u = this.readHuffmanTree(a, o), D = u.decodeLut, d = u.tree, p = u.stuffedData, Q = u.srcPtr, w = u.bitPos, y = u.numBitsLUTQick, k = u.numBitsLUT, F = o.headerInfo.imageType === 0 ? 128 : 0, m, b, G, M = o.pixels.resultMask, x, S, U, _, R, N, L, O = 0;
          w > 0 && (Q++, w = 0);
          var P = p[Q], v = o.encodeMode === 1, T = new I(c * l), q = T, H;
          if (l < 2 || v) {
            for (H = 0; H < l; H++)
              if (l > 1 && (q = new I(T.buffer, c * H, c), O = 0), o.headerInfo.numValidPixel === C * h)
                for (N = 0, _ = 0; _ < h; _++)
                  for (R = 0; R < C; R++, N++) {
                    if (b = 0, x = P << w >>> 32 - y, S = x, 32 - w < y && (x |= p[Q + 1] >>> 64 - w - y, S = x), D[S])
                      b = D[S][1], w += D[S][0];
                    else
                      for (x = P << w >>> 32 - k, S = x, 32 - w < k && (x |= p[Q + 1] >>> 64 - w - k, S = x), m = d, L = 0; L < k; L++)
                        if (U = x >>> k - L - 1 & 1, m = U ? m.right : m.left, !(m.left || m.right)) {
                          b = m.val, w = w + L + 1;
                          break;
                        }
                    w >= 32 && (w -= 32, Q++, P = p[Q]), G = b - F, v ? (R > 0 ? G += O : _ > 0 ? G += q[N - C] : G += O, G &= 255, q[N] = G, O = G) : q[N] = G;
                  }
              else
                for (N = 0, _ = 0; _ < h; _++)
                  for (R = 0; R < C; R++, N++)
                    if (M[N]) {
                      if (b = 0, x = P << w >>> 32 - y, S = x, 32 - w < y && (x |= p[Q + 1] >>> 64 - w - y, S = x), D[S])
                        b = D[S][1], w += D[S][0];
                      else
                        for (x = P << w >>> 32 - k, S = x, 32 - w < k && (x |= p[Q + 1] >>> 64 - w - k, S = x), m = d, L = 0; L < k; L++)
                          if (U = x >>> k - L - 1 & 1, m = U ? m.right : m.left, !(m.left || m.right)) {
                            b = m.val, w = w + L + 1;
                            break;
                          }
                      w >= 32 && (w -= 32, Q++, P = p[Q]), G = b - F, v ? (R > 0 && M[N - 1] ? G += O : _ > 0 && M[N - C] ? G += q[N - C] : G += O, G &= 255, q[N] = G, O = G) : q[N] = G;
                    }
          } else
            for (N = 0, _ = 0; _ < h; _++)
              for (R = 0; R < C; R++)
                if (N = _ * C + R, !M || M[N])
                  for (H = 0; H < l; H++, N += c) {
                    if (b = 0, x = P << w >>> 32 - y, S = x, 32 - w < y && (x |= p[Q + 1] >>> 64 - w - y, S = x), D[S])
                      b = D[S][1], w += D[S][0];
                    else
                      for (x = P << w >>> 32 - k, S = x, 32 - w < k && (x |= p[Q + 1] >>> 64 - w - k, S = x), m = d, L = 0; L < k; L++)
                        if (U = x >>> k - L - 1 & 1, m = U ? m.right : m.left, !(m.left || m.right)) {
                          b = m.val, w = w + L + 1;
                          break;
                        }
                    w >= 32 && (w -= 32, Q++, P = p[Q]), G = b - F, q[N] = G;
                  }
          o.ptr = o.ptr + (Q + 1) * 4 + (w > 0 ? 4 : 0), o.pixels.resultPixels = T, l > 1 && !f && (o.pixels.resultPixels = s.swapDimensionOrder(T, c, l, I));
        },
        decodeBits: function(a, o, I, f, B) {
          {
            var l = o.headerInfo, h = l.fileVersion, C = 0, c = a.byteLength - o.ptr >= 5 ? 5 : a.byteLength - o.ptr, u = new DataView(a, o.ptr, c), D = u.getUint8(0);
            C++;
            var d = D >> 6, p = d === 0 ? 4 : 3 - d, Q = (D & 32) > 0, w = D & 31, y = 0;
            if (p === 1)
              y = u.getUint8(C), C++;
            else if (p === 2)
              y = u.getUint16(C, !0), C += 2;
            else if (p === 4)
              y = u.getUint32(C, !0), C += 4;
            else
              throw "Invalid valid pixel count type";
            var k = 2 * l.maxZError, F, m, b, G, M, x, S, U, _, R = l.numDims > 1 ? l.maxValues[B] : l.zMax;
            if (Q) {
              for (o.counter.lut++, U = u.getUint8(C), C++, G = Math.ceil((U - 1) * w / 8), M = Math.ceil(G / 4), m = new ArrayBuffer(M * 4), b = new Uint8Array(m), o.ptr += C, b.set(new Uint8Array(a, o.ptr, G)), S = new Uint32Array(m), o.ptr += G, _ = 0; U - 1 >>> _; )
                _++;
              G = Math.ceil(y * _ / 8), M = Math.ceil(G / 4), m = new ArrayBuffer(M * 4), b = new Uint8Array(m), b.set(new Uint8Array(a, o.ptr, G)), F = new Uint32Array(m), o.ptr += G, h >= 3 ? x = r.unstuffLUT2(S, w, U - 1, f, k, R) : x = r.unstuffLUT(S, w, U - 1, f, k, R), h >= 3 ? r.unstuff2(F, I, _, y, x) : r.unstuff(F, I, _, y, x);
            } else
              o.counter.bitstuffer++, _ = w, o.ptr += C, _ > 0 && (G = Math.ceil(y * _ / 8), M = Math.ceil(G / 4), m = new ArrayBuffer(M * 4), b = new Uint8Array(m), b.set(new Uint8Array(a, o.ptr, G)), F = new Uint32Array(m), o.ptr += G, h >= 3 ? f == null ? r.originalUnstuff2(F, I, _, y) : r.unstuff2(F, I, _, y, !1, f, k, R) : f == null ? r.originalUnstuff(F, I, _, y) : r.unstuff(F, I, _, y, !1, f, k, R));
          }
        },
        readTiles: function(a, o, I, f) {
          var B = o.headerInfo, l = B.width, h = B.height, C = l * h, c = B.microBlockSize, u = B.imageType, D = s.getDataTypeSize(u), d = Math.ceil(l / c), p = Math.ceil(h / c);
          o.pixels.numBlocksY = p, o.pixels.numBlocksX = d, o.pixels.ptr = 0;
          var Q = 0, w = 0, y = 0, k = 0, F = 0, m = 0, b = 0, G = 0, M = 0, x = 0, S = 0, U = 0, _ = 0, R = 0, N = 0, L = 0, O, P, v, T, q, H, V = new I(c * c), Z = h % c || c, j = l % c || c, aA, rA, me = B.numDims, _A, lA = o.pixels.resultMask, sA = o.pixels.resultPixels, nn = B.fileVersion, ti = nn >= 5 ? 14 : 15, pA, ze = B.zMax, mA;
          for (y = 0; y < p; y++)
            for (F = y !== p - 1 ? c : Z, k = 0; k < d; k++)
              for (m = k !== d - 1 ? c : j, S = y * l * c + k * c, U = l - m, _A = 0; _A < me; _A++) {
                if (me > 1 ? (mA = sA, S = y * l * c + k * c, sA = new I(o.pixels.resultPixels.buffer, C * _A * D, C), ze = B.maxValues[_A]) : mA = null, b = a.byteLength - o.ptr, O = new DataView(a, o.ptr, Math.min(10, b)), P = {}, L = 0, G = O.getUint8(0), L++, pA = B.fileVersion >= 5 ? G & 4 : 0, M = G >> 6 & 255, x = G >> 2 & ti, x !== (k * c >> 3 & ti) || pA && _A === 0)
                  throw "integrity issue";
                if (H = G & 3, H > 3)
                  throw o.ptr += L, "Invalid block encoding (" + H + ")";
                if (H === 2) {
                  if (pA)
                    if (lA)
                      for (Q = 0; Q < F; Q++)
                        for (w = 0; w < m; w++)
                          lA[S] && (sA[S] = mA[S]), S++;
                    else
                      for (Q = 0; Q < F; Q++)
                        for (w = 0; w < m; w++)
                          sA[S] = mA[S], S++;
                  o.counter.constant++, o.ptr += L;
                  continue;
                } else if (H === 0) {
                  if (pA)
                    throw "integrity issue";
                  if (o.counter.uncompressed++, o.ptr += L, _ = F * m * D, R = a.byteLength - o.ptr, _ = _ < R ? _ : R, v = new ArrayBuffer(_ % D === 0 ? _ : _ + D - _ % D), T = new Uint8Array(v), T.set(new Uint8Array(a, o.ptr, _)), q = new I(v), N = 0, lA)
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        lA[S] && (sA[S] = q[N++]), S++;
                      S += U;
                    }
                  else
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        sA[S++] = q[N++];
                      S += U;
                    }
                  o.ptr += N * D;
                } else if (aA = s.getDataTypeUsed(pA && u < 6 ? 4 : u, M), rA = s.getOnePixel(P, L, aA, O), L += s.getDataTypeSize(aA), H === 3)
                  if (o.ptr += L, o.counter.constantoffset++, lA)
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        lA[S] && (sA[S] = pA ? Math.min(ze, mA[S] + rA) : rA), S++;
                      S += U;
                    }
                  else
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        sA[S] = pA ? Math.min(ze, mA[S] + rA) : rA, S++;
                      S += U;
                    }
                else if (o.ptr += L, s.decodeBits(a, o, V, rA, _A), L = 0, pA)
                  if (lA)
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        lA[S] && (sA[S] = V[L++] + mA[S]), S++;
                      S += U;
                    }
                  else
                    for (Q = 0; Q < F; Q++) {
                      for (w = 0; w < m; w++)
                        sA[S] = V[L++] + mA[S], S++;
                      S += U;
                    }
                else if (lA)
                  for (Q = 0; Q < F; Q++) {
                    for (w = 0; w < m; w++)
                      lA[S] && (sA[S] = V[L++]), S++;
                    S += U;
                  }
                else
                  for (Q = 0; Q < F; Q++) {
                    for (w = 0; w < m; w++)
                      sA[S++] = V[L++];
                    S += U;
                  }
              }
          me > 1 && !f && (o.pixels.resultPixels = s.swapDimensionOrder(o.pixels.resultPixels, C, me, I));
        },
        /*****************
        *  private methods (helper methods)
        *****************/
        formatFileInfo: function(a) {
          return {
            fileIdentifierString: a.headerInfo.fileIdentifierString,
            fileVersion: a.headerInfo.fileVersion,
            imageType: a.headerInfo.imageType,
            height: a.headerInfo.height,
            width: a.headerInfo.width,
            numValidPixel: a.headerInfo.numValidPixel,
            microBlockSize: a.headerInfo.microBlockSize,
            blobSize: a.headerInfo.blobSize,
            maxZError: a.headerInfo.maxZError,
            pixelType: s.getPixelType(a.headerInfo.imageType),
            eofOffset: a.eofOffset,
            mask: a.mask ? {
              numBytes: a.mask.numBytes
            } : null,
            pixels: {
              numBlocksX: a.pixels.numBlocksX,
              numBlocksY: a.pixels.numBlocksY,
              //"numBytes": data.pixels.numBytes,
              maxValue: a.headerInfo.zMax,
              minValue: a.headerInfo.zMin,
              noDataValue: a.noDataValue
            }
          };
        },
        constructConstantSurface: function(a, o) {
          var I = a.headerInfo.zMax, f = a.headerInfo.zMin, B = a.headerInfo.maxValues, l = a.headerInfo.numDims, h = a.headerInfo.height * a.headerInfo.width, C = 0, c = 0, u = 0, D = a.pixels.resultMask, d = a.pixels.resultPixels;
          if (D)
            if (l > 1) {
              if (o)
                for (C = 0; C < l; C++)
                  for (u = C * h, I = B[C], c = 0; c < h; c++)
                    D[c] && (d[u + c] = I);
              else
                for (c = 0; c < h; c++)
                  if (D[c])
                    for (u = c * l, C = 0; C < l; C++)
                      d[u + l] = B[C];
            } else
              for (c = 0; c < h; c++)
                D[c] && (d[c] = I);
          else if (l > 1 && f !== I)
            if (o)
              for (C = 0; C < l; C++)
                for (u = C * h, I = B[C], c = 0; c < h; c++)
                  d[u + c] = I;
            else
              for (c = 0; c < h; c++)
                for (u = c * l, C = 0; C < l; C++)
                  d[u + C] = B[C];
          else
            for (c = 0; c < h * l; c++)
              d[c] = I;
        },
        getDataTypeArray: function(a) {
          var o;
          switch (a) {
            case 0:
              o = Int8Array;
              break;
            case 1:
              o = Uint8Array;
              break;
            case 2:
              o = Int16Array;
              break;
            case 3:
              o = Uint16Array;
              break;
            case 4:
              o = Int32Array;
              break;
            case 5:
              o = Uint32Array;
              break;
            case 6:
              o = Float32Array;
              break;
            case 7:
              o = Float64Array;
              break;
            default:
              o = Float32Array;
          }
          return o;
        },
        getPixelType: function(a) {
          var o;
          switch (a) {
            case 0:
              o = "S8";
              break;
            case 1:
              o = "U8";
              break;
            case 2:
              o = "S16";
              break;
            case 3:
              o = "U16";
              break;
            case 4:
              o = "S32";
              break;
            case 5:
              o = "U32";
              break;
            case 6:
              o = "F32";
              break;
            case 7:
              o = "F64";
              break;
            default:
              o = "F32";
          }
          return o;
        },
        isValidPixelValue: function(a, o) {
          if (o == null)
            return !1;
          var I;
          switch (a) {
            case 0:
              I = o >= -128 && o <= 127;
              break;
            case 1:
              I = o >= 0 && o <= 255;
              break;
            case 2:
              I = o >= -32768 && o <= 32767;
              break;
            case 3:
              I = o >= 0 && o <= 65536;
              break;
            case 4:
              I = o >= -2147483648 && o <= 2147483647;
              break;
            case 5:
              I = o >= 0 && o <= 4294967296;
              break;
            case 6:
              I = o >= -34027999387901484e22 && o <= 34027999387901484e22;
              break;
            case 7:
              I = o >= -17976931348623157e292 && o <= 17976931348623157e292;
              break;
            default:
              I = !1;
          }
          return I;
        },
        getDataTypeSize: function(a) {
          var o = 0;
          switch (a) {
            case 0:
            case 1:
              o = 1;
              break;
            case 2:
            case 3:
              o = 2;
              break;
            case 4:
            case 5:
            case 6:
              o = 4;
              break;
            case 7:
              o = 8;
              break;
            default:
              o = a;
          }
          return o;
        },
        getDataTypeUsed: function(a, o) {
          var I = a;
          switch (a) {
            case 2:
            case 4:
              I = a - o;
              break;
            case 3:
            case 5:
              I = a - 2 * o;
              break;
            case 6:
              o === 0 ? I = a : o === 1 ? I = 2 : I = 1;
              break;
            case 7:
              o === 0 ? I = a : I = a - 2 * o + 1;
              break;
            default:
              I = a;
              break;
          }
          return I;
        },
        getOnePixel: function(a, o, I, f) {
          var B = 0;
          switch (I) {
            case 0:
              B = f.getInt8(o);
              break;
            case 1:
              B = f.getUint8(o);
              break;
            case 2:
              B = f.getInt16(o, !0);
              break;
            case 3:
              B = f.getUint16(o, !0);
              break;
            case 4:
              B = f.getInt32(o, !0);
              break;
            case 5:
              B = f.getUInt32(o, !0);
              break;
            case 6:
              B = f.getFloat32(o, !0);
              break;
            case 7:
              B = f.getFloat64(o, !0);
              break;
            default:
              throw "the decoder does not understand this pixel type";
          }
          return B;
        },
        swapDimensionOrder: function(a, o, I, f, B) {
          var l = 0, h = 0, C = 0, c = 0, u = a;
          if (I > 1)
            if (u = new f(o * I), B)
              for (l = 0; l < o; l++)
                for (c = l, C = 0; C < I; C++, c += o)
                  u[c] = a[h++];
            else
              for (l = 0; l < o; l++)
                for (c = l, C = 0; C < I; C++, c += o)
                  u[h++] = a[c];
          return u;
        }
      }, g = function(a, o, I) {
        this.val = a, this.left = o, this.right = I;
      }, E = {
        /*
        * ********removed options compared to LERC1. We can bring some of them back if needed.
         * removed pixel type. LERC2 is typed and doesn't require user to give pixel type
         * changed encodedMaskData to maskData. LERC2 's js version make it faster to use maskData directly.
         * removed returnMask. mask is used by LERC2 internally and is cost free. In case of user input mask, it's returned as well and has neglible cost.
         * removed nodatavalue. Because LERC2 pixels are typed, nodatavalue will sacrify a useful value for many types (8bit, 16bit) etc,
         *       user has to be knowledgable enough about raster and their data to avoid usability issues. so nodata value is simply removed now.
         *       We can add it back later if their's a clear requirement.
         * removed encodedMask. This option was not implemented in LercDecode. It can be done after decoding (less efficient)
         * removed computeUsedBitDepths.
         *
         *
         * response changes compared to LERC1
         * 1. encodedMaskData is not available
         * 2. noDataValue is optional (returns only if user's noDataValue is with in the valid data type range)
         * 3. maskData is always available
        */
        /*****************
        *  public properties
        ******************/
        //HUFFMAN_LUT_BITS_MAX: 12, //use 2^12 lut, not configurable
        /*****************
        *  public methods
        *****************/
        /**
         * Decode a LERC2 byte stream and return an object containing the pixel data and optional metadata.
         *
         * @param {ArrayBuffer} input The LERC input byte stream
         * @param {object} [options] options Decoding options
         * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid LERC file is expected at that position
         * @param {boolean} [options.returnFileInfo] If true, the return value will have a fileInfo property that contains metadata obtained from the LERC headers and the decoding process
         * @param {boolean} [options.returnPixelInterleavedDims]  If true, returned dimensions are pixel-interleaved, a.k.a [p1_dim0, p1_dim1, p1_dimn, p2_dim0...], default is [p1_dim0, p2_dim0, ..., p1_dim1, p2_dim1...]
         */
        decode: function(a, o) {
          o = o || {};
          var I = o.noDataValue, f = 0, B = {};
          if (B.ptr = o.inputOffset || 0, B.pixels = {}, !!s.readHeaderInfo(a, B)) {
            var l = B.headerInfo, h = l.fileVersion, C = s.getDataTypeArray(l.imageType);
            if (h > 5)
              throw "unsupported lerc version 2." + h;
            s.readMask(a, B), l.numValidPixel !== l.width * l.height && !B.pixels.resultMask && (B.pixels.resultMask = o.maskData);
            var c = l.width * l.height;
            B.pixels.resultPixels = new C(c * l.numDims), B.counter = {
              onesweep: 0,
              uncompressed: 0,
              lut: 0,
              bitstuffer: 0,
              constant: 0,
              constantoffset: 0
            };
            var u = !o.returnPixelInterleavedDims;
            if (l.numValidPixel !== 0)
              if (l.zMax === l.zMin)
                s.constructConstantSurface(B, u);
              else if (h >= 4 && s.checkMinMaxRanges(a, B))
                s.constructConstantSurface(B, u);
              else {
                var D = new DataView(a, B.ptr, 2), d = D.getUint8(0);
                if (B.ptr++, d)
                  s.readDataOneSweep(a, B, C, u);
                else if (h > 1 && l.imageType <= 1 && Math.abs(l.maxZError - 0.5) < 1e-5) {
                  var p = D.getUint8(1);
                  if (B.ptr++, B.encodeMode = p, p > 2 || h < 4 && p > 1)
                    throw "Invalid Huffman flag " + p;
                  p ? s.readHuffman(a, B, C, u) : s.readTiles(a, B, C, u);
                } else
                  s.readTiles(a, B, C, u);
              }
            B.eofOffset = B.ptr;
            var Q;
            o.inputOffset ? (Q = B.headerInfo.blobSize + o.inputOffset - B.ptr, Math.abs(Q) >= 1 && (B.eofOffset = o.inputOffset + B.headerInfo.blobSize)) : (Q = B.headerInfo.blobSize - B.ptr, Math.abs(Q) >= 1 && (B.eofOffset = B.headerInfo.blobSize));
            var w = {
              width: l.width,
              height: l.height,
              pixelData: B.pixels.resultPixels,
              minValue: l.zMin,
              maxValue: l.zMax,
              validPixelCount: l.numValidPixel,
              dimCount: l.numDims,
              dimStats: {
                minValues: l.minValues,
                maxValues: l.maxValues
              },
              maskData: B.pixels.resultMask
              //noDataValue: noDataValue
            };
            if (B.pixels.resultMask && s.isValidPixelValue(l.imageType, I)) {
              var y = B.pixels.resultMask;
              for (f = 0; f < c; f++)
                y[f] || (w.pixelData[f] = I);
              w.noDataValue = I;
            }
            return B.noDataValue = I, o.returnFileInfo && (w.fileInfo = s.formatFileInfo(B)), w;
          }
        },
        getBandCount: function(a) {
          var o = 0, I = 0, f = {};
          for (f.ptr = 0, f.pixels = {}; I < a.byteLength - 58; )
            s.readHeaderInfo(a, f), I += f.headerInfo.blobSize, o++, f.ptr = I;
          return o;
        }
      };
      return E;
    }(), i = function() {
      var r = new ArrayBuffer(4), s = new Uint8Array(r), g = new Uint32Array(r);
      return g[0] = 1, s[0] === 1;
    }(), n = {
      /************wrapper**********************************************/
      /**
       * A wrapper for decoding both LERC1 and LERC2 byte streams capable of handling multiband pixel blocks for various pixel types.
       *
       * @alias module:Lerc
       * @param {ArrayBuffer} input The LERC input byte stream
       * @param {object} [options] The decoding options below are optional.
       * @param {number} [options.inputOffset] The number of bytes to skip in the input byte stream. A valid Lerc file is expected at that position.
       * @param {string} [options.pixelType] (LERC1 only) Default value is F32. Valid pixel types for input are U8/S8/S16/U16/S32/U32/F32.
       * @param {number} [options.noDataValue] (LERC1 only). It is recommended to use the returned mask instead of setting this value.
       * @param {boolean} [options.returnPixelInterleavedDims] (nDim LERC2 only) If true, returned dimensions are pixel-interleaved, a.k.a [p1_dim0, p1_dim1, p1_dimn, p2_dim0...], default is [p1_dim0, p2_dim0, ..., p1_dim1, p2_dim1...]
       * @returns {{width, height, pixels, pixelType, mask, statistics}}
         * @property {number} width Width of decoded image.
         * @property {number} height Height of decoded image.
         * @property {array} pixels [band1, band2, …] Each band is a typed array of width*height.
         * @property {string} pixelType The type of pixels represented in the output.
         * @property {mask} mask Typed array with a size of width*height, or null if all pixels are valid.
         * @property {array} statistics [statistics_band1, statistics_band2, …] Each element is a statistics object representing min and max values
      **/
      decode: function(r, s) {
        if (!i)
          throw "Big endian system is not supported.";
        s = s || {};
        var g = s.inputOffset || 0, E = new Uint8Array(r, g, 10), a = String.fromCharCode.apply(null, E), o, I;
        if (a.trim() === "CntZImage")
          o = t, I = 1;
        else if (a.substring(0, 5) === "Lerc2")
          o = e, I = 2;
        else
          throw "Unexpected file identifier string: " + a;
        for (var f = 0, B = r.byteLength - 10, l, h = [], C, c, u = {
          width: 0,
          height: 0,
          pixels: [],
          pixelType: s.pixelType,
          mask: null,
          statistics: []
        }, D = 0; g < B; ) {
          var d = o.decode(r, {
            inputOffset: g,
            //for both lerc1 and lerc2
            encodedMaskData: l,
            //lerc1 only
            maskData: c,
            //lerc2 only
            returnMask: f === 0,
            //lerc1 only
            returnEncodedMask: f === 0,
            //lerc1 only
            returnFileInfo: !0,
            //for both lerc1 and lerc2
            returnPixelInterleavedDims: s.returnPixelInterleavedDims,
            //for ndim lerc2 only
            pixelType: s.pixelType || null,
            //lerc1 only
            noDataValue: s.noDataValue || null
            //lerc1 only
          });
          g = d.fileInfo.eofOffset, c = d.maskData, f === 0 && (l = d.encodedMaskData, u.width = d.width, u.height = d.height, u.dimCount = d.dimCount || 1, u.pixelType = d.pixelType || d.fileInfo.pixelType, u.mask = c), I > 1 && (c && h.push(c), d.fileInfo.mask && d.fileInfo.mask.numBytes > 0 && D++), f++, u.pixels.push(d.pixelData), u.statistics.push({
            minValue: d.minValue,
            maxValue: d.maxValue,
            noDataValue: d.noDataValue,
            dimStats: d.dimStats
          });
        }
        var p, Q, w;
        if (I > 1 && D > 1) {
          for (w = u.width * u.height, u.bandMasks = h, c = new Uint8Array(w), c.set(h[0]), p = 1; p < h.length; p++)
            for (C = h[p], Q = 0; Q < w; Q++)
              c[Q] = c[Q] & C[Q];
          u.maskData = c;
        }
        return u;
      }
    };
    A.exports ? A.exports = n : this.Lerc = n;
  })();
})(tn);
var Ms = tn.exports;
const Ns = /* @__PURE__ */ Mt(Ms);
let re, wA, bt;
const Qt = {
  env: {
    emscripten_notify_memory_growth: function(A) {
      bt = new Uint8Array(wA.exports.memory.buffer);
    }
  }
};
class qs {
  init() {
    return re || (typeof fetch < "u" ? re = fetch("data:application/wasm;base64," + Wi).then((t) => t.arrayBuffer()).then((t) => WebAssembly.instantiate(t, Qt)).then(this._init) : re = WebAssembly.instantiate(Buffer.from(Wi, "base64"), Qt).then(this._init), re);
  }
  _init(t) {
    wA = t.instance, Qt.env.emscripten_notify_memory_growth(0);
  }
  decode(t, e = 0) {
    if (!wA) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const i = t.byteLength, n = wA.exports.malloc(i);
    bt.set(t, n), e = e || Number(wA.exports.ZSTD_findDecompressedSize(n, i));
    const r = wA.exports.malloc(e), s = wA.exports.ZSTD_decompress(r, e, n, i), g = bt.slice(r, r + s);
    return wA.exports.free(n), wA.exports.free(r), g;
  }
}
const Wi = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", rn = new qs();
class Ts extends qA {
  constructor(t) {
    super(), this.planarConfiguration = typeof t.PlanarConfiguration < "u" ? t.PlanarConfiguration : 1, this.samplesPerPixel = typeof t.SamplesPerPixel < "u" ? t.SamplesPerPixel : 1, this.addCompression = t.LercParameters[Hn.AddCompression];
  }
  decodeBlock(t) {
    switch (this.addCompression) {
      case We.None:
        break;
      case We.Deflate:
        t = en(new Uint8Array(t)).buffer;
        break;
      case We.Zstandard:
        t = rn.decode(new Uint8Array(t)).buffer;
        break;
      default:
        throw new Error(`Unsupported LERC additional compression method identifier: ${this.addCompression}`);
    }
    return Ns.decode(t, { returnPixelInterleavedDims: this.planarConfiguration === 1 }).pixels[0].buffer;
  }
}
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ts,
  zstd: rn
}, Symbol.toStringTag, { value: "Module" }));
class Hs extends qA {
  constructor() {
    if (super(), typeof createImageBitmap > "u")
      throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
    if (typeof document > "u" && typeof OffscreenCanvas > "u")
      throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
  }
  async decode(t, e) {
    const i = new Blob([e]), n = await createImageBitmap(i);
    let r;
    typeof document < "u" ? (r = document.createElement("canvas"), r.width = n.width, r.height = n.height) : r = new OffscreenCanvas(n.width, n.height);
    const s = r.getContext("2d");
    return s.drawImage(n, 0, 0), s.getImageData(0, 0, n.width, n.height).data.buffer;
  }
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Os = Worker;
function Ks() {
  const A = 'function A(A,e,t,i,r,I,g){try{var n=A[I](g),a=n.value}catch(A){return void t(A)}n.done?e(a):Promise.resolve(a).then(i,r)}function e(e){return function(){var t=this,i=arguments;return new Promise((function(r,I){var g=e.apply(t,i);function n(e){A(g,r,I,n,a,"next",e)}function a(e){A(g,r,I,n,a,"throw",e)}n(void 0)}))}}function t(A){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},t(A)}var i={exports:{}};!function(A){var e=function(A){var e,i=Object.prototype,r=i.hasOwnProperty,I="function"==typeof Symbol?Symbol:{},g=I.iterator||"@@iterator",n=I.asyncIterator||"@@asyncIterator",a=I.toStringTag||"@@toStringTag";function o(A,e,t){return Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),A[e]}try{o({},"")}catch(A){o=function(A,e,t){return A[e]=t}}function B(A,e,t,i){var r=e&&e.prototype instanceof h?e:h,I=Object.create(r.prototype),g=new S(i||[]);return I._invoke=function(A,e,t){var i=Q;return function(r,I){if(i===s)throw new Error("Generator is already running");if(i===f){if("throw"===r)throw I;return R()}for(t.method=r,t.arg=I;;){var g=t.delegate;if(g){var n=m(g,t);if(n){if(n===c)continue;return n}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===Q)throw i=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=s;var a=C(A,e,t);if("normal"===a.type){if(i=t.done?f:E,a.arg===c)continue;return{value:a.arg,done:t.done}}"throw"===a.type&&(i=f,t.method="throw",t.arg=a.arg)}}}(A,t,g),I}function C(A,e,t){try{return{type:"normal",arg:A.call(e,t)}}catch(A){return{type:"throw",arg:A}}}A.wrap=B;var Q="suspendedStart",E="suspendedYield",s="executing",f="completed",c={};function h(){}function l(){}function u(){}var w={};o(w,g,(function(){return this}));var d=Object.getPrototypeOf,D=d&&d(d(v([])));D&&D!==i&&r.call(D,g)&&(w=D);var y=u.prototype=h.prototype=Object.create(w);function k(A){["next","throw","return"].forEach((function(e){o(A,e,(function(A){return this._invoke(e,A)}))}))}function p(A,e){function i(I,g,n,a){var o=C(A[I],A,g);if("throw"!==o.type){var B=o.arg,Q=B.value;return Q&&"object"===t(Q)&&r.call(Q,"__await")?e.resolve(Q.__await).then((function(A){i("next",A,n,a)}),(function(A){i("throw",A,n,a)})):e.resolve(Q).then((function(A){B.value=A,n(B)}),(function(A){return i("throw",A,n,a)}))}a(o.arg)}var I;this._invoke=function(A,t){function r(){return new e((function(e,r){i(A,t,e,r)}))}return I=I?I.then(r,r):r()}}function m(A,t){var i=A.iterator[t.method];if(i===e){if(t.delegate=null,"throw"===t.method){if(A.iterator.return&&(t.method="return",t.arg=e,m(A,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a \'throw\' method")}return c}var r=C(i,A.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var I=r.arg;return I?I.done?(t[A.resultName]=I.value,t.next=A.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,c):I:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function G(A){var e={tryLoc:A[0]};1 in A&&(e.catchLoc=A[1]),2 in A&&(e.finallyLoc=A[2],e.afterLoc=A[3]),this.tryEntries.push(e)}function F(A){var e=A.completion||{};e.type="normal",delete e.arg,A.completion=e}function S(A){this.tryEntries=[{tryLoc:"root"}],A.forEach(G,this),this.reset(!0)}function v(A){if(A){var t=A[g];if(t)return t.call(A);if("function"==typeof A.next)return A;if(!isNaN(A.length)){var i=-1,I=function t(){for(;++i<A.length;)if(r.call(A,i))return t.value=A[i],t.done=!1,t;return t.value=e,t.done=!0,t};return I.next=I}}return{next:R}}function R(){return{value:e,done:!0}}return l.prototype=u,o(y,"constructor",u),o(u,"constructor",l),l.displayName=o(u,a,"GeneratorFunction"),A.isGeneratorFunction=function(A){var e="function"==typeof A&&A.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},A.mark=function(A){return Object.setPrototypeOf?Object.setPrototypeOf(A,u):(A.__proto__=u,o(A,a,"GeneratorFunction")),A.prototype=Object.create(y),A},A.awrap=function(A){return{__await:A}},k(p.prototype),o(p.prototype,n,(function(){return this})),A.AsyncIterator=p,A.async=function(e,t,i,r,I){void 0===I&&(I=Promise);var g=new p(B(e,t,i,r),I);return A.isGeneratorFunction(t)?g:g.next().then((function(A){return A.done?A.value:g.next()}))},k(y),o(y,a,"Generator"),o(y,g,(function(){return this})),o(y,"toString",(function(){return"[object Generator]"})),A.keys=function(A){var e=[];for(var t in A)e.push(t);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in A)return t.value=i,t.done=!1,t}return t.done=!0,t}},A.values=v,S.prototype={constructor:S,reset:function(A){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!A)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var A=this.tryEntries[0].completion;if("throw"===A.type)throw A.arg;return this.rval},dispatchException:function(A){if(this.done)throw A;var t=this;function i(i,r){return n.type="throw",n.arg=A,t.next=i,r&&(t.method="next",t.arg=e),!!r}for(var I=this.tryEntries.length-1;I>=0;--I){var g=this.tryEntries[I],n=g.completion;if("root"===g.tryLoc)return i("end");if(g.tryLoc<=this.prev){var a=r.call(g,"catchLoc"),o=r.call(g,"finallyLoc");if(a&&o){if(this.prev<g.catchLoc)return i(g.catchLoc,!0);if(this.prev<g.finallyLoc)return i(g.finallyLoc)}else if(a){if(this.prev<g.catchLoc)return i(g.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return i(g.finallyLoc)}}}},abrupt:function(A,e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var I=i;break}}I&&("break"===A||"continue"===A)&&I.tryLoc<=e&&e<=I.finallyLoc&&(I=null);var g=I?I.completion:{};return g.type=A,g.arg=e,I?(this.method="next",this.next=I.finallyLoc,c):this.complete(g)},complete:function(A,e){if("throw"===A.type)throw A.arg;return"break"===A.type||"continue"===A.type?this.next=A.arg:"return"===A.type?(this.rval=this.arg=A.arg,this.method="return",this.next="end"):"normal"===A.type&&e&&(this.next=e),c},finish:function(A){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===A)return this.complete(t.completion,t.afterLoc),F(t),c}},catch:function(A){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===A){var i=t.completion;if("throw"===i.type){var r=i.arg;F(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(A,t,i){return this.delegate={iterator:v(A),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=e),c}},A}(A.exports);try{regeneratorRuntime=e}catch(A){"object"===("undefined"==typeof globalThis?"undefined":t(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(i);var r=i.exports,I=new Map;function g(A,e){Array.isArray(A)||(A=[A]),A.forEach((function(A){return I.set(A,e)}))}function n(A){return a.apply(this,arguments)}function a(){return(a=e(r.mark((function A(e){var t,i;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(t=I.get(e.Compression)){A.next=3;break}throw new Error("Unknown compression method identifier: ".concat(e.Compression));case 3:return A.next=5,t();case 5:return i=A.sent,A.abrupt("return",new i(e));case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}g([void 0,1],(function(){return Promise.resolve().then((function(){return y})).then((function(A){return A.default}))})),g(5,(function(){return Promise.resolve().then((function(){return F})).then((function(A){return A.default}))})),g(6,(function(){throw new Error("old style JPEG compression is not supported.")})),g(7,(function(){return Promise.resolve().then((function(){return N})).then((function(A){return A.default}))})),g([8,32946],(function(){return Promise.resolve().then((function(){return OA})).then((function(A){return A.default}))})),g(32773,(function(){return Promise.resolve().then((function(){return _A})).then((function(A){return A.default}))})),g(34887,(function(){return Promise.resolve().then((function(){return le})).then(function(){var A=e(r.mark((function A(e){return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.zstd.init();case 2:return A.abrupt("return",e);case 3:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()).then((function(A){return A.default}))})),g(50001,(function(){return Promise.resolve().then((function(){return de})).then((function(A){return A.default}))}));var o=globalThis;function B(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function C(A,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(A,i.key,i)}}function Q(A,e,t){return e&&C(A.prototype,e),t&&C(A,t),A}function E(A,e){return E=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A},E(A,e)}function s(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&E(A,e)}function f(A,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(A){if(void 0===A)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return A}(A)}function c(A){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},c(A)}function h(A,e){var t=A.length-e,i=0;do{for(var r=e;r>0;r--)A[i+e]+=A[i],i++;t-=e}while(t>0)}function l(A,e,t){for(var i=0,r=A.length,I=r/t;r>e;){for(var g=e;g>0;--g)A[i+e]+=A[i],++i;r-=e}for(var n=A.slice(),a=0;a<I;++a)for(var o=0;o<t;++o)A[t*a+o]=n[(t-o-1)*I+a]}function u(A,e,t,i,r,I){if(!e||1===e)return A;for(var g=0;g<r.length;++g){if(r[g]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(r[g]!==r[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var n=r[0]/8,a=2===I?1:r.length,o=0;o<i&&!(o*a*t*n>=A.byteLength);++o){var B=void 0;if(2===e){switch(r[0]){case 8:B=new Uint8Array(A,o*a*t*n,a*t*n);break;case 16:B=new Uint16Array(A,o*a*t*n,a*t*n/2);break;case 32:B=new Uint32Array(A,o*a*t*n,a*t*n/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(r[0]," bits per sample."))}h(B,a)}else 3===e&&l(B=new Uint8Array(A,o*a*t*n,a*t*n),a,n)}return A}o.addEventListener("message",function(){var A=e(r.mark((function A(e){var t,i,I,g,a,B;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.data,i=t.id,I=t.fileDirectory,g=t.buffer,A.next=3,n(I);case 3:return a=A.sent,A.next=6,a.decode(I,g);case 6:B=A.sent,o.postMessage({decoded:B,id:i},[B]);case 8:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}());var w=function(){function A(){B(this,A)}var t;return Q(A,[{key:"decode",value:(t=e(r.mark((function A(e,t){var i,I,g,n,a;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.decodeBlock(t);case 2:if(i=A.sent,1===(I=e.Predictor||1)){A.next=9;break}return g=!e.StripOffsets,n=g?e.TileWidth:e.ImageWidth,a=g?e.TileLength:e.RowsPerStrip||e.ImageLength,A.abrupt("return",u(i,I,n,a,e.BitsPerSample,e.PlanarConfiguration));case 9:return A.abrupt("return",i);case 10:case"end":return A.stop()}}),A,this)}))),function(A,e){return t.apply(this,arguments)})}]),A}();function d(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var D=function(A){s(t,w);var e=d(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return A}}]),t}(),y=Object.freeze({__proto__:null,default:D});function k(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}function p(A,e){for(var t=e.length-1;t>=0;t--)A.push(e[t]);return A}function m(A){for(var e=new Uint16Array(4093),t=new Uint8Array(4093),i=0;i<=257;i++)e[i]=4096,t[i]=i;var r=258,I=9,g=0;function n(){r=258,I=9}function a(A){var e=function(A,e,t){var i=e%8,r=Math.floor(e/8),I=8-i,g=e+t-8*(r+1),n=8*(r+2)-(e+t),a=8*(r+2)-e;if(n=Math.max(0,n),r>=A.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;var o=A[r]&Math.pow(2,8-i)-1,B=o<<=t-I;if(r+1<A.length){var C=A[r+1]>>>n;B+=C<<=Math.max(0,t-a)}if(g>8&&r+2<A.length){var Q=8*(r+3)-(e+t);B+=A[r+2]>>>Q}return B}(A,g,I);return g+=I,e}function o(A,i){return t[r]=i,e[r]=A,++r-1}function B(A){for(var i=[],r=A;4096!==r;r=e[r])i.push(t[r]);return i}var C=[];n();for(var Q,E=new Uint8Array(A),s=a(E);257!==s;){if(256===s){for(n(),s=a(E);256===s;)s=a(E);if(257===s)break;if(s>256)throw new Error("corrupted code at scanline ".concat(s));p(C,B(s)),Q=s}else if(s<r){var f=B(s);p(C,f),o(Q,f[f.length-1]),Q=s}else{var c=B(Q);if(!c)throw new Error("Bogus entry. Not in dictionary, ".concat(Q," / ").concat(r,", position: ").concat(g));p(C,c),C.push(c[c.length-1]),o(Q,c[c.length-1]),Q=s}r+1>=Math.pow(2,I)&&(12===I?Q=void 0:I++),s=a(E)}return new Uint8Array(C)}var G=function(A){s(t,w);var e=k(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return m(A).buffer}}]),t}(),F=Object.freeze({__proto__:null,default:G});function S(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var v=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function R(A,e){for(var t=0,i=[],r=16;r>0&&!A[r-1];)--r;i.push({children:[],index:0});for(var I,g=i[0],n=0;n<r;n++){for(var a=0;a<A[n];a++){for((g=i.pop()).children[g.index]=e[t];g.index>0;)g=i.pop();for(g.index++,i.push(g);i.length<=n;)i.push(I={children:[],index:0}),g.children[g.index]=I.children,g=I;t++}n+1<r&&(i.push(I={children:[],index:0}),g.children[g.index]=I.children,g=I)}return i[0].children}function U(A,e,i,r,I,g,n,a,o){var B=i.mcusPerLine,C=i.progressive,Q=e,E=e,s=0,f=0;function c(){if(f>0)return f--,s>>f&1;if(255===(s=A[E++])){var e=A[E++];if(e)throw new Error("unexpected marker: ".concat((s<<8|e).toString(16)))}return f=7,s>>>7}function h(A){for(var e,i=A;null!==(e=c());){if("number"==typeof(i=i[e]))return i;if("object"!==t(i))throw new Error("invalid huffman sequence")}return null}function l(A){for(var e=A,t=0;e>0;){var i=c();if(null===i)return;t=t<<1|i,--e}return t}function u(A){var e=l(A);return e>=1<<A-1?e:e+(-1<<A)+1}var w=0;var d,D=0;function y(A,e,t,i,r){var I=t%B,g=(t/B|0)*A.v+i,n=I*A.h+r;e(A,A.blocks[g][n])}function k(A,e,t){var i=t/A.blocksPerLine|0,r=t%A.blocksPerLine;e(A,A.blocks[i][r])}var p,m,G,F,S,R,U=r.length;R=C?0===g?0===a?function(A,e){var t=h(A.huffmanTableDC),i=0===t?0:u(t)<<o;A.pred+=i,e[0]=A.pred}:function(A,e){e[0]|=c()<<o}:0===a?function(A,e){if(w>0)w--;else for(var t=g,i=n;t<=i;){var r=h(A.huffmanTableAC),I=15&r,a=r>>4;if(0===I){if(a<15){w=l(a)+(1<<a)-1;break}t+=16}else e[v[t+=a]]=u(I)*(1<<o),t++}}:function(A,e){for(var t=g,i=n,r=0;t<=i;){var I=v[t],a=e[I]<0?-1:1;switch(D){case 0:var B=h(A.huffmanTableAC),C=15&B;if(r=B>>4,0===C)r<15?(w=l(r)+(1<<r),D=4):(r=16,D=1);else{if(1!==C)throw new Error("invalid ACn encoding");d=u(C),D=r?2:3}continue;case 1:case 2:e[I]?e[I]+=(c()<<o)*a:0==--r&&(D=2===D?3:0);break;case 3:e[I]?e[I]+=(c()<<o)*a:(e[I]=d<<o,D=0);break;case 4:e[I]&&(e[I]+=(c()<<o)*a)}t++}4===D&&0==--w&&(D=0)}:function(A,e){var t=h(A.huffmanTableDC),i=0===t?0:u(t);A.pred+=i,e[0]=A.pred;for(var r=1;r<64;){var I=h(A.huffmanTableAC),g=15&I,n=I>>4;if(0===g){if(n<15)break;r+=16}else e[v[r+=n]]=u(g),r++}};var L,b,M=0;b=1===U?r[0].blocksPerLine*r[0].blocksPerColumn:B*i.mcusPerColumn;for(var N=I||b;M<b;){for(m=0;m<U;m++)r[m].pred=0;if(w=0,1===U)for(p=r[0],S=0;S<N;S++)k(p,R,M),M++;else for(S=0;S<N;S++){for(m=0;m<U;m++){var x=p=r[m],J=x.h,q=x.v;for(G=0;G<q;G++)for(F=0;F<J;F++)y(p,R,M,G,F)}if(++M===b)break}if(f=0,(L=A[E]<<8|A[E+1])<65280)throw new Error("marker was not found");if(!(L>=65488&&L<=65495))break;E+=2}return E-Q}function L(A,e){var t=[],i=e.blocksPerLine,r=e.blocksPerColumn,I=i<<3,g=new Int32Array(64),n=new Uint8Array(64);function a(A,t,i){var r,I,g,n,a,o,B,C,Q,E,s=e.quantizationTable,f=i;for(E=0;E<64;E++)f[E]=A[E]*s[E];for(E=0;E<8;++E){var c=8*E;0!==f[1+c]||0!==f[2+c]||0!==f[3+c]||0!==f[4+c]||0!==f[5+c]||0!==f[6+c]||0!==f[7+c]?(r=5793*f[0+c]+128>>8,I=5793*f[4+c]+128>>8,g=f[2+c],n=f[6+c],a=2896*(f[1+c]-f[7+c])+128>>8,C=2896*(f[1+c]+f[7+c])+128>>8,o=f[3+c]<<4,Q=r-I+1>>1,r=r+I+1>>1,I=Q,Q=3784*g+1567*n+128>>8,g=1567*g-3784*n+128>>8,n=Q,Q=a-(B=f[5+c]<<4)+1>>1,a=a+B+1>>1,B=Q,Q=C+o+1>>1,o=C-o+1>>1,C=Q,Q=r-n+1>>1,r=r+n+1>>1,n=Q,Q=I-g+1>>1,I=I+g+1>>1,g=Q,Q=2276*a+3406*C+2048>>12,a=3406*a-2276*C+2048>>12,C=Q,Q=799*o+4017*B+2048>>12,o=4017*o-799*B+2048>>12,B=Q,f[0+c]=r+C,f[7+c]=r-C,f[1+c]=I+B,f[6+c]=I-B,f[2+c]=g+o,f[5+c]=g-o,f[3+c]=n+a,f[4+c]=n-a):(Q=5793*f[0+c]+512>>10,f[0+c]=Q,f[1+c]=Q,f[2+c]=Q,f[3+c]=Q,f[4+c]=Q,f[5+c]=Q,f[6+c]=Q,f[7+c]=Q)}for(E=0;E<8;++E){var h=E;0!==f[8+h]||0!==f[16+h]||0!==f[24+h]||0!==f[32+h]||0!==f[40+h]||0!==f[48+h]||0!==f[56+h]?(r=5793*f[0+h]+2048>>12,I=5793*f[32+h]+2048>>12,g=f[16+h],n=f[48+h],a=2896*(f[8+h]-f[56+h])+2048>>12,C=2896*(f[8+h]+f[56+h])+2048>>12,o=f[24+h],Q=r-I+1>>1,r=r+I+1>>1,I=Q,Q=3784*g+1567*n+2048>>12,g=1567*g-3784*n+2048>>12,n=Q,Q=a-(B=f[40+h])+1>>1,a=a+B+1>>1,B=Q,Q=C+o+1>>1,o=C-o+1>>1,C=Q,Q=r-n+1>>1,r=r+n+1>>1,n=Q,Q=I-g+1>>1,I=I+g+1>>1,g=Q,Q=2276*a+3406*C+2048>>12,a=3406*a-2276*C+2048>>12,C=Q,Q=799*o+4017*B+2048>>12,o=4017*o-799*B+2048>>12,B=Q,f[0+h]=r+C,f[56+h]=r-C,f[8+h]=I+B,f[48+h]=I-B,f[16+h]=g+o,f[40+h]=g-o,f[24+h]=n+a,f[32+h]=n-a):(Q=5793*i[E+0]+8192>>14,f[0+h]=Q,f[8+h]=Q,f[16+h]=Q,f[24+h]=Q,f[32+h]=Q,f[40+h]=Q,f[48+h]=Q,f[56+h]=Q)}for(E=0;E<64;++E){var l=128+(f[E]+8>>4);t[E]=l<0?0:l>255?255:l}}for(var o=0;o<r;o++){for(var B=o<<3,C=0;C<8;C++)t.push(new Uint8Array(I));for(var Q=0;Q<i;Q++){a(e.blocks[o][Q],n,g);for(var E=0,s=Q<<3,f=0;f<8;f++)for(var c=t[B+f],h=0;h<8;h++)c[s+h]=n[E++]}}return t}var b=function(){function A(){B(this,A),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return Q(A,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(A){var e=0;function t(){var t=A[e]<<8|A[e+1];return e+=2,t}function i(A){var e,t,i=0,r=0;for(t in A.components)A.components.hasOwnProperty(t)&&(i<(e=A.components[t]).h&&(i=e.h),r<e.v&&(r=e.v));var I=Math.ceil(A.samplesPerLine/8/i),g=Math.ceil(A.scanLines/8/r);for(t in A.components)if(A.components.hasOwnProperty(t)){e=A.components[t];for(var n=Math.ceil(Math.ceil(A.samplesPerLine/8)*e.h/i),a=Math.ceil(Math.ceil(A.scanLines/8)*e.v/r),o=I*e.h,B=g*e.v,C=[],Q=0;Q<B;Q++){for(var E=[],s=0;s<o;s++)E.push(new Int32Array(64));C.push(E)}e.blocksPerLine=n,e.blocksPerColumn=a,e.blocks=C}A.maxH=i,A.maxV=r,A.mcusPerLine=I,A.mcusPerColumn=g}var r,I,g=t();if(65496!==g)throw new Error("SOI not found");for(g=t();65497!==g;){switch(g){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var n=(r=void 0,I=void 0,r=t(),I=A.subarray(e,e+r-2),e+=I.length,I);65504===g&&74===n[0]&&70===n[1]&&73===n[2]&&70===n[3]&&0===n[4]&&(this.jfif={version:{major:n[5],minor:n[6]},densityUnits:n[7],xDensity:n[8]<<8|n[9],yDensity:n[10]<<8|n[11],thumbWidth:n[12],thumbHeight:n[13],thumbData:n.subarray(14,14+3*n[12]*n[13])}),65518===g&&65===n[0]&&100===n[1]&&111===n[2]&&98===n[3]&&101===n[4]&&0===n[5]&&(this.adobe={version:n[6],flags0:n[7]<<8|n[8],flags1:n[9]<<8|n[10],transformCode:n[11]});break;case 65499:for(var a=t()+e-2;e<a;){var o=A[e++],B=new Int32Array(64);if(o>>4==0)for(var C=0;C<64;C++){B[v[C]]=A[e++]}else{if(o>>4!=1)throw new Error("DQT: invalid table spec");for(var Q=0;Q<64;Q++){B[v[Q]]=t()}}this.quantizationTables[15&o]=B}break;case 65472:case 65473:case 65474:t();for(var E={extended:65473===g,progressive:65474===g,precision:A[e++],scanLines:t(),samplesPerLine:t(),components:{},componentsOrder:[]},s=A[e++],f=void 0,c=0;c<s;c++){f=A[e];var h=A[e+1]>>4,l=15&A[e+1],u=A[e+2];E.componentsOrder.push(f),E.components[f]={h:h,v:l,quantizationIdx:u},e+=3}i(E),this.frames.push(E);break;case 65476:for(var w=t(),d=2;d<w;){for(var D=A[e++],y=new Uint8Array(16),k=0,p=0;p<16;p++,e++)y[p]=A[e],k+=y[p];for(var m=new Uint8Array(k),G=0;G<k;G++,e++)m[G]=A[e];d+=17+k,D>>4==0?this.huffmanTablesDC[15&D]=R(y,m):this.huffmanTablesAC[15&D]=R(y,m)}break;case 65501:t(),this.resetInterval=t();break;case 65498:t();for(var F=A[e++],S=[],L=this.frames[0],b=0;b<F;b++){var M=L.components[A[e++]],N=A[e++];M.huffmanTableDC=this.huffmanTablesDC[N>>4],M.huffmanTableAC=this.huffmanTablesAC[15&N],S.push(M)}var x=A[e++],J=A[e++],q=A[e++],Y=U(A,e,L,S,this.resetInterval,x,J,q>>4,15&q);e+=Y;break;case 65535:255!==A[e]&&e--;break;default:if(255===A[e-3]&&A[e-2]>=192&&A[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(g.toString(16)))}g=t()}}},{key:"getResult",value:function(){var A=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var t=this.frames[e].components,i=0,r=Object.keys(t);i<r.length;i++){var I=r[i];t[I].quantizationTable=this.quantizationTables[t[I].quantizationIdx],delete t[I].quantizationIdx}for(var g=A[0],n=g.components,a=g.componentsOrder,o=[],B=g.samplesPerLine,C=g.scanLines,Q=0;Q<a.length;Q++){var E=n[a[Q]];o.push({lines:L(0,E),scaleX:E.h/g.maxH,scaleY:E.v/g.maxV})}for(var s=new Uint8Array(B*C*o.length),f=0,c=0;c<C;++c)for(var h=0;h<B;++h)for(var l=0;l<o.length;++l){var u=o[l];s[f]=u.lines[0|c*u.scaleY][0|h*u.scaleX],++f}return s}}]),A}(),M=function(A){s(t,w);var e=S(t);function t(A){var i;return B(this,t),(i=e.call(this)).reader=new b,A.JPEGTables&&i.reader.parse(A.JPEGTables),i}return Q(t,[{key:"decodeBlock",value:function(A){try{return this.reader.resetFrames(),this.reader.parse(new Uint8Array(A)),this.reader.getResult().buffer}catch(A){if("SOI not found"===A.message){console.warn("Suppressed JPEG decoding error: SOI not found");var e=new ArrayBuffer(4),t=new Uint8Array(e);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,e}throw A}}}]),t}(),N=Object.freeze({__proto__:null,default:M});function x(A){for(var e=A.length;--e>=0;)A[e]=0}x(new Array(576)),x(new Array(60)),x(new Array(512)),x(new Array(256)),x(new Array(29)),x(new Array(30));var J=function(A,e,t,i){for(var r=65535&A|0,I=A>>>16&65535|0,g=0;0!==t;){t-=g=t>2e3?2e3:t;do{I=I+(r=r+e[i++]|0)|0}while(--g);r%=65521,I%=65521}return r|I<<16|0},q=new Uint32Array(function(){for(var A,e=[],t=0;t<256;t++){A=t;for(var i=0;i<8;i++)A=1&A?3988292384^A>>>1:A>>>1;e[t]=A}return e}()),Y=function(A,e,t,i){var r=q,I=i+t;A^=-1;for(var g=i;g<I;g++)A=A>>>8^r[255&(A^e[g])];return-1^A},K={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},H={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},O=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},P=function(A){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var i=e.shift();if(i){if("object"!==t(i))throw new TypeError(i+"must be non-object");for(var r in i)O(i,r)&&(A[r]=i[r])}}return A},T=function(A){for(var e=0,t=0,i=A.length;t<i;t++)e+=A[t].length;for(var r=new Uint8Array(e),I=0,g=0,n=A.length;I<n;I++){var a=A[I];r.set(a,g),g+=a.length}return r},V=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(A){V=!1}for(var _=new Uint8Array(256),X=0;X<256;X++)_[X]=X>=252?6:X>=248?5:X>=240?4:X>=224?3:X>=192?2:1;_[254]=_[254]=1;var Z=function(A){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(A);var e,t,i,r,I,g=A.length,n=0;for(r=0;r<g;r++)55296==(64512&(t=A.charCodeAt(r)))&&r+1<g&&56320==(64512&(i=A.charCodeAt(r+1)))&&(t=65536+(t-55296<<10)+(i-56320),r++),n+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(n),I=0,r=0;I<n;r++)55296==(64512&(t=A.charCodeAt(r)))&&r+1<g&&56320==(64512&(i=A.charCodeAt(r+1)))&&(t=65536+(t-55296<<10)+(i-56320),r++),t<128?e[I++]=t:t<2048?(e[I++]=192|t>>>6,e[I++]=128|63&t):t<65536?(e[I++]=224|t>>>12,e[I++]=128|t>>>6&63,e[I++]=128|63&t):(e[I++]=240|t>>>18,e[I++]=128|t>>>12&63,e[I++]=128|t>>>6&63,e[I++]=128|63&t);return e},j=function(A,e){var t,i,r=e||A.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(A.subarray(0,e));var I=new Array(2*r);for(i=0,t=0;t<r;){var g=A[t++];if(g<128)I[i++]=g;else{var n=_[g];if(n>4)I[i++]=65533,t+=n-1;else{for(g&=2===n?31:3===n?15:7;n>1&&t<r;)g=g<<6|63&A[t++],n--;n>1?I[i++]=65533:g<65536?I[i++]=g:(g-=65536,I[i++]=55296|g>>10&1023,I[i++]=56320|1023&g)}}}return function(A,e){if(e<65534&&A.subarray&&V)return String.fromCharCode.apply(null,A.length===e?A:A.subarray(0,e));for(var t="",i=0;i<e;i++)t+=String.fromCharCode(A[i]);return t}(I,i)},W=function(A,e){(e=e||A.length)>A.length&&(e=A.length);for(var t=e-1;t>=0&&128==(192&A[t]);)t--;return t<0||0===t?e:t+_[A[t]]>e?t:e};var z=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},$=function(A,e){var t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c,h,l,u,w,d,D,y,k,p,m=A.state;t=A.next_in,k=A.input,i=t+(A.avail_in-5),r=A.next_out,p=A.output,I=r-(e-A.avail_out),g=r+(A.avail_out-257),n=m.dmax,a=m.wsize,o=m.whave,B=m.wnext,C=m.window,Q=m.hold,E=m.bits,s=m.lencode,f=m.distcode,c=(1<<m.lenbits)-1,h=(1<<m.distbits)-1;A:do{E<15&&(Q+=k[t++]<<E,E+=8,Q+=k[t++]<<E,E+=8),l=s[Q&c];e:for(;;){if(Q>>>=u=l>>>24,E-=u,0===(u=l>>>16&255))p[r++]=65535&l;else{if(!(16&u)){if(0==(64&u)){l=s[(65535&l)+(Q&(1<<u)-1)];continue e}if(32&u){m.mode=12;break A}A.msg="invalid literal/length code",m.mode=30;break A}w=65535&l,(u&=15)&&(E<u&&(Q+=k[t++]<<E,E+=8),w+=Q&(1<<u)-1,Q>>>=u,E-=u),E<15&&(Q+=k[t++]<<E,E+=8,Q+=k[t++]<<E,E+=8),l=f[Q&h];t:for(;;){if(Q>>>=u=l>>>24,E-=u,!(16&(u=l>>>16&255))){if(0==(64&u)){l=f[(65535&l)+(Q&(1<<u)-1)];continue t}A.msg="invalid distance code",m.mode=30;break A}if(d=65535&l,E<(u&=15)&&(Q+=k[t++]<<E,(E+=8)<u&&(Q+=k[t++]<<E,E+=8)),(d+=Q&(1<<u)-1)>n){A.msg="invalid distance too far back",m.mode=30;break A}if(Q>>>=u,E-=u,d>(u=r-I)){if((u=d-u)>o&&m.sane){A.msg="invalid distance too far back",m.mode=30;break A}if(D=0,y=C,0===B){if(D+=a-u,u<w){w-=u;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}}else if(B<u){if(D+=a+B-u,(u-=B)<w){w-=u;do{p[r++]=C[D++]}while(--u);if(D=0,B<w){w-=u=B;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}}}else if(D+=B-u,u<w){w-=u;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}for(;w>2;)p[r++]=y[D++],p[r++]=y[D++],p[r++]=y[D++],w-=3;w&&(p[r++]=y[D++],w>1&&(p[r++]=y[D++]))}else{D=r-d;do{p[r++]=p[D++],p[r++]=p[D++],p[r++]=p[D++],w-=3}while(w>2);w&&(p[r++]=p[D++],w>1&&(p[r++]=p[D++]))}break}}break}}while(t<i&&r<g);t-=w=E>>3,Q&=(1<<(E-=w<<3))-1,A.next_in=t,A.next_out=r,A.avail_in=t<i?i-t+5:5-(t-i),A.avail_out=r<g?g-r+257:257-(r-g),m.hold=Q,m.bits=E},AA=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),eA=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),tA=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),iA=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),rA=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q,E,s,f,c,h=n.bits,l=0,u=0,w=0,d=0,D=0,y=0,k=0,p=0,m=0,G=0,F=null,S=0,v=new Uint16Array(16),R=new Uint16Array(16),U=null,L=0;for(l=0;l<=15;l++)v[l]=0;for(u=0;u<i;u++)v[e[t+u]]++;for(D=h,d=15;d>=1&&0===v[d];d--);if(D>d&&(D=d),0===d)return r[I++]=20971520,r[I++]=20971520,n.bits=1,0;for(w=1;w<d&&0===v[w];w++);for(D<w&&(D=w),p=1,l=1;l<=15;l++)if(p<<=1,(p-=v[l])<0)return-1;if(p>0&&(0===A||1!==d))return-1;for(R[1]=0,l=1;l<15;l++)R[l+1]=R[l]+v[l];for(u=0;u<i;u++)0!==e[t+u]&&(g[R[e[t+u]]++]=u);if(0===A?(F=U=g,E=19):1===A?(F=AA,S-=257,U=eA,L-=257,E=256):(F=tA,U=iA,E=-1),G=0,u=0,l=w,Q=I,y=D,k=0,B=-1,C=(m=1<<D)-1,1===A&&m>852||2===A&&m>592)return 1;for(;;){s=l-k,g[u]<E?(f=0,c=g[u]):g[u]>E?(f=U[L+g[u]],c=F[S+g[u]]):(f=96,c=0),a=1<<l-k,w=o=1<<y;do{r[Q+(G>>k)+(o-=a)]=s<<24|f<<16|c|0}while(0!==o);for(a=1<<l-1;G&a;)a>>=1;if(0!==a?(G&=a-1,G+=a):G=0,u++,0==--v[l]){if(l===d)break;l=e[t+g[u]]}if(l>D&&(G&C)!==B){for(0===k&&(k=D),Q+=w,p=1<<(y=l-k);y+k<d&&!((p-=v[y+k])<=0);)y++,p<<=1;if(m+=1<<y,1===A&&m>852||2===A&&m>592)return 1;r[B=G&C]=D<<24|y<<16|Q-I|0}}return 0!==G&&(r[Q+G]=l-k<<24|64<<16|0),n.bits=D,0},IA=H.Z_FINISH,gA=H.Z_BLOCK,nA=H.Z_TREES,aA=H.Z_OK,oA=H.Z_STREAM_END,BA=H.Z_NEED_DICT,CA=H.Z_STREAM_ERROR,QA=H.Z_DATA_ERROR,EA=H.Z_MEM_ERROR,sA=H.Z_BUF_ERROR,fA=H.Z_DEFLATED,cA=function(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)};function hA(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var lA,uA,wA=function(A){if(!A||!A.state)return CA;var e=A.state;return A.total_in=A.total_out=e.total=0,A.msg="",e.wrap&&(A.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,aA},dA=function(A){if(!A||!A.state)return CA;var e=A.state;return e.wsize=0,e.whave=0,e.wnext=0,wA(A)},DA=function(A,e){var t;if(!A||!A.state)return CA;var i=A.state;return e<0?(t=0,e=-e):(t=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?CA:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,dA(A))},yA=function(A,e){if(!A)return CA;var t=new hA;A.state=t,t.window=null;var i=DA(A,e);return i!==aA&&(A.state=null),i},kA=!0,pA=function(A){if(kA){lA=new Int32Array(512),uA=new Int32Array(32);for(var e=0;e<144;)A.lens[e++]=8;for(;e<256;)A.lens[e++]=9;for(;e<280;)A.lens[e++]=7;for(;e<288;)A.lens[e++]=8;for(rA(1,A.lens,0,288,lA,0,A.work,{bits:9}),e=0;e<32;)A.lens[e++]=5;rA(2,A.lens,0,32,uA,0,A.work,{bits:5}),kA=!1}A.lencode=lA,A.lenbits=9,A.distcode=uA,A.distbits=5},mA=function(A,e,t,i){var r,I=A.state;return null===I.window&&(I.wsize=1<<I.wbits,I.wnext=0,I.whave=0,I.window=new Uint8Array(I.wsize)),i>=I.wsize?(I.window.set(e.subarray(t-I.wsize,t),0),I.wnext=0,I.whave=I.wsize):((r=I.wsize-I.wnext)>i&&(r=i),I.window.set(e.subarray(t-i,t-i+r),I.wnext),(i-=r)?(I.window.set(e.subarray(t-i,t),0),I.wnext=i,I.whave=I.wsize):(I.wnext+=r,I.wnext===I.wsize&&(I.wnext=0),I.whave<I.wsize&&(I.whave+=r))),0},GA={inflateReset:dA,inflateReset2:DA,inflateResetKeep:wA,inflateInit:function(A){return yA(A,15)},inflateInit2:yA,inflate:function(A,e){var t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c,h,l,u,w,d,D,y,k,p,m=0,G=new Uint8Array(4),F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!A||!A.state||!A.output||!A.input&&0!==A.avail_in)return CA;12===(t=A.state).mode&&(t.mode=13),g=A.next_out,r=A.output,a=A.avail_out,I=A.next_in,i=A.input,n=A.avail_in,o=t.hold,B=t.bits,C=n,Q=a,y=aA;A:for(;;)switch(t.mode){case 1:if(0===t.wrap){t.mode=13;break}for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(2&t.wrap&&35615===o){t.check=0,G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0),o=0,B=0,t.mode=2;break}if(t.flags=0,t.head&&(t.head.done=!1),!(1&t.wrap)||(((255&o)<<8)+(o>>8))%31){A.msg="incorrect header check",t.mode=30;break}if((15&o)!==fA){A.msg="unknown compression method",t.mode=30;break}if(B-=4,D=8+(15&(o>>>=4)),0===t.wbits)t.wbits=D;else if(D>t.wbits){A.msg="invalid window size",t.mode=30;break}t.dmax=1<<t.wbits,A.adler=t.check=1,t.mode=512&o?10:12,o=0,B=0;break;case 2:for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(t.flags=o,(255&t.flags)!==fA){A.msg="unknown compression method",t.mode=30;break}if(57344&t.flags){A.msg="unknown header flags set",t.mode=30;break}t.head&&(t.head.text=o>>8&1),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0,t.mode=3;case 3:for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.head&&(t.head.time=o),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,G[2]=o>>>16&255,G[3]=o>>>24&255,t.check=Y(t.check,G,4,0)),o=0,B=0,t.mode=4;case 4:for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.head&&(t.head.xflags=255&o,t.head.os=o>>8),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0,t.mode=5;case 5:if(1024&t.flags){for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.length=o,t.head&&(t.head.extra_len=o),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0}else t.head&&(t.head.extra=null);t.mode=6;case 6:if(1024&t.flags&&((E=t.length)>n&&(E=n),E&&(t.head&&(D=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(I,I+E),D)),512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,t.length-=E),t.length))break A;t.length=0,t.mode=7;case 7:if(2048&t.flags){if(0===n)break A;E=0;do{D=i[I+E++],t.head&&D&&t.length<65536&&(t.head.name+=String.fromCharCode(D))}while(D&&E<n);if(512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,D)break A}else t.head&&(t.head.name=null);t.length=0,t.mode=8;case 8:if(4096&t.flags){if(0===n)break A;E=0;do{D=i[I+E++],t.head&&D&&t.length<65536&&(t.head.comment+=String.fromCharCode(D))}while(D&&E<n);if(512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,D)break A}else t.head&&(t.head.comment=null);t.mode=9;case 9:if(512&t.flags){for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o!==(65535&t.check)){A.msg="header crc mismatch",t.mode=30;break}o=0,B=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),A.adler=t.check=0,t.mode=12;break;case 10:for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}A.adler=t.check=cA(o),o=0,B=0,t.mode=11;case 11:if(0===t.havedict)return A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,BA;A.adler=t.check=1,t.mode=12;case 12:if(e===gA||e===nA)break A;case 13:if(t.last){o>>>=7&B,B-=7&B,t.mode=27;break}for(;B<3;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}switch(t.last=1&o,B-=1,3&(o>>>=1)){case 0:t.mode=14;break;case 1:if(pA(t),t.mode=20,e===nA){o>>>=2,B-=2;break A}break;case 2:t.mode=17;break;case 3:A.msg="invalid block type",t.mode=30}o>>>=2,B-=2;break;case 14:for(o>>>=7&B,B-=7&B;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if((65535&o)!=(o>>>16^65535)){A.msg="invalid stored block lengths",t.mode=30;break}if(t.length=65535&o,o=0,B=0,t.mode=15,e===nA)break A;case 15:t.mode=16;case 16:if(E=t.length){if(E>n&&(E=n),E>a&&(E=a),0===E)break A;r.set(i.subarray(I,I+E),g),n-=E,I+=E,a-=E,g+=E,t.length-=E;break}t.mode=12;break;case 17:for(;B<14;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(t.nlen=257+(31&o),o>>>=5,B-=5,t.ndist=1+(31&o),o>>>=5,B-=5,t.ncode=4+(15&o),o>>>=4,B-=4,t.nlen>286||t.ndist>30){A.msg="too many length or distance symbols",t.mode=30;break}t.have=0,t.mode=18;case 18:for(;t.have<t.ncode;){for(;B<3;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.lens[F[t.have++]]=7&o,o>>>=3,B-=3}for(;t.have<19;)t.lens[F[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,k={bits:t.lenbits},y=rA(0,t.lens,0,19,t.lencode,0,t.work,k),t.lenbits=k.bits,y){A.msg="invalid code lengths set",t.mode=30;break}t.have=0,t.mode=19;case 19:for(;t.have<t.nlen+t.ndist;){for(;h=(m=t.lencode[o&(1<<t.lenbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(l<16)o>>>=c,B-=c,t.lens[t.have++]=l;else{if(16===l){for(p=c+2;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o>>>=c,B-=c,0===t.have){A.msg="invalid bit length repeat",t.mode=30;break}D=t.lens[t.have-1],E=3+(3&o),o>>>=2,B-=2}else if(17===l){for(p=c+3;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}B-=c,D=0,E=3+(7&(o>>>=c)),o>>>=3,B-=3}else{for(p=c+7;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}B-=c,D=0,E=11+(127&(o>>>=c)),o>>>=7,B-=7}if(t.have+E>t.nlen+t.ndist){A.msg="invalid bit length repeat",t.mode=30;break}for(;E--;)t.lens[t.have++]=D}}if(30===t.mode)break;if(0===t.lens[256]){A.msg="invalid code -- missing end-of-block",t.mode=30;break}if(t.lenbits=9,k={bits:t.lenbits},y=rA(1,t.lens,0,t.nlen,t.lencode,0,t.work,k),t.lenbits=k.bits,y){A.msg="invalid literal/lengths set",t.mode=30;break}if(t.distbits=6,t.distcode=t.distdyn,k={bits:t.distbits},y=rA(2,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,k),t.distbits=k.bits,y){A.msg="invalid distances set",t.mode=30;break}if(t.mode=20,e===nA)break A;case 20:t.mode=21;case 21:if(n>=6&&a>=258){A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,$(A,Q),g=A.next_out,r=A.output,a=A.avail_out,I=A.next_in,i=A.input,n=A.avail_in,o=t.hold,B=t.bits,12===t.mode&&(t.back=-1);break}for(t.back=0;h=(m=t.lencode[o&(1<<t.lenbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(h&&0==(240&h)){for(u=c,w=h,d=l;h=(m=t.lencode[d+((o&(1<<u+w)-1)>>u)])>>>16&255,l=65535&m,!(u+(c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}o>>>=u,B-=u,t.back+=u}if(o>>>=c,B-=c,t.back+=c,t.length=l,0===h){t.mode=26;break}if(32&h){t.back=-1,t.mode=12;break}if(64&h){A.msg="invalid literal/length code",t.mode=30;break}t.extra=15&h,t.mode=22;case 22:if(t.extra){for(p=t.extra;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.length+=o&(1<<t.extra)-1,o>>>=t.extra,B-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=23;case 23:for(;h=(m=t.distcode[o&(1<<t.distbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(0==(240&h)){for(u=c,w=h,d=l;h=(m=t.distcode[d+((o&(1<<u+w)-1)>>u)])>>>16&255,l=65535&m,!(u+(c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}o>>>=u,B-=u,t.back+=u}if(o>>>=c,B-=c,t.back+=c,64&h){A.msg="invalid distance code",t.mode=30;break}t.offset=l,t.extra=15&h,t.mode=24;case 24:if(t.extra){for(p=t.extra;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.offset+=o&(1<<t.extra)-1,o>>>=t.extra,B-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){A.msg="invalid distance too far back",t.mode=30;break}t.mode=25;case 25:if(0===a)break A;if(E=Q-a,t.offset>E){if((E=t.offset-E)>t.whave&&t.sane){A.msg="invalid distance too far back",t.mode=30;break}E>t.wnext?(E-=t.wnext,s=t.wsize-E):s=t.wnext-E,E>t.length&&(E=t.length),f=t.window}else f=r,s=g-t.offset,E=t.length;E>a&&(E=a),a-=E,t.length-=E;do{r[g++]=f[s++]}while(--E);0===t.length&&(t.mode=21);break;case 26:if(0===a)break A;r[g++]=t.length,a--,t.mode=21;break;case 27:if(t.wrap){for(;B<32;){if(0===n)break A;n--,o|=i[I++]<<B,B+=8}if(Q-=a,A.total_out+=Q,t.total+=Q,Q&&(A.adler=t.check=t.flags?Y(t.check,r,Q,g-Q):J(t.check,r,Q,g-Q)),Q=a,(t.flags?o:cA(o))!==t.check){A.msg="incorrect data check",t.mode=30;break}o=0,B=0}t.mode=28;case 28:if(t.wrap&&t.flags){for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o!==(4294967295&t.total)){A.msg="incorrect length check",t.mode=30;break}o=0,B=0}t.mode=29;case 29:y=oA;break A;case 30:y=QA;break A;case 31:return EA;default:return CA}return A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,(t.wsize||Q!==A.avail_out&&t.mode<30&&(t.mode<27||e!==IA))&&mA(A,A.output,A.next_out,Q-A.avail_out),C-=A.avail_in,Q-=A.avail_out,A.total_in+=C,A.total_out+=Q,t.total+=Q,t.wrap&&Q&&(A.adler=t.check=t.flags?Y(t.check,r,Q,A.next_out-Q):J(t.check,r,Q,A.next_out-Q)),A.data_type=t.bits+(t.last?64:0)+(12===t.mode?128:0)+(20===t.mode||15===t.mode?256:0),(0===C&&0===Q||e===IA)&&y===aA&&(y=sA),y},inflateEnd:function(A){if(!A||!A.state)return CA;var e=A.state;return e.window&&(e.window=null),A.state=null,aA},inflateGetHeader:function(A,e){if(!A||!A.state)return CA;var t=A.state;return 0==(2&t.wrap)?CA:(t.head=e,e.done=!1,aA)},inflateSetDictionary:function(A,e){var t,i=e.length;return A&&A.state?0!==(t=A.state).wrap&&11!==t.mode?CA:11===t.mode&&J(1,e,i,0)!==t.check?QA:mA(A,e,i,i)?(t.mode=31,EA):(t.havedict=1,aA):CA},inflateInfo:"pako inflate (from Nodeca project)"};var FA=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},SA=Object.prototype.toString,vA=H.Z_NO_FLUSH,RA=H.Z_FINISH,UA=H.Z_OK,LA=H.Z_STREAM_END,bA=H.Z_NEED_DICT,MA=H.Z_STREAM_ERROR,NA=H.Z_DATA_ERROR,xA=H.Z_MEM_ERROR;function JA(A){this.options=P({chunkSize:65536,windowBits:15,to:""},A||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||A&&A.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new z,this.strm.avail_out=0;var t=GA.inflateInit2(this.strm,e.windowBits);if(t!==UA)throw new Error(K[t]);if(this.header=new FA,GA.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Z(e.dictionary):"[object ArrayBuffer]"===SA.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=GA.inflateSetDictionary(this.strm,e.dictionary))!==UA))throw new Error(K[t])}function qA(A,e){var t=new JA(e);if(t.push(A),t.err)throw t.msg||K[t.err];return t.result}JA.prototype.push=function(A,e){var t,i,r,I=this.strm,g=this.options.chunkSize,n=this.options.dictionary;if(this.ended)return!1;for(i=e===~~e?e:!0===e?RA:vA,"[object ArrayBuffer]"===SA.call(A)?I.input=new Uint8Array(A):I.input=A,I.next_in=0,I.avail_in=I.input.length;;){for(0===I.avail_out&&(I.output=new Uint8Array(g),I.next_out=0,I.avail_out=g),(t=GA.inflate(I,i))===bA&&n&&((t=GA.inflateSetDictionary(I,n))===UA?t=GA.inflate(I,i):t===NA&&(t=bA));I.avail_in>0&&t===LA&&I.state.wrap>0&&0!==A[I.next_in];)GA.inflateReset(I),t=GA.inflate(I,i);switch(t){case MA:case NA:case bA:case xA:return this.onEnd(t),this.ended=!0,!1}if(r=I.avail_out,I.next_out&&(0===I.avail_out||t===LA))if("string"===this.options.to){var a=W(I.output,I.next_out),o=I.next_out-a,B=j(I.output,a);I.next_out=o,I.avail_out=g-o,o&&I.output.set(I.output.subarray(a,a+o),0),this.onData(B)}else this.onData(I.output.length===I.next_out?I.output:I.output.subarray(0,I.next_out));if(t!==UA||0!==r){if(t===LA)return t=GA.inflateEnd(this.strm),this.onEnd(t),this.ended=!0,!0;if(0===I.avail_in)break}}return!0},JA.prototype.onData=function(A){this.chunks.push(A)},JA.prototype.onEnd=function(A){A===UA&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=T(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};var YA={Inflate:JA,inflate:qA,inflateRaw:function(A,e){return(e=e||{}).raw=!0,qA(A,e)},ungzip:qA,constants:H}.inflate;function KA(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var HA=function(A){s(t,w);var e=KA(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return YA(new Uint8Array(A)).buffer}}]),t}(),OA=Object.freeze({__proto__:null,default:HA});function PA(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var TA,VA=function(A){s(t,w);var e=PA(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){for(var e=new DataView(A),t=[],i=0;i<A.byteLength;++i){var r=e.getInt8(i);if(r<0){var I=e.getUint8(i+1);r=-r;for(var g=0;g<=r;++g)t.push(I);i+=1}else{for(var n=0;n<=r;++n)t.push(e.getUint8(i+n+1));i+=r+1}}return new Uint8Array(t).buffer}}]),t}(),_A=Object.freeze({__proto__:null,default:VA}),XA={exports:{}};TA=XA,\n/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */\nfunction(){var A,e,t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c=(A={defaultNoDataValue:-34027999387901484e22,decode:function(I,g){var n=(g=g||{}).encodedMaskData||null===g.encodedMaskData,a=r(I,g.inputOffset||0,n),o=null!==g.noDataValue?g.noDataValue:A.defaultNoDataValue,B=e(a,g.pixelType||Float32Array,g.encodedMaskData,o,g.returnMask),C={width:a.width,height:a.height,pixelData:B.resultPixels,minValue:B.minValue,maxValue:a.pixels.maxValue,noDataValue:o};return B.resultMask&&(C.maskData=B.resultMask),g.returnEncodedMask&&a.mask&&(C.encodedMaskData=a.mask.bitset?a.mask.bitset:null),g.returnFileInfo&&(C.fileInfo=t(a),g.computeUsedBitDepths&&(C.fileInfo.bitDepths=i(a))),C}},e=function(A,e,t,i,r){var g,n,a,o=0,B=A.pixels.numBlocksX,C=A.pixels.numBlocksY,Q=Math.floor(A.width/B),E=Math.floor(A.height/C),s=2*A.maxZError,f=Number.MAX_VALUE;t=t||(A.mask?A.mask.bitset:null),n=new e(A.width*A.height),r&&t&&(a=new Uint8Array(A.width*A.height));for(var c,h,l=new Float32Array(Q*E),u=0;u<=C;u++){var w=u!==C?E:A.height%C;if(0!==w)for(var d=0;d<=B;d++){var D=d!==B?Q:A.width%B;if(0!==D){var y,k,p,m,G=u*A.width*E+d*Q,F=A.width-D,S=A.pixels.blocks[o];if(S.encoding<2?(0===S.encoding?y=S.rawData:(I(S.stuffedData,S.bitsPerPixel,S.numValidPixels,S.offset,s,l,A.pixels.maxValue),y=l),k=0):p=2===S.encoding?0:S.offset,t)for(h=0;h<w;h++){for(7&G&&(m=t[G>>3],m<<=7&G),c=0;c<D;c++)7&G||(m=t[G>>3]),128&m?(a&&(a[G]=1),f=f>(g=S.encoding<2?y[k++]:p)?g:f,n[G++]=g):(a&&(a[G]=0),n[G++]=i),m<<=1;G+=F}else if(S.encoding<2)for(h=0;h<w;h++){for(c=0;c<D;c++)f=f>(g=y[k++])?g:f,n[G++]=g;G+=F}else for(f=f>p?p:f,h=0;h<w;h++){for(c=0;c<D;c++)n[G++]=p;G+=F}if(1===S.encoding&&k!==S.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:n,resultMask:a,minValue:f}},t=function(A){return{fileIdentifierString:A.fileIdentifierString,fileVersion:A.fileVersion,imageType:A.imageType,height:A.height,width:A.width,maxZError:A.maxZError,eofOffset:A.eofOffset,mask:A.mask?{numBlocksX:A.mask.numBlocksX,numBlocksY:A.mask.numBlocksY,numBytes:A.mask.numBytes,maxValue:A.mask.maxValue}:null,pixels:{numBlocksX:A.pixels.numBlocksX,numBlocksY:A.pixels.numBlocksY,numBytes:A.pixels.numBytes,maxValue:A.pixels.maxValue,noDataValue:A.noDataValue}}},i=function(A){for(var e=A.pixels.numBlocksX*A.pixels.numBlocksY,t={},i=0;i<e;i++){var r=A.pixels.blocks[i];0===r.encoding?t.float32=!0:1===r.encoding?t[r.bitsPerPixel]=!0:t[0]=!0}return Object.keys(t)},r=function(A,e,t){var i={},r=new Uint8Array(A,e,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;e+=10;var I=new DataView(A,e,24);if(i.fileVersion=I.getInt32(0,!0),i.imageType=I.getInt32(4,!0),i.height=I.getUint32(8,!0),i.width=I.getUint32(12,!0),i.maxZError=I.getFloat64(16,!0),e+=24,!t)if(I=new DataView(A,e,16),i.mask={},i.mask.numBlocksY=I.getUint32(0,!0),i.mask.numBlocksX=I.getUint32(4,!0),i.mask.numBytes=I.getUint32(8,!0),i.mask.maxValue=I.getFloat32(12,!0),e+=16,i.mask.numBytes>0){var g=new Uint8Array(Math.ceil(i.width*i.height/8)),n=(I=new DataView(A,e,i.mask.numBytes)).getInt16(0,!0),a=2,o=0;do{if(n>0)for(;n--;)g[o++]=I.getUint8(a++);else{var B=I.getUint8(a++);for(n=-n;n--;)g[o++]=B}n=I.getInt16(a,!0),a+=2}while(a<i.mask.numBytes);if(-32768!==n||o<g.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=g,e+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));I=new DataView(A,e,16),i.pixels={},i.pixels.numBlocksY=I.getUint32(0,!0),i.pixels.numBlocksX=I.getUint32(4,!0),i.pixels.numBytes=I.getUint32(8,!0),i.pixels.maxValue=I.getFloat32(12,!0),e+=16;var C=i.pixels.numBlocksX,Q=i.pixels.numBlocksY,E=C+(i.width%C>0?1:0),s=Q+(i.height%Q>0?1:0);i.pixels.blocks=new Array(E*s);for(var f=0,c=0;c<s;c++)for(var h=0;h<E;h++){var l=0,u=A.byteLength-e;I=new DataView(A,e,Math.min(10,u));var w={};i.pixels.blocks[f++]=w;var d=I.getUint8(0);if(l++,w.encoding=63&d,w.encoding>3)throw"Invalid block encoding ("+w.encoding+")";if(2!==w.encoding){if(0!==d&&2!==d){if(d>>=6,w.offsetType=d,2===d)w.offset=I.getInt8(1),l++;else if(1===d)w.offset=I.getInt16(1,!0),l+=2;else{if(0!==d)throw"Invalid block offset type";w.offset=I.getFloat32(1,!0),l+=4}if(1===w.encoding)if(d=I.getUint8(l),l++,w.bitsPerPixel=63&d,d>>=6,w.numValidPixelsType=d,2===d)w.numValidPixels=I.getUint8(l),l++;else if(1===d)w.numValidPixels=I.getUint16(l,!0),l+=2;else{if(0!==d)throw"Invalid valid pixel count type";w.numValidPixels=I.getUint32(l,!0),l+=4}}var D;if(e+=l,3!==w.encoding)if(0===w.encoding){var y=(i.pixels.numBytes-1)/4;if(y!==Math.floor(y))throw"uncompressed block has invalid length";D=new ArrayBuffer(4*y),new Uint8Array(D).set(new Uint8Array(A,e,4*y));var k=new Float32Array(D);w.rawData=k,e+=4*y}else if(1===w.encoding){var p=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),m=Math.ceil(p/4);D=new ArrayBuffer(4*m),new Uint8Array(D).set(new Uint8Array(A,e,p)),w.stuffedData=new Uint32Array(D),e+=p}}else e++}return i.eofOffset=e,i},I=function(A,e,t,i,r,I,g){var n,a,o,B=(1<<e)-1,C=0,Q=0,E=Math.ceil((g-i)/r),s=4*A.length-Math.ceil(e*t/8);for(A[A.length-1]<<=8*s,n=0;n<t;n++){if(0===Q&&(o=A[C++],Q=32),Q>=e)a=o>>>Q-e&B,Q-=e;else{var f=e-Q;a=(o&B)<<f&B,a+=(o=A[C++])>>>(Q=32-f)}I[n]=a<E?i+a*r:g}return I},A),h=(g=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q,E=(1<<t)-1,s=0,f=0,c=4*A.length-Math.ceil(t*i/8);if(A[A.length-1]<<=8*c,r)for(a=0;a<i;a++)0===f&&(B=A[s++],f=32),f>=t?(o=B>>>f-t&E,f-=t):(o=(B&E)<<(C=t-f)&E,o+=(B=A[s++])>>>(f=32-C)),e[a]=r[o];else for(Q=Math.ceil((n-I)/g),a=0;a<i;a++)0===f&&(B=A[s++],f=32),f>=t?(o=B>>>f-t&E,f-=t):(o=(B&E)<<(C=t-f)&E,o+=(B=A[s++])>>>(f=32-C)),e[a]=o<Q?I+o*g:n},n=function(A,e,t,i,r,I){var g,n=(1<<e)-1,a=0,o=0,B=0,C=0,Q=0,E=[],s=4*A.length-Math.ceil(e*t/8);A[A.length-1]<<=8*s;var f=Math.ceil((I-i)/r);for(o=0;o<t;o++)0===C&&(g=A[a++],C=32),C>=e?(Q=g>>>C-e&n,C-=e):(Q=(g&n)<<(B=e-C)&n,Q+=(g=A[a++])>>>(C=32-B)),E[o]=Q<f?i+Q*r:I;return E.unshift(i),E},a=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q=(1<<t)-1,E=0,s=0,f=0;if(r)for(a=0;a<i;a++)0===s&&(B=A[E++],s=32,f=0),s>=t?(o=B>>>f&Q,s-=t,f+=t):(o=B>>>f&Q,s=32-(C=t-s),o|=((B=A[E++])&(1<<C)-1)<<t-C,f=C),e[a]=r[o];else{var c=Math.ceil((n-I)/g);for(a=0;a<i;a++)0===s&&(B=A[E++],s=32,f=0),s>=t?(o=B>>>f&Q,s-=t,f+=t):(o=B>>>f&Q,s=32-(C=t-s),o|=((B=A[E++])&(1<<C)-1)<<t-C,f=C),e[a]=o<c?I+o*g:n}return e},o=function(A,e,t,i,r,I){var g,n=(1<<e)-1,a=0,o=0,B=0,C=0,Q=0,E=0,s=[],f=Math.ceil((I-i)/r);for(o=0;o<t;o++)0===C&&(g=A[a++],C=32,E=0),C>=e?(Q=g>>>E&n,C-=e,E+=e):(Q=g>>>E&n,C=32-(B=e-C),Q|=((g=A[a++])&(1<<B)-1)<<e-B,E=B),s[o]=Q<f?i+Q*r:I;return s.unshift(i),s},B=function(A,e,t,i){var r,I,g,n,a=(1<<t)-1,o=0,B=0,C=4*A.length-Math.ceil(t*i/8);for(A[A.length-1]<<=8*C,r=0;r<i;r++)0===B&&(g=A[o++],B=32),B>=t?(I=g>>>B-t&a,B-=t):(I=(g&a)<<(n=t-B)&a,I+=(g=A[o++])>>>(B=32-n)),e[r]=I;return e},C=function(A,e,t,i){var r,I,g,n,a=(1<<t)-1,o=0,B=0,C=0;for(r=0;r<i;r++)0===B&&(g=A[o++],B=32,C=0),B>=t?(I=g>>>C&a,B-=t,C+=t):(I=g>>>C&a,B=32-(n=t-B),I|=((g=A[o++])&(1<<n)-1)<<t-n,C=n),e[r]=I;return e},Q={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(A){for(var e=65535,t=65535,i=A.length,r=Math.floor(i/2),I=0;r;){var g=r>=359?359:r;r-=g;do{e+=A[I++]<<8,t+=e+=A[I++]}while(--g);e=(65535&e)+(e>>>16),t=(65535&t)+(t>>>16)}return 1&i&&(t+=e+=A[I]<<8),((t=(65535&t)+(t>>>16))<<16|(e=(65535&e)+(e>>>16)))>>>0},readHeaderInfo:function(A,e){var t=e.ptr,i=new Uint8Array(A,t,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;t+=6;var I,g=new DataView(A,t,8),n=g.getInt32(0,!0);if(r.fileVersion=n,t+=4,n>=3&&(r.checksum=g.getUint32(4,!0),t+=4),g=new DataView(A,t,12),r.height=g.getUint32(0,!0),r.width=g.getUint32(4,!0),t+=8,n>=4?(r.numDims=g.getUint32(8,!0),t+=4):r.numDims=1,g=new DataView(A,t,40),r.numValidPixel=g.getUint32(0,!0),r.microBlockSize=g.getInt32(4,!0),r.blobSize=g.getInt32(8,!0),r.imageType=g.getInt32(12,!0),r.maxZError=g.getFloat64(16,!0),r.zMin=g.getFloat64(24,!0),r.zMax=g.getFloat64(32,!0),t+=40,e.headerInfo=r,e.ptr=t,n>=3&&(I=n>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(A,t-I,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(A,e){var t=e.headerInfo,i=this.getDataTypeArray(t.imageType),r=t.numDims*this.getDataTypeSize(t.imageType),I=this.readSubArray(A,e.ptr,i,r),g=this.readSubArray(A,e.ptr+r,i,r);e.ptr+=2*r;var n,a=!0;for(n=0;n<t.numDims;n++)if(I[n]!==g[n]){a=!1;break}return t.minValues=I,t.maxValues=g,a},readSubArray:function(A,e,t,i){var r;if(t===Uint8Array)r=new Uint8Array(A,e,i);else{var I=new ArrayBuffer(i);new Uint8Array(I).set(new Uint8Array(A,e,i)),r=new t(I)}return r},readMask:function(A,e){var t,i,r=e.ptr,I=e.headerInfo,g=I.width*I.height,n=I.numValidPixel,a=new DataView(A,r,4),o={};if(o.numBytes=a.getUint32(0,!0),r+=4,(0===n||g===n)&&0!==o.numBytes)throw"invalid mask";if(0===n)t=new Uint8Array(Math.ceil(g/8)),o.bitset=t,i=new Uint8Array(g),e.pixels.resultMask=i,r+=o.numBytes;else if(o.numBytes>0){t=new Uint8Array(Math.ceil(g/8));var B=(a=new DataView(A,r,o.numBytes)).getInt16(0,!0),C=2,Q=0,E=0;do{if(B>0)for(;B--;)t[Q++]=a.getUint8(C++);else for(E=a.getUint8(C++),B=-B;B--;)t[Q++]=E;B=a.getInt16(C,!0),C+=2}while(C<o.numBytes);if(-32768!==B||Q<t.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(g);var s=0,f=0;for(f=0;f<g;f++)7&f?(s=t[f>>3],s<<=7&f):s=t[f>>3],128&s&&(i[f]=1);e.pixels.resultMask=i,o.bitset=t,r+=o.numBytes}return e.ptr=r,e.mask=o,!0},readDataOneSweep:function(A,e,t,i){var r,I=e.ptr,g=e.headerInfo,n=g.numDims,a=g.width*g.height,o=g.imageType,B=g.numValidPixel*Q.getDataTypeSize(o)*n,C=e.pixels.resultMask;if(t===Uint8Array)r=new Uint8Array(A,I,B);else{var E=new ArrayBuffer(B);new Uint8Array(E).set(new Uint8Array(A,I,B)),r=new t(E)}if(r.length===a*n)e.pixels.resultPixels=i?Q.swapDimensionOrder(r,a,n,t,!0):r;else{e.pixels.resultPixels=new t(a*n);var s=0,f=0,c=0,h=0;if(n>1){if(i){for(f=0;f<a;f++)if(C[f])for(h=f,c=0;c<n;c++,h+=a)e.pixels.resultPixels[h]=r[s++]}else for(f=0;f<a;f++)if(C[f])for(h=f*n,c=0;c<n;c++)e.pixels.resultPixels[h+c]=r[s++]}else for(f=0;f<a;f++)C[f]&&(e.pixels.resultPixels[f]=r[s++])}return I+=B,e.ptr=I,!0},readHuffmanTree:function(A,e){var t=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(A,e.ptr,16);if(e.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),I=i.getInt32(8,!0),g=i.getInt32(12,!0);if(I>=g)return!1;var n=new Uint32Array(g-I);Q.decodeBits(A,e,n);var a,o,B,C,s=[];for(a=I;a<g;a++)s[o=a-(a<r?0:r)]={first:n[a-I],second:null};var f=A.byteLength-e.ptr,c=Math.ceil(f/4),h=new ArrayBuffer(4*c);new Uint8Array(h).set(new Uint8Array(A,e.ptr,f));var l,u=new Uint32Array(h),w=0,d=0;for(l=u[0],a=I;a<g;a++)(C=s[o=a-(a<r?0:r)].first)>0&&(s[o].second=l<<w>>>32-C,32-w>=C?32===(w+=C)&&(w=0,l=u[++d]):(w+=C-32,l=u[++d],s[o].second|=l>>>32-w));var D=0,y=0,k=new E;for(a=0;a<s.length;a++)void 0!==s[a]&&(D=Math.max(D,s[a].first));y=D>=t?t:D;var p,m,G,F,S,v=[];for(a=I;a<g;a++)if((C=s[o=a-(a<r?0:r)].first)>0)if(p=[C,o],C<=y)for(m=s[o].second<<y-C,G=1<<y-C,B=0;B<G;B++)v[m|B]=p;else for(m=s[o].second,S=k,F=C-1;F>=0;F--)m>>>F&1?(S.right||(S.right=new E),S=S.right):(S.left||(S.left=new E),S=S.left),0!==F||S.val||(S.val=p[1]);return{decodeLut:v,numBitsLUTQick:y,numBitsLUT:D,tree:k,stuffedData:u,srcPtr:d,bitPos:w}},readHuffman:function(A,e,t,i){var r,I,g,n,a,o,B,C,E,s=e.headerInfo.numDims,f=e.headerInfo.height,c=e.headerInfo.width,h=c*f,l=this.readHuffmanTree(A,e),u=l.decodeLut,w=l.tree,d=l.stuffedData,D=l.srcPtr,y=l.bitPos,k=l.numBitsLUTQick,p=l.numBitsLUT,m=0===e.headerInfo.imageType?128:0,G=e.pixels.resultMask,F=0;y>0&&(D++,y=0);var S,v=d[D],R=1===e.encodeMode,U=new t(h*s),L=U;if(s<2||R){for(S=0;S<s;S++)if(s>1&&(L=new t(U.buffer,h*S,h),F=0),e.headerInfo.numValidPixel===c*f)for(C=0,o=0;o<f;o++)for(B=0;B<c;B++,C++){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,R?(g+=B>0?F:o>0?L[C-c]:F,g&=255,L[C]=g,F=g):L[C]=g}else for(C=0,o=0;o<f;o++)for(B=0;B<c;B++,C++)if(G[C]){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,R?(B>0&&G[C-1]?g+=F:o>0&&G[C-c]?g+=L[C-c]:g+=F,g&=255,L[C]=g,F=g):L[C]=g}}else for(C=0,o=0;o<f;o++)for(B=0;B<c;B++)if(C=o*c+B,!G||G[C])for(S=0;S<s;S++,C+=h){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,L[C]=g}e.ptr=e.ptr+4*(D+1)+(y>0?4:0),e.pixels.resultPixels=U,s>1&&!i&&(e.pixels.resultPixels=Q.swapDimensionOrder(U,h,s,t))},decodeBits:function(A,e,t,i,r){var I=e.headerInfo,Q=I.fileVersion,E=0,s=A.byteLength-e.ptr>=5?5:A.byteLength-e.ptr,f=new DataView(A,e.ptr,s),c=f.getUint8(0);E++;var h=c>>6,l=0===h?4:3-h,u=(32&c)>0,w=31&c,d=0;if(1===l)d=f.getUint8(E),E++;else if(2===l)d=f.getUint16(E,!0),E+=2;else{if(4!==l)throw"Invalid valid pixel count type";d=f.getUint32(E,!0),E+=4}var D,y,k,p,m,G,F,S,v,R=2*I.maxZError,U=I.numDims>1?I.maxValues[r]:I.zMax;if(u){for(e.counter.lut++,S=f.getUint8(E),E++,p=Math.ceil((S-1)*w/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),k=new Uint8Array(y),e.ptr+=E,k.set(new Uint8Array(A,e.ptr,p)),F=new Uint32Array(y),e.ptr+=p,v=0;S-1>>>v;)v++;p=Math.ceil(d*v/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),(k=new Uint8Array(y)).set(new Uint8Array(A,e.ptr,p)),D=new Uint32Array(y),e.ptr+=p,G=Q>=3?o(F,w,S-1,i,R,U):n(F,w,S-1,i,R,U),Q>=3?a(D,t,v,d,G):g(D,t,v,d,G)}else e.counter.bitstuffer++,v=w,e.ptr+=E,v>0&&(p=Math.ceil(d*v/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),(k=new Uint8Array(y)).set(new Uint8Array(A,e.ptr,p)),D=new Uint32Array(y),e.ptr+=p,Q>=3?null==i?C(D,t,v,d):a(D,t,v,d,!1,i,R,U):null==i?B(D,t,v,d):g(D,t,v,d,!1,i,R,U))},readTiles:function(A,e,t,i){var r=e.headerInfo,I=r.width,g=r.height,n=I*g,a=r.microBlockSize,o=r.imageType,B=Q.getDataTypeSize(o),C=Math.ceil(I/a),E=Math.ceil(g/a);e.pixels.numBlocksY=E,e.pixels.numBlocksX=C,e.pixels.ptr=0;var s,f,c,h,l,u,w,d,D,y,k=0,p=0,m=0,G=0,F=0,S=0,v=0,R=0,U=0,L=0,b=0,M=0,N=0,x=0,J=0,q=new t(a*a),Y=g%a||a,K=I%a||a,H=r.numDims,O=e.pixels.resultMask,P=e.pixels.resultPixels,T=r.fileVersion>=5?14:15,V=r.zMax;for(m=0;m<E;m++)for(F=m!==E-1?a:Y,G=0;G<C;G++)for(L=m*I*a+G*a,b=I-(S=G!==C-1?a:K),d=0;d<H;d++){if(H>1?(y=P,L=m*I*a+G*a,P=new t(e.pixels.resultPixels.buffer,n*d*B,n),V=r.maxValues[d]):y=null,v=A.byteLength-e.ptr,f={},J=0,R=(s=new DataView(A,e.ptr,Math.min(10,v))).getUint8(0),J++,D=r.fileVersion>=5?4&R:0,U=R>>6&255,(R>>2&T)!=(G*a>>3&T))throw"integrity issue";if(D&&0===d)throw"integrity issue";if((l=3&R)>3)throw e.ptr+=J,"Invalid block encoding ("+l+")";if(2!==l)if(0===l){if(D)throw"integrity issue";if(e.counter.uncompressed++,e.ptr+=J,M=(M=F*S*B)<(N=A.byteLength-e.ptr)?M:N,c=new ArrayBuffer(M%B==0?M:M+B-M%B),new Uint8Array(c).set(new Uint8Array(A,e.ptr,M)),h=new t(c),x=0,O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=h[x++]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L++]=h[x++];L+=b}e.ptr+=x*B}else if(u=Q.getDataTypeUsed(D&&o<6?4:o,U),w=Q.getOnePixel(f,J,u,s),J+=Q.getDataTypeSize(u),3===l)if(e.ptr+=J,e.counter.constantoffset++,O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=D?Math.min(V,y[L]+w):w),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L]=D?Math.min(V,y[L]+w):w,L++;L+=b}else if(e.ptr+=J,Q.decodeBits(A,e,q,w,d),J=0,D)if(O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=q[J++]+y[L]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L]=q[J++]+y[L],L++;L+=b}else if(O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=q[J++]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L++]=q[J++];L+=b}else{if(D)if(O)for(k=0;k<F;k++)for(p=0;p<S;p++)O[L]&&(P[L]=y[L]),L++;else for(k=0;k<F;k++)for(p=0;p<S;p++)P[L]=y[L],L++;e.counter.constant++,e.ptr+=J}}H>1&&!i&&(e.pixels.resultPixels=Q.swapDimensionOrder(e.pixels.resultPixels,n,H,t))},formatFileInfo:function(A){return{fileIdentifierString:A.headerInfo.fileIdentifierString,fileVersion:A.headerInfo.fileVersion,imageType:A.headerInfo.imageType,height:A.headerInfo.height,width:A.headerInfo.width,numValidPixel:A.headerInfo.numValidPixel,microBlockSize:A.headerInfo.microBlockSize,blobSize:A.headerInfo.blobSize,maxZError:A.headerInfo.maxZError,pixelType:Q.getPixelType(A.headerInfo.imageType),eofOffset:A.eofOffset,mask:A.mask?{numBytes:A.mask.numBytes}:null,pixels:{numBlocksX:A.pixels.numBlocksX,numBlocksY:A.pixels.numBlocksY,maxValue:A.headerInfo.zMax,minValue:A.headerInfo.zMin,noDataValue:A.noDataValue}}},constructConstantSurface:function(A,e){var t=A.headerInfo.zMax,i=A.headerInfo.zMin,r=A.headerInfo.maxValues,I=A.headerInfo.numDims,g=A.headerInfo.height*A.headerInfo.width,n=0,a=0,o=0,B=A.pixels.resultMask,C=A.pixels.resultPixels;if(B)if(I>1){if(e)for(n=0;n<I;n++)for(o=n*g,t=r[n],a=0;a<g;a++)B[a]&&(C[o+a]=t);else for(a=0;a<g;a++)if(B[a])for(o=a*I,n=0;n<I;n++)C[o+I]=r[n]}else for(a=0;a<g;a++)B[a]&&(C[a]=t);else if(I>1&&i!==t)if(e)for(n=0;n<I;n++)for(o=n*g,t=r[n],a=0;a<g;a++)C[o+a]=t;else for(a=0;a<g;a++)for(o=a*I,n=0;n<I;n++)C[o+n]=r[n];else for(a=0;a<g*I;a++)C[a]=t},getDataTypeArray:function(A){var e;switch(A){case 0:e=Int8Array;break;case 1:e=Uint8Array;break;case 2:e=Int16Array;break;case 3:e=Uint16Array;break;case 4:e=Int32Array;break;case 5:e=Uint32Array;break;case 6:default:e=Float32Array;break;case 7:e=Float64Array}return e},getPixelType:function(A){var e;switch(A){case 0:e="S8";break;case 1:e="U8";break;case 2:e="S16";break;case 3:e="U16";break;case 4:e="S32";break;case 5:e="U32";break;case 6:default:e="F32";break;case 7:e="F64"}return e},isValidPixelValue:function(A,e){if(null==e)return!1;var t;switch(A){case 0:t=e>=-128&&e<=127;break;case 1:t=e>=0&&e<=255;break;case 2:t=e>=-32768&&e<=32767;break;case 3:t=e>=0&&e<=65536;break;case 4:t=e>=-2147483648&&e<=2147483647;break;case 5:t=e>=0&&e<=4294967296;break;case 6:t=e>=-34027999387901484e22&&e<=34027999387901484e22;break;case 7:t=e>=-17976931348623157e292&&e<=17976931348623157e292;break;default:t=!1}return t},getDataTypeSize:function(A){var e=0;switch(A){case 0:case 1:e=1;break;case 2:case 3:e=2;break;case 4:case 5:case 6:e=4;break;case 7:e=8;break;default:e=A}return e},getDataTypeUsed:function(A,e){var t=A;switch(A){case 2:case 4:t=A-e;break;case 3:case 5:t=A-2*e;break;case 6:t=0===e?A:1===e?2:1;break;case 7:t=0===e?A:A-2*e+1;break;default:t=A}return t},getOnePixel:function(A,e,t,i){var r=0;switch(t){case 0:r=i.getInt8(e);break;case 1:r=i.getUint8(e);break;case 2:r=i.getInt16(e,!0);break;case 3:r=i.getUint16(e,!0);break;case 4:r=i.getInt32(e,!0);break;case 5:r=i.getUInt32(e,!0);break;case 6:r=i.getFloat32(e,!0);break;case 7:r=i.getFloat64(e,!0);break;default:throw"the decoder does not understand this pixel type"}return r},swapDimensionOrder:function(A,e,t,i,r){var I=0,g=0,n=0,a=0,o=A;if(t>1)if(o=new i(e*t),r)for(I=0;I<e;I++)for(a=I,n=0;n<t;n++,a+=e)o[a]=A[g++];else for(I=0;I<e;I++)for(a=I,n=0;n<t;n++,a+=e)o[g++]=A[a];return o}},E=function(A,e,t){this.val=A,this.left=e,this.right=t},{decode:function(A,e){var t=(e=e||{}).noDataValue,i=0,r={};r.ptr=e.inputOffset||0,r.pixels={},Q.readHeaderInfo(A,r);var I=r.headerInfo,g=I.fileVersion,n=Q.getDataTypeArray(I.imageType);if(g>5)throw"unsupported lerc version 2."+g;Q.readMask(A,r),I.numValidPixel===I.width*I.height||r.pixels.resultMask||(r.pixels.resultMask=e.maskData);var a=I.width*I.height;r.pixels.resultPixels=new n(a*I.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var o,B=!e.returnPixelInterleavedDims;if(0!==I.numValidPixel)if(I.zMax===I.zMin)Q.constructConstantSurface(r,B);else if(g>=4&&Q.checkMinMaxRanges(A,r))Q.constructConstantSurface(r,B);else{var C=new DataView(A,r.ptr,2),E=C.getUint8(0);if(r.ptr++,E)Q.readDataOneSweep(A,r,n,B);else if(g>1&&I.imageType<=1&&Math.abs(I.maxZError-.5)<1e-5){var s=C.getUint8(1);if(r.ptr++,r.encodeMode=s,s>2||g<4&&s>1)throw"Invalid Huffman flag "+s;s?Q.readHuffman(A,r,n,B):Q.readTiles(A,r,n,B)}else Q.readTiles(A,r,n,B)}r.eofOffset=r.ptr,e.inputOffset?(o=r.headerInfo.blobSize+e.inputOffset-r.ptr,Math.abs(o)>=1&&(r.eofOffset=e.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,Math.abs(o)>=1&&(r.eofOffset=r.headerInfo.blobSize));var f={width:I.width,height:I.height,pixelData:r.pixels.resultPixels,minValue:I.zMin,maxValue:I.zMax,validPixelCount:I.numValidPixel,dimCount:I.numDims,dimStats:{minValues:I.minValues,maxValues:I.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&Q.isValidPixelValue(I.imageType,t)){var c=r.pixels.resultMask;for(i=0;i<a;i++)c[i]||(f.pixelData[i]=t);f.noDataValue=t}return r.noDataValue=t,e.returnFileInfo&&(f.fileInfo=Q.formatFileInfo(r)),f},getBandCount:function(A){for(var e=0,t=0,i={ptr:0,pixels:{}};t<A.byteLength-58;)Q.readHeaderInfo(A,i),t+=i.headerInfo.blobSize,e++,i.ptr=t;return e}}),l=(s=new ArrayBuffer(4),f=new Uint8Array(s),new Uint32Array(s)[0]=1,1===f[0]),u={decode:function(A,e){if(!l)throw"Big endian system is not supported.";var t,i,r=(e=e||{}).inputOffset||0,I=new Uint8Array(A,r,10),g=String.fromCharCode.apply(null,I);if("CntZImage"===g.trim())t=c,i=1;else{if("Lerc2"!==g.substring(0,5))throw"Unexpected file identifier string: "+g;t=h,i=2}for(var n,a,o,B,C,Q,E=0,s=A.byteLength-10,f=[],u={width:0,height:0,pixels:[],pixelType:e.pixelType,mask:null,statistics:[]},w=0;r<s;){var d=t.decode(A,{inputOffset:r,encodedMaskData:n,maskData:o,returnMask:0===E,returnEncodedMask:0===E,returnFileInfo:!0,returnPixelInterleavedDims:e.returnPixelInterleavedDims,pixelType:e.pixelType||null,noDataValue:e.noDataValue||null});r=d.fileInfo.eofOffset,o=d.maskData,0===E&&(n=d.encodedMaskData,u.width=d.width,u.height=d.height,u.dimCount=d.dimCount||1,u.pixelType=d.pixelType||d.fileInfo.pixelType,u.mask=o),i>1&&(o&&f.push(o),d.fileInfo.mask&&d.fileInfo.mask.numBytes>0&&w++),E++,u.pixels.push(d.pixelData),u.statistics.push({minValue:d.minValue,maxValue:d.maxValue,noDataValue:d.noDataValue,dimStats:d.dimStats})}if(i>1&&w>1){for(Q=u.width*u.height,u.bandMasks=f,(o=new Uint8Array(Q)).set(f[0]),B=1;B<f.length;B++)for(a=f[B],C=0;C<Q;C++)o[C]=o[C]&a[C];u.maskData=o}return u}};TA.exports?TA.exports=u:this.Lerc=u}();var ZA,jA,WA,zA=XA.exports,$A={env:{emscripten_notify_memory_growth:function(A){WA=new Uint8Array(jA.exports.memory.buffer)}}},Ae=function(){function A(){B(this,A)}return Q(A,[{key:"init",value:function(){return ZA||(ZA="undefined"!=typeof fetch?fetch("data:application/wasm;base64,"+ee).then((function(A){return A.arrayBuffer()})).then((function(A){return WebAssembly.instantiate(A,$A)})).then(this._init):WebAssembly.instantiate(Buffer.from(ee,"base64"),$A).then(this._init))}},{key:"_init",value:function(A){jA=A.instance,$A.env.emscripten_notify_memory_growth(0)}},{key:"decode",value:function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!jA)throw new Error("ZSTDDecoder: Await .init() before decoding.");var t=A.byteLength,i=jA.exports.malloc(t);WA.set(A,i),e=e||Number(jA.exports.ZSTD_findDecompressedSize(i,t));var r=jA.exports.malloc(e),I=jA.exports.ZSTD_decompress(r,e,i,t),g=WA.slice(r,r+I);return jA.exports.free(i),jA.exports.free(r),g}}]),A}(),ee="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",te={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34412:"CZ_LSMINFO",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},ie={};for(var re in te)te.hasOwnProperty(re)&&(ie[te[re]]=parseInt(re,10));ie.BitsPerSample,ie.ExtraSamples,ie.SampleFormat,ie.StripByteCounts,ie.StripOffsets,ie.StripRowCounts,ie.TileByteCounts,ie.TileOffsets,ie.SubIFDs;var Ie={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},ge={};for(var ne in Ie)Ie.hasOwnProperty(ne)&&(ge[Ie[ne]]=parseInt(ne,10));var ae=1,oe=0,Be=1,Ce=2,Qe={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},Ee={};for(var se in Qe)Qe.hasOwnProperty(se)&&(Ee[Qe[se]]=parseInt(se,10));function fe(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var ce=new Ae,he=function(A){s(t,w);var e=fe(t);function t(A){var i;return B(this,t),(i=e.call(this)).planarConfiguration=void 0!==A.PlanarConfiguration?A.PlanarConfiguration:1,i.samplesPerPixel=void 0!==A.SamplesPerPixel?A.SamplesPerPixel:1,i.addCompression=A.LercParameters[ae],i}return Q(t,[{key:"decodeBlock",value:function(A){switch(this.addCompression){case oe:break;case Be:A=YA(new Uint8Array(A)).buffer;break;case Ce:A=ce.decode(new Uint8Array(A)).buffer;break;default:throw new Error("Unsupported LERC additional compression method identifier: ".concat(this.addCompression))}return zA.decode(A,{returnPixelInterleavedDims:1===this.planarConfiguration}).pixels[0].buffer}}]),t}(),le=Object.freeze({__proto__:null,zstd:ce,default:he});function ue(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var we=function(A){s(I,w);var t,i=ue(I);function I(){var A;if(B(this,I),A=i.call(this),"undefined"==typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"==typeof document&&"undefined"==typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return A}return Q(I,[{key:"decode",value:(t=e(r.mark((function A(e,t){var i,I,g,n;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return i=new Blob([t]),A.next=3,createImageBitmap(i);case 3:return I=A.sent,"undefined"!=typeof document?((g=document.createElement("canvas")).width=I.width,g.height=I.height):g=new OffscreenCanvas(I.width,I.height),(n=g.getContext("2d")).drawImage(I,0,0),A.abrupt("return",n.getImageData(0,0,I.width,I.height).data.buffer);case 8:case"end":return A.stop()}}),A)}))),function(A,e){return t.apply(this,arguments)})}]),I}(),de=Object.freeze({__proto__:null,default:we});';
  return new Os(typeof Buffer < "u" ? "data:application/javascript;base64," + Buffer.from(A, "binary").toString("base64") : URL.createObjectURL(new Blob([A], { type: "application/javascript" })));
}
const Vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: Ks
}, Symbol.toStringTag, { value: "Module" }));
export {
  Va as enableGeoTIFFTileSource
};
//# sourceMappingURL=geotiff-tilesource.mjs.map
