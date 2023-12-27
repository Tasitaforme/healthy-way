import instance from '../redux/auth/operations';

/*
 * PUT @ /api/auth/change-password
 * headers: Authorization: Bearer token
 * body: { email, password, newPassword }
 */

export const changePassword = async (body) => {
  try {
    const response = await instance.put('/api/auth/change-password', body);
    // console.log(response);
    return response;
  } catch (error) {
    throw error.response.data;
    // return error.response.data;
  }
};
