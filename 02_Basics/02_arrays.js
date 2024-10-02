const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ] Array ke ander Array.
//Here dc_heros array is a single element in mervel_heroes array.
// console.log(marvel_heros[3]);

// for select perticular element in subarray at index 3
// console.log(marvel_heros[3][1]);

// Another Method: concate;
let resultconcate = marvel_heros.concat(dc_heros);
console.log(resultconcate); // concate return new array where push add element in existing array.
// [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// SPREAD OPERATOR:
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


// FLAT: 
coxnst anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let usable_another_array = anotherArray.flat(Infinity);
console.log(usable_another_array);


// Array.from

console.log(Array.isArray("Akash")); 

console.log(Array.from("Akash")); 

//from can not directly convert key: value pair into array we have to specify.
console.log(Array.from({name:"Akash"})); // INTERESTING INTERVIEW PERSPECTIVE;


//Array.of 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



