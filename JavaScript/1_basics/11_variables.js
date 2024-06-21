// using var
var options = 'options'
var settings = 'settings'

console.log(options)
console.log(settings)

// using let
let option = 'options'
let setting = 'settings'

// using const
const options1 = 'options'
const settings1 = 'settings'

// use camelCase
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// use UPPERCASE for constants
var PI = 3.14;

// use descriptive names
// bad
function q() {
    // ...
}

// good
function query() {
    // ...
}

// freeze objects
const user = {
    name: 'Samuel',
    age: 25
};

Object.freeze(user);

// use destructuring assignment to assign variables from objects
var voxel = {
    x: 3.6,
    y: 7.4,
    z: 6.54
};
const {
    x: a,
    y: b,
    z: c
} = voxel;
console.log(a);
console.log(b);
console.log(c);

// use destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
    today: {
        min: 72,
        max: 83
    },
    tomorrow: {
        min: 73.3,
        max: 84.6
    }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    const {
        tomorrow: {
            max: maxOfTomorrow
        }
    } = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// use destructuring assignment to assign variables from arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

// use destructuring assignment with the rest operator to reassign array elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// use destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function () {
    return function half({
        max,
        min
    }) {
        return (max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));
