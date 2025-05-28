import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantMenuApi, searchProductApi } from "../../Api/restaurantApi/restaurantMenuApi";


export const getRestaurantmenus=createAsyncThunk("menu/fetch",async ({ page }, thunkAPI) =>{
    const menu = await fetchRestaurantMenuApi(page);
     return menu;
    })

export const searchedProducts = createAsyncThunk(
  "product/search",
  async ({page, searchQuery }, { rejectWithValue }) => {
    try {
      const data = await searchProductApi(page, searchQuery);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const menuSlice = createSlice({
    name:"menu",
    initialState:{
         menu: [],
    loading: false,
    error: null,
    page: 0,
    hasMore: true,
    },

   reducers: {
  resetProducts: (state) => {
    state.menu = [];
    state.page = 0;
    state.hasMore = true;
    state.loading = false;
    state.error = null;
  },
},


       
      

  
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

      .addCase(searchedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
           if (!Array.isArray(action.payload)) {
          console.error("Expected payload to be an array, but got:", action.payload);
          state.status = "failed";
          return;
        }
      
        if (action.payload.length < 7) {
          state.hasMore = false;
        }
      
        state.menu = [...state.menu, ...action.payload];
        state.page += 1;
      })
      .addCase(searchedProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    }
})
export default menuSlice.reducer;
export const { resetProducts } = menuSlice.actions;


