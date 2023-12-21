import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../auth/operations';

/*
 * GET @ /api/user/water
 * headers: Authorization: Bearer token
 */
export const getDailyWater = createAsyncThunk(
  'user/water/get',
  async (_, thunkAPI) => {
    try {
      //   const state = thunkAPI.getState();
      //   const persistToken = state.auth.refreshToken;
      //   if (!persistToken) {
      //     return thunkAPI.rejectWithValue('No token');
      //   }
      //   persistToken && setToken(persistToken);
      const { data } = await instance('/api/user/water');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/*
 * PUT @ /api/user/water
 * headers: Authorization: Bearer token
 * body: { water }
 */
export const addDailyWater = createAsyncThunk(
  'user/water/put',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.put('/api/user/water', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /api/user/water
 * headers: Authorization: Bearer token
 */
export const removeDailyWater = createAsyncThunk(
  'user/water/delete',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete('/api/user/water');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
