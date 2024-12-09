import { Link } from "react-router-dom"
import { Package2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { AdminNavItems } from "./NavItems"
const AdminSidebar = () => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>The Coffee Junkie</span>
        </Link>
      </div>
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {AdminNavItems.map(({ to, icon: Icon, label, badge }) => (
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
}

export default AdminSidebar 