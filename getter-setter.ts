// getters-setters-example.ts




// get (Getter): Value ni Chadavadaniki
// get anedi oka property yokka value ni bayataki ivvadaniki vaadatharu. 
// Idi oka function laaga raasina, manam daanini oka property laaga (parentheses () lekunda) vaadatham.

// Pani: Private property yokka value ni return cheyadam.

// set (Setter): Value ni Maaradaniki
// set anedi oka property yokka value ni update cheyadaniki vaadatharu. 
// Deeniki manam koththa value ni istham. Idi kuda function laaga raasina, manam daaniki value ni assign chestham.

// Pani: Koththa value ni teeskuni, adi correct o kaado check chesi (validation), 
// tarvathe private property ni update cheyadam.







class Employee {
  public name: string;

  // 1. Salary ni private ga pettamu. Bayata nunchi direct ga chudalemu, marchalemu.
  private _salary: number;

  constructor(name: string, initialSalary: number) {
    this.name = name;
    this._salary = initialSalary;
  }

  // 2. GETTER: salary ni chadavaడానికి (to read)
  // 'get' keyword tho start avuthundi.
  public get salary(): number {
    console.log(`Salary ni get chestunnam...`);
    // Ikkada manam private `_salary` ni return chestunnam.
    return this._salary;
  }

  // 3. SETTER: salary ni maaradaniki (to write/update)
  // 'set' keyword tho start avuthundi.
  public set salary(newSalary: number) {
    console.log(`Salary ni set chestunnam...`);
    // Validation: Salary eppudu 0 kante takkuva undakudadu.
    if (newSalary < 0) {
      console.log("Error: Salary negative ga undakudadu!");
      return; // Update cheyamu.
    }
    // Correct ayithe, private `_salary` ni update chestam.
    this._salary = newSalary;
  }
}

// --- Vaadakam (Usage) ---

const emp1 = new Employee("Sridhar", 50000);

// Getter ni vaadadam (chadavadam)
// Chusara? manam emp1.salary() ani rayaledu, emp1.salary ane raasam.
console.log(`${emp1.name} yokka salary: ${emp1.salary}`); // Output: 50000

// Setter ni vaadadam (maaradam)
// Ikkada kuda, manam value ni assign chestunnam.
emp1.salary = 60000;
console.log(`Koththa salary: ${emp1.salary}`); // Output: 60000

// Setter lo validation check cheddam
emp1.salary = -5000; // Idi error isthundi, and salary maaradu.
console.log(`Final salary: ${emp1.salary}`); // Output: 60000 (maaraledu)

// Private property ni direct ga access cheyalemu
// console.log(emp1._salary); // ERROR! Property '_salary' is private.