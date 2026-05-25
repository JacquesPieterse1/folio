'use client'

import { m } from 'framer-motion'
import { type StackItem } from '@/src/lib/data'

export function StackBadge({ item, index }: { item: StackItem; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'var(--color-surface)',
        cursor: 'default',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--color-accent)'
        el.style.boxShadow = 'var(--shadow-accent)'
        el.style.backgroundColor = 'var(--color-elevated)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--color-border)'
        el.style.boxShadow = 'none'
        el.style.backgroundColor = 'var(--color-surface)'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: '14px',
          lineHeight: 1,
          width: '24px',
          textAlign: 'center',
          color: 'var(--color-accent)',
        }}
      >
        {item.emoji}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: '12px',
          letterSpacing: '0.06em',
          color: 'var(--color-text)',
          fontWeight: 700,
        }}
      >
        {item.name}
      </span>
    </m.div>
  )
}
