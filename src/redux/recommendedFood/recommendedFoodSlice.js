import { createSlice } from '@reduxjs/toolkit';
import { getRecommendedFood } from './operations';

const initialState = {
  items: [],
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

export const recommendedFoodSlice = createSlice({
  name: 'recommendedFood',
  initialState,
  reducers: {
    resetRecommendedFood: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedFood.pending, handlePending)
      .addCase(getRecommendedFood.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(getRecommendedFood.rejected, handleRejected);
  },
});

export const { resetRecommendedFood } = recommendedFoodSlice.actions;
export const recommendedFoodReducer = recommendedFoodSlice.reducer;
