import instance from '../redux/auth/operations';

/*
 * POST @ /api/auth/change-password
 * body: { email, password, newPassword }
 */
export const changePassword = async (body) => {
  try {
    const { data } = await instance.put('/api/auth/change-password', body);
    return data;
  } catch (error) {
    return error;
  }
};
