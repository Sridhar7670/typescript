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
obj.func_two(); //func_one
obj.func_one(); //func_two
class class_one_1 {
    func_one() {
        return "func_one";
    }
}
class class_two_2 extends class_one_1 {
    func_two() {
        return "func_two";
    }
}
class class_three extends class_two_2 {
    func_three() {
        return "function class three";
    }
}
let obj_1 = new class_three();
console.log(obj_1.func_one(), obj_1.func_two(), obj_1.func_three());
class class_one_3 {
    func_one() {
        return "ReactJS";
    }
}
//as objects cannot be created to abstrcta clases create one more acess from there 
class class_two_3 extends class_one_3 {
    func_two() {
        return "Node js";
    }
}
let object = new class_two_3();
console.log(object.func_one(), object.func_two());
