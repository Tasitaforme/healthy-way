import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: black;
  border-radius: 12px;
  width: 100%;
  padding: 24px;


@media screen and (min-width: 834px) {
 display: none;
}
`;

export const GlobalWrapper = styled.div`
width: 300px;
border-radius: 12px;
display: flex;
flex-direction: column;
gap: 40px;
`;

export const CloseBtn = styled.button`
   display: block;
    width: 16px;
  height: 16px;
  background: inherit;
  border: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;
align-items: flex-end;
`;



export const ArrowIcon = styled.svg`
margin: auto;
width: 14px;
height: 14px; 
stroke: #E3FFA8;
`;

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

export const SpanText = styled.span`

font-weight: 400;
color: #B6B6B6;
 
`;