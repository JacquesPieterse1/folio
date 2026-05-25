'use client'

export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items] // duplicate for seamless loop

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '14px 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '0',
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-dim)',
              paddingRight: '48px',
              whiteSpace: 'nowrap',
            }}
          >
            {item} ·
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee"] { animation: none; }
        }
      `}</style>
    </div>
  )
}
