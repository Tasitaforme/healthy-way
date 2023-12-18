import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

// стилізація form в формі (Formik)
export const FormikStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

// стилізація label в формі (Formik)
export const FormikStyledLabel = styled.label`
  margin-bottom: 12px;
`;

// стилізація input field в формі (Formik)
export const FormikStyledField = styled(Field)`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--green-light);
  background-color: var(--black-secondary);
  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  &::placeholder {
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    color: var(--grey-light);
  }
  &:active.input-normal,
  &:focus-visible.input-normal,
  &:focus.input-normal,
  &.input-normal {
    outline: none;
    border-color: var(--green-light);
  }
  &:active.input-error,
  &:focus.input-error,
  &:focus-visible.input-error,
  &.input-error {
    outline: none;
    border-color: var(--error-color);
  }
  &:focus-visible.input-success,
  &:focus.input-success,
  &:active.input-success,
  &.input-success {
    outline: none;
    border-color: var(--success-color);
  }
`;

// стилізація повідомлення про помилку в input в формі (Formik)
export const FormikStyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--error-color);

  margin-top: 12px;
  margin-bottom: 12px;
`;
