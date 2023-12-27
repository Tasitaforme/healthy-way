import styled from 'styled-components';
import { Field, Form } from 'formik';
import { FormikStyledErrorMessage } from '../StyledComponents/Formik.styled';

export const ModalBackdrop = styled.div`
  z-index: 990;
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.8);
  margin: 0 auto;

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
`;

export const ErrorMessage = styled(FormikStyledErrorMessage)`
  margin-top: 0;

  @media screen and (min-width: 834px) {
    margin-top: 10px;
    position: absolute;
    top: 40px;
    left: 0;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  background: #0f0f0f;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  padding: 24px 10px;
  opacity: 1;

  @media screen and (min-width: 834px) {
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    top: 120px;
    width: 392px;
    left: 260px;
    height: auto;
  }
  @media screen and (min-width: 1440px) {
    left: 960px;
  }
`;

export const Modal = styled.div`
  @media screen and (min-width: 834px) {
    padding: 20px 24px 40px;
  }
`;

export const CloseBtn = styled.button`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
    background: inherit;
    border: none;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    position: absolute;
    right: 25px;
    top: 12px;
  }
`;

export const ModalTitle = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.33;
`;

export const ModalText = styled.p`
  color: #b6b6b6;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.42;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;

export const DateText = styled.p`
  color: white;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.42;
`;

export const DateDay = styled.p`
  color: #b6b6b6;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.42;
`;

export const WeightForm = styled(Form)`
  position: relative;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    gap: 12px;
  }
`;

export const WeightFormInput = styled(Field)`
  width: 100%;
  margin-bottom: 12px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--green-light);
  background-color: var(--black-secondary);
  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  cursor: pointer;

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
  @media screen and (min-width: 834px) {
    margin: 0;
  }
`;

export const WeightFormBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 8px 10px;
  align-items: flex-start;
  border-radius: 12px;
  background: #e3ffa8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  justify-content: center;
  color: #0f0f0f;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }
`;

export const CancelBtn = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  color: #b6b6b6;
  margin-top: 24px;
  justify-content: center;
  cursor: pointer;
  transition: color var(--transition-dur-and-fun);
  &:hover {
    color: var(--green-light);
  }

  @media screen and (min-width: 834px) {
    display: none;
  }
`;
