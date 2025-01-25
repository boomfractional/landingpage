"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Briefcase } from 'lucide-react'
import Navbar from '@/components/navbar'
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible'
import PropertyCard from '@/components/property-card'
import { properties } from '@/lib/data/properties'

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mb-12 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4 font-plus-jakarta-sans">
                  Property Marketplace
                </h1>
                <p className="text-gray-400">
                  Browse and invest in our curated selection of high-yield properties
                </p>
              </div>
              <div className="flex gap-4">
                <Button 
                  asChild
                  className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold"
                >
                  <Link href="/demo/portfolio" className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(properties).map(([id, property], index) => (
              <FadeInWhenVisible key={id} delay={index * 0.1}>
                <PropertyCard id={id as keyof typeof properties} property={property} />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}