export interface ChartConfiguration {
  xAxis: {
    dataKey: string
    axisLine: { stroke: string }
    tick: { fill: string; fontSize: number }
    padding: { left: number; right: number }
  }
  yAxis: {
    axisLine: { stroke: string }
    tick: { fill: string; fontSize: number }
    padding: { top: number; bottom: number }
  }
  cartesianGrid: {
    strokeDasharray: string
    stroke: string
    vertical: boolean
  }
  tooltip: {
    contentStyle: {
      backgroundColor: string
      border: string
      borderRadius: string
      color: string
      padding: string
    }
  }
  line: {
    type: "monotone"
    dataKey: string
    stroke: string
    strokeWidth: number
    dot: {
      fill: string
      strokeWidth: number
    }
    activeDot: {
      fill: string
      strokeWidth: number
      r: number
    }
  }
}