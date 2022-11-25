// let bill = 0;
// let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// bill = 275;
// tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, the total is ${bill + tip}`
// );
// bill = 40;
// tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, the total is ${bill + tip}`
// );
// bill = 430;
// tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, the total is ${bill + tip}`
// );

const calcAll = (bill) => {
  let totalValue = 0;
  let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  totalValue += bill + tip;
  console.log(
    `The bill is ${bill}, the tip is ${tip}, the total is ${totalValue}`
  );
  return totalValue;
};

console.log(calcAll(400));
