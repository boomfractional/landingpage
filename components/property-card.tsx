"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Building2, Users } from 'lucide-react'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'

type PropertyCardProps = {
  id: keyof typeof properties
  property: typeof properties[keyof typeof properties]
}

export default function PropertyCard({ id, property }: PropertyCardProps) {
  return (
    <Link href={`/demo/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="bg-[#151819] border-gray-800 overflow-hidden cursor-pointer">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              {property.name}
            </h3>
            <p className="text-gray-400 mb-4">
              <Building2 className="inline-block w-4 h-4 mr-2" />
              {property.location}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-white font-semibold">
                  ${property.price.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Expected ROI</p>
                <p className="text-[#7fd8be] font-semibold">
                  {property.roi}%
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">
                <Users className="inline-block w-4 h-4 mr-1" />
                {property.investors} investors
              </span>
              <span className="text-gray-400">
                {property.funded}% funded
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}