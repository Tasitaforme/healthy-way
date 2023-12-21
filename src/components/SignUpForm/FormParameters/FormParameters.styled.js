import styled from 'styled-components';
import { FormikStyledForm } from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export const ParametersForm = styled(FormikStyledForm)`
  margin-top: 24px;
  width: 100%;

  @media screen and (min-width: 834px) {
    padding: 0px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 232px 0px 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 500;
  position: relative;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const ParametersButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
`;
