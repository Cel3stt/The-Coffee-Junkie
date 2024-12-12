import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FlaskRound, Image } from 'lucide-react'

import { ArrowLeft, Upload } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import axios from 'axios'

const AddProduct = () => {
   
      const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        sku: '',
        stock: '',
        status:'',
        lowStockThreshold: '',
        price: '',
        features: [''],
        warrantyPeriod: '',
        brand: '',
        color: ''
      })
    
      // const [successMessage, setSuccessMessage] = useState('')
      // const [errors, setErrors] = useState({})

      // const handleFeatureChange = (index, value) => {
      //   const newFeatures = [...formData.features]
      //   newFeatures[index] = value
      //   setFormData({...formData, features: newFeatures})
      // }

      // const addFeature = () => {
      //   setFormData({...formData, features: [...formData.features, '']})
      // }


    //  {/* -------------VALIDATIONS------------- */}
    //  const validateForms = () => {
    //   let newErrors = {}
    //   if (!formData.name.trim()) newErrors.name = 'Product Name is Required!'
    //   if (!formData.description.trim()) newErrors.description = 'Description is required!'
    //   if (!formData.category) newErrors.category = 'Please Choose a Category'
    //   if (!formData.sku.trim()) newErrors.sku = 'SKU is Required!'
    //   if (!formData.stock) newErrors.stock = 'Stock is required'
    //   if (!formData.status) newErrors.status = 'Status is required'
    //   if (!formData.price) newErrors.price = 'Price is required'
    //   if (!formData.color.trim()) newErrors.color = 'Color is required'
    //   if (!formData.warrantyPeriod.trim()) newErrors.warrantyPeriod = 'Warranty period is required'
    //   if (!formData.brand.trim()) newErrors.brand = 'Brand is required'

    

    //   setErrors(newErrors)
    //   return Object.keys(newErrors).length === 0
    //  }

    //  const navigate = useNavigate()
     
     const handleChange  = (e) => {
      const name = e.target.name;
      const value =  e.target.value
      setFormData(values => ({...values, [name]: value}));
     }
   

     const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/api/products', formData).then(function(response){
        console.log(response)
      })
     }

   

     
  return (
    <div className='flex min-h-screen w-full flex-col'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <div className="mb-6 flex items-center gap-2">

          <Link to='/admin/products'>
          <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
          </Button>
          </Link>

           <h1 className="text-2xl font-bold">Create New Products</h1>
           </div>
{/* 
           {successMessage && (
              <Alert variant="default" className="mb-4 border-green-500 bg-green-50 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle className='font-semibold'>Success</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            {Object.keys(errors).length > 0 && (
          <Alert variant="default" className="mb-4 border-red-500 bg-red-50 text-red-700">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Please fill in all required fields.</AlertDescription>
          </Alert>
        )} */}
           
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
                    name = "name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {/* {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>} */}
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    name = "description"
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                    {/* {errors.description && <p className='text-red-500 text-sm mt-1'>{errors.description}</p>} */}

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
                  {/* {errors.category && <p className='text-red-500 text-sm mt-1'>{errors.category}</p>} */}

                </div>
                <div>
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    name = "sku"
                    id="sku"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  />
                  {/* {errors.sku && <p className='text-red-500 text-sm mt-1'>{errors.sku}</p>} */}

                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                    name = "stock"
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    />
                    {/* {errors.stock && <p className='text-red-500 text-sm mt-1'>{errors.stock}</p>} */}

                  </div>
                  <div>
                    <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
                    <Input
                     name = "lowStockThreshold"
                      id="lowStockThreshold"
                      type="number"
                      value={formData.lowStockThreshold}
                      onChange={(e) => setFormData({ ...formData, lowStockThreshold: e.target.value })}
                    />
                     {/* {errors.lowStockThreshold && <p className='text-red-500 text-sm mt-1'>{errors.lowStockThreshold}</p>} */}

                  </div>
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    name = "price"
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                  {/* {errors.price && <p className='text-red-500 text-sm mt-1'>{errors.price}</p>} */}

                </div>

                <div>
                  <Label htmlFor="color">Color</Label>
                  <Input
                    name = "color"
                    id="color"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  />
                  {/* {errors.color && <p className='text-red-500 text-sm mt-1'>{errors.color}</p>} */}

                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, status: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="archive">Archive</SelectItem>
                      <SelectItem lvalue="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* {errors.status && <p className='text-red-500 text-sm mt-1'>{errors.status}</p>} */}

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
                {/* {formData.features.map((feature, index) => (
                  <Input
                    key={index}
                    placeholder={`Feature ${index + 1}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                  />
                ))} */}
                {/* <Button variant="outline" onClick={addFeature}>
                  Add Feature
                </Button> */}
                <Button variant="outline">
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
                   {/* {errors.warrantyPeriod && <p className='text-red-500 text-sm mt-1'>{errors.warrantyPeriod}</p>} */}

                </div>
                <div>
                  <Label htmlFor="brand">Brand/Manufacturer</Label>
                  <Input
                    id="brand"
                    placeholder="Enter the Brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                 {/* {errors.brand && <p className='text-red-500 text-sm mt-1'>{errors.brand}</p>} */}

                </div>
                
              </div>
              
            </div>

                <div className="mt-2 flex justify-end gap-4">
                    <Button variant="outline">Discard</Button>
                    <Button onClick={handleSubmit}>Save Product</Button>
                </div>
          </div>
        </div>

    
        </main>
    </div>
  )
}

export default AddProduct
