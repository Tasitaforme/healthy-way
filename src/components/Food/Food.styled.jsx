import styled from 'styled-components';
import { WrapMainBg } from '../StyledComponents/Components.styled';

export const FoodWrap = styled.li`
  min-width: 100%;
  @media screen and (min-width: 1440px) {
    min-width: 560px;
  }
`;

export const WrapMain = styled(WrapMainBg)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 36px 40px;
  }
`;

export const NutrientsList = styled.ul``;
