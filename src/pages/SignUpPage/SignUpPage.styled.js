import styled from 'styled-components';

export const FlexBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
  }
`;

export const MainAuth = styled.main`
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
  }
`;

export const ImageWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
