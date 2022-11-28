const logger = () => {
  console.log("hello world");
};

logger();
logger();
logger();

//functions are like machines

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 0));
//parameters are like variables that are specific only to the function
//they
