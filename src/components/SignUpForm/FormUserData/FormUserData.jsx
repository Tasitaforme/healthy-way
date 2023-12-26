import { Formik } from 'formik';
import { useState } from 'react';
import {
  SignUpFormikForm,
  SignUpField,
  SignUpButton,
  SignUpError,
  FieldWrapper,
  ValidPassword,
  Icon,
} from './FormUserData.styled.js';
import sprite from 'assets/sprite.svg';
import { registerSchema } from '../../../schemas/formikRegister.js';

export default function FormUserData({
  handleNextStep,
  handleSubmit,
  userData,
}) {
  const [isHovered, setIsHovered] = useState(false);

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
            <SignUpError component="p" name="password" />
            {!errors.password && touched.password && (
              <ValidPassword>Password is secure</ValidPassword>
            )}
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

          <SignUpButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </SignUpButton>
        </SignUpFormikForm>
      )}
    </Formik>
  );
}
