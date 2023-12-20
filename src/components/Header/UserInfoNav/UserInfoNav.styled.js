import styled from 'styled-components';
export const UserinfoWrapper = styled.div`
display: flex;

align-itams: center;
`
export const UserContentWrapper = styled.div`
margin-left: 48px;
gap: 6px;
display: flex;
flex-direction: row;
align-itams: center;
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
`
export const IconWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;
align-items: flex-end;
`
export const GlobalWrapper = styled.div`
display: none;

@media screen and (min-width: 834px){
display: flex;
flex-direction: row;
gap: 40px;
  };

  @media screen and (min-width: 1440px){
gap: 80px;
  };
`