import React from 'react';
import {
  ButtonTextSecond,
  HeadlineSecond,
  IconWrap,
  StyledLink,
} from '../StyledComponents/Components.styled';
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
