import { useState } from 'react';
import FormUserData from './FormUserData/FormUserData';
import FormGoal from './FormGoal/FormGoal';
import FormGenderAndAge from './FormGenderAndAge/FormGenderAndAge';
import FormParameters from './FormParameters/FormParameters';
import FormActivity from './FormActivity/FormActivity';
// temporary solution
import { Button } from '../StyledComponents/Components.styled';
/* 1. make a validation for each form */
/* 2. add sign in component */
/* 3. styles for every form */
/* 4. send data to backend */

export default function SignUpForm({
  currentStep,
  handleNextStep,
  handlePrevStep,
}) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activity: '',
  });

  const handleSubmit = (values) => {
    setUserData((prev) => ({ ...prev, ...values }));
  };

  return (
    <>
      {currentStep === 1 && (
        <FormUserData
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      )}
      {currentStep === 2 && (
        <FormGoal
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      )}
      {currentStep === 3 && (
        <FormGenderAndAge
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      )}
      {currentStep === 4 && (
        <FormParameters
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      )}
      {currentStep === 5 && (
        <FormActivity handleSubmit={handleSubmit} userData={userData} />
      )}
      {currentStep > 1 && <Button onClick={handlePrevStep}>Back</Button>}
    </>
  );
}
