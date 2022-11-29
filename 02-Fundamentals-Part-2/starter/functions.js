// 1. FUNCTIONS

// const logger = () => {
//   console.log("hello world");
// };

// const store = logger();
// // logger();
// // logger();
// console.log(store);

// functions are like machines
// parameters are like variables that are specific only to the function
// they are also placeholders which holds empty spaces that needs to be filled
// when calling the function

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// // remember to store the returned value in a variable!!
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// 2. FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS

// function declaration
// const age1 = calcAge1(1992);

// function calcAge1(birthYear) {
//   return `${2022 - birthYear} years old.`;
// }

// // console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return `${2022 - birthYear} years old.`;
// };
// const age2 = calcAge2(1992);
// console.log(age2);

// 3. ARROW FUNCTIONS ** they do not get the 'this' keyword,
// therefore they must not be used in every scenario

// const calcAge3 = (birthYear) => `${2022 - birthYear} years old.`;

// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1992, "Matheus"));
// console.log(yearsUntilRetirement(1991, "Luiggi"));

// 4. FUNCTIONS CALLING OTHER FUNCTIONS

// console.log(cutFruitPieces(4));

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
