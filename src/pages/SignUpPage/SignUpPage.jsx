import { useState } from 'react';
import {
  MainAuth,
  ImageWrapper,
  TextWrapper,
  SignInWrapper,
  SubText,
  SubLink,
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
                <SubText>Do you already have an account?</SubText>
                <SubLink to="/signin">Sign in</SubLink>
              </SignInWrapper>
            )}
          </TextWrapper>
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
