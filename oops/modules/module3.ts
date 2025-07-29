import { obj1, obj2 } from "./module2";
console.log("hello module 3")
console.log(obj1.var_one,obj1.var_two,obj1.func_one()) //react js  node js i am from interface module 1

// first module 1 is loaded into module 2 and then module 2 isLoaded into module 3 and then line 2,3 are executed
console.log(obj2.sub_one);