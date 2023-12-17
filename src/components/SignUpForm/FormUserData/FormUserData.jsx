import { Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';
// import { registerSchema } from '../../../schemas/formik';

export default function FormUserData({
  handleNextStep,
  handleChangeInput,
  userData,
}) {
  const onSubmit = () => {
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      // validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <FormikStyledField
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChangeInput(e)}
            value={userData.name}
            title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="name" />

          <FormikStyledField
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => handleChangeInput(e)}
            value={userData.email}
            title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="email" />

          <FormikStyledField
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChangeInput(e)}
            value={userData.password}
            title="The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number"
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          <FormikStyledErrorMessage component="p" name="password" />

          <Button type="submit" /* disabled={!isValid || isSubmitting} */>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
