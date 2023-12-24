import { Formik } from 'formik';
import {
  SignUpFormikForm,
  SignUpField,
  SignUpButton,
  SignUpError,
  FieldWrapper,
  ValidPassword,
} from './FormUserData.styled.js';
import { registerSchema } from '../../../schemas/formikRegister.js';

export default function FormUserData({
  handleNextStep,
  handleSubmit,
  userData,
}) {
  const onSubmit = (values) => {
    handleSubmit(values);
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
          <FieldWrapper>
            <SignUpField
              type="text"
              name="name"
              placeholder="Name"
              className={
                touched.name
                  ? errors.name
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <SignUpError component="p" name="name" />
          </FieldWrapper>

          <FieldWrapper>
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
            <SignUpError component="p" name="email" />
          </FieldWrapper>

          <FieldWrapper>
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
            <SignUpError component="p" name="password" />
            {!errors.password && touched.password && (
              <ValidPassword>Password is secure</ValidPassword>
            )}
          </FieldWrapper>

          <SignUpButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </SignUpButton>
        </SignUpFormikForm>
      )}
    </Formik>
  );
}
