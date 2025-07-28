"use strict";
//when ever we know only "declarations", but we dont know "implementations" then we will choose "interface"
// we will create interfaces with "interface" keyword
// implementations provided by either "child classes" or "json"
// child classes provides implementations with the help of "implements" keyword
Object.defineProperty(exports, "__esModule", { value: true });
class class_one {
    var_one = "welcome to interfaces"; // meaning it promises to provide the var_one property as defined in the interface.
}
let obj = new class_one();
console.log(obj.var_one);
let obj1 = {
    var_one: "Hello" //obj is declared and explicitly typed as interface1, then initialized with a var_one property set to the string "Hello".
};
console.log(obj1.var_one);
let obj2 = {
    var_one: "main class var",
    var_two: " extended from main"
};
console.log(obj2.var_one, obj2.var_two);
let obj3 = {
    var_one: "Hello_1",
    var_two: "Hello_2",
    var_three: "Hello_3"
};
console.log(obj3.var_one, obj3.var_two, obj3.var_three);
let obj6 = {
    func_one: () => {
        return 100;
    },
    func_two: () => {
        return 200;
    },
    func_three: () => {
        return 300;
    }
};
console.log(obj6.func_one(), obj6.func_two(), obj6.func_three()); //100 200 300
