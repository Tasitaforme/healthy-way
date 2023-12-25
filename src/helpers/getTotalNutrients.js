export const getTotalNutrients = (data = {}) => {
  const totalNutrients = {
    calories: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
  };

  Object.values(data).forEach((mealTypeArray) => {
    if (Array.isArray(mealTypeArray)) {
      mealTypeArray.forEach(({ calories, carbohydrate, protein, fat }) => {
        totalNutrients.calories += calories;
        totalNutrients.carbohydrate += carbohydrate;
        totalNutrients.protein += protein;
        totalNutrients.fat += fat;
      });
    }
  });

  return totalNutrients;
};
