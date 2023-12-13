import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, refresh, signUp } from './operations';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: {},
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledSignUp = (state, { payload }) => {
  state.profile = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, handleFulfilledSignUp)
      .addCase(signUp.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleFulfilledSignUp)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.profile.name = payload.name;
        state.profile.email = payload.email;
        state.token = payload.token;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(refresh.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
