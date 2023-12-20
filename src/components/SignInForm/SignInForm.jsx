import { Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { loginSchema } from '../../schemas/formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../components/StyledComponents/Formik.styled';
import { Button } from '../StyledComponents/Components.styled';

export default function SignInForm() {
  const location = useLocation();

  const initialValuesFromLocation = {
    email: location?.state?.email,
    password: location?.state?.password,
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
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
        initialValues={initialValuesFromLocation || initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, isValid }) => (
          <FormikStyledForm>
            <label>Email address</label>
            <FormikStyledField
              type="email"
              name="email"
              placeholder="Enter your email"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.email && touched.email ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="email" />

            <label>Password</label>
            <FormikStyledField
              type="password"
              name="password"
              placeholder="Enter password"
              title="The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number"
              className={
                errors.password && touched.password ? 'input-error' : ''
              }
            />
            <FormikStyledErrorMessage component="p" name="password" />

            <Button type="submit" disabled={!isValid || isSubmitting}>
              Sign in
            </Button>
          </FormikStyledForm>
        )}
      </Formik>
    </>
  );
}
