'use client'

import { m } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'
import { type Project } from '@/src/lib/data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <m.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
      className="project-card"
    >
      {/* Image side */}
      <m.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          order: isEven ? 0 : 1,
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          aspectRatio: '4/3',
          backgroundColor: 'var(--color-surface)',
        }}
        className="project-image-wrap"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        {/* Color treatment layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-accent)',
            opacity: 0.04,
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
        {/* Year badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'rgba(237, 237, 237, 0.7)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            padding: '4px 10px',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {project.year}
        </div>
      </m.div>

      {/* Content side */}
      <div
        style={{
          order: isEven ? 1 : 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Category */}
        <div
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-dim)',
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(28px, 3vw, 44px)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: 'var(--color-text)',
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '12px',
            lineHeight: 1.8,
            color: 'var(--color-muted)',
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent-20)',
                borderRadius: '100px',
                padding: '3px 10px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              aria-label={`View ${project.title} on GitHub`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)' }}
            >
              <GitBranch size={14} />
              GitHub
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              aria-label={`View ${project.title} live`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-muted)' }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
          .project-image-wrap {
            order: 0 !important;
          }
        }
      `}</style>
    </m.article>
  )
}
