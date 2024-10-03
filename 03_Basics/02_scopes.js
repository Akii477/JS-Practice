if(true)
{
    let a = 10;
    const b = 20;
    var c =30;
}


// console.log(a); //undefined. 
// console.log(b); // undefined.
console.log(c); 

console.log("---------------------------------------------------------------------------------------------------------------");

// Nested Scope

function one() {
    const username = "Akash";

    function two() {
        const website = "linkdin"
        console.log(username);
    }
    // console.log(website);  // Scope issue

    two();
}
one(); // Akash


// +++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // hoisting.

function addOne(num) {
    return num + 1;
} 


 console.log(addTwo(5)); //Cannot access 'addTwo' before initialization because it stores in variable.

const addTwo = function addTwo(num) {
     return num + 2;
};
 
function addTwo(num) {
     return num + 2;
};

