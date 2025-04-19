import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const  deliveryBoyData = createAsyncThunk('deliveryBoyData/fetch',async(formData)=>{
    console.log("gcfd",formData)
    const deliveryBoyDetails = await deliveryBoyDataApi();
    return deliveryBoyDetails;
})

const deliveryBoyDataSlice = createSlice({
    name:"deliveryBoyData",
    initialState:{
        
    }

})