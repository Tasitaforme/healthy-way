import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const UserInformationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  justify-content: start;
`;

export const UserInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const UserInformationField = styled(Field)`
  width: 100%;
  position: relative;
  border-radius: 12px;
  display: block;
  border: 1px solid var(--grey-light);
  background: var(--black-secondary);
  padding: 8px 10px;
  margin-bottom: 4px;
  color: var(--white);
  font-weight: 400;

  &.input-error {
    border-color: var(--error-color);
  }

  &::placeholder {
    color: var(--white);
    font-weight: 400;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border-color: var(--green-light);
  }
`;

export const UserInformationErrorMessage = styled(ErrorMessage)`
  color: var(--error-color);
  font-size: 12px;
`;

export const UserInformationSubmitButton = styled.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  margin-bottom: 12px;
`;

export const UserInformationCancelButton = styled.button`
  line-height: 1.43;
  color: var(--grey-light);
  margin-bottom: 40px;
`;

export const GenderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const UserInformationRadioLabel = styled.label`
  position: relative;
`;

export const UserInformationRadioInput = styled(Field)`
  &::before {
    content: '';
    display: block;
    border: 1px solid var(--grey-light);
    background-color: black;
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }

  &:checked + ${UserInformationRadioLabel}::before {
    border-color: var(--grey-light);
    fill: var(--green-light);
  }
`;

export const UserInformationRadioText = styled.span`
  margin-left: 8px;
`;
