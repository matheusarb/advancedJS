// const BMI = (mass / height ** 2) = mass / (height * height);

//Mark
// let markBMI1 = 0;
// let markWeight1 = 78;
// let markHeight1 = 1.69;

// let markHeightInMetersSquare = markWeight1 / (markHeight1 * markHeight1);

// markBMI1 += markWeight1 / markHeight1 ** 2;
// markBMI1 = markHeightInMetersSquare;
// console.log(markBMI1);

// let markWeight2 = 95;
// let markHeight2 = 1.88;

// //John

// let johnWeight1 = 92;
// let johnHeight1 = 1.88;

// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// SOLUÇÃO COM OBJETOS

const users = [
  {
    name: "Mark",
    height1: 1.69,
    height2: 1.88,
    weight1: 78,
    weight2: 95,
  },
  {
    name: "John",
    height1: 1.95,
    height2: 1.76,
    weight1: 92,
    weight2: 85,
  },
];

//MARK DATA
let markHeightInMetersSquareData1 =
  users[0].weight1 / (users[0].height1 * users[0].height1);
let markHeightInMetersSquareData2 =
  users[0].weight2 / (users[0].height2 * users[0].height2);

let markBMI1 = 0;
markBMI1 += users[0].weight1 / users[0].height1 ** 2;
markBMI1 = markHeightInMetersSquareData1;
console.log(markBMI1);
function FUNCTION_markBMI1(bmi1) {
  bmi1 += users[0].weight1 / users[0].height1 ** 2;
  bmi1 = markHeightInMetersSquareData1;
  return bmi1;
}
console.log(FUNCTION_markBMI1());

let markBMI2 = 0;
markBMI2 += users[0].weight2 / users[0].height2 ** 2;
markBMI2 = markHeightInMetersSquareData2;
console.log(markBMI2);
function FUNCTION_markBMI2(bmi12) {
  bmi12 += users[0].weight2 / users[0].height2 ** 2;
  bmi12 = markHeightInMetersSquareData2;
  return bmi12;
}
console.log(FUNCTION_markBMI2());

// JOHN DATA
let johnHeightInMetersSquareData1 =
  users[1].weight1 / (users[1].height1 * users[1].height1);
let johnHeightInMetersSquareData2 =
  users[1].weight2 / (users[1].height2 * users[1].height2);

let johnBMI1 = 0;
johnBMI1 += users[1].weight1 / users[1].height1 ** 2;
johnBMI1 = johnHeightInMetersSquareData1;
console.log(johnBMI1);
function FUNCTION_johnBMI1(bmi1) {
  bmi1 += users[1].weight1 / users[1].height1 ** 2;
  bmi1 = johnHeightInMetersSquareData1;
  return bmi1;
}
console.log(FUNCTION_johnBMI1());

let johnBMI2 = 0;
johnBMI2 += users[1].weight2 / users[1].height2 ** 2;
johnBMI2 = johnHeightInMetersSquareData2;
console.log(johnBMI2);
function FUNCTION_johnBMI2(bmi1) {
  bmi1 += users[1].weight2 / users[1].height2 ** 2;
  bmi1 = johnHeightInMetersSquareData2;
  return bmi1;
}
console.log(FUNCTION_johnBMI2());

//FINAL PART - COMPARING BOTH BMI'S
let markTotalBMI = markBMI1 + markBMI2;
let johnTotalBMI = johnBMI1 + johnBMI2;

console.log(markTotalBMI);
console.log(johnTotalBMI);

let markHigherBMI = markTotalBMI > johnTotalBMI;
console.log(markHigherBMI);

if (!markHigherBMI === true) {
  console.log(
    `Mark has a higher (${Math.round(
      markTotalBMI
    )} BMI) than John's (${Math.round(johnTotalBMI)} BMI)`
  );
} else {
  console.log(
    `John's (${Math.round(
      johnTotalBMI
    )} BMI) is higher than Mark's (${Math.round(markTotalBMI)} BMI)`
  );
}
