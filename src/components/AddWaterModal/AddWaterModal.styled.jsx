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

// export const ModalBackdrop = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: rgba(5, 5, 5, 0.8);
//   padding-top: 100px;
//   padding-left: 10px;
//   padding-right: 10px;

//   position: fixed;
//   top: 0;
//   left: 0;

//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   pointer-events: none;

//   transition: opacity var(--transition-dur-and-fun);
//   opacity: 0;

//   &.active {
//     opacity: 1;
//     pointer-events: all;
//   }

//   @media screen and (min-width: 834px) {
//     padding-top: 180px;
//   }
//   @media screen and (min-width: 1440px) {
//     padding-top: 212px;
//   }
// `;

// export const ModalContainer = styled.div`
//   position: relative;
//   padding: 28px 32px;
//   margin: 20px;
//   background-color: var(--black-secondary);
//   border-radius: 30px;
//   opacity: 1;

//   transform: scale(0);
//   transition: transform var(--transition-dur-and-fun);

//   max-height: calc(100% - 20px);
//   overflow-y: auto;

//   &.active {
//     transform: scale(1);
//   }
//   @media screen and (min-width: 834px) {
//     width: 338px;
//   }
// `;

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
