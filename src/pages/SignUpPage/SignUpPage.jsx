import React from 'react';
import { useState } from 'react';
import { MainAuth, Title, Subtitle, ImageWrapper } from './SignUpPage.styled';
import { Container } from '../../components/StyledComponents/Container';
import { FlexBox } from './SignUpPage.styled';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import watchDesk1x from '../../assets/images/watch/watch-desk@1x.png';
import watchDesk2x from '../../assets/images/watch/watch-desk@2x.png';
import watchTab1x from '../../assets/images/watch/watch-tab@1x.png';
import watchTab2x from '../../assets/images/watch/watch-tab@2x.png';
import watchMob1x from '../../assets/images/watch/watch-mob@1x.png';
import watchMob2x from '../../assets/images/watch/watch-mob@2x.png';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <MainAuth>
      <Container>
        <FlexBox>
          <ImageWrapper>
            {currentStep === 1 && (
              <img
                srcSet={`${watchDesk1x} 592w, ${watchDesk2x} 1184w, ${watchTab1x} 380w, ${watchTab2x} 760w, ${watchMob1x} 300w,${watchMob2x} 600w`}
                sizes="(min-width: 1440px) 592px, (min-width: 834px) 380px, 300px"
                alt="Watch"
              />
            )}
            {currentStep === 2 && <div>Hello</div>}
          </ImageWrapper>
          <div>
            {currentStep === 1 && (
              <>
                <Title>Sign up</Title>
                <Subtitle>You need to register to use the service</Subtitle>
              </>
            )}
            {currentStep === 2 && (
              <>
                <Title>Your goal</Title>
                <Subtitle>
                  Choose a goal so that we can help you effectively
                </Subtitle>
              </>
            )}
            {currentStep === 3 && (
              <>
                <Title>Select gender, Age</Title>
                <Subtitle>
                  Choose a goal so that we can help you effectively
                </Subtitle>
              </>
            )}
            {currentStep === 4 && (
              <>
                <Title>Body parameters</Title>
                <Subtitle>
                  Enter your parameters for correct performance tracking
                </Subtitle>
              </>
            )}
            {currentStep === 5 && (
              <>
                <Title>Your Activity</Title>
                <Subtitle>
                  To correctly calculate calorie and water intake
                </Subtitle>
              </>
            )}
            <SignUpForm /* currentStep={} */ />
          </div>
          <div>
            <p>Do you already have an account?</p>
            <nav></nav>
          </div>
        </FlexBox>
      </Container>
    </MainAuth>
  );
}
