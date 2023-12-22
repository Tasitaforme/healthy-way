import styled from 'styled-components';

export const NutrientsItem = styled.li`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`;

export const NutrientsItemList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  align-items: center;
`;
export const NutrientsWrap = styled(NutrientsItem)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
