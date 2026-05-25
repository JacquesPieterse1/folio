import { cn } from '@/src/lib/utils'

const projectPreviews = [
  { id: '01', label: 'AI ANALYTICS', tall: true },
  { id: '02', label: 'SAAS PORTAL', tall: false },
  { id: '03', label: 'REAL ESTATE', tall: false },
  { id: '04', label: 'FITNESS APP', tall: false },
  { id: '05', label: 'CYBERSECURITY', tall: false },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className={cn('grain')}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-base)',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '120px 24px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-inner"
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          {/* Top label */}
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-dim)',
            }}
          >
            Full Stack Developer — 01
          </div>

          {/* Giant name */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(56px, 8vw, 104px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                color: 'var(--color-text)',
                margin: 0,
              }}
            >
              JACQUES
              <br />
              <span style={{ color: 'var(--color-accent)' }}>*</span>{' '}
              PIETERSE
            </h1>

            {/* Accent divider */}
            <div
              style={{
                width: '32px',
                height: '1px',
                backgroundColor: 'var(--color-accent)',
                margin: '24px 0',
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'var(--color-muted)',
                maxWidth: '400px',
                margin: 0,
              }}
            >
              Building scalable apps, AI systems, and modern digital
              experiences — from Cape Town to the world.
            </p>
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              data-cursor="link"
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                textDecoration: 'none',
                border: '1px solid var(--color-accent)',
                borderRadius: '100px',
                padding: '10px 24px',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
            >
              View Work →
            </a>
            <a
              href="#contact"
              data-cursor="link"
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                textDecoration: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '100px',
                padding: '10px 24px',
              }}
            >
              Contact
            </a>
          </div>

          {/* Bottom meta */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-dim)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '20px',
            }}
          >
            <span>Cape Town, ZA</span>
            <span>↓ Scroll</span>
          </div>
        </div>

        {/* RIGHT COLUMN — project preview grid */}
        <div
          className="hero-project-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto auto auto',
            gap: '8px',
          }}
        >
          {/* Tall box - spans 3 rows */}
          <PreviewBox label="01 / AI ANALYTICS" tall />
          {/* Right column - 3 stacked boxes */}
          <PreviewBox label="02 / SAAS PORTAL" />
          <PreviewBox label="03 / REAL ESTATE" />
          {/* Bottom row */}
          <PreviewBox label="04 / FITNESS APP" />
          <PreviewBox label="05 / CYBERSECURITY" />
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            padding-bottom: 48px !important;
          }
          .hero-project-grid {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function PreviewBox({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div
      style={{
        gridRow: tall ? 'span 3' : 'span 1',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '6px',
        minHeight: tall ? '320px' : '100px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px',
      }}
    >
      {/* Accent color overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--color-accent)',
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: '9px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {label}
      </span>
    </div>
  )
}
