export const elementSum = (arr, key) => {
  return Math.round((arr.reduce((sum, dish) => sum + dish[elem], 0) * 10) / 10);
};
