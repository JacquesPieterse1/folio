export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated radial gradient orbs — decorative background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,197,218,0.06) 0%, transparent 70%)',
            animation: 'float1 20s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,197,218,0.04) 0%, transparent 70%)',
            animation: 'float2 25s ease-in-out infinite',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <div
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-dim)',
            marginBottom: '24px',
          }}
        >
          06 — Get In Touch
        </div>

        {/* Giant heading */}
        <h2
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 80px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.88,
            color: 'var(--color-text)',
            margin: '0 0 64px -4px',
          }}
        >
          LET&apos;S BUILD
          <br />
          <span style={{ color: 'var(--color-accent)' }}>*</span> SOMETHING
          <br />
          GREAT
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: contact info + social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Email */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dim)',
                  marginBottom: '8px',
                }}
              >
                Email
              </div>
              <a
                href="mailto:jacquespieterse2000@gmail.com"
                data-cursor="link"
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '4px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  display: 'inline-block',
                }}
              >
                jacquespieterse2000@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-dim)',
                  marginBottom: '16px',
                }}
              >
                Social
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/JacquesPieterse1' },
                  { label: 'LinkedIn', href: '#' },
                  { label: 'X / Twitter', href: '#' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    style={{
                      fontFamily: 'var(--font-space-mono), monospace',
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      color: 'var(--color-muted)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)', fontSize: '10px' }}>→</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div>
              <a
                href="mailto:jacquespieterse2000@gmail.com"
                data-cursor="link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  border: '1px solid var(--color-accent)',
                  borderRadius: '100px',
                  padding: '14px 32px',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                Start a Project →
              </a>
            </div>
          </div>

          {/* Right: portrait placeholder */}
          <div>
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5',
                maxWidth: '360px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'var(--color-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <img
                src="https://placehold.co/400x500/1a1a1a/444444"
                alt="Jacques Pieterse"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Float keyframes */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
