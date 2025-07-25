// Basic variable with string value
const message: string = "Hello from TypeScript"; // Yeh ek simple string hai

// Number type
let age: number = 25; // Age ko number type diya hai

// Boolean value
var isLoggedIn: boolean = true; // True ya false hi lega, login status batata hai

// Array of numbers
const marks: number[] = [80, 90, 75]; // Sirf numbers ka array hai, string allowed nahi

// Array with both numbers and strings
let mixData: (string | number)[] = ["Roll No", 101, "Name", "Ravi"]; // String aur number dono chalenge

// Tuple - fixed order aur fixed type
const student: [string, number] = ["Ravi", 101]; // Pehla string, dusra number hona chahiye

// Enum - fixed set of options
enum Direction {
  Up,
  Down,
  Left,
  Right
}
const move: Direction = Direction.Left; // Sirf Direction ke andar jo diya hai, wahi valid hoga

// Any type - kuch bhi chalega (not recommended always)
let randomValue: any = "Hello"; // Pehle string hai
randomValue = 10; // Ab number ho gaya

// Unknown - safer than any
let someValue: unknown = "Maybe a string"; // Type check karna padta hai before using

// Null & Undefined
let nothingHere: null = null;
let notDefinedYet: undefined = undefined; // Dono special types hain

// Object type
const person: { name: string; age: number } = {
  name: "Sita",
  age: 28
}; // Simple object with fixed structure

// Union type - ya to string ya number chalega
let id: string | number = "EMP123"; // Pehle string assign kiya
id = 500; // Ab number bhi de diya

// Literal type - sirf fixed values allowed
const direction: "left" | "right" = "left"; // Left ya right hi chalega, kuch aur nahi

// Function type - input aur return ka type defined
const greet: (name: string) => string = (name) => {
  return "Namaste " + name; // Naam leke greeting return karta hai
};

// Never type - jab kabhi function wapas nahi aata
function throwError(message: string): never {
  throw new Error(message); // Error throw karta hai, return nahi karega kabhi
}
