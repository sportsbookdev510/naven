(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  404340,
  (e) => {
    "use strict";
    function t(e) {
      if (
        "object" != typeof e ||
        null === e ||
        "[object Object]" !== Object.prototype.toString.call(e)
      )
        return !1;
      if (null === Object.getPrototypeOf(e)) return !0;
      let t = e;
      for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    e.s(["default", () => t]);
  },
  715949,
  (e) => {
    "use strict";
    class t extends Error {
      static get code() {
        return "ERR_JOSE_GENERIC";
      }
      constructor(e) {
        var t;
        super(e),
          (this.code = "ERR_JOSE_GENERIC"),
          (this.name = this.constructor.name),
          null == (t = Error.captureStackTrace) ||
            t.call(Error, this, this.constructor);
      }
    }
    class i extends t {
      static get code() {
        return "ERR_JWT_CLAIM_VALIDATION_FAILED";
      }
      constructor(e, t = "unspecified", i = "unspecified") {
        super(e),
          (this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED"),
          (this.claim = t),
          (this.reason = i);
      }
    }
    class r extends t {
      static get code() {
        return "ERR_JWT_EXPIRED";
      }
      constructor(e, t = "unspecified", i = "unspecified") {
        super(e),
          (this.code = "ERR_JWT_EXPIRED"),
          (this.claim = t),
          (this.reason = i);
      }
    }
    class s extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JOSE_ALG_NOT_ALLOWED");
      }
      static get code() {
        return "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    }
    class n extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JOSE_NOT_SUPPORTED");
      }
      static get code() {
        return "ERR_JOSE_NOT_SUPPORTED";
      }
    }
    class a extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWE_DECRYPTION_FAILED"),
          (this.message = "decryption operation failed");
      }
      static get code() {
        return "ERR_JWE_DECRYPTION_FAILED";
      }
    }
    class o extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWE_DECOMPRESSION_FAILED"),
          (this.message = "decompression operation failed");
      }
      static get code() {
        return "ERR_JWE_DECOMPRESSION_FAILED";
      }
    }
    class l extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JWE_INVALID");
      }
      static get code() {
        return "ERR_JWE_INVALID";
      }
    }
    class c extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JWS_INVALID");
      }
      static get code() {
        return "ERR_JWS_INVALID";
      }
    }
    class h extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JWT_INVALID");
      }
      static get code() {
        return "ERR_JWT_INVALID";
      }
    }
    class d extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JWK_INVALID");
      }
      static get code() {
        return "ERR_JWK_INVALID";
      }
    }
    class u extends t {
      constructor() {
        super(...arguments), (this.code = "ERR_JWKS_INVALID");
      }
      static get code() {
        return "ERR_JWKS_INVALID";
      }
    }
    class p extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWKS_NO_MATCHING_KEY"),
          (this.message = "no applicable key found in the JSON Web Key Set");
      }
      static get code() {
        return "ERR_JWKS_NO_MATCHING_KEY";
      }
    }
    class f extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"),
          (this.message =
            "multiple matching keys found in the JSON Web Key Set");
      }
      static get code() {
        return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    }
    class g extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWKS_TIMEOUT"),
          (this.message = "request timed out");
      }
      static get code() {
        return "ERR_JWKS_TIMEOUT";
      }
    }
    class y extends t {
      constructor() {
        super(...arguments),
          (this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"),
          (this.message = "signature verification failed");
      }
      static get code() {
        return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    }
    e.s([
      "JOSEAlgNotAllowed",
      () => s,
      "JOSEError",
      () => t,
      "JOSENotSupported",
      () => n,
      "JWEDecompressionFailed",
      () => o,
      "JWEDecryptionFailed",
      () => a,
      "JWEInvalid",
      () => l,
      "JWKInvalid",
      () => d,
      "JWKSInvalid",
      () => u,
      "JWKSMultipleMatchingKeys",
      () => f,
      "JWKSNoMatchingKey",
      () => p,
      "JWKSTimeout",
      () => g,
      "JWSInvalid",
      () => c,
      "JWSSignatureVerificationFailed",
      () => y,
      "JWTClaimValidationFailed",
      () => i,
      "JWTExpired",
      () => r,
      "JWTInvalid",
      () => h,
    ]);
  },
  143930,
  (e) => {
    "use strict";
    var t = e.i(95351),
      i = e.i(80421),
      r = e.i(404340),
      s = e.i(715949);
    function n(e) {
      let n, a;
      if ("string" != typeof e)
        throw new s.JWTInvalid(
          "JWTs must use Compact JWS serialization, JWT must be a string"
        );
      let { 1: o, length: l } = e.split(".");
      if (5 === l)
        throw new s.JWTInvalid(
          "Only JWTs using Compact JWS serialization can be decoded"
        );
      if (3 !== l) throw new s.JWTInvalid("Invalid JWT");
      if (!o) throw new s.JWTInvalid("JWTs must contain a payload");
      try {
        n = (0, t.decode)(o);
      } catch (e) {
        throw new s.JWTInvalid("Failed to base64url decode the payload");
      }
      try {
        a = JSON.parse(i.decoder.decode(n));
      } catch (e) {
        throw new s.JWTInvalid("Failed to parse the decoded payload as JSON");
      }
      if (!(0, r.default)(a)) throw new s.JWTInvalid("Invalid JWT Claims Set");
      return a;
    }
    e.s(["decodeJwt", () => n]);
  },
  27888,
  410539,
  (e) => {
    "use strict";
    var t = e.i(620136),
      i = e.i(964564);
    let r = {
        0: "legacy",
        1: "eip2930",
        2: "eip1559",
        3: "eip4844",
        4: "eip7702",
      },
      s = { legacy: 0, eip2930: 1, eip1559: 2, eip4844: 3, eip7702: 4 },
      n = (e) => (void 0 !== e ? BigInt(e) : void 0);
    function a(e) {
      let s,
        { type: a = 2, ...o } = "string" == typeof e ? JSON.parse(e) : e;
      o.accessList && Array.isArray(o.accessList)
        ? (s = o.accessList.map((e) =>
            Array.isArray(e) ? { address: e[0], storageKeys: e[1] } : e
          ))
        : o.accessList &&
          (s = Object.entries(o.accessList).map((e) => ({
            address: e[0],
            storageKeys: e[1],
          })));
      let l = Number(o.chainId ?? 1),
        c = (0, t.isHex)(o.data)
          ? o.data
          : o.data
          ? (0, i.toHex)(Uint8Array.from(o.data))
          : void 0,
        h = o.nonce ? Number(o.nonce) : void 0,
        d = {
          chainId: l,
          data: c,
          nonce: h,
          value: n(o.value),
          gas: n(o.gas ?? o.gasLimit),
        },
        u = Number(a);
      if (0 === u)
        return {
          ...o,
          type: r[u],
          ...d,
          gasPrice: n(o.gasPrice),
          accessList: void 0,
          maxFeePerGas: void 0,
          maxPriorityFeePerGas: void 0,
        };
      if (1 === u)
        return {
          ...o,
          type: r[u],
          ...d,
          gasPrice: n(o.gasPrice),
          accessList: s,
          maxFeePerGas: void 0,
          maxPriorityFeePerGas: void 0,
        };
      if (2 === u)
        return {
          ...o,
          type: r[u],
          ...d,
          nonce: h,
          accessList: s,
          maxFeePerGas: n(o.maxFeePerGas),
          maxPriorityFeePerGas: n(o.maxPriorityFeePerGas),
          gasPrice: void 0,
          maxFeePerBlobGas: void 0,
        };
      throw Error(`Unsupported transaction type: ${a}`);
    }
    e.s(
      [
        "STRING_TO_NUMBER_TXN_TYPE",
        () => s,
        "toBigIntIfDefined",
        () => n,
        "toViemTransactionSerializable",
        () => a,
      ],
      410539
    );
    let o = "tempo",
      l = (e, t) => {
        if (void 0 === e) return;
        let i = Number(e);
        if (!Number.isSafeInteger(i) || i < 0)
          throw Error(`Invalid Tempo ${t}: ${String(e)}`);
        return i;
      };
    function c(e) {
      if (!e || "object" != typeof e) return !1;
      let t = e.type;
      if (118 !== t && ("string" != typeof t || t.toLowerCase() !== o))
        return !1;
      let i = e.calls;
      return Array.isArray(i) && i.length > 0;
    }
    function h(e) {
      let t, i;
      if ("string" == typeof e)
        try {
          t = JSON.parse(e);
        } catch (t) {
          let e = t instanceof Error ? t.message : String(t);
          throw Error(`Invalid Tempo transaction JSON: ${e}`);
        }
      else t = e;
      if (
        (t.accessList && Array.isArray(t.accessList)
          ? (i = t.accessList.map((e) =>
              Array.isArray(e) ? { address: e[0], storageKeys: e[1] } : e
            ))
          : t.accessList &&
            (i = Object.entries(t.accessList).map((e) => ({
              address: e[0],
              storageKeys: e[1],
            }))),
        void 0 === t.chainId || null === t.chainId)
      )
        throw Error("Tempo transactions require a chainId");
      let r = Number(t.chainId);
      if (!Number.isSafeInteger(r) || r <= 0)
        throw Error(`Invalid Tempo chainId: ${String(t.chainId)}`);
      let s = l(t.nonce, "nonce");
      if (!Array.isArray(t.calls) || 0 === t.calls.length)
        throw Error("Tempo transactions require at least one call");
      let a = t.calls.map((e) => ({
        to: e.to,
        data: e.data,
        value: n(e.value),
      }));
      return {
        type: o,
        chainId: r,
        from: t.from,
        nonce: s,
        gas: n(t.gasLimit),
        maxFeePerGas: n(t.maxFeePerGas),
        maxPriorityFeePerGas: n(t.maxPriorityFeePerGas),
        calls: a,
        feeToken: t.feeToken,
        nonceKey: n(t.nonceKey),
        validBefore: l(t.validBefore, "validBefore"),
        validAfter: l(t.validAfter, "validAfter"),
        accessList: i,
      };
    }
    function d(e, t) {
      let { chain: i, gas: r, ...s } = e;
      return { ...s, ...(void 0 !== r && void 0 === t ? { gasLimit: r } : {}) };
    }
    e.s(
      [
        "TEMPO_TXN_TYPE_NUMBER",
        () => 118,
        "isTempoTransactionRequest",
        () => c,
        "normalizeViemPreparedTempoTransaction",
        () => d,
        "toViemTempoTransactionSerializable",
        () => h,
      ],
      27888
    );
  },
  946165,
  (e) => {
    "use strict";
    function t(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var r in i) "__proto__" !== r && (e[r] = i[r]);
      }
      return e;
    }
    var i = (function e(i, r) {
      function s(e, s, n) {
        if ("u" > typeof document) {
          "number" == typeof (n = t({}, r, n)).expires &&
            (n.expires = new Date(Date.now() + 864e5 * n.expires)),
            n.expires && (n.expires = n.expires.toUTCString()),
            (e = encodeURIComponent(e)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape));
          var a = "";
          for (var o in n)
            n[o] &&
              ((a += "; " + o), !0 !== n[o] && (a += "=" + n[o].split(";")[0]));
          return (document.cookie = e + "=" + i.write(s, e) + a);
        }
      }
      return Object.create(
        {
          set: s,
          get: function (e) {
            if ("u" > typeof document && (!arguments.length || e)) {
              for (
                var t = document.cookie ? document.cookie.split("; ") : [],
                  r = {},
                  s = 0;
                s < t.length;
                s++
              ) {
                var n = t[s].split("="),
                  a = n.slice(1).join("=");
                try {
                  var o = decodeURIComponent(n[0]);
                  if ((o in r || (r[o] = i.read(a, o)), e === o)) break;
                } catch {}
              }
              return e ? r[e] : r;
            }
          },
          remove: function (e, i) {
            s(e, "", t({}, i, { expires: -1 }));
          },
          withAttributes: function (i) {
            return e(this.converter, t({}, this.attributes, i));
          },
          withConverter: function (i) {
            return e(t({}, this.converter, i), this.attributes);
          },
        },
        {
          attributes: { value: Object.freeze(r) },
          converter: { value: Object.freeze(i) },
        }
      );
    })(
      {
        read: function (e) {
          return (
            '"' === e[0] && (e = e.slice(1, -1)),
            e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
          );
        },
        write: function (e) {
          return encodeURIComponent(e).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          );
        },
      },
      { path: "/" }
    );
    e.s(["default", () => i]);
  },
  250763,
  963109,
  560184,
  604136,
  933187,
  611215,
  686889,
  103005,
  928620,
  988696,
  137649,
  (e) => {
    "use strict";
    var t = e.i(715949);
    e.i(95351), e.s([], 250763);
    var i = e.i(80421),
      r = e.i(278510);
    let s = r.default.getRandomValues.bind(r.default);
    function n(e) {
      switch (e) {
        case "A128GCM":
        case "A128GCMKW":
        case "A192GCM":
        case "A192GCMKW":
        case "A256GCM":
        case "A256GCMKW":
          return 96;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return 128;
        default:
          throw new t.JOSENotSupported(`Unsupported JWE Algorithm: ${e}`);
      }
    }
    e.s(["default", 0, s], 963109),
      e.s(
        [
          "bitLength",
          () => n,
          "default",
          0,
          (e) => s(new Uint8Array(n(e) >> 3)),
        ],
        560184
      );
    let a = (e, i) => {
      if (i.length << 3 !== n(e))
        throw new t.JWEInvalid("Invalid Initialization Vector length");
    };
    e.s(["default", 0, a], 604136);
    let o = (e, i) => {
      let r = e.byteLength << 3;
      if (r !== i)
        throw new t.JWEInvalid(
          `Invalid Content Encryption Key length. Expected ${i} bits, got ${r} bits`
        );
    };
    function l(e, t = "algorithm.name") {
      return TypeError(
        `CryptoKey does not support this operation, its ${t} must be ${e}`
      );
    }
    function c(e, t) {
      return e.name === t;
    }
    function h(e) {
      return parseInt(e.name.slice(4), 10);
    }
    function d(e, t) {
      if (t.length && !t.some((t) => e.usages.includes(t))) {
        let e =
          "CryptoKey does not support this operation, its usages must include ";
        if (t.length > 2) {
          let i = t.pop();
          e += `one of ${t.join(", ")}, or ${i}.`;
        } else
          2 === t.length
            ? (e += `one of ${t[0]} or ${t[1]}.`)
            : (e += `${t[0]}.`);
        throw TypeError(e);
      }
    }
    function u(e, t, ...i) {
      switch (t) {
        case "HS256":
        case "HS384":
        case "HS512": {
          if (!c(e.algorithm, "HMAC")) throw l("HMAC");
          let i = parseInt(t.slice(2), 10);
          if (h(e.algorithm.hash) !== i) throw l(`SHA-${i}`, "algorithm.hash");
          break;
        }
        case "RS256":
        case "RS384":
        case "RS512": {
          if (!c(e.algorithm, "RSASSA-PKCS1-v1_5"))
            throw l("RSASSA-PKCS1-v1_5");
          let i = parseInt(t.slice(2), 10);
          if (h(e.algorithm.hash) !== i) throw l(`SHA-${i}`, "algorithm.hash");
          break;
        }
        case "PS256":
        case "PS384":
        case "PS512": {
          if (!c(e.algorithm, "RSA-PSS")) throw l("RSA-PSS");
          let i = parseInt(t.slice(2), 10);
          if (h(e.algorithm.hash) !== i) throw l(`SHA-${i}`, "algorithm.hash");
          break;
        }
        case "EdDSA":
          if ("Ed25519" !== e.algorithm.name && "Ed448" !== e.algorithm.name)
            throw l("Ed25519 or Ed448");
          break;
        case "ES256":
        case "ES384":
        case "ES512": {
          if (!c(e.algorithm, "ECDSA")) throw l("ECDSA");
          let i = (function (e) {
            switch (e) {
              case "ES256":
                return "P-256";
              case "ES384":
                return "P-384";
              case "ES512":
                return "P-521";
              default:
                throw Error("unreachable");
            }
          })(t);
          if (e.algorithm.namedCurve !== i) throw l(i, "algorithm.namedCurve");
          break;
        }
        default:
          throw TypeError("CryptoKey does not support this operation");
      }
      d(e, i);
    }
    function p(e, t, ...i) {
      switch (t) {
        case "A128GCM":
        case "A192GCM":
        case "A256GCM": {
          if (!c(e.algorithm, "AES-GCM")) throw l("AES-GCM");
          let i = parseInt(t.slice(1, 4), 10);
          if (e.algorithm.length !== i) throw l(i, "algorithm.length");
          break;
        }
        case "A128KW":
        case "A192KW":
        case "A256KW": {
          if (!c(e.algorithm, "AES-KW")) throw l("AES-KW");
          let i = parseInt(t.slice(1, 4), 10);
          if (e.algorithm.length !== i) throw l(i, "algorithm.length");
          break;
        }
        case "ECDH":
          switch (e.algorithm.name) {
            case "ECDH":
            case "X25519":
            case "X448":
              break;
            default:
              throw l("ECDH, X25519, or X448");
          }
          break;
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
          if (!c(e.algorithm, "PBKDF2")) throw l("PBKDF2");
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512": {
          if (!c(e.algorithm, "RSA-OAEP")) throw l("RSA-OAEP");
          let i = parseInt(t.slice(9), 10) || 1;
          if (h(e.algorithm.hash) !== i) throw l(`SHA-${i}`, "algorithm.hash");
          break;
        }
        default:
          throw TypeError("CryptoKey does not support this operation");
      }
      d(e, i);
    }
    function f(e, t, ...i) {
      if (i.length > 2) {
        let t = i.pop();
        e += `one of type ${i.join(", ")}, or ${t}.`;
      } else
        2 === i.length
          ? (e += `one of type ${i[0]} or ${i[1]}.`)
          : (e += `of type ${i[0]}.`);
      return (
        null == t
          ? (e += ` Received ${t}`)
          : "function" == typeof t && t.name
          ? (e += ` Received function ${t.name}`)
          : "object" == typeof t &&
            null != t &&
            t.constructor &&
            t.constructor.name &&
            (e += ` Received an instance of ${t.constructor.name}`),
        e
      );
    }
    e.s(["default", 0, o], 933187),
      e.s(["checkEncCryptoKey", () => p, "checkSigCryptoKey", () => u], 611215);
    let g = (e, ...t) => f("Key must be ", e, ...t);
    function y(e, t, ...i) {
      return f(`Key for the ${e} algorithm must be `, t, ...i);
    }
    e.s(["default", 0, g, "withAlg", () => y], 686889);
    let m = ["CryptoKey"];
    async function w(e, s, n, a, o, l) {
      let c, h;
      if (!(s instanceof Uint8Array)) throw TypeError(g(s, "Uint8Array"));
      let d = parseInt(e.slice(1, 4), 10),
        u = await r.default.subtle.importKey(
          "raw",
          s.subarray(d >> 3),
          "AES-CBC",
          !1,
          ["decrypt"]
        ),
        p = await r.default.subtle.importKey(
          "raw",
          s.subarray(0, d >> 3),
          { hash: `SHA-${d << 1}`, name: "HMAC" },
          !1,
          ["sign"]
        ),
        f = (0, i.concat)(l, a, n, (0, i.uint64be)(l.length << 3)),
        y = new Uint8Array(
          (await r.default.subtle.sign("HMAC", p, f)).slice(0, d >> 3)
        );
      try {
        c = ((e, t) => {
          if (!(e instanceof Uint8Array))
            throw TypeError("First argument must be a buffer");
          if (!(t instanceof Uint8Array))
            throw TypeError("Second argument must be a buffer");
          if (e.length !== t.length)
            throw TypeError("Input buffers must have the same length");
          let i = e.length,
            r = 0,
            s = -1;
          for (; ++s < i; ) r |= e[s] ^ t[s];
          return 0 === r;
        })(o, y);
      } catch (e) {}
      if (!c) throw new t.JWEDecryptionFailed();
      try {
        h = new Uint8Array(
          await r.default.subtle.decrypt({ iv: a, name: "AES-CBC" }, u, n)
        );
      } catch (e) {}
      if (!h) throw new t.JWEDecryptionFailed();
      return h;
    }
    async function b(e, s, n, a, o, l) {
      let c;
      s instanceof Uint8Array
        ? (c = await r.default.subtle.importKey("raw", s, "AES-GCM", !1, [
            "decrypt",
          ]))
        : (p(s, e, "decrypt"), (c = s));
      try {
        return new Uint8Array(
          await r.default.subtle.decrypt(
            { additionalData: l, iv: a, name: "AES-GCM", tagLength: 128 },
            c,
            (0, i.concat)(n, o)
          )
        );
      } catch (e) {
        throw new t.JWEDecryptionFailed();
      }
    }
    e.s(["default", 0, (e) => (0, r.isCryptoKey)(e), "types", 0, m], 103005);
    let v = async (e, i, s, n, l, c) => {
      if (!(0, r.isCryptoKey)(i) && !(i instanceof Uint8Array))
        throw TypeError(g(i, ...m, "Uint8Array"));
      switch ((a(e, n), e)) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return (
            i instanceof Uint8Array && o(i, parseInt(e.slice(-3), 10)),
            w(e, i, s, n, l, c)
          );
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return (
            i instanceof Uint8Array && o(i, parseInt(e.slice(1, 4), 10)),
            b(e, i, s, n, l, c)
          );
        default:
          throw new t.JOSENotSupported(
            "Unsupported JWE Content Encryption Algorithm"
          );
      }
    };
    e.s(["default", 0, v], 928620);
    let E = async () => {
        throw new t.JOSENotSupported(
          'JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.'
        );
      },
      _ = async () => {
        throw new t.JOSENotSupported(
          'JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.'
        );
      };
    e.s(["deflate", 0, _, "inflate", 0, E], 988696),
      e.s(
        [
          "default",
          0,
          (...e) => {
            let t,
              i = e.filter(Boolean);
            if (0 === i.length || 1 === i.length) return !0;
            for (let e of i) {
              let i = Object.keys(e);
              if (!t || 0 === t.size) {
                t = new Set(i);
                continue;
              }
              for (let e of i) {
                if (t.has(e)) return !1;
                t.add(e);
              }
            }
            return !0;
          },
        ],
        137649
      );
  },
  698039,
  279313,
  32159,
  321103,
  53560,
  170446,
  293417,
  761242,
  242632,
  316051,
  482449,
  546731,
  28609,
  956015,
  179347,
  126091,
  435850,
  270553,
  912702,
  852708,
  798065,
  950653,
  52851,
  855602,
  (e) => {
    "use strict";
    var t = e.i(653022),
      i = e.i(928620),
      r = e.i(988696),
      s = e.i(715949),
      n = e.i(137649),
      a = e.i(404340);
    let o = [{ hash: "SHA-256", name: "HMAC" }, !0, ["sign"]];
    var l = e.i(278510),
      c = e.i(611215),
      h = e.i(686889),
      d = e.i(103005);
    function u(e, t) {
      if (e.algorithm.length !== parseInt(t.slice(1, 4), 10))
        throw TypeError(`Invalid key size for alg: ${t}`);
    }
    function p(e, t, i) {
      if ((0, l.isCryptoKey)(e)) return (0, c.checkEncCryptoKey)(e, t, i), e;
      if (e instanceof Uint8Array)
        return l.default.subtle.importKey("raw", e, "AES-KW", !0, [i]);
      throw TypeError((0, h.default)(e, ...d.types, "Uint8Array"));
    }
    let f = async (e, t, i) => {
        let r = await p(t, e, "wrapKey");
        u(r, e);
        let s = await l.default.subtle.importKey("raw", i, ...o);
        return new Uint8Array(
          await l.default.subtle.wrapKey("raw", s, r, "AES-KW")
        );
      },
      g = async (e, t, i) => {
        let r = await p(t, e, "unwrapKey");
        u(r, e);
        let s = await l.default.subtle.unwrapKey("raw", i, r, "AES-KW", ...o);
        return new Uint8Array(await l.default.subtle.exportKey("raw", s));
      };
    var y = e.i(80421);
    async function m(e, t, i, r, s = new Uint8Array(0), n = new Uint8Array(0)) {
      let a;
      if (!(0, l.isCryptoKey)(e))
        throw TypeError((0, h.default)(e, ...d.types));
      if (((0, c.checkEncCryptoKey)(e, "ECDH"), !(0, l.isCryptoKey)(t)))
        throw TypeError((0, h.default)(t, ...d.types));
      (0, c.checkEncCryptoKey)(t, "ECDH", "deriveBits");
      let o = (0, y.concat)(
        (0, y.lengthAndInput)(y.encoder.encode(i)),
        (0, y.lengthAndInput)(s),
        (0, y.lengthAndInput)(n),
        (0, y.uint32be)(r)
      );
      a =
        "X25519" === e.algorithm.name
          ? 256
          : "X448" === e.algorithm.name
          ? 448
          : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
      let u = new Uint8Array(
        await l.default.subtle.deriveBits(
          { name: e.algorithm.name, public: e },
          t,
          a
        )
      );
      return (0, y.concatKdf)(u, r, o);
    }
    async function w(e) {
      if (!(0, l.isCryptoKey)(e))
        throw TypeError((0, h.default)(e, ...d.types));
      return l.default.subtle.generateKey(e.algorithm, !0, ["deriveBits"]);
    }
    function b(e) {
      if (!(0, l.isCryptoKey)(e))
        throw TypeError((0, h.default)(e, ...d.types));
      return (
        ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) ||
        "X25519" === e.algorithm.name ||
        "X448" === e.algorithm.name
      );
    }
    var v = e.i(963109);
    async function E(e, t, i, r) {
      if (!(e instanceof Uint8Array) || e.length < 8)
        throw new s.JWEInvalid("PBES2 Salt Input must be 8 or more octets");
      let n = (0, y.p2s)(t, e),
        a = parseInt(t.slice(13, 16), 10),
        o = {
          hash: `SHA-${t.slice(8, 11)}`,
          iterations: i,
          name: "PBKDF2",
          salt: n,
        },
        u = await (function (e, t) {
          if (e instanceof Uint8Array)
            return l.default.subtle.importKey("raw", e, "PBKDF2", !1, [
              "deriveBits",
            ]);
          if ((0, l.isCryptoKey)(e))
            return (0, c.checkEncCryptoKey)(e, t, "deriveBits", "deriveKey"), e;
          throw TypeError((0, h.default)(e, ...d.types, "Uint8Array"));
        })(r, t);
      if (u.usages.includes("deriveBits"))
        return new Uint8Array(await l.default.subtle.deriveBits(o, u, a));
      if (u.usages.includes("deriveKey"))
        return l.default.subtle.deriveKey(
          o,
          u,
          { length: a, name: "AES-KW" },
          !1,
          ["wrapKey", "unwrapKey"]
        );
      throw TypeError(
        'PBKDF2 key "usages" must include "deriveBits" or "deriveKey"'
      );
    }
    let _ = async (
        e,
        i,
        r,
        s = 2048,
        n = (0, v.default)(new Uint8Array(16))
      ) => {
        let a = await E(n, e, s, i);
        return {
          encryptedKey: await f(e.slice(-6), a, r),
          p2c: s,
          p2s: (0, t.encode)(n),
        };
      },
      I = async (e, t, i, r, s) => {
        let n = await E(s, e, r, t);
        return g(e.slice(-6), n, i);
      };
    function S(e) {
      switch (e) {
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          return "RSA-OAEP";
        default:
          throw new s.JOSENotSupported(
            `alg ${e} is not supported either by JOSE or your javascript runtime`
          );
      }
    }
    let A = (e, t) => {
        if (e.startsWith("RS") || e.startsWith("PS")) {
          let { modulusLength: i } = t.algorithm;
          if ("number" != typeof i || i < 2048)
            throw TypeError(
              `${e} requires key modulusLength to be 2048 bits or larger`
            );
        }
      },
      P = async (e, t, i) => {
        if (!(0, l.isCryptoKey)(t))
          throw TypeError((0, h.default)(t, ...d.types));
        if (
          ((0, c.checkEncCryptoKey)(t, e, "encrypt", "wrapKey"),
          A(e, t),
          t.usages.includes("encrypt"))
        )
          return new Uint8Array(await l.default.subtle.encrypt(S(e), t, i));
        if (t.usages.includes("wrapKey")) {
          let r = await l.default.subtle.importKey("raw", i, ...o);
          return new Uint8Array(
            await l.default.subtle.wrapKey("raw", r, t, S(e))
          );
        }
        throw TypeError(
          'RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation'
        );
      },
      C = async (e, t, i) => {
        if (!(0, l.isCryptoKey)(t))
          throw TypeError((0, h.default)(t, ...d.types));
        if (
          ((0, c.checkEncCryptoKey)(t, e, "decrypt", "unwrapKey"),
          A(e, t),
          t.usages.includes("decrypt"))
        )
          return new Uint8Array(await l.default.subtle.decrypt(S(e), t, i));
        if (t.usages.includes("unwrapKey")) {
          let r = await l.default.subtle.unwrapKey("raw", i, t, S(e), ...o);
          return new Uint8Array(await l.default.subtle.exportKey("raw", r));
        }
        throw TypeError(
          'RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation'
        );
      };
    function x(e) {
      switch (e) {
        case "A128GCM":
          return 128;
        case "A192GCM":
          return 192;
        case "A256GCM":
        case "A128CBC-HS256":
          return 256;
        case "A192CBC-HS384":
          return 384;
        case "A256CBC-HS512":
          return 512;
        default:
          throw new s.JOSENotSupported(`Unsupported JWE Algorithm: ${e}`);
      }
    }
    let k = (e) => (0, v.default)(new Uint8Array(x(e) >> 3)),
      T = (e, t) => {
        let i = (e.match(/.{1,64}/g) || []).join("\n");
        return `-----BEGIN ${t}-----
${i}
-----END ${t}-----`;
      },
      O = async (e, i, r) => {
        if (!(0, l.isCryptoKey)(r))
          throw TypeError((0, h.default)(r, ...d.types));
        if (!r.extractable) throw TypeError("CryptoKey is not extractable");
        if (r.type !== e) throw TypeError(`key is not a ${e} key`);
        return T(
          (0, t.encodeBase64)(
            new Uint8Array(await l.default.subtle.exportKey(i, r))
          ),
          `${e.toUpperCase()} KEY`
        );
      },
      R = (e, t, i = 0) => {
        0 === i && (t.unshift(t.length), t.unshift(6));
        let r = e.indexOf(t[0], i);
        if (-1 === r) return !1;
        let s = e.subarray(r, r + t.length);
        return (
          s.length === t.length &&
          (s.every((e, i) => e === t[i]) || R(e, t, r + 1))
        );
      },
      N = (e) => {
        switch (!0) {
          case R(e, [42, 134, 72, 206, 61, 3, 1, 7]):
            return "P-256";
          case R(e, [43, 129, 4, 0, 34]):
            return "P-384";
          case R(e, [43, 129, 4, 0, 35]):
            return "P-521";
          case R(e, [43, 101, 110]):
            return "X25519";
          case R(e, [43, 101, 111]):
            return "X448";
          case R(e, [43, 101, 112]):
            return "Ed25519";
          case R(e, [43, 101, 113]):
            return "Ed448";
          default:
            throw new s.JOSENotSupported(
              "Invalid or unsupported EC Key Curve or OKP Key Sub Type"
            );
        }
      },
      j = async (e, t, i, r, n) => {
        var a;
        let o,
          c,
          h = new Uint8Array(
            atob(i.replace(e, ""))
              .split("")
              .map((e) => e.charCodeAt(0))
          ),
          d = "spki" === t;
        switch (r) {
          case "PS256":
          case "PS384":
          case "PS512":
            (o = { name: "RSA-PSS", hash: `SHA-${r.slice(-3)}` }),
              (c = d ? ["verify"] : ["sign"]);
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            (o = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${r.slice(-3)}` }),
              (c = d ? ["verify"] : ["sign"]);
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            (o = {
              name: "RSA-OAEP",
              hash: `SHA-${parseInt(r.slice(-3), 10) || 1}`,
            }),
              (c = d ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"]);
            break;
          case "ES256":
            (o = { name: "ECDSA", namedCurve: "P-256" }),
              (c = d ? ["verify"] : ["sign"]);
            break;
          case "ES384":
            (o = { name: "ECDSA", namedCurve: "P-384" }),
              (c = d ? ["verify"] : ["sign"]);
            break;
          case "ES512":
            (o = { name: "ECDSA", namedCurve: "P-521" }),
              (c = d ? ["verify"] : ["sign"]);
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW": {
            let e = N(h);
            (o = e.startsWith("P-")
              ? { name: "ECDH", namedCurve: e }
              : { name: e }),
              (c = d ? [] : ["deriveBits"]);
            break;
          }
          case "EdDSA":
            (o = { name: N(h) }), (c = d ? ["verify"] : ["sign"]);
            break;
          default:
            throw new s.JOSENotSupported(
              'Invalid or unsupported "alg" (Algorithm) value'
            );
        }
        return l.default.subtle.importKey(
          t,
          h,
          o,
          null != (a = null == n ? void 0 : n.extractable) && a,
          c
        );
      };
    function D(e) {
      let t = [],
        i = 0;
      for (; i < e.length; ) {
        let r = M(e.subarray(i));
        t.push(r), (i += r.byteLength);
      }
      return t;
    }
    function M(e) {
      let t = 0,
        i = 31 & e[0];
      if ((t++, 31 === i)) {
        for (i = 0; e[t] >= 128; ) (i = 128 * i + e[t] - 128), t++;
        (i = 128 * i + e[t] - 128), t++;
      }
      let r = 0;
      if (e[t] < 128) (r = e[t]), t++;
      else if (128 === r) {
        for (r = 0; 0 !== e[t + r] || 0 !== e[t + r + 1]; ) {
          if (r > e.byteLength)
            throw TypeError("invalid indefinite form length");
          r++;
        }
        let i = t + r + 2;
        return {
          byteLength: i,
          contents: e.subarray(t, t + r),
          raw: e.subarray(0, i),
        };
      } else {
        let i = 127 & e[t];
        t++, (r = 0);
        for (let s = 0; s < i; s++) (r = 256 * r + e[t]), t++;
      }
      let s = t + r;
      return {
        byteLength: s,
        contents: e.subarray(t, s),
        raw: e.subarray(0, s),
      };
    }
    let U = async (e) => {
      var i, r;
      if (!e.alg)
        throw TypeError(
          '"alg" argument is required when "jwk.alg" is not present'
        );
      let { algorithm: n, keyUsages: a } = (function (e) {
          let t, i;
          switch (e.kty) {
            case "oct":
              switch (e.alg) {
                case "HS256":
                case "HS384":
                case "HS512":
                  (t = { name: "HMAC", hash: `SHA-${e.alg.slice(-3)}` }),
                    (i = ["sign", "verify"]);
                  break;
                case "A128CBC-HS256":
                case "A192CBC-HS384":
                case "A256CBC-HS512":
                  throw new s.JOSENotSupported(
                    `${e.alg} keys cannot be imported as CryptoKey instances`
                  );
                case "A128GCM":
                case "A192GCM":
                case "A256GCM":
                case "A128GCMKW":
                case "A192GCMKW":
                case "A256GCMKW":
                  (t = { name: "AES-GCM" }), (i = ["encrypt", "decrypt"]);
                  break;
                case "A128KW":
                case "A192KW":
                case "A256KW":
                  (t = { name: "AES-KW" }), (i = ["wrapKey", "unwrapKey"]);
                  break;
                case "PBES2-HS256+A128KW":
                case "PBES2-HS384+A192KW":
                case "PBES2-HS512+A256KW":
                  (t = { name: "PBKDF2" }), (i = ["deriveBits"]);
                  break;
                default:
                  throw new s.JOSENotSupported(
                    'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                  );
              }
              break;
            case "RSA":
              switch (e.alg) {
                case "PS256":
                case "PS384":
                case "PS512":
                  (t = { name: "RSA-PSS", hash: `SHA-${e.alg.slice(-3)}` }),
                    (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "RS256":
                case "RS384":
                case "RS512":
                  (t = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: `SHA-${e.alg.slice(-3)}`,
                  }),
                    (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "RSA-OAEP":
                case "RSA-OAEP-256":
                case "RSA-OAEP-384":
                case "RSA-OAEP-512":
                  (t = {
                    name: "RSA-OAEP",
                    hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`,
                  }),
                    (i = e.d
                      ? ["decrypt", "unwrapKey"]
                      : ["encrypt", "wrapKey"]);
                  break;
                default:
                  throw new s.JOSENotSupported(
                    'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                  );
              }
              break;
            case "EC":
              switch (e.alg) {
                case "ES256":
                  (t = { name: "ECDSA", namedCurve: "P-256" }),
                    (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "ES384":
                  (t = { name: "ECDSA", namedCurve: "P-384" }),
                    (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "ES512":
                  (t = { name: "ECDSA", namedCurve: "P-521" }),
                    (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "ECDH-ES":
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW":
                  (t = { name: "ECDH", namedCurve: e.crv }),
                    (i = e.d ? ["deriveBits"] : []);
                  break;
                default:
                  throw new s.JOSENotSupported(
                    'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                  );
              }
              break;
            case "OKP":
              switch (e.alg) {
                case "EdDSA":
                  (t = { name: e.crv }), (i = e.d ? ["sign"] : ["verify"]);
                  break;
                case "ECDH-ES":
                case "ECDH-ES+A128KW":
                case "ECDH-ES+A192KW":
                case "ECDH-ES+A256KW":
                  (t = { name: e.crv }), (i = e.d ? ["deriveBits"] : []);
                  break;
                default:
                  throw new s.JOSENotSupported(
                    'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
                  );
              }
              break;
            default:
              throw new s.JOSENotSupported(
                'Invalid or unsupported JWK "kty" (Key Type) Parameter value'
              );
          }
          return { algorithm: t, keyUsages: i };
        })(e),
        o = [n, null != (i = e.ext) && i, null != (r = e.key_ops) ? r : a];
      if ("PBKDF2" === n.name)
        return l.default.subtle.importKey("raw", (0, t.decode)(e.k), ...o);
      let c = { ...e };
      return (
        delete c.alg, delete c.use, l.default.subtle.importKey("jwk", c, ...o)
      );
    };
    async function L(e, t, i) {
      if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----"))
        throw TypeError('"spki" must be SPKI formatted string');
      return j(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, i);
    }
    async function W(e, i, r) {
      let s;
      if (
        "string" != typeof e ||
        0 !== e.indexOf("-----BEGIN CERTIFICATE-----")
      )
        throw TypeError('"x509" must be X.509 formatted string');
      try {
        let i, r;
        (r = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "")),
          (s = T(
            ((i = D(D(M((0, t.decodeBase64)(r)).contents)[0].contents)),
            (0, t.encodeBase64)(i[160 === i[0].raw[0] ? 6 : 5].raw)),
            "PUBLIC KEY"
          ));
      } catch (e) {
        throw TypeError("Failed to parse the X.509 certificate", { cause: e });
      }
      return j(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", s, i, r);
    }
    async function B(e, t, i) {
      if (
        "string" != typeof e ||
        0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")
      )
        throw TypeError('"pkcs8" must be PKCS#8 formatted string');
      return j(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, i);
    }
    async function K(e, i, r) {
      var n;
      if (!(0, a.default)(e)) throw TypeError("JWK must be an object");
      switch ((i || (i = e.alg), e.kty)) {
        case "oct":
          if ("string" != typeof e.k || !e.k)
            throw TypeError('missing "k" (Key Value) Parameter value');
          if ((null != r || (r = !0 !== e.ext), r))
            return U({ ...e, alg: i, ext: null != (n = e.ext) && n });
          return (0, t.decode)(e.k);
        case "RSA":
          if (void 0 !== e.oth)
            throw new s.JOSENotSupported(
              'RSA JWK "oth" (Other Primes Info) Parameter value is not supported'
            );
        case "EC":
        case "OKP":
          return U({ ...e, alg: i });
        default:
          throw new s.JOSENotSupported(
            'Unsupported "kty" (Key Type) Parameter value'
          );
      }
    }
    e.s(
      [
        "importJWK",
        () => K,
        "importPKCS8",
        () => B,
        "importSPKI",
        () => L,
        "importX509",
        () => W,
      ],
      279313
    );
    let q = (e, t, i) => {
      if (
        e.startsWith("HS") ||
        "dir" === e ||
        e.startsWith("PBES2") ||
        /^A\d{3}(?:GCM)?KW$/.test(e)
      ) {
        if (!(t instanceof Uint8Array)) {
          if (!(0, d.default)(t))
            throw TypeError((0, h.withAlg)(e, t, ...d.types, "Uint8Array"));
          if ("secret" !== t.type)
            throw TypeError(
              `${d.types.join(
                " or "
              )} instances for symmetric algorithms must be of type "secret"`
            );
        }
      } else {
        if (!(0, d.default)(t))
          throw TypeError((0, h.withAlg)(e, t, ...d.types));
        if ("secret" === t.type)
          throw TypeError(
            `${d.types.join(
              " or "
            )} instances for asymmetric algorithms must not be of type "secret"`
          );
        if ("sign" === i && "public" === t.type)
          throw TypeError(
            `${d.types.join(
              " or "
            )} instances for asymmetric algorithm signing must be of type "private"`
          );
        if ("decrypt" === i && "public" === t.type)
          throw TypeError(
            `${d.types.join(
              " or "
            )} instances for asymmetric algorithm decryption must be of type "private"`
          );
        if (t.algorithm && "verify" === i && "private" === t.type)
          throw TypeError(
            `${d.types.join(
              " or "
            )} instances for asymmetric algorithm verifying must be of type "public"`
          );
        if (t.algorithm && "encrypt" === i && "private" === t.type)
          throw TypeError(
            `${d.types.join(
              " or "
            )} instances for asymmetric algorithm encryption must be of type "public"`
          );
      }
    };
    var H = e.i(604136),
      $ = e.i(933187);
    async function J(e, t, i, r, s) {
      if (!(i instanceof Uint8Array))
        throw TypeError((0, h.default)(i, "Uint8Array"));
      let n = parseInt(e.slice(1, 4), 10),
        a = await l.default.subtle.importKey(
          "raw",
          i.subarray(n >> 3),
          "AES-CBC",
          !1,
          ["encrypt"]
        ),
        o = await l.default.subtle.importKey(
          "raw",
          i.subarray(0, n >> 3),
          { hash: `SHA-${n << 1}`, name: "HMAC" },
          !1,
          ["sign"]
        ),
        c = new Uint8Array(
          await l.default.subtle.encrypt({ iv: r, name: "AES-CBC" }, a, t)
        ),
        d = (0, y.concat)(s, r, c, (0, y.uint64be)(s.length << 3));
      return {
        ciphertext: c,
        tag: new Uint8Array(
          (await l.default.subtle.sign("HMAC", o, d)).slice(0, n >> 3)
        ),
      };
    }
    async function z(e, t, i, r, s) {
      let n;
      i instanceof Uint8Array
        ? (n = await l.default.subtle.importKey("raw", i, "AES-GCM", !1, [
            "encrypt",
          ]))
        : ((0, c.checkEncCryptoKey)(i, e, "encrypt"), (n = i));
      let a = new Uint8Array(
          await l.default.subtle.encrypt(
            { additionalData: s, iv: r, name: "AES-GCM", tagLength: 128 },
            n,
            t
          )
        ),
        o = a.slice(-16);
      return { ciphertext: a.slice(0, -16), tag: o };
    }
    let F = async (e, t, i, r, n) => {
      if (!(0, l.isCryptoKey)(i) && !(i instanceof Uint8Array))
        throw TypeError((0, h.default)(i, ...d.types, "Uint8Array"));
      switch (((0, H.default)(e, r), e)) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return (
            i instanceof Uint8Array &&
              (0, $.default)(i, parseInt(e.slice(-3), 10)),
            J(e, t, i, r, n)
          );
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return (
            i instanceof Uint8Array &&
              (0, $.default)(i, parseInt(e.slice(1, 4), 10)),
            z(e, t, i, r, n)
          );
        default:
          throw new s.JOSENotSupported(
            "Unsupported JWE Content Encryption Algorithm"
          );
      }
    };
    var V = e.i(560184);
    async function G(e, i, r, s) {
      let n = e.slice(0, 7);
      s || (s = (0, V.default)(n));
      let { ciphertext: a, tag: o } = await F(n, r, i, s, new Uint8Array(0));
      return { encryptedKey: a, iv: (0, t.encode)(s), tag: (0, t.encode)(o) };
    }
    async function Y(e, t, r, s, n) {
      let a = e.slice(0, 7);
      return (0, i.default)(a, t, r, s, n, new Uint8Array(0));
    }
    async function Z(e, i, r, n, o) {
      switch ((q(e, i, "decrypt"), e)) {
        case "dir":
          if (void 0 !== r)
            throw new s.JWEInvalid("Encountered unexpected JWE Encrypted Key");
          return i;
        case "ECDH-ES":
          if (void 0 !== r)
            throw new s.JWEInvalid("Encountered unexpected JWE Encrypted Key");
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          let o, l;
          if (!(0, a.default)(n.epk))
            throw new s.JWEInvalid(
              'JOSE Header "epk" (Ephemeral Public Key) missing or invalid'
            );
          if (!b(i))
            throw new s.JOSENotSupported(
              "ECDH with the provided key is not allowed or not supported by your javascript runtime"
            );
          let c = await K(n.epk, e);
          if (void 0 !== n.apu) {
            if ("string" != typeof n.apu)
              throw new s.JWEInvalid(
                'JOSE Header "apu" (Agreement PartyUInfo) invalid'
              );
            try {
              o = (0, t.decode)(n.apu);
            } catch (e) {
              throw new s.JWEInvalid("Failed to base64url decode the apu");
            }
          }
          if (void 0 !== n.apv) {
            if ("string" != typeof n.apv)
              throw new s.JWEInvalid(
                'JOSE Header "apv" (Agreement PartyVInfo) invalid'
              );
            try {
              l = (0, t.decode)(n.apv);
            } catch (e) {
              throw new s.JWEInvalid("Failed to base64url decode the apv");
            }
          }
          let h = await m(
            c,
            i,
            "ECDH-ES" === e ? n.enc : e,
            "ECDH-ES" === e ? x(n.enc) : parseInt(e.slice(-5, -2), 10),
            o,
            l
          );
          if ("ECDH-ES" === e) return h;
          if (void 0 === r) throw new s.JWEInvalid("JWE Encrypted Key missing");
          return g(e.slice(-6), h, r);
        }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          if (void 0 === r) throw new s.JWEInvalid("JWE Encrypted Key missing");
          return C(e, i, r);
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW": {
          let a;
          if (void 0 === r) throw new s.JWEInvalid("JWE Encrypted Key missing");
          if ("number" != typeof n.p2c)
            throw new s.JWEInvalid(
              'JOSE Header "p2c" (PBES2 Count) missing or invalid'
            );
          let l = (null == o ? void 0 : o.maxPBES2Count) || 1e4;
          if (n.p2c > l)
            throw new s.JWEInvalid(
              'JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds'
            );
          if ("string" != typeof n.p2s)
            throw new s.JWEInvalid(
              'JOSE Header "p2s" (PBES2 Salt) missing or invalid'
            );
          try {
            a = (0, t.decode)(n.p2s);
          } catch (e) {
            throw new s.JWEInvalid("Failed to base64url decode the p2s");
          }
          return I(e, i, r, n.p2c, a);
        }
        case "A128KW":
        case "A192KW":
        case "A256KW":
          if (void 0 === r) throw new s.JWEInvalid("JWE Encrypted Key missing");
          return g(e, i, r);
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW": {
          let a, o;
          if (void 0 === r) throw new s.JWEInvalid("JWE Encrypted Key missing");
          if ("string" != typeof n.iv)
            throw new s.JWEInvalid(
              'JOSE Header "iv" (Initialization Vector) missing or invalid'
            );
          if ("string" != typeof n.tag)
            throw new s.JWEInvalid(
              'JOSE Header "tag" (Authentication Tag) missing or invalid'
            );
          try {
            a = (0, t.decode)(n.iv);
          } catch (e) {
            throw new s.JWEInvalid("Failed to base64url decode the iv");
          }
          try {
            o = (0, t.decode)(n.tag);
          } catch (e) {
            throw new s.JWEInvalid("Failed to base64url decode the tag");
          }
          return Y(e, i, r, a, o);
        }
        default:
          throw new s.JOSENotSupported(
            'Invalid or unsupported "alg" (JWE Algorithm) header value'
          );
      }
    }
    let Q = function (e, t, i, r, n) {
        let a;
        if (void 0 !== n.crit && void 0 === r.crit)
          throw new e(
            '"crit" (Critical) Header Parameter MUST be integrity protected'
          );
        if (!r || void 0 === r.crit) return new Set();
        if (
          !Array.isArray(r.crit) ||
          0 === r.crit.length ||
          r.crit.some((e) => "string" != typeof e || 0 === e.length)
        )
          throw new e(
            '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present'
          );
        for (let o of ((a =
          void 0 !== i ? new Map([...Object.entries(i), ...t.entries()]) : t),
        r.crit)) {
          if (!a.has(o))
            throw new s.JOSENotSupported(
              `Extension Header Parameter "${o}" is not recognized`
            );
          if (void 0 === n[o])
            throw new e(`Extension Header Parameter "${o}" is missing`);
          if (a.get(o) && void 0 === r[o])
            throw new e(
              `Extension Header Parameter "${o}" MUST be integrity protected`
            );
        }
        return new Set(r.crit);
      },
      X = (e, t) => {
        if (
          void 0 !== t &&
          (!Array.isArray(t) || t.some((e) => "string" != typeof e))
        )
          throw TypeError(`"${e}" option must be an array of strings`);
        if (t) return new Set(t);
      };
    async function ee(e, o, l) {
      var c;
      let h, d, u, p, f, g, m;
      if (!(0, a.default)(e))
        throw new s.JWEInvalid("Flattened JWE must be an object");
      if (
        void 0 === e.protected &&
        void 0 === e.header &&
        void 0 === e.unprotected
      )
        throw new s.JWEInvalid("JOSE Header missing");
      if ("string" != typeof e.iv)
        throw new s.JWEInvalid(
          "JWE Initialization Vector missing or incorrect type"
        );
      if ("string" != typeof e.ciphertext)
        throw new s.JWEInvalid("JWE Ciphertext missing or incorrect type");
      if ("string" != typeof e.tag)
        throw new s.JWEInvalid(
          "JWE Authentication Tag missing or incorrect type"
        );
      if (void 0 !== e.protected && "string" != typeof e.protected)
        throw new s.JWEInvalid("JWE Protected Header incorrect type");
      if (void 0 !== e.encrypted_key && "string" != typeof e.encrypted_key)
        throw new s.JWEInvalid("JWE Encrypted Key incorrect type");
      if (void 0 !== e.aad && "string" != typeof e.aad)
        throw new s.JWEInvalid("JWE AAD incorrect type");
      if (void 0 !== e.header && !(0, a.default)(e.header))
        throw new s.JWEInvalid("JWE Shared Unprotected Header incorrect type");
      if (void 0 !== e.unprotected && !(0, a.default)(e.unprotected))
        throw new s.JWEInvalid(
          "JWE Per-Recipient Unprotected Header incorrect type"
        );
      if (e.protected)
        try {
          let i = (0, t.decode)(e.protected);
          h = JSON.parse(y.decoder.decode(i));
        } catch (e) {
          throw new s.JWEInvalid("JWE Protected Header is invalid");
        }
      if (!(0, n.default)(h, e.header, e.unprotected))
        throw new s.JWEInvalid(
          "JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint"
        );
      let w = { ...h, ...e.header, ...e.unprotected };
      if (
        (Q(s.JWEInvalid, new Map(), null == l ? void 0 : l.crit, h, w),
        void 0 !== w.zip)
      ) {
        if (!h || !h.zip)
          throw new s.JWEInvalid(
            'JWE "zip" (Compression Algorithm) Header MUST be integrity protected'
          );
        if ("DEF" !== w.zip)
          throw new s.JOSENotSupported(
            'Unsupported JWE "zip" (Compression Algorithm) Header Parameter value'
          );
      }
      let { alg: b, enc: v } = w;
      if ("string" != typeof b || !b)
        throw new s.JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
      if ("string" != typeof v || !v)
        throw new s.JWEInvalid(
          "missing JWE Encryption Algorithm (enc) in JWE Header"
        );
      let E = l && X("keyManagementAlgorithms", l.keyManagementAlgorithms),
        _ =
          l && X("contentEncryptionAlgorithms", l.contentEncryptionAlgorithms);
      if (E && !E.has(b))
        throw new s.JOSEAlgNotAllowed(
          '"alg" (Algorithm) Header Parameter not allowed'
        );
      if (_ && !_.has(v))
        throw new s.JOSEAlgNotAllowed(
          '"enc" (Encryption Algorithm) Header Parameter not allowed'
        );
      if (void 0 !== e.encrypted_key)
        try {
          d = (0, t.decode)(e.encrypted_key);
        } catch (e) {
          throw new s.JWEInvalid(
            "Failed to base64url decode the encrypted_key"
          );
        }
      let I = !1;
      "function" == typeof o && ((o = await o(h, e)), (I = !0));
      try {
        u = await Z(b, o, d, w, l);
      } catch (e) {
        if (
          e instanceof TypeError ||
          e instanceof s.JWEInvalid ||
          e instanceof s.JOSENotSupported
        )
          throw e;
        u = k(v);
      }
      try {
        p = (0, t.decode)(e.iv);
      } catch (e) {
        throw new s.JWEInvalid("Failed to base64url decode the iv");
      }
      try {
        f = (0, t.decode)(e.tag);
      } catch (e) {
        throw new s.JWEInvalid("Failed to base64url decode the tag");
      }
      let S = y.encoder.encode(null != (c = e.protected) ? c : "");
      g =
        void 0 !== e.aad
          ? (0, y.concat)(S, y.encoder.encode("."), y.encoder.encode(e.aad))
          : S;
      try {
        m = (0, t.decode)(e.ciphertext);
      } catch (e) {
        throw new s.JWEInvalid("Failed to base64url decode the ciphertext");
      }
      let A = await (0, i.default)(v, u, m, p, f, g);
      "DEF" === w.zip &&
        (A = await ((null == l ? void 0 : l.inflateRaw) || r.inflate)(A));
      let P = { plaintext: A };
      if ((void 0 !== e.protected && (P.protectedHeader = h), void 0 !== e.aad))
        try {
          P.additionalAuthenticatedData = (0, t.decode)(e.aad);
        } catch (e) {
          throw new s.JWEInvalid("Failed to base64url decode the aad");
        }
      return (void 0 !== e.unprotected &&
        (P.sharedUnprotectedHeader = e.unprotected),
      void 0 !== e.header && (P.unprotectedHeader = e.header),
      I)
        ? { ...P, key: o }
        : P;
    }
    async function et(e, t, i) {
      if (
        (e instanceof Uint8Array && (e = y.decoder.decode(e)),
        "string" != typeof e)
      )
        throw new s.JWEInvalid("Compact JWE must be a string or Uint8Array");
      let { 0: r, 1: n, 2: a, 3: o, 4: l, length: c } = e.split(".");
      if (5 !== c) throw new s.JWEInvalid("Invalid Compact JWE");
      let h = await ee(
          {
            ciphertext: o,
            iv: a || void 0,
            protected: r || void 0,
            tag: l || void 0,
            encrypted_key: n || void 0,
          },
          t,
          i
        ),
        d = { plaintext: h.plaintext, protectedHeader: h.protectedHeader };
      return "function" == typeof t ? { ...d, key: h.key } : d;
    }
    async function ei(e, t, i) {
      if (!(0, a.default)(e))
        throw new s.JWEInvalid("General JWE must be an object");
      if (!Array.isArray(e.recipients) || !e.recipients.every(a.default))
        throw new s.JWEInvalid("JWE Recipients missing or incorrect type");
      if (!e.recipients.length)
        throw new s.JWEInvalid("JWE Recipients has no members");
      for (let r of e.recipients)
        try {
          return await ee(
            {
              aad: e.aad,
              ciphertext: e.ciphertext,
              encrypted_key: r.encrypted_key,
              header: r.header,
              iv: e.iv,
              protected: e.protected,
              tag: e.tag,
              unprotected: e.unprotected,
            },
            t,
            i
          );
        } catch (e) {}
      throw new s.JWEDecryptionFailed();
    }
    e.s(["flattenedDecrypt", () => ee], 32159),
      e.s(["compactDecrypt", () => et], 698039),
      e.s(["generalDecrypt", () => ei], 321103);
    let er = async (e) => {
      if (e instanceof Uint8Array) return { kty: "oct", k: (0, t.encode)(e) };
      if (!(0, l.isCryptoKey)(e))
        throw TypeError((0, h.default)(e, ...d.types, "Uint8Array"));
      if (!e.extractable)
        throw TypeError(
          "non-extractable CryptoKey cannot be exported as a JWK"
        );
      let {
        ext: i,
        key_ops: r,
        alg: s,
        use: n,
        ...a
      } = await l.default.subtle.exportKey("jwk", e);
      return a;
    };
    async function es(e) {
      return O("public", "spki", e);
    }
    async function en(e) {
      return O("private", "pkcs8", e);
    }
    async function ea(e) {
      return er(e);
    }
    async function eo(e, i, r, n, a = {}) {
      let o, l, c;
      switch ((q(e, r, "encrypt"), e)) {
        case "dir":
          c = r;
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          if (!b(r))
            throw new s.JOSENotSupported(
              "ECDH with the provided key is not allowed or not supported by your javascript runtime"
            );
          let { apu: h, apv: d } = a,
            { epk: u } = a;
          u || (u = (await w(r)).privateKey);
          let { x: p, y: g, crv: y, kty: v } = await ea(u),
            E = await m(
              r,
              u,
              "ECDH-ES" === e ? i : e,
              "ECDH-ES" === e ? x(i) : parseInt(e.slice(-5, -2), 10),
              h,
              d
            );
          if (
            ((l = { epk: { x: p, crv: y, kty: v } }),
            "EC" === v && (l.epk.y = g),
            h && (l.apu = (0, t.encode)(h)),
            d && (l.apv = (0, t.encode)(d)),
            "ECDH-ES" === e)
          ) {
            c = E;
            break;
          }
          c = n || k(i);
          let _ = e.slice(-6);
          o = await f(_, E, c);
          break;
        }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          (c = n || k(i)), (o = await P(e, r, c));
          break;
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW": {
          c = n || k(i);
          let { p2c: t, p2s: s } = a;
          ({ encryptedKey: o, ...l } = await _(e, r, c, t, s));
          break;
        }
        case "A128KW":
        case "A192KW":
        case "A256KW":
          (c = n || k(i)), (o = await f(e, r, c));
          break;
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW": {
          c = n || k(i);
          let { iv: t } = a;
          ({ encryptedKey: o, ...l } = await G(e, r, c, t));
          break;
        }
        default:
          throw new s.JOSENotSupported(
            'Invalid or unsupported "alg" (JWE Algorithm) header value'
          );
      }
      return { cek: c, encryptedKey: o, parameters: l };
    }
    e.s(
      ["exportJWK", () => ea, "exportPKCS8", () => en, "exportSPKI", () => es],
      53560
    );
    let el = Symbol();
    class ec {
      constructor(e) {
        if (!(e instanceof Uint8Array))
          throw TypeError("plaintext must be an instance of Uint8Array");
        this._plaintext = e;
      }
      setKeyManagementParameters(e) {
        if (this._keyManagementParameters)
          throw TypeError("setKeyManagementParameters can only be called once");
        return (this._keyManagementParameters = e), this;
      }
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return (this._protectedHeader = e), this;
      }
      setSharedUnprotectedHeader(e) {
        if (this._sharedUnprotectedHeader)
          throw TypeError("setSharedUnprotectedHeader can only be called once");
        return (this._sharedUnprotectedHeader = e), this;
      }
      setUnprotectedHeader(e) {
        if (this._unprotectedHeader)
          throw TypeError("setUnprotectedHeader can only be called once");
        return (this._unprotectedHeader = e), this;
      }
      setAdditionalAuthenticatedData(e) {
        return (this._aad = e), this;
      }
      setContentEncryptionKey(e) {
        if (this._cek)
          throw TypeError("setContentEncryptionKey can only be called once");
        return (this._cek = e), this;
      }
      setInitializationVector(e) {
        if (this._iv)
          throw TypeError("setInitializationVector can only be called once");
        return (this._iv = e), this;
      }
      async encrypt(e, i) {
        let a, o, l, c, h, d, u;
        if (
          !this._protectedHeader &&
          !this._unprotectedHeader &&
          !this._sharedUnprotectedHeader
        )
          throw new s.JWEInvalid(
            "either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()"
          );
        if (
          !(0, n.default)(
            this._protectedHeader,
            this._unprotectedHeader,
            this._sharedUnprotectedHeader
          )
        )
          throw new s.JWEInvalid(
            "JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint"
          );
        let p = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader,
        };
        if (
          (Q(
            s.JWEInvalid,
            new Map(),
            null == i ? void 0 : i.crit,
            this._protectedHeader,
            p
          ),
          void 0 !== p.zip)
        ) {
          if (!this._protectedHeader || !this._protectedHeader.zip)
            throw new s.JWEInvalid(
              'JWE "zip" (Compression Algorithm) Header MUST be integrity protected'
            );
          if ("DEF" !== p.zip)
            throw new s.JOSENotSupported(
              'Unsupported JWE "zip" (Compression Algorithm) Header Parameter value'
            );
        }
        let { alg: f, enc: g } = p;
        if ("string" != typeof f || !f)
          throw new s.JWEInvalid(
            'JWE "alg" (Algorithm) Header Parameter missing or invalid'
          );
        if ("string" != typeof g || !g)
          throw new s.JWEInvalid(
            'JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid'
          );
        if ("dir" === f) {
          if (this._cek)
            throw TypeError(
              "setContentEncryptionKey cannot be called when using Direct Encryption"
            );
        } else if ("ECDH-ES" === f && this._cek)
          throw TypeError(
            "setContentEncryptionKey cannot be called when using Direct Key Agreement"
          );
        {
          let t;
          ({
            cek: o,
            encryptedKey: a,
            parameters: t,
          } = await eo(f, g, e, this._cek, this._keyManagementParameters)),
            t &&
              (i && el in i
                ? this._unprotectedHeader
                  ? (this._unprotectedHeader = {
                      ...this._unprotectedHeader,
                      ...t,
                    })
                  : this.setUnprotectedHeader(t)
                : this._protectedHeader
                ? (this._protectedHeader = { ...this._protectedHeader, ...t })
                : this.setProtectedHeader(t));
        }
        if (
          (this._iv || (this._iv = (0, V.default)(g)),
          (c = this._protectedHeader
            ? y.encoder.encode(
                (0, t.encode)(JSON.stringify(this._protectedHeader))
              )
            : y.encoder.encode("")),
          this._aad
            ? ((h = (0, t.encode)(this._aad)),
              (l = (0, y.concat)(
                c,
                y.encoder.encode("."),
                y.encoder.encode(h)
              )))
            : (l = c),
          "DEF" === p.zip)
        ) {
          let e = await ((null == i ? void 0 : i.deflateRaw) || r.deflate)(
            this._plaintext
          );
          ({ ciphertext: d, tag: u } = await F(g, e, o, this._iv, l));
        } else
          ({ ciphertext: d, tag: u } = await F(
            g,
            this._plaintext,
            o,
            this._iv,
            l
          ));
        let m = {
          ciphertext: (0, t.encode)(d),
          iv: (0, t.encode)(this._iv),
          tag: (0, t.encode)(u),
        };
        return (
          a && (m.encrypted_key = (0, t.encode)(a)),
          h && (m.aad = h),
          this._protectedHeader && (m.protected = y.decoder.decode(c)),
          this._sharedUnprotectedHeader &&
            (m.unprotected = this._sharedUnprotectedHeader),
          this._unprotectedHeader && (m.header = this._unprotectedHeader),
          m
        );
      }
    }
    e.s(["FlattenedEncrypt", () => ec, "unprotected", 0, el], 170446);
    class eh {
      constructor(e, t, i) {
        (this.parent = e), (this.key = t), (this.options = i);
      }
      setUnprotectedHeader(e) {
        if (this.unprotectedHeader)
          throw TypeError("setUnprotectedHeader can only be called once");
        return (this.unprotectedHeader = e), this;
      }
      addRecipient(...e) {
        return this.parent.addRecipient(...e);
      }
      encrypt(...e) {
        return this.parent.encrypt(...e);
      }
      done() {
        return this.parent;
      }
    }
    class ed {
      constructor(e) {
        (this._recipients = []), (this._plaintext = e);
      }
      addRecipient(e, t) {
        let i = new eh(this, e, { crit: null == t ? void 0 : t.crit });
        return this._recipients.push(i), i;
      }
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return (this._protectedHeader = e), this;
      }
      setSharedUnprotectedHeader(e) {
        if (this._unprotectedHeader)
          throw TypeError("setSharedUnprotectedHeader can only be called once");
        return (this._unprotectedHeader = e), this;
      }
      setAdditionalAuthenticatedData(e) {
        return (this._aad = e), this;
      }
      async encrypt(e) {
        var i, r, a;
        let o;
        if (!this._recipients.length)
          throw new s.JWEInvalid("at least one recipient must be added");
        if (
          ((e = { deflateRaw: null == e ? void 0 : e.deflateRaw }),
          1 === this._recipients.length)
        ) {
          let [t] = this._recipients,
            i = await new ec(this._plaintext)
              .setAdditionalAuthenticatedData(this._aad)
              .setProtectedHeader(this._protectedHeader)
              .setSharedUnprotectedHeader(this._unprotectedHeader)
              .setUnprotectedHeader(t.unprotectedHeader)
              .encrypt(t.key, { ...t.options, ...e }),
            r = {
              ciphertext: i.ciphertext,
              iv: i.iv,
              recipients: [{}],
              tag: i.tag,
            };
          return (
            i.aad && (r.aad = i.aad),
            i.protected && (r.protected = i.protected),
            i.unprotected && (r.unprotected = i.unprotected),
            i.encrypted_key &&
              (r.recipients[0].encrypted_key = i.encrypted_key),
            i.header && (r.recipients[0].header = i.header),
            r
          );
        }
        for (let e = 0; e < this._recipients.length; e++) {
          let t = this._recipients[e];
          if (
            !(0, n.default)(
              this._protectedHeader,
              this._unprotectedHeader,
              t.unprotectedHeader
            )
          )
            throw new s.JWEInvalid(
              "JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint"
            );
          let i = {
              ...this._protectedHeader,
              ...this._unprotectedHeader,
              ...t.unprotectedHeader,
            },
            { alg: r } = i;
          if ("string" != typeof r || !r)
            throw new s.JWEInvalid(
              'JWE "alg" (Algorithm) Header Parameter missing or invalid'
            );
          if ("dir" === r || "ECDH-ES" === r)
            throw new s.JWEInvalid(
              '"dir" and "ECDH-ES" alg may only be used with a single recipient'
            );
          if ("string" != typeof i.enc || !i.enc)
            throw new s.JWEInvalid(
              'JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid'
            );
          if (o) {
            if (o !== i.enc)
              throw new s.JWEInvalid(
                'JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients'
              );
          } else o = i.enc;
          if (
            (Q(
              s.JWEInvalid,
              new Map(),
              t.options.crit,
              this._protectedHeader,
              i
            ),
            void 0 !== i.zip &&
              (!this._protectedHeader || !this._protectedHeader.zip))
          )
            throw new s.JWEInvalid(
              'JWE "zip" (Compression Algorithm) Header MUST be integrity protected'
            );
        }
        let l = k(o),
          c = { ciphertext: "", iv: "", recipients: [], tag: "" };
        for (let s = 0; s < this._recipients.length; s++) {
          let n = this._recipients[s],
            h = {};
          c.recipients.push(h);
          let d = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...n.unprotectedHeader,
          }.alg.startsWith("PBES2")
            ? 2048 + s
            : void 0;
          if (0 === s) {
            let t = await new ec(this._plaintext)
              .setAdditionalAuthenticatedData(this._aad)
              .setContentEncryptionKey(l)
              .setProtectedHeader(this._protectedHeader)
              .setSharedUnprotectedHeader(this._unprotectedHeader)
              .setUnprotectedHeader(n.unprotectedHeader)
              .setKeyManagementParameters({ p2c: d })
              .encrypt(n.key, { ...n.options, ...e, [el]: !0 });
            (c.ciphertext = t.ciphertext),
              (c.iv = t.iv),
              (c.tag = t.tag),
              t.aad && (c.aad = t.aad),
              t.protected && (c.protected = t.protected),
              t.unprotected && (c.unprotected = t.unprotected),
              (h.encrypted_key = t.encrypted_key),
              t.header && (h.header = t.header);
            continue;
          }
          let { encryptedKey: u, parameters: p } = await eo(
            (null == (i = n.unprotectedHeader) ? void 0 : i.alg) ||
              (null == (r = this._protectedHeader) ? void 0 : r.alg) ||
              (null == (a = this._unprotectedHeader) ? void 0 : a.alg),
            o,
            n.key,
            l,
            { p2c: d }
          );
          (h.encrypted_key = (0, t.encode)(u)),
            (n.unprotectedHeader || p) &&
              (h.header = { ...n.unprotectedHeader, ...p });
        }
        return c;
      }
    }
    function eu(e, t) {
      let i = `SHA-${e.slice(-3)}`;
      switch (e) {
        case "HS256":
        case "HS384":
        case "HS512":
          return { hash: i, name: "HMAC" };
        case "PS256":
        case "PS384":
        case "PS512":
          return { hash: i, name: "RSA-PSS", saltLength: e.slice(-3) >> 3 };
        case "RS256":
        case "RS384":
        case "RS512":
          return { hash: i, name: "RSASSA-PKCS1-v1_5" };
        case "ES256":
        case "ES384":
        case "ES512":
          return { hash: i, name: "ECDSA", namedCurve: t.namedCurve };
        case "EdDSA":
          return { name: t.name };
        default:
          throw new s.JOSENotSupported(
            `alg ${e} is not supported either by JOSE or your javascript runtime`
          );
      }
    }
    function ep(e, t, i) {
      if ((0, l.isCryptoKey)(t)) return (0, c.checkSigCryptoKey)(t, e, i), t;
      if (t instanceof Uint8Array) {
        if (!e.startsWith("HS")) throw TypeError((0, h.default)(t, ...d.types));
        return l.default.subtle.importKey(
          "raw",
          t,
          { hash: `SHA-${e.slice(-3)}`, name: "HMAC" },
          !1,
          [i]
        );
      }
      throw TypeError((0, h.default)(t, ...d.types, "Uint8Array"));
    }
    e.s(["GeneralEncrypt", () => ed], 293417);
    let ef = async (e, t, i, r) => {
      let s = await ep(e, t, "verify");
      A(e, s);
      let n = eu(e, s.algorithm);
      try {
        return await l.default.subtle.verify(n, s, i, r);
      } catch (e) {
        return !1;
      }
    };
    async function eg(e, i, r) {
      var o;
      let l, c;
      if (!(0, a.default)(e))
        throw new s.JWSInvalid("Flattened JWS must be an object");
      if (void 0 === e.protected && void 0 === e.header)
        throw new s.JWSInvalid(
          'Flattened JWS must have either of the "protected" or "header" members'
        );
      if (void 0 !== e.protected && "string" != typeof e.protected)
        throw new s.JWSInvalid("JWS Protected Header incorrect type");
      if (void 0 === e.payload) throw new s.JWSInvalid("JWS Payload missing");
      if ("string" != typeof e.signature)
        throw new s.JWSInvalid("JWS Signature missing or incorrect type");
      if (void 0 !== e.header && !(0, a.default)(e.header))
        throw new s.JWSInvalid("JWS Unprotected Header incorrect type");
      let h = {};
      if (e.protected)
        try {
          let i = (0, t.decode)(e.protected);
          h = JSON.parse(y.decoder.decode(i));
        } catch (e) {
          throw new s.JWSInvalid("JWS Protected Header is invalid");
        }
      if (!(0, n.default)(h, e.header))
        throw new s.JWSInvalid(
          "JWS Protected and JWS Unprotected Header Parameter names must be disjoint"
        );
      let d = { ...h, ...e.header },
        u = Q(
          s.JWSInvalid,
          new Map([["b64", !0]]),
          null == r ? void 0 : r.crit,
          h,
          d
        ),
        p = !0;
      if (u.has("b64") && "boolean" != typeof (p = h.b64))
        throw new s.JWSInvalid(
          'The "b64" (base64url-encode payload) Header Parameter must be a boolean'
        );
      let { alg: f } = d;
      if ("string" != typeof f || !f)
        throw new s.JWSInvalid(
          'JWS "alg" (Algorithm) Header Parameter missing or invalid'
        );
      let g = r && X("algorithms", r.algorithms);
      if (g && !g.has(f))
        throw new s.JOSEAlgNotAllowed(
          '"alg" (Algorithm) Header Parameter not allowed'
        );
      if (p) {
        if ("string" != typeof e.payload)
          throw new s.JWSInvalid("JWS Payload must be a string");
      } else if (
        "string" != typeof e.payload &&
        !(e.payload instanceof Uint8Array)
      )
        throw new s.JWSInvalid(
          "JWS Payload must be a string or an Uint8Array instance"
        );
      let m = !1;
      "function" == typeof i && ((i = await i(h, e)), (m = !0)),
        q(f, i, "verify");
      let w = (0, y.concat)(
        y.encoder.encode(null != (o = e.protected) ? o : ""),
        y.encoder.encode("."),
        "string" == typeof e.payload ? y.encoder.encode(e.payload) : e.payload
      );
      try {
        l = (0, t.decode)(e.signature);
      } catch (e) {
        throw new s.JWSInvalid("Failed to base64url decode the signature");
      }
      if (!(await ef(f, i, l, w))) throw new s.JWSSignatureVerificationFailed();
      if (p)
        try {
          c = (0, t.decode)(e.payload);
        } catch (e) {
          throw new s.JWSInvalid("Failed to base64url decode the payload");
        }
      else
        c =
          "string" == typeof e.payload
            ? y.encoder.encode(e.payload)
            : e.payload;
      let b = { payload: c };
      return (void 0 !== e.protected && (b.protectedHeader = h),
      void 0 !== e.header && (b.unprotectedHeader = e.header),
      m)
        ? { ...b, key: i }
        : b;
    }
    async function ey(e, t, i) {
      if (
        (e instanceof Uint8Array && (e = y.decoder.decode(e)),
        "string" != typeof e)
      )
        throw new s.JWSInvalid("Compact JWS must be a string or Uint8Array");
      let { 0: r, 1: n, 2: a, length: o } = e.split(".");
      if (3 !== o) throw new s.JWSInvalid("Invalid Compact JWS");
      let l = await eg({ payload: n, protected: r, signature: a }, t, i),
        c = { payload: l.payload, protectedHeader: l.protectedHeader };
      return "function" == typeof t ? { ...c, key: l.key } : c;
    }
    async function em(e, t, i) {
      if (!(0, a.default)(e))
        throw new s.JWSInvalid("General JWS must be an object");
      if (!Array.isArray(e.signatures) || !e.signatures.every(a.default))
        throw new s.JWSInvalid("JWS Signatures missing or incorrect type");
      for (let r of e.signatures)
        try {
          return await eg(
            {
              header: r.header,
              payload: e.payload,
              protected: r.protected,
              signature: r.signature,
            },
            t,
            i
          );
        } catch (e) {}
      throw new s.JWSSignatureVerificationFailed();
    }
    e.s(["flattenedVerify", () => eg], 761242),
      e.s(["compactVerify", () => ey], 242632),
      e.s(["generalVerify", () => em], 316051);
    let ew = (e) => Math.floor(e.getTime() / 1e3),
      eb =
        /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i,
      ev = (e) => {
        let t = eb.exec(e);
        if (!t) throw TypeError("Invalid time period format");
        let i = parseFloat(t[1]);
        switch (t[2].toLowerCase()) {
          case "sec":
          case "secs":
          case "second":
          case "seconds":
          case "s":
            return Math.round(i);
          case "minute":
          case "minutes":
          case "min":
          case "mins":
          case "m":
            return Math.round(60 * i);
          case "hour":
          case "hours":
          case "hr":
          case "hrs":
          case "h":
            return Math.round(3600 * i);
          case "day":
          case "days":
          case "d":
            return Math.round(86400 * i);
          case "week":
          case "weeks":
          case "w":
            return Math.round(604800 * i);
          default:
            return Math.round(0x1e187e0 * i);
        }
      },
      eE = (e) => e.toLowerCase().replace(/^application\//, ""),
      e_ = (e, t, i = {}) => {
        var r, n;
        let o,
          l,
          { typ: c } = i;
        if (c && ("string" != typeof e.typ || eE(e.typ) !== eE(c)))
          throw new s.JWTClaimValidationFailed(
            'unexpected "typ" JWT header value',
            "typ",
            "check_failed"
          );
        try {
          o = JSON.parse(y.decoder.decode(t));
        } catch (e) {}
        if (!(0, a.default)(o))
          throw new s.JWTInvalid(
            "JWT Claims Set must be a top-level JSON object"
          );
        let {
          requiredClaims: h = [],
          issuer: d,
          subject: u,
          audience: p,
          maxTokenAge: f,
        } = i;
        for (let e of (void 0 !== f && h.push("iat"),
        void 0 !== p && h.push("aud"),
        void 0 !== u && h.push("sub"),
        void 0 !== d && h.push("iss"),
        new Set(h.reverse())))
          if (!(e in o))
            throw new s.JWTClaimValidationFailed(
              `missing required "${e}" claim`,
              e,
              "missing"
            );
        if (d && !(Array.isArray(d) ? d : [d]).includes(o.iss))
          throw new s.JWTClaimValidationFailed(
            'unexpected "iss" claim value',
            "iss",
            "check_failed"
          );
        if (u && o.sub !== u)
          throw new s.JWTClaimValidationFailed(
            'unexpected "sub" claim value',
            "sub",
            "check_failed"
          );
        if (
          p &&
          ((r = o.aud),
          (n = "string" == typeof p ? [p] : p),
          "string" == typeof r
            ? !n.includes(r)
            : !(Array.isArray(r) && n.some(Set.prototype.has.bind(new Set(r)))))
        )
          throw new s.JWTClaimValidationFailed(
            'unexpected "aud" claim value',
            "aud",
            "check_failed"
          );
        switch (typeof i.clockTolerance) {
          case "string":
            l = ev(i.clockTolerance);
            break;
          case "number":
            l = i.clockTolerance;
            break;
          case "undefined":
            l = 0;
            break;
          default:
            throw TypeError("Invalid clockTolerance option type");
        }
        let { currentDate: g } = i,
          m = ew(g || new Date());
        if ((void 0 !== o.iat || f) && "number" != typeof o.iat)
          throw new s.JWTClaimValidationFailed(
            '"iat" claim must be a number',
            "iat",
            "invalid"
          );
        if (void 0 !== o.nbf) {
          if ("number" != typeof o.nbf)
            throw new s.JWTClaimValidationFailed(
              '"nbf" claim must be a number',
              "nbf",
              "invalid"
            );
          if (o.nbf > m + l)
            throw new s.JWTClaimValidationFailed(
              '"nbf" claim timestamp check failed',
              "nbf",
              "check_failed"
            );
        }
        if (void 0 !== o.exp) {
          if ("number" != typeof o.exp)
            throw new s.JWTClaimValidationFailed(
              '"exp" claim must be a number',
              "exp",
              "invalid"
            );
          if (o.exp <= m - l)
            throw new s.JWTExpired(
              '"exp" claim timestamp check failed',
              "exp",
              "check_failed"
            );
        }
        if (f) {
          let e = m - o.iat;
          if (e - l > ("number" == typeof f ? f : ev(f)))
            throw new s.JWTExpired(
              '"iat" claim timestamp check failed (too far in the past)',
              "iat",
              "check_failed"
            );
          if (e < 0 - l)
            throw new s.JWTClaimValidationFailed(
              '"iat" claim timestamp check failed (it should be in the past)',
              "iat",
              "check_failed"
            );
        }
        return o;
      };
    async function eI(e, t, i) {
      var r;
      let n = await ey(e, t, i);
      if (
        (null == (r = n.protectedHeader.crit) ? void 0 : r.includes("b64")) &&
        !1 === n.protectedHeader.b64
      )
        throw new s.JWTInvalid("JWTs MUST NOT use unencoded payload");
      let a = {
        payload: e_(n.protectedHeader, n.payload, i),
        protectedHeader: n.protectedHeader,
      };
      return "function" == typeof t ? { ...a, key: n.key } : a;
    }
    async function eS(e, t, i) {
      let r = await et(e, t, i),
        n = e_(r.protectedHeader, r.plaintext, i),
        { protectedHeader: a } = r;
      if (void 0 !== a.iss && a.iss !== n.iss)
        throw new s.JWTClaimValidationFailed(
          'replicated "iss" claim header parameter mismatch',
          "iss",
          "mismatch"
        );
      if (void 0 !== a.sub && a.sub !== n.sub)
        throw new s.JWTClaimValidationFailed(
          'replicated "sub" claim header parameter mismatch',
          "sub",
          "mismatch"
        );
      if (void 0 !== a.aud && JSON.stringify(a.aud) !== JSON.stringify(n.aud))
        throw new s.JWTClaimValidationFailed(
          'replicated "aud" claim header parameter mismatch',
          "aud",
          "mismatch"
        );
      let o = { payload: n, protectedHeader: a };
      return "function" == typeof t ? { ...o, key: r.key } : o;
    }
    e.s(["jwtVerify", () => eI], 482449), e.s(["jwtDecrypt", () => eS], 546731);
    class eA {
      constructor(e) {
        this._flattened = new ec(e);
      }
      setContentEncryptionKey(e) {
        return this._flattened.setContentEncryptionKey(e), this;
      }
      setInitializationVector(e) {
        return this._flattened.setInitializationVector(e), this;
      }
      setProtectedHeader(e) {
        return this._flattened.setProtectedHeader(e), this;
      }
      setKeyManagementParameters(e) {
        return this._flattened.setKeyManagementParameters(e), this;
      }
      async encrypt(e, t) {
        let i = await this._flattened.encrypt(e, t);
        return [i.protected, i.encrypted_key, i.iv, i.ciphertext, i.tag].join(
          "."
        );
      }
    }
    e.s(["CompactEncrypt", () => eA], 28609);
    let eP = async (e, t, i) => {
      let r = await ep(e, t, "sign");
      return (
        A(e, r),
        new Uint8Array(await l.default.subtle.sign(eu(e, r.algorithm), r, i))
      );
    };
    class eC {
      constructor(e) {
        if (!(e instanceof Uint8Array))
          throw TypeError("payload must be an instance of Uint8Array");
        this._payload = e;
      }
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return (this._protectedHeader = e), this;
      }
      setUnprotectedHeader(e) {
        if (this._unprotectedHeader)
          throw TypeError("setUnprotectedHeader can only be called once");
        return (this._unprotectedHeader = e), this;
      }
      async sign(e, i) {
        let r;
        if (!this._protectedHeader && !this._unprotectedHeader)
          throw new s.JWSInvalid(
            "either setProtectedHeader or setUnprotectedHeader must be called before #sign()"
          );
        if (!(0, n.default)(this._protectedHeader, this._unprotectedHeader))
          throw new s.JWSInvalid(
            "JWS Protected and JWS Unprotected Header Parameter names must be disjoint"
          );
        let a = { ...this._protectedHeader, ...this._unprotectedHeader },
          o = Q(
            s.JWSInvalid,
            new Map([["b64", !0]]),
            null == i ? void 0 : i.crit,
            this._protectedHeader,
            a
          ),
          l = !0;
        if (o.has("b64") && "boolean" != typeof (l = this._protectedHeader.b64))
          throw new s.JWSInvalid(
            'The "b64" (base64url-encode payload) Header Parameter must be a boolean'
          );
        let { alg: c } = a;
        if ("string" != typeof c || !c)
          throw new s.JWSInvalid(
            'JWS "alg" (Algorithm) Header Parameter missing or invalid'
          );
        q(c, e, "sign");
        let h = this._payload;
        l && (h = y.encoder.encode((0, t.encode)(h))),
          (r = this._protectedHeader
            ? y.encoder.encode(
                (0, t.encode)(JSON.stringify(this._protectedHeader))
              )
            : y.encoder.encode(""));
        let d = (0, y.concat)(r, y.encoder.encode("."), h),
          u = await eP(c, e, d),
          p = { signature: (0, t.encode)(u), payload: "" };
        return (
          l && (p.payload = y.decoder.decode(h)),
          this._unprotectedHeader && (p.header = this._unprotectedHeader),
          this._protectedHeader && (p.protected = y.decoder.decode(r)),
          p
        );
      }
    }
    e.s(["FlattenedSign", () => eC], 956015);
    class ex {
      constructor(e) {
        this._flattened = new eC(e);
      }
      setProtectedHeader(e) {
        return this._flattened.setProtectedHeader(e), this;
      }
      async sign(e, t) {
        let i = await this._flattened.sign(e, t);
        if (void 0 === i.payload)
          throw TypeError(
            "use the flattened module for creating JWS with b64: false"
          );
        return `${i.protected}.${i.payload}.${i.signature}`;
      }
    }
    e.s(["CompactSign", () => ex], 179347);
    class ek {
      constructor(e, t, i) {
        (this.parent = e), (this.key = t), (this.options = i);
      }
      setProtectedHeader(e) {
        if (this.protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return (this.protectedHeader = e), this;
      }
      setUnprotectedHeader(e) {
        if (this.unprotectedHeader)
          throw TypeError("setUnprotectedHeader can only be called once");
        return (this.unprotectedHeader = e), this;
      }
      addSignature(...e) {
        return this.parent.addSignature(...e);
      }
      sign(...e) {
        return this.parent.sign(...e);
      }
      done() {
        return this.parent;
      }
    }
    class eT {
      constructor(e) {
        (this._signatures = []), (this._payload = e);
      }
      addSignature(e, t) {
        let i = new ek(this, e, t);
        return this._signatures.push(i), i;
      }
      async sign() {
        if (!this._signatures.length)
          throw new s.JWSInvalid("at least one signature must be added");
        let e = { signatures: [], payload: "" };
        for (let t = 0; t < this._signatures.length; t++) {
          let i = this._signatures[t],
            r = new eC(this._payload);
          r.setProtectedHeader(i.protectedHeader),
            r.setUnprotectedHeader(i.unprotectedHeader);
          let { payload: n, ...a } = await r.sign(i.key, i.options);
          if (0 === t) e.payload = n;
          else if (e.payload !== n)
            throw new s.JWSInvalid(
              "inconsistent use of JWS Unencoded Payload (RFC7797)"
            );
          e.signatures.push(a);
        }
        return e;
      }
    }
    e.s(["GeneralSign", () => eT], 126091);
    class eO {
      constructor(e) {
        if (!(0, a.default)(e))
          throw TypeError("JWT Claims Set MUST be an object");
        this._payload = e;
      }
      setIssuer(e) {
        return (this._payload = { ...this._payload, iss: e }), this;
      }
      setSubject(e) {
        return (this._payload = { ...this._payload, sub: e }), this;
      }
      setAudience(e) {
        return (this._payload = { ...this._payload, aud: e }), this;
      }
      setJti(e) {
        return (this._payload = { ...this._payload, jti: e }), this;
      }
      setNotBefore(e) {
        return (
          "number" == typeof e
            ? (this._payload = { ...this._payload, nbf: e })
            : (this._payload = {
                ...this._payload,
                nbf: ew(new Date()) + ev(e),
              }),
          this
        );
      }
      setExpirationTime(e) {
        return (
          "number" == typeof e
            ? (this._payload = { ...this._payload, exp: e })
            : (this._payload = {
                ...this._payload,
                exp: ew(new Date()) + ev(e),
              }),
          this
        );
      }
      setIssuedAt(e) {
        return (
          void 0 === e
            ? (this._payload = { ...this._payload, iat: ew(new Date()) })
            : (this._payload = { ...this._payload, iat: e }),
          this
        );
      }
    }
    class eR extends eO {
      setProtectedHeader(e) {
        return (this._protectedHeader = e), this;
      }
      async sign(e, t) {
        var i;
        let r = new ex(y.encoder.encode(JSON.stringify(this._payload)));
        if (
          (r.setProtectedHeader(this._protectedHeader),
          Array.isArray(
            null == (i = this._protectedHeader) ? void 0 : i.crit
          ) &&
            this._protectedHeader.crit.includes("b64") &&
            !1 === this._protectedHeader.b64)
        )
          throw new s.JWTInvalid("JWTs MUST NOT use unencoded payload");
        return r.sign(e, t);
      }
    }
    e.s(["SignJWT", () => eR], 435850);
    class eN extends eO {
      setProtectedHeader(e) {
        if (this._protectedHeader)
          throw TypeError("setProtectedHeader can only be called once");
        return (this._protectedHeader = e), this;
      }
      setKeyManagementParameters(e) {
        if (this._keyManagementParameters)
          throw TypeError("setKeyManagementParameters can only be called once");
        return (this._keyManagementParameters = e), this;
      }
      setContentEncryptionKey(e) {
        if (this._cek)
          throw TypeError("setContentEncryptionKey can only be called once");
        return (this._cek = e), this;
      }
      setInitializationVector(e) {
        if (this._iv)
          throw TypeError("setInitializationVector can only be called once");
        return (this._iv = e), this;
      }
      replicateIssuerAsHeader() {
        return (this._replicateIssuerAsHeader = !0), this;
      }
      replicateSubjectAsHeader() {
        return (this._replicateSubjectAsHeader = !0), this;
      }
      replicateAudienceAsHeader() {
        return (this._replicateAudienceAsHeader = !0), this;
      }
      async encrypt(e, t) {
        let i = new eA(y.encoder.encode(JSON.stringify(this._payload)));
        return (
          this._replicateIssuerAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              iss: this._payload.iss,
            }),
          this._replicateSubjectAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              sub: this._payload.sub,
            }),
          this._replicateAudienceAsHeader &&
            (this._protectedHeader = {
              ...this._protectedHeader,
              aud: this._payload.aud,
            }),
          i.setProtectedHeader(this._protectedHeader),
          this._iv && i.setInitializationVector(this._iv),
          this._cek && i.setContentEncryptionKey(this._cek),
          this._keyManagementParameters &&
            i.setKeyManagementParameters(this._keyManagementParameters),
          i.encrypt(e, t)
        );
      }
    }
    e.s(["EncryptJWT", () => eN], 270553);
    var ej = e.i(203001);
    let eD = (e, t) => {
      if ("string" != typeof e || !e)
        throw new s.JWKInvalid(`${t} missing or invalid`);
    };
    async function eM(e, i) {
      let r;
      if (!(0, a.default)(e)) throw TypeError("JWK must be an object");
      if (
        (null != i || (i = "sha256"),
        "sha256" !== i && "sha384" !== i && "sha512" !== i)
      )
        throw TypeError(
          'digestAlgorithm must one of "sha256", "sha384", or "sha512"'
        );
      switch (e.kty) {
        case "EC":
          eD(e.crv, '"crv" (Curve) Parameter'),
            eD(e.x, '"x" (X Coordinate) Parameter'),
            eD(e.y, '"y" (Y Coordinate) Parameter'),
            (r = { crv: e.crv, kty: e.kty, x: e.x, y: e.y });
          break;
        case "OKP":
          eD(e.crv, '"crv" (Subtype of Key Pair) Parameter'),
            eD(e.x, '"x" (Public Key) Parameter'),
            (r = { crv: e.crv, kty: e.kty, x: e.x });
          break;
        case "RSA":
          eD(e.e, '"e" (Exponent) Parameter'),
            eD(e.n, '"n" (Modulus) Parameter'),
            (r = { e: e.e, kty: e.kty, n: e.n });
          break;
        case "oct":
          eD(e.k, '"k" (Key Value) Parameter'), (r = { k: e.k, kty: e.kty });
          break;
        default:
          throw new s.JOSENotSupported(
            '"kty" (Key Type) Parameter missing or unsupported'
          );
      }
      let n = y.encoder.encode(JSON.stringify(r));
      return (0, t.encode)(await (0, ej.default)(i, n));
    }
    async function eU(e, t) {
      null != t || (t = "sha256");
      let i = await eM(e, t);
      return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${i}`;
    }
    async function eL(e, t) {
      let i = { ...e, ...(null == t ? void 0 : t.header) };
      if (!(0, a.default)(i.jwk))
        throw new s.JWSInvalid(
          '"jwk" (JSON Web Key) Header Parameter must be a JSON object'
        );
      let r = await K({ ...i.jwk, ext: !0 }, i.alg, !0);
      if (r instanceof Uint8Array || "public" !== r.type)
        throw new s.JWSInvalid(
          '"jwk" (JSON Web Key) Header Parameter must be a public key'
        );
      return r;
    }
    function eW(e) {
      return (
        e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(eB)
      );
    }
    function eB(e) {
      return (0, a.default)(e);
    }
    e.s(
      [
        "calculateJwkThumbprint",
        () => eM,
        "calculateJwkThumbprintUri",
        () => eU,
      ],
      912702
    ),
      e.s(["EmbeddedJWK", () => eL], 852708);
    class eK {
      constructor(e) {
        if (((this._cached = new WeakMap()), !eW(e)))
          throw new s.JWKSInvalid("JSON Web Key Set malformed");
        this._jwks = (function (e) {
          return "function" == typeof structuredClone
            ? structuredClone(e)
            : JSON.parse(JSON.stringify(e));
        })(e);
      }
      async getKey(e, t) {
        let { alg: i, kid: r } = { ...e, ...(null == t ? void 0 : t.header) },
          n = (function (e) {
            switch ("string" == typeof e && e.slice(0, 2)) {
              case "RS":
              case "PS":
                return "RSA";
              case "ES":
                return "EC";
              case "Ed":
                return "OKP";
              default:
                throw new s.JOSENotSupported(
                  'Unsupported "alg" value for a JSON Web Key Set'
                );
            }
          })(i),
          a = this._jwks.keys.filter((e) => {
            let t = n === e.kty;
            if (
              (t && "string" == typeof r && (t = r === e.kid),
              t && "string" == typeof e.alg && (t = i === e.alg),
              t && "string" == typeof e.use && (t = "sig" === e.use),
              t &&
                Array.isArray(e.key_ops) &&
                (t = e.key_ops.includes("verify")),
              t &&
                "EdDSA" === i &&
                (t = "Ed25519" === e.crv || "Ed448" === e.crv),
              t)
            )
              switch (i) {
                case "ES256":
                  t = "P-256" === e.crv;
                  break;
                case "ES256K":
                  t = "secp256k1" === e.crv;
                  break;
                case "ES384":
                  t = "P-384" === e.crv;
                  break;
                case "ES512":
                  t = "P-521" === e.crv;
              }
            return t;
          }),
          { 0: o, length: l } = a;
        if (0 === l) throw new s.JWKSNoMatchingKey();
        if (1 !== l) {
          let e = new s.JWKSMultipleMatchingKeys(),
            { _cached: t } = this;
          throw (
            ((e[Symbol.asyncIterator] = async function* () {
              for (let e of a)
                try {
                  yield await eq(t, e, i);
                } catch (e) {
                  continue;
                }
            }),
            e)
          );
        }
        return eq(this._cached, o, i);
      }
    }
    async function eq(e, t, i) {
      let r = e.get(t) || e.set(t, {}).get(t);
      if (void 0 === r[i]) {
        let e = await K({ ...t, ext: !0 }, i);
        if (e instanceof Uint8Array || "public" !== e.type)
          throw new s.JWKSInvalid(
            "JSON Web Key Set members must be public keys"
          );
        r[i] = e;
      }
      return r[i];
    }
    function eH(e) {
      let t = new eK(e);
      return async function (e, i) {
        return t.getKey(e, i);
      };
    }
    e.s(
      [
        "LocalJWKSet",
        () => eK,
        "createLocalJWKSet",
        () => eH,
        "isJWKSLike",
        () => eW,
      ],
      798065
    );
    let e$ = async (e, t, i) => {
      let r,
        n,
        a = !1;
      "function" == typeof AbortController &&
        ((r = new AbortController()),
        (n = setTimeout(() => {
          (a = !0), r.abort();
        }, t)));
      let o = await fetch(e.href, {
        signal: r ? r.signal : void 0,
        redirect: "manual",
        headers: i.headers,
      }).catch((e) => {
        if (a) throw new s.JWKSTimeout();
        throw e;
      });
      if ((void 0 !== n && clearTimeout(n), 200 !== o.status))
        throw new s.JOSEError(
          "Expected 200 OK from the JSON Web Key Set HTTP response"
        );
      try {
        return await o.json();
      } catch (e) {
        throw new s.JOSEError(
          "Failed to parse the JSON Web Key Set HTTP response as JSON"
        );
      }
    };
    class eJ extends eK {
      constructor(e, t) {
        if ((super({ keys: [] }), (this._jwks = void 0), !(e instanceof URL)))
          throw TypeError("url must be an instance of URL");
        (this._url = new URL(e.href)),
          (this._options = {
            agent: null == t ? void 0 : t.agent,
            headers: null == t ? void 0 : t.headers,
          }),
          (this._timeoutDuration =
            "number" == typeof (null == t ? void 0 : t.timeoutDuration)
              ? null == t
                ? void 0
                : t.timeoutDuration
              : 5e3),
          (this._cooldownDuration =
            "number" == typeof (null == t ? void 0 : t.cooldownDuration)
              ? null == t
                ? void 0
                : t.cooldownDuration
              : 3e4),
          (this._cacheMaxAge =
            "number" == typeof (null == t ? void 0 : t.cacheMaxAge)
              ? null == t
                ? void 0
                : t.cacheMaxAge
              : 6e5);
      }
      coolingDown() {
        return (
          "number" == typeof this._jwksTimestamp &&
          Date.now() < this._jwksTimestamp + this._cooldownDuration
        );
      }
      fresh() {
        return (
          "number" == typeof this._jwksTimestamp &&
          Date.now() < this._jwksTimestamp + this._cacheMaxAge
        );
      }
      async getKey(e, t) {
        (this._jwks && this.fresh()) || (await this.reload());
        try {
          return await super.getKey(e, t);
        } catch (i) {
          if (i instanceof s.JWKSNoMatchingKey && !1 === this.coolingDown())
            return await this.reload(), super.getKey(e, t);
          throw i;
        }
      }
      async reload() {
        this._pendingFetch &&
          ("u" > typeof WebSocketPair ||
            ("u" > typeof navigator &&
              "Cloudflare-Workers" === navigator.userAgent) ||
            ("u" > typeof EdgeRuntime && "vercel" === EdgeRuntime)) &&
          (this._pendingFetch = void 0),
          this._pendingFetch ||
            (this._pendingFetch = e$(
              this._url,
              this._timeoutDuration,
              this._options
            )
              .then((e) => {
                if (!eW(e))
                  throw new s.JWKSInvalid("JSON Web Key Set malformed");
                (this._jwks = { keys: e.keys }),
                  (this._jwksTimestamp = Date.now()),
                  (this._pendingFetch = void 0);
              })
              .catch((e) => {
                throw ((this._pendingFetch = void 0), e);
              })),
          await this._pendingFetch;
      }
    }
    function ez(e, t) {
      let i = new eJ(e, t);
      return async function (e, t) {
        return i.getKey(e, t);
      };
    }
    e.s(["createRemoteJWKSet", () => ez], 950653);
    class eF extends eO {
      encode() {
        let e = t.encode(JSON.stringify({ alg: "none" })),
          i = t.encode(JSON.stringify(this._payload));
        return `${e}.${i}.`;
      }
      static decode(e, i) {
        let r;
        if ("string" != typeof e)
          throw new s.JWTInvalid("Unsecured JWT must be a string");
        let { 0: n, 1: a, 2: o, length: l } = e.split(".");
        if (3 !== l || "" !== o)
          throw new s.JWTInvalid("Invalid Unsecured JWT");
        try {
          if (
            ((r = JSON.parse(y.decoder.decode(t.decode(n)))), "none" !== r.alg)
          )
            throw Error();
        } catch (e) {
          throw new s.JWTInvalid("Invalid Unsecured JWT");
        }
        return { payload: e_(r, t.decode(a), i), header: r };
      }
    }
    e.s(["UnsecuredJWT", () => eF], 52851);
    var eV = e.i(95351);
    function eG(e) {
      let t;
      if ("string" == typeof e) {
        let i = e.split(".");
        (3 === i.length || 5 === i.length) && ([t] = i);
      } else if ("object" == typeof e && e)
        if ("protected" in e) t = e.protected;
        else throw TypeError("Token does not contain a Protected Header");
      try {
        if ("string" != typeof t || !t) throw Error();
        let e = JSON.parse(y.decoder.decode((0, eV.decode)(t)));
        if (!(0, a.default)(e)) throw Error();
        return e;
      } catch (e) {
        throw TypeError("Invalid Token or Protected Header formatting");
      }
    }
    e.s(["decodeProtectedHeader", () => eG], 855602);
  },
  49647,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.toBig =
        i.shrSL =
        i.shrSH =
        i.rotrSL =
        i.rotrSH =
        i.rotrBL =
        i.rotrBH =
        i.rotr32L =
        i.rotr32H =
        i.rotlSL =
        i.rotlSH =
        i.rotlBL =
        i.rotlBH =
        i.add5L =
        i.add5H =
        i.add4L =
        i.add4H =
        i.add3L =
        i.add3H =
          void 0),
      (i.add = v),
      (i.fromBig = n),
      (i.split = a);
    let r = BigInt(0x100000000 - 1),
      s = BigInt(32);
    function n(e, t = !1) {
      return t
        ? { h: Number(e & r), l: Number((e >> s) & r) }
        : { h: 0 | Number((e >> s) & r), l: 0 | Number(e & r) };
    }
    function a(e, t = !1) {
      let i = e.length,
        r = new Uint32Array(i),
        s = new Uint32Array(i);
      for (let a = 0; a < i; a++) {
        let { h: i, l: o } = n(e[a], t);
        [r[a], s[a]] = [i, o];
      }
      return [r, s];
    }
    let o = (e, t) => (BigInt(e >>> 0) << s) | BigInt(t >>> 0);
    i.toBig = o;
    let l = (e, t, i) => e >>> i;
    i.shrSH = l;
    let c = (e, t, i) => (e << (32 - i)) | (t >>> i);
    i.shrSL = c;
    let h = (e, t, i) => (e >>> i) | (t << (32 - i));
    i.rotrSH = h;
    let d = (e, t, i) => (e << (32 - i)) | (t >>> i);
    i.rotrSL = d;
    let u = (e, t, i) => (e << (64 - i)) | (t >>> (i - 32));
    i.rotrBH = u;
    let p = (e, t, i) => (e >>> (i - 32)) | (t << (64 - i));
    i.rotrBL = p;
    let f = (e, t) => t;
    i.rotr32H = f;
    let g = (e, t) => e;
    i.rotr32L = g;
    let y = (e, t, i) => (e << i) | (t >>> (32 - i));
    i.rotlSH = y;
    let m = (e, t, i) => (t << i) | (e >>> (32 - i));
    i.rotlSL = m;
    let w = (e, t, i) => (t << (i - 32)) | (e >>> (64 - i));
    i.rotlBH = w;
    let b = (e, t, i) => (e << (i - 32)) | (t >>> (64 - i));
    function v(e, t, i, r) {
      let s = (t >>> 0) + (r >>> 0);
      return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
    }
    i.rotlBL = b;
    let E = (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0);
    i.add3L = E;
    let _ = (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0;
    i.add3H = _;
    let I = (e, t, i, r) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0);
    i.add4L = I;
    let S = (e, t, i, r, s) => (t + i + r + s + ((e / 0x100000000) | 0)) | 0;
    i.add4H = S;
    let A = (e, t, i, r, s) =>
      (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0);
    i.add5L = A;
    let P = (e, t, i, r, s, n) =>
      (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0;
    (i.add5H = P),
      (i.default = {
        fromBig: n,
        split: a,
        toBig: o,
        shrSH: l,
        shrSL: c,
        rotrSH: h,
        rotrSL: d,
        rotrBH: u,
        rotrBL: p,
        rotr32H: f,
        rotr32L: g,
        rotlSH: y,
        rotlSL: m,
        rotlBH: w,
        rotlBL: b,
        add: v,
        add3L: E,
        add3H: _,
        add4L: I,
        add4H: S,
        add5H: P,
        add5L: A,
      });
  },
  823033,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.crypto = void 0),
      (i.crypto =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0);
  },
  781887,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.wrapXOFConstructorWithOpts =
        i.wrapConstructorWithOpts =
        i.wrapConstructor =
        i.Hash =
        i.nextTick =
        i.swap32IfBE =
        i.byteSwapIfBE =
        i.swap8IfBE =
        i.isLE =
          void 0),
      (i.isBytes = s),
      (i.anumber = n),
      (i.abytes = a),
      (i.ahash = function (e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        n(e.outputLen), n(e.blockLen);
      }),
      (i.aexists = function (e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }),
      (i.aoutput = function (e, t) {
        a(e);
        let i = t.outputLen;
        if (e.length < i)
          throw Error(
            "digestInto() expects output buffer of length at least " + i
          );
      }),
      (i.u8 = function (e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }),
      (i.u32 = function (e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }),
      (i.clean = function (...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }),
      (i.createView = function (e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }),
      (i.rotr = function (e, t) {
        return (e << (32 - t)) | (e >>> t);
      }),
      (i.rotl = function (e, t) {
        return (e << t) | ((e >>> (32 - t)) >>> 0);
      }),
      (i.byteSwap = o),
      (i.byteSwap32 = l),
      (i.bytesToHex = function (e) {
        if ((a(e), c)) return e.toHex();
        let t = "";
        for (let i = 0; i < e.length; i++) t += h[e[i]];
        return t;
      }),
      (i.hexToBytes = function (e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (c) return Uint8Array.fromHex(e);
        let t = e.length,
          i = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(i);
        for (let t = 0, s = 0; t < i; t++, s += 2) {
          let i = d(e.charCodeAt(s)),
            n = d(e.charCodeAt(s + 1));
          if (void 0 === i || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[s] + e[s + 1]) +
                '" at index ' +
                s
            );
          r[t] = 16 * i + n;
        }
        return r;
      }),
      (i.asyncLoop = u),
      (i.utf8ToBytes = p),
      (i.bytesToUtf8 = function (e) {
        return new TextDecoder().decode(e);
      }),
      (i.toBytes = f),
      (i.kdfInputToBytes = function (e) {
        return "string" == typeof e && (e = p(e)), a(e), e;
      }),
      (i.concatBytes = function (...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          a(r), (t += r.length);
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let s = e[t];
          i.set(s, r), (r += s.length);
        }
        return i;
      }),
      (i.checkOpts = function (e, t) {
        if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
          throw Error("options should be object or undefined");
        return Object.assign(e, t);
      }),
      (i.createHasher = g),
      (i.createOptHasher = y),
      (i.createXOFer = m),
      (i.randomBytes = function (e = 32) {
        if (r.crypto && "function" == typeof r.crypto.getRandomValues)
          return r.crypto.getRandomValues(new Uint8Array(e));
        if (r.crypto && "function" == typeof r.crypto.randomBytes)
          return Uint8Array.from(r.crypto.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      });
    let r = e.r(823033);
    function s(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function n(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function a(e, ...t) {
      if (!s(e)) throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    function o(e) {
      return (
        ((e << 24) & 0xff000000) |
        ((e << 8) & 0xff0000) |
        ((e >>> 8) & 65280) |
        ((e >>> 24) & 255)
      );
    }
    function l(e) {
      for (let t = 0; t < e.length; t++) e[t] = o(e[t]);
      return e;
    }
    (i.isLE = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
      (i.swap8IfBE = i.isLE ? (e) => e : (e) => o(e)),
      (i.byteSwapIfBE = i.swap8IfBE),
      (i.swap32IfBE = i.isLE ? (e) => e : l);
    let c =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      h = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function d(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    async function u(e, t, r) {
      let s = Date.now();
      for (let n = 0; n < e; n++) {
        r(n);
        let e = Date.now() - s;
        (e >= 0 && e < t) || (await (0, i.nextTick)(), (s += e));
      }
    }
    function p(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    function f(e) {
      return "string" == typeof e && (e = p(e)), a(e), e;
    }
    function g(e) {
      let t = (t) => e().update(f(t)).digest(),
        i = e();
      return (
        (t.outputLen = i.outputLen),
        (t.blockLen = i.blockLen),
        (t.create = () => e()),
        t
      );
    }
    function y(e) {
      let t = (t, i) => e(i).update(f(t)).digest(),
        i = e({});
      return (
        (t.outputLen = i.outputLen),
        (t.blockLen = i.blockLen),
        (t.create = (t) => e(t)),
        t
      );
    }
    function m(e) {
      let t = (t, i) => e(i).update(f(t)).digest(),
        i = e({});
      return (
        (t.outputLen = i.outputLen),
        (t.blockLen = i.blockLen),
        (t.create = (t) => e(t)),
        t
      );
    }
    (i.nextTick = async () => {}),
      (i.Hash = class {}),
      (i.wrapConstructor = g),
      (i.wrapConstructorWithOpts = y),
      (i.wrapXOFConstructorWithOpts = m);
  },
  422608,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.shake256 =
        i.shake128 =
        i.keccak_512 =
        i.keccak_384 =
        i.keccak_256 =
        i.keccak_224 =
        i.sha3_512 =
        i.sha3_384 =
        i.sha3_256 =
        i.sha3_224 =
        i.Keccak =
          void 0),
      (i.keccakP = b);
    let r = e.r(49647),
      s = e.r(781887),
      n = BigInt(0),
      a = BigInt(1),
      o = BigInt(2),
      l = BigInt(7),
      c = BigInt(256),
      h = BigInt(113),
      d = [],
      u = [],
      p = [];
    for (let e = 0, t = a, i = 1, r = 0; e < 24; e++) {
      ([i, r] = [r, (2 * i + 3 * r) % 5]),
        d.push(2 * (5 * r + i)),
        u.push((((e + 1) * (e + 2)) / 2) % 64);
      let s = n;
      for (let e = 0; e < 7; e++)
        (t = ((t << a) ^ ((t >> l) * h)) % c) & o &&
          (s ^= a << ((a << BigInt(e)) - a));
      p.push(s);
    }
    let f = (0, r.split)(p, !0),
      g = f[0],
      y = f[1],
      m = (e, t, i) =>
        i > 32 ? (0, r.rotlBH)(e, t, i) : (0, r.rotlSH)(e, t, i),
      w = (e, t, i) =>
        i > 32 ? (0, r.rotlBL)(e, t, i) : (0, r.rotlSL)(e, t, i);
    function b(e, t = 24) {
      let i = new Uint32Array(10);
      for (let r = 24 - t; r < 24; r++) {
        for (let t = 0; t < 10; t++)
          i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
        for (let t = 0; t < 10; t += 2) {
          let r = (t + 8) % 10,
            s = (t + 2) % 10,
            n = i[s],
            a = i[s + 1],
            o = m(n, a, 1) ^ i[r],
            l = w(n, a, 1) ^ i[r + 1];
          for (let i = 0; i < 50; i += 10) (e[t + i] ^= o), (e[t + i + 1] ^= l);
        }
        let t = e[2],
          s = e[3];
        for (let i = 0; i < 24; i++) {
          let r = u[i],
            n = m(t, s, r),
            a = w(t, s, r),
            o = d[i];
          (t = e[o]), (s = e[o + 1]), (e[o] = n), (e[o + 1] = a);
        }
        for (let t = 0; t < 50; t += 10) {
          for (let r = 0; r < 10; r++) i[r] = e[t + r];
          for (let r = 0; r < 10; r++)
            e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
        }
        (e[0] ^= g[r]), (e[1] ^= y[r]);
      }
      (0, s.clean)(i);
    }
    class v extends s.Hash {
      constructor(e, t, i, r = !1, n = 24) {
        if (
          (super(),
          (this.pos = 0),
          (this.posOut = 0),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.enableXOF = !1),
          (this.blockLen = e),
          (this.suffix = t),
          (this.outputLen = i),
          (this.enableXOF = r),
          (this.rounds = n),
          (0, s.anumber)(i),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)),
          (this.state32 = (0, s.u32)(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        (0, s.swap32IfBE)(this.state32),
          b(this.state32, this.rounds),
          (0, s.swap32IfBE)(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        (0, s.aexists)(this), (e = (0, s.toBytes)(e)), (0, s.abytes)(e);
        let { blockLen: t, state: i } = this,
          r = e.length;
        for (let s = 0; s < r; ) {
          let n = Math.min(t - this.pos, r - s);
          for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
          this.pos === t && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished) return;
        this.finished = !0;
        let { state: e, suffix: t, pos: i, blockLen: r } = this;
        (e[i] ^= t),
          (128 & t) != 0 && i === r - 1 && this.keccak(),
          (e[r - 1] ^= 128),
          this.keccak();
      }
      writeInto(e) {
        (0, s.aexists)(this, !1), (0, s.abytes)(e), this.finish();
        let t = this.state,
          { blockLen: i } = this;
        for (let r = 0, s = e.length; r < s; ) {
          this.posOut >= i && this.keccak();
          let n = Math.min(i - this.posOut, s - r);
          e.set(t.subarray(this.posOut, this.posOut + n), r),
            (this.posOut += n),
            (r += n);
        }
        return e;
      }
      xofInto(e) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(e);
      }
      xof(e) {
        return (0, s.anumber)(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        if (((0, s.aoutput)(e, this), this.finished))
          throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), (0, s.clean)(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: i,
          outputLen: r,
          rounds: s,
          enableXOF: n,
        } = this;
        return (
          e || (e = new v(t, i, r, n, s)),
          e.state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = s),
          (e.suffix = i),
          (e.outputLen = r),
          (e.enableXOF = n),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    i.Keccak = v;
    let E = (e, t, i) => (0, s.createHasher)(() => new v(t, e, i));
    (i.sha3_224 = E(6, 144, 28)),
      (i.sha3_256 = E(6, 136, 32)),
      (i.sha3_384 = E(6, 104, 48)),
      (i.sha3_512 = E(6, 72, 64)),
      (i.keccak_224 = E(1, 144, 28)),
      (i.keccak_256 = E(1, 136, 32)),
      (i.keccak_384 = E(1, 104, 48)),
      (i.keccak_512 = E(1, 72, 64));
    let _ = (e, t, i) =>
      (0, s.createXOFer)(
        (r = {}) => new v(t, e, void 0 === r.dkLen ? i : r.dkLen, !0)
      );
    (i.shake128 = _(31, 168, 16)), (i.shake256 = _(31, 136, 32));
  },
  182487,
  (e, t, i) => {
    var r = e.i(594027);
    let { keccak_256: s } = e.r(422608);
    function n(e) {
      return r.Buffer.allocUnsafe(e).fill(0);
    }
    function a(e, t) {
      let i = e.toString(16);
      i.length % 2 != 0 && (i = "0" + i);
      let s = i.match(/.{1,2}/g).map((e) => parseInt(e, 16));
      for (; s.length < t; ) s.unshift(0);
      return r.Buffer.from(s);
    }
    function o(e, t, i) {
      let r = n(t);
      return ((e = l(e)), i)
        ? e.length < t
          ? (e.copy(r), r)
          : e.slice(0, t)
        : e.length < t
        ? (e.copy(r, t - e.length), r)
        : e.slice(-t);
    }
    function l(e) {
      if (!r.Buffer.isBuffer(e))
        if (Array.isArray(e)) e = r.Buffer.from(e);
        else if ("string" == typeof e) {
          var t;
          e = c(e)
            ? r.Buffer.from((t = h(e)).length % 2 ? "0" + t : t, "hex")
            : r.Buffer.from(e);
        } else if ("number" == typeof e) e = intToBuffer(e);
        else if (null == e) e = r.Buffer.allocUnsafe(0);
        else if ("bigint" == typeof e) e = a(e);
        else if (e.toArray) e = r.Buffer.from(e.toArray());
        else throw Error("invalid type");
      return e;
    }
    function c(e) {
      return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
    }
    function h(e) {
      return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
    }
    t.exports = {
      zeros: n,
      setLength: o,
      setLengthRight: function (e, t) {
        return o(e, t, !0);
      },
      isHexString: c,
      stripHexPrefix: h,
      toBuffer: l,
      bufferToHex: function (e) {
        return "0x" + (e = l(e)).toString("hex");
      },
      keccak: function (e, t) {
        if (((e = l(e)), t || (t = 256), 256 !== t)) throw Error("unsupported");
        return r.Buffer.from(s(new Uint8Array(e)));
      },
      bitLengthFromBigInt: function (e) {
        return e.toString(2).length;
      },
      bufferBEFromBigInt: a,
      twosFromBigInt: function (e, t) {
        return (
          (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
          ((1n << BigInt(t)) - 1n)
        );
      },
    };
  },
  668297,
  (e, t, i) => {
    var r = e.i(594027);
    let s = e.r(182487);
    function n(e) {
      if (e.startsWith("int[")) return "int256" + e.slice(3);
      if ("int" === e) return "int256";
      if (e.startsWith("uint[")) return "uint256" + e.slice(4);
      if ("uint" === e) return "uint256";
      if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
      else if ("fixed" === e) return "fixed128x128";
      else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
      else if ("ufixed" === e) return "ufixed128x128";
      return e;
    }
    function a(e) {
      return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
    }
    function o(e) {
      var t = /^\D+(\d+)x(\d+)$/.exec(e);
      return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
    }
    function l(e) {
      var t = e.match(/(.*)\[(.*?)\]$/);
      return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
    }
    function c(e) {
      var t = typeof e;
      if ("string" === t || "number" === t) return BigInt(e);
      if ("bigint" === t) return e;
      throw Error("Argument is not a number");
    }
    function h(e, t) {
      if ("address" === e) return h("uint160", c(t));
      if ("bool" === e) return h("uint8", +!!t);
      if ("string" === e) return h("bytes", new r.Buffer(t, "utf8"));
      if ((p = e).lastIndexOf("]") === p.length - 1) {
        if (void 0 === t.length) throw Error("Not an array?");
        if ("dynamic" !== (i = l(e)) && 0 !== i && t.length > i)
          throw Error("Elements exceed array size: " + i);
        for (u in ((d = []),
        (e = e.slice(0, e.lastIndexOf("["))),
        "string" == typeof t && (t = JSON.parse(t)),
        t))
          d.push(h(e, t[u]));
        if ("dynamic" === i) {
          var i,
            n,
            d,
            u,
            p,
            f = h("uint256", t.length);
          d.unshift(f);
        }
        return r.Buffer.concat(d);
      } else if ("bytes" === e)
        return (
          (t = new r.Buffer(t)),
          (d = r.Buffer.concat([h("uint256", t.length), t])),
          t.length % 32 != 0 &&
            (d = r.Buffer.concat([d, s.zeros(32 - (t.length % 32))])),
          d
        );
      else if (e.startsWith("bytes")) {
        if ((i = a(e)) < 1 || i > 32)
          throw Error("Invalid bytes<N> width: " + i);
        return s.setLengthRight(t, 32);
      } else if (e.startsWith("uint")) {
        if ((i = a(e)) % 8 || i < 8 || i > 256)
          throw Error("Invalid uint<N> width: " + i);
        n = c(t);
        let r = s.bitLengthFromBigInt(n);
        if (r > i)
          throw Error("Supplied uint exceeds width: " + i + " vs " + r);
        if (n < 0) throw Error("Supplied uint is negative");
        return s.bufferBEFromBigInt(n, 32);
      } else if (e.startsWith("int")) {
        if ((i = a(e)) % 8 || i < 8 || i > 256)
          throw Error("Invalid int<N> width: " + i);
        n = c(t);
        let r = s.bitLengthFromBigInt(n);
        if (r > i) throw Error("Supplied int exceeds width: " + i + " vs " + r);
        let o = s.twosFromBigInt(n, 256);
        return s.bufferBEFromBigInt(o, 32);
      } else if (e.startsWith("ufixed")) {
        if (((i = o(e)), (n = c(t)) < 0))
          throw Error("Supplied ufixed is negative");
        return h("uint256", n * BigInt(2) ** BigInt(i[1]));
      } else if (e.startsWith("fixed"))
        return (i = o(e)), h("int256", c(t) * BigInt(2) ** BigInt(i[1]));
      throw Error("Unsupported or invalid type: " + e);
    }
    function d(e, t) {
      if (e.length !== t.length)
        throw Error("Number of types are not matching the values");
      for (var i, o, l = [], h = 0; h < e.length; h++) {
        var d = n(e[h]),
          u = t[h];
        if ("bytes" === d) l.push(u);
        else if ("string" === d) l.push(new r.Buffer(u, "utf8"));
        else if ("bool" === d) l.push(new r.Buffer(u ? "01" : "00", "hex"));
        else if ("address" === d) l.push(s.setLength(u, 20));
        else if (d.startsWith("bytes")) {
          if ((i = a(d)) < 1 || i > 32)
            throw Error("Invalid bytes<N> width: " + i);
          l.push(s.setLengthRight(u, i));
        } else if (d.startsWith("uint")) {
          if ((i = a(d)) % 8 || i < 8 || i > 256)
            throw Error("Invalid uint<N> width: " + i);
          o = c(u);
          let e = s.bitLengthFromBigInt(o);
          if (e > i)
            throw Error("Supplied uint exceeds width: " + i + " vs " + e);
          l.push(s.bufferBEFromBigInt(o, i / 8));
        } else if (d.startsWith("int")) {
          if ((i = a(d)) % 8 || i < 8 || i > 256)
            throw Error("Invalid int<N> width: " + i);
          o = c(u);
          let e = s.bitLengthFromBigInt(o);
          if (e > i)
            throw Error("Supplied int exceeds width: " + i + " vs " + e);
          let t = s.twosFromBigInt(o, i);
          l.push(s.bufferBEFromBigInt(t, i / 8));
        } else throw Error("Unsupported or invalid type: " + d);
      }
      return r.Buffer.concat(l);
    }
    t.exports = {
      rawEncode: function (e, t) {
        var i = [],
          s = [],
          a = 32 * e.length;
        for (var o in e) {
          var c = n(e[o]),
            d = h(c, t[o]);
          "string" === c || "bytes" === c || "dynamic" === l(c)
            ? (i.push(h("uint256", a)), s.push(d), (a += d.length))
            : i.push(d);
        }
        return r.Buffer.concat(i.concat(s));
      },
      solidityPack: d,
      soliditySHA3: function (e, t) {
        return s.keccak(d(e, t));
      },
    };
  },
  497310,
  (e, t, i) => {
    var r = e.i(594027);
    let s = e.r(182487),
      n = e.r(668297),
      a = {
        type: "object",
        properties: {
          types: {
            type: "object",
            additionalProperties: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  type: { type: "string" },
                },
                required: ["name", "type"],
              },
            },
          },
          primaryType: { type: "string" },
          domain: { type: "object" },
          message: { type: "object" },
        },
        required: ["types", "primaryType", "domain", "message"],
      },
      o = {
        encodeData(e, t, i, a = !0) {
          let o = ["bytes32"],
            l = [this.hashType(e, i)];
          if (a) {
            let c = (e, t, o) => {
              if (void 0 !== i[t])
                return [
                  "bytes32",
                  null == o
                    ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                    : s.keccak(this.encodeData(t, o, i, a)),
                ];
              if (void 0 === o)
                throw Error(`missing value for field ${e} of type ${t}`);
              if ("bytes" === t) return ["bytes32", s.keccak(o)];
              if ("string" === t)
                return (
                  "string" == typeof o && (o = r.Buffer.from(o, "utf8")),
                  ["bytes32", s.keccak(o)]
                );
              if (t.lastIndexOf("]") === t.length - 1) {
                let i = t.slice(0, t.lastIndexOf("[")),
                  r = o.map((t) => c(e, i, t));
                return [
                  "bytes32",
                  s.keccak(
                    n.rawEncode(
                      r.map(([e]) => e),
                      r.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [t, o];
            };
            for (let r of i[e]) {
              let [e, i] = c(r.name, r.type, t[r.name]);
              o.push(e), l.push(i);
            }
          } else
            for (let n of i[e]) {
              let e = t[n.name];
              if (void 0 !== e)
                if ("bytes" === n.type)
                  o.push("bytes32"), (e = s.keccak(e)), l.push(e);
                else if ("string" === n.type)
                  o.push("bytes32"),
                    "string" == typeof e && (e = r.Buffer.from(e, "utf8")),
                    (e = s.keccak(e)),
                    l.push(e);
                else if (void 0 !== i[n.type])
                  o.push("bytes32"),
                    (e = s.keccak(this.encodeData(n.type, e, i, a))),
                    l.push(e);
                else if (n.type.lastIndexOf("]") === n.type.length - 1)
                  throw Error("Arrays currently unimplemented in encodeData");
                else o.push(n.type), l.push(e);
            }
          return n.rawEncode(o, l);
        },
        encodeType(e, t) {
          let i = "",
            r = this.findTypeDependencies(e, t).filter((t) => t !== e);
          for (let s of (r = [e].concat(r.sort()))) {
            if (!t[s]) throw Error("No type definition specified: " + s);
            i +=
              s +
              "(" +
              t[s].map(({ name: e, type: t }) => t + " " + e).join(",") +
              ")";
          }
          return i;
        },
        findTypeDependencies(e, t, i = []) {
          if (((e = e.match(/^\w*/)[0]), i.includes(e) || void 0 === t[e]))
            return i;
          for (let r of (i.push(e), t[e]))
            for (let e of this.findTypeDependencies(r.type, t, i))
              i.includes(e) || i.push(e);
          return i;
        },
        hashStruct(e, t, i, r = !0) {
          return s.keccak(this.encodeData(e, t, i, r));
        },
        hashType(e, t) {
          return s.keccak(this.encodeType(e, t));
        },
        sanitizeData(e) {
          let t = {};
          for (let i in a.properties) e[i] && (t[i] = e[i]);
          return (
            t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
            t
          );
        },
        hash(e, t = !0) {
          let i = this.sanitizeData(e),
            n = [r.Buffer.from("1901", "hex")];
          return (
            n.push(this.hashStruct("EIP712Domain", i.domain, i.types, t)),
            "EIP712Domain" !== i.primaryType &&
              n.push(this.hashStruct(i.primaryType, i.message, i.types, t)),
            s.keccak(r.Buffer.concat(n))
          );
        },
      };
    t.exports = {
      TYPED_MESSAGE_SCHEMA: a,
      TypedDataUtils: o,
      hashForSignTypedDataLegacy: function (e) {
        return (function (e) {
          let t = Error("Expect argument to be non-empty array");
          if ("object" != typeof e || !e.length) throw t;
          let i = e.map(function (e) {
              return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
            }),
            r = e.map(function (e) {
              return e.type;
            }),
            a = e.map(function (e) {
              if (!e.name) throw t;
              return e.type + " " + e.name;
            });
          return n.soliditySHA3(
            ["bytes32", "bytes32"],
            [
              n.soliditySHA3(Array(e.length).fill("string"), a),
              n.soliditySHA3(r, i),
            ]
          );
        })(e.data);
      },
      hashForSignTypedData_v3: function (e) {
        return o.hash(e.data, !1);
      },
      hashForSignTypedData_v4: function (e) {
        return o.hash(e.data);
      },
    };
  },
  980263,
  (e, t, i) => {
    "use strict";
    let r = e.r(94532);
    t.exports = h;
    let s =
      (function () {
        function e(e) {
          return void 0 !== e && e;
        }
        try {
          if ("u" > typeof globalThis) return globalThis;
          return (
            Object.defineProperty(Object.prototype, "globalThis", {
              get: function () {
                return (
                  delete Object.prototype.globalThis, (this.globalThis = this)
                );
              },
              configurable: !0,
            }),
            globalThis
          );
        } catch (t) {
          return e(self) || e(window) || e(this) || {};
        }
      })().console || {};
    function n(e, t) {
      return "silent" === e ? 1 / 0 : t.levels.values[e];
    }
    let a = Symbol("pino.logFuncs"),
      o = Symbol("pino.hierarchy"),
      l = {
        error: "log",
        fatal: "error",
        warn: "error",
        info: "log",
        debug: "log",
        trace: "log",
      };
    function c(e, t) {
      let i = { logger: t, parent: e[o] };
      t[o] = i;
    }
    function h(e) {
      var t, i, r;
      let o, f, g;
      (e = e || {}).browser = e.browser || {};
      let y = e.browser.transmit;
      if (y && "function" != typeof y.send)
        throw Error("pino: transmit option must have a send function");
      let v = e.browser.write || s;
      e.browser.write && (e.browser.asObject = !0);
      let E = e.serializers || {},
        _ =
          ((t = e.browser.serialize),
          Array.isArray(t)
            ? t.filter(function (e) {
                return "!stdSerializers.err" !== e;
              })
            : !0 === t && Object.keys(E)),
        I = e.browser.serialize;
      Array.isArray(e.browser.serialize) &&
        e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
        (I = !1);
      let S = Object.keys(e.customLevels || {}),
        A = ["error", "fatal", "warn", "info", "debug", "trace"].concat(S);
      "function" == typeof v &&
        A.forEach(function (e) {
          v[e] = v;
        }),
        (!1 === e.enabled || e.browser.disabled) && (e.level = "silent");
      let P = e.level || "info",
        C = Object.create(v);
      C.log || (C.log = m),
        (o = {}),
        A.forEach((e) => {
          o[e] = v[e] ? v[e] : s[e] || s[l[e] || "log"] || m;
        }),
        (C[a] = o),
        c({}, C),
        Object.defineProperty(C, "levelVal", {
          get: function () {
            return n(this.level, this);
          },
        }),
        Object.defineProperty(C, "level", {
          get: function () {
            return this._level;
          },
          set: function (e) {
            if ("silent" !== e && !this.levels.values[e])
              throw Error("unknown level " + e);
            (this._level = e),
              d(this, x, C, "error"),
              d(this, x, C, "fatal"),
              d(this, x, C, "warn"),
              d(this, x, C, "info"),
              d(this, x, C, "debug"),
              d(this, x, C, "trace"),
              S.forEach((e) => {
                d(this, x, C, e);
              });
          },
        });
      let x = {
        transmit: y,
        serialize: _,
        asObject: e.browser.asObject,
        asObjectBindingsOnly: e.browser.asObjectBindingsOnly,
        formatters: e.browser.formatters,
        levels: A,
        timestamp:
          "function" == typeof (i = e).timestamp
            ? i.timestamp
            : !1 === i.timestamp
            ? w
            : b,
        messageKey: e.messageKey || "msg",
        onChild: e.onChild || m,
      };
      function k(t, i, r) {
        if (!i) throw Error("missing bindings for child Pino");
        (r = r || {}), _ && i.serializers && (r.serializers = i.serializers);
        let s = r.serializers;
        if (_ && s) {
          var n = Object.assign({}, E, s),
            a = !0 === e.browser.serialize ? Object.keys(n) : _;
          delete i.serializers, u([i], a, n, this._stdErrSerialize);
        }
        function o(e) {
          (this._childLevel = (0 | e._childLevel) + 1),
            (this.bindings = i),
            n && ((this.serializers = n), (this._serialize = a)),
            y && (this._logEvent = p([].concat(e._logEvent.bindings, i)));
        }
        o.prototype = this;
        let l = new o(this);
        return (
          c(this, l),
          (l.child = function (...e) {
            return k.call(this, t, ...e);
          }),
          (l.level = r.level || this.level),
          t.onChild(l),
          l
        );
      }
      return (
        (f = e.customLevels || {}),
        (C.levels = {
          values: Object.assign({}, h.levels.values, f),
          labels: Object.assign(
            {},
            h.levels.labels,
            ((g = {}),
            Object.keys((r = f)).forEach(function (e) {
              g[r[e]] = e;
            }),
            g)
          ),
        }),
        (C.level = P),
        (C.isLevelEnabled = function (e) {
          return (
            !!this.levels.values[e] &&
            this.levels.values[e] >= this.levels.values[this.level]
          );
        }),
        (C.setMaxListeners =
          C.getMaxListeners =
          C.emit =
          C.addListener =
          C.on =
          C.prependListener =
          C.once =
          C.prependOnceListener =
          C.removeListener =
          C.removeAllListeners =
          C.listeners =
          C.listenerCount =
          C.eventNames =
          C.write =
          C.flush =
            m),
        (C.serializers = E),
        (C._serialize = _),
        (C._stdErrSerialize = I),
        (C.child = function (...e) {
          return k.call(this, x, ...e);
        }),
        y && (C._logEvent = p()),
        C
      );
    }
    function d(e, t, i, l) {
      var c, h, d, f, g, y, w;
      if (
        (Object.defineProperty(e, l, {
          value: n(e.level, i) > n(l, i) ? m : i[a][l],
          writable: !0,
          enumerable: !0,
          configurable: !0,
        }),
        e[l] === m)
      ) {
        if (!t.transmit) return;
        let r = n(t.transmit.level || e.level, i);
        if (n(l, i) < r) return;
      }
      e[l] =
        ((c = e),
        (h = t),
        (d = i),
        (f = l),
        (g = c[a][f]),
        function () {
          let e = h.timestamp(),
            t = Array(arguments.length),
            i =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === s
                ? s
                : this;
          for (var a = 0; a < t.length; a++) t[a] = arguments[a];
          var o = !1;
          if (
            (h.serialize &&
              (u(t, this._serialize, this.serializers, this._stdErrSerialize),
              (o = !0)),
            h.asObject || h.formatters
              ? g.call(
                  i,
                  ...(function (e, t, i, s, n) {
                    let { level: a, log: o = (e) => e } = n.formatters || {},
                      l = i.slice(),
                      c = l[0],
                      h = {},
                      d = (0 | e._childLevel) + 1;
                    if (
                      (d < 1 && (d = 1),
                      s && (h.time = s),
                      a
                        ? Object.assign(h, a(t, e.levels.values[t]))
                        : (h.level = e.levels.values[t]),
                      n.asObjectBindingsOnly)
                    ) {
                      if (null !== c && "object" == typeof c)
                        for (; d-- && "object" == typeof l[0]; )
                          Object.assign(h, l.shift());
                      return [o(h), ...l];
                    }
                    if (null !== c && "object" == typeof c) {
                      for (; d-- && "object" == typeof l[0]; )
                        Object.assign(h, l.shift());
                      c = l.length ? r(l.shift(), l) : void 0;
                    } else "string" == typeof c && (c = r(l.shift(), l));
                    return void 0 !== c && (h[n.messageKey] = c), [o(h)];
                  })(this, f, t, e, h)
                )
              : g.apply(i, t),
            h.transmit)
          ) {
            let i = h.transmit.level || c._level,
              r = n(i, d),
              s = n(f, d);
            if (s < r) return;
            !(function (e, t, i, r = !1) {
              let s = t.send,
                n = t.ts,
                a = t.methodLevel,
                o = t.methodValue,
                l = t.val,
                c = e._logEvent.bindings;
              r ||
                u(
                  i,
                  e._serialize || Object.keys(e.serializers),
                  e.serializers,
                  void 0 === e._stdErrSerialize || e._stdErrSerialize
                ),
                (e._logEvent.ts = n),
                (e._logEvent.messages = i.filter(function (e) {
                  return -1 === c.indexOf(e);
                })),
                (e._logEvent.level.label = a),
                (e._logEvent.level.value = o),
                s(a, e._logEvent, l),
                (e._logEvent = p(c));
            })(
              this,
              {
                ts: e,
                methodLevel: f,
                methodValue: s,
                transmitLevel: i,
                transmitValue: d.levels.values[h.transmit.level || c._level],
                send: h.transmit.send,
                val: n(c._level, d),
              },
              t,
              o
            );
          }
        });
      let b = (function (e) {
        let t = [];
        e.bindings && t.push(e.bindings);
        let i = e[o];
        for (; i.parent; )
          (i = i.parent).logger.bindings && t.push(i.logger.bindings);
        return t.reverse();
      })(e);
      0 !== b.length &&
        (e[l] =
          ((y = b),
          (w = e[l]),
          function () {
            return w.apply(this, [...y, ...arguments]);
          }));
    }
    function u(e, t, i, r) {
      for (let s in e)
        if (r && e[s] instanceof Error) e[s] = h.stdSerializers.err(e[s]);
        else if ("object" == typeof e[s] && !Array.isArray(e[s]) && t)
          for (let r in e[s])
            t.indexOf(r) > -1 && r in i && (e[s][r] = i[r](e[s][r]));
    }
    function p(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: { label: "", value: 0 },
      };
    }
    function f(e) {
      let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
      for (let i in e) void 0 === t[i] && (t[i] = e[i]);
      return t;
    }
    function g() {
      return {};
    }
    function y(e) {
      return e;
    }
    function m() {}
    function w() {
      return !1;
    }
    function b() {
      return Date.now();
    }
    (h.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10,
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal",
      },
    }),
      (h.stdSerializers = {
        mapHttpRequest: g,
        mapHttpResponse: g,
        wrapRequestSerializer: y,
        wrapResponseSerializer: y,
        wrapErrorSerializer: y,
        req: g,
        res: g,
        err: f,
        errWithCause: f,
      }),
      (h.stdTimeFunctions = Object.assign(
        {},
        {
          nullTime: w,
          epochTime: b,
          unixTime: function () {
            return Math.round(Date.now() / 1e3);
          },
          isoTime: function () {
            return new Date(Date.now()).toISOString();
          },
        }
      )),
      (t.exports.default = h),
      (t.exports.pino = h);
  },
  979936,
  775581,
  666900,
  (e) => {
    "use strict";
    let t, i, r, s, n, a, o;
    e.i(250763);
    var l,
      c,
      h = e.i(698039),
      d = e.i(32159),
      u = e.i(321103),
      p = e.i(293417),
      f = e.i(242632),
      g = e.i(761242),
      y = e.i(316051),
      m = e.i(482449),
      w = e.i(546731),
      b = e.i(28609),
      v = e.i(170446),
      E = e.i(179347),
      _ = e.i(956015),
      I = e.i(126091),
      S = e.i(435850),
      A = e.i(270553),
      P = e.i(912702),
      C = e.i(852708),
      x = e.i(798065),
      k = e.i(950653),
      T = e.i(52851),
      O = e.i(53560),
      R = e.i(279313),
      N = e.i(855602),
      j = e.i(143930),
      D = e.i(715949),
      M = e.i(278510),
      U = e.i(963109);
    async function L(e, t) {
      var i;
      let r, s, n;
      switch (e) {
        case "HS256":
        case "HS384":
        case "HS512":
          (r = parseInt(e.slice(-3), 10)),
            (s = { name: "HMAC", hash: `SHA-${r}`, length: r }),
            (n = ["sign", "verify"]);
          break;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return (
            (r = parseInt(e.slice(-3), 10)),
            (0, U.default)(new Uint8Array(r >> 3))
          );
        case "A128KW":
        case "A192KW":
        case "A256KW":
          (s = { name: "AES-KW", length: (r = parseInt(e.slice(1, 4), 10)) }),
            (n = ["wrapKey", "unwrapKey"]);
          break;
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          (s = { name: "AES-GCM", length: (r = parseInt(e.slice(1, 4), 10)) }),
            (n = ["encrypt", "decrypt"]);
          break;
        default:
          throw new D.JOSENotSupported(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
          );
      }
      return M.default.subtle.generateKey(
        s,
        null != (i = null == t ? void 0 : t.extractable) && i,
        n
      );
    }
    function W(e) {
      var t;
      let i = null != (t = null == e ? void 0 : e.modulusLength) ? t : 2048;
      if ("number" != typeof i || i < 2048)
        throw new D.JOSENotSupported(
          "Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used"
        );
      return i;
    }
    async function B(e, t) {
      var i, r, s;
      let n, a;
      switch (e) {
        case "PS256":
        case "PS384":
        case "PS512":
          (n = {
            name: "RSA-PSS",
            hash: `SHA-${e.slice(-3)}`,
            publicExponent: new Uint8Array([1, 0, 1]),
            modulusLength: W(t),
          }),
            (a = ["sign", "verify"]);
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          (n = {
            name: "RSASSA-PKCS1-v1_5",
            hash: `SHA-${e.slice(-3)}`,
            publicExponent: new Uint8Array([1, 0, 1]),
            modulusLength: W(t),
          }),
            (a = ["sign", "verify"]);
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          (n = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(e.slice(-3), 10) || 1}`,
            publicExponent: new Uint8Array([1, 0, 1]),
            modulusLength: W(t),
          }),
            (a = ["decrypt", "unwrapKey", "encrypt", "wrapKey"]);
          break;
        case "ES256":
          (n = { name: "ECDSA", namedCurve: "P-256" }),
            (a = ["sign", "verify"]);
          break;
        case "ES384":
          (n = { name: "ECDSA", namedCurve: "P-384" }),
            (a = ["sign", "verify"]);
          break;
        case "ES512":
          (n = { name: "ECDSA", namedCurve: "P-521" }),
            (a = ["sign", "verify"]);
          break;
        case "EdDSA":
          a = ["sign", "verify"];
          let o = null != (i = null == t ? void 0 : t.crv) ? i : "Ed25519";
          switch (o) {
            case "Ed25519":
            case "Ed448":
              n = { name: o };
              break;
            default:
              throw new D.JOSENotSupported(
                "Invalid or unsupported crv option provided"
              );
          }
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          a = ["deriveKey", "deriveBits"];
          let e = null != (r = null == t ? void 0 : t.crv) ? r : "P-256";
          switch (e) {
            case "P-256":
            case "P-384":
            case "P-521":
              n = { name: "ECDH", namedCurve: e };
              break;
            case "X25519":
            case "X448":
              n = { name: e };
              break;
            default:
              throw new D.JOSENotSupported(
                "Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448"
              );
          }
          break;
        }
        default:
          throw new D.JOSENotSupported(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
          );
      }
      return M.default.subtle.generateKey(
        n,
        null != (s = null == t ? void 0 : t.extractable) && s,
        a
      );
    }
    async function K(e, t) {
      return B(e, t);
    }
    async function q(e, t) {
      return L(e, t);
    }
    var H = e.i(95351);
    e.s(
      [
        "CompactEncrypt",
        () => b.CompactEncrypt,
        "CompactSign",
        () => E.CompactSign,
        "EmbeddedJWK",
        () => C.EmbeddedJWK,
        "EncryptJWT",
        () => A.EncryptJWT,
        "FlattenedEncrypt",
        () => v.FlattenedEncrypt,
        "FlattenedSign",
        () => _.FlattenedSign,
        "GeneralEncrypt",
        () => p.GeneralEncrypt,
        "GeneralSign",
        () => I.GeneralSign,
        "SignJWT",
        () => S.SignJWT,
        "UnsecuredJWT",
        () => T.UnsecuredJWT,
        "base64url",
        0,
        H,
        "calculateJwkThumbprint",
        () => P.calculateJwkThumbprint,
        "calculateJwkThumbprintUri",
        () => P.calculateJwkThumbprintUri,
        "compactDecrypt",
        () => h.compactDecrypt,
        "compactVerify",
        () => f.compactVerify,
        "createLocalJWKSet",
        () => x.createLocalJWKSet,
        "createRemoteJWKSet",
        () => k.createRemoteJWKSet,
        "cryptoRuntime",
        0,
        "WebCryptoAPI",
        "decodeJwt",
        () => j.decodeJwt,
        "decodeProtectedHeader",
        () => N.decodeProtectedHeader,
        "errors",
        0,
        D,
        "exportJWK",
        () => O.exportJWK,
        "exportPKCS8",
        () => O.exportPKCS8,
        "exportSPKI",
        () => O.exportSPKI,
        "flattenedDecrypt",
        () => d.flattenedDecrypt,
        "flattenedVerify",
        () => g.flattenedVerify,
        "generalDecrypt",
        () => u.generalDecrypt,
        "generalVerify",
        () => y.generalVerify,
        "generateKeyPair",
        () => K,
        "generateSecret",
        () => q,
        "importJWK",
        () => R.importJWK,
        "importPKCS8",
        () => R.importPKCS8,
        "importSPKI",
        () => R.importSPKI,
        "importX509",
        () => R.importX509,
        "jwtDecrypt",
        () => w.jwtDecrypt,
        "jwtVerify",
        () => m.jwtVerify,
      ],
      979936
    );
    class $ {
      constructor(e, t) {
        (this.scope = e), (this.module = t);
      }
      storeObject(e, t) {
        this.setItem(e, JSON.stringify(t));
      }
      loadObject(e) {
        let t = this.getItem(e);
        return t ? JSON.parse(t) : void 0;
      }
      setItem(e, t) {
        localStorage.setItem(this.scopedKey(e), t);
      }
      getItem(e) {
        return localStorage.getItem(this.scopedKey(e));
      }
      removeItem(e) {
        localStorage.removeItem(this.scopedKey(e));
      }
      clear() {
        let e = this.scopedKey(""),
          t = [];
        for (let i = 0; i < localStorage.length; i++) {
          let r = localStorage.key(i);
          "string" == typeof r && r.startsWith(e) && t.push(r);
        }
        t.forEach((e) => localStorage.removeItem(e));
      }
      scopedKey(e) {
        return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
      }
      static clearAll() {
        new $("CBWSDK").clear(), new $("walletlink").clear();
      }
    }
    var J = e.i(594027);
    let z = -32602,
      F = -32603,
      V = 4001,
      G = 4100,
      Y = 4200,
      Z = 4900,
      Q = {
        "-32700": {
          standard: "JSON RPC 2.0",
          message:
            "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
        },
        "-32600": {
          standard: "JSON RPC 2.0",
          message: "The JSON sent is not a valid Request object.",
        },
        "-32601": {
          standard: "JSON RPC 2.0",
          message: "The method does not exist / is not available.",
        },
        "-32602": {
          standard: "JSON RPC 2.0",
          message: "Invalid method parameter(s).",
        },
        "-32603": {
          standard: "JSON RPC 2.0",
          message: "Internal JSON-RPC error.",
        },
        "-32000": { standard: "EIP-1474", message: "Invalid input." },
        "-32001": { standard: "EIP-1474", message: "Resource not found." },
        "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
        "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
        "-32004": { standard: "EIP-1474", message: "Method not supported." },
        "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
        4001: { standard: "EIP-1193", message: "User rejected the request." },
        4100: {
          standard: "EIP-1193",
          message:
            "The requested account and/or method has not been authorized by the user.",
        },
        4200: {
          standard: "EIP-1193",
          message:
            "The requested method is not supported by this Ethereum provider.",
        },
        4900: {
          standard: "EIP-1193",
          message: "The provider is disconnected from all chains.",
        },
        4901: {
          standard: "EIP-1193",
          message: "The provider is disconnected from the specified chain.",
        },
        4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
      },
      X = "Unspecified error message.";
    function ee(e, t = X) {
      if (e && Number.isInteger(e)) {
        var i;
        let t = e.toString();
        if (ei(Q, t)) return Q[t].message;
        if ((i = e) >= -32099 && i <= -32e3) return "Unspecified server error.";
      }
      return t;
    }
    function et(e) {
      return e && "object" == typeof e && !Array.isArray(e)
        ? Object.assign({}, e)
        : e;
    }
    function ei(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function er(e, t) {
      return (
        "object" == typeof e && null !== e && t in e && "string" == typeof e[t]
      );
    }
    let es = (e) => ed(z, e),
      en = (e) => ed(F, e),
      ea = (e) => eu(V, e),
      eo = (e) => eu(G, e),
      el = (e) => eu(Y, e),
      ec = (e) => eu(Z, e),
      eh = (e) => {
        if (!e || "object" != typeof e || Array.isArray(e))
          throw Error(
            "Ethereum Provider custom errors must provide single object argument."
          );
        let { code: t, message: i, data: r } = e;
        if (!i || "string" != typeof i)
          throw Error('"message" must be a nonempty string');
        return new eg(t, i, r);
      };
    function ed(e, t) {
      let [i, r] = ep(t);
      return new ef(e, i || ee(e), r);
    }
    function eu(e, t) {
      let [i, r] = ep(t);
      return new eg(e, i || ee(e), r);
    }
    function ep(e) {
      if (e) {
        if ("string" == typeof e) return [e];
        else if ("object" == typeof e && !Array.isArray(e)) {
          let { message: t, data: i } = e;
          if (t && "string" != typeof t)
            throw Error("Must specify string message.");
          return [t || void 0, i];
        }
      }
      return [];
    }
    class ef extends Error {
      constructor(e, t, i) {
        if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
        if (!t || "string" != typeof t)
          throw Error('"message" must be a nonempty string.');
        super(t), (this.code = e), void 0 !== i && (this.data = i);
      }
    }
    class eg extends ef {
      constructor(e, t, i) {
        if (
          !(function (e) {
            return Number.isInteger(e) && e >= 1e3 && e <= 4999;
          })(e)
        )
          throw Error(
            '"code" must be an integer such that: 1000 <= code <= 4999'
          );
        super(e, t, i);
      }
    }
    function ey(e) {
      return Math.floor(e);
    }
    let em = /^[0-9]*$/,
      ew = /^[a-f0-9]*$/;
    function eb(e) {
      return ev(crypto.getRandomValues(new Uint8Array(e)));
    }
    function ev(e) {
      return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
    }
    function eE(e) {
      return new Uint8Array(
        e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
      );
    }
    function e_(e, t = !1) {
      let i = e.toString("hex");
      return t ? `0x${i}` : i;
    }
    function eI(e) {
      return e_(eR(e), !0);
    }
    function eS(e) {
      return e.toString(10);
    }
    function eA(e) {
      return `0x${BigInt(e).toString(16)}`;
    }
    function eP(e) {
      return e.startsWith("0x") || e.startsWith("0X");
    }
    function eC(e) {
      return eP(e) ? e.slice(2) : e;
    }
    function ex(e) {
      return eP(e) ? `0x${e.slice(2)}` : `0x${e}`;
    }
    function ek(e) {
      if ("string" != typeof e) return !1;
      let t = eC(e).toLowerCase();
      return ew.test(t);
    }
    function eT(e, t = !1) {
      let i = (function (e, t = !1) {
        if ("string" == typeof e) {
          let i = eC(e).toLowerCase();
          if (ew.test(i)) return t ? `0x${i}` : i;
        }
        throw es(`"${String(e)}" is not a hexadecimal string`);
      })(e, !1);
      return i.length % 2 == 1 && (i = `0${i}`), t ? `0x${i}` : i;
    }
    function eO(e) {
      if ("string" == typeof e) {
        let t = eC(e).toLowerCase();
        if (ek(t) && 40 === t.length) return ex(t);
      }
      throw es(`Invalid Ethereum address: ${String(e)}`);
    }
    function eR(e) {
      if (J.Buffer.isBuffer(e)) return e;
      if ("string" == typeof e) {
        if (ek(e)) {
          let t = eT(e, !1);
          return J.Buffer.from(t, "hex");
        }
        return J.Buffer.from(e, "utf8");
      }
      throw es(`Not binary data: ${String(e)}`);
    }
    function eN(e) {
      if ("number" == typeof e && Number.isInteger(e)) return ey(e);
      if ("string" == typeof e) {
        if (em.test(e)) return ey(Number(e));
        if (ek(e)) return ey(Number(BigInt(eT(e, !0))));
      }
      throw es(`Not an integer: ${String(e)}`);
    }
    function ej(e) {
      if (
        null !== e &&
        ("bigint" == typeof e ||
          (function (e) {
            if (null == e || "function" != typeof e.constructor) return !1;
            let { constructor: t } = e;
            return "function" == typeof t.config && "number" == typeof t.EUCLID;
          })(e))
      )
        return BigInt(e.toString(10));
      if ("number" == typeof e) return BigInt(eN(e));
      if ("string" == typeof e) {
        if (em.test(e)) return BigInt(e);
        if (ek(e)) return BigInt(eT(e, !0));
      }
      throw es(`Not an integer: ${String(e)}`);
    }
    async function eD() {
      return crypto.subtle.generateKey(
        { name: "ECDH", namedCurve: "P-256" },
        !0,
        ["deriveKey"]
      );
    }
    async function eM(e, t) {
      return crypto.subtle.deriveKey(
        { name: "ECDH", public: t },
        e,
        { name: "AES-GCM", length: 256 },
        !1,
        ["encrypt", "decrypt"]
      );
    }
    async function eU(e, t) {
      let i = crypto.getRandomValues(new Uint8Array(12)),
        r = await crypto.subtle.encrypt(
          { name: "AES-GCM", iv: i },
          e,
          new TextEncoder().encode(t)
        );
      return { iv: i, cipherText: r };
    }
    async function eL(e, { iv: t, cipherText: i }) {
      let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, i);
      return new TextDecoder().decode(r);
    }
    function eW(e) {
      switch (e) {
        case "public":
          return "spki";
        case "private":
          return "pkcs8";
      }
    }
    async function eB(e, t) {
      let i = eW(e);
      return ev(new Uint8Array(await crypto.subtle.exportKey(i, t)));
    }
    async function eK(e, t) {
      let i = eW(e),
        r = eE(t).buffer;
      return await crypto.subtle.importKey(
        i,
        new Uint8Array(r),
        { name: "ECDH", namedCurve: "P-256" },
        !0,
        "private" === e ? ["deriveKey"] : []
      );
    }
    async function eq(e, t) {
      return eU(
        t,
        JSON.stringify(e, (e, t) =>
          t instanceof Error
            ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                message: t.message,
              })
            : t
        )
      );
    }
    async function eH(e, t) {
      return JSON.parse(await eL(t, e));
    }
    let e$ = { storageKey: "ownPrivateKey", keyType: "private" },
      eJ = { storageKey: "ownPublicKey", keyType: "public" },
      ez = { storageKey: "peerPublicKey", keyType: "public" };
    class eF {
      constructor() {
        (this.storage = new $("CBWSDK", "SCWKeyManager")),
          (this.ownPrivateKey = null),
          (this.ownPublicKey = null),
          (this.peerPublicKey = null),
          (this.sharedSecret = null);
      }
      async getOwnPublicKey() {
        return await this.loadKeysIfNeeded(), this.ownPublicKey;
      }
      async getSharedSecret() {
        return await this.loadKeysIfNeeded(), this.sharedSecret;
      }
      async setPeerPublicKey(e) {
        (this.sharedSecret = null),
          (this.peerPublicKey = e),
          await this.storeKey(ez, e),
          await this.loadKeysIfNeeded();
      }
      async clear() {
        (this.ownPrivateKey = null),
          (this.ownPublicKey = null),
          (this.peerPublicKey = null),
          (this.sharedSecret = null),
          this.storage.removeItem(eJ.storageKey),
          this.storage.removeItem(e$.storageKey),
          this.storage.removeItem(ez.storageKey);
      }
      async generateKeyPair() {
        let e = await eD();
        (this.ownPrivateKey = e.privateKey),
          (this.ownPublicKey = e.publicKey),
          await this.storeKey(e$, e.privateKey),
          await this.storeKey(eJ, e.publicKey);
      }
      async loadKeysIfNeeded() {
        null === this.ownPrivateKey &&
          (this.ownPrivateKey = await this.loadKey(e$)),
          null === this.ownPublicKey &&
            (this.ownPublicKey = await this.loadKey(eJ)),
          (null === this.ownPrivateKey || null === this.ownPublicKey) &&
            (await this.generateKeyPair()),
          null === this.peerPublicKey &&
            (this.peerPublicKey = await this.loadKey(ez)),
          null === this.sharedSecret &&
            null !== this.ownPrivateKey &&
            null !== this.peerPublicKey &&
            (this.sharedSecret = await eM(
              this.ownPrivateKey,
              this.peerPublicKey
            ));
      }
      async loadKey(e) {
        let t = this.storage.getItem(e.storageKey);
        return t ? eK(e.keyType, t) : null;
      }
      async storeKey(e, t) {
        let i = await eB(e.keyType, t);
        this.storage.setItem(e.storageKey, i);
      }
    }
    let eV = "4.3.2",
      eG = "@coinbase/wallet-sdk";
    async function eY(e, t) {
      let i = Object.assign(Object.assign({}, e), {
          jsonrpc: "2.0",
          id: crypto.randomUUID(),
        }),
        r = await window.fetch(t, {
          method: "POST",
          body: JSON.stringify(i),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-Cbw-Sdk-Version": eV,
            "X-Cbw-Sdk-Platform": eG,
          },
        }),
        { result: s, error: n } = await r.json();
      if (n) throw n;
      return s;
    }
    let eZ = "accounts",
      eQ = "activeChain",
      eX = "availableChains",
      e0 = "walletCapabilities";
    class e1 {
      constructor(e) {
        var t, i, r;
        (this.metadata = e.metadata),
          (this.communicator = e.communicator),
          (this.callback = e.callback),
          (this.keyManager = new eF()),
          (this.storage = new $("CBWSDK", "SCWStateManager")),
          (this.accounts = null != (t = this.storage.loadObject(eZ)) ? t : []),
          (this.chain = this.storage.loadObject(eQ) || {
            id:
              null != (r = null == (i = e.metadata.appChainIds) ? void 0 : i[0])
                ? r
                : 1,
          }),
          (this.handshake = this.handshake.bind(this)),
          (this.request = this.request.bind(this)),
          (this.createRequestMessage = this.createRequestMessage.bind(this)),
          (this.decryptResponseMessage =
            this.decryptResponseMessage.bind(this));
      }
      async handshake(e) {
        var t, i, r, s;
        await (null == (i = (t = this.communicator).waitForPopupLoaded)
          ? void 0
          : i.call(t));
        let n = await this.createRequestMessage({
            handshake: {
              method: e.method,
              params: Object.assign(
                {},
                this.metadata,
                null != (r = e.params) ? r : {}
              ),
            },
          }),
          a = await this.communicator.postRequestAndWaitForResponse(n);
        if ("failure" in a.content) throw a.content.failure;
        let o = await eK("public", a.sender);
        await this.keyManager.setPeerPublicKey(o);
        let l = (await this.decryptResponseMessage(a)).result;
        if ("error" in l) throw l.error;
        if ("eth_requestAccounts" === e.method) {
          let e = l.value;
          (this.accounts = e),
            this.storage.storeObject(eZ, e),
            null == (s = this.callback) || s.call(this, "accountsChanged", e);
        }
      }
      async request(e) {
        var t;
        if (0 === this.accounts.length)
          if ("wallet_sendCalls" === e.method)
            return this.sendRequestToPopup(e);
          else throw eo();
        switch (e.method) {
          case "eth_requestAccounts":
            return (
              null == (t = this.callback) ||
                t.call(this, "connect", { chainId: eA(this.chain.id) }),
              this.accounts
            );
          case "eth_accounts":
            return this.accounts;
          case "eth_coinbase":
            return this.accounts[0];
          case "net_version":
            return this.chain.id;
          case "eth_chainId":
            return eA(this.chain.id);
          case "wallet_getCapabilities":
            return this.storage.loadObject(e0);
          case "wallet_switchEthereumChain":
            return this.handleSwitchChainRequest(e);
          case "eth_ecRecover":
          case "personal_sign":
          case "wallet_sign":
          case "personal_ecRecover":
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "eth_signTypedData_v1":
          case "eth_signTypedData_v3":
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
          case "wallet_addEthereumChain":
          case "wallet_watchAsset":
          case "wallet_sendCalls":
          case "wallet_showCallsStatus":
          case "wallet_grantPermissions":
            return this.sendRequestToPopup(e);
          default:
            if (!this.chain.rpcUrl) throw en("No RPC URL set for chain");
            return eY(e, this.chain.rpcUrl);
        }
      }
      async sendRequestToPopup(e) {
        var t, i;
        await (null == (i = (t = this.communicator).waitForPopupLoaded)
          ? void 0
          : i.call(t));
        let r = await this.sendEncryptedRequest(e),
          s = (await this.decryptResponseMessage(r)).result;
        if ("error" in s) throw s.error;
        return s.value;
      }
      async cleanup() {
        var e, t;
        this.storage.clear(),
          await this.keyManager.clear(),
          (this.accounts = []),
          (this.chain = {
            id:
              null !=
              (t = null == (e = this.metadata.appChainIds) ? void 0 : e[0])
                ? t
                : 1,
          });
      }
      async handleSwitchChainRequest(e) {
        var t;
        let i = e.params;
        if (!i || !(null == (t = i[0]) ? void 0 : t.chainId)) throw es();
        let r = eN(i[0].chainId);
        if (this.updateChain(r)) return null;
        let s = await this.sendRequestToPopup(e);
        return null === s && this.updateChain(r), s;
      }
      async sendEncryptedRequest(e) {
        let t = await this.keyManager.getSharedSecret();
        if (!t)
          throw eo(
            "No valid session found, try requestAccounts before other methods"
          );
        let i = await eq({ action: e, chainId: this.chain.id }, t),
          r = await this.createRequestMessage({ encrypted: i });
        return this.communicator.postRequestAndWaitForResponse(r);
      }
      async createRequestMessage(e) {
        let t = await eB("public", await this.keyManager.getOwnPublicKey());
        return {
          id: crypto.randomUUID(),
          sender: t,
          content: e,
          timestamp: new Date(),
        };
      }
      async decryptResponseMessage(e) {
        var t, i;
        let r = e.content;
        if ("failure" in r) throw r.failure;
        let s = await this.keyManager.getSharedSecret();
        if (!s) throw eo("Invalid session");
        let n = await eH(r.encrypted, s),
          a = null == (t = n.data) ? void 0 : t.chains;
        if (a) {
          let e = Object.entries(a).map(([e, t]) => ({
            id: Number(e),
            rpcUrl: t,
          }));
          this.storage.storeObject(eX, e), this.updateChain(this.chain.id, e);
        }
        let o = null == (i = n.data) ? void 0 : i.capabilities;
        return o && this.storage.storeObject(e0, o), n;
      }
      updateChain(e, t) {
        var i;
        let r = null != t ? t : this.storage.loadObject(eX),
          s = null == r ? void 0 : r.find((t) => t.id === e);
        return (
          !!s &&
          (s !== this.chain &&
            ((this.chain = s),
            this.storage.storeObject(eQ, s),
            null == (i = this.callback) ||
              i.call(this, "chainChanged", eA(s.id))),
          !0)
        );
      }
    }
    var e2 = e.i(497310);
    let e5 = "Addresses";
    function e3(e) {
      return void 0 !== e.errorMessage;
    }
    class e8 {
      constructor(e) {
        this.secret = e;
      }
      async encrypt(e) {
        let t = this.secret;
        if (64 !== t.length) throw Error("secret must be 256 bits");
        let i = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.importKey(
            "raw",
            eE(t),
            { name: "aes-gcm" },
            !1,
            ["encrypt", "decrypt"]
          ),
          s = new TextEncoder(),
          n = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: i },
            r,
            s.encode(e)
          ),
          a = n.slice(n.byteLength - 16),
          o = n.slice(0, n.byteLength - 16),
          l = new Uint8Array(a),
          c = new Uint8Array(o);
        return ev(new Uint8Array([...i, ...l, ...c]));
      }
      async decrypt(e) {
        let t = this.secret;
        if (64 !== t.length) throw Error("secret must be 256 bits");
        return new Promise((i, r) => {
          !(async function () {
            let s = await crypto.subtle.importKey(
                "raw",
                eE(t),
                { name: "aes-gcm" },
                !1,
                ["encrypt", "decrypt"]
              ),
              n = eE(e),
              a = n.slice(0, 12),
              o = n.slice(12, 28),
              l = new Uint8Array([...n.slice(28), ...o]),
              c = { name: "AES-GCM", iv: new Uint8Array(a) };
            try {
              let e = await window.crypto.subtle.decrypt(c, s, l),
                t = new TextDecoder();
              i(t.decode(e));
            } catch (e) {
              r(e);
            }
          })();
        });
      }
    }
    class e6 {
      constructor(e, t, i) {
        (this.linkAPIUrl = e), (this.sessionId = t);
        const r = `${t}:${i}`;
        this.auth = `Basic ${btoa(r)}`;
      }
      async markUnseenEventsAsSeen(e) {
        return Promise.all(
          e.map((e) =>
            fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
              method: "POST",
              headers: { Authorization: this.auth },
            })
          )
        ).catch((e) => console.error("Unabled to mark event as failed:", e));
      }
      async fetchUnseenEvents() {
        var e;
        let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
          headers: { Authorization: this.auth },
        });
        if (t.ok) {
          let { events: i, error: r } = await t.json();
          if (r) throw Error(`Check unseen events failed: ${r}`);
          let s =
            null !=
            (e =
              null == i
                ? void 0
                : i
                    .filter((e) => "Web3Response" === e.event)
                    .map((e) => ({
                      type: "Event",
                      sessionId: this.sessionId,
                      eventId: e.id,
                      event: e.event,
                      data: e.data,
                    })))
              ? e
              : [];
          return this.markUnseenEventsAsSeen(s), s;
        }
        throw Error(`Check unseen events failed: ${t.status}`);
      }
    }
    ((tl = tc || (tc = {}))[(tl.DISCONNECTED = 0)] = "DISCONNECTED"),
      (tl[(tl.CONNECTING = 1)] = "CONNECTING"),
      (tl[(tl.CONNECTED = 2)] = "CONNECTED");
    class e4 {
      setConnectionStateListener(e) {
        this.connectionStateListener = e;
      }
      setIncomingDataListener(e) {
        this.incomingDataListener = e;
      }
      constructor(e, t = WebSocket) {
        (this.WebSocketClass = t),
          (this.webSocket = null),
          (this.pendingData = []),
          (this.url = e.replace(/^http/, "ws"));
      }
      async connect() {
        if (this.webSocket) throw Error("webSocket object is not null");
        return new Promise((e, t) => {
          var i;
          let r;
          try {
            this.webSocket = r = new this.WebSocketClass(this.url);
          } catch (e) {
            t(e);
            return;
          }
          null == (i = this.connectionStateListener) ||
            i.call(this, tc.CONNECTING),
            (r.onclose = (e) => {
              var i;
              this.clearWebSocket(),
                t(Error(`websocket error ${e.code}: ${e.reason}`)),
                null == (i = this.connectionStateListener) ||
                  i.call(this, tc.DISCONNECTED);
            }),
            (r.onopen = (t) => {
              var i;
              e(),
                null == (i = this.connectionStateListener) ||
                  i.call(this, tc.CONNECTED),
                this.pendingData.length > 0 &&
                  ([...this.pendingData].forEach((e) => this.sendData(e)),
                  (this.pendingData = []));
            }),
            (r.onmessage = (e) => {
              var t, i;
              if ("h" === e.data)
                null == (t = this.incomingDataListener) ||
                  t.call(this, { type: "Heartbeat" });
              else
                try {
                  let t = JSON.parse(e.data);
                  null == (i = this.incomingDataListener) || i.call(this, t);
                } catch (e) {}
            });
        });
      }
      disconnect() {
        var e;
        let { webSocket: t } = this;
        if (t) {
          this.clearWebSocket(),
            null == (e = this.connectionStateListener) ||
              e.call(this, tc.DISCONNECTED),
            (this.connectionStateListener = void 0),
            (this.incomingDataListener = void 0);
          try {
            t.close();
          } catch (e) {}
        }
      }
      sendData(e) {
        let { webSocket: t } = this;
        if (!t) {
          this.pendingData.push(e), this.connect();
          return;
        }
        t.send(e);
      }
      clearWebSocket() {
        let { webSocket: e } = this;
        e &&
          ((this.webSocket = null),
          (e.onclose = null),
          (e.onerror = null),
          (e.onmessage = null),
          (e.onopen = null));
      }
    }
    class e7 {
      constructor({ session: e, linkAPIUrl: t, listener: i }) {
        (this.destroyed = !1),
          (this.lastHeartbeatResponse = 0),
          (this.nextReqId = ey(1)),
          (this._connected = !1),
          (this._linked = !1),
          (this.shouldFetchUnseenEventsOnConnect = !1),
          (this.requestResolutions = new Map()),
          (this.handleSessionMetadataUpdated = (e) => {
            e &&
              new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                [
                  "ChainId",
                  (t) =>
                    e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                ],
              ]).forEach((t, i) => {
                let r = e[i];
                void 0 !== r && t(r);
              });
          }),
          (this.handleDestroyed = (e) => {
            var t;
            "1" === e && (null == (t = this.listener) || t.resetAndReload());
          }),
          (this.handleAccountUpdated = async (e) => {
            var t;
            let i = await this.cipher.decrypt(e);
            null == (t = this.listener) || t.accountUpdated(i);
          }),
          (this.handleMetadataUpdated = async (e, t) => {
            var i;
            let r = await this.cipher.decrypt(t);
            null == (i = this.listener) || i.metadataUpdated(e, r);
          }),
          (this.handleWalletUsernameUpdated = async (e) => {
            this.handleMetadataUpdated("walletUsername", e);
          }),
          (this.handleAppVersionUpdated = async (e) => {
            this.handleMetadataUpdated("AppVersion", e);
          }),
          (this.handleChainUpdated = async (e, t) => {
            var i;
            let r = await this.cipher.decrypt(e),
              s = await this.cipher.decrypt(t);
            null == (i = this.listener) || i.chainUpdated(r, s);
          }),
          (this.session = e),
          (this.cipher = new e8(e.secret)),
          (this.listener = i);
        const r = new e4(`${t}/rpc`, WebSocket);
        r.setConnectionStateListener(async (e) => {
          let t = !1;
          switch (e) {
            case tc.DISCONNECTED:
              if (!this.destroyed) {
                let e = async () => {
                  await new Promise((e) => setTimeout(e, 5e3)),
                    this.destroyed ||
                      r.connect().catch(() => {
                        e();
                      });
                };
                e();
              }
              break;
            case tc.CONNECTED:
              (t = await this.handleConnected()),
                this.updateLastHeartbeat(),
                setInterval(() => {
                  this.heartbeat();
                }, 1e4),
                this.shouldFetchUnseenEventsOnConnect &&
                  this.fetchUnseenEventsAPI();
            case tc.CONNECTING:
          }
          this.connected !== t && (this.connected = t);
        }),
          r.setIncomingDataListener((e) => {
            var t;
            switch (e.type) {
              case "Heartbeat":
                this.updateLastHeartbeat();
                return;
              case "IsLinkedOK":
              case "Linked": {
                let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                this.linked = t || e.onlineGuests > 0;
                break;
              }
              case "GetSessionConfigOK":
              case "SessionConfigUpdated":
                this.handleSessionMetadataUpdated(e.metadata);
                break;
              case "Event":
                this.handleIncomingEvent(e);
            }
            void 0 !== e.id &&
              (null == (t = this.requestResolutions.get(e.id)) || t(e));
          }),
          (this.ws = r),
          (this.http = new e6(t, e.id, e.key));
      }
      connect() {
        if (this.destroyed) throw Error("instance is destroyed");
        this.ws.connect();
      }
      async destroy() {
        this.destroyed ||
          (await this.makeRequest(
            {
              type: "SetSessionConfig",
              id: ey(this.nextReqId++),
              sessionId: this.session.id,
              metadata: { __destroyed: "1" },
            },
            { timeout: 1e3 }
          ),
          (this.destroyed = !0),
          this.ws.disconnect(),
          (this.listener = void 0));
      }
      get connected() {
        return this._connected;
      }
      set connected(e) {
        this._connected = e;
      }
      get linked() {
        return this._linked;
      }
      set linked(e) {
        var t, i;
        (this._linked = e),
          e && (null == (t = this.onceLinked) || t.call(this)),
          null == (i = this.listener) || i.linkedUpdated(e);
      }
      setOnceLinked(e) {
        return new Promise((t) => {
          this.linked
            ? e().then(t)
            : (this.onceLinked = () => {
                e().then(t), (this.onceLinked = void 0);
              });
        });
      }
      async handleIncomingEvent(e) {
        var t;
        if ("Event" !== e.type || "Web3Response" !== e.event) return;
        let i = JSON.parse(await this.cipher.decrypt(e.data));
        if ("WEB3_RESPONSE" !== i.type) return;
        let { id: r, response: s } = i;
        null == (t = this.listener) || t.handleWeb3ResponseMessage(r, s);
      }
      async checkUnseenEvents() {
        if (!this.connected) {
          this.shouldFetchUnseenEventsOnConnect = !0;
          return;
        }
        await new Promise((e) => setTimeout(e, 250));
        try {
          await this.fetchUnseenEventsAPI();
        } catch (e) {
          console.error("Unable to check for unseen events", e);
        }
      }
      async fetchUnseenEventsAPI() {
        (this.shouldFetchUnseenEventsOnConnect = !1),
          (await this.http.fetchUnseenEvents()).forEach((e) =>
            this.handleIncomingEvent(e)
          );
      }
      async publishEvent(e, t, i = !1) {
        let r = await this.cipher.encrypt(
            JSON.stringify(
              Object.assign(Object.assign({}, t), {
                origin: location.origin,
                location: location.href,
                relaySource:
                  "coinbaseWalletExtension" in window &&
                  window.coinbaseWalletExtension
                    ? "injected_sdk"
                    : "sdk",
              })
            )
          ),
          s = {
            type: "PublishEvent",
            id: ey(this.nextReqId++),
            sessionId: this.session.id,
            event: e,
            data: r,
            callWebhook: i,
          };
        return this.setOnceLinked(async () => {
          let e = await this.makeRequest(s);
          if ("Fail" === e.type)
            throw Error(e.error || "failed to publish event");
          return e.eventId;
        });
      }
      sendData(e) {
        this.ws.sendData(JSON.stringify(e));
      }
      updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
      }
      heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > 2e4)
          return void this.ws.disconnect();
        try {
          this.ws.sendData("h");
        } catch (e) {}
      }
      async makeRequest(e, t = { timeout: 6e4 }) {
        let i,
          r = e.id;
        return (
          this.sendData(e),
          Promise.race([
            new Promise((e, s) => {
              i = window.setTimeout(() => {
                s(Error(`request ${r} timed out`));
              }, t.timeout);
            }),
            new Promise((e) => {
              this.requestResolutions.set(r, (t) => {
                clearTimeout(i), e(t), this.requestResolutions.delete(r);
              });
            }),
          ])
        );
      }
      async handleConnected() {
        return (
          "Fail" !==
            (
              await this.makeRequest({
                type: "HostSession",
                id: ey(this.nextReqId++),
                sessionId: this.session.id,
                sessionKey: this.session.key,
              })
            ).type &&
          (this.sendData({
            type: "IsLinked",
            id: ey(this.nextReqId++),
            sessionId: this.session.id,
          }),
          this.sendData({
            type: "GetSessionConfig",
            id: ey(this.nextReqId++),
            sessionId: this.session.id,
          }),
          !0)
        );
      }
    }
    class e9 {
      constructor() {
        (this._nextRequestId = 0), (this.callbacks = new Map());
      }
      makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
        let e = this._nextRequestId,
          t = ex(e.toString(16));
        return this.callbacks.get(t) && this.callbacks.delete(t), e;
      }
    }
    var te = e.i(198537),
      tt = e.i(351824);
    let ti = "session:id",
      tr = "session:secret",
      ts = "session:linked";
    class tn {
      constructor(e, t, i, r = !1) {
        (this.storage = e),
          (this.id = t),
          (this.secret = i),
          (this.key = (0, tt.bytesToHex)(
            (0, te.sha256)(`${t}, ${i} WalletLink`)
          )),
          (this._linked = !!r);
      }
      static create(e) {
        return new tn(e, eb(16), eb(32)).save();
      }
      static load(e) {
        let t = e.getItem(ti),
          i = e.getItem(ts),
          r = e.getItem(tr);
        return t && r ? new tn(e, t, r, "1" === i) : null;
      }
      get linked() {
        return this._linked;
      }
      set linked(e) {
        (this._linked = e), this.persistLinked();
      }
      save() {
        return (
          this.storage.setItem(ti, this.id),
          this.storage.setItem(tr, this.secret),
          this.persistLinked(),
          this
        );
      }
      persistLinked() {
        this.storage.setItem(ts, this._linked ? "1" : "0");
      }
    }
    function ta() {
      var e, t;
      return (
        null !=
          (t =
            null == (e = null == window ? void 0 : window.matchMedia)
              ? void 0
              : e.call(window, "(prefers-color-scheme: dark)").matches) && t
      );
    }
    function to() {
      let e = document.createElement("style");
      (e.type = "text/css"),
        e.appendChild(
          document.createTextNode(
            '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
          )
        ),
        document.documentElement.appendChild(e);
    }
    var tl,
      tc,
      th,
      td,
      tu,
      tp,
      tf,
      tg,
      ty,
      tm,
      tw,
      tb,
      tv,
      tE,
      t_,
      tI,
      tS = e.i(562933),
      tA = {},
      tP = [],
      tC = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
      tx = Array.isArray;
    function tk(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function tT(e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    }
    function tO(e, t, i) {
      var r,
        s,
        n,
        a = {};
      for (n in t)
        "key" == n ? (r = t[n]) : "ref" == n ? (s = t[n]) : (a[n] = t[n]);
      if (
        (arguments.length > 2 &&
          (a.children = arguments.length > 3 ? th.call(arguments, 2) : i),
        "function" == typeof e && null != e.defaultProps)
      )
        for (n in e.defaultProps) void 0 === a[n] && (a[n] = e.defaultProps[n]);
      return tR(e, a, r, s, null);
    }
    function tR(e, t, i, r, s) {
      var n = {
        type: e,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == s ? ++tu : s,
        __i: -1,
        __u: 0,
      };
      return null == s && null != td.vnode && td.vnode(n), n;
    }
    function tN(e) {
      return e.children;
    }
    function tj(e, t) {
      (this.props = e), (this.context = t);
    }
    function tD(e, t) {
      if (null == t) return e.__ ? tD(e.__, e.__i + 1) : null;
      for (var i; t < e.__k.length; t++)
        if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
      return "function" == typeof e.type ? tD(e) : null;
    }
    function tM(e) {
      ((!e.__d && (e.__d = !0) && tp.push(e) && !tU.__r++) ||
        tf != td.debounceRendering) &&
        ((tf = td.debounceRendering) || tg)(tU);
    }
    function tU() {
      try {
        for (var e, t = 1; tp.length; )
          tp.length > t && tp.sort(ty),
            (e = tp.shift()),
            (t = tp.length),
            (function (e) {
              if (e.__P && e.__d) {
                var t = e.__v,
                  i = t.__e,
                  r = [],
                  s = [],
                  n = tk({}, t);
                (n.__v = t.__v + 1),
                  td.vnode && td.vnode(n),
                  tq(
                    e.__P,
                    n,
                    t,
                    e.__n,
                    e.__P.namespaceURI,
                    32 & t.__u ? [i] : null,
                    r,
                    null == i ? tD(t) : i,
                    !!(32 & t.__u),
                    s
                  ),
                  (n.__v = t.__v),
                  (n.__.__k[n.__i] = n),
                  t$(r, n, s),
                  (t.__e = t.__ = null),
                  n.__e != i &&
                    (function e(t) {
                      if (null != (t = t.__) && null != t.__c)
                        return (
                          (t.__e = t.__c.base = null),
                          t.__k.some(function (e) {
                            if (null != e && null != e.__e)
                              return (t.__e = t.__c.base = e.__e);
                          }),
                          e(t)
                        );
                    })(n);
              }
            })(e);
      } finally {
        tp.length = tU.__r = 0;
      }
    }
    function tL(e, t, i, r, s, n, a, o, l, c, h) {
      var d,
        u,
        p,
        f,
        g,
        y,
        m,
        w = (r && r.__k) || tP,
        b = t.length;
      for (
        l = (function (e, t, i, r, s) {
          var n,
            a,
            o,
            l,
            c,
            h = i.length,
            d = h,
            u = 0;
          for (e.__k = Array(s), n = 0; n < s; n++)
            null != (a = t[n]) &&
            "boolean" != typeof a &&
            "function" != typeof a
              ? ("string" == typeof a ||
                "number" == typeof a ||
                "bigint" == typeof a ||
                a.constructor == String
                  ? (a = e.__k[n] = tR(null, a, null, null, null))
                  : tx(a)
                  ? (a = e.__k[n] = tR(tN, { children: a }, null, null, null))
                  : void 0 === a.constructor && a.__b > 0
                  ? (a = e.__k[n] =
                      tR(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
                  : (e.__k[n] = a),
                (l = n + u),
                (a.__ = e),
                (a.__b = e.__b + 1),
                (o = null),
                -1 !=
                  (c = a.__i =
                    (function (e, t, i, r) {
                      var s,
                        n,
                        a,
                        o = e.key,
                        l = e.type,
                        c = t[i],
                        h = null != c && 0 == (2 & c.__u);
                      if (
                        (null === c && null == o) ||
                        (h && o == c.key && l == c.type)
                      )
                        return i;
                      if (r > +!!h) {
                        for (s = i - 1, n = i + 1; s >= 0 || n < t.length; )
                          if (
                            null != (c = t[(a = s >= 0 ? s-- : n++)]) &&
                            0 == (2 & c.__u) &&
                            o == c.key &&
                            l == c.type
                          )
                            return a;
                      }
                      return -1;
                    })(a, i, l, d)) && (d--, (o = i[c]) && (o.__u |= 2)),
                null == o || null == o.__v
                  ? (-1 == c && (s > h ? u-- : s < h && u++),
                    "function" != typeof a.type && (a.__u |= 4))
                  : c != l &&
                    (c == l - 1
                      ? u--
                      : c == l + 1
                      ? u++
                      : (c > l ? u-- : u++, (a.__u |= 4))))
              : (e.__k[n] = null);
          if (d)
            for (n = 0; n < h; n++)
              null != (o = i[n]) &&
                0 == (2 & o.__u) &&
                (o.__e == r && (r = tD(o)),
                (function e(t, i, r) {
                  var s, n;
                  if (
                    (td.unmount && td.unmount(t),
                    (s = t.ref) &&
                      ((s.current && s.current != t.__e) || tJ(s, null, i)),
                    null != (s = t.__c))
                  ) {
                    if (s.componentWillUnmount)
                      try {
                        s.componentWillUnmount();
                      } catch (e) {
                        td.__e(e, i);
                      }
                    s.base = s.__P = null;
                  }
                  if ((s = t.__k))
                    for (n = 0; n < s.length; n++)
                      s[n] && e(s[n], i, r || "function" != typeof t.type);
                  r || tT(t.__e), (t.__c = t.__ = t.__e = void 0);
                })(o, o));
          return r;
        })(i, t, w, l, b),
          d = 0;
        d < b;
        d++
      )
        null != (p = i.__k[d]) &&
          ((u = (-1 != p.__i && w[p.__i]) || tA),
          (p.__i = d),
          (y = tq(e, p, u, s, n, a, o, l, c, h)),
          (f = p.__e),
          p.ref &&
            u.ref != p.ref &&
            (u.ref && tJ(u.ref, null, p), h.push(p.ref, p.__c || f, p)),
          null == g && null != f && (g = f),
          (m = !!(4 & p.__u)) || u.__k === p.__k
            ? ((l = (function e(t, i, r, s) {
                var n, a;
                if ("function" == typeof t.type) {
                  for (n = t.__k, a = 0; n && a < n.length; a++)
                    n[a] && ((n[a].__ = t), (i = e(n[a], i, r, s)));
                  return i;
                }
                t.__e != i &&
                  (s &&
                    (i && t.type && !i.parentNode && (i = tD(t)),
                    r.insertBefore(t.__e, i || null)),
                  (i = t.__e));
                do i = i && i.nextSibling;
                while (null != i && 8 == i.nodeType);
                return i;
              })(p, l, e, m)),
              m && u.__e && (u.__e = null))
            : "function" == typeof p.type && void 0 !== y
            ? (l = y)
            : f && (l = f.nextSibling),
          (p.__u &= -7));
      return (i.__e = g), l;
    }
    function tW(e, t, i) {
      "-" == t[0]
        ? e.setProperty(t, null == i ? "" : i)
        : (e[t] =
            null == i ? "" : "number" != typeof i || tC.test(t) ? i : i + "px");
    }
    function tB(e, t, i, r, s) {
      var n, a;
      e: if ("style" == t)
        if ("string" == typeof i) e.style.cssText = i;
        else {
          if (("string" == typeof r && (e.style.cssText = r = ""), r))
            for (t in r) (i && t in i) || tW(e.style, t, "");
          if (i) for (t in i) (r && i[t] == r[t]) || tW(e.style, t, i[t]);
        }
      else if ("o" == t[0] && "n" == t[1])
        (n = t != (t = t.replace(tv, "$1"))),
          (t =
            (a = t.toLowerCase()) in e || "onFocusOut" == t || "onFocusIn" == t
              ? a.slice(2)
              : t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + n] = i),
          i
            ? r
              ? (i[tb] = r[tb])
              : ((i[tb] = tE), e.addEventListener(t, n ? tI : t_, n))
            : e.removeEventListener(t, n ? tI : t_, n);
      else {
        if ("http://www.w3.org/2000/svg" == s)
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (
          "width" != t &&
          "height" != t &&
          "href" != t &&
          "list" != t &&
          "form" != t &&
          "tabIndex" != t &&
          "download" != t &&
          "rowSpan" != t &&
          "colSpan" != t &&
          "role" != t &&
          "popover" != t &&
          t in e
        )
          try {
            e[t] = null == i ? "" : i;
            break e;
          } catch (e) {}
        "function" == typeof i ||
          (null == i || (!1 === i && "-" != t[4])
            ? e.removeAttribute(t)
            : e.setAttribute(t, "popover" == t && 1 == i ? "" : i));
      }
    }
    function tK(e) {
      return function (t) {
        if (this.l) {
          var i = this.l[t.type + e];
          if (null == t[tw]) t[tw] = tE++;
          else if (t[tw] < i[tb]) return;
          return i(td.event ? td.event(t) : t);
        }
      };
    }
    function tq(e, t, i, r, s, n, a, o, l, c) {
      var h,
        d,
        u,
        p,
        f,
        g,
        y,
        m,
        w,
        b,
        v,
        E,
        _,
        I,
        S,
        A = t.type;
      if (void 0 !== t.constructor) return null;
      128 & i.__u && ((l = !!(32 & i.__u)), (n = [(o = t.__e = i.__e)])),
        (h = td.__b) && h(t);
      e: if ("function" == typeof A)
        try {
          if (
            ((m = t.props),
            (w = A.prototype && A.prototype.render),
            (b = (h = A.contextType) && r[h.__c]),
            (v = h ? (b ? b.props.value : h.__) : r),
            i.__c
              ? (y = (d = t.__c = i.__c).__ = d.__E)
              : (w
                  ? (t.__c = d = new A(m, v))
                  : ((t.__c = d = new tj(m, v)),
                    (d.constructor = A),
                    (d.render = tz)),
                b && b.sub(d),
                d.state || (d.state = {}),
                (d.__n = r),
                (u = d.__d = !0),
                (d.__h = []),
                (d._sb = [])),
            w && null == d.__s && (d.__s = d.state),
            w &&
              null != A.getDerivedStateFromProps &&
              (d.__s == d.state && (d.__s = tk({}, d.__s)),
              tk(d.__s, A.getDerivedStateFromProps(m, d.__s))),
            (p = d.props),
            (f = d.state),
            (d.__v = t),
            u)
          )
            w &&
              null == A.getDerivedStateFromProps &&
              null != d.componentWillMount &&
              d.componentWillMount(),
              w &&
                null != d.componentDidMount &&
                d.__h.push(d.componentDidMount);
          else {
            if (
              (w &&
                null == A.getDerivedStateFromProps &&
                m !== p &&
                null != d.componentWillReceiveProps &&
                d.componentWillReceiveProps(m, v),
              t.__v == i.__v ||
                (!d.__e &&
                  null != d.shouldComponentUpdate &&
                  !1 === d.shouldComponentUpdate(m, d.__s, v)))
            ) {
              t.__v != i.__v &&
                ((d.props = m), (d.state = d.__s), (d.__d = !1)),
                (t.__e = i.__e),
                (t.__k = i.__k),
                t.__k.some(function (e) {
                  e && (e.__ = t);
                }),
                tP.push.apply(d.__h, d._sb),
                (d._sb = []),
                d.__h.length && a.push(d);
              break e;
            }
            null != d.componentWillUpdate && d.componentWillUpdate(m, d.__s, v),
              w &&
                null != d.componentDidUpdate &&
                d.__h.push(function () {
                  d.componentDidUpdate(p, f, g);
                });
          }
          if (
            ((d.context = v),
            (d.props = m),
            (d.__P = e),
            (d.__e = !1),
            (E = td.__r),
            (_ = 0),
            w)
          )
            (d.state = d.__s),
              (d.__d = !1),
              E && E(t),
              (h = d.render(d.props, d.state, d.context)),
              tP.push.apply(d.__h, d._sb),
              (d._sb = []);
          else
            do
              (d.__d = !1),
                E && E(t),
                (h = d.render(d.props, d.state, d.context)),
                (d.state = d.__s);
            while (d.__d && ++_ < 25);
          (d.state = d.__s),
            null != d.getChildContext &&
              (r = tk(tk({}, r), d.getChildContext())),
            w &&
              !u &&
              null != d.getSnapshotBeforeUpdate &&
              (g = d.getSnapshotBeforeUpdate(p, f)),
            (I =
              null != h && h.type === tN && null == h.key
                ? (function e(t) {
                    return "object" != typeof t || null == t || t.__b > 0
                      ? t
                      : tx(t)
                      ? t.map(e)
                      : void 0 !== t.constructor
                      ? null
                      : tk({}, t);
                  })(h.props.children)
                : h),
            (o = tL(e, tx(I) ? I : [I], t, i, r, s, n, a, o, l, c)),
            (d.base = t.__e),
            (t.__u &= -161),
            d.__h.length && a.push(d),
            y && (d.__E = d.__ = null);
        } catch (e) {
          if (((t.__v = null), l || null != n))
            if (e.then) {
              for (
                t.__u |= l ? 160 : 128;
                o && 8 == o.nodeType && o.nextSibling;

              )
                o = o.nextSibling;
              (n[n.indexOf(o)] = null), (t.__e = o);
            } else {
              for (S = n.length; S--; ) tT(n[S]);
              tH(t);
            }
          else (t.__e = i.__e), (t.__k = i.__k), e.then || tH(t);
          td.__e(e, t, i);
        }
      else
        null == n && t.__v == i.__v
          ? ((t.__k = i.__k), (t.__e = i.__e))
          : (o = t.__e =
              (function (e, t, i, r, s, n, a, o, l) {
                var c,
                  h,
                  d,
                  u,
                  p,
                  f,
                  g,
                  y = i.props || tA,
                  m = t.props,
                  w = t.type;
                if (
                  ("svg" == w
                    ? (s = "http://www.w3.org/2000/svg")
                    : "math" == w
                    ? (s = "http://www.w3.org/1998/Math/MathML")
                    : s || (s = "http://www.w3.org/1999/xhtml"),
                  null != n)
                ) {
                  for (c = 0; c < n.length; c++)
                    if (
                      (p = n[c]) &&
                      "setAttribute" in p == !!w &&
                      (w ? p.localName == w : 3 == p.nodeType)
                    ) {
                      (e = p), (n[c] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null == w) return document.createTextNode(m);
                  (e = document.createElementNS(s, w, m.is && m)),
                    o && (td.__m && td.__m(t, n), (o = !1)),
                    (n = null);
                }
                if (null == w) y === m || (o && e.data == m) || (e.data = m);
                else {
                  if (
                    ((n =
                      "textarea" == w && null != m.defaultValue
                        ? null
                        : n && th.call(e.childNodes)),
                    !o && null != n)
                  )
                    for (y = {}, c = 0; c < e.attributes.length; c++)
                      y[(p = e.attributes[c]).name] = p.value;
                  for (c in y)
                    (p = y[c]),
                      "dangerouslySetInnerHTML" == c
                        ? (d = p)
                        : "children" == c ||
                          c in m ||
                          ("value" == c && "defaultValue" in m) ||
                          ("checked" == c && "defaultChecked" in m) ||
                          tB(e, c, null, p, s);
                  for (c in m)
                    (p = m[c]),
                      "children" == c
                        ? (u = p)
                        : "dangerouslySetInnerHTML" == c
                        ? (h = p)
                        : "value" == c
                        ? (f = p)
                        : "checked" == c
                        ? (g = p)
                        : (o && "function" != typeof p) ||
                          y[c] === p ||
                          tB(e, c, p, y[c], s);
                  if (h)
                    o ||
                      (d &&
                        (h.__html == d.__html || h.__html == e.innerHTML)) ||
                      (e.innerHTML = h.__html),
                      (t.__k = []);
                  else if (
                    (d && (e.innerHTML = ""),
                    tL(
                      "template" == t.type ? e.content : e,
                      tx(u) ? u : [u],
                      t,
                      i,
                      r,
                      "foreignObject" == w ? "http://www.w3.org/1999/xhtml" : s,
                      n,
                      a,
                      n ? n[0] : i.__k && tD(i, 0),
                      o,
                      l
                    ),
                    null != n)
                  )
                    for (c = n.length; c--; ) tT(n[c]);
                  (o && "textarea" != w) ||
                    ((c = "value"),
                    "progress" == w && null == f
                      ? e.removeAttribute("value")
                      : null == f ||
                        (f === e[c] &&
                          ("progress" != w || f) &&
                          ("option" != w || f == y[c])) ||
                        tB(e, c, f, y[c], s),
                    (c = "checked"),
                    null != g && g != e[c] && tB(e, c, g, y[c], s));
                }
                return e;
              })(i.__e, t, i, r, s, n, a, l, c));
      return (h = td.diffed) && h(t), 128 & t.__u ? void 0 : o;
    }
    function tH(e) {
      e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(tH));
    }
    function t$(e, t, i) {
      for (var r = 0; r < i.length; r++) tJ(i[r], i[++r], i[++r]);
      td.__c && td.__c(t, e),
        e.some(function (t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t);
              });
          } catch (e) {
            td.__e(e, t.__v);
          }
        });
    }
    function tJ(e, t, i) {
      try {
        if ("function" == typeof e) {
          var r = "function" == typeof e.__u;
          r && e.__u(), (r && null == t) || (e.__u = e(t));
        } else e.current = t;
      } catch (e) {
        td.__e(e, i);
      }
    }
    function tz(e, t, i) {
      return this.constructor(e, i);
    }
    function tF(e, t, i) {
      var r, s, n, a;
      t == document && (t = document.documentElement),
        td.__ && td.__(e, t),
        (s = (r = "function" == typeof i) ? null : (i && i.__k) || t.__k),
        (n = []),
        (a = []),
        tq(
          t,
          (e = ((!r && i) || t).__k = tO(tN, null, [e])),
          s || tA,
          tA,
          t.namespaceURI,
          !r && i
            ? [i]
            : s
            ? null
            : t.firstChild
            ? th.call(t.childNodes)
            : null,
          n,
          !r && i ? i : s ? s.__e : t.firstChild,
          r,
          a
        ),
        t$(n, e, a);
    }
    (th = tP.slice),
      (td = {
        __e: function (e, t, i, r) {
          for (var s, n, a; (t = t.__); )
            if ((s = t.__c) && !s.__)
              try {
                if (
                  ((n = s.constructor) &&
                    null != n.getDerivedStateFromError &&
                    (s.setState(n.getDerivedStateFromError(e)), (a = s.__d)),
                  null != s.componentDidCatch &&
                    (s.componentDidCatch(e, r || {}), (a = s.__d)),
                  a)
                )
                  return (s.__E = s);
              } catch (t) {
                e = t;
              }
          throw e;
        },
      }),
      (tu = 0),
      (tj.prototype.setState = function (e, t) {
        var i;
        (i =
          null != this.__s && this.__s != this.state
            ? this.__s
            : (this.__s = tk({}, this.state))),
          "function" == typeof e && (e = e(tk({}, i), this.props)),
          e && tk(i, e),
          null != e && this.__v && (t && this._sb.push(t), tM(this));
      }),
      (tj.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), tM(this));
      }),
      (tj.prototype.render = tN),
      (tp = []),
      (tg =
        "function" == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (ty = function (e, t) {
        return e.__v.__b - t.__v.__b;
      }),
      (tU.__r = 0),
      (tw = "__d" + (tm = Math.random().toString(8))),
      (tb = "__a" + tm),
      (tv = /(PointerCapture)$|Capture$/i),
      (tE = 0),
      (t_ = tK(!1)),
      (tI = tK(!0));
    var tV,
      tG,
      tY,
      tZ,
      tQ = 0,
      tX = [],
      t0 = td,
      t1 = t0.__b,
      t2 = t0.__r,
      t5 = t0.diffed,
      t3 = t0.__c,
      t8 = t0.unmount,
      t6 = t0.__;
    function t4(e, t) {
      t0.__h && t0.__h(tG, e, tQ || t), (tQ = 0);
      var i = tG.__H || (tG.__H = { __: [], __h: [] });
      return e >= i.__.length && i.__.push({}), i.__[e];
    }
    function t7(e, t, i) {
      var r = t4(tV++, 2);
      if (
        ((r.t = e),
        !r.__c &&
          ((r.__ = [
            i ? i(t) : ir(void 0, t),
            function (e) {
              var t = r.__N ? r.__N[0] : r.__[0],
                i = r.t(t, e);
              t !== i && ((r.__N = [i, r.__[1]]), r.__c.setState({}));
            },
          ]),
          (r.__c = tG),
          !tG.__f))
      ) {
        var s = function (e, t, i) {
          if (!r.__c.__H) return !0;
          var s = r.__c.__H.__.filter(function (e) {
            return e.__c;
          });
          if (
            s.every(function (e) {
              return !e.__N;
            })
          )
            return !n || n.call(this, e, t, i);
          var a = r.__c.props !== e;
          return (
            s.some(function (e) {
              if (e.__N) {
                var t = e.__[0];
                (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
              }
            }),
            (n && n.call(this, e, t, i)) || a
          );
        };
        tG.__f = !0;
        var n = tG.shouldComponentUpdate,
          a = tG.componentWillUpdate;
        (tG.componentWillUpdate = function (e, t, i) {
          if (this.__e) {
            var r = n;
            (n = void 0), s(e, t, i), (n = r);
          }
          a && a.call(this, e, t, i);
        }),
          (tG.shouldComponentUpdate = s);
      }
      return r.__N || r.__;
    }
    function t9() {
      for (var e; (e = tX.shift()); ) {
        var t = e.__H;
        if (e.__P && t)
          try {
            t.__h.some(it), t.__h.some(ii), (t.__h = []);
          } catch (i) {
            (t.__h = []), t0.__e(i, e.__v);
          }
      }
    }
    (t0.__b = function (e) {
      (tG = null), t1 && t1(e);
    }),
      (t0.__ = function (e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), t6 && t6(e, t);
      }),
      (t0.__r = function (e) {
        t2 && t2(e), (tV = 0);
        var t = (tG = e.__c).__H;
        t &&
          (tY === tG
            ? ((t.__h = []),
              (tG.__h = []),
              t.__.some(function (e) {
                e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
              }))
            : (t.__h.some(it), t.__h.some(ii), (t.__h = []), (tV = 0))),
          (tY = tG);
      }),
      (t0.diffed = function (e) {
        t5 && t5(e);
        var t = e.__c;
        t &&
          t.__H &&
          (t.__H.__h.length &&
            ((1 !== tX.push(t) && tZ === t0.requestAnimationFrame) ||
              (
                (tZ = t0.requestAnimationFrame) ||
                function (e) {
                  var t,
                    i = function () {
                      clearTimeout(r),
                        ie && cancelAnimationFrame(t),
                        setTimeout(e);
                    },
                    r = setTimeout(i, 35);
                  ie && (t = requestAnimationFrame(i));
                }
              )(t9)),
          t.__H.__.some(function (e) {
            e.u && (e.__H = e.u), (e.u = void 0);
          })),
          (tY = tG = null);
      }),
      (t0.__c = function (e, t) {
        t.some(function (e) {
          try {
            e.__h.some(it),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || ii(e);
              }));
          } catch (i) {
            t.some(function (e) {
              e.__h && (e.__h = []);
            }),
              (t = []),
              t0.__e(i, e.__v);
          }
        }),
          t3 && t3(e, t);
      }),
      (t0.unmount = function (e) {
        t8 && t8(e);
        var t,
          i = e.__c;
        i &&
          i.__H &&
          (i.__H.__.some(function (e) {
            try {
              it(e);
            } catch (e) {
              t = e;
            }
          }),
          (i.__H = void 0),
          t && t0.__e(t, i.__v));
      });
    var ie = "function" == typeof requestAnimationFrame;
    function it(e) {
      var t = tG,
        i = e.__c;
      "function" == typeof i && ((e.__c = void 0), i()), (tG = t);
    }
    function ii(e) {
      var t = tG;
      (e.__c = e.__()), (tG = t);
    }
    function ir(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    class is {
      constructor() {
        (this.items = new Map()),
          (this.nextItemKey = 0),
          (this.root = null),
          (this.darkMode = ta());
      }
      attach(e) {
        (this.root = document.createElement("div")),
          (this.root.className = "-cbwsdk-snackbar-root"),
          e.appendChild(this.root),
          this.render();
      }
      presentItem(e) {
        let t = this.nextItemKey++;
        return (
          this.items.set(t, e),
          this.render(),
          () => {
            this.items.delete(t), this.render();
          }
        );
      }
      clear() {
        this.items.clear(), this.render();
      }
      render() {
        this.root &&
          tF(
            tO(
              "div",
              null,
              tO(
                ia,
                { darkMode: this.darkMode },
                Array.from(this.items.entries()).map(([e, t]) =>
                  tO(io, Object.assign({}, t, { key: e }))
                )
              )
            ),
            this.root
          );
      }
    }
    let ia = (e) =>
        tO(
          "div",
          { class: (0, tS.clsx)("-cbwsdk-snackbar-container") },
          tO(
            "style",
            null,
            ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
          ),
          tO("div", { class: "-cbwsdk-snackbar" }, e.children)
        ),
      io = ({ autoExpand: e, message: t, menuItems: i }) => {
        var r, s, n, a;
        let [o, l] = ((tQ = 1), t7(ir, !0)),
          [c, h] = ((tQ = 1), t7(ir, null != e && e));
        return (
          (r = () => {
            let e = [
              window.setTimeout(() => {
                l(!1);
              }, 1),
              window.setTimeout(() => {
                h(!0);
              }, 1e4),
            ];
            return () => {
              e.forEach(window.clearTimeout);
            };
          }),
          (s = t4(tV++, 3)),
          !t0.__s &&
            ((n = s.__H),
            (a = void 0),
            !n ||
              n.length !== a.length ||
              a.some(function (e, t) {
                return e !== n[t];
              })) &&
            ((s.__ = r), (s.u = void 0), tG.__H.__h.push(s)),
          tO(
            "div",
            {
              class: (0, tS.clsx)(
                "-cbwsdk-snackbar-instance",
                o && "-cbwsdk-snackbar-instance-hidden",
                c && "-cbwsdk-snackbar-instance-expanded"
              ),
            },
            tO(
              "div",
              {
                class: "-cbwsdk-snackbar-instance-header",
                onClick: () => {
                  h(!c);
                },
              },
              tO("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                class: "-cbwsdk-snackbar-instance-header-cblogo",
              }),
              " ",
              tO(
                "div",
                { class: "-cbwsdk-snackbar-instance-header-message" },
                t
              ),
              tO(
                "div",
                { class: "-gear-container" },
                !c &&
                  tO(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    tO("circle", {
                      cx: "12",
                      cy: "12",
                      r: "12",
                      fill: "#F5F7F8",
                    })
                  ),
                tO("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                  class: "-gear-icon",
                  title: "Expand",
                })
              )
            ),
            i &&
              i.length > 0 &&
              tO(
                "div",
                { class: "-cbwsdk-snackbar-instance-menu" },
                i.map((e, t) =>
                  tO(
                    "div",
                    {
                      class: (0, tS.clsx)(
                        "-cbwsdk-snackbar-instance-menu-item",
                        e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                      ),
                      onClick: e.onClick,
                      key: t,
                    },
                    tO(
                      "svg",
                      {
                        width: e.svgWidth,
                        height: e.svgHeight,
                        viewBox: "0 0 10 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      tO("path", {
                        "fill-rule": e.defaultFillRule,
                        "clip-rule": e.defaultClipRule,
                        d: e.path,
                        fill: "#AAAAAA",
                      })
                    ),
                    tO(
                      "span",
                      {
                        class: (0, tS.clsx)(
                          "-cbwsdk-snackbar-instance-menu-item-info",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                        ),
                      },
                      e.info
                    )
                  )
                )
              )
          )
        );
      },
      il =
        "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
    class ic {
      constructor() {
        (this.attached = !1), (this.snackbar = new is());
      }
      attach() {
        if (this.attached)
          throw Error("Coinbase Wallet SDK UI is already attached");
        let e = document.documentElement,
          t = document.createElement("div");
        (t.className = "-cbwsdk-css-reset"),
          e.appendChild(t),
          this.snackbar.attach(t),
          (this.attached = !0),
          to();
      }
      showConnecting(e) {
        let t;
        return (
          (t = e.isUnlinkedErrorState
            ? {
                autoExpand: !0,
                message: "Connection lost",
                menuItems: [
                  {
                    isRed: !1,
                    info: "Reset connection",
                    svgWidth: "10",
                    svgHeight: "11",
                    path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                    defaultFillRule: "evenodd",
                    defaultClipRule: "evenodd",
                    onClick: e.onResetConnection,
                  },
                ],
              }
            : {
                message: "Confirm on phone",
                menuItems: [
                  {
                    isRed: !0,
                    info: "Cancel transaction",
                    svgWidth: "11",
                    svgHeight: "11",
                    path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                    defaultFillRule: "inherit",
                    defaultClipRule: "inherit",
                    onClick: e.onCancel,
                  },
                  {
                    isRed: !1,
                    info: "Reset connection",
                    svgWidth: "10",
                    svgHeight: "11",
                    path: il,
                    defaultFillRule: "evenodd",
                    defaultClipRule: "evenodd",
                    onClick: e.onResetConnection,
                  },
                ],
              }),
          this.snackbar.presentItem(t)
        );
      }
    }
    class ih {
      constructor() {
        (this.root = null), (this.darkMode = ta());
      }
      attach() {
        let e = document.documentElement;
        (this.root = document.createElement("div")),
          (this.root.className = "-cbwsdk-css-reset"),
          e.appendChild(this.root),
          to();
      }
      present(e) {
        this.render(e);
      }
      clear() {
        this.render(null);
      }
      render(e) {
        !this.root ||
          (tF(null, this.root),
          e &&
            tF(
              tO(
                id,
                Object.assign({}, e, {
                  onDismiss: () => {
                    this.clear();
                  },
                  darkMode: this.darkMode,
                })
              ),
              this.root
            ));
      }
    }
    let id = ({
        title: e,
        buttonText: t,
        darkMode: i,
        onButtonClick: r,
        onDismiss: s,
      }) =>
        tO(
          ia,
          { darkMode: i },
          tO(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            tO(
              "style",
              null,
              ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
            ),
            tO("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: s,
            }),
            tO(
              "div",
              {
                class: (0, tS.clsx)(
                  "-cbwsdk-redirect-dialog-box",
                  i ? "dark" : "light"
                ),
              },
              tO("p", null, e),
              tO("button", { onClick: r }, t)
            )
          )
        ),
      iu = "https://www.walletlink.org";
    class ip {
      constructor() {
        (this.attached = !1), (this.redirectDialog = new ih());
      }
      attach() {
        if (this.attached)
          throw Error("Coinbase Wallet SDK UI is already attached");
        this.redirectDialog.attach(), (this.attached = !0);
      }
      redirectToCoinbaseWallet(e) {
        let t = new URL("https://go.cb-w.com/walletlink");
        t.searchParams.append(
          "redirect_url",
          (function () {
            try {
              if (
                (function () {
                  try {
                    return null !== window.frameElement;
                  } catch (e) {
                    return !1;
                  }
                })() &&
                window.top
              )
                return window.top.location;
              return window.location;
            } catch (e) {
              return window.location;
            }
          })().href
        ),
          e && t.searchParams.append("wl_url", e);
        let i = document.createElement("a");
        (i.target = "cbw-opener"),
          (i.href = t.href),
          (i.rel = "noreferrer noopener"),
          i.click();
      }
      openCoinbaseWalletDeeplink(e) {
        this.redirectDialog.present({
          title: "Redirecting to Coinbase Wallet...",
          buttonText: "Open",
          onButtonClick: () => {
            this.redirectToCoinbaseWallet(e);
          },
        }),
          setTimeout(() => {
            this.redirectToCoinbaseWallet(e);
          }, 99);
      }
      showConnecting(e) {
        return () => {
          this.redirectDialog.clear();
        };
      }
    }
    class ig {
      constructor(e) {
        (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
          (this.isMobileWeb = (function () {
            var e;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              null == (e = null == window ? void 0 : window.navigator)
                ? void 0
                : e.userAgent
            );
          })()),
          (this.linkedUpdated = (e) => {
            this.isLinked = e;
            let t = this.storage.getItem(e5);
            if (
              (e && (this._session.linked = e),
              (this.isUnlinkedErrorState = !1),
              t)
            ) {
              let i = t.split(" "),
                r = "true" === this.storage.getItem("IsStandaloneSigning");
              "" === i[0] ||
                e ||
                !this._session.linked ||
                r ||
                (this.isUnlinkedErrorState = !0);
            }
          }),
          (this.metadataUpdated = (e, t) => {
            this.storage.setItem(e, t);
          }),
          (this.chainUpdated = (e, t) => {
            (this.chainCallbackParams.chainId !== e ||
              this.chainCallbackParams.jsonRpcUrl !== t) &&
              ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
              this.chainCallback &&
                this.chainCallback(t, Number.parseInt(e, 10)));
          }),
          (this.accountUpdated = (e) => {
            this.accountsCallback && this.accountsCallback([e]),
              ig.accountRequestCallbackIds.size > 0 &&
                (Array.from(ig.accountRequestCallbackIds.values()).forEach(
                  (t) => {
                    this.invokeCallback(t, {
                      method: "requestEthereumAccounts",
                      result: [e],
                    });
                  }
                ),
                ig.accountRequestCallbackIds.clear());
          }),
          (this.resetAndReload = this.resetAndReload.bind(this)),
          (this.linkAPIUrl = e.linkAPIUrl),
          (this.storage = e.storage),
          (this.metadata = e.metadata),
          (this.accountsCallback = e.accountsCallback),
          (this.chainCallback = e.chainCallback);
        const { session: t, ui: i, connection: r } = this.subscribe();
        (this._session = t),
          (this.connection = r),
          (this.relayEventManager = new e9()),
          (this.ui = i),
          this.ui.attach();
      }
      subscribe() {
        let e = tn.load(this.storage) || tn.create(this.storage),
          { linkAPIUrl: t } = this,
          i = new e7({ session: e, linkAPIUrl: t, listener: this }),
          r = this.isMobileWeb ? new ip() : new ic();
        return i.connect(), { session: e, ui: r, connection: i };
      }
      resetAndReload() {
        this.connection
          .destroy()
          .then(() => {
            let e = tn.load(this.storage);
            (null == e ? void 0 : e.id) === this._session.id && $.clearAll(),
              document.location.reload();
          })
          .catch((e) => {});
      }
      signEthereumTransaction(e) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: e.fromAddress,
            toAddress: e.toAddress,
            weiValue: eS(e.weiValue),
            data: e_(e.data, !0),
            nonce: e.nonce,
            gasPriceInWei: e.gasPriceInWei ? eS(e.gasPriceInWei) : null,
            maxFeePerGas: e.gasPriceInWei ? eS(e.gasPriceInWei) : null,
            maxPriorityFeePerGas: e.gasPriceInWei ? eS(e.gasPriceInWei) : null,
            gasLimit: e.gasLimit ? eS(e.gasLimit) : null,
            chainId: e.chainId,
            shouldSubmit: !1,
          },
        });
      }
      signAndSubmitEthereumTransaction(e) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: e.fromAddress,
            toAddress: e.toAddress,
            weiValue: eS(e.weiValue),
            data: e_(e.data, !0),
            nonce: e.nonce,
            gasPriceInWei: e.gasPriceInWei ? eS(e.gasPriceInWei) : null,
            maxFeePerGas: e.maxFeePerGas ? eS(e.maxFeePerGas) : null,
            maxPriorityFeePerGas: e.maxPriorityFeePerGas
              ? eS(e.maxPriorityFeePerGas)
              : null,
            gasLimit: e.gasLimit ? eS(e.gasLimit) : null,
            chainId: e.chainId,
            shouldSubmit: !0,
          },
        });
      }
      submitEthereumTransaction(e, t) {
        return this.sendRequest({
          method: "submitEthereumTransaction",
          params: { signedTransaction: e_(e, !0), chainId: t },
        });
      }
      getWalletLinkSession() {
        return this._session;
      }
      sendRequest(e) {
        let t = null,
          i = eb(8),
          r = (r) => {
            this.publishWeb3RequestCanceledEvent(i),
              this.handleErrorResponse(i, e.method, r),
              null == t || t();
          };
        return new Promise((s, n) => {
          (t = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: r,
            onResetConnection: this.resetAndReload,
          })),
            this.relayEventManager.callbacks.set(i, (e) => {
              if ((null == t || t(), e3(e))) return n(Error(e.errorMessage));
              s(e);
            }),
            this.publishWeb3RequestEvent(i, e);
        });
      }
      publishWeb3RequestEvent(e, t) {
        let i = { type: "WEB3_REQUEST", id: e, request: t };
        this.publishEvent("Web3Request", i, !0)
          .then((e) => {})
          .catch((e) => {
            this.handleWeb3ResponseMessage(i.id, {
              method: t.method,
              errorMessage: e.message,
            });
          }),
          this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
      }
      openCoinbaseWalletDeeplink(e) {
        if (this.ui instanceof ip)
          switch (e) {
            case "requestEthereumAccounts":
            case "switchEthereumChain":
              return;
            default:
              window.addEventListener(
                "blur",
                () => {
                  window.addEventListener(
                    "focus",
                    () => {
                      this.connection.checkUnseenEvents();
                    },
                    { once: !0 }
                  );
                },
                { once: !0 }
              ),
                this.ui.openCoinbaseWalletDeeplink();
          }
      }
      publishWeb3RequestCanceledEvent(e) {
        this.publishEvent(
          "Web3RequestCanceled",
          { type: "WEB3_REQUEST_CANCELED", id: e },
          !1
        ).then();
      }
      publishEvent(e, t, i) {
        return this.connection.publishEvent(e, t, i);
      }
      handleWeb3ResponseMessage(e, t) {
        if ("requestEthereumAccounts" === t.method) {
          ig.accountRequestCallbackIds.forEach((e) =>
            this.invokeCallback(e, t)
          ),
            ig.accountRequestCallbackIds.clear();
          return;
        }
        this.invokeCallback(e, t);
      }
      handleErrorResponse(e, t, i) {
        var r;
        let s =
          null != (r = null == i ? void 0 : i.message)
            ? r
            : "Unspecified error message.";
        this.handleWeb3ResponseMessage(e, { method: t, errorMessage: s });
      }
      invokeCallback(e, t) {
        let i = this.relayEventManager.callbacks.get(e);
        i && (i(t), this.relayEventManager.callbacks.delete(e));
      }
      requestEthereumAccounts() {
        let { appName: e, appLogoUrl: t } = this.metadata,
          i = {
            method: "requestEthereumAccounts",
            params: { appName: e, appLogoUrl: t },
          },
          r = eb(8);
        return new Promise((e, t) => {
          this.relayEventManager.callbacks.set(r, (i) => {
            if (e3(i)) return t(Error(i.errorMessage));
            e(i);
          }),
            ig.accountRequestCallbackIds.add(r),
            this.publishWeb3RequestEvent(r, i);
        });
      }
      watchAsset(e, t, i, r, s, n) {
        let a = {
            method: "watchAsset",
            params: {
              type: e,
              options: { address: t, symbol: i, decimals: r, image: s },
              chainId: n,
            },
          },
          o = null,
          l = eb(8),
          c = (e) => {
            this.publishWeb3RequestCanceledEvent(l),
              this.handleErrorResponse(l, a.method, e),
              null == o || o();
          };
        return (
          (o = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: c,
            onResetConnection: this.resetAndReload,
          })),
          new Promise((e, t) => {
            this.relayEventManager.callbacks.set(l, (i) => {
              if ((null == o || o(), e3(i))) return t(Error(i.errorMessage));
              e(i);
            }),
              this.publishWeb3RequestEvent(l, a);
          })
        );
      }
      addEthereumChain(e, t, i, r, s, n) {
        let a = {
            method: "addEthereumChain",
            params: {
              chainId: e,
              rpcUrls: t,
              blockExplorerUrls: r,
              chainName: s,
              iconUrls: i,
              nativeCurrency: n,
            },
          },
          o = null,
          l = eb(8),
          c = (e) => {
            this.publishWeb3RequestCanceledEvent(l),
              this.handleErrorResponse(l, a.method, e),
              null == o || o();
          };
        return (
          (o = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: c,
            onResetConnection: this.resetAndReload,
          })),
          new Promise((e, t) => {
            this.relayEventManager.callbacks.set(l, (i) => {
              if ((null == o || o(), e3(i))) return t(Error(i.errorMessage));
              e(i);
            }),
              this.publishWeb3RequestEvent(l, a);
          })
        );
      }
      switchEthereumChain(e, t) {
        let i = {
            method: "switchEthereumChain",
            params: Object.assign({ chainId: e }, { address: t }),
          },
          r = null,
          s = eb(8),
          n = (e) => {
            this.publishWeb3RequestCanceledEvent(s),
              this.handleErrorResponse(s, i.method, e),
              null == r || r();
          };
        return (
          (r = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: n,
            onResetConnection: this.resetAndReload,
          })),
          new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (i) =>
              (null == r || r(), e3(i) && i.errorCode)
                ? t(
                    eh({
                      code: i.errorCode,
                      message:
                        "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                    })
                  )
                : e3(i)
                ? t(Error(i.errorMessage))
                : void e(i)
            ),
              this.publishWeb3RequestEvent(s, i);
          })
        );
      }
    }
    ig.accountRequestCallbackIds = new Set();
    let iy = "DefaultChainId",
      im = "DefaultJsonRpcUrl";
    class iw {
      constructor(e) {
        (this._relay = null),
          (this._addresses = []),
          (this.metadata = e.metadata),
          (this._storage = new $("walletlink", iu)),
          (this.callback = e.callback || null);
        const t = this._storage.getItem(e5);
        if (t) {
          const e = t.split(" ");
          "" !== e[0] && (this._addresses = e.map((e) => eO(e)));
        }
        this.initializeRelay();
      }
      getSession() {
        let { id: e, secret: t } =
          this.initializeRelay().getWalletLinkSession();
        return { id: e, secret: t };
      }
      async handshake() {
        await this._eth_requestAccounts();
      }
      get selectedAddress() {
        return this._addresses[0] || void 0;
      }
      get jsonRpcUrl() {
        var e;
        return null != (e = this._storage.getItem(im)) ? e : void 0;
      }
      set jsonRpcUrl(e) {
        this._storage.setItem(im, e);
      }
      updateProviderInfo(e, t) {
        var i;
        this.jsonRpcUrl = e;
        let r = this.getChainId();
        this._storage.setItem(iy, t.toString(10)),
          eN(t) !== r &&
            (null == (i = this.callback) ||
              i.call(this, "chainChanged", eA(t)));
      }
      async watchAsset(e) {
        let t = Array.isArray(e) ? e[0] : e;
        if (!t.type) throw es("Type is required");
        if ((null == t ? void 0 : t.type) !== "ERC20")
          throw es(`Asset of type '${t.type}' is not supported`);
        if (!(null == t ? void 0 : t.options)) throw es("Options are required");
        if (!(null == t ? void 0 : t.options.address))
          throw es("Address is required");
        let i = this.getChainId(),
          { address: r, symbol: s, image: n, decimals: a } = t.options,
          o = this.initializeRelay(),
          l = await o.watchAsset(
            t.type,
            r,
            s,
            a,
            n,
            null == i ? void 0 : i.toString()
          );
        return !e3(l) && !!l.result;
      }
      async addEthereumChain(e) {
        var t, i;
        let r = e[0];
        if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
          throw es("please pass in at least 1 rpcUrl");
        if (!r.chainName || "" === r.chainName.trim())
          throw es("chainName is a required field");
        if (!r.nativeCurrency) throw es("nativeCurrency is a required field");
        let s = Number.parseInt(r.chainId, 16);
        if (s === this.getChainId()) return !1;
        let n = this.initializeRelay(),
          {
            rpcUrls: a = [],
            blockExplorerUrls: o = [],
            chainName: l,
            iconUrls: c = [],
            nativeCurrency: h,
          } = r,
          d = await n.addEthereumChain(s.toString(), a, c, o, l, h);
        if (e3(d)) return !1;
        if ((null == (i = d.result) ? void 0 : i.isApproved) === !0)
          return this.updateProviderInfo(a[0], s), null;
        throw en("unable to add ethereum chain");
      }
      async switchEthereumChain(e) {
        let t = Number.parseInt(e[0].chainId, 16),
          i = this.initializeRelay(),
          r = await i.switchEthereumChain(
            t.toString(10),
            this.selectedAddress || void 0
          );
        if (e3(r)) throw r;
        let s = r.result;
        return (
          s.isApproved &&
            s.rpcUrl.length > 0 &&
            this.updateProviderInfo(s.rpcUrl, t),
          null
        );
      }
      async cleanup() {
        (this.callback = null),
          this._relay && this._relay.resetAndReload(),
          this._storage.clear();
      }
      _setAddresses(e, t) {
        var i;
        if (!Array.isArray(e)) throw Error("addresses is not an array");
        let r = e.map((e) => eO(e));
        JSON.stringify(r) !== JSON.stringify(this._addresses) &&
          ((this._addresses = r),
          null == (i = this.callback) || i.call(this, "accountsChanged", r),
          this._storage.setItem(e5, r.join(" ")));
      }
      async request(e) {
        let t = e.params || [];
        switch (e.method) {
          case "eth_accounts":
            return [...this._addresses];
          case "eth_coinbase":
            return this.selectedAddress || null;
          case "net_version":
            return this.getChainId().toString(10);
          case "eth_chainId":
            return eA(this.getChainId());
          case "eth_requestAccounts":
            return this._eth_requestAccounts();
          case "eth_ecRecover":
          case "personal_ecRecover":
            return this.ecRecover(e);
          case "personal_sign":
            return this.personalSign(e);
          case "eth_signTransaction":
            return this._eth_signTransaction(t);
          case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(t);
          case "eth_sendTransaction":
            return this._eth_sendTransaction(t);
          case "eth_signTypedData_v1":
          case "eth_signTypedData_v3":
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
            return this.signTypedData(e);
          case "wallet_addEthereumChain":
            return this.addEthereumChain(t);
          case "wallet_switchEthereumChain":
            return this.switchEthereumChain(t);
          case "wallet_watchAsset":
            return this.watchAsset(t);
          default:
            if (!this.jsonRpcUrl) throw en("No RPC URL set for chain");
            return eY(e, this.jsonRpcUrl);
        }
      }
      _ensureKnownAddress(e) {
        let t = eO(e);
        if (!this._addresses.map((e) => eO(e)).includes(t))
          throw Error("Unknown Ethereum address");
      }
      _prepareTransactionParams(e) {
        let t = e.from ? eO(e.from) : this.selectedAddress;
        if (!t) throw Error("Ethereum address is unavailable");
        this._ensureKnownAddress(t);
        let i = e.to ? eO(e.to) : null,
          r = null != e.value ? ej(e.value) : BigInt(0),
          s = e.data ? eR(e.data) : J.Buffer.alloc(0),
          n = null != e.nonce ? eN(e.nonce) : null,
          a = null != e.gasPrice ? ej(e.gasPrice) : null,
          o = null != e.maxFeePerGas ? ej(e.maxFeePerGas) : null,
          l =
            null != e.maxPriorityFeePerGas ? ej(e.maxPriorityFeePerGas) : null;
        return {
          fromAddress: t,
          toAddress: i,
          weiValue: r,
          data: s,
          nonce: n,
          gasPriceInWei: a,
          maxFeePerGas: o,
          maxPriorityFeePerGas: l,
          gasLimit: null != e.gas ? ej(e.gas) : null,
          chainId: e.chainId ? eN(e.chainId) : this.getChainId(),
        };
      }
      async ecRecover(e) {
        let { method: t, params: i } = e;
        if (!Array.isArray(i)) throw es();
        let r = this.initializeRelay(),
          s = await r.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
              message: eI(i[0]),
              signature: eI(i[1]),
              addPrefix: "personal_ecRecover" === t,
            },
          });
        if (e3(s)) throw s;
        return s.result;
      }
      getChainId() {
        var e;
        return Number.parseInt(
          null != (e = this._storage.getItem(iy)) ? e : "1",
          10
        );
      }
      async _eth_requestAccounts() {
        var e, t;
        if (this._addresses.length > 0)
          return (
            null == (e = this.callback) ||
              e.call(this, "connect", { chainId: eA(this.getChainId()) }),
            this._addresses
          );
        let i = this.initializeRelay(),
          r = await i.requestEthereumAccounts();
        if (e3(r)) throw r;
        if (!r.result) throw Error("accounts received is empty");
        return (
          this._setAddresses(r.result),
          null == (t = this.callback) ||
            t.call(this, "connect", { chainId: eA(this.getChainId()) }),
          this._addresses
        );
      }
      async personalSign({ params: e }) {
        if (!Array.isArray(e)) throw es();
        let t = e[1],
          i = e[0];
        this._ensureKnownAddress(t);
        let r = this.initializeRelay(),
          s = await r.sendRequest({
            method: "signEthereumMessage",
            params: {
              address: eO(t),
              message: eI(i),
              addPrefix: !0,
              typedDataJson: null,
            },
          });
        if (e3(s)) throw s;
        return s.result;
      }
      async _eth_signTransaction(e) {
        let t = this._prepareTransactionParams(e[0] || {}),
          i = this.initializeRelay(),
          r = await i.signEthereumTransaction(t);
        if (e3(r)) throw r;
        return r.result;
      }
      async _eth_sendRawTransaction(e) {
        let t = eR(e[0]),
          i = this.initializeRelay(),
          r = await i.submitEthereumTransaction(t, this.getChainId());
        if (e3(r)) throw r;
        return r.result;
      }
      async _eth_sendTransaction(e) {
        let t = this._prepareTransactionParams(e[0] || {}),
          i = this.initializeRelay(),
          r = await i.signAndSubmitEthereumTransaction(t);
        if (e3(r)) throw r;
        return r.result;
      }
      async signTypedData(e) {
        let { method: t, params: i } = e;
        if (!Array.isArray(i)) throw es();
        let r = i[+("eth_signTypedData_v1" === t)],
          s = i[+("eth_signTypedData_v1" !== t)];
        this._ensureKnownAddress(r);
        let n = this.initializeRelay(),
          a = await n.sendRequest({
            method: "signEthereumMessage",
            params: {
              address: eO(r),
              message: e_(
                {
                  eth_signTypedData_v1: e2.default.hashForSignTypedDataLegacy,
                  eth_signTypedData_v3: e2.default.hashForSignTypedData_v3,
                  eth_signTypedData_v4: e2.default.hashForSignTypedData_v4,
                  eth_signTypedData: e2.default.hashForSignTypedData_v4,
                }[t]({
                  data: (function (e) {
                    if ("string" == typeof e) return JSON.parse(e);
                    if ("object" == typeof e) return e;
                    throw es(`Not a JSON string or an object: ${String(e)}`);
                  })(s),
                }),
                !0
              ),
              typedDataJson: JSON.stringify(s, null, 2),
              addPrefix: !1,
            },
          });
        if (e3(a)) throw a;
        return a.result;
      }
      initializeRelay() {
        return (
          this._relay ||
            (this._relay = new ig({
              linkAPIUrl: iu,
              storage: this._storage,
              metadata: this.metadata,
              accountsCallback: this._setAddresses.bind(this),
              chainCallback: this.updateProviderInfo.bind(this),
            })),
          this._relay
        );
      }
    }
    let ib = "SignerType",
      iv = new $("CBWSDK", "SignerConfigurator");
    async function iE(e) {
      let {
        communicator: t,
        metadata: i,
        handshakeRequest: r,
        callback: s,
      } = e;
      i_(t, i, s).catch(() => {});
      let n = {
          id: crypto.randomUUID(),
          event: "selectSignerType",
          data: Object.assign(Object.assign({}, e.preference), {
            handshakeRequest: r,
          }),
        },
        { data: a } = await t.postRequestAndWaitForResponse(n);
      return a;
    }
    async function i_(e, t, i) {
      await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
      let r = new iw({ metadata: t, callback: i });
      e.postMessage({
        event: "WalletLinkUpdate",
        data: { session: r.getSession() },
      }),
        await r.handshake(),
        e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
    }
    let iI = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
      { checkCrossOriginOpenerPolicy: iS, getCrossOriginOpenerPolicy: iA } = {
        getCrossOriginOpenerPolicy: () => (void 0 === i ? "undefined" : i),
        checkCrossOriginOpenerPolicy: async () => {
          if ("u" < typeof window) {
            i = "non-browser-env";
            return;
          }
          try {
            let e = `${window.location.origin}${window.location.pathname}`,
              t = await fetch(e, { method: "HEAD" });
            if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
            let r = t.headers.get("Cross-Origin-Opener-Policy");
            (i = null != r ? r : "null"),
              "same-origin" === i && console.error(iI);
          } catch (e) {
            console.error(
              "Error checking Cross-Origin-Opener-Policy:",
              e.message
            ),
              (i = "error");
          }
        },
      },
      iP = {
        isRed: !1,
        info: "Retry",
        svgWidth: "10",
        svgHeight: "11",
        path: il,
        defaultFillRule: "evenodd",
        defaultClipRule: "evenodd",
      },
      iC = null;
    class ix {
      constructor({
        url: e = "https://keys.coinbase.com/connect",
        metadata: t,
        preference: i,
      }) {
        (this.popup = null),
          (this.listeners = new Map()),
          (this.postMessage = async (e) => {
            (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
          }),
          (this.postRequestAndWaitForResponse = async (e) => {
            let t = this.onMessage(({ requestId: t }) => t === e.id);
            return this.postMessage(e), await t;
          }),
          (this.onMessage = async (e) =>
            new Promise((t, i) => {
              let r = (i) => {
                if (i.origin !== this.url.origin) return;
                let s = i.data;
                e(s) &&
                  (t(s),
                  window.removeEventListener("message", r),
                  this.listeners.delete(r));
              };
              window.addEventListener("message", r),
                this.listeners.set(r, { reject: i });
            })),
          (this.disconnect = () => {
            var e;
            (e = this.popup) && !e.closed && e.close(),
              (this.popup = null),
              this.listeners.forEach(({ reject: e }, t) => {
                e(ea("Request rejected")),
                  window.removeEventListener("message", t);
              }),
              this.listeners.clear();
          }),
          (this.waitForPopupLoaded = async () =>
            this.popup && !this.popup.closed
              ? (this.popup.focus(), this.popup)
              : ((this.popup = await (function (e) {
                  let t = (window.innerWidth - 420) / 2 + window.screenX,
                    i = (window.innerHeight - 540) / 2 + window.screenY;
                  function r() {
                    let r = `wallet_${crypto.randomUUID()}`,
                      s = window.open(
                        e,
                        r,
                        `width=420, height=540, left=${t}, top=${i}`
                      );
                    return (null == s || s.focus(), s) ? s : null;
                  }
                  var s = e;
                  for (let [e, t] of Object.entries({
                    sdkName: eG,
                    sdkVersion: eV,
                    origin: window.location.origin,
                    coop: iA(),
                  }))
                    s.searchParams.append(e, t.toString());
                  let n = r();
                  if (!n) {
                    let e = (function () {
                      if (!iC) {
                        let e = document.createElement("div");
                        (e.className = "-cbwsdk-css-reset"),
                          document.body.appendChild(e),
                          (iC = new is()).attach(e);
                      }
                      return iC;
                    })();
                    return new Promise((t, i) => {
                      e.presentItem({
                        autoExpand: !0,
                        message: "Popup was blocked. Try again.",
                        menuItems: [
                          Object.assign(Object.assign({}, iP), {
                            onClick: () => {
                              (n = r())
                                ? t(n)
                                : i(en("Popup window was blocked")),
                                e.clear();
                            },
                          }),
                        ],
                      });
                    });
                  }
                  return Promise.resolve(n);
                })(this.url)),
                this.onMessage(({ event: e }) => "PopupUnload" === e)
                  .then(this.disconnect)
                  .catch(() => {}),
                this.onMessage(({ event: e }) => "PopupLoaded" === e)
                  .then((e) => {
                    this.postMessage({
                      requestId: e.id,
                      data: {
                        version: eV,
                        metadata: this.metadata,
                        preference: this.preference,
                        location: window.location.toString(),
                      },
                    });
                  })
                  .then(() => {
                    if (!this.popup) throw en();
                    return this.popup;
                  }))),
          (this.url = new URL(e)),
          (this.metadata = t),
          (this.preference = i);
      }
    }
    e.i(948053);
    var ik = e.i(757784),
      ik = ik;
    class iT extends ik.default {}
    var iO = function (e, t) {
      var i = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          0 > t.indexOf(r) &&
          (i[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
          0 > t.indexOf(r[s]) &&
            Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
            (i[r[s]] = e[r[s]]);
      return i;
    };
    class iR extends iT {
      constructor(e) {
        var { metadata: t } = e,
          i = e.preference,
          { keysUrl: r } = i,
          s = iO(i, ["keysUrl"]);
        super(),
          (this.signer = null),
          (this.isCoinbaseWallet = !0),
          (this.metadata = t),
          (this.preference = s),
          (this.communicator = new ix({ url: r, metadata: t, preference: s }));
        const n = iv.getItem(ib);
        n && (this.signer = this.initSigner(n));
      }
      async request(e) {
        try {
          if (
            (!(function (e) {
              if (!e || "object" != typeof e || Array.isArray(e))
                throw es({
                  message: "Expected a single, non-array, object argument.",
                  data: e,
                });
              let { method: t, params: i } = e;
              if ("string" != typeof t || 0 === t.length)
                throw es({
                  message: "'args.method' must be a non-empty string.",
                  data: e,
                });
              if (
                void 0 !== i &&
                !Array.isArray(i) &&
                ("object" != typeof i || null === i)
              )
                throw es({
                  message:
                    "'args.params' must be an object or array if provided.",
                  data: e,
                });
              switch (t) {
                case "eth_sign":
                case "eth_signTypedData_v2":
                case "eth_subscribe":
                case "eth_unsubscribe":
                  throw el();
              }
            })(e),
            !this.signer)
          )
            switch (e.method) {
              case "eth_requestAccounts": {
                let t = await this.requestSignerSelection(e),
                  i = this.initSigner(t);
                await i.handshake(e), (this.signer = i), iv.setItem(ib, t);
                break;
              }
              case "wallet_sendCalls": {
                let t = this.initSigner("scw");
                await t.handshake({ method: "handshake" });
                let i = await t.request(e);
                return await t.cleanup(), i;
              }
              case "wallet_getCallsStatus":
                return eY(e, "https://rpc.wallet.coinbase.com");
              case "net_version":
                return 1;
              case "eth_chainId":
                return eA(1);
              default:
                throw eo(
                  "Must call 'eth_requestAccounts' before other methods"
                );
            }
          return await this.signer.request(e);
        } catch (r) {
          let e,
            t,
            { code: i } = r;
          return (
            i === G && this.disconnect(),
            Promise.reject(
              ((e = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                var i, r;
                let s = {};
                if (
                  e &&
                  "object" == typeof e &&
                  !Array.isArray(e) &&
                  ei(e, "code") &&
                  Number.isInteger((i = e.code)) &&
                  (Q[i.toString()] || ((r = i) >= -32099 && r <= -32e3))
                )
                  (s.code = e.code),
                    e.message && "string" == typeof e.message
                      ? ((s.message = e.message),
                        ei(e, "data") && (s.data = e.data))
                      : ((s.message = ee(s.code)),
                        (s.data = { originalError: et(e) }));
                else
                  (s.code = F),
                    (s.message = er(e, "message") ? e.message : X),
                    (s.data = { originalError: et(e) });
                return t && (s.stack = er(e, "stack") ? e.stack : void 0), s;
              })(
                (function (e) {
                  var t;
                  if ("string" == typeof e) return { message: e, code: F };
                  if (e3(e)) {
                    let i = e.errorMessage,
                      r =
                        null != (t = e.errorCode)
                          ? t
                          : i.match(/(denied|rejected)/i)
                          ? V
                          : void 0;
                    return Object.assign(Object.assign({}, e), {
                      message: i,
                      code: r,
                      data: { method: e.method },
                    });
                  }
                  return e;
                })(r),
                { shouldIncludeStack: !0 }
              )),
              (t = new URL(
                "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
              )).searchParams.set("version", eV),
              t.searchParams.set("code", e.code.toString()),
              t.searchParams.set("message", e.message),
              Object.assign(Object.assign({}, e), { docUrl: t.href }))
            )
          );
        }
      }
      async enable() {
        return (
          console.warn(
            '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
          ),
          await this.request({ method: "eth_requestAccounts" })
        );
      }
      async disconnect() {
        var e;
        await (null == (e = this.signer) ? void 0 : e.cleanup()),
          (this.signer = null),
          $.clearAll(),
          this.emit("disconnect", ec("User initiated disconnection"));
      }
      requestSignerSelection(e) {
        return iE({
          communicator: this.communicator,
          preference: this.preference,
          metadata: this.metadata,
          handshakeRequest: e,
          callback: this.emit.bind(this),
        });
      }
      initSigner(e) {
        return (function (e) {
          let { signerType: t, metadata: i, communicator: r, callback: s } = e;
          switch (t) {
            case "scw":
              return new e1({ metadata: i, callback: s, communicator: r });
            case "walletlink":
              return new iw({ metadata: i, callback: s });
          }
        })({
          signerType: e,
          metadata: this.metadata,
          communicator: this.communicator,
          callback: this.emit.bind(this),
        });
      }
    }
    let iN = { options: "all" };
    function ij(e) {
      new $("CBWSDK").setItem("VERSION", eV), iS();
      let t = {
        metadata: {
          appName: e.appName || "Dapp",
          appLogoUrl: e.appLogoUrl || "",
          appChainIds: e.appChainIds || [],
        },
        preference: Object.assign(iN, null != (i = e.preference) ? i : {}),
      };
      var i,
        r = t.preference;
      if (r) {
        if (!["all", "smartWalletOnly", "eoaOnly"].includes(r.options))
          throw Error(`Invalid options: ${r.options}`);
        if (
          r.attribution &&
          void 0 !== r.attribution.auto &&
          void 0 !== r.attribution.dataSuffix
        )
          throw Error(
            "Attribution cannot contain both auto and dataSuffix properties"
          );
      }
      let s = null;
      return {
        getProvider: () => {
          var e;
          let i;
          return (
            s ||
              (s =
                null !=
                (e = (function ({ metadata: e, preference: t }) {
                  var i, r;
                  let { appName: s, appLogoUrl: n, appChainIds: a } = e;
                  if ("smartWalletOnly" !== t.options) {
                    let e = globalThis.coinbaseWalletExtension;
                    if (e)
                      return (
                        null == (i = e.setAppInfo) || i.call(e, s, n, a, t), e
                      );
                  }
                  let o = (function () {
                    var e, t;
                    try {
                      let i = globalThis;
                      return null != (e = i.ethereum)
                        ? e
                        : null == (t = i.top)
                        ? void 0
                        : t.ethereum;
                    } catch (e) {
                      return;
                    }
                  })();
                  if (null == o ? void 0 : o.isCoinbaseBrowser)
                    return (
                      null == (r = o.setAppInfo) || r.call(o, s, n, a, t), o
                    );
                })((i = { metadata: t.metadata, preference: t.preference })))
                  ? e
                  : new iR(i)),
            s
          );
        },
      };
    }
    e.s(["createCoinbaseWalletSDK", () => ij], 775581);
    var iD = e.i(246887),
      iM = e.i(965595),
      iU = e.i(757001),
      iL = e.i(401667),
      iW = e.i(355582),
      iB = e.i(942056),
      iK = e.i(573612);
    class iq extends Error {
      constructor(e, t = {}) {
        const i = (() => {
            if (t.cause instanceof iq) {
              if (t.cause.details) return t.cause.details;
              if (t.cause.shortMessage) return t.cause.shortMessage;
            }
            return t.cause &&
              "details" in t.cause &&
              "string" == typeof t.cause.details
              ? t.cause.details
              : t.cause?.message
              ? t.cause.message
              : t.details;
          })(),
          r = (t.cause instanceof iq && t.cause.docsPath) || t.docsPath,
          s = `https://oxlib.sh${r ?? ""}`;
        super(
          [
            e || "An error occurred.",
            ...(t.metaMessages ? ["", ...t.metaMessages] : []),
            ...(i || r
              ? ["", i ? `Details: ${i}` : void 0, r ? `See: ${s}` : void 0]
              : []),
          ]
            .filter((e) => "string" == typeof e)
            .join("\n"),
          t.cause ? { cause: t.cause } : void 0
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
          Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ox@0.1.1",
          }),
          (this.cause = t.cause),
          (this.details = i),
          (this.docs = s),
          (this.docsPath = r),
          (this.shortMessage = e);
      }
      walk(e) {
        return (function e(t, i) {
          return i?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && t.cause
            ? e(t.cause, i)
            : i
            ? null
            : t;
        })(this, e);
      }
    }
    function iH(e, t) {
      if (iX(e) > t) throw new i3({ givenSize: iX(e), maxSize: t });
    }
    function i$(e, t = {}) {
      let { dir: i, size: r = 32 } = t;
      if (0 === r) return e;
      let s = e.replace("0x", "");
      if (s.length > 2 * r)
        throw new i6({
          size: Math.ceil(s.length / 2),
          targetSize: r,
          type: "Hex",
        });
      return `0x${s["right" === i ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    function iJ(e, t, i) {
      return JSON.stringify(
        e,
        (e, i) =>
          "function" == typeof t
            ? t(e, i)
            : "bigint" == typeof i
            ? i.toString() + "#__bigint"
            : i,
        i
      );
    }
    let iz = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function iF(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function iV(e) {
      return e instanceof Uint8Array
        ? iG(e)
        : Array.isArray(e)
        ? iG(new Uint8Array(e))
        : e;
    }
    function iG(e, t = {}) {
      let i = "";
      for (let t = 0; t < e.length; t++) i += iz[e[t]];
      let r = `0x${i}`;
      return "number" == typeof t.size ? (iH(r, t.size), iZ(r, t.size)) : r;
    }
    function iY(e, t = {}) {
      var i;
      let r,
        { signed: s, size: n } = t,
        a = BigInt(e);
      n
        ? (r = s
            ? (1n << (8n * BigInt(n) - 1n)) - 1n
            : 2n ** (8n * BigInt(n)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let o = "bigint" == typeof r && s ? -r - 1n : 0;
      if ((r && a > r) || a < o) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new i1({
          max: r ? `${r}${t}` : void 0,
          min: `${o}${t}`,
          signed: s,
          size: n,
          value: `${e}${t}`,
        });
      }
      let l = (s && a < 0 ? (1n << BigInt(8 * n)) + BigInt(a) : a).toString(16),
        c = `0x${l}`;
      return n ? ((i = c), i$(i, { dir: "left", size: n })) : c;
    }
    function iZ(e, t) {
      return i$(e, { dir: "right", size: t });
    }
    function iQ(e, t, i, r = {}) {
      let { strict: s } = r;
      if ("number" == typeof t && t > 0 && t > iX(e) - 1)
        throw new i8({ offset: t, position: "start", size: iX(e) });
      let n = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (i ?? e.length) * 2)}`;
      return (
        s &&
          (function (e, t, i) {
            if ("number" == typeof t && "number" == typeof i && iX(e) !== i - t)
              throw new i8({ offset: i, position: "end", size: iX(e) });
          })(n, t, i),
        n
      );
    }
    function iX(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function i0(e) {
      return (function (e, t = {}) {
        let { dir: i = "left" } = t,
          r = e.replace("0x", ""),
          s = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === i ? e : r.length - e - 1].toString()) s++;
          else break;
        return "0" ===
          (r = "left" === i ? r.slice(s) : r.slice(0, r.length - s))
          ? "0x"
          : "right" === i && r.length % 2 == 1
          ? `0x${r}0`
          : `0x${r}`;
      })(e, { dir: "left" });
    }
    class i1 extends iq {
      constructor({ max: e, min: t, signed: i, size: r, value: s }) {
        super(
          `Number \`${s}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
            i ? " signed" : " unsigned"
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
    class i2 extends iq {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? iJ(e) : e
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
    class i5 extends iq {
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
    class i3 extends iq {
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
    class i8 extends iq {
      constructor({ offset: e, position: t, size: i }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${i}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class i6 extends iq {
      constructor({ size: e, targetSize: t, type: i }) {
        super(
          `${i.charAt(0).toUpperCase()}${i
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
    function i4(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    let i7 = new TextEncoder();
    function i9(e) {
      var t;
      return e instanceof Uint8Array
        ? e
        : "string" == typeof e
        ? re(e)
        : (t = e) instanceof Uint8Array
        ? t
        : new Uint8Array(t);
    }
    function re(e, t = {}) {
      let { size: i } = t,
        r = e;
      i && (iH(e, i), (r = iZ(e, i)));
      let s = r.slice(2);
      s.length % 2 && (s = `0${s}`);
      let n = s.length / 2,
        a = new Uint8Array(n);
      for (let e = 0, t = 0; e < n; e++) {
        let i = i4(s.charCodeAt(t++)),
          r = i4(s.charCodeAt(t++));
        if (void 0 === i || void 0 === r)
          throw new iq(
            `Invalid byte sequence ("${s[t - 2]}${s[t - 1]}" in "${s}").`
          );
        a[e] = 16 * i + r;
      }
      return a;
    }
    class rt extends iq {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? iJ(e) : e
          }\` of type \`${typeof e}\` is an invalid Bytes value.`,
          { metaMessages: ["Bytes values must be of type `Bytes`."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesTypeError",
          });
      }
    }
    class ri extends iq {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeOverflowError",
          });
      }
    }
    class rr extends iq {
      constructor({ size: e, targetSize: t, type: i }) {
        super(
          `${i.charAt(0).toUpperCase()}${i
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeExceedsPaddingSizeError",
          });
      }
    }
    let rs = 2n ** 256n - 1n;
    function rn(e, t = {}) {
      let { recovered: i } = t;
      if (void 0 === e.r || void 0 === e.s || (i && void 0 === e.yParity))
        throw new rP({ signature: e });
      if (e.r < 0n || e.r > rs) throw new rC({ value: e.r });
      if (e.s < 0n || e.s > rs) throw new rx({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new rk({ value: e.yParity });
    }
    function ra(e) {
      return ro(iG(e));
    }
    function ro(e) {
      if (130 !== e.length && 132 !== e.length) throw new rA({ signature: e });
      let t = BigInt(iQ(e, 0, 32)),
        i = BigInt(iQ(e, 32, 64)),
        r = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return rI(t);
            } catch {
              throw new rk({ value: t });
            }
        })();
      return void 0 === r ? { r: t, s: i } : { r: t, s: i, yParity: r };
    }
    function rl(e) {
      if (void 0 !== e.r && void 0 !== e.s) return rc(e);
    }
    function rc(e) {
      let t =
        "string" == typeof e
          ? ro(e)
          : e instanceof Uint8Array
          ? ra(e)
          : "string" == typeof e.r
          ? rp(e)
          : e.v
          ? ru(e)
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      return rn(t), t;
    }
    function rh(e) {
      return rd(iG(e));
    }
    function rd(e) {
      let { r: t, s: i } = iK.secp256k1.Signature.fromDER(iV(e).slice(2));
      return { r: t, s: i };
    }
    function ru(e) {
      return { r: e.r, s: e.s, yParity: rI(e.v) };
    }
    function rp(e) {
      let t = (() => {
        let t = e.v ? Number(e.v) : void 0,
          i = e.yParity ? Number(e.yParity) : void 0;
        if (
          ("number" == typeof t && "number" != typeof i && (i = rI(t)),
          "number" != typeof i)
        )
          throw new rk({ value: e.yParity });
        return i;
      })();
      return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
    }
    function rf(e) {
      let [t, i, r] = e;
      return rc({
        r: "0x" === i ? 0n : BigInt(i),
        s: "0x" === r ? 0n : BigInt(r),
        yParity: "0x" === t ? 0 : Number(t),
      });
    }
    function rg(e) {
      return re(ry(e));
    }
    function ry(e) {
      rn(e);
      let t = e.r,
        i = e.s;
      return iF(
        iY(t, { size: 32 }),
        iY(i, { size: 32 }),
        "number" == typeof e.yParity ? iY(rS(e.yParity), { size: 1 }) : "0x"
      );
    }
    function rm(e) {
      return new iK.secp256k1.Signature(e.r, e.s).toDERRawBytes();
    }
    function rw(e) {
      let t = new iK.secp256k1.Signature(e.r, e.s);
      return `0x${t.toDERHex()}`;
    }
    function rb(e) {
      return { r: e.r, s: e.s, v: rS(e.yParity) };
    }
    function rv(e) {
      let { r: t, s: i, yParity: r } = e;
      return {
        r: iY(t, { size: 32 }),
        s: iY(i, { size: 32 }),
        yParity: 0 === r ? "0x0" : "0x1",
      };
    }
    function rE(e) {
      let { r: t, s: i, yParity: r } = e;
      return [
        r ? "0x01" : "0x",
        0n === t ? "0x" : i0(iY(t)),
        0n === i ? "0x" : i0(iY(i)),
      ];
    }
    function r_(e, t = {}) {
      try {
        return rn(e, t), !0;
      } catch {
        return !1;
      }
    }
    function rI(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new rT({ value: e });
    }
    function rS(e) {
      if (0 === e) return 27;
      if (1 === e) return 28;
      throw new rk({ value: e });
    }
    class rA extends iq {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${iX(iV(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSerializedSizeError",
          });
      }
    }
    class rP extends iq {
      constructor({ signature: e }) {
        super(
          `Signature \`${iJ(
            e
          )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.MissingPropertiesError",
          });
      }
    }
    class rC extends iq {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidRError",
          });
      }
    }
    class rx extends iq {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSError",
          });
      }
    }
    class rk extends iq {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidYParityError",
          });
      }
    }
    class rT extends iq {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidVError",
          });
      }
    }
    e.s(
      [
        "InvalidRError",
        () => rC,
        "InvalidSError",
        () => rx,
        "InvalidSerializedSizeError",
        () => rA,
        "InvalidVError",
        () => rT,
        "InvalidYParityError",
        () => rk,
        "MissingPropertiesError",
        () => rP,
        "assert",
        () => rn,
        "extract",
        () => rl,
        "from",
        () => rc,
        "fromBytes",
        () => ra,
        "fromDerBytes",
        () => rh,
        "fromDerHex",
        () => rd,
        "fromHex",
        () => ro,
        "fromLegacy",
        () => ru,
        "fromRpc",
        () => rp,
        "fromTuple",
        () => rf,
        "toBytes",
        () => rg,
        "toDerBytes",
        () => rm,
        "toDerHex",
        () => rw,
        "toHex",
        () => ry,
        "toLegacy",
        () => rb,
        "toRpc",
        () => rv,
        "toTuple",
        () => rE,
        "vToYParity",
        () => rI,
        "validate",
        () => r_,
        "yParityToV",
        () => rS,
      ],
      503056
    );
    var rO = e.i(503056),
      rO = rO;
    class rR extends Map {
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
        return (
          super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
        );
      }
      set(e, t) {
        if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
          let e = this.keys().next().value;
          e && this.delete(e);
        }
        return this;
      }
    }
    let rN = { checksum: new rR(8192) }.checksum;
    var rj = e.i(96157);
    function rD(e, t = {}) {
      let { as: i = "string" == typeof e ? "Hex" : "Bytes" } = t,
        r = (0, rj.keccak_256)(i9(e));
      return "Bytes" === i ? r : iG(r);
    }
    function rM(e, t = {}) {
      let { compressed: i } = t,
        { prefix: r, x: s, y: n } = e;
      if (!1 === i || ("bigint" == typeof s && "bigint" == typeof n)) {
        if (4 !== r) throw new rK({ prefix: r, cause: new rH() });
        return;
      }
      if (!0 === i || ("bigint" == typeof s && void 0 === n)) {
        if (3 !== r && 2 !== r) throw new rK({ prefix: r, cause: new rq() });
        return;
      }
      throw new rB({ publicKey: e });
    }
    function rU(e) {
      let t = (() => {
        if (
          (function (e, t = {}) {
            let { strict: i = !1 } = t;
            try {
              return (
                !(function (e, t = {}) {
                  let { strict: i = !1 } = t;
                  if (!e || "string" != typeof e) throw new i2(e);
                  if ((i && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                    throw new i5(e);
                })(e, { strict: i }),
                !0
              );
            } catch {
              return !1;
            }
          })(e)
        )
          return rL(e);
        if (
          (function (e) {
            try {
              if (
                !(e instanceof Uint8Array) &&
                (!e ||
                  "object" != typeof e ||
                  !("BYTES_PER_ELEMENT" in e) ||
                  1 !== e.BYTES_PER_ELEMENT ||
                  "Uint8Array" !== e.constructor.name)
              )
                throw new rt(e);
              return !0;
            } catch {
              return !1;
            }
          })(e)
        )
          return rL(iG(e));
        let { prefix: t, x: i, y: r } = e;
        return "bigint" == typeof i && "bigint" == typeof r
          ? { prefix: t ?? 4, x: i, y: r }
          : { prefix: t, x: i };
      })();
      return rM(t), t;
    }
    function rL(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new r$({ publicKey: e });
      if (130 === e.length)
        return { prefix: 4, x: BigInt(iQ(e, 0, 32)), y: BigInt(iQ(e, 32, 64)) };
      if (132 === e.length) {
        let t = Number(iQ(e, 0, 1));
        return { prefix: t, x: BigInt(iQ(e, 1, 33)), y: BigInt(iQ(e, 33, 65)) };
      }
      return { prefix: Number(iQ(e, 0, 1)), x: BigInt(iQ(e, 1, 33)) };
    }
    function rW(e, t = {}) {
      rM(e);
      let { prefix: i, x: r, y: s } = e,
        { includePrefix: n = !0 } = t;
      return iF(
        n ? iY(i, { size: 1 }) : "0x",
        iY(r, { size: 32 }),
        "bigint" == typeof s ? iY(s, { size: 32 }) : "0x"
      );
    }
    class rB extends iq {
      constructor({ publicKey: e }) {
        super(`Value \`${iJ(e)}\` is not a valid public key.`, {
          metaMessages: [
            "Public key must contain:",
            "- an `x` and `prefix` value (compressed)",
            "- an `x`, `y`, and `prefix` value (uncompressed)",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidError",
          });
      }
    }
    class rK extends iq {
      constructor({ prefix: e, cause: t }) {
        super(`Prefix "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidPrefixError",
          });
      }
    }
    class rq extends iq {
      constructor() {
        super("Prefix must be 2 or 3 for compressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidCompressedPrefixError",
          });
      }
    }
    class rH extends iq {
      constructor() {
        super("Prefix must be 4 for uncompressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidUncompressedPrefixError",
          });
      }
    }
    class r$ extends iq {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${iX(iV(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidSerializedSizeError",
          });
      }
    }
    let rJ = /^0x[a-fA-F0-9]{40}$/;
    function rz(e, t = {}) {
      let { strict: i = !0 } = t;
      if (!rJ.test(e)) throw new rV({ address: e, cause: new rG() });
      if (i) {
        if (e.toLowerCase() === e) return;
        if (rF(e) !== e) throw new rV({ address: e, cause: new rY() });
      }
    }
    function rF(e) {
      if (rN.has(e)) return rN.get(e);
      rz(e, { strict: !1 });
      let t = e.substring(2).toLowerCase(),
        i = rD(
          (function (e, t = {}) {
            let { size: i } = t,
              r = i7.encode(e);
            if ("number" == typeof i) {
              var s;
              if (r.length > i)
                throw new ri({ givenSize: r.length, maxSize: i });
              return (
                (s = r),
                (function (e, t = {}) {
                  let { dir: i, size: r = 32 } = t;
                  if (0 === r) return e;
                  if (e.length > r)
                    throw new rr({
                      size: e.length,
                      targetSize: r,
                      type: "Bytes",
                    });
                  let s = new Uint8Array(r);
                  for (let t = 0; t < r; t++) {
                    let n = "right" === i;
                    s[n ? t : r - t - 1] = e[n ? t : e.length - t - 1];
                  }
                  return s;
                })(s, { dir: "right", size: i })
              );
            }
            return r;
          })(t),
          { as: "Bytes" }
        ),
        r = t.split("");
      for (let e = 0; e < 40; e += 2)
        i[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
          (15 & i[e >> 1]) >= 8 &&
            r[e + 1] &&
            (r[e + 1] = r[e + 1].toUpperCase());
      let s = `0x${r.join("")}`;
      return rN.set(e, s), s;
    }
    class rV extends iq {
      constructor({ address: e, cause: t }) {
        super(`Address "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidAddressError",
          });
      }
    }
    class rG extends iq {
      constructor() {
        super("Address is not a 20 byte (40 hexadecimal character) value."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidInputError",
          });
      }
    }
    class rY extends iq {
      constructor() {
        super("Address does not match its checksum counterpart."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidChecksumError",
          });
      }
    }
    let rZ = iK.secp256k1;
    function rQ(e = {}) {
      let { as: t = "Hex" } = e,
        i = r1({ as: t }),
        r = rX({ privateKey: i });
      return { privateKey: i, publicKey: r };
    }
    function rX(e) {
      let { privateKey: t } = e;
      return rU(iK.secp256k1.ProjectivePoint.fromPrivateKey(iV(t).slice(2)));
    }
    function r0(e) {
      let { as: t = "Hex", privateKey: i, publicKey: r } = e,
        s = iK.secp256k1.ProjectivePoint.fromHex(rW(r).slice(2))
          .multiply(iK.secp256k1.utils.normPrivateKeyToScalar(iV(i).slice(2)))
          .toRawBytes(!0);
      return "Hex" === t ? iG(s) : s;
    }
    function r1(e = {}) {
      let { as: t = "Hex" } = e,
        i = iK.secp256k1.utils.randomPrivateKey();
      return "Hex" === t ? iG(i) : i;
    }
    function r2(e) {
      return (function (e, t = {}) {
        let i = rD(`0x${rW(e).slice(4)}`).substring(26);
        return (function (e, t = {}) {
          let { checksum: i = !1 } = t;
          return (rz(e), i) ? rF(e) : e;
        })(`0x${i}`, t);
      })(r5(e));
    }
    function r5(e) {
      let { payload: t, signature: i } = e,
        { r, s, yParity: n } = i;
      return rU(
        new iK.secp256k1.Signature(BigInt(r), BigInt(s))
          .addRecoveryBit(n)
          .recoverPublicKey(iV(t).substring(2))
      );
    }
    function r3(e) {
      let { extraEntropy: t = !1, hash: i, payload: r, privateKey: s } = e,
        {
          r: n,
          s: a,
          recovery: o,
        } = iK.secp256k1.sign(i9(r), i9(s), {
          extraEntropy: "boolean" == typeof t ? t : iV(t).slice(2),
          lowS: !0,
          ...(i ? { prehash: !0 } : {}),
        });
      return { r: n, s: a, yParity: o };
    }
    function r8(e) {
      let { address: t, hash: i, payload: r, publicKey: s, signature: n } = e;
      if (t) {
        var a;
        return (
          (a = r2({ payload: r, signature: n })),
          rz(t, { strict: !1 }),
          rz(a, { strict: !1 }),
          t.toLowerCase() === a.toLowerCase()
        );
      }
      return iK.secp256k1.verify(
        n,
        i9(r),
        (function (e, t = {}) {
          return re(rW(e, t));
        })(s),
        ...(i ? [{ prehash: !0, lowS: !0 }] : [])
      );
    }
    e.s(
      [
        "createKeyPair",
        () => rQ,
        "getPublicKey",
        () => rX,
        "getSharedSecret",
        () => r0,
        "noble",
        0,
        rZ,
        "randomPrivateKey",
        () => r1,
        "recoverAddress",
        () => r2,
        "recoverPublicKey",
        () => r5,
        "sign",
        () => r3,
        "verify",
        () => r8,
      ],
      337909
    );
    var r6 = e.i(337909),
      r6 = r6,
      r4 = e.i(252177),
      r7 = e.i(830404),
      r9 = e.i(432266),
      se = e.i(987750),
      st = e.i(477563);
    e.i(894941);
    var si = e.i(444838),
      sr = e.i(230720),
      ss = e.i(855161),
      sn = e.i(935310),
      sa = e.i(516246),
      so = e.i(980263),
      sl = e.i(704192);
    let sc = "custom_context";
    var sh = Object.defineProperty,
      sd = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? sh(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class su {
      constructor(e) {
        sd(this, "nodeValue"),
          sd(this, "sizeInBytes"),
          sd(this, "next"),
          (this.nodeValue = e),
          (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
          (this.next = null);
      }
      get value() {
        return this.nodeValue;
      }
      get size() {
        return this.sizeInBytes;
      }
    }
    class sp {
      constructor(e) {
        sd(this, "lengthInNodes"),
          sd(this, "sizeInBytes"),
          sd(this, "head"),
          sd(this, "tail"),
          sd(this, "maxSizeInBytes"),
          (this.head = null),
          (this.tail = null),
          (this.lengthInNodes = 0),
          (this.maxSizeInBytes = e),
          (this.sizeInBytes = 0);
      }
      append(e) {
        let t = new su(e);
        if (t.size > this.maxSizeInBytes)
          throw Error(
            `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
          );
        for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
        this.head ? this.tail && (this.tail.next = t) : (this.head = t),
          (this.tail = t),
          this.lengthInNodes++,
          (this.sizeInBytes += t.size);
      }
      shift() {
        if (!this.head) return;
        let e = this.head;
        (this.head = this.head.next),
          this.head || (this.tail = null),
          this.lengthInNodes--,
          (this.sizeInBytes -= e.size);
      }
      toArray() {
        let e = [],
          t = this.head;
        for (; null !== t; ) e.push(t.value), (t = t.next);
        return e;
      }
      get length() {
        return this.lengthInNodes;
      }
      get size() {
        return this.sizeInBytes;
      }
      toOrderedArray() {
        return Array.from(this);
      }
      [Symbol.iterator]() {
        let e = this.head;
        return {
          next: () => {
            if (!e) return { done: !0, value: null };
            let t = e.value;
            return (e = e.next), { done: !1, value: t };
          },
        };
      }
    }
    var sf = Object.defineProperty,
      sg = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? sf(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class sy {
      constructor(e, t = 1024e3) {
        sg(this, "logs"),
          sg(this, "level"),
          sg(this, "levelValue"),
          sg(this, "MAX_LOG_SIZE_IN_BYTES"),
          (this.level = e ?? "error"),
          (this.levelValue = so.levels.values[this.level]),
          (this.MAX_LOG_SIZE_IN_BYTES = t),
          (this.logs = new sp(this.MAX_LOG_SIZE_IN_BYTES));
      }
      forwardToConsole(e, t) {
        t === so.levels.values.error
          ? console.error(e)
          : t === so.levels.values.warn
          ? console.warn(e)
          : t === so.levels.values.debug
          ? console.debug(e)
          : t === so.levels.values.trace
          ? console.trace(e)
          : console.log(e);
      }
      appendToLogs(e) {
        this.logs.append(
          (0, sl.safeJsonStringify)({
            timestamp: new Date().toISOString(),
            log: e,
          })
        );
        let t = "string" == typeof e ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
      }
      getLogs() {
        return this.logs;
      }
      clearLogs() {
        this.logs = new sp(this.MAX_LOG_SIZE_IN_BYTES);
      }
      getLogArray() {
        return Array.from(this.logs);
      }
      logsToBlob(e) {
        let t = this.getLogArray();
        return (
          t.push((0, sl.safeJsonStringify)({ extraMetadata: e })),
          new Blob(t, { type: "application/json" })
        );
      }
    }
    var sm = Object.defineProperty;
    class sw {
      constructor(e, t = 1024e3) {
        ((e, t, i) => {
          let r;
          return (r = "symbol" != typeof t ? t + "" : t) in e
            ? sm(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[r] = i);
        })(this, "baseChunkLogger"),
          (this.baseChunkLogger = new sy(e, t));
      }
      write(e) {
        this.baseChunkLogger.appendToLogs(e);
      }
      getLogs() {
        return this.baseChunkLogger.getLogs();
      }
      clearLogs() {
        this.baseChunkLogger.clearLogs();
      }
      getLogArray() {
        return this.baseChunkLogger.getLogArray();
      }
      logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
      }
      downloadLogsBlobInBrowser(e) {
        let t = URL.createObjectURL(this.logsToBlob(e)),
          i = document.createElement("a");
        (i.href = t),
          (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i),
          URL.revokeObjectURL(t);
      }
    }
    var sb = Object.defineProperty;
    class sv {
      constructor(e, t = 1024e3) {
        ((e, t, i) => {
          let r;
          return (r = "symbol" != typeof t ? t + "" : t) in e
            ? sb(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[r] = i);
        })(this, "baseChunkLogger"),
          (this.baseChunkLogger = new sy(e, t));
      }
      write(e) {
        this.baseChunkLogger.appendToLogs(e);
      }
      getLogs() {
        return this.baseChunkLogger.getLogs();
      }
      clearLogs() {
        this.baseChunkLogger.clearLogs();
      }
      getLogArray() {
        return this.baseChunkLogger.getLogArray();
      }
      logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
      }
    }
    var sE = Object.defineProperty,
      s_ = Object.defineProperties,
      sI = Object.getOwnPropertyDescriptors,
      sS = Object.getOwnPropertySymbols,
      sA = Object.prototype.hasOwnProperty,
      sP = Object.prototype.propertyIsEnumerable,
      sC = (e, t, i) =>
        t in e
          ? sE(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      sx = (e, t) => {
        for (var i in t || (t = {})) sA.call(t, i) && sC(e, i, t[i]);
        if (sS) for (var i of sS(t)) sP.call(t, i) && sC(e, i, t[i]);
        return e;
      };
    function sk(e, t = sc) {
      return e[t] || "";
    }
    function sT(e, t, i = sc) {
      let r = (function (e, t, i = sc) {
        let r = sk(e, i);
        return r.trim() ? `${r}/${t}` : t;
      })(e, t, i);
      return (function (e, t, i = sc) {
        return (e[i] = t), e;
      })(e.child({ context: r }), r, i);
    }
    function sO(e) {
      var t, i, r, s;
      let n, a, o, l;
      return "u" > typeof e.loggerOverride &&
        "string" != typeof e.loggerOverride
        ? { logger: e.loggerOverride, chunkLoggerController: null }
        : "u" > typeof window
        ? ((l = new sw(
            null == (r = (i = e).opts) ? void 0 : r.level,
            i.maxSizeInBytes
          )),
          {
            logger: (0, so.default)(
              ((a = sx({}, i.opts)),
              (o = {
                level: "trace",
                browser: s_(
                  sx({}, null == (s = i.opts) ? void 0 : s.browser),
                  sI({ write: (e) => l.write(e) })
                ),
              }),
              s_(a, sI(o)))
            ),
            chunkLoggerController: l,
          })
        : ((n = new sv(
            null == (t = e.opts) ? void 0 : t.level,
            e.maxSizeInBytes
          )),
          {
            logger: (0, so.default)(
              s_(sx({}, e.opts), sI({ level: "trace" })),
              n
            ),
            chunkLoggerController: n,
          });
    }
    function sR(e) {
      let [t, i] = e.split(":");
      return { namespace: t, reference: i };
    }
    function sN(e, t = []) {
      let i = [];
      return (
        Object.keys(e).forEach((r) => {
          if (t.length && !t.includes(r)) return;
          let s = e[r];
          i.push(...s.accounts);
        }),
        i
      );
    }
    function sj(e, t) {
      return e.includes(":") ? [e] : t.chains || [];
    }
    var sD = Object.defineProperty,
      sM = Object.defineProperties,
      sU = Object.getOwnPropertyDescriptors,
      sL = Object.getOwnPropertySymbols,
      sW = Object.prototype.hasOwnProperty,
      sB = Object.prototype.propertyIsEnumerable,
      sK = (e, t, i) =>
        t in e
          ? sD(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      sq = (e, t) => {
        for (var i in t || (t = {})) sW.call(t, i) && sK(e, i, t[i]);
        if (sL) for (var i of sL(t)) sB.call(t, i) && sK(e, i, t[i]);
        return e;
      },
      sH = (e, t, i) => sK(e, "symbol" != typeof t ? t + "" : t, i);
    let s$ = "react-native",
      sJ = "node",
      sz = "browser";
    function sF() {
      return (
        "u" > typeof iM.default &&
        "u" > typeof iM.default.versions &&
        "u" > typeof iM.default.versions.node
      );
    }
    function sV() {
      return (
        !(0, iW.getDocument)() &&
        !!(0, iW.getNavigator)() &&
        "ReactNative" === navigator.product
      );
    }
    function sG() {
      return !sF() && !!(0, iW.getNavigator)() && !!(0, iW.getDocument)();
    }
    function sY() {
      return sV() ? s$ : sF() ? sJ : sG() ? sz : "unknown";
    }
    function sZ() {
      var t;
      try {
        return sV() && "u" > typeof (null == e.g ? void 0 : e.g.Application)
          ? null == (t = e.g.Application)
            ? void 0
            : t.applicationId
          : void 0;
      } catch {
        return;
      }
    }
    function sQ() {
      return (
        (0, iB.getWindowMetadata)() || {
          name: "",
          description: "",
          url: "",
          icons: [""],
        }
      );
    }
    function sX(t, i, r) {
      var s;
      let n,
        a = (function () {
          if (
            sY() === s$ &&
            "u" > typeof (null == e.g ? void 0 : e.g.Platform)
          ) {
            let { OS: t, Version: i } = e.g.Platform;
            return [t, i].join("-");
          }
          let t = (0, iU.detect)();
          if (null === t) return "unknown";
          let i = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
          return "browser" === t.type
            ? [i, t.name, t.version].join("-")
            : [i, t.version].join("-");
        })(),
        o =
          (n = sY()) === sz
            ? [
                n,
                (null == (s = (0, iW.getLocation)()) ? void 0 : s.host) ||
                  "unknown",
              ].join(":")
            : n;
      return [[t, i].join("-"), ["js", r].join("-"), a, o].join("/");
    }
    function s0(e, t) {
      return e.filter((e) => t.includes(e)).length === e.length;
    }
    function s1(e) {
      return Object.fromEntries(e.entries());
    }
    function s2(e) {
      return new Map(Object.entries(e));
    }
    function s5(e = iL.FIVE_MINUTES, t) {
      let i,
        r,
        s,
        n,
        a = (0, iL.toMiliseconds)(e || iL.FIVE_MINUTES);
      return {
        resolve: (e) => {
          s && i && (clearTimeout(s), i(e), (n = Promise.resolve(e)));
        },
        reject: (e) => {
          s && r && (clearTimeout(s), r(e));
        },
        done: () =>
          new Promise((e, o) => {
            if (n) return e(n);
            (s = setTimeout(() => {
              let e = Error(t);
              (n = Promise.reject(e)), o(e);
            }, a)),
              (i = e),
              (r = o);
          }),
      };
    }
    function s3(e, t, i) {
      return new Promise(async (r, s) => {
        let n = setTimeout(() => s(Error(i)), t);
        try {
          let t = await e;
          r(t);
        } catch (e) {
          s(e);
        }
        clearTimeout(n);
      });
    }
    function s8(e, t) {
      if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
      if ("topic" === e.toLowerCase()) {
        if ("string" != typeof t)
          throw Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`;
      }
      if ("id" === e.toLowerCase()) {
        if ("number" != typeof t)
          throw Error('Value must be "number" for expirer target type: id');
        return `id:${t}`;
      }
      throw Error(`Unknown expirer target type: ${e}`);
    }
    function s6(e) {
      let [t, i] = e.split(":"),
        r = { id: void 0, topic: void 0 };
      if ("topic" === t && "string" == typeof i) r.topic = i;
      else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
      else
        throw Error(
          `Invalid target, expected id:number or topic:string, got ${t}:${i}`
        );
      return r;
    }
    function s4(e, t) {
      return (0, iL.fromMiliseconds)(
        (t || Date.now()) + (0, iL.toMiliseconds)(e)
      );
    }
    function s7(e) {
      return Date.now() >= (0, iL.toMiliseconds)(e);
    }
    function s9(e, t) {
      return `${e}${t ? `:${t}` : ""}`;
    }
    function ne(e = [], t = []) {
      return [...new Set([...e, ...t])];
    }
    async function nt({ id: t, topic: i, wcDeepLink: r }) {
      var s, n;
      try {
        if (!r) return;
        let a = "string" == typeof r ? JSON.parse(r) : r,
          o = a?.href;
        if ("string" != typeof o) return;
        let l = (function (e, t, i) {
            let r = `requestId=${t}&sessionTopic=${i}`;
            e.endsWith("/") && (e = e.slice(0, -1));
            let s = `${e}`;
            if (e.startsWith("https://t.me")) {
              let t = e.includes("?") ? "&startapp=" : "?startapp=";
              s = `${s}${t}${(function (e, t = !1) {
                let i = J.Buffer.from(e).toString("base64");
                return t ? i.replace(/[=]/g, "") : i;
              })(r, !0)}`;
            } else s = `${s}/wc?${r}`;
            return s;
          })(o, t, i),
          c = sY();
        if (c === sz) {
          let e;
          if (!(null != (s = (0, iW.getDocument)()) && s.hasFocus()))
            return void console.warn(
              "Document does not have focus, skipping deeplink."
            );
          (n = l),
            (e = "_self"),
            !(function () {
              try {
                return window.self !== window.top;
              } catch {
                return !1;
              }
            })()
              ? (("u" > typeof window &&
                  (window.TelegramWebviewProxy ||
                    window.Telegram ||
                    window.TelegramWebviewProxyProto)) ||
                  n.startsWith("https://") ||
                  n.startsWith("http://")) &&
                (e = "_blank")
              : (e = "_top"),
            window.open(n, e, "noreferrer noopener");
        } else
          c === s$ &&
            "u" > typeof (null == e.g ? void 0 : e.g.Linking) &&
            (await e.g.Linking.openURL(l));
      } catch (e) {
        console.error(e);
      }
    }
    async function ni(e, t) {
      let i = "";
      try {
        if (sG() && (i = localStorage.getItem(t))) return i;
        i = await e.getItem(t);
      } catch (e) {
        console.error(e);
      }
      return i;
    }
    function nr(e, t) {
      if (!e.includes(t)) return null;
      let i = e.split(/([&,?,=])/),
        r = i.indexOf(t);
      return i[r + 2];
    }
    function ns() {
      return "u" > typeof crypto && null != crypto && crypto.randomUUID
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
            let t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
    }
    function nn() {
      return "u" > typeof iM.default && "true" === iM.default.env.IS_VITEST;
    }
    function na(e) {
      return J.Buffer.from(e, "base64").toString("utf-8");
    }
    class no {
      constructor({ limit: e }) {
        sH(this, "limit"),
          sH(this, "set"),
          (this.limit = e),
          (this.set = new Set());
      }
      add(e) {
        if (!this.set.has(e)) {
          if (this.set.size >= this.limit) {
            let e = this.set.values().next().value;
            e && this.set.delete(e);
          }
          this.set.add(e);
        }
      }
      has(e) {
        return this.set.has(e);
      }
    }
    let nl = BigInt(0x100000000 - 1),
      nc = BigInt(32);
    function nh(e, t = !1) {
      return t
        ? { h: Number(e & nl), l: Number((e >> nc) & nl) }
        : { h: 0 | Number((e >> nc) & nl), l: 0 | Number(e & nl) };
    }
    function nd(e, t = !1) {
      let i = e.length,
        r = new Uint32Array(i),
        s = new Uint32Array(i);
      for (let n = 0; n < i; n++) {
        let { h: i, l: a } = nh(e[n], t);
        [r[n], s[n]] = [i, a];
      }
      return [r, s];
    }
    let nu = (e, t, i) => e >>> i,
      np = (e, t, i) => (e << (32 - i)) | (t >>> i),
      nf = (e, t, i) => (e >>> i) | (t << (32 - i)),
      ng = (e, t, i) => (e << (32 - i)) | (t >>> i),
      ny = (e, t, i) => (e << (64 - i)) | (t >>> (i - 32)),
      nm = (e, t, i) => (e >>> (i - 32)) | (t << (64 - i));
    function nw(e, t, i, r) {
      let s = (t >>> 0) + (r >>> 0);
      return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
    }
    let nb = (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0),
      nv = (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0,
      nE = (e, t, i, r) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0),
      n_ = (e, t, i, r, s) => (t + i + r + s + ((e / 0x100000000) | 0)) | 0,
      nI = (e, t, i, r, s) =>
        (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0),
      nS = (e, t, i, r, s, n) =>
        (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0,
      nA =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
    function nP(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function nC(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function nx(e, ...t) {
      if (!nP(e)) throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    function nk(e) {
      if ("function" != typeof e || "function" != typeof e.create)
        throw Error("Hash should be wrapped by utils.createHasher");
      nC(e.outputLen), nC(e.blockLen);
    }
    function nT(e, t = !0) {
      if (e.destroyed) throw Error("Hash instance has been destroyed");
      if (t && e.finished) throw Error("Hash#digest() has already been called");
    }
    function nO(e, t) {
      nx(e);
      let i = t.outputLen;
      if (e.length < i)
        throw Error(
          "digestInto() expects output buffer of length at least " + i
        );
    }
    function nR(e) {
      return new Uint32Array(
        e.buffer,
        e.byteOffset,
        Math.floor(e.byteLength / 4)
      );
    }
    function nN(...e) {
      for (let t = 0; t < e.length; t++) e[t].fill(0);
    }
    function nj(e) {
      return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function nD(e, t) {
      return (e << (32 - t)) | (e >>> t);
    }
    let nM = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
    function nU(e) {
      return (
        ((e << 24) & 0xff000000) |
        ((e << 8) & 0xff0000) |
        ((e >>> 8) & 65280) |
        ((e >>> 24) & 255)
      );
    }
    let nL = nM ? (e) => e : (e) => nU(e),
      nW = nM
        ? (e) => e
        : function (e) {
            for (let t = 0; t < e.length; t++) e[t] = nU(e[t]);
            return e;
          },
      nB =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      nK = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function nq(e) {
      if ((nx(e), nB)) return e.toHex();
      let t = "";
      for (let i = 0; i < e.length; i++) t += nK[e[i]];
      return t;
    }
    function nH(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function n$(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (nB) return Uint8Array.fromHex(e);
      let t = e.length,
        i = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let r = new Uint8Array(i);
      for (let t = 0, s = 0; t < i; t++, s += 2) {
        let i = nH(e.charCodeAt(s)),
          n = nH(e.charCodeAt(s + 1));
        if (void 0 === i || void 0 === n)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[s] + e[s + 1]) +
              '" at index ' +
              s
          );
        r[t] = 16 * i + n;
      }
      return r;
    }
    function nJ(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    function nz(e) {
      return "string" == typeof e && (e = nJ(e)), nx(e), e;
    }
    function nF(...e) {
      let t = 0;
      for (let i = 0; i < e.length; i++) {
        let r = e[i];
        nx(r), (t += r.length);
      }
      let i = new Uint8Array(t);
      for (let t = 0, r = 0; t < e.length; t++) {
        let s = e[t];
        i.set(s, r), (r += s.length);
      }
      return i;
    }
    class nV {}
    function nG(e) {
      let t = (t) => e().update(nz(t)).digest(),
        i = e();
      return (
        (t.outputLen = i.outputLen),
        (t.blockLen = i.blockLen),
        (t.create = () => e()),
        t
      );
    }
    function nY(e = 32) {
      if (nA && "function" == typeof nA.getRandomValues)
        return nA.getRandomValues(new Uint8Array(e));
      if (nA && "function" == typeof nA.randomBytes)
        return Uint8Array.from(nA.randomBytes(e));
      throw Error("crypto.getRandomValues must be defined");
    }
    let nZ = BigInt(0),
      nQ = BigInt(1),
      nX = BigInt(2),
      n0 = BigInt(7),
      n1 = BigInt(256),
      n2 = BigInt(113),
      n5 = [],
      n3 = [],
      n8 = [];
    for (let e = 0, t = nQ, i = 1, r = 0; e < 24; e++) {
      ([i, r] = [r, (2 * i + 3 * r) % 5]),
        n5.push(2 * (5 * r + i)),
        n3.push((((e + 1) * (e + 2)) / 2) % 64);
      let s = nZ;
      for (let e = 0; e < 7; e++)
        (t = ((t << nQ) ^ ((t >> n0) * n2)) % n1) & nX &&
          (s ^= nQ << ((nQ << BigInt(e)) - nQ));
      n8.push(s);
    }
    let n6 = nd(n8, !0),
      n4 = n6[0],
      n7 = n6[1],
      n9 = (e, t, i) =>
        i > 32
          ? (t << (i - 32)) | (e >>> (64 - i))
          : (e << i) | (t >>> (32 - i)),
      ae = (e, t, i) =>
        i > 32
          ? (e << (i - 32)) | (t >>> (64 - i))
          : (t << i) | (e >>> (32 - i));
    class at extends nV {
      constructor(e, t, i, r = !1, s = 24) {
        if (
          (super(),
          (this.pos = 0),
          (this.posOut = 0),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.enableXOF = !1),
          (this.blockLen = e),
          (this.suffix = t),
          (this.outputLen = i),
          (this.enableXOF = r),
          (this.rounds = s),
          nC(i),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)), (this.state32 = nR(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        nW(this.state32),
          (function (e, t = 24) {
            let i = new Uint32Array(10);
            for (let r = 24 - t; r < 24; r++) {
              for (let t = 0; t < 10; t++)
                i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let r = (t + 8) % 10,
                  s = (t + 2) % 10,
                  n = i[s],
                  a = i[s + 1],
                  o = n9(n, a, 1) ^ i[r],
                  l = ae(n, a, 1) ^ i[r + 1];
                for (let i = 0; i < 50; i += 10)
                  (e[t + i] ^= o), (e[t + i + 1] ^= l);
              }
              let t = e[2],
                s = e[3];
              for (let i = 0; i < 24; i++) {
                let r = n3[i],
                  n = n9(t, s, r),
                  a = ae(t, s, r),
                  o = n5[i];
                (t = e[o]), (s = e[o + 1]), (e[o] = n), (e[o + 1] = a);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let r = 0; r < 10; r++) i[r] = e[t + r];
                for (let r = 0; r < 10; r++)
                  e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
              }
              (e[0] ^= n4[r]), (e[1] ^= n7[r]);
            }
            nN(i);
          })(this.state32, this.rounds),
          nW(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        nT(this), nx((e = nz(e)));
        let { blockLen: t, state: i } = this,
          r = e.length;
        for (let s = 0; s < r; ) {
          let n = Math.min(t - this.pos, r - s);
          for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
          this.pos === t && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished) return;
        this.finished = !0;
        let { state: e, suffix: t, pos: i, blockLen: r } = this;
        (e[i] ^= t),
          (128 & t) != 0 && i === r - 1 && this.keccak(),
          (e[r - 1] ^= 128),
          this.keccak();
      }
      writeInto(e) {
        nT(this, !1), nx(e), this.finish();
        let t = this.state,
          { blockLen: i } = this;
        for (let r = 0, s = e.length; r < s; ) {
          this.posOut >= i && this.keccak();
          let n = Math.min(i - this.posOut, s - r);
          e.set(t.subarray(this.posOut, this.posOut + n), r),
            (this.posOut += n),
            (r += n);
        }
        return e;
      }
      xofInto(e) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(e);
      }
      xof(e) {
        return nC(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        if ((nO(e, this), this.finished))
          throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), nN(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: i,
          outputLen: r,
          rounds: s,
          enableXOF: n,
        } = this;
        return (
          e || (e = new at(t, i, r, n, s)),
          e.state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = s),
          (e.suffix = i),
          (e.outputLen = r),
          (e.enableXOF = n),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    let ai = nG(() => new at(136, 1, 32));
    class ar extends nV {
      constructor(e, t, i, r) {
        super(),
          (this.finished = !1),
          (this.length = 0),
          (this.pos = 0),
          (this.destroyed = !1),
          (this.blockLen = e),
          (this.outputLen = t),
          (this.padOffset = i),
          (this.isLE = r),
          (this.buffer = new Uint8Array(e)),
          (this.view = nj(this.buffer));
      }
      update(e) {
        nT(this), nx((e = nz(e)));
        let { view: t, buffer: i, blockLen: r } = this,
          s = e.length;
        for (let n = 0; n < s; ) {
          let a = Math.min(r - this.pos, s - n);
          if (a === r) {
            let t = nj(e);
            for (; r <= s - n; n += r) this.process(t, n);
            continue;
          }
          i.set(e.subarray(n, n + a), this.pos),
            (this.pos += a),
            (n += a),
            this.pos === r && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
      }
      digestInto(e) {
        nT(this), nO(e, this), (this.finished = !0);
        let { buffer: t, view: i, blockLen: r, isLE: s } = this,
          { pos: n } = this;
        (t[n++] = 128),
          nN(this.buffer.subarray(n)),
          this.padOffset > r - n && (this.process(i, 0), (n = 0));
        for (let e = n; e < r; e++) t[e] = 0;
        (function (e, t, i, r) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, i, r);
          let s = BigInt(32),
            n = BigInt(0xffffffff),
            a = Number((i >> s) & n),
            o = Number(i & n),
            l = 4 * !!r,
            c = 4 * !r;
          e.setUint32(t + l, a, r), e.setUint32(t + c, o, r);
        })(i, r - 8, BigInt(8 * this.length), s),
          this.process(i, 0);
        let a = nj(e),
          o = this.outputLen;
        if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let l = o / 4,
          c = this.get();
        if (l > c.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < l; e++) a.setUint32(4 * e, c[e], s);
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let i = e.slice(0, t);
        return this.destroy(), i;
      }
      _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let {
          blockLen: t,
          buffer: i,
          length: r,
          finished: s,
          destroyed: n,
          pos: a,
        } = this;
        return (
          (e.destroyed = n),
          (e.finished = s),
          (e.length = r),
          (e.pos = a),
          r % t && e.buffer.set(i),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    let as = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]),
      an = Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17,
        0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511,
        0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
      ]),
      aa = Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b,
        0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f,
        0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
      ]),
      ao = Uint32Array.from([
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
      al = new Uint32Array(64);
    class ac extends ar {
      constructor(e = 32) {
        super(64, e, 8, !1),
          (this.A = 0 | as[0]),
          (this.B = 0 | as[1]),
          (this.C = 0 | as[2]),
          (this.D = 0 | as[3]),
          (this.E = 0 | as[4]),
          (this.F = 0 | as[5]),
          (this.G = 0 | as[6]),
          (this.H = 0 | as[7]);
      }
      get() {
        let { A: e, B: t, C: i, D: r, E: s, F: n, G: a, H: o } = this;
        return [e, t, i, r, s, n, a, o];
      }
      set(e, t, i, r, s, n, a, o) {
        (this.A = 0 | e),
          (this.B = 0 | t),
          (this.C = 0 | i),
          (this.D = 0 | r),
          (this.E = 0 | s),
          (this.F = 0 | n),
          (this.G = 0 | a),
          (this.H = 0 | o);
      }
      process(e, t) {
        for (let i = 0; i < 16; i++, t += 4) al[i] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
          let t = al[e - 15],
            i = al[e - 2],
            r = nD(t, 7) ^ nD(t, 18) ^ (t >>> 3),
            s = nD(i, 17) ^ nD(i, 19) ^ (i >>> 10);
          al[e] = (s + al[e - 7] + r + al[e - 16]) | 0;
        }
        let { A: i, B: r, C: s, D: n, E: a, F: o, G: l, H: c } = this;
        for (let e = 0; e < 64; e++) {
          var h, d, u, p;
          let t =
              (c +
                (nD(a, 6) ^ nD(a, 11) ^ nD(a, 25)) +
                (((h = a) & o) ^ (~h & l)) +
                ao[e] +
                al[e]) |
              0,
            f =
              ((nD(i, 2) ^ nD(i, 13) ^ nD(i, 22)) +
                (((d = i) & (u = r)) ^ (d & (p = s)) ^ (u & p))) |
              0;
          (c = l),
            (l = o),
            (o = a),
            (a = (n + t) | 0),
            (n = s),
            (s = r),
            (r = i),
            (i = (t + f) | 0);
        }
        (i = (i + this.A) | 0),
          (r = (r + this.B) | 0),
          (s = (s + this.C) | 0),
          (n = (n + this.D) | 0),
          (a = (a + this.E) | 0),
          (o = (o + this.F) | 0),
          (l = (l + this.G) | 0),
          (c = (c + this.H) | 0),
          this.set(i, r, s, n, a, o, l, c);
      }
      roundClean() {
        nN(al);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), nN(this.buffer);
      }
    }
    let ah = nd(
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
      ad = ah[0],
      au = ah[1],
      ap = new Uint32Array(80),
      af = new Uint32Array(80);
    class ag extends ar {
      constructor(e = 64) {
        super(128, e, 16, !1),
          (this.Ah = 0 | aa[0]),
          (this.Al = 0 | aa[1]),
          (this.Bh = 0 | aa[2]),
          (this.Bl = 0 | aa[3]),
          (this.Ch = 0 | aa[4]),
          (this.Cl = 0 | aa[5]),
          (this.Dh = 0 | aa[6]),
          (this.Dl = 0 | aa[7]),
          (this.Eh = 0 | aa[8]),
          (this.El = 0 | aa[9]),
          (this.Fh = 0 | aa[10]),
          (this.Fl = 0 | aa[11]),
          (this.Gh = 0 | aa[12]),
          (this.Gl = 0 | aa[13]),
          (this.Hh = 0 | aa[14]),
          (this.Hl = 0 | aa[15]);
      }
      get() {
        let {
          Ah: e,
          Al: t,
          Bh: i,
          Bl: r,
          Ch: s,
          Cl: n,
          Dh: a,
          Dl: o,
          Eh: l,
          El: c,
          Fh: h,
          Fl: d,
          Gh: u,
          Gl: p,
          Hh: f,
          Hl: g,
        } = this;
        return [e, t, i, r, s, n, a, o, l, c, h, d, u, p, f, g];
      }
      set(e, t, i, r, s, n, a, o, l, c, h, d, u, p, f, g) {
        (this.Ah = 0 | e),
          (this.Al = 0 | t),
          (this.Bh = 0 | i),
          (this.Bl = 0 | r),
          (this.Ch = 0 | s),
          (this.Cl = 0 | n),
          (this.Dh = 0 | a),
          (this.Dl = 0 | o),
          (this.Eh = 0 | l),
          (this.El = 0 | c),
          (this.Fh = 0 | h),
          (this.Fl = 0 | d),
          (this.Gh = 0 | u),
          (this.Gl = 0 | p),
          (this.Hh = 0 | f),
          (this.Hl = 0 | g);
      }
      process(e, t) {
        for (let i = 0; i < 16; i++, t += 4)
          (ap[i] = e.getUint32(t)), (af[i] = e.getUint32((t += 4)));
        for (let e = 16; e < 80; e++) {
          let t = 0 | ap[e - 15],
            i = 0 | af[e - 15],
            r = nf(t, i, 1) ^ nf(t, i, 8) ^ nu(t, i, 7),
            s = ng(t, i, 1) ^ ng(t, i, 8) ^ np(t, i, 7),
            n = 0 | ap[e - 2],
            a = 0 | af[e - 2],
            o = nf(n, a, 19) ^ ny(n, a, 61) ^ nu(n, a, 6),
            l = nE(
              s,
              ng(n, a, 19) ^ nm(n, a, 61) ^ np(n, a, 6),
              af[e - 7],
              af[e - 16]
            ),
            c = n_(l, r, o, ap[e - 7], ap[e - 16]);
          (ap[e] = 0 | c), (af[e] = 0 | l);
        }
        let {
          Ah: i,
          Al: r,
          Bh: s,
          Bl: n,
          Ch: a,
          Cl: o,
          Dh: l,
          Dl: c,
          Eh: h,
          El: d,
          Fh: u,
          Fl: p,
          Gh: f,
          Gl: g,
          Hh: y,
          Hl: m,
        } = this;
        for (let e = 0; e < 80; e++) {
          let t = nf(h, d, 14) ^ nf(h, d, 18) ^ ny(h, d, 41),
            w = ng(h, d, 14) ^ ng(h, d, 18) ^ nm(h, d, 41),
            b = (h & u) ^ (~h & f),
            v = nI(m, w, (d & p) ^ (~d & g), au[e], af[e]),
            E = nS(v, y, t, b, ad[e], ap[e]),
            _ = 0 | v,
            I = nf(i, r, 28) ^ ny(i, r, 34) ^ ny(i, r, 39),
            S = ng(i, r, 28) ^ nm(i, r, 34) ^ nm(i, r, 39),
            A = (i & s) ^ (i & a) ^ (s & a),
            P = (r & n) ^ (r & o) ^ (n & o);
          (y = 0 | f),
            (m = 0 | g),
            (f = 0 | u),
            (g = 0 | p),
            (u = 0 | h),
            (p = 0 | d),
            ({ h: h, l: d } = nw(0 | l, 0 | c, 0 | E, 0 | _)),
            (l = 0 | a),
            (c = 0 | o),
            (a = 0 | s),
            (o = 0 | n),
            (s = 0 | i),
            (n = 0 | r);
          let C = nb(_, S, P);
          (i = nv(C, E, I, A)), (r = 0 | C);
        }
        ({ h: i, l: r } = nw(0 | this.Ah, 0 | this.Al, 0 | i, 0 | r)),
          ({ h: s, l: n } = nw(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
          ({ h: a, l: o } = nw(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)),
          ({ h: l, l: c } = nw(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | c)),
          ({ h: h, l: d } = nw(0 | this.Eh, 0 | this.El, 0 | h, 0 | d)),
          ({ h: u, l: p } = nw(0 | this.Fh, 0 | this.Fl, 0 | u, 0 | p)),
          ({ h: f, l: g } = nw(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | g)),
          ({ h: y, l: m } = nw(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | m)),
          this.set(i, r, s, n, a, o, l, c, h, d, u, p, f, g, y, m);
      }
      roundClean() {
        nN(ap, af);
      }
      destroy() {
        nN(this.buffer),
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    class ay extends ag {
      constructor() {
        super(48),
          (this.Ah = 0 | an[0]),
          (this.Al = 0 | an[1]),
          (this.Bh = 0 | an[2]),
          (this.Bl = 0 | an[3]),
          (this.Ch = 0 | an[4]),
          (this.Cl = 0 | an[5]),
          (this.Dh = 0 | an[6]),
          (this.Dl = 0 | an[7]),
          (this.Eh = 0 | an[8]),
          (this.El = 0 | an[9]),
          (this.Fh = 0 | an[10]),
          (this.Fl = 0 | an[11]),
          (this.Gh = 0 | an[12]),
          (this.Gl = 0 | an[13]),
          (this.Hh = 0 | an[14]),
          (this.Hl = 0 | an[15]);
      }
    }
    let am = Uint32Array.from([
      0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b, 0x6f53b151,
      0x96387719, 0x5940eabd, 0x96283ee2, 0xa88effe3, 0xbe5e1e25, 0x53863992,
      0x2b0199fc, 0x2c85b8aa, 0xeb72ddc, 0x81c52ca2,
    ]);
    class aw extends ag {
      constructor() {
        super(32),
          (this.Ah = 0 | am[0]),
          (this.Al = 0 | am[1]),
          (this.Bh = 0 | am[2]),
          (this.Bl = 0 | am[3]),
          (this.Ch = 0 | am[4]),
          (this.Cl = 0 | am[5]),
          (this.Dh = 0 | am[6]),
          (this.Dl = 0 | am[7]),
          (this.Eh = 0 | am[8]),
          (this.El = 0 | am[9]),
          (this.Fh = 0 | am[10]),
          (this.Fl = 0 | am[11]),
          (this.Gh = 0 | am[12]),
          (this.Gl = 0 | am[13]),
          (this.Hh = 0 | am[14]),
          (this.Hl = 0 | am[15]);
      }
    }
    let ab = nG(() => new ac()),
      av = nG(() => new ag()),
      aE = nG(() => new ay()),
      a_ = nG(() => new aw()),
      aI = Uint8Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13,
        12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1,
        11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1,
        9,
      ]),
      aS = Uint32Array.from([
        0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372,
        0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c,
        0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19,
      ]),
      aA = new Uint32Array(32);
    function aP(e, t, i, r, s, n) {
      let a = s[n],
        o = s[n + 1],
        l = aA[2 * e],
        c = aA[2 * e + 1],
        h = aA[2 * t],
        d = aA[2 * t + 1],
        u = aA[2 * i],
        p = aA[2 * i + 1],
        f = aA[2 * r],
        g = aA[2 * r + 1],
        y = nb(l, h, a);
      (c = nv(y, c, d, o)),
        (l = 0 | y),
        ({ Dh: g, Dl: f } = { Dh: g ^ c, Dl: f ^ l }),
        ({ Dh: g, Dl: f } = { Dh: f, Dl: g }),
        ({ h: p, l: u } = nw(p, u, g, f)),
        ({ Bh: d, Bl: h } = { Bh: d ^ p, Bl: h ^ u }),
        ({ Bh: d, Bl: h } = { Bh: nf(d, h, 24), Bl: ng(d, h, 24) }),
        (aA[2 * e] = l),
        (aA[2 * e + 1] = c),
        (aA[2 * t] = h),
        (aA[2 * t + 1] = d),
        (aA[2 * i] = u),
        (aA[2 * i + 1] = p),
        (aA[2 * r] = f),
        (aA[2 * r + 1] = g);
    }
    function aC(e, t, i, r, s, n) {
      let a = s[n],
        o = s[n + 1],
        l = aA[2 * e],
        c = aA[2 * e + 1],
        h = aA[2 * t],
        d = aA[2 * t + 1],
        u = aA[2 * i],
        p = aA[2 * i + 1],
        f = aA[2 * r],
        g = aA[2 * r + 1],
        y = nb(l, h, a);
      (c = nv(y, c, d, o)),
        (l = 0 | y),
        ({ Dh: g, Dl: f } = { Dh: g ^ c, Dl: f ^ l }),
        ({ Dh: g, Dl: f } = { Dh: nf(g, f, 16), Dl: ng(g, f, 16) }),
        ({ h: p, l: u } = nw(p, u, g, f)),
        ({ Bh: d, Bl: h } = { Bh: d ^ p, Bl: h ^ u }),
        ({ Bh: d, Bl: h } = { Bh: ny(d, h, 63), Bl: nm(d, h, 63) }),
        (aA[2 * e] = l),
        (aA[2 * e + 1] = c),
        (aA[2 * t] = h),
        (aA[2 * t + 1] = d),
        (aA[2 * i] = u),
        (aA[2 * i + 1] = p),
        (aA[2 * r] = f),
        (aA[2 * r + 1] = g);
    }
    class ax extends nV {
      constructor(e, t) {
        super(),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.length = 0),
          (this.pos = 0),
          nC(e),
          nC(t),
          (this.blockLen = e),
          (this.outputLen = t),
          (this.buffer = new Uint8Array(e)),
          (this.buffer32 = nR(this.buffer));
      }
      update(e) {
        nT(this), nx((e = nz(e)));
        let { blockLen: t, buffer: i, buffer32: r } = this,
          s = e.length,
          n = e.byteOffset,
          a = e.buffer;
        for (let o = 0; o < s; ) {
          this.pos === t &&
            (nW(r), this.compress(r, 0, !1), nW(r), (this.pos = 0));
          let l = Math.min(t - this.pos, s - o),
            c = n + o;
          if (l === t && !(c % 4) && o + l < s) {
            let e = new Uint32Array(a, c, Math.floor((s - o) / 4));
            nW(e);
            for (let i = 0; o + t < s; i += r.length, o += t)
              (this.length += t), this.compress(e, i, !1);
            nW(e);
            continue;
          }
          i.set(e.subarray(o, o + l), this.pos),
            (this.pos += l),
            (this.length += l),
            (o += l);
        }
        return this;
      }
      digestInto(e) {
        nT(this), nO(e, this);
        let { pos: t, buffer32: i } = this;
        (this.finished = !0),
          nN(this.buffer.subarray(t)),
          nW(i),
          this.compress(i, 0, !0),
          nW(i);
        let r = nR(e);
        this.get().forEach((e, t) => (r[t] = nL(e)));
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let i = e.slice(0, t);
        return this.destroy(), i;
      }
      _cloneInto(e) {
        let {
          buffer: t,
          length: i,
          finished: r,
          destroyed: s,
          outputLen: n,
          pos: a,
        } = this;
        return (
          e || (e = new this.constructor({ dkLen: n })),
          e.set(...this.get()),
          e.buffer.set(t),
          (e.destroyed = s),
          (e.finished = r),
          (e.length = i),
          (e.pos = a),
          (e.outputLen = n),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    class ak extends ax {
      constructor(e = {}) {
        const t = void 0 === e.dkLen ? 64 : e.dkLen;
        super(128, t),
          (this.v0l = 0 | aS[0]),
          (this.v0h = 0 | aS[1]),
          (this.v1l = 0 | aS[2]),
          (this.v1h = 0 | aS[3]),
          (this.v2l = 0 | aS[4]),
          (this.v2h = 0 | aS[5]),
          (this.v3l = 0 | aS[6]),
          (this.v3h = 0 | aS[7]),
          (this.v4l = 0 | aS[8]),
          (this.v4h = 0 | aS[9]),
          (this.v5l = 0 | aS[10]),
          (this.v5h = 0 | aS[11]),
          (this.v6l = 0 | aS[12]),
          (this.v6h = 0 | aS[13]),
          (this.v7l = 0 | aS[14]),
          (this.v7h = 0 | aS[15]),
          (function (e, t = {}, i, r, s) {
            if ((nC(64), e < 0 || e > 64))
              throw Error("outputLen bigger than keyLen");
            let { key: n, salt: a, personalization: o } = t;
            if (void 0 !== n && (n.length < 1 || n.length > 64))
              throw Error("key length must be undefined or 1..64");
            if (void 0 !== a && 16 !== a.length)
              throw Error("salt must be undefined or 16");
            if (void 0 !== o && 16 !== o.length)
              throw Error("personalization must be undefined or 16");
          })(t, e, 0, 0, 0);
        let { key: i, personalization: r, salt: s } = e,
          n = 0;
        if (
          (void 0 !== i && (n = (i = nz(i)).length),
          (this.v0l ^= this.outputLen | (n << 8) | 0x1010000),
          void 0 !== s)
        ) {
          const e = nR((s = nz(s)));
          (this.v4l ^= nL(e[0])),
            (this.v4h ^= nL(e[1])),
            (this.v5l ^= nL(e[2])),
            (this.v5h ^= nL(e[3]));
        }
        if (void 0 !== r) {
          const e = nR((r = nz(r)));
          (this.v6l ^= nL(e[0])),
            (this.v6h ^= nL(e[1])),
            (this.v7l ^= nL(e[2])),
            (this.v7h ^= nL(e[3]));
        }
        if (void 0 !== i) {
          const e = new Uint8Array(this.blockLen);
          e.set(i), this.update(e);
        }
      }
      get() {
        let {
          v0l: e,
          v0h: t,
          v1l: i,
          v1h: r,
          v2l: s,
          v2h: n,
          v3l: a,
          v3h: o,
          v4l: l,
          v4h: c,
          v5l: h,
          v5h: d,
          v6l: u,
          v6h: p,
          v7l: f,
          v7h: g,
        } = this;
        return [e, t, i, r, s, n, a, o, l, c, h, d, u, p, f, g];
      }
      set(e, t, i, r, s, n, a, o, l, c, h, d, u, p, f, g) {
        (this.v0l = 0 | e),
          (this.v0h = 0 | t),
          (this.v1l = 0 | i),
          (this.v1h = 0 | r),
          (this.v2l = 0 | s),
          (this.v2h = 0 | n),
          (this.v3l = 0 | a),
          (this.v3h = 0 | o),
          (this.v4l = 0 | l),
          (this.v4h = 0 | c),
          (this.v5l = 0 | h),
          (this.v5h = 0 | d),
          (this.v6l = 0 | u),
          (this.v6h = 0 | p),
          (this.v7l = 0 | f),
          (this.v7h = 0 | g);
      }
      compress(e, t, i) {
        this.get().forEach((e, t) => (aA[t] = e)), aA.set(aS, 16);
        let { h: r, l: s } = nh(BigInt(this.length));
        (aA[24] = aS[8] ^ s),
          (aA[25] = aS[9] ^ r),
          i && ((aA[28] = ~aA[28]), (aA[29] = ~aA[29]));
        let n = 0;
        for (let i = 0; i < 12; i++)
          aP(0, 4, 8, 12, e, t + 2 * aI[n++]),
            aC(0, 4, 8, 12, e, t + 2 * aI[n++]),
            aP(1, 5, 9, 13, e, t + 2 * aI[n++]),
            aC(1, 5, 9, 13, e, t + 2 * aI[n++]),
            aP(2, 6, 10, 14, e, t + 2 * aI[n++]),
            aC(2, 6, 10, 14, e, t + 2 * aI[n++]),
            aP(3, 7, 11, 15, e, t + 2 * aI[n++]),
            aC(3, 7, 11, 15, e, t + 2 * aI[n++]),
            aP(0, 5, 10, 15, e, t + 2 * aI[n++]),
            aC(0, 5, 10, 15, e, t + 2 * aI[n++]),
            aP(1, 6, 11, 12, e, t + 2 * aI[n++]),
            aC(1, 6, 11, 12, e, t + 2 * aI[n++]),
            aP(2, 7, 8, 13, e, t + 2 * aI[n++]),
            aC(2, 7, 8, 13, e, t + 2 * aI[n++]),
            aP(3, 4, 9, 14, e, t + 2 * aI[n++]),
            aC(3, 4, 9, 14, e, t + 2 * aI[n++]);
        (this.v0l ^= aA[0] ^ aA[16]),
          (this.v0h ^= aA[1] ^ aA[17]),
          (this.v1l ^= aA[2] ^ aA[18]),
          (this.v1h ^= aA[3] ^ aA[19]),
          (this.v2l ^= aA[4] ^ aA[20]),
          (this.v2h ^= aA[5] ^ aA[21]),
          (this.v3l ^= aA[6] ^ aA[22]),
          (this.v3h ^= aA[7] ^ aA[23]),
          (this.v4l ^= aA[8] ^ aA[24]),
          (this.v4h ^= aA[9] ^ aA[25]),
          (this.v5l ^= aA[10] ^ aA[26]),
          (this.v5h ^= aA[11] ^ aA[27]),
          (this.v6l ^= aA[12] ^ aA[28]),
          (this.v6h ^= aA[13] ^ aA[29]),
          (this.v7l ^= aA[14] ^ aA[30]),
          (this.v7h ^= aA[15] ^ aA[31]),
          nN(aA);
      }
      destroy() {
        (this.destroyed = !0),
          nN(this.buffer32),
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    let aT =
      ((l = (e) => new ak(e)),
      ((r = (e, t) => l(t).update(nz(e)).digest()).outputLen = (s = l(
        {}
      )).outputLen),
      (r.blockLen = s.blockLen),
      (r.create = (e) => l(e)),
      r);
    function aO(e) {
      let t = `Ethereum Signed Message:
${e.length}`,
        i = new TextEncoder().encode(t + e);
      return "0x" + J.Buffer.from(ai(i)).toString("hex");
    }
    async function aR(e, t, i, r, s, n) {
      switch (i.t) {
        case "eip191":
          var a, o, l;
          let c;
          return await ((a = e),
          (o = t),
          (l = i.s),
          (c = rO.fromHex(l)),
          r6.recoverAddress({ payload: aO(o), signature: c }).toLowerCase() ===
            a.toLowerCase());
        case "eip1271":
          return await aN(e, t, i.s, r, s, n);
        default:
          throw Error(
            `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`
          );
      }
    }
    async function aN(e, t, i, r, s, n) {
      let a = sR(r);
      if (!a.namespace || !a.reference)
        throw Error(
          `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`
        );
      try {
        let a = "0x1626ba7e",
          o = i.substring(2),
          l = (o.length / 2).toString(16).padStart(64, "0"),
          c = (t.startsWith("0x") ? t : aO(t)).substring(2),
          h =
            a +
            c +
            "0000000000000000000000000000000000000000000000000000000000000040" +
            l +
            o,
          d = await fetch(
            `${
              n || "https://rpc.walletconnect.org/v1"
            }/?chainId=${r}&projectId=${s}`,
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({
                id: Date.now() + Math.floor(1e3 * Math.random()),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [{ to: e, data: h }, "latest"],
              }),
            }
          ),
          { result: u } = await d.json();
        return !!u && u.slice(0, a.length).toLowerCase() === a.toLowerCase();
      } catch (e) {
        return console.error("isValidEip1271Signature: ", e), !1;
      }
    }
    function aj(e) {
      let t = new Uint8Array(
        ab(
          (function (e) {
            if (e instanceof Uint8Array) return e;
            if (Array.isArray(e)) return new Uint8Array(e);
            if ("object" == typeof e && null != e && e.data)
              return new Uint8Array(Object.values(e.data));
            if ("object" == typeof e && e)
              return new Uint8Array(Object.values(e));
            throw Error(
              "getNearUint8ArrayFromBytes: Unexpected result type from bytes array"
            );
          })(e)
        )
      );
      return r4.default.encode(t);
    }
    function aD(e) {
      let t = J.Buffer.from(e, "base64"),
        i = (0, r7.decode)(t).txn;
      if (!i) throw Error("Invalid signed transaction: missing 'txn' field");
      let r = (0, r9.encode)(i),
        s = J.Buffer.from("TX"),
        n = a_(J.Buffer.concat([s, J.Buffer.from(r)]));
      return se.base32.encode(n).replace(/=+$/, "");
    }
    function aM(e) {
      let t = [],
        i = BigInt(e);
      for (; i >= BigInt(128); )
        t.push(Number((i & BigInt(127)) | BigInt(128))), (i >>= BigInt(7));
      return t.push(Number(i)), J.Buffer.from(t);
    }
    var aU = Object.defineProperty,
      aL = Object.defineProperties,
      aW = Object.getOwnPropertyDescriptors,
      aB = Object.getOwnPropertySymbols,
      aK = Object.prototype.hasOwnProperty,
      aq = Object.prototype.propertyIsEnumerable,
      aH = (e, t, i) =>
        t in e
          ? aU(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
    let a$ = (e) => e?.split(":"),
      aJ = (e) => {
        let t = e && a$(e);
        if (t) return t[2] + ":" + t[3];
      },
      az = (e) => {
        let t = e && a$(e);
        if (t) return t.pop();
      };
    async function aF(e) {
      let { cacao: t, projectId: i } = e,
        { s: r, p: s } = t,
        n = aV(s, s.iss),
        a = az(s.iss);
      return await aR(a, n, r, aJ(s.iss), i);
    }
    let aV = (e, t) => {
      let i = `${e.domain} wants you to sign in with your Ethereum account:`,
        r = az(t);
      if (!e.aud && !e.uri)
        throw Error(
          "Either `aud` or `uri` is required to construct the message"
        );
      let s = e.statement || void 0,
        n = `URI: ${e.aud || e.uri}`,
        a = `Version: ${e.version}`,
        o = `Chain ID: ${((e) => {
          let t = e && a$(e);
          if (t) return e.includes("did:pkh:") ? t[3] : t[1];
        })(t)}`,
        l = `Nonce: ${e.nonce}`,
        c = `Issued At: ${e.iat}`,
        h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
        d = e.nbf ? `Not Before: ${e.nbf}` : void 0,
        u = e.requestId ? `Request ID: ${e.requestId}` : void 0,
        p = e.resources
          ? `Resources:${e.resources
              .map(
                (e) => `
- ${e}`
              )
              .join("")}`
          : void 0,
        f = a0(e.resources);
      return (
        f &&
          (s = (function (e = "", t) {
            aG(t);
            let i =
              "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (e.includes(i)) return e;
            let r = [],
              s = 0;
            Object.keys(t.att).forEach((e) => {
              let i = Object.keys(t.att[e]).map((e) => ({
                ability: e.split("/")[0],
                action: e.split("/")[1],
              }));
              i.sort((e, t) => e.action.localeCompare(t.action));
              let n = {};
              i.forEach((e) => {
                n[e.ability] || (n[e.ability] = []),
                  n[e.ability].push(e.action);
              });
              let a = Object.keys(n).map(
                (t) => (
                  s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`
                )
              );
              r.push(a.join(", ").replace(".,", "."));
            });
            let n = r.join(" "),
              a = `${i}${n}`;
            return `${e ? e + " " : ""}${a}`;
          })(s, aZ(f))),
        [i, r, "", s, "", n, a, o, l, c, h, d, u, p].filter((e) => null != e)
          .join(`
`)
      );
    };
    function aG(e) {
      if (!e) throw Error("No recap provided, value is undefined");
      if (!e.att) throw Error("No `att` property found");
      let t = Object.keys(e.att);
      if (!(null != t && t.length))
        throw Error("No resources found in `att` property");
      t.forEach((t) => {
        let i = e.att[t];
        if (Array.isArray(i) || "object" != typeof i)
          throw Error(`Resource must be an object: ${t}`);
        if (!Object.keys(i).length)
          throw Error(`Resource object is empty: ${t}`);
        Object.keys(i).forEach((e) => {
          let t = i[e];
          if (!Array.isArray(t))
            throw Error(
              `Ability limits ${e} must be an array of objects, found: ${t}`
            );
          if (!t.length)
            throw Error(
              `Value of ${e} is empty array, must be an array with objects`
            );
          t.forEach((t) => {
            if ("object" != typeof t)
              throw Error(
                `Ability limits (${e}) must be an array of objects, found: ${t}`
              );
          });
        });
      });
    }
    function aY(e) {
      return (
        aG(e),
        `urn:recap:${J.Buffer.from(JSON.stringify(e))
          .toString("base64")
          .replace(/=/g, "")}`
      );
    }
    function aZ(e) {
      var t;
      let i =
        ((t = e.replace("urn:recap:", "")),
        JSON.parse(J.Buffer.from(t, "base64").toString("utf-8")));
      return aG(i), i;
    }
    function aQ(e) {
      var t;
      let i = aZ(e);
      aG(i);
      let r = null == (t = i.att) ? void 0 : t.eip155;
      return r ? Object.keys(r).map((e) => e.split("/")[1]) : [];
    }
    function aX(e) {
      let t = aZ(e);
      aG(t);
      let i = [];
      return (
        Object.values(t.att).forEach((e) => {
          Object.values(e).forEach((e) => {
            var t;
            null != (t = e?.[0]) && t.chains && i.push(e[0].chains);
          });
        }),
        [...new Set(i.flat())]
      );
    }
    function a0(e) {
      if (!e) return;
      let t = e?.[e.length - 1];
      return t && t.includes("urn:recap:") ? t : void 0;
    }
    function a1(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function a2(e) {
      if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
    }
    function a5(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function a3(e, ...t) {
      if (!a1(e)) throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    function a8(e, t = !0) {
      if (e.destroyed) throw Error("Hash instance has been destroyed");
      if (t && e.finished) throw Error("Hash#digest() has already been called");
    }
    function a6(e) {
      return new Uint32Array(
        e.buffer,
        e.byteOffset,
        Math.floor(e.byteLength / 4)
      );
    }
    function a4(...e) {
      for (let t = 0; t < e.length; t++) e[t].fill(0);
    }
    let a7 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
    function a9(e) {
      if ("string" == typeof e)
        e = (function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        })(e);
      else if (a1(e)) e = oi(e);
      else throw Error("Uint8Array expected, got " + typeof e);
      return e;
    }
    function oe(e, t, i = !0) {
      if (void 0 === t) return new Uint8Array(e);
      if (t.length !== e)
        throw Error(
          "invalid output length, expected " + e + ", got: " + t.length
        );
      if (i && t.byteOffset % 4 != 0)
        throw Error("invalid output, must be aligned");
      return t;
    }
    function ot(e, t, i, r) {
      if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, i, r);
      let s = BigInt(32),
        n = BigInt(0xffffffff),
        a = Number((i >> s) & n),
        o = Number(i & n),
        l = 4 * !!r,
        c = 4 * !r;
      e.setUint32(t + l, a, r), e.setUint32(t + c, o, r);
    }
    function oi(e) {
      return Uint8Array.from(e);
    }
    let or = (e) => Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
      os = or("expand 16-byte k"),
      on = or("expand 32-byte k"),
      oa = a6(os),
      oo = a6(on);
    function ol(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function oc(e) {
      return e.byteOffset % 4 == 0;
    }
    let oh = 0x100000000 - 1,
      od = new Uint32Array(),
      ou = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
    class op {
      constructor(e) {
        (this.blockLen = 16),
          (this.outputLen = 16),
          (this.buffer = new Uint8Array(16)),
          (this.r = new Uint16Array(10)),
          (this.h = new Uint16Array(10)),
          (this.pad = new Uint16Array(8)),
          (this.pos = 0),
          (this.finished = !1),
          a3((e = a9(e)), 32);
        const t = ou(e, 0),
          i = ou(e, 2),
          r = ou(e, 4),
          s = ou(e, 6),
          n = ou(e, 8),
          a = ou(e, 10),
          o = ou(e, 12),
          l = ou(e, 14);
        (this.r[0] = 8191 & t),
          (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
          (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
          (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
          (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
          (this.r[5] = (n >>> 1) & 8190),
          (this.r[6] = ((n >>> 14) | (a << 2)) & 8191),
          (this.r[7] = ((a >>> 11) | (o << 5)) & 8065),
          (this.r[8] = ((o >>> 8) | (l << 8)) & 8191),
          (this.r[9] = (l >>> 5) & 127);
        for (let t = 0; t < 8; t++) this.pad[t] = ou(e, 16 + 2 * t);
      }
      process(e, t, i = !1) {
        let { h: r, r: s } = this,
          n = s[0],
          a = s[1],
          o = s[2],
          l = s[3],
          c = s[4],
          h = s[5],
          d = s[6],
          u = s[7],
          p = s[8],
          f = s[9],
          g = ou(e, t + 0),
          y = ou(e, t + 2),
          m = ou(e, t + 4),
          w = ou(e, t + 6),
          b = ou(e, t + 8),
          v = ou(e, t + 10),
          E = ou(e, t + 12),
          _ = ou(e, t + 14),
          I = r[0] + (8191 & g),
          S = r[1] + (((g >>> 13) | (y << 3)) & 8191),
          A = r[2] + (((y >>> 10) | (m << 6)) & 8191),
          P = r[3] + (((m >>> 7) | (w << 9)) & 8191),
          C = r[4] + (((w >>> 4) | (b << 12)) & 8191),
          x = r[5] + ((b >>> 1) & 8191),
          k = r[6] + (((b >>> 14) | (v << 2)) & 8191),
          T = r[7] + (((v >>> 11) | (E << 5)) & 8191),
          O = r[8] + (((E >>> 8) | (_ << 8)) & 8191),
          R = r[9] + ((_ >>> 5) | (2048 * !i)),
          N = 0,
          j = 0 + I * n + 5 * f * S + 5 * p * A + 5 * u * P + 5 * d * C;
        (N = j >>> 13),
          (j &= 8191),
          (j += 5 * h * x + 5 * c * k + 5 * l * T + 5 * o * O + 5 * a * R),
          (N += j >>> 13),
          (j &= 8191);
        let D = N + I * a + S * n + 5 * f * A + 5 * p * P + 5 * u * C;
        (N = D >>> 13),
          (D &= 8191),
          (D += 5 * d * x + 5 * h * k + 5 * c * T + 5 * l * O + 5 * o * R),
          (N += D >>> 13),
          (D &= 8191);
        let M = N + I * o + S * a + A * n + 5 * f * P + 5 * p * C;
        (N = M >>> 13),
          (M &= 8191),
          (M += 5 * u * x + 5 * d * k + 5 * h * T + 5 * c * O + 5 * l * R),
          (N += M >>> 13),
          (M &= 8191);
        let U = N + I * l + S * o + A * a + P * n + 5 * f * C;
        (N = U >>> 13),
          (U &= 8191),
          (U += 5 * p * x + 5 * u * k + 5 * d * T + 5 * h * O + 5 * c * R),
          (N += U >>> 13),
          (U &= 8191);
        let L = N + I * c + S * l + A * o + P * a + C * n;
        (N = L >>> 13),
          (L &= 8191),
          (L += 5 * f * x + 5 * p * k + 5 * u * T + 5 * d * O + 5 * h * R),
          (N += L >>> 13),
          (L &= 8191);
        let W = N + I * h + S * c + A * l + P * o + C * a;
        (N = W >>> 13),
          (W &= 8191),
          (W += x * n + 5 * f * k + 5 * p * T + 5 * u * O + 5 * d * R),
          (N += W >>> 13),
          (W &= 8191);
        let B = N + I * d + S * h + A * c + P * l + C * o;
        (N = B >>> 13),
          (B &= 8191),
          (B += x * a + k * n + 5 * f * T + 5 * p * O + 5 * u * R),
          (N += B >>> 13),
          (B &= 8191);
        let K = N + I * u + S * d + A * h + P * c + C * l;
        (N = K >>> 13),
          (K &= 8191),
          (K += x * o + k * a + T * n + 5 * f * O + 5 * p * R),
          (N += K >>> 13),
          (K &= 8191);
        let q = N + I * p + S * u + A * d + P * h + C * c;
        (N = q >>> 13),
          (q &= 8191),
          (q += x * l + k * o + T * a + O * n + 5 * f * R),
          (N += q >>> 13),
          (q &= 8191);
        let H = N + I * f + S * p + A * u + P * d + C * h;
        (N = H >>> 13),
          (H &= 8191),
          (H += x * c + k * l + T * o + O * a + R * n),
          (N += H >>> 13),
          (H &= 8191),
          (j = 8191 & (N = ((N = ((N << 2) + N) | 0) + j) | 0)),
          (N >>>= 13),
          (D += N),
          (r[0] = j),
          (r[1] = D),
          (r[2] = M),
          (r[3] = U),
          (r[4] = L),
          (r[5] = W),
          (r[6] = B),
          (r[7] = K),
          (r[8] = q),
          (r[9] = H);
      }
      finalize() {
        let { h: e, pad: t } = this,
          i = new Uint16Array(10),
          r = e[1] >>> 13;
        e[1] &= 8191;
        for (let t = 2; t < 10; t++)
          (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
        (e[0] += 5 * r),
          (r = e[0] >>> 13),
          (e[0] &= 8191),
          (e[1] += r),
          (r = e[1] >>> 13),
          (e[1] &= 8191),
          (e[2] += r),
          (i[0] = e[0] + 5),
          (r = i[0] >>> 13),
          (i[0] &= 8191);
        for (let t = 1; t < 10; t++)
          (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
        i[9] -= 8192;
        let s = (1 ^ r) - 1;
        for (let e = 0; e < 10; e++) i[e] &= s;
        s = ~s;
        for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
        (e[0] = (e[0] | (e[1] << 13)) & 65535),
          (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
          (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
          (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
          (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
          (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
          (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
          (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
        let n = e[0] + t[0];
        e[0] = 65535 & n;
        for (let i = 1; i < 8; i++)
          (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
        a4(i);
      }
      update(e) {
        a8(this), a3((e = a9(e)));
        let { buffer: t, blockLen: i } = this,
          r = e.length;
        for (let s = 0; s < r; ) {
          let n = Math.min(i - this.pos, r - s);
          if (n === i) {
            for (; i <= r - s; s += i) this.process(e, s);
            continue;
          }
          t.set(e.subarray(s, s + n), this.pos),
            (this.pos += n),
            (s += n),
            this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
        }
        return this;
      }
      destroy() {
        a4(this.h, this.r, this.buffer, this.pad);
      }
      digestInto(e) {
        a8(this),
          (function (e, t) {
            a3(e);
            let i = t.outputLen;
            if (e.length < i)
              throw Error(
                "digestInto() expects output buffer of length at least " + i
              );
          })(e, this),
          (this.finished = !0);
        let { buffer: t, h: i } = this,
          { pos: r } = this;
        if (r) {
          for (t[r++] = 1; r < 16; r++) t[r] = 0;
          this.process(t, 0, !0);
        }
        this.finalize();
        let s = 0;
        for (let t = 0; t < 8; t++)
          (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
        return e;
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let i = e.slice(0, t);
        return this.destroy(), i;
      }
    }
    let of =
        ((c = (e) => new op(e)),
        ((n = (e, t) => c(t).update(a9(e)).digest()).outputLen = (a = c(
          new Uint8Array(32)
        )).outputLen),
        (n.blockLen = a.blockLen),
        (n.create = (e) => c(e)),
        n),
      og = (function (e, t) {
        let {
          allowShortKeys: i,
          extendNonceFn: r,
          counterLength: s,
          counterRight: n,
          rounds: a,
        } = (function (e, t) {
          if (null == t || "object" != typeof t)
            throw Error("options must be defined");
          return Object.assign(e, t);
        })(
          {
            allowShortKeys: !1,
            counterLength: 8,
            counterRight: !1,
            rounds: 20,
          },
          t
        );
        if ("function" != typeof e) throw Error("core must be a function");
        return (
          a5(s),
          a5(a),
          a2(n),
          a2(i),
          (t, o, l, c, h = 0) => {
            a3(t), a3(o), a3(l);
            let d = l.length;
            if (
              (void 0 === c && (c = new Uint8Array(d)),
              a3(c),
              a5(h),
              h < 0 || h >= oh)
            )
              throw Error("arx: counter overflow");
            if (c.length < d)
              throw Error(
                `arx: output (${c.length}) is shorter than data (${d})`
              );
            let u = [],
              p = t.length,
              f,
              g;
            if (32 === p) u.push((f = oi(t))), (g = oo);
            else if (16 === p && i)
              (f = new Uint8Array(32)).set(t),
                f.set(t, 16),
                (g = oa),
                u.push(f);
            else throw Error(`arx: invalid 32-byte key, got length=${p}`);
            oc(o) || u.push((o = oi(o)));
            let y = a6(f);
            if (r) {
              if (24 !== o.length)
                throw Error("arx: extended nonce must be 24 bytes");
              r(g, y, a6(o.subarray(0, 16)), y), (o = o.subarray(16));
            }
            let m = 16 - s;
            if (m !== o.length)
              throw Error(`arx: nonce must be ${m} or 16 bytes`);
            if (12 !== m) {
              let e = new Uint8Array(12);
              e.set(o, n ? 0 : 12 - o.length), (o = e), u.push(o);
            }
            return (
              (function (e, t, i, r, s, n, a, o) {
                let l = s.length,
                  c = new Uint8Array(64),
                  h = a6(c),
                  d = oc(s) && oc(n),
                  u = d ? a6(s) : od,
                  p = d ? a6(n) : od;
                for (let f = 0; f < l; a++) {
                  if ((e(t, i, r, h, a, o), a >= oh))
                    throw Error("arx: counter overflow");
                  let g = Math.min(64, l - f);
                  if (d && 64 === g) {
                    let e = f / 4;
                    if (f % 4 != 0) throw Error("arx: invalid block position");
                    for (let t = 0, i; t < 16; t++)
                      p[(i = e + t)] = u[i] ^ h[t];
                    f += 64;
                    continue;
                  }
                  for (let e = 0, t; e < g; e++) n[(t = f + e)] = s[t] ^ c[e];
                  f += g;
                }
              })(e, g, y, a6(o), l, c, h, a),
              a4(...u),
              c
            );
          }
        );
      })(
        function (e, t, i, r, s, n = 20) {
          let a = e[0],
            o = e[1],
            l = e[2],
            c = e[3],
            h = t[0],
            d = t[1],
            u = t[2],
            p = t[3],
            f = t[4],
            g = t[5],
            y = t[6],
            m = t[7],
            w = i[0],
            b = i[1],
            v = i[2],
            E = a,
            _ = o,
            I = l,
            S = c,
            A = h,
            P = d,
            C = u,
            x = p,
            k = f,
            T = g,
            O = y,
            R = m,
            N = s,
            j = w,
            D = b,
            M = v;
          for (let e = 0; e < n; e += 2)
            (k = (k + (N = ol(N ^ (E = (E + A) | 0), 16))) | 0),
              (E = (E + (A = ol(A ^ k, 12))) | 0),
              (k = (k + (N = ol(N ^ E, 8))) | 0),
              (A = ol(A ^ k, 7)),
              (T = (T + (j = ol(j ^ (_ = (_ + P) | 0), 16))) | 0),
              (_ = (_ + (P = ol(P ^ T, 12))) | 0),
              (T = (T + (j = ol(j ^ _, 8))) | 0),
              (P = ol(P ^ T, 7)),
              (O = (O + (D = ol(D ^ (I = (I + C) | 0), 16))) | 0),
              (I = (I + (C = ol(C ^ O, 12))) | 0),
              (O = (O + (D = ol(D ^ I, 8))) | 0),
              (C = ol(C ^ O, 7)),
              (R = (R + (M = ol(M ^ (S = (S + x) | 0), 16))) | 0),
              (S = (S + (x = ol(x ^ R, 12))) | 0),
              (R = (R + (M = ol(M ^ S, 8))) | 0),
              (x = ol(x ^ R, 7)),
              (O = (O + (M = ol(M ^ (E = (E + P) | 0), 16))) | 0),
              (E = (E + (P = ol(P ^ O, 12))) | 0),
              (O = (O + (M = ol(M ^ E, 8))) | 0),
              (P = ol(P ^ O, 7)),
              (R = (R + (N = ol(N ^ (_ = (_ + C) | 0), 16))) | 0),
              (_ = (_ + (C = ol(C ^ R, 12))) | 0),
              (R = (R + (N = ol(N ^ _, 8))) | 0),
              (C = ol(C ^ R, 7)),
              (k = (k + (j = ol(j ^ (I = (I + x) | 0), 16))) | 0),
              (I = (I + (x = ol(x ^ k, 12))) | 0),
              (k = (k + (j = ol(j ^ I, 8))) | 0),
              (x = ol(x ^ k, 7)),
              (T = (T + (D = ol(D ^ (S = (S + A) | 0), 16))) | 0),
              (S = (S + (A = ol(A ^ T, 12))) | 0),
              (T = (T + (D = ol(D ^ S, 8))) | 0),
              (A = ol(A ^ T, 7));
          let U = 0;
          (r[U++] = (a + E) | 0),
            (r[U++] = (o + _) | 0),
            (r[U++] = (l + I) | 0),
            (r[U++] = (c + S) | 0),
            (r[U++] = (h + A) | 0),
            (r[U++] = (d + P) | 0),
            (r[U++] = (u + C) | 0),
            (r[U++] = (p + x) | 0),
            (r[U++] = (f + k) | 0),
            (r[U++] = (g + T) | 0),
            (r[U++] = (y + O) | 0),
            (r[U++] = (m + R) | 0),
            (r[U++] = (s + N) | 0),
            (r[U++] = (w + j) | 0),
            (r[U++] = (b + D) | 0),
            (r[U++] = (v + M) | 0);
        },
        { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
      ),
      oy = new Uint8Array(16),
      om = (e, t) => {
        e.update(t);
        let i = t.length % 16;
        i && e.update(oy.subarray(i));
      },
      ow = new Uint8Array(32);
    function ob(e, t, i, r, s) {
      var n, a;
      let o,
        l,
        c = e(t, i, ow),
        h = of.create(c);
      s && om(h, s), om(h, r);
      let d =
        ((n = r.length),
        (a = s ? s.length : 0),
        a2(!0),
        ot(
          (l = new DataView(
            (o = new Uint8Array(16)).buffer,
            o.byteOffset,
            o.byteLength
          )),
          0,
          BigInt(a),
          !0
        ),
        ot(l, 8, BigInt(n), !0),
        o);
      h.update(d);
      let u = h.digest();
      return a4(c, d), u;
    }
    let ov = ((e, t) => {
      function i(r, ...s) {
        if ((a3(r), !a7))
          throw Error("Non little-endian hardware is not yet supported");
        if (void 0 !== e.nonceLength) {
          let t = s[0];
          if (!t) throw Error("nonce / iv required");
          e.varSizeNonce ? a3(t) : a3(t, e.nonceLength);
        }
        let n = e.tagLength;
        n && void 0 !== s[1] && a3(s[1]);
        let a = t(r, ...s),
          o = (e, t) => {
            if (void 0 !== t) {
              if (2 !== e) throw Error("cipher output not supported");
              a3(t);
            }
          },
          l = !1;
        return {
          encrypt(e, t) {
            if (l) throw Error("cannot encrypt() twice with same key + nonce");
            return (l = !0), a3(e), o(a.encrypt.length, t), a.encrypt(e, t);
          },
          decrypt(e, t) {
            if ((a3(e), n && e.length < n))
              throw Error(
                "invalid ciphertext length: smaller than tagLength=" + n
              );
            return o(a.decrypt.length, t), a.decrypt(e, t);
          },
        };
      }
      return Object.assign(i, e), i;
    })({ blockSize: 64, nonceLength: 12, tagLength: 16 }, (e, t, i) => ({
      encrypt(r, s) {
        let n = r.length;
        (s = oe(n + 16, s, !1)).set(r);
        let a = s.subarray(0, -16);
        og(e, t, a, a, 1);
        let o = ob(og, e, t, a, i);
        return s.set(o, n), a4(o), s;
      },
      decrypt(r, s) {
        s = oe(r.length - 16, s, !1);
        let n = r.subarray(0, -16),
          a = r.subarray(-16),
          o = ob(og, e, t, n, i);
        if (
          !(function (e, t) {
            if (e.length !== t.length) return !1;
            let i = 0;
            for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
            return 0 === i;
          })(a, o)
        )
          throw Error("invalid tag");
        return s.set(r.subarray(0, -16)), og(e, t, s, s, 1), a4(o), s;
      },
    }));
    class oE extends nV {
      constructor(e, t) {
        super(), (this.finished = !1), (this.destroyed = !1), nk(e);
        const i = nz(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
          throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen),
          (this.outputLen = this.iHash.outputLen);
        const r = this.blockLen,
          s = new Uint8Array(r);
        s.set(i.length > r ? e.create().update(i).digest() : i);
        for (let e = 0; e < s.length; e++) s[e] ^= 54;
        this.iHash.update(s), (this.oHash = e.create());
        for (let e = 0; e < s.length; e++) s[e] ^= 106;
        this.oHash.update(s), nN(s);
      }
      update(e) {
        return nT(this), this.iHash.update(e), this;
      }
      digestInto(e) {
        nT(this),
          nx(e, this.outputLen),
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
          iHash: i,
          finished: r,
          destroyed: s,
          blockLen: n,
          outputLen: a,
        } = this;
        return (
          (e.finished = r),
          (e.destroyed = s),
          (e.blockLen = n),
          (e.outputLen = a),
          (e.oHash = t._cloneInto(e.oHash)),
          (e.iHash = i._cloneInto(e.iHash)),
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
    let o_ = (e, t, i) => new oE(e, t).update(i).digest();
    o_.create = (e, t) => new oE(e, t);
    let oI = Uint8Array.from([0]),
      oS = Uint8Array.of(),
      oA = BigInt(0),
      oP = BigInt(1);
    function oC(e, t = "") {
      if ("boolean" != typeof e)
        throw Error((t && `"${t}"`) + "expected boolean, got type=" + typeof e);
      return e;
    }
    function ox(e, t, i = "") {
      let r = nP(e),
        s = e?.length,
        n = void 0 !== t;
      if (!r || (n && s !== t))
        throw Error(
          (i && `"${i}" `) +
            "expected Uint8Array" +
            (n ? ` of length ${t}` : "") +
            ", got " +
            (r ? `length=${s}` : `type=${typeof e}`)
        );
      return e;
    }
    function ok(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function oT(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? oA : BigInt("0x" + e);
    }
    function oO(e) {
      return nx(e), oT(nq(Uint8Array.from(e).reverse()));
    }
    function oR(e, t) {
      return n$(e.toString(16).padStart(2 * t, "0"));
    }
    function oN(e, t) {
      return oR(e, t).reverse();
    }
    function oj(e, t, i) {
      let r;
      if ("string" == typeof t)
        try {
          r = n$(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (nP(t)) r = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let s = r.length;
      if ("number" == typeof i && s !== i)
        throw Error(e + " of length " + i + " expected, got " + s);
      return r;
    }
    let oD = (e) => "bigint" == typeof e && oA <= e;
    function oM(e, t, i, r) {
      if (!(oD(t) && oD(i) && oD(r)) || !(i <= t) || !(t < r))
        throw Error(
          "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
        );
    }
    function oU(e) {
      let t;
      for (t = 0; e > oA; e >>= oP, t += 1);
      return t;
    }
    let oL = (e) => (oP << BigInt(e)) - oP;
    function oW(e, t, i = {}) {
      if (!e || "object" != typeof e)
        throw Error("expected valid options object");
      function r(t, i, r) {
        let s = e[t];
        if (r && void 0 === s) return;
        let n = typeof s;
        if (n !== i || null === s)
          throw Error(`param "${t}" is invalid: expected ${i}, got ${n}`);
      }
      Object.entries(t).forEach(([e, t]) => r(e, t, !1)),
        Object.entries(i).forEach(([e, t]) => r(e, t, !0));
    }
    function oB(e) {
      let t = new WeakMap();
      return (i, ...r) => {
        let s = t.get(i);
        if (void 0 !== s) return s;
        let n = e(i, ...r);
        return t.set(i, n), n;
      };
    }
    let oK = BigInt(0),
      oq = BigInt(1),
      oH = BigInt(2),
      o$ = BigInt(3),
      oJ = BigInt(4),
      oz = BigInt(5),
      oF = BigInt(7),
      oV = BigInt(8),
      oG = BigInt(9),
      oY = BigInt(16);
    function oZ(e, t) {
      let i = e % t;
      return i >= oK ? i : t + i;
    }
    function oQ(e, t, i) {
      let r = e;
      for (; t-- > oK; ) (r *= r), (r %= i);
      return r;
    }
    function oX(e, t) {
      if (e === oK) throw Error("invert: expected non-zero number");
      if (t <= oK) throw Error("invert: expected positive modulus, got " + t);
      let i = oZ(e, t),
        r = t,
        s = oK,
        n = oq;
      for (; i !== oK; ) {
        let e = r / i,
          t = r % i,
          a = s - n * e;
        (r = i), (i = t), (s = n), (n = a);
      }
      if (r !== oq) throw Error("invert: does not exist");
      return oZ(s, t);
    }
    function o0(e, t, i) {
      if (!e.eql(e.sqr(t), i)) throw Error("Cannot find square root");
    }
    function o1(e, t) {
      let i = (e.ORDER + oq) / oJ,
        r = e.pow(t, i);
      return o0(e, r, t), r;
    }
    function o2(e, t) {
      let i = (e.ORDER - oz) / oV,
        r = e.mul(t, oH),
        s = e.pow(r, i),
        n = e.mul(t, s),
        a = e.mul(e.mul(n, oH), s),
        o = e.mul(n, e.sub(a, e.ONE));
      return o0(e, o, t), o;
    }
    function o5(e) {
      if (e < o$) throw Error("sqrt is not defined for small field");
      let t = e - oq,
        i = 0;
      for (; t % oH === oK; ) (t /= oH), i++;
      let r = oH,
        s = o7(e);
      for (; 1 === o6(s, r); )
        if (r++ > 1e3)
          throw Error("Cannot find square root: probably non-prime P");
      if (1 === i) return o1;
      let n = s.pow(r, t),
        a = (t + oq) / oH;
      return function (e, r) {
        if (e.is0(r)) return r;
        if (1 !== o6(e, r)) throw Error("Cannot find square root");
        let s = i,
          o = e.mul(e.ONE, n),
          l = e.pow(r, t),
          c = e.pow(r, a);
        for (; !e.eql(l, e.ONE); ) {
          if (e.is0(l)) return e.ZERO;
          let t = 1,
            i = e.sqr(l);
          for (; !e.eql(i, e.ONE); )
            if ((t++, (i = e.sqr(i)), t === s))
              throw Error("Cannot find square root");
          let r = oq << BigInt(s - t - 1),
            n = e.pow(o, r);
          (s = t), (o = e.sqr(n)), (l = e.mul(l, o)), (c = e.mul(c, n));
        }
        return c;
      };
    }
    let o3 = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN",
    ];
    function o8(e, t, i = !1) {
      let r = Array(t.length).fill(i ? e.ZERO : void 0),
        s = t.reduce(
          (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
          e.ONE
        ),
        n = e.inv(s);
      return (
        t.reduceRight(
          (t, i, s) => (e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i))),
          n
        ),
        r
      );
    }
    function o6(e, t) {
      let i = (e.ORDER - oq) / oH,
        r = e.pow(t, i),
        s = e.eql(r, e.ONE),
        n = e.eql(r, e.ZERO),
        a = e.eql(r, e.neg(e.ONE));
      if (!s && !n && !a) throw Error("invalid Legendre symbol result");
      return s ? 1 : n ? 0 : -1;
    }
    function o4(e, t) {
      void 0 !== t && nC(t);
      let i = void 0 !== t ? t : e.toString(2).length,
        r = Math.ceil(i / 8);
      return { nBitLength: i, nByteLength: r };
    }
    function o7(e, t, i = !1, r = {}) {
      let s;
      if (e <= oK) throw Error("invalid field: expected ORDER > 0, got " + e);
      let n,
        a,
        o = !1,
        l;
      if ("object" == typeof t && null != t) {
        if (r.sqrt || i) throw Error("cannot specify opts in two arguments");
        t.BITS && (n = t.BITS),
          t.sqrt && (a = t.sqrt),
          "boolean" == typeof t.isLE && (i = t.isLE),
          "boolean" == typeof t.modFromBytes && (o = t.modFromBytes),
          (l = t.allowedLengths);
      } else "number" == typeof t && (n = t), r.sqrt && (a = r.sqrt);
      let { nBitLength: c, nByteLength: h } = o4(e, n);
      if (h > 2048)
        throw Error("invalid field: expected ORDER of <= 2048 bytes");
      let d = Object.freeze({
        ORDER: e,
        isLE: i,
        BITS: c,
        BYTES: h,
        MASK: oL(c),
        ZERO: oK,
        ONE: oq,
        allowedLengths: l,
        create: (t) => oZ(t, e),
        isValid: (t) => {
          if ("bigint" != typeof t)
            throw Error(
              "invalid field element: expected bigint, got " + typeof t
            );
          return oK <= t && t < e;
        },
        is0: (e) => e === oK,
        isValidNot0: (e) => !d.is0(e) && d.isValid(e),
        isOdd: (e) => (e & oq) === oq,
        neg: (t) => oZ(-t, e),
        eql: (e, t) => e === t,
        sqr: (t) => oZ(t * t, e),
        add: (t, i) => oZ(t + i, e),
        sub: (t, i) => oZ(t - i, e),
        mul: (t, i) => oZ(t * i, e),
        pow: (e, t) =>
          (function (e, t, i) {
            if (i < oK) throw Error("invalid exponent, negatives unsupported");
            if (i === oK) return e.ONE;
            if (i === oq) return t;
            let r = e.ONE,
              s = t;
            for (; i > oK; )
              i & oq && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= oq);
            return r;
          })(d, e, t),
        div: (t, i) => oZ(t * oX(i, e), e),
        sqrN: (e) => e * e,
        addN: (e, t) => e + t,
        subN: (e, t) => e - t,
        mulN: (e, t) => e * t,
        inv: (t) => oX(t, e),
        sqrt:
          a ||
          ((t) => {
            let i, r, n, a, o, l;
            return (
              s ||
                (s =
                  e % oJ === o$
                    ? o1
                    : e % oV === oz
                    ? o2
                    : e % oY === oG
                    ? ((i = o7(e)),
                      (n = (r = o5(e))(i, i.neg(i.ONE))),
                      (a = r(i, n)),
                      (o = r(i, i.neg(n))),
                      (l = (e + oF) / oY),
                      (e, t) => {
                        let i = e.pow(t, l),
                          r = e.mul(i, n),
                          s = e.mul(i, a),
                          c = e.mul(i, o),
                          h = e.eql(e.sqr(r), t),
                          d = e.eql(e.sqr(s), t);
                        (i = e.cmov(i, r, h)), (r = e.cmov(c, s, d));
                        let u = e.eql(e.sqr(r), t),
                          p = e.cmov(i, r, u);
                        return o0(e, p, t), p;
                      })
                    : o5(e)),
              s(d, t)
            );
          }),
        toBytes: (e) => (i ? oN(e, h) : oR(e, h)),
        fromBytes: (t, r = !0) => {
          if (l) {
            if (!l.includes(t.length) || t.length > h)
              throw Error(
                "Field.fromBytes: expected " + l + " bytes, got " + t.length
              );
            let e = new Uint8Array(h);
            e.set(t, i ? 0 : e.length - t.length), (t = e);
          }
          if (t.length !== h)
            throw Error(
              "Field.fromBytes: expected " + h + " bytes, got " + t.length
            );
          let s = i ? oO(t) : oT(nq(t));
          if ((o && (s = oZ(s, e)), !r && !d.isValid(s)))
            throw Error("invalid field element: outside of range 0..ORDER");
          return s;
        },
        invertBatch: (e) => o8(d, e),
        cmov: (e, t, i) => (i ? t : e),
      });
      return Object.freeze(d);
    }
    function o9(e) {
      if ("bigint" != typeof e) throw Error("field order must be bigint");
      return Math.ceil(e.toString(2).length / 8);
    }
    function le(e) {
      let t = o9(e);
      return t + Math.ceil(t / 2);
    }
    let lt = BigInt(0),
      li = BigInt(1);
    function lr(e, t) {
      let i = t.negate();
      return e ? i : t;
    }
    function ls(e, t) {
      let i = o8(
        e.Fp,
        t.map((e) => e.Z)
      );
      return t.map((t, r) => e.fromAffine(t.toAffine(i[r])));
    }
    function ln(e, t) {
      if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function la(e, t) {
      ln(e, t);
      let i = Math.ceil(t / e) + 1,
        r = 2 ** (e - 1),
        s = 2 ** e;
      return {
        windows: i,
        windowSize: r,
        mask: oL(e),
        maxNumber: s,
        shiftBy: BigInt(e),
      };
    }
    function lo(e, t, i) {
      let { windowSize: r, mask: s, maxNumber: n, shiftBy: a } = i,
        o = Number(e & s),
        l = e >> a;
      o > r && ((o -= n), (l += li));
      let c = t * r;
      return {
        nextN: l,
        offset: c + Math.abs(o) - 1,
        isZero: 0 === o,
        isNeg: o < 0,
        isNegF: t % 2 != 0,
        offsetF: c,
      };
    }
    let ll = new WeakMap(),
      lc = new WeakMap();
    function lh(e) {
      return lc.get(e) || 1;
    }
    function ld(e) {
      if (e !== lt) throw Error("invalid wNAF");
    }
    class lu {
      constructor(e, t) {
        (this.BASE = e.BASE),
          (this.ZERO = e.ZERO),
          (this.Fn = e.Fn),
          (this.bits = t);
      }
      _unsafeLadder(e, t, i = this.ZERO) {
        let r = e;
        for (; t > lt; ) t & li && (i = i.add(r)), (r = r.double()), (t >>= li);
        return i;
      }
      precomputeWindow(e, t) {
        let { windows: i, windowSize: r } = la(t, this.bits),
          s = [],
          n = e,
          a = n;
        for (let e = 0; e < i; e++) {
          (a = n), s.push(a);
          for (let e = 1; e < r; e++) (a = a.add(n)), s.push(a);
          n = a.double();
        }
        return s;
      }
      wNAF(e, t, i) {
        if (!this.Fn.isValid(i)) throw Error("invalid scalar");
        let r = this.ZERO,
          s = this.BASE,
          n = la(e, this.bits);
        for (let e = 0; e < n.windows; e++) {
          let {
            nextN: a,
            offset: o,
            isZero: l,
            isNeg: c,
            isNegF: h,
            offsetF: d,
          } = lo(i, e, n);
          (i = a), l ? (s = s.add(lr(h, t[d]))) : (r = r.add(lr(c, t[o])));
        }
        return ld(i), { p: r, f: s };
      }
      wNAFUnsafe(e, t, i, r = this.ZERO) {
        let s = la(e, this.bits);
        for (let e = 0; e < s.windows && i !== lt; e++) {
          let { nextN: n, offset: a, isZero: o, isNeg: l } = lo(i, e, s);
          if (((i = n), !o)) {
            let e = t[a];
            r = r.add(l ? e.negate() : e);
          }
        }
        return ld(i), r;
      }
      getPrecomputes(e, t, i) {
        let r = ll.get(t);
        return (
          r ||
            ((r = this.precomputeWindow(t, e)),
            1 !== e && ("function" == typeof i && (r = i(r)), ll.set(t, r))),
          r
        );
      }
      cached(e, t, i) {
        let r = lh(e);
        return this.wNAF(r, this.getPrecomputes(r, e, i), t);
      }
      unsafe(e, t, i, r) {
        let s = lh(e);
        return 1 === s
          ? this._unsafeLadder(e, t, r)
          : this.wNAFUnsafe(s, this.getPrecomputes(s, e, i), t, r);
      }
      createCache(e, t) {
        ln(t, this.bits), lc.set(e, t), ll.delete(e);
      }
      hasCache(e) {
        return 1 !== lh(e);
      }
    }
    function lp(e, t, i) {
      if (!t) return o7(e, { isLE: i });
      if (t.ORDER !== e)
        throw Error("Field.ORDER must match order: Fp == p, Fn == n");
      return (
        oW(
          t,
          o3.reduce((e, t) => ((e[t] = "function"), e), {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number",
          })
        ),
        t
      );
    }
    BigInt(0), BigInt(1), BigInt(2), BigInt(8), nJ("HashToScalar-");
    let lf = BigInt(0),
      lg = BigInt(1),
      ly = BigInt(2),
      lm = BigInt(1),
      lw = BigInt(2),
      lb = BigInt(3),
      lv = BigInt(5),
      lE = BigInt(8),
      l_ = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      ),
      lI = {
        p: l_,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: lE,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      },
      lS = (function (e) {
        let {
            P: t,
            type: i,
            adjustScalarBytes: r,
            powPminus2: s,
            randomBytes: n,
          } = (oW(e, { adjustScalarBytes: "function", powPminus2: "function" }),
          Object.freeze({ ...e })),
          a = "x25519" === i;
        if (!a && "x448" !== i) throw Error("invalid type");
        let o = n || nY,
          l = a ? 255 : 448,
          c = a ? 32 : 56,
          h = BigInt(a ? 9 : 5),
          d = BigInt(a ? 121665 : 39081),
          u = a ? ly ** BigInt(254) : ly ** BigInt(447),
          p =
            u +
            (a
              ? BigInt(8) * ly ** BigInt(251) - lg
              : BigInt(4) * ly ** BigInt(445) - lg) +
            lg,
          f = (e) => oZ(e, t),
          g = oN(f(h), c);
        function y(e, i) {
          let n,
            o = (function (e, i) {
              oM("u", e, lf, t), oM("scalar", i, u, p);
              let r = lg,
                n = lf,
                a = e,
                o = lg,
                c = lf;
              for (let t = BigInt(l - 1); t >= lf; t--) {
                let s = (i >> t) & lg;
                (c ^= s),
                  ({ x_2: r, x_3: a } = w(c, r, a)),
                  ({ x_2: n, x_3: o } = w(c, n, o)),
                  (c = s);
                let l = r + n,
                  h = f(l * l),
                  u = r - n,
                  p = f(u * u),
                  g = h - p,
                  y = a + o,
                  m = f((a - o) * l),
                  b = f(y * u),
                  v = m + b,
                  E = m - b;
                (a = f(v * v)),
                  (o = f(e * f(E * E))),
                  (r = f(h * p)),
                  (n = f(g * (h + f(d * g))));
              }
              return (
                ({ x_2: r, x_3: a } = w(c, r, a)),
                ({ x_2: n, x_3: o } = w(c, n, o)),
                f(r * s(n))
              );
            })(
              ((n = oj("u coordinate", i, c)), a && (n[31] &= 127), f(oO(n))),
              oO(r(oj("scalar", e, c)))
            );
          if (o === lf) throw Error("invalid private or public key received");
          return oN(f(o), c);
        }
        function m(e) {
          return y(e, g);
        }
        function w(e, t, i) {
          let r = f(e * (t - i));
          return { x_2: (t = f(t - r)), x_3: (i = f(i + r)) };
        }
        let b = { secretKey: c, publicKey: c, seed: c },
          v = (e = o(c)) => (nx(e, b.seed), e);
        return {
          keygen: function (e) {
            let t = v(e);
            return { secretKey: t, publicKey: m(t) };
          },
          getSharedSecret: (e, t) => y(e, t),
          getPublicKey: (e) => m(e),
          scalarMult: y,
          scalarMultBase: m,
          utils: { randomSecretKey: v, randomPrivateKey: v },
          GuBytes: g.slice(),
          lengths: b,
        };
      })({
        P: (o = o7(lI.p, { isLE: !0 }).ORDER),
        type: "x25519",
        powPminus2: (e) => {
          let t,
            i,
            r,
            s,
            n,
            a,
            l,
            c,
            h,
            d,
            u,
            p,
            f,
            g,
            { pow_p_5_8: y, b2: m } =
              ((t = BigInt(10)),
              (i = BigInt(20)),
              (r = BigInt(40)),
              (s = BigInt(80)),
              (a = (oQ((n = (((e * e) % l_) * e) % l_), lw, l_) * n) % l_),
              (l = (oQ(a, lm, l_) * e) % l_),
              (c = (oQ(l, lv, l_) * l) % l_),
              (h = (oQ(c, t, l_) * c) % l_),
              (d = (oQ(h, i, l_) * h) % l_),
              (u = (oQ(d, r, l_) * d) % l_),
              (p = (oQ(u, s, l_) * u) % l_),
              (f = (oQ(p, s, l_) * u) % l_),
              (g = (oQ(f, t, l_) * c) % l_),
              { pow_p_5_8: (oQ(g, lw, l_) * e) % l_, b2: n });
          return oZ(oQ(y, lb, o) * m, o);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
      }),
      lA = (e, t) => (e + (e >= 0 ? t : -t) / lO) / t;
    function lP(e) {
      if (!["compact", "recovered", "der"].includes(e))
        throw Error(
          'Signature format must be "compact", "recovered", or "der"'
        );
      return e;
    }
    function lC(e, t) {
      let i = {};
      for (let r of Object.keys(t)) i[r] = void 0 === e[r] ? t[r] : e[r];
      return (
        oC(i.lowS, "lowS"),
        oC(i.prehash, "prehash"),
        void 0 !== i.format && lP(i.format),
        i
      );
    }
    let lx = {
        Err: class extends Error {
          constructor(e = "") {
            super(e);
          }
        },
        _tlv: {
          encode: (e, t) => {
            let { Err: i } = lx;
            if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
            if (1 & t.length) throw new i("tlv.encode: unpadded data");
            let r = t.length / 2,
              s = ok(r);
            if ((s.length / 2) & 128)
              throw new i("tlv.encode: long form length too big");
            let n = r > 127 ? ok((s.length / 2) | 128) : "";
            return ok(e) + n + s + t;
          },
          decode(e, t) {
            let { Err: i } = lx,
              r = 0;
            if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
            if (t.length < 2 || t[r++] !== e)
              throw new i("tlv.decode: wrong tlv");
            let s = t[r++],
              n = 0;
            if (128 & s) {
              let e = 127 & s;
              if (!e)
                throw new i(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (e > 4)
                throw new i("tlv.decode(long): byte length is too big");
              let a = t.subarray(r, r + e);
              if (a.length !== e)
                throw new i("tlv.decode: length bytes not complete");
              if (0 === a[0])
                throw new i("tlv.decode(long): zero leftmost byte");
              for (let e of a) n = (n << 8) | e;
              if (((r += e), n < 128))
                throw new i("tlv.decode(long): not minimal encoding");
            } else n = s;
            let a = t.subarray(r, r + n);
            if (a.length !== n) throw new i("tlv.decode: wrong value length");
            return { v: a, l: t.subarray(r + n) };
          },
        },
        _int: {
          encode(e) {
            let { Err: t } = lx;
            if (e < lk)
              throw new t("integer: negative integers are not allowed");
            let i = ok(e);
            if ((8 & Number.parseInt(i[0], 16) && (i = "00" + i), 1 & i.length))
              throw new t("unexpected DER parsing assertion: unpadded hex");
            return i;
          },
          decode(e) {
            let { Err: t } = lx;
            if (128 & e[0]) throw new t("invalid signature integer: negative");
            if (0 === e[0] && !(128 & e[1]))
              throw new t(
                "invalid signature integer: unnecessary leading zero"
              );
            return oT(nq(e));
          },
        },
        toSig(e) {
          let { Err: t, _int: i, _tlv: r } = lx,
            s = oj("signature", e),
            { v: n, l: a } = r.decode(48, s);
          if (a.length)
            throw new t("invalid signature: left bytes after parsing");
          let { v: o, l: l } = r.decode(2, n),
            { v: c, l: h } = r.decode(2, l);
          if (h.length)
            throw new t("invalid signature: left bytes after parsing");
          return { r: i.decode(o), s: i.decode(c) };
        },
        hexFromSig(e) {
          let { _tlv: t, _int: i } = lx,
            r = t.encode(2, i.encode(e.r)),
            s = t.encode(2, i.encode(e.s));
          return t.encode(48, r + s);
        },
      },
      lk = BigInt(0),
      lT = BigInt(1),
      lO = BigInt(2),
      lR = BigInt(3),
      lN = BigInt(4);
    function lj(e, t) {
      let i,
        { BYTES: r } = e;
      if ("bigint" == typeof t) i = t;
      else {
        let s = oj("private key", t);
        try {
          i = e.fromBytes(s);
        } catch {
          throw Error(
            `invalid private key: expected ui8a of size ${r}, got ${typeof t}`
          );
        }
      }
      if (!e.isValidNot0(i))
        throw Error("invalid private key: out of range [1..N-1]");
      return i;
    }
    function lD(e) {
      return Uint8Array.of(e ? 2 : 3);
    }
    function lM(e, t) {
      return {
        secretKey: t.BYTES,
        publicKey: 1 + e.BYTES,
        publicKeyUncompressed: 1 + 2 * e.BYTES,
        publicKeyHasPrefix: !0,
        signature: 2 * t.BYTES,
      };
    }
    function lU(e, t) {
      let i = (t) =>
        (function (e) {
          let t,
            {
              CURVE: i,
              curveOpts: r,
              hash: s,
              ecdsaOpts: n,
            } = (function (e) {
              let t,
                i,
                r,
                s,
                { CURVE: n, curveOpts: a } =
                  ((t = {
                    a: e.a,
                    b: e.b,
                    p: e.Fp.ORDER,
                    n: e.n,
                    h: e.h,
                    Gx: e.Gx,
                    Gy: e.Gy,
                  }),
                  (i = e.Fp),
                  (r = e.allowedPrivateKeyLengths
                    ? Array.from(
                        new Set(
                          e.allowedPrivateKeyLengths.map((e) =>
                            Math.ceil(e / 2)
                          )
                        )
                      )
                    : void 0),
                  (s = {
                    Fp: i,
                    Fn: o7(t.n, {
                      BITS: e.nBitLength,
                      allowedLengths: r,
                      modFromBytes: e.wrapPrivateKey,
                    }),
                    allowInfinityPoint: e.allowInfinityPoint,
                    endo: e.endo,
                    isTorsionFree: e.isTorsionFree,
                    clearCofactor: e.clearCofactor,
                    fromBytes: e.fromBytes,
                    toBytes: e.toBytes,
                  }),
                  { CURVE: t, curveOpts: s }),
                o = {
                  hmac: e.hmac,
                  randomBytes: e.randomBytes,
                  lowS: e.lowS,
                  bits2int: e.bits2int,
                  bits2int_modN: e.bits2int_modN,
                };
              return { CURVE: n, curveOpts: a, hash: e.hash, ecdsaOpts: o };
            })(e),
            a = (function (e, t, i = {}) {
              nk(t),
                oW(
                  i,
                  {},
                  {
                    hmac: "function",
                    lowS: "boolean",
                    randomBytes: "function",
                    bits2int: "function",
                    bits2int_modN: "function",
                  }
                );
              let r = i.randomBytes || nY,
                s = i.hmac || ((e, ...i) => o_(t, e, nF(...i))),
                { Fp: n, Fn: a } = e,
                { ORDER: o, BITS: l } = a,
                {
                  keygen: c,
                  getPublicKey: h,
                  getSharedSecret: d,
                  utils: u,
                  lengths: p,
                } = (function (e, t = {}) {
                  let { Fn: i } = e,
                    r = t.randomBytes || nY,
                    s = Object.assign(lM(e.Fp, i), { seed: le(i.ORDER) });
                  function n(e) {
                    try {
                      return !!lj(i, e);
                    } catch {
                      return !1;
                    }
                  }
                  function a(e = r(s.seed)) {
                    return (function (e, t, i = !1) {
                      let r = e.length,
                        s = o9(t),
                        n = le(t);
                      if (r < 16 || r < n || r > 1024)
                        throw Error(
                          "expected " + n + "-1024 bytes of input, got " + r
                        );
                      let a = oZ(i ? oO(e) : oT(nq(e)), t - oq) + oq;
                      return i ? oN(a, s) : oR(a, s);
                    })(ox(e, s.seed, "seed"), i.ORDER);
                  }
                  function o(t, r = !0) {
                    return e.BASE.multiply(lj(i, t)).toBytes(r);
                  }
                  function l(t) {
                    if ("bigint" == typeof t) return !1;
                    if (t instanceof e) return !0;
                    let {
                      secretKey: r,
                      publicKey: n,
                      publicKeyUncompressed: a,
                    } = s;
                    if (i.allowedLengths || r === n) return;
                    let o = oj("key", t).length;
                    return o === n || o === a;
                  }
                  return Object.freeze({
                    getPublicKey: o,
                    getSharedSecret: function (t, r, s = !0) {
                      if (!0 === l(t))
                        throw Error("first arg must be private key");
                      if (!1 === l(r))
                        throw Error("second arg must be public key");
                      let n = lj(i, t);
                      return e.fromHex(r).multiply(n).toBytes(s);
                    },
                    keygen: function (e) {
                      let t = a(e);
                      return { secretKey: t, publicKey: o(t) };
                    },
                    Point: e,
                    utils: {
                      isValidSecretKey: n,
                      isValidPublicKey: function (t, i) {
                        let { publicKey: r, publicKeyUncompressed: n } = s;
                        try {
                          let s = t.length;
                          return (
                            (!0 !== i || s === r) &&
                            (!1 !== i || s === n) &&
                            !!e.fromBytes(t)
                          );
                        } catch {
                          return !1;
                        }
                      },
                      randomSecretKey: a,
                      isValidPrivateKey: n,
                      randomPrivateKey: a,
                      normPrivateKeyToScalar: (e) => lj(i, e),
                      precompute: (t = 8, i = e.BASE) => i.precompute(t, !1),
                    },
                    lengths: s,
                  });
                })(e, i),
                f = {
                  prehash: !1,
                  lowS: "boolean" == typeof i.lowS && i.lowS,
                  format: void 0,
                  extraEntropy: !1,
                },
                g = "compact";
              function y(e, t) {
                if (!a.isValidNot0(t))
                  throw Error(
                    `invalid signature ${e}: out of range 1..Point.Fn.ORDER`
                  );
                return t;
              }
              class m {
                constructor(e, t, i) {
                  (this.r = y("r", e)),
                    (this.s = y("s", t)),
                    null != i && (this.recovery = i),
                    Object.freeze(this);
                }
                static fromBytes(e, t = g) {
                  var i, r;
                  let s, n;
                  if (
                    ((i = e),
                    lP((r = t)),
                    (n = p.signature),
                    ox(
                      i,
                      "compact" === r ? n : "recovered" === r ? n + 1 : void 0,
                      `${r} signature`
                    ),
                    "der" === t)
                  ) {
                    let { r: t, s: i } = lx.toSig(ox(e));
                    return new m(t, i);
                  }
                  "recovered" === t &&
                    ((s = e[0]), (t = "compact"), (e = e.subarray(1)));
                  let o = a.BYTES,
                    l = e.subarray(0, o),
                    c = e.subarray(o, 2 * o);
                  return new m(a.fromBytes(l), a.fromBytes(c), s);
                }
                static fromHex(e, t) {
                  return this.fromBytes(n$(e), t);
                }
                addRecoveryBit(e) {
                  return new m(this.r, this.s, e);
                }
                recoverPublicKey(t) {
                  let i = n.ORDER,
                    { r: r, s: s, recovery: l } = this;
                  if (null == l || ![0, 1, 2, 3].includes(l))
                    throw Error("recovery id invalid");
                  if (o * lO < i && l > 1)
                    throw Error("recovery id is ambiguous for h>1 curve");
                  let c = 2 === l || 3 === l ? r + o : r;
                  if (!n.isValid(c)) throw Error("recovery id 2 or 3 invalid");
                  let h = n.toBytes(c),
                    d = e.fromBytes(nF(lD((1 & l) == 0), h)),
                    u = a.inv(c),
                    p = b(oj("msgHash", t)),
                    f = a.create(-p * u),
                    g = a.create(s * u),
                    y = e.BASE.multiplyUnsafe(f).add(d.multiplyUnsafe(g));
                  if (y.is0()) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > o >> lT;
                }
                toBytes(e = g) {
                  if ((lP(e), "der" === e)) return n$(lx.hexFromSig(this));
                  let t = a.toBytes(this.r),
                    i = a.toBytes(this.s);
                  if ("recovered" === e) {
                    if (null == this.recovery)
                      throw Error("recovery bit must be present");
                    return nF(Uint8Array.of(this.recovery), t, i);
                  }
                  return nF(t, i);
                }
                toHex(e) {
                  return nq(this.toBytes(e));
                }
                assertValidity() {}
                static fromCompact(e) {
                  return m.fromBytes(oj("sig", e), "compact");
                }
                static fromDER(e) {
                  return m.fromBytes(oj("sig", e), "der");
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new m(this.r, a.neg(this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return this.toBytes("der");
                }
                toDERHex() {
                  return nq(this.toBytes("der"));
                }
                toCompactRawBytes() {
                  return this.toBytes("compact");
                }
                toCompactHex() {
                  return nq(this.toBytes("compact"));
                }
              }
              let w =
                  i.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = oT(nq(e)),
                      i = 8 * e.length - l;
                    return i > 0 ? t >> BigInt(i) : t;
                  },
                b =
                  i.bits2int_modN ||
                  function (e) {
                    return a.create(w(e));
                  },
                v = oL(l);
              function E(e) {
                return oM("num < 2^" + l, e, lk, v), a.toBytes(e);
              }
              function _(e, i) {
                return (
                  ox(e, void 0, "message"),
                  i ? ox(t(e), void 0, "prehashed message") : e
                );
              }
              return Object.freeze({
                keygen: c,
                getPublicKey: h,
                getSharedSecret: d,
                utils: u,
                lengths: p,
                Point: e,
                sign: function (i, n, l = {}) {
                  let { seed: c, k2sig: h } = (function (t, i, s) {
                    if (["recovered", "canonical"].some((e) => e in s))
                      throw Error("sign() legacy options not supported");
                    let { lowS: n, prehash: l, extraEntropy: c } = lC(s, f),
                      h = b((t = _(t, l))),
                      d = lj(a, i),
                      u = [E(d), E(h)];
                    if (null != c && !1 !== c) {
                      let e = !0 === c ? r(p.secretKey) : c;
                      u.push(oj("extraEntropy", e));
                    }
                    return {
                      seed: nF(...u),
                      k2sig: function (t) {
                        let i = w(t);
                        if (!a.isValidNot0(i)) return;
                        let r = a.inv(i),
                          s = e.BASE.multiply(i).toAffine(),
                          l = a.create(s.x);
                        if (l === lk) return;
                        let c = a.create(r * a.create(h + l * d));
                        if (c === lk) return;
                        let u = (2 * (s.x !== l)) | Number(s.y & lT),
                          p = c;
                        return (
                          n && c > o >> lT && ((p = a.neg(c)), (u ^= 1)),
                          new m(l, p, u)
                        );
                      },
                    };
                  })((i = oj("message", i)), n, l);
                  return (function (e, t, i) {
                    if ("number" != typeof e || e < 2)
                      throw Error("hashLen must be a number");
                    if ("number" != typeof t || t < 2)
                      throw Error("qByteLen must be a number");
                    if ("function" != typeof i)
                      throw Error("hmacFn must be a function");
                    let r = (e) => new Uint8Array(e),
                      s = r(e),
                      n = r(e),
                      a = 0,
                      o = () => {
                        s.fill(1), n.fill(0), (a = 0);
                      },
                      l = (...e) => i(n, s, ...e),
                      c = (e = r(0)) => {
                        (n = l(Uint8Array.of(0), e)),
                          (s = l()),
                          0 !== e.length &&
                            ((n = l(Uint8Array.of(1), e)), (s = l()));
                      },
                      h = () => {
                        if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let e = 0,
                          i = [];
                        for (; e < t; ) {
                          let t = (s = l()).slice();
                          i.push(t), (e += s.length);
                        }
                        return nF(...i);
                      };
                    return (e, t) => {
                      let i;
                      for (o(), c(e); !(i = t(h())); ) c();
                      return o(), i;
                    };
                  })(
                    t.outputLen,
                    a.BYTES,
                    s
                  )(c, h);
                },
                verify: function (t, i, r, s = {}) {
                  let { lowS: n, prehash: o, format: l } = lC(s, f);
                  if (
                    ((r = oj("publicKey", r)),
                    (i = _(oj("message", i), o)),
                    "strict" in s)
                  )
                    throw Error("options.strict was renamed to lowS");
                  let c =
                    void 0 === l
                      ? (function (e) {
                          let t,
                            i = "string" == typeof e || nP(e),
                            r =
                              !i &&
                              null !== e &&
                              "object" == typeof e &&
                              "bigint" == typeof e.r &&
                              "bigint" == typeof e.s;
                          if (!i && !r)
                            throw Error(
                              "invalid signature, expected Uint8Array, hex string or Signature instance"
                            );
                          if (r) t = new m(e.r, e.s);
                          else if (i) {
                            try {
                              t = m.fromBytes(oj("sig", e), "der");
                            } catch (e) {
                              if (!(e instanceof lx.Err)) throw e;
                            }
                            if (!t)
                              try {
                                t = m.fromBytes(oj("sig", e), "compact");
                              } catch {
                                return !1;
                              }
                          }
                          return t || !1;
                        })(t)
                      : m.fromBytes(oj("sig", t), l);
                  if (!1 === c) return !1;
                  try {
                    let t = e.fromBytes(r);
                    if (n && c.hasHighS()) return !1;
                    let { r: s, s: o } = c,
                      l = b(i),
                      h = a.inv(o),
                      d = a.create(l * h),
                      u = a.create(s * h),
                      p = e.BASE.multiplyUnsafe(d).add(t.multiplyUnsafe(u));
                    return !p.is0() && a.create(p.x) === s;
                  } catch {
                    return !1;
                  }
                },
                recoverPublicKey: function (e, t, i = {}) {
                  let { prehash: r } = lC(i, f);
                  return (
                    (t = _(t, r)),
                    m.fromBytes(e, "recovered").recoverPublicKey(t).toBytes()
                  );
                },
                Signature: m,
                hash: t,
              });
            })(
              (function (e, t = {}) {
                let i = (function (e, t, i = {}, r) {
                    if (
                      (void 0 === r && (r = "edwards" === e),
                      !t || "object" != typeof t)
                    )
                      throw Error(`expected valid ${e} CURVE object`);
                    for (let e of ["p", "n", "h"]) {
                      let i = t[e];
                      if (!("bigint" == typeof i && i > lt))
                        throw Error(`CURVE.${e} must be positive bigint`);
                    }
                    let s = lp(t.p, i.Fp, r),
                      n = lp(t.n, i.Fn, r);
                    for (let i of [
                      "Gx",
                      "Gy",
                      "a",
                      "weierstrass" === e ? "b" : "d",
                    ])
                      if (!s.isValid(t[i]))
                        throw Error(
                          `CURVE.${i} must be valid field element of CURVE.Fp`
                        );
                    return {
                      CURVE: (t = Object.freeze(Object.assign({}, t))),
                      Fp: s,
                      Fn: n,
                    };
                  })("weierstrass", e, t),
                  { Fp: r, Fn: s } = i,
                  n = i.CURVE,
                  { h: a, n: o } = n;
                oW(
                  t,
                  {},
                  {
                    allowInfinityPoint: "boolean",
                    clearCofactor: "function",
                    isTorsionFree: "function",
                    fromBytes: "function",
                    toBytes: "function",
                    endo: "object",
                    wrapPrivateKey: "boolean",
                  }
                );
                let { endo: l } = t;
                if (
                  l &&
                  (!r.is0(n.a) ||
                    "bigint" != typeof l.beta ||
                    !Array.isArray(l.basises))
                )
                  throw Error(
                    'invalid endo: expected "beta": bigint and "basises": array'
                  );
                let c = lM(r, s);
                function h() {
                  if (!r.isOdd)
                    throw Error(
                      "compression is not supported: Field does not have .isOdd()"
                    );
                }
                let d =
                    t.toBytes ||
                    function (e, t, i) {
                      let { x: s, y: n } = t.toAffine(),
                        a = r.toBytes(s);
                      return (oC(i, "isCompressed"), i)
                        ? (h(), nF(lD(!r.isOdd(n)), a))
                        : nF(Uint8Array.of(4), a, r.toBytes(n));
                    },
                  u =
                    t.fromBytes ||
                    function (e) {
                      ox(e, void 0, "Point");
                      let { publicKey: t, publicKeyUncompressed: i } = c,
                        s = e.length,
                        n = e[0],
                        a = e.subarray(1);
                      if (s === t && (2 === n || 3 === n)) {
                        let e,
                          t = r.fromBytes(a);
                        if (!r.isValid(t))
                          throw Error("bad point: is not on curve, wrong x");
                        let i = p(t);
                        try {
                          e = r.sqrt(i);
                        } catch (e) {
                          throw Error(
                            "bad point: is not on curve, sqrt error" +
                              (e instanceof Error ? ": " + e.message : "")
                          );
                        }
                        return (
                          h(),
                          ((1 & n) == 1) !== r.isOdd(e) && (e = r.neg(e)),
                          { x: t, y: e }
                        );
                      }
                      if (s === i && 4 === n) {
                        let e = r.BYTES,
                          t = r.fromBytes(a.subarray(0, e)),
                          i = r.fromBytes(a.subarray(e, 2 * e));
                        if (!f(t, i)) throw Error("bad point: is not on curve");
                        return { x: t, y: i };
                      }
                      throw Error(
                        `bad point: got length ${s}, expected compressed=${t} or uncompressed=${i}`
                      );
                    };
                function p(e) {
                  let t = r.sqr(e),
                    i = r.mul(t, e);
                  return r.add(r.add(i, r.mul(e, n.a)), n.b);
                }
                function f(e, t) {
                  let i = r.sqr(t),
                    s = p(e);
                  return r.eql(i, s);
                }
                if (!f(n.Gx, n.Gy))
                  throw Error("bad curve params: generator point");
                let g = r.mul(r.pow(n.a, lR), lN),
                  y = r.mul(r.sqr(n.b), BigInt(27));
                if (r.is0(r.add(g, y))) throw Error("bad curve params: a or b");
                function m(e, t, i = !1) {
                  if (!r.isValid(t) || (i && r.is0(t)))
                    throw Error(`bad point coordinate ${e}`);
                  return t;
                }
                function w(e) {
                  if (!(e instanceof I))
                    throw Error("ProjectivePoint expected");
                }
                function b(e) {
                  if (!l || !l.basises) throw Error("no endo");
                  return (function (e, t, i) {
                    let [[r, s], [n, a]] = t,
                      o = lA(a * e, i),
                      l = lA(-s * e, i),
                      c = e - o * r - l * n,
                      h = -o * s - l * a,
                      d = c < lk,
                      u = h < lk;
                    d && (c = -c), u && (h = -h);
                    let p = oL(Math.ceil(oU(i) / 2)) + lT;
                    if (c < lk || c >= p || h < lk || h >= p)
                      throw Error("splitScalar (endomorphism): failed, k=" + e);
                    return { k1neg: d, k1: c, k2neg: u, k2: h };
                  })(e, l.basises, s.ORDER);
                }
                let v = oB((e, t) => {
                    let { X: i, Y: s, Z: n } = e;
                    if (r.eql(n, r.ONE)) return { x: i, y: s };
                    let a = e.is0();
                    null == t && (t = a ? r.ONE : r.inv(n));
                    let o = r.mul(i, t),
                      l = r.mul(s, t),
                      c = r.mul(n, t);
                    if (a) return { x: r.ZERO, y: r.ZERO };
                    if (!r.eql(c, r.ONE)) throw Error("invZ was invalid");
                    return { x: o, y: l };
                  }),
                  E = oB((e) => {
                    if (e.is0()) {
                      if (t.allowInfinityPoint && !r.is0(e.Y)) return;
                      throw Error("bad point: ZERO");
                    }
                    let { x: i, y: s } = e.toAffine();
                    if (!r.isValid(i) || !r.isValid(s))
                      throw Error("bad point: x or y not field elements");
                    if (!f(i, s))
                      throw Error("bad point: equation left != right");
                    if (!e.isTorsionFree())
                      throw Error("bad point: not in prime-order subgroup");
                    return !0;
                  });
                function _(e, t, i, s, n) {
                  return (
                    (i = new I(r.mul(i.X, e), i.Y, i.Z)),
                    (t = lr(s, t)),
                    (i = lr(n, i)),
                    t.add(i)
                  );
                }
                class I {
                  constructor(e, t, i) {
                    (this.X = m("x", e)),
                      (this.Y = m("y", t, !0)),
                      (this.Z = m("z", i)),
                      Object.freeze(this);
                  }
                  static CURVE() {
                    return n;
                  }
                  static fromAffine(e) {
                    let { x: t, y: i } = e || {};
                    if (!e || !r.isValid(t) || !r.isValid(i))
                      throw Error("invalid affine point");
                    if (e instanceof I)
                      throw Error("projective point not allowed");
                    return r.is0(t) && r.is0(i) ? I.ZERO : new I(t, i, r.ONE);
                  }
                  static fromBytes(e) {
                    let t = I.fromAffine(u(ox(e, void 0, "point")));
                    return t.assertValidity(), t;
                  }
                  static fromHex(e) {
                    return I.fromBytes(oj("pointHex", e));
                  }
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  precompute(e = 8, t = !0) {
                    return A.createCache(this, e), t || this.multiply(lR), this;
                  }
                  assertValidity() {
                    E(this);
                  }
                  hasEvenY() {
                    let { y: e } = this.toAffine();
                    if (!r.isOdd) throw Error("Field doesn't support isOdd");
                    return !r.isOdd(e);
                  }
                  equals(e) {
                    w(e);
                    let { X: t, Y: i, Z: s } = this,
                      { X: n, Y: a, Z: o } = e,
                      l = r.eql(r.mul(t, o), r.mul(n, s)),
                      c = r.eql(r.mul(i, o), r.mul(a, s));
                    return l && c;
                  }
                  negate() {
                    return new I(this.X, r.neg(this.Y), this.Z);
                  }
                  double() {
                    let { a: e, b: t } = n,
                      i = r.mul(t, lR),
                      { X: s, Y: a, Z: o } = this,
                      l = r.ZERO,
                      c = r.ZERO,
                      h = r.ZERO,
                      d = r.mul(s, s),
                      u = r.mul(a, a),
                      p = r.mul(o, o),
                      f = r.mul(s, a);
                    return (
                      (f = r.add(f, f)),
                      (h = r.mul(s, o)),
                      (h = r.add(h, h)),
                      (l = r.mul(e, h)),
                      (c = r.mul(i, p)),
                      (c = r.add(l, c)),
                      (l = r.sub(u, c)),
                      (c = r.add(u, c)),
                      (c = r.mul(l, c)),
                      (l = r.mul(f, l)),
                      (h = r.mul(i, h)),
                      (p = r.mul(e, p)),
                      (f = r.sub(d, p)),
                      (f = r.mul(e, f)),
                      (f = r.add(f, h)),
                      (h = r.add(d, d)),
                      (d = r.add(h, d)),
                      (d = r.add(d, p)),
                      (d = r.mul(d, f)),
                      (c = r.add(c, d)),
                      (p = r.mul(a, o)),
                      (p = r.add(p, p)),
                      (d = r.mul(p, f)),
                      (l = r.sub(l, d)),
                      (h = r.mul(p, u)),
                      (h = r.add(h, h)),
                      new I(l, c, (h = r.add(h, h)))
                    );
                  }
                  add(e) {
                    w(e);
                    let { X: t, Y: i, Z: s } = this,
                      { X: a, Y: o, Z: l } = e,
                      c = r.ZERO,
                      h = r.ZERO,
                      d = r.ZERO,
                      u = n.a,
                      p = r.mul(n.b, lR),
                      f = r.mul(t, a),
                      g = r.mul(i, o),
                      y = r.mul(s, l),
                      m = r.add(t, i),
                      b = r.add(a, o);
                    (m = r.mul(m, b)),
                      (b = r.add(f, g)),
                      (m = r.sub(m, b)),
                      (b = r.add(t, s));
                    let v = r.add(a, l);
                    return (
                      (b = r.mul(b, v)),
                      (v = r.add(f, y)),
                      (b = r.sub(b, v)),
                      (v = r.add(i, s)),
                      (c = r.add(o, l)),
                      (v = r.mul(v, c)),
                      (c = r.add(g, y)),
                      (v = r.sub(v, c)),
                      (d = r.mul(u, b)),
                      (c = r.mul(p, y)),
                      (d = r.add(c, d)),
                      (c = r.sub(g, d)),
                      (d = r.add(g, d)),
                      (h = r.mul(c, d)),
                      (g = r.add(f, f)),
                      (g = r.add(g, f)),
                      (y = r.mul(u, y)),
                      (b = r.mul(p, b)),
                      (g = r.add(g, y)),
                      (y = r.sub(f, y)),
                      (y = r.mul(u, y)),
                      (b = r.add(b, y)),
                      (f = r.mul(g, b)),
                      (h = r.add(h, f)),
                      (f = r.mul(v, b)),
                      (c = r.mul(m, c)),
                      (c = r.sub(c, f)),
                      (f = r.mul(m, g)),
                      (d = r.mul(v, d)),
                      new I(c, h, (d = r.add(d, f)))
                    );
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  is0() {
                    return this.equals(I.ZERO);
                  }
                  multiply(e) {
                    let i,
                      r,
                      { endo: n } = t;
                    if (!s.isValidNot0(e))
                      throw Error("invalid scalar: out of range");
                    let a = (e) => A.cached(this, e, (e) => ls(I, e));
                    if (n) {
                      let { k1neg: t, k1: s, k2neg: o, k2: l } = b(e),
                        { p: c, f: h } = a(s),
                        { p: d, f: u } = a(l);
                      (r = h.add(u)), (i = _(n.beta, c, d, t, o));
                    } else {
                      let { p: t, f: s } = a(e);
                      (i = t), (r = s);
                    }
                    return ls(I, [i, r])[0];
                  }
                  multiplyUnsafe(e) {
                    let { endo: i } = t;
                    if (!s.isValid(e))
                      throw Error("invalid scalar: out of range");
                    if (e === lk || this.is0()) return I.ZERO;
                    if (e === lT) return this;
                    if (A.hasCache(this)) return this.multiply(e);
                    if (!i) return A.unsafe(this, e);
                    {
                      let { k1neg: t, k1: r, k2neg: s, k2: n } = b(e),
                        { p1: a, p2: o } = (function (e, t, i, r) {
                          let s = t,
                            n = e.ZERO,
                            a = e.ZERO;
                          for (; i > lt || r > lt; )
                            i & li && (n = n.add(s)),
                              r & li && (a = a.add(s)),
                              (s = s.double()),
                              (i >>= li),
                              (r >>= li);
                          return { p1: n, p2: a };
                        })(I, this, r, n);
                      return _(i.beta, a, o, t, s);
                    }
                  }
                  multiplyAndAddUnsafe(e, t, i) {
                    let r = this.multiplyUnsafe(t).add(e.multiplyUnsafe(i));
                    return r.is0() ? void 0 : r;
                  }
                  toAffine(e) {
                    return v(this, e);
                  }
                  isTorsionFree() {
                    let { isTorsionFree: e } = t;
                    return (
                      a === lT || (e ? e(I, this) : A.unsafe(this, o).is0())
                    );
                  }
                  clearCofactor() {
                    let { clearCofactor: e } = t;
                    return a === lT
                      ? this
                      : e
                      ? e(I, this)
                      : this.multiplyUnsafe(a);
                  }
                  isSmallOrder() {
                    return this.multiplyUnsafe(a).is0();
                  }
                  toBytes(e = !0) {
                    return (
                      oC(e, "isCompressed"),
                      this.assertValidity(),
                      d(I, this, e)
                    );
                  }
                  toHex(e = !0) {
                    return nq(this.toBytes(e));
                  }
                  toString() {
                    return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                  }
                  get px() {
                    return this.X;
                  }
                  get py() {
                    return this.X;
                  }
                  get pz() {
                    return this.Z;
                  }
                  toRawBytes(e = !0) {
                    return this.toBytes(e);
                  }
                  _setWindowSize(e) {
                    this.precompute(e);
                  }
                  static normalizeZ(e) {
                    return ls(I, e);
                  }
                  static msm(e, t) {
                    return (function (e, t, i, r) {
                      (function (e, t) {
                        if (!Array.isArray(e)) throw Error("array expected");
                        e.forEach((e, i) => {
                          if (!(e instanceof t))
                            throw Error("invalid point at index " + i);
                        });
                      })(i, e),
                        (function (e, t) {
                          if (!Array.isArray(e))
                            throw Error("array of scalars expected");
                          e.forEach((e, i) => {
                            if (!t.isValid(e))
                              throw Error("invalid scalar at index " + i);
                          });
                        })(r, t);
                      let s = i.length,
                        n = r.length;
                      if (s !== n)
                        throw Error(
                          "arrays of points and scalars must have equal length"
                        );
                      let a = e.ZERO,
                        o = oU(BigInt(s)),
                        l = 1;
                      o > 12
                        ? (l = o - 3)
                        : o > 4
                        ? (l = o - 2)
                        : o > 0 && (l = 2);
                      let c = oL(l),
                        h = Array(Number(c) + 1).fill(a),
                        d = Math.floor((t.BITS - 1) / l) * l,
                        u = a;
                      for (let e = d; e >= 0; e -= l) {
                        h.fill(a);
                        for (let t = 0; t < n; t++) {
                          let s = Number((r[t] >> BigInt(e)) & c);
                          h[s] = h[s].add(i[t]);
                        }
                        let t = a;
                        for (let e = h.length - 1, i = a; e > 0; e--)
                          (i = i.add(h[e])), (t = t.add(i));
                        if (((u = u.add(t)), 0 !== e))
                          for (let e = 0; e < l; e++) u = u.double();
                      }
                      return u;
                    })(I, s, e, t);
                  }
                  static fromPrivateKey(e) {
                    return I.BASE.multiply(lj(s, e));
                  }
                }
                (I.BASE = new I(n.Gx, n.Gy, r.ONE)),
                  (I.ZERO = new I(r.ZERO, r.ONE, r.ZERO)),
                  (I.Fp = r),
                  (I.Fn = s);
                let S = s.BITS,
                  A = new lu(I, t.endo ? Math.ceil(S / 2) : S);
                return I.BASE.precompute(8), I;
              })(i, r),
              s,
              n
            );
          return (
            (t = a.Point),
            Object.assign({}, a, {
              ProjectivePoint: t,
              CURVE: Object.assign({}, e, o4(t.Fn.ORDER, t.Fn.BITS)),
            })
          );
        })({ ...e, hash: t });
      return { ...i(t), create: i };
    }
    let lL = {
        p: BigInt(
          "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
        ),
        n: BigInt(
          "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
        ),
        h: BigInt(1),
        a: BigInt(
          "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
        ),
        b: BigInt(
          "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
        ),
        Gx: BigInt(
          "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
        ),
        Gy: BigInt(
          "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
        ),
      },
      lW = {
        p: BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
        ),
        n: BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
        ),
        h: BigInt(1),
        a: BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
        ),
        b: BigInt(
          "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
        ),
        Gx: BigInt(
          "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
        ),
        Gy: BigInt(
          "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
        ),
      },
      lB = {
        p: BigInt(
          "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        n: BigInt(
          "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
        ),
        h: BigInt(1),
        a: BigInt(
          "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
        ),
        b: BigInt(
          "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
        ),
        Gx: BigInt(
          "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
        ),
        Gy: BigInt(
          "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
        ),
      },
      lK = o7(lL.p),
      lq = o7(lW.p),
      lH = o7(lB.p),
      l$ = lU({ ...lL, Fp: lK, lowS: !1 }, ab);
    lU({ ...lW, Fp: lq, lowS: !1 }, aE),
      lU(
        { ...lB, Fp: lH, lowS: !1, allowedPrivateKeyLengths: [130, 131, 132] },
        av
      );
    let lJ = "base10",
      lz = "base16",
      lF = "base64pad",
      lV = "base64url",
      lG = "utf8";
    function lY() {
      let e = nY(32);
      return (0, si.toString)(e, lz);
    }
    function lZ(e) {
      let t = ab((0, sr.fromString)(e, lz));
      return (0, si.toString)(t, lz);
    }
    function lQ(e) {
      let t = ab((0, sr.fromString)(e, lG));
      return (0, si.toString)(t, lz);
    }
    function lX(e) {
      return (0, sr.fromString)(`${e}`, lJ);
    }
    function l0(e) {
      return Number((0, si.toString)(e, lJ));
    }
    function l1(e) {
      return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    function l2(e) {
      let t = e.replace(/-/g, "+").replace(/_/g, "/"),
        i = (4 - (t.length % 4)) % 4;
      return t + "=".repeat(i);
    }
    function l5(e) {
      if (2 === l0(e.type))
        return (0, si.toString)((0, ss.concat)([e.type, e.sealed]), lF);
      if (1 === l0(e.type)) {
        if (typeof e.senderPublicKey > "u")
          throw Error("Missing sender public key for type 1 envelope");
        return (0, si.toString)(
          (0, ss.concat)([e.type, e.senderPublicKey, e.iv, e.sealed]),
          lF
        );
      }
      return (0, si.toString)((0, ss.concat)([e.type, e.iv, e.sealed]), lF);
    }
    function l3(e) {
      let t = (e.encoding || lF) === lV ? l2(e.encoded) : e.encoded,
        i = (0, sr.fromString)(t, lF),
        r = i.slice(0, 1);
      if (1 === l0(r)) {
        let e = i.slice(1, 33),
          t = i.slice(33, 45);
        return { type: r, sealed: i.slice(45), iv: t, senderPublicKey: e };
      }
      if (2 === l0(r)) return { type: r, sealed: i.slice(1), iv: nY(12) };
      let s = i.slice(1, 13);
      return { type: r, sealed: i.slice(13), iv: s };
    }
    function l8(e) {
      let t = e?.type || 0;
      if (1 === t) {
        if (typeof e?.senderPublicKey > "u")
          throw Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u")
          throw Error("missing receiver public key");
      }
      return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey,
      };
    }
    function l6(e) {
      return (
        1 === e.type &&
        "string" == typeof e.senderPublicKey &&
        "string" == typeof e.receiverPublicKey
      );
    }
    function l4(e) {
      return e?.relay || { protocol: "irn" };
    }
    function l7(e) {
      let t = sn.RELAY_JSONRPC[e];
      if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
      return t;
    }
    var l9 = Object.defineProperty,
      ce = Object.defineProperties,
      ct = Object.getOwnPropertyDescriptors,
      ci = Object.getOwnPropertySymbols,
      cr = Object.prototype.hasOwnProperty,
      cs = Object.prototype.propertyIsEnumerable,
      cn = (e, t, i) =>
        t in e
          ? l9(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      ca = (e, t) => {
        for (var i in t || (t = {})) cr.call(t, i) && cn(e, i, t[i]);
        if (ci) for (var i of ci(t)) cs.call(t, i) && cn(e, i, t[i]);
        return e;
      };
    function co(e) {
      var t;
      if (!e.includes("wc:")) {
        let t = na(e);
        null != t && t.includes("wc:") && (e = t);
      }
      let i = (e = (e = e.includes("wc://")
          ? e.replace("wc://", "")
          : e).includes("wc:")
          ? e.replace("wc:", "")
          : e).indexOf(":"),
        r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
        s = e.substring(0, i),
        n = e.substring(i + 1, r).split("@"),
        a = Object.fromEntries(
          new URLSearchParams("u" > typeof r ? e.substring(r) : "").entries()
        ),
        o = "string" == typeof a.methods ? a.methods.split(",") : void 0;
      return {
        protocol: s,
        topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
        version: parseInt(n[1], 10),
        symKey: a.symKey,
        relay: (function (e, t = "-") {
          let i = {},
            r = "relay" + t;
          return (
            Object.keys(e).forEach((t) => {
              if (t.startsWith(r)) {
                let s = t.replace(r, ""),
                  n = e[t];
                i[s] = n;
              }
            }),
            i
          );
        })(a),
        methods: o,
        expiryTimestamp: a.expiryTimestamp
          ? parseInt(a.expiryTimestamp, 10)
          : void 0,
      };
    }
    function cl(e) {
      let t = new URLSearchParams();
      return (
        Object.entries(
          ca(
            ca(
              ce(
                ca(
                  {},
                  (function (e, t = "-") {
                    let i = {};
                    return (
                      Object.keys(e).forEach((r) => {
                        e[r] && (i["relay" + t + r] = e[r]);
                      }),
                      i
                    );
                  })(e.relay)
                ),
                ct({ symKey: e.symKey })
              ),
              e.expiryTimestamp && {
                expiryTimestamp: e.expiryTimestamp.toString(),
              }
            ),
            e.methods && { methods: e.methods.join(",") }
          )
        )
          .sort(([e], [t]) => e.localeCompare(t))
          .forEach(([e, i]) => {
            void 0 !== i && t.append(e, String(i));
          }),
        `${e.protocol}:${e.topic}@${e.version}?${t}`
      );
    }
    function cc(e, t, i) {
      return `${e}?wc_ev=${i}&topic=${t}`;
    }
    var ch = Object.defineProperty,
      cd = Object.defineProperties,
      cu = Object.getOwnPropertyDescriptors,
      cp = Object.getOwnPropertySymbols,
      cf = Object.prototype.hasOwnProperty,
      cg = Object.prototype.propertyIsEnumerable,
      cy = (e, t, i) =>
        t in e
          ? ch(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      cm = (e, t) => {
        for (var i in t || (t = {})) cf.call(t, i) && cy(e, i, t[i]);
        if (cp) for (var i of cp(t)) cg.call(t, i) && cy(e, i, t[i]);
        return e;
      },
      cw = (e, t) => cd(e, cu(t));
    function cb(e) {
      let t = [];
      return (
        e.forEach((e) => {
          let [i, r] = e.split(":");
          t.push(`${i}:${r}`);
        }),
        t
      );
    }
    function cv(e) {
      return e.includes(":");
    }
    function cE(e) {
      return cv(e) ? e.split(":")[0] : e;
    }
    function c_(e) {
      var t, i, r;
      let s = {};
      if (!ck(e)) return s;
      for (let [n, a] of Object.entries(e)) {
        let e = cv(n) ? [n] : a.chains,
          o = a.methods || [],
          l = a.events || [],
          c = cE(n);
        s[c] = cw(cm({}, s[c]), {
          chains: ne(e, null == (t = s[c]) ? void 0 : t.chains),
          methods: ne(o, null == (i = s[c]) ? void 0 : i.methods),
          events: ne(l, null == (r = s[c]) ? void 0 : r.events),
        });
      }
      return s;
    }
    function cI(e, t) {
      var i;
      let r,
        s =
          ((i = t = t.map((e) => e.replace("did:pkh:", ""))),
          (r = {}),
          i?.forEach((e) => {
            var t;
            let [i, s] = e.split(":");
            r[i] ||
              (r[i] = { accounts: [], chains: [], events: [], methods: [] }),
              r[i].accounts.push(e),
              null == (t = r[i].chains) || t.push(`${i}:${s}`);
          }),
          r);
      for (let [t, i] of Object.entries(s))
        i.methods ? (i.methods = ne(i.methods, e)) : (i.methods = e),
          (i.events = ["chainChanged", "accountsChanged"]);
      return s;
    }
    let cS = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      },
      cA = {
        NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
        NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
        RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
        RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
        MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
        EXPIRED: { message: "Expired.", code: 6 },
        UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
        MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
        NON_CONFORMING_NAMESPACES: {
          message: "Non conforming namespaces.",
          code: 9,
        },
      };
    function cP(e, t) {
      let { message: i, code: r } = cA[e];
      return { message: t ? `${i} ${t}` : i, code: r };
    }
    function cC(e, t) {
      let { message: i, code: r } = cS[e];
      return { message: t ? `${i} ${t}` : i, code: r };
    }
    function cx(e, t) {
      return (
        !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
      );
    }
    function ck(e) {
      return (
        Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
      );
    }
    function cT(e) {
      return typeof e > "u";
    }
    function cO(e, t) {
      return !!(t && cT(e)) || ("string" == typeof e && !!e.trim().length);
    }
    function cR(e, t) {
      return !!(t && cT(e)) || ("number" == typeof e && !isNaN(e));
    }
    function cN(e) {
      return !!(cO(e, !1) && e.includes(":")) && 2 === e.split(":").length;
    }
    function cj(e) {
      let t = !0;
      return cx(e) ? e.length && (t = e.every((e) => cO(e, !1))) : (t = !1), t;
    }
    function cD(e, t) {
      let i = null;
      return (
        Object.values(e).forEach((e) => {
          var r;
          let s;
          if (i) return;
          let n =
            ((r = `${t}, namespace`),
            (s = null),
            cj(e?.methods)
              ? cj(e?.events) ||
                (s = cC(
                  "UNSUPPORTED_EVENTS",
                  `${r}, events should be an array of strings or empty array for no events`
                ))
              : (s = cC(
                  "UNSUPPORTED_METHODS",
                  `${r}, methods should be an array of strings or empty array for no methods`
                )),
            s);
          n && (i = n);
        }),
        i
      );
    }
    function cM(e, t) {
      let i = null;
      if (e && ck(e)) {
        let r,
          s = cD(e, t);
        s && (i = s);
        let n =
          ((r = null),
          Object.values(e).forEach((e) => {
            var i, s;
            let n;
            if (r) return;
            let a =
              ((i = e?.accounts),
              (s = `${t} namespace`),
              (n = null),
              cx(i)
                ? i.forEach((e) => {
                    n ||
                      (function (e) {
                        if (cO(e, !1) && e.includes(":")) {
                          let t = e.split(":");
                          if (3 === t.length) {
                            let e = t[0] + ":" + t[1];
                            return !!t[2] && cN(e);
                          }
                        }
                        return !1;
                      })(e) ||
                      (n = cC(
                        "UNSUPPORTED_ACCOUNTS",
                        `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                      ));
                  })
                : (n = cC(
                    "UNSUPPORTED_ACCOUNTS",
                    `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                  )),
              n);
            a && (r = a);
          }),
          r);
        n && (i = n);
      } else
        i = cP(
          "MISSING_OR_INVALID",
          `${t}, namespaces should be an object with data`
        );
      return i;
    }
    function cU(e) {
      return cO(e.protocol, !0);
    }
    function cL(e) {
      return "u" > typeof e;
    }
    function cW(e, t) {
      let i;
      return !(
        !cN(t) ||
        !((i = []),
        Object.values(e).forEach((e) => {
          i.push(...cb(e.accounts));
        }),
        i).includes(t)
      );
    }
    function cB(e, t, i) {
      var r, s;
      let n,
        a,
        o = null,
        l =
          ((n = {}),
          Object.keys((r = e)).forEach((e) => {
            var t;
            e.includes(":")
              ? (n[e] = r[e])
              : null == (t = r[e].chains) ||
                t.forEach((t) => {
                  n[t] = { methods: r[e].methods, events: r[e].events };
                });
          }),
          n),
        c =
          ((a = {}),
          Object.keys((s = t)).forEach((e) => {
            if (e.includes(":")) a[e] = s[e];
            else {
              let t = cb(s[e].accounts);
              t?.forEach((t) => {
                a[t] = {
                  accounts: s[e].accounts.filter((e) => e.includes(`${t}:`)),
                  methods: s[e].methods,
                  events: s[e].events,
                };
              });
            }
          }),
          a),
        h = Object.keys(l),
        d = Object.keys(c),
        u = cK(Object.keys(e)),
        p = cK(Object.keys(t)),
        f = u.filter((e) => !p.includes(e));
      return (
        f.length &&
          (o = cP(
            "NON_CONFORMING_NAMESPACES",
            `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(t).toString()}`
          )),
        s0(h, d) ||
          (o = cP(
            "NON_CONFORMING_NAMESPACES",
            `${i} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${d.toString()}`
          )),
        Object.keys(t).forEach((e) => {
          if (!e.includes(":") || o) return;
          let r = cb(t[e].accounts);
          r.includes(e) ||
            (o = cP(
              "NON_CONFORMING_NAMESPACES",
              `${i} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${r.toString()}`
            ));
        }),
        h.forEach((e) => {
          o ||
            (s0(l[e].methods, c[e].methods)
              ? s0(l[e].events, c[e].events) ||
                (o = cP(
                  "NON_CONFORMING_NAMESPACES",
                  `${i} namespaces events don't satisfy namespace events for ${e}`
                ))
              : (o = cP(
                  "NON_CONFORMING_NAMESPACES",
                  `${i} namespaces methods don't satisfy namespace methods for ${e}`
                )));
        }),
        o
      );
    }
    function cK(e) {
      return [
        ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
      ];
    }
    function cq() {
      let e = sY();
      return new Promise((t) => {
        switch (e) {
          case sz:
            t(sG() && navigator?.onLine);
            break;
          case s$:
            t(cH());
            break;
          default:
            t(!0);
        }
      });
    }
    async function cH() {
      if (sV() && null != e.g && e.g.NetInfo) {
        let t = await (null == e.g ? void 0 : e.g.NetInfo.fetch());
        return t?.isConnected;
      }
      return !0;
    }
    let c$ = {};
    class cJ {
      static get(e) {
        return c$[e];
      }
      static set(e, t) {
        c$[e] = t;
      }
      static delete(e) {
        delete c$[e];
      }
    }
    function cz(e) {
      return new Uint8Array(
        e
          .replace(/^0x/, "")
          .match(/.{1,2}/g)
          .map((e) => parseInt(e, 16))
      );
    }
    function cF({ logger: e, name: t }) {
      let i =
        "string" == typeof e ? sO({ opts: { level: e, name: t } }).logger : e;
      return (i.level = "string" == typeof e ? e : e.level), i;
    }
    var cV = e.i(288923),
      cG = e.i(13297);
    e.i(17055);
    var cY = e.i(732078),
      cZ = Object.defineProperty,
      cQ = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? cZ(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class cX extends cY.IEvents {
      constructor(e) {
        super(),
          (this.opts = e),
          cQ(this, "protocol", "wc"),
          cQ(this, "version", 2);
      }
    }
    var c0 = Object.defineProperty;
    class c1 extends cY.IEvents {
      constructor(e, t) {
        super(),
          (this.core = e),
          (this.logger = t),
          ((e, t, i) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e
              ? c0(e, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[r] = i);
          })(this, "records", new Map());
      }
    }
    class c2 {
      constructor(e, t) {
        (this.logger = e), (this.core = t);
      }
    }
    class c5 extends cY.IEvents {
      constructor(e, t) {
        super(), (this.relayer = e), (this.logger = t);
      }
    }
    class c3 extends cY.IEvents {
      constructor(e) {
        super();
      }
    }
    class c8 {
      constructor(e, t, i, r) {
        (this.core = e), (this.logger = t), (this.name = i);
      }
    }
    class c6 extends cY.IEvents {
      constructor(e, t) {
        super(), (this.relayer = e), (this.logger = t);
      }
    }
    class c4 extends cY.IEvents {
      constructor(e, t) {
        super(), (this.core = e), (this.logger = t);
      }
    }
    class c7 {
      constructor(e, t, i) {
        (this.core = e), (this.logger = t), (this.store = i);
      }
    }
    class c9 {
      constructor(e, t) {
        (this.projectId = e), (this.logger = t);
      }
    }
    class he {
      constructor(e, t, i) {
        (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
      }
    }
    var ht = Object.defineProperty,
      hi = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? ht(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    iD.default;
    class hr {
      constructor(e) {
        (this.opts = e), hi(this, "protocol", "wc"), hi(this, "version", 2);
      }
    }
    iD.EventEmitter;
    class hs {
      constructor(e) {
        this.client = e;
      }
    }
    var hn = e.i(502918);
    e.i(276551);
    var ha = e.i(430110),
      ho = e.i(420509),
      hl = e.i(245526);
    let hc = "core",
      hh = `wc@2:${hc}:`,
      hd = { database: ":memory:" },
      hu = "client_ed25519_seed",
      hp = iL.ONE_DAY,
      hf = iL.SIX_HOURS,
      hg = "wss://relay.walletconnect.org",
      hy = "relayer_message",
      hm = "relayer_message_ack",
      hw = "relayer_connection_stalled",
      hb = "relayer_publish",
      hv = "payload",
      hE = "connect",
      h_ = "disconnect",
      hI = "error",
      hS = "2.22.4",
      hA = "link_mode",
      hP = "relay",
      hC = "inbound",
      hx = "WALLETCONNECT_LINK_MODE_APPS",
      hk = "subscription_created",
      hT = "subscription_deleted",
      hO =
        (iL.THIRTY_DAYS,
        iL.FIVE_SECONDS,
        iL.THIRTY_DAYS,
        {
          wc_pairingDelete: {
            req: { ttl: iL.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: iL.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: iL.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: iL.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: iL.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: iL.ONE_DAY, prompt: !1, tag: 0 },
          },
        }),
      hR = "pairing_create",
      hN = "pairing_delete",
      hj = "history_created",
      hD = "history_updated",
      hM = "history_deleted",
      hU = "expirer_created",
      hL = "expirer_deleted",
      hW = "expirer_expired",
      hB = (iL.ONE_DAY, "https://verify.walletconnect.org"),
      hK = `${hB}/v3`,
      hq = ["https://verify.walletconnect.com", hB],
      hH = "malformed_pairing_uri",
      h$ = "session_approve_started";
    var hJ = function (e, t) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
      for (var s = 0; s < e.length; s++) {
        var n = e.charAt(s),
          a = n.charCodeAt(0);
        if (255 !== i[a]) throw TypeError(n + " is ambiguous");
        i[a] = s;
      }
      var o = e.length,
        l = e.charAt(0),
        c = Math.log(o) / Math.log(256),
        h = Math.log(256) / Math.log(o);
      function d(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return new Uint8Array();
        var t = 0;
        if (" " !== e[0]) {
          for (var r = 0, s = 0; e[t] === l; ) r++, t++;
          for (
            var n = ((e.length - t) * c + 1) >>> 0, a = new Uint8Array(n);
            e[t];

          ) {
            var h = i[e.charCodeAt(t)];
            if (255 === h) return;
            for (var d = 0, u = n - 1; (0 !== h || d < s) && -1 !== u; u--, d++)
              (h += (o * a[u]) >>> 0),
                (a[u] = h % 256 >>> 0),
                (h = (h / 256) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (s = d), t++;
          }
          if (" " !== e[t]) {
            for (var p = n - s; p !== n && 0 === a[p]; ) p++;
            for (var f = new Uint8Array(r + (n - p)), g = r; p !== n; )
              f[g++] = a[p++];
            return f;
          }
        }
      }
      return {
        encode: function (t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          for (var i = 0, r = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
            s++, i++;
          for (
            var a = ((n - s) * h + 1) >>> 0, c = new Uint8Array(a);
            s !== n;

          ) {
            for (
              var d = t[s], u = 0, p = a - 1;
              (0 !== d || u < r) && -1 !== p;
              p--, u++
            )
              (d += (256 * c[p]) >>> 0),
                (c[p] = d % o >>> 0),
                (d = (d / o) >>> 0);
            if (0 !== d) throw Error("Non-zero carry");
            (r = u), s++;
          }
          for (var f = a - r; f !== a && 0 === c[f]; ) f++;
          for (var g = l.repeat(i); f < a; ++f) g += e.charAt(c[f]);
          return g;
        },
        decodeUnsafe: d,
        decode: function (e) {
          var i = d(e);
          if (i) return i;
          throw Error(`Non-${t} character`);
        },
      };
    };
    let hz = (e) => {
      if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
        return e;
      if (e instanceof ArrayBuffer) return new Uint8Array(e);
      if (ArrayBuffer.isView(e))
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      throw Error("Unknown type, must be binary type");
    };
    class hF {
      constructor(e, t, i) {
        (this.name = e), (this.prefix = t), (this.baseEncode = i);
      }
      encode(e) {
        if (e instanceof Uint8Array)
          return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
      }
    }
    class hV {
      constructor(e, t, i) {
        if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
          throw Error("Invalid prefix character");
        (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
      }
      decode(e) {
        if ("string" == typeof e) {
          if (e.codePointAt(0) !== this.prefixCodePoint)
            throw Error(
              `Unable to decode multibase string ${JSON.stringify(e)}, ${
                this.name
              } decoder only supports inputs prefixed with ${this.prefix}`
            );
          return this.baseDecode(e.slice(this.prefix.length));
        }
        throw Error("Can only multibase decode strings");
      }
      or(e) {
        return hY(this, e);
      }
    }
    class hG {
      constructor(e) {
        this.decoders = e;
      }
      or(e) {
        return hY(this, e);
      }
      decode(e) {
        let t = e[0],
          i = this.decoders[t];
        if (i) return i.decode(e);
        throw RangeError(
          `Unable to decode multibase string ${JSON.stringify(
            e
          )}, only inputs prefixed with ${Object.keys(
            this.decoders
          )} are supported`
        );
      }
    }
    let hY = (e, t) =>
      new hG({
        ...(e.decoders || { [e.prefix]: e }),
        ...(t.decoders || { [t.prefix]: t }),
      });
    class hZ {
      constructor(e, t, i, r) {
        (this.name = e),
          (this.prefix = t),
          (this.baseEncode = i),
          (this.baseDecode = r),
          (this.encoder = new hF(e, t, i)),
          (this.decoder = new hV(e, t, r));
      }
      encode(e) {
        return this.encoder.encode(e);
      }
      decode(e) {
        return this.decoder.decode(e);
      }
    }
    let hQ = ({ name: e, prefix: t, encode: i, decode: r }) =>
        new hZ(e, t, i, r),
      hX = ({ prefix: e, name: t, alphabet: i }) => {
        let { encode: r, decode: s } = hJ(i, t);
        return hQ({ prefix: e, name: t, encode: r, decode: (e) => hz(s(e)) });
      },
      h0 = ({ name: e, prefix: t, bitsPerChar: i, alphabet: r }) =>
        hQ({
          prefix: t,
          name: e,
          encode: (e) =>
            ((e, t, i) => {
              let r = "=" === t[t.length - 1],
                s = (1 << i) - 1,
                n = "",
                a = 0,
                o = 0;
              for (let r = 0; r < e.length; ++r)
                for (o = (o << 8) | e[r], a += 8; a > i; )
                  (a -= i), (n += t[s & (o >> a)]);
              if ((a && (n += t[s & (o << (i - a))]), r))
                for (; (n.length * i) & 7; ) n += "=";
              return n;
            })(e, r, i),
          decode: (t) =>
            ((e, t, i, r) => {
              let s = {};
              for (let e = 0; e < t.length; ++e) s[t[e]] = e;
              let n = e.length;
              for (; "=" === e[n - 1]; ) --n;
              let a = new Uint8Array(((n * i) / 8) | 0),
                o = 0,
                l = 0,
                c = 0;
              for (let t = 0; t < n; ++t) {
                let n = s[e[t]];
                if (void 0 === n) throw SyntaxError(`Non-${r} character`);
                (l = (l << i) | n),
                  (o += i) >= 8 && ((o -= 8), (a[c++] = 255 & (l >> o)));
              }
              if (o >= i || 255 & (l << (8 - o)))
                throw SyntaxError("Unexpected end of data");
              return a;
            })(t, r, i, e),
        });
    var h1 = Object.freeze({
        __proto__: null,
        identity: hQ({
          prefix: "\0",
          name: "identity",
          encode: (e) => new TextDecoder().decode(e),
          decode: (e) => new TextEncoder().encode(e),
        }),
      }),
      h2 = Object.freeze({
        __proto__: null,
        base2: h0({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1,
        }),
      }),
      h5 = Object.freeze({
        __proto__: null,
        base8: h0({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
      }),
      h3 = Object.freeze({
        __proto__: null,
        base10: hX({ prefix: "9", name: "base10", alphabet: "0123456789" }),
      }),
      h8 = Object.freeze({
        __proto__: null,
        base16: h0({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        base16upper: h0({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
      }),
      h6 = Object.freeze({
        __proto__: null,
        base32: h0({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        base32upper: h0({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        base32pad: h0({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        base32padupper: h0({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        base32hex: h0({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        base32hexupper: h0({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        base32hexpad: h0({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        base32hexpadupper: h0({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        base32z: h0({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
      }),
      h4 = Object.freeze({
        __proto__: null,
        base36: hX({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        base36upper: hX({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
      }),
      h7 = Object.freeze({
        __proto__: null,
        base58btc: hX({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        base58flickr: hX({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
      }),
      h9 = Object.freeze({
        __proto__: null,
        base64: h0({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        base64pad: h0({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        base64url: h0({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: h0({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
    let de = Array.from(
        "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
      ),
      dt = de.reduce((e, t, i) => ((e[i] = t), e), []),
      di = de.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
    var dr = Object.freeze({
      __proto__: null,
      base256emoji: hQ({
        prefix: "🚀",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += dt[t]), "");
        },
        decode: function (e) {
          let t = [];
          for (let i of e) {
            let e = di[i.codePointAt(0)];
            if (void 0 === e) throw Error(`Non-base256emoji character: ${i}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      }),
    });
    function ds(e, t, i) {
      (t = t || []), (i = i || 0);
      for (var r = i; e >= 0x80000000; ) (t[i++] = (255 & e) | 128), (e /= 128);
      for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
      return (t[i] = 0 | e), (ds.bytes = i - r + 1), t;
    }
    var dn = function (e) {
      return e < 128
        ? 1
        : e < 16384
        ? 2
        : e < 2097152
        ? 3
        : e < 0x10000000
        ? 4
        : e < 0x800000000
        ? 5
        : e < 0x40000000000
        ? 6
        : e < 0x2000000000000
        ? 7
        : e < 0x100000000000000
        ? 8
        : e < 0x8000000000000000
        ? 9
        : 10;
    };
    let da = (e, t, i = 0) => (ds(e, t, i), t),
      dl = (e, t) => {
        let i = t.byteLength,
          r = dn(e),
          s = r + dn(i),
          n = new Uint8Array(s + i);
        return da(e, n, 0), da(i, n, r), n.set(t, s), new dc(e, i, t, n);
      };
    class dc {
      constructor(e, t, i, r) {
        (this.code = e), (this.size = t), (this.digest = i), (this.bytes = r);
      }
    }
    let dh = ({ name: e, code: t, encode: i }) => new dd(e, t, i);
    class dd {
      constructor(e, t, i) {
        (this.name = e), (this.code = t), (this.encode = i);
      }
      digest(e) {
        if (e instanceof Uint8Array) {
          let t = this.encode(e);
          return t instanceof Uint8Array
            ? dl(this.code, t)
            : t.then((e) => dl(this.code, e));
        }
        throw Error("Unknown type, must be binary type");
      }
    }
    let du = (e) => async (t) =>
      new Uint8Array(await crypto.subtle.digest(e, t));
    var dp = Object.freeze({
        __proto__: null,
        sha256: dh({ name: "sha2-256", code: 18, encode: du("SHA-256") }),
        sha512: dh({ name: "sha2-512", code: 19, encode: du("SHA-512") }),
      }),
      df = Object.freeze({
        __proto__: null,
        identity: {
          code: 0,
          name: "identity",
          encode: hz,
          digest: (e) => dl(0, hz(e)),
        },
      });
    new TextEncoder(), new TextDecoder();
    let dg = {
      ...h1,
      ...h2,
      ...h5,
      ...h3,
      ...h8,
      ...h6,
      ...h4,
      ...h7,
      ...h9,
      ...dr,
    };
    function dy(e) {
      return null != globalThis.Buffer
        ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
        : e;
    }
    function dm(e, t, i, r) {
      return {
        name: e,
        prefix: t,
        encoder: { name: e, prefix: t, encode: i },
        decoder: { decode: r },
      };
    }
    ({ ...dp, ...df });
    let dw = dm(
        "utf8",
        "u",
        (e) => "u" + new TextDecoder("utf8").decode(e),
        (e) => new TextEncoder().encode(e.substring(1))
      ),
      db = dm(
        "ascii",
        "a",
        (e) => {
          let t = "a";
          for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
          return t;
        },
        (e) => {
          let t = (function (e = 0) {
            return null != globalThis.Buffer &&
              null != globalThis.Buffer.allocUnsafe
              ? dy(globalThis.Buffer.allocUnsafe(e))
              : new Uint8Array(e);
          })((e = e.substring(1)).length);
          for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
          return t;
        }
      ),
      dv = {
        utf8: dw,
        "utf-8": dw,
        hex: dg.base16,
        latin1: db,
        ascii: db,
        binary: db,
        ...dg,
      };
    var dE = Object.defineProperty,
      d_ = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? dE(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class dI {
      constructor(e, t) {
        (this.core = e),
          (this.logger = t),
          d_(this, "keychain", new Map()),
          d_(this, "name", "keychain"),
          d_(this, "version", "0.3"),
          d_(this, "initialized", !1),
          d_(this, "storagePrefix", hh),
          d_(this, "init", async () => {
            if (!this.initialized) {
              let e = await this.getKeyChain();
              "u" > typeof e && (this.keychain = e), (this.initialized = !0);
            }
          }),
          d_(this, "has", (e) => (this.isInitialized(), this.keychain.has(e))),
          d_(this, "set", async (e, t) => {
            this.isInitialized(), this.keychain.set(e, t), await this.persist();
          }),
          d_(this, "get", (e) => {
            this.isInitialized();
            let t = this.keychain.get(e);
            if (typeof t > "u") {
              let { message: t } = cP("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw Error(t);
            }
            return t;
          }),
          d_(this, "del", async (e) => {
            this.isInitialized(), this.keychain.delete(e), await this.persist();
          }),
          (this.core = e),
          (this.logger = sT(t, this.name));
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, s1(e));
      }
      async getKeyChain() {
        let e = await this.core.storage.getItem(this.storageKey);
        return "u" > typeof e ? s2(e) : void 0;
      }
      async persist() {
        await this.setKeyChain(this.keychain);
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var dS = Object.defineProperty,
      dA = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? dS(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class dP {
      constructor(e, t, i) {
        (this.core = e),
          (this.logger = t),
          dA(this, "name", "crypto"),
          dA(this, "keychain"),
          dA(this, "randomSessionIdentifier", lY()),
          dA(this, "initialized", !1),
          dA(this, "clientId"),
          dA(this, "init", async () => {
            this.initialized ||
              (await this.keychain.init(), (this.initialized = !0));
          }),
          dA(
            this,
            "hasKeys",
            (e) => (this.isInitialized(), this.keychain.has(e))
          ),
          dA(this, "getClientId", async () => {
            if ((this.isInitialized(), this.clientId)) return this.clientId;
            let e = await this.getClientSeed(),
              t = st.generateKeyPair(e),
              i = st.encodeIss(t.publicKey);
            return (this.clientId = i), i;
          }),
          dA(this, "generateKeyPair", () => {
            let e, t;
            this.isInitialized();
            let i =
              ((e = lS.utils.randomPrivateKey()),
              (t = lS.getPublicKey(e)),
              {
                privateKey: (0, si.toString)(e, lz),
                publicKey: (0, si.toString)(t, lz),
              });
            return this.setPrivateKey(i.publicKey, i.privateKey);
          }),
          dA(this, "signJWT", async (e) => {
            this.isInitialized();
            let t = await this.getClientSeed(),
              i = st.generateKeyPair(t),
              r = this.randomSessionIdentifier;
            return await st.signJWT(r, e, hp, i);
          }),
          dA(this, "generateSharedKey", (e, t, i) => {
            var r, s, n;
            let a, o;
            this.isInitialized();
            let l =
              ((r = this.getPrivateKey(e)),
              (a = lS.getSharedSecret(
                (0, sr.fromString)(r, lz),
                (0, sr.fromString)(t, lz)
              )),
              (s = void 0),
              (o = (function (e, t, i, r = 32) {
                nk(e), nC(r);
                let s = e.outputLen;
                if (r > 255 * s) throw Error("Length should be <= 255*HashLen");
                let n = Math.ceil(r / s);
                void 0 === i && (i = oS);
                let a = new Uint8Array(n * s),
                  o = o_.create(e, t),
                  l = o._cloneInto(),
                  c = new Uint8Array(o.outputLen);
                for (let e = 0; e < n; e++)
                  (oI[0] = e + 1),
                    l
                      .update(0 === e ? oS : c)
                      .update(i)
                      .update(oI)
                      .digestInto(c),
                    a.set(c, s * e),
                    o._cloneInto(l);
                return o.destroy(), l.destroy(), nN(c, oI), a.slice(0, r);
              })(
                ab,
                ((n = void 0),
                nk(ab),
                void 0 === n && (n = new Uint8Array(ab.outputLen)),
                o_(ab, nz(n), nz(a))),
                s,
                32
              )),
              (0, si.toString)(o, lz));
            return this.setSymKey(l, i);
          }),
          dA(this, "setSymKey", async (e, t) => {
            this.isInitialized();
            let i = t || lZ(e);
            return await this.keychain.set(i, e), i;
          }),
          dA(this, "deleteKeyPair", async (e) => {
            this.isInitialized(), await this.keychain.del(e);
          }),
          dA(this, "deleteSymKey", async (e) => {
            this.isInitialized(), await this.keychain.del(e);
          }),
          dA(this, "encode", async (e, t, i) => {
            this.isInitialized();
            let r = l8(i),
              s = (0, sl.safeJsonStringify)(t);
            if (2 === r.type) {
              var n;
              let e, t, r;
              return (
                (n = i?.encoding),
                (e = lX(2)),
                (t = nY(12)),
                (r = l5({ type: e, sealed: (0, sr.fromString)(s, lG), iv: t })),
                n === lV ? l1(r) : r
              );
            }
            if (l6(r)) {
              let t = r.senderPublicKey,
                i = r.receiverPublicKey;
              e = await this.generateSharedKey(t, i);
            }
            let a = this.getSymKey(e),
              { type: o, senderPublicKey: l } = r;
            return (function (e) {
              let t = lX("u" > typeof e.type ? e.type : 0);
              if (1 === l0(t) && typeof e.senderPublicKey > "u")
                throw Error("Missing sender public key for type 1 envelope");
              let i =
                  "u" > typeof e.senderPublicKey
                    ? (0, sr.fromString)(e.senderPublicKey, lz)
                    : void 0,
                r = "u" > typeof e.iv ? (0, sr.fromString)(e.iv, lz) : nY(12),
                s = l5({
                  type: t,
                  sealed: ov((0, sr.fromString)(e.symKey, lz), r).encrypt(
                    (0, sr.fromString)(e.message, lG)
                  ),
                  iv: r,
                  senderPublicKey: i,
                });
              return e.encoding === lV ? l1(s) : s;
            })({
              type: o,
              symKey: a,
              message: s,
              senderPublicKey: l,
              encoding: i?.encoding,
            });
          }),
          dA(this, "decode", async (e, t, i) => {
            let r;
            this.isInitialized();
            let s = l8({
              type: l0((r = l3({ encoded: t, encoding: i?.encoding })).type),
              senderPublicKey:
                "u" > typeof r.senderPublicKey
                  ? (0, si.toString)(r.senderPublicKey, lz)
                  : void 0,
              receiverPublicKey: i?.receiverPublicKey,
            });
            if (2 === s.type) {
              let e = (function (e, t) {
                let { sealed: i } = l3({ encoded: e, encoding: t });
                return (0, si.toString)(i, lG);
              })(t, i?.encoding);
              return (0, sl.safeJsonParse)(e);
            }
            if (l6(s)) {
              let t = s.receiverPublicKey,
                i = s.senderPublicKey;
              e = await this.generateSharedKey(t, i);
            }
            try {
              let r = this.getSymKey(e),
                s = (function (e) {
                  let t = (0, sr.fromString)(e.symKey, lz),
                    { sealed: i, iv: r } = l3({
                      encoded: e.encoded,
                      encoding: e.encoding,
                    }),
                    s = ov(t, r).decrypt(i);
                  if (null === s) throw Error("Failed to decrypt");
                  return (0, si.toString)(s, lG);
                })({ symKey: r, encoded: t, encoding: i?.encoding });
              return (0, sl.safeJsonParse)(s);
            } catch (t) {
              this.logger.error(
                `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
              ),
                this.logger.error(t);
            }
          }),
          dA(this, "getPayloadType", (e, t = lF) =>
            l0(l3({ encoded: e, encoding: t }).type)
          ),
          dA(this, "getPayloadSenderPublicKey", (e, t = lF) => {
            let i = l3({ encoded: e, encoding: t });
            return i.senderPublicKey
              ? (0, si.toString)(i.senderPublicKey, lz)
              : void 0;
          }),
          (this.core = e),
          (this.logger = sT(t, this.name)),
          (this.keychain = i || new dI(this.core, this.logger));
      }
      get context() {
        return sk(this.logger);
      }
      async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
      }
      getPrivateKey(e) {
        return this.keychain.get(e);
      }
      async getClientSeed() {
        let e = "";
        try {
          e = this.keychain.get(hu);
        } catch {
          (e = lY()), await this.keychain.set(hu, e);
        }
        return (function (e, t = "utf8") {
          let i = dv[t];
          if (!i) throw Error(`Unsupported encoding "${t}"`);
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? dy(globalThis.Buffer.from(e, "utf-8"))
            : i.decoder.decode(`${i.prefix}${e}`);
        })(e, "base16");
      }
      getSymKey(e) {
        return this.keychain.get(e);
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var dC = Object.defineProperty,
      dx = Object.defineProperties,
      dk = Object.getOwnPropertyDescriptors,
      dT = Object.getOwnPropertySymbols,
      dO = Object.prototype.hasOwnProperty,
      dR = Object.prototype.propertyIsEnumerable,
      dN = (e, t, i) =>
        t in e
          ? dC(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      dj = (e, t, i) => dN(e, "symbol" != typeof t ? t + "" : t, i);
    class dD extends c2 {
      constructor(e, t) {
        super(e, t),
          (this.logger = e),
          (this.core = t),
          dj(this, "messages", new Map()),
          dj(this, "messagesWithoutClientAck", new Map()),
          dj(this, "name", "messages"),
          dj(this, "version", "0.3"),
          dj(this, "initialized", !1),
          dj(this, "storagePrefix", hh),
          dj(this, "init", async () => {
            if (!this.initialized) {
              this.logger.trace("Initialized");
              try {
                let e = await this.getRelayerMessages();
                "u" > typeof e && (this.messages = e);
                let t = await this.getRelayerMessagesWithoutClientAck();
                "u" > typeof t && (this.messagesWithoutClientAck = t),
                  this.logger.debug(
                    `Successfully Restored records for ${this.name}`
                  ),
                  this.logger.trace({
                    type: "method",
                    method: "restore",
                    size: this.messages.size,
                  });
              } catch (e) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                  this.logger.error(e);
              } finally {
                this.initialized = !0;
              }
            }
          }),
          dj(this, "set", async (e, t, i) => {
            this.isInitialized();
            let r = lQ(t),
              s = this.messages.get(e);
            if ((typeof s > "u" && (s = {}), "u" > typeof s[r])) return r;
            if (((s[r] = t), this.messages.set(e, s), i === hC)) {
              let i = this.messagesWithoutClientAck.get(e) || {};
              this.messagesWithoutClientAck.set(
                e,
                dx(
                  ((e, t) => {
                    for (var i in t || (t = {}))
                      dO.call(t, i) && dN(e, i, t[i]);
                    if (dT)
                      for (var i of dT(t)) dR.call(t, i) && dN(e, i, t[i]);
                    return e;
                  })({}, i),
                  dk({ [r]: t })
                )
              );
            }
            return await this.persist(), r;
          }),
          dj(this, "get", (e) => {
            this.isInitialized();
            let t = this.messages.get(e);
            return typeof t > "u" && (t = {}), t;
          }),
          dj(this, "getWithoutAck", (e) => {
            this.isInitialized();
            let t = {};
            for (let i of e) {
              let e = this.messagesWithoutClientAck.get(i) || {};
              t[i] = Object.values(e);
            }
            return t;
          }),
          dj(
            this,
            "has",
            (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[lQ(t)])
          ),
          dj(this, "ack", async (e, t) => {
            this.isInitialized();
            let i = this.messagesWithoutClientAck.get(e);
            if (typeof i > "u") return;
            let r = lQ(t);
            delete i[r],
              0 === Object.keys(i).length
                ? this.messagesWithoutClientAck.delete(e)
                : this.messagesWithoutClientAck.set(e, i),
              await this.persist();
          }),
          dj(this, "del", async (e) => {
            this.isInitialized(),
              this.messages.delete(e),
              this.messagesWithoutClientAck.delete(e),
              await this.persist();
          }),
          (this.logger = sT(e, this.name)),
          (this.core = t);
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      get storageKeyWithoutClientAck() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name +
          "_withoutClientAck"
        );
      }
      async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, s1(e));
      }
      async setRelayerMessagesWithoutClientAck(e) {
        await this.core.storage.setItem(this.storageKeyWithoutClientAck, s1(e));
      }
      async getRelayerMessages() {
        let e = await this.core.storage.getItem(this.storageKey);
        return "u" > typeof e ? s2(e) : void 0;
      }
      async getRelayerMessagesWithoutClientAck() {
        let e = await this.core.storage.getItem(
          this.storageKeyWithoutClientAck
        );
        return "u" > typeof e ? s2(e) : void 0;
      }
      async persist() {
        await this.setRelayerMessages(this.messages),
          await this.setRelayerMessagesWithoutClientAck(
            this.messagesWithoutClientAck
          );
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var dM = Object.defineProperty,
      dU = Object.defineProperties,
      dL = Object.getOwnPropertyDescriptors,
      dW = Object.getOwnPropertySymbols,
      dB = Object.prototype.hasOwnProperty,
      dK = Object.prototype.propertyIsEnumerable,
      dq = (e, t, i) =>
        t in e
          ? dM(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      dH = (e, t) => {
        for (var i in t || (t = {})) dB.call(t, i) && dq(e, i, t[i]);
        if (dW) for (var i of dW(t)) dK.call(t, i) && dq(e, i, t[i]);
        return e;
      },
      d$ = (e, t, i) => dq(e, "symbol" != typeof t ? t + "" : t, i);
    class dJ extends c5 {
      constructor(e, t) {
        super(e, t),
          (this.relayer = e),
          (this.logger = t),
          d$(this, "events", new iD.EventEmitter()),
          d$(this, "name", "publisher"),
          d$(this, "queue", new Map()),
          d$(this, "publishTimeout", (0, iL.toMiliseconds)(iL.ONE_MINUTE)),
          d$(
            this,
            "initialPublishTimeout",
            (0, iL.toMiliseconds)(15 * iL.ONE_SECOND)
          ),
          d$(this, "needsTransportRestart", !1),
          d$(this, "publish", async (e, t, i) => {
            var r, s, n, a, o;
            this.logger.debug("Publishing Payload"),
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { topic: e, message: t, opts: i },
              });
            let l = i?.ttl || hf,
              c = i?.prompt || !1,
              h = i?.tag || 0,
              d = i?.id || (0, ha.getBigIntRpcId)().toString(),
              u = l7(l4().protocol),
              p = {
                id: d,
                method: i?.publishMethod || u.publish,
                params: dH(
                  {
                    topic: e,
                    message: t,
                    ttl: l,
                    prompt: c,
                    tag: h,
                    attestation: i?.attestation,
                  },
                  i?.tvf
                ),
              },
              f = `Failed to publish payload, please try again. id:${d} tag:${h}`;
            try {
              cT(null == (r = p.params) ? void 0 : r.prompt) &&
                (null == (s = p.params) || delete s.prompt),
                cT(null == (n = p.params) ? void 0 : n.tag) &&
                  (null == (a = p.params) || delete a.tag);
              let o = new Promise(async (e) => {
                let t = ({ id: i }) => {
                  var r;
                  (null == (r = p.id) ? void 0 : r.toString()) ===
                    i.toString() &&
                    (this.removeRequestFromQueue(i),
                    this.relayer.events.removeListener(hb, t),
                    e());
                };
                this.relayer.events.on(hb, t);
                let r = s3(
                  new Promise((e, t) => {
                    this.rpcPublish(p, i)
                      .then(e)
                      .catch((e) => {
                        this.logger.warn(e, e?.message), t(e);
                      });
                  }),
                  this.initialPublishTimeout,
                  `Failed initial publish, retrying.... id:${d} tag:${h}`
                );
                try {
                  await r, this.events.removeListener(hb, t);
                } catch (e) {
                  this.queue.set(d, { request: p, opts: i, attempt: 1 }),
                    this.logger.warn(e, e?.message);
                }
              });
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { id: d, topic: e, message: t, opts: i },
              }),
                await s3(o, this.publishTimeout, f);
            } catch (e) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(e),
                null != (o = i?.internal) && o.throwOnFailedPublish)
              )
                throw e;
            } finally {
              this.queue.delete(d);
            }
          }),
          d$(this, "publishCustom", async (e) => {
            var t, i, r, s, n;
            this.logger.debug("Publishing custom payload"),
              this.logger.trace({
                type: "method",
                method: "publishCustom",
                params: e,
              });
            let { payload: a, opts: o = {} } = e,
              {
                attestation: l,
                tvf: c,
                publishMethod: h,
                prompt: d,
                tag: u,
                ttl: p = iL.FIVE_MINUTES,
              } = o,
              f = o.id || (0, ha.getBigIntRpcId)().toString(),
              g = l7(l4().protocol),
              y = h || g.publish,
              m = {
                id: f,
                method: y,
                params: dH(
                  dU(
                    dH({}, a),
                    dL({ ttl: p, prompt: d, tag: u, attestation: l })
                  ),
                  c
                ),
              },
              w = `Failed to publish custom payload, please try again. id:${f} tag:${u}`;
            try {
              cT(null == (t = m.params) ? void 0 : t.prompt) &&
                (null == (i = m.params) || delete i.prompt),
                cT(null == (r = m.params) ? void 0 : r.tag) &&
                  (null == (s = m.params) || delete s.tag);
              let e = new Promise(async (e) => {
                let t = ({ id: i }) => {
                  var r;
                  (null == (r = m.id) ? void 0 : r.toString()) ===
                    i.toString() &&
                    (this.removeRequestFromQueue(i),
                    this.relayer.events.removeListener(hb, t),
                    e());
                };
                this.relayer.events.on(hb, t);
                let i = s3(
                  new Promise((e, t) => {
                    this.rpcPublish(m, o)
                      .then(e)
                      .catch((e) => {
                        this.logger.warn(e, e?.message), t(e);
                      });
                  }),
                  this.initialPublishTimeout,
                  `Failed initial custom payload publish, retrying.... method:${y} id:${f} tag:${u}`
                );
                try {
                  await i, this.events.removeListener(hb, t);
                } catch (e) {
                  this.queue.set(f, { request: m, opts: o, attempt: 1 }),
                    this.logger.warn(e, e?.message);
                }
              });
              this.logger.trace({
                type: "method",
                method: "publish",
                params: { id: f, payload: a, opts: o },
              }),
                await s3(e, this.publishTimeout, w);
            } catch (e) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(e),
                null != (n = o?.internal) && n.throwOnFailedPublish)
              )
                throw e;
            } finally {
              this.queue.delete(f);
            }
          }),
          d$(this, "on", (e, t) => {
            this.events.on(e, t);
          }),
          d$(this, "once", (e, t) => {
            this.events.once(e, t);
          }),
          d$(this, "off", (e, t) => {
            this.events.off(e, t);
          }),
          d$(this, "removeListener", (e, t) => {
            this.events.removeListener(e, t);
          }),
          (this.relayer = e),
          (this.logger = sT(t, this.name)),
          this.registerEventListeners();
      }
      get context() {
        return sk(this.logger);
      }
      async rpcPublish(e, t) {
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: e,
          });
        let i = await this.relayer.request(e);
        return (
          this.relayer.events.emit(hb, dH(dH({}, e), t)),
          this.logger.debug("Successfully Published Payload"),
          i
        );
      }
      removeRequestFromQueue(e) {
        this.queue.delete(e);
      }
      checkQueue() {
        this.queue.forEach(async (e, t) => {
          var i;
          let r = e.attempt + 1;
          this.queue.set(t, dU(dH({}, e), dL({ attempt: r }))),
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.request.id}, tag: ${
                null == (i = e.request.params) ? void 0 : i.tag
              }, attempt: ${r}`
            ),
            await this.rpcPublish(e.request, e.opts),
            this.logger.warn(
              {},
              `Publisher: queue->published: ${e.request.id}`
            );
        });
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(cV.HEARTBEAT_EVENTS.pulse, () => {
          if (this.needsTransportRestart) {
            (this.needsTransportRestart = !1), this.relayer.events.emit(hw);
            return;
          }
          this.checkQueue();
        }),
          this.relayer.on(hm, (e) => {
            this.removeRequestFromQueue(e.id.toString());
          });
      }
    }
    var dz = Object.defineProperty,
      dF = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? dz(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class dV {
      constructor() {
        dF(this, "map", new Map()),
          dF(this, "set", (e, t) => {
            let i = this.get(e);
            this.exists(e, t) || this.map.set(e, [...i, t]);
          }),
          dF(this, "get", (e) => this.map.get(e) || []),
          dF(this, "exists", (e, t) => this.get(e).includes(t)),
          dF(this, "delete", (e, t) => {
            if (typeof t > "u") return void this.map.delete(e);
            if (!this.map.has(e)) return;
            let i = this.get(e);
            if (!this.exists(e, t)) return;
            let r = i.filter((e) => e !== t);
            r.length ? this.map.set(e, r) : this.map.delete(e);
          }),
          dF(this, "clear", () => {
            this.map.clear();
          });
      }
      get topics() {
        return Array.from(this.map.keys());
      }
    }
    var dG = Object.defineProperty,
      dY = Object.defineProperties,
      dZ = Object.getOwnPropertyDescriptors,
      dQ = Object.getOwnPropertySymbols,
      dX = Object.prototype.hasOwnProperty,
      d0 = Object.prototype.propertyIsEnumerable,
      d1 = (e, t, i) =>
        t in e
          ? dG(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      d2 = (e, t) => {
        for (var i in t || (t = {})) dX.call(t, i) && d1(e, i, t[i]);
        if (dQ) for (var i of dQ(t)) d0.call(t, i) && d1(e, i, t[i]);
        return e;
      },
      d5 = (e, t, i) => d1(e, "symbol" != typeof t ? t + "" : t, i);
    class d3 extends c6 {
      constructor(e, t) {
        super(e, t),
          (this.relayer = e),
          (this.logger = t),
          d5(this, "subscriptions", new Map()),
          d5(this, "topicMap", new dV()),
          d5(this, "events", new iD.EventEmitter()),
          d5(this, "name", "subscription"),
          d5(this, "version", "0.3"),
          d5(this, "pending", new Map()),
          d5(this, "cached", []),
          d5(this, "initialized", !1),
          d5(this, "storagePrefix", hh),
          d5(this, "subscribeTimeout", (0, iL.toMiliseconds)(iL.ONE_MINUTE)),
          d5(
            this,
            "initialSubscribeTimeout",
            (0, iL.toMiliseconds)(15 * iL.ONE_SECOND)
          ),
          d5(this, "clientId"),
          d5(this, "batchSubscribeTopicsLimit", 500),
          d5(this, "init", async () => {
            this.initialized ||
              (this.logger.trace("Initialized"),
              this.registerEventListeners(),
              await this.restore()),
              (this.initialized = !0);
          }),
          d5(this, "subscribe", async (e, t) => {
            var i;
            this.isInitialized(),
              this.logger.debug("Subscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: { topic: e, opts: t },
              });
            try {
              let r = l4(t),
                s = { topic: e, relay: r, transportType: t?.transportType };
              (null != (i = t?.internal) && i.skipSubscribe) ||
                this.pending.set(e, s);
              let n = await this.rpcSubscribe(e, r, t);
              return (
                "string" == typeof n &&
                  (this.onSubscribe(n, s),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  })),
                n
              );
            } catch (e) {
              throw (
                (this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(e),
                e)
              );
            }
          }),
          d5(this, "unsubscribe", async (e, t) => {
            this.isInitialized(),
              "u" > typeof t?.id
                ? await this.unsubscribeById(e, t.id, t)
                : await this.unsubscribeByTopic(e, t);
          }),
          d5(
            this,
            "isSubscribed",
            (e) =>
              new Promise((t) => {
                t(this.topicMap.topics.includes(e));
              })
          ),
          d5(
            this,
            "isKnownTopic",
            (e) =>
              new Promise((t) => {
                t(
                  this.topicMap.topics.includes(e) ||
                    this.pending.has(e) ||
                    this.cached.some((t) => t.topic === e)
                );
              })
          ),
          d5(this, "on", (e, t) => {
            this.events.on(e, t);
          }),
          d5(this, "once", (e, t) => {
            this.events.once(e, t);
          }),
          d5(this, "off", (e, t) => {
            this.events.off(e, t);
          }),
          d5(this, "removeListener", (e, t) => {
            this.events.removeListener(e, t);
          }),
          d5(this, "start", async () => {
            await this.onConnect();
          }),
          d5(this, "stop", async () => {
            await this.onDisconnect();
          }),
          d5(this, "restart", async () => {
            await this.restore(), await this.onRestart();
          }),
          d5(this, "checkPending", async () => {
            if (
              0 === this.pending.size &&
              (!this.initialized || !this.relayer.connected)
            )
              return;
            let e = [];
            this.pending.forEach((t) => {
              e.push(t);
            }),
              await this.batchSubscribe(e);
          }),
          d5(this, "registerEventListeners", () => {
            this.relayer.core.heartbeat.on(
              cV.HEARTBEAT_EVENTS.pulse,
              async () => {
                await this.checkPending();
              }
            ),
              this.events.on(hk, async (e) => {
                this.logger.info(`Emitting ${hk}`),
                  this.logger.debug({ type: "event", event: hk, data: e }),
                  await this.persist();
              }),
              this.events.on(hT, async (e) => {
                this.logger.info(`Emitting ${hT}`),
                  this.logger.debug({ type: "event", event: hT, data: e }),
                  await this.persist();
              });
          }),
          (this.relayer = e),
          (this.logger = sT(t, this.name)),
          (this.clientId = "");
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.relayer.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      get length() {
        return this.subscriptions.size;
      }
      get ids() {
        return Array.from(this.subscriptions.keys());
      }
      get values() {
        return Array.from(this.subscriptions.values());
      }
      get topics() {
        return this.topicMap.topics;
      }
      get hasAnyTopics() {
        return (
          this.topicMap.topics.length > 0 ||
          this.pending.size > 0 ||
          this.cached.length > 0 ||
          this.subscriptions.size > 0
        );
      }
      hasSubscription(e, t) {
        let i = !1;
        try {
          i = this.getSubscription(e).topic === t;
        } catch {}
        return i;
      }
      reset() {
        (this.cached = []), (this.initialized = !0);
      }
      onDisable() {
        this.values.length > 0 && (this.cached = this.values),
          this.subscriptions.clear(),
          this.topicMap.clear();
      }
      async unsubscribeByTopic(e, t) {
        let i = this.topicMap.get(e);
        await Promise.all(
          i.map(async (i) => await this.unsubscribeById(e, i, t))
        );
      }
      async unsubscribeById(e, t, i) {
        this.logger.debug("Unsubscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: { topic: e, id: t, opts: i },
          });
        try {
          let r = l4(i);
          await this.restartToComplete({ topic: e, id: t, relay: r }),
            await this.rpcUnsubscribe(e, t, r);
          let s = cC("USER_DISCONNECTED", `${this.name}, ${e}`);
          await this.onUnsubscribe(e, t, s),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
        } catch (e) {
          throw (
            (this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(e),
            e)
          );
        }
      }
      async rpcSubscribe(e, t, i) {
        var r, s;
        let n = await this.getSubscriptionId(e);
        if (null != (r = i?.internal) && r.skipSubscribe) return n;
        (i && i?.transportType !== hP) ||
          (await this.restartToComplete({ topic: e, id: e, relay: t }));
        let a = { method: l7(t.protocol).subscribe, params: { topic: e } };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: a,
          });
        let o = null == (s = i?.internal) ? void 0 : s.throwOnFailedPublish;
        try {
          if (i?.transportType === hA)
            return (
              setTimeout(() => {
                (this.relayer.connected || this.relayer.connecting) &&
                  this.relayer.request(a).catch((e) => this.logger.warn(e));
              }, (0, iL.toMiliseconds)(iL.ONE_SECOND)),
              n
            );
          let t = new Promise(async (t) => {
              let i = (r) => {
                r.topic === e && (this.events.removeListener(hk, i), t(r.id));
              };
              this.events.on(hk, i);
              try {
                let r = await s3(
                  new Promise((e, t) => {
                    this.relayer
                      .request(a)
                      .catch((e) => {
                        this.logger.warn(e, e?.message), t(e);
                      })
                      .then(e);
                  }),
                  this.initialSubscribeTimeout,
                  `Subscribing to ${e} failed, please try again`
                );
                this.events.removeListener(hk, i), t(r);
              } catch {}
            }),
            r = await s3(
              t,
              this.subscribeTimeout,
              `Subscribing to ${e} failed, please try again`
            );
          if (!r && o)
            throw Error(`Subscribing to ${e} failed, please try again`);
          return r ? n : null;
        } catch (e) {
          if (
            (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(hw),
            o)
          )
            throw e;
        }
        return null;
      }
      async rpcBatchSubscribe(e) {
        if (!e.length) return;
        let t = {
          method: l7(e[0].relay.protocol).batchSubscribe,
          params: { topics: e.map((e) => e.topic) },
        };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: t,
          });
        try {
          await await s3(
            new Promise((e) => {
              this.relayer
                .request(t)
                .catch((e) => this.logger.warn(e))
                .then(e);
            }),
            this.subscribeTimeout,
            "rpcBatchSubscribe failed, please try again"
          );
        } catch {
          this.relayer.events.emit(hw);
        }
      }
      async rpcBatchFetchMessages(e) {
        let t;
        if (!e.length) return;
        let i = {
          method: l7(e[0].relay.protocol).batchFetchMessages,
          params: { topics: e.map((e) => e.topic) },
        };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        try {
          t = await await s3(
            new Promise((e, t) => {
              this.relayer
                .request(i)
                .catch((e) => {
                  this.logger.warn(e), t(e);
                })
                .then(e);
            }),
            this.subscribeTimeout,
            "rpcBatchFetchMessages failed, please try again"
          );
        } catch {
          this.relayer.events.emit(hw);
        }
        return t;
      }
      rpcUnsubscribe(e, t, i) {
        let r = {
          method: l7(i.protocol).unsubscribe,
          params: { topic: e, id: t },
        };
        return (
          this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r,
          }),
          this.relayer.request(r)
        );
      }
      onSubscribe(e, t) {
        this.setSubscription(e, dY(d2({}, t), dZ({ id: e }))),
          this.pending.delete(t.topic);
      }
      onBatchSubscribe(e) {
        e.length &&
          e.forEach((e) => {
            this.setSubscription(e.id, d2({}, e)), this.pending.delete(e.topic);
          });
      }
      async onUnsubscribe(e, t, i) {
        this.events.removeAllListeners(t),
          this.hasSubscription(t, e) && this.deleteSubscription(t, i),
          await this.relayer.messages.del(e);
      }
      async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
      }
      async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
      }
      setSubscription(e, t) {
        this.logger.debug("Setting subscription"),
          this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t,
          }),
          this.addSubscription(e, t);
      }
      addSubscription(e, t) {
        this.subscriptions.set(e, d2({}, t)),
          this.topicMap.set(t.topic, e),
          this.events.emit(hk, t);
      }
      getSubscription(e) {
        this.logger.debug("Getting subscription"),
          this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e,
          });
        let t = this.subscriptions.get(e);
        if (!t) {
          let { message: t } = cP("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw Error(t);
        }
        return t;
      }
      deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
          this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t,
          });
        let i = this.getSubscription(e);
        this.subscriptions.delete(e),
          this.topicMap.delete(i.topic, e),
          this.events.emit(hT, dY(d2({}, i), dZ({ reason: t })));
      }
      async persist() {
        await this.setRelayerSubscriptions(this.values),
          this.events.emit("subscription_sync");
      }
      async onRestart() {
        if (this.cached.length) {
          let e = [...this.cached],
            t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
          for (let i = 0; i < t; i++) {
            let t = e.splice(0, this.batchSubscribeTopicsLimit);
            await this.batchSubscribe(t);
          }
        }
        this.events.emit("subscription_resubscribed");
      }
      async restore() {
        try {
          let e = await this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length) return;
          if (
            this.subscriptions.size &&
            !e.every((e) => {
              var t;
              return (
                e.topic ===
                (null == (t = this.subscriptions.get(e.id)) ? void 0 : t.topic)
              );
            })
          ) {
            let { message: e } = cP("RESTORE_WILL_OVERRIDE", this.name);
            throw (
              (this.logger.error(e),
              this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
              Error(e))
            );
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored subscriptions for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              subscriptions: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e);
        }
      }
      async batchSubscribe(e) {
        e.length &&
          (await this.rpcBatchSubscribe(e),
          this.onBatchSubscribe(
            await Promise.all(
              e.map(async (e) =>
                dY(d2({}, e), dZ({ id: await this.getSubscriptionId(e.topic) }))
              )
            )
          ));
      }
      async batchFetchMessages(e) {
        var t;
        if (!e.length) return;
        this.logger.trace(
          `Fetching batch messages for ${e.length} subscriptions`
        );
        let i = await this.rpcBatchFetchMessages(e);
        i &&
          i.messages &&
          (await ((t = (0, iL.toMiliseconds)(iL.ONE_SECOND)),
          new Promise((e) => setTimeout(e, t))),
          await this.relayer.handleBatchMessageEvents(i.messages));
      }
      async onConnect() {
        await this.restart(), this.reset();
      }
      onDisconnect() {
        this.onDisable();
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
      async restartToComplete(e) {
        this.relayer.connected ||
          this.relayer.connecting ||
          (this.cached.push(e), await this.relayer.transportOpen());
      }
      async getClientId() {
        return (
          this.clientId ||
            (this.clientId = await this.relayer.core.crypto.getClientId()),
          this.clientId
        );
      }
      async getSubscriptionId(e) {
        return lQ(e + (await this.getClientId()));
      }
    }
    var d8 = Object.defineProperty,
      d6 = Object.getOwnPropertySymbols,
      d4 = Object.prototype.hasOwnProperty,
      d7 = Object.prototype.propertyIsEnumerable,
      d9 = (e, t, i) =>
        t in e
          ? d8(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      ue = (e, t) => {
        for (var i in t || (t = {})) d4.call(t, i) && d9(e, i, t[i]);
        if (d6) for (var i of d6(t)) d7.call(t, i) && d9(e, i, t[i]);
        return e;
      },
      ut = (e, t, i) => d9(e, "symbol" != typeof t ? t + "" : t, i);
    class ui extends c3 {
      constructor(t) {
        var i;
        super(t),
          ut(this, "protocol", "wc"),
          ut(this, "version", 2),
          ut(this, "core"),
          ut(this, "logger"),
          ut(this, "events", new iD.EventEmitter()),
          ut(this, "provider"),
          ut(this, "messages"),
          ut(this, "subscriber"),
          ut(this, "publisher"),
          ut(this, "name", "relayer"),
          ut(this, "transportExplicitlyClosed", !1),
          ut(this, "initialized", !1),
          ut(this, "connectionAttemptInProgress", !1),
          ut(this, "relayUrl"),
          ut(this, "projectId"),
          ut(this, "packageName"),
          ut(this, "bundleId"),
          ut(this, "hasExperiencedNetworkDisruption", !1),
          ut(this, "pingTimeout"),
          ut(
            this,
            "heartBeatTimeout",
            (0, iL.toMiliseconds)(iL.THIRTY_SECONDS + iL.FIVE_SECONDS)
          ),
          ut(this, "reconnectTimeout"),
          ut(this, "connectPromise"),
          ut(this, "reconnectInProgress", !1),
          ut(this, "requestsInFlight", []),
          ut(this, "connectTimeout", (0, iL.toMiliseconds)(15 * iL.ONE_SECOND)),
          ut(this, "request", async (e) => {
            var t, i;
            this.logger.debug("Publishing Request Payload");
            let r = e.id || (0, ha.getBigIntRpcId)().toString();
            await this.toEstablishConnection();
            try {
              this.logger.trace(
                {
                  id: r,
                  method: e.method,
                  topic: null == (t = e.params) ? void 0 : t.topic,
                },
                "relayer.request - publishing..."
              );
              let s = `${r}:${(null == (i = e.params) ? void 0 : i.tag) || ""}`;
              this.requestsInFlight.push(s);
              let n = await this.provider.request(e);
              return (
                (this.requestsInFlight = this.requestsInFlight.filter(
                  (e) => e !== s
                )),
                n
              );
            } catch (e) {
              throw (this.logger.debug(`Failed to Publish Request: ${r}`), e);
            }
          }),
          ut(this, "resetPingTimeout", () => {
            sF() &&
              (clearTimeout(this.pingTimeout),
              (this.pingTimeout = setTimeout(() => {
                var e, t, i, r;
                try {
                  this.logger.debug(
                    {},
                    "pingTimeout: Connection stalled, terminating..."
                  ),
                    null ==
                      (r =
                        null ==
                        (i =
                          null ==
                          (t =
                            null == (e = this.provider) ? void 0 : e.connection)
                            ? void 0
                            : t.socket)
                          ? void 0
                          : i.terminate) || r.call(i);
                } catch (e) {
                  this.logger.warn(e, e?.message);
                }
              }, this.heartBeatTimeout)));
          }),
          ut(this, "onPayloadHandler", (e) => {
            this.onProviderPayload(e), this.resetPingTimeout();
          }),
          ut(this, "onConnectHandler", () => {
            this.logger.warn({}, "Relayer connected 🛜"),
              this.startPingTimeout(),
              this.events.emit("relayer_connect");
          }),
          ut(this, "onDisconnectHandler", () => {
            this.logger.warn({}, "Relayer disconnected 🛑"),
              (this.requestsInFlight = []),
              this.onProviderDisconnect();
          }),
          ut(this, "onProviderErrorHandler", (e) => {
            this.logger.fatal(`Fatal socket error: ${e.message}`),
              this.events.emit("relayer_error", e),
              this.logger.fatal(
                "Fatal socket error received, closing transport"
              ),
              this.transportClose();
          }),
          ut(this, "registerProviderListeners", () => {
            this.provider.on(hv, this.onPayloadHandler),
              this.provider.on(hE, this.onConnectHandler),
              this.provider.on(h_, this.onDisconnectHandler),
              this.provider.on(hI, this.onProviderErrorHandler);
          }),
          (this.core = t.core),
          (this.logger = cF({
            logger: null != (i = t.logger) ? i : "error",
            name: this.name,
          })),
          (this.messages = new dD(this.logger, t.core)),
          (this.subscriber = new d3(this, this.logger)),
          (this.publisher = new dJ(this, this.logger)),
          (this.projectId = t?.projectId),
          (this.relayUrl = t?.relayUrl || hg),
          sV() &&
          "u" > typeof (null == e.g ? void 0 : e.g.Platform) &&
          (null == e.g ? void 0 : e.g.Platform.OS) === "android"
            ? (this.packageName = sZ())
            : sV() &&
              "u" > typeof (null == e.g ? void 0 : e.g.Platform) &&
              (null == e.g ? void 0 : e.g.Platform.OS) === "ios" &&
              (this.bundleId = sZ()),
          (this.provider = {});
      }
      async init() {
        this.logger.trace("Initialized"),
          this.registerEventListeners(),
          await Promise.all([this.messages.init(), this.subscriber.init()]),
          (this.initialized = !0),
          this.transportOpen().catch((e) => this.logger.warn(e, e?.message));
      }
      get context() {
        return sk(this.logger);
      }
      get connected() {
        var e, t, i;
        return (
          (null ==
          (i =
            null == (t = null == (e = this.provider) ? void 0 : e.connection)
              ? void 0
              : t.socket)
            ? void 0
            : i.readyState) === 1
        );
      }
      get connecting() {
        var e, t, i;
        return (
          (null ==
          (i =
            null == (t = null == (e = this.provider) ? void 0 : e.connection)
              ? void 0
              : t.socket)
            ? void 0
            : i.readyState) === 0 || void 0 !== this.connectPromise
        );
      }
      async publish(e, t, i) {
        this.isInitialized(),
          await this.publisher.publish(e, t, i),
          await this.recordMessageEvent(
            {
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: hP,
            },
            "outbound"
          );
      }
      async publishCustom(e) {
        this.isInitialized(), await this.publisher.publishCustom(e);
      }
      async subscribe(e, t) {
        var i, r, s;
        this.isInitialized(),
          (null != t && t.transportType && t?.transportType !== "relay") ||
            (await this.toEstablishConnection());
        let n =
            typeof (null == (i = t?.internal)
              ? void 0
              : i.throwOnFailedPublish) > "u" ||
            (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish),
          a =
            (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
            "",
          o,
          l = (t) => {
            t.topic === e && (this.subscriber.off(hk, l), o());
          };
        return (
          await Promise.all([
            new Promise((e) => {
              (o = e), this.subscriber.on(hk, l);
            }),
            new Promise(async (i, r) => {
              (a =
                (await this.subscriber
                  .subscribe(
                    e,
                    ue({ internal: { throwOnFailedPublish: n } }, t)
                  )
                  .catch((e) => {
                    n && r(e);
                  })) || a),
                i();
            }),
          ]),
          a
        );
      }
      async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      async transportDisconnect() {
        this.provider.disconnect &&
        (this.hasExperiencedNetworkDisruption || this.connected)
          ? await s3(
              this.provider.disconnect(),
              2e3,
              "provider.disconnect()"
            ).catch(() => this.onProviderDisconnect())
          : this.onProviderDisconnect();
      }
      async transportClose() {
        (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
      }
      async transportOpen(e) {
        if (!this.subscriber.hasAnyTopics)
          return void this.logger.info(
            "Starting WS connection skipped because the client has no topics to work with."
          );
        if (
          (this.connectPromise
            ? (this.logger.debug(
                {},
                "Waiting for existing connection attempt to resolve..."
              ),
              await this.connectPromise,
              this.logger.debug({}, "Existing connection attempt resolved"))
            : ((this.connectPromise = new Promise(async (t, i) => {
                await this.connect(e)
                  .then(t)
                  .catch(i)
                  .finally(() => {
                    this.connectPromise = void 0;
                  });
              })),
              await this.connectPromise),
          !this.connected)
        )
          throw Error(
            `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
          );
      }
      async restartTransport(e) {
        this.logger.debug({}, "Restarting transport..."),
          this.connectionAttemptInProgress ||
            ((this.relayUrl = e || this.relayUrl),
            await this.confirmOnlineStateOrThrow(),
            await this.transportClose(),
            await this.transportOpen());
      }
      async confirmOnlineStateOrThrow() {
        if (!(await cq()))
          throw Error(
            "No internet connection detected. Please restart your network and try again."
          );
      }
      async handleBatchMessageEvents(e) {
        if (e?.length === 0)
          return void this.logger.trace(
            "Batch message events is empty. Ignoring..."
          );
        let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
        for (let e of (this.logger.debug(
          `Batch of ${t.length} message events sorted`
        ),
        t))
          try {
            await this.onMessageEvent(e);
          } catch (e) {
            this.logger.warn(
              e,
              "Error while processing batch message event: " + e?.message
            );
          }
        this.logger.trace(`Batch of ${t.length} message events processed`);
      }
      async onLinkMessageEvent(e, t) {
        let { topic: i } = e;
        if (!t.sessionExists) {
          let e = s4(iL.FIVE_MINUTES);
          await this.core.pairing.pairings.set(i, {
            topic: i,
            expiry: e,
            relay: { protocol: "irn" },
            active: !1,
          });
        }
        this.events.emit(hy, e), await this.recordMessageEvent(e, hC);
      }
      async connect(e) {
        await this.confirmOnlineStateOrThrow(),
          e &&
            e !== this.relayUrl &&
            ((this.relayUrl = e), await this.transportDisconnect()),
          (this.connectionAttemptInProgress = !0),
          (this.transportExplicitlyClosed = !1);
        let t = 1;
        for (; t < 6; ) {
          try {
            if (this.transportExplicitlyClosed) break;
            this.logger.debug(
              {},
              `Connecting to ${this.relayUrl}, attempt: ${t}...`
            ),
              await this.createProvider(),
              await new Promise(async (e, t) => {
                let i = () => {
                  t(Error("Connection interrupted while trying to connect"));
                };
                this.provider.once(h_, i),
                  await s3(
                    new Promise((e, t) => {
                      this.provider.connect().then(e).catch(t);
                    }),
                    this.connectTimeout,
                    `Socket stalled when trying to connect to ${this.relayUrl}`
                  )
                    .catch((e) => {
                      t(e);
                    })
                    .finally(() => {
                      this.provider.off(h_, i),
                        clearTimeout(this.reconnectTimeout);
                    }),
                  await new Promise(async (e, i) => {
                    let r = () => {
                      t(
                        Error(
                          "Connection interrupted while trying to subscribe"
                        )
                      );
                    };
                    this.provider.once(h_, r),
                      await this.subscriber
                        .start()
                        .then(e)
                        .catch(i)
                        .finally(() => {
                          this.provider.off(h_, r);
                        });
                  }),
                  (this.hasExperiencedNetworkDisruption = !1),
                  e();
              });
          } catch (e) {
            await this.subscriber.stop(),
              this.logger.warn({}, e.message),
              (this.hasExperiencedNetworkDisruption = !0);
          } finally {
            this.connectionAttemptInProgress = !1;
          }
          if (this.connected) {
            this.logger.debug(
              {},
              `Connected to ${this.relayUrl} successfully on attempt: ${t}`
            );
            break;
          }
          await new Promise((e) => setTimeout(e, (0, iL.toMiliseconds)(+t))),
            t++;
        }
      }
      startPingTimeout() {
        var e, t, i, r, s;
        if (sF())
          try {
            null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
              t.socket &&
              (null ==
                (s =
                  null ==
                  (r = null == (i = this.provider) ? void 0 : i.connection)
                    ? void 0
                    : r.socket) ||
                s.on("ping", () => {
                  this.resetPingTimeout();
                })),
              this.resetPingTimeout();
          } catch (e) {
            this.logger.warn(e, e?.message);
          }
      }
      async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        let e = await this.core.crypto.signJWT(this.relayUrl);
        (this.provider = new hn.JsonRpcProvider(
          new hl.default(
            (function ({
              protocol: e,
              version: t,
              relayUrl: i,
              sdkVersion: r,
              auth: s,
              projectId: n,
              useOnCloseEvent: a,
              bundleId: o,
              packageName: l,
            }) {
              var c, h;
              let d,
                u = i.split("?"),
                p = sX(e, t, r),
                f =
                  ((c = u[1] || ""),
                  (h = {
                    auth: s,
                    ua: p,
                    projectId: n,
                    useOnCloseEvent: a || void 0,
                    packageName: l || void 0,
                    bundleId: o || void 0,
                  }),
                  (d = new URLSearchParams(c)),
                  Object.entries(h)
                    .sort(([e], [t]) => e.localeCompare(t))
                    .forEach(([e, t]) => {
                      null != t && d.set(e, String(t));
                    }),
                  d.toString());
              return u[0] + "?" + f;
            })({
              sdkVersion: hS,
              protocol: this.protocol,
              version: this.version,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
              auth: e,
              useOnCloseEvent: !0,
              bundleId: this.bundleId,
              packageName: this.packageName,
            })
          )
        )),
          this.registerProviderListeners();
      }
      async recordMessageEvent(e, t) {
        let { topic: i, message: r } = e;
        await this.messages.set(i, r, t);
      }
      async shouldIgnoreMessageEvent(e) {
        let { topic: t, message: i } = e;
        if (!i || 0 === i.length)
          return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
        if (!(await this.subscriber.isKnownTopic(t)))
          return (
            this.logger.warn(`Ignoring message for unknown topic ${t}`), !0
          );
        let r = this.messages.has(t, i);
        return r && this.logger.warn(`Ignoring duplicate message: ${i}`), r;
      }
      async onProviderPayload(e) {
        if (
          (this.logger.debug("Incoming Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e,
          }),
          (0, ho.isJsonRpcRequest)(e))
        ) {
          if (!e.method.endsWith("_subscription")) return;
          let t = e.params,
            { topic: i, message: r, publishedAt: s, attestation: n } = t.data,
            a = {
              topic: i,
              message: r,
              publishedAt: s,
              transportType: hP,
              attestation: n,
            };
          this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(ue({ type: "event", event: t.id }, a)),
            this.events.emit(t.id, a),
            await this.acknowledgePayload(e),
            await this.onMessageEvent(a);
        } else (0, ho.isJsonRpcResponse)(e) && this.events.emit(hm, e);
      }
      async onMessageEvent(e) {
        (await this.shouldIgnoreMessageEvent(e)) ||
          (await this.recordMessageEvent(e, hC), this.events.emit(hy, e));
      }
      async acknowledgePayload(e) {
        let t = (0, ha.formatJsonRpcResult)(e.id, !0);
        await this.provider.connection.send(t);
      }
      unregisterProviderListeners() {
        this.provider.off(hv, this.onPayloadHandler),
          this.provider.off(hE, this.onConnectHandler),
          this.provider.off(h_, this.onDisconnectHandler),
          this.provider.off(hI, this.onProviderErrorHandler),
          clearTimeout(this.pingTimeout);
      }
      async registerEventListeners() {
        let t = await cq();
        (function (t) {
          var i, r;
          switch (sY()) {
            case sz:
              (i = t),
                !sV() &&
                  sG() &&
                  (window.addEventListener("online", () => i(!0)),
                  window.addEventListener("offline", () => i(!1)));
              break;
            case s$:
              (r = t),
                sV() &&
                  null != e.g &&
                  e.g.NetInfo &&
                  e.g?.NetInfo.addEventListener((e) => r(e?.isConnected));
          }
        })(async (e) => {
          t !== e &&
            ((t = e),
            e
              ? await this.transportOpen().catch((e) =>
                  this.logger.error(e, e?.message)
                )
              : ((this.hasExperiencedNetworkDisruption = !0),
                await this.transportDisconnect(),
                (this.transportExplicitlyClosed = !1)));
        }),
          this.core.heartbeat.on(cV.HEARTBEAT_EVENTS.pulse, async () => {
            var e;
            if (
              !this.transportExplicitlyClosed &&
              !this.connected &&
              (!(sG() && (0, iW.getDocument)()) ||
                (null == (e = (0, iW.getDocument)())
                  ? void 0
                  : e.visibilityState) === "visible")
            )
              try {
                await this.confirmOnlineStateOrThrow(),
                  await this.transportOpen();
              } catch (e) {
                this.logger.warn(e, e?.message);
              }
          });
      }
      async onProviderDisconnect() {
        clearTimeout(this.pingTimeout),
          this.events.emit("relayer_disconnect"),
          (this.connectionAttemptInProgress = !1),
          !this.reconnectInProgress &&
            ((this.reconnectInProgress = !0),
            await this.subscriber.stop(),
            this.subscriber.hasAnyTopics &&
              (this.transportExplicitlyClosed ||
                (this.reconnectTimeout = setTimeout(async () => {
                  await this.transportOpen().catch((e) =>
                    this.logger.error(e, e?.message)
                  ),
                    (this.reconnectTimeout = void 0),
                    (this.reconnectInProgress = !1);
                }, (0, iL.toMiliseconds)(0.1)))));
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
      async toEstablishConnection() {
        if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
          if (this.connectPromise) return void (await this.connectPromise);
          await this.connect();
        }
      }
    }
    function ur(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t)
      );
    }
    function us(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    }
    let un = "[object Arguments]",
      ua = "[object Object]";
    function uo() {}
    function ul(e) {
      if (!e || "object" != typeof e) return !1;
      let t = Object.getPrototypeOf(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        "[object Object]" === Object.prototype.toString.call(e)
      );
    }
    var uc = Object.defineProperty,
      uh = Object.getOwnPropertySymbols,
      ud = Object.prototype.hasOwnProperty,
      uu = Object.prototype.propertyIsEnumerable,
      up = (e, t, i) =>
        t in e
          ? uc(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      uf = (e, t) => {
        for (var i in t || (t = {})) ud.call(t, i) && up(e, i, t[i]);
        if (uh) for (var i of uh(t)) uu.call(t, i) && up(e, i, t[i]);
        return e;
      },
      ug = (e, t, i) => up(e, "symbol" != typeof t ? t + "" : t, i);
    class uy extends c8 {
      constructor(e, t, i, r = hh, s) {
        super(e, t, i, r),
          (this.core = e),
          (this.logger = t),
          (this.name = i),
          ug(this, "map", new Map()),
          ug(this, "version", "0.3"),
          ug(this, "cached", []),
          ug(this, "initialized", !1),
          ug(this, "getKey"),
          ug(this, "storagePrefix", hh),
          ug(this, "recentlyDeleted", []),
          ug(this, "recentlyDeletedLimit", 200),
          ug(this, "init", async () => {
            this.initialized ||
              (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach((e) => {
                var t;
                this.getKey && null !== e && !cT(e)
                  ? this.map.set(this.getKey(e), e)
                  : (null == (t = e?.proposer) ? void 0 : t.publicKey)
                  ? this.map.set(e.id, e)
                  : e?.topic && this.map.set(e.topic, e);
              }),
              (this.cached = []),
              (this.initialized = !0));
          }),
          ug(this, "set", async (e, t) => {
            this.isInitialized(),
              this.map.has(e)
                ? await this.update(e, t)
                : (this.logger.debug("Setting value"),
                  this.logger.trace({
                    type: "method",
                    method: "set",
                    key: e,
                    value: t,
                  }),
                  this.map.set(e, t),
                  await this.persist());
          }),
          ug(
            this,
            "get",
            (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )
          ),
          ug(
            this,
            "getAll",
            (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((i) => {
                      var r;
                      return (
                        (r = t[i]),
                        (function e(t, i, r, s, n, a, o) {
                          let l = o(t, i, r, s, n, a);
                          if (void 0 !== l) return l;
                          if (typeof t == typeof i)
                            switch (typeof t) {
                              case "bigint":
                              case "string":
                              case "boolean":
                              case "symbol":
                              case "undefined":
                              case "function":
                                return t === i;
                              case "number":
                                return t === i || Object.is(t, i);
                            }
                          return (function t(i, r, s, n) {
                            if (Object.is(i, r)) return !0;
                            let a = us(i),
                              o = us(r);
                            if (
                              (a === un && (a = ua),
                              o === un && (o = ua),
                              a !== o)
                            )
                              return !1;
                            switch (a) {
                              case "[object String]":
                                return i.toString() === r.toString();
                              case "[object Number]": {
                                let e = i.valueOf(),
                                  t = r.valueOf();
                                return (
                                  e === t ||
                                  (Number.isNaN(e) && Number.isNaN(t))
                                );
                              }
                              case "[object Boolean]":
                              case "[object Date]":
                              case "[object Symbol]":
                                return Object.is(i.valueOf(), r.valueOf());
                              case "[object RegExp]":
                                return (
                                  i.source === r.source && i.flags === r.flags
                                );
                              case "[object Function]":
                                return i === r;
                            }
                            let l = (s = s ?? new Map()).get(i),
                              c = s.get(r);
                            if (null != l && null != c) return l === r;
                            s.set(i, r), s.set(r, i);
                            try {
                              switch (a) {
                                case "[object Map]":
                                  if (i.size !== r.size) return !1;
                                  for (let [t, a] of i.entries())
                                    if (
                                      !r.has(t) ||
                                      !e(a, r.get(t), t, i, r, s, n)
                                    )
                                      return !1;
                                  return !0;
                                case "[object Set]": {
                                  if (i.size !== r.size) return !1;
                                  let t = Array.from(i.values()),
                                    a = Array.from(r.values());
                                  for (let o = 0; o < t.length; o++) {
                                    let l = t[o],
                                      c = a.findIndex((t) =>
                                        e(l, t, void 0, i, r, s, n)
                                      );
                                    if (-1 === c) return !1;
                                    a.splice(c, 1);
                                  }
                                  return !0;
                                }
                                case "[object Array]":
                                case "[object Uint8Array]":
                                case "[object Uint8ClampedArray]":
                                case "[object Uint16Array]":
                                case "[object Uint32Array]":
                                case "[object BigUint64Array]":
                                case "[object Int8Array]":
                                case "[object Int16Array]":
                                case "[object Int32Array]":
                                case "[object BigInt64Array]":
                                case "[object Float32Array]":
                                case "[object Float64Array]":
                                  if (
                                    ("u" > typeof J.Buffer &&
                                      J.Buffer.isBuffer(i) !==
                                        J.Buffer.isBuffer(r)) ||
                                    i.length !== r.length
                                  )
                                    return !1;
                                  for (let t = 0; t < i.length; t++)
                                    if (!e(i[t], r[t], t, i, r, s, n))
                                      return !1;
                                  return !0;
                                case "[object ArrayBuffer]":
                                  return (
                                    i.byteLength === r.byteLength &&
                                    t(
                                      new Uint8Array(i),
                                      new Uint8Array(r),
                                      s,
                                      n
                                    )
                                  );
                                case "[object DataView]":
                                  return (
                                    i.byteLength === r.byteLength &&
                                    i.byteOffset === r.byteOffset &&
                                    t(
                                      new Uint8Array(i),
                                      new Uint8Array(r),
                                      s,
                                      n
                                    )
                                  );
                                case "[object Error]":
                                  return (
                                    i.name === r.name && i.message === r.message
                                  );
                                case ua: {
                                  if (
                                    !(
                                      t(i.constructor, r.constructor, s, n) ||
                                      (ul(i) && ul(r))
                                    )
                                  )
                                    return !1;
                                  let a = [...Object.keys(i), ...ur(i)],
                                    o = [...Object.keys(r), ...ur(r)];
                                  if (a.length !== o.length) return !1;
                                  for (let t = 0; t < a.length; t++) {
                                    let o = a[t],
                                      l = i[o];
                                    if (!Object.hasOwn(r, o)) return !1;
                                    let c = r[o];
                                    if (!e(l, c, o, i, r, s, n)) return !1;
                                  }
                                  return !0;
                                }
                                default:
                                  return !1;
                              }
                            } finally {
                              s.delete(i), s.delete(r);
                            }
                          })(t, i, a, o);
                        })(r, e[i], void 0, void 0, void 0, void 0, uo)
                      );
                    })
                  )
                : this.values
            )
          ),
          ug(this, "update", async (e, t) => {
            this.isInitialized(),
              this.logger.debug("Updating value"),
              this.logger.trace({
                type: "method",
                method: "update",
                key: e,
                update: t,
              });
            let i = uf(uf({}, this.getData(e)), t);
            this.map.set(e, i), await this.persist();
          }),
          ug(this, "delete", async (e, t) => {
            this.isInitialized(),
              this.map.has(e) &&
                (this.logger.debug("Deleting value"),
                this.logger.trace({
                  type: "method",
                  method: "delete",
                  key: e,
                  reason: t,
                }),
                this.map.delete(e),
                this.addToRecentlyDeleted(e),
                await this.persist());
          }),
          (this.logger = sT(t, this.name)),
          (this.storagePrefix = r),
          (this.getKey = s);
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      get length() {
        return this.map.size;
      }
      get keys() {
        return Array.from(this.map.keys());
      }
      get values() {
        return Array.from(this.map.values());
      }
      addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e),
          this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
            this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
      }
      async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getData(e) {
        let t = this.map.get(e);
        if (!t) {
          if (this.recentlyDeleted.includes(e)) {
            let { message: t } = cP(
              "MISSING_OR_INVALID",
              `Record was recently deleted - ${this.name}: ${e}`
            );
            throw (this.logger.error(t), Error(t));
          }
          let { message: t } = cP("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw (this.logger.error(t), Error(t));
        }
        return t;
      }
      async persist() {
        await this.setDataStore(this.values);
      }
      async restore() {
        try {
          let e = await this.getDataStore();
          if (typeof e > "u" || !e.length) return;
          if (this.map.size) {
            let { message: e } = cP("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(e), Error(e));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              value: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e);
        }
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var um = Object.defineProperty,
      uw = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? um(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class ub {
      constructor(e, t) {
        (this.core = e),
          (this.logger = t),
          uw(this, "name", "pairing"),
          uw(this, "version", "0.3"),
          uw(this, "events", new iD.default()),
          uw(this, "pairings"),
          uw(this, "initialized", !1),
          uw(this, "storagePrefix", hh),
          uw(this, "ignoredPayloadTypes", [1]),
          uw(this, "registeredMethods", []),
          uw(this, "init", async () => {
            this.initialized ||
              (await this.pairings.init(),
              await this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              (this.initialized = !0),
              this.logger.trace("Initialized"));
          }),
          uw(this, "register", ({ methods: e }) => {
            this.isInitialized(),
              (this.registeredMethods = [
                ...new Set([...this.registeredMethods, ...e]),
              ]);
          }),
          uw(this, "create", async (e) => {
            this.isInitialized();
            let t = lY(),
              i = await this.core.crypto.setSymKey(t),
              r = s4(iL.FIVE_MINUTES),
              s = { protocol: "irn" },
              n = {
                topic: i,
                expiry: r,
                relay: s,
                active: !1,
                methods: e?.methods,
              },
              a = cl({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: i,
                symKey: t,
                relay: s,
                expiryTimestamp: r,
                methods: e?.methods,
              });
            return (
              this.events.emit(hR, n),
              this.core.expirer.set(i, r),
              await this.pairings.set(i, n),
              await this.core.relayer.subscribe(i, {
                transportType: e?.transportType,
                internal: e?.internal,
              }),
              { topic: i, uri: a }
            );
          }),
          uw(this, "pair", async (e) => {
            let t;
            this.isInitialized();
            let i = this.core.eventClient.createEvent({
              properties: { topic: e?.uri, trace: ["pairing_started"] },
            });
            this.isValidPair(e, i);
            let {
              topic: r,
              symKey: s,
              relay: n,
              expiryTimestamp: a,
              methods: o,
            } = co(e.uri);
            if (
              ((i.props.properties.topic = r),
              i.addTrace("pairing_uri_validation_success"),
              i.addTrace("pairing_uri_not_expired"),
              this.pairings.keys.includes(r))
            ) {
              if (
                ((t = this.pairings.get(r)),
                i.addTrace("existing_pairing"),
                t.active)
              )
                throw (
                  (i.setError("active_pairing_already_exists"),
                  Error(
                    `Pairing already exists: ${r}. Please try again with a new connection URI.`
                  ))
                );
              i.addTrace("pairing_not_expired");
            }
            let l = a || s4(iL.FIVE_MINUTES),
              c = { topic: r, relay: n, expiry: l, active: !1, methods: o };
            this.core.expirer.set(r, l),
              await this.pairings.set(r, c),
              i.addTrace("store_new_pairing"),
              e.activatePairing && (await this.activate({ topic: r })),
              this.events.emit(hR, c),
              i.addTrace("emit_inactive_pairing"),
              this.core.crypto.keychain.has(r) ||
                (await this.core.crypto.setSymKey(s, r)),
              i.addTrace("subscribing_pairing_topic");
            try {
              await this.core.relayer.confirmOnlineStateOrThrow();
            } catch {
              i.setError("no_internet_connection");
            }
            try {
              await this.core.relayer.subscribe(r, { relay: n });
            } catch (e) {
              throw (i.setError("subscribe_pairing_topic_failure"), e);
            }
            return i.addTrace("subscribe_pairing_topic_success"), c;
          }),
          uw(this, "activate", async ({ topic: e }) => {
            this.isInitialized();
            let t = s4(iL.FIVE_MINUTES);
            this.core.expirer.set(e, t),
              await this.pairings.update(e, { active: !0, expiry: t });
          }),
          uw(this, "ping", async (e) => {
            this.isInitialized(),
              await this.isValidPing(e),
              this.logger.warn(
                "ping() is deprecated and will be removed in the next major release."
              );
            let { topic: t } = e;
            if (this.pairings.keys.includes(t)) {
              let e = await this.sendRequest(t, "wc_pairingPing", {}),
                { done: i, resolve: r, reject: s } = s5();
              this.events.once(s9("pairing_ping", e), ({ error: e }) => {
                e ? s(e) : r();
              }),
                await i();
            }
          }),
          uw(this, "updateExpiry", async ({ topic: e, expiry: t }) => {
            this.isInitialized(), await this.pairings.update(e, { expiry: t });
          }),
          uw(this, "updateMetadata", async ({ topic: e, metadata: t }) => {
            this.isInitialized(),
              await this.pairings.update(e, { peerMetadata: t });
          }),
          uw(
            this,
            "getPairings",
            () => (this.isInitialized(), this.pairings.values)
          ),
          uw(this, "disconnect", async (e) => {
            this.isInitialized(), await this.isValidDisconnect(e);
            let { topic: t } = e;
            this.pairings.keys.includes(t) &&
              (await this.sendRequest(
                t,
                "wc_pairingDelete",
                cC("USER_DISCONNECTED")
              ),
              await this.deletePairing(t));
          }),
          uw(this, "formatUriFromPairing", (e) => {
            this.isInitialized();
            let { topic: t, relay: i, expiry: r, methods: s } = e,
              n = this.core.crypto.keychain.get(t);
            return cl({
              protocol: this.core.protocol,
              version: this.core.version,
              topic: t,
              symKey: n,
              relay: i,
              expiryTimestamp: r,
              methods: s,
            });
          }),
          uw(this, "sendRequest", async (e, t, i) => {
            let r = (0, ha.formatJsonRpcRequest)(t, i),
              s = await this.core.crypto.encode(e, r),
              n = hO[t].req;
            return (
              this.core.history.set(e, r),
              this.core.relayer.publish(e, s, n),
              r.id
            );
          }),
          uw(this, "sendResult", async (e, t, i) => {
            let r = (0, ha.formatJsonRpcResult)(e, i),
              s = await this.core.crypto.encode(t, r),
              n = hO[(await this.core.history.get(t, e)).request.method].res;
            await this.core.relayer.publish(t, s, n),
              await this.core.history.resolve(r);
          }),
          uw(this, "sendError", async (e, t, i) => {
            let r = (0, ha.formatJsonRpcError)(e, i),
              s = await this.core.crypto.encode(t, r),
              n = (await this.core.history.get(t, e)).request.method,
              a = hO[n] ? hO[n].res : hO.unregistered_method.res;
            await this.core.relayer.publish(t, s, a),
              await this.core.history.resolve(r);
          }),
          uw(this, "deletePairing", async (e, t) => {
            await this.core.relayer.unsubscribe(e),
              await Promise.all([
                this.pairings.delete(e, cC("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(e),
                t ? Promise.resolve() : this.core.expirer.del(e),
              ]);
          }),
          uw(this, "cleanup", async () => {
            let e = this.pairings.getAll().filter((e) => s7(e.expiry));
            await Promise.all(e.map((e) => this.deletePairing(e.topic)));
          }),
          uw(this, "onRelayEventRequest", async (e) => {
            let { topic: t, payload: i } = e;
            switch (i.method) {
              case "wc_pairingPing":
                return await this.onPairingPingRequest(t, i);
              case "wc_pairingDelete":
                return await this.onPairingDeleteRequest(t, i);
              default:
                return await this.onUnknownRpcMethodRequest(t, i);
            }
          }),
          uw(this, "onRelayEventResponse", async (e) => {
            let { topic: t, payload: i } = e,
              r = (await this.core.history.get(t, i.id)).request.method;
            return "wc_pairingPing" === r
              ? this.onPairingPingResponse(t, i)
              : this.onUnknownRpcMethodResponse(r);
          }),
          uw(this, "onPairingPingRequest", async (e, t) => {
            let { id: i } = t;
            try {
              this.isValidPing({ topic: e }),
                await this.sendResult(i, e, !0),
                this.events.emit("pairing_ping", { id: i, topic: e });
            } catch (t) {
              await this.sendError(i, e, t), this.logger.error(t);
            }
          }),
          uw(this, "onPairingPingResponse", (e, t) => {
            let { id: i } = t;
            setTimeout(() => {
              (0, ho.isJsonRpcResult)(t)
                ? this.events.emit(s9("pairing_ping", i), {})
                : (0, ho.isJsonRpcError)(t) &&
                  this.events.emit(s9("pairing_ping", i), { error: t.error });
            }, 500);
          }),
          uw(this, "onPairingDeleteRequest", async (e, t) => {
            let { id: i } = t;
            try {
              this.isValidDisconnect({ topic: e }),
                await this.deletePairing(e),
                this.events.emit(hN, { id: i, topic: e });
            } catch (t) {
              await this.sendError(i, e, t), this.logger.error(t);
            }
          }),
          uw(this, "onUnknownRpcMethodRequest", async (e, t) => {
            let { id: i, method: r } = t;
            try {
              if (this.registeredMethods.includes(r)) return;
              let t = cC("WC_METHOD_UNSUPPORTED", r);
              await this.sendError(i, e, t), this.logger.error(t);
            } catch (t) {
              await this.sendError(i, e, t), this.logger.error(t);
            }
          }),
          uw(this, "onUnknownRpcMethodResponse", (e) => {
            this.registeredMethods.includes(e) ||
              this.logger.error(cC("WC_METHOD_UNSUPPORTED", e));
          }),
          uw(this, "isValidPair", (e, t) => {
            var i;
            if (!cL(e)) {
              let { message: i } = cP(
                "MISSING_OR_INVALID",
                `pair() params: ${e}`
              );
              throw (t.setError(hH), Error(i));
            }
            if (
              !(function (e) {
                function t(e) {
                  try {
                    return "u" > typeof new URL(e);
                  } catch {
                    return !1;
                  }
                }
                try {
                  if (cO(e, !1)) {
                    if (t(e)) return !0;
                    let i = na(e);
                    return t(i);
                  }
                } catch {}
                return !1;
              })(e.uri)
            ) {
              let { message: i } = cP(
                "MISSING_OR_INVALID",
                `pair() uri: ${e.uri}`
              );
              throw (t.setError(hH), Error(i));
            }
            let r = co(e?.uri);
            if (!(null != (i = r?.relay) && i.protocol)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                "pair() uri#relay-protocol"
              );
              throw (t.setError(hH), Error(e));
            }
            if (!(null != r && r.symKey)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                "pair() uri#symKey"
              );
              throw (t.setError(hH), Error(e));
            }
            if (
              null != r &&
              r.expiryTimestamp &&
              (0, iL.toMiliseconds)(r?.expiryTimestamp) < Date.now()
            ) {
              t.setError("pairing_expired");
              let { message: e } = cP(
                "EXPIRED",
                "pair() URI has expired. Please try again with a new connection URI."
              );
              throw Error(e);
            }
          }),
          uw(this, "isValidPing", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `ping() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t } = e;
            await this.isValidPairingTopic(t);
          }),
          uw(this, "isValidDisconnect", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `disconnect() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t } = e;
            await this.isValidPairingTopic(t);
          }),
          uw(this, "isValidPairingTopic", async (e) => {
            if (!cO(e, !1)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `pairing topic should be a string: ${e}`
              );
              throw Error(t);
            }
            if (!this.pairings.keys.includes(e)) {
              let { message: t } = cP(
                "NO_MATCHING_KEY",
                `pairing topic doesn't exist: ${e}`
              );
              throw Error(t);
            }
            if (s7(this.pairings.get(e).expiry)) {
              await this.deletePairing(e);
              let { message: t } = cP("EXPIRED", `pairing topic: ${e}`);
              throw Error(t);
            }
          }),
          (this.core = e),
          (this.logger = sT(t, this.name)),
          (this.pairings = new uy(
            this.core,
            this.logger,
            this.name,
            this.storagePrefix
          ));
      }
      get context() {
        return sk(this.logger);
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
      registerRelayerEvents() {
        this.core.relayer.on(hy, async (e) => {
          let { topic: t, message: i, transportType: r } = e;
          if (
            this.pairings.keys.includes(t) &&
            r !== hA &&
            !this.ignoredPayloadTypes.includes(
              this.core.crypto.getPayloadType(i)
            )
          )
            try {
              let e = await this.core.crypto.decode(t, i);
              (0, ho.isJsonRpcRequest)(e)
                ? (this.core.history.set(t, e),
                  await this.onRelayEventRequest({ topic: t, payload: e }))
                : (0, ho.isJsonRpcResponse)(e) &&
                  (await this.core.history.resolve(e),
                  await this.onRelayEventResponse({ topic: t, payload: e }),
                  this.core.history.delete(t, e.id)),
                await this.core.relayer.messages.ack(t, i);
            } catch (e) {
              this.logger.error(e);
            }
        });
      }
      registerExpirerEvents() {
        this.core.expirer.on(hW, async (e) => {
          let { topic: t } = s6(e.target);
          t &&
            this.pairings.keys.includes(t) &&
            (await this.deletePairing(t, !0),
            this.events.emit("pairing_expire", { topic: t }));
        });
      }
    }
    var uv = Object.defineProperty,
      uE = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? uv(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class u_ extends c1 {
      constructor(e, t) {
        super(e, t),
          (this.core = e),
          (this.logger = t),
          uE(this, "records", new Map()),
          uE(this, "events", new iD.EventEmitter()),
          uE(this, "name", "history"),
          uE(this, "version", "0.3"),
          uE(this, "cached", []),
          uE(this, "initialized", !1),
          uE(this, "storagePrefix", hh),
          uE(this, "init", async () => {
            this.initialized ||
              (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach((e) => this.records.set(e.id, e)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          }),
          uE(this, "set", (e, t, i) => {
            if (
              (this.isInitialized(),
              this.logger.debug("Setting JSON-RPC request history record"),
              this.logger.trace({
                type: "method",
                method: "set",
                topic: e,
                request: t,
                chainId: i,
              }),
              this.records.has(t.id))
            )
              return;
            let r = {
              id: t.id,
              topic: e,
              request: { method: t.method, params: t.params || null },
              chainId: i,
              expiry: s4(iL.THIRTY_DAYS),
            };
            this.records.set(r.id, r), this.persist(), this.events.emit(hj, r);
          }),
          uE(this, "resolve", async (e) => {
            if (
              (this.isInitialized(),
              this.logger.debug("Updating JSON-RPC response history record"),
              this.logger.trace({
                type: "method",
                method: "update",
                response: e,
              }),
              !this.records.has(e.id))
            )
              return;
            let t = await this.getRecord(e.id);
            typeof t.response > "u" &&
              ((t.response = (0, ho.isJsonRpcError)(e)
                ? { error: e.error }
                : { result: e.result }),
              this.records.set(t.id, t),
              this.persist(),
              this.events.emit(hD, t));
          }),
          uE(
            this,
            "get",
            async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )
          ),
          uE(this, "delete", (e, t) => {
            this.isInitialized(),
              this.logger.debug("Deleting record"),
              this.logger.trace({ type: "method", method: "delete", id: t }),
              this.values.forEach((i) => {
                i.topic === e &&
                  (("u" > typeof t && i.id !== t) ||
                    (this.records.delete(i.id), this.events.emit(hM, i)));
              }),
              this.persist();
          }),
          uE(
            this,
            "exists",
            async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )
          ),
          uE(this, "on", (e, t) => {
            this.events.on(e, t);
          }),
          uE(this, "once", (e, t) => {
            this.events.once(e, t);
          }),
          uE(this, "off", (e, t) => {
            this.events.off(e, t);
          }),
          uE(this, "removeListener", (e, t) => {
            this.events.removeListener(e, t);
          }),
          (this.logger = sT(t, this.name));
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      get size() {
        return this.records.size;
      }
      get keys() {
        return Array.from(this.records.keys());
      }
      get values() {
        return Array.from(this.records.values());
      }
      get pending() {
        let e = [];
        return (
          this.values.forEach((t) => {
            if ("u" > typeof t.response) return;
            let i = {
              topic: t.topic,
              request: (0, ha.formatJsonRpcRequest)(
                t.request.method,
                t.request.params,
                t.id
              ),
              chainId: t.chainId,
            };
            return e.push(i);
          }),
          e
        );
      }
      async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getRecord(e) {
        this.isInitialized();
        let t = this.records.get(e);
        if (!t) {
          let { message: t } = cP("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw Error(t);
        }
        return t;
      }
      async persist() {
        await this.setJsonRpcRecords(this.values),
          this.events.emit("history_sync");
      }
      async restore() {
        try {
          let e = await this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length) return;
          if (this.records.size) {
            let { message: e } = cP("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(e), Error(e));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
              type: "method",
              method: "restore",
              records: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e);
        }
      }
      registerEventListeners() {
        this.events.on(hj, (e) => {
          this.logger.info(`Emitting ${hj}`),
            this.logger.debug({ type: "event", event: hj, record: e });
        }),
          this.events.on(hD, (e) => {
            this.logger.info(`Emitting ${hD}`),
              this.logger.debug({ type: "event", event: hD, record: e });
          }),
          this.events.on(hM, (e) => {
            this.logger.info(`Emitting ${hM}`),
              this.logger.debug({ type: "event", event: hM, record: e });
          }),
          this.core.heartbeat.on(cV.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup();
          });
      }
      cleanup() {
        try {
          this.isInitialized();
          let e = !1;
          this.records.forEach((t) => {
            (0, iL.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
              (this.logger.info(`Deleting expired history log: ${t.id}`),
              this.records.delete(t.id),
              this.events.emit(hM, t, !1),
              (e = !0));
          }),
            e && this.persist();
        } catch (e) {
          this.logger.warn(e);
        }
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var uI = Object.defineProperty,
      uS = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? uI(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class uA extends c4 {
      constructor(e, t) {
        super(e, t),
          (this.core = e),
          (this.logger = t),
          uS(this, "expirations", new Map()),
          uS(this, "events", new iD.EventEmitter()),
          uS(this, "name", "expirer"),
          uS(this, "version", "0.3"),
          uS(this, "cached", []),
          uS(this, "initialized", !1),
          uS(this, "storagePrefix", hh),
          uS(this, "init", async () => {
            this.initialized ||
              (this.logger.trace("Initialized"),
              await this.restore(),
              this.cached.forEach((e) => this.expirations.set(e.target, e)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          }),
          uS(this, "has", (e) => {
            try {
              let t = this.formatTarget(e);
              return "u" > typeof this.getExpiration(t);
            } catch {
              return !1;
            }
          }),
          uS(this, "set", (e, t) => {
            this.isInitialized();
            let i = this.formatTarget(e),
              r = { target: i, expiry: t };
            this.expirations.set(i, r),
              this.checkExpiry(i, r),
              this.events.emit(hU, { target: i, expiration: r });
          }),
          uS(this, "get", (e) => {
            this.isInitialized();
            let t = this.formatTarget(e);
            return this.getExpiration(t);
          }),
          uS(this, "del", (e) => {
            if ((this.isInitialized(), this.has(e))) {
              let t = this.formatTarget(e),
                i = this.getExpiration(t);
              this.expirations.delete(t),
                this.events.emit(hL, { target: t, expiration: i });
            }
          }),
          uS(this, "on", (e, t) => {
            this.events.on(e, t);
          }),
          uS(this, "once", (e, t) => {
            this.events.once(e, t);
          }),
          uS(this, "off", (e, t) => {
            this.events.off(e, t);
          }),
          uS(this, "removeListener", (e, t) => {
            this.events.removeListener(e, t);
          }),
          (this.logger = sT(t, this.name));
      }
      get context() {
        return sk(this.logger);
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//" +
          this.name
        );
      }
      get length() {
        return this.expirations.size;
      }
      get keys() {
        return Array.from(this.expirations.keys());
      }
      get values() {
        return Array.from(this.expirations.values());
      }
      formatTarget(e) {
        if ("string" == typeof e) return s8("topic", e);
        if ("number" == typeof e) return s8("id", e);
        let { message: t } = cP("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw Error(t);
      }
      async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
      }
      async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
      }
      async persist() {
        await this.setExpirations(this.values),
          this.events.emit("expirer_sync");
      }
      async restore() {
        try {
          let e = await this.getExpirations();
          if (typeof e > "u" || !e.length) return;
          if (this.expirations.size) {
            let { message: e } = cP("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(e), Error(e));
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored expirations for ${this.name}`
            ),
            this.logger.trace({
              type: "method",
              method: "restore",
              expirations: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e);
        }
      }
      getExpiration(e) {
        let t = this.expirations.get(e);
        if (!t) {
          let { message: t } = cP("NO_MATCHING_KEY", `${this.name}: ${e}`);
          throw (this.logger.warn(t), Error(t));
        }
        return t;
      }
      checkExpiry(e, t) {
        let { expiry: i } = t;
        (0, iL.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
      }
      expire(e, t) {
        this.expirations.delete(e),
          this.events.emit(hW, { target: e, expiration: t });
      }
      checkExpirations() {
        this.core.relayer.connected &&
          this.expirations.forEach((e, t) => this.checkExpiry(t, e));
      }
      registerEventListeners() {
        this.core.heartbeat.on(cV.HEARTBEAT_EVENTS.pulse, () =>
          this.checkExpirations()
        ),
          this.events.on(hU, (e) => {
            this.logger.info(`Emitting ${hU}`),
              this.logger.debug({ type: "event", event: hU, data: e }),
              this.persist();
          }),
          this.events.on(hW, (e) => {
            this.logger.info(`Emitting ${hW}`),
              this.logger.debug({ type: "event", event: hW, data: e }),
              this.persist();
          }),
          this.events.on(hL, (e) => {
            this.logger.info(`Emitting ${hL}`),
              this.logger.debug({ type: "event", event: hL, data: e }),
              this.persist();
          });
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
    }
    var uP = Object.defineProperty,
      uC = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? uP(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class ux extends c7 {
      constructor(e, t, i) {
        super(e, t, i),
          (this.core = e),
          (this.logger = t),
          (this.store = i),
          uC(this, "name", "verify-api"),
          uC(this, "abortController"),
          uC(this, "isDevEnv"),
          uC(this, "verifyUrlV3", hK),
          uC(this, "storagePrefix", hh),
          uC(this, "version", 2),
          uC(this, "publicKey"),
          uC(this, "fetchPromise"),
          uC(this, "init", async () => {
            var e;
            this.isDevEnv ||
              ((this.publicKey = await this.store.getItem(this.storeKey)),
              this.publicKey &&
                (0, iL.toMiliseconds)(
                  null == (e = this.publicKey) ? void 0 : e.expiresAt
                ) < Date.now() &&
                (this.logger.debug("verify v2 public key expired"),
                await this.removePublicKey()));
          }),
          uC(this, "register", async (e) => {
            if (!sG() || this.isDevEnv) return;
            let t = window.location.origin,
              { id: i, decryptedId: r } = e,
              s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${i}&decryptedId=${r}`;
            try {
              let e = (0, iW.getDocument)(),
                t = this.startAbortTimer(5 * iL.ONE_SECOND),
                r = await new Promise((r, n) => {
                  let a = () => {
                    window.removeEventListener("message", l),
                      e.body.removeChild(o),
                      n("attestation aborted");
                  };
                  this.abortController.signal.addEventListener("abort", a);
                  let o = e.createElement("iframe");
                  (o.src = s),
                    (o.style.display = "none"),
                    o.addEventListener("error", a, {
                      signal: this.abortController.signal,
                    });
                  let l = (s) => {
                    if (s.data && "string" == typeof s.data)
                      try {
                        let n = JSON.parse(s.data);
                        if ("verify_attestation" === n.type) {
                          if ((0, st.decodeJWT)(n.attestation).payload.id !== i)
                            return;
                          clearInterval(t),
                            e.body.removeChild(o),
                            this.abortController.signal.removeEventListener(
                              "abort",
                              a
                            ),
                            window.removeEventListener("message", l),
                            r(null === n.attestation ? "" : n.attestation);
                        }
                      } catch (e) {
                        this.logger.warn(e);
                      }
                  };
                  e.body.appendChild(o),
                    window.addEventListener("message", l, {
                      signal: this.abortController.signal,
                    });
                });
              return this.logger.debug(r, "jwt attestation"), r;
            } catch (e) {
              this.logger.warn(e);
            }
            return "";
          }),
          uC(this, "resolve", async (e) => {
            if (this.isDevEnv) return "";
            let { attestationId: t, hash: i, encryptedId: r } = e;
            if ("" === t)
              return void this.logger.debug(
                "resolve: attestationId is empty, skipping"
              );
            if (t) {
              if ((0, st.decodeJWT)(t).payload.id !== r) return;
              let e = await this.isValidJwtAttestation(t);
              if (e)
                return e.isVerified
                  ? e
                  : void this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
            }
            if (!i) return;
            let s = this.getVerifyUrl(e?.verifyUrl);
            return this.fetchAttestation(i, s);
          }),
          uC(this, "fetchAttestation", async (e, t) => {
            this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
            let i = this.startAbortTimer(5 * iL.ONE_SECOND),
              r = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                signal: this.abortController.signal,
              });
            return clearTimeout(i), 200 === r.status ? await r.json() : void 0;
          }),
          uC(this, "getVerifyUrl", (e) => {
            let t = e || hB;
            return (
              hq.includes(t) ||
                (this.logger.info(
                  `verify url: ${t}, not included in trusted list, assigning default: ${hB}`
                ),
                (t = hB)),
              t
            );
          }),
          uC(this, "fetchPublicKey", async () => {
            try {
              this.logger.debug(
                `fetching public key from: ${this.verifyUrlV3}`
              );
              let e = this.startAbortTimer(iL.FIVE_SECONDS),
                t = await fetch(`${this.verifyUrlV3}/public-key`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(e), await t.json();
            } catch (e) {
              this.logger.warn(e);
            }
          }),
          uC(this, "persistPublicKey", async (e) => {
            this.logger.debug(e, "persisting public key to local storage"),
              await this.store.setItem(this.storeKey, e),
              (this.publicKey = e);
          }),
          uC(this, "removePublicKey", async () => {
            this.logger.debug("removing verify v2 public key from storage"),
              await this.store.removeItem(this.storeKey),
              (this.publicKey = void 0);
          }),
          uC(this, "isValidJwtAttestation", async (e) => {
            let t = await this.getPublicKey();
            try {
              if (t) return this.validateAttestation(e, t);
            } catch (e) {
              this.logger.error(e),
                this.logger.warn("error validating attestation");
            }
            let i = await this.fetchAndPersistPublicKey();
            try {
              if (i) return this.validateAttestation(e, i);
            } catch (e) {
              this.logger.error(e),
                this.logger.warn("error validating attestation");
            }
          }),
          uC(this, "getPublicKey", async () =>
            this.publicKey
              ? this.publicKey
              : await this.fetchAndPersistPublicKey()
          ),
          uC(this, "fetchAndPersistPublicKey", async () => {
            if (this.fetchPromise)
              return await this.fetchPromise, this.publicKey;
            this.fetchPromise = new Promise(async (e) => {
              let t = await this.fetchPublicKey();
              t && (await this.persistPublicKey(t), e(t));
            });
            let e = await this.fetchPromise;
            return (this.fetchPromise = void 0), e;
          }),
          uC(this, "validateAttestation", (e, t) => {
            let i = (function (e, t) {
                let i,
                  r,
                  [s, n, a] = e.split("."),
                  o = J.Buffer.from(l2(a), "base64");
                if (64 !== o.length) throw Error("Invalid signature length");
                let l = o.slice(0, 32),
                  c = o.slice(32, 64),
                  h = ab(`${s}.${n}`),
                  d =
                    ((i = J.Buffer.from(t.x, "base64")),
                    (r = J.Buffer.from(t.y, "base64")),
                    (0, ss.concat)([new Uint8Array([4]), i, r]));
                if (!l$.verify((0, ss.concat)([l, c]), h, d))
                  throw Error("Invalid signature");
                return (0, st.decodeJWT)(e).payload;
              })(e, t.publicKey),
              r = {
                hasExpired: (0, iL.toMiliseconds)(i.exp) < Date.now(),
                payload: i,
              };
            if (r.hasExpired)
              throw (
                (this.logger.warn("resolve: jwt attestation expired"),
                Error("JWT attestation expired"))
              );
            return {
              origin: r.payload.origin,
              isScam: r.payload.isScam,
              isVerified: r.payload.isVerified,
            };
          }),
          (this.logger = sT(t, this.name)),
          (this.abortController = new AbortController()),
          (this.isDevEnv = nn()),
          this.init();
      }
      get storeKey() {
        return (
          this.storagePrefix +
          this.version +
          this.core.customStoragePrefix +
          "//verify:public:key"
        );
      }
      get context() {
        return sk(this.logger);
      }
      startAbortTimer(e) {
        return (
          (this.abortController = new AbortController()),
          setTimeout(
            () => this.abortController.abort(),
            (0, iL.toMiliseconds)(e)
          )
        );
      }
    }
    var uk = Object.defineProperty,
      uT = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? uk(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class uO extends c9 {
      constructor(e, t) {
        super(e, t),
          (this.projectId = e),
          (this.logger = t),
          uT(this, "context", "echo"),
          uT(this, "registerDeviceToken", async (e) => {
            let {
                clientId: t,
                token: i,
                notificationType: r,
                enableEncrypted: s = !1,
              } = e,
              n = `https://echo.walletconnect.com/${this.projectId}/clients`;
            await fetch(n, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                client_id: t,
                type: r,
                token: i,
                always_raw: s,
              }),
            });
          }),
          (this.logger = sT(t, this.context));
      }
    }
    var uR = Object.defineProperty,
      uN = Object.getOwnPropertySymbols,
      uj = Object.prototype.hasOwnProperty,
      uD = Object.prototype.propertyIsEnumerable,
      uM = (e, t, i) =>
        t in e
          ? uR(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      uU = (e, t) => {
        for (var i in t || (t = {})) uj.call(t, i) && uM(e, i, t[i]);
        if (uN) for (var i of uN(t)) uD.call(t, i) && uM(e, i, t[i]);
        return e;
      },
      uL = (e, t, i) => uM(e, "symbol" != typeof t ? t + "" : t, i);
    class uW extends he {
      constructor(e, t, i = !0) {
        super(e, t, i),
          (this.core = e),
          (this.logger = t),
          uL(this, "context", "event-client"),
          uL(this, "storagePrefix", hh),
          uL(this, "storageVersion", 0.1),
          uL(this, "events", new Map()),
          uL(this, "shouldPersist", !1),
          uL(this, "init", async () => {
            if (!nn())
              try {
                let e = {
                  eventId: ns(),
                  timestamp: Date.now(),
                  domain: this.getAppDomain(),
                  props: {
                    event: "INIT",
                    type: "",
                    properties: {
                      client_id: await this.core.crypto.getClientId(),
                      user_agent: sX(
                        this.core.relayer.protocol,
                        this.core.relayer.version,
                        hS
                      ),
                    },
                  },
                };
                await this.sendEvent([e]);
              } catch (e) {
                this.logger.warn(e);
              }
          }),
          uL(this, "createEvent", (e) => {
            let {
                event: t = "ERROR",
                type: i = "",
                properties: { topic: r, trace: s },
              } = e,
              n = ns(),
              a = this.core.projectId || "",
              o = uU(
                {
                  eventId: n,
                  timestamp: Date.now(),
                  props: {
                    event: t,
                    type: i,
                    properties: { topic: r, trace: s },
                  },
                  bundleId: a,
                  domain: this.getAppDomain(),
                },
                this.setMethods(n)
              );
            return (
              this.telemetryEnabled &&
                (this.events.set(n, o), (this.shouldPersist = !0)),
              o
            );
          }),
          uL(this, "getEvent", (e) => {
            let { eventId: t, topic: i } = e;
            if (t) return this.events.get(t);
            let r = Array.from(this.events.values()).find(
              (e) => e.props.properties.topic === i
            );
            if (r) return uU(uU({}, r), this.setMethods(r.eventId));
          }),
          uL(this, "deleteEvent", (e) => {
            let { eventId: t } = e;
            this.events.delete(t), (this.shouldPersist = !0);
          }),
          uL(this, "setEventListeners", () => {
            this.core.heartbeat.on(cV.HEARTBEAT_EVENTS.pulse, async () => {
              this.shouldPersist && (await this.persist()),
                this.events.forEach((e) => {
                  (0, iL.fromMiliseconds)(Date.now()) -
                    (0, iL.fromMiliseconds)(e.timestamp) >
                    86400 &&
                    (this.events.delete(e.eventId), (this.shouldPersist = !0));
                });
            });
          }),
          uL(this, "setMethods", (e) => ({
            addTrace: (t) => this.addTrace(e, t),
            setError: (t) => this.setError(e, t),
          })),
          uL(this, "addTrace", (e, t) => {
            let i = this.events.get(e);
            i &&
              (i.props.properties.trace.push(t),
              this.events.set(e, i),
              (this.shouldPersist = !0));
          }),
          uL(this, "setError", (e, t) => {
            let i = this.events.get(e);
            i &&
              ((i.props.type = t),
              (i.timestamp = Date.now()),
              this.events.set(e, i),
              (this.shouldPersist = !0));
          }),
          uL(this, "persist", async () => {
            await this.core.storage.setItem(
              this.storageKey,
              Array.from(this.events.values())
            ),
              (this.shouldPersist = !1);
          }),
          uL(this, "restore", async () => {
            try {
              let e = (await this.core.storage.getItem(this.storageKey)) || [];
              if (!e.length) return;
              e.forEach((e) => {
                this.events.set(
                  e.eventId,
                  uU(uU({}, e), this.setMethods(e.eventId))
                );
              });
            } catch (e) {
              this.logger.warn(e);
            }
          }),
          uL(this, "submit", async () => {
            if (!this.telemetryEnabled || 0 === this.events.size) return;
            let e = [];
            for (let [t, i] of this.events) i.props.type && e.push(i);
            if (0 !== e.length)
              try {
                if ((await this.sendEvent(e)).ok)
                  for (let t of e)
                    this.events.delete(t.eventId), (this.shouldPersist = !0);
              } catch (e) {
                this.logger.warn(e);
              }
          }),
          uL(this, "sendEvent", async (e) => {
            let t = this.getAppDomain() ? "" : "&sp=desktop";
            return await fetch(
              `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${hS}${t}`,
              { method: "POST", body: JSON.stringify(e) }
            );
          }),
          uL(this, "getAppDomain", () => sQ().url),
          (this.logger = sT(t, this.context)),
          (this.telemetryEnabled = i),
          i
            ? this.restore().then(async () => {
                await this.submit(), this.setEventListeners();
              })
            : this.persist();
      }
      get storageKey() {
        return (
          this.storagePrefix +
          this.storageVersion +
          this.core.customStoragePrefix +
          "//" +
          this.context
        );
      }
    }
    var uB = Object.defineProperty,
      uK = Object.getOwnPropertySymbols,
      uq = Object.prototype.hasOwnProperty,
      uH = Object.prototype.propertyIsEnumerable,
      u$ = (e, t, i) =>
        t in e
          ? uB(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      uJ = (e, t) => {
        for (var i in t || (t = {})) uq.call(t, i) && u$(e, i, t[i]);
        if (uK) for (var i of uK(t)) uH.call(t, i) && u$(e, i, t[i]);
        return e;
      },
      uz = (e, t, i) => u$(e, "symbol" != typeof t ? t + "" : t, i);
    class uF extends cX {
      constructor(e) {
        var t;
        super(e),
          uz(this, "protocol", "wc"),
          uz(this, "version", 2),
          uz(this, "name", hc),
          uz(this, "relayUrl"),
          uz(this, "projectId"),
          uz(this, "customStoragePrefix"),
          uz(this, "events", new iD.EventEmitter()),
          uz(this, "logger"),
          uz(this, "heartbeat"),
          uz(this, "relayer"),
          uz(this, "crypto"),
          uz(this, "storage"),
          uz(this, "history"),
          uz(this, "expirer"),
          uz(this, "pairing"),
          uz(this, "verify"),
          uz(this, "echoClient"),
          uz(this, "linkModeSupportedApps"),
          uz(this, "eventClient"),
          uz(this, "initialized", !1),
          uz(this, "logChunkController"),
          uz(this, "on", (e, t) => this.events.on(e, t)),
          uz(this, "once", (e, t) => this.events.once(e, t)),
          uz(this, "off", (e, t) => this.events.off(e, t)),
          uz(this, "removeListener", (e, t) =>
            this.events.removeListener(e, t)
          ),
          uz(
            this,
            "dispatchEnvelope",
            ({ topic: e, message: t, sessionExists: i }) => {
              if (!e || !t) return;
              let r = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: hA,
              };
              this.relayer.onLinkMessageEvent(r, { sessionExists: i });
            }
          );
        const i = this.getGlobalCore(e?.customStoragePrefix);
        if (i)
          try {
            return (
              (this.customStoragePrefix = i.customStoragePrefix),
              (this.logger = i.logger),
              (this.heartbeat = i.heartbeat),
              (this.crypto = i.crypto),
              (this.history = i.history),
              (this.expirer = i.expirer),
              (this.storage = i.storage),
              (this.relayer = i.relayer),
              (this.pairing = i.pairing),
              (this.verify = i.verify),
              (this.echoClient = i.echoClient),
              (this.linkModeSupportedApps = i.linkModeSupportedApps),
              (this.eventClient = i.eventClient),
              (this.initialized = i.initialized),
              (this.logChunkController = i.logChunkController),
              i
            );
          } catch (e) {
            console.warn("Failed to copy global core", e);
          }
        (this.projectId = e?.projectId),
          (this.relayUrl = e?.relayUrl || hg),
          (this.customStoragePrefix =
            null != e && e.customStoragePrefix
              ? `:${e.customStoragePrefix}`
              : "");
        const { logger: r, chunkLoggerController: s } = sO({
          opts: (function (e) {
            return s_(sx({}, e), sI({ level: e?.level || "info" }));
          })({
            level:
              "string" == typeof e?.logger && e.logger ? e.logger : "error",
            name: hc,
          }),
          maxSizeInBytes: e?.maxLogBlobSizeInBytes,
          loggerOverride: e?.logger,
        });
        (this.logChunkController = s),
          null != (t = this.logChunkController) &&
            t.downloadLogsBlobInBrowser &&
            (window.downloadLogsBlobInBrowser = async () => {
              var e, t;
              null != (e = this.logChunkController) &&
                e.downloadLogsBlobInBrowser &&
                (null == (t = this.logChunkController) ||
                  t.downloadLogsBlobInBrowser({
                    clientId: await this.crypto.getClientId(),
                  }));
            }),
          (this.logger = sT(r, this.name)),
          (this.heartbeat = new cV.HeartBeat()),
          (this.crypto = new dP(this, this.logger, e?.keychain)),
          (this.history = new u_(this, this.logger)),
          (this.expirer = new uA(this, this.logger)),
          (this.storage =
            null != e && e.storage
              ? e.storage
              : new cG.default(uJ(uJ({}, hd), e?.storageOptions))),
          (this.relayer = new ui({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
          })),
          (this.pairing = new ub(this, this.logger)),
          (this.verify = new ux(this, this.logger, this.storage)),
          (this.echoClient = new uO(this.projectId || "", this.logger)),
          (this.linkModeSupportedApps = []),
          (this.eventClient = new uW(this, this.logger, e?.telemetryEnabled)),
          this.setGlobalCore(this);
      }
      static async init(e) {
        let t = new uF(e);
        await t.initialize();
        let i = await t.crypto.getClientId();
        return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
      }
      get context() {
        return sk(this.logger);
      }
      async start() {
        this.initialized || (await this.initialize());
      }
      async getLogsBlob() {
        var e;
        return null == (e = this.logChunkController)
          ? void 0
          : e.logsToBlob({ clientId: await this.crypto.getClientId() });
      }
      async addLinkModeSupportedApp(e) {
        this.linkModeSupportedApps.includes(e) ||
          (this.linkModeSupportedApps.push(e),
          await this.storage.setItem(hx, this.linkModeSupportedApps));
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            (this.linkModeSupportedApps =
              (await this.storage.getItem(hx)) || []),
            (this.initialized = !0),
            this.logger.info("Core Initialization Success");
        } catch (e) {
          throw (
            (this.logger.warn(
              e,
              `Core Initialization Failure at epoch ${Date.now()}`
            ),
            this.logger.error(e.message),
            e)
          );
        }
      }
      getGlobalCore(e = "") {
        try {
          if (this.isGlobalCoreDisabled()) return;
          let t = `_walletConnectCore_${e}`,
            i = `${t}_count`;
          return (
            (globalThis[i] = (globalThis[i] || 0) + 1),
            globalThis[i] > 1 &&
              console.warn(
                `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`
              ),
            globalThis[t]
          );
        } catch (e) {
          console.warn("Failed to get global WalletConnect core", e);
          return;
        }
      }
      setGlobalCore(e) {
        var t;
        try {
          if (this.isGlobalCoreDisabled()) return;
          let i = `_walletConnectCore_${
            (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
          }`;
          globalThis[i] = e;
        } catch (e) {
          console.warn("Failed to set global WalletConnect core", e);
        }
      }
      isGlobalCoreDisabled() {
        try {
          return (
            "u" > typeof iM.default &&
            "true" === iM.default.env.DISABLE_GLOBAL_CORE
          );
        } catch {
          return !0;
        }
      }
    }
    let uV = "client",
      uG = `wc@2:${uV}:`,
      uY = "WALLETCONNECT_DEEPLINK_CHOICE",
      uZ = (iL.THIRTY_DAYS, "Proposal expired"),
      uQ = iL.SEVEN_DAYS,
      uX = {
        wc_sessionPropose: {
          req: { ttl: iL.FIVE_MINUTES, prompt: !0, tag: 1100 },
          res: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1101 },
          reject: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1120 },
          autoReject: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1121 },
        },
        wc_sessionSettle: {
          req: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1102 },
          res: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1103 },
        },
        wc_sessionUpdate: {
          req: { ttl: iL.ONE_DAY, prompt: !1, tag: 1104 },
          res: { ttl: iL.ONE_DAY, prompt: !1, tag: 1105 },
        },
        wc_sessionExtend: {
          req: { ttl: iL.ONE_DAY, prompt: !1, tag: 1106 },
          res: { ttl: iL.ONE_DAY, prompt: !1, tag: 1107 },
        },
        wc_sessionRequest: {
          req: { ttl: iL.FIVE_MINUTES, prompt: !0, tag: 1108 },
          res: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1109 },
        },
        wc_sessionEvent: {
          req: { ttl: iL.FIVE_MINUTES, prompt: !0, tag: 1110 },
          res: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1111 },
        },
        wc_sessionDelete: {
          req: { ttl: iL.ONE_DAY, prompt: !1, tag: 1112 },
          res: { ttl: iL.ONE_DAY, prompt: !1, tag: 1113 },
        },
        wc_sessionPing: {
          req: { ttl: iL.ONE_DAY, prompt: !1, tag: 1114 },
          res: { ttl: iL.ONE_DAY, prompt: !1, tag: 1115 },
        },
        wc_sessionAuthenticate: {
          req: { ttl: iL.ONE_HOUR, prompt: !0, tag: 1116 },
          res: { ttl: iL.ONE_HOUR, prompt: !1, tag: 1117 },
          reject: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1118 },
          autoReject: { ttl: iL.FIVE_MINUTES, prompt: !1, tag: 1119 },
        },
      },
      u0 = { min: iL.FIVE_MINUTES, max: iL.SEVEN_DAYS },
      u1 = "IDLE",
      u2 = "ACTIVE",
      u5 = {
        eth_sendTransaction: { key: "" },
        eth_sendRawTransaction: { key: "" },
        wallet_sendCalls: { key: "" },
        solana_signTransaction: { key: "signature" },
        solana_signAllTransactions: { key: "transactions" },
        solana_signAndSendTransaction: { key: "signature" },
        sui_signAndExecuteTransaction: { key: "digest" },
        sui_signTransaction: { key: "" },
        hedera_signAndExecuteTransaction: { key: "transactionId" },
        hedera_executeTransaction: { key: "transactionId" },
        near_signTransaction: { key: "" },
        near_signTransactions: { key: "" },
        tron_signTransaction: { key: "txID" },
        xrpl_signTransaction: { key: "" },
        xrpl_signTransactionFor: { key: "" },
        algo_signTxn: { key: "" },
        sendTransfer: { key: "txid" },
        stacks_stxTransfer: { key: "txId" },
        polkadot_signTransaction: { key: "" },
        cosmos_signDirect: { key: "" },
      },
      u3 = [
        "wc_sessionPropose",
        "wc_sessionRequest",
        "wc_authRequest",
        "wc_sessionAuthenticate",
      ],
      u8 = "wc@1.5:auth:",
      u6 = `${u8}:PUB_KEY`;
    var u4 = Object.defineProperty,
      u7 = Object.defineProperties,
      u9 = Object.getOwnPropertyDescriptors,
      pe = Object.getOwnPropertySymbols,
      pt = Object.prototype.hasOwnProperty,
      pi = Object.prototype.propertyIsEnumerable,
      pr = (e, t, i) =>
        t in e
          ? u4(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      ps = (e, t) => {
        for (var i in t || (t = {})) pt.call(t, i) && pr(e, i, t[i]);
        if (pe) for (var i of pe(t)) pi.call(t, i) && pr(e, i, t[i]);
        return e;
      },
      pn = (e, t, i) => pr(e, "symbol" != typeof t ? t + "" : t, i);
    class pa extends hs {
      constructor(t) {
        super(t),
          pn(this, "name", "engine"),
          pn(this, "events", new iD.default()),
          pn(this, "initialized", !1),
          pn(this, "requestQueue", { state: u1, queue: [] }),
          pn(this, "sessionRequestQueue", { state: u1, queue: [] }),
          pn(this, "emittedSessionRequests", new no({ limit: 500 })),
          pn(this, "requestQueueDelay", iL.ONE_SECOND),
          pn(this, "expectedPairingMethodMap", new Map()),
          pn(this, "recentlyDeletedMap", new Map()),
          pn(this, "recentlyDeletedLimit", 200),
          pn(this, "relayMessageCache", []),
          pn(this, "pendingSessions", new Map()),
          pn(this, "init", async () => {
            this.initialized ||
              (await this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.registerPairingEvents(),
              await this.registerLinkModeListeners(),
              this.client.core.pairing.register({ methods: Object.keys(uX) }),
              (this.initialized = !0),
              setTimeout(async () => {
                await this.processPendingMessageEvents(),
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                  this.processSessionRequestQueue();
              }, (0, iL.toMiliseconds)(this.requestQueueDelay)));
          }),
          pn(this, "connect", async (e) => {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            let t = u7(
              ps({}, e),
              u9({
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              })
            );
            await this.isValidConnect(t),
              (t.optionalNamespaces = (function (e, t) {
                var i, r, s, n, a, o;
                let l = c_(e),
                  c = c_(t),
                  h = {};
                for (let e of Object.keys(l).concat(Object.keys(c)))
                  h[e] = {
                    chains: ne(
                      null == (i = l[e]) ? void 0 : i.chains,
                      null == (r = c[e]) ? void 0 : r.chains
                    ),
                    methods: ne(
                      null == (s = l[e]) ? void 0 : s.methods,
                      null == (n = c[e]) ? void 0 : n.methods
                    ),
                    events: ne(
                      null == (a = l[e]) ? void 0 : a.events,
                      null == (o = c[e]) ? void 0 : o.events
                    ),
                  };
                return h;
              })(t.requiredNamespaces, t.optionalNamespaces)),
              (t.requiredNamespaces = {});
            let {
                pairingTopic: i,
                requiredNamespaces: r,
                optionalNamespaces: s,
                sessionProperties: n,
                scopedProperties: a,
                relays: o,
              } = t,
              l = i,
              c,
              h = !1;
            try {
              if (l) {
                let e = this.client.core.pairing.pairings.get(l);
                this.client.logger.warn(
                  "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                ),
                  (h = e.active);
              }
            } catch (e) {
              throw (
                (this.client.logger.error(
                  `connect() -> pairing.get(${l}) failed`
                ),
                e)
              );
            }
            if (!l || !h) {
              let { topic: e, uri: t } = await this.client.core.pairing.create({
                internal: { skipSubscribe: !0 },
              });
              (l = e), (c = t);
            }
            if (!l) {
              let { message: e } = cP(
                "NO_MATCHING_KEY",
                `connect() pairing topic: ${l}`
              );
              throw Error(e);
            }
            let d = await this.client.core.crypto.generateKeyPair(),
              u = uX.wc_sessionPropose.req.ttl || iL.FIVE_MINUTES,
              p = s4(u),
              f = u7(
                ps(
                  ps(
                    {
                      requiredNamespaces: r,
                      optionalNamespaces: s,
                      relays: o ?? [{ protocol: "irn" }],
                      proposer: {
                        publicKey: d,
                        metadata: this.client.metadata,
                      },
                      expiryTimestamp: p,
                      pairingTopic: l,
                    },
                    n && { sessionProperties: n }
                  ),
                  a && { scopedProperties: a }
                ),
                u9({ id: (0, ha.payloadId)() })
              ),
              g = s9("session_connect", f.id),
              { reject: y, resolve: m, done: w } = s5(u, uZ),
              b = ({ id: e }) => {
                e === f.id &&
                  (this.client.events.off("proposal_expire", b),
                  this.pendingSessions.delete(f.id),
                  this.events.emit(g, { error: { message: uZ, code: 0 } }));
              };
            return (
              this.client.events.on("proposal_expire", b),
              this.events.once(g, ({ error: e, session: t }) => {
                this.client.events.off("proposal_expire", b),
                  e ? y(e) : t && m(t);
              }),
              await this.sendProposeSession({
                proposal: f,
                publishOpts: {
                  internal: { throwOnFailedPublish: !0 },
                  tvf: { correlationId: f.id },
                },
              }),
              await this.setProposal(f.id, f),
              { uri: c, approval: w }
            );
          }),
          pn(this, "pair", async (e) => {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
              return await this.client.core.pairing.pair(e);
            } catch (e) {
              throw (this.client.logger.error("pair() failed"), e);
            }
          }),
          pn(this, "approve", async (e) => {
            var t, i, r;
            let s = this.client.core.eventClient.createEvent({
              properties: {
                topic: null == (t = e?.id) ? void 0 : t.toString(),
                trace: [h$],
              },
            });
            try {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
            } catch (e) {
              throw (s.setError("no_internet_connection"), e);
            }
            try {
              await this.isValidProposalId(e?.id);
            } catch (t) {
              throw (
                (this.client.logger.error(
                  `approve() -> proposal.get(${e?.id}) failed`
                ),
                s.setError("proposal_not_found"),
                t)
              );
            }
            try {
              await this.isValidApprove(e);
            } catch (e) {
              throw (
                (this.client.logger.error(
                  "approve() -> isValidApprove() failed"
                ),
                s.setError("session_approve_namespace_validation_failure"),
                e)
              );
            }
            let {
                id: n,
                relayProtocol: a,
                namespaces: o,
                sessionProperties: l,
                scopedProperties: c,
                sessionConfig: h,
              } = e,
              d = this.client.proposal.get(n);
            this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
            let {
                pairingTopic: u,
                proposer: p,
                requiredNamespaces: f,
                optionalNamespaces: g,
              } = d,
              y =
                null == (i = this.client.core.eventClient)
                  ? void 0
                  : i.getEvent({ topic: u });
            y ||
              (y =
                null == (r = this.client.core.eventClient)
                  ? void 0
                  : r.createEvent({
                      type: h$,
                      properties: {
                        topic: u,
                        trace: [h$, "session_namespaces_validation_success"],
                      },
                    }));
            let m = await this.client.core.crypto.generateKeyPair(),
              w = p.publicKey,
              b = await this.client.core.crypto.generateSharedKey(m, w),
              v = ps(
                ps(
                  ps(
                    {
                      relay: { protocol: a ?? "irn" },
                      namespaces: o,
                      controller: {
                        publicKey: m,
                        metadata: this.client.metadata,
                      },
                      expiry: s4(uQ),
                    },
                    l && { sessionProperties: l }
                  ),
                  c && { scopedProperties: c }
                ),
                h && { sessionConfig: h }
              );
            y.addTrace("subscribing_session_topic");
            try {
              await this.client.core.relayer.subscribe(b, {
                transportType: hP,
                internal: { skipSubscribe: !0 },
              });
            } catch (e) {
              throw (y.setError("subscribe_session_topic_failure"), e);
            }
            y.addTrace("subscribe_session_topic_success");
            let E = u7(
              ps({}, v),
              u9({
                topic: b,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: u,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: hP,
              })
            );
            await this.client.session.set(b, E), y.addTrace("store_session");
            try {
              await this.sendApproveSession({
                sessionTopic: b,
                proposal: d,
                pairingProposalResponse: {
                  relay: { protocol: a ?? "irn" },
                  responderPublicKey: m,
                },
                sessionSettleRequest: v,
                publishOpts: {
                  internal: { throwOnFailedPublish: !0 },
                  tvf: { correlationId: n },
                },
              }),
                y.addTrace("session_approve_publish_success");
            } catch (e) {
              throw (
                (this.client.logger.error(e),
                this.client.session.delete(b, cC("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(b),
                e)
              );
            }
            return (
              this.client.core.eventClient.deleteEvent({ eventId: y.eventId }),
              await this.client.core.pairing.updateMetadata({
                topic: u,
                metadata: p.metadata,
              }),
              await this.deleteProposal(n),
              await this.client.core.pairing.activate({ topic: u }),
              await this.setExpiry(b, s4(uQ)),
              {
                topic: b,
                acknowledged: () => Promise.resolve(this.client.session.get(b)),
              }
            );
          }),
          pn(this, "reject", async (e) => {
            let t;
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
              await this.isValidReject(e);
            } catch (e) {
              throw (
                (this.client.logger.error("reject() -> isValidReject() failed"),
                e)
              );
            }
            let { id: i, reason: r } = e;
            try {
              t = this.client.proposal.get(i).pairingTopic;
            } catch (e) {
              throw (
                (this.client.logger.error(
                  `reject() -> proposal.get(${i}) failed`
                ),
                e)
              );
            }
            t &&
              (await this.sendError({
                id: i,
                topic: t,
                error: r,
                rpcOpts: uX.wc_sessionPropose.reject,
              })),
              await this.deleteProposal(i);
          }),
          pn(this, "update", async (e) => {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
              await this.isValidUpdate(e);
            } catch (e) {
              throw (
                (this.client.logger.error("update() -> isValidUpdate() failed"),
                e)
              );
            }
            let { topic: t, namespaces: i } = e,
              { done: r, resolve: s, reject: n } = s5(),
              a = (0, ha.payloadId)(),
              o = (0, ha.getBigIntRpcId)().toString(),
              l = this.client.session.get(t).namespaces;
            return (
              this.events.once(s9("session_update", a), ({ error: e }) => {
                e ? n(e) : s();
              }),
              await this.client.session.update(t, { namespaces: i }),
              await this.sendRequest({
                topic: t,
                method: "wc_sessionUpdate",
                params: { namespaces: i },
                throwOnFailedPublish: !0,
                clientRpcId: a,
                relayRpcId: o,
              }).catch((e) => {
                this.client.logger.error(e),
                  this.client.session.update(t, { namespaces: l }),
                  n(e);
              }),
              { acknowledged: r }
            );
          }),
          pn(this, "extend", async (e) => {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
              await this.isValidExtend(e);
            } catch (e) {
              throw (
                (this.client.logger.error("extend() -> isValidExtend() failed"),
                e)
              );
            }
            let { topic: t } = e,
              i = (0, ha.payloadId)(),
              { done: r, resolve: s, reject: n } = s5();
            return (
              this.events.once(s9("session_extend", i), ({ error: e }) => {
                e ? n(e) : s();
              }),
              await this.setExpiry(t, s4(uQ)),
              this.sendRequest({
                topic: t,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: i,
                throwOnFailedPublish: !0,
              }).catch((e) => {
                n(e);
              }),
              { acknowledged: r }
            );
          }),
          pn(this, "request", async (e) => {
            this.isInitialized();
            try {
              await this.isValidRequest(e);
            } catch (e) {
              throw (
                (this.client.logger.error(
                  "request() -> isValidRequest() failed"
                ),
                e)
              );
            }
            let {
                chainId: t,
                request: i,
                topic: r,
                expiry: s = uX.wc_sessionRequest.req.ttl,
              } = e,
              n = this.client.session.get(r);
            n?.transportType === hP && (await this.confirmOnlineStateOrThrow());
            let a = (0, ha.payloadId)(),
              o = (0, ha.getBigIntRpcId)().toString(),
              {
                done: l,
                resolve: c,
                reject: h,
              } = s5(s, "Request expired. Please try again.");
            this.events.once(
              s9("session_request", a),
              ({ error: e, result: t }) => {
                e ? h(e) : c(t);
              }
            );
            let d = "wc_sessionRequest",
              u = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
            if (u)
              return (
                await this.sendRequest({
                  clientRpcId: a,
                  relayRpcId: o,
                  topic: r,
                  method: d,
                  params: {
                    request: u7(ps({}, i), u9({ expiryTimestamp: s4(s) })),
                    chainId: t,
                  },
                  expiry: s,
                  throwOnFailedPublish: !0,
                  appLink: u,
                }).catch((e) => h(e)),
                this.client.events.emit("session_request_sent", {
                  topic: r,
                  request: i,
                  chainId: t,
                  id: a,
                }),
                await l()
              );
            let p = {
              request: u7(ps({}, i), u9({ expiryTimestamp: s4(s) })),
              chainId: t,
            };
            return await Promise.all([
              new Promise(async (e) => {
                await this.sendRequest({
                  clientRpcId: a,
                  relayRpcId: o,
                  topic: r,
                  method: d,
                  params: p,
                  expiry: s,
                  throwOnFailedPublish: !0,
                  tvf: this.getTVFParams(a, p),
                }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: r,
                    request: i,
                    chainId: t,
                    id: a,
                  }),
                  e();
              }),
              new Promise(async (e) => {
                var t;
                if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                  let e = await ni(this.client.core.storage, uY);
                  await nt({ id: a, topic: r, wcDeepLink: e });
                }
                e();
              }),
              l(),
            ]).then((e) => e[2]);
          }),
          pn(this, "respond", async (e) => {
            var t, i;
            this.isInitialized();
            let r = this.client.core.eventClient.createEvent({
              properties: {
                topic:
                  e?.topic ||
                  (null == (i = null == (t = e?.response) ? void 0 : t.id)
                    ? void 0
                    : i.toString()),
                trace: ["session_request_response_started"],
              },
            });
            try {
              await this.isValidRespond(e);
            } catch (e) {
              throw (
                (r.addTrace(e?.message),
                r.setError("session_request_response_validation_failure"),
                e)
              );
            }
            r.addTrace("session_request_response_validation_success");
            let { topic: s, response: n } = e,
              { id: a } = n,
              o = this.client.session.get(s);
            o.transportType === hP && (await this.confirmOnlineStateOrThrow());
            let l = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
            try {
              r.addTrace("session_request_response_publish_started"),
                (0, ho.isJsonRpcResult)(n)
                  ? await this.sendResult({
                      id: a,
                      topic: s,
                      result: n.result,
                      throwOnFailedPublish: !0,
                      appLink: l,
                    })
                  : (0, ho.isJsonRpcError)(n) &&
                    (await this.sendError({
                      id: a,
                      topic: s,
                      error: n.error,
                      appLink: l,
                    })),
                this.cleanupAfterResponse(e);
            } catch (e) {
              throw (
                (r.addTrace(e?.message),
                r.setError("session_request_response_publish_failure"),
                e)
              );
            }
          }),
          pn(this, "ping", async (e) => {
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
              await this.isValidPing(e);
            } catch (e) {
              throw (
                (this.client.logger.error("ping() -> isValidPing() failed"), e)
              );
            }
            let { topic: t } = e;
            if (this.client.session.keys.includes(t)) {
              let e = (0, ha.payloadId)(),
                i = (0, ha.getBigIntRpcId)().toString(),
                { done: r, resolve: s, reject: n } = s5();
              this.events.once(s9("session_ping", e), ({ error: e }) => {
                e ? n(e) : s();
              }),
                await Promise.all([
                  this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: e,
                    relayRpcId: i,
                  }),
                  r(),
                ]);
            } else
              this.client.core.pairing.pairings.keys.includes(t) &&
                (this.client.logger.warn(
                  "ping() on pairing topic is deprecated and will be removed in the next major release."
                ),
                await this.client.core.pairing.ping({ topic: t }));
          }),
          pn(this, "emit", async (e) => {
            this.isInitialized(),
              await this.confirmOnlineStateOrThrow(),
              await this.isValidEmit(e);
            let { topic: t, event: i, chainId: r } = e,
              s = (0, ha.getBigIntRpcId)().toString(),
              n = (0, ha.payloadId)();
            await this.sendRequest({
              topic: t,
              method: "wc_sessionEvent",
              params: { event: i, chainId: r },
              throwOnFailedPublish: !0,
              relayRpcId: s,
              clientRpcId: n,
            });
          }),
          pn(this, "disconnect", async (e) => {
            this.isInitialized(),
              await this.confirmOnlineStateOrThrow(),
              await this.isValidDisconnect(e);
            let { topic: t } = e;
            if (this.client.session.keys.includes(t))
              await this.sendRequest({
                topic: t,
                method: "wc_sessionDelete",
                params: cC("USER_DISCONNECTED"),
                throwOnFailedPublish: !0,
              }),
                await this.deleteSession({ topic: t, emitEvent: !1 });
            else if (this.client.core.pairing.pairings.keys.includes(t))
              await this.client.core.pairing.disconnect({ topic: t });
            else {
              let { message: e } = cP(
                "MISMATCHED_TOPIC",
                `Session or pairing topic not found: ${t}`
              );
              throw Error(e);
            }
          }),
          pn(
            this,
            "find",
            (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  let { requiredNamespaces: i } = t,
                    r = Object.keys(e.namespaces),
                    s = Object.keys(i),
                    n = !0;
                  return (
                    !!s0(s, r) &&
                    (r.forEach((t) => {
                      let {
                          accounts: r,
                          methods: s,
                          events: a,
                        } = e.namespaces[t],
                        o = cb(r),
                        l = i[t];
                      (s0(sj(t, l), o) &&
                        s0(l.methods, s) &&
                        s0(l.events, a)) ||
                        (n = !1);
                    }),
                    n)
                  );
                })(t, e)
              )
            )
          ),
          pn(this, "getPendingSessionRequests", () =>
            this.client.pendingRequest.getAll()
          ),
          pn(this, "authenticate", async (e, t) => {
            var i, r, s, n, a;
            let o;
            this.isInitialized(), this.isValidAuthenticate(e);
            let l =
                t &&
                this.client.core.linkModeSupportedApps.includes(t) &&
                (null == (i = this.client.metadata.redirect)
                  ? void 0
                  : i.linkMode),
              c = l ? hA : hP;
            c === hP && (await this.confirmOnlineStateOrThrow());
            let {
                chains: h,
                statement: d = "",
                uri: u,
                domain: p,
                nonce: f,
                type: g,
                exp: y,
                nbf: m,
                methods: w = [],
                expiry: b,
              } = e,
              v = [...(e.resources || [])],
              { topic: E, uri: _ } = await this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: c,
              });
            this.client.logger.info({
              message: "Generated new pairing",
              pairing: { topic: E, uri: _ },
            });
            let I = await this.client.core.crypto.generateKeyPair(),
              S = lZ(I);
            if (
              (await Promise.all([
                this.client.auth.authKeys.set(u6, {
                  responseTopic: S,
                  publicKey: I,
                }),
                this.client.auth.pairingTopics.set(S, {
                  topic: S,
                  pairingTopic: E,
                }),
              ]),
              await this.client.core.relayer.subscribe(S, { transportType: c }),
              this.client.logger.info(
                `sending request to new pairing topic: ${E}`
              ),
              w.length > 0)
            ) {
              let e,
                t,
                { namespace: i } = sR(h[0]),
                o = aY(
                  (function (e, t, i, r = {}) {
                    return (
                      i?.sort((e, t) => e.localeCompare(t)),
                      {
                        att: {
                          [e]: (function (e, t, i = {}) {
                            return Object.assign(
                              {},
                              ...(t = t?.sort((e, t) =>
                                e.localeCompare(t)
                              )).map((t) => ({ [`${e}/${t}`]: [i] }))
                            );
                          })(t, i, r),
                        },
                      }
                    );
                  })(i, "request", w)
                );
              a0(v) &&
                ((r = o),
                (s = v.pop()),
                (o = aY(
                  ((n = aZ(r)),
                  (a = aZ(s)),
                  aG(n),
                  aG(a),
                  (e = Object.keys(n.att)
                    .concat(Object.keys(a.att))
                    .sort((e, t) => e.localeCompare(t))),
                  (t = { att: {} }),
                  e.forEach((e) => {
                    var i, r;
                    Object.keys((null == (i = n.att) ? void 0 : i[e]) || {})
                      .concat(
                        Object.keys((null == (r = a.att) ? void 0 : r[e]) || {})
                      )
                      .sort((e, t) => e.localeCompare(t))
                      .forEach((i) => {
                        var r, s;
                        t.att[e] = aL(
                          ((e, t) => {
                            for (var i in t || (t = {}))
                              aK.call(t, i) && aH(e, i, t[i]);
                            if (aB)
                              for (var i of aB(t))
                                aq.call(t, i) && aH(e, i, t[i]);
                            return e;
                          })({}, t.att[e]),
                          aW({
                            [i]:
                              (null == (r = n.att[e]) ? void 0 : r[i]) ||
                              (null == (s = a.att[e]) ? void 0 : s[i]),
                          })
                        );
                      });
                  }),
                  t)
                ))),
                v.push(o);
            }
            let A =
                b && b > uX.wc_sessionAuthenticate.req.ttl
                  ? b
                  : uX.wc_sessionAuthenticate.req.ttl,
              P = {
                authPayload: {
                  type: g ?? "caip122",
                  chains: h,
                  statement: d,
                  aud: u,
                  domain: p,
                  version: "1",
                  nonce: f,
                  iat: new Date().toISOString(),
                  exp: y,
                  nbf: m,
                  resources: v,
                },
                requester: { publicKey: I, metadata: this.client.metadata },
                expiryTimestamp: s4(A),
              },
              C = {
                requiredNamespaces: {},
                optionalNamespaces: {
                  eip155: {
                    chains: h,
                    methods: [...new Set(["personal_sign", ...w])],
                    events: ["chainChanged", "accountsChanged"],
                  },
                },
                relays: [{ protocol: "irn" }],
                pairingTopic: E,
                proposer: { publicKey: I, metadata: this.client.metadata },
                expiryTimestamp: s4(uX.wc_sessionPropose.req.ttl),
                id: (0, ha.payloadId)(),
              },
              { done: x, resolve: k, reject: T } = s5(A, "Request expired"),
              O = (0, ha.payloadId)(),
              R = s9("session_connect", C.id),
              N = s9("session_request", O),
              j = async ({ error: e, session: t }) => {
                this.events.off(N, D), e ? T(e) : t && k({ session: t });
              },
              D = async (e) => {
                var i, r, s;
                let n;
                if (
                  (await this.deletePendingAuthRequest(O, {
                    message: "fulfilled",
                    code: 0,
                  }),
                  e.error)
                ) {
                  let t = cC("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                  return e.error.code === t.code
                    ? void 0
                    : (this.events.off(R, j), T(e.error.message));
                }
                await this.deleteProposal(C.id), this.events.off(R, j);
                let { cacaos: a, responder: o } = e.result,
                  l = [],
                  h = [];
                for (let e of a) {
                  (await aF({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  })) ||
                    (this.client.logger.error(
                      e,
                      "Signature verification failed"
                    ),
                    T(
                      cC(
                        "SESSION_SETTLEMENT_FAILED",
                        "Signature verification failed"
                      )
                    ));
                  let { p: t } = e,
                    i = a0(t.resources),
                    r = [aJ(t.iss)],
                    s = az(t.iss);
                  if (i) {
                    let e = aQ(i),
                      t = aX(i);
                    l.push(...e), r.push(...t);
                  }
                  for (let e of r) h.push(`${e}:${s}`);
                }
                let d = await this.client.core.crypto.generateSharedKey(
                  I,
                  o.publicKey
                );
                l.length > 0 &&
                  ((n = {
                    topic: d,
                    acknowledged: !0,
                    self: { publicKey: I, metadata: this.client.metadata },
                    peer: o,
                    controller: o.publicKey,
                    expiry: s4(uQ),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: E,
                    namespaces: cI([...new Set(l)], [...new Set(h)]),
                    transportType: c,
                  }),
                  await this.client.core.relayer.subscribe(d, {
                    transportType: c,
                  }),
                  await this.client.session.set(d, n),
                  E &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: E,
                      metadata: o.metadata,
                    })),
                  (n = this.client.session.get(d))),
                  null != (i = this.client.metadata.redirect) &&
                    i.linkMode &&
                    null != (r = o.metadata.redirect) &&
                    r.linkMode &&
                    null != (s = o.metadata.redirect) &&
                    s.universal &&
                    t &&
                    (this.client.core.addLinkModeSupportedApp(
                      o.metadata.redirect.universal
                    ),
                    this.client.session.update(d, { transportType: hA })),
                  k({ auths: a, session: n });
              };
            this.events.once(R, j), this.events.once(N, D);
            try {
              if (l) {
                let e = (0, ha.formatJsonRpcRequest)(
                  "wc_sessionAuthenticate",
                  P,
                  O
                );
                this.client.core.history.set(E, e);
                let i = await this.client.core.crypto.encode("", e, {
                  type: 2,
                  encoding: lV,
                });
                o = cc(t, E, i);
              } else
                await Promise.all([
                  this.sendRequest({
                    topic: E,
                    method: "wc_sessionAuthenticate",
                    params: P,
                    expiry: e.expiry,
                    throwOnFailedPublish: !0,
                    clientRpcId: O,
                  }),
                  this.sendRequest({
                    topic: E,
                    method: "wc_sessionPropose",
                    params: C,
                    expiry: uX.wc_sessionPropose.req.ttl,
                    throwOnFailedPublish: !0,
                    clientRpcId: C.id,
                  }),
                ]);
            } catch (e) {
              throw (this.events.off(R, j), this.events.off(N, D), e);
            }
            return (
              await this.setProposal(C.id, C),
              await this.setAuthRequest(O, {
                request: u7(ps({}, P), u9({ verifyContext: {} })),
                pairingTopic: E,
                transportType: c,
              }),
              { uri: o ?? _, response: x }
            );
          }),
          pn(this, "approveSessionAuthenticate", async (e) => {
            let t,
              { id: i, auths: r } = e,
              s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: i.toString(),
                  trace: ["authenticated_session_approve_started"],
                },
              });
            try {
              this.isInitialized();
            } catch (e) {
              throw (s.setError("no_internet_connection"), e);
            }
            let n = this.getPendingAuthRequest(i);
            if (!n)
              throw (
                (s.setError("authenticated_session_pending_request_not_found"),
                Error(`Could not find pending auth request with id ${i}`))
              );
            let a = n.transportType || hP;
            a === hP && (await this.confirmOnlineStateOrThrow());
            let o = n.requester.publicKey,
              l = await this.client.core.crypto.generateKeyPair(),
              c = lZ(o),
              h = { type: 1, receiverPublicKey: o, senderPublicKey: l },
              d = [],
              u = [];
            for (let e of r) {
              if (
                !(await aF({ cacao: e, projectId: this.client.core.projectId }))
              ) {
                s.setError("invalid_cacao");
                let e = cC(
                  "SESSION_SETTLEMENT_FAILED",
                  "Signature verification failed"
                );
                throw (
                  (await this.sendError({
                    id: i,
                    topic: c,
                    error: e,
                    encodeOpts: h,
                  }),
                  Error(e.message))
                );
              }
              s.addTrace("cacaos_verified");
              let { p: t } = e,
                r = a0(t.resources),
                n = [aJ(t.iss)],
                a = az(t.iss);
              if (r) {
                let e = aQ(r),
                  t = aX(r);
                d.push(...e), n.push(...t);
              }
              for (let e of n) u.push(`${e}:${a}`);
            }
            let p = await this.client.core.crypto.generateSharedKey(l, o);
            if (
              (s.addTrace("create_authenticated_session_topic"), d?.length > 0)
            ) {
              (t = {
                topic: p,
                acknowledged: !0,
                self: { publicKey: l, metadata: this.client.metadata },
                peer: { publicKey: o, metadata: n.requester.metadata },
                controller: o,
                expiry: s4(uQ),
                authentication: r,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: { protocol: "irn" },
                pairingTopic: n.pairingTopic,
                namespaces: cI([...new Set(d)], [...new Set(u)]),
                transportType: a,
              }),
                s.addTrace("subscribing_authenticated_session_topic");
              try {
                await this.client.core.relayer.subscribe(p, {
                  transportType: a,
                });
              } catch (e) {
                throw (
                  (s.setError("subscribe_authenticated_session_topic_failure"),
                  e)
                );
              }
              s.addTrace("subscribe_authenticated_session_topic_success"),
                await this.client.session.set(p, t),
                s.addTrace("store_authenticated_session"),
                await this.client.core.pairing.updateMetadata({
                  topic: n.pairingTopic,
                  metadata: n.requester.metadata,
                });
            }
            s.addTrace("publishing_authenticated_session_approve");
            try {
              await this.sendResult({
                topic: c,
                id: i,
                result: {
                  cacaos: r,
                  responder: { publicKey: l, metadata: this.client.metadata },
                },
                encodeOpts: h,
                throwOnFailedPublish: !0,
                appLink: this.getAppLinkIfEnabled(n.requester.metadata, a),
              });
            } catch (e) {
              throw (
                (s.setError("authenticated_session_approve_publish_failure"), e)
              );
            }
            return (
              await this.client.auth.requests.delete(i, {
                message: "fulfilled",
                code: 0,
              }),
              await this.client.core.pairing.activate({
                topic: n.pairingTopic,
              }),
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId }),
              { session: t }
            );
          }),
          pn(this, "rejectSessionAuthenticate", async (e) => {
            this.isInitialized();
            let { id: t, reason: i } = e,
              r = this.getPendingAuthRequest(t);
            if (!r)
              throw Error(`Could not find pending auth request with id ${t}`);
            r.transportType === hP && (await this.confirmOnlineStateOrThrow());
            let s = r.requester.publicKey,
              n = await this.client.core.crypto.generateKeyPair(),
              a = lZ(s);
            await this.sendError({
              id: t,
              topic: a,
              error: i,
              encodeOpts: { type: 1, receiverPublicKey: s, senderPublicKey: n },
              rpcOpts: uX.wc_sessionAuthenticate.reject,
              appLink: this.getAppLinkIfEnabled(
                r.requester.metadata,
                r.transportType
              ),
            }),
              await this.client.auth.requests.delete(t, {
                message: "rejected",
                code: 0,
              }),
              await this.deleteProposal(t);
          }),
          pn(this, "formatAuthMessage", (e) => {
            this.isInitialized();
            let { request: t, iss: i } = e;
            return aV(t, i);
          }),
          pn(this, "processRelayMessageCache", () => {
            setTimeout(async () => {
              if (0 !== this.relayMessageCache.length)
                for (; this.relayMessageCache.length > 0; )
                  try {
                    let e = this.relayMessageCache.shift();
                    e && (await this.onRelayMessage(e));
                  } catch (e) {
                    this.client.logger.error(e);
                  }
            }, 50);
          }),
          pn(this, "cleanupDuplicatePairings", async (e) => {
            if (e.pairingTopic)
              try {
                let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                  i = this.client.core.pairing.pairings.getAll().filter((i) => {
                    var r, s;
                    return (
                      (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                      (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                        e.peer.metadata.url &&
                      i.topic &&
                      i.topic !== t.topic
                    );
                  });
                if (0 === i.length) return;
                this.client.logger.info(
                  `Cleaning up ${i.length} duplicate pairing(s)`
                ),
                  await Promise.all(
                    i.map((e) =>
                      this.client.core.pairing.disconnect({ topic: e.topic })
                    )
                  ),
                  this.client.logger.info(
                    "Duplicate pairings clean up finished"
                  );
              } catch (e) {
                this.client.logger.error(e);
              }
          }),
          pn(this, "deleteSession", async (e) => {
            var t;
            let {
                topic: i,
                expirerHasDeleted: r = !1,
                emitEvent: s = !0,
                id: n = 0,
              } = e,
              { self: a } = this.client.session.get(i);
            await this.client.core.relayer.unsubscribe(i),
              await this.client.session.delete(i, cC("USER_DISCONNECTED")),
              this.addToRecentlyDeleted(i, "session"),
              this.client.core.crypto.keychain.has(a.publicKey) &&
                (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
              this.client.core.crypto.keychain.has(i) &&
                (await this.client.core.crypto.deleteSymKey(i)),
              r || this.client.core.expirer.del(i),
              this.client.core.storage
                .removeItem(uY)
                .catch((e) => this.client.logger.warn(e)),
              this.getPendingSessionRequests().forEach((e) => {
                e.topic === i &&
                  this.deletePendingSessionRequest(
                    e.id,
                    cC("USER_DISCONNECTED")
                  );
              }),
              i ===
                (null == (t = this.sessionRequestQueue.queue[0])
                  ? void 0
                  : t.topic) && (this.sessionRequestQueue.state = u1),
              s &&
                this.client.events.emit("session_delete", { id: n, topic: i });
          }),
          pn(this, "deleteProposal", async (e, t) => {
            if (t)
              try {
                let t = this.client.proposal.get(e),
                  i = this.client.core.eventClient.getEvent({
                    topic: t.pairingTopic,
                  });
                i?.setError("proposal_expired");
              } catch {}
            await Promise.all([
              this.client.proposal.delete(e, cC("USER_DISCONNECTED")),
              t ? Promise.resolve() : this.client.core.expirer.del(e),
            ]),
              this.addToRecentlyDeleted(e, "proposal");
          }),
          pn(this, "deletePendingSessionRequest", async (e, t, i = !1) => {
            await Promise.all([
              this.client.pendingRequest.delete(e, t),
              i ? Promise.resolve() : this.client.core.expirer.del(e),
            ]),
              this.addToRecentlyDeleted(e, "request"),
              (this.sessionRequestQueue.queue =
                this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
              i &&
                ((this.sessionRequestQueue.state = u1),
                this.client.events.emit("session_request_expire", { id: e }));
          }),
          pn(this, "deletePendingAuthRequest", async (e, t, i = !1) => {
            await Promise.all([
              this.client.auth.requests.delete(e, t),
              i ? Promise.resolve() : this.client.core.expirer.del(e),
            ]);
          }),
          pn(this, "setExpiry", async (e, t) => {
            this.client.session.keys.includes(e) &&
              (this.client.core.expirer.set(e, t),
              await this.client.session.update(e, { expiry: t }));
          }),
          pn(this, "setProposal", async (e, t) => {
            this.client.core.expirer.set(e, s4(uX.wc_sessionPropose.req.ttl)),
              await this.client.proposal.set(e, t);
          }),
          pn(this, "setAuthRequest", async (e, t) => {
            let { request: i, pairingTopic: r, transportType: s = hP } = t;
            this.client.core.expirer.set(e, i.expiryTimestamp),
              await this.client.auth.requests.set(e, {
                authPayload: i.authPayload,
                requester: i.requester,
                expiryTimestamp: i.expiryTimestamp,
                id: e,
                pairingTopic: r,
                verifyContext: i.verifyContext,
                transportType: s,
              });
          }),
          pn(this, "setPendingSessionRequest", async (e) => {
            let { id: t, topic: i, params: r, verifyContext: s } = e,
              n = r.request.expiryTimestamp || s4(uX.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(t, n),
              await this.client.pendingRequest.set(t, {
                id: t,
                topic: i,
                params: r,
                verifyContext: s,
              });
          }),
          pn(this, "sendRequest", async (t) => {
            let i,
              r,
              {
                topic: s,
                method: n,
                params: a,
                expiry: o,
                relayRpcId: l,
                clientRpcId: c,
                throwOnFailedPublish: h,
                appLink: d,
                tvf: u,
                publishOpts: p = {},
              } = t,
              f = (0, ha.formatJsonRpcRequest)(n, a, c),
              g = !!d;
            try {
              let e = g ? lV : lF;
              i = await this.client.core.crypto.encode(s, f, { encoding: e });
            } catch (e) {
              throw (
                (await this.cleanup(),
                this.client.logger.error(
                  `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                ),
                e)
              );
            }
            if (u3.includes(n)) {
              let e = lQ(JSON.stringify(f)),
                t = lQ(i);
              r = await this.client.core.verify.register({
                id: t,
                decryptedId: e,
              });
            }
            let y = ps(ps({}, uX[n].req), p);
            if (
              ((y.attestation = r),
              o && (y.ttl = o),
              l && (y.id = l),
              this.client.core.history.set(s, f),
              g)
            ) {
              let t = cc(d, s, i);
              await e.g.Linking.openURL(t, this.client.name);
            } else {
              let e;
              (y.tvf = u7(ps({}, u), u9({ correlationId: f.id }))),
                h
                  ? ((e = ps({}, y.internal)),
                    (y.internal = u7(e, u9({ throwOnFailedPublish: !0 }))),
                    await this.client.core.relayer.publish(s, i, y))
                  : this.client.core.relayer
                      .publish(s, i, y)
                      .catch((e) => this.client.logger.error(e));
            }
            return f.id;
          }),
          pn(this, "sendProposeSession", async (e) => {
            let { proposal: t, publishOpts: i } = e,
              r = (0, ha.formatJsonRpcRequest)("wc_sessionPropose", t, t.id);
            this.client.core.history.set(t.pairingTopic, r);
            let s = await this.client.core.crypto.encode(t.pairingTopic, r, {
                encoding: lF,
              }),
              n = lQ(JSON.stringify(r)),
              a = lQ(s),
              o = await this.client.core.verify.register({
                id: a,
                decryptedId: n,
              });
            await this.client.core.relayer.publishCustom({
              payload: { pairingTopic: t.pairingTopic, sessionProposal: s },
              opts: u7(
                ps({}, i),
                u9({ publishMethod: "wc_proposeSession", attestation: o })
              ),
            });
          }),
          pn(this, "sendApproveSession", async (e) => {
            let {
                sessionTopic: t,
                pairingProposalResponse: i,
                proposal: r,
                sessionSettleRequest: s,
                publishOpts: n,
              } = e,
              a = (0, ha.formatJsonRpcResult)(r.id, i),
              o = await this.client.core.crypto.encode(r.pairingTopic, a, {
                encoding: lF,
              }),
              l = (0, ha.formatJsonRpcRequest)("wc_sessionSettle", s, n?.id),
              c = await this.client.core.crypto.encode(t, l, { encoding: lF });
            this.client.core.history.set(t, l),
              await this.client.core.relayer.publishCustom({
                payload: {
                  sessionTopic: t,
                  pairingTopic: r.pairingTopic,
                  sessionProposalResponse: o,
                  sessionSettlementRequest: c,
                },
                opts: u7(ps({}, n), u9({ publishMethod: "wc_approveSession" })),
              });
          }),
          pn(this, "sendResult", async (t) => {
            let i,
              r,
              s,
              {
                id: n,
                topic: a,
                result: o,
                throwOnFailedPublish: l,
                encodeOpts: c,
                appLink: h,
              } = t,
              d = (0, ha.formatJsonRpcResult)(n, o),
              u = h && "u" > typeof (null == e.g ? void 0 : e.g.Linking);
            try {
              let e,
                t,
                r = u ? lV : lF;
              i = await this.client.core.crypto.encode(
                a,
                d,
                ((e = ps({}, c || {})), (t = { encoding: r }), u7(e, u9(t)))
              );
            } catch (e) {
              throw (
                (await this.cleanup(),
                this.client.logger.error(
                  `sendResult() -> core.crypto.encode() for topic ${a} failed`
                ),
                e)
              );
            }
            try {
              let e = (r = await this.client.core.history.get(a, n)).request;
              try {
                s = this.getTVFParams(n, e.params, o);
              } catch (e) {
                this.client.logger.warn(
                  `sendResult() -> getTVFParams() failed: ${e?.message}`
                );
              }
            } catch (e) {
              throw (
                (this.client.logger.error(
                  `sendResult() -> history.get(${a}, ${n}) failed`
                ),
                e)
              );
            }
            if (u) {
              let t = cc(h, a, i);
              await e.g.Linking.openURL(t, this.client.name);
            } else {
              let e,
                t = uX[r.request.method].res;
              (t.tvf = u7(ps({}, s), u9({ correlationId: n }))),
                l
                  ? ((e = ps({}, t.internal)),
                    (t.internal = u7(e, u9({ throwOnFailedPublish: !0 }))),
                    await this.client.core.relayer.publish(a, i, t))
                  : this.client.core.relayer
                      .publish(a, i, t)
                      .catch((e) => this.client.logger.error(e));
            }
            await this.client.core.history.resolve(d);
          }),
          pn(this, "sendError", async (t) => {
            let i,
              r,
              {
                id: s,
                topic: n,
                error: a,
                encodeOpts: o,
                rpcOpts: l,
                appLink: c,
              } = t,
              h = (0, ha.formatJsonRpcError)(s, a),
              d = c && "u" > typeof (null == e.g ? void 0 : e.g.Linking);
            try {
              let e,
                t,
                r = d ? lV : lF;
              i = await this.client.core.crypto.encode(
                n,
                h,
                ((e = ps({}, o || {})), (t = { encoding: r }), u7(e, u9(t)))
              );
            } catch (e) {
              throw (
                (await this.cleanup(),
                this.client.logger.error(
                  `sendError() -> core.crypto.encode() for topic ${n} failed`
                ),
                e)
              );
            }
            try {
              r = await this.client.core.history.get(n, s);
            } catch (e) {
              throw (
                (this.client.logger.error(
                  `sendError() -> history.get(${n}, ${s}) failed`
                ),
                e)
              );
            }
            if (d) {
              let t = cc(c, n, i);
              await e.g.Linking.openURL(t, this.client.name);
            } else {
              let e = r.request.method,
                t = l || uX[e].res;
              this.client.core.relayer.publish(n, i, t);
            }
            await this.client.core.history.resolve(h);
          }),
          pn(this, "cleanup", async () => {
            let e = [],
              t = [];
            this.client.session.getAll().forEach((t) => {
              let i = !1;
              s7(t.expiry) && (i = !0),
                this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                i && e.push(t.topic);
            }),
              this.client.proposal.getAll().forEach((e) => {
                s7(e.expiryTimestamp) && t.push(e.id);
              }),
              await Promise.all([
                ...e.map((e) => this.deleteSession({ topic: e })),
                ...t.map((e) => this.deleteProposal(e)),
              ]);
          }),
          pn(this, "onProviderMessageEvent", async (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : await this.onRelayMessage(e);
          }),
          pn(this, "onRelayEventRequest", async (e) => {
            this.requestQueue.queue.push(e), await this.processRequestsQueue();
          }),
          pn(this, "processRequestsQueue", async () => {
            if (this.requestQueue.state === u2)
              return void this.client.logger.info(
                "Request queue already active, skipping..."
              );
            for (
              this.client.logger.info(
                `Request queue starting with ${this.requestQueue.queue.length} requests`
              );
              this.requestQueue.queue.length > 0;

            ) {
              this.requestQueue.state = u2;
              let e = this.requestQueue.queue.shift();
              if (e)
                try {
                  await this.processRequest(e);
                } catch (e) {
                  this.client.logger.warn(e);
                }
            }
            this.requestQueue.state = u1;
          }),
          pn(this, "processRequest", async (e) => {
            let {
                topic: t,
                payload: i,
                attestation: r,
                transportType: s,
                encryptedId: n,
              } = e,
              a = i.method;
            if (
              !this.shouldIgnorePairingRequest({ topic: t, requestMethod: a })
            )
              switch (a) {
                case "wc_sessionPropose":
                  return await this.onSessionProposeRequest({
                    topic: t,
                    payload: i,
                    attestation: r,
                    encryptedId: n,
                  });
                case "wc_sessionSettle":
                  return await this.onSessionSettleRequest(t, i);
                case "wc_sessionUpdate":
                  return await this.onSessionUpdateRequest(t, i);
                case "wc_sessionExtend":
                  return await this.onSessionExtendRequest(t, i);
                case "wc_sessionPing":
                  return await this.onSessionPingRequest(t, i);
                case "wc_sessionDelete":
                  return await this.onSessionDeleteRequest(t, i);
                case "wc_sessionRequest":
                  return await this.onSessionRequest({
                    topic: t,
                    payload: i,
                    attestation: r,
                    encryptedId: n,
                    transportType: s,
                  });
                case "wc_sessionEvent":
                  return await this.onSessionEventRequest(t, i);
                case "wc_sessionAuthenticate":
                  return await this.onSessionAuthenticateRequest({
                    topic: t,
                    payload: i,
                    attestation: r,
                    encryptedId: n,
                    transportType: s,
                  });
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${a}`
                  );
              }
          }),
          pn(this, "onRelayEventResponse", async (e) => {
            let { topic: t, payload: i, transportType: r } = e,
              s = (await this.client.core.history.get(t, i.id)).request.method;
            switch (s) {
              case "wc_sessionPropose":
                return this.onSessionProposeResponse(t, i, r);
              case "wc_sessionSettle":
                return this.onSessionSettleResponse(t, i);
              case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(t, i);
              case "wc_sessionExtend":
                return this.onSessionExtendResponse(t, i);
              case "wc_sessionPing":
                return this.onSessionPingResponse(t, i);
              case "wc_sessionRequest":
                return this.onSessionRequestResponse(t, i);
              case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(t, i);
              default:
                return this.client.logger.info(
                  `Unsupported response method ${s}`
                );
            }
          }),
          pn(this, "onRelayEventUnknownPayload", (e) => {
            let { topic: t } = e,
              { message: i } = cP(
                "MISSING_OR_INVALID",
                `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
              );
            throw Error(i);
          }),
          pn(this, "shouldIgnorePairingRequest", (e) => {
            let { topic: t, requestMethod: i } = e,
              r = this.expectedPairingMethodMap.get(t);
            return (
              !(!r || r.includes(i)) &&
              !!(
                r.includes("wc_sessionAuthenticate") &&
                this.client.events.listenerCount("session_authenticate") > 0
              )
            );
          }),
          pn(this, "onSessionProposeRequest", async (e) => {
            let { topic: t, payload: i, attestation: r, encryptedId: s } = e,
              { params: n, id: a } = i;
            try {
              let e = this.client.core.eventClient.getEvent({ topic: t });
              0 === this.client.events.listenerCount("session_proposal") &&
                (console.warn("No listener for session_proposal event"),
                e?.setError("proposal_listener_not_found")),
                this.isValidConnect(ps({}, i.params));
              let o = n.expiryTimestamp || s4(uX.wc_sessionPropose.req.ttl),
                l = ps(
                  {
                    id: a,
                    pairingTopic: t,
                    expiryTimestamp: o,
                    attestation: r,
                    encryptedId: s,
                  },
                  n
                );
              await this.setProposal(a, l);
              let c = await this.getVerifyContext({
                attestationId: r,
                hash: lQ(JSON.stringify(i)),
                encryptedId: s,
                metadata: l.proposer.metadata,
              });
              e?.addTrace("emit_session_proposal"),
                this.client.events.emit("session_proposal", {
                  id: a,
                  params: l,
                  verifyContext: c,
                });
            } catch (e) {
              await this.sendError({
                id: a,
                topic: t,
                error: e,
                rpcOpts: uX.wc_sessionPropose.autoReject,
              }),
                this.client.logger.error(e);
            }
          }),
          pn(this, "onSessionProposeResponse", async (e, t, i) => {
            let { id: r } = t;
            if ((0, ho.isJsonRpcResult)(t)) {
              let { result: s } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                result: s,
              });
              let n = this.client.proposal.get(r);
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                proposal: n,
              });
              let a = n.proposer.publicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                selfPublicKey: a,
              });
              let o = s.responderPublicKey;
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                peerPublicKey: o,
              });
              let l = await this.client.core.crypto.generateSharedKey(a, o);
              this.pendingSessions.set(r, {
                sessionTopic: l,
                pairingTopic: e,
                proposalId: r,
                publicKey: a,
              });
              let c = await this.client.core.relayer.subscribe(l, {
                transportType: i,
              });
              this.client.logger.trace({
                type: "method",
                method: "onSessionProposeResponse",
                subscriptionId: c,
              }),
                await this.client.core.pairing.activate({ topic: e });
            } else if ((0, ho.isJsonRpcError)(t)) {
              await this.deleteProposal(r);
              let e = s9("session_connect", r);
              if (0 === this.events.listenerCount(e))
                throw Error(`emitting ${e} without any listeners, 954`);
              this.events.emit(e, { error: t.error });
            }
          }),
          pn(this, "onSessionSettleRequest", async (e, t) => {
            let { id: i, params: r } = t;
            try {
              let i, s;
              this.isValidSessionSettleRequest(r);
              let {
                  relay: n,
                  controller: a,
                  expiry: o,
                  namespaces: l,
                  sessionProperties: c,
                  scopedProperties: h,
                  sessionConfig: d,
                } = t.params,
                u = [...this.pendingSessions.values()].find(
                  (t) => t.sessionTopic === e
                );
              if (!u)
                return this.client.logger.error(
                  `Pending session not found for topic ${e}`
                );
              let p = this.client.proposal.get(u.proposalId),
                f =
                  ((i = ps(
                    ps(
                      ps(
                        {
                          topic: e,
                          relay: n,
                          expiry: o,
                          namespaces: l,
                          acknowledged: !0,
                          pairingTopic: u.pairingTopic,
                          requiredNamespaces: p.requiredNamespaces,
                          optionalNamespaces: p.optionalNamespaces,
                          controller: a.publicKey,
                          self: {
                            publicKey: u.publicKey,
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: a.publicKey,
                            metadata: a.metadata,
                          },
                        },
                        c && { sessionProperties: c }
                      ),
                      h && { scopedProperties: h }
                    ),
                    d && { sessionConfig: d }
                  )),
                  (s = { transportType: hP }),
                  u7(i, u9(s)));
              await this.client.session.set(f.topic, f),
                await this.setExpiry(f.topic, f.expiry),
                await this.client.core.pairing.updateMetadata({
                  topic: u.pairingTopic,
                  metadata: f.peer.metadata,
                }),
                this.client.events.emit("session_connect", { session: f }),
                this.events.emit(s9("session_connect", u.proposalId), {
                  session: f,
                }),
                this.pendingSessions.delete(u.proposalId),
                this.deleteProposal(u.proposalId, !1),
                this.cleanupDuplicatePairings(f),
                await this.sendResult({ id: t.id, topic: e, result: !0 });
            } catch (t) {
              await this.sendError({ id: i, topic: e, error: t }),
                this.client.logger.error(t);
            }
          }),
          pn(this, "onSessionSettleResponse", async (e, t) => {
            let { id: i } = t;
            (0, ho.isJsonRpcResult)(t)
              ? (await this.client.session.update(e, { acknowledged: !0 }),
                this.events.emit(s9("session_approve", i), {}))
              : (0, ho.isJsonRpcError)(t) &&
                (await this.client.session.delete(e, cC("USER_DISCONNECTED")),
                this.events.emit(s9("session_approve", i), { error: t.error }));
          }),
          pn(this, "onSessionUpdateRequest", async (e, t) => {
            let { params: i, id: r } = t;
            try {
              let t = `${e}_session_update`,
                s = cJ.get(t);
              if (s && this.isRequestOutOfSync(s, r)) {
                this.client.logger.warn(
                  `Discarding out of sync request - ${r}`
                ),
                  this.sendError({
                    id: r,
                    topic: e,
                    error: cC("INVALID_UPDATE_REQUEST"),
                  });
                return;
              }
              this.isValidUpdate(ps({ topic: e }, i));
              try {
                cJ.set(t, r),
                  await this.client.session.update(e, {
                    namespaces: i.namespaces,
                  }),
                  await this.sendResult({ id: r, topic: e, result: !0 });
              } catch (e) {
                throw (cJ.delete(t), e);
              }
              this.client.events.emit("session_update", {
                id: r,
                topic: e,
                params: i,
              });
            } catch (t) {
              await this.sendError({ id: r, topic: e, error: t }),
                this.client.logger.error(t);
            }
          }),
          pn(
            this,
            "isRequestOutOfSync",
            (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
          ),
          pn(this, "onSessionUpdateResponse", (e, t) => {
            let { id: i } = t,
              r = s9("session_update", i);
            if (0 === this.events.listenerCount(r))
              throw Error(`emitting ${r} without any listeners`);
            (0, ho.isJsonRpcResult)(t)
              ? this.events.emit(s9("session_update", i), {})
              : (0, ho.isJsonRpcError)(t) &&
                this.events.emit(s9("session_update", i), { error: t.error });
          }),
          pn(this, "onSessionExtendRequest", async (e, t) => {
            let { id: i } = t;
            try {
              this.isValidExtend({ topic: e }),
                await this.setExpiry(e, s4(uQ)),
                await this.sendResult({ id: i, topic: e, result: !0 }),
                this.client.events.emit("session_extend", { id: i, topic: e });
            } catch (t) {
              await this.sendError({ id: i, topic: e, error: t }),
                this.client.logger.error(t);
            }
          }),
          pn(this, "onSessionExtendResponse", (e, t) => {
            let { id: i } = t,
              r = s9("session_extend", i);
            if (0 === this.events.listenerCount(r))
              throw Error(`emitting ${r} without any listeners`);
            (0, ho.isJsonRpcResult)(t)
              ? this.events.emit(s9("session_extend", i), {})
              : (0, ho.isJsonRpcError)(t) &&
                this.events.emit(s9("session_extend", i), { error: t.error });
          }),
          pn(this, "onSessionPingRequest", async (e, t) => {
            let { id: i } = t;
            try {
              this.isValidPing({ topic: e }),
                await this.sendResult({
                  id: i,
                  topic: e,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_ping", { id: i, topic: e });
            } catch (t) {
              await this.sendError({ id: i, topic: e, error: t }),
                this.client.logger.error(t);
            }
          }),
          pn(this, "onSessionPingResponse", (e, t) => {
            let { id: i } = t,
              r = s9("session_ping", i);
            setTimeout(() => {
              if (0 === this.events.listenerCount(r))
                throw Error(`emitting ${r} without any listeners 2176`);
              (0, ho.isJsonRpcResult)(t)
                ? this.events.emit(s9("session_ping", i), {})
                : (0, ho.isJsonRpcError)(t) &&
                  this.events.emit(s9("session_ping", i), { error: t.error });
            }, 500);
          }),
          pn(this, "onSessionDeleteRequest", async (e, t) => {
            let { id: i } = t;
            try {
              this.isValidDisconnect({ topic: e, reason: t.params }),
                await Promise.all([
                  new Promise((t) => {
                    this.client.core.relayer.once(hb, async () => {
                      t(await this.deleteSession({ topic: e, id: i }));
                    });
                  }),
                  this.sendResult({ id: i, topic: e, result: !0 }),
                  this.cleanupPendingSentRequestsForTopic({
                    topic: e,
                    error: cC("USER_DISCONNECTED"),
                  }),
                ]).catch((e) => this.client.logger.error(e));
            } catch (e) {
              this.client.logger.error(e);
            }
          }),
          pn(this, "onSessionRequest", async (e) => {
            var t, i, r;
            let {
                topic: s,
                payload: n,
                attestation: a,
                encryptedId: o,
                transportType: l,
              } = e,
              { id: c, params: h } = n;
            try {
              await this.isValidRequest(ps({ topic: s }, h));
              let e = this.client.session.get(s),
                n = await this.getVerifyContext({
                  attestationId: a,
                  hash: lQ(
                    JSON.stringify(
                      (0, ha.formatJsonRpcRequest)("wc_sessionRequest", h, c)
                    )
                  ),
                  encryptedId: o,
                  metadata: e.peer.metadata,
                  transportType: l,
                }),
                d = { id: c, topic: s, params: h, verifyContext: n };
              await this.setPendingSessionRequest(d),
                l === hA &&
                  null != (t = e.peer.metadata.redirect) &&
                  t.universal &&
                  this.client.core.addLinkModeSupportedApp(
                    null == (i = e.peer.metadata.redirect)
                      ? void 0
                      : i.universal
                  ),
                null != (r = this.client.signConfig) && r.disableRequestQueue
                  ? this.emitSessionRequest(d)
                  : (this.addSessionRequestToSessionRequestQueue(d),
                    this.processSessionRequestQueue());
            } catch (e) {
              await this.sendError({ id: c, topic: s, error: e }),
                this.client.logger.error(e);
            }
          }),
          pn(this, "onSessionRequestResponse", (e, t) => {
            let { id: i } = t,
              r = s9("session_request", i);
            if (0 === this.events.listenerCount(r))
              throw Error(`emitting ${r} without any listeners`);
            (0, ho.isJsonRpcResult)(t)
              ? this.events.emit(s9("session_request", i), { result: t.result })
              : (0, ho.isJsonRpcError)(t) &&
                this.events.emit(s9("session_request", i), { error: t.error });
          }),
          pn(this, "onSessionEventRequest", async (e, t) => {
            let { id: i, params: r } = t;
            try {
              let t = `${e}_session_event_${r.event.name}`,
                s = cJ.get(t);
              if (s && this.isRequestOutOfSync(s, i))
                return void this.client.logger.info(
                  `Discarding out of sync request - ${i}`
                );
              this.isValidEmit(ps({ topic: e }, r)),
                this.client.events.emit("session_event", {
                  id: i,
                  topic: e,
                  params: r,
                }),
                cJ.set(t, i);
            } catch (t) {
              await this.sendError({ id: i, topic: e, error: t }),
                this.client.logger.error(t);
            }
          }),
          pn(this, "onSessionAuthenticateResponse", (e, t) => {
            let { id: i } = t;
            this.client.logger.trace({
              type: "method",
              method: "onSessionAuthenticateResponse",
              topic: e,
              payload: t,
            }),
              (0, ho.isJsonRpcResult)(t)
                ? this.events.emit(s9("session_request", i), {
                    result: t.result,
                  })
                : (0, ho.isJsonRpcError)(t) &&
                  this.events.emit(s9("session_request", i), {
                    error: t.error,
                  });
          }),
          pn(this, "onSessionAuthenticateRequest", async (e) => {
            var t;
            let {
              topic: i,
              payload: r,
              attestation: s,
              encryptedId: n,
              transportType: a,
            } = e;
            try {
              let {
                  requester: e,
                  authPayload: o,
                  expiryTimestamp: l,
                } = r.params,
                c = await this.getVerifyContext({
                  attestationId: s,
                  hash: lQ(JSON.stringify(r)),
                  encryptedId: n,
                  metadata: e.metadata,
                  transportType: a,
                }),
                h = {
                  requester: e,
                  pairingTopic: i,
                  id: r.id,
                  authPayload: o,
                  verifyContext: c,
                  expiryTimestamp: l,
                };
              await this.setAuthRequest(r.id, {
                request: h,
                pairingTopic: i,
                transportType: a,
              }),
                a === hA &&
                  null != (t = e.metadata.redirect) &&
                  t.universal &&
                  this.client.core.addLinkModeSupportedApp(
                    e.metadata.redirect.universal
                  ),
                this.client.events.emit("session_authenticate", {
                  topic: i,
                  params: r.params,
                  id: r.id,
                  verifyContext: c,
                });
            } catch (n) {
              this.client.logger.error(n);
              let e = r.params.requester.publicKey,
                t = await this.client.core.crypto.generateKeyPair(),
                s = this.getAppLinkIfEnabled(r.params.requester.metadata, a);
              await this.sendError({
                id: r.id,
                topic: i,
                error: n,
                encodeOpts: {
                  type: 1,
                  receiverPublicKey: e,
                  senderPublicKey: t,
                },
                rpcOpts: uX.wc_sessionAuthenticate.autoReject,
                appLink: s,
              });
            }
          }),
          pn(this, "addSessionRequestToSessionRequestQueue", (e) => {
            this.sessionRequestQueue.queue.push(e);
          }),
          pn(this, "cleanupAfterResponse", (e) => {
            this.deletePendingSessionRequest(e.response.id, {
              message: "fulfilled",
              code: 0,
            }),
              setTimeout(() => {
                (this.sessionRequestQueue.state = u1),
                  this.processSessionRequestQueue();
              }, (0, iL.toMiliseconds)(this.requestQueueDelay));
          }),
          pn(
            this,
            "cleanupPendingSentRequestsForTopic",
            ({ topic: e, error: t }) => {
              let i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((e) => {
                    let i = s9("session_request", e.request.id);
                    if (0 === this.events.listenerCount(i))
                      throw Error(`emitting ${i} without any listeners`);
                    this.events.emit(s9("session_request", e.request.id), {
                      error: t,
                    });
                  });
            }
          ),
          pn(this, "processSessionRequestQueue", () => {
            if (this.sessionRequestQueue.state === u2)
              return void this.client.logger.info(
                "session request queue is already active."
              );
            let e = this.sessionRequestQueue.queue[0];
            if (!e)
              return void this.client.logger.info(
                "session request queue is empty."
              );
            try {
              this.emitSessionRequest(e);
            } catch (e) {
              this.client.logger.error(e);
            }
          }),
          pn(this, "emitSessionRequest", (e) => {
            this.emittedSessionRequests.has(e.id)
              ? this.client.logger.warn(
                  { id: e.id },
                  `Skipping emitting \`session_request\` event for duplicate request. id: ${e.id}`
                )
              : ((this.sessionRequestQueue.state = u2),
                this.emittedSessionRequests.add(e.id),
                this.client.events.emit("session_request", e));
          }),
          pn(this, "onPairingCreated", (e) => {
            if (
              (e.methods &&
                this.expectedPairingMethodMap.set(e.topic, e.methods),
              e.active)
            )
              return;
            let t = this.client.proposal
              .getAll()
              .find((t) => t.pairingTopic === e.topic);
            t &&
              this.onSessionProposeRequest({
                topic: e.topic,
                payload: (0, ha.formatJsonRpcRequest)(
                  "wc_sessionPropose",
                  u7(
                    ps({}, t),
                    u9({
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    })
                  ),
                  t.id
                ),
                attestation: t.attestation,
                encryptedId: t.encryptedId,
              });
          }),
          pn(this, "isValidConnect", async (e) => {
            let t;
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `connect() params: ${JSON.stringify(e)}`
              );
              throw Error(t);
            }
            let {
              pairingTopic: i,
              requiredNamespaces: r,
              optionalNamespaces: s,
              sessionProperties: n,
              scopedProperties: a,
              relays: o,
            } = e;
            if (
              (cT(i) || (await this.isValidPairingTopic(i)),
              (t = !1),
              o
                ? o &&
                  cx(o) &&
                  o.length &&
                  o.forEach((e) => {
                    t = cU(e);
                  })
                : (t = !0),
              !t)
            ) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `connect() relays: ${o}`
              );
              throw Error(e);
            }
            if (r && !cT(r) && 0 !== ck(r)) {
              let e =
                "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
              ["fatal", "error", "silent"].includes(this.client.logger.level)
                ? console.warn(e)
                : this.client.logger.warn(e),
                this.validateNamespaces(r, "requiredNamespaces");
            }
            if (
              (s &&
                !cT(s) &&
                0 !== ck(s) &&
                this.validateNamespaces(s, "optionalNamespaces"),
              n && !cT(n) && this.validateSessionProps(n, "sessionProperties"),
              a && !cT(a))
            ) {
              this.validateSessionProps(a, "scopedProperties");
              let e = Object.keys(r || {}).concat(Object.keys(s || {}));
              if (!Object.keys(a).every((t) => e.includes(t.split(":")[0])))
                throw Error(
                  `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                    a
                  )}, required/optional namespaces: ${JSON.stringify(e)}`
                );
            }
          }),
          pn(this, "validateNamespaces", (e, t) => {
            let i = (function (e, t, i) {
              let r = null;
              if (e && ck(e)) {
                let s,
                  n = cD(e, t);
                n && (r = n);
                let a =
                  ((s = null),
                  Object.entries(e).forEach(([e, r]) => {
                    var n, a;
                    let o;
                    if (s) return;
                    let l =
                      ((n = sj(e, r)),
                      (a = `${t} ${i}`),
                      (o = null),
                      cx(n) && n.length
                        ? n.forEach((e) => {
                            o ||
                              cN(e) ||
                              (o = cC(
                                "UNSUPPORTED_CHAINS",
                                `${a}, chain ${e} should be a string and conform to "namespace:chainId" format`
                              ));
                          })
                        : cN(e) ||
                          (o = cC(
                            "UNSUPPORTED_CHAINS",
                            `${a}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                          )),
                      o);
                    l && (s = l);
                  }),
                  s);
                a && (r = a);
              } else
                r = cP(
                  "MISSING_OR_INVALID",
                  `${t}, ${i} should be an object with data`
                );
              return r;
            })(e, "connect()", t);
            if (i) throw Error(i.message);
          }),
          pn(this, "isValidApprove", async (e) => {
            if (!cL(e))
              throw Error(
                cP("MISSING_OR_INVALID", `approve() params: ${e}`).message
              );
            let {
              id: t,
              namespaces: i,
              relayProtocol: r,
              sessionProperties: s,
              scopedProperties: n,
            } = e;
            this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
            let a = this.client.proposal.get(t),
              o = cM(i, "approve()");
            if (o) throw Error(o.message);
            let l = cB(a.requiredNamespaces, i, "approve()");
            if (l) throw Error(l.message);
            if (!cO(r, !0)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `approve() relayProtocol: ${r}`
              );
              throw Error(e);
            }
            if (
              (s && !cT(s) && this.validateSessionProps(s, "sessionProperties"),
              n && !cT(n))
            ) {
              this.validateSessionProps(n, "scopedProperties");
              let e = new Set(Object.keys(i));
              if (!Object.keys(n).every((t) => e.has(t.split(":")[0])))
                throw Error(
                  `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                    n
                  )}, approved namespaces: ${Array.from(e).join(", ")}`
                );
            }
          }),
          pn(this, "isValidReject", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `reject() params: ${e}`
              );
              throw Error(t);
            }
            let { id: t, reason: i } = e;
            if (
              (this.checkRecentlyDeleted(t),
              await this.isValidProposalId(t),
              !i ||
                "object" != typeof i ||
                !i.code ||
                !cR(i.code, !1) ||
                !i.message ||
                !cO(i.message, !1))
            ) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `reject() reason: ${JSON.stringify(i)}`
              );
              throw Error(e);
            }
          }),
          pn(this, "isValidSessionSettleRequest", (e) => {
            let t;
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `onSessionSettleRequest() params: ${e}`
              );
              throw Error(t);
            }
            let { relay: i, controller: r, namespaces: s, expiry: n } = e;
            if (!cU(i)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                "onSessionSettleRequest() relay protocol should be a string"
              );
              throw Error(e);
            }
            let a =
              ((t = null),
              cO(r?.publicKey, !1) ||
                (t = cP(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() controller public key should be a string"
                )),
              t);
            if (a) throw Error(a.message);
            let o = cM(s, "onSessionSettleRequest()");
            if (o) throw Error(o.message);
            if (s7(n)) {
              let { message: e } = cP("EXPIRED", "onSessionSettleRequest()");
              throw Error(e);
            }
          }),
          pn(this, "isValidUpdate", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `update() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t, namespaces: i } = e;
            this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            let r = this.client.session.get(t),
              s = cM(i, "update()");
            if (s) throw Error(s.message);
            let n = cB(r.requiredNamespaces, i, "update()");
            if (n) throw Error(n.message);
          }),
          pn(this, "isValidExtend", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `extend() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t } = e;
            this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
          }),
          pn(this, "isValidRequest", async (e) => {
            var t;
            let i;
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `request() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: r, request: s, chainId: n, expiry: a } = e;
            this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
            let { namespaces: o } = this.client.session.get(r);
            if (!cW(o, n)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `request() chainId: ${n}`
              );
              throw Error(e);
            }
            if (cT(s) || !cO(s.method, !1)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `request() ${JSON.stringify(s)}`
              );
              throw Error(e);
            }
            if (
              !(
                cO((t = s.method), !1) &&
                ((i = []),
                Object.values(o).forEach((e) => {
                  cb(e.accounts).includes(n) && i.push(...e.methods);
                }),
                i).includes(t)
              )
            ) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `request() method: ${s.method}`
              );
              throw Error(e);
            }
            if (a && (!cR(a, !1) || !(a <= u0.max) || !(a >= u0.min))) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `request() expiry: ${a}. Expiry must be a number (in seconds) between ${u0.min} and ${u0.max}`
              );
              throw Error(e);
            }
          }),
          pn(this, "isValidRespond", async (e) => {
            var t;
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `respond() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: i, response: r } = e;
            try {
              await this.isValidSessionTopic(i);
            } catch (i) {
              throw (
                (null != (t = e?.response) &&
                  t.id &&
                  this.cleanupAfterResponse(e),
                i)
              );
            }
            if (
              cT(r) ||
              (cT(r.result) && cT(r.error)) ||
              !cR(r.id, !1) ||
              !cO(r.jsonrpc, !1)
            ) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `respond() response: ${JSON.stringify(r)}`
              );
              throw Error(e);
            }
            let s = this.client.pendingRequest.get(r.id);
            if (s.topic !== i) {
              let { message: e } = cP(
                "MISMATCHED_TOPIC",
                `Request response topic mismatch. reqId: ${r.id}, expected topic: ${s.topic}, received topic: ${i}`
              );
              throw Error(e);
            }
          }),
          pn(this, "isValidPing", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `ping() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t);
          }),
          pn(this, "isValidEmit", async (e) => {
            var t;
            let i;
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `emit() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: r, event: s, chainId: n } = e;
            await this.isValidSessionTopic(r);
            let { namespaces: a } = this.client.session.get(r);
            if (!cW(a, n)) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `emit() chainId: ${n}`
              );
              throw Error(e);
            }
            if (
              cT(s) ||
              !cO(s.name, !1) ||
              !(
                cO((t = s.name), !1) &&
                ((i = []),
                Object.values(a).forEach((e) => {
                  cb(e.accounts).includes(n) && i.push(...e.events);
                }),
                i).includes(t)
              )
            ) {
              let { message: e } = cP(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(s)}`
              );
              throw Error(e);
            }
          }),
          pn(this, "isValidDisconnect", async (e) => {
            if (!cL(e)) {
              let { message: t } = cP(
                "MISSING_OR_INVALID",
                `disconnect() params: ${e}`
              );
              throw Error(t);
            }
            let { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t);
          }),
          pn(this, "isValidAuthenticate", (e) => {
            let { chains: t, uri: i, domain: r, nonce: s } = e;
            if (!Array.isArray(t) || 0 === t.length)
              throw Error("chains is required and must be a non-empty array");
            if (!cO(i, !1)) throw Error("uri is required parameter");
            if (!cO(r, !1)) throw Error("domain is required parameter");
            if (!cO(s, !1)) throw Error("nonce is required parameter");
            if ([...new Set(t.map((e) => sR(e).namespace))].length > 1)
              throw Error(
                "Multi-namespace requests are not supported. Please request single namespace only."
              );
            let { namespace: n } = sR(t[0]);
            if ("eip155" !== n)
              throw Error(
                "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
              );
          }),
          pn(this, "getVerifyContext", async (e) => {
            let {
                attestationId: t,
                hash: i,
                encryptedId: r,
                metadata: s,
                transportType: n,
              } = e,
              a = {
                verified: {
                  verifyUrl: s.verifyUrl || hB,
                  validation: "UNKNOWN",
                  origin: s.url || "",
                },
              };
            try {
              if (n === hA) {
                let e = this.getAppLinkIfEnabled(s, n);
                return (
                  (a.verified.validation =
                    e && new URL(e).origin === new URL(s.url).origin
                      ? "VALID"
                      : "INVALID"),
                  a
                );
              }
              let e = await this.client.core.verify.resolve({
                attestationId: t,
                hash: i,
                encryptedId: r,
                verifyUrl: s.verifyUrl,
              });
              e &&
                ((a.verified.origin = e.origin),
                (a.verified.isScam = e.isScam),
                (a.verified.validation =
                  e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
            } catch (e) {
              this.client.logger.warn(e);
            }
            return (
              this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),
              a
            );
          }),
          pn(this, "validateSessionProps", (e, t) => {
            Object.values(e).forEach((i, r) => {
              if (null == i) {
                let { message: s } = cP(
                  "MISSING_OR_INVALID",
                  `${t} must contain an existing value for each key. Received: ${i} for key ${
                    Object.keys(e)[r]
                  }`
                );
                throw Error(s);
              }
            });
          }),
          pn(this, "getPendingAuthRequest", (e) => {
            let t = this.client.auth.requests.get(e);
            return "object" == typeof t ? t : void 0;
          }),
          pn(this, "addToRecentlyDeleted", (e, t) => {
            if (
              (this.recentlyDeletedMap.set(e, t),
              this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
            ) {
              let e = 0,
                t = this.recentlyDeletedLimit / 2;
              for (let i of this.recentlyDeletedMap.keys()) {
                if (e++ >= t) break;
                this.recentlyDeletedMap.delete(i);
              }
            }
          }),
          pn(this, "checkRecentlyDeleted", (e) => {
            let t = this.recentlyDeletedMap.get(e);
            if (t) {
              let { message: i } = cP(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${t}: ${e}`
              );
              throw Error(i);
            }
          }),
          pn(this, "isLinkModeEnabled", (t, i) => {
            var r, s, n, a, o, l, c, h, d;
            return (
              !!t &&
              i === hA &&
              (null ==
              (s = null == (r = this.client.metadata) ? void 0 : r.redirect)
                ? void 0
                : s.linkMode) === !0 &&
              (null ==
              (a = null == (n = this.client.metadata) ? void 0 : n.redirect)
                ? void 0
                : a.universal) !== void 0 &&
              (null ==
              (l = null == (o = this.client.metadata) ? void 0 : o.redirect)
                ? void 0
                : l.universal) !== "" &&
              (null == (c = t?.redirect) ? void 0 : c.universal) !== void 0 &&
              (null == (h = t?.redirect) ? void 0 : h.universal) !== "" &&
              (null == (d = t?.redirect) ? void 0 : d.linkMode) === !0 &&
              this.client.core.linkModeSupportedApps.includes(
                t.redirect.universal
              ) &&
              "u" > typeof (null == e.g ? void 0 : e.g.Linking)
            );
          }),
          pn(this, "getAppLinkIfEnabled", (e, t) => {
            var i;
            return this.isLinkModeEnabled(e, t)
              ? null == (i = e?.redirect)
                ? void 0
                : i.universal
              : void 0;
          }),
          pn(this, "handleLinkModeMessage", ({ url: e }) => {
            if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
            let t = nr(e, "topic") || "",
              i = decodeURIComponent(nr(e, "wc_ev") || ""),
              r = this.client.session.keys.includes(t);
            r && this.client.session.update(t, { transportType: hA }),
              this.client.core.dispatchEnvelope({
                topic: t,
                message: i,
                sessionExists: r,
              });
          }),
          pn(this, "registerLinkModeListeners", async () => {
            var t;
            if (
              nn() ||
              (sV() &&
                null != (t = this.client.metadata.redirect) &&
                t.linkMode)
            ) {
              let t = null == e.g ? void 0 : e.g.Linking;
              if ("u" > typeof t) {
                t.addEventListener(
                  "url",
                  this.handleLinkModeMessage,
                  this.client.name
                );
                let e = await t.getInitialURL();
                e &&
                  setTimeout(() => {
                    this.handleLinkModeMessage({ url: e });
                  }, 50);
              }
            }
          }),
          pn(this, "getTVFParams", (e, t, i) => {
            var r, s, n;
            if (!(null != (r = t.request) && r.method)) return {};
            let a = {
              correlationId: e,
              rpcMethods: [t.request.method],
              chainId: t.chainId,
            };
            try {
              (a.txHashes = this.extractTxHashesFromResult(t.request, i)),
                (a.contractAddresses = this.isValidContractData(
                  t.request.params
                )
                  ? [
                      null ==
                      (n = null == (s = t.request.params) ? void 0 : s[0])
                        ? void 0
                        : n.to,
                    ]
                  : []);
            } catch (e) {
              this.client.logger.warn(e, "Error getting TVF params");
            }
            return a;
          }),
          pn(this, "isValidContractData", (e) => {
            var t;
            if (!e) return !1;
            try {
              let i = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
              if (!i.startsWith("0x")) return !1;
              let r = i.slice(2);
              return !!/^[0-9a-fA-F]*$/.test(r) && r.length % 2 == 0;
            } catch {}
            return !1;
          }),
          pn(this, "extractTxHashesFromResult", (e, t) => {
            var i, r, s, n, a;
            try {
              if (!t) return [];
              let o = e.method,
                l = u5[o];
              if ("sui_signTransaction" === o) {
                let e, i, r, n;
                return [
                  ((s = t.transactionBytes),
                  (e = new Uint8Array(J.Buffer.from(s, "base64"))),
                  (i = Array.from("TransactionData::").map((e) =>
                    e.charCodeAt(0)
                  )),
                  (r = new Uint8Array(i.length + e.length)).set(i),
                  r.set(e, i.length),
                  (n = aT(r, { dkLen: 32 })),
                  r4.default.encode(n)),
                ];
              }
              if ("near_signTransaction" === o) return [aj(t)];
              if ("near_signTransactions" === o) return t.map((e) => aj(e));
              if (
                "xrpl_signTransactionFor" === o ||
                "xrpl_signTransaction" === o
              )
                return [null == (i = t.tx_json) ? void 0 : i.hash];
              if ("polkadot_signTransaction" === o) {
                let i, s, n, a;
                return [
                  ((r = {
                    transaction: e.params.transactionPayload,
                    signature: t.signature,
                  }),
                  (n = Uint8Array.from(J.Buffer.from(r.signature, "hex"))),
                  (a = (function ({ publicKey: e, signature: t, payload: i }) {
                    var r, s, n;
                    let a,
                      o = cz(i.method),
                      l =
                        128 |
                        parseInt(
                          (null == (r = i.version) ? void 0 : r.toString()) ||
                            "4"
                        ),
                      c =
                        ((s = i.address),
                        (a = r4.default.decode(s)[0]),
                        42 === a ? 0 : 60 === a ? 2 : 1),
                      h = "00" === i.era ? new Uint8Array([0]) : cz(i.era);
                    if (1 !== h.length && 2 !== h.length)
                      throw Error("Invalid era length");
                    let d = parseInt(i.nonce, 16),
                      u = new Uint8Array([255 & d, (d >> 8) & 255]),
                      p = new Uint8Array([
                        0,
                        ...e,
                        c,
                        ...t,
                        ...h,
                        ...u,
                        ...(function (e) {
                          if (e < BigInt(1) << BigInt(6))
                            return new Uint8Array([Number(e << BigInt(2))]);
                          if (e < BigInt(1) << BigInt(14)) {
                            let t = (e << BigInt(2)) | BigInt(1);
                            return new Uint8Array([
                              Number(t & BigInt(255)),
                              Number((t >> BigInt(8)) & BigInt(255)),
                            ]);
                          }
                          if (e < BigInt(1) << BigInt(30)) {
                            let t = (e << BigInt(2)) | BigInt(2);
                            return new Uint8Array([
                              Number(t & BigInt(255)),
                              Number((t >> BigInt(8)) & BigInt(255)),
                              Number((t >> BigInt(16)) & BigInt(255)),
                              Number((t >> BigInt(24)) & BigInt(255)),
                            ]);
                          }
                          throw Error(
                            "BigInt compact encoding not supported > 2^30"
                          );
                        })(
                          BigInt(
                            `0x${(n = i.tip).startsWith("0x") ? n.slice(2) : n}`
                          )
                        ),
                        ...o,
                      ]);
                    return new Uint8Array([
                      ...(function (e) {
                        if (e < 64) return new Uint8Array([e << 2]);
                        if (e < 16384) {
                          let t = (e << 2) | 1;
                          return new Uint8Array([255 & t, (t >> 8) & 255]);
                        }
                        if (e < 0x40000000) {
                          let t = (e << 2) | 2;
                          return new Uint8Array([
                            255 & t,
                            (t >> 8) & 255,
                            (t >> 16) & 255,
                            (t >> 24) & 255,
                          ]);
                        }
                        throw Error("Compact encoding > 2^30 not supported");
                      })(p.length + 1),
                      l,
                      ...p,
                    ]);
                  })({
                    publicKey: (function (e) {
                      let t = r4.default.decode(e);
                      if (t.length < 33)
                        throw Error("Too short to contain a public key");
                      return t.slice(1, 33);
                    })(r.transaction.address),
                    signature: n,
                    payload: r.transaction,
                  })),
                  (i = cz(J.Buffer.from(a).toString("hex"))),
                  (s = (0, sa.blake2b)(i, void 0, 32)),
                  "0x" + J.Buffer.from(s).toString("hex")),
                ];
              }
              if ("algo_signTxn" === o)
                return cx(t) ? t.map((e) => aD(e)) : [aD(t)];
              if ("cosmos_signDirect" === o) {
                let e, i, r, s, n;
                return [
                  ((e = J.Buffer.from(t.signed.bodyBytes, "base64")),
                  (i = J.Buffer.from(t.signed.authInfoBytes, "base64")),
                  (r = J.Buffer.from(t.signature.signature, "base64")),
                  (s = []).push(J.Buffer.from([10])),
                  s.push(aM(e.length)),
                  s.push(e),
                  s.push(J.Buffer.from([18])),
                  s.push(aM(i.length)),
                  s.push(i),
                  s.push(J.Buffer.from([26])),
                  s.push(aM(r.length)),
                  s.push(r),
                  (n = ab(J.Buffer.concat(s))),
                  J.Buffer.from(n).toString("hex").toUpperCase()),
                ];
              }
              if ("wallet_sendCalls" === o) {
                let e = [];
                try {
                  if ("string" == typeof t) return e.push(t), e;
                  if ("object" != typeof t) return e;
                  null != t && t.id && e.push(t.id);
                  let i =
                    null ==
                    (a = null == (n = t?.capabilities) ? void 0 : n.caip345)
                      ? void 0
                      : a.transactionHashes;
                  i && e.push(...i);
                } catch (e) {
                  console.warn("getWalletSendCallsHashes failed: ", e);
                }
                return e;
              }
              if ("string" == typeof t) return [t];
              let c = t[l.key];
              if (cx(c))
                return "solana_signAllTransactions" === o
                  ? c.map((e) =>
                      (function (e) {
                        let t = atob(e),
                          i = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; e++)
                          i[e] = t.charCodeAt(e);
                        let r = i[0];
                        if (0 === r) throw Error("No signatures found");
                        if (i.length < 1 + 64 * r)
                          throw Error(
                            "Transaction data too short for claimed signature count"
                          );
                        if (i.length < 100)
                          throw Error("Transaction too short");
                        let s = J.Buffer.from(e, "base64").slice(1, 65);
                        return r4.default.encode(s);
                      })(e)
                    )
                  : c;
              if ("string" == typeof c) return [c];
            } catch (e) {
              this.client.logger.warn(
                e,
                "Error extracting tx hashes from result"
              );
            }
            return [];
          });
      }
      async processPendingMessageEvents() {
        try {
          let e = this.client.session.keys,
            t = this.client.core.relayer.messages.getWithoutAck(e);
          for (let [e, i] of Object.entries(t))
            for (let t of i)
              try {
                await this.onProviderMessageEvent({
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                });
              } catch {
                this.client.logger.warn(
                  `Error processing pending message event for topic: ${e}, message: ${t}`
                );
              }
        } catch (e) {
          this.client.logger.warn(e, "processPendingMessageEvents failed");
        }
      }
      isInitialized() {
        if (!this.initialized) {
          let { message: e } = cP("NOT_INITIALIZED", this.name);
          throw Error(e);
        }
      }
      async confirmOnlineStateOrThrow() {
        await this.client.core.relayer.confirmOnlineStateOrThrow();
      }
      registerRelayerEvents() {
        this.client.core.relayer.on(hy, (e) => {
          this.onProviderMessageEvent(e);
        });
      }
      async onRelayMessage(e) {
        let { topic: t, message: i, attestation: r, transportType: s } = e,
          { publicKey: n } = this.client.auth.authKeys.keys.includes(u6)
            ? this.client.auth.authKeys.get(u6)
            : { responseTopic: void 0, publicKey: void 0 };
        try {
          let e = await this.client.core.crypto.decode(t, i, {
            receiverPublicKey: n,
            encoding: s === hA ? lV : lF,
          });
          (0, ho.isJsonRpcRequest)(e)
            ? (this.client.core.history.set(t, e),
              await this.onRelayEventRequest({
                topic: t,
                payload: e,
                attestation: r,
                transportType: s,
                encryptedId: lQ(i),
              }))
            : (0, ho.isJsonRpcResponse)(e)
            ? (await this.client.core.history.resolve(e),
              await this.onRelayEventResponse({
                topic: t,
                payload: e,
                transportType: s,
              }),
              this.client.core.history.delete(t, e.id))
            : await this.onRelayEventUnknownPayload({
                topic: t,
                payload: e,
                transportType: s,
              }),
            await this.client.core.relayer.messages.ack(t, i);
        } catch (e) {
          this.client.logger.error(e);
        }
      }
      registerExpirerEvents() {
        this.client.core.expirer.on(hW, async (e) => {
          let { topic: t, id: i } = s6(e.target);
          return i && this.client.pendingRequest.keys.includes(i)
            ? await this.deletePendingSessionRequest(i, cP("EXPIRED"), !0)
            : i && this.client.auth.requests.keys.includes(i)
            ? await this.deletePendingAuthRequest(i, cP("EXPIRED"), !0)
            : void (t
                ? this.client.session.keys.includes(t) &&
                  (await this.deleteSession({
                    topic: t,
                    expirerHasDeleted: !0,
                  }),
                  this.client.events.emit("session_expire", { topic: t }))
                : i &&
                  (await this.deleteProposal(i, !0),
                  this.client.events.emit("proposal_expire", { id: i })));
        });
      }
      registerPairingEvents() {
        this.client.core.pairing.events.on(hR, (e) => this.onPairingCreated(e)),
          this.client.core.pairing.events.on(hN, (e) => {
            this.addToRecentlyDeleted(e.topic, "pairing");
          });
      }
      isValidPairingTopic(e) {
        if (!cO(e, !1)) {
          let { message: t } = cP(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${e}`
          );
          throw Error(t);
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
          let { message: t } = cP(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${e}`
          );
          throw Error(t);
        }
        if (s7(this.client.core.pairing.pairings.get(e).expiry)) {
          let { message: t } = cP("EXPIRED", `pairing topic: ${e}`);
          throw Error(t);
        }
      }
      async isValidSessionTopic(e) {
        if (!cO(e, !1)) {
          let { message: t } = cP(
            "MISSING_OR_INVALID",
            `session topic should be a string: ${e}`
          );
          throw Error(t);
        }
        if (
          (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))
        ) {
          let { message: t } = cP(
            "NO_MATCHING_KEY",
            `session topic doesn't exist: ${e}`
          );
          throw Error(t);
        }
        if (s7(this.client.session.get(e).expiry)) {
          await this.deleteSession({ topic: e });
          let { message: t } = cP("EXPIRED", `session topic: ${e}`);
          throw Error(t);
        }
        if (!this.client.core.crypto.keychain.has(e)) {
          let { message: t } = cP(
            "MISSING_OR_INVALID",
            `session topic does not exist in keychain: ${e}`
          );
          throw (await this.deleteSession({ topic: e }), Error(t));
        }
      }
      async isValidSessionOrPairingTopic(e) {
        if (
          (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
        )
          await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
          this.isValidPairingTopic(e);
        else if (cO(e, !1)) {
          let { message: t } = cP(
            "NO_MATCHING_KEY",
            `session or pairing topic doesn't exist: ${e}`
          );
          throw Error(t);
        } else {
          let { message: t } = cP(
            "MISSING_OR_INVALID",
            `session or pairing topic should be a string: ${e}`
          );
          throw Error(t);
        }
      }
      async isValidProposalId(e) {
        if ("number" != typeof e) {
          let { message: t } = cP(
            "MISSING_OR_INVALID",
            `proposal id should be a number: ${e}`
          );
          throw Error(t);
        }
        if (!this.client.proposal.keys.includes(e)) {
          let { message: t } = cP(
            "NO_MATCHING_KEY",
            `proposal id doesn't exist: ${e}`
          );
          throw Error(t);
        }
        if (s7(this.client.proposal.get(e).expiryTimestamp)) {
          await this.deleteProposal(e);
          let { message: t } = cP("EXPIRED", `proposal id: ${e}`);
          throw Error(t);
        }
      }
    }
    class po extends uy {
      constructor(e, t) {
        super(e, t, "proposal", uG), (this.core = e), (this.logger = t);
      }
    }
    class pl extends uy {
      constructor(e, t) {
        super(e, t, "session", uG), (this.core = e), (this.logger = t);
      }
    }
    class pc extends uy {
      constructor(e, t) {
        super(e, t, "request", uG, (e) => e.id),
          (this.core = e),
          (this.logger = t);
      }
    }
    class ph extends uy {
      constructor(e, t) {
        super(e, t, "authKeys", u8, () => u6),
          (this.core = e),
          (this.logger = t);
      }
    }
    class pd extends uy {
      constructor(e, t) {
        super(e, t, "pairingTopics", u8), (this.core = e), (this.logger = t);
      }
    }
    class pu extends uy {
      constructor(e, t) {
        super(e, t, "requests", u8, (e) => e.id),
          (this.core = e),
          (this.logger = t);
      }
    }
    var pp = Object.defineProperty,
      pf = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? pp(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class pg {
      constructor(e, t) {
        (this.core = e),
          (this.logger = t),
          pf(this, "authKeys"),
          pf(this, "pairingTopics"),
          pf(this, "requests"),
          (this.authKeys = new ph(this.core, this.logger)),
          (this.pairingTopics = new pd(this.core, this.logger)),
          (this.requests = new pu(this.core, this.logger));
      }
      async init() {
        await this.authKeys.init(),
          await this.pairingTopics.init(),
          await this.requests.init();
      }
    }
    var py = Object.defineProperty,
      pm = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? py(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class pw extends hr {
      constructor(e) {
        super(e),
          pm(this, "protocol", "wc"),
          pm(this, "version", 2),
          pm(this, "name", uV),
          pm(this, "metadata"),
          pm(this, "core"),
          pm(this, "logger"),
          pm(this, "events", new iD.EventEmitter()),
          pm(this, "engine"),
          pm(this, "session"),
          pm(this, "proposal"),
          pm(this, "pendingRequest"),
          pm(this, "auth"),
          pm(this, "signConfig"),
          pm(this, "on", (e, t) => this.events.on(e, t)),
          pm(this, "once", (e, t) => this.events.once(e, t)),
          pm(this, "off", (e, t) => this.events.off(e, t)),
          pm(this, "removeListener", (e, t) =>
            this.events.removeListener(e, t)
          ),
          pm(this, "removeAllListeners", (e) =>
            this.events.removeAllListeners(e)
          ),
          pm(this, "connect", async (e) => {
            try {
              return await this.engine.connect(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "pair", async (e) => {
            try {
              return await this.engine.pair(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "approve", async (e) => {
            try {
              return await this.engine.approve(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "reject", async (e) => {
            try {
              return await this.engine.reject(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "update", async (e) => {
            try {
              return await this.engine.update(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "extend", async (e) => {
            try {
              return await this.engine.extend(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "request", async (e) => {
            try {
              return await this.engine.request(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "respond", async (e) => {
            try {
              return await this.engine.respond(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "ping", async (e) => {
            try {
              return await this.engine.ping(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "emit", async (e) => {
            try {
              return await this.engine.emit(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "disconnect", async (e) => {
            try {
              return await this.engine.disconnect(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "find", (e) => {
            try {
              return this.engine.find(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "getPendingSessionRequests", () => {
            try {
              return this.engine.getPendingSessionRequests();
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "authenticate", async (e, t) => {
            try {
              return await this.engine.authenticate(e, t);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "formatAuthMessage", (e) => {
            try {
              return this.engine.formatAuthMessage(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "approveSessionAuthenticate", async (e) => {
            try {
              return await this.engine.approveSessionAuthenticate(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          pm(this, "rejectSessionAuthenticate", async (e) => {
            try {
              return await this.engine.rejectSessionAuthenticate(e);
            } catch (e) {
              throw (this.logger.error(e.message), e);
            }
          }),
          (this.name = e?.name || uV),
          (this.metadata = (function (e) {
            var t, i;
            let r = sQ();
            try {
              let s, n;
              return (
                null != e &&
                  e.url &&
                  r.url &&
                  new URL(e.url).host !== new URL(r.url).host &&
                  (console.warn(
                    `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`
                  ),
                  (e.url = r.url)),
                null != (t = e?.icons) &&
                  t.length &&
                  e.icons.length > 0 &&
                  (e.icons = e.icons.filter((e) => "" !== e)),
                (s = sq(sq({}, r), e)),
                (n = {
                  url: e?.url || r.url,
                  name: e?.name || r.name,
                  description: e?.description || r.description,
                  icons:
                    null != (i = e?.icons) && i.length && e.icons.length > 0
                      ? e.icons
                      : r.icons,
                }),
                sM(s, sU(n))
              );
            } catch (t) {
              return console.warn("Error populating app metadata", t), e || r;
            }
          })(e?.metadata)),
          (this.signConfig = e?.signConfig);
        const t = cF({ logger: e?.logger || "error", name: this.name });
        (this.logger = t),
          (this.core = e?.core || new uF(e)),
          (this.session = new pl(this.core, this.logger)),
          (this.proposal = new po(this.core, this.logger)),
          (this.pendingRequest = new pc(this.core, this.logger)),
          (this.engine = new pa(this)),
          (this.auth = new pg(this.core, this.logger));
      }
      static async init(e) {
        let t = new pw(e);
        return await t.initialize(), t;
      }
      get context() {
        return sk(this.logger);
      }
      get pairing() {
        return this.core.pairing.pairings;
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.auth.init(),
            await this.engine.init(),
            this.logger.info("SignClient Initialization Success");
        } catch (e) {
          throw (
            (this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e)
          );
        }
      }
    }
    var pb = e.i(419462);
    function pv(e) {
      return null == e || ("object" != typeof e && "function" != typeof e);
    }
    function pE(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t)
      );
    }
    function p_(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    }
    let pI = "[object String]",
      pS = "[object Number]",
      pA = "[object Boolean]",
      pP = "[object Arguments]";
    function pC(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    function px(e, t, i, r = new Map(), s) {
      let n = s?.(e, t, i, r);
      if (null != n) return n;
      if (pv(e)) return e;
      if (r.has(e)) return r.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        r.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = px(e[n], n, i, r, s);
        return (
          Object.hasOwn(e, "index") && (t.index = e.index),
          Object.hasOwn(e, "input") && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return (t.lastIndex = e.lastIndex), t;
      }
      if (e instanceof Map) {
        let t = new Map();
        for (let [n, a] of (r.set(e, t), e)) t.set(n, px(a, n, i, r, s));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        for (let n of (r.set(e, t), e)) t.add(px(n, void 0, i, r, s));
        return t;
      }
      if ("u" > typeof J.Buffer && J.Buffer.isBuffer(e)) return e.subarray();
      if (pC(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        r.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = px(e[n], n, i, r, s);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return r.set(e, t), pk(t, e, i, r, s), t;
      }
      if ("u" > typeof File && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return r.set(e, t), pk(t, e, i, r, s), t;
      }
      if (e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return r.set(e, t), pk(t, e, i, r, s), t;
      }
      if (e instanceof Error) {
        let t = new e.constructor();
        return (
          r.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          pk(t, e, i, r, s),
          t
        );
      }
      if (
        "object" == typeof e &&
        (function (e) {
          switch (p_(e)) {
            case pP:
            case "[object Array]":
            case "[object ArrayBuffer]":
            case "[object DataView]":
            case pA:
            case "[object Date]":
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Map]":
            case pS:
            case "[object Object]":
            case "[object RegExp]":
            case "[object Set]":
            case pI:
            case "[object Symbol]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return !0;
            default:
              return !1;
          }
        })(e)
      ) {
        let t = Object.create(Object.getPrototypeOf(e));
        return r.set(e, t), pk(t, e, i, r, s), t;
      }
      return e;
    }
    function pk(e, t, i = e, r, s) {
      let n = [...Object.keys(t), ...pE(t)];
      for (let a = 0; a < n.length; a++) {
        let o = n[a],
          l = Object.getOwnPropertyDescriptor(e, o);
        (null == l || l.writable) && (e[o] = px(t[o], o, i, r, s));
      }
    }
    function pT(e) {
      var t;
      return (
        (t = (t, i, r, s) => {
          let n;
          if (null != n) return n;
          if ("object" == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case pS:
              case pI:
              case pA: {
                let t = new e.constructor(e?.valueOf());
                return pk(t, e), t;
              }
              case pP: {
                let t = {};
                return (
                  pk(t, e),
                  (t.length = e.length),
                  (t[Symbol.iterator] = e[Symbol.iterator]),
                  t
                );
              }
              default:
                return;
            }
        }),
        px(e, void 0, e, new Map(), t)
      );
    }
    function pO(e) {
      return (
        null !== e && "object" == typeof e && "[object Arguments]" === p_(e)
      );
    }
    function pR(e) {
      return "object" == typeof e && null !== e;
    }
    function pN() {}
    let pj = "error",
      pD = "universal_provider",
      pM = `wc@2:${pD}:`,
      pU = "https://rpc.walletconnect.org/v1/",
      pL = "generic",
      pW = `${pU}bundler`,
      pB = "call_status",
      pK = "default_chain_changed";
    var pq = Object.defineProperty,
      pH = Object.defineProperties,
      p$ = Object.getOwnPropertyDescriptors,
      pJ = Object.getOwnPropertySymbols,
      pz = Object.prototype.hasOwnProperty,
      pF = Object.prototype.propertyIsEnumerable,
      pV = (e, t, i) =>
        t in e
          ? pq(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      pG = (e, t) => {
        for (var i in t || (t = {})) pz.call(t, i) && pV(e, i, t[i]);
        if (pJ) for (var i of pJ(t)) pF.call(t, i) && pV(e, i, t[i]);
        return e;
      },
      pY = (e, t) => pH(e, p$(t));
    function pZ(e, t, i) {
      var r;
      let s = sR(e);
      return (
        (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
        `${pU}?chainId=${s.namespace}:${s.reference}&projectId=${i}`
      );
    }
    function pQ(e) {
      return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
    }
    function pX(e) {
      return Object.fromEntries(
        Object.entries(e).filter(([e, t]) => {
          var i, r;
          return (
            (null == (i = t?.chains) ? void 0 : i.length) &&
            (null == (r = t?.chains) ? void 0 : r.length) > 0
          );
        })
      );
    }
    function p0(e = {}, t = {}) {
      return (function (e, ...t) {
        return (function (e, ...t) {
          let i = t.slice(0, -1),
            r = t[t.length - 1],
            s = e;
          for (let e = 0; e < i.length; e++)
            s = (function e(t, i, r, s) {
              if ((pv(t) && (t = Object(t)), null == i || "object" != typeof i))
                return t;
              if (s.has(i))
                return (function (e) {
                  if (pv(e)) return e;
                  if (
                    Array.isArray(e) ||
                    pC(e) ||
                    e instanceof ArrayBuffer ||
                    ("u" > typeof SharedArrayBuffer &&
                      e instanceof SharedArrayBuffer)
                  )
                    return e.slice(0);
                  let t = Object.getPrototypeOf(e),
                    i = t.constructor;
                  if (e instanceof Date || e instanceof Map || e instanceof Set)
                    return new i(e);
                  if (e instanceof RegExp) {
                    let t = new i(e);
                    return (t.lastIndex = e.lastIndex), t;
                  }
                  if (e instanceof DataView) return new i(e.buffer.slice(0));
                  if (e instanceof Error) {
                    let t = new i(e.message);
                    return (
                      (t.stack = e.stack),
                      (t.name = e.name),
                      (t.cause = e.cause),
                      t
                    );
                  }
                  return "u" > typeof File && e instanceof File
                    ? new i([e], e.name, {
                        type: e.type,
                        lastModified: e.lastModified,
                      })
                    : "object" == typeof e
                    ? Object.assign(Object.create(t), e)
                    : e;
                })(s.get(i));
              if ((s.set(i, t), Array.isArray(i))) {
                i = i.slice();
                for (let e = 0; e < i.length; e++) i[e] = i[e] ?? void 0;
              }
              let n = [...Object.keys(i), ...pE(i)];
              for (let a = 0; a < n.length; a++) {
                let o = n[a],
                  l = i[o],
                  c = t[o];
                if (
                  (pO(l) && (l = { ...l }),
                  pO(c) && (c = { ...c }),
                  "u" > typeof J.Buffer && J.Buffer.isBuffer(l) && (l = pT(l)),
                  Array.isArray(l))
                )
                  if ("object" == typeof c && null != c) {
                    let e = [],
                      t = Reflect.ownKeys(c);
                    for (let i = 0; i < t.length; i++) {
                      let r = t[i];
                      e[r] = c[r];
                    }
                    c = e;
                  } else c = [];
                let h = r(c, l, o, t, i, s);
                null != h
                  ? (t[o] = h)
                  : Array.isArray(l) || (pR(c) && pR(l))
                  ? (t[o] = e(c, l, r, s))
                  : null == c &&
                    (function (e) {
                      if ("object" != typeof e || null == e) return !1;
                      if (null === Object.getPrototypeOf(e)) return !0;
                      if (
                        "[object Object]" !== Object.prototype.toString.call(e)
                      ) {
                        let t = e[Symbol.toStringTag];
                        return (
                          null != t &&
                          !!Object.getOwnPropertyDescriptor(
                            e,
                            Symbol.toStringTag
                          )?.writable &&
                          e.toString() === `[object ${t}]`
                        );
                      }
                      let t = e;
                      for (; null !== Object.getPrototypeOf(t); )
                        t = Object.getPrototypeOf(t);
                      return Object.getPrototypeOf(e) === t;
                    })(l)
                  ? (t[o] = e({}, l, r, s))
                  : null == c && pC(l)
                  ? (t[o] = pT(l))
                  : (void 0 === c || void 0 !== l) && (t[o] = l);
              }
              return t;
            })(s, i[e], r, new Map());
          return s;
        })(e, ...t, pN);
      })(pX(p1(e)), pX(p1(t)));
    }
    function p1(e) {
      var t, i, r, s, n;
      let a = {};
      if (!ck(e)) return a;
      for (let [o, l] of Object.entries(e)) {
        let e = cv(o) ? [o] : l.chains,
          c = l.methods || [],
          h = l.events || [],
          d = l.rpcMap || {},
          u = cE(o);
        (a[u] = pY(pG(pG({}, a[u]), l), {
          chains: ne(e, null == (t = a[u]) ? void 0 : t.chains),
          methods: ne(c, null == (i = a[u]) ? void 0 : i.methods),
          events: ne(h, null == (r = a[u]) ? void 0 : r.events),
        })),
          (ck(d) || ck((null == (s = a[u]) ? void 0 : s.rpcMap) || {})) &&
            (a[u].rpcMap = pG(
              pG({}, d),
              null == (n = a[u]) ? void 0 : n.rpcMap
            ));
      }
      return a;
    }
    function p2(e) {
      return e.includes(":") ? e.split(":")[2] : e;
    }
    function p5(e) {
      let t = {};
      for (let [i, r] of Object.entries(e)) {
        let e = r.methods || [],
          s = r.events || [],
          n = r.accounts || [],
          a = cv(i) ? [i] : r.chains ? r.chains : pQ(r.accounts);
        t[i] = { chains: a, methods: e, events: s, accounts: n };
      }
      return t;
    }
    function p3(e) {
      return "number" == typeof e
        ? e
        : e.includes("0x")
        ? parseInt(e, 16)
        : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
        ? e
        : Number(e);
    }
    let p8 = {},
      p6 = (e) => p8[e],
      p4 = (e, t) => {
        p8[e] = t;
      };
    var p7 = Object.defineProperty,
      p9 = Object.getOwnPropertySymbols,
      fe = Object.prototype.hasOwnProperty,
      ft = Object.prototype.propertyIsEnumerable,
      fi = (e, t, i) =>
        t in e
          ? p7(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      fr = (e, t) => {
        for (var i in t || (t = {})) fe.call(t, i) && fi(e, i, t[i]);
        if (p9) for (var i of p9(t)) ft.call(t, i) && fi(e, i, t[i]);
        return e;
      };
    let fs = "eip155",
      fn = [
        "atomic",
        "flow-control",
        "paymasterService",
        "sessionKeys",
        "auxiliaryFunds",
      ],
      fa = (e) => (e && e.startsWith("0x") ? BigInt(e).toString(10) : e),
      fo = (e) => (e && e.startsWith("0x") ? e : `0x${BigInt(e).toString(16)}`),
      fl = (e) =>
        Object.keys(e)
          .filter((e) => fn.includes(e))
          .reduce((t, i) => ((t[i] = fc(e[i])), t), {}),
      fc = (e) =>
        "string" == typeof e &&
        (function (e) {
          try {
            let t = JSON.parse(e);
            return "object" == typeof t && null !== t && !Array.isArray(t);
          } catch {
            return !1;
          }
        })(e)
          ? JSON.parse(e)
          : e;
    var fh = Object.defineProperty;
    class fd {
      constructor(e) {
        ((e, t, i) => {
          let r;
          return (r = "symbol" != typeof t ? t + "" : t) in e
            ? fh(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[r] = i);
        })(this, "storage"),
          (this.storage = e);
      }
      async getItem(e) {
        return await this.storage.getItem(e);
      }
      async setItem(e, t) {
        return await this.storage.setItem(e, t);
      }
      async removeItem(e) {
        return await this.storage.removeItem(e);
      }
      static getStorage(e) {
        return t || (t = new fd(e)), t;
      }
    }
    var fu = Object.defineProperty,
      fp = Object.defineProperties,
      ff = Object.getOwnPropertyDescriptors,
      fg = Object.getOwnPropertySymbols,
      fy = Object.prototype.hasOwnProperty,
      fm = Object.prototype.propertyIsEnumerable,
      fw = (e, t, i) =>
        t in e
          ? fu(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
    async function fb(e, t) {
      let i,
        r = sR(e.result.capabilities.caip345.caip2),
        s = e.result.capabilities.caip345.transactionHashes,
        n = await Promise.allSettled(s.map((e) => fv(r.reference, e, t))),
        a = n
          .filter((e) => "fulfilled" === e.status)
          .map((e) => e.value)
          .filter((e) => e);
      n.filter((e) => "rejected" === e.status).forEach((e) =>
        console.warn("Failed to fetch transaction receipt:", e.reason)
      );
      let o = !a.length || a.some((e) => !e),
        l = a.every((e) => e?.status === "0x1"),
        c = a.every((e) => e?.status === "0x0"),
        h = a.some((e) => e?.status === "0x0");
      return (
        o ? (i = 100) : l ? (i = 200) : c ? (i = 500) : h && (i = 600),
        {
          id: e.result.id,
          version: e.request.version,
          atomic: e.request.atomicRequired,
          chainId: e.request.chainId,
          capabilities: e.result.capabilities,
          receipts: a,
          status: i,
        }
      );
    }
    async function fv(e, t, i) {
      return await i(parseInt(e)).request(
        (0, ha.formatJsonRpcRequest)("eth_getTransactionReceipt", [t])
      );
    }
    async function fE({ sendCalls: e, storage: t }) {
      let i = await t.getItem(pB);
      await t.setItem(
        pB,
        fp(
          ((e, t) => {
            for (var i in t || (t = {})) fy.call(t, i) && fw(e, i, t[i]);
            if (fg) for (var i of fg(t)) fm.call(t, i) && fw(e, i, t[i]);
            return e;
          })({}, i),
          ff({
            [e.result.id]: {
              request: e.request,
              result: e.result,
              expiry: s4(86400),
            },
          })
        )
      );
    }
    async function f_({ resultId: e, storage: t }) {
      let i = await t.getItem(pB);
      if (i) {
        for (let r in (delete i[e], await t.setItem(pB, i), i))
          s7(i[r].expiry) && delete i[r];
        await t.setItem(pB, i);
      }
    }
    async function fI({ resultId: e, storage: t }) {
      let i = await t.getItem(pB),
        r = i?.[e];
      if (r && !s7(r.expiry)) return r;
      await f_({ resultId: e, storage: t });
    }
    var fS = Object.defineProperty,
      fA = Object.defineProperties,
      fP = Object.getOwnPropertyDescriptors,
      fC = Object.getOwnPropertySymbols,
      fx = Object.prototype.hasOwnProperty,
      fk = Object.prototype.propertyIsEnumerable,
      fT = (e, t, i) =>
        t in e
          ? fS(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      fO = (e, t) => {
        for (var i in t || (t = {})) fx.call(t, i) && fT(e, i, t[i]);
        if (fC) for (var i of fC(t)) fk.call(t, i) && fT(e, i, t[i]);
        return e;
      },
      fR = (e, t, i) => fT(e, "symbol" != typeof t ? t + "" : t, i);
    class fN {
      constructor(e) {
        fR(this, "name", "eip155"),
          fR(this, "client"),
          fR(this, "chainId"),
          fR(this, "namespace"),
          fR(this, "httpProviders"),
          fR(this, "events"),
          fR(this, "storage"),
          (this.namespace = e.namespace),
          (this.events = p6("events")),
          (this.client = p6("client")),
          (this.httpProviders = this.createHttpProviders()),
          (this.chainId = parseInt(this.getDefaultChain())),
          (this.storage = fd.getStorage(this.client.core.storage));
      }
      async request(e) {
        switch (e.request.method) {
          case "eth_requestAccounts":
          case "eth_accounts":
            return this.getAccounts();
          case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(e);
          case "eth_chainId":
            return parseInt(this.getDefaultChain());
          case "wallet_getCapabilities":
            return await this.getCapabilities(e);
          case "wallet_getCallsStatus":
            return await this.getCallStatus(e);
          case "wallet_sendCalls":
            return await this.sendCalls(e);
        }
        return this.namespace.methods.includes(e.request.method)
          ? await this.client.request(e)
          : this.getHttpProvider().request(e.request);
      }
      updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t);
        let i = this.chainId;
        (this.chainId = parseInt(e)),
          this.events.emit(pK, {
            currentCaipChainId: `${this.name}:${e}`,
            previousCaipChainId: `${this.name}:${i}`,
          });
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e) throw Error("ChainId not found");
        return e.split(":")[1];
      }
      createHttpProvider(e, t) {
        let i =
          t ||
          pZ(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        return new hn.JsonRpcProvider(
          new pb.HttpConnection(i, p6("disableProviderPing"))
        );
      }
      setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i);
      }
      createHttpProviders() {
        let e = {};
        return (
          this.namespace.chains.forEach((t) => {
            var i;
            let r = parseInt(t.includes(":") ? t.split(":")[1] : t);
            e[r] = this.createHttpProvider(
              r,
              null == (i = this.namespace.rpcMap) ? void 0 : i[t]
            );
          }),
          e
        );
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e
          ? [
              ...new Set(
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])
              ),
            ]
          : [];
      }
      getHttpProvider(e) {
        let t = e || this.chainId;
        return (
          this.httpProviders[t] ||
          ((this.httpProviders = fA(
            fO({}, this.httpProviders),
            fP({ [t]: this.createHttpProvider(t) })
          )),
          this.httpProviders[t])
        );
      }
      async handleSwitchChain(e) {
        var t, i;
        let r = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0",
          s = parseInt((r = r.startsWith("0x") ? r : `0x${r}`), 16);
        if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
          await this.client.request({
            topic: e.topic,
            request: { method: e.request.method, params: [{ chainId: r }] },
            chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
          }),
            this.setDefaultChain(`${s}`);
        else
          throw Error(
            `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
          );
        return null;
      }
      isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`);
      }
      async getCapabilities(e) {
        var t, i, r, s, n;
        let a,
          o =
            null == (i = null == (t = e.request) ? void 0 : t.params)
              ? void 0
              : i[0],
          l =
            (null == (s = null == (r = e.request) ? void 0 : r.params)
              ? void 0
              : s[1]) || [];
        if (!o)
          throw Error(
            "Missing address parameter in `wallet_getCapabilities` request"
          );
        let c = this.client.session.get(e.topic),
          h =
            (null == (n = c?.sessionProperties) ? void 0 : n.capabilities) ||
            {},
          d = `${o}${l.join(",")}`,
          u = h?.[d];
        if (u) return u;
        try {
          a = ((e, t, i) => {
            let { sessionProperties: r = {}, scopedProperties: s = {} } = e,
              n = {};
            if (!ck(s) && !ck(r)) return;
            let a = fl(r);
            for (let e of i) {
              let i = fa(e);
              if (!i) continue;
              n[fo(i)] = a;
              let r = s?.[`${fs}:${i}`];
              if (r) {
                let e = r?.[`${fs}:${i}:${t}`];
                n[fo(i)] = fr(fr({}, n[fo(i)]), fl(e || r));
              }
            }
            for (let [e, t] of Object.entries(n))
              0 === Object.keys(t).length && delete n[e];
            return Object.keys(n).length > 0 ? n : void 0;
          })(c, o, l);
        } catch (e) {
          console.warn("Failed to extract capabilities from session", e);
        }
        if (a) return a;
        let p = await this.client.request(e);
        try {
          let t, i, r, s;
          await this.client.session.update(e.topic, {
            sessionProperties:
              ((r = fO({}, c.sessionProperties || {})),
              (s = {
                capabilities:
                  ((t = fO({}, h || {})), (i = { [d]: p }), fA(t, fP(i))),
              }),
              fA(r, fP(s))),
          });
        } catch (e) {
          console.warn("Failed to update session with capabilities", e);
        }
        return p;
      }
      async getCallStatus(e) {
        var t, i, r;
        let s = this.client.session.get(e.topic),
          n = null == (t = s.sessionProperties) ? void 0 : t.bundler_name;
        if (n) {
          let t = this.getBundlerUrl(e.chainId, n);
          try {
            return await this.getUserOperationReceipt(t, e);
          } catch (e) {
            console.warn("Failed to fetch call status from bundler", e, t);
          }
        }
        let a = null == (i = s.sessionProperties) ? void 0 : i.bundler_url;
        if (a)
          try {
            return await this.getUserOperationReceipt(a, e);
          } catch (e) {
            console.warn(
              "Failed to fetch call status from custom bundler",
              e,
              a
            );
          }
        let o = await fI({
          resultId: null == (r = e.request.params) ? void 0 : r[0],
          storage: this.storage,
        });
        if (o)
          try {
            return await fb(o, this.getHttpProvider.bind(this));
          } catch (e) {
            console.warn(
              "Failed to fetch call status from stored send calls",
              e,
              o
            );
          }
        if (this.namespace.methods.includes(e.request.method))
          return await this.client.request(e);
        throw Error("Fetching call status not approved by the wallet.");
      }
      async getUserOperationReceipt(e, t) {
        var i;
        let r = new URL(e),
          s = await fetch(r, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
              (0, ha.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                null == (i = t.request.params) ? void 0 : i[0],
              ])
            ),
          });
        if (!s.ok)
          throw Error(`Failed to fetch user operation receipt - ${s.status}`);
        return await s.json();
      }
      getBundlerUrl(e, t) {
        return `${pW}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
      }
      async sendCalls(e) {
        var t, i, r;
        let s = await this.client.request(e),
          n = null == (t = e.request.params) ? void 0 : t[0],
          a = s?.id,
          o = s?.capabilities || {},
          l = null == (i = o?.caip345) ? void 0 : i.caip2,
          c = null == (r = o?.caip345) ? void 0 : r.transactionHashes;
        return (
          a &&
            l &&
            null != c &&
            c.length &&
            (await fE({
              sendCalls: { request: n, result: s },
              storage: this.storage,
            })),
          s
        );
      }
    }
    var fj = Object.defineProperty,
      fD = (e, t, i) => {
        let r;
        return (r = "symbol" != typeof t ? t + "" : t) in e
          ? fj(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      };
    class fM {
      constructor(e) {
        fD(this, "name", pL),
          fD(this, "client"),
          fD(this, "httpProviders"),
          fD(this, "events"),
          fD(this, "namespace"),
          fD(this, "chainId"),
          (this.namespace = e.namespace),
          (this.events = p6("events")),
          (this.client = p6("client")),
          (this.chainId = this.getDefaultChain()),
          (this.name = this.getNamespaceName()),
          (this.httpProviders = this.createHttpProviders());
      }
      updateNamespace(e) {
        (this.namespace.chains = [
          ...new Set((this.namespace.chains || []).concat(e.chains || [])),
        ]),
          (this.namespace.accounts = [
            ...new Set(
              (this.namespace.accounts || []).concat(e.accounts || [])
            ),
          ]),
          (this.namespace.methods = [
            ...new Set((this.namespace.methods || []).concat(e.methods || [])),
          ]),
          (this.namespace.events = [
            ...new Set((this.namespace.events || []).concat(e.events || [])),
          ]),
          (this.httpProviders = this.createHttpProviders());
      }
      requestAccounts() {
        return this.getAccounts();
      }
      request(e) {
        return this.namespace.methods.includes(e.request.method)
          ? this.client.request(e)
          : this.getHttpProvider(e.chainId).request(e.request);
      }
      setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t);
        let i = this.chainId;
        (this.chainId = e),
          this.events.emit(pK, {
            currentCaipChainId: `${this.name}:${e}`,
            previousCaipChainId: `${this.name}:${i}`,
          });
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e) throw Error("ChainId not found");
        return e.split(":")[1];
      }
      getNamespaceName() {
        let e = this.namespace.chains[0];
        if (!e) throw Error("ChainId not found");
        return sR(e).namespace;
      }
      getAccounts() {
        let e = this.namespace.accounts;
        return e
          ? [
              ...new Set(
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])
              ),
            ]
          : [];
      }
      createHttpProviders() {
        var e, t;
        let i = {};
        return (
          null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
            t.forEach((e) => {
              var t, r;
              let s = sR(e),
                n =
                  null == (r = null == (t = this.namespace) ? void 0 : t.rpcMap)
                    ? void 0
                    : r[`${s.namespace}:${s.reference}`];
              i[s.reference] = this.createHttpProvider(e, n);
            }),
          i
        );
      }
      getHttpProvider(e) {
        let t = sR(e).reference,
          i = this.httpProviders[t];
        if (typeof i > "u") throw Error(`JSON-RPC provider for ${e} not found`);
        return i;
      }
      setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i);
      }
      createHttpProvider(e, t) {
        let i = t || pZ(e, this.namespace, this.client.core.projectId);
        return new hn.JsonRpcProvider(
          new pb.default(i, p6("disableProviderPing"))
        );
      }
    }
    var fU = Object.defineProperty,
      fL = Object.defineProperties,
      fW = Object.getOwnPropertyDescriptors,
      fB = Object.getOwnPropertySymbols,
      fK = Object.prototype.hasOwnProperty,
      fq = Object.prototype.propertyIsEnumerable,
      fH = (e, t, i) =>
        t in e
          ? fU(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      f$ = (e, t) => {
        for (var i in t || (t = {})) fK.call(t, i) && fH(e, i, t[i]);
        if (fB) for (var i of fB(t)) fq.call(t, i) && fH(e, i, t[i]);
        return e;
      },
      fJ = (e, t, i) => fH(e, "symbol" != typeof t ? t + "" : t, i);
    class fz {
      constructor(e) {
        var t, i;
        fJ(this, "client"),
          fJ(this, "namespaces"),
          fJ(this, "optionalNamespaces"),
          fJ(this, "sessionProperties"),
          fJ(this, "scopedProperties"),
          fJ(this, "events", new iD.default()),
          fJ(this, "rpcProviders", {}),
          fJ(this, "session"),
          fJ(this, "providerOpts"),
          fJ(this, "logger"),
          fJ(this, "uri"),
          fJ(this, "disableProviderPing", !1),
          (this.providerOpts = e),
          (this.logger = cF({
            logger: null != (t = e.logger) ? t : pj,
            name: null != (i = this.providerOpts.name) ? i : pD,
          })),
          (this.disableProviderPing = e?.disableProviderPing || !1);
      }
      static async init(e) {
        let t = new fz(e);
        return await t.initialize(), t;
      }
      async request(e, t, i) {
        let [r, s] = this.validateChain(t);
        if (!this.session)
          throw Error("Please call connect() before request()");
        return await this.getProvider(r).request({
          request: f$({}, e),
          chainId: `${r}:${s}`,
          topic: this.session.topic,
          expiry: i,
        });
      }
      sendAsync(e, t, i, r) {
        let s = new Date().getTime();
        this.request(e, i, r)
          .then((e) => t(null, (0, ha.formatJsonRpcResult)(s, e)))
          .catch((e) => t(e, void 0));
      }
      async enable() {
        if (!this.client) throw Error("Sign Client not initialized");
        return (
          this.session ||
            (await this.connect({
              namespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
              scopedProperties: this.scopedProperties,
            })),
          await this.requestAccounts()
        );
      }
      async disconnect() {
        var e;
        if (!this.session) throw Error("Please call connect() before enable()");
        await this.client.disconnect({
          topic: null == (e = this.session) ? void 0 : e.topic,
          reason: cC("USER_DISCONNECTED"),
        }),
          await this.cleanup();
      }
      async connect(e) {
        if (!this.client) throw Error("Sign Client not initialized");
        if (
          (this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing)
        )
          return await this.pair(e.pairingTopic);
      }
      async authenticate(e, t) {
        if (!this.client) throw Error("Sign Client not initialized");
        this.setNamespaces(e), await this.cleanupPendingPairings();
        let { uri: i, response: r } = await this.client.authenticate(e, t);
        i && ((this.uri = i), this.events.emit("display_uri", i));
        let s = await r();
        if (((this.session = s.session), this.session)) {
          let e = p5(this.session.namespaces);
          (this.namespaces = p0(this.namespaces, e)),
            await this.persist("namespaces", this.namespaces),
            this.onConnect();
        }
        return s;
      }
      on(e, t) {
        this.events.on(e, t);
      }
      once(e, t) {
        this.events.once(e, t);
      }
      removeListener(e, t) {
        this.events.removeListener(e, t);
      }
      off(e, t) {
        this.events.off(e, t);
      }
      get isWalletConnect() {
        return !0;
      }
      async pair(e) {
        let { uri: t, approval: i } = await this.client.connect({
          pairingTopic: e,
          requiredNamespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
          scopedProperties: this.scopedProperties,
        });
        t && ((this.uri = t), this.events.emit("display_uri", t));
        let r = await i();
        this.session = r;
        let s = p5(r.namespaces);
        return (
          (this.namespaces = p0(this.namespaces, s)),
          await this.persist("namespaces", this.namespaces),
          await this.persist("optionalNamespaces", this.optionalNamespaces),
          this.onConnect(),
          this.session
        );
      }
      setDefaultChain(e, t) {
        try {
          if (!this.session) return;
          let [i, r] = this.validateChain(e);
          this.getProvider(i).setDefaultChain(r, t);
        } catch (e) {
          if (!/Please call connect/.test(e.message)) throw e;
        }
      }
      async cleanupPendingPairings(e = {}) {
        try {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (!cx(t)) return;
          for (let i of t)
            e.deletePairings
              ? this.client.core.expirer.set(i.topic, 0)
              : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
          this.logger.info(`Inactive pairings cleared: ${t.length}`);
        } catch (e) {
          this.logger.warn(e, "Failed to cleanup pending pairings");
        }
      }
      abortPairingAttempt() {
        this.logger.warn(
          "abortPairingAttempt is deprecated. This is now a no-op."
        );
      }
      async checkStorage() {
        (this.namespaces = (await this.getFromStore("namespaces")) || {}),
          (this.optionalNamespaces =
            (await this.getFromStore("optionalNamespaces")) || {}),
          this.session && this.createProviders();
      }
      async initialize() {
        this.logger.trace("Initialized"),
          await this.createClient(),
          await this.checkStorage(),
          this.registerEventListeners();
      }
      async createClient() {
        var e, t;
        if (
          ((this.client =
            this.providerOpts.client ||
            (await pw.init({
              core: this.providerOpts.core,
              logger: this.providerOpts.logger || pj,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
              customStoragePrefix: this.providerOpts.customStoragePrefix,
              telemetryEnabled: this.providerOpts.telemetryEnabled,
            }))),
          this.providerOpts.session)
        )
          try {
            this.session = this.client.session.get(
              this.providerOpts.session.topic
            );
          } catch (i) {
            throw (
              (this.logger.error(i, "Failed to get session"),
              Error(
                `The provided session: ${
                  null ==
                  (t = null == (e = this.providerOpts) ? void 0 : e.session)
                    ? void 0
                    : t.topic
                } doesn't exist in the Sign client`
              ))
            );
          }
        else {
          let e = this.client.session.getAll();
          this.session = e[0];
        }
        this.logger.trace("SignClient Initialized");
      }
      createProviders() {
        if (!this.client) throw Error("Sign Client not initialized");
        if (!this.session)
          throw Error(
            "Session not initialized. Please call connect() before enable()"
          );
        let e = [
          ...new Set(Object.keys(this.session.namespaces).map((e) => cE(e))),
        ];
        p4("client", this.client),
          p4("events", this.events),
          p4("disableProviderPing", this.disableProviderPing),
          e.forEach((e) => {
            if (!this.session) return;
            let t = (function (e, t) {
              let i = Object.keys(t.namespaces).filter((t) => t.includes(e));
              if (!i.length) return [];
              let r = [];
              return (
                i.forEach((e) => {
                  let i = t.namespaces[e].accounts;
                  r.push(...i);
                }),
                r
              );
            })(e, this.session);
            if (t?.length === 0) return;
            let i = pQ(t),
              r = fL(
                f$({}, p0(this.namespaces, this.optionalNamespaces)[e]),
                fW({ accounts: t, chains: i })
              );
            "eip155" === e
              ? (this.rpcProviders[e] = new fN({ namespace: r }))
              : (this.rpcProviders[e] = new fM({ namespace: r }));
          });
      }
      registerEventListeners() {
        if (typeof this.client > "u")
          throw Error("Sign Client is not initialized");
        this.client.on("session_ping", (e) => {
          var t;
          let { topic: i } = e;
          i === (null == (t = this.session) ? void 0 : t.topic) &&
            this.events.emit("session_ping", e);
        }),
          this.client.on("session_event", (e) => {
            var t;
            let { params: i, topic: r } = e;
            if (r !== (null == (t = this.session) ? void 0 : t.topic)) return;
            let { event: s } = i;
            if ("accountsChanged" === s.name) {
              let e = s.data;
              e && cx(e) && this.events.emit("accountsChanged", e.map(p2));
            } else if ("chainChanged" === s.name) {
              let e = i.chainId,
                t = i.event.data,
                r = cE(e),
                s = p3(e) !== p3(t) ? `${r}:${p3(t)}` : e;
              this.onChainChanged({ currentCaipChainId: s });
            } else this.events.emit(s.name, s.data);
            this.events.emit("session_event", e);
          }),
          this.client.on("session_update", ({ topic: e, params: t }) => {
            var i, r;
            if (e !== (null == (i = this.session) ? void 0 : i.topic)) return;
            let { namespaces: s } = t,
              n = null == (r = this.client) ? void 0 : r.session.get(e);
            (this.session = fL(f$({}, n), fW({ namespaces: s }))),
              this.onSessionUpdate(),
              this.events.emit("session_update", { topic: e, params: t });
          }),
          this.client.on("session_delete", async (e) => {
            var t;
            e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
              (await this.cleanup(),
              this.events.emit("session_delete", e),
              this.events.emit(
                "disconnect",
                fL(f$({}, cC("USER_DISCONNECTED")), fW({ data: e.topic }))
              ));
          }),
          this.on(pK, (e) => {
            this.onChainChanged(fL(f$({}, e), fW({ internal: !0 })));
          });
      }
      getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[pL];
      }
      onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((e) => {
          var t;
          this.getProvider(e).updateNamespace(
            null == (t = this.session) ? void 0 : t.namespaces[e]
          );
        });
      }
      setNamespaces(e) {
        let {
          namespaces: t = {},
          optionalNamespaces: i = {},
          sessionProperties: r,
          scopedProperties: s,
        } = e;
        (this.optionalNamespaces = p0(t, i)),
          (this.sessionProperties = r),
          (this.scopedProperties = s);
      }
      validateChain(e) {
        let [t, i] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
          return [t, i];
        if (
          t &&
          !Object.keys(this.namespaces || {})
            .map((e) => cE(e))
            .includes(t)
        )
          throw Error(
            `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
          );
        if (t && i) return [t, i];
        let r = cE(Object.keys(this.namespaces)[0]),
          s = this.rpcProviders[r].getDefaultChain();
        return [r, s];
      }
      async requestAccounts() {
        let [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts();
      }
      async onChainChanged({
        currentCaipChainId: e,
        previousCaipChainId: t,
        internal: i = !1,
      }) {
        if (!this.namespaces) return;
        let [r, s] = this.validateChain(e);
        s &&
          (this.updateNamespaceChain(r, s),
          i
            ? (this.events.emit("chainChanged", s),
              this.emitAccountsChangedOnChainChange({
                namespace: r,
                currentCaipChainId: e,
                previousCaipChainId: t,
              }))
            : this.getProvider(r).setDefaultChain(s),
          await this.persist("namespaces", this.namespaces));
      }
      emitAccountsChangedOnChainChange({
        namespace: e,
        currentCaipChainId: t,
        previousCaipChainId: i,
      }) {
        var r, s;
        try {
          if (i === t) return;
          let n =
            null == (s = null == (r = this.session) ? void 0 : r.namespaces[e])
              ? void 0
              : s.accounts;
          if (!n) return;
          let a = n.filter((e) => e.includes(`${t}:`)).map(p2);
          if (!cx(a)) return;
          this.events.emit("accountsChanged", a);
        } catch (e) {
          this.logger.warn(e, "Failed to emit accountsChanged on chain change");
        }
      }
      updateNamespaceChain(e, t) {
        if (!this.namespaces) return;
        let i = this.namespaces[e] ? e : `${e}:${t}`;
        this.namespaces[i]
          ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
          : (this.namespaces[i] = {
              chains: [],
              methods: [],
              events: [],
              defaultChain: t,
            });
      }
      onConnect() {
        this.createProviders(),
          this.events.emit("connect", { session: this.session });
      }
      async cleanup() {
        (this.namespaces = void 0),
          (this.optionalNamespaces = void 0),
          (this.sessionProperties = void 0),
          await this.deleteFromStore("namespaces"),
          await this.deleteFromStore("optionalNamespaces"),
          await this.deleteFromStore("sessionProperties"),
          (this.session = void 0),
          this.cleanupPendingPairings({ deletePairings: !0 }),
          await this.cleanupStorage();
      }
      async persist(e, t) {
        var i;
        let r = (null == (i = this.session) ? void 0 : i.topic) || "";
        await this.client.core.storage.setItem(`${pM}/${e}${r}`, t);
      }
      async getFromStore(e) {
        var t;
        let i = (null == (t = this.session) ? void 0 : t.topic) || "";
        return await this.client.core.storage.getItem(`${pM}/${e}${i}`);
      }
      async deleteFromStore(e) {
        var t;
        let i = (null == (t = this.session) ? void 0 : t.topic) || "";
        await this.client.core.storage.removeItem(`${pM}/${e}${i}`);
      }
      async cleanupStorage() {
        var e;
        try {
          if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
            return;
          for (let e of await this.client.core.storage.getKeys())
            e.startsWith(pM) && (await this.client.core.storage.removeItem(e));
        } catch (e) {
          this.logger.warn(e, "Failed to cleanup storage");
        }
      }
    }
    let fF = ["eth_sendTransaction", "personal_sign"],
      fV = [
        "eth_accounts",
        "eth_requestAccounts",
        "eth_sendRawTransaction",
        "eth_sign",
        "eth_signTransaction",
        "eth_signTypedData",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_sendTransaction",
        "personal_sign",
        "wallet_switchEthereumChain",
        "wallet_addEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode",
        "wallet_sendCalls",
        "wallet_getCapabilities",
        "wallet_getCallsStatus",
        "wallet_showCallsStatus",
      ],
      fG = ["chainChanged", "accountsChanged"],
      fY = [
        "chainChanged",
        "accountsChanged",
        "message",
        "disconnect",
        "connect",
      ],
      fZ = async () => {
        let { createAppKit: t } = await e.A(822001);
        return t;
      };
    var fQ = Object.defineProperty,
      fX = Object.defineProperties,
      f0 = Object.getOwnPropertyDescriptors,
      f1 = Object.getOwnPropertySymbols,
      f2 = Object.prototype.hasOwnProperty,
      f5 = Object.prototype.propertyIsEnumerable,
      f3 = (e, t, i) =>
        t in e
          ? fQ(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      f8 = (e, t) => {
        for (var i in t || (t = {})) f2.call(t, i) && f3(e, i, t[i]);
        if (f1) for (var i of f1(t)) f5.call(t, i) && f3(e, i, t[i]);
        return e;
      },
      f6 = (e, t, i) => f3(e, "symbol" != typeof t ? t + "" : t, i);
    function f4(e) {
      return Number(e[0].split(":")[1]);
    }
    function f7(e) {
      return `0x${e.toString(16)}`;
    }
    class f9 {
      constructor() {
        f6(this, "events", new iD.EventEmitter()),
          f6(this, "namespace", "eip155"),
          f6(this, "accounts", []),
          f6(this, "signer"),
          f6(this, "chainId", 1),
          f6(this, "modal"),
          f6(this, "rpc"),
          f6(this, "STORAGE_KEY", "wc@2:ethereum_provider:"),
          f6(this, "on", (e, t) => (this.events.on(e, t), this)),
          f6(this, "once", (e, t) => (this.events.once(e, t), this)),
          f6(
            this,
            "removeListener",
            (e, t) => (this.events.removeListener(e, t), this)
          ),
          f6(this, "off", (e, t) => (this.events.off(e, t), this)),
          f6(this, "parseAccount", (e) =>
            this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
          ),
          (this.signer = {}),
          (this.rpc = {});
      }
      static async init(e) {
        let t = new f9();
        return await t.initialize(e), t;
      }
      async request(e, t) {
        return await this.signer.request(
          e,
          this.formatChainId(this.chainId),
          t
        );
      }
      sendAsync(e, t, i) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
      }
      get connected() {
        return (
          !!this.signer.client && this.signer.client.core.relayer.connected
        );
      }
      get connecting() {
        return (
          !!this.signer.client && this.signer.client.core.relayer.connecting
        );
      }
      async enable() {
        return (
          this.session || (await this.connect()),
          await this.request({ method: "eth_requestAccounts" })
        );
      }
      async connect(e) {
        var t;
        if (!this.signer.client)
          throw Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        let { required: i, optional: r } = (function (e) {
          let {
            chains: t,
            optionalChains: i,
            methods: r,
            optionalMethods: s,
            events: n,
            optionalEvents: a,
            rpcMap: o,
          } = e;
          if (!cx(t)) throw Error("Invalid chains");
          let l = {
              chains: t,
              methods: r || fF,
              events: n || fG,
              rpcMap: f8({}, t.length ? { [f4(t)]: o[f4(t)] } : {}),
            },
            c = n?.filter((e) => !fG.includes(e)),
            h = r?.filter((e) => !fF.includes(e));
          if (
            !i &&
            !a &&
            !s &&
            !(null != c && c.length) &&
            !(null != h && h.length)
          )
            return { required: t.length ? l : void 0 };
          let d = {
            chains: [
              ...new Set(
                (c?.length && h?.length) || !i ? l.chains.concat(i || []) : i
              ),
            ],
            methods: [
              ...new Set(l.methods.concat(null != s && s.length ? s : fV)),
            ],
            events: [
              ...new Set(l.events.concat(null != a && a.length ? a : fY)),
            ],
            rpcMap: o,
          };
          return {
            required: t.length ? l : void 0,
            optional: i.length ? d : void 0,
          };
        })(this.rpc);
        try {
          let t = await new Promise(async (t, s) => {
            var n, a;
            let o, l;
            this.rpc.showQrModal &&
              (null == (n = this.modal) || n.open(),
              null == (a = this.modal) ||
                a.subscribeState((e) => {
                  e.open ||
                    this.signer.session ||
                    (this.signer.abortPairingAttempt(),
                    s(Error("Connection request reset. Please try again.")));
                }));
            let c =
              null != e && e.scopedProperties
                ? { [this.namespace]: e.scopedProperties }
                : void 0;
            await this.signer
              .connect(
                ((o = f8(
                  { namespaces: f8({}, i && { [this.namespace]: i }) },
                  r && { optionalNamespaces: { [this.namespace]: r } }
                )),
                (l = { pairingTopic: e?.pairingTopic, scopedProperties: c }),
                fX(o, f0(l)))
              )
              .then((e) => {
                t(e);
              })
              .catch((e) => {
                var t;
                null == (t = this.modal) ||
                  t.showErrorMessage("Unable to connect"),
                  s(Error(e.message));
              });
          });
          if (!t) return;
          let s = sN(t.namespaces, [this.namespace]);
          this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
            this.setAccounts(s),
            this.events.emit("connect", { chainId: f7(this.chainId) });
        } catch (e) {
          throw (this.signer.logger.error(e), e);
        } finally {
          null == (t = this.modal) || t.close();
        }
      }
      async authenticate(e, t) {
        var i;
        if (!this.signer.client)
          throw Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({ chains: e?.chains });
        try {
          let i = await new Promise(async (i, r) => {
              var s, n;
              let a, o;
              this.rpc.showQrModal &&
                (null == (s = this.modal) || s.open(),
                null == (n = this.modal) ||
                  n.subscribeState((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      r(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .authenticate(
                    ((a = f8({}, e)),
                    (o = { chains: this.rpc.chains }),
                    fX(a, f0(o))),
                    t
                  )
                  .then((e) => {
                    i(e);
                  })
                  .catch((e) => {
                    var t;
                    null == (t = this.modal) ||
                      t.showErrorMessage("Unable to connect"),
                      r(Error(e.message));
                  });
            }),
            r = i.session;
          if (r) {
            let e = sN(r.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
              this.setAccounts(e),
              this.events.emit("connect", { chainId: f7(this.chainId) });
          }
          return i;
        } catch (e) {
          throw (this.signer.logger.error(e), e);
        } finally {
          null == (i = this.modal) || i.close();
        }
      }
      async disconnect() {
        this.session && (await this.signer.disconnect()), this.reset();
      }
      get isWalletConnect() {
        return !0;
      }
      get session() {
        return this.signer.session;
      }
      registerEventListeners() {
        this.signer.on("session_event", (e) => {
          let { params: t } = e,
            { event: i } = t;
          "accountsChanged" === i.name
            ? ((this.accounts = this.parseAccounts(i.data)),
              this.events.emit("accountsChanged", this.accounts))
            : "chainChanged" === i.name
            ? this.setChainId(this.formatChainId(i.data))
            : this.events.emit(i.name, i.data),
            this.events.emit("session_event", e);
        }),
          this.signer.on("accountsChanged", (e) => {
            (this.accounts = this.parseAccounts(e)),
              this.events.emit("accountsChanged", this.accounts);
          }),
          this.signer.on("chainChanged", (e) => {
            let t = parseInt(e);
            (this.chainId = t),
              this.events.emit("chainChanged", f7(this.chainId)),
              this.persist();
          }),
          this.signer.on("session_update", (e) => {
            this.events.emit("session_update", e);
          }),
          this.signer.on("session_delete", (e) => {
            this.reset(),
              this.events.emit("session_delete", e),
              this.events.emit(
                "disconnect",
                fX(
                  f8({}, cC("USER_DISCONNECTED")),
                  f0({ data: e.topic, name: "USER_DISCONNECTED" })
                )
              );
          }),
          this.signer.on("display_uri", (e) => {
            this.events.emit("display_uri", e);
          });
      }
      switchEthereumChain(e) {
        this.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: e.toString(16) }],
        });
      }
      isCompatibleChainId(e) {
        return "string" == typeof e && e.startsWith(`${this.namespace}:`);
      }
      formatChainId(e) {
        return `${this.namespace}:${e}`;
      }
      parseChainId(e) {
        return Number(e.split(":")[1]);
      }
      setChainIds(e) {
        let t = e
          .filter((e) => this.isCompatibleChainId(e))
          .map((e) => this.parseChainId(e));
        t.length &&
          ((this.chainId = t[0]),
          this.events.emit("chainChanged", f7(this.chainId)),
          this.persist());
      }
      setChainId(e) {
        if (this.isCompatibleChainId(e)) {
          let t = this.parseChainId(e);
          (this.chainId = t), this.switchEthereumChain(t);
        }
      }
      parseAccountId(e) {
        let [t, i, r] = e.split(":");
        return { chainId: `${t}:${i}`, address: r };
      }
      setAccounts(e) {
        (this.accounts = e
          .filter(
            (e) =>
              this.parseChainId(this.parseAccountId(e).chainId) === this.chainId
          )
          .map((e) => this.parseAccountId(e).address)),
          this.events.emit("accountsChanged", this.accounts);
      }
      getRpcConfig(e) {
        var t, i;
        let r = null != (t = e?.chains) ? t : [],
          s = null != (i = e?.optionalChains) ? i : [],
          n = r.concat(s);
        if (!n.length)
          throw Error(
            "No chains specified in either `chains` or `optionalChains`"
          );
        let a = r.length ? e?.methods || fF : [],
          o = r.length ? e?.events || fG : [],
          l = e?.optionalMethods || [],
          c = e?.optionalEvents || [],
          h = e?.rpcMap || this.buildRpcMap(n, e.projectId),
          d = e?.qrModalOptions || void 0;
        return {
          chains: r?.map((e) => this.formatChainId(e)),
          optionalChains: s.map((e) => this.formatChainId(e)),
          methods: a,
          events: o,
          optionalMethods: l,
          optionalEvents: c,
          rpcMap: h,
          showQrModal: !!(null != e && e.showQrModal),
          qrModalOptions: d,
          projectId: e.projectId,
          metadata: e.metadata,
        };
      }
      buildRpcMap(e, t) {
        let i = {};
        return (
          e.forEach((e) => {
            i[e] = this.getRpcUrl(e, t);
          }),
          i
        );
      }
      async initialize(e) {
        var t;
        if (
          ((this.rpc = this.getRpcConfig(e)),
          (this.chainId = this.rpc.chains.length
            ? f4(this.rpc.chains)
            : f4(this.rpc.optionalChains)),
          (this.signer = await fz.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storage: e.storage,
            storageOptions: e.storageOptions,
            customStoragePrefix: e.customStoragePrefix,
            telemetryEnabled: e.telemetryEnabled,
            logger: e.logger,
          })),
          this.registerEventListeners(),
          await this.loadPersistedSession(),
          this.rpc.showQrModal)
        ) {
          let e;
          try {
            let i,
              r,
              s,
              n,
              a = await fZ(),
              { convertWCMToAppKitOptions: o } = await Promise.resolve().then(
                function () {
                  return gh;
                }
              ),
              l = o(
                ((i = f8({}, this.rpc.qrModalOptions)),
                (r = {
                  chains: [
                    ...new Set([
                      ...this.rpc.chains,
                      ...this.rpc.optionalChains,
                    ]),
                  ],
                  metadata: this.rpc.metadata,
                  projectId: this.rpc.projectId,
                }),
                fX(i, f0(r)))
              );
            if (!l.networks.length)
              throw Error("No networks found for WalletConnect·");
            e = a(
              ((s = f8({}, l)),
              (n = {
                universalProvider: this.signer,
                manualWCControl: !0,
                enableMobileFullScreen:
                  (null == (t = this.rpc.qrModalOptions)
                    ? void 0
                    : t.enableMobileFullScreen) === !0,
              }),
              fX(s, f0(n)))
            );
          } catch (e) {
            throw (
              (console.warn(e),
              Error("To use QR modal, please install @reown/appkit package"))
            );
          }
          if (e)
            try {
              this.modal = e;
            } catch (e) {
              throw (
                (this.signer.logger.error(e),
                Error("Could not generate WalletConnectModal Instance"))
              );
            }
        }
      }
      loadConnectOpts(e) {
        if (!e) return;
        let { chains: t, optionalChains: i, rpcMap: r } = e;
        t &&
          cx(t) &&
          ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
          t.forEach((e) => {
            this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
          })),
          i &&
            cx(i) &&
            ((this.rpc.optionalChains = []),
            (this.rpc.optionalChains = i?.map((e) => this.formatChainId(e))),
            i.forEach((e) => {
              this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e);
            }));
      }
      getRpcUrl(e, t) {
        var i;
        return (
          (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) ||
          `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${
            t || this.rpc.projectId
          }`
        );
      }
      async loadPersistedSession() {
        if (this.session)
          try {
            let e = await this.signer.client.core.storage.getItem(
                `${this.STORAGE_KEY}/chainId`
              ),
              t = this.session.namespaces[`${this.namespace}:${e}`]
                ? this.session.namespaces[`${this.namespace}:${e}`]
                : this.session.namespaces[this.namespace];
            this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
              this.setAccounts(t?.accounts);
          } catch (e) {
            this.signer.logger.error(
              "Failed to load persisted session, clearing state..."
            ),
              this.signer.logger.error(e),
              await this.disconnect().catch((e) => this.signer.logger.warn(e));
          }
      }
      reset() {
        (this.chainId = 1), (this.accounts = []);
      }
      persist() {
        this.session &&
          this.signer.client.core.storage.setItem(
            `${this.STORAGE_KEY}/chainId`,
            this.chainId
          );
      }
      parseAccounts(e) {
        return "string" == typeof e || e instanceof String
          ? [this.parseAccount(e)]
          : e.map((e) => this.parseAccount(e));
      }
    }
    var ge = Object.defineProperty,
      gt = Object.defineProperties,
      gi = Object.getOwnPropertyDescriptors,
      gr = Object.getOwnPropertySymbols,
      gs = Object.prototype.hasOwnProperty,
      gn = Object.prototype.propertyIsEnumerable,
      ga = (e, t, i) =>
        t in e
          ? ge(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i),
      go = (e, t) => {
        for (var i in t || (t = {})) gs.call(t, i) && ga(e, i, t[i]);
        if (gr) for (var i of gr(t)) gn.call(t, i) && ga(e, i, t[i]);
        return e;
      };
    let gl = (e) => {
      let [t, i] = e.split(":");
      return gc({
        id: i,
        caipNetworkId: e,
        chainNamespace: t,
        name: "",
        nativeCurrency: { name: "", symbol: "", decimals: 8 },
        rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
      });
    };
    function gc(e) {
      return go({ formatters: void 0, fees: void 0, serializers: void 0 }, e);
    }
    var gh = Object.freeze({
      __proto__: null,
      convertWCMToAppKitOptions: function (e) {
        var t, i, r, s, n, a, o;
        let l = null == (t = e.chains) ? void 0 : t.map(gl).filter(Boolean);
        if (0 === l.length) throw Error("At least one chain must be specified");
        let c = l.find((t) => {
            var i;
            return t.id === (null == (i = e.defaultChain) ? void 0 : i.id);
          }),
          h = {
            projectId: e.projectId,
            networks: l,
            themeMode: e.themeMode,
            themeVariables: (function (e) {
              if (e)
                return {
                  "--w3m-font-family": e["--wcm-font-family"],
                  "--w3m-accent": e["--wcm-accent-color"],
                  "--w3m-color-mix": e["--wcm-background-color"],
                  "--w3m-z-index": e["--wcm-z-index"]
                    ? Number(e["--wcm-z-index"])
                    : void 0,
                  "--w3m-qr-color": e["--wcm-accent-color"],
                  "--w3m-font-size-master": e["--wcm-text-medium-regular-size"],
                  "--w3m-border-radius-master":
                    e["--wcm-container-border-radius"],
                  "--w3m-color-mix-strength": 0,
                };
            })(e.themeVariables),
            chainImages: e.chainImages,
            connectorImages: e.walletImages,
            defaultNetwork: c,
            metadata: gt(
              go({}, e.metadata),
              gi({
                name:
                  (null == (i = e.metadata) ? void 0 : i.name) ||
                  "WalletConnect",
                description:
                  (null == (r = e.metadata) ? void 0 : r.description) ||
                  "Connect to WalletConnect-compatible wallets",
                url:
                  (null == (s = e.metadata) ? void 0 : s.url) ||
                  "https://walletconnect.org",
                icons: (null == (n = e.metadata) ? void 0 : n.icons) || [
                  "https://walletconnect.org/walletconnect-logo.png",
                ],
              })
            ),
            showWallets: !0,
            featuredWalletIds:
              "NONE" === e.explorerRecommendedWalletIds
                ? []
                : Array.isArray(e.explorerRecommendedWalletIds)
                ? e.explorerRecommendedWalletIds
                : [],
            excludeWalletIds:
              "ALL" === e.explorerExcludedWalletIds
                ? []
                : Array.isArray(e.explorerExcludedWalletIds)
                ? e.explorerExcludedWalletIds
                : [],
            enableEIP6963: !1,
            enableInjected: !1,
            enableCoinbase: !0,
            enableWalletConnect: !0,
            features: { email: !1, socials: !1 },
          };
        if (
          (null != (a = e.mobileWallets) && a.length) ||
          (null != (o = e.desktopWallets) && o.length)
        ) {
          let t = [
              ...(e.mobileWallets || []).map((e) => ({
                id: e.id,
                name: e.name,
                links: e.links,
              })),
              ...(e.desktopWallets || []).map((e) => ({
                id: e.id,
                name: e.name,
                links: { native: e.links.native, universal: e.links.universal },
              })),
            ],
            i = [...(h.featuredWalletIds || []), ...(h.excludeWalletIds || [])],
            r = t.filter((e) => !i.includes(e.id));
          r.length && (h.customWallets = r);
        }
        return h;
      },
      defineChain: gc,
    });
    e.s(
      [
        "EthereumProvider",
        () => f9,
        "OPTIONAL_EVENTS",
        () => fY,
        "OPTIONAL_METHODS",
        () => fV,
      ],
      666900
    );
  },
  260446,
  (e) => {
    "use strict";
    let t, i, r, s;
    e.i(979936);
    var n = e.i(143930),
      a = e.i(561920),
      o = e.i(619251),
      l = e.i(948053),
      c = e.i(110460),
      h = e.i(623253),
      d = e.i(590479),
      u = e.i(719097),
      p = e.i(775581),
      f = e.i(644227),
      g = e.i(180839),
      y = e.i(666900),
      m = e.i(648321),
      w = e.i(415912),
      b = e.i(914717),
      v = e.i(294444),
      E = e.i(39889),
      _ = e.i(718426);
    e.i(841709);
    var I = e.i(946165);
    e.i(27888);
    var S = e.i(410539);
    class A {
      static parse(e) {
        try {
          return new A(e);
        } catch (e) {
          return null;
        }
      }
      static throwIfNotWellFormedJwt(e) {
        return n.decodeJwt(e), e;
      }
      get subject() {
        return this._decoded.sub;
      }
      get expiration() {
        return this._decoded.exp;
      }
      get issuer() {
        return this._decoded.iss;
      }
      get audience() {
        return this._decoded.aud;
      }
      isExpired(e = 0) {
        return Date.now() >= 1e3 * (this.expiration - e);
      }
      constructor(e) {
        (this.value = e), (this._decoded = n.decodeJwt(e));
      }
    }
    class P extends A {
      static parse(e) {
        try {
          return new P(e);
        } catch (e) {
          return null;
        }
      }
      get appId() {
        return this._decoded.aid ? this._decoded.aid : this.audience;
      }
    }
    let C = ({ style: e, ...t }) =>
        (0, u.jsxs)("svg", {
          viewBox: "0 0 1024 1024",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: { height: "28px", width: "28px", ...e },
          ...t,
          children: [
            (0, u.jsx)("rect", {
              width: "1024",
              height: "1024",
              fill: "#0052FF",
              rx: 100,
              ry: 100,
            }),
            (0, u.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z",
              fill: "white",
            }),
          ],
        }),
      x =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHN0eWxlPSdoZWlnaHQ6MjhweDt3aWR0aDoyOHB4Jz48cmVjdCB3aWR0aD0nMTAyNCcgaGVpZ2h0PScxMDI0JyBmaWxsPScjMDA1MkZGJyByeD0nMTAwJyByeT0nMTAwJz48L3JlY3Q+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNTIgNTEyQzE1MiA3MTAuODIzIDMxMy4xNzcgODcyIDUxMiA4NzJDNzEwLjgyMyA4NzIgODcyIDcxMC44MjMgODcyIDUxMkM4NzIgMzEzLjE3NyA3MTAuODIzIDE1MiA1MTIgMTUyQzMxMy4xNzcgMTUyIDE1MiAzMTMuMTc3IDE1MiA1MTJaTTQyMCAzOTZDNDA2Ljc0NSAzOTYgMzk2IDQwNi43NDUgMzk2IDQyMFY2MDRDMzk2IDYxNy4yNTUgNDA2Ljc0NSA2MjggNDIwIDYyOEg2MDRDNjE3LjI1NSA2MjggNjI4IDYxNy4yNTUgNjI4IDYwNFY0MjBDNjI4IDQwNi43NDUgNjE3LjI1NSAzOTYgNjA0IDM5Nkg0MjBaJyBmaWxsPSd3aGl0ZSc+PC9wYXRoPjwvc3ZnPg==",
      k =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAALZJREFUaEPtmjEOhDAMBNc/O14GvOzys3CAKK6eAlmaVGl2Zc+kTOU685vkc9/bnD2prZK5/TZY24z9P+g4F5hNh7/GdoG37WlAA5CATwgCxHENYISwQAMQII5rACOEBRqAAHFcAxghLNAABIjjGsAIYYEGIEAc1wBGCAs0AAHiuAYwQligAQgQxzWAEcICDUCAOK4BjBAWaAACxHENYISwQAMQII6fBjr+VHkW3+u+tfyxMpJaDgYzYxb/ALZVAAAAAElFTkSuQmCC";
    class T extends c.E {
      async initialize() {
        await this.importPromise,
          await this.syncAccounts(),
          (this.initialized = !0),
          this.emit("initialized");
      }
      async connect(e) {
        return (
          e.showPrompt && (await this.promptConnection()),
          (await this.isConnected()) ? this.getConnectedWallet() : null
        );
      }
      disconnect() {
        this.proxyProvider.walletProvider.disconnect(), this.onDisconnect();
      }
      get walletBranding() {
        return { name: this.displayName, icon: k, id: "com.coinbase.wallet" };
      }
      async promptConnection() {
        h.c.debug("Prompting connection via Base Account", {
          wallet: this.walletClientType,
        });
        try {
          await this.importPromise,
            h.c.rpcRequest("eth_requestAccounts", this.walletClientType);
          let e = await this.proxyProvider.request({
            method: "eth_requestAccounts",
          });
          if (
            (h.c.rpcResponse("eth_requestAccounts", this.walletClientType),
            !e || 0 === e.length || !e[0])
          )
            throw new d.g("Unable to retrieve accounts");
          (this.connected = !0), await this.syncAccounts([e[0]]);
        } catch (e) {
          throw (
            (h.c.connectionFailed(this.walletClientType, e, {
              method: "base_account",
            }),
            (0, h.j)(e))
          );
        }
      }
      constructor(i, r, s, n, a) {
        super("base_account", i, r, s),
          (this.connectorType = "base_account"),
          (this.walletClientType = "base_account"),
          (this.displayName = "Base"),
          (this.setBaseAccountSdk = a),
          (this.proxyProvider = new c.P(void 0, this.rpcTimeoutDuration)),
          this.subscribeListeners(),
          (this.baseAccountConfig = {
            ...n,
            appChainIds: [r.id].concat(i.map((e) => e.id)),
          }),
          t
            ? (this.proxyProvider.setWalletProvider(t.getProvider()),
              this.setBaseAccountSdk(t))
            : (this.importPromise = e
                .A(954774)
                .then(({ createBaseAccountSDK: e }) => {
                  (t = e(this.baseAccountConfig)),
                    this.proxyProvider.setWalletProvider(t.getProvider()),
                    this.setBaseAccountSdk(t);
                })
                .catch(console.error));
      }
    }
    let O = [1, 0xaa36a7, 137, 10, 8453, 84532, 42161, 7777777, 43114, 56];
    class R extends c.E {
      async initialize() {
        await this.syncAccounts(),
          (this.initialized = !0),
          this.emit("initialized");
      }
      async connect(e) {
        return (
          e.showPrompt && (await this.promptConnection()),
          (await this.isConnected()) ? this.getConnectedWallet() : null
        );
      }
      disconnect() {
        this.proxyProvider.walletProvider.disconnect(), this.onDisconnect();
      }
      get walletBranding() {
        return { name: this.displayName, icon: x, id: "com.coinbase.wallet" };
      }
      async promptConnection() {
        h.c.debug("Prompting connection via Coinbase Wallet", {
          wallet: this.walletClientType,
        });
        try {
          h.c.rpcRequest("eth_requestAccounts", this.walletClientType);
          let e = await this.proxyProvider.request({
            method: "eth_requestAccounts",
          });
          if (
            (h.c.rpcResponse("eth_requestAccounts", this.walletClientType),
            !e || 0 === e.length || !e[0])
          )
            throw new d.g("Unable to retrieve accounts");
          (this.connected = !0), await this.syncAccounts([e[0]]);
        } catch (e) {
          throw (
            (h.c.connectionFailed(this.walletClientType, e, {
              method: "coinbase_wallet",
            }),
            (0, h.j)(e))
          );
        }
      }
      updateConnectionPreference(e) {
        (this.coinbaseWalletConfig = {
          ...this.coinbaseWalletConfig,
          preference: { ...this.coinbaseWalletConfig.preference, options: e },
        }),
          (this.walletClientType =
            "smartWalletOnly" === e
              ? "coinbase_smart_wallet"
              : "coinbase_wallet"),
          (i = (0, p.createCoinbaseWalletSDK)({
            ...this.coinbaseWalletConfig,
          })),
          this.proxyProvider.setWalletProvider(i.getProvider());
      }
      constructor(e, t, r, s) {
        if (
          (super("coinbase_wallet", e, t, r),
          (this.connectorType = "coinbase_wallet"),
          (this.displayName = "Coinbase Wallet"),
          (this.proxyProvider = new c.P(void 0, this.rpcTimeoutDuration)),
          this.subscribeListeners(),
          (this.coinbaseWalletConfig = {
            ...s,
            appChainIds: [t.id].concat(e.map((e) => e.id)),
          }),
          (this.walletClientType =
            "smartWalletOnly" === this.coinbaseWalletConfig.preference?.options
              ? "coinbase_smart_wallet"
              : "coinbase_wallet"),
          "coinbase_smart_wallet" === this.walletClientType &&
            (this.displayName = "Coinbase Smart Wallet"),
          !i)
        ) {
          let e =
            "eoaOnly" !== this.coinbaseWalletConfig.preference?.options
              ? (this.coinbaseWalletConfig.appChainIds ?? []).filter(
                  (e) => !O.includes(e)
                )
              : [];
          e.length > 0 &&
            !e.every((e) => f.DEFAULT_SUPPORTED_CHAIN_IDS.has(e)) &&
            console.info(
              `The configured chains are not supported by Coinbase Smart Wallet: ${e.join(
                ", "
              )}`
            ),
            (i = (0, p.createCoinbaseWalletSDK)(this.coinbaseWalletConfig));
        }
        this.proxyProvider.setWalletProvider(i.getProvider());
      }
    }
    let N = ({ style: e, ...t } = {}) =>
        (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.5,
          viewBox: "0 0 24 24",
          style: { ...e },
          ...t,
          children: (0, u.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
          }),
        }),
      j = ({ style: e, ...t } = {}) =>
        (0, u.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "108",
          height: "108",
          viewBox: "0 0 108 108",
          fill: "none",
          style: { height: "28px", width: "28px", ...e },
          ...t,
          children: [
            (0, u.jsx)("rect", {
              width: "108",
              height: "108",
              rx: "23",
              fill: "#AB9FF2",
            }),
            (0, u.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M46.5267 69.9229C42.0054 76.8509 34.4292 85.6182 24.348 85.6182C19.5824 85.6182 15 83.6563 15 75.1342C15 53.4305 44.6326 19.8327 72.1268 19.8327C87.768 19.8327 94 30.6846 94 43.0079C94 58.8258 83.7355 76.9122 73.5321 76.9122C70.2939 76.9122 68.7053 75.1342 68.7053 72.314C68.7053 71.5783 68.8275 70.7812 69.0719 69.9229C65.5893 75.8699 58.8685 81.3878 52.5754 81.3878C47.993 81.3878 45.6713 78.5063 45.6713 74.4598C45.6713 72.9884 45.9768 71.4556 46.5267 69.9229ZM83.6761 42.5794C83.6761 46.1704 81.5575 47.9658 79.1875 47.9658C76.7816 47.9658 74.6989 46.1704 74.6989 42.5794C74.6989 38.9885 76.7816 37.1931 79.1875 37.1931C81.5575 37.1931 83.6761 38.9885 83.6761 42.5794ZM70.2103 42.5795C70.2103 46.1704 68.0916 47.9658 65.7216 47.9658C63.3157 47.9658 61.233 46.1704 61.233 42.5795C61.233 38.9885 63.3157 37.1931 65.7216 37.1931C68.0916 37.1931 70.2103 38.9885 70.2103 42.5795Z",
              fill: "#FFFDF8",
            }),
          ],
        });
    function D(e, t) {
      if (!Object.prototype.hasOwnProperty.call(e, t))
        throw TypeError("attempted to use private field on non-instance");
      return e;
    }
    var M = 0;
    class U extends c.E {
      async initialize() {
        h.c.debug("Initializing injected connector (EIP-6963)", {
          wallet: this.walletClientType,
        }),
          await this.syncAccounts(),
          (this.initialized = !0),
          this.emit("initialized");
      }
      async connect(e) {
        if (
          (h.c.connectionStart(this.walletClientType, "injected", {
            showPrompt: e.showPrompt,
          }),
          e.showPrompt && (await this.promptConnection()),
          !(await this.isConnected()))
        )
          return (
            h.c.debug("Not connected after prompt", {
              wallet: this.walletClientType,
            }),
            null
          );
        let t = await this.getConnectedWallet();
        return t && h.c.connectionSuccess(this.walletClientType), t;
      }
      get walletBranding() {
        return {
          name: this.providerDetail.info.name,
          icon: this.providerDetail.info.icon,
          id: this.providerDetail.info.rdns,
        };
      }
      disconnect() {
        console.warn(
          `Programmatic disconnect with ${this.providerDetail.info.name} is not yet supported.`
        );
      }
      async promptConnection() {
        h.c.debug("Prompting connection via eth_requestAccounts", {
          wallet: this.walletClientType,
        });
        try {
          h.c.rpcRequest("eth_requestAccounts", this.walletClientType);
          let e = await this.proxyProvider.request({
            method: "eth_requestAccounts",
          });
          if (
            (h.c.rpcResponse("eth_requestAccounts", this.walletClientType),
            !e || 0 === e.length || !e[0])
          )
            throw new d.g("Unable to retrieve accounts");
          await this.syncAccounts([e[0]]);
        } catch (e) {
          throw (
            (h.c.connectionFailed(this.walletClientType, e, {
              method: "injected",
            }),
            (0, h.j)(e))
          );
        }
      }
      constructor(e, t, i, r, s) {
        super(s || "unknown", e, t, i),
          (this.connectorType = "injected"),
          (this.proxyProvider = new c.P(void 0, this.rpcTimeoutDuration)),
          this.subscribeListeners(),
          (this.providerDetail = r);
        let n = r.provider;
        this.proxyProvider.setWalletProvider(n);
      }
    }
    var L = "__private_" + M++ + "__walletBranding";
    class W extends c.E {
      async initialize() {
        h.c.debug("Initializing legacy injected connector", {
          wallet: this.walletClientType,
        }),
          await this.syncAccounts(),
          (this.initialized = !0),
          this.emit("initialized");
      }
      async connect(e) {
        if (
          (h.c.connectionStart(this.walletClientType, "injected (legacy)", {
            showPrompt: e.showPrompt,
          }),
          e.showPrompt && (await this.promptConnection()),
          !(await this.isConnected()))
        )
          return (
            h.c.debug("Not connected after prompt", {
              wallet: this.walletClientType,
            }),
            null
          );
        let t = await this.getConnectedWallet();
        return t && h.c.connectionSuccess(this.walletClientType), t;
      }
      get walletBranding() {
        return (
          D(this, L)[L] ?? {
            name: "Browser Extension",
            icon: N,
            id: "extension",
          }
        );
      }
      disconnect() {
        h.c.debug("Disconnect requested (not supported for legacy injected)", {
          wallet: this.walletClientType,
        });
      }
      async promptConnection() {
        h.c.debug("Prompting connection via eth_requestAccounts (legacy)", {
          wallet: this.walletClientType,
        });
        try {
          h.c.rpcRequest("eth_requestAccounts", this.walletClientType);
          let e = await this.proxyProvider.request({
            method: "eth_requestAccounts",
          });
          if (
            (h.c.rpcResponse("eth_requestAccounts", this.walletClientType),
            !e || 0 === e.length || !e[0])
          )
            throw new d.g("Unable to retrieve accounts");
          await this.syncAccounts([e[0]]);
        } catch (e) {
          throw (
            (h.c.connectionFailed(this.walletClientType, e, {
              method: "injected (legacy)",
            }),
            (0, h.j)(e))
          );
        }
      }
      constructor(e, t, i, r, s) {
        super(s ?? "unknown", e, t, i),
          Object.defineProperty(this, L, { writable: !0, value: void 0 }),
          (this.connectorType = "injected"),
          (this.proxyProvider = new c.P(void 0, this.rpcTimeoutDuration)),
          this.subscribeListeners(),
          this.proxyProvider.setWalletProvider(r),
          "metamask" === s
            ? (D(this, L)[L] = {
                name: "MetaMask",
                icon: c.M,
                id: "io.metamask",
              })
            : "phantom" === s &&
              (D(this, L)[L] = { name: "Phantom", icon: j, id: "phantom" });
      }
    }
    class B extends U {
      disconnect() {
        console.warn("MetaMask does not support programmatic disconnect.");
      }
      async promptConnection() {
        h.c.debug("Prompting connection via MetaMask", {
          wallet: this.walletClientType,
        });
        try {
          g.isMobile ||
            (h.c.rpcRequest("wallet_requestPermissions", this.walletClientType),
            await this.proxyProvider.request({
              method: "wallet_requestPermissions",
              params: [{ eth_accounts: {} }],
            }),
            h.c.rpcResponse(
              "wallet_requestPermissions",
              this.walletClientType
            )),
            h.c.rpcRequest("eth_requestAccounts", this.walletClientType);
          let e = await this.proxyProvider.request({
            method: "eth_requestAccounts",
          });
          if (
            (h.c.rpcResponse("eth_requestAccounts", this.walletClientType),
            !e || 0 === e.length || !e[0])
          )
            throw new d.g("Unable to retrieve accounts");
          await this.syncAccounts([e[0]]);
        } catch (e) {
          throw (
            (h.c.connectionFailed(this.walletClientType, e, {
              method: "metamask",
            }),
            (0, h.j)(e))
          );
        }
      }
    }
    class K extends c.E {
      async initialize() {
        h.c.debug("Initializing WalletConnect V2 connector", {
          wallet: this.walletClientType,
        });
        let e = await this.createProvider();
        if (
          ((this.provider = e),
          this.proxyProvider.setWalletProvider(e),
          this.subscribeListeners(),
          e.session)
        ) {
          let e = this.walletProvider?.session?.peer.metadata;
          h.c.debug("Restoring existing WalletConnect session", {
            peerName: e?.name,
            accountsCount: this.walletProvider?.accounts?.length,
          }),
            this.walletProvider?.session?.peer.metadata.url &&
              ((this.walletEntry = (0, c.e)(
                this.walletProvider?.session?.peer.metadata.url
              )),
              (this.walletClientType = this.walletEntry?.slug || "unknown")),
            (this.connected = !0),
            await this.syncAccounts();
        }
        (this.initialized = !0), this.emit("initialized");
      }
      async connect(e) {
        h.c.connectionStart(this.walletClientType, "wallet_connect_v2", {
          showPrompt: e.showPrompt,
        }),
          e.showPrompt && (await this.promptConnection());
        let t = await this.getConnectedWallet();
        return t && h.c.connectionSuccess(this.walletClientType), t;
      }
      async isConnected() {
        return !!this.walletProvider?.connected;
      }
      get walletBranding() {
        let e = this.walletProvider?.session?.peer.metadata.icons?.[0];
        return {
          name:
            (0, h.k)(this.walletProvider?.session?.peer.metadata.name || "") ||
            "WalletConnect",
          icon: "string" == typeof e ? e : h.h,
          id:
            this.walletProvider?.session?.peer.metadata.name.toLowerCase() ||
            "wallet_connect_v2",
        };
      }
      async resetConnection(e) {
        let t = this.walletClientType;
        h.c.debug("Resetting WalletConnect connection for new wallet", {
          previousWallet: t,
          newWallet: e,
        }),
          this.walletProvider &&
            this.walletProvider.connected &&
            (await this.walletProvider.disconnect(),
            (this.walletProvider.signer.session = void 0),
            (this.walletClientType = e),
            (this.redirectUri = void 0),
            (this.fallbackUniversalRedirectUri = void 0),
            (0, m.e)(),
            this.onDisconnect());
      }
      async promptConnection() {
        if (this.provider)
          return (
            h.c.debug("Prompting WalletConnect connection", {
              wallet: this.walletClientType,
            }),
            new Promise((e, t) => {
              (async () => {
                h.c.debug("Enabling WalletConnect provider", {
                  wallet: this.walletClientType,
                  timeoutMs: this.proxyProvider.rpcTimeoutDuration,
                });
                let t = "",
                  i = await Promise.race([
                    this.walletProvider?.enable(),
                    this.proxyProvider.walletTimeout().then(() => {}),
                  ]);
                if (
                  (i?.length &&
                    ((t = i[0]),
                    h.c.debug("WalletConnect accounts received", {
                      address: t,
                      accountsCount: i.length,
                    })),
                  !t || "" === t)
                )
                  throw new d.g("Unable to retrieve address");
                this.walletProvider?.session?.peer.metadata.url &&
                  ((this.walletEntry = (0, c.e)(
                    this.walletProvider?.session?.peer.metadata.url
                  )),
                  (this.walletClientType = this.walletEntry?.slug || "unknown"),
                  h.c.debug("Identified wallet from session", {
                    wallet: this.walletClientType,
                  }),
                  (this.proxyProvider.rpcTimeoutDuration = (0, c.g)(
                    this.rpcConfig,
                    this.walletClientType
                  ))),
                  (this.connected = !0),
                  await this.syncAccounts(i),
                  e();
              })().catch((e) => {
                h.c.connectionFailed(this.walletClientType, e, {
                  method: "wallet_connect_v2",
                }),
                  t(
                    e ? (0, h.j)(e) : new d.g("Unknown error during connection")
                  );
              });
            })
          );
        h.c.warn("WalletConnect provider not initialized");
      }
      disconnect() {
        this.walletProvider
          ?.disconnect()
          .then(() => this.onDisconnect())
          .catch(() =>
            console.warn("Unable to disconnect WalletConnect provider")
          );
      }
      get walletProvider() {
        return this.proxyProvider.walletProvider;
      }
      setWalletProvider(e) {
        this.proxyProvider.setWalletProvider(e);
      }
      async createProvider() {
        h.c.debug("Creating WalletConnect EthereumProvider", {
          chainsCount: this.chains.length,
          defaultChainId: this.defaultChain.id,
        });
        let e = {};
        for (let t of this.chains) {
          let i = (0, h.m)(t.id, this.chains, this.rpcConfig, this.privyAppId);
          i && (e[t.id] = i);
        }
        let t = this.shouldEnforceDefaultChainOnConnect
            ? [this.defaultChain.id]
            : [],
          i = this.chains.map((e) => e.id);
        h.c.debug("Initializing WalletConnect EthereumProvider", {
          requiredChains: t.join(", ") || "none",
          optionalChainsCount: i.length,
        });
        let r = await y.EthereumProvider.init({
          projectId: this.walletConnectCloudProjectId,
          chains: t,
          optionalChains: i,
          optionalEvents: y.OPTIONAL_EVENTS,
          optionalMethods: y.OPTIONAL_METHODS,
          rpcMap: e,
          showQrModal: !1,
          metadata: {
            description: this.privyAppName,
            name: this.privyAppName,
            url: window.location.origin,
            icons: [],
          },
        });
        return (
          r.on("display_uri", (e) => {
            if (
              (h.c.debug("WalletConnect URI generated", {
                wallet: this.walletClientType,
                isMobile: g.isMobile,
                hasWalletEntry: !!this.walletEntry,
              }),
              h.c.debug("Aborting WalletConnect pairing attempt"),
              r.signer.abortPairingAttempt(),
              (0, m.r)(),
              !this.showPrivyQrModal)
            )
              throw new d.g(
                "WalletConnect modal not available - Privy handles wallet connections through its own UI"
              );
            if (g.isMobile && this.walletEntry) {
              let { redirect: t, href: i } = (0, m.b)(e, this.walletEntry),
                r = t.startsWith("http");
              h.c.debug("Opening mobile wallet via deep link", {
                wallet: this.walletEntry.name,
                redirectType: r ? "universal" : "native",
              }),
                (0, m.o)(t, "_self"),
                (0, m.s)({
                  href: i,
                  name:
                    this.walletEntry.metadata?.shortName ||
                    this.walletEntry.name,
                });
              let s = (0, m.f)(e, this.walletEntry);
              return (
                (this.redirectUri = t),
                (this.fallbackUniversalRedirectUri = s?.redirect),
                this.showPrivyQrModal({ native: t, universal: t })
              );
            }
            if (
              (h.c.debug("Displaying WalletConnect QR code", {
                wallet: this.walletEntry?.name || "generic",
              }),
              (this.redirectUri = void 0),
              this.walletEntry)
            ) {
              let t = (0, m.f)(e, this.walletEntry);
              this.fallbackUniversalRedirectUri = t?.redirect;
            }
            this.showPrivyQrModal({ native: e, universal: void 0 });
          }),
          r.on("connect", () => {
            let e = r.session?.peer.metadata;
            h.c.debug("WalletConnect session established", {
              peerName: e?.name,
              peerIcon: e?.icons?.[0] ? "present" : "none",
            }),
              r.session?.peer.metadata.url &&
                ((this.walletEntry = (0, c.e)(r.session?.peer.metadata.url)),
                (this.walletClientType = this.walletEntry?.slug || "unknown"));
          }),
          r
        );
      }
      async enableProvider() {
        return this.walletProvider?.connected
          ? Promise.resolve(this.walletProvider.accounts)
          : await this.walletProvider?.enable();
      }
      setWalletEntry(e, t) {
        (this.walletEntry = e), (this.showPrivyQrModal = t);
      }
      constructor({
        walletConnectCloudProjectId: e,
        rpcConfig: t,
        chains: i,
        defaultChain: r,
        shouldEnforceDefaultChainOnConnect: s,
        privyAppId: n,
        privyAppName: a,
        walletClientType: o,
      }) {
        super(o || "unknown", i, r, t),
          (this.connectorType = "wallet_connect_v2"),
          (this.privyAppId = n),
          (this.privyAppName = a),
          (this.walletConnectCloudProjectId = e),
          (this.rpcConfig = t),
          (this.shouldEnforceDefaultChainOnConnect = s),
          (this.proxyProvider = new c.P(void 0, this.rpcTimeoutDuration)),
          o && ((this.walletEntry = (0, c.f)(o)), (this.walletClientType = o));
      }
    }
    class q extends l.default {
      get wallets() {
        let e = new Set();
        return this.walletConnectors
          .flatMap((e) => e.wallets)
          .sort((e, t) =>
            e.connectedAt && t.connectedAt ? t.connectedAt - e.connectedAt : 0
          )
          .filter((t) => {
            let i = `${t.address}${t.walletClientType}${t.connectorType}${t.meta.id}`;
            return !e.has(i) && (e.add(i), !0);
          });
      }
      async initialize(e) {
        if (
          (h.c.info("Starting connector initialization", { reInit: e ?? !1 }),
          this.initialized && !e)
        )
          return;
        if (
          (e && this.removeAllConnectors(),
          this.externalWalletConfig.disableAllExternalWallets)
        )
          return void h.c.info(
            "All external wallets disabled, skipping initialization"
          );
        let t = (0, h.n)({
          store: this.store,
          walletList: this.walletList,
          externalWalletConfig: this.externalWalletConfig,
          walletChainType: this.walletChainType,
        }).then((e) => {
          h.c.info("Detected injected providers", {
            count: e.length,
            wallets: e.map((e) => e.type).join(", "),
          }),
            e.forEach(
              ({
                type: e,
                eip6963InjectedProvider: t,
                legacyInjectedProvider: i,
              }) => {
                this.createEthereumWalletConnector({
                  connectorType: "injected",
                  walletClientType: e,
                  providers: {
                    eip6963InjectedProvider: t,
                    legacyInjectedProvider: i,
                  },
                });
              }
            );
        });
        for (let e of (this.walletList.includes("coinbase_wallet") &&
          this.createEthereumWalletConnector({
            connectorType: "coinbase_wallet",
            walletClientType: "coinbase_wallet",
          }),
        this.walletList.includes("base_account") &&
          this.createEthereumWalletConnector({
            connectorType: "base_account",
            walletClientType: "base_account",
          }),
        Object.values(c.m)))
          !e.isInstalled &&
            this.walletList.includes(e.client) &&
            (["ethereum-only", "ethereum-and-solana"].includes(
              this.walletChainType
            ) &&
              e.chainTypes.includes("ethereum") &&
              this.createEthereumWalletConnector({
                connectorType: "null",
                walletClientType: e.client,
                walletConfig: e,
              }),
            ["ethereum-and-solana", "solana-only"].includes(
              this.walletChainType
            ) &&
              e.chainTypes.includes("solana") &&
              this.addSolanaWalletConnector(
                new c.S({ id: e.client, name: e.name })
              ));
        let i =
            this.walletList.includes("wallet_connect_qr_solana") ||
            ((0, c.s)(this.walletList) &&
              "ethereum-only" !== this.walletChainType),
          r =
            this.externalWalletConfig.walletConnect.enabled &&
            (this.walletList.includes("wallet_connect_qr") ||
              (0, c.s)(this.walletList)) &&
            "solana-only" !== this.walletChainType,
          s = this.externalWalletConfig.solana.connectors?.get() || [],
          n = async (e) => {
            await e.initializeProvider({
              walletConnectCloudProjectId: this.walletConnectCloudProjectId,
              privyAppName: this.privyAppName,
            });
            let t = await e.hideSolanaSessionsFromSignClient();
            try {
              this.ethereumWalletConnectInitPromise ||
                (this.ethereumWalletConnectInitPromise =
                  this.initEthereumWalletConnect()),
                await this.ethereumWalletConnectInitPromise;
            } finally {
              await e.unhideSolanaSessionsInSignClient(t);
            }
            await e.restoreSession();
          },
          a = async (e) => {
            let t = e.find(
                (e) => "walletconnect_solana" === e.walletBranding?.id
              ),
              s = t?.wallet ?? null;
            !r || (i && s)
              ? i && !r && s
                ? await s.initialize({
                    walletConnectCloudProjectId:
                      this.walletConnectCloudProjectId,
                    privyAppName: this.privyAppName,
                  })
                : i && r && s && (await n(s))
              : this.ethereumWalletConnectInitPromise ||
                (this.ethereumWalletConnectInitPromise =
                  this.initEthereumWalletConnect());
          };
        a(s),
          s
            .filter((e) => i || "walletconnect_solana" !== e.walletBranding?.id)
            .forEach(this.addSolanaWalletConnector),
          this.externalWalletConfig.solana.connectors?._setOnConnectorsUpdated?.(
            (e) => {
              a(e),
                e
                  ?.filter(
                    (e) => i || "walletconnect_solana" !== e.walletBranding?.id
                  )
                  .forEach(this.addSolanaWalletConnector);
            }
          ),
          await t,
          (this.initialized = !0);
      }
      findWalletConnector(e, t, i) {
        return "wallet_connect_v2" === e
          ? this.walletConnectors
              .filter(c.h)
              .find(
                (t) =>
                  t.connectorType === e &&
                  (!i || t.wallets.some((e) => e.address === i))
              ) ?? null
          : this.walletConnectors
              .filter(c.h)
              .find(
                (r) =>
                  r.connectorType === e &&
                  r.walletClientType === t &&
                  (!i || r.wallets.some((e) => e.address === i))
              ) ?? null;
      }
      findSolanaWalletConnector(e) {
        return (
          this.walletConnectors
            .filter(c.d)
            .find((t) =>
              "unknown" === t.walletClientType
                ? t.walletBranding.id === e
                : t.walletClientType === e
            ) ?? null
        );
      }
      onInitialized(e) {
        h.c.connectorInit(e.connectorType, e.walletClientType, {
          walletsCount: e.wallets.length,
        }),
          e.wallets.forEach((e) => {
            let t = this.storedConnections.find(
              (t) =>
                t.address === e.address &&
                t.connectorType === e.connectorType &&
                ("solana" === e.type &&
                "unknown" === t.walletClientType &&
                "unknown" === e.walletClientType
                  ? e.meta.id === t.id
                  : t.walletClientType === e.walletClientType)
            );
            t && (e.connectedAt = t.connectedAt);
          }),
          this.emit("walletsUpdated"),
          this.emit("connectorInitialized");
      }
      onWalletsUpdated(e) {
        e.initialized && this.emit("walletsUpdated");
      }
      initEthereumWalletConnect() {
        return this.createEthereumWalletConnector({
          connectorType: "wallet_connect_v2",
          walletClientType: "unknown",
        }).then((e) => {
          if (e)
            return new Promise((t) => {
              if (e.initialized) return void t();
              let i = setTimeout(() => t(), 5e3);
              e.once("initialized", () => {
                clearTimeout(i), t();
              });
            });
        });
      }
      async createEthereumWalletConnector({
        connectorType: e,
        walletClientType: t,
        providers: i,
        walletConfig: r,
      }) {
        h.c.debug("Creating Ethereum wallet connector", {
          connector: e,
          wallet: t,
        });
        let s = this.findWalletConnector(e, t);
        if (s && (0, c.h)(s))
          return (
            h.c.debug("Found existing connector, reusing", {
              connector: e,
              wallet: t,
            }),
            s instanceof K && s.resetConnection(t),
            s
          );
        let n =
          "injected" !== e
            ? "coinbase_wallet" === e
              ? new R(
                  this.chains,
                  this.defaultChain,
                  this.rpcConfig,
                  this.externalWalletConfig.coinbaseWallet.config
                )
              : "base_account" === e
              ? new T(
                  this.chains,
                  this.defaultChain,
                  this.rpcConfig,
                  this.externalWalletConfig.baseAccount.config,
                  this.setBaseAccountSdk
                )
              : "null" !== e
              ? new K({
                  walletConnectCloudProjectId: this.walletConnectCloudProjectId,
                  rpcConfig: this.rpcConfig,
                  chains: this.chains,
                  defaultChain: this.defaultChain,
                  shouldEnforceDefaultChainOnConnect:
                    this.shouldEnforceDefaultChainOnConnect,
                  privyAppId: this.privyAppId,
                  privyAppName: this.privyAppName,
                  walletClientType: t,
                })
              : r
              ? new c.j({
                  id: r.client,
                  name: r.name,
                  defaultChain: this.defaultChain,
                  walletClientType: r.client,
                })
              : null
            : "metamask" === t && i?.eip6963InjectedProvider
            ? new B(
                this.chains,
                this.defaultChain,
                this.rpcConfig,
                i?.eip6963InjectedProvider,
                "metamask"
              )
            : "metamask" === t && i?.legacyInjectedProvider
            ? new W(
                this.chains,
                this.defaultChain,
                this.rpcConfig,
                i?.legacyInjectedProvider,
                "metamask"
              )
            : "phantom" === t && i?.legacyInjectedProvider
            ? new W(
                this.chains,
                this.defaultChain,
                this.rpcConfig,
                i?.legacyInjectedProvider,
                "phantom"
              )
            : i?.legacyInjectedProvider && "unknown_browser_extension" === t
            ? new W(
                this.chains,
                this.defaultChain,
                this.rpcConfig,
                i?.legacyInjectedProvider
              )
            : i?.eip6963InjectedProvider
            ? new U(
                this.chains,
                this.defaultChain,
                this.rpcConfig,
                i?.eip6963InjectedProvider,
                t
              )
            : void 0;
        return (
          n
            ? (h.c.connectorCreated(e, t), this.addWalletConnector(n))
            : h.c.debug("No connector created", { connector: e, wallet: t }),
          n || null
        );
      }
      addWalletConnector(e) {
        h.c.debug("Adding wallet connector", {
          connector: e.connectorType,
          wallet: e.walletClientType,
        }),
          this.walletConnectors.push(e),
          e.on("initialized", () => this.onInitialized(e)),
          e.on("walletsUpdated", () => this.onWalletsUpdated(e)),
          e.initialize().catch((t) => {
            h.c.error("Failed to initialize connector", t, {
              connector: e.connectorType,
              wallet: e.walletClientType,
            });
          });
      }
      setWalletList(e) {
        (this.walletList = e),
          this.initialized && this.initialize(!0).catch(console.error);
      }
      removeAllConnectors() {
        for (let e of this.walletConnectors) e.removeAllListeners();
        this.walletConnectors = [];
      }
      constructor(e, t, i, r, s, n, a, o, l, c, d, u, p) {
        super(),
          (this.ethereumWalletConnectInitPromise = null),
          (this.addSolanaWalletConnector = async (e) => {
            let t = this.findSolanaWalletConnector(e.walletClientType);
            if (!t || "null" === t.connectorType) {
              if ("null" === t?.connectorType) {
                let e = this.walletConnectors.indexOf(t);
                this.walletConnectors.splice(e, 1);
              }
              this.addWalletConnector(e);
            }
          }),
          h.c.setEnabled(p ?? !1),
          h.c.info("ConnectorManager initializing", {
            walletChainType: u || void 0,
            walletListCount: a.length,
          }),
          (this.privyAppId = e),
          (this.walletConnectCloudProjectId = t),
          (this.rpcConfig = i),
          (this.chains = r),
          (this.defaultChain = s),
          (this.walletConnectors = []),
          (this.initialized = !1),
          (this.store = n),
          (this.walletList = a),
          (this.shouldEnforceDefaultChainOnConnect = o),
          (this.externalWalletConfig = l),
          (this.privyAppName = c),
          (this.walletChainType = u || "ethereum-only"),
          (this.setBaseAccountSdk = d),
          (this.storedConnections = (0, h.l)());
      }
    }
    let H = (0, b.create)(() => ({ identityToken: null })),
      $ = [E.s, E.m, E.n];
    class J {
      async get(e, t) {
        try {
          return await this.baseFetch(e, t);
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async post(e, t, i) {
        try {
          return await this.baseFetch(e, {
            method: "POST",
            ...(t ? { body: t } : {}),
            ...i,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async delete(e, t) {
        try {
          return await this.baseFetch(e, { method: "DELETE", ...t });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor({ appId: e, appClientId: t, client: i, defaults: r }) {
        (this.appId = e),
          (this.appClientId = t),
          (this.clientAnalyticsId = i.clientAnalyticsId),
          (this.sdkVersion = w.V),
          (this.client = i),
          (this.defaults = r),
          (this.fallbackApiUrl = i.fallbackApiUrl),
          (this.baseFetch = v.ofetch.create({
            baseURL: this.defaults.baseURL,
            timeout: this.defaults.timeout,
            retry: 3,
            retryDelay: 500,
            retryStatusCodes: [408, 409, 425, 500, 502, 503, 504],
            credentials: "include",
            onRequest: async ({ request: e, options: t }) => {
              let i = new Headers(t.headers);
              i.set("privy-app-id", this.appId),
                this.appClientId && i.set("privy-client-id", this.appClientId),
                i.set("privy-ca-id", this.clientAnalyticsId || ""),
                i.set("privy-client", `react-auth:${this.sdkVersion}`);
              let r = $.includes(e.toString());
              if (!i.has("authorization")) {
                let e = await this.client.getAccessToken({
                  disableAutoRefresh: r,
                });
                null !== e && i.set("authorization", `Bearer ${e}`);
              }
              (t.headers = i),
                t.retryDelay &&
                  "number" == typeof t.retryDelay &&
                  (t.retryDelay = 3 * t.retryDelay);
            },
            onRequestError: ({ error: e }) => {
              if (e instanceof DOMException && "AbortError" === e.name)
                throw new d.h();
            },
          }));
      }
    }
    let z = (e) => ({
      rpId: e.rp_id,
      challenge: e.challenge,
      allowCredentials:
        e.allow_credentials?.map((e) => ({
          id: e.id,
          type: e.type,
          transports: e.transports,
        })) || [],
      timeout: e.timeout,
      extensions: {
        appid: e.extensions?.app_id,
        credProps: e.extensions?.cred_props,
        hmacCreateSecret: e.extensions?.hmac_create_secret,
      },
      userVerification: e.user_verification,
    });
    crypto.randomUUID();
    let F = Symbol("cross-tab-user-sync-plugin");
    class V {
      async authenticate() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        try {
          return await this.api.post(E.q, { token: this.meta.token });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        try {
          return await this.api.post(E.r, { token: this.meta.token });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor(e) {
        this.meta = { token: e };
      }
    }
    function G(e) {
      return e ? { "privy-ui": "t" } : void 0;
    }
    class Y {
      async authenticate() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.email || !this.meta.emailCode)
          throw new d.P(
            "Email and email code must be set prior to calling authenticate."
          );
        try {
          return await this.api.post(E.u, {
            email: this.meta.email,
            code: this.meta.emailCode,
            mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up",
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.email || !this.meta.emailCode)
          throw new d.P(
            "Email and email code must be set prior to calling authenticate."
          );
        try {
          return await this.api.post(E.v, {
            email: this.meta.email,
            code: this.meta.emailCode,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async sendCodeEmail({ email: e, captchaToken: t, withPrivyUi: i }) {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (
          (e && (this.meta.email = e),
          t && (this.meta.captchaToken = t),
          !this.meta.email)
        )
          throw new d.P("Email must be set when initialzing authentication.");
        let r = G(i);
        try {
          return await this.api.post(
            E.w,
            { email: this.meta.email, token: this.meta.captchaToken },
            { headers: { ...r } }
          );
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor({ email: e, captchaToken: t, disableSignup: i }) {
        this.meta = { email: e, captchaToken: t, disableSignup: i ?? !1 };
      }
    }
    class Z extends Y {
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.email || !this.meta.emailCode || !this.meta.oldAddress)
          throw new d.P(
            "Email, email code, and an old email address must be set prior to calling update."
          );
        try {
          return await this.api.post(E.x, {
            oldAddress: this.meta.oldAddress,
            newAddress: this.meta.email,
            code: this.meta.emailCode,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor(e, t, i) {
        super({ email: t, captchaToken: i }),
          (this.meta = {
            email: t,
            captchaToken: i,
            oldAddress: e,
            disableSignup: !1,
          });
      }
    }
    class Q {
      getOrCreateGuestCredential(e) {
        let t = (0, w.g)(e);
        if ((0, h.e)()) {
          if (h.s.get(t)) return h.s.get(t);
          {
            let e = a.base64url.encode((0, m.g)(32));
            return h.s.put(t, e), e;
          }
        }
        return a.base64url.encode((0, m.g)(32));
      }
      async authenticate() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        try {
          return await this.api.post(E.y, {
            guest_credential: this.meta.guestCredential,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async link() {
        throw Error("Linking is not supported for the guest flow");
      }
      constructor(e) {
        this.meta = { guestCredential: this.getOrCreateGuestCredential(e) };
      }
    }
    function X() {
      return (
        "u" > typeof window &&
        "chrome-extension:" === window.location.protocol &&
        "chrome" in window
      );
    }
    function ee() {
      if (!X()) return;
      let e = window.chrome;
      return e?.runtime?.id;
    }
    function et() {
      if (!X()) return !1;
      let e = window.chrome;
      return "function" == typeof e?.identity?.launchWebAuthFlow;
    }
    async function ei(e) {
      return new Promise((t, i) => {
        et()
          ? window.chrome.identity.launchWebAuthFlow(
              { url: e, interactive: !0 },
              async (e) => {
                try {
                  let i = (function () {
                    if (!X()) return;
                    let e = window.chrome;
                    return e?.runtime?.lastError?.message;
                  })();
                  if (i || !e) {
                    let e = `WebAuthFlow failed: ${
                      i || "Response URI missing"
                    }`;
                    throw Error(e);
                  }
                  let r = new URL(e),
                    s = ee();
                  if (!s) throw Error("Invalid extension context");
                  if ("chrome-extension:" === r.protocol) {
                    if (r.hostname !== s)
                      throw Error("Invalid responseUri origin");
                  } else {
                    if ("https:" !== r.protocol)
                      throw Error("Invalid responseUri protocol");
                    {
                      let e = r.hostname.split(".");
                      if (
                        3 !== e.length ||
                        "chromiumapp" !== e[1] ||
                        "org" !== e[2] ||
                        e[0] !== s
                      )
                        throw Error("Invalid responseUri origin");
                    }
                  }
                  let n = r.searchParams.get("privy_oauth_state"),
                    a = r.searchParams.get("privy_oauth_code");
                  if (!n || !a)
                    throw Error(
                      "Invalid responseUri - missing required parameters"
                    );
                  t({ privyOAuthState: n, privyOAuthCode: a });
                } catch (e) {
                  i(e);
                }
              }
            )
          : i(Error("Chrome identity API not available"));
      });
    }
    class er {
      addCaptchaToken(e) {
        this.meta.captchaToken = e;
      }
      isActive() {
        return !!(
          this.meta.authorizationCode &&
          this.meta.stateCode &&
          this.meta.provider
        );
      }
      async authenticate() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.authorizationCode || !this.meta.stateCode)
          throw new d.P(
            "[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenticate."
          );
        if ("undefined" === this.meta.authorizationCode)
          throw new d.P("User denied confirmation during OAuth flow");
        let e = (0, m.h)();
        try {
          let t = await this.api.post(E.o, {
            authorization_code: this.meta.authorizationCode,
            state_code: this.meta.stateCode,
            code_verifier: e,
            mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up",
          });
          return h.s.del(w.f), h.s.del(w.H), h.s.del(w.O), t;
        } catch (t) {
          let e = (0, d.f)(t);
          if (e.privyErrorCode)
            throw new d.P(
              e.message || "Invalid code during OAuth flow.",
              void 0,
              e.privyErrorCode
            );
          if ("User denied confirmation during OAuth flow" === e.message)
            throw new d.P(
              "Invalid code during oauth flow.",
              void 0,
              d.a.OAUTH_USER_DENIED
            );
          throw new d.P(
            "Invalid code during OAuth flow.",
            void 0,
            d.a.UNKNOWN_AUTH_ERROR
          );
        }
      }
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.authorizationCode || !this.meta.stateCode)
          throw new d.P(
            "[OAuth AuthFlow] Authorization and state codes code must be set prior to calling link."
          );
        if ("undefined" === this.meta.authorizationCode)
          throw new d.P("User denied confirmation during OAuth flow");
        let e = h.s.get(w.f);
        if (!e) throw new d.P("Authentication error.");
        try {
          let t = await this.api.post(E.k, {
            authorization_code: this.meta.authorizationCode,
            state_code: this.meta.stateCode,
            code_verifier: e,
          });
          return h.s.del(w.f), t;
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async getAuthorizationUrl() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.provider)
          throw new d.P(
            "Provider must be set when initializing OAuth authentication."
          );
        let e = (0, m.c)();
        h.s.put(w.f, e);
        let t = (0, m.a)();
        h.s.put(w.S, t);
        let i = await (0, m.d)(e);
        this.meta.withPrivyUi || h.s.put(w.H, !0),
          this.meta.disableSignup ? h.s.put(w.O, !0) : h.s.del(w.O);
        let r = G(this.meta.withPrivyUi),
          s = window.location.href,
          n = (function () {
            let e = ee();
            if (e) return `https://${e}.chromiumapp.org`;
          })();
        n && (s = n);
        try {
          return await this.api.post(
            E.l,
            {
              provider: this.meta.provider,
              redirect_to: this.meta.customOAuthRedirectUrl || s,
              token: this.meta.captchaToken,
              code_challenge: i,
              state_code: t,
            },
            { headers: { ...r } }
          );
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor(e) {
        this.meta = e;
      }
    }
    class es {
      execute(e) {
        return (
          null === this.promise &&
            (this.promise = (async () => {
              try {
                return await this.fn(e);
              } finally {
                this.promise = null;
              }
            })()),
          this.promise
        );
      }
      constructor(e) {
        (this.promise = null), (this.fn = e);
      }
    }
    let en = ({ address: e, chainId: t, nonce: i }) => `${
      window.location.host
    } wants you to sign in with your Ethereum account:
${e}

By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.

URI: ${window.location.origin}
Version: 1
Chain ID: ${t}
Nonce: ${i}
Issued At: ${new Date().toISOString()}
Resources:
- https://privy.io`;
    class ea {
      get meta() {
        return {
          connectorType: this.wallet?.connectorType,
          walletClientType: this.wallet?.walletClientType,
          chainId: this.wallet?.chainId,
          address: this.wallet?.address,
          disableSignup: this._meta.disableSignup,
        };
      }
      async authenticate() {
        if (!this.client) throw new d.P("SiweFlow has no client instance");
        try {
          if (this.preparedMessage && this.signature)
            return await this.client.authenticateWithSiweInternal({
              message: this.preparedMessage,
              signature: this.signature,
              chainId: this.wallet?.chainId,
              walletClientType:
                this.walletClientType ?? this.wallet?.walletClientType,
              connectorType: this.connectorType ?? this.wallet?.connectorType,
              mode: this._meta.disableSignup ? "no-signup" : "login-or-sign-up",
            });
          if (!this.wallet) throw new d.P("SiweFlow has no wallet instance");
          let { message: e, signature: t } = await this.sign();
          return await this.client.authenticateWithSiweInternal({
            message: e,
            signature: t,
            chainId: this.wallet.chainId,
            walletClientType: this.wallet.walletClientType,
            connectorType: this.wallet.connectorType,
            mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up",
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async link() {
        if (!this.client) throw new d.P("SiweFlow has no client instance");
        try {
          if (!this.wallet) throw new d.P("SiweFlow has no wallet instance");
          let { message: e, signature: t } = await this.sign();
          return await this.client.linkWithSiweInternal({
            message: e,
            signature: t,
            chainId: this.wallet.chainId,
            walletClientType: this.wallet.walletClientType,
            connectorType: this.wallet.connectorType,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async sign() {
        if (!this.client) throw new d.P("SiweFlow has no client instance");
        if ((await this.buildMessage(), !this.preparedMessage))
          throw new d.P("Could not prepare SIWE message");
        if (!this.wallet) throw new d.P("SiweFlow has no wallet instance");
        let e = await this.wallet.sign(this.preparedMessage);
        return { message: this.preparedMessage, signature: e };
      }
      async _getNonceOnce() {
        if (!this.client) throw new d.P("SiweFlow has no client instance");
        if (!this.wallet) throw new d.P("UI SiweFlow has no wallet instance");
        return await this.client.generateSiweNonce({
          address: this.wallet.address,
          captchaToken: this.captchaToken,
        });
      }
      async buildMessage() {
        if (!this.client) throw new d.P("SiweFlow has no client instance");
        if (!this.wallet) throw new d.P("SiweFlow has no wallet instance");
        let e = this.wallet.address,
          t = this.wallet.chainId.replace("eip155:", "");
        return (
          this.nonce || (this.nonce = await this.getNonceOnce.execute()),
          (this.preparedMessage = en({
            address: e,
            chainId: t,
            nonce: this.nonce,
          })),
          this.preparedMessage
        );
      }
      constructor(e, t, i, r = !1, s) {
        (this._meta = { disableSignup: !1 }),
          (this.getNonceOnce = new es(this._getNonceOnce.bind(this))),
          (this.wallet = t),
          (this.captchaToken = i),
          (this.client = e),
          (this._meta.disableSignup = r),
          (this.preparedMessage = s?.message),
          (this.signature = s?.signature),
          (this.walletClientType = s?.walletClientType),
          (this.connectorType = s?.connectorType);
      }
    }
    class eo {
      async authenticate() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.phoneNumber || !this.meta.smsCode)
          throw new d.P(
            "phone number and sms code must be set prior to calling authenticate."
          );
        try {
          return await this.api.post(E.z, {
            phoneNumber: this.meta.phoneNumber,
            code: this.meta.smsCode,
            mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up",
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (!this.meta.phoneNumber || !this.meta.smsCode)
          throw new d.P(
            "phone number and sms code must be set prior to calling authenticate."
          );
        try {
          return await this.api.post(E.A, {
            phoneNumber: this.meta.phoneNumber,
            code: this.meta.smsCode,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async sendSmsCode({ phoneNumber: e, captchaToken: t, withPrivyUi: i }) {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (
          (e && (this.meta.phoneNumber = e),
          t && (this.meta.captchaToken = t),
          !this.meta.phoneNumber)
        )
          throw new d.P(
            "phone nNumber must be set when initialzing authentication."
          );
        let r = G(i);
        try {
          return await this.api.post(
            E.B,
            {
              phoneNumber: this.meta.phoneNumber,
              token: this.meta.captchaToken,
            },
            { headers: { ...r } }
          );
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor({ phoneNumber: e, captchaToken: t, disableSignup: i }) {
        this.meta = { phoneNumber: e, captchaToken: t, disableSignup: i ?? !1 };
      }
    }
    class el extends eo {
      async link() {
        if (!this.api) throw new d.P("Auth flow has no API instance");
        if (
          !this.meta.phoneNumber ||
          !this.meta.smsCode ||
          !this.meta.oldPhoneNumber
        )
          throw new d.P(
            "Phone number, sms code, and an old phone number must be set prior to calling update."
          );
        try {
          return await this.api.post(E.C, {
            old_phone_number: this.meta.oldPhoneNumber,
            new_phone_number: this.meta.phoneNumber,
            code: this.meta.smsCode,
          });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      constructor(e, t, i) {
        super({ phoneNumber: t, captchaToken: i }),
          (this.meta = {
            phoneNumber: t,
            captchaToken: i,
            oldPhoneNumber: e,
            disableSignup: !1,
          });
      }
    }
    function ec() {
      return !(
        g.isSafari && window.location.origin.startsWith("http://localhost")
      );
    }
    var eh,
      ed =
        (((eh = {}).PRIVY = "privy_access_token"),
        (eh.CUSTOMER = "customer_access_token"),
        eh);
    class eu {
      get token() {
        return this.privyAccessToken || this.customerAccessToken;
      }
      getToken(e) {
        return "privy_access_token" === e
          ? this.privyAccessToken
          : this.customerAccessToken;
      }
      get customerAccessToken() {
        return this._getToken(w.d);
      }
      get privyAccessToken() {
        return this._getToken(w.h);
      }
      _getToken(e) {
        try {
          let t = h.s.get(e);
          return "string" == typeof t ? A.throwIfNotWellFormedJwt(t) : null;
        } catch (e) {
          return console.error(e), this.destroyLocalState(), null;
        }
      }
      get refreshToken() {
        try {
          let e = h.s.get(w.R);
          return "string" == typeof e ? e : null;
        } catch (e) {
          return console.error(e), this.destroyLocalState(), null;
        }
      }
      getProviderAccessToken(e) {
        try {
          let t = h.s.get((0, w.e)(e));
          if ("string" != typeof t) return null;
          {
            let i = new A(t);
            return i.isExpired() ? (h.s.del((0, w.e)(e)), null) : i.value;
          }
        } catch (e) {
          return console.error(e), null;
        }
      }
      get mightHaveServerCookies() {
        try {
          let e = I.default.get(w.i);
          return void 0 !== e && e.length > 0;
        } catch (e) {
          console.error(e);
        }
        return !1;
      }
      hasRefreshCredentials(e = "privy_access_token") {
        let t = "string" == typeof this.getToken(e),
          i = "string" == typeof this.refreshToken && this.refreshToken !== w.j;
        return this.mightHaveServerCookies || (t && i);
      }
      hasActiveAccessToken(e) {
        let t = A.parse(this.getToken(e));
        return null !== t && !t.isExpired(30);
      }
      authenticate(e) {
        return this.authenticateOnce.execute(e);
      }
      link(e) {
        return this.linkOnce.execute(e);
      }
      refresh() {
        return this.refreshOnce.execute();
      }
      destroy() {
        return this.destroyOnce.execute();
      }
      storeProviderAccessToken(e, t) {
        "string" == typeof t ? h.s.put((0, w.e)(e), t) : h.s.del((0, w.e)(e));
      }
      updateIdentityToken(e) {
        "string" == typeof e
          ? this.storeIdentityToken(e)
          : this.clearIdentityToken();
      }
      async _authenticate(e) {
        try {
          let t = await e.authenticate(),
            { user: i, is_new_user: r, oauth_tokens: s } = t;
          this.handleTokenResponse(t);
          let n = s
            ? {
                provider: s.provider,
                accessToken: s.access_token,
                accessTokenExpiresInSeconds: s.access_token_expires_in_seconds,
                refreshToken: s.refresh_token,
                refreshTokenExpiresInSeconds:
                  s.refresh_token_expires_in_seconds,
                scopes: s.scopes,
              }
            : void 0;
          return (
            this._trackAuthenticateEvents(e, r),
            { user: (0, o.j)(i), isNewUser: r, oAuthTokens: n }
          );
        } catch (e) {
          throw (console.warn("Error authenticating session"), (0, d.i)(e));
        }
      }
      _trackAuthenticateEvents(e, t) {
        let i =
          e instanceof Y
            ? "email"
            : e instanceof eo
            ? "sms"
            : e instanceof ea
            ? "siwe"
            : e instanceof Q
            ? "guest"
            : e instanceof V
            ? "custom_auth"
            : e instanceof er
            ? e.meta.provider
            : null;
        i &&
          this.client &&
          this.client.createAnalyticsEvent({
            eventName: "sdk_authenticate",
            payload: { method: i, isNewUser: t },
          }),
          "siwe" === i &&
            this.client &&
            this.client.createAnalyticsEvent({
              eventName: "sdk_authenticate_siwe",
              payload: {
                connectorType: e.meta.connectorType,
                walletClientType: e.meta.walletClientType,
              },
            });
      }
      async _link(e) {
        try {
          let t = await e.link(),
            i = t.oauth_tokens,
            r = i
              ? {
                  provider: i.provider,
                  accessToken: i.access_token,
                  accessTokenExpiresInSeconds:
                    i.access_token_expires_in_seconds,
                  refreshToken: i.refresh_token,
                  refreshTokenExpiresInSeconds:
                    i.refresh_token_expires_in_seconds,
                  scopes: i.scopes,
                }
              : void 0;
          return { user: (0, o.j)(t), oAuthTokens: r };
        } catch (e) {
          throw (console.warn("Error linking account"), (0, d.i)(e));
        }
      }
      async _refresh() {
        if (!this.api) throw new d.P("Session has no API instance");
        if (!this.client) throw new d.P("Session has no PrivyClient instance");
        await this.client.getAccessToken({ disableAutoRefresh: !0 });
        let e = this.token,
          t = this.refreshToken;
        if (
          this.client.useServerCookies &&
          !this.mightHaveServerCookies &&
          this.token &&
          window.location.origin === this.client.apiUrl
        )
          return this.destroyLocalState(), null;
        try {
          let i;
          if (!((e && t) || this.mightHaveServerCookies)) return null;
          {
            let r = {};
            e && (r.authorization = `Bearer ${e}`),
              (i = await this.api.post(E.s, t ? { refresh_token: t } : {}, {
                headers: r,
              }));
          }
          return this.handleTokenResponse(i), (0, o.j)(i.user);
        } catch (e) {
          if (
            e instanceof d.d &&
            e.privyErrorCode === d.a.MISSING_OR_INVALID_TOKEN
          )
            return (
              console.warn(
                "Unable to refresh tokens - token is missing or no longer valid"
              ),
              this.destroyLocalState(),
              null
            );
          throw (0, d.i)(e);
        }
      }
      handleTokenResponse(e) {
        e.session_update_action && "set" !== e.session_update_action
          ? "clear" === e.session_update_action
            ? this.destroyLocalState()
            : "ignore" === e.session_update_action &&
              (e.token &&
                (this.storeCustomerAccessToken(e.token),
                this.storePrivyAccessToken(e.privy_access_token)),
              e.identity_token && this.storeIdentityToken(e.identity_token))
          : this._storeAllTokens(e);
      }
      _storeAllTokens(e) {
        this.storeRefreshToken(e.refresh_token),
          this.storeCustomerAccessToken(e.token),
          this.storePrivyAccessToken(e.privy_access_token),
          e.identity_token && this.storeIdentityToken(e.identity_token);
      }
      async _destroy() {
        try {
          await this.api?.post(E.m, { refresh_token: this.refreshToken });
        } catch (e) {
          console.warn("Error destroying session");
        }
        this.destroyLocalState();
      }
      destroyLocalState() {
        this.storeRefreshToken(null),
          this.storeCustomerAccessToken(null),
          this.storePrivyAccessToken(null),
          this.clearIdentityToken();
      }
      storeCustomerAccessToken(e) {
        if ("string" == typeof e) {
          let t = h.s.get(w.d);
          if ((h.s.put(w.d, e), !this.client?.useServerCookies)) {
            let t = A.parse(e)?.expiration;
            I.default.set(w.k, e, {
              sameSite: "Strict",
              secure: ec(),
              expires: t ? new Date(1e3 * t) : void 0,
            });
          }
          t !== e && this.client?.onStoreCustomerAccessToken?.(e);
        } else
          h.s.del(w.d),
            I.default.remove(w.k),
            this.client?.onDeleteCustomerAccessToken?.();
      }
      storeRefreshToken(e) {
        "string" == typeof e
          ? (h.s.put(w.R, e),
            this.client?.useServerCookies ||
              I.default.set(w.i, "t", {
                sameSite: "Strict",
                secure: ec(),
                expires: 30,
              }))
          : (h.s.del(w.R), I.default.remove(w.l), I.default.remove(w.i));
      }
      storePrivyAccessToken(e) {
        "string" == typeof e ? h.s.put(w.h, e) : h.s.del(w.h);
      }
      storeIdentityToken(e) {
        if ((H.setState({ identityToken: e }), this.client?.useServerCookies))
          return;
        h.s.put(w.I, e);
        let t = A.parse(e)?.expiration;
        I.default.set(w.m, e, {
          sameSite: "Strict",
          secure: ec(),
          expires: t ? new Date(1e3 * t) : void 0,
        });
      }
      clearIdentityToken() {
        h.s.del(w.I),
          H.setState({ identityToken: null }),
          I.default.remove(w.m);
      }
      constructor() {
        (this.authenticateOnce = new es(async (e) => this._authenticate(e))),
          (this.linkOnce = new es(async (e) => this._link(e))),
          (this.refreshOnce = new es(this._refresh.bind(this))),
          (this.destroyOnce = new es(this._destroy.bind(this)));
      }
    }
    var ep = 0,
      ef = "__private_" + ep++ + "__getOrGenerateClientAnalyticsId";
    class eg {
      getAppId() {
        return this.appId;
      }
      initializeConnectorManager({
        walletConnectCloudProjectId: e,
        rpcConfig: t,
        chains: i,
        defaultChain: r,
        store: s,
        walletList: n,
        shouldEnforceDefaultChainOnConnect: a,
        externalWalletConfig: o,
        appName: l,
        walletChainType: c,
        setBaseAccountSdk: h,
        connectorsDebugLogs: d,
      }) {
        this.connectors ||
          (this.connectors = new q(
            this.appId,
            e,
            t,
            i,
            r,
            s,
            n,
            a,
            o,
            l,
            h,
            c,
            d
          ));
      }
      generateApi() {
        let e = new J({
          appId: this.appId,
          appClientId: this.appClientId,
          client: this,
          defaults: { baseURL: this.apiUrl, timeout: this.timeout },
        });
        return (this.session.api = e), e;
      }
      updateApiUrl(e) {
        (this.apiUrl = e || this.fallbackApiUrl),
          (this.api = this.generateApi()),
          e && (this.useServerCookies = !0);
      }
      authenticate() {
        if (!this.authFlow) throw new d.P("No auth flow in progress.");
        return this.session.authenticate(this.authFlow);
      }
      async link() {
        if (!this.authFlow) throw new d.P("No auth flow in progress.");
        let { oAuthTokens: e } = await this.session.link(this.authFlow);
        return { user: await this.getAuthenticatedUser(), oAuthTokens: e };
      }
      storeProviderAccessToken(e, t) {
        this.session.storeProviderAccessToken(e, t);
      }
      getProviderAccessToken(e) {
        return this.session.getProviderAccessToken(e);
      }
      async logout() {
        await this.session.destroy(), (this.authFlow = void 0);
      }
      clearProviderAcccessTokens(e) {
        e.linkedAccounts
          .filter((e) => "cross_app" === e.type)
          .forEach((e) => {
            this.storeProviderAccessToken(e.providerApp.id, null);
          });
      }
      startAuthFlow(e) {
        return (e.api = this.api), (this.authFlow = e), this.authFlow;
      }
      async initMfaSmsVerification() {
        try {
          await this.api.post(E.D, { action: "verify" });
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async initMfaPasskeyVerification() {
        try {
          let e = await this.api.post(E.E, {});
          return z(e.options);
        } catch (e) {
          throw (0, d.f)(e);
        }
      }
      async getCrossAppProviderDetails(e) {
        try {
          return (
            this._cachedProviderAppDetails[e] ||
              (this._cachedProviderAppDetails[e] = await this.api.get(
                `/api/v1/apps/${e}/cross-app/details`
              )),
            this._cachedProviderAppDetails[e]
          );
        } catch (e) {
          console.error("Error fetching cross app provider details", e);
        }
      }
      async acceptTerms() {
        try {
          let e = await this.api.post(E.F, {});
          return (0, o.j)(e);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkEmail(e) {
        try {
          let t = await this.api.post(E.G, { address: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkPhone(e) {
        try {
          let t = await this.api.post(E.H, { phoneNumber: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkEthereumWallet(e) {
        try {
          let t = await this.api.post(E.I, { address: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkSolanaWallet(e) {
        try {
          let t = await this.api.post(E.J, { address: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkOAuth(e, t) {
        try {
          let i = await this.api.post(E.K, { provider: e, subject: t });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(i);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkFarcaster(e) {
        try {
          let t = await this.api.post(E.L, { fid: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async unlinkTelegram(e) {
        try {
          let t = await this.api.post(E.M, { telegram_user_id: e });
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(t);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async revokeDelegatedWallet() {
        try {
          await this.api.post(E.N, {});
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async createAnalyticsEvent({
        eventName: e,
        payload: t,
        timestamp: i,
        options: r,
      }) {
        if ("u" > typeof window)
          try {
            this.clientAnalyticsId ||
              console.warn(
                "No client analytics id set, refusing to send analytics event"
              ),
              await this.api.post(
                E.n,
                {
                  event_name: e,
                  client_id: this.clientAnalyticsId,
                  payload: {
                    ...(t || {}),
                    clientTimestamp: i
                      ? i.toISOString()
                      : new Date().toISOString(),
                  },
                },
                { retry: -1, keepalive: r?.keepAlive ?? !1 }
              );
          } catch (e) {
            console.log("Unable to submit event. This is not an issue.");
          }
      }
      async signMoonpayOnRampUrl(e) {
        try {
          return this.api.post(E.O, e);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async initCoinbaseOnRamp(e) {
        try {
          return this.api.post(E.P, e);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async getCoinbaseOnRampStatus({ partnerUserId: e }) {
        try {
          return this.api.get(`${E.Q}?partnerUserId=${e}`);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async getAuthenticatedUser() {
        return this.session.hasRefreshCredentials()
          ? this.session.refresh()
          : null;
      }
      async getAccessToken(e) {
        return (
          (await this.getPrivyAccessToken(e)) ||
          (await this.getCustomerAccessToken(e))
        );
      }
      async getCustomerAccessToken(e) {
        return await this._getToken(ed.CUSTOMER, e);
      }
      async getPrivyAccessToken(e) {
        return await this._getToken(ed.PRIVY, e);
      }
      async _getToken(e, t) {
        if (!this.session.getToken(e)) return null;
        if (this.session.hasActiveAccessToken(e))
          return this.session.hasRefreshCredentials(e)
            ? P.parse(this.session.getToken(e))?.appId !== this.appId
              ? (await this.logout(), null)
              : this.session.getToken(e)
            : (this.session.destroyLocalState(), null);
        if (t?.disableAutoRefresh || !this.session.hasRefreshCredentials(e))
          return null;
        {
          let t = (0, _.g)(F);
          return t
            ? await t.withRefreshLock({
                onLeader: async () => (
                  await this.session.refresh(), this.session.getToken(e)
                ),
                onFollowerReleased: async () =>
                  this.session.hasActiveAccessToken(e)
                    ? this.session.getToken(e)
                    : null,
              })
            : (await this.session.refresh(), this.session.getToken(e));
        }
      }
      async getUsdTokenPrice(e) {
        try {
          return (
            await this.api.get(
              `/api/v1/token_price?chainId=${e.id}&tokenSymbol=${e.nativeCurrency.symbol}`
            )
          ).usd;
        } catch (t) {
          return void console.error(
            `Unable to fetch token price for chain with id ${e.id}`
          );
        }
      }
      async getUsdPriceForSol() {
        try {
          return (
            await this.api.get("/api/v1/token_price?chainId=0&tokenSymbol=SOL")
          ).usd;
        } catch (e) {
          return void console.error("Unable to fetch token price for SOL");
        }
      }
      async getSplTokenMetadata({ mintAddress: e, cluster: t }) {
        try {
          return await this.api.get(
            `/api/v1/spl_token_info?mint_address=${e}&cluster=${t}`
          );
        } catch (i) {
          return void console.error(
            `Unable to fetch token metadata for ${t}:${e}`
          );
        }
      }
      async requestFarcasterSignerStatus(e) {
        try {
          return await this.api.post("/api/v1/farcaster/signer/status", {
            ed25519_public_key: e,
          });
        } catch (e) {
          throw (console.error("Unable to fetch Farcaster signer status"), e);
        }
      }
      async generateSiweNonce({ address: e, captchaToken: t }) {
        try {
          return (await this.api.post(E.R, { address: e, token: t })).nonce;
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async authenticateWithSiweInternal({
        message: e,
        signature: t,
        chainId: i,
        walletClientType: r,
        connectorType: s,
        mode: n,
      }) {
        return await this.api.post(E.S, {
          message: e,
          signature: t,
          chainId: i,
          walletClientType: r,
          connectorType: s,
          mode: n,
        });
      }
      async linkWithSiweInternal({
        message: e,
        signature: t,
        chainId: i,
        walletClientType: r,
        connectorType: s,
      }) {
        return await this.api.post(E.T, {
          message: e,
          signature: t,
          chainId: i,
          walletClientType: r,
          connectorType: s,
        });
      }
      async linkSmartWallet({
        message: e,
        signature: t,
        smartWalletType: i,
        smartWalletVersion: r,
      }) {
        try {
          let s = await this.api.post(E.U, {
            message: e,
            signature: t,
            smart_wallet_type: i,
            smart_wallet_version: r,
          });
          return (0, o.j)(s);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async linkWithSiwe({
        message: e,
        signature: t,
        chainId: i,
        walletClientType: r,
        connectorType: s,
      }) {
        try {
          let n = await this.linkWithSiweInternal({
            message: e,
            signature: t,
            chainId: i,
            walletClientType: r,
            connectorType: s,
          });
          return (0, o.j)(n);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async generateSiwsNonce({ address: e, captchaToken: t }) {
        try {
          return (await this.api.post(E.V, { address: e, token: t })).nonce;
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async authenticateWithSiwsInternal({
        message: e,
        signature: t,
        walletClientType: i,
        connectorType: r,
        mode: s,
        messageType: n = "plain",
      }) {
        return await this.api.post(E.W, {
          message: e,
          signature: t,
          walletClientType: i,
          connectorType: r,
          mode: s,
          message_type: n,
        });
      }
      async authenticateWithSiws({
        message: e,
        signature: t,
        walletClientType: i,
        connectorType: r,
        mode: s,
        messageType: n = "plain",
      }) {
        let a = await this.authenticateWithSiwsInternal({
          message: e,
          signature: t,
          walletClientType: i,
          connectorType: r,
          mode: s,
          messageType: n,
        });
        this.session.handleTokenResponse(a);
        let l = (0, o.j)(a.user);
        if (!l) throw Error("Authentication failed - no user returned");
        return { user: l, isNewUser: a.is_new_user || !1 };
      }
      async sendAccountTransferRequest({
        nonce: e,
        account: t,
        accountType: i,
        externalWalletMetadata: r,
        telegramAuthResult: s,
        telegramWebAppData: n,
        farcasterEmbeddedAddress: a,
        oAuthUserInfo: l,
      }) {
        try {
          let c, h;
          switch (i) {
            case "email":
              (c = E.a1), (h = { nonce: e, email: t });
              break;
            case "sms":
              (c = E.a0), (h = { nonce: e, phoneNumber: t });
              break;
            case "siwe":
              if (((c = E.$), !r))
                throw Error("Wallet parameters must be defined");
              h = { nonce: e, address: t, ...r };
              break;
            case "farcaster":
              (c = E._),
                (h = {
                  nonce: e,
                  farcaster_id: t,
                  farcaster_embedded_address: a,
                });
              break;
            case "telegram":
              (c = E.Z),
                (h = {
                  nonce: e,
                  telegram_auth_result: s,
                  telegram_web_app_data: n,
                });
              break;
            case "siws":
              (c = E.Y), (h = { nonce: e, address: t, ...r });
              break;
            case "custom":
            case "guest":
            case "passkey":
              throw Error("Invalid transfer account type");
            default:
              (c = E.X), (h = { nonce: e, userInfo: l });
          }
          let d = await this.api.post(c, h);
          return (await this.getAuthenticatedUser()) ?? (0, o.j)(d);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async linkWithSiwsInternal({
        message: e,
        signature: t,
        walletClientType: i,
        connectorType: r,
        messageType: s = "plain",
      }) {
        return await this.api.post(E.a2, {
          message: e,
          signature: t,
          walletClientType: i,
          connectorType: r,
          message_type: s,
        });
      }
      async linkWithSiws({
        message: e,
        signature: t,
        walletClientType: i,
        connectorType: r,
        messageType: s = "plain",
      }) {
        try {
          let n = await this.linkWithSiwsInternal({
            message: e,
            signature: t,
            walletClientType: i,
            connectorType: r,
            messageType: s,
          });
          return (0, o.j)(n);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async updateUserAndIdToken() {
        try {
          let e = await this.api.get(E.a3);
          return (
            this.session.updateIdentityToken(e.identity_token), (0, o.j)(e.user)
          );
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      async scanTransaction(e) {
        try {
          return await this.api.post(E.a4, e);
        } catch (e) {
          throw (0, d.i)(e);
        }
      }
      constructor({
        apiUrl: e = w.D,
        appId: t,
        appClientId: i,
        timeout: s = w.n,
      }) {
        Object.defineProperty(this, ef, { value: ey }),
          (this._cachedProviderAppDetails = {}),
          (this.apiUrl = e),
          (this.fallbackApiUrl = this.apiUrl),
          (this.useServerCookies = e !== w.D && e.startsWith("https://privy.")),
          (this.timeout = s),
          (this.appId = t),
          (this.appClientId = i),
          (this.clientAnalyticsId = (function (e, t) {
            if (!Object.prototype.hasOwnProperty.call(e, t))
              throw TypeError("attempted to use private field on non-instance");
            return e;
          })(this, ef)[ef]()),
          r || (r = new eu()),
          (this.session = r),
          (this.api = this.generateApi()),
          (this.session.client = this);
      }
    }
    function ey() {
      if ("u" < typeof window) return null;
      try {
        let e = h.s.get(w.c);
        if ("string" == typeof e && e.length > 0) return e;
      } catch (e) {}
      let e = crypto.randomUUID();
      try {
        return h.s.put(w.c, e), e;
      } catch (t) {
        return e;
      }
    }
    function em() {
      if (!s)
        throw new d.P(
          "No global PrivyClient instance found. Please ensure you have initialized the PrivyProvider."
        );
      return s;
    }
    function ew(e) {
      s ||
        (s = new eg({
          appId: e.appId,
          appClientId: e.clientId,
          apiUrl: e.apiUrl,
        }));
    }
    async function eb() {
      let e = em();
      return e
        ? e.getAccessToken()
        : Promise.resolve(h.s.get(w.h) || h.s.get(w.d) || null);
    }
    async function ev(e, t, i, r) {
      let s = (0, S.toViemTransactionSerializable)(e),
        { chain: n, ...a } = await (async () =>
          r
            ? await r()
            : await t.prepareTransactionRequest({
                ...s,
                account: { address: i, type: "json-rpc" },
              }))();
      return { ...a, type: S.STRING_TO_NUMBER_TXN_TYPE[a.type] };
    }
    e.s([
      "B",
      () => N,
      "C",
      () => V,
      "E",
      () => Y,
      "G",
      () => Q,
      "O",
      () => er,
      "R",
      () => es,
      "S",
      () => ea,
      "T",
      () => A,
      "U",
      () => el,
      "W",
      () => K,
      "a",
      () => eb,
      "b",
      () => eo,
      "c",
      () => Z,
      "d",
      () => ev,
      "e",
      () => ew,
      "f",
      () => em,
      "g",
      () => G,
      "h",
      () => et,
      "l",
      () => ei,
      "n",
      () => x,
      "o",
      () => k,
      "p",
      () => en,
      "q",
      () => j,
      "r",
      () => C,
      "t",
      () => z,
    ]);
  },
]);
