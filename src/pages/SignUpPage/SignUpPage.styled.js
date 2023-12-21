import styled from 'styled-components';
import { BodyTextFirst } from '../../components/StyledComponents/Components.styled';
import { Link } from 'react-router-dom';

export const FlexBox = styled.div`
  padding: 0px 0px 40px 0px;

  @media screen and (min-width: 834px) {
    padding: 0px 168px 60px 168px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 104px;
    justify-content: center;
    padding: 0px 116px 0px 116px;
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
  }
`;

export const SignInWrapper = styled.div`
  margin-top: 48px;
  width: 100%;

  @media screen and (min-width: 834px) {
    margin-top: 206px;
    padding: 0px 32px 0px 32px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 168px;
    padding: 0px;
  }
`;

// export const SubText = styled(BodyTextFirst)`
//   color: var(--Color-Primary-Grey, #b6b6b6);
// `;

// export const SubLink = styled(Link)`
//   font-weight: 500;
//   transition: color var(--transition-dur-and-fun);
//   margin-top: 16px;
//   display: block;

//   &:hover,
//   &:focus {
//     color: var(--green-light);
//   }

//   @media screen and (min-width: 834px) {
//     margin-top: 0px;
//   }
// `;
