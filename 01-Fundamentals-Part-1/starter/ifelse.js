const age = 15;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Yes!! You can drive 🤣");
} else {
  const yearsLeft = 18 - age;
  console.log(`Be patient! You will be able to drive in ${yearsLeft} years`);
}
