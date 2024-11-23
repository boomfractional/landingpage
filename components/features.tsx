"use client"

import { Zap, Shield, TrendingUp, BarChart3 } from "lucide-react"
import { FadeInWhenVisible } from "./animations/fade-in-when-visible"
import { motion } from "framer-motion"

const features = [
  {
    title: "Low Minimum Investment",
    description: "Start investing in premium real estate with as little as $100",
    icon: Zap
  },
  {
    title: "Secure & Regulated",
    description: "Your investments are protected through regulatory compliance and advanced security",
    icon: Shield
  },
  {
    title: "High Returns",
    description: "Access high-yield real estate investments with historical returns of 12-15% annually",
    icon: TrendingUp
  },
  {
    title: "Portfolio Analytics",
    description: "Track your investments with detailed analytics and performance metrics",
    icon: BarChart3
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
              Why Choose Boom
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the future of real estate investing with our innovative platform
            </p>
          </div>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div 
                className="bg-[#151819] p-6 rounded-xl border border-gray-800"
                whileHover={{ scale: 1.05, borderColor: "#7fd8be" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-12 h-12 text-[#7fd8be] mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}