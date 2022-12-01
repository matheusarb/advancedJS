const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  let tip = 0;
  tip = bill > 50 && bill < 300 ? tip * 0.15 : tip * 0.2;

  // loop through bills array and generate tips for each bill inside
  for (let b = 0; b.length <= BILLS; b++) {
    tips = tips.push(calcTip(BILLS[b]));
    for (let t = 0; t.length <= tips; t++) {
      totals = totals.push([BILLS[b] + tips[t]]);
    }
  }

  return totals;
}

console.log(calcTip(BILLS));
