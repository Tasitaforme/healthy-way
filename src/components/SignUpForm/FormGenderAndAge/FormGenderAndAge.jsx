import { useState } from 'react';
import { Field, Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

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
            <Field type="radio" name="picked" value="lose fat" />
            <Field type="radio" name="picked" value="maintain" />
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

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
