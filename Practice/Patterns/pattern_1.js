function printStars(rows)
{
    let starPattern = '';
    for(let i=0; i<rows; i++)
        {
            for(let j=0; j<rows; j++)
                {
                    starPattern += "* ";
                }
            starPattern += "\n";
        }
    return starPattern;
};

//const prompt = require("prompt-sync")();
//let userInput = prompt("Enter the number of rows:" );
console.log(printStars(5));