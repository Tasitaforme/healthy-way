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

export default function Header() {
  const isLoggedIn = false;

  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo to="/">HealthyHub</Logo>
          {isLoggedIn ? (
            <UserInfoNav />
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
