import { Formik } from 'formik';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';
import {
  FormikStyledField,
  FormikStyledErrorMessage,
} from '../StyledComponents/Formik.styled';
import {
  BodyTextFirst,
  Button,
  HeadlineSecond,
} from '../StyledComponents/Components.styled';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteUserSchema } from '../../schemas/formik';
import { removeUser } from '../../requests/deleteUser';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';

export default function DeleteUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      await removeUser(values.password);
      await dispatch(logOut()).unwrap();
      toast.success('You have successfully deleted your account!');
      navigate('/welcome');
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong! \n ${error.message}!`);
      return;
    }
    actions.resetForm();
  };

  return (
    <section style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <HeadlineSecond
        style={{ marginBottom: '12px', color: 'var(--error-color)' }}
      >
        Delete account
      </HeadlineSecond>
      <BodyTextFirst style={{ marginBottom: '12px', maxWidth: '380px' }}>
        Once you delete your account, there is no going back. Please be certain.
      </BodyTextFirst>

      <Formik
        initialValues={{ password: '' }}
        validationSchema={deleteUserSchema}
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

            <Button type="submit" disabled={!isValid || isSubmitting}>
              Delete your account
            </Button>
          </SignInFormikForm>
        )}
      </Formik>
    </section>
  );
}
