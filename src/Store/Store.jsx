import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "../Slices/ProductSlice";
import  registerSlice  from "../Slices/RegSlice";
import  loginSlice  from "../Slices/LoginSlice";
import  cartSlice  from "../Slices/CartSlice";
import  wishlistSlice  from "../Slices/WishlistSlice";
import  adminSlice  from "../Slices/adminSlice";

export const store=configureStore({
    reducer:{
        product:ProductSlice,
        register:registerSlice,
        logins:loginSlice,
        carts:cartSlice,
        wishlists:wishlistSlice,
        admin:adminSlice
    }
})