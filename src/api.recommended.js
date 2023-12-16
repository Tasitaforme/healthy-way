import axios from "axios";


axios.defaults.baseURL = 'https://healthy-way-app.onrender.com/user';

export const fetchRecommendedFood = async () => {
  try {
    const response = await axios.get(`/recommended-food`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};