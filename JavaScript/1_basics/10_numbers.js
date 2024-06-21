// generate random fractions
function randomFraction() {
    return Math.random();
}

console.log(randomFraction())

// generate random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum())
// generate random whole numbers within a range

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom)

// use the parseInt function

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"))

// use the parseInt function with a radix (specifies the base of the number in the string)

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"))

// use the conditional (ternary) operator

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2))

// use multiple conditional (ternary) operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10))

// use recusion to create a countdown

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(5))

// use recusion to create a range of numbers

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

console.log(rangeOfNumbers(1, 5))

