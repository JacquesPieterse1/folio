import { projects } from '@/src/lib/data'
import { ProjectCard } from '@/src/components/ui/ProjectCard'

const stackItems = [
  { label: 'TypeScript', dot: true },
  { label: 'React', dot: false },
  { label: 'Next.js', dot: true },
  { label: 'Node.js', dot: false },
  { label: '.NET', dot: true },
  { label: 'Azure', dot: false },
  { label: 'Docker', dot: true },
  { label: 'Supabase', dot: false },
  { label: 'Swift', dot: true },
  { label: 'MAUI', dot: false },
  { label: 'PostgreSQL', dot: true },
  { label: 'OpenAI', dot: false },
]

function WorkMarqueeGroup() {
  return (
    <span className="section-marquee-group">
      <span>WORK</span>
      <span className="section-marquee-sep">*</span>
      <span style={{ color: 'var(--fg-3)' }}>WORK</span>
      <span className="section-marquee-sep">*</span>
    </span>
  )
}

export function ProjectsSection() {
  return (
    <>
      {/* ── Stack marquee + WORK header ─────────────────────── */}
      <section className="work-section-wrap" id="projects">
        <div className="work-inner">
          {/* Dark tech marquee strip */}
          <div className="stack-marquee" aria-hidden="true">
            <div className="stack-marquee-track">
              {stackItems.map((item, i) => (
                <span
                  key={i}
                  className={`stack-marquee-item${item.dot ? '' : ' muted'}`}
                >
                  {item.label}
                  {item.dot && <span className="dot" />}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="stack-marquee-track" aria-hidden="true">
              {stackItems.map((item, i) => (
                <span
                  key={i}
                  className={`stack-marquee-item${item.dot ? '' : ' muted'}`}
                >
                  {item.label}
                  {item.dot && <span className="dot" />}
                </span>
              ))}
            </div>
          </div>

          {/* Big overflowing WORK heading */}
          <div className="work-header">
            {/* Desktop: static big heading */}
            <h2 className="work-title-static">
              <span>WORK</span>{' '}
              <span style={{ color: 'var(--fg-3)' }}>WORK</span>
            </h2>
            {/* Mobile: scrolling marquee */}
            <div className="work-title-marquee" aria-hidden="true">
              <span className="section-marquee-track">
                <WorkMarqueeGroup />
                <WorkMarqueeGroup />
              </span>
            </div>
            <span className="work-star">*</span>
          </div>
          {/* ── Project cards — alternating image position ───────── */}
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
