// boolean values
function welcomeToBooleans(){
    return false;
}

console.log(welcomeToBooleans());
console.log('\n')


// use conditional logic with if statements
function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}7

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
console.log('\n')


// comparison with the equality operator
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12"));
console.log('\n')

// comparison with the strict equality operator
function testStrict(val){
    if(val === 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict("7"));
console.log('\n')

// practice comparing different values
function compareEquality(a, b){
    if(a === b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10));
console.log('\n')

function compareEquality2(a, b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality2(10, "10"));
console.log(compareEquality2(10, 10));
console.log('\n')

// comparison with the inequality operator
function testNotEqual(val){
    if(val != 99){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
console.log(testNotEqual(99));
console.log('\n')

// comparison with the strict inequality operator
function testStrictNotEqual(val){
    if(val !== 17){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));
console.log('\n')

// comparison with the greater than operator
function testGreaterThan(val){
    if(val > 100){
        return "Over 100";
    }
    if(val > 10){
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log('\n')

// comparison with the greater than or equal to operator
function testGreaterOrEqual(val){
    if(val >= 20){
        return "20 or Over";
    }
    if(val >= 10){
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(20));
console.log(testGreaterOrEqual(21));
console.log('\n')

// comparison with the less than operator
function testLessThan(val){
    if(val < 25){
        return "Under 25";
    }
    if(val < 55){
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThan(10));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log('\n')

// comparison with the less than or equal to operator
function testLessOrEqual(val){
    if(val <= 12){
        return "Smaller Than or Equal to 12";
    }
    if(val <= 24){
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log('\n')

// comparisons with the logical and operator
function testLogicalAnd(val){
    if(val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log('\n')

// comparisons with the logical or operator
function testLogicalOr(val){
    if(val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(10));
console.log(testLogicalOr(9));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log('\n')

// else statements
function testElse(val){
    var result = "";
    if(val > 5){
        result = "Bigger than 5";
    }else{
        result = "5 or smaller";
    }
    return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log('\n')