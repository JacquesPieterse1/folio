'use client'

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-base)',
        borderTop: '1px solid var(--color-border)',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: copyright */}
        <span
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'var(--color-dim)',
          }}
        >
          © 2025 Jacques Pieterse
        </span>

        {/* Center: location */}
        <span
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-dim)',
          }}
        >
          Cape Town, ZA
        </span>

        {/* Right: scroll to top */}
        <button
          onClick={scrollToTop}
          data-cursor="link"
          aria-label="Back to top"
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 0',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)' }}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  )
}
