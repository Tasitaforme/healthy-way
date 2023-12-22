import styled from 'styled-components';
import { FormikStyledForm } from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';
import { SignUpError } from '../FormUserData/FormUserData.styled';

export const GoalForm = styled(FormikStyledForm)`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  &:not(:first-child) {
    margin-top: 24px;
  }

  @media screen and (min-width: 834px) {
    &:not(:first-child) {
      margin-top: 0px;
    }
    width: 110px;
  }

  @media screen and (min-width: 1440px) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export const FlexWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 834px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const GoalButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;

export const BackButton = styled(Button)`
  width: 192px;
  height: 20px;
  margin: 20px auto 0;
  font-weight: 400;
  background-color: transparent;
  color: var(--Color-Primary-Grey, #b6b6b6);
  &:hover {
    box-shadow: none;
  }
`;

export const Error = styled(SignUpError)`
  top: -32px;
  left: 20px;
`;
