import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import adminProductsSlice from './admin/products-slice'
import shopProductsSlice from './shop/products-slice'
import shopCartSlice from './shop/cart-slice'
import shopAdressSlice from './shop/address-slice'
import shopOrderSlice from './shop/order-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts : adminProductsSlice,
        shopProducts : shopProductsSlice,
        shopCart : shopCartSlice,
        shopAddress : shopAdressSlice,
        shopOrder : shopOrderSlice
    }
})

export default store; 