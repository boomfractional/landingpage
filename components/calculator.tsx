"use client"

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Calculator() {
  const [investment, setInvestment] = useState(1000)
  const [years, setYears] = useState(5)
  const annualReturn = 0.12 // 12% annual return

  const calculateReturns = () => {
    return investment * Math.pow(1 + annualReturn, years)
  }

  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Investment Calculator
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how your investment could grow over time
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-[#151819] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Calculate Your Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Investment Amount: ${investment.toLocaleString()}
                  </label>
                  <Slider
                    value={[investment]}
                    onValueChange={(value) => setInvestment(value[0])}
                    min={100}
                    max={50000}
                    step={100}
                    className="my-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Investment Period: {years} years
                  </label>
                  <Slider
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="my-4"
                  />
                </div>
                <div className="bg-[#1c1f20] p-6 rounded-lg">
                  <p className="text-gray-400 mb-2">Projected Value</p>
                  <p className="text-3xl font-bold text-[#7fd8be]">
                    ${Math.round(calculateReturns()).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Based on historical returns of 12% annually
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