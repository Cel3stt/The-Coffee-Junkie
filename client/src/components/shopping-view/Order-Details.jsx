import React from 'react'
import {  DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Package, Calendar } from 'lucide-react'
import { useState } from 'react'
function ShoppingOrderDetailsView() {
    
  return (
    <DialogContent className="max-w-3xl">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold">Order Details</DialogTitle>
    </DialogHeader>
    <div className="grid gap-6">
      {/* Order Status */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Order Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Badge text-sm px-2 py-1>
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer and Payment Info */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Customer Information */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-1 text-sm">
              <div className="grid grid-cols-3">
                <dt className="font-medium">Name:</dt>
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Shipping Address:</dt>
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">City:</dt>
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Postal Code:</dt>
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Phone Number:</dt>
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Notes:</dt>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-1 text-sm">
              <div className="grid grid-cols-3">
                <dt className="font-medium">Total Amount:</dt>
               
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Payment Method:</dt>
              
              </div>
              <div className="grid grid-cols-3">
                <dt className="font-medium">Date:</dt>
               
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Order Items */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="py-2 px-4 text-left font-medium">Item</th>
                  <th className="py-2 px-4 text-center font-medium">Quantity</th>
                  <th className="py-2 px-4 text-right font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
              
                  <tr className="border-t">
                    <td className="py-2 px-4">item.name</td>
                    <td className="py-2 px-4 text-center">item.quantity</td>
                    <td className="py-2 px-4 text-right">₱ item.price</td>
                  </tr>
                
                <tr className="border-t font-medium">
                  <td colSpan="2" className="py-2 px-4 text-right">Total:</td>
                  <td className="py-2 px-4 text-right">₱ order.total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Tracking */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Order Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm">
            <Package className="h-4 w-4 text-muted-foreground" />
            <span>Tracking Number: </span>
          </div>
          {/* {order.trackingUrl && (
            <a
              href={order.trackingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              Track your package
            </a>
          )} */}
        </CardContent>
      </Card>
    </div>
  </DialogContent>
  )
}

export default ShoppingOrderDetailsView
