import styled from 'styled-components';
import { FormikStyledForm } from '../../components/StyledComponents/Formik.styled';

export const DiarySection = styled.section`
  padding: 16px 10px 40px;

  @media (min-width: 768px) {
    padding: 24px 27px 40px;
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-bottom: 16px;
`;

export const GoBackBtn = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
`;

export const StyledGoBackIcon = styled.svg`
  width: 16px;
  height: 16px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const GoBackTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const MealList = styled.ul`
  @media (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const MealListItem = styled.li`
  @media (min-width: 1200px) {
    width: calc((100% - 1 * 20px) / 2);
    margin-bottom: 0;
  }
`;

export const MealImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const MealTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MealAndNutritionWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MealTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const NutririonList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 12px 0;
  @media (min-width: 768px) {
    margin-right: 74px;
  }
  @media (min-width: 1200px) {
    margin-right: 40px;
  }
`;

export const NutririonListItem = styled.li``;

export const RecordMealWrapper = styled.div``;

export const List = styled.ul`
  background-color: var(--black-secondary);
  border-radius: 12px;
  padding: 16px 12px;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    margin-bottom: 0%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const RecordBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const RecordMealIcon = styled.svg`
  margin-right: 6px;
`;

export const RecordBtnLabel = styled.span`
  color: var(--green-light);
  cursor: pointer;
`;

export const StyledBackArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const StyledAddMealIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 546px;
  background-color: var(--black-secondar);
  padding: 16px 12px;

  @media (min-width: 768px) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const FormikWrapper = styled(FormikStyledForm)``;

export const FormikWrapperTablet = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const FormikWrapperMobile = styled.div`
  display: flex;
  gap: 16px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameForm = styled(FormField)`
  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const CarbonohForm = styled(FormField)`
  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const ProteinForm = styled(FormField)`
  @media (min-width: 768px) {
    width: 86px;
  }
`;

export const FatForm = styled(FormField)`
  max-width: 110px;
  @media (min-width: 768px) {
    width: 61px;
  }
`;

export const CaloriesForm = styled(FormField)`
  max-width: 110px;
  @media (min-width: 768px) {
    width: 78px;
  }
`;

export const TrashModalIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--green-light);
  margin-top: 10px;
`;

export const AddMoreBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 40px;
`;

export const AddMoreIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--green-light);
`;

export const AddMoreLabel = styled.span`
  color: var(--green-light);
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-top: 70px;
  }
`;

export const ConfirmModalBtn = styled.button`
  background-color: var(--green-light);
  border-radius: 12px;
  width: 100%;
  padding: 8px 0;
  margin-top: 40px;
  color: var(--black-secondary);

  @media (min-width: 768px) {
    width: 212px;
  }
`;

export const CancelModalBtn = styled.button`
  color: var(--grey-light);
  padding: 8px 0;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 212px;
  }
`;

export const RecordedMealWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MealsName = styled.h4`
  font-size: 14px;
`;

export const EditIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--grey-light);
`;

export const EditLabel = styled.p`
  font-size: 14px;
  color: var(--grey-light);
  margin-left: 6px;
`;
