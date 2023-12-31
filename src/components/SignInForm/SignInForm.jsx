import { Formik } from 'formik';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  Icon,
  IconsWrapper,
} from '../SignUpForm/FormUserData/FormUserData.styled';
import sprite from 'assets/sprite.svg';
import { selectAuthInfo } from '../../redux/auth/selectors';
import LoadingModal from '../Loader/LoadingModal';

export default function SignInForm() {
  const { isLoading } = useSelector(selectAuthInfo);

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
        {({ errors, touched }) => (
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
                />
                <Error component="p" name="password" />
                <IconsWrapper
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
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
                </IconsWrapper>
              </FieldWrapper>
            </FlexWrapper>

            <Button type="submit">Sign in</Button>
            <ForgotLink to="/forgot-password">Forgot your password?</ForgotLink>
          </SignInFormikForm>
        )}
      </Formik>
      {isLoading && <LoadingModal isOpen={isLoading} />}
    </>
  );
}
