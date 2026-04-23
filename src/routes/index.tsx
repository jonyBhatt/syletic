import { DreamHome } from '#/components/DreamHome'
import ExpertiseSection from '#/components/ExpertiesSection'
import { Footer } from '#/components/Footer'
import { Hero } from '#/components/Hero'
import { TeamSection } from '#/components/TeamMemberSection'
import { TestimonialSection } from '#/components/TestimonialSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
      <DreamHome />
      <TeamSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}
