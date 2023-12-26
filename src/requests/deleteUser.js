import instance from '../redux/auth/operations';

/*
 * DELETE @ /api/auth/delete
 * headers: Authorization: Bearer token
 * body: { email, password }
 */

export const removeUser = async (password) => {
  try {
    const response = await instance.delete(`/api/auth/delete/${password}`);
    if (response && response.data) {
      const { data } = response;
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};
