import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../auth/operations';

/*
 * GET @ /api/user/food
 * headers: Authorization: Bearer token
 */
export const getFoodDiaryToday = createAsyncThunk(
  'user/food/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance('/api/user/food');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /api/user/food
 * headers: Authorization: Bearer token
 * body: {  diary: ["Breakfast", "Lunch", "Dinner", "Snack"],
 *          name, carbohydrate, protein, fat, BMR }
 */
export const createFoodDiary = createAsyncThunk(
  'user/food/post',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/user/food', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * PUT @ /api/user/food/:foodId
 * headers: Authorization: Bearer token
 * body: { id }
 */
export const updateFoodDiary = createAsyncThunk(
  'user/food/put',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.put(`/api/user/food/${id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /api/user/food/:foodId
 * headers: Authorization: Bearer token
 * body: { id }
 */
export const deleteFoodDiary = createAsyncThunk(
  'user/food/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/api/user/food/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
