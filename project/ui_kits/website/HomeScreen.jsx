/* HomeScreen — faithful recreation of the St Philomena DL home page. */

function HomeScreen({ onNavigate }) {
  const { Button, SectionLabel, PillarCard, StatBlock, PullQuote, GoldDivider, Badge } = window.DS;

  const PILLARS = [
    { icon: "cross", title: "Catholic Faith", body: "Every subject is taught within the framework of the Catholic Faith. We form students who know their Faith, practise it, and have a deep desire to serve God." },
    { icon: "book-open", title: "Classical Curriculum", body: "Latin, Logic, Rhetoric, Literature, and History form the core of our Liberal Arts programme — developing memory, analysis, and the ability to express truth beautifully." },
    { icon: "graduation-cap", title: "Character Formation", body: "The most important part of education is the formation of character. We strive to produce young men and women who are balanced, responsible, and courageous." },
    { icon: "map-pin", title: "Distance Learning", body: "Our Distance Learning programme brings St Philomena's classical Catholic education directly to families across Australia, regardless of location." },
  ];
  const SUBJECTS = [
    ["Religion & Catechism", "Both"], ["Latin", "Both"], ["English Literature", "Both"], ["Logic", "Yr 8"],
    ["History (Ancient & Modern)", "Both"], ["Mathematics", "Both"], ["Science", "Both"], ["Rhetoric", "Yr 8"],
    ["Geography", "Both"], ["Art & Music", "Both"],
  ];
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" };
  const h2 = { fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.15, fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)", margin: 0 };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "560px", height: "82vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img src={ASSETS.chapel} alt="Chapel interior" className="ken-burns" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, oklch(0.18 0.06 250 / 0.92) 0%, oklch(0.18 0.06 250 / 0.75) 50%, oklch(0.18 0.06 250 / 0.5) 100%)" }} />
        </div>
        <div style={{ ...wrap, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "640px" }}>
            <p className="section-label fade-up fade-up-delay-1" style={{ color: "oklch(0.72 0.12 80 / 0.85)", marginBottom: "1rem" }}>† Catholic · Classical · Distance Learning</p>
            <h1 className="fade-up fade-up-delay-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.12, color: "var(--cream)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "0 0 1.5rem" }}>
              An Education Rooted<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>in Truth &amp; Tradition</em>
            </h1>
            <div className="crimson-rule fade-up fade-up-delay-3" style={{ borderColor: "var(--gold)", marginBottom: "1.5rem" }}>
              <p style={{ color: "oklch(0.98 0.015 90 / 0.8)", fontSize: "1.15rem", lineHeight: 1.6, fontFamily: "var(--font-body)", margin: 0 }}>
                St Philomena School's Distance Learning programme offers an authentic Catholic classical education for students in Years 7 &amp; 8 — wherever they are in Australia.
              </p>
            </div>
            <div className="fade-up fade-up-delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Button variant="primary" as="a" href="#" onClick={(e) => e.preventDefault()} icon={<Icon name="arrow-right" size={14} />}>Enrol Now</Button>
              <Button variant="secondary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }}>Learn More</Button>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "96px", background: "linear-gradient(to top, var(--cream), transparent)" }} />
      </section>

      {/* Motto banner */}
      <section style={{ padding: "2.5rem 0", background: "var(--navy)", color: "var(--cream)" }}>
        <div style={wrap}>
          <GoldDivider>"Sine Deo Nihil"</GoldDivider>
          <p style={{ textAlign: "center", color: "oklch(0.98 0.015 90 / 0.6)", marginTop: "0.5rem", fontSize: "0.85rem", letterSpacing: "0.18em", fontFamily: "var(--font-label)", textTransform: "uppercase" }}>Without God there is Nothing</p>
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ padding: "5rem 0", background: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ maxWidth: "560px", marginBottom: "3.5rem" }}>
            <SectionLabel>Our Foundation</SectionLabel>
            <h2 style={{ ...h2, color: "var(--navy)", marginTop: "0.75rem" }}>Education for Education's Sake</h2>
            <p style={{ marginTop: "1rem", color: "oklch(0.27 0.065 250 / 0.7)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
              At St Philomena School, we value education not merely as a means to something else, but for its own sake. A true education forms the whole person — intellect, will, and character.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {PILLARS.map((p) => (
              <PillarCard key={p.title} icon={<Icon name={p.icon} size={22} />} title={p.title}>{p.body}</PillarCard>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy + image grid */}
      <section style={{ padding: "5rem 0", background: "var(--cream-dark)", overflow: "hidden" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <img src={ASSETS.classroom} alt="Classical classroom" style={{ width: "100%", height: "224px", objectFit: "cover" }} />
                <img src={ASSETS.statue2} alt="Statue garden" style={{ width: "100%", height: "224px", objectFit: "cover", marginTop: "2rem" }} />
                <img src={ASSETS.students} alt="Students" style={{ width: "100%", height: "192px", objectFit: "cover" }} />
                <img src={ASSETS.garden} alt="School garden" style={{ width: "100%", height: "192px", objectFit: "cover", marginTop: "1rem" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-1rem", left: "-1rem", width: "96px", height: "96px", border: "2px solid var(--gold)", opacity: 0.4, pointerEvents: "none" }} />
            </div>
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Forming Catholics<br /><em style={{ fontStyle: "italic" }}>for Eternity</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "oklch(0.27 0.065 250 / 0.7)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                <p style={{ margin: 0 }}>St Philomena School was established in response to the concerns of Catholic families about the available education choices for their children. Our school exists to provide an authentically Catholic education — one directed by the Catholic philosophy of life.</p>
                <p style={{ margin: 0 }}>Our classical education curriculum plays a very important role in the formation of character. Through the study of Latin, Logic, Rhetoric, Literature, and History, students develop self-discipline, diligence, memory, and the ability to analyse and express themselves.</p>
              </div>
              <div style={{ margin: "1.5rem 0" }}>
                <PullQuote cite="— Fr Joseph Ockerse, Principal">The most important part of education is the formation of character.</PullQuote>
              </div>
              <Button variant="primary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("about"); }} icon={<Icon name="arrow-right" size={14} />}>Read Our Philosophy</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section style={{ padding: "5rem 0", background: "var(--navy)", color: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "flex-start" }}>
            <div>
              <SectionLabel tone="gold">What We Teach</SectionLabel>
              <h2 style={{ ...h2, color: "var(--cream)", margin: "0.75rem 0 1.5rem" }}>A Liberal Arts<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Curriculum</em></h2>
              <p style={{ color: "oklch(0.98 0.015 90 / 0.7)", lineHeight: 1.7, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
                Our Distance Learning programme covers Years 7 (Grammar Phase) and Year 8 (Logic Phase), offering a rigorous classical curriculum grounded in the Catholic intellectual tradition.
              </p>
              <Button variant="secondary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("teaching"); }} icon={<Icon name="arrow-right" size={14} />}>Full Curriculum</Button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
              {SUBJECTS.map(([name, phase]) => (
                <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", padding: "0.75rem 1rem", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                  <span style={{ color: "oklch(0.98 0.015 90 / 0.85)", fontSize: "0.875rem", fontFamily: "var(--font-body)" }}>{name}</span>
                  <Badge tone={phase === "Both" ? "navy" : "crimson"}>{phase === "Both" ? "Yr 7 & 8" : phase}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DL + stats */}
      <section style={{ padding: "5rem 0", background: "var(--cream)", overflow: "hidden" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <img src={ASSETS.books} alt="Classical books" style={{ width: "100%", height: "320px", objectFit: "cover", boxShadow: "var(--shadow-xl)" }} />
            <div style={{ gridColumn: "span 1" }}>
              <SectionLabel>Distance Learning</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Classical Education,<br /><em style={{ fontStyle: "italic" }}>Wherever You Are</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "oklch(0.27 0.065 250 / 0.7)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                <p style={{ margin: 0 }}>Our Distance Learning programme delivers the same rigorous Catholic classical education as our day school, adapted for families across Australia. Students receive structured lesson materials, regular teacher contact, and access to the full curriculum.</p>
              </div>
              <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                <StatBlock value="7 & 8" label="Year Levels" />
                <StatBlock value="1999" label="Founded" />
                <StatBlock value="QLD" label="Park Ridge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "7rem 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={ASSETS.campus} alt="Campus" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "oklch(0.18 0.06 250 / 0.82)" }} />
        </div>
        <div style={{ ...wrap, position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <SectionLabel tone="gold">Begin the Journey</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--cream)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, margin: "1rem 0 1.5rem" }}>Ready to Enrol?</h2>
            <p style={{ color: "oklch(0.98 0.015 90 / 0.7)", fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
              We welcome families who share our commitment to an authentic Catholic education. Contact us to learn more about our Distance Learning programme and the enrolment process.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Button variant="primary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("enrol"); }} icon={<Icon name="arrow-right" size={14} />}>Begin Enrolment</Button>
              <Button variant="secondary" as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("faq"); }}>Frequently Asked Questions</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
