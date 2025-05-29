import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSalonServicesApi,
  searchSalonServicesApi,
} from "../../Api/salonApi/salonServicesApi";

export const getServices = createAsyncThunk(
  "service/fetch",
  async ({ page }, thunkAPI) => {
    const services = await fetchSalonServicesApi(page);
    //  console.log(services);
    return services;
  }
);

export const searchedSalonServices = createAsyncThunk(
  "services/search",
  async ({ page, searchQuery }, { rejectWithValue }) => {
    try {
      const data = await searchSalonServicesApi(page, searchQuery);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    loading: false,
    error: null,
    page: 0,
    hasMore: true,
  },
  reducers: {
    resetServices: (state) => {
      state.services = [];
      state.page = 0;
      state.hasMore = true;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getServices.fulfilled, (state, action) => {
        if (action.payload.length < 10) {
          state.hasMore = false;
        }
        state.services = [...state.services, ...action.payload];
        state.page += 1;
        state.loading = false;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(searchedSalonServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!Array.isArray(action.payload)) {
          console.error(
            "Expected payload to be an array, but got:",
            action.payload
          );
          state.status = "failed";
          return;
        }

        if (action.payload.length < 10) {
          state.hasMore = false;
        }

        state.services = [...state.services, ...action.payload];
        state.page += 1;
      })
      .addCase(searchedSalonServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default serviceSlice.reducer;
export const { resetServices } = serviceSlice.actions;
