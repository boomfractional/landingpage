"use client"

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Calculator() {
  const [projectValue, setProjectValue] = useState(1000000)
  const [investors, setInvestors] = useState(20)
  const monthlyFee = 299
  const annualSavings = 25000 // Estimated annual savings from automation

  const calculateROI = () => {
    const annualCost = monthlyFee * 12
    return Math.round((annualSavings / annualCost) * 100)
  }

  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            ROI Calculator
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how much time and money you could save with our platform
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-[#151819] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Calculate Your Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Total Project Value: ${projectValue.toLocaleString()}
                  </label>
                  <Slider
                    value={[projectValue]}
                    onValueChange={(value) => setProjectValue(value[0])}
                    min={500000}
                    max={10000000}
                    step={100000}
                    className="my-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Number of Investors: {investors}
                  </label>
                  <Slider
                    value={[investors]}
                    onValueChange={(value) => setInvestors(value[0])}
                    min={5}
                    max={100}
                    step={1}
                    className="my-4"
                  />
                </div>
                <div className="bg-[#1c1f20] p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 mb-2">Estimated Annual Savings</p>
                      <p className="text-3xl font-bold text-[#7fd8be]">
                        ${annualSavings.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Return on Investment</p>
                      <p className="text-3xl font-bold text-[#7fd8be]">
                        {calculateROI()}x
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Based on average time savings and operational costs for similar-sized organizations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}