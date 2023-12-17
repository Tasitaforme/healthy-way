import { Field, Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormGenderAndAge({
  handleNextStep,
  handleChangeRadio,
  handleChangeInput,
  genderAndAge,
}) {
  const onSubmit = (values) => {
    handleChangeRadio('gender', values.gender);
    handleNextStep();
  };

  return (
    <Formik initialValues={genderAndAge} onSubmit={onSubmit}>
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
              type="age"
              name="age"
              onChange={(e) => handleChangeInput(e)}
              value={genderAndAge.age}
              placeholder="Enter your age"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="age" />
          </label>

          <Button type="submit" /* disabled={!isValid || isSubmitting} */>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
