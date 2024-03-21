const score =400
const balance = new Number(100);
console.log(balance);
console.log(typeof balance); // Object

console.log(balance.toString()); // convert into string.
console.log(balance.toFixed(2)); // 100.00 //mostly used in E commerce field.

const otherNumber = 1123.894324;
// console.log(otherNumber.toPrecision(2)); //24 for 23.894324
console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString()); // US standard based answer;
console.log(hundreds.toLocaleString('en-IN')); // INDIAN BASED

// ++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5 choose top value;
console.log(Math.floor(4.9)); // 4 choose least value;
console.log(Math.min(-1,2,4,6,8,9,13)); 


console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor((Math.random()* (max-min) + 1) + min));  
/* Math.random always gives you value between 0 and 1  
    suppose hamne jab random ko 10 se multiply kiya and there can be chances that value can come 0.9887 or ye floor karane per )0 ho jayega that's we add +1 
    And bahut baar case aata hai ki hume min and max define karana hai like dice game us case me hamne max-min kiya so we get that range and +1 to remove 0 value case but hamko previous value jaisi hi aa rahi hai that means we have to add min taaki hame min value mil sake 
*/

