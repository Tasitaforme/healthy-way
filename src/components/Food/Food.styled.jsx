import styled from 'styled-components';
import { WrapMainBg } from '../StyledComponents/Components.styled';

export const WrapMain = styled(WrapMainBg)``;

export const CaloriesWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`;
export const NutrientsWrap = styled.ul``;
