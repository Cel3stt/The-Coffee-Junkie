import React from 'react'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import UserCartItemsContent from './Cart-items-content'


function UserCartWrapper({cartItems}) {
  return (
    <SheetContent classname='sm:max-w-md'>
        <SheetHeader>
        <SheetTitle>Cart Items</SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-4">
          {
            cartItems && cartItems.length > 0 ?
            cartItems.map(item => <UserCartItemsContent cartItem={item}/>) : null
          }
        </div>

        <div className="mt-8 space-y-4">
            <div className="flex justify-between">
                <span className='font-bold'>Total</span>
                <span className='font-bold'>₱1000</span>
            </div>
        </div>

        <Button className='w-full mt-5'>Checkout</Button>
    </SheetContent>
  )
}

export default UserCartWrapper