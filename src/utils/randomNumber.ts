export const randomNumber = () => {
  let generatedNumber = Math.floor(Math.random() * 1000) + 1;

  if (generatedNumber < 100) {
    generatedNumber = randomNumber();
  }

  return generatedNumber;
};
