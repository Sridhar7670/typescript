"use strict";
// generics
// generic functions typically use angle brackets (<>) to define type parameters. 
// generics are use to achieve "strict typing "
// generics are also used to decide "data type dynamically "
Object.defineProperty(exports, "__esModule", { value: true });
function func_one(param1, param2) {
    console.log(param1, param2);
}
func_one("ReactJS", "Angular");
class class_one {
    sub_one;
    sub_two;
    sub_three;
    constructor(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
}
let obj = new class_one("ReactJS", 99, "MongoDB");
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
class class_two {
    func_one(param1, param2) {
        console.log(param1, param2);
    }
}
let obj1 = new class_two();
obj1.func_one("Hello_1", "Hello_2");
let obj2 = {
    var_one: 100,
    var_two: 200
};
console.log(obj2.var_one, obj2.var_two); //100 200
class class_three {
    var_one = "Hello_1";
    var_two = "Hello_2";
}
let obj3 = new class_three();
console.log(obj3.var_one, obj3.var_two); //Hello_1 Hello_2
let obj4 = {
    var_one: "hello_1",
    var_two: 999,
    var_three: "hello_3",
    func_two: () => {
        console.log("hello_4");
    }
};
console.log(obj4.var_one, obj4.var_two, obj4.var_three);
obj4.func_two();
// hello_1 999 hello_3
// hello_4
