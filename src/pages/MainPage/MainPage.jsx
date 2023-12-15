import React from 'react';
import { FeatureWrap, StyledLink, TitleWrap } from './MainPage.styled';

import { Container } from 'components/StyledComponents/Container';
import { IconWrap } from 'components/StyledComponents/Components';
import sprite from 'assets/sprite.svg';
import {
  ButtonTextSecond,
  HeadlineFirst,
} from 'components/StyledComponents/Components';
import DailyGoal from 'components/DailyGoal/DailyGoal';
import Water from 'components/Water/Water';
import Food from 'components/Food/Food';
import Diary from 'components/Diary/Diary';
import RecommendedFood from 'components/RecommendedFood/RecommendedFood';

export default function MainPage() {
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
            <Water></Water>
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
