import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormikStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 18px auto;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const FormikStyledField = styled(Field)`
  border-radius: 20px;
  display: block;
  border: 2px solid black;
  padding: 8px 16px;

  &.input-error {
    border-color: red;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
    border-color: #007aff;
  }
`;

export const FormikStyledErrorMessage = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
  max-width: 250px;

  margin: 0 auto;
`;

export const FormikButton = styled.button`
  border-radius: 20px;
  background-color: black;
  color: #e5e5e5;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  padding: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #007aff;
  }

  &:disabled {
    background-color: #7c7c7c;
  }
`;
