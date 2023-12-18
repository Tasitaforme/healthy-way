import React from 'react';
import { Container } from '../../components/StyledComponents/Container';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png'
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png'
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png'
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png'
import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png'
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png'
import { Link } from 'react-router-dom';
import { ListItem } from './WelcomePage.styled';
export default function WelcomePage() {
  return (
    <main>
      <Container>
        <img src={ watchMob1x } />
        <h1>Set goals and achieve them</h1>
        <h2>The service will help you set goals and follow them.</h2>
        <Link to="/signin">
        Sign in
        </Link>
        <Link to="signup">
        Sign up
        </Link>
        <ul>
          <ListItem>Set goals</ListItem>
          <ListItem>Watch your calories</ListItem>
          <ListItem>Keep track of your water intake</ListItem>
          <ListItem>Control your weight</ListItem>
        </ul>
      </Container>
    </main>
  );
}
