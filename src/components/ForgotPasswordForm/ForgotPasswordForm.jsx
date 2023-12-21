import { Formik } from 'formik';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';
import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';
import { Button } from '../StyledComponents/Components.styled';

export default function ForgotPasswordForm() {
  const initialValues = {
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={forgotPasswordSchema}
      // onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <SignInFormikForm>
          <FormikStyledField
            type="email"
            name="email"
            placeholder="E-mail"
            className={
              touched.quantity
                ? errors.quantity
                  ? 'input-error'
                  : 'input-success'
                : 'input-normal'
            }
          />
          <FormikStyledErrorMessage component="p" name="email" />

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Send
          </Button>
        </SignInFormikForm>
      )}
    </Formik>
  );
}
