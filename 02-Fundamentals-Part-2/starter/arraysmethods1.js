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
