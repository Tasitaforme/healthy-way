import { Formik } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loginSchema } from '../../schemas/formik';
import { Button } from '../StyledComponents/Components.styled';
import {
  ForgotLink,
  SignInFormikForm,
  Error,
  FieldWrapper,
  Field,
  FlexWrapper,
} from './SignInForm.styled';

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
      toast.error(`Something went wrong! \n ${error.message}`);
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
            <FlexWrapper>
              <FieldWrapper>
                <Field
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
                <Error component="p" name="email" />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  className={
                    touched.password
                      ? errors.password
                        ? 'input-error'
                        : 'input-success'
                      : 'input-normal'
                  }
                />
                <Error component="p" name="password" />
              </FieldWrapper>
            </FlexWrapper>

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
