import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantMenuApi } from "../../Api/restaurantApi/restaurantMenuApi";


export const getRestaurantmenus=createAsyncThunk("menu/fetch",async ({ page }, thunkAPI) =>{
    const menu = await fetchRestaurantMenuApi(page);
    
    
     return menu;
})

const menuSlice = createSlice({
    name:"menu",
    initialState:{
         menu: [],
    loading: false,
    error: null,
    page: 0,
    hasMore: true,
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getRestaurantmenus.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
      .addCase(getRestaurantmenus.fulfilled, (state, action) => {
        if (action.payload.length < 7) {
          state.hasMore = false;
        }
        state.menu = [...state.menu, ...action.payload];
        state.page += 1;
        state.loading = false;
      })
       .addCase(getRestaurantmenus.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default menuSlice.reducer;