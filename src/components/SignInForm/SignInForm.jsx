import { Formik } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { loginSchema } from '../../schemas/formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
} from '../../components/StyledComponents/Formik.styled';
import { Button } from '../StyledComponents/Components.styled';
import { ForgotLink, SignInFormikForm } from './SignInForm.styled';

export default function SignInForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const onSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success('You have successfully logged in!');
    } catch (error) {
      toast.error('Wrong login or password! Try again!');
    }

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
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

            <FormikStyledField
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className={
                touched.quantity
                  ? errors.quantity
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="password" />

            <Button type="submit" disabled={!isValid || isSubmitting}>
              Sign in
            </Button>
            <ForgotLink to="/forgot-password">Forgot your password?</ForgotLink>
          </SignInFormikForm>
        )}
      </Formik>
    </>
  );
}
