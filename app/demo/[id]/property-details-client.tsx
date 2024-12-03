"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Building2, MapPin, Bed, Bath, Square, DollarSign, Users, Zap } from 'lucide-react'
import Navbar from '@/components/navbar'
import PromoBar from '@/components/promo-bar'
import { properties } from '@/lib/data/properties'

type PropertyDetailsClientProps = {
  property: typeof properties[keyof typeof properties]
}

export default function PropertyDetailsClient({ property }: PropertyDetailsClientProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <PromoBar />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Property Details */}
              <div className="space-y-6">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <Card className="bg-[#151819] border-gray-800 p-6">
                  <h1 className="text-3xl font-bold text-white mb-2 font-plus-jakarta-sans">
                    {property.name}
                  </h1>
                  <p className="text-gray-400 flex items-center mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-2 text-[#7fd8be]" />
                      <span className="text-white">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-2 text-[#7fd8be]" />
                      <span className="text-white">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-2 text-[#7fd8be]" />
                      <span className="text-white">{property.area} sqft</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{property.description}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <Zap className="w-4 h-4 mr-2 text-[#7fd8be]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-800 pt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Monthly Costs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Property Taxes</span>
                        <span className="text-white">${property.monthlyTaxes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">HOA Fees</span>
                        <span className="text-white">${property.hoaFees}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Investment Details & Form */}
              <div className="space-y-6">
                <Card className="bg-[#151819] border-gray-800 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-gray-400">Property Value</p>
                      <p className="text-3xl font-bold text-white">
                        ${property.price.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Expected ROI</p>
                      <p className="text-3xl font-bold text-[#7fd8be]">
                        {property.roi}%
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">
                        <Users className="inline-block w-4 h-4 mr-1" />
                        {property.investors} investors
                      </span>
                      <span className="text-[#7fd8be]">{property.funded}% funded</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-[#7fd8be] h-2 rounded-full"
                        style={{ width: `${property.funded}%` }}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-400 mb-2">Remaining Investment Amount</p>
                    <p className="text-3xl font-bold text-[#7fd8be]">
                      ${property.remainingInvestment.toLocaleString()}
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="First Name"
                          className="bg-[#263438] border-gray-700 text-white"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Last Name"
                          className="bg-[#263438] border-gray-700 text-white"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    <Input
                      placeholder="Email"
                      type="email"
                      className="bg-[#263438] border-gray-700 text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Input
                      placeholder="Phone"
                      type="tel"
                      className="bg-[#263438] border-gray-700 text-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <Textarea
                      placeholder="Message"
                      className="bg-[#263438] border-gray-700 text-white"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <Button className="w-full bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold">
                      Invest Now
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}