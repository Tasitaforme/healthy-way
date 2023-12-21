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
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error.message;
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    resetDiary: (state) => {
      state.items = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoodDiaryToday.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.firstLoad = true;
        for (const key in payload) {
          if (state.meals.hasOwnProperty(key)) {
            state.meals[key] = payload[key];
          }
        }
        state.calories = payload.calories;
      })
      .addCase(createFoodDiary.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        // const type = toLowerCase(payload.diary);
        // state.diary[type] = [...payload];
        // TODO
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
        handlePending
      );
  },
});

export const { resetDiary } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
