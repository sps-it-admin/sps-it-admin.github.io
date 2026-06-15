import React from "react";

/**
 * PullQuote — an italic Playfair quotation with the brand's crimson
 * left-rule and an optional Cinzel attribution.
 */
export function PullQuote({ children, cite = null, tone = "light", style = {}, ...props }) {
  const quoteColor = tone === "dark" ? "var(--cream)" : "oklch(0.27 0.065 250 / 0.85)";
  const citeColor = tone === "dark" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  return (
    <blockquote
      style={{
        borderLeft: "3px solid var(--crimson)",
        paddingLeft: "1.25rem",
        margin: 0,
        ...style,
      }}
      {...props}
    >
      <p
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontStyle: "italic",
          fontSize: "1.25rem",
          lineHeight: 1.5,
          color: quoteColor,
          margin: 0,
        }}
      >
        {children}
      </p>
      {cite ? (
        <footer
          style={{
            fontFamily: '"Cinzel", "Times New Roman", serif',
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: citeColor,
            marginTop: "0.6rem",
          }}
        >
          {cite}
        </footer>
      ) : null}
    </blockquote>
  );
}
