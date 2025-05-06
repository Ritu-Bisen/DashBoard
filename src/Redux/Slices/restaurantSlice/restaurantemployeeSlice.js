import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { employeeDataApi, fetchEployeeData } from "../../Api/salonApi/salonEmployeeDetailsApi";
import { fetchRestaurantEmployeeData, restaurantEmployeeDataApi } from "../../Api/restaurantApi/restaurantEmployeeApi";
//import { seller_id } from "../../../Components/MartSection/StockManagementForm";

export const restaurantEmployeeDetailsList = createAsyncThunk ("employee-details/fetch",async({formData,restaurant_seller_id})=>{
    const employeeDetails = await restaurantEmployeeDataApi(formData,restaurant_seller_id);
   // console.log(formData);
    
    return employeeDetails;
})

export const getRestaurantEmployeeList = createAsyncThunk("employee/fetch",async()=>{
  const employeesList = await fetchRestaurantEmployeeData();

  return employeesList;
})

const RestaurantEmployeeDataSlice = createSlice({
    name:"employeeData",
    initialState:{
        employeeData:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(restaurantEmployeeDetailsList.pending,(state)=>{
           state.loading=true,
           state.error=null
           })
           .addCase(restaurantEmployeeDetailsList.fulfilled,(state,action)=>{
             state.employeeData.push(action.payload);
           })
           .addCase(restaurantEmployeeDetailsList.rejected,(state,action)=>{
             state.error=action.payload
           })
           .addCase(getRestaurantEmployeeList.pending,(state)=>{
            state.loading=true,
            state.error=null
            })
            .addCase(getRestaurantEmployeeList.fulfilled,(state,action)=>{
             state.employeeData=action.payload
            })
            .addCase(getRestaurantEmployeeList.rejected,(state,action)=>{
              state.error=action.payload
            })

    }
})

export default RestaurantEmployeeDataSlice.reducer;