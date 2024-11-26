import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { File, Home, LineChart, ListFilter, MoreHorizontal, Package, Package2, PanelLeft, PlusCircle, Search, Settings, ShoppingCart, Users2, X } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  DropdownMenu,

  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'

const Employee = () => {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    username: '',
    address: '',
    role: '',
    password: '',
    confirmPassword: '',
  })


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setOpen(false)
    }

    const handleViewDetails = (user) => {
      setSelectedUser(user)
      setViewDetailsOpen(true)
    }
    const users = [
      {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        phone: '09245678901',
        address: 'Phase 7c, Brgy. 176 Bagong Silang Caloocan City',
        role: 'viewer',
        lastLogin: 'Oct. 30, 2024, 10:30 AM',
        userProfile: "/placeholder.svg"
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        phone: '09245678901',
        address: 'Phase 7c, Brgy. 176 Bagong Silang Caloocan City',
        role: 'viewer',
        lastLogin: 'Oct. 30, 2024, 10:30 AM',
        userProfile: "/placeholder.svg"
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        phone: '09245678901',
        address: 'Phase 7c, Brgy. 176 Bagong Silang Caloocan City',
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
                <Dialog open={addUserOpen} onOpenChange={setAddUserOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Employee
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new user
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="fullname">Fullname</Label>
                      <Input
                        id="fullname"
                        name="fullname"
                        placeholder="John Doe"
                        value={formData.fullname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoes@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Select name="role" onValueChange={(value) => handleInputChange({ target: { name: 'role', value }})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <DialogFooter className="gap-2 sm:gap-0">
                    <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create New User</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
             
          
         </div>

        </div>

        <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <Card key={index} className="p-6 max-w-[450px]">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src={user.userProfile} alt={user.name}></AvatarImage>
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      aria-haspopup="true"
                      size="icon"
                      variant="ghost"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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

           {/* View Details Dialog */}
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>
                Enter the details of the new user
              </DialogDescription>
            </DialogHeader>
            {selectedUser && (
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Name:</Label>
                  <div>{selectedUser.name}</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Email:</Label>
                  <div>{selectedUser.email}</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Phone:</Label>
                  <div>{selectedUser.phone}</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Address:</Label>
                  <div>{selectedUser.address}</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Permission:</Label>
                  <div className="capitalize">{selectedUser.role}</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Last Login:</Label>
                  <div>{selectedUser.lastLogin}</div>
                </div>
              </div>
            )}
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        </main>
    </div>
  )
}

export default Employee
