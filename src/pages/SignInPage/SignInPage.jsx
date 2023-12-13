import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import { Container } from '../../components/StyledComponents/Container';

export default function SignInPage() {
  return (
    <main>
      <Container>
        <h1>Login</h1>
        <h2>You need to login to use the service</h2>
        <SignInForm />
      </Container>
    </main>
  );
}
