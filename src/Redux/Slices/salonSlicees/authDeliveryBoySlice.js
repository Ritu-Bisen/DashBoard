import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import supabase from "../supabaseClient";
import { toast } from "react-toastify";
import supabase from "../../../SupaBaseClient";

// OTP: Send OTP to phone
export const deliveryBoyRegisterWithOtp = createAsyncThunk(
    'addDeliveryBoy/deliveryBoyRegisterWithOtp',
    async (phoneNumber, { rejectWithValue }) => {
      try {
        const phone = `91${phoneNumber}`
        console.log(phone);
        
        const { data, error } = await supabase.auth.signInWithOtp( {phone} );
        if (error) throw error;
        toast.success(`OTP Sent on +91 ${phoneNumber}`)
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );
  
  // OTP: Verify OTP
  export const deliveryBoyVerifyOtp = createAsyncThunk(
    'addDeliveryBoy/deliveryBoyVerifyOtp',
    async ({ phoneNumber, token }, { rejectWithValue }) => {
      try {
        const phone = `91${phoneNumber}`;
        console.log(phone);
        
        const { data: { session }, error } = await supabase.auth.verifyOtp({
          phone,
          token,
          type: 'sms',
        });
        if (error) throw error;
  
        toast.success("OTP verified successfully!");
        return session;
      } catch (err) {
        toast.error(`OTP verification failed: ${err.message}`);
        return rejectWithValue(err.message);
      }
    }
  );

  const authDeliveryBoySlice = createSlice({
    name: 'auth',
    initialState: {
      loading: false,
      error: null,
      otpSent:true ,
      otpVerified:true,
      sellerData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(deliveryBoyRegisterWithOtp.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deliveryBoyRegisterWithOtp.fulfilled, (state) => {
          state.loading = false;
          state.otpSent = true;
        })
        .addCase(deliveryBoyRegisterWithOtp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        .addCase(deliveryBoyVerifyOtp.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deliveryBoyVerifyOtp.fulfilled, (state) => {
          state.loading = false;
          state.otpVerified = true;
        })
        .addCase(deliveryBoyVerifyOtp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    },
});  

export default authDeliveryBoySlice.reducer;