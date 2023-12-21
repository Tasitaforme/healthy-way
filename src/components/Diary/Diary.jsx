import React, { useEffect, useState } from 'react';
import {
  ButtonTextSecond,
  HeadlineSecond,
  StyledLink,
} from '../StyledComponents/Components.styled';
import { DiaryList, TitleWrap } from './Diary.styled';
// import { nanoid } from '@reduxjs/toolkit';

import DiaryItem from './DiaryItem/DiaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiaryInfo } from '../../redux/diary/selectors';
import { getFoodDiaryToday } from '../../redux/diary/operations';
import { selectIsLogin } from '../../redux/auth/selectors';
import { getTotalNutrients, getTotalNutrientsForMeals } from '../../helpers';

export default function Diary() {
  const dispatch = useDispatch();
  const { meals, firstLoad } = useSelector(selectDiaryInfo);

  useEffect(() => {
    if (!firstLoad) {
      dispatch(getFoodDiaryToday());
    }
  }, [firstLoad]);

  const totalNutrientsForMeals = getTotalNutrientsForMeals(meals);
  // const totalNutrients = getTotalNutrients(meals);
  // console.log(totalNutrientsForMeals);
  // console.log(meals);

  return (
    <>
      <TitleWrap>
        <HeadlineSecond>Diary</HeadlineSecond>
        <StyledLink to="/diary">
          <ButtonTextSecond>See more</ButtonTextSecond>
        </StyledLink>
      </TitleWrap>

      <DiaryList>
        {totalNutrientsForMeals.map((item, index) => (
          <DiaryItem key={index} data={item} meals={meals} />
        ))}
      </DiaryList>
    </>
  );
}
