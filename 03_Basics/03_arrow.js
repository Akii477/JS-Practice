const user = 
{
    username: "Akash",
    price : 999,
    
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// this keyword refers to current context, here in user object all properties are current object i.e: username, price..


// user.welcomeMessage();
// user.username = "Ajay";
// user.welcomeMessage();

// console.log(this); // refer as empty object.
 
//TODO:
//in browser when you print this keyword it will display  WINDOW OBJECT PROPERTY

 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++ MAIN TOPIC +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chai() {

       // console.log(this); // get global, micro task etc all other information.
       let username = 'Akash';
      // console.log(this.username); // undefined
       //TODO: we can not this keyword in function
}

chai();


// const example = function () {
//     let username = "Akash";
//     console.log(this.username);
// }
// example(); // also give undefined.



const example = () => {
        let username = "Akash";
        console.log(this.username);// Undefined.
        console.log(this); // {}
    }

example(); 

const addTwo = (num1, num2) =>
{
    return num1 + num2;
}
// if you use curly bracket than have to use return keyword.

console.log(addTwo(3,4));


//arrow function can run in different ways as well (implicit return)
// const addThree = (num1, num2, num3) => num1 + num2 + num3;
//implicit return:
const addThree = (num1, num2, num3) => ( num1 + num2 + num3 ); // if you use parantheses than don't have use return keyword.
console.log(addThree(1,2,3));

// NOTE: when we want to return OBJECT we have to use parantheses.
const objexample = (username, userpassword) => ( { username:'Akash'})
console.log(objexample('Ajay', 1234));





