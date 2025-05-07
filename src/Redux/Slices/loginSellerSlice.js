import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginSellerApi } from "../Api/loginSellerApi";
//import { LoginSellerApi } from "../Api/sellerDetailsApi";

export const getLoginSeller=createAsyncThunk("seller/fetch",async(phone)=>{
    console.log("phone",phone);
    
    const seller= await loginSellerApi(phone)
    return seller;
})

const loginSellerSlice = createSlice({
    name:"sellers",
    name:"sellerDetails",
    initialState:{
        sellers:[],
        sellerDetails:JSON.parse(localStorage.getItem("seller")),
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getLoginSeller.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getLoginSeller.fulfilled,(state,action)=>{
        state.sellers=action.payload;
       })
       .addCase(getLoginSeller.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default loginSellerSlice.reducer;