import * as Yup from 'yup';
import { NAME_RULE } from './formik';

export const profileSettingSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .trim()
    .matches(
      NAME_RULE,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer number')
    .min(14, 'Age must be greater than or equal to 14'),
  // gender: 'male',
  height: Yup.number()
    .required('Height is required')
    .positive('Height must be a positive number')
    .integer('Height must be an integer number')
    .min(30, 'Height must be greater than or equal to 30sm')
    .max(250, 'Height must be lower than or equal to 250sm'),
  // weight: '90',
  // activity: '1.2',
});
