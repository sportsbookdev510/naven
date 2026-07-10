(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  204405,
  (e) => {
    "use strict";
    var t = e.i(719097),
      r = e.i(642947),
      n = e.i(415912),
      a = e.i(590479);
    function i({ src: e, ...r }) {
      return (0, t.jsx)("img", { src: e, ...r, style: { display: "none" } });
    }
    let o = (0, r.createContext)({
        currentScreen: null,
        lastScreen: null,
        navigate: a.n,
        navigateBack: a.n,
        resetNavigation: a.n,
        setModalData: a.n,
        onUserCloseViaDialogOrKeybindRef: void 0,
      }),
      s = (e) => {
        let a = (0, n.u)(),
          [s, l] = (0, r.useState)(e.initialScreen),
          c = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          e.open || (c.current = null);
        }, [e.open]),
          (0, r.useEffect)(() => {
            c.current = null;
          }, [e.initialScreen]);
        let d = {
          data: e.data,
          setModalData: e.setModalData,
          currentScreen: e.initialScreen,
          lastScreen: s,
          navigate: (t, r = !0) => {
            e.setInitialScreen(t), r && l(e.initialScreen);
          },
          navigateBack: () => {
            e.setInitialScreen(s);
          },
          resetNavigation: () => {
            e.setInitialScreen(null), l(null);
          },
          onUserCloseViaDialogOrKeybindRef: c,
        };
        return (0, t.jsxs)(o.Provider, {
          value: d,
          children: [
            ("string" == typeof a.appearance.logo ||
              "img" === a.appearance.logo?.type) &&
              (0, t.jsx)(i, {
                src:
                  "string" == typeof a.appearance.logo
                    ? a.appearance.logo
                    : a.appearance.logo.props.src,
              }),
            e.children,
          ],
        });
      },
      l = () => (0, r.useContext)(o);
    e.s(["M", () => s, "u", () => l]);
  },
  710071,
  (e) => {
    "use strict";
    var t,
      r,
      n =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      a =
        ((t = function (e) {
          return (
            n.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          );
        }),
        (r = Object.create(null)),
        function (e) {
          return void 0 === r[e] && (r[e] = t(e)), r[e];
        });
    e.s(["default", () => a], 710071);
  },
  946690,
  (e) => {
    "use strict";
    let t = (e) => {
        let t,
          r = new Set(),
          n = (e, n) => {
            let a = "function" == typeof e ? e(t) : e;
            if (!Object.is(a, t)) {
              let e = t;
              (t = (null != n ? n : "object" != typeof a || null === a)
                ? a
                : Object.assign({}, t, a)),
                r.forEach((r) => r(t, e));
            }
          },
          a = () => t,
          i = {
            setState: n,
            getState: a,
            getInitialState: () => o,
            subscribe: (e) => (r.add(e), () => r.delete(e)),
          },
          o = (t = e(n, a, i));
        return i;
      },
      r = (e) => (e ? t(e) : t);
    e.s(["createStore", () => r]);
  },
  757784,
  (e, t, r) => {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      a = "~";
    function i() {}
    function o(e, t, r) {
      (this.fn = e), (this.context = t), (this.once = r || !1);
    }
    function s(e, t, r, n, i) {
      if ("function" != typeof r)
        throw TypeError("The listener must be a function");
      var s = new o(r, n || e, i),
        l = a ? a + t : t;
      return (
        e._events[l]
          ? e._events[l].fn
            ? (e._events[l] = [e._events[l], s])
            : e._events[l].push(s)
          : ((e._events[l] = s), e._eventsCount++),
        e
      );
    }
    function l(e, t) {
      0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
    }
    function c() {
      (this._events = new i()), (this._eventsCount = 0);
    }
    Object.create &&
      ((i.prototype = Object.create(null)), new i().__proto__ || (a = !1)),
      (c.prototype.eventNames = function () {
        var e,
          t,
          r = [];
        if (0 === this._eventsCount) return r;
        for (t in (e = this._events))
          n.call(e, t) && r.push(a ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(e))
          : r;
      }),
      (c.prototype.listeners = function (e) {
        var t = a ? a + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, i = r.length, o = Array(i); n < i; n++) o[n] = r[n].fn;
        return o;
      }),
      (c.prototype.listenerCount = function (e) {
        var t = a ? a + e : e,
          r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (c.prototype.emit = function (e, t, r, n, i, o) {
        var s = a ? a + e : e;
        if (!this._events[s]) return !1;
        var l,
          c,
          d = this._events[s],
          u = arguments.length;
        if (d.fn) {
          switch ((d.once && this.removeListener(e, d.fn, void 0, !0), u)) {
            case 1:
              return d.fn.call(d.context), !0;
            case 2:
              return d.fn.call(d.context, t), !0;
            case 3:
              return d.fn.call(d.context, t, r), !0;
            case 4:
              return d.fn.call(d.context, t, r, n), !0;
            case 5:
              return d.fn.call(d.context, t, r, n, i), !0;
            case 6:
              return d.fn.call(d.context, t, r, n, i, o), !0;
          }
          for (c = 1, l = Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
          d.fn.apply(d.context, l);
        } else {
          var p,
            h = d.length;
          for (c = 0; c < h; c++)
            switch (
              (d[c].once && this.removeListener(e, d[c].fn, void 0, !0), u)
            ) {
              case 1:
                d[c].fn.call(d[c].context);
                break;
              case 2:
                d[c].fn.call(d[c].context, t);
                break;
              case 3:
                d[c].fn.call(d[c].context, t, r);
                break;
              case 4:
                d[c].fn.call(d[c].context, t, r, n);
                break;
              default:
                if (!l)
                  for (p = 1, l = Array(u - 1); p < u; p++)
                    l[p - 1] = arguments[p];
                d[c].fn.apply(d[c].context, l);
            }
        }
        return !0;
      }),
      (c.prototype.on = function (e, t, r) {
        return s(this, e, t, r, !1);
      }),
      (c.prototype.once = function (e, t, r) {
        return s(this, e, t, r, !0);
      }),
      (c.prototype.removeListener = function (e, t, r, n) {
        var i = a ? a + e : e;
        if (!this._events[i]) return this;
        if (!t) return l(this, i), this;
        var o = this._events[i];
        if (o.fn)
          o.fn !== t || (n && !o.once) || (r && o.context !== r) || l(this, i);
        else {
          for (var s = 0, c = [], d = o.length; s < d; s++)
            (o[s].fn !== t || (n && !o[s].once) || (r && o[s].context !== r)) &&
              c.push(o[s]);
          c.length ? (this._events[i] = 1 === c.length ? c[0] : c) : l(this, i);
        }
        return this;
      }),
      (c.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = a ? a + e : e), this._events[t] && l(this, t))
            : ((this._events = new i()), (this._eventsCount = 0)),
          this
        );
      }),
      (c.prototype.off = c.prototype.removeListener),
      (c.prototype.addListener = c.prototype.on),
      (c.prefixed = a),
      (c.EventEmitter = c),
      (t.exports = c);
  },
  948053,
  (e) => {
    "use strict";
    let t = e.i(757784).default;
    e.s(["default", 0, t]);
  },
  283450,
  (e) => {
    "use strict";
    let t =
        /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
      r =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
      n = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    function a(e, t) {
      var r;
      return "__proto__" === e ||
        ("constructor" === e && t && "object" == typeof t && "prototype" in t)
        ? void ((r = e),
          console.warn(
            `[destr] Dropping "${r}" key to prevent prototype pollution.`
          ))
        : t;
    }
    function i(e, o = {}) {
      if ("string" != typeof e) return e;
      if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\"))
        return e.slice(1, -1);
      let s = e.trim();
      if (s.length <= 9)
        switch (s.toLowerCase()) {
          case "true":
            return !0;
          case "false":
            return !1;
          case "undefined":
            return;
          case "null":
            return null;
          case "nan":
            return NaN;
          case "infinity":
            return 1 / 0;
          case "-infinity":
            return -1 / 0;
        }
      if (!n.test(e)) {
        if (o.strict) throw SyntaxError("[destr] Invalid JSON");
        return e;
      }
      try {
        if (t.test(e) || r.test(e)) {
          if (o.strict) throw Error("[destr] Possible prototype pollution");
          return JSON.parse(e, a);
        }
        return JSON.parse(e);
      } catch (t) {
        if (o.strict) throw t;
        return e;
      }
    }
    e.s(["default", () => i]);
  },
  986553,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(11363),
      n = e.i(734451),
      a = e.i(453462),
      i = e.i(114245),
      o = e.i(532931);
    async function s(e, t) {
      return s.internal(e, o.sendTransaction, "sendTransaction", t);
    }
    ((s || (s = {})).internal = async function (e, o, s, l) {
      let {
        abi: c,
        account: d = e.account,
        address: u,
        args: p,
        functionName: h,
        ...f
      } = l;
      if (void 0 === d)
        throw new r.AccountNotFoundError({
          docsPath: "/docs/contract/writeContract",
        });
      let m = d ? (0, t.parseAccount)(d) : null,
        v = (0, n.encodeFunctionData)({ abi: c, args: p, functionName: h });
      try {
        return await (0, i.getAction)(
          e,
          o,
          s
        )({ data: v, to: u, account: m, ...f });
      } catch (e) {
        throw (0, a.getContractError)(e, {
          abi: c,
          address: u,
          args: p,
          docsPath: "/docs/contract/writeContract",
          functionName: h,
          sender: m?.address,
        });
      }
    }),
      e.s(["writeContract", () => s]);
  },
  641548,
  (e) => {
    "use strict";
    e.s(["serializeAuthorizationList", () => n]);
    var t = e.i(964564),
      r = e.i(946523);
    function n(e) {
      if (!e || 0 === e.length) return [];
      let n = [];
      for (let a of e) {
        let { chainId: e, nonce: i, ...o } = a,
          s = a.address;
        n.push([
          e ? (0, t.toHex)(e) : "0x",
          s,
          i ? (0, t.toHex)(i) : "0x",
          ...(0, r.toYParitySignatureArray)({}, o),
        ]);
      }
      return n;
    }
  },
  46444,
  (e) => {
    "use strict";
    var t = e.i(985193),
      r = e.i(607844),
      n = e.i(10480),
      a = e.i(86972),
      i = e.i(691158),
      o = e.i(92842),
      s = e.i(689617),
      l = e.i(787357),
      c = e.i(144869),
      d = e.i(696249),
      u = e.i(190149);
    function p(e) {
      let { authorizationList: t } = e;
      if (t)
        for (let e of t) {
          let { chainId: t } = e,
            r = e.address;
          if (!(0, l.isAddress)(r))
            throw new n.InvalidAddressError({ address: r });
          if (t < 0) throw new o.InvalidChainIdError({ chainId: t });
        }
      f(e);
    }
    function h(e) {
      let { blobVersionedHashes: r } = e;
      if (r) {
        if (0 === r.length) throw new i.EmptyBlobError();
        for (let e of r) {
          let r = (0, c.size)(e),
            n = (0, u.hexToNumber)((0, d.slice)(e, 0, 1));
          if (32 !== r)
            throw new i.InvalidVersionedHashSizeError({ hash: e, size: r });
          if (n !== t.versionedHashVersionKzg)
            throw new i.InvalidVersionedHashVersionError({
              hash: e,
              version: n,
            });
        }
      }
      f(e);
    }
    function f(e) {
      let { chainId: t, maxPriorityFeePerGas: a, maxFeePerGas: i, to: c } = e;
      if (t <= 0) throw new o.InvalidChainIdError({ chainId: t });
      if (c && !(0, l.isAddress)(c))
        throw new n.InvalidAddressError({ address: c });
      if (i && i > r.maxUint256)
        throw new s.FeeCapTooHighError({ maxFeePerGas: i });
      if (a && i && a > i)
        throw new s.TipAboveFeeCapError({
          maxFeePerGas: i,
          maxPriorityFeePerGas: a,
        });
    }
    function m(e) {
      let {
        chainId: t,
        maxPriorityFeePerGas: i,
        gasPrice: c,
        maxFeePerGas: d,
        to: u,
      } = e;
      if (t <= 0) throw new o.InvalidChainIdError({ chainId: t });
      if (u && !(0, l.isAddress)(u))
        throw new n.InvalidAddressError({ address: u });
      if (i || d)
        throw new a.BaseError(
          "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
        );
      if (c && c > r.maxUint256)
        throw new s.FeeCapTooHighError({ maxFeePerGas: c });
    }
    function v(e) {
      let {
        chainId: t,
        maxPriorityFeePerGas: i,
        gasPrice: c,
        maxFeePerGas: d,
        to: u,
      } = e;
      if (u && !(0, l.isAddress)(u))
        throw new n.InvalidAddressError({ address: u });
      if (void 0 !== t && t <= 0)
        throw new o.InvalidChainIdError({ chainId: t });
      if (i || d)
        throw new a.BaseError(
          "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
        );
      if (c && c > r.maxUint256)
        throw new s.FeeCapTooHighError({ maxFeePerGas: c });
    }
    e.s([
      "assertTransactionEIP1559",
      () => f,
      "assertTransactionEIP2930",
      () => m,
      "assertTransactionEIP4844",
      () => h,
      "assertTransactionEIP7702",
      () => p,
      "assertTransactionLegacy",
      () => v,
    ]);
  },
  946523,
  918768,
  (e) => {
    "use strict";
    e.s(
      ["serializeTransaction", () => v, "toYParitySignatureArray", () => y],
      946523
    );
    var t = e.i(180796),
      r = e.i(641548),
      n = e.i(898214),
      a = e.i(107981),
      i = e.i(806838),
      o = e.i(850722),
      s = e.i(695670),
      l = e.i(376927),
      c = e.i(964564),
      d = e.i(489555),
      u = e.i(46444),
      p = e.i(426749),
      h = e.i(10480),
      f = e.i(787357);
    function m(e) {
      if (!e || 0 === e.length) return [];
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let { address: a, storageKeys: i } = e[n];
        for (let e = 0; e < i.length; e++)
          if (i[e].length - 2 != 64)
            throw new t.InvalidStorageKeySizeError({ storageKey: i[e] });
        if (!(0, f.isAddress)(a, { strict: !1 }))
          throw new h.InvalidAddressError({ address: a });
        r.push([a, i]);
      }
      return r;
    }
    function v(e, h) {
      let f = (0, p.getTransactionType)(e);
      return "eip1559" === f
        ? (function (e, t) {
            let {
              chainId: r,
              gas: n,
              nonce: a,
              to: i,
              value: o,
              maxFeePerGas: l,
              maxPriorityFeePerGas: p,
              accessList: h,
              data: f,
            } = e;
            (0, u.assertTransactionEIP1559)(e);
            let v = m(h),
              g = [
                (0, c.numberToHex)(r),
                a ? (0, c.numberToHex)(a) : "0x",
                p ? (0, c.numberToHex)(p) : "0x",
                l ? (0, c.numberToHex)(l) : "0x",
                n ? (0, c.numberToHex)(n) : "0x",
                i ?? "0x",
                o ? (0, c.numberToHex)(o) : "0x",
                f ?? "0x",
                v,
                ...y(e, t),
              ];
            return (0, s.concatHex)(["0x02", (0, d.toRlp)(g)]);
          })(e, h)
        : "eip2930" === f
        ? (function (e, t) {
            let {
              chainId: r,
              gas: n,
              data: a,
              nonce: i,
              to: o,
              value: l,
              accessList: p,
              gasPrice: h,
            } = e;
            (0, u.assertTransactionEIP2930)(e);
            let f = m(p),
              v = [
                (0, c.numberToHex)(r),
                i ? (0, c.numberToHex)(i) : "0x",
                h ? (0, c.numberToHex)(h) : "0x",
                n ? (0, c.numberToHex)(n) : "0x",
                o ?? "0x",
                l ? (0, c.numberToHex)(l) : "0x",
                a ?? "0x",
                f,
                ...y(e, t),
              ];
            return (0, s.concatHex)(["0x01", (0, d.toRlp)(v)]);
          })(e, h)
        : "eip4844" === f
        ? (function (e, t) {
            let {
              chainId: r,
              gas: l,
              nonce: p,
              to: h,
              value: f,
              maxFeePerBlobGas: v,
              maxFeePerGas: g,
              maxPriorityFeePerGas: w,
              accessList: b,
              data: k,
            } = e;
            (0, u.assertTransactionEIP4844)(e);
            let x = e.blobVersionedHashes,
              E = e.sidecars;
            if (e.blobs && (void 0 === x || void 0 === E)) {
              let t =
                  "string" == typeof e.blobs[0]
                    ? e.blobs
                    : e.blobs.map((e) => (0, c.bytesToHex)(e)),
                r = e.kzg,
                s = (0, n.blobsToCommitments)({ blobs: t, kzg: r });
              if (
                (void 0 === x &&
                  (x = (0, i.commitmentsToVersionedHashes)({ commitments: s })),
                void 0 === E)
              ) {
                let e = (0, a.blobsToProofs)({
                  blobs: t,
                  commitments: s,
                  kzg: r,
                });
                E = (0, o.toBlobSidecars)({
                  blobs: t,
                  commitments: s,
                  proofs: e,
                });
              }
            }
            let A = m(b),
              T = [
                (0, c.numberToHex)(r),
                p ? (0, c.numberToHex)(p) : "0x",
                w ? (0, c.numberToHex)(w) : "0x",
                g ? (0, c.numberToHex)(g) : "0x",
                l ? (0, c.numberToHex)(l) : "0x",
                h ?? "0x",
                f ? (0, c.numberToHex)(f) : "0x",
                k ?? "0x",
                A,
                v ? (0, c.numberToHex)(v) : "0x",
                x ?? [],
                ...y(e, t),
              ],
              C = [],
              _ = [],
              S = [];
            if (E)
              for (let e = 0; e < E.length; e++) {
                let { blob: t, commitment: r, proof: n } = E[e];
                C.push(t), _.push(r), S.push(n);
              }
            return (0, s.concatHex)([
              "0x03",
              E ? (0, d.toRlp)([T, C, _, S]) : (0, d.toRlp)(T),
            ]);
          })(e, h)
        : "eip7702" === f
        ? (function (e, t) {
            let {
              authorizationList: n,
              chainId: a,
              gas: i,
              nonce: o,
              to: l,
              value: p,
              maxFeePerGas: h,
              maxPriorityFeePerGas: f,
              accessList: v,
              data: g,
            } = e;
            (0, u.assertTransactionEIP7702)(e);
            let w = m(v),
              b = (0, r.serializeAuthorizationList)(n);
            return (0, s.concatHex)([
              "0x04",
              (0, d.toRlp)([
                (0, c.numberToHex)(a),
                o ? (0, c.numberToHex)(o) : "0x",
                f ? (0, c.numberToHex)(f) : "0x",
                h ? (0, c.numberToHex)(h) : "0x",
                i ? (0, c.numberToHex)(i) : "0x",
                l ?? "0x",
                p ? (0, c.numberToHex)(p) : "0x",
                g ?? "0x",
                w,
                b,
                ...y(e, t),
              ]),
            ]);
          })(e, h)
        : (function (e, r) {
            let {
              chainId: n = 0,
              gas: a,
              data: i,
              nonce: o,
              to: s,
              value: p,
              gasPrice: h,
            } = e;
            (0, u.assertTransactionLegacy)(e);
            let f = [
              o ? (0, c.numberToHex)(o) : "0x",
              h ? (0, c.numberToHex)(h) : "0x",
              a ? (0, c.numberToHex)(a) : "0x",
              s ?? "0x",
              p ? (0, c.numberToHex)(p) : "0x",
              i ?? "0x",
            ];
            if (r) {
              let e = (() => {
                  if (r.v >= 35n)
                    return (r.v - 35n) / 2n > 0
                      ? r.v
                      : 27n + (35n === r.v ? 0n : 1n);
                  if (n > 0) return BigInt(2 * n) + BigInt(35n + r.v - 27n);
                  let e = 27n + (27n === r.v ? 0n : 1n);
                  if (r.v !== e) throw new t.InvalidLegacyVError({ v: r.v });
                  return e;
                })(),
                a = (0, l.trim)(r.r),
                i = (0, l.trim)(r.s);
              f = [
                ...f,
                (0, c.numberToHex)(e),
                "0x00" === a ? "0x" : a,
                "0x00" === i ? "0x" : i,
              ];
            } else n > 0 && (f = [...f, (0, c.numberToHex)(n), "0x", "0x"]);
            return (0, d.toRlp)(f);
          })(e, h);
    }
    function y(e, t) {
      let r = t ?? e,
        { v: n, yParity: a } = r;
      if (void 0 === r.r || void 0 === r.s || (void 0 === n && void 0 === a))
        return [];
      let i = (0, l.trim)(r.r),
        o = (0, l.trim)(r.s);
      return [
        "number" == typeof a
          ? a
            ? (0, c.numberToHex)(1)
            : "0x"
          : 0n === n
          ? "0x"
          : 1n === n
          ? (0, c.numberToHex)(1)
          : 27n === n
          ? "0x"
          : (0, c.numberToHex)(1),
        "0x00" === i ? "0x" : i,
        "0x00" === o ? "0x" : o,
      ];
    }
    e.s(["serializeAccessList", () => m], 918768);
  },
  39889,
  (e) => {
    "use strict";
    e.s([
      "$",
      () => "/api/v1/siwe/transfer",
      "A",
      () => "/api/v1/passwordless_sms/link",
      "B",
      () => "/api/v1/passwordless_sms/init",
      "C",
      () => "/api/v1/passwordless_sms/update",
      "D",
      () => "/api/v1/mfa/passwordless_sms/init",
      "E",
      () => "/api/v1/mfa/passkeys/init",
      "F",
      () => "/api/v1/users/me/accept_terms",
      "G",
      () => "/api/v1/passwordless/unlink",
      "H",
      () => "/api/v1/passwordless_sms/unlink",
      "I",
      () => "/api/v1/siwe/unlink",
      "J",
      () => "/api/v1/siws/unlink",
      "K",
      () => "/api/v1/oauth/unlink",
      "L",
      () => "/api/v1/farcaster/unlink",
      "M",
      () => "/api/v1/telegram/unlink",
      "N",
      () => "/api/v1/wallets/revoke",
      "O",
      () => "/api/v1/plugins/moonpay_on_ramp/sign",
      "P",
      () => "/api/v1/funding/coinbase_on_ramp/init",
      "Q",
      () => "/api/v1/funding/coinbase_on_ramp/status",
      "R",
      () => "/api/v1/siwe/init",
      "S",
      () => "/api/v1/siwe/authenticate",
      "T",
      () => "/api/v1/siwe/link",
      "U",
      () => "/api/v1/siwe/link_smart_wallet",
      "V",
      () => "/api/v1/siws/init",
      "W",
      () => "/api/v1/siws/authenticate",
      "X",
      () => "/api/v1/oauth/transfer",
      "Y",
      () => "/api/v1/siws/transfer",
      "Z",
      () => "/api/v1/telegram/transfer",
      "_",
      () => "/api/v1/farcaster/transfer",
      "a",
      () => "/api/v1/farcaster/link",
      "a0",
      () => "/api/v1/passwordless_sms/transfer",
      "a1",
      () => "/api/v1/passwordless/transfer",
      "a2",
      () => "/api/v1/siws/link",
      "a3",
      () => "/api/v1/users/me",
      "a4",
      () => "/api/v1/scan/transaction",
      "a5",
      () => "api/v2/farcaster/init",
      "a6",
      () => "api/v2/farcaster/authenticate",
      "a8",
      () => "/api/v1/recovery/oauth/authenticate",
      "a9",
      () => "/api/v1/recovery/oauth/init_icloud",
      "aa",
      () => "/api/v1/recovery/oauth/init",
      "b",
      () => "/api/v1/farcaster/init",
      "c",
      () => "/api/v1/farcaster/status",
      "d",
      () => "/api/v1/passkeys/authenticate",
      "e",
      () => "/api/v1/passkeys/link",
      "f",
      () => "/api/v1/farcaster/authenticate",
      "g",
      () => "/api/v1/passkeys/register/init",
      "h",
      () => "/api/v1/passkeys/authenticate/init",
      "i",
      () => "/api/v1/passkeys/link/init",
      "j",
      () => "/api/v1/telegram/link",
      "k",
      () => "/api/v1/oauth/link",
      "l",
      () => "/api/v1/oauth/init",
      "m",
      () => "/api/v1/sessions/logout",
      "n",
      () => "/api/v1/analytics_events",
      "o",
      () => "/api/v1/oauth/authenticate",
      "p",
      () => "/api/v1/passkeys/register",
      "q",
      () => "/api/v1/custom_jwt_account/authenticate",
      "r",
      () => "/api/v1/custom_jwt_account/link",
      "s",
      () => "/api/v1/sessions",
      "t",
      () => "/api/v1/telegram/authenticate",
      "u",
      () => "/api/v1/passwordless/authenticate",
      "v",
      () => "/api/v1/passwordless/link",
      "w",
      () => "/api/v1/passwordless/init",
      "x",
      () => "/api/v1/passwordless/update",
      "y",
      () => "/api/v1/guest/authenticate",
      "z",
      () => "/api/v1/passwordless_sms/authenticate",
    ]);
  },
  648321,
  278510,
  203001,
  80421,
  653022,
  95351,
  561920,
  (e) => {
    "use strict";
    var t = e.i(180839),
      r = e.i(590479);
    let n = crypto;
    e.s(
      ["default", 0, n, "isCryptoKey", 0, (e) => e instanceof CryptoKey],
      278510
    );
    let a = async (e, t) => {
      let r = `SHA-${e.slice(-3)}`;
      return new Uint8Array(await n.subtle.digest(r, t));
    };
    e.s(["default", 0, a], 203001);
    let i = new TextEncoder(),
      o = new TextDecoder();
    function s(...e) {
      let t = new Uint8Array(e.reduce((e, { length: t }) => e + t, 0)),
        r = 0;
      return (
        e.forEach((e) => {
          t.set(e, r), (r += e.length);
        }),
        t
      );
    }
    function l(e, t) {
      return s(i.encode(e), new Uint8Array([0]), t);
    }
    function c(e, t, r) {
      if (t < 0 || t >= 0x100000000)
        throw RangeError(
          `value must be >= 0 and <= ${0x100000000 - 1}. Received ${t}`
        );
      e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r);
    }
    function d(e) {
      let t = Math.floor(e / 0x100000000),
        r = new Uint8Array(8);
      return c(r, t, 0), c(r, e % 0x100000000, 4), r;
    }
    function u(e) {
      let t = new Uint8Array(4);
      return c(t, e), t;
    }
    function p(e) {
      return s(u(e.length), e);
    }
    async function h(e, t, r) {
      let n = Math.ceil((t >> 3) / 32),
        i = new Uint8Array(32 * n);
      for (let t = 0; t < n; t++) {
        let n = new Uint8Array(4 + e.length + r.length);
        n.set(u(t + 1)),
          n.set(e, 4),
          n.set(r, 4 + e.length),
          i.set(await a("sha256", n), 32 * t);
      }
      return i.slice(0, t >> 3);
    }
    e.s(
      [
        "concat",
        () => s,
        "concatKdf",
        () => h,
        "decoder",
        0,
        o,
        "encoder",
        0,
        i,
        "lengthAndInput",
        () => p,
        "p2s",
        () => l,
        "uint32be",
        () => u,
        "uint64be",
        () => d,
      ],
      80421
    );
    let f = (e) => {
        let t = e;
        "string" == typeof t && (t = i.encode(t));
        let r = [];
        for (let e = 0; e < t.length; e += 32768)
          r.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
        return btoa(r.join(""));
      },
      m = (e) => f(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
      v = (e) => {
        let t = atob(e),
          r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        return r;
      },
      y = (e) => {
        let t = e;
        t instanceof Uint8Array && (t = o.decode(t)),
          (t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
        try {
          return v(t);
        } catch (e) {
          throw TypeError("The input to be decoded is not correctly encoded.");
        }
      };
    e.s(
      [
        "decode",
        0,
        y,
        "decodeBase64",
        0,
        v,
        "encode",
        0,
        m,
        "encodeBase64",
        0,
        f,
      ],
      653022
    ),
      e.s(["decode", 0, y, "encode", 0, m], 95351);
    var g = e.i(95351);
    e.s(["base64url", 0, g], 561920);
    var g = g,
      w = e.i(415912),
      b = e.i(623253);
    function k(e) {
      return {
        name: e.metadata?.shortName || e.name || "",
        universalLink: e.mobile.universal,
        deepLink: e.mobile.native,
      };
    }
    function x(e, n) {
      let a = k(n);
      if (t.isMobile && t.isAndroid && a.universalLink)
        return P(a.universalLink, e);
      if (a.deepLink) return I(a.deepLink, e);
      if (a.universalLink) return P(a.universalLink, e);
      throw new r.P(`Unsupported wallet ${n.id}`);
    }
    function E(e, t) {
      let r = k(t);
      if (r.universalLink) return P(r.universalLink, e);
    }
    let A = "WALLETCONNECT_DEEPLINK_CHOICE";
    function T() {
      try {
        localStorage.removeItem(A);
      } catch {}
    }
    function C({ href: e, name: t }) {
      try {
        localStorage.setItem(A, JSON.stringify({ href: e, name: t }));
      } catch {}
    }
    function _() {
      try {
        localStorage.removeItem(A);
      } catch {}
    }
    function S(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    }
    function I(e, t) {
      if (S(e)) return P(e, t);
      let r = e;
      return (
        r.includes("://") ||
          ((r = e.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
        r.endsWith("/") || (r = `${r}/`),
        { redirect: `${r}wc?uri=${encodeURIComponent(t)}`, href: r }
      );
    }
    function P(e, t) {
      if (!S(e)) return I(e, t);
      let r = e;
      return (
        r.endsWith("/") || (r = `${r}/`),
        { redirect: `${r}wc?uri=${encodeURIComponent(t)}`, href: r }
      );
    }
    function U(e, t) {
      window.open(e, t, "noreferrer noopener");
    }
    function W(e) {
      return crypto.getRandomValues(new Uint8Array(e));
    }
    function D() {
      return g.encode(W(36));
    }
    function M() {
      return D();
    }
    async function R(e, t = "S256") {
      if ("S256" != t) return e;
      {
        let t = await (async function (e) {
          let t = new TextEncoder().encode(e);
          return new Uint8Array(await crypto.subtle.digest("SHA-256", t));
        })(e);
        return g.encode(t);
      }
    }
    function O() {
      let e = b.s.get(w.f);
      if (!e) throw new r.P("Authentication error.");
      return e;
    }
    e.s(
      [
        "a",
        () => M,
        "b",
        () => x,
        "c",
        () => D,
        "d",
        () => R,
        "e",
        () => T,
        "f",
        () => E,
        "g",
        () => W,
        "h",
        () => O,
        "o",
        () => U,
        "r",
        () => _,
        "s",
        () => C,
      ],
      648321
    );
  },
  691533,
  (e) => {
    "use strict";
    let t = {
      id: 143,
      name: "Monad",
      network: "monad",
      nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
      rpcUrls: {
        privy: { http: ["https://monad-mainnet.rpc.privy.systems"] },
        default: { http: ["https://rpc.monad.xyz"] },
        public: { http: ["https://rpc.monad.xyz"] },
      },
      blockExplorers: {
        default: {
          name: "Monadscan",
          url: "https://mainnet-beta.monvision.io",
        },
      },
    };
    e.s(["monadMainnet", () => t]);
  },
  930717,
  (e) => {
    "use strict";
    var t = e.i(590479),
      r = e.i(691533),
      n = e.i(956092),
      a = e.i(739259),
      i = e.i(494571),
      o = e.i(127083),
      s = e.i(891908),
      l = e.i(193343),
      c = e.i(526285),
      d = e.i(378786),
      u = e.i(547837),
      p = e.i(359780),
      h = e.i(821174),
      f = e.i(433119),
      m = e.i(642947),
      v = e.i(787357),
      y = e.i(619251),
      g = e.i(415912),
      w = e.i(816218),
      b = e.i(204405);
    function k(e) {
      return ["ethereum", "solana"].includes(e.chainType);
    }
    function x(e) {
      let t = e.replace("eip155:", "");
      if (t) return parseInt(t);
      throw Error("Chain ID not compatible with CAIP-2 format.");
    }
    let E = (e) =>
        e.filter(
          (e) =>
            "wallets" === e.method ||
            ("exchange" === e.method
              ? "coinbase" === e.provider
              : "card" === e.method || "payment-request" === e.method
              ? "coinbase" === e.provider || "moonpay" === e.provider
              : (e.method, !1))
        ),
      A = {
        [f.mainnet.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        [h.sepolia.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
        [p.optimism.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
        [u.optimismSepolia.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
        [d.polygon.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
        [c.polygonAmoy.id]: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
        [l.base.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        [s.baseSepolia.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        [o.avalanche.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        [i.avalancheFuji.id]: "0x5425890298aed601595a70ab815c96711a31bc65",
        [a.arbitrum.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        [n.arbitrumSepolia.id]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
        999: "0xb88339CB7199b77E23DB6E890353E22632Ba630f",
        [r.monadMainnet.id]: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603",
      },
      T = ({
        address: e,
        appConfig: r,
        fundWalletConfig: n,
        methodScreen: a,
        chainIdOverride: i,
        comingFromSendTransactionScreen: o = !1,
        onComplete: s,
        onError: l,
      }) => {
        let c, d;
        if (!r.fundingConfig) throw Error("Wallet funding is not enabled");
        let u = E(r.fundingConfig.options);
        if (u.length < 1) throw Error("Wallet funding is not enabled");
        c =
          i ||
          (n?.chain
            ? n.chain.id
            : x(r.fundingConfig.defaultRecommendedCurrency.chain));
        let p = r.chains.find((e) => e.id === c);
        if (!p)
          throw new t.P(
            `Funding chain ${c} is not in PrivyProvider chains list`
          );
        let h = n?.amount ?? r.fundingConfig.defaultRecommendedAmount,
          f = !1;
        function m() {
          if (!c) return;
          let e = A[c];
          u.find((e) => "wallets" === e.method) &&
            !e &&
            console.warn(
              "Attempting to fund with USDC on chain where USDC address is not known. Funding via external wallet will be disabled."
            ),
            (d = e),
            (f = !0);
        }
        n && "asset" in n
          ? "USDC" === n.asset
            ? m()
            : "string" != typeof n.asset &&
              "erc20" in n.asset &&
              (f = (d = n.asset.erc20) === A[p.id])
          : "USDC" === r.fundingConfig.defaultRecommendedCurrency.asset && m();
        let v = n?.defaultFundingMethod;
        return {
          chainType: "ethereum",
          address: e,
          amount: h,
          chain: p,
          erc20Address: d,
          erc20ContractInfo: f ? { symbol: "USDC", decimals: 6 } : void 0,
          isUSDC: f,
          methodScreen: a,
          supportedOptions: u,
          comingFromSendTransactionScreen: o,
          defaultFundingMethod: v,
          usingDefaultFundingMethod: !!v,
          preferredCardProvider: n?.card?.preferredProvider,
          crossChainBridgingEnabled:
            r.fundingConfig.crossChainBridgingEnabled ?? !1,
          solanaChain: "solana:mainnet",
          uiConfig: n && "uiConfig" in n ? n.uiConfig : void 0,
          externalSolanaFundingScreen: null,
          onComplete: s ?? (() => {}),
          onError: l ?? (() => {}),
        };
      };
    function C({
      address: e,
      fundWalletConfig: t,
      appConfig: r,
      comingFromSendTransactionScreen: n,
      externalSolanaFundingScreen: a,
      methodScreen: i,
    }) {
      if (!r.fundingConfig) throw Error("Wallet funding is not enabled");
      let o = E(r.fundingConfig.options);
      if (o.length < 1) throw Error("Wallet funding is not enabled");
      if ("USDC" === t?.asset && "solana:testnet" === t?.chain)
        throw Error("USDC funding is not supported on the Solana testnet");
      let s = t?.amount ?? r.fundingConfig.defaultRecommendedAmount,
        l = t?.defaultFundingMethod;
      return {
        chainType: "solana",
        address: e,
        supportedOptions: o,
        amount: s,
        isUSDC: "USDC" === t?.asset,
        methodScreen: i,
        comingFromSendTransactionScreen: n,
        chain: t?.chain || "solana:mainnet",
        crossChainBridgingEnabled:
          r.fundingConfig.crossChainBridgingEnabled ?? !1,
        defaultFundingMethod: l,
        preferredCardProvider: t?.card?.preferredProvider,
        usingDefaultFundingMethod: !!l,
        uiConfig: t?.uiConfig,
        externalSolanaFundingScreen: a,
        onComplete: () => {},
        onError: () => {},
      };
    }
    function _() {
      let { user: e, getAccessToken: r } = (0, y.u)(),
        { walletProxy: n, openModal: a, client: i } = (0, t.u)(),
        { setModalData: o } = (0, b.u)(),
        s = (0, g.u)();
      return (0, m.useMemo)(
        () => ({
          exportWallet: (l) =>
            new Promise(async (c, d) => {
              if (!e)
                return void d(
                  Error(
                    "User must be authenticated before exporting their Privy wallet"
                  )
                );
              l && "target" in l && l && (l = void 0);
              let u = l?.address ? (0, y.f)(e, l.address) : (0, y.b)(e);
              if (!u)
                return void d(new t.P("User must have an embedded wallet."));
              let p = u.address,
                { entropyId: h, entropyIdVerifier: f } = (0, w.g)(e, u),
                m = (0, y.a)(u);
              if (!p)
                return void d(
                  Error(
                    "User does not have an HD Ethereum wallet. To export an imported wallet, pass the `address` of the wallet to `exportWallet`."
                  )
                );
              if (!(0, v.isAddress)(p))
                return void d(Error("Must provide a valid Ethereum address."));
              let g = {
                recoveryMethod: u.recoveryMethod,
                connectingWalletAddress: u.address,
                isUnifiedWallet: m,
                entropyId: h,
                entropyIdVerifier: f,
                onCompleteNavigateTo: "EmbeddedWalletKeyExportScreen",
                onFailure: d,
                shouldForceMFA: !0,
              };
              (await r()) && n
                ? k(u)
                  ? (o({
                      keyExport: {
                        appId: s.id,
                        appClientId: s.appClientId,
                        origin: i.apiUrl,
                        address: u.address,
                        entropyId: h,
                        entropyIdVerifier: f,
                        hdWalletIndex: u.walletIndex,
                        chainType: u.chainType,
                        walletId: u.id,
                        isUnifiedWallet: m,
                        imported: u.imported,
                        onSuccess: c,
                        onFailure: d,
                        showBackButton: l?.showBackButton,
                      },
                      connectWallet: g,
                    }),
                    a("EmbeddedWalletConnectingScreen"))
                  : d(
                      Error(
                        `Export is not supported for ${u.chainType} wallets`
                      )
                    )
                : d(Error("Must have valid access token."));
            }),
        }),
        [e, r, n, a, i, o, s]
      );
    }
    let S = () => {
      let { client: e, setUser: r } = (0, t.u)();
      return {
        unlink: (0, m.useCallback)(
          async ({ address: t }) => {
            let n;
            return (
              r(
                (n = t.startsWith("0x")
                  ? await e.unlinkEthereumWallet(t)
                  : await e.unlinkSolanaWallet(t))
              ),
              n
            );
          },
          [e, r]
        ),
      };
    };
    e.s(
      [
        "a",
        () => S,
        "b",
        () => C,
        "e",
        () => x,
        "f",
        () => E,
        "i",
        () => k,
        "p",
        () => T,
        "u",
        () => _,
      ],
      930717
    );
  },
  224599,
  (e) => {
    "use strict";
    let t = (e) =>
      window.open(
        e?.location,
        void 0,
        (({ w: e, h: t }) => {
          let r =
              void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
            n = void 0 !== window.screenTop ? window.screenTop : window.screenY,
            a = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            i = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height;
          return `toolbar=0,location=0,menubar=0,height=${t},width=${e},popup=1,left=${
            (a - e) / 2 / (a / window.screen.availWidth) + r
          },top=${(i - t) / 2 / (i / window.screen.availHeight) + n}`;
        })({ w: 440, h: 680 })
      );
    e.s(["trigger", () => t], 224599);
  },
  105362,
  (e) => {
    "use strict";
    let t = { path: "/api/v1/wallets", method: "POST" },
      r = { path: "/api/v1/wallets/:wallet_id", method: "GET" },
      n = { path: "/api/v1/wallets/:wallet_id/rpc", method: "POST" },
      a = { path: "/api/v1/wallets/:wallet_id", method: "PATCH" },
      i = { path: "/api/v1/wallets/revoke", method: "POST" };
    e.s([
      "WalletCreate",
      () => t,
      "WalletGet",
      () => r,
      "WalletRpc",
      () => n,
      "WalletUpdate",
      () => a,
      "WalletsRevoke",
      () => i,
    ]);
  },
  913143,
  (e) => {
    "use strict";
    var t = e.i(105362);
    async function r(e, { request: r, headers: n }) {
      return await e.fetchPrivyRoute(t.WalletCreate, { body: r, headers: n });
    }
    e.s(["create", () => r]);
  },
  103620,
  (e) => {
    "use strict";
    var t = e.i(642947),
      r = e.i(930717),
      n = e.i(619251),
      a = e.i(224599),
      i = e.i(415912),
      o = e.i(590479),
      s = e.i(39889),
      l = e.i(648321),
      c = e.i(964564),
      d = e.i(623253),
      u = e.i(295081),
      p = e.i(204405),
      h = e.i(816218),
      f = e.i(913143);
    let m = ({ address: e, nonce: t }) => `${
      window.location.host
    } wants you to sign in with your Solana account:
${e}

You are proving you own ${e}.

URI: ${window.location.origin}
Version: 1
Chain ID: mainnet
Nonce: ${t}
Issued At: ${new Date().toISOString()}
Resources:
- https://privy.io`;
    class v {
      async authenticate() {
        if (!this.api) throw new o.P("Auth flow has no API instance");
        try {
          return await this.api.post(s.o, {
            authorization_code: this.meta.authorizationCode,
            state_code: this.meta.stateCode,
            code_verifier: this.meta.codeVerifier,
            provider: this.meta.provider,
            mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up",
          });
        } catch (e) {
          throw (0, o.f)(e);
        }
      }
      async link() {
        if (!this.api) throw new o.P("Auth flow has no API instance");
        try {
          return await this.api.post(s.k, {
            authorization_code: this.meta.authorizationCode,
            state_code: this.meta.stateCode,
            code_verifier: this.meta.codeVerifier,
            provider: this.meta.provider,
          });
        } catch (e) {
          throw (0, o.f)(e);
        }
      }
      constructor(e) {
        this.meta = e;
      }
    }
    async function y({ api: e, requesterAppId: t, providerAppId: r }) {
      let n = (
        await e.get(`/api/v1/apps/${t}/cross-app/connections`)
      ).connections.find((e) => e.provider_app_id === r);
      if (!n) throw new o.P("Invalid connected app");
      return {
        name: n.provider_app_name,
        logoUrl: n.provider_app_icon_url || void 0,
        apiUrl: n.provider_app_custom_api_url,
        readOnly: n.read_only,
        customAuthAuthorizeUrl: n.provider_app_custom_auth_authorize_url,
        customAuthTransactUrl: n.provider_app_custom_auth_transact_url,
      };
    }
    async function g({ api: e, appId: t }) {
      let r = (0, l.c)(),
        n = (0, l.a)(),
        a = await (0, l.d)(r);
      try {
        let { url: i } = await e.post(s.l, {
          provider: `privy:${t}`,
          redirect_to: window.location.href,
          code_challenge: a,
          state_code: n,
        });
        return { url: i, stateCode: n, codeVerifier: r };
      } catch (e) {
        throw (0, o.f)(e);
      }
    }
    async function w({
      appId: e,
      stateCode: t,
      codeVerifier: r,
      authorizationCode: n,
      action: a,
      client: i,
      disableSignup: s,
    }) {
      if (!n || !t)
        throw new o.P(
          "[Cross-App AuthFlow] Authorization and state codes code must be set prior to calling authenicate."
        );
      if ("undefined" === n)
        throw new o.P("User denied confirmation during cross-app auth flow");
      try {
        let o = new v({
          authorizationCode: n,
          stateCode: t,
          codeVerifier: r,
          provider: `privy:${e}`,
          disableSignup: !!s,
        });
        i.startAuthFlow(o);
        let l = "link" === a ? await i.link() : await i.authenticate(),
          c = l.oAuthTokens?.accessToken;
        return console.debug(), c;
      } catch (t) {
        let e = (0, o.f)(t);
        if (e.privyErrorCode === o.a.ACCOUNT_TRANSFER_REQUIRED) throw e;
        if (e.privyErrorCode)
          throw new o.P(
            e.message || "Invalid code during cross-app auth flow.",
            void 0,
            e.privyErrorCode
          );
        if ("User denied confirmation during cross-app auth flow" === e.message)
          throw new o.P(
            "Invalid code during cross-app auth flow.",
            void 0,
            o.a.OAUTH_USER_DENIED
          );
        throw new o.P(
          "Invalid code during cross-app auth flow.",
          void 0,
          o.a.UNKNOWN_AUTH_ERROR
        );
      }
    }
    let b = Symbol("solana-funding-plugin"),
      k = Symbol("solana-ledger-plugin"),
      x = async ({
        user: e,
        accessToken: t,
        proxy: r,
        refreshSessionAndUser: a,
        privy: i,
        appConfig: o,
        recoverEmbeddedWallet: s,
        setUser: l,
        walletIndex: c,
        chainType: u,
        recoveryMethod: p,
        recoveryPassword: m,
        recoveryAccessToken: v,
        idempotencyKey: y,
        additionalSigners: g,
      }) => {
        if (0 === c)
          if ("user-controlled-server-wallets-only" === o.embeddedWallets.mode)
            await (0, f.create)(i, {
              request: {
                chain_type: u,
                additional_signers: g ? (0, d.b)(g) : void 0,
              },
              headers: y ? { "privy-idempotency-key": y } : void 0,
            });
          else if ("ethereum" === u) {
            let a = (0, n.d)(e);
            a && (await s({ address: a.address })),
              await r.create({
                accessToken: t,
                solanaAddress: a?.address,
                recoveryMethod: p,
                recoveryPassword: m,
                recoveryAccessToken: v,
              });
          } else {
            if ("solana" !== u) throw Error("Invalid input to create wallet");
            {
              let a = (0, n.b)(e);
              a && (await s({ address: a.address })),
                await r.createSolana({
                  accessToken: t,
                  ethereumAddress: a?.address,
                  recoveryMethod: p,
                  recoveryPassword: m,
                  recoveryAccessToken: v,
                });
            }
          }
        else if (
          "user-controlled-server-wallets-only" === o.embeddedWallets.mode
        )
          await (0, f.create)(i, {
            request: {
              chain_type: u,
              additional_signers: g ? (0, d.b)(g) : void 0,
            },
          });
        else {
          let { entropyId: n, entropyIdVerifier: a } = (0, h.g)(e);
          await s(),
            await r.addWallet({
              accessToken: t,
              entropyId: n,
              entropyIdVerifier: a,
              chainType: u,
              hdWalletIndex: c,
            });
        }
        let w = await a(),
          b = (0, h.c)(w, { chainType: u, walletIndex: c })[0];
        return l(w), { user: w, account: b };
      },
      E = async ({
        user: e,
        address: t,
        client: r,
        request: n,
        requesterAppId: i,
        reconnect: s,
      }) => {
        r.createAnalyticsEvent({
          eventName: "cross_app_request_started",
          payload: { address: t, method: n.method },
        });
        let l = e?.linkedAccounts.find(
          (e) =>
            "cross_app" === e.type &&
            (e.embeddedWallets.some((e) => e.address === t) ||
              e.smartWallets.some((e) => e.address === t))
        );
        if (!e || !l)
          throw (
            (r.createAnalyticsEvent({
              eventName: "cross_app_request_error",
              payload: {
                error: "Cannot request a signature with this wallet address",
                address: t,
              },
            }),
            new o.P("Cannot request a signature with this wallet address"))
          );
        let c = r.getProviderAccessToken(l.providerApp.id),
          d = await y({
            api: r.api,
            requesterAppId: i,
            providerAppId: l.providerApp.id,
          });
        if (!c) {
          if (d.readOnly)
            throw (
              (console.error(
                "cannot transact against a read-only provider app"
              ),
              new o.P("Cannot transact against a read-only provider app"))
            );
          (await s({ appId: l.providerApp.id, action: "link" })) &&
            (c = r.getProviderAccessToken(l.providerApp.id));
        }
        if (!c)
          throw (
            (r.createAnalyticsEvent({
              eventName: "cross_app_request_error",
              payload: {
                error: "Transactions require a valid token",
                address: t,
              },
            }),
            new o.P("Transactions require a valid token"))
          );
        let u = new URL(
          d.customAuthTransactUrl || `${d.apiUrl}/oauth/transact`
        );
        u.searchParams.set("token", c || ""),
          u.searchParams.set("request", A(n));
        let p = (0, a.trigger)({ location: u.href });
        if (!p)
          throw (
            (r.createAnalyticsEvent({
              eventName: "cross_app_request_error",
              payload: { error: "Missing token", address: t },
            }),
            new o.P("Failed to initialize signature request"))
          );
        return new Promise((e, a) => {
          let i = setTimeout(() => {
              d(),
                a(new o.P("Request timeout")),
                r.createAnalyticsEvent({
                  eventName: "cross_app_request_error",
                  payload: { error: "Request timeout", address: t },
                });
            }, 12e4),
            s = setInterval(() => {
              p.closed &&
                (d(),
                a(new o.P("User rejected request")),
                r.createAnalyticsEvent({
                  eventName: "cross_app_request_error",
                  payload: { error: "User rejected request", address: t },
                }));
            }, 300),
            c = (i) => {
              i.data &&
                ("set" === i.data.token?.action &&
                void 0 !== i.data.token?.value
                  ? r.storeProviderAccessToken(
                      l.providerApp.id,
                      i.data.token.value
                    )
                  : "clear" === i.data.token?.action &&
                    r.storeProviderAccessToken(l.providerApp.id, null),
                "PRIVY_CROSS_APP_ACTION_RESPONSE" === i.data.type &&
                  i.data.result &&
                  (d(),
                  e(i.data.result),
                  r.createAnalyticsEvent({
                    eventName: "cross_app_request_success",
                    payload: { address: t, method: n.method },
                  })),
                "PRIVY_CROSS_APP_ACTION_ERROR" === i.data.type &&
                  i.data.error &&
                  (d(),
                  a(i.data.error),
                  r.createAnalyticsEvent({
                    eventName: "cross_app_request_error",
                    payload: { error: i.data.error, address: t },
                  })));
            };
          window.addEventListener("message", c);
          let d = () => {
            p.close(),
              clearInterval(s),
              clearTimeout(i),
              window.removeEventListener("message", c);
          };
        });
      },
      A = (e) =>
        JSON.stringify({
          content: { request: { request: T(e, c.toHex) } },
          timestamp: Date.now(),
          callbackUrl: window.origin,
        }),
      T = (e, t) =>
        "bigint" == typeof e
          ? t(e)
          : Array.isArray(e)
          ? e.map((e) => T(e, t))
          : e && "object" == typeof e
          ? Object.fromEntries(Object.entries(e).map(([e, r]) => [e, T(r, t)]))
          : e,
      C = () => {
        let { user: e, getAccessToken: r } = (0, n.u)(),
          {
            client: s,
            setUser: l,
            openModal: c,
            inProgressAuthFlowRef: h,
            inProgressLoginOrLinkMethodRef: f,
          } = (0, o.u)(),
          m = (0, i.u)(),
          v = (0, u.a)(),
          { setModalData: g } = (0, p.u)(),
          w = (0, t.useCallback)(
            (t) =>
              e?.linkedAccounts.some(
                (e) =>
                  "cross_app" === e.type &&
                  e.smartWallets.some((e) => e.address === t)
              ) ?? !1,
            [e]
          ),
          b = (0, t.useCallback)(
            async ({ appId: e, action: t, disableSignup: n }) => {
              let i = await r();
              if ("link" === t && !i)
                throw (
                  (v("linkAccount", "onError", o.a.MUST_BE_AUTHENTICATED, {
                    linkMethod: `privy:${e}`,
                  }),
                  new o.P(
                    "User must be authenticated before linking an account."
                  ))
                );
              if ("login" === t && i)
                throw (
                  (v("login", "onError", o.a.UNKNOWN_AUTH_ERROR),
                  new o.P(
                    "Attempted to log in, but user is already logged in. Use a `link` helper instead."
                  ))
                );
              (f.current = `privy:${e}`), (h.current = t);
              let l = (0, a.trigger)();
              return (
                s.createAnalyticsEvent({
                  eventName: "cross_app_auth_started",
                  payload: { providerAppId: e },
                }),
                new Promise(async (r, a) => {
                  let { name: i, logoUrl: o } = await y({
                    api: s.api,
                    providerAppId: e,
                    requesterAppId: m.id,
                  });
                  g({
                    crossAppAuth: {
                      appId: e,
                      name: i,
                      logoUrl: o,
                      action: t,
                      popup: l,
                      disableSignup: n,
                      onSuccess: r,
                      onError: a,
                    },
                  }),
                    c("CrossAppAuthScreen");
                })
              );
            },
            [r, v, f, h, s, m.id, g, c]
          ),
          k = (0, t.useCallback)(
            async ({ subject: t }) => {
              let r = e?.linkedAccounts.find(
                (e) => "cross_app" === e.type && e.subject === t
              )?.providerApp;
              if (!r) throw new o.P("Invalid subject");
              s.storeProviderAccessToken(r.id, null);
              let n = await s.unlinkOAuth(`privy:${r.id}`, t);
              return l(n), n;
            },
            [e, s, l]
          ),
          x = (0, t.useCallback)(
            (t, { address: r, chainId: n }) =>
              E({
                user: e,
                client: s,
                address: r,
                requesterAppId: m.id,
                request: {
                  method: w(r)
                    ? "privy_signSmartWalletMessage"
                    : "personal_sign",
                  params: [t, r],
                  chainId: n,
                },
                reconnect: b,
              }),
            [e, s, m.id, w, b]
          ),
          A = (0, t.useCallback)(
            (t, { address: r, chainId: n }) => {
              let a = (0, d.g)(t);
              return E({
                user: e,
                client: s,
                address: r,
                requesterAppId: m.id,
                request: {
                  method: w(r)
                    ? "privy_signSmartWalletTypedData"
                    : "eth_signTypedData_v4",
                  params: [r, a],
                  chainId: n,
                },
                reconnect: b,
              });
            },
            [e, s, m.id, w, b]
          ),
          T = (0, t.useCallback)(
            (t, { address: r }) =>
              E({
                user: e,
                client: s,
                address: r,
                requesterAppId: m.id,
                request: {
                  method: w(r)
                    ? "privy_sendSmartWalletTx"
                    : "eth_sendTransaction",
                  params: [t],
                  chainId: t.chainId,
                },
                reconnect: b,
              }),
            [e, s, m.id, w, b]
          ),
          C = (0, t.useCallback)(
            (t, { address: r }) =>
              E({
                user: e,
                client: s,
                address: r,
                requesterAppId: m.id,
                request: {
                  method: w(r)
                    ? "privy_signSmartWalletTx"
                    : "eth_signTransaction",
                  params: [t],
                  chainId: t.chainId,
                },
                reconnect: b,
              }),
            [e, s, m.id, w, b]
          );
        return (0, t.useMemo)(
          () => ({
            startCrossAppAuthFlow: b,
            unlinkCrossAppAccount: k,
            signMessageWithCrossAppWallet: x,
            signTypedDataWithCrossAppWallet: A,
            sendTransactionWithCrossAppWallet: T,
            signTransactionWithCrossAppWallet: C,
          }),
          [b, k, x, A, T, C]
        );
      },
      _ = () => {
        let { client: e, setUser: r, walletProxy: a } = (0, o.u)(),
          { getAccessToken: s } = (0, n.u)(),
          l = (0, i.u)(),
          c = l?.passkeys?.shouldUnenrollMfaOnUnlink ?? !1;
        return {
          unlink: (0, t.useCallback)(
            async ({ credentialId: t }) => {
              let n = await s();
              if (!n)
                throw Error("Must have valid access token to enroll in MFA");
              if (!a) throw Error("Wallet proxy not initialized.");
              await a.unlinkPasskeyAccount({
                credentialId: t,
                accessToken: n,
                removeAsMfa: c,
              });
              let i = await e.getAuthenticatedUser();
              return r(i), i;
            },
            [c, e, s, r, a]
          ),
        };
      },
      S = async ({
        appConfig: e,
        getAccessToken: t,
        initializeWalletProxy: r,
        user: n,
        privy: a,
        emitPrivyEvent: i,
        recoverEmbeddedWallet: s,
        setModalData: l,
        openModal: c,
        setUser: d,
        options: u,
        timeoutDuration: p,
        refreshSessionAndUser: f,
        chainType: m,
        idempotencyKey: v,
        additionalSigners: y,
      }) => {
        let [g, w] = await Promise.all([r(p), t()]);
        if (!w || !n)
          throw (
            (i("createWallet", "onError", o.a.MUST_BE_AUTHENTICATED),
            Error("User must be authenticated before creating a Privy wallet"))
          );
        if (!g && e.customAuth?.enabled)
          throw (
            (i("createWallet", "onError", o.a.UNKNOWN_EMBEDDED_WALLET_ERROR),
            Error("Failed to connect to wallet proxy"))
          );
        if (
          y &&
          "user-controlled-server-wallets-only" !== e.embeddedWallets.mode
        )
          throw new o.P(
            "Specifying additionalSigners is only supported for TEE execution and this app uses on-device execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide"
          );
        if (u && "walletIndex" in u && "number" == typeof u.walletIndex) {
          if ("user-controlled-server-wallets-only" === e.embeddedWallets.mode)
            throw (
              (i("createWallet", "onError", o.a.INVALID_DATA),
              Error(
                "Invalid input, use `createAdditional` instead of `walletIndex` to create additional wallets."
              ))
            );
          return I({
            accessToken: w,
            appConfig: e,
            privy: a,
            emitPrivyEvent: i,
            openModal: c,
            proxy: g,
            refreshSessionAndUser: f,
            recoverEmbeddedWallet: s,
            setModalData: l,
            user: n,
            walletIndex: u.walletIndex,
            chainType: m,
            setUser: d,
            additionalSigners: y,
          });
        }
        let b = u && "createAdditional" in u && u.createAdditional,
          k = (0, h.c)(n, { chainType: m });
        if (k[0] && !b)
          throw (
            (i("createWallet", "onError", o.a.EMBEDDED_WALLET_ALREADY_EXISTS),
            Error("User already has an embedded wallet."))
          );
        return I({
          accessToken: w,
          appConfig: e,
          privy: a,
          emitPrivyEvent: i,
          openModal: c,
          proxy: g,
          recoverEmbeddedWallet: s,
          setModalData: l,
          user: n,
          walletIndex:
            (k.reduce(
              (e, t) => (!e || e.walletIndex < t.walletIndex ? t : e),
              null
            )?.walletIndex ?? -1) + 1,
          chainType: m,
          refreshSessionAndUser: f,
          setUser: d,
          idempotencyKey: v,
          additionalSigners: y,
        });
      },
      I = async ({
        accessToken: e,
        appConfig: t,
        privy: r,
        emitPrivyEvent: a,
        proxy: i,
        refreshSessionAndUser: s,
        recoverEmbeddedWallet: l,
        user: c,
        walletIndex: d,
        setModalData: u,
        openModal: p,
        chainType: f,
        setUser: m,
        idempotencyKey: v,
        additionalSigners: y,
      }) => {
        if (d < 0)
          throw (
            (a("createWallet", "onError", o.a.EMBEDDED_WALLET_CREATE_ERROR),
            Error(`A negative walletIndex (${d}) is invalid.`))
          );
        let g = (0, n.g)(c);
        if (d > 0 && !g)
          throw (
            (a("createWallet", "onError", o.a.EMBEDDED_WALLET_NOT_FOUND),
            Error(
              "Must have an existing embedded wallet to create an additional wallet."
            ))
          );
        if (
          t.embeddedWallets.requireUserOwnedRecoveryOnCreate &&
          "user-controlled-server-wallets-only" === t.embeddedWallets.mode
        )
          throw (
            (a("createWallet", "onError", o.a.EMBEDDED_WALLET_CREATE_ERROR),
            Error("User owned recovery not yet supported for this app."))
          );
        if (!g && t.embeddedWallets.requireUserOwnedRecoveryOnCreate)
          return await P({
            emitPrivyEvent: a,
            setModalData: u,
            openModal: p,
            chainType: f,
          });
        let w = (0, h.c)(c, { chainType: f, walletIndex: d })[0];
        if (w) return { user: c, account: w };
        if (0 === d && !i)
          return P({
            emitPrivyEvent: a,
            setModalData: u,
            openModal: p,
            chainType: f,
          });
        if (!i)
          throw (
            (a("createWallet", "onError", o.a.UNKNOWN_EMBEDDED_WALLET_ERROR),
            Error("Failed to connect to wallet proxy"))
          );
        return x({
          appConfig: t,
          walletIndex: d,
          chainType: f,
          user: c,
          accessToken: e,
          proxy: i,
          refreshSessionAndUser: s,
          privy: r,
          recoverEmbeddedWallet: l,
          setUser: m,
          idempotencyKey: v,
          additionalSigners: y,
        });
      },
      P = async ({
        emitPrivyEvent: e,
        setModalData: t,
        openModal: r,
        chainType: n,
      }) =>
        new Promise((a, i) => {
          t({
            createWallet: {
              onSuccess: ({ user: t, account: r }) => {
                e("createWallet", "onSuccess", { wallet: r }),
                  a({ user: t, account: r });
              },
              onFailure: (t) => {
                e("createWallet", "onError", o.a.UNKNOWN_EMBEDDED_WALLET_ERROR),
                  i(t);
              },
              callAuthOnSuccessOnClose: !1,
              shouldCreateEth: "ethereum" === n,
              shouldCreateSol: "solana" === n,
            },
          }),
            r("EmbeddedWalletOnAccountCreateScreen");
        }),
      U = () => {
        let e = (0, i.u)(),
          t = (0, u.a)(),
          { setModalData: r } = (0, p.u)(),
          {
            initializeWalletProxy: n,
            recoverEmbeddedWallet: a,
            setUser: s,
            openModal: l,
            refreshSessionAndUser: c,
            privy: d,
            client: h,
          } = (0, o.u)();
        return {
          create: async ({
            chainType: u,
            options: p,
            latestUser: f,
            idempotencyKey: m,
          }) => {
            let v = f;
            if ((v || (v = await c()), !v))
              throw (
                (t("createWallet", "onError", o.a.MUST_BE_AUTHENTICATED),
                Error(
                  "User must be authenticated before creating a Privy wallet"
                ))
              );
            return await S({
              appConfig: e,
              privy: d,
              getAccessToken: () => h.getAccessToken(),
              refreshSessionAndUser: c,
              initializeWalletProxy: n,
              user: v,
              emitPrivyEvent: t,
              recoverEmbeddedWallet: a,
              setModalData: r,
              openModal: l,
              setUser: s,
              options: p,
              timeoutDuration: i.W,
              chainType: u,
              idempotencyKey: m,
              additionalSigners: p?.signers,
            });
          },
        };
      },
      W = async (
        {
          emitPrivyEvent: e,
          getAccessToken: t,
          initializeWalletProxy: r,
          refreshSessionAndUser: a,
          user: i,
          appConfig: s,
        },
        { privateKey: l, chainType: c, additionalSigners: d }
      ) => {
        if (!i)
          throw (
            (e("linkAccount", "onError", o.a.MUST_BE_AUTHENTICATED, {
              linkMethod: "siwe",
            }),
            new o.P("User must be authenticated before linking an account."))
          );
        let u =
          "user-controlled-server-wallets-only" === s.embeddedWallets.mode
            ? "tee"
            : "on-device";
        if (d && "on-device" === u)
          throw new o.P(
            "Specifying additionalSigners is only supported for TEE execution and this app uses on-device execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide"
          );
        let [p, h] = await Promise.all([t(), r(15e3)]);
        if (!h || !p)
          throw (
            (e("linkAccount", "onError", o.a.MUST_BE_AUTHENTICATED, {
              linkMethod: "siwe",
            }),
            new o.P("User must be authenticated before linking an account."))
          );
        let { address: f } = await h.importWallet({
            privateKey: l,
            accessToken: p,
            chainType: c,
            mode: u,
            additionalSigners: d,
          }),
          m = await a(),
          v = "solana" === c ? (0, n.e)(m) : (0, n.c)(m),
          y = v?.find((e) => e.address === f);
        if (!y)
          throw (
            (e("createWallet", "onError", o.a.UNKNOWN_EMBEDDED_WALLET_ERROR),
            Error("Failed to import wallet"))
          );
        return e("createWallet", "onSuccess", { wallet: y }), y;
      },
      D = () => {
        let { importWallet: e } = (() => {
            let { user: e } = (0, n.u)(),
              {
                client: r,
                refreshSessionAndUser: a,
                initializeWalletProxy: s,
              } = (0, o.u)(),
              l = (0, u.a)(),
              c = (0, i.u)();
            return {
              importWallet: (0, t.useCallback)(
                ({ privateKey: t, additionalSigners: n }) =>
                  W(
                    {
                      getAccessToken: () => r.getAccessToken(),
                      user: e,
                      initializeWalletProxy: s,
                      refreshSessionAndUser: a,
                      emitPrivyEvent: l,
                      appConfig: c,
                    },
                    {
                      privateKey: t,
                      chainType: "ethereum",
                      additionalSigners: n,
                    }
                  ),
                [e, r, a, s, l, c]
              ),
            };
          })(),
          { exportWallet: a } = (0, r.u)(),
          { createWallet: s } = (function (e) {
            let { create: t } = U();
            return (
              (0, u.u)("createWallet", void 0),
              {
                createWallet: async (e) => {
                  e && "target" in e && e && (e = void 0);
                  let { account: r } = await t({
                    chainType: "ethereum",
                    options: e,
                  });
                  return r;
                },
              }
            );
          })(),
          { unlinkCrossAppAccount: l } = C(),
          { unlink: c } = (0, r.a)(),
          { unlink: d } = (() => {
            let { client: e, setUser: r } = (0, o.u)();
            return {
              unlink: (0, t.useCallback)(
                async ({ address: t }) => {
                  let n = await e.unlinkEmail(t);
                  return r(n), n;
                },
                [e, r]
              ),
            };
          })(),
          { unlink: p } = (() => {
            let { client: e, setUser: r } = (0, o.u)();
            return {
              unlink: (0, t.useCallback)(
                async ({ phoneNumber: t }) => {
                  let n = await e.unlinkPhone(t);
                  return r(n), n;
                },
                [e, r]
              ),
            };
          })(),
          { unlink: h } = (() => {
            let { client: e, setUser: r } = (0, o.u)();
            return {
              unlink: (0, t.useCallback)(
                async ({ fid: t }) => {
                  let n = await e.unlinkFarcaster(t);
                  return r(n), n;
                },
                [e, r]
              ),
            };
          })(),
          { unlink: f } = (() => {
            let { client: e, setUser: r } = (0, o.u)();
            return {
              unlink: (0, t.useCallback)(
                async ({ telegramUserId: t }) => {
                  let n = await e.unlinkTelegram(t);
                  return r(n), n;
                },
                [e, r]
              ),
            };
          })(),
          { unlink: m } = _(),
          { unlink: v } = (() => {
            let { client: e, setUser: r } = (0, o.u)();
            return {
              unlink: (0, t.useCallback)(
                async ({ provider: t, subject: n }) => {
                  let a = await e.unlinkOAuth(t, n);
                  return r(a), a;
                },
                [e, r]
              ),
            };
          })(),
          y = (0, t.useCallback)((e) => c({ address: e }), [c]),
          g = (0, t.useCallback)((e) => d({ address: e }), [d]),
          w = (0, t.useCallback)((e) => p({ phoneNumber: e }), [p]),
          b = (0, t.useCallback)((e) => h({ fid: e }), [h]),
          k = (0, t.useCallback)((e) => f({ telegramUserId: e }), [f]),
          x = (0, t.useCallback)((e) => m({ credentialId: e }), [m]),
          E = (0, t.useCallback)((e) => v(e), [v]),
          A = (0, t.useCallback)(
            (e) => v({ provider: "google", subject: e }),
            [v]
          ),
          T = (0, t.useCallback)(
            (e) => v({ provider: "twitter", subject: e }),
            [v]
          ),
          S = (0, t.useCallback)(
            (e) => v({ provider: "twitch", subject: e }),
            [v]
          ),
          I = (0, t.useCallback)(
            (e) => v({ provider: "discord", subject: e }),
            [v]
          ),
          P = (0, t.useCallback)(
            (e) => v({ provider: "github", subject: e }),
            [v]
          ),
          D = (0, t.useCallback)(
            (e) => v({ provider: "spotify", subject: e }),
            [v]
          ),
          M = (0, t.useCallback)(
            (e) => v({ provider: "instagram", subject: e }),
            [v]
          ),
          R = (0, t.useCallback)(
            (e) => v({ provider: "tiktok", subject: e }),
            [v]
          ),
          O = (0, t.useCallback)(
            (e) => v({ provider: "line", subject: e }),
            [v]
          ),
          H = (0, t.useCallback)(
            (e) => v({ provider: "linkedin", subject: e }),
            [v]
          ),
          L = (0, t.useCallback)(
            (e) => v({ provider: "apple", subject: e }),
            [v]
          );
        return {
          ...(0, t.useContext)(n.P),
          importWallet: e,
          createWallet: s,
          exportWallet: a,
          unlinkCrossAppAccount: l,
          unlinkWallet: y,
          unlinkEmail: g,
          unlinkPhone: w,
          unlinkGoogle: A,
          unlinkTwitter: T,
          unlinkTwitch: S,
          unlinkDiscord: I,
          unlinkGithub: P,
          unlinkSpotify: D,
          unlinkInstagram: M,
          unlinkTiktok: R,
          unlinkLine: O,
          unlinkLinkedIn: H,
          unlinkApple: L,
          unlinkFarcaster: b,
          unlinkTelegram: k,
          unlinkPasskey: x,
          unlinkOAuth: E,
        };
      };
    e.s([
      "S",
      () => b,
      "a",
      () => w,
      "b",
      () => k,
      "c",
      () => x,
      "d",
      () => C,
      "e",
      () => U,
      "g",
      () => g,
      "l",
      () => _,
      "p",
      () => m,
      "u",
      () => D,
    ]);
  },
]);
