import {
  EditIcon,
  EditLabel,
  MealsName,
  RecordedMealWrapper,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';

export default function RecordedMeal(...data) {
  const recorded = {
    name: data.name,
    carbohydrate: data.carbohydrate,
    protein: data.protein,
    fat: data.fat,
  };
  return (
    <RecordedMealWrapper>
      <MealsName>{recorded.name}</MealsName>
      <EditIcon>
        <use href={`${sprite}#edit`} />
      </EditIcon>
      <EditLabel>Edit</EditLabel>
    </RecordedMealWrapper>
  );
}
