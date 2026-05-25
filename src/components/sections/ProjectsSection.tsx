import { projects } from '@/src/lib/data'
import { ProjectCard } from '@/src/components/ui/ProjectCard'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--color-base)',
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
        <div style={{ marginBottom: '8px' }}>
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
            03 — Selected Work
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(48px, 7vw, 96px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              color: 'var(--color-text)',
              margin: 0,
              marginLeft: '-4px', // optical alignment - bleeds slightly left
            }}
          >
            FEATURED
            <br />
            <span style={{ color: 'var(--color-accent)' }}>*</span> WORK
          </h2>
        </div>

        {/* Project cards */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
