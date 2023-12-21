import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: 17px;
  padding-bottom: 17px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding-top: 34px;
    padding-bottom: 34px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const Logo = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const SignInLink = styled(Link)`
  color: #fff;
  text-align: right;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const SignUpLink = styled(Link)`
  color: #e3ffa8;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const CircleProfile = styled.img`
  width: 26px;
  height: 26px;
  @media screen and (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconWrap = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  @media screen and (${(props) => props.theme.mq.mobile}) {
    display: flex;
  }
  @media screen and (${(props) => props.theme.mq.tablet}) {
    display: flex;
  }
  @media screen and (${(props) => props.theme.mq.desktop}) {
    display: flex;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 0;
  @media screen and (${(props) => props.theme.mq.mobile}) {
    top: 60px;
    width: 320px;
    padding: 0 10px;
  }
  @media screen and (${(props) => props.theme.mq.tablet}) {
    top: 100px;
    width: 834px;
    padding: 0 27px;
  }
  @media screen and (${(props) => props.theme.mq.desktop}) {
    top: 100px;
    width: 1440px;
    padding: 0 34px;
  }
`;
