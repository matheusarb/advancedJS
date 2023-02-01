'use strict';

// .split() method and .join() array method
console.log('a+very+nice+string'.split('+'));
console.log('Matheus Ribeiro'.split(' '));

const [firstName, lastName] = 'Matheus Ribeiro'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //.join() array method
console.log(newName);

//capitalize first letter of each name - GOOD CHALLENGE

const passenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('matheus ribeiro');

//OR

const capitalizeName2 = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesCapit = [];

  for (const n of names) {
    namesCapit.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesCapit.join(' '));
};

capitalizeName2('Matheus Ribeiro');

//Padding add a number of characthers until the string has a
//certain desired length
//.padStart() and padEnd()

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('jonas'.padStart(25, '+'));
console.log('jonas'.padEnd(30, '+'));

//FUNCTION FOR MASKING CREDIT CARD NUMBERS

const maskCreditCard = function (number) {
  const str = number + '';
  const last4Characters = str.slice(-4);
  return last4Characters.padStart(str.length, '*');
};

console.log(maskCreditCard(32456658));
console.log(maskCreditCard(324566587534));
console.log(maskCreditCard('32456658736567534'));

// .repeat()
const message2 = 'Bad weather... All departures delayed ';
console.log(message2.repeat(5));

const planesInLine = function (planesNum) {
  console.log(
    `There are ${planesNum} planes waiting in line ${'✈'.repeat(planesNum)}`
  );
};

planesInLine(5);
planesInLine(3);
