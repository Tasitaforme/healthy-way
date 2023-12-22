import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BodyTextFirst } from 'components/StyledComponents/Components.styled';
import { HeadlineSecond } from '../../components/StyledComponents/Components.styled';

export const HeadSecond = styled(HeadlineSecond)`
  color: var(--grey-light);
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const SubText = styled(BodyTextFirst)`
  color: var(--grey-light);
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-top: 100px;
    display: inline-block;
    margin-right: 16px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const SubLink = styled(Link)`
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: color var(--transition-dur-and-fun);

  &:hover,
  &:focus {
    color: var(--green-light);
  }
  @media screen and (min-width: 834px) {
    display: inline-block;
  }
`;
