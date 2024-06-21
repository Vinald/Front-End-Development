// while loop

var myArray = [];

var i = 0;
while(i < 5 ) {
    myArray.push(i);
    i++;
}

console.log(myArray)

// for loop

var myArray = [];

for (var i = 0; i < 5; i++) {
    myArray.push(i);
}

console.log(myArray)

// iterate odd numbers with a for loop

var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray)

// count backwards with a for loop
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray)

// iterate through an array with a for loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total)

// nested for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j =0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

// values below to test your code
var mal1 = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(mal1)

// iterate with do...while loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
}
while (i < 5)

console.log(i, myArray)

// replace loops using recursion

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n-1) + arr[n-1];
    }
}

console.log(sum([1], 0))
console.log(sum([2, 3, 4], 1))
console.log(sum([2, 3, 4, 5], 3))

// profile lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    }, 
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }, 
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    }, 
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
                return contacts[i][prop] || "No such property";
            }
        }
        return "No such contact";
    }

console.log(lookUpProfile("Akira", "likes"))
console.log(lookUpProfile("Kristian", "lastName"))
console.log(lookUpProfile("Sherlock", "likes"))
console.log(lookUpProfile("Harry", "likes"))
console.log(lookUpProfile("Bob", "number"))
console.log(lookUpProfile("Bob", "potato"))
console.log(lookUpProfile("Akira", "address"))
console.log('\n')
