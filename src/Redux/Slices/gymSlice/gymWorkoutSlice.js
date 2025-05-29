import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchGymServicesApi } from "../../Api/gymApi/gymServicesApi";
import {
  fetchGymWorkoutAPI,
  searchGymWorkoutApi,
} from "../../Api/gymApi/gymWorkoutApi";

export const getGymWorkout = createAsyncThunk(
  "workout/fetch",
  async ({ page }, thunkAPI) => {
    const gymWorkout = await fetchGymWorkoutAPI(page);
    return gymWorkout;
  }
);

export const searchedGymWorkout = createAsyncThunk(
  "workout/search",
  async ({ page, searchQuery }, { rejectWithValue }) => {
    try {
      const data = await searchGymWorkoutApi({page, searchQuery});
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const gymWorkoutSlice = createSlice({
  name: "workout",
  initialState: {
    workout: [],
    loading: false,
    error: null,
  },

  reducers: {
    resetWorkout: (state) => {
      state.workout = [];
      state.page = 0;
      state.hasMore = true;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGymWorkout.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getGymWorkout.fulfilled, (state, action) => {
        if (action.payload.length < 10) {
          state.hasMore = false;
        }
        state.workout = [...state.workout, ...action.payload];
        state.page += 1;
        state.loading = false;
      })
      .addCase(getGymWorkout.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(searchedGymWorkout.fulfilled, (state, action) => {
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

        state.workout = [...state.workout, ...action.payload];
        state.page += 1;
      })
      .addCase(searchedGymWorkout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default gymWorkoutSlice.reducer;
export const { resetWorkout } = gymWorkoutSlice.actions;
