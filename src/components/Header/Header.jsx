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

import avatar from '../../assets/images/header/profile-circle.png';
import UserInfoNav from './UserInfoNav/UserInfoNav';
import { useState } from 'react';

export default function Header() {
  const isLoggedIn = true;
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);
  const [showModalTarget, setShowModalTarget] = useState(false);

  const toggleModalProfile = () => {
    setShowModalProfile((showModalProfile) => !showModalProfile);
  };
  const toggleModalWeight = () => {
    setShowModalWeight((showModalWeight) => !showModalWeight);
  };
  const toggleModalTarget = () => {
    setShowModalTarget((showModalTarget) => !showModalTarget);
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
