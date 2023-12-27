import * as Yup from 'yup';

export const weightSchema = () =>
  Yup.object().shape({
    weight: Yup.number()
      .nullable('Field can not be empty')
      .positive('Weight must be a positive number')
      .integer('Weight must be an integer number')
      .min(35, 'Weight must be greater than or equal to 35kg')
      .max(250, 'Weight must be lower than or equal to 250kg')
      .typeError('Weight must be a number'),
  });
