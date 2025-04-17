import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../../SupaBaseClient";
import { fetchAppointmentApi } from "../../Api/salonApi/salonAppointment";

export const getAppointment = createAsyncThunk("appointment/fetch",async()=>{
    const appointmentData = await fetchAppointmentApi();
    return appointmentData;
})

const appointmentSlice = createSlice({
    name:"appointmentList",
    initialState:{
        appointmentList:[],
        loading:false,
        error:null,
    } , 
    
    reducers:{},
    extraReducers:(builder)=>{
      builder
      .addCase(getAppointment.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(getAppointment.fulfilled,(state,action)=>{
        state.appointmentList=action.payload;
      })
      .addCase(getAppointment.rejected, (state, action) => {  
       state.error = action.payload ;
    })
    }
})

export default appointmentSlice.reducer;