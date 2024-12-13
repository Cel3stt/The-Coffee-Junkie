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
// client/src/config/index.js

export const addProductFormControls = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter product name",
    componentType: "input",
    type: "text"
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea"
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    options: [
      { id: "espresso-machines", label: "Espresso Machines" },
      { id: "grinders", label: "Coffee Grinders" },
      { id: "accessories", label: "Accessories" },
    ]
  },
  {
    name: "sku",
    label: "SKU",
    placeholder: "Enter SKU",
    componentType: "input",
    type: "text"
  },
  {
    name:  "totalStock",
    label: "Total Stock",
    placeholder: "Enter stock quantity",
    componentType: "input",
    type: "number"
  },
  {
    name: "lowStockThreshold",
    label: "Low Stock Threshold",
    placeholder: "Enter threshold",
    componentType: "input",
    type: "number"
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Enter price",
    componentType: "input",
    type: "number"
  },
  {
    name: "salePrice",
    label: "Sale Price",
    placeholder: "Enter price",
    componentType: "input",
    type: "number"
  },
  {
    name: "color",
    label: "Color",
    placeholder: "Enter color",
    componentType: "input",
    type: "text"
  },
  {
    name: "status",
    label: "Status",
    placeholder: "Select status",
    componentType: "select",
    options: [
      { id: "draft", label: "Draft" },
      { id: "active", label: "Active" },
      { id: "archived", label: "Archived" }
    ]
  }
];