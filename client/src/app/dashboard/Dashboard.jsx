'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowUpRight, BarChart3, Package } from 'lucide-react'

// Sample data for the chart
const chartData = [
  { name: 'Jan', total: 45000 },
  { name: 'Feb', total: 18000 },
  { name: 'Mar', total: 38000 },
  { name: 'Apr', total: 37000 },
  { name: 'June', total: 12000 },
  { name: 'July', total: 38000 },
  { name: 'Aug', total: 20000 },
  { name: 'Sep', total: 45000 },
  { name: 'Oct', total: 38000 },
  { name: 'Nov', total: 10000 },
  { name: 'Dec', total: 5000 },
]

const recentOrders = [
  {
    customer: 'Jane Smith',
    product: 'Coffee Grinder',
    date: '10-22-2024',
    status: 'Processing',
  },
  {
    customer: 'Bob Johnson',
    product: 'Coffee Grinder',
    date: '10-21-2024',
    status: 'Processing',
  },
  {
    customer: 'Jane Cruz',
    product: 'Coffee Grinder',
    date: '10-22-2024',
    status: 'Processing',
  },
  {
    customer: 'Charlie Wilson',
    product: 'Coffee Grinder',
    date: '10-20-2024',
    status: 'Processing',
  },
]

import React from 'react'

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex-1 space-y-4 p-4 md:p-8 pt-6 overflow-auto">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Generate Report</Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₱ 45,231.89</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today Sales</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₱ 12,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Products</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sales and Report</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <p className="text-sm text-muted-foreground">
                Latest orders with pending ones first
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentOrders.map((order) => (
                  <div key={order.customer} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">{order.product}</p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="ml-auto">
                      <Badge className="bg-yellow-500">{order.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    
  )
}


export default Dashboard
