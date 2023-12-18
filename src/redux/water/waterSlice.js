import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
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

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const waterReducer = waterSlice.reducer;
