import { Field, Formik } from 'formik';
import { FormikStyledForm } from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormGoal({ handleNextStep, handleChangeRadio, goal }) {
  const onSubmit = (values) => {
    handleChangeRadio('goal', values.goal);
    handleNextStep();
  };

  return (
    <Formik initialValues={goal} onSubmit={onSubmit}>
      <FormikStyledForm>
        <label>
          Lose Fat
          <Field type="radio" name="goal" value="lose fat" />
        </label>
        <label>
          Maintain
          <Field type="radio" name="goal" value="maintain" />
        </label>
        <label>
          Gain Muscle
          <Field type="radio" name="goal" value="gain muscle" />
        </label>

        <Button type="submit" /* disabled={!isValid || isSubmitting} */>
          Next
        </Button>
      </FormikStyledForm>
    </Formik>
  );
}
