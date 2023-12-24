import styled from 'styled-components';
import { SubText } from '../SignInPage/SignInPage.styled';

export const Text = styled(SubText)`
  margin-top: 0px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const SignIpWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    width: 380px;
  }
`;
