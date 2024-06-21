// regular expressions

// regular expressions are used to match patterns in strings

// regular expressions are declared using two forward slashes

// my regex

const regex = new RegExp('o');
const string1 = 'Hello World';
const string2 = 'Hey Uganda';  

console.log(regex.test(string1));
console.log(regex.test(string2));


let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// exec() - return result in an array or null
let result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true or false
result = re.test('Hello');
console.log(result);

// match() - return result array or null
let str = 'Hello there';
result = str.match(re);
console.log(result);

// search() - returns index of the first match if not found returns -1
str = 'Hello there';
result = str.search(re);
console.log(result);

// replace() - return new string with some or all matches of a pattern
str = 'Hello there';
const newStr = str.replace(re, 'Hi');
console.log(newStr);

// metacharacter symbols
re = /^h/i; // must start with
re = /world$/i; // must end with
re = /^hello$/i; // must start and end with
re = /h.llo/i; // matches any ONE character
re = /h*llo/i; // matches any character 0 or more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // escape character

// string to match
str = 'Hello';

// log results
result = re.exec(str);
console.log(result);

// character sets - used to match a character from a range
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/; // must be a G or F
re = /[^GF]ray/; // match anything except a G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit

// string to match
str = 'Gray';

// log results
result = re.exec(str);
console.log(result);

// quantifiers - specify number of characters to match
re = /hel{2}o/i; // must occur exactly {m} amount of times
re = /hel{2,4}o/i; // must occur exactly {m} amount of times
re = /hel{2,}o/i; // must occur at least {m} times

// string to match
str = 'Hello';

// log results
result = re.exec(str);
console.log(result);

// grouping - used to group together part of a regular expression
re = /([0-9]x){3}/;

// string to match
str = '3x3x3x';

// log results
result = re.exec(str);
console.log(result);