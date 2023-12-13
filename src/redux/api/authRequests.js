import { dellToken, instanceForAuth, setToken } from './api';

//authorization
const setTokenToLocal = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const signUpReq = async (newUser) => {
  const { data } = await instanceForAuth.post('users/signup', newUser);
  setToken(data.token);
  setTokenToLocal(data.token);
  return data;
};

export const logInReq = async (body) => {
  const { data } = await instanceForAuth.post('users/login', body);
  setToken(data.token);
  setTokenToLocal(data.token);
  return data;
};

export const logOutReq = async () => {
  const { data } = await instanceForAuth.post('users/logout');
  localStorage.removeItem('token');
  dellToken();
  return data;
};

export const refreshReq = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  token && setToken(token);
  const { data } = await instanceForAuth('users/current');
  data.token = token;
  return data;
};
