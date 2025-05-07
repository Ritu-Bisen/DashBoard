import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantOrderRequestAPI, RestaurantOrdersAssigned, updateRestaurantAssignedOrder } from "../../Api/restaurantApi/restaurantOrderRequestApi";

export const getRestaurantOrderRequest = createAsyncThunk("order-request/fetch", async (sellerDetails) => {
        const ordersRequest = await fetchRestaurantOrderRequestAPI(sellerDetails);
        // console.log(orders);
        return ordersRequest;
});

export const updateAssignedRestaurantOrder=createAsyncThunk('order-assigned/update',async(orderId)=>{
    console.log(orderId);
    
    const orderAssigned=await updateRestaurantAssignedOrder(orderId);
    return orderAssigned;
})

export const restaurantOrderRequest = createAsyncThunk("order-request/assign",async({deliveryBoyId,orderId})=>{
    const orders = await RestaurantOrdersAssigned({deliveryBoyId,orderId});
    // console.log("del",deliveryBoyId);
    // console.log("ord",orderId);
    return orders;
})

const restaurantOrderRequestSlice = createSlice({
    name: "orderRequest",
    initialState: {
        orderRequest: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(restaurantOrderRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(restaurantOrderRequest.fulfilled, (state, action) => {
             
                state.orderRequest.push(action.payload);
            })
            .addCase(restaurantOrderRequest.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
            .addCase(getRestaurantOrderRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRestaurantOrderRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.orderRequest = action.payload;
            })
            .addCase(getRestaurantOrderRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
            .addCase(updateAssignedRestaurantOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateAssignedRestaurantOrder.fulfilled, (state, action) => {
                state.loading = false;
        const updatedAssigned = action.payload;
      
        if (!updatedAssigned) return; //  Avoid crashing
      
        state.orderRequest = state.orderRequest.map((order) =>
          order.id === updatedAssigned.id ? updatedAssigned : order
        );
            })
            .addCase(updateAssignedRestaurantOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
           
    },
});

export default restaurantOrderRequestSlice.reducer;
