// if statement

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
console.log('\n')

// else if statement
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));
console.log(testElseIf(3));
console.log(testElseIf(12));
console.log('\n')

// logical order in if else statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}7

console.log(orderMyLogic(3));
console.log(orderMyLogic(7));
console.log(orderMyLogic(12));
console.log('\n')

// chaining if else statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(3));
console.log(testSize(7));
console.log(testSize(12));
console.log(testSize(17));
console.log(testSize(25));
console.log('\n')

// golf code
//
// golf code is a game where players try to get their ball in the hole using as few strokes as possible
//
// strokes are the number of times the player hits the ball
//
// the code below is for a function that takes a strokes argument and returns the name for the hole
//
// strokes return
// 1       "Hole-in-one!"
// <= par  "Eagle"
// par     "Birdie"
// 1 above "Bogey"
// 2 above "Double Bogey"
// >= 3    "Go Home!"
//

function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));
console.log('\n')

// switch statements
//
// switch statements are used to perform different actions based on different conditions
//
// switch statements are similar to if else statements
//
// switch statements are often used together with break or default keywords
//
// break keyword breaks out of the switch block
//
// default keyword specifies code to run if there is no case match
//
// switch statements are evaluated from top to bottom
//
// the break keyword tells javascript to stop executing statements
//

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log('\n')

// default option in switch statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log('\n')

// multiple identical options in switch statements
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));
console.log('\n')

// early exit with return
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));
console.log(abTest(2, -2));
console.log(abTest(2, 8));
console.log('\n')

// 8 cards
//
// 2, 3, 4, 5, 6 count as +1
// 7, 8, 9 count as 0
// 10, J, Q, K, A count as -1
//
// count variable keeps track of the score
//
// cards variable is an array of cards
//
// function cc takes a card parameter
//
// function cc returns a string and the current count

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            ++count;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            --count;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
console.log('\n')

// tenary operator
const myResult = 20 === 20 ? "Values match" : "Values dont match";
console.log(myResult)

const myResultq = 20 === "20" ? "Values match" : "Values dont match";
console.log(myResultq)