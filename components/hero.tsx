"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
            className="text-[#B3B3B3] text-sm sm:text-base uppercase tracking-[0.33em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            STREAMLINE YOUR REAL ESTATE SYNDICATION
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-[86px] font-semibold text-white leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Ultimate Portal<br />for Real Estate Sponsors
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-[#B3B3B3] text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Manage your investors, projects, and syndications all in one intuitive platform. Streamline communications, automate workflows, and provide a seamless experience for your investors with our AI-powered dashboard.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-[#263438] border border-[#7fd8be] hover:bg-[#324450] text-white text-xl px-12 py-6 h-auto"
            >
              <a href="https://calendly.com/boomfractional/boom-ai-demo?month=2025-02" target="_blank" rel="noopener noreferrer">Try Demo</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}