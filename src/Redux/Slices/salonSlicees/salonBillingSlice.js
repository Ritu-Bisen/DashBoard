import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBillingApi } from "../../Api/salonApi/salonBillingApi";

export const getBillingData = createAsyncThunk("billing/fetch",async()=>{
    const billing = fetchBillingApi();
    return billing;
})

const billingSlice = createSlice({
    name:"billingList",
    initialState:{
        billingList:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getBillingData.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getBillingData.fulfilled,(state,action)=>{
            state.billingList=action.payload;
        })
        .addCase(getBillingData.rejected,(state,action)=>{
            state.error= action.payload;
        })
    }
})

export default billingSlice.reducer;