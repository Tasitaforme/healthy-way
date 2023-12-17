import { Field, Formik } from 'formik';
import {
  FormikStyledErrorMessage,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

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
          <Field
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="lose fat"
          />
        </label>
        <label>
          Maintain
          <Field
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="maintain"
          />
        </label>
        <label>
          Gain Muscle
          <Field
            // onChange={handleChange}
            type="radio"
            name="goal"
            value="gain muscle"
          />
        </label>

        <Button type="submit" /* disabled={!isValid || isSubmitting} */>
          Next
        </Button>
      </FormikStyledForm>
    </Formik>
  );
}
