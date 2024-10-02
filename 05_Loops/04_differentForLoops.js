// is used for spcecially for  operations on arrays.
// arrays specific loop.

// for of Loop : The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

// 1. Array
const arr = [1, 2, 3, 4, 5];

//SYNTAX:

// for (const iterator of object) {
// }

for (let [key, value] of arr.entries()) {
  console.log(`val at ${key} index is: ${value}`);
}

// 2. Strings
const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// 3. Maps
// is an object which holds data in key value pair.
// is used for it's unique value( value is not repeated if it is duplicate ).
// the order same as you entered wheather normal object is not concerned  about their order.
//Map is optimized for scenarios that involve frequent additions and removals of key-value pairs. This is due to the way Map is implemented in JavaScript engines, which could be as a hash table or a search tree, providing better performance than an object for these operations.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// duplicate value
map.set("IN", "India");
console.log(map);

// PRINTING A MAP:
// the same method is not applicaple for object.
for (const [key, value] of map) {
  // destructing of array: [key,value].
  console.log(key, ":-", value);
}

//  INTERVIEW: why we can directly access the key value but not in array when we using for of loop

/*
The reason you can directly access the key and value in a Map using a for...of loop but not in an Array is due to the way these two data structures are designed in JavaScript.

Map: A Map in JavaScript is a collection of key-value pairs. When you use a for...of loop on a Map, it returns an array of [key, value] for each iteration. This is why you can use array destructuring ([key, value]) to directly access the key and value. 

Array: An Array in JavaScript is an ordered list of values. When you use a for...of loop on an Array, it returns the value of each element for each iteration, not the index and value. This is why you can’t directly access the index and value like you can with a Map.
*/

// console.log(
//   "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
// );

// FOR IN LOOP: The JavaScript for in statement loops through the properties of an Object

//1. Object:

const person = {
  firstName: "Akash",
  lastName: "Kushwaha",
  age: 22,
  weight: 70,
};

for (const info in person) {
  console.log(person[info]); // info : will return key parts values.
}

console.log("\n");

// For In Over Arrays

const numbers = [45, 4, 9, 16, 25];
let output = "";
for (let val in numbers) {
  output += `${numbers[val]} `;
}

console.log(output.trim()); // print all values in one line.

for (let val in numbers) {
  console.log(numbers[val]);
}
// NOTE:Do not use for in over an Array if the index order is important. The index order is implementation-dependent, and array values may not be accessed in the order you expect. It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// Suppose we have HTML collection(When we work on DOM we get HTML collection)  we can not use forEach loop.
// Array.from : USed to Create an Array from any other Object

// For-in loop is work for MAP beacause it is not iterable.

// FOR -EACH LOOP
const codingLanguage = ["Js", "Ruby", "Java", "Python", "CPP"];
// codingLanguage.forEach((item) => {
//   console.log(item);
// });

codingLanguage.forEach(function (list) {
  //   console.log(list.trim());
});

// another way to print
function printMe(item) {
  console.log(item);
}
codingLanguage.forEach(printMe);

// syntax : array.forEach(function(currentValue, index, arr),thisValue);

// NOTE:
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "CPP",
    languageFileName: "cpp",
  },
  {
    languageName: "Pyhton",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
});
