/*  Objects can be declared in two ways:
    1. Literals.
    2. Constructor.

    TOPIC: Singleton : When we create a object through constructor then it is singleton that means ye apane tarah ka aek hi object hai.

*/

//OBJECT LITERALS:
// Object.create :--> learn form net


// Declaring Symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Akash",
    "full Name": "Akash Kushwaha",

    // adding a symbol to as key in object
    [mySym] : "myKey1", 
    roll_no: 50,
    CGPA: 8.27,
    isLoggedIn : false,
    gmail:"rajkushwaha2410@gmail.com",
    lastLoginDays: ["Monday", "Saturday"]
};



// ACCESS A OBJECT: 2 WAYS
console.log(JsUser.name);
console.log(JsUser["name"]);

// we cannot access the fullName by dot operator.
console.log(JsUser["full Name"]);

//TODO: correct way to access the symbol.
console.log(JsUser[mySym]);

// changing a values of an object.
JsUser.gmail = "rajkushwaha@google.com"

// Object.freeze: it's helps to freeze the objects that's means the value can not be modified.
// Object.freeze(JsUser);

JsUser.gmail ="rajkushwaha2410@yahoo.com";
console.log(JsUser);

// Adding a function in Objects. It acts as  a variable.
JsUser.greeting = function()
{
    console.log("Hello Js User");
}

console.log(JsUser.greeting); // [Function (anonymous)] --> Scope
console.log(JsUser.greeting());

JsUser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());


// +++++++++++++++++++++++++++++++++++++++++++++ EXTRA ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myName = 'Akash';
const userName1 = '';
const userName2 = '';
// both userName1 and userName 2 have a same memory address.
const user1 = {
    firstName : 'Akash'
}

const user2 = {
    firstName : 'Amit',
    lastName : 'Kushwaha',
    'Akash' : 'web developer'
}

console.log(user2.lastName);
console.log(user2['lastName']);

console.log(user2[myName]); // we can access the variable by brackets property but it is not possible in dot operator.
console.log(user2["first"+"Name"]); // here first is not defined but it concated with name and make as firstName which has a value as amit.









