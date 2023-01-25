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

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

//here we use the spread operator, which takes all the elements from the array and spread
//them as arguments of the function
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', ' olives', ' chicken');
restaurant.orderPizza('cheese');
