export const getTotalNutrientsForMeals = (diaryData) => {
  function getTotalNutrients(mealData) {
    const totalNutrients = {
      calories: 0,
      carbohydrate: 0,
      protein: 0,
      fat: 0,
    };

    mealData.forEach(({ calories, carbohydrate, protein, fat }) => {
      totalNutrients.calories += calories;
      totalNutrients.carbohydrate += carbohydrate;
      totalNutrients.protein += protein;
      totalNutrients.fat += fat;
    });

    return {
      calories: totalNutrients.calories,
      carbohydrate: totalNutrients.carbohydrate,
      protein: totalNutrients.protein,
      fat: totalNutrients.fat,
    };
  }

  const totalNutrientsForMeals = Object.keys(diaryData).map((mealType) => {
    return {
      mealType,
      ...getTotalNutrients(diaryData[mealType]),
    };
  });

  return totalNutrientsForMeals;
};
// export const getTotalNutrientsForMeals = (mealData) => {
//   const { meals } = diaryData;

//   function getTotalNutrients(mealData) {
//     const totalNutrients = {
//       calories: 0,
//       carbonohidrates: 0,
//       protein: 0,
//       fat: 0,
//     };

//     mealData.forEach(({ calories, carbonohidrates, protein, fat }) => {
//       totalNutrients.calories += calories;
//       totalNutrients.carbonohidrates += carbonohidrates;
//       totalNutrients.protein += protein;
//       totalNutrients.fat += fat;
//     });
//     return {
//       calories: totalNutrients.calories,
//       carbonohidrates: totalNutrients.carbonohidrates,
//       protein: totalNutrients.protein,
//       fat: totalNutrients.fat,
//     };
//   }
//   const totalNutrientsForMeals = meals.map((meal) => ({
//     mealType: meal.name,
//     ...getTotalNutrients(meal[meal.name]),
//   }));

//   return totalNutrientsForMeals;
// };
