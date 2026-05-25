import { stack } from '@/src/lib/data'
import { Marquee } from '@/src/components/ui/Marquee'
import { StackBadge } from '@/src/components/ui/StackBadge'

const marqueeItems = stack.map(s => s.name)

export function StackSection() {
  return (
    <section
      id="stack"
      style={{
        backgroundColor: 'var(--color-base)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Marquee strip */}
      <Marquee items={marqueeItems} />

      {/* Badge grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 24px',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-dim)',
              marginBottom: '16px',
            }}
          >
            05 — Tech Stack
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(40px, 5vw, 72px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            TOOLS &<br />
            <span style={{ color: 'var(--color-accent)' }}>*</span> TECH
          </h2>
        </div>

        {/* Badge grid — 4 columns on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
          }}
          className="stack-grid"
        >
          {stack.map((item, index) => (
            <StackBadge key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stack-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
