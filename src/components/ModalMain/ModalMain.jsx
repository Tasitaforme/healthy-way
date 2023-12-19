import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContainer } from './ModalMain.styled';

const modalRoot = document.querySelector('#root_modal');

export default function ModalMain({ modalActive, setModalActive, children }) {
  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const handlerEscape = (e) => {
      if (e.code === 'Escape') {
        setModalActive(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setModalActive]);

  return createPortal(
    <ModalBackdrop
      className={modalActive ? 'active' : ''}
      onClick={() => setModalActive(false)}
    >
      <ModalContainer
        className={modalActive ? 'active' : ''}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </ModalBackdrop>,
    modalRoot
  );
}
