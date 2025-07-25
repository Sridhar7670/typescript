// TypeScript file for working with array of objects

// Step 1: Define a type (structure) of object
type Person = {
  id: number;
  name: string;
  age: number;
};

// Step 2: Create an array of objects of type Person
const people1: Person[] = [
  { id: 1, name: "Ravi", age: 25 },
  { id: 2, name: "Sita", age: 30 },
  { id: 3, name: "Gopal", age: 28 },
];

// Step 3: Find person by ID
const personFound = people1.find(p => p.id === 2);
console.log("Person with id 2:", personFound);

// Step 4: Filter persons who are 26 or older
const filteredPeople = people1.filter(p => p.age >= 26);
console.log("People age 26 or above:", filteredPeople);

// Step 5: List of only names
const namesOnly = people1.map(p => p.name);
console.log("Names list:", namesOnly);

// Step 6: Add new person (push alternative)
const newpersons: Person = { id: 4, name: "Radha", age: 22 };
const updatedPeoples = [...people1, newpersons];
console.log("After adding new person:", updatedPeoples);

// Step 7: Update age of person with id 1
const ageUpdated = updatedPeoples.map(p =>
  p.id === 1 ? { ...p, age: 26 } : p
);
console.log("After updating age for id 1:", ageUpdated);

// Step 8: Delete person with id 3
const afterDeletion = ageUpdated.filter(p => p.id !== 3);
console.log("After deleting person with id 3:", afterDeletion);

// Step 9: Check if someone is above 30
const hasAbove30 = ageUpdated.some(p => p.age > 30);
console.log("Anyone above 30?:", hasAbove30);

// Step 10: Find index of person with id 2
const index1 = ageUpdated.findIndex(p => p.id === 2);
console.log("Index of person with id 2:", index1);
