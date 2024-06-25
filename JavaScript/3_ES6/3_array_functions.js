// foreach function
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

// map function
numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(newNumbers);

// filter function
numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(function (number) {
  return number > 3;
});
console.log(filteredNumbers);

// reduce function
numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum);

const sum1 = numbers.reduce((prev, curr) => prev + curr);
console.log(sum1);

const mult = numbers.reduce((prev, curr) => prev * curr);
console.log(mult);

// find function
numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(function (number) {
  return number > 3;
});
console.log(foundNumber);

// findIndex function
numbers = [1, 2, 3, 4, 5];
const foundIndex = numbers.findIndex(function (number) {
  return number > 3;
});
console.log(foundIndex);

// every function
numbers = [1, 2, 3, 4, 5];
const allNumbers = numbers.every(function (number) {
  return number > 3;
});
console.log(allNumbers);
