"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// polymorhism 
// behave like many is called polymorphism 
// 1. function overloading 
// 2. fucntion overriding
//3. Static Methods. :Static methods belong to the class itself, not to any instance.
//function overriding
//overriding parent class functionality with child class functionality called as function overriding
class Parent {
    dbFunc() {
        return "data from oracle database soon";
    }
}
class Child extends Parent {
    dbFunc() {
        return "data from mongodb soon";
    }
}
let obj = new Child();
console.log(obj.dbFunc()); // data from mongodb soon
//function overloading
//same function name and same number of parameters but different datatype called as function overloading
class class_one {
    func_one(param1, param2) {
        console.log(param1, param2);
    } //is only there to handle all of the declared overloads. It won’t allow new call types unless you declare them too.
}
let obj_1 = new class_one();
obj_1.func_one("Hello_1", "Hello_2");
obj_1.func_one(100, 200);
obj_1.func_one("Hello", 100);
// obj_1.func_one(100, "Hello");
//No overload matches this call.
// Static methods are not polymorphic in the usual sense because they are not part of instance behavior.
// You call static methods on the class, not on objects created from the class.
// Relation to Polymorphism
// Static methods are not polymorphic in the usual sense because they are not part of instance behavior.
// However, they belong to the class's namespace and can be overridden in subclasses (called method hiding in some languages).
// static modifier applicable to "variables and functions"
//static members we can access directly by using "class name"
//we can't refer static members by using this keyword
//we can't initilize static members with constructor
class MathUtils {
    static square(x) {
        return x * x;
    }
}
console.log(MathUtils.square(5)); // 25
// class class_99{
// static var_one:string;
//     constructor(){
//     this.var_one = "Hello";
//     }
// }
//Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.
