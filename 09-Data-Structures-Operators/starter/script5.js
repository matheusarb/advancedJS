'use strict';

//1. Sets - a data structure that is a collection of unique values

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

// console.log(ordersSet);

// console.log(ordersSet.size); //similar to .length in arrays
// console.log(ordersSet.has('Pizza')); //similar to .includes() in arrays
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.delete('Risotto'));
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

//Example of real use case for Sets

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('matheus').size);
console.log('--- end of Set section ---');

//2. Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :(');

//rip data from a map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
