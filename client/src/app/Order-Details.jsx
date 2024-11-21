import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    ArrowLeft
  } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
const OrderDetails = () => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
       <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>

      

          <div className='flex justify-between'>
              <div className="mb-6 flex items-center gap-2">

                <Link to='/orders'>
                <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
                </Button>
                </Link>

                <h1 className="text-2xl font-bold">Order Details</h1>
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
          <h2 className="text-lg font-medium">Order: ORD001</h2>
          <Badge variant='processing'>
            Processing
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Date: November 27, 2024</p>
      </div>
        </CardContent>
       </Card>



      <Card>
      <CardContent className="p-6 text-sm">
                
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Customer Information</h3>
          <div className="grid gap-3">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Name:</span>
              <span>Momo Doe</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Email:</span>
              <span>momo@gmail.com</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Phone:</span>
              <span>09245678901</span>
            </div>
            
            <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
          </div>
        </div>
        </div>



               
               
       </CardContent>
      </Card>

     

      <Card>
      <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Items</div>
                  <div className="font-normal">Date: November 27, 2024</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
               
          
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Gcash
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
       </CardContent>
      </Card>

       </main>
    </div>
  )
}

export default OrderDetails
