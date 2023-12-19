import { createSlice } from '@reduxjs/toolkit';

import {
  registration,
  logIn,
  logOut,
  currentUser,
  refresh,
} from './operations';

// TODO (потрібно подумати чи потрібно тут в state щось ще)
const initialState = {
  user: {},
  isLogin: false,
  token: '',
  // refreshToken: '',
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
};
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
  // state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
      })
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.token = payload.token;
        state.isLogin = true;
        // state.refreshToken = payload.token;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        handleFulfilled(state);
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        // state.token = payload.refreshtoken;
        state.isLogin = true;
      })
      .addCase(refresh.rejected, handleRejected)
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.user = payload.data;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        handleRejected(state, payload);
        // state.token = "";
      });
  },
});

export const authReducer = authSlice.reducer;
