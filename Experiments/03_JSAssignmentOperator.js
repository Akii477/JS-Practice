
// EXPONENTIAL OPERATOR
let expoOperator = 10;
expoOperator **= 5;
console.log(expoOperator);

//DIVISION ASSIGNMENT OPERATOR
let divOp = 10;
divOp /= 5;
console.log("DIVISION ASSIGNMENT OPERATOR " + divOp);

// REMAINDER ASSIGNMENT OPERATOR
let remOp = 10;
remOp %= 5;
console.log("REMAINDER ASSIGNMENT OPERATOR " + remOp);

// LEFT SHIFT ASSIGNMENT OPERATOR

let LSOp = -100;
LSOp <<= 5;
console.log("LEFT SHIFT ASSIGNMENT OPERATOR " + LSOp);

//  RIGHT SHIFT ASSIGNMENT OPERATOR
let RSOp = -100;
RSOp >>= 5;
console.log("RIGHT SHIFT ASSIGNMENT OPERATOR " + RSOp);


// The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).

let URSOp = -100;
URSOp >>>= 5;
console.log("Unsigned Right Shift Assignment " + URSOp);

// The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.

let BSOp = 10;
BSOp &= 5;
console.log("Bitwise AND Assignment Operator " + BSOp);

// the Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
let BOOp = 10;
BOOp |= 5;
console.log("Bitwise OR Assignment Operator" + BOOp);

// The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

let BXOp = 10;
BXOp ^= 5;
console.log("Bitwise XOR Assignment Operator " +BXOp);


/* The Logical AND assignment operator is used between two values.
    If the first value is true, the second value is assigned.
 */

let LAOp = 10;
LAOp &&= 5;
console.log(LAOp);


/* The Logical OR assignment operator is used between two values.
If the first value is false, the second value is assigned. */

let LOOp = 10;
LOOp ||= 5;
console.log(LOOp);


/* The Nullish coalescing assignment operator is used between two values.
If the first value is undefined or null, the second value is assigned. */

let x;
x ??= 5;
console.log(x);

