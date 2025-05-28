import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {  fetchRestaurantAssignedDeliveryBoy,     fetchRestaurantdeliveredOrderData,  fetchRestaurantOrderAPI, fetchRestaurantProcessingOrderData } from "../../Api/restaurantApi/restaurantOrderApi";

export const getRestaurantOrders = createAsyncThunk("order/fetch", async ({orderId,sellerDetails}) => {
 
    
        const orders = await fetchRestaurantOrderAPI({orderId,sellerDetails});
      //   console.log(orders);
        return orders;
});

export const getAssignedDeliveryBoy= createAsyncThunk("assinged-DeliveryBoy/fetch",async(orderId)=>{
    console.log(orderId);
    const assignDeliveryBoy= await fetchRestaurantAssignedDeliveryBoy(orderId);
    return assignDeliveryBoy;
})



export const getOrderProcessingData= createAsyncThunk("processing/fetch",async(sellerDetails)=>{
    const processingData = await fetchRestaurantProcessingOrderData(sellerDetails);
    return processingData;
})

export const getOrderDeliveredData= createAsyncThunk("delivered/fetch",async(sellerDetails)=>{
    const deliveredData = await fetchRestaurantdeliveredOrderData(sellerDetails);
    return deliveredData;
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
         
         .addCase(getOrderProcessingData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderProcessingData.fulfilled, (state, action) => {
                state.loading = false;
                state.assignedOrder = action.payload;
            })
            .addCase(getOrderProcessingData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
             .addCase(getOrderDeliveredData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrderDeliveredData.fulfilled, (state, action) => {
                state.loading = false;
                state.assignedOrder = action.payload;
            })
            .addCase(getOrderDeliveredData.rejected, (state, action) => {
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
