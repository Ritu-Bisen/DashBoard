import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSellerDetailsAPI, loginSellerApi } from "../Api/loginSellerApi";
//import { LoginSellerApi } from "../Api/sellerDetailsApi";

export const getLoginSeller=createAsyncThunk("seller/fetch",async(phone)=>{
    console.log("phone",phone);
    
    const seller= await loginSellerApi(phone)
    return seller;
})

export const getSellerDetails=createAsyncThunk("seller-details",async(sellerDetails)=>{
    const sellerDetail= await fetchSellerDetailsAPI(sellerDetails)
    return sellerDetail;
})

const loginSellerSlice = createSlice({
    name:"sellers",
    name:"sellerDetails",
    name:"sellerProfileData",
    initialState:{
        sellers:[],
        sellerDetails:JSON.parse(localStorage.getItem("seller")),
        sellerProfileData:[],
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
       .addCase(getSellerDetails.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getSellerDetails.fulfilled,(state,action)=>{
        state.sellerProfileData=action.payload;
       })
       .addCase(getSellerDetails.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default loginSellerSlice.reducer;