import { Title, Subtitle } from './SignUpText.styled';

export default function SignUpText({ currentStep }) {
  return (
    <>
      {currentStep === 1 && (
        <>
          <Title>Sign up</Title>
          <Subtitle>You need to register to use the service</Subtitle>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Title>Your goal</Title>
          <Subtitle>Choose a goal so that we can help you effectively</Subtitle>
        </>
      )}
      {currentStep === 3 && (
        <>
          <Title>Select gender, Age</Title>
          <Subtitle>Choose a goal so that we can help you effectively</Subtitle>
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
          <Subtitle>To correctly calculate calorie and water intake</Subtitle>
        </>
      )}
    </>
  );
}
