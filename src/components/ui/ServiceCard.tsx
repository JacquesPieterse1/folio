'use client'

import { m } from 'framer-motion'
import * as Icons from 'lucide-react'
import { type Service } from '@/src/lib/data'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  // Dynamically look up the icon by name
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.icon]

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: '32px',
        backgroundColor: 'var(--color-surface)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        cursor: 'default',
        transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(168, 197, 218, 0.3)'
        el.style.backgroundColor = 'var(--color-elevated)'
        el.style.boxShadow = 'var(--shadow-card)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--color-border)'
        el.style.backgroundColor = 'var(--color-surface)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      {IconComponent && (
        <div>
          <IconComponent
            size={24}
            style={{ color: 'var(--color-accent)' }}
            strokeWidth={1.5}
          />
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 800,
          fontSize: '20px',
          letterSpacing: '-0.02em',
          color: 'var(--color-text)',
          margin: 0,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: '12px',
          lineHeight: 1.8,
          color: 'var(--color-muted)',
          margin: 0,
        }}
      >
        {service.description}
      </p>
    </m.div>
  )
}
