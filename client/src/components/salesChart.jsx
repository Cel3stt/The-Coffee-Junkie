"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const description = "A bar chart with a label"

// Example chart data
const chartData = [
    { month: 'Jan', sales: 48000 },
    { month: 'Feb', sales: 15000 },
    { month: 'Mar', sales: 50000 },
    { month: 'Apr', sales: 35000 },
    { month: 'May', sales: 35000 },
    { month: 'June', sales: 12000 },
    { month: 'July', sales: 35000 },
    { month: 'Aug', sales: 42000 },
    { month: 'Sep', sales: 18000 },
    { month: 'Oct', sales: 43000 },
    { month: 'Nov', sales: 8000 },
    { month: 'Dec', sales: 35000 }
]

const formatSales = (value, isMobile) => {
  if (isMobile && value >= 1000) return `${(value/1000).toFixed(0)}k`
  return value;
}
// Define chart config inside the component
const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))", // Make sure this CSS variable is defined or use a fixed color
  },
}

const salesChart = () => {
 const [isMobile, setIsMobile] = useState(false)

 useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768)
  };

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize)

  return () => {
    window.removeEventListener('resize', checkScreenSize)
  }
 }, [])
  return (
    <Card>
      <CardHeader>
        
      </CardHeader>
      <CardContent>
        <ChartContainer className='shadow-none' config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent
                hideLabel
                formatter={(value) => formatSales(value, isMobile)}
              />}
              
            />
            <Bar dataKey="sales" fill="hsl(var(--chart-1))" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => formatSales(value, isMobile)}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default salesChart
