'use client'

import { useEffect, useRef } from 'react'

// The code snippet to type — with HTML for syntax highlighting
const SNIPPET_LINES = [
  `<span class="terminal-cm">// app/api/projects/route.ts</span>`,
  `<span class="terminal-kw">import</span> { <span class="terminal-fn">NextResponse</span> } <span class="terminal-kw">from</span> <span class="terminal-str">'next/server'</span>`,
  `<span class="terminal-kw">import</span> { <span class="terminal-fn">projects</span> } <span class="terminal-kw">from</span> <span class="terminal-str">'@/lib/projects'</span>`,
  ``,
  `<span class="terminal-kw">export async function</span> <span class="terminal-fn">GET</span>() {`,
  `  <span class="terminal-kw">const</span> data = projects.<span class="terminal-fn">map</span>(p => ({`,
  `    id: p.slug,`,
  `    title: p.title,`,
  `    year: p.year,`,
  `  }))`,
  ``,
  `  <span class="terminal-kw">return</span> <span class="terminal-fn">NextResponse</span>.<span class="terminal-fn">json</span>({ data })`,
  `}`,
]

export function LiveCodeDemo() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const body = bodyRef.current
    if (!body) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()
          typeLines(body)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(body)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="demo-wrap" id="demo">
      <div className="demo-inner">
        {/* Rail */}
        <aside className="jp-rail" aria-hidden="true">
          <span className="jp-rail-label">[04] / Demo</span>
          <span className="jp-rail-label">— Live</span>
        </aside>

        <div className="demo-body">
          {/* Left: lead copy */}
          <div className="demo-lead reveal">
            <span>Live code</span>
            <h4>This snippet is being typed in real time.</h4>
            <p>A small Next.js route handler — the kind of thing I write every day. Refresh to watch it type again.</p>
          </div>

          {/* Right: terminal */}
          <div className="terminal reveal" style={{ ['--rev-delay' as string]: '100ms' }}>
            <div className="terminal-bar">
              <span className="terminal-lights">
                <i /><i /><i />
              </span>
              <span className="terminal-path">~/portfolio/app/api/projects/route.ts</span>
              <span className="terminal-badge">TS</span>
            </div>
            <div className="terminal-body" ref={bodyRef} />
          </div>
        </div>
      </div>
    </section>
  )
}

async function typeLines(container: HTMLDivElement) {
  for (const line of SNIPPET_LINES) {
    const lineEl = document.createElement('div')
    container.appendChild(lineEl)

    if (line === '') {
      lineEl.innerHTML = '&nbsp;'
      await sleep(30)
      continue
    }

    // Strip HTML tags for character-by-character typing
    const plain = line.replace(/<[^>]+>/g, '')
    const chars = plain.split('')

    // Build HTML progressively — we type plain chars but render with highlighting
    let typed = ''
    for (const ch of chars) {
      typed += ch
      // Map typed text back to highlighted version (approximate by fraction)
      const fraction = typed.length / plain.length
      lineEl.innerHTML = applyHighlight(line, fraction)
      await sleep(Math.random() * 18 + 10)
    }

    // Final render with full highlighting
    lineEl.innerHTML = line
    await sleep(90)
  }

  // Blinking cursor at end
  const cursor = document.createElement('span')
  cursor.className = 'terminal-cursor'
  container.lastElementChild?.appendChild(cursor)
}

function applyHighlight(fullHtml: string, fraction: number): string {
  const plain = fullHtml.replace(/<[^>]+>/g, '')
  const charsToShow = Math.round(plain.length * fraction)
  if (charsToShow >= plain.length) return fullHtml

  // Simple approach: show only the fraction of plain text (no highlighting mid-type)
  return plain.slice(0, charsToShow)
}

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}
