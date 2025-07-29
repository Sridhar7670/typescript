"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_one = exports.variable_one = void 0;
exports.func_one = func_one;
exports.variable_one = "hello world ";
let variable_two = "hello default module ";
exports.default = variable_two;
function func_one() {
    return "hello fucntion";
}
class class_one {
    var_one;
    var_two;
    var_three;
    constructor() {
        this.var_one = "ReactJS";
        this.var_two = "NodeJS";
        this.var_three = "MongoDB";
    }
}
exports.class_one = class_one;
console.log("i am mod 1");
