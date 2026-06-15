/* EnrolScreen — Join Our Community: welcome, eligibility, process, fees, CTA. */

function EnrolScreen({ onNavigate }) {
  const { SectionLabel, Button, Badge, PullQuote } = window.DS;
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" };
  const h2 = { fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.15, fontSize: "clamp(1.9rem, 3.4vw, 2.5rem)", margin: 0 };
  const body = { color: "oklch(0.27 0.065 250 / 0.72)", lineHeight: 1.75, fontFamily: "var(--font-body)", margin: 0 };

  const STEPS = [
    ["Submit an Enquiry", "Contact the Distance Learning office by phone or email to express your interest and receive an information pack."],
    ["Complete Application", "Complete the enrolment application form and return it with the required supporting documents."],
    ["Application Review", "The Principal reviews all applications. Families may be invited to a phone interview to discuss the programme."],
    ["Offer of Enrolment", "Successful applicants receive a formal offer of enrolment. Acceptance requires payment of the enrolment deposit."],
    ["Receive Materials", "Prior to the start of term, enrolled students receive their lesson books, textbooks, and timetable."],
    ["Begin Learning", "Students commence the programme at the start of the school term, following the structured daily timetable."],
  ];
  const ELIGIBILITY = [
    "Students entering Year 7 or Year 8",
    "Catholic families committed to an authentic Catholic education",
    "Families willing to support the school's philosophy and standards",
    "Students who are able to work independently with parental supervision",
    "Families who accept the school's behaviour and dress standards",
  ];
  const CHECKLIST = [
    "Completed enrolment application form", "Copy of student's birth certificate", "Most recent school reports (if applicable)",
    "Baptism certificate (for Catholic students)", "Signed acceptance of the school's Code of Conduct", "Enrolment deposit payment",
  ];

  return (
    <div>
      <PageHero label="Enrolments" heading="Join Our Community" />

      {/* Welcome + eligibility */}
      <section style={{ padding: "5rem 0", background: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <div>
              <SectionLabel>Welcome</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Enrol in Distance<br /><em style={{ fontStyle: "italic" }}>Learning</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={body}>St Philomena School's Distance Learning programme is open to Catholic families across Australia who are seeking an authentic classical Catholic education for their children in Years 7 and 8.</p>
                <p style={body}>Enrolment places are limited. We encourage families to contact us early to discuss the programme and begin the application process.</p>
              </div>
            </div>
            {/* Eligibility box */}
            <div style={{ background: "var(--navy)", color: "var(--cream)", padding: "2.25rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--gold)", fontSize: "1.4rem", margin: "0 0 1.25rem" }}>Eligibility</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {ELIGIBILITY.map((e) => (
                  <li key={e} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", color: "oklch(0.98 0.015 90 / 0.8)", fontSize: "0.9rem", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                    <span style={{ color: "var(--gold)", lineHeight: 1.4, flexShrink: 0 }}><Icon name="check" size={16} color="var(--gold)" /></span>{e}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid oklch(1 0 0 / 0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.98 0.015 90 / 0.6)" }}>Year Levels Offered</span>
                <Badge tone="gold">Year 7 & 8</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ padding: "5rem 0", background: "var(--cream-dark)" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <SectionLabel>The Process</SectionLabel>
            <h2 style={{ ...h2, color: "var(--navy)", marginTop: "0.75rem" }}>How to Enrol</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {STEPS.map(([t, d], i) => (
              <div key={t} style={{ background: "var(--white)", border: "1px solid var(--cream-dark)", padding: "1.75rem", position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--gold)", fontSize: "2rem", lineHeight: 1, marginBottom: "0.75rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy)", fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{t}</h3>
                <p style={{ color: "oklch(0.27 0.065 250 / 0.65)", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "var(--font-body)", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + fees */}
      <section style={{ padding: "5rem 0", background: "var(--cream)" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <div>
              <SectionLabel>Documents Required</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Application<br /><em style={{ fontStyle: "italic" }}>Checklist</em></h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {CHECKLIST.map((c) => (
                  <li key={c} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", padding: "0.75rem 1rem", background: "var(--white)", border: "1px solid var(--cream-dark)", color: "var(--text-body)", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
                    <Icon name="file-check" size={16} color="var(--crimson)" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Fees & Costs</SectionLabel>
              <h2 style={{ ...h2, color: "var(--navy)", margin: "0.75rem 0 1.5rem" }}>Tuition &amp;<br /><em style={{ fontStyle: "italic" }}>Materials</em></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={body}>Tuition fees for the Distance Learning programme are set annually. The fees cover access to the full curriculum, teacher marking and feedback, and regular teacher contact.</p>
                <p style={body}>Textbooks and lesson materials are provided separately. Some materials may be available for hire through the school's Textbook Hire Scheme.</p>
              </div>
              <div style={{ marginTop: "1.5rem", background: "oklch(0.38 0.13 22 / 0.06)", borderLeft: "3px solid var(--crimson)", padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--crimson)", margin: "0 0 0.5rem" }}>Important Note</p>
                <p style={{ ...body, fontSize: "0.9rem" }}>St Philomena School is an independent Catholic school. Government funding may be available to eligible students. Please enquire with the office for details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "var(--navy)", color: "var(--cream)", textAlign: "center" }}>
        <div style={{ ...wrap, maxWidth: "640px" }}>
          <SectionLabel tone="gold">Get in Touch</SectionLabel>
          <h2 style={{ ...h2, color: "var(--cream)", margin: "0.75rem 0 1.25rem" }}>Ready to Apply?</h2>
          <p style={{ color: "oklch(0.98 0.015 90 / 0.7)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
            Contact our Distance Learning office to request an enrolment pack, ask questions about the programme, or arrange a time to speak with the Principal.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Button variant="primary" as="a" href="#" onClick={(e) => e.preventDefault()} icon={<Icon name="arrow-right" size={14} />}>Begin Enrolment</Button>
            <Button variant="secondary" as="a" href="#" onClick={(e) => e.preventDefault()} icon={<Icon name="phone" size={13} />} iconRight={false}>(07) 3802 0088</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { EnrolScreen });
