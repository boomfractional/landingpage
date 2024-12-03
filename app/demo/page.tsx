"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react'
import { FadeInWhenVisible } from '@/components/animations/fade-in-when-visible'
import Navbar from '@/components/navbar'
import PromoBar from '@/components/promo-bar'
import PropertyCard from '@/components/property-card'
import { properties } from '@/lib/data/properties'

export default function DemoPage() {
  const [selectedTab, setSelectedTab] = useState("properties")

  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <PromoBar />
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-white mb-4 font-plus-jakarta-sans">
                Platform Demo
              </h1>
              <p className="text-gray-400">
                Experience how Boom makes real estate investing simple and accessible
              </p>
            </div>
          </FadeInWhenVisible>

          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="bg-[#151819] border-b border-gray-800">
              <TabsTrigger value="properties" className="text-white">
                Properties
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="text-white">
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-white">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="properties">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {Object.entries(properties).map(([id, property], index) => (
                  <FadeInWhenVisible key={id} delay={index * 0.1}>
                    <PropertyCard id={id as keyof typeof properties} property={property} />
                  </FadeInWhenVisible>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <FadeInWhenVisible>
                  <Card className="bg-[#151819] border-gray-800 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Portfolio Overview
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Invested</span>
                        <span className="text-white font-semibold">$25,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Current Value</span>
                        <span className="text-[#7fd8be] font-semibold">$28,750</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Return</span>
                        <span className="text-[#7fd8be] font-semibold">+15%</span>
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.1}>
                  <Card className="bg-[#151819] border-gray-800 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Monthly Income
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Rental Income</span>
                        <span className="text-white font-semibold">$450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Appreciation</span>
                        <span className="text-[#7fd8be] font-semibold">$300</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Monthly</span>
                        <span className="text-[#7fd8be] font-semibold">$750</span>
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                  { icon: TrendingUp, label: "Portfolio Growth", value: "+23.5%" },
                  { icon: DollarSign, label: "Total Returns", value: "$3,750" },
                  { icon: BarChart3, label: "Properties Owned", value: "5" }
                ].map((stat, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <Card className="bg-[#151819] border-gray-800 p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-[#263438] rounded-lg">
                          <stat.icon className="w-6 h-6 text-[#7fd8be]" />
                        </div>
                        <div>
                          <p className="text-gray-400">{stat.label}</p>
                          <p className="text-xl font-semibold text-white">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </FadeInWhenVisible>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}