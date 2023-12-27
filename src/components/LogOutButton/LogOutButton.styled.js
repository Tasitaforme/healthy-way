import styled from 'styled-components';
import {
  ButtonIcon,
  HeadlineSecond,
} from '../StyledComponents/Components.styled';

export const Button = styled(ButtonIcon)`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--green-light);
  }
`;

export const LogoutModalWrapper = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(HeadlineSecond)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  padding: 6px 8px;
  border-radius: 12px;
  background: #e3ffa8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  transition: box-shadow var(--transition-dur-and-fun);

  &:hover {
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 834px) {
  }
`;

export const CancelButton = styled.button`
  padding: 6px 8px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: inherit;
  font-size: 14px;
  font-weight: 400;
  color: #b6b6b6;
  cursor: pointer;
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--green-light);
  }

  @media screen and (min-width: 834px) {
  }
`;
