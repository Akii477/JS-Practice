function printPattern(rows)
{
    let starPattern = '';
    for(let i=0; i<rows; i++)
    {
        for(let j=0; j<i; j++)
        {
            // for i =0 it print nothing then it stars printing after i=1;
            starPattern += String.fromCharCode(i - 1 + 65 );
        }

        starPattern += "\n";
    }

    return starPattern;
}

console.log(printPattern(5));
