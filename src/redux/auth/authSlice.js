import { createSlice } from '@reduxjs/toolkit';

import {
  registration,
  logIn,
  logOut,
  currentUser,
  refresh,
  updateUser,
  updateAvatar,
  updateWeight,
  updateGoal,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    age: null,
    gender: null,
    height: null,
    weight: null,
    goal: 0,
    baseWater: '',
    activityRatio: '',
    fat: '',
    protein: '',
    carbohydrate: '',
    BMR: '',
    avatarURL: '',
  },
  isLogin: false,
  accessToken: '',
  refreshToken: '',
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
  state.error = payload.message;
};

const handleUpdateUserFulfilled = (state, { payload }) => {
  state.user = { ...state.user, ...payload.data };
  state.isLogin = true;
};
const handleUpdateAvatarFulfilled = (state, action) => {
  state.user.avatarURL = action.payload;
  state.isLogin = true;
};

const handleUpdateWeightFulfilled = (state, action) => {
  state.user.weight = action.payload.weight;
  // state.user.BMR = action.payload.bmr;
};

const handleUpdateGoalFulfilled = (state, action) => {
  state.user.goal = action.payload.goal;
  // state.user.fat = action.payload.fat;
  // state.user.protein = action.payload.protein;
  // state.user.carbohydrate = action.payload.carbohydrate;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, handleFulfilled)
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.isLogin = true;
        state.refreshToken = payload.refreshToken;
        state.accessToken = payload.accessToken;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        handleFulfilled(state);
        state.user = {};
        state.accessToken = '';
        state.refreshToken = '';
        state.isLogin = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
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
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, handleUpdateUserFulfilled)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateAvatar.fulfilled, handleUpdateAvatarFulfilled)
      .addCase(updateAvatar.rejected, handleRejected)
      .addCase(updateWeight.pending, handlePending)
      .addCase(updateWeight.fulfilled, handleUpdateWeightFulfilled)
      .addCase(updateWeight.rejected, handleRejected)
      .addCase(updateGoal.pending, handlePending)
      .addCase(updateGoal.fulfilled, handleUpdateGoalFulfilled)
      .addCase(updateGoal.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
