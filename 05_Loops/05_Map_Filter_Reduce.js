// RESOURCES : https://www.javascripttutorial.net/javascript-array-filter/

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
// console.log(newNums);

const age = [32,33,34,16,40];
const ans = ((age) => age>=18 );
const result = age.filter(ans);
// console.log(result);

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let citiesResult = cities.filter((city)=> city.population >=3000000) .map(city => city.name)
.join(', '); // return only name of the city not whole object and join helps to display as single entity not as array.
// console.log(citiesResult);//Los Angeles, New York

// CHAINING:
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

let myNumbersResult = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num +1)
                        .filter((num) => num>=40);
// console.log(myNumbersResult);


// REDUCE
let arr3 = [1,2,3,5,2,1]
let arr3Ans = arr3.reduce((element,copyElement) => element+copyElement);
// console.log(arr3Ans);//14


let shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "MobileDevelopment Course",
        price : 5999
    }
]

let totalValue = shoppingCart.reduce((acc,currentValue)=>acc + currentValue.price,0);
console.log(totalValue);


