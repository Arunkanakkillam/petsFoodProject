import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "../Slices/ProductSlice";
import  registerSlice  from "../Slices/RegSlice";
import  loginSlice  from "../Slices/LoginSlice";

export const store=configureStore({
    reducer:{
        product:ProductSlice,
        register:registerSlice,
        logins:loginSlice
    }
})