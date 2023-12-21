import styled from 'styled-components'; 

export const ModalWrapper = styled.div`
   position: absolute;
  border-radius: 12px;
  background: #0F0F0F;
  top: 57px;
//   left: 0;
  width: 100%;
  
@media screen and (min-width: 834px) {
   box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
    top: 120px;
    width: 392px;
    right: 0px;
}
  @media screen and (min-width: 1440px) {
    right: 0px;
  }
`;

export const Modal = styled.div`
padding-top:24px;
@media screen and (min-width: 834px) {
 padding: 20px 24px 40px;}
`;

export const CloseBtn = styled.button`
display:none;

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
  top: 12px;}
`;

export const ModalTitle = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.33;
`;

export const ModalText = styled.p`
  color: #B6B6B6;
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
   
color: #B6B6B6;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.42 

`;

export const WeightForm = styled.form`

  flex-direction: collum; 

@media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    display: flex;  
    gap: 12px;
  }
  
`;

export const WeightFormInput = styled.input`
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
background: #E3FFA8;
font-size: 14px;
font-weight: 500;
line-height: 1.42;
justify-content: center;
`;

export const CancelBtn = styled.button`
display: block;  
margin: 0 auto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height:1.42;
color: #B6B6B6;
margin-top: 24px;
justify-content: center;


  @media screen and (min-width: 834px) {
    display: none; }

 `;