import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: black;
 padding: 24px 10px; 

@media screen and (min-width: 834px) {
  width: 392px;

  height: auto;
  padding: 20px 32px 40px 24px;
  border-radius: 12px;
background:  #0F0F0F;
box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
left: 260px;
 top: 120px;
}

  @media screen and (min-width: 1440px) {
    left: 750px;
  }
`;

export const GlobalWrapper = styled.div`
display: none;
width: 300px;
border-radius: 12px;
background:  #0F0F0F;
box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);


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
  width: 100%; 
display: flex;
padding: 8px 10px;
border-radius: 12px;
background: #E3FFA8;
font-size: 14px;
font-weight: 500;
line-height: 1.42;
justify-content: center;

@media screen and (min-width: 834px) {
   width: 166px; 
`;

export const CancelBtn = styled.button`

  height: 20px;
  width: 100%;
  border: none;
  border-radius: 1px;
  background-color: inherit;
  font-size: 14px;
  font-weight: 400;
  margin-top: 24px;
  color:#B6B6B6;
  
 

  @media screen and (min-width: 834px) {
     display: none;
     width: 192px;
  }
 
`;



export const UserContentWrapper = styled.div`
margin-left: 48px;
gap: 6px;
display: flex;
flex-direction: row;
align-itams: center;


@media screen and (min-width: 834px){
   margin-left: 75px;
  };
  @media screen and (min-width: 1440px){
    margin-left: 126px;
  };
`
export const MenuIcon = styled.svg`
margin: auto;
width: 16px;
height: 16px; 
stroke: #E3FFA8;

@media screen and (min-width: 834px){
    display: none;
  };
`
export const ArrowIcon = styled.svg`
margin: auto;
width: 14px;
height: 14px; 
stroke: #E3FFA8;
`
export const UserName = styled.p`
margin: auto;
font-size: 12px;
line-height: 1.33;
`
export const LoseMen = styled.div`
display: flex;
padding: 10px;
gap: 10px;
border-radius: 12px;
border: 1px solid #5F5E5C;
background: rgba(255, 255, 255, 0.01);
`
export const LoseMenImage = styled.img`
display: block;
width: 28px;
height: 28px; 
`;
export const IconWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;
align-items: flex-end;
`;
// export const GlobalWrapper = styled.div`
// display: none;
// width: 300px;
// border-radius: 12px;
// background:  #0F0F0F;
// box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);

// @media screen and (min-width: 834px){
// display: flex;
// flex-direction: row;
// gap: 40px;
//   };

//   @media screen and (min-width: 1440px){
// gap: 80px;
//   };
