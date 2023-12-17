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
  });
  const [goal, setGoal] = useState({
    goal: '',
  });
  const [genderAndAge, setGenderAndAge] = useState({
    gender: '',
    age: '',
  });
  const [parameters, setParameters] = useState({
    height: '',
    weight: '',
  });
  const [activity, setActivity] = useState({
    activity: '',
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
      case 'email':
      case 'password':
        setUserData((prev) => ({ ...prev, [name]: value }));
        break;
      case 'age':
        setGenderAndAge((prev) => ({ ...prev, [name]: value }));
        break;
      case 'height':
      case 'weight':
        setParameters((prev) => ({ ...prev, [name]: value }));
        break;
      default:
        break;
    }
  };

  const handleChangeRadio = (name, value) => {
    switch (name) {
      case 'goal':
        setGoal((prev) => ({ ...prev, goal: value }));
        break;
      case 'gender':
        setGenderAndAge((prev) => ({ ...prev, gender: value }));
        break;
      case 'activity':
        setActivity((prev) => ({ ...prev, activity: value }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <FormUserData
          handleNextStep={handleNextStep}
          handleChangeInput={handleChangeInput}
          userData={userData}
        />
      )}
      {currentStep === 2 && (
        <FormGoal
          handleNextStep={handleNextStep}
          handleChangeRadio={handleChangeRadio}
          goal={goal}
        />
      )}
      {currentStep === 3 && (
        <FormGenderAndAge
          handleNextStep={handleNextStep}
          handleChangeRadio={handleChangeRadio}
          handleChangeInput={handleChangeInput}
          genderAndAge={genderAndAge}
        />
      )}
      {currentStep === 4 && (
        <FormParameters
          handleNextStep={handleNextStep}
          handleChangeInput={handleChangeInput}
          parameters={parameters}
        />
      )}
      {currentStep === 5 && (
        <FormActivity
          handleNextStep={handleNextStep}
          handleChangeRadio={handleChangeRadio}
          activity={activity}
        />
      )}
      {currentStep > 1 && <Button onClick={handlePrevStep}>Back</Button>}
    </>
  );
}
