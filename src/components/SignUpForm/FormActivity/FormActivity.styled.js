import styled from 'styled-components';
import { GenderAndAgeForm } from '../FormGenderAndAge/FormGenderAndAge.styled';
import { Button } from '../../StyledComponents/Components.styled';
import { BackButton } from '../FormGoal/FormGoal.styled';

export const ActivityForm = styled(GenderAndAgeForm)`
  @media screen and (min-width: 834px) {
    padding: 0px;
    width: 460px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 0px 116px 0px 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const ActivityButton = styled(Button)`
  width: 100%;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 16px auto 0;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 16px 0 0;
  }
`;

export const BackButtonLast = styled(BackButton)`
  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-left: 0;
  }
`;
