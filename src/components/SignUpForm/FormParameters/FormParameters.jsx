import { Formik } from 'formik';
import { parametersSchema } from '../../../schemas/formikRegister';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormParameters({
  handleNextStep,
  handleSubmit,
  userData,
}) {
  const onSubmit = (values) => {
    handleSubmit(values);
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={parametersSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <label>
            Height
            <FormikStyledField
              type="text"
              name="height"
              placeholder="Enter your height"
              className={errors.height && touched.height ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="height" />
          </label>
          <label>
            Weight
            <FormikStyledField
              type="text"
              name="weight"
              placeholder="Enter your weight"
              className={errors.weight && touched.weight ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="weight" />
          </label>

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
