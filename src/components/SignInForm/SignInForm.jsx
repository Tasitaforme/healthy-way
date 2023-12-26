import { Formik } from 'formik';
import { useState } from 'react';
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
import { Icon } from '../SignUpForm/FormUserData/FormUserData.styled';
import sprite from 'assets/sprite.svg';

export default function SignInForm() {
  const [isHovered, setIsHovered] = useState(false);

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
                  type={isHovered ? 'text' : 'password'}
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
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <Error component="p" name="password" />
                {touched.password && !errors.password && (
                  <Icon width="32px" height="32px">
                    <use href={`${sprite}#correct`} />
                  </Icon>
                )}
                {touched.password && errors.password && (
                  <Icon width="32px" height="32px">
                    <use href={`${sprite}#error`} />
                  </Icon>
                )}
                {!touched.password && !isHovered && (
                  <Icon width="32px" height="32px">
                    <use href={`${sprite}#eye-off`} />
                  </Icon>
                )}
                {isHovered && !touched.password && (
                  <Icon width="32px" height="32px">
                    <use href={`${sprite}#eye`} />
                  </Icon>
                )}
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
