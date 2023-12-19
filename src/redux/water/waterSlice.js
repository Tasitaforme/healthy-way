import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addDailyWater, getDailyWater } from './operations';

const initialState = {
  water: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    removeDailyWater(state) {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(getDailyWater.pending, addDailyWater.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getDailyWater.fulfilled, addDailyWater.fulfilled),
        (state, { payload }) => {
          handleFulfilled(state);
          state.water = payload.water;
        }
      )
      .addMatcher(
        isAnyOf(getDailyWater.rejected, addDailyWater.rejected),
        handleRejected
      );
  },
});

export const { removeDailyWater } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
