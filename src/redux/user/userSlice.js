import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    email: null,
    age: null,
    gender: '',
    height: null,
    weight: null,
    goal: '',
    baseWater: '',
    activityRatio: '',
    fat: '',
    protein: '',
    carbohydrate: '',
    BMR: '',
    avatarURL: '',
  },
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userReducer = userSlice.reducer;
