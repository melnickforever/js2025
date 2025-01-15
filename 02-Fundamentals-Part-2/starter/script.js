'use strict';

// Function Declaration
function logger() {
  console.log('My name is Jonas');
}

logger(); // My name is Jonas
logger(); // My name is Jonas
logger(); // My name is Jonas

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);