import styled from 'styled-components';
import { FormikStyledErrorMessage } from '../StyledComponents/Formik.styled';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';

export const Error = styled(FormikStyledErrorMessage)`
  position: absolute;
  top: -32px;
  left: 10px;
`;

export const Form = styled(SignInFormikForm)`
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 834px) {
    margin-bottom: 206px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 248px;
  }
`;
