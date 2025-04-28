import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { employeeDataApi, fetchEployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
//import { seller_id } from "../../../Components/MartSection/StockManagementForm";
import { fetchMartEployeeData, martemployeeDataApi } from "../Api/martEmployeeApi";

export const martemployeeDetailsList = createAsyncThunk ("employee-details/fetch",async({formData,seller_id})=>{
    const employeeDetails = await martemployeeDataApi(formData,seller_id);
   // console.log(formData);
    
    return employeeDetails;
})

export const getmartemployeeList = createAsyncThunk("employee/fetch",async()=>{
  const employeesList = await fetchMartEployeeData();

  return employeesList;
})

const MartEmployeeDataSlice = createSlice({
    name:"employeeData",
    initialState:{
        employeeData:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(martemployeeDetailsList.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(martemployeeDetailsList.fulfilled,(state,action)=>{
             state.employeeData.push(action.payload);
           })
           .addCase(martemployeeDetailsList.rejected,(state,action)=>{
             state.error=action.payload
           })
           .addCase(getmartemployeeList.pending,(state)=>{
            state.loading=true,
            state.error=null
            })
            .addCase(getmartemployeeList.fulfilled,(state,action)=>{
             state.employeeData=action.payload
            })
            .addCase(getmartemployeeList.rejected,(state,action)=>{
              state.error=action.payload
            })

    }
})

export default MartEmployeeDataSlice.reducer;