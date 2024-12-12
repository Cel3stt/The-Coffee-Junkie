import './App.css'

import Dashboard from './pages/admin-view/Dashboard'
import { Routes, Route } from 'react-router-dom'

import AdminLayout from './components/admin-view/layout'
import Orders from './pages/admin-view/Orders/Orders'
import OrderDetails from './pages/admin-view/Orders/Order-Details'
import AddProduct from './pages/admin-view/Products/AddProduct'
import Employee from './pages/admin-view/Employee/Employee'
import ProductDetails from './pages/admin-view/Products/ProductDetails'
import ReturnRefund from './pages/admin-view/Return/Return-Refund'
import RequestDetails from './pages/admin-view/Return/Request-Details'
import Products from './pages/admin-view/Products/Products'
import AdminAccountSettings from './pages/admin-view/AdminSetting'
import EmployeeSetting from './pages/admin-view/Employee/EmployeeSetting'
import ShoppingLayout from './components/shopping-view/Layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/admin-view/shopping-view/Home'
import ShoppingCheckout from './pages/admin-view/shopping-view/Checkout'
import ShoppingAccount from './pages/admin-view/shopping-view/Account'
import ShoppingListing from './pages/admin-view/shopping-view/Listing'
import AuthLayout from './components/auth/Layout'
import AuthLogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import CheckAuth from './components/common/Check-Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkAuth } from './store/auth-slice'
import { Skeleton } from './components/ui/skeleton'



function App() {


  const {user, isAuthenticated, isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  if(isLoading) return <Skeleton className='w-full h-[400px]'></Skeleton>


  console.log(isLoading, user)


  return (
    <Routes>
      <Route path='/auth' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </CheckAuth>
      }>
      <Route path='login' element={<AuthLogin/>}/>
      <Route path='register' element={<AuthRegister/>}/>
      </Route>

      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>
      }>
        <Route path ='dashboard' element={<Dashboard />} />
        <Route path='orders' element={<Orders/>}/>
        <Route path='details' element={<OrderDetails/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='addProducts' element={<AddProduct/>}/>
        <Route path='product-details' element={<ProductDetails/>}/>
        <Route path='employee' element={<Employee/>}/>
        <Route path='return-refund' element={<ReturnRefund/>}/>
        <Route path='request' element={<RequestDetails/>}/>
        <Route path='settings' element={<AdminAccountSettings/>}/>
        <Route path='employeeAccount' element={<EmployeeSetting/>}/>
      </Route>

      
      <Route path='/shop' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
        </CheckAuth>
      }>
        <Route path='home' element={<ShoppingHome/>}/>
        <Route path='checkout' element={<ShoppingCheckout/>}/>
        <Route path='account' element={<ShoppingAccount/>}/>
        <Route path='listing' element={<ShoppingListing/>}/>
     </Route>

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
