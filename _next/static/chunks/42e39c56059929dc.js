(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  590479,
  329962,
  (e) => {
    "use strict";
    var t,
      r = e.i(283450);
    let i = /#/g,
      n = /&/g,
      a = /\//g,
      o = /=/g,
      s = /\+/g,
      l = /%5e/gi,
      u = /%60/gi,
      c = /%7c/gi,
      d = /%20/gi;
    function f(e) {
      return encodeURI("" + ("string" == typeof e ? e : JSON.stringify(e)))
        .replace(c, "|")
        .replace(s, "%2B")
        .replace(d, "+")
        .replace(i, "%23")
        .replace(n, "%26")
        .replace(u, "`")
        .replace(l, "^")
        .replace(a, "%2F");
    }
    function p(e) {
      return f(e).replace(o, "%3D");
    }
    function m(e = "") {
      try {
        return decodeURIComponent("" + e);
      } catch {
        return "" + e;
      }
    }
    let y = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
      h = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
      b = /^([/\\]\s*){2,}[^/\\]/,
      g = /\/$|\/\?|\/#/,
      w = /^\.?\//;
    function v(e, t = {}) {
      return ("boolean" == typeof t && (t = { acceptRelative: t }), t.strict)
        ? y.test(e)
        : h.test(e) || (!!t.acceptRelative && b.test(e));
    }
    let _ = Symbol.for("ufo:protocolRelative");
    function A(e = "") {
      let [t = "", r = "", i = ""] = (
        e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
      ).splice(1);
      return { pathname: t, search: r, hash: i };
    }
    class E extends Error {
      constructor(e, t) {
        super(e, t),
          (this.name = "FetchError"),
          t?.cause && !this.cause && (this.cause = t.cause);
      }
    }
    let x = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    function T(e = "GET") {
      return x.has(e.toUpperCase());
    }
    let k = new Set([
        "image/svg",
        "application/xml",
        "application/xhtml",
        "application/html",
      ]),
      S = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    async function P(e, t) {
      if (t)
        if (Array.isArray(t)) for (let r of t) await r(e);
        else await t(e);
    }
    let I = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
      C = new Set([101, 204, 205, 304]);
    e.s(
      [
        "F",
        () => E,
        "c",
        () =>
          function e(t = {}) {
            let {
              fetch: i = globalThis.fetch,
              Headers: n = globalThis.Headers,
              AbortController: a = globalThis.AbortController,
            } = t;
            async function o(e) {
              let t =
                (e.error &&
                  "AbortError" === e.error.name &&
                  !e.options.timeout) ||
                !1;
              if (!1 !== e.options.retry && !t) {
                let t;
                t =
                  "number" == typeof e.options.retry
                    ? e.options.retry
                    : +!T(e.options.method);
                let r = (e.response && e.response.status) || 500;
                if (
                  t > 0 &&
                  (Array.isArray(e.options.retryStatusCodes)
                    ? e.options.retryStatusCodes.includes(r)
                    : I.has(r))
                ) {
                  let r =
                    "function" == typeof e.options.retryDelay
                      ? e.options.retryDelay(e)
                      : e.options.retryDelay || 0;
                  return (
                    r > 0 && (await new Promise((e) => setTimeout(e, r))),
                    l(e.request, { ...e.options, retry: t - 1 })
                  );
                }
              }
              let r = (function (e) {
                let t = e.error?.message || e.error?.toString() || "",
                  r = e.request?.method || e.options?.method || "GET",
                  i = e.request?.url || String(e.request) || "/",
                  n = `[${r}] ${JSON.stringify(i)}`,
                  a = e.response
                    ? `${e.response.status} ${e.response.statusText}`
                    : "<no response>",
                  o = new E(
                    `${n}: ${a}${t ? ` ${t}` : ""}`,
                    e.error ? { cause: e.error } : void 0
                  );
                for (let t of ["request", "options", "response"])
                  Object.defineProperty(o, t, { get: () => e[t] });
                for (let [t, r] of [
                  ["data", "_data"],
                  ["status", "status"],
                  ["statusCode", "status"],
                  ["statusText", "statusText"],
                  ["statusMessage", "statusText"],
                ])
                  Object.defineProperty(o, t, {
                    get: () => e.response && e.response[r],
                  });
                return o;
              })(e);
              throw (
                (Error.captureStackTrace && Error.captureStackTrace(r, l), r)
              );
            }
            let l = async function (e, l = {}) {
                var u, c, d, y;
                let h,
                  b,
                  g,
                  E = {
                    request: e,
                    options:
                      ((u = t.defaults),
                      (g = (function (e, t, r) {
                        if (!t) return new r(e);
                        let i = new r(t);
                        if (e)
                          for (let [t, n] of Symbol.iterator in e ||
                          Array.isArray(e)
                            ? e
                            : new r(e))
                            i.set(t, n);
                        return i;
                      })(l?.headers ?? e?.headers, u?.headers, n)),
                      (u?.query || u?.params || l?.params || l?.query) &&
                        (b = {
                          ...u?.params,
                          ...u?.query,
                          ...l?.params,
                          ...l?.query,
                        }),
                      { ...u, ...l, query: b, params: b, headers: g }),
                    response: void 0,
                    error: void 0,
                  };
                if (
                  (E.options.method &&
                    (E.options.method = E.options.method.toUpperCase()),
                  E.options.onRequest &&
                    (await P(E, E.options.onRequest),
                    E.options.headers instanceof n ||
                      (E.options.headers = new n(E.options.headers || {}))),
                  "string" == typeof E.request)
                ) {
                  if (
                    (E.options.baseURL &&
                      (E.request = (function (e, t) {
                        var r;
                        if (!(r = t) || "/" === r || v(e)) return e;
                        let i = (function (e = "", t) {
                          return (
                            (!(function (e = "", t) {
                              return e.endsWith("/");
                            })(e)
                              ? e
                              : e.slice(0, -1)) || "/"
                          );
                        })(t);
                        if (e.startsWith(i)) {
                          let t = e[i.length];
                          if (!t || "/" === t || "?" === t) return e;
                        }
                        return (function (e, ...t) {
                          let r = e || "";
                          for (let e of t.filter((e) => e && "/" !== e))
                            if (r) {
                              let t = e.replace(w, "");
                              r =
                                (function (e = "", t) {
                                  return e.endsWith("/") ? e : e + "/";
                                })(r) + t;
                            } else r = e;
                          return r;
                        })(i, e);
                      })(E.request, E.options.baseURL)),
                    E.options.query)
                  ) {
                    let e, t, r, i, n, a, o;
                    (c = E.request),
                      (d = E.options.query),
                      (t = {
                        ...(function (e = "") {
                          let t = Object.create(null);
                          for (let r of ("?" === e[0] && (e = e.slice(1)),
                          e.split("&"))) {
                            let e = r.match(/([^=]+)=?(.*)/) || [];
                            if (e.length < 2) continue;
                            let i = m(e[1].replace(s, " "));
                            if ("__proto__" === i || "constructor" === i)
                              continue;
                            let n = m((e[2] || "").replace(s, " "));
                            void 0 === t[i]
                              ? (t[i] = n)
                              : Array.isArray(t[i])
                              ? t[i].push(n)
                              : (t[i] = [t[i], n]);
                          }
                          return t;
                        })(
                          (e = (function e(t = "", r) {
                            let i = t.match(
                              /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
                            );
                            if (i) {
                              let [, e, t = ""] = i;
                              return {
                                protocol: e.toLowerCase(),
                                pathname: t,
                                href: e + t,
                                auth: "",
                                host: "",
                                search: "",
                                hash: "",
                              };
                            }
                            if (!v(t, { acceptRelative: !0 }))
                              return r ? e(r + t) : A(t);
                            let [, n = "", a, o = ""] =
                                t
                                  .replace(/\\/g, "/")
                                  .match(
                                    /^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/
                                  ) || [],
                              [, s = "", l = ""] =
                                o.match(/([^#/?]*)(.*)?/) || [];
                            "file:" === n &&
                              (l = l.replace(/\/(?=[A-Za-z]:)/, ""));
                            let { pathname: u, search: c, hash: d } = A(l);
                            return {
                              protocol: n.toLowerCase(),
                              auth: a
                                ? a.slice(0, Math.max(0, a.length - 1))
                                : "",
                              host: s,
                              pathname: u,
                              search: c,
                              hash: d,
                              [_]: !n,
                            };
                          })(c)).search
                        ),
                        ...d,
                      }),
                      (e.search = Object.keys(t)
                        .filter((e) => void 0 !== t[e])
                        .map((e) => {
                          var r;
                          return (("number" == typeof (r = t[e]) ||
                            "boolean" == typeof r) &&
                            (r = String(r)),
                          r)
                            ? Array.isArray(r)
                              ? r.map((t) => `${p(e)}=${f(t)}`).join("&")
                              : `${p(e)}=${f(r)}`
                            : p(e);
                        })
                        .filter(Boolean)
                        .join("&")),
                      (r = (y = e).pathname || ""),
                      (i = y.search
                        ? (y.search.startsWith("?") ? "" : "?") + y.search
                        : ""),
                      (n = y.hash || ""),
                      (a = y.auth ? y.auth + "@" : ""),
                      (o = y.host || ""),
                      (E.request =
                        (y.protocol || y[_] ? (y.protocol || "") + "//" : "") +
                        a +
                        o +
                        r +
                        i +
                        n),
                      delete E.options.query;
                  }
                  "query" in E.options && delete E.options.query,
                    "params" in E.options && delete E.options.params;
                }
                if (E.options.body && T(E.options.method))
                  if (
                    (function (e) {
                      if (void 0 === e) return !1;
                      let t = typeof e;
                      return (
                        "string" === t ||
                        "number" === t ||
                        "boolean" === t ||
                        null === t ||
                        ("object" === t &&
                          (!!Array.isArray(e) ||
                            (!(
                              e.buffer ||
                              e instanceof FormData ||
                              e instanceof URLSearchParams
                            ) &&
                              ((e.constructor &&
                                "Object" === e.constructor.name) ||
                                "function" == typeof e.toJSON))))
                      );
                    })(E.options.body)
                  ) {
                    let e = E.options.headers.get("content-type");
                    "string" != typeof E.options.body &&
                      (E.options.body =
                        "application/x-www-form-urlencoded" === e
                          ? new URLSearchParams(E.options.body).toString()
                          : JSON.stringify(E.options.body)),
                      e ||
                        E.options.headers.set(
                          "content-type",
                          "application/json"
                        ),
                      E.options.headers.has("accept") ||
                        E.options.headers.set("accept", "application/json");
                  } else
                    (("pipeTo" in E.options.body &&
                      "function" == typeof E.options.body.pipeTo) ||
                      "function" == typeof E.options.body.pipe) &&
                      !("duplex" in E.options) &&
                      (E.options.duplex = "half");
                if (!E.options.signal && E.options.timeout) {
                  let e = new a();
                  (h = setTimeout(() => {
                    let t = Error(
                      "[TimeoutError]: The operation was aborted due to timeout"
                    );
                    (t.name = "TimeoutError"), (t.code = 23), e.abort(t);
                  }, E.options.timeout)),
                    (E.options.signal = e.signal);
                }
                try {
                  E.response = await i(E.request, E.options);
                } catch (e) {
                  return (
                    (E.error = e),
                    E.options.onRequestError &&
                      (await P(E, E.options.onRequestError)),
                    await o(E)
                  );
                } finally {
                  h && clearTimeout(h);
                }
                if (
                  (E.response.body || E.response._bodyInit) &&
                  !C.has(E.response.status) &&
                  "HEAD" !== E.options.method
                ) {
                  let e =
                    (E.options.parseResponse
                      ? "json"
                      : E.options.responseType) ||
                    (function (e = "") {
                      if (!e) return "json";
                      let t = e.split(";").shift() || "";
                      return S.test(t)
                        ? "json"
                        : "text/event-stream" === t
                        ? "stream"
                        : k.has(t) || t.startsWith("text/")
                        ? "text"
                        : "blob";
                    })(E.response.headers.get("content-type") || "");
                  switch (e) {
                    case "json": {
                      let e = await E.response.text(),
                        t = E.options.parseResponse || r.default;
                      E.response._data = t(e);
                      break;
                    }
                    case "stream":
                      E.response._data =
                        E.response.body || E.response._bodyInit;
                      break;
                    default:
                      E.response._data = await E.response[e]();
                  }
                }
                return (E.options.onResponse &&
                  (await P(E, E.options.onResponse)),
                !E.options.ignoreResponseError &&
                  E.response.status >= 400 &&
                  E.response.status < 600)
                  ? (E.options.onResponseError &&
                      (await P(E, E.options.onResponseError)),
                    await o(E))
                  : E.response;
              },
              u = async function (e, t) {
                return (await l(e, t))._data;
              };
            return (
              (u.raw = l),
              (u.native = (...e) => i(...e)),
              (u.create = (r = {}, i = {}) =>
                e({
                  ...t,
                  ...i,
                  defaults: { ...t.defaults, ...i.defaults, ...r },
                })),
              u
            );
          },
      ],
      329962
    );
    var N = e.i(642947);
    class O extends Error {
      toString() {
        return `${this.type}${
          this.privyErrorCode ? `-${this.privyErrorCode}` : ""
        }: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
      }
      constructor(e, t, r) {
        super(e),
          t instanceof Error && (this.cause = t),
          (this.privyErrorCode = r);
      }
    }
    class U extends O {
      constructor(e, t, r, i, n, a) {
        super(r, i, n), (this.type = e), (this.status = t), (this.data = a);
      }
    }
    class R extends O {
      constructor(e, t, r) {
        super(e, t, r), (this.type = "client_error");
      }
    }
    class L extends R {
      constructor() {
        super("Request timed out", void 0, "client_request_timeout");
      }
    }
    class W extends O {
      constructor(e, t, r) {
        super(e, t, r), (this.type = "connector_error");
      }
    }
    let B = (e) => {
        if (e instanceof O) return e;
        if (!(e instanceof E)) return D(e);
        if (!e.response) return new U("api_error", null, e.message, e);
        let { type: t, message: r, error: i, code: n } = e.data;
        return new U(t || "ApiError", e.response.status, r || i, e, n, e.data);
      },
      D = (e) =>
        e instanceof O
          ? e
          : e instanceof Error
          ? new R(e.message, e)
          : new R(`Internal error: ${e}`);
    var j =
      (((t = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended"),
      (t.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id"),
      (t.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID =
        "missing_or_invalid_privy_account_id"),
      (t.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token"),
      (t.INVALID_DATA = "invalid_data"),
      (t.INVALID_CAPTCHA = "invalid_captcha"),
      (t.LINKED_TO_ANOTHER_USER = "linked_to_another_user"),
      (t.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type"),
      (t.FAILED_TO_LINK_ACCOUNT = "failed_to_link_account"),
      (t.FAILED_TO_UPDATE_ACCOUNT = "failed_to_update_account"),
      (t.USER_EXITED_UPDATE_FLOW = "exited_update_flow"),
      (t.ALLOWLIST_REJECTED = "allowlist_rejected"),
      (t.OAUTH_USER_DENIED = "oauth_user_denied"),
      (t.OAUTH_UNEXPECTED = "oauth_unexpected"),
      (t.UNKNOWN_AUTH_ERROR = "unknown_auth_error"),
      (t.USER_EXITED_AUTH_FLOW = "exited_auth_flow"),
      (t.USER_EXITED_LINK_FLOW = "exited_link_flow"),
      (t.USER_EXITED_SET_PASSWORD_FLOW = "user_exited_set_password_flow"),
      (t.MUST_BE_AUTHENTICATED = "must_be_authenticated"),
      (t.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error"),
      (t.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error"),
      (t.CLIENT_REQUEST_TIMEOUT = "client_request_timeout"),
      (t.INVALID_CREDENTIALS = "invalid_credentials"),
      (t.MISSING_MFA_CREDENTIALS = "missing_or_invalid_mfa"),
      (t.UNKNOWN_MFA_ERROR = "unknown_mfa_error"),
      (t.EMBEDDED_WALLET_ALREADY_EXISTS = "embedded_wallet_already_exists"),
      (t.EMBEDDED_WALLET_NOT_FOUND = "embedded_wallet_not_found"),
      (t.EMBEDDED_WALLET_CREATE_ERROR = "embedded_wallet_create_error"),
      (t.UNKNOWN_EMBEDDED_WALLET_ERROR = "unknown_embedded_wallet_error"),
      (t.EMBEDDED_WALLET_PASSWORD_UNCONFIRMED =
        "embedded_wallet_password_unconfirmed"),
      (t.EMBEDDED_WALLET_PASSWORD_ALREADY_EXISTS =
        "embedded_wallet_password_already_exists"),
      (t.EMBEDDED_WALLET_RECOVERY_ALREADY_EXISTS =
        "embedded_wallet_recovery_already_exists"),
      (t.TRANSACTION_FAILURE = "transaction_failure"),
      (t.UNSUPPORTED_CHAIN_ID = "unsupported_chain_id"),
      (t.NOT_SUPPORTED = "not_supported"),
      (t.CAPTCHA_TIMEOUT = "captcha_timeout"),
      (t.INVALID_MESSAGE = "invalid_message"),
      (t.UNABLE_TO_SIGN = "unable_to_sign"),
      (t.CAPTCHA_FAILURE = "captcha_failure"),
      (t.CAPTCHA_DISABLED = "captcha_disabled"),
      (t.SESSION_STORAGE_UNAVAILABLE = "session_storage_unavailable"),
      (t.TOO_MANY_REQUESTS = "too_many_requests"),
      (t.USER_LIMIT_REACHED = "max_accounts_reached"),
      (t.DISALLOWED_LOGIN_METHOD = "disallowed_login_method"),
      (t.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email"),
      (t.PASSKEY_NOT_ALLOWED = "passkey_not_allowed"),
      (t.USER_DOES_NOT_EXIST = "user_does_not_exist"),
      (t.INSUFFICIENT_BALANCE = "insufficient_balance"),
      (t.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required"),
      (t.BUFFER_NOT_DEFINED = "buffer_not_defined"),
      (t.UNSUPPORTED_WALLET_TYPE = "unsupported_wallet_type"),
      (t.NO_SOLANA_ACCOUNTS = "no_solana_accounts"),
      (t.UNKNOWN_FUNDING_ERROR = "unknown_funding_error"),
      t);
    class M extends R {
      constructor() {
        super(
          "Method called before `ready`. Ensure you wait until `ready` is true before calling."
        );
      }
    }
    class F extends R {
      constructor(e = "Embedded wallet error", t) {
        super(e, t, "unknown_embedded_wallet_error");
      }
    }
    class z extends R {
      constructor(e = "User must be authenticated") {
        super(e, void 0, "must_be_authenticated");
      }
    }
    class K extends R {
      constructor(e) {
        super(
          "This application is in development mode and must be upgraded to production to log in new users.",
          e,
          "max_accounts_reached"
        );
      }
    }
    class V extends W {
      constructor() {
        super(
          "No Solana accounts found in wallet",
          void 0,
          "no_solana_accounts"
        );
      }
    }
    let G = () => {
        throw Error(
          "You need to wrap your application with the <PrivyProvider> initialized with your app id."
        );
      },
      q = (e) => () => {
        throw Error(e.trim());
      },
      H = () => {},
      $ = (0, N.createContext)({
        setAuthenticated: G,
        setUser: G,
        setIsNewUser: G,
        isNewUserThisSession: !1,
        walletConnectionStatus: null,
        setWalletConnectionStatus: G,
        connectors: [],
        rpcConfig: { rpcUrls: {} },
        showFiatPrices: !0,
        chains: [],
        clientAnalyticsId: null,
        pendingTransaction: null,
        client: null,
        privy: null,
        appId: "notAdded",
        hideWalletUIs: { current: !1 },
        nativeTokenSymbolForChainId: G,
        initializeWalletProxy: G,
        getAuthMeta: G,
        getAuthFlow: G,
        closePrivyModal: G,
        openPrivyModal: G,
        connectWallet: G,
        initLoginWithWallet: G,
        loginWithWallet: G,
        initLoginWithFarcaster: G,
        loginWithFarcaster: G,
        loginWithCode: G,
        initLoginWithEmail: G,
        initLoginWithSms: G,
        initUpdateEmail: G,
        initUpdatePhone: G,
        resendEmailCode: G,
        resendSmsCode: G,
        initLoginWithHeadlessOAuth: G,
        loginWithHeadlessOAuth: G,
        crossAppAuthFlow: G,
        initLoginWithOAuth: G,
        loginWithOAuth: G,
        passkeyAuthState: { status: "initial" },
        setPasskeyAuthState: G,
        initSignupWithPasskey: G,
        signupWithPasskey: G,
        initLoginWithPasskey: G,
        loginWithPasskey: G,
        initLinkWithPasskey: G,
        linkWithPasskey: G,
        refreshSessionAndUser: G,
        walletProxy: null,
        createAnalyticsEvent: G,
        acceptTerms: G,
        getUsdTokenPrice: G,
        getUsdPriceForSol: G,
        getSplTokenMetadata: G,
        recoverEmbeddedWallet: G,
        updateWallets: G,
        fundWallet: G,
        openModal: G,
        setReadyToTrue: G,
        requestFarcasterSignerStatus: G,
        initLoginWithTelegram: G,
        loginWithTelegram: G,
        generateSiweMessage: G,
        generateSiweMessageForSmartWallet: G,
        loginWithSiwe: G,
        linkWithSiwe: G,
        linkSmartWallet: G,
        delegateWallet: G,
        revokeDelegatedWallets: G,
        connectCoinbaseSmartWallet: G,
        connectBaseAccount: G,
        initiateAccountTransfer: G,
        emailOtpState: { status: "initial" },
        setEmailOtpState: G,
        smsOtpState: { status: "initial" },
        setSmsOtpState: G,
        siweState: { status: "initial" },
        setSiweState: G,
        oAuthState: { status: "initial" },
        setOAuthState: G,
        telegramAuthState: { status: "initial" },
        setTelegramAuthState: G,
        isHeadlessOAuthLoading: !1,
        isHeadlessSigning: G,
        inProgressAuthFlowRef: { current: null },
        inProgressLoginOrLinkMethodRef: { current: null },
        baseAccountSdk: void 0,
        setBaseAccountSdk: G,
      }),
      Y = () => (0, N.useContext)($);
    e.s(
      [
        "I",
        () => $,
        "P",
        () => R,
        "a",
        () => j,
        "b",
        () => O,
        "c",
        () => H,
        "d",
        () => U,
        "e",
        () => M,
        "f",
        () => B,
        "g",
        () => W,
        "h",
        () => L,
        "i",
        () => D,
        "j",
        () => V,
        "k",
        () => K,
        "l",
        () => q,
        "m",
        () => F,
        "n",
        () => G,
        "o",
        () => z,
        "u",
        () => Y,
      ],
      590479
    );
  },
  322742,
  (e) => {
    "use strict";
    var t = e.i(610155);
    let r = (e, r) =>
      e === r ||
      (!(!e.startsWith("0x") || !r.startsWith("0x")) &&
        42 === e.length &&
        42 === r.length &&
        (0, t.getAddress)(e) === (0, t.getAddress)(r));
    e.s(["areAddressesEqual", () => r]);
  },
  619251,
  (e) => {
    "use strict";
    var t = e.i(322742),
      r = e.i(642947),
      i = e.i(590479);
    function n(e) {
      return "string" == typeof e && /^custom:[a-zA-Z0-9_-]+$/i.test(e);
    }
    let a = (e) => !!e.id && "privy-v2" === e.recoveryMethod;
    function o(e) {
      return e ? new Date(1e3 * e) : null;
    }
    function s(e, t) {
      return e
        .slice()
        .sort(
          (e, t) =>
            (e.firstVerifiedAt?.getTime() ?? 0) -
            (t.firstVerifiedAt?.getTime() ?? 0)
        )
        .find((e) => e.type === t);
    }
    let l = (e) => (e ? u(e).find((e) => 0 === e.walletIndex) ?? null : null),
      u = (e) => (e ? c(e, "ethereum") : []),
      c = (e, t) =>
        e.linkedAccounts.filter(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            !e.imported &&
            e.chainType === t
        ),
      d = (e) => (e ? c(e, "solana") : []),
      f = (e) => (e ? d(e).find((e) => 0 === e.walletIndex) ?? null : null),
      p = (e) =>
        (e?.linkedAccounts ?? []).filter(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            e.imported &&
            "ethereum" === e.chainType
        ),
      m = (e) =>
        (e?.linkedAccounts ?? []).filter(
          (e) =>
            "wallet" === e.type &&
            e.imported &&
            "privy" === e.walletClientType &&
            "solana" === e.chainType
        ),
      y = (e, r) =>
        e?.linkedAccounts.find(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            (0, t.areAddressesEqual)(e.address, r)
        ) || null,
      h = (e, r) =>
        e.find((e) => (0, t.areAddressesEqual)(e.address, r)) || null,
      b = (e) => {
        let t = l(e),
          r = f(e);
        return t && r && !a(r) && a(t) ? r : l(e) ?? f(e);
      };
    function g(e) {
      if (!e) return null;
      let t = (function (e) {
          let t = [];
          for (let r of e) {
            let e = r.type;
            switch (r.type) {
              case "wallet":
                let i = {
                  id: r.id,
                  address: r.address,
                  type: r.type,
                  imported: r.imported,
                  delegated: r.delegated,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                  chainType: r.chain_type,
                  walletClientType: r.wallet_client_type,
                  connectorType: r.connector_type,
                  recoveryMethod: r.recovery_method,
                  walletIndex: r.wallet_index,
                  publicKey: r.public_key,
                };
                t.push(i);
                break;
              case "smart_wallet":
                let a = {
                  address: r.address,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                  smartWalletType: r.smart_wallet_type,
                  smartWalletVersion: r.smart_wallet_version,
                };
                t.push(a);
                break;
              case "cross_app":
                let s = {
                  type: r.type,
                  subject: r.subject,
                  embeddedWallets: r.embedded_wallets,
                  smartWallets: r.smart_wallets,
                  providerApp: { id: r.provider_app_id },
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(s);
                break;
              case "email":
                let l = {
                  address: r.address,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(l);
                break;
              case "phone":
                let u = {
                  number: r.phoneNumber,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(u);
                break;
              case "google_oauth":
                let c = {
                  subject: r.subject,
                  email: r.email,
                  name: r.name,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(c);
                break;
              case "spotify_oauth":
                let d = {
                  subject: r.subject,
                  email: r.email,
                  name: r.name,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(d);
                break;
              case "instagram_oauth":
                let f = {
                  subject: r.subject,
                  username: r.username,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(f);
                break;
              case "twitter_oauth":
                let p = {
                  subject: r.subject,
                  username: r.username,
                  name: r.name,
                  type: r.type,
                  profilePictureUrl: r.profile_picture_url,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(p);
                break;
              case "discord_oauth":
                let m = {
                  subject: r.subject,
                  username: r.username,
                  email: r.email,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(m);
                break;
              case "github_oauth":
                let y = {
                  subject: r.subject,
                  username: r.username,
                  name: r.name,
                  email: r.email,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(y);
                break;
              case "tiktok_oauth":
                let h = {
                  subject: r.subject,
                  username: r.username,
                  name: r.name,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(h);
                break;
              case "line_oauth":
                let b = {
                  subject: r.subject,
                  name: r.name,
                  email: r.email,
                  profilePictureUrl: r.profile_picture_url,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(b);
                break;
              case "twitch_oauth":
                let g = {
                  subject: r.subject,
                  username: r.username,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(g);
                break;
              case "linkedin_oauth":
                let w = {
                  subject: r.subject,
                  name: r.name,
                  email: r.email,
                  vanityName: r.vanity_name,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(w);
                break;
              case "apple_oauth":
                let v = {
                  subject: r.subject,
                  email: r.email,
                  type: r.type,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(v);
                break;
              case "custom_auth":
                t.push({
                  type: r.type,
                  customUserId: r.custom_user_id,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                });
                break;
              case "farcaster":
                let _ = {
                  type: r.type,
                  fid: r.fid,
                  ownerAddress: r.owner_address,
                  displayName: r.display_name,
                  username: r.username,
                  bio: r.bio,
                  pfp: r.profile_picture_url,
                  url: r.homepage_url,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                  signerPublicKey: r.signer_public_key,
                };
                t.push(_);
                break;
              case "passkey":
                let A = {
                  type: r.type,
                  enrolledInMfa: r.enrolled_in_mfa,
                  credentialId: r.credential_id,
                  publicKey: r.public_key,
                  authenticatorName: r.authenticator_name,
                  createdWithDevice: r.created_with_device,
                  createdWithOs: r.created_with_os,
                  createdWithBrowser: r.created_with_browser,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(A);
                break;
              case "telegram":
                let E = {
                  type: r.type,
                  telegramUserId: r.telegram_user_id,
                  firstName: r.first_name,
                  lastName: r.last_name,
                  username: r.username,
                  photoUrl: r.photo_url,
                  firstVerifiedAt: o(r.first_verified_at),
                  latestVerifiedAt: o(r.latest_verified_at),
                };
                t.push(E);
                break;
              default:
                if (n(r.type)) {
                  let e = {
                    type: r.type,
                    subject: r.subject,
                    name: r.name,
                    username: r.username,
                    email: r.email,
                    profilePictureUrl: r.profile_picture_url,
                    firstVerifiedAt: o(r.first_verified_at),
                    latestVerifiedAt: o(r.latest_verified_at),
                  };
                  t.push(e);
                  break;
                }
                console.warn(
                  `Unrecognized account type: ${e}. Please consider upgrading the Privy SDK.`
                );
            }
          }
          return t;
        })(e.linked_accounts),
        r = s(t, "wallet"),
        i = s(t, "smart_wallet"),
        a = s(t, "email"),
        l = s(t, "phone"),
        u = s(t, "google_oauth"),
        c = s(t, "twitter_oauth"),
        d = s(t, "discord_oauth"),
        f = s(t, "github_oauth"),
        p = s(t, "spotify_oauth"),
        m = s(t, "instagram_oauth"),
        y = s(t, "tiktok_oauth"),
        h = s(t, "line_oauth"),
        b = s(t, "twitch_oauth"),
        g = s(t, "linkedin_oauth"),
        w = s(t, "apple_oauth"),
        v = s(t, "farcaster"),
        _ = s(t, "telegram"),
        A = e.mfa_methods.map(({ type: e, verified_at: t }) => ({
          type: e,
          verifiedAt: o(t),
        }));
      return {
        id: e.id,
        createdAt: o(e.created_at),
        linkedAccounts: t,
        email: a && { address: a?.address },
        phone: l && { number: l?.number },
        wallet: r && {
          id: r.id,
          address: r.address,
          chainType: r.chainType,
          walletClientType: r.walletClientType,
          connectorType: r.connectorType,
          recoveryMethod: r.recoveryMethod,
          imported: r.imported,
          delegated: r.delegated,
          walletIndex: r.walletIndex,
          publicKey: r.publicKey,
        },
        smartWallet: i && {
          address: i.address,
          smartWalletType: i.smartWalletType,
          smartWalletVersion: i.smartWalletVersion,
        },
        google: u && { subject: u.subject, email: u.email, name: u.name },
        twitter: c && {
          subject: c.subject,
          username: c.username,
          name: c.name,
          profilePictureUrl: c.profilePictureUrl,
        },
        discord: d && {
          subject: d.subject,
          username: d.username,
          email: d.email,
        },
        github: f && {
          subject: f.subject,
          username: f.username,
          name: f.name,
          email: f.email,
        },
        spotify: p && { subject: p.subject, email: p.email, name: p.name },
        instagram: m && { subject: m.subject, username: m.username },
        tiktok: y && { subject: y.subject, username: y.username, name: y.name },
        line: h && {
          subject: h.subject,
          name: h.name,
          email: h.email,
          profilePictureUrl: h.profilePictureUrl,
        },
        twitch: b && { subject: b.subject, username: b.username },
        linkedin: g && {
          subject: g.subject,
          name: g.name,
          email: g.email,
          vanityName: g.vanityName,
        },
        apple: w && { subject: w.subject, email: w.email },
        farcaster: v && {
          fid: v.fid,
          ownerAddress: v.ownerAddress,
          displayName: v.displayName,
          username: v.username,
          bio: v.bio,
          pfp: v.pfp,
          url: v.url,
          signerPublicKey: v.signerPublicKey,
        },
        telegram: _ && {
          telegramUserId: _.telegramUserId,
          firstName: _.firstName,
          lastName: _.lastName,
          username: _.username,
          photoUrl: _.photoUrl,
        },
        delegatedWallets: [],
        mfaMethods: A.map((e) => e.type),
        hasAcceptedTerms: e.has_accepted_terms ?? !1,
        isGuest: e.is_guest,
        customMetadata: e.custom_metadata,
      };
    }
    let w = (0, r.createContext)({
        ready: !1,
        authenticated: !1,
        user: null,
        error: null,
        walletConnectors: null,
        connectWallet: i.n,
        login: i.n,
        connectOrCreateWallet: i.n,
        linkEmail: i.n,
        linkPhone: i.n,
        linkFarcaster: i.n,
        linkWallet: i.n,
        linkGoogle: i.n,
        linkTwitter: i.n,
        linkTwitch: i.n,
        linkDiscord: i.n,
        linkGithub: i.n,
        linkSpotify: i.n,
        linkInstagram: i.n,
        linkTelegram: i.n,
        linkTiktok: i.n,
        linkLine: i.n,
        linkLinkedIn: i.n,
        linkApple: i.n,
        linkPasskey: i.n,
        linkOAuth: i.n,
        updateEmail: i.n,
        updatePhone: i.n,
        logout: i.n,
        getAccessToken: i.n,
        signMessage: i.n,
        signTypedData: i.n,
        enrollInMfa: i.n,
        initEnrollmentWithSms: i.n,
        initEnrollmentWithTotp: i.n,
        initEnrollmentWithPasskey: i.n,
        promptMfa: i.n,
        init: i.n,
        submitEnrollmentWithSms: i.n,
        submitEnrollmentWithTotp: i.n,
        submitEnrollmentWithPasskey: i.n,
        unenroll: i.n,
        submit: i.n,
        cancel: i.n,
        sendTransaction: i.n,
        signTransaction: i.n,
        setWalletPassword: i.n,
        setWalletRecovery: i.n,
        isModalOpen: !1,
        mfaMethods: [],
      }),
      v = () => (0, r.useContext)(w);
    e.s([
      "P",
      () => w,
      "a",
      () => a,
      "b",
      () => l,
      "c",
      () => p,
      "d",
      () => f,
      "e",
      () => m,
      "f",
      () => y,
      "g",
      () => b,
      "h",
      () => h,
      "i",
      () => n,
      "j",
      () => g,
      "l",
      () => d,
      "u",
      () => v,
    ]);
  },
  914717,
  (e) => {
    "use strict";
    var t = e.i(642947),
      r = e.i(946690);
    let i = (e) => {
        let i = (0, r.createStore)(e),
          n = (e) =>
            (function (e, r = (e) => e) {
              let i = t.default.useSyncExternalStore(
                e.subscribe,
                t.default.useCallback(() => r(e.getState()), [e, r]),
                t.default.useCallback(() => r(e.getInitialState()), [e, r])
              );
              return t.default.useDebugValue(i), i;
            })(i, e);
        return Object.assign(n, i), n;
      },
      n = (e) => (e ? i(e) : i);
    e.s(["create", () => n]);
  },
  841709,
  (e) => {
    "use strict";
    let t = (0, e.i(914717).create)(() => ({
        user: null,
        authenticated: !1,
        hasResolvedInitialUser: !1,
      })),
      r = (e) => t.setState({ user: e }),
      i = (e) => t.setState({ authenticated: e }),
      n = (e) => t.setState({ hasResolvedInitialUser: e });
    e.s(["a", () => r, "b", () => n, "s", () => i, "u", () => t]);
  },
  816218,
  (e) => {
    "use strict";
    var t = e.i(642947),
      r = e.i(841709),
      i = e.i(914717),
      n = e.i(590479),
      a = e.i(619251);
    let o = (e, { chainType: t, walletIndex: r } = {}) =>
        e?.linkedAccounts.filter(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            (void 0 === r || e.walletIndex === r) &&
            (void 0 === t || e.chainType === t)
        ) ?? [],
      s = (0, i.create)(() => ({
        ethereumExternal: [],
        areExternalConnectorsReady: !1,
        ethereumEmbedded: [],
      })),
      l = (e) => s.setState({ areExternalConnectorsReady: e }),
      u = (0, t.createContext)(!1),
      c = () => {
        if ((0, t.useContext)(u))
          throw new n.P(
            "Multiple PrivyProvider instances found",
            "Found multiple instances of PrivyProvider, ensure there is only one mounted in your application tree."
          );
      };
    function d() {
      let e = (0, t.useContext)(u),
        i = (0, n.u)(),
        a = s((e) => e.ethereumEmbedded),
        l = s((e) => e.ethereumExternal),
        c = s((e) => e.areExternalConnectorsReady),
        d = (0, r.u)((e) => e.user),
        f = (0, r.u)((e) => e.hasResolvedInitialUser),
        p = (0, t.useMemo)(
          () => [...a, ...l].sort((e, t) => t.connectedAt - e.connectedAt),
          [a, l]
        ),
        m = o(d, { chainType: "ethereum" }).length > 0,
        y = a.length > 0,
        h = !!c && !!f && !!i.walletProxy && (!m || y);
      return e
        ? (0, t.useMemo)(() => ({ wallets: p, ready: h }), [p, h])
        : (console.warn(
            "`useWallets` was called outside the PrivyProvider component"
          ),
          { wallets: [], ready: !1 });
    }
    let f = (e) => {
        if ("ethereum" === e.chainType)
          return {
            entropyId: e.address,
            entropyIdVerifier: "ethereum-address-verifier",
          };
        if ("solana" === e.chainType)
          return {
            entropyId: e.address,
            entropyIdVerifier: "solana-address-verifier",
          };
        throw Error("Failed to get account entropy details");
      },
      p = (e, t) => {
        if (t?.imported) return f(t);
        let r = (0, a.g)(e);
        if (!r) throw Error("Failed to find primary wallet");
        return f(r);
      };
    e.s([
      "P",
      () => u,
      "a",
      () => s,
      "b",
      () => c,
      "c",
      () => o,
      "g",
      () => p,
      "s",
      () => l,
      "t",
      () => f,
      "u",
      () => d,
    ]);
  },
  48233,
  (e, t, r) => {
    !(function (i, n) {
      "use strict";
      var a = "function",
        o = "undefined",
        s = "object",
        l = "string",
        u = "major",
        c = "model",
        d = "name",
        f = "type",
        p = "vendor",
        m = "version",
        y = "architecture",
        h = "console",
        b = "mobile",
        g = "tablet",
        w = "smarttv",
        v = "wearable",
        _ = "embedded",
        A = "Amazon",
        E = "Apple",
        x = "ASUS",
        T = "BlackBerry",
        k = "Browser",
        S = "Chrome",
        P = "Firefox",
        I = "Google",
        C = "Honor",
        N = "Huawei",
        O = "Microsoft",
        U = "Motorola",
        R = "Nvidia",
        L = "OnePlus",
        W = "Opera",
        B = "OPPO",
        D = "Samsung",
        j = "Sharp",
        M = "Sony",
        F = "Xiaomi",
        z = "Zebra",
        K = "Facebook",
        V = "Chromium OS",
        G = "Mac OS",
        q = " Browser",
        H = function (e, t) {
          var r = {};
          for (var i in e)
            t[i] && t[i].length % 2 == 0
              ? (r[i] = t[i].concat(e[i]))
              : (r[i] = e[i]);
          return r;
        },
        $ = function (e) {
          for (var t = {}, r = 0; r < e.length; r++)
            t[e[r].toUpperCase()] = e[r];
          return t;
        },
        Y = function (e, t) {
          return typeof e === l && -1 !== J(t).indexOf(J(e));
        },
        J = function (e) {
          return e.toLowerCase();
        },
        X = function (e, t) {
          if (typeof e === l)
            return (
              (e = e.replace(/^\s\s*/, "")),
              typeof t === o ? e : e.substring(0, 500)
            );
        },
        Z = function (e, t) {
          for (var r, i, n, o, l, u, c = 0; c < t.length && !l; ) {
            var d = t[c],
              f = t[c + 1];
            for (r = i = 0; r < d.length && !l && d[r]; )
              if ((l = d[r++].exec(e)))
                for (n = 0; n < f.length; n++)
                  (u = l[++i]),
                    typeof (o = f[n]) === s && o.length > 0
                      ? 2 === o.length
                        ? typeof o[1] == a
                          ? (this[o[0]] = o[1].call(this, u))
                          : (this[o[0]] = o[1])
                        : 3 === o.length
                        ? typeof o[1] !== a || (o[1].exec && o[1].test)
                          ? (this[o[0]] = u ? u.replace(o[1], o[2]) : void 0)
                          : (this[o[0]] = u ? o[1].call(this, u, o[2]) : void 0)
                        : 4 === o.length &&
                          (this[o[0]] = u
                            ? o[3].call(this, u.replace(o[1], o[2]))
                            : void 0)
                      : (this[o] = u || void 0);
            c += 2;
          }
        },
        Q = function (e, t) {
          for (var r in t)
            if (typeof t[r] === s && t[r].length > 0) {
              for (var i = 0; i < t[r].length; i++)
                if (Y(t[r][i], e)) return "?" === r ? void 0 : r;
            } else if (Y(t[r], e)) return "?" === r ? void 0 : r;
          return t.hasOwnProperty("*") ? t["*"] : e;
        },
        ee = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        et = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [m, [d, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [m, [d, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [d, m],
            [/opios[\/ ]+([\w\.]+)/i],
            [m, [d, W + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [m, [d, W + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [m, [d, W]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [m, [d, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [m, [d, "Maxthon"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [d, m],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [m, [d, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [m, [d, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [m, [d, "UC" + k]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [m, [d, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [m, [d, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [m, [d, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [m, [d, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [m, [d, "Smart Lenovo " + k]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[d, /(.+)/, "$1 Secure " + k], m],
            [/\bfocus\/([\w\.]+)/i],
            [m, [d, P + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [m, [d, W + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [m, [d, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [m, [d, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [m, [d, W + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [m, [d, "MIUI" + q]],
            [/fxios\/([\w\.-]+)/i],
            [m, [d, P]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [m, [d, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[d, /(.+)/, "$1Browser"], m],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[d, /(.+)/, "$1" + q], m],
            [/samsungbrowser\/([\w\.]+)/i],
            [m, [d, D + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [m, [d, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[d, "Sogou Mobile"], m],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [d, m],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [d],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [m, d],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[d, K], m],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /(daum)apps[\/ ]([\w\.]+)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [d, m],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [m, [d, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [m, [d, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [m, [d, S + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[d, S + " WebView"], m],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [m, [d, "Android " + k]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [d, m],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [m, [d, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [m, d],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              d,
              [
                m,
                Q,
                {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [d, m],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[d, "Netscape"], m],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [d, m],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [m, [d, P + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /\b(links) \(([\w\.]+)/i,
            ],
            [d, [m, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [d, [m, /master.|lts./, ""]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[y, "amd64"]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[y, "ia32"]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[y, "arm64"]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[y, "armhf"]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[y, "arm"]],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [[y, /ower/, "", J]],
            [/ sun4\w[;\)]/i],
            [[y, "sparc"]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            ],
            [[y, J]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [c, [p, D], [f, g]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [c, [p, D], [f, b]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [c, [p, E], [f, b]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [c, [p, E], [f, g]],
            [/(macintosh);/i],
            [c, [p, E]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [c, [p, j], [f, b]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [c, [p, C], [f, g]],
            [/honor([-\w ]+)[;\)]/i],
            [c, [p, C], [f, b]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [c, [p, N], [f, g]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [c, [p, N], [f, b]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [p, F],
              [f, g],
            ],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              / ([\w ]+) miui\/v?\d/i,
            ],
            [
              [c, /_/g, " "],
              [p, F],
              [f, b],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [c, [p, B], [f, b]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [c, [p, Q, { OnePlus: ["304", "403", "203"], "*": B }], [f, g]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [c, [p, "Vivo"], [f, b]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [c, [p, "Realme"], [f, b]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [c, [p, U], [f, b]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [c, [p, U], [f, g]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [c, [p, "LG"], [f, g]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [c, [p, "LG"], [f, b]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [c, [p, "Lenovo"], [f, g]],
            [/(nokia) (t[12][01])/i],
            [p, c, [f, g]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*))/i,
            ],
            [
              [c, /_/g, " "],
              [f, b],
              [p, "Nokia"],
            ],
            [/(pixel (c|tablet))\b/i],
            [c, [p, I], [f, g]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [c, [p, I], [f, b]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [c, [p, M], [f, b]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [c, "Xperia Tablet"],
              [p, M],
              [f, g],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [c, [p, L], [f, b]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [c, [p, A], [f, g]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [c, /(.+)/g, "Fire Phone $1"],
              [p, A],
              [f, b],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [c, p, [f, g]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [c, [p, T], [f, b]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [c, [p, x], [f, g]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [c, [p, x], [f, b]],
            [/(nexus 9)/i],
            [c, [p, "HTC"], [f, g]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [p, [c, /_/g, " "], [f, b]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [c, [p, "TCL"], [f, g]],
            [/(itel) ((\w+))/i],
            [
              [p, J],
              c,
              [f, Q, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [c, [p, "Acer"], [f, g]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [c, [p, "Meizu"], [f, b]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [c, [p, "Ulefone"], [f, b]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [c, [p, "Energizer"], [f, b]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [c, [p, "Cat"], [f, b]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [c, [p, "Smartfren"], [f, b]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [c, [p, "Nothing"], [f, b]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [c, [p, "Archos"], [f, g]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [c, [p, "Archos"], [f, b]],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [p, c, [f, g]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [p, c, [f, b]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [p, c, [f, g]],
            [/(surface duo)/i],
            [c, [p, O], [f, g]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [c, [p, "Fairphone"], [f, b]],
            [/(u304aa)/i],
            [c, [p, "AT&T"], [f, b]],
            [/\bsie-(\w*)/i],
            [c, [p, "Siemens"], [f, b]],
            [/\b(rct\w+) b/i],
            [c, [p, "RCA"], [f, g]],
            [/\b(venue[\d ]{2,7}) b/i],
            [c, [p, "Dell"], [f, g]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [c, [p, "Verizon"], [f, g]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [c, [p, "Barnes & Noble"], [f, g]],
            [/\b(tm\d{3}\w+) b/i],
            [c, [p, "NuVision"], [f, g]],
            [/\b(k88) b/i],
            [c, [p, "ZTE"], [f, g]],
            [/\b(nx\d{3}j) b/i],
            [c, [p, "ZTE"], [f, b]],
            [/\b(gen\d{3}) b.+49h/i],
            [c, [p, "Swiss"], [f, b]],
            [/\b(zur\d{3}) b/i],
            [c, [p, "Swiss"], [f, g]],
            [/\b((zeki)?tb.*\b) b/i],
            [c, [p, "Zeki"], [f, g]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[p, "Dragon Touch"], c, [f, g]],
            [/\b(ns-?\w{0,9}) b/i],
            [c, [p, "Insignia"], [f, g]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [c, [p, "NextBook"], [f, g]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[p, "Voice"], c, [f, b]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[p, "LvTel"], c, [f, b]],
            [/\b(ph-1) /i],
            [c, [p, "Essential"], [f, b]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [c, [p, "Envizen"], [f, g]],
            [/\b(trio[-\w\. ]+) b/i],
            [c, [p, "MachSpeed"], [f, g]],
            [/\btu_(1491) b/i],
            [c, [p, "Rotor"], [f, g]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [c, [p, R], [f, g]],
            [/(sprint) (\w+)/i],
            [p, c, [f, b]],
            [/(kin\.[onetw]{3})/i],
            [
              [c, /\./g, " "],
              [p, O],
              [f, b],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [c, [p, z], [f, g]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [c, [p, z], [f, b]],
            [/smart-tv.+(samsung)/i],
            [p, [f, w]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [c, /^/, "SmartTV"],
              [p, D],
              [f, w],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [p, "LG"],
              [f, w],
            ],
            [/(apple) ?tv/i],
            [p, [c, E + " TV"], [f, w]],
            [/crkey/i],
            [
              [c, S + "cast"],
              [p, I],
              [f, w],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [c, [p, A], [f, w]],
            [/(shield \w+ tv)/i],
            [c, [p, R], [f, w]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [c, [p, j], [f, w]],
            [/(bravia[\w ]+)( bui|\))/i],
            [c, [p, M], [f, w]],
            [/(mi(tv|box)-?\w+) bui/i],
            [c, [p, F], [f, w]],
            [/Hbbtv.*(technisat) (.*);/i],
            [p, c, [f, w]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [p, X],
              [c, X],
              [f, w],
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [c, [f, w]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[f, w]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [p, c, [f, h]],
            [/droid.+; (shield)( bui|\))/i],
            [c, [p, R], [f, h]],
            [/(playstation \w+)/i],
            [c, [p, M], [f, h]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [c, [p, O], [f, h]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [c, [p, D], [f, v]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [p, c, [f, v]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [c, [p, B], [f, v]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [c, [p, E], [f, v]],
            [/(opwwe\d{3})/i],
            [c, [p, L], [f, v]],
            [/(moto 360)/i],
            [c, [p, U], [f, v]],
            [/(smartwatch 3)/i],
            [c, [p, M], [f, v]],
            [/(g watch r)/i],
            [c, [p, "LG"], [f, v]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [c, [p, z], [f, v]],
            [/droid.+; (glass) \d/i],
            [c, [p, I], [f, v]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [p, c, [f, v]],
            [/; (quest( \d| pro)?)/i],
            [c, [p, K], [f, v]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [p, [f, _]],
            [/(aeobc)\b/i],
            [c, [p, A], [f, _]],
            [/(homepod).+mac os/i],
            [c, [p, E], [f, _]],
            [/windows iot/i],
            [[f, _]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [c, [f, b]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [c, [f, g]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[f, g]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[f, b]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [c, [p, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [m, [d, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [d, m],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [m, [d, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [d, m],
            [/ladybird\//i],
            [[d, "LibWeb"]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [m, d],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [d, m],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [d, [m, Q, ee]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [m, Q, ee],
              [d, "Windows"],
            ],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [m, /_/g, "."],
              [d, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [d, G],
              [m, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [m, d],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[d, /(.+)/, "$1 Touch"], m],
            [
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
            ],
            [d, m],
            [/\(bb(10);/i],
            [m, [d, T]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [m, [d, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [m, [d, P + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [m, [d, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [m, [d, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [m, [d, S + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[d, V], m],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [d, m],
            [/(sunos) ?([\w\.\d]*)/i],
            [[d, "Solaris"], m],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [d, m],
          ],
        },
        er = function (e, t) {
          if (
            (typeof e === s && ((t = e), (e = void 0)), !(this instanceof er))
          )
            return new er(e, t).getResult();
          var r = typeof i !== o && i.navigator ? i.navigator : void 0,
            n = e || (r && r.userAgent ? r.userAgent : ""),
            h = r && r.userAgentData ? r.userAgentData : void 0,
            w = t ? H(et, t) : et,
            v = r && r.userAgent == n;
          return (
            (this.getBrowser = function () {
              var e,
                t = {};
              return (
                (t[d] = void 0),
                (t[m] = void 0),
                Z.call(t, n, w.browser),
                (t[u] =
                  typeof (e = t[m]) === l
                    ? e.replace(/[^\d\.]/g, "").split(".")[0]
                    : void 0),
                v &&
                  r &&
                  r.brave &&
                  typeof r.brave.isBrave == a &&
                  (t[d] = "Brave"),
                t
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e[y] = void 0), Z.call(e, n, w.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[p] = void 0),
                (e[c] = void 0),
                (e[f] = void 0),
                Z.call(e, n, w.device),
                v && !e[f] && h && h.mobile && (e[f] = b),
                v &&
                  "Macintosh" == e[c] &&
                  r &&
                  typeof r.standalone !== o &&
                  r.maxTouchPoints &&
                  r.maxTouchPoints > 2 &&
                  ((e[c] = "iPad"), (e[f] = g)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (
                (e[d] = void 0), (e[m] = void 0), Z.call(e, n, w.engine), e
              );
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[d] = void 0),
                (e[m] = void 0),
                Z.call(e, n, w.os),
                v &&
                  !e[d] &&
                  h &&
                  h.platform &&
                  "Unknown" != h.platform &&
                  (e[d] = h.platform
                    .replace(/chrome os/i, V)
                    .replace(/macos/i, G)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return n;
            }),
            (this.setUA = function (e) {
              return (
                (n = typeof e === l && e.length > 500 ? X(e, 500) : e), this
              );
            }),
            this.setUA(n),
            this
          );
        };
      if (
        ((er.VERSION = "1.0.41"),
        (er.BROWSER = $([d, m, u])),
        (er.CPU = $([y])),
        (er.DEVICE = $([c, p, f, h, b, w, g, v, _])),
        (er.ENGINE = er.OS = $([d, m])),
        typeof r !== o)
      )
        t.exports && (r = t.exports = er), (r.UAParser = er);
      else if (typeof define === a && define.amd) e.r, void 0 !== er && e.v(er);
      else typeof i !== o && (i.UAParser = er);
      var ei = typeof i !== o && (i.jQuery || i.Zepto);
      if (ei && !ei.ua) {
        var en = new er();
        (ei.ua = en.getResult()),
          (ei.ua.get = function () {
            return en.getUA();
          }),
          (ei.ua.set = function (e) {
            en.setUA(e);
            var t = en.getResult();
            for (var r in t) ei.ua[r] = t[r];
          });
      }
    })("object" == typeof window ? window : e.e);
  },
  180839,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = e.r(642947),
      n = i && "object" == typeof i && "default" in i ? i.default : i,
      a = e.r(48233),
      o = new a(),
      s = o.getBrowser(),
      l = o.getCPU(),
      u = o.getDevice(),
      c = o.getEngine(),
      d = o.getOS(),
      f = o.getUA(),
      p = function (e) {
        return o.setUA(e);
      },
      m = function (e) {
        if (!e) return void console.error("No userAgent string was provided");
        var t = new a(e);
        return {
          UA: t,
          browser: t.getBrowser(),
          cpu: t.getCPU(),
          device: t.getDevice(),
          engine: t.getEngine(),
          os: t.getOS(),
          ua: t.getUA(),
          setUserAgent: function (e) {
            return t.setUA(e);
          },
        };
      },
      y = Object.freeze({
        ClientUAInstance: o,
        browser: s,
        cpu: l,
        device: u,
        engine: c,
        os: d,
        ua: f,
        setUa: p,
        parseUserAgent: m,
      });
    function h(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, i);
      }
      return r;
    }
    function b(e) {
      return (b =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function g() {
      return (g =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    function w(e) {
      return (w = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function v(e, t) {
      return (v =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function _(e, t) {
      if (null == e) return {};
      var r,
        i,
        n = (function (e, t) {
          if (null == e) return {};
          var r,
            i,
            n = {},
            a = Object.keys(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
          return n;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
          (r = a[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function A(e) {
      if (void 0 === e)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
      return i;
    }
    var x = "mobile",
      T = "tablet",
      k = "smarttv",
      S = "console",
      P = "wearable",
      I = "embedded",
      C = void 0,
      N = {
        Chrome: "Chrome",
        Firefox: "Firefox",
        Opera: "Opera",
        Yandex: "Yandex",
        Safari: "Safari",
        InternetExplorer: "Internet Explorer",
        Edge: "Edge",
        Chromium: "Chromium",
        Ie: "IE",
        MobileSafari: "Mobile Safari",
        EdgeChromium: "Edge Chromium",
        MIUI: "MIUI Browser",
        SamsungBrowser: "Samsung Browser",
      },
      O = {
        IOS: "iOS",
        Android: "Android",
        WindowsPhone: "Windows Phone",
        Windows: "Windows",
        MAC_OS: "Mac OS",
      },
      U = {
        isMobile: !1,
        isTablet: !1,
        isBrowser: !1,
        isSmartTV: !1,
        isConsole: !1,
        isWearable: !1,
      },
      R = function (e) {
        switch (e) {
          case x:
            return { isMobile: !0 };
          case T:
            return { isTablet: !0 };
          case k:
            return { isSmartTV: !0 };
          case S:
            return { isConsole: !0 };
          case P:
            return { isWearable: !0 };
          case C:
            return { isBrowser: !0 };
          case I:
            return { isEmbedded: !0 };
          default:
            return U;
        }
      },
      L = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "none";
        return e || t;
      },
      W = function () {
        return (
          !!("u" > typeof window && (window.navigator || navigator)) &&
          (window.navigator || navigator)
        );
      },
      B = function (e) {
        var t = W();
        return (
          t &&
          t.platform &&
          (-1 !== t.platform.indexOf(e) ||
            ("MacIntel" === t.platform &&
              t.maxTouchPoints > 1 &&
              !window.MSStream))
        );
      },
      D = function (e) {
        return e.type === x;
      },
      j = function (e) {
        return e.type === T;
      },
      M = function (e) {
        var t = e.type;
        return t === x || t === T;
      },
      F = function (e) {
        return e.type === k;
      },
      z = function (e) {
        return e.type === C;
      },
      K = function (e) {
        return e.type === P;
      },
      V = function (e) {
        return e.type === S;
      },
      G = function (e) {
        return e.type === I;
      },
      q = function (e) {
        return L(e.vendor);
      },
      H = function (e) {
        return L(e.model);
      },
      $ = function (e) {
        return L(e.type, "browser");
      },
      Y = function (e) {
        return e.name === O.Android;
      },
      J = function (e) {
        return e.name === O.Windows;
      },
      X = function (e) {
        return e.name === O.MAC_OS;
      },
      Z = function (e) {
        return e.name === O.WindowsPhone;
      },
      Q = function (e) {
        return e.name === O.IOS;
      },
      ee = function (e) {
        return L(e.version);
      },
      et = function (e) {
        return L(e.name);
      },
      er = function (e) {
        return e.name === N.Chrome;
      },
      ei = function (e) {
        return e.name === N.Firefox;
      },
      en = function (e) {
        return e.name === N.Chromium;
      },
      ea = function (e) {
        return e.name === N.Edge;
      },
      eo = function (e) {
        return e.name === N.Yandex;
      },
      es = function (e) {
        var t = e.name;
        return t === N.Safari || t === N.MobileSafari;
      },
      el = function (e) {
        return e.name === N.MobileSafari;
      },
      eu = function (e) {
        return e.name === N.Opera;
      },
      ec = function (e) {
        var t = e.name;
        return t === N.InternetExplorer || t === N.Ie;
      },
      ed = function (e) {
        return e.name === N.MIUI;
      },
      ef = function (e) {
        return e.name === N.SamsungBrowser;
      },
      ep = function (e) {
        return L(e.version);
      },
      em = function (e) {
        return L(e.major);
      },
      ey = function (e) {
        return L(e.name);
      },
      eh = function (e) {
        return L(e.name);
      },
      eb = function (e) {
        return L(e.version);
      },
      eg = function () {
        var e = W(),
          t = e && e.userAgent && e.userAgent.toLowerCase();
        return "string" == typeof t && /electron/.test(t);
      },
      ew = function (e) {
        return "string" == typeof e && -1 !== e.indexOf("Edg/");
      },
      ev = function () {
        var e = W();
        return (
          e &&
          (/iPad|iPhone|iPod/.test(e.platform) ||
            ("MacIntel" === e.platform && e.maxTouchPoints > 1)) &&
          !window.MSStream
        );
      },
      e_ = function () {
        return B("iPad");
      },
      eA = function () {
        return B("iPhone");
      },
      eE = function () {
        return B("iPod");
      },
      ex = function (e) {
        return L(e);
      };
    function eT(e) {
      var t = e || y,
        r = t.device,
        i = t.browser,
        n = t.os,
        a = t.engine,
        o = t.ua;
      return {
        isSmartTV: F(r),
        isConsole: V(r),
        isWearable: K(r),
        isEmbedded: G(r),
        isMobileSafari: el(i) || e_(),
        isChromium: en(i),
        isMobile: M(r) || e_(),
        isMobileOnly: D(r),
        isTablet: j(r) || e_(),
        isBrowser: z(r),
        isDesktop: z(r),
        isAndroid: Y(n),
        isWinPhone: Z(n),
        isIOS: Q(n) || e_(),
        isChrome: er(i),
        isFirefox: ei(i),
        isSafari: es(i),
        isOpera: eu(i),
        isIE: ec(i),
        osVersion: ee(n),
        osName: et(n),
        fullBrowserVersion: ep(i),
        browserVersion: em(i),
        browserName: ey(i),
        mobileVendor: q(r),
        mobileModel: H(r),
        engineName: eh(a),
        engineVersion: eb(a),
        getUA: ex(o),
        isEdge: ea(i) || ew(o),
        isYandex: eo(i),
        deviceType: $(r),
        isIOS13: ev(),
        isIPad13: e_(),
        isIPhone13: eA(),
        isIPod13: eE(),
        isElectron: eg(),
        isEdgeChromium: ew(o),
        isLegacyEdge: ea(i) && !ew(o),
        isWindows: J(n),
        isMacOs: X(n),
        isMIUI: ed(i),
        isSamsungBrowser: ef(i),
      };
    }
    var ek = F(u),
      eS = V(u),
      eP = K(u),
      eI = G(u),
      eC = el(s) || e_(),
      eN = en(s),
      eO = M(u) || e_(),
      eU = D(u),
      eR = j(u) || e_(),
      eL = z(u),
      eW = z(u),
      eB = Y(d),
      eD = Z(d),
      ej = Q(d) || e_(),
      eM = er(s),
      eF = ei(s),
      ez = es(s),
      eK = eu(s),
      eV = ec(s),
      eG = ee(d),
      eq = et(d),
      eH = ep(s),
      e$ = em(s),
      eY = ey(s),
      eJ = q(u),
      eX = H(u),
      eZ = eh(c),
      eQ = eb(c),
      e0 = ex(f),
      e1 = ea(s) || ew(f),
      e2 = eo(s),
      e3 = $(u),
      e6 = ev(),
      e5 = e_(),
      e4 = eA(),
      e8 = eE(),
      e7 = eg(),
      e9 = ew(f),
      te = ea(s) && !ew(f),
      tt = J(d),
      tr = X(d),
      ti = ed(s),
      tn = ef(s);
    function ta(e) {
      return m(e || window.navigator.userAgent);
    }
    (r.AndroidView = function (e) {
      var t = e.renderWithFragment,
        r = e.children,
        a = _(e, ["renderWithFragment", "children"]);
      return eB
        ? t
          ? n.createElement(i.Fragment, null, r)
          : n.createElement("div", a, r)
        : null;
    }),
      (r.BrowserTypes = N),
      (r.BrowserView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eL
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.ConsoleView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eS
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.CustomView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = (e.viewClassName, e.style, e.condition),
          o = _(e, [
            "renderWithFragment",
            "children",
            "viewClassName",
            "style",
            "condition",
          ]);
        return a
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", o, r)
          : null;
      }),
      (r.IEView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eV
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.IOSView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return ej
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.MobileOnlyView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a =
            (e.viewClassName,
            e.style,
            _(e, ["renderWithFragment", "children", "viewClassName", "style"]));
        return eU
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.MobileView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eO
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.OsTypes = O),
      (r.SmartTVView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return ek
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.TabletView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eR
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.WearableView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eP
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.WinPhoneView = function (e) {
        var t = e.renderWithFragment,
          r = e.children,
          a = _(e, ["renderWithFragment", "children"]);
        return eD
          ? t
            ? n.createElement(i.Fragment, null, r)
            : n.createElement("div", a, r)
          : null;
      }),
      (r.browserName = eY),
      (r.browserVersion = e$),
      (r.deviceDetect = function (e) {
        var t,
          r,
          i,
          n,
          a = e ? m(e) : y,
          o = a.device,
          s = a.browser,
          l = a.engine,
          u = a.os,
          c = a.ua,
          d = R(o.type),
          f = d.isBrowser,
          p = d.isMobile,
          b = d.isTablet,
          g = d.isSmartTV,
          w = d.isConsole,
          v = d.isWearable,
          _ = d.isEmbedded;
        if (f)
          return {
            isBrowser: f,
            browserMajorVersion: L(s.major),
            browserFullVersion: L(s.version),
            browserName: L(s.name),
            engineName: L(l.name),
            engineVersion: L(l.version),
            osName: L(u.name),
            osVersion: L(u.version),
            userAgent: L(c),
          };
        if (g)
          return {
            isSmartTV: g,
            engineName: L(l.name),
            engineVersion: L(l.version),
            osName: L(u.name),
            osVersion: L(u.version),
            userAgent: L(c),
          };
        if (w)
          return {
            isConsole: w,
            engineName: L(l.name),
            engineVersion: L(l.version),
            osName: L(u.name),
            osVersion: L(u.version),
            userAgent: L(c),
          };
        if (p || b) {
          return (
            (t = d),
            (r = o),
            (i = u),
            (n = c),
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(r), !0).forEach(function (t) {
                      var i, n, a;
                      (i = e),
                        (n = t),
                        (a = r[t]),
                        n in i
                          ? Object.defineProperty(i, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (i[n] = a);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : h(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            })({}, t, {
              vendor: L(r.vendor),
              model: L(r.model),
              os: L(i.name),
              osVersion: L(i.version),
              ua: L(n),
            })
          );
        }
        return v
          ? {
              isWearable: v,
              engineName: L(l.name),
              engineVersion: L(l.version),
              osName: L(u.name),
              osVersion: L(u.version),
              userAgent: L(c),
            }
          : _
          ? {
              isEmbedded: _,
              vendor: L(o.vendor),
              model: L(o.model),
              engineName: L(l.name),
              engineVersion: L(l.version),
              osName: L(u.name),
              osVersion: L(u.version),
              userAgent: L(c),
            }
          : void 0;
      }),
      (r.deviceType = e3),
      (r.engineName = eZ),
      (r.engineVersion = eQ),
      (r.fullBrowserVersion = eH),
      (r.getSelectorsByUserAgent = function (e) {
        if (!e || "string" != typeof e)
          return void console.error("No valid user agent string was provided");
        var t = m(e);
        return eT({
          device: t.device,
          browser: t.browser,
          os: t.os,
          engine: t.engine,
          ua: t.ua,
        });
      }),
      (r.getUA = e0),
      (r.isAndroid = eB),
      (r.isBrowser = eL),
      (r.isChrome = eM),
      (r.isChromium = eN),
      (r.isConsole = eS),
      (r.isDesktop = eW),
      (r.isEdge = e1),
      (r.isEdgeChromium = e9),
      (r.isElectron = e7),
      (r.isEmbedded = eI),
      (r.isFirefox = eF),
      (r.isIE = eV),
      (r.isIOS = ej),
      (r.isIOS13 = e6),
      (r.isIPad13 = e5),
      (r.isIPhone13 = e4),
      (r.isIPod13 = e8),
      (r.isLegacyEdge = te),
      (r.isMIUI = ti),
      (r.isMacOs = tr),
      (r.isMobile = eO),
      (r.isMobileOnly = eU),
      (r.isMobileSafari = eC),
      (r.isOpera = eK),
      (r.isSafari = ez),
      (r.isSamsungBrowser = tn),
      (r.isSmartTV = ek),
      (r.isTablet = eR),
      (r.isWearable = eP),
      (r.isWinPhone = eD),
      (r.isWindows = tt),
      (r.isYandex = e2),
      (r.mobileModel = eX),
      (r.mobileVendor = eJ),
      (r.osName = eq),
      (r.osVersion = eG),
      (r.parseUserAgent = m),
      (r.setUserAgent = function (e) {
        return p(e);
      }),
      (r.useDeviceData = ta),
      (r.useDeviceSelectors = function (e) {
        var t = ta(e || window.navigator.userAgent);
        return [eT(t), t];
      }),
      (r.useMobileOrientation = function () {
        var e,
          t =
            (function (e) {
              if (Array.isArray(e)) return e;
            })(
              (e = i.useState(function () {
                var e = 90 * (window.innerWidth > window.innerHeight);
                return {
                  isPortrait: 0 === e,
                  isLandscape: 90 === e,
                  orientation: 0 === e ? "portrait" : "landscape",
                };
              }))
            ) ||
            (function (e, t) {
              var r,
                i,
                n =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != n) {
                var a = [],
                  o = !0,
                  s = !1;
                try {
                  for (
                    n = n.call(e);
                    !(o = (r = n.next()).done) &&
                    (a.push(r.value), 2 !== a.length);
                    o = !0
                  );
                } catch (e) {
                  (s = !0), (i = e);
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (s) throw i;
                  }
                }
                return a;
              }
            })(e, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return E(e, 2);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(e);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return E(e, 2);
              }
            })(e, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          r = t[0],
          n = t[1],
          a = i.useCallback(
            function () {
              var e = 90 * (window.innerWidth > window.innerHeight),
                t = {
                  isPortrait: 0 === e,
                  isLandscape: 90 === e,
                  orientation: 0 === e ? "portrait" : "landscape",
                };
              r.orientation !== t.orientation && n(t);
            },
            [r.orientation]
          );
        return (
          i.useEffect(
            function () {
              return (
                ("u" < typeof window ? "undefined" : b(window)) !== void 0 &&
                  eO &&
                  (a(),
                  window.addEventListener("load", a, !1),
                  window.addEventListener("resize", a, !1)),
                function () {
                  window.removeEventListener("resize", a, !1),
                    window.removeEventListener("load", a, !1);
                }
              );
            },
            [a]
          ),
          r
        );
      }),
      (r.withOrientationChange = function (e) {
        return (function (t) {
          var r;
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          function i(e) {
            var t;
            if (!(this instanceof i))
              throw TypeError("Cannot call a class as a function");
            return (
              ((t = (function (e, t) {
                if (t && ("object" == typeof t || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return A(e);
              })(this, w(i).call(this, e))).isEventListenerAdded = !1),
              (t.handleOrientationChange = t.handleOrientationChange.bind(
                A(t)
              )),
              (t.onOrientationChange = t.onOrientationChange.bind(A(t))),
              (t.onPageLoad = t.onPageLoad.bind(A(t))),
              (t.state = { isLandscape: !1, isPortrait: !1 }),
              t
            );
          }
          return (
            (i.prototype = Object.create(t && t.prototype, {
              constructor: { value: i, writable: !0, configurable: !0 },
            })),
            t && v(i, t),
            (r = [
              {
                key: "handleOrientationChange",
                value: function () {
                  this.isEventListenerAdded || (this.isEventListenerAdded = !0);
                  var e = 90 * (window.innerWidth > window.innerHeight);
                  this.setState({ isPortrait: 0 === e, isLandscape: 90 === e });
                },
              },
              {
                key: "onOrientationChange",
                value: function () {
                  this.handleOrientationChange();
                },
              },
              {
                key: "onPageLoad",
                value: function () {
                  this.handleOrientationChange();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  ("u" < typeof window ? "undefined" : b(window)) !== void 0 &&
                    eO &&
                    (this.isEventListenerAdded
                      ? window.removeEventListener("load", this.onPageLoad, !1)
                      : (this.handleOrientationChange(),
                        window.addEventListener("load", this.onPageLoad, !1)),
                    window.addEventListener(
                      "resize",
                      this.onOrientationChange,
                      !1
                    ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener(
                    "resize",
                    this.onOrientationChange,
                    !1
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return n.createElement(
                    e,
                    g({}, this.props, {
                      isLandscape: this.state.isLandscape,
                      isPortrait: this.state.isPortrait,
                    })
                  );
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            })(i.prototype, r),
            i
          );
        })(n.Component);
      });
  },
  914618,
  388857,
  (e) => {
    "use strict";
    var t,
      r,
      i,
      n = e.i(686383),
      a = e.i(177089),
      o = e.i(385892),
      s = e.i(499359),
      l = e.i(120076),
      u = e.i(117956),
      c = e.i(55940),
      d = e.i(455775),
      f = e.i(933267),
      p = e.i(456855);
    let m = (0, f.Field)(
        BigInt(
          "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
        )
      ),
      y = m.create(BigInt("-3")),
      h = BigInt(
        "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
      ),
      b = (0, c.createCurve)(
        {
          a: y,
          b: h,
          Fp: m,
          n: BigInt(
            "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
          ),
          Gx: BigInt(
            "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
          ),
          Gy: BigInt(
            "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
          ),
          h: BigInt(1),
          lowS: !1,
        },
        u.sha256
      ),
      g = (0, p.mapToCurveSimpleSWU)(m, {
        A: y,
        B: h,
        Z: m.create(BigInt("-10")),
      });
    (0, d.createHasher)(b.ProjectivePoint, (e) => g(e[0]), {
      DST: "P256_XMD:SHA-256_SSWU_RO_",
      encodeDST: "P256_XMD:SHA-256_SSWU_NU_",
      p: m.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: u.sha256,
    });
    let w = (0, f.Field)(
        BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
        )
      ),
      v = w.create(BigInt("-3")),
      _ = BigInt(
        "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
      );
    (0, c.createCurve)(
      {
        a: v,
        b: _,
        Fp: w,
        n: BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
        ),
        Gx: BigInt(
          "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
        ),
        Gy: BigInt(
          "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
        ),
        h: BigInt(1),
        lowS: !1,
      },
      u.sha384
    ),
      (0, p.mapToCurveSimpleSWU)(w, { A: v, B: _, Z: w.create(BigInt("-12")) });
    let A = (0, f.Field)(
        BigInt(
          "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        )
      ),
      E = A.create(BigInt("-3")),
      x = BigInt(
        "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
      );
    (0, c.createCurve)(
      {
        a: E,
        b: x,
        Fp: A,
        n: BigInt(
          "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
        ),
        Gx: BigInt(
          "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
        ),
        Gy: BigInt(
          "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
        ),
        h: BigInt(1),
        lowS: !1,
        allowedPrivateKeyLengths: [130, 131, 132],
      },
      u.sha512
    ),
      (0, p.mapToCurveSimpleSWU)(A, { A: E, B: x, Z: A.create(BigInt("-4")) });
    var T = e.i(637938);
    function k(e) {
      let { hash: t, payload: r, publicKey: i, signature: n } = e;
      return b.verify(
        n,
        r instanceof Uint8Array ? r : T.fromHex(r),
        o.toHex(i).substring(2),
        { lowS: !0, ...(t ? { prehash: !0 } : {}) }
      );
    }
    var S = e.i(513838),
      P = e.i(624383);
    let I = new TextEncoder();
    Array.from(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    ).map((e, t) => [t, e.charCodeAt(0)]);
    let C = {
      ...Object.fromEntries(
        Array.from(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        ).map((e, t) => [e.charCodeAt(0), t])
      ),
      61: 0,
      45: 62,
      95: 63,
    };
    var N = e.i(817284);
    Uint8Array.from([
      105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186, 233,
    ]),
      s.BaseError,
      s.BaseError;
    var O = s;
    e.i(626206);
    class U extends O.BaseError {
      constructor({ majorType: e }) {
        super(`Invalid CBOR major type: ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.InvalidMajorTypeError",
          });
      }
    }
    class R extends O.BaseError {
      constructor({ additionalInfo: e }) {
        super(`Invalid CBOR additional info: ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.InvalidAdditionalInfoError",
          });
      }
    }
    class L extends O.BaseError {
      constructor() {
        super("64-bit integers are not supported in CBOR decoding."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.Unsupported64BitIntegerError",
          });
      }
    }
    class W extends O.BaseError {
      constructor({ tag: e }) {
        super(`CBOR tagged data (tag ${e}) is not yet supported.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.UnsupportedTagError",
          });
      }
    }
    class B extends O.BaseError {
      constructor({ type: e }) {
        super(`Invalid chunk type in indefinite-length ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.InvalidIndefiniteLengthChunkError",
          });
      }
    }
    class D extends O.BaseError {
      constructor({ value: e }) {
        super(`Invalid CBOR simple value: ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.InvalidSimpleValueError",
          });
      }
    }
    class j extends O.BaseError {
      constructor() {
        super("BigInt values are not supported in CBOR encoding."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.UnsupportedBigIntError",
          });
      }
    }
    class M extends O.BaseError {
      constructor({ token: e }) {
        super(`Unexpected token: ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.UnexpectedTokenError",
          });
      }
    }
    class F extends O.BaseError {
      constructor({ number: e }) {
        super(
          `Number exceeds maximum safe integer (${Number.MAX_SAFE_INTEGER}): ${e}`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.NumberTooLargeError",
          });
      }
    }
    class z extends O.BaseError {
      constructor({ size: e }) {
        super(`String length exceeds maximum (4294967295): ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.StringTooLargeError",
          });
      }
    }
    class K extends O.BaseError {
      constructor({ size: e }) {
        super(`Array length exceeds maximum (4294967295): ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.ArrayTooLargeError",
          });
      }
    }
    class V extends O.BaseError {
      constructor({ size: e }) {
        super(`Object size exceeds maximum (4294967295): ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.ObjectTooLargeError",
          });
      }
    }
    class G extends O.BaseError {
      constructor({ size: e }) {
        super(`Byte string length exceeds maximum (4294967295): ${e}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cbor.ByteStringTooLargeError",
          });
      }
    }
    function q(e) {
      if (void 0 === e) return { length: 1, encode: (e) => e.pushUint8(247) };
      if (null === e) return { length: 1, encode: (e) => e.pushUint8(246) };
      if ("boolean" == typeof e)
        return { length: 1, encode: (t) => t.pushUint8(e ? 245 : 244) };
      if ("number" == typeof e) return q.number(e);
      if ("bigint" == typeof e) throw new j();
      if ("string" == typeof e) return q.string(e);
      if (Array.isArray(e)) return q.array(e);
      if (e instanceof Uint8Array) return q.byteString(e);
      if (e instanceof ArrayBuffer) return q.byteString(new Uint8Array(e));
      if (ArrayBuffer.isView(e))
        return q.byteString(
          new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
        );
      if (e instanceof Map) return q.map(e);
      if ("object" == typeof e) return q.object(e);
      throw new M({ token: String(e) });
    }
    function H(e) {
      let t = e.readUint8(),
        r = t >> 5,
        i = 31 & t;
      switch (r) {
        case 0:
          return H.readUnsignedInteger(e, i);
        case 1:
          return H.readNegativeInteger(e, i);
        case 2:
          return H.readByteString(e, i);
        case 3:
          return H.readTextString(e, i);
        case 4:
          return H.readArray(e, i);
        case 5:
          return H.readMap(e, i);
        case 6:
          throw new W({ tag: i });
        case 7:
          return H.readSimpleOrFloat(e, i);
        default:
          throw new U({ majorType: r });
      }
    }
    ((t = q || (q = {})).number = function (e) {
      if (!Number.isSafeInteger(e)) {
        let t = Math.fround(e);
        return Number.isNaN(e) || e === t
          ? {
              length: 5,
              encode(t) {
                t.pushUint8(250),
                  t.dataView.setFloat32(t.position, e, !1),
                  (t.position += 4);
              },
            }
          : {
              length: 9,
              encode(t) {
                t.pushUint8(251),
                  t.dataView.setFloat64(t.position, e, !1),
                  (t.position += 8);
              },
            };
      }
      if (e >= 0) {
        if (e <= 23) return { length: 1, encode: (t) => t.pushUint8(e) };
        if (e <= 255)
          return {
            length: 2,
            encode: (t) => {
              t.pushUint8(24), t.pushUint8(e);
            },
          };
        if (e <= 65535)
          return {
            length: 3,
            encode: (t) => {
              t.pushUint8(25), t.pushUint16(e);
            },
          };
        if (e <= 0xffffffff)
          return {
            length: 5,
            encode: (t) => {
              t.pushUint8(26), t.pushUint32(e);
            },
          };
        throw new F({ number: e.toString(10) });
      }
      let t = -1 - e;
      if (e >= -24) return { length: 1, encode: (e) => e.pushUint8(32 + t) };
      if (t <= 255)
        return {
          length: 2,
          encode: (e) => {
            e.pushUint8(56), e.pushUint8(t);
          },
        };
      if (t <= 65535)
        return {
          length: 3,
          encode: (e) => {
            e.pushUint8(57), e.pushUint16(t);
          },
        };
      if (t <= 0xffffffff)
        return {
          length: 5,
          encode: (e) => {
            e.pushUint8(58), e.pushUint32(t);
          },
        };
      throw new F({ number: e.toString(10) });
    }),
      (t.string = function (e) {
        let t = T.fromString(e),
          r = t.length;
        if (r <= 23)
          return {
            length: 1 + r,
            encode(e) {
              e.pushUint8(96 + r), r > 0 && e.pushBytes(t);
            },
          };
        if (r <= 255)
          return {
            length: 2 + r,
            encode(e) {
              e.pushUint8(120), e.pushUint8(r), e.pushBytes(t);
            },
          };
        if (r <= 65535)
          return {
            length: 3 + r,
            encode(e) {
              e.pushUint8(121), e.pushUint16(r), e.pushBytes(t);
            },
          };
        if (r <= 0xffffffff)
          return {
            length: 5 + r,
            encode(e) {
              e.pushUint8(122), e.pushUint32(r), e.pushBytes(t);
            },
          };
        throw new z({ size: r });
      }),
      (t.array = function (e) {
        let r = e.map((e) => t(e)),
          i = r.reduce((e, t) => e + t.length, 0),
          n = e.length;
        if (n <= 23)
          return {
            length: 1 + i,
            encode(e) {
              for (let t of (e.pushUint8(128 + n), r)) t.encode(e);
            },
          };
        if (n <= 255)
          return {
            length: 2 + i,
            encode(e) {
              for (let t of (e.pushUint8(152), e.pushUint8(n), r)) t.encode(e);
            },
          };
        if (n <= 65535)
          return {
            length: 3 + i,
            encode(e) {
              for (let t of (e.pushUint8(153), e.pushUint16(n), r)) t.encode(e);
            },
          };
        if (n <= 0xffffffff)
          return {
            length: 5 + i,
            encode(e) {
              for (let t of (e.pushUint8(154), e.pushUint32(n), r)) t.encode(e);
            },
          };
        throw new K({ size: n });
      }),
      (t.byteString = function (e) {
        let t = e.byteLength;
        if (t <= 23)
          return {
            length: 1 + t,
            encode(r) {
              r.pushUint8(64 + t), r.pushBytes(e);
            },
          };
        if (t <= 255)
          return {
            length: 2 + t,
            encode(r) {
              r.pushUint8(88), r.pushUint8(t), r.pushBytes(e);
            },
          };
        if (t <= 65535)
          return {
            length: 3 + t,
            encode(r) {
              r.pushUint8(89), r.pushUint16(t), r.pushBytes(e);
            },
          };
        if (t <= 0xffffffff)
          return {
            length: 5 + t,
            encode(r) {
              r.pushUint8(90), r.pushUint32(t), r.pushBytes(e);
            },
          };
        throw new G({ size: t });
      }),
      (t.object = function (e) {
        let r = Object.keys(e),
          i = r.map((r) => ({ key: t(r), value: t(e[r]) })),
          n = i.reduce((e, t) => e + t.key.length + t.value.length, 0),
          a = r.length;
        if (a <= 23)
          return {
            length: 1 + n,
            encode(e) {
              for (let t of (e.pushUint8(160 + a), i))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (a <= 255)
          return {
            length: 2 + n,
            encode(e) {
              for (let t of (e.pushUint8(184), e.pushUint8(a), i))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (a <= 65535)
          return {
            length: 3 + n,
            encode(e) {
              for (let t of (e.pushUint8(185), e.pushUint16(a), i))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (a <= 0xffffffff)
          return {
            length: 5 + n,
            encode(e) {
              for (let t of (e.pushUint8(186), e.pushUint32(a), i))
                t.key.encode(e), t.value.encode(e);
            },
          };
        throw new V({ size: a });
      }),
      (t.map = function (e) {
        let r = [];
        for (let [i, n] of e) r.push({ key: t(i), value: t(n) });
        let i = r.reduce((e, t) => e + t.key.length + t.value.length, 0),
          n = e.size;
        if (n <= 23)
          return {
            length: 1 + i,
            encode(e) {
              for (let t of (e.pushUint8(160 + n), r))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (n <= 255)
          return {
            length: 2 + i,
            encode(e) {
              for (let t of (e.pushUint8(184), e.pushUint8(n), r))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (n <= 65535)
          return {
            length: 3 + i,
            encode(e) {
              for (let t of (e.pushUint8(185), e.pushUint16(n), r))
                t.key.encode(e), t.value.encode(e);
            },
          };
        if (n <= 0xffffffff)
          return {
            length: 5 + i,
            encode(e) {
              for (let t of (e.pushUint8(186), e.pushUint32(n), r))
                t.key.encode(e), t.value.encode(e);
            },
          };
        throw new V({ size: n });
      });
    var $ = H || (H = {});
    function Y(e, t) {
      if (t < 24) return t;
      if (24 === t) return e.readUint8();
      if (25 === t) return e.readUint16();
      if (26 === t) return e.readUint32();
      if (27 === t) throw new L();
      throw new R({ additionalInfo: t });
    }
    ($.readUnsignedInteger = function (e, t) {
      return Y(e, t);
    }),
      ($.readNegativeInteger = function (e, t) {
        return -1 - Y(e, t);
      }),
      ($.readByteString = function (e, t) {
        if (31 === t) {
          let t = [],
            r = 0;
          for (;;) {
            if (255 === e.inspectUint8()) {
              e.readUint8();
              break;
            }
            let i = $(e);
            if (!(i instanceof Uint8Array))
              throw new B({ type: "byte string" });
            t.push(i), (r += i.length);
          }
          let i = new Uint8Array(r),
            n = 0;
          for (let e of t) i.set(e, n), (n += e.length);
          return i;
        }
        let r = Y(e, t);
        return e.readBytes(r);
      }),
      ($.readTextString = function (e, t) {
        if (31 === t) {
          let t = [];
          for (;;) {
            if (255 === e.inspectUint8()) {
              e.readUint8();
              break;
            }
            let r = $(e);
            if ("string" != typeof r) throw new B({ type: "text string" });
            t.push(r);
          }
          return t.join("");
        }
        let r = Y(e, t),
          i = e.readBytes(r);
        return T.toString(i);
      }),
      ($.readArray = function (e, t) {
        if (31 === t) {
          let t = [];
          for (;;) {
            if (255 === e.inspectUint8()) {
              e.readUint8();
              break;
            }
            t.push($(e));
          }
          return t;
        }
        let r = Y(e, t),
          i = [];
        for (let t = 0; t < r; t++) i.push($(e));
        return i;
      }),
      ($.readMap = function (e, t) {
        if (31 === t) {
          let t = {};
          for (;;) {
            if (255 === e.inspectUint8()) {
              e.readUint8();
              break;
            }
            let r = $(e),
              i = "string" == typeof r ? r : String(r),
              n = $(e);
            t[i] = n;
          }
          return t;
        }
        let r = Y(e, t),
          i = {};
        for (let t = 0; t < r; t++) {
          let t = $(e),
            r = "string" == typeof t ? t : String(t),
            n = $(e);
          i[r] = n;
        }
        return i;
      }),
      ($.readSimpleOrFloat = function (e, t) {
        if (20 === t) return !1;
        if (21 === t) return !0;
        if (22 === t) return null;
        if (23 !== t) {
          if (25 === t)
            return (function (e) {
              let t = (e >> 15) & 1,
                r = (e >> 10) & 31,
                i = 1023 & e;
              if (0 === r) {
                if (0 === i) return t ? -0 : 0;
                let e = (i / 1024) * 6103515625e-14;
                return t ? -e : e;
              }
              if (31 === r) return 0 === i ? (t ? -1 / 0 : 1 / 0) : NaN;
              let n = 2 ** (r - 15) * (1 + i / 1024);
              return t ? -n : n;
            })(e.readUint16());
          if (26 === t) {
            let t = e.dataView.getFloat32(e.position, !1);
            return (e.position += 4), t;
          }
          if (27 === t) {
            let t = e.dataView.getFloat64(e.position, !1);
            return (e.position += 8), t;
          }
          if (24 === t) {
            let t = e.readUint8();
            if (t < 32) throw new D({ value: t });
            return;
          }
          throw new R({ additionalInfo: t });
        }
      });
    s.BaseError, s.BaseError;
    let J = "0x01",
      X = "0x02",
      Z = "0x03",
      Q = "0x04",
      ee = "0x7777777777777777777777777777777777777777777777777777777777777777";
    function et(e) {
      let t = es(e);
      if ("secp256k1" === t) return void P.assert(e.signature);
      if ("p256" === t) {
        let t = [];
        if (
          ("bigint" != typeof e.signature?.r && t.push("signature.r"),
          "bigint" != typeof e.signature?.s && t.push("signature.s"),
          "boolean" != typeof e.prehash && t.push("prehash"),
          e.publicKey
            ? ("bigint" != typeof e.publicKey.x && t.push("publicKey.x"),
              "bigint" != typeof e.publicKey.y && t.push("publicKey.y"))
            : t.push("publicKey"),
          t.length > 0)
        )
          throw new ep({ envelope: e, missing: t, type: "p256" });
        return;
      }
      if ("webAuthn" === t) {
        let t = [];
        if (
          ("bigint" != typeof e.signature?.r && t.push("signature.r"),
          "bigint" != typeof e.signature?.s && t.push("signature.s"),
          e.metadata
            ? (e.metadata.authenticatorData ||
                t.push("metadata.authenticatorData"),
              e.metadata.clientDataJSON || t.push("metadata.clientDataJSON"))
            : t.push("metadata"),
          e.publicKey
            ? ("bigint" != typeof e.publicKey.x && t.push("publicKey.x"),
              "bigint" != typeof e.publicKey.y && t.push("publicKey.y"))
            : t.push("publicKey"),
          t.length > 0)
        )
          throw new ep({ envelope: e, missing: t, type: "webAuthn" });
        return;
      }
      if ("keychain" === t) return void et(e.inner);
    }
    function er(e) {
      let { signature: t, root: r } = e;
      return "keychain" === t.type
        ? r
          ? t.userAddress
          : er({ ...e, signature: t.inner })
        : n.fromPublicKey(ei(e));
    }
    function ei(e) {
      let { payload: t, signature: r } = e;
      switch (r.type) {
        case "secp256k1":
          return S.recoverPublicKey({ payload: t, signature: r.signature });
        case "p256":
        case "webAuthn":
          return r.publicKey;
        case "keychain":
          return ei({ payload: t, signature: r.inner });
      }
    }
    function en(e) {
      let t = e.endsWith(ee.slice(2)) ? a.slice(e, 0, -a.size(ee)) : e;
      if (65 === a.size(t)) {
        let e = P.fromHex(t);
        return P.assert(e), { signature: e, type: "secp256k1" };
      }
      let r = a.slice(t, 0, 1),
        i = a.slice(t, 1),
        n = a.size(i);
      if (r === J) {
        if (129 !== n)
          throw new em({
            reason: `Invalid P256 signature envelope size: expected 129 bytes, got ${n} bytes`,
            serialized: t,
          });
        return {
          publicKey: {
            prefix: 4,
            x: a.toBigInt(a.slice(i, 64, 96)),
            y: a.toBigInt(a.slice(i, 96, 128)),
          },
          prehash: 0 !== a.toNumber(a.slice(i, 128, 129)),
          signature: {
            r: a.toBigInt(a.slice(i, 0, 32)),
            s: a.toBigInt(a.slice(i, 32, 64)),
          },
          type: "p256",
        };
      }
      if (r === X) {
        let e, r;
        if (n < 128)
          throw new em({
            reason: `Invalid WebAuthn signature envelope size: expected at least 128 bytes, got ${n} bytes`,
            serialized: t,
          });
        let o = n - 128,
          s = a.slice(i, 0, o);
        for (let t = 37; t < o; t++) {
          let i = a.toString(a.slice(s, t));
          if (i.startsWith("{") && i.endsWith("}"))
            try {
              JSON.parse(i), (e = a.slice(s, 0, t)), (r = i);
              break;
            } catch {}
        }
        if (!e || !r)
          throw new em({
            reason:
              "Unable to parse WebAuthn metadata: could not extract valid authenticatorData and clientDataJSON",
            serialized: t,
          });
        return {
          publicKey: {
            prefix: 4,
            x: a.toBigInt(a.slice(i, o + 64, o + 96)),
            y: a.toBigInt(a.slice(i, o + 96, o + 128)),
          },
          metadata: { authenticatorData: e, clientDataJSON: r },
          signature: {
            r: a.toBigInt(a.slice(i, o, o + 32)),
            s: a.toBigInt(a.slice(i, o + 32, o + 64)),
          },
          type: "webAuthn",
        };
      }
      if (r === Z || r === Q)
        return {
          userAddress: a.slice(i, 0, 20),
          inner: en(a.slice(i, 20)),
          type: "keychain",
          version: r === Q ? "v2" : "v1",
        };
      throw new em({
        reason: `Unknown signature type identifier: ${r}. Expected ${J} (P256), ${X} (WebAuthn), ${Z} (Keychain V1), or ${Q} (Keychain V2)`,
        serialized: t,
      });
    }
    function ea(e, t) {
      let r;
      if ("string" == typeof e) return en(e);
      if (
        "object" == typeof e &&
        null !== e &&
        "r" in e &&
        "s" in e &&
        "yParity" in e
      )
        return { signature: e, type: "secp256k1" };
      let i = es(e);
      return {
        ...e,
        ...("p256" === i ? { prehash: e.prehash } : {}),
        ...("keychain" === i
          ? {
              ...(!(
                "object" == typeof e &&
                null !== e &&
                "version" in e &&
                e.version
              )
                ? { version: "v2" }
                : {}),
              ...(!("object" == typeof e && "keyId" in e && e.keyId)
                ? "p256" === (r = e.inner).type || "webAuthn" === r.type
                  ? { keyId: n.fromPublicKey(r.publicKey) }
                  : "secp256k1" === r.type && t?.payload
                  ? {
                      keyId: n.fromPublicKey(
                        S.recoverPublicKey({
                          payload: t.payload,
                          signature: r.signature,
                        })
                      ),
                    }
                  : {}
                : {}),
            }
          : {}),
        type: i,
      };
    }
    function eo(e) {
      if ("secp256k1" === e.type)
        return { signature: P.fromRpc(e), type: "secp256k1" };
      if ("p256" === e.type)
        return {
          prehash: e.preHash,
          publicKey: {
            prefix: 4,
            x: a.toBigInt(e.pubKeyX),
            y: a.toBigInt(e.pubKeyY),
          },
          signature: { r: a.toBigInt(e.r), s: a.toBigInt(e.s) },
          type: "p256",
        };
      if ("webAuthn" === e.type) {
        let t,
          r,
          i = e.webauthnData,
          n = a.size(i);
        for (let e = 37; e < n; e++) {
          let n = a.toString(a.slice(i, e));
          if (n.startsWith("{") && n.endsWith("}"))
            try {
              JSON.parse(n), (t = a.slice(i, 0, e)), (r = n);
              break;
            } catch {}
        }
        if (!t || !r)
          throw new em({
            reason:
              "Unable to parse WebAuthn metadata: could not extract valid authenticatorData and clientDataJSON",
            serialized: i,
          });
        return {
          metadata: { authenticatorData: t, clientDataJSON: r },
          publicKey: {
            prefix: 4,
            x: a.toBigInt(e.pubKeyX),
            y: a.toBigInt(e.pubKeyY),
          },
          signature: { r: a.toBigInt(e.r), s: a.toBigInt(e.s) },
          type: "webAuthn",
        };
      }
      if ("keychain" === e.type || ("userAddress" in e && "signature" in e))
        return {
          type: "keychain",
          userAddress: e.userAddress,
          inner: eo(e.signature),
          ...(e.keyId ? { keyId: e.keyId } : {}),
          ...(e.version ? { version: e.version } : {}),
        };
      throw new ef({ envelope: e });
    }
    function es(e) {
      if ("object" != typeof e || null === e) throw new ef({ envelope: e });
      if ("type" in e && e.type) return e.type;
      if (
        ("signature" in e &&
          !("publicKey" in e) &&
          "object" == typeof e.signature &&
          null !== e.signature &&
          "r" in e.signature &&
          "s" in e.signature &&
          "yParity" in e.signature) ||
        ("r" in e && "s" in e && "yParity" in e)
      )
        return "secp256k1";
      if (
        "signature" in e &&
        "prehash" in e &&
        "publicKey" in e &&
        "boolean" == typeof e.prehash
      )
        return "p256";
      if ("signature" in e && "metadata" in e && "publicKey" in e)
        return "webAuthn";
      if ("userAddress" in e && "inner" in e) return "keychain";
      throw new ef({ envelope: e });
    }
    function el(e, t = {}) {
      let r = es(e);
      if ("secp256k1" === r)
        return a.concat(P.toHex(e.signature), t.magic ? ee : "0x");
      if ("p256" === r)
        return a.concat(
          J,
          a.fromNumber(e.signature.r, { size: 32 }),
          a.fromNumber(e.signature.s, { size: 32 }),
          a.fromNumber(e.publicKey.x, { size: 32 }),
          a.fromNumber(e.publicKey.y, { size: 32 }),
          a.fromNumber(+!!e.prehash, { size: 1 }),
          t.magic ? ee : "0x"
        );
      if ("webAuthn" === r) {
        let r = a.concat(
          e.metadata.authenticatorData,
          a.fromString(e.metadata.clientDataJSON)
        );
        return a.concat(
          X,
          r,
          a.fromNumber(e.signature.r, { size: 32 }),
          a.fromNumber(e.signature.s, { size: 32 }),
          a.fromNumber(e.publicKey.x, { size: 32 }),
          a.fromNumber(e.publicKey.y, { size: 32 }),
          t.magic ? ee : "0x"
        );
      }
      if ("keychain" === r) {
        let r = "v1" === e.version ? Z : Q;
        return a.concat(r, e.userAddress, el(e.inner), t.magic ? ee : "0x");
      }
      throw new ef({ envelope: e });
    }
    function eu(e) {
      let t = es(e);
      if ("secp256k1" === t)
        return { ...P.toRpc(e.signature), type: "secp256k1" };
      if ("p256" === t)
        return {
          preHash: e.prehash,
          pubKeyX: a.fromNumber(e.publicKey.x, { size: 32 }),
          pubKeyY: a.fromNumber(e.publicKey.y, { size: 32 }),
          r: a.fromNumber(e.signature.r, { size: 32 }),
          s: a.fromNumber(e.signature.s, { size: 32 }),
          type: "p256",
        };
      if ("webAuthn" === t) {
        let t = a.concat(
          e.metadata.authenticatorData,
          a.fromString(e.metadata.clientDataJSON)
        );
        return {
          pubKeyX: a.fromNumber(e.publicKey.x, { size: 32 }),
          pubKeyY: a.fromNumber(e.publicKey.y, { size: 32 }),
          r: a.fromNumber(e.signature.r, { size: 32 }),
          s: a.fromNumber(e.signature.s, { size: 32 }),
          type: "webAuthn",
          webauthnData: t,
        };
      }
      if ("keychain" === t)
        return {
          type: "keychain",
          userAddress: e.userAddress,
          signature: eu(e.inner),
          ...(e.keyId ? { keyId: e.keyId } : {}),
          ...(e.version ? { version: e.version } : {}),
        };
      throw new ef({ envelope: e });
    }
    function ec(e) {
      try {
        return et(e), !0;
      } catch {
        return !1;
      }
    }
    function ed(e, t) {
      let { payload: r } = t,
        i = t.address
          ? t.address
          : t.publicKey
          ? n.fromPublicKey(t.publicKey)
          : void 0;
      if (!i) return !1;
      let o = ea(e);
      if ("secp256k1" === o.type)
        return (
          !!i && S.verify({ address: i, payload: r, signature: o.signature })
        );
      if ("p256" === o.type) {
        let e = n.fromPublicKey(o.publicKey);
        return (
          !!n.isEqual(e, i) &&
          k({
            hash: o.prehash,
            publicKey: o.publicKey,
            payload: r,
            signature: o.signature,
          })
        );
      }
      if ("webAuthn" === o.type) {
        let e = n.fromPublicKey(o.publicKey);
        return (
          !!n.isEqual(e, i) &&
          (function (e) {
            let {
                challenge: t,
                metadata: r,
                origin: i,
                publicKey: n,
                rpId: o,
                signature: s,
              } = e,
              {
                authenticatorData: l,
                clientDataJSON: u,
                userVerificationRequired: c,
              } = r,
              d = T.fromHex(l);
            if (d.length < 37) return !1;
            if (void 0 !== o) {
              let e = d.slice(0, 32),
                t = N.sha256(a.fromString(o), { as: "Bytes" });
              if (!T.isEqual(e, t)) return !1;
            }
            let f = d[32];
            if (
              (1 & f) != 1 ||
              (c && (4 & f) != 4) ||
              ((8 & f) != 8 && (16 & f) == 16)
            )
              return !1;
            let p = JSON.parse(u);
            if (
              "webauthn.get" !== p.type ||
              !p.challenge ||
              a.fromBytes(
                (function (e) {
                  let t = e.replace(/=+$/, ""),
                    r = t.length,
                    i = new Uint8Array(r + 3);
                  I.encodeInto(t + "===", i);
                  for (let e = 0, r = 0; e < t.length; e += 4, r += 3) {
                    let t =
                      (C[i[e]] << 18) +
                      (C[i[e + 1]] << 12) +
                      (C[i[e + 2]] << 6) +
                      C[i[e + 3]];
                    (i[r] = t >> 16),
                      (i[r + 1] = (t >> 8) & 255),
                      (i[r + 2] = 255 & t);
                  }
                  return new Uint8Array(
                    i.buffer,
                    0,
                    (r >> 2) * 3 + (r % 4 && (r % 4) - 1)
                  );
                })(p.challenge)
              ) !== t ||
              (void 0 !== i && !(Array.isArray(i) ? i : [i]).includes(p.origin))
            )
              return !1;
            let m = N.sha256(T.fromString(u), { as: "Bytes" });
            return k({
              hash: !0,
              payload: T.concat(d, m),
              publicKey: n,
              signature: s,
            });
          })({
            challenge: a.from(r),
            metadata: o.metadata,
            publicKey: o.publicKey,
            signature: o.signature,
          })
        );
      }
      throw new ey(`Unable to verify signature envelope of type "${o.type}".`);
    }
    class ef extends s.BaseError {
      constructor({ envelope: e }) {
        super(
          `Unable to coerce value (\`${l.stringify(
            e
          )}\`) to a valid signature envelope.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureEnvelope.CoercionError",
          });
      }
    }
    class ep extends s.BaseError {
      constructor({ envelope: e, missing: t, type: r }) {
        super(`Signature envelope of type "${r}" is missing required properties: ${t
          .map((e) => `\`${e}\``)
          .join(", ")}.

Provided: ${l.stringify(e)}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureEnvelope.MissingPropertiesError",
          });
      }
    }
    class em extends s.BaseError {
      constructor({ reason: e, serialized: t }) {
        super(`Unable to deserialize signature envelope: ${e}`, {
          metaMessages: [`Serialized: ${t}`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureEnvelope.InvalidSerializedError",
          });
      }
    }
    class ey extends s.BaseError {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureEnvelope.VerificationError",
          });
      }
    }
    e.s(
      [
        "CoercionError",
        () => ef,
        "InvalidSerializedError",
        () => em,
        "MissingPropertiesError",
        () => ep,
        "VerificationError",
        () => ey,
        "assert",
        () => et,
        "deserialize",
        () => en,
        "extractAddress",
        () => er,
        "extractPublicKey",
        () => ei,
        "from",
        () => ea,
        "fromRpc",
        () => eo,
        "getType",
        () => es,
        "magicBytes",
        0,
        ee,
        "serialize",
        () => el,
        "toRpc",
        () => eu,
        "types",
        0,
        ["secp256k1", "p256", "webAuthn"],
        "validate",
        () => ec,
        "verify",
        () => ed,
      ],
      776757
    );
    var eh = e.i(776757),
      eh = eh,
      eb = e.i(555162),
      eg = e.i(724048),
      ew = e.i(607844),
      ev = e.i(11981),
      e_ = e.i(589683),
      eA = e.i(720047),
      eE = e.i(979593),
      ex = e.i(114245),
      eT = e.i(247640),
      ek = e.i(140315),
      eS = e.i(299408),
      eP = e.i(532931),
      eI = e.i(986553),
      eC = e.i(603720);
    let eN = [
      {
        name: "authorizeKey",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "address", name: "keyId" },
          { type: "uint8", name: "signatureType" },
          { type: "uint64", name: "expiry" },
          { type: "bool", name: "enforceLimits" },
          {
            type: "tuple[]",
            name: "limits",
            components: [
              { type: "address", name: "token" },
              { type: "uint256", name: "amount" },
            ],
          },
        ],
        outputs: [],
      },
      {
        name: "authorizeKey",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "address", name: "keyId" },
          { type: "uint8", name: "signatureType" },
          {
            type: "tuple",
            name: "config",
            components: [
              { type: "uint64", name: "expiry" },
              { type: "bool", name: "enforceLimits" },
              {
                type: "tuple[]",
                name: "limits",
                components: [
                  { type: "address", name: "token" },
                  { type: "uint256", name: "amount" },
                  { type: "uint64", name: "period" },
                ],
              },
              { type: "bool", name: "allowAnyCalls" },
              {
                type: "tuple[]",
                name: "allowedCalls",
                components: [
                  { type: "address", name: "target" },
                  {
                    type: "tuple[]",
                    name: "selectorRules",
                    components: [
                      { type: "bytes4", name: "selector" },
                      { type: "address[]", name: "recipients" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        outputs: [],
      },
      {
        name: "revokeKey",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [{ type: "address", name: "keyId" }],
        outputs: [],
      },
      {
        name: "updateSpendingLimit",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "address", name: "keyId" },
          { type: "address", name: "token" },
          { type: "uint256", name: "newLimit" },
        ],
        outputs: [],
      },
      {
        name: "setAllowedCalls",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "address", name: "keyId" },
          {
            type: "tuple[]",
            name: "scopes",
            components: [
              { type: "address", name: "target" },
              {
                type: "tuple[]",
                name: "selectorRules",
                components: [
                  { type: "bytes4", name: "selector" },
                  { type: "address[]", name: "recipients" },
                ],
              },
            ],
          },
        ],
        outputs: [],
      },
      {
        name: "removeAllowedCalls",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "address", name: "keyId" },
          { type: "address", name: "target" },
        ],
        outputs: [],
      },
      {
        name: "getKey",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "address", name: "account" },
          { type: "address", name: "keyId" },
        ],
        outputs: [
          {
            type: "tuple",
            components: [
              { type: "uint8", name: "signatureType" },
              { type: "address", name: "keyId" },
              { type: "uint64", name: "expiry" },
              { type: "bool", name: "enforceLimits" },
              { type: "bool", name: "isRevoked" },
            ],
          },
        ],
      },
      {
        name: "getRemainingLimit",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "address", name: "account" },
          { type: "address", name: "keyId" },
          { type: "address", name: "token" },
        ],
        outputs: [{ type: "uint256", name: "remaining" }],
      },
      {
        name: "getRemainingLimitWithPeriod",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "address", name: "account" },
          { type: "address", name: "keyId" },
          { type: "address", name: "token" },
        ],
        outputs: [
          { type: "uint256", name: "remaining" },
          { type: "uint64", name: "periodEnd" },
        ],
      },
      {
        name: "getAllowedCalls",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "address", name: "account" },
          { type: "address", name: "keyId" },
        ],
        outputs: [
          { type: "bool", name: "isScoped" },
          {
            type: "tuple[]",
            name: "scopes",
            components: [
              { type: "address", name: "target" },
              {
                type: "tuple[]",
                name: "selectorRules",
                components: [
                  { type: "bytes4", name: "selector" },
                  { type: "address[]", name: "recipients" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "getTransactionKey",
        type: "function",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "address" }],
      },
      {
        name: "KeyAuthorized",
        type: "event",
        inputs: [
          { type: "address", name: "account", indexed: !0 },
          { type: "address", name: "publicKey", indexed: !0 },
          { type: "uint8", name: "signatureType" },
          { type: "uint64", name: "expiry" },
        ],
      },
      {
        name: "KeyRevoked",
        type: "event",
        inputs: [
          { type: "address", name: "account", indexed: !0 },
          { type: "address", name: "publicKey", indexed: !0 },
        ],
      },
      {
        name: "SpendingLimitUpdated",
        type: "event",
        inputs: [
          { type: "address", name: "account", indexed: !0 },
          { type: "address", name: "publicKey", indexed: !0 },
          { type: "address", name: "token", indexed: !0 },
          { type: "uint256", name: "newLimit" },
        ],
      },
      {
        name: "AccessKeySpend",
        type: "event",
        inputs: [
          { type: "address", name: "account", indexed: !0 },
          { type: "address", name: "publicKey", indexed: !0 },
          { type: "address", name: "token", indexed: !0 },
          { type: "uint256", name: "amount" },
          { type: "uint256", name: "remainingLimit" },
        ],
      },
      { name: "UnauthorizedCaller", type: "error", inputs: [] },
      { name: "KeyAlreadyExists", type: "error", inputs: [] },
      { name: "KeyNotFound", type: "error", inputs: [] },
      { name: "KeyExpired", type: "error", inputs: [] },
      { name: "SpendingLimitExceeded", type: "error", inputs: [] },
      { name: "InvalidSpendingLimit", type: "error", inputs: [] },
      { name: "InvalidSignatureType", type: "error", inputs: [] },
      { name: "ZeroPublicKey", type: "error", inputs: [] },
      { name: "ExpiryInPast", type: "error", inputs: [] },
      { name: "KeyAlreadyRevoked", type: "error", inputs: [] },
      {
        name: "SignatureTypeMismatch",
        type: "error",
        inputs: [
          { type: "uint8", name: "expected" },
          { type: "uint8", name: "actual" },
        ],
      },
      { name: "CallNotAllowed", type: "error", inputs: [] },
      { name: "InvalidCallScope", type: "error", inputs: [] },
      {
        name: "LegacyAuthorizeKeySelectorChanged",
        type: "error",
        inputs: [{ type: "bytes4", name: "newSelector" }],
      },
    ];
    [...eN];
    var eO = e.i(855294),
      eU = e.i(543110),
      eR = s;
    function eL(e) {
      return e.startsWith("tempo")
        ? (function (e) {
            if (!e.startsWith("tempox")) throw new eW({ address: e });
            let t = e.slice(6);
            return a.assert(t, { strict: !0 }), { address: n.checksum(t) };
          })(e).address
        : e;
    }
    class eW extends eR.BaseError {
      constructor({ address: e }) {
        super(`Tempo address "${e}" has an invalid prefix. Expected "tempox".`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TempoAddress.InvalidPrefixError",
          });
      }
    }
    function eB(e, t = {}) {
      if ("keyId" in e) return eD(e);
      let r = {
        ...e,
        address: eL(e.address),
        ...(e.limits
          ? { limits: e.limits.map((e) => ({ ...e, token: eL(e.token) })) }
          : {}),
        ...(e.scopes
          ? {
              scopes: e.scopes.map((e) => ({
                ...e,
                address: eL(e.address),
                selector: eY(e.selector),
                ...(e.recipients
                  ? { recipients: e.recipients.map((e) => eL(e)) }
                  : {}),
              })),
            }
          : {}),
      };
      return t.signature ? { ...r, signature: ea(t.signature) } : r;
    }
    function eD(e) {
      let {
          allowedCalls: t,
          chainId: r,
          keyId: i,
          expiry: n,
          limits: o,
          keyType: s,
        } = e,
        l = eo(e.signature),
        u = t
          ? t.flatMap((e) =>
              e.selectorRules && 0 !== e.selectorRules.length
                ? e.selectorRules.map((t) => {
                    var r;
                    return {
                      address: e.target,
                      selector:
                        "string" == typeof (r = t.selector)
                          ? r
                          : Array.isArray(r)
                          ? a.fromBytes(new Uint8Array(r))
                          : r,
                      ...(t.recipients && t.recipients.length > 0
                        ? { recipients: t.recipients }
                        : {}),
                    };
                  })
                : [{ address: e.target }]
            )
          : void 0;
      return {
        address: i,
        chainId: "0x" === r ? 0n : a.toBigInt(r),
        ...(null != n ? { expiry: Number(n) } : {}),
        limits: o?.map((e) => ({
          token: e.token,
          limit: BigInt(e.limit),
          ...(e.period && e$(e.period) > 0 ? { period: e$(e.period) } : {}),
        })),
        ...(u ? { scopes: u } : {}),
        signature: l,
        type: s,
      };
    }
    function ej(e) {
      let [t, r] = e,
        [i, n, o, s, l, u] = t,
        c = (() => {
          switch (n) {
            case "0x":
            case "0x00":
              return "secp256k1";
            case "0x01":
              return "p256";
            case "0x02":
              return "webAuthn";
            default:
              throw Error(`Invalid key type: ${n}`);
          }
        })(),
        d = {
          address: o,
          expiry: (void 0 !== s && e$(s)) || void 0,
          type: c,
          chainId: "0x" === i ? 0n : a.toBigInt(i),
          ...(void 0 !== s ? { expiry: e$(s) || void 0 } : {}),
          ...(void 0 !== l && Array.isArray(l) && l.length > 0
            ? {
                limits: l.map((e) => {
                  var t;
                  let [r, i, n] = e;
                  return {
                    token: r,
                    limit: "0x" === (t = i) ? 0n : BigInt(t),
                    ...(void 0 !== n ? { period: e$(n) } : {}),
                  };
                }),
              }
            : {}),
          ...(void 0 !== u && Array.isArray(u)
            ? {
                scopes: u.flatMap((e) => {
                  let [t, r] = e;
                  return Array.isArray(r) && 0 !== r.length
                    ? r.map((e) => {
                        let [r, i] = e;
                        return {
                          address: t,
                          selector: r,
                          ...(Array.isArray(i) && i.length > 0
                            ? { recipients: i }
                            : {}),
                        };
                      })
                    : [{ address: t }];
                }),
              }
            : {}),
        };
      return r && (d.signature = en(r)), eB(d);
    }
    function eM(e) {
      return ez(e);
    }
    function eF(e) {
      return ej(eU.toHex(e));
    }
    function ez(e) {
      let [t] = eG(e),
        r = eU.fromHex(t);
      return N.keccak256(r);
    }
    function eK(e) {
      let t = eG(e);
      return eU.fromHex(t);
    }
    function eV(e) {
      let {
          address: t,
          scopes: r,
          chainId: i,
          expiry: n,
          limits: o,
          type: s,
          signature: l,
        } = e,
        u = (() => {
          if (!r) return;
          let e = new Map();
          for (let t of r) {
            let r = t.address;
            e.has(r) || e.set(r, []),
              t.selector &&
                e
                  .get(r)
                  .push({
                    selector: eY(t.selector),
                    ...(t.recipients && t.recipients.length > 0
                      ? { recipients: t.recipients }
                      : {}),
                  });
          }
          return [...e.entries()].map(([e, t]) => ({
            target: e,
            ...(t.length > 0 ? { selectorRules: t } : {}),
          }));
        })();
      return {
        chainId: 0n === i ? "0x" : a.fromNumber(i),
        expiry: "number" == typeof n ? a.fromNumber(n) : null,
        keyId: eL(t),
        keyType: s,
        limits: o?.map(({ token: e, limit: t, period: r }) => ({
          token: e,
          limit: a.fromNumber(t),
          ...(r ? { period: eH(r) } : {}),
        })),
        signature: eu(l),
        ...(u ? { allowedCalls: u } : {}),
      };
    }
    function eG(e) {
      let { address: t, chainId: r, scopes: i, expiry: n, limits: a } = e,
        o = e.signature ? el(e.signature) : void 0,
        s = (() => {
          switch (e.type) {
            case "secp256k1":
              return "0x";
            case "p256":
              return "0x01";
            case "webAuthn":
              return "0x02";
            default:
              throw Error(`Invalid key type: ${e.type}`);
          }
        })(),
        l = a?.map((e) => {
          let t = [e.token, eq(e.limit)];
          return e.period && e.period > 0 && t.push(eH(e.period)), t;
        }),
        u = (() => {
          if (!i) return;
          let e = new Map();
          for (let t of i) {
            let r = t.address;
            e.has(r) || e.set(r, []),
              t.selector && e.get(r).push([eY(t.selector), t.recipients ?? []]);
          }
          return [...e.entries()].map(([e, t]) => [
            e,
            t.map(([e, t]) => [e, t]),
          ]);
        })();
      return [
        [
          eq(r),
          s,
          t,
          (null != n && 0 !== n) || l || u ? eH(n ?? 0) : void 0,
          l || u ? l ?? [] : void 0,
          u,
        ].filter((e) => void 0 !== e),
        ...(o ? [o] : []),
      ];
    }
    function eq(e) {
      return 0n === e ? "0x" : a.fromNumber(e);
    }
    function eH(e) {
      return 0 === e ? "0x" : a.fromNumber(e);
    }
    function e$(e) {
      return "0x" === e ? 0 : a.toNumber(e);
    }
    function eY(e) {
      if (e) return e.startsWith("0x") ? e : eO.getSelector(e);
    }
    e.s(
      [
        "deserialize",
        () => eF,
        "from",
        () => eB,
        "fromRpc",
        () => eD,
        "fromTuple",
        () => ej,
        "getSignPayload",
        () => eM,
        "hash",
        () => ez,
        "serialize",
        () => eK,
        "toRpc",
        () => eV,
        "toTuple",
        () => eG,
      ],
      767793
    );
    var eJ = e.i(767793),
      eJ = eJ,
      eh = eh;
    async function eX(e, t) {
      var r;
      let { chainId: i, key: a, expiry: s, limits: l, scopes: u } = t,
        { accessKeyAddress: c, keyType: d } =
          "accessKeyAddress" in (r = a)
            ? { accessKeyAddress: r.accessKeyAddress, keyType: r.keyType }
            : "publicKey" in r && r.publicKey
            ? {
                accessKeyAddress: n.fromPublicKey(o.fromHex(r.publicKey)),
                keyType: r.type,
              }
            : { accessKeyAddress: r.address, keyType: r.type },
        f = await e.sign({
          hash: eJ.getSignPayload({
            address: c,
            chainId: i,
            expiry: s,
            limits: l,
            scopes: u,
            type: d,
          }),
        });
      return eJ.from({
        address: c,
        chainId: i,
        expiry: s,
        limits: l,
        scopes: u,
        signature: eh.from(f),
        type: d,
      });
    }
    let eZ = "0xaAAAaaAA00000000000000000000000000000000",
      eQ = ["genesis", "t0", "t1", "t1a", "t1b", "t1c", "t2", "t3"];
    var e0 = e.i(734451);
    function e1(e) {
      return { ...e, data: (0, e0.encodeFunctionData)(e), to: e.address };
    }
    let e2 = { 0: "secp256k1", 1: "p256", 2: "webAuthn" },
      e3 = { true: "limited", false: "unlimited" };
    async function e6(e, t) {
      return e6.inner(eP.sendTransaction, e, t);
    }
    async function e5(e, t) {
      return e5.inner(eI.writeContract, e, t);
    }
    ((r = e6 || (e6 = {})).inner = async function (e, t, r) {
      let {
          accessKey: i,
          chainId: n = t.chain?.id,
          expiry: a,
          limits: o,
          scopes: s,
          ...l
        } = r,
        u = l.account ?? t.account;
      if (!u) throw Error("account is required.");
      if (!n) throw Error("chainId is required.");
      let c = (0, ek.parseAccount)(u),
        d = await eX(c, {
          chainId: BigInt(n),
          key: i,
          expiry: a,
          limits: o,
          scopes: s,
        });
      return await e(t, { ...l, keyAuthorization: d });
    }),
      (r.extractEvent = function (e) {
        let [t] = (0, eC.parseEventLogs)({
          abi: eN,
          logs: e,
          eventName: "KeyAuthorized",
          strict: !0,
        });
        if (!t) throw Error("`KeyAuthorized` event not found.");
        return t;
      });
    var e4 = e5 || (e5 = {});
    async function e8(e, t, r) {
      let { accessKey: i, ...n } = r,
        a = e4.call({ accessKey: i });
      return await e(t, { ...n, ...a });
    }
    async function e7(e, t) {
      return e7.inner(eI.writeContract, e, t);
    }
    (e4.inner = e8),
      (e4.call = function (e) {
        let { accessKey: t } = e;
        return e1({
          address: eZ,
          abi: eN,
          functionName: "revokeKey",
          args: [ti(t)],
        });
      }),
      (e4.extractEvent = function (e) {
        let [t] = (0, eC.parseEventLogs)({
          abi: eN,
          logs: e,
          eventName: "KeyRevoked",
          strict: !0,
        });
        if (!t) throw Error("`KeyRevoked` event not found.");
        return t;
      });
    var e9 = e7 || (e7 = {});
    async function te(e, t, r) {
      let { accessKey: i, token: n, limit: a, ...o } = r,
        s = e9.call({ accessKey: i, token: n, limit: a });
      return await e(t, { ...o, ...s });
    }
    async function tt(e, t) {
      let { account: r = e.account, accessKey: i, ...n } = t;
      if (!r) throw Error("account is required.");
      let a = (0, ek.parseAccount)(r),
        o = await (0, eS.readContract)(e, {
          ...n,
          ...tt.call({ account: a.address, accessKey: i }),
        });
      return {
        address: o.keyId,
        keyType: e2[o.signatureType] ?? "secp256k1",
        expiry: o.expiry,
        spendPolicy: e3[`${o.enforceLimits}`],
        isRevoked: o.isRevoked,
      };
    }
    async function tr(e, t) {
      let { account: r = e.account, accessKey: i, token: n, ...a } = t;
      if (!r) throw Error("account is required.");
      let o = (0, ek.parseAccount)(r),
        s = e.chain?.hardfork;
      if (s && eQ.indexOf(s) < eQ.indexOf("t3"))
        return {
          remaining: await (0, eS.readContract)(e, {
            ...a,
            ...tr.call({ account: o.address, accessKey: i, token: n }),
          }),
          periodEnd: void 0,
        };
      let [l, u] = await (0, eS.readContract)(e, {
        ...a,
        ...tr.callWithPeriod({ account: o.address, accessKey: i, token: n }),
      });
      return { remaining: l, periodEnd: u };
    }
    function ti(e) {
      return "string" == typeof e ? e : e.accessKeyAddress;
    }
    (e9.inner = te),
      (e9.call = function (e) {
        let { accessKey: t, token: r, limit: i } = e;
        return e1({
          address: eZ,
          abi: eN,
          functionName: "updateSpendingLimit",
          args: [ti(t), r, i],
        });
      }),
      (e9.extractEvent = function (e) {
        let [t] = (0, eC.parseEventLogs)({
          abi: eN,
          logs: e,
          eventName: "SpendingLimitUpdated",
          strict: !0,
        });
        if (!t) throw Error("`SpendingLimitUpdated` event not found.");
        return t;
      }),
      ((tt || (tt = {})).call = function (e) {
        let { account: t, accessKey: r } = e;
        return e1({
          address: eZ,
          abi: eN,
          functionName: "getKey",
          args: [t, ti(r)],
        });
      }),
      ((i = tr || (tr = {})).call = function (e) {
        let { account: t, accessKey: r, token: i } = e;
        return e1({
          address: eZ,
          abi: eN,
          functionName: "getRemainingLimit",
          args: [t, ti(r), i],
        });
      }),
      (i.callWithPeriod = function (e) {
        let { account: t, accessKey: r, token: i } = e;
        return e1({
          address: eZ,
          abi: eN,
          functionName: "getRemainingLimitWithPeriod",
          args: [t, ti(r), i],
        });
      });
    var tn = e.i(555587);
    let ta = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      },
      to = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
    function ts(e) {
      let { address: t, chainId: r, nonce: i } = e,
        n = eo(e.signature);
      return { address: t, chainId: Number(r), nonce: BigInt(i), signature: n };
    }
    function tl(e) {
      return e.map((e) => ts(e));
    }
    function tu(e) {
      return e.map((e) =>
        (function (e) {
          let { address: t, chainId: r, nonce: i, signature: n } = e;
          return {
            address: t,
            chainId: a.fromNumber(r),
            nonce: a.fromNumber(i),
            signature: eu(n),
          };
        })(e)
      );
    }
    let tc = { ...ta, tempo: "0x76" },
      td = { ...to, "0x76": "tempo" };
    function tf(e, t = {}) {
      if (!e) return null;
      let r = (function (e, t = {}) {
        if (!e) return null;
        let r = P.extract(e),
          i = { ...e, ...r };
        return (
          (i.blockNumber = e.blockNumber ? BigInt(e.blockNumber) : null),
          (i.data = e.input),
          (i.gas = BigInt(e.gas ?? 0n)),
          (i.nonce = BigInt(e.nonce ?? 0n)),
          (i.transactionIndex = e.transactionIndex
            ? Number(e.transactionIndex)
            : null),
          (i.value = BigInt(e.value ?? 0n)),
          e.authorizationList &&
            (i.authorizationList = tn.fromRpcList(e.authorizationList)),
          e.chainId && (i.chainId = Number(e.chainId)),
          e.gasPrice && (i.gasPrice = BigInt(e.gasPrice)),
          e.maxFeePerBlobGas &&
            (i.maxFeePerBlobGas = BigInt(e.maxFeePerBlobGas)),
          e.maxFeePerGas && (i.maxFeePerGas = BigInt(e.maxFeePerGas)),
          e.maxPriorityFeePerGas &&
            (i.maxPriorityFeePerGas = BigInt(e.maxPriorityFeePerGas)),
          e.type && (i.type = to[e.type] ?? e.type),
          r && (i.v = P.yParityToV(r.yParity)),
          i
        );
      })(e);
      return (
        (r.type = td[e.type]),
        e.aaAuthorizationList &&
          ((r.authorizationList = tl(e.aaAuthorizationList)),
          delete r.aaAuthorizationList),
        e.calls &&
          (r.calls = e.calls.map((e) => ({
            to: e.to,
            value: e.value && "0x" !== e.value ? BigInt(e.value) : void 0,
            data: e.input || e.data || "0x",
          }))),
        e.feeToken && (r.feeToken = e.feeToken),
        e.nonceKey && (r.nonceKey = BigInt(e.nonceKey)),
        e.signature && (r.signature = eo(e.signature)),
        e.validAfter && (r.validAfter = Number(e.validAfter)),
        e.validBefore && (r.validBefore = Number(e.validBefore)),
        e.keyAuthorization && (r.keyAuthorization = eD(e.keyAuthorization)),
        e.feePayerSignature &&
          ((r.feePayerSignature = P.fromRpc(e.feePayerSignature)),
          (r.feePayerSignature.v = P.yParityToV(r.feePayerSignature.yParity))),
        r
      );
    }
    function tp(e, t) {
      let r,
        i =
          (((r = {}).blockHash = e.blockHash),
          (r.blockNumber =
            "bigint" == typeof e.blockNumber
              ? a.fromNumber(e.blockNumber)
              : null),
          (r.from = e.from),
          (r.gas = a.fromNumber(e.gas ?? 0n)),
          (r.hash = e.hash),
          (r.input = e.input),
          (r.nonce = a.fromNumber(e.nonce ?? 0n)),
          (r.to = e.to),
          (r.transactionIndex = e.transactionIndex
            ? a.fromNumber(e.transactionIndex)
            : null),
          (r.type = ta[e.type] ?? e.type),
          (r.value = a.fromNumber(e.value ?? 0n)),
          e.accessList && (r.accessList = e.accessList),
          e.authorizationList &&
            (r.authorizationList = tn.toRpcList(e.authorizationList)),
          e.blobVersionedHashes &&
            (r.blobVersionedHashes = e.blobVersionedHashes),
          e.chainId && (r.chainId = a.fromNumber(e.chainId)),
          "bigint" == typeof e.gasPrice &&
            (r.gasPrice = a.fromNumber(e.gasPrice)),
          "bigint" == typeof e.maxFeePerBlobGas &&
            (r.maxFeePerBlobGas = a.fromNumber(e.maxFeePerBlobGas)),
          "bigint" == typeof e.maxFeePerGas &&
            (r.maxFeePerGas = a.fromNumber(e.maxFeePerGas)),
          "bigint" == typeof e.maxPriorityFeePerGas &&
            (r.maxPriorityFeePerGas = a.fromNumber(e.maxPriorityFeePerGas)),
          "bigint" == typeof e.r && (r.r = a.fromNumber(e.r, { size: 32 })),
          "bigint" == typeof e.s && (r.s = a.fromNumber(e.s, { size: 32 })),
          "number" == typeof e.v && (r.v = a.fromNumber(e.v, { size: 1 })),
          "number" == typeof e.yParity &&
            (r.yParity = 0 === e.yParity ? "0x0" : "0x1"),
          r);
      return (
        (i.type = tc[e.type]),
        e.authorizationList &&
          (i.aaAuthorizationList = tu(e.authorizationList)),
        e.calls &&
          (i.calls = e.calls.map((e) => ({
            to: e.to,
            value: e.value ? a.fromNumber(e.value) : void 0,
            data: e.data,
          }))),
        e.feeToken && (i.feeToken = e.feeToken),
        e.keyAuthorization && (i.keyAuthorization = eV(e.keyAuthorization)),
        e.feePayerSignature &&
          ((i.feePayerSignature = P.toRpc(e.feePayerSignature)),
          (i.feePayerSignature.v = a.fromNumber(
            P.yParityToV(e.feePayerSignature?.yParity)
          ))),
        e.signature && (i.signature = eu(e.signature)),
        "number" == typeof e.validAfter &&
          (i.validAfter = a.fromNumber(e.validAfter)),
        "number" == typeof e.validBefore &&
          (i.validBefore = a.fromNumber(e.validBefore)),
        i
      );
    }
    e.s(
      [
        "fromRpc",
        () => tf,
        "fromRpcType",
        0,
        td,
        "toRpc",
        () => tp,
        "toRpcType",
        0,
        tc,
      ],
      874812
    );
    var tm = e.i(874812),
      tm = tm;
    function ty(e) {
      if ("string" == typeof e) {
        let t = eL(e);
        return n.assert(t), t;
      }
      let t = a.fromNumber(e, { size: 18 });
      return a.concat("0x20c0", t);
    }
    function th(e) {
      let { authorizationList: t, ...r } = e,
        i =
          (void 0 !== r.authorizationList &&
            (r.authorizationList = tn.fromRpcList(r.authorizationList)),
          void 0 !== r.chainId && (r.chainId = a.toNumber(r.chainId)),
          void 0 !== r.gas && (r.gas = a.toBigInt(r.gas)),
          void 0 !== r.gasPrice && (r.gasPrice = a.toBigInt(r.gasPrice)),
          void 0 !== r.maxFeePerBlobGas &&
            (r.maxFeePerBlobGas = a.toBigInt(r.maxFeePerBlobGas)),
          void 0 !== r.maxFeePerGas &&
            (r.maxFeePerGas = a.toBigInt(r.maxFeePerGas)),
          void 0 !== r.maxPriorityFeePerGas &&
            (r.maxPriorityFeePerGas = a.toBigInt(r.maxPriorityFeePerGas)),
          void 0 !== r.nonce && (r.nonce = a.toBigInt(r.nonce)),
          void 0 !== r.type && (r.type = to[r.type] || r.type),
          void 0 !== r.value && (r.value = a.toBigInt(r.value)),
          r);
      return (
        void 0 !== e.type && (i.type = td[e.type] || i.type),
        e.authorizationList && (i.authorizationList = tl(e.authorizationList)),
        e.calls &&
          (i.calls = e.calls.map((e) => {
            let t = { to: e.to, data: e.data };
            return (
              e.value && "0x" !== e.value && (t.value = a.toBigInt(e.value)), t
            );
          })),
        void 0 !== e.feeToken && (i.feeToken = e.feeToken),
        e.keyAuthorization && (i.keyAuthorization = eD(e.keyAuthorization)),
        void 0 !== e.validBefore && (i.validBefore = a.toNumber(e.validBefore)),
        void 0 !== e.validAfter && (i.validAfter = a.toNumber(e.validAfter)),
        void 0 !== e.nonceKey && (i.nonceKey = a.toBigInt(e.nonceKey)),
        i
      );
    }
    function tb(e) {
      var t;
      let r,
        i =
          ((t = { ...e, authorizationList: void 0 }),
          (r = {}),
          void 0 !== t.accessList && (r.accessList = t.accessList),
          void 0 !== t.authorizationList &&
            (r.authorizationList = tn.toRpcList(t.authorizationList)),
          void 0 !== t.blobVersionedHashes &&
            (r.blobVersionedHashes = t.blobVersionedHashes),
          void 0 !== t.blobs && (r.blobs = t.blobs),
          void 0 !== t.chainId && (r.chainId = a.fromNumber(t.chainId)),
          void 0 !== t.data
            ? ((r.data = t.data), (r.input = t.data))
            : void 0 !== t.input && ((r.data = t.input), (r.input = t.input)),
          void 0 !== t.from && (r.from = t.from),
          void 0 !== t.gas && (r.gas = a.fromNumber(t.gas)),
          void 0 !== t.gasPrice && (r.gasPrice = a.fromNumber(t.gasPrice)),
          void 0 !== t.maxFeePerBlobGas &&
            (r.maxFeePerBlobGas = a.fromNumber(t.maxFeePerBlobGas)),
          void 0 !== t.maxFeePerGas &&
            (r.maxFeePerGas = a.fromNumber(t.maxFeePerGas)),
          void 0 !== t.maxPriorityFeePerGas &&
            (r.maxPriorityFeePerGas = a.fromNumber(t.maxPriorityFeePerGas)),
          void 0 !== t.maxPriorityFeePerGas &&
            (r.maxPriorityFeePerGas = a.fromNumber(t.maxPriorityFeePerGas)),
          void 0 !== t.nonce && (r.nonce = a.fromNumber(t.nonce)),
          void 0 !== t.to && (r.to = t.to),
          void 0 !== t.type && (r.type = ta[t.type] || t.type),
          void 0 !== t.value && (r.value = a.fromNumber(t.value)),
          r);
      e.authorizationList && (i.authorizationList = tu(e.authorizationList)),
        e.calls
          ? (i.calls = e.calls.map((e) => ({
              to: e.to ? eL(e.to) : e.to,
              value: e.value ? a.fromNumber(e.value) : "0x",
              data: e.data ?? "0x",
            })))
          : (e.to || e.data || e.value) &&
            (i.calls = [
              {
                to: e.to ? eL(e.to) : void 0,
                value: e.value ? a.fromNumber(e.value) : "0x",
                data: e.data ?? "0x",
              },
            ]),
        void 0 !== e.feeToken && (i.feeToken = ty(e.feeToken)),
        e.keyAuthorization && (i.keyAuthorization = eV(e.keyAuthorization)),
        void 0 !== e.validBefore &&
          (i.validBefore = a.fromNumber(e.validBefore)),
        void 0 !== e.validAfter && (i.validAfter = a.fromNumber(e.validAfter));
      let n =
        "random" === e.nonceKey
          ? a.random(6)
          : "bigint" == typeof e.nonceKey
          ? a.fromNumber(e.nonceKey)
          : void 0;
      return (
        n && (i.nonceKey = n),
        (void 0 !== e.calls ||
          void 0 !== e.feePayer ||
          void 0 !== e.feeToken ||
          void 0 !== e.keyAuthorization ||
          void 0 !== e.nonceKey ||
          void 0 !== e.validBefore ||
          void 0 !== e.validAfter ||
          "tempo" === e.type) &&
          ((i.type = tc.tempo),
          delete i.data,
          delete i.input,
          delete i.to,
          delete i.value),
        i
      );
    }
    e.s(["fromRpc", () => th, "toRpc", () => tb], 54794);
    var tg = e.i(54794),
      tg = tg,
      eh = eh,
      tw = s;
    class tv extends tw.BaseError {
      constructor({ storageKey: e }) {
        super(
          `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${a.size(
            e
          )} bytes.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccessList.InvalidStorageKeySizeError",
          });
      }
    }
    var t_ = s,
      tA = s;
    let tE = { wei: 0, gwei: 9, szabo: 12, finney: 15, ether: 18 };
    function tx(e, t = "wei") {
      return (function (e, t = 0) {
        let r = e.toString(),
          i = r.startsWith("-");
        i && (r = r.slice(1));
        let [n, a] = [
          (r = r.padStart(t, "0")).slice(0, r.length - t),
          r.slice(r.length - t),
        ];
        return (
          (a = a.replace(/(0+)$/, "")),
          `${i ? "-" : ""}${n || "0"}${a ? `.${a}` : ""}`
        );
      })(e, tE.gwei - tE[t]);
    }
    s.BaseError;
    class tT extends tA.BaseError {
      constructor({ feeCap: e } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`/\`maxPriorityFeePerGas\`${
            e ? ` = ${tx(e)} gwei` : ""
          }) cannot be higher than the maximum allowed value (2^256-1).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionEnvelope.FeeCapTooHighError",
          });
      }
    }
    tA.BaseError;
    class tk extends tA.BaseError {
      constructor({ chainId: e }) {
        super(
          void 0 !== e ? `Chain ID "${e}" is invalid.` : "Chain ID is invalid."
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionEnvelope.InvalidChainIdError",
          });
      }
    }
    class tS extends tA.BaseError {
      constructor({ attributes: e, serialized: t, type: r }) {
        const i = Object.entries(e)
          .map(([e, t]) => (void 0 === t ? e : void 0))
          .filter(Boolean);
        super(`Invalid serialized transaction of type "${r}" was provided.`, {
          metaMessages: [
            `Serialized Transaction: "${t}"`,
            i.length > 0 ? `Missing Attributes: ${i.join(", ")}` : "",
          ].filter(Boolean),
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionEnvelope.InvalidSerializedError",
          });
      }
    }
    class tP extends tA.BaseError {
      constructor({ maxPriorityFeePerGas: e, maxFeePerGas: t } = {}) {
        super(
          `The provided tip (\`maxPriorityFeePerGas\`${
            e ? ` = ${tx(e)} gwei` : ""
          }) cannot be higher than the fee cap (\`maxFeePerGas\`${
            t ? ` = ${tx(t)} gwei` : ""
          }).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionEnvelope.TipAboveFeeCapError",
          });
      }
    }
    let tI = "0x78",
      tC = "0x76",
      tN = "tempo";
    function tO(e) {
      let {
        calls: t,
        chainId: r,
        maxFeePerGas: i,
        maxPriorityFeePerGas: a,
        validBefore: o,
        validAfter: s,
      } = e;
      if (!t || 0 === t.length) throw new tM();
      if ("number" == typeof o && "number" == typeof s && o <= s)
        throw new tF({ validBefore: o, validAfter: s });
      if (t) for (let e of t) e.to && n.assert(e.to, { strict: !1 });
      if (r <= 0) throw new tk({ chainId: r });
      if (i && BigInt(i) > 2n ** 256n - 1n) throw new tT({ feeCap: i });
      if (a && i && a > i)
        throw new tP({ maxFeePerGas: i, maxPriorityFeePerGas: a });
    }
    function tU(e) {
      let t = eU.toHex(a.slice(e, 1)),
        [r, i, o, s, l, u, c, d, f, p, m, y, h, b, g] = t,
        w = Array.isArray(b) ? b : void 0,
        v = w ? g : b;
      if (13 !== t.length && 14 !== t.length && 15 !== t.length)
        throw new tS({
          attributes: {
            authorizationList: h,
            chainId: r,
            maxPriorityFeePerGas: i,
            maxFeePerGas: o,
            gas: s,
            calls: l,
            accessList: u,
            keyAuthorization: w,
            nonceKey: c,
            nonce: d,
            validBefore: f,
            validAfter: p,
            feeToken: m,
            feePayerSignatureOrSender: y,
            ...(t.length > 12 ? { signature: v } : {}),
          },
          serialized: e,
          type: tN,
        });
      let _ = { chainId: Number(r), type: tN };
      a.validate(s) && "0x" !== s && (_.gas = BigInt(s)),
        a.validate(d) && (_.nonce = "0x" === d ? 0n : BigInt(d)),
        a.validate(o) && "0x" !== o && (_.maxFeePerGas = BigInt(o)),
        a.validate(i) && "0x" !== i && (_.maxPriorityFeePerGas = BigInt(i)),
        a.validate(c) && (_.nonceKey = "0x" === c ? 0n : BigInt(c)),
        a.validate(f) && "0x" !== f && (_.validBefore = Number(f)),
        a.validate(p) && "0x" !== p && (_.validAfter = Number(p)),
        a.validate(m) && "0x" !== m && (_.feeToken = m),
        l &&
          "0x" !== l &&
          (_.calls = l.map((e) => {
            let [t, r, i] = e,
              n = {};
            return (
              t && "0x" !== t && (n.to = t),
              r && "0x" !== r && (n.value = BigInt(r)),
              i && "0x" !== i && (n.data = i),
              n
            );
          })),
        u?.length !== 0 &&
          "0x" !== u &&
          (_.accessList = (function (e) {
            let t = [];
            for (let r = 0; r < e.length; r++) {
              let [i, o] = e[r];
              i && n.assert(i, { strict: !1 }),
                t.push({
                  address: i,
                  storageKeys: o.map((e) =>
                    N.validate(e) ? e : a.trimLeft(e)
                  ),
                });
            }
            return t;
          })(u)),
        h?.length !== 0 &&
          "0x" !== h &&
          (_.authorizationList = (function (e) {
            let t = [];
            for (let r of e)
              t.push(
                (function (e) {
                  let [t, r, i, n] = e,
                    a = {
                      address: r,
                      chainId: "0x" === t ? 0 : Number(t),
                      nonce: "0x" === i ? 0n : BigInt(i),
                    };
                  return (
                    n && (a.signature = en(n)),
                    (function (e, t = {}) {
                      if ("string" == typeof e.chainId) return ts(e);
                      let r = { ...e, address: eL(e.address) };
                      return t.signature ? { ...r, signature: t.signature } : r;
                    })(a)
                  );
                })(r)
              );
            return t;
          })(h)),
        "0x" !== y &&
          void 0 !== y &&
          ("0x00" === y || n.validate(y)
            ? ((_.feePayerSignature = null), n.validate(y) && (_.from = y))
            : (_.feePayerSignature = P.fromTuple(y))),
        w && (_.keyAuthorization = ej(w));
      let A = v ? en(v) : void 0;
      if ((A && (_ = { ..._, signature: A }), !_.from && A))
        try {
          _.from = er({ payload: tW(tR(_)), signature: A, root: !0 });
        } catch {}
      return tO(_), _;
    }
    function tR(e, t = {}) {
      let { feePayerSignature: r, signature: i } = t,
        n = "string" == typeof e ? tU(e) : e;
      return (
        n.from && (n.from = eL(n.from)),
        n.calls &&
          (n.calls = n.calls.map((e) => ({
            ...e,
            ...(e.to ? { to: eL(e.to) } : {}),
          }))),
        tO(n),
        {
          ...n,
          ...(i ? { signature: ea(i) } : {}),
          ...(r ? { feePayerSignature: P.from(r) } : {}),
          type: "tempo",
        }
      );
    }
    function tL(e, t = {}) {
      let {
        accessList: r,
        authorizationList: i,
        calls: o,
        chainId: s,
        feeToken: l,
        gas: u,
        keyAuthorization: c,
        nonce: d,
        nonceKey: f,
        maxFeePerGas: p,
        maxPriorityFeePerGas: m,
        validBefore: y,
        validAfter: h,
      } = e;
      tO(e);
      let b = (function (e) {
          if (!e || 0 === e.length) return [];
          let t = [];
          for (let { address: r, storageKeys: i } of e) {
            for (let e = 0; e < i.length; e++)
              if (32 !== a.size(i[e])) throw new tv({ storageKey: i[e] });
            r && n.assert(r, { strict: !1 }), t.push([r, i]);
          }
          return t;
        })(r),
        g = t.signature || e.signature,
        w = (function (e) {
          if (!e || 0 === e.length) return [];
          let t = [];
          for (let r of e)
            t.push(
              (function (e) {
                let { address: t, chainId: r, nonce: i } = e,
                  n = e.signature ? el(e.signature) : void 0;
                return [
                  r ? a.fromNumber(r) : "0x",
                  t,
                  i ? a.fromNumber(i) : "0x",
                  ...(n ? [n] : []),
                ];
              })(r)
            );
          return t;
        })(i),
        v = o.map((e) => [
          e.to ? eL(e.to) : "0x",
          e.value ? a.fromNumber(e.value) : "0x",
          e.data ?? "0x",
        ]),
        _ = !1,
        A = (() => {
          if (t.sender) return t.sender;
          if ("feePayer" === t.format && g) {
            let t = ea(g);
            if ("keychain" === t.type) return t.userAddress;
            if ("p256" === t.type || "webAuthn" === t.type)
              return n.fromPublicKey(t.publicKey);
            if ("secp256k1" === t.type)
              return S.recoverAddress({
                payload: tW(tR(e)),
                signature: t.signature,
              });
          }
          let r =
            void 0 !== t.feePayerSignature
              ? t.feePayerSignature
              : e.feePayerSignature;
          return null === r ? ((_ = !0), "0x00") : r ? P.toTuple(r) : "0x";
        })(),
        E = [
          a.fromNumber(s),
          m ? a.fromNumber(m) : "0x",
          p ? a.fromNumber(p) : "0x",
          u ? a.fromNumber(u) : "0x",
          v,
          b,
          f ? a.fromNumber(f) : "0x",
          d ? a.fromNumber(d) : "0x",
          "number" == typeof y ? a.fromNumber(y) : "0x",
          "number" == typeof h ? a.fromNumber(h) : "0x",
          _ || ("bigint" != typeof l && "string" != typeof l) ? "0x" : ty(l),
          A,
          w,
          ...(c ? [eG(c)] : []),
          ...(g ? [el(ea(g))] : []),
        ];
      return a.concat("feePayer" === t.format ? tI : tC, eU.fromHex(E));
    }
    function tW(e, t = {}) {
      let r = tB(e, { presign: !0 });
      return t.from ? N.keccak256(a.concat("0x04", r, eL(t.from))) : r;
    }
    function tB(e, t = {}) {
      let r = tL({
        ...e,
        ...(t.presign
          ? {
              signature: void 0,
              ...(void 0 !== e.feePayerSignature
                ? { feePayerSignature: null }
                : {}),
            }
          : {}),
      });
      return N.keccak256(r);
    }
    function tD(e, t) {
      let r = eL(t.sender),
        i = tL({ ...e, signature: void 0 }, { sender: r, format: "feePayer" });
      return N.keccak256(i);
    }
    function tj(e) {
      try {
        return tO(e), !0;
      } catch {
        return !1;
      }
    }
    class tM extends t_.BaseError {
      constructor() {
        super("Calls list cannot be empty."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TxEnvelopeTempo.CallsEmptyError",
          });
      }
    }
    class tF extends t_.BaseError {
      constructor({ validBefore: e, validAfter: t }) {
        super(`validBefore (${e}) must be greater than validAfter (${t}).`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TxEnvelopeTempo.InvalidValidityWindowError",
          });
      }
    }
    e.s(
      [
        "CallsEmptyError",
        () => tM,
        "InvalidValidityWindowError",
        () => tF,
        "assert",
        () => tO,
        "deserialize",
        () => tU,
        "feePayerMagic",
        0,
        tI,
        "from",
        () => tR,
        "getFeePayerSignPayload",
        () => tD,
        "getSignPayload",
        () => tW,
        "hash",
        () => tB,
        "serialize",
        () => tL,
        "serializedType",
        0,
        tC,
        "type",
        0,
        tN,
        "validate",
        () => tj,
      ],
      473241
    );
    var tz = e.i(473241),
      tz = tz,
      tK = e.i(426749),
      tV = e.i(946523);
    function tG(e) {
      let t = e.account;
      return (t?.keyType && "secp256k1" !== t.keyType) ||
        t?.source === "accessKey" ||
        void 0 !== e.calls ||
        void 0 !== e.feePayer ||
        void 0 !== e.feeToken ||
        void 0 !== e.keyAuthorization ||
        void 0 !== e.nonceKey ||
        void 0 !== e.signature ||
        void 0 !== e.validBefore ||
        void 0 !== e.validAfter
        ? "tempo"
        : e.type
        ? e.type
        : (0, tK.getTransactionType)(e);
    }
    function tq(e) {
      try {
        let t = tG(e);
        return "tempo" === t;
      } catch {
        return !1;
      }
    }
    async function tH(e, t) {
      if (!tq(e)) {
        if (t && "type" in t && "secp256k1" !== t.type)
          throw Error(
            "Unsupported signature type. Expected `secp256k1` but got `" +
              t.type +
              "`."
          );
        if (t && "type" in t) {
          let { r, s: i, yParity: n } = t?.signature;
          return (0, tV.serializeTransaction)(e, {
            r: a.fromNumber(r, { size: 32 }),
            s: a.fromNumber(i, { size: 32 }),
            yParity: n,
          });
        }
        return (0, tV.serializeTransaction)(e, t);
      }
      if ("tempo" === tG(e)) return t$(e, t);
      throw Error("Unsupported transaction type");
    }
    async function t$(e, t) {
      let r,
        i = e.signature
          ? e.signature
          : t && "type" in t
          ? t
          : t
          ? eh.from({
              r: BigInt(t.r),
              s: BigInt(t.s),
              yParity: Number(t.yParity),
            })
          : void 0,
        { chainId: n, feePayer: a, nonce: o, ...s } = e,
        l = (r = e.feePayerSignature)
          ? { r: BigInt(r.r), s: BigInt(r.s), yParity: Number(r.yParity) }
          : null === r || a
          ? null
          : void 0,
        u = {
          ...s,
          calls: s.calls?.length
            ? s.calls
            : [
                {
                  to:
                    s.to ||
                    (s.data && "0x" !== s.data
                      ? void 0
                      : "0x0000000000000000000000000000000000000000"),
                  value: s.value,
                  data: s.data,
                },
              ],
          chainId: Number(n),
          feePayerSignature: l,
          type: "tempo",
          ...(o ? { nonce: BigInt(o) } : {}),
        };
      if ((!0 === a && delete u.feeToken, i && "object" == typeof e.feePayer)) {
        let t = tz.from(u, { signature: i }),
          r = (() => {
            if (e.from) return e.from;
            if ("secp256k1" === i.type)
              return S.recoverAddress({
                payload: tz.getSignPayload(t),
                signature: i.signature,
              });
            throw Error(
              "Unable to extract sender from transaction or signature."
            );
          })(),
          n = tz.getFeePayerSignPayload(t, { sender: r }),
          a = await e.feePayer.sign({ hash: n });
        return tz.serialize(t, { feePayerSignature: P.from(a) });
      }
      return !0 === a
        ? i
          ? tz.serialize(u, {
              format: "feePayer",
              sender: e.from,
              signature: i,
            })
          : tz.serialize(u, { feePayerSignature: null })
        : tz.serialize(
            { ...u, ...(a ? { feeToken: void 0 } : {}) },
            { feePayerSignature: void 0, signature: i }
          );
    }
    let tY = new Map();
    async function tJ(e) {
      tY.set(e, (tY.get(e) ?? 0) + 1), await Promise.resolve();
      let t = (tY.get(e) ?? 0) > 1;
      return (
        queueMicrotask(() => {
          let t = tY.get(e) ?? 0;
          t <= 1 ? tY.delete(e) : tY.set(e, t - 1);
        }),
        t
      );
    }
    let tX = {
        blockTime: 1e3,
        extendSchema: (0, ev.extendSchema)(),
        formatters: {
          transaction: (0, e_.defineTransaction)({
            exclude: ["aaAuthorizationList"],
            format: function (e) {
              if (!tq(e)) return (0, e_.formatTransaction)(e);
              let t =
                  null == e.blockTimestamp ? void 0 : BigInt(e.blockTimestamp),
                {
                  feePayerSignature: r,
                  gasPrice: i,
                  nonce: n,
                  ...o
                } = tm.fromRpc(e);
              return {
                ...o,
                accessList: o.accessList,
                ...(void 0 !== t && { blockTimestamp: t }),
                feePayerSignature: r
                  ? {
                      r: a.fromNumber(r.r, { size: 32 }),
                      s: a.fromNumber(r.s, { size: 32 }),
                      v: BigInt(r.v ?? 27),
                      yParity: r.yParity,
                    }
                  : void 0,
                nonce: Number(n),
                typeHex: tm.toRpcType[o.type],
                type: o.type,
              };
            },
          }),
          transactionReceipt: (0, eA.defineTransactionReceipt)({
            format: function (e) {
              return (0, eA.formatTransactionReceipt)(e);
            },
          }),
          transactionRequest: (0, eE.defineTransactionRequest)({
            format: function (e, t) {
              let r,
                i = e.account ? (0, ek.parseAccount)(e.account) : void 0;
              if (!tq(e)) return (0, eE.formatTransactionRequest)(e, t);
              t &&
                (e.calls = e.calls ?? [
                  {
                    to:
                      e.to ||
                      (e.data && "0x" !== e.data
                        ? void 0
                        : "0x0000000000000000000000000000000000000000"),
                    value: e.value,
                    data: e.data,
                  },
                ]),
                !0 === e.feePayer && delete e.feeToken;
              let n = tg.toRpc({ ...e, type: "tempo" });
              "estimateGas" === t &&
                ((n.maxFeePerGas = void 0), (n.maxPriorityFeePerGas = void 0)),
                (n.to = void 0),
                (n.data = void 0),
                (n.value = void 0);
              let [a, o] = (r = i && "keyType" in i ? i.keyType : i?.source)
                  ? "webAuthn" === r
                    ? ["webAuthn", `0x${"ff".repeat(1400)}`]
                    : ["p256", "secp256k1"].includes(r)
                    ? [r, void 0]
                    : [e.keyType, e.keyData]
                  : [e.keyType, e.keyData],
                s = i && "accessKeyAddress" in i ? i.accessKeyAddress : e.keyId;
              return (
                i && (n.from = i.address),
                {
                  ...n,
                  ...(e.capabilities ? { capabilities: e.capabilities } : {}),
                  ...(o ? { keyData: o } : {}),
                  ...(s ? { keyId: s } : {}),
                  ...(a ? { keyType: a } : {}),
                  ...(void 0 !== e.feePayer
                    ? {
                        feePayer:
                          "object" == typeof e.feePayer
                            ? (0, ek.parseAccount)(e.feePayer)
                            : e.feePayer,
                      }
                    : {}),
                  ...("feePayerSignature" in e && void 0 !== e.feePayerSignature
                    ? { feePayerSignature: e.feePayerSignature }
                    : {}),
                }
              );
            },
          }),
        },
        prepareTransactionRequest: [
          async (e, { phase: t }) => (
            "afterFillParameters" === t
              ? e.feePayer &&
                (e.keyAuthorization?.signature.type === "webAuthn"
                  ? (e.gas = (e.gas ?? 0n) + 20000n)
                  : e.account?.source === "accessKey" &&
                    (e.gas = (e.gas ?? 0n) + 10000n))
              : ((await (async () => {
                  if (
                    "expiring" === e.nonceKey ||
                    (e.feePayer && void 0 === e.nonceKey)
                  )
                    return !0;
                  let t = e.account?.address;
                  return !!t && void 0 === e.nonceKey && (await tJ(t));
                })())
                  ? ((e.nonceKey = ew.maxUint256),
                    (e.nonce = 0),
                    void 0 === e.validBefore &&
                      (e.validBefore = Math.floor(Date.now() / 1e3) + 25))
                  : void 0 !== e.nonceKey &&
                    (e.nonce = "number" == typeof e.nonce ? e.nonce : 0),
                !e.feeToken &&
                  e.chain?.feeToken &&
                  (e.feeToken = e.chain.feeToken)),
            e
          ),
          { runAt: ["beforeFillTransaction", "afterFillParameters"] },
        ],
        serializers: { transaction: (e, t) => tH(e, t) },
        async verifyHash(e, t) {
          let { address: r, hash: i, signature: s, mode: l } = t,
            u = (() => {
              if ("string" == typeof s)
                try {
                  return eh.deserialize(s);
                } catch {
                  return;
                }
            })();
          if (u) {
            if (u?.type === "keychain" && "allowAccessKey" === l) {
              let s = n.fromPublicKey(o.from(u.inner.publicKey)),
                l = await tt(e, {
                  account: r,
                  accessKey: s,
                  blockNumber: t.blockNumber,
                  blockTag: t.blockTag,
                });
              if (
                l.isRevoked ||
                l.expiry <= BigInt(Math.floor(Date.now() / 1e3))
              )
                return !1;
              let c =
                "v2" === u.version
                  ? (0, eT.keccak256)(a.concat("0x04", i, r))
                  : i;
              return eh.verify(u.inner, { address: s, payload: c });
            }
            if ("p256" === u.type || "webAuthn" === u.type) {
              let n = await (0, eb.getCode)(e, {
                address: r,
                blockNumber: t.blockNumber,
                blockTag: t.blockTag,
              });
              if (
                !n ||
                "0xef01007702c00000000000000000000000000000000000" === n
              )
                return eh.verify(u, { address: r, payload: i });
            }
          }
          return await (0, ex.getAction)(
            e,
            eg.verifyHash,
            "verifyHash"
          )({ ...t, chain: null });
        },
      },
      tZ = (0, ev.defineChain)({
        ...tX,
        id: 4217,
        blockExplorers: {
          default: { name: "Tempo Explorer", url: "https://explore.tempo.xyz" },
        },
        name: "Tempo Mainnet",
        nativeCurrency: { name: "USD", symbol: "USD", decimals: 6 },
        rpcUrls: {
          default: {
            http: ["https://rpc.tempo.xyz"],
            webSocket: ["wss://rpc.tempo.xyz"],
          },
        },
      });
    e.s(["tempo", 0, tZ], 914618);
    let tQ = (0, ev.defineChain)({
      ...tX,
      id: 42431,
      blockExplorers: {
        default: {
          name: "Tempo Explorer",
          url: "https://explore.testnet.tempo.xyz",
        },
      },
      name: "Tempo Testnet (Moderato)",
      nativeCurrency: { name: "USD", symbol: "USD", decimals: 6 },
      rpcUrls: {
        default: {
          http: ["https://rpc.moderato.tempo.xyz"],
          webSocket: ["wss://rpc.moderato.tempo.xyz"],
        },
      },
      testnet: !0,
    });
    e.s(["tempoModerato", 0, tQ], 388857);
  },
  228700,
  (e) => {
    "use strict";
    var t = e.i(356537),
      r = e.i(738118),
      i = e.i(914618),
      n = e.i(388857),
      a = e.i(590479);
    let o = (e, o, l, u) => {
        let c = Number(e),
          d = o.find((e) => e.id === c);
        if (!d) throw new a.g(`Unsupported chainId ${e}`, 4901);
        let f = s(d, l, u.appId);
        if (c === i.tempo.id || c === n.tempoModerato.id) {
          let e = c === i.tempo.id ? i.tempo : n.tempoModerato;
          return (0, t.createPublicClient)({
            transport: (0, r.http)(f),
            chain: e,
          });
        }
        return (0, t.createPublicClient)({
          transport: (0, r.http)(f),
          chain: d,
        });
      },
      s = (e, t, r) => {
        let i,
          n = e.id,
          o = Number(e.id);
        if (
          e.rpcUrls.privyWalletOverride &&
          e.rpcUrls.privyWalletOverride.http[0]
        )
          i = e.rpcUrls.privyWalletOverride.http[0];
        else if (t.rpcUrls && t.rpcUrls[o]) i = t.rpcUrls[o];
        else if (e.rpcUrls.privy?.http[0]) {
          let t = new URL(e.rpcUrls.privy.http[0]);
          t.searchParams.append("privyAppId", r), (i = t.toString());
        } else
          i = e.rpcUrls.public?.http[0]
            ? e.rpcUrls.public.http[0]
            : e.rpcUrls.default?.http[0];
        if (!i) throw new a.g(`No RPC url found for ${n}`);
        return i;
      };
    e.s(["a", () => s, "g", () => o]);
  },
  465672,
  (e) => {
    "use strict";
    var t;
    let r = [
      "error",
      "invalid_request_arguments",
      "wallet_not_on_device",
      "invalid_recovery_pin",
      "insufficient_funds",
      "mfa_timeout",
      "missing_or_invalid_mfa",
      "mfa_verification_max_attempts_reached",
    ];
    ((t = {}).MISSING_OR_INVALID_PRIVY_APP_ID =
      "missing_or_invalid_privy_app_id"),
      (t.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID =
        "missing_or_invalid_privy_account_id"),
      (t.INVALID_DATA = "invalid_data"),
      (t.LINKED_TO_ANOTHER_USER = "linked_to_another_user"),
      (t.ALLOWLIST_REJECTED = "allowlist_rejected"),
      (t.OAUTH_USER_DENIED = "oauth_user_denied"),
      (t.UNKNOWN_AUTH_ERROR = "unknown_auth_error"),
      (t.USER_EXITED_AUTH_FLOW = "exited_auth_flow"),
      (t.MUST_BE_AUTHENTICATED = "must_be_authenticated"),
      (t.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error"),
      (t.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error"),
      (t.CLIENT_REQUEST_TIMEOUT = "client_request_timeout"),
      (t.INVALID_CREDENTIALS = "invalid_credentials");
    class i extends Error {
      toString() {
        return `${this.type}${
          this.privyErrorCode ? `-${this.privyErrorCode}` : ""
        }: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
      }
      constructor(e, t, r) {
        super(e),
          t instanceof Error && (this.cause = t),
          (this.privyErrorCode = r);
      }
    }
    class n extends Error {
      constructor(e, t) {
        super(t), (this.type = e);
      }
    }
    class a extends i {
      constructor(e, t, r) {
        super(e, t, r), (this.type = "connector_error");
      }
    }
    class o extends Error {
      constructor(e, t, r) {
        super(e), (this.code = t), (this.data = r);
      }
    }
    let s = {
      UNKNOWN_ERROR: {
        eipCode: 0,
        message: "Unknown error",
        detail: "Unknown error",
        retryable: !0,
      },
      E4001_DEFAULT_USER_REJECTED_REQUEST: {
        eipCode: 4001,
        message: "User Rejected Request",
        detail: "The user rejected the request.",
        default: !0,
        retryable: !0,
      },
      E4100_DEFAULT_UNAUTHORIZED: {
        eipCode: 4100,
        message: "Unauthorized",
        detail:
          "The requested method and/or account has not been authorized by the user.",
        default: !0,
        retryable: !1,
      },
      E4200_DEFAULT_UNSUPPORTED_METHOD: {
        eipCode: 4200,
        message: "Unsupported Method",
        detail: "The Provider does not support the requested method.",
        default: !0,
        retryable: !1,
      },
      E4900_DEFAULT_DISCONNECTED: {
        eipCode: 4900,
        message: "Disconnected",
        detail: "The Provider is disconnected from all chains.",
        default: !0,
        retryable: !0,
      },
      E4901_DEFAULT_CHAIN_DISCONNECTED: {
        eipCode: 4901,
        message: "Chain Disconnected",
        detail: "The Provider is not connected to the requested chain.",
        default: !0,
        retryable: !0,
      },
      E32700_DEFAULT_PARSE_ERROR: {
        eipCode: -32700,
        message: "Parse error",
        detail: "Invalid JSON",
        default: !0,
        retryable: !1,
      },
      E32600_DEFAULT_INVALID_REQUEST: {
        eipCode: -32600,
        message: "Invalid request",
        detail: "JSON is not a valid request object",
        default: !0,
        retryable: !1,
      },
      E32601_DEFAULT_METHOD_NOT_FOUND: {
        eipCode: -32601,
        message: "Method not found",
        detail: "Method does not exist",
        default: !0,
        retryable: !1,
      },
      E32602_DEFAULT_INVALID_PARAMS: {
        eipCode: -32602,
        message: "Invalid params",
        detail: "Invalid method parameters",
        default: !0,
        retryable: !1,
      },
      E32603_DEFAULT_INTERNAL_ERROR: {
        eipCode: -32603,
        message: "Internal error",
        detail: "Internal JSON-RPC error",
        default: !0,
        retryable: !0,
      },
      E32000_DEFAULT_INVALID_INPUT: {
        eipCode: -32e3,
        message: "Invalid input",
        detail: "Missing or invalid parameters",
        default: !0,
        retryable: !1,
      },
      E32001_DEFAULT_RESOURCE_NOT_FOUND: {
        eipCode: -32001,
        message: "Resource not found",
        detail: "Requested resource not found",
        default: !0,
        retryable: !1,
      },
      E32002_DEFAULT_RESOURCE_UNAVAILABLE: {
        eipCode: -32002,
        message: "Resource unavailable",
        detail: "Requested resource not available",
        default: !0,
        retryable: !0,
      },
      E32003_DEFAULT_TRANSACTION_REJECTED: {
        eipCode: -32003,
        message: "Transaction rejected",
        detail: "Transaction creation failed",
        default: !0,
        retryable: !0,
      },
      E32004_DEFAULT_METHOD_NOT_SUPPORTED: {
        eipCode: -32004,
        message: "Method not supported",
        detail: "Method is not implemented",
        default: !0,
        retryable: !1,
      },
      E32005_DEFAULT_LIMIT_EXCEEDED: {
        eipCode: -32005,
        message: "Limit exceeded",
        detail: "Request exceeds defined limit",
        default: !0,
        retryable: !1,
      },
      E32006_DEFAULT_JSON_RPC_VERSION_NOT_SUPPORTED: {
        eipCode: -32006,
        message: "JSON-RPC version not supported",
        detail: "Version of JSON-RPC protocol is not supported",
        default: !0,
        retryable: !1,
      },
      E32002_CONNECTION_ALREADY_PENDING: {
        eipCode: -32002,
        message: "Connection request already pending",
        detail: "Don’t see your wallet? Check your other browser windows.",
        retryable: !1,
      },
      E32002_REQUEST_ALREADY_PENDING: {
        eipCode: -32002,
        message: "Resource request already pending",
        detail: "Don’t see your wallet? Check your other browser windows.",
        retryable: !1,
      },
      E32002_WALLET_LOCKED: {
        eipCode: -32002,
        message: "Wallet might be locked",
        detail: "Don’t see your wallet? Check your other browser windows.",
        retryable: !1,
      },
      E4001_USER_REJECTED_REQUEST: {
        eipCode: 4001,
        message: "Signature rejected",
        detail: "Please try signing again.",
        retryable: !0,
      },
    };
    function l(e) {
      let t;
      return (
        "string" == typeof (t = e.type) &&
        r.includes(t) &&
        "wallet_not_on_device" === e.type
      );
    }
    e.s(
      [
        "EmbeddedProviderError",
        () => o,
        "PrivyConnectorError",
        () => a,
        "PrivyIframeError",
        () => n,
        "ProviderErrors",
        () => s,
        "errorIndicatesRecoveryIsNeeded",
        () => l,
      ],
      465672
    );
  },
  186159,
  (e) => {
    "use strict";
    function t(e, t) {
      if (!Object.prototype.hasOwnProperty.call(e, t))
        throw TypeError("attempted to use private field on non-instance");
      return e;
    }
    var r = 0;
    function i(e) {
      return "__private_" + r++ + "_" + e;
    }
    var n = i("_wallet"),
      a = i("_account");
    class o {
      get standardWallet() {
        return t(this, n)[n];
      }
      get address() {
        return t(this, a)[a].address;
      }
      async disconnect() {
        if (!t(this, n)[n].features["standard:disconnect"]?.disconnect)
          throw Error("Wallet does not support disconnect");
        await t(this, n)[n].features["standard:disconnect"].disconnect();
      }
      async signMessage(...e) {
        if (!t(this, n)[n].features["solana:signMessage"]?.signMessage)
          throw Error("Wallet does not support signMessage");
        let r = await t(this, n)[n].features["solana:signMessage"].signMessage(
          ...e.map((e) => ({ ...e, account: t(this, a)[a] }))
        );
        return 1 === e.length ? r[0] : [...r];
      }
      async signTransaction(...e) {
        if (!t(this, n)[n].features["solana:signTransaction"]?.signTransaction)
          throw Error("Wallet does not support signTransaction");
        let r = await t(this, n)[n].features[
          "solana:signTransaction"
        ].signTransaction(...e.map((e) => ({ ...e, account: t(this, a)[a] })));
        return 1 === e.length ? r[0] : [...r];
      }
      async signAndSendTransaction(...e) {
        if (
          !t(this, n)[n].features["solana:signAndSendTransaction"]
            ?.signAndSendTransaction
        )
          throw Error("Wallet does not support signAndSendTransaction");
        let r = await t(this, n)[n].features[
          "solana:signAndSendTransaction"
        ].signAndSendTransaction(
          ...e.map((e) => ({ ...e, account: t(this, a)[a] }))
        );
        return 1 === e.length ? r[0] : [...r];
      }
      async signAndSendAllTransactions(e) {
        if (
          !t(this, n)[n].features["solana:signAndSendTransaction"]
            ?.signAndSendTransaction
        )
          throw Error("Wallet does not support signAndSendTransaction");
        return [
          ...(await t(this, n)[n].features[
            "solana:signAndSendTransaction"
          ].signAndSendTransaction(
            ...e.map((e) => ({ ...e, account: t(this, a)[a] }))
          )),
        ];
      }
      constructor({ wallet: e, account: r }) {
        Object.defineProperty(this, n, { writable: !0, value: void 0 }),
          Object.defineProperty(this, a, { writable: !0, value: void 0 }),
          (t(this, n)[n] = e),
          (t(this, a)[a] = r);
      }
    }
    e.s(["ConnectedStandardSolanaWallet", () => o]);
  },
  623253,
  (e) => {
    "use strict";
    var t = e.i(590479),
      r = e.i(228700),
      i = e.i(465672),
      n = e.i(186159),
      a = e.i(948053),
      o = e.i(415912),
      s = e.i(719097);
    let l = (e) =>
        e.isApexWallet
          ? "Apex Wallet"
          : e.isAvalanche
          ? "Core Wallet"
          : e.isBackpack
          ? "Backpack"
          : e.isBifrost
          ? "Bifrost Wallet"
          : e.isBitKeep
          ? "BitKeep"
          : e.isBitski
          ? "Bitski"
          : e.isBlockWallet
          ? "BlockWallet"
          : e.isBraveWallet
          ? "Brave Wallet"
          : e.isClover
          ? "Clover"
          : e.isCoin98
          ? "Coin98 Wallet"
          : e.isCoinbaseWallet
          ? "Coinbase Wallet"
          : e.isDawn
          ? "Dawn Wallet"
          : e.isDefiant
          ? "Defiant"
          : e.isDesig
          ? "Desig Wallet"
          : e.isEnkrypt
          ? "Enkrypt"
          : e.isExodus
          ? "Exodus"
          : e.isFordefi
          ? "Fordefi"
          : e.isFrame
          ? "Frame"
          : e.isFrontier
          ? "Frontier Wallet"
          : e.isGamestop
          ? "GameStop Wallet"
          : e.isHaqqWallet
          ? "HAQQ Wallet"
          : e.isHyperPay
          ? "HyperPay Wallet"
          : e.isImToken
          ? "ImToken"
          : e.isHaloWallet
          ? "Halo Wallet"
          : e.isKuCoinWallet
          ? "KuCoin Wallet"
          : e.isMathWallet
          ? "MathWallet"
          : e.isNovaWallet
          ? "Nova Wallet"
          : e.isOkxWallet || e.isOKExWallet
          ? "OKX Wallet"
          : e.isOneInchIOSWallet || e.isOneInchAndroidWallet
          ? "1inch Wallet"
          : e.isOneKey
          ? "OneKey Wallet"
          : e.isOpera
          ? "Opera"
          : e.isPhantom || "isPhantom" in e
          ? "Phantom"
          : e.isPortal
          ? "Ripio Portal"
          : e.isRabby
          ? "Rabby Wallet"
          : e.isRainbow
          ? "Rainbow"
          : e.isSafePal
          ? "SafePal Wallet"
          : e.isStatus
          ? "Status"
          : e.isSubWallet
          ? "SubWallet"
          : e.isTalisman
          ? "Talisman"
          : e.isTally || e.isTaho
          ? "Taho"
          : e.isTokenPocket
          ? "TokenPocket"
          : e.isTokenary
          ? "Tokenary"
          : e.isTrust || e.isTrustWallet
          ? "Trust Wallet"
          : e.isTTWallet
          ? "TTWallet"
          : e.isXDEFI
          ? "XDEFI Wallet"
          : e.isZeal
          ? "Zeal"
          : e.isZerion
          ? "Zerion"
          : e.isMetaMask
          ? "MetaMask"
          : void 0,
      u = (e, t) => {
        if (!e.isMetaMask) return !1;
        if (e.isMetaMask && !t) return !0;
        if ((e.isBraveWallet && !e._events && !e._state) || "MetaMask" !== l(e))
          return !1;
        if (e.providers) {
          for (let t of e.providers) if (!u(t)) return !1;
        }
        return !0;
      },
      c = () => {
        let e = window;
        if (!e.ethereum) return !1;
        if (e.ethereum.isCoinbaseWallet) return !0;
        if (e.ethereum.providers) {
          for (let t of e.ethereum.providers)
            if (t && t.isCoinbaseWallet) return !0;
        }
        return !1;
      },
      d = (e, t) => {
        let r = [],
          i = [];
        for (let [n, a] of e.entries()) n < t ? r.push(a) : i.push(a);
        return [r, i];
      },
      f = (e) =>
        !!String(e)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
      p = (e, t) => {
        let r = e.slice(0),
          i = [];
        for (; r.length; ) i.push(r.splice(0, t));
        return i;
      },
      m = (e, t = 3, r = 4, i = "ethereum") => {
        if (!e) return "";
        let n = 2 * ("ethereum" === i);
        return t + r + n + 3 >= e.length
          ? e
          : `${e.slice(0, n + t)}...${e.slice(e.length - r, e.length)}`;
      },
      y = (e, t = 3, r = 4) => m(e, t, r, "solana"),
      h = (e) => new Promise((t) => setTimeout(t, e));
    function b(e, { interval: t = 100, timeout: r = 5e3 } = {}) {
      return new Promise((i, n) => {
        let a,
          o = 0,
          s = () => {
            o >= r
              ? n("Max attempts reached without result")
              : ((a = e()), (o += t), null == a ? setTimeout(s, t) : i(a));
          };
        s();
      });
    }
    let g = (e, t = {}) => {
        let r = t.delayMs || 150,
          i = t.maxAttempts || 270;
        return new Promise(async (n, a) => {
          let o = !1,
            s = 0;
          for (; !o && s < i; ) {
            if (t.abortSignal?.aborted) return;
            e().then(
              (e) => {
                (o = !0), n(e);
              },
              (...e) => {
                (o = !0), a(...e);
              }
            ),
              (s += 1),
              await h(r);
          }
          o || a(Error("Exceeded max attempts before resolving function"));
        });
      },
      w = (e) =>
        e.replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          ""
        ),
      v = (e) => ("string" == typeof e ? e : "0x" + e.toString(16));
    async function _({
      store: e,
      walletList: t,
      externalWalletConfig: r,
      walletChainType: i,
      timeout: n = 3e3,
    }) {
      let a = !1,
        o = window;
      return new Promise((s) => {
        function c() {
          if (a) return;
          (a = !0), window.removeEventListener("ethereum#initialized", c);
          let n = e.getProviders();
          console.debug(
            "Detected injected providers:",
            n.map((e) => e.info)
          );
          let o = [];
          for (let e of n)
            (t.includes("coinbase_wallet") &&
              "com.coinbase.wallet" === e.info.rdns) ||
              ("solana-only" === i && "app.phantom" === e.info.rdns) ||
              o.push({
                type: e.info.name.toLowerCase().replace(/\s/g, "_"),
                eip6963InjectedProvider: e,
              });
          if ("solana-only" !== i)
            for (let e of (function () {
              let e = window,
                t = e.ethereum;
              if (!t) return [];
              let r = [];
              if (t.providers?.length)
                for (let e of t.providers) e && r.push(e);
              return r.push(e.ethereum), r;
            })()) {
              let t = l(e);
              if (!n.some((e) => e.info.name === t)) {
                if (u(e, !0) && !o.find((e) => "metamask" === e.type)) {
                  o.push({ type: "metamask", legacyInjectedProvider: e });
                  continue;
                }
                if ("Phantom" === t && !o.find((e) => "phantom" === e.type)) {
                  o.push({ type: "phantom", legacyInjectedProvider: e });
                  continue;
                }
                if (
                  "Coinbase Wallet" === t &&
                  !o.find(
                    (e) =>
                      "coinbase_wallet" === e.type &&
                      "smartWalletOnly" !==
                        r.coinbaseWallet?.config?.preference?.options
                  )
                ) {
                  o.push({
                    type: "coinbase_wallet",
                    legacyInjectedProvider: e,
                  });
                  continue;
                }
                o.find((e) => "unknown_browser_extension" === e.type) ||
                  o.push({
                    type: "unknown_browser_extension",
                    legacyInjectedProvider: e,
                  });
              }
            }
          s(o);
        }
        o.ethereum
          ? c()
          : (window.addEventListener("ethereum#initialized", c, { once: !0 }),
            setTimeout(() => {
              c();
            }, n));
      });
    }
    function A(e) {
      return `eip155:${String(Number(e))}`;
    }
    let E = (e, i, n, a) => {
        let o = Number(e),
          s = i.find((e) => e.id === o);
        if (!s) throw new t.g(`Unsupported chainId ${e}`, 4901);
        return (0, r.a)(s, n, a);
      },
      x = (e, r) => {
        let i = Number(e),
          n = r.find((e) => e.id === i);
        if (!n) throw new t.g(`Unsupported chainId ${e}`, 4901);
        return n.blockExplorers?.default.url;
      },
      T = (e) => {
        let t = {
            name: "string",
            version: "string",
            chainId: "uint256",
            verifyingContract: "address",
            salt: "bytes32",
          },
          r =
            e.types.EIP712Domain ??
            Object.entries(e.domain)
              .map(([e, r]) => {
                if (null != r && "string" == typeof e && e in t)
                  return { name: e, type: t[e] };
              })
              .filter((e) => void 0 !== e);
        return { ...e, types: { ...e.types, EIP712Domain: r } };
      };
    function k(e, { min: t, max: r }) {
      return Math.min(Math.max(e, t), r);
    }
    let S = (e) =>
        e?.map((e) => ({
          signer_id: e.signerId,
          override_policy_ids: e.policyIds,
        })),
      P = "[Privy:Connectors]";
    function I(e) {
      if (!e || 0 === Object.keys(e).length) return "";
      let t = Object.entries(e)
        .filter(([, e]) => null != e)
        .map(([e, t]) => `${e}=${String(t)}`);
      return t.length > 0 ? ` (${t.join(", ")})` : "";
    }
    let C = new (class {
      setEnabled(e) {
        (this._enabled = e), e && this.info("Debug logging enabled");
      }
      get enabled() {
        return this._enabled;
      }
      debug(e, t) {
        this._enabled && console.debug(`${P} ${e}${I(t)}`);
      }
      info(e, t) {
        this._enabled && console.info(`${P} ${e}${I(t)}`);
      }
      warn(e, t) {
        this._enabled && console.warn(`${P} ${e}${I(t)}`);
      }
      error(e, t, r) {
        if (!this._enabled) return;
        let i = t instanceof Error ? t.message : t ? String(t) : void 0,
          n = i ? { ...r, error: i } : r;
        console.error(`${P} ${e}${I(n)}`);
      }
      connectionStart(e, t, r) {
        this.info("Connection attempt started", { wallet: e, method: t, ...r });
      }
      connectionSuccess(e, t) {
        this.info("Connection successful", { wallet: e, ...t });
      }
      connectionFailed(e, t, r) {
        this.error("Connection failed", t, { wallet: e, ...r });
      }
      connectorInit(e, t, r) {
        this.debug("Connector initialized", { connector: e, wallet: t, ...r });
      }
      connectorCreated(e, t, r) {
        this.debug("Connector created", { connector: e, wallet: t, ...r });
      }
      providerEvent(e, t, r) {
        this.debug(`Provider event: ${e}`, { wallet: t, ...r });
      }
      rpcRequest(e, t, r) {
        this.debug(`RPC request: ${e}`, { wallet: t, ...r });
      }
      rpcResponse(e, t, r) {
        this.debug(`RPC response: ${e}`, { wallet: t, ...r });
      }
      constructor() {
        this._enabled = !1;
      }
    })();
    class N extends t.g {
      constructor() {
        super("Wallet timeout"),
          (this.type = "wallet_error"),
          C.warn("Wallet request timed out");
      }
    }
    let O = (e) => {
      if (e instanceof t.g)
        return (
          C.debug("Connector error (already formatted)", { error: e.message }),
          e
        );
      if (e?.code) {
        let t = new R(e);
        return (
          C.debug("Provider RPC error", { code: t.code, error: t.message }), t
        );
      }
      let r = e instanceof Error ? e.message : String(e);
      return (
        C.debug("Unknown connector error", { error: r }),
        new t.g("Unknown connector error", e)
      );
    };
    class U extends t.b {
      constructor(e, t, r) {
        super(e),
          (this.type = "provider_error"),
          (this.code = t),
          (this.data = r);
      }
    }
    class R extends U {
      constructor(e) {
        super(e.message, e.code, e.data);
        let t = Object.values(i.ProviderErrors).find(
          (t) => t.eipCode === e.code
        );
        (this.details = t || i.ProviderErrors.UNKNOWN_ERROR),
          -32002 === e.code &&
            (e.message?.includes("already pending for origin")
              ? e.message?.includes("wallet_requestPermissions")
                ? (this.details =
                    i.ProviderErrors.E32002_CONNECTION_ALREADY_PENDING)
                : (this.details =
                    i.ProviderErrors.E32002_REQUEST_ALREADY_PENDING)
              : e.message?.includes("Already processing") &&
                e.message.includes("eth_requestAccounts") &&
                (this.details = i.ProviderErrors.E32002_WALLET_LOCKED));
      }
    }
    let L = {
      ERROR_USER_EXISTS: {
        message: "User already exists for this address",
        detail: "Try another address!",
        retryable: !1,
      },
      ERROR_TIMED_OUT: {
        message: "Wallet request timed out",
        detail: "Please try connecting again.",
        retryable: !0,
      },
      ERROR_WALLET_CONNECTION: {
        message: "Could not log in with wallet",
        detail: "Please try connecting again.",
        retryable: !0,
      },
      ERROR_USER_LIMIT_REACHED: {
        message: "Unable to link",
        detail: "You've reached the maximum number of linked wallets.",
        retryable: !1,
      },
      ...i.ProviderErrors,
    };
    class W {
      get(e) {
        let t = localStorage.getItem(e);
        return null === t ? void 0 : JSON.parse(t);
      }
      put(e, t) {
        void 0 !== t ? localStorage.setItem(e, JSON.stringify(t)) : this.del(e);
      }
      del(e) {
        localStorage.removeItem(e);
      }
      getKeys() {
        return Object.entries(localStorage).map(([e]) => e);
      }
    }
    function B() {
      try {
        let e = "privy:__session_storage__test",
          t = new W();
        return t.put(e, "blobby"), t.del(e), !0;
      } catch (e) {
        return !1;
      }
    }
    var D =
      "u" > typeof window && window.localStorage
        ? new W()
        : new (class {
            get(e) {
              return this._cache[e];
            }
            put(e, t) {
              void 0 !== t ? (this._cache[e] = t) : this.del(e);
            }
            del(e) {
              delete this._cache[e];
            }
            getKeys() {
              return Object.keys(this._cache);
            }
            constructor() {
              this._cache = {};
            }
          })();
    class j extends a.default {
      constructor(e) {
        super(),
          (this.walletClientType = e),
          (this.connected = !1),
          (this.initialized = !1);
      }
    }
    let M = () => {
        let e = D.get(o.C);
        return e &&
          Array.isArray(e) &&
          e
            .map(
              (e) =>
                e &&
                "string" == typeof e.address &&
                "string" == typeof e.connectorType &&
                "string" == typeof e.walletClientType &&
                "number" == typeof e.connectedAt
            )
            .every(Boolean)
          ? e
          : [];
      },
      F = [
        "phantom",
        "metamask",
        "glow",
        "solflare",
        "backpack",
        "okx_wallet",
        "walletconnect",
        "mobile_wallet_adapter",
        "jupiter",
        "tokenpocket",
      ];
    function z(e) {
      return e.toLowerCase().split(" ").join("_");
    }
    class K extends j {
      get isInstalled() {
        return !0;
      }
      get wallet() {
        return this._wallet;
      }
      buildConnectedWallet() {
        return this._wallet.accounts.map((e) => ({
          type: "solana",
          provider: new n.ConnectedStandardSolanaWallet({
            wallet: this._wallet,
            account: e,
          }),
          address: e.address,
          connectedAt: Date.now(),
          walletClientType: this._wallet.name,
          connectorType: this.connectorType,
          imported: !1,
          meta: {
            name: this._wallet.name,
            id: this._wallet.name,
            icon: this._wallet.icon,
          },
          isConnected: async () => this._wallet.accounts.length > 0,
          disconnect: async () => {
            await this.disconnect();
          },
        }));
      }
      async syncAccounts() {
        (this.wallets = this.buildConnectedWallet()),
          this.emit("walletsUpdated");
      }
      get walletBranding() {
        return {
          id: V(this.wallet) ? "walletconnect_solana" : this.wallet.name,
          name: this.wallet.name,
          icon: this.wallet.icon,
        };
      }
      async initialize() {
        C.debug("Initializing Solana connector", {
          wallet: this.walletClientType,
        }),
          this.subscribeListeners(),
          await this.syncAccounts(),
          this.shouldAttemptAutoConnect() &&
            (C.debug("Attempting Solana auto-connect", {
              wallet: this.walletClientType,
            }),
            await this.wallet.features["standard:connect"]
              ?.connect({ silent: !0 })
              .catch(() => {}),
            (await this.isConnected()) &&
              (C.debug("Solana auto-connect successful", {
                wallet: this.walletClientType,
              }),
              await this.syncAccounts())),
          (this.initialized = !0),
          this.emit("initialized");
      }
      async connect(e) {
        if (
          (C.connectionStart(this.walletClientType, "solana_adapter", {
            showPrompt: e.showPrompt,
          }),
          e.showPrompt)
        )
          try {
            await this.promptConnection();
          } catch (e) {
            if (0 === this._wallet.accounts.length)
              throw (
                (C.warn("Solana wallet connected but has no accounts", {
                  wallet: this.walletClientType,
                }),
                new t.j())
              );
            throw (
              (C.connectionFailed(this.walletClientType, e, {
                method: "solana_adapter",
              }),
              e)
            );
          }
        if (!(await this.isConnected()))
          throw (
            (C.warn("Solana wallet not connected after prompt", {
              wallet: this.walletClientType,
            }),
            new t.j())
          );
        await this.syncAccounts();
        let r = await this.getConnectedWallet();
        return r && C.connectionSuccess(this.walletClientType), r;
      }
      async getConnectedWallet() {
        return (
          this.wallets.sort((e, t) => t.connectedAt - e.connectedAt)[0] || null
        );
      }
      async isConnected() {
        return this._wallet.accounts.length > 0;
      }
      subscribeListeners() {
        this._unsubscribeListeners = this.wallet.features[
          "standard:events"
        ]?.on("change", this.onChange);
      }
      unsubscribeListeners() {
        this._unsubscribeListeners?.();
      }
      shouldAttemptAutoConnect() {
        return (
          !(!this.autoConnectEnabled || !F.includes(this.walletClientType)) &&
          (("phantom" !== this.walletClientType &&
            "metamask" !== this.walletClientType.toLowerCase()) ||
            M().some(
              ({ walletClientType: e }) =>
                "phantom" === e || "metamask" === e.toLowerCase()
            ))
        );
      }
      constructor(e, t) {
        super(z(V(e) ? "walletconnect_solana" : e.name)),
          (this.chainType = "solana"),
          (this.connectorType = "solana_adapter"),
          (this.disconnect = async () => {
            C.debug("Disconnecting Solana wallet", {
              wallet: this.walletClientType,
            }),
              await this.wallet.features["standard:disconnect"]
                ?.disconnect()
                .catch((e) => {
                  C.error("Error disconnecting Solana wallet", e, {
                    wallet: this.walletClientType,
                  });
                }),
              await this.syncAccounts();
          }),
          (this.promptConnection = async () => {
            C.debug("Prompting Solana connection", {
              wallet: this.walletClientType,
            });
            try {
              await this.wallet.features["standard:connect"]?.connect();
            } catch (e) {
              throw (
                (C.connectionFailed(this.walletClientType, e, {
                  method: "solana_adapter",
                }),
                O(e))
              );
            }
          }),
          (this.onChange = () => {
            this.syncAccounts();
          }),
          (this._wallet = e),
          (this.autoConnectEnabled = t),
          (this.wallets = []);
      }
    }
    function V(e) {
      return "isWalletConnectSolana" in e && e.isWalletConnectSolana;
    }
    let G = ({ style: e, ...t }) => {
      let r = (0, o.u)();
      return (0, s.jsxs)("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: { height: "28px", width: "28px", ...e },
        ...t,
        children: [
          (0, s.jsx)("rect", {
            width: "28",
            height: "28",
            rx: "3",
            fill:
              "dark" === r?.appearance.palette.colorScheme
                ? "#3396ff"
                : "#141414",
          }),
          (0, s.jsx)("g", {
            clipPath: "url(#clip0_1765_9946)",
            children: (0, s.jsx)("path", {
              d: "M8.09448 10.3941C11.3558 7.20196 16.6442 7.20196 19.9055 10.3941L20.2982 10.7782C20.3369 10.8157 20.3677 10.8606 20.3887 10.9102C20.4097 10.9599 20.4206 11.0132 20.4206 11.0671C20.4206 11.121 20.4097 11.1744 20.3887 11.224C20.3677 11.2737 20.3369 11.3186 20.2982 11.3561L18.9554 12.6702C18.9158 12.7086 18.8628 12.7301 18.8077 12.7301C18.7526 12.7301 18.6996 12.7086 18.66 12.6702L18.1198 12.1415C15.8448 9.91503 12.1557 9.91503 9.88015 12.1415L9.30167 12.7075C9.26207 12.7459 9.20909 12.7673 9.15395 12.7673C9.0988 12.7673 9.04582 12.7459 9.00622 12.7075L7.66346 11.3934C7.62475 11.3559 7.59397 11.3109 7.57295 11.2613C7.55193 11.2117 7.5411 11.1583 7.5411 11.1044C7.5411 11.0505 7.55193 10.9971 7.57295 10.9475C7.59397 10.8979 7.62475 10.8529 7.66346 10.8154L8.09448 10.3941ZM22.6829 13.1115L23.8776 14.2814C23.9163 14.319 23.9471 14.3639 23.9681 14.4135C23.9892 14.4632 24 14.5165 24 14.5704C24 14.6243 23.9892 14.6777 23.9681 14.7273C23.9471 14.777 23.9163 14.8219 23.8776 14.8594L18.4893 20.1332C18.4102 20.2101 18.3042 20.2531 18.1938 20.2531C18.0835 20.2531 17.9775 20.2101 17.8984 20.1332L14.0743 16.3901C14.0545 16.3708 14.0279 16.36 14.0003 16.36C13.9726 16.36 13.9461 16.3708 13.9263 16.3901L10.1021 20.1332C10.023 20.2101 9.91703 20.2531 9.8067 20.2531C9.69636 20.2531 9.59038 20.2101 9.51124 20.1332L4.12236 14.8594C4.08365 14.8219 4.05287 14.777 4.03185 14.7273C4.01083 14.6777 4 14.6243 4 14.5704C4 14.5165 4.01083 14.4632 4.03185 14.4135C4.05287 14.3639 4.08365 14.319 4.12236 14.2814L5.31767 13.1115C5.39678 13.0348 5.50265 12.9919 5.61285 12.9919C5.72305 12.9919 5.82892 13.0348 5.90803 13.1115L9.73216 16.8546C9.75194 16.874 9.7785 16.8848 9.80616 16.8848C9.83381 16.8848 9.86037 16.874 9.88015 16.8546L13.7043 13.1115C13.7834 13.0346 13.8894 12.9916 13.9997 12.9916C14.1101 12.9916 14.216 13.0346 14.2952 13.1115L18.1198 16.8546C18.1396 16.874 18.1662 16.8848 18.1938 16.8848C18.2215 16.8848 18.2481 16.874 18.2678 16.8546L22.092 13.1115C22.1711 13.0346 22.2771 12.9916 22.3874 12.9916C22.4977 12.9916 22.6037 13.0346 22.6829 13.1115Z",
              fill: "white",
            }),
          }),
          (0, s.jsx)("defs", {
            children: (0, s.jsx)("clipPath", {
              id: "clip0_1765_9946",
              children: (0, s.jsx)("rect", {
                width: "20",
                height: "12.2531",
                fill: "white",
                transform: "translate(4 8)",
              }),
            }),
          }),
        ],
      });
    };
    e.s([
      "A",
      () => z,
      "B",
      () => y,
      "C",
      () => L,
      "P",
      () => R,
      "S",
      () => K,
      "W",
      () => j,
      "a",
      () => h,
      "b",
      () => S,
      "c",
      () => C,
      "d",
      () => m,
      "e",
      () => B,
      "f",
      () => A,
      "g",
      () => T,
      "h",
      () =>
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfoDAIVODUC+w+GAAAGsUlEQVRYw6WXbYwWVxXHf+fOLAtCXYS2QJdIaClipGCTknXXNqBQMVHbfmhItH4Aral+IAEaG03UxJgYKQJGTUxtDWjaxDSNtcZqIGDwpRuW1oYiVqpdpZSlpC3qysu+PHPP3w/3mXnmeXZbPzjJZO7cefn/z/mfe865xlscq3dGDIguGiHLaMQVLja4s87FShcLo5jtApdddnHexUmHIy475JmdUkPRAQMu7gzT4ljnxJpdk0QPmMFkyAKN2OfOFpc2uuh1J3MZDrjAvXmVEQUuoosRxw642FcEG7IoDxiFxNiu8NYE+vcUYIFYRKKs113bXWx2Z34CoQZsVHOiCZ7mopdzdsFhv8NexEgRDHMxUSNREbh1bwNZwBsFblmfu/a4a6AEENYO5i3AOoEWeEUCF4MOOxBDMQAOk99OJALA2u80sBCwWGBZWG/yRwMaCAbBIAsQTJT3gea1OWfNeaPzvjoHEI85rA8ObtB1v7cIdJkIHgkh9AXpocy0LJjIKvB2wPpZB0v3wkrw5jdNEjeYeMhFX3BAyfn2ke9NUrgB9LrrcZcGJFCld4fWNddXbvbWfWzGR6xJFZsBGh0cBh3bBIxIEGTQ3W0h4NuDaSAzyAxCmGq11Vzf5uaa1aG8p+WFtrEYQGwvjICJkAEqvC+YNmcmMlMNvEaCdrcbyUvQAWDTjVuESHObM6cPGWHmzDwLaEtmzG9Z3qF1zUpXmuuZBb1z4bqeNC6f0WE1NtUTwHzEloiy3BvFisy0sYoLlQtT6XW15md2Qf9SY+2Ngfdca/TMSm/9ewz+/Boc/It45h/i4kSTsKw90SQJsPTvjSZbkWemDW7qTRZ0JEYJWSKxZJ7xmf6M224MzMzbX1s8F1YugjtvMg6eErt/4/z1jUrz1rXUKxnZC2zIg2mdBTK1mFUOKC1fOt/48kdzVixIz86Nij+eEacvpJWyZJ5xy7th8VzjjpuMJfMCW58QL73ekXPVlhsyE+vyzFiplJyauEIyrGIquruMq7qTxk+dcB495rzyTzFepCUWLIFv/kBg081Gd55WUk1IDGFTS89K++TDYxddzKnWcbluHd450xgdh7EGrOo1rr868PMTzqWJRGZ2d8oB/xpL33Xnxl2rjeNn4blXRXduzJ4B5y+28kWscAwXl+yeR654FFZPHoUb710YuPeDOUdPO48di1xptKpeEeHqOcYXNwQKGd88EDk3mqxtxPSfGRlsXRtYt8z4ytPOH/7eqpg1Aso7fYKgK4NPrMpYvsC4/poMA34yVJIQC3sCD9yecdsNyaV5yPj6ryJnR1PAvSNP4J+/1cgDfLbfePaMGGtM7Qdyl12WmKOmXgKKAp54vmBRTxfLrjE+tSYjBPjRM5FrrzIeuD2jf2lLzw8vN4JlfPVp581LsO1DgXv7jSzAiXPw/d+JiYLpjsu26Yfjf5O0rF5WoxsNT9G/bX0XKxakmPjlSee6HlizJJXSX7/oRDc+vjKR+f2wODcKd78/gR8/C9uedF44myJxmhh4OY/ipMQyqaWxmjn95TfEroMFOzbkvG+RceeqViPx1Aln1yEnOow1AnffHCpJAJ5/Vex4UvzptZRdY/O/1dJIS/NkcNmR6MTYah6qzseA4TfFtw4UvHBW1bc/O+7sPhwZHYf/jMODh5yfPudVbXj2TAJ/8XxrOZagNamj4Ei2/GNfuyRxh8t6BG2l15up+MIVODEiFr8rcPS0+O6RBF6mrrEGHHtFzOo2Lo7Dl37hvPQ6mNV6R9JYKgnYWcE37K5HlE2OT/5A0udaPUBHH+BQOMzuNsYLuDyZflTW+fTcmJFDHhJhaZqewMuewXDxcDR9IYyPN6Jj+6K4MF2vV8qBtZJScqVRNi6lpGONVJis5mpKi1WbgwsY+zIsBpcR8mzIZfuTRVZrtdu9odrptR/Xx5XONXJqBmCN0P6YMUQq9WJiwt0Je102WHdbpxSqydMObBWYdwDWLVcqcIMYe3NPjg0Ht84od0Ajju1w2XCr9e6QoqM9V23ZtnmI6cfAMMb9AY0YEHdb6oobEh4y3H3Ize6LsmGvN5IdUnhttdQ9UVrfLk/ljWEZ9wXsqAdQk1EA+O22GcgdZTke/bAs3OPY4HSdcB20HhvVtTMu0jmI8ekAhz2IICj2hKpNqI60NcuIRUHEej1quzubXa2tmZhenrfZmv3YYQ9ipDAIgvHptmblccuDjdRcmjFpWbDi/9ycZjZkRbk5jYztai/AUwiUx+qdEQB/m+25i9lxyvbcjrg45Lmd0uT/3p7/Fw6ODf+WO019AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTEyLTAyVDIxOjU2OjQ4KzAwOjAwMVpslgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0xMi0wMlQyMTo1Njo0OCswMDowMEAH1CoAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMTItMDJUMjE6NTY6NTMrMDA6MDDZv6GRAAAAAElFTkSuQmCC",
      "i",
      () => g,
      "j",
      () => O,
      "k",
      () => w,
      "l",
      () => M,
      "m",
      () => E,
      "n",
      () => _,
      "o",
      () => N,
      "p",
      () => b,
      "q",
      () => c,
      "r",
      () => d,
      "s",
      () => D,
      "t",
      () => v,
      "u",
      () => G,
      "v",
      () => f,
      "w",
      () => p,
      "x",
      () => k,
      "y",
      () => x,
      "z",
      () => U,
    ]);
  },
  295081,
  (e) => {
    "use strict";
    var t = e.i(642947);
    let r = {
        login: { onComplete: [], onError: [] },
        logout: { onSuccess: [] },
        connectWallet: { onSuccess: [], onError: [] },
        connectOrCreateWallet: { onSuccess: [], onError: [] },
        createWallet: { onSuccess: [], onError: [] },
        linkAccount: { onSuccess: [], onError: [] },
        update: { onSuccess: [], onError: [] },
        configureMfa: { onMfaRequired: [] },
        setWalletPassword: { onSuccess: [], onError: [] },
        setWalletRecovery: { onSuccess: [], onError: [] },
        signMessage: { onSuccess: [], onError: [] },
        signTypedData: { onSuccess: [], onError: [] },
        sendTransaction: { onSuccess: [], onError: [] },
        signTransaction: { onSuccess: [], onError: [] },
        accessToken: { onAccessTokenGranted: [], onAccessTokenRemoved: [] },
        oAuthAuthorization: { onOAuthTokenGrant: [] },
        fundWallet: { onUserExited: [] },
        fundSolanaWallet: { onUserExited: [] },
        customAuth: { onAuthenticated: [], onUnauthenticated: [] },
      },
      i = (0, t.createContext)(void 0),
      n = () => (0, t.useContext)(i);
    function a(e, r) {
      if (!r) return;
      let i = n().current[e];
      return (0, t.useEffect)(() => {
        for (let [t, n] of Object.entries(r))
          Object.prototype.hasOwnProperty.call(i, t) ||
            console.warn(`Invalid event type "${t}" for action "${e}"`),
            i[t]?.push(n);
        return () => {
          for (let [t, n] of Object.entries(r))
            Object.prototype.hasOwnProperty.call(i, t) ||
              console.warn(`Invalid event type "${t}" for action "${e}"`),
              (i[t] = i[t]?.filter((e) => e !== n));
        };
      }, [r]);
    }
    function o(e, t, r, ...i) {
      for (let n of e.current[t][r]) n(...i);
    }
    function s() {
      let e = n();
      return (t, r, ...i) => o(e, t, r, ...i);
    }
    e.s(["P", () => i, "a", () => s, "e", () => o, "p", () => r, "u", () => a]);
  },
]);
