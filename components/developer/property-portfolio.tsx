"use client"

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

const properties = [
  {
    name: "Roma Avenue",
    shares: 0.91,
    change: "+10%",
    positive: true
  },
  {
    name: "Thorian Park",
    shares: 0.89,
    change: "+19%",
    positive: true
  },
  {
    name: "Linda Mansion",
    shares: 1.1,
    change: "-17%",
    positive: false
  },
  {
    name: "Villa Mary",
    shares: 0.71,
    change: "+22%",
    positive: true
  }
]

export default function PropertyPortfolio() {
  return (
    <Card className="bg-[#151819] border-gray-800 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Properties Owned</h2>
      <div className="space-y-4">
        {properties.map((property, index) => (
          <motion.div
            key={property.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-[#1c1f20] rounded-lg"
          >
            <div>
              <p className="text-white font-medium">{property.name}</p>
              <p className="text-gray-400">{property.shares} Shares</p>
            </div>
            <p className={`text-lg font-semibold ${property.positive ? 'text-[#7fd8be]' : 'text-red-400'}`}>
              {property.change}
            </p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}