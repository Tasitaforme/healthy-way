import styled from 'styled-components';

export const UserContentWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;
  }
`;

export const SettingsPageTitle = styled.h1`
  margin: 16px auto;
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`;

export const SettingsPageImg = styled.img`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: 528px;
  }
`;
