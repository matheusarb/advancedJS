// calc tip
// push tip to a tips array
// push tip and bills together in a TOTALS array

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// BONUS

function calcAverage(arr) {
  let sumAll = 0;
  //let average;
  for (let i = 0; i < arr.length; i++) {
    sumAll += arr[i];
  }
  //average = sumAll / arr.length;
  //return average;
  //OU
  return sumAll / arr.length;
}

// GUARDE TODO VALOR GERADO DENTRO DE UMA VARIÁVEL!!!!!!!!!!! (OU QUASE TODO)

console.log(calcAverage([20, 22, 30, 50, 125, 218, 92]));

// function calcAv(arr) {
//     let sum = 0;
//     for (let sum; sum <= arr.length; sum++) {
//         sum += arr[i];

//     }
// }
//console.log(calcTip(22));

// loop through bills array and generate tips for each bill inside
// for (let b = 0; b <= BILLS.length; b++) {
//     tips = tips.push(calcTip(BILLS[b]));
//     console.log(tips);
//     for (let t = 0; t <= tips.length; t++) {
//       totals = totals.push([BILLS[b] + tips[t]]);
//     }
//   }

//  // return totals;

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//   const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//   const tips = [];
//   const totals = [];

//   for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
//   }

//   console.log(bills);
//   console.log(tips);
//   console.log(totals);
