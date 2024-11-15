"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
    { month: 'Jan', desktop: 48000 },
    { month: 'Feb', desktop: 15000 },
    { month: 'Mar', desktop: 50000 },
    { month: 'Apr', desktop: 35000 },
    { month: 'June', desktop: 12000 },
    { month: 'July', desktop: 35000 },
    { month: 'Aug', desktop: 42000 },
    { month: 'Sep', desktop: 18000 },
    { month: 'Oct', desktop: 43000 },
    { month: 'Nov', desktop: 8000 },
    { month: 'Dec', desktop: 35000 }
]

// Define chart config inside the component
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))", // Make sure this CSS variable is defined or use a fixed color
  },
}

const salesChart = () => {
  return (
    <Card>
      <CardHeader>
        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="hsl(var(--chart-1))" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
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
