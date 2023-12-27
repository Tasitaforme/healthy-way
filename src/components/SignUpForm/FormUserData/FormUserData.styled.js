import styled from 'styled-components';
import {
  FormikStyledForm,
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../../StyledComponents/Formik.styled';
import { Button, IconWrap } from '../../StyledComponents/Components.styled';

export const SignUpFormikForm = styled(FormikStyledForm)`
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

export const SignUpField = styled(FormikStyledField)`
  width: 100%;
`;

export const SignUpButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
`;

export const SignUpError = styled(FormikStyledErrorMessage)`
  position: absolute;
  top: 25px;
  left: 10px;
`;

export const FieldWrapper = styled.div`
  position: relative;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const ValidPassword = styled.p`
  position: absolute;
  left: 10px;
  color: #3cbc81;
  font-size: 12px;
`;

export const Icon = styled(IconWrap)`
  stroke: none;
  position: absolute;
  top: 10px;
  right: -6px;
  display: flex;
`;

export const IconsWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
