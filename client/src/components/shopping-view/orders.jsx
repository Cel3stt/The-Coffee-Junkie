import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Package } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

function ShoppingOrders() {
  const orders = [
    {
      id: "ORD-2024-001",
      items: [
        { name: "Coffee Machine", quantity: 1 },
        { name: "Coffee Beans", quantity: 2 }
      ],
      date: "2024-01-06",
      status: "pending",
      total: 1299.99
    },
    {
      id: "ORD-2024-002",
      items: [
        { name: "Espresso Maker", quantity: 1 }
      ],
      date: "2024-01-05",
      status: "confirmed",
      total: 599.99
    },
    {
      id: "ORD-2024-003",
      items: [
        { name: "Coffee Grinder", quantity: 1 },
        { name: "Filter Papers", quantity: 3 }
      ],
      date: "2024-01-04",
      status: "delivered",
      total: 249.99
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100'
      case 'delivered':
        return 'bg-green-100 text-green-800 hover:bg-green-100'
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
    }
  }

  const formatItemNames = (items) => {
    if (items.length === 1) {
      return items[0].name
    }
    if (items.length === 2) {
      return `${items[0].name} and ${items[1].name}`
    }
    return `${items[0].name}, ${items[1].name}, and ${items.length - 2} more`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Orders</h1>
          <p className="text-sm text-muted-foreground mt-1">
            View and manage your orders
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Order Item(s)</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4 text-muted-foreground" />
                            <span className="truncate max-w-[200px]">
                              {formatItemNames(order.items)}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <ul>
                            {order.items.map((item, index) => (
                              <li key={index}>{item.name} (x{item.quantity})</li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={getStatusColor(order.status)}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>₱ {order.total.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="default" size="sm">
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default ShoppingOrders
