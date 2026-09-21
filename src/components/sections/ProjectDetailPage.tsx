'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'
import { type Project, type ProjectMedia, projects } from '@/src/lib/data'

const EASE = { duration: 0.7, ease: 'easeOut' as const }

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: EASE,
}

function TitleGroup({ title }: { title: string }) {
  return (
    <span className="proj-title-group">
      <span>{title}</span>
      <span className="proj-title-sep">✳</span>
    </span>
  )
}

/* ── Spec table row: two labelled cells with a hairline above ───── */
function SpecRow({
  cells,
}: {
  cells: { label: string; value: React.ReactNode }[]
}) {
  return (
    <div className="proj-spec-row">
      <div className="proj-spec-grid">
        {cells.map((cell) => (
          <span className="proj-spec-label" key={cell.label}>
            {cell.label}
          </span>
        ))}
      </div>
      <div className="proj-spec-rule" />
      <div className="proj-spec-grid">
        {cells.map((cell) => (
          <div className="proj-spec-value" key={cell.label}>
            {cell.value}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── One media block ────────────────────────────────────────────── */
function MediaBlock({ item, index }: { item: ProjectMedia; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  if (item.kind === 'pair') {
    return (
      <m.figure className="proj-media proj-media-pair" {...REVEAL}>
        {item.srcs.map((src, i) => (
          <div className="proj-media-frame" key={src + i}>
            <Image
              src={src}
              alt={item.alts[i]}
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        {item.caption && (
          <figcaption className="proj-media-caption">
            <span className="proj-media-num">{num}</span>
            {item.caption}
          </figcaption>
        )}
      </m.figure>
    )
  }

  if (item.kind === 'mobile') {
    return (
      <m.figure className="proj-media proj-media-mobile" {...REVEAL}>
        <div className="proj-mobile-stage">
          {item.srcs.map((src, i) => (
            <div className="proj-phone" key={src + i}>
              <Image
                src={src}
                alt={`${item.alt} — screen ${i + 1}`}
                fill
                sizes="(max-width: 900px) 40vw, 22vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        {item.caption && (
          <figcaption className="proj-media-caption">
            <span className="proj-media-num">{num}</span>
            {item.caption}
          </figcaption>
        )}
      </m.figure>
    )
  }

  if (item.kind === 'video') {
    return (
      <m.figure className="proj-media" {...REVEAL}>
        <div className="proj-media-frame proj-media-frame--video">
          {item.src ? (
            <video
              className="proj-video"
              src={item.src}
              poster={item.poster}
              controls
              playsInline
              preload="metadata"
              aria-label={item.alt}
            />
          ) : (
            <>
              <Image
                src={item.poster}
                alt={item.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="proj-video-veil" />
              <div className="proj-video-pending">
                <span className="proj-video-play" aria-hidden="true">
                  ▶
                </span>
                <span className="proj-video-pending-label">Walkthrough coming soon</span>
              </div>
            </>
          )}
        </div>
        {item.caption && (
          <figcaption className="proj-media-caption">
            <span className="proj-media-num">{num}</span>
            {item.caption}
          </figcaption>
        )}
      </m.figure>
    )
  }

  return (
    <m.figure className="proj-media" {...REVEAL}>
      <div className={`proj-media-frame${item.tall ? ' proj-media-frame--tall' : ''}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {item.caption && (
        <figcaption className="proj-media-caption">
          <span className="proj-media-num">{num}</span>
          {item.caption}
        </figcaption>
      )}
    </m.figure>
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

      {/* ── Meta row: PROJECT [ XX - N ]  ...  status ──────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...EASE, delay: 0.14 }}
        className="proj-meta-row"
      >
        <span className="proj-meta-label">{indexLabel}</span>
        <span className="proj-meta-year">{project.status ?? project.category}</span>
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

      {/* ── Spec table ───────────────────────────────────── */}
      <m.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...EASE, delay: 0.3 }}
        className="proj-spec-table"
        aria-label="Project details"
      >
        <SpecRow
          cells={[
            {
              label: 'Services',
              value: project.services.map((s) => <span key={s}>{s}</span>),
            },
            { label: 'Year', value: project.year },
          ]}
        />
        <SpecRow
          cells={[
            { label: 'Industry', value: project.industry },
            { label: 'Result', value: project.result },
          ]}
        />
      </m.section>

      {/* ── Overview + live link ─────────────────────────── */}
      <m.section className="proj-overview" {...REVEAL}>
        <div className="proj-overview-text">
          {project.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {project.live && (
          <div className="proj-overview-aside">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-live-link"
              data-cursor="hover"
            >
              <span>Live website</span>
              <span className="proj-live-arrow" aria-hidden="true">⟶</span>
            </a>
          </div>
        )}
      </m.section>

      {/* ── Media ────────────────────────────────────────── */}
      <div className="proj-media-stack">
        {project.media.map((item, i) => (
          <MediaBlock key={i} item={item} index={i} />
        ))}
      </div>

    </m.div>
  )
}
