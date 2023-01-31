'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B347'[3]);
console.log(airline.length);
console.log('B347'.length);

// indexOf()
console.log(airline.indexOf('r'));

// lastIndexOf()
console.log(airline.lastIndexOf('r'));

// .slice() the length of a slice string is always going to be end - 1
// OBS: remember that strings are primitives, therefore, they are immutable
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));

console.log(airline.slice(-2)); //starts from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const seatCheck = seat.slice(-1);
  if (seatCheck === 'B' || seatCheck === 'C')
    console.log('You got middle seat');
  else console.log('lucky you!');
};

checkMiddleSeat('09A');
checkMiddleSeat('09B');
checkMiddleSeat('09C');
