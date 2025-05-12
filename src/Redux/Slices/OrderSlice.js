import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMartAssignedDeliveryBoy, fetchMartAssignedOrderAPI, fetchMartOrderDetailsAPI} from "../Api/orderapi";

export const getMartAssignedOrders = createAsyncThunk("assign-orders/fetch", async (sellerDetails) => {
    console.log("hii",sellerDetails);
    
        const assignOrders = await fetchMartAssignedOrderAPI(sellerDetails);
        // console.log(orders);
        return assignOrders;
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
            .addCase(getMartAssignedOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMartAssignedOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.assignOrders = action.payload;
            })
            .addCase(getMartAssignedOrders.rejected, (state, action) => {
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
