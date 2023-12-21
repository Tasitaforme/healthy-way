import * as Yup from 'yup';

export const waterSchema = Yup.object().shape({
  water: Yup.number()
    .min(100, 'A quantity of water must be at least 100 ml')
    .max(5000, 'A quantity of water must be at least 5000 ml')
    .required('A quantity of water is required')
    .typeError('A quantity must be a number'),
});
