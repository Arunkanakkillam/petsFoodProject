import { createAsyncThunk } from "@reduxjs/toolkit"
import apiClient from "../axiosinstance/AxiosApiclient"

const initialState={
    status:"idle",
    cart:[],
    error:null
}

// export const getCart = createAsyncThunk("CartSlice/getCart", async () => {
//     const token = localStorage.getItem("token");
//     const response = await axios.get("https://localhost:7282/api/Cart/cartitems", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     return response.data;
// });


export const getCart=createAsyncThunk("cartSlice/getCArt",async()=>{
    const response =await apiClient.get("https://localhost:7282/api/Cart/cartitems");
    return response.data;
});
export const addToCart=createAsyncThunk("cartSlice/addToCart",async(productid,{dispatch})=>{
    const response=await apiClient.post(`https://localhost:7282/api/Cart/additemtocart/${prdoctid}`);
    dispatch(getCart());
    return response.data;
});
export const deleteCart=createAsyncThunk("cartSlice/deleteCart",async(productid,dispatch)=>{
    const response=await apiClient.post(`https://localhost:7282/api/Cart/cartitem delete/${productid}`);
    dispatch(getCart());
    return response.data;
});
export const increment=createAsyncThunk("cartSlice/increment",async(productid,dispatch)=>{
                const response = await apiClient.post(`https://localhost:7282/api/Cart/increment product/${productid}`);
                dispatch(getCart());
                return response.data;
})
export const decrement=createAsyncThunk("cartSlice/decrement",async(productid,dispatch)=>{
        const response=await apiClient.post(`https://localhost:7282/api/Cart/Decrement product/${productid}`);
        dispatch(getCart());
        return response.data;
})