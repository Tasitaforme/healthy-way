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




