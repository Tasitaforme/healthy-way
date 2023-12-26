import styled from 'styled-components';
import { Field, Form } from 'formik';

import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 491px;
    column-gap: 60px;
    margin: 0 auto;
  }
`;

export const UserInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

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

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const UserInformationErrorMessage = styled(FormikStyledErrorMessage)`
  margin: 0;

  @media screen and (min-width: 834px) {
    width: 200px;
  }
`;

export const AvatarInput = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  cursor: pointer;

  & + label {
    color: #fff;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
    cursor: pointer;
  }
`;

export const AvatarLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  margin-right: 12px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarIcon = styled.svg`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  stroke: var(--green-light);
  fill: none;
`;

export const GenderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const UserInformationRadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
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

export const ActivityButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 464px;
  }
`;

export const UserButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const UserInformationSubmitButton = styled.button`
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--green-light);
  line-height: 1.43;
  color: var(--black-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const UserInformationCancelButton = styled.button`
  line-height: 1.43;
  color: var(--grey-light);
  cursor: pointer;
  border-radius: 12px;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;
