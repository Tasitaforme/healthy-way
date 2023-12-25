import { diarySchema } from '../../../schemas/formikDiary';
import { ButtonTextThird } from '../../StyledComponents/Components.styled';
import {
  FormikStyledErrorMessage,
  FormikStyledField,
} from '../../StyledComponents/Formik.styled';
import { useDispatch } from 'react-redux';
import {
  BtnCancel,
  BtnConfirm,
  BtnWrapper,
  CaloriesField,
  CarbonohField,
  FatField,
  FieldsWrapper,
  FormikWrapper,
  HalfPart,
  NameField,
  ProteinField,
} from './DiaryForm.styled';
import { Formik } from 'formik';
import { createFoodDiary } from '../../../redux/diary/operations';
import toast from 'react-hot-toast';

export default function DiaryForm({ type, setFormActive, setModalActive }) {
  const initialValues = {
    name: '',
    carbohydrate: '',
    protein: '',
    fat: '',
    calories: '',
  };

  const dispatch = useDispatch();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(
        createFoodDiary({ diary: capitalizeFirstLetter(type), ...values })
      ).unwrap();

      toast.success('You have successfully added your meal!');
      setFormActive(false);
      setModalActive(false);
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong! \n ${error.message}`);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={diarySchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikWrapper>
          <FieldsWrapper>
            <NameField>
              <FormikStyledField
                type="text"
                name="name"
                placeholder="The name of the product or dish"
                autoComplete="off"
                className={
                  touched.name
                    ? errors.name
                      ? 'input-error'
                      : 'input-success'
                    : 'input-normal'
                }
              />
              <FormikStyledErrorMessage component="p" name="name" />
            </NameField>
            <CarbonohField>
              <FormikStyledField
                type="number"
                name="carbohydrate"
                placeholder="Carbonoh."
                autoComplete="off"
                className={
                  touched.carbohydrate
                    ? errors.carbohydrate
                      ? 'input-error'
                      : 'input-success'
                    : 'input-normal'
                }
              />
              <FormikStyledErrorMessage component="p" name="carbohydrate" />
            </CarbonohField>
            <ProteinField>
              <FormikStyledField
                type="number"
                name="protein"
                placeholder="Protein"
                autoComplete="off"
                className={
                  touched.protein
                    ? errors.protein
                      ? 'input-error'
                      : 'input-success'
                    : 'input-normal'
                }
              />
              <FormikStyledErrorMessage component="p" name="protein" />
            </ProteinField>
            <HalfPart>
              <FatField>
                <FormikStyledField
                  type="number"
                  name="fat"
                  placeholder="Fat"
                  autoComplete="off"
                  className={
                    touched.fat
                      ? errors.fat
                        ? 'input-error'
                        : 'input-success'
                      : 'input-normal'
                  }
                />
                <FormikStyledErrorMessage component="p" name="fat" />
              </FatField>
              <CaloriesField>
                <FormikStyledField
                  type="number"
                  name="calories"
                  placeholder="Calories"
                  autoComplete="off"
                  className={
                    touched.calories
                      ? errors.calories
                        ? 'input-error'
                        : 'input-success'
                      : 'input-normal'
                  }
                />
                <FormikStyledErrorMessage component="p" name="calories" />
              </CaloriesField>
            </HalfPart>
          </FieldsWrapper>

          <BtnWrapper>
            <BtnConfirm type="submit" disabled={!isValid || isSubmitting}>
              Confirm
            </BtnConfirm>
            <BtnCancel
              type="button"
              onClick={() => {
                setFormActive(false);
                setModalActive(false);
              }}
            >
              <ButtonTextThird>Cancel</ButtonTextThird>
            </BtnCancel>
          </BtnWrapper>
        </FormikWrapper>
      )}
    </Formik>
  );
}
