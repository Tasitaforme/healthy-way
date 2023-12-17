import React from 'react';
import { Container } from '../../components/StyledComponents/Container';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

export default function WelcomePage() {
  return (
    <main>
      <Container>
        <h1>Set goals and achieve them</h1>
        <h2>The service will help you set goals and follow them.</h2>
        {/* ширина буде обчислюватись по заданому width */}
        <ButtonLink to="/signin" text="Sign in" width="212px" />
        {/* ширина буде обчислюватись по заданому paddingX */}
        <ButtonLink to="/signin" text="Sign innnn" paddingInline="60px" />
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

main
