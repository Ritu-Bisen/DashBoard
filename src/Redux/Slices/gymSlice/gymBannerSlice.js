import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymNutritionApi } from "../../Api/gymApi/gymNutritionApi";
import { fetchGymBannerApi } from "../../Api/gymApi/gymBannerApi";

export const getGymBanner=createAsyncThunk("banner/fetch",async ()=>{
    const gymBanner = await fetchGymBannerApi();
    return gymBanner;
})

const gymBannerSlice = createSlice({
    name:"banner",
    initialState:{
        banner:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymBanner.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymBanner.fulfilled,(state,action)=>{
        state.banner=action.payload;
       })
       .addCase(getGymBanner.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymBannerSlice.reducer;