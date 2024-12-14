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
    type: "text",
    placeholder: "Enter product title",
    componentType: "input",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter product description",
    componentType: "textarea",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    placeholder: "Select category",
    componentType: "select",
    options: [
      { id: "electronics", label: "Electronics" },
      { id: "clothing", label: "Clothing" },
      { id: "books", label: "Books" },
    ],
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "Enter price",
    componentType: "input",
    required: true,
  },
  {
    name: "salePrice",
    label: "Sale Price",
    type: "number",
    placeholder: "Enter sale price",
    componentType: "input",
  },
  {
    name: "sku",
    label: "SKU",
    type: "text",
    placeholder: "Enter SKU",
    componentType: "input",
  },
  {
    name: "totalStock",
    label: "Total Stock",
    type: "number",
    placeholder: "Enter total stock",
    componentType: "input",
    required: true,
  },
  {
    name: "brand",
    label: "Brand",
    type: "text",
    placeholder: "Enter brand name",
    componentType: "input",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    placeholder: "Select status",
    componentType: "select",
    options: [
      { id: "draft", label: "Draft" },
      { id: "active", label: "Active" },
    ],
  },
  {
    name: "color",
    label: "Color",
    type: "text",
    placeholder: "Enter color",
    componentType: "input",
  },
  {
    name: "lowStockThreshold",
    label: "Low Stock Threshold",
    type: "number",
    placeholder: "Enter low stock threshold",
    componentType: "input",
  },
  {
    name: "warrantyPeriod",
    label: "Warranty Period",
    type: "text",
    placeholder: "Enter warranty period",
    componentType: "input",
  },
];

export const shoppingViewMenuItems = [
  {
    id: 'home', 
    label: "Home",
    path : '/shop/home'
  },
  
]