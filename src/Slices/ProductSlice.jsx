import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiClient from "../axiosinstance/AxiosApiclient";

const initialState = {
    Products: [],
    search: [],
    isSearchClicked:false,
    productById: null,
    status: 'idle',
    error: null
};
export const fetchProduct = createAsyncThunk("ProductSlice/fetchProduct", async () => {
    const response = await axios.get("https://localhost:7282/api/Product/Get All Products");
    return response.data;
});
export const searchProduct = createAsyncThunk("ProductSlice/searchProduct", async (searchItem) => {
    const response = await axios.get(`https://localhost:7282/api/Product/searchItem?SearchItem=${searchItem}`);
    return response.data;
});
export const AddProduct = createAsyncThunk("ProductSlice/AddProduct", async (product, { dispatch }) => {
    const response = await apiClient.post(`https://localhost:7282/api/Product/${product}`);
    dispatch(fetchProduct());
    return response.data;
});
export const deleteProduct = createAsyncThunk("ProductSlice/deleteProduct", async (productid, { dispatch }) => {
    const response = await apiClient.delete(`https://localhost:7282/api/Product/deleteProduct/${productid}`);
    dispatch(fetchProduct());
    return response.data;
});

export const updateProduct = createAsyncThunk("ProductSlice/updateProduct", async (productid, product, { dispatch }) => {
    const response = await apiClient.put(`https://localhost:7282/api/Product/update product/`, productid, product);
    dispatch(fetchProduct());
    return response.data;
});
export const addCategory = createAsyncThunk("ProductSlice/addCategory", async (category, { dispatch }) => {
    const response = await apiClient.post(`https://localhost:7282/api/Product/addingCategory`, category);
    dispatch(fetchProduct());
    return response.data;
});
export const deleteCategory = createAsyncThunk("ProductSlice/deleteCategory", async (productid, { dispatch }) => {
    const response = await apiClient.delete(`https://localhost:7282/api/Product/deleteProduct/${productid}`);
    dispatch(fetchProduct());
    return response.data;
});
export const fetchProductById = createAsyncThunk("ProductSlice/fetchProductById", async (productid, { dispatch }) => {
    const response = await apiClient.get(`https://localhost:7282/api/Product/GetProductsById/${productid}`);
    return response.data;
});



export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProduct.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.Products = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        builder.addCase(searchProduct.pending, (state) => {
            state.isSearchClicked=!state.isSearchClicked;
            state.status = "loading";
        })
            .addCase(searchProduct.fulfilled, (state, action) => {
                console.log(action.payload.result[0])
                state.search = action.payload.result;
                state.status = "succeeded"
            })
            .addCase(searchProduct.rejected, (state, action) => {
                state.error = action.payload;
            });
        builder.addCase(AddProduct.pending, (state) => {
            state.status = "loading";
        })
            .addCase(AddProduct.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(AddProduct.rejected, (state, action) => {
                state.error = action.payload
            });
        builder.addCase(deleteProduct.pending, (state) => {
            state.status = "loading";
        })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload;
            })
        builder.addCase(updateProduct.pending, (state) => {
            state.status = "loading";
        })
            .addCase(updateProduct.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = action.payload;
            });
        builder.addCase(addCategory.pending, (state) => {
            state.status = "pending";
        })
            .addCase(addCategory.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.error = action.payload
            });
        builder.addCase(deleteCategory.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(deleteCategory.fulfilled, (state) => {
                state.status = "succeeded";
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.error = action.payload;
            });
        builder.addCase(fetchProductById.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.productById = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
})
export default ProductSlice.reducer;