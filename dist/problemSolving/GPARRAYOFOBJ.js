"use strict";
// Group an Array of Objects by a Key
// Problem: Write a function that takes an array of objects and a key, and groups the objects into a new object based on the value of that key. The function should be generic and maintain type safety.
Object.defineProperty(exports, "__esModule", { value: true });
function groupBy(items, key) {
    return items.reduce((acc, item) => {
        const groupKey = item[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        // Return the accumulator for the next iteration.
        return acc;
    }, {});
}
// EXAMPLE USAGE
const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Apparel' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Jeans', category: 'Apparel' },
];
const groupedByCategory = groupBy(products, 'category');
console.log(groupedByCategory);
/*
Expected Output:
{
  "Electronics": [
    { "name": "Laptop", "category": "Electronics" },
    { "name": "Phone", "category": "Electronics" }
  ],
  "Apparel": [
    { "name": "Shirt", "category": "Apparel" },
    { "name": "Jeans", "category": "Apparel" }
  ]
}
*/
// 1911
