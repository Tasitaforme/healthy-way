import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormikButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';

export default function FormUserData({ handleNextStep }) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    setUserData((prev) => ({ ...prev, value }));
  };

  const onSubmit = (values, actions) => {
    console.log(values, actions);
    handleNextStep();
  };

  // const initialValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  return (
    <Formik
      initialValues={userData}
      // validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <FormikStyledField
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            value={userData.name}
            title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="name" />

          <FormikStyledField
            type="email"
            name="email"
            placeholder="E-mail"
            title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="email" />

          <FormikStyledField
            type="password"
            name="password"
            placeholder="Password"
            title="The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number"
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="password" />

          <FormikButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </FormikButton>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
