import styled from 'styled-components';
import { FormikStyledForm } from '../StyledComponents/Formik.styled';
import { SubLink } from '../../pages/SignInPage/SignInPage.styled';

export const SignInFormikForm = styled(FormikStyledForm)`
  margin-bottom: 52px;
  & input + input {
    margin-top: 20px;
  }

  & button {
    margin-top: 40px;
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const ForgotLink = styled(SubLink)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`;
