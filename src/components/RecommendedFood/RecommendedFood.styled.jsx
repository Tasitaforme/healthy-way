import styled from 'styled-components';
import { HeadlineSecond } from '../StyledComponents/Components.styled';

export const RecFoodWrap = styled.li`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;

export const FoodList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`;

export const FoodItem = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 20px;
  align-items: center;
  background-color: var(--black-secondary);
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    min-width: calc((100% - 20px) / 2);
  }
`;
export const FoodImg = styled.img`
  width: 46px;
  height: 46px;
`;

export const FoodName = styled(HeadlineSecond)`
  font-weight: 400;
`;

export const FoodInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 6px;
  align-items: center;
  margin-top: 2px;
`;
