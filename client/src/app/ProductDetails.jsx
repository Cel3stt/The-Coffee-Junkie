import React from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'


const ProductDetails = () => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
      <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Product Details</h1>
        </div>
      
        <div className="container mx-auto p-4">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-muted/10 rounded-lg p-4 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Lelit Bianca V3 Dual Boiler PID Espresso Machine"
              className="max-w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Lelit Bianca V3 Dual Boiler PID Espresso Machine PL162T
              </h1>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold">₱ 50,000</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Stocks:</p>
                  <p className="text-muted-foreground">12</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Brand:</p>
                  <p className="text-muted-foreground">Lelit</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Categories:</p>
                  <p className="text-muted-foreground">Espresso Machine</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Warranty Period:</p>
                  <p className="text-muted-foreground">2 Years</p>
                </div>
                <div>
                  <p className="text-sm font-medium">SKU:</p>
                  <p className="text-muted-foreground">PL162T-BV3</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Color:</p>
                  <p className="text-muted-foreground">Polished Stainless Steel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Features Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dual Boiler System</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>PID Temperature Control</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Flow Control Paddle</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Advanced Pressure Profiling</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Stainless Steel Build</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Water Reservoir and Direct Plumb</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
      </main>
    </div>
  )
}

export default ProductDetails
