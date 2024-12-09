 import React from 'react'
import { Outlet } from 'react-router-dom'
 
 function AuthLayout() {
   return (
    <div className='flex flex-col bg-white overflow-hidden'>

    <main className='flex flex-col w-full'>
        <Outlet/>
    </main>
</div>
   )
 }
 
 export default AuthLayout