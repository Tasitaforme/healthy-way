import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createFoodDiary,
  deleteFoodDiary,
  getFoodDiaryToday,
  updateFoodDiary,
} from './operations';

const initialState = {
  meals: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  calories: 0,
  isLoading: false,
  error: null,
  firstLoad: false,
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
      .addCase(getFoodDiaryToday.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.firstLoad = true;
        const { calories, ...meals } = payload;
        state.meals = meals;
        state.calories = calories;
      })
      .addCase(createFoodDiary.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        const type = payload.diary;
        state.diary[type] = [...payload];
      })
      .addCase(updateFoodDiary.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        const { calories, ...meals } = payload;
        state.meals = meals;
        state.calories = calories;
      })
      .addCase(deleteFoodDiary.fulfilled, (state) => {
        handleFulfilled(state);
        state.meals = [];
        state.calories = 0;
      })
      .addMatcher(
        isAnyOf(
          getFoodDiaryToday.pending,
          createFoodDiary.pending,
          updateFoodDiary.pending,
          deleteFoodDiary.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getFoodDiaryToday.rejected,
          createFoodDiary.rejected,
          updateFoodDiary.rejected,
          deleteFoodDiary.rejected
        ),
        handleRejected
      );
  },
});

export const { resetDiary } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
