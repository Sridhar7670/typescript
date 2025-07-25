"use strict";
//Inheritance
//Getting the data from Parent class to Child class called as Inheritance
//we will implement Inheritance with the help of "extends" keyword
//1) Single Level Inheritance
//2) Multi Level Inheritance
//3) Multiple Inheritance
//4) Hirarichal Inheritance
//5) Hybrid Inheritance
Object.defineProperty(exports, "__esModule", { value: true });
//Single Level Inheritance
class Parent {
    var_one = "Hello";
}
class Child extends Parent {
    var_two = "Welcome";
}
let p = new Parent();
console.log(p.var_one); //hello
let c = new Child();
console.log(c.var_one, c.var_two); //hello welcome
let p1 = new Child();
console.log(p1.var_one); //hello
// let c1:Child = new Parent();
//Property 'var_two' is missing in type 'Parent' but required in type 'Child'.
class Parent1 {
    func_one() {
        return "Parent Class";
    }
}
class Child1 extends Parent1 {
    func_two() {
        return "Child Class";
    }
}
class Subchild1 extends Child1 {
    func_three() {
        return "Subchild class";
    }
}
let obj = new Subchild1();
console.log(obj.func_one(), obj.func_two(), obj.func_three());
