(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  824219,
  (e) => {
    "use strict";
    let t = "2.55.0",
      r = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
          t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
        version: `viem@${t}`,
      };
    class s extends Error {
      constructor(e, i = {}) {
        const n =
            i.cause instanceof s
              ? i.cause.details
              : i.cause?.message
              ? i.cause.message
              : i.details,
          o = (i.cause instanceof s && i.cause.docsPath) || i.docsPath,
          a = r.getDocsUrl?.({ ...i, docsPath: o });
        super(
          [
            e || "An error occurred.",
            "",
            ...(i.metaMessages ? [...i.metaMessages, ""] : []),
            ...(a ? [`Docs: ${a}`] : []),
            ...(n ? [`Details: ${n}`] : []),
            ...(r.version ? [`Version: ${r.version}`] : []),
          ].join("\n"),
          i.cause ? { cause: i.cause } : void 0
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
          Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError",
          }),
          (this.details = n),
          (this.docsPath = o),
          (this.metaMessages = i.metaMessages),
          (this.name = i.name ?? this.name),
          (this.shortMessage = e),
          (this.version = t);
      }
      walk(e) {
        return (function e(t, r) {
          return r?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
            ? e(t.cause, r)
            : r
            ? null
            : t;
        })(this, e);
      }
    }
    e.s(["BaseError", () => s], 824219);
  },
  360235,
  (e) => {
    "use strict";
    var t = e.i(824219);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`Address "${e}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart.",
          ],
          name: "InvalidAddressError",
        });
      }
    }
    e.s(["InvalidAddressError", () => r]);
  },
  413236,
  (e) => {
    "use strict";
    function t(e, { strict: r = !0 } = {}) {
      return (
        !!e &&
        "string" == typeof e &&
        (r ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
      );
    }
    e.s(["isHex", () => t]);
  },
  866311,
  (e) => {
    "use strict";
    var t = e.i(824219);
    class r extends t.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset "${e}" is out-of-bounds (size: ${r}).`,
          { name: "SliceOffsetOutOfBoundsError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
          { name: "SizeExceedsPaddingSizeError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
          { name: "InvalidBytesLengthError" }
        );
      }
    }
    e.s([
      "InvalidBytesLengthError",
      () => i,
      "SizeExceedsPaddingSizeError",
      () => s,
      "SliceOffsetOutOfBoundsError",
      () => r,
    ]);
  },
  935888,
  (e) => {
    "use strict";
    var t = e.i(866311);
    function r(e, { dir: i, size: n = 32 } = {}) {
      return "string" == typeof e
        ? s(e, { dir: i, size: n })
        : (function (e, { dir: r, size: s = 32 } = {}) {
            if (null === s) return e;
            if (e.length > s)
              throw new t.SizeExceedsPaddingSizeError({
                size: e.length,
                targetSize: s,
                type: "bytes",
              });
            let i = new Uint8Array(s);
            for (let t = 0; t < s; t++) {
              let n = "right" === r;
              i[n ? t : s - t - 1] = e[n ? t : e.length - t - 1];
            }
            return i;
          })(e, { dir: i, size: n });
    }
    function s(e, { dir: r, size: i = 32 } = {}) {
      if (null === i) return e;
      let n = e.replace("0x", "");
      if (n.length > 2 * i)
        throw new t.SizeExceedsPaddingSizeError({
          size: Math.ceil(n.length / 2),
          targetSize: i,
          type: "hex",
        });
      return `0x${n["right" === r ? "padEnd" : "padStart"](2 * i, "0")}`;
    }
    e.s(["pad", () => r, "padHex", () => s]);
  },
  589272,
  (e) => {
    "use strict";
    var t = e.i(824219);
    class r extends t.BaseError {
      constructor({ max: e, min: t, signed: r, size: s, value: i }) {
        super(
          `Number "${i}" is not in safe ${
            s ? `${8 * s}-bit ${r ? "signed" : "unsigned"} ` : ""
          }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
          { name: "IntegerOutOfRangeError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor(e) {
        super(
          `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
          { name: "InvalidBytesBooleanError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
          { name: "InvalidHexBooleanError" }
        );
      }
    }
    class n extends t.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is an odd length (${e.length}). It must be an even length.`,
          { name: "InvalidHexValueError" }
        );
      }
    }
    class o extends t.BaseError {
      constructor({ limit: e }) {
        super(`RLP depth limit of \`${e}\` exceeded.`, {
          name: "RlpDepthLimitExceededError",
        });
      }
    }
    class a extends t.BaseError {
      constructor({ consumed: e, declared: t }) {
        super(
          `RLP list items consumed \`${e}\` bytes but the list declared a length of \`${t}\`.`,
          { name: "RlpListBoundaryExceededError" }
        );
      }
    }
    class c extends t.BaseError {
      constructor({ count: e }) {
        super(
          `RLP payload encodes a single item, but \`${e}\` trailing ${
            1 === e ? "byte remains" : "bytes remain"
          }.`,
          { name: "RlpTrailingBytesError" }
        );
      }
    }
    class l extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
          name: "SizeOverflowError",
        });
      }
    }
    e.s([
      "IntegerOutOfRangeError",
      () => r,
      "InvalidBytesBooleanError",
      () => s,
      "InvalidHexBooleanError",
      () => i,
      "InvalidHexValueError",
      () => n,
      "RlpDepthLimitExceededError",
      () => o,
      "RlpListBoundaryExceededError",
      () => a,
      "RlpTrailingBytesError",
      () => c,
      "SizeOverflowError",
      () => l,
    ]);
  },
  320478,
  (e) => {
    "use strict";
    var t = e.i(413236);
    function r(e) {
      return (0, t.isHex)(e, { strict: !1 })
        ? Math.ceil((e.length - 2) / 2)
        : e.length;
    }
    e.s(["size", () => r]);
  },
  378379,
  340903,
  (e) => {
    "use strict";
    e.s(
      [
        "assertSize",
        () => i,
        "hexToBigInt",
        () => n,
        "hexToBool",
        () => o,
        "hexToNumber",
        () => a,
      ],
      378379
    );
    var t = e.i(589272),
      r = e.i(320478);
    function s(e, { dir: t = "left" } = {}) {
      let r = "string" == typeof e ? e.replace("0x", "") : e,
        i = 0;
      for (let e = 0; e < r.length - 1; e++)
        if ("0" === r["left" === t ? e : r.length - e - 1].toString()) i++;
        else break;
      return ((r = "left" === t ? r.slice(i) : r.slice(0, r.length - i)),
      "string" == typeof e)
        ? (1 === r.length && "right" === t && (r = `${r}0`),
          `0x${r.length % 2 == 1 ? `0${r}` : r}`)
        : r;
    }
    function i(e, { size: s }) {
      if ((0, r.size)(e) > s)
        throw new t.SizeOverflowError({
          givenSize: (0, r.size)(e),
          maxSize: s,
        });
    }
    function n(e, t = {}) {
      let { signed: r } = t;
      t.size && i(e, { size: t.size });
      let s = BigInt(e);
      if (!r) return s;
      let o = (e.length - 2) / 2;
      return s <= (1n << (8n * BigInt(o) - 1n)) - 1n
        ? s
        : s - BigInt(`0x${"f".padStart(2 * o, "f")}`) - 1n;
    }
    function o(e, r = {}) {
      let n = e;
      if ((r.size && (i(n, { size: r.size }), (n = s(n))), "0x00" === s(n)))
        return !1;
      if ("0x01" === s(n)) return !0;
      throw new t.InvalidHexBooleanError(n);
    }
    function a(e, r = {}) {
      let s = n(e, r),
        i = Number(s);
      if (!Number.isSafeInteger(i))
        throw new t.IntegerOutOfRangeError({
          max: `${Number.MAX_SAFE_INTEGER}`,
          min: `${Number.MIN_SAFE_INTEGER}`,
          signed: r.signed,
          size: r.size,
          value: `${s}n`,
        });
      return i;
    }
    e.s(["trim", () => s], 340903);
  },
  995701,
  968974,
  827677,
  (e) => {
    "use strict";
    e.s(
      ["hexToBytes", () => m, "stringToBytes", () => b, "toBytes", () => f],
      995701
    );
    var t = e.i(824219),
      r = e.i(413236),
      s = e.i(935888),
      i = e.i(378379);
    e.s(
      [
        "boolToHex",
        () => c,
        "bytesToHex",
        () => l,
        "numberToHex",
        () => u,
        "stringToHex",
        () => h,
        "toHex",
        () => a,
      ],
      968974
    );
    var n = e.i(589272);
    let o = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function a(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? u(e, t)
        : "string" == typeof e
        ? h(e, t)
        : "boolean" == typeof e
        ? c(e, t)
        : l(e, t);
    }
    function c(e, t = {}) {
      let r = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? ((0, i.assertSize)(r, { size: t.size }),
          (0, s.pad)(r, { size: t.size }))
        : r;
    }
    function l(e, t = {}) {
      let r = "";
      for (let t = 0; t < e.length; t++) r += o[e[t]];
      let n = `0x${r}`;
      return "number" == typeof t.size
        ? ((0, i.assertSize)(n, { size: t.size }),
          (0, s.pad)(n, { dir: "right", size: t.size }))
        : n;
    }
    function u(e, t = {}) {
      let r,
        { signed: i, size: o } = t,
        a = BigInt(e);
      o
        ? (r = i
            ? (1n << (8n * BigInt(o) - 1n)) - 1n
            : 2n ** (8n * BigInt(o)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let c = "bigint" == typeof r && i ? -r - 1n : 0;
      if ((r && a > r) || a < c) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new n.IntegerOutOfRangeError({
          max: r ? `${r}${t}` : void 0,
          min: `${c}${t}`,
          signed: i,
          size: o,
          value: `${e}${t}`,
        });
      }
      let l = `0x${(i && a < 0
        ? (1n << BigInt(8 * o)) + BigInt(a)
        : a
      ).toString(16)}`;
      return o ? (0, s.pad)(l, { size: o }) : l;
    }
    let d = new TextEncoder();
    function h(e, t = {}) {
      return l(d.encode(e), t);
    }
    let p = new TextEncoder();
    function f(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? m(u(e, t))
        : "boolean" == typeof e
        ? (function (e, t = {}) {
            let r = new Uint8Array(1);
            return ((r[0] = Number(e)), "number" == typeof t.size)
              ? ((0, i.assertSize)(r, { size: t.size }),
                (0, s.pad)(r, { size: t.size }))
              : r;
          })(e, t)
        : (0, r.isHex)(e)
        ? m(e, t)
        : b(e, t);
    }
    function g(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function m(e, r = {}) {
      let n = e;
      r.size &&
        ((0, i.assertSize)(n, { size: r.size }),
        (n = (0, s.pad)(n, { dir: "right", size: r.size })));
      let o = n.slice(2);
      o.length % 2 && (o = `0${o}`);
      let a = o.length / 2,
        c = new Uint8Array(a);
      for (let e = 0, r = 0; e < a; e++) {
        let s = g(o.charCodeAt(r++)),
          i = g(o.charCodeAt(r++));
        if (void 0 === s || void 0 === i)
          throw new t.BaseError(
            `Invalid byte sequence ("${o[r - 2]}${o[r - 1]}" in "${o}").`
          );
        c[e] = 16 * s + i;
      }
      return c;
    }
    function b(e, t = {}) {
      let r = p.encode(e);
      return "number" == typeof t.size
        ? ((0, i.assertSize)(r, { size: t.size }),
          (0, s.pad)(r, { dir: "right", size: t.size }))
        : r;
    }
    var x = e.i(96157);
    function v(e, t) {
      let s = (0, x.keccak_256)((0, r.isHex)(e, { strict: !1 }) ? f(e) : e);
      return "bytes" === (t || "hex") ? s : a(s);
    }
    e.s(["keccak256", () => v], 827677);
  },
  713062,
  (e) => {
    "use strict";
    class t extends Map {
      constructor(e) {
        super(),
          Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.maxSize = e);
      }
      get(e) {
        let t = super.get(e);
        return super.has(e) && (super.delete(e), super.set(e, t)), t;
      }
      set(e, t) {
        if (
          (super.has(e) && super.delete(e),
          super.set(e, t),
          this.maxSize && this.size > this.maxSize)
        ) {
          let e = super.keys().next().value;
          void 0 !== e && super.delete(e);
        }
        return this;
      }
    }
    e.s(["LruMap", () => t]);
  },
  307729,
  (e) => {
    "use strict";
    e.s(["isAddress", () => n]);
    var t = e.i(713062),
      r = e.i(93431);
    let s = /^0x[a-fA-F0-9]{40}$/,
      i = new t.LruMap(8192);
    function n(e, t) {
      let { strict: n = !0 } = t ?? {},
        o = `${e}.${n}`;
      if (i.has(o)) return i.get(o);
      let a =
        !!s.test(e) &&
        (e.toLowerCase() === e || !n || (0, r.checksumAddress)(e) === e);
      return i.set(o, a), a;
    }
  },
  93431,
  (e) => {
    "use strict";
    e.s(["checksumAddress", () => a, "getAddress", () => c]);
    var t = e.i(360235),
      r = e.i(995701),
      s = e.i(827677),
      i = e.i(713062),
      n = e.i(307729);
    let o = new i.LruMap(8192);
    function a(e, t) {
      if (o.has(`${e}.${t}`)) return o.get(`${e}.${t}`);
      let i = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        n = (0, s.keccak256)((0, r.stringToBytes)(i), "bytes"),
        a = (t ? i.substring(`${t}0x`.length) : i).split("");
      for (let e = 0; e < 40; e += 2)
        n[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
          (15 & n[e >> 1]) >= 8 &&
            a[e + 1] &&
            (a[e + 1] = a[e + 1].toUpperCase());
      let c = `0x${a.join("")}`;
      return o.set(`${e}.${t}`, c), c;
    }
    function c(e, r) {
      if (!(0, n.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      return a(e, r);
    }
  },
  878726,
  (e) => {
    "use strict";
    function t(e, t) {
      return ({ exclude: r, format: s }) => ({
        exclude: r,
        format: (e, i) => {
          let n = t(e, i);
          if (r) for (let e of r) delete n[e];
          return { ...n, ...s(e, i) };
        },
        type: e,
      });
    }
    e.s(["defineFormatter", () => t]);
  },
  648387,
  (e) => {
    "use strict";
    function t(e) {
      return "string" == typeof e[0]
        ? r(e)
        : (function (e) {
            let t = 0;
            for (let r of e) t += r.length;
            let r = new Uint8Array(t),
              s = 0;
            for (let t of e) r.set(t, s), (s += t.length);
            return r;
          })(e);
    }
    function r(e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    e.s(["concat", () => t, "concatHex", () => r]);
  },
  520229,
  589005,
  (e) => {
    "use strict";
    var t = e.i(824219);
    class r extends t.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`, {
          name: "NegativeOffsetError",
        });
      }
    }
    class s extends t.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
          name: "PositionOutOfBoundsError",
        });
      }
    }
    class i extends t.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
          { name: "RecursiveReadLimitExceededError" }
        );
      }
    }
    e.s(
      [
        "NegativeOffsetError",
        () => r,
        "PositionOutOfBoundsError",
        () => s,
        "RecursiveReadLimitExceededError",
        () => i,
      ],
      589005
    );
    let n = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new i({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new s({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new r({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new r({ offset: e });
        let t = this.position + e;
        this.assertPosition(t), (this.position = t);
      },
      inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectBytes(e, t) {
        let r = t ?? this.position;
        return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
      },
      inspectUint8(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectUint16(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t);
      },
      inspectUint24(e) {
        let t = e ?? this.position;
        return (
          this.assertPosition(t + 2),
          (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
        );
      },
      inspectUint32(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t);
      },
      pushByte(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
          this.bytes.set(e, this.position),
          (this.position += e.length);
      },
      pushUint8(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushUint16(e) {
        this.assertPosition(this.position + 1),
          this.dataView.setUint16(this.position, e),
          (this.position += 2);
      },
      pushUint24(e) {
        this.assertPosition(this.position + 2),
          this.dataView.setUint16(this.position, e >> 8),
          this.dataView.setUint8(this.position + 2, 255 & e),
          (this.position += 3);
      },
      pushUint32(e) {
        this.assertPosition(this.position + 3),
          this.dataView.setUint32(this.position, e),
          (this.position += 4);
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectByte();
        return this.position++, e;
      },
      readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        let r = this.inspectBytes(e);
        return (this.position += t ?? e), r;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint8();
        return (this.position += 1), e;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint16();
        return (this.position += 2), e;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint24();
        return (this.position += 3), e;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint32();
        return (this.position += 4), e;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(e) {
        let t = this.position;
        return (
          this.assertPosition(e), (this.position = e), () => (this.position = t)
        );
      },
      _touch() {
        if (this.recursiveReadLimit === 1 / 0) return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
          e > 0 && this.recursiveReadCount++;
      },
    };
    function o(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(n);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer ?? e, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    e.s(["createCursor", () => o], 520229);
  },
  519751,
  (e) => {
    "use strict";
    e.s([
      "etherUnits",
      0,
      { gwei: 9, wei: 18 },
      "gweiUnits",
      0,
      { ether: -9, wei: 9 },
    ]);
  },
  310535,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.toString(),
        s = r.startsWith("-");
      s && (r = r.slice(1));
      let [i, n] = [
        (r = r.padStart(t, "0")).slice(0, r.length - t),
        r.slice(r.length - t),
      ];
      return (
        (n = n.replace(/(0+)$/, "")),
        `${s ? "-" : ""}${i || "0"}${n ? `.${n}` : ""}`
      );
    }
    e.s(["formatUnits", () => t]);
  },
  503719,
  705666,
  871676,
  (e) => {
    "use strict";
    var t = e.i(519751),
      r = e.i(310535);
    function s(e, i = "wei") {
      return (0, r.formatUnits)(e, t.etherUnits[i]);
    }
    function i(e, s = "wei") {
      return (0, r.formatUnits)(e, t.gweiUnits[s]);
    }
    e.s(["formatEther", () => s], 705666), e.s(["formatGwei", () => i], 871676);
    var n = e.i(824219);
    function o(e) {
      let t = Object.entries(e)
          .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
          .filter(Boolean),
        r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
      return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
    }
    n.BaseError;
    class a extends n.BaseError {
      constructor({ v: e }) {
        super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
          name: "InvalidLegacyVError",
        });
      }
    }
    class c extends n.BaseError {
      constructor({ yParity: e }) {
        super(`Invalid \`yParity\` value "${e}". Expected 0 or 1.`, {
          name: "InvalidYParityError",
        });
      }
    }
    class l extends n.BaseError {
      constructor({ transaction: e }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            o(e),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- an EIP-7702 Transaction with `authorizationList`, or",
            "- a Legacy Transaction with `gasPrice`",
          ],
          name: "InvalidSerializableTransactionError",
        });
      }
    }
    class u extends n.BaseError {
      constructor({ serializedType: e }) {
        super(`Serialized transaction type "${e}" is invalid.`, {
          name: "InvalidSerializedTransactionType",
        }),
          Object.defineProperty(this, "serializedType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.serializedType = e);
      }
    }
    class d extends n.BaseError {
      constructor({ attributes: e, serializedTransaction: t, type: r }) {
        const s = Object.entries(e)
          .map(([e, t]) => (void 0 === t ? e : void 0))
          .filter(Boolean);
        super(`Invalid serialized transaction of type "${r}" was provided.`, {
          metaMessages: [
            `Serialized Transaction: "${t}"`,
            s.length > 0 ? `Missing Attributes: ${s.join(", ")}` : "",
          ].filter(Boolean),
          name: "InvalidSerializedTransactionError",
        }),
          Object.defineProperty(this, "serializedTransaction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.serializedTransaction = t),
          (this.type = r);
      }
    }
    class h extends n.BaseError {
      constructor({ storageKey: e }) {
        super(
          `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
            (e.length - 2) / 2
          )} bytes.`,
          { name: "InvalidStorageKeySizeError" }
        );
      }
    }
    class p extends n.BaseError {
      constructor(
        e,
        {
          account: t,
          docsPath: r,
          chain: n,
          data: a,
          gas: c,
          gasPrice: l,
          maxFeePerGas: u,
          maxPriorityFeePerGas: d,
          nonce: h,
          to: p,
          value: f,
        }
      ) {
        const g = o({
          chain: n && `${n?.name} (id: ${n?.id})`,
          from: t?.address,
          to: p,
          value:
            void 0 !== f && `${s(f)} ${n?.nativeCurrency?.symbol || "ETH"}`,
          data: a,
          gas: c,
          gasPrice: void 0 !== l && `${i(l)} gwei`,
          maxFeePerGas: void 0 !== u && `${i(u)} gwei`,
          maxPriorityFeePerGas: void 0 !== d && `${i(d)} gwei`,
          nonce: h,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: r,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Request Arguments:",
            g,
          ].filter(Boolean),
          name: "TransactionExecutionError",
        }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.cause = e);
      }
    }
    class f extends n.BaseError {
      constructor({
        blockHash: e,
        blockNumber: t,
        blockTag: r,
        hash: s,
        index: i,
      }) {
        let n = "Transaction";
        r &&
          void 0 !== i &&
          (n = `Transaction at block time "${r}" at index "${i}"`),
          e &&
            void 0 !== i &&
            (n = `Transaction at block hash "${e}" at index "${i}"`),
          t &&
            void 0 !== i &&
            (n = `Transaction at block number "${t}" at index "${i}"`),
          s && (n = `Transaction with hash "${s}"`),
          super(`${n} could not be found.`, {
            name: "TransactionNotFoundError",
          });
      }
    }
    class g extends n.BaseError {
      constructor({ hash: e }) {
        super(
          `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
          { name: "TransactionReceiptNotFoundError" }
        );
      }
    }
    class m extends n.BaseError {
      constructor({ receipt: e }) {
        super(`Transaction with hash "${e.transactionHash}" reverted.`, {
          metaMessages: [
            'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
            " ",
            "You can attempt to extract the revert reason by:",
            "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
            "- using the `call` Action with raw `data`",
          ],
          name: "TransactionReceiptRevertedError",
        }),
          Object.defineProperty(this, "receipt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.receipt = e);
      }
    }
    class b extends n.BaseError {
      constructor({ hash: e }) {
        super(
          `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
          { name: "WaitForTransactionReceiptTimeoutError" }
        );
      }
    }
    e.s(
      [
        "InvalidLegacyVError",
        () => a,
        "InvalidSerializableTransactionError",
        () => l,
        "InvalidSerializedTransactionError",
        () => d,
        "InvalidSerializedTransactionTypeError",
        () => u,
        "InvalidStorageKeySizeError",
        () => h,
        "InvalidYParityError",
        () => c,
        "TransactionExecutionError",
        () => p,
        "TransactionNotFoundError",
        () => f,
        "TransactionReceiptNotFoundError",
        () => g,
        "TransactionReceiptRevertedError",
        () => m,
        "WaitForTransactionReceiptTimeoutError",
        () => b,
        "prettyPrint",
        () => o,
      ],
      503719
    );
  },
  832088,
  (e) => {
    "use strict";
    e.s(["maxUint256", 0, 2n ** 256n - 1n]);
  },
  224588,
  (e) => {
    "use strict";
    var t = e.i(824219);
    class r extends t.BaseError {
      constructor({ blockNumber: e, chain: t, contract: r }) {
        super(`Chain "${t.name}" does not support contract "${r.name}".`, {
          metaMessages: [
            "This could be due to any of the following:",
            ...(e && r.blockCreated && r.blockCreated > e
              ? [
                  `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                ]
              : [
                  `- The chain does not have the contract "${r.name}" configured.`,
                ]),
          ],
          name: "ChainDoesNotSupportContract",
        });
      }
    }
    class s extends t.BaseError {
      constructor({ chain: e, currentChainId: t }) {
        super(
          `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
          {
            metaMessages: [
              `Current Chain ID:  ${t}`,
              `Expected Chain ID: ${e.id} – ${e.name}`,
            ],
            name: "ChainMismatchError",
          }
        );
      }
    }
    class i extends t.BaseError {
      constructor() {
        super(
          "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
          { name: "ChainNotFoundError" }
        );
      }
    }
    class n extends t.BaseError {
      constructor() {
        super("No chain was provided to the Client.", {
          name: "ClientChainNotConfiguredError",
        });
      }
    }
    class o extends t.BaseError {
      constructor({ chainId: e }) {
        super(
          "number" == typeof e
            ? `Chain ID "${e}" is invalid.`
            : "Chain ID is invalid.",
          { name: "InvalidChainIdError" }
        );
      }
    }
    e.s([
      "ChainDoesNotSupportContract",
      () => r,
      "ChainMismatchError",
      () => s,
      "ChainNotFoundError",
      () => i,
      "ClientChainNotConfiguredError",
      () => n,
      "InvalidChainIdError",
      () => o,
    ]);
  },
  74023,
  (e) => {
    "use strict";
    var t = e.i(871676),
      r = e.i(824219);
    class s extends r.BaseError {
      constructor({ cause: e, message: t } = {}) {
        const r = t
          ?.replace("execution reverted: ", "")
          ?.replace("execution reverted", "");
        super(
          `Execution reverted ${
            r ? `with reason: ${r}` : "for an unknown reason"
          }.`,
          { cause: e, name: "ExecutionRevertedError" }
        );
      }
    }
    Object.defineProperty(s, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3,
    }),
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /execution reverted|gas required exceeds allowance/,
      });
    class i extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the maximum allowed value (2^256-1).`,
          { cause: e, name: "FeeCapTooHighError" }
        );
      }
    }
    Object.defineProperty(i, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
    });
    class n extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)}` : ""
          } gwei) cannot be lower than the block base fee.`,
          { cause: e, name: "FeeCapTooLowError" }
        );
      }
    }
    Object.defineProperty(n, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
    });
    class o extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is higher than the next one expected.`,
          { cause: e, name: "NonceTooHighError" }
        );
      }
    }
    Object.defineProperty(o, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too high/,
    });
    class a extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
          { cause: e, name: "NonceTooLowError" }
        );
      }
    }
    Object.defineProperty(a, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too low|transaction already imported|already known/,
    });
    class c extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }exceeds the maximum allowed nonce.`,
          { cause: e, name: "NonceMaxValueError" }
        );
      }
    }
    Object.defineProperty(c, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce has max value/,
    });
    class l extends r.BaseError {
      constructor({ cause: e } = {}) {
        super(
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
          {
            cause: e,
            metaMessages: [
              "This error could arise when the account does not have enough funds to:",
              " - pay for the total gas fee,",
              " - pay for the value to send.",
              " ",
              "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
              " - `gas` is the amount of gas needed for transaction to execute,",
              " - `gas fee` is the gas fee,",
              " - `value` is the amount of ether to send to the recipient.",
            ],
            name: "InsufficientFundsError",
          }
        );
      }
    }
    Object.defineProperty(l, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /insufficient funds|exceeds transaction sender account balance/,
    });
    class u extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction exceeds the limit allowed for the block.`,
          { cause: e, name: "IntrinsicGasTooHighError" }
        );
      }
    }
    Object.defineProperty(u, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too high|gas limit reached/,
    });
    class d extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction is too low.`,
          { cause: e, name: "IntrinsicGasTooLowError" }
        );
      }
    }
    Object.defineProperty(d, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too low/,
    });
    class h extends r.BaseError {
      constructor({ cause: e }) {
        super("The transaction type is not supported for this chain.", {
          cause: e,
          name: "TransactionTypeNotSupportedError",
        });
      }
    }
    Object.defineProperty(h, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /transaction type not valid/,
    });
    class p extends r.BaseError {
      constructor({ cause: e, maxPriorityFeePerGas: r, maxFeePerGas: s } = {}) {
        super(
          `The provided tip (\`maxPriorityFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the fee cap (\`maxFeePerGas\`${
            s ? ` = ${(0, t.formatGwei)(s)} gwei` : ""
          }).`,
          { cause: e, name: "TipAboveFeeCapError" }
        );
      }
    }
    Object.defineProperty(p, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
    });
    class f extends r.BaseError {
      constructor({ cause: e }) {
        super(`An error occurred while executing: ${e?.shortMessage}`, {
          cause: e,
          name: "UnknownNodeError",
        });
      }
    }
    e.s([
      "ExecutionRevertedError",
      () => s,
      "FeeCapTooHighError",
      () => i,
      "FeeCapTooLowError",
      () => n,
      "InsufficientFundsError",
      () => l,
      "IntrinsicGasTooHighError",
      () => u,
      "IntrinsicGasTooLowError",
      () => d,
      "NonceMaxValueError",
      () => c,
      "NonceTooHighError",
      () => o,
      "NonceTooLowError",
      () => a,
      "TipAboveFeeCapError",
      () => p,
      "TransactionTypeNotSupportedError",
      () => h,
      "UnknownNodeError",
      () => f,
    ]);
  },
  764911,
  (e) => {
    "use strict";
    var t = e.i(866311),
      r = e.i(413236),
      s = e.i(320478);
    function i(e, t, s, { strict: n } = {}) {
      return (0, r.isHex)(e, { strict: !1 })
        ? c(e, t, s, { strict: n })
        : a(e, t, s, { strict: n });
    }
    function n(e, r) {
      if ("number" == typeof r && r > 0 && r > (0, s.size)(e) - 1)
        throw new t.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "start",
          size: (0, s.size)(e),
        });
    }
    function o(e, r, i) {
      if (
        "number" == typeof r &&
        "number" == typeof i &&
        (0, s.size)(e) !== i - r
      )
        throw new t.SliceOffsetOutOfBoundsError({
          offset: i,
          position: "end",
          size: (0, s.size)(e),
        });
    }
    function a(e, t, r, { strict: s } = {}) {
      n(e, t);
      let i = e.slice(t, r);
      return s && o(i, t, r), i;
    }
    function c(e, t, r, { strict: s } = {}) {
      n(e, t);
      let i = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return s && o(i, t, r), i;
    }
    e.s(["slice", () => i, "sliceBytes", () => a, "sliceHex", () => c]);
  },
  110902,
  470732,
  206400,
  (e) => {
    "use strict";
    var t = e.i(378379),
      r = e.i(769156),
      s = e.i(789705),
      i = e.i(180416);
    let n = {
      block: (0, r.defineBlock)({
        format: (e) => ({
          transactions: e.transactions?.map((e) => {
            if ("string" == typeof e) return e;
            let r = (0, s.formatTransaction)(e);
            return (
              "0x7e" === r.typeHex &&
                ((r.isSystemTx = e.isSystemTx),
                (r.mint = e.mint ? (0, t.hexToBigInt)(e.mint) : void 0),
                (r.sourceHash = e.sourceHash),
                (r.type = "deposit")),
              r
            );
          }),
          stateRoot: e.stateRoot,
        }),
      }),
      transaction: (0, s.defineTransaction)({
        format(e) {
          let r = {};
          return (
            "0x7e" === e.type &&
              ((r.isSystemTx = e.isSystemTx),
              (r.mint = e.mint ? (0, t.hexToBigInt)(e.mint) : void 0),
              (r.sourceHash = e.sourceHash),
              (r.type = "deposit")),
            r
          );
        },
      }),
      transactionReceipt: (0, i.defineTransactionReceipt)({
        format: (e) => ({
          ...(e.depositNonce
            ? { depositNonce: (0, t.hexToBigInt)(e.depositNonce) }
            : {}),
          ...(e.depositReceiptVersion
            ? {
                depositReceiptVersion: (0, t.hexToNumber)(
                  e.depositReceiptVersion
                ),
              }
            : {}),
          l1GasPrice: e.l1GasPrice ? (0, t.hexToBigInt)(e.l1GasPrice) : null,
          l1GasUsed: e.l1GasUsed ? (0, t.hexToBigInt)(e.l1GasUsed) : null,
          l1Fee: e.l1Fee ? (0, t.hexToBigInt)(e.l1Fee) : null,
          l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
        }),
      }),
    };
    var o = e.i(360235),
      a = e.i(307729),
      c = e.i(648387),
      l = e.i(968974),
      u = e.i(568864),
      d = e.i(261200);
    let h = {
      blockTime: 2e3,
      contracts: {
        gasPriceOracle: {
          address: "0x420000000000000000000000000000000000000F",
        },
        l1Block: { address: "0x4200000000000000000000000000000000000015" },
        l2CrossDomainMessenger: {
          address: "0x4200000000000000000000000000000000000007",
        },
        l2Erc721Bridge: {
          address: "0x4200000000000000000000000000000000000014",
        },
        l2StandardBridge: {
          address: "0x4200000000000000000000000000000000000010",
        },
        l2ToL1MessagePasser: {
          address: "0x4200000000000000000000000000000000000016",
        },
      },
      formatters: n,
      serializers: {
        transaction: function (e, t) {
          var r;
          return "deposit" === (r = e).type || void 0 !== r.sourceHash
            ? (function (e) {
                !(function (e) {
                  let { from: t, to: r } = e;
                  if (t && !(0, a.isAddress)(t))
                    throw new o.InvalidAddressError({ address: t });
                  if (r && !(0, a.isAddress)(r))
                    throw new o.InvalidAddressError({ address: r });
                })(e);
                let {
                    sourceHash: t,
                    data: r,
                    from: s,
                    gas: i,
                    isSystemTx: n,
                    mint: d,
                    to: h,
                    value: p,
                  } = e,
                  f = [
                    t,
                    s,
                    h ?? "0x",
                    d ? (0, l.toHex)(d) : "0x",
                    p ? (0, l.toHex)(p) : "0x",
                    i ? (0, l.toHex)(i) : "0x",
                    n ? "0x1" : "0x",
                    r ?? "0x",
                  ];
                return (0, c.concatHex)(["0x7e", (0, u.toRlp)(f)]);
              })(e)
            : (0, d.serializeTransaction)(e, t);
        },
      },
    };
    function p(e) {
      let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      return Object.assign(t, {
        extend: (function e(t) {
          return (r) => {
            let s = "function" == typeof r ? r(t) : r,
              i = { ...t, ...s };
            return Object.assign(i, { extend: e(i) });
          };
        })(t),
      });
    }
    e.s(["defineChain", () => p], 470732);
    let f = p({
      ...h,
      id: 8453,
      name: "Base",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
      blockExplorers: {
        default: {
          name: "Basescan",
          url: "https://basescan.org",
          apiUrl: "https://api.basescan.org/api",
        },
      },
      contracts: {
        ...h.contracts,
        disputeGameFactory: {
          1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
        },
        l2OutputOracle: {
          1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
        },
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 5022,
        },
        portal: {
          1: {
            address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
            blockCreated: 0x10ac19f,
          },
        },
        l1StandardBridge: {
          1: {
            address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
            blockCreated: 0x10ac19f,
          },
        },
      },
      sourceId: 1,
    });
    e.s(["base", 0, f], 110902);
    let g = p({
      id: 196,
      name: "X Layer Mainnet",
      nativeCurrency: { decimals: 18, name: "OKB", symbol: "OKB" },
      rpcUrls: { default: { http: ["https://xlayerrpc.okx.com"] } },
      blockExplorers: {
        default: {
          name: "OKLink",
          url: "https://www.oklink.com/xlayer",
          apiUrl: "https://www.oklink.com/api/v5/explorer/xlayer/api",
        },
      },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 47416,
        },
      },
    });
    e.s(["xLayer", 0, g], 206400);
  },
]);
