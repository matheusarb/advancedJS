'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

console.log(restaurant);

const arr = [2, 3, 4, 5];

const [a, b, c] = arr;
//when JS sees this array structure on the left side of the equal assignment
//it knows it is destructuring
//always declare variables in destructuriing using const

console.log(a);
console.log(b);
console.log(c);

const [first, , second] = restaurant.categories;

console.log(first, second);
