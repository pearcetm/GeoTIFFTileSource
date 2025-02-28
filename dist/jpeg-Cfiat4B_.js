import { B as re } from "./basedecoder-DHcBySSe.js";
const J = new Int32Array([
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
]), Y = 4017, Z = 799, $ = 3406, N = 2276, Q = 1567, W = 3784, R = 5793, K = 2896;
function ne(q, l) {
  let s = 0;
  const a = [];
  let D = 16;
  for (; D > 0 && !q[D - 1]; )
    --D;
  a.push({ children: [], index: 0 });
  let k = a[0], C;
  for (let t = 0; t < D; t++) {
    for (let h = 0; h < q[t]; h++) {
      for (k = a.pop(), k.children[k.index] = l[s]; k.index > 0; )
        k = a.pop();
      for (k.index++, a.push(k); a.length <= t; )
        a.push(C = { children: [], index: 0 }), k.children[k.index] = C.children, k = C;
      s++;
    }
    t + 1 < D && (a.push(C = { children: [], index: 0 }), k.children[k.index] = C.children, k = C);
  }
  return a[0].children;
}
function ce(q, l, s, a, D, k, C, t, h) {
  const { mcusPerLine: F, progressive: c } = s, r = l;
  let d = l, i = 0, b = 0;
  function m() {
    if (b > 0)
      return b--, i >> b & 1;
    if (i = q[d++], i === 255) {
      const f = q[d++];
      if (f)
        throw new Error(`unexpected marker: ${(i << 8 | f).toString(16)}`);
    }
    return b = 7, i >>> 7;
  }
  function x(f) {
    let u = f, p;
    for (; (p = m()) !== null; ) {
      if (u = u[p], typeof u == "number")
        return u;
      if (typeof u != "object")
        throw new Error("invalid huffman sequence");
    }
    return null;
  }
  function E(f) {
    let u = f, p = 0;
    for (; u > 0; ) {
      const y = m();
      if (y === null)
        return;
      p = p << 1 | y, --u;
    }
    return p;
  }
  function w(f) {
    const u = E(f);
    return u >= 1 << f - 1 ? u : u + (-1 << f) + 1;
  }
  function A(f, u) {
    const p = x(f.huffmanTableDC), y = p === 0 ? 0 : w(p);
    f.pred += y, u[0] = f.pred;
    let P = 1;
    for (; P < 64; ) {
      const T = x(f.huffmanTableAC), L = T & 15, S = T >> 4;
      if (L === 0) {
        if (S < 15)
          break;
        P += 16;
      } else {
        P += S;
        const j = J[P];
        u[j] = w(L), P++;
      }
    }
  }
  function v(f, u) {
    const p = x(f.huffmanTableDC), y = p === 0 ? 0 : w(p) << h;
    f.pred += y, u[0] = f.pred;
  }
  function o(f, u) {
    u[0] |= m() << h;
  }
  let n = 0;
  function g(f, u) {
    if (n > 0) {
      n--;
      return;
    }
    let p = k;
    const y = C;
    for (; p <= y; ) {
      const P = x(f.huffmanTableAC), T = P & 15, L = P >> 4;
      if (T === 0) {
        if (L < 15) {
          n = E(L) + (1 << L) - 1;
          break;
        }
        p += 16;
      } else {
        p += L;
        const S = J[p];
        u[S] = w(T) * (1 << h), p++;
      }
    }
  }
  let e = 0, _;
  function te(f, u) {
    let p = k;
    const y = C;
    let P = 0;
    for (; p <= y; ) {
      const T = J[p], L = u[T] < 0 ? -1 : 1;
      switch (e) {
        case 0: {
          const S = x(f.huffmanTableAC), j = S & 15;
          if (P = S >> 4, j === 0)
            P < 15 ? (n = E(P) + (1 << P), e = 4) : (P = 16, e = 1);
          else {
            if (j !== 1)
              throw new Error("invalid ACn encoding");
            _ = w(j), e = P ? 2 : 3;
          }
          continue;
        }
        case 1:
        case 2:
          u[T] ? u[T] += (m() << h) * L : (P--, P === 0 && (e = e === 2 ? 3 : 0));
          break;
        case 3:
          u[T] ? u[T] += (m() << h) * L : (u[T] = _ << h, e = 0);
          break;
        case 4:
          u[T] && (u[T] += (m() << h) * L);
          break;
      }
      p++;
    }
    e === 4 && (n--, n === 0 && (e = 0));
  }
  function se(f, u, p, y, P) {
    const T = p / F | 0, L = p % F, S = T * f.v + y, j = L * f.h + P;
    u(f, f.blocks[S][j]);
  }
  function oe(f, u, p) {
    const y = p / f.blocksPerLine | 0, P = p % f.blocksPerLine;
    u(f, f.blocks[y][P]);
  }
  const V = a.length;
  let U, I, G, X, B, O;
  c ? k === 0 ? O = t === 0 ? v : o : O = t === 0 ? g : te : O = A;
  let M = 0, z, H;
  V === 1 ? H = a[0].blocksPerLine * a[0].blocksPerColumn : H = F * s.mcusPerColumn;
  const ee = D || H;
  for (; M < H; ) {
    for (I = 0; I < V; I++)
      a[I].pred = 0;
    if (n = 0, V === 1)
      for (U = a[0], B = 0; B < ee; B++)
        oe(U, O, M), M++;
    else
      for (B = 0; B < ee; B++) {
        for (I = 0; I < V; I++) {
          U = a[I];
          const { h: f, v: u } = U;
          for (G = 0; G < u; G++)
            for (X = 0; X < f; X++)
              se(U, O, M, G, X);
        }
        if (M++, M === H)
          break;
      }
    if (b = 0, z = q[d] << 8 | q[d + 1], z < 65280)
      throw new Error("marker was not found");
    if (z >= 65488 && z <= 65495)
      d += 2;
    else
      break;
  }
  return d - r;
}
function ie(q, l) {
  const s = [], { blocksPerLine: a, blocksPerColumn: D } = l, k = a << 3, C = new Int32Array(64), t = new Uint8Array(64);
  function h(F, c, r) {
    const d = l.quantizationTable;
    let i, b, m, x, E, w, A, v, o;
    const n = r;
    let g;
    for (g = 0; g < 64; g++)
      n[g] = F[g] * d[g];
    for (g = 0; g < 8; ++g) {
      const e = 8 * g;
      if (n[1 + e] === 0 && n[2 + e] === 0 && n[3 + e] === 0 && n[4 + e] === 0 && n[5 + e] === 0 && n[6 + e] === 0 && n[7 + e] === 0) {
        o = R * n[0 + e] + 512 >> 10, n[0 + e] = o, n[1 + e] = o, n[2 + e] = o, n[3 + e] = o, n[4 + e] = o, n[5 + e] = o, n[6 + e] = o, n[7 + e] = o;
        continue;
      }
      i = R * n[0 + e] + 128 >> 8, b = R * n[4 + e] + 128 >> 8, m = n[2 + e], x = n[6 + e], E = K * (n[1 + e] - n[7 + e]) + 128 >> 8, v = K * (n[1 + e] + n[7 + e]) + 128 >> 8, w = n[3 + e] << 4, A = n[5 + e] << 4, o = i - b + 1 >> 1, i = i + b + 1 >> 1, b = o, o = m * W + x * Q + 128 >> 8, m = m * Q - x * W + 128 >> 8, x = o, o = E - A + 1 >> 1, E = E + A + 1 >> 1, A = o, o = v + w + 1 >> 1, w = v - w + 1 >> 1, v = o, o = i - x + 1 >> 1, i = i + x + 1 >> 1, x = o, o = b - m + 1 >> 1, b = b + m + 1 >> 1, m = o, o = E * N + v * $ + 2048 >> 12, E = E * $ - v * N + 2048 >> 12, v = o, o = w * Z + A * Y + 2048 >> 12, w = w * Y - A * Z + 2048 >> 12, A = o, n[0 + e] = i + v, n[7 + e] = i - v, n[1 + e] = b + A, n[6 + e] = b - A, n[2 + e] = m + w, n[5 + e] = m - w, n[3 + e] = x + E, n[4 + e] = x - E;
    }
    for (g = 0; g < 8; ++g) {
      const e = g;
      if (n[1 * 8 + e] === 0 && n[2 * 8 + e] === 0 && n[3 * 8 + e] === 0 && n[4 * 8 + e] === 0 && n[5 * 8 + e] === 0 && n[6 * 8 + e] === 0 && n[7 * 8 + e] === 0) {
        o = R * r[g + 0] + 8192 >> 14, n[0 * 8 + e] = o, n[1 * 8 + e] = o, n[2 * 8 + e] = o, n[3 * 8 + e] = o, n[4 * 8 + e] = o, n[5 * 8 + e] = o, n[6 * 8 + e] = o, n[7 * 8 + e] = o;
        continue;
      }
      i = R * n[0 * 8 + e] + 2048 >> 12, b = R * n[4 * 8 + e] + 2048 >> 12, m = n[2 * 8 + e], x = n[6 * 8 + e], E = K * (n[1 * 8 + e] - n[7 * 8 + e]) + 2048 >> 12, v = K * (n[1 * 8 + e] + n[7 * 8 + e]) + 2048 >> 12, w = n[3 * 8 + e], A = n[5 * 8 + e], o = i - b + 1 >> 1, i = i + b + 1 >> 1, b = o, o = m * W + x * Q + 2048 >> 12, m = m * Q - x * W + 2048 >> 12, x = o, o = E - A + 1 >> 1, E = E + A + 1 >> 1, A = o, o = v + w + 1 >> 1, w = v - w + 1 >> 1, v = o, o = i - x + 1 >> 1, i = i + x + 1 >> 1, x = o, o = b - m + 1 >> 1, b = b + m + 1 >> 1, m = o, o = E * N + v * $ + 2048 >> 12, E = E * $ - v * N + 2048 >> 12, v = o, o = w * Z + A * Y + 2048 >> 12, w = w * Y - A * Z + 2048 >> 12, A = o, n[0 * 8 + e] = i + v, n[7 * 8 + e] = i - v, n[1 * 8 + e] = b + A, n[6 * 8 + e] = b - A, n[2 * 8 + e] = m + w, n[5 * 8 + e] = m - w, n[3 * 8 + e] = x + E, n[4 * 8 + e] = x - E;
    }
    for (g = 0; g < 64; ++g) {
      const e = 128 + (n[g] + 8 >> 4);
      e < 0 ? c[g] = 0 : e > 255 ? c[g] = 255 : c[g] = e;
    }
  }
  for (let F = 0; F < D; F++) {
    const c = F << 3;
    for (let r = 0; r < 8; r++)
      s.push(new Uint8Array(k));
    for (let r = 0; r < a; r++) {
      h(l.blocks[F][r], t, C);
      let d = 0;
      const i = r << 3;
      for (let b = 0; b < 8; b++) {
        const m = s[c + b];
        for (let x = 0; x < 8; x++)
          m[i + x] = t[d++];
      }
    }
  }
  return s;
}
class le {
  constructor() {
    this.jfif = null, this.adobe = null, this.quantizationTables = [], this.huffmanTablesAC = [], this.huffmanTablesDC = [], this.resetFrames();
  }
  resetFrames() {
    this.frames = [];
  }
  parse(l) {
    let s = 0;
    function a() {
      const t = l[s] << 8 | l[s + 1];
      return s += 2, t;
    }
    function D() {
      const t = a(), h = l.subarray(s, s + t - 2);
      return s += h.length, h;
    }
    function k(t) {
      let h = 0, F = 0, c, r;
      for (r in t.components)
        t.components.hasOwnProperty(r) && (c = t.components[r], h < c.h && (h = c.h), F < c.v && (F = c.v));
      const d = Math.ceil(t.samplesPerLine / 8 / h), i = Math.ceil(t.scanLines / 8 / F);
      for (r in t.components)
        if (t.components.hasOwnProperty(r)) {
          c = t.components[r];
          const b = Math.ceil(Math.ceil(t.samplesPerLine / 8) * c.h / h), m = Math.ceil(Math.ceil(t.scanLines / 8) * c.v / F), x = d * c.h, E = i * c.v, w = [];
          for (let A = 0; A < E; A++) {
            const v = [];
            for (let o = 0; o < x; o++)
              v.push(new Int32Array(64));
            w.push(v);
          }
          c.blocksPerLine = b, c.blocksPerColumn = m, c.blocks = w;
        }
      t.maxH = h, t.maxV = F, t.mcusPerLine = d, t.mcusPerColumn = i;
    }
    let C = a();
    if (C !== 65496)
      throw new Error("SOI not found");
    for (C = a(); C !== 65497; ) {
      switch (C) {
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
          const t = D();
          C === 65504 && t[0] === 74 && t[1] === 70 && t[2] === 73 && t[3] === 70 && t[4] === 0 && (this.jfif = {
            version: { major: t[5], minor: t[6] },
            densityUnits: t[7],
            xDensity: t[8] << 8 | t[9],
            yDensity: t[10] << 8 | t[11],
            thumbWidth: t[12],
            thumbHeight: t[13],
            thumbData: t.subarray(14, 14 + 3 * t[12] * t[13])
          }), C === 65518 && t[0] === 65 && t[1] === 100 && t[2] === 111 && t[3] === 98 && t[4] === 101 && t[5] === 0 && (this.adobe = {
            version: t[6],
            flags0: t[7] << 8 | t[8],
            flags1: t[9] << 8 | t[10],
            transformCode: t[11]
          });
          break;
        }
        case 65499: {
          const h = a() + s - 2;
          for (; s < h; ) {
            const F = l[s++], c = new Int32Array(64);
            if (F >> 4)
              if (F >> 4 === 1)
                for (let r = 0; r < 64; r++) {
                  const d = J[r];
                  c[d] = a();
                }
              else
                throw new Error("DQT: invalid table spec");
            else for (let r = 0; r < 64; r++) {
              const d = J[r];
              c[d] = l[s++];
            }
            this.quantizationTables[F & 15] = c;
          }
          break;
        }
        case 65472:
        case 65473:
        case 65474: {
          a();
          const t = {
            extended: C === 65473,
            progressive: C === 65474,
            precision: l[s++],
            scanLines: a(),
            samplesPerLine: a(),
            components: {},
            componentsOrder: []
          }, h = l[s++];
          let F;
          for (let c = 0; c < h; c++) {
            F = l[s];
            const r = l[s + 1] >> 4, d = l[s + 1] & 15, i = l[s + 2];
            t.componentsOrder.push(F), t.components[F] = {
              h: r,
              v: d,
              quantizationIdx: i
            }, s += 3;
          }
          k(t), this.frames.push(t);
          break;
        }
        case 65476: {
          const t = a();
          for (let h = 2; h < t; ) {
            const F = l[s++], c = new Uint8Array(16);
            let r = 0;
            for (let i = 0; i < 16; i++, s++)
              c[i] = l[s], r += c[i];
            const d = new Uint8Array(r);
            for (let i = 0; i < r; i++, s++)
              d[i] = l[s];
            h += 17 + r, F >> 4 ? this.huffmanTablesAC[F & 15] = ne(
              c,
              d
            ) : this.huffmanTablesDC[F & 15] = ne(
              c,
              d
            );
          }
          break;
        }
        case 65501:
          a(), this.resetInterval = a();
          break;
        case 65498: {
          a();
          const t = l[s++], h = [], F = this.frames[0];
          for (let b = 0; b < t; b++) {
            const m = F.components[l[s++]], x = l[s++];
            m.huffmanTableDC = this.huffmanTablesDC[x >> 4], m.huffmanTableAC = this.huffmanTablesAC[x & 15], h.push(m);
          }
          const c = l[s++], r = l[s++], d = l[s++], i = ce(
            l,
            s,
            F,
            h,
            this.resetInterval,
            c,
            r,
            d >> 4,
            d & 15
          );
          s += i;
          break;
        }
        case 65535:
          l[s] !== 255 && s--;
          break;
        default:
          if (l[s - 3] === 255 && l[s - 2] >= 192 && l[s - 2] <= 254) {
            s -= 3;
            break;
          }
          throw new Error(`unknown JPEG marker ${C.toString(16)}`);
      }
      C = a();
    }
  }
  getResult() {
    const { frames: l } = this;
    if (this.frames.length === 0)
      throw new Error("no frames were decoded");
    this.frames.length > 1 && console.warn("more than one frame is not supported");
    for (let c = 0; c < this.frames.length; c++) {
      const r = this.frames[c].components;
      for (const d of Object.keys(r))
        r[d].quantizationTable = this.quantizationTables[r[d].quantizationIdx], delete r[d].quantizationIdx;
    }
    const s = l[0], { components: a, componentsOrder: D } = s, k = [], C = s.samplesPerLine, t = s.scanLines;
    for (let c = 0; c < D.length; c++) {
      const r = a[D[c]];
      k.push({
        lines: ie(s, r),
        scaleX: r.h / s.maxH,
        scaleY: r.v / s.maxV
      });
    }
    const h = new Uint8Array(C * t * k.length);
    let F = 0;
    for (let c = 0; c < t; ++c)
      for (let r = 0; r < C; ++r)
        for (let d = 0; d < k.length; ++d) {
          const i = k[d];
          h[F] = i.lines[0 | c * i.scaleY][0 | r * i.scaleX], ++F;
        }
    return h;
  }
}
class fe extends re {
  constructor(l) {
    super(), this.reader = new le(), l.JPEGTables && this.reader.parse(l.JPEGTables);
  }
  decodeBlock(l) {
    try {
      return this.reader.resetFrames(), this.reader.parse(new Uint8Array(l)), this.reader.getResult().buffer;
    } catch (s) {
      if (s.message === "SOI not found") {
        console.warn("Suppressed JPEG decoding error: SOI not found");
        const a = new ArrayBuffer(4), D = new Uint8Array(a);
        return D[0] = 0, D[1] = 0, D[2] = 0, D[3] = 0, a;
      }
      throw s;
    }
  }
}
export {
  fe as default
};
//# sourceMappingURL=jpeg-Cfiat4B_.js.map
