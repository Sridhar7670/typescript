"use strict";
// OOPS
// 1) class
// 2) object
// 3) inheritance
// 4) polymorphism
// 5) encapsulation
// 6) abstraction
Object.defineProperty(exports, "__esModule", { value: true });
// class
// collection of "variables and functions" called as class
// encapsulation of variables and functions called as class
// we can create classes by using "class" keyword
// we can create object to the class by using "new" keyword
// typescript supports the 3 modifiers: 
// 1) public
// 2) private
// 3) protected
// public modifier recomended to functions
// private modifier recomended to variables
// EX:
// ===========================
class class_one {
    var_one = "Hello";
    func_one() {
        return "Welcome";
    } //"HELLO WELCOME"
}
let obj1 = new class_one();
console.log(obj1.var_one, obj1.func_one());
//acessing private variable
class class_two {
    var_one = "Hello";
    func_two() {
        return this.var_one;
    } //Hello
}
let obj2 = new class_two();
console.log(obj2.func_two());
//declaring and then initalizing values using constructors
class class_three {
    sub_one;
    sub_two;
    sub_three;
    constructor() {
        this.sub_one = "ReactJS with TypeScript";
        this.sub_two = "NodeJS with TypeScript";
        this.sub_three = "MongoDB with TypeScript";
    }
}
;
let obj3 = new class_three();
console.log(obj3.sub_one, obj3.sub_two, obj3.sub_three);
//parameterized constructor 
class class_4 {
    sub_one;
    sub_two;
    sub_three;
    constructor(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
}
// The obj1 object is initialized with the values "ReactJS", "NodeJS", and "MongoDB"
//  for sub_one, sub_two, and sub_three respectively. This demonstrates how to create an 
//  object from a class and pass arguments to its constructor in TypeScript.
let obj4_1 = new class_4("ReactJS", "NodeJS", "MongoDB");
console.log(obj4_1.sub_one, obj4_1.sub_two, obj4_1.sub_three);
let obj4_2 = new class_4("NEXT JS", "NEST JS", "POSTGRESS SQL");
console.log(obj4_2.sub_one, obj4_2.sub_two, obj4_2.sub_three);
// ReactJS NodeJS MongoDB.   4_1
// NEXT JS NEST JS POSTGRESS SQL. 4_2
class class_5 {
    var_one;
    var_two;
    var_three;
    constructor(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    func_one() {
        return this.var_one;
    }
    func_two() {
        return this.var_two;
    }
    func_three() {
        return this.var_three;
    }
}
let obj5 = new class_5("one", "two", "three");
console.log(obj5.func_one(), obj5.func_two(), obj5.func_three()); //. one two three
// we can only acess constructor values directly if we see obj constructor parameters are public best example
//Note: we can access "public arguments of constructor" with class "objects"
class class_6 {
    arg1;
    constructor(arg1) {
        this.arg1 = arg1;
    }
}
let obj6 = new class_6("Hello");
console.log(obj6.arg1); //hello
;
let obj = {
    sub_one: "ReactJS",
    sub_two: "NodeJS",
    sub_three: "MongoDB"
};
console.log(obj.sub_one, "\n", obj.sub_two, "\n", obj.sub_three);
let obj7 = {
    func_one: () => {
        console.log("this is from func 1 ");
    },
    func_two: () => {
        console.log("func_two");
    },
    func_three: () => {
        return "i am a string from func 3";
    }
};
obj7.func_one();
obj7.func_two();
console.log(obj7.func_three());
obj7.func_three(); //it will return but not print any 
