function l(o, n) {
  let t = o.length - n, r = 0;
  do {
    for (let a = n; a > 0; a--)
      o[r + n] += o[r], r++;
    t -= n;
  } while (t > 0);
}
function d(o, n, t) {
  let r = 0, a = o.length;
  const i = a / t;
  for (; a > n; ) {
    for (let e = n; e > 0; --e)
      o[r + n] += o[r], ++r;
    a -= n;
  }
  const s = o.slice();
  for (let e = 0; e < i; ++e)
    for (let c = 0; c < t; ++c)
      o[t * e + c] = s[(t - c - 1) * i + e];
}
function f(o, n, t, r, a, i) {
  if (!n || n === 1)
    return o;
  for (let c = 0; c < a.length; ++c) {
    if (a[c] % 8 !== 0)
      throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
    if (a[c] !== a[0])
      throw new Error("When decoding with predictor, all samples must have the same size.");
  }
  const s = a[0] / 8, e = i === 2 ? 1 : a.length;
  for (let c = 0; c < r && !(c * e * t * s >= o.byteLength); ++c) {
    let h;
    if (n === 2) {
      switch (a[0]) {
        case 8:
          h = new Uint8Array(
            o,
            c * e * t * s,
            e * t * s
          );
          break;
        case 16:
          h = new Uint16Array(
            o,
            c * e * t * s,
            e * t * s / 2
          );
          break;
        case 32:
          h = new Uint32Array(
            o,
            c * e * t * s,
            e * t * s / 4
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${a[0]} bits per sample.`);
      }
      l(h, e);
    } else n === 3 && (h = new Uint8Array(
      o,
      c * e * t * s,
      e * t * s
    ), d(h, e, s));
  }
  return o;
}
class g {
  async decode(n, t) {
    const r = await this.decodeBlock(t), a = n.Predictor || 1;
    if (a !== 1) {
      const i = !n.StripOffsets, s = i ? n.TileWidth : n.ImageWidth, e = i ? n.TileLength : n.RowsPerStrip || n.ImageLength;
      return f(
        r,
        a,
        s,
        e,
        n.BitsPerSample,
        n.PlanarConfiguration
      );
    }
    return r;
  }
}
export {
  g as B
};
//# sourceMappingURL=basedecoder-DHcBySSe.js.map
