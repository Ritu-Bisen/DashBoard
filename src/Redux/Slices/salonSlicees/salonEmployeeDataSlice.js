import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employeeDataApi, fetchEmployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
//import { seller_id } from "../../../Components/MartSection/StockManagementForm";

export const employeeDetailsList = createAsyncThunk ("employee-details/fetch",async({formData,salon_seller_id})=>{
    const employeeDetails = await employeeDataApi(formData,salon_seller_id);
   // console.log(formData);
    
    return employeeDetails;
})

export const getEmployeeList = createAsyncThunk("employee/fetch",async()=>{
  const employeesList = await fetchEmployeeData();

  return employeesList;
})

const EmployeeDataSlice = createSlice({
    name:"employeeData",
    initialState:{
        employeeData:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(employeeDetailsList.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(employeeDetailsList.fulfilled,(state,action)=>{
             state.employeeData.push(action.payload);
           })
           .addCase(employeeDetailsList.rejected,(state,action)=>{
             state.error=action.payload
           })
           .addCase(getEmployeeList.pending,(state)=>{
            state.loading=true,
            state.error=null
            })
            .addCase(getEmployeeList.fulfilled,(state,action)=>{
             state.employeeData=action.payload
            })
            .addCase(getEmployeeList.rejected,(state,action)=>{
              state.error=action.payload
            })

    }
})

export default EmployeeDataSlice.reducer;