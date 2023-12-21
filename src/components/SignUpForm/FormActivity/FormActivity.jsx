import { Field, Formik } from 'formik';
import { activitySchema } from '../../../schemas/formikRegister';
import { useDispatch } from 'react-redux';
import { registration } from '../../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import {
  ActivityForm,
  Label,
  ActivityButton,
  BackButtonLast,
} from './FormActivity.styled';

export default function FormActivity({
  handleSubmit,
  userData,
  handlePrevStep,
}) {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    await handleSubmit(values);
    try {
      await dispatch(registration(userData));
      toast.success('You have successfully signed up!');
    } catch (error) {
      toast.error('Wrong data! Try again!');
    }
  };

  return (
    <Formik
      initialValues={userData}
      validationSchema={activitySchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <ActivityForm>
          <Label>
            <Field type="radio" name="activity" value="1.2" />
            1.2 - if you do not have physical activity and sedentary work
          </Label>
          <Label>
            <Field type="radio" name="activity" value="1.375" />
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </Label>
          <Label>
            <Field type="radio" name="activity" value="1.55" />
            1.55 - if you play sports with average loads 3-5 times a week
          </Label>
          <Label>
            <Field type="radio" name="activity" value="1.725" />
            1.725 - if you train fully 6-7 times a week
          </Label>
          <Label>
            <Field type="radio" name="activity" value="1.9" />
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </Label>

          <ActivityButton type="submit" disabled={!isValid || isSubmitting}>
            Sign Up
          </ActivityButton>
          <BackButtonLast onClick={handlePrevStep}>Back</BackButtonLast>
        </ActivityForm>
      )}
    </Formik>
  );
}
