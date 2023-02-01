'use strict';

// .toLowerCase() and .toUpperCase()
const airline = 'TAP Air Portugal';

//fix capitalization in name (two forms)
const passenger = 'matHEuS';
const passengerLower = passenger.toLowerCase();
const correctName = passengerLower.replace('m', 'M');
console.log(correctName);
const correctName2 = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctName2);

//comparing emails | using .trim() method
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//.replace() and .replaceAll()
const priceBR = 'R$288,97';
const priceUS = priceBR.replace('R$', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//using REGEx to replace All
console.log(announcement.replace(/door/g, 'gate'));

// 3 Methods which returns Booleans:
// .includes()
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));

// .startsWith() self-explanatory
console.log(plane.startsWith('A320'));

// .endsWith()
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the NEW Airbus Family');
}
