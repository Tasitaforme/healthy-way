import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnLink = styled(NavLink)`
  padding-top: 8px;
  padding-bottom: 8px;

  display: block;
  justify-content: center;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--black-secondary);
  background-color: var(--green-light);
  border-radius: 12px;
  border: none;
  text-align: center;

  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: ${(props) => props.size || 'auto'};
    padding-inline: ${(props) => props.size || '8px'};
  }
`;
