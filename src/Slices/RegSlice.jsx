import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    registers:[],
    status:"idle",
    error:null
};
export const postCustomer=createAsyncThunk("RegSlice/postCustomer",async(credentials)=>{
    const response=await axios.post("https://localhost:7282/api/Customer",credentials)
    return response.data
});
export const registerSlice=createSlice({
    name:"register",
    initialState,
    reducers:{},
     extraReducers(builder){
        builder.addCase(postCustomer.pending,(state)=>{
                state.status='loading';
        })
        .addCase(postCustomer.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.registers=action.payload;
        })
        .addCase(postCustomer.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        });
     }
})
export default registerSlice.reducer;