import { Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormParameters({
  handleNextStep,
  handleChangeInput,
  parameters,
}) {
  const onSubmit = () => {
    handleNextStep();
  };

  return (
    <Formik initialValues={parameters} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <label>
            Height
            <FormikStyledField
              type="height"
              name="height"
              onChange={(e) => handleChangeInput(e)}
              value={parameters.height}
              placeholder="Enter your height"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="height" />
          </label>
          <label>
            Weight
            <FormikStyledField
              type="weight"
              name="weight"
              onChange={(e) => handleChangeInput(e)}
              value={parameters.weight}
              placeholder="Enter your weight"
              title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
              className={errors.age && touched.age ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="weight" />
          </label>

          <Button type="submit" /* disabled={!isValid || isSubmitting} */>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
