import * as Yup from 'yup';

const EMAIL_RULE =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const NAME_RULE =
  /^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/;
const PHONE_RULE =
  /^(\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9})*$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(EMAIL_RULE, 'Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 5 characters long')
    .matches(
      PASSWORD_RULE,
      `Please create a stronger password. The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number`
    ),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      NAME_RULE,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(EMAIL_RULE, 'Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'The password must be at least 5 characters long')
    .matches(
      PASSWORD_RULE,
      'Please create a stronger password. The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number'
    ),
  confirmPassword: Yup.string()
    .required('Confirmation password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      NAME_RULE,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(5)
    .matches(
      PHONE_RULE,
      'A phone number must be digits and contain more than 5 characters. Can contain spaces, dashes, parentheses and can start with +.'
    )
    .required('A phone number is required'),
});
