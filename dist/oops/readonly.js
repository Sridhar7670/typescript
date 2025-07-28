"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//readonly
//readonly is the "keyword" in "TypeScript"
//readonly is used to "read" the content but we can't "update" the content
//we can initilize "readonly" members with constructor
class class_one {
    var_one;
    constructor() {
        this.var_one = "Hello";
    }
}
let obj = new class_one();
console.log(obj.var_one);
// obj.var one = "welcome";
//Cannot assign to 'var_one' because it is a read-only property
//super
//super "keyword" used to call the "Parent class members"
//super keyword applicable to "constructor" and "functions"
class Parent {
    arg1;
    constructor(arg1) {
        this.arg1 = arg1;
    }
}
class Child extends Parent {
    param1;
    param2;
    constructor(param1, param2) {
        super(param1);
        this.param1 = param1;
        this.param2 = param2;
    }
}
let obj1 = new Child("Hello_1", "Hello_2");
console.log(obj1.param1, obj1.param2, obj1.arg1);
