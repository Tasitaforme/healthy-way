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
  RadioError,
} from './FormGenderAndAge.styled';

export default function FormGenderAndAge({
  handleNextStep,
  handleSubmit,
  userData,
  handlePrevStep,
}) {
  const onSubmit = (values) => {
    handleSubmit({ ...values, age: Number(values.age) });
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={genderAndAgeSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <GenderAndAgeForm>
          <Text>Gender</Text>
          <GenderWrapper>
            <Label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </Label>
            <Label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </Label>
            <RadioError component="p" name="gender" />
          </GenderWrapper>
          <AgeWrapper>
            Your age
            <FormikStyledField
              type="text"
              name="age"
              placeholder="Enter your age"
              className={
                touched.age
                  ? errors.age
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <Error component="p" name="age" />
          </AgeWrapper>

          <GenderAndAgeButton type="submit">Next</GenderAndAgeButton>
          <BackButton onClick={handlePrevStep}>Back</BackButton>
        </GenderAndAgeForm>
      )}
    </Formik>
  );
}
