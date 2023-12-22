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
    .max(120, 'Age can not be more than 120')
    .typeError('Age must be a number'),
});

export const parametersSchema = Yup.object().shape({
  height: Yup.number()
    .required('Required')
    .min(120, 'Height can not be less than 120')
    .max(250, 'Height can not be more than 250')
    .typeError('Height must be a number'),
  weight: Yup.number()
    .required('Required')
    .min(30, 'Weight can not be less than 30')
    .max(250, 'Weight can not be more than 250')
    .typeError('Weight must be a number'),
});

export const activitySchema = Yup.object().shape({
  activity: Yup.string().required('Required'),
});
