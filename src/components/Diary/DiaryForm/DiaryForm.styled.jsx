import styled from 'styled-components';
import { Button } from '../../StyledComponents/Components.styled';
import { ButtonTransparent } from '../../AddWaterModal/AddWaterModal.styled';
import { FormikStyledForm } from '../../StyledComponents/Formik.styled';

export const FormikWrapper = styled(FormikStyledForm)`
  display: flex;
  flex-direction: column;

  row-gap: 16px;
  min-width: 276px;

  @media screen and (min-width: 834px) {
    min-width: 630px;
    align-items: flex-end;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 12px;
  }
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NameField = styled(FormField)`
  @media screen and (min-width: 834px) {
    width: 255px;
  }
`;

export const CarbonohField = styled(FormField)`
  @media screen and (min-width: 834px) {
    width: 100px;
  }
`;

export const ProteinField = styled(FormField)`
  @media screen and (min-width: 834px) {
    width: 96px;
  }
`;

export const HalfPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 12px;

  @media screen and (min-width: 834px) {
    width: auto;
  }
`;

export const FatField = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 12px) / 2);

  @media screen and (min-width: 834px) {
    width: 60px;
  }
`;
export const CaloriesField = styled(FatField)``;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    column-gap: 12px;
    width: 416px;
    justify-content: flex-end;
  }
`;

export const BtnConfirm = styled(Button)`
  width: 100%;
  @media screen and (min-width: 834px) {
    width: calc(100% / 2 - 12px);
  }
`;
export const BtnCancel = styled(ButtonTransparent)`
  width: 100%;
  @media screen and (min-width: 834px) {
    width: calc(100% / 2 - 12px);
  }
`;
