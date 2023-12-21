import React from 'react';
import { HeadlineSecond } from '../StyledComponents/Components.styled';
import { useSelector } from 'react-redux';
import { selectDiaryInfo } from '../../redux/diary/selectors';
import { getTotalNutrients } from '../../helpers';
import { selectUserInfo } from '../../redux/auth/selectors';
import { CaloriesWrap, NutrientsWrap, WrapMain } from './Food.styled';

export default function Food() {
  const {
    fat: baseFat,
    protein: baseProtein,
    carbohydrate: baseCarbohydrate,
    BMR: baseCalories,
  } = useSelector(selectUserInfo);
  const { meals } = useSelector(selectDiaryInfo);
  const { fat, protein, carbohydrate, calories } = getTotalNutrients(meals);
  console.log(fat);
  console.log(baseFat);
  return (
    <>
      <HeadlineSecond>Food</HeadlineSecond>
      <WrapMain>
        <CaloriesWrap>sd</CaloriesWrap>
        <NutrientsWrap></NutrientsWrap>
      </WrapMain>
    </>
  );
}
