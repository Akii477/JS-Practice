function printPattern(rows)
{
    let starPattern = "";

    for(let outer=0; outer<2*rows+1; outer++)
        {
            let numberOfStar = outer;

            if(numberOfStar > rows) numberOfStar = 2*rows - outer;
            for(let j=0; j<numberOfStar; j++)
                {
                    starPattern += "* ";
                }
                starPattern += "\n";
        }

        return starPattern;
}

console.log(printPattern(5));