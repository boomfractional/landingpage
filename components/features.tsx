"use client"

import { Building2, Shield, Bot, LayoutDashboard } from "lucide-react"
import { FadeInWhenVisible } from "./animations/fade-in-when-visible"
import { motion } from "framer-motion"

const features = [
  {
    title: "Project Management",
    description: "Manage all your real estate projects, track progress, and share updates with investors in real-time through a centralized dashboard",
    icon: Building2
  },
  {
    title: "Investor Relations",
    description: "Manage investor leads, track conversions, and create custom branded pages for each project. Streamline communications and document sharing through personalized investor portals",
    icon: Shield
  },
  {
    title: "AI-Powered Support",
    description: "Leverage AI chatbots for instant investor support, automated updates on project milestones, and intelligent document processing",
    icon: Bot
  },
  {
    title: "Intuitive Dashboard",
    description: "Access all your syndication tools in one place with our user-friendly interface designed specifically for real estate sponsors",
    icon: LayoutDashboard
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to Manage Your Syndications
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive suite of tools designed specifically for real estate sponsors and developers
            </p>
          </div>
        </FadeInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <motion.div 
                className="bg-[#151819] p-8 rounded-xl border border-gray-800 h-full"
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
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}