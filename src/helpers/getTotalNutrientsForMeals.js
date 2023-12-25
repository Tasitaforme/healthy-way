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

  const totalNutrientsForMeals = Object.keys(diaryData).reduce(
    (acc, mealType) => {
      if (Array.isArray(diaryData[mealType])) {
        acc.push({
          mealType,
          ...getTotalNutrients(diaryData[mealType]),
        });
      }
      return acc;
    },
    []
  );

  return totalNutrientsForMeals;
};
