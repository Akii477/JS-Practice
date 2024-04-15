// Creating a Objects in different Ways.
const tinderUser = new Object(); // Singleton Object
const tinderUser1 = {} ; // Non Singleton Object.

tinderUser.id ="123abc";
tinderUser.name = "Akash";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// creating a constructor in constructor.
const  regularUser = 
{
    email: "some@gmail.com",
    fullName: 
    {
        userFullName:
        {
            firstName: "Akash",
            lastName: "Kushwaha"
        },
    },
}

console.log(regularUser.fullName.userFullName.firstName); 

const obj1 =
{
    1: "a",
    2: "b",
}
const obj2 ={ 3: "a", 4:"b"}

// combining two objects.
// TWO WAYS: spred operator and assign method

// wrong way----->
const obj3 = {obj1, obj2};
console.log(obj3); // object ke ander object.

// correct way
const obj4 = Object.assign({}, obj1, obj2); // {}  is good method amd acts as a target.
console.log(obj4);

const obj5 = { ...obj1, ...obj2};
console.log(obj5);

// TODO: IMPORTANT.
// to get all keys of object
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] return as array we can run loop and many things.
console.log(Object.values(tinderUser));  // [ '123abc', 'Akash', false ]
console.log(Object.entries(tinderUser)); // first value is key and second is value. Get array in array which have key and value pair.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check the property is available or not.



 

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// TODO: DESTRUCTURING.
//instead of dot operator to get data we can use this method as well.
const {courseInstructor} = course
console.log(courseInstructor);


// API:



