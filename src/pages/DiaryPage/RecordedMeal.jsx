import {
  EditBtn,
  EditIcon,
  EditLabel,
  MealsName,
  MealsNameWrapper,
  RecordedMealWrapper,
  RecordedNutritions,
  RecordedNutritionsWrapper,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';

export default function RecordedMeal({ data, type, setModalData }) {
  return (
    <>
      <RecordedMealWrapper>
        <MealsNameWrapper>
          <MealsName>{data.name}</MealsName>
          <EditBtn onClick={() => setModalData({ type, ...data })}>
            <EditIcon>
              <use href={`${sprite}#edit`} />
            </EditIcon>
            <EditLabel>Edit</EditLabel>
          </EditBtn>
        </MealsNameWrapper>
        <RecordedNutritionsWrapper>
          <RecordedNutritions>Carb. {data.carbohydrate}</RecordedNutritions>
          <RecordedNutritions>Prot. {data.protein}</RecordedNutritions>
          <RecordedNutritions>Fat. {data.fat}</RecordedNutritions>
        </RecordedNutritionsWrapper>
      </RecordedMealWrapper>
    </>
  );
}
