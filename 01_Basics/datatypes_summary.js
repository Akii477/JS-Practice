// Kis tarah se data ko mermory me rakha jata hai and access kiya jata hai usake hissab se data type ko 2 types me divide kiya gaya hai 

// PRIMITIVE DATA TYPE ---> (call by value)

// 7 types: String,, Number, Boolean, null,  undefined, Symbol, BigInt

const score = 100
constScoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 1000244328993477883n;


// Non PREMITIVE DATA TYPE or Reference Data Type ---> (call by reference)

// ARRAY, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

let newObj = {
    name: "Akash",
    age: 22,
}


const myFuction = function()
{
    console.log("Hello World");
}

console.log(typeof bigNumber);

console.log(outSideTemp);


// TODO:
// JS is Dynamic type language don't have to worry about declaration of data type.





