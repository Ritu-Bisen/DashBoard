import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {  fetchAssignedData, fetchAssignedDeliveryBoy, fetchRestaurantOrderAPI } from "../../Api/restaurantApi/restaurantOrderApi";

export const getRestaurantOrders = createAsyncThunk("order/fetch", async (orderId) => {
    console.log(orderId);
    
        const orders = await fetchRestaurantOrderAPI(orderId);
         console.log(orders);
        return orders;
});

export const getAssignedDeliveryBoy= createAsyncThunk("assinged-DeliveryBoy/fetch",async(orderId)=>{
    console.log(orderId);
    const assignDeliveryBoy= await fetchAssignedDeliveryBoy(orderId);
    return assignDeliveryBoy;
})

export const getOrderAssignedData= createAsyncThunk("assigned/fetch",async()=>{
    const assignedData = await fetchAssignedData();
    return assignedData;
})


const restaurantOrderSlice = createSlice({
    name: "orders",
    name:"assignedOrder",
    name:"assignedDeliveryBoy",
    initialState: {
        orders: [],
        assignedOrder:[],
        assignedDeliveryBoy:[],
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
            })
          
         .addCase(getOrderAssignedData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderAssignedData.fulfilled, (state, action) => {
                state.loading = false;
                state.assignedOrder = action.payload;
            })
            .addCase(getOrderAssignedData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
            .addCase(getAssignedDeliveryBoy.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAssignedDeliveryBoy.fulfilled, (state, action) => {
                state.loading = false;
                state.assignedDeliveryBoy= action.payload;
            })
            .addCase(getAssignedDeliveryBoy.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            });
    },
});

export default restaurantOrderSlice.reducer;
