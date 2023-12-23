import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from '../api/api';
import axios from 'axios';

export const GetStatisticsPerMonth = async (numberMonth) => {
  try {
    setToken();
    const response = await axios.get(
      `https://healthy-way-app.onrender.com/api/user/statistics?period=month&month=${numberMonth}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// так, роут /api/user/statistics
// квери:
// ?period=today  - за сьогодні
// ?period=year  - за рік
// ?period=month&month=12 (05,08,10...) - за конкретний місяць
// ?period=month&quantity=3 (5,6,10...) - за кількість останніх місяців
// export const GetStatisticsPerMonth = createAsyncThunk(
//   'user/statistics',
//   async (numberMonth) => {
//     try {
//       const { data } = await instance.get(
//         `/api/user/statistics?period=month&month=${numberMonth}`
//       );
//       setToken(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message + '. ' + error.response.statusText + '.'
//       );
//     }
//   }
// );
