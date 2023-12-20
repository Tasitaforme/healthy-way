import { Formik } from 'formik';
import { FormikStyledErrorMessage } from '../../StyledComponents/Formik.styled';
import { SignUpFormikForm, SignUpField } from './FormUserData.styled.js';
import { Button } from '../../StyledComponents/Components.styled';
import { registerSchema } from '../../../schemas/formikRegister.js';

export default function FormUserData({
  handleNextStep,
  handleSubmit,
  userData,
}) {
  const onSubmit = (values) => {
    handleSubmit(values);
    console.log(values);
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <SignUpFormikForm>
          <SignUpField
            type="text"
            name="name"
            placeholder="Name"
            className={
              errors.name && touched.name ? 'input-error' : 'input-success'
            }
          />
          <FormikStyledErrorMessage component="p" name="name" />

          <SignUpField
            type="email"
            name="email"
            placeholder="E-mail"
            className={
              touched.email
                ? errors.email
                  ? 'input-error'
                  : 'input-success'
                : 'input-normal'
            }
          />
          <FormikStyledErrorMessage component="p" name="email" />

          <SignUpField
            type="password"
            name="password"
            placeholder="Password"
            className={
              touched.password
                ? errors.password
                  ? 'input-error'
                  : 'input-success'
                : 'input-normal'
            }
          />
          <FormikStyledErrorMessage component="p" name="password" />

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </SignUpFormikForm>
      )}
    </Formik>
  );
}
