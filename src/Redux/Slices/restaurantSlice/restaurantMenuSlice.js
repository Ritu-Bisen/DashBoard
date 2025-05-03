import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantMenuApi } from "../../Api/restaurantApi/restaurantMenuApi";


export const getRestaurantmenus=createAsyncThunk("menu/fetch",async () =>{
    const menu = await fetchRestaurantMenuApi();
    
    
     return menu;
})

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        menu:[],
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
        state.menu=action.payload;
       })
       .addCase(getRestaurantmenus.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default menuSlice.reducer;