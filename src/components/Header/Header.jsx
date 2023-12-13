import { Container } from '../StyledComponents/Container';
import {
  Navigation,
  StyledLink,
  IconWrap,
  Logo,
  HeaderWrap,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export default function Header() {
  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo to="/">HealthyHub</Logo>
          <Navigation>
            <StyledLink to="/signin">Sign in</StyledLink>
            <StyledLink to="/signup">Sign up</StyledLink>
            <IconWrap>
              <use href={`${sprite}#icon-logo`} />
            </IconWrap>
          </Navigation>
        </HeaderWrap>
      </Container>
    </header>
  );
}
