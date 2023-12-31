import styled from 'styled-components';

export const MainWrap = styled.main`
  padding-top: 16px;
  padding-bottom: 80px;
  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 54px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const FeatureWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin-bottom: 80px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 54px;
  }
`;
