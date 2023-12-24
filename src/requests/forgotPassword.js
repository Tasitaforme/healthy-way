import axios from 'axios';

const instanceForgot = axios.create({
  baseURL: 'https://healthy-way-app.onrender.com',
});

/*
 * POST @ /api/auth/forgot-password
 * body: { email }
 */
export const forgotPassword = async (body) => {
  try {
    const { data } = await instanceForgot.post(
      '/api/auth/forgot-password',
      body
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
