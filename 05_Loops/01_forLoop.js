
for(let index = 0; index < 10; index++)
{
    const element = index;
    console.log(element);
}


console.log(`Printing Number Table: `);

for(let i=1; i<=10; i++)
{
    for(let j=1; j<=10; j++)
    {
        // console.log( `${i} * ${j} = ${i*j}`);
        console.log(i + ' * ' + j +' = ' + i*j );

    }
    console.log("\n");
}


let myArray = ["flash", "batman", "superman"]
for(let i = 0; i < myArray.length; i++)
{
    const element = myArray[i];
    console.log(element);
}

//break and continue

for(let i = 1; i <= 20; i++ )
{
    if( i == 5 )
    {
        console.log(`Detected 5`);
        // break;
        continue;
    }
    console.log(`value of i is: ${i}`);
}
