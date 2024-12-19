import { Home, ShoppingCart, Package, LineChart } from 'lucide-react'

export const AdminNavItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/admin/orders", icon: ShoppingCart, label: "Orders",},
  { to: "/admin/products", icon: Package, label: "Products" },
  { to: "/admin/return-refund", icon: LineChart, label: "Return/Refund" },
] 