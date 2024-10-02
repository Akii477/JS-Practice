function printPattern(rows)
{
    let printStar = '';

    for(let i=0; i<rows; i++)
        {
            for(let j=0; j<=i; j++)
                {
                    printStar += "* ";
                }
                printStar += "\n";
        }
    return printStar;
}

console.log(printPattern(4));