import React from 'react';
import {
  ModalWrapper,
  Modal,
  LinkModal,
  LinkIcon,
} from './UserInfoModal.styled';
import sprite from 'assets/sprite.svg';
import { logOut } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

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
          <LinkIcon width="16px" height="16px" stroke="#fff" fill="none">
            <use href={`${sprite}#settings`} />
          </LinkIcon>
          Setting
        </LinkModal>
        <LogOutButton />
      </Modal>
    </ModalWrapper>
  );
}
