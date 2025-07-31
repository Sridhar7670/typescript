// specialTypes.ts - TypeScript lo pratyekamaina types

// ------------------- 1. any -------------------

/**
 * any:
 * Oka variable type 'any' ani set cheste, daaniki ye rakamaina value ayina (number, string, object) assign cheyavachu.
 * idi type-checking ni poorthiga nilipivesthundi. Anduke, deenni chaala jagrattaga vadali.
 * Paatha JavaScript code ni TypeScript loki marcheటప్పుడు idi upayogapaduthundi.
 */

let anything: any = "Hello, ela unnav?"; // Daaniki ippudu string assign chesamu

anything = 100; // Ippudu number assign chesamu (Error raadu)
anything = { name: "Sridhar", age: 30 }; // Ippudu object assign chesamu (Error raadu)

// 'any' tho vache pramaadam:
// 'toUpperCase' anedi number ki undadu, kani TypeScript compile time lo error chupadu.
// idi runtime lo crash avuthundi.
// anything.toUpperCase(); // Compiles, but crashes at runtime!


console.log("any type variable:", anything);


// ------------------- 2. unknown -------------------

/**
 * unknown:
 * idi 'any' ki (type-safe) alternative.
 * 'unknown' type variable ki kuda ye rakamaina value ayina assign cheyavachu.
 * Kani, aa variable type ni specify chese varaku (type narrowing) daanipai elanti operations cheyalemu.
 * idi bayata nunchi vachche data (API response, user input) kosam chaala upayogakaranga untundi.
 */

let uncertain: unknown = "idi oka string avvachu";

// Kindi line error isthundi, endukante 'uncertain' type inka teliyadu.
// uncertain.toUpperCase(); // Error: Object is of type 'unknown'.

// Type ni nirdharinchadam (Type Narrowing)
if (typeof uncertain === 'string') {
  // Ee block lo, TypeScript ki 'uncertain' oka string ani telusu.
  console.log("unknown nunchi string ga marchina tarvata:", uncertain.toUpperCase());
}


// ------------------- 3. void -------------------

/**
 * void:
 * Oka function ye value tirigi ivvanappudu (does not return a value), daani return type ga 'void' upayogistaru.
 * idi kevalam oka pani chestundi, kani result (pholitham) ivvadu.
 */

function logMessage(message: string): void {
  console.log(message);
  // 'return' keyword undadu
}

logMessage("Ee function emi return cheyadu.");


// ------------------- 4. never -------------------

/**
 * never:
 * Oka function eppatiki tirigi raadu ani soochinchadaniki 'never' upayogistaru.
 * idi rendu sandarbhalalo jaruguthundi:
 * 1. Function eppudu oka error throw chesinappudu.
 * 2. Function anantamaina loop lo (infinite loop) unnappudu.
 */

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Ee loop aagadu!");
  }
}

// Kindi function ni call cheste, program aagipothundi.
// throwError("Idi manam srushtinchina error.");
