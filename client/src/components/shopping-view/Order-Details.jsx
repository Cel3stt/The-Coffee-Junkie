import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Package, Calendar } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);



  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">Order Details</DialogTitle>
      </DialogHeader>
      <div className="grid gap-6">
        {/* Order Status */}
        <Card>
          <CardHeader className="pb-2 font-bold"> Order ID
            <CardTitle className="text-lg font-medium">
              {orderDetails?._id}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant={orderDetails?.orderStatus} className="py-1 px-3">
                {orderDetails?.orderStatus}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer and Payment Info */}
           {/* Customer and Payment Info */}
           <div className="grid md:grid-cols-2 gap-6">
            {/* Customer Information */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Customer Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Name:</dt>
                    <dd>{user?.userName}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Shipping Address:</dt>
                    <dd>{orderDetails?.addressInfo?.address}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">City:</dt>
                    <dd>{orderDetails?.addressInfo?.city}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Postal Code:</dt>
                    <dd>{orderDetails?.addressInfo?.postalCode}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Phone Number:</dt>
                    <dd>{orderDetails?.addressInfo?.phone}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Notes:</dt>
                    <dd>{orderDetails?.addressInfo?.notes || '-'}</dd>
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
                <dl className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Total Amount:</dt>
                    <dd>₱ {orderDetails?.totalAmount?.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Payment Method:</dt>
                    <dd>{orderDetails?.paymentMethod}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Date:</dt>
                    <dd>{orderDetails?.orderDate.split("T")[0]}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Payment Status:</dt>
                    <dd>{orderDetails?.paymentStatus}</dd>
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
                    <th className="py-2 px-4 text-center font-medium">
                      Quantity
                    </th>
                    <th className="py-2 px-4 text-right font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                {
              orderDetails?.cartItems && orderDetails?.cartItems.length > 0 ?
              orderDetails?.cartItems.map(item =>  <tr className="border-t">
                <td className="py-2 px-4">{item.title}</td>
                <td className="py-2 px-4 text-center">{item.quantity}</td>
                <td className="py-2 px-4 text-right">₱ {item.price}</td>
              </tr>
) : null
            }
                 
                  <tr className="border-t font-medium">
                    <td colSpan="2" className="py-2 px-4 text-right">
                      Total:
                    </td>
                    <td className="py-2 px-4 text-right font-bold text-lg">₱ {orderDetails?.totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Order Tracking
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Order Tracking
            </CardTitle>
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
          {/* </CardContent>
        </Card> */} 
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;
