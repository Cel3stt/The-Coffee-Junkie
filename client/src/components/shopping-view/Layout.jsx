import ShoppingHeader from './Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ShoppingLayout() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>

        <ShoppingHeader/>
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout