'use client'

import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/src/components/ui/ThemeToggle'

export function Nav() {
  const pathname = usePathname()
  // Project detail pages have their own header
  if (pathname !== '/') return null

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 8
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.history.replaceState(null, '', '/')
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px var(--gutter)',
        fontFamily: 'var(--font-mono), ui-monospace, "SF Mono", Menlo, Consolas, monospace',
        fontSize: '12px',
        letterSpacing: '.02em',
        pointerEvents: 'none',
      }}
      aria-label="Main navigation"
    >
      {/* Brand mark */}
      <a
        href="#home"
        onClick={(e) => handleNav(e, 'home')}
        data-cursor="hover"
        className="nav-brand"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          border: '1px solid var(--line)',
          borderRadius: '999px',
          background: 'color-mix(in oklab, var(--bg) 80%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          fontWeight: 500,
          textTransform: 'uppercase',
          color: 'var(--fg)',
          pointerEvents: 'auto',
          whiteSpace: 'nowrap',
          transition: 'background .2s ease, border-color .2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--fg)'
          e.currentTarget.style.color = 'var(--bg)'
          e.currentTarget.style.borderColor = 'var(--fg)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'color-mix(in oklab, var(--bg) 80%, transparent)'
          e.currentTarget.style.color = 'var(--fg)'
          e.currentTarget.style.borderColor = 'var(--line)'
        }}
      >
        JACQUES{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{'{ }'}</span>
        {' '}DEV
      </a>

      {/* Nav links + theme toggle */}
      <div style={{ display: 'flex', gap: '6px', pointerEvents: 'auto' }}>
        <NavPill href="#projects" label="Work" arrow="↓" />
        <NavPill href="#contact" label="About" arrow="→" />
        <ThemeToggle />
      </div>
    </nav>
  )
}

function NavPill({ href, label, arrow }: { href: string; label: string; arrow: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 8
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.history.replaceState(null, '', '/')
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      data-cursor="hover"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        border: '1px solid var(--line)',
        borderRadius: '999px',
        background: 'color-mix(in oklab, var(--bg) 80%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        textTransform: 'uppercase',
        color: 'var(--fg)',
        transition: 'background .2s ease, color .2s ease, border-color .2s ease',
        fontFamily: 'var(--font-mono), ui-monospace, "SF Mono", Menlo, Consolas, monospace',
        fontSize: '12px',
        letterSpacing: '.02em',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--fg)'
        e.currentTarget.style.color = 'var(--bg)'
        e.currentTarget.style.borderColor = 'var(--fg)'
        const arrowEl = e.currentTarget.querySelector<HTMLSpanElement>('.nav-arrow')
        if (arrowEl) arrowEl.style.transform = 'translateX(2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'color-mix(in oklab, var(--bg) 80%, transparent)'
        e.currentTarget.style.color = 'var(--fg)'
        e.currentTarget.style.borderColor = 'var(--line)'
        const arrowEl = e.currentTarget.querySelector<HTMLSpanElement>('.nav-arrow')
        if (arrowEl) arrowEl.style.transform = 'translateX(0)'
      }}
    >
      {label}{' '}
      <span className="nav-arrow" style={{ display: 'inline-block', transition: 'transform .2s ease' }}>
        {arrow}
      </span>
    </a>
  )
}
