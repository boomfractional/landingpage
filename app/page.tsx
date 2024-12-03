import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Vision from '@/components/vision'
import HowItWorks from '@/components/how-it-works'
import Team from '@/components/team'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import PromoBar from '@/components/promo-bar'
import Calculator from '@/components/calculator'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PromoBar />
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      <Calculator />
      <HowItWorks />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}