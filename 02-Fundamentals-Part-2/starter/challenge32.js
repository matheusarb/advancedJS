//let GLOBAL_BMI = mass / height ** 2;

const user1 = {
  fullname: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const user2 = {
  fullname: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(user1.calcBMI());
console.log(user1.BMI);
console.log(user2.calcBMI());
console.log(user2.BMI);

user1.BMI > user2.BMI
  ? console.log(
      `${user1.fullname}'s BMI(${user1.BMI}) is higher than ${user2.fullname}'s BMI(${user2.BMI})`
    )
  : console.log(
      `${user2.fullname}s BMI(${user2.BMI}) is higher than ${user1.fullname}'s BMI(${user1.BMI})`
    );
