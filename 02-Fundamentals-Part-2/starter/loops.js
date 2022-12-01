// initial value | condition | increment

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting! rep number ${rep} 🏋️‍♂️`);
// }

const matheusArray = [
  "Matheus",
  "Ribeiro",
  2022 - 1992,
  "programmer",
  ["Luiggi", "Tata", "Xande"],
  true,
];

const types = [];

for (let i = 0; i < matheusArray.length; i++) {
  console.log(matheusArray[i], typeof matheusArray);

  //types[i] = typeof matheusArray[i];
  types.push(typeof matheusArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// CONTINUE STATEMENT
for (let i = 0; i < matheusArray.length; i++) {
  console.log(matheusArray[i], typeof matheusArray[i]);
}
