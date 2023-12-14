import styled from 'styled-components';
import { Field, Form } from 'formik';

export const UserInformationForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  justify-content: start;
`;

export const UserInformationLabel = styled.label`
  margin-bottom: 12px;
`;

export const UserInformationField = styled(Field)`
  border-radius: 12px;
  display: block;
  border: 1px solid var(--grey-light);
  background: var(--black-secondary);
  padding: 8px 10px;
  margin-bottom: 40px;
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
