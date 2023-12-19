import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

/*
 * POST @ /api/auth/registration
 * body: { name, email, password, goal, gender, age, height, weight, activityRatio }
 */
export const registration = createAsyncThunk(
  'auth/registration',

  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/registration', newUser);
      // setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await instance.post('/api/auth/login', body);
    // setToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.message + '. ' + error.response.statusText + '.'
    );
  }
});

/*
 * POST @ /api/auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/logout');
      // setToken();
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

// TODO POST forgot-password (ще не зроблений бек)
/*
 * POST @ /api/auth/forgot-password
 * body: { email }
 */
export const forgotPassword = createAsyncThunk(
  'auth/forgot',

  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/forgot-password', body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// TODO DELETE USER (додати в слайс, якщо будемо використовувати)
/*
 * DELETE @ /api/auth/delete
 * headers: Authorization: Bearer token
 * body: { email, password }
 */
export const removeUser = createAsyncThunk(
  'auth/delete',

  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete('/api/auth/delete', body);
      // setToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// TODO refreshToken (додати в слайс, якщо будемо використовувати)
/*
 * GET @ /api/auth/refresh
 * headers: Authorization: Bearer token
 * body: { refreshToken }
 */
export const refresh = createAsyncThunk(
  'auth/refresh',

  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete('/api/auth/refresh', body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * GET @ /api/user/current
 * headers: Authorization: Bearer token
 */
export const currentUser = createAsyncThunk(
  '/user/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance('/api/user/current');
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

/*
 * PUT @ /api/user/update
 * headers: Authorization: Bearer token
 * * body: {name, gender, age, height, weight, activityRatio}
 */
// TODO (сюди потрібно прописати оновлення по юзеру (перевірити) )
export const updateUser = createAsyncThunk(
  '/user/update',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.put('/api/user/current', body);
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

/*
 * PUT @ /api/user/weight
 * headers: Authorization: Bearer token
 * * body: {}
 */

// TODO (сюди потрібно прописати оновлення по вазі )

/*
 * PUT @ /api/user/goal
 * headers: Authorization: Bearer token
 * * body: {}
 */
// TODO (сюди потрібно прописати оновлення по цілі)
