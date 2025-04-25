import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"

export const getGymProducts=createAsyncThunk("product/fetch",async ()=>{
    const gymProduct = await fetchGymProductApi();
    return gymProduct;
})

const gymProductSlice = createSlice({
    name:"gymProducts",
    initialState:{
        gymProducts:[],
        loading:false,
        error:null
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(getGymProducts.pending,(state)=>{
        state.loading=true,
        state.error=null
       })
       .addCase(getGymProducts.fulfilled,(state,action)=>{
        state.gymProducts=action.payload;
       })
       .addCase(getGymProducts.rejected,(state,action)=>{
        state.error=action.payload;
       })
    }
})
export default gymProductSlice.reducer;