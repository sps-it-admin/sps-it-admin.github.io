import React from "react";

/**
 * SectionLabel — the Cinzel small-caps eyebrow that opens almost every
 * section. Crimson on light grounds, gold on dark.
 */
export function SectionLabel({ children, tone = "crimson", style = {}, ...props }) {
  const colors = {
    crimson: "var(--crimson)",
    gold: "var(--gold)",
    muted: "var(--text-muted)",
  };
  return (
    <p
      style={{
        fontFamily: '"Cinzel", "Times New Roman", serif',
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: colors[tone] || colors.crimson,
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
