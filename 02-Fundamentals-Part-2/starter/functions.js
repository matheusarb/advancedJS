const logger = () => {
  console.log("hello world");
};

logger();
logger();
logger();

//functions are like machines
//parameters are like variables that are specific only to the function
//they are also placeholders which holds empty spaces that needs to be filled
// when calling the function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// remember to store the returned value in a variable!!
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
