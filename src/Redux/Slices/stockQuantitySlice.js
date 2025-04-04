import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../Api/stockApi";

export  const orderList = createAsyncThunk ("stock/fetch",async (addedItems)=>{
   const orders = await stockApi(addedItems);
   console.log("order Slice",orders)  
   return orders;
  

 })