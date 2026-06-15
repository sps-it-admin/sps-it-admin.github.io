import React from "react";

/**
 * Badge — the small Cinzel pill used for curriculum phase markers
 * ("Yr 7 & 8", "Yr 8 only") and other short status tags.
 */
export function Badge({ children, tone = "navy", style = {}, ...props }) {
  const tones = {
    navy:    { background: "var(--navy-light)", color: "var(--gold-light)" },
    crimson: { background: "oklch(0.38 0.13 22 / 0.7)", color: "var(--gold-light)" },
    gold:    { background: "var(--gold)", color: "var(--navy-dark)" },
    outline: { background: "transparent", color: "var(--crimson)", border: "1px solid var(--crimson)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: '"Cinzel", "Times New Roman", serif',
        fontSize: "0.65rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.2rem 0.55rem",
        lineHeight: 1.4,
        ...(tones[tone] || tones.navy),
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
