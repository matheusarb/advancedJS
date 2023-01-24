//1. DESTRUCTURING OBJECTS

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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Rua Parambu, 295',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Clube Leblon',
  starterIndex: 3,
});

//to destructure objects we use curly braces!

//variables with same name as the property name
const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

//variables with different names from the properties names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
//console.log(restaurantName, hours, tags);

//setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//javascript sees a curly braces opening as a code block. So, to assign values to the
//destructured variables, we need to wrap everything into parentheses
({ a, b } = obj);
//console.log(a, b);

//Nested objects

const {
  fri: { open, close },
} = openingHours;
//console.log(open, close);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//2. DESTRUCTURING ARRAYS
// console.log(restaurant);

// const arr = [2, 3, 4, 5];

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

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
