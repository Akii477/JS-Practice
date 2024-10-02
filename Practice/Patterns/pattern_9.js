function printPattern(rows)
{
    let starPattern = '';

    for(let outer = 0; outer<rows; outer++)
        {
            // space 
            for(let space = 0; space<rows-outer-1; space++)
                {
                    starPattern += " ";
                }
            // star 
            for(let star = 0; star <2*outer+1; star++)
                {
                    starPattern += "* ";
                }
            //space
            for(let space = 0; space<rows-outer-1; space++)
                {
                    starPattern += " ";
                }
            starPattern += "\n";
        }
    return starPattern;
}
function printPattern1(rows)
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
let pyramid1 = printPattern(5);
let pyramid2 = printPattern1(5);

console.log(pyramid1 + pyramid2);