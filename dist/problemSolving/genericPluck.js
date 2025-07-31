"use strict";
// Generic pluck Function
// Problem: Create a generic function called pluck that safely extracts a value for a given key from an array of objects. The function should be type-safe, meaning it should only allow you to pick keys that actually exist on the objects in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function pluck(items, key) {
    // ... implementation
    return items.map((item) => item[key]);
}
// Example Usage:
const users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 42 }
];
// Should return ['Alice', 'Bob', 'Charlie'] and be of type string[]
const names = pluck(users, 'name');
console.log(names);
// Should return [28, 35, 42] and be of type number[]
const ages = pluck(users, 'age');
console.log(ages);
// This should cause a compile-time error because 'address' is not a key of the user objects.
// const addresses = pluck(users, 'address');
