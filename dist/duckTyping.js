"use strict";
// interface Bird {
//     sound: string;
//     fly(): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Create a function that expects that structure.
function makeAnimalSpeak(animal) {
    console.log(`${animal.name} says: ${animal.speak()}`);
}
// Create objects that match the structure. Notice these objects don't explicitly say they are of type Animal.
// TypeScript
// This object has the required 'name' and 'speak' properties.
const dog = {
    name: "Buddy",
    speak: () => "Woof!"
};
// This object also has the same structure.
const cat = {
    name: "Whiskers",
    speak: () => "Meow!",
    purr: () => "prrrr" // It can even have extra properties.
};
// Use the function. TypeScript allows you to pass these objects because they structurally match the Animal interface.
makeAnimalSpeak(dog); // Works perfectly. Prints: "Buddy says: Woof!"
makeAnimalSpeak(cat); // Also works. Prints: "Whiskers says: Meow!"
// Enums (Enumerations)
// An enum is a way to define a set of named constants, making your code more readable and preventing errors from using magic numbers or strings. By default, enums are number-based, starting from 0.
// Example:
// Define an enum. Instead of using numbers like 0, 1, and 2 to represent a status, we give them meaningful names.
// TypeScript
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled"; // 3
})(OrderStatus || (OrderStatus = {}));
// Use the enum in your code. This makes your code self-documenting.
// Create an order object
const myOrder = {
    id: 123,
    status: OrderStatus.Pending // Use the enum member instead of the number 0
};
console.log(`Order status: ${myOrder.status}`); // Prints: "Order status: 0"
// Update the status
if (myOrder.status === OrderStatus.Pending) {
    myOrder.status = OrderStatus.Shipped;
    console.log("Order has been shipped!");
}
console.log(`New order status: ${myOrder.status}`); // Prints: "New order status: 1"
// This approach is much clearer and safer than writing if (myOrder.status === 0). If the underlying numbers ever changed, the code using the enum names would still work correctly
