// this is a object literal
// key-values pairing. Each key is a property;
const Matheus = {
  name: ["matheus", "theu"],
  age: 30,
  profession: "programmer",
  bestFriends: "Luiggi, Xande, Tata, Preto, Nino...",
};

console.log(Matheus);
console.log(Matheus["profession"]);

// the main difference is that with bracket notation we can use expressions to retrieve
// data

const nameKey = "name";
console.log(Matheus[nameKey]);
