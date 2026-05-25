export function AboutSection() {
  const tags = ['AI Development', 'SaaS Platforms', 'Mobile Apps', 'Cloud Architecture', 'UI Engineering']
  const focus = [
    'Building AI-powered developer tools',
    'Scaling SaaS platforms on Azure',
    'Open-source contributions',
    'Exploring WebAssembly + Rust',
  ]

  return (
    <section
      id="about"
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-base)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 24px',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '64px',
          alignItems: 'start',
          position: 'relative',
        }}
        className="about-inner"
      >
        {/* LEFT COLUMN */}
        <div style={{ position: 'relative' }}>
          {/* Rotated ABOUT label — desktop only */}
          <div
            className="about-rotated-label"
            style={{
              position: 'absolute',
              top: 0,
              left: '-48px',
              transformOrigin: 'top left',
              transform: 'rotate(-90deg) translateX(-100%)',
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap',
            }}
          >
            About
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--color-text)',
                }}
              >
                6+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dim)',
                  marginTop: '4px',
                }}
              >
                Years Exp.
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--color-text)',
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dim)',
                  marginTop: '4px',
                }}
              >
                Projects
              </div>
            </div>

            {/* Section number */}
            <div
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--color-dim)',
                marginTop: 'auto',
              }}
            >
              02
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Section header */}
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-dim)',
            }}
          >
            Who I Am
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'var(--color-muted)',
                margin: 0,
              }}
            >
              I&apos;m Jacques Pieterse — a full-stack developer based in Cape Town, South Africa.
              With 6+ years of experience, I build everything from AI-powered platforms to mobile
              apps and enterprise SaaS systems.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'var(--color-muted)',
                margin: 0,
              }}
            >
              I work across the full stack: Next.js and .NET on the backend, React and MAUI on
              the front, and Azure in the cloud. I care deeply about performance, accessibility,
              and writing code that&apos;s built to last.
            </p>
          </div>

          {/* Specialisation tags */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-dim)',
                marginBottom: '12px',
              }}
            >
              Specialisation
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    color: 'var(--color-muted)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '100px',
                    padding: '4px 14px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Current focus */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-dim)',
                marginBottom: '12px',
              }}
            >
              Currently Focused On
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {focus.map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-space-mono), monospace',
                      fontSize: '12px',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 64px 24px !important;
          }
          .about-rotated-label {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
