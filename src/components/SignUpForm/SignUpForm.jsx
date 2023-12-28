import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registration } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import FormUserData from './FormUserData/FormUserData';
import FormGoal from './FormGoal/FormGoal';
import FormGenderAndAge from './FormGenderAndAge/FormGenderAndAge';
import FormParameters from './FormParameters/FormParameters';
import FormActivity from './FormActivity/FormActivity';

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
    activityRatio: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setUserData((prev) => ({ ...prev, ...values }));
  };

  const handleChange = (value) => {
    setUserData((prev) => ({ ...prev, activityRatio: value }));
  };

  const handleSubmitForm = async () => {
    try {
      await dispatch(registration(userData)).unwrap();

      toast.success(
        'You have successfully signed up! \n A confirmation letter has been sent to your email, please check it!'
      );
      navigate('/signin');
    } catch (error) {
      toast.error(`Something went wrong! \n ${error.message}`);
    }
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
          handlePrevStep={handlePrevStep}
        />
      )}
      {currentStep === 3 && (
        <FormGenderAndAge
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
          handlePrevStep={handlePrevStep}
        />
      )}
      {currentStep === 4 && (
        <FormParameters
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
          userData={userData}
          handlePrevStep={handlePrevStep}
        />
      )}
      {currentStep === 5 && (
        <FormActivity
          userData={userData}
          handlePrevStep={handlePrevStep}
          handleSubmitForm={handleSubmitForm}
          handleChange={handleChange}
        />
      )}
    </>
  );
}
