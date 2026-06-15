import React from "react";

const FONT_LABEL = '"Cinzel", "Times New Roman", serif';

const SIZES = {
  sm: { padding: "0.55rem 1.25rem", fontSize: "0.72rem" },
  md: { padding: "0.75rem 1.75rem", fontSize: "0.8rem" },
  lg: { padding: "0.95rem 2.25rem", fontSize: "0.85rem" },
};

/**
 * Button — the brand's signature call-to-action.
 * `primary`   : crimson fill with an offset gold outline (the hero CTA).
 * `secondary` : transparent with a gold border — for dark grounds.
 * `navy`      : solid navy fill — for cream/light grounds.
 * `ghost`     : text-only with a gold underline on hover.
 */
export function Button({
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
    ...sz,
  };

  const variants = {
    primary: {
      background: hover ? "var(--crimson-deep)" : "var(--crimson)",
      color: "var(--cream)",
      border: "1px solid var(--crimson)",
      borderRadius: 0,
      outline: "1px solid var(--gold)",
      outlineOffset: "3px",
    },
    secondary: {
      background: hover ? "oklch(1 0 0 / 0.1)" : "transparent",
      color: "var(--cream)",
      border: "1px solid var(--gold)",
      borderRadius: 0,
    },
    navy: {
      background: hover ? "var(--navy-dark)" : "var(--navy)",
      color: "var(--cream)",
      borderRadius: 0,
    },
    ghost: {
      background: "transparent",
      color: "var(--crimson)",
      borderBottom: hover ? "1px solid var(--gold)" : "1px solid transparent",
      padding: "0.25rem 0",
      borderRadius: 0,
    },
  };

  return (
    <Tag
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {icon && !iconRight ? icon : null}
      {children}
      {icon && iconRight ? icon : null}
    </Tag>
  );
}
