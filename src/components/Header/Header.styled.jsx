import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled(Link)`
  color: #ffffff;
`;

export const StyledLink = styled(Link)`
  transition: color var(--transition-dur-and-fun);

  /* &:hover,
  &:focus {
  } */
`;

export const IconWrap = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
`;
