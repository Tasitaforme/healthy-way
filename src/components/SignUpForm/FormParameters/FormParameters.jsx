import { Formik } from 'formik';
import { parametersSchema } from '../../../schemas/formikRegister';
import { FormikStyledField } from '../../StyledComponents/Formik.styled';
import {
  ParametersForm,
  Label,
  ParametersButton,
} from './FormParameters.styled';
import { BackButton, Error } from '../FormGenderAndAge/FormGenderAndAge.styled';

export default function FormParameters({
  handleNextStep,
  handleSubmit,
  userData,
  handlePrevStep,
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
        <ParametersForm>
          <Label>
            Height
            <FormikStyledField
              type="text"
              name="height"
              placeholder="Enter your height"
              className={errors.height && touched.height ? 'input-error' : ''}
            />
            <Error component="p" name="height" />
          </Label>
          <Label>
            Weight
            <FormikStyledField
              type="text"
              name="weight"
              placeholder="Enter your weight"
              className={errors.weight && touched.weight ? 'input-error' : ''}
            />
            <Error component="p" name="weight" />
          </Label>

          <ParametersButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </ParametersButton>
          <BackButton onClick={handlePrevStep}>Back</BackButton>
        </ParametersForm>
      )}
    </Formik>
  );
}
