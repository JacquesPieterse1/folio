'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

const commands = [
  { id: 'hero', label: 'Go to top', section: '#hero' },
  { id: 'about', label: 'About', section: '#about' },
  { id: 'projects', label: 'View work', section: '#projects' },
  { id: 'services', label: 'Services', section: '#services' },
  { id: 'stack', label: 'Tech stack', section: '#stack' },
  { id: 'contact', label: 'Contact me', section: '#contact' },
  { id: 'github', label: 'Open GitHub', section: 'https://github.com/JacquesPieterse1' },
  { id: 'email', label: 'Send email', section: 'mailto:jacquespieterse2000@gmail.com' },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  const execute = (cmd: typeof commands[0]) => {
    setOpen(false)
    setQuery('')
    if (cmd.section.startsWith('#')) {
      document.querySelector(cmd.section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(cmd.section, '_blank', 'noopener noreferrer')
    }
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '20vh',
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'var(--color-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-float)',
          margin: '0 24px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <Search size={16} style={{ color: 'var(--color-muted)', flexShrink: 0 }} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '13px',
              color: 'var(--color-text)',
              letterSpacing: '0.04em',
            }}
          />
          <kbd
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '9px',
              letterSpacing: '0.1em',
              color: 'var(--color-dim)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '2px 6px',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: '24px 20px',
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '12px',
                color: 'var(--color-dim)',
                textAlign: 'center',
              }}
            >
              No results
            </div>
          ) : (
            filtered.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => execute(cmd)}
                data-cursor="link"
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '12px',
                  color: 'var(--color-muted)',
                  letterSpacing: '0.04em',
                  transition: 'background 0.15s ease, color 0.15s ease',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-muted)'
                }}
              >
                <span style={{ color: 'var(--color-accent)', fontSize: '10px' }}>→</span>
                {cmd.label}
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '10px 20px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            gap: '16px',
          }}
        >
          {[
            ['↵', 'select'],
            ['↑↓', 'navigate'],
            ['esc', 'close'],
          ].map(([key, action]) => (
            <div
              key={action}
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
              }}
            >
              <kbd
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '9px',
                  color: 'var(--color-dim)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '3px',
                  padding: '2px 5px',
                }}
              >
                {key}
              </kbd>
              <span
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  color: 'var(--color-dim)',
                }}
              >
                {action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
