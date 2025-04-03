import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../Api/stockApi";

export  const orderList = createAsyncThunk ("stock/fetch",async (order, rej)=>{
   const orders = await stockApi(order);
   return orders;

 })