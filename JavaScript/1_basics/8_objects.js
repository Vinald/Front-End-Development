// objects in JS

// objects are similar to arrays, but instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

let cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["water", "dogs"]
};

// in this example, all the properties are stored as strings, such as - "name", "legs", "tails", and "enemies".

let anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

// access object properties with dot notation

// there are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

let myObj = {
    prop1: "val1",
    prop2: "val2"
};

let prop1val = myObj.prop1;
let prop2val = myObj.prop2;

// prop1val would have a value of "val1", and prop2val would have a value of "val2".

myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock"
};

myObj["Space Name"];
myObj["More Space"];

// object properties

// objects can have a special type of property, called a method.
// methods are properties that are functions. this adds different behavior to an object.


let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();
// using the dog object, give it a method called sayLegs. the method should return the sentence "This dog has 4 legs."

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

// alter the dog

let myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof"
};

// using objects for lookups
let alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A"
};

console.log(alpha[2]);
alpha[24];

let value = 2;
alpha[value];

const person = {
    name: "Samuel Vinald",
    age: 13,
    phone: 744444444,
    email: 'samuel@gmail.com',
};

console.log(person.name);