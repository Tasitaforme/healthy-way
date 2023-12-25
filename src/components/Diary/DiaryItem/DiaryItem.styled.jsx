import styled from 'styled-components';
import {
  ButtonTextFirst,
  HeadlineThird,
} from '../../StyledComponents/Components.styled';

export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    row-gap: 28px;
  }
`;

export const ItemWrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
`;

export const Title = styled(HeadlineThird)`
  text-transform: capitalize;
  width: 100px;
`;

export const ItemWrapInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 12px;
  align-items: center;
  justify-content: flex-start;

  & div:nth-child(1) {
    width: 164px;
  }
  & div:nth-child(2) {
    width: 92px;
  }
  & div:nth-child(3) {
    width: 66px;
  }
`;

export const RecordBtn = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  color: var(--green-light);
  border: none;
  padding: 0;
`;
export const BtnText = styled(ButtonTextFirst)`
  color: currentColor;
  margin-left: 6px;
`;
