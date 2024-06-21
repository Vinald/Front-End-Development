// 1D array
let myArray = ["John", 23];
console.log(myArray);
console.log(myArray[1]);
console.log('\n');

// 2D array
myArray = [["John", 23], ["cat", 2]];

// Access array data with indexes
myArray = [50, 60, 70];
let myData = myArray[0];
console.log(myData);

// Modify array data with indexes
myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

// Access multi-dimensional arrays with indexes
myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
myData = myArray[2][1];
console.log(myData);

// Manipulate arrays with push()
myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

// Manipulate arrays with pop()
myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop();
console.log(myArray);

// Manipulate arrays with shift()
myArray = [["John", 23], ["dog", 3]];
removedFromMyArray = myArray.shift();
console.log(myArray);

// Manipulate arrays with unshift()
myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);

// Shopping list
let myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// join()
let names = ['okiror', 'samuel', 'vinald'];
names = names.join(' ');
console.log(names);

// splice()
names = ['okiror', 'samuel', 'vinald'];
names.splice(1, 0, 'vinald');
console.log(names);

// slice()
names = ['okiror', 'samuel', 'vinald'];
names = names.slice(0, 2);
console.log(names);

// sort()
names = ['okiror', 'samuel', 'vinald'];
names.sort();
console.log(names);

// reverse()
names = ['okiror', 'samuel', 'vinald'];
names.reverse();
console.log(names);

// concat()
names = ['okiror', 'samuel', 'vinald'];
let ages = [25, 26, 27];
let newNames = names.concat(ages);
console.log(newNames);

// indexOf()
names = ['okiror', 'samuel', 'vinald'];
console.log(names.indexOf('samuel'));

// lastIndexOf()
names = ['okiror', 'samuel', 'vinald'];
console.log(names.lastIndexOf('samuel'));
console.log(names.length);

