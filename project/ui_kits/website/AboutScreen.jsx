/* AboutScreen — Our Story & Mission: philosophy, vision, history, principal. */

function PageHero({ label, heading }) {
  return (
    <section style={{ position: "relative", background: "var(--navy)", color: "var(--cream)", padding: "5rem 0 4rem", overflow: "hidden" }}>
      <img src={ASSETS.statue} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, oklch(0.27 0.065 250 / 0.7), oklch(0.18 0.06 250 / 0.95))" }} />
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        <p className="section-label" style={{ color: "oklch(0.72 0.12 80 / 0.85)", marginBottom: "0.75rem" }}>{label}</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--cream)", fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)", lineHeight: 1.1, margin: 0 }}>{heading}</h1>
      </div>
    </section>
  );
}

function AboutScreen({ onNavigate }) {
  const { SectionLabel, StatBlock, PullQuote, Button, GoldDivider } = window.DS;
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" };
  const h2 = { fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.15, fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)", margin: 0 };
  const body = { color: "oklch(0.27 0.065 250 / 0.72)", lineHeight: 1.75, fontFamily: "var(--font-body)", margin: 0 };

  const VISION = [
    ["Know the Faith", "The school motto sums up all that we are striving to achieve — to form Catholics who, when they leave school, will know their Faith and practise it."],
    ["Character Formation", "Someone who has character lives by principles. They are responsible, fulfil their duty with diligence, and have the courage to stand up for what is right."],
    ["Classical Learning", "St Philomena's classical education curriculum exposes students to the wisdom gained and passed on over the ages — through Latin, Logic, Rhetoric, Literature, and History."],
    ["Serve Society", "We aim to produce young men and women who will leave school balanced and well-adjusted, ready to make the best contribution to society that they are able."],
  ];
  const PRINCIPALS = [
    ["Fr. Gerard Hogan", "1998 – 2001"], ["Fr. Jule Belisle", "2001 – 2007"], ["Fr. Benoit Wailliez", "2007 – 2008"],
    ["Fr. Brendan Arthur", "2008 – 2010"], ["Fr. Karl Pepping", "2011 – 2023"], ["Fr. Joseph Ockerse", "2024 – Present"],
  ];

  return (
    <div>
      <PageHero label="About the School" heading="Our Story & Mission" />

      {/* Philosophy + stats */}
      <section style={{ padding: "5rem 0", background: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Education for<br /><em style={{ fontStyle: "italic" }}>Education's Sake</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={body}>At St Philomena School, we value education for education's sake, and not merely as a means to something else. A true education includes so much more than mere knowledge and includes the formation of a child's character.</p>
                <p style={body}>In many ways, our education philosophy might be termed old school, yet at the same time modern methods and technologies are employed to the degree that they are useful.</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "var(--white)", border: "1px solid var(--cream-dark)", padding: "2rem" }}>
              <StatBlock value="Sine Deo Nihil" label="Motto" />
              <StatBlock value="Catholic & Classical" label="Mission" />
              <StatBlock value="1999" label="Founded" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "5rem 0", background: "var(--navy)", color: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <SectionLabel tone="gold">School Vision</SectionLabel>
            <h2 style={{ ...h2, color: "var(--cream)", margin: "0.75rem 0 1.25rem" }}>Forming Catholics for Life</h2>
            <GoldDivider><span style={{ fontStyle: "italic" }}>Sine Deo Nihil</span></GoldDivider>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {VISION.map(([t, b], i) => (
              <div key={t} style={{ border: "1px solid oklch(1 0 0 / 0.12)", padding: "1.75rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--gold)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--cream)", fontSize: "1.15rem", margin: "0 0 0.6rem" }}>{t}</h3>
                <p style={{ color: "oklch(0.98 0.015 90 / 0.65)", fontSize: "0.875rem", lineHeight: 1.65, fontFamily: "var(--font-body)", margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History + principals */}
      <section style={{ padding: "5rem 0", background: "var(--cream-dark)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem" }}>
            <div>
              <SectionLabel>Our History</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>A School Built<br /><em style={{ fontStyle: "italic" }}>by Faith &amp; Community</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={body}>St Philomena School was established in response to the concerns of Catholic families about the available education choices for their children. Parents approached the Society of St Pius X to ask for assistance in developing a truly Catholic school.</p>
                <p style={body}>Through the great generosity of Dr Felice and Mrs Marie Zaccari, eleven rural acres at 61 Koplick Road, Park Ridge, was purchased in February 1993. Under the intercession of St Philomena, all obstacles were finally overcome and the school opened on Tuesday 2 February 1999.</p>
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-label)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)", marginBottom: "1.25rem" }}>Our Principals</h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {PRINCIPALS.map(([name, years], i) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 0", borderBottom: i < PRINCIPALS.length - 1 ? "1px solid var(--border-strong)" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "var(--navy)", fontSize: "1.05rem" }}>{name}</span>
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--text-muted)" }}>{years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's welcome */}
      <section style={{ padding: "5rem 0", background: "var(--cream)" }}>
        <div style={{ ...wrap, maxWidth: "860px" }}>
          <SectionLabel>Principal's Welcome</SectionLabel>
          <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 2rem" }}>A Message from<br /><em style={{ fontStyle: "italic" }}>Fr Joseph Ockerse</em></h2>
          <div style={{ marginBottom: "2rem" }}>
            <PullQuote>St Philomena School, as an independent Catholic school of the Society of St Pius X, strives to deliver an authentically Catholic education.</PullQuote>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={body}>It would be a mistake to suppose that a Catholic School is one with merely Catholic teachers, some regular instruction in Catechism, and the opportunity to receive the sacraments. A school can only be Catholic when it is directed by the Catholic philosophy of life.</p>
            <p style={body}>St Philomena School exists to provide the pressing need of educating human beings to be authentically human — young men and women who know, love, and serve God, and who are thereby equipped to serve their neighbour and society.</p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Button variant="primary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("enrol"); }} icon={<Icon name="arrow-right" size={14} />}>Begin Your Enrolment</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutScreen, PageHero });
