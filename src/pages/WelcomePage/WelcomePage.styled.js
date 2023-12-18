import styled from 'styled-components';
import { HeadlineSecond } from '../../components/StyledComponents/Components.styled';
import { Link } from 'react-router-dom';
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
export const SubTitle = styled(HeadlineSecond)`
  margin-top: 16px;
  color: #b6b6b6;
  margin-bottom: 24px;
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
`;
export const SignUpButton = styled(Link)`
  display: inline-flex;
  color: #fff;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
  width: 122px;
`;
export const GoalList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
