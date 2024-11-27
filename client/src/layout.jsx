import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, ShoppingCart, Users } from 'lucide-react'

import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import Notifications from './components/Notifications'

const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/orders", icon: ShoppingCart, label: "Orders",},
  { to: "/products", icon: Package, label: "Products" },
  { to: "/employee", icon: Users, label: "Users" },
  { to: "/return-refund", icon: LineChart, label: "Return/Refund" },
]

const SidebarContent = () => (
  <div className="flex h-full max-h-screen flex-col gap-2">
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span>The Coffee Junkie</span>
      </Link>
     
    </div>
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map(({ to, icon: Icon, label, badge }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon className="h-4 w-4" />
          {label}
          {badge && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {badge}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  </div>
)

const Layout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[220px_minmax(0,_1fr)] lg:grid-cols-[280px_minmax(0,_1fr)] overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block">
        <SidebarContent />
      </div>

      <div className="flex flex-col">
        
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
  {/* Sidebar Toggle Button and Logo */}
  <div className="flex items-center gap-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[300px]">
        <SidebarContent />
      </SheetContent>
    </Sheet>

    <Link to="/" className="md:hidden flex items-center gap-2 font-semibold">
      <Package2 className="h-6 w-6" />
      <span>The Coffee Junkie</span>
    </Link>
  </div>

  {/* Notifications and User Menu aligned to the right */}
  <div className="flex items-center ml-auto space-x-3">

    <Notifications/>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
      </header>


        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-2">
          <Outlet />
        </main>

        
      </div>
    </div>
  )
}

export default Layout