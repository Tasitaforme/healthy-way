import { useState } from 'react';
import {
  MainAuth,
  ImageWrapper,
  TextWrapper,
  SignInWrapper,
  SignInText,
  SignInLink,
} from './SignUpPage.styled';
import { Container } from '../../components/StyledComponents/Container';
import { FlexBox } from './SignUpPage.styled';
import SignUpImage from '../../components/SignUpImage/SignUpImage';
import SignUpText from '../../components/SignUpText/SignUpText';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <MainAuth>
      <Container>
        <FlexBox>
          <ImageWrapper>
            <SignUpImage currentStep={currentStep} />
          </ImageWrapper>
          <TextWrapper>
            <SignUpText currentStep={currentStep} />
            <SignUpForm
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
            />
            {currentStep === 1 && (
              <SignInWrapper>
                <SignInText>Do you already have an account?</SignInText>
                <SignInLink to="/signin">Sign in</SignInLink>
              </SignInWrapper>
            )}
          </TextWrapper>
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
