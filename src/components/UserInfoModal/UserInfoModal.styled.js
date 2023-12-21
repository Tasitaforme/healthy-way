import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ModalWrapper = styled.div`
  position: absolute;
  top: 54px;
  right: 0px;
  width: 158px;
  background: #0F0F0F;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
  border-radius: 12px;
   @media screen and (min-width: 834px){
    top: 90px;
  };
`;

export const Modal = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
 @media screen and (min-width: 834px){
    gap: 24px;
  };
`;

export const LinkModal = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  outline: none;
`;
