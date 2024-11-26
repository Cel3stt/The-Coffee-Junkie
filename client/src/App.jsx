
import './App.css'
import Login from './app/Login'
import Dashboard from './app/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import React from 'react'
import Orders from './app/Orders/Orders'
import OrderDetails from './app/Orders/Order-Details'
import AddProduct from './app/Products/AddProduct'
import Employee from './app/Employee/Employee'
import ProductDetails from './app/Products/ProductDetails'
import ReturnRefund from './app/Return/Return-Refund'
import RequestDetails from './app/Return/Request-Details'
import Products from './app/Products/Products'
import AdminAccountSettings from './app/AdminSetting'
import EmployeeSetting from './app/Employee/EmployeeSetting'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/details' element={<OrderDetails/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/addProducts' element={<AddProduct/>}/>
          <Route path = '/product-details' element={<ProductDetails/>}/>
          <Route path='/employee' element={<Employee/>}/>
          <Route path='/return-refund' element={<ReturnRefund/>}/>
          <Route path='/request' element={<RequestDetails/>}/>
          <Route path='/settings' element={<AdminAccountSettings/>}/>
          <Route path='/employeeAccount' element={<EmployeeSetting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
