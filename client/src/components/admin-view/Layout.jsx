import { Outlet } from "react-router-dom"
import AdminSidebar from "./Sidebar"
import AdminHeader from "./Header"

const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[220px_minmax(0,_1fr)] lg:grid-cols-[280px_minmax(0,_1fr)] overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block">
        <AdminSidebar/>
      </div>

      <div className="flex flex-col">
        <AdminHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-2">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout