// arrow functions
const magic = () => new Date();
console.log(magic());

// arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// set default parameters for you12_arrow_fnsr functions
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));

// use the rest operator with function parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3, 4));

// use the spread operator to evaluate arrays in place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);

// template literals
const person = (fname, lname, age) => {
  const intro = `First name: ${fname} Last name: ${lname} Age: ${age}`;
  return intro;
};

console.log(person("samuel", "vinald", 12));

const person2 = (name, shirt) => {
  const person = {
    name,
    shirt,
  };
  const intro = `Name: ${person.name} Shirt: ${person.shirt}`;
  return intro;
};

console.log(person2("samuel", "polo"));
