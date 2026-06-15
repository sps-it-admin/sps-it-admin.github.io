import React from "react";

/**
 * PillarCard — the white bordered card used in the "Four Pillars" grid.
 * A crimson icon, a Playfair title, and a Lora body. Lifts on hover.
 */
export function PillarCard({ icon = null, title, children, style = {}, ...props }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--white)",
        border: "1px solid var(--cream-dark)",
        padding: "1.75rem",
        boxShadow: hover ? "var(--shadow-lg)" : "none",
        transition: "box-shadow 0.3s ease",
        ...style,
      }}
      {...props}
    >
      {icon ? (
        <div style={{ color: "var(--crimson)", marginBottom: "1rem", lineHeight: 0 }}>{icon}</div>
      ) : null}
      <h3
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 600,
          color: "var(--navy)",
          fontSize: "1.125rem",
          margin: "0 0 0.75rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: '"Lora", Georgia, serif',
          color: "oklch(0.27 0.065 250 / 0.65)",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
