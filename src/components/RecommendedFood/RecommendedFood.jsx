import React from 'react';
import {
  ButtonTextSecond,
  HeadlineSecond,
  IconWrap,
} from '../StyledComponents/Components';
import { StyledLink } from '../../pages/MainPage/MainPage.styled';
import sprite from 'assets/sprite.svg';

export default function RecommendedFood() {
  return (
    <>
      <HeadlineSecond>Recommended food</HeadlineSecond>
      <StyledLink to="/recommended-food">
        <ButtonTextSecond>See more</ButtonTextSecond>
        <IconWrap width="16px" height="16px">
          <use href={`${sprite}#arrow-right`} />
        </IconWrap>
      </StyledLink>
    </>
  );
}
