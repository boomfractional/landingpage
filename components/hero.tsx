"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-[#B3B3B3] text-sm sm:text-base uppercase tracking-[0.33em] mb-6 font-geologica"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            REVOLUTIONIZING REAL ESTATE.
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-[86px] font-semibold text-white leading-tight tracking-tight font-plus-jakarta-sans mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Invest in fractional<br />real estate
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-[#B3B3B3] text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Invest fractionally in real estate with AI-tailored listings, enjoy high returns, and seamlessly buy and sell your fractions on Boom's stock-market like platform — your gateway to diversified, high-ROI property investment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-[#263438] border border-[#7fd8be] hover:bg-[#324450] text-white text-xl px-12 py-6 h-auto"
            >
              <Link href="/form">Join Waitlist</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#7fd8be] text-xl px-12 py-6 h-auto flex items-center gap-2"
            >
              <Link href="/demo">
                <PlayCircle className="w-6 h-6" />
                Try Demo
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}