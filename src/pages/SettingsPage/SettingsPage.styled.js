import styled from 'styled-components';
import { Container } from '../../components/StyledComponents/Container';

export const SettingsContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 174px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`;

export const UserContentWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    justify-content: space-evenly;
  }
`;

export const SettingsPageTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const SettingsPageImg = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
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
    margin: 0;
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

export const UserPrivateSettingsWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
