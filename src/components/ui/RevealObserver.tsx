'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    const observe = () => {
      document.querySelectorAll<Element>('.reveal:not(.in)').forEach(el => {
        const rect = el.getBoundingClientRect()
        // Already scrolled past — reveal immediately
        if (rect.bottom < 0) {
          el.classList.add('in')
        } else {
          observer.observe(el)
        }
      })
    }

    observe()
    const mutation = new MutationObserver(observe)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => { observer.disconnect(); mutation.disconnect() }
  }, [pathname])

  return null
}
