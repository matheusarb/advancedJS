// 1. FOR LOOP - initial value | condition | increment

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting! rep number ${rep} 🏋️‍♂️`);
// }

// const matheusArray = [
//   "Matheus",
//   "Ribeiro",
//   2022 - 1992,
//   "programmer",
//   ["Luiggi", "Tata", "Xande"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < matheusArray.length; i++) {
//   console.log(matheusArray[i], typeof matheusArray);

//   //types[i] = typeof matheusArray[i];
//   types.push(typeof matheusArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// 2. CONTINUE STATEMENT
// console.log("---STRINGS ONLY---");
// for (let i = 0; i < matheusArray.length; i++) {
//   // if the typeof value is different of a string, go to the other index/position to check it.
//   // only print strings
//   if (typeof matheusArray[i] !== "string") continue;
//   console.log(matheusArray[i], typeof matheusArray[i]);
// }

// 3. BREAK STATEMENT
// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < matheusArray.length; i++) {
//   // if the typeof value is different of a string, go to the other index/position to check it.
//   // only print strings
//   if (typeof matheusArray[i] === "number") break;
//   console.log(matheusArray[i], typeof matheusArray[i]);
// }

// const matheusArray = [
//   "Matheus",
//   "Ribeiro",
//   2022 - 1992,
//   "programmer",
//   ["Luiggi", "Tata", "Xande"],
// ];

// for (let i = matheusArray.length - 1; i >= 0; i--) {
//   console.log(i, matheusArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(
//       `Exercise ${exercise}:-----------Lifting weights repetition ${rep}`
//     );
//   }
// }

// WHILE LOOPS

// for (let rep = 1; rep < 11; rep++) {
//   console.log(`lifting weight! Rep ${rep}`);
// }

//console.log("-------BREAK----------");

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: lifting weight! Rep ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 16) {
  console.log(`You got ${dice}. Keep rolling the dice!`);
  dice = Math.trunc(Math.random() * 20) + 1;
  if (dice === 16) {
    console.log(`You got ${dice}!`);
  }
}
