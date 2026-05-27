import { services } from '@/src/lib/data'
import { ServiceCard } from '@/src/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '96px 24px',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
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
            04 — What I Do
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(24px, 8vw, 72px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            SERVICES
            <br />
            <span style={{ color: 'var(--color-accent)' }}>&amp;</span> EXPERTISE
          </h2>
        </div>

        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
