"use client"

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const recommendations = [
  {
    name: "Roma Avenue",
    price: "$ 400,000",
    color: "border-pink-500"
  },
  {
    name: "Atlas Shack",
    price: "$ 500,000",
    color: "border-yellow-500"
  },
  {
    name: "Germannin",
    price: "$ 786,000",
    color: "border-green-500"
  },
  {
    name: "Heavens",
    price: "$ 667,000",
    color: "border-yellow-500"
  },
  {
    name: "Heretho",
    price: "$ 348,000",
    color: "border-pink-500"
  }
]

export default function AiRecommendations() {
  return (
    <Card className="bg-[#151819] border-gray-800 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Top AI - Generated Picks</h2>
      <div className="space-y-4">
        {recommendations.map((property, index) => (
          <motion.div
            key={property.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 bg-[#1c1f20] rounded-lg border-l-4 ${property.color} cursor-pointer hover:bg-[#263438] transition-colors duration-200`}
          >
            <div>
              <p className="text-white font-medium">{property.name}</p>
              <p className="text-gray-400">{property.price}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        ))}
      </div>
    </Card>
  )
}