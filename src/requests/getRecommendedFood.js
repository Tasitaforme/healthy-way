import instance from '../redux/auth/operations';

/*
 * GET @ /api/user/recommended-food
 * headers: Authorization: Bearer token
 */
export const getRecommendedFood = async () => {
  try {
    const { data } = await instance.get('/api/user/recommended-food');
    return data;
  } catch (error) {
    return error;
  }
};
