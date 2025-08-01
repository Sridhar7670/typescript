// generics-example.ts




// TypeScript

// function wrapNumberInBox(item: number): number[] {
//   return [item];
// }
// String kosam function:

// TypeScript

// function wrapStringInBox(item: string): string[] {
//   return [item];
// }
// Chusara? Rendu functions lo logic okate, kaani number kosam okati, string kosam inkokati rayalsi vachindi.
//  Idi chaala kashtam. "Ee samasyani any tho solve cheyochu kada?" anukunte, adi type-safe kaadu, chaala dangerous.








// 1. Generic Function
// Ikkada <T> anedi oka placeholder. Adi "nenu ye type ayina కావచ్చు" ani cheptundi.
function wrapInBox<T>(item: T): T[] {
  return [item];
}

// Ippudu ee okate function ni anni rakala types ki vaadochu.

// Number tho vaadadam
let numberBox = wrapInBox<number>(100);
console.log(numberBox); // Output: [100] (type is number[])

// String tho vaadadam
let stringBox = wrapInBox<string>("Hello Sridhar");
console.log(stringBox); // Output: ["Hello Sridhar"] (type is string[])

// TypeScript chaala telivainadi (smart), manam type cheppakapoina ade ardham chesukuntundi.
let booleanBox = wrapInBox(true);
console.log(booleanBox); // Output: [true] (type is boolean[])


// 2. Generic Class
// Oke logic ni classes ki kuda apply cheyochu.
// Ee Box class ye type of value ni ayina store chesukogaladu.
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  public getContent(): T {
    return this.content;
  }
}

// Number store chese Box
const numberBoxClass = new Box<number>(123);
console.log("Box lo unna number:", numberBoxClass.getContent());

// String store chese Box
const stringBoxClass = new Box<string>("Generics are awesome!");
console.log("Box lo unna string:", stringBoxClass.getContent());