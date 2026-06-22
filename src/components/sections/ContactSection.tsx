'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const ACTIONS = [
  { label: 'Email',       href: 'mailto:jacquespieterse2000@gmail.com', ghost: false },
  { label: 'GitHub',      href: 'https://github.com/JacquesPieterse1',  ghost: true  },
  { label: 'LinkedIn',    href: '#',                                     ghost: true  },
  { label: 'X / Twitter', href: '#',                                     ghost: true  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const TARGET = { r: 36, g: 36, b: 36 }
    const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t)
    const getBase = () =>
      document.documentElement.dataset.theme === 'dark'
        ? { r: 10, g: 10, b: 10 }
        : { r: 246, g: 245, b: 241 }

    let rafId = 0

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight
      const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH * 0.7)))

      if (progress <= 0) {
        document.body.style.removeProperty('background-color')
        document.body.style.removeProperty('will-change')
        document.body.style.removeProperty('transition')
      } else {
        const base = getBase()
        document.body.style.transition = 'background-color 0s'
        document.body.style.willChange = 'background-color'
        document.body.style.backgroundColor = `rgb(${lerp(base.r, TARGET.r, progress)}, ${lerp(base.g, TARGET.g, progress)}, ${lerp(base.b, TARGET.b, progress)})`
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      document.body.style.removeProperty('background-color')
      document.body.style.removeProperty('will-change')
      document.body.style.removeProperty('transition')
    }
  }, [])

  return (
    <section ref={sectionRef} className="contact-wrap" id="contact">
      <div className="contact-inner">

        {/* ── 1. SOCIAL heading (desktop: left col row 1; mobile: top) ── */}
        <div className="contact-heading">
          <h2 className="social-title-static">SOCIAL</h2>
          <div className="social-title-marquee" aria-hidden="true">
            <span className="section-marquee-track section-marquee-track--slow">
              <SocialMarqueeGroup />
              <SocialMarqueeGroup />
            </span>
          </div>
        </div>

        {/* ── 2. Portrait column (desktop: right col all rows; mobile: below heading) ── */}
        <div className="contact-portrait-col">
          <div className="contact-portrait">
            <Image
              src="/images/IMG_1176.jpg"
              alt="Jacques Pieterse"
              fill
              className="contact-portrait-img"
              sizes="(max-width: 900px) 100vw, 290px"
            />
          </div>
          {/* Footer tag shown here on desktop */}
          <p className="contact-footer-tag">
            {new Date().getFullYear()} Site built by me :)
          </p>
        </div>

        {/* ── 3. Body: copy + buttons (desktop: left col row 2; mobile: below portrait) ── */}
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

          {/* Footer tag shown here on mobile only */}
          <p className="contact-footer-tag-mob">
            {new Date().getFullYear()} Site built by me :)
          </p>
        </div>

      </div>
    </section>
  )
}

function SocialMarqueeGroup() {
  return (
    <span className="section-marquee-group">
      <span>SOCIAL</span>
      <span className="section-marquee-sep">*</span>
    </span>
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
