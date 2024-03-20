// PALINDROME NUMBER
// INTPUT X: 121 ---> OUTPUT: TRUE;
// INTPUT X: 10 --> OUTPUT: FALSE;

// const isPalindrome = function(x)
// {
//     return x === +x.toString().split("").reverse().join("");
// };

// let res = isPalindrome(121);
// console.log(res);
  

let value = "121";

const isPalindrome = () =>
{
  let myRevVal = value.toString().toUpperCase().split("").reverse().join("");
  let myStrVal = value.toString().toUpperCase();

  if(myRevVal === myStrVal)
  {
     console.log(`${value} is a Palindrome Number`);
  }
  else
  {
    console.log(`${value} is not a Palindrome Number` );
  }
};

isPalindrome();