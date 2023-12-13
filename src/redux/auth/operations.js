import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInReq,
  logOutReq,
  refreshReq,
  signUpReq,
} from '../api/authRequests';

export const signUp = createAsyncThunk(
  'auth/signUp',

  async (newContact, { rejectWithValue }) => {
    try {
      return await signUpReq(newContact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thinkAPI) => {
  try {
    return await logInReq(body);
  } catch (error) {
    return thinkAPI.rejectWithValue(
      error.message + '. ' + error.response.statusText + '.'
    );
  }
});

export const logOut = createAsyncThunk(
  'auth/logout',

  async (_, { rejectWithValue }) => {
    try {
      return await logOutReq();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      return await refreshReq();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
