import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"
import { fetchGymServicesApi } from "../../Api/gymApi/gymServicesApi";

export const getGymServices=createAsyncThunk("services/fetch",async ()=>{
    const gymService = await fetchGymServicesApi();
    return gymService;
})

const gymServicesSlice = createSlice({
    name:"services",
    initialState:{
        services:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymServices.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymServices.fulfilled,(state,action)=>{
        state.services=action.payload;
       })
       .addCase(getGymServices.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymServicesSlice.reducer;