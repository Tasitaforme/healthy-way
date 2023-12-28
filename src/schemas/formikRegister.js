import * as Yup from 'yup';

const EMAIL_RULE =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!'),
  email: Yup.string()
    .required('Required')
    .email('Invalid email')
    .matches(EMAIL_RULE, 'Invalid email address'),
  password: Yup.string()
    .required('Required')
    .min(7, 'Min length: 7 characters')
    .matches(
      PASSWORD_RULE,
      `Use uppercase, lowercase letters, number. Letters only in English.`
    ),
});

export const goalSchema = Yup.object().shape({
  goal: Yup.string().required('Required, choose one of three'),
});

export const genderAndAgeSchema = Yup.object().shape({
  gender: Yup.string().required('Required, choose one of two'),
  age: Yup.number()
    .required('Required')
    .min(1, 'Age can not be less than 1')
    .max(90, 'Age can not be more than 90')
    .typeError('Age must be a number'),
});

export const parametersSchema = Yup.object().shape({
  height: Yup.number()
    .required('Required')
    .min(140, 'Height can not be less than 140')
    .max(240, 'Height can not be more than 240')
    .typeError('Height must be a number'),
  weight: Yup.number()
    .required('Required')
    .min(40, 'Weight can not be less than 40')
    .max(220, 'Weight can not be more than 220')
    .typeError('Weight must be a number'),
});
