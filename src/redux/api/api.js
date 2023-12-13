import axios from 'axios';

export const instanceForAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = (token) => {
  instanceForAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const dellToken = () => {
  instanceForAuth.defaults.headers.common['Authorization'] = '';
};
