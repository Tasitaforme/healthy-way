import { Field, Formik } from 'formik';
import { genderAndAgeSchema } from '../../../schemas/formikRegister';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormGenderAndAge({
  handleNextStep,
  handleSubmit,
  userData,
}) {
  const onSubmit = (values) => {
    console.log(values);
    handleSubmit(values);
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={genderAndAgeSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <p>Gender</p>
          <label>
            <Field type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="female" />
            Female
          </label>
          <label>
            Your age
            <FormikStyledField
              type="text"
              name="age"
              placeholder="Enter your age"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="age" />
          </label>

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
