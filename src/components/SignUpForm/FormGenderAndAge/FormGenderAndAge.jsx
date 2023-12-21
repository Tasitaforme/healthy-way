import { Field, Formik } from 'formik';
import { genderAndAgeSchema } from '../../../schemas/formikRegister';
import { FormikStyledField } from '../../StyledComponents/Formik.styled';
import {
  GenderAndAgeForm,
  BackButton,
  Text,
  GenderAndAgeButton,
  GenderWrapper,
  Label,
  AgeWrapper,
  Error,
} from './FormGenderAndAge.styled';

export default function FormGenderAndAge({
  handleNextStep,
  handleSubmit,
  userData,
  handlePrevStep,
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
        <GenderAndAgeForm>
          <Text>Gender</Text>
          <GenderWrapper>
            <Label>
              <Field type="radio" name="gender" value="male" />
              Male
            </Label>
            <Label>
              <Field type="radio" name="gender" value="female" />
              Female
            </Label>
          </GenderWrapper>
          <AgeWrapper>
            Your age
            <FormikStyledField
              type="text"
              name="age"
              placeholder="Enter your age"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <Error component="p" name="age" />
          </AgeWrapper>

          <GenderAndAgeButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </GenderAndAgeButton>
          <BackButton onClick={handlePrevStep}>Back</BackButton>
        </GenderAndAgeForm>
      )}
    </Formik>
  );
}
