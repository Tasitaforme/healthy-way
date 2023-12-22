export const selectDiaryInfo = (state) => state.diary;
export const selectDiaryMeals = (state) => state.diary.meals;
export const breakfast = (state) => state.diary.meals.breakfast;
export const dinner = (state) => state.diary.meals.dinner;
export const lunch = (state) => state.diary.meals.lunch;
export const snack = (state) => state.diary.meals.snack;
export const selectTotalCalories = (state) => state.diary.calories;
