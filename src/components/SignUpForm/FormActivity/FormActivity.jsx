import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Formik } from 'formik';
import { activitySchema } from '../../../schemas/formikRegister';
import { registration } from '../../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import {
  ActivityForm,
  Label,
  ActivityButton,
  BackButtonLast,
  Error,
} from './FormActivity.styled';

export default function FormActivity({
  handleSubmit,
  userData,
  handlePrevStep,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await handleSubmit({
      ...values,
      activityRatio: Number(values.activityRatio),
    });
    try {
      await dispatch(registration(userData)).unwrap();
      toast.success('You have successfully signed up!');
      navigate('/signin');
    } catch (error) {
      toast.error('This email is in use');
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
            <Field type="radio" name="activityRatio" value="1.2" />
            1.2 - if you do not have physical activity and sedentary work
          </Label>
          <Label>
            <Field type="radio" name="activityRatio" value="1.375" />
            1.375 - if you do short runs or light gymnastics 1-3 times a week
          </Label>
          <Label>
            <Field type="radio" name="activityRatio" value="1.55" />
            1.55 - if you play sports with average loads 3-5 times a week
          </Label>
          <Label>
            <Field type="radio" name="activityRatio" value="1.725" />
            1.725 - if you train fully 6-7 times a week
          </Label>
          <Label>
            <Field type="radio" name="activityRatio" value="1.9" />
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
          </Label>
          <Error component="p" name="activityRatio" />

          <ActivityButton type="submit" disabled={!isValid || isSubmitting}>
            Sign Up
          </ActivityButton>
          <BackButtonLast onClick={handlePrevStep}>Back</BackButtonLast>
        </ActivityForm>
      )}
    </Formik>
  );
}
