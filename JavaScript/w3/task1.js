//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Yana";
// Write some code here
let nameIndex = names.indexOf(nameToRemove);
console.log(names.includes("Ahmad"));
console.log(nameIndex);
names.splice(nameIndex, 1);
console.log(names);
// Code done
//
