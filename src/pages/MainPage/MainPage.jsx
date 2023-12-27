import React, { useEffect, useState } from 'react';
import { FeatureWrap, MainWrap, TitleWrap } from './MainPage.styled';

import { Container } from 'components/StyledComponents/Container';
import {
  IconWrap,
  ButtonTextSecond,
  HeadlineFirst,
  StyledLink,
} from 'components/StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';
import DailyGoal from 'components/DailyGoal/DailyGoal';
import Water from 'components/Water/Water';
import Food from 'components/Food/Food';
import Diary from 'components/Diary/Diary';
import RecommendedFood from 'components/RecommendedFood/RecommendedFood';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { getDailyWater } from '../../redux/water/operations';
import { getFoodDiaryToday } from '../../redux/diary/operations';

export default function MainPage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    if (isLogin) {
      dispatch(getDailyWater());
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    if (isLogin) {
      dispatch(getFoodDiaryToday());
    }
  }, [dispatch]);

  const [modalActive, setModalActive] = useState(false);

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <MainWrap>
      <Container>
        <TitleWrap>
          <HeadlineFirst>Today</HeadlineFirst>
          <StyledLink to="/dashboard">
            <ButtonTextSecond>On the way to the goal</ButtonTextSecond>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#arrow-right`} />
            </IconWrap>
          </StyledLink>
        </TitleWrap>
        <FeatureWrap>
          <DailyGoal></DailyGoal>
          <Water
            modalActive={modalActive}
            setModalActive={setModalActive}
          ></Water>
          <Food></Food>
          <Diary></Diary>
          <RecommendedFood></RecommendedFood>
        </FeatureWrap>
      </Container>
    </MainWrap>
  );
}
