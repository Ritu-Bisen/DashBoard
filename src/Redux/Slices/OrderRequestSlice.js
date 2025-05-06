import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { fetchorderAPI } from "../Api/orderapi";
import {
  fetchorderRequestAPI,
  MartOrdersAssigned,
  updateMartAssignedOrder,
} from "../Api/orderRequestApi";

export const getOrderRequest = createAsyncThunk(
  "order-request/fetch",
  async () => {
    const ordersRequest = await fetchorderRequestAPI();
    // console.log(orders);
    return ordersRequest;
  }
);

export const updateAssignedMartOrder = createAsyncThunk(
  "order-assigned/update",
  async (orderId) => {
    console.log(orderId);

    const orderAssigned = await updateMartAssignedOrder(orderId);
    return orderAssigned;
  }
);

export const martOrderRequest = createAsyncThunk(
  "order-request/assign",
  async ({ deliveryBoyId, orderId }) => {
    const orders = await MartOrdersAssigned({ deliveryBoyId, orderId });
    // console.log("del",deliveryBoyId);
    // console.log("ord",orderId);
    return orders;
  }
);

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
      })
      .addCase(martOrderRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(martOrderRequest.fulfilled, (state, action) => {
        state.orderRequest.push(action.payload);
      })
      .addCase(martOrderRequest.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch orders.";
      })
      .addCase(updateAssignedMartOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAssignedMartOrder.fulfilled, (state, action) => {
        state.loading = false;
        const updatedAssigned = action.payload;
      
        if (!updatedAssigned) return; //  Avoid crashing
      
        state.orderRequest = state.orderRequest.map((order) =>
          order.id === updatedAssigned.id ? updatedAssigned : order
        );
      })
      .addCase(updateAssignedMartOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch orders.";
      });
  },
});

export default orderRequestSlice.reducer;
