import React from 'react';
import {
  BodyTextFirst,
  BodyTextWrap,
  HeadlineSecond,
  HeadlineThird,
  IconWrap,
  SubtitleFirst,
  WrapMainBg,
} from '../StyledComponents/Components';
import { List } from './DailyGoal.styled';
import sprite from 'assets/sprite.svg';

export default function DailyGoal() {
  //TODO потрібні дані
  const caloriesDayGoal = 1700;
  const waterDayGoal = 1500;

  return (
    <>
      <HeadlineSecond>Daily goal</HeadlineSecond>
      <WrapMainBg>
        <List>
          <li>
            <IconWrap width="80px" height="80px" stroke="var(--green)">
              <use href={`${sprite}#bubble`} />
            </IconWrap>
            <div>
              <HeadlineThird color="var(--grey-light)">Calories</HeadlineThird>
              <SubtitleFirst>{caloriesDayGoal}</SubtitleFirst>
            </div>
          </li>
          <li>
            <IconWrap width="80px" height="80px" stroke="var(--violet)">
              <use href={`${sprite}#water`} />
            </IconWrap>
            <div>
              <HeadlineThird color="var(--grey-light)">Water</HeadlineThird>
              <BodyTextWrap>
                <SubtitleFirst>{waterDayGoal}</SubtitleFirst>
                <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
              </BodyTextWrap>
            </div>
          </li>
        </List>
      </WrapMainBg>
    </>
  );
}
