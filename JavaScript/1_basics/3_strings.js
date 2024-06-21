// string variables
let firstName = "Oo";
let lastName = "Samuel";

// escaping literal quotes in strings
let fullName = "Oo Samuel";
fullName = "My username is \"twelve\".";
console.log(fullName);

// escaping sequences in strings
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// concatenating strings with plus operator
let ourStr = "I come first. " + "I come second.";
console.log(ourStr);

// concatenating strings with plus equals operator
ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

// constructing strings with variables
let ourName = "Free Code Camp";
ourStr = "Hello, our name is " + ourName + ", how are you?";

// using ``
ourName = `'okiror samuel'`;
ourStr = `Hello, my name is ${ourName}, how are you?`;
console.log(ourStr);

console.log(ourName.length);

// indexing strings
firstName = "Charles";
let firstLetter = firstName[0];
console.log(firstLetter);

// create strings using template literals
const person = {
    name: "Samuel",
    age: 25
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


let s_name = "Samuel";

console.log(s_name.toUpperCase());
console.log(s_name.toLowerCase());


// string primitives
firstName = 'Samuel';
lastName = 'Okiror';

// string objects
firstName = new String('Samuel');
lastName = new String('Okiror');

// escape sequences
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr);

let surname = 'osamuel vinald osamuel vinald osamuel vinald';
console.log(surname);

let newSurname = surname.replaceAll('osamuel', 'Okiror samuel');
console.log(newSurname);

// substring
myString = 'Hello, World!';
console.log(myString.substring(1, 4));

// trim method
myString = '       Hello, World!       ';
console.log(myString.trim());

// split method
myString = 'Hello, World!';
console.log(myString.split(''));
console.log(myString.split(' '));
console.log(myString.split(','));

// replace method
myString = 'Hello, World!';
console.log(myString.replace('Hello', 'Hi'));

// match method
myString = 'Hello, World!';
console.log(myString.match('Hello'));


