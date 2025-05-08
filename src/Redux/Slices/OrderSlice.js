import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMartAssignedOrderAPI, fetchMartOrderDetailsAPI} from "../Api/orderapi";

export const getAssignedOrders = createAsyncThunk("assign-orders/fetch", async (sellerDetails) => {
        const assignOrders = await fetchMartAssignedOrderAPI(sellerDetails);
        // console.log(orders);
        return assignOrders;
});

export const getMartOrdersDetails=createAsyncThunk('orders-details/fetch',async({orderId,sellerDetails})=>{
    const ordersDetails = await fetchMartOrderDetailsAPI({orderId,sellerDetails});
    return ordersDetails;
})

const orderSlice = createSlice({
    name: "assignOrders",
    name:'orders',
    initialState: {
        assignOrders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAssignedOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAssignedOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.assignOrders = action.payload;
            })
            .addCase(getAssignedOrders.rejected, (state, action) => {
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
            });
    },
});

export default orderSlice.reducer;
