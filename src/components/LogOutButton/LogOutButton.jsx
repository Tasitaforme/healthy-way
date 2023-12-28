import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import sprite from 'assets/sprite.svg';
import { IconWrap } from '../StyledComponents/Components.styled';
import {
  Button,
  LogoutModalWrapper,
  Title,
  LogoutButton,
  ButtonsWrapper,
  CancelButton,
} from './LogOutButton.styled';
import { logOut } from '../../redux/auth/operations';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    background: '#0F0F0F',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20',
    outline: 'none',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};
export default function LogOutButton({ onCloseUserInfoModal }) {
  const [showLogoutModal, setShowLogoutModal] = useState();

  const dispatch = useDispatch();

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      localStorage.clear();
      toast.success('You have successfully logged out!');
      closeLogoutModal();
      onCloseUserInfoModal();
      redirect('/');
    } catch (error) {
      toast.error(`Something went wrong! \n ${error}`);
    }
  };

  return (
    <>
      <Button type="button" onClick={openLogoutModal}>
        <IconWrap>
          <use href={`${sprite}#logout`} />
        </IconWrap>
        Log out
      </Button>
      {showLogoutModal && (
        <Modal
          isOpen={showLogoutModal}
          onRequestClose={closeLogoutModal}
          style={customStyles}
        >
          <LogoutModalWrapper>
            <Title>Are you sure you would like to log out?</Title>
            <ButtonsWrapper>
              <LogoutButton type="button" onClick={() => handleLogOut()}>
                Log out
              </LogoutButton>
              <CancelButton type="button" onClick={closeLogoutModal}>
                Cancel
              </CancelButton>
            </ButtonsWrapper>
          </LogoutModalWrapper>
        </Modal>
      )}
    </>
  );
}
