import ExpertiseSection from '#/components/ExpertiesSection'
import { Hero } from '#/components/Hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
    </div>
  )
}
