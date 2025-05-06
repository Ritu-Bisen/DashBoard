import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { employeeDataApi, fetchEployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
import { fetchGymEmployeeData, gymEmployeeDataApi } from "../../Api/gymApi/gymAddEmployeeApi";


export const gymEmployeeDetailsList = createAsyncThunk ("employee-details/fetch",async({formData,gym_seller_id})=>{
    const employeeDetails = await gymEmployeeDataApi(formData,gym_seller_id);
   // console.log(formData);
    
    return employeeDetails;
})

export const getGymEmployeeList = createAsyncThunk("employee/fetch",async()=>{
  const employeesList = await fetchGymEmployeeData();

  return employeesList;
})

const gymEmployeeDataSlice = createSlice({
    name:"employeeData",
    initialState:{
        employeeData:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(gymEmployeeDetailsList.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(gymEmployeeDetailsList.fulfilled,(state,action)=>{
             state.employeeData.push(action.payload);
           })
           .addCase(gymEmployeeDetailsList.rejected,(state,action)=>{
             state.error=action.payload
           })
           .addCase(getGymEmployeeList.pending,(state)=>{
            state.loading=true,
            state.error=null
            })
            .addCase(getGymEmployeeList.fulfilled,(state,action)=>{
             state.employeeData=action.payload
            })
            .addCase(getGymEmployeeList.rejected,(state,action)=>{
              state.error=action.payload
            })

    }
})

export default gymEmployeeDataSlice.reducer;