// let myName = "Akash     ";
// let myteacherChannel = 'chai     ';
// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower : function()
    {
        console.log(`Spidy Power is ${this.spiderman}`); // this tell us which super we talking about. this ka mtlb jis.
    }
}

// SO we created our own object and created it in this manner that it can access to all the object.
// As we know the STRING, ARRAY, OBJECT AND FUNCTION is type of object and these refers to object and object reference is NULL.
Object.prototype.Akash = function()
{
    console.log(`Akash is present in all object`);
    
};
// heroPower.Akash();  // object heroPower can access the property of  CUSTOM OBJECT(PROTOTYPE)
// myHeros.Akash(); // ARRAY as well can access the property of CUSTOM OBJECT.

// suppose we gave the some power to array so can we acess the power into object?? (like objects power can access to all  (array,string,function ---> object---> NULL))

Array.prototype.arrayAkash = function()
{
    console.log(`Akash say Hello`);
}

// myHeros.arrayAkash(); // HAS ACCESS
// heroPower.arrayAkash(); //NOT HAVE ACCESS POWER of arrayAkash.


// INHERITANCE

const user = {
    name : "Akash",
    email: "rajkushwaha2410@gmail.com"
};
const teacher = {
    makeVideo : true
};

const TeachingSupport = {
    isAvailable : false
};

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime : true,
    __proto__:TeachingSupport
};

teacher.__proto__ = user


// MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, teacher); //PROTOTYPLE Inheritance.


let anotherUserName = "Akash_Kushwaha        ";

String.prototype.trueLength = function()
{
    console.log(`${this}`); //Akash_kushwaha //this has reference of anotherUsername //direct acess ke time usaka reference mil raha hai.
    console.log(`True Length is: ${this.trim().length}`);    
}

anotherUserName.trueLength();
"Akash".trueLength(); //direct access of custom property.
"ChaiAurCode".trueLength();
