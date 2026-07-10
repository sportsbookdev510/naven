(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  117956,
  858627,
  (e) => {
    "use strict";
    var t = e.i(351824);
    function r(e, t, r) {
      return (e & t) ^ (~e & r);
    }
    function n(e, t, r) {
      return (e & t) ^ (e & r) ^ (t & r);
    }
    class a extends t.Hash {
      constructor(e, r, n, a) {
        super(),
          (this.finished = !1),
          (this.length = 0),
          (this.pos = 0),
          (this.destroyed = !1),
          (this.blockLen = e),
          (this.outputLen = r),
          (this.padOffset = n),
          (this.isLE = a),
          (this.buffer = new Uint8Array(e)),
          (this.view = (0, t.createView)(this.buffer));
      }
      update(e) {
        (0, t.aexists)(this), (e = (0, t.toBytes)(e)), (0, t.abytes)(e);
        let { view: r, buffer: n, blockLen: a } = this,
          o = e.length;
        for (let s = 0; s < o; ) {
          let i = Math.min(a - this.pos, o - s);
          if (i === a) {
            let r = (0, t.createView)(e);
            for (; a <= o - s; s += a) this.process(r, s);
            continue;
          }
          n.set(e.subarray(s, s + i), this.pos),
            (this.pos += i),
            (s += i),
            this.pos === a && (this.process(r, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
      }
      digestInto(e) {
        (0, t.aexists)(this), (0, t.aoutput)(e, this), (this.finished = !0);
        let { buffer: r, view: n, blockLen: a, isLE: o } = this,
          { pos: s } = this;
        (r[s++] = 128),
          (0, t.clean)(this.buffer.subarray(s)),
          this.padOffset > a - s && (this.process(n, 0), (s = 0));
        for (let e = s; e < a; e++) r[e] = 0;
        !(function (e, t, r, n) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, r, n);
          let a = BigInt(32),
            o = BigInt(0xffffffff),
            s = Number((r >> a) & o),
            i = Number(r & o),
            c = 4 * !!n,
            u = 4 * !n;
          e.setUint32(t + c, s, n), e.setUint32(t + u, i, n);
        })(n, a - 8, BigInt(8 * this.length), o),
          this.process(n, 0);
        let i = (0, t.createView)(e),
          c = this.outputLen;
        if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let u = c / 4,
          d = this.get();
        if (u > d.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < u; e++) i.setUint32(4 * e, d[e], o);
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let r = e.slice(0, t);
        return this.destroy(), r;
      }
      _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let {
          blockLen: t,
          buffer: r,
          length: n,
          finished: a,
          destroyed: o,
          pos: s,
        } = this;
        return (
          (e.destroyed = o),
          (e.finished = a),
          (e.length = n),
          (e.pos = s),
          n % t && e.buffer.set(r),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    let o = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]),
      s = Uint32Array.from([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
        0x64f98fa7, 0xbefa4fa4,
      ]),
      i = Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17,
        0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511,
        0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
      ]),
      c = Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b,
        0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f,
        0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
      ]);
    e.s(
      [
        "Chi",
        () => r,
        "HashMD",
        () => a,
        "Maj",
        () => n,
        "SHA224_IV",
        0,
        s,
        "SHA256_IV",
        0,
        o,
        "SHA384_IV",
        0,
        i,
        "SHA512_IV",
        0,
        c,
      ],
      858627
    );
    var u = e.i(703857);
    let d = Uint32Array.from([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
        0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
        0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
        0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
      ]),
      l = new Uint32Array(64);
    class h extends a {
      constructor(e = 32) {
        super(64, e, 8, !1),
          (this.A = 0 | o[0]),
          (this.B = 0 | o[1]),
          (this.C = 0 | o[2]),
          (this.D = 0 | o[3]),
          (this.E = 0 | o[4]),
          (this.F = 0 | o[5]),
          (this.G = 0 | o[6]),
          (this.H = 0 | o[7]);
      }
      get() {
        let { A: e, B: t, C: r, D: n, E: a, F: o, G: s, H: i } = this;
        return [e, t, r, n, a, o, s, i];
      }
      set(e, t, r, n, a, o, s, i) {
        (this.A = 0 | e),
          (this.B = 0 | t),
          (this.C = 0 | r),
          (this.D = 0 | n),
          (this.E = 0 | a),
          (this.F = 0 | o),
          (this.G = 0 | s),
          (this.H = 0 | i);
      }
      process(e, r) {
        for (let t = 0; t < 16; t++, r += 4) l[t] = e.getUint32(r, !1);
        for (let e = 16; e < 64; e++) {
          let r = l[e - 15],
            n = l[e - 2],
            a = (0, t.rotr)(r, 7) ^ (0, t.rotr)(r, 18) ^ (r >>> 3),
            o = (0, t.rotr)(n, 17) ^ (0, t.rotr)(n, 19) ^ (n >>> 10);
          l[e] = (o + l[e - 7] + a + l[e - 16]) | 0;
        }
        let { A: a, B: o, C: s, D: i, E: c, F: u, G: h, H: p } = this;
        for (let e = 0; e < 64; e++) {
          var f;
          let r =
              (p +
                ((0, t.rotr)(c, 6) ^ (0, t.rotr)(c, 11) ^ (0, t.rotr)(c, 25)) +
                (((f = c) & u) ^ (~f & h)) +
                d[e] +
                l[e]) |
              0,
            b =
              (((0, t.rotr)(a, 2) ^ (0, t.rotr)(a, 13) ^ (0, t.rotr)(a, 22)) +
                n(a, o, s)) |
              0;
          (p = h),
            (h = u),
            (u = c),
            (c = (i + r) | 0),
            (i = s),
            (s = o),
            (o = a),
            (a = (r + b) | 0);
        }
        (a = (a + this.A) | 0),
          (o = (o + this.B) | 0),
          (s = (s + this.C) | 0),
          (i = (i + this.D) | 0),
          (c = (c + this.E) | 0),
          (u = (u + this.F) | 0),
          (h = (h + this.G) | 0),
          (p = (p + this.H) | 0),
          this.set(a, o, s, i, c, u, h, p);
      }
      roundClean() {
        (0, t.clean)(l);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, t.clean)(this.buffer);
      }
    }
    class p extends h {
      constructor() {
        super(28),
          (this.A = 0 | s[0]),
          (this.B = 0 | s[1]),
          (this.C = 0 | s[2]),
          (this.D = 0 | s[3]),
          (this.E = 0 | s[4]),
          (this.F = 0 | s[5]),
          (this.G = 0 | s[6]),
          (this.H = 0 | s[7]);
      }
    }
    let f = u.split(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      ),
      b = f[0],
      y = f[1],
      m = new Uint32Array(80),
      x = new Uint32Array(80);
    class g extends a {
      constructor(e = 64) {
        super(128, e, 16, !1),
          (this.Ah = 0 | c[0]),
          (this.Al = 0 | c[1]),
          (this.Bh = 0 | c[2]),
          (this.Bl = 0 | c[3]),
          (this.Ch = 0 | c[4]),
          (this.Cl = 0 | c[5]),
          (this.Dh = 0 | c[6]),
          (this.Dl = 0 | c[7]),
          (this.Eh = 0 | c[8]),
          (this.El = 0 | c[9]),
          (this.Fh = 0 | c[10]),
          (this.Fl = 0 | c[11]),
          (this.Gh = 0 | c[12]),
          (this.Gl = 0 | c[13]),
          (this.Hh = 0 | c[14]),
          (this.Hl = 0 | c[15]);
      }
      get() {
        let {
          Ah: e,
          Al: t,
          Bh: r,
          Bl: n,
          Ch: a,
          Cl: o,
          Dh: s,
          Dl: i,
          Eh: c,
          El: u,
          Fh: d,
          Fl: l,
          Gh: h,
          Gl: p,
          Hh: f,
          Hl: b,
        } = this;
        return [e, t, r, n, a, o, s, i, c, u, d, l, h, p, f, b];
      }
      set(e, t, r, n, a, o, s, i, c, u, d, l, h, p, f, b) {
        (this.Ah = 0 | e),
          (this.Al = 0 | t),
          (this.Bh = 0 | r),
          (this.Bl = 0 | n),
          (this.Ch = 0 | a),
          (this.Cl = 0 | o),
          (this.Dh = 0 | s),
          (this.Dl = 0 | i),
          (this.Eh = 0 | c),
          (this.El = 0 | u),
          (this.Fh = 0 | d),
          (this.Fl = 0 | l),
          (this.Gh = 0 | h),
          (this.Gl = 0 | p),
          (this.Hh = 0 | f),
          (this.Hl = 0 | b);
      }
      process(e, t) {
        for (let r = 0; r < 16; r++, t += 4)
          (m[r] = e.getUint32(t)), (x[r] = e.getUint32((t += 4)));
        for (let e = 16; e < 80; e++) {
          let t = 0 | m[e - 15],
            r = 0 | x[e - 15],
            n = u.rotrSH(t, r, 1) ^ u.rotrSH(t, r, 8) ^ u.shrSH(t, r, 7),
            a = u.rotrSL(t, r, 1) ^ u.rotrSL(t, r, 8) ^ u.shrSL(t, r, 7),
            o = 0 | m[e - 2],
            s = 0 | x[e - 2],
            i = u.rotrSH(o, s, 19) ^ u.rotrBH(o, s, 61) ^ u.shrSH(o, s, 6),
            c = u.rotrSL(o, s, 19) ^ u.rotrBL(o, s, 61) ^ u.shrSL(o, s, 6),
            d = u.add4L(a, c, x[e - 7], x[e - 16]),
            l = u.add4H(d, n, i, m[e - 7], m[e - 16]);
          (m[e] = 0 | l), (x[e] = 0 | d);
        }
        let {
          Ah: r,
          Al: n,
          Bh: a,
          Bl: o,
          Ch: s,
          Cl: i,
          Dh: c,
          Dl: d,
          Eh: l,
          El: h,
          Fh: p,
          Fl: f,
          Gh: g,
          Gl: w,
          Hh: E,
          Hl: v,
        } = this;
        for (let e = 0; e < 80; e++) {
          let t = u.rotrSH(l, h, 14) ^ u.rotrSH(l, h, 18) ^ u.rotrBH(l, h, 41),
            R = u.rotrSL(l, h, 14) ^ u.rotrSL(l, h, 18) ^ u.rotrBL(l, h, 41),
            S = (l & p) ^ (~l & g),
            I = (h & f) ^ (~h & w),
            A = u.add5L(v, R, I, y[e], x[e]),
            P = u.add5H(A, E, t, S, b[e], m[e]),
            M = 0 | A,
            U = u.rotrSH(r, n, 28) ^ u.rotrBH(r, n, 34) ^ u.rotrBH(r, n, 39),
            $ = u.rotrSL(r, n, 28) ^ u.rotrBL(r, n, 34) ^ u.rotrBL(r, n, 39),
            B = (r & a) ^ (r & s) ^ (a & s),
            j = (n & o) ^ (n & i) ^ (o & i);
          (E = 0 | g),
            (v = 0 | w),
            (g = 0 | p),
            (w = 0 | f),
            (p = 0 | l),
            (f = 0 | h),
            ({ h: l, l: h } = u.add(0 | c, 0 | d, 0 | P, 0 | M)),
            (c = 0 | s),
            (d = 0 | i),
            (s = 0 | a),
            (i = 0 | o),
            (a = 0 | r),
            (o = 0 | n);
          let O = u.add3L(M, $, j);
          (r = u.add3H(O, P, U, B)), (n = 0 | O);
        }
        ({ h: r, l: n } = u.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
          ({ h: a, l: o } = u.add(0 | this.Bh, 0 | this.Bl, 0 | a, 0 | o)),
          ({ h: s, l: i } = u.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | i)),
          ({ h: c, l: d } = u.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | d)),
          ({ h: l, l: h } = u.add(0 | this.Eh, 0 | this.El, 0 | l, 0 | h)),
          ({ h: p, l: f } = u.add(0 | this.Fh, 0 | this.Fl, 0 | p, 0 | f)),
          ({ h: g, l: w } = u.add(0 | this.Gh, 0 | this.Gl, 0 | g, 0 | w)),
          ({ h: E, l: v } = u.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | v)),
          this.set(r, n, a, o, s, i, c, d, l, h, p, f, g, w, E, v);
      }
      roundClean() {
        (0, t.clean)(m, x);
      }
      destroy() {
        (0, t.clean)(this.buffer),
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    class w extends g {
      constructor() {
        super(48),
          (this.Ah = 0 | i[0]),
          (this.Al = 0 | i[1]),
          (this.Bh = 0 | i[2]),
          (this.Bl = 0 | i[3]),
          (this.Ch = 0 | i[4]),
          (this.Cl = 0 | i[5]),
          (this.Dh = 0 | i[6]),
          (this.Dl = 0 | i[7]),
          (this.Eh = 0 | i[8]),
          (this.El = 0 | i[9]),
          (this.Fh = 0 | i[10]),
          (this.Fl = 0 | i[11]),
          (this.Gh = 0 | i[12]),
          (this.Gl = 0 | i[13]),
          (this.Hh = 0 | i[14]),
          (this.Hl = 0 | i[15]);
      }
    }
    let E = (0, t.createHasher)(() => new h()),
      v = (0, t.createHasher)(() => new p()),
      R = (0, t.createHasher)(() => new g()),
      S = (0, t.createHasher)(() => new w());
    e.s(
      [
        "SHA224",
        () => p,
        "SHA256",
        () => h,
        "sha224",
        0,
        v,
        "sha256",
        0,
        E,
        "sha384",
        0,
        S,
        "sha512",
        0,
        R,
      ],
      117956
    );
  },
  11981,
  (e) => {
    "use strict";
    function t(e) {
      let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      return Object.assign(t, {
        extend: (function e(t) {
          return (r) => {
            let n = "function" == typeof r ? r(t) : r,
              a = { ...t, ...n };
            return Object.assign(a, { extend: e(a) });
          };
        })(t),
      });
    }
    function r() {
      return {};
    }
    e.s(["defineChain", () => t, "extendSchema", () => r]);
  },
  198537,
  (e) => {
    "use strict";
    var t = e.i(117956);
    t.SHA256;
    let r = t.sha256;
    t.SHA224, t.sha224, e.s(["sha256", 0, r]);
  },
  972613,
  (e) => {
    "use strict";
    var t = e.i(351824);
    class r extends t.Hash {
      constructor(e, r) {
        super(), (this.finished = !1), (this.destroyed = !1), (0, t.ahash)(e);
        const n = (0, t.toBytes)(r);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
          throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen),
          (this.outputLen = this.iHash.outputLen);
        const a = this.blockLen,
          o = new Uint8Array(a);
        o.set(n.length > a ? e.create().update(n).digest() : n);
        for (let e = 0; e < o.length; e++) o[e] ^= 54;
        this.iHash.update(o), (this.oHash = e.create());
        for (let e = 0; e < o.length; e++) o[e] ^= 106;
        this.oHash.update(o), (0, t.clean)(o);
      }
      update(e) {
        return (0, t.aexists)(this), this.iHash.update(e), this;
      }
      digestInto(e) {
        (0, t.aexists)(this),
          (0, t.abytes)(e, this.outputLen),
          (this.finished = !0),
          this.iHash.digestInto(e),
          this.oHash.update(e),
          this.oHash.digestInto(e),
          this.destroy();
      }
      digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e;
      }
      _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let {
          oHash: t,
          iHash: r,
          finished: n,
          destroyed: a,
          blockLen: o,
          outputLen: s,
        } = this;
        return (
          (e.finished = n),
          (e.destroyed = a),
          (e.blockLen = o),
          (e.outputLen = s),
          (e.oHash = t._cloneInto(e.oHash)),
          (e.iHash = r._cloneInto(e.iHash)),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
      }
    }
    let n = (e, t, n) => new r(e, t).update(n).digest();
    (n.create = (e, t) => new r(e, t)), e.s(["hmac", 0, n]);
  },
  264656,
  (e) => {
    "use strict";
    let t = BigInt(0),
      r = BigInt(1);
    function n(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function a(e) {
      if (!n(e)) throw Error("Uint8Array expected");
    }
    function o(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function s(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function i(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? t : BigInt("0x" + e);
    }
    let c =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function d(e) {
      if ((a(e), c)) return e.toHex();
      let t = "";
      for (let r = 0; r < e.length; r++) t += u[e[r]];
      return t;
    }
    function l(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function h(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (c) return Uint8Array.fromHex(e);
      let t = e.length,
        r = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let n = new Uint8Array(r);
      for (let t = 0, a = 0; t < r; t++, a += 2) {
        let r = l(e.charCodeAt(a)),
          o = l(e.charCodeAt(a + 1));
        if (void 0 === r || void 0 === o)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[a] + e[a + 1]) +
              '" at index ' +
              a
          );
        n[t] = 16 * r + o;
      }
      return n;
    }
    function p(e) {
      return i(d(e));
    }
    function f(e) {
      return a(e), i(d(Uint8Array.from(e).reverse()));
    }
    function b(e, t) {
      return h(e.toString(16).padStart(2 * t, "0"));
    }
    function y(e, t) {
      return b(e, t).reverse();
    }
    function m(e, t, r) {
      let a;
      if ("string" == typeof t)
        try {
          a = h(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (n(t)) a = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let o = a.length;
      if ("number" == typeof r && o !== r)
        throw Error(e + " of length " + r + " expected, got " + o);
      return a;
    }
    function x(...e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        a(n), (t += n.length);
      }
      let r = new Uint8Array(t);
      for (let t = 0, n = 0; t < e.length; t++) {
        let a = e[t];
        r.set(a, n), (n += a.length);
      }
      return r;
    }
    function g(e, t) {
      if (e.length !== t.length) return !1;
      let r = 0;
      for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
      return 0 === r;
    }
    function w(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    let E = (e) => "bigint" == typeof e && t <= e;
    function v(e, t, r) {
      return E(e) && E(t) && E(r) && t <= e && e < r;
    }
    function R(e, t, r, n) {
      if (!v(t, r, n))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
        );
    }
    function S(e) {
      let n;
      for (n = 0; e > t; e >>= r, n += 1);
      return n;
    }
    let I = (e) => new Uint8Array(e);
    function A(e, t, r) {
      if ("number" != typeof e || e < 2)
        throw Error("hashLen must be a number");
      if ("number" != typeof t || t < 2)
        throw Error("qByteLen must be a number");
      if ("function" != typeof r) throw Error("hmacFn must be a function");
      let n = I(e),
        a = I(e),
        o = 0,
        s = () => {
          n.fill(1), a.fill(0), (o = 0);
        },
        i = (...e) => r(a, n, ...e),
        c = (e = I(0)) => {
          let t;
          if (
            ((a = i(((t = [0]), Uint8Array.from(t)), e)),
            (n = i()),
            0 !== e.length)
          ) {
            let t;
            (a = i(((t = [1]), Uint8Array.from(t)), e)), (n = i());
          }
        },
        u = () => {
          if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
          let e = 0,
            r = [];
          for (; e < t; ) {
            let t = (n = i()).slice();
            r.push(t), (e += n.length);
          }
          return x(...r);
        };
      return (e, t) => {
        let r;
        for (s(), c(e); !(r = t(u())); ) c();
        return s(), r;
      };
    }
    let P = {
      bigint: (e) => "bigint" == typeof e,
      function: (e) => "function" == typeof e,
      boolean: (e) => "boolean" == typeof e,
      string: (e) => "string" == typeof e,
      stringOrUint8Array: (e) => "string" == typeof e || n(e),
      isSafeInteger: (e) => Number.isSafeInteger(e),
      array: (e) => Array.isArray(e),
      field: (e, t) => t.Fp.isValid(e),
      hash: (e) => "function" == typeof e && Number.isSafeInteger(e.outputLen),
    };
    function M(e, t, r = {}) {
      let n = (t, r, n) => {
        let a = P[r];
        if ("function" != typeof a) throw Error("invalid validator function");
        let o = e[t];
        if ((!n || void 0 !== o) && !a(o, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + o
          );
      };
      for (let [e, r] of Object.entries(t)) n(e, r, !1);
      for (let [e, t] of Object.entries(r)) n(e, t, !0);
      return e;
    }
    function U(e) {
      let t = new WeakMap();
      return (r, ...n) => {
        let a = t.get(r);
        if (void 0 !== a) return a;
        let o = e(r, ...n);
        return t.set(r, o), o;
      };
    }
    e.s([
      "aInRange",
      () => R,
      "abool",
      () => o,
      "abytes",
      () => a,
      "bitLen",
      () => S,
      "bitMask",
      0,
      (e) => (r << BigInt(e)) - r,
      "bytesToHex",
      () => d,
      "bytesToNumberBE",
      () => p,
      "bytesToNumberLE",
      () => f,
      "concatBytes",
      () => x,
      "createHmacDrbg",
      () => A,
      "ensureBytes",
      () => m,
      "equalBytes",
      () => g,
      "hexToBytes",
      () => h,
      "inRange",
      () => v,
      "isBytes",
      () => n,
      "memoized",
      () => U,
      "numberToBytesBE",
      () => b,
      "numberToBytesLE",
      () => y,
      "numberToHexUnpadded",
      () => s,
      "utf8ToBytes",
      () => w,
      "validateObject",
      () => M,
    ]);
  },
  476133,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.exec(t);
      return r?.groups;
    }
    e.s([
      "bytesRegex",
      0,
      /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      "execTyped",
      () => t,
      "integerRegex",
      0,
      /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      "isTupleRegex",
      0,
      /^\(.+?\).*?$/,
    ]);
  },
  601238,
  558240,
  (e) => {
    "use strict";
    var t = e.i(476133);
    let r = /^tuple(?<array>(\[(\d*)\])*)$/;
    function n(e) {
      let n = "",
        a = e.length;
      for (let o = 0; o < a; o++)
        (n += (function e(n) {
          let a = n.type;
          if (r.test(n.type) && "components" in n) {
            a = "(";
            let o = n.components.length;
            for (let t = 0; t < o; t++)
              (a += e(n.components[t])), t < o - 1 && (a += ", ");
            let s = (0, t.execTyped)(r, n.type);
            return (a += `)${s?.array || ""}`), e({ ...n, type: a });
          }
          return ("indexed" in n && n.indexed && (a = `${a} indexed`), n.name)
            ? `${a} ${n.name}`
            : a;
        })(e[o])),
          o !== a - 1 && (n += ", ");
      return n;
    }
    function a(e) {
      return "function" === e.type
        ? `function ${e.name}(${n(e.inputs)})${
            e.stateMutability && "nonpayable" !== e.stateMutability
              ? ` ${e.stateMutability}`
              : ""
          }${e.outputs?.length ? ` returns (${n(e.outputs)})` : ""}`
        : "event" === e.type
        ? `event ${e.name}(${n(e.inputs)})`
        : "error" === e.type
        ? `error ${e.name}(${n(e.inputs)})`
        : "constructor" === e.type
        ? `constructor(${n(e.inputs)})${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "fallback" === e.type
        ? `fallback() external${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "receive() external payable";
    }
    e.s(["formatAbiParameters", () => n], 558240),
      e.s(["formatAbiItem", () => a], 601238);
  },
  927367,
  (e) => {
    "use strict";
    var t = e.i(476133);
    let r = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function n(e) {
      return r.test(e);
    }
    function a(e) {
      return (0, t.execTyped)(r, e);
    }
    let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function s(e) {
      return o.test(e);
    }
    function i(e) {
      return (0, t.execTyped)(o, e);
    }
    let c =
      /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
    function u(e) {
      return c.test(e);
    }
    function d(e) {
      return (0, t.execTyped)(c, e);
    }
    let l = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
    function h(e) {
      return l.test(e);
    }
    function p(e) {
      return (0, t.execTyped)(l, e);
    }
    let f =
      /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
    function b(e) {
      return f.test(e);
    }
    function y(e) {
      return (0, t.execTyped)(f, e);
    }
    let m = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
    function x(e) {
      return m.test(e);
    }
    function g(e) {
      return (0, t.execTyped)(m, e);
    }
    let w = /^receive\(\) external payable$/;
    function E(e) {
      return w.test(e);
    }
    let v = new Set(["memory", "indexed", "storage", "calldata"]),
      R = new Set(["indexed"]),
      S = new Set(["calldata", "memory", "storage"]);
    e.s([
      "eventModifiers",
      0,
      R,
      "execConstructorSignature",
      () => y,
      "execErrorSignature",
      () => a,
      "execEventSignature",
      () => i,
      "execFallbackSignature",
      () => g,
      "execFunctionSignature",
      () => d,
      "execStructSignature",
      () => p,
      "functionModifiers",
      0,
      S,
      "isConstructorSignature",
      () => b,
      "isErrorSignature",
      () => n,
      "isEventSignature",
      () => s,
      "isFallbackSignature",
      () => x,
      "isFunctionSignature",
      () => u,
      "isReceiveSignature",
      () => E,
      "isStructSignature",
      () => h,
      "modifiers",
      0,
      v,
    ]);
  },
  926752,
  (e) => {
    "use strict";
    class t extends Error {
      constructor(e, r = {}) {
        const n =
            r.cause instanceof t
              ? r.cause.details
              : r.cause?.message
              ? r.cause.message
              : r.details,
          a = (r.cause instanceof t && r.cause.docsPath) || r.docsPath;
        super(
          [
            e || "An error occurred.",
            "",
            ...(r.metaMessages ? [...r.metaMessages, ""] : []),
            ...(a ? [`Docs: https://abitype.dev${a}`] : []),
            ...(n ? [`Details: ${n}`] : []),
            "Version: abitype@1.2.3",
          ].join("\n")
        ),
          Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError",
          }),
          r.cause && (this.cause = r.cause),
          (this.details = n),
          (this.docsPath = a),
          (this.metaMessages = r.metaMessages),
          (this.shortMessage = e);
      }
    }
    e.s(["BaseError", () => t], 926752);
  },
  720473,
  278488,
  (e) => {
    "use strict";
    var t = e.i(926752);
    class r extends t.BaseError {
      constructor({ signature: e }) {
        super("Failed to parse ABI item.", {
          details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiitem-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiItemError",
          });
      }
    }
    class n extends t.BaseError {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [
            `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError",
          });
      }
    }
    class a extends t.BaseError {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [`Type "${e}" is not a valid ABI type.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError",
          });
      }
    }
    e.s(
      [
        "InvalidAbiItemError",
        () => r,
        "UnknownSolidityTypeError",
        () => a,
        "UnknownTypeError",
        () => n,
      ],
      720473
    );
    var o = t;
    class s extends o.BaseError {
      constructor({ param: e }) {
        super("Failed to parse ABI parameter.", {
          details: `parseAbiParameter(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiparameter-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParameterError",
          });
      }
    }
    class i extends o.BaseError {
      constructor({ params: e }) {
        super("Failed to parse ABI parameters.", {
          details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiparameters-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParametersError",
          });
      }
    }
    class c extends o.BaseError {
      constructor({ param: e }) {
        super("Invalid ABI parameter.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError",
          });
      }
    }
    class u extends o.BaseError {
      constructor({ param: e, name: t }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError",
          });
      }
    }
    class d extends o.BaseError {
      constructor({ param: e, type: t, modifier: r }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError",
          });
      }
    }
    class l extends o.BaseError {
      constructor({ param: e, type: t, modifier: r }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError",
          });
      }
    }
    class h extends o.BaseError {
      constructor({ abiParameter: e }) {
        super("Invalid ABI parameter.", {
          details: JSON.stringify(e, null, 2),
          metaMessages: ["ABI parameter type is invalid."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError",
          });
      }
    }
    e.s(
      [
        "InvalidAbiParameterError",
        () => s,
        "InvalidAbiParametersError",
        () => i,
        "InvalidAbiTypeParameterError",
        () => h,
        "InvalidFunctionModifierError",
        () => l,
        "InvalidModifierError",
        () => d,
        "InvalidParameterError",
        () => c,
        "SolidityProtectedKeywordError",
        () => u,
      ],
      278488
    );
  },
  994615,
  (e) => {
    "use strict";
    var t = e.i(926752);
    class r extends t.BaseError {
      constructor({ signature: e, type: t }) {
        super(`Invalid ${t} signature.`, { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError",
          });
      }
    }
    class n extends t.BaseError {
      constructor({ signature: e }) {
        super("Unknown signature.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError",
          });
      }
    }
    class a extends t.BaseError {
      constructor({ signature: e }) {
        super("Invalid struct signature.", {
          details: e,
          metaMessages: ["No properties exist."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError",
          });
      }
    }
    e.s([
      "InvalidSignatureError",
      () => r,
      "InvalidStructSignatureError",
      () => a,
      "UnknownSignatureError",
      () => n,
    ]);
  },
  647131,
  (e) => {
    "use strict";
    var t = e.i(926752);
    class r extends t.BaseError {
      constructor({ type: e }) {
        super("Circular reference detected.", {
          metaMessages: [`Struct "${e}" is a circular reference.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError",
          });
      }
    }
    e.s(["CircularReferenceError", () => r]);
  },
  694051,
  (e) => {
    "use strict";
    var t = e.i(926752);
    class r extends t.BaseError {
      constructor({ current: e, depth: t }) {
        super("Unbalanced parentheses.", {
          metaMessages: [
            `"${e.trim()}" has too many ${
              t > 0 ? "opening" : "closing"
            } parentheses.`,
          ],
          details: `Depth "${t}"`,
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError",
          });
      }
    }
    e.s(["InvalidParenthesisError", () => r]);
  },
  885922,
  67116,
  719433,
  (e) => {
    "use strict";
    var t = e.i(927367),
      r = e.i(476133),
      n = e.i(720473),
      a = e.i(278488),
      o = e.i(994615),
      s = e.i(647131),
      i = e.i(694051);
    let c = new Map([
      ["address", { type: "address" }],
      ["bool", { type: "bool" }],
      ["bytes", { type: "bytes" }],
      ["bytes32", { type: "bytes32" }],
      ["int", { type: "int256" }],
      ["int256", { type: "int256" }],
      ["string", { type: "string" }],
      ["uint", { type: "uint256" }],
      ["uint8", { type: "uint8" }],
      ["uint16", { type: "uint16" }],
      ["uint24", { type: "uint24" }],
      ["uint32", { type: "uint32" }],
      ["uint64", { type: "uint64" }],
      ["uint96", { type: "uint96" }],
      ["uint112", { type: "uint112" }],
      ["uint160", { type: "uint160" }],
      ["uint192", { type: "uint192" }],
      ["uint256", { type: "uint256" }],
      ["address owner", { type: "address", name: "owner" }],
      ["address to", { type: "address", name: "to" }],
      ["bool approved", { type: "bool", name: "approved" }],
      ["bytes _data", { type: "bytes", name: "_data" }],
      ["bytes data", { type: "bytes", name: "data" }],
      ["bytes signature", { type: "bytes", name: "signature" }],
      ["bytes32 hash", { type: "bytes32", name: "hash" }],
      ["bytes32 r", { type: "bytes32", name: "r" }],
      ["bytes32 root", { type: "bytes32", name: "root" }],
      ["bytes32 s", { type: "bytes32", name: "s" }],
      ["string name", { type: "string", name: "name" }],
      ["string symbol", { type: "string", name: "symbol" }],
      ["string tokenURI", { type: "string", name: "tokenURI" }],
      ["uint tokenId", { type: "uint256", name: "tokenId" }],
      ["uint8 v", { type: "uint8", name: "v" }],
      ["uint256 balance", { type: "uint256", name: "balance" }],
      ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
      ["uint256 value", { type: "uint256", name: "value" }],
      [
        "event:address indexed from",
        { type: "address", name: "from", indexed: !0 },
      ],
      [
        "event:address indexed to",
        { type: "address", name: "to", indexed: !0 },
      ],
      [
        "event:uint indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
      [
        "event:uint256 indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
    ]);
    function u(e, r = {}) {
      if ((0, t.isFunctionSignature)(e))
        return (function (e, r = {}) {
          let n = (0, t.execFunctionSignature)(e);
          if (!n)
            throw new o.InvalidSignatureError({
              signature: e,
              type: "function",
            });
          let a = f(n.parameters),
            s = [],
            i = a.length;
          for (let e = 0; e < i; e++)
            s.push(
              p(a[e], {
                modifiers: t.functionModifiers,
                structs: r,
                type: "function",
              })
            );
          let c = [];
          if (n.returns) {
            let e = f(n.returns),
              a = e.length;
            for (let n = 0; n < a; n++)
              c.push(
                p(e[n], {
                  modifiers: t.functionModifiers,
                  structs: r,
                  type: "function",
                })
              );
          }
          return {
            name: n.name,
            type: "function",
            stateMutability: n.stateMutability ?? "nonpayable",
            inputs: s,
            outputs: c,
          };
        })(e, r);
      if ((0, t.isEventSignature)(e))
        return (function (e, r = {}) {
          let n = (0, t.execEventSignature)(e);
          if (!n)
            throw new o.InvalidSignatureError({ signature: e, type: "event" });
          let a = f(n.parameters),
            s = [],
            i = a.length;
          for (let e = 0; e < i; e++)
            s.push(
              p(a[e], {
                modifiers: t.eventModifiers,
                structs: r,
                type: "event",
              })
            );
          return { name: n.name, type: "event", inputs: s };
        })(e, r);
      if ((0, t.isErrorSignature)(e))
        return (function (e, r = {}) {
          let n = (0, t.execErrorSignature)(e);
          if (!n)
            throw new o.InvalidSignatureError({ signature: e, type: "error" });
          let a = f(n.parameters),
            s = [],
            i = a.length;
          for (let e = 0; e < i; e++)
            s.push(p(a[e], { structs: r, type: "error" }));
          return { name: n.name, type: "error", inputs: s };
        })(e, r);
      if ((0, t.isConstructorSignature)(e))
        return (function (e, r = {}) {
          let n = (0, t.execConstructorSignature)(e);
          if (!n)
            throw new o.InvalidSignatureError({
              signature: e,
              type: "constructor",
            });
          let a = f(n.parameters),
            s = [],
            i = a.length;
          for (let e = 0; e < i; e++)
            s.push(p(a[e], { structs: r, type: "constructor" }));
          return {
            type: "constructor",
            stateMutability: n.stateMutability ?? "nonpayable",
            inputs: s,
          };
        })(e, r);
      if ((0, t.isFallbackSignature)(e)) {
        var n = e;
        let r = (0, t.execFallbackSignature)(n);
        if (!r)
          throw new o.InvalidSignatureError({ signature: n, type: "fallback" });
        return {
          type: "fallback",
          stateMutability: r.stateMutability ?? "nonpayable",
        };
      }
      if ((0, t.isReceiveSignature)(e))
        return { type: "receive", stateMutability: "payable" };
      throw new o.UnknownSignatureError({ signature: e });
    }
    let d =
        /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      l =
        /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      h = /^u?int$/;
    function p(e, o) {
      var s, i;
      let u,
        m = (function (e, t, r) {
          let n = "";
          if (r)
            for (let e of Object.entries(r)) {
              if (!e) continue;
              let t = "";
              for (let r of e[1])
                t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
              n += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${n}` : `${e}${n}`;
        })(e, o?.type, o?.structs);
      if (c.has(m)) return c.get(m);
      let x = r.isTupleRegex.test(e),
        g = (0, r.execTyped)(x ? l : d, e);
      if (!g) throw new a.InvalidParameterError({ param: e });
      if (
        g.name &&
        ("address" === (s = g.name) ||
          "bool" === s ||
          "function" === s ||
          "string" === s ||
          "tuple" === s ||
          r.bytesRegex.test(s) ||
          r.integerRegex.test(s) ||
          y.test(s))
      )
        throw new a.SolidityProtectedKeywordError({ param: e, name: g.name });
      let w = g.name ? { name: g.name } : {},
        E = "indexed" === g.modifier ? { indexed: !0 } : {},
        v = o?.structs ?? {},
        R = {};
      if (x) {
        u = "tuple";
        let e = f(g.type),
          t = [],
          r = e.length;
        for (let n = 0; n < r; n++) t.push(p(e[n], { structs: v }));
        R = { components: t };
      } else if (g.type in v) (u = "tuple"), (R = { components: v[g.type] });
      else if (h.test(g.type)) u = `${g.type}256`;
      else if ("address payable" === g.type) u = "address";
      else if (((u = g.type), o?.type !== "struct" && !b(u)))
        throw new n.UnknownSolidityTypeError({ type: u });
      if (g.modifier) {
        if (!o?.modifiers?.has?.(g.modifier))
          throw new a.InvalidModifierError({
            param: e,
            type: o?.type,
            modifier: g.modifier,
          });
        if (
          t.functionModifiers.has(g.modifier) &&
          ((i = u),
          !g.array && "bytes" !== i && "string" !== i && "tuple" !== i)
        )
          throw new a.InvalidFunctionModifierError({
            param: e,
            type: o?.type,
            modifier: g.modifier,
          });
      }
      let S = { type: `${u}${g.array ?? ""}`, ...w, ...E, ...R };
      return c.set(m, S), S;
    }
    function f(e, t = [], r = "", n = 0) {
      let a = e.trim().length;
      for (let o = 0; o < a; o++) {
        let a = e[o],
          s = e.slice(o + 1);
        switch (a) {
          case ",":
            return 0 === n ? f(s, [...t, r.trim()]) : f(s, t, `${r}${a}`, n);
          case "(":
            return f(s, t, `${r}${a}`, n + 1);
          case ")":
            return f(s, t, `${r}${a}`, n - 1);
          default:
            return f(s, t, `${r}${a}`, n);
        }
      }
      if ("" === r) return t;
      if (0 !== n)
        throw new i.InvalidParenthesisError({ current: r, depth: n });
      return t.push(r.trim()), t;
    }
    function b(e) {
      return (
        "address" === e ||
        "bool" === e ||
        "function" === e ||
        "string" === e ||
        r.bytesRegex.test(e) ||
        r.integerRegex.test(e)
      );
    }
    let y =
      /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    function m(e) {
      let i = {},
        c = e.length;
      for (let r = 0; r < c; r++) {
        let n = e[r];
        if (!(0, t.isStructSignature)(n)) continue;
        let a = (0, t.execStructSignature)(n);
        if (!a)
          throw new o.InvalidSignatureError({ signature: n, type: "struct" });
        let s = a.properties.split(";"),
          c = [],
          u = s.length;
        for (let e = 0; e < u; e++) {
          let t = s[e].trim();
          if (!t) continue;
          let r = p(t, { type: "struct" });
          c.push(r);
        }
        if (!c.length)
          throw new o.InvalidStructSignatureError({ signature: n });
        i[a.name] = c;
      }
      let u = {},
        d = Object.entries(i),
        l = d.length;
      for (let e = 0; e < l; e++) {
        let [t, o] = d[e];
        u[t] = (function e(t = [], o = {}, i = new Set()) {
          let c = [],
            u = t.length;
          for (let d = 0; d < u; d++) {
            let u = t[d];
            if (r.isTupleRegex.test(u.type)) c.push(u);
            else {
              let t = (0, r.execTyped)(x, u.type);
              if (!t?.type)
                throw new a.InvalidAbiTypeParameterError({ abiParameter: u });
              let { array: d, type: l } = t;
              if (l in o) {
                if (i.has(l)) throw new s.CircularReferenceError({ type: l });
                c.push({
                  ...u,
                  type: `tuple${d ?? ""}`,
                  components: e(o[l], o, new Set([...i, l])),
                });
              } else if (b(l)) c.push(u);
              else throw new n.UnknownTypeError({ type: l });
            }
          }
          return c;
        })(o, i);
      }
      return u;
    }
    e.s(
      [
        "isSolidityType",
        () => b,
        "parseAbiParameter",
        () => p,
        "parseSignature",
        () => u,
        "splitParameters",
        () => f,
      ],
      67116
    );
    let x = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    function g(e) {
      let r = m(e),
        n = [],
        a = e.length;
      for (let o = 0; o < a; o++) {
        let a = e[o];
        (0, t.isStructSignature)(a) || n.push(u(a, r));
      }
      return n;
    }
    e.s(["parseStructs", () => m], 719433), e.s(["parseAbi", () => g], 885922);
  },
  510579,
  (e) => {
    "use strict";
    let t,
      r = 256;
    function n(e = 11) {
      if (!t || r + e > 512) {
        (t = ""), (r = 0);
        for (let e = 0; e < 256; e++)
          t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
      }
      return t.substring(r, r++ + e);
    }
    e.s(["uid", () => n]);
  },
  458122,
  15998,
  (e) => {
    "use strict";
    var t = e.i(86972),
      r = e.i(822843);
    class n extends t.BaseError {
      constructor(
        e,
        { code: t, docsPath: n, metaMessages: a, name: o, shortMessage: s }
      ) {
        super(s, {
          cause: e,
          docsPath: n,
          metaMessages: a || e?.metaMessages,
          name: o || "RpcError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.name = o || e.name),
          (this.code = e instanceof r.RpcRequestError ? e.code : t ?? -1);
      }
    }
    class a extends n {
      constructor(e, t) {
        super(e, t),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t.data);
      }
    }
    class o extends n {
      constructor(e) {
        super(e, {
          code: o.code,
          name: "ParseRpcError",
          shortMessage:
            "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
        });
      }
    }
    Object.defineProperty(o, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32700,
    });
    class s extends n {
      constructor(e) {
        super(e, {
          code: s.code,
          name: "InvalidRequestRpcError",
          shortMessage: "JSON is not a valid request object.",
        });
      }
    }
    Object.defineProperty(s, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32600,
    });
    class i extends n {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: i.code,
          name: "MethodNotFoundRpcError",
          shortMessage: `The method${
            t ? ` "${t}"` : ""
          } does not exist / is not available.`,
        });
      }
    }
    Object.defineProperty(i, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32601,
    });
    class c extends n {
      constructor(e) {
        super(e, {
          code: c.code,
          name: "InvalidParamsRpcError",
          shortMessage:
            "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(c, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class u extends n {
      constructor(e) {
        super(e, {
          code: u.code,
          name: "InternalRpcError",
          shortMessage: "An internal error was received.",
        });
      }
    }
    Object.defineProperty(u, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32603,
    });
    class d extends n {
      constructor(e) {
        super(e, {
          code: d.code,
          name: "InvalidInputRpcError",
          shortMessage:
            "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(d, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32e3,
    });
    class l extends n {
      constructor(e) {
        super(e, {
          code: l.code,
          name: "ResourceNotFoundRpcError",
          shortMessage: "Requested resource not found.",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError",
          });
      }
    }
    Object.defineProperty(l, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32001,
    });
    class h extends n {
      constructor(e) {
        super(e, {
          code: h.code,
          name: "ResourceUnavailableRpcError",
          shortMessage: "Requested resource not available.",
        });
      }
    }
    Object.defineProperty(h, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32002,
    });
    class p extends n {
      constructor(e) {
        super(e, {
          code: p.code,
          name: "TransactionRejectedRpcError",
          shortMessage: "Transaction creation failed.",
        });
      }
    }
    Object.defineProperty(p, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32003,
    });
    class f extends n {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: f.code,
          name: "MethodNotSupportedRpcError",
          shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
        });
      }
    }
    Object.defineProperty(f, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32004,
    });
    class b extends n {
      constructor(e) {
        super(e, {
          code: b.code,
          name: "LimitExceededRpcError",
          shortMessage: "Request exceeds defined limit.",
        });
      }
    }
    Object.defineProperty(b, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32005,
    });
    class y extends n {
      constructor(e) {
        super(e, {
          code: y.code,
          name: "JsonRpcVersionUnsupportedError",
          shortMessage: "Version of JSON-RPC protocol is not supported.",
        });
      }
    }
    Object.defineProperty(y, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32006,
    });
    class m extends a {
      constructor(e) {
        super(e, {
          code: m.code,
          name: "UserRejectedRequestError",
          shortMessage: "User rejected the request.",
        });
      }
    }
    Object.defineProperty(m, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4001,
    });
    class x extends a {
      constructor(e) {
        super(e, {
          code: x.code,
          name: "UnauthorizedProviderError",
          shortMessage:
            "The requested method and/or account has not been authorized by the user.",
        });
      }
    }
    Object.defineProperty(x, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4100,
    });
    class g extends a {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: g.code,
          name: "UnsupportedProviderMethodError",
          shortMessage: `The Provider does not support the requested method${
            t ? ` " ${t}"` : ""
          }.`,
        });
      }
    }
    Object.defineProperty(g, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4200,
    });
    class w extends a {
      constructor(e) {
        super(e, {
          code: w.code,
          name: "ProviderDisconnectedError",
          shortMessage: "The Provider is disconnected from all chains.",
        });
      }
    }
    Object.defineProperty(w, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4900,
    });
    class E extends a {
      constructor(e) {
        super(e, {
          code: E.code,
          name: "ChainDisconnectedError",
          shortMessage: "The Provider is not connected to the requested chain.",
        });
      }
    }
    Object.defineProperty(E, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4901,
    });
    class v extends a {
      constructor(e) {
        super(e, {
          code: v.code,
          name: "SwitchChainError",
          shortMessage: "An error occurred when attempting to switch chain.",
        });
      }
    }
    Object.defineProperty(v, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4902,
    });
    class R extends a {
      constructor(e) {
        super(e, {
          code: R.code,
          name: "UnsupportedNonOptionalCapabilityError",
          shortMessage:
            "This Wallet does not support a capability that was not marked as optional.",
        });
      }
    }
    Object.defineProperty(R, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5700,
    });
    class S extends a {
      constructor(e) {
        super(e, {
          code: S.code,
          name: "UnsupportedChainIdError",
          shortMessage: "This Wallet does not support the requested chain ID.",
        });
      }
    }
    Object.defineProperty(S, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5710,
    });
    class I extends a {
      constructor(e) {
        super(e, {
          code: I.code,
          name: "DuplicateIdError",
          shortMessage: "There is already a bundle submitted with this ID.",
        });
      }
    }
    Object.defineProperty(I, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5720,
    });
    class A extends a {
      constructor(e) {
        super(e, {
          code: A.code,
          name: "UnknownBundleIdError",
          shortMessage: "This bundle id is unknown / has not been submitted",
        });
      }
    }
    Object.defineProperty(A, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5730,
    });
    class P extends a {
      constructor(e) {
        super(e, {
          code: P.code,
          name: "BundleTooLargeError",
          shortMessage:
            "The call bundle is too large for the Wallet to process.",
        });
      }
    }
    Object.defineProperty(P, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5740,
    });
    class M extends a {
      constructor(e) {
        super(e, {
          code: M.code,
          name: "AtomicReadyWalletRejectedUpgradeError",
          shortMessage:
            "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
        });
      }
    }
    Object.defineProperty(M, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5750,
    });
    class U extends a {
      constructor(e) {
        super(e, {
          code: U.code,
          name: "AtomicityNotSupportedError",
          shortMessage:
            "The wallet does not support atomic execution but the request requires it.",
        });
      }
    }
    Object.defineProperty(U, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5760,
    });
    class $ extends a {
      constructor(e) {
        super(e, {
          code: $.code,
          name: "WalletConnectSessionSettlementError",
          shortMessage: "WalletConnect session settlement failed.",
        });
      }
    }
    Object.defineProperty($, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 7e3,
    });
    class B extends n {
      constructor(e) {
        super(e, {
          name: "UnknownRpcError",
          shortMessage: "An unknown RPC error occurred.",
        });
      }
    }
    async function j(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    e.s(
      [
        "AtomicReadyWalletRejectedUpgradeError",
        () => M,
        "AtomicityNotSupportedError",
        () => U,
        "BundleTooLargeError",
        () => P,
        "ChainDisconnectedError",
        () => E,
        "DuplicateIdError",
        () => I,
        "InternalRpcError",
        () => u,
        "InvalidInputRpcError",
        () => d,
        "InvalidParamsRpcError",
        () => c,
        "InvalidRequestRpcError",
        () => s,
        "JsonRpcVersionUnsupportedError",
        () => y,
        "LimitExceededRpcError",
        () => b,
        "MethodNotFoundRpcError",
        () => i,
        "MethodNotSupportedRpcError",
        () => f,
        "ParseRpcError",
        () => o,
        "ProviderDisconnectedError",
        () => w,
        "ProviderRpcError",
        () => a,
        "ResourceNotFoundRpcError",
        () => l,
        "ResourceUnavailableRpcError",
        () => h,
        "RpcError",
        () => n,
        "SwitchChainError",
        () => v,
        "TransactionRejectedRpcError",
        () => p,
        "UnauthorizedProviderError",
        () => x,
        "UnknownBundleIdError",
        () => A,
        "UnknownRpcError",
        () => B,
        "UnsupportedChainIdError",
        () => S,
        "UnsupportedNonOptionalCapabilityError",
        () => R,
        "UnsupportedProviderMethodError",
        () => g,
        "UserRejectedRequestError",
        () => m,
        "WalletConnectSessionSettlementError",
        () => $,
      ],
      458122
    ),
      e.s(["wait", () => j], 15998);
  },
  516097,
  (e) => {
    "use strict";
    var t = e.i(15998);
    function r(
      e,
      { delay: n = 100, retryCount: a = 2, shouldRetry: o = () => !0 } = {}
    ) {
      return new Promise((r, s) => {
        let i = async ({ count: c = 0 } = {}) => {
          let u = async ({ error: e }) => {
            let r = "function" == typeof n ? n({ count: c, error: e }) : n;
            r && (await (0, t.wait)(r)), i({ count: c + 1 });
          };
          try {
            let t = await e();
            r(t);
          } catch (e) {
            if (c < a && (await o({ count: c, error: e })))
              return u({ error: e });
            s(e);
          }
        };
        i();
      });
    }
    e.s(["withRetry", () => r]);
  },
  315891,
  676029,
  241464,
  1495,
  (e) => {
    "use strict";
    var t = e.i(86972);
    class r extends t.BaseError {
      constructor() {
        super(
          "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
          { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
        );
      }
    }
    e.s(["UrlRequiredError", () => r], 315891);
    var n = e.i(822843);
    function a(
      e,
      { errorInstance: t = Error("timed out"), timeout: r, signal: n }
    ) {
      return new Promise((a, o) => {
        (async () => {
          let s;
          try {
            let i = new AbortController();
            r > 0 &&
              (s = setTimeout(() => {
                n ? i.abort() : o(t);
              }, r)),
              a(await e({ signal: i?.signal || null }));
          } catch (e) {
            e?.name === "AbortError" && o(t), o(e);
          } finally {
            clearTimeout(s);
          }
        })();
      });
    }
    e.s(["withTimeout", () => a], 676029);
    var o = e.i(713925);
    let s = {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      },
    };
    function i(e, t = {}) {
      let { url: r, headers: c } = (function (e) {
        try {
          let t = new URL(e),
            r = (() => {
              if (t.username) {
                let e = `${decodeURIComponent(t.username)}:${decodeURIComponent(
                  t.password
                )}`;
                return (
                  (t.username = ""),
                  (t.password = ""),
                  {
                    url: t.toString(),
                    headers: { Authorization: `Basic ${btoa(e)}` },
                  }
                );
              }
            })();
          return { url: t.toString(), ...r };
        } catch {
          return { url: e };
        }
      })(e);
      return {
        async request(e) {
          let {
              body: i,
              fetchFn: u = t.fetchFn ?? fetch,
              onRequest: d = t.onRequest,
              onResponse: l = t.onResponse,
              timeout: h = t.timeout ?? 1e4,
            } = e,
            p = { ...(t.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
            { headers: f, method: b, signal: y } = p;
          try {
            let e,
              t = await a(
                async ({ signal: e }) => {
                  let t = {
                      ...p,
                      body: Array.isArray(i)
                        ? (0, o.stringify)(
                            i.map((e) => ({
                              jsonrpc: "2.0",
                              id: e.id ?? s.take(),
                              ...e,
                            }))
                          )
                        : (0, o.stringify)({
                            jsonrpc: "2.0",
                            id: i.id ?? s.take(),
                            ...i,
                          }),
                      headers: {
                        ...c,
                        "Content-Type": "application/json",
                        ...f,
                      },
                      method: b || "POST",
                      signal: y || (h > 0 ? e : null),
                    },
                    n = new Request(r, t),
                    a = (await d?.(n, t)) ?? { ...t, url: r };
                  return await u(a.url ?? r, a);
                },
                {
                  errorInstance: new n.TimeoutError({ body: i, url: r }),
                  timeout: h,
                  signal: !0,
                }
              );
            if (
              (l && (await l(t)),
              t.headers.get("Content-Type")?.startsWith("application/json"))
            )
              e = await t.json();
            else {
              e = await t.text();
              try {
                e = JSON.parse(e || "{}");
              } catch (r) {
                if (t.ok) throw r;
                e = { error: e };
              }
            }
            if (!t.ok) {
              if (
                "number" == typeof e.error?.code &&
                "string" == typeof e.error?.message
              )
                return e;
              throw new n.HttpRequestError({
                body: i,
                details: (0, o.stringify)(e.error) || t.statusText,
                headers: t.headers,
                status: t.status,
                url: r,
              });
            }
            return e;
          } catch (e) {
            if (e instanceof n.HttpRequestError || e instanceof n.TimeoutError)
              throw e;
            throw new n.HttpRequestError({ body: i, cause: e, url: r });
          }
        },
      };
    }
    e.s(["idCache", 0, s], 241464), e.s(["getHttpRpcClient", () => i], 1495);
  },
  188621,
  (e) => {
    "use strict";
    let t = new (e.i(753371).LruMap)(8192);
    function r(e, { enabled: r = !0, id: n }) {
      if (!r || !n) return e();
      if (t.get(n)) return t.get(n);
      let a = e().finally(() => t.delete(n));
      return t.set(n, a), a;
    }
    e.s(["withDedupe", () => r]);
  },
  906413,
  (e) => {
    "use strict";
    var t = e.i(86972),
      r = e.i(822843),
      n = e.i(458122),
      a = e.i(188621),
      o = e.i(516097),
      s = e.i(713925);
    function i(e, c = {}) {
      return async (i, u = {}) => {
        let {
            dedupe: d = !1,
            methods: l,
            retryDelay: h = 150,
            retryCount: p = 3,
            uid: f,
          } = { ...c, ...u },
          { method: b } = i;
        if (l?.exclude?.includes(b) || (l?.include && !l.include.includes(b)))
          throw new n.MethodNotSupportedRpcError(
            Error("method not supported"),
            { method: b }
          );
        let y = d
          ? (function (e, t = 0) {
              let r = 0xdeadbeef ^ t,
                n = 0x41c6ce57 ^ t;
              for (let t = 0; t < e.length; t++) {
                let a = e.charCodeAt(t);
                (r = Math.imul(r ^ a, 0x9e3779b1)),
                  (n = Math.imul(n ^ a, 0x5f356495));
              }
              return (
                (r =
                  Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
                  Math.imul(n ^ (n >>> 16), 0xc2b2ae35)),
                (
                  0x100000000 *
                    (2097151 &
                      (n =
                        Math.imul(n ^ (n >>> 16), 0x85ebca6b) ^
                        Math.imul(r ^ (r >>> 16), 0xc2b2ae35))) +
                  (r >>> 0)
                ).toString(36)
              );
            })(`${f}.${(0, s.stringify)(i)}`)
          : void 0;
        return (0, a.withDedupe)(
          () =>
            (0, o.withRetry)(
              async () => {
                try {
                  return await e(i);
                } catch (e) {
                  switch (e.code) {
                    case n.ParseRpcError.code:
                      throw new n.ParseRpcError(e);
                    case n.InvalidRequestRpcError.code:
                      throw new n.InvalidRequestRpcError(e);
                    case n.MethodNotFoundRpcError.code:
                      throw new n.MethodNotFoundRpcError(e, {
                        method: i.method,
                      });
                    case n.InvalidParamsRpcError.code:
                      throw new n.InvalidParamsRpcError(e);
                    case n.InternalRpcError.code:
                      throw new n.InternalRpcError(e);
                    case n.InvalidInputRpcError.code:
                      throw new n.InvalidInputRpcError(e);
                    case n.ResourceNotFoundRpcError.code:
                      throw new n.ResourceNotFoundRpcError(e);
                    case n.ResourceUnavailableRpcError.code:
                      throw new n.ResourceUnavailableRpcError(e);
                    case n.TransactionRejectedRpcError.code:
                      throw new n.TransactionRejectedRpcError(e);
                    case n.MethodNotSupportedRpcError.code:
                      throw new n.MethodNotSupportedRpcError(e, {
                        method: i.method,
                      });
                    case n.LimitExceededRpcError.code:
                      throw new n.LimitExceededRpcError(e);
                    case n.JsonRpcVersionUnsupportedError.code:
                      throw new n.JsonRpcVersionUnsupportedError(e);
                    case n.UserRejectedRequestError.code:
                      throw new n.UserRejectedRequestError(e);
                    case n.UnauthorizedProviderError.code:
                      throw new n.UnauthorizedProviderError(e);
                    case n.UnsupportedProviderMethodError.code:
                      throw new n.UnsupportedProviderMethodError(e);
                    case n.ProviderDisconnectedError.code:
                      throw new n.ProviderDisconnectedError(e);
                    case n.ChainDisconnectedError.code:
                      throw new n.ChainDisconnectedError(e);
                    case n.SwitchChainError.code:
                      throw new n.SwitchChainError(e);
                    case n.UnsupportedNonOptionalCapabilityError.code:
                      throw new n.UnsupportedNonOptionalCapabilityError(e);
                    case n.UnsupportedChainIdError.code:
                      throw new n.UnsupportedChainIdError(e);
                    case n.DuplicateIdError.code:
                      throw new n.DuplicateIdError(e);
                    case n.UnknownBundleIdError.code:
                      throw new n.UnknownBundleIdError(e);
                    case n.BundleTooLargeError.code:
                      throw new n.BundleTooLargeError(e);
                    case n.AtomicReadyWalletRejectedUpgradeError.code:
                      throw new n.AtomicReadyWalletRejectedUpgradeError(e);
                    case n.AtomicityNotSupportedError.code:
                      throw new n.AtomicityNotSupportedError(e);
                    case 5e3:
                      throw new n.UserRejectedRequestError(e);
                    case n.WalletConnectSessionSettlementError.code:
                      throw new n.WalletConnectSessionSettlementError(e);
                    default:
                      if (e instanceof t.BaseError) throw e;
                      throw new n.UnknownRpcError(e);
                  }
                }
              },
              {
                delay: ({ count: e, error: t }) => {
                  if (t && t instanceof r.HttpRequestError) {
                    let e = t?.headers?.get("Retry-After");
                    if (e?.match(/\d/)) return 1e3 * Number.parseInt(e, 10);
                  }
                  return ~~(1 << e) * h;
                },
                retryCount: p,
                shouldRetry: ({ error: e }) => {
                  var t;
                  return "code" in (t = e) && "number" == typeof t.code
                    ? -1 === t.code ||
                        t.code === n.LimitExceededRpcError.code ||
                        t.code === n.InternalRpcError.code ||
                        429 === t.code
                    : !(t instanceof r.HttpRequestError) ||
                        !t.status ||
                        403 === t.status ||
                        408 === t.status ||
                        413 === t.status ||
                        429 === t.status ||
                        500 === t.status ||
                        502 === t.status ||
                        503 === t.status ||
                        504 === t.status ||
                        !1;
                },
              }
            ),
          { enabled: d, id: y }
        );
      };
    }
    e.s(["buildRequest", () => i]);
  },
  79999,
  (e) => {
    "use strict";
    var t = e.i(906413),
      r = e.i(510579);
    function n(
      {
        key: e,
        methods: n,
        name: a,
        request: o,
        retryCount: s = 3,
        retryDelay: i = 150,
        timeout: c,
        type: u,
      },
      d
    ) {
      let l = (0, r.uid)();
      return {
        config: {
          key: e,
          methods: n,
          name: a,
          request: o,
          retryCount: s,
          retryDelay: i,
          timeout: c,
          type: u,
        },
        request: (0, t.buildRequest)(o, {
          methods: n,
          retryCount: s,
          retryDelay: i,
          uid: l,
        }),
        value: d,
      };
    }
    e.s(["createTransport", () => n]);
  },
  738118,
  (e) => {
    "use strict";
    var t = e.i(822843),
      r = e.i(315891),
      n = e.i(919327),
      a = e.i(1495),
      o = e.i(79999);
    function s(e, i = {}) {
      let {
        batch: c,
        fetchFn: u,
        fetchOptions: d,
        key: l = "http",
        methods: h,
        name: p = "HTTP JSON-RPC",
        onFetchRequest: f,
        onFetchResponse: b,
        retryDelay: y,
        raw: m,
      } = i;
      return ({ chain: s, retryCount: x, timeout: g }) => {
        let { batchSize: w = 1e3, wait: E = 0 } = "object" == typeof c ? c : {},
          v = i.retryCount ?? x,
          R = g ?? i.timeout ?? 1e4,
          S = e || s?.rpcUrls.default.http[0];
        if (!S) throw new r.UrlRequiredError();
        let I = (0, a.getHttpRpcClient)(S, {
          fetchFn: u,
          fetchOptions: d,
          onRequest: f,
          onResponse: b,
          timeout: R,
        });
        return (0, o.createTransport)(
          {
            key: l,
            methods: h,
            name: p,
            async request({ method: e, params: r }) {
              let a = { method: e, params: r },
                { schedule: o } = (0, n.createBatchScheduler)({
                  id: S,
                  wait: E,
                  shouldSplitBatch: (e) => e.length > w,
                  fn: (e) => I.request({ body: e }),
                  sort: (e, t) => e.id - t.id,
                }),
                s = async (e) => (c ? o(e) : [await I.request({ body: e })]),
                [{ error: i, result: u }] = await s(a);
              if (m) return { error: i, result: u };
              if (i) throw new t.RpcRequestError({ body: a, error: i, url: S });
              return u;
            },
            retryCount: v,
            retryDelay: y,
            timeout: R,
            type: "http",
          },
          { fetchOptions: d, url: S }
        );
      };
    }
    e.s(["http", () => s]);
  },
]);
