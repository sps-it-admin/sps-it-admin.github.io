/* Header — crimson utility bar + sticky nav with crest and dropdowns. */

const NAV_ITEMS = [
  { label: "Home", key: "home" },
  { label: "About", key: "about", children: ["Our Philosophy", "School Vision", "History", "Principal's Welcome"] },
  { label: "Teaching & Learning", key: "teaching", children: ["Grammar Phase (Yr 7)", "Logic Phase (Yr 8)", "Curriculum Overview"] },
  { label: "Enrolments", key: "enrol" },
  { label: "Community", key: "community" },
  { label: "FAQ", key: "faq" },
];

function Header({ current, onNavigate }) {
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

  const go = (key) => { onNavigate(key); setMobileOpen(false); setOpenDrop(null); };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Utility bar */}
      <div style={{
        background: "var(--crimson)", color: "var(--cream)", fontFamily: "var(--font-label)",
        letterSpacing: "0.08em", fontSize: "0.7rem", padding: "0.4rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }} className="util-bar">
        <div style={{ display: "flex", gap: "1.5rem", opacity: 0.85 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}><Icon name="phone" size={11} /> (07) 3802 0088</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}><Icon name="mail" size={11} /> dladmin@stphilomena.qld.edu.au</span>
        </div>
        <div style={{ display: "flex", gap: "1rem", opacity: 0.7 }}>
          <span>Day School</span><span style={{ opacity: 0.4 }}>|</span><span>School Portal</span>
        </div>
      </div>

      {/* Main header */}
      <header style={{
        background: "var(--crimson)", boxShadow: scrolled ? "var(--shadow-lg)" : "none",
        transition: "box-shadow 0.3s ease",
      }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0" }}>
            {/* Logo lockup */}
            <button onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: "0.85rem", background: "none", border: 0, cursor: "pointer", padding: 0 }}>
              <img src={ASSETS.logo} alt="St Philomena School crest" style={{ height: "62px", width: "auto" }} />
              <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "var(--cream)", fontSize: "1rem", letterSpacing: "0.02em", borderBottom: "2px solid var(--gold-bright)", paddingBottom: "0.25rem" }}>
                  ST PHILOMENA SCHOOL
                </div>
                <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "var(--cream)", fontSize: "0.85rem", paddingTop: "0.25rem" }}>
                  Distance Learning
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="desk-nav" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.key} style={{ position: "relative" }}
                  onMouseEnter={() => item.children && setOpenDrop(item.key)}
                  onMouseLeave={() => setOpenDrop(null)}>
                  <button onClick={() => go(item.key)} className={"nav-link" + (current === item.key ? " active" : "")}
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", background: "none", border: 0, cursor: "pointer" }}>
                    {item.label}
                    {item.children && <Icon name="chevron-down" size={12} style={{ opacity: 0.6 }} />}
                  </button>
                  {item.children && openDrop === item.key && (
                    <div style={{ position: "absolute", top: "100%", left: 0, width: "13rem", background: "var(--crimson-deep)", boxShadow: "var(--shadow-xl)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                      {item.children.map((c) => (
                        <button key={c} onClick={() => go(item.key)} style={{
                          display: "block", width: "100%", textAlign: "left", padding: "0.6rem 1rem",
                          background: "none", border: 0, cursor: "pointer", color: "oklch(0.98 0.015 90 / 0.8)",
                          fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.background = "oklch(1 0 0 / 0.05)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.98 0.015 90 / 0.8)"; e.currentTarget.style.background = "none"; }}>
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button className="mob-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: 0, color: "var(--cream)", cursor: "pointer", padding: "0.5rem" }}>
              <Icon name={mobileOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div style={{ background: "var(--crimson-deep)", borderTop: "1px solid oklch(1 0 0 / 0.1)" }}>
            <div style={{ padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {NAV_ITEMS.map((item) => (
                <button key={item.key} onClick={() => go(item.key)} style={{
                  textAlign: "left", padding: "0.6rem 0.5rem", background: "none", border: 0, cursor: "pointer",
                  color: "oklch(0.98 0.015 90 / 0.9)", fontFamily: "var(--font-label)", fontSize: "0.75rem",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                }}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

Object.assign(window, { Header, NAV_ITEMS });
