import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormikButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';

export default function FormGenderAndAge({ handleNextStep }) {
  const initialValues = {
    picked: '',
    age: '',
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
            Gender
            <FormikStyledField type="radio" name="picked" value="lose fat" />
            <FormikStyledField type="radio" name="picked" value="maintain" />
          </label>

          <label>
            Age
            <FormikStyledField
              type="age"
              name="age"
              placeholder="Enter your age"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="age" />
          </label>

          <FormikButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </FormikButton>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
