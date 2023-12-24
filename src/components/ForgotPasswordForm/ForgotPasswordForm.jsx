import { Formik } from 'formik';
import { FormikStyledField } from '../StyledComponents/Formik.styled';
import { Button } from '../StyledComponents/Components.styled';
import { forgotPasswordSchema } from '../../schemas/formik';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../requests/forgotPassword';
import toast from 'react-hot-toast';
import { Form, Error } from './ForgotPasswordForm.styled';

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
      toast.error(`Something went wrong! ${error}`);
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
        <Form>
          <FormikStyledField
            type="email"
            name="email"
            autoComplete="on"
            placeholder="E-mail"
            className={
              touched.email
                ? errors.email
                  ? 'input-error'
                  : 'input-success'
                : 'input-normal'
            }
          />
          <Error component="p" name="email" />

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
}
