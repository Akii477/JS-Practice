function printPattern(rows)
{
    let starPattern = '';
    let space = 2*(rows-1);

    for(let outer = 1; outer<=rows; outer++)
    {
        // numbers
        for(let no = 1; no<=outer; no++)
        {
            starPattern += no;
        }
        //space
        for(let s = 1; s <=space; s++)
        {
            starPattern += " ";
        }
        //numbers
        for(let no = outer; no>=1; no--)
        {
            starPattern += no; 
        }

        starPattern += "\n";
        space -= 2;
    }
    return starPattern;
}

console.log(printPattern(5));
