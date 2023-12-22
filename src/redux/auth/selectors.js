export const selectAuthInfo = (state) => state.auth;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectPersistToken = (state) => state.auth.refreshToken;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectBaseWater = (state) => state.auth.user.baseWater;
export const selectUserInfo = (state) => state.auth.user;
