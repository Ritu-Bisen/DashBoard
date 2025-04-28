import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantMenuApi } from "../../Api/restaurantApi/restaurantMenuApi";


export const getRestaurantmenus=createAsyncThunk("product/fetch",async () =>{
    const menus = await fetchRestaurantMenuApi();
    
    
     return menus;
})

const menusSlice = createSlice({
    name:"menus",
    initialState:{
        menus:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getRestaurantmenus.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getRestaurantmenus.fulfilled,(state,action)=>{
        state.menus=action.payload;
       })
       .addCase(getRestaurantmenus.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default menusSlice.reducer;