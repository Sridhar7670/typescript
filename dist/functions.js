"use strict";
// 1. Named Function
// ====================================================================
// This is the standard way to declare a function.
// It has a name (`greet`), typed parameters, and a return type.
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("1. Named Function:", greet("Sridhar"));
// 2. Anonymous Function (Function Expression)
// ====================================================================
// A function without a name, assigned to a variable.
// TypeScript can often infer the types, but explicit typing is safer.
const getGreeting = function (name) {
    return `Welcome, ${name}!`;
};
console.log("2. Anonymous Function:", getGreeting("Sridhar"));
// 3. Arrow Function
// ====================================================================
// A concise syntax for writing functions. Very common in modern JS/TS.
const add = (a, b) => {
    return a + b;
};
// For single-line return statements, it can be even shorter:
const subtract = (a, b) => a - b;
console.log("3. Arrow Function (add):", add(10, 5));
console.log("   Arrow Function (subtract):", subtract(10, 5));
// 4. Optional Parameters
// ====================================================================
// Use a '?' to mark a parameter as optional.
// You must handle the case where the parameter is `undefined`.
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}
console.log("4. Optional Parameter (with last name):", buildName("Ravi", "Kumar"));
console.log("   Optional Parameter (without last name):", buildName("Sita"));
// 5. Default Parameters
// ====================================================================
// Provide a default value for a parameter if none is supplied.
// This makes the parameter effectively optional.
function calculateTax(amount, taxRate = 0.18) {
    return amount * taxRate;
}
console.log("5. Default Parameter (with default rate):", calculateTax(1000));
console.log("   Default Parameter (with custom rate):", calculateTax(1000, 0.25));
// 6. Rest Parameters
// ====================================================================
// Use the '...' syntax to gather an indefinite number of arguments
// into a single array.
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("6. Rest Parameters (3 numbers):", sumAll(1, 2, 3));
console.log("   Rest Parameters (5 numbers):", sumAll(10, 20, 30, 40, 50));
// Implementation (must handle all signatures)
function formatData(data) {
    if (typeof data === 'string') {
        return `String: ${data.toUpperCase()}`;
    }
    else if (typeof data === 'number') {
        return `Number: ${data.toFixed(2)}`;
    }
    else {
        return `Boolean: ${data ? 'Yes' : 'No'}`;
    }
}
console.log("7. Function Overloading (string):", formatData("hello"));
console.log("   Function Overloading (number):", formatData(123.456));
console.log("   Function Overloading (boolean):", formatData(true));
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
console.log("8. Function Type (multiply):", multiply(8, 4));
console.log("   Function Type (divide):", divide(8, 4));
// Additional 
// =====================
let func_one = () => { return "welcome to TS"; };
let res = func_one();
console.log(res);
