import styled from 'styled-components';

export const FlexBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
  }
`;

// example of using props in styled components
// const Input = styled.img<{ $inputColor?: string}>`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.$inputColor || "#BF4F74"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

export const MainAuth = styled.main`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 0;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    margin-top: 60px;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 120px;
    text-align: start;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  margin-top: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const ImageWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`;
