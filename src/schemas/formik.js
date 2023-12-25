import * as Yup from 'yup';

const EMAIL_RULE =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(EMAIL_RULE, 'Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 7 characters long')
    .matches(
      PASSWORD_RULE,
      `Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.`
    ),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(EMAIL_RULE, 'Invalid email address'),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 7 characters long')
    .matches(
      PASSWORD_RULE,
      `Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.`
    ),
  newPassword: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 7 characters long')
    .matches(
      PASSWORD_RULE,
      `Please create a stronger password. The password must be at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.`
    ),
});

export const deleteUserSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 7 characters long')
    .matches(
      PASSWORD_RULE,
      `Your password is at least 7 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters is in English.`
    ),
});
