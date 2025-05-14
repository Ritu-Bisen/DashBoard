import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"
import { fetchGymOrderDetailsAPI, fetchGymOrdersApi } from "../../Api/gymApi/gymOrderApi";

export const getGymOrders=createAsyncThunk("orders/fetch",async (sellerDetails)=>{
    const gymOrders = await fetchGymOrdersApi(sellerDetails);
    return gymOrders;
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
       .addCase(getGymOrders.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymOrders.fulfilled,(state,action)=>{
        state.gymOrders=action.payload;
       })
       .addCase(getGymOrders.rejected,(state,action)=>{
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