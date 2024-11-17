import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiClient from "../axiosinstance/AxiosApiclient"

 const initialState={
    status:'idle',
    paymentverify:false,
    orderid:null,
    order:[],
    error:null
}
export const razordata=createAsyncThunk("orderSlice/razordata",async(price)=>{
    console.log(price)
        const response=await apiClient.post(`https://localhost:7282/api/Order/order-create?price=${price}`);
        return response.data;
});

export const payment =createAsyncThunk("ordwerSlice/payment",async(fromRazor)=>{
    const response=await apiClient.post("https://localhost:7282/api/Order/payment",fromRazor);
    console.log(response.data)
    return response.data;
});
export const placeOrder=createAsyncThunk("orderSlice/placeOrder",async(credentials)=>{
    console.log("credential in api",credentials)
    const response=await apiClient.post(`https://localhost:7282/api/Order/place-order`,credentials, {
        headers: {
          "Content-Type": "application/json", 
        }});
    return response.data;
});

export const sliceOrder=createSlice({
    name:"orderslice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(razordata.pending,(state)=>{
            state.status="orderidgenerationpending";

        })
            .addCase(razordata.fulfilled,(state,action)=>{
                state.orderid=action.payload;
                console.log(action.payload)
                state.status="orderidcreationsuccess";
            })
            .addCase(razordata.rejected,(state,action)=>{
                console.log(action.payload)

                state.error=action.payload;
            });
        builder.addCase(payment.pending,(state)=>{
            state.status="paymentverificationispending";
        })    
            .addCase(payment.fulfilled,(state,action)=>{
                state.paymentverify=action.payload;
                state.status="paymentverified";
            })
            .addCase(payment.rejected,(state,action)=>{
                state.error=action.payload;
            });
        builder.addCase(placeOrder.pending,(state,action)=>{
                console.log(action.payload)
            state.status="pwndingorderplacing";
        })    

            .addCase(placeOrder.fulfilled,(state,action)=>{
                console.log(action.payload)

                state.status="orderplaced";
            })
            .addCase(placeOrder.rejected,(state,action)=>{
                state.error=action.payload;
            });
    }
})
export default sliceOrder.reducer;