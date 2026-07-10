(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  70488,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(510579);
    function i(e) {
      let {
          batch: i,
          chain: n,
          ccipRead: a,
          dataSuffix: s,
          key: o = "base",
          name: c = "Base Client",
          type: l = "base",
        } = e,
        u =
          e.experimental_blockTag ??
          ("number" == typeof n?.experimental_preconfirmationTime
            ? "pending"
            : void 0),
        d = Math.min(
          Math.max(Math.floor((n?.blockTime ?? 12e3) / 2), 500),
          4e3
        ),
        f = e.pollingInterval ?? d,
        p = e.cacheTime ?? f,
        m = e.account ? (0, t.parseAccount)(e.account) : void 0,
        {
          config: h,
          request: g,
          value: b,
        } = e.transport({ account: m, chain: n, pollingInterval: f }),
        y = {
          account: m,
          batch: i,
          cacheTime: p,
          ccipRead: a,
          chain: n,
          dataSuffix: s,
          key: o,
          name: c,
          pollingInterval: f,
          request: g,
          transport: { ...h, ...b },
          type: l,
          uid: (0, r.uid)(),
          ...(u ? { experimental_blockTag: u } : {}),
        };
      return Object.assign(y, {
        extend: (function e(t) {
          return (r) => {
            let i = r(t);
            for (let e in y) delete i[e];
            let n = { ...t, ...i };
            return Object.assign(n, { extend: e(n) });
          };
        })(y),
      });
    }
    function n() {
      return null;
    }
    e.s(["createClient", () => i, "rpcSchema", () => n]);
  },
  22733,
  594172,
  54750,
  980867,
  (e) => {
    "use strict";
    var t = e.i(86972),
      r = e.i(617714);
    function i(e) {
      if (!(e instanceof t.BaseError)) return !1;
      let i = e.walk((e) => e instanceof r.ContractFunctionRevertedError);
      return (
        i instanceof r.ContractFunctionRevertedError &&
        (i.data?.errorName === "HttpError" ||
          i.data?.errorName === "ResolverError" ||
          i.data?.errorName === "ResolverNotContract" ||
          i.data?.errorName === "ResolverNotFound" ||
          i.data?.errorName === "ReverseAddressMismatch" ||
          i.data?.errorName === "UnsupportedResolverProfile")
      );
    }
    e.s(["isNullUniversalResolverError", () => i], 22733);
    var n = e.i(695670),
      a = e.i(610467),
      s = e.i(964564),
      o = e.i(247640),
      c = e.i(620136);
    function l(e) {
      if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
        return null;
      let t = `0x${e.slice(1, 65)}`;
      return (0, c.isHex)(t) ? t : null;
    }
    function u(e) {
      let t = new Uint8Array(32).fill(0);
      if (!e) return (0, s.bytesToHex)(t);
      let r = e.split(".");
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let i = l(r[e]),
          s = i
            ? (0, a.toBytes)(i)
            : (0, o.keccak256)((0, a.stringToBytes)(r[e]), "bytes");
        t = (0, o.keccak256)((0, n.concat)([t, s]), "bytes");
      }
      return (0, s.bytesToHex)(t);
    }
    function d(e) {
      let t = new Uint8Array(32).fill(0);
      return e
        ? l(e) || (0, o.keccak256)((0, a.stringToBytes)(e))
        : (0, s.bytesToHex)(t);
    }
    function f(e) {
      let t = e.replace(/^\.|\.$/gm, "");
      if (0 === t.length) return new Uint8Array(1);
      let r = new Uint8Array((0, a.stringToBytes)(t).byteLength + 2),
        i = 0,
        n = t.split(".");
      for (let e = 0; e < n.length; e++) {
        var s;
        let t = (0, a.stringToBytes)(n[e]);
        t.byteLength > 255 &&
          (t = (0, a.stringToBytes)(((s = d(n[e])), `[${s.slice(2)}]`))),
          (r[i] = t.length),
          r.set(t, i + 1),
          (i += t.length + 1);
      }
      return r.byteLength !== i + 1 ? r.slice(0, i + 1) : r;
    }
    e.s(["namehash", () => u], 594172),
      e.s(["labelhash", () => d], 54750),
      e.s(["packetToBytes", () => f], 980867);
  },
  114245,
  (e) => {
    "use strict";
    function t(e, t, r) {
      let i = e[t.name];
      if ("function" == typeof i) return i;
      let n = e[r];
      return "function" == typeof n ? n : (r) => t(e, r);
    }
    e.s(["getAction", () => t]);
  },
  453462,
  (e) => {
    "use strict";
    var t = e.i(821434),
      r = e.i(86972),
      i = e.i(617714),
      n = e.i(822843),
      a = e.i(458122);
    function s(
      e,
      { abi: s, address: o, args: c, docsPath: l, functionName: u, sender: d }
    ) {
      let f =
          e instanceof i.RawContractError
            ? e
            : e instanceof r.BaseError
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
        { code: p, data: m, details: h, message: g, shortMessage: b } = f,
        y =
          e instanceof t.AbiDecodingZeroDataError
            ? new i.ContractFunctionZeroDataError({ functionName: u, cause: e })
            : ([3, a.InternalRpcError.code].includes(p) &&
                (m || h || g || b)) ||
              (p === a.InvalidInputRpcError.code &&
                "execution reverted" === h &&
                m)
            ? new i.ContractFunctionRevertedError({
                abi: s,
                data: "object" == typeof m ? m.data : m,
                functionName: u,
                message: f instanceof n.RpcRequestError ? h : b ?? g,
                cause: e,
              })
            : e;
      return new i.ContractFunctionExecutionError(y, {
        abi: s,
        args: c,
        contractAddress: o,
        docsPath: l,
        functionName: u,
        sender: d,
      });
    }
    e.s(["getContractError", () => s]);
  },
  299408,
  (e) => {
    "use strict";
    var t = e.i(234875),
      r = e.i(734451),
      i = e.i(453462),
      n = e.i(114245),
      a = e.i(557051);
    async function s(e, s) {
      let { abi: o, address: c, args: l, functionName: u, ...d } = s,
        f = (0, r.encodeFunctionData)({ abi: o, args: l, functionName: u });
      try {
        let { data: r } = await (0, n.getAction)(
          e,
          a.call,
          "call"
        )({ ...d, data: f, to: c });
        return (0, t.decodeFunctionResult)({
          abi: o,
          args: l,
          functionName: u,
          data: r || "0x",
        });
      } catch (e) {
        throw (0, i.getContractError)(e, {
          abi: o,
          address: c,
          args: l,
          docsPath: "/docs/contract/readContract",
          functionName: u,
        });
      }
    }
    e.s(["readContract", () => s]);
  },
  578218,
  571411,
  904949,
  903087,
  753186,
  490933,
  444294,
  (e) => {
    "use strict";
    var t = e.i(470523),
      r = e.i(234875),
      i = e.i(734451),
      n = e.i(521991),
      a = e.i(376927),
      s = e.i(964564),
      o = e.i(22733),
      c = e.i(867208),
      l = e.i(594172),
      u = e.i(980867),
      d = e.i(114245),
      f = e.i(299408);
    async function p(e, p) {
      let {
          blockNumber: m,
          blockTag: h,
          coinType: g,
          name: b,
          gatewayUrls: y,
          strict: v,
        } = p,
        { chain: w } = e,
        x = (() => {
          if (p.universalResolverAddress) return p.universalResolverAddress;
          if (!w)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: m,
            chain: w,
            contract: "ensUniversalResolver",
          });
        })(),
        E = w?.ensTlds;
      if (E && !E.some((e) => b.endsWith(e))) return null;
      let B =
        null != g ? [(0, l.namehash)(b), BigInt(g)] : [(0, l.namehash)(b)];
      try {
        let n = (0, i.encodeFunctionData)({
            abi: t.addressResolverAbi,
            functionName: "addr",
            args: B,
          }),
          o = {
            address: x,
            abi: t.universalResolverResolveAbi,
            functionName: "resolveWithGateways",
            args: [
              (0, s.toHex)((0, u.packetToBytes)(b)),
              n,
              y ?? [c.localBatchGatewayUrl],
            ],
            blockNumber: m,
            blockTag: h,
          },
          l = (0, d.getAction)(e, f.readContract, "readContract"),
          p = await l(o);
        if ("0x" === p[0]) return null;
        let g = (0, r.decodeFunctionResult)({
          abi: t.addressResolverAbi,
          args: B,
          functionName: "addr",
          data: p[0],
        });
        if ("0x" === g || "0x00" === (0, a.trim)(g)) return null;
        return g;
      } catch (e) {
        if (v) throw e;
        if ((0, o.isNullUniversalResolverError)(e)) return null;
        throw e;
      }
    }
    e.s(["getEnsAddress", () => p], 578218);
    var m = e.i(86972);
    class h extends m.BaseError {
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
    class g extends m.BaseError {
      constructor({ reason: e }) {
        super(`ENS NFT avatar URI is invalid. ${e}`, {
          name: "EnsAvatarInvalidNftUriError",
        });
      }
    }
    class b extends m.BaseError {
      constructor({ uri: e }) {
        super(
          `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
          { name: "EnsAvatarUriResolutionError" }
        );
      }
    }
    class y extends m.BaseError {
      constructor({ namespace: e }) {
        super(
          `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
          { name: "EnsAvatarUnsupportedNamespaceError" }
        );
      }
    }
    class v extends m.BaseError {
      constructor({ chainId: e }) {
        super(
          `Invalid ENSIP-11 chainId: ${e}. Must be between 0 and 0x7fffffff, or 1.`,
          { name: "EnsInvalidChainIdError" }
        );
      }
    }
    e.s(
      [
        "EnsAvatarInvalidMetadataError",
        () => h,
        "EnsAvatarInvalidNftUriError",
        () => g,
        "EnsAvatarUnsupportedNamespaceError",
        () => y,
        "EnsAvatarUriResolutionError",
        () => b,
        "EnsInvalidChainIdError",
        () => v,
      ],
      571411
    );
    let w =
        /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
      x =
        /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
      E = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
      B = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
    async function P(e) {
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
    function A(e, t) {
      return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
    }
    function T({ uri: e, gatewayUrls: t }) {
      let r = E.test(e);
      if (r) return { uri: e, isOnChain: !0, isEncoded: r };
      let i = A(t?.ipfs, "https://ipfs.io"),
        n = A(t?.arweave, "https://arweave.net"),
        a = e.match(w),
        {
          protocol: s,
          subpath: o,
          target: c,
          subtarget: l = "",
        } = a?.groups || {},
        u = "ipns:/" === s || "ipns/" === o,
        d = "ipfs:/" === s || "ipfs/" === o || x.test(e);
      if (e.startsWith("http") && !u && !d) {
        let r = e;
        return (
          t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
          { uri: r, isOnChain: !1, isEncoded: !1 }
        );
      }
      if ((u || d) && c)
        return {
          uri: `${i}/${u ? "ipns" : "ipfs"}/${c}${l}`,
          isOnChain: !1,
          isEncoded: !1,
        };
      if ("ar:/" === s && c)
        return { uri: `${n}/${c}${l || ""}`, isOnChain: !1, isEncoded: !1 };
      let f = e.replace(B, "");
      if (
        (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
        f.startsWith("data:") || f.startsWith("{"))
      )
        return { uri: f, isOnChain: !0, isEncoded: !1 };
      throw new b({ uri: e });
    }
    function k(e) {
      if (
        "object" != typeof e ||
        (!("image" in e) && !("image_url" in e) && !("image_data" in e))
      )
        throw new h({ data: e });
      return e.image || e.image_url || e.image_data;
    }
    async function I({ gatewayUrls: e, uri: t }) {
      try {
        let r = await fetch(t).then((e) => e.json());
        return await N({ gatewayUrls: e, uri: k(r) });
      } catch {
        throw new b({ uri: t });
      }
    }
    async function N({ gatewayUrls: e, uri: t }) {
      let { uri: r, isOnChain: i } = T({ uri: t, gatewayUrls: e });
      if (i || (await P(r))) return r;
      throw new b({ uri: t });
    }
    async function F(e, { nft: t }) {
      if ("erc721" === t.namespace)
        return (0, f.readContract)(e, {
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
        return (0, f.readContract)(e, {
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
      throw new y({ namespace: t.namespace });
    }
    async function R(e, { gatewayUrls: t, record: r }) {
      return /eip155:/i.test(r)
        ? C(e, { gatewayUrls: t, record: r })
        : N({ uri: r, gatewayUrls: t });
    }
    async function C(e, { gatewayUrls: t, record: r }) {
      let i = (function (e) {
          let t = e;
          t.startsWith("did:nft:") &&
            (t = t.replace("did:nft:", "").replace(/_/g, "/"));
          let [r, i, n] = t.split("/"),
            [a, s] = r.split(":"),
            [o, c] = i.split(":");
          if (!a || "eip155" !== a.toLowerCase())
            throw new g({ reason: "Only EIP-155 supported" });
          if (!s) throw new g({ reason: "Chain ID not found" });
          if (!c) throw new g({ reason: "Contract address not found" });
          if (!n) throw new g({ reason: "Token ID not found" });
          if (!o) throw new g({ reason: "ERC namespace not found" });
          return {
            chainID: Number.parseInt(s, 10),
            namespace: o.toLowerCase(),
            contractAddress: c,
            tokenID: n,
          };
        })(r),
        {
          uri: n,
          isOnChain: a,
          isEncoded: s,
        } = T({ uri: await F(e, { nft: i }), gatewayUrls: t });
      if (
        a &&
        (n.includes("data:application/json;base64,") || n.startsWith("{"))
      )
        return N({
          uri: k(
            JSON.parse(
              s ? atob(n.replace("data:application/json;base64,", "")) : n
            )
          ),
          gatewayUrls: t,
        });
      let o = i.tokenID;
      return (
        "erc1155" === i.namespace &&
          (o = o.replace("0x", "").padStart(64, "0")),
        I({ gatewayUrls: t, uri: n.replace(/(?:0x)?{id}/, o) })
      );
    }
    async function S(e, a) {
      let {
          blockNumber: p,
          blockTag: m,
          key: h,
          name: g,
          gatewayUrls: b,
          strict: y,
        } = a,
        { chain: v } = e,
        w = (() => {
          if (a.universalResolverAddress) return a.universalResolverAddress;
          if (!v)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: p,
            chain: v,
            contract: "ensUniversalResolver",
          });
        })(),
        x = v?.ensTlds;
      if (x && !x.some((e) => g.endsWith(e))) return null;
      try {
        let n = {
            address: w,
            abi: t.universalResolverResolveAbi,
            args: [
              (0, s.toHex)((0, u.packetToBytes)(g)),
              (0, i.encodeFunctionData)({
                abi: t.textResolverAbi,
                functionName: "text",
                args: [(0, l.namehash)(g), h],
              }),
              b ?? [c.localBatchGatewayUrl],
            ],
            functionName: "resolveWithGateways",
            blockNumber: p,
            blockTag: m,
          },
          a = (0, d.getAction)(e, f.readContract, "readContract"),
          o = await a(n);
        if ("0x" === o[0]) return null;
        let y = (0, r.decodeFunctionResult)({
          abi: t.textResolverAbi,
          functionName: "text",
          data: o[0],
        });
        return "" === y ? null : y;
      } catch (e) {
        if (y) throw e;
        if ((0, o.isNullUniversalResolverError)(e)) return null;
        throw e;
      }
    }
    async function z(
      e,
      {
        blockNumber: t,
        blockTag: r,
        assetGatewayUrls: i,
        name: n,
        gatewayUrls: a,
        strict: s,
        universalResolverAddress: o,
      }
    ) {
      let c = await (0, d.getAction)(
        e,
        S,
        "getEnsText"
      )({
        blockNumber: t,
        blockTag: r,
        key: "avatar",
        name: n,
        universalResolverAddress: o,
        gatewayUrls: a,
        strict: s,
      });
      if (!c) return null;
      try {
        return await R(e, { record: c, gatewayUrls: i });
      } catch {
        return null;
      }
    }
    async function G(e, r) {
      let {
          address: i,
          blockNumber: a,
          blockTag: s,
          coinType: l = 60n,
          gatewayUrls: u,
          strict: p,
        } = r,
        { chain: m } = e,
        h = (() => {
          if (r.universalResolverAddress) return r.universalResolverAddress;
          if (!m)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: a,
            chain: m,
            contract: "ensUniversalResolver",
          });
        })();
      try {
        let r = {
            address: h,
            abi: t.universalResolverReverseAbi,
            args: [i, l, u ?? [c.localBatchGatewayUrl]],
            functionName: "reverseWithGateways",
            blockNumber: a,
            blockTag: s,
          },
          n = (0, d.getAction)(e, f.readContract, "readContract"),
          [o] = await n(r);
        return o || null;
      } catch (e) {
        if (p) throw e;
        if ((0, o.isNullUniversalResolverError)(e)) return null;
        throw e;
      }
    }
    async function H(e, t) {
      let { blockNumber: r, blockTag: i, name: a } = t,
        { chain: o } = e,
        c = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!o)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, n.getChainContractAddress)({
            blockNumber: r,
            chain: o,
            contract: "ensUniversalResolver",
          });
        })(),
        l = o?.ensTlds;
      if (l && !l.some((e) => a.endsWith(e)))
        throw Error(
          `${a} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
            o.name
          }" (id: ${o.id}).`
        );
      let [p] = await (0, d.getAction)(
        e,
        f.readContract,
        "readContract"
      )({
        address: c,
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
        args: [(0, s.toHex)((0, u.packetToBytes)(a))],
        blockNumber: r,
        blockTag: i,
      });
      return p;
    }
    e.s(["getEnsText", () => S], 904949),
      e.s(["getEnsAvatar", () => z], 903087),
      e.s(["getEnsName", () => G], 753186),
      e.s(["getEnsResolver", () => H], 490933);
    var L = e.i(140315),
      $ = e.i(398382),
      U = e.i(971282),
      D = e.i(979593),
      M = e.i(70333);
    async function q(e, t) {
      let {
          account: r = e.account,
          blockNumber: i,
          blockTag: n = "latest",
          blobs: a,
          data: o,
          gas: c,
          gasPrice: l,
          maxFeePerBlobGas: u,
          maxFeePerGas: d,
          maxPriorityFeePerGas: f,
          to: p,
          value: m,
          ...h
        } = t,
        g = r ? (0, L.parseAccount)(r) : void 0;
      try {
        (0, M.assertRequest)(t);
        let r = "bigint" == typeof i ? (0, s.numberToHex)(i) : void 0,
          b = e.chain?.formatters?.transactionRequest?.format,
          y = (b || D.formatTransactionRequest)(
            {
              ...(0, U.extract)(h, { format: b }),
              account: g,
              blobs: a,
              data: o,
              gas: c,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: p,
              value: m,
            },
            "createAccessList"
          ),
          v = await e.request({
            method: "eth_createAccessList",
            params: [y, r || n],
          });
        return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
      } catch (r) {
        throw (0, $.getCallError)(r, { ...t, account: g, chain: e.chain });
      }
    }
    e.s(["createAccessList", () => q], 444294);
  },
  26334,
  (e) => {
    "use strict";
    function t(e, { method: t }) {
      let r = {};
      return (
        "fallback" === e.transport.type &&
          e.transport.onResponse?.(
            ({ method: e, response: i, status: n, transport: a }) => {
              "success" === n && t === e && (r[i] = a.request);
            }
          ),
        (t) => r[t] || e.request
      );
    }
    e.s(["createFilterRequestScope", () => t]);
  },
  914341,
  (e) => {
    "use strict";
    var t = e.i(26334);
    async function r(e) {
      let r = (0, t.createFilterRequestScope)(e, {
          method: "eth_newBlockFilter",
        }),
        i = await e.request({ method: "eth_newBlockFilter" });
      return { id: i, request: r(i), type: "block" };
    }
    e.s(["createBlockFilter", () => r]);
  },
  425234,
  975944,
  (e) => {
    "use strict";
    var t = e.i(821434),
      r = e.i(86972);
    class i extends r.BaseError {
      constructor(e) {
        super(`Filter type "${e}" is not supported.`, {
          name: "FilterTypeNotSupportedError",
        });
      }
    }
    e.s(["FilterTypeNotSupportedError", () => i], 975944);
    var n = e.i(610467),
      a = e.i(247640),
      s = e.i(433258),
      o = e.i(133067),
      c = e.i(926379),
      l = e.i(736360);
    let u = "/docs/contract/encodeEventTopics";
    function d(e) {
      let { abi: r, eventName: i, args: n } = e,
        a = r[0];
      if (i) {
        let e = (0, l.getAbiItem)({ abi: r, name: i });
        if (!e) throw new t.AbiEventNotFoundError(i, { docsPath: u });
        a = e;
      }
      if ("event" !== a.type)
        throw new t.AbiEventNotFoundError(void 0, { docsPath: u });
      let o = (0, c.formatAbiItem)(a),
        d = (0, s.toEventSelector)(o),
        p = [];
      if (n && "inputs" in a) {
        let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
          t = Array.isArray(n)
            ? n
            : Object.values(n).length > 0
            ? e?.map((e) => n[e.name]) ?? []
            : [];
        t.length > 0 &&
          (p =
            e?.map((e, r) =>
              Array.isArray(t[r])
                ? t[r].map((i, n) => f({ param: e, value: t[r][n] }))
                : void 0 !== t[r] && null !== t[r]
                ? f({ param: e, value: t[r] })
                : null
            ) ?? []);
      }
      return [d, ...p];
    }
    function f({ param: e, value: t }) {
      if ("string" === e.type || "bytes" === e.type)
        return (0, a.keccak256)((0, n.toBytes)(t));
      if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
        throw new i(e.type);
      return (0, o.encodeAbiParameters)([e], [t]);
    }
    e.s(["encodeEventTopics", () => d], 425234);
  },
  475591,
  (e) => {
    "use strict";
    var t = e.i(425234),
      r = e.i(964564),
      i = e.i(26334);
    async function n(e, n) {
      let {
          address: a,
          abi: s,
          args: o,
          eventName: c,
          fromBlock: l,
          strict: u,
          toBlock: d,
        } = n,
        f = (0, i.createFilterRequestScope)(e, { method: "eth_newFilter" }),
        p = c
          ? (0, t.encodeEventTopics)({ abi: s, args: o, eventName: c })
          : void 0,
        m = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: a,
              fromBlock: "bigint" == typeof l ? (0, r.numberToHex)(l) : l,
              toBlock: "bigint" == typeof d ? (0, r.numberToHex)(d) : d,
              topics: p,
            },
          ],
        });
      return {
        abi: s,
        args: o,
        eventName: c,
        id: m,
        request: f(m),
        strict: !!u,
        type: "event",
      };
    }
    e.s(["createContractEventFilter", () => n]);
  },
  73492,
  597105,
  (e) => {
    "use strict";
    var t = e.i(425234),
      r = e.i(964564),
      i = e.i(26334);
    async function n(
      e,
      {
        address: a,
        args: s,
        event: o,
        events: c,
        fromBlock: l,
        strict: u,
        toBlock: d,
      } = {}
    ) {
      let f = c ?? (o ? [o] : void 0),
        p = (0, i.createFilterRequestScope)(e, { method: "eth_newFilter" }),
        m = [];
      f &&
        ((m = [
          f.flatMap((e) =>
            (0, t.encodeEventTopics)({ abi: [e], eventName: e.name, args: s })
          ),
        ]),
        o && (m = m[0]));
      let h = await e.request({
        method: "eth_newFilter",
        params: [
          {
            address: a,
            fromBlock: "bigint" == typeof l ? (0, r.numberToHex)(l) : l,
            toBlock: "bigint" == typeof d ? (0, r.numberToHex)(d) : d,
            ...(m.length ? { topics: m } : {}),
          },
        ],
      });
      return {
        abi: f,
        args: s,
        eventName: o ? o.name : void 0,
        fromBlock: l,
        id: h,
        request: p(h),
        strict: !!u,
        toBlock: d,
        type: "event",
      };
    }
    async function a(e) {
      let t = (0, i.createFilterRequestScope)(e, {
          method: "eth_newPendingTransactionFilter",
        }),
        r = await e.request({ method: "eth_newPendingTransactionFilter" });
      return { id: r, request: t(r), type: "transaction" };
    }
    e.s(["createEventFilter", () => n], 73492),
      e.s(["createPendingTransactionFilter", () => a], 597105);
  },
  760897,
  686472,
  947236,
  723151,
  489555,
  630985,
  (e) => {
    "use strict";
    var t = e.i(610155),
      r = e.i(247640);
    function i(e) {
      let i = (0, r.keccak256)(`0x${e.substring(4)}`).substring(26);
      return (0, t.checksumAddress)(`0x${i}`);
    }
    e.s(["publicKeyToAddress", () => i], 686472);
    var n = e.i(620136),
      a = e.i(144869),
      s = e.i(190149),
      o = e.i(964564);
    async function c({ hash: t, signature: r }) {
      let i = (0, n.isHex)(t) ? t : (0, o.toHex)(t),
        { secp256k1: c } = await e.A(683354),
        u = (() => {
          if ("object" == typeof r && "r" in r && "s" in r) {
            let { r: e, s: t, v: i, yParity: n } = r,
              a = l(Number(n ?? i));
            return new c.Signature(
              (0, s.hexToBigInt)(e),
              (0, s.hexToBigInt)(t)
            ).addRecoveryBit(a);
          }
          let e = (0, n.isHex)(r) ? r : (0, o.toHex)(r);
          if (65 !== (0, a.size)(e)) throw Error("invalid signature length");
          let t = l((0, s.hexToNumber)(`0x${e.slice(130)}`));
          return c.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
        })()
          .recoverPublicKey(i.substring(2))
          .toHex(!1);
      return `0x${u}`;
    }
    function l(e) {
      if (0 === e || 1 === e) return e;
      if (27 === e) return 0;
      if (28 === e) return 1;
      throw Error("Invalid yParityOrV value");
    }
    async function u({ hash: e, signature: t }) {
      return i(await c({ hash: e, signature: t }));
    }
    e.s(["recoverPublicKey", () => c], 947236),
      e.s(["recoverAddress", () => u], 723151);
    var d = e.i(695670),
      f = e.i(610467),
      p = e.i(86972),
      m = e.i(228774);
    function h(e, t = "hex") {
      let r = (function e(t) {
          var r, i;
          let n, a, s, o;
          return Array.isArray(t)
            ? ((a = y(
                (n = (r = t.map((t) => e(t))).reduce((e, t) => e + t.length, 0))
              )),
              {
                length: n <= 55 ? 1 + n : 1 + a + n,
                encode(e) {
                  for (let { encode: t } of (n <= 55
                    ? e.pushByte(192 + n)
                    : (e.pushByte(247 + a),
                      1 === a
                        ? e.pushUint8(n)
                        : 2 === a
                        ? e.pushUint16(n)
                        : 3 === a
                        ? e.pushUint24(n)
                        : e.pushUint32(n)),
                  r))
                    t(e);
                },
              })
            : ((o = y(
                (s = "string" == typeof (i = t) ? (0, f.hexToBytes)(i) : i)
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
        i = (0, m.createCursor)(new Uint8Array(r.length));
      return (r.encode(i), "hex" === t) ? (0, o.bytesToHex)(i.bytes) : i.bytes;
    }
    function g(e, t = "bytes") {
      return h(e, t);
    }
    function b(e, t = "hex") {
      return h(e, t);
    }
    function y(e) {
      if (e < 256) return 1;
      if (e < 65536) return 2;
      if (e < 0x1000000) return 3;
      if (e < 0x100000000) return 4;
      throw new p.BaseError("Length is too large.");
    }
    function v(e) {
      let { chainId: t, nonce: i, to: n } = e,
        a = e.contractAddress ?? e.address,
        s = (0, r.keccak256)(
          (0, d.concatHex)([
            "0x05",
            h([
              t ? (0, o.numberToHex)(t) : "0x",
              a,
              i ? (0, o.numberToHex)(i) : "0x",
            ]),
          ])
        );
      return "bytes" === n ? (0, f.hexToBytes)(s) : s;
    }
    async function w(e) {
      let { authorization: t, signature: r } = e;
      return u({ hash: v(t), signature: r ?? t });
    }
    e.s(["bytesToRlp", () => g, "hexToRlp", () => b, "toRlp", () => h], 489555),
      e.s(["hashAuthorization", () => v], 630985),
      e.s(["recoverAuthorizationAddress", () => w], 760897);
  },
  770979,
  400581,
  (e) => {
    "use strict";
    var t = e.i(297231),
      r = e.i(230070),
      i = e.i(86972),
      n = e.i(180796);
    class a extends i.BaseError {
      constructor(
        e,
        {
          account: i,
          docsPath: a,
          chain: s,
          data: o,
          gas: c,
          gasPrice: l,
          maxFeePerGas: u,
          maxPriorityFeePerGas: d,
          nonce: f,
          to: p,
          value: m,
        }
      ) {
        const h = (0, n.prettyPrint)({
          from: i?.address,
          to: p,
          value:
            void 0 !== m &&
            `${(0, t.formatEther)(m)} ${s?.nativeCurrency?.symbol || "ETH"}`,
          data: o,
          gas: c,
          gasPrice: void 0 !== l && `${(0, r.formatGwei)(l)} gwei`,
          maxFeePerGas: void 0 !== u && `${(0, r.formatGwei)(u)} gwei`,
          maxPriorityFeePerGas: void 0 !== d && `${(0, r.formatGwei)(d)} gwei`,
          nonce: f,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: a,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Estimate Gas Arguments:",
            h,
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
    e.s(["EstimateGasExecutionError", () => a], 400581);
    var s = e.i(689617),
      o = e.i(795001);
    function c(e, { docsPath: t, ...r }) {
      let i;
      return new a(
        (i = (0, o.getNodeError)(e, r)) instanceof s.UnknownNodeError ? e : i,
        { docsPath: t, ...r }
      );
    }
    e.s(["getEstimateGasError", () => c], 770979);
  },
  11500,
  (e) => {
    "use strict";
    var t = e.i(230070),
      r = e.i(86972);
    class i extends r.BaseError {
      constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
          name: "BaseFeeScalarError",
        });
      }
    }
    class n extends r.BaseError {
      constructor() {
        super("Chain does not support EIP-1559 fees.", {
          name: "Eip1559FeesNotSupportedError",
        });
      }
    }
    class a extends r.BaseError {
      constructor({ maxPriorityFeePerGas: e }) {
        super(
          `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
          t.formatGwei)(e)} gwei).`,
          { name: "MaxFeePerGasTooLowError" }
        );
      }
    }
    e.s([
      "BaseFeeScalarError",
      () => i,
      "Eip1559FeesNotSupportedError",
      () => n,
      "MaxFeePerGasTooLowError",
      () => a,
    ]);
  },
  69260,
  (e) => {
    "use strict";
    var t = e.i(86972);
    class r extends t.BaseError {
      constructor({ blockHash: e, blockNumber: t }) {
        let r = "Block";
        e && (r = `Block at hash "${e}"`),
          t && (r = `Block at number "${t}"`),
          super(`${r} could not be found.`, { name: "BlockNotFoundError" });
      }
    }
    e.s(["BlockNotFoundError", () => r]);
  },
  589683,
  (e) => {
    "use strict";
    var t = e.i(190149),
      r = e.i(562314);
    let i = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702",
    };
    function n(e, r) {
      let n = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        ...(null != e.blockTimestamp && {
          blockTimestamp: BigInt(e.blockTimestamp),
        }),
        chainId: e.chainId ? (0, t.hexToNumber)(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas
          ? BigInt(e.maxFeePerBlobGas)
          : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? BigInt(e.maxPriorityFeePerGas)
          : void 0,
        nonce: e.nonce ? (0, t.hexToNumber)(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        type: e.type ? i[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0,
      };
      return (
        e.authorizationList &&
          (n.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            chainId: Number(e.chainId),
            nonce: Number(e.nonce),
            r: e.r,
            s: e.s,
            yParity: Number(e.yParity),
          }))),
        (n.yParity = (() => {
          if (e.yParity) return Number(e.yParity);
          if ("bigint" == typeof n.v) {
            if (0n === n.v || 27n === n.v) return 0;
            if (1n === n.v || 28n === n.v) return 1;
            if (n.v >= 35n) return +(n.v % 2n === 0n);
          }
        })()),
        "legacy" === n.type &&
          (delete n.accessList,
          delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas,
          delete n.yParity),
        "eip2930" === n.type &&
          (delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas),
        "eip1559" === n.type && delete n.maxFeePerBlobGas,
        n
      );
    }
    let a = (0, r.defineFormatter)("transaction", n);
    e.s([
      "defineTransaction",
      0,
      a,
      "formatTransaction",
      () => n,
      "transactionType",
      0,
      i,
    ]);
  },
  442449,
  611319,
  (e) => {
    "use strict";
    var t = e.i(69260),
      r = e.i(964564),
      i = e.i(562314),
      n = e.i(589683);
    function a(e, t) {
      let r = (e.transactions ?? []).map((e) =>
        "string" == typeof e ? e : (0, n.formatTransaction)(e)
      );
      return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
      };
    }
    let s = (0, i.defineFormatter)("block", a);
    async function o(
      e,
      {
        blockHash: i,
        blockNumber: n,
        blockTag: s = e.experimental_blockTag ?? "latest",
        includeTransactions: c,
      } = {}
    ) {
      let l = c ?? !1,
        u = void 0 !== n ? (0, r.numberToHex)(n) : void 0,
        d = null;
      if (
        !(d = i
          ? await e.request(
              { method: "eth_getBlockByHash", params: [i, l] },
              { dedupe: !0 }
            )
          : await e.request(
              { method: "eth_getBlockByNumber", params: [u || s, l] },
              { dedupe: !!u }
            ))
      )
        throw new t.BlockNotFoundError({ blockHash: i, blockNumber: n });
      return (e.chain?.formatters?.block?.format || a)(d, "getBlock");
    }
    e.s(["defineBlock", 0, s, "formatBlock", () => a], 611319),
      e.s(["getBlock", () => o], 442449);
  },
  202436,
  631,
  723879,
  (e) => {
    "use strict";
    var t = e.i(11500),
      r = e.i(114245),
      i = e.i(190149),
      n = e.i(442449);
    async function a(e) {
      return BigInt(await e.request({ method: "eth_gasPrice" }));
    }
    async function s(e, t) {
      return o(e, t);
    }
    async function o(e, s) {
      let { block: o, chain: c = e.chain, request: l } = s || {};
      try {
        let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
        if ("function" == typeof t) {
          let i = o || (await (0, r.getAction)(e, n.getBlock, "getBlock")({})),
            a = await t({ block: i, client: e, request: l });
          if (null === a) throw Error();
          return a;
        }
        if (void 0 !== t) return t;
        let a = await e.request({ method: "eth_maxPriorityFeePerGas" });
        return (0, i.hexToBigInt)(a);
      } catch {
        let [i, s] = await Promise.all([
          o
            ? Promise.resolve(o)
            : (0, r.getAction)(e, n.getBlock, "getBlock")({}),
          (0, r.getAction)(e, a, "getGasPrice")({}),
        ]);
        if ("bigint" != typeof i.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let c = s - i.baseFeePerGas;
        if (c < 0n) return 0n;
        return c;
      }
    }
    async function c(e, t) {
      return l(e, t);
    }
    async function l(e, i) {
      let {
          block: s,
          chain: c = e.chain,
          request: l,
          type: u = "eip1559",
        } = i || {},
        d = await (async () =>
          "function" == typeof c?.fees?.baseFeeMultiplier
            ? c.fees.baseFeeMultiplier({ block: s, client: e, request: l })
            : c?.fees?.baseFeeMultiplier ?? 1.2)();
      if (d < 1) throw new t.BaseFeeScalarError();
      let f = d.toString().split(".")[1]?.length ?? 0,
        p = 10 ** f,
        m = (e) => (e * BigInt(Math.ceil(d * p))) / BigInt(p),
        h = s || (await (0, r.getAction)(e, n.getBlock, "getBlock")({}));
      if ("function" == typeof c?.fees?.estimateFeesPerGas) {
        let t = await c.fees.estimateFeesPerGas({
          block: s,
          client: e,
          multiply: m,
          request: l,
          type: u,
        });
        if (null !== t) return t;
      }
      if ("eip1559" === u) {
        if ("bigint" != typeof h.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let r =
            "bigint" == typeof l?.maxPriorityFeePerGas
              ? l.maxPriorityFeePerGas
              : await o(e, { block: h, chain: c, request: l }),
          i = m(h.baseFeePerGas);
        return {
          maxFeePerGas: l?.maxFeePerGas ?? i + r,
          maxPriorityFeePerGas: r,
        };
      }
      return {
        gasPrice:
          l?.gasPrice ?? m(await (0, r.getAction)(e, a, "getGasPrice")({})),
      };
    }
    e.s(["getGasPrice", () => a], 631),
      e.s(
        [
          "estimateMaxPriorityFeePerGas",
          () => s,
          "internal_estimateMaxPriorityFeePerGas",
          () => o,
        ],
        723879
      ),
      e.s(
        ["estimateFeesPerGas", () => c, "internal_estimateFeesPerGas", () => l],
        202436
      );
  },
  451717,
  898214,
  107981,
  471360,
  53104,
  806838,
  985193,
  691158,
  485531,
  850722,
  426749,
  (e) => {
    "use strict";
    var t = e.i(190149),
      r = e.i(964564);
    async function i(
      e,
      { address: i, blockTag: n = "latest", blockNumber: a }
    ) {
      let s = await e.request(
        {
          method: "eth_getTransactionCount",
          params: [i, "bigint" == typeof a ? (0, r.numberToHex)(a) : n],
        },
        { dedupe: !!a }
      );
      return (0, t.hexToNumber)(s);
    }
    e.s(["getTransactionCount", () => i], 451717);
    var n = e.i(610467);
    function a(e) {
      let { kzg: t } = e,
        i = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        a =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, n.hexToBytes)(e))
            : e.blobs,
        s = [];
      for (let e of a) s.push(Uint8Array.from(t.blobToKzgCommitment(e)));
      return "bytes" === i ? s : s.map((e) => (0, r.bytesToHex)(e));
    }
    function s(e) {
      let { kzg: t } = e,
        i = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        a =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, n.hexToBytes)(e))
            : e.blobs,
        s =
          "string" == typeof e.commitments[0]
            ? e.commitments.map((e) => (0, n.hexToBytes)(e))
            : e.commitments,
        o = [];
      for (let e = 0; e < a.length; e++) {
        let r = a[e],
          i = s[e];
        o.push(Uint8Array.from(t.computeBlobKzgProof(r, i)));
      }
      return "bytes" === i ? o : o.map((e) => (0, r.bytesToHex)(e));
    }
    e.s(["blobsToCommitments", () => a], 898214),
      e.s(["blobsToProofs", () => s], 107981);
    var o = e.i(198537),
      c = e.i(620136);
    function l(e, t) {
      let i = (0, o.sha256)(
        (0, c.isHex)(e, { strict: !1 }) ? (0, n.toBytes)(e) : e
      );
      return "bytes" === (t || "hex") ? i : (0, r.toHex)(i);
    }
    function u(e) {
      let { commitment: t, version: i = 1 } = e,
        n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
        a = l(t, "bytes");
      return a.set([i], 0), "bytes" === n ? a : (0, r.bytesToHex)(a);
    }
    function d(e) {
      let { commitments: t, version: r } = e,
        i = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
        n = [];
      for (let e of t) n.push(u({ commitment: e, to: i, version: r }));
      return n;
    }
    e.s(["sha256", () => l], 471360),
      e.s(["commitmentToVersionedHash", () => u], 53104),
      e.s(["commitmentsToVersionedHashes", () => d], 806838);
    e.s(["versionedHashVersionKzg", 0, 1], 985193);
    var f = e.i(86972);
    class p extends f.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("Blob size is too large.", {
          metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          name: "BlobSizeTooLargeError",
        });
      }
    }
    class m extends f.BaseError {
      constructor() {
        super("Blob data must not be empty.", { name: "EmptyBlobError" });
      }
    }
    class h extends f.BaseError {
      constructor({ hash: e, size: t }) {
        super(`Versioned hash "${e}" size is invalid.`, {
          metaMessages: ["Expected: 32", `Received: ${t}`],
          name: "InvalidVersionedHashSizeError",
        });
      }
    }
    class g extends f.BaseError {
      constructor({ hash: e, version: t }) {
        super(`Versioned hash "${e}" version is invalid.`, {
          metaMessages: ["Expected: 1", `Received: ${t}`],
          name: "InvalidVersionedHashVersionError",
        });
      }
    }
    e.s(
      [
        "BlobSizeTooLargeError",
        () => p,
        "EmptyBlobError",
        () => m,
        "InvalidVersionedHashSizeError",
        () => h,
        "InvalidVersionedHashVersionError",
        () => g,
      ],
      691158
    );
    var b = e.i(228774),
      y = e.i(144869);
    function v(e) {
      let t = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
        i = "string" == typeof e.data ? (0, n.hexToBytes)(e.data) : e.data,
        a = (0, y.size)(i);
      if (!a) throw new m();
      if (a > 761855) throw new p({ maxSize: 761855, size: a });
      let s = [],
        o = !0,
        c = 0;
      for (; o; ) {
        let e = (0, b.createCursor)(new Uint8Array(131072)),
          t = 0;
        for (; t < 4096; ) {
          let r = i.slice(c, c + 31);
          if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
            e.pushByte(128), (o = !1);
            break;
          }
          t++, (c += 31);
        }
        s.push(e);
      }
      return "bytes" === t
        ? s.map((e) => e.bytes)
        : s.map((e) => (0, r.bytesToHex)(e.bytes));
    }
    function w(e) {
      let { data: t, kzg: r, to: i } = e,
        n = e.blobs ?? v({ data: t, to: i }),
        o = e.commitments ?? a({ blobs: n, kzg: r, to: i }),
        c = e.proofs ?? s({ blobs: n, commitments: o, kzg: r, to: i }),
        l = [];
      for (let e = 0; e < n.length; e++)
        l.push({ blob: n[e], commitment: o[e], proof: c[e] });
      return l;
    }
    e.s(["toBlobs", () => v], 485531), e.s(["toBlobSidecars", () => w], 850722);
    var x = e.i(180796);
    function E(e) {
      if (e.type) return e.type;
      if (void 0 !== e.authorizationList) return "eip7702";
      if (
        void 0 !== e.blobs ||
        void 0 !== e.blobVersionedHashes ||
        void 0 !== e.maxFeePerBlobGas ||
        void 0 !== e.sidecars
      )
        return "eip4844";
      if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
        return "eip1559";
      if (void 0 !== e.gasPrice)
        return void 0 !== e.accessList ? "eip2930" : "legacy";
      throw new x.InvalidSerializableTransactionError({ transaction: e });
    }
    e.s(["getTransactionType", () => E], 426749);
  },
  844550,
  (e) => {
    "use strict";
    var t = e.i(689617),
      r = e.i(180796),
      i = e.i(795001);
    function n(e, { docsPath: n, ...a }) {
      let s,
        o =
          (s = (0, i.getNodeError)(e, a)) instanceof t.UnknownNodeError ? e : s;
      return new r.TransactionExecutionError(o, { docsPath: n, ...a });
    }
    e.s(["getTransactionError", () => n]);
  },
  114606,
  35907,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(11500),
      i = e.i(844550),
      n = e.i(971282),
      a = e.i(589683),
      s = e.i(979593),
      o = e.i(114245),
      c = e.i(70333),
      l = e.i(442449),
      u = e.i(190149);
    async function d(e) {
      let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
      return (0, u.hexToNumber)(t);
    }
    async function f(e, u) {
      let {
          account: f = e.account,
          accessList: p,
          authorizationList: m,
          chain: h = e.chain,
          blobVersionedHashes: g,
          blobs: b,
          data: y,
          gas: v,
          gasPrice: w,
          maxFeePerBlobGas: x,
          maxFeePerGas: E,
          maxPriorityFeePerGas: B,
          nonce: P,
          nonceManager: A,
          to: T,
          type: k,
          value: I,
          ...N
        } = u,
        F = await (async () => {
          if (!f || !A || void 0 !== P) return P;
          let r = (0, t.parseAccount)(f),
            i = h ? h.id : await (0, o.getAction)(e, d, "getChainId")({});
          return await A.consume({ address: r.address, chainId: i, client: e });
        })();
      (0, c.assertRequest)(u);
      let R = h?.formatters?.transactionRequest?.format,
        C = (R || s.formatTransactionRequest)(
          {
            ...(0, n.extract)(N, { format: R }),
            account: f ? (0, t.parseAccount)(f) : void 0,
            accessList: p,
            authorizationList: m,
            blobs: b,
            blobVersionedHashes: g,
            data: y,
            gas: v,
            gasPrice: w,
            maxFeePerBlobGas: x,
            maxFeePerGas: E,
            maxPriorityFeePerGas: B,
            nonce: F,
            to: T,
            type: k,
            value: I,
          },
          "fillTransaction"
        );
      try {
        let t = await e.request({ method: "eth_fillTransaction", params: [C] }),
          i = (h?.formatters?.transaction?.format || a.formatTransaction)(t.tx);
        delete i.blockHash,
          delete i.blockNumber,
          delete i.r,
          delete i.s,
          delete i.transactionIndex,
          delete i.v,
          delete i.yParity,
          (i.data = i.input),
          i.gas && (i.gas = u.gas ?? i.gas),
          i.gasPrice && (i.gasPrice = u.gasPrice ?? i.gasPrice),
          i.maxFeePerBlobGas &&
            (i.maxFeePerBlobGas = u.maxFeePerBlobGas ?? i.maxFeePerBlobGas),
          i.maxFeePerGas && (i.maxFeePerGas = u.maxFeePerGas ?? i.maxFeePerGas),
          i.maxPriorityFeePerGas &&
            (i.maxPriorityFeePerGas =
              u.maxPriorityFeePerGas ?? i.maxPriorityFeePerGas),
          void 0 !== i.nonce && (i.nonce = u.nonce ?? i.nonce);
        let n = await (async () => {
          if ("function" == typeof h?.fees?.baseFeeMultiplier) {
            let t = await (0, o.getAction)(e, l.getBlock, "getBlock")({});
            return h.fees.baseFeeMultiplier({
              block: t,
              client: e,
              request: u,
            });
          }
          return h?.fees?.baseFeeMultiplier ?? 1.2;
        })();
        if (n < 1) throw new r.BaseFeeScalarError();
        let s = n.toString().split(".")[1]?.length ?? 0,
          c = 10 ** s,
          d = (e) => (e * BigInt(Math.ceil(n * c))) / BigInt(c);
        return (
          i.feePayerSignature ||
            (i.maxFeePerGas &&
              !u.maxFeePerGas &&
              (i.maxFeePerGas = d(i.maxFeePerGas)),
            i.gasPrice && !u.gasPrice && (i.gasPrice = d(i.gasPrice))),
          {
            raw: t.raw,
            transaction: { from: C.from, ...i },
            ...(t.capabilities ? { capabilities: t.capabilities } : {}),
          }
        );
      } catch (t) {
        throw (0, i.getTransactionError)(t, { ...u, chain: e.chain });
      }
    }
    e.s(["getChainId", () => d], 35907),
      e.s(["fillTransaction", () => f], 114606);
  },
  96823,
  (e) => {
    "use strict";
    e.s(["defaultParameters", () => b, "prepareTransactionRequest", () => w]);
    var t = e.i(140315),
      r = e.i(202436),
      i = e.i(929348),
      n = e.i(442449),
      a = e.i(451717),
      s = e.i(11500),
      o = e.i(898214),
      c = e.i(107981),
      l = e.i(806838),
      u = e.i(850722),
      d = e.i(114245),
      f = e.i(753371),
      p = e.i(70333),
      m = e.i(426749),
      h = e.i(114606),
      g = e.i(35907);
    let b = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
      y = new Map(),
      v = new f.LruMap(128);
    async function w(e, f) {
      let w,
        x,
        E = f;
      (E.account ??= e.account), (E.parameters ??= b);
      let {
          account: B,
          chain: P = e.chain,
          nonceManager: A,
          parameters: T,
        } = E,
        k =
          "function" == typeof P?.prepareTransactionRequest
            ? {
                fn: P.prepareTransactionRequest,
                runAt: ["beforeFillTransaction"],
              }
            : Array.isArray(P?.prepareTransactionRequest)
            ? {
                fn: P.prepareTransactionRequest[0],
                runAt: P.prepareTransactionRequest[1].runAt,
              }
            : void 0;
      async function I() {
        return w
          ? w
          : void 0 !== E.chainId
          ? E.chainId
          : P
          ? P.id
          : (w = await (0, d.getAction)(e, g.getChainId, "getChainId")({}));
      }
      let N = B ? (0, t.parseAccount)(B) : B,
        F = E.nonce;
      if (T.includes("nonce") && void 0 === F && N && A) {
        let t = await I();
        F = await A.consume({ address: N.address, chainId: t, client: e });
      }
      k?.fn &&
        k.runAt?.includes("beforeFillTransaction") &&
        ((E = await k.fn(
          { ...E, chain: P },
          { phase: "beforeFillTransaction" }
        )),
        (F ??= E.nonce));
      let R =
        (!(T.includes("blobVersionedHashes") || T.includes("sidecars")) ||
          !E.kzg ||
          !E.blobs) &&
        !1 !== v.get(e.uid) &&
        ["fees", "gas"].some((e) => T.includes(e)) &&
        ((T.includes("chainId") && "number" != typeof E.chainId) ||
          (T.includes("nonce") && "number" != typeof F) ||
          (T.includes("fees") &&
            "bigint" != typeof E.gasPrice &&
            ("bigint" != typeof E.maxFeePerGas ||
              "bigint" != typeof E.maxPriorityFeePerGas)) ||
          (T.includes("gas") && "bigint" != typeof E.gas))
          ? await (0, d.getAction)(
              e,
              h.fillTransaction,
              "fillTransaction"
            )({ ...E, nonce: F })
              .then((t) => {
                let {
                  chainId: r,
                  from: i,
                  gas: n,
                  gasPrice: a,
                  nonce: s,
                  maxFeePerBlobGas: o,
                  maxFeePerGas: c,
                  maxPriorityFeePerGas: l,
                  type: u,
                  ...d
                } = t.transaction;
                return (
                  v.set(e.uid, !0),
                  {
                    ...E,
                    ...(i ? { from: i } : {}),
                    ...(u && !E.type ? { type: u } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== n ? { gas: n } : {}),
                    ...(void 0 !== a ? { gasPrice: a } : {}),
                    ...(void 0 !== s ? { nonce: s } : {}),
                    ...(void 0 !== o &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxFeePerBlobGas: o }
                      : {}),
                    ...(void 0 !== c &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxFeePerGas: c }
                      : {}),
                    ...(void 0 !== l &&
                    "legacy" !== E.type &&
                    "eip2930" !== E.type
                      ? { maxPriorityFeePerGas: l }
                      : {}),
                    ...("nonceKey" in d && void 0 !== d.nonceKey
                      ? { nonceKey: d.nonceKey }
                      : {}),
                    ...("keyAuthorization" in d &&
                    void 0 !== d.keyAuthorization &&
                    null !== d.keyAuthorization &&
                    !("keyAuthorization" in E)
                      ? { keyAuthorization: d.keyAuthorization }
                      : {}),
                    ...("feePayerSignature" in d &&
                    void 0 !== d.feePayerSignature &&
                    null !== d.feePayerSignature
                      ? { feePayerSignature: d.feePayerSignature }
                      : {}),
                    ...("feeToken" in d &&
                    void 0 !== d.feeToken &&
                    null !== d.feeToken &&
                    !("feeToken" in E)
                      ? { feeToken: d.feeToken }
                      : {}),
                    ...(t.capabilities
                      ? { _capabilities: t.capabilities }
                      : {}),
                  }
                );
              })
              .catch((t) => {
                if ("TransactionExecutionError" !== t.name) return E;
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
                  ) && v.set(e.uid, !1),
                  E
                );
              })
          : E;
      F ??= R.nonce;
      let {
        blobs: C,
        gas: S,
        kzg: z,
        type: G,
      } = (E = {
        ...R,
        ...(N ? { from: N?.address } : {}),
        ...(void 0 !== F ? { nonce: F } : {}),
      });
      async function H() {
        return (
          x ||
          (x = await (0, d.getAction)(
            e,
            n.getBlock,
            "getBlock"
          )({ blockTag: "latest" }))
        );
      }
      if (
        (k?.fn &&
          k.runAt?.includes("beforeFillParameters") &&
          (E = await k.fn(
            { ...E, chain: P },
            { phase: "beforeFillParameters" }
          )),
        T.includes("nonce") &&
          void 0 === F &&
          N &&
          !A &&
          (E.nonce = await (0, d.getAction)(
            e,
            a.getTransactionCount,
            "getTransactionCount"
          )({ address: N.address, blockTag: "pending" })),
        (T.includes("blobVersionedHashes") || T.includes("sidecars")) && C && z)
      ) {
        let e = (0, o.blobsToCommitments)({ blobs: C, kzg: z });
        if (T.includes("blobVersionedHashes")) {
          let t = (0, l.commitmentsToVersionedHashes)({
            commitments: e,
            to: "hex",
          });
          E.blobVersionedHashes = t;
        }
        if (T.includes("sidecars")) {
          let t = (0, c.blobsToProofs)({ blobs: C, commitments: e, kzg: z }),
            r = (0, u.toBlobSidecars)({
              blobs: C,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          E.sidecars = r;
        }
      }
      if (
        (T.includes("chainId") && (E.chainId = await I()),
        (T.includes("fees") || T.includes("type")) && void 0 === G)
      )
        try {
          E.type = (0, m.getTransactionType)(E);
        } catch {
          let t = y.get(e.uid);
          if (void 0 === t) {
            let r = await H();
            (t = "bigint" == typeof r?.baseFeePerGas), y.set(e.uid, t);
          }
          E.type = t ? "eip1559" : "legacy";
        }
      if (T.includes("fees"))
        if ("legacy" !== E.type && "eip2930" !== E.type) {
          if (void 0 === E.maxFeePerGas || void 0 === E.maxPriorityFeePerGas) {
            let t = await H(),
              { maxFeePerGas: i, maxPriorityFeePerGas: n } = await (0,
              r.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: P,
                request: E,
              });
            if (
              void 0 === E.maxPriorityFeePerGas &&
              E.maxFeePerGas &&
              E.maxFeePerGas < n
            )
              throw new s.MaxFeePerGasTooLowError({ maxPriorityFeePerGas: n });
            (E.maxPriorityFeePerGas = n), (E.maxFeePerGas = i);
          }
        } else {
          if (void 0 !== E.maxFeePerGas || void 0 !== E.maxPriorityFeePerGas)
            throw new s.Eip1559FeesNotSupportedError();
          if (void 0 === E.gasPrice) {
            let t = await H(),
              { gasPrice: i } = await (0, r.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: P,
                request: E,
                type: "legacy",
              });
            E.gasPrice = i;
          }
        }
      return (
        T.includes("gas") &&
          void 0 === S &&
          (E.gas = await (0, d.getAction)(
            e,
            i.estimateGas,
            "estimateGas"
          )({
            ...E,
            account: N,
            prepare: N?.type === "local" ? [] : ["blobVersionedHashes"],
          })),
        k?.fn &&
          k.runAt?.includes("afterFillParameters") &&
          (E = await k.fn(
            { ...E, chain: P },
            { phase: "afterFillParameters" }
          )),
        (0, p.assertRequest)(E),
        delete E.parameters,
        E
      );
    }
  },
  929348,
  (e) => {
    "use strict";
    e.s(["estimateGas", () => d]);
    var t = e.i(140315),
      r = e.i(86972),
      i = e.i(760897),
      n = e.i(964564),
      a = e.i(770979),
      s = e.i(971282),
      o = e.i(979593),
      c = e.i(152522),
      l = e.i(70333),
      u = e.i(96823);
    async function d(e, d) {
      let { account: f = e.account, prepare: p = !0 } = d,
        m = f ? (0, t.parseAccount)(f) : void 0,
        h = Array.isArray(p)
          ? p
          : m?.type !== "local"
          ? ["blobVersionedHashes"]
          : void 0;
      try {
        let t = await (async () =>
            d.to
              ? d.to
              : d.authorizationList && d.authorizationList.length > 0
              ? await (0, i.recoverAuthorizationAddress)({
                  authorization: d.authorizationList[0],
                }).catch(() => {
                  throw new r.BaseError(
                    "`to` is required. Could not infer from `authorizationList`"
                  );
                })
              : void 0)(),
          {
            accessList: a,
            authorizationList: f,
            blobs: g,
            blobVersionedHashes: b,
            blockNumber: y,
            blockTag: v,
            data: w,
            gas: x,
            gasPrice: E,
            maxFeePerBlobGas: B,
            maxFeePerGas: P,
            maxPriorityFeePerGas: A,
            nonce: T,
            value: k,
            stateOverride: I,
            ...N
          } = p
            ? await (0, u.prepareTransactionRequest)(e, {
                ...d,
                parameters: h,
                to: t,
              })
            : d;
        if (x && d.gas !== x) return x;
        let F = ("bigint" == typeof y ? (0, n.numberToHex)(y) : void 0) || v,
          R = (0, c.serializeStateOverride)(I);
        (0, l.assertRequest)(d);
        let C = e.chain?.formatters?.transactionRequest?.format,
          S = (C || o.formatTransactionRequest)(
            {
              ...(0, s.extract)(N, { format: C }),
              account: m,
              accessList: a,
              authorizationList: f,
              blobs: g,
              blobVersionedHashes: b,
              data: w,
              gasPrice: E,
              maxFeePerBlobGas: B,
              maxFeePerGas: P,
              maxPriorityFeePerGas: A,
              nonce: T,
              to: t,
              value: k,
            },
            "estimateGas"
          );
        return BigInt(
          await e.request({
            method: "eth_estimateGas",
            params: R
              ? [S, F ?? e.experimental_blockTag ?? "latest", R]
              : F
              ? [S, F]
              : [S],
          })
        );
      } catch (t) {
        throw (0, a.getEstimateGasError)(t, {
          ...d,
          account: m,
          chain: e.chain,
        });
      }
    }
  },
  182407,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(734451),
      i = e.i(453462),
      n = e.i(114245),
      a = e.i(929348);
    async function s(e, s) {
      let {
          abi: o,
          address: c,
          args: l,
          functionName: u,
          dataSuffix: d = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...f
        } = s,
        p = (0, r.encodeFunctionData)({ abi: o, args: l, functionName: u });
      try {
        return await (0, n.getAction)(
          e,
          a.estimateGas,
          "estimateGas"
        )({ data: `${p}${d ? d.replace("0x", "") : ""}`, to: c, ...f });
      } catch (r) {
        let e = f.account ? (0, t.parseAccount)(f.account) : void 0;
        throw (0, i.getContractError)(r, {
          abi: o,
          address: c,
          args: l,
          docsPath: "/docs/contract/estimateContractGas",
          functionName: u,
          sender: e?.address,
        });
      }
    }
    e.s(["estimateContractGas", () => s]);
  },
  709654,
  281355,
  (e) => {
    "use strict";
    var t = e.i(470523),
      r = e.i(234875),
      i = e.i(734451),
      n = e.i(964564),
      a = e.i(114245),
      s = e.i(557051);
    async function o(
      e,
      {
        address: o,
        blockNumber: c,
        blockTag: l = e.experimental_blockTag ?? "latest",
      }
    ) {
      if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
        let n = e.chain.contracts.multicall3.address,
          u = (0, i.encodeFunctionData)({
            abi: t.multicall3Abi,
            functionName: "getEthBalance",
            args: [o],
          }),
          { data: d } = await (0, a.getAction)(
            e,
            s.call,
            "call"
          )({ to: n, data: u, blockNumber: c, blockTag: l });
        return (0, r.decodeFunctionResult)({
          abi: t.multicall3Abi,
          functionName: "getEthBalance",
          args: [o],
          data: d || "0x",
        });
      }
      let u = "bigint" == typeof c ? (0, n.numberToHex)(c) : void 0;
      return BigInt(
        await e.request({ method: "eth_getBalance", params: [o, u || l] })
      );
    }
    async function c(e) {
      return BigInt(await e.request({ method: "eth_blobBaseFee" }));
    }
    e.s(["getBalance", () => o], 709654),
      e.s(["getBlobBaseFee", () => c], 281355);
  },
  291488,
  529074,
  (e) => {
    "use strict";
    let t = new Map(),
      r = new Map();
    async function i(e, { cacheKey: i, cacheTime: n = 1 / 0 }) {
      let a,
        s,
        o,
        c =
          ((s = (a = (e, t) => ({
            clear: () => t.delete(e),
            get: () => t.get(e),
            set: (r) => t.set(e, r),
          }))(i, t)),
          {
            clear: () => {
              s.clear(), o.clear();
            },
            promise: s,
            response: (o = a(i, r)),
          }),
        l = c.response.get();
      if (l && n > 0 && Date.now() - l.created.getTime() < n) return l.data;
      let u = c.promise.get();
      u || ((u = e()), c.promise.set(u));
      try {
        let e = await u;
        return c.response.set({ created: new Date(), data: e }), e;
      } finally {
        c.promise.clear();
      }
    }
    async function n(e, { cacheTime: t = e.cacheTime } = {}) {
      let r;
      return BigInt(
        await i(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: ((r = e.uid), `blockNumber.${r}`),
          cacheTime: t,
        })
      );
    }
    e.s(["withCache", () => i], 529074),
      e.s(["getBlockNumber", () => n], 291488);
  },
  824470,
  555162,
  (e) => {
    "use strict";
    var t = e.i(190149),
      r = e.i(964564);
    async function i(
      e,
      { blockHash: n, blockNumber: a, blockTag: s = "latest" } = {}
    ) {
      let o,
        c = void 0 !== a ? (0, r.numberToHex)(a) : void 0;
      return (
        (o = n
          ? await e.request(
              { method: "eth_getBlockTransactionCountByHash", params: [n] },
              { dedupe: !0 }
            )
          : await e.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [c || s],
              },
              { dedupe: !!c }
            )),
        (0, t.hexToNumber)(o)
      );
    }
    async function n(
      e,
      { address: t, blockNumber: i, blockTag: n = "latest" }
    ) {
      let a = void 0 !== i ? (0, r.numberToHex)(i) : void 0,
        s = await e.request(
          { method: "eth_getCode", params: [t, a || n] },
          { dedupe: !!a }
        );
      if ("0x" !== s) return s;
    }
    e.s(["getBlockTransactionCount", () => i], 824470),
      e.s(["getCode", () => n], 555162);
  },
  984538,
  (e) => {
    "use strict";
    function t(e, { args: r, eventName: i } = {}) {
      return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        blockTimestamp: e.blockTimestamp
          ? BigInt(e.blockTimestamp)
          : null === e.blockTimestamp
          ? null
          : void 0,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        ...(i ? { args: r, eventName: i } : {}),
      };
    }
    e.s(["formatLog", () => t]);
  },
  202150,
  220761,
  603720,
  540834,
  (e) => {
    "use strict";
    var t = e.i(736360),
      r = e.i(114245),
      i = e.i(425234),
      n = e.i(837794),
      a = e.i(610467),
      s = e.i(984538),
      o = e.i(247640),
      c = e.i(433258),
      l = e.i(821434),
      u = e.i(700985),
      d = e.i(144869),
      f = e.i(113894),
      p = e.i(926379);
    let m = "/docs/contract/decodeEventLog";
    function h(e) {
      let { abi: t, data: r, strict: i, topics: n } = e,
        a = i ?? !0,
        [s, ...o] = n;
      if (!s) throw new l.AbiEventSignatureEmptyTopicsError({ docsPath: m });
      let h = t.find(
        (e) =>
          "event" === e.type &&
          s === (0, c.toEventSelector)((0, p.formatAbiItem)(e))
      );
      if (!(h && "name" in h) || "event" !== h.type)
        throw new l.AbiEventSignatureNotFoundError(s, { docsPath: m });
      let { name: g, inputs: b } = h,
        y = b?.some((e) => !("name" in e && e.name)),
        v = y ? [] : {},
        w = b
          .map((e, t) => [e, t])
          .filter(([e]) => "indexed" in e && e.indexed),
        x = [];
      for (let e = 0; e < w.length; e++) {
        let [t, r] = w[e],
          i = o[e];
        if (!i) {
          if (a) throw new l.DecodeLogTopicsMismatch({ abiItem: h, param: t });
          x.push([t, r]);
          continue;
        }
        v[y ? r : t.name || r] = (function ({ param: e, value: t }) {
          return "string" === e.type ||
            "bytes" === e.type ||
            "tuple" === e.type ||
            e.type.match(/^(.*)\[(\d+)?\]$/)
            ? t
            : ((0, f.decodeAbiParameters)([e], t) || [])[0];
        })({ param: t, value: i });
      }
      let E = b.filter((e) => !("indexed" in e && e.indexed)),
        B = a ? E : [...x.map(([e]) => e), ...E];
      if (B.length > 0) {
        if (r && "0x" !== r)
          try {
            let e = (0, f.decodeAbiParameters)(B, r);
            if (e) {
              let t = 0;
              if (!a) for (let [r, i] of x) v[y ? i : r.name || i] = e[t++];
              if (y)
                for (let r = 0; r < b.length; r++)
                  void 0 === v[r] && t < e.length && (v[r] = e[t++]);
              else for (let r = 0; r < E.length; r++) v[E[r].name] = e[t++];
            }
          } catch (e) {
            if (a) {
              if (
                e instanceof l.AbiDecodingDataSizeTooSmallError ||
                e instanceof u.PositionOutOfBoundsError
              )
                throw new l.DecodeLogDataMismatch({
                  abiItem: h,
                  data: r,
                  params: B,
                  size: (0, d.size)(r),
                });
              throw e;
            }
          }
        else if (a)
          throw new l.DecodeLogDataMismatch({
            abiItem: h,
            data: "0x",
            params: B,
            size: 0,
          });
      }
      return { eventName: g, args: Object.values(v).length > 0 ? v : void 0 };
    }
    function g(e) {
      let { abi: t, args: r, logs: i, strict: l = !0 } = e,
        u = (() => {
          if (e.eventName)
            return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
        })(),
        d = t
          .filter((e) => "event" === e.type)
          .map((e) => ({ abi: e, selector: (0, c.toEventSelector)(e) }));
      return i
        .map((e) => {
          let t,
            i,
            c = "string" == typeof e.blockNumber ? (0, s.formatLog)(e) : e,
            f = d.filter((e) => c.topics[0] === e.selector);
          if (0 === f.length) return null;
          for (let e of f)
            try {
              (t = h({ ...c, abi: [e.abi], strict: !0 })), (i = e);
              break;
            } catch {}
          if (!t && !l) {
            i = f[0];
            try {
              t = h({
                data: c.data,
                topics: c.topics,
                abi: [i.abi],
                strict: !1,
              });
            } catch {
              let e = i.abi.inputs?.some((e) => !("name" in e && e.name));
              return { ...c, args: e ? [] : {}, eventName: i.abi.name };
            }
          }
          return t &&
            i &&
            (!u || u.includes(t.eventName)) &&
            (function (e) {
              let { args: t, inputs: r, matchArgs: i } = e;
              if (!i) return !0;
              if (!t) return !1;
              function s(e, t, r) {
                try {
                  if ("address" === e.type) return (0, n.isAddressEqual)(t, r);
                  if ("string" === e.type || "bytes" === e.type)
                    return (0, o.keccak256)((0, a.toBytes)(t)) === r;
                  return t === r;
                } catch {
                  return !1;
                }
              }
              return Array.isArray(t) && Array.isArray(i)
                ? i.every((e, i) => {
                    if (null == e) return !0;
                    let n = r[i];
                    return (
                      !!n &&
                      (Array.isArray(e) ? e : [e]).some((e) => s(n, e, t[i]))
                    );
                  })
                : !(
                    "object" != typeof t ||
                    Array.isArray(t) ||
                    "object" != typeof i ||
                    Array.isArray(i)
                  ) &&
                    Object.entries(i).every(([e, i]) => {
                      if (null == i) return !0;
                      let n = r.find((t) => t.name === e);
                      return (
                        !!n &&
                        (Array.isArray(i) ? i : [i]).some((r) => s(n, r, t[e]))
                      );
                    });
            })({ args: t.args, inputs: i.abi.inputs, matchArgs: r })
            ? { ...t, ...c }
            : null;
        })
        .filter(Boolean);
    }
    e.s(["decodeEventLog", () => h], 220761),
      e.s(["parseEventLogs", () => g], 603720);
    var b = e.i(964564);
    async function y(
      e,
      {
        address: t,
        blockHash: r,
        fromBlock: n,
        toBlock: a,
        event: o,
        events: c,
        args: l,
        strict: u,
      } = {}
    ) {
      let d = c ?? (o ? [o] : void 0),
        f = [];
      d &&
        ((f = [
          d.flatMap((e) =>
            (0, i.encodeEventTopics)({
              abi: [e],
              eventName: e.name,
              args: c ? void 0 : l,
            })
          ),
        ]),
        o && (f = f[0]));
      let p = (
        r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: f, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: f,
                  fromBlock: "bigint" == typeof n ? (0, b.numberToHex)(n) : n,
                  toBlock: "bigint" == typeof a ? (0, b.numberToHex)(a) : a,
                },
              ],
            })
      ).map((e) => (0, s.formatLog)(e));
      return d ? g({ abi: d, args: l, logs: p, strict: u ?? !1 }) : p;
    }
    async function v(e, i) {
      let {
          abi: n,
          address: a,
          args: s,
          blockHash: o,
          eventName: c,
          fromBlock: l,
          toBlock: u,
          strict: d,
        } = i,
        f = c ? (0, t.getAbiItem)({ abi: n, name: c }) : void 0,
        p = f ? void 0 : n.filter((e) => "event" === e.type);
      return (0, r.getAction)(
        e,
        y,
        "getLogs"
      )({
        address: a,
        args: s,
        blockHash: o,
        event: f,
        events: p,
        fromBlock: l,
        toBlock: u,
        strict: d,
      });
    }
    e.s(["getLogs", () => y], 540834),
      e.s(["getContractEvents", () => v], 202150);
  },
  187095,
  539451,
  521300,
  (e) => {
    "use strict";
    var t = e.i(610155),
      r = e.i(144869),
      i = e.i(696249),
      n = e.i(555162);
    async function a(
      e,
      { address: a, blockNumber: s, blockTag: o = "latest" }
    ) {
      let c = await (0, n.getCode)(e, {
        address: a,
        ...(void 0 !== s ? { blockNumber: s } : { blockTag: o }),
      });
      if (c && 23 === (0, r.size)(c) && c.startsWith("0xef0100"))
        return (0, t.getAddress)((0, i.slice)(c, 3, 23));
    }
    e.s(["getDelegation", () => a], 187095);
    var s = e.i(86972);
    class o extends s.BaseError {
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
    var c = e.i(114245),
      l = e.i(299408);
    async function u(e, t) {
      let { address: r, factory: i, factoryData: n } = t;
      try {
        let [t, a, s, o, u, f, p] = await (0, c.getAction)(
          e,
          l.readContract,
          "readContract"
        )({
          abi: d,
          address: r,
          functionName: "eip712Domain",
          factory: i,
          factoryData: n,
        });
        return {
          domain: {
            name: a,
            version: s,
            chainId: Number(o),
            verifyingContract: u,
            salt: f,
          },
          extensions: p,
          fields: t,
        };
      } catch (e) {
        if (
          "ContractFunctionExecutionError" === e.name &&
          "ContractFunctionZeroDataError" === e.cause.name
        )
          throw new o({ address: r });
        throw e;
      }
    }
    let d = [
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
    e.s(["getEip712Domain", () => u], 539451);
    var f = e.i(964564);
    async function p(
      e,
      {
        blockCount: t,
        blockNumber: r,
        blockTag: i = "latest",
        rewardPercentiles: n,
      }
    ) {
      var a;
      let s = "bigint" == typeof r ? (0, f.numberToHex)(r) : void 0;
      return {
        baseFeePerGas: (a = await e.request(
          {
            method: "eth_feeHistory",
            params: [(0, f.numberToHex)(t), s || i, n],
          },
          { dedupe: !!s }
        )).baseFeePerGas.map((e) => BigInt(e)),
        gasUsedRatio: a.gasUsedRatio,
        oldestBlock: BigInt(a.oldestBlock),
        reward: a.reward?.map((e) => e.map((e) => BigInt(e))),
      };
    }
    e.s(["getFeeHistory", () => p], 521300);
  },
  760638,
  (e) => {
    "use strict";
    var t = e.i(603720),
      r = e.i(984538);
    async function i(e, { filter: i }) {
      let n = "strict" in i && i.strict,
        a = await i.request({ method: "eth_getFilterChanges", params: [i.id] });
      if ("string" == typeof a[0]) return a;
      let s = a.map((e) => (0, r.formatLog)(e));
      return "abi" in i && i.abi
        ? (0, t.parseEventLogs)({ abi: i.abi, logs: s, strict: n })
        : s;
    }
    e.s(["getFilterChanges", () => i]);
  },
  842815,
  952192,
  153499,
  (e) => {
    "use strict";
    var t = e.i(603720),
      r = e.i(984538);
    async function i(e, { filter: i }) {
      let n = i.strict ?? !1,
        a = (
          await i.request({ method: "eth_getFilterLogs", params: [i.id] })
        ).map((e) => (0, r.formatLog)(e));
      return i.abi
        ? (0, t.parseEventLogs)({ abi: i.abi, logs: a, strict: n })
        : a;
    }
    e.s(["getFilterLogs", () => i], 842815);
    var n = e.i(964564),
      a = e.i(190149);
    async function s(
      e,
      { address: t, blockNumber: r, blockTag: i, storageKeys: s }
    ) {
      let o = void 0 !== r ? (0, n.numberToHex)(r) : void 0;
      var c = await e.request({
        method: "eth_getProof",
        params: [t, s, o || (i ?? "latest")],
      });
      return {
        ...c,
        balance: c.balance ? BigInt(c.balance) : void 0,
        nonce: c.nonce ? (0, a.hexToNumber)(c.nonce) : void 0,
        storageProof: c.storageProof
          ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
          : void 0,
      };
    }
    async function o(
      e,
      { address: t, blockNumber: r, blockTag: i = "latest", slot: a }
    ) {
      let s = void 0 !== r ? (0, n.numberToHex)(r) : void 0;
      return await e.request({
        method: "eth_getStorageAt",
        params: [t, a, s || i],
      });
    }
    e.s(["getProof", () => s], 952192), e.s(["getStorageAt", () => o], 153499);
  },
  798889,
  (e) => {
    "use strict";
    var t = e.i(180796),
      r = e.i(964564),
      i = e.i(589683);
    async function n(
      e,
      {
        blockHash: n,
        blockNumber: a,
        blockTag: s,
        hash: o,
        index: c,
        sender: l,
        nonce: u,
      }
    ) {
      let d = s || "latest",
        f = void 0 !== a ? (0, r.numberToHex)(a) : void 0,
        p = null;
      if (
        (o
          ? (p = await e.request(
              { method: "eth_getTransactionByHash", params: [o] },
              { dedupe: !0 }
            ))
          : n
          ? (p = await e.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [n, (0, r.numberToHex)(c)],
              },
              { dedupe: !0 }
            ))
          : (f || d) && "number" == typeof c
          ? (p = await e.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [f || d, (0, r.numberToHex)(c)],
              },
              { dedupe: !!f }
            ))
          : l &&
            "number" == typeof u &&
            (p = await e.request(
              {
                method: "eth_getTransactionBySenderAndNonce",
                params: [l, (0, r.numberToHex)(u)],
              },
              { dedupe: !0 }
            )),
        !p)
      )
        throw new t.TransactionNotFoundError({
          blockHash: n,
          blockNumber: a,
          blockTag: d,
          hash: o,
          index: c,
        });
      return (e.chain?.formatters?.transaction?.format || i.formatTransaction)(
        p,
        "getTransaction"
      );
    }
    e.s(["getTransaction", () => n]);
  },
  86636,
  (e) => {
    "use strict";
    var t = e.i(114245),
      r = e.i(291488),
      i = e.i(798889);
    async function n(e, { hash: n, transactionReceipt: a }) {
      let [s, o] = await Promise.all([
          (0, t.getAction)(e, r.getBlockNumber, "getBlockNumber")({}),
          n
            ? (0, t.getAction)(
                e,
                i.getTransaction,
                "getTransaction"
              )({ hash: n })
            : void 0,
        ]),
        c = a?.blockNumber || o?.blockNumber;
      return c ? s - c + 1n : 0n;
    }
    e.s(["getTransactionConfirmations", () => n]);
  },
  720047,
  (e) => {
    "use strict";
    var t = e.i(190149),
      r = e.i(562314),
      i = e.i(984538),
      n = e.i(589683);
    let a = { "0x0": "reverted", "0x1": "success" };
    function s(e, r) {
      let s = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed
          ? BigInt(e.cumulativeGasUsed)
          : null,
        effectiveGasPrice: e.effectiveGasPrice
          ? BigInt(e.effectiveGasPrice)
          : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e) => (0, i.formatLog)(e)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? (0, t.hexToNumber)(e.transactionIndex)
          : null,
        status: e.status ? a[e.status] : null,
        type: e.type ? n.transactionType[e.type] || e.type : null,
      };
      return (
        e.blobGasPrice && (s.blobGasPrice = BigInt(e.blobGasPrice)),
        e.blobGasUsed && (s.blobGasUsed = BigInt(e.blobGasUsed)),
        s
      );
    }
    let o = (0, r.defineFormatter)("transactionReceipt", s);
    e.s([
      "defineTransactionReceipt",
      0,
      o,
      "formatTransactionReceipt",
      () => s,
      "receiptStatuses",
      0,
      a,
    ]);
  },
  771441,
  (e) => {
    "use strict";
    var t = e.i(180796),
      r = e.i(720047);
    async function i(e, { hash: i }) {
      let n = await e.request(
        { method: "eth_getTransactionReceipt", params: [i] },
        { dedupe: !0 }
      );
      if (!n) throw new t.TransactionReceiptNotFoundError({ hash: i });
      return (
        e.chain?.formatters?.transactionReceipt?.format ||
        r.formatTransactionReceipt
      )(n, "getTransactionReceipt");
    }
    e.s(["getTransactionReceipt", () => i]);
  },
  980020,
  416409,
  (e) => {
    "use strict";
    var t = e.i(470523),
      r = e.i(282591),
      i = e.i(821434),
      n = e.i(86972),
      a = e.i(617714),
      s = e.i(234875),
      o = e.i(734451),
      c = e.i(521991),
      l = e.i(453462),
      u = e.i(114245),
      d = e.i(299408);
    async function f(e, f) {
      let {
          account: p,
          authorizationList: m,
          allowFailure: h = !0,
          blockNumber: g,
          blockOverrides: b,
          blockTag: y,
          stateOverride: v,
        } = f,
        w = f.contracts,
        {
          batchSize: x = f.batchSize ?? 1024,
          deployless: E = f.deployless ?? !1,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        B = (() => {
          if (f.multicallAddress) return f.multicallAddress;
          if (E) return null;
          if (e.chain)
            return (0, c.getChainContractAddress)({
              blockNumber: g,
              chain: e.chain,
              contract: "multicall3",
            });
          throw Error(
            "client chain not configured. multicallAddress is required."
          );
        })(),
        P = [[]],
        A = 0,
        T = 0;
      for (let e = 0; e < w.length; e++) {
        let { abi: t, address: r, args: i, functionName: n } = w[e];
        try {
          let e = (0, o.encodeFunctionData)({
            abi: t,
            args: i,
            functionName: n,
          });
          (T += (e.length - 2) / 2),
            x > 0 &&
              T > x &&
              P[A].length > 0 &&
              (A++, (T = (e.length - 2) / 2), (P[A] = [])),
            (P[A] = [...P[A], { allowFailure: !0, callData: e, target: r }]);
        } catch (a) {
          let e = (0, l.getContractError)(a, {
            abi: t,
            address: r,
            args: i,
            docsPath: "/docs/contract/multicall",
            functionName: n,
            sender: p,
          });
          if (!h) throw e;
          P[A] = [...P[A], { allowFailure: !0, callData: "0x", target: r }];
        }
      }
      let k = await Promise.allSettled(
          P.map((i) =>
            (0, u.getAction)(
              e,
              d.readContract,
              "readContract"
            )({
              ...(null === B ? { code: r.multicall3Bytecode } : { address: B }),
              abi: t.multicall3Abi,
              account: p,
              args: [i],
              authorizationList: m,
              blockNumber: g,
              blockOverrides: b,
              blockTag: y,
              functionName: "aggregate3",
              stateOverride: v,
            })
          )
        ),
        I = [];
      for (let e = 0; e < k.length; e++) {
        let t = k[e];
        if ("rejected" === t.status) {
          if (!h) throw t.reason;
          for (let r = 0; r < P[e].length; r++)
            I.push({ status: "failure", error: t.reason, result: void 0 });
          continue;
        }
        let r = t.value;
        for (let t = 0; t < r.length; t++) {
          let { returnData: n, success: o } = r[t],
            { callData: c } = P[e][t],
            { abi: u, address: d, functionName: f, args: p } = w[I.length];
          try {
            if ("0x" === c) throw new i.AbiDecodingZeroDataError();
            if (!o) throw new a.RawContractError({ data: n });
            let e = (0, s.decodeFunctionResult)({
              abi: u,
              args: p,
              data: n,
              functionName: f,
            });
            I.push(h ? { result: e, status: "success" } : e);
          } catch (t) {
            let e = (0, l.getContractError)(t, {
              abi: u,
              address: d,
              args: p,
              docsPath: "/docs/contract/multicall",
              functionName: f,
            });
            if (!h) throw e;
            I.push({ error: e, result: void 0, status: "failure" });
          }
        }
      }
      if (I.length !== w.length)
        throw new n.BaseError("multicall results mismatch");
      return I;
    }
    e.s(["multicall", () => f], 980020);
    var p = e.i(276597),
      m = e.i(140315),
      h = e.i(689617),
      g = e.i(695670),
      b = e.i(964564),
      y = e.i(795001),
      v = e.i(611319),
      w = e.i(984538),
      x = e.i(979593),
      E = e.i(152522),
      B = e.i(70333);
    async function P(e, t) {
      let {
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
        blocks: c,
        returnFullTransactions: u,
        traceTransfers: d,
        validation: f,
      } = t;
      try {
        let t = [];
        for (let e of c) {
          let r = e.blockOverrides ? p.toRpc(e.blockOverrides) : void 0,
            i = e.calls.map((e) => {
              let t = e.account ? (0, m.parseAccount)(e.account) : void 0,
                r = e.abi ? (0, o.encodeFunctionData)(e) : e.data,
                i = {
                  ...e,
                  account: t,
                  data: e.dataSuffix
                    ? (0, g.concat)([r || "0x", e.dataSuffix])
                    : r,
                  from: e.from ?? t?.address,
                };
              return (
                (0, B.assertRequest)(i), (0, x.formatTransactionRequest)(i)
              );
            }),
            n = e.stateOverrides
              ? (0, E.serializeStateOverride)(e.stateOverrides)
              : void 0;
          t.push({ blockOverrides: r, calls: i, stateOverrides: n });
        }
        let h = "bigint" == typeof r ? (0, b.numberToHex)(r) : void 0;
        return (
          await e.request({
            method: "eth_simulateV1",
            params: [
              {
                blockStateCalls: t,
                returnFullTransactions: u,
                traceTransfers: d,
                validation: f,
              },
              h || n,
            ],
          })
        ).map((e, t) => ({
          ...(0, v.formatBlock)(e),
          calls: e.calls.map((e, r) => {
            let { abi: n, args: o, functionName: u, to: d } = c[t].calls[r],
              f = e.error?.data ?? e.returnData,
              p = BigInt(e.gasUsed),
              m = e.logs?.map((e) => (0, w.formatLog)(e)),
              h = "0x1" === e.status ? "success" : "failure",
              g =
                n && "success" === h && "0x" !== f
                  ? (0, s.decodeFunctionResult)({
                      abi: n,
                      data: f,
                      functionName: u,
                    })
                  : null,
              b = (() => {
                let e;
                if (
                  "success" !== h &&
                  ("0x" === f
                    ? (e = new i.AbiDecodingZeroDataError())
                    : f && (e = new a.RawContractError({ data: f })),
                  e)
                )
                  return (0, l.getContractError)(e, {
                    abi: n ?? [],
                    address: d ?? "0x",
                    args: o,
                    functionName: u ?? "<unknown>",
                  });
              })();
            return {
              data: f,
              gasUsed: p,
              logs: m,
              status: h,
              ...("success" === h ? { result: g } : { error: b }),
            };
          }),
        }));
      } catch (t) {
        let e = (0, y.getNodeError)(t, {});
        if (e instanceof h.UnknownNodeError) throw t;
        throw e;
      }
    }
    e.s(["simulateBlocks", () => P], 416409);
  },
  996641,
  (e) => {
    "use strict";
    var t = e.i(720473),
      r = e.i(927367),
      i = e.i(719433),
      n = e.i(67116);
    function a(e) {
      let a;
      if ("string" == typeof e) a = (0, n.parseSignature)(e);
      else {
        let t = (0, i.parseStructs)(e),
          s = e.length;
        for (let i = 0; i < s; i++) {
          let s = e[i];
          if (!(0, r.isStructSignature)(s)) {
            a = (0, n.parseSignature)(s, t);
            break;
          }
        }
      }
      if (!a) throw new t.InvalidAbiItemError({ signature: e });
      return a;
    }
    e.s(["parseAbiItem", () => a]);
  },
  855294,
  817284,
  385892,
  686383,
  (e) => {
    "use strict";
    var t = e.i(601238),
      r = e.i(996641),
      i = e.i(499359),
      n = e.i(96157),
      a = e.i(198537),
      s = e.i(637938),
      o = e.i(177089);
    function c(e, t = {}) {
      let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
        i = (0, n.keccak_256)(s.from(e));
      return "Bytes" === r ? i : o.fromBytes(i);
    }
    function l(e, t = {}) {
      let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
        i = (0, a.sha256)(s.from(e));
      return "Bytes" === r ? i : o.fromBytes(i);
    }
    function u(e) {
      return o.validate(e) && 32 === o.size(e);
    }
    e.s(["keccak256", () => c, "sha256", () => l, "validate", () => u], 817284);
    class d extends Map {
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
    let f = { checksum: new d(8192) }.checksum;
    var p = i,
      m = i,
      h = e.i(120076);
    function g(e, t = {}) {
      let { compressed: r } = t,
        { prefix: i, x: n, y: a } = e;
      if (!1 === r || ("bigint" == typeof n && "bigint" == typeof a)) {
        if (4 !== i) throw new E({ prefix: i, cause: new P() });
        return;
      }
      if (!0 === r || ("bigint" == typeof n && void 0 === a)) {
        if (3 !== i && 2 !== i) throw new E({ prefix: i, cause: new B() });
        return;
      }
      throw new x({ publicKey: e });
    }
    function b(e) {
      let t = (() => {
        if (o.validate(e)) return y(e);
        if (s.validate(e)) {
          var t;
          return (t = e), y(o.fromBytes(t));
        }
        let { prefix: r, x: i, y: n } = e;
        return "bigint" == typeof i && "bigint" == typeof n
          ? { prefix: r ?? 4, x: i, y: n }
          : { prefix: r, x: i };
      })();
      return g(t), t;
    }
    function y(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new A({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(o.slice(e, 0, 32)),
          y: BigInt(o.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let t = Number(o.slice(e, 0, 1));
        return {
          prefix: t,
          x: BigInt(o.slice(e, 1, 33)),
          y: BigInt(o.slice(e, 33, 65)),
        };
      }
      return { prefix: Number(o.slice(e, 0, 1)), x: BigInt(o.slice(e, 1, 33)) };
    }
    function v(e, t = {}) {
      return s.fromHex(w(e, t));
    }
    function w(e, t = {}) {
      g(e);
      let { prefix: r, x: i, y: n } = e,
        { includePrefix: a = !0 } = t;
      return o.concat(
        a ? o.fromNumber(r, { size: 1 }) : "0x",
        o.fromNumber(i, { size: 32 }),
        "bigint" == typeof n ? o.fromNumber(n, { size: 32 }) : "0x"
      );
    }
    class x extends m.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${h.stringify(e)}\` is not a valid public key.`, {
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
    class E extends m.BaseError {
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
    class B extends m.BaseError {
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
    class P extends m.BaseError {
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
    class A extends m.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${o.size(o.from(e))} bytes.`,
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
    e.s(
      [
        "from",
        () => b,
        "fromHex",
        () => y,
        "toBytes",
        () => v,
        "toHex",
        () => w,
      ],
      385892
    );
    let T = /^0x[a-fA-F0-9]{40}$/;
    function k(e, t = {}) {
      let { strict: r = !0 } = t;
      if (!T.test(e)) throw new C({ address: e, cause: new S() });
      if (r) {
        if (e.toLowerCase() === e) return;
        if (I(e) !== e) throw new C({ address: e, cause: new z() });
      }
    }
    function I(e) {
      if (f.has(e)) return f.get(e);
      k(e, { strict: !1 });
      let t = e.substring(2).toLowerCase(),
        r = c(s.fromString(t), { as: "Bytes" }),
        i = t.split("");
      for (let e = 0; e < 40; e += 2)
        r[e >> 1] >> 4 >= 8 && i[e] && (i[e] = i[e].toUpperCase()),
          (15 & r[e >> 1]) >= 8 &&
            i[e + 1] &&
            (i[e + 1] = i[e + 1].toUpperCase());
      let n = `0x${i.join("")}`;
      return f.set(e, n), n;
    }
    function N(e, t = {}) {
      let r = c(`0x${w(e).slice(4)}`).substring(26);
      return (function (e, t = {}) {
        let { checksum: r = !1 } = t;
        return (k(e), r) ? I(e) : e;
      })(`0x${r}`, t);
    }
    function F(e, t) {
      return (
        k(e, { strict: !1 }),
        k(t, { strict: !1 }),
        e.toLowerCase() === t.toLowerCase()
      );
    }
    function R(e, t = {}) {
      let { strict: r = !0 } = t ?? {};
      try {
        return k(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class C extends p.BaseError {
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
    class S extends p.BaseError {
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
    class z extends p.BaseError {
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
    function G(e) {
      let t = !0,
        r = "",
        n = 0,
        a = "",
        s = !1;
      for (let i = 0; i < e.length; i++) {
        let o = e[i];
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
              s = !0;
              break;
            }
            continue;
          }
          if (" " === o) {
            "," !== e[i - 1] && "," !== r && ",(" !== r && ((r = ""), (t = !1));
            continue;
          }
          (a += o), (r += o);
        }
      }
      if (!s) throw new i.BaseError("Unable to normalize signature.");
      return a;
    }
    function H(e, t = {}) {
      let { prepare: i = !0 } = t,
        n = Array.isArray(e) || "string" == typeof e ? r.parseAbiItem(e) : e;
      return { ...n, ...(i ? { hash: U(n) } : {}) };
    }
    function L(e, t, r) {
      let i,
        { args: n = [], prepare: a = !0 } = r ?? {},
        s = o.validate(t, { strict: !1 }),
        c = e.filter((e) =>
          s
            ? "function" === e.type || "error" === e.type
              ? $(e) === o.slice(t, 0, 4)
              : "event" === e.type && U(e) === t
            : "name" in e && e.name === t
        );
      if (0 === c.length) throw new M({ name: t });
      if (1 === c.length) return { ...c[0], ...(a ? { hash: U(c[0]) } : {}) };
      for (let e of c) {
        if ("inputs" in e) {
          if (!n || 0 === n.length) {
            if (!e.inputs || 0 === e.inputs.length)
              return { ...e, ...(a ? { hash: U(e) } : {}) };
            continue;
          }
          if (
            e.inputs &&
            0 !== e.inputs.length &&
            e.inputs.length === n.length &&
            n.every((t, r) => {
              let i = "inputs" in e && e.inputs[r];
              return (
                !!i &&
                (function e(t, r) {
                  let i = typeof t,
                    n = r.type;
                  switch (n) {
                    case "address":
                      return R(t, { strict: !1 });
                    case "bool":
                      return "boolean" === i;
                    case "function":
                    case "string":
                      return "string" === i;
                    default:
                      if ("tuple" === n && "components" in r)
                        return Object.values(r.components).every((r, i) =>
                          e(Object.values(t)[i], r)
                        );
                      if (
                        /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                          n
                        )
                      )
                        return "number" === i || "bigint" === i;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))
                        return "string" === i || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))
                        return (
                          Array.isArray(t) &&
                          t.every((t) =>
                            e(t, {
                              ...r,
                              type: n.replace(/(\[[0-9]{0,}\])$/, ""),
                            })
                          )
                        );
                      return !1;
                  }
                })(t, i)
              );
            })
          ) {
            if (i && "inputs" in i && i.inputs) {
              let t = (function e(t, r, i) {
                for (let n in t) {
                  let a = t[n],
                    s = r[n];
                  if (
                    "tuple" === a.type &&
                    "tuple" === s.type &&
                    "components" in a &&
                    "components" in s
                  )
                    return e(a.components, s.components, i[n]);
                  let o = [a.type, s.type];
                  if (
                    (o.includes("address") && o.includes("bytes20")) ||
                    (((o.includes("address") && o.includes("string")) ||
                      (o.includes("address") && o.includes("bytes"))) &&
                      R(i[n], { strict: !1 }))
                  )
                    return o;
                }
              })(e.inputs, i.inputs, n);
              if (t)
                throw new D(
                  { abiItem: e, type: t[0] },
                  { abiItem: i, type: t[1] }
                );
            }
            i = e;
          }
        }
      }
      let l = (() => {
        if (i) return i;
        let [e, ...t] = c;
        return { ...e, overloads: t };
      })();
      if (!l) throw new M({ name: t });
      return { ...l, ...(a ? { hash: U(l) } : {}) };
    }
    function $(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return L(t, r);
        }
        return e[0];
      })();
      return o.slice(U(t), 0, 4);
    }
    function U(...e) {
      let r = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return L(t, r);
        }
        return e[0];
      })();
      return "string" != typeof r && "hash" in r && r.hash
        ? r.hash
        : c(
            o.fromString(
              (function (...e) {
                let r = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return L(t, r);
                  }
                  return e[0];
                })();
                return G("string" == typeof r ? r : t.formatAbiItem(r));
              })(r)
            )
          );
    }
    e.s(
      [
        "assert",
        () => k,
        "checksum",
        () => I,
        "fromPublicKey",
        () => N,
        "isEqual",
        () => F,
        "validate",
        () => R,
      ],
      686383
    );
    class D extends i.BaseError {
      constructor(e, r) {
        super("Found ambiguous types in overloaded ABI Items.", {
          metaMessages: [
            `\`${e.type}\` in \`${G(t.formatAbiItem(e.abiItem))}\`, and`,
            `\`${r.type}\` in \`${G(t.formatAbiItem(r.abiItem))}\``,
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
    class M extends i.BaseError {
      constructor({ name: e, data: t, type: r = "item" }) {
        const i = e ? ` with name "${e}"` : t ? ` with data "${t}"` : "";
        super(`ABI ${r}${i} not found.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError",
          });
      }
    }
    class q extends i.BaseError {
      constructor({ data: e }) {
        super(
          `Selector size is invalid. Expected 4 bytes. Received ${o.size(
            e
          )} bytes ("${e}").`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.InvalidSelectorSizeError",
          });
      }
    }
    e.s(
      [
        "InvalidSelectorSizeError",
        () => q,
        "NotFoundError",
        () => M,
        "from",
        () => H,
        "fromAbi",
        () => L,
        "getSelector",
        () => $,
      ],
      855294
    );
  },
  24746,
  (e) => {
    "use strict";
    var t = e.i(278488),
      r = e.i(927367),
      i = e.i(719433),
      n = e.i(67116);
    function a(e) {
      let a = [];
      if ("string" == typeof e) {
        let t = (0, n.splitParameters)(e),
          i = t.length;
        for (let e = 0; e < i; e++)
          a.push((0, n.parseAbiParameter)(t[e], { modifiers: r.modifiers }));
      } else {
        let t = (0, i.parseStructs)(e),
          s = e.length;
        for (let i = 0; i < s; i++) {
          let s = e[i];
          if ((0, r.isStructSignature)(s)) continue;
          let o = (0, n.splitParameters)(s),
            c = o.length;
          for (let e = 0; e < c; e++)
            a.push(
              (0, n.parseAbiParameter)(o[e], {
                modifiers: r.modifiers,
                structs: t,
              })
            );
        }
      }
      if (0 === a.length) throw new t.InvalidAbiParametersError({ params: e });
      return a;
    }
    e.s(["parseAbiParameters", () => a]);
  },
  283449,
  504319,
  626206,
  711547,
  795664,
  (e) => {
    "use strict";
    var t = e.i(855294);
    e.s(
      [
        "ArrayLengthMismatchError",
        () => T,
        "BytesSizeMismatchError",
        () => k,
        "InvalidArrayError",
        () => N,
        "InvalidTypeError",
        () => F,
        "decode",
        () => w,
        "encode",
        () => x,
        "from",
        () => B,
      ],
      711547
    );
    var r = e.i(558240),
      i = e.i(24746),
      n = e.i(686383),
      a = e.i(637938),
      s = e.i(499359),
      o = e.i(177089);
    let c = /^(.*)\[([0-9]*)\]$/,
      l = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      u =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    e.s(
      [
        "arrayRegex",
        0,
        c,
        "bytesRegex",
        0,
        l,
        "integerRegex",
        0,
        u,
        "maxUint256",
        0,
        2n ** 256n - 1n,
      ],
      504319
    );
    function d(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: i, encoded: n } = e[r];
        i ? (t += 32) : (t += o.size(n));
      }
      let r = [],
        i = [],
        n = 0;
      for (let a = 0; a < e.length; a++) {
        let { dynamic: s, encoded: c } = e[a];
        s
          ? (r.push(o.fromNumber(t + n, { size: 32 })),
            i.push(c),
            (n += o.size(c)))
          : r.push(c);
      }
      return o.concat(...r, ...i);
    }
    function f(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function p(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(p);
      let r = f(e.type);
      return !!(r && p({ ...e, type: r[1] }));
    }
    var m = s;
    let h = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new v({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new y({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new b({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new b({ offset: e });
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
    function g(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(h);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    class b extends m.BaseError {
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
    class y extends m.BaseError {
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
    class v extends m.BaseError {
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
    function w(e, t, r = {}) {
      let { as: i = "Array", checksumAddress: s = !1 } = r,
        c = "string" == typeof t ? a.fromHex(t) : t,
        l = g(c);
      if (0 === a.size(c) && e.length > 0) throw new A();
      if (a.size(c) && 32 > a.size(c))
        throw new P({
          data: "string" == typeof t ? t : o.fromBytes(t),
          parameters: e,
          size: a.size(c),
        });
      let u = 0,
        d = "Array" === i ? [] : {};
      for (let t = 0; t < e.length; ++t) {
        let r = e[t];
        l.setPosition(u);
        let [c, m] = (function e(t, r, i) {
          var s, c, l;
          let { checksumAddress: u, staticPosition: d } = i,
            m = f(r.type);
          if (m) {
            let [i, n] = m;
            return (function (t, r, i) {
              let { checksumAddress: n, length: s, staticPosition: o } = i;
              if (!s) {
                let i = o + a.toNumber(t.readBytes(32)),
                  s = i + 32;
                t.setPosition(i);
                let c = a.toNumber(t.readBytes(32)),
                  l = p(r),
                  u = 0,
                  d = [];
                for (let i = 0; i < c; ++i) {
                  t.setPosition(s + (l ? 32 * i : u));
                  let [a, o] = e(t, r, {
                    checksumAddress: n,
                    staticPosition: s,
                  });
                  (u += o), d.push(a);
                }
                return t.setPosition(o + 32), [d, 32];
              }
              if (p(r)) {
                let i = o + a.toNumber(t.readBytes(32)),
                  c = [];
                for (let a = 0; a < s; ++a) {
                  t.setPosition(i + 32 * a);
                  let [s] = e(t, r, { checksumAddress: n, staticPosition: i });
                  c.push(s);
                }
                return t.setPosition(o + 32), [c, 32];
              }
              let c = 0,
                l = [];
              for (let i = 0; i < s; ++i) {
                let [i, a] = e(t, r, {
                  checksumAddress: n,
                  staticPosition: o + c,
                });
                (c += a), l.push(i);
              }
              return [l, c];
            })(
              t,
              { ...r, type: n },
              { checksumAddress: u, length: i, staticPosition: d }
            );
          }
          if ("tuple" === r.type)
            return (function (t, r, i) {
              let { checksumAddress: n, staticPosition: s } = i,
                o =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                c = o ? [] : {},
                l = 0;
              if (p(r)) {
                let i = s + a.toNumber(t.readBytes(32));
                for (let a = 0; a < r.components.length; ++a) {
                  let s = r.components[a];
                  t.setPosition(i + l);
                  let [u, d] = e(t, s, {
                    checksumAddress: n,
                    staticPosition: i,
                  });
                  (l += d), (c[o ? a : s?.name] = u);
                }
                return t.setPosition(s + 32), [c, 32];
              }
              for (let i = 0; i < r.components.length; ++i) {
                let a = r.components[i],
                  [u, d] = e(t, a, { checksumAddress: n, staticPosition: s });
                (c[o ? i : a?.name] = u), (l += d);
              }
              return [c, l];
            })(t, r, { checksumAddress: u, staticPosition: d });
          if ("address" === r.type)
            return (function (e, t = {}) {
              let r,
                { checksum: i = !1 } = t,
                s = e.readBytes(32);
              return [
                ((r = o.fromBytes(a.slice(s, -20))), i ? n.checksum(r) : r),
                32,
              ];
            })(t, { checksum: u });
          if ("bool" === r.type) {
            return (s = t), [a.toBoolean(s.readBytes(32), { size: 32 }), 32];
          }
          if (r.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [i, n] = t.type.split("bytes");
              if (!n) {
                let t = a.toNumber(e.readBytes(32));
                e.setPosition(r + t);
                let i = a.toNumber(e.readBytes(32));
                if (0 === i) return e.setPosition(r + 32), ["0x", 32];
                let n = e.readBytes(i);
                return e.setPosition(r + 32), [o.fromBytes(n), 32];
              }
              return [o.fromBytes(e.readBytes(Number.parseInt(n, 10), 32)), 32];
            })(t, r, { staticPosition: d });
          if (r.type.startsWith("uint") || r.type.startsWith("int")) {
            let e, i, n;
            return (
              (c = t),
              (e = (l = r).type.startsWith("int")),
              (i = Number.parseInt(l.type.split("int")[1] || "256", 10)),
              (n = c.readBytes(32)),
              [
                i > 48
                  ? a.toBigInt(n, { signed: e })
                  : a.toNumber(n, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === r.type)
            return (function (e, { staticPosition: t }) {
              let r = a.toNumber(e.readBytes(32));
              e.setPosition(t + r);
              let i = a.toNumber(e.readBytes(32));
              if (0 === i) return e.setPosition(t + 32), ["", 32];
              let n = e.readBytes(i, 32),
                s = a.toString(a.trimLeft(n));
              return e.setPosition(t + 32), [s, 32];
            })(t, { staticPosition: d });
          throw new F(r.type);
        })(l, r, { checksumAddress: s, staticPosition: 0 });
        (u += m), "Array" === i ? d.push(c) : (d[r.name ?? t] = c);
      }
      return d;
    }
    function x(e, t, r) {
      let { checksumAddress: i = !1 } = r ?? {};
      if (e.length !== t.length)
        throw new I({ expectedLength: e.length, givenLength: t.length });
      let a = d(
        (function ({ checksumAddress: e, parameters: t, values: r }) {
          let i = [];
          for (let a = 0; a < t.length; a++)
            i.push(
              (function e({ checksumAddress: t = !1, parameter: r, value: i }) {
                let a = f(r.type);
                if (a) {
                  let [n, s] = a;
                  return (function (t, r) {
                    let { checksumAddress: i, length: n, parameter: a } = r,
                      s = null === n;
                    if (!Array.isArray(t)) throw new N(t);
                    if (!s && t.length !== n)
                      throw new T({
                        expectedLength: n,
                        givenLength: t.length,
                        type: `${a.type}[${n}]`,
                      });
                    let c = !1,
                      l = [];
                    for (let r = 0; r < t.length; r++) {
                      let n = e({
                        checksumAddress: i,
                        parameter: a,
                        value: t[r],
                      });
                      n.dynamic && (c = !0), l.push(n);
                    }
                    if (s || c) {
                      let e = d(l);
                      if (s) {
                        let t = o.fromNumber(l.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: l.length > 0 ? o.concat(t, e) : t,
                        };
                      }
                      if (c) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: o.concat(...l.map(({ encoded: e }) => e)),
                    };
                  })(i, {
                    checksumAddress: t,
                    length: n,
                    parameter: { ...r, type: s },
                  });
                }
                if ("tuple" === r.type)
                  return (function (t, r) {
                    let { checksumAddress: i, parameter: n } = r,
                      a = !1,
                      s = [];
                    for (let r = 0; r < n.components.length; r++) {
                      let o = n.components[r],
                        c = Array.isArray(t) ? r : o.name,
                        l = e({
                          checksumAddress: i,
                          parameter: o,
                          value: t[c],
                        });
                      s.push(l), l.dynamic && (a = !0);
                    }
                    return {
                      dynamic: a,
                      encoded: a
                        ? d(s)
                        : o.concat(...s.map(({ encoded: e }) => e)),
                    };
                  })(i, { checksumAddress: t, parameter: r });
                if ("address" === r.type)
                  return (function (e, t) {
                    let { checksum: r = !1 } = t;
                    return (
                      n.assert(e, { strict: r }),
                      { dynamic: !1, encoded: o.padLeft(e.toLowerCase()) }
                    );
                  })(i, { checksum: t });
                if ("bool" === r.type) {
                  var c = i;
                  if ("boolean" != typeof c)
                    throw new s.BaseError(
                      `Invalid boolean value: "${c}" (type: ${typeof c}). Expected: \`true\` or \`false\`.`
                    );
                  return { dynamic: !1, encoded: o.padLeft(o.fromBoolean(c)) };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = u.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r }) {
                    if ("number" == typeof r) {
                      let i = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        n = t ? -i - 1n : 0n;
                      if (e > i || e < n)
                        throw new o.IntegerOutOfRangeError({
                          max: i.toString(),
                          min: n.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: o.fromNumber(e, { size: 32, signed: t }),
                    };
                  })(i, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { type: t }) {
                    let [, r] = t.split("bytes"),
                      i = o.size(e);
                    if (!r) {
                      let t = e;
                      return (
                        i % 32 != 0 &&
                          (t = o.padRight(
                            t,
                            32 * Math.ceil((e.length - 2) / 2 / 32)
                          )),
                        {
                          dynamic: !0,
                          encoded: o.concat(
                            o.padLeft(o.fromNumber(i, { size: 32 })),
                            t
                          ),
                        }
                      );
                    }
                    if (i !== Number.parseInt(r, 10))
                      throw new k({
                        expectedSize: Number.parseInt(r, 10),
                        value: e,
                      });
                    return { dynamic: !1, encoded: o.padRight(e) };
                  })(i, { type: r.type });
                if ("string" === r.type) {
                  var l = i;
                  let e = o.fromString(l),
                    t = Math.ceil(o.size(e) / 32),
                    r = [];
                  for (let i = 0; i < t; i++)
                    r.push(o.padRight(o.slice(e, 32 * i, (i + 1) * 32)));
                  return {
                    dynamic: !0,
                    encoded: o.concat(
                      o.padRight(o.fromNumber(o.size(e), { size: 32 })),
                      ...r
                    ),
                  };
                }
                throw new F(r.type);
              })({ checksumAddress: e, parameter: t[a], value: r[a] })
            );
          return i;
        })({ checksumAddress: i, parameters: e, values: t })
      );
      return 0 === a.length ? "0x" : a;
    }
    function E(e, t) {
      if (e.length !== t.length)
        throw new I({ expectedLength: e.length, givenLength: t.length });
      let r = [];
      for (let i = 0; i < e.length; i++) {
        let n = e[i],
          a = t[i];
        r.push(E.encode(n, a));
      }
      return o.concat(...r);
    }
    function B(e) {
      return (Array.isArray(e) && "string" == typeof e[0]) ||
        "string" == typeof e
        ? i.parseAbiParameters(e)
        : e;
    }
    e.s(["create", () => g], 626206),
      ((E || (E = {})).encode = function e(t, r, i = !1) {
        if ("address" === t)
          return n.assert(r), o.padLeft(r.toLowerCase(), 32 * !!i);
        if ("string" === t) return o.fromString(r);
        if ("bytes" === t) return r;
        if ("bool" === t) return o.padLeft(o.fromBoolean(r), i ? 32 : 1);
        let a = t.match(u);
        if (a) {
          let [e, t, n = "256"] = a,
            s = Number.parseInt(n, 10) / 8;
          return o.fromNumber(r, { size: i ? 32 : s, signed: "int" === t });
        }
        let s = t.match(l);
        if (s) {
          let [e, t] = s;
          if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
            throw new k({ expectedSize: Number.parseInt(t, 10), value: r });
          return o.padRight(r, 32 * !!i);
        }
        let d = t.match(c);
        if (d && Array.isArray(r)) {
          let [t, i] = d,
            n = [];
          for (let t = 0; t < r.length; t++) n.push(e(i, r[t], !0));
          return 0 === n.length ? "0x" : o.concat(...n);
        }
        throw new F(t);
      });
    class P extends s.BaseError {
      constructor({ data: e, parameters: t, size: i }) {
        super(`Data size of ${i} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${r.formatAbiParameters(t)})`,
            `Data:   ${e} (${i} bytes)`,
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
    class A extends s.BaseError {
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
    class T extends s.BaseError {
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
    class k extends s.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${o.size(
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
    class I extends s.BaseError {
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
    class N extends s.BaseError {
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
    class F extends s.BaseError {
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
    function R(e, r = {}) {
      return t.from(e, r);
    }
    function C(e, r, i) {
      let n = t.fromAbi(e, r, i);
      if ("function" !== n.type)
        throw new t.NotFoundError({ name: r, type: "function" });
      return n;
    }
    var S = e.i(140315);
    let z = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      G = "0x0000000000000000000000000000000000000000";
    e.s(["ethAddress", 0, z, "zeroAddress", 0, G], 795664);
    var H = e.i(282591),
      L = e.i(86972),
      $ = e.i(734451),
      U = e.i(190149),
      D = e.i(444294),
      M = e.i(416409);
    async function q(e, r) {
      let {
          blockNumber: i,
          blockTag: n,
          calls: a,
          stateOverrides: s,
          traceAssetChanges: c,
          traceTransfers: l,
          validation: u,
        } = r,
        d = r.account ? (0, S.parseAccount)(r.account) : void 0;
      if (c && !d)
        throw new L.BaseError(
          "`account` is required when `traceAssetChanges` is true"
        );
      let f = d
          ? (function (...e) {
              let [r, i] = (() => {
                  if (Array.isArray(e[0])) {
                    let [r, i] = e;
                    return [
                      (function (e) {
                        let r = e.find((e) => "constructor" === e.type);
                        if (!r)
                          throw new t.NotFoundError({ name: "constructor" });
                        return r;
                      })(r),
                      i,
                    ];
                  }
                  return e;
                })(),
                { bytecode: n, args: a } = i;
              return o.concat(
                n,
                r.inputs?.length && a?.length ? x(r.inputs, a) : "0x"
              );
            })(t.from("constructor(bytes, bytes)"), {
              bytecode: H.deploylessCallViaBytecodeBytecode,
              args: [
                "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                (function (...e) {
                  var r;
                  let [i, n = []] = (() => {
                      if (Array.isArray(e[0])) {
                        let [t, r, i] = e;
                        return [C(t, r, { args: i }), i];
                      }
                      let [t, r] = e;
                      return [t, r];
                    })(),
                    { overloads: a } = i,
                    s = a ? C([i, ...a], i.name, { args: n }) : i,
                    c = ((r = s), t.getSelector(r)),
                    l = n.length > 0 ? x(s.inputs, n) : void 0;
                  return l ? o.concat(c, l) : c;
                })(R("function getBalance(address)"), [d.address]),
              ],
            })
          : void 0,
        p = c
          ? await Promise.all(
              r.calls.map(async (t) => {
                if (!t.data && !t.abi) return;
                let { accessList: r } = await (0, D.createAccessList)(e, {
                  account: d.address,
                  ...t,
                  data: t.abi ? (0, $.encodeFunctionData)(t) : t.data,
                });
                return r.map(({ address: e, storageKeys: t }) =>
                  t.length > 0 ? e : null
                );
              })
            ).then((e) => e.flat().filter(Boolean))
          : [],
        m = await (0, M.simulateBlocks)(e, {
          blockNumber: i,
          blockTag: n,
          blocks: [
            ...(c
              ? [
                  { calls: [{ data: f }], stateOverrides: s },
                  {
                    calls: p.map((e, t) => ({
                      abi: [R("function balanceOf(address) returns (uint256)")],
                      functionName: "balanceOf",
                      args: [d.address],
                      to: e,
                      from: G,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: G, nonce: 0 }],
                  },
                ]
              : []),
            {
              calls: [...a, { to: G }].map((e) => ({ ...e, from: d?.address })),
              stateOverrides: s,
            },
            ...(c
              ? [
                  { calls: [{ data: f }] },
                  {
                    calls: p.map((e, t) => ({
                      abi: [R("function balanceOf(address) returns (uint256)")],
                      functionName: "balanceOf",
                      args: [d.address],
                      to: e,
                      from: G,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: G, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [R("function decimals() returns (uint256)")],
                      functionName: "decimals",
                      from: G,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: G, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [R("function tokenURI(uint256) returns (string)")],
                      functionName: "tokenURI",
                      args: [0n],
                      from: G,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: G, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [R("function symbol() returns (string)")],
                      functionName: "symbol",
                      from: G,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: G, nonce: 0 }],
                  },
                ]
              : []),
          ],
          traceTransfers: l,
          validation: u,
        }),
        h = c ? m[2] : m[0],
        [g, b, , y, v, w, E, B] = c ? m : [],
        { calls: P, ...A } = h,
        T = P.slice(0, -1) ?? [],
        k = [...(g?.calls ?? []), ...(b?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, U.hexToBigInt)(e.data) : null
        ),
        I = [...(y?.calls ?? []), ...(v?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, U.hexToBigInt)(e.data) : null
        ),
        N = (w?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        F = (B?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        q = (E?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        O = [];
      for (let [e, t] of I.entries()) {
        let r = k[e];
        if ("bigint" != typeof t || "bigint" != typeof r) continue;
        let i = N[e - 1],
          n = F[e - 1],
          a = q[e - 1],
          s =
            0 === e
              ? { address: z, decimals: 18, symbol: "ETH" }
              : {
                  address: p[e - 1],
                  decimals: a || i ? Number(i ?? 1) : void 0,
                  symbol: n ?? void 0,
                };
        O.some((e) => e.token.address === s.address) ||
          O.push({ token: s, value: { pre: r, post: t, diff: t - r } });
      }
      return { assetChanges: O, block: A, results: T };
    }
    e.s(["simulateCalls", () => q], 283449);
  },
  197886,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(234875),
      i = e.i(734451),
      n = e.i(453462),
      a = e.i(114245),
      s = e.i(557051);
    async function o(e, o) {
      let {
          abi: c,
          address: l,
          args: u,
          functionName: d,
          dataSuffix: f = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...p
        } = o,
        m = p.account ? (0, t.parseAccount)(p.account) : e.account,
        h = (0, i.encodeFunctionData)({ abi: c, args: u, functionName: d });
      try {
        let { data: t } = await (0, a.getAction)(
            e,
            s.call,
            "call"
          )({
            batch: !1,
            data: `${h}${f ? f.replace("0x", "") : ""}`,
            to: l,
            ...p,
            account: m,
          }),
          i = (0, r.decodeFunctionResult)({
            abi: c,
            args: u,
            functionName: d,
            data: t || "0x",
          }),
          n = c.filter((e) => "name" in e && e.name === o.functionName);
        return {
          result: i,
          request: {
            abi: n,
            address: l,
            args: u,
            dataSuffix: f,
            functionName: d,
            ...p,
            account: m,
          },
        };
      } catch (e) {
        throw (0, n.getContractError)(e, {
          abi: c,
          address: l,
          args: u,
          docsPath: "/docs/contract/simulateContract",
          functionName: d,
          sender: m?.address,
        });
      }
    }
    e.s(["simulateContract", () => o]);
  },
  789302,
  (e) => {
    "use strict";
    async function t(e, { filter: t }) {
      return t.request({ method: "eth_uninstallFilter", params: [t.id] });
    }
    e.s(["uninstallFilter", () => t]);
  },
  724048,
  543110,
  624383,
  555587,
  513838,
  986530,
  894426,
  197941,
  674984,
  217189,
  23440,
  (e) => {
    "use strict";
    var t = e.i(711547),
      r = e.i(499359),
      i = e.i(177089);
    let n =
      "0x6492649264926492649264926492649264926492649264926492649264926492";
    function a(e) {
      if (i.slice(e, -32) !== n) throw new u(e);
    }
    function s(e) {
      return "string" == typeof e ? o(e) : e;
    }
    function o(e) {
      a(e);
      let [r, i, n] = t.decode(t.from("address, bytes, bytes"), e);
      return { data: i, signature: n, to: r };
    }
    function c(e) {
      let { data: r, signature: a, to: s } = e;
      return i.concat(t.encode(t.from("address, bytes, bytes"), [s, r, a]), n);
    }
    function l(e) {
      try {
        return a(e), !0;
      } catch {
        return !1;
      }
    }
    class u extends r.BaseError {
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
        () => u,
        "assert",
        () => a,
        "from",
        () => s,
        "magicBytes",
        0,
        n,
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
        () => o,
        "validate",
        () => l,
        "wrap",
        () => c,
      ],
      843282
    );
    var d = e.i(843282),
      d = d,
      f = e.i(817284),
      p = e.i(637938),
      m = e.i(626206);
    function h(e) {
      var t;
      let r, n;
      return (
        (t = e),
        (r = "Hex"),
        (n = (() => {
          if ("string" == typeof t) {
            if (t.length > 3 && t.length % 2 != 0)
              throw new i.InvalidLengthError(t);
            return p.fromHex(t);
          }
          return t;
        })()),
        (function e(t, r = "Hex") {
          if (0 === t.bytes.length)
            return "Hex" === r ? i.fromBytes(t.bytes) : t.bytes;
          let n = t.readByte();
          if ((n < 128 && t.decrementPosition(1), n < 192)) {
            let e = g(t, n, 128),
              a = t.readBytes(e);
            return "Hex" === r ? i.fromBytes(a) : a;
          }
          let a = g(t, n, 192);
          var s = t,
            o = a,
            c = r;
          let l = s.position,
            u = [];
          for (; s.position - l < o; ) u.push(e(s, c));
          return u;
        })(m.create(n, { recursiveReadLimit: 1 / 0 }), r)
      );
    }
    function g(e, t, i) {
      if (128 === i && t < 128) return 1;
      if (t <= i + 55) return t - i;
      if (t === i + 55 + 1) return e.readUint8();
      if (t === i + 55 + 2) return e.readUint16();
      if (t === i + 55 + 3) return e.readUint24();
      if (t === i + 55 + 4) return e.readUint32();
      throw new r.BaseError("Invalid RLP prefix");
    }
    function b(e, t = {}) {
      let { as: r = "Hex" } = t;
      return (function (e, t) {
        let { as: r } = t,
          n = (function e(t) {
            var r, i;
            let n, a, s, o;
            return Array.isArray(t)
              ? ((a = y(
                  (n = (r = t.map((t) => e(t))).reduce(
                    (e, t) => e + t.length,
                    0
                  ))
                )),
                {
                  length: n <= 55 ? 1 + n : 1 + a + n,
                  encode(e) {
                    for (let { encode: t } of (n <= 55
                      ? e.pushByte(192 + n)
                      : (e.pushByte(247 + a),
                        1 === a
                          ? e.pushUint8(n)
                          : 2 === a
                          ? e.pushUint16(n)
                          : 3 === a
                          ? e.pushUint24(n)
                          : e.pushUint32(n)),
                    r))
                      t(e);
                  },
                })
              : ((o = y(
                  (s = "string" == typeof (i = t) ? p.fromHex(i) : i).length
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
          a = m.create(new Uint8Array(n.length));
        return (n.encode(a), "Hex" === r) ? i.fromBytes(a.bytes) : a.bytes;
      })(e, { as: r });
    }
    function y(e) {
      if (e <= 255) return 1;
      if (e <= 65535) return 2;
      if (e <= 0xffffff) return 3;
      if (e <= 0xffffffff) return 4;
      throw new r.BaseError("Length is too large.");
    }
    e.s(["fromHex", () => b, "toHex", () => h], 543110);
    var v = r,
      w = e.i(120076),
      x = e.i(504319);
    function E(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new z({ signature: e });
      if (e.r < 0n || e.r > x.maxUint256) throw new G({ value: e.r });
      if (e.s < 0n || e.s > x.maxUint256) throw new H({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new L({ value: e.yParity });
    }
    function B(e) {
      if (130 !== e.length && 132 !== e.length) throw new S({ signature: e });
      let t = BigInt(i.slice(e, 0, 32)),
        r = BigInt(i.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return R(t);
            } catch {
              throw new L({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function P(e) {
      if (void 0 !== e.r && void 0 !== e.s) return A(e);
    }
    function A(e) {
      let t = (() => {
        var t;
        if ("string" == typeof e) return B(e);
        if (e instanceof Uint8Array) return B(i.fromBytes(e));
        return "string" == typeof e.r
          ? T(e)
          : e.v
          ? { r: (t = e).r, s: t.s, yParity: R(t.v) }
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      })();
      return E(t), t;
    }
    function T(e) {
      let t = (() => {
        let t = e.v ? Number(e.v) : void 0,
          r = e.yParity ? Number(e.yParity) : void 0;
        if (
          ("number" == typeof t && "number" != typeof r && (r = R(t)),
          "number" != typeof r)
        )
          throw new L({ value: e.yParity });
        return r;
      })();
      return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
    }
    function k(e) {
      let [t, r, i] = e;
      return A({
        r: "0x" === r ? 0n : BigInt(r),
        s: "0x" === i ? 0n : BigInt(i),
        yParity: "0x" === t ? 0 : Number(t),
      });
    }
    function I(e) {
      E(e);
      let t = e.r,
        r = e.s;
      return i.concat(
        i.fromNumber(t, { size: 32 }),
        i.fromNumber(r, { size: 32 }),
        "number" == typeof e.yParity
          ? i.fromNumber(C(e.yParity), { size: 1 })
          : "0x"
      );
    }
    function N(e) {
      let { r: t, s: r, yParity: n } = e;
      return {
        r: i.fromNumber(t, { size: 32 }),
        s: i.fromNumber(r, { size: 32 }),
        yParity: 0 === n ? "0x0" : "0x1",
      };
    }
    function F(e) {
      let { r: t, s: r, yParity: n } = e;
      return [
        n ? "0x01" : "0x",
        0n === t ? "0x" : i.trimLeft(i.fromNumber(t)),
        0n === r ? "0x" : i.trimLeft(i.fromNumber(r)),
      ];
    }
    function R(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new $({ value: e });
    }
    function C(e) {
      if (0 === e) return 27;
      if (1 === e) return 28;
      throw new L({ value: e });
    }
    class S extends v.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${i.size(i.from(e))} bytes.`,
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
    class z extends v.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${w.stringify(
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
    class G extends v.BaseError {
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
    class H extends v.BaseError {
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
    class L extends v.BaseError {
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
    class $ extends v.BaseError {
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
    function U(e, t = {}) {
      return "string" == typeof e.chainId ? D(e) : { ...e, ...t.signature };
    }
    function D(e) {
      let { address: t, chainId: r, nonce: i } = e,
        n = P(e);
      return { address: t, chainId: Number(r), nonce: BigInt(i), ...n };
    }
    function M(e) {
      return e.map(D);
    }
    function q(e) {
      return (function (e, t = {}) {
        let { presign: r } = t;
        return f.keccak256(
          i.concat(
            "0x05",
            b(
              (function (e) {
                let { address: t, chainId: r, nonce: n } = e,
                  a = P(e);
                return [
                  r ? i.fromNumber(r) : "0x",
                  t,
                  n ? i.fromNumber(n) : "0x",
                  ...(a ? F(a) : []),
                ];
              })(
                r
                  ? { address: e.address, chainId: e.chainId, nonce: e.nonce }
                  : e
              )
            )
          )
        );
      })(e, { presign: !0 });
    }
    function O(e) {
      let { address: t, chainId: r, nonce: n, ...a } = e;
      return {
        address: t,
        chainId: i.fromNumber(r),
        nonce: i.fromNumber(n),
        ...N(a),
      };
    }
    function _(e) {
      return e.map(O);
    }
    e.s(
      [
        "assert",
        () => E,
        "extract",
        () => P,
        "from",
        () => A,
        "fromHex",
        () => B,
        "fromRpc",
        () => T,
        "fromTuple",
        () => k,
        "toHex",
        () => I,
        "toRpc",
        () => N,
        "toTuple",
        () => F,
        "yParityToV",
        () => C,
      ],
      624383
    ),
      e.s(
        [
          "from",
          () => U,
          "fromRpcList",
          () => M,
          "getSignPayload",
          () => q,
          "toRpcList",
          () => _,
        ],
        555587
      );
    var j = r,
      V = e.i(573612),
      W = e.i(686383),
      K = e.i(385892);
    function Z(e) {
      return W.fromPublicKey(J(e));
    }
    function J(e) {
      let { payload: t, signature: r } = e,
        { r: n, s: a, yParity: s } = r,
        o = new V.secp256k1.Signature(BigInt(n), BigInt(a))
          .addRecoveryBit(s)
          .recoverPublicKey(i.from(t).substring(2));
      return K.from(o);
    }
    function Y(e) {
      let { address: t, hash: r, payload: i, publicKey: n, signature: a } = e;
      return t
        ? W.isEqual(t, Z({ payload: i, signature: a }))
        : V.secp256k1.verify(
            a,
            p.from(i),
            K.toBytes(n),
            ...(r ? [{ prehash: !0, lowS: !0 }] : [])
          );
    }
    V.secp256k1,
      e.s(
        [
          "recoverAddress",
          () => Z,
          "recoverPublicKey",
          () => J,
          "verify",
          () => Y,
        ],
        513838
      );
    let Q =
        "0x8010801080108010801080108010801080108010801080108010801080108010",
      X = t.from(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
    function ee(e) {
      if ("string" == typeof e) {
        if (i.slice(e, -32) !== Q) throw new ea(e);
      } else E(e.authorization);
    }
    function et(e) {
      return "string" == typeof e ? er(e) : e;
    }
    function er(e) {
      ee(e);
      let r = i.toNumber(i.slice(e, -64, -32)),
        n = i.slice(e, -r - 64, -64),
        a = i.slice(e, 0, -r - 64),
        [s, o, c] = t.decode(X, n);
      return {
        authorization: U({
          address: s.delegation,
          chainId: Number(s.chainId),
          nonce: s.nonce,
          yParity: s.yParity,
          r: s.r,
          s: s.s,
        }),
        signature: a,
        ...(c && "0x" !== c ? { data: c, to: o } : {}),
      };
    }
    function ei(e) {
      let { data: r, signature: n } = e;
      ee(e);
      let a = Z({ payload: q(e.authorization), signature: A(e.authorization) }),
        s = t.encode(X, [
          {
            ...e.authorization,
            delegation: e.authorization.address,
            chainId: BigInt(e.authorization.chainId),
          },
          e.to ?? a,
          r ?? "0x",
        ]),
        o = i.fromNumber(i.size(s), { size: 32 });
      return i.concat(n, s, o, Q);
    }
    function en(e) {
      try {
        return ee(e), !0;
      } catch {
        return !1;
      }
    }
    class ea extends j.BaseError {
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
        () => ea,
        "assert",
        () => ee,
        "from",
        () => et,
        "magicBytes",
        0,
        Q,
        "suffixParameters",
        0,
        X,
        "unwrap",
        () => er,
        "validate",
        () => en,
        "wrap",
        () => ei,
      ],
      709577
    );
    var es = e.i(709577);
    e.s(["SignatureErc8010", 0, es], 986530);
    var es = es,
      eo = e.i(470523),
      ec = e.i(282591),
      el = e.i(617714),
      eu = e.i(917422),
      ed = e.i(734451),
      ef = e.i(610155),
      ep = e.i(837794),
      em = e.i(760897);
    async function eh({ address: e, authorization: t, signature: r }) {
      return (0, ep.isAddressEqual)(
        (0, ef.getAddress)(e),
        await (0, em.recoverAuthorizationAddress)({
          authorization: t,
          signature: r,
        })
      );
    }
    var eg = e.i(695670),
      eb = e.i(620136),
      ey = e.i(190149),
      ev = e.i(964564),
      ew = e.i(114245),
      ex = e.i(723151),
      eE = e.i(610467);
    function eB({ r: e, s: t, to: r = "hex", v: i, yParity: n }) {
      let a = (() => {
          if (0 === n || 1 === n) return n;
          if (i && (27n === i || 28n === i || i >= 35n))
            return +(i % 2n === 0n);
          throw Error("Invalid `v` or `yParity` value");
        })(),
        s = `0x${new V.secp256k1.Signature(
          (0, ey.hexToBigInt)(e),
          (0, ey.hexToBigInt)(t)
        ).toCompactHex()}${0 === a ? "1b" : "1c"}`;
      return "hex" === r ? s : (0, eE.hexToBytes)(s);
    }
    e.s(["serializeSignature", () => eB], 894426);
    var eP = e.i(557051),
      eA = e.i(555162),
      eT = e.i(299408);
    async function ek(e, t) {
      let r,
        {
          address: i,
          chain: n = e.chain,
          hash: a,
          erc6492VerifierAddress: s = t.universalSignatureVerifierAddress ??
            n?.contracts?.erc6492Verifier?.address,
          multicallAddress: o = t.multicallAddress ??
            n?.contracts?.multicall3?.address,
          mode: c = "auto",
        } = t;
      if (n?.verifyHash) return await n.verifyHash(e, t);
      let l =
        ((r = t.signature),
        (0, eb.isHex)(r)
          ? r
          : "object" == typeof r && "r" in r && "s" in r
          ? eB(r)
          : (0, ev.bytesToHex)(r));
      try {
        if ("eoa" === c)
          try {
            if (
              (0, ep.isAddressEqual)(
                (0, ef.getAddress)(i),
                await (0, ex.recoverAddress)({ hash: a, signature: l })
              )
            )
              return !0;
          } catch {}
        if (es.validate(l))
          return await eI(e, { ...t, multicallAddress: o, signature: l });
        return await eN(e, { ...t, verifierAddress: s, signature: l });
      } catch (e) {
        if ("eoa" !== c)
          try {
            if (
              (0, ep.isAddressEqual)(
                (0, ef.getAddress)(i),
                await (0, ex.recoverAddress)({ hash: a, signature: l })
              )
            )
              return !0;
          } catch {}
        if (e instanceof eR) return !1;
        throw e;
      }
    }
    async function eI(e, t) {
      let {
          address: r,
          blockNumber: i,
          blockTag: n,
          hash: a,
          multicallAddress: s,
        } = t,
        {
          authorization: o,
          data: c,
          signature: l,
          to: u,
        } = es.unwrap(t.signature);
      if (
        (await (0, eA.getCode)(e, {
          address: r,
          blockNumber: i,
          blockTag: n,
        })) === (0, eg.concatHex)(["0xef0100", o.address])
      )
        return await eF(e, {
          address: r,
          blockNumber: i,
          blockTag: n,
          hash: a,
          signature: l,
        });
      let d = {
        address: o.address,
        chainId: Number(o.chainId),
        nonce: Number(o.nonce),
        r: (0, ev.numberToHex)(o.r, { size: 32 }),
        s: (0, ev.numberToHex)(o.s, { size: 32 }),
        yParity: o.yParity,
      };
      if (!(await eh({ address: r, authorization: d }))) throw new eR();
      let f = await (0, ew.getAction)(
          e,
          eT.readContract,
          "readContract"
        )({
          ...(s ? { address: s } : { code: ec.multicall3Bytecode }),
          authorizationList: [d],
          abi: eo.multicall3Abi,
          blockNumber: i,
          blockTag: "pending",
          functionName: "aggregate3",
          args: [
            [
              ...(c ? [{ allowFailure: !0, target: u ?? r, callData: c }] : []),
              {
                allowFailure: !0,
                target: r,
                callData: (0, ed.encodeFunctionData)({
                  abi: eo.erc1271Abi,
                  functionName: "isValidSignature",
                  args: [a, l],
                }),
              },
            ],
          ],
        }),
        p = f[f.length - 1]?.returnData;
      if (p?.startsWith("0x1626ba7e")) return !0;
      throw new eR();
    }
    async function eN(e, t) {
      let {
          address: r,
          factory: i,
          factoryData: n,
          hash: a,
          signature: s,
          verifierAddress: o,
          ...c
        } = t,
        l = await (async () =>
          (!i && !n) || d.validate(s)
            ? s
            : d.wrap({ data: n, signature: s, to: i }))(),
        u = o
          ? {
              to: o,
              data: (0, ed.encodeFunctionData)({
                abi: eo.erc6492SignatureValidatorAbi,
                functionName: "isValidSig",
                args: [r, a, l],
              }),
              ...c,
            }
          : {
              data: (0, eu.encodeDeployData)({
                abi: eo.erc6492SignatureValidatorAbi,
                args: [r, a, l],
                bytecode: ec.erc6492SignatureValidatorByteCode,
              }),
              ...c,
            },
        { data: f } = await (0, ew.getAction)(
          e,
          eP.call,
          "call"
        )(u).catch((e) => {
          if (e instanceof el.CallExecutionError) throw new eR();
          throw e;
        });
      if ((0, ey.hexToBool)(f ?? "0x0")) return !0;
      throw new eR();
    }
    async function eF(e, t) {
      let {
        address: r,
        blockNumber: i,
        blockTag: n,
        hash: a,
        signature: s,
      } = t;
      if (
        (
          await (0, ew.getAction)(
            e,
            eT.readContract,
            "readContract"
          )({
            address: r,
            abi: eo.erc1271Abi,
            args: [a, s],
            blockNumber: i,
            blockTag: n,
            functionName: "isValidSignature",
          }).catch((e) => {
            if (e instanceof el.ContractFunctionExecutionError) throw new eR();
            throw e;
          })
        ).startsWith("0x1626ba7e")
      )
        return !0;
      throw new eR();
    }
    class eR extends Error {}
    e.s(["verifyHash", () => ek], 724048);
    var eC = e.i(247640);
    let eS = "\x19Ethereum Signed Message:\n";
    e.s(["presignMessagePrefix", 0, eS], 197941);
    var ez = e.i(144869);
    function eG(e) {
      let t =
          "string" == typeof e
            ? (0, ev.stringToHex)(e)
            : "string" == typeof e.raw
            ? e.raw
            : (0, ev.bytesToHex)(e.raw),
        r = (0, ev.stringToHex)(`${eS}${(0, ez.size)(t)}`);
      return (0, eg.concat)([r, t]);
    }
    function eH(e, t) {
      return (0, eC.keccak256)(eG(e), t);
    }
    async function eL(
      e,
      { address: t, message: r, factory: i, factoryData: n, signature: a, ...s }
    ) {
      let o = eH(r);
      return (0, ew.getAction)(
        e,
        ek,
        "verifyHash"
      )({
        address: t,
        factory: i,
        factoryData: n,
        hash: o,
        signature: a,
        ...s,
      });
    }
    e.s(["toPrefixedMessage", () => eG], 674984),
      e.s(["hashMessage", () => eH], 217189),
      e.s(["verifyMessage", () => eL], 23440);
  },
  533820,
  (e) => {
    "use strict";
    var t = e.i(713925),
      r = e.i(86972);
    class i extends r.BaseError {
      constructor({ domain: e }) {
        super(`Invalid domain "${(0, t.stringify)(e)}".`, {
          metaMessages: ["Must be a valid EIP-712 domain."],
        });
      }
    }
    class n extends r.BaseError {
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
    class a extends r.BaseError {
      constructor({ type: e }) {
        super(`Struct type "${e}" is invalid.`, {
          metaMessages: ["Struct type must not be a Solidity type."],
          name: "InvalidStructTypeError",
        });
      }
    }
    e.s([
      "InvalidDomainError",
      () => i,
      "InvalidPrimaryTypeError",
      () => n,
      "InvalidStructTypeError",
      () => a,
    ]);
  },
  9675,
  (e) => {
    "use strict";
    e.s([
      "domainSeparator",
      () => p,
      "getTypesForEIP712Domain",
      () => f,
      "serializeTypedData",
      () => u,
      "validateTypedData",
      () => d,
    ]);
    var t = e.i(821434),
      r = e.i(10480),
      i = e.i(533820),
      n = e.i(787357),
      a = e.i(144869),
      s = e.i(964564),
      o = e.i(130171),
      c = e.i(235034),
      l = e.i(713925);
    function u(e) {
      let { domain: t, message: r, primaryType: i, types: n } = e,
        a = (e, t) => {
          let r = { ...t };
          for (let t of e) {
            let { name: e, type: i } = t;
            "address" === i && (r[e] = r[e].toLowerCase());
          }
          return r;
        },
        s = n.EIP712Domain && t ? a(n.EIP712Domain, t) : {},
        o = (() => {
          if ("EIP712Domain" !== i) return a(n[i], r);
        })();
      return (0, l.stringify)({
        domain: s,
        message: o,
        primaryType: i,
        types: n,
      });
    }
    function d(e) {
      let { domain: c, message: l, primaryType: u, types: d } = e,
        f = (e, c) => {
          for (let l of e) {
            let { name: e, type: u } = l,
              p = c[e],
              m = u.match(o.integerRegex);
            if (m && ("number" == typeof p || "bigint" == typeof p)) {
              let [e, t, r] = m;
              (0, s.numberToHex)(p, {
                signed: "int" === t,
                size: Number.parseInt(r, 10) / 8,
              });
            }
            if ("address" === u && "string" == typeof p && !(0, n.isAddress)(p))
              throw new r.InvalidAddressError({ address: p });
            let h = u.match(o.bytesRegex);
            if (h) {
              let [e, r] = h;
              if (r && (0, a.size)(p) !== Number.parseInt(r, 10))
                throw new t.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(r, 10),
                  givenSize: (0, a.size)(p),
                });
            }
            let g = d[u];
            g &&
              ((function (e) {
                if (
                  "address" === e ||
                  "bool" === e ||
                  "string" === e ||
                  e.startsWith("bytes") ||
                  e.startsWith("uint") ||
                  e.startsWith("int")
                )
                  throw new i.InvalidStructTypeError({ type: e });
              })(u),
              f(g, p));
          }
        };
      if (d.EIP712Domain && c) {
        if ("object" != typeof c) throw new i.InvalidDomainError({ domain: c });
        f(d.EIP712Domain, c);
      }
      if ("EIP712Domain" !== u)
        if (d[u]) f(d[u], l);
        else throw new i.InvalidPrimaryTypeError({ primaryType: u, types: d });
    }
    function f({ domain: e }) {
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
    function p({ domain: e }) {
      return (0, c.hashDomain)({
        domain: e,
        types: { EIP712Domain: f({ domain: e }) },
      });
    }
  },
  235034,
  (e) => {
    "use strict";
    e.s([
      "hashDomain",
      () => o,
      "hashStruct",
      () => c,
      "hashTypedData",
      () => s,
    ]);
    var t = e.i(133067),
      r = e.i(695670),
      i = e.i(964564),
      n = e.i(247640),
      a = e.i(9675);
    function s(e) {
      let { domain: t = {}, message: i, primaryType: s } = e,
        l = {
          EIP712Domain: (0, a.getTypesForEIP712Domain)({ domain: t }),
          ...e.types,
        };
      (0, a.validateTypedData)({
        domain: t,
        message: i,
        primaryType: s,
        types: l,
      });
      let u = ["0x1901"];
      return (
        t && u.push(o({ domain: t, types: l })),
        "EIP712Domain" !== s &&
          u.push(c({ data: i, primaryType: s, types: l })),
        (0, n.keccak256)((0, r.concat)(u))
      );
    }
    function o({ domain: e, types: t }) {
      return c({ data: e, primaryType: "EIP712Domain", types: t });
    }
    function c({ data: e, primaryType: r, types: a }) {
      let s = (function e({ data: r, primaryType: a, types: s }) {
        let o = [{ type: "bytes32" }],
          c = [
            (function ({ primaryType: e, types: t }) {
              let r = (0, i.toHex)(
                (function ({ primaryType: e, types: t }) {
                  let r = "",
                    i = (function e(
                      { primaryType: t, types: r },
                      i = new Set()
                    ) {
                      let n = t.match(/^\w*/u),
                        a = n?.[0];
                      if (i.has(a) || void 0 === r[a]) return i;
                      for (let t of (i.add(a), r[a]))
                        e({ primaryType: t.type, types: r }, i);
                      return i;
                    })({ primaryType: e, types: t });
                  for (let n of (i.delete(e), [e, ...Array.from(i).sort()]))
                    r += `${n}(${t[n]
                      .map(({ name: e, type: t }) => `${t} ${e}`)
                      .join(",")})`;
                  return r;
                })({ primaryType: e, types: t })
              );
              return (0, n.keccak256)(r);
            })({ primaryType: a, types: s }),
          ];
        for (let l of s[a]) {
          let [a, u] = (function r({ types: a, name: s, type: o, value: c }) {
            if (void 0 !== a[o])
              return [
                { type: "bytes32" },
                (0, n.keccak256)(e({ data: c, primaryType: o, types: a })),
              ];
            if ("bytes" === o)
              return [{ type: "bytes32" }, (0, n.keccak256)(c)];
            if ("string" === o)
              return [{ type: "bytes32" }, (0, n.keccak256)((0, i.toHex)(c))];
            if (o.lastIndexOf("]") === o.length - 1) {
              let e = o.slice(0, o.lastIndexOf("[")),
                i = c.map((t) => r({ name: s, type: e, types: a, value: t }));
              return [
                { type: "bytes32" },
                (0, n.keccak256)(
                  (0, t.encodeAbiParameters)(
                    i.map(([e]) => e),
                    i.map(([, e]) => e)
                  )
                ),
              ];
            }
            return [{ type: o }, c];
          })({ types: s, name: l.name, type: l.type, value: r[l.name] });
          o.push(a), c.push(u);
        }
        return (0, t.encodeAbiParameters)(o, c);
      })({ data: e, primaryType: r, types: a });
      return (0, n.keccak256)(s);
    }
  },
  317938,
  (e) => {
    "use strict";
    var t = e.i(114245),
      r = e.i(235034),
      i = e.i(724048);
    async function n(e, n) {
      let {
          address: a,
          factory: s,
          factoryData: o,
          signature: c,
          message: l,
          primaryType: u,
          types: d,
          domain: f,
          ...p
        } = n,
        m = (0, r.hashTypedData)({
          message: l,
          primaryType: u,
          types: d,
          domain: f,
        });
      return (0, t.getAction)(
        e,
        i.verifyHash,
        "verifyHash"
      )({
        address: a,
        factory: s,
        factoryData: o,
        hash: m,
        signature: c,
        ...p,
      });
    }
    e.s(["verifyTypedData", () => n]);
  },
  434165,
  442117,
  (e) => {
    "use strict";
    let t = new Map(),
      r = new Map(),
      i = 0;
    function n(e, n, a) {
      let s = ++i,
        o = () => t.get(e) || [],
        c = () => {
          let i,
            n = o();
          if (!n.some((e) => e.id === s)) return;
          let a = r.get(e);
          if (1 === n.length && a) {
            let e = a();
            e instanceof Promise && e.catch(() => {});
          }
          (i = o()),
            t.set(
              e,
              i.filter((e) => e.id !== s)
            );
        },
        l = o();
      if ((t.set(e, [...l, { id: s, fns: n }]), l && l.length > 0)) return c;
      let u = {};
      for (let e in n)
        u[e] = (...t) => {
          let r = o();
          if (0 !== r.length) for (let i of r) i.fns[e]?.(...t);
        };
      let d = a(u);
      return "function" == typeof d && r.set(e, d), c;
    }
    e.s(["observe", () => n], 434165);
    var a = e.i(15998);
    function s(e, { emitOnBegin: t, initialWaitTime: r, interval: i }) {
      let n = !0,
        s = () => (n = !1);
      return (
        (async () => {
          let o;
          t && (o = await e({ unpoll: s }));
          let c = (await r?.(o)) ?? i;
          await (0, a.wait)(c);
          let l = async () => {
            n && (await e({ unpoll: s }), await (0, a.wait)(i), l());
          };
          l();
        })(),
        s
      );
    }
    e.s(["poll", () => s], 442117);
  },
  974481,
  267915,
  (e) => {
    "use strict";
    var t = e.i(69260),
      r = e.i(180796),
      i = e.i(114245),
      n = e.i(434165),
      a = e.i(361944),
      s = e.i(516097),
      o = e.i(713925),
      c = e.i(442449),
      l = e.i(798889),
      u = e.i(771441),
      d = e.i(190149),
      f = e.i(442117),
      p = e.i(291488);
    function m(
      e,
      {
        emitOnBegin: t = !1,
        emitMissed: r = !1,
        onBlockNumber: a,
        onError: s,
        poll: c,
        pollingInterval: l = e.pollingInterval,
      }
    ) {
      let u, m, h;
      return (
        void 0 !== c
          ? c
          : "webSocket" !== e.transport.type &&
            "ipc" !== e.transport.type &&
            ("fallback" !== e.transport.type ||
              ("webSocket" !== e.transport.transports[0].config.type &&
                "ipc" !== e.transport.transports[0].config.type))
      )
        ? ((m = (0, o.stringify)(["watchBlockNumber", e.uid, t, r, l])),
          (0, n.observe)(m, { onBlockNumber: a, onError: s }, (n) =>
            (0, f.poll)(
              async () => {
                try {
                  let t = await (0, i.getAction)(
                    e,
                    p.getBlockNumber,
                    "getBlockNumber"
                  )({ cacheTime: 0 });
                  if (void 0 !== u) {
                    if (t === u) return;
                    if (t - u > 1 && r)
                      for (let e = u + 1n; e < t; e++)
                        n.onBlockNumber(e, u), (u = e);
                  }
                  (void 0 === u || t > u) && (n.onBlockNumber(t, u), (u = t));
                } catch (e) {
                  n.onError?.(e);
                }
              },
              { emitOnBegin: t, interval: l }
            )
          ))
        : ((h = (0, o.stringify)(["watchBlockNumber", e.uid, t, r])),
          (0, n.observe)(h, { onBlockNumber: a, onError: s }, (t) => {
            let r = !0,
              i = () => (r = !1);
            return (
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
                    { unsubscribe: a } = await n.subscribe({
                      params: ["newHeads"],
                      onData(e) {
                        if (!r) return;
                        let i = (0, d.hexToBigInt)(e.result?.number);
                        t.onBlockNumber(i, u), (u = i);
                      },
                      onError(e) {
                        t.onError?.(e);
                      },
                    });
                  (i = a), r || i();
                } catch (e) {
                  s?.(e);
                }
              })(),
              () => i()
            );
          }));
    }
    async function h(e, d) {
      let f,
        p,
        h,
        g,
        b,
        {
          checkReplacement: y = !0,
          confirmations: v = 1,
          hash: w,
          onReplaced: x,
          retryCount: E = 6,
          retryDelay: B = ({ count: e }) => 200 * ~~(1 << e),
          timeout: P = 18e4,
        } = d,
        A = (0, o.stringify)(["waitForTransactionReceipt", e.uid, w]),
        T = d.pollingInterval
          ? d.pollingInterval
          : e.chain?.experimental_preconfirmationTime
          ? e.chain.experimental_preconfirmationTime
          : e.pollingInterval,
        k = !1,
        { promise: I, resolve: N, reject: F } = (0, a.withResolvers)(),
        R = P
          ? setTimeout(() => {
              b?.(),
                g?.(),
                F(new r.WaitForTransactionReceiptTimeoutError({ hash: w }));
            }, P)
          : void 0;
      return (
        (g = (0, n.observe)(
          A,
          { onReplaced: x, resolve: N, reject: F },
          async (n) => {
            if (
              (h = await (0, i.getAction)(
                e,
                u.getTransactionReceipt,
                "getTransactionReceipt"
              )({ hash: w }).catch(() => void 0)) &&
              v <= 1
            ) {
              clearTimeout(R), n.resolve(h), g?.();
              return;
            }
            b = (0, i.getAction)(
              e,
              m,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: T,
              async onBlockNumber(a) {
                let o = (e) => {
                    clearTimeout(R), b?.(), e(), g?.();
                  },
                  d = a;
                if (!k)
                  try {
                    if (h) {
                      if (
                        v > 1 &&
                        (!h.blockNumber || d - h.blockNumber + 1n < v)
                      )
                        return;
                      o(() => n.resolve(h));
                      return;
                    }
                    if (
                      (y &&
                        !f &&
                        ((k = !0),
                        await (0, s.withRetry)(
                          async () => {
                            (f = await (0, i.getAction)(
                              e,
                              l.getTransaction,
                              "getTransaction"
                            )({ hash: w })).blockNumber && (d = f.blockNumber);
                          },
                          { delay: B, retryCount: E }
                        ),
                        (k = !1)),
                      (h = await (0, i.getAction)(
                        e,
                        u.getTransactionReceipt,
                        "getTransactionReceipt"
                      )({ hash: w })),
                      v > 1 && (!h.blockNumber || d - h.blockNumber + 1n < v))
                    )
                      return;
                    o(() => n.resolve(h));
                  } catch (a) {
                    if (
                      a instanceof r.TransactionNotFoundError ||
                      a instanceof r.TransactionReceiptNotFoundError
                    ) {
                      if (!f) {
                        k = !1;
                        return;
                      }
                      try {
                        (p = f), (k = !0);
                        let r = await (0, s.withRetry)(
                          () =>
                            (0, i.getAction)(
                              e,
                              c.getBlock,
                              "getBlock"
                            )({ blockNumber: d, includeTransactions: !0 }),
                          {
                            delay: B,
                            retryCount: E,
                            shouldRetry: ({ error: e }) =>
                              e instanceof t.BlockNotFoundError,
                          }
                        );
                        k = !1;
                        let a = r.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === p.from && t === p.nonce
                        );
                        if (
                          !a ||
                          ((h = await (0, i.getAction)(
                            e,
                            u.getTransactionReceipt,
                            "getTransactionReceipt"
                          )({ hash: a.hash })),
                          v > 1 &&
                            (!h.blockNumber || d - h.blockNumber + 1n < v))
                        )
                          return;
                        let l = "replaced";
                        a.to === p.to &&
                        a.value === p.value &&
                        a.input === p.input
                          ? (l = "repriced")
                          : a.from === a.to &&
                            0n === a.value &&
                            (l = "cancelled"),
                          o(() => {
                            n.onReplaced?.({
                              reason: l,
                              replacedTransaction: p,
                              transaction: a,
                              transactionReceipt: h,
                            }),
                              n.resolve(h);
                          });
                      } catch (e) {
                        o(() => n.reject(e));
                      }
                    } else o(() => n.reject(a));
                  }
              },
            });
          }
        )),
        I
      );
    }
    e.s(["watchBlockNumber", () => m], 267915),
      e.s(["waitForTransactionReceipt", () => h], 974481);
  },
  355316,
  (e) => {
    "use strict";
    var t = e.i(114245),
      r = e.i(434165),
      i = e.i(442117),
      n = e.i(713925),
      a = e.i(442449);
    function s(
      e,
      {
        blockTag: s = e.experimental_blockTag ?? "latest",
        emitMissed: o = !1,
        emitOnBegin: c = !1,
        onBlock: l,
        onError: u,
        includeTransactions: d,
        poll: f,
        pollingInterval: p = e.pollingInterval,
      }
    ) {
      let m,
        h,
        g,
        b,
        y,
        v =
          void 0 !== f
            ? f
            : "webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type)),
        w = d ?? !1;
      return v
        ? ((h = (0, n.stringify)(["watchBlocks", e.uid, s, o, c, w, p])),
          (0, r.observe)(h, { onBlock: l, onError: u }, (r) =>
            (0, i.poll)(
              async () => {
                try {
                  let i = await (0, t.getAction)(
                    e,
                    a.getBlock,
                    "getBlock"
                  )({ blockTag: s, includeTransactions: w });
                  if (null !== i.number && m?.number != null) {
                    if (i.number === m.number) return;
                    if (i.number - m.number > 1 && o)
                      for (let n = m?.number + 1n; n < i.number; n++) {
                        let i = await (0, t.getAction)(
                          e,
                          a.getBlock,
                          "getBlock"
                        )({ blockNumber: n, includeTransactions: w });
                        r.onBlock(i, m), (m = i);
                      }
                  }
                  (m?.number == null ||
                    ("pending" === s && i?.number == null) ||
                    (null !== i.number && i.number > m.number)) &&
                    (r.onBlock(i, m), (m = i));
                } catch (e) {
                  r.onError?.(e);
                }
              },
              { emitOnBegin: c, interval: p }
            )
          ))
        : ((g = !0),
          (b = !0),
          (y = () => (g = !1)),
          (async () => {
            try {
              c &&
                (0, t.getAction)(
                  e,
                  a.getBlock,
                  "getBlock"
                )({ blockTag: s, includeTransactions: w })
                  .then((e) => {
                    !g || (b && (l(e, void 0), (b = !1)));
                  })
                  .catch(u);
              let r = (() => {
                  if ("fallback" === e.transport.type) {
                    let t = e.transport.transports.find(
                      (e) =>
                        "webSocket" === e.config.type || "ipc" === e.config.type
                    );
                    return t ? t.value : e.transport;
                  }
                  return e.transport;
                })(),
                { unsubscribe: i } = await r.subscribe({
                  params: ["newHeads"],
                  async onData(r) {
                    if (!g) return;
                    let i = await (0, t.getAction)(
                      e,
                      a.getBlock,
                      "getBlock"
                    )({
                      blockNumber: r.result?.number,
                      includeTransactions: w,
                    }).catch(() => {});
                    g && (l(i, m), (b = !1), (m = i));
                  },
                  onError(e) {
                    u?.(e);
                  },
                });
              (y = i), g || y();
            } catch (e) {
              u?.(e);
            }
          })(),
          () => y());
    }
    e.s(["watchBlocks", () => s]);
  },
  825129,
  (e) => {
    "use strict";
    var t = e.i(821434),
      r = e.i(458122),
      i = e.i(220761),
      n = e.i(425234),
      a = e.i(984538),
      s = e.i(114245),
      o = e.i(434165),
      c = e.i(442117),
      l = e.i(713925),
      u = e.i(475591),
      d = e.i(291488),
      f = e.i(202150),
      p = e.i(760638),
      m = e.i(789302);
    function h(e, h) {
      let g,
        b,
        y,
        v,
        w,
        {
          abi: x,
          address: E,
          args: B,
          batch: P = !0,
          eventName: A,
          fromBlock: T,
          onError: k,
          onLogs: I,
          poll: N,
          pollingInterval: F = e.pollingInterval,
          strict: R,
        } = h;
      return (
        void 0 !== N
          ? N
          : "bigint" == typeof T ||
            ("webSocket" !== e.transport.type &&
              "ipc" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                ("webSocket" !== e.transport.transports[0].config.type &&
                  "ipc" !== e.transport.transports[0].config.type)))
      )
        ? ((g = R ?? !1),
          (b = (0, l.stringify)([
            "watchContractEvent",
            E,
            B,
            P,
            e.uid,
            A,
            F,
            g,
            T,
          ])),
          (0, o.observe)(b, { onLogs: I, onError: k }, (t) => {
            let i, n;
            void 0 !== T && (i = T - 1n);
            let a = !1,
              o = (0, c.poll)(
                async () => {
                  if (!a) {
                    try {
                      n = await (0, s.getAction)(
                        e,
                        u.createContractEventFilter,
                        "createContractEventFilter"
                      )({
                        abi: x,
                        address: E,
                        args: B,
                        eventName: A,
                        strict: g,
                        fromBlock: T,
                      });
                    } catch {}
                    a = !0;
                    return;
                  }
                  try {
                    let r;
                    if (n)
                      r = await (0, s.getAction)(
                        e,
                        p.getFilterChanges,
                        "getFilterChanges"
                      )({ filter: n });
                    else {
                      let t = await (0, s.getAction)(
                        e,
                        d.getBlockNumber,
                        "getBlockNumber"
                      )({});
                      (r =
                        i && i < t
                          ? await (0, s.getAction)(
                              e,
                              f.getContractEvents,
                              "getContractEvents"
                            )({
                              abi: x,
                              address: E,
                              args: B,
                              eventName: A,
                              fromBlock: i + 1n,
                              toBlock: t,
                              strict: g,
                            })
                          : []),
                        (i = t);
                    }
                    if (0 === r.length) return;
                    if (P) t.onLogs(r);
                    else for (let e of r) t.onLogs([e]);
                  } catch (e) {
                    n && e instanceof r.InvalidInputRpcError && (a = !1),
                      t.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: F }
              );
            return async () => {
              n &&
                (await (0, s.getAction)(
                  e,
                  m.uninstallFilter,
                  "uninstallFilter"
                )({ filter: n })),
                o();
            };
          }))
        : ((y = (0, l.stringify)([
            "watchContractEvent",
            E,
            B,
            P,
            e.uid,
            A,
            F,
            R ?? !1,
          ])),
          (v = !0),
          (w = () => (v = !1)),
          (0, o.observe)(
            y,
            { onLogs: I, onError: k },
            (r) => (
              (async () => {
                try {
                  let s = (() => {
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
                    o = A
                      ? (0, n.encodeEventTopics)({
                          abi: x,
                          eventName: A,
                          args: B,
                        })
                      : [],
                    { unsubscribe: c } = await s.subscribe({
                      params: ["logs", { address: E, topics: o }],
                      onData(e) {
                        if (!v) return;
                        let n = e.result;
                        try {
                          let { eventName: e, args: t } = (0, i.decodeEventLog)(
                              {
                                abi: x,
                                data: n.data,
                                topics: n.topics,
                                strict: R,
                              }
                            ),
                            s = (0, a.formatLog)(n, { args: t, eventName: e });
                          r.onLogs([s]);
                        } catch (o) {
                          let e, i;
                          if (
                            o instanceof t.DecodeLogDataMismatch ||
                            o instanceof t.DecodeLogTopicsMismatch
                          ) {
                            if (R) return;
                            (e = o.abiItem.name),
                              (i = o.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let s = (0, a.formatLog)(n, {
                            args: i ? [] : {},
                            eventName: e,
                          });
                          r.onLogs([s]);
                        }
                      },
                      onError(e) {
                        r.onError?.(e);
                      },
                    });
                  (w = c), v || w();
                } catch (e) {
                  k?.(e);
                }
              })(),
              () => w()
            )
          ));
    }
    e.s(["watchContractEvent", () => h]);
  },
  269,
  442259,
  631231,
  (e) => {
    "use strict";
    var t = e.i(821434),
      r = e.i(458122),
      i = e.i(220761),
      n = e.i(425234),
      a = e.i(984538),
      s = e.i(114245),
      o = e.i(434165),
      c = e.i(442117),
      l = e.i(713925),
      u = e.i(73492),
      d = e.i(291488),
      f = e.i(760638),
      p = e.i(540834),
      m = e.i(789302);
    function h(
      e,
      {
        address: h,
        args: g,
        batch: b = !0,
        event: y,
        events: v,
        fromBlock: w,
        onError: x,
        onLogs: E,
        poll: B,
        pollingInterval: P = e.pollingInterval,
        strict: A,
      }
    ) {
      let T,
        k,
        I,
        N =
          void 0 !== B
            ? B
            : "bigint" == typeof w ||
              ("webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type))),
        F = A ?? !1;
      return N
        ? ((T = (0, l.stringify)(["watchEvent", h, g, b, e.uid, y, P, w])),
          (0, o.observe)(T, { onLogs: E, onError: x }, (t) => {
            let i, n;
            void 0 !== w && (i = w - 1n);
            let a = !1,
              o = (0, c.poll)(
                async () => {
                  if (!a) {
                    try {
                      n = await (0, s.getAction)(
                        e,
                        u.createEventFilter,
                        "createEventFilter"
                      )({
                        address: h,
                        args: g,
                        event: y,
                        events: v,
                        strict: F,
                        fromBlock: w,
                      });
                    } catch {}
                    a = !0;
                    return;
                  }
                  try {
                    let r;
                    if (n)
                      r = await (0, s.getAction)(
                        e,
                        f.getFilterChanges,
                        "getFilterChanges"
                      )({ filter: n });
                    else {
                      let t = await (0, s.getAction)(
                        e,
                        d.getBlockNumber,
                        "getBlockNumber"
                      )({});
                      (r =
                        i && i !== t
                          ? await (0, s.getAction)(
                              e,
                              p.getLogs,
                              "getLogs"
                            )({
                              address: h,
                              args: g,
                              event: y,
                              events: v,
                              fromBlock: i + 1n,
                              toBlock: t,
                            })
                          : []),
                        (i = t);
                    }
                    if (0 === r.length) return;
                    if (b) t.onLogs(r);
                    else for (let e of r) t.onLogs([e]);
                  } catch (e) {
                    n && e instanceof r.InvalidInputRpcError && (a = !1),
                      t.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: P }
              );
            return async () => {
              n &&
                (await (0, s.getAction)(
                  e,
                  m.uninstallFilter,
                  "uninstallFilter"
                )({ filter: n })),
                o();
            };
          }))
        : ((k = !0),
          (I = () => (k = !1)),
          (async () => {
            try {
              let r = (() => {
                  if ("fallback" === e.transport.type) {
                    let t = e.transport.transports.find(
                      (e) =>
                        "webSocket" === e.config.type || "ipc" === e.config.type
                    );
                    return t ? t.value : e.transport;
                  }
                  return e.transport;
                })(),
                s = v ?? (y ? [y] : void 0),
                o = [];
              s &&
                ((o = [
                  s.flatMap((e) =>
                    (0, n.encodeEventTopics)({
                      abi: [e],
                      eventName: e.name,
                      args: g,
                    })
                  ),
                ]),
                y && (o = o[0]));
              let { unsubscribe: c } = await r.subscribe({
                params: ["logs", { address: h, topics: o }],
                onData(e) {
                  if (!k) return;
                  let r = e.result;
                  try {
                    let { eventName: e, args: t } = (0, i.decodeEventLog)({
                        abi: s ?? [],
                        data: r.data,
                        topics: r.topics,
                        strict: F,
                      }),
                      n = (0, a.formatLog)(r, { args: t, eventName: e });
                    E([n]);
                  } catch (s) {
                    let e, i;
                    if (
                      s instanceof t.DecodeLogDataMismatch ||
                      s instanceof t.DecodeLogTopicsMismatch
                    ) {
                      if (A) return;
                      (e = s.abiItem.name),
                        (i = s.abiItem.inputs?.some(
                          (e) => !("name" in e && e.name)
                        ));
                    }
                    let n = (0, a.formatLog)(r, {
                      args: i ? [] : {},
                      eventName: e,
                    });
                    E([n]);
                  }
                },
                onError(e) {
                  x?.(e);
                },
              });
              (I = c), k || I();
            } catch (e) {
              x?.(e);
            }
          })(),
          () => I());
    }
    e.s(["watchEvent", () => h], 269);
    var g = e.i(597105);
    function b(
      e,
      {
        batch: t = !0,
        onError: r,
        onTransactions: i,
        poll: n,
        pollingInterval: a = e.pollingInterval,
      }
    ) {
      let u, d, p;
      return (
        void 0 !== n
          ? n
          : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
      )
        ? ((u = (0, l.stringify)(["watchPendingTransactions", e.uid, t, a])),
          (0, o.observe)(u, { onTransactions: i, onError: r }, (r) => {
            let i,
              n = (0, c.poll)(
                async () => {
                  try {
                    if (!i)
                      try {
                        i = await (0, s.getAction)(
                          e,
                          g.createPendingTransactionFilter,
                          "createPendingTransactionFilter"
                        )({});
                        return;
                      } catch (e) {
                        throw (n(), e);
                      }
                    let a = await (0, s.getAction)(
                      e,
                      f.getFilterChanges,
                      "getFilterChanges"
                    )({ filter: i });
                    if (0 === a.length) return;
                    if (t) r.onTransactions(a);
                    else for (let e of a) r.onTransactions([e]);
                  } catch (e) {
                    r.onError?.(e);
                  }
                },
                { emitOnBegin: !0, interval: a }
              );
            return async () => {
              i &&
                (await (0, s.getAction)(
                  e,
                  m.uninstallFilter,
                  "uninstallFilter"
                )({ filter: i })),
                n();
            };
          }))
        : ((d = !0),
          (p = () => (d = !1)),
          (async () => {
            try {
              let { unsubscribe: t } = await e.transport.subscribe({
                params: ["newPendingTransactions"],
                onData(e) {
                  if (!d) return;
                  let t = e.result;
                  i([t]);
                },
                onError(e) {
                  r?.(e);
                },
              });
              (p = t), d || p();
            } catch (e) {
              r?.(e);
            }
          })(),
          () => p());
    }
    e.s(["watchPendingTransactions", () => b], 442259);
    var y = e.i(217189);
    let v =
        /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
      w =
        /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
    var x = e.i(787357),
      E = e.i(837794),
      B = e.i(724048);
    async function P(e, t) {
      let {
          address: r,
          domain: i,
          message: n,
          nonce: a,
          scheme: s,
          signature: o,
          time: c = new Date(),
          ...l
        } = t,
        u = (function (e) {
          let { scheme: t, statement: r, ...i } = e.match(v)?.groups ?? {},
            {
              chainId: n,
              expirationTime: a,
              issuedAt: s,
              notBefore: o,
              requestId: c,
              ...l
            } = e.match(w)?.groups ?? {},
            u = e.split("Resources:")[1]?.split("\n- ").slice(1);
          return {
            ...i,
            ...l,
            ...(n ? { chainId: Number(n) } : {}),
            ...(a ? { expirationTime: new Date(a) } : {}),
            ...(s ? { issuedAt: new Date(s) } : {}),
            ...(o ? { notBefore: new Date(o) } : {}),
            ...(c ? { requestId: c } : {}),
            ...(u ? { resources: u } : {}),
            ...(t ? { scheme: t } : {}),
            ...(r ? { statement: r } : {}),
          };
        })(n);
      if (
        !u.address ||
        !(function (e) {
          let {
            address: t,
            domain: r,
            message: i,
            nonce: n,
            scheme: a,
            time: s = new Date(),
          } = e;
          if (
            (r && i.domain !== r) ||
            (n && i.nonce !== n) ||
            (a && i.scheme !== a) ||
            (i.expirationTime && s >= i.expirationTime) ||
            (i.notBefore && s < i.notBefore)
          )
            return !1;
          try {
            if (
              !i.address ||
              !(0, x.isAddress)(i.address, { strict: !1 }) ||
              (t && !(0, E.isAddressEqual)(i.address, t))
            )
              return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: i, message: u, nonce: a, scheme: s, time: c })
      )
        return !1;
      let d = (0, y.hashMessage)(n);
      return (0, B.verifyHash)(e, {
        address: u.address,
        hash: d,
        signature: o,
        ...l,
      });
    }
    e.s(["verifySiweMessage", () => P], 631231);
  },
  642517,
  (e) => {
    "use strict";
    async function t(e, { serializedTransaction: t }) {
      return e.request(
        { method: "eth_sendRawTransaction", params: [t] },
        { retryCount: 0 }
      );
    }
    e.s(["sendRawTransaction", () => t]);
  },
  434206,
  (e) => {
    "use strict";
    var t = e.i(180796),
      r = e.i(720047);
    async function i(
      e,
      { serializedTransaction: i, throwOnReceiptRevert: n, timeout: a }
    ) {
      let s = await e.request(
          { method: "eth_sendRawTransactionSync", params: a ? [i, a] : [i] },
          { retryCount: 0 }
        ),
        o = (
          e.chain?.formatters?.transactionReceipt?.format ||
          r.formatTransactionReceipt
        )(s);
      if ("reverted" === o.status && n)
        throw new t.TransactionReceiptRevertedError({ receipt: o });
      return o;
    }
    e.s(["sendRawTransactionSync", () => i]);
  },
  356537,
  903928,
  (e) => {
    "use strict";
    var t = e.i(70488),
      r = e.i(578218),
      i = e.i(903087),
      n = e.i(753186),
      a = e.i(490933),
      s = e.i(904949),
      o = e.i(557051),
      c = e.i(444294),
      l = e.i(914341),
      u = e.i(475591),
      d = e.i(73492),
      f = e.i(597105),
      p = e.i(182407),
      m = e.i(202436),
      h = e.i(929348),
      g = e.i(723879),
      b = e.i(114606),
      y = e.i(709654),
      v = e.i(281355),
      w = e.i(442449),
      x = e.i(291488),
      E = e.i(824470),
      B = e.i(35907),
      P = e.i(555162),
      A = e.i(202150),
      T = e.i(187095),
      k = e.i(539451),
      I = e.i(521300),
      N = e.i(760638),
      F = e.i(842815),
      R = e.i(631),
      C = e.i(540834),
      S = e.i(952192),
      z = e.i(153499),
      G = e.i(798889),
      H = e.i(86636),
      L = e.i(451717),
      $ = e.i(771441),
      U = e.i(980020),
      D = e.i(299408),
      M = e.i(416409),
      q = e.i(283449),
      O = e.i(197886),
      _ = e.i(789302),
      j = e.i(724048),
      V = e.i(23440),
      W = e.i(317938),
      K = e.i(974481),
      Z = e.i(267915),
      J = e.i(355316),
      Y = e.i(825129),
      Q = e.i(269),
      X = e.i(442259),
      ee = e.i(631231),
      et = e.i(96823),
      er = e.i(642517),
      ei = e.i(434206);
    function en(e) {
      return {
        call: (t) => (0, o.call)(e, t),
        createAccessList: (t) => (0, c.createAccessList)(e, t),
        createBlockFilter: () => (0, l.createBlockFilter)(e),
        createContractEventFilter: (t) =>
          (0, u.createContractEventFilter)(e, t),
        createEventFilter: (t) => (0, d.createEventFilter)(e, t),
        createPendingTransactionFilter: () =>
          (0, f.createPendingTransactionFilter)(e),
        estimateContractGas: (t) => (0, p.estimateContractGas)(e, t),
        estimateGas: (t) => (0, h.estimateGas)(e, t),
        getBalance: (t) => (0, y.getBalance)(e, t),
        getBlobBaseFee: () => (0, v.getBlobBaseFee)(e),
        getBlock: (t) => (0, w.getBlock)(e, t),
        getBlockNumber: (t) => (0, x.getBlockNumber)(e, t),
        getBlockTransactionCount: (t) => (0, E.getBlockTransactionCount)(e, t),
        getBytecode: (t) => (0, P.getCode)(e, t),
        getChainId: () => (0, B.getChainId)(e),
        getCode: (t) => (0, P.getCode)(e, t),
        getContractEvents: (t) => (0, A.getContractEvents)(e, t),
        getDelegation: (t) => (0, T.getDelegation)(e, t),
        getEip712Domain: (t) => (0, k.getEip712Domain)(e, t),
        getEnsAddress: (t) => (0, r.getEnsAddress)(e, t),
        getEnsAvatar: (t) => (0, i.getEnsAvatar)(e, t),
        getEnsName: (t) => (0, n.getEnsName)(e, t),
        getEnsResolver: (t) => (0, a.getEnsResolver)(e, t),
        getEnsText: (t) => (0, s.getEnsText)(e, t),
        getFeeHistory: (t) => (0, I.getFeeHistory)(e, t),
        estimateFeesPerGas: (t) => (0, m.estimateFeesPerGas)(e, t),
        getFilterChanges: (t) => (0, N.getFilterChanges)(e, t),
        getFilterLogs: (t) => (0, F.getFilterLogs)(e, t),
        getGasPrice: () => (0, R.getGasPrice)(e),
        getLogs: (t) => (0, C.getLogs)(e, t),
        getProof: (t) => (0, S.getProof)(e, t),
        estimateMaxPriorityFeePerGas: (t) =>
          (0, g.estimateMaxPriorityFeePerGas)(e, t),
        fillTransaction: (t) => (0, b.fillTransaction)(e, t),
        getStorageAt: (t) => (0, z.getStorageAt)(e, t),
        getTransaction: (t) => (0, G.getTransaction)(e, t),
        getTransactionConfirmations: (t) =>
          (0, H.getTransactionConfirmations)(e, t),
        getTransactionCount: (t) => (0, L.getTransactionCount)(e, t),
        getTransactionReceipt: (t) => (0, $.getTransactionReceipt)(e, t),
        multicall: (t) => (0, U.multicall)(e, t),
        prepareTransactionRequest: (t) =>
          (0, et.prepareTransactionRequest)(e, t),
        readContract: (t) => (0, D.readContract)(e, t),
        sendRawTransaction: (t) => (0, er.sendRawTransaction)(e, t),
        sendRawTransactionSync: (t) => (0, ei.sendRawTransactionSync)(e, t),
        simulate: (t) => (0, M.simulateBlocks)(e, t),
        simulateBlocks: (t) => (0, M.simulateBlocks)(e, t),
        simulateCalls: (t) => (0, q.simulateCalls)(e, t),
        simulateContract: (t) => (0, O.simulateContract)(e, t),
        verifyHash: (t) => (0, j.verifyHash)(e, t),
        verifyMessage: (t) => (0, V.verifyMessage)(e, t),
        verifySiweMessage: (t) => (0, ee.verifySiweMessage)(e, t),
        verifyTypedData: (t) => (0, W.verifyTypedData)(e, t),
        uninstallFilter: (t) => (0, _.uninstallFilter)(e, t),
        waitForTransactionReceipt: (t) =>
          (0, K.waitForTransactionReceipt)(e, t),
        watchBlocks: (t) => (0, J.watchBlocks)(e, t),
        watchBlockNumber: (t) => (0, Z.watchBlockNumber)(e, t),
        watchContractEvent: (t) => (0, Y.watchContractEvent)(e, t),
        watchEvent: (t) => (0, Q.watchEvent)(e, t),
        watchPendingTransactions: (t) => (0, X.watchPendingTransactions)(e, t),
      };
    }
    function ea(e) {
      let { key: r = "public", name: i = "Public Client" } = e;
      return (0, t.createClient)({
        ...e,
        key: r,
        name: i,
        type: "publicClient",
      }).extend(en);
    }
    e.s(["publicActions", () => en], 903928),
      e.s(["createPublicClient", () => ea], 356537);
  },
  11363,
  (e) => {
    "use strict";
    var t = e.i(86972);
    class r extends t.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor({ docsPath: e, metaMessages: t, type: r }) {
        super(`Account type "${r}" is not supported.`, {
          docsPath: e,
          metaMessages: t,
          name: "AccountTypeNotSupportedError",
        });
      }
    }
    e.s([
      "AccountNotFoundError",
      () => r,
      "AccountTypeNotSupportedError",
      () => i,
    ]);
  },
  362458,
  (e) => {
    "use strict";
    var t = e.i(92842);
    function r({ chain: e, currentChainId: r }) {
      if (!e) throw new t.ChainNotFoundError();
      if (r !== e.id)
        throw new t.ChainMismatchError({ chain: e, currentChainId: r });
    }
    e.s(["assertCurrentChain", () => r]);
  },
  532931,
  (e) => {
    "use strict";
    var t = e.i(140315),
      r = e.i(11363),
      i = e.i(86972),
      n = e.i(760897),
      a = e.i(362458),
      s = e.i(695670),
      o = e.i(844550),
      c = e.i(971282),
      l = e.i(979593),
      u = e.i(114245),
      d = e.i(753371),
      f = e.i(70333),
      p = e.i(35907),
      m = e.i(96823),
      h = e.i(642517);
    let g = new d.LruMap(128);
    async function b(e, d) {
      let {
        account: b = e.account,
        assertChainId: y = !0,
        chain: v = e.chain,
        accessList: w,
        authorizationList: x,
        blobs: E,
        data: B,
        dataSuffix: P = "string" == typeof e.dataSuffix
          ? e.dataSuffix
          : e.dataSuffix?.value,
        gas: A,
        gasPrice: T,
        maxFeePerBlobGas: k,
        maxFeePerGas: I,
        maxPriorityFeePerGas: N,
        nonce: F,
        type: R,
        value: C,
        ...S
      } = d;
      if (void 0 === b)
        throw new r.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransaction",
        });
      let z = b ? (0, t.parseAccount)(b) : null;
      try {
        (0, f.assertRequest)(d);
        let t = await (async () =>
          d.to
            ? d.to
            : null !== d.to && x && x.length > 0
            ? await (0, n.recoverAuthorizationAddress)({
                authorization: x[0],
              }).catch(() => {
                throw new i.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (z?.type === "json-rpc" || null === z) {
          let r;
          null !== v &&
            ((r = await (0, u.getAction)(e, p.getChainId, "getChainId")({})),
            y && (0, a.assertCurrentChain)({ currentChainId: r, chain: v }));
          let i = e.chain?.formatters?.transactionRequest?.format,
            n = (i || l.formatTransactionRequest)(
              {
                ...(0, c.extract)(S, { format: i }),
                accessList: w,
                account: z,
                authorizationList: x,
                blobs: E,
                chainId: r,
                data: P ? (0, s.concat)([B ?? "0x", P]) : B,
                gas: A,
                gasPrice: T,
                maxFeePerBlobGas: k,
                maxFeePerGas: I,
                maxPriorityFeePerGas: N,
                nonce: F,
                to: t,
                type: R,
                value: C,
              },
              "sendTransaction"
            ),
            o = g.get(e.uid);
          try {
            return await e.request(
              {
                method: o ? "wallet_sendTransaction" : "eth_sendTransaction",
                params: [n],
              },
              { retryCount: 0 }
            );
          } catch (t) {
            if (!1 === o) throw t;
            if (
              "InvalidInputRpcError" === t.name ||
              "InvalidParamsRpcError" === t.name ||
              "MethodNotFoundRpcError" === t.name ||
              "MethodNotSupportedRpcError" === t.name
            )
              return await e
                .request(
                  { method: "wallet_sendTransaction", params: [n] },
                  { retryCount: 0 }
                )
                .then((t) => (g.set(e.uid, !0), t))
                .catch((r) => {
                  if (
                    "MethodNotFoundRpcError" === r.name ||
                    "MethodNotSupportedRpcError" === r.name
                  )
                    throw (g.set(e.uid, !1), t);
                  throw r;
                });
            throw t;
          }
        }
        if (z?.type === "local") {
          let r = await (0, u.getAction)(
              e,
              m.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: z,
              accessList: w,
              authorizationList: x,
              blobs: E,
              chain: v,
              data: P ? (0, s.concat)([B ?? "0x", P]) : B,
              gas: A,
              gasPrice: T,
              maxFeePerBlobGas: k,
              maxFeePerGas: I,
              maxPriorityFeePerGas: N,
              nonce: F,
              nonceManager: z.nonceManager,
              parameters: [...m.defaultParameters, "sidecars"],
              type: R,
              value: C,
              ...S,
              to: t,
            }),
            i = v?.serializers?.transaction,
            n = await z.signTransaction(r, { serializer: i });
          return await (0, u.getAction)(
            e,
            h.sendRawTransaction,
            "sendRawTransaction"
          )({ serializedTransaction: n });
        }
        if (z?.type === "smart")
          throw new r.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new r.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransaction",
          type: z?.type,
        });
      } catch (e) {
        if (e instanceof r.AccountTypeNotSupportedError) throw e;
        throw (0, o.getTransactionError)(e, {
          ...d,
          account: z,
          chain: d.chain || void 0,
        });
      }
    }
    e.s(["sendTransaction", () => b]);
  },
]);
