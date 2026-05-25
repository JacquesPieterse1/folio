export type Project = {
  id: string
  title: string
  category: string
  year: number
  description: string
  stack: string[]
  image: string
  github?: string
  live?: string
  featured: boolean
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
    id: 'ai-analytics',
    title: 'AI Analytics Dashboard',
    category: 'Artificial Intelligence',
    year: 2024,
    description: 'Real-time analytics platform powered by OpenAI, delivering intelligent insights and automated reporting for enterprise teams.',
    stack: ['Next.js', 'Python', 'OpenAI', 'Supabase', 'TypeScript'],
    image: 'https://placehold.co/800x600/111111/222222',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: true,
  },
  {
    id: 'saas-portal',
    title: 'SaaS Client Portal',
    category: 'SaaS Platform',
    year: 2024,
    description: 'Multi-tenant client portal with role-based access, billing integration, and real-time notifications for B2B SaaS.',
    stack: ['Next.js', '.NET', 'Azure', 'PostgreSQL', 'Stripe'],
    image: 'https://placehold.co/800x600/111111/1a1a1a',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: true,
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    category: 'Web Platform',
    year: 2023,
    description: 'Property listing and management platform with interactive maps, virtual tours, and agent CRM integration.',
    stack: ['React', 'Node.js', 'Mapbox', 'Stripe', 'MongoDB'],
    image: 'https://placehold.co/800x600/111111/222222',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: true,
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    category: 'Mobile Application',
    year: 2024,
    description: 'Cross-platform fitness tracker with AI-powered workout recommendations, progress analytics, and social challenges.',
    stack: ['Swift', 'MAUI', 'Supabase', 'TensorFlow Lite'],
    image: 'https://placehold.co/800x600/111111/1a1a1a',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: false,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Monitor',
    category: 'Security Systems',
    year: 2023,
    description: 'Real-time threat monitoring and incident response platform with automated alerting and compliance reporting.',
    stack: ['React', 'Python', 'Docker', 'Azure', 'Grafana'],
    image: 'https://placehold.co/800x600/111111/222222',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: false,
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking UI',
    category: 'Fintech',
    year: 2024,
    description: 'Secure, accessible banking interface with biometric auth, instant transfers, and spending analytics.',
    stack: ['MAUI', '.NET', 'Azure', 'Biometric Auth'],
    image: 'https://placehold.co/800x600/111111/1a1a1a',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: false,
  },
  {
    id: 'dev-tool',
    title: 'Developer Productivity Tool',
    category: 'Developer Tools',
    year: 2025,
    description: 'AI-assisted code review and project management tool that integrates with GitHub to streamline developer workflows.',
    stack: ['Next.js', 'Electron', 'TypeScript', 'OpenAI', 'GitHub API'],
    image: 'https://placehold.co/800x600/111111/222222',
    github: 'https://github.com/JacquesPieterse1',
    live: '#',
    featured: false,
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
