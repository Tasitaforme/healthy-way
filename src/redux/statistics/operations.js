import instance from '../../redux/auth/operations';

export const GetStatisticsPerMonth = async (numberMonth) => {
  try {
    const { data } = await instance.get(
      `https://healthy-way-app.onrender.com/api/user/statistics?period=month&month=${numberMonth}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
