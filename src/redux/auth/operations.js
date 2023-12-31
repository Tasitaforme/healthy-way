import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';
import { resetWater } from '../water/waterSlice';
import { resetDiary } from '../diary/diarySlice';

const instance = axios.create({
  baseURL: 'https://healthy-way-app.onrender.com',
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`);
  }
  instance.defaults.headers.common['Authorization'] = '';
};

instance.interceptors.request.use(
  (config) => {
    const {
      auth: { accessToken },
    } = store.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
 * POST @ /api/auth/registration
 * body: { name, email, password, goal, gender, age, height, weight, activityRatio }
 */
export const registration = createAsyncThunk(
  'auth/registration',

  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/registration', newUser);
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
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
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
      store.dispatch(resetWater());
      store.dispatch(resetDiary());
      setToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /api/auth/delete
 * headers: Authorization: Bearer token
 * body: { password }
 */

export const removeUser = createAsyncThunk(
  'auth/delete',

  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/api/auth/delete/${body}`);
      store.dispatch(resetWater());
      store.dispatch(resetDiary());
      setToken();
      if (response && response.data) {
        const { data } = response;
        return data;
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /api/auth/refresh
 * headers: Authorization: Bearer token
 * body: { refreshToken }
 */
export const refresh = createAsyncThunk(
  'auth/refresh',

  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/refresh', body);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      auth: { refreshToken },
    } = store.getState();
    if (error.response.status === 401) {
      if (refreshToken) {
        try {
          await store.dispatch(refresh({ refreshToken }));
          return Promise.resolve();
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
    // if (error.response.status === 403) {
    //   store.dispatch(logOut());
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  }
);

/*
 * GET @ /api/user/current
 * headers: Authorization: Bearer token
 */
export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance('/api/user/current');
      return data;
    } catch (error) {
      setToken();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /api/user/update
 * headers: Authorization: Bearer token
 * body: {name, gender, age, height, weight, activityRatio}
 */
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (data, thunkAPI) => {
    try {
      const response = await instance.put('/api/user/update', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/user/load-avatar
 * headers: Authorization: Bearer token
 * form-data: "avatar"
 */
export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (avatarData, thunkAPI) => {
    try {
      const response = await instance.post(
        '/api/user/load-avatar',
        avatarData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /api/user/weight
 * headers: Authorization: Bearer token
 * body: {weight}
 */
export const updateWeight = createAsyncThunk(
  'user/weight',
  async (inputWeight, thunkAPI) => {
    try {
      const response = await instance.put('/api/user/weight', {
        weight: inputWeight,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /api/user/goal
 * headers: Authorization: Bearer token
 * body: {goal}
 */
export const updateGoal = createAsyncThunk(
  'user/goal',
  async (selectedGoal, thunkAPI) => {
    try {
      const response = await instance.put('/api/user/goal', {
        goal: selectedGoal,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
