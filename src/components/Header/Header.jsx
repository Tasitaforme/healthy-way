import { Container } from '../StyledComponents/Container';
import {
  Navigation,
  Logo,
  HeaderWrap,
  SignInLink,
  SignUpLink,
  CircleProfile,
} from './Header.styled';

// import sprite from 'assets/sprite.svg';

import { selectIsLogin } from '../../redux/auth/selectors';
import avatar from '../../assets/images/header/profile-circle.png';
import UserInfoNav from './UserInfoNav/UserInfoNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);
  const [showModalTarget, setShowModalTarget] = useState(false);
  const [showDopMenuModal, setShowDopMenuModal] = useState(false);

  const isLoggedIn = useSelector(selectIsLogin);

  const toggleModalProfile = () => {
    setShowModalProfile((showModalProfile) => !showModalProfile);
  };
  const toggleModalWeight = () => {
    setShowModalWeight((showModalWeight) => !showModalWeight);
  };

  const openModalTarget = () => {
    setShowModalTarget(true);
  };

  const closeModalTarget = () => {
    setShowModalTarget(false);
  };

  const toggleDopMenuModal = () => {
    setShowDopMenuModal((showDopMenuModal) => !showDopMenuModal);
  };
  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo to="/">HealthyHub</Logo>
          {isLoggedIn ? (
            <UserInfoNav
              onClick={toggleModalProfile}
              showModalProfile={showModalProfile}
              onWeightClick={toggleModalWeight}
              showModalWeight={showModalWeight}
              // onTargetClick={toggleModalTarget}
              openModalTarget={openModalTarget}
              closeModalTarget={closeModalTarget}
              onDopMenuClick={toggleDopMenuModal}
              showDopMenuModal={showDopMenuModal}
            />
          ) : (
            <Navigation>
              <SignInLink to="/signin">Sign in</SignInLink>/
              <SignUpLink to="/signup">Sign up</SignUpLink>
              {/* <svg width="26px" height="26px">
                <use href={`${sprite}#profile`} />
              </svg> */}
              <CircleProfile src={avatar} />
            </Navigation>
          )}
        </HeaderWrap>
      </Container>
    </header>
  );
}
