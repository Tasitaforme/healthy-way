import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
import { Button } from '../StyledComponents/Components.styled';

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.8);
  padding-top: 100px;
  padding-left: 10px;
  padding-right: 10px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;

  transition: opacity var(--transition-dur-and-fun);
  opacity: 0;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  @media screen and (min-width: 834px) {
    padding-top: 180px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 212px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 28px 32px;
  margin: 20px;
  background-color: var(--black-secondary);
  border-radius: 30px;
  opacity: 1;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);

  max-height: calc(100% - 20px);
  overflow-y: auto;

  &.active {
    transform: scale(1);
  }
  @media screen and (min-width: 834px) {
    width: 338px;
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

// стилізація form в формі (Formik)
export const FormikStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    max-width: 212px;
    margin: 0 auto;
  }
`;

// стилізація label в формі (Formik)
export const FormikStyledFormLabel = styled.label`
  margin-top: 24px;
  margin-bottom: 12px;
`;

// стилізація input в формі (Formik)
export const FormikStyledField = styled(Field)`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--green-light);
  background-color: transparent;
  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  & + p {
    margin-top: 12px;
  }
  & + button {
    margin-top: 32px;
  }
  &::placeholder {
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    color: var(--grey-light);
  }
  &:active.input-normal,
  &:focus-visible.input-normal,
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
  line-height: 1.17;
  color: var(--error-color);

  margin: 12px auto;
`;
export const FormikStyledButton = styled(Button)`
  width: 100%;
`;
