'use client'

import { useEffect, useRef } from 'react'

// Pure-DOM cursor: mix-blend-mode difference, always visible on any bg
export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Check for fine pointer (no cursor on touch)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let mx = -100, my = -100
    let rx = -100, ry = -100

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`

      // Ring lerps at 0.18
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    // Hover state for interactive elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[data-cursor="hover"]') !== null

      if (isInteractive) {
        ring.classList.add('hovering')
      } else {
        ring.classList.remove('hovering')
      }
    }

    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
    </>
  )
}
