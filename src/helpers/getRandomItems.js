export const getRandomItems = (array, n) => {
  if (array) {
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }
};
