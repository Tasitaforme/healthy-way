export const selectAuthInfo = (state) => state.auth;
export const selectAccessToken = (state) => state.auth.token;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectBaseWater = (state) => state.auth.user.baseWater;
export const selectUserInfo = (state) => state.auth.user;
