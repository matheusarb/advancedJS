// 1. Calculate average score for both teams

const avgTotalScoreDolphins = 0;
const avgTotalScoreKoalas = 0;

// 2. Declare winner with highest average score

// DATA 1
let avgDolphinsD1 = 97.6;
let avgKoalasD1 = 96.33;

// DATA BONUS 1
let avgDolphinsD2 = 103.3;
let avgKoalasD2 = 109;

// DATA BONUS 2
let avgDolphinsD3 = 103.3;
let avgKoalasD3 = 102;

// TASK 2. WINNER WITH DATA 1

// if (avgDolphinsD1 > avgKoalasD1) {
//   console.log("Dolphins are the winners!");
// } else if (avgDolphinsD1 === avgKoalasD1) {
//   console.log("Unbelievable! It's a draw!!");
// } else {
//   console.log("Koalas are the winners!");
// }

//TASK 2. WINNER WITH DATA 2
// if (avgDolphinsD2 > avgKoalasD2) {
//   console.log("Dolphins are the winners!");
// } else if (avgDolphinsD2 === avgKoalasD2) {
//   console.log("Unbelievable! It's a draw!!");
// } else {
//   console.log("Koalas are the winners!");
// }

//TASK 2. WINNER WITH DATA 3
// if (avgDolphinsD3 > avgKoalasD3) {
//   console.log("Dolphins are the winners!");
// } else if (avgDolphinsD3 === avgKoalasD3) {
//   console.log("Unbelievable! It's a draw!!");
// } else {
//   console.log("Koalas are the winners!");
// }

//TASK 3 (BONUS 1)
const minimunPoints = 100;
avgDolphinsD3 = 103;
avgKoalasD3 = 103;
const samePoints = avgDolphinsD3 === avgKoalasD3;
const samePointsGreaterThan100 = samePoints >= 100;

if (avgDolphinsD3 > minimunPoints && avgDolphinsD3 > avgKoalasD3) {
  console.log("Dolphins are the winners!");
} else if (avgKoalasD3 > minimunPoints && avgKoalasD3 > avgDolphinsD3) {
  console.log("Koalas are the winners");
} else if (samePoints && samePointsGreaterThan100) {
  console.log("it's a draw!!!!!");
} else {
  console.log("no winners in the contest!");
}
