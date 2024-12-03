"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PromoBar from '@/components/promo-bar'
import DeveloperStats from '@/components/developer/stats'
import PropertyPortfolio from '@/components/developer/property-portfolio'
import DistributionChart from '@/components/developer/distribution-chart'
import AiRecommendations from '@/components/developer/ai-recommendations'
import { ArrowLeft } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <PromoBar />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-white font-plus-jakarta-sans">
                Your Portfolio
              </h1>
              <Button 
                asChild
                variant="outline" 
                className="text-white border-gray-700 hover:bg-[#263438]"
              >
                <Link href="/demo" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Properties
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <DeveloperStats />
                <PropertyPortfolio />
                <DistributionChart />
              </div>
              <div className="lg:col-span-1">
                <AiRecommendations />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}