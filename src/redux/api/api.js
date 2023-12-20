import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://healthy-way-app.onrender.com',
});

export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const dellToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};
