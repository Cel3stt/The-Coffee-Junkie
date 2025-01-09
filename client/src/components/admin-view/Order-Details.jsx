import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { useEffect } from "react";
import { Separator } from "../ui/separator";
import CommonForm from "../common/Form";
import { useSelector } from "react-redux";

const initialFormData = {
  status: "",
};
function AdminOrderDetailsView({ orderDetails }) {
  // const [orderStatus, setOrderStatus] = useState('')
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);

  function handleUpdateStatus(event) {
    event.preventDefault();
  }
  // function getStatusColor(status) {
  //     switch (status?.toLowerCase()) {
  //       case 'processing':
  //       case 'pending':
  //         return 'bg-yellow-100 text-yellow-800'
  //       case 'confirmed':
  //         return 'bg-blue-100 text-blue-800'
  //       case 'delivered':
  //         return 'bg-green-100 text-green-800'
  //       default:
  //         return 'bg-gray-100 text-gray-800'
  //     }
  //   }

  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <DialogTitle className="mt-5">Order Details</DialogTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Order: {orderDetails?._id}
              </span>
              <Badge variant={orderDetails?.orderStatus} className="py-1 px-3">
                {orderDetails?.orderStatus}
              </Badge>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            Export as PDF
          </Button>
        </div>
      </DialogHeader>
      <Separator />

      {/*====================== Customer Information And Shipping Details==========================*/}
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        {/* Customer Information */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Customer Information</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Name:</span>
              <span className="text-sm">{user?.userName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Shipping Address:</span>
              <span className="text-sm">{orderDetails?.addressInfo?.address}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">City:</span>
              <span className="text-sm">{orderDetails?.addressInfo?.city}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Postal Code:</span>
              <span className="text-sm">{orderDetails?.addressInfo?.postalCode}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Phone Number:</span>
              <span className="text-sm">{orderDetails?.addressInfo?.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Notes:</span>
              <span className="text-sm">{orderDetails?.addressInfo?.notes || '-'}</span>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Payment Details</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Amount:</span>
              <span className="text-sm">₱ {orderDetails?.totalAmount?.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Payment Method:</span>
              <span className="text-sm">{orderDetails?.paymentMethod}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Date:</span>
              <span className="text-sm">
                {orderDetails?.orderDate ? orderDetails.orderDate.split("T")[0] : '-'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Payment Status:</span>
              <span className="text-sm">{orderDetails?.paymentStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/*====================== Order Status Update=========================*/}
      <div className="space-y-4">
        <h3 className="font-semibold">Order Items</h3>
        <div className="border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="py-2 px-4 text-left font-medium">Item</th>
                <th className="py-2 px-4 text-center font-medium">Quantity</th>
                <th className="py-2 px-4 text-right font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item) => (
                    <tr className="border-t">
                      <td className="py-2 px-4">{item.title}</td>
                      <td className="py-2 px-4 text-center">{item.quantity}</td>
                      <td className="py-2 px-4 text-right">₱ {item.price}</td>
                    </tr>
                  ))
                : null}

              <tr className="border-t bg-muted/50">
                <td colSpan="2" className="py-2 px-4 font-medium text-right">
                  Total:
                </td>
                <td className="py-2 px-4 font-medium text-right">
                  ₱ {orderDetails?.totalAmount?.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*====================== Order Items==========================*/}
      <div className="flex flex-col gap-2 items-start justify-between pt-4 border-t">
        <div className="w-full">
          <CommonForm
            formControls={[
              {
                name: "status",
                label: "Order Status",
                type: "select",
                placeholder: "Order Status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "processing", label: "Processing" },
                  { id: "shipped", label: "Shipped" },
                  { id: "delivered", label: "Delivered" },
                  { id: "rejected", label: "Rejected" },
                ],
              },
            ]}
            formData={formData}
            setFormData={setFormData}
            buttonText="Update Order Status"
            onSubmit={handleUpdateStatus}
            inputClassName="w-full"
            labelClassName="text-sm font-medium"
            buttonClassName="w-full bg-black text-white"
          />
        </div>
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
