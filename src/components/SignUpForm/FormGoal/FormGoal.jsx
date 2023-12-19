import { Field, Formik } from 'formik';
import { goalSchema } from '../../../schemas/formikRegister';
import { FormikStyledForm } from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormGoal({ handleNextStep, handleSubmit, userData }) {
  const onSubmit = (values) => {
    handleSubmit(values);
    handleNextStep();
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={goalSchema}
      onSubmit={onSubmit}
    >
      {({ /* errors, touched, */ isValid, isSubmitting }) => (
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

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
