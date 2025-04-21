import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deliveryBoyRegisterApi } from "../Api/deliveryBoyApi";

export const  deliveryBoyData = createAsyncThunk('deliveryBoyData/fetch',async({formData,seller_id})=>{
    console.log("gcfd",formData)
    const deliveryBoyDetails = await deliveryBoyDataApi({formData,seller_id});
    return deliveryBoyDetails;
})

export const deliveryBoyRegister = createAsyncThunk("deliveryBoy/register",async({formData,seller_id})=>{
const deliveryBoys = await deliveryBoyRegisterApi({formData,seller_id});
return deliveryBoys;
})

const deliveryBoyDataSlice = createSlice({
    name:"deliveryBoys",
    initialState:{
        deliveryBoys:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(deliveryBoyRegister.pending,(state)=>{
            state.loading=true
        })
        .addCase(deliveryBoyRegister.fulfilled,(state,action)=>{
            state.loading=false,
            state.deliveryBoys.push(action.payload)
        })
        .addCase(deliveryBoyRegister.rejected,(state,action)=>{
          state.loading= action.payload,
          state.error=action.payload
        })
    }

})

export default deliveryBoyDataSlice.reducer