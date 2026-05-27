export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        {/* ── Rail ── */}
        <aside className="jp-rail" aria-hidden="true">
          <span className="jp-rail-label">[00] / Home</span>
          <span className="jp-rail-label">2026 ©</span>
        </aside>

        {/* ── Stage ── */}
        <div className="hero-stage">
          {/* Scrolling title marquee */}
          <h1
            className="hero-title"
            aria-label="Jacques Pieterse — Full-Stack Developer"
          >
            <span className="hero-title-track" aria-hidden="true">
              <MarqueeGroup />
              <MarqueeGroup />
            </span>
          </h1>

          {/* Intro + Visual grid */}
          <div className="hero-grid">
            <p className="hero-intro reveal">
              HEY — YOU MADE IT. I&apos;M{' '}
              <span style={{ color: 'var(--accent)' }}>JACQUES, A FULL-STACK DEV</span>{' '}
              SHIPPING REAL PRODUCTS FROM CAPE TOWN. SCROLL&nbsp;↓ FOR THE GOODS.
            </p>
            <HeroVisual />
          </div>

          {/* Meta footer */}
          <div className="hero-meta">
            <span>FULL-STACK · WEB · MOBILE · PLATFORM</span>
            <span className="hero-scroll-cue">
              <span className="hero-pulse-dot" />
              SCROLL TO EXPLORE
            </span>
            <span>[00 / 05]</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarqueeGroup() {
  return (
    <span className="hero-title-group" aria-hidden="true">
      <span>JACQUES</span>
      <span style={{
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        fontSize: '.85em',
        transform: 'translateY(-.05em)',
        display: 'inline-block',
      }}>*</span>
      <span style={{ color: 'var(--fg-3)' }}>PIETERSE</span>
      <span style={{
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        padding: '0 .04em',
      }}>{'{ }'}</span>
      <span>FULL-STACK</span>
      <span style={{
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        fontSize: '.85em',
        transform: 'translateY(-.05em)',
        display: 'inline-block',
      }}>*</span>
      <span style={{ color: 'var(--fg-3)' }}>DEVELOPER</span>
      <span style={{
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        padding: '0 .04em',
      }}>{'{ }'}</span>
    </span>
  )
}

function HeroVisual() {
  return (
    <div
      className="hero-visual reveal"
      style={{ ['--rev-delay' as string]: '120ms' }}
    >
      <div className="hero-cell" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 2' }}>
        <span>$ ./run --portfolio</span>
        <span className="hero-cell-big">JP*</span>
      </div>
      <div className="hero-cell dark" style={{ gridColumn: '3 / span 2', gridRow: '1 / span 2' }}>
        <span>// stack</span>
        <span className="hero-cell-big">TS · GO</span>
      </div>
      <div className="hero-cell" style={{ gridColumn: '5 / span 2', gridRow: '1 / span 3' }}>
        <div className="hero-cell-stripes" />
        <span style={{ position: 'relative' }}>/* product shot */</span>
      </div>
      <div className="hero-cell accent-cell" style={{ gridColumn: '1 / span 3', gridRow: '3 / span 2' }}>
        <span>02+ YEARS</span>
        <span className="hero-cell-big">SHIPPING</span>
      </div>
      <div className="hero-cell" style={{ gridColumn: '4 / span 2', gridRow: '3 / span 1' }}>
        <span>CPT · ZA</span>
      </div>
      <div className="hero-cell dark" style={{ gridColumn: '4 / span 1', gridRow: '4 / span 1' }}>
        <span>{'{ }'}</span>
      </div>
      <div className="hero-cell" style={{ gridColumn: '5 / span 2', gridRow: '4 / span 1' }}>
        <span>↘ scroll</span>
      </div>
    </div>
  )
}
