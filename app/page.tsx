import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Vision from '@/components/vision'
import Team from '@/components/team'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}