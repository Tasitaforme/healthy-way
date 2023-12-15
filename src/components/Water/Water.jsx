import React from 'react';
import {
  BodyTextFirst,
  BodyTextSecond,
  BodyTextWrap,
  Button,
  ButtonTextFirst,
  HeadlineSecond,
  IconWrap,
  SubtitleSecond,
} from '../StyledComponents/Components';
import sprite from 'assets/sprite.svg';
import {
  Headline,
  LeftSide,
  Percent,
  PercentBox,
  RightSide,
  TextWrap,
  WrapMain,
} from './Water.styled';

export default function Water() {
  //TODO потрібні дані
  const waterDayGoal = 1500;
  const waterReal = 1250;
  //TODO дія по кліну на смітничок
  //TODO відкриття модалки по натисканню на кнопку

  const waterLeft = waterDayGoal - waterReal;
  const waterPercent = Math.round((waterReal * 100) / waterDayGoal);

  return (
    <>
      <HeadlineSecond>Water</HeadlineSecond>
      <WrapMain>
        <LeftSide>
          <PercentBox height={`${waterPercent}%`}>
            <Percent
              color={
                waterPercent < 84 ? 'var(--violet)' : 'var(--black-primary)'
              }
              top={waterPercent < 84 ? '-28px' : '28px'}
            >
              {waterPercent}%
            </Percent>
          </PercentBox>
        </LeftSide>
        <RightSide>
          <IconWrap width="20px" height="20px" stroke="var(--green-light)">
            <use href={`${sprite}#trash`} />
          </IconWrap>
          <Headline>Water consumption</Headline>
          <TextWrap>
            <BodyTextWrap>
              <SubtitleSecond>{waterReal}</SubtitleSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
            <BodyTextWrap>
              <BodyTextFirst>left:</BodyTextFirst>
              <BodyTextSecond>{waterLeft}</BodyTextSecond>
              <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
            </BodyTextWrap>
          </TextWrap>

          <Button>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#add`} />
            </IconWrap>
            <ButtonTextFirst>Add water intake</ButtonTextFirst>
          </Button>
        </RightSide>
      </WrapMain>
    </>
  );
}
