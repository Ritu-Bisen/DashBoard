import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"
import { fetchGymCompletedOrdersApi, fetchGymOrderDetailsAPI,  fetchGymProcessingOrdersApi } from "../../Api/gymApi/gymOrderApi";

export const getGymProcessingOrders=createAsyncThunk("processing-orders/fetch",async (sellerDetails)=>{
    const processingOrders = await fetchGymProcessingOrdersApi(sellerDetails);
    return processingOrders;
})

export const getGymCompletedOrders=createAsyncThunk("completed-orders/fetch",async (sellerDetails)=>{
    const completedOrders = await fetchGymCompletedOrdersApi(sellerDetails);
    return completedOrders;
})

export const getGymOrderDetails=createAsyncThunk("ordersDetails/fetch",async ({orderId,sellerDetails})=>{
    const gymOrdersDetails = await fetchGymOrderDetailsAPI({orderId,sellerDetails});
    return gymOrdersDetails;
})

const gymOrdersSlice = createSlice({
    name:"gymOrders",
    name:"orderDetails",
    initialState:{
        gymOrders:[],
        orderDetails:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymProcessingOrders.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymProcessingOrders.fulfilled,(state,action)=>{
        state.gymOrders=action.payload;
       })
       .addCase(getGymProcessingOrders.rejected,(state,action)=>{
        state.error=action.payload;
       })
        .addCase(getGymCompletedOrders.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymCompletedOrders.fulfilled,(state,action)=>{
        state.gymOrders=action.payload;
       })
       .addCase(getGymCompletedOrders.rejected,(state,action)=>{
        state.error=action.payload;
       })
       .addCase(getGymOrderDetails.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymOrderDetails.fulfilled,(state,action)=>{
        state.orderDetails=action.payload;
       })
       .addCase(getGymOrderDetails.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymOrdersSlice.reducer;