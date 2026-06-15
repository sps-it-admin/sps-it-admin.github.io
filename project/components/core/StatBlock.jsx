import React from "react";

/**
 * StatBlock — a single figure with a gold left-rule and a Cinzel label,
 * as seen in the "Year Levels / Founded / Location" row.
 */
export function StatBlock({ value, label, tone = "light", style = {}, ...props }) {
  const valueColor = tone === "dark" ? "var(--cream)" : "var(--navy)";
  const labelColor = tone === "dark" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return (
    <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", ...style }} {...props}>
      <p
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 700,
          fontSize: "1.5rem",
          color: valueColor,
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: '"Cinzel", "Times New Roman", serif',
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: labelColor,
          margin: "0.35rem 0 0",
        }}
      >
        {label}
      </p>
    </div>
  );
}
