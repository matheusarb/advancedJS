'use strict';

//1. DESTRUCTURING OBJECTS
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
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Rua Parambu, 295',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Clube Leblon',
//   starterIndex: 3,
// });

//to destructure objects we use curly braces!

//variables with same name as the property name
// const { name, openingHours, categories } = restaurant;
// //console.log(name, openingHours, categories);

// //variables with different names from the properties names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// //console.log(restaurantName, hours, tags);

// //setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// //console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// //javascript sees a curly braces opening as a code block. So, to assign values to the
// //destructured variables, we need to wrap everything into parentheses
// ({ a, b } = obj);
// //console.log(a, b);

// //Nested objects

const fri = [];
//console.log(open, close);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//2. DESTRUCTURING ARRAYS
// console.log(restaurant);

const arriegua = [2, 3, 4, 5];

// const [a, b, c] = arr;
//when JS sees this array structure on the left side of the equal assignment
//it knows it is destructuring
//always declare variables in destructuriing using const

// console.log(a);
// console.log(b);
// console.log(c);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switching variables with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// //nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//3. SPREAD OPERATOR - works on all iterables (arrays, maps, strings, sets
// except objects)
//its like taking all the elements out of the array and writing them inside the
//other one

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodArr = [1, 2, ...arr];
console.log(goodArr);

//whenever we need to use the individual elements of an array, we use the spread operator
console.log(...goodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//create shallow copies
const mainMenuCopy = [...restaurant.mainMenu];

//merge arrays together. Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//use on strings

const str = 'matheus';
const letters = [...str];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// mushrooms
// restaurant.orderPasta(...ingredients);

//Spread Operators with Objects - We can do shallow copies of objects with the spread operator
const newRestaurant = { founding: 1998, ...restaurant, founder: 'Giuseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
