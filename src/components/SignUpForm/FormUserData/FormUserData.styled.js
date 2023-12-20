import styled from 'styled-components';
import {
  FormikStyledForm,
  FormikStyledField,
} from '../../StyledComponents/Formik.styled';

export const SignUpFormikForm = styled(FormikStyledForm)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }
`;

export const SignUpField = styled(FormikStyledField)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
