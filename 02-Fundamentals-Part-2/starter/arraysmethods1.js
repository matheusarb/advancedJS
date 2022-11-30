// 1. ADDING METHODS

// 1.1 PUSH METHOD - add an item to the end of the array
const friends = ["Luiggi", "Preto", "Xande", "Tata"];

// const friendsCopy = [...friends];
// console.log(friendsCopy);

const newLength = friends.push("Hlo"); //gives me the length with a new item
console.log(newLength);

friends.push("Jay");
console.log(friends);

// 1.2. UNSHIFT METHOD - add an item to the beginning
friends.unshift("Paul");
console.log(friends);

// 2. REMOVE METHODS

// 2. POP METHOD - removes the last element. Don't need arguments to execute
friends.pop();
console.log(friends);

// 2.1. SHIFT METHOD - removes the first element. Don't need arguments to execute
friends.shift();
console.log(friends);

// 3 INDEXOF METHOD - returns the index in which the element is located
console.log(friends.indexOf("Preto"));

// 4 INCLUDES METHOD - returns true if the element is in the array or false if otherwise
// this method uses strict equality operator to check the existence of the given value
console.log(friends.includes("Luiggi"));

if (friends.includes("Luiggi")) {
  console.log("you have a great friend called Luiggi!");
}
