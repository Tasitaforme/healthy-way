import {
  EditIcon,
  EditLabel,
  MealsName,
  RecordedMealWrapper,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';
import { useMemo } from 'react';

export default function RecordedMeal(...data) {

    return [
      { type: 'carbohydrate', data: carbohydrate },
      { type: 'protein', data: protein },
      { type: 'fat', data: fat },
    ].map(({ type, data }) => ({
      type,
      data: data.concat(Array(3).fill({})).slice(0, 1),
      stats: {
        carbohydrate: data.carbohydrate
        protein: data.protein,
        fat: data.fat,
      },
    }));
 
  return (
    <RecordedMealWrapper>
      <MealsName>{recorded.name}</MealsName>
      <EditIcon>
        <use href={`${sprite}#edit`} />
      </EditIcon>
      <EditLabel>Edit</EditLabel>
      {recorded.map(({ type, data, stats }) => {
        return (
          <MealListItem key={type}>
            <MealAndNutritionWrapper>
              <MealTitleWrapper>
                <MealImg src={MEALS_IMAGES[type]} alt="breakfast" />
                <MealTitle>{type}</MealTitle>
              </MealTitleWrapper>
              <NutririonList>
                <li>
                  Carbonohidrates: <span>{stats.carbohydrate}</span>
                </li>
                <li>
                  Protein: <span>{stats.protein}</span>
                </li>
                <li>
                  Fat: <span>{stats.fat}</span>
                </li>
              </NutririonList>
            </MealAndNutritionWrapper>
            <RecordMealWrapper>
              <DiaryItem data={data} type={type} stats={stats} />
            </RecordMealWrapper>
          </MealListItem>
        );
      })}
    </RecordedMealWrapper>
  );
}
