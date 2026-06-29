export type ProjectSection = {
  heading: string
  body: string
  image: string
}

export type Project = {
  id: string          // URL slug
  title: string
  category: string
  image: string
  description: string
  longDescription: string
  year: string
  services: string[]
  live?: string
  featured: boolean
  sections: ProjectSection[]
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
    id: 'ecommerce',
    title: 'Ecommerce',
    category: 'Digital Commerce',
    image: '/images/ecommerce.png',
    description: 'High-performance online stores with seamless checkout flows and conversion-focused UX.',
    longDescription: 'Ecommerce is where design decisions translate directly to revenue. I build stores that move fast, convert well, and feel premium — from product discovery through to checkout. Every interaction is deliberate: smart search, frictionless cart, transparent shipping, and payment flows that don\'t make people second-guess. The backend is just as considered: inventory management, order routing, and analytics wired up properly from day one.',
    year: '2024',
    services: ['Next.js Commerce', 'Shopify', 'Stripe', 'Analytics'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'Deadstock Thrift',
        body: 'The back office matters as much as the storefront. Order management, inventory sync, promotional tools, and a revenue dashboard that surfaces what actually drives growth — not just vanity metrics.',
        image: '/images/deadstock.png',
      },
      {
        heading: 'Gia Nutrition',
        body: 'A product page should answer every question a customer has before they ask it. High-fidelity imagery, size guidance, real stock levels, and honest reviews — all above the fold. The add-to-cart moment is the most important click on the site, so it gets the most care.',
        image: '/images/gia.png',
      },
      {
        heading: 'Apex Nutrition',
        body: 'One-page checkout that handles guest and returning users, integrates with Apple Pay and Google Pay, and surfaces the right upsells without feeling pushy. Cart abandonment drops when people trust the process — so every step is transparent about cost, delivery, and returns.',
        image: '/images/apex.png',
      },
      
    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    category: 'SaaS & Tooling',
    image: '/images/Single.png',
    description: 'Custom SaaS platforms and internal tools built for teams that move fast.',
    longDescription: 'The gap between a tool people tolerate and one they actually enjoy using is almost always a design and performance problem. I build web applications with real-time data, smart permission systems, and interfaces that make complex workflows feel simple. Full-stack from database schema to deployment pipeline — nothing handed off, nothing lost in translation.',
    year: '2024',
    services: ['Next.js', 'React', '.NET', 'PostgreSQL', 'Azure'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'Data Visualization',
        body: 'Dashboards that show the right information to the right people. I pair clean charting libraries with server-side aggregation so large datasets render in milliseconds, not seconds. Dark mode, responsive layout, and drill-down interactions as standard.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
      {
        heading: 'User & Role Management',
        body: 'Enterprise applications need permission systems that are watertight without being a nightmare to administer. Role-based access control, audit logs, SSO integration, and a UI that makes onboarding new team members take minutes, not hours.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
      {
        heading: 'Workflow Automation',
        body: 'Repetitive manual work is money left on the table. I identify the high-frequency tasks in a business and automate them — approval chains, notification routing, report generation, data sync — with visibility so teams know what\'s happening without babysitting the system.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    category: 'Mobile Development',
    image: '/images/web-portfolio-mockup_10.png',
    description: 'Cross-platform and native apps for iOS and Android that feel exactly right on-device.',
    longDescription: 'Mobile is the hardest platform to get right. Screen real estate is tight, attention spans are shorter, and users have a zero-tolerance policy for lag. I build with .NET MAUI for cross-platform reach and Swift when native iOS precision is required — always targeting 60fps, always designing for thumbs, always testing on real hardware. Offline-first architecture where the use case demands it.',
    year: '2024',
    services: ['.NET MAUI', 'Swift', 'iOS', 'Android', 'Push Notifications'],
    live: '#',
    featured: true,
    sections: [
      {
        heading: 'Onboarding & Auth',
        body: 'First impressions on mobile are everything. A tight onboarding sequence that communicates value fast, biometric authentication, and a sign-up flow that asks for the minimum viable information — users can always fill in the rest later.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
      {
        heading: 'Core Experience',
        body: 'The main loop of the app is where most engineering effort goes. Native gesture handling, smooth list performance with thousands of items, offline caching with conflict resolution, and push notifications that are useful rather than noise.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
      {
        heading: 'Device Integration',
        body: 'Camera, GPS, health sensors, NFC — mobile hardware is a rich palette. I integrate device capabilities where they genuinely improve the experience: receipt scanning, location-aware content, contact sync, and share sheets that make the app part of the user\'s wider workflow.',
        image: '/images/MacBook-Pro-14-inch-free-mockup-kit-1000x750.webp',
      },
    ],
  },
]

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
