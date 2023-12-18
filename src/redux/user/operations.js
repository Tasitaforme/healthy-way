import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from '../api/api';

/*
 * GET @ /api/user/current
 * headers: Authorization: Bearer token
 */
export const refresh = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/user/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * PUT @ /api/user/current
 * headers: Authorization: Bearer token
 * * body: {}
 */

// TODO (скоріше за все сюди потрібно буде прописати оновлення по вазі та цілі)
