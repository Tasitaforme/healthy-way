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

export const DiaryModal = ({ modalData, setModalData }) => {
  const {
    type,
    //carbonohidrates = 0, protein = 0, fat = 0
  } = modalData;
  return (
    <ModalMain modalActive={!!modalData} setModalActive={setModalData}>
      <ModalWrapper>
        <ModalTitle>Record your meal</ModalTitle>
        <MealTitleWrapper>
          <MealImg src={MEALS_IMAGES[type]} alt="breakfast" />
          <MealTitle>{type}</MealTitle>
        </MealTitleWrapper>
        <Formik>
          <FormikWrapper>
            <FormikWrapperTablet>
              <NameForm>
                <FormikStyledField
                  type="name"
                  name="name"
                  placeholder="The name of the product or dish"
                />
              </NameForm>
              <CarbonohForm>
                <FormikStyledField
                  type="number"
                  name="number"
                  placeholder="Carbonoh."
                />
              </CarbonohForm>
              <ProteinForm>
                <FormikStyledField
                  type="number"
                  name="number"
                  placeholder="Protein"
                />
              </ProteinForm>
              <FormikWrapperMobile>
                <FatForm>
                  <FormikStyledField
                    type="number"
                    name="number"
                    placeholder="Fat"
                  />
                </FatForm>
                <CaloriesForm>
                  <FormikStyledField
                    type="number"
                    name="number"
                    placeholder="Calories"
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
              <ConfirmModalBtn>Confirm</ConfirmModalBtn>
              <CancelModalBtn>Cancel</CancelModalBtn>
            </BtnWrapper>
          </FormikWrapper>
        </Formik>
      </ModalWrapper>
    </ModalMain>
  );
};
