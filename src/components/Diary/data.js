const diaryData1 = [
  {
    breakfast: {
      meal: 'breakfast',
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
  },
  {
    lunch: {
      meal: 'lunch',
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
  },
  {
    dinner: {
      name: 'dinner',
      meals: [
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
  },
  {
    snack: {
      name: 'snack',
      meals: [
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
  },

  {
    totalCalories: {
      name: 'calories',
      total: 20,
    },
  },
  {
    totalCarbonohidrates: {
      name: 'carbonohidrates',
      total: 20,
    },
  },
  {
    totalProtein: {
      name: 'protein',
      total: 20,
    },
  },
  {
    totalFat: {
      name: 'fat',
      total: 20,
    },
  },
];

const FULL_API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric&lat=50.30&lon=30.30`;

const diaryData2 = [
  {
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
        meal: 'lunch',
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
        meals: [
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
  },
  {
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
  },
];

const diaryData3 = [
  {
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
        meal: 'lunch',
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
        meals: [
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
  },
  {
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
  },
];

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
      meal: 'lunch',
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
      meals: [
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
//  owner: {
//   type: Schema.Types.ObjectId,
//   ref: "user",
//   required: true,
// },
// date: {
//   type: String,
// },

{
  /* <DiaryList>
  {meals.map((item, index) => (
    <DiaryItem key={index} data={item} />
  ))}
</DiaryList>; */
}

// return (
//   <ItemWrap>
//     <ItemWrapTitle>
//       {data.breakfast && (
//         <img
//           srcSet={`${breakfast} 1x, ${breakfast2x} 2x`}
//           src={breakfast}
//           alt="Breakfast"
//         />
//       )}
//       {data.lunch && (
//         <img srcSet={`${lunch} 1x, ${lunch2x} 2x`} src={lunch} alt="Lunch" />
//       )}
//       {data.dinner && (
//         <img
//           srcSet={`${dinner} 1x, ${dinner2x} 2x`}
//           src={dinner}
//           alt="Dinner"
//         />
//       )}
//       {data.snack && (
//         <img srcSet={`${snack} 1x, ${snack2x} 2x`} src={snack} alt="Snack" />
//       )}

//       <Title>{data.name}</Title>
//     </ItemWrapTitle>
//     <BodyTextWrap>
//       <BodyTextFirst>Carbonohidrates:</BodyTextFirst>
//       <BodyTextSecond>Carbonohidrates:</BodyTextSecond>
//     </BodyTextWrap>
//   </ItemWrap>
// );

// function getTotalNutrients(mealData) {
//   const totalNutrients = {
//     calories: 0,
//     carbonohidrates: 0,
//     protein: 0,
//     fat: 0,
//   };

//   mealData.forEach((food) => {
//     totalNutrients.calories += food.calories;
//     totalNutrients.carbonohidrates += food.carbonohidrates;
//     totalNutrients.protein += food.protein;
//     totalNutrients.fat += food.fat;
//   });

//   return totalNutrients;
// }
// const totalNutrientsForBreakfast = getTotalNutrients(
//   diaryData.meals.find((meal) => meal.name === 'breakfast').breakfast
// );
// const totalNutrientsForLunch = getTotalNutrients(
//   diaryData.meals.find((meal) => meal.name === 'lunch').lunch
// );
// const totalNutrientsForDinner = getTotalNutrients(
//   diaryData.meals.find((meal) => meal.name === 'dinner').dinner
// );
// const totalNutrientsForSnack = getTotalNutrients(
//   diaryData.meals.find((meal) => meal.name === 'snack').snack
// );

// console.log(totalNutrientsForBreakfast);

// TODO Робочий код
function getTotalNutrients(mealData) {
  const totalNutrients = {
    calories: 0,
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
  };

  mealData.forEach((food) => {
    totalNutrients.calories += food.calories;
    totalNutrients.carbonohidrates += food.carbonohidrates;
    totalNutrients.protein += food.protein;
    totalNutrients.fat += food.fat;
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
