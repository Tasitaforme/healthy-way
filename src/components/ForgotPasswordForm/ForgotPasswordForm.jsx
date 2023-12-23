import { Formik } from 'formik';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';
import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';
import { Button } from '../StyledComponents/Components.styled';
import { forgotPasswordSchema } from '../../schemas/formik';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../requests/forgotPassword';
import toast from 'react-hot-toast';

export default function ForgotPasswordForm() {
  const initialValues = {
    email: '',
  };

  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    try {
      await forgotPassword(values);
      toast.success('A new password has been sent to your email!');
      navigate('/signin');
    } catch (error) {
      toast.error(`${error}`);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgotPasswordSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <SignInFormikForm>
          <FormikStyledField
            type="email"
            name="email"
            autoComplete="on"
            placeholder="E-mail"
            className={
              touched.quantity
                ? errors.quantity
                  ? 'input-error'
                  : 'input-success'
                : 'input-normal'
            }
          />
          <FormikStyledErrorMessage component="p" name="email" />

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Send
          </Button>
        </SignInFormikForm>
      )}
    </Formik>
  );
}
