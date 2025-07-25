"use strict";
// array.ts
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Creating an array of numbers
const numbers = [10, 20, 30, 40, 50];
// 2. Accessing elements
console.log("First element:", numbers[0]); // 10
// 3. Adding elements
numbers.push(60); // Add at end
numbers.unshift(5); // Add at start
console.log("After push & unshift:", numbers);
// 4. Removing elements
numbers.pop(); // Remove last
numbers.shift(); // Remove first
console.log("After pop & shift:", numbers);
// 5. Finding element index
const index = numbers.indexOf(30);
console.log("Index of 30:", index);
// 6. Checking if element exists
const has40 = numbers.includes(40);
console.log("Includes 40?", has40);
// 7. Iterating over array
numbers.forEach((num, i) => {
    console.log(`Element at ${i} is ${num}`);
});
// 8. Filtering array
const filtered = numbers.filter(num => num > 20);
console.log("Filtered > 20:", filtered);
// 9. Mapping array
const doubled = numbers.map(num => num * 2);
console.log("Doubled values:", doubled);
// 10. Reducing array (sum)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of elements:", sum);
// 11. Sorting array
const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sortedAsc);
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDesc);
// 12. Joining array elements into string
const joined = numbers.join(", ");
console.log("Joined array:", joined);
console.log("type of joined : ", typeof (joined));
// 13. Slicing array (copy a portion)
const sliced = numbers.slice(1, 4);
console.log("Sliced elements (index 1 to 3):", sliced);
// 14. Splicing array (remove and/or add elements)
const spliced = [...numbers]; // copy to not mutate original
spliced.splice(2, 2, 25, 35); // remove 2 at index 2, add 25 and 35
console.log("Spliced array:", spliced);
// 15. Find element by condition
const firstLarge = numbers.find(num => num > 25);
console.log("First number > 25:", firstLarge);
// 16. Find index by condition
const firstLargeIndex = numbers.findIndex(num => num > 25);
console.log("Index of first number > 25:", firstLargeIndex);
