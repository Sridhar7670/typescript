"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum
//enum used to create custom constant
var Enum1;
(function (Enum1) {
    Enum1[Enum1["CONST1"] = 0] = "CONST1";
    Enum1[Enum1["CONST2"] = 1] = "CONST2";
    Enum1[Enum1["CONST3"] = 2] = "CONST3";
    Enum1[Enum1["CONST4"] = 3] = "CONST4";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.CONST1, Enum1.CONST2, Enum1.CONST3, Enum1.CONST4);
//0 1 2 3
//Enum1.CONST1 = 100;
//Cannot assign to 'CONST1' because it is a read-only property.
var Enum2;
(function (Enum2) {
    Enum2[Enum2["X"] = 1] = "X";
    Enum2[Enum2["Y"] = 2] = "Y";
    Enum2[Enum2["Z"] = 3] = "Z";
})(Enum2 || (Enum2 = {}));
console.log(Enum2);
// { '1': 'X', '2': 'Y', '3': 'Z', X: 1, Y: 2, Z: 3 }
var enum3;
(function (enum3) {
    enum3[enum3["CONST1"] = 100] = "CONST1";
    enum3[enum3["const2"] = 200] = "const2";
    enum3[enum3["const3"] = 300] = "const3";
})(enum3 || (enum3 = {}));
console.log(enum3);
// { '100': 'CONST1', '200': 'const2', '300': 'const3', CONST1: 100, const2: 200,const3: 300}
function fone(arg) {
    console.log(arg);
}
fone(enum3.CONST1);
fone(enum3.const2);
fone(enum3.const3); //100 200 300
var Enum4;
(function (Enum4) {
    Enum4["SUB"] = "ReactJS";
})(Enum4 || (Enum4 = {}));
let my_func = (param1) => {
    console.log(param1);
};
my_func(Enum4.SUB);
//if no structure is followed then it says enum must have initializer example
(function (Enum1) {
    Enum1[Enum1["X"] = 0] = "X";
    Enum1["Y"] = "Hello";
    // Z  Enum member must have initializer.
})(Enum1 || (Enum1 = {}));
