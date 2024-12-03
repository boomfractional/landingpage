"use client"

import { Card } from '@/components/ui/card'
import { useMemo } from 'react'
import { LineChart } from '@/components/developer/charts/line-chart'
import { distributionChartConfig } from '@/lib/chart-config'

const generateChartData = () => [
  { name: 'May', value: 200 },
  { name: 'June', value: 250 },
  { name: 'July', value: 180 },
  { name: 'August', value: 280 },
  { name: 'September', value: 220 },
  { name: 'October', value: 300 },
  { name: 'November', value: 280 },
]

export default function DistributionChart() {
  const data = useMemo(() => generateChartData(), [])

  return (
    <Card className="bg-[#151819] border-gray-800 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Investing</h2>
      <div className="h-[300px]">
        <LineChart data={data} config={distributionChartConfig} />
      </div>
    </Card>
  )
}