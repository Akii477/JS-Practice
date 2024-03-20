const name = "Akash";
const repoCount = 10;

//console.log(name + repoCount + " value"); outdated version to write

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}` );  // concept called string interpolation

const gameName = new String("Akash"); //constructor

console.log(gameName);

console.log(gameName.length);

console.log(gameName.toLowerCase()); // not be changed of existing value --- pass by reference.
console.log(gameName);
console.log(gameName.charAt(2)); // to check which character is at which position by charAt function
console.log(gameName.indexOf('k')); // to check particular char at which position by indexOf function

let newString = gameName.substring(0, 4); // 4 is not included
console.log(newString); 

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne ="   Akash   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url  = "https://akashkushwaha.com/akash%20kushwaha";
console.log(url.replace('%20', '-'));
console.log(url.includes('mahendra'));


//TODO: Converting CASE

const toBeConverted = {name:"Akash"};
console.log(String(toBeConverted)); //[object object];

// correct way to convert a object into String
let stringified = JSON.stringify(toBeConverted); // {"name":"Akash"}
console.log(stringified);

// converted object to their ORIGINAL form.
console.log(JSON.parse(stringified));
console.log(typeof(toBeConverted));


// STRING COMPARISION

const str1 = "Apple";
const str2 = "Banana";
const str3 = "Apple";
console.log(str1.localeCompare(str2)); // return -1 (not equal) 
console.log(str1.localeCompare(str3)); // return 0 (equal)

// Splitting and Joining Strings
const fullName = "Akash Mahendra Kushwaha";
console.log(fullName.split(" "));
// Split by particular character i.e "a"
console.log((fullName.split('a')));
 

// JOINING
const fruitArray = ["Apple" ,"Banana", "Orange"];
console.log(fruitArray.join((" and ")));

