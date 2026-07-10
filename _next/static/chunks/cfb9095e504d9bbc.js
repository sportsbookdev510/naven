(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  45744,
  (e) => {
    "use strict";
    let t, r, n, i, o, a, s;
    e.i(965595);
    var u,
      c,
      l,
      d,
      f,
      h,
      p,
      v,
      m,
      y,
      g,
      b,
      w,
      x,
      E,
      O,
      S,
      k,
      _,
      C,
      T = e.i(719097),
      R = e.i(422178),
      I = e.i(705807),
      D = e.i(866224),
      j = e.i(469738),
      N = class extends j.Subscribable {
        constructor(e = {}) {
          super(), (this.config = e), (this.#e = new Map());
        }
        #e;
        build(e, t, r) {
          let n = t.queryKey,
            i = t.queryHash ?? (0, R.hashQueryKeyByOptions)(n, t),
            o = this.get(i);
          return (
            o ||
              ((o = new I.Query({
                client: e,
                queryKey: n,
                queryHash: i,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(n),
              })),
              this.add(o)),
            o
          );
        }
        add(e) {
          this.#e.has(e.queryHash) ||
            (this.#e.set(e.queryHash, e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.#e.get(e.queryHash);
          t &&
            (e.destroy(),
            t === e && this.#e.delete(e.queryHash),
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          D.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.#e.get(e);
        }
        getAll() {
          return [...this.#e.values()];
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, R.matchQuery)(t, e));
        }
        findAll(e = {}) {
          let t = this.getAll();
          return Object.keys(e).length > 0
            ? t.filter((t) => (0, R.matchQuery)(e, t))
            : t;
        }
        notify(e) {
          D.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          D.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          D.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      },
      M = e.i(160650),
      P = j,
      A = class extends P.Subscribable {
        constructor(e = {}) {
          super(),
            (this.config = e),
            (this.#t = new Set()),
            (this.#r = new Map()),
            (this.#n = 0);
        }
        #t;
        #r;
        #n;
        build(e, t, r) {
          let n = new M.Mutation({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(t),
            state: r,
          });
          return this.add(n), n;
        }
        add(e) {
          this.#t.add(e);
          let t = F(e);
          if ("string" == typeof t) {
            let r = this.#r.get(t);
            r ? r.push(e) : this.#r.set(t, [e]);
          }
          this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          if (this.#t.delete(e)) {
            let t = F(e);
            if ("string" == typeof t) {
              let r = this.#r.get(t);
              if (r)
                if (r.length > 1) {
                  let t = r.indexOf(e);
                  -1 !== t && r.splice(t, 1);
                } else r[0] === e && this.#r.delete(t);
            }
          }
          this.notify({ type: "removed", mutation: e });
        }
        canRun(e) {
          let t = F(e);
          if ("string" != typeof t) return !0;
          {
            let r = this.#r.get(t),
              n = r?.find((e) => "pending" === e.state.status);
            return !n || n === e;
          }
        }
        runNext(e) {
          let t = F(e);
          if ("string" != typeof t) return Promise.resolve();
          {
            let r = this.#r.get(t)?.find((t) => t !== e && t.state.isPaused);
            return r?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          D.notifyManager.batch(() => {
            this.#t.forEach((e) => {
              this.notify({ type: "removed", mutation: e });
            }),
              this.#t.clear(),
              this.#r.clear();
          });
        }
        getAll() {
          return Array.from(this.#t);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, R.matchMutation)(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => (0, R.matchMutation)(e, t));
        }
        notify(e) {
          D.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return D.notifyManager.batch(() =>
            Promise.all(e.map((e) => e.continue().catch(R.noop)))
          );
        }
      };
    function F(e) {
      return e.options.scope?.id;
    }
    var q = e.i(661361),
      L = e.i(50800),
      Q = class {
        #i;
        #o;
        #a;
        #s;
        #u;
        #c;
        #l;
        #d;
        constructor(e = {}) {
          (this.#i = e.queryCache || new N()),
            (this.#o = e.mutationCache || new A()),
            (this.#a = e.defaultOptions || {}),
            (this.#s = new Map()),
            (this.#u = new Map()),
            (this.#c = 0);
        }
        mount() {
          this.#c++,
            1 === this.#c &&
              ((this.#l = q.focusManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#i.onFocus());
              })),
              (this.#d = L.onlineManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#i.onOnline());
              })));
        }
        unmount() {
          this.#c--,
            0 === this.#c &&
              (this.#l?.(),
              (this.#l = void 0),
              this.#d?.(),
              (this.#d = void 0));
        }
        isFetching(e) {
          return this.#i.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#o.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#i.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#i.build(this, t),
            n = r.state.data;
          return void 0 === n
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime((0, R.resolveStaleTime)(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(n));
        }
        getQueriesData(e) {
          return this.#i
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let n = this.defaultQueryOptions({ queryKey: e }),
            i = this.#i.get(n.queryHash),
            o = i?.state.data,
            a = (0, R.functionalUpdate)(t, o);
          if (void 0 !== a)
            return this.#i.build(this, n).setData(a, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return D.notifyManager.batch(() =>
            this.#i
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#i.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#i;
          D.notifyManager.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#i;
          return D.notifyManager.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            D.notifyManager.batch(() =>
              this.#i.findAll(e).map((e) => e.cancel(r))
            )
          )
            .then(R.noop)
            .catch(R.noop);
        }
        invalidateQueries(e, t = {}) {
          return D.notifyManager.batch(() =>
            (this.#i.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries(
                  { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                  t
                )
          );
        }
        refetchQueries(e, t = {}) {
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            D.notifyManager.batch(() =>
              this.#i
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(R.noop)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(R.noop);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#i.build(this, t);
          return r.isStaleByTime((0, R.resolveStaleTime)(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(R.noop).catch(R.noop);
        }
        fetchInfiniteQuery(e) {
          return (e._type = "infinite"), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(R.noop).catch(R.noop);
        }
        ensureInfiniteQueryData(e) {
          return (e._type = "infinite"), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return L.onlineManager.isOnline()
            ? this.#o.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#i;
        }
        getMutationCache() {
          return this.#o;
        }
        getDefaultOptions() {
          return this.#a;
        }
        setDefaultOptions(e) {
          this.#a = e;
        }
        setQueryDefaults(e, t) {
          this.#s.set((0, R.hashKey)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#s.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, R.partialMatchKey)(e, t.queryKey) &&
                Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#u.set((0, R.hashKey)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#u.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, R.partialMatchKey)(e, t.mutationKey) &&
                Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#a.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash ||
              (t.queryHash = (0, R.hashQueryKeyByOptions)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === R.skipToken && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#a.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#i.clear(), this.#o.clear();
        }
      },
      V = e.i(707602),
      z = e.i(177070),
      W = e.i(466691),
      B = e.i(862030);
    let U = [];
    var $ = e.i(642947);
    function K(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
      return function (n) {
        if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
      };
    }
    "u" > typeof window && window.document && window.document.createElement;
    var H = e.i(949266);
    function Y(e, t = []) {
      let r = [],
        n = () => {
          let t = r.map((e) => $.createContext(e));
          return function (r) {
            let n = r?.[e] || t;
            return $.useMemo(
              () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
              [r, n]
            );
          };
        };
      return (
        (n.scopeName = e),
        [
          function (t, n) {
            let i = $.createContext(n),
              o = r.length;
            r = [...r, n];
            let a = (t) => {
              let { scope: r, children: n, ...a } = t,
                s = r?.[e]?.[o] || i,
                u = $.useMemo(() => a, Object.values(a));
              return (0, T.jsx)(s.Provider, { value: u, children: n });
            };
            return (
              (a.displayName = t + "Provider"),
              [
                a,
                function (r, a) {
                  let s = a?.[e]?.[o] || i,
                    u = $.useContext(s);
                  if (u) return u;
                  if (void 0 !== n) return n;
                  throw Error(`\`${r}\` must be used within \`${t}\``);
                },
              ]
            );
          },
          (function (...e) {
            let t = e[0];
            if (1 === e.length) return t;
            let r = () => {
              let r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
              return function (e) {
                let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                  let i = r(e)[`__scope${n}`];
                  return { ...t, ...i };
                }, {});
                return $.useMemo(() => ({ [`__scope${t.scopeName}`]: n }), [n]);
              };
            };
            return (r.scopeName = t.scopeName), r;
          })(n, ...t),
        ]
      );
    }
    var G = globalThis?.document ? $.useLayoutEffect : () => {};
    $[" useEffectEvent ".trim().toString()],
      $[" useInsertionEffect ".trim().toString()];
    var J = $[" useInsertionEffect ".trim().toString()] || G;
    function X({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
      let [i, o, a] = (function ({ defaultProp: e, onChange: t }) {
          let [r, n] = $.useState(e),
            i = $.useRef(r),
            o = $.useRef(t);
          return (
            J(() => {
              o.current = t;
            }, [t]),
            $.useEffect(() => {
              i.current !== r && (o.current?.(r), (i.current = r));
            }, [r, i]),
            [r, n, o]
          );
        })({ defaultProp: t, onChange: r }),
        s = void 0 !== e,
        u = s ? e : i;
      {
        let t = $.useRef(void 0 !== e);
        $.useEffect(() => {
          let e = t.current;
          if (e !== s) {
            let t = s ? "controlled" : "uncontrolled";
            console.warn(
              `${n} is changing from ${
                e ? "controlled" : "uncontrolled"
              } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
            );
          }
          t.current = s;
        }, [s, n]);
      }
      return [
        u,
        $.useCallback(
          (t) => {
            if (s) {
              let r = "function" == typeof t ? t(e) : t;
              r !== e && a.current?.(r);
            } else o(t);
          },
          [s, e, o, a]
        ),
      ];
    }
    Symbol("RADIX:SYNC_STATE");
    var Z = e.i(325769),
      ee = e.i(456882),
      et = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, ee.createSlot)(`Primitive.${t}`),
          n = $.forwardRef((e, n) => {
            let { asChild: i, ...o } = e;
            return (
              "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, T.jsx)(i ? r : t, { ...o, ref: n })
            );
          });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
    function er(e, t) {
      e && Z.flushSync(() => e.dispatchEvent(t));
    }
    function en(e) {
      let t = e + "CollectionProvider",
        [r, n] = Y(t),
        [i, o] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
        a = (e) => {
          let { scope: t, children: r } = e,
            n = $.default.useRef(null),
            o = $.default.useRef(new Map()).current;
          return (0, T.jsx)(i, {
            scope: t,
            itemMap: o,
            collectionRef: n,
            children: r,
          });
        };
      a.displayName = t;
      let s = e + "CollectionSlot",
        u = (0, ee.createSlot)(s),
        c = $.default.forwardRef((e, t) => {
          let { scope: r, children: n } = e,
            i = o(s, r),
            a = (0, H.useComposedRefs)(t, i.collectionRef);
          return (0, T.jsx)(u, { ref: a, children: n });
        });
      c.displayName = s;
      let l = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = (0, ee.createSlot)(l),
        h = $.default.forwardRef((e, t) => {
          let { scope: r, children: n, ...i } = e,
            a = $.default.useRef(null),
            s = (0, H.useComposedRefs)(t, a),
            u = o(l, r);
          return (
            $.default.useEffect(
              () => (
                u.itemMap.set(a, { ref: a, ...i }),
                () => void u.itemMap.delete(a)
              )
            ),
            (0, T.jsx)(f, { ...{ [d]: "" }, ref: s, children: n })
          );
        });
      return (
        (h.displayName = l),
        [
          { Provider: a, Slot: c, ItemSlot: h },
          function (t) {
            let r = o(e + "CollectionConsumer", t);
            return $.default.useCallback(() => {
              let e = r.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${d}]`));
              return Array.from(r.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
              );
            }, [r.collectionRef, r.itemMap]);
          },
          n,
        ]
      );
    }
    var ei = new WeakMap();
    function eo(e, t) {
      var r, n;
      let i, o, a;
      if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
      let s =
        ((r = e),
        (n = t),
        (i = r.length),
        (a = (o = ea(n)) >= 0 ? o : i + o) < 0 || a >= i ? -1 : a);
      return -1 === s ? void 0 : e[s];
    }
    function ea(e) {
      return e != e || 0 === e ? 0 : Math.trunc(e);
    }
    (class e extends Map {
      #f;
      constructor(e) {
        super(e), (this.#f = [...super.keys()]), ei.set(this, !0);
      }
      set(e, t) {
        return (
          ei.get(this) &&
            (this.has(e) ? (this.#f[this.#f.indexOf(e)] = e) : this.#f.push(e)),
          super.set(e, t),
          this
        );
      }
      insert(e, t, r) {
        let n,
          i = this.has(t),
          o = this.#f.length,
          a = ea(e),
          s = a >= 0 ? a : o + a,
          u = s < 0 || s >= o ? -1 : s;
        if (u === this.size || (i && u === this.size - 1) || -1 === u)
          return this.set(t, r), this;
        let c = this.size + +!i;
        a < 0 && s++;
        let l = [...this.#f],
          d = !1;
        for (let e = s; e < c; e++)
          if (s === e) {
            let o = l[e];
            l[e] === t && (o = l[e + 1]),
              i && this.delete(t),
              (n = this.get(o)),
              this.set(t, r);
          } else {
            d || l[e - 1] !== t || (d = !0);
            let r = l[d ? e : e - 1],
              i = n;
            (n = this.get(r)), this.delete(r), this.set(r, i);
          }
        return this;
      }
      with(t, r, n) {
        let i = new e(this);
        return i.insert(t, r, n), i;
      }
      before(e) {
        let t = this.#f.indexOf(e) - 1;
        if (!(t < 0)) return this.entryAt(t);
      }
      setBefore(e, t, r) {
        let n = this.#f.indexOf(e);
        return -1 === n ? this : this.insert(n, t, r);
      }
      after(e) {
        let t = this.#f.indexOf(e);
        if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1))
          return this.entryAt(t);
      }
      setAfter(e, t, r) {
        let n = this.#f.indexOf(e);
        return -1 === n ? this : this.insert(n + 1, t, r);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return (this.#f = []), super.clear();
      }
      delete(e) {
        let t = super.delete(e);
        return t && this.#f.splice(this.#f.indexOf(e), 1), t;
      }
      deleteAt(e) {
        let t = this.keyAt(e);
        return void 0 !== t && this.delete(t);
      }
      at(e) {
        let t = eo(this.#f, e);
        if (void 0 !== t) return this.get(t);
      }
      entryAt(e) {
        let t = eo(this.#f, e);
        if (void 0 !== t) return [t, this.get(t)];
      }
      indexOf(e) {
        return this.#f.indexOf(e);
      }
      keyAt(e) {
        return eo(this.#f, e);
      }
      from(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (
          n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
        );
      }
      keyFrom(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (
          n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
        );
      }
      find(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return n;
          r++;
        }
      }
      findIndex(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return r;
          r++;
        }
        return -1;
      }
      filter(t, r) {
        let n = [],
          i = 0;
        for (let e of this) Reflect.apply(t, r, [e, i, this]) && n.push(e), i++;
        return new e(n);
      }
      map(t, r) {
        let n = [],
          i = 0;
        for (let e of this)
          n.push([e[0], Reflect.apply(t, r, [e, i, this])]), i++;
        return new e(n);
      }
      reduce(...e) {
        let [t, r] = e,
          n = 0,
          i = r ?? this.at(0);
        for (let r of this)
          (i =
            0 === n && 1 === e.length
              ? r
              : Reflect.apply(t, this, [i, r, n, this])),
            n++;
        return i;
      }
      reduceRight(...e) {
        let [t, r] = e,
          n = r ?? this.at(-1);
        for (let r = this.size - 1; r >= 0; r--) {
          let i = this.at(r);
          n =
            r === this.size - 1 && 1 === e.length
              ? i
              : Reflect.apply(t, this, [n, i, r, this]);
        }
        return n;
      }
      toSorted(t) {
        return new e([...this.entries()].sort(t));
      }
      toReversed() {
        let t = new e();
        for (let e = this.size - 1; e >= 0; e--) {
          let r = this.keyAt(e),
            n = this.get(r);
          t.set(r, n);
        }
        return t;
      }
      toSpliced(...t) {
        let r = [...this.entries()];
        return r.splice(...t), new e(r);
      }
      slice(t, r) {
        let n = new e(),
          i = this.size - 1;
        if (void 0 === t) return n;
        t < 0 && (t += this.size), void 0 !== r && r > 0 && (i = r - 1);
        for (let e = t; e <= i; e++) {
          let t = this.keyAt(e),
            r = this.get(t);
          n.set(t, r);
        }
        return n;
      }
      every(e, t) {
        let r = 0;
        for (let n of this) {
          if (!Reflect.apply(e, t, [n, r, this])) return !1;
          r++;
        }
        return !0;
      }
      some(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return !0;
          r++;
        }
        return !1;
      }
    });
    var es = $.createContext(void 0);
    function eu(e) {
      let t = $.useContext(es);
      return e || t || "ltr";
    }
    function ec(e) {
      let t = $.useRef(e);
      return (
        $.useEffect(() => {
          t.current = e;
        }),
        $.useMemo(
          () =>
            (...e) =>
              t.current?.(...e),
          []
        )
      );
    }
    var el = "dismissableLayer.update",
      ed = $.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      ef = $.forwardRef((e, t) => {
        let {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: i,
            onFocusOutside: o,
            onInteractOutside: a,
            onDismiss: s,
            ...u
          } = e,
          c = $.useContext(ed),
          [l, d] = $.useState(null),
          f = l?.ownerDocument ?? globalThis?.document,
          [, h] = $.useState({}),
          p = (0, H.useComposedRefs)(t, (e) => d(e)),
          v = Array.from(c.layers),
          [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
          y = v.indexOf(m),
          g = l ? v.indexOf(l) : -1,
          b = c.layersWithOutsidePointerEventsDisabled.size > 0,
          w = g >= y,
          E = (function (e, t = globalThis?.document) {
            let r = ec(e),
              n = $.useRef(!1),
              i = $.useRef(() => {});
            return (
              $.useEffect(() => {
                let e = (e) => {
                    if (e.target && !n.current) {
                      let n = function () {
                          ep("dismissableLayer.pointerDownOutside", r, o, {
                            discrete: !0,
                          });
                        },
                        o = { originalEvent: e };
                      "touch" === e.pointerType
                        ? (t.removeEventListener("click", i.current),
                          (i.current = n),
                          t.addEventListener("click", i.current, { once: !0 }))
                        : n();
                    } else t.removeEventListener("click", i.current);
                    n.current = !1;
                  },
                  o = window.setTimeout(() => {
                    t.addEventListener("pointerdown", e);
                  }, 0);
                return () => {
                  window.clearTimeout(o),
                    t.removeEventListener("pointerdown", e),
                    t.removeEventListener("click", i.current);
                };
              }, [t, r]),
              { onPointerDownCapture: () => (n.current = !0) }
            );
          })((e) => {
            let t = e.target,
              r = [...c.branches].some((e) => e.contains(t));
            w && !r && (i?.(e), a?.(e), e.defaultPrevented || s?.());
          }, f),
          O = (function (e, t = globalThis?.document) {
            let r = ec(e),
              n = $.useRef(!1);
            return (
              $.useEffect(() => {
                let e = (e) => {
                  e.target &&
                    !n.current &&
                    ep(
                      "dismissableLayer.focusOutside",
                      r,
                      { originalEvent: e },
                      { discrete: !1 }
                    );
                };
                return (
                  t.addEventListener("focusin", e),
                  () => t.removeEventListener("focusin", e)
                );
              }, [t, r]),
              {
                onFocusCapture: () => (n.current = !0),
                onBlurCapture: () => (n.current = !1),
              }
            );
          })((e) => {
            let t = e.target;
            ![...c.branches].some((e) => e.contains(t)) &&
              (o?.(e), a?.(e), e.defaultPrevented || s?.());
          }, f);
        return (
          !(function (e, t = globalThis?.document) {
            let r = ec(e);
            $.useEffect(() => {
              let e = (e) => {
                "Escape" === e.key && r(e);
              };
              return (
                t.addEventListener("keydown", e, { capture: !0 }),
                () => t.removeEventListener("keydown", e, { capture: !0 })
              );
            }, [r, t]);
          })((e) => {
            g === c.layers.size - 1 &&
              (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
          }, f),
          $.useEffect(() => {
            if (l)
              return (
                r &&
                  (0 === c.layersWithOutsidePointerEventsDisabled.size &&
                    ((x = f.body.style.pointerEvents),
                    (f.body.style.pointerEvents = "none")),
                  c.layersWithOutsidePointerEventsDisabled.add(l)),
                c.layers.add(l),
                eh(),
                () => {
                  r &&
                    1 === c.layersWithOutsidePointerEventsDisabled.size &&
                    (f.body.style.pointerEvents = x);
                }
              );
          }, [l, f, r, c]),
          $.useEffect(
            () => () => {
              l &&
                (c.layers.delete(l),
                c.layersWithOutsidePointerEventsDisabled.delete(l),
                eh());
            },
            [l, c]
          ),
          $.useEffect(() => {
            let e = () => h({});
            return (
              document.addEventListener(el, e),
              () => document.removeEventListener(el, e)
            );
          }, []),
          (0, T.jsx)(et.div, {
            ...u,
            ref: p,
            style: {
              pointerEvents: b ? (w ? "auto" : "none") : void 0,
              ...e.style,
            },
            onFocusCapture: K(e.onFocusCapture, O.onFocusCapture),
            onBlurCapture: K(e.onBlurCapture, O.onBlurCapture),
            onPointerDownCapture: K(
              e.onPointerDownCapture,
              E.onPointerDownCapture
            ),
          })
        );
      });
    function eh() {
      let e = new CustomEvent(el);
      document.dispatchEvent(e);
    }
    function ep(e, t, r, { discrete: n }) {
      let i = r.originalEvent.target,
        o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
      t && i.addEventListener(e, t, { once: !0 }),
        n ? er(i, o) : i.dispatchEvent(o);
    }
    (ef.displayName = "DismissableLayer"),
      ($.forwardRef((e, t) => {
        let r = $.useContext(ed),
          n = $.useRef(null),
          i = (0, H.useComposedRefs)(t, n);
        return (
          $.useEffect(() => {
            let e = n.current;
            if (e)
              return (
                r.branches.add(e),
                () => {
                  r.branches.delete(e);
                }
              );
          }, [r.branches]),
          (0, T.jsx)(et.div, { ...e, ref: i })
        );
      }).displayName = "DismissableLayerBranch");
    var ev = 0;
    function em() {
      $.useEffect(() => {
        let e = document.querySelectorAll("[data-radix-focus-guard]");
        return (
          document.body.insertAdjacentElement("afterbegin", e[0] ?? ey()),
          document.body.insertAdjacentElement("beforeend", e[1] ?? ey()),
          ev++,
          () => {
            1 === ev &&
              document
                .querySelectorAll("[data-radix-focus-guard]")
                .forEach((e) => e.remove()),
              ev--;
          }
        );
      }, []);
    }
    function ey() {
      let e = document.createElement("span");
      return (
        e.setAttribute("data-radix-focus-guard", ""),
        (e.tabIndex = 0),
        (e.style.outline = "none"),
        (e.style.opacity = "0"),
        (e.style.position = "fixed"),
        (e.style.pointerEvents = "none"),
        e
      );
    }
    var eg = "focusScope.autoFocusOnMount",
      eb = "focusScope.autoFocusOnUnmount",
      ew = { bubbles: !1, cancelable: !0 },
      ex = $.forwardRef((e, t) => {
        let {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: o,
            ...a
          } = e,
          [s, u] = $.useState(null),
          c = ec(i),
          l = ec(o),
          d = $.useRef(null),
          f = (0, H.useComposedRefs)(t, (e) => u(e)),
          h = $.useRef({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            },
          }).current;
        $.useEffect(() => {
          if (n) {
            let e = function (e) {
                if (h.paused || !s) return;
                let t = e.target;
                s.contains(t) ? (d.current = t) : eS(d.current, { select: !0 });
              },
              t = function (e) {
                if (h.paused || !s) return;
                let t = e.relatedTarget;
                null !== t && (s.contains(t) || eS(d.current, { select: !0 }));
              };
            document.addEventListener("focusin", e),
              document.addEventListener("focusout", t);
            let r = new MutationObserver(function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && eS(s);
            });
            return (
              s && r.observe(s, { childList: !0, subtree: !0 }),
              () => {
                document.removeEventListener("focusin", e),
                  document.removeEventListener("focusout", t),
                  r.disconnect();
              }
            );
          }
        }, [n, s, h.paused]),
          $.useEffect(() => {
            if (s) {
              ek.add(h);
              let e = document.activeElement;
              if (!s.contains(e)) {
                let t = new CustomEvent(eg, ew);
                s.addEventListener(eg, c),
                  s.dispatchEvent(t),
                  t.defaultPrevented ||
                    ((function (e, { select: t = !1 } = {}) {
                      let r = document.activeElement;
                      for (let n of e)
                        if (
                          (eS(n, { select: t }), document.activeElement !== r)
                        )
                          return;
                    })(
                      eE(s).filter((e) => "A" !== e.tagName),
                      { select: !0 }
                    ),
                    document.activeElement === e && eS(s));
              }
              return () => {
                s.removeEventListener(eg, c),
                  setTimeout(() => {
                    let t = new CustomEvent(eb, ew);
                    s.addEventListener(eb, l),
                      s.dispatchEvent(t),
                      t.defaultPrevented ||
                        eS(e ?? document.body, { select: !0 }),
                      s.removeEventListener(eb, l),
                      ek.remove(h);
                  }, 0);
              };
            }
          }, [s, c, l, h]);
        let p = $.useCallback(
          (e) => {
            if ((!r && !n) || h.paused) return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              i = document.activeElement;
            if (t && i) {
              var o;
              let t,
                n = e.currentTarget,
                [a, s] = [eO((t = eE((o = n))), o), eO(t.reverse(), o)];
              a && s
                ? e.shiftKey || i !== s
                  ? e.shiftKey &&
                    i === a &&
                    (e.preventDefault(), r && eS(s, { select: !0 }))
                  : (e.preventDefault(), r && eS(a, { select: !0 }))
                : i === n && e.preventDefault();
            }
          },
          [r, n, h.paused]
        );
        return (0, T.jsx)(et.div, { tabIndex: -1, ...a, ref: f, onKeyDown: p });
      });
    function eE(e) {
      let t = [],
        r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e) => {
            let t = "INPUT" === e.tagName && "hidden" === e.type;
            return e.disabled || e.hidden || t
              ? NodeFilter.FILTER_SKIP
              : e.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          },
        });
      for (; r.nextNode(); ) t.push(r.currentNode);
      return t;
    }
    function eO(e, t) {
      for (let r of e)
        if (
          !(function (e, { upTo: t }) {
            if ("hidden" === getComputedStyle(e).visibility) return !0;
            for (; e && (void 0 === t || e !== t); ) {
              if ("none" === getComputedStyle(e).display) return !0;
              e = e.parentElement;
            }
            return !1;
          })(r, { upTo: t })
        )
          return r;
    }
    function eS(e, { select: t = !1 } = {}) {
      if (e && e.focus) {
        var r;
        let n = document.activeElement;
        e.focus({ preventScroll: !0 }),
          e !== n &&
            (r = e) instanceof HTMLInputElement &&
            "select" in r &&
            t &&
            e.select();
      }
    }
    ex.displayName = "FocusScope";
    var ek =
      ((s = []),
      {
        add(e) {
          let t = s[0];
          e !== t && t?.pause(), (s = e_(s, e)).unshift(e);
        },
        remove(e) {
          (s = e_(s, e)), s[0]?.resume();
        },
      });
    function e_(e, t) {
      let r = [...e],
        n = r.indexOf(t);
      return -1 !== n && r.splice(n, 1), r;
    }
    var eC = $[" useId ".trim().toString()] || (() => void 0),
      eT = 0;
    function eR(e) {
      let [t, r] = $.useState(eC());
      return (
        G(() => {
          e || r((e) => e ?? String(eT++));
        }, [e]),
        e || (t ? `radix-${t}` : "")
      );
    }
    var eI = e.i(377534),
      eD = e.i(389542),
      ej = $.forwardRef((e, t) => {
        let { children: r, width: n = 10, height: i = 5, ...o } = e;
        return (0, T.jsx)(et.svg, {
          ...o,
          ref: t,
          width: n,
          height: i,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? r
            : (0, T.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
    ej.displayName = "Arrow";
    var eN = "Popper",
      [eM, eP] = Y(eN),
      [eA, eF] = eM(eN),
      eq = (e) => {
        let { __scopePopper: t, children: r } = e,
          [n, i] = $.useState(null);
        return (0, T.jsx)(eA, {
          scope: t,
          anchor: n,
          onAnchorChange: i,
          children: r,
        });
      };
    eq.displayName = eN;
    var eL = "PopperAnchor",
      eQ = $.forwardRef((e, t) => {
        let { __scopePopper: r, virtualRef: n, ...i } = e,
          o = eF(eL, r),
          a = $.useRef(null),
          s = (0, H.useComposedRefs)(t, a),
          u = $.useRef(null);
        return (
          $.useEffect(() => {
            let e = u.current;
            (u.current = n?.current || a.current),
              e !== u.current && o.onAnchorChange(u.current);
          }),
          n ? null : (0, T.jsx)(et.div, { ...i, ref: s })
        );
      });
    eQ.displayName = eL;
    var eV = "PopperContent",
      [ez, eW] = eM(eV),
      eB = $.forwardRef((e, t) => {
        let {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: i = 0,
            align: o = "center",
            alignOffset: a = 0,
            arrowPadding: s = 0,
            avoidCollisions: u = !0,
            collisionBoundary: c = [],
            collisionPadding: l = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...v
          } = e,
          m = eF(eV, r),
          [y, g] = $.useState(null),
          b = (0, H.useComposedRefs)(t, (e) => g(e)),
          [w, x] = $.useState(null),
          E = (function (e) {
            let [t, r] = $.useState(void 0);
            return (
              G(() => {
                if (e) {
                  r({ width: e.offsetWidth, height: e.offsetHeight });
                  let t = new ResizeObserver((t) => {
                    let n, i;
                    if (!Array.isArray(t) || !t.length) return;
                    let o = t[0];
                    if ("borderBoxSize" in o) {
                      let e = o.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                      (n = t.inlineSize), (i = t.blockSize);
                    } else (n = e.offsetWidth), (i = e.offsetHeight);
                    r({ width: n, height: i });
                  });
                  return (
                    t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                  );
                }
                r(void 0);
              }, [e]),
              t
            );
          })(w),
          O = E?.width ?? 0,
          S = E?.height ?? 0,
          k =
            "number" == typeof l
              ? l
              : { top: 0, right: 0, bottom: 0, left: 0, ...l },
          _ = Array.isArray(c) ? c : [c],
          C = _.length > 0,
          R = { padding: k, boundary: _.filter(eH), altBoundary: C },
          {
            refs: I,
            floatingStyles: D,
            placement: j,
            isPositioned: N,
            middlewareData: M,
          } = (0, eI.useFloating)({
            strategy: "fixed",
            placement: n + ("center" !== o ? "-" + o : ""),
            whileElementsMounted: (...e) =>
              (0, eD.autoUpdate)(...e, { animationFrame: "always" === h }),
            elements: { reference: m.anchor },
            middleware: [
              (0, eI.offset)({ mainAxis: i + S, alignmentAxis: a }),
              u &&
                (0, eI.shift)({
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: "partial" === d ? (0, eI.limitShift)() : void 0,
                  ...R,
                }),
              u && (0, eI.flip)({ ...R }),
              (0, eI.size)({
                ...R,
                apply: ({
                  elements: e,
                  rects: t,
                  availableWidth: r,
                  availableHeight: n,
                }) => {
                  let { width: i, height: o } = t.reference,
                    a = e.floating.style;
                  a.setProperty("--radix-popper-available-width", `${r}px`),
                    a.setProperty("--radix-popper-available-height", `${n}px`),
                    a.setProperty("--radix-popper-anchor-width", `${i}px`),
                    a.setProperty("--radix-popper-anchor-height", `${o}px`);
                },
              }),
              w && (0, eI.arrow)({ element: w, padding: s }),
              eY({ arrowWidth: O, arrowHeight: S }),
              f && (0, eI.hide)({ strategy: "referenceHidden", ...R }),
            ],
          }),
          [P, A] = eG(j),
          F = ec(p);
        G(() => {
          N && F?.();
        }, [N, F]);
        let q = M.arrow?.x,
          L = M.arrow?.y,
          Q = M.arrow?.centerOffset !== 0,
          [V, z] = $.useState();
        return (
          G(() => {
            y && z(window.getComputedStyle(y).zIndex);
          }, [y]),
          (0, T.jsx)("div", {
            ref: I.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: N ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: V,
              "--radix-popper-transform-origin": [
                M.transformOrigin?.x,
                M.transformOrigin?.y,
              ].join(" "),
              ...(M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none",
              }),
            },
            dir: e.dir,
            children: (0, T.jsx)(ez, {
              scope: r,
              placedSide: P,
              onArrowChange: x,
              arrowX: q,
              arrowY: L,
              shouldHideArrow: Q,
              children: (0, T.jsx)(et.div, {
                "data-side": P,
                "data-align": A,
                ...v,
                ref: b,
                style: { ...v.style, animation: N ? void 0 : "none" },
              }),
            }),
          })
        );
      });
    eB.displayName = eV;
    var eU = "PopperArrow",
      e$ = { top: "bottom", right: "left", bottom: "top", left: "right" },
      eK = $.forwardRef(function (e, t) {
        let { __scopePopper: r, ...n } = e,
          i = eW(eU, r),
          o = e$[i.placedSide];
        return (0,
        T.jsx)("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [o]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: (0, T.jsx)(ej, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
      });
    function eH(e) {
      return null !== e;
    }
    eK.displayName = eU;
    var eY = (e) => ({
      name: "transformOrigin",
      options: e,
      fn(t) {
        let { placement: r, rects: n, middlewareData: i } = t,
          o = i.arrow?.centerOffset !== 0,
          a = o ? 0 : e.arrowWidth,
          s = o ? 0 : e.arrowHeight,
          [u, c] = eG(r),
          l = { start: "0%", center: "50%", end: "100%" }[c],
          d = (i.arrow?.x ?? 0) + a / 2,
          f = (i.arrow?.y ?? 0) + s / 2,
          h = "",
          p = "";
        return (
          "bottom" === u
            ? ((h = o ? l : `${d}px`), (p = `${-s}px`))
            : "top" === u
            ? ((h = o ? l : `${d}px`), (p = `${n.floating.height + s}px`))
            : "right" === u
            ? ((h = `${-s}px`), (p = o ? l : `${f}px`))
            : "left" === u &&
              ((h = `${n.floating.width + s}px`), (p = o ? l : `${f}px`)),
          { data: { x: h, y: p } }
        );
      },
    });
    function eG(e) {
      let [t, r = "center"] = e.split("-");
      return [t, r];
    }
    var eJ = $.forwardRef((e, t) => {
      let { container: r, ...n } = e,
        [i, o] = $.useState(!1);
      G(() => o(!0), []);
      let a = r || (i && globalThis?.document?.body);
      return a
        ? Z.default.createPortal((0, T.jsx)(et.div, { ...n, ref: t }), a)
        : null;
    });
    eJ.displayName = "Portal";
    var eX = (e) => {
      var t;
      let r,
        n,
        { present: i, children: o } = e,
        a = (function (e) {
          var t, r;
          let [n, i] = $.useState(),
            o = $.useRef(null),
            a = $.useRef(e),
            s = $.useRef("none"),
            [u, c] =
              ((t = e ? "mounted" : "unmounted"),
              (r = {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended",
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted",
                },
                unmounted: { MOUNT: "mounted" },
              }),
              $.useReducer((e, t) => r[e][t] ?? e, t));
          return (
            $.useEffect(() => {
              let e = eZ(o.current);
              s.current = "mounted" === u ? e : "none";
            }, [u]),
            G(() => {
              let t = o.current,
                r = a.current;
              if (r !== e) {
                let n = s.current,
                  i = eZ(t);
                e
                  ? c("MOUNT")
                  : "none" === i || t?.display === "none"
                  ? c("UNMOUNT")
                  : r && n !== i
                  ? c("ANIMATION_OUT")
                  : c("UNMOUNT"),
                  (a.current = e);
              }
            }, [e, c]),
            G(() => {
              if (n) {
                let e,
                  t = n.ownerDocument.defaultView ?? window,
                  r = (r) => {
                    let i = eZ(o.current).includes(CSS.escape(r.animationName));
                    if (
                      r.target === n &&
                      i &&
                      (c("ANIMATION_END"), !a.current)
                    ) {
                      let r = n.style.animationFillMode;
                      (n.style.animationFillMode = "forwards"),
                        (e = t.setTimeout(() => {
                          "forwards" === n.style.animationFillMode &&
                            (n.style.animationFillMode = r);
                        }));
                    }
                  },
                  i = (e) => {
                    e.target === n && (s.current = eZ(o.current));
                  };
                return (
                  n.addEventListener("animationstart", i),
                  n.addEventListener("animationcancel", r),
                  n.addEventListener("animationend", r),
                  () => {
                    t.clearTimeout(e),
                      n.removeEventListener("animationstart", i),
                      n.removeEventListener("animationcancel", r),
                      n.removeEventListener("animationend", r);
                  }
                );
              }
              c("ANIMATION_END");
            }, [n, c]),
            {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: $.useCallback((e) => {
                (o.current = e ? getComputedStyle(e) : null), i(e);
              }, []),
            }
          );
        })(i),
        s =
          "function" == typeof o
            ? o({ present: a.isPresent })
            : $.Children.only(o),
        u = (0, H.useComposedRefs)(
          a.ref,
          ((t = s),
          (n =
            (r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) &&
            "isReactWarning" in r &&
            r.isReactWarning)
            ? t.ref
            : (n =
                (r = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
                "isReactWarning" in r &&
                r.isReactWarning)
            ? t.props.ref
            : t.props.ref || t.ref)
        );
      return "function" == typeof o || a.isPresent
        ? $.cloneElement(s, { ref: u })
        : null;
    };
    function eZ(e) {
      return e?.animationName || "none";
    }
    eX.displayName = "Presence";
    var e0 = "rovingFocusGroup.onEntryFocus",
      e1 = { bubbles: !1, cancelable: !0 },
      e2 = "RovingFocusGroup",
      [e3, e4, e6] = en(e2),
      [e5, e8] = Y(e2, [e6]),
      [e7, e9] = e5(e2),
      te = $.forwardRef((e, t) =>
        (0, T.jsx)(e3.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, T.jsx)(e3.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, T.jsx)(tt, { ...e, ref: t }),
          }),
        })
      );
    te.displayName = e2;
    var tt = $.forwardRef((e, t) => {
        let {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: i = !1,
            dir: o,
            currentTabStopId: a,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: u,
            onEntryFocus: c,
            preventScrollOnEntryFocus: l = !1,
            ...d
          } = e,
          f = $.useRef(null),
          h = (0, H.useComposedRefs)(t, f),
          p = eu(o),
          [v, m] = X({
            prop: a,
            defaultProp: s ?? null,
            onChange: u,
            caller: e2,
          }),
          [y, g] = $.useState(!1),
          b = ec(c),
          w = e4(r),
          x = $.useRef(!1),
          [E, O] = $.useState(0);
        return (
          $.useEffect(() => {
            let e = f.current;
            if (e)
              return (
                e.addEventListener(e0, b), () => e.removeEventListener(e0, b)
              );
          }, [b]),
          (0, T.jsx)(e7, {
            scope: r,
            orientation: n,
            dir: p,
            loop: i,
            currentTabStopId: v,
            onItemFocus: $.useCallback((e) => m(e), [m]),
            onItemShiftTab: $.useCallback(() => g(!0), []),
            onFocusableItemAdd: $.useCallback(() => O((e) => e + 1), []),
            onFocusableItemRemove: $.useCallback(() => O((e) => e - 1), []),
            children: (0, T.jsx)(et.div, {
              tabIndex: y || 0 === E ? -1 : 0,
              "data-orientation": n,
              ...d,
              ref: h,
              style: { outline: "none", ...e.style },
              onMouseDown: K(e.onMouseDown, () => {
                x.current = !0;
              }),
              onFocus: K(e.onFocus, (e) => {
                let t = !x.current;
                if (e.target === e.currentTarget && t && !y) {
                  let t = new CustomEvent(e0, e1);
                  if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                    let e = w().filter((e) => e.focusable);
                    to(
                      [e.find((e) => e.active), e.find((e) => e.id === v), ...e]
                        .filter(Boolean)
                        .map((e) => e.ref.current),
                      l
                    );
                  }
                }
                x.current = !1;
              }),
              onBlur: K(e.onBlur, () => g(!1)),
            }),
          })
        );
      }),
      tr = "RovingFocusGroupItem",
      tn = $.forwardRef((e, t) => {
        let {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: i = !1,
            tabStopId: o,
            children: a,
            ...s
          } = e,
          u = eR(),
          c = o || u,
          l = e9(tr, r),
          d = l.currentTabStopId === c,
          f = e4(r),
          {
            onFocusableItemAdd: h,
            onFocusableItemRemove: p,
            currentTabStopId: v,
          } = l;
        return (
          $.useEffect(() => {
            if (n) return h(), () => p();
          }, [n, h, p]),
          (0, T.jsx)(e3.ItemSlot, {
            scope: r,
            id: c,
            focusable: n,
            active: i,
            children: (0, T.jsx)(et.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": l.orientation,
              ...s,
              ref: t,
              onMouseDown: K(e.onMouseDown, (e) => {
                n ? l.onItemFocus(c) : e.preventDefault();
              }),
              onFocus: K(e.onFocus, () => l.onItemFocus(c)),
              onKeyDown: K(e.onKeyDown, (e) => {
                if ("Tab" === e.key && e.shiftKey)
                  return void l.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                let t = (function (e, t, r) {
                  var n;
                  let i =
                    ((n = e.key),
                    "rtl" !== r
                      ? n
                      : "ArrowLeft" === n
                      ? "ArrowRight"
                      : "ArrowRight" === n
                      ? "ArrowLeft"
                      : n);
                  if (
                    !(
                      "vertical" === t &&
                      ["ArrowLeft", "ArrowRight"].includes(i)
                    ) &&
                    !(
                      "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(i)
                    )
                  )
                    return ti[i];
                })(e, l.orientation, l.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  let i = f()
                    .filter((e) => e.focusable)
                    .map((e) => e.ref.current);
                  if ("last" === t) i.reverse();
                  else if ("prev" === t || "next" === t) {
                    var r, n;
                    "prev" === t && i.reverse();
                    let o = i.indexOf(e.currentTarget);
                    i = l.loop
                      ? ((r = i),
                        (n = o + 1),
                        r.map((e, t) => r[(n + t) % r.length]))
                      : i.slice(o + 1);
                  }
                  setTimeout(() => to(i));
                }
              }),
              children:
                "function" == typeof a
                  ? a({ isCurrentTabStop: d, hasTabStop: null != v })
                  : a,
            }),
          })
        );
      });
    tn.displayName = tr;
    var ti = {
      ArrowLeft: "prev",
      ArrowUp: "prev",
      ArrowRight: "next",
      ArrowDown: "next",
      PageUp: "first",
      Home: "first",
      PageDown: "last",
      End: "last",
    };
    function to(e, t = !1) {
      let r = document.activeElement;
      for (let n of e)
        if (
          n === r ||
          (n.focus({ preventScroll: t }), document.activeElement !== r)
        )
          return;
    }
    var ta = new WeakMap(),
      ts = new WeakMap(),
      tu = {},
      tc = 0,
      tl = function (e) {
        return e && (e.host || tl(e.parentNode));
      },
      td = function (e, t, r, n) {
        var i = (Array.isArray(e) ? e : [e])
          .map(function (e) {
            if (t.contains(e)) return e;
            var r = tl(e);
            return r && t.contains(r)
              ? r
              : (console.error(
                  "aria-hidden",
                  e,
                  "in not contained inside",
                  t,
                  ". Doing nothing"
                ),
                null);
          })
          .filter(function (e) {
            return !!e;
          });
        tu[r] || (tu[r] = new WeakMap());
        var o = tu[r],
          a = [],
          s = new Set(),
          u = new Set(i),
          c = function (e) {
            !e || s.has(e) || (s.add(e), c(e.parentNode));
          };
        i.forEach(c);
        var l = function (e) {
          !e ||
            u.has(e) ||
            Array.prototype.forEach.call(e.children, function (e) {
              if (s.has(e)) l(e);
              else
                try {
                  var t = e.getAttribute(n),
                    i = null !== t && "false" !== t,
                    u = (ta.get(e) || 0) + 1,
                    c = (o.get(e) || 0) + 1;
                  ta.set(e, u),
                    o.set(e, c),
                    a.push(e),
                    1 === u && i && ts.set(e, !0),
                    1 === c && e.setAttribute(r, "true"),
                    i || e.setAttribute(n, "true");
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t);
                }
            });
        };
        return (
          l(t),
          s.clear(),
          tc++,
          function () {
            a.forEach(function (e) {
              var t = ta.get(e) - 1,
                i = o.get(e) - 1;
              ta.set(e, t),
                o.set(e, i),
                t || (ts.has(e) || e.removeAttribute(n), ts.delete(e)),
                i || e.removeAttribute(r);
            }),
              --tc ||
                ((ta = new WeakMap()),
                (ta = new WeakMap()),
                (ts = new WeakMap()),
                (tu = {}));
          }
        );
      },
      tf = function (e, t, r) {
        void 0 === r && (r = "data-aria-hidden");
        var n = Array.from(Array.isArray(e) ? e : [e]),
          i =
            t ||
            ("u" < typeof document
              ? null
              : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return i
          ? (n.push.apply(
              n,
              Array.from(i.querySelectorAll("[aria-live], script"))
            ),
            td(n, i, r, "aria-hidden"))
          : function () {
              return null;
            };
      },
      th = function (e, t) {
        return (th =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
    function tp(e, t) {
      if ("function" != typeof t && null !== t)
        throw TypeError(
          "Class extends value " + String(t) + " is not a constructor or null"
        );
      function r() {
        this.constructor = e;
      }
      th(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    }
    var tv = function () {
      return (tv =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    function tm(e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          0 > t.indexOf(n) &&
          (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
          0 > t.indexOf(n[i]) &&
            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
            (r[n[i]] = e[n[i]]);
      return r;
    }
    function ty(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function a(e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value) instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })
              ).then(a, s);
        }
        u((n = n.apply(e, t || [])).next());
      });
    }
    function tg(e, t) {
      var r,
        n,
        i,
        o = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        a = Object.create(
          ("function" == typeof Iterator ? Iterator : Object).prototype
        );
      return (
        (a.next = s(0)),
        (a.throw = s(1)),
        (a.return = s(2)),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(s) {
        return function (u) {
          var c = [s, u];
          if (r) throw TypeError("Generator is already executing.");
          for (; a && ((a = 0), c[0] && (o = 0)), o; )
            try {
              if (
                ((r = 1),
                n &&
                  (i =
                    2 & c[0]
                      ? n.return
                      : c[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, c[1])).done)
              )
                return i;
              switch (((n = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                case 0:
                case 1:
                  i = c;
                  break;
                case 4:
                  return o.label++, { value: c[1], done: !1 };
                case 5:
                  o.label++, (n = c[1]), (c = [0]);
                  continue;
                case 7:
                  (c = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                    (6 === c[0] || 2 === c[0])
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                    o.label = c[1];
                    break;
                  }
                  if (6 === c[0] && o.label < i[1]) {
                    (o.label = i[1]), (i = c);
                    break;
                  }
                  if (i && o.label < i[2]) {
                    (o.label = i[2]), o.ops.push(c);
                    break;
                  }
                  i[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              c = t.call(e, o);
            } catch (e) {
              (c = [6, e]), (n = 0);
            } finally {
              r = i = 0;
            }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        };
      }
    }
    function tb(e, t, r) {
      if (r || 2 == arguments.length)
        for (var n, i = 0, o = t.length; i < o; i++)
          (!n && i in t) ||
            (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
      return e.concat(n || Array.prototype.slice.call(t));
    }
    var tw =
        ("function" == typeof SuppressedError && SuppressedError,
        "right-scroll-bar-position"),
      tx = "width-before-scroll-bar";
    function tE(e, t) {
      return "function" == typeof e ? e(t) : e && (e.current = t), e;
    }
    var tO = "u" > typeof window ? $.useLayoutEffect : $.useEffect,
      tS = new WeakMap(),
      tk =
        (void 0 === u && (u = {}),
        ((void 0 === c &&
          (c = function (e) {
            return e;
          }),
        (l = []),
        (d = !1),
        (f = {
          read: function () {
            if (d)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return l.length ? l[l.length - 1] : null;
          },
          useMedium: function (e) {
            var t = c(e, d);
            return (
              l.push(t),
              function () {
                l = l.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (d = !0; l.length; ) {
              var t = l;
              (l = []), t.forEach(e);
            }
            l = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return l;
              },
            };
          },
          assignMedium: function (e) {
            d = !0;
            var t = [];
            if (l.length) {
              var r = l;
              (l = []), r.forEach(e), (t = l);
            }
            var n = function () {
                var r = t;
                (t = []), r.forEach(e);
              },
              i = function () {
                return Promise.resolve().then(n);
              };
            i(),
              (l = {
                push: function (e) {
                  t.push(e), i();
                },
                filter: function (e) {
                  return (t = t.filter(e)), l;
                },
              });
          },
        })).options = tv({ async: !0, ssr: !1 }, u)),
        f),
      t_ = function () {},
      tC = $.forwardRef(function (e, t) {
        var r,
          n,
          i,
          o,
          a = $.useRef(null),
          s = $.useState({
            onScrollCapture: t_,
            onWheelCapture: t_,
            onTouchMoveCapture: t_,
          }),
          u = s[0],
          c = s[1],
          l = e.forwardProps,
          d = e.children,
          f = e.className,
          h = e.removeScrollBar,
          p = e.enabled,
          v = e.shards,
          m = e.sideCar,
          y = e.noRelative,
          g = e.noIsolation,
          b = e.inert,
          w = e.allowPinchZoom,
          x = e.as,
          E = e.gapMode,
          O = tm(e, [
            "forwardProps",
            "children",
            "className",
            "removeScrollBar",
            "enabled",
            "shards",
            "sideCar",
            "noRelative",
            "noIsolation",
            "inert",
            "allowPinchZoom",
            "as",
            "gapMode",
          ]),
          S =
            ((r = [a, t]),
            (n = function (e) {
              return r.forEach(function (t) {
                return tE(t, e);
              });
            }),
            ((i = (0, $.useState)(function () {
              return {
                value: null,
                callback: n,
                facade: {
                  get current() {
                    return i.value;
                  },
                  set current(value) {
                    var e = i.value;
                    e !== value && ((i.value = value), i.callback(value, e));
                  },
                },
              };
            })[0]).callback = n),
            (o = i.facade),
            tO(
              function () {
                var e = tS.get(o);
                if (e) {
                  var t = new Set(e),
                    n = new Set(r),
                    i = o.current;
                  t.forEach(function (e) {
                    n.has(e) || tE(e, null);
                  }),
                    n.forEach(function (e) {
                      t.has(e) || tE(e, i);
                    });
                }
                tS.set(o, r);
              },
              [r]
            ),
            o),
          k = tv(tv({}, O), u);
        return $.createElement(
          $.Fragment,
          null,
          p &&
            $.createElement(m, {
              sideCar: tk,
              removeScrollBar: h,
              shards: v,
              noRelative: y,
              noIsolation: g,
              inert: b,
              setCallbacks: c,
              allowPinchZoom: !!w,
              lockRef: a,
              gapMode: E,
            }),
          l
            ? $.cloneElement($.Children.only(d), tv(tv({}, k), { ref: S }))
            : $.createElement(
                void 0 === x ? "div" : x,
                tv({}, k, { className: f, ref: S }),
                d
              )
        );
      });
    (tC.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (tC.classNames = { fullWidth: tx, zeroRight: tw });
    var tT = function (e) {
      var t = e.sideCar,
        r = tm(e, ["sideCar"]);
      if (!t)
        throw Error(
          "Sidecar: please provide `sideCar` property to import the right car"
        );
      var n = t.read();
      if (!n) throw Error("Sidecar medium not found");
      return $.createElement(n, tv({}, r));
    };
    tT.isSideCarExport = !0;
    var tR = function () {
        var e = 0,
          t = null;
        return {
          add: function (r) {
            if (
              0 == e &&
              (t = (function () {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t =
                  E ||
                  ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                return t && e.setAttribute("nonce", t), e;
              })())
            ) {
              var n, i;
              (n = t).styleSheet
                ? (n.styleSheet.cssText = r)
                : n.appendChild(document.createTextNode(r)),
                (i = t),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(i);
            }
            e++;
          },
          remove: function () {
            --e ||
              !t ||
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
          },
        };
      },
      tI = function () {
        var e = tR();
        return function (t, r) {
          $.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && r]
          );
        };
      },
      tD = function () {
        var e = tI();
        return function (t) {
          return e(t.styles, t.dynamic), null;
        };
      },
      tj = { left: 0, top: 0, right: 0, gap: 0 },
      tN = function (e) {
        return parseInt(e || "", 10) || 0;
      },
      tM = function (e) {
        var t = window.getComputedStyle(document.body),
          r = t["padding" === e ? "paddingLeft" : "marginLeft"],
          n = t["padding" === e ? "paddingTop" : "marginTop"],
          i = t["padding" === e ? "paddingRight" : "marginRight"];
        return [tN(r), tN(n), tN(i)];
      },
      tP = function (e) {
        if ((void 0 === e && (e = "margin"), "u" < typeof window)) return tj;
        var t = tM(e),
          r = document.documentElement.clientWidth,
          n = window.innerWidth;
        return {
          left: t[0],
          top: t[1],
          right: t[2],
          gap: Math.max(0, n - r + t[2] - t[0]),
        };
      },
      tA = tD(),
      tF = "data-scroll-locked",
      tq = function (e, t, r, n) {
        var i = e.left,
          o = e.top,
          a = e.right,
          s = e.gap;
        return (
          void 0 === r && (r = "margin"),
          "\n  ."
            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
            .concat(n, ";\n   padding-right: ")
            .concat(s, "px ")
            .concat(n, ";\n  }\n  body[")
            .concat(tF, "] {\n    overflow: hidden ")
            .concat(n, ";\n    overscroll-behavior: contain;\n    ")
            .concat(
              [
                t && "position: relative ".concat(n, ";"),
                "margin" === r &&
                  "\n    padding-left: "
                    .concat(i, "px;\n    padding-top: ")
                    .concat(o, "px;\n    padding-right: ")
                    .concat(
                      a,
                      "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                    )
                    .concat(s, "px ")
                    .concat(n, ";\n    "),
                "padding" === r &&
                  "padding-right: ".concat(s, "px ").concat(n, ";"),
              ]
                .filter(Boolean)
                .join(""),
              "\n  }\n  \n  ."
            )
            .concat(tw, " {\n    right: ")
            .concat(s, "px ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(tx, " {\n    margin-right: ")
            .concat(s, "px ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(tw, " .")
            .concat(tw, " {\n    right: 0 ")
            .concat(n, ";\n  }\n  \n  .")
            .concat(tx, " .")
            .concat(tx, " {\n    margin-right: 0 ")
            .concat(n, ";\n  }\n  \n  body[")
            .concat(tF, "] {\n    ")
            .concat("--removed-body-scroll-bar-size", ": ")
            .concat(s, "px;\n  }\n")
        );
      },
      tL = function () {
        var e = parseInt(document.body.getAttribute(tF) || "0", 10);
        return isFinite(e) ? e : 0;
      },
      tQ = function () {
        $.useEffect(function () {
          return (
            document.body.setAttribute(tF, (tL() + 1).toString()),
            function () {
              var e = tL() - 1;
              e <= 0
                ? document.body.removeAttribute(tF)
                : document.body.setAttribute(tF, e.toString());
            }
          );
        }, []);
      },
      tV = function (e) {
        var t = e.noRelative,
          r = e.noImportant,
          n = e.gapMode,
          i = void 0 === n ? "margin" : n;
        tQ();
        var o = $.useMemo(
          function () {
            return tP(i);
          },
          [i]
        );
        return $.createElement(tA, {
          styles: tq(o, !t, i, r ? "" : "!important"),
        });
      },
      tz = !1;
    if ("u" > typeof window)
      try {
        var tW = Object.defineProperty({}, "passive", {
          get: function () {
            return (tz = !0), !0;
          },
        });
        window.addEventListener("test", tW, tW),
          window.removeEventListener("test", tW, tW);
      } catch (e) {
        tz = !1;
      }
    var tB = !!tz && { passive: !1 },
      tU = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var r = window.getComputedStyle(e);
        return (
          "hidden" !== r[t] &&
          (r.overflowY !== r.overflowX ||
            "TEXTAREA" === e.tagName ||
            "visible" !== r[t])
        );
      },
      t$ = function (e, t) {
        var r = t.ownerDocument,
          n = t;
        do {
          if (
            ("u" > typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
            tK(e, n))
          ) {
            var i = tH(e, n);
            if (i[1] > i[2]) return !0;
          }
          n = n.parentNode;
        } while (n && n !== r.body);
        return !1;
      },
      tK = function (e, t) {
        return "v" === e ? tU(t, "overflowY") : tU(t, "overflowX");
      },
      tH = function (e, t) {
        return "v" === e
          ? [t.scrollTop, t.scrollHeight, t.clientHeight]
          : [t.scrollLeft, t.scrollWidth, t.clientWidth];
      },
      tY = function (e, t, r, n, i) {
        var o,
          a =
            ((o = window.getComputedStyle(t).direction),
            "h" === e && "rtl" === o ? -1 : 1),
          s = a * n,
          u = r.target,
          c = t.contains(u),
          l = !1,
          d = s > 0,
          f = 0,
          h = 0;
        do {
          if (!u) break;
          var p = tH(e, u),
            v = p[0],
            m = p[1] - p[2] - a * v;
          (v || m) && tK(e, u) && ((f += m), (h += v));
          var y = u.parentNode;
          u = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
        } while (
          (!c && u !== document.body) ||
          (c && (t.contains(u) || t === u))
        );
        return (
          d && ((i && 1 > Math.abs(f)) || (!i && s > f))
            ? (l = !0)
            : !d && ((i && 1 > Math.abs(h)) || (!i && -s > h)) && (l = !0),
          l
        );
      },
      tG = function (e) {
        return "changedTouches" in e
          ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
          : [0, 0];
      },
      tJ = function (e) {
        return [e.deltaX, e.deltaY];
      },
      tX = function (e) {
        return e && "current" in e ? e.current : e;
      },
      tZ = 0,
      t0 = [];
    let t1 =
      ((h = function (e) {
        var t = $.useRef([]),
          r = $.useRef([0, 0]),
          n = $.useRef(),
          i = $.useState(tZ++)[0],
          o = $.useState(tD)[0],
          a = $.useRef(e);
        $.useEffect(
          function () {
            a.current = e;
          },
          [e]
        ),
          $.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(i));
                var t = tb(
                  [e.lockRef.current],
                  (e.shards || []).map(tX),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(i));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(i)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(i)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = $.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !a.current.allowPinchZoom;
            var i,
              o = tG(e),
              s = r.current,
              u = "deltaX" in e ? e.deltaX : s[0] - o[0],
              c = "deltaY" in e ? e.deltaY : s[1] - o[1],
              l = e.target,
              d = Math.abs(u) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === l.type) return !1;
            var f = window.getSelection(),
              h = f && f.anchorNode;
            if (h && (h === l || h.contains(l))) return !1;
            var p = t$(d, l);
            if (!p) return !0;
            if (
              (p ? (i = d) : ((i = "v" === d ? "h" : "v"), (p = t$(d, l))), !p)
            )
              return !1;
            if (
              (!n.current &&
                "changedTouches" in e &&
                (u || c) &&
                (n.current = i),
              !i)
            )
              return !0;
            var v = n.current || i;
            return tY(v, t, e, "h" === v ? u : c, !0);
          }, []),
          u = $.useCallback(function (e) {
            if (t0.length && t0[t0.length - 1] === o) {
              var r = "deltaY" in e ? tJ(e) : tG(e),
                n = t.current.filter(function (t) {
                  var n;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    ((n = t.delta), n[0] === r[0] && n[1] === r[1])
                  );
                })[0];
              if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!n) {
                var i = (a.current.shards || [])
                  .map(tX)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (i.length > 0 ? s(e, i[0]) : !a.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          c = $.useCallback(function (e, r, n, i) {
            var o = {
              name: e,
              delta: r,
              target: n,
              should: i,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(n),
            };
            t.current.push(o),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== o;
                });
              }, 1);
          }, []),
          l = $.useCallback(function (e) {
            (r.current = tG(e)), (n.current = void 0);
          }, []),
          d = $.useCallback(function (t) {
            c(t.type, tJ(t), t.target, s(t, e.lockRef.current));
          }, []),
          f = $.useCallback(function (t) {
            c(t.type, tG(t), t.target, s(t, e.lockRef.current));
          }, []);
        $.useEffect(function () {
          return (
            t0.push(o),
            e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f,
            }),
            document.addEventListener("wheel", u, tB),
            document.addEventListener("touchmove", u, tB),
            document.addEventListener("touchstart", l, tB),
            function () {
              (t0 = t0.filter(function (e) {
                return e !== o;
              })),
                document.removeEventListener("wheel", u, tB),
                document.removeEventListener("touchmove", u, tB),
                document.removeEventListener("touchstart", l, tB);
            }
          );
        }, []);
        var h = e.removeScrollBar,
          p = e.inert;
        return $.createElement(
          $.Fragment,
          null,
          p
            ? $.createElement(o, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    i,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(i, " {pointer-events: all;}\n"),
              })
            : null,
          h
            ? $.createElement(tV, {
                noRelative: e.noRelative,
                gapMode: e.gapMode,
              })
            : null
        );
      }),
      tk.useMedium(h),
      tT);
    var t2 = $.forwardRef(function (e, t) {
      return $.createElement(tC, tv({}, e, { ref: t, sideCar: t1 }));
    });
    t2.classNames = tC.classNames;
    var t3 = ["Enter", " "],
      t4 = ["ArrowUp", "PageDown", "End"],
      t6 = ["ArrowDown", "PageUp", "Home", ...t4],
      t5 = { ltr: [...t3, "ArrowRight"], rtl: [...t3, "ArrowLeft"] },
      t8 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
      t7 = "Menu",
      [t9, re, rt] = en(t7),
      [rr, rn] = Y(t7, [rt, eP, e8]),
      ri = eP(),
      ro = e8(),
      [ra, rs] = rr(t7),
      [ru, rc] = rr(t7),
      rl = (e) => {
        let {
            __scopeMenu: t,
            open: r = !1,
            children: n,
            dir: i,
            onOpenChange: o,
            modal: a = !0,
          } = e,
          s = ri(t),
          [u, c] = $.useState(null),
          l = $.useRef(!1),
          d = ec(o),
          f = eu(i);
        return (
          $.useEffect(() => {
            let e = () => {
                (l.current = !0),
                  document.addEventListener("pointerdown", t, {
                    capture: !0,
                    once: !0,
                  }),
                  document.addEventListener("pointermove", t, {
                    capture: !0,
                    once: !0,
                  });
              },
              t = () => (l.current = !1);
            return (
              document.addEventListener("keydown", e, { capture: !0 }),
              () => {
                document.removeEventListener("keydown", e, { capture: !0 }),
                  document.removeEventListener("pointerdown", t, {
                    capture: !0,
                  }),
                  document.removeEventListener("pointermove", t, {
                    capture: !0,
                  });
              }
            );
          }, []),
          (0, T.jsx)(eq, {
            ...s,
            children: (0, T.jsx)(ra, {
              scope: t,
              open: r,
              onOpenChange: d,
              content: u,
              onContentChange: c,
              children: (0, T.jsx)(ru, {
                scope: t,
                onClose: $.useCallback(() => d(!1), [d]),
                isUsingKeyboardRef: l,
                dir: f,
                modal: a,
                children: n,
              }),
            }),
          })
        );
      };
    rl.displayName = t7;
    var rd = $.forwardRef((e, t) => {
      let { __scopeMenu: r, ...n } = e,
        i = ri(r);
      return (0, T.jsx)(eQ, { ...i, ...n, ref: t });
    });
    rd.displayName = "MenuAnchor";
    var rf = "MenuPortal",
      [rh, rp] = rr(rf, { forceMount: void 0 }),
      rv = (e) => {
        let { __scopeMenu: t, forceMount: r, children: n, container: i } = e,
          o = rs(rf, t);
        return (0, T.jsx)(rh, {
          scope: t,
          forceMount: r,
          children: (0, T.jsx)(eX, {
            present: r || o.open,
            children: (0, T.jsx)(eJ, {
              asChild: !0,
              container: i,
              children: n,
            }),
          }),
        });
      };
    rv.displayName = rf;
    var rm = "MenuContent",
      [ry, rg] = rr(rm),
      rb = $.forwardRef((e, t) => {
        let r = rp(rm, e.__scopeMenu),
          { forceMount: n = r.forceMount, ...i } = e,
          o = rs(rm, e.__scopeMenu),
          a = rc(rm, e.__scopeMenu);
        return (0, T.jsx)(t9.Provider, {
          scope: e.__scopeMenu,
          children: (0, T.jsx)(eX, {
            present: n || o.open,
            children: (0, T.jsx)(t9.Slot, {
              scope: e.__scopeMenu,
              children: a.modal
                ? (0, T.jsx)(rw, { ...i, ref: t })
                : (0, T.jsx)(rx, { ...i, ref: t }),
            }),
          }),
        });
      }),
      rw = $.forwardRef((e, t) => {
        let r = rs(rm, e.__scopeMenu),
          n = $.useRef(null),
          i = (0, H.useComposedRefs)(t, n);
        return (
          $.useEffect(() => {
            let e = n.current;
            if (e) return tf(e);
          }, []),
          (0, T.jsx)(rO, {
            ...e,
            ref: i,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            disableOutsideScroll: !0,
            onFocusOutside: K(e.onFocusOutside, (e) => e.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
            onDismiss: () => r.onOpenChange(!1),
          })
        );
      }),
      rx = $.forwardRef((e, t) => {
        let r = rs(rm, e.__scopeMenu);
        return (0, T.jsx)(rO, {
          ...e,
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          disableOutsideScroll: !1,
          onDismiss: () => r.onOpenChange(!1),
        });
      }),
      rE = (0, ee.createSlot)("MenuContent.ScrollLock"),
      rO = $.forwardRef((e, t) => {
        let {
            __scopeMenu: r,
            loop: n = !1,
            trapFocus: i,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEntryFocus: u,
            onEscapeKeyDown: c,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onInteractOutside: f,
            onDismiss: h,
            disableOutsideScroll: p,
            ...v
          } = e,
          m = rs(rm, r),
          y = rc(rm, r),
          g = ri(r),
          b = ro(r),
          w = re(r),
          [x, E] = $.useState(null),
          O = $.useRef(null),
          S = (0, H.useComposedRefs)(t, O, m.onContentChange),
          k = $.useRef(0),
          _ = $.useRef(""),
          C = $.useRef(0),
          R = $.useRef(null),
          I = $.useRef("right"),
          D = $.useRef(0),
          j = p ? t2 : $.Fragment;
        $.useEffect(() => () => window.clearTimeout(k.current), []), em();
        let N = $.useCallback((e) => {
          var t, r;
          return (
            I.current === R.current?.side &&
            ((t = e),
            !!(r = R.current?.area) &&
              (function (e, t) {
                let { x: r, y: n } = e,
                  i = !1;
                for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                  let a = t[e],
                    s = t[o],
                    u = a.x,
                    c = a.y,
                    l = s.x,
                    d = s.y;
                  c > n != d > n &&
                    r < ((l - u) * (n - c)) / (d - c) + u &&
                    (i = !i);
                }
                return i;
              })({ x: t.clientX, y: t.clientY }, r))
          );
        }, []);
        return (0, T.jsx)(ry, {
          scope: r,
          searchRef: _,
          onItemEnter: $.useCallback(
            (e) => {
              N(e) && e.preventDefault();
            },
            [N]
          ),
          onItemLeave: $.useCallback(
            (e) => {
              N(e) || (O.current?.focus(), E(null));
            },
            [N]
          ),
          onTriggerLeave: $.useCallback(
            (e) => {
              N(e) && e.preventDefault();
            },
            [N]
          ),
          pointerGraceTimerRef: C,
          onPointerGraceIntentChange: $.useCallback((e) => {
            R.current = e;
          }, []),
          children: (0, T.jsx)(j, {
            ...(p ? { as: rE, allowPinchZoom: !0 } : void 0),
            children: (0, T.jsx)(ex, {
              asChild: !0,
              trapped: i,
              onMountAutoFocus: K(o, (e) => {
                e.preventDefault(), O.current?.focus({ preventScroll: !0 });
              }),
              onUnmountAutoFocus: a,
              children: (0, T.jsx)(ef, {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: d,
                onInteractOutside: f,
                onDismiss: h,
                children: (0, T.jsx)(te, {
                  asChild: !0,
                  ...b,
                  dir: y.dir,
                  orientation: "vertical",
                  loop: n,
                  currentTabStopId: x,
                  onCurrentTabStopIdChange: E,
                  onEntryFocus: K(u, (e) => {
                    y.isUsingKeyboardRef.current || e.preventDefault();
                  }),
                  preventScrollOnEntryFocus: !0,
                  children: (0, T.jsx)(eB, {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": rY(m.open),
                    "data-radix-menu-content": "",
                    dir: y.dir,
                    ...g,
                    ...v,
                    ref: S,
                    style: { outline: "none", ...v.style },
                    onKeyDown: K(v.onKeyDown, (e) => {
                      let t =
                          e.target.closest("[data-radix-menu-content]") ===
                          e.currentTarget,
                        r = e.ctrlKey || e.altKey || e.metaKey,
                        n = 1 === e.key.length;
                      if (t) {
                        var i;
                        let t, o, a, s, u, c;
                        "Tab" === e.key && e.preventDefault(),
                          !r &&
                            n &&
                            ((i = e.key),
                            (t = _.current + i),
                            (o = w().filter((e) => !e.disabled)),
                            (a = document.activeElement),
                            (s = o.find((e) => e.ref.current === a)?.textValue),
                            (u = (function (e, t, r) {
                              var n;
                              let i =
                                  t.length > 1 &&
                                  Array.from(t).every((e) => e === t[0])
                                    ? t[0]
                                    : t,
                                o = r ? e.indexOf(r) : -1,
                                a =
                                  ((n = Math.max(o, 0)),
                                  e.map((t, r) => e[(n + r) % e.length]));
                              1 === i.length && (a = a.filter((e) => e !== r));
                              let s = a.find((e) =>
                                e.toLowerCase().startsWith(i.toLowerCase())
                              );
                              return s !== r ? s : void 0;
                            })(
                              o.map((e) => e.textValue),
                              t,
                              s
                            )),
                            (c = o.find((e) => e.textValue === u)?.ref.current),
                            (function e(t) {
                              (_.current = t),
                                window.clearTimeout(k.current),
                                "" !== t &&
                                  (k.current = window.setTimeout(
                                    () => e(""),
                                    1e3
                                  ));
                            })(t),
                            c && setTimeout(() => c.focus()));
                      }
                      let o = O.current;
                      if (e.target !== o || !t6.includes(e.key)) return;
                      e.preventDefault();
                      let a = w()
                        .filter((e) => !e.disabled)
                        .map((e) => e.ref.current);
                      t4.includes(e.key) && a.reverse(),
                        (function (e) {
                          let t = document.activeElement;
                          for (let r of e)
                            if (
                              r === t ||
                              (r.focus(), document.activeElement !== t)
                            )
                              return;
                        })(a);
                    }),
                    onBlur: K(e.onBlur, (e) => {
                      e.currentTarget.contains(e.target) ||
                        (window.clearTimeout(k.current), (_.current = ""));
                    }),
                    onPointerMove: K(
                      e.onPointerMove,
                      rX((e) => {
                        let t = e.target,
                          r = D.current !== e.clientX;
                        e.currentTarget.contains(t) &&
                          r &&
                          ((I.current =
                            e.clientX > D.current ? "right" : "left"),
                          (D.current = e.clientX));
                      })
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      });
    rb.displayName = rm;
    var rS = $.forwardRef((e, t) => {
      let { __scopeMenu: r, ...n } = e;
      return (0, T.jsx)(et.div, { role: "group", ...n, ref: t });
    });
    rS.displayName = "MenuGroup";
    var rk = $.forwardRef((e, t) => {
      let { __scopeMenu: r, ...n } = e;
      return (0, T.jsx)(et.div, { ...n, ref: t });
    });
    rk.displayName = "MenuLabel";
    var r_ = "MenuItem",
      rC = "menu.itemSelect",
      rT = $.forwardRef((e, t) => {
        let { disabled: r = !1, onSelect: n, ...i } = e,
          o = $.useRef(null),
          a = rc(r_, e.__scopeMenu),
          s = rg(r_, e.__scopeMenu),
          u = (0, H.useComposedRefs)(t, o),
          c = $.useRef(!1);
        return (0, T.jsx)(rR, {
          ...i,
          ref: u,
          disabled: r,
          onClick: K(e.onClick, () => {
            let e = o.current;
            if (!r && e) {
              let t = new CustomEvent(rC, { bubbles: !0, cancelable: !0 });
              e.addEventListener(rC, (e) => n?.(e), { once: !0 }),
                er(e, t),
                t.defaultPrevented ? (c.current = !1) : a.onClose();
            }
          }),
          onPointerDown: (t) => {
            e.onPointerDown?.(t), (c.current = !0);
          },
          onPointerUp: K(e.onPointerUp, (e) => {
            c.current || e.currentTarget?.click();
          }),
          onKeyDown: K(e.onKeyDown, (e) => {
            let t = "" !== s.searchRef.current;
            r ||
              (t && " " === e.key) ||
              (t3.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault()));
          }),
        });
      });
    rT.displayName = r_;
    var rR = $.forwardRef((e, t) => {
        let { __scopeMenu: r, disabled: n = !1, textValue: i, ...o } = e,
          a = rg(r_, r),
          s = ro(r),
          u = $.useRef(null),
          c = (0, H.useComposedRefs)(t, u),
          [l, d] = $.useState(!1),
          [f, h] = $.useState("");
        return (
          $.useEffect(() => {
            let e = u.current;
            e && h((e.textContent ?? "").trim());
          }, [o.children]),
          (0, T.jsx)(t9.ItemSlot, {
            scope: r,
            disabled: n,
            textValue: i ?? f,
            children: (0, T.jsx)(tn, {
              asChild: !0,
              ...s,
              focusable: !n,
              children: (0, T.jsx)(et.div, {
                role: "menuitem",
                "data-highlighted": l ? "" : void 0,
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                ...o,
                ref: c,
                onPointerMove: K(
                  e.onPointerMove,
                  rX((e) => {
                    n
                      ? a.onItemLeave(e)
                      : (a.onItemEnter(e),
                        e.defaultPrevented ||
                          e.currentTarget.focus({ preventScroll: !0 }));
                  })
                ),
                onPointerLeave: K(
                  e.onPointerLeave,
                  rX((e) => a.onItemLeave(e))
                ),
                onFocus: K(e.onFocus, () => d(!0)),
                onBlur: K(e.onBlur, () => d(!1)),
              }),
            }),
          })
        );
      }),
      rI = $.forwardRef((e, t) => {
        let { checked: r = !1, onCheckedChange: n, ...i } = e;
        return (0, T.jsx)(rq, {
          scope: e.__scopeMenu,
          checked: r,
          children: (0, T.jsx)(rT, {
            role: "menuitemcheckbox",
            "aria-checked": rG(r) ? "mixed" : r,
            ...i,
            ref: t,
            "data-state": rJ(r),
            onSelect: K(i.onSelect, () => n?.(!!rG(r) || !r), {
              checkForDefaultPrevented: !1,
            }),
          }),
        });
      });
    rI.displayName = "MenuCheckboxItem";
    var rD = "MenuRadioGroup",
      [rj, rN] = rr(rD, { value: void 0, onValueChange: () => {} }),
      rM = $.forwardRef((e, t) => {
        let { value: r, onValueChange: n, ...i } = e,
          o = ec(n);
        return (0, T.jsx)(rj, {
          scope: e.__scopeMenu,
          value: r,
          onValueChange: o,
          children: (0, T.jsx)(rS, { ...i, ref: t }),
        });
      });
    rM.displayName = rD;
    var rP = "MenuRadioItem",
      rA = $.forwardRef((e, t) => {
        let { value: r, ...n } = e,
          i = rN(rP, e.__scopeMenu),
          o = r === i.value;
        return (0, T.jsx)(rq, {
          scope: e.__scopeMenu,
          checked: o,
          children: (0, T.jsx)(rT, {
            role: "menuitemradio",
            "aria-checked": o,
            ...n,
            ref: t,
            "data-state": rJ(o),
            onSelect: K(n.onSelect, () => i.onValueChange?.(r), {
              checkForDefaultPrevented: !1,
            }),
          }),
        });
      });
    rA.displayName = rP;
    var rF = "MenuItemIndicator",
      [rq, rL] = rr(rF, { checked: !1 }),
      rQ = $.forwardRef((e, t) => {
        let { __scopeMenu: r, forceMount: n, ...i } = e,
          o = rL(rF, r);
        return (0, T.jsx)(eX, {
          present: n || rG(o.checked) || !0 === o.checked,
          children: (0, T.jsx)(et.span, {
            ...i,
            ref: t,
            "data-state": rJ(o.checked),
          }),
        });
      });
    rQ.displayName = rF;
    var rV = $.forwardRef((e, t) => {
      let { __scopeMenu: r, ...n } = e;
      return (0, T.jsx)(et.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t,
      });
    });
    rV.displayName = "MenuSeparator";
    var rz = $.forwardRef((e, t) => {
      let { __scopeMenu: r, ...n } = e,
        i = ri(r);
      return (0, T.jsx)(eK, { ...i, ...n, ref: t });
    });
    rz.displayName = "MenuArrow";
    var [rW, rB] = rr("MenuSub"),
      rU = "MenuSubTrigger",
      r$ = $.forwardRef((e, t) => {
        let r = rs(rU, e.__scopeMenu),
          n = rc(rU, e.__scopeMenu),
          i = rB(rU, e.__scopeMenu),
          o = rg(rU, e.__scopeMenu),
          a = $.useRef(null),
          { pointerGraceTimerRef: s, onPointerGraceIntentChange: u } = o,
          c = { __scopeMenu: e.__scopeMenu },
          l = $.useCallback(() => {
            a.current && window.clearTimeout(a.current), (a.current = null);
          }, []);
        return (
          $.useEffect(() => l, [l]),
          $.useEffect(() => {
            let e = s.current;
            return () => {
              window.clearTimeout(e), u(null);
            };
          }, [s, u]),
          (0, T.jsx)(rd, {
            asChild: !0,
            ...c,
            children: (0, T.jsx)(rR, {
              id: i.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": r.open,
              "aria-controls": i.contentId,
              "data-state": rY(r.open),
              ...e,
              ref: (0, H.composeRefs)(t, i.onTriggerChange),
              onClick: (t) => {
                e.onClick?.(t),
                  e.disabled ||
                    t.defaultPrevented ||
                    (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
              },
              onPointerMove: K(
                e.onPointerMove,
                rX((t) => {
                  o.onItemEnter(t),
                    !t.defaultPrevented &&
                      (e.disabled ||
                        r.open ||
                        a.current ||
                        (o.onPointerGraceIntentChange(null),
                        (a.current = window.setTimeout(() => {
                          r.onOpenChange(!0), l();
                        }, 100))));
                })
              ),
              onPointerLeave: K(
                e.onPointerLeave,
                rX((e) => {
                  l();
                  let t = r.content?.getBoundingClientRect();
                  if (t) {
                    let n = r.content?.dataset.side,
                      i = "right" === n,
                      a = t[i ? "left" : "right"],
                      u = t[i ? "right" : "left"];
                    o.onPointerGraceIntentChange({
                      area: [
                        { x: e.clientX + (i ? -5 : 5), y: e.clientY },
                        { x: a, y: t.top },
                        { x: u, y: t.top },
                        { x: u, y: t.bottom },
                        { x: a, y: t.bottom },
                      ],
                      side: n,
                    }),
                      window.clearTimeout(s.current),
                      (s.current = window.setTimeout(
                        () => o.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((o.onTriggerLeave(e), e.defaultPrevented)) return;
                    o.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: K(e.onKeyDown, (t) => {
                let i = "" !== o.searchRef.current;
                e.disabled ||
                  (i && " " === t.key) ||
                  (t5[n.dir].includes(t.key) &&
                    (r.onOpenChange(!0),
                    r.content?.focus(),
                    t.preventDefault()));
              }),
            }),
          })
        );
      });
    r$.displayName = rU;
    var rK = "MenuSubContent",
      rH = $.forwardRef((e, t) => {
        let r = rp(rm, e.__scopeMenu),
          { forceMount: n = r.forceMount, ...i } = e,
          o = rs(rm, e.__scopeMenu),
          a = rc(rm, e.__scopeMenu),
          s = rB(rK, e.__scopeMenu),
          u = $.useRef(null),
          c = (0, H.useComposedRefs)(t, u);
        return (0, T.jsx)(t9.Provider, {
          scope: e.__scopeMenu,
          children: (0, T.jsx)(eX, {
            present: n || o.open,
            children: (0, T.jsx)(t9.Slot, {
              scope: e.__scopeMenu,
              children: (0, T.jsx)(rO, {
                id: s.contentId,
                "aria-labelledby": s.triggerId,
                ...i,
                ref: c,
                align: "start",
                side: "rtl" === a.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: (e) => {
                  a.isUsingKeyboardRef.current && u.current?.focus(),
                    e.preventDefault();
                },
                onCloseAutoFocus: (e) => e.preventDefault(),
                onFocusOutside: K(e.onFocusOutside, (e) => {
                  e.target !== s.trigger && o.onOpenChange(!1);
                }),
                onEscapeKeyDown: K(e.onEscapeKeyDown, (e) => {
                  a.onClose(), e.preventDefault();
                }),
                onKeyDown: K(e.onKeyDown, (e) => {
                  let t = e.currentTarget.contains(e.target),
                    r = t8[a.dir].includes(e.key);
                  t &&
                    r &&
                    (o.onOpenChange(!1),
                    s.trigger?.focus(),
                    e.preventDefault());
                }),
              }),
            }),
          }),
        });
      });
    function rY(e) {
      return e ? "open" : "closed";
    }
    function rG(e) {
      return "indeterminate" === e;
    }
    function rJ(e) {
      return rG(e) ? "indeterminate" : e ? "checked" : "unchecked";
    }
    function rX(e) {
      return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
    }
    rH.displayName = rK;
    var rZ = "DropdownMenu",
      [r0, r1] = Y(rZ, [rn]),
      r2 = rn(),
      [r3, r4] = r0(rZ),
      r6 = (e) => {
        let {
            __scopeDropdownMenu: t,
            children: r,
            dir: n,
            open: i,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !0,
          } = e,
          u = r2(t),
          c = $.useRef(null),
          [l, d] = X({
            prop: i,
            defaultProp: o ?? !1,
            onChange: a,
            caller: rZ,
          });
        return (0, T.jsx)(r3, {
          scope: t,
          triggerId: eR(),
          triggerRef: c,
          contentId: eR(),
          open: l,
          onOpenChange: d,
          onOpenToggle: $.useCallback(() => d((e) => !e), [d]),
          modal: s,
          children: (0, T.jsx)(rl, {
            ...u,
            open: l,
            onOpenChange: d,
            dir: n,
            modal: s,
            children: r,
          }),
        });
      };
    r6.displayName = rZ;
    var r5 = "DropdownMenuTrigger",
      r8 = $.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, disabled: n = !1, ...i } = e,
          o = r4(r5, r),
          a = r2(r);
        return (0, T.jsx)(rd, {
          asChild: !0,
          ...a,
          children: (0, T.jsx)(et.button, {
            type: "button",
            id: o.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": o.open ? "open" : "closed",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            ...i,
            ref: (0, H.composeRefs)(t, o.triggerRef),
            onPointerDown: K(e.onPointerDown, (e) => {
              !n &&
                0 === e.button &&
                !1 === e.ctrlKey &&
                (o.onOpenToggle(), o.open || e.preventDefault());
            }),
            onKeyDown: K(e.onKeyDown, (e) => {
              !n &&
                (["Enter", " "].includes(e.key) && o.onOpenToggle(),
                "ArrowDown" === e.key && o.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(e.key) &&
                  e.preventDefault());
            }),
          }),
        });
      });
    r8.displayName = r5;
    var r7 = (e) => {
      let { __scopeDropdownMenu: t, ...r } = e,
        n = r2(t);
      return (0, T.jsx)(rv, { ...n, ...r });
    };
    r7.displayName = "DropdownMenuPortal";
    var r9 = "DropdownMenuContent",
      ne = $.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r4(r9, r),
          o = r2(r),
          a = $.useRef(!1);
        return (0, T.jsx)(rb, {
          id: i.contentId,
          "aria-labelledby": i.triggerId,
          ...o,
          ...n,
          ref: t,
          onCloseAutoFocus: K(e.onCloseAutoFocus, (e) => {
            a.current || i.triggerRef.current?.focus(),
              (a.current = !1),
              e.preventDefault();
          }),
          onInteractOutside: K(e.onInteractOutside, (e) => {
            let t = e.detail.originalEvent,
              r = 0 === t.button && !0 === t.ctrlKey,
              n = 2 === t.button || r;
            (!i.modal || n) && (a.current = !0);
          }),
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
    (ne.displayName = r9),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rS, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuGroup"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rk, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuLabel");
    var nt = $.forwardRef((e, t) => {
      let { __scopeDropdownMenu: r, ...n } = e,
        i = r2(r);
      return (0, T.jsx)(rT, { ...i, ...n, ref: t });
    });
    (nt.displayName = "DropdownMenuItem"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rI, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuCheckboxItem"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rM, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuRadioGroup"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rA, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuRadioItem"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rQ, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuItemIndicator"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rV, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuSeparator"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rz, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuArrow"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(r$, { ...i, ...n, ref: t });
      }).displayName = "DropdownMenuSubTrigger"),
      ($.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          i = r2(r);
        return (0, T.jsx)(rH, {
          ...i,
          ...n,
          ref: t,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      }).displayName = "DropdownMenuSubContent");
    var nr = e.i(224589);
    (0, nr.default)("check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]),
      e.i(659011),
      (0, nr.default)("circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    var nn = e.i(152236);
    function ni({ ...e }) {
      return (0, T.jsx)(r6, { "data-slot": "dropdown-menu", ...e });
    }
    function no({ ...e }) {
      return (0, T.jsx)(r8, { "data-slot": "dropdown-menu-trigger", ...e });
    }
    function na({ className: e, sideOffset: t = 4, ...r }) {
      return (0, T.jsx)(r7, {
        children: (0, T.jsx)(ne, {
          "data-slot": "dropdown-menu-content",
          sideOffset: t,
          className: (0, nn.cn)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            e
          ),
          ...r,
        }),
      });
    }
    function ns({ className: e, inset: t, variant: r = "default", ...n }) {
      return (0, T.jsx)(nt, {
        "data-slot": "dropdown-menu-item",
        "data-inset": t,
        "data-variant": r,
        className: (0, nn.cn)(
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          e
        ),
        ...n,
      });
    }
    var nu = e.i(86959),
      nc = e.i(37754);
    let nl = (0, nr.default)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]),
      nd = (0, nr.default)("power", [
        ["path", { d: "M12 2v10", key: "mnfbl" }],
        ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
      ]);
    var nf = "Dialog",
      [nh, np] = Y(nf),
      [nv, nm] = nh(nf),
      ny = (e) => {
        let {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: i,
            onOpenChange: o,
            modal: a = !0,
          } = e,
          s = $.useRef(null),
          u = $.useRef(null),
          [c, l] = X({
            prop: n,
            defaultProp: i ?? !1,
            onChange: o,
            caller: nf,
          });
        return (0, T.jsx)(nv, {
          scope: t,
          triggerRef: s,
          contentRef: u,
          contentId: eR(),
          titleId: eR(),
          descriptionId: eR(),
          open: c,
          onOpenChange: l,
          onOpenToggle: $.useCallback(() => l((e) => !e), [l]),
          modal: a,
          children: r,
        });
      };
    ny.displayName = nf;
    var ng = "DialogTrigger",
      nb = $.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          i = nm(ng, r),
          o = (0, H.useComposedRefs)(t, i.triggerRef);
        return (0, T.jsx)(et.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": i.open,
          "aria-controls": i.contentId,
          "data-state": nF(i.open),
          ...n,
          ref: o,
          onClick: K(e.onClick, i.onOpenToggle),
        });
      });
    nb.displayName = ng;
    var nw = "DialogPortal",
      [nx, nE] = nh(nw, { forceMount: void 0 }),
      nO = (e) => {
        let { __scopeDialog: t, forceMount: r, children: n, container: i } = e,
          o = nm(nw, t);
        return (0, T.jsx)(nx, {
          scope: t,
          forceMount: r,
          children: $.Children.map(n, (e) =>
            (0, T.jsx)(eX, {
              present: r || o.open,
              children: (0, T.jsx)(eJ, {
                asChild: !0,
                container: i,
                children: e,
              }),
            })
          ),
        });
      };
    nO.displayName = nw;
    var nS = "DialogOverlay",
      nk = $.forwardRef((e, t) => {
        let r = nE(nS, e.__scopeDialog),
          { forceMount: n = r.forceMount, ...i } = e,
          o = nm(nS, e.__scopeDialog);
        return o.modal
          ? (0, T.jsx)(eX, {
              present: n || o.open,
              children: (0, T.jsx)(nC, { ...i, ref: t }),
            })
          : null;
      });
    nk.displayName = nS;
    var n_ = (0, ee.createSlot)("DialogOverlay.RemoveScroll"),
      nC = $.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          i = nm(nS, r);
        return (0, T.jsx)(t2, {
          as: n_,
          allowPinchZoom: !0,
          shards: [i.contentRef],
          children: (0, T.jsx)(et.div, {
            "data-state": nF(i.open),
            ...n,
            ref: t,
            style: { pointerEvents: "auto", ...n.style },
          }),
        });
      }),
      nT = "DialogContent",
      nR = $.forwardRef((e, t) => {
        let r = nE(nT, e.__scopeDialog),
          { forceMount: n = r.forceMount, ...i } = e,
          o = nm(nT, e.__scopeDialog);
        return (0, T.jsx)(eX, {
          present: n || o.open,
          children: o.modal
            ? (0, T.jsx)(nI, { ...i, ref: t })
            : (0, T.jsx)(nD, { ...i, ref: t }),
        });
      });
    nR.displayName = nT;
    var nI = $.forwardRef((e, t) => {
        let r = nm(nT, e.__scopeDialog),
          n = $.useRef(null),
          i = (0, H.useComposedRefs)(t, r.contentRef, n);
        return (
          $.useEffect(() => {
            let e = n.current;
            if (e) return tf(e);
          }, []),
          (0, T.jsx)(nj, {
            ...e,
            ref: i,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: K(e.onCloseAutoFocus, (e) => {
              e.preventDefault(), r.triggerRef.current?.focus();
            }),
            onPointerDownOutside: K(e.onPointerDownOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault();
            }),
            onFocusOutside: K(e.onFocusOutside, (e) => e.preventDefault()),
          })
        );
      }),
      nD = $.forwardRef((e, t) => {
        let r = nm(nT, e.__scopeDialog),
          n = $.useRef(!1),
          i = $.useRef(!1);
        return (0, T.jsx)(nj, {
          ...e,
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (t) => {
            e.onCloseAutoFocus?.(t),
              t.defaultPrevented ||
                (n.current || r.triggerRef.current?.focus(),
                t.preventDefault()),
              (n.current = !1),
              (i.current = !1);
          },
          onInteractOutside: (t) => {
            e.onInteractOutside?.(t),
              t.defaultPrevented ||
                ((n.current = !0),
                "pointerdown" === t.detail.originalEvent.type &&
                  (i.current = !0));
            let o = t.target;
            r.triggerRef.current?.contains(o) && t.preventDefault(),
              "focusin" === t.detail.originalEvent.type &&
                i.current &&
                t.preventDefault();
          },
        });
      }),
      nj = $.forwardRef((e, t) => {
        let {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: i,
            onCloseAutoFocus: o,
            ...a
          } = e,
          s = nm(nT, r),
          u = $.useRef(null),
          c = (0, H.useComposedRefs)(t, u);
        return (
          em(),
          (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)(ex, {
                asChild: !0,
                loop: !0,
                trapped: n,
                onMountAutoFocus: i,
                onUnmountAutoFocus: o,
                children: (0, T.jsx)(ef, {
                  role: "dialog",
                  id: s.contentId,
                  "aria-describedby": s.descriptionId,
                  "aria-labelledby": s.titleId,
                  "data-state": nF(s.open),
                  ...a,
                  ref: c,
                  onDismiss: () => s.onOpenChange(!1),
                }),
              }),
              (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(nV, { titleId: s.titleId }),
                  (0, T.jsx)(nz, {
                    contentRef: u,
                    descriptionId: s.descriptionId,
                  }),
                ],
              }),
            ],
          })
        );
      }),
      nN = "DialogTitle";
    $.forwardRef((e, t) => {
      let { __scopeDialog: r, ...n } = e,
        i = nm(nN, r);
      return (0, T.jsx)(et.h2, { id: i.titleId, ...n, ref: t });
    }).displayName = nN;
    var nM = "DialogDescription";
    $.forwardRef((e, t) => {
      let { __scopeDialog: r, ...n } = e,
        i = nm(nM, r);
      return (0, T.jsx)(et.p, { id: i.descriptionId, ...n, ref: t });
    }).displayName = nM;
    var nP = "DialogClose",
      nA = $.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          i = nm(nP, r);
        return (0, T.jsx)(et.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: K(e.onClick, () => i.onOpenChange(!1)),
        });
      });
    function nF(e) {
      return e ? "open" : "closed";
    }
    nA.displayName = nP;
    var nq = "DialogTitleWarning",
      [nL, nQ] =
        ((p = { contentName: nT, titleName: nN, docsSlug: "dialog" }),
        (i = $.createContext(p)),
        ((o = (e) => {
          let { children: t, ...r } = e,
            n = $.useMemo(() => r, Object.values(r));
          return (0, T.jsx)(i.Provider, { value: n, children: t });
        }).displayName = nq + "Provider"),
        [
          o,
          function (e) {
            let t = $.useContext(i);
            if (t) return t;
            if (void 0 !== p) return p;
            throw Error(`\`${e}\` must be used within \`${nq}\``);
          },
        ]),
      nV = ({ titleId: e }) => {
        let t = nQ(nq),
          r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return (
          $.useEffect(() => {
            e && (document.getElementById(e) || console.error(r));
          }, [r, e]),
          null
        );
      },
      nz = ({ contentRef: e, descriptionId: t }) => {
        let r = nQ("DialogDescriptionWarning"),
          n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
        return (
          $.useEffect(() => {
            let r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n));
          }, [n, e, t]),
          null
        );
      };
    let nW = $.default.createContext({
        drawerRef: { current: null },
        overlayRef: { current: null },
        onPress: () => {},
        onRelease: () => {},
        onDrag: () => {},
        onNestedDrag: () => {},
        onNestedOpenChange: () => {},
        onNestedRelease: () => {},
        openProp: void 0,
        dismissible: !1,
        isOpen: !1,
        isDragging: !1,
        keyboardIsOpen: { current: !1 },
        snapPointsOffset: null,
        snapPoints: null,
        handleOnly: !1,
        modal: !1,
        shouldFade: !1,
        activeSnapPoint: null,
        onOpenChange: () => {},
        setActiveSnapPoint: () => {},
        closeDrawer: () => {},
        direction: "bottom",
        shouldAnimate: { current: !0 },
        shouldScaleBackground: !1,
        setBackgroundColorOnScale: !0,
        noBodyStyles: !1,
        container: null,
        autoFocus: !1,
      }),
      nB = () => {
        let e = $.default.useContext(nW);
        if (!e)
          throw Error("useDrawerContext must be used within a Drawer.Root");
        return e;
      };
    function nU() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    function n$() {
      return (
        nK(/^iPhone/) ||
        nK(/^iPad/) ||
        (nK(/^Mac/) && navigator.maxTouchPoints > 1)
      );
    }
    function nK(e) {
      return "u" > typeof window && null != window.navigator
        ? e.test(window.navigator.platform)
        : void 0;
    }
    !(function (e) {
      if (!e || "u" < typeof document) return;
      let t = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      (r.type = "text/css"),
        t.appendChild(r),
        r.styleSheet
          ? (r.styleSheet.cssText = e)
          : r.appendChild(document.createTextNode(e));
    })(
      "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}"
    );
    let nH = "u" > typeof window ? $.useLayoutEffect : $.useEffect;
    function nY(...e) {
      return (...t) => {
        for (let r of e) "function" == typeof r && r(...t);
      };
    }
    let nG = "u" > typeof document && window.visualViewport;
    function nJ(e) {
      let t = window.getComputedStyle(e);
      return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
    }
    function nX(e) {
      for (nJ(e) && (e = e.parentElement); e && !nJ(e); ) e = e.parentElement;
      return e || document.scrollingElement || document.documentElement;
    }
    let nZ = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]),
      n0 = 0;
    function n1(e, t, r, n) {
      return (
        e.addEventListener(t, r, n),
        () => {
          e.removeEventListener(t, r, n);
        }
      );
    }
    function n2(e) {
      let t = document.scrollingElement || document.documentElement;
      for (; e && e !== t; ) {
        let t = nX(e);
        if (t !== document.documentElement && t !== document.body && t !== e) {
          let r = t.getBoundingClientRect().top,
            n = e.getBoundingClientRect().top;
          e.getBoundingClientRect().bottom >
            t.getBoundingClientRect().bottom + 24 && (t.scrollTop += n - r);
        }
        e = t.parentElement;
      }
    }
    function n3(e) {
      return (
        (e instanceof HTMLInputElement && !nZ.has(e.type)) ||
        e instanceof HTMLTextAreaElement ||
        (e instanceof HTMLElement && e.isContentEditable)
      );
    }
    function n4(...e) {
      return $.useCallback(
        (function (...e) {
          return (t) =>
            e.forEach((e) => {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            });
        })(...e),
        e
      );
    }
    let n6 = new WeakMap();
    function n5(e, t, r = !1) {
      if (!e || !(e instanceof HTMLElement)) return;
      let n = {};
      Object.entries(t).forEach(([t, r]) => {
        t.startsWith("--")
          ? e.style.setProperty(t, r)
          : ((n[t] = e.style[t]), (e.style[t] = r));
      }),
        r || n6.set(e, n);
    }
    let n8 = (e) => {
      switch (e) {
        case "top":
        case "bottom":
          return !0;
        case "left":
        case "right":
          return !1;
        default:
          return e;
      }
    };
    function n7(e, t) {
      if (!e) return null;
      let r = window.getComputedStyle(e),
        n = r.transform || r.webkitTransform || r.mozTransform,
        i = n.match(/^matrix3d\((.+)\)$/);
      return i
        ? parseFloat(i[1].split(", ")[n8(t) ? 13 : 12])
        : (i = n.match(/^matrix\((.+)\)$/))
        ? parseFloat(i[1].split(", ")[n8(t) ? 5 : 4])
        : null;
    }
    function n9(e, t) {
      if (!e) return () => {};
      let r = e.style.cssText;
      return (
        Object.assign(e.style, t),
        () => {
          e.style.cssText = r;
        }
      );
    }
    let ie = [0.32, 0.72, 0, 1],
      it = "vaul-dragging";
    function ir(e) {
      let t = $.default.useRef(e);
      return (
        $.default.useEffect(() => {
          t.current = e;
        }),
        $.default.useMemo(
          () =>
            (...e) =>
              null == t.current ? void 0 : t.current.call(t, ...e),
          []
        )
      );
    }
    function ii({ prop: e, defaultProp: t, onChange: r = () => {} }) {
      let [n, i] = (function ({ defaultProp: e, onChange: t }) {
          let r = $.default.useState(e),
            [n] = r,
            i = $.default.useRef(n),
            o = ir(t);
          return (
            $.default.useEffect(() => {
              i.current !== n && (o(n), (i.current = n));
            }, [n, i, o]),
            r
          );
        })({ defaultProp: t, onChange: r }),
        o = void 0 !== e,
        a = o ? e : n,
        s = ir(r);
      return [
        a,
        $.default.useCallback(
          (t) => {
            if (o) {
              let r = "function" == typeof t ? t(e) : t;
              r !== e && s(r);
            } else i(t);
          },
          [o, e, i, s]
        ),
      ];
    }
    let io = () => () => {},
      ia = null,
      is = $.default.forwardRef(function ({ ...e }, t) {
        let {
            overlayRef: r,
            snapPoints: n,
            onRelease: i,
            shouldFade: o,
            isOpen: a,
            modal: s,
            shouldAnimate: u,
          } = nB(),
          c = n4(t, r),
          l = n && n.length > 0;
        if (!s) return null;
        let d = $.default.useCallback((e) => i(e), [i]);
        return $.default.createElement(nk, {
          onMouseUp: d,
          ref: c,
          "data-vaul-overlay": "",
          "data-vaul-snap-points": a && l ? "true" : "false",
          "data-vaul-snap-points-overlay": a && o ? "true" : "false",
          "data-vaul-animate": (null == u ? void 0 : u.current)
            ? "true"
            : "false",
          ...e,
        });
      });
    is.displayName = "Drawer.Overlay";
    let iu = $.default.forwardRef(function (
      { onPointerDownOutside: e, style: t, onOpenAutoFocus: r, ...n },
      i
    ) {
      let {
          drawerRef: o,
          onPress: a,
          onRelease: s,
          onDrag: u,
          keyboardIsOpen: c,
          snapPointsOffset: l,
          activeSnapPointIndex: d,
          modal: f,
          isOpen: h,
          direction: p,
          snapPoints: v,
          container: m,
          handleOnly: y,
          shouldAnimate: g,
          autoFocus: b,
        } = nB(),
        [w, x] = $.default.useState(!1),
        E = n4(i, o),
        O = $.default.useRef(null),
        S = $.default.useRef(null),
        k = $.default.useRef(!1),
        _ = v && v.length > 0;
      function C(e) {
        (O.current = null), (k.current = !1), s(e);
      }
      return (
        !(function () {
          let {
              direction: e,
              isOpen: t,
              shouldScaleBackground: r,
              setBackgroundColorOnScale: n,
              noBodyStyles: i,
            } = nB(),
            o = $.default.useRef(null),
            a = (0, $.useMemo)(() => document.body.style.backgroundColor, []);
          function s() {
            return (window.innerWidth - 26) / window.innerWidth;
          }
          $.default.useEffect(() => {
            if (t && r) {
              o.current && clearTimeout(o.current);
              let t =
                document.querySelector("[data-vaul-drawer-wrapper]") ||
                document.querySelector("[vaul-drawer-wrapper]");
              if (!t) return;
              !(function (...e) {})(
                n && !i ? n9(document.body, { background: "black" }) : io,
                n9(t, {
                  transformOrigin: n8(e) ? "top" : "left",
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: `cubic-bezier(${ie.join(",")})`,
                })
              );
              let r = n9(t, {
                borderRadius: "8px",
                overflow: "hidden",
                ...(n8(e)
                  ? {
                      transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                    }
                  : {
                      transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                    }),
              });
              return () => {
                r(),
                  (o.current = window.setTimeout(() => {
                    a
                      ? (document.body.style.background = a)
                      : document.body.style.removeProperty("background");
                  }, 500));
              };
            }
          }, [t, r, a]);
        })(),
        $.default.useEffect(() => {
          _ &&
            window.requestAnimationFrame(() => {
              x(!0);
            });
        }, []),
        $.default.createElement(nR, {
          "data-vaul-drawer-direction": p,
          "data-vaul-drawer": "",
          "data-vaul-delayed-snap-points": w ? "true" : "false",
          "data-vaul-snap-points": h && _ ? "true" : "false",
          "data-vaul-custom-container": m ? "true" : "false",
          "data-vaul-animate": (null == g ? void 0 : g.current)
            ? "true"
            : "false",
          ...n,
          ref: E,
          style:
            l && l.length > 0
              ? { "--snap-point-height": `${l[null != d ? d : 0]}px`, ...t }
              : t,
          onPointerDown: (e) => {
            y ||
              (null == n.onPointerDown || n.onPointerDown.call(n, e),
              (O.current = { x: e.pageX, y: e.pageY }),
              a(e));
          },
          onOpenAutoFocus: (e) => {
            null == r || r(e), b || e.preventDefault();
          },
          onPointerDownOutside: (t) => {
            (null == e || e(t), !f || t.defaultPrevented)
              ? t.preventDefault()
              : c.current && (c.current = !1);
          },
          onFocusOutside: (e) => {
            if (!f) return void e.preventDefault();
          },
          onPointerMove: (e) => {
            if (
              ((S.current = e),
              y ||
                (null == n.onPointerMove || n.onPointerMove.call(n, e),
                !O.current))
            )
              return;
            let t = e.pageY - O.current.y,
              r = e.pageX - O.current.x,
              i = "touch" === e.pointerType ? 10 : 2;
            ((e, t, r = 0) => {
              if (k.current) return !0;
              let n = Math.abs(e.y),
                i = Math.abs(e.x),
                o = i > n,
                a = ["bottom", "right"].includes(t) ? 1 : -1;
              if ("left" === t || "right" === t) {
                if (!(e.x * a < 0) && i >= 0 && i <= r) return o;
              } else if (!(e.y * a < 0) && n >= 0 && n <= r) return !o;
              return (k.current = !0), !0;
            })({ x: r, y: t }, p, i)
              ? u(e)
              : (Math.abs(r) > i || Math.abs(t) > i) && (O.current = null);
          },
          onPointerUp: (e) => {
            null == n.onPointerUp || n.onPointerUp.call(n, e),
              (O.current = null),
              (k.current = !1),
              s(e);
          },
          onPointerOut: (e) => {
            null == n.onPointerOut || n.onPointerOut.call(n, e), C(S.current);
          },
          onContextMenu: (e) => {
            null == n.onContextMenu || n.onContextMenu.call(n, e),
              S.current && C(S.current);
          },
        })
      );
    });
    (iu.displayName = "Drawer.Content"),
      ($.default.forwardRef(function (
        { preventCycle: e = !1, children: t, ...r },
        n
      ) {
        let {
            closeDrawer: i,
            isDragging: o,
            snapPoints: a,
            activeSnapPoint: s,
            setActiveSnapPoint: u,
            dismissible: c,
            handleOnly: l,
            isOpen: d,
            onPress: f,
            onDrag: h,
          } = nB(),
          p = $.default.useRef(null),
          v = $.default.useRef(!1);
        function m() {
          p.current && window.clearTimeout(p.current), (v.current = !1);
        }
        return $.default.createElement(
          "div",
          {
            onClick: function () {
              v.current
                ? m()
                : window.setTimeout(() => {
                    !(function () {
                      if (o || e || v.current) return m();
                      if ((m(), !a || 0 === a.length)) {
                        c || i();
                        return;
                      }
                      if (s === a[a.length - 1] && c) return i();
                      let t = a.findIndex((e) => e === s);
                      -1 === t || u(a[t + 1]);
                    })();
                  }, 120);
            },
            onPointerCancel: m,
            onPointerDown: (e) => {
              l && f(e),
                (p.current = window.setTimeout(() => {
                  v.current = !0;
                }, 250));
            },
            onPointerMove: (e) => {
              l && h(e);
            },
            ref: n,
            "data-vaul-drawer-visible": d ? "true" : "false",
            "data-vaul-handle": "",
            "aria-hidden": "true",
            ...r,
          },
          $.default.createElement(
            "span",
            { "data-vaul-handle-hitarea": "", "aria-hidden": "true" },
            t
          )
        );
      }).displayName = "Drawer.Handle");
    let ic = function ({
        open: e,
        onOpenChange: r,
        children: n,
        onDrag: i,
        onRelease: o,
        snapPoints: a,
        shouldScaleBackground: s = !1,
        setBackgroundColorOnScale: u = !0,
        closeThreshold: c = 0.25,
        scrollLockTimeout: l = 100,
        dismissible: d = !0,
        handleOnly: f = !1,
        fadeFromIndex: h = a && a.length - 1,
        activeSnapPoint: p,
        setActiveSnapPoint: v,
        fixed: m,
        modal: y = !0,
        onClose: g,
        nested: b,
        noBodyStyles: w = !1,
        direction: x = "bottom",
        defaultOpen: E = !1,
        disablePreventScroll: O = !0,
        snapToSequentialPoint: S = !1,
        preventScrollRestoration: k = !1,
        repositionInputs: _ = !0,
        onAnimationEnd: C,
        container: T,
        autoFocus: R = !1,
      }) {
        var I, D;
        let [j = !1, N] = ii({
            defaultProp: E,
            prop: e,
            onChange: (e) => {
              null == r || r(e),
                e || b || ed(),
                setTimeout(() => {
                  null == C || C(e);
                }, 500),
                e &&
                  !y &&
                  "u" > typeof window &&
                  window.requestAnimationFrame(() => {
                    document.body.style.pointerEvents = "auto";
                  }),
                e || (document.body.style.pointerEvents = "auto");
            },
          }),
          [M, P] = $.default.useState(!1),
          [A, F] = $.default.useState(!1),
          [q, L] = $.default.useState(!1),
          Q = $.default.useRef(null),
          V = $.default.useRef(null),
          z = $.default.useRef(null),
          W = $.default.useRef(null),
          B = $.default.useRef(null),
          U = $.default.useRef(!1),
          K = $.default.useRef(null),
          H = $.default.useRef(0),
          Y = $.default.useRef(!1),
          G = $.default.useRef(!E),
          J = $.default.useRef(0),
          X = $.default.useRef(null),
          Z = $.default.useRef(
            (null == (I = X.current)
              ? void 0
              : I.getBoundingClientRect().height) || 0
          ),
          ee = $.default.useRef(
            (null == (D = X.current)
              ? void 0
              : D.getBoundingClientRect().width) || 0
          ),
          et = $.default.useRef(0),
          er = $.default.useCallback((e) => {
            a && e === es.length - 1 && (V.current = new Date());
          }, []),
          {
            activeSnapPoint: en,
            activeSnapPointIndex: ei,
            setActiveSnapPoint: eo,
            onRelease: ea,
            snapPointsOffset: es,
            onDrag: eu,
            shouldFade: ec,
            getPercentageDragged: el,
          } = (function ({
            activeSnapPointProp: e,
            setActiveSnapPointProp: t,
            snapPoints: r,
            drawerRef: n,
            overlayRef: i,
            fadeFromIndex: o,
            onSnapPointChange: a,
            direction: s = "bottom",
            container: u,
            snapToSequentialPoint: c,
          }) {
            let [l, d] = ii({
                prop: e,
                defaultProp: null == r ? void 0 : r[0],
                onChange: t,
              }),
              [f, h] = $.default.useState(
                "u" > typeof window
                  ? {
                      innerWidth: window.innerWidth,
                      innerHeight: window.innerHeight,
                    }
                  : void 0
              );
            $.default.useEffect(() => {
              function e() {
                h({
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                });
              }
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
            let p = $.default.useMemo(
                () => l === (null == r ? void 0 : r[r.length - 1]) || null,
                [r, l]
              ),
              v = $.default.useMemo(() => {
                var e;
                return null !=
                  (e = null == r ? void 0 : r.findIndex((e) => e === l))
                  ? e
                  : null;
              }, [r, l]),
              m =
                (r &&
                  r.length > 0 &&
                  (o || 0 === o) &&
                  !Number.isNaN(o) &&
                  r[o] === l) ||
                !r,
              y = $.default.useMemo(() => {
                var e;
                let t = u
                  ? {
                      width: u.getBoundingClientRect().width,
                      height: u.getBoundingClientRect().height,
                    }
                  : "u" > typeof window
                  ? { width: window.innerWidth, height: window.innerHeight }
                  : { width: 0, height: 0 };
                return null !=
                  (e =
                    null == r
                      ? void 0
                      : r.map((e) => {
                          let r = "string" == typeof e,
                            n = 0;
                          if ((r && (n = parseInt(e, 10)), n8(s))) {
                            let i = r ? n : f ? e * t.height : 0;
                            return f
                              ? "bottom" === s
                                ? t.height - i
                                : -t.height + i
                              : i;
                          }
                          let i = r ? n : f ? e * t.width : 0;
                          return f
                            ? "right" === s
                              ? t.width - i
                              : -t.width + i
                            : i;
                        }))
                  ? e
                  : [];
              }, [r, f, u]),
              g = $.default.useMemo(
                () => (null !== v ? (null == y ? void 0 : y[v]) : null),
                [y, v]
              ),
              b = $.default.useCallback(
                (e) => {
                  var t;
                  let u =
                    null !=
                    (t = null == y ? void 0 : y.findIndex((t) => t === e))
                      ? t
                      : null;
                  a(u),
                    n5(n.current, {
                      transition: `transform 0.5s cubic-bezier(${ie.join(
                        ","
                      )})`,
                      transform: n8(s)
                        ? `translate3d(0, ${e}px, 0)`
                        : `translate3d(${e}px, 0, 0)`,
                    }),
                    y && u !== y.length - 1 && void 0 !== o && u !== o && u < o
                      ? n5(i.current, {
                          transition: `opacity 0.5s cubic-bezier(${ie.join(
                            ","
                          )})`,
                          opacity: "0",
                        })
                      : n5(i.current, {
                          transition: `opacity 0.5s cubic-bezier(${ie.join(
                            ","
                          )})`,
                          opacity: "1",
                        }),
                    d(null == r ? void 0 : r[Math.max(u, 0)]);
                },
                [n.current, r, y, o, i, d]
              );
            return (
              $.default.useEffect(() => {
                if (l || e) {
                  var t;
                  let n =
                    null !=
                    (t =
                      null == r
                        ? void 0
                        : r.findIndex((t) => t === e || t === l))
                      ? t
                      : -1;
                  y && -1 !== n && "number" == typeof y[n] && b(y[n]);
                }
              }, [l, e, r, y, b]),
              {
                isLastSnapPoint: p,
                activeSnapPoint: l,
                shouldFade: m,
                getPercentageDragged: function (e, t) {
                  if (!r || "number" != typeof v || !y || void 0 === o)
                    return null;
                  let n = v === o - 1;
                  if (v >= o && t) return 0;
                  if (n && !t) return 1;
                  if (!m && !n) return null;
                  let i = n ? v + 1 : v - 1,
                    a = e / Math.abs(n ? y[i] - y[i - 1] : y[i + 1] - y[i]);
                  return n ? 1 - a : a;
                },
                setActiveSnapPoint: d,
                activeSnapPointIndex: v,
                onRelease: function ({
                  draggedDistance: e,
                  closeDrawer: t,
                  velocity: n,
                  dismissible: a,
                }) {
                  if (void 0 === o) return;
                  let u =
                      "bottom" === s || "right" === s
                        ? (null != g ? g : 0) - e
                        : (null != g ? g : 0) + e,
                    l = v === o - 1,
                    d = 0 === v,
                    f = e > 0;
                  if (
                    (l &&
                      n5(i.current, {
                        transition: `opacity 0.5s cubic-bezier(${ie.join(
                          ","
                        )})`,
                      }),
                    !c && n > 2 && !f)
                  )
                    return void (a ? t() : b(y[0]));
                  if (!c && n > 2 && f && y && r)
                    return void b(y[r.length - 1]);
                  let h =
                      null == y
                        ? void 0
                        : y.reduce((e, t) =>
                            "number" != typeof e || "number" != typeof t
                              ? e
                              : Math.abs(t - u) < Math.abs(e - u)
                              ? t
                              : e
                          ),
                    m = n8(s) ? window.innerHeight : window.innerWidth;
                  if (n > 0.4 && Math.abs(e) < 0.4 * m) {
                    let e = f ? 1 : -1;
                    return e > 0 && p && r
                      ? void b(y[r.length - 1])
                      : void (d && e < 0 && a && t(),
                        null === v || b(y[v + e]));
                  }
                  b(h);
                },
                onDrag: function ({ draggedDistance: e }) {
                  if (null === g) return;
                  let t = "bottom" === s || "right" === s ? g - e : g + e;
                  (("bottom" === s || "right" === s) && t < y[y.length - 1]) ||
                    (("top" === s || "left" === s) && t > y[y.length - 1]) ||
                    n5(n.current, {
                      transform: n8(s)
                        ? `translate3d(0, ${t}px, 0)`
                        : `translate3d(${t}px, 0, 0)`,
                    });
                },
                snapPointsOffset: y,
              }
            );
          })({
            snapPoints: a,
            activeSnapPointProp: p,
            setActiveSnapPointProp: v,
            drawerRef: X,
            fadeFromIndex: h,
            overlayRef: Q,
            onSnapPointChange: er,
            direction: x,
            container: T,
            snapToSequentialPoint: S,
          });
        !(function (e = {}) {
          let { isDisabled: r } = e;
          nH(() => {
            if (!r) {
              var e, n, i;
              let r, o, a, s, u, c, l;
              return (
                1 == ++n0 &&
                  n$() &&
                  ((a = 0),
                  (s = window.pageXOffset),
                  (u = window.pageYOffset),
                  (c = nY(
                    ((e = document.documentElement),
                    (n = "paddingRight"),
                    (i = `${
                      window.innerWidth - document.documentElement.clientWidth
                    }px`),
                    (r = e.style[n]),
                    (e.style[n] = i),
                    () => {
                      e.style[n] = r;
                    })
                  )),
                  window.scrollTo(0, 0),
                  (l = nY(
                    n1(
                      document,
                      "touchstart",
                      (e) => {
                        ((o = nX(e.target)) !== document.documentElement ||
                          o !== document.body) &&
                          (a = e.changedTouches[0].pageY);
                      },
                      { passive: !1, capture: !0 }
                    ),
                    n1(
                      document,
                      "touchmove",
                      (e) => {
                        if (
                          !o ||
                          o === document.documentElement ||
                          o === document.body
                        )
                          return void e.preventDefault();
                        let t = e.changedTouches[0].pageY,
                          r = o.scrollTop,
                          n = o.scrollHeight - o.clientHeight;
                        0 !== n &&
                          (((r <= 0 && t > a) || (r >= n && t < a)) &&
                            e.preventDefault(),
                          (a = t));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    n1(
                      document,
                      "touchend",
                      (e) => {
                        let t = e.target;
                        n3(t) &&
                          t !== document.activeElement &&
                          (e.preventDefault(),
                          (t.style.transform = "translateY(-2000px)"),
                          t.focus(),
                          requestAnimationFrame(() => {
                            t.style.transform = "";
                          }));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    n1(
                      document,
                      "focus",
                      (e) => {
                        let t = e.target;
                        n3(t) &&
                          ((t.style.transform = "translateY(-2000px)"),
                          requestAnimationFrame(() => {
                            (t.style.transform = ""),
                              nG &&
                                (nG.height < window.innerHeight
                                  ? requestAnimationFrame(() => {
                                      n2(t);
                                    })
                                  : nG.addEventListener("resize", () => n2(t), {
                                      once: !0,
                                    }));
                          }));
                      },
                      !0
                    ),
                    n1(window, "scroll", () => {
                      window.scrollTo(0, 0);
                    })
                  )),
                  (t = () => {
                    c(), l(), window.scrollTo(s, u);
                  })),
                () => {
                  0 == --n0 && (null == t || t());
                }
              );
            }
          }, [r]);
        })({ isDisabled: !j || A || !y || q || !M || !_ || !O });
        let { restorePositionSetting: ed } = (function ({
          isOpen: e,
          modal: t,
          nested: r,
          hasBeenOpened: n,
          preventScrollRestoration: i,
          noBodyStyles: o,
        }) {
          let [a, s] = $.default.useState(() =>
              "u" > typeof window ? window.location.href : ""
            ),
            u = $.default.useRef(0),
            c = $.default.useCallback(() => {
              if (nU() && null === ia && e && !o) {
                ia = {
                  position: document.body.style.position,
                  top: document.body.style.top,
                  left: document.body.style.left,
                  height: document.body.style.height,
                  right: "unset",
                };
                let { scrollX: e, innerHeight: t } = window;
                document.body.style.setProperty(
                  "position",
                  "fixed",
                  "important"
                ),
                  Object.assign(document.body.style, {
                    top: `${-u.current}px`,
                    left: `${-e}px`,
                    right: "0px",
                    height: "auto",
                  }),
                  window.setTimeout(
                    () =>
                      window.requestAnimationFrame(() => {
                        let e = t - window.innerHeight;
                        e &&
                          u.current >= t &&
                          (document.body.style.top = `${-(u.current + e)}px`);
                      }),
                    300
                  );
              }
            }, [e]),
            l = $.default.useCallback(() => {
              if (nU() && null !== ia && !o) {
                let e = -parseInt(document.body.style.top, 10),
                  t = -parseInt(document.body.style.left, 10);
                Object.assign(document.body.style, ia),
                  window.requestAnimationFrame(() => {
                    i && a !== window.location.href
                      ? s(window.location.href)
                      : window.scrollTo(t, e);
                  }),
                  (ia = null);
              }
            }, [a]);
          return (
            $.default.useEffect(() => {
              function e() {
                u.current = window.scrollY;
              }
              return (
                e(),
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            $.default.useEffect(() => {
              if (t)
                return () => {
                  "u" < typeof document ||
                    document.querySelector("[data-vaul-drawer]") ||
                    l();
                };
            }, [t, l]),
            $.default.useEffect(() => {
              !r &&
                n &&
                (e
                  ? (window.matchMedia("(display-mode: standalone)").matches ||
                      c(),
                    t ||
                      window.setTimeout(() => {
                        l();
                      }, 500))
                  : l());
            }, [e, n, a, t, r, c, l]),
            { restorePositionSetting: l }
          );
        })({
          isOpen: j,
          modal: y,
          nested: null != b && b,
          hasBeenOpened: M,
          preventScrollRestoration: k,
          noBodyStyles: w,
        });
        function ef() {
          return (window.innerWidth - 26) / window.innerWidth;
        }
        function eh(e, t) {
          var r;
          let n = e,
            i = null == (r = window.getSelection()) ? void 0 : r.toString(),
            o = X.current ? n7(X.current, x) : null,
            a = new Date();
          if (
            "SELECT" === n.tagName ||
            n.hasAttribute("data-vaul-no-drag") ||
            n.closest("[data-vaul-no-drag]")
          )
            return !1;
          if ("right" === x || "left" === x) return !0;
          if (V.current && a.getTime() - V.current.getTime() < 500) return !1;
          if (null !== o && ("bottom" === x ? o > 0 : o < 0)) return !0;
          if (i && i.length > 0) return !1;
          if (
            (B.current && a.getTime() - B.current.getTime() < l && 0 === o) ||
            t
          )
            return (B.current = a), !1;
          for (; n; ) {
            if (n.scrollHeight > n.clientHeight) {
              if (0 !== n.scrollTop) return (B.current = new Date()), !1;
              if ("dialog" === n.getAttribute("role")) break;
            }
            n = n.parentNode;
          }
          return !0;
        }
        function ep(e) {
          A &&
            X.current &&
            (X.current.classList.remove(it),
            (U.current = !1),
            F(!1),
            (W.current = new Date())),
            null == g || g(),
            e || N(!1),
            setTimeout(() => {
              a && eo(a[0]);
            }, 500);
        }
        function ev() {
          if (!X.current) return;
          let e = document.querySelector("[data-vaul-drawer-wrapper]"),
            t = n7(X.current, x);
          n5(X.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform 0.5s cubic-bezier(${ie.join(",")})`,
          }),
            n5(Q.current, {
              transition: `opacity 0.5s cubic-bezier(${ie.join(",")})`,
              opacity: "1",
            }),
            s &&
              t &&
              t > 0 &&
              j &&
              n5(
                e,
                {
                  borderRadius: "8px",
                  overflow: "hidden",
                  ...(n8(x)
                    ? {
                        transform: `scale(${ef()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                        transformOrigin: "top",
                      }
                    : {
                        transform: `scale(${ef()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                        transformOrigin: "left",
                      }),
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: `cubic-bezier(${ie.join(",")})`,
                },
                !0
              );
        }
        return (
          $.default.useEffect(() => {
            window.requestAnimationFrame(() => {
              G.current = !0;
            });
          }, []),
          $.default.useEffect(() => {
            var e;
            function t() {
              if (X.current && _ && (n3(document.activeElement) || Y.current)) {
                var e;
                let t =
                    (null == (e = window.visualViewport) ? void 0 : e.height) ||
                    0,
                  r = window.innerHeight,
                  n = r - t,
                  i = X.current.getBoundingClientRect().height || 0;
                et.current || (et.current = i);
                let o = X.current.getBoundingClientRect().top;
                if (
                  (Math.abs(J.current - n) > 60 && (Y.current = !Y.current),
                  a && a.length > 0 && es && ei && (n += es[ei] || 0),
                  (J.current = n),
                  i > t || Y.current)
                ) {
                  let e = X.current.getBoundingClientRect().height,
                    a = e;
                  e > t && (a = t - (i > 0.8 * r ? o : 26)),
                    m
                      ? (X.current.style.height = `${e - Math.max(n, 0)}px`)
                      : (X.current.style.height = `${Math.max(a, t - o)}px`);
                } else {
                  let e;
                  (e = navigator.userAgent),
                    ("u" > typeof window &&
                      ((/Firefox/.test(e) && /Mobile/.test(e)) ||
                        /FxiOS/.test(e))) ||
                      (X.current.style.height = `${et.current}px`);
                }
                a && a.length > 0 && !Y.current
                  ? (X.current.style.bottom = "0px")
                  : (X.current.style.bottom = `${Math.max(n, 0)}px`);
              }
            }
            return (
              null == (e = window.visualViewport) ||
                e.addEventListener("resize", t),
              () => {
                var e;
                return null == (e = window.visualViewport)
                  ? void 0
                  : e.removeEventListener("resize", t);
              }
            );
          }, [ei, a, es]),
          $.default.useEffect(
            () => (
              j &&
                (n5(document.documentElement, { scrollBehavior: "auto" }),
                (V.current = new Date())),
              () => {
                !(function (e, t) {
                  if (!e || !(e instanceof HTMLElement)) return;
                  let r = n6.get(e);
                  r && (e.style[t] = r[t]);
                })(document.documentElement, "scrollBehavior");
              }
            ),
            [j]
          ),
          $.default.useEffect(() => {
            y ||
              window.requestAnimationFrame(() => {
                document.body.style.pointerEvents = "auto";
              });
          }, [y]),
          $.default.createElement(
            ny,
            {
              defaultOpen: E,
              onOpenChange: (e) => {
                (d || e) && (e ? P(!0) : ep(!0), N(e));
              },
              open: j,
            },
            $.default.createElement(
              nW.Provider,
              {
                value: {
                  activeSnapPoint: en,
                  snapPoints: a,
                  setActiveSnapPoint: eo,
                  drawerRef: X,
                  overlayRef: Q,
                  onOpenChange: r,
                  onPress: function (e) {
                    var t, r;
                    (!d && !a) ||
                      ((!X.current || X.current.contains(e.target)) &&
                        ((Z.current =
                          (null == (t = X.current)
                            ? void 0
                            : t.getBoundingClientRect().height) || 0),
                        (ee.current =
                          (null == (r = X.current)
                            ? void 0
                            : r.getBoundingClientRect().width) || 0),
                        F(!0),
                        (z.current = new Date()),
                        n$() &&
                          window.addEventListener(
                            "touchend",
                            () => (U.current = !1),
                            { once: !0 }
                          ),
                        e.target.setPointerCapture(e.pointerId),
                        (H.current = n8(x) ? e.pageY : e.pageX)));
                  },
                  onRelease: function (e) {
                    var t, r;
                    if (!A || !X.current) return;
                    X.current.classList.remove(it),
                      (U.current = !1),
                      F(!1),
                      (W.current = new Date());
                    let n = n7(X.current, x);
                    if (
                      !e ||
                      !eh(e.target, !1) ||
                      !n ||
                      Number.isNaN(n) ||
                      null === z.current
                    )
                      return;
                    let i = W.current.getTime() - z.current.getTime(),
                      s = H.current - (n8(x) ? e.pageY : e.pageX),
                      u = Math.abs(s) / i;
                    if (
                      (u > 0.05 &&
                        (L(!0),
                        setTimeout(() => {
                          L(!1);
                        }, 200)),
                      a)
                    ) {
                      ea({
                        draggedDistance:
                          s * ("bottom" === x || "right" === x ? 1 : -1),
                        closeDrawer: ep,
                        velocity: u,
                        dismissible: d,
                      }),
                        null == o || o(e, !0);
                      return;
                    }
                    if ("bottom" === x || "right" === x ? s > 0 : s < 0) {
                      ev(), null == o || o(e, !0);
                      return;
                    }
                    if (u > 0.4) {
                      ep(), null == o || o(e, !1);
                      return;
                    }
                    let l = Math.min(
                        null != (t = X.current.getBoundingClientRect().height)
                          ? t
                          : 0,
                        window.innerHeight
                      ),
                      f = Math.min(
                        null != (r = X.current.getBoundingClientRect().width)
                          ? r
                          : 0,
                        window.innerWidth
                      );
                    if (
                      Math.abs(n) >=
                      ("left" === x || "right" === x ? f : l) * c
                    ) {
                      ep(), null == o || o(e, !1);
                      return;
                    }
                    null == o || o(e, !0), ev();
                  },
                  onDrag: function (e) {
                    if (X.current && A) {
                      let t = "bottom" === x || "right" === x ? 1 : -1,
                        r = (H.current - (n8(x) ? e.pageY : e.pageX)) * t,
                        n = r > 0,
                        o = a && !d && !n;
                      if (o && 0 === ei) return;
                      let u = Math.abs(r),
                        c = document.querySelector(
                          "[data-vaul-drawer-wrapper]"
                        ),
                        l =
                          u /
                          ("bottom" === x || "top" === x
                            ? Z.current
                            : ee.current),
                        f = el(u, n);
                      if (
                        (null !== f && (l = f),
                        (o && l >= 1) || (!U.current && !eh(e.target, n)))
                      )
                        return;
                      if (
                        (X.current.classList.add(it),
                        (U.current = !0),
                        n5(X.current, { transition: "none" }),
                        n5(Q.current, { transition: "none" }),
                        a && eu({ draggedDistance: r }),
                        n && !a)
                      ) {
                        let e =
                          Math.min(-(8 * (Math.log(r + 1) - 2) * 1), 0) * t;
                        n5(X.current, {
                          transform: n8(x)
                            ? `translate3d(0, ${e}px, 0)`
                            : `translate3d(${e}px, 0, 0)`,
                        });
                        return;
                      }
                      let p = 1 - l;
                      if (
                        ((ec || (h && ei === h - 1)) &&
                          (null == i || i(e, l),
                          n5(
                            Q.current,
                            { opacity: `${p}`, transition: "none" },
                            !0
                          )),
                        c && Q.current && s)
                      ) {
                        let e = Math.min(ef() + l * (1 - ef()), 1),
                          t = 8 - 8 * l,
                          r = Math.max(0, 14 - 14 * l);
                        n5(
                          c,
                          {
                            borderRadius: `${t}px`,
                            transform: n8(x)
                              ? `scale(${e}) translate3d(0, ${r}px, 0)`
                              : `scale(${e}) translate3d(${r}px, 0, 0)`,
                            transition: "none",
                          },
                          !0
                        );
                      }
                      if (!a) {
                        let e = u * t;
                        n5(X.current, {
                          transform: n8(x)
                            ? `translate3d(0, ${e}px, 0)`
                            : `translate3d(${e}px, 0, 0)`,
                        });
                      }
                    }
                  },
                  dismissible: d,
                  shouldAnimate: G,
                  handleOnly: f,
                  isOpen: j,
                  isDragging: A,
                  shouldFade: ec,
                  closeDrawer: ep,
                  onNestedDrag: function (e, t) {
                    if (t < 0) return;
                    let r = (window.innerWidth - 16) / window.innerWidth,
                      n = r + t * (1 - r),
                      i = -16 + 16 * t;
                    n5(X.current, {
                      transform: n8(x)
                        ? `scale(${n}) translate3d(0, ${i}px, 0)`
                        : `scale(${n}) translate3d(${i}px, 0, 0)`,
                      transition: "none",
                    });
                  },
                  onNestedOpenChange: function (e) {
                    let t = e
                        ? (window.innerWidth - 16) / window.innerWidth
                        : 1,
                      r = e ? -16 : 0;
                    K.current && window.clearTimeout(K.current),
                      n5(X.current, {
                        transition: `transform 0.5s cubic-bezier(${ie.join(
                          ","
                        )})`,
                        transform: n8(x)
                          ? `scale(${t}) translate3d(0, ${r}px, 0)`
                          : `scale(${t}) translate3d(${r}px, 0, 0)`,
                      }),
                      !e &&
                        X.current &&
                        (K.current = setTimeout(() => {
                          let e = n7(X.current, x);
                          n5(X.current, {
                            transition: "none",
                            transform: n8(x)
                              ? `translate3d(0, ${e}px, 0)`
                              : `translate3d(${e}px, 0, 0)`,
                          });
                        }, 500));
                  },
                  onNestedRelease: function (e, t) {
                    let r = n8(x) ? window.innerHeight : window.innerWidth,
                      n = t ? (r - 16) / r : 1,
                      i = t ? -16 : 0;
                    t &&
                      n5(X.current, {
                        transition: `transform 0.5s cubic-bezier(${ie.join(
                          ","
                        )})`,
                        transform: n8(x)
                          ? `scale(${n}) translate3d(0, ${i}px, 0)`
                          : `scale(${n}) translate3d(${i}px, 0, 0)`,
                      });
                  },
                  keyboardIsOpen: Y,
                  modal: y,
                  snapPointsOffset: es,
                  activeSnapPointIndex: ei,
                  direction: x,
                  shouldScaleBackground: s,
                  setBackgroundColorOnScale: u,
                  noBodyStyles: w,
                  container: T,
                  autoFocus: R,
                },
              },
              n
            )
          )
        );
      },
      il = function (e) {
        let t = nB(),
          { container: r = t.container, ...n } = e;
        return $.default.createElement(nO, { container: r, ...n });
      };
    function id({ ...e }) {
      return (0, T.jsx)(ic, { "data-slot": "drawer", ...e });
    }
    function ih({ ...e }) {
      return (0, T.jsx)(nb, { "data-slot": "drawer-trigger", ...e });
    }
    function ip({ ...e }) {
      return (0, T.jsx)(il, { "data-slot": "drawer-portal", ...e });
    }
    function iv({ ...e }) {
      return (0, T.jsx)(nA, { "data-slot": "drawer-close", ...e });
    }
    function im({ className: e, ...t }) {
      return (0, T.jsx)(is, {
        "data-slot": "drawer-overlay",
        className: (0, nn.cn)(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
          e
        ),
        ...t,
      });
    }
    function iy({ className: e, children: t, ...r }) {
      return (0, T.jsxs)(ip, {
        "data-slot": "drawer-portal",
        children: [
          (0, T.jsx)(im, {}),
          (0, T.jsxs)(iu, {
            "data-slot": "drawer-content",
            className: (0, nn.cn)(
              "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
              "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
              "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
              "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
              "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
              e
            ),
            ...r,
            children: [
              (0, T.jsx)("div", {
                className:
                  "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block",
              }),
              t,
            ],
          }),
        ],
      });
    }
    let ig = () => {
      let {
        isAuthenticated: e,
        address: t,
        login: r,
        logout: n,
      } = (0, nc.useAuth)();
      return (0, T.jsx)("header", {
        className: "fixed inset-x-0 top-4 z-50 px-4",
        children: (0, T.jsxs)("div", {
          className:
            "container relative mx-auto flex h-14 items-center gap-3 rounded-full border border-white/10 bg-[#070909]/70 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl",
          children: [
            (0, T.jsx)(B.default, {
              href: "/",
              className: "flex h-10 shrink-0 items-center rounded-full px-1",
              "aria-label": "Naven home",
              children: (0, T.jsx)(z.default, {
                src: "/logo.png",
                alt: "logo",
                width: 90,
                height: 36,
              }),
            }),
            (0, T.jsx)("nav", {
              className:
                "hidden items-center gap-8 text-sm text-white/64 md:absolute md:left-1/2 md:flex md:-translate-x-1/2",
              children: U.map((e) =>
                (0, T.jsx)(
                  B.default,
                  {
                    href: e.href,
                    target: e.href.includes("https") ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    className: "transition hover:text-primary",
                    children: e.title,
                  },
                  e.id
                )
              ),
            }),
            (0, T.jsxs)(id, {
              children: [
                (0, T.jsx)(ih, {
                  asChild: !0,
                  children: (0, T.jsx)("button", {
                    type: "button",
                    className:
                      "flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white md:hidden",
                    "aria-label": "Open navigation",
                    children: (0, T.jsx)(nl, { className: "size-5" }),
                  }),
                }),
                (0, T.jsx)(iy, {
                  className: "border-white/10 bg-[#070909] text-white",
                  children: (0, T.jsx)("div", {
                    className: "flex flex-col gap-2 px-6 pb-10 pt-8",
                    children: U.map((e) =>
                      (0, T.jsx)(
                        iv,
                        {
                          asChild: !0,
                          children: (0, T.jsx)(B.default, {
                            href: e.href,
                            target: e.href.includes("https")
                              ? "_blank"
                              : "_self",
                            rel: "noopener noreferrer",
                            className:
                              "rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-base font-medium",
                            children: e.title,
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    };
    var ib = e.i(441937),
      iw = e.i(644918),
      iw = iw;
    let ix = (0, nr.default)("info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]),
      iE = (0, nr.default)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]),
      iO = (0, nr.default)("octagon-x", [
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        [
          "path",
          {
            d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
            key: "2d38gg",
          },
        ],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]),
      iS = (0, nr.default)("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    var ik = e.i(968291),
      i_ = e.i(799126);
    let iC = ({ ...e }) => {
        let { theme: t = "system" } = (0, ik.useTheme)();
        return (0, T.jsx)(i_.Toaster, {
          theme: t,
          className: "toaster group",
          icons: {
            success: (0, T.jsx)(iw.default, { className: "size-4" }),
            info: (0, T.jsx)(ix, { className: "size-4" }),
            warning: (0, T.jsx)(iS, { className: "size-4" }),
            error: (0, T.jsx)(iO, { className: "size-4" }),
            loading: (0, T.jsx)(iE, { className: "size-4 animate-spin" }),
          },
          style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
            "--border-radius": "var(--radius)",
          },
          ...e,
        });
      },
      iT = (0, nr.default)("arrow-up-right", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]),
      iR = (0, nr.default)("twitter", [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6",
          },
        ],
      ]),
      iI = [
        {
          title: "Product",
          links: [
            { label: "Genesis", href: "/genesis" },
            { label: "x402scan", href: "/x402scan" },
            { label: "Transactions", href: "/transactions" },
            { label: "Documentation", href: "/docs" },
          ],
        },
        {
          title: "Build",
          links: [
            { label: "Quickstart", href: "/docs/getting-started/quickstart" },
            { label: "Facilitator", href: "/docs/facilitator/introduction" },
            { label: "Network", href: "/x402scan" },
          ],
        },
      ],
      iD = () =>
        (0, T.jsx)("footer", {
          className: "border-t border-white/10 bg-[#050606] text-white",
          children: (0, T.jsxs)("div", {
            className: "container mx-auto px-4 py-14",
            children: [
              (0, T.jsxs)("div", {
                className: "grid gap-12 lg:grid-cols-[1.2fr_0.8fr]",
                children: [
                  (0, T.jsxs)("div", {
                    children: [
                      (0, T.jsx)(B.default, {
                        href: "/",
                        className: "inline-flex items-center",
                        children: (0, T.jsx)(z.default, {
                          src: "/logo.png",
                          alt: "Naven",
                          width: 112,
                          height: 45,
                        }),
                      }),
                      (0, T.jsx)("p", {
                        className:
                          "mt-6 max-w-xl text-balance text-2xl font-semibold leading-snug text-white",
                        children:
                          "Payment rails and execution infrastructure for autonomous financial agents.",
                      }),
                      (0, T.jsxs)("div", {
                        className: "mt-8 flex flex-col gap-3 sm:flex-row",
                        children: [
                          (0, T.jsxs)(B.default, {
                            href: "https://x.com/NavenNetwork",
                            target: "_blank",
                            className:
                              "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.06]",
                            children: [
                              (0, T.jsx)(iR, { className: "size-4" }),
                              "Follow updates",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  
                ],
              }),
              (0, T.jsxs)("div", {
                className:
                  "mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/36 sm:flex-row sm:items-center sm:justify-between",
                children: [
                  (0, T.jsx)("div", {
                    children: "© 2026 Naven Network. All rights reserved.",
                  }),
                  (0, T.jsx)("div", {
                    children: "Programmable settlement for agent finance.",
                  }),
                ],
              }),
            ],
          }),
        });
    var ij = e.i(408842),
      iN = e.i(42407),
      iM = e.i(251684),
      iP = e.i(596348),
      iA = e.i(93431),
      iF = e.i(968974),
      iq = e.i(381835),
      iL = e.i(695602),
      iQ = e.i(37404),
      iV = e.i(936310),
      iz = e.i(832366);
    function iW(e = {}) {
      let t,
        r,
        n,
        i,
        { shimDisconnect: o = !0, unstable_shimAsyncInject: a } = e;
      function s() {
        let t = e.target;
        if ("function" == typeof t) {
          let e = t();
          if (e) return e;
        }
        return "object" == typeof t
          ? t
          : "string" == typeof t
          ? {
              ...(iB[t] ?? {
                id: t,
                name: `${t[0].toUpperCase()}${t.slice(1)}`,
                provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
              }),
            }
          : { id: "injected", name: "Injected", provider: (e) => e?.ethereum };
      }
      return (u) => ({
        get icon() {
          return s().icon;
        },
        get id() {
          return s().id;
        },
        get name() {
          return s().name;
        },
        get supportsSimulation() {
          return !0;
        },
        type: iW.type,
        async setup() {
          let r = await this.getProvider();
          r?.on &&
            e.target &&
            (n || ((n = this.onConnect.bind(this)), r.on("connect", n)),
            t ||
              ((t = this.onAccountsChanged.bind(this)),
              r.on("accountsChanged", t)));
        },
        async connect({
          chainId: a,
          isReconnecting: s,
          withCapabilities: c,
        } = {}) {
          let l = await this.getProvider();
          if (!l) throw new iz.ProviderNotFoundError();
          let d = [];
          if (s) d = await this.getAccounts().catch(() => []);
          else if (o)
            try {
              let e = await l.request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
              });
              (d = e[0]?.caveats?.[0]?.value?.map((e) => (0, iA.getAddress)(e)))
                .length > 0 && (d = await this.getAccounts());
            } catch (e) {
              if (e.code === iq.UserRejectedRequestError.code)
                throw new iq.UserRejectedRequestError(e);
              if (e.code === iq.ResourceUnavailableRpcError.code) throw e;
            }
          try {
            d?.length ||
              s ||
              (d = (await l.request({ method: "eth_requestAccounts" })).map(
                (e) => (0, iA.getAddress)(e)
              )),
              n && (l.removeListener("connect", n), (n = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                l.on("accountsChanged", t)),
              r ||
                ((r = this.onChainChanged.bind(this)), l.on("chainChanged", r)),
              i || ((i = this.onDisconnect.bind(this)), l.on("disconnect", i));
            let f = await this.getChainId();
            if (a && f !== a) {
              let e = await this.switchChain({ chainId: a }).catch((e) => {
                if (e.code === iq.UserRejectedRequestError.code) throw e;
                return { id: f };
              });
              f = e?.id ?? f;
            }
            return (
              o && (await u.storage?.removeItem(`${this.id}.disconnected`)),
              e.target || (await u.storage?.setItem("injected.connected", !0)),
              {
                accounts: c
                  ? d.map((e) => ({ address: e, capabilities: {} }))
                  : d,
                chainId: f,
              }
            );
          } catch (e) {
            if (e.code === iq.UserRejectedRequestError.code)
              throw new iq.UserRejectedRequestError(e);
            if (e.code === iq.ResourceUnavailableRpcError.code)
              throw new iq.ResourceUnavailableRpcError(e);
            throw e;
          }
        },
        async disconnect() {
          let t = await this.getProvider();
          if (!t) throw new iz.ProviderNotFoundError();
          r && (t.removeListener("chainChanged", r), (r = void 0)),
            i && (t.removeListener("disconnect", i), (i = void 0)),
            n || ((n = this.onConnect.bind(this)), t.on("connect", n));
          try {
            await (0, iQ.withTimeout)(
              () =>
                t.request({
                  method: "wallet_revokePermissions",
                  params: [{ eth_accounts: {} }],
                }),
              { timeout: 100 }
            );
          } catch {}
          o && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
            e.target || (await u.storage?.removeItem("injected.connected"));
        },
        async getAccounts() {
          let e = await this.getProvider();
          if (!e) throw new iz.ProviderNotFoundError();
          return (await e.request({ method: "eth_accounts" })).map((e) =>
            (0, iA.getAddress)(e)
          );
        },
        async getChainId() {
          let e = await this.getProvider();
          if (!e) throw new iz.ProviderNotFoundError();
          return Number(await e.request({ method: "eth_chainId" }));
        },
        async getProvider() {
          let e;
          if ("u" < typeof window) return;
          let t = s();
          return (
            (e =
              "function" == typeof t.provider
                ? t.provider(window)
                : "string" == typeof t.provider
                ? iU(window, t.provider)
                : t.provider) &&
              !e.removeListener &&
              ("off" in e && "function" == typeof e.off
                ? (e.removeListener = e.off)
                : (e.removeListener = () => {})),
            e
          );
        },
        async isAuthorized() {
          try {
            if (
              (o && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
              (!e.target && !(await u.storage?.getItem("injected.connected")))
            )
              return !1;
            if (!(await this.getProvider())) {
              if (void 0 !== a && !1 !== a) {
                let e = async () => (
                    "u" > typeof window &&
                      window.removeEventListener("ethereum#initialized", e),
                    !!(await this.getProvider())
                  ),
                  t = "number" == typeof a ? a : 1e3;
                if (
                  await Promise.race([
                    ...("u" > typeof window
                      ? [
                          new Promise((t) =>
                            window.addEventListener(
                              "ethereum#initialized",
                              () => t(e()),
                              { once: !0 }
                            )
                          ),
                        ]
                      : []),
                    new Promise((r) => setTimeout(() => r(e()), t)),
                  ])
                )
                  return !0;
              }
              throw new iz.ProviderNotFoundError();
            }
            return !!(await (0, iL.withRetry)(() => this.getAccounts())).length;
          } catch {
            return !1;
          }
        },
        async switchChain({ addEthereumChainParameter: e, chainId: t }) {
          let r = await this.getProvider();
          if (!r) throw new iz.ProviderNotFoundError();
          let n = u.chains.find((e) => e.id === t);
          if (!n)
            throw new iq.SwitchChainError(new iV.ChainNotConfiguredError());
          let i = new Promise((e) => {
            let r = (n) => {
              "chainId" in n &&
                n.chainId === t &&
                (u.emitter.off("change", r), e());
            };
            u.emitter.on("change", r);
          });
          try {
            return (
              await Promise.all([
                r
                  .request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: (0, iF.numberToHex)(t) }],
                  })
                  .then(async () => {
                    (await this.getChainId()) === t &&
                      u.emitter.emit("change", { chainId: t });
                  }),
                i,
              ]),
              n
            );
          } catch (o) {
            if (4902 === o.code || o?.data?.originalError?.code === 4902)
              try {
                let o,
                  a,
                  { default: s, ...c } = n.blockExplorers ?? {};
                e?.blockExplorerUrls
                  ? (o = e.blockExplorerUrls)
                  : s && (o = [s.url, ...Object.values(c).map((e) => e.url)]),
                  (a = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [n.rpcUrls.default?.http[0] ?? ""]);
                let l = {
                  blockExplorerUrls: o,
                  chainId: (0, iF.numberToHex)(t),
                  chainName: e?.chainName ?? n.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                  rpcUrls: a,
                };
                return (
                  await Promise.all([
                    r
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [l],
                      })
                      .then(async () => {
                        if ((await this.getChainId()) === t)
                          u.emitter.emit("change", { chainId: t });
                        else
                          throw new iq.UserRejectedRequestError(
                            Error("User rejected switch after adding network.")
                          );
                      }),
                    i,
                  ]),
                  n
                );
              } catch (e) {
                throw new iq.UserRejectedRequestError(e);
              }
            if (o.code === iq.UserRejectedRequestError.code)
              throw new iq.UserRejectedRequestError(o);
            throw new iq.SwitchChainError(o);
          }
        },
        async onAccountsChanged(e) {
          if (0 === e.length) this.onDisconnect();
          else if (u.emitter.listenerCount("connect")) {
            let e = (await this.getChainId()).toString();
            this.onConnect({ chainId: e }),
              o && (await u.storage?.removeItem(`${this.id}.disconnected`));
          } else
            u.emitter.emit("change", {
              accounts: e.map((e) => (0, iA.getAddress)(e)),
            });
        },
        onChainChanged(e) {
          let t = Number(e);
          u.emitter.emit("change", { chainId: t });
        },
        async onConnect(e) {
          let o = await this.getAccounts();
          if (0 === o.length) return;
          let a = Number(e.chainId);
          u.emitter.emit("connect", { accounts: o, chainId: a });
          let s = await this.getProvider();
          s &&
            (n && (s.removeListener("connect", n), (n = void 0)),
            t ||
              ((t = this.onAccountsChanged.bind(this)),
              s.on("accountsChanged", t)),
            r ||
              ((r = this.onChainChanged.bind(this)), s.on("chainChanged", r)),
            i || ((i = this.onDisconnect.bind(this)), s.on("disconnect", i)));
        },
        async onDisconnect(e) {
          let t = await this.getProvider();
          (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
            (u.emitter.emit("disconnect"),
            t &&
              (r && (t.removeListener("chainChanged", r), (r = void 0)),
              i && (t.removeListener("disconnect", i), (i = void 0)),
              n || ((n = this.onConnect.bind(this)), t.on("connect", n))));
        },
      });
    }
    iW.type = "injected";
    let iB = {
      coinbaseWallet: {
        id: "coinbaseWallet",
        name: "Coinbase Wallet",
        provider: (e) =>
          e?.coinbaseWalletExtension
            ? e.coinbaseWalletExtension
            : iU(e, "isCoinbaseWallet"),
      },
      metaMask: {
        id: "metaMask",
        name: "MetaMask",
        provider: (e) =>
          iU(e, (e) => {
            if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
              return !1;
            for (let t of [
              "isApexWallet",
              "isAvalanche",
              "isBitKeep",
              "isBlockWallet",
              "isKuCoinWallet",
              "isMathWallet",
              "isOkxWallet",
              "isOKExWallet",
              "isOneInchIOSWallet",
              "isOneInchAndroidWallet",
              "isOpera",
              "isPhantom",
              "isPortal",
              "isRabby",
              "isTokenPocket",
              "isTokenary",
              "isUniswapWallet",
              "isZerion",
            ])
              if (e[t]) return !1;
            return !0;
          }),
      },
      phantom: {
        id: "phantom",
        name: "Phantom",
        provider: (e) =>
          e?.phantom?.ethereum ? e.phantom?.ethereum : iU(e, "isPhantom"),
      },
    };
    function iU(e, t) {
      function r(e) {
        return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
      }
      let n = e.ethereum;
      return n?.providers
        ? n.providers.find((e) => r(e))
        : n && r(n)
        ? n
        : void 0;
    }
    var i$ = e.i(816218),
      i$ = i$,
      iK = e.i(945864),
      iH = e.i(111013),
      iH = iH,
      iY = e.i(635313),
      iY = iY,
      iG = iH;
    let iJ = (e) =>
        "privy" === e.walletClientType
          ? `${e.meta.id}.${e.address}`
          : e.meta.id,
      iX = async (e, t) => {
        let r = await Promise.all(
          e.map(async (e) => {
            let r = await e.getEthereumProvider(),
              n = iJ(e),
              i = t.connectors.find((e) => e.id === n);
            if (i) return i;
            let o = iW({
              target: {
                provider: r,
                id: n,
                name: e.meta.name,
                icon: "string" == typeof e.meta.icon ? e.meta.icon : void 0,
              },
            });
            return t._internal.connectors.setup(o);
          })
        );
        return t._internal.connectors.setState(r), r;
      },
      iZ = async (e, t, r) => {
        let n = t.id;
        await Promise.all([
          r.storage?.removeItem(`${n}.disconnected`),
          r.storage?.setItem("recentConnectorId", n),
        ]);
        let i = Number(e.chainId.replace("eip155:", ""));
        r.chains.find((e) => e.id === i) || (i = r.chains[0].id);
        let o = new Map([
          [t.uid, { accounts: [e.address], chainId: i, connector: t }],
        ]);
        r.setState((e) => ({
          ...e,
          chainId: i,
          connections: o,
          current: t.uid,
          status: "connected",
        }));
      },
      i0 = ({ children: e, setActiveWalletForWagmi: t }) => (
        (({ setActiveWalletForWagmi: e }) => {
          let { wallets: t, ready: r } = (0, i$.u)(),
            { user: n } = (0, iK.usePrivy)(),
            i = (0, iN.useConfig)(),
            { reconnect: o } = (function (e = {}) {
              let { mutation: t } = e,
                r = (0, iN.useConfig)(e),
                n = {
                  mutationFn: (e) => (0, iP.reconnect)(r, e),
                  mutationKey: ["reconnect"],
                },
                {
                  mutate: i,
                  mutateAsync: o,
                  ...a
                } = (0, iM.useMutation)({ ...t, ...n });
              return {
                ...a,
                connectors: r.connectors,
                reconnect: i,
                reconnectAsync: o,
              };
            })();
          (0, iH.c)({
            onSuccess: async ({ wallet: t }) => {
              let r = iJ(t);
              await i.storage?.removeItem(`${r}.disconnected`),
                !e &&
                  (await i.storage?.setItem("recentConnectorId", r),
                  i.connectors.some((e) => e.id === r) && o());
            },
          }),
            (0, iY.X)({
              onSuccess: async ({ wallet: t }) => {
                let r = iJ(t);
                await i.storage?.removeItem(`${r}.disconnected`),
                  !e &&
                    (await i.storage?.setItem("recentConnectorId", r),
                    i.connectors.some((e) => e.id === r) && o());
              },
            }),
            (0, iG.d)({
              onComplete: async ({ user: e, loginAccount: t }) => {
                if (!t || "wallet" === t.type) return;
                let r = e.linkedAccounts.filter(
                  (e) => "wallet" === e.type && "privy" === e.walletClientType
                );
                0 !== r.length &&
                  (await i.storage?.removeItem("io.privy.wallet.disconnected"),
                  await Promise.all(
                    r.map(async (e) => {
                      let t = `io.privy.wallet.${e.address}`;
                      await i.storage?.removeItem(`${t}.disconnected`);
                    })
                  ),
                  "connected" !== i.state.status && o());
              },
            }),
            (0, $.useEffect)(() => {
              e &&
                (async () => {
                  let r = e({ wallets: t, user: n });
                  if (!r) {
                    var a;
                    return (
                      (a = i)._internal.connectors.setState([]),
                      a.setState((e) => ({
                        chainId: e.chainId,
                        connections: new Map(),
                        current: null,
                        status: "disconnected",
                      })),
                      o()
                    );
                  }
                  let [s] = await iX([r], i);
                  s
                    ? (await iZ(r, s, i), o())
                    : console.error(
                        `Failed to setup connector for ${r.address}`
                      );
                })();
            }, [t, n, e]),
            (0, $.useEffect)(() => {
              e ||
                iX(t, i).then(async () => {
                  if (!r || "connected" === i.state.status) return;
                  let e = await i.storage?.getItem("recentConnectorId");
                  (e && (await i.storage?.getItem(`${e}.disconnected`))) || o();
                });
            }, [t, !e, r]);
        })({ setActiveWalletForWagmi: t }),
        (0, T.jsx)(T.Fragment, { children: e })
      ),
      i1 = ({ children: e, setActiveWalletForWagmi: t, ...r }) =>
        (0, T.jsx)(ij.WagmiProvider, {
          reconnectOnMount: !1,
          ...r,
          children: (0, T.jsx)(i0, { setActiveWalletForWagmi: t, children: e }),
        });
    var i2 = e.i(112768),
      i3 = e.i(860054);
    let i4 = (e) => (t) => {
        try {
          let r = e(t);
          if (r instanceof Promise) return r;
          return {
            then: (e) => i4(e)(r),
            catch(e) {
              return this;
            },
          };
        } catch (e) {
          return {
            then(e) {
              return this;
            },
            catch: (t) => i4(t)(e),
          };
        }
      },
      i6 = (e) => {
        let t,
          r = new Set(),
          n = (e, n) => {
            let i = "function" == typeof e ? e(t) : e;
            if (!Object.is(i, t)) {
              let e = t;
              (t = (null != n ? n : "object" != typeof i || null === i)
                ? i
                : Object.assign({}, t, i)),
                r.forEach((r) => r(t, e));
            }
          },
          i = () => t,
          o = {
            setState: n,
            getState: i,
            getInitialState: () => a,
            subscribe: (e) => (r.add(e), () => r.delete(e)),
          },
          a = (t = e(n, i, o));
        return o;
      },
      i5 = (e) => (e ? i6(e) : i6);
    e.i(255436);
    var i8 = e.i(254268);
    class i7 {
      constructor(e) {
        Object.defineProperty(this, "uid", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e,
        }),
          Object.defineProperty(this, "_emitter", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new i8.EventEmitter(),
          });
      }
      on(e, t) {
        this._emitter.on(e, t);
      }
      once(e, t) {
        this._emitter.once(e, t);
      }
      off(e, t) {
        this._emitter.off(e, t);
      }
      emit(e, ...t) {
        let r = t[0];
        this._emitter.emit(e, { uid: this.uid, ...r });
      }
      listenerCount(e) {
        return this._emitter.listenerCount(e);
      }
    }
    function i9(e, t) {
      return JSON.parse(e, (e, r) => {
        let n = r;
        return (
          n?.__type === "bigint" && (n = BigInt(n.value)),
          n?.__type === "Map" && (n = new Map(n.value)),
          t?.(e, n) ?? n
        );
      });
    }
    function oe(e, t) {
      return e.slice(0, t).join(".") || ".";
    }
    function ot(e, t) {
      let { length: r } = e;
      for (let n = 0; n < r; ++n) if (e[n] === t) return n + 1;
      return 0;
    }
    function or(e, t, r, n) {
      var i;
      let o, a, s, u;
      return JSON.stringify(
        e,
        ((i = (e, r) => {
          let n = r;
          return (
            "bigint" == typeof n &&
              (n = { __type: "bigint", value: r.toString() }),
            n instanceof Map &&
              (n = { __type: "Map", value: Array.from(r.entries()) }),
            t?.(e, n) ?? n
          );
        }),
        (o = true),
        (a = "function" == typeof n),
        (s = []),
        (u = []),
        function (e, t) {
          if ("object" == typeof t)
            if (s.length) {
              let r = ot(s, this);
              0 === r ? (s[s.length] = this) : (s.splice(r), u.splice(r)),
                (u[u.length] = e);
              let i = ot(s, t);
              if (0 !== i)
                return a ? n.call(this, e, t, oe(u, i)) : `[ref=${oe(u, i)}]`;
            } else (s[0] = t), (u[0] = e);
          return o ? i.call(this, e, t) : t;
        }),
        r ?? void 0
      );
    }
    let on = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
      oi = 256;
    var oo = e.i(583826),
      oa = e.i(130588),
      os = e.i(110902),
      ou = e.i(794778),
      oc = e.i(206400);
    let ol = (0, e.i(470732).defineChain)({
        id: 2368,
        name: "KiteAI Testnet",
        nativeCurrency: { decimals: 18, name: "KITE", symbol: "KITE" },
        rpcUrls: { default: { http: ["https://rpc-testnet.gokite.ai"] } },
        blockExplorers: {
          default: { name: "KiteScan", url: "https://testnet.kitescan.ai" },
        },
        contracts: {
          multicall3: {
            address: "0xC615c5cF403f4e83715718d51477AF4fDDD47af2",
            blockCreated: 0xf1eb43,
          },
        },
      }),
      od = (function (e) {
        let t,
          n,
          i,
          o,
          {
            multiInjectedProviderDiscovery: a = !0,
            storage: s = (function (e) {
              let {
                deserialize: t = i9,
                key: r = "wagmi",
                serialize: n = or,
                storage: i = on,
              } = e;
              function o(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...i,
                key: r,
                async getItem(e, n) {
                  let a = i.getItem(`${r}.${e}`),
                    s = await o(a);
                  return s ? t(s) ?? null : n ?? null;
                },
                async setItem(e, t) {
                  let a = `${r}.${e}`;
                  null === t
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, n(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${r}.${e}`));
                },
              };
            })({
              storage:
                ((n =
                  "u" > typeof window && window.localStorage
                    ? window.localStorage
                    : on),
                {
                  getItem: (e) => n.getItem(e),
                  removeItem(e) {
                    n.removeItem(e);
                  },
                  setItem(e, t) {
                    try {
                      n.setItem(e, t);
                    } catch {}
                  },
                }),
            }),
            syncConnectedChain: u = !0,
            ssr: c = !1,
            ...l
          } = e,
          d = "u" > typeof window && a ? (0, i2.createStore)() : void 0,
          f = i5(() => l.chains),
          h = i5(() => {
            let e = [],
              t = new Set();
            for (let r of l.connectors ?? []) {
              let n = p(r);
              if ((e.push(n), !c && n.rdns))
                for (let e of "string" == typeof n.rdns ? [n.rdns] : n.rdns)
                  t.add(e);
            }
            if (!c && d)
              for (let r of d.getProviders())
                t.has(r.info.rdns) || e.push(p(v(r)));
            return e;
          });
        function p(e) {
          let t = new i7(
              (function (e = 11) {
                if (!r || oi + e > 512) {
                  (r = ""), (oi = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(oi, oi++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: f.getState(),
                storage: s,
                transports: l.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", E), n.setup?.(), n;
        }
        function v(e) {
          let { info: t } = e,
            r = e.provider;
          return iW({ target: { ...t, id: t.rdns, provider: r } });
        }
        let m = new Map();
        function y() {
          return {
            chainId: f.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let g = "0.0.0-canary-";
        t = oo.version.startsWith(g)
          ? Number.parseInt(oo.version.replace(g, ""), 10)
          : Number.parseInt(oo.version.split(".")[0] ?? "0", 10);
        let b = i5(
          ((o = s
            ? ((i = {
                migrate(e, r) {
                  if (r === t) return e;
                  let n = y(),
                    i = w(e, n.chainId);
                  return { ...n, chainId: i };
                },
                name: "store",
                partialize: (e) => ({
                  connections: {
                    __type: "Map",
                    value: Array.from(e.connections.entries()).map(([e, t]) => {
                      let { id: r, name: n, type: i, uid: o } = t.connector;
                      return [
                        e,
                        {
                          ...t,
                          connector: { id: r, name: n, type: i, uid: o },
                        },
                      ];
                    }),
                  },
                  chainId: e.chainId,
                  current: e.current,
                }),
                merge(e, t) {
                  "object" == typeof e && e && "status" in e && delete e.status;
                  let r = w(e, t.chainId);
                  return { ...t, ...e, chainId: r };
                },
                skipHydration: c,
                storage: s,
                version: t,
              }),
              (e, t, r) => {
                let n,
                  o = {
                    storage: (function (e, t) {
                      let r;
                      try {
                        r = e();
                      } catch (e) {
                        return;
                      }
                      return {
                        getItem: (e) => {
                          var t;
                          let n = (e) =>
                              null === e ? null : JSON.parse(e, void 0),
                            i = null != (t = r.getItem(e)) ? t : null;
                          return i instanceof Promise ? i.then(n) : n(i);
                        },
                        setItem: (e, t) =>
                          r.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: (e) => r.removeItem(e),
                      };
                    })(() => localStorage),
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => ({ ...t, ...e }),
                    ...i,
                  },
                  a = !1,
                  s = new Set(),
                  u = new Set(),
                  c = o.storage;
                if (!c)
                  return y(
                    (...t) => {
                      console.warn(
                        `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
                      ),
                        e(...t);
                    },
                    t,
                    r
                  );
                let l = () => {
                    let e = o.partialize({ ...t() });
                    return c.setItem(o.name, { state: e, version: o.version });
                  },
                  d = r.setState;
                r.setState = (e, t) => {
                  d(e, t), l();
                };
                let f = y(
                  (...t) => {
                    e(...t), l();
                  },
                  t,
                  r
                );
                r.getInitialState = () => f;
                let h = () => {
                  var r, i;
                  if (!c) return;
                  (a = !1),
                    s.forEach((e) => {
                      var r;
                      return e(null != (r = t()) ? r : f);
                    });
                  let d =
                    (null == (i = o.onRehydrateStorage)
                      ? void 0
                      : i.call(o, null != (r = t()) ? r : f)) || void 0;
                  return i4(c.getItem.bind(c))(o.name)
                    .then((e) => {
                      if (e)
                        if (
                          "number" != typeof e.version ||
                          e.version === o.version
                        )
                          return [!1, e.state];
                        else {
                          if (o.migrate)
                            return [!0, o.migrate(e.state, e.version)];
                          console.error(
                            "State loaded from storage couldn't be migrated since no migrate function was provided"
                          );
                        }
                      return [!1, void 0];
                    })
                    .then((r) => {
                      var i;
                      let [a, s] = r;
                      if (
                        (e((n = o.merge(s, null != (i = t()) ? i : f)), !0), a)
                      )
                        return l();
                    })
                    .then(() => {
                      null == d || d(n, void 0),
                        (n = t()),
                        (a = !0),
                        u.forEach((e) => e(n));
                    })
                    .catch((e) => {
                      null == d || d(void 0, e);
                    });
                };
                return (
                  (r.persist = {
                    setOptions: (e) => {
                      (o = { ...o, ...e }), e.storage && (c = e.storage);
                    },
                    clearStorage: () => {
                      null == c || c.removeItem(o.name);
                    },
                    getOptions: () => o,
                    rehydrate: () => h(),
                    hasHydrated: () => a,
                    onHydrate: (e) => (
                      s.add(e),
                      () => {
                        s.delete(e);
                      }
                    ),
                    onFinishHydration: (e) => (
                      u.add(e),
                      () => {
                        u.delete(e);
                      }
                    ),
                  }),
                  o.skipHydration || h(),
                  n || f
                );
              })
            : y),
          (e, t, r) => {
            let n = r.subscribe;
            return (
              (r.subscribe = (e, t, i) => {
                let o = e;
                if (t) {
                  let n = (null == i ? void 0 : i.equalityFn) || Object.is,
                    a = e(r.getState());
                  (o = (r) => {
                    let i = e(r);
                    if (!n(a, i)) {
                      let e = a;
                      t((a = i), e);
                    }
                  }),
                    (null == i ? void 0 : i.fireImmediately) && t(a, a);
                }
                return n(o);
              }),
              o(e, t, r)
            );
          })
        );
        function w(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            f.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function x(e) {
          b.setState((t) => {
            let r = t.connections.get(e.uid);
            return r
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? r.accounts,
                    chainId: e.chainId ?? r.chainId,
                    connector: r.connector,
                  }),
                }
              : t;
          });
        }
        function E(e) {
          "connecting" !== b.getState().status &&
            "reconnecting" !== b.getState().status &&
            b.setState((t) => {
              let r = h.getState().find((t) => t.uid === e.uid);
              return r
                ? (r.emitter.listenerCount("connect") &&
                    r.emitter.off("connect", x),
                  r.emitter.listenerCount("change") ||
                    r.emitter.on("change", x),
                  r.emitter.listenerCount("disconnect") ||
                    r.emitter.on("disconnect", O),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: r,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function O(e) {
          b.setState((t) => {
            let r = t.connections.get(e.uid);
            if (r) {
              let e = r.connector;
              e.emitter.listenerCount("change") &&
                r.connector.emitter.off("change", x),
                e.emitter.listenerCount("disconnect") &&
                  r.connector.emitter.off("disconnect", O),
                e.emitter.listenerCount("connect") ||
                  r.connector.emitter.on("connect", E);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let n = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: n.connector.uid,
            };
          });
        }
        return (
          b.setState(y()),
          u &&
            b.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (f.getState().some((t) => t.id === e))
                  return b.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          d?.subscribe((e) => {
            let t = new Set(),
              r = new Set();
            for (let e of h.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  r.add(t);
            let n = [];
            for (let i of e) {
              if (r.has(i.info.rdns)) continue;
              let e = p(v(i));
              t.has(e.id) || n.push(e);
            }
            (!s || b.persist.hasHydrated()) &&
              h.setState((e) => [...e, ...n], !0);
          }),
          {
            get chains() {
              return f.getState();
            },
            get connectors() {
              return h.getState();
            },
            storage: s,
            getClient: function (e = {}) {
              let t,
                r = e.chainId ?? b.getState().chainId,
                n = f.getState().find((e) => e.id === r);
              if (e.chainId && !n) throw new iV.ChainNotConfiguredError();
              {
                let e = m.get(b.getState().chainId);
                if (e && !n) return e;
                if (!n) throw new iV.ChainNotConfiguredError();
              }
              {
                let e = m.get(r);
                if (e) return e;
              }
              if (l.client) t = l.client({ chain: n });
              else {
                let e = n.id,
                  r = f.getState().map((e) => e.id),
                  i = {};
                for (let [t, n] of Object.entries(l))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof n)
                      if (e in n) i[t] = n[e];
                      else {
                        if (r.some((e) => e in n)) continue;
                        i[t] = n;
                      }
                    else i[t] = n;
                t = (0, i3.createClient)({
                  ...i,
                  chain: n,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => l.transports[e]({ ...t, connectors: h }),
                });
              }
              return m.set(r, t), t;
            },
            get state() {
              return b.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(b.getState()) : e;
              let r = y();
              "object" != typeof t && (t = r),
                Object.keys(r).some((e) => !(e in t)) && (t = r),
                b.setState(t, !0);
            },
            subscribe: (e, t, r) =>
              b.subscribe(
                e,
                t,
                r ? { ...r, fireImmediately: r.emitImmediately } : void 0
              ),
            _internal: {
              mipd: d,
              async revalidate() {
                let e = b.getState(),
                  t = e.connections,
                  r = e.current;
                for (let [, e] of t) {
                  let n = e.connector;
                  (n.isAuthorized && (await n.isAuthorized())) ||
                    (t.delete(n.uid), r === n.uid && (r = null));
                }
                b.setState((e) => ({ ...e, connections: t, current: r }));
              },
              store: b,
              ssr: !!c,
              syncConnectedChain: u,
              transports: l.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(f.getState()) : e;
                  if (0 !== t.length) return f.setState(t, !0);
                },
                subscribe: (e) => f.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: v,
                setup: p,
                setState: (e) =>
                  h.setState("function" == typeof e ? e(h.getState()) : e, !0),
                subscribe: (e) => h.subscribe(e),
              },
              events: { change: x, connect: E, disconnect: O },
            },
          }
        );
      })({
        ssr: !0,
        ...(a = {
          chains: [oc.xLayer, ol, os.base, ou.robinhood],
          transports: {
            [oc.xLayer.id]: (0, oa.http)(),
            [ol.id]: (0, oa.http)(),
            [os.base.id]: (0, oa.http)(),
            [ou.robinhood.id]: (0, oa.http)(),
          },
          ssr: !0,
        }),
        connectors: a.connectors?.filter((e) => "mock" === e.type),
        multiInjectedProviderDiscovery: !1,
      });
    var of = "Invariant Violation",
      oh = Object.setPrototypeOf,
      op =
        void 0 === oh
          ? function (e, t) {
              return (e.__proto__ = t), e;
            }
          : oh,
      ov = (function (e) {
        function t(r) {
          void 0 === r && (r = of);
          var n =
            e.call(
              this,
              "number" == typeof r
                ? of +
                    ": " +
                    r +
                    " (see https://github.com/apollographql/invariant-packages)"
                : r
            ) || this;
          return (n.framesToPop = 1), (n.name = of), op(n, t.prototype), n;
        }
        return tp(t, e), t;
      })(Error);
    function om(e, t) {
      if (!e) throw new ov(t);
    }
    var oy = ["debug", "log", "warn", "error", "silent"],
      og = oy.indexOf("log");
    function ob(e) {
      return function () {
        if (oy.indexOf(e) >= og)
          return (console[e] || console.log).apply(console, arguments);
      };
    }
    ((v = om || (om = {})).debug = ob("debug")),
      (v.log = ob("log")),
      (v.warn = ob("warn")),
      (v.error = ob("error"));
    var ow = "3.8.4";
    function ox(e) {
      try {
        return e();
      } catch (e) {}
    }
    let oE =
      ox(function () {
        return globalThis;
      }) ||
      ox(function () {
        return window;
      }) ||
      ox(function () {
        return self;
      }) ||
      ox(function () {
        return e.g;
      }) ||
      ox(function () {
        return ox.constructor("return this")();
      });
    var oO = new Map();
    function oS(e) {
      var t = oO.get(e) || 1;
      return (
        oO.set(e, t + 1),
        ""
          .concat(e, ":")
          .concat(t, ":")
          .concat(Math.random().toString(36).slice(2))
      );
    }
    function ok(e, t) {
      void 0 === t && (t = 0);
      var r = oS("stringifyForDisplay");
      return JSON.stringify(
        e,
        function (e, t) {
          return void 0 === t ? r : t;
        },
        t
      )
        .split(JSON.stringify(r))
        .join("<undefined>");
    }
    function o_(e) {
      return function (t) {
        for (var r = [], n = 1; n < arguments.length; n++)
          r[n - 1] = arguments[n];
        "number" == typeof t ? e(oI(t, r)) : e.apply(void 0, tb([t], r, !1));
      };
    }
    var oC = Object.assign(
      function (e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        e || om(e, oI(t, r));
      },
      {
        debug: o_(om.debug),
        log: o_(om.log),
        warn: o_(om.warn),
        error: o_(om.error),
      }
    );
    function oT(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      return new ov(oI(e, t));
    }
    var oR = Symbol.for("ApolloErrorMessageHandler_" + ow);
    function oI(e, t) {
      if ((void 0 === t && (t = []), e)) {
        var r = t.map(function (e) {
          return "string" == typeof e ? e : ok(e, 2).slice(0, 1e3);
        });
        return (
          (oE[oR] && oE[oR](e, r)) ||
          "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
            encodeURIComponent(
              JSON.stringify({ version: ow, message: e, args: r })
            )
          )
        );
      }
    }
    var oD =
        "function" == typeof WeakMap &&
        "ReactNative" !==
          ox(function () {
            return navigator.product;
          }),
      oj = "function" == typeof WeakSet,
      oN = "function" == typeof Symbol && "function" == typeof Symbol.for,
      oM = oN && Symbol.asyncIterator;
    ox(function () {
      return window.document.createElement;
    }),
      ox(function () {
        return navigator.userAgent.indexOf("jsdom") >= 0;
      });
    var oP = oN ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__",
      oA = function (e) {
        var t,
          r = e.client,
          n = e.children,
          i =
            (oC("createContext" in $, 43),
            (t = $.createContext[oP]) ||
              (Object.defineProperty($.createContext, oP, {
                value: (t = $.createContext({})),
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              (t.displayName = "ApolloContext")),
            t),
          o = $.useContext(i),
          a = $.useMemo(
            function () {
              return tv(tv({}, o), { client: r || o.client });
            },
            [o, r]
          );
        return oC(a.client, 44), $.createElement(i.Provider, { value: a }, n);
      };
    function oF(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function oq(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function oL(e, t, r) {
      return (
        t && oq(e.prototype, t),
        r && oq(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    var oQ = function () {
        return "function" == typeof Symbol;
      },
      oV = function (e) {
        return oQ() && !!Symbol[e];
      },
      oz = function (e) {
        return oV(e) ? Symbol[e] : "@@" + e;
      };
    oQ() && !oV("observable") && (Symbol.observable = Symbol("observable"));
    var oW = oz("iterator"),
      oB = oz("observable"),
      oU = oz("species");
    function o$(e, t) {
      var r = e[t];
      if (null != r) {
        if ("function" != typeof r) throw TypeError(r + " is not a function");
        return r;
      }
    }
    function oK(e) {
      var t = e.constructor;
      return (
        void 0 !== t && null === (t = t[oU]) && (t = void 0),
        void 0 !== t ? t : o2
      );
    }
    function oH(e) {
      oH.log
        ? oH.log(e)
        : setTimeout(function () {
            throw e;
          });
    }
    function oY(e) {
      Promise.resolve().then(function () {
        try {
          e();
        } catch (e) {
          oH(e);
        }
      });
    }
    function oG(e) {
      var t = e._cleanup;
      if (void 0 !== t && ((e._cleanup = void 0), t))
        try {
          if ("function" == typeof t) t();
          else {
            var r = o$(t, "unsubscribe");
            r && r.call(t);
          }
        } catch (e) {
          oH(e);
        }
    }
    function oJ(e) {
      (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
    }
    function oX(e, t, r) {
      e._state = "running";
      var n = e._observer;
      try {
        var i = o$(n, t);
        switch (t) {
          case "next":
            i && i.call(n, r);
            break;
          case "error":
            if ((oJ(e), i)) i.call(n, r);
            else throw r;
            break;
          case "complete":
            oJ(e), i && i.call(n);
        }
      } catch (e) {
        oH(e);
      }
      "closed" === e._state
        ? oG(e)
        : "running" === e._state && (e._state = "ready");
    }
    function oZ(e, t, r) {
      if ("closed" !== e._state) {
        if ("buffering" === e._state)
          return void e._queue.push({ type: t, value: r });
        if ("ready" !== e._state) {
          (e._state = "buffering"),
            (e._queue = [{ type: t, value: r }]),
            oY(function () {
              var t = e._queue;
              if (t) {
                (e._queue = void 0), (e._state = "ready");
                for (
                  var r = 0;
                  r < t.length &&
                  (oX(e, t[r].type, t[r].value), "closed" !== e._state);
                  ++r
                );
              }
            });
          return;
        }
        oX(e, t, r);
      }
    }
    var o0 = (function () {
        function e(e, t) {
          (this._cleanup = void 0),
            (this._observer = e),
            (this._queue = void 0),
            (this._state = "initializing");
          var r = new o1(this);
          try {
            this._cleanup = t.call(void 0, r);
          } catch (e) {
            r.error(e);
          }
          "initializing" === this._state && (this._state = "ready");
        }
        return (
          (e.prototype.unsubscribe = function () {
            "closed" !== this._state && (oJ(this), oG(this));
          }),
          oL(e, [
            {
              key: "closed",
              get: function () {
                return "closed" === this._state;
              },
            },
          ]),
          e
        );
      })(),
      o1 = (function () {
        function e(e) {
          this._subscription = e;
        }
        var t = e.prototype;
        return (
          (t.next = function (e) {
            oZ(this._subscription, "next", e);
          }),
          (t.error = function (e) {
            oZ(this._subscription, "error", e);
          }),
          (t.complete = function () {
            oZ(this._subscription, "complete");
          }),
          oL(e, [
            {
              key: "closed",
              get: function () {
                return "closed" === this._subscription._state;
              },
            },
          ]),
          e
        );
      })(),
      o2 = (function () {
        function e(t) {
          if (!(this instanceof e))
            throw TypeError("Observable cannot be called as a function");
          if ("function" != typeof t)
            throw TypeError("Observable initializer must be a function");
          this._subscriber = t;
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (e) {
            return (
              ("object" != typeof e || null === e) &&
                (e = { next: e, error: arguments[1], complete: arguments[2] }),
              new o0(e, this._subscriber)
            );
          }),
          (t.forEach = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              if ("function" != typeof e)
                return void n(TypeError(e + " is not a function"));
              function i() {
                o.unsubscribe(), r();
              }
              var o = t.subscribe({
                next: function (t) {
                  try {
                    e(t, i);
                  } catch (e) {
                    n(e), o.unsubscribe();
                  }
                },
                error: n,
                complete: r,
              });
            });
          }),
          (t.map = function (e) {
            var t = this;
            if ("function" != typeof e)
              throw TypeError(e + " is not a function");
            return new (oK(this))(function (r) {
              return t.subscribe({
                next: function (t) {
                  try {
                    t = e(t);
                  } catch (e) {
                    return r.error(e);
                  }
                  r.next(t);
                },
                error: function (e) {
                  r.error(e);
                },
                complete: function () {
                  r.complete();
                },
              });
            });
          }),
          (t.filter = function (e) {
            var t = this;
            if ("function" != typeof e)
              throw TypeError(e + " is not a function");
            return new (oK(this))(function (r) {
              return t.subscribe({
                next: function (t) {
                  try {
                    if (!e(t)) return;
                  } catch (e) {
                    return r.error(e);
                  }
                  r.next(t);
                },
                error: function (e) {
                  r.error(e);
                },
                complete: function () {
                  r.complete();
                },
              });
            });
          }),
          (t.reduce = function (e) {
            var t = this;
            if ("function" != typeof e)
              throw TypeError(e + " is not a function");
            var r = oK(this),
              n = arguments.length > 1,
              i = !1,
              o = arguments[1],
              a = o;
            return new r(function (r) {
              return t.subscribe({
                next: function (t) {
                  var o = !i;
                  if (((i = !0), !o || n))
                    try {
                      a = e(a, t);
                    } catch (e) {
                      return r.error(e);
                    }
                  else a = t;
                },
                error: function (e) {
                  r.error(e);
                },
                complete: function () {
                  if (!i && !n)
                    return r.error(
                      TypeError("Cannot reduce an empty sequence")
                    );
                  r.next(a), r.complete();
                },
              });
            });
          }),
          (t.concat = function () {
            for (
              var e = this, t = arguments.length, r = Array(t), n = 0;
              n < t;
              n++
            )
              r[n] = arguments[n];
            var i = oK(this);
            return new i(function (t) {
              var n,
                o = 0;
              return (
                !(function e(a) {
                  n = a.subscribe({
                    next: function (e) {
                      t.next(e);
                    },
                    error: function (e) {
                      t.error(e);
                    },
                    complete: function () {
                      o === r.length
                        ? ((n = void 0), t.complete())
                        : e(i.from(r[o++]));
                    },
                  });
                })(e),
                function () {
                  n && (n.unsubscribe(), (n = void 0));
                }
              );
            });
          }),
          (t.flatMap = function (e) {
            var t = this;
            if ("function" != typeof e)
              throw TypeError(e + " is not a function");
            var r = oK(this);
            return new r(function (n) {
              var i = [],
                o = t.subscribe({
                  next: function (t) {
                    if (e)
                      try {
                        t = e(t);
                      } catch (e) {
                        return n.error(e);
                      }
                    var o = r.from(t).subscribe({
                      next: function (e) {
                        n.next(e);
                      },
                      error: function (e) {
                        n.error(e);
                      },
                      complete: function () {
                        var e = i.indexOf(o);
                        e >= 0 && i.splice(e, 1), a();
                      },
                    });
                    i.push(o);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    a();
                  },
                });
              function a() {
                o.closed && 0 === i.length && n.complete();
              }
              return function () {
                i.forEach(function (e) {
                  return e.unsubscribe();
                }),
                  o.unsubscribe();
              };
            });
          }),
          (t[oB] = function () {
            return this;
          }),
          (e.from = function (t) {
            var r = "function" == typeof this ? this : e;
            if (null == t) throw TypeError(t + " is not an object");
            var n = o$(t, oB);
            if (n) {
              var i = n.call(t);
              if (Object(i) !== i) throw TypeError(i + " is not an object");
              return i instanceof o2 && i.constructor === r
                ? i
                : new r(function (e) {
                    return i.subscribe(e);
                  });
            }
            if (oV("iterator") && (n = o$(t, oW)))
              return new r(function (e) {
                oY(function () {
                  if (!e.closed) {
                    for (
                      var r,
                        i = (function (e, t) {
                          var r =
                            ("u" > typeof Symbol && e[Symbol.iterator]) ||
                            e["@@iterator"];
                          if (r) return (r = r.call(e)).next.bind(r);
                          if (
                            Array.isArray(e) ||
                            (r = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return oF(e, void 0);
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                if (
                                  ("Object" === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  "Map" === r || "Set" === r)
                                )
                                  return Array.from(e);
                                if (
                                  "Arguments" === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                  )
                                )
                                  return oF(e, void 0);
                              }
                            })(e))
                          ) {
                            r && (e = r);
                            var n = 0;
                            return function () {
                              return n >= e.length
                                ? { done: !0 }
                                : { done: !1, value: e[n++] };
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })(n.call(t));
                      !(r = i()).done;

                    ) {
                      var o = r.value;
                      if ((e.next(o), e.closed)) return;
                    }
                    e.complete();
                  }
                });
              });
            if (Array.isArray(t))
              return new r(function (e) {
                oY(function () {
                  if (!e.closed) {
                    for (var r = 0; r < t.length; ++r)
                      if ((e.next(t[r]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            throw TypeError(t + " is not observable");
          }),
          (e.of = function () {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return new ("function" == typeof this ? this : e)(function (e) {
              oY(function () {
                if (!e.closed) {
                  for (var t = 0; t < r.length; ++t)
                    if ((e.next(r[t]), e.closed)) return;
                  e.complete();
                }
              });
            });
          }),
          oL(e, null, [
            {
              key: oU,
              get: function () {
                return this;
              },
            },
          ]),
          e
        );
      })();
    function o3(e) {
      return null !== e && "object" == typeof e;
    }
    function o4(e, t) {
      var r = t,
        n = [];
      return (
        e.definitions.forEach(function (e) {
          if ("OperationDefinition" === e.kind)
            throw oT(
              68,
              e.operation,
              e.name ? " named '".concat(e.name.value, "'") : ""
            );
          "FragmentDefinition" === e.kind && n.push(e);
        }),
        void 0 === r &&
          (oC(1 === n.length, 69, n.length), (r = n[0].name.value)),
        tv(tv({}, e), {
          definitions: tb(
            [
              {
                kind: "OperationDefinition",
                operation: "query",
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "FragmentSpread",
                      name: { kind: "Name", value: r },
                    },
                  ],
                },
              },
            ],
            e.definitions,
            !0
          ),
        })
      );
    }
    function o6(e) {
      void 0 === e && (e = []);
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.name.value] = e;
        }),
        t
      );
    }
    function o5(e, t) {
      switch (e.kind) {
        case "InlineFragment":
          return e;
        case "FragmentSpread":
          var r = e.name.value;
          if ("function" == typeof t) return t(r);
          var n = t && t[r];
          return oC(n, 70, r), n || null;
        default:
          return null;
      }
    }
    function o8(e) {
      return { __ref: String(e) };
    }
    function o7(e) {
      return !!(e && "object" == typeof e && "string" == typeof e.__ref);
    }
    function o9(e, t, r, n) {
      if ("IntValue" === r.kind || "FloatValue" === r.kind)
        e[t.value] = Number(r.value);
      else if ("BooleanValue" === r.kind || "StringValue" === r.kind)
        e[t.value] = r.value;
      else if ("ObjectValue" === r.kind) {
        var i = {};
        r.fields.map(function (e) {
          return o9(i, e.name, e.value, n);
        }),
          (e[t.value] = i);
      } else if ("Variable" === r.kind) {
        var o = (n || {})[r.name.value];
        e[t.value] = o;
      } else if ("ListValue" === r.kind)
        e[t.value] = r.values.map(function (e) {
          var r = {};
          return o9(r, t, e, n), r[t.value];
        });
      else if ("EnumValue" === r.kind) e[t.value] = r.value;
      else if ("NullValue" === r.kind) e[t.value] = null;
      else throw oT(79, t.value, r.kind);
    }
    oQ() &&
      Object.defineProperty(o2, Symbol("extensions"), {
        value: { symbol: oB, hostReportError: oH },
        configurable: !0,
      });
    var ae = [
        "connection",
        "include",
        "skip",
        "client",
        "rest",
        "export",
        "nonreactive",
      ],
      at = Object.assign(
        function (e, t, r) {
          if (t && r && r.connection && r.connection.key)
            if (!r.connection.filter || !(r.connection.filter.length > 0))
              return r.connection.key;
            else {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return (
                n.forEach(function (e) {
                  i[e] = t[e];
                }),
                "".concat(r.connection.key, "(").concat(ar(i), ")")
              );
            }
          var o = e;
          if (t) {
            var a = ar(t);
            o += "(".concat(a, ")");
          }
          return (
            r &&
              Object.keys(r).forEach(function (e) {
                -1 === ae.indexOf(e) &&
                  (r[e] && Object.keys(r[e]).length
                    ? (o += "@".concat(e, "(").concat(ar(r[e]), ")"))
                    : (o += "@".concat(e)));
              }),
            o
          );
        },
        {
          setStringify: function (e) {
            var t = ar;
            return (ar = e), t;
          },
        }
      ),
      ar = function (e) {
        return JSON.stringify(e, an);
      };
    function an(e, t) {
      return (
        o3(t) &&
          !Array.isArray(t) &&
          (t = Object.keys(t)
            .sort()
            .reduce(function (e, r) {
              return (e[r] = t[r]), e;
            }, {})),
        t
      );
    }
    function ai(e, t) {
      if (e.arguments && e.arguments.length) {
        var r = {};
        return (
          e.arguments.forEach(function (e) {
            return o9(r, e.name, e.value, t);
          }),
          r
        );
      }
      return null;
    }
    function ao(e) {
      return e.alias ? e.alias.value : e.name.value;
    }
    function aa(e, t, r) {
      for (var n, i = 0, o = t.selections; i < o.length; i++) {
        var a = o[i];
        if (as(a)) {
          if ("__typename" === a.name.value) return e[ao(a)];
        } else n ? n.push(a) : (n = [a]);
      }
      if ("string" == typeof e.__typename) return e.__typename;
      if (n)
        for (var s = 0, u = n; s < u.length; s++) {
          var a = u[s],
            c = aa(e, o5(a, r).selectionSet, r);
          if ("string" == typeof c) return c;
        }
    }
    function as(e) {
      return "Field" === e.kind;
    }
    function au(e) {
      oC(e && "Document" === e.kind, 71);
      var t = e.definitions
        .filter(function (e) {
          return "FragmentDefinition" !== e.kind;
        })
        .map(function (e) {
          if ("OperationDefinition" !== e.kind) throw oT(72, e.kind);
          return e;
        });
      return oC(t.length <= 1, 73, t.length), e;
    }
    function ac(e) {
      return (
        au(e),
        e.definitions.filter(function (e) {
          return "OperationDefinition" === e.kind;
        })[0]
      );
    }
    function al(e) {
      return (
        e.definitions
          .filter(function (e) {
            return "OperationDefinition" === e.kind && !!e.name;
          })
          .map(function (e) {
            return e.name.value;
          })[0] || null
      );
    }
    function ad(e) {
      return e.definitions.filter(function (e) {
        return "FragmentDefinition" === e.kind;
      });
    }
    function af(e) {
      var t = ac(e);
      return oC(t && "query" === t.operation, 74), t;
    }
    function ah(e) {
      au(e);
      for (var t, r = 0, n = e.definitions; r < n.length; r++) {
        var i = n[r];
        if ("OperationDefinition" === i.kind) {
          var o = i.operation;
          if ("query" === o || "mutation" === o || "subscription" === o)
            return i;
        }
        "FragmentDefinition" !== i.kind || t || (t = i);
      }
      if (t) return t;
      throw oT(78);
    }
    function ap(e) {
      var t = Object.create(null),
        r = e && e.variableDefinitions;
      return (
        r &&
          r.length &&
          r.forEach(function (e) {
            e.defaultValue && o9(t, e.variable.name, e.defaultValue);
          }),
        t
      );
    }
    function av(e, t) {
      return t ? t(e) : o2.of();
    }
    function am(e) {
      return "function" == typeof e ? new ag(e) : e;
    }
    function ay(e) {
      return e.request.length <= 1;
    }
    var ag = (function () {
        function e(e) {
          e && (this.request = e);
        }
        return (
          (e.empty = function () {
            return new e(function () {
              return o2.of();
            });
          }),
          (e.from = function (t) {
            return 0 === t.length
              ? e.empty()
              : t.map(am).reduce(function (e, t) {
                  return e.concat(t);
                });
          }),
          (e.split = function (t, r, n) {
            var i = am(r),
              o = am(n || new e(av));
            return new e(
              ay(i) && ay(o)
                ? function (e) {
                    return t(e)
                      ? i.request(e) || o2.of()
                      : o.request(e) || o2.of();
                  }
                : function (e, r) {
                    return t(e)
                      ? i.request(e, r) || o2.of()
                      : o.request(e, r) || o2.of();
                  }
            );
          }),
          (e.execute = function (e, t) {
            var r, n, i, o, a;
            return (
              e.request(
                ((i = t.context),
                (n = {
                  variables:
                    (r = (function (e) {
                      for (
                        var t = [
                            "query",
                            "operationName",
                            "variables",
                            "extensions",
                            "context",
                          ],
                          r = 0,
                          n = Object.keys(e);
                        r < n.length;
                        r++
                      ) {
                        var i = n[r];
                        if (0 > t.indexOf(i)) throw oT(41, i);
                      }
                      return e;
                    })(t)).variables || {},
                  extensions: r.extensions || {},
                  operationName: r.operationName,
                  query: r.query,
                }).operationName ||
                  (n.operationName =
                    "string" != typeof n.query ? al(n.query) || void 0 : ""),
                (o = n),
                (a = tv({}, i)),
                Object.defineProperty(o, "setContext", {
                  enumerable: !1,
                  value: function (e) {
                    a =
                      "function" == typeof e
                        ? tv(tv({}, a), e(a))
                        : tv(tv({}, a), e);
                  },
                }),
                Object.defineProperty(o, "getContext", {
                  enumerable: !1,
                  value: function () {
                    return tv({}, a);
                  },
                }),
                o)
              ) || o2.of()
            );
          }),
          (e.concat = function (t, r) {
            var n = am(t);
            if (ay(n)) return !1 !== globalThis.__DEV__ && oC.warn(33, n), n;
            var i = am(r);
            return new e(
              ay(i)
                ? function (e) {
                    return (
                      n.request(e, function (e) {
                        return i.request(e) || o2.of();
                      }) || o2.of()
                    );
                  }
                : function (e, t) {
                    return (
                      n.request(e, function (e) {
                        return i.request(e, t) || o2.of();
                      }) || o2.of()
                    );
                  }
            );
          }),
          (e.prototype.split = function (t, r, n) {
            return this.concat(e.split(t, r, n || new e(av)));
          }),
          (e.prototype.concat = function (t) {
            return e.concat(this, t);
          }),
          (e.prototype.request = function (e, t) {
            throw oT(34);
          }),
          (e.prototype.onError = function (e, t) {
            if (t && t.error) return t.error(e), !1;
            throw e;
          }),
          (e.prototype.setOnError = function (e) {
            return (this.onError = e), this;
          }),
          e
        );
      })(),
      ab = ag.execute;
    let aw = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: [
          "description",
          "name",
          "variableDefinitions",
          "directives",
          "selectionSet",
        ],
        VariableDefinition: [
          "description",
          "variable",
          "type",
          "defaultValue",
          "directives",
        ],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "description",
          "name",
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet",
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields",
        ],
        FieldDefinition: [
          "description",
          "name",
          "arguments",
          "type",
          "directives",
        ],
        InputValueDefinition: [
          "description",
          "name",
          "type",
          "defaultValue",
          "directives",
        ],
        InterfaceTypeDefinition: [
          "description",
          "name",
          "interfaces",
          "directives",
          "fields",
        ],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: [
          "description",
          "name",
          "directives",
          "fields",
        ],
        DirectiveDefinition: [
          "description",
          "name",
          "arguments",
          "directives",
          "locations",
        ],
        SchemaExtension: ["directives", "operationTypes"],
        DirectiveExtension: ["name", "directives"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"],
        TypeCoordinate: ["name"],
        MemberCoordinate: ["name", "memberName"],
        ArgumentCoordinate: ["name", "fieldName", "argumentName"],
        DirectiveCoordinate: ["name"],
        DirectiveArgumentCoordinate: ["name", "argumentName"],
      },
      ax = new Set(Object.keys(aw));
    function aE(e) {
      let t = null == e ? void 0 : e.kind;
      return "string" == typeof t && ax.has(t);
    }
    ((m = O || (O = {})).QUERY = "query"),
      (m.MUTATION = "mutation"),
      (m.SUBSCRIPTION = "subscription"),
      ((y = S || (S = {})).NAME = "Name"),
      (y.DOCUMENT = "Document"),
      (y.OPERATION_DEFINITION = "OperationDefinition"),
      (y.VARIABLE_DEFINITION = "VariableDefinition"),
      (y.SELECTION_SET = "SelectionSet"),
      (y.FIELD = "Field"),
      (y.ARGUMENT = "Argument"),
      (y.FRAGMENT_SPREAD = "FragmentSpread"),
      (y.INLINE_FRAGMENT = "InlineFragment"),
      (y.FRAGMENT_DEFINITION = "FragmentDefinition"),
      (y.VARIABLE = "Variable"),
      (y.INT = "IntValue"),
      (y.FLOAT = "FloatValue"),
      (y.STRING = "StringValue"),
      (y.BOOLEAN = "BooleanValue"),
      (y.NULL = "NullValue"),
      (y.ENUM = "EnumValue"),
      (y.LIST = "ListValue"),
      (y.OBJECT = "ObjectValue"),
      (y.OBJECT_FIELD = "ObjectField"),
      (y.DIRECTIVE = "Directive"),
      (y.NAMED_TYPE = "NamedType"),
      (y.LIST_TYPE = "ListType"),
      (y.NON_NULL_TYPE = "NonNullType"),
      (y.SCHEMA_DEFINITION = "SchemaDefinition"),
      (y.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
      (y.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
      (y.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
      (y.FIELD_DEFINITION = "FieldDefinition"),
      (y.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
      (y.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
      (y.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
      (y.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
      (y.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
      (y.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
      (y.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
      (y.SCHEMA_EXTENSION = "SchemaExtension"),
      (y.DIRECTIVE_EXTENSION = "DirectiveExtension"),
      (y.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
      (y.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
      (y.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
      (y.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
      (y.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
      (y.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"),
      (y.TYPE_COORDINATE = "TypeCoordinate"),
      (y.MEMBER_COORDINATE = "MemberCoordinate"),
      (y.ARGUMENT_COORDINATE = "ArgumentCoordinate"),
      (y.DIRECTIVE_COORDINATE = "DirectiveCoordinate"),
      (y.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate");
    let aO = Object.freeze({});
    function aS(e, t, r = aw) {
      let n,
        i,
        o,
        a = new Map();
      for (let e of Object.values(S))
        a.set(
          e,
          (function (e, t) {
            let r = e[t];
            return "object" == typeof r
              ? r
              : "function" == typeof r
              ? { enter: r, leave: void 0 }
              : { enter: e.enter, leave: e.leave };
          })(t, e)
        );
      let s = Array.isArray(e),
        u = [e],
        c = -1,
        l = [],
        d = e,
        f = [],
        h = [];
      do {
        var p, v, m;
        let e,
          y = ++c === u.length,
          g = y && 0 !== l.length;
        if (y) {
          if (
            ((i = 0 === h.length ? void 0 : f[f.length - 1]),
            (d = o),
            (o = h.pop()),
            g)
          )
            if (s) {
              d = d.slice();
              let e = 0;
              for (let [t, r] of l) {
                let n = t - e;
                null === r ? (d.splice(n, 1), e++) : (d[n] = r);
              }
            } else for (let [e, t] of ((d = { ...d }), l)) d[e] = t;
          (c = n.index),
            (u = n.keys),
            (l = n.edits),
            (s = n.inArray),
            (n = n.prev);
        } else if (o) {
          if (null == (d = o[(i = s ? c : u[c])])) continue;
          f.push(i);
        }
        if (!Array.isArray(d)) {
          aE(d) ||
            (function (e, t) {
              if (!e) throw Error(t);
            })(
              !1,
              `Invalid AST Node: ${(function e(t, r) {
                switch (typeof t) {
                  case "string":
                    return JSON.stringify(t);
                  case "function":
                    return t.name ? `[function ${t.name}]` : "[function]";
                  case "object":
                    return (function (t, r) {
                      let n;
                      if (null === t) return "null";
                      if (r.includes(t)) return "[Circular]";
                      let i = [...r, t];
                      if ("function" == typeof t.toJSON) {
                        let r = t.toJSON();
                        if (r !== t) return "string" == typeof r ? r : e(r, i);
                      } else if (Array.isArray(t)) {
                        var o,
                          a,
                          s = t,
                          u = i;
                        if (0 === s.length) return "[]";
                        if (u.length > 2) return "[Array]";
                        let r = Math.min(10, s.length),
                          n = s.length - r,
                          c = [];
                        for (let t = 0; t < r; ++t) c.push(e(s[t], u));
                        return (
                          1 === n
                            ? c.push("... 1 more item")
                            : n > 1 && c.push(`... ${n} more items`),
                          "[" + c.join(", ") + "]"
                        );
                      }
                      return (
                        (o = t),
                        (a = i),
                        0 === (n = Object.entries(o)).length
                          ? "{}"
                          : a.length > 2
                          ? "[" +
                            (function (e) {
                              let t = Object.prototype.toString
                                .call(e)
                                .replace(/^\[object /, "")
                                .replace(/]$/, "");
                              if (
                                "Object" === t &&
                                "function" == typeof e.constructor
                              ) {
                                let t = e.constructor.name;
                                if ("string" == typeof t && "" !== t) return t;
                              }
                              return t;
                            })(o) +
                            "]"
                          : "{ " +
                            n.map(([t, r]) => t + ": " + e(r, a)).join(", ") +
                            " }"
                      );
                    })(t, r);
                  default:
                    return String(t);
                }
              })(d, [])}.`
            );
          let r = y
            ? null == (p = a.get(d.kind))
              ? void 0
              : p.leave
            : null == (v = a.get(d.kind))
            ? void 0
            : v.enter;
          if ((e = null == r ? void 0 : r.call(t, d, i, o, f, h)) === aO) break;
          if (!1 === e) {
            if (!y) {
              f.pop();
              continue;
            }
          } else if (void 0 !== e && (l.push([i, e]), !y))
            if (aE(e)) d = e;
            else {
              f.pop();
              continue;
            }
        }
        void 0 === e && g && l.push([i, d]),
          y
            ? f.pop()
            : ((n = { inArray: s, index: c, keys: u, edits: l, prev: n }),
              (u = (s = Array.isArray(d))
                ? d
                : null != (m = r[d.kind])
                ? m
                : []),
              (c = -1),
              (l = []),
              o && h.push(o),
              (o = d));
      } while (void 0 !== n);
      return 0 !== l.length ? l[l.length - 1][1] : e;
    }
    function ak(e, t) {
      var r,
        n,
        i = e.directives;
      return (
        !i ||
        !i.length ||
        ((n = []),
        (r = i) &&
          r.length &&
          r.forEach(function (e) {
            if ("skip" === (t = e.name.value) || "include" === t) {
              var t,
                r = e.arguments,
                i = e.name.value;
              oC(r && 1 === r.length, 65, i);
              var o = r[0];
              oC(o.name && "if" === o.name.value, 66, i);
              var a = o.value;
              oC(
                a && ("Variable" === a.kind || "BooleanValue" === a.kind),
                67,
                i
              ),
                n.push({ directive: e, ifArgument: o });
            }
          }),
        n).every(function (e) {
          var r = e.directive,
            n = e.ifArgument,
            i = !1;
          return (
            "Variable" === n.value.kind
              ? oC(
                  void 0 !== (i = t && t[n.value.name.value]),
                  64,
                  r.name.value
                )
              : (i = n.value.value),
            "skip" === r.name.value ? !i : i
          );
        })
      );
    }
    function a_(e, t, r) {
      var n = new Set(e),
        i = n.size;
      return (
        aS(t, {
          Directive: function (e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return aO;
          },
        }),
        r ? !n.size : n.size < i
      );
    }
    var aC = function (e, t) {
        var r;
        try {
          r = JSON.stringify(e);
        } catch (e) {
          var n = oT(37, t, e.message);
          throw ((n.parseError = e), n);
        }
        return r;
      },
      aT = function (e, t) {
        var r = e.getContext().uri;
        return r || ("function" == typeof t ? t(e) : t || "/graphql");
      };
    function aR(e) {
      var t = {
        next: function () {
          return e.read();
        },
      };
      return (
        oM &&
          (t[Symbol.asyncIterator] = function () {
            return this;
          }),
        t
      );
    }
    var aI = function (e, t, r) {
        var n = Error(r);
        throw (
          ((n.name = "ServerError"),
          (n.response = e),
          (n.statusCode = e.status),
          (n.result = t),
          n)
        );
      },
      aD = Symbol(),
      aj = function (e) {
        var t = tb(
          tb(tb([], e.graphQLErrors, !0), e.clientErrors, !0),
          e.protocolErrors,
          !0
        );
        return (
          e.networkError && t.push(e.networkError),
          t
            .map(function (e) {
              return (o3(e) && e.message) || "Error message not found.";
            })
            .join("\n")
        );
      },
      aN = (function (e) {
        function t(r) {
          var n = r.graphQLErrors,
            i = r.protocolErrors,
            o = r.clientErrors,
            a = r.networkError,
            s = r.errorMessage,
            u = r.extraInfo,
            c = e.call(this, s) || this;
          return (
            (c.name = "ApolloError"),
            (c.graphQLErrors = n || []),
            (c.protocolErrors = i || []),
            (c.clientErrors = o || []),
            (c.networkError = a || null),
            (c.message = s || aj(c)),
            (c.extraInfo = u),
            (c.__proto__ = t.prototype),
            c
          );
        }
        return tp(t, e), t;
      })(Error),
      aM = Array.isArray;
    function aP(e) {
      return Array.isArray(e) && e.length > 0;
    }
    var aA = Object.prototype.hasOwnProperty;
    function aF() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return aq(e);
    }
    function aq(e) {
      var t = e[0] || {},
        r = e.length;
      if (r > 1) for (var n = new aQ(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
      return t;
    }
    var aL = function (e, t, r) {
        return this.merge(e[r], t[r]);
      },
      aQ = (function () {
        function e(e) {
          void 0 === e && (e = aL),
            (this.reconciler = e),
            (this.isObject = o3),
            (this.pastCopies = new Set());
        }
        return (
          (e.prototype.merge = function (e, t) {
            for (var r = this, n = [], i = 2; i < arguments.length; i++)
              n[i - 2] = arguments[i];
            return o3(t) && o3(e)
              ? (Object.keys(t).forEach(function (i) {
                  if (aA.call(e, i)) {
                    var o = e[i];
                    if (t[i] !== o) {
                      var a = r.reconciler.apply(r, tb([e, t, i], n, !1));
                      a !== o && ((e = r.shallowCopyForMerge(e))[i] = a);
                    }
                  } else (e = r.shallowCopyForMerge(e))[i] = t[i];
                }),
                e)
              : t;
          }),
          (e.prototype.shallowCopyForMerge = function (e) {
            return (
              o3(e) &&
                !this.pastCopies.has(e) &&
                ((e = Array.isArray(e)
                  ? e.slice(0)
                  : tv({ __proto__: Object.getPrototypeOf(e) }, e)),
                this.pastCopies.add(e)),
              e
            );
          }),
          e
        );
      })();
    function aV(e) {
      return "incremental" in e;
    }
    function az(e, t) {
      var r = e,
        n = new aQ();
      return (
        aV(t) &&
          aP(t.incremental) &&
          t.incremental.forEach(function (e) {
            for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
              var a = i[o],
                s = isNaN(+a) ? {} : [];
              (s[a] = t), (t = s);
            }
            r = n.merge(r, t);
          }),
        r
      );
    }
    var aW = Object.prototype.hasOwnProperty;
    function aB(e, t) {
      e.status >= 300 &&
        aI(
          e,
          (function () {
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
          })(),
          "Response not successful: Received status code ".concat(e.status)
        );
      try {
        return JSON.parse(t);
      } catch (r) {
        throw (
          ((r.name = "ServerParseError"),
          (r.response = e),
          (r.statusCode = e.status),
          (r.bodyText = t),
          r)
        );
      }
    }
    var aU = function (e) {
      if (!e && "u" < typeof fetch) throw oT(35);
    };
    function a$(e) {
      return 9 === e || 32 === e;
    }
    let aK = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function aH(e) {
      return aY[e.charCodeAt(0)];
    }
    let aY = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F",
      ],
      aG = {
        Name: { leave: (e) => e.value },
        Variable: { leave: (e) => "$" + e.name },
        Document: { leave: (e) => aJ(e.definitions, "\n\n") },
        OperationDefinition: {
          leave(e) {
            let t = a1(e.variableDefinitions)
                ? aZ("(\n", aJ(e.variableDefinitions, "\n"), "\n)")
                : aZ("(", aJ(e.variableDefinitions, ", "), ")"),
              r =
                aZ("", e.description, "\n") +
                aJ([e.operation, aJ([e.name, t]), aJ(e.directives, " ")], " ");
            return ("query" === r ? "" : r + " ") + e.selectionSet;
          },
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: r,
            directives: n,
            description: i,
          }) =>
            aZ("", i, "\n") + e + ": " + t + aZ(" = ", r) + aZ(" ", aJ(n, " ")),
        },
        SelectionSet: { leave: ({ selections: e }) => aX(e) },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: r,
            directives: n,
            selectionSet: i,
          }) {
            let o = aZ("", e, ": ") + t,
              a = o + aZ("(", aJ(r, ", "), ")");
            return (
              a.length > 80 && (a = o + aZ("(\n", a0(aJ(r, "\n")), "\n)")),
              aJ([a, aJ(n, " "), i], " ")
            );
          },
        },
        Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
        FragmentSpread: {
          leave: ({ name: e, directives: t }) =>
            "..." + e + aZ(" ", aJ(t, " ")),
        },
        InlineFragment: {
          leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
            aJ(["...", aZ("on ", e), aJ(t, " "), r], " "),
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: r,
            directives: n,
            selectionSet: i,
            description: o,
          }) =>
            aZ("", o, "\n") +
            `fragment ${e}${aZ("(", aJ(r, ", "), ")")} ` +
            `on ${t} ${aZ("", aJ(n, " "), " ")}` +
            i,
        },
        IntValue: { leave: ({ value: e }) => e },
        FloatValue: { leave: ({ value: e }) => e },
        StringValue: {
          leave: ({ value: e, block: t }) => {
            let r, n, i, o, a, s, u, c, l, d, f;
            return t
              ? ((i =
                  1 ===
                  (n = (r = e.replace(/"""/g, '\\"""')).split(/\r\n|[\n\r]/g))
                    .length),
                (o =
                  n.length > 1 &&
                  n
                    .slice(1)
                    .every((e) => 0 === e.length || a$(e.charCodeAt(0)))),
                (a = r.endsWith('\\"""')),
                (s = e.endsWith('"') && !a),
                (u = e.endsWith("\\")),
                (c = s || u),
                (l = !i || e.length > 70 || c || o || a),
                (d = ""),
                (f = i && a$(e.charCodeAt(0))),
                ((l && !f) || o) && (d += "\n"),
                (d += r),
                (l || c) && (d += "\n"),
                '"""' + d + '"""')
              : `"${e.replace(aK, aH)}"`;
          },
        },
        BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
        NullValue: { leave: () => "null" },
        EnumValue: { leave: ({ value: e }) => e },
        ListValue: { leave: ({ values: e }) => "[" + aJ(e, ", ") + "]" },
        ObjectValue: { leave: ({ fields: e }) => "{" + aJ(e, ", ") + "}" },
        ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
        Directive: {
          leave: ({ name: e, arguments: t }) =>
            "@" + e + aZ("(", aJ(t, ", "), ")"),
        },
        NamedType: { leave: ({ name: e }) => e },
        ListType: { leave: ({ type: e }) => "[" + e + "]" },
        NonNullType: { leave: ({ type: e }) => e + "!" },
        SchemaDefinition: {
          leave: ({ description: e, directives: t, operationTypes: r }) =>
            aZ("", e, "\n") + aJ(["schema", aJ(t, " "), aX(r)], " "),
        },
        OperationTypeDefinition: {
          leave: ({ operation: e, type: t }) => e + ": " + t,
        },
        ScalarTypeDefinition: {
          leave: ({ description: e, name: t, directives: r }) =>
            aZ("", e, "\n") + aJ(["scalar", t, aJ(r, " ")], " "),
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i,
          }) =>
            aZ("", e, "\n") +
            aJ(
              ["type", t, aZ("implements ", aJ(r, " & ")), aJ(n, " "), aX(i)],
              " "
            ),
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            type: n,
            directives: i,
          }) =>
            aZ("", e, "\n") +
            t +
            (a1(r)
              ? aZ("(\n", a0(aJ(r, "\n")), "\n)")
              : aZ("(", aJ(r, ", "), ")")) +
            ": " +
            n +
            aZ(" ", aJ(i, " ")),
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: r,
            defaultValue: n,
            directives: i,
          }) =>
            aZ("", e, "\n") + aJ([t + ": " + r, aZ("= ", n), aJ(i, " ")], " "),
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: r,
            directives: n,
            fields: i,
          }) =>
            aZ("", e, "\n") +
            aJ(
              [
                "interface",
                t,
                aZ("implements ", aJ(r, " & ")),
                aJ(n, " "),
                aX(i),
              ],
              " "
            ),
        },
        UnionTypeDefinition: {
          leave: ({ description: e, name: t, directives: r, types: n }) =>
            aZ("", e, "\n") +
            aJ(["union", t, aJ(r, " "), aZ("= ", aJ(n, " | "))], " "),
        },
        EnumTypeDefinition: {
          leave: ({ description: e, name: t, directives: r, values: n }) =>
            aZ("", e, "\n") + aJ(["enum", t, aJ(r, " "), aX(n)], " "),
        },
        EnumValueDefinition: {
          leave: ({ description: e, name: t, directives: r }) =>
            aZ("", e, "\n") + aJ([t, aJ(r, " ")], " "),
        },
        InputObjectTypeDefinition: {
          leave: ({ description: e, name: t, directives: r, fields: n }) =>
            aZ("", e, "\n") + aJ(["input", t, aJ(r, " "), aX(n)], " "),
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: r,
            directives: n,
            repeatable: i,
            locations: o,
          }) =>
            aZ("", e, "\n") +
            "directive @" +
            t +
            (a1(r)
              ? aZ("(\n", a0(aJ(r, "\n")), "\n)")
              : aZ("(", aJ(r, ", "), ")")) +
            aZ(" ", aJ(n, " ")) +
            (i ? " repeatable" : "") +
            " on " +
            aJ(o, " | "),
        },
        SchemaExtension: {
          leave: ({ directives: e, operationTypes: t }) =>
            aJ(["extend schema", aJ(e, " "), aX(t)], " "),
        },
        ScalarTypeExtension: {
          leave: ({ name: e, directives: t }) =>
            aJ(["extend scalar", e, aJ(t, " ")], " "),
        },
        ObjectTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
            aJ(
              [
                "extend type",
                e,
                aZ("implements ", aJ(t, " & ")),
                aJ(r, " "),
                aX(n),
              ],
              " "
            ),
        },
        InterfaceTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
            aJ(
              [
                "extend interface",
                e,
                aZ("implements ", aJ(t, " & ")),
                aJ(r, " "),
                aX(n),
              ],
              " "
            ),
        },
        UnionTypeExtension: {
          leave: ({ name: e, directives: t, types: r }) =>
            aJ(["extend union", e, aJ(t, " "), aZ("= ", aJ(r, " | "))], " "),
        },
        EnumTypeExtension: {
          leave: ({ name: e, directives: t, values: r }) =>
            aJ(["extend enum", e, aJ(t, " "), aX(r)], " "),
        },
        InputObjectTypeExtension: {
          leave: ({ name: e, directives: t, fields: r }) =>
            aJ(["extend input", e, aJ(t, " "), aX(r)], " "),
        },
        DirectiveExtension: {
          leave: ({ name: e, directives: t }) =>
            aJ(["extend directive @" + e, aJ(t, " ")], " "),
        },
        TypeCoordinate: { leave: ({ name: e }) => e },
        MemberCoordinate: {
          leave: ({ name: e, memberName: t }) => aJ([e, aZ(".", t)]),
        },
        ArgumentCoordinate: {
          leave: ({ name: e, fieldName: t, argumentName: r }) =>
            aJ([e, aZ(".", t), aZ("(", r, ":)")]),
        },
        DirectiveCoordinate: { leave: ({ name: e }) => aJ(["@", e]) },
        DirectiveArgumentCoordinate: {
          leave: ({ name: e, argumentName: t }) =>
            aJ(["@", e, aZ("(", t, ":)")]),
        },
      };
    function aJ(e, t = "") {
      var r;
      return null != (r = null == e ? void 0 : e.filter((e) => e).join(t))
        ? r
        : "";
    }
    function aX(e) {
      return aZ("{\n", a0(aJ(e, "\n")), "\n}");
    }
    function aZ(e, t, r = "") {
      return null != t && "" !== t ? e + t + r : "";
    }
    function a0(e) {
      return aZ("  ", e.replace(/\n/g, "\n  "));
    }
    function a1(e) {
      var t;
      return (
        null != (t = null == e ? void 0 : e.some((e) => e.includes("\n"))) && t
      );
    }
    var a2 = oD ? new WeakMap() : void 0,
      a3 = function (e) {
        var t;
        return (
          (t = null == a2 ? void 0 : a2.get(e)) ||
            ((t = aS(e, aG)), null == a2 || a2.set(e, t)),
          t
        );
      },
      a4 = {
        http: {
          includeQuery: !0,
          includeExtensions: !1,
          preserveHeaderCase: !1,
        },
        headers: { accept: "*/*", "content-type": "application/json" },
        options: { method: "POST" },
      },
      a6 = function (e, t) {
        return t(e);
      };
    function a5(e) {
      return new o2(function (t) {
        t.error(e);
      });
    }
    var a8 = { kind: S.FIELD, name: { kind: S.NAME, value: "__typename" } };
    function a7(e) {
      var t = new Map();
      return function (r) {
        void 0 === r && (r = e);
        var n = t.get(r);
        return (
          n ||
            t.set(
              r,
              (n = { variables: new Set(), fragmentSpreads: new Set() })
            ),
          n
        );
      };
    }
    function a9(e, t) {
      au(t);
      for (
        var r,
          n,
          i,
          o,
          a = a7(""),
          s = a7(""),
          u = function (e) {
            for (var t = 0, r = void 0; t < e.length && (r = e[t]); ++t)
              if (!aM(r)) {
                if (r.kind === S.OPERATION_DEFINITION)
                  return a(r.name && r.name.value);
                if (r.kind === S.FRAGMENT_DEFINITION) return s(r.name.value);
              }
            return !1 !== globalThis.__DEV__ && oC.error(80), null;
          },
          c = 0,
          l = t.definitions.length - 1;
        l >= 0;
        --l
      )
        t.definitions[l].kind === S.OPERATION_DEFINITION && ++c;
      var d =
          ((r = new Map()),
          (n = new Map()),
          e.forEach(function (e) {
            e && (e.name ? r.set(e.name, e) : e.test && n.set(e.test, e));
          }),
          function (e) {
            var t = r.get(e.name.value);
            return (
              !t &&
                n.size &&
                n.forEach(function (r, n) {
                  n(e) && (t = r);
                }),
              t
            );
          }),
        f = function (e) {
          return (
            aP(e) &&
            e.map(d).some(function (e) {
              return e && e.remove;
            })
          );
        },
        h = new Map(),
        p = !1,
        v = {
          enter: function (e) {
            if (f(e.directives)) return (p = !0), null;
          },
        },
        m = aS(t, {
          Field: v,
          InlineFragment: v,
          VariableDefinition: {
            enter: function () {
              return !1;
            },
          },
          Variable: {
            enter: function (e, t, r, n, i) {
              var o = u(i);
              o && o.variables.add(e.name.value);
            },
          },
          FragmentSpread: {
            enter: function (e, t, r, n, i) {
              if (f(e.directives)) return (p = !0), null;
              var o = u(i);
              o && o.fragmentSpreads.add(e.name.value);
            },
          },
          FragmentDefinition: {
            enter: function (e, t, r, n) {
              h.set(JSON.stringify(n), e);
            },
            leave: function (e, t, r, n) {
              return e === h.get(JSON.stringify(n))
                ? e
                : c > 0 &&
                  e.selectionSet.selections.every(function (e) {
                    return e.kind === S.FIELD && "__typename" === e.name.value;
                  })
                ? ((s(e.name.value).removed = !0), (p = !0), null)
                : void 0;
            },
          },
          Directive: {
            leave: function (e) {
              if (d(e)) return (p = !0), null;
            },
          },
        });
      if (!p) return t;
      var y = function (e) {
          return (
            !e.transitiveVars &&
              ((e.transitiveVars = new Set(e.variables)),
              e.removed ||
                e.fragmentSpreads.forEach(function (t) {
                  y(s(t)).transitiveVars.forEach(function (t) {
                    e.transitiveVars.add(t);
                  });
                })),
            e
          );
        },
        g = new Set();
      m.definitions.forEach(function (e) {
        e.kind === S.OPERATION_DEFINITION
          ? y(a(e.name && e.name.value)).fragmentSpreads.forEach(function (e) {
              g.add(e);
            })
          : e.kind !== S.FRAGMENT_DEFINITION ||
            0 !== c ||
            s(e.name.value).removed ||
            g.add(e.name.value);
      }),
        g.forEach(function (e) {
          y(s(e)).fragmentSpreads.forEach(function (e) {
            g.add(e);
          });
        });
      var b = {
        enter: function (e) {
          var t;
          if (((t = e.name.value), !g.has(t) || s(t).removed)) return null;
        },
      };
      return !(function e(t, r) {
        return (
          !t ||
          t.selectionSet.selections.every(function (t) {
            return t.kind === S.FRAGMENT_SPREAD && e(r[t.name.value], r);
          })
        );
      })(
        ac(
          (i = aS(m, {
            FragmentSpread: b,
            FragmentDefinition: b,
            OperationDefinition: {
              leave: function (e) {
                if (e.variableDefinitions) {
                  var t = y(a(e.name && e.name.value)).transitiveVars;
                  if (t.size < e.variableDefinitions.length)
                    return tv(tv({}, e), {
                      variableDefinitions: e.variableDefinitions.filter(
                        function (e) {
                          return t.has(e.variable.name.value);
                        }
                      ),
                    });
                }
              },
            },
          }))
        ) ||
          (oC("Document" === i.kind, 75),
          oC(i.definitions.length <= 1, 76),
          oC("FragmentDefinition" === (o = i.definitions[0]).kind, 77),
          o),
        o6(ad(i))
      )
        ? i
        : null;
    }
    var se = Object.assign(
      function (e) {
        return aS(e, {
          SelectionSet: {
            enter: function (e, t, r) {
              if (!r || r.kind !== S.OPERATION_DEFINITION) {
                var n = e.selections;
                if (
                  !(
                    !n ||
                    n.some(function (e) {
                      return (
                        as(e) &&
                        ("__typename" === e.name.value ||
                          0 === e.name.value.lastIndexOf("__", 0))
                      );
                    })
                  ) &&
                  !(
                    as(r) &&
                    r.directives &&
                    r.directives.some(function (e) {
                      return "export" === e.name.value;
                    })
                  )
                )
                  return tv(tv({}, e), {
                    selections: tb(tb([], n, !0), [a8], !1),
                  });
              }
            },
          },
        });
      },
      {
        added: function (e) {
          return e === a8;
        },
      }
    );
    function st(e) {
      return (
        au(e),
        a9(
          [
            {
              test: function (e) {
                return "client" === e.name.value;
              },
              remove: !0,
            },
          ],
          e
        )
      );
    }
    var sr = ox(function () {
        return fetch;
      }),
      sn = function (e) {
        void 0 === e && (e = {});
        var t = e.uri,
          r = void 0 === t ? "/graphql" : t,
          n = e.fetch,
          i = e.print,
          o = void 0 === i ? a6 : i,
          a = e.includeExtensions,
          s = e.preserveHeaderCase,
          u = e.useGETForQueries,
          c = e.includeUnusedVariables,
          l = void 0 !== c && c,
          d = tm(e, [
            "uri",
            "fetch",
            "print",
            "includeExtensions",
            "preserveHeaderCase",
            "useGETForQueries",
            "includeUnusedVariables",
          ]);
        !1 !== globalThis.__DEV__ && aU(n || sr);
        var f = {
          http: { includeExtensions: a, preserveHeaderCase: s },
          options: d.fetchOptions,
          credentials: d.credentials,
          headers: d.headers,
        };
        return new ag(function (e) {
          var t,
            i,
            a,
            s,
            c,
            d,
            h = aT(e, r),
            p = e.getContext(),
            v = {};
          if (p.clientAwareness) {
            var m = p.clientAwareness,
              y = m.name,
              g = m.version;
            y && (v["apollographql-client-name"] = y),
              g && (v["apollographql-client-version"] = g);
          }
          var b = tv(tv({}, v), p.headers),
            w = {
              http: p.http,
              options: p.fetchOptions,
              credentials: p.credentials,
              headers: b,
            };
          if (a_(["client"], e.query)) {
            var x = st(e.query);
            if (!x)
              return a5(
                Error(
                  "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
                )
              );
            e.query = x;
          }
          var E = (function (e, t) {
              for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
              var i = {},
                o = {};
              r.forEach(function (e) {
                (i = tv(tv(tv({}, i), e.options), {
                  headers: tv(tv({}, i.headers), e.headers),
                })),
                  e.credentials && (i.credentials = e.credentials),
                  (o = tv(tv({}, o), e.http));
              }),
                i.headers &&
                  (i.headers = (function (e, t) {
                    if (!t) {
                      var r = Object.create(null);
                      return (
                        Object.keys(Object(e)).forEach(function (t) {
                          r[t.toLowerCase()] = e[t];
                        }),
                        r
                      );
                    }
                    var n = Object.create(null);
                    Object.keys(Object(e)).forEach(function (t) {
                      n[t.toLowerCase()] = { originalName: t, value: e[t] };
                    });
                    var i = Object.create(null);
                    return (
                      Object.keys(n).forEach(function (e) {
                        i[n[e].originalName] = n[e].value;
                      }),
                      i
                    );
                  })(i.headers, o.preserveHeaderCase));
              var a = e.operationName,
                s = e.extensions,
                u = e.variables,
                c = e.query,
                l = { operationName: a, variables: u };
              return (
                o.includeExtensions && (l.extensions = s),
                o.includeQuery && (l.query = t(c, a3)),
                { options: i, body: l }
              );
            })(e, o, a4, f, w),
            O = E.options,
            S = E.body;
          S.variables &&
            !l &&
            ((t = S.variables),
            (i = e.query),
            (a = tv({}, t)),
            (s = new Set(Object.keys(t))),
            aS(i, {
              Variable: function (e, t, r) {
                r && "VariableDefinition" !== r.kind && s.delete(e.name.value);
              },
            }),
            s.forEach(function (e) {
              delete a[e];
            }),
            (S.variables = a)),
            !O.signal &&
              "u" > typeof AbortController &&
              (O.signal = (d = new AbortController()).signal);
          var k =
              "OperationDefinition" === (c = ah(e.query)).kind &&
              "subscription" === c.operation,
            _ = a_(["defer"], e.query);
          if (
            (u &&
              !e.query.definitions.some(function (e) {
                return (
                  "OperationDefinition" === e.kind && "mutation" === e.operation
                );
              }) &&
              (O.method = "GET"),
            _ || k)
          ) {
            O.headers = O.headers || {};
            var C = "multipart/mixed;";
            k && _ && !1 !== globalThis.__DEV__ && oC.warn(36),
              k
                ? (C +=
                    "boundary=graphql;subscriptionSpec=1.0,application/json")
                : _ && (C += "deferSpec=20220824,application/json"),
              (O.headers.accept = C);
          }
          if ("GET" === O.method) {
            var T = (function (e, t) {
                var r = [],
                  n = function (e, t) {
                    r.push("".concat(e, "=").concat(encodeURIComponent(t)));
                  };
                if (
                  ("query" in t && n("query", t.query),
                  t.operationName && n("operationName", t.operationName),
                  t.variables)
                ) {
                  var i = void 0;
                  try {
                    i = aC(t.variables, "Variables map");
                  } catch (e) {
                    return { parseError: e };
                  }
                  n("variables", i);
                }
                if (t.extensions) {
                  var o = void 0;
                  try {
                    o = aC(t.extensions, "Extensions map");
                  } catch (e) {
                    return { parseError: e };
                  }
                  n("extensions", o);
                }
                var a = "",
                  s = e,
                  u = e.indexOf("#");
                -1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)));
                var c = -1 === s.indexOf("?") ? "?" : "&";
                return { newURI: s + c + r.join("&") + a };
              })(h, S),
              R = T.newURI,
              I = T.parseError;
            if (I) return a5(I);
            h = R;
          } else
            try {
              O.body = aC(S, "Payload");
            } catch (e) {
              return a5(e);
            }
          return new o2(function (t) {
            var r =
                n ||
                ox(function () {
                  return fetch;
                }) ||
                sr,
              i = t.next.bind(t);
            return (
              r(h, O)
                .then(function (t) {
                  e.setContext({ response: t });
                  var r,
                    n =
                      null == (r = t.headers) ? void 0 : r.get("content-type");
                  return null !== n && /^multipart\/mixed/i.test(n)
                    ? (function (e, t) {
                        var r;
                        return ty(this, void 0, void 0, function () {
                          var n,
                            i,
                            o,
                            a,
                            s,
                            u,
                            c,
                            l,
                            d,
                            f,
                            h,
                            p,
                            v,
                            m,
                            y,
                            g,
                            b,
                            w,
                            x,
                            E,
                            O,
                            S;
                          return tg(this, function (k) {
                            switch (k.label) {
                              case 0:
                                if (void 0 === TextDecoder)
                                  throw Error(
                                    "TextDecoder must be defined in the environment: please import a polyfill."
                                  );
                                (n = new TextDecoder("utf-8")),
                                  (i =
                                    null == (r = e.headers)
                                      ? void 0
                                      : r.get("content-type")),
                                  (o = "boundary="),
                                  (a = (null == i ? void 0 : i.includes(o))
                                    ? null == i
                                      ? void 0
                                      : i
                                          .substring(
                                            (null == i
                                              ? void 0
                                              : i.indexOf(o)) + o.length
                                          )
                                          .replace(/['"]/g, "")
                                          .replace(/\;(.*)/gm, "")
                                          .trim()
                                    : "-"),
                                  (s = "\r\n--".concat(a)),
                                  (u = ""),
                                  (c = (function (e) {
                                    var t,
                                      r,
                                      n,
                                      i,
                                      o,
                                      a,
                                      s = e;
                                    if (
                                      (e.body && (s = e.body),
                                      (t = s),
                                      oM && t[Symbol.asyncIterator])
                                    )
                                      return (
                                        (n = s[Symbol.asyncIterator]()),
                                        ((r = {
                                          next: function () {
                                            return n.next();
                                          },
                                        })[Symbol.asyncIterator] = function () {
                                          return this;
                                        }),
                                        r
                                      );
                                    if (s.getReader) return aR(s.getReader());
                                    if (s.stream)
                                      return aR(s.stream().getReader());
                                    if (s.arrayBuffer)
                                      return (
                                        (i = s.arrayBuffer()),
                                        (o = !1),
                                        (a = {
                                          next: function () {
                                            return o
                                              ? Promise.resolve({
                                                  value: void 0,
                                                  done: !0,
                                                })
                                              : ((o = !0),
                                                new Promise(function (e, t) {
                                                  i.then(function (t) {
                                                    e({ value: t, done: !1 });
                                                  }).catch(t);
                                                }));
                                          },
                                        }),
                                        oM &&
                                          (a[Symbol.asyncIterator] =
                                            function () {
                                              return this;
                                            }),
                                        a
                                      );
                                    if (s.pipe)
                                      return (function (e) {
                                        var t = null,
                                          r = null,
                                          n = !1,
                                          i = [],
                                          o = [];
                                        function a(e) {
                                          if (!r) {
                                            if (o.length) {
                                              var t = o.shift();
                                              if (Array.isArray(t) && t[0])
                                                return t[0]({
                                                  value: e,
                                                  done: !1,
                                                });
                                            }
                                            i.push(e);
                                          }
                                        }
                                        function s(e) {
                                          (r = e),
                                            o.slice().forEach(function (t) {
                                              t[1](e);
                                            }),
                                            t && t();
                                        }
                                        function u() {
                                          (n = !0),
                                            o.slice().forEach(function (e) {
                                              e[0]({ value: void 0, done: !0 });
                                            }),
                                            t && t();
                                        }
                                        (t = function () {
                                          (t = null),
                                            e.removeListener("data", a),
                                            e.removeListener("error", s),
                                            e.removeListener("end", u),
                                            e.removeListener("finish", u),
                                            e.removeListener("close", u);
                                        }),
                                          e.on("data", a),
                                          e.on("error", s),
                                          e.on("end", u),
                                          e.on("finish", u),
                                          e.on("close", u);
                                        var c = {
                                          next: function () {
                                            return new Promise(function (e, t) {
                                              return r
                                                ? t(r)
                                                : i.length
                                                ? e({
                                                    value: i.shift(),
                                                    done: !1,
                                                  })
                                                : n
                                                ? e({ value: void 0, done: !0 })
                                                : void o.push([e, t]);
                                            });
                                          },
                                        };
                                        return (
                                          oM &&
                                            (c[Symbol.asyncIterator] =
                                              function () {
                                                return this;
                                              }),
                                          c
                                        );
                                      })(s);
                                    throw Error(
                                      "Unknown body type for responseIterator. Please pass a streamable response."
                                    );
                                  })(e)),
                                  (l = !0),
                                  (k.label = 1);
                              case 1:
                                if (!l) return [3, 3];
                                return [4, c.next()];
                              case 2:
                                for (
                                  f = (d = k.sent()).value,
                                    h = d.done,
                                    p = "string" == typeof f ? f : n.decode(f),
                                    v = u.length - s.length + 1,
                                    l = !h,
                                    u += p,
                                    m = u.indexOf(s, v);
                                  m > -1;

                                ) {
                                  if (
                                    ((y = void 0),
                                    (y = (O = [
                                      u.slice(0, m),
                                      u.slice(m + s.length),
                                    ])[0]),
                                    (u = O[1]),
                                    (g = y.indexOf("\r\n\r\n")),
                                    (b = (function (e) {
                                      var t = {};
                                      return (
                                        e.split("\n").forEach(function (e) {
                                          var r = e.indexOf(":");
                                          if (r > -1) {
                                            var n = e
                                                .slice(0, r)
                                                .trim()
                                                .toLowerCase(),
                                              i = e.slice(r + 1).trim();
                                            t[n] = i;
                                          }
                                        }),
                                        t
                                      );
                                    })(y.slice(0, g))["content-type"]) &&
                                      -1 ===
                                        b
                                          .toLowerCase()
                                          .indexOf("application/json"))
                                  )
                                    throw Error(
                                      "Unsupported patch content type: application/json is required."
                                    );
                                  if ((w = y.slice(g))) {
                                    if (
                                      Object.keys((x = aB(e, w))).length > 1 ||
                                      "data" in x ||
                                      "incremental" in x ||
                                      "errors" in x ||
                                      "payload" in x
                                    )
                                      o3(x) && "payload" in x
                                        ? ((E = {}),
                                          "payload" in x &&
                                            (E = tv({}, x.payload)),
                                          "errors" in x &&
                                            (E = tv(tv({}, E), {
                                              extensions: tv(
                                                tv(
                                                  {},
                                                  "extensions" in E
                                                    ? E.extensions
                                                    : null
                                                ),
                                                (((S = {})[aD] = x.errors), S)
                                              ),
                                            })),
                                          t(E))
                                        : t(x);
                                    else if (
                                      1 === Object.keys(x).length &&
                                      "hasNext" in x &&
                                      !x.hasNext
                                    )
                                      return [2];
                                  }
                                  m = u.indexOf(s);
                                }
                                return [3, 1];
                              case 3:
                                return [2];
                            }
                          });
                        });
                      })(t, i)
                    : (function (t) {
                        return t
                          .text()
                          .then(function (e) {
                            return aB(t, e);
                          })
                          .then(function (r) {
                            return (
                              t.status >= 300 &&
                                aI(
                                  t,
                                  r,
                                  "Response not successful: Received status code ".concat(
                                    t.status
                                  )
                                ),
                              Array.isArray(r) ||
                                aW.call(r, "data") ||
                                aW.call(r, "errors") ||
                                aI(
                                  t,
                                  r,
                                  "Server response was missing for query '".concat(
                                    Array.isArray(e)
                                      ? e.map(function (e) {
                                          return e.operationName;
                                        })
                                      : e.operationName,
                                    "'."
                                  )
                                ),
                              r
                            );
                          });
                      })(t).then(i);
                })
                .then(function () {
                  (d = void 0), t.complete();
                })
                .catch(function (e) {
                  (d = void 0),
                    e.result &&
                      e.result.errors &&
                      e.result.data &&
                      t.next(e.result),
                    t.error(e);
                }),
              function () {
                d && d.abort();
              }
            );
          });
        });
      },
      si = (function (e) {
        function t(t) {
          void 0 === t && (t = {});
          var r = e.call(this, sn(t).request) || this;
          return (r.options = t), r;
        }
        return tp(t, e), t;
      })(ag);
    let { toString: so, hasOwnProperty: sa } = Object.prototype,
      ss = Function.prototype.toString,
      su = new Map();
    function sc(e, t) {
      try {
        return (function e(t, r) {
          if (t === r) return !0;
          let n = so.call(t);
          if (n !== so.call(r)) return !1;
          switch (n) {
            case "[object Array]":
              if (t.length !== r.length) break;
            case "[object Object]": {
              if (sh(t, r)) return !0;
              let n = sl(t),
                i = sl(r),
                o = n.length;
              if (o !== i.length) return !1;
              for (let e = 0; e < o; ++e) if (!sa.call(r, n[e])) return !1;
              for (let i = 0; i < o; ++i) {
                let o = n[i];
                if (!e(t[o], r[o])) return !1;
              }
              return !0;
            }
            case "[object Error]":
              return t.name === r.name && t.message === r.message;
            case "[object Number]":
              if (t != t) return r != r;
            case "[object Boolean]":
            case "[object Date]":
              return +t == +r;
            case "[object RegExp]":
            case "[object String]":
              return t == `${r}`;
            case "[object Map]":
            case "[object Set]": {
              if (t.size !== r.size) return !1;
              if (sh(t, r)) return !0;
              let i = t.entries(),
                o = "[object Map]" === n;
              for (;;) {
                let t = i.next();
                if (t.done) break;
                let [n, a] = t.value;
                if (!r.has(n) || (o && !e(a, r.get(n)))) return !1;
              }
              return !0;
            }
            case "[object Uint16Array]":
            case "[object Uint8Array]":
            case "[object Uint32Array]":
            case "[object Int32Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object ArrayBuffer]":
              (t = new Uint8Array(t)), (r = new Uint8Array(r));
            case "[object DataView]": {
              let e = t.byteLength;
              if (e === r.byteLength) for (; e-- && t[e] === r[e]; );
              return -1 === e;
            }
            case "[object AsyncFunction]":
            case "[object GeneratorFunction]":
            case "[object AsyncGeneratorFunction]":
            case "[object Function]": {
              var i, o;
              let e,
                n = ss.call(t);
              if (n !== ss.call(r)) return !1;
              return (
                (i = n),
                (o = sf),
                !((e = i.length - o.length) >= 0) || i.indexOf(o, e) !== e
              );
            }
          }
          return !1;
        })(e, t);
      } finally {
        su.clear();
      }
    }
    function sl(e) {
      return Object.keys(e).filter(sd, e);
    }
    function sd(e) {
      return void 0 !== this[e];
    }
    let sf = "{ [native code] }";
    function sh(e, t) {
      let r = su.get(e);
      if (r) {
        if (r.has(t)) return !0;
      } else su.set(e, (r = new Set()));
      return r.add(t), !1;
    }
    let sp = () => Object.create(null),
      { forEach: sv, slice: sm } = Array.prototype,
      { hasOwnProperty: sy } = Object.prototype;
    class sg {
      constructor(e = !0, t = sp) {
        (this.weakness = e), (this.makeData = t);
      }
      lookup(...e) {
        return this.lookupArray(e);
      }
      lookupArray(e) {
        let t = this;
        return (
          sv.call(e, (e) => (t = t.getChildTrie(e))),
          sy.call(t, "data") ? t.data : (t.data = this.makeData(sm.call(e)))
        );
      }
      peek(...e) {
        return this.peekArray(e);
      }
      peekArray(e) {
        let t = this;
        for (let r = 0, n = e.length; t && r < n; ++r) {
          let n = this.weakness && sb(e[r]) ? t.weak : t.strong;
          t = n && n.get(e[r]);
        }
        return t && t.data;
      }
      getChildTrie(e) {
        let t =
            this.weakness && sb(e)
              ? this.weak || (this.weak = new WeakMap())
              : this.strong || (this.strong = new Map()),
          r = t.get(e);
        return r || t.set(e, (r = new sg(this.weakness, this.makeData))), r;
      }
    }
    function sb(e) {
      switch (typeof e) {
        case "object":
          if (null === e) break;
        case "function":
          return !0;
      }
      return !1;
    }
    var sw = (function () {
        function e() {
          (this.known = new (oj ? WeakSet : Set)()),
            (this.pool = new sg(oD)),
            (this.passes = new WeakMap()),
            (this.keysByJSON = new Map()),
            (this.empty = this.admit({}));
        }
        return (
          (e.prototype.isKnown = function (e) {
            return o3(e) && this.known.has(e);
          }),
          (e.prototype.pass = function (e) {
            if (o3(e)) {
              var t = o3(e)
                ? aM(e)
                  ? e.slice(0)
                  : tv({ __proto__: Object.getPrototypeOf(e) }, e)
                : e;
              return this.passes.set(t, e), t;
            }
            return e;
          }),
          (e.prototype.admit = function (e) {
            var t = this;
            if (o3(e)) {
              var r = this.passes.get(e);
              if (r) return r;
              switch (Object.getPrototypeOf(e)) {
                case Array.prototype:
                  if (this.known.has(e)) break;
                  var n = e.map(this.admit, this),
                    i = this.pool.lookupArray(n);
                  return (
                    i.array ||
                      (this.known.add((i.array = n)),
                      !1 !== globalThis.__DEV__ && Object.freeze(n)),
                    i.array
                  );
                case null:
                case Object.prototype:
                  if (this.known.has(e)) break;
                  var o = Object.getPrototypeOf(e),
                    a = [o],
                    s = this.sortedKeys(e);
                  a.push(s.json);
                  var u = a.length;
                  s.sorted.forEach(function (r) {
                    a.push(t.admit(e[r]));
                  });
                  var i = this.pool.lookupArray(a);
                  if (!i.object) {
                    var c = (i.object = Object.create(o));
                    this.known.add(c),
                      s.sorted.forEach(function (e, t) {
                        c[e] = a[u + t];
                      }),
                      !1 !== globalThis.__DEV__ && Object.freeze(c);
                  }
                  return i.object;
              }
            }
            return e;
          }),
          (e.prototype.sortedKeys = function (e) {
            var t = Object.keys(e),
              r = this.pool.lookupArray(t);
            if (!r.keys) {
              t.sort();
              var n = JSON.stringify(t);
              (r.keys = this.keysByJSON.get(n)) ||
                this.keysByJSON.set(n, (r.keys = { sorted: t, json: n }));
            }
            return r.keys;
          }),
          e
        );
      })(),
      sx = Object.assign(
        function (e) {
          if (o3(e)) {
            void 0 === k && sE();
            var t = k.admit(e),
              r = _.get(t);
            return void 0 === r && _.set(t, (r = JSON.stringify(t))), r;
          }
          return JSON.stringify(e);
        },
        { reset: sE }
      );
    function sE() {
      (k = new sw()), (_ = new (oD ? WeakMap : Map)());
    }
    function sO(e) {
      var t = aP(e.errors) ? e.errors.slice(0) : [];
      return (
        aV(e) &&
          aP(e.incremental) &&
          e.incremental.forEach(function (e) {
            e.errors && t.push.apply(t, e.errors);
          }),
        t
      );
    }
    function sS(e, t, r) {
      return new o2(function (n) {
        var i = n.next,
          o = n.error,
          a = n.complete,
          s = 0,
          u = !1,
          c = {
            then: function (e) {
              return new Promise(function (t) {
                return t(e());
              });
            },
          };
        function l(e, t) {
          return e
            ? function (t) {
                ++s;
                var r = function () {
                  return e(t);
                };
                c = c
                  .then(r, r)
                  .then(
                    function (e) {
                      --s, i && i.call(n, e), u && d.complete();
                    },
                    function (e) {
                      throw (--s, e);
                    }
                  )
                  .catch(function (e) {
                    o && o.call(n, e);
                  });
              }
            : function (e) {
                return t && t.call(n, e);
              };
        }
        var d = {
            next: l(t, i),
            error: l(r, o),
            complete: function () {
              (u = !0), !s && a && a.call(n);
            },
          },
          f = e.subscribe(d);
        return function () {
          return f.unsubscribe();
        };
      });
    }
    function sk(e, t, r) {
      var n = [];
      e.forEach(function (e) {
        return e[t] && n.push(e);
      }),
        n.forEach(function (e) {
          return e[t](r);
        });
    }
    function s_(e) {
      function t(t) {
        Object.defineProperty(e, t, { value: o2 });
      }
      return oN && Symbol.species && t(Symbol.species), t("@@species"), e;
    }
    function sC(e) {
      return e && "function" == typeof e.then;
    }
    var sT = (function (e) {
      function t(t) {
        var r =
          e.call(this, function (e) {
            return (
              r.addObserver(e),
              function () {
                return r.removeObserver(e);
              }
            );
          }) || this;
        return (
          (r.observers = new Set()),
          (r.promise = new Promise(function (e, t) {
            (r.resolve = e), (r.reject = t);
          })),
          (r.handlers = {
            next: function (e) {
              null !== r.sub &&
                ((r.latest = ["next", e]),
                r.notify("next", e),
                sk(r.observers, "next", e));
            },
            error: function (e) {
              var t = r.sub;
              null !== t &&
                (t &&
                  setTimeout(function () {
                    return t.unsubscribe();
                  }),
                (r.sub = null),
                (r.latest = ["error", e]),
                r.reject(e),
                r.notify("error", e),
                sk(r.observers, "error", e));
            },
            complete: function () {
              var e = r.sub,
                t = r.sources;
              if (null !== e) {
                var n = (void 0 === t ? [] : t).shift();
                n
                  ? sC(n)
                    ? n.then(function (e) {
                        return (r.sub = e.subscribe(r.handlers));
                      })
                    : (r.sub = n.subscribe(r.handlers))
                  : (e &&
                      setTimeout(function () {
                        return e.unsubscribe();
                      }),
                    (r.sub = null),
                    r.latest && "next" === r.latest[0]
                      ? r.resolve(r.latest[1])
                      : r.resolve(),
                    r.notify("complete"),
                    sk(r.observers, "complete"));
              }
            },
          }),
          (r.nextResultListeners = new Set()),
          (r.cancel = function (e) {
            r.reject(e), (r.sources = []), r.handlers.complete();
          }),
          r.promise.catch(function (e) {}),
          "function" == typeof t && (t = [new o2(t)]),
          sC(t)
            ? t.then(function (e) {
                return r.start(e);
              }, r.handlers.error)
            : r.start(t),
          r
        );
      }
      return (
        tp(t, e),
        (t.prototype.start = function (e) {
          void 0 === this.sub &&
            ((this.sources = Array.from(e)), this.handlers.complete());
        }),
        (t.prototype.deliverLastMessage = function (e) {
          if (this.latest) {
            var t = this.latest[0],
              r = e[t];
            r && r.call(e, this.latest[1]),
              null === this.sub && "next" === t && e.complete && e.complete();
          }
        }),
        (t.prototype.addObserver = function (e) {
          this.observers.has(e) ||
            (this.deliverLastMessage(e), this.observers.add(e));
        }),
        (t.prototype.removeObserver = function (e) {
          this.observers.delete(e) &&
            this.observers.size < 1 &&
            this.handlers.complete();
        }),
        (t.prototype.notify = function (e, t) {
          var r = this.nextResultListeners;
          r.size &&
            ((this.nextResultListeners = new Set()),
            r.forEach(function (r) {
              return r(e, t);
            }));
        }),
        (t.prototype.beforeNext = function (e) {
          var t = !1;
          this.nextResultListeners.add(function (r, n) {
            t || ((t = !0), e(r, n));
          });
        }),
        t
      );
    })(o2);
    function sR(e) {
      return e;
    }
    s_(sT);
    var sI = (function () {
      function e(e, t) {
        void 0 === t && (t = Object.create(null)),
          (this.resultCache = oj ? new WeakSet() : new Set()),
          (this.transform = e),
          t.getCacheKey && (this.getCacheKey = t.getCacheKey),
          !1 !== t.cache &&
            (this.stableCacheKeys = new sg(oD, function (e) {
              return { key: e };
            }));
      }
      return (
        (e.prototype.getCacheKey = function (e) {
          return [e];
        }),
        (e.identity = function () {
          return new e(sR, { cache: !1 });
        }),
        (e.split = function (t, r, n) {
          return (
            void 0 === n && (n = e.identity()),
            new e(
              function (e) {
                return (t(e) ? r : n).transformDocument(e);
              },
              { cache: !1 }
            )
          );
        }),
        (e.prototype.transformDocument = function (e) {
          if (this.resultCache.has(e)) return e;
          var t = this.getStableCacheEntry(e);
          if (t && t.value) return t.value;
          au(e);
          var r = this.transform(e);
          return this.resultCache.add(r), t && (t.value = r), r;
        }),
        (e.prototype.concat = function (t) {
          var r = this;
          return new e(
            function (e) {
              return t.transformDocument(r.transformDocument(e));
            },
            { cache: !1 }
          );
        }),
        (e.prototype.getStableCacheEntry = function (e) {
          if (this.stableCacheKeys) {
            var t = this.getCacheKey(e);
            if (t)
              return (
                oC(Array.isArray(t), 63), this.stableCacheKeys.lookupArray(t)
              );
          }
        }),
        e
      );
    })();
    function sD(e) {
      return !!e && e < 7;
    }
    ((g = C || (C = {}))[(g.loading = 1)] = "loading"),
      (g[(g.setVariables = 2)] = "setVariables"),
      (g[(g.fetchMore = 3)] = "fetchMore"),
      (g[(g.refetch = 4)] = "refetch"),
      (g[(g.poll = 6)] = "poll"),
      (g[(g.ready = 7)] = "ready"),
      (g[(g.error = 8)] = "error");
    var sj = Object.prototype.toString;
    function sN(e, t) {
      switch (sj.call(e)) {
        case "[object Array]":
          if ((t = t || new Map()).has(e)) return t.get(e);
          var r = e.slice(0);
          return (
            t.set(e, r),
            r.forEach(function (e, n) {
              r[n] = sN(e, t);
            }),
            r
          );
        case "[object Object]":
          if ((t = t || new Map()).has(e)) return t.get(e);
          var n = Object.create(Object.getPrototypeOf(e));
          return (
            t.set(e, n),
            Object.keys(e).forEach(function (r) {
              n[r] = sN(e[r], t);
            }),
            n
          );
        default:
          return e;
      }
    }
    function sM() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var r = Object.create(null);
      return (
        e.forEach(function (e) {
          e &&
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              void 0 !== n && (r[t] = n);
            });
        }),
        r
      );
    }
    function sP(e) {
      return !!e.directives && e.directives.some(sA);
    }
    function sA(e) {
      return "nonreactive" === e.name.value;
    }
    var sF = Object.assign,
      sq = Object.hasOwnProperty,
      sL = (function (e) {
        function t(t) {
          var r = t.queryManager,
            n = t.queryInfo,
            i = t.options,
            o =
              e.call(this, function (e) {
                try {
                  var t = e._subscription._observer;
                  t && !t.error && (t.error = sV);
                } catch (e) {}
                var r = !o.observers.size;
                o.observers.add(e);
                var n = o.last;
                return (
                  n && n.error
                    ? e.error && e.error(n.error)
                    : n && n.result && e.next && e.next(n.result),
                  r && o.reobserve().catch(function () {}),
                  function () {
                    o.observers.delete(e) &&
                      !o.observers.size &&
                      o.tearDownQuery();
                  }
                );
              }) || this;
          (o.observers = new Set()),
            (o.subscriptions = new Set()),
            (o.queryInfo = n),
            (o.queryManager = r),
            (o.waitForOwnResult = sW(i.fetchPolicy)),
            (o.isTornDown = !1);
          var a = r.defaultOptions.watchQuery,
            s = (void 0 === a ? {} : a).fetchPolicy,
            u = void 0 === s ? "cache-first" : s,
            c = i.fetchPolicy,
            l = void 0 === c ? u : c,
            d = i.initialFetchPolicy,
            f = void 0 === d ? ("standby" === l ? u : l) : d;
          (o.options = tv(tv({}, i), {
            initialFetchPolicy: f,
            fetchPolicy: l,
          })),
            (o.queryId = n.queryId || r.generateQueryId());
          var h = ac(o.query);
          return (o.queryName = h && h.name && h.name.value), o;
        }
        return (
          tp(t, e),
          Object.defineProperty(t.prototype, "query", {
            get: function () {
              return this.lastQuery || this.options.query;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "variables", {
            get: function () {
              return this.options.variables;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.result = function () {
            var e = this;
            return new Promise(function (t, r) {
              var n = {
                  next: function (r) {
                    t(r),
                      e.observers.delete(n),
                      e.observers.size || e.queryManager.removeQuery(e.queryId),
                      setTimeout(function () {
                        i.unsubscribe();
                      }, 0);
                  },
                  error: r,
                },
                i = e.subscribe(n);
            });
          }),
          (t.prototype.getCurrentResult = function (e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
              r =
                this.queryInfo.networkStatus ||
                (t && t.networkStatus) ||
                C.ready,
              n = tv(tv({}, t), { loading: sD(r), networkStatus: r }),
              i = this.options.fetchPolicy,
              o = void 0 === i ? "cache-first" : i;
            if (
              sW(o) ||
              this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
            );
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var a = this.queryInfo.getDiff();
              (a.complete || this.options.returnPartialData) &&
                (n.data = a.result),
                sc(n.data, {}) && (n.data = void 0),
                a.complete
                  ? (delete n.partial,
                    a.complete &&
                      n.networkStatus === C.loading &&
                      ("cache-first" === o || "cache-only" === o) &&
                      ((n.networkStatus = C.ready), (n.loading = !1)))
                  : (n.partial = !0),
                !1 === globalThis.__DEV__ ||
                  a.complete ||
                  this.options.partialRefetch ||
                  n.loading ||
                  n.data ||
                  n.error ||
                  sz(a.missing);
            }
            return e && this.updateLastResult(n), n;
          }),
          (t.prototype.isDifferentFromLastResult = function (e, t) {
            var r, n, i, o, a, s;
            return (
              !this.last ||
              (this.queryManager.getDocumentInfo(this.query)
                .hasNonreactiveDirective
                ? ((r = this.query),
                  (n = this.last.result),
                  (i = this.variables),
                  (o = n.data),
                  (a = tm(n, ["data"])),
                  (s = e.data),
                  !(
                    sc(a, tm(e, ["data"])) &&
                    (function e(t, r, n, i) {
                      if (r === n) return !0;
                      var o = new Set();
                      return t.selections.every(function (t) {
                        if (
                          o.has(t) ||
                          (o.add(t), !ak(t, i.variables) || sP(t))
                        )
                          return !0;
                        if (as(t)) {
                          var a = ao(t),
                            s = r && r[a],
                            u = n && n[a],
                            c = t.selectionSet;
                          if (!c) return sc(s, u);
                          var l = Array.isArray(s),
                            d = Array.isArray(u);
                          if (l !== d) return !1;
                          if (l && d) {
                            var f = s.length;
                            if (u.length !== f) return !1;
                            for (var h = 0; h < f; ++h)
                              if (!e(c, s[h], u[h], i)) return !1;
                            return !0;
                          }
                          return e(c, s, u, i);
                        }
                        var p = o5(t, i.fragmentMap);
                        if (p) return !!sP(p) || e(p.selectionSet, r, n, i);
                      });
                    })(ah(r).selectionSet, o, s, {
                      fragmentMap: o6(ad(r)),
                      variables: i,
                    })
                  ))
                : !sc(this.last.result, e)) ||
              (t && !sc(this.last.variables, t))
            );
          }),
          (t.prototype.getLast = function (e, t) {
            var r = this.last;
            if (r && r[e] && (!t || sc(r.variables, this.variables)))
              return r[e];
          }),
          (t.prototype.getLastResult = function (e) {
            return this.getLast("result", e);
          }),
          (t.prototype.getLastError = function (e) {
            return this.getLast("error", e);
          }),
          (t.prototype.resetLastResults = function () {
            delete this.last, (this.isTornDown = !1);
          }),
          (t.prototype.resetQueryStoreErrors = function () {
            this.queryManager.resetErrors(this.queryId);
          }),
          (t.prototype.refetch = function (e) {
            var t,
              r = { pollInterval: 0 },
              n = this.options.fetchPolicy;
            if (
              ("cache-and-network" === n
                ? (r.fetchPolicy = n)
                : "no-cache" === n
                ? (r.fetchPolicy = "no-cache")
                : (r.fetchPolicy = "network-only"),
              !1 !== globalThis.__DEV__ && e && sq.call(e, "variables"))
            ) {
              var i = af(this.query),
                o = i.variableDefinitions;
              (o &&
                o.some(function (e) {
                  return "variables" === e.variable.name.value;
                })) ||
                !1 === globalThis.__DEV__ ||
                oC.warn(18, e, (null == (t = i.name) ? void 0 : t.value) || i);
            }
            return (
              e &&
                !sc(this.options.variables, e) &&
                (r.variables = this.options.variables =
                  tv(tv({}, this.options.variables), e)),
              this.queryInfo.resetLastWrite(),
              this.reobserve(r, C.refetch)
            );
          }),
          (t.prototype.fetchMore = function (e) {
            var t = this,
              r = tv(
                tv(
                  {},
                  e.query
                    ? e
                    : tv(
                        tv(
                          tv(tv({}, this.options), {
                            query: this.options.query,
                          }),
                          e
                        ),
                        {
                          variables: tv(
                            tv({}, this.options.variables),
                            e.variables
                          ),
                        }
                      )
                ),
                { fetchPolicy: "no-cache" }
              );
            r.query = this.transformDocument(r.query);
            var n = this.queryManager.generateQueryId();
            this.lastQuery = e.query
              ? this.transformDocument(this.options.query)
              : r.query;
            var i = this.queryInfo,
              o = i.networkStatus;
            (i.networkStatus = C.fetchMore),
              r.notifyOnNetworkStatusChange && this.observe();
            var a = new Set();
            return this.queryManager
              .fetchQuery(n, r, C.fetchMore)
              .then(function (s) {
                return (
                  t.queryManager.removeQuery(n),
                  i.networkStatus === C.fetchMore && (i.networkStatus = o),
                  t.queryManager.cache.batch({
                    update: function (n) {
                      var i = e.updateQuery;
                      i
                        ? n.updateQuery(
                            {
                              query: t.query,
                              variables: t.variables,
                              returnPartialData: !0,
                              optimistic: !1,
                            },
                            function (e) {
                              return i(e, {
                                fetchMoreResult: s.data,
                                variables: r.variables,
                              });
                            }
                          )
                        : n.writeQuery({
                            query: r.query,
                            variables: r.variables,
                            data: s.data,
                          });
                    },
                    onWatchUpdated: function (e) {
                      a.add(e.query);
                    },
                  }),
                  s
                );
              })
              .finally(function () {
                a.has(t.query) || sQ(t);
              });
          }),
          (t.prototype.subscribeToMore = function (e) {
            var t = this,
              r = this.queryManager
                .startGraphQLSubscription({
                  query: e.document,
                  variables: e.variables,
                  context: e.context,
                })
                .subscribe({
                  next: function (r) {
                    var n = e.updateQuery;
                    n &&
                      t.updateQuery(function (e, t) {
                        return n(e, {
                          subscriptionData: r,
                          variables: t.variables,
                        });
                      });
                  },
                  error: function (t) {
                    e.onError
                      ? e.onError(t)
                      : !1 !== globalThis.__DEV__ && oC.error(19, t);
                  },
                });
            return (
              this.subscriptions.add(r),
              function () {
                t.subscriptions.delete(r) && r.unsubscribe();
              }
            );
          }),
          (t.prototype.setOptions = function (e) {
            return this.reobserve(e);
          }),
          (t.prototype.silentSetOptions = function (e) {
            var t = sM(this.options, e || {});
            sF(this.options, t);
          }),
          (t.prototype.setVariables = function (e) {
            return sc(this.variables, e)
              ? this.observers.size
                ? this.result()
                : Promise.resolve()
              : ((this.options.variables = e), this.observers.size)
              ? this.reobserve(
                  {
                    fetchPolicy: this.options.initialFetchPolicy,
                    variables: e,
                  },
                  C.setVariables
                )
              : Promise.resolve();
          }),
          (t.prototype.updateQuery = function (e) {
            var t = this.queryManager,
              r = e(
                t.cache.diff({
                  query: this.options.query,
                  variables: this.variables,
                  returnPartialData: !0,
                  optimistic: !1,
                }).result,
                { variables: this.variables }
              );
            r &&
              (t.cache.writeQuery({
                query: this.options.query,
                data: r,
                variables: this.variables,
              }),
              t.broadcastQueries());
          }),
          (t.prototype.startPolling = function (e) {
            (this.options.pollInterval = e), this.updatePolling();
          }),
          (t.prototype.stopPolling = function () {
            (this.options.pollInterval = 0), this.updatePolling();
          }),
          (t.prototype.applyNextFetchPolicy = function (e, t) {
            if (t.nextFetchPolicy) {
              var r = t.fetchPolicy,
                n = void 0 === r ? "cache-first" : r,
                i = t.initialFetchPolicy,
                o = void 0 === i ? n : i;
              "standby" === n ||
                ("function" == typeof t.nextFetchPolicy
                  ? (t.fetchPolicy = t.nextFetchPolicy(n, {
                      reason: e,
                      options: t,
                      observable: this,
                      initialFetchPolicy: o,
                    }))
                  : "variables-changed" === e
                  ? (t.fetchPolicy = o)
                  : (t.fetchPolicy = t.nextFetchPolicy));
            }
            return t.fetchPolicy;
          }),
          (t.prototype.fetch = function (e, t) {
            return (
              this.queryManager.setObservableQuery(this),
              this.queryManager.fetchConcastWithInfo(this.queryId, e, t)
            );
          }),
          (t.prototype.updatePolling = function () {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (!r) {
                t && (clearTimeout(t.timeout), delete this.pollingInfo);
                return;
              }
              if (!t || t.interval !== r) {
                oC(r, 20), ((t || (this.pollingInfo = {})).interval = r);
                var n = function () {
                    e.pollingInfo &&
                      (sD(e.queryInfo.networkStatus)
                        ? i()
                        : e
                            .reobserve(
                              {
                                fetchPolicy:
                                  "no-cache" === e.options.initialFetchPolicy
                                    ? "no-cache"
                                    : "network-only",
                              },
                              C.poll
                            )
                            .then(i, i));
                  },
                  i = function () {
                    var t = e.pollingInfo;
                    t &&
                      (clearTimeout(t.timeout),
                      (t.timeout = setTimeout(n, t.interval)));
                  };
                i();
              }
            }
          }),
          (t.prototype.updateLastResult = function (e, t) {
            void 0 === t && (t = this.variables);
            var r = this.getLastError();
            return (
              r && this.last && !sc(t, this.last.variables) && (r = void 0),
              (this.last = tv(
                {
                  result: this.queryManager.assumeImmutableResults ? e : sN(e),
                  variables: t,
                },
                r ? { error: r } : null
              ))
            );
          }),
          (t.prototype.reobserveAsConcast = function (e, t) {
            var r = this;
            this.isTornDown = !1;
            var n = t === C.refetch || t === C.fetchMore || t === C.poll,
              i = this.options.variables,
              o = this.options.fetchPolicy,
              a = sM(this.options, e || {}),
              s = n ? a : sF(this.options, a),
              u = this.transformDocument(s.query);
            (this.lastQuery = u),
              !n &&
                (this.updatePolling(),
                e &&
                  e.variables &&
                  !sc(e.variables, i) &&
                  "standby" !== s.fetchPolicy &&
                  s.fetchPolicy === o &&
                  (this.applyNextFetchPolicy("variables-changed", s),
                  void 0 === t && (t = C.setVariables)));
            var c = u === s.query ? s : tv(tv({}, s), { query: u });
            this.waitForOwnResult &&
              (this.waitForOwnResult = sW(c.fetchPolicy));
            var l = function () {
                r.concast === h && (r.waitForOwnResult = !1);
              },
              d = c.variables && tv({}, c.variables),
              f = this.fetch(c, t),
              h = f.concast,
              p = f.fromLink,
              v = {
                next: function (e) {
                  l(), r.reportResult(e, d);
                },
                error: function (e) {
                  l(), r.reportError(e, d);
                },
              };
            return (
              n ||
                (!p && this.concast) ||
                (this.concast &&
                  this.observer &&
                  this.concast.removeObserver(this.observer),
                (this.concast = h),
                (this.observer = v)),
              h.addObserver(v),
              h
            );
          }),
          (t.prototype.reobserve = function (e, t) {
            return this.reobserveAsConcast(e, t).promise;
          }),
          (t.prototype.resubscribeAfterError = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this.last;
            this.resetLastResults();
            var n = this.subscribe.apply(this, e);
            return (this.last = r), n;
          }),
          (t.prototype.observe = function () {
            this.reportResult(this.getCurrentResult(!1), this.variables);
          }),
          (t.prototype.reportResult = function (e, t) {
            var r = this.getLastError(),
              n = this.isDifferentFromLastResult(e, t);
            (r || !e.partial || this.options.returnPartialData) &&
              this.updateLastResult(e, t),
              (r || n) && sk(this.observers, "next", e);
          }),
          (t.prototype.reportError = function (e, t) {
            var r = tv(tv({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: C.error,
              loading: !1,
            });
            this.updateLastResult(r, t),
              sk(this.observers, "error", (this.last.error = e));
          }),
          (t.prototype.hasObservers = function () {
            return this.observers.size > 0;
          }),
          (t.prototype.tearDownQuery = function () {
            this.isTornDown ||
              (this.concast &&
                this.observer &&
                (this.concast.removeObserver(this.observer),
                delete this.concast,
                delete this.observer),
              this.stopPolling(),
              this.subscriptions.forEach(function (e) {
                return e.unsubscribe();
              }),
              this.subscriptions.clear(),
              this.queryManager.stopQuery(this.queryId),
              this.observers.clear(),
              (this.isTornDown = !0));
          }),
          (t.prototype.transformDocument = function (e) {
            return this.queryManager.transform(e);
          }),
          t
        );
      })(o2);
    function sQ(e) {
      var t = e.options,
        r = t.fetchPolicy,
        n = t.nextFetchPolicy;
      return "cache-and-network" === r || "network-only" === r
        ? e.reobserve({
            fetchPolicy: "cache-first",
            nextFetchPolicy: function () {
              return ((this.nextFetchPolicy = n), "function" == typeof n)
                ? n.apply(this, arguments)
                : r;
            },
          })
        : e.reobserve();
    }
    function sV(e) {
      !1 !== globalThis.__DEV__ && oC.error(21, e.message, e.stack);
    }
    function sz(e) {
      !1 !== globalThis.__DEV__ &&
        e &&
        !1 !== globalThis.__DEV__ &&
        oC.debug(22, e);
    }
    function sW(e) {
      return "network-only" === e || "no-cache" === e || "standby" === e;
    }
    function sB(e) {
      return (
        e.kind === S.FIELD ||
        e.kind === S.FRAGMENT_SPREAD ||
        e.kind === S.INLINE_FRAGMENT
      );
    }
    function sU() {}
    s_(sL);
    class s$ {
      constructor(e = 1 / 0, t = sU) {
        (this.max = e),
          (this.dispose = t),
          (this.map = new Map()),
          (this.newest = null),
          (this.oldest = null);
      }
      has(e) {
        return this.map.has(e);
      }
      get(e) {
        let t = this.getNode(e);
        return t && t.value;
      }
      getNode(e) {
        let t = this.map.get(e);
        if (t && t !== this.newest) {
          let { older: e, newer: r } = t;
          r && (r.older = e),
            e && (e.newer = r),
            (t.older = this.newest),
            (t.older.newer = t),
            (t.newer = null),
            (this.newest = t),
            t === this.oldest && (this.oldest = r);
        }
        return t;
      }
      set(e, t) {
        let r = this.getNode(e);
        return r
          ? (r.value = t)
          : ((r = { key: e, value: t, newer: null, older: this.newest }),
            this.newest && (this.newest.newer = r),
            (this.newest = r),
            (this.oldest = this.oldest || r),
            this.map.set(e, r),
            r.value);
      }
      clean() {
        for (; this.oldest && this.map.size > this.max; )
          this.delete(this.oldest.key);
      }
      delete(e) {
        let t = this.map.get(e);
        return (
          !!t &&
          (t === this.newest && (this.newest = t.older),
          t === this.oldest && (this.oldest = t.newer),
          t.newer && (t.newer.older = t.older),
          t.older && (t.older.newer = t.newer),
          this.map.delete(e),
          this.dispose(t.value, e),
          !0)
        );
      }
    }
    let sK = null,
      sH = {},
      sY = 1;
    function sG(e) {
      try {
        return e();
      } catch (e) {}
    }
    let sJ = "@wry/context:Slot",
      sX = sG(() => globalThis) || sG(() => e.g) || Object.create(null),
      sZ =
        sX[sJ] ||
        Array[sJ] ||
        (function (e) {
          try {
            Object.defineProperty(sX, sJ, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          } finally {
            return e;
          }
        })(
          class {
            constructor() {
              this.id = [
                "slot",
                sY++,
                Date.now(),
                Math.random().toString(36).slice(2),
              ].join(":");
            }
            hasValue() {
              for (let e = sK; e; e = e.parent)
                if (this.id in e.slots) {
                  let t = e.slots[this.id];
                  if (t === sH) break;
                  return e !== sK && (sK.slots[this.id] = t), !0;
                }
              return sK && (sK.slots[this.id] = sH), !1;
            }
            getValue() {
              if (this.hasValue()) return sK.slots[this.id];
            }
            withValue(e, t, r, n) {
              let i = { __proto__: null, [this.id]: e },
                o = sK;
              sK = { parent: o, slots: i };
              try {
                return t.apply(n, r);
              } finally {
                sK = o;
              }
            }
            static bind(e) {
              let t = sK;
              return function () {
                let r = sK;
                try {
                  return (sK = t), e.apply(this, arguments);
                } finally {
                  sK = r;
                }
              };
            }
            static noContext(e, t, r) {
              if (!sK) return e.apply(r, t);
              {
                let n = sK;
                try {
                  return (sK = null), e.apply(r, t);
                } finally {
                  sK = n;
                }
              }
            }
          }
        ),
      { bind: s0, noContext: s1 } = sZ,
      s2 = new sZ(),
      { hasOwnProperty: s3 } = Object.prototype,
      s4 =
        Array.from ||
        function (e) {
          let t = [];
          return e.forEach((e) => t.push(e)), t;
        };
    function s6(e) {
      let { unsubscribe: t } = e;
      "function" == typeof t && ((e.unsubscribe = void 0), t());
    }
    let s5 = [];
    function s8(e, t) {
      if (!e) throw Error(t || "assertion failure");
    }
    function s7(e) {
      switch (e.length) {
        case 0:
          throw Error("unknown value");
        case 1:
          return e[0];
        case 2:
          throw e[1];
      }
    }
    class s9 {
      constructor(e) {
        (this.fn = e),
          (this.parents = new Set()),
          (this.childValues = new Map()),
          (this.dirtyChildren = null),
          (this.dirty = !0),
          (this.recomputing = !1),
          (this.value = []),
          (this.deps = null),
          ++s9.count;
      }
      peek() {
        if (1 === this.value.length && !ur(this))
          return ue(this), this.value[0];
      }
      recompute(e) {
        var t, r, n;
        return (
          s8(!this.recomputing, "already recomputing"),
          ue(this),
          ur(this)
            ? ((t = this),
              (r = e),
              us(t),
              s2.withValue(t, ut, [t, r]),
              (function (e, t) {
                if ("function" == typeof e.subscribe)
                  try {
                    s6(e), (e.unsubscribe = e.subscribe.apply(null, t));
                  } catch (t) {
                    return e.setDirty(), !1;
                  }
                return !0;
              })(t, r) &&
                (((n = t).dirty = !1),
                ur(n) ||
                  (function (e) {
                    un(e, uo);
                  })(n)),
              s7(t.value))
            : s7(this.value)
        );
      }
      setDirty() {
        var e;
        this.dirty ||
          ((this.dirty = !0),
          (this.value.length = 0),
          (e = this),
          un(e, ui),
          s6(this));
      }
      dispose() {
        this.setDirty(),
          us(this),
          un(this, (e, t) => {
            e.setDirty(), uu(e, this);
          });
      }
      forget() {
        this.dispose();
      }
      dependOn(e) {
        e.add(this),
          this.deps || (this.deps = s5.pop() || new Set()),
          this.deps.add(e);
      }
      forgetDeps() {
        this.deps &&
          (s4(this.deps).forEach((e) => e.delete(this)),
          this.deps.clear(),
          s5.push(this.deps),
          (this.deps = null));
      }
    }
    function ue(e) {
      let t = s2.getValue();
      if (t)
        return (
          e.parents.add(t),
          t.childValues.has(e) || t.childValues.set(e, []),
          ur(e) ? ui(t, e) : uo(t, e),
          t
        );
    }
    function ut(e, t) {
      (e.recomputing = !0), (e.value.length = 0);
      try {
        e.value[0] = e.fn.apply(null, t);
      } catch (t) {
        e.value[1] = t;
      }
      e.recomputing = !1;
    }
    function ur(e) {
      return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
    }
    s9.count = 0;
    function un(e, t) {
      let r = e.parents.size;
      if (r) {
        let n = s4(e.parents);
        for (let i = 0; i < r; ++i) t(n[i], e);
      }
    }
    function ui(e, t) {
      s8(e.childValues.has(t)), s8(ur(t));
      let r = !ur(e);
      if (e.dirtyChildren) {
        if (e.dirtyChildren.has(t)) return;
      } else e.dirtyChildren = s5.pop() || new Set();
      e.dirtyChildren.add(t), r && un(e, ui);
    }
    function uo(e, t) {
      s8(e.childValues.has(t)), s8(!ur(t));
      let r = e.childValues.get(t);
      if (0 === r.length) e.childValues.set(t, t.value.slice(0));
      else {
        var n;
        let i;
        (n = t.value),
          ((i = r.length) > 0 && i === n.length && r[i - 1] === n[i - 1]) ||
            e.setDirty();
      }
      ua(e, t), ur(e) || un(e, uo);
    }
    function ua(e, t) {
      let r = e.dirtyChildren;
      r &&
        (r.delete(t),
        0 === r.size &&
          (s5.length < 100 && s5.push(r), (e.dirtyChildren = null)));
    }
    function us(e) {
      e.childValues.size > 0 &&
        e.childValues.forEach((t, r) => {
          uu(e, r);
        }),
        e.forgetDeps(),
        s8(null === e.dirtyChildren);
    }
    function uu(e, t) {
      t.parents.delete(e), e.childValues.delete(t), ua(e, t);
    }
    let uc = { setDirty: !0, dispose: !0, forget: !0 };
    function ul(e) {
      let t = new Map(),
        r = e && e.subscribe;
      function n(e) {
        let n = s2.getValue();
        if (n) {
          let i = t.get(e);
          i || t.set(e, (i = new Set())),
            n.dependOn(i),
            "function" == typeof r && (s6(i), (i.unsubscribe = r(e)));
        }
      }
      return (
        (n.dirty = function (e, r) {
          let n = t.get(e);
          if (n) {
            let i = r && s3.call(uc, r) ? r : "setDirty";
            s4(n).forEach((e) => e[i]()), t.delete(e), s6(n);
          }
        }),
        n
      );
    }
    function ud(...e) {
      return (n || (n = new sg("function" == typeof WeakMap))).lookupArray(e);
    }
    let uf = new Set();
    function uh(
      e,
      {
        max: t = 65536,
        makeCacheKey: r = ud,
        keyArgs: n,
        subscribe: i,
      } = Object.create(null)
    ) {
      let o = new s$(t, (e) => e.dispose()),
        a = function () {
          let t = r.apply(null, n ? n.apply(null, arguments) : arguments);
          if (void 0 === t) return e.apply(null, arguments);
          let a = o.get(t);
          a ||
            (o.set(t, (a = new s9(e))),
            (a.subscribe = i),
            (a.forget = () => o.delete(t)));
          let s = a.recompute(Array.prototype.slice.call(arguments));
          return (
            o.set(t, a),
            uf.add(o),
            s2.hasValue() || (uf.forEach((e) => e.clean()), uf.clear()),
            s
          );
        };
      function s(e) {
        let t = o.get(e);
        t && t.setDirty();
      }
      function u(e) {
        let t = o.get(e);
        if (t) return t.peek();
      }
      function c(e) {
        return o.delete(e);
      }
      return (
        Object.defineProperty(a, "size", {
          get: () => o.map.size,
          configurable: !1,
          enumerable: !1,
        }),
        Object.freeze(
          (a.options = { max: t, makeCacheKey: r, keyArgs: n, subscribe: i })
        ),
        (a.dirtyKey = s),
        (a.dirty = function () {
          s(r.apply(null, arguments));
        }),
        (a.peekKey = u),
        (a.peek = function () {
          return u(r.apply(null, arguments));
        }),
        (a.forgetKey = c),
        (a.forget = function () {
          return c(r.apply(null, arguments));
        }),
        (a.makeCacheKey = r),
        (a.getKey = n
          ? function () {
              return r.apply(null, n.apply(null, arguments));
            }
          : r),
        Object.freeze(a)
      );
    }
    var up = new sZ(),
      uv = new WeakMap();
    function um(e) {
      var t = uv.get(e);
      return t || uv.set(e, (t = { vars: new Set(), dep: ul() })), t;
    }
    function uy(e) {
      um(e).vars.forEach(function (t) {
        return t.forgetCache(e);
      });
    }
    function ug(e) {
      var t = new Set(),
        r = new Set(),
        n = function (o) {
          if (arguments.length > 0) {
            if (e !== o) {
              (e = o),
                t.forEach(function (e) {
                  var t;
                  um(e).dep.dirty(n),
                    (t = e).broadcastWatches && t.broadcastWatches();
                });
              var a = Array.from(r);
              r.clear(),
                a.forEach(function (t) {
                  return t(e);
                });
            }
          } else {
            var s = up.getValue();
            s && (i(s), um(s).dep(n));
          }
          return e;
        };
      n.onNextChange = function (e) {
        return (
          r.add(e),
          function () {
            r.delete(e);
          }
        );
      };
      var i = (n.attachCache = function (e) {
        return t.add(e), um(e).vars.add(n), n;
      });
      return (
        (n.forgetCache = function (e) {
          return t.delete(e);
        }),
        n
      );
    }
    var ub = (function () {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          (this.selectionsToResolveCache = new WeakMap()),
            (this.cache = t),
            r && (this.client = r),
            n && this.addResolvers(n),
            i && this.setFragmentMatcher(i);
        }
        return (
          (e.prototype.addResolvers = function (e) {
            var t = this;
            (this.resolvers = this.resolvers || {}),
              Array.isArray(e)
                ? e.forEach(function (e) {
                    t.resolvers = aF(t.resolvers, e);
                  })
                : (this.resolvers = aF(this.resolvers, e));
          }),
          (e.prototype.setResolvers = function (e) {
            (this.resolvers = {}), this.addResolvers(e);
          }),
          (e.prototype.getResolvers = function () {
            return this.resolvers || {};
          }),
          (e.prototype.runResolvers = function (e) {
            var t = e.document,
              r = e.remoteResult,
              n = e.context,
              i = e.variables,
              o = e.onlyRunForcedResolvers,
              a = void 0 !== o && o;
            return ty(this, void 0, void 0, function () {
              return tg(this, function (e) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        r.data,
                        n,
                        i,
                        this.fragmentMatcher,
                        a
                      ).then(function (e) {
                        return tv(tv({}, r), { data: e.result });
                      }),
                    ]
                  : [2, r];
              });
            });
          }),
          (e.prototype.setFragmentMatcher = function (e) {
            this.fragmentMatcher = e;
          }),
          (e.prototype.getFragmentMatcher = function () {
            return this.fragmentMatcher;
          }),
          (e.prototype.clientQuery = function (e) {
            return a_(["client"], e) && this.resolvers ? e : null;
          }),
          (e.prototype.serverQuery = function (e) {
            return st(e);
          }),
          (e.prototype.prepareContext = function (e) {
            var t = this.cache;
            return tv(tv({}, e), {
              cache: t,
              getCacheKey: function (e) {
                return t.identify(e);
              },
            });
          }),
          (e.prototype.addExportedVariables = function (e, t, r) {
            return (
              void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              ty(this, void 0, void 0, function () {
                return tg(this, function (n) {
                  return e
                    ? [
                        2,
                        this.resolveDocument(
                          e,
                          this.buildRootValueFromCache(e, t) || {},
                          this.prepareContext(r),
                          t
                        ).then(function (e) {
                          return tv(tv({}, t), e.exportedVariables);
                        }),
                      ]
                    : [2, tv({}, t)];
                });
              })
            );
          }),
          (e.prototype.shouldForceResolvers = function (e) {
            var t = !1;
            return (
              aS(e, {
                Directive: {
                  enter: function (e) {
                    if (
                      "client" === e.name.value &&
                      e.arguments &&
                      (t = e.arguments.some(function (e) {
                        return (
                          "always" === e.name.value &&
                          "BooleanValue" === e.value.kind &&
                          !0 === e.value.value
                        );
                      }))
                    )
                      return aO;
                  },
                },
              }),
              t
            );
          }),
          (e.prototype.buildRootValueFromCache = function (e, t) {
            return this.cache.diff({
              query:
                "query" === ah(e).operation
                  ? e
                  : aS(e, {
                      OperationDefinition: {
                        enter: function (e) {
                          return tv(tv({}, e), { operation: "query" });
                        },
                      },
                    }),
              variables: t,
              returnPartialData: !0,
              optimistic: !1,
            }).result;
          }),
          (e.prototype.resolveDocument = function (e, t, r, n, i, o) {
            return (
              void 0 === r && (r = {}),
              void 0 === n && (n = {}),
              void 0 === i &&
                (i = function () {
                  return !0;
                }),
              void 0 === o && (o = !1),
              ty(this, void 0, void 0, function () {
                var a, s, u, c, l, d, f, h, p;
                return tg(this, function (v) {
                  return (
                    (a = ah(e)),
                    (s = o6(ad(e))),
                    (u = this.collectSelectionsToResolve(a, s)),
                    (l = (c = a.operation)
                      ? c.charAt(0).toUpperCase() + c.slice(1)
                      : "Query"),
                    (d = this),
                    (f = d.cache),
                    (h = d.client),
                    (p = {
                      fragmentMap: s,
                      context: tv(tv({}, r), { cache: f, client: h }),
                      variables: n,
                      fragmentMatcher: i,
                      defaultOperationType: l,
                      exportedVariables: {},
                      selectionsToResolve: u,
                      onlyRunForcedResolvers: o,
                    }),
                    [
                      2,
                      this.resolveSelectionSet(a.selectionSet, !1, t, p).then(
                        function (e) {
                          return {
                            result: e,
                            exportedVariables: p.exportedVariables,
                          };
                        }
                      ),
                    ]
                  );
                });
              })
            );
          }),
          (e.prototype.resolveSelectionSet = function (e, t, r, n) {
            return ty(this, void 0, void 0, function () {
              var i,
                o,
                a,
                s,
                u,
                c = this;
              return tg(this, function (l) {
                return (
                  (i = n.fragmentMap),
                  (o = n.context),
                  (a = n.variables),
                  (s = [r]),
                  (u = function (e) {
                    return ty(c, void 0, void 0, function () {
                      var u, c;
                      return tg(this, function (l) {
                        return (t || n.selectionsToResolve.has(e)) && ak(e, a)
                          ? as(e)
                            ? [
                                2,
                                this.resolveField(e, t, r, n).then(function (
                                  t
                                ) {
                                  var r;
                                  void 0 !== t &&
                                    s.push((((r = {})[ao(e)] = t), r));
                                }),
                              ]
                            : ("InlineFragment" === e.kind
                                ? (u = e)
                                : oC((u = i[e.name.value]), 16, e.name.value),
                              u &&
                                u.typeCondition &&
                                ((c = u.typeCondition.name.value),
                                n.fragmentMatcher(r, c, o)))
                            ? [
                                2,
                                this.resolveSelectionSet(
                                  u.selectionSet,
                                  t,
                                  r,
                                  n
                                ).then(function (e) {
                                  s.push(e);
                                }),
                              ]
                            : [2]
                          : [2];
                      });
                    });
                  }),
                  [
                    2,
                    Promise.all(e.selections.map(u)).then(function () {
                      return aq(s);
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveField = function (e, t, r, n) {
            return ty(this, void 0, void 0, function () {
              var i,
                o,
                a,
                s,
                u,
                c,
                l,
                d,
                f,
                h = this;
              return tg(this, function (p) {
                return r
                  ? ((i = n.variables),
                    (s = (o = e.name.value) !== (a = ao(e))),
                    (c = Promise.resolve((u = r[a] || r[o]))),
                    (!n.onlyRunForcedResolvers ||
                      this.shouldForceResolvers(e)) &&
                      ((l = r.__typename || n.defaultOperationType),
                      (d = this.resolvers && this.resolvers[l]) &&
                        (f = d[s ? o : a]) &&
                        (c = Promise.resolve(
                          up.withValue(this.cache, f, [
                            r,
                            ai(e, i),
                            n.context,
                            { field: e, fragmentMap: n.fragmentMap },
                          ])
                        ))),
                    [
                      2,
                      c.then(function (r) {
                        if (
                          (void 0 === r && (r = u),
                          e.directives &&
                            e.directives.forEach(function (e) {
                              "export" === e.name.value &&
                                e.arguments &&
                                e.arguments.forEach(function (e) {
                                  "as" === e.name.value &&
                                    "StringValue" === e.value.kind &&
                                    (n.exportedVariables[e.value.value] = r);
                                });
                            }),
                          !e.selectionSet || null == r)
                        )
                          return r;
                        var i,
                          o,
                          a =
                            null !=
                              (o =
                                null == (i = e.directives)
                                  ? void 0
                                  : i.some(function (e) {
                                      return "client" === e.name.value;
                                    })) && o;
                        return Array.isArray(r)
                          ? h.resolveSubSelectedArray(e, t || a, r, n)
                          : e.selectionSet
                          ? h.resolveSelectionSet(e.selectionSet, t || a, r, n)
                          : void 0;
                      }),
                    ])
                  : [2, null];
              });
            });
          }),
          (e.prototype.resolveSubSelectedArray = function (e, t, r, n) {
            var i = this;
            return Promise.all(
              r.map(function (r) {
                return null === r
                  ? null
                  : Array.isArray(r)
                  ? i.resolveSubSelectedArray(e, t, r, n)
                  : e.selectionSet
                  ? i.resolveSelectionSet(e.selectionSet, t, r, n)
                  : void 0;
              })
            );
          }),
          (e.prototype.collectSelectionsToResolve = function (e, t) {
            var r = function (e) {
                return !Array.isArray(e);
              },
              n = this.selectionsToResolveCache;
            return (function e(i) {
              if (!n.has(i)) {
                var o = new Set();
                n.set(i, o),
                  aS(i, {
                    Directive: function (e, t, n, i, a) {
                      "client" === e.name.value &&
                        a.forEach(function (e) {
                          r(e) && sB(e) && o.add(e);
                        });
                    },
                    FragmentSpread: function (n, i, a, s, u) {
                      var c = t[n.name.value];
                      oC(c, 17, n.name.value);
                      var l = e(c);
                      l.size > 0 &&
                        (u.forEach(function (e) {
                          r(e) && sB(e) && o.add(e);
                        }),
                        o.add(n),
                        l.forEach(function (e) {
                          o.add(e);
                        }));
                    },
                  });
              }
              return n.get(i);
            })(e);
          }),
          e
        );
      })(),
      uw = new (oD ? WeakMap : Map)();
    function ux(e, t) {
      var r = e[t];
      "function" == typeof r &&
        (e[t] = function () {
          return uw.set(e, (uw.get(e) + 1) % 1e15), r.apply(this, arguments);
        });
    }
    function uE(e) {
      e.notifyTimeout &&
        (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
    }
    var uO = (function () {
      function e(e, t) {
        void 0 === t && (t = e.generateQueryId()),
          (this.queryId = t),
          (this.listeners = new Set()),
          (this.document = null),
          (this.lastRequestId = 1),
          (this.subscriptions = new Set()),
          (this.stopped = !1),
          (this.dirty = !1),
          (this.observableQuery = null);
        var r = (this.cache = e.cache);
        uw.has(r) ||
          (uw.set(r, 0), ux(r, "evict"), ux(r, "modify"), ux(r, "reset"));
      }
      return (
        (e.prototype.init = function (e) {
          var t = e.networkStatus || C.loading;
          return (
            this.variables &&
              this.networkStatus !== C.loading &&
              !sc(this.variables, e.variables) &&
              (t = C.setVariables),
            sc(e.variables, this.variables) || (this.lastDiff = void 0),
            Object.assign(this, {
              document: e.document,
              variables: e.variables,
              networkError: null,
              graphQLErrors: this.graphQLErrors || [],
              networkStatus: t,
            }),
            e.observableQuery && this.setObservableQuery(e.observableQuery),
            e.lastRequestId && (this.lastRequestId = e.lastRequestId),
            this
          );
        }),
        (e.prototype.reset = function () {
          uE(this), (this.dirty = !1);
        }),
        (e.prototype.getDiff = function () {
          var e = this.getDiffOptions();
          if (this.lastDiff && sc(e, this.lastDiff.options))
            return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var t = this.observableQuery;
          if (t && "no-cache" === t.options.fetchPolicy)
            return { complete: !1 };
          var r = this.cache.diff(e);
          return this.updateLastDiff(r, e), r;
        }),
        (e.prototype.updateLastDiff = function (e, t) {
          this.lastDiff = e
            ? { diff: e, options: t || this.getDiffOptions() }
            : void 0;
        }),
        (e.prototype.getDiffOptions = function (e) {
          var t;
          return (
            void 0 === e && (e = this.variables),
            {
              query: this.document,
              variables: e,
              returnPartialData: !0,
              optimistic: !0,
              canonizeResults:
                null == (t = this.observableQuery)
                  ? void 0
                  : t.options.canonizeResults,
            }
          );
        }),
        (e.prototype.setDiff = function (e) {
          var t = this,
            r = this.lastDiff && this.lastDiff.diff;
          this.updateLastDiff(e),
            this.dirty ||
              sc(r && r.result, e && e.result) ||
              ((this.dirty = !0),
              this.notifyTimeout ||
                (this.notifyTimeout = setTimeout(function () {
                  return t.notify();
                }, 0)));
        }),
        (e.prototype.setObservableQuery = function (e) {
          var t = this;
          e !== this.observableQuery &&
            (this.oqListener && this.listeners.delete(this.oqListener),
            (this.observableQuery = e),
            e
              ? ((e.queryInfo = this),
                this.listeners.add(
                  (this.oqListener = function () {
                    t.getDiff().fromOptimisticTransaction ? e.observe() : sQ(e);
                  })
                ))
              : delete this.oqListener);
        }),
        (e.prototype.notify = function () {
          var e = this;
          uE(this),
            this.shouldNotify() &&
              this.listeners.forEach(function (t) {
                return t(e);
              }),
            (this.dirty = !1);
        }),
        (e.prototype.shouldNotify = function () {
          if (!this.dirty || !this.listeners.size) return !1;
          if (sD(this.networkStatus) && this.observableQuery) {
            var e = this.observableQuery.options.fetchPolicy;
            if ("cache-only" !== e && "cache-and-network" !== e) return !1;
          }
          return !0;
        }),
        (e.prototype.stop = function () {
          if (!this.stopped) {
            (this.stopped = !0),
              this.reset(),
              this.cancel(),
              (this.cancel = e.prototype.cancel),
              this.subscriptions.forEach(function (e) {
                return e.unsubscribe();
              });
            var t = this.observableQuery;
            t && t.stopPolling();
          }
        }),
        (e.prototype.cancel = function () {}),
        (e.prototype.updateWatch = function (e) {
          var t = this;
          void 0 === e && (e = this.variables);
          var r = this.observableQuery;
          if (!r || "no-cache" !== r.options.fetchPolicy) {
            var n = tv(tv({}, this.getDiffOptions(e)), {
              watcher: this,
              callback: function (e) {
                return t.setDiff(e);
              },
            });
            (this.lastWatch && sc(n, this.lastWatch)) ||
              (this.cancel(),
              (this.cancel = this.cache.watch((this.lastWatch = n))));
          }
        }),
        (e.prototype.resetLastWrite = function () {
          this.lastWrite = void 0;
        }),
        (e.prototype.shouldWrite = function (e, t) {
          var r = this.lastWrite;
          return !(
            r &&
            r.dmCount === uw.get(this.cache) &&
            sc(t, r.variables) &&
            sc(e.data, r.result.data)
          );
        }),
        (e.prototype.markResult = function (e, t, r, n) {
          var i = this,
            o = new aQ(),
            a = aP(e.errors) ? e.errors.slice(0) : [];
          if ((this.reset(), "incremental" in e && aP(e.incremental))) {
            var s = az(this.getDiff().result, e);
            e.data = s;
          } else if ("hasNext" in e && e.hasNext) {
            var u = this.getDiff();
            e.data = o.merge(u.result, e.data);
          }
          (this.graphQLErrors = a),
            "no-cache" === r.fetchPolicy
              ? this.updateLastDiff(
                  { result: e.data, complete: !0 },
                  this.getDiffOptions(r.variables)
                )
              : 0 !== n &&
                (uS(e, r.errorPolicy)
                  ? this.cache.performTransaction(function (o) {
                      if (i.shouldWrite(e, r.variables))
                        o.writeQuery({
                          query: t,
                          data: e.data,
                          variables: r.variables,
                          overwrite: 1 === n,
                        }),
                          (i.lastWrite = {
                            result: e,
                            variables: r.variables,
                            dmCount: uw.get(i.cache),
                          });
                      else if (i.lastDiff && i.lastDiff.diff.complete) {
                        e.data = i.lastDiff.diff.result;
                        return;
                      }
                      var a = i.getDiffOptions(r.variables),
                        s = o.diff(a);
                      !i.stopped &&
                        sc(i.variables, r.variables) &&
                        i.updateWatch(r.variables),
                        i.updateLastDiff(s, a),
                        s.complete && (e.data = s.result);
                    })
                  : (this.lastWrite = void 0));
        }),
        (e.prototype.markReady = function () {
          return (this.networkError = null), (this.networkStatus = C.ready);
        }),
        (e.prototype.markError = function (e) {
          return (
            (this.networkStatus = C.error),
            (this.lastWrite = void 0),
            this.reset(),
            e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
            e.networkError && (this.networkError = e.networkError),
            e
          );
        }),
        e
      );
    })();
    function uS(e, t) {
      void 0 === t && (t = "none");
      var r = "ignore" === t || "all" === t,
        n = !aP(sO(e));
      return !n && r && e.data && (n = !0), n;
    }
    var uk = Object.prototype.hasOwnProperty,
      u_ = (function () {
        function e(e) {
          var t = this,
            r = e.cache,
            n = e.link,
            i = e.defaultOptions,
            o = e.documentTransform,
            a = e.queryDeduplication,
            s = e.onBroadcast,
            u = e.ssrMode,
            c = e.clientAwareness,
            l = e.localState,
            d = e.assumeImmutableResults,
            f = void 0 === d ? !!r.assumeImmutableResults : d;
          (this.clientAwareness = {}),
            (this.queries = new Map()),
            (this.fetchCancelFns = new Map()),
            (this.transformCache = new (oD ? WeakMap : Map)()),
            (this.queryIdCounter = 1),
            (this.requestIdCounter = 1),
            (this.mutationIdCounter = 1),
            (this.inFlightLinkObservables = new Map());
          var h = new sI(
            function (e) {
              return t.cache.transformDocument(e);
            },
            { cache: !1 }
          );
          (this.cache = r),
            (this.link = n),
            (this.defaultOptions = i || Object.create(null)),
            (this.queryDeduplication = void 0 !== a && a),
            (this.clientAwareness = void 0 === c ? {} : c),
            (this.localState = l || new ub({ cache: r })),
            (this.ssrMode = void 0 !== u && u),
            (this.assumeImmutableResults = f),
            (this.documentTransform = o ? h.concat(o).concat(h) : h),
            (this.onBroadcast = s) &&
              (this.mutationStore = Object.create(null));
        }
        return (
          (e.prototype.stop = function () {
            var e = this;
            this.queries.forEach(function (t, r) {
              e.stopQueryNoBroadcast(r);
            }),
              this.cancelPendingFetches(oT(23));
          }),
          (e.prototype.cancelPendingFetches = function (e) {
            this.fetchCancelFns.forEach(function (t) {
              return t(e);
            }),
              this.fetchCancelFns.clear();
          }),
          (e.prototype.mutate = function (e) {
            var t,
              r,
              n = e.mutation,
              i = e.variables,
              o = e.optimisticResponse,
              a = e.updateQueries,
              s = e.refetchQueries,
              u = void 0 === s ? [] : s,
              c = e.awaitRefetchQueries,
              l = void 0 !== c && c,
              d = e.update,
              f = e.onQueryUpdated,
              h = e.fetchPolicy,
              p =
                void 0 === h
                  ? (null == (t = this.defaultOptions.mutate)
                      ? void 0
                      : t.fetchPolicy) || "network-only"
                  : h,
              v = e.errorPolicy,
              m =
                void 0 === v
                  ? (null == (r = this.defaultOptions.mutate)
                      ? void 0
                      : r.errorPolicy) || "none"
                  : v,
              y = e.keepRootFields,
              g = e.context;
            return ty(this, void 0, void 0, function () {
              var e, t, r, s;
              return tg(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (
                      (oC(n, 24),
                      oC("network-only" === p || "no-cache" === p, 25),
                      (e = this.generateMutationId()),
                      (n = this.cache.transformForLink(this.transform(n))),
                      (t = this.getDocumentInfo(n).hasClientExports),
                      (i = this.getVariables(n, i)),
                      !t)
                    )
                      return [3, 2];
                    return [4, this.localState.addExportedVariables(n, i, g)];
                  case 1:
                    (i = c.sent()), (c.label = 2);
                  case 2:
                    return (
                      (r =
                        this.mutationStore &&
                        (this.mutationStore[e] = {
                          mutation: n,
                          variables: i,
                          loading: !0,
                          error: null,
                        })),
                      o &&
                        this.markMutationOptimistic(o, {
                          mutationId: e,
                          document: n,
                          variables: i,
                          fetchPolicy: p,
                          errorPolicy: m,
                          context: g,
                          updateQueries: a,
                          update: d,
                          keepRootFields: y,
                        }),
                      this.broadcastQueries(),
                      (s = this),
                      [
                        2,
                        new Promise(function (t, c) {
                          return sS(
                            s.getObservableFromLink(
                              n,
                              tv(tv({}, g), { optimisticResponse: o }),
                              i,
                              !1
                            ),
                            function (t) {
                              if (aP(sO(t)) && "none" === m)
                                throw new aN({ graphQLErrors: sO(t) });
                              r && ((r.loading = !1), (r.error = null));
                              var c = tv({}, t);
                              return (
                                "function" == typeof u && (u = u(c)),
                                "ignore" === m && aP(sO(c)) && delete c.errors,
                                s.markMutationResult({
                                  mutationId: e,
                                  result: c,
                                  document: n,
                                  variables: i,
                                  fetchPolicy: p,
                                  errorPolicy: m,
                                  context: g,
                                  update: d,
                                  updateQueries: a,
                                  awaitRefetchQueries: l,
                                  refetchQueries: u,
                                  removeOptimistic: o ? e : void 0,
                                  onQueryUpdated: f,
                                  keepRootFields: y,
                                })
                              );
                            }
                          ).subscribe({
                            next: function (e) {
                              s.broadcastQueries(),
                                ("hasNext" in e && !1 !== e.hasNext) || t(e);
                            },
                            error: function (t) {
                              r && ((r.loading = !1), (r.error = t)),
                                o && s.cache.removeOptimistic(e),
                                s.broadcastQueries(),
                                c(
                                  t instanceof aN
                                    ? t
                                    : new aN({ networkError: t })
                                );
                            },
                          });
                        }),
                      ]
                    );
                }
              });
            });
          }),
          (e.prototype.markMutationResult = function (e, t) {
            var r = this;
            void 0 === t && (t = this.cache);
            var n = e.result,
              i = [],
              o = "no-cache" === e.fetchPolicy;
            if (!o && uS(n, e.errorPolicy)) {
              if (
                (aV(n) ||
                  i.push({
                    result: n.data,
                    dataId: "ROOT_MUTATION",
                    query: e.document,
                    variables: e.variables,
                  }),
                aV(n) && aP(n.incremental))
              ) {
                var a = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0,
                  }),
                  s = void 0;
                a.result && (s = az(a.result, n)),
                  void 0 !== s &&
                    ((n.data = s),
                    i.push({
                      result: s,
                      dataId: "ROOT_MUTATION",
                      query: e.document,
                      variables: e.variables,
                    }));
              }
              var u = e.updateQueries;
              u &&
                this.queries.forEach(function (e, o) {
                  var a = e.observableQuery,
                    s = a && a.queryName;
                  if (s && uk.call(u, s)) {
                    var c = u[s],
                      l = r.queries.get(o),
                      d = l.document,
                      f = l.variables,
                      h = t.diff({
                        query: d,
                        variables: f,
                        returnPartialData: !0,
                        optimistic: !1,
                      }),
                      p = h.result;
                    if (h.complete && p) {
                      var v = c(p, {
                        mutationResult: n,
                        queryName: (d && al(d)) || void 0,
                        queryVariables: f,
                      });
                      v &&
                        i.push({
                          result: v,
                          dataId: "ROOT_QUERY",
                          query: d,
                          variables: f,
                        });
                    }
                  }
                });
            }
            if (
              i.length > 0 ||
              e.refetchQueries ||
              e.update ||
              e.onQueryUpdated ||
              e.removeOptimistic
            ) {
              var c = [];
              if (
                (this.refetchQueries({
                  updateCache: function (t) {
                    o ||
                      i.forEach(function (e) {
                        return t.write(e);
                      });
                    var a,
                      s = e.update,
                      u =
                        !(aV((a = n)) || ("hasNext" in a && "data" in a)) ||
                        (aV(n) && !n.hasNext);
                    if (s) {
                      if (!o) {
                        var c = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.getDocumentInfo(e.document).asQuery,
                          variables: e.variables,
                          optimistic: !1,
                          returnPartialData: !0,
                        });
                        c.complete &&
                          ("incremental" in
                            (n = tv(tv({}, n), { data: c.result })) &&
                            delete n.incremental,
                          "hasNext" in n && delete n.hasNext);
                      }
                      u &&
                        s(t, n, { context: e.context, variables: e.variables });
                    }
                    o ||
                      e.keepRootFields ||
                      !u ||
                      t.modify({
                        id: "ROOT_MUTATION",
                        fields: function (e, t) {
                          var r = t.fieldName,
                            n = t.DELETE;
                          return "__typename" === r ? e : n;
                        },
                      });
                  },
                  include: e.refetchQueries,
                  optimistic: !1,
                  removeOptimistic: e.removeOptimistic,
                  onQueryUpdated: e.onQueryUpdated || null,
                }).forEach(function (e) {
                  return c.push(e);
                }),
                e.awaitRefetchQueries || e.onQueryUpdated)
              )
                return Promise.all(c).then(function () {
                  return n;
                });
            }
            return Promise.resolve(n);
          }),
          (e.prototype.markMutationOptimistic = function (e, t) {
            var r = this,
              n = "function" == typeof e ? e(t.variables) : e;
            return this.cache.recordOptimisticTransaction(function (e) {
              try {
                r.markMutationResult(tv(tv({}, t), { result: { data: n } }), e);
              } catch (e) {
                !1 !== globalThis.__DEV__ && oC.error(e);
              }
            }, t.mutationId);
          }),
          (e.prototype.fetchQuery = function (e, t, r) {
            return this.fetchConcastWithInfo(e, t, r).concast.promise;
          }),
          (e.prototype.getQueryStore = function () {
            var e = Object.create(null);
            return (
              this.queries.forEach(function (t, r) {
                e[r] = {
                  variables: t.variables,
                  networkStatus: t.networkStatus,
                  networkError: t.networkError,
                  graphQLErrors: t.graphQLErrors,
                };
              }),
              e
            );
          }),
          (e.prototype.resetErrors = function (e) {
            var t = this.queries.get(e);
            t && ((t.networkError = void 0), (t.graphQLErrors = []));
          }),
          (e.prototype.transform = function (e) {
            return this.documentTransform.transformDocument(e);
          }),
          (e.prototype.getDocumentInfo = function (e) {
            var t = this.transformCache;
            if (!t.has(e)) {
              var r = {
                hasClientExports: e && a_(["client", "export"], e, !0),
                hasForcedResolvers: this.localState.shouldForceResolvers(e),
                hasNonreactiveDirective: a_(["nonreactive"], e),
                clientQuery: this.localState.clientQuery(e),
                serverQuery: a9(
                  [
                    { name: "client", remove: !0 },
                    { name: "connection" },
                    { name: "nonreactive" },
                  ],
                  e
                ),
                defaultVars: ap(ac(e)),
                asQuery: tv(tv({}, e), {
                  definitions: e.definitions.map(function (e) {
                    return "OperationDefinition" === e.kind &&
                      "query" !== e.operation
                      ? tv(tv({}, e), { operation: "query" })
                      : e;
                  }),
                }),
              };
              t.set(e, r);
            }
            return t.get(e);
          }),
          (e.prototype.getVariables = function (e, t) {
            return tv(tv({}, this.getDocumentInfo(e).defaultVars), t);
          }),
          (e.prototype.watchQuery = function (e) {
            var t = this.transform(e.query);
            void 0 ===
              (e = tv(tv({}, e), {
                variables: this.getVariables(t, e.variables),
              })).notifyOnNetworkStatusChange &&
              (e.notifyOnNetworkStatusChange = !1);
            var r = new uO(this),
              n = new sL({ queryManager: this, queryInfo: r, options: e });
            return (
              (n.lastQuery = t),
              this.queries.set(n.queryId, r),
              r.init({
                document: t,
                observableQuery: n,
                variables: n.variables,
              }),
              n
            );
          }),
          (e.prototype.query = function (e, t) {
            var r = this;
            return (
              void 0 === t && (t = this.generateQueryId()),
              oC(e.query, 26),
              oC("Document" === e.query.kind, 27),
              oC(!e.returnPartialData, 28),
              oC(!e.pollInterval, 29),
              this.fetchQuery(
                t,
                tv(tv({}, e), { query: this.transform(e.query) })
              ).finally(function () {
                return r.stopQuery(t);
              })
            );
          }),
          (e.prototype.generateQueryId = function () {
            return String(this.queryIdCounter++);
          }),
          (e.prototype.generateRequestId = function () {
            return this.requestIdCounter++;
          }),
          (e.prototype.generateMutationId = function () {
            return String(this.mutationIdCounter++);
          }),
          (e.prototype.stopQueryInStore = function (e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
          }),
          (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
            var t = this.queries.get(e);
            t && t.stop();
          }),
          (e.prototype.clearStore = function (e) {
            return (
              void 0 === e && (e = { discardWatches: !0 }),
              this.cancelPendingFetches(oT(30)),
              this.queries.forEach(function (e) {
                e.observableQuery ? (e.networkStatus = C.loading) : e.stop();
              }),
              this.mutationStore && (this.mutationStore = Object.create(null)),
              this.cache.reset(e)
            );
          }),
          (e.prototype.getObservableQueries = function (e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map(),
              n = new Map(),
              i = new Set();
            return (
              Array.isArray(e) &&
                e.forEach(function (e) {
                  if ("string" == typeof e) n.set(e, !1);
                  else
                    o3(e) &&
                    "Document" === e.kind &&
                    Array.isArray(e.definitions)
                      ? n.set(t.transform(e), !1)
                      : o3(e) && e.query && i.add(e);
                }),
              this.queries.forEach(function (t, i) {
                var o = t.observableQuery,
                  a = t.document;
                if (o) {
                  if ("all" === e) return void r.set(i, o);
                  var s = o.queryName;
                  if (
                    "standby" === o.options.fetchPolicy ||
                    ("active" === e && !o.hasObservers())
                  )
                    return;
                  ("active" === e || (s && n.has(s)) || (a && n.has(a))) &&
                    (r.set(i, o), s && n.set(s, !0), a && n.set(a, !0));
                }
              }),
              i.size &&
                i.forEach(function (e) {
                  var n = oS("legacyOneTimeQuery"),
                    i = t
                      .getQuery(n)
                      .init({ document: e.query, variables: e.variables }),
                    o = new sL({
                      queryManager: t,
                      queryInfo: i,
                      options: tv(tv({}, e), { fetchPolicy: "network-only" }),
                    });
                  oC(o.queryId === n), i.setObservableQuery(o), r.set(n, o);
                }),
              !1 !== globalThis.__DEV__ &&
                n.size &&
                n.forEach(function (e, t) {
                  e ||
                    !1 === globalThis.__DEV__ ||
                    oC.warn("string" == typeof t ? 31 : 32, t);
                }),
              r
            );
          }),
          (e.prototype.reFetchObservableQueries = function (e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return (
              this.getObservableQueries(e ? "all" : "active").forEach(function (
                n,
                i
              ) {
                var o = n.options.fetchPolicy;
                n.resetLastResults(),
                  (e || ("standby" !== o && "cache-only" !== o)) &&
                    r.push(n.refetch()),
                  t.getQuery(i).setDiff(null);
              }),
              this.broadcastQueries(),
              Promise.all(r)
            );
          }),
          (e.prototype.setObservableQuery = function (e) {
            this.getQuery(e.queryId).setObservableQuery(e);
          }),
          (e.prototype.startGraphQLSubscription = function (e) {
            var t = this,
              r = e.query,
              n = e.fetchPolicy,
              i = e.errorPolicy,
              o = void 0 === i ? "none" : i,
              a = e.variables,
              s = e.context,
              u = void 0 === s ? {} : s;
            (r = this.transform(r)), (a = this.getVariables(r, a));
            var c = function (e) {
              return t.getObservableFromLink(r, u, e).map(function (i) {
                "no-cache" !== n &&
                  (uS(i, o) &&
                    t.cache.write({
                      query: r,
                      result: i.data,
                      dataId: "ROOT_SUBSCRIPTION",
                      variables: e,
                    }),
                  t.broadcastQueries());
                var a = aP(sO(i)),
                  s = !!i.extensions && Array.isArray(i.extensions[aD]);
                if (a || s) {
                  var u = {};
                  if (
                    (a && (u.graphQLErrors = i.errors),
                    s && (u.protocolErrors = i.extensions[aD]),
                    "none" === o || s)
                  )
                    throw new aN(u);
                }
                return "ignore" === o && delete i.errors, i;
              });
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var l = this.localState.addExportedVariables(r, a, u).then(c);
              return new o2(function (e) {
                var t = null;
                return (
                  l.then(function (r) {
                    return (t = r.subscribe(e));
                  }, e.error),
                  function () {
                    return t && t.unsubscribe();
                  }
                );
              });
            }
            return c(a);
          }),
          (e.prototype.stopQuery = function (e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries();
          }),
          (e.prototype.stopQueryNoBroadcast = function (e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
          }),
          (e.prototype.removeQuery = function (e) {
            this.fetchCancelFns.delete(e),
              this.queries.has(e) &&
                (this.getQuery(e).stop(), this.queries.delete(e));
          }),
          (e.prototype.broadcastQueries = function () {
            this.onBroadcast && this.onBroadcast(),
              this.queries.forEach(function (e) {
                return e.notify();
              });
          }),
          (e.prototype.getLocalState = function () {
            return this.localState;
          }),
          (e.prototype.getObservableFromLink = function (e, t, r, n) {
            var i,
              o,
              a = this;
            void 0 === n &&
              (n =
                null != (i = null == t ? void 0 : t.queryDeduplication)
                  ? i
                  : this.queryDeduplication);
            var s = this.getDocumentInfo(e),
              u = s.serverQuery,
              c = s.clientQuery;
            if (u) {
              var l = this.inFlightLinkObservables,
                d = this.link,
                f = {
                  query: u,
                  variables: r,
                  operationName: al(u) || void 0,
                  context: this.prepareContext(
                    tv(tv({}, t), { forceFetch: !n })
                  ),
                };
              if (((t = f.context), n)) {
                var h = a3(u),
                  p = l.get(h) || new Map();
                l.set(h, p);
                var v = sx(r);
                if (!(o = p.get(v))) {
                  var m = new sT([ab(d, f)]);
                  p.set(v, (o = m)),
                    m.beforeNext(function () {
                      p.delete(v) && p.size < 1 && l.delete(h);
                    });
                }
              } else o = new sT([ab(d, f)]);
            } else
              (o = new sT([o2.of({ data: {} })])), (t = this.prepareContext(t));
            return (
              c &&
                (o = sS(o, function (e) {
                  return a.localState.runResolvers({
                    document: c,
                    remoteResult: e,
                    context: t,
                    variables: r,
                  });
                })),
              o
            );
          }),
          (e.prototype.getResultsFromLink = function (e, t, r) {
            var n = (e.lastRequestId = this.generateRequestId()),
              i = this.cache.transformForLink(r.query);
            return sS(
              this.getObservableFromLink(i, r.context, r.variables),
              function (o) {
                var a = sO(o),
                  s = a.length > 0;
                if (n >= e.lastRequestId) {
                  if (s && "none" === r.errorPolicy)
                    throw e.markError(new aN({ graphQLErrors: a }));
                  e.markResult(o, i, r, t), e.markReady();
                }
                var u = { data: o.data, loading: !1, networkStatus: C.ready };
                return (
                  s &&
                    "ignore" !== r.errorPolicy &&
                    ((u.errors = a), (u.networkStatus = C.error)),
                  u
                );
              },
              function (t) {
                var r = t.hasOwnProperty("graphQLErrors")
                  ? t
                  : new aN({ networkError: t });
                throw (n >= e.lastRequestId && e.markError(r), r);
              }
            );
          }),
          (e.prototype.fetchConcastWithInfo = function (e, t, r) {
            var n,
              i,
              o = this;
            void 0 === r && (r = C.loading);
            var a = t.query,
              s = this.getVariables(a, t.variables),
              u = this.getQuery(e),
              c = this.defaultOptions.watchQuery,
              l = t.fetchPolicy,
              d = void 0 === l ? (c && c.fetchPolicy) || "cache-first" : l,
              f = t.errorPolicy,
              h = void 0 === f ? (c && c.errorPolicy) || "none" : f,
              p = t.returnPartialData,
              v = t.notifyOnNetworkStatusChange,
              m = t.context,
              y = Object.assign({}, t, {
                query: a,
                variables: s,
                fetchPolicy: d,
                errorPolicy: h,
                returnPartialData: void 0 !== p && p,
                notifyOnNetworkStatusChange: void 0 !== v && v,
                context: void 0 === m ? {} : m,
              }),
              g = function (e) {
                y.variables = e;
                var n = o.fetchQueryByPolicy(u, y, r);
                return (
                  "standby" !== y.fetchPolicy &&
                    n.sources.length > 0 &&
                    u.observableQuery &&
                    u.observableQuery.applyNextFetchPolicy("after-fetch", t),
                  n
                );
              },
              b = function () {
                return o.fetchCancelFns.delete(e);
              };
            if (
              (this.fetchCancelFns.set(e, function (e) {
                b(),
                  setTimeout(function () {
                    return n.cancel(e);
                  });
              }),
              this.getDocumentInfo(y.query).hasClientExports)
            )
              (n = new sT(
                this.localState
                  .addExportedVariables(y.query, y.variables, y.context)
                  .then(g)
                  .then(function (e) {
                    return e.sources;
                  })
              )),
                (i = !0);
            else {
              var w = g(y.variables);
              (i = w.fromLink), (n = new sT(w.sources));
            }
            return n.promise.then(b, b), { concast: n, fromLink: i };
          }),
          (e.prototype.refetchQueries = function (e) {
            var t = this,
              r = e.updateCache,
              n = e.include,
              i = e.optimistic,
              o = void 0 !== i && i,
              a = e.removeOptimistic,
              s = void 0 === a ? (o ? oS("refetchQueries") : void 0) : a,
              u = e.onQueryUpdated,
              c = new Map();
            n &&
              this.getObservableQueries(n).forEach(function (e, r) {
                c.set(r, { oq: e, lastDiff: t.getQuery(r).getDiff() });
              });
            var l = new Map();
            return (
              r &&
                this.cache.batch({
                  update: r,
                  optimistic: (o && s) || !1,
                  removeOptimistic: s,
                  onWatchUpdated: function (e, t, r) {
                    var n =
                      e.watcher instanceof uO && e.watcher.observableQuery;
                    if (n) {
                      if (u) {
                        c.delete(n.queryId);
                        var i = u(n, t, r);
                        return (
                          !0 === i && (i = n.refetch()),
                          !1 !== i && l.set(n, i),
                          i
                        );
                      }
                      null !== u &&
                        c.set(n.queryId, { oq: n, lastDiff: r, diff: t });
                    }
                  },
                }),
              c.size &&
                c.forEach(function (e, r) {
                  var n,
                    i = e.oq,
                    o = e.lastDiff,
                    a = e.diff;
                  if (u) {
                    if (!a) {
                      var s = i.queryInfo;
                      s.reset(), (a = s.getDiff());
                    }
                    n = u(i, a, o);
                  }
                  (u && !0 !== n) || (n = i.refetch()),
                    !1 !== n && l.set(i, n),
                    r.indexOf("legacyOneTimeQuery") >= 0 &&
                      t.stopQueryNoBroadcast(r);
                }),
              s && this.cache.removeOptimistic(s),
              l
            );
          }),
          (e.prototype.fetchQueryByPolicy = function (e, t, r) {
            var n = this,
              i = t.query,
              o = t.variables,
              a = t.fetchPolicy,
              s = t.refetchWritePolicy,
              u = t.errorPolicy,
              c = t.returnPartialData,
              l = t.context,
              d = t.notifyOnNetworkStatusChange,
              f = e.networkStatus;
            e.init({ document: i, variables: o, networkStatus: r });
            var h = function () {
                return e.getDiff();
              },
              p = function (t, r) {
                void 0 === r && (r = e.networkStatus || C.loading);
                var a = t.result;
                !1 === globalThis.__DEV__ || c || sc(a, {}) || sz(t.missing);
                var s = function (e) {
                  return o2.of(
                    tv(
                      { data: e, loading: sD(r), networkStatus: r },
                      t.complete ? null : { partial: !0 }
                    )
                  );
                };
                return a && n.getDocumentInfo(i).hasForcedResolvers
                  ? n.localState
                      .runResolvers({
                        document: i,
                        remoteResult: { data: a },
                        context: l,
                        variables: o,
                        onlyRunForcedResolvers: !0,
                      })
                      .then(function (e) {
                        return s(e.data || void 0);
                      })
                  : "none" === u && r === C.refetch && Array.isArray(t.missing)
                  ? s(void 0)
                  : s(a);
              },
              v =
                "no-cache" === a ? 0 : r === C.refetch && "merge" !== s ? 1 : 2,
              m = function () {
                return n.getResultsFromLink(e, v, {
                  query: i,
                  variables: o,
                  context: l,
                  fetchPolicy: a,
                  errorPolicy: u,
                });
              },
              y = d && "number" == typeof f && f !== r && sD(r);
            switch (a) {
              default:
              case "cache-first":
                var g = h();
                if (g.complete)
                  return { fromLink: !1, sources: [p(g, e.markReady())] };
                if (c || y) return { fromLink: !0, sources: [p(g), m()] };
                return { fromLink: !0, sources: [m()] };
              case "cache-and-network":
                var g = h();
                if (g.complete || c || y)
                  return { fromLink: !0, sources: [p(g), m()] };
                return { fromLink: !0, sources: [m()] };
              case "cache-only":
                return { fromLink: !1, sources: [p(h(), e.markReady())] };
              case "network-only":
                if (y) return { fromLink: !0, sources: [p(h()), m()] };
                return { fromLink: !0, sources: [m()] };
              case "no-cache":
                if (y) return { fromLink: !0, sources: [p(e.getDiff()), m()] };
                return { fromLink: !0, sources: [m()] };
              case "standby":
                return { fromLink: !1, sources: [] };
            }
          }),
          (e.prototype.getQuery = function (e) {
            return (
              e && !this.queries.has(e) && this.queries.set(e, new uO(this, e)),
              this.queries.get(e)
            );
          }),
          (e.prototype.prepareContext = function (e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return tv(tv({}, t), { clientAwareness: this.clientAwareness });
          }),
          e
        );
      })();
    function uC(e, t) {
      return sM(
        e,
        t,
        t.variables && {
          variables: sM(tv(tv({}, e && e.variables), t.variables)),
        }
      );
    }
    var uT = !1,
      uR = (function () {
        function e(e) {
          var t = this;
          if (
            ((this.resetStoreCallbacks = []),
            (this.clearStoreCallbacks = []),
            !e.cache)
          )
            throw oT(13);
          var r = e.uri,
            n = e.credentials,
            i = e.headers,
            o = e.cache,
            a = e.documentTransform,
            s = e.ssrMode,
            u = void 0 !== s && s,
            c = e.ssrForceFetchDelay,
            l = void 0 === c ? 0 : c,
            d = e.connectToDevTools,
            f =
              void 0 === d
                ? "object" == typeof window &&
                  !window.__APOLLO_CLIENT__ &&
                  !1 !== globalThis.__DEV__
                : d,
            h = e.queryDeduplication,
            p = void 0 === h || h,
            v = e.defaultOptions,
            m = e.assumeImmutableResults,
            y = void 0 === m ? o.assumeImmutableResults : m,
            g = e.resolvers,
            b = e.typeDefs,
            w = e.fragmentMatcher,
            x = e.name,
            E = e.version,
            O = e.link;
          O ||
            (O = r
              ? new si({ uri: r, credentials: n, headers: i })
              : ag.empty()),
            (this.link = O),
            (this.cache = o),
            (this.disableNetworkFetches = u || l > 0),
            (this.queryDeduplication = p),
            (this.defaultOptions = v || Object.create(null)),
            (this.typeDefs = b),
            l &&
              setTimeout(function () {
                return (t.disableNetworkFetches = !1);
              }, l),
            (this.watchQuery = this.watchQuery.bind(this)),
            (this.query = this.query.bind(this)),
            (this.mutate = this.mutate.bind(this)),
            (this.resetStore = this.resetStore.bind(this)),
            (this.reFetchObservableQueries =
              this.reFetchObservableQueries.bind(this)),
            (this.version = ow),
            (this.localState = new ub({
              cache: o,
              client: this,
              resolvers: g,
              fragmentMatcher: w,
            })),
            (this.queryManager = new u_({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              documentTransform: a,
              queryDeduplication: p,
              ssrMode: u,
              clientAwareness: { name: x, version: E },
              localState: this.localState,
              assumeImmutableResults: y,
              onBroadcast: f
                ? function () {
                    t.devToolsHookCb &&
                      t.devToolsHookCb({
                        action: {},
                        state: {
                          queries: t.queryManager.getQueryStore(),
                          mutations: t.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: t.cache.extract(!0),
                      });
                  }
                : void 0,
            })),
            f && this.connectToDevTools();
        }
        return (
          (e.prototype.connectToDevTools = function () {
            if ("object" == typeof window) {
              var e = window,
                t = Symbol.for("apollo.devtools");
              (e[t] = e[t] || []).push(this), (e.__APOLLO_CLIENT__ = this);
            }
            uT ||
              !1 === globalThis.__DEV__ ||
              ((uT = !0),
              setTimeout(function () {
                if (
                  "u" > typeof window &&
                  window.document &&
                  window.top === window.self &&
                  !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__
                ) {
                  var e = window.navigator,
                    t = e && e.userAgent,
                    r = void 0;
                  "string" == typeof t &&
                    (t.indexOf("Chrome/") > -1
                      ? (r =
                          "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                      : t.indexOf("Firefox/") > -1 &&
                        (r =
                          "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                    r &&
                      !1 !== globalThis.__DEV__ &&
                      oC.log(
                        "Download the Apollo DevTools for a better development experience: %s",
                        r
                      );
                }
              }, 1e4));
          }),
          Object.defineProperty(e.prototype, "documentTransform", {
            get: function () {
              return this.queryManager.documentTransform;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.stop = function () {
            this.queryManager.stop();
          }),
          (e.prototype.watchQuery = function (e) {
            return (
              this.defaultOptions.watchQuery &&
                (e = uC(this.defaultOptions.watchQuery, e)),
              this.disableNetworkFetches &&
                ("network-only" === e.fetchPolicy ||
                  "cache-and-network" === e.fetchPolicy) &&
                (e = tv(tv({}, e), { fetchPolicy: "cache-first" })),
              this.queryManager.watchQuery(e)
            );
          }),
          (e.prototype.query = function (e) {
            return (
              this.defaultOptions.query &&
                (e = uC(this.defaultOptions.query, e)),
              oC("cache-and-network" !== e.fetchPolicy, 14),
              this.disableNetworkFetches &&
                "network-only" === e.fetchPolicy &&
                (e = tv(tv({}, e), { fetchPolicy: "cache-first" })),
              this.queryManager.query(e)
            );
          }),
          (e.prototype.mutate = function (e) {
            return (
              this.defaultOptions.mutate &&
                (e = uC(this.defaultOptions.mutate, e)),
              this.queryManager.mutate(e)
            );
          }),
          (e.prototype.subscribe = function (e) {
            return this.queryManager.startGraphQLSubscription(e);
          }),
          (e.prototype.readQuery = function (e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t);
          }),
          (e.prototype.readFragment = function (e, t) {
            return void 0 === t && (t = !1), this.cache.readFragment(e, t);
          }),
          (e.prototype.writeQuery = function (e) {
            var t = this.cache.writeQuery(e);
            return (
              !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
            );
          }),
          (e.prototype.writeFragment = function (e) {
            var t = this.cache.writeFragment(e);
            return (
              !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
            );
          }),
          (e.prototype.__actionHookForDevTools = function (e) {
            this.devToolsHookCb = e;
          }),
          (e.prototype.__requestRaw = function (e) {
            return ab(this.link, e);
          }),
          (e.prototype.resetStore = function () {
            var e = this;
            return Promise.resolve()
              .then(function () {
                return e.queryManager.clearStore({ discardWatches: !1 });
              })
              .then(function () {
                return Promise.all(
                  e.resetStoreCallbacks.map(function (e) {
                    return e();
                  })
                );
              })
              .then(function () {
                return e.reFetchObservableQueries();
              });
          }),
          (e.prototype.clearStore = function () {
            var e = this;
            return Promise.resolve()
              .then(function () {
                return e.queryManager.clearStore({ discardWatches: !0 });
              })
              .then(function () {
                return Promise.all(
                  e.clearStoreCallbacks.map(function (e) {
                    return e();
                  })
                );
              });
          }),
          (e.prototype.onResetStore = function (e) {
            var t = this;
            return (
              this.resetStoreCallbacks.push(e),
              function () {
                t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (
                  t
                ) {
                  return t !== e;
                });
              }
            );
          }),
          (e.prototype.onClearStore = function (e) {
            var t = this;
            return (
              this.clearStoreCallbacks.push(e),
              function () {
                t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (
                  t
                ) {
                  return t !== e;
                });
              }
            );
          }),
          (e.prototype.reFetchObservableQueries = function (e) {
            return this.queryManager.reFetchObservableQueries(e);
          }),
          (e.prototype.refetchQueries = function (e) {
            var t = this.queryManager.refetchQueries(e),
              r = [],
              n = [];
            t.forEach(function (e, t) {
              r.push(t), n.push(e);
            });
            var i = Promise.all(n);
            return (
              (i.queries = r),
              (i.results = n),
              i.catch(function (e) {
                !1 !== globalThis.__DEV__ && oC.debug(15, e);
              }),
              i
            );
          }),
          (e.prototype.getObservableQueries = function (e) {
            return (
              void 0 === e && (e = "active"),
              this.queryManager.getObservableQueries(e)
            );
          }),
          (e.prototype.extract = function (e) {
            return this.cache.extract(e);
          }),
          (e.prototype.restore = function (e) {
            return this.cache.restore(e);
          }),
          (e.prototype.addResolvers = function (e) {
            this.localState.addResolvers(e);
          }),
          (e.prototype.setResolvers = function (e) {
            this.localState.setResolvers(e);
          }),
          (e.prototype.getResolvers = function () {
            return this.localState.getResolvers();
          }),
          (e.prototype.setLocalStateFragmentMatcher = function (e) {
            this.localState.setFragmentMatcher(e);
          }),
          (e.prototype.setLink = function (e) {
            this.link = this.queryManager.link = e;
          }),
          e
        );
      })(),
      uI = (function () {
        function e() {
          (this.assumeImmutableResults = !1), (this.getFragmentDoc = uh(o4));
        }
        return (
          (e.prototype.batch = function (e) {
            var t,
              r = this,
              n =
                "string" == typeof e.optimistic
                  ? e.optimistic
                  : !1 === e.optimistic
                  ? null
                  : void 0;
            return (
              this.performTransaction(function () {
                return (t = e.update(r));
              }, n),
              t
            );
          }),
          (e.prototype.recordOptimisticTransaction = function (e, t) {
            this.performTransaction(e, t);
          }),
          (e.prototype.transformDocument = function (e) {
            return e;
          }),
          (e.prototype.transformForLink = function (e) {
            return e;
          }),
          (e.prototype.identify = function (e) {}),
          (e.prototype.gc = function () {
            return [];
          }),
          (e.prototype.modify = function (e) {
            return !1;
          }),
          (e.prototype.readQuery = function (e, t) {
            return (
              void 0 === t && (t = !!e.optimistic),
              this.read(
                tv(tv({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })
              )
            );
          }),
          (e.prototype.readFragment = function (e, t) {
            return (
              void 0 === t && (t = !!e.optimistic),
              this.read(
                tv(tv({}, e), {
                  query: this.getFragmentDoc(e.fragment, e.fragmentName),
                  rootId: e.id,
                  optimistic: t,
                })
              )
            );
          }),
          (e.prototype.writeQuery = function (e) {
            var t = e.id,
              r = e.data,
              n = tm(e, ["id", "data"]);
            return this.write(
              Object.assign(n, { dataId: t || "ROOT_QUERY", result: r })
            );
          }),
          (e.prototype.writeFragment = function (e) {
            var t = e.id,
              r = e.data,
              n = e.fragment,
              i = e.fragmentName,
              o = tm(e, ["id", "data", "fragment", "fragmentName"]);
            return this.write(
              Object.assign(o, {
                query: this.getFragmentDoc(n, i),
                dataId: t,
                result: r,
              })
            );
          }),
          (e.prototype.updateQuery = function (e, t) {
            return this.batch({
              update: function (r) {
                var n = r.readQuery(e),
                  i = t(n);
                return null == i
                  ? n
                  : (r.writeQuery(tv(tv({}, e), { data: i })), i);
              },
            });
          }),
          (e.prototype.updateFragment = function (e, t) {
            return this.batch({
              update: function (r) {
                var n = r.readFragment(e),
                  i = t(n);
                return null == i
                  ? n
                  : (r.writeFragment(tv(tv({}, e), { data: i })), i);
              },
            });
          }),
          e
        );
      })(),
      uD = (function (e) {
        function t(r, n, i, o) {
          var a,
            s = e.call(this, r) || this;
          if (
            ((s.message = r),
            (s.path = n),
            (s.query = i),
            (s.variables = o),
            Array.isArray(s.path))
          ) {
            s.missing = s.message;
            for (var u = s.path.length - 1; u >= 0; --u)
              ((a = {})[s.path[u]] = s.missing), (s.missing = a);
          } else s.missing = s.path;
          return (s.__proto__ = t.prototype), s;
        }
        return tp(t, e), t;
      })(Error);
    function uj(e) {
      var t;
      return (
        !1 !== globalThis.__DEV__ &&
          (t = new Set([e])).forEach(function (e) {
            o3(e) &&
              (function (e) {
                if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (e) {
                    if (e instanceof TypeError) return null;
                    throw e;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (r) {
                o3(e[r]) && t.add(e[r]);
              });
          }),
        e
      );
    }
    var uN = Object.prototype.hasOwnProperty;
    function uM(e) {
      return null == e;
    }
    function uP(e, t) {
      var r = e.__typename,
        n = e.id,
        i = e._id;
      if (
        "string" == typeof r &&
        (t && (t.keyObject = uM(n) ? (uM(i) ? void 0 : { _id: i }) : { id: n }),
        uM(n) && !uM(i) && (n = i),
        !uM(n))
      )
        return ""
          .concat(r, ":")
          .concat(
            "number" == typeof n || "string" == typeof n ? n : JSON.stringify(n)
          );
    }
    var uA = {
      dataIdFromObject: uP,
      addTypename: !0,
      resultCaching: !0,
      canonizeResults: !1,
    };
    function uF(e) {
      var t = e.canonizeResults;
      return void 0 === t ? uA.canonizeResults : t;
    }
    var uq = /^[_a-z][_0-9a-z]*/i;
    function uL(e) {
      var t = e.match(uq);
      return t ? t[0] : e;
    }
    function uQ(e) {
      return o3(e) && !o7(e) && !aM(e);
    }
    function uV(e, t) {
      var r = o6(ad(e));
      return {
        fragmentMap: r,
        lookupFragment: function (e) {
          var n = r[e];
          return !n && t && (n = t.lookup(e)), n || null;
        },
      };
    }
    var uz = Object.create(null),
      uW = function () {
        return uz;
      },
      uB = Object.create(null),
      uU = (function () {
        function e(e, t) {
          var r = this;
          (this.policies = e),
            (this.group = t),
            (this.data = Object.create(null)),
            (this.rootIds = Object.create(null)),
            (this.refs = Object.create(null)),
            (this.getFieldValue = function (e, t) {
              return uj(o7(e) ? r.get(e.__ref, t) : e && e[t]);
            }),
            (this.canRead = function (e) {
              return o7(e) ? r.has(e.__ref) : "object" == typeof e;
            }),
            (this.toReference = function (e, t) {
              if ("string" == typeof e) return o8(e);
              if (o7(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = o8(n);
                return t && r.merge(n, e), i;
              }
            });
        }
        return (
          (e.prototype.toObject = function () {
            return tv({}, this.data);
          }),
          (e.prototype.has = function (e) {
            return void 0 !== this.lookup(e, !0);
          }),
          (e.prototype.get = function (e, t) {
            if ((this.group.depend(e, t), uN.call(this.data, e))) {
              var r = this.data[e];
              if (r && uN.call(r, t)) return r[t];
            }
            return "__typename" === t &&
              uN.call(this.policies.rootTypenamesById, e)
              ? this.policies.rootTypenamesById[e]
              : this instanceof uH
              ? this.parent.get(e, t)
              : void 0;
          }),
          (e.prototype.lookup = function (e, t) {
            return (t && this.group.depend(e, "__exists"),
            uN.call(this.data, e))
              ? this.data[e]
              : this instanceof uH
              ? this.parent.lookup(e, t)
              : this.policies.rootTypenamesById[e]
              ? Object.create(null)
              : void 0;
          }),
          (e.prototype.merge = function (e, t) {
            var r,
              n = this;
            o7(e) && (e = e.__ref), o7(t) && (t = t.__ref);
            var i = "string" == typeof e ? this.lookup((r = e)) : e,
              o = "string" == typeof t ? this.lookup((r = t)) : t;
            if (o) {
              oC("string" == typeof r, 1);
              var a = new aQ(uG).merge(i, o);
              if (
                ((this.data[r] = a),
                a !== i && (delete this.refs[r], this.group.caching))
              ) {
                var s = Object.create(null);
                i || (s.__exists = 1),
                  Object.keys(o).forEach(function (e) {
                    if (!i || i[e] !== a[e]) {
                      s[e] = 1;
                      var t = uL(e);
                      t === e ||
                        n.policies.hasKeyArgs(a.__typename, t) ||
                        (s[t] = 1),
                        void 0 !== a[e] || n instanceof uH || delete a[e];
                    }
                  }),
                  s.__typename &&
                    !(i && i.__typename) &&
                    this.policies.rootTypenamesById[r] === a.__typename &&
                    delete s.__typename,
                  Object.keys(s).forEach(function (e) {
                    return n.group.dirty(r, e);
                  });
              }
            }
          }),
          (e.prototype.modify = function (e, t) {
            var r = this,
              n = this.lookup(e);
            if (n) {
              var i = Object.create(null),
                o = !1,
                a = !0,
                s = {
                  DELETE: uz,
                  INVALIDATE: uB,
                  isReference: o7,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function (t, n) {
                    return r.policies.readField(
                      "string" == typeof t
                        ? { fieldName: t, from: n || o8(e) }
                        : t,
                      { store: r }
                    );
                  },
                };
              if (
                (Object.keys(n).forEach(function (u) {
                  var c = uL(u),
                    l = n[u];
                  if (void 0 !== l) {
                    var d = "function" == typeof t ? t : t[u] || t[c];
                    if (d) {
                      var f =
                        d === uW
                          ? uz
                          : d(
                              uj(l),
                              tv(tv({}, s), {
                                fieldName: c,
                                storeFieldName: u,
                                storage: r.getStorage(e, u),
                              })
                            );
                      f === uB
                        ? r.group.dirty(e, u)
                        : (f === uz && (f = void 0),
                          f !== l && ((i[u] = f), (o = !0), (l = f)));
                    }
                    void 0 !== l && (a = !1);
                  }
                }),
                o)
              )
                return (
                  this.merge(e, i),
                  a &&
                    (this instanceof uH
                      ? (this.data[e] = void 0)
                      : delete this.data[e],
                    this.group.dirty(e, "__exists")),
                  !0
                );
            }
            return !1;
          }),
          (e.prototype.delete = function (e, t, r) {
            var n,
              i = this.lookup(e);
            if (i) {
              var o = this.getFieldValue(i, "__typename"),
                a =
                  t && r
                    ? this.policies.getStoreFieldName({
                        typename: o,
                        fieldName: t,
                        args: r,
                      })
                    : t;
              return this.modify(e, a ? (((n = {})[a] = uW), n) : uW);
            }
            return !1;
          }),
          (e.prototype.evict = function (e, t) {
            var r = !1;
            return (
              e.id &&
                (uN.call(this.data, e.id) &&
                  (r = this.delete(e.id, e.fieldName, e.args)),
                this instanceof uH &&
                  this !== t &&
                  (r = this.parent.evict(e, t) || r),
                (e.fieldName || r) &&
                  this.group.dirty(e.id, e.fieldName || "__exists")),
              r
            );
          }),
          (e.prototype.clear = function () {
            this.replace(null);
          }),
          (e.prototype.extract = function () {
            var e = this,
              t = this.toObject(),
              r = [];
            return (
              this.getRootIdSet().forEach(function (t) {
                uN.call(e.policies.rootTypenamesById, t) || r.push(t);
              }),
              r.length && (t.__META = { extraRootIds: r.sort() }),
              t
            );
          }),
          (e.prototype.replace = function (e) {
            var t = this;
            if (
              (Object.keys(this.data).forEach(function (r) {
                (e && uN.call(e, r)) || t.delete(r);
              }),
              e)
            ) {
              var r = e.__META,
                n = tm(e, ["__META"]);
              Object.keys(n).forEach(function (e) {
                t.merge(e, n[e]);
              }),
                r && r.extraRootIds.forEach(this.retain, this);
            }
          }),
          (e.prototype.retain = function (e) {
            return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
          }),
          (e.prototype.release = function (e) {
            if (this.rootIds[e] > 0) {
              var t = --this.rootIds[e];
              return t || delete this.rootIds[e], t;
            }
            return 0;
          }),
          (e.prototype.getRootIdSet = function (e) {
            return (
              void 0 === e && (e = new Set()),
              Object.keys(this.rootIds).forEach(e.add, e),
              this instanceof uH
                ? this.parent.getRootIdSet(e)
                : Object.keys(this.policies.rootTypenamesById).forEach(
                    e.add,
                    e
                  ),
              e
            );
          }),
          (e.prototype.gc = function () {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach(function (n) {
              uN.call(r, n) &&
                (Object.keys(e.findChildRefIds(n)).forEach(t.add, t),
                delete r[n]);
            });
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof uH; ) i = i.parent;
              n.forEach(function (e) {
                return i.delete(e);
              });
            }
            return n;
          }),
          (e.prototype.findChildRefIds = function (e) {
            if (!uN.call(this.refs, e)) {
              var t = (this.refs[e] = Object.create(null)),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function (e) {
                o7(e) && (t[e.__ref] = !0),
                  o3(e) &&
                    Object.keys(e).forEach(function (t) {
                      var r = e[t];
                      o3(r) && n.add(r);
                    });
              });
            }
            return this.refs[e];
          }),
          (e.prototype.makeCacheKey = function () {
            return this.group.keyMaker.lookupArray(arguments);
          }),
          e
        );
      })(),
      u$ = (function () {
        function e(e, t) {
          void 0 === t && (t = null),
            (this.caching = e),
            (this.parent = t),
            (this.d = null),
            this.resetCaching();
        }
        return (
          (e.prototype.resetCaching = function () {
            (this.d = this.caching ? ul() : null), (this.keyMaker = new sg(oD));
          }),
          (e.prototype.depend = function (e, t) {
            if (this.d) {
              this.d(t + "#" + e);
              var r = uL(t);
              r !== t && this.d(r + "#" + e),
                this.parent && this.parent.depend(e, t);
            }
          }),
          (e.prototype.dirty = function (e, t) {
            this.d &&
              this.d.dirty(
                t + "#" + e,
                "__exists" === t ? "forget" : "setDirty"
              );
          }),
          e
        );
      })();
    function uK(e, t) {
      uJ(e) && e.group.depend(t, "__exists");
    }
    (w = (function (e) {
      function t(t) {
        var r = t.policies,
          n = t.resultCaching,
          i = t.seed,
          o = e.call(this, r, new u$(void 0 === n || n)) || this;
        return (
          (o.stump = new uY(o)),
          (o.storageTrie = new sg(oD)),
          i && o.replace(i),
          o
        );
      }
      return (
        tp(t, e),
        (t.prototype.addLayer = function (e, t) {
          return this.stump.addLayer(e, t);
        }),
        (t.prototype.removeLayer = function () {
          return this;
        }),
        (t.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        t
      );
    })((b = uU || (uU = {})))),
      (b.Root = w);
    var uH = (function (e) {
        function t(t, r, n, i) {
          var o = e.call(this, r.policies, i) || this;
          return (
            (o.id = t), (o.parent = r), (o.replay = n), (o.group = i), n(o), o
          );
        }
        return (
          tp(t, e),
          (t.prototype.addLayer = function (e, r) {
            return new t(e, this, r, this.group);
          }),
          (t.prototype.removeLayer = function (e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id
              ? (this.group.caching &&
                  Object.keys(this.data).forEach(function (e) {
                    var n = t.data[e],
                      i = r.lookup(e);
                    i
                      ? n
                        ? n !== i &&
                          Object.keys(n).forEach(function (r) {
                            sc(n[r], i[r]) || t.group.dirty(e, r);
                          })
                        : (t.group.dirty(e, "__exists"),
                          Object.keys(i).forEach(function (r) {
                            t.group.dirty(e, r);
                          }))
                      : t.delete(e);
                  }),
                r)
              : r === this.parent
              ? this
              : r.addLayer(this.id, this.replay);
          }),
          (t.prototype.toObject = function () {
            return tv(tv({}, this.parent.toObject()), this.data);
          }),
          (t.prototype.findChildRefIds = function (t) {
            var r = this.parent.findChildRefIds(t);
            return uN.call(this.data, t)
              ? tv(tv({}, r), e.prototype.findChildRefIds.call(this, t))
              : r;
          }),
          (t.prototype.getStorage = function () {
            for (var e = this.parent; e.parent; ) e = e.parent;
            return e.getStorage.apply(e, arguments);
          }),
          t
        );
      })(uU),
      uY = (function (e) {
        function t(t) {
          return (
            e.call(
              this,
              "EntityStore.Stump",
              t,
              function () {},
              new u$(t.group.caching, t.group)
            ) || this
          );
        }
        return (
          tp(t, e),
          (t.prototype.removeLayer = function () {
            return this;
          }),
          (t.prototype.merge = function () {
            return this.parent.merge.apply(this.parent, arguments);
          }),
          t
        );
      })(uH);
    function uG(e, t, r) {
      var n = e[r],
        i = t[r];
      return sc(n, i) ? n : i;
    }
    function uJ(e) {
      return !!(e instanceof uU && e.group.caching);
    }
    function uX(e) {
      return [
        e.selectionSet,
        e.objectOrReference,
        e.context,
        e.context.canonizeResults,
      ];
    }
    var uZ = (function () {
        function e(e) {
          var t = this;
          (this.knownResults = new (oD ? WeakMap : Map)()),
            (this.config = sM(e, {
              addTypename: !1 !== e.addTypename,
              canonizeResults: uF(e),
            })),
            (this.canon = e.canon || new sw()),
            (this.executeSelectionSet = uh(
              function (e) {
                var r,
                  n = e.context.canonizeResults,
                  i = uX(e);
                i[3] = !n;
                var o = (r = t.executeSelectionSet).peek.apply(r, i);
                return o
                  ? n
                    ? tv(tv({}, o), { result: t.canon.admit(o.result) })
                    : o
                  : (uK(e.context.store, e.enclosingRef.__ref),
                    t.execSelectionSetImpl(e));
              },
              {
                max: this.config.resultCacheMaxSize,
                keyArgs: uX,
                makeCacheKey: function (e, t, r, n) {
                  if (uJ(r.store))
                    return r.store.makeCacheKey(
                      e,
                      o7(t) ? t.__ref : t,
                      r.varString,
                      n
                    );
                },
              }
            )),
            (this.executeSubSelectedArray = uh(
              function (e) {
                return (
                  uK(e.context.store, e.enclosingRef.__ref),
                  t.execSubSelectedArrayImpl(e)
                );
              },
              {
                max: this.config.resultCacheMaxSize,
                makeCacheKey: function (e) {
                  var t = e.field,
                    r = e.array,
                    n = e.context;
                  if (uJ(n.store))
                    return n.store.makeCacheKey(t, r, n.varString);
                },
              }
            ));
        }
        return (
          (e.prototype.resetCanon = function () {
            this.canon = new sw();
          }),
          (e.prototype.diffQueryAgainstStore = function (e) {
            var t,
              r = e.store,
              n = e.query,
              i = e.rootId,
              o = e.variables,
              a = e.returnPartialData,
              s = e.canonizeResults,
              u = void 0 === s ? this.config.canonizeResults : s,
              c = this.config.cache.policies;
            o = tv(tv({}, ap(af(n))), o);
            var l = o8(void 0 === i ? "ROOT_QUERY" : i),
              d = this.executeSelectionSet({
                selectionSet: ah(n).selectionSet,
                objectOrReference: l,
                enclosingRef: l,
                context: tv(
                  {
                    store: r,
                    query: n,
                    policies: c,
                    variables: o,
                    varString: sx(o),
                    canonizeResults: u,
                  },
                  uV(n, this.config.fragments)
                ),
              });
            if (
              d.missing &&
              ((t = [
                new uD(
                  (function (e) {
                    try {
                      JSON.stringify(e, function (e, t) {
                        if ("string" == typeof t) throw t;
                        return t;
                      });
                    } catch (e) {
                      return e;
                    }
                  })(d.missing),
                  d.missing,
                  n,
                  o
                ),
              ]),
              !(void 0 === a || a))
            )
              throw t[0];
            return { result: d.result, complete: !t, missing: t };
          }),
          (e.prototype.isFresh = function (e, t, r, n) {
            if (uJ(n.store) && this.knownResults.get(e) === r) {
              var i = this.executeSelectionSet.peek(
                r,
                t,
                n,
                this.canon.isKnown(e)
              );
              if (i && e === i.result) return !0;
            }
            return !1;
          }),
          (e.prototype.execSelectionSetImpl = function (e) {
            var t,
              r = this,
              n = e.selectionSet,
              i = e.objectOrReference,
              o = e.enclosingRef,
              a = e.context;
            if (
              o7(i) &&
              !a.policies.rootTypenamesById[i.__ref] &&
              !a.store.has(i.__ref)
            )
              return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(
                  i.__ref,
                  " object"
                ),
              };
            var s = a.variables,
              u = a.policies,
              c = a.store.getFieldValue(i, "__typename"),
              l = [],
              d = new aQ();
            function f(e, r) {
              var n;
              return (
                e.missing && (t = d.merge(t, (((n = {})[r] = e.missing), n))),
                e.result
              );
            }
            this.config.addTypename &&
              "string" == typeof c &&
              !u.rootIdsByTypename[c] &&
              l.push({ __typename: c });
            var h = new Set(n.selections);
            h.forEach(function (e) {
              var n, p;
              if (ak(e, s))
                if (as(e)) {
                  var v = u.readField(
                      {
                        fieldName: e.name.value,
                        field: e,
                        variables: a.variables,
                        from: i,
                      },
                      a
                    ),
                    m = ao(e);
                  void 0 === v
                    ? se.added(e) ||
                      (t = d.merge(
                        t,
                        (((n = {})[m] = "Can't find field '"
                          .concat(e.name.value, "' on ")
                          .concat(
                            o7(i)
                              ? i.__ref + " object"
                              : "object " + JSON.stringify(i, null, 2)
                          )),
                        n)
                      ))
                    : aM(v)
                    ? (v = f(
                        r.executeSubSelectedArray({
                          field: e,
                          array: v,
                          enclosingRef: o,
                          context: a,
                        }),
                        m
                      ))
                    : e.selectionSet
                    ? null != v &&
                      (v = f(
                        r.executeSelectionSet({
                          selectionSet: e.selectionSet,
                          objectOrReference: v,
                          enclosingRef: o7(v) ? v : o,
                          context: a,
                        }),
                        m
                      ))
                    : a.canonizeResults && (v = r.canon.pass(v)),
                    void 0 !== v && l.push((((p = {})[m] = v), p));
                } else {
                  var y = o5(e, a.lookupFragment);
                  if (!y && e.kind === S.FRAGMENT_SPREAD)
                    throw oT(7, e.name.value);
                  y &&
                    u.fragmentMatches(y, c) &&
                    y.selectionSet.selections.forEach(h.add, h);
                }
            });
            var p = { result: aq(l), missing: t },
              v = a.canonizeResults ? this.canon.admit(p) : uj(p);
            return v.result && this.knownResults.set(v.result, n), v;
          }),
          (e.prototype.execSubSelectedArrayImpl = function (e) {
            var t,
              r = this,
              n = e.field,
              i = e.array,
              o = e.enclosingRef,
              a = e.context,
              s = new aQ();
            function u(e, r) {
              var n;
              return (
                e.missing && (t = s.merge(t, (((n = {})[r] = e.missing), n))),
                e.result
              );
            }
            return (
              n.selectionSet && (i = i.filter(a.store.canRead)),
              (i = i.map(function (e, t) {
                return null === e
                  ? null
                  : aM(e)
                  ? u(
                      r.executeSubSelectedArray({
                        field: n,
                        array: e,
                        enclosingRef: o,
                        context: a,
                      }),
                      t
                    )
                  : n.selectionSet
                  ? u(
                      r.executeSelectionSet({
                        selectionSet: n.selectionSet,
                        objectOrReference: e,
                        enclosingRef: o7(e) ? e : o,
                        context: a,
                      }),
                      t
                    )
                  : (!1 !== globalThis.__DEV__ &&
                      (function (e, t, r) {
                        if (!t.selectionSet) {
                          var n = new Set([r]);
                          n.forEach(function (r) {
                            o3(r) &&
                              (oC(
                                !o7(r),
                                8,
                                o7(r)
                                  ? e.get(r.__ref, "__typename")
                                  : r && r.__typename,
                                t.name.value
                              ),
                              Object.values(r).forEach(n.add, n));
                          });
                        }
                      })(a.store, n, e),
                    e);
              })),
              {
                result: a.canonizeResults ? this.canon.admit(i) : i,
                missing: t,
              }
            );
          }),
          e
        );
      })(),
      u0 = Object.create(null);
    function u1(e) {
      var t = JSON.stringify(e);
      return u0[t] || (u0[t] = Object.create(null));
    }
    function u2(e) {
      var t = u1(e);
      return (
        t.keyFieldsFn ||
        (t.keyFieldsFn = function (t, r) {
          var n = function (e, t) {
              return r.readField(t, e);
            },
            i = (r.keyObject = u4(e, function (e) {
              var i = u5(r.storeObject, e, n);
              return (
                void 0 === i &&
                  t !== r.storeObject &&
                  uN.call(t, e[0]) &&
                  (i = u5(t, e, u6)),
                oC(void 0 !== i, 2, e.join("."), t),
                i
              );
            }));
          return "".concat(r.typename, ":").concat(JSON.stringify(i));
        })
      );
    }
    function u3(e) {
      var t = u1(e);
      return (
        t.keyArgsFn ||
        (t.keyArgsFn = function (t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = JSON.stringify(
              u4(e, function (e) {
                var r = e[0],
                  o = r.charAt(0);
                if ("@" === o) {
                  if (n && aP(n.directives)) {
                    var a = r.slice(1),
                      s = n.directives.find(function (e) {
                        return e.name.value === a;
                      }),
                      u = s && ai(s, i);
                    return u && u5(u, e.slice(1));
                  }
                  return;
                }
                if ("$" === o) {
                  var c = r.slice(1);
                  if (i && uN.call(i, c)) {
                    var l = e.slice(0);
                    return (l[0] = c), u5(i, l);
                  }
                  return;
                }
                if (t) return u5(t, e);
              })
            );
          return (t || "{}" !== a) && (o += ":" + a), o;
        })
      );
    }
    function u4(e, t) {
      var r = new aQ();
      return (function e(t) {
        var r = u1(t);
        if (!r.paths) {
          var n = (r.paths = []),
            i = [];
          t.forEach(function (r, o) {
            aM(r)
              ? (e(r).forEach(function (e) {
                  return n.push(i.concat(e));
                }),
                (i.length = 0))
              : (i.push(r),
                aM(t[o + 1]) || (n.push(i.slice(0)), (i.length = 0)));
          });
        }
        return r.paths;
      })(e).reduce(function (e, n) {
        var i,
          o = t(n);
        if (void 0 !== o) {
          for (var a = n.length - 1; a >= 0; --a) ((i = {})[n[a]] = o), (o = i);
          e = r.merge(e, o);
        }
        return e;
      }, Object.create(null));
    }
    function u6(e, t) {
      return e[t];
    }
    function u5(e, t, r) {
      return (
        (r = r || u6),
        (function e(t) {
          return o3(t)
            ? aM(t)
              ? t.map(e)
              : u4(Object.keys(t).sort(), function (e) {
                  return u5(t, e);
                })
            : t;
        })(
          t.reduce(function e(t, n) {
            return aM(t)
              ? t.map(function (t) {
                  return e(t, n);
                })
              : t && r(t, n);
          }, e)
        )
      );
    }
    function u8(e) {
      return void 0 !== e.args
        ? e.args
        : e.field
        ? ai(e.field, e.variables)
        : null;
    }
    at.setStringify(sx);
    var u7 = function () {},
      u9 = function (e, t) {
        return t.fieldName;
      },
      ce = function (e, t, r) {
        return (0, r.mergeObjects)(e, t);
      },
      ct = function (e, t) {
        return t;
      },
      cr = (function () {
        function e(e) {
          (this.config = e),
            (this.typePolicies = Object.create(null)),
            (this.toBeAdded = Object.create(null)),
            (this.supertypeMap = new Map()),
            (this.fuzzySubtypes = new Map()),
            (this.rootIdsByTypename = Object.create(null)),
            (this.rootTypenamesById = Object.create(null)),
            (this.usingPossibleTypes = !1),
            (this.config = tv({ dataIdFromObject: uP }, e)),
            (this.cache = this.config.cache),
            this.setRootTypename("Query"),
            this.setRootTypename("Mutation"),
            this.setRootTypename("Subscription"),
            e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
            e.typePolicies && this.addTypePolicies(e.typePolicies);
        }
        return (
          (e.prototype.identify = function (e, t) {
            var r,
              n,
              i = this,
              o =
                (t &&
                  (t.typename ||
                    (null == (r = t.storeObject) ? void 0 : r.__typename))) ||
                e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            for (
              var a = (t && t.storeObject) || e,
                s = tv(tv({}, t), {
                  typename: o,
                  storeObject: a,
                  readField:
                    (t && t.readField) ||
                    function () {
                      var e = ci(arguments, a);
                      return i.readField(e, {
                        store: i.cache.data,
                        variables: e.variables,
                      });
                    },
                }),
                u = o && this.getTypePolicy(o),
                c = (u && u.keyFn) || this.config.dataIdFromObject;
              c;

            ) {
              var l = c(tv(tv({}, e), a), s);
              if (aM(l)) c = u2(l);
              else {
                n = l;
                break;
              }
            }
            return (
              (n = n ? String(n) : void 0), s.keyObject ? [n, s.keyObject] : [n]
            );
          }),
          (e.prototype.addTypePolicies = function (e) {
            var t = this;
            Object.keys(e).forEach(function (r) {
              var n = e[r],
                i = n.queryType,
                o = n.mutationType,
                a = n.subscriptionType,
                s = tm(n, ["queryType", "mutationType", "subscriptionType"]);
              i && t.setRootTypename("Query", r),
                o && t.setRootTypename("Mutation", r),
                a && t.setRootTypename("Subscription", r),
                uN.call(t.toBeAdded, r)
                  ? t.toBeAdded[r].push(s)
                  : (t.toBeAdded[r] = [s]);
            });
          }),
          (e.prototype.updateTypePolicy = function (e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;
            function a(e, t) {
              e.merge =
                "function" == typeof t
                  ? t
                  : !0 === t
                  ? ce
                  : !1 === t
                  ? ct
                  : e.merge;
            }
            a(n, t.merge),
              (n.keyFn =
                !1 === i
                  ? u7
                  : aM(i)
                  ? u2(i)
                  : "function" == typeof i
                  ? i
                  : n.keyFn),
              o &&
                Object.keys(o).forEach(function (t) {
                  var n = r.getFieldPolicy(e, t, !0),
                    i = o[t];
                  if ("function" == typeof i) n.read = i;
                  else {
                    var s = i.keyArgs,
                      u = i.read,
                      c = i.merge;
                    (n.keyFn =
                      !1 === s
                        ? u9
                        : aM(s)
                        ? u3(s)
                        : "function" == typeof s
                        ? s
                        : n.keyFn),
                      "function" == typeof u && (n.read = u),
                      a(n, c);
                  }
                  n.read && n.merge && (n.keyFn = n.keyFn || u9);
                });
          }),
          (e.prototype.setRootTypename = function (e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n &&
              (oC(!n || n === e, 3, e),
              n && delete this.rootIdsByTypename[n],
              (this.rootIdsByTypename[t] = r),
              (this.rootTypenamesById[r] = t));
          }),
          (e.prototype.addPossibleTypes = function (e) {
            var t = this;
            (this.usingPossibleTypes = !0),
              Object.keys(e).forEach(function (r) {
                t.getSupertypeSet(r, !0),
                  e[r].forEach(function (e) {
                    t.getSupertypeSet(e, !0).add(r);
                    var n = e.match(uq);
                    (n && n[0] === e) || t.fuzzySubtypes.set(e, new RegExp(e));
                  });
              });
          }),
          (e.prototype.getTypePolicy = function (e) {
            var t = this;
            if (!uN.call(this.typePolicies, e)) {
              var r = (this.typePolicies[e] = Object.create(null));
              r.fields = Object.create(null);
              var n = this.supertypeMap.get(e);
              !n &&
                this.fuzzySubtypes.size &&
                ((n = this.getSupertypeSet(e, !0)),
                this.fuzzySubtypes.forEach(function (r, i) {
                  if (r.test(e)) {
                    var o = t.supertypeMap.get(i);
                    o &&
                      o.forEach(function (e) {
                        return n.add(e);
                      });
                  }
                })),
                n &&
                  n.size &&
                  n.forEach(function (e) {
                    var n = t.getTypePolicy(e),
                      i = n.fields;
                    Object.assign(r, tm(n, ["fields"])),
                      Object.assign(r.fields, i);
                  });
            }
            var i = this.toBeAdded[e];
            return (
              i &&
                i.length &&
                i.splice(0).forEach(function (r) {
                  t.updateTypePolicy(e, r);
                }),
              this.typePolicies[e]
            );
          }),
          (e.prototype.getFieldPolicy = function (e, t, r) {
            if (e) {
              var n = this.getTypePolicy(e).fields;
              return n[t] || (r && (n[t] = Object.create(null)));
            }
          }),
          (e.prototype.getSupertypeSet = function (e, t) {
            var r = this.supertypeMap.get(e);
            return !r && t && this.supertypeMap.set(e, (r = new Set())), r;
          }),
          (e.prototype.fragmentMatches = function (e, t, r, n) {
            var i = this;
            if (!e.typeCondition) return !0;
            if (!t) return !1;
            var o = e.typeCondition.name.value;
            if (t === o) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(o))
              for (
                var a = this.getSupertypeSet(t, !0),
                  s = [a],
                  u = function (e) {
                    var t = i.getSupertypeSet(e, !1);
                    t && t.size && 0 > s.indexOf(t) && s.push(t);
                  },
                  c = !!(r && this.fuzzySubtypes.size),
                  l = !1,
                  d = 0;
                d < s.length;
                ++d
              ) {
                var f = s[d];
                if (f.has(o))
                  return (
                    a.has(o) ||
                      (l && !1 !== globalThis.__DEV__ && oC.warn(4, t, o),
                      a.add(o)),
                    !0
                  );
                f.forEach(u),
                  c &&
                    d === s.length - 1 &&
                    (function e(t, r, n) {
                      return (
                        !!o3(r) &&
                        (aM(r)
                          ? r.every(function (r) {
                              return e(t, r, n);
                            })
                          : t.selections.every(function (t) {
                              if (as(t) && ak(t, n)) {
                                var i = ao(t);
                                return (
                                  uN.call(r, i) &&
                                  (!t.selectionSet ||
                                    e(t.selectionSet, r[i], n))
                                );
                              }
                              return !0;
                            }))
                      );
                    })(e.selectionSet, r, n) &&
                    ((c = !1),
                    (l = !0),
                    this.fuzzySubtypes.forEach(function (e, r) {
                      var n = t.match(e);
                      n && n[0] === t && u(r);
                    }));
              }
            return !1;
          }),
          (e.prototype.hasKeyArgs = function (e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return !!(r && r.keyFn);
          }),
          (e.prototype.getStoreFieldName = function (e) {
            var t,
              r,
              n,
              i,
              o,
              a = e.typename,
              s = e.fieldName,
              u = this.getFieldPolicy(a, s, !1),
              c = u && u.keyFn;
            if (c && a)
              for (
                var l = {
                    typename: a,
                    fieldName: s,
                    field: e.field || null,
                    variables: e.variables,
                  },
                  d = u8(e);
                c;

              ) {
                var f = c(d, l);
                if (aM(f)) c = u3(f);
                else {
                  o = f || s;
                  break;
                }
              }
            return (void 0 === o &&
              (o = e.field
                ? ((t = e.field),
                  (r = e.variables),
                  (n = null),
                  t.directives &&
                    ((n = {}),
                    t.directives.forEach(function (e) {
                      (n[e.name.value] = {}),
                        e.arguments &&
                          e.arguments.forEach(function (t) {
                            var i = t.name,
                              o = t.value;
                            return o9(n[e.name.value], i, o, r);
                          });
                    })),
                  (i = null),
                  t.arguments &&
                    t.arguments.length &&
                    ((i = {}),
                    t.arguments.forEach(function (e) {
                      var t = e.name,
                        n = e.value;
                      return o9(i, t, n, r);
                    })),
                  at(t.name.value, i, n))
                : at(s, u8(e))),
            !1 === o)
              ? s
              : s === uL(o)
              ? o
              : s + ":" + o;
          }),
          (e.prototype.readField = function (e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n);
              }
              var i = this.getStoreFieldName(e),
                o = uL(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o, !1),
                u = s && s.read;
              if (u) {
                var c = cn(
                  this,
                  r,
                  e,
                  t,
                  t.store.getStorage(o7(r) ? r.__ref : r, i)
                );
                return up.withValue(this.cache, u, [a, c]);
              }
              return a;
            }
          }),
          (e.prototype.getReadFunction = function (e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return r && r.read;
          }),
          (e.prototype.getMergeFunction = function (e, t, r) {
            var n = this.getFieldPolicy(e, t, !1),
              i = n && n.merge;
            return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i;
          }),
          (e.prototype.runMergeFunction = function (e, t, r, n, i) {
            var o = r.field,
              a = r.typename,
              s = r.merge;
            return s === ce
              ? co(n.store)(e, t)
              : s === ct
              ? t
              : (n.overwrite && (e = void 0),
                s(
                  e,
                  t,
                  cn(
                    this,
                    void 0,
                    {
                      typename: a,
                      fieldName: o.name.value,
                      field: o,
                      variables: n.variables,
                    },
                    n,
                    i || Object.create(null)
                  )
                ));
          }),
          e
        );
      })();
    function cn(e, t, r, n, i) {
      var o = e.getStoreFieldName(r),
        a = uL(o),
        s = r.variables || n.variables,
        u = n.store,
        c = u.toReference,
        l = u.canRead;
      return {
        args: u8(r),
        field: r.field || null,
        fieldName: a,
        storeFieldName: o,
        variables: s,
        isReference: o7,
        toReference: c,
        storage: i,
        cache: e.cache,
        canRead: l,
        readField: function () {
          return e.readField(ci(arguments, t, s), n);
        },
        mergeObjects: co(n.store),
      };
    }
    function ci(e, t, r) {
      var n,
        i = e[0],
        o = e[1],
        a = e.length;
      return (
        "string" == typeof i
          ? (n = { fieldName: i, from: a > 1 ? o : t })
          : ((n = tv({}, i)), uN.call(n, "from") || (n.from = t)),
        !1 !== globalThis.__DEV__ &&
          void 0 === n.from &&
          !1 !== globalThis.__DEV__ &&
          oC.warn(5, ok(Array.from(e))),
        void 0 === n.variables && (n.variables = r),
        n
      );
    }
    function co(e) {
      return function (t, r) {
        if (aM(t) || aM(r)) throw oT(6);
        if (o3(t) && o3(r)) {
          var n = e.getFieldValue(t, "__typename"),
            i = e.getFieldValue(r, "__typename");
          if (n && i && n !== i) return r;
          if (o7(t) && uQ(r)) return e.merge(t.__ref, r), t;
          if (uQ(t) && o7(r)) return e.merge(t, r.__ref), r;
          if (uQ(t) && uQ(r)) return tv(tv({}, t), r);
        }
        return r;
      };
    }
    function ca(e, t, r) {
      var n = "".concat(t).concat(r),
        i = e.flavors.get(n);
      return (
        i ||
          e.flavors.set(
            n,
            (i =
              e.clientOnly === t && e.deferred === r
                ? e
                : tv(tv({}, e), { clientOnly: t, deferred: r }))
          ),
        i
      );
    }
    var cs = (function () {
        function e(e, t, r) {
          (this.cache = e), (this.reader = t), (this.fragments = r);
        }
        return (
          (e.prototype.writeToStore = function (e, t) {
            var r = this,
              n = t.query,
              i = t.result,
              o = t.dataId,
              a = t.variables,
              s = t.overwrite,
              u = ac(n),
              c = new aQ();
            a = tv(tv({}, ap(u)), a);
            var l = tv(
                tv(
                  {
                    store: e,
                    written: Object.create(null),
                    merge: function (e, t) {
                      return c.merge(e, t);
                    },
                    variables: a,
                    varString: sx(a),
                  },
                  uV(n, this.fragments)
                ),
                {
                  overwrite: !!s,
                  incomingById: new Map(),
                  clientOnly: !1,
                  deferred: !1,
                  flavors: new Map(),
                }
              ),
              d = this.processSelectionSet({
                result: i || Object.create(null),
                dataId: o,
                selectionSet: u.selectionSet,
                mergeTree: { map: new Map() },
                context: l,
              });
            if (!o7(d)) throw oT(9, i);
            return (
              l.incomingById.forEach(function (t, n) {
                var i = t.storeObject,
                  o = t.mergeTree,
                  a = t.fieldNodeSet,
                  s = o8(n);
                if (o && o.map.size) {
                  var u = r.applyMerges(o, s, i, l);
                  if (o7(u)) return;
                  i = u;
                }
                if (!1 !== globalThis.__DEV__ && !l.overwrite) {
                  var c = Object.create(null);
                  a.forEach(function (e) {
                    e.selectionSet && (c[e.name.value] = !0);
                  });
                  var d = function (e) {
                    var t = o && o.map.get(e);
                    return !!(t && t.info && t.info.merge);
                  };
                  Object.keys(i).forEach(function (e) {
                    !0 !== c[uL(e)] ||
                      d(e) ||
                      (function (e, t, r, n) {
                        var i = function (e) {
                            var t = n.getFieldValue(e, r);
                            return "object" == typeof t && t;
                          },
                          o = i(e);
                        if (o) {
                          var a = i(t);
                          if (
                            !(
                              !a ||
                              o7(o) ||
                              sc(o, a) ||
                              Object.keys(o).every(function (e) {
                                return void 0 !== n.getFieldValue(a, e);
                              })
                            )
                          ) {
                            var s =
                                n.getFieldValue(e, "__typename") ||
                                n.getFieldValue(t, "__typename"),
                              u = uL(r),
                              c = "".concat(s, ".").concat(u);
                            if (!cf.has(c)) {
                              cf.add(c);
                              var l = [];
                              aM(o) ||
                                aM(a) ||
                                [o, a].forEach(function (e) {
                                  var t = n.getFieldValue(e, "__typename");
                                  "string" != typeof t ||
                                    l.includes(t) ||
                                    l.push(t);
                                }),
                                !1 !== globalThis.__DEV__ &&
                                  oC.warn(
                                    12,
                                    u,
                                    s,
                                    l.length
                                      ? "either ensure all objects of type " +
                                          l.join(" and ") +
                                          " have an ID or a custom merge function, or "
                                      : "",
                                    c,
                                    o,
                                    a
                                  );
                            }
                          }
                        }
                      })(s, i, e, l.store);
                  });
                }
                e.merge(n, i);
              }),
              e.retain(d.__ref),
              d
            );
          }),
          (e.prototype.processSelectionSet = function (e) {
            var t = this,
              r = e.dataId,
              n = e.result,
              i = e.selectionSet,
              o = e.context,
              a = e.mergeTree,
              s = this.cache.policies,
              u = Object.create(null),
              c =
                (r && s.rootTypenamesById[r]) ||
                aa(n, i, o.fragmentMap) ||
                (r && o.store.get(r, "__typename"));
            "string" == typeof c && (u.__typename = c);
            var l = function () {
                var e = ci(arguments, u, o.variables);
                if (o7(e.from)) {
                  var t = o.incomingById.get(e.from.__ref);
                  if (t) {
                    var r = s.readField(
                      tv(tv({}, e), { from: t.storeObject }),
                      o
                    );
                    if (void 0 !== r) return r;
                  }
                }
                return s.readField(e, o);
              },
              d = new Set();
            this.flattenFields(i, n, o, c).forEach(function (e, r) {
              var i,
                o = n[ao(r)];
              if ((d.add(r), void 0 !== o)) {
                var f = s.getStoreFieldName({
                    typename: c,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables,
                  }),
                  h = cc(a, f),
                  p = t.processFieldValue(
                    o,
                    r,
                    r.selectionSet ? ca(e, !1, !1) : e,
                    h
                  ),
                  v = void 0;
                r.selectionSet && (o7(p) || uQ(p)) && (v = l("__typename", p));
                var m = s.getMergeFunction(c, r.name.value, v);
                m ? (h.info = { field: r, typename: c, merge: m }) : cd(a, f),
                  (u = e.merge(u, (((i = {})[f] = p), i)));
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || se.added(r) || s.getReadFunction(c, r.name.value) || !1 === globalThis.__DEV__ || oC.error(10, ao(r), n);
            });
            try {
              var f = s.identify(n, {
                  typename: c,
                  selectionSet: i,
                  fragmentMap: o.fragmentMap,
                  storeObject: u,
                  readField: l,
                }),
                h = f[0],
                p = f[1];
              (r = r || h), p && (u = o.merge(u, p));
            } catch (e) {
              if (!r) throw e;
            }
            if ("string" == typeof r) {
              var v = o8(r),
                m = o.written[r] || (o.written[r] = []);
              if (
                m.indexOf(i) >= 0 ||
                (m.push(i), this.reader && this.reader.isFresh(n, v, i, o))
              )
                return v;
              var y = o.incomingById.get(r);
              return (
                y
                  ? ((y.storeObject = o.merge(y.storeObject, u)),
                    (y.mergeTree = (function e(t, r) {
                      if (t === r || !r || cl(r)) return t;
                      if (!t || cl(t)) return r;
                      var n =
                          t.info && r.info
                            ? tv(tv({}, t.info), r.info)
                            : t.info || r.info,
                        i = t.map.size && r.map.size,
                        o = {
                          info: n,
                          map: i ? new Map() : t.map.size ? t.map : r.map,
                        };
                      if (i) {
                        var a = new Set(r.map.keys());
                        t.map.forEach(function (t, n) {
                          o.map.set(n, e(t, r.map.get(n))), a.delete(n);
                        }),
                          a.forEach(function (n) {
                            o.map.set(n, e(r.map.get(n), t.map.get(n)));
                          });
                      }
                      return o;
                    })(y.mergeTree, a)),
                    d.forEach(function (e) {
                      return y.fieldNodeSet.add(e);
                    }))
                  : o.incomingById.set(r, {
                      storeObject: u,
                      mergeTree: cl(a) ? void 0 : a,
                      fieldNodeSet: d,
                    }),
                v
              );
            }
            return u;
          }),
          (e.prototype.processFieldValue = function (e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e
              ? aM(e)
                ? e.map(function (e, o) {
                    var a = i.processFieldValue(e, t, r, cc(n, o));
                    return cd(n, o), a;
                  })
                : this.processSelectionSet({
                    result: e,
                    selectionSet: t.selectionSet,
                    context: r,
                    mergeTree: n,
                  })
              : !1 !== globalThis.__DEV__
              ? sN(e)
              : e;
          }),
          (e.prototype.flattenFields = function (e, t, r, n) {
            void 0 === n && (n = aa(t, e, r.fragmentMap));
            var i = new Map(),
              o = this.cache.policies,
              a = new sg(!1);
            return (
              !(function e(s, u) {
                var c = a.lookup(s, u.clientOnly, u.deferred);
                c.visited ||
                  ((c.visited = !0),
                  s.selections.forEach(function (a) {
                    if (ak(a, r.variables)) {
                      var s = u.clientOnly,
                        c = u.deferred;
                      if (
                        (!(s && c) &&
                          aP(a.directives) &&
                          a.directives.forEach(function (e) {
                            var t = e.name.value;
                            if (("client" === t && (s = !0), "defer" === t)) {
                              var n = ai(e, r.variables);
                              (n && !1 === n.if) || (c = !0);
                            }
                          }),
                        as(a))
                      ) {
                        var l = i.get(a);
                        l && ((s = s && l.clientOnly), (c = c && l.deferred)),
                          i.set(a, ca(r, s, c));
                      } else {
                        var d = o5(a, r.lookupFragment);
                        if (!d && a.kind === S.FRAGMENT_SPREAD)
                          throw oT(11, a.name.value);
                        d &&
                          o.fragmentMatches(d, n, t, r.variables) &&
                          e(d.selectionSet, ca(r, s, c));
                      }
                    }
                  }));
              })(e, r),
              i
            );
          }),
          (e.prototype.applyMerges = function (e, t, r, n, i) {
            var o = this;
            if (e.map.size && !o7(r)) {
              var a,
                s,
                u = !aM(r) && (o7(t) || uQ(t)) ? t : void 0,
                c = r;
              u && !i && (i = [o7(u) ? u.__ref : u]);
              var l = function (e, t) {
                return aM(e)
                  ? "number" == typeof t
                    ? e[t]
                    : void 0
                  : n.store.getFieldValue(e, String(t));
              };
              e.map.forEach(function (e, t) {
                var r = l(u, t),
                  a = l(c, t);
                if (void 0 !== a) {
                  i && i.push(t);
                  var d = o.applyMerges(e, r, a, n, i);
                  d !== a && (s = s || new Map()).set(t, d),
                    i && oC(i.pop() === t);
                }
              }),
                s &&
                  ((r = aM(c) ? c.slice(0) : tv({}, c)),
                  s.forEach(function (e, t) {
                    r[t] = e;
                  }));
            }
            return e.info
              ? this.cache.policies.runMergeFunction(
                  t,
                  r,
                  e.info,
                  n,
                  i && (a = n.store).getStorage.apply(a, i)
                )
              : r;
          }),
          e
        );
      })(),
      cu = [];
    function cc(e, t) {
      var r = e.map;
      return r.has(t) || r.set(t, cu.pop() || { map: new Map() }), r.get(t);
    }
    function cl(e) {
      return !e || !(e.info || e.map.size);
    }
    function cd(e, t) {
      var r = e.map,
        n = r.get(t);
      n && cl(n) && (cu.push(n), r.delete(t));
    }
    var cf = new Set(),
      ch = (function (e) {
        function t(t) {
          void 0 === t && (t = {});
          var r = e.call(this) || this;
          return (
            (r.watches = new Set()),
            (r.addTypenameTransform = new sI(se)),
            (r.assumeImmutableResults = !0),
            (r.makeVar = ug),
            (r.txCount = 0),
            (r.config = sM(uA, t)),
            (r.addTypename = !!r.config.addTypename),
            (r.policies = new cr({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies,
            })),
            r.init(),
            r
          );
        }
        return (
          tp(t, e),
          (t.prototype.init = function () {
            var e = (this.data = new uU.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching,
            }));
            (this.optimisticData = e.stump), this.resetResultCache();
          }),
          (t.prototype.resetResultCache = function (e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            (this.storeWriter = new cs(
              this,
              (this.storeReader = new uZ({
                cache: this,
                addTypename: this.addTypename,
                resultCacheMaxSize: this.config.resultCacheMaxSize,
                canonizeResults: uF(this.config),
                canon: e ? void 0 : r && r.canon,
                fragments: n,
              })),
              n
            )),
              (this.maybeBroadcastWatch = uh(
                function (e, r) {
                  return t.broadcastWatch(e, r);
                },
                {
                  max: this.config.resultCacheMaxSize,
                  makeCacheKey: function (e) {
                    var r = e.optimistic ? t.optimisticData : t.data;
                    if (uJ(r)) {
                      var n = e.optimistic,
                        i = e.id,
                        o = e.variables;
                      return r.makeCacheKey(
                        e.query,
                        e.callback,
                        sx({ optimistic: n, id: i, variables: o })
                      );
                    }
                  },
                }
              )),
              new Set([this.data.group, this.optimisticData.group]).forEach(
                function (e) {
                  return e.resetCaching();
                }
              );
          }),
          (t.prototype.restore = function (e) {
            return this.init(), e && this.data.replace(e), this;
          }),
          (t.prototype.extract = function (e) {
            return (
              void 0 === e && (e = !1),
              (e ? this.optimisticData : this.data).extract()
            );
          }),
          (t.prototype.read = function (e) {
            var t = e.returnPartialData;
            try {
              return (
                this.storeReader.diffQueryAgainstStore(
                  tv(tv({}, e), {
                    store: e.optimistic ? this.optimisticData : this.data,
                    config: this.config,
                    returnPartialData: void 0 !== t && t,
                  })
                ).result || null
              );
            } catch (e) {
              if (e instanceof uD) return null;
              throw e;
            }
          }),
          (t.prototype.write = function (e) {
            try {
              return (
                ++this.txCount, this.storeWriter.writeToStore(this.data, e)
              );
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches();
            }
          }),
          (t.prototype.modify = function (e) {
            if (uN.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches();
            }
          }),
          (t.prototype.diff = function (e) {
            return this.storeReader.diffQueryAgainstStore(
              tv(tv({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                rootId: e.id || "ROOT_QUERY",
                config: this.config,
              })
            );
          }),
          (t.prototype.watch = function (e) {
            var t,
              r = this;
            return (
              this.watches.size ||
                ((t = this),
                um(t).vars.forEach(function (e) {
                  return e.attachCache(t);
                })),
              this.watches.add(e),
              e.immediate && this.maybeBroadcastWatch(e),
              function () {
                r.watches.delete(e) && !r.watches.size && uy(r),
                  r.maybeBroadcastWatch.forget(e);
              }
            );
          }),
          (t.prototype.gc = function (e) {
            sx.reset();
            var t = this.optimisticData.gc();
            return (
              e &&
                !this.txCount &&
                (e.resetResultCache
                  ? this.resetResultCache(e.resetResultIdentities)
                  : e.resetResultIdentities && this.storeReader.resetCanon()),
              t
            );
          }),
          (t.prototype.retain = function (e, t) {
            return (t ? this.optimisticData : this.data).retain(e);
          }),
          (t.prototype.release = function (e, t) {
            return (t ? this.optimisticData : this.data).release(e);
          }),
          (t.prototype.identify = function (e) {
            if (o7(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0];
            } catch (e) {
              !1 !== globalThis.__DEV__ && oC.warn(e);
            }
          }),
          (t.prototype.evict = function (e) {
            if (!e.id) {
              if (uN.call(e, "id")) return !1;
              e = tv(tv({}, e), { id: "ROOT_QUERY" });
            }
            try {
              return ++this.txCount, this.optimisticData.evict(e, this.data);
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches();
            }
          }),
          (t.prototype.reset = function (e) {
            var t = this;
            return (
              this.init(),
              sx.reset(),
              e && e.discardWatches
                ? (this.watches.forEach(function (e) {
                    return t.maybeBroadcastWatch.forget(e);
                  }),
                  this.watches.clear(),
                  uy(this))
                : this.broadcastWatches(),
              Promise.resolve()
            );
          }),
          (t.prototype.removeOptimistic = function (e) {
            var t = this.optimisticData.removeLayer(e);
            t !== this.optimisticData &&
              ((this.optimisticData = t), this.broadcastWatches());
          }),
          (t.prototype.batch = function (e) {
            var t,
              r = this,
              n = e.update,
              i = e.optimistic,
              o = void 0 === i || i,
              a = e.removeOptimistic,
              s = e.onWatchUpdated,
              u = function (e) {
                var i = r.data,
                  o = r.optimisticData;
                ++r.txCount, e && (r.data = r.optimisticData = e);
                try {
                  return (t = n(r));
                } finally {
                  --r.txCount, (r.data = i), (r.optimisticData = o);
                }
              },
              c = new Set();
            return (
              s &&
                !this.txCount &&
                this.broadcastWatches(
                  tv(tv({}, e), {
                    onWatchUpdated: function (e) {
                      return c.add(e), !1;
                    },
                  })
                ),
              "string" == typeof o
                ? (this.optimisticData = this.optimisticData.addLayer(o, u))
                : !1 === o
                ? u(this.data)
                : u(),
              "string" == typeof a &&
                (this.optimisticData = this.optimisticData.removeLayer(a)),
              s && c.size
                ? (this.broadcastWatches(
                    tv(tv({}, e), {
                      onWatchUpdated: function (e, t) {
                        var r = s.call(this, e, t);
                        return !1 !== r && c.delete(e), r;
                      },
                    })
                  ),
                  c.size &&
                    c.forEach(function (e) {
                      return r.maybeBroadcastWatch.dirty(e);
                    }))
                : this.broadcastWatches(e),
              t
            );
          }),
          (t.prototype.performTransaction = function (e, t) {
            return this.batch({ update: e, optimistic: t || null !== t });
          }),
          (t.prototype.transformDocument = function (e) {
            return this.addTypenameToDocument(this.addFragmentsToDocument(e));
          }),
          (t.prototype.broadcastWatches = function (e) {
            var t = this;
            this.txCount ||
              this.watches.forEach(function (r) {
                return t.maybeBroadcastWatch(r, e);
              });
          }),
          (t.prototype.addFragmentsToDocument = function (e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e;
          }),
          (t.prototype.addTypenameToDocument = function (e) {
            return this.addTypename
              ? this.addTypenameTransform.transformDocument(e)
              : e;
          }),
          (t.prototype.broadcastWatch = function (e, t) {
            var r = e.lastDiff,
              n = this.diff(e);
            (!t ||
              (e.optimistic &&
                "string" == typeof t.optimistic &&
                (n.fromOptimisticTransaction = !0),
              !t.onWatchUpdated ||
                !1 !== t.onWatchUpdated.call(this, e, n, r))) &&
              ((r && sc(r.result, n.result)) ||
                e.callback((e.lastDiff = n), r));
          }),
          t
        );
      })(uI),
      cp = iY;
    let cv = new Q(),
      cm = new uR({ link: new si({ uri: "/api/subgraph" }), cache: new ch() }),
      cy = "cmiu7qzua010gl50cc41ouycd",
      cg = !!cy,
      cb = ({ children: e }) =>
        cg
          ? (0, T.jsx)(cp.I, {
              appId: cy,
              config: {
                loginMethods: ["wallet"],
                supportedChains: [oc.xLayer, ol, os.base, ou.robinhood],
                appearance: {
                  theme: "dark",
                  accentColor: "#ccff00",
                  logo: "/logo.png",
                },
                embeddedWallets: { ethereum: { createOnLogin: "off" } },
              },
              children: (0, T.jsx)(V.QueryClientProvider, {
                client: cv,
                children: (0, T.jsx)(i1, {
                  config: od,
                  children: (0, T.jsx)(nc.PrivyAuthBridge, { children: e }),
                }),
              }),
            })
          : (0, T.jsx)(nc.AuthFallbackProvider, {
              children: (0, T.jsx)(V.QueryClientProvider, {
                client: cv,
                children: (0, T.jsx)(ij.WagmiProvider, {
                  config: od,
                  children: e,
                }),
              }),
            });
    e.s(
      [
        "Providers",
        0,
        ({ children: e }) => {
          let t = (0, ib.usePathname)();
          return (0, T.jsxs)(cb, {
            children: [
              (0, T.jsx)(iC, {
                position: "bottom-right",
                theme: "dark",
                closeButton: !0,
              }),
              (0, T.jsx)(oA, {
                client: cm,
                children: (0, T.jsxs)("div", {
                  className: (0, nn.cn)({
                    "pt-26": "/" !== t && "/genesis" !== t,
                    "pb-20": "/" !== t,
                  }),
                  children: [
                    (0, T.jsx)(ig, {}),
                    (0, T.jsx)("div", { children: e }),
                    (0, T.jsx)(iC, {}),
                    (0, T.jsx)(iD, {}),
                  ],
                }),
              }),
            ],
          });
        },
        "apolloClient",
        0,
        cm,
        "queryClient",
        0,
        cv,
      ],
      45744
    );
  },
]);
