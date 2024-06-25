const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Destructuring assignment
const arr3 = [...arr1, ...arr2];
console.log("With destructuring", arr3);

// Without destructuring
const arr4 = [arr1, arr2];
console.log("Without destructuring", arr4);


// with objects
const obj1 = {
  names: "Samuel",
};

const obj2 = {
  age: 25,
};

// Destructuring assignment
const obj3 = {
  ...obj1,
  ...obj2,
};

console.log("With destructuring", obj3);
