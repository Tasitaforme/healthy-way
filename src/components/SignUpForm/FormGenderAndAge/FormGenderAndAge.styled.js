import styled from 'styled-components';
import { Button } from '../../StyledComponents/Components.styled';
import {
  FormikStyledForm,
  FormikStyledErrorMessage,
} from '../../StyledComponents/Formik.styled';

export const GenderAndAgeForm = styled(FormikStyledForm)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
    width: 444px;
  }
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

export const GenderAndAgeButton = styled(Button)`
  width: 100%;
  margin-top: 40px;
`;

export const Text = styled.p`
  font-weight: 500;
`;

export const GenderWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  width: 140px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const AgeWrapper = styled.label`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;
`;

export const Error = styled(FormikStyledErrorMessage)`
  position: absolute;
  left: 10px;
  top: 58px;
`;
