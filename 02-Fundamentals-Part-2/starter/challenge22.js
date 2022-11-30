const bills = [125, 555, 44];
const calcTip = (bill) => {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  bills.push(tip);

  return tip;
};

//console.log(calcTip(100));

const tips = [];
tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

const totalValues = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);

console.log(totalValues);

//console.log(calcTip(125));
//console.log(`The bill is ${bill} and the tip is ${tip}.`);
