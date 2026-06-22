import { HeroSection } from '@/src/components/sections/HeroSection'
import { AboutSection } from '@/src/components/sections/AboutSection'
import { ProjectsSection } from '@/src/components/sections/ProjectsSection'
import { FocusSection } from '@/src/components/sections/FocusSection'
import { AiChatSection } from '@/src/components/sections/AiChatSection'
import { ContactSection } from '@/src/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FocusSection />
      <ContactSection />
    </main>
  )
}
