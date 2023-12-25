import { Formik } from 'formik';
import ModalMain from '../../components/ModalMain/ModalMain';
import {
  AddMoreBtn,
  AddMoreIcon,
  AddMoreLabel,
  BtnWrapper,
  CaloriesForm,
  CancelModalBtn,
  CarbonohForm,
  ConfirmModalBtn,
  FatForm,
  FormikWrapper,
  FormikWrapperMobile,
  FormikWrapperTablet,
  MealImg,
  MealTitle,
  MealTitleWrapper,
  ModalTitle,
  ModalWrapper,
  NameForm,
  ProteinForm,
  TrashModalIcon,
} from './DiaryPage.styled';
import { MEALS_IMAGES } from './constants';
import sprite from '../../assets/sprite.svg';
import { FormikStyledField } from '../../components/StyledComponents/Formik.styled';
import { diarySchema } from '../../schemas/formikDiary';
import { useCallback } from 'react';
import { createFoodDiary } from '../../redux/diary/operations';
import { useDispatch } from 'react-redux';

export const DiaryModal = ({ modalData, setModalData }) => {
  const dispatch = useDispatch();
  const {
    type,
    name = '',
    carbohydrate = '',
    protein = '',
    fat = '',
    calories = '',
  } = modalData;
  const onSubmit = useCallback(
    async (formData) => {
      console.log(formData);
      try {
        const res = await dispatch(
          createFoodDiary({ ...formData, diary: type })
        );
        setModalData(false);
        console.log('Res', res);
      } catch (err) {
        console.log('ERR', err);
      }
    },
    [dispatch, setModalData, type]
  );

  return (
    <ModalMain modalActive={!!modalData} setModalActive={setModalData}>
      <ModalWrapper>
        <ModalTitle>Record your meal</ModalTitle>
        <MealTitleWrapper>
          <MealImg src={MEALS_IMAGES[type]} alt="breakfast" />
          <MealTitle>{type}</MealTitle>
        </MealTitleWrapper>
        <Formik
          initialValues={{
            name,
            carbohydrate,
            protein,
            fat,
            calories,
          }}
          validationSchema={diarySchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => {
            return (
              <FormikWrapper>
                <FormikWrapperTablet>
                  <NameForm>
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
                  </NameForm>
                  <CarbonohForm>
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
                  </CarbonohForm>
                  <ProteinForm>
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
                  </ProteinForm>
                  <FormikWrapperMobile>
                    <FatForm>
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
                    </FatForm>
                    <CaloriesForm>
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
                    </CaloriesForm>
                    <TrashModalIcon>
                      <use href={`${sprite}#trash`} />
                    </TrashModalIcon>
                  </FormikWrapperMobile>
                </FormikWrapperTablet>
                <AddMoreBtn>
                  <AddMoreIcon>
                    <use href={`${sprite}#add`} />
                  </AddMoreIcon>
                  <AddMoreLabel>Add more</AddMoreLabel>
                </AddMoreBtn>
                <BtnWrapper>
                  <ConfirmModalBtn
                    type="submit"
                    disabled={!isValid || isSubmitting || !dirty || !touched}
                  >
                    Confirm
                  </ConfirmModalBtn>
                  <CancelModalBtn
                    type="button"
                    onClick={() => setModalData(false)}
                  >
                    Cancel
                  </CancelModalBtn>
                </BtnWrapper>
              </FormikWrapper>
            );
          }}
        </Formik>
      </ModalWrapper>
    </ModalMain>
  );
};
