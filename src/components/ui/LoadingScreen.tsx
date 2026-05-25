'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'

const LETTERS = 'JACQUES PIETERSE'.split('')

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#0a0a0a',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Letter-by-letter stagger */}
          <div style={{ display: 'flex', gap: '0.04em', overflow: 'hidden' }}>
            {LETTERS.map((letter, i) => (
              <m.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: 'clamp(24px, 4vw, 48px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: letter === ' ' ? 'transparent' : '#ededed',
                  whiteSpace: 'pre',
                }}
              >
                {letter === ' ' ? ' ' : letter}
              </m.span>
            ))}
          </div>

          {/* Thin accent line that grows */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: '1px',
              width: '120px',
              backgroundColor: '#A8C5DA',
              transformOrigin: 'left',
            }}
          />

          {/* Small label */}
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#444444',
            }}
          >
            Full Stack Developer
          </m.span>
        </m.div>
      )}
    </AnimatePresence>
  )
}
