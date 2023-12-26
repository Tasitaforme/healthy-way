import * as Yup from 'yup';

export const diarySchema = Yup.object().shape({
  name: Yup.string().required(),
  carbohydrate: Yup.number()
    .required()
    .positive('Carbonohidrates must be a positive number')
    .min(1, 'Carbonohidrates must be greater than or equal to 1')
    .max(1000, 'Carbonohidrates must be lower than or equal to 1000'),
  protein: Yup.number()
    .required()
    .positive('Protein must be a positive number')
    .min(1, 'Protein must be greater than or equal to 1')
    .max(1000, 'Protein must be lower than or equal to 1000'),
  fat: Yup.number()
    .required()
    .positive('Fat must be a positive number')
    .min(1, 'Fat must be greater than or equal to 1')
    .max(1000, 'Fat must be lower than or equal to 1000'),
  calories: Yup.number()
    .required()
    .positive('Fat must be a positive number')
    .min(1, 'Fat must be greater than or equal to 1')
    .max(1000, 'Fat must be lower than or equal to 1000'),

});
