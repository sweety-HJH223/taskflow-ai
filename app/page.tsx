import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Problem } from '@/components/problem'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { OtherTools } from '@/components/other-tools'
import { FAQ } from '@/components/faq'
import { Waitlist } from '@/components/waitlist'
import { Footer } from '@/components/footer'
import { PerspectiveSection } from '@/components/ui/effects-3d'

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative z-10">
      <Navbar />
      <main className="pt-16 space-y-20 md:space-y-32">
        <Hero />
        <Marquee />
        
        <PerspectiveSection>
          <Problem />
        </PerspectiveSection>

        <PerspectiveSection>
          <Features />
        </PerspectiveSection>

        <PerspectiveSection>
          <HowItWorks />
        </PerspectiveSection>

        <OtherTools />

        <PerspectiveSection>
          <FAQ />
        </PerspectiveSection>

        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
