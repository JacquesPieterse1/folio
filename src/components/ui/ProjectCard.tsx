'use client'

import Image from 'next/image'
import { m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { type Project } from '@/src/lib/data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0
  // Even: content LEFT, image RIGHT
  // Odd:  image LEFT, content RIGHT

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        minHeight: '480px',
        border: '1px solid var(--line)',
        background: 'var(--card)',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      {/* ── Content side (always 36% wide) ─────────────────── */}
      <div
        className="proj-alt-info"
        style={{
          width: '36%',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '32px',
          background: 'var(--bg-2)',
          borderRight: isEven ? '1px solid var(--line)' : 'none',
          borderLeft: isEven ? 'none' : '1px solid var(--line)',
        }}
      >
        {/* ── Top: label + title + description ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Category tag */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono), ui-monospace, monospace',
              fontSize: '11px',
              letterSpacing: '0.04em',
              color: 'var(--fg)',
              alignSelf: 'flex-start',
            }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{'{ }'}</span>
            {project.category}
          </span>

          {/* Project title */}
          <h3
            style={{
              fontFamily: 'var(--font-display), ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.2vw, 36px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
              color: 'var(--fg)',
              margin: 0,
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-display), ui-sans-serif, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--fg-2)',
              margin: 0,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* ── Bottom: stack + links ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Stack — slash-separated */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono), ui-monospace, monospace',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--fg-2)',
            }}
          >
            {project.stack.map((tech, i) => (
              <span key={tech}>
                {i > 0 && (
                  <span style={{ color: 'var(--line)', padding: '0 8px' }}>/</span>
                )}
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
                aria-label={`${project.title} on GitHub`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono), ui-monospace, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-2)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
              >
                GitHub <ArrowUpRight size={11} />
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono), ui-monospace, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-2)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
              >
                Live <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Image side (fills remaining width) ─────────────── */}
      <div
        className="proj-alt-img"
        style={{
          flex: 1,
          position: 'relative',
          background: '#0a0a0a',
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 900px) 100vw, 65vw"
          style={{ objectFit: 'cover' }}
        />

        {/* Year badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            fontFamily: 'var(--font-mono), ui-monospace, monospace',
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: 'rgba(246,245,241,0.7)',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            padding: '4px 10px',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {project.year}
        </div>

        {/* Index number */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '20px',
            fontFamily: 'var(--font-mono), ui-monospace, monospace',
            fontSize: '11px',
            letterSpacing: '0.14em',
            color: 'rgba(246,245,241,0.3)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </m.article>
  )
}
