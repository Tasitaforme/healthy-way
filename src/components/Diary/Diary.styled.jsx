import styled from 'styled-components';
import { IconWrap, HeadlineThird } from '../StyledComponents/Components.styled';

export const DiaryWrap = styled.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 558px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 16px;
`;

export const Icon = styled(IconWrap)`
  width: 36px;
  height: 36px;
  /* fill: none;
  stroke: none; */
  display: inline-block;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const DiaryList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;
