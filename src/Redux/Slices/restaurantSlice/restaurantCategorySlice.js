import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchRestaurantCategoryApi } from "../../Api/restaurantApi/restaurantCategoryApi";




export const getRestaurantCategory=createAsyncThunk("category/fetch",async (segment) =>{
    const category = await fetchRestaurantCategoryApi(segment);
    
    console.log(category);
    
     return category;
})

const categoriesSlice = createSlice({
    name:"category",
    initialState:{
        category:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getRestaurantCategory.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getRestaurantCategory.fulfilled,(state,action)=>{
        state.category=action.payload;
       })
       .addCase(getRestaurantCategory.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default categoriesSlice.reducer;