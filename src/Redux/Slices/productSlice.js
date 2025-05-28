import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchProductApi, searchMartProductApi } from "../Api/productApi";


export const getproduct=createAsyncThunk("product/fetch",async ({ page }, thunkAPI) =>{
    const products = await fetchProductApi(page);
    console.log(products);
    
     return products;
})


export const searchedMartProducts = createAsyncThunk(
  "product/search",
  async ({page, searchQuery }, { rejectWithValue }) => {
    try {
      const data = await searchMartProductApi(page, searchQuery);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        loading:false,
        error:null,
         page: 0,
    hasMore: true,
    },

    reducers:{
         resetProducts: (state) => {
    state.products = [];
    state.page = 0;
    state.hasMore = true;
    state.loading = false;
    state.error = null;
  },
    },
    extraReducers:(builder)=>{
        builder
      .addCase(getproduct.pending,(state)=>{
              state.loading=true,
              state.error=null
             })
       .addCase(getproduct.fulfilled, (state, action) => {
              if (action.payload.length < 10) {
                state.hasMore = false;
              }
              state.products = [...state.products, ...action.payload];
              state.page += 1;
              state.loading = false;
            })
             .addCase(getproduct.rejected,(state,action)=>{
              state.error=action.payload;
             })
      
            .addCase(searchedMartProducts.fulfilled, (state, action) => {
              state.status = "succeeded";
                 if (!Array.isArray(action.payload)) {
                console.error("Expected payload to be an array, but got:", action.payload);
                state.status = "failed";
                return;
              }
            
              if (action.payload.length < 10) {
                state.hasMore = false;
              }
            
              state.products = [...state.products, ...action.payload];
              state.page += 1;
            })
            .addCase(searchedMartProducts.rejected, (state, action) => {
              state.status = "failed";
              state.error = action.payload;
            });
    }
})
export default productSlice.reducer;
export const { resetProducts } = productSlice.actions;