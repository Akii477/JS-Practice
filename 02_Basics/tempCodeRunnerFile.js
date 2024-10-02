const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = { 3: "a", 4: "b" };

// combining two objects.
// TWO WAYS: spred operator and assign method

// wrong way----->
const obj3 = { obj1, obj2 };
// console.log(obj3); // object ke ander object.

// correct way
// const obj4 = Object.assign({}, obj1, obj2); // {}  is good method amd acts as a target.
// console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);
console.log(typeof obj5);