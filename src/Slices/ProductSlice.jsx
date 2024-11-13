import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    Products: [],
    status: 'idle',
    error: null
};
export const fetchProduct=createAsyncThunk("ProductSlice/fetchProduct",async()=>{
    const response=await axios.get("https://localhost:7282/api/Product/Get All Products");
    return response.data;
});
export const ProductSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers(builder){
     builder.addCase(fetchProduct.pending, (state) => {
            state.status = 'loading';
          })
        .addCase(fetchProduct.fulfilled,(state,action)=>
        {
            state.status="succeeded";
            state.Products=action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = 'failed'; 
            state.error = action.error.message;
          });
    }
})
export default ProductSlice.reducer;