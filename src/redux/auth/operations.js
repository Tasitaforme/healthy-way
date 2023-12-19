import { createAsyncThunk } from '@reduxjs/toolkit';
import { dellToken, instance, setToken } from '../api/api';

/*
 * POST @ /api/auth/registration
 * body: { name, email, password, goal, gender, age, height, weight, activityRatio }
 */
export const registration = createAsyncThunk(
  'auth/registration',

  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/api/auth/registration', newUser);
      setToken(data.token);
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
    setToken(data.token);
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
// export const logOut = createAsyncThunk(
//   'auth/logout',

//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.post('/api/auth/logout');
//       dellToken();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const logOut = createAsyncThunk(
  'auth/logout',

  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      console.log(persistToken);
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      persistToken && setToken(persistToken);
      const { data } = await instance.post('/api/auth/logout');
      dellToken();
      return data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(error));
      return thunkAPI.rejectWithValue(error.response.data);
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
      // dellToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
