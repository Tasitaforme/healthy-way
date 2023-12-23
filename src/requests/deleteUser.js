import instance from '../redux/auth/operations';
import { store } from '../redux/store';

/*
 * DELETE @ /api/auth/delete
 * headers: Authorization: Bearer token
 * body: { email, password }
 */
export const removeUser = async (body) => {
  try {
    const { data } = await instance.delete('/api/auth/delete', body);
    console.log(data);
    store.dispatch(logOut());
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
