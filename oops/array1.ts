// arrays.ts

// 1. Creating an array of strings
// The 'string[]' syntax denotes an array where every element must be a string.
const fruits: string[] = ["Apple", "Banana", "Orange"];

// An alternative generic syntax is 'Array<T>'.
const genericFruits: Array<string> = ["Apple", "Banana", "Orange"];

// 2. Accessing elements
console.log("Second fruit:", fruits[1]); // "Banana"

// 3. Adding elements
fruits.push("Mango"); // Adds an element to the end.
fruits.unshift("Pineapple"); // Adds an element to the start.
console.log("After push & unshift:", fruits);

// 4. Removing elements
fruits.pop(); // Removes the last element.
fruits.shift(); // Removes the first element.
console.log("After pop & shift:", fruits);

// 5. Finding an element's index
const orangeIndex = fruits.indexOf("Orange");
console.log("Index of 'Orange':", orangeIndex);

// 6. Checking if an element exists
const hasApple = fruits.includes("Apple");
console.log("Includes 'Apple'?", hasApple);

// 7. Iterating over the array
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index} is ${fruit}`);
});

// 8. Filtering the array
// 'filter' creates a new array with all elements that pass the test.
const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with names longer than 5 letters:", longNamedFruits);

// 9. Mapping the array
// 'map' creates a new array by transforming every element.
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", uppercaseFruits);

// 10. Reducing the array
// 'reduce' executes a reducer function on each element, resulting in a single output value.
const fruitSalad = fruits.reduce((salad, fruit) => `${salad}, ${fruit}`);
console.log("Fruit salad string:", fruitSalad);