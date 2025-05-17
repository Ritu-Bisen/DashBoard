import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRestaurantReportApi } from "../../Api/restaurantApi/restaurantReportsApi";

export const getRestaurantReport=createAsyncThunk("reports/fetch",async()=>{
    const reports=fetchRestaurantReportApi();
    return reports;
})

const restaurantReportSlice = createSlice({
    name: "reports",
    initialState: {
        reports: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(getRestaurantReport.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRestaurantReport.fulfilled, (state, action) => {
             
            state.reports=action.payload
            })
            .addCase(getRestaurantReport.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
           
    },
});

export default restaurantReportSlice.reducer;
