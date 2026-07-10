(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  778352,
  (e, t, r) => {
    "use strict";
    var n = e.r(642947),
      a =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      i = n.useState,
      s = n.useEffect,
      o = n.useLayoutEffect,
      c = n.useDebugValue;
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !a(e, r);
      } catch (e) {
        return !0;
      }
    }
    var l =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = i({ inst: { value: r, getSnapshot: t } }),
              a = n[0].inst,
              l = n[1];
            return (
              o(
                function () {
                  (a.value = r), (a.getSnapshot = t), u(a) && l({ inst: a });
                },
                [e, r, t]
              ),
              s(
                function () {
                  return (
                    u(a) && l({ inst: a }),
                    e(function () {
                      u(a) && l({ inst: a });
                    })
                  );
                },
                [e]
              ),
              c(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
  },
  517322,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(778352);
  },
  394672,
  (e, t, r) => {
    "use strict";
    var n = e.r(642947),
      a = e.r(517322),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      s = a.useSyncExternalStore,
      o = n.useRef,
      c = n.useEffect,
      u = n.useMemo,
      l = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, a) {
      var d = o(null);
      if (null === d.current) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      var p = s(
        e,
        (d = u(
          function () {
            function e(e) {
              if (!c) {
                if (
                  ((c = !0), (s = e), (e = n(e)), void 0 !== a && f.hasValue)
                ) {
                  var t = f.value;
                  if (a(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), i(s, e))) return t;
              var r = n(e);
              return void 0 !== a && a(t, r)
                ? ((s = e), t)
                : ((s = e), (o = r));
            }
            var s,
              o,
              c = !1,
              u = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === u
                ? void 0
                : function () {
                    return e(u());
                  },
            ];
          },
          [t, r, n, a]
        ))[0],
        d[1]
      );
      return (
        c(
          function () {
            (f.hasValue = !0), (f.value = p);
          },
          [p]
        ),
        l(p),
        p
      );
    };
  },
  769062,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(394672);
  },
  263335,
  277550,
  (e) => {
    "use strict";
    var t = e.i(719097);
    function r(e) {
      let t = e.state.current,
        r = e.state.connections.get(t),
        n = r?.accounts,
        a = n?.[0],
        i = e.chains.find((e) => e.id === r?.chainId),
        s = e.state.status;
      switch (s) {
        case "connected":
          return {
            address: a,
            addresses: n,
            chain: i,
            chainId: r?.chainId,
            connector: r?.connector,
            isConnected: !0,
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !1,
            status: s,
          };
        case "reconnecting":
          return {
            address: a,
            addresses: n,
            chain: i,
            chainId: r?.chainId,
            connector: r?.connector,
            isConnected: !!a,
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !0,
            status: s,
          };
        case "connecting":
          return {
            address: a,
            addresses: n,
            chain: i,
            chainId: r?.chainId,
            connector: r?.connector,
            isConnected: !1,
            isConnecting: !0,
            isDisconnected: !1,
            isReconnecting: !1,
            status: s,
          };
        case "disconnected":
          return {
            address: void 0,
            addresses: void 0,
            chain: void 0,
            chainId: void 0,
            connector: void 0,
            isConnected: !1,
            isConnecting: !1,
            isDisconnected: !0,
            isReconnecting: !1,
            status: s,
          };
      }
    }
    function n(e, t) {
      if (e === t) return !0;
      if (e && t && "object" == typeof e && "object" == typeof t) {
        let r, a;
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) {
          if ((r = e.length) !== t.length) return !1;
          for (a = r; 0 != a--; ) if (!n(e[a], t[a])) return !1;
          return !0;
        }
        if (
          "function" == typeof e.valueOf &&
          e.valueOf !== Object.prototype.valueOf
        )
          return e.valueOf() === t.valueOf();
        if (
          "function" == typeof e.toString &&
          e.toString !== Object.prototype.toString
        )
          return e.toString() === t.toString();
        let i = Object.keys(e);
        if ((r = i.length) !== Object.keys(t).length) return !1;
        for (a = r; 0 != a--; ) if (!Object.hasOwn(t, i[a])) return !1;
        for (a = r; 0 != a--; ) {
          let r = i[a];
          if (r && !n(e[r], t[r])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    var a = e.i(42407),
      i = e.i(642947),
      s = e.i(769062);
    let o = (e) => "object" == typeof e && !Array.isArray(e);
    function c(e = {}) {
      let t = (0, a.useConfig)(e);
      return (function (e, t, r = t, a = n) {
        let c = (0, i.useRef)([]),
          u = (0, s.useSyncExternalStoreWithSelector)(
            e,
            t,
            r,
            (e) => e,
            (e, t) => {
              if (o(e) && o(t) && c.current.length) {
                for (let r of c.current) if (!a(e[r], t[r])) return !1;
                return !0;
              }
              return a(e, t);
            }
          );
        return (0, i.useMemo)(() => {
          if (o(u)) {
            let e = { ...u },
              t = {};
            for (let [r, n] of Object.entries(e))
              t = {
                ...t,
                [r]: {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (c.current.includes(r) || c.current.push(r), n),
                },
              };
            return Object.defineProperties(e, t), e;
          }
          return u;
        }, [u]);
      })(
        (e) =>
          (function (e, t) {
            let { onChange: a } = t;
            return e.subscribe(() => r(e), a, {
              equalityFn(e, t) {
                let { connector: r, ...a } = e,
                  { connector: i, ...s } = t;
                return n(a, s) && r?.id === i?.id && r?.uid === i?.uid;
              },
            });
          })(t, { onChange: e }),
        () => r(t)
      );
    }
    e.s(["useAccount", () => c], 277550);
    var u = e.i(251684),
      l = e.i(936310),
      d = e.i(832366);
    async function f(e, t) {
      let { addEthereumChainParameter: r, chainId: n } = t,
        a = e.state.connections.get(t.connector?.uid ?? e.state.current);
      if (a) {
        let e = a.connector;
        if (!e.switchChain)
          throw new d.SwitchChainNotSupportedError({ connector: e });
        return await e.switchChain({
          addEthereumChainParameter: r,
          chainId: n,
        });
      }
      let i = e.chains.find((e) => e.id === n);
      if (!i) throw new l.ChainNotConfiguredError();
      return e.setState((e) => ({ ...e, chainId: n })), i;
    }
    let p = [];
    function m(e) {
      let t = e.chains;
      return n(p, t) ? p : ((p = t), t);
    }
    var h = e.i(466691),
      y = e.i(37754);
    let g = (0, e.i(224589).default)("loader", [
      ["path", { d: "M12 2v4", key: "3427ic" }],
      ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
      ["path", { d: "M18 12h4", key: "wj9ykh" }],
      ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
      ["path", { d: "M12 18v4", key: "jadmvz" }],
      ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
      ["path", { d: "M2 12h4", key: "j09sii" }],
      ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
    ]);
    var b = e.i(152236);
    function w({ className: e, ...r }) {
      return (0, t.jsx)(g, {
        role: "status",
        "aria-label": "Loading",
        className: (0, b.cn)("size-4 animate-spin", e),
        ...r,
      });
    }
    e.s(
      [
        "Web3Button",
        0,
        ({
          children: e,
          className: r = "",
          disabled: n = !1,
          loading: s = !1,
          targetChainId: o,
          onSwitchNetwork: l,
          onClick: d,
          variant: p = "default",
          type: g = "button",
          onWalletConnect: b,
          onNetworkSwitch: v,
          ...E
        }) => {
          let {
              login: x,
              isConnected: A,
              isAuthenticated: P,
            } = (0, y.useAuth)(),
            { chainId: T } = c(),
            { switchChain: C } = (function (e = {}) {
              let { mutation: t } = e,
                r = (0, a.useConfig)(e),
                n = {
                  mutationFn: (e) => f(r, e),
                  mutationKey: ["switchChain"],
                },
                {
                  mutate: s,
                  mutateAsync: o,
                  ...c
                } = (0, u.useMutation)({ ...t, ...n });
              return {
                ...c,
                chains: (function (e = {}) {
                  let t = (0, a.useConfig)(e);
                  return (0, i.useSyncExternalStore)(
                    (e) =>
                      (function (e, t) {
                        let { onChange: r } = t;
                        return e._internal.chains.subscribe((e, t) => {
                          r(e, t);
                        });
                      })(t, { onChange: e }),
                    () => m(t),
                    () => m(t)
                  );
                })({ config: r }),
                switchChain: s,
                switchChainAsync: o,
              };
            })(),
            R = A && T !== o,
            k = async (e) => {
              if (
                (("submit" === g && P && !R) ||
                  (e.preventDefault(), e.stopPropagation()),
                !P)
              ) {
                e.preventDefault(), e.stopPropagation(), x(), b?.();
                return;
              }
              if (R) {
                e.preventDefault(),
                  e.stopPropagation(),
                  l ? await l() : C && C({ chainId: o }),
                  v?.();
                return;
              }
              d && (await d(e));
            },
            B = !R && (n || s);
          return (0, t.jsxs)(h.Button, {
            disabled: B,
            onClick: k,
            className: r,
            variant: p,
            type: g,
            ...E,
            children: [
              s && (0, t.jsx)(w, {}),
              P ? (R ? "Switch Network" : e) : "Connect Wallet",
            ],
          });
        },
      ],
      263335
    );
  },
  658264,
  617630,
  804227,
  173669,
  877042,
  953036,
  560051,
  (e) => {
    "use strict";
    var t = e.i(879908),
      r = t.z.string().min(1),
      n = t.z.record(t.z.unknown()),
      a = t.z.record(t.z.unknown()).optional().nullable(),
      i = t.z
        .string()
        .min(3)
        .refine((e) => e.includes(":"), {
          message: "Network must be in CAIP-2 format (e.g., 'eip155:84532')",
        });
    t.z.union([r, i]);
    var s = /^[\x20-\x7e]+$/,
      o = t.z.object({
        url: r,
        description: t.z.string().optional(),
        mimeType: t.z.string().optional(),
        serviceName: t.z.string().min(1).max(32).regex(s).optional(),
        tags: t.z.array(t.z.string().min(1).max(32).regex(s)).max(5).optional(),
        iconUrl: t.z.string().max(2048).optional(),
      }),
      c = t.z.object({
        scheme: r,
        network: r,
        maxAmountRequired: r,
        resource: r,
        description: t.z.string(),
        mimeType: t.z.string().optional(),
        outputSchema: n.optional().nullable(),
        payTo: r,
        maxTimeoutSeconds: t.z.number().positive(),
        asset: r,
        extra: a,
      }),
      u = t.z.object({
        x402Version: t.z.literal(1),
        error: t.z.string().optional(),
        accepts: t.z.array(c).min(1),
      }),
      l = t.z.object({
        x402Version: t.z.literal(1),
        scheme: r,
        network: r,
        payload: n,
      }),
      d = t.z.object({
        scheme: r,
        network: i,
        amount: r,
        asset: r,
        payTo: r,
        maxTimeoutSeconds: t.z.number().positive(),
        extra: a,
      }),
      f = t.z.object({
        x402Version: t.z.literal(2),
        error: t.z.string().optional(),
        resource: o,
        accepts: t.z.array(d).min(1),
        extensions: a,
      }),
      p = t.z.object({
        x402Version: t.z.literal(2),
        resource: o.optional(),
        accepted: d,
        payload: n,
        extensions: a,
      });
    t.z.union([c, d]),
      t.z.discriminatedUnion("x402Version", [u, f]),
      t.z.discriminatedUnion("x402Version", [l, p]),
      e.s([], 617630),
      e.s(["x402Version", () => 2], 804227);
    var m = class extends Error {
        constructor(e, t) {
          const r = t.invalidReason || "unknown reason",
            n = t.invalidMessage;
          super(n ? `${r}: ${n}` : r),
            (this.name = "VerifyError"),
            (this.statusCode = e),
            (this.invalidReason = t.invalidReason),
            (this.invalidMessage = t.invalidMessage),
            (this.payer = t.payer);
        }
      },
      h = class extends Error {
        constructor(e, t) {
          const r = t.errorReason || "unknown reason",
            n = t.errorMessage;
          super(n ? `${r}: ${n}` : r),
            (this.name = "SettleError"),
            (this.statusCode = e),
            (this.errorReason = t.errorReason),
            (this.errorMessage = t.errorMessage),
            (this.payer = t.payer),
            (this.transaction = t.transaction),
            (this.network = t.network);
        }
      },
      y = class extends Error {
        constructor(e) {
          super(e), (this.name = "FacilitatorResponseError");
        }
      };
    function g(e) {
      let t = e;
      for (; t instanceof Error; ) {
        if (t instanceof y) return t;
        t = t.cause;
      }
      return null;
    }
    e.s(
      [
        "FacilitatorResponseError",
        () => y,
        "SettleError",
        () => h,
        "VerifyError",
        () => m,
        "getFacilitatorResponseError",
        () => g,
      ],
      173669
    );
    var b = e.i(594027),
      w = (e, t) => {
        let r;
        return ((r = e
          .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
          .replace(/\\\*/g, ".*")),
        RegExp(`^${r}$`)).test(t);
      },
      v = (e, t) => {
        let r = e.get(t);
        if (!r) {
          for (let [n, a] of e.entries())
            if (w(n, t)) {
              r = a;
              break;
            }
        }
        return r;
      },
      E = (e, t, r) => v(e, r)?.get(t),
      x = /^[A-Za-z0-9+/]*={0,2}$/;
    function A(e) {
      return "u" > typeof globalThis && "function" == typeof globalThis.btoa
        ? globalThis.btoa(
            Array.from(new TextEncoder().encode(e), (e) =>
              String.fromCharCode(e)
            ).join("")
          )
        : b.Buffer.from(e, "utf8").toString("base64");
    }
    function P(e) {
      if ("u" > typeof globalThis && "function" == typeof globalThis.atob) {
        let t = globalThis.atob(e),
          r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        return new TextDecoder("utf-8").decode(r);
      }
      return b.Buffer.from(e, "base64").toString("utf-8");
    }
    e.s(
      [
        "Base64EncodedRegex",
        () => x,
        "findByNetworkAndScheme",
        () => E,
        "findSchemesByNetwork",
        () => v,
        "safeBase64Decode",
        () => P,
        "safeBase64Encode",
        () => A,
      ],
      877042
    );
    var T = e.z;
    e.s(["__require", () => T], 953036);
    var C = class extends Error {
        constructor(e) {
          super(`x402 Route Configuration Errors:
${e.map((e) => `  - ${e.message}`).join("\n")}`),
            (this.name = "RouteConfigurationError"),
            (this.errors = e);
        }
      },
      R = `<!DOCTYPE html>
<html>
  <head>
    <title>Payment Required</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div style="max-width: 600px; margin: 50px auto; padding: 20px; font-family: system-ui, -apple-system, sans-serif;">
      <h1>Payment Required</h1>
      <p>This resource is protected by the x402 payment protocol.</p>
      <p style="margin-top: 2rem; padding: 1rem; background: #fef3c7; border-radius: 0.5rem;">
        <strong>Note to developers:</strong> install <code>@x402/paywall</code> to enable
        the in-browser wallet connection and payment UI. Programmatic clients should read
        the payment requirements from the 402 response headers and JSON body.
      </p>
    </div>
  </body>
</html>`,
      k = class {
        constructor(e, t) {
          for (const [r, n] of ((this.compiledRoutes = []),
          (this.protectedRequestHooks = []),
          (this.ResourceServer = e),
          (this.routesConfig = t),
          Object.entries(
            "object" != typeof t || "accepts" in t ? { "*": t } : t
          ))) {
            const e = this.parseRoutePattern(r);
            this.compiledRoutes.push({
              verb: e.verb,
              regex: e.regex,
              config: n,
              pattern: e.path,
            });
          }
        }
        get server() {
          return this.ResourceServer;
        }
        get routes() {
          return this.routesConfig;
        }
        async initialize() {
          await this.ResourceServer.initialize();
          let e = this.validateRouteConfiguration();
          if (e.length > 0) throw new C(e);
        }
        registerPaywallProvider(e) {
          return (this.paywallProvider = e), this;
        }
        onProtectedRequest(e) {
          return this.protectedRequestHooks.push(e), this;
        }
        async processHTTPRequest(e, t) {
          let r = e.method || e.adapter.getMethod(),
            { adapter: n, path: a } = (e = { ...e, method: r }),
            i = this.getRouteConfig(a, r);
          if (!i) return { type: "no-payment-required" };
          let { config: s, pattern: o } = i,
            c = { ...e, routePattern: o };
          for (let e of this.getProtectedRequestHooks(s)) {
            let t = await e(c, s);
            if (t && "grantAccess" in t) return { type: "no-payment-required" };
            if (t && "abort" in t)
              return {
                type: "payment-error",
                response: {
                  status: 403,
                  headers: { "Content-Type": "application/json" },
                  body: { error: t.reason },
                },
              };
          }
          let u = this.normalizePaymentOptions(s),
            l = this.extractPayment(n),
            d = {
              url: s.resource || c.adapter.getUrl(),
              description: s.description || "",
              mimeType: s.mimeType || "",
              ...(void 0 !== s.serviceName && { serviceName: s.serviceName }),
              ...(void 0 !== s.tags && { tags: s.tags }),
              ...(void 0 !== s.iconUrl && { iconUrl: s.iconUrl }),
            },
            f = await this.ResourceServer.buildPaymentRequirementsFromOptions(
              u,
              c
            ),
            p = s.extensions;
          p && (p = this.ResourceServer.enrichExtensions(p, c));
          let m = { request: c },
            h = await this.ResourceServer.createPaymentRequiredResponse(
              f,
              d,
              !l ? "Payment required" : void 0,
              p,
              m
            );
          if (!l) {
            let e = s.unpaidResponseBody
              ? await s.unpaidResponseBody(c)
              : void 0;
            return {
              type: "payment-error",
              response: this.createHTTPResponse(
                h,
                this.isWebBrowser(n),
                t,
                s.customPaywallHtml,
                e
              ),
            };
          }
          try {
            let e = this.ResourceServer.findMatchingRequirements(h.accepts, l);
            if (!e) {
              let e = await this.ResourceServer.createPaymentRequiredResponse(
                f,
                d,
                "No matching payment requirements",
                p,
                m
              );
              return {
                type: "payment-error",
                response: this.createHTTPResponse(e, !1, t),
              };
            }
            let r = this.ResourceServer.validateExtensions(h, l);
            if (!r.valid) {
              let e = await this.ResourceServer.createPaymentRequiredResponse(
                f,
                d,
                r.invalidReason,
                p,
                m,
                l
              );
              return {
                type: "payment-error",
                response: this.createHTTPResponse(e, !1, t),
              };
            }
            let n = await this.ResourceServer.verifyPayment(l, e, p, m);
            if (!n.isValid) {
              let e = await this.ResourceServer.createPaymentRequiredResponse(
                f,
                d,
                n.invalidReason,
                p,
                m,
                l
              );
              return {
                type: "payment-error",
                response: this.createHTTPResponse(e, !1, t),
              };
            }
            if (n.skipHandler)
              return await this.processSkipHandlerSettlement(
                l,
                e,
                p,
                m,
                n.skipHandler
              );
            let a = this.ResourceServer.createPaymentCancellationDispatcher(
              l,
              e,
              p,
              m
            );
            return {
              type: "payment-verified",
              cancellationDispatcher: a,
              paymentPayload: l,
              paymentRequirements: e,
              declaredExtensions: p,
            };
          } catch (r) {
            if (r instanceof y) throw r;
            let e = await this.ResourceServer.createPaymentRequiredResponse(
              f,
              d,
              r instanceof Error ? r.message : "Payment verification failed",
              p,
              m
            );
            return {
              type: "payment-error",
              response: this.createHTTPResponse(e, !1, t),
            };
          }
        }
        async processSettlement(e, t, r, n, a) {
          n?.request &&
            !n.request.method &&
            (n = {
              ...n,
              request: { ...n.request, method: n.request.adapter.getMethod() },
            });
          try {
            let i = a;
            if (!i && n?.responseHeaders) {
              let e = Object.entries(n.responseHeaders).find(
                ([e]) => "settlement-overrides" === e.toLowerCase()
              )?.[1];
              if (e)
                try {
                  i = JSON.parse(e);
                } catch {}
            }
            let s = await this.ResourceServer.settlePayment(e, t, r, n, i);
            if (!s.success) {
              let e = {
                  ...s,
                  success: !1,
                  errorReason: s.errorReason || "Settlement failed",
                  errorMessage:
                    s.errorMessage || s.errorReason || "Settlement failed",
                  headers: this.createSettlementHeaders(s),
                },
                t = await this.buildSettlementFailureResponse(e, n);
              return { ...e, response: t };
            }
            return {
              ...s,
              success: !0,
              headers: this.createSettlementHeaders(s),
              requirements: t,
            };
          } catch (s) {
            if (s instanceof y) throw s;
            if (s instanceof h) {
              let e = s.errorReason || s.message,
                t = {
                  success: !1,
                  errorReason: e,
                  errorMessage: s.errorMessage || e,
                  payer: s.payer,
                  network: s.network,
                  transaction: s.transaction,
                },
                r = {
                  ...t,
                  success: !1,
                  errorReason: e,
                  headers: this.createSettlementHeaders(t),
                },
                a = await this.buildSettlementFailureResponse(r, n);
              return { ...r, response: a };
            }
            let e = s instanceof Error ? s.message : "Settlement failed",
              r = {
                success: !1,
                errorReason: e,
                errorMessage: e,
                network: t.network,
                transaction: "",
              },
              a = {
                ...r,
                success: !1,
                errorReason: e,
                headers: this.createSettlementHeaders(r),
              },
              i = await this.buildSettlementFailureResponse(a, n);
            return { ...a, response: i };
          }
        }
        requiresPayment(e) {
          let t = e.method || e.adapter.getMethod();
          return void 0 !== this.getRouteConfig(e.path, t);
        }
        async processSkipHandlerSettlement(e, t, r, n, a) {
          let i = await this.processSettlement(e, t, r, n);
          if (!i.success)
            return { type: "payment-error", response: i.response };
          let s = a?.contentType ?? "application/json",
            o = a?.body ?? {};
          return {
            type: "payment-error",
            response: {
              status: 200,
              headers: { "Content-Type": s, ...i.headers },
              body: o,
              isHtml: s.includes("text/html"),
            },
          };
        }
        async buildSettlementFailureResponse(e, t) {
          let r = e.headers,
            n = t
              ? this.getRouteConfig(t.request.path, t.request.method)
              : void 0,
            a = n?.config.settlementFailedResponseBody
              ? await n.config.settlementFailedResponseBody(t.request, e)
              : void 0,
            i = a ? a.contentType : "application/json",
            s = a ? a.body : {};
          return {
            status: 402,
            headers: { "Content-Type": i, ...r },
            body: s,
            isHtml: i.includes("text/html"),
          };
        }
        normalizePaymentOptions(e) {
          return Array.isArray(e.accepts) ? e.accepts : [e.accepts];
        }
        getProtectedRequestHooks(e) {
          let t = [...this.protectedRequestHooks],
            r = e.extensions;
          if (!r) return t;
          for (let e of this.ResourceServer.getExtensions()) {
            let n = e.transportHooks?.http?.onProtectedRequest;
            n && e.key in r && t.push((t, a) => n(r[e.key], t, a));
          }
          return t;
        }
        validateRouteConfiguration() {
          let e = [];
          for (let [t, r] of "object" != typeof this.routesConfig ||
          "accepts" in this.routesConfig
            ? [["*", this.routesConfig]]
            : Object.entries(this.routesConfig)) {
            let n = t.includes(" ") ? t.split(/\s+/)[1] : t;
            for (let a of (n &&
              n.includes("*") &&
              r.extensions &&
              "bazaar" in r.extensions &&
              console.warn(
                `[x402] Route "${t}": Wildcard (*) patterns with bazaar discovery extensions will auto-generate parameter names (var1, var2, ...). Consider using named parameters instead (e.g. /weather/:city) for better discovery metadata.`
              ),
            this.normalizePaymentOptions(r))) {
              if (
                !this.ResourceServer.hasRegisteredScheme(a.network, a.scheme)
              ) {
                e.push({
                  routePattern: t,
                  scheme: a.scheme,
                  network: a.network,
                  reason: "missing_scheme",
                  message: `Route "${t}": No scheme implementation registered for "${a.scheme}" on network "${a.network}"`,
                });
                continue;
              }
              this.ResourceServer.getSupportedKind(2, a.network, a.scheme) ||
                e.push({
                  routePattern: t,
                  scheme: a.scheme,
                  network: a.network,
                  reason: "missing_facilitator",
                  message: `Route "${t}": Facilitator does not support scheme "${a.scheme}" on network "${a.network}"`,
                });
            }
          }
          return e;
        }
        getRouteConfig(e, t) {
          let r = this.normalizePath(e),
            n = t.toUpperCase(),
            a = this.compiledRoutes.find(
              (e) => e.regex.test(r) && ("*" === e.verb || e.verb === n)
            );
          if (a) return { config: a.config, pattern: a.pattern };
        }
        extractPayment(e) {
          let t =
            e.getHeader("payment-signature") ||
            e.getHeader("PAYMENT-SIGNATURE");
          if (t)
            try {
              return D(t);
            } catch (e) {
              console.warn("Failed to decode PAYMENT-SIGNATURE header:", e);
            }
          return null;
        }
        isWebBrowser(e) {
          let t = e.getAcceptHeader(),
            r = e.getUserAgent();
          return t.includes("text/html") && r.includes("Mozilla");
        }
        createHTTPResponse(e, t, r, n, a) {
          let i = "permit2_allowance_required" === e.error ? 412 : 402,
            s = this.createHTTPPaymentRequiredResponse(e);
          if (t) {
            let t = this.generatePaywallHTML(e, r, n);
            return {
              status: i,
              headers: { "Content-Type": "text/html", ...s.headers },
              body: t,
              isHtml: !0,
            };
          }
          let o = a ? a.contentType : "application/json",
            c = a ? a.body : {};
          return {
            status: i,
            headers: { "Content-Type": o, ...s.headers },
            body: c,
          };
        }
        createHTTPPaymentRequiredResponse(e) {
          return { headers: { "PAYMENT-REQUIRED": O(e) } };
        }
        createSettlementHeaders(e) {
          return { "PAYMENT-RESPONSE": U(e) };
        }
        parseRoutePattern(e) {
          let [t, r] = e.includes(" ") ? e.split(/\s+/) : ["*", e],
            n = RegExp(
              `^${r
                .replace(/\\/g, "\\\\")
                .replace(/[$()+.?^{|}]/g, "\\$&")
                .replace(/\*/g, ".*?")
                .replace(/\[([^\]]+)\]/g, "[^/]+")
                .replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, "[^/]+")
                .replace(/\//g, "\\/")}$`,
              "i"
            );
          return { verb: t.toUpperCase(), regex: n, path: r };
        }
        normalizePath(e) {
          return e
            .split(/[?#]/)[0]
            .split(/(%2[fF]|%5[cC])/)
            .map((e, t) => {
              if (t % 2 == 1) return e;
              try {
                return decodeURIComponent(e);
              } catch {
                return e;
              }
            })
            .join("")
            .replace(/\\/g, "/")
            .replace(/\/+/g, "/")
            .replace(/(.+?)\/+$/, "$1");
        }
        generatePaywallHTML(e, t, r) {
          if (r) return r;
          if (this.paywallProvider)
            return this.paywallProvider.generateHtml(e, t);
          try {
            let r = T("@x402/paywall"),
              n = this.getDisplayAmount(e),
              a = e.resource;
            return r.getPaywallHtml({
              amount: n,
              paymentRequired: e,
              currentUrl: a?.url || t?.currentUrl || "",
              testnet: t?.testnet ?? !0,
              appName: t?.appName,
              appLogo: t?.appLogo,
              sessionTokenEndpoint: t?.sessionTokenEndpoint,
            });
          } catch {}
          return R;
        }
        getDisplayAmount(e) {
          let t = e.accepts;
          if (t && t.length > 0) {
            let e = t[0];
            if ("amount" in e) {
              let t = this.ResourceServer.getAssetDecimalsForRequirements(e);
              return parseFloat(e.amount) / 10 ** t;
            }
          }
          return 0;
        }
      },
      B = t.z.object({
        isValid: t.z.boolean(),
        invalidReason: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        invalidMessage: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        payer: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        extensions: t.z
          .record(t.z.string(), t.z.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
        extra: t.z
          .record(t.z.string(), t.z.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
      }),
      S = t.z.object({
        success: t.z.boolean(),
        errorReason: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        errorMessage: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        payer: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        transaction: t.z.string(),
        network: t.z.custom((e) => "string" == typeof e),
        amount: t.z
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
        extensions: t.z
          .record(t.z.string(), t.z.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
        extra: t.z
          .record(t.z.string(), t.z.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
      }),
      I = t.z.object({
        x402Version: t.z.number(),
        scheme: t.z.string(),
        network: t.z.custom((e) => "string" == typeof e),
        extra: t.z
          .record(t.z.string(), t.z.unknown())
          .nullish()
          .transform((e) => e ?? void 0),
      }),
      N = t.z.object({
        kinds: t.z.array(I),
        extensions: t.z.array(t.z.string()).default([]),
        signers: t.z.record(t.z.string(), t.z.array(t.z.string())).default({}),
      });
    function _(e, t = 200) {
      let r = e.trim().replace(/\s+/g, " ");
      return r
        ? r.length <= t
          ? r
          : `${r.slice(0, t - 3)}...`
        : "<empty response>";
    }
    var F = ["status", "rejectedReason", "reason", "code"];
    function z(e) {
      let t = e.headers.get("EXTENSION-RESPONSES");
      if (t)
        try {
          let e = JSON.parse(P(t));
          if (!e || "object" != typeof e || Array.isArray(e)) return;
          let r = {};
          for (let [t, n] of Object.entries(e)) {
            let e = n && "object" == typeof n && !Array.isArray(n) ? n : {},
              a = {};
            for (let t of F) void 0 !== e[t] && (a[t] = e[t]);
            r[t] = a;
          }
          console.log(`[x402] extension responses: ${JSON.stringify(r)}`);
        } catch {}
    }
    async function q(e, t, r) {
      let n,
        a = await e.text();
      try {
        n = JSON.parse(a);
      } catch {
        throw new y(`Facilitator ${r} returned invalid JSON: ${_(a)}`);
      }
      let i = t.safeParse(n);
      if (!i.success)
        throw new y(`Facilitator ${r} returned invalid data: ${_(a)}`);
      return i.data;
    }
    var $ = class {
        constructor(e) {
          (this.url = (e?.url || "https://x402.org/facilitator").replace(
            /\/+$/,
            ""
          )),
            (this._createAuthHeaders = e?.createAuthHeaders);
        }
        async verify(e, t) {
          let r = { "Content-Type": "application/json" };
          if (this._createAuthHeaders) {
            let e = await this.createAuthHeaders("verify");
            r = { ...r, ...e.headers };
          }
          let n = await fetch(`${this.url}/verify`, {
            method: "POST",
            headers: r,
            redirect: "follow",
            body: JSON.stringify({
              x402Version: e.x402Version,
              paymentPayload: this.toJsonSafe(e),
              paymentRequirements: this.toJsonSafe(t),
            }),
          });
          if (!n.ok) {
            let e,
              t = await n.text();
            try {
              e = JSON.parse(t);
            } catch {
              throw Error(`Facilitator verify failed (${n.status}): ${_(t)}`);
            }
            if ("object" == typeof e && null !== e && "isValid" in e)
              throw new m(n.status, e);
            throw Error(
              `Facilitator verify failed (${n.status}): ${_(JSON.stringify(e))}`
            );
          }
          let a = await q(n, B, "verify");
          return z(n), a;
        }
        async settle(e, t) {
          let r = { "Content-Type": "application/json" };
          if (this._createAuthHeaders) {
            let e = await this.createAuthHeaders("settle");
            r = { ...r, ...e.headers };
          }
          let n = await fetch(`${this.url}/settle`, {
            method: "POST",
            headers: r,
            redirect: "follow",
            body: JSON.stringify({
              x402Version: e.x402Version,
              paymentPayload: this.toJsonSafe(e),
              paymentRequirements: this.toJsonSafe(t),
            }),
          });
          if (!n.ok) {
            let e,
              t = await n.text();
            try {
              e = JSON.parse(t);
            } catch {
              throw Error(`Facilitator settle failed (${n.status}): ${_(t)}`);
            }
            if ("object" == typeof e && null !== e && "success" in e)
              throw new h(n.status, e);
            throw Error(
              `Facilitator settle failed (${n.status}): ${_(JSON.stringify(e))}`
            );
          }
          let a = await q(n, S, "settle");
          return z(n), a;
        }
        async getSupported() {
          let e = { "Content-Type": "application/json" };
          if (this._createAuthHeaders) {
            let t = await this.createAuthHeaders("supported");
            e = { ...e, ...t.headers };
          }
          let t = null;
          for (let r = 0; r < 3; r++) {
            let n = await fetch(`${this.url}/supported`, {
              method: "GET",
              headers: e,
              redirect: "follow",
            });
            if (n.ok) return q(n, N, "supported");
            let a = await n.text().catch(() => n.statusText);
            if (
              ((t = Error(
                `Facilitator getSupported failed (${n.status}): ${_(a)}`
              )),
              429 === n.status && r < 2)
            ) {
              let e = (function (e, t) {
                let r = null;
                if (null !== e) {
                  let t = e.trim();
                  if (/^\d+$/.test(t)) r = 1e3 * Number(t);
                  else {
                    let t = Date.parse(e);
                    isNaN(t) || (r = t - Date.now());
                  }
                }
                return (
                  (null === r || r <= 0) && (r = 1e3 * Math.pow(2, t)),
                  Math.min(r, 3e4)
                );
              })(n.headers.get("Retry-After"), r);
              await new Promise((t) => setTimeout(t, e));
              continue;
            }
            throw t;
          }
          throw t ?? Error("Facilitator getSupported failed after retries");
        }
        async createAuthHeaders(e) {
          return this._createAuthHeaders
            ? { headers: (await this._createAuthHeaders())[e] ?? {} }
            : { headers: {} };
        }
        toJsonSafe(e) {
          return JSON.parse(
            JSON.stringify(e, (e, t) =>
              "bigint" == typeof t ? t.toString() : t
            )
          );
        }
      },
      M = class {
        constructor(e) {
          (this.client = e), (this.paymentRequiredHooks = []);
        }
        onPaymentRequired(e) {
          return this.paymentRequiredHooks.push(e), this;
        }
        async handlePaymentRequired(e) {
          for (let t of this.getPaymentRequiredHooks(e)) {
            let r = await t({ paymentRequired: e });
            if (r?.headers) return r.headers;
          }
          return null;
        }
        encodePaymentSignatureHeader(e) {
          switch (e.x402Version) {
            case 2:
              return { "PAYMENT-SIGNATURE": H(e) };
            case 1:
              return { "X-PAYMENT": H(e) };
            default:
              throw Error(`Unsupported x402 version: ${e.x402Version}`);
          }
        }
        getPaymentRequiredResponse(e, t) {
          let r = e("PAYMENT-REQUIRED");
          if (r) return j(r);
          if (
            t &&
            t instanceof Object &&
            "x402Version" in t &&
            1 === t.x402Version
          )
            return t;
          throw Error("Invalid payment required response");
        }
        getPaymentSettleResponse(e) {
          let t = e("PAYMENT-RESPONSE");
          if (t) return L(t);
          let r = e("X-PAYMENT-RESPONSE");
          if (r) return L(r);
          throw Error("Payment response header not found");
        }
        async createPaymentPayload(e) {
          return this.client.createPaymentPayload(e);
        }
        async processPaymentResult(e, t, r) {
          let n, a;
          try {
            n = this.getPaymentSettleResponse(t);
          } catch {}
          if (1 === e.x402Version) return { recovered: !1, settleResponse: n };
          if (!n && 402 === r)
            try {
              a = this.getPaymentRequiredResponse(t);
            } catch {}
          let i = e.accepted;
          if (!i)
            throw Error("Invalid x402 v2 payment payload: missing `accepted`");
          let s = {
              paymentPayload: e,
              requirements: i,
              ...(n ? { settleResponse: n } : {}),
              ...(a ? { paymentRequired: a } : {}),
            },
            o = await this.client.handlePaymentResponse(s);
          return { recovered: o?.recovered === !0, settleResponse: n };
        }
        parsePaymentResult(e) {
          let t,
            { status: r, getHeader: n, body: a } = e;
          try {
            t = this.getPaymentSettleResponse(n);
          } catch {
            if (402 === r)
              try {
                t = this.getPaymentRequiredResponse(n, a);
              } catch {}
          }
          let i = "none";
          return (
            !t || "success" in t || (i = "payment_required"),
            t &&
              "success" in t &&
              (i = t.success ? "settled" : "settle_failed"),
            { status: r, paymentStatus: i, body: a, header: t }
          );
        }
        async processResponse(e) {
          let t = (e.headers.get("content-type") ?? "").includes(
            "application/json"
          )
            ? await e.json()
            : await e.text();
          return this.parsePaymentResult({
            status: e.status,
            getHeader: (t) => e.headers.get(t),
            body: t,
          });
        }
        getPaymentRequiredHooks(e) {
          let t = [...this.paymentRequiredHooks],
            r = e.extensions;
          if (!r) return t;
          for (let e of this.client.getExtensions()) {
            let n = e.transportHooks?.http?.onPaymentRequired;
            n && e.key in r && t.push((t) => n(r[e.key], t));
          }
          return t;
        }
      };
    function H(e) {
      return A(JSON.stringify(e));
    }
    function D(e) {
      if (!x.test(e)) throw Error("Invalid payment signature header");
      return JSON.parse(P(e));
    }
    function O(e) {
      return A(JSON.stringify(e));
    }
    function j(e) {
      if (!x.test(e)) throw Error("Invalid payment required header");
      return JSON.parse(P(e));
    }
    function U(e) {
      return A(JSON.stringify(e));
    }
    function L(e) {
      if (!x.test(e)) throw Error("Invalid payment response header");
      return JSON.parse(P(e));
    }
    e.s(
      [
        "HTTPFacilitatorClient",
        () => $,
        "RouteConfigurationError",
        () => C,
        "decodePaymentRequiredHeader",
        () => j,
        "decodePaymentResponseHeader",
        () => L,
        "decodePaymentSignatureHeader",
        () => D,
        "encodePaymentRequiredHeader",
        () => O,
        "encodePaymentResponseHeader",
        () => U,
        "encodePaymentSignatureHeader",
        () => H,
        "x402HTTPClient",
        () => M,
        "x402HTTPResourceServer",
        () => k,
      ],
      560051
    );
    var G = class e {
      constructor(e) {
        (this.registeredClientSchemes = new Map()),
          (this.schemeClientHookAdapters = new Map()),
          (this.policies = []),
          (this.registeredExtensions = new Map()),
          (this.beforePaymentCreationHooks = []),
          (this.afterPaymentCreationHooks = []),
          (this.onPaymentCreationFailureHooks = []),
          (this.paymentResponseHooks = []),
          (this.paymentRequirementsSelector = e || ((e, t) => t[0]));
      }
      static fromConfig(t) {
        let r = new e(t.paymentRequirementsSelector);
        return (
          t.schemes.forEach((e) => {
            1 === e.x402Version
              ? r.registerV1(e.network, e.client)
              : r.register(e.network, e.client);
          }),
          t.policies?.forEach((e) => {
            r.registerPolicy(e);
          }),
          r
        );
      }
      register(e, t) {
        return this._registerScheme(2, e, t);
      }
      registerV1(e, t) {
        return this._registerScheme(1, e, t);
      }
      registerPolicy(e) {
        return this.policies.push(e), this;
      }
      registerExtension(e) {
        return this.registeredExtensions.set(e.key, e), this;
      }
      getExtensions() {
        return Array.from(this.registeredExtensions.values());
      }
      onBeforePaymentCreation(e) {
        return this.beforePaymentCreationHooks.push(e), this;
      }
      onAfterPaymentCreation(e) {
        return this.afterPaymentCreationHooks.push(e), this;
      }
      onPaymentCreationFailure(e) {
        return this.onPaymentCreationFailureHooks.push(e), this;
      }
      onPaymentResponse(e) {
        return this.paymentResponseHooks.push(e), this;
      }
      async handlePaymentResponse(e) {
        for (let t of this.getLabeledHooks(
          "onPaymentResponse",
          e.paymentPayload.x402Version,
          e.requirements,
          e.paymentRequired?.extensions ?? e.paymentPayload.extensions
        )) {
          let r = await t(e);
          if (r && "recovered" in r && r.recovered) return { recovered: !0 };
        }
      }
      async createPaymentPayload(e) {
        let t = this.registeredClientSchemes.get(e.x402Version);
        if (!t)
          throw Error(
            `No client registered for x402 version: ${e.x402Version}`
          );
        let r = this.selectPaymentRequirements(e.x402Version, e.accepts),
          n = { paymentRequired: e, selectedRequirements: r };
        for (let t of this.getLabeledHooks(
          "beforePaymentCreation",
          e.x402Version,
          r,
          e.extensions
        )) {
          let e = await t(n);
          if (e && "abort" in e && e.abort)
            throw Error(`Payment creation aborted: ${e.reason}`);
        }
        try {
          let a,
            i = E(t, r.scheme, r.network);
          if (!i)
            throw Error(
              `No client registered for scheme: ${r.scheme} and network: ${r.network}`
            );
          let s = await i.createPaymentPayload(e.x402Version, r, {
            extensions: e.extensions,
          });
          if (1 == s.x402Version) a = s;
          else {
            let t = this.mergeExtensions(e.extensions, s.extensions);
            a = {
              x402Version: s.x402Version,
              payload: s.payload,
              extensions: t,
              resource: e.resource,
              accepted: r,
            };
          }
          a = await this.enrichPaymentPayloadWithExtensions(a, e);
          let o = { ...n, paymentPayload: a };
          for (let t of this.getLabeledHooks(
            "afterPaymentCreation",
            e.x402Version,
            r,
            e.extensions
          ))
            await t(o);
          return a;
        } catch (a) {
          let t = { ...n, error: a };
          for (let n of this.getLabeledHooks(
            "onPaymentCreationFailure",
            e.x402Version,
            r,
            e.extensions
          )) {
            let e = await n(t);
            if (e && "recovered" in e && e.recovered) return e.payload;
          }
          throw a;
        }
      }
      mergeExtensions(e, t) {
        if (!t) return e;
        if (!e) return t;
        let r = { ...e };
        for (let [e, n] of Object.entries(t)) {
          let t = r[e];
          if (
            null === t ||
            "object" != typeof t ||
            Array.isArray(t) ||
            null === n ||
            "object" != typeof n ||
            Array.isArray(n)
          ) {
            r[e] = n;
            continue;
          }
          let a = { ...t },
            i = [{ target: a, source: n }];
          for (let e of i)
            for (let [t, r] of Object.entries(e.source)) {
              let n = e.target[t];
              if (
                null !== n &&
                "object" == typeof n &&
                !Array.isArray(n) &&
                null !== r &&
                "object" == typeof r &&
                !Array.isArray(r)
              ) {
                let a = { ...n };
                (e.target[t] = a), i.push({ target: a, source: r });
                continue;
              }
              Object.prototype.hasOwnProperty.call(e.target, t) ||
                (e.target[t] = r);
            }
          r[e] = a;
        }
        return r;
      }
      async enrichPaymentPayloadWithExtensions(e, t) {
        if (!t.extensions || 0 === this.registeredExtensions.size) return e;
        let r = e;
        for (let [e, n] of this.registeredExtensions)
          e in t.extensions &&
            n.enrichPaymentPayload &&
            (r = await n.enrichPaymentPayload(r, t));
        return {
          ...r,
          extensions: this.mergeExtensions(t.extensions, r.extensions),
        };
      }
      selectPaymentRequirements(e, t) {
        let r = this.registeredClientSchemes.get(e);
        if (!r) throw Error(`No client registered for x402 version: ${e}`);
        let n = t.filter((e) => {
          let t = v(r, e.network);
          return !!t && t.has(e.scheme);
        });
        if (0 === n.length)
          throw Error(
            `No network/scheme registered for x402 version: ${e} which comply with the payment requirements. ${JSON.stringify(
              {
                x402Version: e,
                paymentRequirements: t,
                x402Versions: Array.from(this.registeredClientSchemes.keys()),
                networks: Array.from(r.keys()),
                schemes: Array.from(r.values())
                  .map((e) => Array.from(e.keys()))
                  .flat(),
              }
            )}`
          );
        let a = n;
        for (let t of this.policies)
          if (0 === (a = t(e, a)).length)
            throw Error(
              `All payment requirements were filtered out by policies for x402 version: ${e}`
            );
        return this.paymentRequirementsSelector(e, a);
      }
      _registerScheme(e, t, r) {
        this.registeredClientSchemes.has(e) ||
          this.registeredClientSchemes.set(e, new Map());
        let n = this.registeredClientSchemes.get(e);
        n.has(t) || n.set(t, new Map()),
          n.get(t).set(r.scheme, r),
          this.schemeClientHookAdapters.has(e) ||
            this.schemeClientHookAdapters.set(e, new Map());
        let a = this.schemeClientHookAdapters.get(e);
        a.has(t) || a.set(t, new Map());
        let i = a.get(t),
          s = r.schemeHooks;
        if (!s) return i.delete(r.scheme), this;
        let o = {};
        return (
          s.onBeforePaymentCreation &&
            (o.beforePaymentCreation = s.onBeforePaymentCreation),
          s.onAfterPaymentCreation &&
            (o.afterPaymentCreation = s.onAfterPaymentCreation),
          s.onPaymentCreationFailure &&
            (o.onPaymentCreationFailure = s.onPaymentCreationFailure),
          s.onPaymentResponse && (o.onPaymentResponse = s.onPaymentResponse),
          Object.keys(o).length > 0 ? i.set(r.scheme, o) : i.delete(r.scheme),
          this
        );
      }
      getLabeledHooks(e, t, r, n) {
        let a;
        switch (e) {
          case "beforePaymentCreation":
            a = this.beforePaymentCreationHooks;
            break;
          case "afterPaymentCreation":
            a = this.afterPaymentCreationHooks;
            break;
          case "onPaymentCreationFailure":
            a = this.onPaymentCreationFailureHooks;
            break;
          case "onPaymentResponse":
            a = this.paymentResponseHooks;
        }
        let i = [...a],
          s = this.schemeClientHookAdapters.get(t),
          o = s ? E(s, r.scheme, r.network) : void 0,
          c = o?.[e];
        if ((void 0 !== c && i.push(c), !n)) return i;
        let u = this.getClientExtensionHookKey(e);
        for (let [e, t] of this.registeredExtensions) {
          if (!(e in n)) continue;
          let r = t.hooks?.[u];
          r && i.push(async (t) => r(n[e], t));
        }
        return i;
      }
      getClientExtensionHookKey(e) {
        switch (e) {
          case "beforePaymentCreation":
            return "onBeforePaymentCreation";
          case "afterPaymentCreation":
            return "onAfterPaymentCreation";
          case "onPaymentCreationFailure":
            return "onPaymentCreationFailure";
          case "onPaymentResponse":
            return "onPaymentResponse";
        }
      }
    };
    e.s(["x402Client", () => G], 658264);
  },
  472119,
  801819,
  (e) => {
    "use strict";
    e.s(["hashTypedData", () => b], 472119);
    var t = e.i(376145),
      r = e.i(648387),
      n = e.i(968974),
      a = e.i(827677);
    e.s(
      [
        "getTypesForEIP712Domain",
        () => g,
        "serializeTypedData",
        () => h,
        "validateTypedData",
        () => y,
      ],
      801819
    );
    var i = e.i(891380),
      s = e.i(360235),
      o = e.i(518356),
      c = e.i(824219);
    class u extends c.BaseError {
      constructor({ domain: e }) {
        super(`Invalid domain "${(0, o.stringify)(e)}".`, {
          metaMessages: ["Must be a valid EIP-712 domain."],
        });
      }
    }
    class l extends c.BaseError {
      constructor({ primaryType: e, types: t }) {
        super(
          `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
            Object.keys(t)
          )}\`.`,
          {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."],
          }
        );
      }
    }
    class d extends c.BaseError {
      constructor({ type: e }) {
        super(`Struct type "${e}" is invalid.`, {
          metaMessages: ["Struct type must not be a Solidity type."],
          name: "InvalidStructTypeError",
        });
      }
    }
    var f = e.i(307729),
      p = e.i(320478),
      m = e.i(371784);
    function h(e) {
      let { domain: t, message: r, primaryType: n, types: a } = e,
        i = (e, t) => {
          let r = { ...t };
          for (let t of e) {
            let { name: e, type: n } = t;
            "address" === n && (r[e] = r[e].toLowerCase());
          }
          return r;
        },
        s = a.EIP712Domain && t ? i(a.EIP712Domain, t) : {},
        c = (() => {
          if ("EIP712Domain" !== n) return i(a[n], r);
        })();
      return (0, o.stringify)({
        domain: s,
        message: c,
        primaryType: n,
        types: a,
      });
    }
    function y(e) {
      let { domain: t, message: r, primaryType: a, types: o } = e,
        c = (e, t) => {
          for (let r of e) {
            let { name: e, type: a } = r,
              u = t[e],
              l = a.match(m.integerRegex);
            if (l && ("number" == typeof u || "bigint" == typeof u)) {
              let [e, t, r] = l;
              (0, n.numberToHex)(u, {
                signed: "int" === t,
                size: Number.parseInt(r, 10) / 8,
              });
            }
            if ("address" === a && "string" == typeof u && !(0, f.isAddress)(u))
              throw new s.InvalidAddressError({ address: u });
            let h = a.match(m.bytesRegex);
            if (h) {
              let [e, t] = h;
              if (t && (0, p.size)(u) !== Number.parseInt(t, 10))
                throw new i.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(t, 10),
                  givenSize: (0, p.size)(u),
                });
            }
            let y = o[a];
            y &&
              ((function (e) {
                if (
                  "address" === e ||
                  "bool" === e ||
                  "string" === e ||
                  e.startsWith("bytes") ||
                  e.startsWith("uint") ||
                  e.startsWith("int")
                )
                  throw new d({ type: e });
              })(a),
              c(y, u));
          }
        };
      if (o.EIP712Domain && t) {
        if ("object" != typeof t) throw new u({ domain: t });
        c(o.EIP712Domain, t);
      }
      if ("EIP712Domain" !== a)
        if (o[a]) c(o[a], r);
        else throw new l({ primaryType: a, types: o });
    }
    function g({ domain: e }) {
      return [
        "string" == typeof e?.name && { name: "name", type: "string" },
        e?.version && { name: "version", type: "string" },
        ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
          name: "chainId",
          type: "uint256",
        },
        e?.verifyingContract && { name: "verifyingContract", type: "address" },
        e?.salt && { name: "salt", type: "bytes32" },
      ].filter(Boolean);
    }
    function b(e) {
      let { domain: t = {}, message: n, primaryType: i } = e,
        s = { EIP712Domain: g({ domain: t }), ...e.types };
      y({ domain: t, message: n, primaryType: i, types: s });
      let o = ["0x1901"];
      return (
        t &&
          o.push(
            (function ({ domain: e, types: t }) {
              return w({ data: e, primaryType: "EIP712Domain", types: t });
            })({ domain: t, types: s })
          ),
        "EIP712Domain" !== i &&
          o.push(w({ data: n, primaryType: i, types: s })),
        (0, a.keccak256)((0, r.concat)(o))
      );
    }
    function w({ data: e, primaryType: r, types: i }) {
      let s = (function e({ data: r, primaryType: i, types: s }) {
        let o = [{ type: "bytes32" }],
          c = [
            (function ({ primaryType: e, types: t }) {
              let r = (0, n.toHex)(
                (function ({ primaryType: e, types: t }) {
                  let r = "",
                    n = (function e(
                      { primaryType: t, types: r },
                      n = new Set()
                    ) {
                      let a = t.match(/^\w*/u),
                        i = a?.[0];
                      if (n.has(i) || void 0 === r[i]) return n;
                      for (let t of (n.add(i), r[i]))
                        e({ primaryType: t.type, types: r }, n);
                      return n;
                    })({ primaryType: e, types: t });
                  for (let a of (n.delete(e), [e, ...Array.from(n).sort()]))
                    r += `${a}(${t[a]
                      .map(({ name: e, type: t }) => `${t} ${e}`)
                      .join(",")})`;
                  return r;
                })({ primaryType: e, types: t })
              );
              return (0, a.keccak256)(r);
            })({ primaryType: i, types: s }),
          ];
        for (let u of s[i]) {
          let [i, l] = (function r({ types: i, name: s, type: o, value: c }) {
            if (void 0 !== i[o])
              return [
                { type: "bytes32" },
                (0, a.keccak256)(e({ data: c, primaryType: o, types: i })),
              ];
            if ("bytes" === o)
              return [{ type: "bytes32" }, (0, a.keccak256)(c)];
            if ("string" === o)
              return [{ type: "bytes32" }, (0, a.keccak256)((0, n.toHex)(c))];
            if (o.lastIndexOf("]") === o.length - 1) {
              let e = o.slice(0, o.lastIndexOf("[")),
                n = c.map((t) => r({ name: s, type: e, types: i, value: t }));
              return [
                { type: "bytes32" },
                (0, a.keccak256)(
                  (0, t.encodeAbiParameters)(
                    n.map(([e]) => e),
                    n.map(([, e]) => e)
                  )
                ),
              ];
            }
            return [{ type: o }, c];
          })({ types: s, name: u.name, type: u.type, value: r[u.name] });
          o.push(i), c.push(l);
        }
        return (0, t.encodeAbiParameters)(o, c);
      })({ data: e, primaryType: r, types: i });
      return (0, a.keccak256)(s);
    }
  },
  675103,
  (e) => {
    "use strict";
    var t = e.i(93431),
      r = e.i(827677),
      n = e.i(413236),
      a = e.i(320478),
      i = e.i(378379),
      s = e.i(968974);
    async function o({ hash: t, signature: r }) {
      let o = (0, n.isHex)(t) ? t : (0, s.toHex)(t),
        { secp256k1: u } = await e.A(683354),
        l = (() => {
          if ("object" == typeof r && "r" in r && "s" in r) {
            let { r: e, s: t, v: n, yParity: a } = r,
              s = c(Number(a ?? n));
            return new u.Signature(
              (0, i.hexToBigInt)(e),
              (0, i.hexToBigInt)(t)
            ).addRecoveryBit(s);
          }
          let e = (0, n.isHex)(r) ? r : (0, s.toHex)(r);
          if (65 !== (0, a.size)(e)) throw Error("invalid signature length");
          let t = c((0, i.hexToNumber)(`0x${e.slice(130)}`));
          return u.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
        })()
          .recoverPublicKey(o.substring(2))
          .toHex(!1);
      return `0x${l}`;
    }
    function c(e) {
      if (0 === e || 1 === e) return e;
      if (27 === e) return 0;
      if (28 === e) return 1;
      throw Error("Invalid yParityOrV value");
    }
    async function u({ hash: e, signature: n }) {
      var a;
      let i;
      return (
        (a = await o({ hash: e, signature: n })),
        (i = (0, r.keccak256)(`0x${a.substring(4)}`).substring(26)),
        (0, t.checksumAddress)(`0x${i}`)
      );
    }
    e.s(["recoverAddress", () => u], 675103);
  },
  153422,
  239892,
  504308,
  620207,
  22138,
  (e) => {
    "use strict";
    var t = e.i(472119),
      r = e.i(675103),
      n = e.i(746501),
      a = e.i(93431),
      i = e.i(794713),
      s = e.i(764911);
    function o(e) {
      if (
        "0x6492649264926492649264926492649264926492649264926492649264926492" !==
        (0, s.sliceHex)(e, -32)
      )
        return { signature: e };
      let [t, r, n] = (0, i.decodeAbiParameters)(
        [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
        e
      );
      return { address: t, data: r, signature: n };
    }
    async function c(e, t, r) {
      let a,
        i = o(t),
        s = !!(
          i.address &&
          i.data &&
          !(0, n.isAddressEqual)(
            i.address,
            "0x0000000000000000000000000000000000000000"
          )
        ),
        c = s ? i.signature : t,
        u = s ? { factoryAddress: i.address, factoryCalldata: i.data } : void 0;
      try {
        a = await e.getCode({ address: r });
      } catch {
        a = void 0;
      }
      let l = !!(a && "0x" !== a);
      return {
        isCounterfactual: s && !l,
        isDeployedAtPayer: l,
        hasDeploymentInfo: s,
        innerSignature: c,
        eip6492Deployment: u,
      };
    }
    e.s(["parseErc6492Signature", () => o], 239892);
    var u = [
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
    ];
    async function l(e, r) {
      let n;
      try {
        n = (0, t.hashTypedData)({
          domain: r.domain,
          types: r.types,
          primaryType: r.primaryType,
          message: r.message,
        });
      } catch {
        return !1;
      }
      return d(e, r.address, n, r.signature);
    }
    async function d(e, t, r, n) {
      var a, i, s, o, c;
      let u;
      try {
        u = await e.getCode({ address: t });
      } catch {
        return !1;
      }
      return (
        (a = e),
        (i = t),
        (s = u),
        (o = r),
        (c = n),
        s && "0x" !== s ? p(a, i, o, c) : f(i, o, c)
      );
    }
    async function f(e, t, i) {
      if (130 !== (i.startsWith("0x") ? i.slice(2) : i).length) return !1;
      try {
        let s = await (0, r.recoverAddress)({ hash: t, signature: i });
        return (0, n.isAddressEqual)(
          (0, a.getAddress)(s),
          (0, a.getAddress)(e)
        );
      } catch {
        return !1;
      }
    }
    async function p(e, t, r, n) {
      try {
        let a = await e.readContract({
          address: t,
          abi: u,
          functionName: "isValidSignature",
          args: [r, n],
        });
        if ("string" != typeof a) return !1;
        return a.toLowerCase().startsWith("0x1626ba7e");
      } catch {
        return !1;
      }
    }
    e.s(
      ["classifyErc6492Payer", () => c, "verifyTypedDataSignature", () => l],
      153422
    ),
      e.s(
        [
          "ErrEip2612AssetMismatch",
          () => "eip2612_asset_mismatch",
          "ErrEip2612DeadlineExpired",
          () => "eip2612_deadline_expired",
          "ErrEip2612FromMismatch",
          () => "eip2612_from_mismatch",
          "ErrEip2612SpenderNotPermit2",
          () => "eip2612_spender_not_permit2",
          "ErrEip3009InsufficientBalance",
          () => "invalid_exact_evm_insufficient_balance",
          "ErrEip3009NonceAlreadyUsed",
          () => "invalid_exact_evm_nonce_already_used",
          "ErrEip3009NotSupported",
          () => "invalid_exact_evm_eip3009_not_supported",
          "ErrEip3009SimulationFailed",
          () => "invalid_exact_evm_transaction_simulation_failed",
          "ErrEip3009TokenNameMismatch",
          () => "invalid_exact_evm_token_name_mismatch",
          "ErrEip3009TokenVersionMismatch",
          () => "invalid_exact_evm_token_version_mismatch",
          "ErrErc20ApprovalAssetMismatch",
          () => "erc20_approval_asset_mismatch",
          "ErrErc20ApprovalFromMismatch",
          () => "erc20_approval_from_mismatch",
          "ErrErc20ApprovalInvalidFormat",
          () => "invalid_erc20_approval_extension_format",
          "ErrErc20ApprovalSpenderNotPermit2",
          () => "erc20_approval_spender_not_permit2",
          "ErrErc20ApprovalTxFailed",
          () => "erc20_approval_tx_failed",
          "ErrErc20ApprovalTxInvalidCalldata",
          () => "erc20_approval_tx_invalid_calldata",
          "ErrErc20ApprovalTxInvalidSignature",
          () => "erc20_approval_tx_invalid_signature",
          "ErrErc20ApprovalTxParseFailed",
          () => "erc20_approval_tx_parse_failed",
          "ErrErc20ApprovalTxSignerMismatch",
          () => "erc20_approval_tx_signer_mismatch",
          "ErrErc20ApprovalTxWrongSelector",
          () => "erc20_approval_tx_wrong_selector",
          "ErrErc20ApprovalTxWrongSpender",
          () => "erc20_approval_tx_wrong_spender",
          "ErrErc20ApprovalTxWrongTarget",
          () => "erc20_approval_tx_wrong_target",
          "ErrFactoryNotAllowed",
          () => "eip6492_factory_not_allowed",
          "ErrInvalidAuthorizationValue",
          () => "invalid_exact_evm_authorization_value",
          "ErrInvalidEip2612ExtensionFormat",
          () => "invalid_eip2612_extension_format",
          "ErrInvalidScheme",
          () => "invalid_exact_evm_scheme",
          "ErrInvalidSignature",
          () => "invalid_exact_evm_signature",
          "ErrInvalidTransactionState",
          () => "invalid_transaction_state",
          "ErrMissingEip712Domain",
          () => "invalid_exact_evm_missing_eip712_domain",
          "ErrNetworkMismatch",
          () => "invalid_exact_evm_network_mismatch",
          "ErrPermit2612AmountMismatch",
          () => "permit2_2612_amount_mismatch",
          "ErrPermit2AllowanceRequired",
          () => "permit2_allowance_required",
          "ErrPermit2InsufficientBalance",
          () => "permit2_insufficient_balance",
          "ErrPermit2InvalidAmount",
          () => "permit2_invalid_amount",
          "ErrPermit2InvalidDestination",
          () => "permit2_invalid_destination",
          "ErrPermit2InvalidNonce",
          () => "permit2_invalid_nonce",
          "ErrPermit2InvalidOwner",
          () => "permit2_invalid_owner",
          "ErrPermit2InvalidSignature",
          () => "invalid_permit2_signature",
          "ErrPermit2PaymentTooEarly",
          () => "permit2_payment_too_early",
          "ErrPermit2ProxyNotDeployed",
          () => "permit2_proxy_not_deployed",
          "ErrPermit2SimulationFailed",
          () => "permit2_simulation_failed",
          "ErrRecipientMismatch",
          () => "invalid_exact_evm_recipient_mismatch",
          "ErrSmartWalletDeploymentFailed",
          () => "smart_wallet_deployment_failed",
          "ErrTransactionFailed",
          () => "invalid_exact_evm_transaction_failed",
          "ErrValidAfterInFuture",
          () => "invalid_exact_evm_payload_authorization_valid_after",
          "ErrValidBeforeExpired",
          () => "invalid_exact_evm_payload_authorization_valid_before",
        ],
        504308
      );
    var m = {
        TransferWithAuthorization: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "value", type: "uint256" },
          { name: "validAfter", type: "uint256" },
          { name: "validBefore", type: "uint256" },
          { name: "nonce", type: "bytes32" },
        ],
      },
      h = {
        PermitWitnessTransferFrom: [
          { name: "permitted", type: "TokenPermissions" },
          { name: "spender", type: "address" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
          { name: "witness", type: "Witness" },
        ],
        TokenPermissions: [
          { name: "token", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        Witness: [
          { name: "to", type: "address" },
          { name: "validAfter", type: "uint256" },
        ],
      },
      y = [
        {
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "value", type: "uint256" },
            { name: "validAfter", type: "uint256" },
            { name: "validBefore", type: "uint256" },
            { name: "nonce", type: "bytes32" },
            { name: "v", type: "uint8" },
            { name: "r", type: "bytes32" },
            { name: "s", type: "bytes32" },
          ],
          name: "transferWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "value", type: "uint256" },
            { name: "validAfter", type: "uint256" },
            { name: "validBefore", type: "uint256" },
            { name: "nonce", type: "bytes32" },
            { name: "signature", type: "bytes" },
          ],
          name: "transferWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "authorizer", type: "address" },
            { name: "nonce", type: "bytes32" },
          ],
          name: "authorizationState",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      g = {
        Permit: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
          { name: "value", type: "uint256" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      },
      b = [
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "owner", type: "address" }],
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
        },
      ],
      w = [
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
        },
      ],
      v = [
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
          stateMutability: "view",
        },
      ];
    e.s(
      [
        "DEFAULT_MAX_FEE_PER_GAS",
        () => 1000000000n,
        "DEFAULT_MAX_PRIORITY_FEE_PER_GAS",
        () => 100000000n,
        "ERC20_APPROVE_GAS_LIMIT",
        () => 70000n,
        "PERMIT2_ADDRESS",
        () => "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        "authorizationTypes",
        () => m,
        "eip2612NoncesAbi",
        () => b,
        "eip2612PermitTypes",
        () => g,
        "eip3009ABI",
        () => y,
        "erc20AllowanceAbi",
        () => v,
        "erc20ApproveAbi",
        () => w,
        "permit2WitnessTypes",
        () => h,
        "x402ExactPermit2ProxyAddress",
        () => "0x402085c248EeA27D92E8b30b2C58ed07f9E20001",
      ],
      620207
    );
    var E = e.i(968974);
    function x(e) {
      if (e.startsWith("eip155:")) {
        let t = parseInt(e.split(":")[1], 10);
        if (isNaN(t)) throw Error(`Invalid CAIP-2 chain ID: ${e}`);
        return t;
      }
      throw Error(
        `Unsupported network format: ${e} (expected eip155:CHAIN_ID)`
      );
    }
    function A() {
      let e = globalThis.crypto;
      if (!e) throw Error("Crypto API not available");
      return e;
    }
    function P() {
      return (0, E.toHex)(A().getRandomValues(new Uint8Array(32)));
    }
    function T() {
      let e = A().getRandomValues(new Uint8Array(32));
      return BigInt((0, E.toHex)(e)).toString();
    }
    e.s(
      [
        "createNonce",
        () => P,
        "createPermit2Nonce",
        () => T,
        "getEvmChainId",
        () => x,
      ],
      22138
    );
  },
  709635,
  337532,
  869336,
  718428,
  886456,
  277563,
  4038,
  737395,
  21668,
  212647,
  392853,
  513191,
  864e3,
  287192,
  (e) => {
    "use strict";
    var t = e.i(372152),
      r = e.i(737114),
      n = e.i(432901),
      a = e.i(93431),
      i = e.i(465074),
      s = e.i(320478),
      o = e.i(340903),
      c = e.i(968974),
      u = e.i(824219),
      l = e.i(669623);
    function d(e) {
      if (!(e instanceof u.BaseError)) return !1;
      let t = e.walk((e) => e instanceof l.ContractFunctionRevertedError);
      return (
        t instanceof l.ContractFunctionRevertedError &&
        (t.data?.errorName === "HttpError" ||
          t.data?.errorName === "ResolverError" ||
          t.data?.errorName === "ResolverNotContract" ||
          t.data?.errorName === "ResolverNotFound" ||
          t.data?.errorName === "ReverseAddressMismatch" ||
          t.data?.errorName === "UnsupportedResolverProfile")
      );
    }
    var f = e.i(403068),
      p = e.i(648387),
      m = e.i(995701),
      h = e.i(827677),
      y = e.i(413236);
    function g(e) {
      if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
        return null;
      let t = `0x${e.slice(1, 65)}`;
      return (0, y.isHex)(t) ? t : null;
    }
    function b(e) {
      let t = new Uint8Array(32).fill(0);
      if (!e) return (0, c.bytesToHex)(t);
      let r = e.split(".");
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let n = g(r[e]),
          a = n
            ? (0, m.toBytes)(n)
            : (0, h.keccak256)((0, m.stringToBytes)(r[e]), "bytes");
        t = (0, h.keccak256)((0, p.concat)([t, a]), "bytes");
      }
      return (0, c.bytesToHex)(t);
    }
    function w(e) {
      let t = e.replace(/^\.|\.$/gm, "");
      if (0 === t.length) return new Uint8Array(1);
      let r = new Uint8Array((0, m.stringToBytes)(t).byteLength + 2),
        n = 0,
        a = t.split(".");
      for (let e = 0; e < a.length; e++) {
        var i;
        let t = (0, m.stringToBytes)(a[e]);
        t.byteLength > 255 &&
          (t = (0, m.stringToBytes)(
            ((i = (function (e) {
              let t = new Uint8Array(32).fill(0);
              return e
                ? g(e) || (0, h.keccak256)((0, m.stringToBytes)(e))
                : (0, c.bytesToHex)(t);
            })(a[e])),
            `[${i.slice(2)}]`)
          )),
          (r[n] = t.length),
          r.set(t, n + 1),
          (n += t.length + 1);
      }
      return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
    }
    function v(e, t, r) {
      let n = e[t.name];
      if ("function" == typeof n) return n;
      let a = e[r];
      return "function" == typeof a ? a : (r) => t(e, r);
    }
    e.s(["getAction", () => v], 337532);
    var E = e.i(891380),
      x = e.i(518722),
      A = e.i(381835);
    function P(
      e,
      { abi: t, address: r, args: n, docsPath: a, functionName: i, sender: s }
    ) {
      let o =
          e instanceof l.RawContractError
            ? e
            : e instanceof u.BaseError
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
        { code: c, data: d, details: f, message: p, shortMessage: m } = o,
        h =
          e instanceof E.AbiDecodingZeroDataError
            ? new l.ContractFunctionZeroDataError({ functionName: i, cause: e })
            : ([3, A.InternalRpcError.code].includes(c) &&
                (d || f || p || m)) ||
              (c === A.InvalidInputRpcError.code &&
                "execution reverted" === f &&
                d)
            ? new l.ContractFunctionRevertedError({
                abi: t,
                data: "object" == typeof d ? d.data : d,
                functionName: i,
                message: o instanceof x.RpcRequestError ? f : m ?? p,
                cause: e,
              })
            : e;
      return new l.ContractFunctionExecutionError(h, {
        abi: t,
        args: n,
        contractAddress: r,
        docsPath: a,
        functionName: i,
        sender: s,
      });
    }
    e.s(["getContractError", () => P], 869336);
    var T = e.i(765399);
    async function C(e, t) {
      let { abi: a, address: i, args: s, functionName: o, ...c } = t,
        u = (0, n.encodeFunctionData)({ abi: a, args: s, functionName: o });
      try {
        let { data: t } = await v(e, T.call, "call")({ ...c, data: u, to: i });
        return (0, r.decodeFunctionResult)({
          abi: a,
          args: s,
          functionName: o,
          data: t || "0x",
        });
      } catch (e) {
        throw P(e, {
          abi: a,
          address: i,
          args: s,
          docsPath: "/docs/contract/readContract",
          functionName: o,
        });
      }
    }
    async function R(e, u) {
      let {
          blockNumber: l,
          blockTag: p,
          coinType: m,
          name: h,
          gatewayUrls: y,
          strict: g,
        } = u,
        { chain: E } = e,
        x = (() => {
          if (u.universalResolverAddress) return u.universalResolverAddress;
          if (!E)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, i.getChainContractAddress)({
            blockNumber: l,
            chain: E,
            contract: "ensUniversalResolver",
          });
        })(),
        A = E?.ensTlds;
      if (A && !A.some((e) => h.endsWith(e))) return null;
      let P = null != m ? [b(h), BigInt(m)] : [b(h)];
      try {
        let i = (0, n.encodeFunctionData)({
            abi: t.addressResolverAbi,
            functionName: "addr",
            args: P,
          }),
          u = {
            address: x,
            abi: t.universalResolverResolveAbi,
            functionName: "resolveWithGateways",
            args: [(0, c.toHex)(w(h)), i, y ?? [f.localBatchGatewayUrl]],
            blockNumber: l,
            blockTag: p,
          },
          d = v(e, C, "readContract"),
          g = await d(u);
        if ("0x" === g[0]) return null;
        let b = (function ({ coinType: e, data: n, args: i }) {
          try {
            return (0, r.decodeFunctionResult)({
              abi: t.addressResolverAbi,
              args: i,
              functionName: "addr",
              data: n,
            });
          } catch (r) {
            if (null == e) throw r;
            let t = (0, o.trim)(n);
            if (20 === (0, s.size)(t)) return (0, a.getAddress)(t);
            throw r;
          }
        })({ coinType: m, data: g[0], args: P });
        if ("0x" === b || "0x00" === (0, o.trim)(b)) return null;
        return b;
      } catch (e) {
        if (g) throw e;
        if (d(e)) return null;
        throw e;
      }
    }
    e.s(["readContract", () => C], 718428),
      e.s(["getEnsAddress", () => R], 709635);
    var k = u;
    class B extends k.BaseError {
      constructor({ data: e }) {
        super(
          "Unable to extract image from metadata. The metadata may be malformed or invalid.",
          {
            metaMessages: [
              "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
              "",
              `Provided data: ${JSON.stringify(e)}`,
            ],
            name: "EnsAvatarInvalidMetadataError",
          }
        );
      }
    }
    class S extends k.BaseError {
      constructor({ reason: e }) {
        super(`ENS NFT avatar URI is invalid. ${e}`, {
          name: "EnsAvatarInvalidNftUriError",
        });
      }
    }
    class I extends k.BaseError {
      constructor({ uri: e }) {
        super(
          `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
          { name: "EnsAvatarUriResolutionError" }
        );
      }
    }
    class N extends k.BaseError {
      constructor({ namespace: e }) {
        super(
          `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
          { name: "EnsAvatarUnsupportedNamespaceError" }
        );
      }
    }
    k.BaseError;
    let _ =
        /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
      F =
        /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
      z = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
      q = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
    async function $(e) {
      try {
        let t = await fetch(e, { method: "HEAD" });
        if (200 === t.status) {
          let e = t.headers.get("content-type");
          return e?.startsWith("image/");
        }
        return !1;
      } catch (t) {
        if (
          ("object" == typeof t && void 0 !== t.response) ||
          !Object.hasOwn(globalThis, "Image")
        )
          return !1;
        return new Promise((t) => {
          let r = new Image();
          (r.onload = () => {
            t(!0);
          }),
            (r.onerror = () => {
              t(!1);
            }),
            (r.src = e);
        });
      }
    }
    function M(e, t) {
      return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
    }
    function H({ uri: e, gatewayUrls: t }) {
      let r = z.test(e);
      if (r) return { uri: e, isOnChain: !0, isEncoded: r };
      let n = M(t?.ipfs, "https://ipfs.io"),
        a = M(t?.arweave, "https://arweave.net"),
        i = e.match(_),
        {
          protocol: s,
          subpath: o,
          target: c,
          subtarget: u = "",
        } = i?.groups || {},
        l = "ipns:/" === s || "ipns/" === o,
        d = "ipfs:/" === s || "ipfs/" === o || F.test(e);
      if (e.startsWith("http") && !l && !d) {
        let r = e;
        return (
          t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
          { uri: r, isOnChain: !1, isEncoded: !1 }
        );
      }
      if ((l || d) && c)
        return {
          uri: `${n}/${l ? "ipns" : "ipfs"}/${c}${u}`,
          isOnChain: !1,
          isEncoded: !1,
        };
      if ("ar:/" === s && c)
        return { uri: `${a}/${c}${u || ""}`, isOnChain: !1, isEncoded: !1 };
      let f = e.replace(q, "");
      if (
        (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
        f.startsWith("data:") || f.startsWith("{"))
      )
        return { uri: f, isOnChain: !0, isEncoded: !1 };
      throw new I({ uri: e });
    }
    function D(e) {
      if (
        "object" != typeof e ||
        (!("image" in e) && !("image_url" in e) && !("image_data" in e))
      )
        throw new B({ data: e });
      return e.image || e.image_url || e.image_data;
    }
    async function O({ gatewayUrls: e, uri: t }) {
      try {
        let r = await fetch(t).then((e) => e.json());
        return await j({ gatewayUrls: e, uri: D(r) });
      } catch {
        throw new I({ uri: t });
      }
    }
    async function j({ gatewayUrls: e, uri: t }) {
      let { uri: r, isOnChain: n } = H({ uri: t, gatewayUrls: e });
      if (n || (await $(r))) return r;
      throw new I({ uri: t });
    }
    async function U(e, { nft: t }) {
      if ("erc721" === t.namespace)
        return C(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "tokenURI",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "tokenId", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "tokenURI",
          args: [BigInt(t.tokenID)],
        });
      if ("erc1155" === t.namespace)
        return C(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "uri",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "_id", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "uri",
          args: [BigInt(t.tokenID)],
        });
      throw new N({ namespace: t.namespace });
    }
    async function L(e, { gatewayUrls: t, record: r }) {
      return /eip155:/i.test(r)
        ? G(e, { gatewayUrls: t, record: r })
        : j({ uri: r, gatewayUrls: t });
    }
    async function G(e, { gatewayUrls: t, record: r }) {
      let n = (function (e) {
          let t = e;
          t.startsWith("did:nft:") &&
            (t = t.replace("did:nft:", "").replace(/_/g, "/"));
          let [r, n, a] = t.split("/"),
            [i, s] = r.split(":"),
            [o, c] = n.split(":");
          if (!i || "eip155" !== i.toLowerCase())
            throw new S({ reason: "Only EIP-155 supported" });
          if (!s) throw new S({ reason: "Chain ID not found" });
          if (!c) throw new S({ reason: "Contract address not found" });
          if (!a) throw new S({ reason: "Token ID not found" });
          if (!o) throw new S({ reason: "ERC namespace not found" });
          return {
            chainID: Number.parseInt(s, 10),
            namespace: o.toLowerCase(),
            contractAddress: c,
            tokenID: a,
          };
        })(r),
        {
          uri: a,
          isOnChain: i,
          isEncoded: s,
        } = H({ uri: await U(e, { nft: n }), gatewayUrls: t });
      if (
        i &&
        (a.includes("data:application/json;base64,") || a.startsWith("{"))
      )
        return j({
          uri: D(
            JSON.parse(
              s ? atob(a.replace("data:application/json;base64,", "")) : a
            )
          ),
          gatewayUrls: t,
        });
      let o = n.tokenID;
      return (
        "erc1155" === n.namespace &&
          (o = o.replace("0x", "").padStart(64, "0")),
        O({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, o) })
      );
    }
    async function V(e, a) {
      let {
          blockNumber: s,
          blockTag: o,
          key: u,
          name: l,
          gatewayUrls: p,
          strict: m,
        } = a,
        { chain: h } = e,
        y = (() => {
          if (a.universalResolverAddress) return a.universalResolverAddress;
          if (!h)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, i.getChainContractAddress)({
            blockNumber: s,
            chain: h,
            contract: "ensUniversalResolver",
          });
        })(),
        g = h?.ensTlds;
      if (g && !g.some((e) => l.endsWith(e))) return null;
      try {
        let a = {
            address: y,
            abi: t.universalResolverResolveAbi,
            args: [
              (0, c.toHex)(w(l)),
              (0, n.encodeFunctionData)({
                abi: t.textResolverAbi,
                functionName: "text",
                args: [b(l), u],
              }),
              p ?? [f.localBatchGatewayUrl],
            ],
            functionName: "resolveWithGateways",
            blockNumber: s,
            blockTag: o,
          },
          i = v(e, C, "readContract"),
          d = await i(a);
        if ("0x" === d[0]) return null;
        let m = (0, r.decodeFunctionResult)({
          abi: t.textResolverAbi,
          functionName: "text",
          data: d[0],
        });
        return "" === m ? null : m;
      } catch (e) {
        if (m) throw e;
        if (d(e)) return null;
        throw e;
      }
    }
    async function W(
      e,
      {
        blockNumber: t,
        blockTag: r,
        assetGatewayUrls: n,
        name: a,
        gatewayUrls: i,
        strict: s,
        universalResolverAddress: o,
      }
    ) {
      let c = await v(
        e,
        V,
        "getEnsText"
      )({
        blockNumber: t,
        blockTag: r,
        key: "avatar",
        name: a,
        universalResolverAddress: o,
        gatewayUrls: i,
        strict: s,
      });
      if (!c) return null;
      try {
        return await L(e, { record: c, gatewayUrls: n });
      } catch {
        return null;
      }
    }
    async function J(e, r) {
      let {
          address: n,
          blockNumber: a,
          blockTag: s,
          coinType: o = 60n,
          gatewayUrls: c,
          strict: u,
        } = r,
        { chain: l } = e,
        p = (() => {
          if (r.universalResolverAddress) return r.universalResolverAddress;
          if (!l)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, i.getChainContractAddress)({
            blockNumber: a,
            chain: l,
            contract: "ensUniversalResolver",
          });
        })();
      try {
        let r = {
            address: p,
            abi: t.universalResolverReverseAbi,
            args: [n, o, c ?? [f.localBatchGatewayUrl]],
            functionName: "reverseWithGateways",
            blockNumber: a,
            blockTag: s,
          },
          i = v(e, C, "readContract"),
          [u] = await i(r);
        return u || null;
      } catch (e) {
        if (u) throw e;
        if (d(e)) return null;
        throw e;
      }
    }
    async function K(e, t) {
      let { blockNumber: r, blockTag: n, name: a } = t,
        { chain: s } = e,
        o = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!s)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, i.getChainContractAddress)({
            blockNumber: r,
            chain: s,
            contract: "ensUniversalResolver",
          });
        })(),
        u = s?.ensTlds;
      if (u && !u.some((e) => a.endsWith(e)))
        throw Error(
          `${a} is not a valid ENS TLD (${u?.join(", ")}) for chain "${
            s.name
          }" (id: ${s.id}).`
        );
      let [l] = await v(
        e,
        C,
        "readContract"
      )({
        address: o,
        abi: [
          {
            inputs: [{ type: "bytes" }],
            name: "findResolver",
            outputs: [
              { type: "address" },
              { type: "bytes32" },
              { type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "findResolver",
        args: [(0, c.toHex)(w(a))],
        blockNumber: r,
        blockTag: n,
      });
      return l;
    }
    e.s(["getEnsText", () => V], 886456),
      e.s(["getEnsAvatar", () => W], 277563),
      e.s(["getEnsName", () => J], 4038),
      e.s(["getEnsResolver", () => K], 737395);
    var Z = e.i(834058),
      Y = e.i(422855),
      Q = e.i(39393),
      X = e.i(759151),
      ee = e.i(188444);
    async function et(e, t) {
      let {
          account: r = e.account,
          blockNumber: n,
          blockTag: a = "latest",
          blobs: i,
          data: s,
          gas: o,
          gasPrice: l,
          maxFeePerBlobGas: d,
          maxFeePerGas: f,
          maxPriorityFeePerGas: p,
          to: m,
          value: h,
          ...y
        } = t,
        g = r ? (0, Z.parseAccount)(r) : void 0;
      try {
        (0, ee.assertRequest)(t);
        let r = "bigint" == typeof n ? (0, c.numberToHex)(n) : void 0,
          b = e.chain?.formatters?.transactionRequest?.format,
          w = (b || X.formatTransactionRequest)(
            {
              ...(0, Q.extract)(y, { format: b }),
              account: g,
              blobs: i,
              data: s,
              gas: o,
              gasPrice: l,
              maxFeePerBlobGas: d,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              to: m,
              value: h,
            },
            "createAccessList"
          ),
          v = await e.request({
            method: "eth_createAccessList",
            params: [w, r || a],
          });
        if (v.error) throw new u.BaseError(v.error, { details: v.error });
        return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
      } catch (r) {
        throw (0, Y.getCallError)(r, { ...t, account: g, chain: e.chain });
      }
    }
    function er(e, { method: t }) {
      let r = {};
      return (
        "fallback" === e.transport.type &&
          e.transport.onResponse?.(
            ({ method: e, response: n, status: a, transport: i }) => {
              "success" === a && t === e && (r[n] = i.request);
            }
          ),
        (t) => r[t] || e.request
      );
    }
    async function en(e) {
      let t = er(e, { method: "eth_newBlockFilter" }),
        r = await e.request({ method: "eth_newBlockFilter" });
      return { id: r, request: t(r), type: "block" };
    }
    e.s(["createAccessList", () => et], 21668),
      e.s(["createBlockFilter", () => en], 212647);
    var ea = u;
    class ei extends ea.BaseError {
      constructor(e) {
        super(`Filter type "${e}" is not supported.`, {
          name: "FilterTypeNotSupportedError",
        });
      }
    }
    var es = e.i(706729),
      eo = e.i(376145),
      ec = e.i(62865),
      eu = e.i(898349);
    let el = "/docs/contract/encodeEventTopics";
    function ed(e) {
      let { abi: t, eventName: r, args: n } = e,
        a = t[0];
      if (r) {
        let e = (0, eu.getAbiItem)({ abi: t, name: r });
        if (!e) throw new E.AbiEventNotFoundError(r, { docsPath: el });
        a = e;
      }
      if ("event" !== a.type)
        throw new E.AbiEventNotFoundError(void 0, { docsPath: el });
      let i = [];
      if (n && "inputs" in a) {
        let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
          t = Array.isArray(n)
            ? n
            : Object.values(n).length > 0
            ? e?.map((e) => n[e.name]) ?? []
            : [];
        t.length > 0 &&
          (i =
            e?.map((e, r) =>
              Array.isArray(t[r])
                ? t[r].map((n, a) => ef({ param: e, value: t[r][a] }))
                : void 0 !== t[r] && null !== t[r]
                ? ef({ param: e, value: t[r] })
                : null
            ) ?? []);
      }
      if (a.anonymous) return i;
      let s = (0, ec.formatAbiItem)(a);
      return [(0, es.toEventSelector)(s), ...i];
    }
    function ef({ param: e, value: t }) {
      if ("string" === e.type || "bytes" === e.type)
        return (0, h.keccak256)((0, m.toBytes)(t));
      if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
        throw new ei(e.type);
      return (0, eo.encodeAbiParameters)([e], [t]);
    }
    async function ep(e, t) {
      let {
          address: r,
          abi: n,
          args: a,
          eventName: i,
          fromBlock: s,
          strict: o,
          toBlock: u,
        } = t,
        l = er(e, { method: "eth_newFilter" }),
        d = i ? ed({ abi: n, args: a, eventName: i }) : void 0,
        f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: r,
              fromBlock: "bigint" == typeof s ? (0, c.numberToHex)(s) : s,
              toBlock: "bigint" == typeof u ? (0, c.numberToHex)(u) : u,
              topics: d,
            },
          ],
        });
      return {
        abi: n,
        args: a,
        eventName: i,
        id: f,
        request: l(f),
        strict: !!o,
        type: "event",
      };
    }
    async function em(
      e,
      {
        address: t,
        args: r,
        event: n,
        events: a,
        fromBlock: i,
        strict: s,
        toBlock: o,
      } = {}
    ) {
      let u = a ?? (n ? [n] : void 0),
        l = er(e, { method: "eth_newFilter" }),
        d = [];
      u &&
        ((d = [u.flatMap((e) => ed({ abi: [e], eventName: e.name, args: r }))]),
        n && (d = d[0]));
      let f = await e.request({
        method: "eth_newFilter",
        params: [
          {
            address: t,
            fromBlock: "bigint" == typeof i ? (0, c.numberToHex)(i) : i,
            toBlock: "bigint" == typeof o ? (0, c.numberToHex)(o) : o,
            ...(d.length ? { topics: d } : {}),
          },
        ],
      });
      return {
        abi: u,
        args: r,
        eventName: n ? n.name : void 0,
        fromBlock: i,
        id: f,
        request: l(f),
        strict: !!s,
        toBlock: o,
        type: "event",
      };
    }
    async function eh(e) {
      let t = er(e, { method: "eth_newPendingTransactionFilter" }),
        r = await e.request({ method: "eth_newPendingTransactionFilter" });
      return { id: r, request: t(r), type: "transaction" };
    }
    e.s(["encodeEventTopics", () => ed], 392853),
      e.s(["createContractEventFilter", () => ep], 513191),
      e.s(["createEventFilter", () => em], 864e3),
      e.s(["createPendingTransactionFilter", () => eh], 287192);
  },
  603437,
  382465,
  954761,
  14164,
  260762,
  50330,
  588998,
  687113,
  39788,
  574578,
  323335,
  580198,
  635837,
  894279,
  198034,
  567417,
  82417,
  291176,
  934133,
  551738,
  875917,
  738685,
  926692,
  292755,
  372733,
  191088,
  897549,
  995377,
  966606,
  293532,
  504374,
  951528,
  861049,
  97317,
  283517,
  322558,
  472028,
  241664,
  894651,
  506738,
  691705,
  14771,
  (e) => {
    "use strict";
    var t = e.i(834058),
      r = e.i(432901),
      n = e.i(869336),
      a = e.i(337532);
    e.s(["estimateGas", () => ee], 635837);
    var i = e.i(824219),
      s = e.i(675103),
      o = e.i(648387),
      c = e.i(995701),
      u = e.i(968974),
      l = e.i(568864),
      d = e.i(827677);
    async function f(e) {
      let { authorization: t, signature: r } = e;
      return (0, s.recoverAddress)({
        hash: (function (e) {
          let { chainId: t, nonce: r, to: n } = e,
            a = e.contractAddress ?? e.address,
            i = (0, d.keccak256)(
              (0, o.concatHex)([
                "0x05",
                (0, l.toRlp)([
                  t ? (0, u.numberToHex)(t) : "0x",
                  a,
                  r ? (0, u.numberToHex)(r) : "0x",
                ]),
              ])
            );
          return "bytes" === n ? (0, c.hexToBytes)(i) : i;
        })(t),
        signature: r ?? t,
      });
    }
    e.s(["recoverAuthorizationAddress", () => f], 382465);
    var p = e.i(705666),
      m = e.i(871676),
      h = i,
      y = e.i(503719);
    class g extends h.BaseError {
      constructor(
        e,
        {
          account: t,
          docsPath: r,
          chain: n,
          data: a,
          gas: i,
          gasPrice: s,
          maxFeePerGas: o,
          maxPriorityFeePerGas: c,
          nonce: u,
          to: l,
          value: d,
        }
      ) {
        const f = (0, y.prettyPrint)({
          from: t?.address,
          to: l,
          value:
            void 0 !== d &&
            `${(0, p.formatEther)(d)} ${n?.nativeCurrency?.symbol || "ETH"}`,
          data: a,
          gas: i,
          gasPrice: void 0 !== s && `${(0, m.formatGwei)(s)} gwei`,
          maxFeePerGas: void 0 !== o && `${(0, m.formatGwei)(o)} gwei`,
          maxPriorityFeePerGas: void 0 !== c && `${(0, m.formatGwei)(c)} gwei`,
          nonce: u,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: r,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Estimate Gas Arguments:",
            f,
          ].filter(Boolean),
          name: "EstimateGasExecutionError",
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
    var b = e.i(74023),
      w = e.i(30887),
      v = e.i(39393),
      E = e.i(759151),
      x = e.i(614771),
      A = e.i(188444);
    e.s(
      ["defaultParameters", () => Z, "prepareTransactionRequest", () => X],
      580198
    );
    var P = i;
    class T extends P.BaseError {
      constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
          name: "BaseFeeScalarError",
        });
      }
    }
    class C extends P.BaseError {
      constructor() {
        super("Chain does not support EIP-1559 fees.", {
          name: "Eip1559FeesNotSupportedError",
        });
      }
    }
    class R extends P.BaseError {
      constructor({ maxPriorityFeePerGas: e }) {
        super(
          `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
          m.formatGwei)(e)} gwei).`,
          { name: "MaxFeePerGasTooLowError" }
        );
      }
    }
    var k = e.i(378379),
      B = i;
    class S extends B.BaseError {
      constructor({ blockHash: e, blockNumber: t }) {
        let r = "Block";
        e && (r = `Block at hash "${e}"`),
          t && (r = `Block at number "${t}"`),
          super(`${r} could not be found.`, { name: "BlockNotFoundError" });
      }
    }
    e.s(["BlockNotFoundError", () => S], 954761);
    var I = e.i(769156);
    async function N(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
        includeTransactions: a,
      } = {}
    ) {
      let i = a ?? !1,
        s = void 0 !== r ? (0, u.numberToHex)(r) : void 0,
        o = null;
      if (
        !(o = t
          ? await e.request(
              { method: "eth_getBlockByHash", params: [t, i] },
              { dedupe: !0 }
            )
          : await e.request(
              { method: "eth_getBlockByNumber", params: [s || n, i] },
              { dedupe: !!s }
            ))
      )
        throw new S({ blockHash: t, blockNumber: r });
      return (e.chain?.formatters?.block?.format || I.formatBlock)(
        o,
        "getBlock"
      );
    }
    async function _(e) {
      return BigInt(await e.request({ method: "eth_gasPrice" }));
    }
    async function F(e, t) {
      return z(e, t);
    }
    async function z(e, t) {
      let { block: r, chain: n = e.chain, request: i } = t || {};
      try {
        let t = n?.fees?.maxPriorityFeePerGas ?? n?.fees?.defaultPriorityFee;
        if ("function" == typeof t) {
          let n = r || (await (0, a.getAction)(e, N, "getBlock")({})),
            s = await t({ block: n, client: e, request: i });
          if (null === s) throw Error();
          return s;
        }
        if (void 0 !== t) return t;
        let s = await e.request({ method: "eth_maxPriorityFeePerGas" });
        return (0, k.hexToBigInt)(s);
      } catch {
        let [t, n] = await Promise.all([
          r ? Promise.resolve(r) : (0, a.getAction)(e, N, "getBlock")({}),
          (0, a.getAction)(e, _, "getGasPrice")({}),
        ]);
        if ("bigint" != typeof t.baseFeePerGas) throw new C();
        let i = n - t.baseFeePerGas;
        if (i < 0n) return 0n;
        return i;
      }
    }
    async function q(e, t) {
      return $(e, t);
    }
    async function $(e, t) {
      let {
          block: r,
          chain: n = e.chain,
          request: i,
          type: s = "eip1559",
        } = t || {},
        o = await (async () =>
          "function" == typeof n?.fees?.baseFeeMultiplier
            ? n.fees.baseFeeMultiplier({ block: r, client: e, request: i })
            : n?.fees?.baseFeeMultiplier ?? 1.2)();
      if (o < 1) throw new T();
      let c = o.toString().split(".")[1]?.length ?? 0,
        u = 10 ** c,
        l = (e) => (e * BigInt(Math.ceil(o * u))) / BigInt(u),
        d = r || (await (0, a.getAction)(e, N, "getBlock")({}));
      if ("function" == typeof n?.fees?.estimateFeesPerGas) {
        let t = await n.fees.estimateFeesPerGas({
          block: r,
          client: e,
          multiply: l,
          request: i,
          type: s,
        });
        if (null !== t) return t;
      }
      if ("eip1559" === s) {
        if ("bigint" != typeof d.baseFeePerGas) throw new C();
        let t =
            "bigint" == typeof i?.maxPriorityFeePerGas
              ? i.maxPriorityFeePerGas
              : await z(e, { block: d, chain: n, request: i }),
          r = l(d.baseFeePerGas);
        return {
          maxFeePerGas: i?.maxFeePerGas ?? r + t,
          maxPriorityFeePerGas: t,
        };
      }
      return {
        gasPrice:
          i?.gasPrice ?? l(await (0, a.getAction)(e, _, "getGasPrice")({})),
      };
    }
    e.s(["getBlock", () => N], 14164),
      e.s(["getGasPrice", () => _], 260762),
      e.s(
        [
          "estimateMaxPriorityFeePerGas",
          () => F,
          "internal_estimateMaxPriorityFeePerGas",
          () => z,
        ],
        50330
      ),
      e.s(
        ["estimateFeesPerGas", () => q, "internal_estimateFeesPerGas", () => $],
        588998
      );
    var M = e.i(774284);
    async function H(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
      }
    ) {
      let s = (0, M.formatBlockParameter)({
          blockHash: r,
          blockNumber: n,
          blockTag: a,
          requireCanonical: i,
        }),
        o = await e.request(
          { method: "eth_getTransactionCount", params: [t, s] },
          { dedupe: "bigint" == typeof n || void 0 !== r }
        );
      return (0, k.hexToNumber)(o);
    }
    e.s(["getTransactionCount", () => H], 687113);
    var D = e.i(822877),
      O = e.i(498640),
      j = e.i(352882),
      U = e.i(34462),
      L = e.i(713062),
      G = e.i(658818);
    function V(e, { docsPath: t, ...r }) {
      let n,
        a =
          (n = (0, w.getNodeError)(e, r)) instanceof b.UnknownNodeError ? e : n;
      return new y.TransactionExecutionError(a, { docsPath: t, ...r });
    }
    e.s(["getTransactionError", () => V], 39788);
    var W = e.i(789705);
    async function J(e) {
      let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
      return (0, k.hexToNumber)(t);
    }
    async function K(e, r) {
      let {
          account: n = e.account,
          accessList: i,
          authorizationList: s,
          chain: o = e.chain,
          blobVersionedHashes: c,
          blobs: u,
          data: l,
          gas: d,
          gasPrice: f,
          maxFeePerBlobGas: p,
          maxFeePerGas: m,
          maxPriorityFeePerGas: h,
          nonce: y,
          nonceManager: g,
          to: b,
          type: w,
          value: x,
          ...P
        } = r,
        C = await (async () => {
          if (!n || !g || void 0 !== y) return y;
          let r = (0, t.parseAccount)(n),
            i = o ? o.id : await (0, a.getAction)(e, J, "getChainId")({});
          return await g.consume({ address: r.address, chainId: i, client: e });
        })();
      (0, A.assertRequest)(r);
      let R = o?.formatters?.transactionRequest?.format,
        k = (R || E.formatTransactionRequest)(
          {
            ...(0, v.extract)(P, { format: R }),
            account: n ? (0, t.parseAccount)(n) : void 0,
            accessList: i,
            authorizationList: s,
            blobs: u,
            blobVersionedHashes: c,
            data: l,
            gas: d,
            gasPrice: f,
            maxFeePerBlobGas: p,
            maxFeePerGas: m,
            maxPriorityFeePerGas: h,
            nonce: C,
            to: b,
            type: w,
            value: x,
          },
          "fillTransaction"
        );
      try {
        let t = await e.request({ method: "eth_fillTransaction", params: [k] }),
          n = (o?.formatters?.transaction?.format || W.formatTransaction)(t.tx);
        delete n.blockHash,
          delete n.blockNumber,
          delete n.r,
          delete n.s,
          delete n.transactionIndex,
          delete n.v,
          delete n.yParity,
          (n.data = n.input),
          n.gas && (n.gas = r.gas ?? n.gas),
          n.gasPrice && (n.gasPrice = r.gasPrice ?? n.gasPrice),
          n.maxFeePerBlobGas &&
            (n.maxFeePerBlobGas = r.maxFeePerBlobGas ?? n.maxFeePerBlobGas),
          n.maxFeePerGas && (n.maxFeePerGas = r.maxFeePerGas ?? n.maxFeePerGas),
          n.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas =
              r.maxPriorityFeePerGas ?? n.maxPriorityFeePerGas),
          void 0 !== n.nonce && (n.nonce = r.nonce ?? n.nonce);
        let i = await (async () => {
          if ("function" == typeof o?.fees?.baseFeeMultiplier) {
            let t = await (0, a.getAction)(e, N, "getBlock")({});
            return o.fees.baseFeeMultiplier({
              block: t,
              client: e,
              request: r,
            });
          }
          return o?.fees?.baseFeeMultiplier ?? 1.2;
        })();
        if (i < 1) throw new T();
        let s = i.toString().split(".")[1]?.length ?? 0,
          c = 10 ** s,
          u = (e) => (e * BigInt(Math.ceil(i * c))) / BigInt(c);
        return (
          n.feePayerSignature ||
            (n.maxFeePerGas &&
              !r.maxFeePerGas &&
              (n.maxFeePerGas = u(n.maxFeePerGas)),
            n.gasPrice && !r.gasPrice && (n.gasPrice = u(n.gasPrice))),
          {
            raw: t.raw,
            transaction: { from: k.from, ...n },
            ...(t.capabilities ? { capabilities: t.capabilities } : {}),
          }
        );
      } catch (t) {
        throw V(t, { ...r, chain: e.chain });
      }
    }
    e.s(["getChainId", () => J], 574578),
      e.s(["fillTransaction", () => K], 323335);
    let Z = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
      Y = new Map(),
      Q = new L.LruMap(128);
    async function X(e, r) {
      let n,
        i,
        s = r;
      (s.account ??= e.account), (s.parameters ??= Z);
      let {
          account: o,
          chain: c = e.chain,
          nonceManager: u,
          parameters: l,
        } = s,
        d =
          "function" == typeof c?.prepareTransactionRequest
            ? {
                fn: c.prepareTransactionRequest,
                runAt: ["beforeFillTransaction"],
              }
            : Array.isArray(c?.prepareTransactionRequest)
            ? {
                fn: c.prepareTransactionRequest[0],
                runAt: c.prepareTransactionRequest[1].runAt,
              }
            : void 0;
      async function f() {
        return n
          ? n
          : void 0 !== s.chainId
          ? s.chainId
          : c
          ? c.id
          : (n = await (0, a.getAction)(e, J, "getChainId")({}));
      }
      let p = o ? (0, t.parseAccount)(o) : o,
        m = s.nonce;
      if (l.includes("nonce") && void 0 === m && p && u) {
        let t = await f();
        m = await u.consume({ address: p.address, chainId: t, client: e });
      }
      d?.fn &&
        d.runAt?.includes("beforeFillTransaction") &&
        ((s = await d.fn(
          { ...s, chain: c },
          { client: e, phase: "beforeFillTransaction" }
        )),
        (m ??= s.nonce));
      let h =
        (!(l.includes("blobVersionedHashes") || l.includes("sidecars")) ||
          !s.kzg ||
          !s.blobs) &&
        !1 !== Q.get(e.uid) &&
        ["fees", "gas"].some((e) => l.includes(e)) &&
        ((l.includes("chainId") && "number" != typeof s.chainId) ||
          (l.includes("nonce") && "number" != typeof m) ||
          (l.includes("fees") &&
            "bigint" != typeof s.gasPrice &&
            ("bigint" != typeof s.maxFeePerGas ||
              "bigint" != typeof s.maxPriorityFeePerGas)) ||
          (l.includes("gas") && "bigint" != typeof s.gas))
          ? await (0, a.getAction)(
              e,
              K,
              "fillTransaction"
            )({ ...s, nonce: m })
              .then((t) => {
                let {
                    chainId: r,
                    from: n,
                    gas: a,
                    gasPrice: i,
                    nonce: o,
                    maxFeePerBlobGas: c,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    type: d,
                    ...f
                  } = t.transaction,
                  p = "feeToken" in f ? f.feeToken : void 0,
                  m =
                    "feePayerSignature" in f &&
                    null !== f.feePayerSignature &&
                    void 0 !== f.feePayerSignature,
                  h = null != p && (!("feeToken" in s) || m);
                return (
                  Q.set(e.uid, !0),
                  {
                    ...s,
                    ...(n ? { from: n } : {}),
                    ...(d && !s.type ? { type: d } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== a ? { gas: a } : {}),
                    ...(void 0 !== i ? { gasPrice: i } : {}),
                    ...(void 0 !== o ? { nonce: o } : {}),
                    ...(void 0 !== c &&
                    "legacy" !== s.type &&
                    "eip2930" !== s.type
                      ? { maxFeePerBlobGas: c }
                      : {}),
                    ...(void 0 !== u &&
                    "legacy" !== s.type &&
                    "eip2930" !== s.type
                      ? { maxFeePerGas: u }
                      : {}),
                    ...(void 0 !== l &&
                    "legacy" !== s.type &&
                    "eip2930" !== s.type
                      ? { maxPriorityFeePerGas: l }
                      : {}),
                    ...("nonceKey" in f && void 0 !== f.nonceKey
                      ? { nonceKey: f.nonceKey }
                      : {}),
                    ...("keyAuthorization" in f &&
                    void 0 !== f.keyAuthorization &&
                    null !== f.keyAuthorization &&
                    !("keyAuthorization" in s)
                      ? { keyAuthorization: f.keyAuthorization }
                      : {}),
                    ...("feePayerSignature" in f &&
                    void 0 !== f.feePayerSignature &&
                    null !== f.feePayerSignature
                      ? { feePayerSignature: f.feePayerSignature }
                      : {}),
                    ...(h ? { feeToken: p } : {}),
                    ...(t.capabilities
                      ? { _capabilities: t.capabilities }
                      : {}),
                  }
                );
              })
              .catch((t) => {
                if ("TransactionExecutionError" !== t.name) return s;
                if (t.walk?.((e) => "ExecutionRevertedError" === e.name))
                  throw t;
                return (
                  t.walk?.(
                    (e) =>
                      "MethodNotFoundRpcError" === e.name ||
                      "MethodNotSupportedRpcError" === e.name ||
                      e.message?.includes(
                        "eth_fillTransaction is not available"
                      )
                  ) && Q.set(e.uid, !1),
                  s
                );
              })
          : s;
      m ??= h.nonce;
      let {
        blobs: y,
        gas: g,
        kzg: b,
        type: w,
      } = (s = {
        ...h,
        ...(p ? { from: p?.address } : {}),
        ...(void 0 !== m ? { nonce: m } : {}),
      });
      async function v() {
        return (
          i ||
          (i = await (0, a.getAction)(e, N, "getBlock")({ blockTag: "latest" }))
        );
      }
      if (
        (d?.fn &&
          d.runAt?.includes("beforeFillParameters") &&
          (s = await d.fn(
            { ...s, chain: c },
            { client: e, phase: "beforeFillParameters" }
          )),
        l.includes("nonce") &&
          void 0 === m &&
          p &&
          !u &&
          (s.nonce = await (0, a.getAction)(
            e,
            H,
            "getTransactionCount"
          )({ address: p.address, blockTag: "pending" })),
        (l.includes("blobVersionedHashes") || l.includes("sidecars")) && y && b)
      ) {
        let e = (0, D.blobsToCommitments)({ blobs: y, kzg: b });
        if (l.includes("blobVersionedHashes")) {
          let t = (0, j.commitmentsToVersionedHashes)({
            commitments: e,
            to: "hex",
          });
          s.blobVersionedHashes = t;
        }
        if (l.includes("sidecars")) {
          let t = (0, O.blobsToProofs)({ blobs: y, commitments: e, kzg: b }),
            r = (0, U.toBlobSidecars)({
              blobs: y,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          s.sidecars = r;
        }
      }
      if (
        (l.includes("chainId") && (s.chainId = await f()),
        (l.includes("fees") || l.includes("type")) && void 0 === w)
      )
        try {
          s.type = (0, G.getTransactionType)(s);
        } catch {
          let t = Y.get(e.uid);
          if (void 0 === t) {
            let r = await v();
            (t = "bigint" == typeof r?.baseFeePerGas), Y.set(e.uid, t);
          }
          s.type = t ? "eip1559" : "legacy";
        }
      if (l.includes("fees"))
        if ("legacy" !== s.type && "eip2930" !== s.type) {
          if (void 0 === s.maxFeePerGas || void 0 === s.maxPriorityFeePerGas) {
            let t = await v(),
              { maxFeePerGas: r, maxPriorityFeePerGas: n } = await $(e, {
                block: t,
                chain: c,
                request: s,
              });
            if (
              void 0 === s.maxPriorityFeePerGas &&
              s.maxFeePerGas &&
              s.maxFeePerGas < n
            )
              throw new R({ maxPriorityFeePerGas: n });
            (s.maxPriorityFeePerGas = n), (s.maxFeePerGas = r);
          }
        } else {
          if (void 0 !== s.maxFeePerGas || void 0 !== s.maxPriorityFeePerGas)
            throw new C();
          if (void 0 === s.gasPrice) {
            let t = await v(),
              { gasPrice: r } = await $(e, {
                block: t,
                chain: c,
                request: s,
                type: "legacy",
              });
            s.gasPrice = r;
          }
        }
      return (
        l.includes("gas") &&
          void 0 === g &&
          (s.gas = await (0, a.getAction)(
            e,
            ee,
            "estimateGas"
          )({
            ...s,
            account: p,
            prepare: p?.type === "local" ? [] : ["blobVersionedHashes"],
          })),
        d?.fn &&
          d.runAt?.includes("afterFillParameters") &&
          (s = await d.fn(
            { ...s, chain: c },
            { client: e, phase: "afterFillParameters" }
          )),
        (0, A.assertRequest)(s),
        delete s.parameters,
        s
      );
    }
    async function ee(e, r) {
      let { account: n = e.account, prepare: a = !0 } = r,
        s = n ? (0, t.parseAccount)(n) : void 0,
        o = Array.isArray(a)
          ? a
          : s?.type !== "local"
          ? ["blobVersionedHashes"]
          : void 0;
      try {
        let t = await (async () =>
            r.to
              ? r.to
              : r.authorizationList && r.authorizationList.length > 0
              ? await f({ authorization: r.authorizationList[0] }).catch(() => {
                  throw new i.BaseError(
                    "`to` is required. Could not infer from `authorizationList`"
                  );
                })
              : void 0)(),
          {
            accessList: n,
            authorizationList: c,
            blobs: l,
            blobVersionedHashes: d,
            blockNumber: p,
            blockTag: m,
            data: h,
            gas: y,
            gasPrice: g,
            maxFeePerBlobGas: b,
            maxFeePerGas: w,
            maxPriorityFeePerGas: P,
            nonce: T,
            value: C,
            stateOverride: R,
            ...k
          } = a ? await X(e, { ...r, parameters: o, to: t }) : r;
        if (y && r.gas !== y) return y;
        let B = ("bigint" == typeof p ? (0, u.numberToHex)(p) : void 0) || m,
          S = (0, x.serializeStateOverride)(R);
        (0, A.assertRequest)(r);
        let I = e.chain?.formatters?.transactionRequest?.format,
          N = (I || E.formatTransactionRequest)(
            {
              ...(0, v.extract)(k, { format: I }),
              account: s,
              accessList: n,
              authorizationList: c,
              blobs: l,
              blobVersionedHashes: d,
              data: h,
              gasPrice: g,
              maxFeePerBlobGas: b,
              maxFeePerGas: w,
              maxPriorityFeePerGas: P,
              nonce: T,
              to: t,
              value: C,
            },
            "estimateGas"
          );
        return BigInt(
          await e.request({
            method: "eth_estimateGas",
            params: S
              ? [N, B ?? e.experimental_blockTag ?? "latest", S]
              : B
              ? [N, B]
              : [N],
          })
        );
      } catch (t) {
        throw (function (e, { docsPath: t, ...r }) {
          let n;
          return new g(
            (n = (0, w.getNodeError)(e, r)) instanceof b.UnknownNodeError
              ? e
              : n,
            { docsPath: t, ...r }
          );
        })(t, { ...r, account: s, chain: e.chain });
      }
    }
    async function et(e, i) {
      let {
          abi: s,
          address: o,
          args: c,
          functionName: u,
          dataSuffix: l = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...d
        } = i,
        f = (0, r.encodeFunctionData)({ abi: s, args: c, functionName: u });
      try {
        return await (0, a.getAction)(
          e,
          ee,
          "estimateGas"
        )({ data: `${f}${l ? l.replace("0x", "") : ""}`, to: o, ...d });
      } catch (r) {
        let e = d.account ? (0, t.parseAccount)(d.account) : void 0;
        throw (0, n.getContractError)(r, {
          abi: s,
          address: o,
          args: c,
          docsPath: "/docs/contract/estimateContractGas",
          functionName: u,
          sender: e?.address,
        });
      }
    }
    e.s(["estimateContractGas", () => et], 603437);
    var er = e.i(372152),
      en = e.i(737114),
      ea = e.i(765399);
    async function ei(
      e,
      {
        address: t,
        blockHash: n,
        blockNumber: i,
        blockTag: s = e.experimental_blockTag ?? "latest",
        requireCanonical: o,
      }
    ) {
      let c = (0, M.formatBlockParameter)({
        blockHash: n,
        blockNumber: i,
        blockTag: s,
        requireCanonical: o,
      });
      if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
        let c = e.chain.contracts.multicall3.address,
          u = (0, r.encodeFunctionData)({
            abi: er.multicall3Abi,
            functionName: "getEthBalance",
            args: [t],
          }),
          { data: l } = await (0, a.getAction)(
            e,
            ea.call,
            "call"
          )({
            to: c,
            data: u,
            blockHash: n,
            blockNumber: i,
            blockTag: s,
            requireCanonical: o,
          });
        return (0, en.decodeFunctionResult)({
          abi: er.multicall3Abi,
          functionName: "getEthBalance",
          args: [t],
          data: l || "0x",
        });
      }
      return BigInt(
        await e.request({ method: "eth_getBalance", params: [t, c] })
      );
    }
    async function es(e) {
      return BigInt(await e.request({ method: "eth_blobBaseFee" }));
    }
    e.s(["getBalance", () => ei], 894279),
      e.s(["getBlobBaseFee", () => es], 198034);
    let eo = new Map(),
      ec = new Map();
    async function eu(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
      let n,
        a,
        i,
        s =
          ((a = (n = (e, t) => ({
            clear: () => t.delete(e),
            get: () => t.get(e),
            set: (r) => t.set(e, r),
          }))(t, eo)),
          {
            clear: () => {
              a.clear(), i.clear();
            },
            promise: a,
            response: (i = n(t, ec)),
          }),
        o = s.response.get();
      if (o && r > 0 && Date.now() - o.created.getTime() < r) return o.data;
      let c = s.promise.get();
      c || ((c = e()), s.promise.set(c));
      try {
        let e = await c;
        return s.response.set({ created: new Date(), data: e }), e;
      } finally {
        s.promise.clear();
      }
    }
    async function el(e, { cacheTime: t = e.cacheTime } = {}) {
      let r;
      return BigInt(
        await eu(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: ((r = e.uid), `blockNumber.${r}`),
          cacheTime: t,
        })
      );
    }
    e.s(["getBlockNumber", () => el], 567417);
    var ed = e.i(180416);
    async function ef(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
      } = {}
    ) {
      let a = void 0 !== r ? (0, u.numberToHex)(r) : void 0,
        i = await e.request(
          { method: "eth_getBlockReceipts", params: [t || a || n] },
          { dedupe: !!(t || a) }
        );
      if (!i) throw new S({ blockHash: t, blockNumber: r });
      let s =
        e.chain?.formatters?.transactionReceipt?.format ||
        ed.formatTransactionReceipt;
      return i.map((e) => s(e, "getBlockReceipts"));
    }
    async function ep(
      e,
      { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}
    ) {
      let a,
        i = void 0 !== r ? (0, u.numberToHex)(r) : void 0;
      return (
        (a = t
          ? await e.request(
              { method: "eth_getBlockTransactionCountByHash", params: [t] },
              { dedupe: !0 }
            )
          : await e.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [i || n],
              },
              { dedupe: !!i }
            )),
        (0, k.hexToNumber)(a)
      );
    }
    async function em(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
      }
    ) {
      let s = (0, M.formatBlockParameter)({
          blockHash: r,
          blockNumber: n,
          blockTag: a,
          requireCanonical: i,
        }),
        o = await e.request(
          { method: "eth_getCode", params: [t, s] },
          { dedupe: "bigint" == typeof n || void 0 !== r }
        );
      if ("0x" !== o) return o;
    }
    e.s(["getBlockReceipts", () => ef], 82417),
      e.s(["getBlockTransactionCount", () => ep], 291176),
      e.s(["getCode", () => em], 934133);
    var eh = e.i(898349),
      ey = e.i(392853),
      eg = e.i(746501),
      eb = e.i(327458),
      ew = e.i(706729),
      ev = e.i(891380),
      eE = e.i(589005),
      ex = e.i(320478),
      eA = e.i(794713),
      eP = e.i(62865);
    let eT = "/docs/contract/decodeEventLog";
    function eC(e) {
      let { abi: t, data: r, strict: n, topics: a } = e,
        i = n ?? !0,
        [s, ...o] = a;
      if (!s) throw new ev.AbiEventSignatureEmptyTopicsError({ docsPath: eT });
      let c = t.find(
        (e) =>
          "event" === e.type &&
          s === (0, ew.toEventSelector)((0, eP.formatAbiItem)(e))
      );
      if (!(c && "name" in c) || "event" !== c.type)
        throw new ev.AbiEventSignatureNotFoundError(s, { docsPath: eT });
      let { name: u, inputs: l } = c,
        d = l?.some((e) => !("name" in e && e.name)),
        f = d ? [] : {},
        p = l
          .map((e, t) => [e, t])
          .filter(([e]) => "indexed" in e && e.indexed),
        m = [];
      for (let e = 0; e < p.length; e++) {
        let [t, r] = p[e],
          n = o[e];
        if (!n) {
          if (i) throw new ev.DecodeLogTopicsMismatch({ abiItem: c, param: t });
          m.push([t, r]);
          continue;
        }
        f[d ? r : t.name || r] = (function ({ param: e, value: t }) {
          return "string" === e.type ||
            "bytes" === e.type ||
            "tuple" === e.type ||
            e.type.match(/^(.*)\[(\d+)?\]$/)
            ? t
            : ((0, eA.decodeAbiParameters)([e], t) || [])[0];
        })({ param: t, value: n });
      }
      let h = l.filter((e) => !("indexed" in e && e.indexed)),
        y = i ? h : [...m.map(([e]) => e), ...h];
      if (y.length > 0) {
        if (r && "0x" !== r)
          try {
            let e = (0, eA.decodeAbiParameters)(y, r);
            if (e) {
              let t = 0;
              if (!i) for (let [r, n] of m) f[d ? n : r.name || n] = e[t++];
              if (d)
                for (let r = 0; r < l.length; r++)
                  void 0 === f[r] && t < e.length && (f[r] = e[t++]);
              else for (let r = 0; r < h.length; r++) f[h[r].name] = e[t++];
            }
          } catch (e) {
            if (i) {
              if (
                e instanceof ev.AbiDecodingDataSizeTooSmallError ||
                e instanceof eE.PositionOutOfBoundsError
              )
                throw new ev.DecodeLogDataMismatch({
                  abiItem: c,
                  data: r,
                  params: y,
                  size: (0, ex.size)(r),
                });
              throw e;
            }
          }
        else if (i)
          throw new ev.DecodeLogDataMismatch({
            abiItem: c,
            data: "0x",
            params: y,
            size: 0,
          });
      }
      return { eventName: u, args: Object.values(f).length > 0 ? f : void 0 };
    }
    function eR(e) {
      let { abi: t, args: r, logs: n, strict: a = !0 } = e,
        i = (() => {
          if (e.eventName)
            return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
        })(),
        s = t
          .filter((e) => "event" === e.type)
          .map((e) => ({ abi: e, selector: (0, ew.toEventSelector)(e) }));
      return n
        .map((e) => {
          let t,
            n,
            o = "string" == typeof e.blockNumber ? (0, eb.formatLog)(e) : e,
            u = s.filter((e) => o.topics[0] === e.selector);
          if (0 === u.length) return null;
          for (let e of u)
            try {
              (t = eC({ ...o, abi: [e.abi], strict: !0 })), (n = e);
              break;
            } catch {}
          if (!t && !a) {
            n = u[0];
            try {
              t = eC({
                data: o.data,
                topics: o.topics,
                abi: [n.abi],
                strict: !1,
              });
            } catch {
              let e = n.abi.inputs?.some((e) => !("name" in e && e.name));
              return { ...o, args: e ? [] : {}, eventName: n.abi.name };
            }
          }
          return t &&
            n &&
            (!i || i.includes(t.eventName)) &&
            (function (e) {
              let { args: t, inputs: r, matchArgs: n } = e;
              if (!n) return !0;
              if (!t) return !1;
              function a(e, t, r) {
                try {
                  if ("address" === e.type) return (0, eg.isAddressEqual)(t, r);
                  if ("string" === e.type || "bytes" === e.type)
                    return (0, d.keccak256)((0, c.toBytes)(t)) === r;
                  return t === r;
                } catch {
                  return !1;
                }
              }
              return Array.isArray(t) && Array.isArray(n)
                ? n.every((e, n) => {
                    if (null == e) return !0;
                    let i = r[n];
                    return (
                      !!i &&
                      (Array.isArray(e) ? e : [e]).some((e) => a(i, e, t[n]))
                    );
                  })
                : !(
                    "object" != typeof t ||
                    Array.isArray(t) ||
                    "object" != typeof n ||
                    Array.isArray(n)
                  ) &&
                    Object.entries(n).every(([e, n]) => {
                      if (null == n) return !0;
                      let i = r.find((t) => t.name === e);
                      return (
                        !!i &&
                        (Array.isArray(n) ? n : [n]).some((r) => a(i, r, t[e]))
                      );
                    });
            })({ args: t.args, inputs: n.abi.inputs, matchArgs: r })
            ? { ...t, ...o }
            : null;
        })
        .filter(Boolean);
    }
    async function ek(
      e,
      {
        address: t,
        blockHash: r,
        fromBlock: n,
        toBlock: a,
        event: i,
        events: s,
        args: o,
        strict: c,
      } = {}
    ) {
      let l = s ?? (i ? [i] : void 0),
        d = [];
      l &&
        ((d = [
          l.flatMap((e) =>
            (0, ey.encodeEventTopics)({
              abi: [e],
              eventName: e.name,
              args: s ? void 0 : o,
            })
          ),
        ]),
        i && (d = d[0]));
      let f = (
        r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: d, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: d,
                  fromBlock: "bigint" == typeof n ? (0, u.numberToHex)(n) : n,
                  toBlock: "bigint" == typeof a ? (0, u.numberToHex)(a) : a,
                },
              ],
            })
      ).map((e) => (0, eb.formatLog)(e));
      return l ? eR({ abi: l, args: o, logs: f, strict: c ?? !1 }) : f;
    }
    async function eB(e, t) {
      let {
          abi: r,
          address: n,
          args: i,
          blockHash: s,
          eventName: o,
          fromBlock: c,
          toBlock: u,
          strict: l,
        } = t,
        d = o ? (0, eh.getAbiItem)({ abi: r, name: o }) : void 0,
        f = d ? void 0 : r.filter((e) => "event" === e.type);
      return (0, a.getAction)(
        e,
        ek,
        "getLogs"
      )({
        address: n,
        args: i,
        blockHash: s,
        event: d,
        events: f,
        fromBlock: c,
        toBlock: u,
        strict: l,
      });
    }
    e.s(["decodeEventLog", () => eC], 551738),
      e.s(["parseEventLogs", () => eR], 875917),
      e.s(["getLogs", () => ek], 738685),
      e.s(["getContractEvents", () => eB], 926692);
    var eS = e.i(93431),
      eI = e.i(764911);
    async function eN(
      e,
      { address: t, blockNumber: r, blockTag: n = "latest" }
    ) {
      let a = await em(e, {
        address: t,
        ...(void 0 !== r ? { blockNumber: r } : { blockTag: n }),
      });
      if (a && 23 === (0, ex.size)(a) && a.startsWith("0xef0100"))
        return (0, eS.getAddress)((0, eI.slice)(a, 3, 23));
    }
    e.s(["getDelegation", () => eN], 292755);
    var e_ = i;
    class eF extends e_.BaseError {
      constructor({ address: e }) {
        super(`No EIP-712 domain found on contract "${e}".`, {
          metaMessages: [
            "Ensure that:",
            `- The contract is deployed at the address "${e}".`,
            "- `eip712Domain()` function exists on the contract.",
            "- `eip712Domain()` function matches signature to ERC-5267 specification.",
          ],
          name: "Eip712DomainNotFoundError",
        });
      }
    }
    var ez = e.i(718428);
    async function eq(e, t) {
      let { address: r, factory: n, factoryData: i } = t;
      try {
        let [t, s, o, c, u, l, d] = await (0, a.getAction)(
          e,
          ez.readContract,
          "readContract"
        )({
          abi: e$,
          address: r,
          functionName: "eip712Domain",
          factory: n,
          factoryData: i,
        });
        return {
          domain: {
            name: s,
            version: o,
            chainId: Number(c),
            verifyingContract: u,
            salt: l,
          },
          extensions: d,
          fields: t,
        };
      } catch (e) {
        if (
          "ContractFunctionExecutionError" === e.name &&
          "ContractFunctionZeroDataError" === e.cause.name
        )
          throw new eF({ address: r });
        throw e;
      }
    }
    let e$ = [
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          { name: "fields", type: "bytes1" },
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
          { name: "salt", type: "bytes32" },
          { name: "extensions", type: "uint256[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    async function eM(
      e,
      {
        blockCount: t,
        blockNumber: r,
        blockTag: n = "latest",
        rewardPercentiles: a,
      }
    ) {
      var i;
      let s = "bigint" == typeof r ? (0, u.numberToHex)(r) : void 0;
      return {
        baseFeePerGas: (i = await e.request(
          {
            method: "eth_feeHistory",
            params: [(0, u.numberToHex)(t), s || n, a],
          },
          { dedupe: !!s }
        )).baseFeePerGas.map((e) => BigInt(e)),
        gasUsedRatio: i.gasUsedRatio,
        oldestBlock: BigInt(i.oldestBlock),
        reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
      };
    }
    async function eH(e, { filter: t }) {
      let r = "strict" in t && t.strict,
        n = await t.request({ method: "eth_getFilterChanges", params: [t.id] });
      if ("string" == typeof n[0]) return n;
      let a = n.map((e) => (0, eb.formatLog)(e));
      return "abi" in t && t.abi ? eR({ abi: t.abi, logs: a, strict: r }) : a;
    }
    async function eD(e, { filter: t }) {
      let r = t.strict ?? !1,
        n = (
          await t.request({ method: "eth_getFilterLogs", params: [t.id] })
        ).map((e) => (0, eb.formatLog)(e));
      return t.abi ? eR({ abi: t.abi, logs: n, strict: r }) : n;
    }
    async function eO(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        storageKeys: s,
      }
    ) {
      let o = (0, M.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      var c = await e.request({ method: "eth_getProof", params: [t, s, o] });
      return {
        ...c,
        balance: c.balance ? BigInt(c.balance) : void 0,
        nonce: c.nonce ? (0, k.hexToNumber)(c.nonce) : void 0,
        storageProof: c.storageProof
          ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
          : void 0,
      };
    }
    async function ej(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getRawTransactionByHash", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new y.TransactionNotFoundError({ hash: t });
      return r;
    }
    async function eU(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        slot: s,
      }
    ) {
      let o = (0, M.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      return await e.request({ method: "eth_getStorageAt", params: [t, s, o] });
    }
    async function eL(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n,
        hash: a,
        index: i,
        sender: s,
        nonce: o,
      }
    ) {
      let c = n || "latest",
        l = void 0 !== r ? (0, u.numberToHex)(r) : void 0,
        d = null;
      if (
        (a
          ? (d = await e.request(
              { method: "eth_getTransactionByHash", params: [a] },
              { dedupe: !0 }
            ))
          : t
          ? (d = await e.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, u.numberToHex)(i)],
              },
              { dedupe: !0 }
            ))
          : (l || c) && "number" == typeof i
          ? (d = await e.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [l || c, (0, u.numberToHex)(i)],
              },
              { dedupe: !!l }
            ))
          : s &&
            "number" == typeof o &&
            (d = await e.request(
              {
                method: "eth_getTransactionBySenderAndNonce",
                params: [s, (0, u.numberToHex)(o)],
              },
              { dedupe: !0 }
            )),
        !d)
      )
        throw new y.TransactionNotFoundError({
          blockHash: t,
          blockNumber: r,
          blockTag: c,
          hash: a,
          index: i,
        });
      return (e.chain?.formatters?.transaction?.format || W.formatTransaction)(
        d,
        "getTransaction"
      );
    }
    async function eG(e, { hash: t, transactionReceipt: r }) {
      let [n, i] = await Promise.all([
          (0, a.getAction)(e, el, "getBlockNumber")({}),
          t ? (0, a.getAction)(e, eL, "getTransaction")({ hash: t }) : void 0,
        ]),
        s = r?.blockNumber || i?.blockNumber;
      return s ? n - s + 1n : 0n;
    }
    async function eV(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getTransactionReceipt", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new y.TransactionReceiptNotFoundError({ hash: t });
      return (
        e.chain?.formatters?.transactionReceipt?.format ||
        ed.formatTransactionReceipt
      )(r, "getTransactionReceipt");
    }
    e.s(["getEip712Domain", () => eq], 372733),
      e.s(["getFeeHistory", () => eM], 191088),
      e.s(["getFilterChanges", () => eH], 897549),
      e.s(["getFilterLogs", () => eD], 995377),
      e.s(["getProof", () => eO], 966606),
      e.s(["getRawTransaction", () => ej], 293532),
      e.s(["getStorageAt", () => eU], 504374),
      e.s(["getTransaction", () => eL], 951528),
      e.s(["getTransactionConfirmations", () => eG], 861049),
      e.s(["getTransactionReceipt", () => eV], 97317);
    var eW = e.i(389259),
      eJ = e.i(669623),
      eK = e.i(465074);
    async function eZ(e, t) {
      let {
          account: s,
          authorizationList: o,
          allowFailure: c = !0,
          blockHash: u,
          blockNumber: l,
          blockOverrides: d,
          blockTag: f,
          requireCanonical: p,
          stateOverride: m,
        } = t,
        h = t.contracts,
        {
          batchSize: y = t.batchSize ?? 1024,
          deployless: g = t.deployless ?? !1,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        b = (() => {
          if (t.multicallAddress) return t.multicallAddress;
          if (g) return null;
          if (e.chain)
            return (0, eK.getChainContractAddress)({
              blockNumber: l,
              chain: e.chain,
              contract: "multicall3",
            });
          throw Error(
            "client chain not configured. multicallAddress is required."
          );
        })(),
        w = [[]],
        v = 0,
        E = 0;
      for (let e = 0; e < h.length; e++) {
        let { abi: t, address: a, args: i, functionName: o } = h[e];
        try {
          let e = (0, r.encodeFunctionData)({
            abi: t,
            args: i,
            functionName: o,
          });
          (E += (e.length - 2) / 2),
            y > 0 &&
              E > y &&
              w[v].length > 0 &&
              (v++, (E = (e.length - 2) / 2), (w[v] = [])),
            (w[v] = [...w[v], { allowFailure: !0, callData: e, target: a }]);
        } catch (r) {
          let e = (0, n.getContractError)(r, {
            abi: t,
            address: a,
            args: i,
            docsPath: "/docs/contract/multicall",
            functionName: o,
            sender: s,
          });
          if (!c) throw e;
          w[v] = [...w[v], { allowFailure: !0, callData: "0x", target: a }];
        }
      }
      let x = await Promise.allSettled(
          w.map((t) =>
            (0, a.getAction)(
              e,
              ez.readContract,
              "readContract"
            )({
              ...(null === b
                ? { code: eW.multicall3Bytecode }
                : { address: b }),
              abi: er.multicall3Abi,
              account: s,
              args: [t],
              authorizationList: o,
              blockHash: u,
              blockNumber: l,
              blockOverrides: d,
              blockTag: f,
              functionName: "aggregate3",
              requireCanonical: p,
              stateOverride: m,
            })
          )
        ),
        A = [];
      for (let e = 0; e < x.length; e++) {
        let t = x[e];
        if ("rejected" === t.status) {
          if (!c) throw t.reason;
          for (let r = 0; r < w[e].length; r++)
            A.push({ status: "failure", error: t.reason, result: void 0 });
          continue;
        }
        let r = t.value;
        for (let t = 0; t < r.length; t++) {
          let { returnData: a, success: i } = r[t],
            { callData: s } = w[e][t],
            { abi: o, address: u, functionName: l, args: d } = h[A.length];
          try {
            if ("0x" === s) throw new ev.AbiDecodingZeroDataError();
            if (!i) throw new eJ.RawContractError({ data: a });
            let e = (0, en.decodeFunctionResult)({
              abi: o,
              args: d,
              data: a,
              functionName: l,
            });
            A.push(c ? { result: e, status: "success" } : e);
          } catch (t) {
            let e = (0, n.getContractError)(t, {
              abi: o,
              address: u,
              args: d,
              docsPath: "/docs/contract/multicall",
              functionName: l,
            });
            if (!c) throw e;
            A.push({ error: e, result: void 0, status: "failure" });
          }
        }
      }
      if (A.length !== h.length)
        throw new i.BaseError("multicall results mismatch");
      return A;
    }
    e.s(["multicall", () => eZ], 283517);
    var eY = e.i(423562);
    async function eQ(e, a) {
      let {
        blockNumber: i,
        blockTag: s = e.experimental_blockTag ?? "latest",
        blocks: c,
        returnFullTransactions: l,
        traceTransfers: d,
        validation: f,
      } = a;
      try {
        let a = [];
        for (let e of c) {
          let n = e.blockOverrides ? eY.toRpc(e.blockOverrides) : void 0,
            i = e.calls.map((e) => {
              let n = e.account ? (0, t.parseAccount)(e.account) : void 0,
                a = e.abi ? (0, r.encodeFunctionData)(e) : e.data,
                i = {
                  ...e,
                  account: n,
                  data: e.dataSuffix
                    ? (0, o.concat)([a || "0x", e.dataSuffix])
                    : a,
                  from: e.from ?? n?.address,
                };
              return (
                (0, A.assertRequest)(i), (0, E.formatTransactionRequest)(i)
              );
            }),
            s = e.stateOverrides
              ? (0, x.serializeStateOverride)(e.stateOverrides)
              : void 0;
          a.push({ blockOverrides: n, calls: i, stateOverrides: s });
        }
        let p = "bigint" == typeof i ? (0, u.numberToHex)(i) : void 0;
        return (
          await e.request({
            method: "eth_simulateV1",
            params: [
              {
                blockStateCalls: a,
                returnFullTransactions: l,
                traceTransfers: d,
                validation: f,
              },
              p || s,
            ],
          })
        ).map((e, t) => ({
          ...(0, I.formatBlock)(e),
          calls: e.calls.map((e, r) => {
            let { abi: a, args: i, functionName: s, to: o } = c[t].calls[r],
              u = e.error?.data ?? e.returnData,
              l = BigInt(e.gasUsed),
              d = e.logs?.map((e) => (0, eb.formatLog)(e)),
              f = "0x1" === e.status ? "success" : "failure",
              p =
                a && "success" === f && "0x" !== u
                  ? (0, en.decodeFunctionResult)({
                      abi: a,
                      data: u,
                      functionName: s,
                    })
                  : null,
              m = (() => {
                let e;
                if (
                  "success" !== f &&
                  ("0x" === u
                    ? (e = new ev.AbiDecodingZeroDataError())
                    : u && (e = new eJ.RawContractError({ data: u })),
                  e)
                )
                  return (0, n.getContractError)(e, {
                    abi: a ?? [],
                    address: o ?? "0x",
                    args: i,
                    functionName: s ?? "<unknown>",
                  });
              })();
            return {
              data: u,
              gasUsed: l,
              logs: d,
              status: f,
              ...("success" === f ? { result: p } : { error: m }),
            };
          }),
        }));
      } catch (t) {
        let e = (0, w.getNodeError)(t, {});
        if (e instanceof b.UnknownNodeError) throw t;
        throw e;
      }
    }
    e.s(["simulateBlocks", () => eQ], 322558);
    var eX = e.i(601238),
      e0 = e.i(996641),
      e1 = e.i(840848),
      e2 = e.i(96157),
      e6 = e1,
      e5 = e.i(460927);
    function e3(e, t) {
      if (tn(e) > t) throw new tc({ givenSize: tn(e), maxSize: t });
    }
    function e8(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function e4(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e,
        a = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) a++;
        else break;
      return "left" === r ? n.slice(a) : n.slice(0, n.length - a);
    }
    var e9 = e.i(856330),
      e7 = e.i(112702);
    let te = new TextDecoder(),
      tt = new TextEncoder();
    function tr(e, t = {}) {
      let { size: r } = t,
        n = e;
      r && (e9.assertSize(e, r), (n = e5.padRight(e, r)));
      let a = n.slice(2);
      a.length % 2 && (a = `0${a}`);
      let i = a.length / 2,
        s = new Uint8Array(i);
      for (let e = 0, t = 0; e < i; e++) {
        let r = e8(a.charCodeAt(t++)),
          n = e8(a.charCodeAt(t++));
        if (void 0 === r || void 0 === n)
          throw new e6.BaseError(
            `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
          );
        s[e] = (r << 4) | n;
      }
      return s;
    }
    function tn(e) {
      return e.length;
    }
    function ta(e, t = {}) {
      let { size: r } = t;
      void 0 !== r && e3(e, r);
      let n = e5.fromBytes(e, t);
      return e5.toNumber(n, t);
    }
    function ti(e) {
      return e4(e, { dir: "left" });
    }
    class ts extends e6.BaseError {
      constructor(e) {
        super(`Bytes value \`${e}\` is not a valid boolean.`, {
          metaMessages: [
            "The bytes array must contain a single byte of either a `0` or `1` value.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesBooleanError",
          });
      }
    }
    class to extends e6.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? e7.stringify(e) : e
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
    class tc extends e6.BaseError {
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
    class tu extends e6.BaseError {
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
            value: "Bytes.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class tl extends e6.BaseError {
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
            value: "Bytes.SizeExceedsPaddingSizeError",
          });
      }
    }
    function td(e, t = {}) {
      var r;
      let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
        a = (0, e2.keccak_256)(
          e instanceof Uint8Array
            ? e
            : "string" == typeof e
            ? tr(e)
            : (r = e) instanceof Uint8Array
            ? r
            : new Uint8Array(r)
        );
      return "Bytes" === n ? a : e5.fromBytes(a);
    }
    class tf extends Map {
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
    let tp = { checksum: new tf(8192) }.checksum;
    var tm = e1,
      th = e1;
    function ty(e, t = {}) {
      let { compressed: r } = t,
        { prefix: n, x: a, y: i } = e;
      if (!1 === r || ("bigint" == typeof a && "bigint" == typeof i)) {
        if (4 !== n) throw new tw({ prefix: n, cause: new tE() });
        return;
      }
      if (!0 === r || ("bigint" == typeof a && void 0 === i)) {
        if (3 !== n && 2 !== n) throw new tw({ prefix: n, cause: new tv() });
        return;
      }
      throw new tb({ publicKey: e });
    }
    function tg(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new tx({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(e5.slice(e, 0, 32)),
          y: BigInt(e5.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let t = Number(e5.slice(e, 0, 1));
        return {
          prefix: t,
          x: BigInt(e5.slice(e, 1, 33)),
          y: BigInt(e5.slice(e, 33, 65)),
        };
      }
      return {
        prefix: Number(e5.slice(e, 0, 1)),
        x: BigInt(e5.slice(e, 1, 33)),
      };
    }
    class tb extends th.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e7.stringify(e)}\` is not a valid public key.`, {
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
    class tw extends th.BaseError {
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
    class tv extends th.BaseError {
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
    class tE extends th.BaseError {
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
    class tx extends th.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${e5.size(e5.from(e))} bytes.`,
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
    let tA = /^0x[a-fA-F0-9]{40}$/;
    function tP(e, t = {}) {
      let { strict: r = !0 } = t;
      if (!tA.test(e)) throw new tR({ address: e, cause: new tk() });
      if (r) {
        if (e.toLowerCase() === e) return;
        if (tT(e) !== e) throw new tR({ address: e, cause: new tB() });
      }
    }
    function tT(e) {
      if (tp.has(e)) return tp.get(e);
      tP(e, { strict: !1 });
      let t = e.substring(2).toLowerCase(),
        r = td(
          (function (e, t = {}) {
            let { size: r } = t,
              n = tt.encode(e);
            return "number" == typeof r
              ? (e3(n, r),
                (function (e, t = {}) {
                  let { dir: r, size: n = 32 } = t;
                  if (0 === n) return e;
                  if (e.length > n)
                    throw new tl({
                      size: e.length,
                      targetSize: n,
                      type: "Bytes",
                    });
                  let a = new Uint8Array(n);
                  for (let t = 0; t < n; t++) {
                    let i = "right" === r;
                    a[i ? t : n - t - 1] = e[i ? t : e.length - t - 1];
                  }
                  return a;
                })(n, { dir: "right", size: r }))
              : n;
          })(t),
          { as: "Bytes" }
        ),
        n = t.split("");
      for (let e = 0; e < 40; e += 2)
        r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
          (15 & r[e >> 1]) >= 8 &&
            n[e + 1] &&
            (n[e + 1] = n[e + 1].toUpperCase());
      let a = `0x${n.join("")}`;
      return tp.set(e, a), a;
    }
    function tC(e, t = {}) {
      let { strict: r = !0 } = t ?? {};
      try {
        return tP(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class tR extends tm.BaseError {
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
    class tk extends tm.BaseError {
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
    class tB extends tm.BaseError {
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
    function tS(e) {
      let t = !0,
        r = "",
        n = 0,
        a = "",
        i = !1;
      for (let s = 0; s < e.length; s++) {
        let o = e[s];
        if (
          (["(", ")", ","].includes(o) && (t = !0),
          "(" === o && n++,
          ")" === o && n--,
          t)
        ) {
          if (0 === n) {
            if (" " === o && ["event", "function", "error", ""].includes(a))
              a = "";
            else if (((a += o), ")" === o)) {
              i = !0;
              break;
            }
            continue;
          }
          if (" " === o) {
            "," !== e[s - 1] && "," !== r && ",(" !== r && ((r = ""), (t = !1));
            continue;
          }
          (a += o), (r += o);
        }
      }
      if (!i) throw new e1.BaseError("Unable to normalize signature.");
      return a;
    }
    function tI(e, t = {}) {
      let { prepare: r = !0 } = t,
        n = Array.isArray(e) || "string" == typeof e ? e0.parseAbiItem(e) : e;
      return { ...n, ...(r ? { hash: tF(n) } : {}) };
    }
    function tN(e, t, r) {
      let n,
        { args: a = [], prepare: i = !0 } = r ?? {},
        s = e5.validate(t, { strict: !1 }),
        o = e.filter((e) =>
          s
            ? "function" === e.type || "error" === e.type
              ? t_(e) === e5.slice(t, 0, 4)
              : "event" === e.type && tF(e) === t
            : "name" in e && e.name === t
        );
      if (0 === o.length) throw new tq({ name: t });
      if (1 === o.length) return { ...o[0], ...(i ? { hash: tF(o[0]) } : {}) };
      for (let e of o) {
        if ("inputs" in e) {
          if (!a || 0 === a.length) {
            if (!e.inputs || 0 === e.inputs.length)
              return { ...e, ...(i ? { hash: tF(e) } : {}) };
            continue;
          }
          if (
            e.inputs &&
            0 !== e.inputs.length &&
            e.inputs.length === a.length &&
            a.every((t, r) => {
              let n = "inputs" in e && e.inputs[r];
              return (
                !!n &&
                (function e(t, r) {
                  let n = typeof t,
                    a = r.type;
                  switch (a) {
                    case "address":
                      return tC(t, { strict: !1 });
                    case "bool":
                      return "boolean" === n;
                    case "function":
                    case "string":
                      return "string" === n;
                    default:
                      if ("tuple" === a && "components" in r)
                        return Object.values(r.components).every((r, n) =>
                          e(Object.values(t)[n], r)
                        );
                      if (
                        /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                          a
                        )
                      )
                        return "number" === n || "bigint" === n;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                        return "string" === n || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                        return (
                          Array.isArray(t) &&
                          t.every((t) =>
                            e(t, {
                              ...r,
                              type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                            })
                          )
                        );
                      return !1;
                  }
                })(t, n)
              );
            })
          ) {
            if (n && "inputs" in n && n.inputs) {
              let t = (function e(t, r, n) {
                for (let a in t) {
                  let i = t[a],
                    s = r[a];
                  if (
                    "tuple" === i.type &&
                    "tuple" === s.type &&
                    "components" in i &&
                    "components" in s
                  )
                    return e(i.components, s.components, n[a]);
                  let o = [i.type, s.type];
                  if (
                    (o.includes("address") && o.includes("bytes20")) ||
                    (((o.includes("address") && o.includes("string")) ||
                      (o.includes("address") && o.includes("bytes"))) &&
                      tC(n[a], { strict: !1 }))
                  )
                    return o;
                }
              })(e.inputs, n.inputs, a);
              if (t)
                throw new tz(
                  { abiItem: e, type: t[0] },
                  { abiItem: n, type: t[1] }
                );
            }
            n = e;
          }
        }
      }
      let c = (() => {
        if (n) return n;
        let [e, ...t] = o;
        return { ...e, overloads: t };
      })();
      if (!c) throw new tq({ name: t });
      return { ...c, ...(i ? { hash: tF(c) } : {}) };
    }
    function t_(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return tN(t, r);
        }
        return e[0];
      })();
      return e5.slice(tF(t), 0, 4);
    }
    function tF(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return tN(t, r);
        }
        return e[0];
      })();
      return "string" != typeof t && "hash" in t && t.hash
        ? t.hash
        : td(
            e5.fromString(
              (function (...e) {
                let t = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return tN(t, r);
                  }
                  return e[0];
                })();
                return tS("string" == typeof t ? t : eX.formatAbiItem(t));
              })(t)
            )
          );
    }
    class tz extends e1.BaseError {
      constructor(e, t) {
        super("Found ambiguous types in overloaded ABI Items.", {
          metaMessages: [
            `\`${e.type}\` in \`${tS(eX.formatAbiItem(e.abiItem))}\`, and`,
            `\`${t.type}\` in \`${tS(eX.formatAbiItem(t.abiItem))}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.AmbiguityError",
          });
      }
    }
    class tq extends e1.BaseError {
      constructor({ name: e, data: t, type: r = "item" }) {
        const n = e ? ` with name "${e}"` : t ? ` with data "${t}"` : "";
        super(`ABI ${r}${n} not found.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError",
          });
      }
    }
    e1.BaseError;
    var t$ = e.i(558240),
      tM = e.i(24746),
      tH = e1;
    let tD = /^(.*)\[([0-9]*)\]$/,
      tO = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      tj =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      tU = 2n ** 256n - 1n;
    function tL(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: a } = e[r];
        n ? (t += 32) : (t += e5.size(a));
      }
      let r = [],
        n = [],
        a = 0;
      for (let i = 0; i < e.length; i++) {
        let { dynamic: s, encoded: o } = e[i];
        s
          ? (r.push(e5.fromNumber(t + a, { size: 32 })),
            n.push(o),
            (a += e5.size(o)))
          : r.push(o);
      }
      return e5.concat(...r, ...n);
    }
    function tG(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function tV(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(tV);
      let r = tG(e.type);
      return !!(r && tV({ ...e, type: r[1] }));
    }
    var tW = e1;
    let tJ = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new tQ({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new tY({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new tZ({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new tZ({ offset: e });
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
    function tK(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(tJ);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    class tZ extends tW.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.NegativeOffsetError",
          });
      }
    }
    class tY extends tW.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.PositionOutOfBoundsError",
          });
      }
    }
    class tQ extends tW.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.RecursiveReadLimitExceededError",
          });
      }
    }
    function tX(e, t, r = {}) {
      let { as: n = "Array", checksumAddress: a = !1 } = r,
        i = "string" == typeof t ? tr(t) : t,
        s = tK(i);
      if (0 === tn(i) && e.length > 0) throw new t5();
      if (tn(i) && 32 > tn(i))
        throw new t6({
          data: "string" == typeof t ? t : e5.fromBytes(t),
          parameters: e,
          size: tn(i),
        });
      let o = 0,
        c = "Array" === n ? [] : {};
      for (let t = 0; t < e.length; ++t) {
        let r = e[t];
        s.setPosition(o);
        let [i, u] = (function e(t, r, n) {
          let { checksumAddress: a, staticPosition: i } = n,
            s = tG(r.type);
          if (s) {
            let [n, o] = s;
            return (function (t, r, n) {
              let { checksumAddress: a, length: i, staticPosition: s } = n;
              if (!i) {
                let n = s + ta(t.readBytes(32)),
                  i = n + 32;
                t.setPosition(n);
                let o = ta(t.readBytes(32)),
                  c = tV(r),
                  u = 0,
                  l = [];
                for (let n = 0; n < o; ++n) {
                  t.setPosition(i + (c ? 32 * n : u));
                  let [s, o] = e(t, r, {
                    checksumAddress: a,
                    staticPosition: i,
                  });
                  (u += o), l.push(s);
                }
                return t.setPosition(s + 32), [l, 32];
              }
              if (tV(r)) {
                let n = s + ta(t.readBytes(32)),
                  o = [];
                for (let s = 0; s < i; ++s) {
                  t.setPosition(n + 32 * s);
                  let [i] = e(t, r, { checksumAddress: a, staticPosition: n });
                  o.push(i);
                }
                return t.setPosition(s + 32), [o, 32];
              }
              let o = 0,
                c = [];
              for (let n = 0; n < i; ++n) {
                let [n, i] = e(t, r, {
                  checksumAddress: a,
                  staticPosition: s + o,
                });
                (o += i), c.push(n);
              }
              return [c, o];
            })(
              t,
              { ...r, type: o },
              { checksumAddress: a, length: n, staticPosition: i }
            );
          }
          if ("tuple" === r.type)
            return (function (t, r, n) {
              let { checksumAddress: a, staticPosition: i } = n,
                s =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                o = s ? [] : {},
                c = 0;
              if (tV(r)) {
                let n = i + ta(t.readBytes(32));
                for (let i = 0; i < r.components.length; ++i) {
                  let u = r.components[i];
                  t.setPosition(n + c);
                  let [l, d] = e(t, u, {
                    checksumAddress: a,
                    staticPosition: n,
                  });
                  (c += d), (o[s ? i : u?.name] = l);
                }
                return t.setPosition(i + 32), [o, 32];
              }
              for (let n = 0; n < r.components.length; ++n) {
                let u = r.components[n],
                  [l, d] = e(t, u, { checksumAddress: a, staticPosition: i });
                (o[s ? n : u?.name] = l), (c += d);
              }
              return [o, c];
            })(t, r, { checksumAddress: a, staticPosition: i });
          if ("address" === r.type)
            return (function (e, t = {}) {
              let r,
                { checksum: n = !1 } = t,
                a = e.readBytes(32);
              return [
                ((r = e5.fromBytes(
                  (function (e, t, r, n = {}) {
                    let { strict: a } = n;
                    !1;
                    let i = e.slice(-20, void 0);
                    return (
                      a &&
                        (function (e, t, r) {
                          if ("number" == typeof r && tn(e) !== r - -20)
                            throw new tu({
                              offset: r,
                              position: "end",
                              size: tn(e),
                            });
                        })(i, 0, void 0),
                      i
                    );
                  })(a, 0)
                )),
                n ? tT(r) : r),
                32,
              ];
            })(t, { checksum: a });
          if ("bool" === r.type)
            return [
              (function (e, t = {}) {
                let { size: r } = t,
                  n = e;
                if (
                  (void 0 !== r && (e3(n, r), (n = ti(n))),
                  n.length > 1 || n[0] > 1)
                )
                  throw new ts(n);
                return !!n[0];
              })(t.readBytes(32), { size: 32 }),
              32,
            ];
          if (r.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [n, a] = t.type.split("bytes");
              if (!a) {
                let t = ta(e.readBytes(32));
                e.setPosition(r + t);
                let n = ta(e.readBytes(32));
                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(n);
                return e.setPosition(r + 32), [e5.fromBytes(a), 32];
              }
              return [
                e5.fromBytes(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(t, r, { staticPosition: i });
          if (r.type.startsWith("uint") || r.type.startsWith("int")) {
            var o, c;
            let e, n, a;
            return (
              (o = t),
              (e = (c = r).type.startsWith("int")),
              (n = Number.parseInt(c.type.split("int")[1] || "256", 10)),
              (a = o.readBytes(32)),
              [
                n > 48
                  ? (function (e, t = {}) {
                      let { size: r } = t;
                      void 0 !== r && e3(e, r);
                      let n = e5.fromBytes(e, t);
                      return e5.toBigInt(n, t);
                    })(a, { signed: e })
                  : ta(a, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === r.type)
            return (function (e, { staticPosition: t }) {
              let r = ta(e.readBytes(32));
              e.setPosition(t + r);
              let n = ta(e.readBytes(32));
              if (0 === n) return e.setPosition(t + 32), ["", 32];
              let a = (function (e, t = {}) {
                let { size: r } = t,
                  n = e;
                return (
                  void 0 !== r && (e3(n, r), (n = e4(n, { dir: "right" }))),
                  te.decode(n)
                );
              })(ti(e.readBytes(n, 32)));
              return e.setPosition(t + 32), [a, 32];
            })(t, { staticPosition: i });
          throw new t7(r.type);
        })(s, r, { checksumAddress: a, staticPosition: 0 });
        (o += u), "Array" === n ? c.push(i) : (c[r.name ?? t] = i);
      }
      return c;
    }
    function t0(e, t, r) {
      let { checksumAddress: n = !1 } = r ?? {};
      if (e.length !== t.length)
        throw new t4({ expectedLength: e.length, givenLength: t.length });
      let a = tL(
        (function ({ checksumAddress: e, parameters: t, values: r }) {
          let n = [];
          for (let a = 0; a < t.length; a++)
            n.push(
              (function e({ checksumAddress: t = !1, parameter: r, value: n }) {
                let a = tG(r.type);
                if (a) {
                  let [i, s] = a;
                  return (function (t, r) {
                    let { checksumAddress: n, length: a, parameter: i } = r,
                      s = null === a;
                    if (!Array.isArray(t)) throw new t9(t);
                    if (!s && t.length !== a)
                      throw new t3({
                        expectedLength: a,
                        givenLength: t.length,
                        type: `${i.type}[${a}]`,
                      });
                    let o = !1,
                      c = [];
                    for (let r = 0; r < t.length; r++) {
                      let a = e({
                        checksumAddress: n,
                        parameter: i,
                        value: t[r],
                      });
                      a.dynamic && (o = !0), c.push(a);
                    }
                    if (s || o) {
                      let e = tL(c);
                      if (s) {
                        let t = e5.fromNumber(c.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: c.length > 0 ? e5.concat(t, e) : t,
                        };
                      }
                      if (o) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: e5.concat(...c.map(({ encoded: e }) => e)),
                    };
                  })(n, {
                    checksumAddress: t,
                    length: i,
                    parameter: { ...r, type: s },
                  });
                }
                if ("tuple" === r.type)
                  return (function (t, r) {
                    let { checksumAddress: n, parameter: a } = r,
                      i = !1,
                      s = [];
                    for (let r = 0; r < a.components.length; r++) {
                      let o = a.components[r],
                        c = Array.isArray(t) ? r : o.name,
                        u = e({
                          checksumAddress: n,
                          parameter: o,
                          value: t[c],
                        });
                      s.push(u), u.dynamic && (i = !0);
                    }
                    return {
                      dynamic: i,
                      encoded: i
                        ? tL(s)
                        : e5.concat(...s.map(({ encoded: e }) => e)),
                    };
                  })(n, { checksumAddress: t, parameter: r });
                if ("address" === r.type)
                  return (function (e, t) {
                    let { checksum: r = !1 } = t;
                    return (
                      tP(e, { strict: r }),
                      { dynamic: !1, encoded: e5.padLeft(e.toLowerCase()) }
                    );
                  })(n, { checksum: t });
                if ("bool" === r.type) {
                  var i = n;
                  if ("boolean" != typeof i)
                    throw new e1.BaseError(
                      `Invalid boolean value: "${i}" (type: ${typeof i}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: e5.padLeft(e5.fromBoolean(i)),
                  };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = tj.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        a = t ? -n - 1n : 0n;
                      if (e > n || e < a)
                        throw new e5.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: a.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: e5.fromNumber(e, { size: 32, signed: t }),
                    };
                  })(n, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { type: t }) {
                    let [, r] = t.split("bytes"),
                      n = e5.size(e);
                    if (!r) {
                      let t = e;
                      return (
                        n % 32 != 0 &&
                          (t = e5.padRight(
                            t,
                            32 * Math.ceil((e.length - 2) / 2 / 32)
                          )),
                        {
                          dynamic: !0,
                          encoded: e5.concat(
                            e5.padLeft(e5.fromNumber(n, { size: 32 })),
                            t
                          ),
                        }
                      );
                    }
                    if (n !== Number.parseInt(r, 10))
                      throw new t8({
                        expectedSize: Number.parseInt(r, 10),
                        value: e,
                      });
                    return { dynamic: !1, encoded: e5.padRight(e) };
                  })(n, { type: r.type });
                if ("string" === r.type) {
                  var s = n;
                  let e = e5.fromString(s),
                    t = Math.ceil(e5.size(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(e5.padRight(e5.slice(e, 32 * n, (n + 1) * 32)));
                  return {
                    dynamic: !0,
                    encoded: e5.concat(
                      e5.padRight(e5.fromNumber(e5.size(e), { size: 32 })),
                      ...r
                    ),
                  };
                }
                throw new t7(r.type);
              })({ checksumAddress: e, parameter: t[a], value: r[a] })
            );
          return n;
        })({ checksumAddress: n, parameters: e, values: t })
      );
      return 0 === a.length ? "0x" : a;
    }
    function t1(e, t) {
      if (e.length !== t.length)
        throw new t4({ expectedLength: e.length, givenLength: t.length });
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let a = e[n],
          i = t[n];
        r.push(t1.encode(a, i));
      }
      return e5.concat(...r);
    }
    function t2(e) {
      return (Array.isArray(e) && "string" == typeof e[0]) ||
        "string" == typeof e
        ? tM.parseAbiParameters(e)
        : e;
    }
    (t1 || (t1 = {})).encode = function e(t, r, n = !1) {
      if ("address" === t) return tP(r), e5.padLeft(r.toLowerCase(), 32 * !!n);
      if ("string" === t) return e5.fromString(r);
      if ("bytes" === t) return r;
      if ("bool" === t) return e5.padLeft(e5.fromBoolean(r), n ? 32 : 1);
      let a = t.match(tj);
      if (a) {
        let [e, t, i = "256"] = a,
          s = Number.parseInt(i, 10) / 8;
        return e5.fromNumber(r, { size: n ? 32 : s, signed: "int" === t });
      }
      let i = t.match(tO);
      if (i) {
        let [e, t] = i;
        if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
          throw new t8({ expectedSize: Number.parseInt(t, 10), value: r });
        return e5.padRight(r, 32 * !!n);
      }
      let s = t.match(tD);
      if (s && Array.isArray(r)) {
        let [t, n] = s,
          a = [];
        for (let t = 0; t < r.length; t++) a.push(e(n, r[t], !0));
        return 0 === a.length ? "0x" : e5.concat(...a);
      }
      throw new t7(t);
    };
    class t6 extends tH.BaseError {
      constructor({ data: e, parameters: t, size: r }) {
        super(`Data size of ${r} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${t$.formatAbiParameters(t)})`,
            `Data:   ${e} (${r} bytes)`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.DataSizeTooSmallError",
          });
      }
    }
    class t5 extends tH.BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ZeroDataError",
          });
      }
    }
    class t3 extends tH.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ArrayLengthMismatchError",
          });
      }
    }
    class t8 extends tH.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${e5.size(
            t
          )}) does not match expected size (bytes${e}).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.BytesSizeMismatchError",
          });
      }
    }
    class t4 extends tH.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.LengthMismatchError",
          });
      }
    }
    class t9 extends tH.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is not a valid array.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidArrayError",
          });
      }
    }
    class t7 extends tH.BaseError {
      constructor(e) {
        super(`Type \`${e}\` is not a valid ABI Type.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidTypeError",
          });
      }
    }
    function re(e, t = {}) {
      return tI(e, t);
    }
    function rt(e, t, r) {
      let n = tN(e, t, r);
      if ("function" !== n.type) throw new tq({ name: t, type: "function" });
      return n;
    }
    let rr = "0x0000000000000000000000000000000000000000";
    var rn = e.i(21668);
    async function ra(e, n) {
      let {
          blockNumber: a,
          blockTag: s,
          calls: o,
          stateOverrides: c,
          traceAssetChanges: u,
          traceTransfers: l,
          validation: d,
        } = n,
        f = n.account ? (0, t.parseAccount)(n.account) : void 0;
      if (u && !f)
        throw new i.BaseError(
          "`account` is required when `traceAssetChanges` is true"
        );
      let p = f
          ? (function (...e) {
              let [t, r] = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return [
                      (function (e) {
                        let t = e.find((e) => "constructor" === e.type);
                        if (!t) throw new tq({ name: "constructor" });
                        return t;
                      })(t),
                      r,
                    ];
                  }
                  return e;
                })(),
                { bytecode: n, args: a } = r;
              return e5.concat(
                n,
                t.inputs?.length && a?.length ? t0(t.inputs, a) : "0x"
              );
            })(tI("constructor(bytes, bytes)"), {
              bytecode: eW.deploylessCallViaBytecodeBytecode,
              args: [
                "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                (function (...e) {
                  let [t, r = []] = (() => {
                      if (Array.isArray(e[0])) {
                        let [t, r, n] = e;
                        return [rt(t, r, { args: n }), n];
                      }
                      let [t, r] = e;
                      return [t, r];
                    })(),
                    { overloads: n } = t,
                    a = n ? rt([t, ...n], t.name, { args: r }) : t,
                    i = t_(a),
                    s = r.length > 0 ? t0(a.inputs, r) : void 0;
                  return s ? e5.concat(i, s) : i;
                })(re("function getBalance(address)"), [f.address]),
              ],
            })
          : void 0,
        m = u
          ? await Promise.all(
              n.calls.map(async (t) => {
                if (!t.data && !t.abi) return;
                let { accessList: n } = await (0, rn.createAccessList)(e, {
                  account: f.address,
                  ...t,
                  data: t.abi ? (0, r.encodeFunctionData)(t) : t.data,
                });
                return n.map(({ address: e, storageKeys: t }) =>
                  t.length > 0 ? e : null
                );
              })
            ).then((e) => e.flat().filter(Boolean))
          : [],
        h = await eQ(e, {
          blockNumber: a,
          blockTag: s,
          blocks: [
            ...(u
              ? [
                  { calls: [{ data: p }], stateOverrides: c },
                  {
                    calls: m.map((e, t) => ({
                      abi: [
                        re("function balanceOf(address) returns (uint256)"),
                      ],
                      functionName: "balanceOf",
                      args: [f.address],
                      to: e,
                      from: rr,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: rr, nonce: 0 }],
                  },
                ]
              : []),
            {
              calls: [...o, { to: rr }].map((e) => ({
                ...e,
                from: f?.address,
              })),
              stateOverrides: c,
            },
            ...(u
              ? [
                  { calls: [{ data: p }] },
                  {
                    calls: m.map((e, t) => ({
                      abi: [
                        re("function balanceOf(address) returns (uint256)"),
                      ],
                      functionName: "balanceOf",
                      args: [f.address],
                      to: e,
                      from: rr,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: rr, nonce: 0 }],
                  },
                  {
                    calls: m.map((e, t) => ({
                      to: e,
                      abi: [re("function decimals() returns (uint256)")],
                      functionName: "decimals",
                      from: rr,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: rr, nonce: 0 }],
                  },
                  {
                    calls: m.map((e, t) => ({
                      to: e,
                      abi: [re("function tokenURI(uint256) returns (string)")],
                      functionName: "tokenURI",
                      args: [0n],
                      from: rr,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: rr, nonce: 0 }],
                  },
                  {
                    calls: m.map((e, t) => ({
                      to: e,
                      abi: [re("function symbol() returns (string)")],
                      functionName: "symbol",
                      from: rr,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: rr, nonce: 0 }],
                  },
                ]
              : []),
          ],
          traceTransfers: l,
          validation: d,
        }),
        y = u ? h[2] : h[0],
        [g, b, , w, v, E, x, A] = u ? h : [],
        { calls: P, ...T } = y,
        C = P.slice(0, -1) ?? [],
        R = [...(g?.calls ?? []), ...(b?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, k.hexToBigInt)(e.data) : null
        ),
        B = [...(w?.calls ?? []), ...(v?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, k.hexToBigInt)(e.data) : null
        ),
        S = (E?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        I = (A?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        N = (x?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        _ = [];
      for (let [e, t] of B.entries()) {
        let r = R[e];
        if ("bigint" != typeof t || "bigint" != typeof r) continue;
        let n = S[e - 1],
          a = I[e - 1],
          i = N[e - 1],
          s =
            0 === e
              ? {
                  address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                  decimals: 18,
                  symbol: "ETH",
                }
              : {
                  address: m[e - 1],
                  decimals: i || n ? Number(n ?? 1) : void 0,
                  symbol: a ?? void 0,
                };
        _.some((e) => e.token.address === s.address) ||
          _.push({ token: s, value: { pre: r, post: t, diff: t - r } });
      }
      return { assetChanges: _, block: T, results: C };
    }
    async function ri(e, i) {
      let {
          abi: s,
          address: o,
          args: c,
          functionName: u,
          dataSuffix: l = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...d
        } = i,
        f = d.account ? (0, t.parseAccount)(d.account) : e.account,
        p = (0, r.encodeFunctionData)({ abi: s, args: c, functionName: u });
      try {
        let { data: t } = await (0, a.getAction)(
            e,
            ea.call,
            "call"
          )({
            batch: !1,
            data: `${p}${l ? l.replace("0x", "") : ""}`,
            to: o,
            ...d,
            account: f,
          }),
          r = (0, en.decodeFunctionResult)({
            abi: s,
            args: c,
            functionName: u,
            data: t || "0x",
          }),
          n = s.filter((e) => "name" in e && e.name === i.functionName);
        return {
          result: r,
          request: {
            abi: n,
            address: o,
            args: c,
            dataSuffix: l,
            functionName: u,
            ...d,
            account: f,
          },
        };
      } catch (e) {
        throw (0, n.getContractError)(e, {
          abi: s,
          address: o,
          args: c,
          docsPath: "/docs/contract/simulateContract",
          functionName: u,
          sender: f?.address,
        });
      }
    }
    async function rs(e, { filter: t }) {
      return t.request({ method: "eth_uninstallFilter", params: [t.id] });
    }
    e.s(["simulateCalls", () => ra], 472028),
      e.s(["simulateContract", () => ri], 241664),
      e.s(["uninstallFilter", () => rs], 894651);
    var ro = e1;
    let rc =
      "0x6492649264926492649264926492649264926492649264926492649264926492";
    function ru(e) {
      if (e5.slice(e, -32) !== rc) throw new rm(e);
    }
    function rl(e) {
      return "string" == typeof e ? rd(e) : e;
    }
    function rd(e) {
      ru(e);
      let [t, r, n] = tX(t2("address, bytes, bytes"), e);
      return { data: r, signature: n, to: t };
    }
    function rf(e) {
      let { data: t, signature: r, to: n } = e;
      return e5.concat(t0(t2("address, bytes, bytes"), [n, t, r]), rc);
    }
    function rp(e) {
      try {
        return ru(e), !0;
      } catch {
        return !1;
      }
    }
    class rm extends ro.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc6492.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => rm,
        "assert",
        () => ru,
        "from",
        () => rl,
        "magicBytes",
        0,
        rc,
        "universalSignatureValidatorAbi",
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
        "universalSignatureValidatorBytecode",
        0,
        "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        "unwrap",
        () => rd,
        "validate",
        () => rp,
        "wrap",
        () => rf,
      ],
      775557
    );
    var rh = e.i(775557),
      rh = rh;
    function ry(e) {
      if (e <= 255) return 1;
      if (e <= 65535) return 2;
      if (e <= 0xffffff) return 3;
      if (e <= 0xffffffff) return 4;
      throw new e1.BaseError("Length is too large.");
    }
    var rg = e1;
    function rb(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new rP({ signature: e });
      if (e.r < 0n || e.r > tU) throw new rT({ value: e.r });
      if (e.s < 0n || e.s > tU) throw new rC({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new rR({ value: e.yParity });
    }
    function rw(e) {
      if (130 !== e.length && 132 !== e.length) throw new rA({ signature: e });
      let t = BigInt(e5.slice(e, 0, 32)),
        r = BigInt(e5.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return rx(t);
            } catch {
              throw new rR({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function rv(e) {
      if (void 0 !== e.r && void 0 !== e.s) return rE(e);
    }
    function rE(e) {
      let t = (() => {
        var t, r;
        let n;
        if ("string" == typeof e) return rw(e);
        if (e instanceof Uint8Array) return rw(e5.fromBytes(e));
        return "string" == typeof e.r
          ? ((t = e),
            (n = (() => {
              let e = t.v ? Number(t.v) : void 0,
                r = t.yParity ? Number(t.yParity) : void 0;
              if (
                ("number" == typeof e && "number" != typeof r && (r = rx(e)),
                "number" != typeof r)
              )
                throw new rR({ value: t.yParity });
              return r;
            })()),
            { r: BigInt(t.r), s: BigInt(t.s), yParity: n })
          : e.v
          ? { r: (r = e).r, s: r.s, yParity: rx(r.v) }
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      })();
      return rb(t), t;
    }
    function rx(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new rk({ value: e });
    }
    class rA extends rg.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${e5.size(e5.from(e))} bytes.`,
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
    class rP extends rg.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${e7.stringify(
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
    class rT extends rg.BaseError {
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
    class rC extends rg.BaseError {
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
    class rR extends rg.BaseError {
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
    class rk extends rg.BaseError {
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
    var rB = e1,
      rS = e.i(573612);
    rS.secp256k1;
    let rI =
        "0x8010801080108010801080108010801080108010801080108010801080108010",
      rN = t2(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
    function r_(e) {
      if ("string" == typeof e) {
        if (e5.slice(e, -32) !== rI) throw new rM(e);
      } else rb(e.authorization);
    }
    function rF(e) {
      return "string" == typeof e ? rz(e) : e;
    }
    function rz(e) {
      r_(e);
      let t = e5.toNumber(e5.slice(e, -64, -32)),
        r = e5.slice(e, -t - 64, -64),
        n = e5.slice(e, 0, -t - 64),
        [a, i, s] = tX(rN, r);
      return {
        authorization: (function (e, t = {}) {
          return "string" == typeof e.chainId
            ? (function (e) {
                let { address: t, chainId: r, nonce: n } = e,
                  a = rv(e);
                return {
                  address: t,
                  chainId: Number(r),
                  nonce: BigInt(n),
                  ...a,
                };
              })(e)
            : { ...e, ...t.signature };
        })({
          address: a.delegation,
          chainId: Number(a.chainId),
          nonce: a.nonce,
          yParity: a.yParity,
          r: a.r,
          s: a.s,
        }),
        signature: n,
        ...(s && "0x" !== s ? { data: s, to: i } : {}),
      };
    }
    function rq(e) {
      let { data: t, signature: r } = e;
      r_(e);
      let n = (function (e, t = {}) {
          let r = td(
            `0x${(function (e, t = {}) {
              ty(e);
              let { prefix: r, x: n, y: a } = e,
                { includePrefix: i = !0 } = t;
              return e5.concat(
                i ? e5.fromNumber(r, { size: 1 }) : "0x",
                e5.fromNumber(n, { size: 32 }),
                "bigint" == typeof a ? e5.fromNumber(a, { size: 32 }) : "0x"
              );
            })(e).slice(4)}`
          ).substring(26);
          return (function (e, t = {}) {
            let { checksum: r = !1 } = t;
            return (tP(e), r) ? tT(e) : e;
          })(`0x${r}`, t);
        })(
          (function (e) {
            var t;
            let r,
              { payload: n, signature: a } = e,
              { r: i, s, yParity: o } = a;
            return (
              (t = new rS.secp256k1.Signature(BigInt(i), BigInt(s))
                .addRecoveryBit(o)
                .recoverPublicKey(e5.from(n).substring(2))),
              ty(
                (r = (() => {
                  if (e5.validate(t)) return tg(t);
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
                          throw new to(e);
                        return !0;
                      } catch {
                        return !1;
                      }
                    })(t)
                  ) {
                    var e;
                    return (e = t), tg(e5.fromBytes(e));
                  }
                  let { prefix: r, x: n, y: a } = t;
                  return "bigint" == typeof n && "bigint" == typeof a
                    ? { prefix: r ?? 4, x: n, y: a }
                    : { prefix: r, x: n };
                })())
              ),
              r
            );
          })({
            payload: (function (e, t = {}) {
              let { presign: r } = t;
              return td(
                e5.concat(
                  "0x05",
                  (function (e, t = {}) {
                    let { as: r = "Hex" } = t;
                    return (function (e, t) {
                      let { as: r } = t,
                        n = (function e(t) {
                          var r, n;
                          let a, i, s, o;
                          return Array.isArray(t)
                            ? ((i = ry(
                                (a = (r = t.map((t) => e(t))).reduce(
                                  (e, t) => e + t.length,
                                  0
                                ))
                              )),
                              {
                                length: a <= 55 ? 1 + a : 1 + i + a,
                                encode(e) {
                                  for (let { encode: t } of (a <= 55
                                    ? e.pushByte(192 + a)
                                    : (e.pushByte(247 + i),
                                      1 === i
                                        ? e.pushUint8(a)
                                        : 2 === i
                                        ? e.pushUint16(a)
                                        : 3 === i
                                        ? e.pushUint24(a)
                                        : e.pushUint32(a)),
                                  r))
                                    t(e);
                                },
                              })
                            : ((o = ry(
                                (s = "string" == typeof (n = t) ? tr(n) : n)
                                  .length
                              )),
                              {
                                length:
                                  1 === s.length && s[0] < 128
                                    ? 1
                                    : s.length <= 55
                                    ? 1 + s.length
                                    : 1 + o + s.length,
                                encode(e) {
                                  (1 === s.length && s[0] < 128) ||
                                    (s.length <= 55
                                      ? e.pushByte(128 + s.length)
                                      : (e.pushByte(183 + o),
                                        1 === o
                                          ? e.pushUint8(s.length)
                                          : 2 === o
                                          ? e.pushUint16(s.length)
                                          : 3 === o
                                          ? e.pushUint24(s.length)
                                          : e.pushUint32(s.length))),
                                    e.pushBytes(s);
                                },
                              });
                        })(e),
                        a = tK(new Uint8Array(n.length));
                      return (n.encode(a), "Hex" === r)
                        ? e5.fromBytes(a.bytes)
                        : a.bytes;
                    })(e, { as: r });
                  })(
                    (function (e) {
                      let { address: t, chainId: r, nonce: n } = e,
                        a = rv(e);
                      return [
                        r ? e5.fromNumber(r) : "0x",
                        t,
                        n ? e5.fromNumber(n) : "0x",
                        ...(a
                          ? (function (e) {
                              let { r: t, s: r, yParity: n } = e;
                              return [
                                n ? "0x01" : "0x",
                                0n === t ? "0x" : e5.trimLeft(e5.fromNumber(t)),
                                0n === r ? "0x" : e5.trimLeft(e5.fromNumber(r)),
                              ];
                            })(a)
                          : []),
                      ];
                    })(
                      r
                        ? {
                            address: e.address,
                            chainId: e.chainId,
                            nonce: e.nonce,
                          }
                        : e
                    )
                  )
                )
              );
            })(e.authorization, { presign: !0 }),
            signature: rE(e.authorization),
          })
        ),
        a = t0(rN, [
          {
            ...e.authorization,
            delegation: e.authorization.address,
            chainId: BigInt(e.authorization.chainId),
          },
          e.to ?? n,
          t ?? "0x",
        ]),
        i = e5.fromNumber(e5.size(a), { size: 32 });
      return e5.concat(r, a, i, rI);
    }
    function r$(e) {
      try {
        return r_(e), !0;
      } catch {
        return !1;
      }
    }
    class rM extends rB.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc8010.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => rM,
        "assert",
        () => r_,
        "from",
        () => rF,
        "magicBytes",
        0,
        rI,
        "suffixParameters",
        0,
        rN,
        "unwrap",
        () => rz,
        "validate",
        () => r$,
        "wrap",
        () => rq,
      ],
      507849
    );
    var rH = e.i(507849),
      rH = rH,
      rD = e.i(170245);
    async function rO({ address: e, authorization: t, signature: r }) {
      return (0, eg.isAddressEqual)(
        (0, eS.getAddress)(e),
        await f({ authorization: t, signature: r })
      );
    }
    var rj = e.i(413236);
    async function rU(e, t) {
      let r,
        {
          address: n,
          chain: a = e.chain,
          hash: i,
          erc6492VerifierAddress: o = t.universalSignatureVerifierAddress ??
            a?.contracts?.erc6492Verifier?.address,
          multicallAddress: l = t.multicallAddress ??
            a?.contracts?.multicall3?.address,
          mode: d = "auto",
        } = t;
      if (a?.verifyHash) return await a.verifyHash(e, t);
      let f =
        ((r = t.signature),
        (0, rj.isHex)(r)
          ? r
          : "object" == typeof r && "r" in r && "s" in r
          ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: a }) {
              let i = (() => {
                  if (0 === a || 1 === a) return a;
                  if (n && (27n === n || 28n === n || n >= 35n))
                    return +(n % 2n === 0n);
                  throw Error("Invalid `v` or `yParity` value");
                })(),
                s = `0x${new rS.secp256k1.Signature(
                  (0, k.hexToBigInt)(e),
                  (0, k.hexToBigInt)(t)
                ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
              return "hex" === r ? s : (0, c.hexToBytes)(s);
            })(r)
          : (0, u.bytesToHex)(r));
      try {
        if ("eoa" === d)
          try {
            if (
              (0, eg.isAddressEqual)(
                (0, eS.getAddress)(n),
                await (0, s.recoverAddress)({ hash: i, signature: f })
              )
            )
              return !0;
          } catch {}
        if (rH.validate(f))
          return await rL(e, { ...t, multicallAddress: l, signature: f });
        return await rG(e, { ...t, verifierAddress: o, signature: f });
      } catch (e) {
        if ("eoa" !== d)
          try {
            if (
              (0, eg.isAddressEqual)(
                (0, eS.getAddress)(n),
                await (0, s.recoverAddress)({ hash: i, signature: f })
              )
            )
              return !0;
          } catch {}
        if (e instanceof rW) return !1;
        throw e;
      }
    }
    async function rL(e, t) {
      let {
          address: n,
          blockNumber: i,
          blockTag: s,
          hash: c,
          multicallAddress: l,
        } = t,
        {
          authorization: d,
          data: f,
          signature: p,
          to: m,
        } = rH.unwrap(t.signature);
      if (
        (await em(e, { address: n, blockNumber: i, blockTag: s })) ===
        (0, o.concatHex)(["0xef0100", d.address])
      )
        return await rV(e, {
          address: n,
          blockNumber: i,
          blockTag: s,
          hash: c,
          signature: p,
        });
      let h = {
        address: d.address,
        chainId: Number(d.chainId),
        nonce: Number(d.nonce),
        r: (0, u.numberToHex)(d.r, { size: 32 }),
        s: (0, u.numberToHex)(d.s, { size: 32 }),
        yParity: d.yParity,
      };
      if (!(await rO({ address: n, authorization: h }))) throw new rW();
      let y = await (0, a.getAction)(
          e,
          ez.readContract,
          "readContract"
        )({
          ...(l ? { address: l } : { code: eW.multicall3Bytecode }),
          authorizationList: [h],
          abi: er.multicall3Abi,
          blockNumber: i,
          blockTag: "pending",
          functionName: "aggregate3",
          args: [
            [
              ...(f ? [{ allowFailure: !0, target: m ?? n, callData: f }] : []),
              {
                allowFailure: !0,
                target: n,
                callData: (0, r.encodeFunctionData)({
                  abi: er.erc1271Abi,
                  functionName: "isValidSignature",
                  args: [c, p],
                }),
              },
            ],
          ],
        }),
        g = y[y.length - 1]?.returnData;
      if (g?.startsWith("0x1626ba7e")) return !0;
      throw new rW();
    }
    async function rG(e, t) {
      let {
          address: n,
          factory: i,
          factoryData: s,
          hash: o,
          signature: c,
          verifierAddress: u,
          ...l
        } = t,
        d = await (async () =>
          (!i && !s) || rh.validate(c)
            ? c
            : rh.wrap({ data: s, signature: c, to: i }))(),
        f = u
          ? {
              to: u,
              data: (0, r.encodeFunctionData)({
                abi: er.erc6492SignatureValidatorAbi,
                functionName: "isValidSig",
                args: [n, o, d],
              }),
              ...l,
            }
          : {
              data: (0, rD.encodeDeployData)({
                abi: er.erc6492SignatureValidatorAbi,
                args: [n, o, d],
                bytecode: eW.erc6492SignatureValidatorByteCode,
              }),
              ...l,
            },
        { data: p } = await (0, a.getAction)(
          e,
          ea.call,
          "call"
        )(f).catch((e) => {
          if (e instanceof eJ.CallExecutionError) throw new rW();
          throw e;
        });
      if ((0, k.hexToBool)(p ?? "0x0")) return !0;
      throw new rW();
    }
    async function rV(e, t) {
      let {
        address: r,
        blockNumber: n,
        blockTag: i,
        hash: s,
        signature: o,
      } = t;
      if (
        (
          await (0, a.getAction)(
            e,
            ez.readContract,
            "readContract"
          )({
            address: r,
            abi: er.erc1271Abi,
            args: [s, o],
            blockNumber: n,
            blockTag: i,
            functionName: "isValidSignature",
          }).catch((e) => {
            if (e instanceof eJ.ContractFunctionExecutionError) throw new rW();
            throw e;
          })
        ).startsWith("0x1626ba7e")
      )
        return !0;
      throw new rW();
    }
    class rW extends Error {}
    function rJ(e, t) {
      let r, n;
      return (0, d.keccak256)(
        ((r =
          "string" == typeof e
            ? (0, u.stringToHex)(e)
            : "string" == typeof e.raw
            ? e.raw
            : (0, u.bytesToHex)(e.raw)),
        (n = (0, u.stringToHex)(`\x19Ethereum Signed Message:
${(0, ex.size)(r)}`)),
        (0, o.concat)([n, r])),
        t
      );
    }
    async function rK(
      e,
      { address: t, message: r, factory: n, factoryData: i, signature: s, ...o }
    ) {
      let c = rJ(r);
      return (0, a.getAction)(
        e,
        rU,
        "verifyHash"
      )({
        address: t,
        factory: n,
        factoryData: i,
        hash: c,
        signature: s,
        ...o,
      });
    }
    e.s(["verifyHash", () => rU], 506738),
      e.s(["hashMessage", () => rJ], 691705),
      e.s(["verifyMessage", () => rK], 14771);
  },
  452591,
  407951,
  754095,
  374875,
  127197,
  18685,
  163314,
  551313,
  (e) => {
    "use strict";
    var t = e.i(709635),
      r = e.i(277563),
      n = e.i(4038),
      a = e.i(737395),
      i = e.i(886456),
      s = e.i(765399),
      o = e.i(21668),
      c = e.i(212647),
      u = e.i(513191),
      l = e.i(864e3),
      d = e.i(287192),
      f = e.i(603437),
      p = e.i(588998),
      m = e.i(635837),
      h = e.i(50330),
      y = e.i(323335),
      g = e.i(894279),
      b = e.i(198034),
      w = e.i(14164),
      v = e.i(567417),
      E = e.i(82417),
      x = e.i(291176),
      A = e.i(574578),
      P = e.i(934133),
      T = e.i(926692),
      C = e.i(292755),
      R = e.i(372733),
      k = e.i(191088),
      B = e.i(897549),
      S = e.i(995377),
      I = e.i(260762),
      N = e.i(738685),
      _ = e.i(966606),
      F = e.i(293532),
      z = e.i(504374),
      q = e.i(951528),
      $ = e.i(861049),
      M = e.i(687113),
      H = e.i(97317),
      D = e.i(283517),
      O = e.i(718428),
      j = e.i(322558),
      U = e.i(472028),
      L = e.i(241664),
      G = e.i(894651),
      V = e.i(506738),
      W = e.i(14771),
      J = e.i(337532),
      K = e.i(472119);
    async function Z(e, t) {
      let {
          address: r,
          factory: n,
          factoryData: a,
          signature: i,
          message: s,
          primaryType: o,
          types: c,
          domain: u,
          ...l
        } = t,
        d = (0, K.hashTypedData)({
          message: s,
          primaryType: o,
          types: c,
          domain: u,
        });
      return (0, J.getAction)(
        e,
        V.verifyHash,
        "verifyHash"
      )({
        address: r,
        factory: n,
        factoryData: a,
        hash: d,
        signature: i,
        ...l,
      });
    }
    var Y = e.i(954761),
      Q = e.i(503719);
    let X = new Map(),
      ee = new Map(),
      et = 0;
    function er(e, t, r) {
      let n = ++et,
        a = () => X.get(e) || [],
        i = () => {
          let t = a();
          if (!t.some((e) => e.id === n)) return;
          let r = ee.get(e);
          if (1 === t.length && r) {
            let e = r();
            e instanceof Promise && e.catch(() => {});
          }
          (() => {
            let t = a().filter((e) => e.id !== n);
            if (0 === t.length) {
              X.delete(e), ee.delete(e);
              return;
            }
            X.set(e, t);
          })();
        },
        s = a();
      if ((X.set(e, [...s, { id: n, fns: t }]), s && s.length > 0)) return i;
      let o = {};
      for (let e in t)
        o[e] = (...t) => {
          let r = a();
          if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
        };
      let c = r(o);
      return "function" == typeof c && ee.set(e, c), i;
    }
    e.s(["observe", () => er], 407951);
    var en = e.i(160912),
      ea = e.i(695602),
      ei = e.i(518356),
      es = e.i(378379),
      eo = e.i(38622);
    function ec(e, { emitOnBegin: t, initialWaitTime: r, interval: n }) {
      let a = !0,
        i = () => (a = !1);
      return (
        (async () => {
          let s;
          t && (s = await e({ unpoll: i }));
          let o = (await r?.(s)) ?? n;
          await (0, eo.wait)(o);
          let c = async () => {
            a && (await e({ unpoll: i }), await (0, eo.wait)(n), c());
          };
          c();
        })(),
        i
      );
    }
    function eu(
      e,
      {
        emitOnBegin: t = !1,
        emitMissed: r = !1,
        onBlockNumber: n,
        onError: a,
        poll: i,
        pollingInterval: s = e.pollingInterval,
      }
    ) {
      let o;
      return (
        void 0 !== i
          ? i
          : "webSocket" !== e.transport.type &&
            "ipc" !== e.transport.type &&
            ("fallback" !== e.transport.type ||
              ("webSocket" !== e.transport.transports[0].config.type &&
                "ipc" !== e.transport.transports[0].config.type))
      )
        ? er(
            (0, ei.stringify)(["watchBlockNumber", e.uid, t, r, s]),
            { onBlockNumber: n, onError: a },
            (n) =>
              ec(
                async () => {
                  try {
                    let t = await (0, J.getAction)(
                      e,
                      v.getBlockNumber,
                      "getBlockNumber"
                    )({ cacheTime: 0 });
                    if (void 0 !== o) {
                      if (t === o) return;
                      if (t - o > 1 && r)
                        for (let e = o + 1n; e < t; e++)
                          n.onBlockNumber(e, o), (o = e);
                    }
                    (void 0 === o || t > o) && (n.onBlockNumber(t, o), (o = t));
                  } catch (e) {
                    n.onError?.(e);
                  }
                },
                { emitOnBegin: t, interval: s }
              )
          )
        : er(
            (0, ei.stringify)(["watchBlockNumber", e.uid, t, r]),
            { onBlockNumber: n, onError: a },
            (t) => {
              let r = !0,
                n = () => (r = !1);
              return (
                (async () => {
                  try {
                    let a = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      { unsubscribe: i } = await a.subscribe({
                        params: ["newHeads"],
                        onData(e) {
                          if (!r) return;
                          let n = (0, es.hexToBigInt)(e.result?.number);
                          t.onBlockNumber(n, o), (o = n);
                        },
                        onError(e) {
                          t.onError?.(e);
                        },
                      });
                    (n = i), r || n();
                  } catch (e) {
                    a?.(e);
                  }
                })(),
                () => n()
              );
            }
          );
    }
    async function el(e, t) {
      let r,
        n,
        a,
        i,
        s,
        {
          checkReplacement: o = !0,
          confirmations: c = 1,
          hash: u,
          onReplaced: l,
          retryCount: d = 6,
          retryDelay: f = ({ count: e }) => 200 * ~~(1 << e),
          timeout: p = 18e4,
        } = t,
        m = (0, ei.stringify)(["waitForTransactionReceipt", e.uid, u]),
        h = t.pollingInterval
          ? t.pollingInterval
          : e.chain?.experimental_preconfirmationTime
          ? e.chain.experimental_preconfirmationTime
          : e.pollingInterval,
        y = !1,
        { promise: g, resolve: b, reject: v } = (0, en.withResolvers)(),
        E = p
          ? setTimeout(() => {
              s?.(),
                i?.(),
                v(new Q.WaitForTransactionReceiptTimeoutError({ hash: u }));
            }, p)
          : void 0;
      return (
        (i = er(m, { onReplaced: l, resolve: b, reject: v }, async (t) => {
          if (
            (a = await (0, J.getAction)(
              e,
              H.getTransactionReceipt,
              "getTransactionReceipt"
            )({ hash: u }).catch(() => void 0)) &&
            c <= 1
          ) {
            clearTimeout(E), t.resolve(a), i?.();
            return;
          }
          s = (0, J.getAction)(
            e,
            eu,
            "watchBlockNumber"
          )({
            emitMissed: !0,
            emitOnBegin: !0,
            poll: !0,
            pollingInterval: h,
            async onBlockNumber(l) {
              let p = (e) => {
                  clearTimeout(E), s?.(), e(), i?.();
                },
                m = l;
              if (!y)
                try {
                  if (a) {
                    if (c > 1 && (!a.blockNumber || m - a.blockNumber + 1n < c))
                      return;
                    p(() => t.resolve(a));
                    return;
                  }
                  if (
                    (o &&
                      !r &&
                      ((y = !0),
                      await (0, ea.withRetry)(
                        async () => {
                          (r = await (0, J.getAction)(
                            e,
                            q.getTransaction,
                            "getTransaction"
                          )({ hash: u })).blockNumber && (m = r.blockNumber);
                        },
                        { delay: f, retryCount: d }
                      ),
                      (y = !1)),
                    (a = await (0, J.getAction)(
                      e,
                      H.getTransactionReceipt,
                      "getTransactionReceipt"
                    )({ hash: u })),
                    c > 1 && (!a.blockNumber || m - a.blockNumber + 1n < c))
                  )
                    return;
                  p(() => t.resolve(a));
                } catch (i) {
                  if (
                    i instanceof Q.TransactionNotFoundError ||
                    i instanceof Q.TransactionReceiptNotFoundError
                  ) {
                    if (!r) {
                      y = !1;
                      return;
                    }
                    try {
                      (n = r), (y = !0);
                      let i = await (0, ea.withRetry)(
                        () =>
                          (0, J.getAction)(
                            e,
                            w.getBlock,
                            "getBlock"
                          )({ blockNumber: m, includeTransactions: !0 }),
                        {
                          delay: f,
                          retryCount: d,
                          shouldRetry: ({ error: e }) =>
                            e instanceof Y.BlockNotFoundError,
                        }
                      );
                      y = !1;
                      let s = i.transactions.find(
                        ({ from: e, nonce: t }) => e === n.from && t === n.nonce
                      );
                      if (
                        !s ||
                        ((a = await (0, J.getAction)(
                          e,
                          H.getTransactionReceipt,
                          "getTransactionReceipt"
                        )({ hash: s.hash })),
                        c > 1 && (!a.blockNumber || m - a.blockNumber + 1n < c))
                      )
                        return;
                      let o = "replaced";
                      s.to === n.to &&
                      s.value === n.value &&
                      s.input === n.input
                        ? (o = "repriced")
                        : s.from === s.to &&
                          0n === s.value &&
                          (o = "cancelled"),
                        p(() => {
                          t.onReplaced?.({
                            reason: o,
                            replacedTransaction: n,
                            transaction: s,
                            transactionReceipt: a,
                          }),
                            t.resolve(a);
                        });
                    } catch (e) {
                      p(() => t.reject(e));
                    }
                  } else p(() => t.reject(i));
                }
            },
          });
        })),
        g
      );
    }
    e.s(["poll", () => ec], 754095),
      e.s(["waitForTransactionReceipt", () => el], 374875);
    var ed = e.i(891380),
      ef = e.i(381835),
      ep = e.i(551738),
      em = e.i(392853),
      eh = e.i(327458),
      ey = e.i(691705);
    let eg =
        /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
      eb =
        /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
    var ew = e.i(307729),
      ev = e.i(746501);
    async function eE(e, t) {
      let {
          address: r,
          domain: n,
          message: a,
          nonce: i,
          scheme: s,
          signature: o,
          time: c = new Date(),
          ...u
        } = t,
        l = (function (e) {
          let { scheme: t, statement: r, ...n } = e.match(eg)?.groups ?? {},
            {
              chainId: a,
              expirationTime: i,
              issuedAt: s,
              notBefore: o,
              requestId: c,
              ...u
            } = e.match(eb)?.groups ?? {},
            l = e.split("Resources:")[1]?.split("\n- ").slice(1);
          return {
            ...n,
            ...u,
            ...(a ? { chainId: Number(a) } : {}),
            ...(i ? { expirationTime: new Date(i) } : {}),
            ...(s ? { issuedAt: new Date(s) } : {}),
            ...(o ? { notBefore: new Date(o) } : {}),
            ...(c ? { requestId: c } : {}),
            ...(l ? { resources: l } : {}),
            ...(t ? { scheme: t } : {}),
            ...(r ? { statement: r } : {}),
          };
        })(a);
      if (
        !l.address ||
        !(function (e) {
          let {
            address: t,
            domain: r,
            message: n,
            nonce: a,
            scheme: i,
            time: s = new Date(),
          } = e;
          if (
            (r && n.domain !== r) ||
            (a && n.nonce !== a) ||
            (i && n.scheme !== i) ||
            (n.expirationTime && s >= n.expirationTime) ||
            (n.notBefore && s < n.notBefore)
          )
            return !1;
          try {
            if (
              !n.address ||
              !(0, ew.isAddress)(n.address, { strict: !1 }) ||
              (t && !(0, ev.isAddressEqual)(n.address, t))
            )
              return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: n, message: l, nonce: i, scheme: s, time: c })
      )
        return !1;
      let d = (0, ey.hashMessage)(a);
      return (0, V.verifyHash)(e, {
        address: l.address,
        hash: d,
        signature: o,
        ...u,
      });
    }
    var ex = e.i(372152),
      eA = e.i(432901),
      eP = e.i(310535),
      eT = e.i(824219);
    class eC extends eT.BaseError {
      constructor({ value: e }) {
        super(`Number \`${e}\` is not a valid decimal number.`, {
          name: "InvalidDecimalNumberError",
        });
      }
    }
    function eR(e, t) {
      return { amount: e, decimals: t, formatted: (0, eP.formatUnits)(e, t) };
    }
    function ek(e, t) {
      if ("bigint" == typeof e) return e;
      let r = e.decimals ?? t;
      return (function (e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new eC({ value: e });
        let [r, n = "0"] = e.split("."),
          a = r.startsWith("-");
        if ((a && (r = r.slice(1)), (n = n.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${n}`)) && (r = `${BigInt(r) + 1n}`),
            (n = "");
        else if (n.length > t) {
          let [e, a, i] = [n.slice(0, t - 1), n.slice(t - 1, t), n.slice(t)],
            s = Math.round(Number(`${a}.${i}`));
          (n =
            s > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${s}`).length > t &&
            ((n = n.slice(1)), (r = `${BigInt(r) + 1n}`)),
            (n = n.slice(0, t));
        } else n = n.padEnd(t, "0");
        return BigInt(`${a ? "-" : ""}${r}${n}`);
      })(
        e.formatted,
        (function (e) {
          if (void 0 === e)
            throw Error(
              "Token decimals are required. Pass `amount.decimals` or select a declared token."
            );
          return e;
        })(r)
      );
    }
    function eB(e, t) {
      return "bigint" == typeof e ? t : e.decimals ?? t;
    }
    function eS(e, t) {
      let { decimals: r, token: n } = t,
        a = eI(e, n);
      if (a) return { address: a.address, decimals: r ?? a.decimals };
      if ((0, ew.isAddress)(n, { strict: !1 }))
        return {
          address: n,
          decimals:
            r ??
            (function (e, t) {
              let r = e.tokens,
                n = e.chain?.id;
              if (r && void 0 !== n)
                for (let e of r) {
                  let r = eN(e, n);
                  if (r && (0, ev.isAddressEqual)(r.address, t))
                    return r.decimals;
                }
            })(e, n),
        };
      throw Error(
        `Token "${n}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
      );
    }
    function eI(e, t) {
      let r = e.tokens,
        n = e.chain?.id;
      if (!r || void 0 === n) return;
      let a = (function (e, t) {
        let r = t.toLowerCase();
        for (let t of e) if (t.symbol?.toLowerCase() === r) return t;
      })(r, t);
      if (a) return eN(a, n);
      if ((0, ew.isAddress)(t, { strict: !1 }))
        for (let e of r) {
          let r = eN(e, n);
          if (r && (0, ev.isAddressEqual)(r.address, t)) return r;
        }
    }
    function eN(e, t) {
      let r = e.addresses[t];
      if (r)
        return {
          address: r,
          currency: e.currency,
          decimals: e.decimals,
          name: e.name,
          popular: e.popular,
          symbol: e.symbol,
        };
    }
    async function e_(e, t) {
      let { address: r, decimals: n } = eS(e, t);
      return void 0 !== n
        ? { address: r, decimals: n }
        : {
            address: r,
            decimals: await (0, O.readContract)(e, {
              abi: ex.erc20Abi,
              address: r,
              functionName: "decimals",
            }),
          };
    }
    function eF(e) {
      let {
        account: t,
        chain: r,
        gas: n,
        maxFeePerGas: a,
        maxPriorityFeePerGas: i,
        nonce: s,
      } = e;
      return {
        account: t,
        chain: r,
        gas: n,
        maxFeePerGas: a,
        maxPriorityFeePerGas: i,
        nonce: s,
      };
    }
    function ez(e) {
      return { ...e, data: (0, eA.encodeFunctionData)(e), to: e.address };
    }
    async function eq(e, t) {
      let { account: r, decimals: n, spender: a, token: i, ...s } = t,
        [o, { decimals: c }] = await Promise.all([
          (0, O.readContract)(e, {
            ...s,
            ...eq.call(e, { account: r, spender: a, token: i }),
          }),
          e_(e, { decimals: n, token: i }),
        ]);
      return eR(o, c);
    }
    async function e$(e, t) {
      let { token: r, ...n } = t,
        { address: a } = eS(e, { token: r }),
        i = eI(e, r),
        [s, o, c] = await Promise.all([
          i?.decimals ??
            (0, O.readContract)(e, {
              ...n,
              abi: ex.erc20Abi,
              address: a,
              functionName: "decimals",
            }),
          i?.name ??
            (0, O.readContract)(e, {
              ...n,
              abi: ex.erc20Abi,
              address: a,
              functionName: "name",
            }),
          i?.symbol ??
            (0, O.readContract)(e, {
              ...n,
              abi: ex.erc20Abi,
              address: a,
              functionName: "symbol",
            }),
        ]);
      return { decimals: s, name: o, symbol: c };
    }
    e.s(
      [
        "defineCall",
        () => ez,
        "findDeclaredToken",
        () => eI,
        "pickWriteParameters",
        () => eF,
        "resolveAmountDecimals",
        () => eB,
        "resolveToken",
        () => eS,
        "resolveTokenWithDecimals",
        () => e_,
        "toAmount",
        () => eR,
        "toBaseUnits",
        () => ek,
      ],
      127197
    ),
      ((eq || (eq = {})).call = function (e, t) {
        return ez({
          address: eS(e, t).address,
          abi: ex.erc20Abi,
          functionName: "allowance",
          args: [t.account, t.spender],
        });
      });
    var eM = e.i(834058),
      eH = eT;
    class eD extends eH.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    class eO extends eH.BaseError {
      constructor({ docsPath: e, metaMessages: t, type: r }) {
        super(`Account type "${r}" is not supported.`, {
          docsPath: e,
          metaMessages: t,
          name: "AccountTypeNotSupportedError",
        });
      }
    }
    async function ej(e, t) {
      let { account: r = e.account, decimals: n, token: a, ...i } = t;
      if (!r) throw new eD();
      let s = (0, eM.parseAccount)(r).address,
        [o, { decimals: c }] = await Promise.all([
          (0, O.readContract)(e, {
            ...i,
            ...ej.call(e, { account: s, token: a }),
          }),
          e_(e, { decimals: n, token: a }),
        ]);
      return eR(o, c);
    }
    async function eU(e, t) {
      let { decimals: r, token: n, ...a } = t,
        [i, { decimals: s }] = await Promise.all([
          (0, O.readContract)(e, { ...a, ...eU.call(e, { token: n }) }),
          e_(e, { decimals: r, token: n }),
        ]);
      return eR(i, s);
    }
    e.s(
      [
        "AccountNotFoundError",
        () => eD,
        "AccountTypeNotSupportedError",
        () => eO,
      ],
      18685
    ),
      ((ej || (ej = {})).call = function (e, t) {
        let r = t.account ?? e.account;
        if (!r) throw new eD();
        let n = (0, eM.parseAccount)(r).address;
        return ez({
          address: eS(e, t).address,
          abi: ex.erc20Abi,
          functionName: "balanceOf",
          args: [n],
        });
      }),
      ((eU || (eU = {})).call = function (e, t) {
        return ez({
          address: eS(e, t).address,
          abi: ex.erc20Abi,
          args: [],
          functionName: "totalSupply",
        });
      });
    var eL = e.i(580198);
    async function eG(e, { serializedTransaction: t }) {
      return e.request(
        { method: "eth_sendRawTransaction", params: [t] },
        { retryCount: 0 }
      );
    }
    e.s(["sendRawTransaction", () => eG], 163314);
    var eV = e.i(180416);
    async function eW(
      e,
      { serializedTransaction: t, throwOnReceiptRevert: r, timeout: n }
    ) {
      let a = await e.request(
          { method: "eth_sendRawTransactionSync", params: n ? [t, n] : [t] },
          { retryCount: 0 }
        ),
        i = (
          e.chain?.formatters?.transactionReceipt?.format ||
          eV.formatTransactionReceipt
        )(a);
      if ("reverted" === i.status && r)
        throw new Q.TransactionReceiptRevertedError({ receipt: i });
      return i;
    }
    e.s(["sendRawTransactionSync", () => eW], 551313);
    var eJ = e.i(860054);
    function eK(e) {
      var K;
      return {
        call: (t) => (0, s.call)(e, t),
        createAccessList: (t) => (0, o.createAccessList)(e, t),
        createBlockFilter: () => (0, c.createBlockFilter)(e),
        createContractEventFilter: (t) =>
          (0, u.createContractEventFilter)(e, t),
        createEventFilter: (t) => (0, l.createEventFilter)(e, t),
        createPendingTransactionFilter: () =>
          (0, d.createPendingTransactionFilter)(e),
        estimateContractGas: (t) => (0, f.estimateContractGas)(e, t),
        estimateGas: (t) => (0, m.estimateGas)(e, t),
        getBalance: (t) => (0, g.getBalance)(e, t),
        getBlobBaseFee: () => (0, b.getBlobBaseFee)(e),
        getBlock: (t) => (0, w.getBlock)(e, t),
        getBlockNumber: (t) => (0, v.getBlockNumber)(e, t),
        getBlockReceipts: (t) => (0, E.getBlockReceipts)(e, t),
        getBlockTransactionCount: (t) => (0, x.getBlockTransactionCount)(e, t),
        getBytecode: (t) => (0, P.getCode)(e, t),
        getChainId: () => (0, A.getChainId)(e),
        getCode: (t) => (0, P.getCode)(e, t),
        getContractEvents: (t) => (0, T.getContractEvents)(e, t),
        getDelegation: (t) => (0, C.getDelegation)(e, t),
        getEip712Domain: (t) => (0, R.getEip712Domain)(e, t),
        getEnsAddress: (r) => (0, t.getEnsAddress)(e, r),
        getEnsAvatar: (t) => (0, r.getEnsAvatar)(e, t),
        getEnsName: (t) => (0, n.getEnsName)(e, t),
        getEnsResolver: (t) => (0, a.getEnsResolver)(e, t),
        getEnsText: (t) => (0, i.getEnsText)(e, t),
        getFeeHistory: (t) => (0, k.getFeeHistory)(e, t),
        estimateFeesPerGas: (t) => (0, p.estimateFeesPerGas)(e, t),
        getFilterChanges: (t) => (0, B.getFilterChanges)(e, t),
        getFilterLogs: (t) => (0, S.getFilterLogs)(e, t),
        getGasPrice: () => (0, I.getGasPrice)(e),
        getLogs: (t) => (0, N.getLogs)(e, t),
        getProof: (t) => (0, _.getProof)(e, t),
        estimateMaxPriorityFeePerGas: (t) =>
          (0, h.estimateMaxPriorityFeePerGas)(e, t),
        fillTransaction: (t) => (0, y.fillTransaction)(e, t),
        getRawTransaction: (t) => (0, F.getRawTransaction)(e, t),
        getStorageAt: (t) => (0, z.getStorageAt)(e, t),
        getTransaction: (t) => (0, q.getTransaction)(e, t),
        getTransactionConfirmations: (t) =>
          (0, $.getTransactionConfirmations)(e, t),
        getTransactionCount: (t) => (0, M.getTransactionCount)(e, t),
        getTransactionReceipt: (t) => (0, H.getTransactionReceipt)(e, t),
        multicall: (t) => (0, D.multicall)(e, t),
        prepareTransactionRequest: (t) =>
          (0, eL.prepareTransactionRequest)(e, t),
        readContract: (t) => (0, O.readContract)(e, t),
        sendRawTransaction: (t) => eG(e, t),
        sendRawTransactionSync: (t) => eW(e, t),
        simulate: (t) => (0, j.simulateBlocks)(e, t),
        simulateBlocks: (t) => (0, j.simulateBlocks)(e, t),
        simulateCalls: (t) => (0, U.simulateCalls)(e, t),
        simulateContract: (t) => (0, L.simulateContract)(e, t),
        verifyHash: (t) => (0, V.verifyHash)(e, t),
        verifyMessage: (t) => (0, W.verifyMessage)(e, t),
        verifySiweMessage: (t) => eE(e, t),
        verifyTypedData: (t) => Z(e, t),
        uninstallFilter: (t) => (0, G.uninstallFilter)(e, t),
        waitForTransactionReceipt: (t) => el(e, t),
        watchBlocks: (t) =>
          (function (
            e,
            {
              blockTag: t = e.experimental_blockTag ?? "latest",
              emitMissed: r = !1,
              emitOnBegin: n = !1,
              onBlock: a,
              onError: i,
              includeTransactions: s,
              poll: o,
              pollingInterval: c = e.pollingInterval,
            }
          ) {
            let u,
              l,
              d,
              f,
              p =
                void 0 !== o
                  ? o
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)),
              m = s ?? !1;
            return p
              ? er(
                  (0, ei.stringify)(["watchBlocks", e.uid, t, r, n, m, c]),
                  { onBlock: a, onError: i },
                  (a) =>
                    ec(
                      async () => {
                        try {
                          let n = await (0, J.getAction)(
                            e,
                            w.getBlock,
                            "getBlock"
                          )({ blockTag: t, includeTransactions: m });
                          if (null !== n.number && u?.number != null) {
                            if (n.number === u.number) return;
                            if (n.number - u.number > 1 && r)
                              for (let t = u?.number + 1n; t < n.number; t++) {
                                let r = await (0, J.getAction)(
                                  e,
                                  w.getBlock,
                                  "getBlock"
                                )({ blockNumber: t, includeTransactions: m });
                                a.onBlock(r, u), (u = r);
                              }
                          }
                          (u?.number == null ||
                            ("pending" === t && n?.number == null) ||
                            (null !== n.number && n.number > u.number)) &&
                            (a.onBlock(n, u), (u = n));
                        } catch (e) {
                          a.onError?.(e);
                        }
                      },
                      { emitOnBegin: n, interval: c }
                    )
                )
              : ((l = !0),
                (d = !0),
                (f = () => (l = !1)),
                (async () => {
                  try {
                    n &&
                      (0, J.getAction)(
                        e,
                        w.getBlock,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: m })
                        .then((e) => {
                          !l || (d && (a(e, void 0), (d = !1)));
                        })
                        .catch(i);
                    let r = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      { unsubscribe: s } = await r.subscribe({
                        params: ["newHeads"],
                        async onData(t) {
                          if (!l) return;
                          let r = await (0, J.getAction)(
                            e,
                            w.getBlock,
                            "getBlock"
                          )({
                            blockNumber: t.result?.number,
                            includeTransactions: m,
                          }).catch(() => {});
                          l && (a(r, u), (d = !1), (u = r));
                        },
                        onError(e) {
                          i?.(e);
                        },
                      });
                    (f = s), l || f();
                  } catch (e) {
                    i?.(e);
                  }
                })(),
                () => f());
          })(e, t),
        watchBlockNumber: (t) => eu(e, t),
        watchContractEvent: (t) =>
          (function (e, t) {
            let r,
              n,
              a,
              i,
              {
                abi: s,
                address: o,
                args: c,
                batch: l = !0,
                eventName: d,
                fromBlock: f,
                onError: p,
                onLogs: m,
                poll: h,
                pollingInterval: y = e.pollingInterval,
                strict: g,
              } = t;
            return (
              void 0 !== h
                ? h
                : "bigint" == typeof f ||
                  ("webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)))
            )
              ? ((r = g ?? !1),
                er(
                  (0, ei.stringify)([
                    "watchContractEvent",
                    o,
                    c,
                    l,
                    e.uid,
                    d,
                    y,
                    r,
                    f,
                  ]),
                  { onLogs: m, onError: p },
                  (t) => {
                    let n, a;
                    void 0 !== f && (n = f - 1n);
                    let i = !1,
                      p = ec(
                        async () => {
                          if (!i) {
                            try {
                              a = await (0, J.getAction)(
                                e,
                                u.createContractEventFilter,
                                "createContractEventFilter"
                              )({
                                abi: s,
                                address: o,
                                args: c,
                                eventName: d,
                                strict: r,
                                fromBlock: f,
                              });
                            } catch {}
                            i = !0;
                            return;
                          }
                          try {
                            let i;
                            if (a)
                              i = await (0, J.getAction)(
                                e,
                                B.getFilterChanges,
                                "getFilterChanges"
                              )({ filter: a });
                            else {
                              let t = await (0, J.getAction)(
                                e,
                                v.getBlockNumber,
                                "getBlockNumber"
                              )({});
                              (i =
                                n && n < t
                                  ? await (0, J.getAction)(
                                      e,
                                      T.getContractEvents,
                                      "getContractEvents"
                                    )({
                                      abi: s,
                                      address: o,
                                      args: c,
                                      eventName: d,
                                      fromBlock: n + 1n,
                                      toBlock: t,
                                      strict: r,
                                    })
                                  : []),
                                (n = t);
                            }
                            if (0 === i.length) return;
                            if (l) t.onLogs(i);
                            else for (let e of i) t.onLogs([e]);
                          } catch (e) {
                            a &&
                              e instanceof ef.InvalidInputRpcError &&
                              (i = !1),
                              t.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: y }
                      );
                    return async () => {
                      a &&
                        (await (0, J.getAction)(
                          e,
                          G.uninstallFilter,
                          "uninstallFilter"
                        )({ filter: a })),
                        p();
                    };
                  }
                ))
              : ((n = (0, ei.stringify)([
                  "watchContractEvent",
                  o,
                  c,
                  l,
                  e.uid,
                  d,
                  y,
                  g ?? !1,
                ])),
                (a = !0),
                (i = () => (a = !1)),
                er(
                  n,
                  { onLogs: m, onError: p },
                  (t) => (
                    (async () => {
                      try {
                        let r = (() => {
                            if ("fallback" === e.transport.type) {
                              let t = e.transport.transports.find(
                                (e) =>
                                  "webSocket" === e.config.type ||
                                  "ipc" === e.config.type
                              );
                              return t ? t.value : e.transport;
                            }
                            return e.transport;
                          })(),
                          n = d
                            ? (0, em.encodeEventTopics)({
                                abi: s,
                                eventName: d,
                                args: c,
                              })
                            : [],
                          { unsubscribe: u } = await r.subscribe({
                            params: ["logs", { address: o, topics: n }],
                            onData(e) {
                              if (!a) return;
                              let r = e.result;
                              try {
                                let { eventName: e, args: n } = (0,
                                  ep.decodeEventLog)({
                                    abi: s,
                                    data: r.data,
                                    topics: r.topics,
                                    strict: g,
                                  }),
                                  a = (0, eh.formatLog)(r, {
                                    args: n,
                                    eventName: e,
                                  });
                                t.onLogs([a]);
                              } catch (i) {
                                let e, n;
                                if (
                                  i instanceof ed.DecodeLogDataMismatch ||
                                  i instanceof ed.DecodeLogTopicsMismatch
                                ) {
                                  if (g) return;
                                  (e = i.abiItem.name),
                                    (n = i.abiItem.inputs?.some(
                                      (e) => !("name" in e && e.name)
                                    ));
                                }
                                let a = (0, eh.formatLog)(r, {
                                  args: n ? [] : {},
                                  eventName: e,
                                });
                                t.onLogs([a]);
                              }
                            },
                            onError(e) {
                              t.onError?.(e);
                            },
                          });
                        (i = u), a || i();
                      } catch (e) {
                        p?.(e);
                      }
                    })(),
                    () => i()
                  )
                ));
          })(e, t),
        watchEvent: (t) =>
          (function (
            e,
            {
              address: t,
              args: r,
              batch: n = !0,
              event: a,
              events: i,
              fromBlock: s,
              onError: o,
              onLogs: c,
              poll: u,
              pollingInterval: d = e.pollingInterval,
              strict: f,
            }
          ) {
            let p,
              m,
              h =
                void 0 !== u
                  ? u
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type))),
              y = f ?? !1;
            return h
              ? er(
                  (0, ei.stringify)(["watchEvent", t, r, n, e.uid, a, d, s]),
                  { onLogs: c, onError: o },
                  (o) => {
                    let c, u;
                    void 0 !== s && (c = s - 1n);
                    let f = !1,
                      p = ec(
                        async () => {
                          if (!f) {
                            try {
                              u = await (0, J.getAction)(
                                e,
                                l.createEventFilter,
                                "createEventFilter"
                              )({
                                address: t,
                                args: r,
                                event: a,
                                events: i,
                                strict: y,
                                fromBlock: s,
                              });
                            } catch {}
                            f = !0;
                            return;
                          }
                          try {
                            let s;
                            if (u)
                              s = await (0, J.getAction)(
                                e,
                                B.getFilterChanges,
                                "getFilterChanges"
                              )({ filter: u });
                            else {
                              let n = await (0, J.getAction)(
                                e,
                                v.getBlockNumber,
                                "getBlockNumber"
                              )({});
                              (s =
                                c && c !== n
                                  ? await (0, J.getAction)(
                                      e,
                                      N.getLogs,
                                      "getLogs"
                                    )({
                                      address: t,
                                      args: r,
                                      event: a,
                                      events: i,
                                      fromBlock: c + 1n,
                                      toBlock: n,
                                    })
                                  : []),
                                (c = n);
                            }
                            if (0 === s.length) return;
                            if (n) o.onLogs(s);
                            else for (let e of s) o.onLogs([e]);
                          } catch (e) {
                            u &&
                              e instanceof ef.InvalidInputRpcError &&
                              (f = !1),
                              o.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: d }
                      );
                    return async () => {
                      u &&
                        (await (0, J.getAction)(
                          e,
                          G.uninstallFilter,
                          "uninstallFilter"
                        )({ filter: u })),
                        p();
                    };
                  }
                )
              : ((p = !0),
                (m = () => (p = !1)),
                (async () => {
                  try {
                    let n = (() => {
                        if ("fallback" === e.transport.type) {
                          let t = e.transport.transports.find(
                            (e) =>
                              "webSocket" === e.config.type ||
                              "ipc" === e.config.type
                          );
                          return t ? t.value : e.transport;
                        }
                        return e.transport;
                      })(),
                      s = i ?? (a ? [a] : void 0),
                      u = [];
                    s &&
                      ((u = [
                        s.flatMap((e) =>
                          (0, em.encodeEventTopics)({
                            abi: [e],
                            eventName: e.name,
                            args: r,
                          })
                        ),
                      ]),
                      a && (u = u[0]));
                    let { unsubscribe: l } = await n.subscribe({
                      params: ["logs", { address: t, topics: u }],
                      onData(e) {
                        if (!p) return;
                        let t = e.result;
                        try {
                          let { eventName: e, args: r } = (0,
                            ep.decodeEventLog)({
                              abi: s ?? [],
                              data: t.data,
                              topics: t.topics,
                              strict: y,
                            }),
                            n = (0, eh.formatLog)(t, { args: r, eventName: e });
                          c([n]);
                        } catch (a) {
                          let e, r;
                          if (
                            a instanceof ed.DecodeLogDataMismatch ||
                            a instanceof ed.DecodeLogTopicsMismatch
                          ) {
                            if (f) return;
                            (e = a.abiItem.name),
                              (r = a.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let n = (0, eh.formatLog)(t, {
                            args: r ? [] : {},
                            eventName: e,
                          });
                          c([n]);
                        }
                      },
                      onError(e) {
                        o?.(e);
                      },
                    });
                    (m = l), p || m();
                  } catch (e) {
                    o?.(e);
                  }
                })(),
                () => m());
          })(e, t),
        watchPendingTransactions: (t) =>
          (function (
            e,
            {
              batch: t = !0,
              onError: r,
              onTransactions: n,
              poll: a,
              pollingInterval: i = e.pollingInterval,
            }
          ) {
            let s, o;
            return (
              void 0 !== a
                ? a
                : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
            )
              ? er(
                  (0, ei.stringify)(["watchPendingTransactions", e.uid, t, i]),
                  { onTransactions: n, onError: r },
                  (r) => {
                    let n,
                      a = ec(
                        async () => {
                          try {
                            if (!n)
                              try {
                                n = await (0, J.getAction)(
                                  e,
                                  d.createPendingTransactionFilter,
                                  "createPendingTransactionFilter"
                                )({});
                                return;
                              } catch (e) {
                                throw (a(), e);
                              }
                            let i = await (0, J.getAction)(
                              e,
                              B.getFilterChanges,
                              "getFilterChanges"
                            )({ filter: n });
                            if (0 === i.length) return;
                            if (t) r.onTransactions(i);
                            else for (let e of i) r.onTransactions([e]);
                          } catch (e) {
                            r.onError?.(e);
                          }
                        },
                        { emitOnBegin: !0, interval: i }
                      );
                    return async () => {
                      n &&
                        (await (0, J.getAction)(
                          e,
                          G.uninstallFilter,
                          "uninstallFilter"
                        )({ filter: n })),
                        a();
                    };
                  }
                )
              : ((s = !0),
                (o = () => (s = !1)),
                (async () => {
                  try {
                    let { unsubscribe: t } = await e.transport.subscribe({
                      params: ["newPendingTransactions"],
                      onData(e) {
                        if (!s) return;
                        let t = e.result;
                        n([t]);
                      },
                      onError(e) {
                        r?.(e);
                      },
                    });
                    (o = t), s || o();
                  } catch (e) {
                    r?.(e);
                  }
                })(),
                () => o());
          })(e, t),
        token:
          ((K = e),
          {
            getAllowance: (0, eJ.bindActionDecorators)(K, eq),
            getBalance: (0, eJ.bindActionDecorators)(K, ej),
            getMetadata: (0, eJ.bindActionDecorators)(K, e$),
            getTotalSupply: (0, eJ.bindActionDecorators)(K, eU),
          }),
      };
    }
    e.s(["publicActions", () => eK], 452591);
  },
  261735,
  (e) => {
    "use strict";
    var t = e.i(658264),
      r = e.i(560051);
    e.i(153422), e.i(504308);
    var n = e.i(620207),
      a = e.i(22138),
      i = e.i(93431),
      s = e.i(432901),
      o = e.i(832088),
      c = e.i(860054),
      u = e.i(452591),
      l = e.i(130588),
      d = "eip2612GasSponsoring",
      f = "erc20ApprovalGasSponsoring";
    async function p(e, t, r, a, s, o, c) {
      let u = e.address,
        l = (0, i.getAddress)(n.PERMIT2_ADDRESS),
        d = await e.readContract({
          address: t,
          abi: n.eip2612NoncesAbi,
          functionName: "nonces",
          args: [u],
        }),
        f = BigInt(c),
        p = { owner: u, spender: l, value: f, nonce: d, deadline: BigInt(o) },
        m = await e.signTypedData({
          domain: { name: r, version: a, chainId: s, verifyingContract: t },
          types: n.eip2612PermitTypes,
          primaryType: "Permit",
          message: p,
        });
      return {
        from: u,
        asset: t,
        spender: l,
        amount: f.toString(),
        nonce: d.toString(),
        deadline: o,
        signature: m,
        version: "1",
      };
    }
    async function m(e, t, r) {
      let a,
        c,
        u = e.address,
        l = (0, i.getAddress)(n.PERMIT2_ADDRESS),
        d = (0, s.encodeFunctionData)({
          abi: n.erc20ApproveAbi,
          functionName: "approve",
          args: [l, o.maxUint256],
        }),
        f = await e.getTransactionCount({ address: u });
      try {
        let t = await e.estimateFeesPerGas?.();
        if (!t) throw Error("no fee estimates available");
        (a = t.maxFeePerGas), (c = t.maxPriorityFeePerGas);
      } catch {
        (a = n.DEFAULT_MAX_FEE_PER_GAS),
          (c = n.DEFAULT_MAX_PRIORITY_FEE_PER_GAS);
      }
      let p = await e.signTransaction({
        to: t,
        data: d,
        nonce: f,
        gas: n.ERC20_APPROVE_GAS_LIMIT,
        maxFeePerGas: a,
        maxPriorityFeePerGas: c,
        chainId: r,
      });
      return {
        from: u,
        asset: t,
        spender: l,
        amount: o.maxUint256.toString(),
        signedTransaction: p,
        version: "1",
      };
    }
    var h = new Map();
    function y(e, t, r) {
      let n = {
        signTransaction: t.signTransaction,
        readContract: t.readContract,
        getTransactionCount: t.getTransactionCount,
        estimateFeesPerGas: t.estimateFeesPerGas,
      };
      if (!(!n.readContract || !n.getTransactionCount || !n.estimateFeesPerGas))
        return n;
      let i = (function (e, t) {
        if (t) {
          let r;
          if (
            (r = Object.keys(t)).length > 0 &&
            r.every((e) => /^\d+$/.test(e))
          ) {
            let r = (0, a.getEvmChainId)(e);
            return t[r]?.rpcUrl;
          }
          return t.rpcUrl;
        }
      })(e, r);
      if (!i) return n;
      let s = (function (e) {
        let t = h.get(e);
        if (t) return t;
        let r = (function (e) {
          let { key: t = "public", name: r = "Public Client" } = e;
          return (0, c.createClient)({
            ...e,
            key: t,
            name: r,
            type: "publicClient",
          }).extend(u.publicActions);
        })({ transport: (0, l.http)(e) });
        return h.set(e, r), r;
      })(i);
      return (
        n.readContract || (n.readContract = (e) => s.readContract(e)),
        n.getTransactionCount ||
          (n.getTransactionCount = async (e) =>
            s.getTransactionCount({ address: e.address })),
        n.estimateFeesPerGas ||
          (n.estimateFeesPerGas = async () => s.estimateFeesPerGas()),
        n
      );
    }
    async function g(e, t, r, s, o, c) {
      let u = y(r.network, e, t);
      if (!u.readContract || !o?.extensions?.[d]) return;
      let l = r.extra?.name,
        f = r.extra?.version;
      if (!l || !f) return;
      let m = (0, a.getEvmChainId)(r.network),
        h = (0, i.getAddress)(r.asset),
        g = c ?? r.amount;
      try {
        if (
          (await u.readContract({
            address: h,
            abi: n.erc20AllowanceAbi,
            functionName: "allowance",
            args: [e.address, n.PERMIT2_ADDRESS],
          })) >= BigInt(g)
        )
          return;
      } catch {}
      let b = s.payload?.permit2Authorization,
        w =
          b?.deadline ??
          Math.floor(Date.now() / 1e3 + r.maxTimeoutSeconds).toString();
      return {
        [d]: {
          info: await p(
            {
              address: e.address,
              signTypedData: (t) => e.signTypedData(t),
              readContract: u.readContract,
            },
            h,
            l,
            f,
            m,
            w,
            g
          ),
        },
      };
    }
    async function b(e, t, r, s, o) {
      let c = y(r.network, e, t);
      if (
        !c.readContract ||
        !s?.extensions?.[f] ||
        !c.signTransaction ||
        !c.getTransactionCount
      )
        return;
      let u = (0, a.getEvmChainId)(r.network),
        l = (0, i.getAddress)(r.asset),
        d = o ?? r.amount;
      try {
        if (
          (await c.readContract({
            address: l,
            abi: n.erc20AllowanceAbi,
            functionName: "allowance",
            args: [e.address, n.PERMIT2_ADDRESS],
          })) >= BigInt(d)
        )
          return;
      } catch {}
      return {
        [f]: {
          info: await m(
            {
              address: e.address,
              signTransaction: c.signTransaction,
              getTransactionCount: c.getTransactionCount,
              estimateFeesPerGas: c.estimateFeesPerGas,
            },
            l,
            u
          ),
        },
      };
    }
    e.i(737114), e.i(746501), e.i(239892), e.i(573612), e.i(968974);
    var w = class {
        constructor(e) {
          (this.signer = e), (this.scheme = "exact");
        }
        async createPaymentPayload(e, t) {
          let r = (0, a.createNonce)(),
            n = Math.floor(Date.now() / 1e3),
            s = {
              from: this.signer.address,
              to: (0, i.getAddress)(t.payTo),
              value: t.maxAmountRequired,
              validAfter: (n - 600).toString(),
              validBefore: (n + t.maxTimeoutSeconds).toString(),
              nonce: r,
            },
            o = await this.signAuthorization(s, t);
          return {
            x402Version: e,
            scheme: t.scheme,
            network: t.network,
            payload: { authorization: s, signature: o },
          };
        }
        async signAuthorization(e, t) {
          let r = (function (e) {
            let t = v[e];
            if (!t) throw Error(`Unsupported v1 network: ${e}`);
            return t;
          })(t.network);
          if (!t.extra?.name || !t.extra?.version)
            throw Error(
              `EIP-712 domain parameters (name, version) are required in payment requirements for asset ${t.asset}`
            );
          let { name: a, version: s } = t.extra,
            o = {
              name: a,
              version: s,
              chainId: r,
              verifyingContract: (0, i.getAddress)(t.asset),
            },
            c = {
              from: (0, i.getAddress)(e.from),
              to: (0, i.getAddress)(e.to),
              value: BigInt(e.value),
              validAfter: BigInt(e.validAfter),
              validBefore: BigInt(e.validBefore),
              nonce: e.nonce,
            };
          return await this.signer.signTypedData({
            domain: o,
            types: n.authorizationTypes,
            primaryType: "TransferWithAuthorization",
            message: c,
          });
        }
      },
      v = {
        ethereum: 1,
        sepolia: 0xaa36a7,
        abstract: 2741,
        "abstract-testnet": 11124,
        "base-sepolia": 84532,
        base: 8453,
        "avalanche-fuji": 43113,
        avalanche: 43114,
        iotex: 4689,
        sei: 1329,
        "sei-testnet": 1328,
        polygon: 137,
        "polygon-amoy": 80002,
        peaq: 3338,
        story: 1514,
        educhain: 41923,
        "skale-base-sepolia": 0x135a9d92,
        megaeth: 4326,
        monad: 143,
        stable: 988,
        "stable-testnet": 2201,
      },
      E = Object.keys(v);
    async function x(e, t, r, n) {
      let s = Math.floor(Date.now() / 1e3),
        o = (0, a.createPermit2Nonce)(),
        c = (s + n.maxTimeoutSeconds).toString(),
        u = {
          from: t.address,
          permitted: { token: (0, i.getAddress)(n.asset), amount: n.amount },
          spender: e,
          nonce: o,
          deadline: c,
          witness: { to: (0, i.getAddress)(n.payTo), validAfter: "0" },
        };
      return {
        x402Version: r,
        payload: { signature: await A(t, u, n), permit2Authorization: u },
      };
    }
    async function A(e, t, r) {
      let s = (0, a.getEvmChainId)(r.network);
      return await e.signTypedData({
        domain: {
          name: "Permit2",
          chainId: s,
          verifyingContract: n.PERMIT2_ADDRESS,
        },
        types: n.permit2WitnessTypes,
        primaryType: "PermitWitnessTransferFrom",
        message: {
          permitted: {
            token: (0, i.getAddress)(t.permitted.token),
            amount: BigInt(t.permitted.amount),
          },
          spender: (0, i.getAddress)(t.spender),
          nonce: BigInt(t.nonce),
          deadline: BigInt(t.deadline),
          witness: {
            to: (0, i.getAddress)(t.witness.to),
            validAfter: BigInt(t.witness.validAfter),
          },
        },
      });
    }
    async function P(e, t, r) {
      return x(n.x402ExactPermit2ProxyAddress, e, t, r);
    }
    async function T(e, t, r) {
      let n = (0, a.createNonce)(),
        s = Math.floor(Date.now() / 1e3),
        o = {
          from: e.address,
          to: (0, i.getAddress)(r.payTo),
          value: r.amount,
          validAfter: "0",
          validBefore: (s + r.maxTimeoutSeconds).toString(),
          nonce: n,
        },
        c = await C(e, o, r);
      return { x402Version: t, payload: { authorization: o, signature: c } };
    }
    async function C(e, t, r) {
      let s = (0, a.getEvmChainId)(r.network);
      if (!r.extra?.name || !r.extra?.version)
        throw Error(
          `EIP-712 domain parameters (name, version) are required in payment requirements for asset ${r.asset}`
        );
      let { name: o, version: c } = r.extra,
        u = {
          name: o,
          version: c,
          chainId: s,
          verifyingContract: (0, i.getAddress)(r.asset),
        },
        l = {
          from: (0, i.getAddress)(t.from),
          to: (0, i.getAddress)(t.to),
          value: BigInt(t.value),
          validAfter: BigInt(t.validAfter),
          validBefore: BigInt(t.validBefore),
          nonce: t.nonce,
        };
      return await e.signTypedData({
        domain: u,
        types: n.authorizationTypes,
        primaryType: "TransferWithAuthorization",
        message: l,
      });
    }
    e.i(360235),
      e.i(503719),
      e.i(307729),
      e.i(34462),
      e.i(413236),
      e.i(935888),
      e.i(340903),
      e.i(378379),
      e.i(824219),
      e.i(589272),
      e.i(520229),
      e.i(995701),
      e.i(320478),
      e.i(315640),
      e.i(764911),
      e.i(304329),
      e.i(827677),
      e.i(261200),
      e.i(675103),
      BigInt(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
    var R = class {
      constructor(e, t) {
        (this.signer = e), (this.options = t), (this.scheme = "exact");
      }
      async createPaymentPayload(e, t, r) {
        if ("permit2" === (t.extra?.assetTransferMethod ?? "eip3009")) {
          let n = await P(this.signer, e, t),
            a = await g(this.signer, this.options, t, n, r);
          if (a) return { ...n, extensions: a };
          let i = await b(this.signer, this.options, t, r);
          return i ? { ...n, extensions: i } : n;
        }
        return T(this.signer, e, t);
      }
    };
    async function k(e) {
      if ((e.headers.get("content-type") ?? "").includes("application/json"))
        try {
          return await e.clone().json();
        } catch {
          return;
        }
    }
    function B(e, n, a) {
      var i;
      let s,
        o,
        c,
        u =
          ((s = n.signTypedData),
          (o = a.readContract),
          {
            address: (function (e) {
              let t = e.account?.address;
              if (!t)
                throw Error(
                  "Wallet account is required for x402 payment signing"
                );
              return t;
            })(n),
            signTypedData: (e) => {
              let t = n.account;
              if (!t)
                throw Error(
                  "Wallet account is required for x402 payment signing"
                );
              return s({
                account: t,
                domain: e.domain,
                types: e.types,
                primaryType: e.primaryType,
                message: e.message,
              });
            },
            readContract: o,
          }),
        l = new t.x402Client();
      (c = new R((i = { signer: u }).signer, i.schemeOptions)),
        i.networks && i.networks.length > 0
          ? i.networks.forEach((e) => {
              l.register(e, c);
            })
          : l.register("eip155:*", c),
        E.forEach((e) => {
          l.registerV1(e, new w(i.signer));
        }),
        i.policies &&
          i.policies.forEach((e) => {
            l.registerPolicy(e);
          });
      let d = new r.x402HTTPClient(l);
      return async (t, r) => {
        let n = await e(t, r);
        if (402 !== n.status) return n;
        let a = await k(n),
          i = d.getPaymentRequiredResponse((e) => n.headers.get(e), a),
          s = await d.createPaymentPayload(i),
          o = d.encodePaymentSignatureHeader(s),
          c = await e(t, {
            ...r,
            headers: (function (e, t, r) {
              let n = new Headers(
                t?.headers ?? (e instanceof Request ? e.headers : void 0)
              );
              for (let [e, t] of Object.entries(r)) n.set(e, t);
              return n;
            })(t, r, o),
          });
        return (
          await d.processPaymentResult(s, (e) => c.headers.get(e), c.status), c
        );
      };
    }
    e.s(["createX402Fetch", () => B], 261735);
  },
  870666,
  (e) => {
    "use strict";
    var t = e.i(452591);
    function r(e, n = {}) {
      let a = (function (e, t = {}) {
        try {
          return e.getClient(t);
        } catch {
          return;
        }
      })(e, n);
      return a?.extend(t.publicActions);
    }
    var n = e.i(769062),
      a = e.i(42407);
    function i(e = {}) {
      let t = (0, a.useConfig)(e);
      return (0, n.useSyncExternalStoreWithSelector)(
        (e) =>
          (function (e, t) {
            let { onChange: n } = t;
            return e.subscribe(() => r(e), n, {
              equalityFn: (e, t) => e?.uid === t?.uid,
            });
          })(t, { onChange: e }),
        () => r(t, e),
        () => r(t, e),
        (e) => e,
        (e, t) => e?.uid === t?.uid
      );
    }
    e.s(["usePublicClient", () => i], 870666);
  },
  731252,
  (e) => {
    "use strict";
    var t = e.i(422178);
    function r(e, r) {
      return (0, t.replaceEqualDeep)(e, r);
    }
    function n(e) {
      return JSON.stringify(e, (e, t) =>
        !(function (e) {
          if (!a(e)) return !1;
          let t = e.constructor;
          if (void 0 === t) return !0;
          let r = t.prototype;
          return !!a(r) && !!r.hasOwnProperty("isPrototypeOf");
        })(t)
          ? "bigint" == typeof t
            ? t.toString()
            : t
          : Object.keys(t)
              .sort()
              .reduce((e, r) => ((e[r] = t[r]), e), {})
      );
    }
    function a(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function i(e) {
      let {
        _defaulted: t,
        behavior: r,
        gcTime: n,
        initialData: a,
        initialDataUpdatedAt: i,
        maxPages: s,
        meta: o,
        networkMode: c,
        queryFn: u,
        queryHash: l,
        queryKey: d,
        queryKeyHashFn: f,
        retry: p,
        retryDelay: m,
        structuralSharing: h,
        getPreviousPageParam: y,
        getNextPageParam: g,
        initialPageParam: b,
        _optimisticResults: w,
        enabled: v,
        notifyOnChangeProps: E,
        placeholderData: x,
        refetchInterval: A,
        refetchIntervalInBackground: P,
        refetchOnMount: T,
        refetchOnReconnect: C,
        refetchOnWindowFocus: R,
        retryOnMount: k,
        select: B,
        staleTime: S,
        suspense: I,
        throwOnError: N,
        config: _,
        connector: F,
        query: z,
        ...q
      } = e;
      return q;
    }
    e.s([
      "filterQueryOptions",
      () => i,
      "hashFn",
      () => n,
      "structuralSharing",
      () => r,
    ]);
  },
  996145,
  840740,
  (e) => {
    "use strict";
    var t = e.i(914104);
    e.i(251684);
    var r = e.i(731252);
    function n(e) {
      let n = (0, t.useQuery)({ ...e, queryKeyHashFn: r.hashFn });
      return (n.queryKey = e.queryKey), n;
    }
    function a(e) {
      return e.state.chainId;
    }
    e.s(["useQuery", () => n], 996145);
    var i = e.i(642947),
      s = e.i(42407);
    function o(e = {}) {
      let t = (0, s.useConfig)(e);
      return (0, i.useSyncExternalStore)(
        (e) =>
          (function (e, t) {
            let { onChange: r } = t;
            return e.subscribe((e) => e.chainId, r);
          })(t, { onChange: e }),
        () => a(t),
        () => a(t)
      );
    }
    e.s(["useChainId", () => o], 840740);
  },
  868139,
  (e) => {
    "use strict";
    var t = e.i(323335),
      r = e.i(574578),
      n = e.i(372152),
      a = e.i(875917),
      i = e.i(603437),
      s = e.i(241664),
      o = e.i(834058),
      c = e.i(18685),
      u = e.i(432901),
      l = e.i(869336),
      d = e.i(337532),
      f = e.i(824219),
      p = e.i(382465),
      m = e.i(224588);
    function h({ chain: e, currentChainId: t }) {
      if (!e) throw new m.ChainNotFoundError();
      if (t !== e.id)
        throw new m.ChainMismatchError({ chain: e, currentChainId: t });
    }
    var y = e.i(648387),
      g = e.i(39788),
      b = e.i(39393),
      w = e.i(759151),
      v = e.i(713062),
      E = e.i(188444),
      x = e.i(580198),
      A = e.i(163314);
    let P = new v.LruMap(128);
    async function T(e, t) {
      let n,
        {
          account: a = e.account,
          assertChainId: i = !0,
          chain: s = e.chain,
          accessList: u,
          authorizationList: l,
          blobs: m,
          data: v,
          dataSuffix: T = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          gas: C,
          gasPrice: R,
          maxFeePerBlobGas: k,
          maxFeePerGas: B,
          maxPriorityFeePerGas: S,
          nonce: I,
          type: N,
          value: _,
          ...F
        } = t;
      if (void 0 === a)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransaction",
        });
      let z = a ? (0, o.parseAccount)(a) : null;
      try {
        (0, E.assertRequest)(t);
        let a = await (async () =>
          t.to
            ? t.to
            : null !== t.to && l && l.length > 0
            ? await (0, p.recoverAuthorizationAddress)({
                authorization: l[0],
              }).catch(() => {
                throw new f.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (z?.type === "json-rpc" || null === z) {
          let t;
          null !== s &&
            ((t = await (0, d.getAction)(e, r.getChainId, "getChainId")({})),
            i && h({ currentChainId: t, chain: s }));
          let n = e.chain?.formatters?.transactionRequest?.format,
            o = (n || w.formatTransactionRequest)(
              {
                ...(0, b.extract)(F, { format: n }),
                accessList: u,
                account: z,
                authorizationList: l,
                blobs: m,
                chainId: t,
                data: T ? (0, y.concat)([v ?? "0x", T]) : v,
                gas: C,
                gasPrice: R,
                maxFeePerBlobGas: k,
                maxFeePerGas: B,
                maxPriorityFeePerGas: S,
                nonce: I,
                to: a,
                type: N,
                value: _,
              },
              "sendTransaction"
            ),
            c = P.get(e.uid);
          try {
            return await e.request(
              {
                method: c ? "wallet_sendTransaction" : "eth_sendTransaction",
                params: [o],
              },
              { retryCount: 0 }
            );
          } catch (t) {
            if (!1 === c) throw t;
            if (
              "InvalidInputRpcError" === t.name ||
              "InvalidParamsRpcError" === t.name ||
              "MethodNotFoundRpcError" === t.name ||
              "MethodNotSupportedRpcError" === t.name
            )
              return await e
                .request(
                  { method: "wallet_sendTransaction", params: [o] },
                  { retryCount: 0 }
                )
                .then((t) => (P.set(e.uid, !0), t))
                .catch((r) => {
                  if (
                    "MethodNotFoundRpcError" === r.name ||
                    "MethodNotSupportedRpcError" === r.name
                  )
                    throw (P.set(e.uid, !1), t);
                  throw r;
                });
            throw t;
          }
        }
        if (z?.type === "local") {
          if (z.nonceManager && void 0 === I) {
            let t = F.chainId,
              a = await (async () =>
                "number" == typeof t
                  ? t
                  : s
                  ? s.id
                  : (0, d.getAction)(e, r.getChainId, "getChainId")({}))();
            n = { address: z.address, chainId: a };
          }
          let t = await (0, d.getAction)(
              e,
              x.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: z,
              accessList: u,
              authorizationList: l,
              blobs: m,
              chain: s,
              data: T ? (0, y.concat)([v ?? "0x", T]) : v,
              gas: C,
              gasPrice: R,
              maxFeePerBlobGas: k,
              maxFeePerGas: B,
              maxPriorityFeePerGas: S,
              nonce: I,
              nonceManager: z.nonceManager,
              parameters: [...x.defaultParameters, "sidecars"],
              type: N,
              value: _,
              ...F,
              to: a,
            }),
            i = s?.serializers?.transaction,
            o = await z.signTransaction(t, { serializer: i });
          return await (0, d.getAction)(
            e,
            A.sendRawTransaction,
            "sendRawTransaction"
          )({ serializedTransaction: o });
        }
        if (z?.type === "smart")
          throw new c.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new c.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransaction",
          type: z?.type,
        });
      } catch (e) {
        if (e instanceof c.AccountTypeNotSupportedError) throw e;
        throw (
          (n && z?.nonceManager?.reset(n),
          (0, g.getTransactionError)(e, {
            ...t,
            account: z,
            chain: t.chain || void 0,
          }))
        );
      }
    }
    async function C(e, t) {
      return C.internal(e, T, "sendTransaction", t);
    }
    (C || (C = {})).internal = async function (e, t, r, n) {
      let {
        abi: a,
        account: i = e.account,
        address: s,
        args: f,
        functionName: p,
        ...m
      } = n;
      if (void 0 === i)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/contract/writeContract",
        });
      let h = i ? (0, o.parseAccount)(i) : null,
        y = (0, u.encodeFunctionData)({ abi: a, args: f, functionName: p });
      try {
        return await (0, d.getAction)(
          e,
          t,
          r
        )({ data: y, to: s, account: h, ...m });
      } catch (e) {
        throw (0, l.getContractError)(e, {
          abi: a,
          address: s,
          args: f,
          docsPath: "/docs/contract/writeContract",
          functionName: p,
          sender: h?.address,
        });
      }
    };
    var R = e.i(127197);
    async function k(e, t) {
      return k.inner(C, e, t);
    }
    !(function (e) {
      async function t(t, r, n) {
        return await t(r, { ...n, ...e.call(r, n) });
      }
      async function r(t, r) {
        return (0, i.estimateContractGas)(t, {
          ...(0, R.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      async function o(t, r) {
        return (0, s.simulateContract)(t, {
          ...(0, R.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      (e.inner = t),
        (e.call = function (e, t) {
          return (0, R.defineCall)(
            (function (e, t) {
              let { amount: r, spender: a, token: i } = t,
                { address: s, decimals: o } = (0, R.resolveToken)(e, {
                  token: i,
                });
              return {
                abi: n.erc20Abi,
                address: s,
                args: [a, (0, R.toBaseUnits)(r, o)],
                functionName: "approve",
              };
            })(e, t)
          );
        }),
        (e.estimateGas = r),
        (e.simulate = o),
        (e.extractEvent = function (e) {
          let [t] = (0, a.parseEventLogs)({
            abi: n.erc20Abi,
            logs: e,
            eventName: "Approval",
            strict: !0,
          });
          if (!t) throw Error("`Approval` event not found.");
          return t;
        });
    })(k || (k = {}));
    var B = e.i(310535),
      S = e.i(503719),
      I = e.i(374875),
      N = e.i(551313);
    let _ = new v.LruMap(128);
    async function F(e, t) {
      let n,
        {
          account: a = e.account,
          assertChainId: i = !0,
          chain: s = e.chain,
          accessList: u,
          authorizationList: l,
          blobs: m,
          data: v,
          dataSuffix: A = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          gas: P,
          gasPrice: T,
          maxFeePerBlobGas: C,
          maxFeePerGas: R,
          maxPriorityFeePerGas: k,
          nonce: B,
          pollingInterval: F,
          throwOnReceiptRevert: z,
          type: q,
          value: $,
          ...M
        } = t,
        H = t.timeout ?? Math.max((s?.blockTime ?? 0) * 3, 5e3);
      if (void 0 === a)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransactionSync",
        });
      let D = a ? (0, o.parseAccount)(a) : null;
      try {
        (0, E.assertRequest)(t);
        let a = await (async () =>
          t.to
            ? t.to
            : null !== t.to && l && l.length > 0
            ? await (0, p.recoverAuthorizationAddress)({
                authorization: l[0],
              }).catch(() => {
                throw new f.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (D?.type === "json-rpc" || null === D) {
          let t;
          null !== s &&
            ((t = await (0, d.getAction)(e, r.getChainId, "getChainId")({})),
            i && h({ currentChainId: t, chain: s }));
          let n = e.chain?.formatters?.transactionRequest?.format,
            o = (n || w.formatTransactionRequest)(
              {
                ...(0, b.extract)(M, { format: n }),
                accessList: u,
                account: D,
                authorizationList: l,
                blobs: m,
                chainId: t,
                data: A ? (0, y.concat)([v ?? "0x", A]) : v,
                gas: P,
                gasPrice: T,
                maxFeePerBlobGas: C,
                maxFeePerGas: R,
                maxPriorityFeePerGas: k,
                nonce: B,
                to: a,
                type: q,
                value: $,
              },
              "sendTransaction"
            ),
            c = _.get(e.uid),
            f = c ? "wallet_sendTransaction" : "eth_sendTransaction",
            p = await (async () => {
              try {
                return await e.request(
                  { method: f, params: [o] },
                  { retryCount: 0 }
                );
              } catch (t) {
                if (!1 === c) throw t;
                if (
                  "InvalidInputRpcError" === t.name ||
                  "InvalidParamsRpcError" === t.name ||
                  "MethodNotFoundRpcError" === t.name ||
                  "MethodNotSupportedRpcError" === t.name
                )
                  return await e
                    .request(
                      { method: "wallet_sendTransaction", params: [o] },
                      { retryCount: 0 }
                    )
                    .then((t) => (_.set(e.uid, !0), t))
                    .catch((r) => {
                      if (
                        "MethodNotFoundRpcError" === r.name ||
                        "MethodNotSupportedRpcError" === r.name
                      )
                        throw (_.set(e.uid, !1), t);
                      throw r;
                    });
                throw t;
              }
            })(),
            g = await (0, d.getAction)(
              e,
              I.waitForTransactionReceipt,
              "waitForTransactionReceipt"
            )({
              checkReplacement: !1,
              hash: p,
              pollingInterval: F,
              timeout: H,
            });
          if (z && "reverted" === g.status)
            throw new S.TransactionReceiptRevertedError({ receipt: g });
          return g;
        }
        if (D?.type === "local") {
          if (D.nonceManager && void 0 === B) {
            let t = M.chainId,
              a = await (async () =>
                "number" == typeof t
                  ? t
                  : s
                  ? s.id
                  : (0, d.getAction)(e, r.getChainId, "getChainId")({}))();
            n = { address: D.address, chainId: a };
          }
          let i = await (0, d.getAction)(
              e,
              x.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: D,
              accessList: u,
              authorizationList: l,
              blobs: m,
              chain: s,
              data: A ? (0, y.concat)([v ?? "0x", A]) : v,
              gas: P,
              gasPrice: T,
              maxFeePerBlobGas: C,
              maxFeePerGas: R,
              maxPriorityFeePerGas: k,
              nonce: B,
              nonceManager: D.nonceManager,
              parameters: [...x.defaultParameters, "sidecars"],
              type: q,
              value: $,
              ...M,
              to: a,
            }),
            o = s?.serializers?.transaction,
            c = await D.signTransaction(i, { serializer: o });
          return await (0, d.getAction)(
            e,
            N.sendRawTransactionSync,
            "sendRawTransactionSync"
          )({
            serializedTransaction: c,
            throwOnReceiptRevert: z,
            timeout: t.timeout,
          });
        }
        if (D?.type === "smart")
          throw new c.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new c.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransactionSync",
          type: D?.type,
        });
      } catch (e) {
        if (e instanceof c.AccountTypeNotSupportedError) throw e;
        throw (
          (!n ||
            e instanceof S.TransactionReceiptRevertedError ||
            D?.nonceManager?.reset(n),
          (0, g.getTransactionError)(e, {
            ...t,
            account: D,
            chain: t.chain || void 0,
          }))
        );
      }
    }
    async function z(e, t) {
      return C.internal(e, F, "sendTransactionSync", t);
    }
    async function q(e, t) {
      let { amount: r, token: n, throwOnReceiptRevert: a = !0 } = t,
        { decimals: i } = (0, R.resolveToken)(e, { token: n }),
        s = (0, R.resolveAmountDecimals)(r, i),
        o = await k.inner(z, e, { ...t, throwOnReceiptRevert: a }),
        { args: c } = k.extractEvent(o.logs);
      return {
        ...c,
        ...(void 0 === s
          ? {}
          : { decimals: s, formatted: (0, B.formatUnits)(c.value, s) }),
        receipt: o,
      };
    }
    async function $(e, t) {
      return $.inner(C, e, t);
    }
    async function M(e, t) {
      let { amount: r, token: n, throwOnReceiptRevert: a = !0 } = t,
        { decimals: i } = (0, R.resolveToken)(e, { token: n }),
        s = (0, R.resolveAmountDecimals)(r, i),
        o = await $.inner(z, e, { ...t, throwOnReceiptRevert: a }),
        { args: c } = $.extractEvent(o.logs);
      return {
        ...c,
        ...(void 0 === s
          ? {}
          : { decimals: s, formatted: (0, B.formatUnits)(c.value, s) }),
        receipt: o,
      };
    }
    !(function (e) {
      async function t(t, r, n) {
        return await t(r, { ...n, ...e.call(r, n) });
      }
      async function r(t, r) {
        return (0, i.estimateContractGas)(t, {
          ...(0, R.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      async function o(t, r) {
        return (0, s.simulateContract)(t, {
          ...(0, R.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      (e.inner = t),
        (e.call = function (e, t) {
          return (0, R.defineCall)(
            (function (e, t) {
              let { amount: r, from: a, to: i, token: s } = t,
                { address: o, decimals: c } = (0, R.resolveToken)(e, {
                  token: s,
                }),
                u = (0, R.toBaseUnits)(r, c);
              return a
                ? {
                    abi: n.erc20Abi,
                    address: o,
                    args: [a, i, u],
                    functionName: "transferFrom",
                  }
                : {
                    abi: n.erc20Abi,
                    address: o,
                    args: [i, u],
                    functionName: "transfer",
                  };
            })(e, t)
          );
        }),
        (e.estimateGas = r),
        (e.simulate = o),
        (e.extractEvent = function (e) {
          let [t] = (0, a.parseEventLogs)({
            abi: n.erc20Abi,
            logs: e,
            eventName: "Transfer",
            strict: !0,
          });
          if (!t) throw Error("`Transfer` event not found.");
          return t;
        });
    })($ || ($ = {}));
    var H = e.i(968974);
    async function D(e, { chain: t }) {
      let {
        id: r,
        name: n,
        nativeCurrency: a,
        rpcUrls: i,
        blockExplorers: s,
      } = t;
      await e.request(
        {
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: (0, H.numberToHex)(r),
              chainName: n,
              nativeCurrency: a,
              rpcUrls: i.default.http,
              blockExplorerUrls: s
                ? Object.values(s).map(({ url: e }) => e)
                : void 0,
            },
          ],
        },
        { dedupe: !0, retryCount: 0 }
      );
    }
    var O = e.i(170245),
      j = e.i(93431);
    async function U(e) {
      return e.account?.type === "local"
        ? [e.account.address]
        : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
            (e) => (0, j.checksumAddress)(e)
          );
    }
    var L = e.i(764911),
      G = e.i(340903),
      V = e.i(378379),
      W = e.i(180416),
      J = e.i(381835);
    let K =
        "0x5792579257925792579257925792579257925792579257925792579257925792",
      Z = (0, H.numberToHex)(0, { size: 32 });
    async function Y(e, t) {
      let {
          account: r = e.account,
          chain: n = e.chain,
          experimental_fallback: a,
          experimental_fallbackDelay: i = 32,
          forceAtomic: s = !1,
          id: c,
          version: l = "2.0.0",
        } = t,
        d = r ? (0, o.parseAccount)(r) : null,
        p = t.capabilities;
      e.dataSuffix &&
        !t.capabilities?.dataSuffix &&
        (p =
          "string" == typeof e.dataSuffix
            ? {
                ...t.capabilities,
                dataSuffix: { value: e.dataSuffix, optional: !0 },
              }
            : {
                ...t.capabilities,
                dataSuffix: {
                  value: e.dataSuffix.value,
                  ...(e.dataSuffix.required ? {} : { optional: !0 }),
                },
              });
      let m = t.calls.map((e) => {
        let t = e.abi
          ? (0, u.encodeFunctionData)({
              abi: e.abi,
              functionName: e.functionName,
              args: e.args,
            })
          : e.data;
        return {
          data: e.dataSuffix && t ? (0, y.concat)([t, e.dataSuffix]) : t,
          to: e.to,
          value: e.value ? (0, H.numberToHex)(e.value) : void 0,
        };
      });
      try {
        let t = await e.request(
          {
            method: "wallet_sendCalls",
            params: [
              {
                atomicRequired: s,
                calls: m,
                capabilities: p,
                chainId: (0, H.numberToHex)(n.id),
                from: d?.address,
                id: c,
                version: l,
              },
            ],
          },
          { retryCount: 0 }
        );
        if ("string" == typeof t) return { id: t };
        return t;
      } catch (r) {
        if (
          a &&
          ("MethodNotFoundRpcError" === r.name ||
            "MethodNotSupportedRpcError" === r.name ||
            "UnknownRpcError" === r.name ||
            r.details
              .toLowerCase()
              .includes("does not exist / is not available") ||
            r.details.toLowerCase().includes("missing or invalid. request()") ||
            r.details
              .toLowerCase()
              .includes("did not match any variant of untagged enum") ||
            r.details
              .toLowerCase()
              .includes("account upgraded to unsupported contract") ||
            r.details.toLowerCase().includes("eip-7702 not supported") ||
            r.details.toLowerCase().includes("unsupported wc_ method") ||
            r.details.toLowerCase().includes("feature toggled misconfigured") ||
            r.details
              .toLowerCase()
              .includes(
                "jsonrpcengine: response has no error or result for request"
              ))
        ) {
          if (p && Object.values(p).some((e) => !e.optional)) {
            let e =
              "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
            throw new J.UnsupportedNonOptionalCapabilityError(
              new f.BaseError(e, { details: e })
            );
          }
          if (s && m.length > 1) {
            let e =
              "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
            throw new J.AtomicityNotSupportedError(
              new f.BaseError(e, { details: e })
            );
          }
          let t = [];
          for (let r of m) {
            try {
              let a = await T(e, {
                account: d,
                chain: n,
                data: r.data,
                to: r.to,
                value: r.value ? (0, V.hexToBigInt)(r.value) : void 0,
              });
              t.push({ status: "fulfilled", value: a });
            } catch (e) {
              t.push({ reason: e, status: "rejected" });
            }
            i > 0 && (await new Promise((e) => setTimeout(e, i)));
          }
          if (t.every((e) => "rejected" === e.status)) throw t[0].reason;
          let r = t.map((e) => ("fulfilled" === e.status ? e.value : Z));
          return {
            id: (0, y.concat)([
              ...r,
              (0, H.numberToHex)(n.id, { size: 32 }),
              K,
            ]),
          };
        }
        throw (0, g.getTransactionError)(r, {
          ...t,
          account: d,
          chain: t.chain,
        });
      }
    }
    async function Q(e, t) {
      let r;
      async function n(t) {
        if (t.endsWith(K.slice(2))) {
          let r = (0, G.trim)((0, L.sliceHex)(t, -64, -32)),
            n = (0, L.sliceHex)(t, 0, -64)
              .slice(2)
              .match(/.{1,64}/g),
            a = await Promise.all(
              n.map((t) =>
                Z.slice(2) !== t
                  ? e.request(
                      {
                        method: "eth_getTransactionReceipt",
                        params: [`0x${t}`],
                      },
                      { dedupe: !0 }
                    )
                  : void 0
              )
            ),
            i = a.some((e) => null === e)
              ? 100
              : a.every((e) => e?.status === "0x1")
              ? 200
              : a.every((e) => e?.status === "0x0")
              ? 500
              : 600;
          return {
            atomic: !1,
            chainId: (0, V.hexToNumber)(r),
            receipts: a.filter(Boolean),
            status: i,
            version: "2.0.0",
          };
        }
        return e.request({ method: "wallet_getCallsStatus", params: [t] });
      }
      let {
          atomic: a = !1,
          chainId: i,
          receipts: s,
          version: o = "2.0.0",
          ...c
        } = await n(t.id),
        [u, l] =
          (r = c.status) >= 100 && r < 200
            ? ["pending", r]
            : r >= 200 && r < 300
            ? ["success", r]
            : r >= 300 && r < 700
            ? ["failure", r]
            : "CONFIRMED" === r
            ? ["success", 200]
            : "PENDING" === r
            ? ["pending", 100]
            : [void 0, r];
      return {
        ...c,
        atomic: a,
        chainId: i ? (0, V.hexToNumber)(i) : void 0,
        receipts:
          s?.map((e) => ({
            ...e,
            blockNumber: (0, V.hexToBigInt)(e.blockNumber),
            gasUsed: (0, V.hexToBigInt)(e.gasUsed),
            status: W.receiptStatuses[e.status],
          })) ?? [],
        statusCode: l,
        status: u,
        version: o,
      };
    }
    async function X(e, t = {}) {
      let { account: r = e.account, chainId: n } = t,
        a = r ? (0, o.parseAccount)(r) : void 0,
        i = n ? [a?.address, [(0, H.numberToHex)(n)]] : [a?.address],
        s = await e.request({ method: "wallet_getCapabilities", params: i }),
        c = {};
      for (let [e, t] of Object.entries(s))
        for (let [r, n] of ((c[Number(e)] = {}), Object.entries(t)))
          "addSubAccount" === r && (r = "unstable_addSubAccount"),
            (c[Number(e)][r] = n);
      return "number" == typeof n ? c[n] : c;
    }
    async function ee(e) {
      return await e.request(
        { method: "wallet_getPermissions" },
        { dedupe: !0 }
      );
    }
    var et = e.i(746501),
      er = e.i(687113);
    async function en(e, t) {
      let { account: n = e.account, chainId: a, nonce: i } = t;
      if (!n)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/eip7702/prepareAuthorization",
        });
      let s = (0, o.parseAccount)(n),
        u = (() => {
          if (t.executor)
            return "self" === t.executor
              ? t.executor
              : (0, o.parseAccount)(t.executor);
        })(),
        l = { address: t.contractAddress ?? t.address, chainId: a, nonce: i };
      return (
        void 0 === l.chainId &&
          (l.chainId =
            e.chain?.id ??
            (await (0, d.getAction)(e, r.getChainId, "getChainId")({}))),
        void 0 === l.nonce &&
          ((l.nonce = await (0, d.getAction)(
            e,
            er.getTransactionCount,
            "getTransactionCount"
          )({ address: s.address, blockTag: "pending" })),
          ("self" === u ||
            (u?.address && (0, et.isAddressEqual)(u.address, s.address))) &&
            (l.nonce += 1)),
        l
      );
    }
    async function ea(e) {
      return (
        await e.request(
          { method: "eth_requestAccounts" },
          { dedupe: !0, retryCount: 0 }
        )
      ).map((e) => (0, j.getAddress)(e));
    }
    async function ei(e, t) {
      return e.request(
        { method: "wallet_requestPermissions", params: [t] },
        { retryCount: 0 }
      );
    }
    var es = f,
      eo = f;
    class ec extends eo.BaseError {
      constructor(e) {
        super(`Call bundle failed with status: ${e.statusCode}`, {
          name: "BundleFailedError",
        }),
          Object.defineProperty(this, "result", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.result = e);
      }
    }
    var eu = e.i(407951),
      el = e.i(754095),
      ed = e.i(160912),
      ef = e.i(695602),
      ep = e.i(518356);
    async function em(e, t) {
      let r,
        {
          id: n,
          pollingInterval: a = e.pollingInterval,
          status: i = ({ statusCode: e }) => 200 === e || e >= 300,
          retryCount: s = 4,
          retryDelay: o = ({ count: e }) => 200 * ~~(1 << e),
          timeout: c = 6e4,
          throwOnFailure: u = !1,
        } = t,
        l = (0, ep.stringify)(["waitForCallsStatus", e.uid, n]),
        { promise: f, resolve: p, reject: m } = (0, ed.withResolvers)(),
        h = (0, eu.observe)(l, { resolve: p, reject: m }, (t) => {
          let c = (0, el.poll)(
            async () => {
              let a = (e) => {
                clearTimeout(r), c(), e(), h();
              };
              try {
                let r = await (0, ef.withRetry)(
                  async () => {
                    let t = await (0, d.getAction)(
                      e,
                      Q,
                      "getCallsStatus"
                    )({ id: n });
                    if (u && "failure" === t.status) throw new ec(t);
                    return t;
                  },
                  { retryCount: s, delay: o }
                );
                if (!i(r)) return;
                a(() => t.resolve(r));
              } catch (e) {
                a(() => t.reject(e));
              }
            },
            { interval: a, emitOnBegin: !0 }
          );
          return c;
        });
      return (
        (r = c
          ? setTimeout(() => {
              h(), clearTimeout(r), m(new eh({ id: n }));
            }, c)
          : void 0),
        await f
      );
    }
    class eh extends es.BaseError {
      constructor({ id: e }) {
        super(
          `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
          { name: "WaitForCallsStatusTimeoutError" }
        );
      }
    }
    async function ey(e, t) {
      let { chain: r = e.chain } = t,
        n = t.timeout ?? Math.max((r?.blockTime ?? 0) * 3, 5e3),
        a = await (0, d.getAction)(e, Y, "sendCalls")(t);
      return await (0, d.getAction)(
        e,
        em,
        "waitForCallsStatus"
      )({ ...t, id: a.id, timeout: n });
    }
    async function eg(e, t) {
      let { id: r } = t;
      await e.request({ method: "wallet_showCallsStatus", params: [r] });
    }
    async function eb(e, t) {
      let { account: r = e.account } = t;
      if (!r)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/eip7702/signAuthorization",
        });
      let n = (0, o.parseAccount)(r);
      if (!n.signAuthorization)
        throw new c.AccountTypeNotSupportedError({
          docsPath: "/docs/eip7702/signAuthorization",
          metaMessages: [
            "The `signAuthorization` Action does not support JSON-RPC Accounts.",
          ],
          type: n.type,
        });
      let a = await en(e, t);
      return n.signAuthorization(a);
    }
    async function ew(e, { account: t = e.account, message: r }) {
      if (!t)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signMessage",
        });
      let n = (0, o.parseAccount)(t);
      if (n.signMessage) return n.signMessage({ message: r });
      let a =
        "string" == typeof r
          ? (0, H.stringToHex)(r)
          : r.raw instanceof Uint8Array
          ? (0, H.toHex)(r.raw)
          : r.raw;
      return e.request(
        { method: "personal_sign", params: [a, n.address] },
        { retryCount: 0 }
      );
    }
    async function ev(e, t) {
      let { account: n = e.account, chain: a = e.chain, ...i } = t;
      if (!n)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signTransaction",
        });
      let s = (0, o.parseAccount)(n);
      (0, E.assertRequest)({ account: s, ...t });
      let u = await (0, d.getAction)(e, r.getChainId, "getChainId")({});
      null !== a && h({ currentChainId: u, chain: a });
      let l = a?.formatters || e.chain?.formatters,
        f = l?.transactionRequest?.format || w.formatTransactionRequest;
      return s.signTransaction
        ? s.signTransaction(
            { ...i, account: s, chainId: u },
            { serializer: e.chain?.serializers?.transaction }
          )
        : await e.request(
            {
              method: "eth_signTransaction",
              params: [
                {
                  ...f({ ...i, account: s }, "signTransaction"),
                  chainId: (0, H.numberToHex)(u),
                  from: s.address,
                },
              ],
            },
            { retryCount: 0 }
          );
    }
    var eE = e.i(801819);
    async function ex(e, t) {
      let { account: r = e.account, domain: n, message: a, primaryType: i } = t;
      if (!r)
        throw new c.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signTypedData",
        });
      let s = (0, o.parseAccount)(r),
        u = {
          EIP712Domain: (0, eE.getTypesForEIP712Domain)({ domain: n }),
          ...t.types,
        };
      if (
        ((0, eE.validateTypedData)({
          domain: n,
          message: a,
          primaryType: i,
          types: u,
        }),
        s.signTypedData)
      )
        return s.signTypedData({
          domain: n,
          message: a,
          primaryType: i,
          types: u,
        });
      let l = (0, eE.serializeTypedData)({
        domain: n,
        message: a,
        primaryType: i,
        types: u,
      });
      return e.request(
        { method: "eth_signTypedData_v4", params: [s.address, l] },
        { retryCount: 0 }
      );
    }
    async function eA(e, { id: t }) {
      await e.request(
        {
          method: "wallet_switchEthereumChain",
          params: [{ chainId: (0, H.numberToHex)(t) }],
        },
        { retryCount: 0 }
      );
    }
    async function eP(e, t) {
      return await e.request(
        { method: "wallet_watchAsset", params: t },
        { retryCount: 0 }
      );
    }
    var eT = e.i(860054);
    function eC(e) {
      return {
        addChain: (t) => D(e, t),
        deployContract: (t) =>
          (function (e, t) {
            let { abi: r, args: n, bytecode: a, ...i } = t,
              s = (0, O.encodeDeployData)({ abi: r, args: n, bytecode: a });
            return T(e, {
              ...i,
              ...(i.authorizationList ? { to: null } : {}),
              data: s,
            });
          })(e, t),
        fillTransaction: (r) => (0, t.fillTransaction)(e, r),
        getAddresses: () => U(e),
        getCallsStatus: (t) => Q(e, t),
        getCapabilities: (t) => X(e, t),
        getChainId: () => (0, r.getChainId)(e),
        getPermissions: () => ee(e),
        prepareAuthorization: (t) => en(e, t),
        prepareTransactionRequest: (t) =>
          (0, x.prepareTransactionRequest)(e, t),
        requestAddresses: () => ea(e),
        requestPermissions: (t) => ei(e, t),
        sendCalls: (t) => Y(e, t),
        sendCallsSync: (t) => ey(e, t),
        sendRawTransaction: (t) => (0, A.sendRawTransaction)(e, t),
        sendRawTransactionSync: (t) => (0, N.sendRawTransactionSync)(e, t),
        sendTransaction: (t) => T(e, t),
        sendTransactionSync: (t) => F(e, t),
        showCallsStatus: (t) => eg(e, t),
        signAuthorization: (t) => eb(e, t),
        signMessage: (t) => ew(e, t),
        signTransaction: (t) => ev(e, t),
        signTypedData: (t) => ex(e, t),
        switchChain: (t) => eA(e, t),
        waitForCallsStatus: (t) => em(e, t),
        watchAsset: (t) => eP(e, t),
        writeContract: (t) => C(e, t),
        writeContractSync: (t) => z(e, t),
        token: {
          approve: (0, eT.bindActionDecorators)(e, k),
          approveSync: (0, eT.bindActionDecorators)(e, q),
          transfer: (0, eT.bindActionDecorators)(e, $),
          transferSync: (0, eT.bindActionDecorators)(e, M),
        },
      };
    }
    var eR = e.i(949528),
      ek = e.i(936310);
    async function eB(e, t = {}) {
      let r,
        { assertChainId: n = !0 } = t;
      if (t.connector) {
        let { connector: n } = t;
        if (
          "reconnecting" === e.state.status &&
          !n.getAccounts &&
          !n.getChainId
        )
          throw new ek.ConnectorUnavailableReconnectingError({ connector: n });
        let [a, i] = await Promise.all([
          n.getAccounts().catch((e) => {
            if (null === t.account) return [];
            throw e;
          }),
          n.getChainId(),
        ]);
        r = { accounts: a, chainId: i, connector: n };
      } else r = e.state.connections.get(e.state.current);
      if (!r) throw new ek.ConnectorNotConnectedError();
      let a = t.chainId ?? r.chainId,
        i = await r.connector.getChainId();
      if (n && i !== a)
        throw new ek.ConnectorChainMismatchError({
          connectionChainId: a,
          connectorChainId: i,
        });
      let s = r.connector;
      if (s.getClient) return s.getClient({ chainId: a });
      let c = (0, o.parseAccount)(t.account ?? r.accounts[0]);
      if (
        (c && (c.address = (0, j.getAddress)(c.address)),
        t.account &&
          !r.accounts.some((e) => e.toLowerCase() === c.address.toLowerCase()))
      )
        throw new ek.ConnectorAccountNotFoundError({
          address: c.address,
          connector: s,
        });
      let u = e.chains.find((e) => e.id === a),
        l = await r.connector.getProvider({ chainId: a });
      return (0, eT.createClient)({
        account: c,
        chain: u,
        name: "Connector Client",
        transport: (e) =>
          (function (e, t = {}) {
            let {
              key: r = "custom",
              methods: n,
              name: a = "Custom Provider",
              retryDelay: i,
            } = t;
            return ({ retryCount: s }) =>
              (0, eR.createTransport)({
                key: r,
                methods: n,
                name: a,
                request: e.request.bind(e),
                retryCount: t.retryCount ?? s,
                retryDelay: i,
                type: "custom",
              });
          })(l)({ ...e, retryCount: 0 }),
      });
    }
    async function eS(e, t = {}) {
      return (await eB(e, t)).extend(eC);
    }
    e.s(["getWalletClient", () => eS], 868139);
  },
  25057,
  (e) => {
    "use strict";
    var t = e.i(868139),
      r = e.i(731252);
    function n(e, a = {}) {
      return {
        gcTime: 0,
        async queryFn({ queryKey: r }) {
          let { connector: n } = a,
            { connectorUid: i, scopeKey: s, ...o } = r[1];
          return (0, t.getWalletClient)(e, { ...o, connector: n });
        },
        queryKey: (function (e = {}) {
          let { connector: t, ...n } = e;
          return [
            "walletClient",
            { ...(0, r.filterQueryOptions)(n), connectorUid: t?.uid },
          ];
        })(a),
      };
    }
    e.s(["getWalletClientQueryOptions", () => n]);
  },
  843379,
  (e) => {
    "use strict";
    var t = e.i(707602),
      r = e.i(25057),
      n = e.i(642947),
      a = e.i(996145),
      i = e.i(277550),
      s = e.i(840740),
      o = e.i(42407);
    function c(e = {}) {
      let { query: u = {}, ...l } = e,
        d = (0, o.useConfig)(l),
        f = (0, t.useQueryClient)(),
        {
          address: p,
          connector: m,
          status: h,
        } = (0, i.useAccount)({ config: d }),
        y = (0, s.useChainId)({ config: d }),
        g = e.connector ?? m,
        { queryKey: b, ...w } = (0, r.getWalletClientQueryOptions)(d, {
          ...e,
          chainId: e.chainId ?? y,
          connector: e.connector ?? m,
        }),
        v = !!(
          ("connected" === h || ("reconnecting" === h && g?.getProvider)) &&
          (u.enabled ?? !0)
        ),
        E = (0, n.useRef)(p);
      return (
        (0, n.useEffect)(() => {
          let e = E.current;
          !p && e
            ? (f.removeQueries({ queryKey: b }), (E.current = void 0))
            : p !== e &&
              (f.invalidateQueries({ queryKey: b }), (E.current = p));
        }, [p, f]),
        (0, a.useQuery)({
          ...u,
          ...w,
          queryKey: b,
          enabled: v,
          staleTime: 1 / 0,
        })
      );
    }
    e.s(["useWalletClient", () => c]);
  },
]);
