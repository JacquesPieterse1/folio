import { HeroSection } from '@/src/components/sections/HeroSection'
import { AboutSection } from '@/src/components/sections/AboutSection'
import { ProjectsSection } from '@/src/components/sections/ProjectsSection'
import { ServicesSection } from '@/src/components/sections/ServicesSection'
import { StackSection } from '@/src/components/sections/StackSection'
import { ContactSection } from '@/src/components/sections/ContactSection'
import { FooterSection } from '@/src/components/sections/FooterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <StackSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
