import React from 'react'
import { Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Shop/RectangleLogo.png'
function ShoppingFooter() {
    return (
        <footer className="w-full bg-muted">
      <div className="container mx-auto px-4 pt-8 pb-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-2">
              <Link to="/home" className="flex items-center gap-2">
                <img src={Logo} alt="The Coffee Junkie" />
                <div className="flex flex-col">
                  <span className="text-bas font-bold">THE COFFEE JUNKIE</span>
                  <span className="text-sm text-muted-foreground">Brew, Create, Innovate</span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Coffee Junkie, we are passionate about crafting the perfect coffee experience. 
              With a commitment to innovation and quality, we provide state-of-the-art coffee machines 
              designed to meet the evolving needs of both coffee enthusiasts and businesses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-semibold mb-4">Pages</h3>
            <div className="grid gap-3">
              <Link to="/shop/home" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/shop/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link to="/shop/listing" className="text-sm text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Shopping */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Shopping</h3>
            <div className="grid gap-3">
              <Link href="/delivery" className="text-sm text-muted-foreground hover:text-foreground">
                Delivery
              </Link>
              <Link href="/payment" className="text-sm text-muted-foreground hover:text-foreground">
                Payment
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <div className="grid gap-3">
              <Link to="/shop/termsAndConditions" className="text-sm text-muted-foreground hover:text-foreground">
                Terms and Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-3 border-t text-center text-sm text-muted-foreground">
          © 2024 The Coffee Junkie. All rights reserved
        </div>
      </div>
    </footer>
      )
    }
    
   
export default ShoppingFooter
