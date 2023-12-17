import styled from 'styled-components';
import { Field } from 'formik';

import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';

// кожнна група лейбл та інпути загорнути в цей дів
export const UserInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

// стилі для інпутів у форміку Field
export const UserInformationField = styled(FormikStyledField)`
  width: 100%;
  position: relative;
  display: block;
  border: 1px solid var(--grey-light);
  color: var(--white);

  &.input-error {
    border-color: var(--error-color);
  }

  &::placeholder {
    color: var(--white);
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border-color: var(--green-light);
  }
`;

// стилі для повідомлення про помилку
export const UserInformationErrorMessage = styled(FormikStyledErrorMessage)`
  margin: 0;
`;

// стилі для avatar
export const AvatarInput = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// стилі для секції gender
export const GenderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const UserInformationRadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const UserInformationRadioInput = styled(Field)`
  display: none;
`;

export const UserInformationRadioFake = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--grey-light);
  position: relative;
  margin-right: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 6px;
    height: 6px;
    background-color: var(--green-light);
    border-radius: 50px;
    opacity: 0;
    transition: 250ms;
  }

  ${UserInformationRadioInput}:checked + &::before {
    opacity: 1;
  }
`;

export const UserInformationRadioText = styled.span`
  display: inline-block;
  width: 100%;
`;

export const UserGenderText = styled(UserInformationRadioText)`
  width: auto;
`;
// стилі для секції gender

// стилі для секції activity
export const ActivityButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// стилі для кнопки Save
export const UserInformationSubmitButton = styled.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  margin-bottom: 12px;
`;

// стилі для кнопки Cancel
export const UserInformationCancelButton = styled.button`
  line-height: 1.43;
  color: var(--grey-light);
  margin-bottom: 40px;
`;
