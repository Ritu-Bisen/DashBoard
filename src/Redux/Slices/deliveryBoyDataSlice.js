import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deliveryBoyRegisterApi, fetchDeliveryBoyData } from "../Api/deliveryBoyApi";

// Async thunk to fetch delivery boys
export const getdeliveryBoyData = createAsyncThunk(
  'deliveryBoyData/fetch',
  async () => {
    const deliveryBoyDetails = await fetchDeliveryBoyData();
    console.log(deliveryBoyDetails);
    return deliveryBoyDetails;
  }
);

// Async thunk to register a new delivery boy
export const deliveryBoyRegister = createAsyncThunk(
  "deliveryBoy/register",
  async ({ formData, seller_id }) => {
    const deliveryBoys = await deliveryBoyRegisterApi({ formData, seller_id });
    return deliveryBoys;
  }
);

// Slice
const deliveryBoyDataSlice = createSlice({
  name: "deliveryBoys",
  initialState: {
    deliveryBoys: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deliveryBoyRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(deliveryBoyRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys.push(action.payload);
      })
      .addCase(deliveryBoyRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getdeliveryBoyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getdeliveryBoyData.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getdeliveryBoyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default deliveryBoyDataSlice.reducer;
