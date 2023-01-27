'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1. REST PATTERN AND PARAMETER
// collects the elements of an array and PACKS THEM;
// while spread operator UNPACKS the values;
// used in destructuring, as the following example;
// rest pattern must ALWAYS BE THE LAST in the destructuring in order to collect
// the remaining elements;

//SPREAD, because on RIGHT side of =
// const matriz = [1, 2, ...[3, 4]];

// REST PATTERN
const [a, b, ...others] = [1, 2, 3, 4, 5];

//console.log(a, b, others);

//Functions with REST PATTERN
//rest takes all the arguments passed to the function and packs them into an array

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];

//here we use the spread operator, which takes all the elements from the array and spread
//them as arguments of the function
//console.log(add(...x));

//restaurant.orderPizza('mushrooms', 'onion', ' olives', ' chicken');
// restaurant.orderPizza('cheese');
console.log('---Section over---');

//3. SHORT-CIRCUITING && AND ||
//use and return ANY data type
//short-circuiting

// console.log(3 || 'matheus');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

console.log('3. Short-Circuiting Section. || and &&');
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// // with the && the evaluation continues until the last truthy value or until it finds
// // the first falsy value, and displays it
// console.log(0 && 'Jonas');
// console.log(10 && 'Jonas');
// console.log('helo' && 23 && null && 'matheus');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('musuhroom', 'pepperoni');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushy', 'meat');
//Nullish coalescing operator works with the idea of nullish values
// Zeros and empty strings does exist with this operator
console.log('---Section over---');
console.log('4. Nullish coalescing operator');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
