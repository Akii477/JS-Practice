const coding = ["Js","Ruby","Java","Python","Cpp"];
const values = coding.forEach((item)=>
{
    // console.log(item);
    // return item; //undefined //for each never return any values.
    
});

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];
// let newNums = myNums.filter((num)=> num > 5 )
let newNums = myNums.filter((num) =>{ return num>5});
console.log(newNums);


