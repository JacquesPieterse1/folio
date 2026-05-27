'use client'

import { useEffect, useRef, useState } from 'react'

export function ThemeToggle() {
  // Default to light — matches the design's default
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const resolvedRef = useRef<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('jp.theme') as 'light' | 'dark' | null
    resolvedRef.current = stored ?? 'light'
    document.documentElement.setAttribute('data-theme', resolvedRef.current)
    Promise.resolve().then(() => setTheme(resolvedRef.current))
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    resolvedRef.current = next
    setTheme(next)
    localStorage.setItem('jp.theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button
      suppressHydrationWarning
      onClick={toggle}
      data-cursor="hover"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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
        fontFamily: 'var(--font-mono), ui-monospace, "SF Mono", Menlo, Consolas, monospace',
        fontSize: '12px',
        letterSpacing: '.02em',
        textTransform: 'uppercase',
        color: 'var(--fg)',
        cursor: 'none',
        transition: 'background .2s ease, color .2s ease, border-color .2s ease',
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
      {theme === 'light' ? '◐' : '○'}
    </button>
  )
}
