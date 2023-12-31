import { Formik } from 'formik';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';
import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';
import { Button, HeadlineSecond } from '../StyledComponents/Components.styled';
import { changePasswordSchema } from '../../schemas/formik';
import toast from 'react-hot-toast';
import { changePassword } from '../../requests/changePassword';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/auth/selectors';

export default function ChangePasswordForm() {
  const { email } = useSelector(selectUserInfo);

  const initialValues = {
    password: '',
    newPassword: '',
  };

  const onSubmit = async (values, actions) => {
    try {
      const response = await changePassword({ email, ...values });
      if (response && response.data && response.data.message) {
        toast.success('Your password has been successfully changed!');
      } else {
        throw new Error('Did you really enter a valid password?');
      }
    } catch (error) {
      if (error.message) {
        toast.error(`Something went wrong! \n ${error.message}`);
      } else {
        toast.error(
          'Something went wrong while changing the password. Try again!'
        );
      }
    } finally {
      actions.resetForm();
    }
  };

  return (
    <section style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <HeadlineSecond style={{ marginBottom: '12px' }}>
        Change password
      </HeadlineSecond>
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, isValid }) => (
          <SignInFormikForm>
            <FormikStyledField
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className={
                touched.password
                  ? errors.password
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="password" />
            <FormikStyledField
              type="password"
              name="newPassword"
              placeholder="New password"
              autoComplete="off"
              className={
                touched.newPassword
                  ? errors.newPassword
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="newPassword" />

            <Button type="submit" disabled={!isValid || isSubmitting}>
              Update Password
            </Button>
          </SignInFormikForm>
        )}
      </Formik>
    </section>
  );
}
