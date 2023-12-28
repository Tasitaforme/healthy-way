import { Formik, Field } from 'formik';
import { useState } from 'react';
import {
  ActivityForm,
  Label,
  ActivityButton,
  BackButtonLast,
  Error,
  Text,
} from './FormActivity.styled';

export default function FormActivity({
  userData,
  handlePrevStep,
  handleSubmitForm,
  handleChange,
}) {
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (!error) {
      handleSubmitForm();
    }
  };

  const showError = (value) => {
    setError(value);
  };

  return (
    <Formik initialValues={userData} onSubmit={onSubmit}>
      {() => (
        <ActivityForm>
          <Label>
            <Field
              onChange={(e) => handleChange(Number(e.currentTarget.value))}
              type="radio"
              name="activityRatio"
              value="1.2"
              checked={userData.activityRatio === 1.2}
            />
            <Text>
              1.2 - if you do not have physical activity and sedentary work
            </Text>
          </Label>
          <Label>
            <Field
              onChange={(e) => handleChange(Number(e.currentTarget.value))}
              type="radio"
              name="activityRatio"
              value="1.375"
              checked={userData.activityRatio === 1.375}
            />
            <Text>
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </Text>
          </Label>
          <Label>
            <Field
              onChange={(e) => handleChange(Number(e.currentTarget.value))}
              type="radio"
              name="activityRatio"
              value="1.55"
              checked={userData.activityRatio === 1.55}
            />
            <Text>
              1.55 - if you play sports with average loads 3-5 times a week
            </Text>
          </Label>
          <Label>
            <Field
              onChange={(e) => handleChange(Number(e.currentTarget.value))}
              type="radio"
              name="activityRatio"
              value="1.725"
              checked={userData.activityRatio === 1.725}
            />
            <Text>1.725 - if you train fully 6-7 times a week</Text>
          </Label>
          <Label>
            <Field
              onChange={(e) => handleChange(Number(e.currentTarget.value))}
              type="radio"
              name="activityRatio"
              value="1.9"
              checked={userData.activityRatio === 1.9}
            />
            <Text>
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </Text>
          </Label>
          {error && userData.activityRatio === '' && (
            <Error>Required, choose one of five</Error>
          )}

          <ActivityButton
            type="submit"
            onClick={() => {
              if (userData.activityRatio === '') {
                showError(true);
              } else {
                showError(false);
              }
            }}
          >
            Sign Up
          </ActivityButton>
          <BackButtonLast onClick={handlePrevStep}>Back</BackButtonLast>
        </ActivityForm>
      )}
    </Formik>
  );
}
