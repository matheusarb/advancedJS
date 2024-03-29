'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const msg = `Oh, and you're a millenial, ${firstName}`;
      console.log(msg);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(msg);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `Your name is ${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     let msg = '';

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Didi';
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable
//       msg = `Oh, and you're a millenian, ${firstName}`;
//       console.log(msg);

//       function add(a, b) {
//         return a + b;
//       }

//       //Reassinging outer scope's variable
//       output = 'NEW OUTPUT';
//     } else {
//       msg = `Oh, you are not a millenial`;
//       console.log(msg);
//     }
//     console.log(millenial);
//     //console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Matheus';
// calcAge(1992);

//console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Matheus';
// let job = 'programmer';
// const year = 2023;

// //FUNCTIONS

// console.log(addDeclaration(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//THIS Keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
//   const insideFunc = () => {
//     return console.log(this);
//   };
//   insideFunc();
// };

// // calcAge(1992);

// const calcAgeArrow = birthYear => {
//   return console.log(this);
// };

// calcAgeArrow();

// console.log(jonas.calcAge());

// const matheus = {
//   year: 2002,
// };

// matheus.calcAge = jonas.calcAge;
// console.log(matheus.calcAge());

// let firstName = 'Matheus';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//SOLUTION 1
// calcAge: function () {
//   //console.log(this);
//   console.log(2037 - this.year);
//   const self = this;
//   const isMillenial = function () {
//     console.log(self);
//     console.log(self.year >= 1981 && self.year <= 1996);
//   };
//   isMillenial();
// },

//SOLUTION 2
//   calcAge: function () {
//     //console.log(this);
//     console.log(2037 - this.year);
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// //jonas.greet();
// //console.log(this.firstName);
// jonas.calcAge();

// const add = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

// let age = 30;
// let oldAge = age;
// console.log(age);
// age = 35;
// console.log(age);
// oldAge = 'hiho';
// console.log(oldAge);

// const me = {
//   name: 'matheus',
//   age: 30,
// };

// const friend = me;
// friend.age = 25;
// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive Types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davies';
// console.log(lastName, '', oldLastName);

// //Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 20,
// };

// //Copying objects
// const marriedJessica = { ...jessica };
// marriedJessica.lastName = 'Davies';
// marriedJessica.age = 24;

// console.log(jessica);
// console.log(marriedJessica);

//Another way of copying
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 20,
//   family: ['Alice', 'Thuram', 'bennzama'],
// };

// let jessicaCopy = {
//   birthYear: 1992,
// };

// Object.assign(jessicaCopy, jessica2);
// //console.log(jessicaCopy);

// jessicaCopy.family.push('tuilo', 'jeromel');
// console.log(jessica2, jessicaCopy);

//shallow copies, as Object.assign() and rest operator [...] only copies the properties in the first level
//if there are objects assigned inside the copied object, they will not be cloned
