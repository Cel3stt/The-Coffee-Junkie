import './App.css'

import Dashboard from './pages/admin-view/Dashboard'
import { Routes, Route } from 'react-router-dom'

import AdminLayout from './components/admin-view/layout'

import OrderDetails from './pages/admin-view/Orders/Order-Details'
import Employee from './pages/admin-view/Employee/Employee'
import ProductDetails from './pages/admin-view/Products/ProductDetails'
import ReturnRefund from './pages/admin-view/Return/Return-Refund'
import RequestDetails from './pages/admin-view/Return/Request-Details'

import AdminAccountSettings from './pages/admin-view/AdminSetting'
import EmployeeSetting from './pages/admin-view/Employee/EmployeeSetting'
import ShoppingLayout from './components/shopping-view/Layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/Home'
import ShoppingCheckout from './pages/shopping-view/Checkout'
import ShoppingAccount from './pages/shopping-view/Account'
import ShoppingListing from './pages/shopping-view/Listing'
import AuthLayout from './components/auth/Layout'
import AuthLogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import CheckAuth from './components/common/Check-Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkAuth } from './store/auth-slice'
import { Skeleton } from './components/ui/skeleton'
import AdminProducts from './pages/admin-view/Products/Products'
import ShoppingHeader from './components/shopping-view/Header'

import ProductDetailsPageWrapper from './components/shopping-view/ProductDetailsPageWrapper'
import { omit } from 'lodash'
import AdminOrders from './pages/admin-view/Orders/Orders'
import PaypalReturnPage from './pages/shopping-view/paypal-return'
import PaymentSuccessPage from './pages/shopping-view/payment-success'
import ShoppingAboutUsPage from './pages/shopping-view/AboutUs'
import ShoppingTermsAndConditions from './pages/shopping-view/TermsAndCondition'
import ShoppingContactUsPage from './pages/shopping-view/Contact'



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
        <Route path='orders' element={<AdminOrders/>}/>
        
        <Route path='products' element={<AdminProducts/>}/>
        
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
        <Route path='about' element={<ShoppingAboutUsPage/>}/>
        <Route path='header' element={<ShoppingHeader/>}/>
        <Route path='checkout' element={<ShoppingCheckout/>}/>
        <Route path='account' element={<ShoppingAccount/>}/>
        <Route path='listing' element={<ShoppingListing/>}/>
        <Route path="product/:id" element={<ProductDetailsPageWrapper />} />
        <Route path='paypal-return' element={<PaypalReturnPage/>}/>
        <Route path='payment-success' element={<PaymentSuccessPage/>}/>
        <Route path='termsAndConditions' element={<ShoppingTermsAndConditions/>}/>
        <Route path='contact' element={<ShoppingContactUsPage/>}/>
        


     

       



     </Route>
     

     
     

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
