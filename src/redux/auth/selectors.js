export const selectAuthInfo = (state) => state.auth;
export const selectUserInfo = (state) => state.auth.user;
export const selectIsLogin = (state) => state.auth.isLogin;
export const selectBaseWater = (state) => state.auth.user.baseWater;
