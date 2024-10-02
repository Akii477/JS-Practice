// Dates

let myDate = new Date();
console.log(myDate.toString()); //Tue Apr 09 2024 15:46:10 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue Apr 0 9 2024
console.log(myDate.toISOString()); //2024-04-09T10:16:10.806Z
console.log(myDate.toLocaleDateString()); //9/4/2024
console.log(myDate.toTimeString()); // 15:46:10 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString()); //3:46:10 pm

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











