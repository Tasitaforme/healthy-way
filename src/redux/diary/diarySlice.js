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

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const diaryReducer = diarySlice.reducer;
