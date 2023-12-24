import styled from 'styled-components';
import { SubLink, SubText } from '../SignInPage/SignInPage.styled';

export const FlexBox = styled.div`
  padding: 0px 0px 40px 0px;

  @media screen and (min-width: 834px) {
    padding: 0px 168px 60px 168px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
    justify-content: center;
    padding: 0px 116px 60px 116px;
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
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 80px;
    width: 444px;
  }
`;

export const SignInWrapper = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    margin-top: 206px;
    padding: 0px 32px 0px 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 168px;
    padding: 0px;
  }
`;

export const SignInText = styled(SubText)`
  margin-bottom: 0px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`;

export const SignInLink = styled(SubLink)``;
