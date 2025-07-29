"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj2 = exports.obj1 = void 0;
const module1_1 = require("./module1");
let obj = new module1_1.class_one();
// console.log(obj.var_one,obj.var_two)
// console.log(variable_one)
// console.log(variable_two)
// console.log(func_one());
class class_two {
    var_one = "react js ";
    var_two = "node js";
    func_one() {
        return "i am from interface module 1";
    }
}
exports.obj1 = new class_two();
console.log(exports.obj1.var_one, exports.obj1.var_two, exports.obj1.func_one()); //react js  node js i am from interface module 1
exports.obj2 = {
    sub_one: "reac js",
    sub_two: "recat js"
};
