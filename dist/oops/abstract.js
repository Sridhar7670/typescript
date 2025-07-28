"use strict";
// abstract classes
Object.defineProperty(exports, "__esModule", { value: true });
// if we know "partial implmentations" then we will choose "abstract classes"
// "abstract" is the keyword used to create the "abstract" classes
// implementations provided by "child classes"
class class_one {
    func_one() {
        console.log("func_one");
    }
}
;
class class_two extends class_one {
    func_two() {
        console.log("func_two");
    }
}
let obj = new class_two();
obj.func_two();
obj.func_one();
