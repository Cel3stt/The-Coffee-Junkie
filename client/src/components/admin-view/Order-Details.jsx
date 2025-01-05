// import React from 'react'
// import { useState } from 'react'
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { FileText } from 'lucide-react'
// import { useEffect } from 'react'
// function AdminOrderDetailsView() {
//     const [orderStatus, setOrderStatus] = useState('')

//   useEffect(() => {
//     if (order) {
//       setOrderStatus(order.status)
//     }
//   }, [order])

//   const handleStatusUpdate = () => {
//     if (order) {
//       console.log(`Updating order ${order.id} status to ${orderStatus}`)
//       // Add your status update logic here
//     }
//   }

//   if (!order) return null

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-3xl">
//         <DialogHeader>
//           <div className="flex items-center justify-between">
//             <div className="space-y-1">
//               <DialogTitle>Order Details</DialogTitle>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground">Order: {order.id}</span>
//                 <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
//                   {orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1)}
//                 </Badge>
//               </div>
//             </div>
//             <Button variant="outline" size="sm" className="gap-2">
//               <FileText className="h-4 w-4" />
//               Export as PDF
//             </Button>
//           </div>
//         </DialogHeader>

//         <div className="grid gap-6">
//           {/* Customer and Payment Info */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Customer Information */}
//             <div className="space-y-4">
//               <h3 className="font-semibold">Customer Information</h3>
//               <div className="grid gap-2 text-sm">
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Name:</span>
//                   <span className="col-span-2">{order.shipping?.name}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Shipping Address:</span>
//                   <span className="col-span-2">{order.shipping?.address}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">City:</span>
//                   <span className="col-span-2">{order.shipping?.city}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Postal Code:</span>
//                   <span className="col-span-2">{order.shipping?.postalCode}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Phone Number:</span>
//                   <span className="col-span-2">{order.shipping?.phone}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Notes:</span>
//                   <span className="col-span-2">{order.shipping?.notes || '-'}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Details */}
//             <div className="space-y-4">
//               <h3 className="font-semibold">Payment Details</h3>
//               <div className="grid gap-2 text-sm">
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Total Amount:</span>
//                   <span className="col-span-2">₱ {order.total?.toLocaleString()}</span>
//                 </div>
//                 <div className="grid grid-cols-3">
//                   <span className="text-muted-foreground">Payment Method:</span>
//                   <span className="col-span-2">{order.paymentMethod}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Order Items */}
//           <div className="space-y-4">
//             <h3 className="font-semibold">Order Items</h3>
//             <div className="border rounded-lg">
//               <table className="w-full text-sm">
//                 <thead className="bg-muted/50">
//                   <tr>
//                     <th className="py-2 px-4 text-left font-medium">Item</th>
//                     <th className="py-2 px-4 text-center font-medium">Quantity</th>
//                     <th className="py-2 px-4 text-right font-medium">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {order.items?.map((item, index) => (
//                     <tr key={index} className="border-t">
//                       <td className="py-2 px-4">{item.name}</td>
//                       <td className="py-2 px-4 text-center">{item.quantity}</td>
//                       <td className="py-2 px-4 text-right">₱ {item.price?.toLocaleString()}</td>
//                     </tr>
//                   ))}
//                   <tr className="border-t bg-muted/50">
//                     <td colSpan="2" className="py-2 px-4 font-medium text-right">Total:</td>
//                     <td className="py-2 px-4 font-medium text-right">₱ {order.total?.toLocaleString()}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Order Status Update */}
//           <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 border-t">
//             <div className="flex items-center gap-4">
//               <span className="text-sm font-medium">Update Status:</span>
//               <Select value={orderStatus} onValueChange={setOrderStatus}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Select status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="confirmed">Confirmed</SelectItem>
//                   <SelectItem value="delivered">Delivered</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Button onClick={handleStatusUpdate}>
//               Update Order Status
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default AdminOrderDetailsView
