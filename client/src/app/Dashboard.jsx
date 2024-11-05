import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import {
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"

import React from 'react'

const Dashboard = () => {
  return (
   <SidebarProvider>
     <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
   </SidebarProvider>
  )
}

export default Dashboard
