// errors

// 1. SyntaxError
// This is caused by the incorrect use of the rules of the language. It is often the result of a simple typo.

// 2. ReferenceError
// This error is thrown when a reference made to a variable/item is broken. That is, the item does not exist.

// 3. TypeError
// This error is thrown when a variable or parameter is not of a valid type.

// 4. RangeError
// This error is thrown when a value is not in the set or range of allowed values.

// 5. InternalError
// This error is thrown when an internal error in the JavaScript engine is thrown. For example: "too much recursion".

// 6. EvalError
// This error is thrown when an error occurs during the execution of code via eval().

// 7. URIError
// This error is thrown when an incorrectly encoded URI (Uniform Resource Identifier) is used.

// 1. SyntaxError example
let user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user);

// 2. ReferenceError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name);

// 3. TypeError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name.toUpperCase());

// 4. RangeError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name.toUpperCase(100));

// 5. InternalError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name.toUpperCase());

// 6. EvalError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name.toUpperCase());

// 7. URIError example
user = { name: 'Samuel', age: 25 };
user.name = 'Okiror';
console.log(user.name.toUpperCase());

// 8. try...catch
user = { name: 'Samuel', age: 25 };

try {
    user.name = 'Okiror';
    console.log(user.name.toUpperCase());
}
catch (error) {
    console.log(error);
}
finally {
    console.log('Finally runs regardless of result...');
}
