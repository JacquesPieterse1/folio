const pillars = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
        <rect x="3" y="6" width="26" height="20" rx="1"/>
        <line x1="3" y1="11" x2="29" y2="11"/>
        <circle cx="7" cy="8.5" r=".7" fill="currentColor"/>
      </svg>
    ),
    title: 'FRONTEND\nENGINEERING',
    items: ['React & Next.js', 'Design Systems', 'Accessibility', 'Motion & Interaction'],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
        <rect x="3" y="6" width="26" height="20" rx="1"/>
        <line x1="9" y1="12" x2="23" y2="20"/>
        <line x1="23" y1="12" x2="9" y2="20"/>
      </svg>
    ),
    title: 'FULL-STACK\nPRODUCT',
    items: ['API Design', 'Postgres & SQL', 'Auth & Payments', 'End-to-End Ships'],
    delay: '80ms',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
        <rect x="3" y="6" width="26" height="20" rx="1"/>
        <circle cx="16" cy="16" r="3.2"/>
        <circle cx="16" cy="16" r=".8" fill="currentColor"/>
      </svg>
    ),
    title: 'INFRA\n& DEVOPS',
    items: ['Docker & CI/CD', 'AWS & Cloudflare', 'Observability', 'Release Tooling'],
    delay: '160ms',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" width="36" height="36">
        <rect x="10" y="4" width="12" height="24" rx="2"/>
        <line x1="14" y1="7" x2="18" y2="7"/>
        <circle cx="16" cy="24" r=".8" fill="currentColor"/>
      </svg>
    ),
    title: 'MOBILE\nAPPS',
    items: ['React Native', 'Offline-First', 'Native Modules', 'App Store Releases'],
    delay: '240ms',
  },
]

export function FocusSection() {
  return (
    <section className="jp-section" id="focus">
      <div className="jp-section-inner focus-inner">
        {/* Rail */}
        <aside className="focus-rail" aria-hidden="true">
          <div className="top" />
          <div className="bottom">
            <span className="rotated" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--fg)' }}>
              Focus
            </span>
            <span className="ix" style={{ position: 'absolute', bottom: '18px', left: 0, right: 0, textAlign: 'center', fontSize: '10px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', letterSpacing: '.14em' }}>
              [00 -3]
            </span>
          </div>
        </aside>

        {/* 4-column pillar grid */}
        <div className="focus-body">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="pillar reveal"
              style={pillar.delay ? { ['--rev-delay' as string]: pillar.delay } : undefined}
            >
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>
                {pillar.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < pillar.title.split('\n').length - 1 && <br />}</span>
                ))}
              </h3>
              <ul>
                {pillar.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
