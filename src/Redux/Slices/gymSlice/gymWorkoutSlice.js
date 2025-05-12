import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { fetchGymServicesApi } from "../../Api/gymApi/gymServicesApi";
import { fetchGymWorkoutAPI } from "../../Api/gymApi/gymWorkoutApi";

export const getGymWorkout=createAsyncThunk("workout/fetch",async ()=>{
    const gymWorkout = await fetchGymWorkoutAPI();
    return gymWorkout;
})

const gymWorkoutSlice = createSlice({
    name:"workout",
    initialState:{
        workout:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymWorkout.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymWorkout.fulfilled,(state,action)=>{
        state.workout=action.payload;
       })
       .addCase(getGymWorkout.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymWorkoutSlice.reducer;