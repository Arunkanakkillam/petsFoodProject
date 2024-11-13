import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    status:'idle',
    login:null,
    error:null
}

export const loginCustomer=createAsyncThunk(
    'loginSlice/loginCustomer',
    async (credentials)=>{
        
        const response=await axios.post("https://localhost:7282/api/Customer/Login",credentials);
        return response.data;
    }

)

export const loginSlice=createSlice({
    name:'logins',
    initialState,
    reducers:{},
    extraReducers (builder){
        builder.addCase(loginCustomer.pending,(state)=>{
            state.status="loading";
        })
        .addCase(loginCustomer.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.login=action.payload;
            console.log(action.payload)
        })
        .addCase(loginCustomer.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        });
    }
});
export default loginSlice.reducer;