import * as Yup from 'yup';

const NAME_RULE =
  /^([A-Za-zА-Яа-яґҐЁёІіЇїЄє]+((['’ʼ \s-][A-Za-zА-Яа-яґҐЁёІіЇїЄє ])?[a-zA-Zа-яА-Я]*))*$/;

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
    .typeError('Age must be a number')
    .positive('Age must be a positive number')
    .integer('Age must be an integer number')
    .min(14, 'Age must be greater than or equal to 14')
    .max(120, 'Age must be lower than or equal to 120'),
  height: Yup.number()
    .required('Height is required')
    .typeError('Age must be a number')
    .positive('Height must be a positive number')
    .integer('Height must be an integer number')
    .min(65, 'Height must be greater than or equal to 65sm')
    .max(250, 'Height must be lower than or equal to 250sm'),
  weight: Yup.number()
    .required('Weight is required')
    .typeError('Age must be a number')
    .positive('Weight must be a positive number')
    .integer('Weight must be an integer number')
    .min(40, 'Weight must be greater than or equal to 40kg')
    .max(250, 'Weight must be lower than or equal to 250kg'),
});
