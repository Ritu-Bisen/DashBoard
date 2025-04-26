import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchorderAPI } from "../Api/orderapi";
import { fetchorderRequestAPI } from "../Api/orderRequestApi";

export const getOrderRequest = createAsyncThunk("order-request/fetch", async () => {
        const ordersRequest = await fetchorderRequestAPI();
        // console.log(orders);
        return ordersRequest;
});

const orderRequestSlice = createSlice({
    name: "orderRequest",
    initialState: {
        orderRequest: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrderRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.orderRequest = action.payload;
            })
            .addCase(getOrderRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            });
    },
});

export default orderRequestSlice.reducer;
