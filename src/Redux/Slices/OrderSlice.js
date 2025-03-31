import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchorderAPI } from "../Api/orderapi";

export const getOrders = createAsyncThunk("order/fetch", async () => {
        const orders = await fetchorderAPI();
        // console.log(orders);
        return orders;
});

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            });
    },
});

export default orderSlice.reducer;
