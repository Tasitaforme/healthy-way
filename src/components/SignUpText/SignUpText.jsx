import { HeadlineFirst } from '../StyledComponents/Components.styled';
import { Subtitle } from './SignUpText.styled';

export default function SignUpText({ currentStep }) {
  return (
    <>
      {currentStep === 1 && (
        <>
          <HeadlineFirst>Sign up</HeadlineFirst>
          <Subtitle>You need to register to use the service</Subtitle>
        </>
      )}
      {currentStep === 2 && (
        <>
          <HeadlineFirst>Your goal</HeadlineFirst>
          <Subtitle>Choose a goal so that we can help you effectively</Subtitle>
        </>
      )}
      {currentStep === 3 && (
        <>
          <HeadlineFirst>Select gender, Age</HeadlineFirst>
          <Subtitle>
            Choose a goal so that we can <br />
            help you effectively
          </Subtitle>
        </>
      )}
      {currentStep === 4 && (
        <>
          <HeadlineFirst>Body parameters</HeadlineFirst>
          <Subtitle>
            Enter your parameters for correct performance tracking
          </Subtitle>
        </>
      )}
      {currentStep === 5 && (
        <>
          <HeadlineFirst>Your Activity</HeadlineFirst>
          <Subtitle>
            To correctly calculate calorie <br />
            and water intake
          </Subtitle>
        </>
      )}
    </>
  );
}
