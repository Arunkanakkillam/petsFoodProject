import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiClient from "../axiosinstance/AxiosApiclient"
import axios from "axios";

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
    console.log(response.data)
    return response.data;
});
export const addToCart=createAsyncThunk("cartSlice/addToCart",async(productid,{dispatch})=>{
    const response=await apiClient.post(`https://localhost:7282/api/Cart/additemtocart/${productid}`);
    dispatch(getCart());
    return response.data;
});

export const deleteCart=createAsyncThunk("cartSlice/deleteCart",async(productid,{dispatch})=>{
    const response=await apiClient.delete(`https://localhost:7282/api/Cart/cartitem delete/${productid}`);
    dispatch(getCart());
    return response.data;
});
export const increment=createAsyncThunk("cartSlice/increment",async(productid,{dispatch})=>{
                const response = await apiClient.put(`https://localhost:7282/api/Cart/increment product/${productid}`);
                dispatch(getCart());
                return response.data;
})
export const decrement=createAsyncThunk("cartSlice/decrement",async(productid,{dispatch})=>{
        const response=await apiClient.put(`https://localhost:7282/api/Cart/Decrement product/${productid}`);
        dispatch(getCart());
        return response.data;
});
export const cartSlice=createSlice({
    name:'carts',
    initialState,
    reducers:{},
    extraReducers(builder){
builder.addCase(getCart.pending,(state)=>{
            state.status="loading";
        })
        .addCase(getCart.fulfilled,(state,action)=>{
            state.cart=action.payload;
            state.status="succeeded";
        })
        .addCase(getCart.rejected,(state,action)=>{
            state.error=action.error;
        });
builder.addCase(addToCart.pending,(state)=>{
            state.status="loading";
        })
        .addCase(addToCart.fulfilled,(state)=>{
            state.status="succeeded"
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.error=action.error;
        });
builder.addCase(increment.pending,(state)=>{
            state.status="loading"
        })
        .addCase(increment.fulfilled,(state)=>{
            state.status="succeeded"
        })
        .addCase(increment.rejected,(state,action)=>{
            state.error=action.error;
        });
builder.addCase(decrement.pending,(state)=>{
            state.status="loading"
        })        
        .addCase(decrement.fulfilled,(state)=>{
            state.status="succeeded"
        })
        .addCase(decrement.rejected,(state,action)=>{
            state.error=action.error;
        });
    }
});
export default cartSlice.reducer;