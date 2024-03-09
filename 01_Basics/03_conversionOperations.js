let score = "33ABC";

// two way to write
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN --> Not a number it happens when there are another DT with primary DT.


// TODO: NOTE
let score1 = null;
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2 = undefined;
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1;
//  let isLoggedIn = "";
let isLoggedIn = "Akash";
let booleanIsLoggenIn = Boolean(isLoggedIn);

console.log(booleanIsLoggenIn);

// 1 => true; 0 => false;
// "" => false;
// "Akash" => true;


let someNumber = 33;
let  stringNumber = String(someNumber);
console.log(stringNumber);
