'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { type Project, projects } from '@/src/lib/data'

const EASE = { duration: 0.7, ease: 'easeOut' as const }

function TitleGroup({ title }: { title: string }) {
  return (
    <span className="proj-title-group">
      <span>{title}</span>
      <span className="proj-title-sep">✳</span>
    </span>
  )
}

export function ProjectDetailPage({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id)
  const total = projects.length
  const indexLabel = `PROJECT [ ${String(idx + 1).padStart(2, '0')} - ${total} ]`

  return (
    <m.div
      className="proj-detail-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >

      {/* ── Top bar: ← BACK  ...  * ────────────────────────── */}
      <div className="proj-topbar">
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...EASE, delay: 0 }}
        >
          <Link href="/" className="proj-back-pill" data-cursor="hover">
            <span className="proj-back-arrow">←</span>
            <span>BACK</span>
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...EASE, delay: 0.06 }}
        >
          <div className="proj-star-btn" aria-hidden="true">✳</div>
        </m.div>
      </div>

      {/* ── Meta row: PROJECT [ XX - N ]  ...  year ──────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...EASE, delay: 0.14 }}
        className="proj-meta-row"
      >
        <span className="proj-meta-label">{indexLabel}</span>
        <span className="proj-meta-year">{project.year}</span>
      </m.div>

      {/* ── Title card ───────────────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...EASE, delay: 0.2 }}
        className="proj-title-card"
      >
        <span className="proj-title-asterisk">✳</span>
        <h1 className="proj-title-marquee" aria-label={project.title.toUpperCase()}>
          <span className="proj-title-track" aria-hidden="true">
            <TitleGroup title={project.title.toUpperCase()} />
            <TitleGroup title={project.title.toUpperCase()} />
          </span>
        </h1>
      </m.div>

      {/* ── Hero image ───────────────────────────────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...EASE, delay: 0.32 }}
        className="proj-hero-img"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        {/* Overlaid title in the image */}
        <div className="proj-hero-img-title" aria-hidden="true">
          <span>{project.title.toUpperCase()}</span>
        </div>
      </m.div>

      {/* ── Description ──────────────────────────────────── */}
      <m.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={EASE}
        className="proj-detail-desc-section"
      >
        <div className="proj-detail-desc-inner">
          <div className="proj-detail-desc-label">
            <span>About</span>
          </div>
          <p className="proj-detail-desc-text">{project.longDescription}</p>
        </div>
      </m.section>

      {/* ── Content sections ─────────────────────────────── */}
      {project.sections.map((section, i) => {
        const isEven = i % 2 === 0
        return (
          <m.section
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={EASE}
            className="proj-detail-content-section"
          >
            <div className={`proj-detail-split${isEven ? '' : ' proj-detail-split--reverse'}`}>

              <div className="proj-detail-split-img">
                <Image
                  src={section.image}
                  alt={section.heading}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="proj-detail-img-overlay" />
                <span className="proj-detail-section-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="proj-detail-split-text">
                <div className="proj-detail-split-divider" />
                <h2 className="proj-detail-section-heading">{section.heading}</h2>
                <p className="proj-detail-section-body">{section.body}</p>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-site-link"
                    data-cursor="hover"
                  >
                    <span>View Site</span>
                    <span className="proj-site-link-arrow">↗</span>
                  </a>
                )}
              </div>

            </div>
          </m.section>
        )
      })}

    </m.div>
  )
}
