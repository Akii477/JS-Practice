/* Problem : HAMMING DISTANCE 
    Given a two string x and y, return the HAMMING DISTANCE between them.
   
*/

function hammingDistance(x,y)
{
    if(x.length !== y.length)
    {
        throw new error("Both string is not same length");
    }

    let distance =  0;

    for(let i=0; i<x.length; i++)
    {
        if(x[i] !== y[i])
        {
            distance++;
        }
    }

    return distance;
};

console.log(hammingDistance("hello", "hwllr")); 