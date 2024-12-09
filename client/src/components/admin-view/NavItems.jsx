import { Home, ShoppingCart, Package, Users, LineChart } from 'lucide-react'

export const AdminNavItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/orders", icon: ShoppingCart, label: "Orders",},
  { to: "/products", icon: Package, label: "Products" },
  { to: "/employee", icon: Users, label: "Users" },
  { to: "/return-refund", icon: LineChart, label: "Return/Refund" },
] 