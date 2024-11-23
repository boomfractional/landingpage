"use client"

import { Target, Globe, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInWhenVisible } from "./animations/fade-in-when-visible"

const visionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize real estate investment by making premium properties accessible to everyone through fractional ownership."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating a world where property investment isn't limited by geography or wealth, enabling global portfolio diversification."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a community of informed investors who can collaborate, learn, and grow their wealth together."
  },
  {
    icon: TrendingUp,
    title: "Future Growth",
    description: "Leveraging technology and AI to identify high-potential properties and maximize returns for our investors."
  }
]

export default function Vision() {
  return (
    <section className="py-24 bg-[#151819]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
              Our Vision
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transforming real estate investment for the digital age
            </p>
          </div>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionPoints.map((point, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div 
                className="bg-[#0b0e0f] p-8 rounded-xl border border-gray-800 flex items-start space-x-4 hover:border-[#7fd8be] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <point.icon className="w-6 h-6 text-[#7fd8be] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}