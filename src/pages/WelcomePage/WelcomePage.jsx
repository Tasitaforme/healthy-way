import React from 'react';
import { Container } from '../../components/StyledComponents/Container';

export default function WelcomePage() {
  return (
    <main>
      <Container>
        <h1>Set goals and achieve them</h1>
        <h2>The service will help you set goals and follow them.</h2>

        <ul>
          <li>Set goals</li>
          <li>Watch your calories</li>
          <li>Keep track of your water intake</li>
          <li>Control your weight</li>
        </ul>
      </Container>
    </main>
  );
}
