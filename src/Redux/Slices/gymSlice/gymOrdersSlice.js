import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"
import { fetchGymOrdersApi } from "../../Api/gymApi/gymOrderApi";

export const getGymOrders=createAsyncThunk("orders/fetch",async ()=>{
    const gymOrders = await fetchGymOrdersApi();
    return gymOrders;
})

const gymOrdersSlice = createSlice({
    name:"gymOrders",
    initialState:{
        gymOrders:[],
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
    }
})
export default gymOrdersSlice.reducer;