import styled from 'styled-components';
import { HeadlineSecond } from '../../components/StyledComponents/Components.styled';
import { Link } from 'react-router-dom';
import { HeadlineFirst } from '../../components/StyledComponents/Components.styled';
import { Container } from '../../components/StyledComponents/Container';

export const WelcomeContainer = styled(Container)`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const WelcomeTitle = styled(HeadlineFirst)`
  @media screen and (min-width: 834px) {
    text-align: center;
  }
`;

export const BackgroundImage = styled.div`
  margin-top: 24px;
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
    margin-top: 40px;
    margin-bottom: 80px;
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
    margin-left: 0;
    margin-right: 0;
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

export const ContentWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 444px;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    align-items: flex-start;
    margin-bottom: 80px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: '';
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #e3ffa8;
  }
`;

export const BtnWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    align-content: center;
  }
`;

export const SubTitle = styled(HeadlineSecond)`
  margin-top: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 419px;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    text-align: start;
  }
`;
export const SignInButton = styled(Link)`
  display: inline-flex;
  padding: 8px 10px;
  border-radius: 12px;
  background: #e3ffa8;
  color: #0f0f0f;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 142px;
  margin-right: 16px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;
export const SignUpButton = styled(Link)`
  display: inline-flex;
  color: #fff;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 122px;
  align-items: center;
  cursor: pointer;
`;
export const GoalList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 80px;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
    margin-bottom: 286px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0px;
  }
`;
