import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantOrderAPI } from "../../Api/restaurantApi/restaurantOrderApi";

export const getRestaurantOrders = createAsyncThunk("order/fetch", async () => {
        const orders = await fetchRestaurantOrderAPI();
        // console.log(orders);
        return orders;
});

const restaurantOrderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRestaurantOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(getRestaurantOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            });
    },
});

export default restaurantOrderSlice.reducer;
