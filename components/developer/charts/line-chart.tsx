"use client"

import { useMemo } from 'react'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { type ChartConfiguration } from '@/types/chart'

interface LineChartProps {
  data: Array<{ name: string; value: number }>
  config: ChartConfiguration
}

export function LineChart({ data, config }: LineChartProps) {
  const memoizedData = useMemo(() => data, [data])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart 
        data={memoizedData}
        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
      >
        <CartesianGrid {...config.cartesianGrid} />
        <XAxis {...config.xAxis} />
        <YAxis {...config.yAxis} />
        <Tooltip {...config.tooltip} />
        <Line {...config.line} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}