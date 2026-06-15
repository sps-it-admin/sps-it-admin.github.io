import React from "react";

/**
 * GoldDivider — a centred ornament: a label flanked by two thin gold
 * rules. The motto banner uses it; works for any short centred label.
 */
export function GoldDivider({ children, style = {}, labelStyle = {}, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "var(--gold)",
        ...style,
      }}
      {...props}
    >
      <span style={{ flex: 1, height: 1, background: "var(--gold)", opacity: 0.5 }} />
      {children ? (
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: "italic",
            fontSize: "1.25rem",
            color: "var(--gold)",
            whiteSpace: "nowrap",
            padding: "0 0.5rem",
            ...labelStyle,
          }}
        >
          {children}
        </span>
      ) : null}
      <span style={{ flex: 1, height: 1, background: "var(--gold)", opacity: 0.5 }} />
    </div>
  );
}
