import { type ChartConfiguration } from '@/types/chart'

export const distributionChartConfig: ChartConfiguration = {
  xAxis: {
    dataKey: "name",
    axisLine: { stroke: "#718096" },
    tick: { fill: "#718096", fontSize: 12 },
    padding: { left: 0, right: 0 }
  },
  yAxis: {
    axisLine: { stroke: "#718096" },
    tick: { fill: "#718096", fontSize: 12 },
    padding: { top: 0, bottom: 0 }
  },
  cartesianGrid: {
    strokeDasharray: "3 3",
    stroke: "#2d3436",
    vertical: false
  },
  tooltip: {
    contentStyle: {
      backgroundColor: '#1a202c',
      border: 'none',
      borderRadius: '8px',
      color: '#fff',
      padding: '8px 12px'
    }
  },
  line: {
    type: "monotone" as const,
    dataKey: "value",
    stroke: "#7fd8be",
    strokeWidth: 2,
    dot: { 
      fill: '#7fd8be',
      strokeWidth: 0
    },
    activeDot: {
      fill: '#7fd8be',
      strokeWidth: 0,
      r: 6
    }
  }
}