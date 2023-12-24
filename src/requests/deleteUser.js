import instance from '../redux/auth/operations';

/*
 * DELETE @ /api/auth/delete
 * headers: Authorization: Bearer token
 * body: { email, password }
 */
export const removeUser = async (body) => {
  try {
    const { data } = await instance.delete('/api/auth/delete', { data: body });
    return data;
  } catch (error) {
    return error.response.data;
  }
};
