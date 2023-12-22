import styled from 'styled-components';
export const DailyGoalWrap = styled.li`
  @media screen and (min-width: 834px) {
    min-width: 380px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 328px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    row-gap: 32px;
  }
  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
  }
`;
