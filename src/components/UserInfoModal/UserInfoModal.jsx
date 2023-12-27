import React from 'react';
import { ModalWrapper, Modal, LinkModal } from './UserInfoModal.styled';
import sprite from 'assets/sprite.svg';
import { logOut } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function UserInfoModal({ onCloseModal }) {
  const dispatch = useDispatch();

  const handleOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success('You have successfully logged out!');
      onCloseModal();
    } catch (error) {
      toast.error(`Something went wrong! \n ${error}`);
    }
  };

  return (
    <ModalWrapper>
      <Modal>
        <LinkModal to={'/settings'} onClick={onCloseModal}>
          <svg width="16px" height="16px" stroke="#fff">
            <use href={`${sprite}#settings`} />
          </svg>
          Setting
        </LinkModal>
        <LinkModal to={'/'} onClick={() => handleOut()}>
          <svg width="16px" height="16px" stroke="#fff">
            <use href={`${sprite}#logout`} />
          </svg>
          Log out
        </LinkModal>
      </Modal>
    </ModalWrapper>
  );
}
