// Easy to predict answers
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log( 2 != 1);

// When we compare different data types value it will be difficult to predict

console.log("2" > 1); //automatically 2 converted into number.
console.log("02" > 1);

// compare to NULL
// Avoid this type of conversion
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* The Reason is that an equality check == and comparision > < >= <= work differently
    Comparision converts null to number, treating is as 0 That's why null >=0 is true and null>0 is false;
*/

// === strict equality check --> check data as well as data type
console.log("2" === 2);
