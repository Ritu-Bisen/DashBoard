import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { cashCollectionRecordsApi, fetchCashCollectionOrderAPI, updateCashCollectionOrderApi } from "../Api/cashCollectionApi";

export const getCashCollectionOrder =createAsyncThunk("order/fetch",async(sellerDetails)=>{
    const orders =await fetchCashCollectionOrderAPI(sellerDetails);
    return orders;
});

export const cashCollectionRecord =createAsyncThunk("record/fetch",async({orderId,deliveryBoyId})=>{
    const cash =await cashCollectionRecordsApi({orderId,deliveryBoyId});
    return cash;
});

export const updateCashCollectionOrder=createAsyncThunk('order-cashcollection/update',async(orderId)=>{
    console.log(orderId);
    
    const cashCollection=await updateCashCollectionOrderApi(orderId);
    return cashCollection;
})

const cashOrdersSlice = createSlice({
    name:'orders',
    initialState:{
        orders:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers : (builder)=>{
        builder 
        .addCase(getCashCollectionOrder.pending,(state) =>{
            state.loading =true;
            state.error = null;
        })
        .addCase(getCashCollectionOrder.fulfilled,(state,action)=>{
            state.loading =false;
            state.orders=action.payload;
        })
        .addCase(getCashCollectionOrder.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload||'failed to fetch category'
        })
         .addCase(cashCollectionRecord.pending,(state) =>{
            state.loading =true;
            state.error = null;
        })
        .addCase(cashCollectionRecord.fulfilled,(state,action)=>{
            state.loading =false;
            state.orders.push(action.payload);
        })
        .addCase(cashCollectionRecord.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload||'failed to fetch category'
        })
         .addCase(updateCashCollectionOrder.pending,(state) =>{
            state.loading =true;
            state.error = null;
        })
        .addCase(updateCashCollectionOrder.fulfilled,(state,action)=>{
            state.loading =false;
       const updatedAssigned = action.payload;
       if (!updatedAssigned) return; //  Avoid crashing
      
        state.orders = state.orders.map((order) =>
          order.id === updatedAssigned.id ? updatedAssigned : order
        );
        })
        .addCase(updateCashCollectionOrder.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload||'failed to fetch category'
        })
    }
})

export default cashOrdersSlice.reducer;