'use client'

import { useEffect, useRef } from 'react'

const ACTIONS = [
  { label: 'Email',     href: 'mailto:jacquespieterse2000@gmail.com', ghost: false },
  { label: 'GitHub',    href: 'https://github.com/JacquesPieterse1',  ghost: true  },
  { label: 'LinkedIn',  href: '#',                                     ghost: true  },
  { label: 'X / Twitter', href: '#',                                   ghost: true  },
]

export function ContactSection() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-inner">

        {/* ── LEFT column: heading + body + buttons ────────── */}
        <div className="contact-left">
          {/* SOCIAL mega-heading */}
          <div className="contact-heading">
            <h2>SOCIAL</h2>
          </div>

          {/* Body: copy + buttons */}
          <div className="contact-body">
            <p className="contact-copy">
              And that&apos;s all, folks ☞{' '}
              <strong>
                if you wanna work together or just say hi,
              </strong>{' '}
              hit me up
            </p>

            <div className="contact-actions">
              {ACTIONS.map((action) => (
                <MagneticButton key={action.label} {...action} />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT column: portrait + footer tag ──────────── */}
        <div className="contact-right">
          {/* Portrait placeholder */}
          <div className="contact-portrait">
            <div className="contact-portrait-placeholder">
              PORTRAIT
            </div>
          </div>

          {/* Footer tag */}
          <p className="contact-footer-tag">
            {new Date().getFullYear()} Site built by me :)
          </p>
        </div>

      </div>
    </section>
  )
}

function MagneticButton({
  label,
  href,
  ghost,
}: {
  label: string
  href: string
  ghost: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      el.style.transform = `translate(${(e.clientX - cx) * 0.32}px, ${(e.clientY - cy) * 0.32}px)`
    }
    const onLeave = () => { el.style.transform = '' }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`magnetic${ghost ? ' ghost' : ''}`}
      data-cursor="hover"
    >
      {label}{' '}
      <span className="arrow">↗</span>
    </a>
  )
}
