export type ProjectSection = {
  heading: string
  body: string
  image: string
  live?: string
}

/* Media blocks that make up a project page — images first, prose second */
export type ProjectMedia =
  | { kind: 'image'; src: string; alt: string; caption?: string; tall?: boolean }
  | { kind: 'pair'; srcs: [string, string]; alts: [string, string]; caption?: string }
  | { kind: 'mobile'; srcs: string[]; alt: string; caption?: string }
  | { kind: 'video'; src?: string; poster: string; alt: string; caption?: string }

export type Project = {
  id: string          // URL slug
  title: string
  category: string
  image: string
  description: string
  overview: string[]  // 1-2 short paragraphs, no more
  year: string
  industry: string
  result: string
  services: string[]
  live?: string
  featured: boolean
  status?: string     // e.g. 'In progress' — omit for shipped work
  media: ProjectMedia[]
}

export type Service = {
  icon: string   // Lucide icon name (string, not component)
  title: string
  description: string
}

export type StackItem = {
  name: string
  emoji: string
}

export const projects: Project[] = [
  {
    id: 'clientbrief',
    title: 'ClientBrief',
    category: 'Insurance SaaS',
    image: '/images/clientbrief.png',
    description: 'A policy and client management platform that puts the right information in front of the right people.',
    overview: [
      'ClientBrief replaces the spreadsheets-and-inbox setup most insurance teams run on. Policies, clients and renewals live in one place, with role-based access so sensitive data stays scoped correctly.',
      'Built full-stack — schema, API, dashboard and deploy pipeline. Server-side aggregation keeps large books of business rendering instantly rather than spinning.',
    ],
    year: '2025',
    industry: 'Insurance',
    result: 'Renewals tracked in one place',
    services: ['Product design', 'Next.js development', 'PostgreSQL / Supabase'],
    live: '#',
    featured: true,
    media: [
      { kind: 'image', src: '/images/clientbrief.png', alt: 'ClientBrief dashboard overview' },
      {
        kind: 'video',
        poster: '/images/clientbrief.png',
        alt: 'Walkthrough of the ClientBrief dashboard',
        caption: 'Dashboard walkthrough',
      },
      {
        kind: 'pair',
        srcs: ['https://placehold.co/1200x900.png', 'https://placehold.co/1200x900.png'],
        alts: ['Policy detail view', 'Renewal pipeline'],
      },
      {
        kind: 'mobile',
        srcs: [
          '/images/mobile-clientbrief2.png',
          '/images/mobile-clientbrief1.png',
          '/images/mobile-clientbrief3.png',
        ],
        alt: 'ClientBrief on mobile',
        caption: 'Responsive down to phone width',
      },
    ],
  },
  {
    id: 'inboxiq',
    title: 'InboxIQ',
    category: 'AI & Automation',
    image: 'https://placehold.co/1600x1000.png',
    description: 'An AI layer over the inbox that triages, drafts, and routes the repetitive work.',
    overview: [
      'InboxIQ sits over a shared team inbox and handles the high-frequency work — triage, classification, draft replies, routing — with an audit trail so nobody has to babysit it.',
      'Currently in active development.',
    ],
    year: '2026',
    industry: 'B2B SaaS',
    result: 'In active development',
    services: ['Product design', 'Next.js development', 'OpenAI integration'],
    featured: true,
    status: 'In progress',
    media: [
      { kind: 'image', src: 'https://placehold.co/1600x1000.png', alt: 'InboxIQ triage view' },
      {
        kind: 'video',
        poster: 'https://placehold.co/1600x900.png',
        alt: 'Walkthrough of the InboxIQ triage workflow',
        caption: 'Triage workflow walkthrough',
      },
      {
        kind: 'pair',
        srcs: ['https://placehold.co/1200x900.png', 'https://placehold.co/1200x900.png'],
        alts: ['Rule builder', 'Audit trail'],
      },
    ],
  },
  {
    id: 'mooirivier-makelaars',
    title: 'Mooirivier Makelaars',
    category: 'Real Estate',
    image: 'https://placehold.co/1600x1000.png',
    description: 'A property listing site for a local estate agency — fast search, clean listings, easy enquiries.',
    overview: [
      'A listing site built around the two things that matter: finding a property and reaching the agent. Filter by suburb, price band and type, with results that update without a full page reload.',
      'The agency manages listings themselves through a CMS — no developer in the loop for day-to-day updates.',
    ],
    year: '2026',
    industry: 'Real estate',
    result: 'Listings managed in-house',
    services: ['Web design', 'Next.js development', 'CMS setup'],
    live: '#',
    featured: true,
    media: [
      { kind: 'image', src: 'https://placehold.co/1600x1000.png', alt: 'Mooirivier Makelaars homepage' },
      {
        kind: 'pair',
        srcs: ['https://placehold.co/1200x900.png', 'https://placehold.co/1200x900.png'],
        alts: ['Listing grid with filters', 'Single property page'],
      },
      {
        kind: 'mobile',
        srcs: [
          'https://placehold.co/440x900.png',
          'https://placehold.co/440x900.png',
          'https://placehold.co/440x900.png',
        ],
        alt: 'Mooirivier Makelaars on mobile',
        caption: 'Built mobile-first for on-the-go browsing',
      },
    ],
  },
]

/* ── Parked for now: the old category-based grouping ─────────────────
   The home page used to split work into three categories — Ecommerce,
   Web Applications, Mobile Apps — each with its own sub-projects.
   Kept here so the copy isn't lost; re-enable by moving entries back
   into the array above.

  {
    id: 'ecommerce',
    title: 'Ecommerce',
    category: 'Digital Commerce',
    image: '/images/ecommerce.webp',
    description: 'High-performance online stores with seamless checkout flows and conversion-focused UX.',
    longDescription: 'Ecommerce is where design decisions translate directly to revenue. I build stores that move fast, convert well, and feel premium — from product discovery through to checkout. Every interaction is deliberate: smart search, frictionless cart, transparent shipping, and payment flows that don\'t make people second-guess. The backend is just as considered: inventory management, order routing, and analytics wired up properly from day one.',
    year: '2024',
    services: ['Next.js Commerce', 'Shopify', 'Stripe', 'Analytics'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'Deadstock Thrift Co.',
        body: 'A Cape Town vintage and secondhand store built on Shopify — \'One of a kind. Obviously.\' The brief was zine meets record store meets 90s thrift receipt: raw, tactile, printed rather than rendered. It opens on an animated thermal-receipt loader that tears away to reveal the page, then runs through ten scroll-triggered sections. Every one is a custom Online Store 2.0 section with its own schema, so the shop owner can merchandise the whole homepage from the theme editor without touching Liquid.',
        image: '/images/deadstock.webp',
        live: '',
      },
      {
        heading: 'Gia Nutrition',
        body: 'Precision women\'s nutrition — science-backed supplements formulated for the female body rather than repackaged from a generic men\'s formula. The storefront had to carry that argument, so the product pages lead with clinical dosing, full ingredient transparency, and third-party validation before they ever ask for the sale. Custom hero, brand story, values, social proof and review sections sit on top of a fully wired Shopify 2.0 theme with cart drawer and predictive search.',
        image: '/images/gia.webp',
        live: '#',
      },
      {
        heading: 'Apex Fuel',
        body: 'A gym-supplement brand with a flat editorial identity — cream ground, a single aggressive red, and a Barlow Condensed wordmark that fills the viewport. No card shadows, no lift, no gloss. The build pairs a letter-by-letter assembly loader and a hard curtain wipe with an asymmetric three-band product grid and a full-width manifesto banner, all driven by theme settings so collections, colors and copy stay merchandisable.',
        image: '/images/apex.webp',
        live: '#',
      },

    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    category: 'SaaS & Tooling',
    image: '/images/loopin.webp',
    description: 'Custom SaaS platforms and internal tools built for teams that move fast.',
    longDescription: 'The gap between a tool people tolerate and one they actually enjoy using is almost always a design and performance problem. I build web applications with real-time data, smart permission systems, and interfaces that make complex workflows feel simple. Full-stack from database schema to deployment pipeline — nothing handed off, nothing lost in translation.',
    year: '2024',
    services: ['Next.js', 'React', '.NET', 'PostgreSQL', 'Supabase'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'PolicyFlow',
        body: 'Dashboards that show the right information to the right people. I pair clean charting libraries with server-side aggregation so large datasets render in milliseconds, not seconds. Dark mode, responsive layout, and drill-down interactions as standard.',
        image: '/images/loopin.webp',
        live: '#',
      },
      {
        heading: 'Loopn',
        body: 'Enterprise applications need permission systems that are watertight without being a nightmare to administer. Role-based access control, audit logs, SSO integration, and a UI that makes onboarding new team members take minutes, not hours.',
        image: '/images/loopin.webp',
        live: '#',
      },
      {
        heading: 'InboxIQ',
        body: 'Repetitive manual work is money left on the table. I identify the high-frequency tasks in a business and automate them — approval chains, notification routing, report generation, data sync — with visibility so teams know what\'s happening without babysitting the system.',
        image: '/images/loopin.webp',
        live: '#',
      },
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    category: 'Mobile Development',
    image: '/images/Shot.png',
    description: 'Cross-platform and native apps for iOS and Android that feel exactly right on-device.',
    longDescription: 'Mobile is the hardest platform to get right. Screen real estate is tight, attention spans are shorter, and users have a zero-tolerance policy for lag. I build with React Native for cross-platform reach and Swift when native iOS precision is required — always targeting 60fps, always designing for thumbs, always testing on real hardware. Offline-first architecture where the use case demands it.',
    year: '2026',
    services: ['Swift', 'iOS', 'Android', 'Push Notifications'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'Dex',
        body: 'First impressions on mobile are everything. A tight onboarding sequence that communicates value fast, biometric authentication, and a sign-up flow that asks for the minimum viable information — users can always fill in the rest later.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
    ],
  },

──────────────────────────────────────────────────────────────────── */

export const services: Service[] = [
  {
    icon: 'Code2',
    title: 'Full Stack Development',
    description: 'End-to-end web application development with React, Next.js, and .NET — from architecture to deployment.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    description: 'Azure and Docker-based infrastructure, CI/CD pipelines, and scalable cloud architecture for modern applications.',
  },
  {
    icon: 'Bot',
    title: 'AI & Automation',
    description: 'Intelligent features powered by OpenAI and custom ML models — from chatbots to automated business workflows.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with .NET MAUI and Swift, delivering native performance on iOS and Android.',
  },
  {
    icon: 'Layers',
    title: 'UI Engineering',
    description: 'Pixel-perfect, accessible interfaces with modern design systems, micro-animations, and exceptional UX.',
  },
  {
    icon: 'Server',
    title: 'Backend Systems',
    description: 'High-performance APIs, database architecture, and microservices built for reliability and scale.',
  },
]

export const stack: StackItem[] = [
  { name: 'Next.js', emoji: '▲' },
  { name: 'React', emoji: '⚛' },
  { name: '.NET', emoji: '🔷' },
  { name: 'C#', emoji: '#' },
  { name: 'TypeScript', emoji: 'TS' },
  { name: 'Azure', emoji: '☁' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Supabase', emoji: '⚡' },
  { name: 'Swift', emoji: '🐦' },
  { name: 'MAUI', emoji: '📱' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Tailwind', emoji: '🎨' },
]
