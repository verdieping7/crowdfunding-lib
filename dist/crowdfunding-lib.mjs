import { computed as s, markRaw as Ut, defineComponent as yn, h as g, ref as R, reactive as pn, getCurrentInstance as W, onDeactivated as ct, onBeforeUnmount as ie, onMounted as ue, Transition as Ee, watch as Q, openBlock as ve, createElementBlock as nt, Fragment as Wt, createElementVNode as ce, toDisplayString as re, createVNode as K, createBlock as Ie, withCtx as X, unref as ke, renderList as wn, createTextVNode as De, onBeforeUpdate as kn, inject as lt, nextTick as oe, onActivated as xn, withDirectives as qn, onUnmounted as _n, Teleport as Sn } from "vue";
import { createClient as Cn } from "@supabase/supabase-js";
const ot = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, dt = {
  size: String
};
function ft(e, t = ot) {
  return s(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const En = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function Bn(e) {
  return {
    cSize: s(() => e.size in ot ? `${ot[e.size]}px` : e.size),
    classes: s(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
function je(e, t, n, o) {
  return Object.defineProperty(e, t, {
    get: n,
    set: o,
    enumerable: !0
  }), e;
}
function Y(e) {
  return Ut(yn(e));
}
function $n(e) {
  return Ut(e);
}
const vt = Y({
  name: "QSpinner",
  props: {
    ...En,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = Bn(e);
    return () => g("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      g("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
}), xe = R(
  !1
);
let at;
function Mn(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function Rn(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const Zt = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Tn(e) {
  const t = e.toLowerCase(), n = Rn(t), o = Mn(t, n), l = {
    mobile: !1,
    desktop: !1,
    cordova: !1,
    capacitor: !1,
    nativeMobile: !1,
    // nativeMobileWrapper: void 0,
    electron: !1,
    bex: !1,
    linux: !1,
    mac: !1,
    win: !1,
    cros: !1,
    chrome: !1,
    firefox: !1,
    opera: !1,
    safari: !1,
    vivaldi: !1,
    edge: !1,
    edgeChromium: !1,
    ie: !1,
    webkit: !1,
    android: !1,
    ios: !1,
    ipad: !1,
    iphone: !1,
    ipod: !1,
    kindle: !1,
    winphone: !1,
    blackberry: !1,
    playbook: !1,
    silk: !1
  };
  o.browser && (l[o.browser] = !0, l.version = o.version, l.versionNumber = parseInt(o.version, 10)), o.platform && (l[o.platform] = !0);
  const a = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
  if (a === !0 || t.indexOf("mobile") !== -1 ? l.mobile = !0 : l.desktop = !0, l["windows phone"] && (l.winphone = !0, delete l["windows phone"]), l.edga || l.edgios || l.edg ? (l.edge = !0, o.browser = "edge") : l.crios ? (l.chrome = !0, o.browser = "chrome") : l.fxios && (l.firefox = !0, o.browser = "firefox"), (l.ipod || l.ipad || l.iphone) && (l.ios = !0), l.vivaldi && (o.browser = "vivaldi", l.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (l.chrome || l.opr || l.safari || l.vivaldi || l.mobile === !0 && l.ios !== !0 && a !== !0) && (l.webkit = !0), l.opr && (o.browser = "opera", l.opera = !0), l.safari && (l.blackberry || l.bb ? (o.browser = "blackberry", l.blackberry = !0) : l.playbook ? (o.browser = "playbook", l.playbook = !0) : l.android ? (o.browser = "android", l.android = !0) : l.kindle ? (o.browser = "kindle", l.kindle = !0) : l.silk && (o.browser = "silk", l.silk = !0)), l.name = o.browser, l.platform = o.platform, t.indexOf("electron") !== -1)
    l.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    l.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (l.capacitor = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (l.cordova = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "cordova"), xe.value === !0 && (at = { is: { ...l } }), Zt === !0 && l.mac === !0 && (l.desktop === !0 && l.safari === !0 || l.nativeMobile === !0 && l.android !== !0 && l.ios !== !0 && l.ipad !== !0)) {
      delete l.mac, delete l.desktop;
      const i = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(l, {
        mobile: !0,
        ios: !0,
        platform: i,
        [i]: !0
      });
    }
    l.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete l.desktop, l.mobile = !0);
  }
  return l;
}
const ht = navigator.userAgent || navigator.vendor || window.opera, Ln = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, ne = {
  userAgent: ht,
  is: Tn(ht),
  has: {
    touch: Zt
  },
  within: {
    iframe: window.self !== window.top
  }
}, bt = {
  install(e) {
    const { $q: t } = e;
    xe.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, ne), xe.value = !1;
    }), t.platform = pn(this)) : t.platform = this;
  }
};
{
  let e;
  je(ne.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(bt, ne), xe.value === !0 && (Object.assign(bt, at, Ln), at = null);
}
const Pn = {
  ratio: [String, Number]
};
function Vn(e, t) {
  return s(() => {
    const n = Number(
      e.ratio || (t !== void 0 ? t.value : void 0)
    );
    return isNaN(n) !== !0 && n > 0 ? { paddingBottom: `${100 / n}%` } : null;
  });
}
function G(e, t) {
  return e !== void 0 && e() || t;
}
function Fn(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function de(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Yt(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Ce(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function it() {
  let e = null;
  const t = W();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return ct(n), ie(n), {
    removeTimeout: n,
    registerTimeout(o, l) {
      n(), Ce(t) === !1 && (e = setTimeout(() => {
        e = null, o();
      }, l));
    }
  };
}
const An = 1.7778, Dn = Y({
  name: "QImg",
  props: {
    ...Pn,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: An
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(e, { slots: t, emit: n }) {
    const o = R(e.initialRatio), l = Vn(e, o), a = W(), { registerTimeout: i, removeTimeout: r } = it(), { registerTimeout: y, removeTimeout: p } = it(), c = s(() => e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null), h = s(() => e.errorSrc !== void 0 ? { src: e.errorSrc, __qerror: !0 } : null), b = [
      R(null),
      R(c.value)
    ], _ = R(0), C = R(!1), L = R(!1), q = s(
      () => `q-img q-img--${e.noNativeMenu === !0 ? "no-" : ""}menu`
    ), O = s(() => ({
      width: e.width,
      height: e.height
    })), x = s(
      () => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === !0 ? "out" : ""}-transition q-img__image--`
    ), $ = s(() => ({
      ...e.imgStyle,
      objectFit: e.fit,
      objectPosition: e.position
    }));
    function N() {
      if (p(), e.loadingShowDelay === 0) {
        C.value = !0;
        return;
      }
      y(() => {
        C.value = !0;
      }, e.loadingShowDelay);
    }
    function T() {
      p(), C.value = !1;
    }
    function P({ target: u }) {
      Ce(a) === !1 && (r(), o.value = u.naturalHeight === 0 ? 0.5 : u.naturalWidth / u.naturalHeight, V(u, 1));
    }
    function V(u, S) {
      S === 1e3 || Ce(a) === !0 || (u.complete === !0 ? z(u) : i(() => {
        V(u, S + 1);
      }, 50));
    }
    function z(u) {
      Ce(a) !== !0 && (_.value = _.value ^ 1, b[_.value].value = null, T(), u.getAttribute("__qerror") !== "true" && (L.value = !1), n("load", u.currentSrc || u.src));
    }
    function f(u) {
      r(), T(), L.value = !0, b[_.value].value = h.value, b[_.value ^ 1].value = c.value, n("error", u);
    }
    function v(u) {
      const S = b[u].value, d = {
        key: "img_" + u,
        class: x.value,
        style: $.value,
        alt: e.alt,
        crossorigin: e.crossorigin,
        decoding: e.decoding,
        referrerpolicy: e.referrerpolicy,
        height: e.height,
        width: e.width,
        loading: e.loading,
        fetchpriority: e.fetchpriority,
        "aria-hidden": "true",
        draggable: e.draggable,
        ...S
      };
      return _.value === u ? Object.assign(d, {
        class: d.class + "current",
        onLoad: P,
        onError: f
      }) : d.class += "loaded", g(
        "div",
        { class: "q-img__container absolute-full", key: "img" + u },
        g("img", d)
      );
    }
    function w() {
      return C.value === !1 ? g("div", {
        key: "content",
        class: "q-img__content absolute-full q-anchor--skip"
      }, G(t[L.value === !0 ? "error" : "default"])) : g("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, t.loading !== void 0 ? t.loading() : e.noSpinner === !0 ? void 0 : [
        g(vt, {
          color: e.spinnerColor,
          size: e.spinnerSize
        })
      ]);
    }
    {
      let u = function() {
        Q(
          () => e.src || e.srcset || e.sizes ? {
            src: e.src,
            srcset: e.srcset,
            sizes: e.sizes
          } : null,
          (S) => {
            r(), L.value = !1, S === null ? (T(), b[_.value ^ 1].value = c.value) : N(), b[_.value].value = S;
          },
          { immediate: !0 }
        );
      };
      xe.value === !0 ? ue(u) : u();
    }
    return () => {
      const u = [];
      return l.value !== null && u.push(
        g("div", { key: "filler", style: l.value })
      ), b[0].value !== null && u.push(
        v(0)
      ), b[1].value !== null && u.push(
        v(1)
      ), u.push(
        g(Ee, { name: "q-transition--fade" }, w)
      ), g("div", {
        key: "main",
        class: q.value,
        style: O.value,
        role: "img",
        "aria-label": e.alt
      }, u);
    };
  }
});
const On = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, zn = { class: "row" }, Nn = { class: "text-h4 text-primary" }, In = {
  __name: "CampaignHeader",
  props: {
    title: { type: String, required: !0 },
    image: { type: String, required: !0 }
  },
  setup(e) {
    return (t, n) => (ve(), nt(Wt, null, [
      ce("div", zn, [
        ce("div", Nn, re(e.title), 1)
      ]),
      K(Dn, {
        src: e.image,
        height: "350px",
        class: "rounded-img"
      }, null, 8, ["src"])
    ], 64));
  }
}, Xt = /* @__PURE__ */ On(In, [["__scopeId", "data-v-74f622ef"]]), jn = ["top", "middle", "bottom"], Hn = Y({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (e) => jn.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = s(() => e.align !== void 0 ? { verticalAlign: e.align } : null), o = s(() => {
      const l = e.outline === !0 && e.color || e.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "");
    });
    return () => g("div", {
      class: o.value,
      style: n.value,
      role: "status",
      "aria-label": e.label
    }, de(t.default, e.label !== void 0 ? [e.label] : []));
  }
}), Me = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Re(e, t) {
  return s(() => e.dark === null ? t.dark.isActive : e.dark);
}
const Kn = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function yt(e, t, n) {
  return {
    transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
  };
}
const Qn = Y({
  name: "QLinearProgress",
  props: {
    ...Me,
    ...dt,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: n } = W(), o = Re(e, n.$q), l = ft(e, Kn), a = s(() => e.indeterminate === !0 || e.query === !0), i = s(() => e.reverse !== e.query), r = s(() => ({
      ...l.value !== null ? l.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), y = s(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), p = s(() => yt(e.buffer !== void 0 ? e.buffer : 1, i.value, n.$q)), c = s(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), h = s(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${o.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), b = s(() => yt(a.value === !0 ? 1 : e.value, i.value, n.$q)), _ = s(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${a.value === !0 ? "in" : ""}determinate`
    ), C = s(() => ({ width: `${e.value * 100}%` })), L = s(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${c.value}`
    );
    return () => {
      const q = [
        g("div", {
          class: h.value,
          style: p.value
        }),
        g("div", {
          class: _.value,
          style: b.value
        })
      ];
      return e.stripe === !0 && a.value === !1 && q.push(
        g("div", {
          class: L.value,
          style: C.value
        })
      ), g("div", {
        class: y.value,
        style: r.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, de(t.default, q));
    };
  }
}), Gt = Y({
  name: "QCard",
  props: {
    ...Me,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = W(), o = Re(e, n), l = s(
      () => "q-card" + (o.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => g(e.tag, { class: l.value }, G(t.default));
  }
}), Jt = Cn(
  {}.VITE_SUPABASE_URL,
  {}.VITE_SUPABASE_ANON_KEY
);
function en(e) {
  const t = R(""), n = R(""), o = R(0), l = R(""), a = R(""), i = R(0);
  async function r() {
    const { data: y } = await Jt.from("crowdfunding").select("*").eq("id", e).single();
    if (y) {
      t.value = y.campaign_title, n.value = y.campaign_image_url, o.value = y.campaign_goal, l.value = y.campaign_end_date, a.value = y.campaign_description;
      const p = new Date(l.value).getTime() - Date.now();
      i.value = Math.ceil(p / (1e3 * 60 * 60 * 24));
    }
  }
  return ue(r), { title: t, image: n, goal: o, endDate: l, description: a, daysLeft: i };
}
const Un = { class: "text-subtitle2" }, Wn = { class: "absolute-full flex flex-center" }, Zn = { class: "q-mt-sm" }, tn = {
  __name: "CampaignStats",
  props: { goal: { type: Number, required: !0 } },
  setup(e) {
    const t = e, { totalDonations: n, supporters: o, daysLeft: l } = en(1), a = s(
      () => Math.round(n.value / t.goal * 100)
    );
    function i(r) {
      return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(r);
    }
    return (r, y) => (ve(), Ie(Gt, {
      flat: "",
      class: "q-pa-md"
    }, {
      default: X(() => [
        ce("div", Un, re(ke(o)) + " supporters", 1),
        K(Qn, {
          value: a.value / 100,
          stripe: "",
          rounded: "",
          size: "20px"
        }, {
          default: X(() => [
            ce("div", Wn, [
              K(Hn, {
                label: a.value + "%"
              }, null, 8, ["label"])
            ])
          ]),
          _: 1
        }, 8, ["value"]),
        ce("div", Zn, re(i(ke(n))) + " / " + re(i(e.goal)), 1),
        ce("div", null, re(ke(l)) + " dagen over", 1)
      ]),
      _: 1
    }));
  }
}, Qe = Y({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = s(() => parseInt(e.lines, 10)), o = s(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), l = s(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => g("div", {
      style: l.value,
      class: o.value
    }, G(t.default));
  }
}), pt = Y({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => g("div", { class: n.value }, G(t.default));
  }
});
function wt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function kt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yn(e, t) {
  for (const n in t) {
    const o = t[n], l = e[n];
    if (typeof o == "string") {
      if (o !== l)
        return !1;
    } else if (Array.isArray(l) === !1 || l.length !== o.length || o.some((a, i) => a !== l[i]))
      return !1;
  }
  return !0;
}
function xt(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Xn(e, t) {
  return Array.isArray(e) === !0 ? xt(e, t) : Array.isArray(t) === !0 ? xt(t, e) : e === t;
}
function Gn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (Xn(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const nn = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
}, Jn = {
  ...nn,
  // router-link
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  }
};
function ln({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = W(), { props: o, proxy: l, emit: a } = n, i = Yt(n), r = s(() => o.disable !== !0 && o.href !== void 0), y = t === !0 ? s(
    () => i === !0 && o.disable !== !0 && r.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== ""
  ) : s(
    () => i === !0 && r.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== ""
  ), p = s(() => y.value === !0 ? x(o.to) : null), c = s(() => p.value !== null), h = s(() => r.value === !0 || c.value === !0), b = s(() => o.type === "a" || h.value === !0 ? "a" : o.tag || e || "div"), _ = s(() => r.value === !0 ? {
    href: o.href,
    target: o.target
  } : c.value === !0 ? {
    href: p.value.href,
    target: o.target
  } : {}), C = s(() => {
    if (c.value === !1)
      return -1;
    const { matched: T } = p.value, { length: P } = T, V = T[P - 1];
    if (V === void 0)
      return -1;
    const z = l.$route.matched;
    if (z.length === 0)
      return -1;
    const f = z.findIndex(
      kt.bind(null, V)
    );
    if (f !== -1)
      return f;
    const v = wt(T[P - 2]);
    return (
      // we are dealing with nested routes
      P > 1 && wt(V) === v && z[z.length - 1].path !== v ? z.findIndex(
        kt.bind(null, T[P - 2])
      ) : f
    );
  }), L = s(
    () => c.value === !0 && C.value !== -1 && Yn(l.$route.params, p.value.params)
  ), q = s(
    () => L.value === !0 && C.value === l.$route.matched.length - 1 && Gn(l.$route.params, p.value.params)
  ), O = s(() => c.value === !0 ? q.value === !0 ? ` ${o.exactActiveClass} ${o.activeClass}` : o.exact === !0 ? "" : L.value === !0 ? ` ${o.activeClass}` : "" : "");
  function x(T) {
    try {
      return l.$router.resolve(T);
    } catch {
    }
    return null;
  }
  function $(T, { returnRouterError: P, to: V = o.to, replace: z = o.replace } = {}) {
    if (o.disable === !0)
      return T.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      T.metaKey || T.altKey || T.ctrlKey || T.shiftKey || T.button !== void 0 && T.button !== 0 || o.target === "_blank"
    )
      return Promise.resolve(!1);
    T.preventDefault();
    const f = l.$router[z === !0 ? "replace" : "push"](V);
    return P === !0 ? f : f.then(() => {
    }).catch(() => {
    });
  }
  function N(T) {
    if (c.value === !0) {
      const P = (V) => $(T, V);
      a("click", T, P), T.defaultPrevented !== !0 && P();
    } else
      a("click", T);
  }
  return {
    hasRouterLink: c,
    hasHrefLink: r,
    hasLink: h,
    linkTag: b,
    resolvedLink: p,
    linkIsActive: L,
    linkIsExactActive: q,
    linkClass: O,
    linkAttrs: _,
    getLink: x,
    navigateToRouterLink: $,
    navigateOnClick: N
  };
}
const le = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(le, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function el(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function tl(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML")
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function Oe(e) {
  e.stopPropagation();
}
function we(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function ae(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function nl(e, t, n) {
  const o = `__q_${t}_evt`;
  e[o] = e[o] !== void 0 ? e[o].concat(n) : n, n.forEach((l) => {
    l[0].addEventListener(l[1], e[l[2]], le[l[3]]);
  });
}
function ll(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((o) => {
    o[0].removeEventListener(o[1], e[o[2]], le[o[3]]);
  }), e[n] = void 0);
}
function on(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Be(e, t) {
  return on(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
const ol = Y({
  name: "QItem",
  props: {
    ...Me,
    ...Jn,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: o } } = W(), l = Re(e, o), { hasLink: a, linkAttrs: i, linkClass: r, linkTag: y, navigateOnClick: p } = ln(), c = R(null), h = R(null), b = s(
      () => e.clickable === !0 || a.value === !0 || e.tag === "label"
    ), _ = s(
      () => e.disable !== !0 && b.value === !0
    ), C = s(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (l.value === !0 ? " q-item--dark" : "") + (a.value === !0 && e.active === null ? r.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (_.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), L = s(() => e.insetLevel === void 0 ? null : {
      ["padding" + (o.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function q($) {
      _.value === !0 && (h.value !== null && $.qAvoidFocus !== !0 && ($.qKeyEvent !== !0 && document.activeElement === c.value ? h.value.focus() : document.activeElement === h.value && c.value.focus()), p($));
    }
    function O($) {
      if (_.value === !0 && Be($, [13, 32]) === !0) {
        ae($), $.qKeyEvent = !0;
        const N = new MouseEvent("click", $);
        N.qKeyEvent = !0, c.value.dispatchEvent(N);
      }
      n("keyup", $);
    }
    function x() {
      const $ = Fn(t.default, []);
      return _.value === !0 && $.unshift(
        g("div", { class: "q-focus-helper", tabindex: -1, ref: h })
      ), $;
    }
    return () => {
      const $ = {
        ref: c,
        class: C.value,
        style: L.value,
        role: "listitem",
        onClick: q,
        onKeyup: O
      };
      return _.value === !0 ? ($.tabindex = e.tabindex || "0", Object.assign($, i.value)) : b.value === !0 && ($["aria-disabled"] = "true"), g(
        y.value,
        $,
        x()
      );
    };
  }
}), al = ["ul", "ol"], il = Y({
  name: "QList",
  props: {
    ...Me,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t }) {
    const n = W(), o = Re(e, n.proxy.$q), l = s(
      () => al.includes(e.tag) ? null : "list"
    ), a = s(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (o.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => g(e.tag, { class: a.value, role: l.value }, G(t.default));
  }
}), an = {
  __name: "DonationList",
  props: { donations: { type: Array, required: !0 } },
  setup(e) {
    function t(n) {
      return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n);
    }
    return (n, o) => (ve(), nt("div", null, [
      o[0] || (o[0] = ce("div", { class: "text-h6" }, "Recent Donaties", -1)),
      K(il, null, {
        default: X(() => [
          (ve(!0), nt(Wt, null, wn(e.donations, (l) => (ve(), Ie(ol, {
            key: l.id
          }, {
            default: X(() => [
              K(pt, null, {
                default: X(() => [
                  K(Qe, null, {
                    default: X(() => [
                      De(re(l.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  K(Qe, { caption: "" }, {
                    default: X(() => [
                      De(re(l.message), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              K(pt, { side: "" }, {
                default: X(() => [
                  K(Qe, { caption: "" }, {
                    default: X(() => [
                      De(re(t(l.amount)), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, qt = Y({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(e, { slots: t }) {
    const n = s(
      () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`
    );
    return () => g(e.tag, { class: n.value }, G(t.default));
  }
}), _t = "0 0 24 24", Ue = (e) => e, We = (e) => `ionicons ${e}`, rn = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": Ue,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": We,
  "ion-ios": We,
  "ion-logo": We,
  "iconfont ": Ue,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`,
  "i-": Ue
  // UnoCSS pure icons
}, un = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, sn = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, rl = new RegExp("^(" + Object.keys(rn).join("|") + ")"), ul = new RegExp("^(" + Object.keys(un).join("|") + ")"), St = new RegExp("^(" + Object.keys(sn).join("|") + ")"), sl = /^[Mm]\s?[-+]?\.?\d/, cl = /^img:/, dl = /^svguse:/, fl = /^ion-/, vl = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, ze = Y({
  name: "QIcon",
  props: {
    ...dt,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = W(), o = ft(e), l = s(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), a = s(() => {
      let i, r = e.name;
      if (r === "none" || !r)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const c = n.iconMapFn(r);
        if (c !== void 0)
          if (c.icon !== void 0) {
            if (r = c.icon, r === "none" || !r)
              return { none: !0 };
          } else
            return {
              cls: c.cls,
              content: c.content !== void 0 ? c.content : " "
            };
      }
      if (sl.test(r) === !0) {
        const [c, h = _t] = r.split("|");
        return {
          svg: !0,
          viewBox: h,
          nodes: c.split("&&").map((b) => {
            const [_, C, L] = b.split("@@");
            return g("path", { style: C, d: _, transform: L });
          })
        };
      }
      if (cl.test(r) === !0)
        return {
          img: !0,
          src: r.substring(4)
        };
      if (dl.test(r) === !0) {
        const [c, h = _t] = r.split("|");
        return {
          svguse: !0,
          src: c.substring(7),
          viewBox: h
        };
      }
      let y = " ";
      const p = r.match(rl);
      if (p !== null)
        i = rn[p[1]](r);
      else if (vl.test(r) === !0)
        i = r;
      else if (fl.test(r) === !0)
        i = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${r.substring(3)}`;
      else if (St.test(r) === !0) {
        i = "notranslate material-symbols";
        const c = r.match(St);
        c !== null && (r = r.substring(6), i += sn[c[1]]), y = r;
      } else {
        i = "notranslate material-icons";
        const c = r.match(ul);
        c !== null && (r = r.substring(2), i += un[c[1]]), y = r;
      }
      return {
        cls: i,
        content: y
      };
    });
    return () => {
      const i = {
        class: l.value,
        style: o.value,
        "aria-hidden": "true"
      };
      return a.value.none === !0 ? g(e.tag, i, G(t.default)) : a.value.img === !0 ? g(e.tag, i, de(t.default, [
        g("img", { src: a.value.src })
      ])) : a.value.svg === !0 ? g(e.tag, i, de(t.default, [
        g("svg", {
          viewBox: a.value.viewBox || "0 0 24 24"
        }, a.value.nodes)
      ])) : a.value.svguse === !0 ? g(e.tag, i, de(t.default, [
        g("svg", {
          viewBox: a.value.viewBox
        }, [
          g("use", { "xlink:href": a.value.src })
        ])
      ])) : (a.value.cls !== void 0 && (i.class += " " + a.value.cls), g(e.tag, i, de(t.default, [
        a.value.content
      ])));
    };
  }
});
let Ze, Le = 0;
const Z = new Array(256);
for (let e = 0; e < 256; e++)
  Z[e] = (e + 256).toString(16).substring(1);
const ml = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const n = new Uint8Array(t);
        return e.getRandomValues(n), n;
      };
  }
  return (t) => {
    const n = [];
    for (let o = t; o > 0; o--)
      n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), Ct = 4096;
function rt() {
  (Ze === void 0 || Le + 16 > Ct) && (Le = 0, Ze = ml(Ct));
  const e = Array.prototype.slice.call(Ze, Le, Le += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Z[e[0]] + Z[e[1]] + Z[e[2]] + Z[e[3]] + "-" + Z[e[4]] + Z[e[5]] + "-" + Z[e[6]] + Z[e[7]] + "-" + Z[e[8]] + Z[e[9]] + "-" + Z[e[10]] + Z[e[11]] + Z[e[12]] + Z[e[13]] + Z[e[14]] + Z[e[15]];
}
function gl(e) {
  return e ?? null;
}
function Et(e, t) {
  return e ?? (t === !0 ? `f_${rt()}` : null);
}
function hl({ getValue: e, required: t = !0 } = {}) {
  if (xe.value === !0) {
    const n = e !== void 0 ? R(gl(e())) : R(null);
    return t === !0 && n.value === null && ue(() => {
      n.value = `f_${rt()}`;
    }), e !== void 0 && Q(e, (o) => {
      n.value = Et(o, t);
    }), n;
  }
  return e !== void 0 ? s(() => Et(e(), t)) : R(`f_${rt()}`);
}
const Bt = /^on[A-Z]/;
function bl() {
  const { attrs: e, vnode: t } = W(), n = {
    listeners: R({}),
    attributes: R({})
  };
  function o() {
    const l = {}, a = {};
    for (const i in e)
      i !== "class" && i !== "style" && Bt.test(i) === !1 && (l[i] = e[i]);
    for (const i in t.props)
      Bt.test(i) === !0 && (a[i] = t.props[i]);
    n.attributes.value = l, n.listeners.value = a;
  }
  return kn(o), o(), n;
}
const yl = "_q_l_", pl = "_q_pc_", wl = "_q_fo_";
function he() {
}
function kl({ validate: e, resetValidation: t, requiresQForm: n }) {
  const o = lt(wl, !1);
  if (o !== !1) {
    const { props: l, proxy: a } = W();
    Object.assign(a, { validate: e, resetValidation: t }), Q(() => l.disable, (i) => {
      i === !0 ? (typeof t == "function" && t(), o.unbindComponent(a)) : o.bindComponent(a);
    }), ue(() => {
      l.disable !== !0 && o.bindComponent(a);
    }), ie(() => {
      l.disable !== !0 && o.unbindComponent(a);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const $t = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, Mt = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Rt = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Pe = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Ve = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, Ye = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => $t.test(e),
  hexaColor: (e) => Mt.test(e),
  hexOrHexaColor: (e) => Rt.test(e),
  rgbColor: (e) => Pe.test(e),
  rgbaColor: (e) => Ve.test(e),
  rgbOrRgbaColor: (e) => Pe.test(e) || Ve.test(e),
  hexOrRgbColor: (e) => $t.test(e) || Pe.test(e),
  hexaOrRgbaColor: (e) => Mt.test(e) || Ve.test(e),
  anyColor: (e) => Rt.test(e) || Pe.test(e) || Ve.test(e)
};
function xl(e, t = 250, n) {
  let o = null;
  function l() {
    const a = arguments, i = () => {
      o = null, n !== !0 && e.apply(this, a);
    };
    o !== null ? clearTimeout(o) : n === !0 && e.apply(this, a), o = setTimeout(i, t);
  }
  return l.cancel = () => {
    o !== null && clearTimeout(o);
  }, l;
}
const ql = [!0, !1, "ondemand"], _l = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: !1,
    // statement unneeded but avoids future vue implementation changes
    validator: (e) => ql.includes(e)
  }
};
function Sl(e, t) {
  const { props: n, proxy: o } = W(), l = R(!1), a = R(null), i = R(!1);
  kl({ validate: L, resetValidation: C });
  let r = 0, y;
  const p = s(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), c = s(() => n.disable !== !0 && p.value === !0 && t.value === !1), h = s(
    () => n.error === !0 || l.value === !0
  ), b = s(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  Q(() => n.modelValue, () => {
    i.value = !0, c.value === !0 && n.lazyRules === !1 && q();
  });
  function _() {
    n.lazyRules !== "ondemand" && c.value === !0 && i.value === !0 && q();
  }
  Q(() => n.reactiveRules, (O) => {
    O === !0 ? y === void 0 && (y = Q(() => n.rules, _, { immediate: !0, deep: !0 })) : y !== void 0 && (y(), y = void 0);
  }, { immediate: !0 }), Q(() => n.lazyRules, _), Q(e, (O) => {
    O === !0 ? i.value = !0 : c.value === !0 && n.lazyRules !== "ondemand" && q();
  });
  function C() {
    r++, t.value = !1, i.value = !1, l.value = !1, a.value = null, q.cancel();
  }
  function L(O = n.modelValue) {
    if (n.disable === !0 || p.value === !1)
      return !0;
    const x = ++r, $ = t.value !== !0 ? () => {
      i.value = !0;
    } : () => {
    }, N = (P, V) => {
      P === !0 && $(), l.value = P, a.value = V || null, t.value = !1;
    }, T = [];
    for (let P = 0; P < n.rules.length; P++) {
      const V = n.rules[P];
      let z;
      if (typeof V == "function" ? z = V(O, Ye) : typeof V == "string" && Ye[V] !== void 0 && (z = Ye[V](O)), z === !1 || typeof z == "string")
        return N(!0, z), !1;
      z !== !0 && z !== void 0 && T.push(z);
    }
    return T.length === 0 ? (N(!1), !0) : (t.value = !0, Promise.all(T).then(
      (P) => {
        if (P === void 0 || Array.isArray(P) === !1 || P.length === 0)
          return x === r && N(!1), !0;
        const V = P.find((z) => z === !1 || typeof z == "string");
        return x === r && N(V !== void 0, V), V === void 0;
      },
      (P) => (x === r && (console.error(P), N(!0)), !1)
    ));
  }
  const q = xl(L, 0);
  return ie(() => {
    y == null || y(), q.cancel();
  }), Object.assign(o, { resetValidation: C, validate: L }), je(o, "hasError", () => h.value), {
    isDirtyModel: i,
    hasRules: p,
    hasError: h,
    errorMessage: b,
    validate: L,
    resetValidation: C
  };
}
let fe = [], $e = [];
function cn(e) {
  $e = $e.filter((t) => t !== e);
}
function Cl(e) {
  cn(e), $e.push(e);
}
function Tt(e) {
  cn(e), $e.length === 0 && fe.length !== 0 && (fe[fe.length - 1](), fe = []);
}
function mt(e) {
  $e.length === 0 ? e() : fe.push(e);
}
function El(e) {
  fe = fe.filter((t) => t !== e);
}
function ut(e) {
  return e != null && ("" + e).length !== 0;
}
const Bl = {
  ...Me,
  ..._l,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
}, $l = {
  ...Bl,
  maxlength: [Number, String]
}, Ml = ["update:modelValue", "clear", "focus", "blur"];
function Rl({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: o, proxy: l } = W(), a = Re(o, l.$q), i = hl({
    required: e,
    getValue: () => o.for
  });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag: t === !0 ? s(() => o.tag) : { value: "label" },
    isDark: a,
    editable: s(
      () => o.disable !== !0 && o.readonly !== !0
    ),
    innerLoading: R(!1),
    focused: R(!1),
    hasPopupOpen: !1,
    splitAttrs: bl(),
    targetUid: i,
    rootRef: R(null),
    targetRef: R(null),
    controlRef: R(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function Tl(e) {
  const { props: t, emit: n, slots: o, attrs: l, proxy: a } = W(), { $q: i } = a;
  let r = null;
  e.hasValue === void 0 && (e.hasValue = s(() => ut(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (k) => {
    n("update:modelValue", k);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: f,
    onFocusout: v
  }), Object.assign(e, {
    clearValue: w,
    onControlFocusin: f,
    onControlFocusout: v,
    focus: V
  }), e.computedCounter === void 0 && (e.computedCounter = s(() => {
    if (t.counter !== !1) {
      const k = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, A = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return k + (A !== void 0 ? " / " + A : "");
    }
  }));
  const {
    isDirtyModel: y,
    hasRules: p,
    hasError: c,
    errorMessage: h,
    resetValidation: b
  } = Sl(e.focused, e.innerLoading), _ = e.floatingLabel !== void 0 ? s(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : s(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), C = s(
    () => t.bottomSlots === !0 || t.hint !== void 0 || p.value === !0 || t.counter === !0 || t.error !== null
  ), L = s(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), q = s(
    () => `q-field row no-wrap items-start q-field--${L.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (_.value === !0 ? " q-field--float" : "") + (x.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (c.value === !0 ? " q-field--error" : "") + (c.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && C.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), O = s(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), x = s(
    () => t.labelSlot === !0 || t.label !== void 0
  ), $ = s(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== !0 ? ` text-${t.labelColor}` : "")
  ), N = s(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: _.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), T = s(() => {
    const k = {};
    return e.targetUid.value && (k.for = e.targetUid.value), t.disable === !0 && (k["aria-disabled"] = "true"), k;
  });
  function P() {
    var D;
    const k = document.activeElement;
    let A = (D = e.targetRef) == null ? void 0 : D.value;
    A && (k === null || k.id !== e.targetUid.value) && (A.hasAttribute("tabindex") === !0 || (A = A.querySelector("[tabindex]")), A !== k && (A == null || A.focus({ preventScroll: !0 })));
  }
  function V() {
    mt(P);
  }
  function z() {
    El(P);
    const k = document.activeElement;
    k !== null && e.rootRef.value.contains(k) && k.blur();
  }
  function f(k) {
    r !== null && (clearTimeout(r), r = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", k));
  }
  function v(k, A) {
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", k)), A == null || A());
    });
  }
  function w(k) {
    var A;
    ae(k), i.platform.is.mobile !== !0 ? (((A = e.targetRef) == null ? void 0 : A.value) || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === !0 && n("change", null), n("clear", t.modelValue), oe(() => {
      const D = y.value;
      b(), y.value = D;
    });
  }
  function u(k) {
    [13, 32].includes(k.keyCode) && w(k);
  }
  function S() {
    const k = [];
    return o.prepend !== void 0 && k.push(
      g("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: we
      }, o.prepend())
    ), k.push(
      g("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, d())
    ), c.value === !0 && t.noErrorIcon === !1 && k.push(
      M("error", [
        g(ze, { name: i.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? k.push(
      M(
        "inner-loading-append",
        o.loading !== void 0 ? o.loading() : [g(vt, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && k.push(
      M("inner-clearable-append", [
        g(ze, {
          class: "q-field__focusable-action",
          name: t.clearIcon || i.iconSet.field.clear,
          tabindex: 0,
          role: "button",
          "aria-hidden": "false",
          "aria-label": i.lang.label.clear,
          onKeyup: u,
          onClick: w
        })
      ])
    ), o.append !== void 0 && k.push(
      g("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: we
      }, o.append())
    ), e.getInnerAppend !== void 0 && k.push(
      M("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && k.push(
      e.getControlChild()
    ), k;
  }
  function d() {
    const k = [];
    return t.prefix !== void 0 && t.prefix !== null && k.push(
      g("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && k.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? k.push(e.getControl()) : o.rawControl !== void 0 ? k.push(o.rawControl()) : o.control !== void 0 && k.push(
      g("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, o.control(N.value))
    ), x.value === !0 && k.push(
      g("div", {
        class: $.value
      }, G(o.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && k.push(
      g("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), k.concat(G(o.default));
  }
  function B() {
    let k, A;
    c.value === !0 ? h.value !== null ? (k = [g("div", { role: "alert" }, h.value)], A = `q--slot-error-${h.value}`) : (k = G(o.error), A = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (k = [g("div", t.hint)], A = `q--slot-hint-${t.hint}`) : (k = G(o.hint), A = "q--slot-hint"));
    const D = t.counter === !0 || o.counter !== void 0;
    if (t.hideBottomSpace === !0 && D === !1 && k === void 0)
      return;
    const I = g("div", {
      key: A,
      class: "q-field__messages col"
    }, k);
    return g("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: we
    }, [
      t.hideBottomSpace === !0 ? I : g(Ee, { name: "q-transition--field-message" }, () => I),
      D === !0 ? g("div", {
        class: "q-field__counter"
      }, o.counter !== void 0 ? o.counter() : e.computedCounter.value) : null
    ]);
  }
  function M(k, A) {
    return A === null ? null : g("div", {
      key: k,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, A);
  }
  let F = !1;
  return ct(() => {
    F = !0;
  }), xn(() => {
    F === !0 && t.autofocus === !0 && a.focus();
  }), t.autofocus === !0 && ue(() => {
    a.focus();
  }), ie(() => {
    r !== null && clearTimeout(r);
  }), Object.assign(a, { focus: V, blur: z }), function() {
    const A = e.getControl === void 0 && o.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...T.value
    } : T.value;
    return g(e.tag.value, {
      ref: e.rootRef,
      class: [
        q.value,
        l.class
      ],
      style: l.style,
      ...A
    }, [
      o.before !== void 0 ? g("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: we
      }, o.before()) : null,
      g("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        g("div", {
          ref: e.controlRef,
          class: O.value,
          tabindex: -1,
          ...e.controlEvents
        }, S()),
        C.value === !0 ? B() : null
      ]),
      o.after !== void 0 ? g("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: we
      }, o.after()) : null
    ]);
  };
}
const Lt = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, Ne = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, dn = Object.keys(Ne);
dn.forEach((e) => {
  Ne[e].regex = new RegExp(Ne[e].pattern);
});
const Ll = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + dn.join("") + "])|(.)", "g"), Pt = /[.*+?^${}()|[\]\\]/g, U = String.fromCharCode(1), Pl = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function Vl(e, t, n, o) {
  let l, a, i, r, y, p;
  const c = R(null), h = R(_());
  function b() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  Q(() => e.type + e.autogrow, L), Q(() => e.mask, (f) => {
    if (f !== void 0)
      q(h.value, !0);
    else {
      const v = V(h.value);
      L(), e.modelValue !== v && t("update:modelValue", v);
    }
  }), Q(() => e.fillMask + e.reverseFillMask, () => {
    c.value === !0 && q(h.value, !0);
  }), Q(() => e.unmaskedValue, () => {
    c.value === !0 && q(h.value);
  });
  function _() {
    if (L(), c.value === !0) {
      const f = T(V(e.modelValue));
      return e.fillMask !== !1 ? z(f) : f;
    }
    return e.modelValue;
  }
  function C(f) {
    if (f < l.length)
      return l.slice(-f);
    let v = "", w = l;
    const u = w.indexOf(U);
    if (u !== -1) {
      for (let S = f - w.length; S > 0; S--)
        v += U;
      w = w.slice(0, u) + v + w.slice(u);
    }
    return w;
  }
  function L() {
    if (c.value = e.mask !== void 0 && e.mask.length !== 0 && b(), c.value === !1) {
      r = void 0, l = "", a = "";
      return;
    }
    const f = Lt[e.mask] === void 0 ? e.mask : Lt[e.mask], v = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", w = v.replace(Pt, "\\$&"), u = [], S = [], d = [];
    let B = e.reverseFillMask === !0, M = "", F = "";
    f.replace(Ll, (I, m, j, J, ee) => {
      if (J !== void 0) {
        const E = Ne[J];
        d.push(E), F = E.negate, B === !0 && (S.push("(?:" + F + "+)?(" + E.pattern + "+)?(?:" + F + "+)?(" + E.pattern + "+)?"), B = !1), S.push("(?:" + F + "+)?(" + E.pattern + ")?");
      } else if (j !== void 0)
        M = "\\" + (j === "\\" ? "" : j), d.push(j), u.push("([^" + M + "]+)?" + M + "?");
      else {
        const E = m !== void 0 ? m : ee;
        M = E === "\\" ? "\\\\\\\\" : E.replace(Pt, "\\\\$&"), d.push(E), u.push("([^" + M + "]+)?" + M + "?");
      }
    });
    const k = new RegExp(
      "^" + u.join("") + "(" + (M === "" ? "." : "[^" + M + "]") + "+)?" + (M === "" ? "" : "[" + M + "]*") + "$"
    ), A = S.length - 1, D = S.map((I, m) => m === 0 && e.reverseFillMask === !0 ? new RegExp("^" + w + "*" + I) : m === A ? new RegExp(
      "^" + I + "(" + (F === "" ? "." : F) + "+)?" + (e.reverseFillMask === !0 ? "$" : w + "*")
    ) : new RegExp("^" + I));
    i = d, r = (I) => {
      const m = k.exec(e.reverseFillMask === !0 ? I : I.slice(0, d.length + 1));
      m !== null && (I = m.slice(1).join(""));
      const j = [], J = D.length;
      for (let ee = 0, E = I; ee < J; ee++) {
        const H = D[ee].exec(E);
        if (H === null)
          break;
        E = E.slice(H.shift().length), j.push(...H);
      }
      return j.length !== 0 ? j.join("") : I;
    }, l = d.map((I) => typeof I == "string" ? I : U).join(""), a = l.split(U).join(v);
  }
  function q(f, v, w) {
    const u = o.value, S = u.selectionEnd, d = u.value.length - S, B = V(f);
    v === !0 && L();
    const M = T(B), F = e.fillMask !== !1 ? z(M) : M, k = h.value !== F;
    u.value !== F && (u.value = F), k === !0 && (h.value = F), document.activeElement === u && oe(() => {
      if (F === a) {
        const D = e.reverseFillMask === !0 ? a.length : 0;
        u.setSelectionRange(D, D, "forward");
        return;
      }
      if (w === "insertFromPaste" && e.reverseFillMask !== !0) {
        const D = u.selectionEnd;
        let I = S - 1;
        for (let m = y; m <= I && m < D; m++)
          l[m] !== U && I++;
        x.right(u, I);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(w) !== -1) {
        const D = e.reverseFillMask === !0 ? S === 0 ? F.length > M.length ? 1 : 0 : Math.max(0, F.length - (F === a ? 0 : Math.min(M.length, d) + 1)) + 1 : S;
        u.setSelectionRange(D, D, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (k === !0) {
          const D = Math.max(0, F.length - (F === a ? 0 : Math.min(M.length, d + 1)));
          D === 1 && S === 1 ? u.setSelectionRange(D, D, "forward") : x.rightReverse(u, D);
        } else {
          const D = F.length - d;
          u.setSelectionRange(D, D, "backward");
        }
      else if (k === !0) {
        const D = Math.max(0, l.indexOf(U), Math.min(M.length, S) - 1);
        x.right(u, D);
      } else {
        const D = S - 1;
        x.right(u, D);
      }
    });
    const A = e.unmaskedValue === !0 ? V(F) : F;
    String(e.modelValue) !== A && (e.modelValue !== null || A !== "") && n(A, !0);
  }
  function O(f, v, w) {
    const u = T(V(f.value));
    v = Math.max(0, l.indexOf(U), Math.min(u.length, v)), y = v, f.setSelectionRange(v, w, "forward");
  }
  const x = {
    left(f, v) {
      const w = l.slice(v - 1).indexOf(U) === -1;
      let u = Math.max(0, v - 1);
      for (; u >= 0; u--)
        if (l[u] === U) {
          v = u, w === !0 && v++;
          break;
        }
      if (u < 0 && l[v] !== void 0 && l[v] !== U)
        return x.right(f, 0);
      v >= 0 && f.setSelectionRange(v, v, "backward");
    },
    right(f, v) {
      const w = f.value.length;
      let u = Math.min(w, v + 1);
      for (; u <= w; u++)
        if (l[u] === U) {
          v = u;
          break;
        } else
          l[u - 1] === U && (v = u);
      if (u > w && l[v - 1] !== void 0 && l[v - 1] !== U)
        return x.left(f, w);
      f.setSelectionRange(v, v, "forward");
    },
    leftReverse(f, v) {
      const w = C(f.value.length);
      let u = Math.max(0, v - 1);
      for (; u >= 0; u--)
        if (w[u - 1] === U) {
          v = u;
          break;
        } else if (w[u] === U && (v = u, u === 0))
          break;
      if (u < 0 && w[v] !== void 0 && w[v] !== U)
        return x.rightReverse(f, 0);
      v >= 0 && f.setSelectionRange(v, v, "backward");
    },
    rightReverse(f, v) {
      const w = f.value.length, u = C(w), S = u.slice(0, v + 1).indexOf(U) === -1;
      let d = Math.min(w, v + 1);
      for (; d <= w; d++)
        if (u[d - 1] === U) {
          v = d, v > 0 && S === !0 && v--;
          break;
        }
      if (d > w && u[v - 1] !== void 0 && u[v - 1] !== U)
        return x.leftReverse(f, w);
      f.setSelectionRange(v, v, "forward");
    }
  };
  function $(f) {
    t("click", f), p = void 0;
  }
  function N(f) {
    if (t("keydown", f), on(f) === !0 || f.altKey === !0)
      return;
    const v = o.value, w = v.selectionStart, u = v.selectionEnd;
    if (f.shiftKey || (p = void 0), f.keyCode === 37 || f.keyCode === 39) {
      f.shiftKey && p === void 0 && (p = v.selectionDirection === "forward" ? w : u);
      const S = x[(f.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (f.preventDefault(), S(v, p === w ? u : w), f.shiftKey) {
        const d = v.selectionStart;
        v.setSelectionRange(Math.min(p, d), Math.max(p, d), "forward");
      }
    } else
      f.keyCode === 8 && e.reverseFillMask !== !0 && w === u ? (x.left(v, w), v.setSelectionRange(v.selectionStart, u, "backward")) : f.keyCode === 46 && e.reverseFillMask === !0 && w === u && (x.rightReverse(v, u), v.setSelectionRange(w, v.selectionEnd, "forward"));
  }
  function T(f) {
    if (f == null || f === "")
      return "";
    if (e.reverseFillMask === !0)
      return P(f);
    const v = i;
    let w = 0, u = "";
    for (let S = 0; S < v.length; S++) {
      const d = f[w], B = v[S];
      if (typeof B == "string")
        u += B, d === B && w++;
      else if (d !== void 0 && B.regex.test(d))
        u += B.transform !== void 0 ? B.transform(d) : d, w++;
      else
        return u;
    }
    return u;
  }
  function P(f) {
    const v = i, w = l.indexOf(U);
    let u = f.length - 1, S = "";
    for (let d = v.length - 1; d >= 0 && u !== -1; d--) {
      const B = v[d];
      let M = f[u];
      if (typeof B == "string")
        S = B + S, M === B && u--;
      else if (M !== void 0 && B.regex.test(M))
        do
          S = (B.transform !== void 0 ? B.transform(M) : M) + S, u--, M = f[u];
        while (w === d && M !== void 0 && B.regex.test(M));
      else
        return S;
    }
    return S;
  }
  function V(f) {
    return typeof f != "string" || r === void 0 ? typeof f == "number" ? r("" + f) : f : r(f);
  }
  function z(f) {
    return a.length - f.length <= 0 ? f : e.reverseFillMask === !0 && f.length !== 0 ? a.slice(0, -f.length) + f : f + a.slice(f.length);
  }
  return {
    innerValue: h,
    hasMask: c,
    moveCursorForPaste: O,
    updateMaskValue: q,
    onMaskedKeydown: N,
    onMaskedClick: $
  };
}
const Fl = {
  name: String
};
function Al(e) {
  return s(() => e.name || e.for);
}
function Dl(e, t) {
  function n() {
    const o = e.modelValue;
    try {
      const l = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(o) === o && ("length" in o ? Array.from(o) : [o]).forEach((a) => {
        l.items.add(a);
      }), {
        files: l.files
      };
    } catch {
      return {
        files: void 0
      };
    }
  }
  return t === !0 ? s(() => {
    if (e.type === "file")
      return n();
  }) : s(n);
}
const Ol = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, zl = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Nl = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, Il = /[a-z0-9_ -]$/i;
function jl(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0)
        return;
      n.target.qComposing = !1, e(n);
    } else
      n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (ne.is.firefox === !0 ? Il.test(n.data) === !1 : Ol.test(n.data) === !0 || zl.test(n.data) === !0 || Nl.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
const Xe = Y({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...$l,
    ...Pl,
    ...Fl,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...Ml,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: o } = W(), { $q: l } = o, a = {};
    let i = NaN, r, y, p = null, c;
    const h = R(null), b = Al(e), {
      innerValue: _,
      hasMask: C,
      moveCursorForPaste: L,
      updateMaskValue: q,
      onMaskedKeydown: O,
      onMaskedClick: x
    } = Vl(e, t, M, h), $ = Dl(
      e,
      /* type guard */
      !0
    ), N = s(() => ut(_.value)), T = jl(d), P = Rl({ changeEvent: !0 }), V = s(
      () => e.type === "textarea" || e.autogrow === !0
    ), z = s(
      () => V.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), f = s(() => {
      const m = {
        ...P.splitAttrs.listeners.value,
        onInput: d,
        onPaste: S,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: k,
        onBlur: A,
        onFocus: Oe
      };
      return m.onCompositionstart = m.onCompositionupdate = m.onCompositionend = T, C.value === !0 && (m.onKeydown = O, m.onClick = x), e.autogrow === !0 && (m.onAnimationend = B), m;
    }), v = s(() => {
      const m = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: b.value,
        ...P.splitAttrs.attributes.value,
        id: P.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return V.value === !1 && (m.type = e.type), e.autogrow === !0 && (m.rows = 1), m;
    });
    Q(() => e.type, () => {
      h.value && (h.value.value = e.modelValue);
    }), Q(() => e.modelValue, (m) => {
      if (C.value === !0) {
        if (y === !0 && (y = !1, String(m) === i))
          return;
        q(m);
      } else
        _.value !== m && (_.value = m, e.type === "number" && a.hasOwnProperty("value") === !0 && (r === !0 ? r = !1 : delete a.value));
      e.autogrow === !0 && oe(F);
    }), Q(() => e.autogrow, (m) => {
      m === !0 ? oe(F) : h.value !== null && n.rows > 0 && (h.value.style.height = "auto");
    }), Q(() => e.dense, () => {
      e.autogrow === !0 && oe(F);
    });
    function w() {
      mt(() => {
        const m = document.activeElement;
        h.value !== null && h.value !== m && (m === null || m.id !== P.targetUid.value) && h.value.focus({ preventScroll: !0 });
      });
    }
    function u() {
      var m;
      (m = h.value) == null || m.select();
    }
    function S(m) {
      if (C.value === !0 && e.reverseFillMask !== !0) {
        const j = m.target;
        L(j, j.selectionStart, j.selectionEnd);
      }
      t("paste", m);
    }
    function d(m) {
      if (!m || !m.target)
        return;
      if (e.type === "file") {
        t("update:modelValue", m.target.files);
        return;
      }
      const j = m.target.value;
      if (m.target.qComposing === !0) {
        a.value = j;
        return;
      }
      if (C.value === !0)
        q(j, !1, m.inputType);
      else if (M(j), z.value === !0 && m.target === document.activeElement) {
        const { selectionStart: J, selectionEnd: ee } = m.target;
        J !== void 0 && ee !== void 0 && oe(() => {
          m.target === document.activeElement && j.indexOf(m.target.value) === 0 && m.target.setSelectionRange(J, ee);
        });
      }
      e.autogrow === !0 && F();
    }
    function B(m) {
      t("animationend", m), F();
    }
    function M(m, j) {
      c = () => {
        p = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== m && i !== m && (i = m, j === !0 && (y = !0), t("update:modelValue", m), oe(() => {
          i === m && (i = NaN);
        })), c = void 0;
      }, e.type === "number" && (r = !0, a.value = m), e.debounce !== void 0 ? (p !== null && clearTimeout(p), a.value = m, p = setTimeout(c, e.debounce)) : c();
    }
    function F() {
      requestAnimationFrame(() => {
        const m = h.value;
        if (m !== null) {
          const j = m.parentNode.style, { scrollTop: J } = m, { overflowY: ee, maxHeight: E } = l.platform.is.firefox === !0 ? {} : window.getComputedStyle(m), H = ee !== void 0 && ee !== "scroll";
          H === !0 && (m.style.overflowY = "hidden"), j.marginBottom = m.scrollHeight - 1 + "px", m.style.height = "1px", m.style.height = m.scrollHeight + "px", H === !0 && (m.style.overflowY = parseInt(E, 10) < m.scrollHeight ? "auto" : "hidden"), j.marginBottom = "", m.scrollTop = J;
        }
      });
    }
    function k(m) {
      T(m), p !== null && (clearTimeout(p), p = null), c == null || c(), t("change", m.target.value);
    }
    function A(m) {
      m !== void 0 && Oe(m), p !== null && (clearTimeout(p), p = null), c == null || c(), r = !1, y = !1, delete a.value, e.type !== "file" && setTimeout(() => {
        h.value !== null && (h.value.value = _.value !== void 0 ? _.value : "");
      });
    }
    function D() {
      return a.hasOwnProperty("value") === !0 ? a.value : _.value !== void 0 ? _.value : "";
    }
    ie(() => {
      A();
    }), ue(() => {
      e.autogrow === !0 && F();
    }), Object.assign(P, {
      innerValue: _,
      fieldClass: s(
        () => `q-${V.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: s(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: h,
      emitValue: M,
      hasValue: N,
      floatingLabel: s(
        () => N.value === !0 && (e.type !== "number" || isNaN(_.value) === !1) || ut(e.displayValue)
      ),
      getControl: () => g(V.value === !0 ? "textarea" : "input", {
        ref: h,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...v.value,
        ...f.value,
        ...e.type !== "file" ? { value: D() } : $.value
      }),
      getShadowControl: () => g("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (V.value === !0 ? "" : " text-no-wrap")
      }, [
        g("span", { class: "invisible" }, D()),
        g("span", e.shadowText)
      ])
    });
    const I = Tl(P);
    return Object.assign(o, {
      focus: w,
      select: u,
      getNativeElement: () => h.value
      // deprecated
    }), je(o, "nativeEl", () => h.value), I;
  }
});
function Hl(e, t) {
  const n = e.style;
  for (const o in t)
    n[o] = t[o];
}
function Kl(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
function Ql(e, t = 250) {
  let n = !1, o;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), o = e.apply(this, arguments)), o;
  };
}
function Vt(e, t, n, o) {
  n.modifiers.stop === !0 && Oe(e);
  const l = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === !0 || o === !0;
  const i = document.createElement("span"), r = document.createElement("span"), y = el(e), { left: p, top: c, width: h, height: b } = t.getBoundingClientRect(), _ = Math.sqrt(h * h + b * b), C = _ / 2, L = `${(h - _) / 2}px`, q = a ? L : `${y.left - p - C}px`, O = `${(b - _) / 2}px`, x = a ? O : `${y.top - c - C}px`;
  r.className = "q-ripple__inner", Hl(r, {
    height: `${_}px`,
    width: `${_}px`,
    transform: `translate3d(${q},${x},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), i.className = `q-ripple${l ? " text-" + l : ""}`, i.setAttribute("dir", "ltr"), i.appendChild(r), t.appendChild(i);
  const $ = () => {
    i.remove(), clearTimeout(N);
  };
  n.abort.push($);
  let N = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${L},${O},0) scale3d(1,1,1)`, r.style.opacity = 0.2, N = setTimeout(() => {
      r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, N = setTimeout(() => {
        i.remove(), n.abort.splice(n.abort.indexOf($), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Ft(e, { modifiers: t, value: n, arg: o }) {
  const l = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: l.early === !0,
    stop: l.stop === !0,
    center: l.center === !0,
    color: l.color || o,
    keyCodes: [].concat(l.keyCodes || 13)
  };
}
const Ul = $n(
  {
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1)
        return;
      const o = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(l) {
          o.enabled === !0 && l.qSkipRipple !== !0 && l.type === (o.modifiers.early === !0 ? "pointerdown" : "click") && Vt(l, e, o, l.qKeyEvent === !0);
        },
        keystart: Ql((l) => {
          o.enabled === !0 && l.qSkipRipple !== !0 && Be(l, o.modifiers.keyCodes) === !0 && l.type === `key${o.modifiers.early === !0 ? "down" : "up"}` && Vt(l, e, o, !0);
        }, 300)
      };
      Ft(o, t), e.__qripple = o, nl(o, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && Ft(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), ll(t, "main"), delete e._qripple);
    }
  }
), fn = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Wl = Object.keys(fn), vn = {
  align: {
    type: String,
    validator: (e) => Wl.includes(e)
  }
};
function mn(e) {
  return s(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${fn[t]}`;
  });
}
const At = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, Zl = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Yl = ["button", "submit", "reset"], Xl = /[^\s]\/[^\s]/, Gl = ["flat", "outline", "push", "unelevated"];
function Jl(e, t) {
  return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t;
}
const eo = {
  ...dt,
  ...nn,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...Gl.reduce(
    (e, t) => (e[t] = Boolean) && e,
    {}
  ),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  align: {
    ...vn.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
}, to = {
  ...eo,
  round: Boolean
};
function no(e) {
  const t = ft(e, Zl), n = mn(e), { hasRouterLink: o, hasLink: l, linkTag: a, linkAttrs: i, navigateOnClick: r } = ln({
    fallbackTag: "button"
  }), y = s(() => {
    const q = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, q, {
      padding: e.padding.split(/\s+/).map((O) => O in At ? At[O] + "px" : O).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : q;
  }), p = s(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), c = s(
    () => e.disable !== !0 && e.loading !== !0
  ), h = s(() => c.value === !0 ? e.tabindex || 0 : -1), b = s(() => Jl(e, "standard")), _ = s(() => {
    const q = { tabindex: h.value };
    return l.value === !0 ? Object.assign(q, i.value) : Yl.includes(e.type) === !0 && (q.type = e.type), a.value === "a" ? (e.disable === !0 ? q["aria-disabled"] = "true" : q.href === void 0 && (q.role = "button"), o.value !== !0 && Xl.test(e.type) === !0 && (q.type = e.type)) : e.disable === !0 && (q.disabled = "", q["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(q, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), q;
  }), C = s(() => {
    let q;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? q = `text-${e.textColor || e.color}` : q = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (q = `text-${e.textColor}`);
    const O = e.round === !0 ? "round" : `rectangle${p.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${b.value} q-btn--${O}` + (q !== void 0 ? " " + q : "") + (c.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), L = s(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: C,
    style: y,
    innerClasses: L,
    attributes: _,
    hasLink: l,
    linkTag: a,
    navigateOnClick: r,
    isActionable: c
  };
}
const { passiveCapture: te } = le;
let be = null, ye = null, pe = null;
const st = Y({
  name: "QBtn",
  props: {
    ...to,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: o } = W(), {
      classes: l,
      style: a,
      innerClasses: i,
      attributes: r,
      hasLink: y,
      linkTag: p,
      navigateOnClick: c,
      isActionable: h
    } = no(e), b = R(null), _ = R(null);
    let C = null, L, q = null;
    const O = s(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), x = s(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: y.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), $ = s(() => ({ center: e.round })), N = s(() => {
      const d = Math.max(0, Math.min(100, e.percentage));
      return d > 0 ? { transition: "transform 0.6s", transform: `translateX(${d - 100}%)` } : {};
    }), T = s(() => {
      if (e.loading === !0)
        return {
          onMousedown: S,
          onTouchstart: S,
          onClick: S,
          onKeydown: S,
          onKeyup: S
        };
      if (h.value === !0) {
        const d = {
          onClick: V,
          onKeydown: z,
          onMousedown: v
        };
        if (o.$q.platform.has.touch === !0) {
          const B = e.onTouchstart !== void 0 ? "" : "Passive";
          d[`onTouchstart${B}`] = f;
        }
        return d;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: ae
      };
    }), P = s(() => ({
      ref: b,
      class: "q-btn q-btn-item non-selectable no-outline " + l.value,
      style: a.value,
      ...r.value,
      ...T.value
    }));
    function V(d) {
      if (b.value !== null) {
        if (d !== void 0) {
          if (d.defaultPrevented === !0)
            return;
          const B = document.activeElement;
          if (e.type === "submit" && B !== document.body && b.value.contains(B) === !1 && B.contains(b.value) === !1) {
            d.qAvoidFocus !== !0 && b.value.focus();
            const M = () => {
              var F;
              document.removeEventListener("keydown", ae, !0), document.removeEventListener("keyup", M, te), (F = b.value) == null || F.removeEventListener("blur", M, te);
            };
            document.addEventListener("keydown", ae, !0), document.addEventListener("keyup", M, te), b.value.addEventListener("blur", M, te);
          }
        }
        c(d);
      }
    }
    function z(d) {
      b.value !== null && (n("keydown", d), Be(d, [13, 32]) === !0 && ye !== b.value && (ye !== null && u(), d.defaultPrevented !== !0 && (d.qAvoidFocus !== !0 && b.value.focus(), ye = b.value, b.value.classList.add("q-btn--active"), document.addEventListener("keyup", w, !0), b.value.addEventListener("blur", w, te)), ae(d)));
    }
    function f(d) {
      b.value !== null && (n("touchstart", d), d.defaultPrevented !== !0 && (be !== b.value && (be !== null && u(), be = b.value, C = d.target, C.addEventListener("touchcancel", w, te), C.addEventListener("touchend", w, te)), L = !0, q !== null && clearTimeout(q), q = setTimeout(() => {
        q = null, L = !1;
      }, 200)));
    }
    function v(d) {
      b.value !== null && (d.qSkipRipple = L === !0, n("mousedown", d), d.defaultPrevented !== !0 && pe !== b.value && (pe !== null && u(), pe = b.value, b.value.classList.add("q-btn--active"), document.addEventListener("mouseup", w, te)));
    }
    function w(d) {
      if (b.value !== null && !((d == null ? void 0 : d.type) === "blur" && document.activeElement === b.value)) {
        if ((d == null ? void 0 : d.type) === "keyup") {
          if (ye === b.value && Be(d, [13, 32]) === !0) {
            const B = new MouseEvent("click", d);
            B.qKeyEvent = !0, d.defaultPrevented === !0 && we(B), d.cancelBubble === !0 && Oe(B), b.value.dispatchEvent(B), ae(d), d.qKeyEvent = !0;
          }
          n("keyup", d);
        }
        u();
      }
    }
    function u(d) {
      var M, F;
      const B = _.value;
      d !== !0 && (be === b.value || pe === b.value) && B !== null && B !== document.activeElement && (B.setAttribute("tabindex", -1), B.focus()), be === b.value && (C !== null && (C.removeEventListener("touchcancel", w, te), C.removeEventListener("touchend", w, te)), be = C = null), pe === b.value && (document.removeEventListener("mouseup", w, te), pe = null), ye === b.value && (document.removeEventListener("keyup", w, !0), (M = b.value) == null || M.removeEventListener("blur", w, te), ye = null), (F = b.value) == null || F.classList.remove("q-btn--active");
    }
    function S(d) {
      ae(d), d.qSkipRipple = !0;
    }
    return ie(() => {
      u(!0);
    }), Object.assign(o, {
      click: (d) => {
        h.value === !0 && V(d);
      }
    }), () => {
      let d = [];
      e.icon !== void 0 && d.push(
        g(ze, {
          name: e.icon,
          left: e.stack !== !0 && O.value === !0,
          role: "img"
        })
      ), O.value === !0 && d.push(
        g("span", { class: "block" }, [e.label])
      ), d = de(t.default, d), e.iconRight !== void 0 && e.round === !1 && d.push(
        g(ze, {
          name: e.iconRight,
          right: e.stack !== !0 && O.value === !0,
          role: "img"
        })
      );
      const B = [
        g("span", {
          class: "q-focus-helper",
          ref: _
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && B.push(
        g("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          g("span", {
            class: "q-btn__progress-indicator fit block",
            style: N.value
          })
        ])
      ), B.push(
        g("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + i.value
        }, d)
      ), e.loading !== null && B.push(
        g(Ee, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          g("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [g(vt)])
        ] : null)
      ), qn(
        g(
          p.value,
          P.value,
          B
        ),
        [[
          Ul,
          x.value,
          void 0,
          $.value
        ]]
      );
    };
  }
}), lo = Y({
  name: "QCardActions",
  props: {
    ...vn,
    vertical: Boolean
  },
  setup(e, { slots: t }) {
    const n = mn(e), o = s(
      () => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`
    );
    return () => g("div", { class: o.value }, G(t.default));
  }
});
function oo(e, t, n) {
  function o() {
  }
  return ie(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: o,
    addToHistory() {
    }
  };
}
function ao() {
  let e;
  const t = W();
  function n() {
    e = void 0;
  }
  return ct(n), ie(n), {
    removeTick: n,
    registerTick(o) {
      e = o, oe(() => {
        e === o && (Ce(t) === !1 && e(), e = void 0);
      });
    }
  };
}
const io = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, ro = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function uo({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: n,
  // optional
  handleShow: o,
  // optional
  handleHide: l,
  // optional
  processOnMount: a
  // optional
}) {
  const i = W(), { props: r, emit: y, proxy: p } = i;
  let c;
  function h(x) {
    e.value === !0 ? C(x) : b(x);
  }
  function b(x) {
    if (r.disable === !0 || (x == null ? void 0 : x.qAnchorHandled) === !0 || t !== void 0 && t(x) !== !0)
      return;
    const $ = r["onUpdate:modelValue"] !== void 0;
    $ === !0 && (y("update:modelValue", !0), c = x, oe(() => {
      c === x && (c = void 0);
    })), (r.modelValue === null || $ === !1) && _(x);
  }
  function _(x) {
    e.value !== !0 && (e.value = !0, y("beforeShow", x), o !== void 0 ? o(x) : y("show", x));
  }
  function C(x) {
    if (r.disable === !0)
      return;
    const $ = r["onUpdate:modelValue"] !== void 0;
    $ === !0 && (y("update:modelValue", !1), c = x, oe(() => {
      c === x && (c = void 0);
    })), (r.modelValue === null || $ === !1) && L(x);
  }
  function L(x) {
    e.value !== !1 && (e.value = !1, y("beforeHide", x), l !== void 0 ? l(x) : y("hide", x));
  }
  function q(x) {
    r.disable === !0 && x === !0 ? r["onUpdate:modelValue"] !== void 0 && y("update:modelValue", !1) : x === !0 !== e.value && (x === !0 ? _ : L)(c);
  }
  Q(() => r.modelValue, q), n !== void 0 && Yt(i) === !0 && Q(() => p.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && C();
  }), a === !0 && ue(() => {
    q(r.modelValue);
  });
  const O = { show: b, hide: C, toggle: h };
  return Object.assign(p, O), O;
}
const so = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function co(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: s(() => {
      const o = `q-transition--${e.transitionShow || t()}`, l = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${o}-enter-from`,
        enterActiveClass: `${o}-enter-active`,
        enterToClass: `${o}-enter-to`,
        leaveFromClass: `${l}-leave-from`,
        leaveActiveClass: `${l}-leave-active`,
        leaveToClass: `${l}-leave-to`
      };
    }),
    transitionStyle: s(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
const Dt = {};
let fo = 1, vo = document.body;
function mo(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${fo++}` : e, Dt.globalNodes !== void 0) {
    const o = Dt.globalNodes.class;
    o !== void 0 && (n.className = o);
  }
  return vo.appendChild(n), n;
}
function go(e) {
  e.remove();
}
const Ge = [], ho = Y({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  }
});
function bo(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function yo(e, t, n, o) {
  const l = R(!1), a = R(!1);
  let i = null;
  const r = {}, y = o === "dialog" && bo(e);
  function p(h) {
    if (h === !0) {
      Tt(r), a.value = !0;
      return;
    }
    a.value = !1, l.value === !1 && (y === !1 && i === null && (i = mo(!1, o)), l.value = !0, Ge.push(e.proxy), Cl(r));
  }
  function c(h) {
    if (a.value = !1, h !== !0)
      return;
    Tt(r), l.value = !1;
    const b = Ge.indexOf(e.proxy);
    b !== -1 && Ge.splice(b, 1), i !== null && (go(i), i = null);
  }
  return _n(() => {
    c(!0);
  }), e.proxy.__qPortal = !0, je(e.proxy, "contentEl", () => t.value), {
    showPortal: p,
    hidePortal: c,
    portalIsActive: l,
    portalIsAccessible: a,
    renderPortal: () => y === !0 ? n() : l.value === !0 ? [g(Sn, { to: i }, g(ho, n))] : void 0
  };
}
function po(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function wo(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function ko(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
let _e = 0, Je, et, Se, tt = !1, Ot, zt, Nt, se = null;
function xo(e) {
  qo(e) && ae(e);
}
function qo(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = tl(e), n = e.shiftKey && !e.deltaX, o = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), l = n || o ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const i = t[a];
    if (ko(i, o))
      return o ? l < 0 && i.scrollTop === 0 ? !0 : l > 0 && i.scrollTop + i.clientHeight === i.scrollHeight : l < 0 && i.scrollLeft === 0 ? !0 : l > 0 && i.scrollLeft + i.clientWidth === i.scrollWidth;
  }
  return !0;
}
function It(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Fe(e) {
  tt !== !0 && (tt = !0, requestAnimationFrame(() => {
    tt = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: o } = document.scrollingElement;
    (Se === void 0 || t !== window.innerHeight) && (Se = n - t, document.scrollingElement.scrollTop = o), o > Se && (document.scrollingElement.scrollTop -= Math.ceil((o - Se) / 8));
  }));
}
function jt(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: o, overflowX: l } = window.getComputedStyle(t);
    Je = wo(window), et = po(window), Ot = t.style.left, zt = t.style.top, Nt = window.location.href, t.style.left = `-${Je}px`, t.style.top = `-${et}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), o !== "hidden" && (o === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, ne.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Fe, le.passiveCapture), window.visualViewport.addEventListener("scroll", Fe, le.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", It, le.passiveCapture));
  }
  ne.is.desktop === !0 && ne.is.mac === !0 && window[`${e}EventListener`]("wheel", xo, le.notPassive), e === "remove" && (ne.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Fe, le.passiveCapture), window.visualViewport.removeEventListener("scroll", Fe, le.passiveCapture)) : window.removeEventListener("scroll", It, le.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = Ot, t.style.top = zt, window.location.href === Nt && window.scrollTo(Je, et), Se = void 0);
}
function _o(e) {
  let t = "add";
  if (e === !0) {
    if (_e++, se !== null) {
      clearTimeout(se), se = null;
      return;
    }
    if (_e > 1)
      return;
  } else {
    if (_e === 0 || (_e--, _e > 0))
      return;
    if (t = "remove", ne.is.ios === !0 && ne.is.nativeMobile === !0) {
      se !== null && clearTimeout(se), se = setTimeout(() => {
        jt(t), se = null;
      }, 100);
      return;
    }
  }
  jt(t);
}
function So() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, _o(t));
    }
  };
}
const me = [];
let qe;
function Co(e) {
  qe = e.keyCode === 27;
}
function Eo() {
  qe === !0 && (qe = !1);
}
function Bo(e) {
  qe === !0 && (qe = !1, Be(e, 27) === !0 && me[me.length - 1](e));
}
function gn(e) {
  window[e]("keydown", Co), window[e]("blur", Eo), window[e]("keyup", Bo), qe = !1;
}
function $o(e) {
  ne.is.desktop === !0 && (me.push(e), me.length === 1 && gn("addEventListener"));
}
function Ht(e) {
  const t = me.indexOf(e);
  t !== -1 && (me.splice(t, 1), me.length === 0 && gn("removeEventListener"));
}
const ge = [];
function hn(e) {
  ge[ge.length - 1](e);
}
function Mo(e) {
  ne.is.desktop === !0 && (ge.push(e), ge.length === 1 && document.body.addEventListener("focusin", hn));
}
function Kt(e) {
  const t = ge.indexOf(e);
  t !== -1 && (ge.splice(t, 1), ge.length === 0 && document.body.removeEventListener("focusin", hn));
}
let Ae = 0;
const Ro = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, Qt = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, To = Y({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...io,
    ...so,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e)
    }
  },
  emits: [
    ...ro,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: o }) {
    const l = W(), a = R(null), i = R(!1), r = R(!1);
    let y = null, p = null, c, h;
    const b = s(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: _ } = So(), { registerTimeout: C } = it(), { registerTick: L, removeTick: q } = ao(), { transitionProps: O, transitionStyle: x } = co(
      e,
      () => Qt[e.position][0],
      () => Qt[e.position][1]
    ), $ = s(() => x.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: N, hidePortal: T, portalIsAccessible: P, renderPortal: V } = yo(
      l,
      a,
      ee,
      "dialog"
    ), { hide: z } = uo({
      showing: i,
      hideOnRouteChange: b,
      handleShow: B,
      handleHide: M,
      processOnMount: !0
    }), { addToHistory: f, removeFromHistory: v } = oo(i), w = s(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Ro[e.position]}` + (r.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), u = s(() => i.value === !0 && e.seamless !== !0), S = s(() => e.autoClose === !0 ? { onClick: m } : {}), d = s(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${u.value === !0 ? "modal" : "seamless"}`,
      o.class
    ]);
    Q(() => e.maximized, (E) => {
      i.value === !0 && I(E);
    }), Q(u, (E) => {
      _(E), E === !0 ? (Mo(J), $o(A)) : (Kt(J), Ht(A));
    });
    function B(E) {
      var H;
      f(), p = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, I(e.maximized), N(), r.value = !0, e.noFocus !== !0 ? ((H = document.activeElement) == null || H.blur(), L(F)) : q(), C(() => {
        if (l.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: Te, bottom: He } = document.activeElement.getBoundingClientRect(), { innerHeight: gt } = window, Ke = window.visualViewport !== void 0 ? window.visualViewport.height : gt;
            Te > 0 && He > Ke / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - Ke,
              He >= gt ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + He - Ke / 2)
            )), document.activeElement.scrollIntoView();
          }
          h = !0, a.value.click(), h = !1;
        }
        N(!0), r.value = !1, n("show", E);
      }, e.transitionDuration);
    }
    function M(E) {
      q(), v(), D(!0), r.value = !0, T(), p !== null && ((((E == null ? void 0 : E.type.indexOf("key")) === 0 ? p.closest('[tabindex]:not([tabindex^="-"])') : void 0) || p).focus(), p = null), C(() => {
        T(!0), r.value = !1, n("hide", E);
      }, e.transitionDuration);
    }
    function F(E) {
      mt(() => {
        let H = a.value;
        if (H !== null) {
          if (E !== void 0) {
            const Te = H.querySelector(E);
            if (Te !== null) {
              Te.focus({ preventScroll: !0 });
              return;
            }
          }
          H.contains(document.activeElement) !== !0 && (H = H.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || H.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || H.querySelector("[autofocus], [data-autofocus]") || H, H.focus({ preventScroll: !0 }));
        }
      });
    }
    function k(E) {
      E && typeof E.focus == "function" ? E.focus({ preventScroll: !0 }) : F(), n("shake");
      const H = a.value;
      H !== null && (H.classList.remove("q-animate--scale"), H.classList.add("q-animate--scale"), y !== null && clearTimeout(y), y = setTimeout(() => {
        y = null, a.value !== null && (H.classList.remove("q-animate--scale"), F());
      }, 170));
    }
    function A() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && k() : (n("escapeKey"), z()));
    }
    function D(E) {
      y !== null && (clearTimeout(y), y = null), (E === !0 || i.value === !0) && (I(!1), e.seamless !== !0 && (_(!1), Kt(J), Ht(A))), E !== !0 && (p = null);
    }
    function I(E) {
      E === !0 ? c !== !0 && (Ae < 1 && document.body.classList.add("q-body--dialog"), Ae++, c = !0) : c === !0 && (Ae < 2 && document.body.classList.remove("q-body--dialog"), Ae--, c = !1);
    }
    function m(E) {
      h !== !0 && (z(E), n("click", E));
    }
    function j(E) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? z(E) : e.noShake !== !0 && k();
    }
    function J(E) {
      e.allowFocusOutside !== !0 && P.value === !0 && Kl(a.value, E.target) !== !0 && F('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(l.proxy, {
      // expose public methods
      focus: F,
      shake: k,
      // private but needed by QSelect
      __updateRefocusTarget(E) {
        p = E || null;
      }
    }), ie(D);
    function ee() {
      return g("div", {
        role: "dialog",
        "aria-modal": u.value === !0 ? "true" : "false",
        ...o,
        class: d.value
      }, [
        g(Ee, {
          name: "q-transition--fade",
          appear: !0
        }, () => u.value === !0 ? g("div", {
          class: "q-dialog__backdrop fixed-full",
          style: $.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: j
        }) : null),
        g(
          Ee,
          O.value,
          () => i.value === !0 ? g("div", {
            ref: a,
            class: w.value,
            style: x.value,
            tabindex: -1,
            ...S.value
          }, G(t.default)) : null
        )
      ]);
    }
    return V;
  }
}), bn = {
  __name: "DonationDialog",
  props: { modelValue: Boolean },
  emits: ["update:modelValue", "submitDonation"],
  setup(e, { emit: t }) {
    const n = t, o = e, l = R(""), a = R(0), i = R("");
    function r() {
      n("update:modelValue", !1);
    }
    function y() {
      n("submitDonation", { name: l.value, amount: a.value, message: i.value }), n("update:modelValue", !1);
    }
    return Q(() => o.modelValue, (p) => {
      p && (l.value = "", a.value = 0, i.value = "");
    }), (p, c) => (ve(), Ie(To, { "model-value": e.modelValue }, {
      default: X(() => [
        K(Gt, null, {
          default: X(() => [
            K(qt, { class: "text-h6" }, {
              default: X(() => c[3] || (c[3] = [
                De("Doneer")
              ])),
              _: 1
            }),
            K(qt, null, {
              default: X(() => [
                K(Xe, {
                  modelValue: l.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (h) => l.value = h),
                  label: "Naam"
                }, null, 8, ["modelValue"]),
                K(Xe, {
                  modelValue: a.value,
                  "onUpdate:modelValue": c[1] || (c[1] = (h) => a.value = h),
                  label: "Bedrag",
                  type: "number"
                }, null, 8, ["modelValue"]),
                K(Xe, {
                  modelValue: i.value,
                  "onUpdate:modelValue": c[2] || (c[2] = (h) => i.value = h),
                  label: "Bericht",
                  type: "textarea"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            K(lo, { align: "right" }, {
              default: X(() => [
                K(st, {
                  flat: "",
                  label: "Annuleer",
                  onClick: r
                }),
                K(st, {
                  flat: "",
                  label: "Doneer",
                  onClick: y
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
}, Lo = Y({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = W(), o = lt(yl, he);
    if (o === he)
      return console.error("QPage needs to be a deep child of QLayout"), he;
    if (lt(pl, he) === he)
      return console.error("QPage needs to be child of QPageContainer"), he;
    const a = s(() => {
      const r = (o.header.space === !0 ? o.header.size : 0) + (o.footer.space === !0 ? o.footer.size : 0);
      if (typeof e.styleFn == "function") {
        const y = o.isContainer.value === !0 ? o.containerHeight.value : n.screen.height;
        return e.styleFn(r, y);
      }
      return {
        minHeight: o.isContainer.value === !0 ? o.containerHeight.value - r + "px" : n.screen.height === 0 ? r !== 0 ? `calc(100vh - ${r}px)` : "100vh" : n.screen.height - r + "px"
      };
    }), i = s(
      () => `q-page${e.padding === !0 ? " q-layout-padding" : ""}`
    );
    return () => g("main", {
      class: i.value,
      style: a.value
    }, G(t.default));
  }
});
function Po() {
  const e = R([]), t = R(0), n = R(0);
  async function o() {
    const { data: l } = await Jt.from("donations").select("*").order("date", { ascending: !1 });
    l && (e.value = l, t.value = l.reduce((a, i) => a + i.amount, 0), n.value = l.length);
  }
  return ue(o), { donations: e, totalDonations: t, supporters: n };
}
const Vo = {
  __name: "CrowdfundingPage",
  setup(e) {
    const { title: t, image: n, goal: o, daysLeft: l } = en(1), { donations: a } = Po(), i = R(!1);
    function r() {
      i.value = !0;
    }
    function y(c) {
      a.value.unshift({ ...c, id: Date.now(), date: /* @__PURE__ */ new Date() });
    }
    const p = s(() => a.value.slice(0, 4));
    return (c, h) => (ve(), Ie(Lo, { padding: "" }, {
      default: X(() => [
        K(Xt, {
          title: ke(t),
          image: ke(n)
        }, null, 8, ["title", "image"]),
        K(tn, { goal: ke(o) }, null, 8, ["goal"]),
        K(st, {
          label: "Doneer",
          onClick: r,
          class: "q-my-md",
          color: "primary"
        }),
        K(bn, {
          modelValue: i.value,
          "onUpdate:modelValue": h[0] || (h[0] = (b) => i.value = b),
          onSubmitDonation: y
        }, null, 8, ["modelValue"]),
        K(an, { donations: p.value }, null, 8, ["donations"])
      ]),
      _: 1
    }));
  }
}, Do = {
  install(e) {
    e.component("CampaignHeader", Xt), e.component("CampaignStats", tn), e.component("DonationList", an), e.component("DonationDialog", bn), e.component("CrowdfundingPage", Vo);
  }
};
export {
  Xt as CampaignHeader,
  tn as CampaignStats,
  Vo as CrowdfundingPage,
  bn as DonationDialog,
  an as DonationList,
  Do as default
};
