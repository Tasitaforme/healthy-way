import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: ${(props) => props.$heightMob};
  background-image: ${(props) => `url(${props.$imageMob1x})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${(props) => `url(${props.$imageMob2x})`};
  }

  @media screen and (min-width: 834px) {
    height: ${(props) => props.$heightTab};
    background-image: ${(props) => `url(${props.$imageTab1x})`};
    width: 380px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${(props) => `url(${props.$imageTab2x})`};
    }
  }

  @media screen and (min-width: 1440px) {
    height: ${(props) => props.$heightDesk};
    background-image: ${(props) => `url(${props.$imageDesk1x})`};
    width: 592px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${(props) => `url(${props.$imageDesk2x})`};
    }
  }
`;
