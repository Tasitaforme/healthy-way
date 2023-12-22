import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';
import { resetWater } from '../water/waterSlice';
import { resetRecommendedFood } from '../recommendedFood/recommendedFoodSlice';
import { resetStatistics } from '../statistics/statisticsSlice';
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
  } catch ({ response }) {
    const { status, data } = response;
    const error = {
      status,
      message: data.message,
    };
    return thunkAPI.rejectWithValue(error);
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
      store.dispatch(resetRecommendedFood());
      store.dispatch(resetStatistics());
      store.dispatch(resetDiary());
      setToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      setToken();
      return data;
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

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const {
//       auth: { refreshToken },
//     } = store.getState();
//     if (error.response.status === 401) {
//       if (refreshToken) {
//         try {
//           await store.dispatch(refresh({ refreshToken }));
//           return Promise.resolve();
//         } catch (refreshError) {
//           return Promise.reject(refreshError);
//         }
//       }
//       return Promise.reject(error);
//     }
//     if (error.response.status === 403) {
//       store.dispatch(logOut());
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

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
    } catch ({ response }) {
      setToken();
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (data, thunkAPI) => {
    try {
      const response = await instance.put('/api/user/update', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   'auth/update',
//   async ({ values }, thunkAPI) => {
//     try {
//       const response = await instance.put('/api/user/update', values, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       return response.data;
//     } catch ({ response }) {
//       setToken();
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

/*
 * PUT @ /api/user/update
 * headers: Authorization: Bearer token
 * * body: {name, gender, age, height, weight, activityRatio}
 */
// TODO (сюди потрібно прописати оновлення по юзеру (перевірити) )
// export const updateUser = createAsyncThunk(
//   'user/update',
//   async (body, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.put('/api/user/current', body);
//       return data;
//     } catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );

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

export default instance;
