import React, { useEffect, useState } from 'react';
import {
  ButtonTextSecond,
  HeadlineSecond,
  StyledLink,
} from '../StyledComponents/Components.styled';
import { DiaryList, DiaryWrap, TitleWrap } from './Diary.styled';
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

  // useEffect(() => {
  //   if (!firstLoad) {
  //     dispatch(getFoodDiaryToday()).unwrap();
  //   }
  // }, [firstLoad]);

  // useEffect(() => {
  //   dispatch(getFoodDiaryToday());
  // }, [meals]);

  const totalNutrientsForMeals = getTotalNutrientsForMeals(meals);

  return (
    <DiaryWrap>
      <TitleWrap>
        <HeadlineSecond>Diary</HeadlineSecond>
        <StyledLink to="/diary">
          <ButtonTextSecond>See more</ButtonTextSecond>
        </StyledLink>
      </TitleWrap>

      {/* <DiaryList>
        {totalNutrientsForMeals.map((item, index) => (
          <DiaryItem key={index} data={item} meals={meals} />
        ))}
      </DiaryList> */}
    </DiaryWrap>
  );
}
