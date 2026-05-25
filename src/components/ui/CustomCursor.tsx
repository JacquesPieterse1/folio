'use client'

import { useEffect, useRef } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const ringSpringConfig = { damping: 40, stiffness: 200, mass: 0.8 }

  const ringX = useSpring(dotX, ringSpringConfig)
  const ringY = useSpring(dotY, ringSpringConfig)

  const ringRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink = target.closest('[data-cursor="link"]') !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null

      if (isLink && !isHoveringRef.current) {
        isHoveringRef.current = true
        if (ringRef.current) {
          ringRef.current.style.width = '48px'
          ringRef.current.style.height = '48px'
          ringRef.current.style.opacity = '0.8'
          ringRef.current.style.marginLeft = '-24px'
          ringRef.current.style.marginTop = '-24px'
        }
      } else if (!isLink && isHoveringRef.current) {
        isHoveringRef.current = false
        if (ringRef.current) {
          ringRef.current.style.width = '28px'
          ringRef.current.style.height = '28px'
          ringRef.current.style.opacity = '0.4'
          ringRef.current.style.marginLeft = '-14px'
          ringRef.current.style.marginTop = '-14px'
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [dotX, dotY])

  return (
    <>
      {/* Dot */}
      <m.div
        style={{
          x: dotX,
          y: dotY,
          position: 'fixed',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          marginLeft: '-3px',
          marginTop: '-3px',
          pointerEvents: 'none',
          zIndex: 10000,
          top: 0,
          left: 0,
        }}
      />
      {/* Ring */}
      <m.div
        ref={ringRef}
        style={{
          x: ringX,
          y: ringY,
          position: 'fixed',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1px solid var(--color-accent)',
          opacity: 0.4,
          marginLeft: '-14px',
          marginTop: '-14px',
          pointerEvents: 'none',
          zIndex: 9999,
          top: 0,
          left: 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease, margin 0.2s ease',
        }}
      />
    </>
  )
}
