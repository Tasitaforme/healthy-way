import { useState } from 'react';
import { Formik, Field } from 'formik';
import {
  FormikButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';

export default function FormGoal({ handleNextStep }) {
  const initialValues = {
    picked: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    handleNextStep();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <label>
            <FormikStyledField type="radio" name="picked" value="lose fat" />
            Lose Fat
          </label>
          <label>
            <FormikStyledField type="radio" name="picked" value="maintain" />
            Maintain
          </label>
          <label>
            <FormikStyledField type="radio" name="picked" value="gain muscle" />
            Gain Muscle
          </label>

          <FormikButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </FormikButton>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
