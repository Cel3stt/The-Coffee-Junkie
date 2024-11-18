
import './App.css'
import Login from './app/Login'
import Dashboard from './app/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import React from 'react'
import Orders from './app/Orders'
import OrderDetails from './app/Order-Details'
import Products from './app/Products'
import AddProduct from './app/AddProduct'
import Employee from './app/Employee'

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
          <Route path='/employee' element={<Employee/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
