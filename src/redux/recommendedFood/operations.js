import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../auth/operations';

/*
 * GET @ /api/user/recommended-food
 * headers: Authorization: Bearer token
 */
export const getRecommendedFood = createAsyncThunk(
  'user/recommendedFood/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/user/recommended-food');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
