import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Image } from 'lucide-react'

import { ArrowLeft, Upload } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const AddProduct = () => {
   
      const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        sku: '',
        stock: '',
        staus:'',
        lowStockThreshold: '',
        price: '',
        features: [''],
        warrantyPeriod: '',
        brand: '',
        color: ''
      })
    
      const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features]
        newFeatures[index] = value
        setFormData({...formData, features: newFeatures})
      }

      const addFeature = () => {
        setFormData({...formData, features: [...formData.features, '']})
      }
   
     
  return (
    <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <div className="mb-6 flex items-center gap-2">
          <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
          </Button>
           <h1 className="text-2xl font-bold">Create New Products</h1>
           </div>

           
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Product Details */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Product Details</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coffee">Espresso Machine</SelectItem>
                      <SelectItem value="equipment">Coffee Grinder</SelectItem>
                      <SelectItem value="accessories">Coffee Tools</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
                    <Input
                      id="lowStockThreshold"
                      type="number"
                      value={formData.lowStockThreshold}
                      onChange={(e) => setFormData({ ...formData, lowStockThreshold: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="archive">Archive</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-2 text-lg font-semibold">Product Image</h2>
              <p className="mb-4 text-sm text-gray-500">Lipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8">
                <Upload className="mb-4 h-8 w-8 text-gray-400" />
                <div className="text-center">
                  <Button variant="outline" className="mb-2">Choose File</Button>
                  <p className="text-sm text-gray-500">Supported formats: JPEG, PNG</p>
                </div>
              </div>
            </div>

            
            {/* Features */}
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Features</h2>
              <div className="space-y-4">
                {formData.features.map((feature, index) => (
                  <Input
                    key={index}
                    placeholder={`Feature ${index + 1}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                  />
                ))}
                <Button variant="outline" onClick={addFeature}>
                  Add Feature
                </Button>
              </div>
            </div>
            

         

            {/* Additional Information */}
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="warranty">Warranty Period</Label>
                  <Input
                    id="warranty"
                    placeholder="Enter Warranty Details"
                    value={formData.warrantyPeriod}
                    onChange={(e) => setFormData({ ...formData, warrantyPeriod: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand/Manufacturer</Label>
                  <Input
                    id="brand"
                    placeholder="Enter the Brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                </div>
                
              </div>
              
            </div>

                <div className="mt-2 flex justify-end gap-4">
                    <Button variant="outline">Discard</Button>
                    <Button>Save Product</Button>
                </div>
          </div>
        </div>

    
    </main>
    </div>
  )
}

export default AddProduct
