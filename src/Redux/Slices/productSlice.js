import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "../Api/productApi";


export const getproduct=createAsyncThunk("product/fetch",async () =>{
    const products = await fetchProductApi();
    console.log(products);
    
     return products;
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getproduct.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getproduct.fulfilled,(state,action)=>{
        state.products=action.payload;
       })
       .addCase(getproduct.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default productSlice.reducer;