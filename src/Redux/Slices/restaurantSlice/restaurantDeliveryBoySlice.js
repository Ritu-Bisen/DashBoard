import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantDeliveryBoyData, restaurantdeliveryBoyRegisterApi } from "../../Api/restaurantApi/restaurantDeliverBoyApi";

// Async thunk to fetch delivery boys
export const getRestaurantDeliveryBoyData = createAsyncThunk(
  'deliveryBoyData/fetch',
  async (sellerDetails) => {
    const deliveryBoyDetails = await fetchRestaurantDeliveryBoyData(sellerDetails);
    console.log(deliveryBoyDetails);
    return deliveryBoyDetails;
  }
);

// Async thunk to register a new delivery boy
export const restaurantDeliveryBoyRegister = createAsyncThunk(
  "deliveryBoy/register",
  async ({ formData }) => {
    const deliveryBoys = await restaurantdeliveryBoyRegisterApi({ formData });
    return deliveryBoys;
  }
);

// Slice
const restaurantDeliveryBoyDataSlice = createSlice({
  name: "deliveryBoys",
  initialState: {
    deliveryBoys: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(restaurantDeliveryBoyRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(restaurantDeliveryBoyRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys.push(action.payload);
      })
      .addCase(restaurantDeliveryBoyRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getRestaurantDeliveryBoyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRestaurantDeliveryBoyData.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getRestaurantDeliveryBoyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default restaurantDeliveryBoyDataSlice.reducer;
