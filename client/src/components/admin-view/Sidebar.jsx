import { Link, useNavigate } from "react-router-dom"
import { Home, Package, Package2, ShoppingCart, Users, LineChart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

import { Fragment } from "react"


import React from 'react'

const adminSidebarMenuItems = [
  { to: "/admin/dashboard", icon: Home, label: "Dashboard" },
  { to: "/admin/orders", icon: ShoppingCart, label: "Orders",},
  { to: "/admin/products", icon: Package, label: "Products" },
  { to: "/admin/employee", icon: Users, label: "Users" },
  { to: "/admin/return-refund", icon: LineChart, label: "Return/Refund" },
] 


function MenuItems({ setOpen }) {


  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-4 gap-1">
    {adminSidebarMenuItems.map(({ to, icon: Icon, label, badge }) => (
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
  );
}
function AdminSidebar() {
  const navigate =  useNavigate()
  return (
   <Fragment>
    <aside>
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div onClick={() => navigate('/admin/dashboard')} className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 cursor-pointer">

          <Package2 className="h-6 w-6" />
          <span className="flex items-center gap-2 font-semibold">The Coffee Junkie</span>
        
      </div>
      
    </div>
    <MenuItems/>
    </aside>
   </Fragment>
  )
}

export default AdminSidebar
