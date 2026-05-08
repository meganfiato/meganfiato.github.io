// Direction B — "The Editorial"
// Cream paper, deep navy ink. Magazine-cover energy.
// Big confident grotesk, structured columns, pull quotes, photography-led.

const ED = window.MeganData;

function EdPhoto({ ratio = "4/5", label = "event photo", height, src, alt }) {
  const [failed, setFailed] = React.useState(false);
  const showImg = src && !failed;
  return (
    <div
      style={{
        aspectRatio: height ? undefined : ratio,
        height,
        background: showImg
          ? "#e7e1d3"
          : "repeating-linear-gradient(135deg,#e7e1d3 0 14px,#ddd6c5 14px 28px)",
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(15,33,58,0.08)",
      }}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt || label}
          onError={() => setFailed(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--ed-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7a6b48",
            opacity: 0.85,
          }}
        >
          [ {label} ]
        </div>
      )}
    </div>
  );
}

function EdSectionLabel({ n, kicker }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        fontFamily: "var(--ed-mono)",
        fontSize: 11,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "var(--ink)",
        marginBottom: 28,
      }}
    >
      <span style={{ color: "var(--ed-accent)" }}>№ {n}</span>
      <span style={{ flex: "0 0 60px", height: 1, background: "var(--ink)" }} />
      <span>{kicker}</span>
    </div>
  );
}

function EditorialPortfolio() {
  const [filter, setFilter] = React.useState("ALL");
  const tags = ["ALL", ...Array.from(new Set(ED.events.map((e) => e.tag)))];
  const events = filter === "ALL" ? ED.events : ED.events.filter((e) => e.tag === filter);

  return (
    <div
      className="ed-root"
      style={{
        background: "#f5efde",
        color: "#0f213a",
        fontFamily: "var(--ed-sans)",
        position: "relative",
      }}
    >
      <style>{`
        .ed-root{
          --ed-sans: 'Schibsted Grotesk', 'Geist', system-ui, sans-serif;
          --ed-mono: 'JetBrains Mono', ui-monospace, monospace;
          --paper: #f5efde;
          --ink: #0f213a;
          --ink-dim: #4f5d75;
          --ed-accent: #b9532a;
          --rule: rgba(15,33,58,0.18);
        }
        .ed-rule{height:1px;background:var(--rule);width:100%}
        .ed-link{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--ink);transition:all .15s}
        .ed-link:hover{color:var(--ed-accent);border-bottom-color:var(--ed-accent)}
        .ed-chip{font-family:var(--ed-mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;
          padding:8px 14px;border:1px solid var(--ink);border-radius:0;color:var(--ink);
          cursor:pointer;background:transparent;transition:all .15s}
        .ed-chip:hover{background:var(--ink);color:var(--paper)}
        .ed-chip[data-on="1"]{background:var(--ink);color:var(--paper)}
        @keyframes edTick{0%,49%{opacity:1}50%,100%{opacity:0}}
        .ed-blink{animation:edTick 1.1s steps(1) infinite}
      `}</style>

      {/* MASTHEAD */}
      <div
        style={{
          padding: "20px 64px",
          borderBottom: "2px solid var(--ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--ed-mono)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        <span>VOL. 01 / FY26</span>
        <span style={{ fontFamily: "var(--ed-sans)", fontSize: 22, letterSpacing: "0.04em", fontWeight: 500 }}>
          THE FIATO REPORT
        </span>
        <span>A FIELD MARKETING PORTFOLIO</span>
      </div>

      {/* COVER */}
      <div
        style={{
          padding: "72px 64px 64px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 56,
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--ed-mono)",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--ed-accent)",
              marginBottom: 36,
            }}
          >
            FEATURE — FIELD MARKETING, 2025
          </div>
          <h1
            style={{
              fontFamily: "var(--ed-sans)",
              fontSize: 132,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontWeight: 500,
              margin: 0,
            }}
          >
            How Megan<br />
            Fiato turned<br />
            <em style={{ fontStyle: "italic", fontFamily: "var(--ed-sans)", color: "var(--ed-accent)", fontWeight: 400 }}>
              six conferences
            </em><br />
            into <span style={{ borderBottom: "6px solid var(--ed-accent)", paddingBottom: 4 }}>$5.2M</span>.
          </h1>
          <div
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              maxWidth: 720,
            }}
          >
            <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0, color: "var(--ink)" }}>
              The story of one fintech field marketer who treats every booth like a P&L,
              every meeting like a hand-off, and every spreadsheet like an opening line.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0, color: "var(--ink-dim)" }}>
              By way of Charlotte. AI in the toolkit. Goal-driven by default. Open to the
              next senior field marketing seat — and ready to bring the number with her.
            </p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <EdPhoto ratio="3/4" label="megan portrait" src={ED.photos && ED.photos.portrait} alt="Megan Fiato" />
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -16,
              background: "var(--ed-accent)",
              color: "var(--paper)",
              padding: "10px 14px",
              fontFamily: "var(--ed-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transform: "rotate(4deg)",
            }}
          >
            INSIDE: 6 EVENTS, $5.2M, 1 STACK
          </div>
        </div>
      </div>

      {/* DECK / BIG NUMBERS */}
      <div
        style={{
          padding: "72px 64px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <EdSectionLabel n="01" kicker="The numbers, big and plain" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--rule)",
            borderLeft: "1px solid var(--rule)",
          }}
        >
          {ED.metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                borderRight: "1px solid var(--rule)",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 80,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 16,
                  color: "var(--ink)",
                  letterSpacing: "-0.005em",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontFamily: "var(--ed-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "var(--ink-dim)",
                }}
              >
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PULL QUOTE */}
      <div
        style={{
          padding: "100px 64px",
          textAlign: "center",
          borderBottom: "1px solid var(--rule)",
          background: "#efe7d2",
        }}
      >
        <div
          style={{
            fontFamily: "var(--ed-sans)",
            fontSize: 56,
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <span style={{ color: "var(--ed-accent)", fontFamily: "var(--ed-sans)" }}>
            “
          </span>
          A field marketer's job isn't to host the room.<br />
          It's to walk the sales team to the deals — and then{" "}
          <em style={{ fontStyle: "italic" }}>get out of the way</em>.
          <span style={{ color: "var(--ed-accent)" }}>”</span>
        </div>
        <div
          style={{
            fontFamily: "var(--ed-mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--ink-dim)",
            marginTop: 36,
          }}
        >
          — MEGAN, ON RECORD
        </div>
      </div>

      {/* THE 6 — feature spread */}
      <div
        style={{
          padding: "72px 64px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <EdSectionLabel n="02" kicker="The six" />
            <div
              style={{
                fontFamily: "var(--ed-sans)",
                fontSize: 56,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                maxWidth: 900,
              }}
            >
              Conferences, in order. Filed by audience and outcome.
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", maxWidth: 380, justifyContent: "flex-end" }}>
            {tags.map((t) => (
              <button key={t} className="ed-chip" data-on={filter === t ? "1" : "0"} onClick={() => setFilter(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {events.map((e, i) => (
            <article
              key={e.id}
              style={{
                padding: "36px 36px 36px 0",
                paddingLeft: i % 2 === 1 ? 36 : 0,
                paddingRight: i % 2 === 0 ? 36 : 0,
                borderTop: "1px solid var(--rule)",
                borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 24,
              }}
            >
              <EdPhoto ratio="4/5" label={`${e.name.toLowerCase()} · booth`} src={ED.photos && ED.photos.events && ED.photos.events[e.id]} alt={`${e.name} booth`} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--ed-mono)",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--ed-accent)",
                  }}
                >
                  {String(ED.events.indexOf(e) + 1).padStart(2, "0")} / {e.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ed-sans)",
                    fontSize: 30,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    margin: "10px 0 6px",
                    lineHeight: 1.05,
                  }}
                >
                  {e.name}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--ed-mono)",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "var(--ink-dim)",
                    marginBottom: 16,
                  }}
                >
                  {e.city.toUpperCase()} · {e.date.toUpperCase()} · {e.audience}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {e.blurb}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 24,
                    marginTop: 18,
                    paddingTop: 16,
                    borderTop: "1px solid var(--rule)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--ed-sans)",
                        fontSize: 24,
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {e.pipeline}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--ed-mono)",
                        fontSize: 9,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--ink-dim)",
                      }}
                    >
                      pipeline
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--ed-sans)",
                        fontSize: 24,
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {e.meetings}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--ed-mono)",
                        fontSize: 9,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--ink-dim)",
                      }}
                    >
                      meetings
                    </div>
                  </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "var(--ed-mono)",
                        fontSize: 11,
                        color: "var(--ed-accent)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      ↳ {e.kpi}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* AI WORKFLOW — feature column */}
      <div
        style={{
          padding: "72px 64px",
          borderBottom: "1px solid var(--rule)",
          background: "#0f213a",
          color: "#f5efde",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "var(--ed-mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#f5efde",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#e8a16a" }}>№ 03</span>
          <span style={{ flex: "0 0 60px", height: 1, background: "#f5efde" }} />
          <span>What runs in the background</span>
        </div>
        <div
          style={{
            fontFamily: "var(--ed-sans)",
            fontSize: 64,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            maxWidth: 1100,
            marginBottom: 56,
          }}
        >
          A field team of one,<br />
          <em style={{ fontStyle: "italic", color: "#e8a16a" }}>plus three quiet GPTs</em>.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 36,
          }}
        >
          {ED.aiWorkflows.map((w, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(245,239,222,0.4)", paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: "var(--ed-mono)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: "#e8a16a",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Tool {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 36,
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  marginBottom: 6,
                }}
              >
                {w.tool}
              </div>
              <div
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 16,
                  fontStyle: "italic",
                  marginBottom: 16,
                  color: "#e8a16a",
                }}
              >
                {w.use}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "#cdd5e3",
                  margin: 0,
                }}
              >
                {w.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT + SKILLS — magazine columns */}
      <div
        style={{
          padding: "72px 64px",
          borderBottom: "1px solid var(--rule)",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 64,
        }}
      >
        <div>
          <EdSectionLabel n="04" kicker="About the writer of this portfolio" />
          <div
            style={{
              fontFamily: "var(--ed-sans)",
              fontSize: 28,
              lineHeight: 1.4,
              letterSpacing: "-0.015em",
              maxWidth: 720,
              columnCount: 1,
            }}
          >
            <p style={{ margin: "0 0 18px" }}>
              Megan Fiato is a field marketer for fintech, currently logging $5M+
              in sourced pipeline a year across six conferences.
            </p>
            <p style={{ margin: "0 0 18px", color: "var(--ink-dim)", fontSize: 22 }}>
              She designs event programs end-to-end — thesis, audience, booth,
              content, follow-up — and brings the sales team along for every step.
              The conference is the offer; the follow-up is the deal.
            </p>
            <p style={{ margin: 0, color: "var(--ink-dim)", fontSize: 22 }}>
              Goal-driven, hardworking, occasionally too honest about a forecast.
              Coffee in one hand, attribution model in the other.
            </p>
          </div>
        </div>
        <div>
          <EdSectionLabel n="05" kicker="In the toolkit" />
          <div style={{ display: "grid", gap: 22, marginTop: 8 }}>
            {Object.entries(ED.skills).map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid var(--rule)", paddingTop: 14 }}>
                <div
                  style={{
                    fontFamily: "var(--ed-sans)",
                    fontSize: 18,
                    letterSpacing: "-0.01em",
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {k}
                </div>
                <div style={{ fontFamily: "var(--ed-mono)", fontSize: 12, color: "var(--ink)", lineHeight: 1.7 }}>
                  {v.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS — letters to the editor */}
      <div
        style={{
          padding: "72px 64px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <EdSectionLabel n="06" kicker="Letters to the editor" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${ED.testimonials.length}, 1fr)`,
            gap: 0,
            borderTop: "1px solid var(--rule)",
          }}
        >
          {ED.testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "32px 28px",
                borderRight: i < ED.testimonials.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 60,
                  color: "var(--ed-accent)",
                  lineHeight: 0.4,
                  marginBottom: 14,
                  height: 30,
                }}
              >
                “
              </div>
              <p
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 19,
                  lineHeight: 1.45,
                  margin: 0,
                  letterSpacing: "-0.005em",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  marginTop: 22,
                  fontFamily: "var(--ed-mono)",
                  fontSize: 11,
                  color: "var(--ink-dim)",
                  letterSpacing: "0.06em",
                }}
              >
                — {t.name}
                <br />
                <span style={{ color: "var(--ink-dim)", opacity: 0.7 }}>{t.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NOW */}
      <div style={{ padding: "72px 64px", borderBottom: "1px solid var(--rule)" }}>
        <EdSectionLabel n="07" kicker="Now / currently" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {ED.now.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 18 }}>
              <div
                style={{
                  fontFamily: "var(--ed-mono)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  color: "var(--ed-accent)",
                  flexShrink: 0,
                  width: 32,
                  paddingTop: 4,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "var(--ed-sans)",
                  fontSize: 20,
                  lineHeight: 1.4,
                  letterSpacing: "-0.005em",
                }}
              >
                {n}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: "100px 64px 72px" }}>
        <div
          style={{
            fontFamily: "var(--ed-mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--ed-accent)",
            marginBottom: 32,
          }}
        >
          № 08 — CORRESPONDENCE
        </div>
        <div
          style={{
            fontFamily: "var(--ed-sans)",
            fontSize: 96,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: 1200,
          }}
        >
          Hire her<span style={{ color: "var(--ed-accent)" }}>.</span><br />
          <em style={{ fontStyle: "italic", color: "var(--ink-dim)" }}>The pipeline will follow.</em>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 24,
            marginTop: 64,
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
            fontFamily: "var(--ed-mono)",
            fontSize: 12,
            letterSpacing: "0.06em",
          }}
        >
          <div>
            <div style={{ color: "var(--ink-dim)", marginBottom: 6, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: 10 }}>
              Email
            </div>
            <a className="ed-link" href={`mailto:${ED.email}`}>{ED.email}</a>
          </div>
          <div>
            <div style={{ color: "var(--ink-dim)", marginBottom: 6, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: 10 }}>
              LinkedIn
            </div>
            <a className="ed-link" href={ED.links.linkedin.url} target="_blank" rel="noreferrer">
              {ED.links.linkedin.label}
            </a>
          </div>
          <div>
            <div style={{ color: "var(--ink-dim)", marginBottom: 6, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: 10 }}>
              Instagram
            </div>
            <a className="ed-link" href={ED.links.instagram.url} target="_blank" rel="noreferrer">
              {ED.links.instagram.label}
            </a>
          </div>
          <div>
            <div style={{ color: "var(--ink-dim)", marginBottom: 6, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: 10 }}>
              Résumé
            </div>
            <a
              className="ed-link"
              href="megan-fiato-resume.pdf"
              download="Megan-Fiato-Resume.pdf"
            >
              ↓ download .pdf
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: 80,
            paddingTop: 16,
            borderTop: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--ed-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink-dim)",
          }}
        >
          <span>© 2026 — THE FIATO REPORT</span>
          <span>SET IN GROTESK & MONO · PRINTED ON PIXELS</span>
          <EdEasterEgg />
        </div>
      </div>
    </div>
  );
}

function EdEasterEgg() {
  const [shown, setShown] = React.useState(false);
  return (
    <span
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => setShown((s) => !s)}
    >
      {shown ? "FUELED BY: ESPRESSO, FORECASTS, AND A GOOD QBR" : "PSST — CLICK ME"}
    </span>
  );
}

window.EditorialPortfolio = EditorialPortfolio;
