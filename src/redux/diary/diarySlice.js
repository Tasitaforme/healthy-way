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
  fat: 0,
  protein: 0,
  carbohydrate: 0,
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

const handleGetDiaryToday = (state, { payload }) => {
  state.meals.breakfast = payload.breakfast;
  state.meals.dinner = payload.dinner;
  state.meals.lunch = payload.lunch;
  state.meals.snack = payload.snack;
  state.calories = payload.calories;
  state.protein = payload.protein;
  state.carbohydrate = payload.carbohydrate;
  state.fat = payload.fat;

  handleFulfilled(state);
};

const handleCreateFoodDiary = (state, { payload }) => {
  const { diary, ...data } = payload;
  state.meals[diary.toLowerCase()].push(data);

  state.calories = payload.calories + data.calories || 0;
  state.protein = payload.protein + data.protein || 0;
  state.carbohydrate = payload.carbohydrate + data.carbohydrate || 0;
  state.fat = payload.fat + data.fat || 0;

  handleFulfilled(state);
};

const handleUpdateFoodDiary = (state, { payload }) => {
  const { diary, ...data } = payload;
  state.meals[diary.toLowerCase()].push(data);

  state.calories = payload.calories + data.calories || 0;
  state.protein = payload.protein + data.protein || 0;
  state.carbohydrate = payload.carbohydrate + data.carbohydrate || 0;
  state.fat = payload.fat + data.fat || 0;

  handleFulfilled(state);
};

const handleDeleteFoodDiary = (state, { payload }) => {
  const { diary, ...data } = payload;
  state.meals[diary.toLowerCase()].push(data);

  state.calories = payload.calories - data.calories || 0;
  state.protein = payload.protein - data.protein || 0;
  state.carbohydrate = payload.carbohydrate - data.carbohydrate || 0;
  state.fat = payload.fat - data.fat || 0;

  const index = state.items.findIndex((data) => data.id === payload.id);
  state.items.splice(index, 1);

  handleFulfilled(state);
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
      .addCase(getFoodDiaryToday.fulfilled, handleGetDiaryToday)
      .addCase(createFoodDiary.fulfilled, handleCreateFoodDiary)
      .addCase(updateFoodDiary.fulfilled, handleUpdateFoodDiary)
      .addCase(deleteFoodDiary.fulfilled, handleDeleteFoodDiary)
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
