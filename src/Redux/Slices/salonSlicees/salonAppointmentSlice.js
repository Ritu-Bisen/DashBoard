import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAppointmentServicesDataAPI, fetchCompletedAppointmentApi, fetchProcessingAppointmentApi } from "../../Api/salonApi/salonAppointmentAPI";

export const getCompletedAppointment = createAsyncThunk("completed-appointment/fetch",async(sellerDetails)=>{
    const completedappointment = fetchCompletedAppointmentApi(sellerDetails);
    return completedappointment;
})
export const getProcessingAppointment = createAsyncThunk("processing-appointment-/fetch",async(sellerDetails)=>{
    const processingappointment = fetchProcessingAppointmentApi(sellerDetails);
    return processingappointment;
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
        .addCase(getCompletedAppointment.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getCompletedAppointment.fulfilled,(state,action)=>{
            state.appointment=action.payload;
        })
        .addCase(getCompletedAppointment.rejected,(state,action)=>{
            state.error= action.payload;
        })
         .addCase(getProcessingAppointment.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getProcessingAppointment.fulfilled,(state,action)=>{
            state.appointment=action.payload;
        })
        .addCase(getProcessingAppointment.rejected,(state,action)=>{
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