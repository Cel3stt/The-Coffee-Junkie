import { SheetContent } from "@/components/ui/sheet"
import AdminSidebar from './AdminSidebar'

const AdminHeader = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SheetContent side="left" className="p-0 w-[300px]">
        <AdminSidebar />
      </SheetContent>
    </header>
  )
}

export default AdminHeader 