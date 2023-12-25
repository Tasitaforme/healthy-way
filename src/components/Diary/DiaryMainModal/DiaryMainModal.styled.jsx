import styled from 'styled-components';
import {
  BodyTextFirst,
  HeadlineSecond,
} from '../../StyledComponents/Components.styled';

export const ModalWrapper = styled.div`
  min-height: 346px;
  margin: 16px 12px 22px;

  @media screen and (min-width: 834px) {
    margin: 24px;
    min-width: 630px;
  }
`;

export const ItemWrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Title = styled(HeadlineSecond)`
  text-transform: capitalize;
  width: 100px;
`;

export const MealsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  align-items: center;
  justify-content: flex-start;
`;

export const MealsItem = styled.li``;

export const MealsName = styled(BodyTextFirst)`
  margin-bottom: 12px;
  text-transform: capitalize;
  color: var(--green-light);
`;

export const AddWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
