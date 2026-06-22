import { notFound } from 'next/navigation'
import { projects } from '@/src/lib/data'
import { ProjectDetailPage } from '@/src/components/sections/ProjectDetailPage'
import { ContactSection } from '@/src/components/sections/ContactSection'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Jacques Pieterse`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) notFound()

  return (
    <main>
      <ProjectDetailPage project={project} />
      <ContactSection />
    </main>
  )
}
