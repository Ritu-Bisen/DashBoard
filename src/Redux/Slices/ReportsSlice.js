import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchReportApi } from "../Api/ReportApi";

export const getReports=createAsyncThunk("reports/fetch",async (sellerDetails)=>{
    const gymReport = await fetchReportApi(sellerDetails);
    return gymReport;
})

const reportsSlice = createSlice({
    name:"reports",
    initialState:{
        reports:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getReports.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getReports.fulfilled,(state,action)=>{
        state.reports=action.payload;
       })
       .addCase(getReports.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default reportsSlice.reducer;