/* Footer — deep navy with gold top rule, brand column, links, contact. */

function Footer({ onNavigate }) {
  const links = NAV_ITEMS.map((n) => ({ label: n.label, key: n.key }));
  const labelStyle = { fontFamily: "var(--font-label)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" };
  const headingStyle = { color: "var(--gold)", fontFamily: "var(--font-label)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" };
  return (
    <footer style={{ background: "var(--navy-dark)", color: "var(--cream)" }}>
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "3.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
          {/* Brand */}
          <div>
            <img src={ASSETS.logo} alt="St Philomena School" style={{ height: "78px", width: "auto", marginBottom: "1rem", opacity: 0.95 }} />
            <p style={{ color: "oklch(0.98 0.015 90 / 0.6)", fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              Providing an authentic Catholic classical education for students in Years 7 &amp; 8 through a dedicated distance learning programme.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "oklch(0.72 0.12 80 / 0.85)", fontSize: "1rem", marginTop: "1rem", marginBottom: "0.25rem" }}>
              "Sine Deo Nihil"
            </p>
            <p style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.4)", fontSize: "0.65rem", letterSpacing: "0.1em", margin: 0 }}>
              Without God there is Nothing
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {links.map((l) => (
                <li key={l.key}>
                  <button onClick={() => onNavigate(l.key)} style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.6)", background: "none", border: 0, cursor: "pointer", padding: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.98 0.015 90 / 0.6)")}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "oklch(0.98 0.015 90 / 0.6)", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>
              <div>
                <p style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.4)", fontSize: "0.65rem", margin: "0 0 0.25rem" }}>Address</p>
                <p style={{ margin: 0 }}>61 Koplick Road<br />Park Ridge QLD 4125</p>
              </div>
              <div>
                <p style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.4)", fontSize: "0.65rem", margin: "0 0 0.25rem" }}>Phone</p>
                <p style={{ margin: 0 }}>(07) 3802 0088</p>
              </div>
              <div>
                <p style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.4)", fontSize: "0.65rem", margin: "0 0 0.25rem" }}>Email</p>
                <p style={{ margin: 0 }}>dladmin@stphilomena.qld.edu.au</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid oklch(1 0 0 / 0.1)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.3)", margin: 0 }}>© {new Date().getFullYear()} St Philomena School – Distance Learning. All rights reserved.</p>
          <div style={{ ...labelStyle, color: "oklch(0.98 0.015 90 / 0.3)", display: "flex", gap: "1rem" }}>
            <span>Privacy Policy</span><span>|</span><span>Child Protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
