(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  891380,
  62865,
  (e) => {
    "use strict";
    function t(e, { includeName: n = !1 } = {}) {
      if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
        throw new I(e.type);
      return `${e.name}(${r(e.inputs, { includeName: n })})`;
    }
    function r(e, { includeName: t = !1 } = {}) {
      return e
        ? e
            .map((e) =>
              (function (e, { includeName: t }) {
                return e.type.startsWith("tuple")
                  ? `(${r(e.components, { includeName: t })})${e.type.slice(5)}`
                  : e.type + (t && e.name ? ` ${e.name}` : "");
              })(e, { includeName: t })
            )
            .join(t ? ", " : ",")
        : "";
    }
    e.s(
      [
        "AbiConstructorNotFoundError",
        () => i,
        "AbiConstructorParamsNotFoundError",
        () => o,
        "AbiDecodingDataSizeTooSmallError",
        () => s,
        "AbiDecodingZeroDataError",
        () => c,
        "AbiEncodingArrayLengthMismatchError",
        () => f,
        "AbiEncodingBytesSizeMismatchError",
        () => u,
        "AbiEncodingLengthMismatchError",
        () => b,
        "AbiErrorInputsNotFoundError",
        () => d,
        "AbiErrorNotFoundError",
        () => l,
        "AbiErrorSignatureNotFoundError",
        () => p,
        "AbiEventNotFoundError",
        () => h,
        "AbiEventSignatureEmptyTopicsError",
        () => m,
        "AbiEventSignatureNotFoundError",
        () => y,
        "AbiFunctionNotFoundError",
        () => g,
        "AbiFunctionOutputsNotFoundError",
        () => v,
        "AbiFunctionSignatureNotFoundError",
        () => w,
        "AbiItemAmbiguityError",
        () => E,
        "BytesSizeMismatchError",
        () => x,
        "DecodeLogDataMismatch",
        () => A,
        "DecodeLogTopicsMismatch",
        () => B,
        "InvalidAbiDecodingTypeError",
        () => P,
        "InvalidAbiEncodingTypeError",
        () => $,
        "InvalidArrayError",
        () => F,
        "InvalidDefinitionTypeError",
        () => I,
      ],
      891380
    ),
      e.s(["formatAbiItem", () => t, "formatAbiParams", () => r], 62865);
    var n = e.i(320478),
      a = e.i(824219);
    class i extends a.BaseError {
      constructor({ docsPath: e }) {
        super(
          "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
          { docsPath: e, name: "AbiConstructorNotFoundError" }
        );
      }
    }
    class o extends a.BaseError {
      constructor({ docsPath: e }) {
        super(
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
          { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
        );
      }
    }
    a.BaseError;
    class s extends a.BaseError {
      constructor({ data: e, params: t, size: n }) {
        super(`Data size of ${n} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${r(t, { includeName: !0 })})`,
            `Data:   ${e} (${n} bytes)`,
          ],
          name: "AbiDecodingDataSizeTooSmallError",
        }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e),
          (this.params = t),
          (this.size = n);
      }
    }
    class c extends a.BaseError {
      constructor({ cause: e } = {}) {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
          name: "AbiDecodingZeroDataError",
          cause: e,
        });
      }
    }
    class f extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
          { name: "AbiEncodingArrayLengthMismatchError" }
        );
      }
    }
    class u extends a.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${(0, n.size)(
            t
          )}) does not match expected size (bytes${e}).`,
          { name: "AbiEncodingBytesSizeMismatchError" }
        );
      }
    }
    class b extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(
          `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
          { name: "AbiEncodingLengthMismatchError" }
        );
      }
    }
    class d extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
          { docsPath: t, name: "AbiErrorInputsNotFoundError" }
        );
      }
    }
    class l extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
          { docsPath: t, name: "AbiErrorNotFoundError" }
        );
      }
    }
    class p extends a.BaseError {
      constructor(e, { docsPath: t, cause: r }) {
        super(
          `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiErrorSignatureNotFoundError", cause: r }
        ),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.signature = e);
      }
    }
    class m extends a.BaseError {
      constructor({ docsPath: e }) {
        super("Cannot extract event signature from empty topics.", {
          docsPath: e,
          name: "AbiEventSignatureEmptyTopicsError",
        });
      }
    }
    class y extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiEventSignatureNotFoundError" }
        );
      }
    }
    class h extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
          { docsPath: t, name: "AbiEventNotFoundError" }
        );
      }
    }
    class g extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionNotFoundError" }
        );
      }
    }
    class v extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
        );
      }
    }
    class w extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
        );
      }
    }
    class E extends a.BaseError {
      constructor(e, r) {
        super("Found ambiguous types in overloaded ABI items.", {
          metaMessages: [
            `\`${e.type}\` in \`${t(e.abiItem)}\`, and`,
            `\`${r.type}\` in \`${t(r.abiItem)}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
          name: "AbiItemAmbiguityError",
        });
      }
    }
    class x extends a.BaseError {
      constructor({ expectedSize: e, givenSize: t }) {
        super(`Expected bytes${e}, got bytes${t}.`, {
          name: "BytesSizeMismatchError",
        });
      }
    }
    class A extends a.BaseError {
      constructor({ abiItem: e, data: t, params: n, size: a }) {
        super(
          `Data size of ${a} bytes is too small for non-indexed event parameters.`,
          {
            metaMessages: [
              `Params: (${r(n, { includeName: !0 })})`,
              `Data:   ${t} (${a} bytes)`,
            ],
            name: "DecodeLogDataMismatch",
          }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e),
          (this.data = t),
          (this.params = n),
          (this.size = a);
      }
    }
    class B extends a.BaseError {
      constructor({ abiItem: e, param: r }) {
        super(
          `Expected a topic for indexed event parameter${
            r.name ? ` "${r.name}"` : ""
          } on event "${t(e, { includeName: !0 })}".`,
          { name: "DecodeLogTopicsMismatch" }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e);
      }
    }
    class $ extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiEncodingType" }
        );
      }
    }
    class P extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiDecodingType" }
        );
      }
    }
    class F extends a.BaseError {
      constructor(e) {
        super(`Value "${e}" is not a valid array.`, {
          name: "InvalidArrayError",
        });
      }
    }
    class I extends a.BaseError {
      constructor(e) {
        super(
          `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
          { name: "InvalidDefinitionTypeError" }
        );
      }
    }
    a.BaseError;
  },
  376145,
  371784,
  (e) => {
    "use strict";
    var t = e.i(891380),
      r = e.i(360235),
      n = e.i(824219),
      a = e.i(589272),
      i = e.i(307729),
      o = e.i(648387),
      s = e.i(935888),
      c = e.i(320478),
      f = e.i(764911),
      u = e.i(968974);
    let b =
      /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    function d(e, d) {
      if (e.length !== d.length)
        throw new t.AbiEncodingLengthMismatchError({
          expectedLength: e.length,
          givenLength: d.length,
        });
      return l(
        (function ({ params: e, values: d }) {
          let m = [];
          for (let y = 0; y < e.length; y++)
            m.push(
              (function e({ param: d, value: m }) {
                let y = p(d.type);
                if (y) {
                  let [r, n] = y;
                  return (function (r, { length: n, param: a }) {
                    let i = null === n;
                    if (!Array.isArray(r)) throw new t.InvalidArrayError(r);
                    if (!i && r.length !== n)
                      throw new t.AbiEncodingArrayLengthMismatchError({
                        expectedLength: n,
                        givenLength: r.length,
                        type: `${a.type}[${n}]`,
                      });
                    let s =
                        0 === r.length &&
                        (function e(t) {
                          let { type: r } = t;
                          if (
                            "string" === r ||
                            "bytes" === r ||
                            r.endsWith("[]")
                          )
                            return !0;
                          if ("tuple" === r) return t.components.some(e);
                          let n = p(r);
                          return !!n && e({ ...t, type: n[1] });
                        })(a),
                      c = [];
                    for (let t = 0; t < r.length; t++) {
                      let n = e({ param: a, value: r[t] });
                      n.dynamic && (s = !0), c.push(n);
                    }
                    if (i || s) {
                      let e = l(c);
                      if (i) {
                        let t = (0, u.numberToHex)(c.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: (0, o.concatHex)([t, e]),
                        };
                      }
                      if (s) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, o.concatHex)(c.map(({ encoded: e }) => e)),
                    };
                  })(m, { length: r, param: { ...d, type: n } });
                }
                if ("tuple" === d.type)
                  return (function (t, { param: r }) {
                    let n = !1,
                      a = [];
                    for (let i = 0; i < r.components.length; i++) {
                      let o = r.components[i],
                        s = Array.isArray(t) ? i : o.name,
                        c = e({ param: o, value: t[s] });
                      a.push(c), c.dynamic && (n = !0);
                    }
                    return {
                      dynamic: n,
                      encoded: n
                        ? l(a)
                        : (0, o.concatHex)(a.map(({ encoded: e }) => e)),
                    };
                  })(m, { param: d });
                if ("address" === d.type) {
                  var h = m;
                  if (!(0, i.isAddress)(h))
                    throw new r.InvalidAddressError({ address: h });
                  return {
                    dynamic: !1,
                    encoded: (0, s.padHex)(h.toLowerCase()),
                  };
                }
                if ("bool" === d.type) {
                  var g = m;
                  if ("boolean" != typeof g)
                    throw new n.BaseError(
                      `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: (0, s.padHex)((0, u.boolToHex)(g)),
                  };
                }
                if (d.type.startsWith("uint") || d.type.startsWith("int")) {
                  let e = d.type.startsWith("int"),
                    [, , t = "256"] = b.exec(d.type) ?? [];
                  return (function (e, { signed: t, size: r = 256 }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        i = t ? -n - 1n : 0n;
                      if (e > n || e < i)
                        throw new a.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: i.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, u.numberToHex)(e, { size: 32, signed: t }),
                    };
                  })(m, { signed: e, size: Number(t) });
                }
                if (d.type.startsWith("bytes"))
                  return (function (e, { param: r }) {
                    let [, n] = r.type.split("bytes"),
                      a = (0, c.size)(e);
                    if (!n) {
                      let t = e;
                      return (
                        a % 32 != 0 &&
                          (t = (0, s.padHex)(t, {
                            dir: "right",
                            size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                          })),
                        {
                          dynamic: !0,
                          encoded: (0, o.concatHex)([
                            (0, s.padHex)((0, u.numberToHex)(a, { size: 32 })),
                            t,
                          ]),
                        }
                      );
                    }
                    if (a !== Number.parseInt(n, 10))
                      throw new t.AbiEncodingBytesSizeMismatchError({
                        expectedSize: Number.parseInt(n, 10),
                        value: e,
                      });
                    return {
                      dynamic: !1,
                      encoded: (0, s.padHex)(e, { dir: "right" }),
                    };
                  })(m, { param: d });
                if ("string" === d.type) {
                  var v = m;
                  let e = (0, u.stringToHex)(v),
                    t = Math.ceil((0, c.size)(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(
                      (0, s.padHex)((0, f.slice)(e, 32 * n, (n + 1) * 32), {
                        dir: "right",
                      })
                    );
                  return {
                    dynamic: !0,
                    encoded: (0, o.concatHex)([
                      (0, s.padHex)(
                        (0, u.numberToHex)((0, c.size)(e), { size: 32 })
                      ),
                      ...r,
                    ]),
                  };
                }
                throw new t.InvalidAbiEncodingTypeError(d.type, {
                  docsPath: "/docs/contract/encodeAbiParameters",
                });
              })({ param: e[y], value: d[y] })
            );
          return m;
        })({ params: e, values: d })
      );
    }
    e.s(
      [
        "bytesRegex",
        0,
        /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        "integerRegex",
        0,
        b,
      ],
      371784
    );
    function l(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: a } = e[r];
        n ? (t += 32) : (t += (0, c.size)(a));
      }
      let r = [],
        n = [],
        a = 0;
      for (let i = 0; i < e.length; i++) {
        let { dynamic: o, encoded: s } = e[i];
        o
          ? (r.push((0, u.numberToHex)(t + a, { size: 32 })),
            n.push(s),
            (a += (0, c.size)(s)))
          : r.push(s);
      }
      return (0, o.concatHex)([...r, ...n]);
    }
    function p(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    e.s(
      ["encodeAbiParameters", () => d, "getArrayComponents", () => p],
      376145
    );
  },
  746501,
  (e) => {
    "use strict";
    var t = e.i(360235),
      r = e.i(307729);
    function n(e, n) {
      if (!(0, r.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      if (!(0, r.isAddress)(n, { strict: !1 }))
        throw new t.InvalidAddressError({ address: n });
      return e.toLowerCase() === n.toLowerCase();
    }
    e.s(["isAddressEqual", () => n]);
  },
  489918,
  (e) => {
    "use strict";
    var t = e.i(589272),
      r = e.i(340903),
      n = e.i(378379),
      a = e.i(968974);
    function i(e, t = {}) {
      void 0 !== t.size && (0, n.assertSize)(e, { size: t.size });
      let r = (0, a.bytesToHex)(e, t);
      return (0, n.hexToBigInt)(r, t);
    }
    function o(e, a = {}) {
      let i = e;
      if (
        (void 0 !== a.size &&
          ((0, n.assertSize)(i, { size: a.size }), (i = (0, r.trim)(i))),
        i.length > 1 || i[0] > 1)
      )
        throw new t.InvalidBytesBooleanError(i);
      return !!i[0];
    }
    function s(e, t = {}) {
      void 0 !== t.size && (0, n.assertSize)(e, { size: t.size });
      let r = (0, a.bytesToHex)(e, t);
      return (0, n.hexToNumber)(r, t);
    }
    function c(e, t = {}) {
      let a = e;
      return (
        void 0 !== t.size &&
          ((0, n.assertSize)(a, { size: t.size }),
          (a = (0, r.trim)(a, { dir: "right" }))),
        new TextDecoder().decode(a)
      );
    }
    e.s([
      "bytesToBigInt",
      () => i,
      "bytesToBool",
      () => o,
      "bytesToNumber",
      () => s,
      "bytesToString",
      () => c,
    ]);
  },
  794713,
  (e) => {
    "use strict";
    var t = e.i(891380),
      r = e.i(93431),
      n = e.i(520229),
      a = e.i(320478),
      i = e.i(764911),
      o = e.i(340903),
      s = e.i(489918),
      c = e.i(995701),
      f = e.i(968974),
      u = e.i(376145);
    function b(e, b) {
      let l = "string" == typeof b ? (0, c.hexToBytes)(b) : b,
        p = (0, n.createCursor)(l);
      if (0 === (0, a.size)(l) && e.length > 0)
        throw new t.AbiDecodingZeroDataError();
      if ((0, a.size)(b) && 32 > (0, a.size)(b))
        throw new t.AbiDecodingDataSizeTooSmallError({
          data: "string" == typeof b ? b : (0, f.bytesToHex)(b),
          params: e,
          size: (0, a.size)(b),
        });
      let m = 0,
        y = [];
      for (let n = 0; n < e.length; ++n) {
        let a = e[n];
        m < l.length && p.setPosition(m);
        let [c, b] = (function e(n, a, { staticPosition: c }) {
          var b, l, p;
          let m = (0, u.getArrayComponents)(a.type);
          if (m) {
            let [t, r] = m;
            return (function (t, r, { length: n, staticPosition: a }) {
              if (null === n) {
                let n = a + (0, s.bytesToNumber)(t.readBytes(32)),
                  i = n + 32;
                t.setPosition(n);
                let o = (0, s.bytesToNumber)(t.readBytes(32)),
                  c = d(r),
                  f = 0,
                  u = [];
                for (let n = 0; n < o; ++n) {
                  t.setPosition(i + (c ? 32 * n : f));
                  let [a, o] = e(t, r, { staticPosition: i });
                  (f += o),
                    u.push(a),
                    0 === o && (t.assertReadLimit(), t._touch());
                }
                return t.setPosition(a + 32), [u, 32];
              }
              if (d(r)) {
                let i = a + (0, s.bytesToNumber)(t.readBytes(32)),
                  o = [];
                for (let a = 0; a < n; ++a) {
                  t.setPosition(i + 32 * a);
                  let [n] = e(t, r, { staticPosition: i });
                  o.push(n);
                }
                return t.setPosition(a + 32), [o, 32];
              }
              let i = 0,
                o = [];
              for (let s = 0; s < n; ++s) {
                let [n, s] = e(t, r, { staticPosition: a + i });
                (i += s),
                  o.push(n),
                  0 === s && (t.assertReadLimit(), t._touch());
              }
              return [o, i];
            })(n, { ...a, type: r }, { length: t, staticPosition: c });
          }
          if ("tuple" === a.type)
            return (function (t, r, { staticPosition: n }) {
              let a =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                i = a ? [] : {},
                o = 0;
              if (d(r)) {
                let c = n + (0, s.bytesToNumber)(t.readBytes(32));
                for (let n = 0; n < r.components.length; ++n) {
                  let s = r.components[n];
                  t.setPosition(c + o);
                  let [f, u] = e(t, s, { staticPosition: c });
                  (o += u), (i[a ? n : s?.name] = f);
                }
                return t.setPosition(n + 32), [i, 32];
              }
              for (let s = 0; s < r.components.length; ++s) {
                let c = r.components[s],
                  [f, u] = e(t, c, { staticPosition: n });
                (i[a ? s : c?.name] = f), (o += u);
              }
              return [i, o];
            })(n, a, { staticPosition: c });
          if ("address" === a.type) {
            let e;
            return (
              (e = n.readBytes(32)),
              [
                (0, r.checksumAddress)(
                  (0, f.bytesToHex)((0, i.sliceBytes)(e, -20))
                ),
                32,
              ]
            );
          }
          if ("bool" === a.type) {
            return (
              (b = n), [(0, s.bytesToBool)(b.readBytes(32), { size: 32 }), 32]
            );
          }
          if (a.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [n, a] = t.type.split("bytes");
              if (!a) {
                let t = (0, s.bytesToNumber)(e.readBytes(32));
                e.setPosition(r + t);
                let n = (0, s.bytesToNumber)(e.readBytes(32));
                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(n);
                return e.setPosition(r + 32), [(0, f.bytesToHex)(a), 32];
              }
              return [
                (0, f.bytesToHex)(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(n, a, { staticPosition: c });
          if (a.type.startsWith("uint") || a.type.startsWith("int")) {
            let e, t, r;
            return (
              (l = n),
              (e = (p = a).type.startsWith("int")),
              (t = Number.parseInt(p.type.split("int")[1] || "256", 10)),
              (r = l.readBytes(32)),
              [
                t > 48
                  ? (0, s.bytesToBigInt)(r, { signed: e })
                  : (0, s.bytesToNumber)(r, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === a.type)
            return (function (e, { staticPosition: t }) {
              let r = (0, s.bytesToNumber)(e.readBytes(32));
              e.setPosition(t + r);
              let n = (0, s.bytesToNumber)(e.readBytes(32));
              if (0 === n) return e.setPosition(t + 32), ["", 32];
              let a = e.readBytes(n, 32),
                i = (0, s.bytesToString)((0, o.trim)(a));
              return e.setPosition(t + 32), [i, 32];
            })(n, { staticPosition: c });
          throw new t.InvalidAbiDecodingTypeError(a.type, {
            docsPath: "/docs/contract/decodeAbiParameters",
          });
        })(p, a, { staticPosition: 0 });
        (m += b), y.push(c);
      }
      return y;
    }
    function d(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(d);
      let r = (0, u.getArrayComponents)(e.type);
      return !!(r && d({ ...e, type: r[1] }));
    }
    e.s(["decodeAbiParameters", () => b]);
  },
  23799,
  (e) => {
    "use strict";
    var t = e.i(995701),
      r = e.i(827677),
      n = e.i(601238),
      a = e.i(824219);
    function i(e) {
      var i;
      return (
        (i = (function (e) {
          let t = !0,
            r = "",
            n = 0,
            i = "",
            o = !1;
          for (let a = 0; a < e.length; a++) {
            let s = e[a];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && n++,
              ")" === s && n--,
              t)
            ) {
              if (0 === n) {
                if (" " === s && ["event", "function", ""].includes(i)) i = "";
                else if (((i += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[a - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
                continue;
              }
              (i += s), (r += s);
            }
          }
          if (!o) throw new a.BaseError("Unable to normalize signature.");
          return i;
        })("string" == typeof e ? e : (0, n.formatAbiItem)(e))),
        (0, r.keccak256)((0, t.toBytes)(i))
      );
    }
    e.s(["toSignatureHash", () => i], 23799);
  },
  430085,
  (e) => {
    "use strict";
    var t = e.i(764911),
      r = e.i(23799);
    e.s([
      "toFunctionSelector",
      0,
      (e) => (0, t.slice)((0, r.toSignatureHash)(e), 0, 4),
    ]);
  },
  706729,
  (e) => {
    "use strict";
    let t = e.i(23799).toSignatureHash;
    e.s(["toEventSelector", 0, t]);
  },
  898349,
  (e) => {
    "use strict";
    var t = e.i(891380),
      r = e.i(413236),
      n = e.i(307729),
      a = e.i(706729),
      i = e.i(430085);
    function o(e) {
      let o,
        { abi: s, args: c = [], name: f } = e,
        u = (0, r.isHex)(f, { strict: !1 }),
        b = s.filter((e) =>
          u
            ? "function" === e.type
              ? (0, i.toFunctionSelector)(e) === f
              : "event" === e.type && (0, a.toEventSelector)(e) === f
            : "name" in e && e.name === f
        );
      if (0 !== b.length) {
        if (1 === b.length) return b[0];
        for (let e of b) {
          if ("inputs" in e) {
            if (!c || 0 === c.length) {
              if (!e.inputs || 0 === e.inputs.length) return e;
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === c.length &&
              c.every((t, r) => {
                let a = "inputs" in e && e.inputs[r];
                return (
                  !!a &&
                  (function e(t, r) {
                    let a = typeof t,
                      i = r.type;
                    switch (i) {
                      case "address":
                        return (0, n.isAddress)(t, { strict: !1 });
                      case "bool":
                        return "boolean" === a;
                      case "function":
                      case "string":
                        return "string" === a;
                      default:
                        if ("tuple" === i && "components" in r)
                          return Object.values(r.components).every(
                            (r, n) =>
                              "object" === a && e(Object.values(t)[n], r)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            i
                          )
                        )
                          return "number" === a || "bigint" === a;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                          return "string" === a || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...r,
                                type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, a)
                );
              })
            ) {
              if (o && "inputs" in o && o.inputs) {
                let r = (function e(t, r, a) {
                  for (let i in t) {
                    let o = t[i],
                      s = r[i];
                    if (
                      "tuple" === o.type &&
                      "tuple" === s.type &&
                      "components" in o &&
                      "components" in s
                    )
                      return e(o.components, s.components, a[i]);
                    let c = [o.type, s.type];
                    if (
                      (c.includes("address") && c.includes("bytes20")) ||
                      (((c.includes("address") && c.includes("string")) ||
                        (c.includes("address") && c.includes("bytes"))) &&
                        (0, n.isAddress)(a[i], { strict: !1 }))
                    )
                      return c;
                  }
                })(e.inputs, o.inputs, c);
                if (r)
                  throw new t.AbiItemAmbiguityError(
                    { abiItem: e, type: r[0] },
                    { abiItem: o, type: r[1] }
                  );
              }
              o = e;
            }
          }
        }
        return o || b[0];
      }
    }
    e.s(["getAbiItem", () => o]);
  },
  432901,
  (e) => {
    "use strict";
    var t = e.i(648387),
      r = e.i(376145),
      n = e.i(891380),
      a = e.i(430085),
      i = e.i(62865),
      o = e.i(898349);
    let s = "/docs/contract/encodeFunctionData";
    function c(e) {
      let { args: c } = e,
        { abi: f, functionName: u } =
          1 === e.abi.length && e.functionName?.startsWith("0x")
            ? e
            : (function (e) {
                let { abi: t, args: r, functionName: c } = e,
                  f = t[0];
                if (c) {
                  let e = (0, o.getAbiItem)({ abi: t, args: r, name: c });
                  if (!e)
                    throw new n.AbiFunctionNotFoundError(c, { docsPath: s });
                  f = e;
                }
                if ("function" !== f.type)
                  throw new n.AbiFunctionNotFoundError(void 0, { docsPath: s });
                return {
                  abi: [f],
                  functionName: (0, a.toFunctionSelector)(
                    (0, i.formatAbiItem)(f)
                  ),
                };
              })(e),
        b = f[0],
        d =
          "inputs" in b && b.inputs
            ? (0, r.encodeAbiParameters)(b.inputs, c ?? [])
            : void 0;
      return (0, t.concatHex)([u, d ?? "0x"]);
    }
    e.s(["encodeFunctionData", () => c], 432901);
  },
  372152,
  (e) => {
    "use strict";
    let t = [
        {
          inputs: [
            {
              components: [
                { name: "target", type: "address" },
                { name: "allowFailure", type: "bool" },
                { name: "callData", type: "bytes" },
              ],
              name: "calls",
              type: "tuple[]",
            },
          ],
          name: "aggregate3",
          outputs: [
            {
              components: [
                { name: "success", type: "bool" },
                { name: "returnData", type: "bytes" },
              ],
              name: "returnData",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "addr", type: "address" }],
          name: "getEthBalance",
          outputs: [{ name: "balance", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCurrentBlockTimestamp",
          outputs: [
            { internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      r = [
        {
          name: "query",
          type: "function",
          stateMutability: "view",
          inputs: [
            {
              type: "tuple[]",
              name: "queries",
              components: [
                { type: "address", name: "sender" },
                { type: "string[]", name: "urls" },
                { type: "bytes", name: "data" },
              ],
            },
          ],
          outputs: [
            { type: "bool[]", name: "failures" },
            { type: "bytes[]", name: "responses" },
          ],
        },
        {
          name: "HttpError",
          type: "error",
          inputs: [
            { type: "uint16", name: "status" },
            { type: "string", name: "message" },
          ],
        },
      ],
      n = [
        {
          inputs: [{ name: "dns", type: "bytes" }],
          name: "DNSDecodingFailed",
          type: "error",
        },
        {
          inputs: [{ name: "ens", type: "string" }],
          name: "DNSEncodingFailed",
          type: "error",
        },
        { inputs: [], name: "EmptyAddress", type: "error" },
        {
          inputs: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "HttpError",
          type: "error",
        },
        { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
        {
          inputs: [{ name: "errorData", type: "bytes" }],
          name: "ResolverError",
          type: "error",
        },
        {
          inputs: [
            { name: "name", type: "bytes" },
            { name: "resolver", type: "address" },
          ],
          name: "ResolverNotContract",
          type: "error",
        },
        {
          inputs: [{ name: "name", type: "bytes" }],
          name: "ResolverNotFound",
          type: "error",
        },
        {
          inputs: [
            { name: "primary", type: "string" },
            { name: "primaryAddress", type: "bytes" },
          ],
          name: "ReverseAddressMismatch",
          type: "error",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "selector", type: "bytes4" },
          ],
          name: "UnsupportedResolverProfile",
          type: "error",
        },
      ],
      a = [
        ...n,
        {
          name: "resolveWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes" },
            { name: "data", type: "bytes" },
            { name: "gateways", type: "string[]" },
          ],
          outputs: [
            { name: "", type: "bytes" },
            { name: "address", type: "address" },
          ],
        },
      ],
      i = [
        ...n,
        {
          name: "reverseWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { type: "bytes", name: "reverseName" },
            { type: "uint256", name: "coinType" },
            { type: "string[]", name: "gateways" },
          ],
          outputs: [
            { type: "string", name: "resolvedName" },
            { type: "address", name: "resolver" },
            { type: "address", name: "reverseResolver" },
          ],
        },
      ];
    e.s([
      "addressResolverAbi",
      0,
      [
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "name", type: "bytes32" }],
          outputs: [{ name: "", type: "address" }],
        },
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "coinType", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bytes" }],
        },
      ],
      "batchGatewayAbi",
      0,
      r,
      "erc1271Abi",
      0,
      [
        {
          name: "isValidSignature",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "hash", type: "bytes32" },
            { name: "signature", type: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4" }],
        },
      ],
      "erc20Abi",
      0,
      [
        {
          type: "event",
          name: "Approval",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "function",
          name: "allowance",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "name",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "transfer",
          stateMutability: "nonpayable",
          inputs: [
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "transferFrom",
          stateMutability: "nonpayable",
          inputs: [
            { name: "sender", type: "address" },
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
      ],
      "erc6492SignatureValidatorAbi",
      0,
      [
        {
          inputs: [
            { name: "_signer", type: "address" },
            { name: "_hash", type: "bytes32" },
            { name: "_signature", type: "bytes" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { name: "_signer", type: "address" },
            { name: "_hash", type: "bytes32" },
            { name: "_signature", type: "bytes" },
          ],
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "isValidSig",
        },
      ],
      "multicall3Abi",
      0,
      t,
      "textResolverAbi",
      0,
      [
        {
          name: "text",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "key", type: "string" },
          ],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      "universalResolverResolveAbi",
      0,
      a,
      "universalResolverReverseAbi",
      0,
      i,
    ]);
  },
  737114,
  (e) => {
    "use strict";
    var t = e.i(891380),
      r = e.i(794713),
      n = e.i(898349);
    let a = "/docs/contract/decodeFunctionResult";
    function i(e) {
      let { abi: i, args: o, functionName: s, data: c } = e,
        f = i[0];
      if (s) {
        let e = (0, n.getAbiItem)({ abi: i, args: o, name: s });
        if (!e) throw new t.AbiFunctionNotFoundError(s, { docsPath: a });
        f = e;
      }
      if ("function" !== f.type)
        throw new t.AbiFunctionNotFoundError(void 0, { docsPath: a });
      if (!f.outputs)
        throw new t.AbiFunctionOutputsNotFoundError(f.name, { docsPath: a });
      let u = (0, r.decodeAbiParameters)(f.outputs, c);
      return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0;
    }
    e.s(["decodeFunctionResult", () => i]);
  },
  465074,
  (e) => {
    "use strict";
    var t = e.i(224588);
    function r({ blockNumber: e, chain: r, contract: n }) {
      let a = r?.contracts?.[n];
      if (!a)
        throw new t.ChainDoesNotSupportContract({
          chain: r,
          contract: { name: n },
        });
      if (e && a.blockCreated && a.blockCreated > e)
        throw new t.ChainDoesNotSupportContract({
          blockNumber: e,
          chain: r,
          contract: { name: n, blockCreated: a.blockCreated },
        });
      return a.address;
    }
    e.s(["getChainContractAddress", () => r]);
  },
  913248,
  (e) => {
    "use strict";
    e.s([
      "panicReasons",
      0,
      {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type.",
      },
      "solidityError",
      0,
      {
        inputs: [{ name: "message", type: "string" }],
        name: "Error",
        type: "error",
      },
      "solidityPanic",
      0,
      {
        inputs: [{ name: "reason", type: "uint256" }],
        name: "Panic",
        type: "error",
      },
    ]);
  },
  990993,
  576173,
  (e) => {
    "use strict";
    var t = e.i(913248),
      r = e.i(891380),
      n = e.i(764911),
      a = e.i(430085),
      i = e.i(794713),
      o = e.i(62865);
    function s(e) {
      let { abi: s, data: c, cause: f } = e,
        u = (0, n.slice)(c, 0, 4);
      if ("0x" === u) throw new r.AbiDecodingZeroDataError({ cause: f });
      let b = [...(s || []), t.solidityError, t.solidityPanic].find(
        (e) =>
          "error" === e.type &&
          u === (0, a.toFunctionSelector)((0, o.formatAbiItem)(e))
      );
      if (!b)
        throw new r.AbiErrorSignatureNotFoundError(u, {
          docsPath: "/docs/contract/decodeErrorResult",
          cause: f,
        });
      return {
        abiItem: b,
        args:
          "inputs" in b && b.inputs && b.inputs.length > 0
            ? (0, i.decodeAbiParameters)(b.inputs, (0, n.slice)(c, 4))
            : void 0,
        errorName: b.name,
      };
    }
    e.s(["decodeErrorResult", () => s], 990993);
    var c = e.i(518356);
    function f({
      abiItem: e,
      args: t,
      includeFunctionName: r = !0,
      includeName: n = !1,
    }) {
      if ("name" in e && "inputs" in e && e.inputs)
        return `${r ? e.name : ""}(${e.inputs
          .map(
            (e, r) =>
              `${n && e.name ? `${e.name}: ` : ""}${
                "object" == typeof t[r] ? (0, c.stringify)(t[r]) : t[r]
              }`
          )
          .join(", ")})`;
    }
    e.s(["formatAbiItemWithArgs", () => f], 576173);
  },
  669623,
  776319,
  (e) => {
    "use strict";
    var t = e.i(834058),
      r = e.i(913248),
      n = e.i(990993),
      a = e.i(62865),
      i = e.i(576173),
      o = e.i(898349),
      s = e.i(705666),
      c = e.i(871676),
      f = e.i(891380),
      u = e.i(824219),
      b = u;
    class d extends b.BaseError {
      constructor({ address: e }) {
        super(`State for account "${e}" is set multiple times.`, {
          name: "AccountStateConflictError",
        });
      }
    }
    class l extends b.BaseError {
      constructor() {
        super("state and stateDiff are set on the same account.", {
          name: "StateAssignmentConflictError",
        });
      }
    }
    function p(e) {
      return e.reduce(
        (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
        ""
      );
    }
    function m(e) {
      return e
        .reduce((e, { address: t, ...r }) => {
          let n = `${e}    ${t}:
`;
          return (
            r.nonce &&
              (n += `      nonce: ${r.nonce}
`),
            r.balance &&
              (n += `      balance: ${r.balance}
`),
            r.code &&
              (n += `      code: ${r.code}
`),
            r.state && ((n += "      state:\n"), (n += p(r.state))),
            r.stateDiff && ((n += "      stateDiff:\n"), (n += p(r.stateDiff))),
            n
          );
        }, "  State Override:\n")
        .slice(0, -1);
    }
    e.s(
      [
        "AccountStateConflictError",
        () => d,
        "StateAssignmentConflictError",
        () => l,
        "prettyStateOverride",
        () => m,
      ],
      776319
    );
    var y = e.i(503719),
      h = e.i(54508);
    class g extends u.BaseError {
      constructor(
        e,
        {
          account: r,
          docsPath: n,
          chain: a,
          data: i,
          gas: o,
          gasPrice: f,
          maxFeePerGas: u,
          maxPriorityFeePerGas: b,
          nonce: d,
          to: l,
          value: p,
          stateOverride: h,
        }
      ) {
        const g = r ? (0, t.parseAccount)(r) : void 0;
        let v = (0, y.prettyPrint)({
          from: g?.address,
          to: l,
          value:
            void 0 !== p &&
            `${(0, s.formatEther)(p)} ${a?.nativeCurrency?.symbol || "ETH"}`,
          data: i,
          gas: o,
          gasPrice: void 0 !== f && `${(0, c.formatGwei)(f)} gwei`,
          maxFeePerGas: void 0 !== u && `${(0, c.formatGwei)(u)} gwei`,
          maxPriorityFeePerGas: void 0 !== b && `${(0, c.formatGwei)(b)} gwei`,
          nonce: d,
        });
        h &&
          (v += `
${m(h)}`),
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Raw Call Arguments:",
              v,
            ].filter(Boolean),
            name: "CallExecutionError",
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
    class v extends u.BaseError {
      constructor(
        e,
        {
          abi: t,
          args: r,
          contractAddress: n,
          docsPath: s,
          functionName: c,
          sender: f,
        }
      ) {
        const u = (0, o.getAbiItem)({ abi: t, args: r, name: c }),
          b = u
            ? (0, i.formatAbiItemWithArgs)({
                abiItem: u,
                args: r,
                includeFunctionName: !1,
                includeName: !1,
              })
            : void 0,
          d = u ? (0, a.formatAbiItem)(u, { includeName: !0 }) : void 0,
          l = (0, y.prettyPrint)({
            address: n && (0, h.getContractAddress)(n),
            function: d,
            args:
              b &&
              "()" !== b &&
              `${[...Array(c?.length ?? 0).keys()]
                .map(() => " ")
                .join("")}${b}`,
            sender: f,
          });
        super(
          e.shortMessage ||
            `An unknown error occurred while executing the contract function "${c}".`,
          {
            cause: e,
            docsPath: s,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              l && "Contract Call:",
              l,
            ].filter(Boolean),
            name: "ContractFunctionExecutionError",
          }
        ),
          Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abi = t),
          (this.args = r),
          (this.cause = e),
          (this.contractAddress = n),
          (this.functionName = c),
          (this.sender = f);
      }
    }
    class w extends u.BaseError {
      constructor({ abi: e, data: t, functionName: o, message: s, cause: c }) {
        let u, b, d, l, p;
        if (t && "0x" !== t)
          try {
            const {
              abiItem: o,
              errorName: s,
              args: f,
            } = (b = (0, n.decodeErrorResult)({ abi: e, data: t, cause: c }));
            if ("Error" === s) l = f[0];
            else if ("Panic" === s) {
              const [e] = f;
              l = r.panicReasons[e];
            } else {
              const e = o
                  ? (0, a.formatAbiItem)(o, { includeName: !0 })
                  : void 0,
                t =
                  o && f
                    ? (0, i.formatAbiItemWithArgs)({
                        abiItem: o,
                        args: f,
                        includeFunctionName: !1,
                        includeName: !1,
                      })
                    : void 0;
              d = [
                e ? `Error: ${e}` : "",
                t && "()" !== t
                  ? `       ${[...Array(s?.length ?? 0).keys()]
                      .map(() => " ")
                      .join("")}${t}`
                  : "",
              ];
            }
          } catch (e) {
            u = e;
          }
        else s && (l = s);
        u instanceof f.AbiErrorSignatureNotFoundError &&
          ((p = u.signature),
          (d = [
            `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${p}.`,
          ])),
          super(
            (l && "execution reverted" !== l) || p
              ? [
                  `The contract function "${o}" reverted with the following ${
                    p ? "signature" : "reason"
                  }:`,
                  l || p,
                ].join("\n")
              : `The contract function "${o}" reverted.`,
            {
              cause: u ?? c,
              metaMessages: d,
              name: "ContractFunctionRevertedError",
            }
          ),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "raw", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = b),
          (this.raw = t),
          (this.reason = l),
          (this.signature = p);
      }
    }
    class E extends u.BaseError {
      constructor({ functionName: e, cause: t }) {
        super(`The contract function "${e}" returned no data ("0x").`, {
          metaMessages: [
            "This could be due to any of the following:",
            `  - The contract does not have the function "${e}",`,
            "  - The parameters passed to the contract function may be invalid, or",
            "  - The address is not a contract.",
          ],
          name: "ContractFunctionZeroDataError",
          cause: t,
        });
      }
    }
    class x extends u.BaseError {
      constructor({ factory: e }) {
        super(
          `Deployment for counterfactual contract call failed${
            e ? ` for factory "${e}".` : ""
          }`,
          {
            metaMessages: [
              "Please ensure:",
              "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
              "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
            ],
            name: "CounterfactualDeploymentFailedError",
          }
        );
      }
    }
    class A extends u.BaseError {
      constructor({ data: e, message: t }) {
        super(t || "", { name: "RawContractError" }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e);
      }
    }
    e.s(
      [
        "CallExecutionError",
        () => g,
        "ContractFunctionExecutionError",
        () => v,
        "ContractFunctionRevertedError",
        () => w,
        "ContractFunctionZeroDataError",
        () => E,
        "CounterfactualDeploymentFailedError",
        () => x,
        "RawContractError",
        () => A,
      ],
      669623
    );
  },
  403068,
  304329,
  (e) => {
    "use strict";
    var t = e.i(372152),
      r = e.i(913248),
      n = e.i(891380),
      a = e.i(764911),
      i = e.i(430085),
      o = e.i(794713),
      s = e.i(62865);
    function c(e) {
      let { abi: t, data: r } = e,
        c = (0, a.slice)(r, 0, 4),
        f = t.find(
          (e) =>
            "function" === e.type &&
            c === (0, i.toFunctionSelector)((0, s.formatAbiItem)(e))
        );
      if (!f)
        throw new n.AbiFunctionSignatureNotFoundError(c, {
          docsPath: "/docs/contract/decodeFunctionData",
        });
      return {
        functionName: f.name,
        args:
          "inputs" in f && f.inputs && f.inputs.length > 0
            ? (0, o.decodeAbiParameters)(f.inputs, (0, a.slice)(r, 4))
            : void 0,
      };
    }
    e.s(["decodeFunctionData", () => c], 304329);
    var f = e.i(648387),
      u = e.i(376145),
      b = e.i(898349);
    let d = "/docs/contract/encodeErrorResult";
    function l(e) {
      let { abi: t, errorName: r, args: a } = e,
        o = t[0];
      if (r) {
        let e = (0, b.getAbiItem)({ abi: t, args: a, name: r });
        if (!e) throw new n.AbiErrorNotFoundError(r, { docsPath: d });
        o = e;
      }
      if ("error" !== o.type)
        throw new n.AbiErrorNotFoundError(void 0, { docsPath: d });
      let c = (0, s.formatAbiItem)(o),
        l = (0, i.toFunctionSelector)(c),
        p = "0x";
      if (a && a.length > 0) {
        if (!o.inputs)
          throw new n.AbiErrorInputsNotFoundError(o.name, { docsPath: d });
        p = (0, u.encodeAbiParameters)(o.inputs, a);
      }
      return (0, f.concatHex)([l, p]);
    }
    let p = "/docs/contract/encodeFunctionResult",
      m = "x-batch-gateway:true";
    async function y(e) {
      let { data: a, ccipRequest: i } = e,
        {
          args: [o],
        } = c({ abi: t.batchGatewayAbi, data: a }),
        s = [],
        f = [];
      return (
        await Promise.all(
          o.map(async (e, n) => {
            try {
              (f[n] = e.urls.includes(m)
                ? await y({ data: e.data, ccipRequest: i })
                : await i(e)),
                (s[n] = !1);
            } catch (e) {
              var a;
              (s[n] = !0),
                (f[n] =
                  "HttpRequestError" === (a = e).name && a.status
                    ? l({
                        abi: t.batchGatewayAbi,
                        errorName: "HttpError",
                        args: [a.status, a.shortMessage],
                      })
                    : l({
                        abi: [r.solidityError],
                        errorName: "Error",
                        args: [
                          "shortMessage" in a ? a.shortMessage : a.message,
                        ],
                      }));
            }
          })
        ),
        (function (e) {
          let { abi: t, functionName: r, result: a } = e,
            i = t[0];
          if (r) {
            let e = (0, b.getAbiItem)({ abi: t, name: r });
            if (!e) throw new n.AbiFunctionNotFoundError(r, { docsPath: p });
            i = e;
          }
          if ("function" !== i.type)
            throw new n.AbiFunctionNotFoundError(void 0, { docsPath: p });
          if (!i.outputs)
            throw new n.AbiFunctionOutputsNotFoundError(i.name, {
              docsPath: p,
            });
          let o = (() => {
            if (0 === i.outputs.length) return [];
            if (1 === i.outputs.length) return [a];
            if (Array.isArray(a)) return a;
            throw new n.InvalidArrayError(a);
          })();
          return (0, u.encodeAbiParameters)(i.outputs, o);
        })({ abi: t.batchGatewayAbi, functionName: "query", result: [s, f] })
      );
    }
    e.s(
      ["localBatchGatewayRequest", () => y, "localBatchGatewayUrl", 0, m],
      403068
    );
  },
  423562,
  840848,
  856330,
  112702,
  460927,
  (e) => {
    "use strict";
    e.s(
      [
        "IntegerOutOfRangeError",
        () => B,
        "InvalidLengthError",
        () => F,
        "SizeExceedsPaddingSizeError",
        () => N,
        "SizeOverflowError",
        () => I,
        "SliceOffsetOutOfBoundsError",
        () => T,
        "concat",
        () => u,
        "from",
        () => b,
        "fromBoolean",
        () => d,
        "fromBytes",
        () => l,
        "fromNumber",
        () => p,
        "fromString",
        () => m,
        "padLeft",
        () => y,
        "padRight",
        () => h,
        "size",
        () => v,
        "slice",
        () => g,
        "toBigInt",
        () => E,
        "toNumber",
        () => x,
        "trimLeft",
        () => w,
        "validate",
        () => A,
      ],
      460927
    );
    class t extends Error {
      static setStaticOptions(e) {
        (t.prototype.docsOrigin = e.docsOrigin),
          (t.prototype.showVersion = e.showVersion),
          (t.prototype.version = e.version);
      }
      constructor(e, r = {}) {
        const n = (() => {
            if (r.cause instanceof t) {
              if (r.cause.details) return r.cause.details;
              if (r.cause.shortMessage) return r.cause.shortMessage;
            }
            return r.cause &&
              "details" in r.cause &&
              "string" == typeof r.cause.details
              ? r.cause.details
              : r.cause?.message
              ? r.cause.message
              : r.details;
          })(),
          a = (r.cause instanceof t && r.cause.docsPath) || r.docsPath,
          i = r.docsOrigin ?? t.prototype.docsOrigin,
          o = `${i}${a ?? ""}`,
          s = !!(r.version ?? t.prototype.showVersion),
          c = r.version ?? t.prototype.version;
        super(
          [
            e || "An error occurred.",
            ...(r.metaMessages ? ["", ...r.metaMessages] : []),
            ...(n || a || s
              ? [
                  "",
                  n ? `Details: ${n}` : void 0,
                  a ? `See: ${o}` : void 0,
                  s ? `Version: ${c}` : void 0,
                ]
              : []),
          ]
            .filter((e) => "string" == typeof e)
            .join("\n"),
          r.cause ? { cause: r.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsOrigin", {
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
          Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "showVersion", {
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
          Object.defineProperty(this, "cause", {
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
          (this.cause = r.cause),
          (this.details = n),
          (this.docs = o),
          (this.docsOrigin = i),
          (this.docsPath = a),
          (this.shortMessage = e),
          (this.showVersion = s),
          (this.version = c);
      }
      walk(e) {
        return (function e(t, r) {
          return r?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && t.cause
            ? e(t.cause, r)
            : r
            ? null
            : t;
        })(this, e);
      }
    }
    function r(e, t) {
      if (v(e) > t) throw new I({ givenSize: v(e), maxSize: t });
    }
    function n(e, t) {
      if ("number" == typeof t && t > 0 && t > v(e) - 1)
        throw new T({ offset: t, position: "start", size: v(e) });
    }
    function a(e, t, r) {
      if ("number" == typeof t && "number" == typeof r && v(e) !== r - t)
        throw new T({ offset: r, position: "end", size: v(e) });
    }
    function i(e, t = {}) {
      let { dir: r, size: n = 32 } = t;
      if (0 === n) return e;
      let a = e.replace("0x", "");
      if (a.length > 2 * n)
        throw new N({
          size: Math.ceil(a.length / 2),
          targetSize: n,
          type: "Hex",
        });
      return `0x${a["right" === r ? "padEnd" : "padStart"](2 * n, "0")}`;
    }
    function o(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e.replace("0x", ""),
        a = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) a++;
        else break;
      return "0" === (n = "left" === r ? n.slice(a) : n.slice(0, n.length - a))
        ? "0x"
        : "right" === r && n.length % 2 == 1
        ? `0x${n}0`
        : `0x${n}`;
    }
    function s(e, t, r) {
      return JSON.stringify(
        e,
        (e, r) =>
          "function" == typeof t
            ? t(e, r)
            : "bigint" == typeof r
            ? r.toString() + "#__bigint"
            : r,
        r
      );
    }
    Object.defineProperty(t, "defaultStaticOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        docsOrigin: "https://oxlib.sh",
        showVersion: !1,
        version: "ox@0.1.1",
      },
    }),
      t.setStaticOptions(t.defaultStaticOptions),
      e.s(["BaseError", () => t], 840848),
      e.s(
        [
          "assertEndOffset",
          () => a,
          "assertSize",
          () => r,
          "assertStartOffset",
          () => n,
          "pad",
          () => i,
          "trim",
          () => o,
        ],
        856330
      ),
      e.s(["stringify", () => s], 112702);
    let c = new TextEncoder(),
      f = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function u(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function b(e) {
      return e instanceof Uint8Array
        ? l(e)
        : Array.isArray(e)
        ? l(new Uint8Array(e))
        : e;
    }
    function d(e, t = {}) {
      let n = `0x${Number(e)}`;
      return "number" == typeof t.size ? (r(n, t.size), y(n, t.size)) : n;
    }
    function l(e, t = {}) {
      let n = "";
      for (let t = 0; t < e.length; t++) n += f[e[t]];
      let a = `0x${n}`;
      return "number" == typeof t.size ? (r(a, t.size), h(a, t.size)) : a;
    }
    function p(e, t = {}) {
      let r,
        { signed: n, size: a } = t,
        i = BigInt(e);
      a
        ? (r = n
            ? (1n << (8n * BigInt(a) - 1n)) - 1n
            : 2n ** (8n * BigInt(a)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let o = "bigint" == typeof r && n ? -r - 1n : 0;
      if ((r && i > r) || i < o) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new B({
          max: r ? `${r}${t}` : void 0,
          min: `${o}${t}`,
          signed: n,
          size: a,
          value: `${e}${t}`,
        });
      }
      let s = (n && i < 0 ? BigInt.asUintN(8 * a, BigInt(i)) : i).toString(16),
        c = `0x${s}`;
      return a ? y(c, a) : c;
    }
    function m(e, t = {}) {
      return l(c.encode(e), t);
    }
    function y(e, t) {
      return i(e, { dir: "left", size: t });
    }
    function h(e, t) {
      return i(e, { dir: "right", size: t });
    }
    function g(e, t, r, i = {}) {
      let { strict: o } = i;
      n(e, t);
      let s = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return o && a(s, t, r), s;
    }
    function v(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function w(e) {
      return o(e, { dir: "left" });
    }
    function E(e, t = {}) {
      let { signed: n } = t;
      t.size && r(e, t.size);
      let a = BigInt(e);
      if (!n) return a;
      let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
      return a <= i >> 1n ? a : a - i - 1n;
    }
    function x(e, t = {}) {
      let { signed: r, size: n } = t;
      return r || n ? Number(E(e, t)) : Number(e);
    }
    function A(e, t = {}) {
      let { strict: r = !1 } = t;
      try {
        return (
          !(function (e, t = {}) {
            let { strict: r = !1 } = t;
            if (!e || "string" != typeof e) throw new $(e);
            if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
              throw new P(e);
          })(e, { strict: r }),
          !0
        );
      } catch {
        return !1;
      }
    }
    class B extends t {
      constructor({ max: e, min: t, signed: r, size: n, value: a }) {
        super(
          `Number \`${a}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
            r ? " signed" : " unsigned"
          } integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError",
          });
      }
    }
    class $ extends t {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? s(e) : e
          }\` of type \`${typeof e}\` is an invalid hex type.`,
          {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
          }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexTypeError",
          });
      }
    }
    class P extends t {
      constructor(e) {
        super(`Value \`${e}\` is an invalid hex value.`, {
          metaMessages: [
            'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexValueError",
          });
      }
    }
    class F extends t {
      constructor(e) {
        super(
          `Hex value \`"${e}"\` is an odd length (${e.length - 2} nibbles).`,
          { metaMessages: ["It must be an even length."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidLengthError",
          });
      }
    }
    class I extends t {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeOverflowError",
          });
      }
    }
    class T extends t {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class N extends t {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError",
          });
      }
    }
    function S(e) {
      return {
        address: e.address,
        amount: p(e.amount),
        index: p(e.index),
        validatorIndex: p(e.validatorIndex),
      };
    }
    function z(e) {
      return {
        ...("bigint" == typeof e.baseFeePerGas && {
          baseFeePerGas: p(e.baseFeePerGas),
        }),
        ...("bigint" == typeof e.blobBaseFee && {
          blobBaseFee: p(e.blobBaseFee),
        }),
        ...("string" == typeof e.feeRecipient && {
          feeRecipient: e.feeRecipient,
        }),
        ...("bigint" == typeof e.gasLimit && { gasLimit: p(e.gasLimit) }),
        ...("bigint" == typeof e.number && { number: p(e.number) }),
        ...("bigint" == typeof e.prevRandao && { prevRandao: p(e.prevRandao) }),
        ...("bigint" == typeof e.time && { time: p(e.time) }),
        ...(e.withdrawals && { withdrawals: e.withdrawals.map(S) }),
      };
    }
    e.s(["toRpc", () => z], 423562);
  },
  794412,
  389259,
  (e) => {
    "use strict";
    e.s(["aggregate3Signature", 0, "0x82ad56cb"], 794412),
      e.s(
        [
          "deploylessCallViaBytecodeBytecode",
          0,
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
          "deploylessCallViaFactoryBytecode",
          0,
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
          "erc6492SignatureValidatorByteCode",
          0,
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
          "multicall3Bytecode",
          0,
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033",
        ],
        389259
      );
  },
  170245,
  (e) => {
    "use strict";
    var t = e.i(891380),
      r = e.i(648387),
      n = e.i(376145);
    let a = "/docs/contract/encodeDeployData";
    function i(e) {
      let { abi: i, args: o, bytecode: s } = e;
      if (!o || 0 === o.length) return s;
      let c = i.find((e) => "type" in e && "constructor" === e.type);
      if (!c) throw new t.AbiConstructorNotFoundError({ docsPath: a });
      if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
        throw new t.AbiConstructorParamsNotFoundError({ docsPath: a });
      let f = (0, n.encodeAbiParameters)(c.inputs, o);
      return (0, r.concatHex)([s, f]);
    }
    e.s(["encodeDeployData", () => i]);
  },
  774284,
  (e) => {
    "use strict";
    var t = e.i(824219),
      r = e.i(968974);
    function n(e) {
      let {
        blockHash: n,
        blockNumber: a,
        blockTag: i,
        requireCanonical: o,
      } = e;
      if (void 0 !== o && !n)
        throw new t.BaseError(
          "`requireCanonical` can only be provided when `blockHash` is set."
        );
      return n
        ? o
          ? { blockHash: n, requireCanonical: o }
          : { blockHash: n }
        : "bigint" == typeof a
        ? (0, r.numberToHex)(a)
        : i ?? "latest";
    }
    e.s(["formatBlockParameter", () => n]);
  },
  765399,
  30887,
  422855,
  39393,
  759151,
  614771,
  188444,
  (e) => {
    "use strict";
    var t = e.i(885922),
      r = e.i(423562),
      n = e.i(834058),
      a = e.i(372152),
      i = e.i(794412),
      o = e.i(389259),
      s = e.i(824219),
      c = e.i(224588),
      f = e.i(669623),
      u = e.i(54508),
      b = e.i(737114),
      d = e.i(170245),
      l = e.i(432901),
      p = e.i(746501),
      m = e.i(774284),
      y = e.i(465074),
      h = e.i(74023);
    function g(e, t) {
      let r = (e.details || "").toLowerCase(),
        n =
          e instanceof s.BaseError
            ? e.walk((e) => e?.code === h.ExecutionRevertedError.code)
            : e;
      return n instanceof s.BaseError
        ? new h.ExecutionRevertedError({ cause: e, message: n.details })
        : h.ExecutionRevertedError.nodeMessage.test(r)
        ? new h.ExecutionRevertedError({ cause: e, message: e.details })
        : h.FeeCapTooHighError.nodeMessage.test(r)
        ? new h.FeeCapTooHighError({ cause: e, maxFeePerGas: t?.maxFeePerGas })
        : h.FeeCapTooLowError.nodeMessage.test(r)
        ? new h.FeeCapTooLowError({ cause: e, maxFeePerGas: t?.maxFeePerGas })
        : h.NonceTooHighError.nodeMessage.test(r)
        ? new h.NonceTooHighError({ cause: e, nonce: t?.nonce })
        : h.NonceTooLowError.nodeMessage.test(r)
        ? new h.NonceTooLowError({ cause: e, nonce: t?.nonce })
        : h.NonceMaxValueError.nodeMessage.test(r)
        ? new h.NonceMaxValueError({ cause: e, nonce: t?.nonce })
        : h.InsufficientFundsError.nodeMessage.test(r)
        ? new h.InsufficientFundsError({ cause: e })
        : h.IntrinsicGasTooHighError.nodeMessage.test(r)
        ? new h.IntrinsicGasTooHighError({ cause: e, gas: t?.gas })
        : h.IntrinsicGasTooLowError.nodeMessage.test(r)
        ? new h.IntrinsicGasTooLowError({ cause: e, gas: t?.gas })
        : h.TransactionTypeNotSupportedError.nodeMessage.test(r)
        ? new h.TransactionTypeNotSupportedError({ cause: e })
        : h.TipAboveFeeCapError.nodeMessage.test(r)
        ? new h.TipAboveFeeCapError({
            cause: e,
            maxFeePerGas: t?.maxFeePerGas,
            maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
          })
        : new h.UnknownNodeError({ cause: e });
    }
    function v(e, { docsPath: t, ...r }) {
      let n,
        a = (n = g(e, r)) instanceof h.UnknownNodeError ? e : n;
      return new f.CallExecutionError(a, { docsPath: t, ...r });
    }
    function w(e, { format: t }) {
      if (!t) return {};
      let r = {};
      return (
        !(function t(n) {
          for (let a of Object.keys(n))
            a in e && (r[a] = e[a]),
              n[a] &&
                "object" == typeof n[a] &&
                !Array.isArray(n[a]) &&
                t(n[a]);
        })(t(e || {})),
        r
      );
    }
    e.s(["getNodeError", () => g], 30887),
      e.s(["getCallError", () => v], 422855),
      e.s(["extract", () => w], 39393);
    var E = e.i(968974);
    e.i(878726);
    let x = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2",
      eip4844: "0x3",
      eip7702: "0x4",
    };
    function A(e, t) {
      let r = {};
      return (
        void 0 !== e.authorizationList &&
          (r.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            r: e.r ? (0, E.numberToHex)(BigInt(e.r)) : e.r,
            s: e.s ? (0, E.numberToHex)(BigInt(e.s)) : e.s,
            chainId: (0, E.numberToHex)(e.chainId),
            nonce: (0, E.numberToHex)(e.nonce),
            ...(void 0 !== e.yParity
              ? { yParity: (0, E.numberToHex)(e.yParity) }
              : {}),
            ...(void 0 !== e.v && void 0 === e.yParity
              ? { v: (0, E.numberToHex)(e.v) }
              : {}),
          }))),
        void 0 !== e.accessList && (r.accessList = e.accessList),
        void 0 !== e.blobVersionedHashes &&
          (r.blobVersionedHashes = e.blobVersionedHashes),
        void 0 !== e.blobs &&
          ("string" != typeof e.blobs[0]
            ? (r.blobs = e.blobs.map((e) => (0, E.bytesToHex)(e)))
            : (r.blobs = e.blobs)),
        void 0 !== e.data && (r.data = e.data),
        e.account && (r.from = e.account.address),
        void 0 !== e.from && (r.from = e.from),
        void 0 !== e.gas && (r.gas = (0, E.numberToHex)(e.gas)),
        void 0 !== e.gasPrice && (r.gasPrice = (0, E.numberToHex)(e.gasPrice)),
        void 0 !== e.maxFeePerBlobGas &&
          (r.maxFeePerBlobGas = (0, E.numberToHex)(e.maxFeePerBlobGas)),
        void 0 !== e.maxFeePerGas &&
          (r.maxFeePerGas = (0, E.numberToHex)(e.maxFeePerGas)),
        void 0 !== e.maxPriorityFeePerGas &&
          (r.maxPriorityFeePerGas = (0, E.numberToHex)(e.maxPriorityFeePerGas)),
        void 0 !== e.nonce && (r.nonce = (0, E.numberToHex)(e.nonce)),
        void 0 !== e.to && (r.to = e.to),
        void 0 !== e.type && (r.type = x[e.type]),
        void 0 !== e.value && (r.value = (0, E.numberToHex)(e.value)),
        r
      );
    }
    e.s(["formatTransactionRequest", () => A], 759151);
    var B = e.i(811505),
      $ = e.i(360235),
      P = e.i(866311),
      F = e.i(776319),
      I = e.i(307729);
    function T(e) {
      if (e && 0 !== e.length)
        return e.reduce((e, { slot: t, value: r }) => {
          if (66 !== t.length)
            throw new P.InvalidBytesLengthError({
              size: t.length,
              targetSize: 66,
              type: "hex",
            });
          if (66 !== r.length)
            throw new P.InvalidBytesLengthError({
              size: r.length,
              targetSize: 66,
              type: "hex",
            });
          return (e[t] = r), e;
        }, {});
    }
    function N(e) {
      if (!e) return;
      let t = {};
      for (let { address: r, ...n } of e) {
        if (!(0, I.isAddress)(r, { strict: !1 }))
          throw new $.InvalidAddressError({ address: r });
        if (t[r]) throw new F.AccountStateConflictError({ address: r });
        t[r] = (function (e) {
          let { balance: t, nonce: r, state: n, stateDiff: a, code: i } = e,
            o = {};
          if (
            (void 0 !== i && (o.code = i),
            void 0 !== t && (o.balance = (0, E.numberToHex)(t)),
            void 0 !== r && (o.nonce = (0, E.numberToHex)(r)),
            void 0 !== n && (o.state = T(n)),
            void 0 !== a)
          ) {
            if (o.state) throw new F.StateAssignmentConflictError();
            o.stateDiff = T(a);
          }
          return o;
        })(n);
      }
      return t;
    }
    e.s(["serializeStateOverride", () => N], 614771);
    var S = e.i(832088);
    function z(e) {
      let { account: t, maxFeePerGas: r, maxPriorityFeePerGas: a, to: i } = e,
        o = t ? (0, n.parseAccount)(t) : void 0;
      if (o && !(0, I.isAddress)(o.address))
        throw new $.InvalidAddressError({ address: o.address });
      if (i && !(0, I.isAddress)(i))
        throw new $.InvalidAddressError({ address: i });
      if (r && r > S.maxUint256)
        throw new h.FeeCapTooHighError({ maxFeePerGas: r });
      if (a && r && a > r)
        throw new h.TipAboveFeeCapError({
          maxFeePerGas: r,
          maxPriorityFeePerGas: a,
        });
    }
    async function M(a, b) {
      let {
          account: l = a.account,
          authorizationList: y,
          batch: h = !!a.batch?.multicall,
          blockHash: g,
          blockNumber: E,
          blockTag: x = a.experimental_blockTag ?? "latest",
          requireCanonical: B,
          accessList: $,
          blobs: P,
          blockOverrides: F,
          code: I,
          data: T,
          factory: S,
          factoryData: M,
          gas: C,
          gasPrice: O,
          maxFeePerBlobGas: R,
          maxFeePerGas: k,
          maxPriorityFeePerGas: G,
          nonce: L,
          requestOptions: V,
          to: W,
          value: q,
          stateOverride: _,
          ...U
        } = b,
        Z = l ? (0, n.parseAccount)(l) : void 0;
      if (I && (S || M))
        throw new s.BaseError(
          "Cannot provide both `code` & `factory`/`factoryData` as parameters."
        );
      if (I && W)
        throw new s.BaseError(
          "Cannot provide both `code` & `to` as parameters."
        );
      let Y = I && T,
        J = S && M && W && T,
        K = Y || J,
        X = Y
          ? j({ code: I, data: T })
          : J
          ? (function (e) {
              let { data: r, factory: n, factoryData: a, to: i } = e;
              return (0, d.encodeDeployData)({
                abi: (0, t.parseAbi)([
                  "constructor(address, bytes, address, bytes)",
                ]),
                bytecode: o.deploylessCallViaFactoryBytecode,
                args: [i, r, n, a],
              });
            })({ data: T, factory: S, factoryData: M, to: W })
          : T;
      try {
        let e;
        z(b);
        let t = (0, m.formatBlockParameter)({
            blockHash: g,
            blockNumber: E,
            blockTag: x,
            requireCanonical: B,
          }),
          n = F ? r.toRpc(F) : void 0,
          o = N(_),
          s = a.chain?.formatters?.transactionRequest?.format,
          f = (s || A)(
            {
              ...w(U, { format: s }),
              accessList: $,
              account: Z,
              authorizationList: y,
              blobs: P,
              data: X,
              gas: C,
              gasPrice: O,
              maxFeePerBlobGas: R,
              maxFeePerGas: k,
              maxPriorityFeePerGas: G,
              nonce: L,
              to: K ? void 0 : W,
              value: q,
            },
            "call"
          );
        if (
          h &&
          (function ({ request: e }) {
            let { data: t, to: r, ...n } = e;
            return (
              !(!t || t.startsWith(i.aggregate3Signature)) &&
              !!r &&
              !(Object.values(n).filter((e) => void 0 !== e).length > 0)
            );
          })({ request: f }) &&
          !n &&
          void 0 === g
        )
          try {
            var Q, ee;
            let { deployless: e = !1 } =
                "object" == typeof a.batch?.multicall ? a.batch.multicall : {},
              t = D(a, { blockNumber: E, deployless: e });
            if (
              !t ||
              ((Q = o),
              (ee = t),
              !(Q && Object.keys(Q).some((e) => (0, p.isAddressEqual)(e, ee))))
            )
              return await H(a, {
                ...f,
                blockHash: g,
                blockNumber: E,
                blockTag: x,
                multicallAddress: t,
                requestOptions: V,
                requireCanonical: B,
                rpcStateOverride: o,
              });
          } catch (e) {
            if (
              !(e instanceof c.ClientChainNotConfiguredError) &&
              !(e instanceof c.ChainDoesNotSupportContract)
            )
              throw e;
          }
        let u =
            ((e = [f, t]),
            o && n ? [...e, o, n] : o ? [...e, o] : n ? [...e, {}, n] : e),
          d = await a.request({ method: "eth_call", params: u }, V);
        if ("0x" === d) return { data: void 0 };
        return { data: d };
      } catch (i) {
        if (V?.signal?.aborted) throw (0, u.getAbortError)(V.signal);
        if ((0, u.isAbortError)(i)) throw i;
        let t = (function (e) {
            if (!(e instanceof s.BaseError)) return;
            let t = e.walk();
            return "object" == typeof t?.data ? t.data?.data : t.data;
          })(i),
          { offchainLookup: r, offchainLookupSignature: n } = await e.A(466879);
        if (!1 !== a.ccipRead && t?.slice(0, 10) === n && W)
          return { data: await r(a, { data: t, requestOptions: V, to: W }) };
        if (K && t?.slice(0, 10) === "0x101bb98d")
          throw new f.CounterfactualDeploymentFailedError({ factory: S });
        throw v(i, { ...b, account: Z, chain: a.chain });
      }
    }
    e.s(["assertRequest", () => z], 188444);
    let C = 0,
      O = new WeakMap();
    async function H(e, t) {
      let {
          batchSize: r = 1024,
          deployless: n = !1,
          wait: i = 0,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        {
          blockHash: s,
          blockNumber: c,
          blockTag: u = e.experimental_blockTag ?? "latest",
          requireCanonical: d,
          data: p,
          multicallAddress: y,
          requestOptions: h,
          rpcStateOverride: g,
          to: v,
        } = t,
        w = void 0 !== y ? y : D(e, { blockNumber: c, deployless: n }),
        E = (0, m.formatBlockParameter)({
          blockHash: s,
          blockNumber: c,
          blockTag: u,
          requireCanonical: d,
        }),
        x = "string" == typeof E ? E : JSON.stringify(E),
        A = g ? `.${JSON.stringify(g)}` : "",
        { schedule: $ } = (0, B.createBatchScheduler)({
          id: `${e.uid}.${x}.${(function (e) {
            if (!e) return "default";
            let t = O.get(e);
            if (void 0 !== t) return t;
            let r = C++;
            return O.set(e, r), r;
          })(h)}${A}`,
          wait: i,
          shouldSplitBatch: (e) =>
            e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
          fn: async (t) => {
            let r = t.map((e) => ({
                allowFailure: !0,
                callData: e.data,
                target: e.to,
              })),
              n = (0, l.encodeFunctionData)({
                abi: a.multicall3Abi,
                args: [r],
                functionName: "aggregate3",
              }),
              i = {
                ...(null === w
                  ? { data: j({ code: o.multicall3Bytecode, data: n }) }
                  : { to: w, data: n }),
              },
              s = await e.request(
                { method: "eth_call", params: g ? [i, E, g] : [i, E] },
                h
              );
            return (0, b.decodeFunctionResult)({
              abi: a.multicall3Abi,
              args: [r],
              functionName: "aggregate3",
              data: s || "0x",
            });
          },
        }),
        [{ returnData: P, success: F }] = await $({ data: p, to: v });
      if (!F) throw new f.RawContractError({ data: P });
      return "0x" === P ? { data: void 0 } : { data: P };
    }
    function D(e, t) {
      let { blockNumber: r, deployless: n } = t;
      if (n) return null;
      if (e.chain)
        return (0, y.getChainContractAddress)({
          blockNumber: r,
          chain: e.chain,
          contract: "multicall3",
        });
      throw new c.ClientChainNotConfiguredError();
    }
    function j(e) {
      let { code: r, data: n } = e;
      return (0, d.encodeDeployData)({
        abi: (0, t.parseAbi)(["constructor(bytes, bytes)"]),
        bytecode: o.deploylessCallViaBytecodeBytecode,
        args: [r, n],
      });
    }
    e.s(["call", () => M], 765399);
  },
]);
