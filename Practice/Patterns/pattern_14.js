function printPattern(rows)
{
    let starPattern = '';
    for(let i=0; i<rows; i++)
    {
        for(let j=0; j<rows-i; j++)
        {
            starPattern += String.fromCharCode('A'.charCodeAt(0) + j);
        }

        starPattern += "\n";
    }

    return starPattern;
}

console.log(printPattern(5));


