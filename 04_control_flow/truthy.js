// falsy values: false, 0, -0, BigINT 0n, "", null, undefined, NaN
// truthy values: "0" (string 0), "false"(string false), " "(space string), [], {}, function(){}

// const userEmail = "akii@gmail.com"
const userEmail = [];
if(userEmail)
{
    console.log("Got a Email");
}
else
{
    console.log("Don't have a user email.");
}

//
if( userEmail.length === 0)
{
    console.log("Array is an empty");
}

const emptyOBJ = {};
if(Object.keys(emptyOBJ).length === 0)
{
    console.log("Object is empty");
}

// TODO: IMP

// Nullish Coalescing Operator(??): made for ---> null undefined.

let val1 ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = undefined ?? 10 ?? 20; // takes first value except null and undefined.
console.log(val1); // 5   //10  //15 //10


// Terniary Operator
// condition ? true : flase

let iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");





