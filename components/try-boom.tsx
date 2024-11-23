"use client"

import { motion } from "framer-motion"
import { FadeInWhenVisible } from "./animations/fade-in-when-visible"
import { Button } from "./ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function TryBoom() {
  return (
    <section className="py-24 bg-[#0b0e0f] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7fd8be]/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-plus-jakarta-sans">
                Try Boom Today!
              </h2>
            </motion.div>
            <p className="text-gray-400 text-lg mb-8">
              See how Boom can revolutionize your real estate investment strategy. Book a personalized demo with our team.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold text-lg px-8 py-6 h-auto"
              >
                <Link href="/demo" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book a Demo
                </Link>
              </Button>
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">
              30-minute personalized walkthrough • No commitment required
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Active Investors" },
            { number: "$10M+", label: "Total Investments" },
            { number: "15%", label: "Avg. Annual Returns" }
          ].map((stat, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <motion.div 
                className="text-center p-6 rounded-xl bg-[#151819] border border-gray-800"
                whileHover={{ scale: 1.02, borderColor: "#7fd8be" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-white mb-2 font-plus-jakarta-sans">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}