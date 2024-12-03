"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import DeveloperStats from '@/components/developer/stats'
import PropertyPortfolio from '@/components/developer/property-portfolio'
import DistributionChart from '@/components/developer/distribution-chart'
import AiRecommendations from '@/components/developer/ai-recommendations'

export default function InvestmentsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white mb-8 font-plus-jakarta-sans">
            Investment Overview
          </h1>

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
  )
}