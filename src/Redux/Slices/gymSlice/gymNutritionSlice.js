import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymNutritionApi } from "../../Api/gymApi/gymNutritionApi";

export const getGymNutrition=createAsyncThunk("nutrition/fetch",async ()=>{
    const gymNutrition = await fetchGymNutritionApi();
    return gymNutrition;
})

const gymNutritionSlice = createSlice({
    name:"nutrition",
    initialState:{
        nutrition:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymNutrition.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymNutrition.fulfilled,(state,action)=>{
        state.nutrition=action.payload;
       })
       .addCase(getGymNutrition.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymNutritionSlice.reducer;