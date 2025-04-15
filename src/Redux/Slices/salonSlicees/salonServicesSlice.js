import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSalonServicesApi } from "../../Api/salonApi/salonServicesApi";


export const getServices = createAsyncThunk("service/fetch", async() => {
        const services = await fetchSalonServicesApi();
      //  console.log(services);
        return services ;
});

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        services: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.services = action.payload;
            })
            .addCase(getServices.rejected, (state, action) => {  
                state.error = action.payload ;
            });
    },
});

export default serviceSlice.reducer;
