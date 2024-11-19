import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiClient from "../axiosinstance/AxiosApiclient"

const initialState = {
    status: 'idle',
    customers: [],
    customerbyId: null,
    error: null
}
export const fetchUsers = createAsyncThunk("AdminSlice/fetchUsers", async () => {
    const response = await apiClient.get("https://localhost:7282/api/Customer/customers");
    return response.data;
});
export const BlockandUnblock = createAsyncThunk(
    "AdminSlice/BlockandUnblock",
    async (mailid, { dispatch }) => {
      const response = await apiClient.put("https://localhost:7282/api/Customer/block-Customer",JSON.stringify(mailid), 
        {
          headers: {
            "Content-Type": "application/json", 
          },
        }
      );
      dispatch(fetchUsers());
      return response.data;
    }
  );
  

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = "Loading";
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.customers = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload;
            });
        builder.addCase(BlockandUnblock.pending, (state) => {
            state.status = "Loading";
        })
            .addCase(BlockandUnblock.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(BlockandUnblock.rejected, (state, action) => {
                state.error = action.payload;
            });

    }
}) 
export default adminSlice.reducer;