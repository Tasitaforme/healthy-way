import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  line-height: 1.33;
  margin-top: 16px;
  width: 280px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    width: 444px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;
