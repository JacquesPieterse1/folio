import Image from 'next/image'
import { projects } from '@/src/lib/data'

/* Positional grid classes — index-matched to the first three projects */
const CELL_CLASSES = ['hero-proj-ecommerce', 'hero-proj-webapps', 'hero-proj-mobile']

export function HeroVisual() {
  return (
    <div
      className="hero-visual reveal"
      style={{ ['--rev-delay' as string]: '120ms' }}
    >
      {projects.slice(0, 3).map((proj, i) => (
        <a
          key={proj.id}
          href={`/${proj.id}`}
          className={`hero-cell hero-proj-cell ${CELL_CLASSES[i]}`}
          aria-label={`View ${proj.title}`}
        >
          <Image
            src={proj.image}
            alt={proj.title}
            fill
            sizes="(max-width: 900px) 90vw, 40vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-proj-overlay" />
          <div className="hero-proj-label">
            <span className="hero-proj-cat">{proj.category}</span>
            <span className="hero-proj-name">{proj.title}</span>
          </div>
        </a>
      ))}

      <div className="hero-cell hero-meta-jp">
        <span>$ ./run</span>
        <span className="hero-cell-big hero-meta-big">JP*</span>
      </div>

      <div className="hero-cell dark hero-meta-loc">
        <span>// loc</span>
        <span className="hero-cell-big hero-meta-big">CPT · ZA</span>
      </div>

      <div className="hero-cell accent-cell hero-meta-avail">
        <span>// avail</span>
        <span className="hero-cell-big hero-meta-big">OPEN</span>
      </div>

      <div className="hero-cell hero-meta-yrs">
        <span>// yrs</span>
        <span className="hero-cell-big hero-meta-big">02+</span>
      </div>
    </div>
  )
}
