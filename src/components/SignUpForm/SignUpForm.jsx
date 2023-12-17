import FormUserData from './FormUserData/FormUserData';
import FormGoal from './FormGoal/FormGoal';
import FormGenderAndAge from './FormGenderAndAge/FormGenderAndAge';
import FormParameters from './FormParameters/FormParameters';
import FormActivity from './FormActivity/FormActivity';
// temporary solution
import { FormikButton } from '../StyledComponents/Formik.styled';

export default function SignUpForm({
  currentStep,
  handleNextStep,
  handlePrevStep,
  handleChange,
  userData,
  goal,
}) {
  return (
    <>
      {currentStep === 1 && (
        <FormUserData
          handleNextStep={handleNextStep}
          handleChange={handleChange}
          userData={userData}
        />
      )}
      {currentStep === 2 && (
        <FormGoal
          handleNextStep={handleNextStep}
          handleChange={handleChange}
          goal={goal}
        />
      )}
      {currentStep === 3 && (
        <FormGenderAndAge handleNextStep={handleNextStep} />
      )}
      {currentStep === 4 && <FormParameters handleNextStep={handleNextStep} />}
      {currentStep === 5 && <FormActivity handleNextStep={handleNextStep} />}
      {currentStep > 1 && (
        <FormikButton onClick={handlePrevStep}>Back</FormikButton>
      )}
    </>
  );
}
