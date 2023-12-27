import { Container } from '../StyledComponents/Container';
import { Navigation, Logo, HeaderWrap, NavigationLink } from './Header.styled';

import sprite from 'assets/sprite.svg';

import { selectIsLogin } from '../../redux/auth/selectors';

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
    setShowModalTarget(false);
    setShowModalWeight(false);
    setShowDopMenuModal(false);
  };
  const toggleModalWeight = () => {
    setShowModalWeight((showModalWeight) => !showModalWeight);
    setShowModalTarget(false);
    setShowModalProfile(false);
  };
  const toggleModalTarget = () => {
    setShowModalTarget((showModalTarget) => !showModalTarget);
    setShowModalWeight(false);
    setShowModalProfile(false);
  };

  const toggleDopMenuModal = () => {
    setShowDopMenuModal((showDopMenuModal) => !showDopMenuModal);
    setShowModalProfile(false);
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
              onTargetClick={toggleModalTarget}
              showModalTarget={showModalTarget}
              onDopMenuClick={toggleDopMenuModal}
              showDopMenuModal={showDopMenuModal}
            />
          ) : (
            <Navigation>
              <NavigationLink to="/signin"> Sign in</NavigationLink>/
              <NavigationLink to="/signup"> Sign up</NavigationLink>
              <svg width="26px" height="26px">
                <use href={`${sprite}#profile`} stroke="white" fill="none" />
              </svg>
            </Navigation>
          )}
        </HeaderWrap>
      </Container>
    </header>
  );
}
