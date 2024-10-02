function printPattern(rows)
{
    let starPattern = '';
    for(let i=1; i<=rows; i++)
        {
            for(let j=1; j<=i; j++)
                {
                    starPattern += i;
                    starPattern += ' ';
                }
                starPattern += "\n";
        }
    return starPattern;
}

console.log(printPattern(5));