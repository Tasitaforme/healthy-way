import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
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
    column-gap: 20px;
    margin-bottom: 40px;

    & li:nth-child(1),
    li:nth-child(2) {
      flex-basis: calc((100% - 20px) / 2);
    }
    & li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      flex-basis: 100%;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 54px;

    & li:nth-child(1),
    li:nth-child(2) {
      flex-basis: calc((100% - 2 * 20px) / 3);
    }

    & li:nth-child(3) {
      flex-basis: calc((100% - 2 * 20px) / 3);
    }

    & li:nth-child(4),
    li:nth-child(5) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }
`;
