import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAppointmentApi, fetchAppointmentServicesDataAPI } from "../../Api/salonApi/salonAppointmentAPI";

export const getAppointment = createAsyncThunk("appointment/fetch",async(sellerDetails)=>{
    const appointment = fetchAppointmentApi(sellerDetails);
    return appointment;
})

export const getAppointmentServiceData = createAsyncThunk("servicesList/fetch",async({sellerDetails,orderId})=>{
    const service = fetchAppointmentServicesDataAPI({sellerDetails,orderId});
    return service;
})

const appointmentSlice = createSlice({
    name:"appointment",
    name:"serviceList",
    initialState:{
        appointment:[],
        serviceList:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getAppointment.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAppointment.fulfilled,(state,action)=>{
            state.appointment=action.payload;
        })
        .addCase(getAppointment.rejected,(state,action)=>{
            state.error= action.payload;
        })
          .addCase(getAppointmentServiceData.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAppointmentServiceData.fulfilled,(state,action)=>{
            state.serviceList=action.payload;
        })
        .addCase(getAppointmentServiceData.rejected,(state,action)=>{
            state.error= action.payload;
        })
    }
})

export default appointmentSlice.reducer;