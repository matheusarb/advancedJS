const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
for (let b = 0; b <= BILLS.length; b++) {
  //console.log(BILLS[b]);
}

const tips = [];
const totals = [];

function calcTip(bill) {
  let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

  for (let i = 0; i <= BILLS.length; i++) {
    tips.push(calcTip(BILLS[i]));
  }
  for (let j = 0; j <= tips.length; j++) {
    totals = BILLS[i] + tips[j];
  }

  return totals;
}

// function calcAv(arr) {
//     let sum = 0;
//     for (let sum; sum <= arr.length; sum++) {
//         sum += arr[i];

//     }
// }

console.log(calcTip(100));
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
