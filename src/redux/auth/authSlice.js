import { createSlice } from '@reduxjs/toolkit';

import { registration, logIn, logOut } from './operations';

// TODO (потрібно подумати чи потрібно тут в state щось ще)
const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
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
        // TODO (потрібно подумати чи потрібно в state щось ще, якщо що дописати)
      })
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.token = payload.token;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
