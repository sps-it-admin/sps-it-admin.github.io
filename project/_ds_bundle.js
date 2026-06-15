/* @ds-bundle: {"format":3,"namespace":"StPhilomenaSchoolDesignSystem_b41775","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GoldDivider","sourcePath":"components/core/GoldDivider.jsx"},{"name":"PillarCard","sourcePath":"components/core/PillarCard.jsx"},{"name":"PullQuote","sourcePath":"components/core/PullQuote.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"59cadfedf220","components/core/Button.jsx":"e09a6c17c72f","components/core/GoldDivider.jsx":"454d724b34ce","components/core/PillarCard.jsx":"549225c6a546","components/core/PullQuote.jsx":"ea0005b72a45","components/core/SectionLabel.jsx":"7a6f26d06ae5","components/core/StatBlock.jsx":"f5e5ed6d259a","ui_kits/website/AboutScreen.jsx":"8d7b3af8fc4e","ui_kits/website/EnrolScreen.jsx":"99490c9a4c4e","ui_kits/website/Footer.jsx":"a9820139b784","ui_kits/website/Header.jsx":"9a2b75dd55d2","ui_kits/website/HomeScreen.jsx":"1150b8d203f6","ui_kits/website/shared.jsx":"c4d64b24ac60"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StPhilomenaSchoolDesignSystem_b41775 = window.StPhilomenaSchoolDesignSystem_b41775 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — the small Cinzel pill used for curriculum phase markers
 * ("Yr 7 & 8", "Yr 8 only") and other short status tags.
 */
function Badge({
  children,
  tone = "navy",
  style = {},
  ...props
}) {
  const tones = {
    navy: {
      background: "var(--navy-light)",
      color: "var(--gold-light)"
    },
    crimson: {
      background: "oklch(0.38 0.13 22 / 0.7)",
      color: "var(--gold-light)"
    },
    gold: {
      background: "var(--gold)",
      color: "var(--navy-dark)"
    },
    outline: {
      background: "transparent",
      color: "var(--crimson)",
      border: "1px solid var(--crimson)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontSize: "0.65rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "0.2rem 0.55rem",
      lineHeight: 1.4,
      ...(tones[tone] || tones.navy),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FONT_LABEL = '"Cinzel", "Times New Roman", serif';
const SIZES = {
  sm: {
    padding: "0.55rem 1.25rem",
    fontSize: "0.72rem"
  },
  md: {
    padding: "0.75rem 1.75rem",
    fontSize: "0.8rem"
  },
  lg: {
    padding: "0.95rem 2.25rem",
    fontSize: "0.85rem"
  }
};

/**
 * Button — the brand's signature call-to-action.
 * `primary`   : crimson fill with an offset gold outline (the hero CTA).
 * `secondary` : transparent with a gold border — for dark grounds.
 * `navy`      : solid navy fill — for cream/light grounds.
 * `ghost`     : text-only with a gold underline on hover.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  icon = null,
  iconRight = true,
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const sz = SIZES[size] || SIZES.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: FONT_LABEL,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    border: "1px solid transparent",
    borderRadius: "var(--radius-md, 2px)",
    transition: "background 0.3s ease, outline-color 0.3s ease, color 0.3s ease",
    ...sz
  };
  const variants = {
    primary: {
      background: hover ? "var(--crimson-deep)" : "var(--crimson)",
      color: "var(--cream)",
      border: "1px solid var(--crimson)",
      borderRadius: 0,
      outline: "1px solid var(--gold)",
      outlineOffset: "3px"
    },
    secondary: {
      background: hover ? "oklch(1 0 0 / 0.1)" : "transparent",
      color: "var(--cream)",
      border: "1px solid var(--gold)",
      borderRadius: 0
    },
    navy: {
      background: hover ? "var(--navy-dark)" : "var(--navy)",
      color: "var(--cream)",
      borderRadius: 0
    },
    ghost: {
      background: "transparent",
      color: "var(--crimson)",
      borderBottom: hover ? "1px solid var(--gold)" : "1px solid transparent",
      padding: "0.25rem 0",
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), icon && !iconRight ? icon : null, children, icon && iconRight ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GoldDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GoldDivider — a centred ornament: a label flanked by two thin gold
 * rules. The motto banner uses it; works for any short centred label.
 */
function GoldDivider({
  children,
  style = {},
  labelStyle = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "var(--gold)",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--gold)",
      opacity: 0.5
    }
  }), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontStyle: "italic",
      fontSize: "1.25rem",
      color: "var(--gold)",
      whiteSpace: "nowrap",
      padding: "0 0.5rem",
      ...labelStyle
    }
  }, children) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--gold)",
      opacity: 0.5
    }
  }));
}
Object.assign(__ds_scope, { GoldDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GoldDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PillarCard — the white bordered card used in the "Four Pillars" grid.
 * A crimson icon, a Playfair title, and a Lora body. Lifts on hover.
 */
function PillarCard({
  icon = null,
  title,
  children,
  style = {},
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--white)",
      border: "1px solid var(--cream-dark)",
      padding: "1.75rem",
      boxShadow: hover ? "var(--shadow-lg)" : "none",
      transition: "box-shadow 0.3s ease",
      ...style
    }
  }, props), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--crimson)",
      marginBottom: "1rem",
      lineHeight: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      color: "var(--navy)",
      fontSize: "1.125rem",
      margin: "0 0 0.75rem"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Lora", Georgia, serif',
      color: "oklch(0.27 0.065 250 / 0.65)",
      fontSize: "0.875rem",
      lineHeight: 1.65,
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PullQuote — an italic Playfair quotation with the brand's crimson
 * left-rule and an optional Cinzel attribution.
 */
function PullQuote({
  children,
  cite = null,
  tone = "light",
  style = {},
  ...props
}) {
  const quoteColor = tone === "dark" ? "var(--cream)" : "oklch(0.27 0.065 250 / 0.85)";
  const citeColor = tone === "dark" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      borderLeft: "3px solid var(--crimson)",
      paddingLeft: "1.25rem",
      margin: 0,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontStyle: "italic",
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: quoteColor,
      margin: 0
    }
  }, children), cite ? /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontSize: "0.7rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: citeColor,
      marginTop: "0.6rem"
    }
  }, cite) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the Cinzel small-caps eyebrow that opens almost every
 * section. Crimson on light grounds, gold on dark.
 */
function SectionLabel({
  children,
  tone = "crimson",
  style = {},
  ...props
}) {
  const colors = {
    crimson: "var(--crimson)",
    gold: "var(--gold)",
    muted: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontSize: "0.7rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: colors[tone] || colors.crimson,
      margin: 0,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a single figure with a gold left-rule and a Cinzel label,
 * as seen in the "Year Levels / Founded / Location" row.
 */
function StatBlock({
  value,
  label,
  tone = "light",
  style = {},
  ...props
}) {
  const valueColor = tone === "dark" ? "var(--cream)" : "var(--navy)";
  const labelColor = tone === "dark" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderLeft: "2px solid var(--gold)",
      paddingLeft: "1rem",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      color: valueColor,
      margin: 0,
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontSize: "0.7rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: labelColor,
      margin: "0.35rem 0 0"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* AboutScreen — Our Story & Mission: philosophy, vision, history, principal. */

function PageHero({
  label,
  heading
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--navy)",
      color: "var(--cream)",
      padding: "5rem 0 4rem",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.statue,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, oklch(0.27 0.065 250 / 0.7), oklch(0.18 0.06 250 / 0.95))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "section-label",
    style: {
      color: "oklch(0.72 0.12 80 / 0.85)",
      marginBottom: "0.75rem"
    }
  }, label), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--cream)",
      fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
      lineHeight: 1.1,
      margin: 0
    }
  }, heading)));
}
function AboutScreen({
  onNavigate
}) {
  const {
    SectionLabel,
    StatBlock,
    PullQuote,
    Button,
    GoldDivider
  } = window.DS;
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 2rem"
  };
  const h2 = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    lineHeight: 1.15,
    fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)",
    margin: 0
  };
  const body = {
    color: "oklch(0.27 0.065 250 / 0.72)",
    lineHeight: 1.75,
    fontFamily: "var(--font-body)",
    margin: 0
  };
  const VISION = [["Know the Faith", "The school motto sums up all that we are striving to achieve — to form Catholics who, when they leave school, will know their Faith and practise it."], ["Character Formation", "Someone who has character lives by principles. They are responsible, fulfil their duty with diligence, and have the courage to stand up for what is right."], ["Classical Learning", "St Philomena's classical education curriculum exposes students to the wisdom gained and passed on over the ages — through Latin, Logic, Rhetoric, Literature, and History."], ["Serve Society", "We aim to produce young men and women who will leave school balanced and well-adjusted, ready to make the best contribution to society that they are able."]];
  const PRINCIPALS = [["Fr. Gerard Hogan", "1998 – 2001"], ["Fr. Jule Belisle", "2001 – 2007"], ["Fr. Benoit Wailliez", "2007 – 2008"], ["Fr. Brendan Arthur", "2008 – 2010"], ["Fr. Karl Pepping", "2011 – 2023"], ["Fr. Joseph Ockerse", "2024 – Present"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    label: "About the School",
    heading: "Our Story & Mission"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "3rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Our Philosophy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Education for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Education's Sake")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: body
  }, "At St Philomena School, we value education for education's sake, and not merely as a means to something else. A true education includes so much more than mere knowledge and includes the formation of a child's character."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "In many ways, our education philosophy might be termed old school, yet at the same time modern methods and technologies are employed to the degree that they are useful."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      background: "var(--white)",
      border: "1px solid var(--cream-dark)",
      padding: "2rem"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "Sine Deo Nihil",
    label: "Motto"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "Catholic & Classical",
    label: "Mission"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1999",
    label: "Founded"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--navy)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: "640px",
      margin: "0 auto 3rem"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "gold"
  }, "School Vision"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--cream)",
      margin: "0.75rem 0 1.25rem"
    }
  }, "Forming Catholics for Life"), /*#__PURE__*/React.createElement(GoldDivider, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "Sine Deo Nihil"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "1.5rem"
    }
  }, VISION.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: "1px solid oklch(1 0 0 / 0.12)",
      padding: "1.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--gold)",
      fontSize: "1.5rem",
      marginBottom: "0.75rem"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--cream)",
      fontSize: "1.15rem",
      margin: "0 0 0.6rem"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.65)",
      fontSize: "0.875rem",
      lineHeight: 1.65,
      fontFamily: "var(--font-body)",
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "3.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Our History"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "A School Built", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "by Faith & Community")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: body
  }, "St Philomena School was established in response to the concerns of Catholic families about the available education choices for their children. Parents approached the Society of St Pius X to ask for assistance in developing a truly Catholic school."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Through the great generosity of Dr Felice and Mrs Marie Zaccari, eleven rural acres at 61 Koplick Road, Park Ridge, was purchased in February 1993. Under the intercession of St Philomena, all obstacles were finally overcome and the school opened on Tuesday 2 February 1999."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "0.75rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--crimson)",
      marginBottom: "1.25rem"
    }
  }, "Our Principals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, PRINCIPALS.map(([name, years], i) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.85rem 0",
      borderBottom: i < PRINCIPALS.length - 1 ? "1px solid var(--border-strong)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      color: "var(--navy)",
      fontSize: "1.05rem"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "0.7rem",
      letterSpacing: "0.08em",
      color: "var(--text-muted)"
    }
  }, years)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: "860px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Principal's Welcome"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 2rem"
    }
  }, "A Message from", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Fr Joseph Ockerse")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "2rem"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, null, "St Philomena School, as an independent Catholic school of the Society of St Pius X, strives to deliver an authentically Catholic education.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: body
  }, "It would be a mistake to suppose that a Catholic School is one with merely Catholic teachers, some regular instruction in Catechism, and the opportunity to receive the sacraments. A school can only be Catholic when it is directed by the Catholic philosophy of life."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "St Philomena School exists to provide the pressing need of educating human beings to be authentically human \u2014 young men and women who know, love, and serve God, and who are thereby equipped to serve their neighbour and society.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("enrol");
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Begin Your Enrolment")))));
}
Object.assign(window, {
  AboutScreen,
  PageHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EnrolScreen.jsx
try { (() => {
/* EnrolScreen — Join Our Community: welcome, eligibility, process, fees, CTA. */

function EnrolScreen({
  onNavigate
}) {
  const {
    SectionLabel,
    Button,
    Badge,
    PullQuote
  } = window.DS;
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 2rem"
  };
  const h2 = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    lineHeight: 1.15,
    fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)",
    margin: 0
  };
  const body = {
    color: "oklch(0.27 0.065 250 / 0.72)",
    lineHeight: 1.75,
    fontFamily: "var(--font-body)",
    margin: 0
  };
  const STEPS = [["Submit an Enquiry", "Contact the Distance Learning office by phone or email to express your interest and receive an information pack."], ["Complete Application", "Complete the enrolment application form and return it with the required supporting documents."], ["Application Review", "The Principal reviews all applications. Families may be invited to a phone interview to discuss the programme."], ["Offer of Enrolment", "Successful applicants receive a formal offer of enrolment. Acceptance requires payment of the enrolment deposit."], ["Receive Materials", "Prior to the start of term, enrolled students receive their lesson books, textbooks, and timetable."], ["Begin Learning", "Students commence the programme at the start of the school term, following the structured daily timetable."]];
  const ELIGIBILITY = ["Students entering Year 7 or Year 8", "Catholic families committed to an authentic Catholic education", "Families willing to support the school's philosophy and standards", "Students who are able to work independently with parental supervision", "Families who accept the school's behaviour and dress standards"];
  const CHECKLIST = ["Completed enrolment application form", "Copy of student's birth certificate", "Most recent school reports (if applicable)", "Baptism certificate (for Catholic students)", "Signed acceptance of the school's Code of Conduct", "Enrolment deposit payment"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    label: "Enrolments",
    heading: "Join Our Community"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "3rem",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Welcome"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Enrol in Distance", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Learning")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: body
  }, "St Philomena School's Distance Learning programme is open to Catholic families across Australia who are seeking an authentic classical Catholic education for their children in Years 7 and 8."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Enrolment places are limited. We encourage families to contact us early to discuss the programme and begin the application process."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy)",
      color: "var(--cream)",
      padding: "2.25rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--gold)",
      fontSize: "1.4rem",
      margin: "0 0 1.25rem"
    }
  }, "Eligibility"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.85rem"
    }
  }, ELIGIBILITY.map(e => /*#__PURE__*/React.createElement("li", {
    key: e,
    style: {
      display: "flex",
      gap: "0.65rem",
      alignItems: "flex-start",
      color: "oklch(0.98 0.015 90 / 0.8)",
      fontSize: "0.9rem",
      lineHeight: 1.5,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      lineHeight: 1.4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--gold)"
  })), e))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.5rem",
      paddingTop: "1.25rem",
      borderTop: "1px solid oklch(1 0 0 / 0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "0.7rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "oklch(0.98 0.015 90 / 0.6)"
    }
  }, "Year Levels Offered"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Year 7 & 8")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The Process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      marginTop: "0.75rem"
    }
  }, "How to Enrol")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.5rem"
    }
  }, STEPS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "var(--white)",
      border: "1px solid var(--cream-dark)",
      padding: "1.75rem",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--gold)",
      fontSize: "2rem",
      lineHeight: 1,
      marginBottom: "0.75rem"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--navy)",
      fontSize: "1.1rem",
      margin: "0 0 0.5rem"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.27 0.065 250 / 0.65)",
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontFamily: "var(--font-body)",
      margin: 0
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "3rem",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Documents Required"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Application", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Checklist")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    }
  }, CHECKLIST.map(c => /*#__PURE__*/React.createElement("li", {
    key: c,
    style: {
      display: "flex",
      gap: "0.65rem",
      alignItems: "flex-start",
      padding: "0.75rem 1rem",
      background: "var(--white)",
      border: "1px solid var(--cream-dark)",
      color: "var(--text-body)",
      fontSize: "0.9rem",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-check",
    size: 16,
    color: "var(--crimson)"
  }), c)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Fees & Costs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Tuition &", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Materials")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Tuition fees for the Distance Learning programme are set annually. The fees cover access to the full curriculum, teacher marking and feedback, and regular teacher contact."), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Textbooks and lesson materials are provided separately. Some materials may be available for hire through the school's Textbook Hire Scheme.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.5rem",
      background: "oklch(0.38 0.13 22 / 0.06)",
      borderLeft: "3px solid var(--crimson)",
      padding: "1.25rem 1.5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "0.7rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--crimson)",
      margin: "0 0 0.5rem"
    }
  }, "Important Note"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      fontSize: "0.9rem"
    }
  }, "St Philomena School is an independent Catholic school. Government funding may be available to eligible students. Please enquire with the office for details.")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--navy)",
      color: "var(--cream)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "gold"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--cream)",
      margin: "0.75rem 0 1.25rem"
    }
  }, "Ready to Apply?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.7)",
      fontSize: "1.1rem",
      lineHeight: 1.6,
      marginBottom: "2rem",
      fontFamily: "var(--font-body)"
    }
  }, "Contact our Distance Learning office to request an enrolment pack, ask questions about the programme, or arrange a time to speak with the Principal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#",
    onClick: e => e.preventDefault(),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Begin Enrolment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "#",
    onClick: e => e.preventDefault(),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 13
    }),
    iconRight: false
  }, "(07) 3802 0088")))));
}
Object.assign(window, {
  EnrolScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EnrolScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer — deep navy with gold top rule, brand column, links, contact. */

function Footer({
  onNavigate
}) {
  const links = NAV_ITEMS.map(n => ({
    label: n.label,
    key: n.key
  }));
  const labelStyle = {
    fontFamily: "var(--font-label)",
    fontSize: "0.72rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  };
  const headingStyle = {
    color: "var(--gold)",
    fontFamily: "var(--font-label)",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "1.25rem"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-dark)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "3px",
      background: "linear-gradient(90deg, transparent, var(--gold), transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "3.5rem 2rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.logo,
    alt: "St Philomena School",
    style: {
      height: "78px",
      width: "auto",
      marginBottom: "1rem",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.6)",
      fontFamily: "var(--font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.7,
      margin: 0
    }
  }, "Providing an authentic Catholic classical education for students in Years 7 & 8 through a dedicated distance learning programme."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      color: "oklch(0.72 0.12 80 / 0.85)",
      fontSize: "1rem",
      marginTop: "1rem",
      marginBottom: "0.25rem"
    }
  }, "\"Sine Deo Nihil\""), /*#__PURE__*/React.createElement("p", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.4)",
      fontSize: "0.65rem",
      letterSpacing: "0.1em",
      margin: 0
    }
  }, "Without God there is Nothing")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: headingStyle
  }, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.65rem"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.key
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(l.key),
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.6)",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--gold)",
    onMouseLeave: e => e.currentTarget.style.color = "oklch(0.98 0.015 90 / 0.6)"
  }, l.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: headingStyle
  }, "Contact Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      color: "oklch(0.98 0.015 90 / 0.6)",
      fontFamily: "var(--font-body)",
      fontSize: "0.875rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.4)",
      fontSize: "0.65rem",
      margin: "0 0 0.25rem"
    }
  }, "Address"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "61 Koplick Road", /*#__PURE__*/React.createElement("br", null), "Park Ridge QLD 4125")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.4)",
      fontSize: "0.65rem",
      margin: "0 0 0.25rem"
    }
  }, "Phone"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "(07) 3802 0088")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.4)",
      fontSize: "0.65rem",
      margin: "0 0 0.25rem"
    }
  }, "Email"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "dladmin@stphilomena.qld.edu.au"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid oklch(1 0 0 / 0.1)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.3)",
      margin: 0
    }
  }, "\xA9 ", new Date().getFullYear(), " St Philomena School \u2013 Distance Learning. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...labelStyle,
      color: "oklch(0.98 0.015 90 / 0.3)",
      display: "flex",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy Policy"), /*#__PURE__*/React.createElement("span", null, "|"), /*#__PURE__*/React.createElement("span", null, "Child Protection")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Header — crimson utility bar + sticky nav with crest and dropdowns. */

const NAV_ITEMS = [{
  label: "Home",
  key: "home"
}, {
  label: "About",
  key: "about",
  children: ["Our Philosophy", "School Vision", "History", "Principal's Welcome"]
}, {
  label: "Teaching & Learning",
  key: "teaching",
  children: ["Grammar Phase (Yr 7)", "Logic Phase (Yr 8)", "Curriculum Overview"]
}, {
  label: "Enrolments",
  key: "enrol"
}, {
  label: "Community",
  key: "community"
}, {
  label: "FAQ",
  key: "faq"
}];
function Header({
  current,
  onNavigate
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openDrop, setOpenDrop] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const host = document.querySelector("[data-scroll-host]") || window;
    const onScroll = () => {
      const y = host === window ? window.scrollY : host.scrollTop;
      setScrolled(y > 40);
    };
    host.addEventListener("scroll", onScroll);
    return () => host.removeEventListener("scroll", onScroll);
  }, []);
  const go = key => {
    onNavigate(key);
    setMobileOpen(false);
    setOpenDrop(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--crimson)",
      color: "var(--cream)",
      fontFamily: "var(--font-label)",
      letterSpacing: "0.08em",
      fontSize: "0.7rem",
      padding: "0.4rem 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    className: "util-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 11
  }), " (07) 3802 0088"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 11
  }), " dladmin@stphilomena.qld.edu.au")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("span", null, "Day School"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, "School Portal"))), /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--crimson)",
      boxShadow: scrolled ? "var(--shadow-lg)" : "none",
      transition: "box-shadow 0.3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 2rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.6rem 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.85rem",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.logo,
    alt: "St Philomena School crest",
    style: {
      height: "62px",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Georgia, serif",
      fontWeight: 700,
      color: "var(--cream)",
      fontSize: "1rem",
      letterSpacing: "0.02em",
      borderBottom: "2px solid var(--gold-bright)",
      paddingBottom: "0.25rem"
    }
  }, "ST PHILOMENA SCHOOL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      color: "var(--cream)",
      fontSize: "0.85rem",
      paddingTop: "0.25rem"
    }
  }, "Distance Learning"))), /*#__PURE__*/React.createElement("nav", {
    className: "desk-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1.75rem"
    }
  }, NAV_ITEMS.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.key,
    style: {
      position: "relative"
    },
    onMouseEnter: () => item.children && setOpenDrop(item.key),
    onMouseLeave: () => setOpenDrop(null)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(item.key),
    className: "nav-link" + (current === item.key ? " active" : ""),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }, item.label, item.children && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12,
    style: {
      opacity: 0.6
    }
  })), item.children && openDrop === item.key && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      width: "13rem",
      background: "var(--crimson-deep)",
      boxShadow: "var(--shadow-xl)",
      border: "1px solid oklch(1 0 0 / 0.1)"
    }
  }, item.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => go(item.key),
    style: {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "0.6rem 1rem",
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "oklch(0.98 0.015 90 / 0.8)",
      fontFamily: "var(--font-label)",
      fontSize: "0.7rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--gold)";
      e.currentTarget.style.background = "oklch(1 0 0 / 0.05)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "oklch(0.98 0.015 90 / 0.8)";
      e.currentTarget.style.background = "none";
    }
  }, c)))))), /*#__PURE__*/React.createElement("button", {
    className: "mob-toggle",
    onClick: () => setMobileOpen(!mobileOpen),
    style: {
      display: "none",
      background: "none",
      border: 0,
      color: "var(--cream)",
      cursor: "pointer",
      padding: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileOpen ? "x" : "menu",
    size: 22
  })))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--crimson-deep)",
      borderTop: "1px solid oklch(1 0 0 / 0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1rem 2rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem"
    }
  }, NAV_ITEMS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.key,
    onClick: () => go(item.key),
    style: {
      textAlign: "left",
      padding: "0.6rem 0.5rem",
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "oklch(0.98 0.015 90 / 0.9)",
      fontFamily: "var(--font-label)",
      fontSize: "0.75rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, item.label))))));
}
Object.assign(window, {
  Header,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* HomeScreen — faithful recreation of the St Philomena DL home page. */

function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    SectionLabel,
    PillarCard,
    StatBlock,
    PullQuote,
    GoldDivider,
    Badge
  } = window.DS;
  const PILLARS = [{
    icon: "cross",
    title: "Catholic Faith",
    body: "Every subject is taught within the framework of the Catholic Faith. We form students who know their Faith, practise it, and have a deep desire to serve God."
  }, {
    icon: "book-open",
    title: "Classical Curriculum",
    body: "Latin, Logic, Rhetoric, Literature, and History form the core of our Liberal Arts programme — developing memory, analysis, and the ability to express truth beautifully."
  }, {
    icon: "graduation-cap",
    title: "Character Formation",
    body: "The most important part of education is the formation of character. We strive to produce young men and women who are balanced, responsible, and courageous."
  }, {
    icon: "map-pin",
    title: "Distance Learning",
    body: "Our Distance Learning programme brings St Philomena's classical Catholic education directly to families across Australia, regardless of location."
  }];
  const SUBJECTS = [["Religion & Catechism", "Both"], ["Latin", "Both"], ["English Literature", "Both"], ["Logic", "Yr 8"], ["History (Ancient & Modern)", "Both"], ["Mathematics", "Both"], ["Science", "Both"], ["Rhetoric", "Yr 8"], ["Geography", "Both"], ["Art & Music", "Both"]];
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 2rem"
  };
  const h2 = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    lineHeight: 1.15,
    fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)",
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "560px",
      height: "82vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.chapel,
    alt: "Chapel interior",
    className: "ken-burns",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 35%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(105deg, oklch(0.18 0.06 250 / 0.92) 0%, oklch(0.18 0.06 250 / 0.75) 50%, oklch(0.18 0.06 250 / 0.5) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "section-label fade-up fade-up-delay-1",
    style: {
      color: "oklch(0.72 0.12 80 / 0.85)",
      marginBottom: "1rem"
    }
  }, "\u2020 Catholic \xB7 Classical \xB7 Distance Learning"), /*#__PURE__*/React.createElement("h1", {
    className: "fade-up fade-up-delay-2",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      lineHeight: 1.12,
      color: "var(--cream)",
      fontSize: "clamp(2.4rem, 5vw, 4rem)",
      margin: "0 0 1.5rem"
    }
  }, "An Education Rooted", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--gold)",
      fontStyle: "italic"
    }
  }, "in Truth & Tradition")), /*#__PURE__*/React.createElement("div", {
    className: "crimson-rule fade-up fade-up-delay-3",
    style: {
      borderColor: "var(--gold)",
      marginBottom: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.8)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      fontFamily: "var(--font-body)",
      margin: 0
    }
  }, "St Philomena School's Distance Learning programme offers an authentic Catholic classical education for students in Years 7 & 8 \u2014 wherever they are in Australia.")), /*#__PURE__*/React.createElement("div", {
    className: "fade-up fade-up-delay-4",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#",
    onClick: e => e.preventDefault(),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Enrol Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("about");
    }
  }, "Learn More")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "96px",
      background: "linear-gradient(to top, var(--cream), transparent)"
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "2.5rem 0",
      background: "var(--navy)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(GoldDivider, null, "\"Sine Deo Nihil\""), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "oklch(0.98 0.015 90 / 0.6)",
      marginTop: "0.5rem",
      fontSize: "0.85rem",
      letterSpacing: "0.18em",
      fontFamily: "var(--font-label)",
      textTransform: "uppercase"
    }
  }, "Without God there is Nothing"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px",
      marginBottom: "3.5rem"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Our Foundation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      marginTop: "0.75rem"
    }
  }, "Education for Education's Sake"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1rem",
      color: "oklch(0.27 0.065 250 / 0.7)",
      lineHeight: 1.7,
      fontFamily: "var(--font-body)"
    }
  }, "At St Philomena School, we value education not merely as a means to something else, but for its own sake. A true education forms the whole person \u2014 intellect, will, and character.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1.5rem"
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(PillarCard, {
    key: p.title,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    }),
    title: p.title
  }, p.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream-dark)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "3rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.classroom,
    alt: "Classical classroom",
    style: {
      width: "100%",
      height: "224px",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: ASSETS.statue2,
    alt: "Statue garden",
    style: {
      width: "100%",
      height: "224px",
      objectFit: "cover",
      marginTop: "2rem"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: ASSETS.students,
    alt: "Students",
    style: {
      width: "100%",
      height: "192px",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: ASSETS.garden,
    alt: "School garden",
    style: {
      width: "100%",
      height: "192px",
      objectFit: "cover",
      marginTop: "1rem"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-1rem",
      left: "-1rem",
      width: "96px",
      height: "96px",
      border: "2px solid var(--gold)",
      opacity: 0.4,
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Our Philosophy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Forming Catholics", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "for Eternity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      color: "oklch(0.27 0.065 250 / 0.7)",
      lineHeight: 1.7,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "St Philomena School was established in response to the concerns of Catholic families about the available education choices for their children. Our school exists to provide an authentically Catholic education \u2014 one directed by the Catholic philosophy of life."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Our classical education curriculum plays a very important role in the formation of character. Through the study of Latin, Logic, Rhetoric, Literature, and History, students develop self-discipline, diligence, memory, and the ability to analyse and express themselves.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "1.5rem 0"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    cite: "\u2014 Fr Joseph Ockerse, Principal"
  }, "The most important part of education is the formation of character.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("about");
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Read Our Philosophy"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--navy)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "4rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "gold"
  }, "What We Teach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--cream)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "A Liberal Arts", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--gold)",
      fontStyle: "italic"
    }
  }, "Curriculum")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.7)",
      lineHeight: 1.7,
      marginBottom: "2rem",
      fontFamily: "var(--font-body)"
    }
  }, "Our Distance Learning programme covers Years 7 (Grammar Phase) and Year 8 (Logic Phase), offering a rigorous classical curriculum grounded in the Catholic intellectual tradition."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("teaching");
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Full Curriculum")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "0.5rem"
    }
  }, SUBJECTS.map(([name, phase]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5rem",
      padding: "0.75rem 1rem",
      border: "1px solid oklch(1 0 0 / 0.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.85)",
      fontSize: "0.875rem",
      fontFamily: "var(--font-body)"
    }
  }, name), /*#__PURE__*/React.createElement(Badge, {
    tone: phase === "Both" ? "navy" : "crimson"
  }, phase === "Both" ? "Yr 7 & 8" : phase))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      background: "var(--cream)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "3rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.books,
    alt: "Classical books",
    style: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 1"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Distance Learning"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: "var(--navy)",
      margin: "0.75rem 0 1.5rem"
    }
  }, "Classical Education,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Wherever You Are")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      color: "oklch(0.27 0.065 250 / 0.7)",
      lineHeight: 1.7,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Our Distance Learning programme delivers the same rigorous Catholic classical education as our day school, adapted for families across Australia. Students receive structured lesson materials, regular teacher contact, and access to the full curriculum.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2rem",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "7 & 8",
    label: "Year Levels"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1999",
    label: "Founded"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "QLD",
    label: "Park Ridge"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "7rem 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS.campus,
    alt: "Campus",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "oklch(0.18 0.06 250 / 0.82)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "640px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "gold"
  }, "Begin the Journey"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--cream)",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      lineHeight: 1.15,
      margin: "1rem 0 1.5rem"
    }
  }, "Ready to Enrol?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.98 0.015 90 / 0.7)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      marginBottom: "2rem",
      fontFamily: "var(--font-body)"
    }
  }, "We welcome families who share our commitment to an authentic Catholic education. Contact us to learn more about our Distance Learning programme and the enrolment process."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("enrol");
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Begin Enrolment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    as: "a",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("faq");
    }
  }, "Frequently Asked Questions"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Shared helpers for the St Philomena website UI kit.
   Icon — renders a Lucide glyph (loaded via CDN UMD as window.lucide). */

function Icon({
  name,
  size = 16,
  color,
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth,
        stroke: color || "currentColor"
      }
    });
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      lineHeight: 0,
      color,
      ...style
    }
  });
}
const ASSETS = {
  logo: "../../assets/logo-full.png",
  chapel: "../../assets/chapel-interior.jpg",
  statue: "../../assets/st-philomena-statue.jpg",
  classroom: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/hero-classroom-7wyiCEKTwN6vYWCSsmSaRG.webp",
  garden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/hero-garden-axKgWznFwSKqriqWxEDbr5.webp",
  books: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/feature-books-JMwxXe4geHc3fqomKHJoYc.webp",
  students: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/school-photo-1_b292adba.jpg",
  statue2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/school-photo-2_50501a39.jpg",
  campus: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/campus-aerial_9d641911.jpg"
};
Object.assign(window, {
  Icon,
  ASSETS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GoldDivider = __ds_scope.GoldDivider;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
