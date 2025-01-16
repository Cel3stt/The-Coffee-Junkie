import { Link } from "react-router-dom"

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import SalesChart from "@/components/salesChart"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '@/store/admin/products-slice'
import { getAllOrdersForAdmin } from '@/store/admin/order-slice'


const Dashboard = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.adminProducts.productList)
  const orderList = useSelector((state) => state.adminOrder.orderList || [])

  const totalProducts = productList.length
  const [lowStockProducts, setLowStockProducts] = useState([]) // New state for low stock products
  const [date, setDate] = useState(new Date())
  const [totalSales, setTotalSales] = useState(0)

  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(getAllOrdersForAdmin())
  }, [dispatch])

  useEffect(() => {
    const fetchLowStockProducts = () => {
      const lowStock = productList.filter(product => product.totalStock < 5);
      setLowStockProducts(lowStock);
    };
  
    fetchLowStockProducts();
  }, [productList]);
  
  useEffect(() => {
    console.log('Order List:', orderList) // Debugging: Check order list
    const calculateTotalSales = () => {
      const selectedDate = format(date, 'yyyy-MM-dd') // Adjust format as needed
      console.log('Selected Date:', selectedDate) // Debugging: Check selected date
      const filteredOrders = orderList.filter(order => {
        try {
          const orderDate = format(new Date(order.orderDate), 'yyyy-MM-dd') // Directly use new Date()
          console.log('Order Date:', orderDate) // Debugging: Check order date
          return orderDate === selectedDate
        } catch (error) {
          console.error('Error parsing date:', error)
          return false
        }
      })
      console.log('Filtered Orders:', filteredOrders) // Debugging: Check filtered orders
      const total = filteredOrders.reduce((sum, order) => sum + order.totalAmount, 0)
      console.log('Total Sales:', total) // Debugging: Check total sales
      setTotalSales(total)
    }

    calculateTotalSales()
  }, [orderList, date])

  const orders = [
    {
      customerName: "Jane Smith",
      product: "Coffee Grinder",
      date: "10-22-2024",
      status: "processing"
    },
    {
      customerName: "Bob Johnson",
      product: "Coffee Grinder",
      date: "10-21-2024",
      status: "processing"
    },
    {
      customerName: "Jane Cruz",
      product: "Coffee Grinder",
      date: "10-22-2024",
      status: "processing"
    },
    {
      customerName: "Charlie Wilson",
      product: "Coffee Grinder",
      date: "10-20-2024",
      status: "processing"
    },
    {
      customerName: "Charlie Wilson",
      product: "Coffee Grinder",
      date: "10-20-2024",
      status: "processing"
    },
  ]
  return (
  
    <div className="flex min-h-screen w-full flex-col">

    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
    <h1 className="text-2xl font-bold">Dashboard</h1>

    <div className="flex gap-3 items-center justify-end">
        <Popover className=''>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[200px] justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MMM dd, yyyy") : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
        </Popover>
        
        <Button>Generate report</Button>
    </div>
    </div>
   
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1111</div>
            <p className="text-xs text-muted-foreground">
              Based on selected date
            </p>
          </CardContent>
        </Card>


        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today Sales
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₱{totalSales.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>


        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>


        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Products</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>


      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card
          className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
        >
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button variant="outline" asChild size="sm" className="ml-auto gap-1 hover:bg-transparent cursor-default">
              <Link href="#">
                Monthly
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
           <SalesChart/>
          </CardContent>
        </Card>

      {/*===============================RECENT ORDERS================================= */}
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
            Latest orders with pending ones first.
              </CardDescription>
          </CardHeader>



      <CardContent className="grid gap-6">
        {orders.map((order, index) => {

          const getInitials = (name) => {
            const nameParts = name.split ('');
            const firstNameInitial = nameParts[0]?.charAt(0) || '';
            const lastNameInitial = nameParts[1]?.charAt(0) || '';
            return `${firstNameInitial}${lastNameInitial}`;
          };
          return(
            <div key={index} className="flex items-center justify-between space-x-4">
            <div className="flex space-x-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt={`Avatar of ${order.customerName}`} />
                <AvatarFallback>{getInitials(order.customerName)}</AvatarFallback>
              </Avatar>

              <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{order.customerName}</p>
              <p className="text-sm text-muted-foreground">{order.product}</p>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            </div>
            <Badge variant='processing'>Processing</Badge>

          </div>
          )
      
          })}
      </CardContent>
      
        </Card>
      </div>
    </main>
  </div>
  )
}

export default Dashboard

