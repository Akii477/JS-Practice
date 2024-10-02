// Immediately Invoked Function Expressions (IIFE)

// syntax: ()()
// first parantheses is function definatiom
// second is excution call.


// INTERVIW ANS: We might face problem becuase of global scope pollution (variables etc.. )  to reduces this type of problem we use IIFE

(function dbConnectivity()
{
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// BY USING ARROW FUNCTION
(
    // UNAMED IIFE
    () => {
        console.log(`DB IS CONNECTED ` );
    }
)();

// pass some parameter.
(
    (name) => {
        console.log(` ${name}  IS CONNECTED` );
    }
)('MongoDB');
