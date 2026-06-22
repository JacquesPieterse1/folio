export function AboutSection() {
  return (
    <section className="jp-section" id="about">
      <div className="jp-section-inner about-inner">
        {/* Rail */}
        <aside className="about-rail" aria-hidden="true">
          <div className="about-rail-mark">
            <span style={{ color: 'var(--accent)' }}>{'{'}</span>
            <span style={{ color: 'var(--accent)' }}>{'}'}</span>
          </div>
          <div className="about-rail-label">
            <span className="rotated" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--fg)' }}>About</span>
            <span className="ix" style={{ position: 'absolute', bottom: '18px', left: 0, right: 0, textAlign: 'center', fontSize: '10px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', letterSpacing: '.14em' }}>[00 -1]</span>
          </div>
        </aside>

        {/* Body */}
        <div className="about-body">
          <div className="about-tagline reveal">
            <span style={{ color: 'var(--fg)', marginRight: '12px' }}>[ + ]</span>
            A bit more about yours truly
          </div>
          <p
            className="about-text reveal"
            style={{ ['--rev-delay' as string]: '80ms' }}
          >
            Hi, I&apos;m <strong>Jacques, a Full-Stack Developer</strong> based in Cape Town with 2+ years building
            production software — from internal tooling and platform services at{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>4Sight Holdings </span> to mobile apps
            and web frontends. I care about clean systems, tight interfaces, and code that ships on time
            and doesn&apos;t fall over.
          </p>
        </div>
      </div>
    </section>
  )
}
