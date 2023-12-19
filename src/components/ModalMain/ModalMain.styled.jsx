import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.8);
  /* padding-top: 100px;
  padding-left: 10px;
  padding-right: 10px; */
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;

  transition: opacity var(--transition-dur-and-fun);
  opacity: 0;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  /* @media screen and (min-width: 834px) {
    padding-top: 180px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 212px;
  } */
`;

export const ModalContainer = styled.div`
  position: relative;
  /* padding: 28px 32px;
  margin: 20px; */
  /* width: 100%; */
  margin-top: 116px;
  margin-left: 10px;
  margin-right: 10px;

  /* padding: 16px 12px; */
  background-color: var(--black-secondary);
  border-radius: 12px;
  opacity: 1;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);

  max-height: calc(100% - 20px);
  overflow-y: auto;

  &.active {
    transform: scale(1);
  }
  @media screen and (min-width: 834px) {
    margin-top: 212px;
    margin-left: auto;
    margin-right: auto;
    /* padding: 24px; */
    /* width: none; */
  }
`;
