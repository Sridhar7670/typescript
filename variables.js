// Basic variable with string value
var message = "Hello from TypeScript"; // Yeh ek simple string hai
// Number type
var age = 25; // Age ko number type diya hai
// Boolean value
var isLoggedIn = true; // True ya false hi lega, login status batata hai
// Array of numbers
var marks = [80, 90, 75]; // Sirf numbers ka array hai, string allowed nahi
// Array with both numbers and strings
var mixData = ["Roll No", 101, "Name", "Ravi"]; // String aur number dono chalenge
// Tuple - fixed order aur fixed type
var student = ["Ravi", 101]; // Pehla string, dusra number hona chahiye
// Enum - fixed set of options
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left; // Sirf Direction ke andar jo diya hai, wahi valid hoga
// Any type - kuch bhi chalega (not recommended always)
var randomValue = "Hello"; // Pehle string hai
randomValue = 10; // Ab number ho gaya
// Unknown - safer than any
var someValue = "Maybe a string"; // Type check karna padta hai before using
// Null & Undefined
var nothingHere = null;
var notDefinedYet = undefined; // Dono special types hain
// Object type
var person = {
    name: "Sita",
    age: 28
}; // Simple object with fixed structure
// Union type - ya to string ya number chalega
var id = "EMP123"; // Pehle string assign kiya
id = 500; // Ab number bhi de diya
// Literal type - sirf fixed values allowed
var direction = "left"; // Left ya right hi chalega, kuch aur nahi
// Function type - input aur return ka type defined
var greet = function (name) {
    return "Namaste " + name; // Naam leke greeting return karta hai
};
// Never type - jab kabhi function wapas nahi aata
function throwError(message) {
    throw new Error(message); // Error throw karta hai, return nahi karega kabhi
}
