import React from 'react';
import { useState } from 'react';
import { MainAuth, ImageWrapper, TextWrapper } from './SignUpPage.styled';
import { Container } from '../../components/StyledComponents/Container';
import { FlexBox } from './SignUpPage.styled';
import SignUpImage from '../../components/SignUpImage/SignUpImage';
import SignUpText from '../../components/SignUpText/SignUpText';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(5);

  return (
    <MainAuth>
      <Container>
        <FlexBox>
          <ImageWrapper>
            <SignUpImage currentStep={currentStep} />
          </ImageWrapper>
          <TextWrapper>
            <SignUpText currentStep={currentStep} />
            <SignUpForm /* currentStep={} */ />
          </TextWrapper>
          {/* <div>
            <p>Do you already have an account?</p>
            <nav></nav>
          </div> */}
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
