const user = {
  name: "Matheus",
  birthYear: 1992,
  profession: "programmer",
  friends: ["Luiggi", "Tata", "Xande"],
  hasDriversLicense: true,

  // we need a function expression to actually work
  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  // this permits a more dynamic code and preserve the rule
  // 'do not repeat yourself'
  //   calcAge: function () {
  //     //console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.name} was born in ${
      this.birthYear
    }, has ${this.calcAge()} years old,
    is a ${this.profession}, his friends are ${this.friends} and he
    ${
      this.hasDriversLicense === true
        ? "has a driversLicense"
        : "doesn't have a driver's license"
    }`;
  },
};

console.log(user.calcAge());
console.log(user.age);

console.log(user.getSummary());
// console.log(user["calcAge"](user.birthYear));
