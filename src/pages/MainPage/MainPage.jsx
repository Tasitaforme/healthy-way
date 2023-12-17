import React, { useState } from 'react';
import { FeatureWrap, TitleWrap } from './MainPage.styled';

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

export default function MainPage() {
  // const [modalRecordDiaryActive, setModalRecordDiaryActive] = useState(false);
  // const [modalWaterActive, setModalWaterActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <main>
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
          <li>
            <DailyGoal></DailyGoal>
          </li>
          <li>
            <Water
              modalActive={modalActive}
              setModalActive={setModalActive}
            ></Water>
          </li>
          <li>
            <Food></Food>
          </li>
          <li>
            <Diary></Diary>
          </li>
          <li>
            <RecommendedFood></RecommendedFood>
          </li>
        </FeatureWrap>
      </Container>
    </main>
  );
}