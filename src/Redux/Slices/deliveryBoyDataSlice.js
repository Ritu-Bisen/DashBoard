import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deliveryBoyRegisterApi,  fetchActiveVerifiedDeliveryBoyApi,  fetchDeliveryBoyData, fetchDeliveryBoyDataRequestApi, fetchInactiveVerifiedDeliveryBoyApi,  fetchVerifiedDeliveryBoyApi, updateActiveDeliveryBoysAPI, updateInactiveDeliveryBoysAPI } from "../Api/deliveryBoyApi";

// Async thunk to fetch delivery boys
export const getdeliveryBoyData = createAsyncThunk(
  'deliveryBoyData/fetch',
  async (sellerDetails) => {
    const deliveryBoyDetails = await fetchDeliveryBoyData(sellerDetails);
    console.log(deliveryBoyDetails);
    return deliveryBoyDetails;
  }
);

// Async thunk to register a new delivery boy
export const deliveryBoyRegister = createAsyncThunk(
  "deliveryBoy/register",
  async ({ formData, sellerDetails }) => {
    const deliveryBoys = await deliveryBoyRegisterApi({ formData,sellerDetails});
    return deliveryBoys;
  }
);

export const getDeliveryBoyRequest=createAsyncThunk("deliveryBoy-request/fetch",async(sellerDetails)=>{
  const DeliveryBoyRequest=await fetchDeliveryBoyDataRequestApi(sellerDetails)
  return DeliveryBoyRequest
  })

export const getVerifiedDeliveryBoy=createAsyncThunk("verified-deliveryBoy/fetch",async(sellerDetails)=>{
const verifiedDeliveryBoy=await fetchVerifiedDeliveryBoyApi(sellerDetails)
return verifiedDeliveryBoy
})

export const getActiveVerifiedDeliveryBoys = createAsyncThunk("ActiveVerified/deliverBoys", async(sellerDetails)=>{
  const deliverBoys = await fetchActiveVerifiedDeliveryBoyApi(sellerDetails)
  return deliverBoys
})

export const getInactiveVerifiedDeliveryBoys = createAsyncThunk("InactiveVerified/deliverBoys", async(sellerDetails)=>{
  const deliverBoys = await fetchInactiveVerifiedDeliveryBoyApi(sellerDetails)
  return deliverBoys
})

export const updateActiveDeliveryBoys=createAsyncThunk('active/update',async(deliveryBoyId)=>{
  
  const activeDeliveryBoy=await updateActiveDeliveryBoysAPI(deliveryBoyId)
  return activeDeliveryBoy
})

export const updateInactiveDeliveryBoys=createAsyncThunk('inactive/update',async(deliveryBoyId)=>{
  const inactiveDeliveryBoy=await updateInactiveDeliveryBoysAPI(deliveryBoyId)
  return inactiveDeliveryBoy
})

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
      })
      .addCase(getVerifiedDeliveryBoy.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVerifiedDeliveryBoy.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getVerifiedDeliveryBoy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getActiveVerifiedDeliveryBoys.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveVerifiedDeliveryBoys.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getActiveVerifiedDeliveryBoys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getInactiveVerifiedDeliveryBoys.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInactiveVerifiedDeliveryBoys.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getInactiveVerifiedDeliveryBoys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getDeliveryBoyRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeliveryBoyRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.deliveryBoys = action.payload;
      })
      .addCase(getDeliveryBoyRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateActiveDeliveryBoys.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateActiveDeliveryBoys.fulfilled, (state, action) => {
        state.loading = false;
        const updatedActive = action.payload;
      
        if (!updatedActive) return; //  Avoid crashing
      
        state.deliveryBoys = state.deliveryBoys.map((boy) =>
          boy.id === updatedActive.id ? updatedActive : boy
        );
        
      })
      .addCase(updateActiveDeliveryBoys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateInactiveDeliveryBoys.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateInactiveDeliveryBoys.fulfilled, (state, action) => {
        state.loading = false;
        const updatedInactive = action.payload;
      
        if (!updatedInactive) return; //  Avoid crashing
      
        state.deliveryBoys = state.deliveryBoys.map((boy) =>
          boy.id === updatedInactive.id ? updatedInactive : boy
        );
        
      })
      .addCase(updateInactiveDeliveryBoys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default deliveryBoyDataSlice.reducer;
