function printPattern(rows)
{
    let starPattern = '';
    for(let outer = 0; outer<rows; outer++)
        {
            //space
            for(let space = 0; space<outer; space++)
                {
                    starPattern += " ";
                }

            // star
            for(let star = 0; star<2*rows - (2*outer+1); star++)
                {
                    starPattern += "* ";
                }

            // space
            for(let space = 0; space<outer; space++)
                {
                    starPattern +=" ";
                }
            starPattern += "\n";
        }
    return starPattern;
}

console.log(printPattern(5));