'use client'

import { useEffect, useRef } from 'react'

const ACTIONS = [
  { label: 'Email', href: 'mailto:jacquespieterse2000@gmail.com', ghost: false },
  { label: 'GitHub', href: 'https://github.com/JacquesPieterse1', ghost: true },
  { label: 'LinkedIn', href: '#', ghost: true },
  { label: 'X / Twitter', href: '#', ghost: true },
]

export function ContactSection() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-inner">
        {/* Big SOCIAL header */}
        <div className="contact-big">
          <h2>
            <span>SOCIAL</span>{' '}
            <span style={{ color: 'var(--fg-3)' }}>SOCIAL</span>
          </h2>
        </div>

        {/* Lead + portrait */}
        <div className="contact-grid">
          <p className="contact-lead reveal">
            <small>And that&apos;s all, folks</small>
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>
              If you want to build something together
            </span>{' '}
            — or just say hi — drop me a line. I read everything.
          </p>
          <div className="portrait reveal" style={{ ['--rev-delay' as string]: '80ms' }}>
            <div className="portrait-stripes" />
          </div>
        </div>

        {/* Magnetic action buttons */}
        <div className="contact-actions">
          {ACTIONS.map((action) => (
            <MagneticButton key={action.label} {...action} />
          ))}
        </div>

        {/* Footer meta */}
        <div className="footer-meta">
          <span>JACQUES PIETERSE © 2026</span>
          <span>Site built by me — with care.</span>
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
      el.style.transform = `translate(${(e.clientX - cx) * 0.35}px, ${(e.clientY - cy) * 0.35}px)`
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
