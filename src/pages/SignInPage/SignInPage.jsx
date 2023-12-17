import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import { Container } from '../../components/StyledComponents/Container';
import { HeadSecond, SubLink, SubText } from './SignInPage.styled';
import { HeadlineFirst } from '../../components/StyledComponents/Components.styled';

export default function SignInPage() {
  return (
    <main>
      <Container>
        <HeadlineFirst>Sign in</HeadlineFirst>
        <HeadSecond>You need to login to use the service</HeadSecond>
        <SignInForm />

        <SubText>If you don't have an account yet</SubText>
        <SubLink to="/signup">Sign up</SubLink>
      </Container>
    </main>
  );
}
