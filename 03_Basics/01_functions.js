// function addTwoNumber(number1, number2) // when we define a fucntion these values are PARAMETERS.
// {
//     console.log(number1 + number2); 
// }


//2: 
function addTwoNumber(number1 , number2)
{
    return number1 + number2;
}

// MULTIPLE  WAY TO RETURN A FUNCTION VALUE AND PRINT.
const result = addTwoNumber(5,4); // when we call a function the value is called as arguments.
console.log(result); // undefined.  // 2-> 9 


function loginUserMessage(username)
{
    // if(username === undefined)
    // {
    //     console.log("Please Enter a username");
    // }

                //OR
                
        if(!username)
        {
            console.log("Please Enter a username");
        } 
    return `${username} just logged in`;
}

// if the aruguments is not pass in function then the result will be UNDEFINED.
console.log(loginUserMessage('Akash'));
console.log(loginUserMessage());

console.log("------------------------------------------------------------------------------------------------------------------------------");


// When we have mulitple unknown paramters where we have to perfrom some operations on that.(i.e: Shopping cart calculation) in this condition we will use  REST OPERATOR.
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 2000));



// Suppose we have some parameter lets take 2 paramter and then we use REST operator in that case how many parameter will taken by REST operator ---> INTERVIEW QUESTION.

function calculateAnotherCartPrice(value1, value2, ...num)
{
    // Please note that the keys in the object are literal strings “value1”, “value2”, and “num”, not variables. If you want the keys to be dynamic based on variable values, you would need to use square brackets [] around the variable names.

    // return {value1,value2,num}; // return as object.
    return num;
}

console.log(calculateAnotherCartPrice(200, 400, 800, 1000, 2000));


// passing a object as paramter in function.
const user = {
    username: "Akash",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user);

// we can pass direct object.
handleObject({
    username:"Ajay",
    price:199
})

console.log ("------------------------------------------------------------------------------------------------------------------------------");

// PASSING AN ARRAY AS  A PARAMETER IN FUCNTION.
const mynewArray = [200, 400, 100, 600];
function returnArrayValue(getArray) {
    return getArray[2];
}

console.log(returnArrayValue(mynewArray)); 





