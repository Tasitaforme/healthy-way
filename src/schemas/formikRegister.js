import * as Yup from 'yup';

const EMAIL_RULE =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const AGE_RULE = /^(?:[1-9]|[1-9][0-9]|1[0-2][0-5])$/;
const HEIGHT_RULE = /^(?:[1-9]|[1-9][0-9]|1[0-9][0-9]|200|25[0-9])$/;
const WEIGHT_RULE = /^(?:[1-9]|[1-9][0-9]|1[0-9][0-9]|200|25[0-9])$/;

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
    .min(7, 'The password must be at least 7 characters long')
    .matches(
      PASSWORD_RULE,
      `The password must be at least 5 characters, contain  1 uppercase letter, 1 lowercase letter, 1 number. The letters must be English.`
    ),
});

export const goalSchema = Yup.object().shape({
  goal: Yup.string().required('Required'),
});

export const genderAndAgeSchema = Yup.object().shape({
  gender: Yup.string().required('Required'),
  age: Yup.string()
    .required('Required')
    .matches(AGE_RULE, 'Age must be a number and can not be more than 125'),
});

export const parametersSchema = Yup.object().shape({
  height: Yup.string()
    .required('Required')
    .matches(HEIGHT_RULE, "Number, can't be more than 250"),
  weight: Yup.string()
    .required('Required')
    .matches(WEIGHT_RULE, "Number, can't be more than 250"),
});

export const activitySchema = Yup.object().shape({
  activity: Yup.string().required('Required'),
});
