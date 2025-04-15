import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employeeDataApi } from "../../Api/salonApi/salonEmployeeDetailsApi";

export const employeeDetails = createAsyncThunk ("employeedata/fetch",async({formData})=>{
    const employeeDetails = await employeeDataApi(formData);
    return employeeDetails;
})

const EmployeeDataSlice = createSlice({
    name:"employeeDetails",
    initialState:{
        employeeDetails:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(employeeDetails.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(employeeDetails.fulfilled,(state,action)=>{
             state.employeeDetails.push(action.payload);
           })
           .addCase(employeeDetails.rejected,(state,action)=>{
             state.error=action.payload
           })
    }
})

export default EmployeeDataSlice.reducer;