import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiClient from "../axiosinstance/AxiosApiclient"

const initialState = {
    status: 'idle',
    wishlist: [],
    error: null
};

export const getWishlist = createAsyncThunk("wishlistSlice/getWishlist", async () => {
    const response = await apiClient.get("https://localhost:7282/api/Wishlist");
    return response.data;
});
export const addWishlist = createAsyncThunk("WishlistSlice/addWishlist", async (productid, { dispatch }) => {
    const response = await apiClient.post(`https://localhost:7282/api/Wishlist/addWishlist/${productid}`);
    dispatch(getWishlist());
    return response.data
});
export const deleteWishlist = createAsyncThunk("deleteWishlist/WishlistSlice", async (productid, { dispatch }) => {
    const response = await apiClient.delete(`https://localhost:7282/api/Wishlist/RemoveWishlist/${productid}`);
    dispatch(getWishlist());
    return response.data;
});

export const wishlistSlice = createSlice({
    name: "wishlists",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getWishlist.pending, (state) => {
            state.status = "loading"
        })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload;
                state.status = "succeeded"
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.error = action.error;
            });
        builder.addCase(deleteWishlist.pending, (state) => {
            state.status = "pending"
        })
            .addCase(deleteWishlist.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(deleteWishlist.rejected, (state) => {
                state.status = "failed!"
            });
        builder.addCase(addWishlist.pending, (state) => {
            state.status = "loading"
        })
            .addCase(addWishlist.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(addWishlist.rejected, (state) => {
                state.status = "failed"
            });

    }
})
export default wishlistSlice.reducer;