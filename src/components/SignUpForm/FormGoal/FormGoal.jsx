import { Field, Formik } from 'formik';
import { goalSchema } from '../../../schemas/formikRegister';
import {
  GoalForm,
  Label,
  FlexWrapper,
  GoalButton,
  BackButton,
  Error,
} from './FormGoal.styled';

export default function FormGoal({
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
      validationSchema={goalSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <GoalForm>
          <FlexWrapper>
            <Label>
              <Field type="radio" name="goal" value="Lose fat" />
              Lose Fat
            </Label>
            <Label>
              <Field type="radio" name="goal" value="Maintain" />
              Maintain
            </Label>
            <Label>
              <Field type="radio" name="goal" value="Gain muscle" />
              Gain Muscle
            </Label>
            <Error component="p" name="goal" />
          </FlexWrapper>

          <GoalButton type="submit" disabled={!isValid || isSubmitting}>
            Next
          </GoalButton>
          <BackButton onClick={handlePrevStep}>Back</BackButton>
        </GoalForm>
      )}
    </Formik>
  );
}
