import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

function ShoppingContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Add your form submission logic here
      }
      return (
        <div className="container mx-auto px-4 py-16 mt-11">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-500">
              Any question or remarks? Just write us a message!
            </p>
          </div>
    
          {/* Contact Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-black text-white rounded-[20px] p-8">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-gray-400 mb-12">Say something to start a chat!</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-[#1A1A1A] p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <p className="text-lg">0915 967 8997</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-[#1A1A1A] p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="text-lg">thecoffeejunkie@gmail.com</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-[#1A1A1A] p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="text-lg leading-tight">
                    Phase 3 Package 3 Block 73 Lot 13,<br />
                    Brgy. 176, Caloocan, Philippines
                  </p>
                </div>
              </div>
            </div>
    
            {/* Contact Form */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                      required
                    />
                  </div>
                </div>
    
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                      required
                    />
                  </div>
                </div>
    
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Your message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[150px] border-0 border-b border-gray-200 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-black resize-none"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
    
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}

export default ShoppingContactUsPage
