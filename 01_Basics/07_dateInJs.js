// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); //interview question ---> OBJECT

// to create a specific date
// TODO: 
// Months is initialied by 0

// let createdDate = new Date(2023,0,23);  // MON JAN 23 2023
let createdDate = new Date(2023,0,23,5 ,3);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

let myCreatedDate = new Date("2014-01-23");
console.log(myCreatedDate.toLocaleString());

let anotherCreatedDate = new Date("01-14-2023");
console.log(anotherCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // IN ms 
// to convert into sec
console.log("TIme is sec " + Math.round(Date.now()/1000));


// DATE:

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day : "2-digit",
    month: "long",
    
}));











