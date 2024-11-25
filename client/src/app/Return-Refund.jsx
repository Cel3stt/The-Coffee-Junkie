import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink,ChevronDown,MoreHorizontal } from 'lucide-react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
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
import { Badge } from '@/components/ui/badge'
  import {
    File,

    ListFilter,
  

  } from "lucide-react"


  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
 
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const ReturnRefund = () => {
    const [activeTab, setActiveTab] = useState('all')
  
    // Mock data for demonstration
    const requests = [
      {
        requestId: "REQ001",
        orderId: "ORD123",
        customerName: "John Smith",
        products: ["AeroGlow Desk Lamp"],
        reason: "Damaged product",
        action: "Return",
        requestDate: "2024-02-14",
        status: "Pending"
      },
      {
        requestId: "REQ002",
        orderId: "ORD456",
        customerName: "Emma Wilson",
        products: ["Gamer Gear Pro Controller"],
        reason: "Wrong item",
        action: "Exchange",
        requestDate: "2024-02-13",
        status: "Approved"
      },
      {
        requestId: "REQ003",
        orderId: "ORD789",
        customerName: "Michael Brown",
        products: ["Luminous VR Headset"],
        reason: "Quality issue",
        action: "Refund",
        requestDate: "2024-02-12",
        status: "Completed"
      }
    ]
  
    const getStatusColor = (status) => {
      const colors = {
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Approved': 'bg-green-100 text-green-800',
        'Rejected': 'bg-red-100 text-red-800',
        'Completed': 'bg-blue-100 text-blue-800'
      }
      return colors[status] || 'bg-gray-100 text-gray-800'
    }
  
    const stats = {
      pending: requests.filter(r => r.status === 'Pending').length,
      processed: requests.filter(r => r.status === 'Completed').length
    }
  return (
    
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
         {/*==========================HEADING============================= */}
         <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Request</h1>

        

        {/*==========================SEARCH && FILTER ============================= */}
        <div className="flex gap-3 items-center justify-end">
   
            
   <Input
     type="search"
     placeholder="Search by ID, Order, Customer, Product, or Date"
     className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
   />

   
 
</div>




        </div>

        <Tabs defaultValue="all">

<div className="flex items-center">

  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="pending">Pending</TabsTrigger>
    <TabsTrigger value="approved">Approved</TabsTrigger>
    <TabsTrigger value="completed" className="Completed">
      Completed
    </TabsTrigger>
  </TabsList>
  <div className="ml-auto flex items-center gap-2">
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

        
        <DropdownMenuCheckboxItem>
          Oldest
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Button size="sm" variant="outline" className="h-8 gap-1">
      <File className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Export
      </span>
    </Button>

  

  </div>
</div>
<TabsContent value="all">
<div className="flex gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Processed Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.processed}</p>
            </CardContent>
          </Card>
        </div>
</TabsContent>
        </Tabs>

        
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Request ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.requestId}>
                  <TableCell className="font-medium">{request.requestId}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{request.orderId}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground cursor-pointer" />
                    </div>
                  </TableCell>
                  <TableCell>{request.customerName}</TableCell>
                  <TableCell>{request.products.join(", ")}</TableCell>
                  <TableCell>{request.reason}</TableCell>
                  <TableCell>{request.action}</TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    
                    <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      aria-haspopup="true"
                                      size="icon"
                                      variant="ghost"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Toggle menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <Link to='/request'>
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                                    <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        
       
      </main>
    </div>
  )
}

export default ReturnRefund
