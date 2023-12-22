import { createSlice } from '@reduxjs/toolkit';
import { getFoodDiaryToday } from './operations';

const initialState = {
  food: { breakfast: [], lunch: [], dinner: [], snack: [], calories: 0 },
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
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    resetDiary: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoodDiaryToday.pending, handlePending)
      .addCase(getFoodDiaryToday.fulfilled, (state, { payload }) => {
        state.food = payload;
        handleFulfilled(state);
      })
      .addCase(getFoodDiaryToday.rejected, handleRejected);
  },
});

export const { resetDiary } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
