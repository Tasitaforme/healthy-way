import { useState } from 'react';
import { MainAuth, ImageWrapper, TextWrapper } from './SignUpPage.styled';
import { Container } from '../../components/StyledComponents/Container';
import { FlexBox } from './SignUpPage.styled';
import SignUpImage from '../../components/SignUpImage/SignUpImage';
import SignUpText from '../../components/SignUpText/SignUpText';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [goal, setGoal] = useState({
    goal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
      case 'email':
      case 'password':
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;
      case 'goal':
        setGoal((prev) => ({ ...prev, [name]: value }));
    }
    console.log(e.currentTarget);
  };

  // const handleChangeGoal = (e) => {
  //   const { name, value } = e.currentTarget;
  //   setGoal((prev) => ({ ...prev, [name]: value }));
  // };

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
              handleChange={handleChange}
              userData={userData}
              goal={goal}
            />
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
