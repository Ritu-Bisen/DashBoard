import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMartAssignedDeliveryBoy, fetchMartDeliveredOrderAPI, fetchMartOrderDetailsAPI, fetchMartProcessingOrderAPI} from "../Api/orderapi";

export const getMartProcessingOrders = createAsyncThunk("processing/fetch", async (sellerDetails) => {
   // console.log("hii",sellerDetails);
    
        const processingOrders = await fetchMartProcessingOrderAPI(sellerDetails);
        // console.log(orders);
        return processingOrders;
});
export const getMartDeliveredOrders = createAsyncThunk("delivered/fetch", async (sellerDetails) => {
   // console.log("hii",sellerDetails);
    
        const deliveredOrders = await fetchMartDeliveredOrderAPI(sellerDetails);
        // console.log(orders);
        return deliveredOrders;
});

export const getMartAssignedDeliveryBoy= createAsyncThunk("assinged-DeliveryBoy/fetch",async(orderId)=>{
  
    const assignDeliveryBoy= await fetchMartAssignedDeliveryBoy(orderId);
    return assignDeliveryBoy;
})

export const getMartOrdersDetails=createAsyncThunk('orders-details/fetch',async({orderId,sellerDetails})=>{
    const ordersDetails = await fetchMartOrderDetailsAPI({orderId,sellerDetails});
    return ordersDetails;
})

const orderSlice = createSlice({
    name: "assignOrders",
    name:'orders',
     name:"assignedDeliveryBoy",
    initialState: {
        orders: [],
        assignOrders:[],
        assignedDeliveryBoy:[],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMartProcessingOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMartProcessingOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.assignOrders = action.payload;
            })
            .addCase(getMartProcessingOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
             .addCase(getMartDeliveredOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMartDeliveredOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.assignOrders = action.payload;
            })
            .addCase(getMartDeliveredOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
            .addCase(getMartOrdersDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMartOrdersDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(getMartOrdersDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch orders.";
            })
              .addCase(getMartAssignedDeliveryBoy.pending, (state) => {
                            state.loading = true;
                            state.error = null;
                        })
                        .addCase(getMartAssignedDeliveryBoy.fulfilled, (state, action) => {
                            state.loading = false;
                            state.assignedDeliveryBoy= action.payload;
                        })
                        .addCase(getMartAssignedDeliveryBoy.rejected, (state, action) => {
                            state.loading = false;
                            state.error = action.payload || "Failed to fetch orders.";
                        });
    },
});

export default orderSlice.reducer;
