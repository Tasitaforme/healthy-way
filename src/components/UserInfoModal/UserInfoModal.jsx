import React, { useState } from 'react';
import { ModalWrapper, Modal, LinkModal } from './UserInfoModal.styled';
import sprite from 'assets/sprite.svg';

// добавить функцию логаут

export default function UserInfoModal() {
  return (
    <ModalWrapper>
      <Modal>
        <LinkModal to={'/settings'}>
          <svg width="16px" height="16px" stroke="#fff">
            <use href={`${sprite}#settings`} />
          </svg>
          Setting
        </LinkModal>
        <LinkModal to={'/'}>
          <svg width="16px" height="16px" stroke="#fff">
            <use href={`${sprite}#logout`} />
          </svg>
          Log out
        </LinkModal>
      </Modal>
    </ModalWrapper>
  );
}
