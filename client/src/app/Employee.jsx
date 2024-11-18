import React from 'react'
import { Input } from '@/components/ui/input'
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
  } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Employee = () => {
    const users = [

    {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        role: 'viewer',
        lastLogin: 'Oct. 30, 2024, 10:30 AM',
        userProfile: "/placeholder.svg"
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        role: 'viewer',
        lastLogin: 'Oct. 30, 2024, 10:30 AM',
        userProfile: "/placeholder.svg"
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        role: 'viewer',
        lastLogin: 'Oct. 30, 2024, 10:30 AM',
        userProfile: "/placeholder.svg"
    },
    
]
 
  return (
    <div className='client/src/app/AddProduct.jsx'>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>

        <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Employees</h1>

        {/*==========================SEARCH && FILTER ============================= */}
            <div className="flex gap-3 items-center justify-end">
   
            
            <Input
              type="search"
              placeholder="Search Employee..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
             <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Employee
                  </span>
                </Button>
             
          
         </div>

        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user, index) => (
                <Card key={index} className="p-6 max-w-[450px]">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                            <Avatar className='h-12 w-12'>
                                <AvatarImage src = {user.userProfile} alt = {user.name}></AvatarImage>
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>

                            <div>
                                <h3 className="font-semibold">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                 </div>
                 <div className="mt-4 py-5 px-2 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Role:</span>
              <span>{user.role}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Last Login:</span>
              <span>{user.lastLogin}</span>
            </div>
          </div>
                </Card>
            ))}
        </div>
        </main>
    </div>
  )
}

export default Employee
