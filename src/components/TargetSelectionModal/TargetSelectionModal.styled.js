import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: black2;
  border-radius: 1px;

@media screen and (min-width: 834px) {
  width: 392px;
  padding: 20px 32px 40px 24px;
  border-radius: 12px;
background:  #0F0F0F;
box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
 right: 80px;
 top: 120px;
}

`;

export const Modal = styled.div`

`;

export const CloseBtn = styled.button`

display: none;

  @media screen and (min-width: 834px) {
    display: block;
    width: 16px;
  height: 16px;
  background: inherit;
  border: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 20px;
  cursor: pointer;}

`;

export const ModalTitle = styled.h3`
  font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 8px;
`;

export const ModalText = styled.p`
 font-size: 14px;
font-weight: 400;
line-height: 1.42;
color: #B6B6B6;
width: 284px;
margin-bottom: 16px;

 
`;

export const ModalForm = styled.form`

`;

export const TargetWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  gap: 12px;

  &:hover {color: #B6C3FF};
   
`;

export const TargetImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgBorder = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-right: 12px;
border-radius: 12px;
border: 1px solid #292928;
background: rgba(255, 255, 255, 0.01);
&:hover {border-color: #B6C3FF};
`;

export const TargetText = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 1.42;


`;

export const ModalBtn = styled.button`
  width: 166px; 
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

  height: 20px;
  width: 192px;
  border: none;
  border-radius: 1px;
  background-color: inherit;
  color: gray;
  font-size: 24px;
  font-weight: 400;
  margin-top: 24px;
 

  @media screen and (min-width: 834px) {
     display: none;
  }
 
`;