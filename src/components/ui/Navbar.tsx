'use client'

import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          padding: '0 24px',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: JP Monogram */}
          <a
            href="#hero"
            data-cursor="link"
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.04em',
              color: 'var(--color-text)',
              textDecoration: 'none',
            }}
          >
            JP
          </a>

          {/* Center: Nav pills — hidden on mobile */}
          <div
            style={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
            }}
            className="nav-pills"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="link"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid transparent',
                  transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-muted)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Status + Hamburger */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Available status pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid var(--color-border)',
                borderRadius: '100px',
                padding: '4px 12px',
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '9px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 6px #4ade80',
                }}
              />
              Available
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-cursor="link"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '100px',
                padding: '8px',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--color-base)',
              zIndex: 90,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link, i) => (
              <m.a
                key={link.href}
                href={link.href}
                data-cursor="link"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 8vw, 64px)',
                  letterSpacing: '-0.04em',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
              >
                {link.label}
              </m.a>
            ))}
          </m.div>
        )}
      </AnimatePresence>

      {/* Inline CSS to hide nav pills on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .nav-pills { display: none !important; }
        }
      `}</style>
    </>
  )
}
