import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react"

export const registerFormControls = [
    {
        name: "userName",
        placeholder: "Enter your username",
        type: "text",
        label: "Username",
        componentType: "input"
    },
    {
        name: "email",
        placeholder: "Enter your email",
        type: "email",
        label: "Email",
        componentType: "input"
    },
    {
        name: "password",
        placeholder: "Enter your password",
        type: "password",
        label: "Password",
        componentType: "input"
    }
]

export const loginFormControls = [
 
    {
        name: 'email',
        label: 'Email',
        Placeholder: 'john@gmail.com',
        componentType: 'input',
        type: 'email'
    },


        {
        name: 'password',
        label: 'Password',
        Placeholder: '',
        componentType: 'input',
        type: 'password'
    },

]

export const adminSidebarMenuItems = [
    {
        id: 'dashboard',
        label : "Dashboard",
        path: '/admin/dashboard',
        icon: Home
    },
    {
        id: 'orders',
        label : "Orders",
        path: '/admin/orders',
        icon: ShoppingCart
    },
    {
        id: 'products',
        label : "Products",
        path: '/admin/products',
        icon: Package
    },{
        id: 'users',
        label : "Users",
        path: '/admin/employee',
        icon: Users
        
    },
    {
        id: 'return-refund',
        label : "ReturnRefund",
        path: '/admin/Return / Refund',
        icon: LineChart
    }
]