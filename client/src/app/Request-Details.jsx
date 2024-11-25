import React from 'react'
import { useState } from 'react'
import { ArrowLeft, Paperclip } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        accountId: 'CUST10001'
      },
      order: {
        orderId: 'ORD123',
        purchaseDate: '2024-02-10',
        products: [
          { name: 'AeroGlow Desk Lamp', quantity: 1, price: 39.99 },
          { name: 'TechTonic Energy Drink (6-pack)', quantity: 1, price: 17.94 }
        ],
        totalAmount: 57.93,
        paymentMethod: 'Credit Card (**** 1234)'
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

      <div className="flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-2xl font-bold">Request Details</h1>
      </div>
            <Card>
                <CardContent className='p-6 text-sm'>
                <div className="space-y-2">
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{RequestDetails[requestDetails.order]}</h2>
                <Badge variant='processing'>
                    Processing
                </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Date: November 27, 2024</p>
            </div>
                </CardContent>
            </Card>
      </main>
      

      

    </div>
    </div>
  )
}

export default RequestDetails
