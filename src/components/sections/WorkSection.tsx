const stackItems = [
  { label: 'TypeScript', dot: true },
  { label: 'React', dot: false },
  { label: 'Next.js', dot: true },
  { label: 'Node', dot: false },
  { label: 'Go', dot: true },
  { label: 'PostgreSQL', dot: false },
  { label: 'React Native', dot: true },
  { label: 'Docker', dot: false },
  { label: 'AWS', dot: true },
  { label: 'Redis', dot: false },
  { label: 'GraphQL', dot: true },
  { label: 'Tailwind', dot: false },
]

const projects = [
  {
    slug: 'flux',
    name: 'FLUX',
    title: 'REAL-TIME OPS\nDASHBOARD',
    tags: ['Digital', 'Real-time', 'Platform'],
    year: 2025,
    thumbs: [
      { type: 'hero' as const },
      { type: 'metric' as const },
      { type: 'console' as const },
    ],
  },
  {
    slug: 'atlas',
    name: 'ATLAS',
    title: 'FLEET TRACKING\nMOBILE APP',
    tags: ['Mobile', 'Real-time', 'GraphQL'],
    year: 2024,
    thumbs: [
      { type: 'hero-atlas' as const },
      { type: 'map' as const },
      { type: 'stat-atlas' as const },
    ],
  },
  {
    slug: 'cipher',
    name: 'CIPHER',
    title: 'AUTH & RBAC\nMICROSERVICE',
    tags: ['Platform', 'Security', 'Backend'],
    year: 2024,
    thumbs: [
      { type: 'hero-cipher' as const },
      { type: 'mark' as const },
      { type: 'code' as const },
    ],
  },
  {
    slug: 'meridian',
    name: 'MERIDIAN',
    title: 'HEADLESS\nSTOREFRONT',
    tags: ['Digital', 'Commerce', 'Edge'],
    year: 2023,
    thumbs: [
      { type: 'hero-meridian' as const },
      { type: 'shop' as const },
      { type: 'stat-meridian' as const },
    ],
  },
]

export function WorkSection() {
  return (
    <>
      {/* Dark marquee strip + WORK header */}
      <section className="work-section-wrap" id="work">
        <div className="work-inner">
          {/* Stack marquee */}
          <div className="stack-marquee" aria-hidden="true">
            <div className="stack-marquee-track">
              {stackItems.map((item, i) => (
                <span key={i} className={`stack-marquee-item${item.dot ? '' : ' muted'}`}>
                  {item.label}
                  {item.dot && <span className="dot" />}
                </span>
              ))}
            </div>
            <div className="stack-marquee-track" aria-hidden="true">
              {stackItems.map((item, i) => (
                <span key={i} className={`stack-marquee-item${item.dot ? '' : ' muted'}`}>
                  {item.label}
                  {item.dot && <span className="dot" />}
                </span>
              ))}
            </div>
          </div>

          {/* Big WORK header */}
          <div className="work-header">
            <h2>
              <span>WORK</span>{' '}
              <span style={{ color: 'var(--fg-3)' }}>WORK</span>
            </h2>
            <span className="work-star">*</span>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.slug} className="project-card reveal">
            {/* Info */}
            <div className="project-info">
              <span className="project-tag">
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{'{ }'}</span>
                {' '}{project.name}
              </span>
              <h3 className="project-title">
                {project.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
                ))}
              </h3>
            </div>

            {/* Visual thumbs */}
            <div className="project-visual">
              {project.thumbs.map((thumb, i) => (
                <ThumbVariant key={i} type={thumb.type} name={project.name.toLowerCase()} />
              ))}
            </div>

            {/* Meta strip */}
            <div className="project-meta">
              <div className="project-stack">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <span>{project.year}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

type ThumbType =
  | 'hero' | 'metric' | 'console'
  | 'hero-atlas' | 'map' | 'stat-atlas'
  | 'hero-cipher' | 'mark' | 'code'
  | 'hero-meridian' | 'shop' | 'stat-meridian'

function ThumbVariant({ type, name }: { type: ThumbType; name: string }) {
  if (type === 'hero') return (
    <div className="thumb">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>{name}</b>
      </div>
      <div className="thumb-body">
        <div className="thumb-headline">
          Ship faster,{' '}
          <span style={{ color: 'var(--accent)' }}>see it live.</span>
        </div>
        <div className="thumb-footer">Real-time event stream · 99.98% uptime</div>
      </div>
    </div>
  )

  if (type === 'metric') return (
    <div className="thumb thumb-accent">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>metrics</b>
      </div>
      <div className="thumb-body" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '48px', letterSpacing: '-.04em', lineHeight: 1 }}>
          4.2<span style={{ fontSize: '22px', color: 'rgba(246,245,241,.55)' }}>k</span>
        </div>
        <div className="thumb-footer">events / second</div>
      </div>
      <svg viewBox="0 0 300 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
        <polyline fill="none" stroke="#5b8cff" strokeWidth="1.6"
          points="0,48 30,40 60,44 90,32 120,36 150,22 180,28 210,18 240,22 270,10 300,16" />
      </svg>
    </div>
  )

  if (type === 'console') return (
    <div className="thumb thumb-glow">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>console</b>
      </div>
      <div className="thumb-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', lineHeight: 1.7 }}>
        <div>
          <div style={{ color: 'rgba(246,245,241,.55)' }}>$ flux deploy --prod</div>
          <div style={{ color: 'var(--accent)' }}>→ building...</div>
          <div style={{ color: '#a3e635' }}>✓ deployed to edge</div>
          <div style={{ color: 'rgba(246,245,241,.55)' }}>142ms p95</div>
        </div>
        <div className="thumb-footer">Live in 18 seconds</div>
      </div>
    </div>
  )

  if (type === 'hero-atlas') return (
    <div className="thumb">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>atlas</b>
      </div>
      <div className="thumb-body">
        <div className="thumb-headline">
          Every vehicle.{' '}
          <span style={{ color: 'var(--accent)' }}>One screen.</span>
        </div>
        <div className="thumb-footer">24 active · live GPS</div>
      </div>
    </div>
  )

  if (type === 'map') return (
    <div className="thumb" style={{ display: 'grid', placeItems: 'center' }}>
      <div className="thumb-grid-lines" />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
        {[
          { id: 'TR-024', info: '→ 2.4km', active: true },
          { id: 'TR-118', info: 'idle', active: false },
          { id: 'TR-301', info: '→ dock 3', active: false },
        ].map(v => (
          <div key={v.id} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
            background: v.active ? 'var(--accent)' : 'rgba(255,255,255,.08)',
            borderRadius: '999px', fontSize: '11px',
            color: v.active ? '#fff' : 'rgba(246,245,241,.7)',
          }}>
            <span>{v.id}</span><span>{v.info}</span>
          </div>
        ))}
      </div>
    </div>
  )

  if (type === 'stat-atlas') return (
    <div className="thumb thumb-accent" style={{ display: 'grid', placeItems: 'center' }}>
      <div style={{ textAlign: 'center', padding: '12px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '56px', letterSpacing: '-.04em', lineHeight: 1, color: '#f6f5f1' }}>24</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(246,245,241,.55)', letterSpacing: '.08em', marginTop: '4px' }}>ACTIVE VEHICLES</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '.04em', marginTop: '18px' }}>● Online</div>
      </div>
    </div>
  )

  if (type === 'hero-cipher') return (
    <div className="thumb">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>cipher</b>
      </div>
      <div className="thumb-body">
        <div className="thumb-headline">
          Identity{' '}
          <span style={{ color: 'var(--accent)' }}>at the edge.</span>
        </div>
        <div className="thumb-footer">SSO · RBAC · audit logs</div>
      </div>
    </div>
  )

  if (type === 'mark') return (
    <div className="thumb thumb-glow" style={{ display: 'grid', placeItems: 'center', padding: '14px' }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '100px', lineHeight: 1,
        color: 'var(--accent)', fontWeight: 400, letterSpacing: '-.05em',
      }}>
        {'{ }'}
      </div>
    </div>
  )

  if (type === 'code') return (
    <div className="thumb" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>token.go</b>
      </div>
      <div className="thumb-body" style={{ lineHeight: 1.6 }}>
        <div>
          <div style={{ color: 'rgba(246,245,241,.55)' }}>// verify access</div>
          <div><span style={{ color: '#c084fc' }}>func</span> <span style={{ color: '#5b8cff' }}>Verify</span>(t *Token)</div>
          <div>&nbsp;&nbsp;<span style={{ color: '#c084fc' }}>if</span> t.<span style={{ color: '#5b8cff' }}>Expired</span>() {'{'}</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#c084fc' }}>return</span> err</div>
          <div>&nbsp;&nbsp;{'}'}</div>
        </div>
        <div className="thumb-footer">Built in Go · sub-ms verify</div>
      </div>
    </div>
  )

  if (type === 'hero-meridian') return (
    <div className="thumb">
      <div className="thumb-header">
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>meridian</b>
      </div>
      <div className="thumb-body">
        <div className="thumb-headline">
          Commerce,{' '}
          <span style={{ color: 'var(--accent)' }}>headless.</span>
        </div>
        <div className="thumb-footer">Next.js · Stripe · Sanity</div>
      </div>
    </div>
  )

  if (type === 'shop') return (
    <div className="thumb thumb-accent" style={{ padding: '18px' }}>
      <div className="thumb-header" style={{ padding: 0, marginBottom: '14px' }}>
        <span style={{ color: 'var(--accent)' }}>{'{ }'}</span>
        <b>shop</b>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {[
          { bg: 'rgba(255,255,255,.06)', color: 'rgba(246,245,241,.4)', label: 'PRODUCT' },
          { bg: 'rgba(91,140,255,.18)', color: 'var(--accent)', label: '$129' },
          { bg: 'rgba(255,255,255,.06)', color: 'rgba(246,245,241,.4)', label: 'PRODUCT' },
          { bg: 'rgba(255,255,255,.06)', color: 'rgba(246,245,241,.4)', label: 'PRODUCT' },
        ].map((tile, i) => (
          <div key={i} style={{
            aspectRatio: '1', background: tile.bg, borderRadius: '4px',
            display: 'grid', placeItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '9px', color: tile.color,
          }}>
            {tile.label}
          </div>
        ))}
      </div>
    </div>
  )

  // stat-meridian
  return (
    <div className="thumb thumb-glow" style={{ display: 'grid', placeItems: 'center', textAlign: 'center', padding: '18px' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', letterSpacing: '-.03em', lineHeight: 1, color: '#f6f5f1' }}>+212%</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(246,245,241,.55)', letterSpacing: '.08em', marginTop: '6px' }}>CONVERSION LIFT</div>
      </div>
    </div>
  )
}
