'use strict';

const restaurant = {
  name: 'Classico Italiano',
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
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

// console.log(restaurant);
//1. LOGICAL ASSIGNMENT OPERATOR

// 'use strict';

// const rest1 = {
//   name: 'Capri',
//   //numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';

// //AND assignment operator
// // rest1.numGuests &&= 10;
// // rest2.numGuests &&= 10;

// console.log(rest1);
console.log('--- end of section logical assignment operator ---');

//2. LOOPING ARRAYS WITH for-of LOOP
// will give access to each current element of the array when looping through.
// One by one

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (let item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }
console.log('--- end of for-of loop');

//3. OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//Methods with optional chaining
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays with optional chaining

const users = [
  {
    name: 'Jonas',
    email: 'hello',
  },
];

// console.log(users[0]?.name ?? 'User array empty');
console.log('--- end of optional chaining section ---');

//4. Looping Objects: Object Keys, Values, and Entries;
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}
