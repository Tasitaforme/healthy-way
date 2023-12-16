import { Formik } from 'formik';
import {
  FormikButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';

export default function FormGoal({ handleNextStep, handleChange, goal }) {
  const onSubmit = (values) => {
    console.log(values);
    handleChange(values);
    handleNextStep();
  };

  return (
    <Formik initialValues={goal} onSubmit={onSubmit}>
      <FormikStyledForm>
        <label>
          Lose Fat
          <FormikStyledField
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="lose fat"
          />
        </label>
        <label>
          Maintain
          <FormikStyledField
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="maintain"
          />
        </label>
        <label>
          Gain Muscle
          <FormikStyledField
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="gain muscle"
          />
        </label>

        <FormikButton type="submit" /* disabled={!isValid || isSubmitting} */>
          Next
        </FormikButton>
      </FormikStyledForm>
    </Formik>
  );
}
