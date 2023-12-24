import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addDailyWater, getDailyWater, removeDailyWater } from './operations';

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
  state.error = payload.error.message;
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    resetWater: (state) => {
      state.water = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getDailyWater.pending,
          addDailyWater.pending,
          removeDailyWater.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getDailyWater.fulfilled,
          addDailyWater.fulfilled,
          removeDailyWater.fulfilled
        ),
        (state, { payload }) => {
          handleFulfilled(state);
          state.water = payload.water;
        }
      )
      .addMatcher(
        isAnyOf(
          getDailyWater.rejected,
          addDailyWater.rejected,
          removeDailyWater.rejected
        ),
        handleRejected
      );
  },
});

export const { resetWater } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
