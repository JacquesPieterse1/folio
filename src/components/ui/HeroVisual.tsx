'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatePresence, m } from 'framer-motion'

const PROJECTS = [
  { name: 'Ecommerce', image: '/images/Group 21.png', category: 'Digital Commerce' },
  { name: 'Web Applications', image: '/images/Single.png', category: 'SaaS & Tooling' },
  { name: 'Mobile Apps', image: '/images/web-portfolio-mockup_10.png', category: 'Mobile Development' },
]

export function HeroVisual() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(i => (i + 1) % PROJECTS.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="hero-visual reveal"
      style={{ ['--rev-delay' as string]: '120ms' }}
    >
      {/* Terminal + JP* */}
      <div className="hero-cell" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 2' }}>
        <span>
          $ ./run --portfolio
          <span className="hero-blink">_</span>
        </span>
        <span className="hero-cell-big">JP*</span>
      </div>

      {/* Stack */}
      <div className="hero-cell dark" style={{ gridColumn: '3 / span 2', gridRow: '1 / span 2' }}>
        <span>// stack</span>
        <span className="hero-cell-big">TS · GO</span>
      </div>

      {/* Project image carousel */}
      <a
        href="#projects"
        className="hero-cell hero-img-cell"
        style={{ gridColumn: '5 / span 2', gridRow: '1 / span 3', padding: 0 }}
        data-cursor="hover"
        aria-label="View projects"
      >
        <AnimatePresence>
          {PROJECTS.map((proj, i) =>
            i === active ? (
              <m.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  sizes="(max-width: 900px) 40vw, 15vw"
                  style={{ objectFit: 'cover' }}
                />
              </m.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Category label */}
        <div className="hero-img-label">
          {PROJECTS[active].category}
        </div>

        {/* Progress dots */}
        <div className="hero-img-dots">
          {PROJECTS.map((_, i) => (
            <span key={i} className={`hero-img-dot${i === active ? ' active' : ''}`} />
          ))}
        </div>
      </a>

      {/* 02+ YEARS SHIPPING */}
      <div className="hero-cell accent-cell" style={{ gridColumn: '1 / span 3', gridRow: '3 / span 2' }}>
        <span>02+ YEARS</span>
        <span className="hero-cell-big">SHIPPING</span>
      </div>

      {/* Location */}
      <div className="hero-cell" style={{ gridColumn: '4 / span 2', gridRow: '3 / span 1' }}>
        <span>CPT · ZA</span>
      </div>

      {/* Project count */}
      <div className="hero-cell dark" style={{ gridColumn: '4 / span 1', gridRow: '4 / span 1' }}>
        <span>// projects</span>
        <span className="hero-cell-big" style={{ fontSize: 'clamp(18px, 2.2vw, 32px)' }}>03</span>
      </div>

      {/* Scroll cue */}
      <div className="hero-cell" style={{ gridColumn: '5 / span 2', gridRow: '4 / span 1' }}>
        <span>↘ scroll</span>
      </div>
    </div>
  )
}
