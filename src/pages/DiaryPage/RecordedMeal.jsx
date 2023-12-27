import {
  EditBtn,
  EditIcon,
  EditLabel,
  MealsName,
  RecordedNutritions,
  RecordedNutritionsWrapper,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';

export default function RecordedMeal({ data, type, setModalData }) {
  return (
    <>
      <MealsName>{data.name}</MealsName>
      <EditBtn onClick={() => setModalData({ type, ...data })}>
        <EditIcon>
          <use href={`${sprite}#edit`} />
        </EditIcon>
        <EditLabel>Edit</EditLabel>
      </EditBtn>
      <RecordedNutritionsWrapper>
        <RecordedNutritions>
          Carb. <span>{data.carbohydrate}</span>
        </RecordedNutritions>
        <RecordedNutritions>
          Prot. <span>{data.protein}</span>
        </RecordedNutritions>
        <RecordedNutritions>
          Fat. <span>{data.fat}</span>
        </RecordedNutritions>
      </RecordedNutritionsWrapper>
    </>
  );
}
