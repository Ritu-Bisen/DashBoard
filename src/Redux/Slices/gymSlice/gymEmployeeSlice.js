import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employeeDataApi, fetchEployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
import { gymEmployeeDataApi } from "../../Api/gymApi/gymAddEmployeeApi";


export const employeeDetailsList = createAsyncThunk ("employee-details/fetch",async({formData,gym_seller_id})=>{
    const employeeDetails = await gymEmployeeDataApi(formData,gym_seller_id);
   // console.log(formData);
    
    return employeeDetails;
})

// export const getemployeeList = createAsyncThunk("employee/fetch",async()=>{
//   const employeesList = await fetchEployeeData();

//   return employeesList;
// })

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
        //    .addCase(getemployeeList.pending,(state)=>{
        //     state.loading=true,
        //     state.error=null
        //     })
        //     .addCase(getemployeeList.fulfilled,(state,action)=>{
        //      state.employeeData=action.payload
        //     })
        //     .addCase(getemployeeList.rejected,(state,action)=>{
        //       state.error=action.payload
        //     })

    }
})

export default gymEmployeeDataSlice.reducer;