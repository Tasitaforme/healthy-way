import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormParameters({ handleNextStep }) {
  const initialValues = {
    height: '',
    weight: '',
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
            Height
            <FormikStyledField
              type="height"
              name="height"
              placeholder="Enter your height"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="height" />
          </label>
          <label>
            Weight
            <FormikStyledField
              type="weight"
              name="weight"
              placeholder="Enter your weight"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="weight" />
          </label>

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
