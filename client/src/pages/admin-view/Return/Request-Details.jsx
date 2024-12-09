import React from 'react'
import { useState } from 'react'
import { ArrowLeft, Paperclip,File } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const RequestDetails= () => {
    const [adminNote, setAdminNote] = useState('')
    const [action, setAction] = useState('')
    const [rejectionReason, setRejectionReason] = useState('')
  
    // Mock data for the request details
    const requestDetails = {
      requestId: 'REQ001',
      status: 'Pending',
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        accountId: 'CUST10001',
        dateOrder: 'November 27, 2024'
      },
      order: {
        orderId: 'ORD123',
        purchaseDate: '2024-02-10',
        products: [
          { name: 'AeroGlow Desk Lamp', quantity: 1, price: 39.99 },
          { name: 'TechTonic Energy Drink (6-pack)', quantity: 1, price: 17.94 }
        ],
        totalAmount: 57.93,
        paymentMethod: 'Gcash (**** 1234)'
      },
      returnDetails: {
        reason: 'Damaged product',
        requestedRefundAmount: 39.99,
        customerComments: 'The desk lamp arrived with a cracked base. I would like to return it for a refund.',
        attachments: ['damaged-lamp.jpg']
      }
    }
  
    const handleActionChange = (value) => {
      setAction(value)
    }
  
    const handleSubmitAction = () => {
      console.log('Action submitted:', action)
      console.log('Admin note:', adminNote)
      if (action === 'reject') {
        console.log('Rejection reason:', rejectionReason)
      }
      // Here you would typically send this data to your backend
    }
  
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>

      <div className='flex justify-between'>
              <div className="mb-6 flex items-center gap-2">

                <Link to='/return-refund'>
                <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
                </Button>
                </Link>

                <h1 className="text-2xl font-bold">Request Details</h1>
                <div className="div">
                  
                </div>
            </div>
            
            <div>
            <Button
                          size="sm"
                          variant="outline"
                          className="h-7 gap-1 text-sm"
                        >
                          <File className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Export as PDF</span>
                        </Button>
            </div>


          </div>
            <Card>
                <CardContent className='p-6 text-sm'>
                <div className="space-y-2">
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{requestDetails.requestId}</h2>
                <Badge variant='processing'></Badge>
                </div>
                <p className="text-sm text-muted-foreground">{requestDetails.customer.dateOrder}</p>
            </div>
                </CardContent>
            </Card>


            
            <div className="grid gap-6 md:grid-cols-2">
          {/* Customer Information */}
          <Card className="bg-card/50">
            <CardHeader>
              <h3 className='font-semibold'>Customer Information</h3>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <dt className="text-muted-foreground">Name:</dt>
                <dd>John Doe</dd>
                <dt className="text-muted-foreground">Email:</dt>
                <dd>john.doe@example.com</dd>
                <dt className="text-muted-foreground">Phone:</dt>
                <dd>+1 (555) 123-4567</dd>
                <dt className="text-muted-foreground">Account ID:</dt>
                <dd>CUST10001</dd>
              </dl>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card className="bg-card/50">
          <CardHeader>
              <h3 className='font-semibold'>Order Details</h3>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-sm text-muted-foreground">Order ID:</div>
                <div>{requestDetails.order.orderId}</div>
                <div className="text-sm text-muted-foreground">Purchase Date:</div>
                <div>{requestDetails.order.purchaseDate}</div>
                <div className="text-sm text-muted-foreground">Total Amount:</div>
                <div>{requestDetails.order.totalAmount}</div>
                <div className="text-sm text-muted-foreground">Payment Method:</div>
                <div>{requestDetails.order.paymentMethod}</div>
              </div>
            </CardContent>
          </Card>


          
        </div>
         {/* Products Ordered */}
         <Card className="bg-card/50">
          <CardHeader>
                <h3 className='font-semibold'>Products Ordered</h3>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent" >
                  <TableHead className="w-[50%]">Product</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
            {requestDetails.order.products.map((product, index) => (
                <TableRow className="hover:bg-transparent" key={index}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-right">{product.quantity}</TableCell>
                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                </TableRow>
            ))}
            </TableBody>


            </Table>
          </CardContent>
        </Card>

         {/* Return/Refund Details */}
         <Card className="bg-card/50">
          <CardHeader>
            <h3 className='font-semibold'>Return/Refund Details</h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Reason for Request:
                </div>
                <div>{requestDetails.returnDetails.reason}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Requested Refund Amount:
                </div>
                <div>{requestDetails.returnDetails.requestedRefundAmount}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Customer Comments:
                </div>
                <div>
                 {requestDetails.returnDetails.customerComments}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Attachments:
                </div>
                <Button variant="outline" size="sm" className="gap-2 text-xs">
                  <Paperclip className="h-4 w-4" />
                  {requestDetails.returnDetails.attachments}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>


         {/* Admin Notes */}
         <Card className="bg-card/50">
          <CardHeader>
            <h3 className='font-semibold'>Add Notes For Customer</h3>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add internal notes here..."
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

         {/* Actions */}
         <Card className="bg-card/50">
          <CardHeader>
            <h3 className='font-semibold'>Request Handling</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select defaultValue="request-info">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="request-info">Request More Information</SelectItem>
                <SelectItem value="approve">Approve Refund</SelectItem>
                <SelectItem value="deny">Reject Refund</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-end">
            <Button size="">
              Submit
            </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      

      

    </div>
    </div>
  )
}

export default RequestDetails
