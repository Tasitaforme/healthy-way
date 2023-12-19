import axios from 'axios';
import { store } from '../store';

export const instance = axios.create({
  baseURL: 'https://healthy-way-app.onrender.com',
});

// export const setToken = (token) => {
//   if (token) {
//     return (instance.defaults.headers.common[
//       'Authorization'
//     ] = `Bearer ${token}`);
//   }
//   instance.defaults.headers.common['Authorization'] = '';
// };

instance.interceptors.request.use((config) => {
  const {
    auth: { token },
  } = store.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// TODO accessToken/refreshToken
// instance.interceptors.request.use((config) => {
//   const {
//     auth: { accessToken },
//   } = store.getState();
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status == 401) {
//       const {
//         auth: { refreshToken },
//       } = store.getState();
//       try {
//         await dispatch(refresh(refreshToken));
//         return instance(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
