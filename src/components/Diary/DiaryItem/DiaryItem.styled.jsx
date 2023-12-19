import styled from 'styled-components';
import { HeadlineThird } from '../../StyledComponents/Components.styled';

export const ItemWrap = styled.li`
  display: flex;
  flex-direction: row;
  row-gap: 28px;
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
  column-gap: 20px;
  align-items: center;
  justify-content: flex-start;

  & div:nth-child(1) {
    width: 164px;
  }
  & div:nth-child(2) {
    width: 92px;
  }
  & div:nth-child(2) {
    width: 66px;
  }
`;
