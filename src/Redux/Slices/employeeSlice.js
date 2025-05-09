import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { employeeDataApi, fetchEployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
//import { seller_id } from "../../../Components/MartSection/StockManagementForm";
import { fetchEmployeeDetailsAPI } from "../Api/employeeApi";
import { createEmployeeApi } from "../Api/employeeApi";

export const createEmployee = createAsyncThunk ("employee/push",async({formData,sellerDetails})=>{
    const employee = await createEmployeeApi(formData,sellerDetails);
    return employee;
})

export const getEmployeeDetails = createAsyncThunk("employee-details/fetch",async(sellerDetails)=>{
  const employeesDetails = await fetchEmployeeDetailsAPI(sellerDetails);

  return employeesDetails;
})

const employeeSlice = createSlice({
    name:"employees",
    initialState:{
        employees:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createEmployee.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(createEmployee.fulfilled,(state,action)=>{
             state.employees.push(action.payload);
           })
           .addCase(createEmployee.rejected,(state,action)=>{
             state.error=action.payload
           })
           .addCase(getEmployeeDetails.pending,(state)=>{
            state.loading=true,
            state.error=null
            })
            .addCase(getEmployeeDetails.fulfilled,(state,action)=>{
             state.employees=action.payload
            })
            .addCase(getEmployeeDetails.rejected,(state,action)=>{
              state.error=action.payload
            })

    }
})

export default employeeSlice.reducer;