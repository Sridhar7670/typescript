
// 1. Defining a tuple type
// This tuple must have exactly two elements: a string, followed by a number.
type StringNumberPair = [string, number];

// 2. Creating a tuple
// 'product' adheres to the StringNumberPair type definition.
let product: StringNumberPair = ["T-Shirt", 25];

// 3. Accessing elements
// Access is done via zero-based index, just like arrays.
console.log("Product Name:", product[0]); // "T-Shirt"
console.log("Product Price:", product[1]); // 25

// 4. Destructuring a tuple
// This is a very common and convenient way to work with tuple values.
const [productName, productPrice] = product;
console.log(`The product "${productName}" costs $${productPrice}.`);

// 5. Updating elements
// You can change the value of an element, but it must match the type defined for that position.
product[1] = 30; // OK, 30 is a number
// product[0] = 123; // Error: Type 'number' is not assignable to type 'string'.

console.log("Updated tuple:", product);

// 6. Optional tuple elements
// You can make elements optional by using the '?' suffix.
type RGBAColor = [number, number, number, number?];

let red: RGBAColor = [255, 0, 0, 1];
let green: RGBAColor = [0, 255, 0]; // The optional alpha channel is omitted.

console.log("Red color channel:", red);
console.log("Green color channel:", green);


// 7. Common Pitfall: Tuple methods
// While tuples have a fixed length, TypeScript allows array methods like `push` and `pop`.
// This can lead to breaking the tuple's fixed-length contract. It's a known limitation and generally should be avoided.
product.push("Extra"); // This will not cause a compile error, but it violates the tuple's definition.
console.log("Tuple after push (avoid this):", product);

//to escape this behaviour we use this 
type tuple= readonly [string,string,number] 

const array1:tuple =["5","hello",77]
console.log(array1);
// array1.push(99); //this would cause an error stating "Property 'push' does not exist on type 'tuple" as we used readOnly

