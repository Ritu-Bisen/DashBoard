import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../Api/stockApi";

export  const orderList = createAsyncThunk ("stock/fetch",async ({addedItems,seller_id})=>{
console.log("dsdf",addedItems);

  
   const orders = await stockApi(addedItems,seller_id);
   console.log("order Slice",orders)  
   return orders;
 })

  const QuantitySlice = createSlice({
  name:"quantity",
  initialState:{
    quantity:[],
    loading:false,
    error:null,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(orderList.pending,(state)=>{
    state.loading=true,
    state.error=null
    })
    .addCase(orderList.fulfilled,(state,action)=>{
      state.quantity.push(action.payload);
    })
    .addCase(orderList.rejected,(state,action)=>{
      state.error=action.payload
    })
  }
 }

 )
 export default QuantitySlice.reducer;