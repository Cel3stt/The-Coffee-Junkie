import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
    ListFilter,
    Search,
  } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Orders = () => {

    const orders = [
        {
            id: "ORD001",
            customerName: "Momo Doe",
            date: '2024-20-27',
            amount: '35,000',
            status: 'Processing'
        },
        {
            id: "ORD002",
            customerName: "Momo Doe",
            date: '2024-20-27',
            amount: '35,000',
            status: 'Processing'
        },
        {
            id: "ORD003",
            customerName: "Momo Doe",
            date: '2024-20-27',
            amount: '35,000',
            status: 'Shipped'
        },
        {
            id: "ORD004",
            customerName: "Momo Doe",
            date: '2024-20-27',
            amount: '35,000',
            status: 'Shipped'
        },
        {
            id: "ORD005",
            customerName: "Momo Doe",
            date: '2024-20-27',
            amount: '35,000',
            status: 'Delivered'
        }
    ]

    const [activeTab, setActiveTab] = useState("all");

    const filteredOrders =
    activeTab === "all"
      ? orders.filter(order => order.status === "Processing")
      : activeTab === "active"
      ? orders.filter(order => order.status === "Shipped")
      : orders.filter(order => order.status === "Delivered");


  return (
    <div className='flex min-h-screen w-full flex-col'>
     <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>

   {/*==========================HEADING============================= */}
     <div className="flex flex-col md:flex-row items-center justify-between">
    <h1 className="text-2xl font-bold">Orders</h1>

{/*==========================SEARCH && FILTER ============================= */}
    <div className="flex gap-3 items-center justify-end">
   
            
            <Input
              type="search"
              placeholder="Search Order..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />

             <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Newest
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Oldest
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
            </DropdownMenu>
          
    </div>

     </div>

    {/*==========================TABS============================= */}
    <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">Processing</TabsTrigger>
            <TabsTrigger value="active">Shipped</TabsTrigger>
            <TabsTrigger value="draft">Delivered</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>



    {/*==========================ORDERS CONTENT============================= */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredOrders.map((order, index) => (
          <Card
            key={index}
            className="max-w-[450px] relative overflow-hidden border-t-[10px] border-t-black rounded-lg mb-5"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{order.id}</span>
                <Badge variant={order.status.toLowerCase()}>{order.status}</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <p className="font-medium">{order.customerName}</p>
                <p className="text-sm text-muted-foreground">{order.date}</p>
                <p className="font-semibold">₱ {order.amount}</p>
              </div>
              <div className="mt-4 text-right">
                <Button
                  variant="outline"
                  className="w-full mt-4 text-gray-800 font-normal"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    
     </main>
     </div>
  
  )
}

export default Orders
