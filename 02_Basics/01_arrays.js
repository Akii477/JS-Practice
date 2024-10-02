// array
// In JS array can store non similar type of element there is no rule of similar element Like C++.
// IN JS array are re-sizable.
// JS array-copy-operations create shallow copies. (shallow copies --> are copies which have same references to original addresses.)
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman","Nagraj"];

console.log(myArr[1]);
// another way to create ARRAY
const myArr2 = new Array(1,2,3,4);


// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // -1 if not exists

console.log(myArr);
 

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // STRINGS


// SLICE, SPLICE

// TODO: Interview Questions : Difference Between Slice and Splice. 

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);  
console.log("C", myArr);





