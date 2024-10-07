const radius = [3,1,2,4];

const area = (radius)=> 2*Math.PI*radius*radius;

const circumference = (radius) => 2 * Math.PI * radius;

const logicalFunction = function(radius,logic) // code logic is same as MAP function
{
    const output = [];
    for(let i=0; i<radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(logicalFunction(radius,area)); // [56.548667764616276,6.283185307179586,25.132741228718345,100.53096491487338]

let another = radius.map(area);
console.log(another);

// console.log(`CircumFerence: ${logicalFunction(radius, circumference)}`);
