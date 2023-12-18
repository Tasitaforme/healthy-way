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

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const statisticsReducer = statisticsSlice.reducer;
