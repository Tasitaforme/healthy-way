import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  color: var(--grey-light);
  transition: color var(--transition-dur-and-fun);

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 6px;

  &:hover,
  &:focus {
    color: var(--green-light);
  }
`;

export const FeatureWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin-bottom: 80px;

  /* & li:nth-child(1) {
    background-color: red;
  }
  & li:nth-child(2) {
    background-color: azure;
  }
  & li:nth-child(3) {
    background-color: blue;
  }
  & li:nth-child(4) {
    background-color: coral;
  }
  & li:nth-child(5) {
    background-color: red;
  } */
  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    margin-bottom: 40px;

    /* & li {
      min-height: 278px;
    } */

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
