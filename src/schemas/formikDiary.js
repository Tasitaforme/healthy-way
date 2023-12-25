import * as Yup from 'yup';

export const diarySchema = Yup.object().shape({
  name: Yup.string().required(),
  carbohydrate: Yup.number()
    .required()
    .positive('Carbonohidrates must be a positive number')
    .min(100, 'Carbonohidrates must be greater than or equal to 100')
    .max(2000, 'Carbonohidrates must be lower than or equal to 2000'),
  protein: Yup.number()
    .required()
    .positive('Protein must be a positive number')
    .min(100, 'Protein must be greater than or equal to 100')
    .max(2000, 'Protein must be lower than or equal to 2000'),
  fat: Yup.number()
    .required()
    .positive('Fat must be a positive number')
    .min(100, 'Fat must be greater than or equal to 100')
    .max(2000, 'Fat must be lower than or equal to 2000'),
  calories: Yup.number()
    .required()
    .positive('Fat must be a positive number')
    .min(100, 'Fat must be greater than or equal to 100')
    .max(2000, 'Fat must be lower than or equal to 2000'),
});
