import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchGymProductApi } from "../../Api/gymApi/gymProductApi"
import { fetchGymServicesApi, searchGymServicesApi } from "../../Api/gymApi/gymServicesApi";

export const getGymServices=createAsyncThunk("services/fetch",async ({ page }, thunkAPI)=>{
    const gymService = await fetchGymServicesApi(page);
    return gymService;
})

export const searchedGymServices = createAsyncThunk(
  "services/search",
  async ({page, searchQuery }, { rejectWithValue }) => {
    try {
      const data = await searchGymServicesApi({page, searchQuery});
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const gymServicesSlice = createSlice({
    name:"services",
    initialState:{
        services:[],
        loading:false,
        error:null,
          page: 0,
    hasMore: true,
    },

    reducers:{
         resetServices: (state) => {
    state.services = [];
    state.page = 0;
    state.hasMore = true;
    state.loading = false;
    state.error = null;
  },
    },
    extraReducers:(builder)=>{
        builder
       .addCase(getGymServices.pending,(state)=>{
                              state.loading=true,
                              state.error=null
                             })
                       .addCase(getGymServices.fulfilled, (state, action) => {
                              if (action.payload.length < 10) {
                                state.hasMore = false;
                              }
                              state.services = [...state.services, ...action.payload];
                              state.page += 1;
                              state.loading = false;
                            })
                             .addCase(getGymServices.rejected,(state,action)=>{
                              state.error=action.payload;
                             })
                      
                            .addCase(searchedGymServices.fulfilled, (state, action) => {
                              state.status = "succeeded";
                                 if (!Array.isArray(action.payload)) {
                                console.error("Expected payload to be an array, but got:", action.payload);
                                state.status = "failed";
                                return;
                              }
                            
                              if (action.payload.length < 10) {
                                state.hasMore = false;
                              }
                            
                              state.services = [...state.services, ...action.payload];
                              state.page += 1;
                            })
                            .addCase(searchedGymServices.rejected, (state, action) => {
                              state.status = "failed";
                              state.error = action.payload;
                            });
    }
})
export default gymServicesSlice.reducer;
export const { resetServices } = gymServicesSlice.actions;