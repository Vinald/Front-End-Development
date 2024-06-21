function myName(){
    console.log("Hello World");
}

myName();

function myNameWithArgs(a, b){
    console.log(a + b);
}

myNameWithArgs(1, 2);

// scope
let myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    let output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
console.log('\n')
fun2();

// local scope and functions
function myLocalScope(){
    let myVar = 5;
    console.log(myVar);
}

myLocalScope();

// global vs local scope in functions
let outerWear = "T-Shirt";

function myOutfit(){
    let outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// return a value from a function with return
function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10));

// understanding undefined value returned from a function
let sum = 0;
function addThree(){
    sum = sum + 3;
}

console.log(addThree());

// assignment with a returned value
let changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

// stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log('\n')

const profile = (Name, age, phone, email) => {
    const person = {
        name: Name,
        age: age,
        phone: phone,
        email: email
    }

    const intro = `Hello, my name is ${person.name} \nI am ${person.age} years old \nmy phone number is ${person.phone} \nand my email is ${person.email}.`;

    return intro
}

console.log(profile("Samuel Vinald", 13, 744444444, 'samuel@gmail.com'));

function reverseWords(str) {
    const words = str.split(" ");
    const reversedWords = words.map((word) => {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        }
        return word;
    });
    return reversedWords.join(" ");
}

const inputs = "Just like the name of this Kata";
const outputs = reverseWords(inputs);
console.log(outputs);


function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}

const input = "This website is for losers LOL!";
const output = removeVowels(input);
console.log(output);

function reverseString(str) {
    return str.split("").reverse().join("");
}

function countSheep(sheepArray) {
    let count = 0;
    for (let i = 0; i < sheepArray.length; i++) {
        if (sheepArray[i] === true) {
            count++;
        }
    }
    return count;
}

const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
const sheepCount = countSheep(sheepArray);
console.log(sheepCount);

// name.toLo


function findSmallestInteger(arr) {
    return Math.min(...arr);
}

const array1 = [34, 15, 88, 2];
console.log(findSmallestInteger(array1)); // Output: 2

const array2 = [34, -345, -1, 100];
console.log(findSmallestInteger(array2)); // Output: -345


function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(2)); // Output: 3
console.log(summation(8)); // Output: 36
