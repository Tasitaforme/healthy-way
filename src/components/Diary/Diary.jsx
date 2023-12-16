import React from 'react';
import {
  ButtonTextSecond,
  HeadlineSecond,
  StyledLink,
} from '../StyledComponents/Components.styled';
import { DiaryList, TitleWrap } from './Diary.styled';
// import { nanoid } from '@reduxjs/toolkit';

import breakfast from 'assets/images/diary/breakfast.png';
import breakfast2x from 'assets/images/diary/breakfast@2x.png';
import lunch from 'assets/images/diary/lunch.png';
import lunch2x from 'assets/images/diary/lunch@2x.png';
import dinner from 'assets/images/diary/dinner.png';
import dinner2x from 'assets/images/diary/dinner@2x.png';
import snack from 'assets/images/diary/snack.png';
import snack2x from 'assets/images/diary/snack@2x.png';
import DiaryItem from './DiaryItem/DiaryItem';

export default function Diary() {
  // TODO забрати дані const diaryData = useSelector(getFoodIntake);
  // TODO
  // const {
  //   breakfast: breakfastInfo,
  //   lunch: lunchInfo,
  //   dinner: dinnerInfo,
  //   snack: snackInfo,
  // } = diaryData;

  const diaryData = {
    meals: [
      {
        name: 'breakfast',
        breakfast: [
          {
            name: 'Салат',
            carbonohidrates: 10,
            protein: 10,
            fat: 10,
            calories: 10,
          },
          {
            name: 'Салат',
            carbonohidrates: 5,
            protein: 5,
            fat: 5,
            calories: 5,
          },
        ],
      },

      {
        name: 'lunch',
        lunch: [
          {
            name: 'Салат',
            carbonohidrates: 10,
            protein: 10,
            fat: 10,
            calories: 10,
          },
          {
            name: 'Салат',
            carbonohidrates: 5,
            protein: 5,
            fat: 5,
            calories: 5,
          },
        ],
      },

      {
        name: 'dinner',
        dinner: [
          {
            name: 'Салат',
            carbonohidrates: 10,
            protein: 10,
            fat: 10,
            calories: 10,
          },
          {
            name: 'Салат',
            carbonohidrates: 5,
            protein: 5,
            fat: 5,
            calories: 5,
          },
        ],
      },

      {
        name: 'snack',
        snack: [
          {
            name: 'Салат',
            carbonohidrates: 10,
            protein: 10,
            fat: 10,
            calories: 10,
          },
          {
            name: 'Салат',
            carbonohidrates: 5,
            protein: 5,
            fat: 5,
            calories: 5,
          },
        ],
      },
    ],

    total: [
      {
        name: 'calories',
        calories: 20,
      },

      {
        name: 'carbonohidrates',
        carbonohidrates: 20,
      },
      {
        name: 'protein',
        protein: 20,
      },

      {
        name: 'fat',
        fat: 20,
      },
    ],
  };

  const { meals } = diaryData;

  function getTotalNutrients(mealData) {
    const totalNutrients = {
      calories: 0,
      carbonohidrates: 0,
      protein: 0,
      fat: 0,
    };

    mealData.forEach(({ calories, carbonohidrates, protein, fat }) => {
      totalNutrients.calories += calories;
      totalNutrients.carbonohidrates += carbonohidrates;
      totalNutrients.protein += protein;
      totalNutrients.fat += fat;
    });
    return {
      calories: totalNutrients.calories,
      carbonohidrates: totalNutrients.carbonohidrates,
      protein: totalNutrients.protein,
      fat: totalNutrients.fat,
    };
  }

  const totalNutrientsForMeals = meals.map((meal) => ({
    mealType: meal.name,
    ...getTotalNutrients(meal[meal.name]),
  }));

  console.log('Total Nutrients for Meals:', totalNutrientsForMeals);

  return (
    <>
      <TitleWrap>
        <HeadlineSecond>Diary</HeadlineSecond>
        <StyledLink to="/diary">
          <ButtonTextSecond>See more</ButtonTextSecond>
        </StyledLink>
      </TitleWrap>

      <DiaryList>
        {totalNutrientsForMeals.map((item, index) => (
          <DiaryItem key={index} data={item} />
        ))}
      </DiaryList>
    </>
  );
}
