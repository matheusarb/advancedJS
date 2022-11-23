const age = 15;

const isOldEnough = age >= 18;

//if-else statements are called CONTROL STRUCTURES
if (isOldEnough) {
  console.log("Yes!! You can drive 🤣");
} else {
  const yearsLeft = 18 - age;
  //console.log(`Be patient! You will be able to drive in ${yearsLeft} years 😁`);
}

const birthYear = 2012;
let century = "";

if (birthYear <= 2000) {
  century = "XX";
} else {
  century = "XXI";
}
console.log(century);
