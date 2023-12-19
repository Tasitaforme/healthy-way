import styled from 'styled-components';
import { Button } from '../StyledComponents/Components.styled';
import {
  FormikStyledField,
  FormikStyledForm,
  FormikStyledLabel,
} from '../StyledComponents/Formik.styled';

export const ModalWrap = styled.div`
  margin: 16px 12px 22px;

  @media screen and (min-width: 400px) {
    margin: 24px 40px;
    max-width: 338px;
  }
`;

export const ButtonTransparent = styled(Button)`
  background-color: transparent;
  color: var(--grey-light);
  width: 100%;
  margin-top: 8px;
  padding-bottom: 0;
  &:hover {
    box-shadow: none;
  }
`;

export const WaterForm = styled(FormikStyledForm)`
  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`;

export const WaterLabel = styled(FormikStyledLabel)`
  margin-top: 24px;
`;

export const WaterField = styled(FormikStyledField)`
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
`;

export const WaterButton = styled(Button)`
  width: 100%;
`;
